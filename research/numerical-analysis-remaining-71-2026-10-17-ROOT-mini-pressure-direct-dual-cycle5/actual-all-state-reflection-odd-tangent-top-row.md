# Actual all-state reflection-odd tangent top row

Research proof, 2026-10-18. This proves the top row used in the rank-one block target, for the actual mirrored radial-fan template with the already specified geometric star budgets. It is MASS only. No full normal pressure variation bound is used.

## 1. State, quotient norm and the exact inherited base slope

Let s be ANY reflection-odd state of the actual limiting mass template, with recovered source-free response (W,p) on parent C of radius R. Its base has exactly the three retained vertices c_-,o,c_+. Gauging p(o)=0, oddness makes the continuous P1 base trace EXACTLY p0 x, where

    p0=[p(c_+)-p(c_-)]/(8R).

Let a=W(o). Put q=a_t+p0=L_t(s). Let E(s)=inf_b ||W-b||_L2(C), with affine-Darcy states quotiented. Oddness allows a tangential minimizing constant b; the normal mean is zero.

The actual bubble relation gives ||grad p+b||<=sqrt(gamma_2)||W-b||. The fixed-rectangle H1 trace estimate on the two AFFINE base edges gives R|p0+b_t|<=C||grad p+b||. Therefore

    ||W+p0 t||+||grad(p-p0 x)|| <= C E(s).             (1)

This avoids replacing the quotient norm by an uncontrolled chosen background. No point evaluation in H1 is used.

## 2. Full outer-fan inverse, with ALL guards

Use the actual full outer-fan scalar weighted inverse proved in full-outer-fan-weighted-inverse.md. It applies componentwise to the actual vector velocity and retains every guard/ramp/endpoint. Let A_i be the total parent fan area at outer vertex i. Write b_i=W(i), and let pbar_i be its adjacent fan-area-weighted pressure gradient. After eliminating the bubble mass block, the actual outer equations have weighted matrix 16I+B, where B is reversible Markov in the A_i inner product and ||(16I+B)^(-1)||<=1/15.

For the tangential component use the constant reference

    b_ref,t=-(a_t+18p0)/17.

The exact weighted inverse implies

    ||b_t-b_ref,t||_A
       <=(18sqrt(2)/15) E_p+(180/15)E_R,              (2)

with E_p the actual weighted tangential pressure-gradient deviation from p0, and E_R the full exterior reaction norm. The exact constants/conventions are those in the cited supplier; changing harmless fixed constants below has no mathematical effect.

The actual all-triangle Hardy reset, including radially added guards and arbitrary base subdivisions, gives

    E_p<=C delta E(s).                                 (3)

It uses the entire fan in its single narrow wedge, the base trace p0 x, and (1). It does not assert that additional guard pressure nodes are affine.

For every outer vertex use the hybrid test: parent fan coefficient lambda_i-14 beta/27, EXTERIOR coefficient lambda_i-20 beta/27. The exterior part has exact zero cell mean and is continuous across interfaces. Thus ALL exterior pressure terms cancel. The checked joint star budget, including current root/child-side stars and all fine uniform guards, gives

    E_R<=C sqrt(epsilon_Q) E(s).                        (4)

It is a mass test. No strain term, ancestor-star reassignment, pressure-only DtN smallness, or numerical root assumption enters (4).

Combining (2)-(4) and adding the actual pressure deviation itself yields

    sum_i A_i |b_i,t+pbar_i,t+q/17|^2
         <=C(delta^2+epsilon_Q) E(s)^2.                (5)

## 3. Exact selected child contrast and orientation

Use the following explicit type transport. On each unoriented long tooth-side line, choose its physical child tangent t_i to have positive dot product with the PARENT tangent t; hence |t_i-t|<=C delta. Label its base endpoints c_±^i by this increasing tangent coordinate, irrespective of the direction in which the fan boundary was drawn. Choose its physical normal n_i to point into its child container. The frame O_i=[t_i,n_i] may have determinant -1; reflection embeddings are allowed, since the actual MINI mass equations and the later strain operator are orthogonally invariant. Its intrinsic child coordinates are O_i^T(X-X_i)/r. The actual template type is transported with this same frame; a down-facing container is not silently assigned the opposite tangent.

