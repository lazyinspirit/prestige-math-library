# Actual reconstructed mass-minimum lift: H(div) succeeds, weak curl does not yet close

Further targeted research, 2026-10-18. Research only; no canonical or workflow changes. This note uses the actual reconstruction R_h verified in `report.md`, not a changed MINI scheme. It addresses a distinct interface from the special-defect split.

Use b(v,s)=-(div v,s). The actual mass-minimum lift w=W_hq satisfies

    b(w,s_h)=(q,s_h),       (w,z_h)=0 for z_h in Z_h.       (1)

Let T_h=discontinuous P_d, including constants, and let S:T_h -> continuous P1 be the source's degree-one nodal averaging map. Ignore pressure means when writing S; constants pair trivially with divergence. Let S* be its actual L2 adjoint, with Q_h included in T_h by the natural inclusion.

## A proved grading-independent H(div) bound

The verified source identity gives, for psi in T_h,

    (div R_h w,psi)=(div w,S psi)=-(q,S psi).

The last identity uses (1), since S psi is continuous P1 and its constant part is immaterial. Consequently

    div R_h W_hq = -S* q.                              (2)

The averaging map satisfies

    ||S psi||_2 <= C ||psi||_2                           (3)

on every matching shape-regular mesh, including arbitrary grading. To check this directly, the averaged value at a vertex a is an arithmetic average of a bounded number of incident-cell polynomial nodal values. Fixed-degree reference-element norm equivalence bounds each nodal value squared by C |K|^{-1}||psi||_{2,K}^2. All incident cells have comparable volume by shape regularity, conformity, and the bounded number of cells in a vertex patch. On each output cell, affine-polynomial norm equivalence bounds the output norm by its volume times the sum of its vertex values squared. Sum over cells and use bounded patch overlap. No global inverse estimate is involved. The same proof permits any fixed uniformly bounded local averaging weights used by the source. Thus ||S*||_{2->2}<=C.

A uniformly H1-stable admissible MINI divergence lift L_hq exists from the established MINI inf-sup/Fortin construction, so mass minimality and Poincare give

    ||W_hq||_2 <= ||L_hq||_2 <= C||q||_2.

The reconstruction's already verified L2 stability then gives

    ||R_h W_hq||_{H(div)} <= C||q||_2.                  (4)

This is an actual proved estimate, independent of h_min. It requires no extra smoothness of the domain. It is valid for the reconstruction's normal-zero boundary convention.

## The actual discrete-curl compatibility audit

One may embed R_h V_h in a standard high-order H(div) space: on each cell its degree is at most d+1, and normal continuity holds, so it lies in BDM_{d+1}. This avoids incorrectly treating the MINI bubble itself as an RT_d field. Choose any compatible zero-tangential H(curl) space N_h whose curl maps to that BDM space (the analogous rotated scalar construction applies in dimension two). The discrete weak curl of R_h w is the Riesz representative of

    tau_h -> (R_h w,curl tau_h).                        (5)

Mass minimality in (1) annihilates actual MINI kernel tests. A general curl tau_h belongs to the BDM divergence-free space and is not a conforming MINI test. Even when curl tau_h happens to lie in Z_h, the reconstruction correction remains:

    (R_h w,curl tau_h)=-(C_h w,curl tau_h),
    C_h=I-R_h.                                        (6)

There is no source identity making (6) zero. The correction is patch-constant orthogonal, not orthogonal to the discrete-curl range.

More generally, with P_Z the actual L2 orthogonal MINI kernel projector,

    (R_h w,curl tau_h)
       =(w,(I-P_Z)curl tau_h)-(C_h w,curl tau_h).        (7)

Both terms are exact. The verified reconstruction estimates bound them only at the L2 scale of curl tau_h. Patch moment cancellation improves the second term to an oscillation of curl tau_h, but local inverse estimates for that oscillation retain one derivative of tau_h. They do not yield a bound C||q||_2||tau_h||_2.

The adjoint formulation locates the compatibility issue without an estimate: let R_h^*:L2->V_h denote the actual L2 adjoint. Then

    (R_h w,curl tau_h)=(w,R_h^*curl tau_h).

For (1) to annihilate this quantity directly, one would need R_h^*curl tau_h in Z_h. The proved commuting identity (2) for general inputs instead gives

    R_h^* D_h^* = -B_h^* S,

where D_h is the full polynomial divergence on the reconstructed output and B_h is the MINI weak divergence with the negative-divergence sign fixed above. This states that adjoint reconstructed gradients land in the MINI mass-gradient range. It does not state that adjoint discrete curls land in the MINI kernel. Taking adjoints cannot reverse that implication. No such adjoint-curl identity appears in the actual source construction or proof.

There is a safe grading-independent weighted-dual estimate, obtained without global h cancellation:

    |(R_h W_hq,curl tau_h)|
       <= C ||q||_2 [sum_K h_K^{-2}||tau_h||_{2,K}^2]^{1/2}.  (8)

Indeed apply Cauchy--Schwarz, (4)'s L2 part, and the cellwise fixed-degree inverse inequality for curl. Estimate (8) displays the derivative loss rather than hiding it in h_min. It is weaker than the uniform L2 discrete-curl bound required by the proposed Gaffney argument.

## Disposition

The reconstructed actual mass-minimum lift has the uniformly bounded H(div) norm in (4). The next proposed inference does not currently follow: mass minimality is against the MINI kernel, whereas the relevant discrete Gaffney curl tests live in a different exact polynomial complex. The source reconstruction preserves the divergence pairing but supplies no adjoint-curl compatibility or uniform L2 weak-curl estimate. Consequently it does not presently prove a grading-independent L3 bound for either R_h W_hq or W_hq. Transferring even an eventual L3 bound back to W_hq would additionally require suitable L3 control of C_h W_hq, which the verified L2 reconstruction bounds alone do not provide.

No generalized-Gaffney source theorem, global inverse-times-global-h cancellation, new supplier, or canonical consumer change is used. This is a positive H(div) result and an exact remaining curl mismatch, not a counterexample to the desired L3 estimate or to the original smooth pressure assertion.
