# Signed projection correction — first cycle

The label projection πΘ is measurable from (R×Θ, B(R)⊗T) to (Θ,T). Since w is measurable and ∫|w|dμ<∞, the weighted measures w+μ and w−μ are finite positive measures. Their pushforwards α and β are therefore finite positive measures, and h1=α−β is a finite signed measure. Nothing makes α and β mutually singular after projection: different particles with opposite w can share the same θ.

For each measurable B and every countable measurable partition (Bj) of B,

    Σj |h1(Bj)| = Σj |α(Bj)−β(Bj)| ≤ α(B)+β(B).

The partition definition of total variation gives |h1|(B)≤α(B)+β(B). Thus λμ=(πΘ)#(|w|μ) dominates |h1|. Integration against any bounded nonnegative measurable Vtilde gives ∫Vtilde d|h1|≤∫|w|Vtilde(θ)dμ. The strict witness on the one-point measurable space Θ={θ} is μ=δ(1,θ)+δ(−1,θ): h1=0, α=β=δθ and λμ=2δθ. Its |w| penalty with Vtilde=1 is 2; the zero measure has the same projection and penalty 0. Therefore the signed projection does not determine that penalty.

The true Jordan parts of a fixed signed measure are unique. They must not be identified with α and β unless mutual singularity has separately been proved. The relaxed-objective minimizing lift legitimately uses the true Jordan parts of ν at w=±1; that particular lift has no cancellation. The stationary-limit and escape arguments cannot use αt=ht+ or βt=ht− for an arbitrary evolving lift.

This is a local proof of the projection/decomposition repair. It does not solve the native author's distinct stationarity, sign-specific escape or penalty-convergence obligations. Those authoring escalations remain visible.

Source reading: read the complete Chizat–Bach Appendix A.2.1, including Propositions A.2–A.4 and proofs, from the authoritative full-paper extraction already retained in research/statistics-ml-scaffold-audit-2026-10-12/learning/source-recovery/chizat-bach-optimal-transport-overparameterization.txt. The source distinguishes its positive lift measures with tildes from Jordan parts in Proposition A.4; this proposal preserves that distinction. Read the actual local total-variation definition and Jordan/variation supplier proofs for the comparison. They inform the correction; no new audit of their publication metadata is claimed.
