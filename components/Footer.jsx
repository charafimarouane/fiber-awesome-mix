

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-5 text-center">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <p className="m-0">© 2024 safieniaagency. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="/privacy" className="text-white no-underline">Privacy Policy</a>
                    <a href="/terms" className="text-white no-underline">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
