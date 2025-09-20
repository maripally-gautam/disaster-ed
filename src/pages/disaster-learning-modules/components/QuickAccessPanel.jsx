import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickAccessPanel = ({ recentModules = [], bookmarkedContent = [] }) => {
  const navigate = useNavigate();

  const quickActions = [
    {
      id: 'assessment',
      title: 'Take Assessment',
      description: 'Test your knowledge',
      icon: 'ClipboardCheck',
      path: '/preparedness-assessment',
      color: 'bg-primary text-primary-foreground'
    },
    {
      id: 'drills',
      title: 'Virtual Drills',
      description: 'Practice emergency response',
      icon: 'Play',
      path: '/virtual-emergency-drills',
      color: 'bg-secondary text-secondary-foreground'
    },
    {
      id: 'alerts',
      title: 'Emergency Alerts',
      description: 'Stay informed',
      icon: 'AlertTriangle',
      path: '/real-time-alerts',
      color: 'bg-warning text-warning-foreground'
    }
  ];

  const handleActionClick = (path) => {
    navigate(path);
  };

  const handleModuleClick = (moduleId) => {
    navigate(`/disaster-learning-modules/${moduleId}`);
  };

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="bg-card border border-border rounded-lg shadow-soft p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
          <Icon name="Zap" size={20} className="mr-2 text-primary" />
          Quick Actions
        </h3>
        <div className="grid gap-3">
          {quickActions?.map((action) => (
            <Button
              key={action?.id}
              variant="outline"
              className="justify-start h-auto p-4 hover:shadow-soft transition-smooth"
              onClick={() => handleActionClick(action?.path)}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${action?.color}`}>
                <Icon name={action?.icon} size={20} />
              </div>
              <div className="text-left">
                <div className="font-medium text-card-foreground">{action?.title}</div>
                <div className="text-xs text-muted-foreground">{action?.description}</div>
              </div>
              <Icon name="ChevronRight" size={16} className="ml-auto text-muted-foreground" />
            </Button>
          ))}
        </div>
      </div>
      {/* Recent Modules */}
      {recentModules?.length > 0 && (
        <div className="bg-card border border-border rounded-lg shadow-soft p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
            <Icon name="Clock" size={20} className="mr-2 text-primary" />
            Continue Learning
          </h3>
          <div className="space-y-3">
            {recentModules?.slice(0, 3)?.map((module) => (
              <div
                key={module.id}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-smooth"
                onClick={() => handleModuleClick(module.id)}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={module.icon} size={16} className="text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-card-foreground truncate">{module.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {module.progress}% complete • Last accessed {module.lastAccessed}
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                    <Icon name="Play" size={14} className="text-muted-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Bookmarked Content */}
      {bookmarkedContent?.length > 0 && (
        <div className="bg-card border border-border rounded-lg shadow-soft p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
            <Icon name="Bookmark" size={20} className="mr-2 text-primary" />
            Bookmarked
          </h3>
          <div className="space-y-3">
            {bookmarkedContent?.slice(0, 3)?.map((item) => (
              <div
                key={item?.id}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-smooth"
                onClick={() => handleModuleClick(item?.moduleId)}
              >
                <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Bookmark" size={14} className="text-warning" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-card-foreground truncate">{item?.title}</div>
                  <div className="text-xs text-muted-foreground truncate">
                    {item?.type} • {item?.moduleName}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Study Tips */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-lg shadow-soft p-6">
        <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
          <Icon name="Lightbulb" size={20} className="mr-2 text-warning" />
          Study Tip
        </h3>
        <div className="space-y-3">
          <p className="text-sm text-card-foreground">
            "Practice makes perfect! Complete virtual drills regularly to reinforce your learning and build muscle memory for emergency situations."
          </p>
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Icon name="User" size={12} />
            <span>Dr. Priya Sharma, Disaster Management Expert</span>
          </div>
        </div>
      </div>
      {/* Emergency Contacts Quick Access */}
      <div className="bg-error/5 border border-error/20 rounded-lg shadow-soft p-6">
        <h3 className="text-lg font-semibold text-error mb-4 flex items-center">
          <Icon name="Phone" size={20} className="mr-2" />
          Emergency Contacts
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-card-foreground">National Emergency</span>
            <span className="font-mono font-medium text-error">112</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-card-foreground">Fire Department</span>
            <span className="font-mono font-medium text-error">101</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-card-foreground">Police</span>
            <span className="font-mono font-medium text-error">100</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-card-foreground">Medical Emergency</span>
            <span className="font-mono font-medium text-error">108</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickAccessPanel;