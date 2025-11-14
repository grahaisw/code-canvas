import { ProfileSidebar } from "@/components/ProfileSidebar";
import { ContentCarousel } from "@/components/ContentCarousel";

const Index = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar - 1/4 width */}
      <div className="w-full md:w-1/4 min-w-[280px] max-w-[400px] hidden md:block">
        <ProfileSidebar />
      </div>

      {/* Right Content Area - 3/4 width */}
      <div className="w-full md:w-3/4 flex-1">
        <ContentCarousel />
      </div>
      
      {/* Mobile Profile (shown on small screens) */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <div className="w-16 h-16 rounded-full overflow-hidden shadow-medium border-2 border-background">
          <img
            src="/src/assets/profile-photo.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
