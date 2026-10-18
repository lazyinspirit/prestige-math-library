# New finite-moment matrix-t route

Research only; no full approved-theorem proof is claimed. CLAUDE.md and README.md were read fully. The existing config has automatic compaction at 500000. This note uses the normalized complex law, E|g|²=1. It does not modify canonical content, gates, manifests, or controls.

Put l=k+p, W=Omega_1 Omega_1*, M=W^-1, and X=G M^(1/2), where G is independent normalized complex Gaussian, with m rows and k columns. This is the conditional distribution of Omega_2 Omega_1^dagger. Let S be deterministic, s=||S||op, F=||S||F. The actual residual obeys R≤(s²+||S X||op²)^(1/2).

## Exact inverse second moments without an inverse-Wishart density

For p≥2,

    E tr M² = k(k+p)/[p(p²−1)],
    E (tr M)² = k(kp+1)/[p(p²−1)].

Here is a finite proof from the existing reciprocal-Gamma diagonal construction. Partition Omega_1 into its first row g and remaining rows H. Its block inverse has M11=U^-1 and M1,rest=−U^-1 z, where U=gPg*, P projects onto ker H, and z=gH*(HH*)^-1. Conditional on H, the two Gaussian projections of g are independent. U has the fixed Gamma(p+1,1) law, and E(||z||²|H)=tr(HH*)^-1. The existing exact inverse-Frobenius identity applied to H, whose oversampling is p+1, gives E||z||²=(k−1)/(p+1). Thus

    E M11²=1/[p(p−1)],
    E sum_(j≠1)|M1j|²=(k−1)/[p(p²−1)].

The first formula follows by summing over rows, and also covers k=1 with an empty H. For the second, unitary invariance and integration over an independent complex unit vector u give

    E_u (u* M u)² = [(tr M)²+tr M²]/[k(k+1)].

The coefficients follow directly from E|u_i|⁴=2/[k(k+1)] and E|u_i|²|u_j|²=1/[k(k+1)], obtained by normalizing independent exponential variables. Since u*Mu has the same law as M11, substitution of the first formula proves the second. All integrands are nonnegative; Tonelli applies, with finiteness furnished by the displayed row calculation.

## Exact fourth-moment estimate and expanded parameter coverage

Write A=S*S. Conditional complex Wick pairing gives

    E_G tr[(S G M G* S*)²]
      = tr(A²) (tr M)² + (tr A)² tr(M²).

Indeed expanding the four entries leaves the direct and crossed conjugate pairings. Since tr(A²)≤s²F² and ||S X||op⁴≤tr[(SXX*S*)²], the exact moments above give

    E||S X||op ≤ [a s²F²+b F⁴]^(1/4),
    a=k(kp+1)/[p(p²−1)], b=k(k+p)/[p(p²−1)].

This rigorously proves the original approved residual estimate whenever

    k p³ ≤ e⁴ (k+p)(p²−1).                         (C)

In particular it proves every integer 2≤p≤54, for every k≥2; the previous Frobenius route covered p≤7.

For completeness the absorption is checked here, rather than inferred from the tail coefficient alone. Put alpha=√(k/(p−1)), beta=e√(k+p)/p, h=kp/(k+p), and t=F/s≥1 (the zero matrix is trivial). Condition (C) is b≤beta⁴ and implies h≤e⁴. Moreover

    a/(alpha² beta²) ≤ h/e²,
    beta/alpha = e√[(1−1/p)/h].

If h≤6e², the first inequality gives a≤6alpha²beta². Otherwise h>6e²>2, p>h, and

    6+4beta/alpha ≥ 6+4e√(h−1)/h
                         ≥ 6+(4/e)√(1−e^-4) > e² ≥ h/e².

The second inequality uses that √(h−1)/h decreases for h>2. The strict numerical inequality can be verified with elementary rational bounds 2.718<e<2.719: its left side exceeds 7.45 and e²<7.393. Thus always a≤6alpha²beta²+4alpha beta³. Expansion, using t≥1, now gives

    (alpha+beta t)⁴ − (a t²+b t⁴)
      ≥ alpha⁴+4alpha³beta t
        +(6alpha²beta²+4alpha beta³−a)t² ≥0.

