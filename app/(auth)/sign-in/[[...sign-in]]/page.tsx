import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div style={styles.container}>
        <SignIn />
      </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Full viewport height
    backgroundColor: '#f5f5f5', // Optional: Background color
  }
};
