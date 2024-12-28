import Image from "next/image";

export const Logo = () => {
    return (
        <div>
            <Image
                aria-hidden
                src="/next.svg"
                alt="File icon"
                width={64}
                height={13}
            />
        </div>
    );
};