Consequently E||S X||op≤alpha s+beta F. Minkowski for the Euclidean norm, or simply R≤s+||SX||op, proves E R≤(1+alpha)s+beta F, exactly the approved constants on (C). To see p≤54 implies (C), use k/(k+p)<1 and p³/(p²−1)=p+1/(p−1/p)≤54+1/(54−1/54)<54.019<e⁴ for p≤54; the function is increasing for p≥2.

## Exact all-order complete-homogeneous moments

Let h_q(B) denote the complete homogeneous polynomial of degree q in the nonnegative eigenvalues of B, and (k)_q=k(k+1)…(k+q−1). For 1≤q≤p,

    E h_q(X* A X) = (k)_q/[p(p−1)…(p−q+1)] · h_q(A).     (H)

Proof: for a fixed positive k×k matrix B, the same complex-sphere integral gives E_u(u*Bu)^q=q! h_q(B)/(k)_q. This follows by expanding in an eigenbasis and using the simplex moments E product |u_i|^(2a_i)=(k−1)! product a_i!/(k+q−1)!. For fixed u, conditional on M, Xu has the law √(u*Mu)g with g a standard m-dimensional complex Gaussian. Unitary invariance and the reciprocal-Gamma diagonal law give u*Mu distributed as U^-1, U~Gamma(p+1,1). Also E(g*Ag)^q=q!h_q(A), by expansion and E|g_i|^(2a)=a!. Therefore E(u*X*AXu)^q=[(p−q)!/p!]q!h_q(A). Combining proves (H), without any matrix-t or Wishart density.

Since λmax(B)^q≤h_q(B), formula (H) gives a rigorous family of finite bounds. In particular, if r=F²/s²,

    E||S X||op ≤ s · [(k)_q(r)_q / (q! p(p−1)…(p−q+1))]^(1/(2q)).

Indeed the generating function exp(sum_(j≥1)tr(A^j)z^j/j) has coefficient h_q(A), and tr(A^j)≤s^(2j)r; coefficientwise comparison bounds h_q(A)≤s^(2q)(r)_q/q!. Every coefficient is nonnegative, so no limiting or moment-order inference is involved.

## Remaining gap

Condition (C) leaves unbounded effective parameter h=kp/(k+p); the fourth moment fails there because b^(1/4)/beta is unbounded as h grows. Formula (H) is exact and may support a more refined argument, but the displayed upper bounds have not been proved to imply the original theorem for all k,p,r. In particular, using a high moment without controlling its growth, or sending q to infinity at fixed p, is invalid: q≤p and higher inverse moments cease to exist. A finite-dimensional sharp spectral estimate, or a valid optimized moment argument covering the remaining parameters, is still needed. No sharp weighted Gaussian product proof, no full all-parameter rangefinder proof, and no open-problem classification result from this note.

### Subsequent source lead: what the Gaussian bidiagonal coupling does prove

After the parent identified the previously unread passage, read ABMB printed175 (PDF193), §6.2.4.2 in full, and the complete Exercise6.50 hint at printed356. Lemmas6.39–6.40 and their degree-by-degree chi coupling prove stochastic domination of the unweighted complex Gaussian operator norm by the norm of a real Gaussian of doubled row and column dimensions, divided by sqrt2. The proof uses nonnegative bidiagonal entries, so it supplies all increasing moments of that unweighted norm as well as its mean. This is a positive result beyond the earlier real-only Chevet source passages. It is not a proof for a weighted product or matrixF norm: the Jacobi/CS bidiagonal model has complementary sine and cosine beta factors, for which the required entrywise ordering has not been constructed here.

The matrix-t law is symmetric under transposing its row and column dimensions, but the approved second-moment expression (sqrt(k/p)+e sqrt(j(k+p))/p)² is not symmetric. Thus assuming j≥k by transposition and proving that expression only in the new orientation would leave the original j<k case unresolved. In particular, original k≫p with j fixed cannot receive all-parameter credit from a proof whose transposed tail coefficient becomes e sqrt(k/p). No such orientation substitution is made in the proved fourth-moment region above.
