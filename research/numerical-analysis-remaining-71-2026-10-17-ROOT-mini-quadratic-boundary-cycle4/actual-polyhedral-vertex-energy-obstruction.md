# A fixed polyhedral vertex obstructs an energy-only quadratic pressure estimate

Research only, 2026-10-18. This completes the formerly conditional low-vertex calculation in `no-slip-quadratic-corner-pairing.md`. The domain below is fixed, bounded, connected, Lipschitz and polyhedral. The vector fields are smooth, compactly supported and exactly divergence free. Their energy norms remain bounded while the instantaneous scalar Neumann pressure of their quadratic force has unbounded L4/3-time L2-space norm.

This is **not** an actual MINI error trajectory, a mixed Stokes evolution counterexample, or a counterexample to the original smooth pressure claim. It excludes a proposed termwise estimate based only on the two energy-error norms. In particular the actual equation may provide cancellations absent from these freely chosen fields.

## 1. A concrete cone with a small positive Neumann exponent

Fix once and for all

    M=8 exp(1000),
    C={ (x,y,z): z>M(|y|-|x|) },
    S=C intersect S²,
    D={ |x|<1, |y|<1, M(|y|-|x|)<z<1 }.

All constants below may depend on this one fixed M. No domain parameter changes along the final concentrating sequence.

The cone C is the epigraph of the finite Lipschitz, homogeneous, piecewise linear function L(x,y)=M(|y|-|x|). Its spherical section S is a connected spherical polygon. To check connectedness, from any point of C move vertically upward; this stays in C. Normalizing that path radially gives a path in S tending to the north pole, which is interior to S. Small caps about the north pole are contained in S, so these paths connect through such a cap. Its boundary consists of finitely many great-circle arcs meeting at nonzero angles. In local spherical coordinates each boundary point has a Lipschitz graph neighborhood. At an arc vertex this follows also by intersecting the Lipschitz graph cone with a smooth surface transverse to its radial rays.

The domain D is bounded: its lower graph is greater than -M and its upper graph is 1. It is connected, for example by its union of the two overlapping convex open polyhedra obtained by replacing -|x| in L with -x and with x. Their intersection contains a neighborhood of (0,0,1/2). It is Lipschitz and polyhedral. Here the finite faces are the four planar pieces of the lower graph, the top face z=1 and the vertical box faces. Away from their intersections this is immediate. Where lower pieces meet, they remain the graph of L. Where top and lower meet, |y|-|x|=1/M, hence |y|>0; decreasing |y| and decreasing z by a sufficiently smaller amount is a common inward direction for both active faces and all active lower pieces. At a vertical box face choose its inward horizontal component, with an additional decrease of |y| when needed to make the lower inequality strict. Where both vertical faces are active, |x|=|y|=1, so the top and lower faces do not meet each other; the horizontal inward components can be chosen in the required ratio for the one active horizontal face. These strict common inward directions make the local finite face inequalities monotone in one coordinate, providing local Lipschitz graph representations, including at reentrant edges. Finally D agrees with C on B(0,1/2).

Put r_perp=(x²+y²)^(1/2) on S². At x=0 a point of S must have z>M|y|, so z>0 and r_perp=|y|<1/M. Set a=1/4, r0=2/M and L0=log(a/r0)=1000. Define

    eta(r)=0                         for 0<=r<=r0,
           log(r/r0)/L0              for r0<r<a,
           1                         for a<=r<=1,
    F(x,y,z)=sign(x) eta(r_perp),   (x,y,z) in S.

This is a legitimate H1(S) function. The only possible sign jump is on x=0, and the entire part of that plane inside S has r_perp<1/M<r0, where F vanishes in a neighborhood. It is odd under x reflection while S is invariant, so its mean is zero.

The two spherical patches parametrized by

    (x,y,z)=(plus or minus sqrt(1-y²-z²),y,z),
    |y|<1/10, |z|<1/10,

lie in S. Indeed |x|>sqrt(.98)>.98 and |y|<.1, so M(|y|-|x|)<-.88M<z. On these patches r_perp=sqrt(1-z²)>.99>a, hence F²=1. Their surface area elements are at least dy dz. Therefore

    integral_S F² >= 2(1/5)² = 2/25.

On each of the north and south spherical caps the surface area element in polar coordinates (r_perp,theta) is r_perp/sqrt(1-r_perp²) dr_perp dtheta, and |grad_S r_perp|<=1. Integrating over whole caps rather than their subsets in S gives

    integral_S |grad_S F|²
       <= [4 pi/(sqrt(1-a²)L0²)] integral_(r0)^a dr/r
       = 4 pi/[sqrt(15/16)L0]
       < 14/1000.

