import { motion } from 'framer-motion';
import { Shield, Lock, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Secure. Transparent.{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Reliable Voting
              </span>{' '}
              for Everyone.
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Experience the future of democratic participation with our blockchain-powered voting system.
              Secure, transparent, and accessible to all.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity">
                Voter Login
              </button>
              <button className="border-2 border-blue-500 text-blue-400 px-8 py-3 rounded-full font-semibold hover:bg-blue-500/10 transition-colors">
                Register to Vote
              </button>
            </div>
          </motion.div>

          {/* Right Column - Animated Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-blue-500" />}
              title="Secure"
              description="End-to-end encryption and blockchain technology ensure your vote is protected."
            />
            <FeatureCard
              icon={<Lock className="h-8 w-8 text-purple-500" />}
              title="Private"
              description="Your identity remains anonymous while maintaining vote verification."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-blue-500" />}
              title="Accessible"
              description="Vote from anywhere, anytime with our user-friendly platform."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-purple-500" />}
              title="Transparent"
              description="Public ledger ensures complete transparency and auditability."
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

export default Hero;