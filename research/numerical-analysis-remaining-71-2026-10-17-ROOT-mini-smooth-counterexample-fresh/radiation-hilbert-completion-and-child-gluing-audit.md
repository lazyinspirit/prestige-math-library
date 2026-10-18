# Infinite-radiation Hilbert completion and actual child gluing audit

Research proof/audit, 2026-10-18. This independently checks the original owner's `radiation-consistent-two-driver-embedding.md`. It validates the finite-energy correction and actual limiting-child gluing, with two explicit interpretation repairs below. It does not identify the radiation exterior with the historical finite grounded ring, prove its reflection defect small, or close the recursive pressure argument. No canonical/runtime edits, grids, tests or gates.

## 1. The two interpretation repairs

First, bounded support means bounded SPATIAL support, not finitely many stabilized cells or degrees of freedom inside the infinite-depth child. Keep the already proved actual V_infinity/Q_infinity spaces throughout the child, allowing all of their stabilized annuli. Cut off only at large spatial radius, where the mesh is uniform. A cutoff setting pressure to zero at the interior accumulation set could impose an unproved extra capacity condition and is not used. The owner has incorporated this clarification.

Second, the incident plane layer and total field are not globally L2. Their homogeneous equations are imposed on bounded-spatial-support tests, equivalently every actual local interior row. The finite-energy correction and differences of two radiation solutions are the objects on which the GLOBAL Hilbert variational identities and energy test are valid. No global integral (I_eta,v) is asserted for an arbitrary L2 test v.

## 2. Precise composite spaces and closedness

Glue the fixed uniform upper-halfplane exterior and actual finite coarse transition to the prior actual limit-child spaces, with their fixed interface polynomial traces matching. Let V be the L2 closed space of those actual velocities with zero entire geometric-base nodal trace. Let Q consist of locally H1 actual P1 potentials on the composite space, with zero entire base trace and gradient in L2. Norm Q by ||grad q||2.

The elementary one-dimensional Hardy inequality gives

    integral |q|²/y² <=4 integral |partial_y q|².        (1)

It is valid for locally H1 zero-base functions with finite gradient energy: apply the vertical identity on [0,Y]; its terminal boundary term is nonpositive, so no prescribed pointwise decay at infinity is needed. Then let Y increase. Consequently gradient-Cauchy sequences are locally H1-Cauchy on bounded strips, have a unique zero-base potential, and preserve the actual local polynomial/interface constraints. Thus Q is a Hilbert space and its gradient range G is closed in L2. Fixed-cell coefficient continuity proves V closed as well. Limit velocities need not be globally H1; this is precisely the already defined actual limit space.

Let chi_R be one inside radius R, zero beyond2R, with gradient O(1/R), where R is beyond the whole coarse transition and child. On the uniform exterior use actual nodal P1 interpolation of chi_R q, leaving q EXACTLY unchanged throughout the child. The fixed uniform reference cells give

    ||grad(q-I_h(chi_R q))||2
       <=C||grad q||_(radius>R-Ch)
          +(C/R)||q||_(R-Ch<radius<2R+Ch).              (2)

On the annulus y<=C R, the last term is at most C||q/y|| on that annulus. Both tails tend to zero by (1). This proves bounded-spatial-support density in Q. Velocity coefficient cutoffs on the same exterior are uniformly L2 bounded by local mass equivalence and converge by their L2 tails. Neither density argument cuts off near the child's accumulation set.

## 3. Exact uniform mass inf-sup in the completion

For q in Q, define the actual cell bubble field

    Bq|K=beta_K grad q|K,
    beta_K=60 lambda_0 lambda_1 lambda_2,
    mean beta_K=1,       mean beta_K²=gamma=10/7.

Every gradient is constant on a stabilized cell. The field has zero facet trace on every cell, is in V, and satisfies for all psi in Q

    (Bq,grad psi)=(grad q,grad psi),
    ||Bq||2=sqrt(gamma)||grad q||2.                      (3)

This includes all limit-child annuli and the infinite uniform exterior. Formula (3) proves gradient-pairing inf-sup >=1/sqrt(gamma), with no domain-size, mesh-angle or child-depth constant.

For bounded residuals

    |F(v)|<=f||v||2,       |ell(q)|<=l||grad q||2,

solve

    (u,v)+(v,grad p)=F(v),
    (u,grad q)=ell(q).                                  (4)

One explicit Hilbert construction is useful. Let f_V be the V-Riesz representative of F and chi the Q-Riesz representative of ell. Set v_ell=Bchi. If Z is the closed kernel of the gradient pairing, then

    u=P_Z f_V+(I-P_Z)v_ell.

It has the prescribed moments and solves the momentum equation on Z. The functional F-(u,.) vanishes on Z and has a unique pressure-gradient representative by (3). In particular

    ||u||2 <=(f²+gamma l²)^(1/2),
    ||grad p||2<=sqrt(gamma)(f+||u||2).                 (5)

