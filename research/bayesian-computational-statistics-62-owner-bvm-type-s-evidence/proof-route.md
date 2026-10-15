# Type-S source-specific weak BvM: research proof route

Initial research route. After parent substantive review and explicit authorization, three new complete active item proposals were installed: lem-compact-wavelet-projection-kernel-and-commutator, lem-type-s-posterior-preliminary-contraction, and thm-type-s-density-weak-bvm-on-m0w. No existing source, manifest, contract, hash, gate, or readiness change was made by this agent. The actual item bodies supersede the preliminary discussion below; owner acceptance remains separate.

## Source actually inspected

Downloaded the entire arXiv:1310.2484v4 PDF (2014-10-02), extracted text with PyMuPDF. Read §§2–3.2, §4 applications, §§5.1–5.4 including printed pp.24–29, especially Theorem3, (41)–(45), and Lemmas1–4. Read relevant text in Castillo arXiv:1304.1761 (current PDF): §3.2.1, Theorem2 and its discussion, the efficient-influence-function approximation and shift discussion in §4.3, and auxiliary concentration statements. No claim to have read that second paper cover to cover or all its proof units; the final local argument replaces its contraction import rather than using unread arguments as premises. Download/extraction stayed in /tmp/bcs-type-s, not repository evidence.

1310.2484 explicitly restricts S1 to phi_H,tau(x)=c exp(-(1+|x|)^(1-tau)), 0<=tau<1, for its contraction import. 1304.1761 Theorem2 assumes preliminary Hellinger contraction, and its discussion says a completely general log-Lipschitz contraction statement was unavailable there. Thus arbitrary log-Lipschitz S1 in the approved definition cannot be obtained merely by citing either paper. The coercivity argument below is intended to close that exact gap without adding tail hypotheses.

The current active prior Definition states alpha>1 for both S1/S2; the approved plan allows S2 alpha>1/2. The proof route below uses alpha>1/2 and r<alpha-1/4 for Gaussian S2 and therefore addresses the richer approved range, contingent on its local kernel assumptions being supplied.

## Required basis interface (substantial supplier to state/prove)

Use a fixed compactly supported regular orthonormal interval/periodic wavelet system. V_L contains constants and has dimension d comparable to 2^L. Its projection kernel K_L obeys

* sup_x integral |K_L(x,y)|dy <= C;
* K_L(x,y)=0 when the interval or periodic distance exceeds C 2^-L;
* sum_k |psi_lk(x)| <= C 2^(l/2), and ||psi_lk||1 <= C2^(-l/2);
* ||P_L g0-g0||infty <= C d^-alpha for g0=log f0;
* the finitely many scaling functions are bounded, and every sufficiently high wavelet has integral zero.

For standard compactly supported multiresolution wavelets, the first two follow by writing K_L in the orthonormal scaling basis: bounded overlap, O(2^(L/2)) magnitude and O(2^-L) support give the bounds directly. The approximation follows by summing the coefficient tail using the previous levelwise sum estimate. For beta=min(alpha,1) (or any fixed beta<1 at integer smoothness one), f0 is beta-Hölder, so

||P_L(f0 h)-f0 h||infty <= C d^-beta ||h||infty, h in V_L. (K)

Indeed P_L h=h; subtract f0(x) times its kernel representation and use the kernel support and L1 bound. This elementary commutator bound is the replacement for the source's considerably longer approximation of psi_lk/f0.

## Quotient coordinates and preliminary contraction

The likelihood is unchanged by adding a constant to T. Split V_L=span{1} plus its Lebesgue-orthogonal complement E_L and integrate the constant coordinate out of the prior. This is essential: no likelihood coercivity is asserted in that direction. Only finitely many low scaling coordinates are involved in this orthogonal change. The induced marginal density q on E_L is positive. In S1, for any u in E_L,

|log q(theta+u)-log q(theta)| <= sum_lk Lip(log phi) |u_lk|/sigma_l <= B_L ||u||2,

where B_L^2 <= C sum_l 2^l sigma_l^-2 <= C d^(2alpha+2). This follows pointwise before integrating the constant variable, hence survives marginalization. In S2 q is Gaussian on E_L; its precision has the original diagonal values on all high wavelets, and a fixed positive definite low scaling block. Consequently ||Q_L|| <= C d^(2r+1).

