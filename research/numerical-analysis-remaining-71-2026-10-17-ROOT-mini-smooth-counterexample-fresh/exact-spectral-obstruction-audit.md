# Fresh smooth-data counterexample audit

Research only, 2026-10-18. No original-scope counterexample was obtained. All canonical items, pages, controls, manifests, hashes and readiness files were left untouched; no tests or gates were run. CLAUDE.md and README.md were read fully before repository work. The current smooth velocity theorem, scheme definition and the complete prior actual mass-Schur, initial-layer and spurious-root notes were read. This note makes no new literature claim.

## An exact actual-MINI compatibility that a negative spectral construction must retain

Fix an allowed mesh and viscosity. Write P for the actual L2 projector onto Z_h and define the positive self-adjoint operator A on Z_h by

    (Az,w)=a_nu(z,w),  z,w in Z_h.

Let C z in Q_h be the actual homogeneous pressure observation, uniquely defined by

    b(v,Cz)=(Az,v)-a_nu(z,v),  v in V_h.

Choose a mass-orthonormal eigenbasis z_j of A, with eigenvalues lambda_j>0, and set q_j=Cz_j. Let u in X:=H2(D)^d intersect V_sigma be a stationary exact smooth velocity with zero exact pressure. Put F=-nu Delta u; the no-slip Korn identity gives (F,v)=a_nu(u,v) for v in V. Let s_h=A^(-1)PF be the actual stationary discrete Stokes velocity and x=Pu-s_h the actual mass-initialization mismatch. Then, exactly,

    (x,z_j)=(u,z_j)-lambda_j^(-1)a_nu(u,z_j).                  (1)

This is not a freely selectable high-frequency initial coefficient. In particular, for the actual divergence-preserving Fortin map Pi_h, Pi_h u belongs to Z_h and

    (x,z_j)=(u-Pi_hu,z_j)
                   -lambda_j^(-1)a_nu(u-Pi_hu,z_j).           (2)

Indeed a_nu(Pi_hu,z_j)=lambda_j(Pi_hu,z_j), and subtracting this identity proves (2). The established local/global Fortin estimates and ||z_j||2=1, ||z_j||V<=sqrt(lambda_j/nu) imply

    |(x,z_j)| <= C [h^2+sqrt(nu) h lambda_j^(-1/2)] ||u||H2.  (3)

No inverse estimate, quasiuniformity or minimum mesh size enters this calculation. Formula (3) is an upper bound, not a matching lower bound.

The exact continuous-time pressure transient in this stationary linear test is

    C exp(-tA)x = sum_j exp(-t lambda_j) (x,z_j) q_j.           (4)

Thus discovering actual graded-mesh eigenvectors with large q_j alone would not be an original-scope counterexample. A construction must also show that the functional

    u -> (u,z_j)-lambda_j^(-1)a_nu(u,z_j),  u in X,             (5)

has a sufficiently large value on uniformly H2-bounded exact solenoidal, no-slip data. Formula (5) is especially sensitive to the difference between weak and exact solenoidality: for an actual continuous Stokes eigenfunction z with eigenvalue lambda, its corresponding functional is identically zero on X, even though its continuous eigenpressure need not vanish. This follows directly by testing the continuous mixed eigen-equation with u, for which b(u,q)=0. Pressure amplitude and smooth initialization mismatch are therefore separate quantities.

For a single mode considered in isolation its infinite-time pressure norm is exactly

    ||exp(-t lambda_j) a q_j||L^(4/3)(0,infinity;L2)
       = (3/(4lambda_j))^(3/4) |a| ||q_j||2.                 (6)

Using (6) for an actual x additionally requires controlling cancellation with all other pressure modes in (4); q_j are not asserted to be L2-orthogonal. The mass eigenvectors z_j are orthogonal, but applying C does not preserve that orthogonality. A lower bound for one summand of (4) is not automatically a lower bound for the norm of (4).

## Exact remaining gap

The existing arbitrary-partition subordination proof reduces the homogeneous BE issue to the uniform continuous-time observation norm. For this stationary test the precise linear operator is

    T_h u := C exp(-tA)[Pu-A^(-1)P(-nu Delta u)].              (7)

An original smooth-data initial-layer negative route must construct allowed graded meshes and uniformly H2-bounded u_h in X for which ||T_h u_h||L^(4/3)(0,T;L2)/h diverges, establish that any stationary pressure contribution cannot cancel that divergence, and then realize the divergence in the actual nonlinear scheme with its original forcing averages and initialization. The latter nonlinear passage is a further obligation, not a consequence of a Stokes counterexample by renaming the force. None of these three lower-bound steps is proved here.

The existing positive near-two Lp estimate for the actual constrained projector also prevents importing an arbitrary L2-concentrating initial vector as the special smooth Fortin defect. The generic rough-data pressure counterexample, fixed-mesh time refinement, a nonzero smooth boundary trace, and large finite-dimensional convective coefficients do not supply the missing lower bounds. The original smooth instantaneous pressure claim remains unresolved by this audit.
