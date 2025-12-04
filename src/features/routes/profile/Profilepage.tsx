import profile from "@/../public/profile.png";
import "@/features/routes/profile/profilepage.css";
import TableRow from "@/features/routes/profile/TableRow";
import BackgroundImage from "@/utils/backgroundImage";
import HorizontalLine from "@/utils/HorizontalLine";

const carrer = `高校時代まで、愛知県の田舎町（豊川市）で生まれ育った
小学時代はわんぱく少年で親に迷惑かけることもしばしば
中・高校時代はひたすら勉学に励む
大学在学中に色々なアルバイトを経験
4年次に安くて美味いサイゼリヤに出会う
現在はITエンジニアとして、日々奮闘中`;

const ProfilePage = () => {
  return (
    <div className="profile-page" style={BackgroundImage(profile)}>
      <div className="profile-title">プロフィール</div>
      <table className="profile-table">
        <tbody>
          <TableRow title="ステータス" item="リニューアル中..." />
        </tbody>
      </table>
      <HorizontalLine />
    </div>
  );
};

export default ProfilePage;
