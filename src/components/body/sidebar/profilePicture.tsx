import Image from 'next/image';

const ProfilePicture: React.FC = () => {
    return (
        <Image
          src="/profile.jpeg"
          width={200}
          height={200}
          alt="Miguel Cobo Profile picture"
          style={{
            borderRadius: 100,
          }}
        />
      )
}

export default ProfilePicture;