Let theta*=P_L g0 modulo constants, f*=exp(theta*)/integral exp(theta*), and

e_L=sqrt(d/n)+d^-alpha.

Then ||f*-f0||infty<=Cd^-alpha. The log likelihood is ell(theta)=n[P_n theta-log integral exp(theta)]. Its score at theta* satisfies ||grad ell(theta*)||2=O_P(sqrt(nd)+n d^-alpha)=O_P(n e_L): the centered score has expected squared Euclidean norm <=Cnd by orthonormality and bounded f0; its deterministic mean is the projection of n(f0-f*) and has norm <=Cn d^-alpha.

For ||u||2<=R e_L, ||u||infty<=C sqrt(d)||u||2=o(1) for every fixed R because alpha>1/2 and either approved cutoff. Thus the density f_theta*+u is bounded above and below uniformly there. On E_L its Hessian is -n Cov_f, and

c||v||2^2 <= Var_f(v) <= C||v||2^2,

because inf_a integral(v-a)^2 f >= (inf f) inf_a ||v-a||2^2=(inf f)||v||2^2 for integral v=0. Therefore -ell has local Hessian between cnI and CnI.

For S1, B_L<=C n e_L, since d^(alpha+1)/n <=C sqrt(d/n) at both cutoffs. For S2, the logprior difference is -<Q_Ltheta*,u>-<Q_Lu,u>/2. The deterministic gradient G_L=||Q_Ltheta*||2 satisfies

G_L^2 <= C[1+sum_l<=L 2^(l(4r+2-2alpha))],

and G_L=O(n e_L); also ||Q_L||/n=o(1), since r<alpha-1/4<alpha. The finite low block only changes constants.

Here is the polar tail calculation needed to make coercivity genuine. On the score event ||grad ell(theta*)||<=A n e_L, put r0=R e_L with R sufficiently large compared with A and the prior constants. For u=r omega, the likelihood Taylor bound at r0 gives ell(theta*+r0omega)-ell(theta*) <= A n e_L r0-cn r0^2/2. Its radial derivative there is <=A n e_L-cn r0. Convexity of -ell extends this derivative bound to every r>=r0. In S1 add the global prior increment bound B_L r; in S2 use the exact Gaussian expression, whose radial derivative is <=G_L (the quadratic term is nonpositive). For large R, the resulting log unnormalized density ratio H(r omega) is at most -c' n r0 r for r>=r0, after decreasing c'. On r<=e_L, the lower Taylor bound for ell and the prior lower bounds give H>=-C_A n e_L^2; Gaussian quadratic cost is <=||Q_L|| e_L^2/2=o(n e_L^2). The denominator is consequently at least q(theta*)exp(ell(theta*)) Vol(B_1)e_L^d exp(-C_A n e_L^2).

The tail/denominator ratio is at most

