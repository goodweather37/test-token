-- CreateTable
CREATE TABLE "WalletAddresses" (
    "id" SERIAL NOT NULL,
    "walletAddress" TEXT NOT NULL,
    "reward1" INTEGER NOT NULL,
    "reward2" INTEGER NOT NULL,
    "reward3" INTEGER NOT NULL,
    "reward4" INTEGER NOT NULL,
    "reward5" INTEGER NOT NULL,
    "reward6" INTEGER NOT NULL,
    "reward7" INTEGER NOT NULL,
    "reward8" INTEGER NOT NULL,
    "reward9" INTEGER NOT NULL,
    "reward10" INTEGER NOT NULL,
    "reward11" INTEGER NOT NULL,
    "reward12" INTEGER NOT NULL,
    "reward13" INTEGER NOT NULL,
    "reward14" INTEGER NOT NULL,
    "reward15" INTEGER NOT NULL,
    "reward16" INTEGER NOT NULL,
    "reward17" INTEGER NOT NULL,
    "reward18" INTEGER NOT NULL,
    "reward19" INTEGER NOT NULL,
    "reward20" INTEGER NOT NULL,
    "reward21" INTEGER NOT NULL,
    "reward22" INTEGER NOT NULL,
    "reward23" INTEGER NOT NULL,
    "reward24" INTEGER NOT NULL,
    "reward25" INTEGER NOT NULL,
    "reward26" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "WalletAddresses_pkey" PRIMARY KEY ("walletAddress")
);

-- CreateIndex
CREATE UNIQUE INDEX "WalletAddresses_walletAddress_key" ON "WalletAddresses"("walletAddress");
