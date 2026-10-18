# No-slip quadratic loads against the explicit Neumann corner mode

Research only, 2026-10-18. The original smooth MINI instantaneous-pressure claim is unresolved. This note proves a special cancellation estimate for the exact bad Neumann edge mode used in the generic low-q obstruction. It includes the skew divergence term and arbitrary time partitions. It does not prove a uniform discrete mixed response theorem, and supplies no exact-scope counterexample.

The canonical instructions, README, schema, scheme, smooth velocity theorem, pressure escalation, maximal-route reduction and actual mass-Schur note were inspected. The original first-order velocity error supplies only the energy quantities used below. No canonical edits, metadata, controls, hashes, tests, gates, commits or publication actions are involved.

## 1. An actual mode from the generic obstruction admits a better quadratic estimate

Let D be the L-shaped polygonal prism from the low-q obstruction note. Near its reentrant edge write cylindrical coordinates (r,theta,z), with 0<theta<omega=3pi/2 and alpha=pi/omega=2/3. Let chi be the same smooth radial cutoff supported in a small corner neighborhood and equal to one near the edge. Put

    q=chi(r) r^alpha cos(alpha theta),
    N_s(e)=(e dot grad)e + (div e)e/2,
    A=||e||L2(D),  B=||grad e||L2(D).

For every e in H1_0(D)^3, the following pairing is absolutely defined and satisfies

    |integral_D N_s(e) dot grad q|
       <= C A^alpha B^(2-alpha).                         (1)

The estimate requires no exact or discrete divergence constraint on e. In particular it applies to the actual error u(t_n)-u_h^n, whose trace vanishes but whose divergence need not vanish pointwise.

Here is a full proof. In the corner neighborhood, angular Poincare on (0,omega), applied at almost every (r,z), gives

    integral |e|²/r² <= (omega/pi)² integral |partial_theta e|²/r²
                     <= C B².                           (2)

First prove this for compactly supported smooth e and then pass to H1_0 by its defining approximation; the corner sides carry the required zero angular trace. All integrals in (2) are restricted to the cutoff neighborhood. In particular no global Hardy inequality with distance to an arbitrary nonconvex boundary is assumed.

For every 0<=s<=1, Holder and (2) yield the local weighted inequality

    ||r^(-s)e||2 <= C A^(1-s) B^s.                      (3)

On the support of grad q and D²q, differentiation of the explicit profile and the fixed cutoff gives

    |grad q| <= C r^(alpha-1),
    |D²q| <= C r^(alpha-2).                             (4)

The cutoff annulus is harmless since its radial coordinate stays between two fixed positive constants; thus these bounds cover it as well as the singular core. The direct absolute estimate for N_s(e) follows already from (3), with s=1-alpha, and Cauchy--Schwarz:

    integral |e| |grad e| |grad q|
       <= C ||r^(-(1-alpha)) e||2 B
       <= C A^alpha B^(2-alpha).                        (5)

There is also a useful exact tensor identity, valid without div e=0:

    integral N_s(e) dot grad q
       = -integral (e tensor e):D²q
         - (1/2) integral (div e)e dot grad q.           (6)

For compactly supported smooth e, ordinary integration by parts proves it. The Hessian term is absolutely bounded using (3) with s=1-alpha/2:

    integral |e|² |D²q|
       <= C ||r^(-(1-alpha/2))e||2²
       <= C A^alpha B^(2-alpha).                        (7)

The last term of (6) obeys (5). Approximate general e in H1_0 by compactly supported smooth functions. Inequality (3) gives convergence in both weighted L2 spaces occurring in (5) and (7), while the gradients converge in L2. Polarization of the quadratic products then passes all three pairings to the limit. This proves (6) and (1) rigorously without a missing edge flux or deleted weak-divergence term.

## 2. The resulting time bound is stronger than the target exponent for this mode

Let e_n be any no-slip H1 sequence on any partition, and set

    E0=max_n ||e_n||2,
    E1=(sum_n tau_n ||grad e_n||2²)^(1/2),
    a_n=integral N_s(e_n) dot grad q,
    p_alpha=2/(2-alpha).

Raise (1) to p_alpha and sum with the actual positive partition weights. Since (2-alpha)p_alpha=2, one obtains exactly

    ||a||ell^(p_alpha) <= C E0^alpha E1^(2-alpha).       (8)

For alpha=2/3, p_alpha=3/2. Weighted finite-measure Holder therefore gives

    ||a||ell^(4/3) <= C T^(1/12) E0^(2/3) E1^(4/3).   (9)

