# Audit of the “any backward Euler solution” negative route

Research only, 2026-10-18. No exact-scope counterexample has been obtained. This note distinguishes actual consequences of the MINI equations from a scaling diagnostic. It does not add an extra uniqueness hypothesis to the original smooth theorem.

## 1. Actual root facts

For zero forcing and zero initial velocity, testing the first actual mixed MINI equation by its velocity gives

    ||u_h^1||2² + tau_1 nu ||grad u_h^1||2² <= 0.

Thus every first-step velocity is zero; induction and discrete inf-sup give the zero velocity and pressure at all steps. The “any root” quantifier cannot produce a nonzero solution for zero exact data.

For any fixed finite mesh, there is also a time-step threshold below which the velocity root is unique, uniformly over previous states whose L2 norms satisfy the energy bound. Indeed two roots U,V for the same previous value and load have difference d=U-V satisfying

    tau^(-1)||d||2² + nu ||d||V²
       <= |c(d;U,d)|
       <= (nu/2)||d||V² + C nu^(-3)||U||V^4 ||d||2².

The displayed nonlinear identity follows by expanding the difference and using skew cancellation in the second and third slots. The ordinary three-dimensional trilinear estimate and Young give the inequality; dimension two admits the same nonoptimal bound. Finite dimensionality on this one mesh gives a finite constant C_h with ||U||V<=C_h||U||2. Every selected root obeys the energy bound from the actual previous energy and actual forcing averages. Consequently sufficiently small tau, depending on C_h and that bound, forces d=0.

The conclusion is deliberately mesh dependent. C_h need not stay bounded under local refinement, and the original restriction tau_max Lambda<=1/2 uses smooth exact data rather than C_h. This argument does not prove original-scope uniqueness.

Nevertheless, at a fixed mesh every root has a pressure bound independent of the time partition. The restricted equation gives

    D_tau u_h = P_Zh R_h f_h - A_h u_h - P_Zh R_h N_s(u_h).

On that fixed finite-dimensional space, every operator and polynomial on the right is bounded on the energy-controlled L2 ball. Its L2 norm is at most C_h(1+||f_h||2), where C_h may depend on the fixed energy bound and viscosity. The full mixed equation and the actual inf-sup then give

    ||p_h||ell^(4/3)(L2)
       <= C_h [T^(3/4)+T^(1/4)||f||L2(L2)].

Here Jensen controls the actual interval forcing averages. The notation C_h denotes finite constants which can change from line to line. No claim of uniformity in h_min is made. Thus arbitrarily small time steps on a single fixed mesh do not alone produce the required unbounded-pressure sequence, even if some larger steps have multiple roots. A negative result must use genuinely changing graded meshes or changing data while retaining all allowed data constants.

## 2. Why a large quadratic coefficient on a small cell is not enough

The following is only a diagnostic finite-dimensional model, not an actual MINI construction. In mass-orthonormal coordinates consider the energy-conserving quadratic map

    N(x,y)=(k y²,-k x y),   N(x,y) dot (x,y)=0,

with positive dissipative coefficients a,b and previous value (alpha,0). Its implicit step is

    (1+tau a)x + tau k y² = alpha,
    y[1+tau b-tau k x]=0.

Besides y=0, a nonzero branch requires

    k alpha > (1+tau a)(1+tau b)/tau.                  (1)

For two mass-normalized three-dimensional modes localized to scale epsilon, the natural scalings are

    a,b of order nu epsilon^(-2),
    k of order epsilon^(-5/2).

A bounded smooth initial velocity has a mode coefficient of order at most epsilon^(3/2), simply by its L-infinity norm times the L1 norm of a mass-normalized localized mode. Optimizing the right side of (1) over tau leaves a threshold of order nu epsilon^(-2). Its ratio to the left side is therefore governed by a local Reynolds factor of order epsilon/nu, which tends to zero.

Likewise a corner initial profile of magnitude epsilon^(lambda-1), with any fixed lambda>0, has coefficient of order epsilon^(lambda+1/2). Its corresponding factor is epsilon^lambda/nu, again tending to zero. This is a scaling statement, not a proved description of every actual mass-projected initial value, and it is not an exclusion of all multi-mode branches.

The diagnostic identifies a missing step in a proposed counterexample: an exploding coefficient of the discrete convective tensor does not by itself imply a new root, because the local viscous coefficient and the small projection of the allowed smooth data scale at the same time. Constructing an actual root would require actual MINI modes, their stiffness and convective couplings, the actual projected smooth solenoidal initialization, and the original exact averaged forcing. None has been replaced here by freely chosen algebraic forcing.

## 3. Remaining outcome

The original “any solution” quantifier remains intact. The exact energy estimate controls every selected root, the fixed-mesh time limit is harmless for the desired kind of counterexample, and the elementary localization model does not generate a valid graded-mesh negative example from smooth data. The earlier edge Hardy estimate likewise does not control the full discrete trajectory. Neither a proof of the original smooth instantaneous pressure rate nor an actual counterexample is supplied by these root checks.

Only this research note was written. No canonical changes, tests, gates, metadata, hashes, control transitions, commits or publication actions were performed.