Consequently the mean-zero Neumann Rayleigh infimum mu on S satisfies

    mu <= (14/1000)/(2/25) = 7/40 < 3/4.              (1)

This estimate uses an exact fixed trial function and inequalities, not a numerical eigenvalue computation.

## 2. Existence of the angular mode and its weak boundary condition

For completeness the needed spectral fact has a short variational proof, so no uninspected polyhedral spectral-pencil source is being assumed. The compactness H1(S) into L2(S) follows in finitely many spherical graph charts: flatten each Lipschitz boundary graph, reflect a localized function across it, and use the ordinary translation estimate for a bounded H1 family of fixed compact support in R2. Finite square averages then approximate that family uniformly in L2, giving compactness by a diagonal subsequence. Smooth interior charts are easier. The flattening maps and their inverses are Lipschitz; change of variables and the weak chain rule give bounded H1 extension. A finite partition of unity joins the charts.

A normalized mean-zero minimizing sequence for the Rayleigh quotient is bounded in H1(S). Compactness gives a strongly L2 convergent subsequence. A further weak H1 subsequence exists by the elementary separable-Hilbert diagonal argument on a countable orthonormal basis; lower semicontinuity of its squared gradient norm gives a minimizer Y with ||Y||2=1 and mean zero. If mu=0, that minimizer has zero weak gradient. It is locally constant on each chart, and connectedness of S makes it constant globally, contradicting its normalization and mean. Thus mu>0. First variation, including a Lagrange multiplier for the mean, gives

    integral_S grad_S Y dot grad_S psi
       = mu integral_S Y psi,    psi in H1(S).        (2)

One can first vary within the mean-zero space and then subtract the mean of an arbitrary psi; constants contribute zero on both sides. These sequential arguments need at most Countable Choice. They do not invoke the stronger choice assumptions attached to some existing general spectral suppliers.

Set lambda=(-1+sqrt(1+4mu))/2. By (1),

    0<lambda<1/2,    lambda(lambda+1)=mu.

The homogeneous function Q(r,omega)=r^lambda Y(omega) belongs to H1(C intersect B_R) for every finite R: its radial H1 integral is a constant times integral_0^R r^(2lambda)dr. Equations (2) and the polar-coordinate energy formula give Delta Q=0 in distributions in C, with the weak zero Neumann condition on the planar cone sides. The already-read local item `thm-weyl-lemma-for-the-laplacian.md` implies that Q is smooth in the interior of C. No smoothness of Y at spherical boundary corners is required in what follows.

## 3. A fixed L2 Neumann pressure datum with this mass lift

