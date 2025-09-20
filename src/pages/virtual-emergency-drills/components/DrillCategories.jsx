import React from 'react';

const DrillCategories = ({ 
  selectedCategory, 
  onCategorySelect,
  userProgress = {},
  className = '' 
}) => {
  // This is a placeholder for your Icon and Button components.
  // In a real application, you would import these from your component library.
  const Icon = ({ name, size, className, color }) => {
    // Placeholder logic for a simple icon.
    // In a real app, this would render a proper icon component.
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={{ color: color }}>
        <path d="M12 2L2 22h20L12 2z"></path>
      </svg>
    );
  };

  const Button = ({ variant, size, fullWidth, iconName, children }) => {
    // Placeholder for a simple button with Tailwind classes.
    const baseClasses = "rounded-lg font-medium transition-colors duration-200";
    const sizeClasses = size === "sm" ? "px-3 py-2 text-sm" : "px-4 py-2 text-base";
    const variantClasses = variant === "default" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50";
    const widthClasses = fullWidth ? "w-full" : "";
    
    return (
      <button className={`${baseClasses} ${sizeClasses} ${variantClasses} ${widthClasses}`}>
        {iconName && <Icon name={iconName} size={16} className="mr-2" />}
        {children}
      </button>
    );
  };


  const categories = [
    {
      id: 'all',
      name: 'All Drills',
      icon: 'Grid3x3',
      description: 'View all available emergency drills',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      count: 8
    },
    {
      id: 'fire-safety',
      name: 'Fire Safety',
      icon: 'Flame',
      description: 'Fire evacuation and safety protocols',
      color: 'text-error',
      bgColor: 'bg-error/10',
      count: 3,
      scenarios: ['building-fire', 'kitchen-fire', 'electrical-fire']
    },
    {
      id: 'earthquake',
      name: 'Earthquake Response',
      icon: 'Mountain',
      description: 'Earthquake preparedness and response',
      color: 'text-warning',
      bgColor: 'bg-warning/10',
      count: 2,
      scenarios: ['classroom-earthquake', 'outdoor-earthquake']
    },
    {
      id: 'flood',
      name: 'Flood Emergency',
      icon: 'Waves',
      description: 'Flood response and evacuation',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
      count: 2,
      scenarios: ['campus-flooding', 'flash-flood']
    },
    {
      id: 'medical',
      name: 'Medical Emergency',
      icon: 'Heart',
      description: 'First aid and medical response',
      color: 'text-success',
      bgColor: 'bg-success/10',
      count: 1,
      scenarios: ['first-aid-response']
    }
  ];

  const getCategoryProgress = (category) => {
    if (category?.id === 'all') {
      const allScenarios = categories?.flatMap(cat => cat?.scenarios || []);
      const completed = allScenarios?.filter(scenario => userProgress?.[scenario]?.completed)?.length;
      return { completed, total: allScenarios?.length };
    }
    
    const scenarios = category?.scenarios || [];
    const completed = scenarios?.filter(scenario => userProgress?.[scenario]?.completed)?.length;
    return { completed, total: scenarios?.length };
  };

  const getProgressPercentage = (category) => {
    const { completed, total } = getCategoryProgress(category);
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-card-foreground">Drill Categories</h3>
        <span className="text-sm text-muted-foreground">
          {categories?.reduce((sum, cat) => sum + (cat?.count || 0), 0)} total drills
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories?.map((category) => {
          const isSelected = selectedCategory === category?.id;
          const progress = getCategoryProgress(category);
          const progressPercentage = getProgressPercentage(category);

          return (
            <div
              key={category?.id}
              className={`
                flex flex-col bg-card border rounded-lg shadow-soft transition-smooth cursor-pointer hover:shadow-elevated
                ${isSelected ? 'border-primary ring-2 ring-primary/20' : 'border-border hover:border-primary/30'}
              `}
              onClick={() => onCategorySelect(category?.id)}
            >
              <div className="p-4 flex flex-col flex-grow">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${category?.bgColor}`}>
                      <Icon name={category?.icon} size={20} className={category?.color} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground">{category?.name}</h4>
                      <p className="text-xs text-muted-foreground">{category?.count} drills</p>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Check" size={14} color="white" />
                    </div>
                  )}
                </div>

                {/* Description - Made flex-grow to take up space consistently */}
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{category?.description}</p>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-card-foreground">
                      {progress?.completed}/{progress?.total}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${
                        progressPercentage >= 100 ? 'bg-success' : 
                        progressPercentage >= 50 ? 'bg-primary' : 'bg-warning'
                      }`}
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {progressPercentage}% complete
                  </div>
                </div>

                {/* Status Badge */}
                {progressPercentage === 100 && (
                  <div className="mt-3 flex items-center space-x-2">
                    <Icon name="CheckCircle" size={14} className="text-success" />
                    <span className="text-xs font-medium text-success">Category Completed</span>
                  </div>
                )}
              </div>
              {/* Quick Action */}
              <div className="px-4 pb-4">
                <Button
                  variant={isSelected ? "default" : "outline"}
                  size="sm"
                  fullWidth
                  iconName={progressPercentage > 0 ? "Play" : "ArrowRight"}
                >
                  {progressPercentage > 0 ? 'Continue' : 'Start'}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      {/* Category Stats */}
      <div className="bg-muted/50 rounded-lg p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-success">
              {categories?.reduce((sum, cat) => sum + getCategoryProgress(cat)?.completed, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">
              {categories?.reduce((sum, cat) => {
                const progress = getCategoryProgress(cat);
                return sum + (progress?.total - progress?.completed);
              }, 0)}
            </div>
            <div className="text-sm text-muted-foreground">Remaining</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-warning">
              {categories?.filter(cat => getProgressPercentage(cat) > 0 && getProgressPercentage(cat) < 100)?.length}
            </div>
            <div className="text-sm text-muted-foreground">In Progress</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent">
              {Math.round(categories?.reduce((sum, cat) => sum + getProgressPercentage(cat), 0) / categories?.length)}%
            </div>
            <div className="text-sm text-muted-foreground">Overall</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrillCategories;