This proves the required uniform correction bound, not just formal solvability of a saddle system. For zero residuals, testing with u and p gives u=0, then (3) gives grad p=0; zero base trace/Hardy fixes p=0.

## 4. Residual, restoration and the exact radiation class

The owner's construction is

    W_0=(1-J_v)I_v+E_g,
    p_0=(1-J_p)I_p,

with the cutoffs equal one through the entire child/transition and zero outside4r. There is no interpolation of a uniform field on a skinny coarse cell. E_g has base trace zeta eta, zero means on every actual cell, and is supported near base length O(r). Thus W_0 has the full constant base velocity eta and p_0 has base pressure zero.

On bounded-support tests its residual is compact: the exact uniform incident equations cancel outside the cutoff region. The proved full-MINI commutator estimate and cell-mean-neutral lift give

    f+l <=C[r sqrt(a)+sqrt(h r)+h]|eta|.                (6)

The normal incident pressure VALUE O(h|eta_n|), including its constant far-height offset in its base-zero gauge, contributes the h term through the cutoff gradient. It is not estimated as though the whole incident layer were globally L2. The incident velocity and pressure-gradient mass in tangential length O(r) give sqrt(h r). E_g contributes only its mass load, since its weak moments vanish against EVERY actual P1 pressure.

Use (4) with the NEGATIVE compact residual. Then W=W_0+u, p=p_0+delta p solve every local source-free equation, including all interior child rows. Outside the coarse perturbation,

    W-I_v=-J_v I_v+E_g+u,
    grad(p-I_p)=-grad(J_p I_p)+grad delta p,

which are finite-energy differences. Inside the child W_0=E_g, p_0=0, so (5)--(6) give

    ||W||_(L2(child))<=C[r sqrt(a)+sqrt(h r)+h]|eta|.

Choosing h<=c a r, a<=1, makes this <=C r sqrt(a)|eta|. The exact prescribed root value eta and actual root fan area >=c a r² give the matching lower bound by the local actual mass Gram. Thus the sharp ideal two-driver energy normalization follows for radiation as well.

No interior source is left behind by E_g: its mass residual inside the child is explicitly canceled by u,delta p. No weak moment is silently removed: the compact cutoff moment ell is an input in (4), not assumed zero. The source-free TOTAL equations are asserted on local/compact tests; the global correction equations are (4).

## 5. Limit-child elimination and every reaction

For each actual finite-depth child C_m, the preceding argument is an ordinary infinite-exterior Hilbert mixed problem with a locally finite mesh. Its compact source and boundary lifts are fixed on stabilized near-base cells and the common uniform annulus. The actual finite-depth response spaces converge to the glued composite spaces: use the prior strong velocity and pressure recoveries INSIDE the fixed child, matching its seven-node trace exactly, and leave the exterior unchanged. The pressure convergence is in global gradient norm; Hardy supplies the compatible local H1 potentials.

The bubble right inverse (3) corrects the constraint residual exactly, so the prior actual constrained-Mosco proof applies to this composite Hilbert problem as well. It yields strong velocity and pressure-gradient response convergence. This is a nonnested child-space argument, not monotone Galerkin convergence. Independent radial far exhaustion is justified by (2) and the velocity cutoff; choose a diagonal sequence if both approximations are performed together.

There is also a direct finite-port formulation. Prescribe the actual finite-dimensional child/interface velocity and pressure trace, use compact exterior trace extensions, and solve the exterior homogeneous correction with (4). It defines a finite radiation reaction matrix. Glue it to the already proved D_infinity child matrix by identifying traces and summing all free interface reactions. A zero retained-interface state in the assembled homogeneous Schur kernel would glue to a zero-base finite-energy homogeneous pair on the whole composite domain. Uniqueness from (5) makes it zero, so the retained finite interface block is invertible. Thus this gluing gives EXACTLY the preceding Hilbert solution.

Only genuinely free interface rows are summed to zero. The prescribed entire flat base retains its velocity AND pressure reactions; none is set to zero as an extra equation. Child base trace values belong to those prescribed base data. Every seven-node reaction is defined by a bounded-spatial-support extension and is independent of the extension by the local source-free equations. Consequently strong local response convergence gives convergence of all actual child trace and reaction coefficients. A pressure gauge is fixed by zero entire base trace, not by discarding a scalar reaction.

The resulting E_infinity(D), J_infinity and incident driver are therefore well-defined for the SAME radiation class as the halfplane Green construction. They are distinct from a finite ring grounded at its far boundary. No equality with the historical finite E_R is needed or claimed.

## Audit outcome

After the spatial-support and local-versus-global-test clarifications, no additional obstruction was found in the stated infinite-radiation existence, uniqueness, sharp child-energy estimate or actual D_infinity gluing. The residual estimate still invokes its stated actual common-uniform-annulus cutoff construction; that geometry must really be present. Reflection covariance/its possible SW-NW defect, distant-driver binding on the actual per-child domain, and spectral/source nonextinction remain separate tasks. No original pressure closure is inferred from this audit.