Take a radial smooth cutoff chi supported in r<1/4 and equal to one on r<1/8. Define q=chi(r)Q on D, zero outside its conical support. Since the full support lies where D agrees with C, the preceding angular calculation gives q in H1(D) and

    g=Delta q
      = [chi''(r)r^lambda
            +(2lambda+2)chi'(r)r^(lambda-1)]Y(omega).

This g is in L2(D), supported in a fixed annulus. Moreover

    (grad q,grad v)=-(g,v),    v in H1(D).             (3)

One direct justification is to use (2) on each sphere, integrate the radial part by parts on epsilon<r<1/4, and then let epsilon tend to zero for smooth tests. The inner flux is O(epsilon^(lambda+1)) times the finite L1(S) norm of Y and the bounded test, so it vanishes. The outer boundary term vanishes with chi. Density of smooth restrictions in H1 of the explicit Lipschitz domain, followed by continuity of both sides, extends the identity to all v in H1(D). There are no additional face terms, since (2) includes the weak angular Neumann condition.

Taking v=1 proves integral_D g=0. In fact q has zero mean as well, since its support includes the full angular section on each radius and integral_S Y=0. Equation (3) therefore makes q precisely the unique mean-zero Neumann solution of Delta q=g, and grad q the associated fixed mass-pressure dual lift. The datum g is nonzero: otherwise taking v=q in (3) would make q constant, contradicting its nonzero homogeneous core and compact radial support.

## 4. An exactly solenoidal local field with a nonzero quadratic pairing

The smooth nonzero homogeneous harmonic Q has nonzero Hessian at some interior point of an annular subcone. Indeed if its Hessian vanished everywhere there, Q would be affine there; along a radial segment an affine function cannot equal a nonzero r^lambda profile with 0<lambda<1/2. Choose a small ball U compactly contained in that annular subcone, a unit vector A, and phi in C_c^infinity(U) such that

    integral phi² A^T(D²Q)A !=0.

Continuity supplies these choices around a point and direction where the quadratic form is nonzero. Choose a unit B perpendicular to A and a constant vector C0 with B cross C0=A. The smooth compactly supported fields

    w_k=curl[k^(-1) C0 phi(x) sin(k B dot x)]
       = A phi(x)cos(k B dot x)
           +k^(-1)(grad phi cross C0)sin(k B dot x)

are exactly divergence free. Their quadratic tensor pairing satisfies

    integral (w_k tensor w_k):D²Q
       -> (1/2) integral phi² A^T(D²Q)A !=0.

To verify the limit, the correction tends uniformly to zero, use cos²(s)=(1+cos(2s))/2 for the leading tensor, and integrate the oscillating term by parts once in direction B. All amplitudes are smooth compactly supported, giving an O(1/k) remainder. Fix a finite k for which the pairing is nonzero and write w=w_k. Integration by parts, with div w=0 and no boundary term, gives the nonzero constant

    J=integral N_s(w) dot grad Q
      =-integral (w tensor w):D²Q !=0.                 (4)

Thus even exact solenoidality does not erase this vertex mode. The construction needs no singular vector field and no boundary trace convention.

## 5. Bounded energy but divergent pressure-dual time pairing

For small epsilon>0, the scaled support epsilon U lies inside r<1/8, where q=Q. Let

    v_epsilon(x)=epsilon^(-3/2)w(x/epsilon).

These fields belong to C_c^infinity(D)^3 and are exactly divergence free. Scaling in dimension three gives

    ||v_epsilon||2=||w||2,
    ||grad v_epsilon||2=epsilon^(-1)||grad w||2,
    integral N_s(v_epsilon) dot grad q
        = epsilon^(lambda-2) J.                     (5)

Fix T=1. On the two-step partition t0=0, t1=epsilon², t2=1, set e^0=0, e^1=v_epsilon, e^2=0. Its energy quantities satisfy exactly

    max_n ||e^n||2=||w||2,
    (sum_n tau_n ||grad e^n||2²)^(1/2)=||grad w||2.

But (5) gives

    || integral N_s(e^n) dot grad q ||ell^(4/3)
       = |J| epsilon^(lambda-1/2) -> infinity.       (6)

The same conclusion holds for smooth time pulses: multiply v_epsilon by a fixed nonzero smooth function of t/epsilon² supported in (0,1). Its L-infinity L2 and L2 H1 norms stay bounded, while the scalar quadratic pairing has the same power epsilon^(lambda-1/2). Thus the phenomenon is not an artifact of the two-step reconstruction or its jumps.

One may express (6) as a genuine scalar-pressure obstruction. For each n let pi^n in mean-zero H1(D) solve

    (grad pi^n,grad r)=(N_s(e^n),grad r),
                                  r in H1(D).

Existence follows from mean-zero Poincare and coercivity; each force here is smooth and L2. Using r=q and then (3) with v=pi^n yields

    (pi^n,g)=- integral N_s(e^n) dot grad q.

Therefore ||pi||ell^(4/3)(L2) is at least the left side of (6) divided by the one fixed positive number ||g||2. It diverges despite the uniformly bounded energy quantities. This is the actual continuous instantaneous Helmholtz-gradient pressure of these actual smooth quadratic forces on one fixed permitted polyhedron.

## 6. Exact scope of the obstruction

There is no domain-uniform or fixed-domain estimate of the indicated scalar pressure, or of its fixed L2 dual coefficient, based solely on the two energy norms in Section 5, even if every field is no-slip and exactly divergence free. Multiplying the sequence by any fixed small amplitude preserves the divergence mechanism and shows that a fixed small energy bound alone does not repair such an estimate.

This rules out bounding that term independently in a pressure dual calculation solely from the established energy-error estimate. It does not rule out cancellation with the viscous and time-derivative terms in the actual mixed equation, additional approximation structure of actual errors, or a full backward dual estimate which exploits that equation. The chosen e^n are not asserted to lie in MINI spaces, to arise as errors for fixed smooth exact data, or to solve any backward Euler scheme. None of the original smooth statement's hypotheses has been replaced or refuted.

Only this research note was added. No canonical files, metadata, hashes, tests, gates, control transitions, commits or publication operations were changed or run.
