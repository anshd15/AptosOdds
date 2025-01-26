import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';
const WalletConnectBtn = () => {
	const navigate = useNavigate();
	const getAptosWallet = () => {
		if ('aptos' in window) {
			return window.aptos;
		} else {
			toast.error('Petra Wallet not found! Please install');
			window.open('https://petra.app/', `_blank`);
		}
	};
	const handleConnect = async () => {
		const wallet = getAptosWallet();
		try {
			const response = await wallet.connect();
			console.log(response); // { address: string, address: string }

			const account = await wallet.account();
			console.log(account); // { address: string, address: string }
			
			toast.success('Connected to wallet');
			navigate('/auth/details', { state: { walletAddress: account.address } });
		} catch (error) {
			toast.error('Failed to connect wallet');
		}
	};
	return (
		<div
			onClick={handleConnect}
			className='py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-600 bg-blue-500 w-fit absolute top-4 right-4 text-white transition-all'
		>
			Connect Wallet
		</div>
	);
};

export default WalletConnectBtn;