The smooth velocity error theorem makes the right side O(E²), where E denotes its complete first-order energy bound including its viscosity factors. No step-ratio restriction or inverse inequality enters (8)--(9).

The same local proof works at a straight reentrant edge of opening omega<2pi, with alpha=pi/omega>1/2. The exact time gain is p_alpha>4/3. A fixed cutoff edge mode can therefore fail the generic L6 test-space criterion and still be harmless for these special no-slip quadratic pairings.

## 3. Why this does not solve the actual MINI response

The generic low-q obstruction uses the actual Leray projection of a fixed no-slip test v, with a Neumann gradient containing the explicit singular q above. Estimate (9) shows that merely citing the failure of that gradient to belong to L6 does not prove failure for actual quadratic no-slip loads. It is a positive obstruction to that particular negative inference.

But (9) controls only the scalar coefficient obtained by pairing against one fixed singular gradient. It does not bound the entire pressure in L2, the full-test derivative, the resolvent, or the time-dependent Duhamel response. The discrete constrained projector has the actual mass-Schur correction proved in the owner's note; no identification of that correction with this fixed continuous mode has been proved. Resolvent/time cancellation is still a separate obligation.

There is also a genuine three-dimensional limitation to the Hardy mechanism. If a conical vertex has a scalar harmonic mode q=r^lambda Y with 0<lambda<1/2, the analogous estimates have derivative exponent 2-lambda>3/2. They give time exponent 2/(2-lambda)<4/3, so the preceding proof cannot cover it. This sentence is a conditional local calculation, not an asserted construction of such a mode on a particular domain in this note.

The scaling barrier can be checked without any elliptic theorem. Fix a compactly supported smooth vector field w in an annular interior subcone and let e_epsilon(x)=a w(x/epsilon). Homogeneity in dimension three gives

    ||e_epsilon||2 = |a| epsilon^(3/2) ||w||2,
    ||grad e_epsilon||2 = |a| epsilon^(1/2) ||grad w||2,
    integral N_s(e_epsilon) dot grad q
       = a² epsilon^(lambda+1)
                     integral N_s(w) dot grad q.

For any w whose last fixed coefficient is nonzero, the ratio to the critical energy product ||e_epsilon||2^(1/2)||grad e_epsilon||2^(3/2) is a nonzero constant times epsilon^(lambda-1/2). This does not assert that w is discretely solenoidal, is an actual numerical error, or occurs on an allowed trajectory. It explains precisely why a general quadratic-energy estimate at a low vertex exponent needs more structure than no-slip Hardy alone.

Even imposing continuous exact solenoidality on the local field does not automatically make that fixed coefficient zero. Here is a precise conditional verification. Assume q is a nonaffine smooth harmonic function in the annular interior subcone. At some interior point its symmetric Hessian is nonzero, so choose a unit vector a, a ball U compactly contained in the subcone, and a nonzero smooth compactly supported phi in U such that

    integral phi² a^T(D²q)a != 0.

This choice follows by continuity, shrinking U around a point where the quadratic form in direction a is nonzero. Choose a unit b perpendicular to a and a constant vector c such that b cross c=a. Set

    w_k = curl[k^(-1)c phi(x) sin(k b dot x)]
        = a phi(x) cos(k b dot x)
          + k^(-1)(grad phi cross c) sin(k b dot x).

Every w_k is compactly supported smooth and exactly divergence free. The correction tends to zero uniformly, and the elementary oscillatory integral identity cos²(s)=(1+cos(2s))/2 gives

    integral (w_k tensor w_k):D²q
       -> (1/2) integral phi² a^T(D²q)a !=0.

For the oscillatory integral, integration by parts in direction b gives an O(1/k) bound since its smooth amplitude is compactly supported. Thus some fixed finite k gives the required nonzero coefficient, because (6) reduces to minus that tensor pairing when div w_k=0. Fix this k before taking epsilon to zero. The resulting conditional spatial obstruction can therefore use smooth exactly divergence-free no-slip local fields. It still provides neither a specified low-exponent polyhedron nor a numerical-error trajectory; those indispensable steps are not asserted here.

No complete proof or counterexample for the original smooth clause follows. The remaining route must control the actual discrete whole response, including its vertex modes and time trajectory, rather than infer it from either this favorable single-edge calculation or the unfavorable arbitrary-load resolvent theorem.
