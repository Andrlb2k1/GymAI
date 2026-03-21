import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Button } from "../components/ui/Button";
import { RefreshCcw } from "lucide-react";

export default function Profile() {
    const { user, isLoading, plan } = useAuth();

    if (!user && !isLoading) {
        return <Navigate to="/auth/sign-in" replace />
    }

    if (!plan) {
        return <Navigate to="/onboarding" replace />
    }

    function formatDate(dateString: string) {
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    }


    return <div className="min-h-screen pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl font-bold mb-1">Your Training Plan</h1>
                    <p className="text-[var(--color-muted)]">
                        Version {plan.version} • Created {formatDate(plan.createdAt)}
                    </p>
                </div>

                <Button
                    variant="secondary"
                    className="gap-2"
                >
                    <RefreshCcw className="w-4 h-4" />
                    Regenerate Plan
                </Button>
            </div>
        </div>
    </div>
}