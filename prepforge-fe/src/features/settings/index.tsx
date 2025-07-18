import React from 'react';
import { useSettingsLogic } from './hooks/useSettingsLogic';
import NotificationToast from './components/NotificationToast';
import LoadingSpinner from './components/LoadingSpinner';
import ProfileSection from './components/ProfileSection';
import AccountDetailsSection from './components/AccountDetailsSection';
import SecuritySection from './components/SecuritySection';
import LeetCodeSection from './components/LeetCodeSection';
import ActionsSection from './components/ActionsSection';

const SettingsPage: React.FC<any> = ({isDarkMode}) => {

    const {
        // State
        userData,
        loading,
        passwordChangeLoading,
        editing,
        showPasswords,
        formData,
        notifications,
        leetcodeRefreshedAt,

        // Actions
        handleEdit,
        handleSave,
        handleCancel,
        handlePasswordChange,
        handleLogout,
        togglePasswordVisibility,
        updateFormField
    } = useSettingsLogic();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!userData) {
        return (
            <div className={`min-h-screen bg-transparent ${isDarkMode ? 'text-white': 'text-gray-800'} p-6 flex items-center justify-center`}>
                <span className="text-lg">No user data available</span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-transparent text-white p-4">
            {/* Notifications */}
            {notifications.map(notification => (
                <NotificationToast key={notification.id} notification={notification} />
            ))}

            <div className="mx-auto">
                <ProfileSection
                    userData={userData}
                    formData={formData}
                    editing={editing}
                    onEdit={handleEdit}
                    onSave={handleSave}
                    onCancel={handleCancel}
                    onFormChange={updateFormField}
                    isDarkMode={isDarkMode}
                />

                <AccountDetailsSection 
                userData={userData} 
                isDarkMode={isDarkMode} />

                <SecuritySection
                    formData={formData}
                    showPasswords={showPasswords}
                    passwordChangeLoading={passwordChangeLoading}
                    onFormChange={updateFormField}
                    onTogglePasswordVisibility={togglePasswordVisibility}
                    onPasswordChange={handlePasswordChange}
                    isDarkMode={isDarkMode}
                />

                <LeetCodeSection
                    leetcodeRefreshedAt={leetcodeRefreshedAt}
                    isDarkMode={isDarkMode}
                />

                <ActionsSection 
                onLogout={handleLogout}
                isDarkMode={isDarkMode}
                />
            </div>
        </div>
    );
};

export default SettingsPage;