For a reflected partner under the parent S=diag(-1,1), choose t_i'=-S t_i and n_i'=S n_i, so O_i'=S O_i S. The additional intrinsic reflection is an actual symmetry of the mirrored child template, including its paired uniform grids. Thus paired recoveries satisfy T_i' U_parent=U_child T_i in the precise reflected coordinate convention. For an ODD parent state, T_i' s=-U_child T_i s. Since L_t U_child=-L_t, their transported tangent contrasts are EQUAL, not opposite; the ideal normal driver, which is even under U_child, changes sign and cancels in the paired mean. This is the sign convention underlying the exact S-conjugated two-driver covariance. It applies to left/down-facing fan types as well as right/up-facing ones.

All comparisons below are AFTER this exact intrinsic transport. Raw physical tangent vectors with an arbitrary drawing orientation need not be close to t and must not be inserted in the mean map.

A selected child base has endpoints at equal distances 4r from its center i. Its two base edges are UNREFINED; all new uniform guards are outside those two edges. The two adjacent parent fan triangles therefore have equal area. Consequently its ACTUAL average base pressure slope is exactly

    [p(c_+^i)-p(c_-^i)]/(8r)
       =pbar_i dot t_i,                                (6)

where t_i is its local tangent. This uses the AVERAGE of both halves, not a selected half; no pressure-kink bound or unsupported normal estimate is needed.

Its root velocity is b_i. Thus its actual child contrast is q_i=(b_i+pbar_i) dot t_i. For a global constant background b, actual local MINI mass positivity and the bubble pressure relation give

    sqrt(A_i)|b_i+pbar_i|<=C||W-b||_parent_patch(i).

This is invariant under the affine Darcy shift. Since |t_i-t|<=C delta, bounded patch overlap charges the orientation change to C delta^2 E(s)^2. Hence (5) implies on selected centers J

    sum_J A_i |q_i+q/17|^2
         <=C(delta^2+epsilon_Q) E(s)^2.                (7)

This is the full vector orientation bound only where needed; it does not promote tangential slope inheritance to a full normal variation theorem.

The fixed template chooses selected centers with comparable A_i~d_tooth r and

    sum_J A_i~sigma a R^2,
    |J|=B~N^2/(b0 a).

The guarded middle-third geometry supplies these comparisons. Fixed-factor discrepancies can instead be retained as explicit reflection-invariant weights, provided the same weights define the actual mean map. For equally weighted, comparable-area centers, Cauchy-Schwarz in (7) gives

    |B^(-1)sum_J q_i+q/17|
       <=C (delta+sqrt(epsilon_Q))/(R sqrt(sigma a)) E(s). (8)

## 4. Normalized top row of the actual mean map

Let U be the ACTUAL mean child recovery on the reflection-odd affine-Darcy quotient, using child pressure/r scaling and the stated local rotations. The average in (8) is precisely L_t(U s). It is not the root velocity alone. For the actual single-diagonal radiation exterior, use the ODD PART E_t^- of its tangent column, rather than assuming that column itself is odd. Reflection is an exact symmetry of the child D and its response energy, so E_t^- is an actual odd child response, has L_t(E_t^-)=1, and inherits the sharp upper/lower energy bounds. Put g=||W_Et^-||_quotient on the unit parent template. The sharp ideal-energy proof gives c sqrt(a)<=g<=C sqrt(a). Normalize the tangent ideal vector by e=E_t^-/g and the selector by ell=g L_t, so ell(e)=1. Equations (8) give

    |ell(U s)+(1/17)ell(s)| <= e1 E(s),
    e1<=C (delta+sqrt(epsilon_Q))/sqrt(sigma).           (9)

Thus, with P=e ell and Q=I-P, the actual block entries satisfy

    |alpha+1/17|<=C e1,       ||P U Q||<=C e1,           (10)

where the fixed constants include the already bounded nonorthogonal projection norm. This holds for ALL odd states, not merely the ideal two-driver family. The complementary row Q U is supplied separately by the actual incoming-field/remainder decomposition; (9) does not assert it.

For delta=L^-200, sigma=L^-150, epsilon_Q=L^-380, a=L^-220, the two left-row contributions are L^-125 and L^-115. After dividing by the initial normalized source scale sqrt(a)=L^-110 they are L^-15 and L^-5. With the quantified inverse-logarithmic four-source lower bound, these are compatible with the asymmetric source-visibility condition for sufficiently large fixed N. This arithmetic does not replace the separate all-remainder Q U proof.

No canonical, metadata, runtime, gate, test or commit operation was performed.