exp(C_A n e_L^2) d integral_R^infty t^(d-1) exp(-c' n R e_L^2 t)dt.

Since n e_L^2>=d, increasing R makes log t <=c' Rt/4 for t>=R and C_A<=c'R^2/4; the integral is then bounded by C exp(-c'' R^2 n e_L^2), with a harmless polynomial factor absorbed since d<=n e_L^2. It tends to zero for sufficiently large fixed R. The score event probability tends to one as A increases. Thus the posterior is tight at Euclidean radius e_L around theta*. In particular, for any sufficiently slowly increasing b_n, it assigns probability tending to one to

D_n={||theta-theta*||2<=b_n e_L},

where b_n sqrt(d)e_L->0. Write h=theta-theta*, zeta_n=C b_n sqrt(d)e_L=o(1). On D_n, f is uniformly bounded above and below, ||f-f0||infty=o(1), and each high theta_lk differs from g0_lk by at most b_n e_L. This argument establishes existence and finiteness of the posterior normalizer on the score events; outside those events a genuine version needs a separate finite-evidence statement or the general prior-predictive fiber argument. Almost-everywhere finiteness also follows directly from Tonelli and f0 bounded below: prior predictive density is integrable in the finite sample, so it is finite Lebesgue-a.e., hence P0^n-a.e.; positivity follows because every modeled density is strictly positive.

## Restricted exponential moments without a citation-as-proof

For gamma=psi_lk with l<=L and |s|<=sqrt(max(l,1)), define f_s=f exp(-s gamma/sqrt(n))/P_f exp(-s gamma/sqrt(n)). On D_n, Taylor's formula for log P_f exp(-s gamma/sqrt(n)) gives uniformly

s sqrt(n)(P_f-P_n)gamma = ell(f_s)-ell(f)+(s^2/2)Var_f gamma+O(|s|^3 ||gamma||infty/sqrt(n)).

The variance is bounded by C||gamma||2^2=C; the remainder is bounded by Cs^2 because sqrt(L)d^(1/2)/sqrt(n)->0. Changing theta to theta-s gamma/sqrt(n), modulo constants, changes one high coordinate, or finitely many low coordinates. In S1 the absolute logprior ratio is <=C|s|/(sqrt(n)sigma_l)<=C|s|. In S2 it is bounded by

C[|s|(|g0_lk|+b_n e_L)/(sqrt(n)sigma_l^2)+s^2/(n sigma_l^2)],

with corresponding fixed low-block expression. The coefficients multiplying |s| and s^2 are bounded uniformly, and in fact tend to zero for high maximal indices: e_L d^(2r+1)/sqrt(n)=O(polylog(n)d^(2r-2alpha+1/2))->0 and d^(2r+1)/n=O(d^(2r-2alpha))->0. Choose b_n slowly enough to preserve this. This is exactly where r<alpha-1/4 is used.

Drop the transformed indicator 1_D after this upper bound. Its likelihood integral over the whole quotient parameter space is the ordinary normalizer. Consequently, writing Pi_D for the conditional posterior,

E_Pi_D exp[s sqrt(n)(P_f-P_n)psi_lk] <= C exp(Cs^2+C|s|)/Pi(D_n|X). (M)

No invariance of D under shifts is claimed or needed for this upper bound.

Apply Markov with s=+/-sqrt(max(l,1)). The conditional tail of sqrt(n)|<f-P_n,psi_lk>| above u sqrt(max(l,1)) is <=C exp[-l(u-C)]/Pi(D|X) for l>=1, with a fixed low-level variant. Union over 2^l locations and integrate from sufficiently large u to get

E_Pi_D max_k sqrt(n)|<f-P_n,psi_lk>| <= C sqrt(max(l,1))/Pi(D|X).

Hence E_Pi_D ||P_L(f-P_n)||infty <= C sqrt(d max(L,1)/n)/Pi(D|X), and E_Pi_D ||P_L(f-P_n)||M(sqrt(l∨1)) <= C/Pi(D|X). The second follows by summing levelwise exponential tail probabilities before integrating, as in (41)-(42) of the primary source.

## Sharp supnorm via the commutator

The empirical wavelet coefficients obey

E max_k |(P_n-P0)psi_lk| <= C[sqrt((l∨1)/n)+2^(l/2)(l∨1)/n].

This is obtained by the bounded-variance Bernstein inequality with variance <=||f0||infty and envelope C2^(l/2), union over 2^l signs/locations, and integrating the resulting tail. Summing against 2^(l/2) gives ||P_L(P_n-P0)||infty=O_P(sqrt(d L/n)+dL/n)=O_P(sqrt(dL/n)). Also ||P_L f0-f0||infty<=Cd^-alpha, and d^-alpha<=C sqrt(dL/n) for both cutoffs.

On D_n, Taylor expansion of exp gives

f-f0=f0 h+R, ||R||infty<=C[||h||infty^2+d^-alpha].

The normalization constant is already removed by writing theta-theta* in E_L, so this formula AS WRITTEN requires care: f/f0 is not exp(h) but exp(h) times a scalar. Replace h here by a=T-c(T)-g0 plus its truncation error, or explicitly account for the scalar. The corrected form is f-f*=f* [h-P_f* h]+O(||h||infty^2). Since h has Lebesgue mean zero, ||h||infty<=C||h-P_f* h||infty and the centered v=h-P_f*h belongs to V_L. Therefore use (K) with v and f* or f0, absorb the O(d^-alpha) difference between f* and f0, and obtain

c||h||infty <= ||P_L(f-f0)||infty+C d^-beta||h||infty+C||h||infty^2+Cd^-alpha.

Because ||h||infty<=zeta_n=o(1), absorb the two linear-small terms uniformly on D_n. Thus

||f-f0||infty <=C[||P_L(f-f0)||infty+d^-alpha].

The preceding coefficient and empirical bounds prove posterior supnorm tightness at a_n=sqrt(dL/n). For any slowly increasing M_n with M_n sqrt(L)/w_L->0, posterior probability tends to one on D_n intersect {||f-f0||infty<=M_n a_n}. This gives precisely the source supnorm supplier, now derived without the source's tail restriction or its alpha>1 proof restriction.

## Finite projections and weak M0(w)

For any fixed finite linear combination gamma of wavelets, the same likelihood expansion has Var_f gamma->Var0 gamma uniformly on D_n and Taylor error o(1). The fixed-coordinate prior ratio tends to one uniformly on D_n (S1 global log-Lipschitz; S2 bounded low quotient coordinates and fixed precision). The shifted image of D_n contains the ball with half its radius for large n; the latter has posterior probability tending to one if the radii b_n are chosen with the preceding contraction. Thus the ratio of shifted likelihood integrals tends to one by upper/lower sandwich. For every fixed real s,

E_Pi_D exp[s sqrt(n)(P_f-P_n)gamma] -> exp[s^2 Var0(gamma)/2]

in P0-probability. The elementary finite-dimensional Laplace continuity argument (or an actually proved local supplier) then gives the joint finite-projection Gaussian limit, with covariance P0(psi_i psi_j)-P0psi_i P0psi_j. The constant direction has zero variance, as required. This is convergence centered at P_n(L) on every fixed projection once L exceeds its levels.

The restricted bound (M) gives posterior tightness in M(sqrt(l∨1)) for projected coefficients. Since sqrt(l)/w_l->0, projected posterior tails above any fixed J tend to zero uniformly in n, in posterior probability and then P0-probability. For nonlinear density tails above L, on the sharp supnorm event,

sqrt(n)||P_>L f||M(w) <= sqrt(n)||P_>L f0||M(w)+C sqrt(n)2^(-L/2)w_L^-1 ||f-f0||infty

<=o(1)+C M_n sqrt(L)/w_L=o(1).

The first term is o(1) because f0 has alpha coefficient regularity, both cutoffs satisfy sqrt(n)d^(-alpha-1/2)/w_L<=C sqrt(L)/w_L, and admissibility makes the latter vanish. Remove D and the sharp event at total posterior probability o_P(1). The existing proved finite-projection/tail criterion then yields weak BvM in M0(w).

## Smallest proposed suppliers and remaining review duties

1. Compact-wavelet projection kernel, approximation, and commutator lemma (K), including constant-preserving low scaling convention.
2. Finite exponential-family quotient coercivity and arbitrary-log-Lipschitz/Gaussian preliminary contraction, with the explicit polar tail calculation above.
3. Restricted one-coordinate Laplace bound, sharp supnorm upgrade, and finite-functional Laplace limit. These can be one substantial Type-S posterior supplier to avoid duplicating the contraction proof.
4. Type-S weak multiscale BvM theorem invokes supplier3 and the existing finite-projection/tail criterion.

Remaining local authoring/review details: give a fully formal finite-dimensional Laplace continuity proof with existing local weak-convergence suppliers; check the chosen actual wavelet basis meets the kernel interface (the current broad wavelet definition alone does not state all of it); verify the quotient low-block construction in the final item, particularly for arbitrary low scaling functions. These are identified explicitly rather than silently importing them. The source's hand-waved shift invariance and erroneous missing s/s² factors in displayed (44)-(45) are avoided above.


## Final installed proposal status

The three active item bodies include the full quotient-prior interface, polar coercivity proof, direct restricted exponential moments, commutator supremum contraction, finite-dimensional Laplace continuity argument, and M0(w) posterior tails. The kernel supplier additionally proves exp-composition directly in wavelet coefficients by a telescoping derivative/cancellation argument, including integer smoothness, and proves the needed beta-Hölder consequence. Thus the earlier “remaining review duties” above describe preliminary research, not omitted steps in the installed proposal. The final owner review remains independent. Explicit actual-renderer layout on these three new sources returned `3 items, 23 steps, 0 defects`; this is formatting evidence only. No tests, native workflow operations, recertification, or metadata maintenance were performed.
