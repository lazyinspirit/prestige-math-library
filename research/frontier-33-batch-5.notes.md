# frontier-33 batch 5 — scaffold checkpoint

Scope: only this batch's pages.json, coverage.json and notes.md. Read CLAUDE.md,
README.md, SCHEMA.md, task and full NT-16/NT-21 design sections. No published
content or plan/workflow mutations authorised. Starting manifests were empty.

Spec order/requires match dispatch exactly. Design has no numeric orders in
these sections; its Requires paragraphs name a broader prerequisite set than
the spec's immediate NT-15-B / NT-20-B edges. Preserve spec; drift owns any
closure discrepancy. No scope reduction is authorised.

Source reading in progress (2026-09-07): live web fetches of Montgomery–Vaughan
Ch.6 author-hosted excerpt, Kedlaya chapters 1,4,7,8, Milne ANT v3.08, Stein ANT,
and Conrad Math 676 absolute-values and inertia-surjectivity handouts.
All exact URLs and locators will be in coverage. Shell HTTP attempts to all
five initial hosts failed DNS; web fetching succeeds. Stein alternate
https://wstein.org/books/ant/ant.pdf recovered the same book after
https://www.williamstein.org/books/ant/ant.pdf returned a web internal error.
Do not fabricate validator fetch stamps.

Verified dependency statements: published lem-local-logarithmic-derivative-zeta
has a local O(log(|t|+2)) formula, with t off zero ordinates; extend its finite
formula by continuity for high-height nonzero s if needed. Published
thm-hadamard-product-for-riemann-xi has the genus-one product; use paired terms
1/(s-rho)+1/rho with absolute convergence. Published
cor-zeta-zero-count-unit-interval counts endpoints and multiplicity;
thm-von-mangoldt-explicit-formula-truncated is for half-weighted psi_0 with an
explicit nearest-other-prime-power error, bounded by log x. Its difference
from ordinary psi is at most (log x)/2. Published
lem-chebyshev-functions-prime-power-comparison is stronger than the design's
O(sqrt(x) log^2 x) requirement. Published
lem-prime-counting-chebyshev-partial-summation retains the lower endpoint.
Published thm-dirichlet-l-nonvanishing-line-one excludes t=0: explicitly add
NT-13's nonvanishing-at-one dependency before AP Tauberian use.
Published thm-fundamental-identity-for-primes-in-number-fields and
thm-ramification-and-residue-degrees-in-towers have the required relative
number-field statements.

Decisions/open obligations:
- Zeta bound must explicitly subtract the pole near 1; s != 1 alone is not a
  uniform distance exclusion. MV 6.7 proves even O(log t) at high heights.
- Preserve the global real-part partial-fraction lemma as a stronger refinement,
  not a duplicate of the already-published local complex formula.
- Add a monotone desmoothing lemma after Newman. Complex character sums are
  not monotone; apply Newman characterwise, then orthogonality before using
  monotonicity of the nonnegative residue-class sum.
- Milne 7.38 proves discrete/separable local extension only. Stein's older
  section 19.1 also explicitly omits general existence. Read Conrad §6 before
  scaffolding the design's general nonarchimedean theorem.
- Distinguish normalized |x|_P = NP^(-ord_P x) from the extension of |.|_p:
  the former restricts to |.|_p^(ef), and its 1/(ef) power extends |.|_p.
- Stein 9.3.4 overstates complete splitting in a nonnormal decomposition field.
  Keep only e=f=1 at the distinguished contracted prime; Milne 8.11 explicitly
  warns that complete splitting of the base prime needs D normal.
- Build completion-as-local-factor and preservation of residue fields; local
  automorphisms descend by normality of L/K, not a false assertion of density
  of K in L.
- Good reduction: inertia fixes each integral root modulo P; distinct reductions
  (discriminant a unit) imply it fixes every root, so inertia is trivial.
- No honest counterexample is known to a putative uniform zero-free region for
  all Dirichlet L functions merely because this page proves only the zeta case.
  Replace the design's misleading cex kind by a scope remark, retaining the
  precise logical limitation; do not assert existence of a Siegel zero.

Next: finish exact source passages, write item-level claims/deps/strategies and
coverage dispositions, then run all task validators. No validator has run yet.

## lem-zeta-logarithmic-derivative-zero-bound

Claim/conventions: For xi(s)=s(s-1)pi^(-s/2)Gamma(s/2)zeta(s)/2 with Hadamard constant B, zeta'/zeta=B+sum_rho(1/(s-rho)+1/rho)-1/(s-1)+(log pi)/2-Gamma'(1+s/2)/(2Gamma(1+s/2)). Interpret meromorphically and sum nontrivial zeros with multiplicity using the convergent genus-one terms. For -1<=sigma<=2, |t|>=3 away from zeros, Re(zeta'/zeta)=sum_rho Re(1/(s-rho))-(log|t|)/2+O(1), the real sum converging absolutely.

Dependencies (and proof rationale): thm-hadamard-product-for-riemann-xi, def-riemann-xi-function, thm-stirling-formula-gamma, thm-cauchy-integral-formula-higher-derivatives, cor-zeta-zero-count-unit-interval, thm-trivial-zeros-and-critical-strip. Differentiate the locally normally convergent logarithmic product; control Gamma log derivative by Cauchy estimates on Stirling remainder in a wider sector. Absorb sum Re(1/rho) and bounded pole terms only in the high-height real-part assertion. Correct the source Gamma argument; this strengthens the published local formula rather than duplicating it.

Read support: https://kskedlaya.org/ant/chap-zeroes.html — §8.3, Hadamard calculation in proof of Theorem 8.8.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## lem-zeta-three-four-one-logarithmic-derivative-inequality

Claim/conventions: For sigma>1 and real t, -3 zeta'/zeta(sigma)-4 Re(zeta'/zeta(sigma+it))-Re(zeta'/zeta(sigma+2it))>=0.

Dependencies (and proof rationale): thm-von-mangoldt-logarithmic-derivative-zeta. Expand 3+4cos u+cos(2u)=2(1+cos u)^2 against the absolutely convergent nonnegative von Mangoldt coefficients. Needed on A; B only works the identity explicitly.

Read support: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — §6.1, proof of Theorem 6.6 invoking Lemma 6.5.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-riemann-zeta-classical-zero-free-region

Claim/conventions: There is an absolute c0>0 such that zeta has no zero in sigma>=1-c0/log(|t|+2); its pole at 1 is not a zero.

Dependencies (and proof rationale): lem-zeta-logarithmic-derivative-zero-bound, lem-zeta-three-four-one-logarithmic-derivative-inequality, thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane, thm-riemann-zeta-continuation-to-the-right-half-plane. At a hypothetical beta+i gamma use positivity of every real zero term at sigma>1, obtaining 4/(sigma-beta)<=3/(sigma-1)+C log(|gamma|+2). Choose sigma-1=a/log with a sufficiently small, then exclude beta too close to 1. Compactness on bounded heights uses the previously established line and (s-1)zeta near its pole.

Read support: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.6, pp.172–173.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## lem-zeta-horizontal-logarithmic-derivative-comparison

Claim/conventions: For a sufficiently narrow fixed fraction of the classical region and |t|>=3, |zeta'/zeta(sigma+it)|=O(log(|t|+2)), uniformly up to sigma=2; the same bound holds for sigma>=2.

Dependencies (and proof rationale): thm-riemann-zeta-classical-zero-free-region, lem-local-logarithmic-derivative-zeta, lem-zeta-logarithmic-derivative-zero-bound, thm-von-mangoldt-logarithmic-derivative-zeta. Compare with s1=1+1/log(|t|+2)+it. Bound the sum of positive Re(1/(s1-rho)) by O(log t). For local zeros, distance comparison and horizontal length give |1/(s-rho)-1/(s1-rho)|<=C Re(1/(s1-rho)); the remaining local-formula error is O(log t). Extend through zero ordinates by continuity. Euler series handles sigma beyond s1.

Read support: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.7, equations (6.9)–(6.11), pp.174–175.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-zeta-bounds-in-classical-zero-free-region

Claim/conventions: There are 0<c2<c1<c0 and C>0: for |t|>=3 and sigma>=1-c1/log(|t|+2), |zeta'/zeta(s)|<=C log^2(|t|+2) (indeed O(log)); in the c2 region |1/zeta(s)|<=C log(|t|+2). For |t|<=3 and 1-c2/log(|t|+2)<=sigma<=2, zeta'/zeta(s)+1/(s-1)=O(1) and 1/zeta(s)=O(|s-1|), with removable interpretations at 1.

Dependencies (and proof rationale): lem-zeta-horizontal-logarithmic-derivative-comparison, thm-riemann-zeta-classical-zero-free-region, thm-euler-product-for-riemann-zeta, thm-riemann-zeta-continuation-to-the-right-half-plane. Integrate the stronger O(log t) derivative over a horizontal length O(1/log t) from s1; Euler logarithm there is <=log log(|t|+2)+O(1). Compactness gives the explicitly pole-subtracted low-height bounds. Mere s!=1 is not a uniform pole exclusion.

Read support: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.7, pp.174–175.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## lem-zeta-reciprocal-zero-sum-bound

Claim/conventions: For T>=2, sum over nontrivial zeros with 0<|Im rho|<=T of 1/|rho| is O(log^2 T), with multiplicity.

Dependencies (and proof rationale): cor-zeta-zero-count-unit-interval, def-riemann-zeta-zero-counting. Separate finitely many |Im rho|<=1; sum O(log(n+2)/n) over positive and negative unit ordinate bands. Never use the cancelling signed sum 1/Im rho.

Read support: https://kskedlaya.org/ant/part-2-4.html — §7.2, proof of Theorem 7.7 after Theorem 7.6.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## lem-zeta-explicit-formula-zero-free-error-balance

Claim/conventions: For x>=2 and admissible finite T>=3, the truncated explicit formula and the classical region imply psi(x)-x=O(x exp(-c0 log(x)/log(T+2)) log^2 T+x log^2(xT)/T+log x), after harmless adjustment of absolute constants.

Dependencies (and proof rationale): thm-von-mangoldt-explicit-formula-truncated, thm-riemann-zeta-classical-zero-free-region, lem-zeta-reciprocal-zero-sum-bound, def-half-weighted-chebyshev-psi. Bound each x^rho using beta<=1-c0/log(T+2), sum reciprocal absolute values, and use min<=1 in the supplied truncation error. The half-weight jump costs at most log x/2. If height must avoid ordinates choose a non-ordinate in [T,T+1]; bounded finiteness suffices.

Read support: https://kskedlaya.org/ant/part-2-4.html — §7.2, proof of Theorem 7.7.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-chebyshev-psi-prime-number-theorem-error

Claim/conventions: For some absolute c>0, psi(x)=x+O(x exp(-c sqrt(log x))) for x>=2.

Dependencies (and proof rationale): lem-zeta-explicit-formula-zero-free-error-balance, thm-zeta-bounds-in-classical-zero-free-region. Set log T=A sqrt(log x) after displaying every error, with fixed sufficiently small A>0, and absorb polynomial logarithms by decreasing c. Explain the equivalent Perron rectangle uses sigma1=1-c1/log T, so crosses only the proved zero-free region; its vertical error is O(x^sigma1 log^2 T), horizontal error O(x log^2(xT)/T). The finite-zero estimate supplies the main proof, with no infinite unsmoothed zero sum.

Read support: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.9, pp.179–181; independently Kedlaya Theorem 7.7.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## cor-chebyshev-theta-prime-number-theorem-error

Claim/conventions: For some absolute c>0, theta(x)=x+O(x exp(-c sqrt(log x))).

Dependencies (and proof rationale): thm-chebyshev-psi-prime-number-theorem-error, lem-chebyshev-functions-prime-power-comparison. Subtract the published prime-power comparison; its O(sqrt x log x) bound is absorbed.

Read support: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.9, equation (6.13), pp.179–181.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## def-logarithmic-integral

Claim/conventions: For x>=2 define Li(x)=integral from 2 to x of dt/log t; Li(2)=0.

Dependencies (and proof rationale): none. Fix the lower endpoint; no principal value across 1.

Read support: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — §6.2, equation (6.14), p.179.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## lem-logarithmic-integral-asymptotic-expansion

Claim/conventions: For fixed integer m>=1, Li(x)=sum_{j=0}^{m-1} j! x/log^(j+1)(x)+O_m(x/log^(m+1)(x)) as x tends to infinity.

Dependencies (and proof rationale): def-logarithmic-integral. Integrate by parts m times, retain finite lower-end constants, and split the remainder integral at sqrt x.

Read support: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — §6.2, equation (6.15), pp.179–180.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-prime-number-theorem-logarithmic-integral

Claim/conventions: For some absolute c>0, pi(x)=Li(x)+O(x exp(-c sqrt(log x))).

Dependencies (and proof rationale): cor-chebyshev-theta-prime-number-theorem-error, def-logarithmic-integral, lem-prime-counting-chebyshev-partial-summation. Substitute theta=t+E(t) in the exact Abel identity; the main term differs from Li by 2/log2. Split the error integral at sqrt x and decrease c.

Read support: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.9, equation (6.14) and proof, pp.179–181.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## cor-prime-number-theorem

Claim/conventions: pi(x)~x/log x, theta(x)~x, and psi(x)~x; these three asymptotic assertions are equivalent.

Dependencies (and proof rationale): thm-prime-number-theorem-logarithmic-integral, lem-logarithmic-integral-asymptotic-expansion, lem-prime-counting-chebyshev-partial-summation, lem-chebyshev-functions-prime-power-comparison. For the converse pi to theta use Abel summation theta=pi log x-integral_2^x pi(t)/t dt and an epsilon split; do not claim equivalence from definitions alone.

Read support: https://kskedlaya.org/ant/chap-pnt.html — §1.3, Lemma 1.7.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## cor-nth-prime-asymptotic

Claim/conventions: For the n-th prime p_n, p_n~n log n.

Dependencies (and proof rationale): cor-prime-number-theorem. Use n=pi(p_n), first obtain log p_n/log n->1, then invert with two-sided epsilon bounds. This is an explicit elementary consequence of the read counting result.

Read support: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — §6.2, Theorem 6.9 and equation (6.15), monotone inversion consequence.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## lem-newman-damped-contour-estimates

Claim/conventions: Let |f|<=B on [0,infinity), g its Laplace transform, and g_T its truncation. For radius R, the integrals of (g-g_T)e^(Tz)(1+z^2/R^2)/z over the right semicircle and of g_T e^(Tz)(1+z^2/R^2)/z over the left semicircle have absolute values at most 2pi B/R each.

Dependencies (and proof rationale): thm-cauchy-integral-formula-circle. The right tail is <=B exp(-T Re z)/Re z; the left truncated transform is <=B(exp(-T Re z)-1)/(-Re z). On |z|=R, |(1+z^2/R^2)/z|=2|Re z|/R^2; integrate arc length pi R. Endpoint values interpreted by limits.

Read support: https://kskedlaya.org/ant/chap-pnt.html — §1.4, proof of Theorem 1.8, right and left semicircle estimates.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-newman-zagier-tauberian-theorem

Claim/conventions: For bounded locally Lebesgue-integrable f:[0,infinity)->C, if g(s)=integral_0^infinity f(t)e^(-st)dt extends holomorphically to an open set containing Re s>=0, then integral_0^infinity f(t)dt converges to g(0).

Dependencies (and proof rationale): lem-newman-damped-contour-estimates, thm-residue-theorem-null-homologous-cycle, thm-dominated-convergence. For each finite R take a contour with right semicircle and a thin left path in the continuation neighborhood. Residues compare g(0) with g_T(0). Deform the entire g_T left integral to a left semicircle; the remaining g left-path integral tends to zero by dominated convergence. Obtain limsup_T |g(0)-g_T(0)|<=2B/R, then R->infinity. Prove holomorphy of the finite transform by differentiation under a bounded finite integral.

Read support: https://kskedlaya.org/ant/chap-pnt.html — §1.4, Theorem 1.8 and its complete proof.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## lem-monotone-chebyshev-tauberian-desmoothing

Claim/conventions: Let A:[1,infinity)->[0,infinity) be nondecreasing and locally integrable, with A(x)=O(x), and let a>=0. If integral_1^infinity (A(x)-ax)/x^2 dx converges, then A(x)/x->a.

Dependencies (and proof rationale): thm-cauchy-criterion-for-improper-integrals. Use vanishing tail integrals over [x,lambda x] and [x/lambda,x] to squeeze A(x)/x between a log(lambda)/(lambda-1) and a lambda log(lambda)/(lambda-1), then lambda down to 1. These estimates work for a=0; no differentiability is required.

Read support: https://kskedlaya.org/ant/chap-pnt.html — §1.3, monotonicity argument preceding §1.4.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## lem-dirichlet-character-chebyshev-laplace-transform

Claim/conventions: For a fixed character chi mod q put Psi_chi(x)=sum_{n<=x}chi(n)Lambda(n) and delta_chi=1 for the principal character, 0 otherwise. The bounded function e^(-t)Psi_chi(e^t)-delta_chi has Laplace transform -L'(s+1,chi)/((s+1)L(s+1,chi))-delta_chi/s, holomorphic across Re s=0 after removing the principal singularity.

Dependencies (and proof rationale): thm-dirichlet-l-euler-product, thm-dirichlet-series-summatory-integral, thm-chebyshev-theta-linear-bounds, lem-chebyshev-functions-prime-power-comparison, thm-dirichlet-l-nonzero-at-one, thm-dirichlet-l-nonvanishing-line-one, thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane, thm-principal-dirichlet-l-factorization, thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane. Differentiate the normally convergent Euler logarithm to obtain -L'/L=sum chi(n)Lambda(n)n^-w, then use the summatory integral and x=e^t. At s=0 the principal simple pole cancels delta/s; elsewhere use both nonvanishing-at-one and line-one theorems. The finite Euler factors have no zeros on Re w=1. Retain the factor (s+1) omitted in the source last paragraph.

Read support: https://kskedlaya.org/ant/chap-primes-in-ap.html — §4.4, proof of Theorem 4.12.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-prime-number-theorem-arithmetic-progressions

Claim/conventions: For each fixed integer q>=1 and gcd(a,q)=1, psi(x;q,a)~x/phi(q), theta(x;q,a)~x/phi(q), and pi(x;q,a)~Li(x)/phi(q).

Dependencies (and proof rationale): lem-dirichlet-character-chebyshev-laplace-transform, thm-newman-zagier-tauberian-theorem, thm-dirichlet-character-orthogonality, lem-monotone-chebyshev-tauberian-desmoothing, lem-chebyshev-functions-prime-power-comparison, lem-prime-counting-chebyshev-partial-summation, lem-logarithmic-integral-asymptotic-expansion. Apply Newman characterwise and sum the convergent integrals by finite orthogonality. Only then apply desmoothing to the nonnegative monotone residue-class psi. Prime powers contribute at most the global comparison; repeat Abel summation for the class. Constants/neighborhoods may depend on q; q=1 included.

Read support: https://kskedlaya.org/ant/chap-primes-in-ap.html — §4.4, Theorem 4.12 and proof.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## ex-the-three-four-one-trigonometric-inequality

Claim/conventions: Expand the positive square and its Lambda(n)n^-sigma coefficients at t log n.

Dependencies (and proof rationale): lem-zeta-three-four-one-logarithmic-derivative-inequality. Compute the three shifted real parts explicitly.

Read support: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.6 proof.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## ex-zero-free-region-parameter-balance

Claim/conventions: Given the comparison constant C, choose delta=1/(2C log(|gamma|+2)) and derive 1-beta>=1/(14C log(|gamma|+2)) in the high-height argument.

Dependencies (and proof rationale): thm-riemann-zeta-classical-zero-free-region. Keep the constants 3,4,7 visible and identify the separate compact-height step.

Read support: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.6 proof.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## ex-optimizing-the-prime-number-theorem-contour-height

Claim/conventions: Evaluate the finite-zero, truncation, horizontal and vertical error estimates at T=exp(A sqrt(log x)).

Dependencies (and proof rationale): thm-chebyshev-psi-prime-number-theorem-error, lem-zeta-explicit-formula-zero-free-error-balance. Display exponential rates c0/A and A; absorb log powers only after choosing a fixed A.

Read support: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.9 proof.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## ex-from-psi-to-the-logarithmic-integral

Claim/conventions: Carry the psi estimate through theta to pi, retaining the endpoint constant 2/log2.

Dependencies (and proof rationale): thm-prime-number-theorem-logarithmic-integral. Work both error integrals with a split at sqrt x.

Read support: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.9 proof.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## ex-newman-tauberian-prime-number-theorem

Claim/conventions: For f(t)=e^-t psi(e^t)-1 verify its transform -zeta'(s+1)/((s+1)zeta(s+1))-1/s and recover psi(x)~x.

Dependencies (and proof rationale): lem-dirichlet-character-chebyshev-laplace-transform, thm-newman-zagier-tauberian-theorem, lem-monotone-chebyshev-tauberian-desmoothing, cor-prime-number-theorem. Use q=1 transform and desmoothing; the proof does not use the quantitative zero-free-region theorem.

Read support: https://kskedlaya.org/ant/chap-pnt.html — §§1.3–1.4.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## ex-prime-number-theorem-in-a-small-progression

Claim/conventions: For q=4 compute psi(x;4,1)=(Psi_chi0(x)+Psi_chi4(x))/2 and psi(x;4,3)=(Psi_chi0(x)-Psi_chi4(x))/2; each prime count is asymptotic to Li(x)/2.

Dependencies (and proof rationale): thm-prime-number-theorem-arithmetic-progressions, thm-dirichlet-character-orthogonality. List the two characters on 1 and 3; Psi_chi0=psi-sum_{2^k<=x}log2 and the correction is O(log x).

Read support: https://kskedlaya.org/ant/chap-primes-in-ap.html — §4.4, Theorem 4.12.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## cex-dirichlet-density-alone-does-not-give-a-counting-asymptotic

Claim/conventions: The positive integers with first decimal digit 1 have Dirichlet density log(2)/log(10), but counting ratios have distinct subsequential limits 1/9 and 5/9. Thus weighted density alone cannot supply an ordinary counting asymptotic.

Dependencies (and proof rationale): thm-riemann-zeta-continuation-to-the-right-half-plane. Use S=union_k [10^k,2*10^k) intersect N. Compare each Dirichlet block to its integral with uniformly bounded total error; (s-1)sum_S n^-s tends to log2/log10 by a geometric series. Count at 10^m and 2*10^m. State this is an integer-set counterexample to the inference, not a failure of the AP theorem.

Read support: https://kskedlaya.org/ant/chap-primes-in-ap.html — §4.2 Definitions 4.3–4.4, Example 4.5; Exercise 4.5.3.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## rem-the-classical-zeta-region-is-not-a-uniform-dirichlet-l-region

Claim/conventions: The zeta proof and fixed-q progression theorem establish no error bound uniform in growing q; no existence of exceptional real zeros is asserted.

Dependencies (and proof rationale): thm-riemann-zeta-classical-zero-free-region, thm-prime-number-theorem-arithmetic-progressions. Explain dependence of continuation neighborhoods and constants on the character. Correct the design cex kind to a scope remark; absence of a proved uniform theorem is not a counterexample.

Read support: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — §6.1.1, paragraph following Exercise 4, p.176.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-completion-of-an-absolutely-valued-field

Claim/conventions: The metric completion of an absolutely valued field F has a unique compatible complete valued field structure, with dense isometric F and the universal property for isometric field maps into complete fields. In the nonarchimedean case it preserves the value group and the residue field.

Dependencies (and proof rationale): def-multiplicative-absolute-value-on-a-field, thm-metric-completion-exists, thm-metric-completion-unique. Extend addition/product on Cauchy sequences; a nonzero limit has representatives bounded away from zero so inverses are Cauchy. For nonarchimedean values, close enough nonzero elements have exactly the same value. Approximation within distance <1 proves the residue map surjective; its kernel is the original maximal ideal. Inherit the published general metric-completion choice assumption explicitly; do not label this generic construction ZF.

Read support: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §5, Definitions 5.1–5.2 and Theorem 5.3, pp.8–9.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## def-normed-vector-space-over-an-absolutely-valued-field

Claim/conventions: A norm on an F-vector space is positive definite, satisfies ||av||=|a| ||v|| and ||v+w||<=||v||+||w||; F may have any multiplicative absolute value, including a nonarchimedean or trivial one.

Dependencies (and proof rationale): def-multiplicative-absolute-value-on-a-field. Define the induced metric; do not silently use the library definition restricted to real/complex scalars.

Read support: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §5, Definition 5.4, p.9.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field

Claim/conventions: For a finite-dimensional normed vector space over a complete absolutely valued field, every norm is bounded above and below by positive multiples of any coordinate sup norm. The space is complete and its linear subspaces are closed.

Dependencies (and proof rationale): def-normed-vector-space-over-an-absolutely-valued-field. Induct on dimension. Proper subspaces are complete and hence closed; quotient norms by coordinate hyperplanes bound each coordinate functional below. The upper bound is the triangle inequality on a fixed finite basis. Prove the quotient metric and complete-subspace-is-closed facts inline; no compact unit sphere assumption.

Read support: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §5, Theorem 5.5 and proof, p.9.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## lem-uniqueness-of-an-extended-complete-field-absolute-value

Claim/conventions: Two absolute values extending a fixed absolute value on a complete field F to a finite extension E are equal; an extension, if it exists, makes E complete.

Dependencies (and proof rationale): thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field. View both as F-vector-space norms, compare by constants, apply the comparison to x^n and take nth roots. Completeness follows from norm equivalence. This avoids the design suggestion that density alone proves uniqueness in a nontrivial finite extension.

Read support: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §6, Lemma 6.1, pp.10–11.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## lem-hensel-factor-lifting-over-a-complete-valued-field

Claim/conventions: Let F be complete nonarchimedean with valuation ring A and residue field k. If g in A[T] has nonzero reduction h0 H0 with h0 monic and gcd(h0,H0)=1, then g=hH with h monic reducing to h0 and H reducing to H0. The polynomial g need not be monic and the valuation need not be discrete.

Dependencies (and proof rationale): def-multiplicative-absolute-value-on-a-field. Lift the finite coefficient data and Bezout relation; choose 0<|pi|<1 dominating all initial errors. Work with I=(pi), for which I^n is |x|<=|pi|^n. Solve corrections qH+Qh modulo I, using division by monic h to keep deg q<deg h0 and deg Q<=deg g-deg h0. Iterate with coefficient lifts and pass to complete limits. State countable selection cost for arbitrary F if using representatives; finite number-field applications admit fixed countable dense representatives. Trivial absolute value is immediate.

Read support: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §6, Theorem 6.5 and full proof, pp.12–13.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring

Claim/conventions: If a monic irreducible f in F[T], F complete nonarchimedean, has |f(0)|<=1, then every coefficient of f has absolute value <=1.

Dependencies (and proof rationale): lem-hensel-factor-lifting-over-a-complete-valued-field. If a coefficient has maximal value >1, divide by it; the reduced polynomial has zero constant term, nonzero intermediate term and lowered degree. Factor reduction as T^r H0 with H0(0)!=0; Hensel gives a proper positive-degree factor over F, contradiction. This is why nonmonic lifting was needed.

Read support: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §6, proof of Theorem 6.4, p.11.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-unique-extension-of-a-nonarchimedean-absolute-value

Claim/conventions: For any finite field extension L/K with K complete nonarchimedean, |x|_L=|N_{L/K}(x)|_K^(1/[L:K]) is the unique extending absolute value and L is complete. Separability and discreteness are not assumed; the trivial valuation case is included.

Dependencies (and proof rationale): lem-uniqueness-of-an-extended-complete-field-absolute-value, lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring, thm-basic-laws-for-field-norm-and-trace, thm-field-norm-and-trace-agree-with-operator-determinant-and-trace. Norm multiplicativity and scalar formula give all axioms but triangle. Reduce |x+1|<=1 for |x|<=1 by the norm tower to K(x); its norm is the constant coefficient of its minimal polynomial. The coefficient lemma gives |f(-1)|<=1, hence triangle. Uniqueness/completeness follow from the separate norm lemma. Inseparable extensions need no normal closure.

Read support: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §6, Lemma 6.1 and Theorem 6.4, pp.10–11; Milne Theorem 7.38 for discrete separable specialization.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-number-field-places-classification

Claim/conventions: Places mean equivalence classes of nontrivial absolute values. For a number field K they consist of real embeddings, conjugate pairs of nonreal complex embeddings, and a unique nonzero prime P of O_K for each nonarchimedean place. A finite-place representative is |x|_P=(N P)^(-ord_P x); for P|p its restriction to Q is |.|_p^(e f).

Dependencies (and proof rationale): thm-completion-of-an-absolutely-valued-field, thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field, lem-uniqueness-of-an-extended-complete-field-absolute-value, thm-ostrowskis-theorem-for-the-rationals, thm-equivalent-field-absolute-values-characterisation, lem-dedekind-localisation-at-nonzero-prime-is-dvr, thm-fundamental-theorem-of-algebra-liouville-proof, def-ring-of-integers-of-a-number-field, cor-norm-of-a-prime-ideal. A nontrivial absolute value on an algebraic extension cannot restrict trivially: use the minimal equation and its inverse. In the finite case integral equations bound O_K by 1; elements of value <1 form a nonzero prime P, units outside P have value1, and the DVR localization gives its valuation power. For archimedean values the completion contains R with a power of its absolute value; the image of R tensor K is finite dimensional, complete and dense, hence the whole completion. FTA makes this R or C; uniqueness of extensions identifies the ordinary absolute value power and embeddings up to conjugation. No general Gelfand–Mazur theorem or class-group finiteness is required.

Read support: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §7, Corollary 7.3 and preceding normalization, pp.15–16; Milne Theorem 7.14.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## def-completion-of-a-number-field-at-a-prime

Claim/conventions: For a nonzero prime P of O_K define K_P as the completion at |x|_P=(N P)^(-ord_P x). Its valuation ring has residue field O_K/P. In a relative extension P|p, use |.|_P^(1/(e f)) when an absolute value literally extending the normalized |.|_p is required.

Dependencies (and proof rationale): thm-number-field-places-classification, thm-completion-of-an-absolutely-valued-field, def-ramification-index, def-prime-above-and-residue-degree. The relative formula N P=(N p)^f and ord_P|K=e ord_p fixes the exponent ef; completions have the same topology for positive powers and need no uniformizer choice.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 7, Theorem 7.38 and Remark 7.39; Chapter 8, Proposition 8.2.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## lem-number-field-completions-as-local-polynomial-factors

Claim/conventions: If L=K(alpha) is a finite separable number-field extension with minimal polynomial F and p a finite prime of K, factor F into distinct monic irreducibles F_i over K_p. Then L tensor_K K_p is the product of K_p[T]/(F_i), and these factors are precisely L_P for P|p. In particular sum_{P|p}[L_P:K_p]=[L:K].

Dependencies (and proof rationale): def-completion-of-a-number-field-at-a-prime, thm-unique-extension-of-a-nonarchimedean-absolute-value, thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field, thm-primitive-element-theorem-for-finite-separable-extensions, thm-chinese-remainder-theorem-for-comaximal-ideals. Polynomial CRT gives the finite product. Each factor carries its unique extending value, and L is dense by coefficient approximation. Conversely the image of K_p tensor L in any L_P is finite dimensional, complete and dense, hence surjective onto a factor. Different factors induce inequivalent values: equality would give a K_p-isometry fixing alpha, forcing identical minimal polynomials. Classification labels the factors by primes. Include direct operator norm/trace factorization inline when needed.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Propositions 8.1–8.2, pp.135–136; Conrad Lemma 7.2, pp.14–15.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-galois-action-on-primes-above-a-prime-is-transitive

Claim/conventions: Gal(L/K) acts transitively on primes of O_L above any fixed nonzero p of O_K when L/K is finite Galois.

Dependencies (and proof rationale): thm-chinese-remainder-theorem-for-comaximal-ideals, thm-number-field-integral-ideal-factorisation-in-zf, thm-field-norm-and-trace-by-embeddings. If two prime orbits existed, CRT chooses alpha zero on the first and one on the second. The product of its finitely many Galois conjugates is an integral base element lying in p from the first orbit, but congruent to1 at the second orbit. Contradiction. This is finite prime avoidance made explicit.

Read support: https://wstein.org/books/ant/ant.pdf — §9.2, Theorem 9.2.2 proof, pp.101–102.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## cor-galois-prime-decomposition-efg

Claim/conventions: In a finite Galois extension all primes above p have common ramification index e and residue degree f; with g primes, efg=[L:K].

Dependencies (and proof rationale): thm-galois-action-on-primes-above-a-prime-is-transitive, thm-fundamental-identity-for-primes-in-number-fields. Automorphisms preserve exponents in ideal factorization and identify residue fields; substitute in sum ef.

Read support: https://wstein.org/books/ant/ant.pdf — §9.2, Theorem 9.2.2.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## def-decomposition-group-of-a-prime

Claim/conventions: For a fixed P|p in finite Galois L/K define D(P/p)={sigma in Gal(L/K):sigma P=P}.

Dependencies (and proof rationale): def-prime-above-and-residue-degree. It is the stabilizer subgroup; the chosen prime is part of the notation.

Read support: https://wstein.org/books/ant/ant.pdf — §9.3, Definition 9.3.1, p.104.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-decomposition-group-and-completion

Claim/conventions: For finite Galois L/K and P|p, L_P/K_p is finite Galois and continuous extension/restriction gives a canonical isomorphism D(P/p) with Gal(L_P/K_p); its degree is e f.

Dependencies (and proof rationale): def-decomposition-group-of-a-prime, lem-number-field-completions-as-local-polynomial-factors, cor-galois-prime-decomposition-efg, thm-orbit-stabilizer. Stabilizers preserve the extending valuation, hence extend continuously. A local embedding sends alpha to a root of the global polynomial, all of whose roots lie in L by normality; restriction thus belongs to Gal(L/K) and preserves P by uniqueness of the local absolute value. This proves normality and the inverse maps. Orbit-stabilizer gives |D|=[L:K]/g=ef.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Proposition 8.10, p.139.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## def-inertia-group-of-a-prime

Claim/conventions: For fixed P|p the stabilizer acts on kappa(P)=O_L/P fixing kappa(p); inertia I(P/p) is the kernel of this residue action.

Dependencies (and proof rationale): def-decomposition-group-of-a-prime, thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group. Reduction is well-defined precisely because P is stabilized; equivalently sigma(a)-a belongs to P for all a in O_L.

Read support: https://wstein.org/books/ant/ant.pdf — §9.3.2, Definition 9.3.6 and Proposition 9.3.8, p.106.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## lem-lifting-residue-frobenius-by-galois-conjugates

Claim/conventions: There exists an element of D(P/p) inducing a->a^(N p) on kappa(P).

Dependencies (and proof rationale): def-inertia-group-of-a-prime, thm-chinese-remainder-theorem-for-comaximal-ideals, thm-multiplicative-group-of-a-finite-field-is-cyclic, thm-decomposition-group-and-completion. Use CRT to choose alpha generating kappa(P)^times and zero at the other primes. The orbit polynomial product_sigma(T-sigma alpha) has base integral coefficients; modulo P the q-power of alpha is another root, so equals sigma alpha for some sigma. Its nonzero reduction forces sigma P=P. Agreement on the multiplicative generator proves the whole residue action. Completion preserves this residue map by the local correspondence.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Frobenius element, footnote 1 on p.141; Stein Theorem 9.3.5.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-decomposition-inertia-exact-sequence

Claim/conventions: For finite Galois L/K and fixed P|p there is an exact sequence 1->I(P/p)->D(P/p)->Gal(kappa(P)/kappa(p))->1.

Dependencies (and proof rationale): lem-lifting-residue-frobenius-by-galois-conjugates, thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group, def-inertia-group-of-a-prime. The residue Galois group is cyclic generated by the lifted power map. Its kernel is the defined inertia subgroup.

Read support: https://wstein.org/books/ant/ant.pdf — §9.3.2, Theorem 9.3.5 (not design locator 9.3.2), p.106.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## cor-orders-of-decomposition-and-inertia-groups

Claim/conventions: For a finite Galois extension, |D|=ef, |I|=e, and |D/I|=f. In particular P is unramified exactly when I is trivial.

Dependencies (and proof rationale): thm-decomposition-inertia-exact-sequence, thm-decomposition-group-and-completion, thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group. Take finite group orders in the exact sequence; finite residue extensions are separable.

Read support: https://wstein.org/books/ant/ant.pdf — §9.3.2, Corollary 9.3.7, p.106.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-conjugacy-of-decomposition-and-inertia-groups

Claim/conventions: If sigma P=Pprime, then D(Pprime/p)=sigma D(P/p)sigma^-1 and I(Pprime/p)=sigma I(P/p)sigma^-1, with the residue actions transported by sigma.

Dependencies (and proof rationale): def-inertia-group-of-a-prime. Conjugate stabilizers and reduce sigma tau sigma^-1 on residue representatives.

Read support: https://wstein.org/books/ant/ant.pdf — §9.3, Lemma 9.3.2, p.104.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-decomposition-and-inertia-in-towers

Claim/conventions: For M/L/K with M/K and L/K finite Galois and Q|P|p, D(Q/P)=D(Q/p) intersect Gal(M/L), and likewise for I. Restriction gives exact sequences 1->D(Q/P)->D(Q/p)->D(P/p)->1 and 1->I(Q/P)->I(Q/p)->I(P/p)->1.

Dependencies (and proof rationale): thm-conjugacy-of-decomposition-and-inertia-groups, thm-galois-action-on-primes-above-a-prime-is-transitive, cor-orders-of-decomposition-and-inertia-groups, thm-ramification-and-residue-degrees-in-towers, thm-normal-subgroups-and-quotients-in-the-galois-correspondence. Kernels follow from definitions. Lift an automorphism of L and adjust by Gal(M/L) using transitivity to stabilize Q. Inertia restriction lands in inertia; its image has size e(M/K)/e(M/L)=e(L/K), hence is onto. The intersection statements hold more generally, but the quotient assertions require L/K Galois.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Proposition 8.13, p.141.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-decomposition-and-inertia-fixed-fields

Claim/conventions: Put E=L^D and U=L^I for fixed P|p in finite Galois L/K. P is the unique prime above its contraction to E; that contracted prime has e=f=1 over p. U/E is cyclic of degree f and is unramified at the distinguished primes; L/U is totally ramified there of degree e. The base prime splits completely in E/K if D is normal; this is not asserted for nonnormal E/K.

Dependencies (and proof rationale): thm-decomposition-inertia-exact-sequence, cor-orders-of-decomposition-and-inertia-groups, thm-ramification-and-residue-degrees-in-towers, thm-normal-subgroups-and-quotients-in-the-galois-correspondence, thm-galois-action-on-primes-above-a-prime-is-transitive. Apply transitivity in L/E with group D fixing P, then order formulas and multiplicativity; I normal in D gives U/E cyclic. Intersections show the inertia in L/U is all I, so residue degree1. Explicitly correct Stein 9.3.4: e=f=1 for one contracted prime need not mean every prime splits in nonnormal E/K.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Proposition 8.11, p.140; Stein Propositions 9.3.3–9.3.4, pp.104–105.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## def-arithmetic-frobenius-coset

Claim/conventions: Arithmetic Frobenius at P/p is the unique element of D(P/p)/I(P/p) inducing x->x^(N p) on kappa(P). Its inverse is geometric Frobenius.

Dependencies (and proof rationale): thm-decomposition-inertia-exact-sequence. The exact sequence identifies the quotient with the finite residue Galois group; this defines a coset even at ramified primes.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Frobenius element, p.141.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-unramified-frobenius-element-exists-uniquely

Claim/conventions: If e(P/p)=1, the arithmetic Frobenius coset has a unique lift Frob_P in D(P/p), characterized by Frob_P(a)=a^(N p) modulo P for every a in O_L.

Dependencies (and proof rationale): def-arithmetic-frobenius-coset, cor-orders-of-decomposition-and-inertia-groups. Inertia is trivial; invert the residue isomorphism. At ramified primes retain only the coset.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Frobenius element, pp.141–142.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-frobenius-elements-above-a-prime-are-conjugate

Claim/conventions: For unramified p and sigma P=Pprime, Frob_Pprime=sigma Frob_P sigma^-1; thus p determines a conjugacy class, an element independent of P in the abelian case.

Dependencies (and proof rationale): thm-unramified-frobenius-element-exists-uniquely, thm-conjugacy-of-decomposition-and-inertia-groups, thm-galois-action-on-primes-above-a-prime-is-transitive. Conjugation commutes with the q-power map after transporting residue fields; use uniqueness.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Proposition 8.14; Stein Proposition 9.4.1.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-frobenius-order-is-residue-degree

Claim/conventions: Arithmetic Frobenius has order f(P/p) in D/I and, when unramified, in D.

Dependencies (and proof rationale): def-arithmetic-frobenius-coset, thm-unramified-frobenius-element-exists-uniquely, thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group. Transfer the order of finite-field Frobenius through the residue isomorphism.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Frobenius element, p.142.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## cor-complete-splitting-and-trivial-frobenius

Claim/conventions: An unramified prime in a finite Galois extension splits completely if and only if its Frobenius conjugacy class is the identity.

Dependencies (and proof rationale): thm-frobenius-order-is-residue-degree, cor-galois-prime-decomposition-efg. With e=1, identity means f=1, hence g=[L:K].

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, p.142, paragraph after Proposition 8.14.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## cor-frobenius-compatibility-in-finite-towers

Claim/conventions: In a Galois tower M/L/K unramified at Q|P|p, Frob(Q/p) restricts to Frob(P/p), and Frob(Q/P)=Frob(Q/p)^f(P/p). In an unramified compositum the two restriction Frobenius elements determine the compositum Frobenius.

Dependencies (and proof rationale): thm-decomposition-and-inertia-in-towers, thm-unramified-frobenius-element-exists-uniquely, thm-ramification-and-residue-degrees-in-towers. Compare q-powers and q^f-powers in the residue fields. Restriction to both constituent fields is injective on the compositum Galois group; assume the compositum prime unramified rather than importing unramified-base-change theory.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Propositions 8.15–8.17, p.142.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## lem-good-polynomial-reduction-kills-inertia

Claim/conventions: Let F in Z[T] be monic separable with splitting field L. If p does not divide disc(F), all integral roots have distinct reductions at every P|p, and I(P/p) is trivial; hence p is unramified in L.

Dependencies (and proof rationale): def-discriminant-of-a-monic-polynomial, def-inertia-group-of-a-prime, cor-orders-of-decomposition-and-inertia-groups. The discriminant is the product of squared root differences. If p does not divide it no two reductions coincide. Inertia permutes roots while fixing their reductions, so fixes each root and therefore the splitting field. This supplies the usually implicit unramifiedness step.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Proposition 8.21 and Theorem 8.23 proof, pp.144–145.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## thm-frobenius-cycle-type-and-prime-splitting

Claim/conventions: For monic separable F in Z[T] with splitting field L and p not dividing disc(F), p is unramified in L, F mod p is squarefree, and its irreducible factor degrees are the cycle lengths of arithmetic Frobenius on the roots of F.

Dependencies (and proof rationale): lem-good-polynomial-reduction-kills-inertia, thm-frobenius-elements-above-a-prime-are-conjugate, thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group. Reduction is a bijection of the root sets compatible with Frobenius. Prove inline that the orbit product over a q-power orbit is its irreducible minimal polynomial over F_q, by the fixed field and root count. Distinct primes conjugate the permutation and preserve its cycle type.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Proposition 8.21, Corollary 8.22, Theorem 8.23, pp.144–145.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## ex-decomposition-inertia-in-a-quadratic-field

Claim/conventions: For a quadratic Galois field, compute split (e,f,g)=(1,1,2), inert (1,2,1), and ramified (2,1,1) cases with D, I and residue Frobenius.

Dependencies (and proof rationale): cor-galois-prime-decomposition-efg, cor-orders-of-decomposition-and-inertia-groups, thm-frobenius-order-is-residue-degree. Use the unique subgroups of C2: D=1 for split, D=C2,I=1 for inert, D=I=C2 for ramified.

Read support: https://wstein.org/books/ant/ant.pdf — §9.2.1 and §9.3.2.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## ex-gaussian-and-eisenstein-frobenius

Claim/conventions: In Q(i), odd primes split/inert according as p=1/3 mod4, with arithmetic Frobenius i->i^p; 2 ramifies. In Q(zeta3), p!=3 split/inert according as p=1/2 mod3, with zeta3->zeta3^p; 3 ramifies.

Dependencies (and proof rationale): thm-frobenius-cycle-type-and-prime-splitting, ex-decomposition-inertia-in-a-quadratic-field, thm-multiplicative-group-of-a-finite-field-is-cyclic. Check X^2+1 and X^2+X+1 using cyclic finite-field units; exceptional primes factor by (1+i)^2 and (1-zeta3)^2 up to units. Give integral bases by the quadratic integral equation, not a later cyclotomic theorem.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Examples 8.18–8.19, pp.142–143.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## ex-frobenius-in-a-small-cyclotomic-field

Claim/conventions: In Q(zeta5), Gal=C4 via zeta5->zeta5^a. For p!=5 Frobenius is exponent p mod5; p=2 has order4 and is inert.

Dependencies (and proof rationale): thm-frobenius-cycle-type-and-prime-splitting, thm-frobenius-order-is-residue-degree, cor-galois-prime-decomposition-efg. Prove Phi5 irreducible by Eisenstein after X->X+1, list four embeddings, compute disc(Phi5)=5^3 by derivatives, and reduce the power map. This explicit n=5 calculation does not require NT-24.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Example 8.18, p.143.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## ex-nonabelian-frobenius-conjugacy-class

Claim/conventions: For the splitting field of X^3-2, Gal=S3. Modulo5, X^3-2=(X+2)(X^2+3X+4), the quadratic irreducible, so primes above5 give all three distinct conjugate transpositions as Frobenius.

Dependencies (and proof rationale): thm-frobenius-cycle-type-and-prime-splitting, thm-frobenius-elements-above-a-prime-are-conjugate. Establish degree6 by irreducibility of X^3-2 and adjoining nonreal zeta3 to its real cubic field; the faithful action on three roots is S3. Check quadratic discriminant3 mod5 nonsquare and global polynomial discriminant -108. Transitivity gives every conjugate.

Read support: https://wstein.org/books/ant/ant.pdf — §9.2.2, cube root of two; Milne Theorem 8.23.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## ex-decomposition-groups-in-a-tower

Claim/conventions: For M=Q(zeta5), L=Q(sqrt5), K=Q, and p=2, the unique primes have e=1, residue degrees4 in M/K and2 in each step. D groups give 1->C2->C4->C2->1; all inertia groups are trivial.

Dependencies (and proof rationale): ex-frobenius-in-a-small-cyclotomic-field, thm-decomposition-and-inertia-in-towers, cor-frobenius-compatibility-in-finite-towers. Show zeta5+zeta5^-1 has minimal polynomial T^2+T-1 and generates Q(sqrt5); restricting exponent2 has order2, and the relative Frobenius is its square.

Read support: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Propositions 8.13 and 8.15–8.16; Example 8.18.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## cex-ramified-frobenius-has-no-canonical-lift

Claim/conventions: At 2 in Q(i), D=I=C2 and D/I is trivial; both identity and conjugation lift the same arithmetic residue Frobenius. Thus the residue congruence does not specify a unique element at a ramified prime.

Dependencies (and proof rationale): ex-gaussian-and-eisenstein-frobenius, def-arithmetic-frobenius-coset. Compute residue field F2 at (1+i), then list both lifts. Refute uniqueness from residue data, without a stronger unsupported claim that no auxiliary convention can select a lift.

Read support: https://wstein.org/books/ant/ant.pdf — §9.3.2 and §9.4, unramified qualification.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## cex-frobenius-cycle-type-needs-good-reduction

Claim/conventions: For F=X^2-5 at p=2 the reduction is (X+1)^2, yet Q(sqrt5) is unramified and inert at2. Factor multiplicities from this bad generator do not encode Frobenius cycles; the integral generator (1+sqrt5)/2 has irreducible reduction X^2+X+1.

Dependencies (and proof rationale): thm-frobenius-cycle-type-and-prime-splitting, thm-dedekind-kummer-prime-factorisation, thm-ramified-primes-and-the-number-field-discriminant. Verify O_K=Z[(1+sqrt5)/2] and d_K=5 by the quadratic integrality calculation; index of Z[sqrt5] is2 and disc(X^2-5)=20. Contrast the ramified X^2+1 example at2.

Read support: https://wstein.org/books/ant/ant.pdf — §9.2.1, Q(sqrt5) example, pp.102–103; Milne Theorem 8.23 qualification.
Scaffold obligation: complete claim and proof plan recorded; authoring and validation remain pending. Next: next item in manifest order, then batch gates.

## Post-scaffold mathematical check

Added cor-zeta-zero-count-near-the-one-line: For real t and 0<r<=3/4, the number n(r;t) of zeros in |rho-(1+it)|<=r, with multiplicity, is O(r log(|t|+2)). Source https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf, Theorem 6.8, p.175. Dependencies thm-riemann-zeta-classical-zero-free-region, lem-zeta-logarithmic-derivative-zero-bound, thm-von-mangoldt-logarithmic-derivative-zeta, cor-zeta-zero-count-unit-interval. For r below a suitable constant/log(|t|+2) the region is empty. Otherwise, for r<=1/6 and high t, evaluate the positive real-part zero sum at 1+r+it: each counted zero contributes >=1/(5r) and the whole sum is O(1/r+log t). For r>=1/6 use the published unit-interval zero count; bounded t is compact and the zero-free region bounds r below whenever any zero is counted.

Re-read the existing quadratic-integral-basis, Eisenstein, polynomial-discriminant and Dedekind–Kummer statements; added explicit dependencies to the B calculations. The reciprocal zero sum now explicitly absorbs any finite real-zero contribution, so its use does not assume an unproved zero-free real interval. Hensel corrections can be computed by the initially fixed Bezout polynomials and monic division, with no fresh infinite representative selection. General field completion still inherits the existing metric-completion choice cost. Current counts: 20 A + 8 B; 29 A + 7 B. All ids/deps in the manifest are current; no split needed.

Initial validators: manifest-deps whole run passed (782 items at that instant, zero normalizations); whole-run content-policy failed only on other-batch thm-kernel-range-annihilator-identities missing def-weak-star-topology and thm-bipolar-closure-for-linear-subspaces. validate-plan passed, but unspliced empty pages are checked only at page level. Coverage and source-fetch gates still pending.

## In-memory batch-spliced plan check

No plan file was edited. Passed current spec through /dev/stdin after replacing only this batch's four item arrays in memory. Validator exit 0.

```text

```

## Harvest cross-check corrections

Re-read Milne 7.38–7.43 directly: 7.42 is n=ef and 7.43 is the valuation rescaling, not automorphism invariance or completed algebraic closures. Corrected their harvest faithfully; added separate out-of-scope dispositions for the actual infinite-extension 7.40–7.41. Re-read Kedlaya density heading and published thm-primes-residue-class-dirichlet-density; fixed the heading and marked Theorem 4.11 already published. The fixed-field theorem now includes Stein 9.3.3 minimality; the Hensel lemma explicitly carries Conrad 6.6 simple-root lifting; the completion-factor lemma explicitly carries Milne 8.4 norm/trace identities. Updated dependency arrays accompany these statements. Next: final revalidation and exact source-gate blocker record.

## Final density refinement and source liveness

cex-dirichlet-density-alone-does-not-give-a-counting-asymptotic: The positive integers with first decimal digit 1 have Dirichlet density log(2)/log(10), but counting ratios have distinct subsequential limits 1/9 and 5/9. Thus weighted density alone cannot supply an ordinary counting asymptotic. The analogous set of primes with first digit 1 has the same relative Dirichlet density and the same two relative counting subsequential limits.
Dependencies: thm-riemann-zeta-continuation-to-the-right-half-plane, thm-euler-product-for-riemann-zeta, thm-primes-residue-class-dirichlet-density, cor-prime-number-theorem, thm-chebyshev-psi-prime-number-theorem-error.
Proof: Use S=union_k [10^k,2*10^k) intersect N. Compare each Dirichlet block to its integral with uniformly bounded total error; (s-1)sum_S n^-s tends to log2/log10 by a geometric series. Count at 10^m and 2*10^m. State this is an integer-set counterexample to the inference, not a failure of the AP theorem. State finite additivity and zero contribution of finite sets directly from finite sums of limits. For the prime normalization expand log zeta: prime powers of exponent >=2 contribute O(1), giving sum_p p^-s=log(1/(s-1))+O(1). Cite the published progression density result solely to explain the gap the Tauberian theorem fills. For the prime variant, the established quantitative PNT and partial summation replace the prime series by integral w(log x)x^-s/log x dx with O(1) error as s decreases to1, where w is the periodic indicator of [0,log2) modulo log10. The primitive of w-log2/log10 is bounded, so integration by parts leaves the mean times log(1/(s-1))+O(1). Summing the final finitely many decade blocks using PNT and bounding earlier blocks gives relative counts 1/9 and5/9 at the two endpoints; control the early blocks before taking the endpoint limit.
Source: https://kskedlaya.org/ant/chap-primes-in-ap.html, Exercise 4.5.3(1)–(3), full exercise read. The optional radix variation has its own specific disposition.

URL-sweep was run without a new on-disk report: --out /dev/stdout, captured here. Exit 1.
```text
{
  "version": 1,
  "generated_at": "2026-09-06T19:20:30.210Z",
  "scope": {
    "manifests": [],
    "ledgers": [],
    "items": 0
  },
  "summary": {
    "urls": 9,
    "live": 0,
    "failed": 9,
    "recovered": 0,
    "suspect": 0,
    "superseded": 1
  },
  "superseded": [
    "https://www.williamstein.org/books/ant/ant.pdf"
  ],
  "rows": [
    {
      "url": "https://kskedlaya.org/ant/chap-pnt.html",
      "status": 0,
      "ok": false,
      "final_url": "https://kskedlaya.org/ant/chap-pnt.html",
      "ms": 12,
      "error": "curl: (6) Could not resolve host: kskedlaya.org"
    },
    {
      "url": "https://kskedlaya.org/ant/chap-primes-in-ap.html",
      "status": 0,
      "ok": false,
      "final_url": "https://kskedlaya.org/ant/chap-primes-in-ap.html",
      "ms": 10,
      "error": "curl: (6) Could not resolve host: kskedlaya.org"
    },
    {
      "url": "https://kskedlaya.org/ant/chap-zeroes.html",
      "status": 0,
      "ok": false,
      "final_url": "https://kskedlaya.org/ant/chap-zeroes.html",
      "ms": 9,
      "error": "curl: (6) Could not resolve host: kskedlaya.org"
    },
    {
      "url": "https://kskedlaya.org/ant/frontmatter.html",
      "status": 0,
      "ok": false,
      "final_url": "https://kskedlaya.org/ant/frontmatter.html",
      "ms": 8,
      "error": "curl: (6) Could not resolve host: kskedlaya.org"
    },
    {
      "url": "https://kskedlaya.org/ant/part-2-4.html",
      "status": 0,
      "ok": false,
      "final_url": "https://kskedlaya.org/ant/part-2-4.html",
      "ms": 15,
      "error": "curl: (6) Could not resolve host: kskedlaya.org"
    },
    {
      "url": "https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf",
      "ms": 6,
      "error": "curl: (6) Could not resolve host: math.stanford.edu"
    },
    {
      "url": "https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf",
      "ms": 6,
      "error": "curl: (6) Could not resolve host: personal.science.psu.edu"
    },
    {
      "url": "https://wstein.org/books/ant/ant.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://wstein.org/books/ant/ant.pdf",
      "ms": 5,
      "error": "curl: (6) Could not resolve host: wstein.org"
    },
    {
      "url": "https://www.jmilne.org/math/CourseNotes/ANT.pdf",
      "status": 0,
      "ok": false,
      "final_url": "https://www.jmilne.org/math/CourseNotes/ANT.pdf",
      "ms": 5,
      "error": "curl: (6) Could not resolve host: www.jmilne.org"
    }
  ]
}
url-sweep: 0/9 live; 9 failed; 0 suspect -> /dev/stdout
FAIL 0 https://kskedlaya.org/ant/chap-pnt.html — curl: (6) Could not resolve host: kskedlaya.org
FAIL 0 https://kskedlaya.org/ant/chap-primes-in-ap.html — curl: (6) Could not resolve host: kskedlaya.org
FAIL 0 https://kskedlaya.org/ant/chap-zeroes.html — curl: (6) Could not resolve host: kskedlaya.org
FAIL 0 https://kskedlaya.org/ant/frontmatter.html — curl: (6) Could not resolve host: kskedlaya.org
FAIL 0 https://kskedlaya.org/ant/part-2-4.html — curl: (6) Could not resolve host: kskedlaya.org
FAIL 0 https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — curl: (6) Could not resolve host: math.stanford.edu
FAIL 0 https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — curl: (6) Could not resolve host: personal.science.psu.edu
FAIL 0 https://wstein.org/books/ant/ant.pdf — curl: (6) Could not resolve host: wstein.org
FAIL 0 https://www.jmilne.org/math/CourseNotes/ANT.pdf — curl: (6) Could not resolve host: www.jmilne.org

```

## Final dispatch checkpoint — scaffold written, readiness blocked

Final authorized artifacts: this batch pages.json, coverage.json and notes.md only. No page structure, plan-spec file, published item, other batch or workflow state was changed. Existing untracked batch artifacts remain uncommitted.

Counts: 64 planned items (20 analytic A, 8 analytic B, 29 algebraic A, 7 algebraic B); 115 source-result dispositions across eight full-text source URLs. Every item has explicit deps. Both A pages are below 60, so no split is proposed.

Current manifest SHA-256: 506191c76558af53f35094752e8849473198959fc556962b1f40cd3a73b30b2f
Current coverage SHA-256: cd48d754b238eb5eb08fa623a919cf5621c81a351b38a3ba5b6bf293cb4f467b

Validation:
- coverage-checklist --require-destination: PASS, 2 A pages, 115 results, zero errors/warnings.
- manifest-deps whole run: PASS, 920 items at final check, zero normalizations/errors.
- batch-only content-policy: content-policy: 64 scoped item(s), 0 error(s), 0 warning(s)
- whole-run content-policy: FAIL outside this batch. thm-kernel-range-annihilator-identities refers to missing def-weak-star-topology and thm-bipolar-closure-for-linear-subspaces (920 scoped items, two errors). Do not repair another owner's files.
- validate-plan on the actual research/plan-spec.json: PASS. That check alone cannot inspect these unspliced item lists.
- validate-plan with only these four item arrays substituted in memory and supplied through /dev/stdin: PASS after final changes, 848 populated pages, no unresolved ids, intra-order errors, item/page cycles, forward dependencies, B-leaf errors or undeclared prerequisites. No plan file was written.
- source-fetch-check --stamp --timeout-sec 15: FAIL, all eight URLs returned EAI_AGAIN, zero stamps written.
- source-fetch-check without --stamp: FAIL, all eight sources unstamped.
- url-sweep --fail-on-dead: FAIL, curl code 6 (DNS) for all eight source URLs and Kedlaya TOC. Captured output is above.

Exact source-fetch blockers:
- https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — native DNS EAI_AGAIN; text was read via web full-text extraction; fetch_verified remains absent.
- https://kskedlaya.org/ant/chap-pnt.html — native DNS EAI_AGAIN; text was read via web full-text extraction; fetch_verified remains absent.
- https://kskedlaya.org/ant/chap-primes-in-ap.html — native DNS EAI_AGAIN; text was read via web full-text extraction; fetch_verified remains absent.
- https://kskedlaya.org/ant/part-2-4.html — native DNS EAI_AGAIN; text was read via web full-text extraction; fetch_verified remains absent.
- https://kskedlaya.org/ant/chap-zeroes.html — native DNS EAI_AGAIN; text was read via web full-text extraction; fetch_verified remains absent.
- https://www.jmilne.org/math/CourseNotes/ANT.pdf — native DNS EAI_AGAIN; text was read via web full-text extraction; fetch_verified remains absent.
- https://wstein.org/books/ant/ant.pdf — native DNS EAI_AGAIN; text was read via web full-text extraction; fetch_verified remains absent.
- https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — native DNS EAI_AGAIN; text was read via web full-text extraction; fetch_verified remains absent.

URL repair already completed: Stein original https://www.williamstein.org/books/ant/ant.pdf failed web fetch; verified same-text alternate https://wstein.org/books/ant/ant.pdf is recorded with original_url provenance. The remaining native failures affect every host and do not establish document death. Do not replace verified sources merely to evade a network restriction, and do not invent full-body hashes from extracted passages.

Exploratory sources not used as backing: Stein older online section 19.1 at https://www.williamstein.org/papers/ant/html/node78.html was read (19.1.1–19.1.9), but existence proof 19.1.2 explicitly covers only locally compact fields; Conrad §6 supplies the general finite theorem instead. Brian Conrad, Surjectivity for inertia groups, https://math.stanford.edu/~conrad/676Page/handouts/inertiasurj.pdf, p.1, was read as a supplementary check of finite-tower inertia surjectivity. Its finite proof uses maximal unramified subfields; the scaffold instead proves the claim from the exact sequence and multiplicativity of e. Its absolute-inertia inverse-limit argument and wild-inertia extension are outside this finite number-field page. Sutherland LectureNotes16.pdf was fetch-scouted but not used or claimed fully read. These exploratory alternatives do not replace the eight harvested backing texts.

Remaining obligations: native full-body fetch/stamp and URL liveness must be rerun in a network-enabled execution environment; whole-run content-policy requires the other owner's two dependency repairs. Stage-1 drift owns the broader design Requires wording and the corrected theorem-kind/locator decisions. Step 5 must author every manifest claim and intermediate proof, with the recorded pole, normalization, tower and good-reduction qualifications. No proof or independent review has been marked complete; no exact-hash review receipt existed to alter. No permissions requested.

Next action: source-fetch-check --coverage research/frontier-33-batch-5.coverage.json --stamp, then the non-stamping gate and whole-run content-policy. This dispatch does not declare the batch ready.

## Step-3 fix pass

Finding set: none for batch 5. The stable review is
`research/frontier-33-alpha-c-step3-scaffold-review.md`. Its unnumbered
`Direct repairs applied` observations concern only batch 6 (two stale
dependency descriptions) and batch 7 (one duplicate companion-page object).
The review assigns no batch-5 finding id; none is invented or renumbered here.
Disposition: not applicable to this batch, so no manifest, coverage-harvest,
item id, dependency, source disposition, page split, or plan record changed.

Evidence for retaining the scaffold: the same review gives both A pages the
`sufficient` verdict. It confirms the analytic route's pole/zero separation,
`log(|t|+2)` low-height convention, fixed-modulus AP quantifier, and explicit
prime-power/partial-summation transfer; it also confirms the local-field
route's norm normalization, finite-extension and fixed-place scope, arithmetic
(not geometric) Frobenius, tower hypotheses, and good-reduction qualification.
The direct primary passages rechecked were Montgomery--Vaughan Ch. 6
pp.168--181 (Lemmas 6.5 and Theorems 6.6--6.9), Kedlaya §§1.3--1.4, 4.2--4.4,
7.2, and 8.3, Milne Theorem 7.38 and Ch. 8 Propositions 8.10, 8.13 and Theorem
8.23, Stein §9.3 Theorem 9.3.5, and Conrad §6 Theorem 6.5. Exact URLs and the
complete per-heading harvest/dispositions remain in
`research/frontier-33-batch-5.coverage.json`.

Current source verification supersedes the earlier DNS-only checkpoint:
`source-fetch-check --coverage research/frontier-33-batch-5.coverage.json`
reports 8/8 stored full-text fetch stamps. A forced re-fetch in this execution
returned `EAI_AGAIN` for every host, whereas the same eight HTTP(S) URLs opened
as current full text in the browser; this is an environment-wide resolver
failure, not evidence that an individual recorded document has failed. No URL
or source attribution was changed. Stein's live `wstein.org` URL and its
`original_url` provenance remain intact.

Changed scaffold record: `research/frontier-33-batch-5.notes.md` only (this
checkpoint). Current checks: `manifest-deps` = 64 items, 0 normalizations, 0
errors; `coverage-checklist --require-destination` = 2 pages, 115 harvested
results, 0 errors/warnings; whole-run `content-policy --manifest-only` = 923
scoped items, 0 errors/warnings; and `validate-plan research/plan-spec.json
--repo .` exits 0. No unresolved batch-5 scaffold obligation remains.

## Step-5 authoring

Authoring the 64 assigned items and four draft pages. Required batch inputs and
Alpha group c verdict/review read. Existing independent reviews and fetch hashes
are preserved. Browser full-text sources are available; native DNS remains
unavailable. Source sections and exact current dependency statements are being
read before the corresponding proofs. No plan or workflow change is authorized.
Per-item checkpoints below record completed writing; batch validation is pending.

### Authored `lem-zeta-logarithmic-derivative-zero-bound`

Claim and conventions: Write $s=\sigma+it$ and let $\rho$ range over nontrivial zeta zeros with multiplicity. With the Hadamard constant $B$,
$$\frac{\zeta'}{\zeta}(s)=B+\sum_\rho\left(\frac1{s-\rho}+\frac1\rho\right)-\frac1{s-1}+\frac{\log\pi}{2}-\frac{\Gamma'(1+s/2)}{2\Gamma(1+s/2)}.$$
This is a meromorphic identity, using convergent genus-one terms. Uniformly for $-1\le\sigma\le2$, $|t|\ge3$ and $\zeta(s)\ne0$,
$$\operatorname{Re}\frac{\zeta'}\zeta(s)=\sum_\rho\operatorname{Re}\frac1{s-\rho}-\frac12\log|t|+O(1),$$
and this real series is absolutely convergent.

Source: https://kskedlaya.org/ant/chap-zeroes.html — §8.3, Hadamard calculation in proof of Theorem 8.8. Dependencies: thm-hadamard-product-for-riemann-xi, def-riemann-xi-function, thm-stirling-formula-gamma, thm-cauchy-integral-formula-higher-derivatives, cor-zeta-zero-count-unit-interval, thm-trivial-zeros-and-critical-strip.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `lem-zeta-three-four-one-logarithmic-derivative-inequality`

Claim and conventions: For $\sigma>1$ and $t\in\mathbb R$,
$$-3\frac{\zeta'(\sigma)}{\zeta(\sigma)}-4\operatorname{Re}\frac{\zeta'(\sigma+it)}{\zeta(\sigma+it)}-\operatorname{Re}\frac{\zeta'(\sigma+2it)}{\zeta(\sigma+2it)}\ge0.$$

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — §6.1, proof of Theorem 6.6 invoking Lemma 6.5. Dependencies: thm-von-mangoldt-logarithmic-derivative-zeta.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-riemann-zeta-classical-zero-free-region`

Claim and conventions: There is an absolute $c_0>0$ such that $\zeta$ has no zeros in $\sigma\ge1-c_0/\log(|t|+2)$. The pole at $s=1$ is not a zero.

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.6, pp.172–173. Dependencies: lem-zeta-logarithmic-derivative-zero-bound, lem-zeta-three-four-one-logarithmic-derivative-inequality, thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane, thm-riemann-zeta-continuation-to-the-right-half-plane.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `lem-zeta-horizontal-logarithmic-derivative-comparison`

Claim and conventions: There are absolute $d>0,C>0$, with $d<c_0$, such that for $|t|\ge3$ and $\sigma\ge1-d/\log(|t|+2)$,
$$\left|\frac{\zeta'(\sigma+it)}{\zeta(\sigma+it)}\right|\le C\log(|t|+2).$$

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.7, equations (6.9)–(6.11), pp.174–175. Dependencies: thm-riemann-zeta-classical-zero-free-region, lem-local-logarithmic-derivative-zeta, lem-zeta-logarithmic-derivative-zero-bound, thm-von-mangoldt-logarithmic-derivative-zeta.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-zeta-bounds-in-classical-zero-free-region`

Claim and conventions: There are $0<c_2<c_1<c_0$ and $C>0$ such that for $|t|\ge3$ and $\sigma\ge1-c_1/\log(|t|+2)$,
$$|\zeta'/\zeta(\sigma+it)|\le C\log(|t|+2)\le C\log^2(|t|+2).$$
In the narrower $c_2$ region, $|1/\zeta(s)|\le C\log(|t|+2)$. For $|t|\le3$ and $1-c_2/\log(|t|+2)\le\sigma\le2$,
$$\zeta'/\zeta(s)+1/(s-1)=O(1),\qquad 1/\zeta(s)=O(|s-1|),$$
with removable interpretations at one.

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.7, pp.174–175. Dependencies: lem-zeta-horizontal-logarithmic-derivative-comparison, thm-riemann-zeta-classical-zero-free-region, thm-euler-product-for-riemann-zeta, thm-riemann-zeta-continuation-to-the-right-half-plane.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `cor-zeta-zero-count-near-the-one-line`

Claim and conventions: For $t\in\mathbb R$ and $0<r\le3/4$, let $n(r;t)$ count nontrivial zeros with $|\rho-(1+it)|\le r$, including multiplicity. Then $n(r;t)=O(r\log(|t|+2))$, uniformly.

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.8, p.175. Dependencies: thm-riemann-zeta-classical-zero-free-region, lem-zeta-logarithmic-derivative-zero-bound, thm-von-mangoldt-logarithmic-derivative-zeta, cor-zeta-zero-count-unit-interval.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `lem-zeta-reciprocal-zero-sum-bound`

Claim and conventions: For $T\ge2$, the sum of $1/|\rho|$ over nontrivial zeros with $0<|\operatorname{Im}\rho|\le T$ is $O(\log^2T)$, with multiplicity. Adjoining any real nontrivial zeros preserves the estimate.

Source: https://kskedlaya.org/ant/part-2-4.html — §7.2, proof of Theorem 7.7 after Theorem 7.6. Dependencies: cor-zeta-zero-count-unit-interval, def-riemann-zeta-zero-counting, thm-hadamard-product-for-riemann-xi.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `lem-zeta-explicit-formula-zero-free-error-balance`

Claim and conventions: For $x\ge2$ and finite $T\ge3$, the classical region and truncated explicit formula give
$$\psi(x)-x=O\left(xe^{-c_0\log x/\log(T+2)}\log^2T+\frac{x\log^2(xT)}{T}+\log x\right).$$
Constants may be enlarged and the positive region constant decreased. The zero sum used in the proof is finite.

Source: https://kskedlaya.org/ant/part-2-4.html — §7.2, proof of Theorem 7.7. Dependencies: thm-von-mangoldt-explicit-formula-truncated, thm-riemann-zeta-classical-zero-free-region, lem-zeta-reciprocal-zero-sum-bound, def-half-weighted-chebyshev-psi.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-chebyshev-psi-prime-number-theorem-error`

Claim and conventions: There is an absolute $c>0$ such that for $x\ge2$,
$$\psi(x)=x+O\left(xe^{-c\sqrt{\log x}}\right).$$

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.9, pp.179–181; independently Kedlaya Theorem 7.7. Dependencies: lem-zeta-explicit-formula-zero-free-error-balance, thm-zeta-bounds-in-classical-zero-free-region.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `cor-chebyshev-theta-prime-number-theorem-error`

Claim and conventions: For some absolute $c>0$ and all $x\ge2$,
$$\theta(x)=x+O\left(xe^{-c\sqrt{\log x}}\right).$$

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.9, equation (6.13), pp.179–181. Dependencies: thm-chebyshev-psi-prime-number-theorem-error, lem-chebyshev-functions-prime-power-comparison.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `def-logarithmic-integral`

Claim and conventions: For real $x\ge2$, define
$$\operatorname{Li}(x)=\int_2^x\frac{dt}{\log t}.$$
In particular $\operatorname{Li}(2)=0$. The integral never crosses the singularity at one.

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — §6.2, equation (6.14), p.179. Dependencies: .

Provenance: literature-derived statement; definition or scope discussion; proof not applicable. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `lem-logarithmic-integral-asymptotic-expansion`

Claim and conventions: For each fixed integer $m\ge1$, as $x\to\infty$,
$$\operatorname{Li}(x)=\sum_{j=0}^{m-1}\frac{j!x}{\log^{j+1}x}+O_m\left(\frac{x}{\log^{m+1}x}\right).$$

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — §6.2, equation (6.15), pp.179–180. Dependencies: def-logarithmic-integral.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-prime-number-theorem-logarithmic-integral`

Claim and conventions: For some absolute $c>0$ and every $x\ge2$,
$$\pi(x)=\operatorname{Li}(x)+O\left(xe^{-c\sqrt{\log x}}\right).$$

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.9, equation (6.14) and proof, pp.179–181. Dependencies: cor-chebyshev-theta-prime-number-theorem-error, def-logarithmic-integral, lem-prime-counting-chebyshev-partial-summation.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `cor-prime-number-theorem`

Claim and conventions: As $x\to\infty$,
$$\pi(x)\sim x/\log x,\qquad\theta(x)\sim x,\qquad\psi(x)\sim x.$$
These three asymptotic assertions are equivalent.

Source: https://kskedlaya.org/ant/chap-pnt.html — §1.3, Lemma 1.7. Dependencies: thm-prime-number-theorem-logarithmic-integral, lem-logarithmic-integral-asymptotic-expansion, lem-prime-counting-chebyshev-partial-summation, lem-chebyshev-functions-prime-power-comparison.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `cor-nth-prime-asymptotic`

Claim and conventions: If $p_n$ is the n-th prime, then $p_n\sim n\log n$ as $n\to\infty$.

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — §6.2, Theorem 6.9 and equation (6.15), monotone inversion consequence. Dependencies: cor-prime-number-theorem.

Provenance: ai-generated statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `lem-newman-damped-contour-estimates`

Claim and conventions: Let $f:[0,\infty)\to\mathbb C$ be locally integrable with $|f|\le B$, let $g(z)=\int_0^\infty f(t)e^{-zt}\,dt$ for $\operatorname{Re}z>0$, and $g_T(z)=\int_0^T f(t)e^{-zt}\,dt$. For $R>0,T\ge0$, set $K_R(z)=(1+z^2/R^2)/z$. On the right and left semicircles $C_+,C_-$ of radius R,
$$\left|\int_{C_+}(g-g_T)e^{Tz}K_R(z)\,dz\right|\le\frac{2\pi B}{R},\qquad\left|\int_{C_-}g_Te^{Tz}K_R(z)\,dz\right|\le\frac{2\pi B}{R}.$$
Integrals at the imaginary endpoints are interpreted as improper limits when needed.

Source: https://kskedlaya.org/ant/chap-pnt.html — §1.4, proof of Theorem 1.8, right and left semicircle estimates. Dependencies: thm-cauchy-integral-formula-circle.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-newman-zagier-tauberian-theorem`

Claim and conventions: Let $f:[0,\infty)\to\mathbb C$ be bounded and locally Lebesgue integrable. If $g(z)=\int_0^\infty f(t)e^{-zt}\,dt$, initially defined for $\operatorname{Re}z>0$, extends holomorphically to an open set containing $\{\operatorname{Re}z\ge0\}$, then
$$\lim_{T\to\infty}\int_0^T f(t)\,dt=g(0).$$

Source: https://kskedlaya.org/ant/chap-pnt.html — §1.4, Theorem 1.8 and its complete proof. Dependencies: lem-newman-damped-contour-estimates, thm-residue-theorem-null-homologous-cycle, thm-dominated-convergence.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `lem-monotone-chebyshev-tauberian-desmoothing`

Claim and conventions: Let $A:[1,\infty)\to[0,\infty)$ be nondecreasing and locally integrable, with $A(x)=O(x)$, and let $a\ge0$. If $\int_1^\infty(A(x)-ax)x^{-2}\,dx$ converges, then $A(x)/x\to a$.

Source: https://kskedlaya.org/ant/chap-pnt.html — §1.3, monotonicity argument preceding §1.4. Dependencies: thm-cauchy-criterion-for-improper-integrals.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `lem-dirichlet-character-chebyshev-laplace-transform`

Claim and conventions: Fix a Dirichlet character $\chi$ modulo $q\ge1$. Put $\Psi_\chi(x)=\sum_{n\le x}\chi(n)\Lambda(n)$ and $\delta_\chi=1$ for the principal character, zero otherwise. The bounded, locally integrable function $f_\chi(t)=e^{-t}\Psi_\chi(e^t)-\delta_\chi$ has Laplace transform
$$g_\chi(s)=-\frac{L'(s+1,\chi)}{(s+1)L(s+1,\chi)}-\frac{\delta_\chi}{s}\quad(\operatorname{Re}s>0).$$
After the removable value at zero is filled in, this extends holomorphically to an open neighborhood of the closed right half-plane.

Source: https://kskedlaya.org/ant/chap-primes-in-ap.html — §4.4, proof of Theorem 4.12. Dependencies: thm-dirichlet-l-euler-product, thm-dirichlet-series-summatory-integral, thm-chebyshev-theta-linear-bounds, lem-chebyshev-functions-prime-power-comparison, thm-dirichlet-l-nonzero-at-one, thm-dirichlet-l-nonvanishing-line-one, thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane, thm-principal-dirichlet-l-factorization, thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-prime-number-theorem-arithmetic-progressions`

Claim and conventions: For every fixed integer $q\ge1$ and integer a with $\gcd(a,q)=1$, define $\psi(x;q,a)$, $\theta(x;q,a)$ and $\pi(x;q,a)$ by restricting their defining sums to integers, respectively primes, congruent to a modulo q. Then
$$\psi(x;q,a)\sim\frac{x}{\varphi(q)},\qquad\theta(x;q,a)\sim\frac{x}{\varphi(q)},\qquad\pi(x;q,a)\sim\frac{\operatorname{Li}(x)}{\varphi(q)}.$$
No uniformity in a growing modulus is asserted.

Source: https://kskedlaya.org/ant/chap-primes-in-ap.html — §4.4, Theorem 4.12 and proof. Dependencies: lem-dirichlet-character-chebyshev-laplace-transform, thm-newman-zagier-tauberian-theorem, thm-dirichlet-character-orthogonality, lem-monotone-chebyshev-tauberian-desmoothing, lem-chebyshev-functions-prime-power-comparison, lem-prime-counting-chebyshev-partial-summation, lem-logarithmic-integral-asymptotic-expansion.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `ex-the-three-four-one-trigonometric-inequality`

Claim and conventions: The weight in the three-four-one inequality is nonnegative term by term:
$$3+4\cos u+\cos(2u)=2(1+\cos u)^2.$$
It vanishes exactly when $u$ is an odd multiple of pi.

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.6 proof. Dependencies: lem-zeta-three-four-one-logarithmic-derivative-inequality.

Provenance: ai-generated statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `ex-zero-free-region-parameter-balance`

Claim and conventions: In the high-height zero-free-region proof, if
$$\frac4{1+\delta-\beta}\le\frac3\delta+C\log(|\gamma|+2),$$
then choosing $\delta=1/(2C\log(|\gamma|+2))$ gives $1-\beta\ge1/(14C\log(|\gamma|+2))$. Here C is a fixed sufficiently large positive comparison constant.

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.6 proof. Dependencies: thm-riemann-zeta-classical-zero-free-region.

Provenance: ai-generated statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `ex-optimizing-the-prime-number-theorem-contour-height`

Claim and conventions: At $T=\exp(A\sqrt{\log x})$ for fixed $A>0$, the exponential rates of the finite-zero and truncation errors are respectively $c_0/A$ and A. The vertical and horizontal contour estimates have the same square-root-logarithm scale.

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.9 proof. Dependencies: thm-chebyshev-psi-prime-number-theorem-error, lem-zeta-explicit-formula-zero-free-error-balance.

Provenance: ai-generated statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `ex-from-psi-to-the-logarithmic-integral`

Claim and conventions: The transfer from a classical psi error to pi retains
$$\pi(x)-\operatorname{Li}(x)=\frac2{\log2}+\frac{E(x)}{\log x}+\int_2^x\frac{E(t)}{t\log^2t}\,dt,\qquad E(t)=\theta(t)-t.$$
Both the prime-power error and this error integral are absorbed into a decreased classical exponential rate.

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — Theorem 6.9 proof. Dependencies: thm-prime-number-theorem-logarithmic-integral.

Provenance: ai-generated statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `ex-newman-tauberian-prime-number-theorem`

Claim and conventions: For $f(t)=e^{-t}\psi(e^t)-1$, its transform is
$$-\frac{\zeta'(s+1)}{(s+1)\zeta(s+1)}-\frac1s.$$
Newman's theorem and monotone desmoothing recover $\psi(x)\sim x$ without a quantitative zero-free region.

Source: https://kskedlaya.org/ant/chap-pnt.html — §§1.3–1.4. Dependencies: lem-dirichlet-character-chebyshev-laplace-transform, thm-newman-zagier-tauberian-theorem, lem-monotone-chebyshev-tauberian-desmoothing, cor-prime-number-theorem.

Provenance: ai-generated statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `ex-prime-number-theorem-in-a-small-progression`

Claim and conventions: Modulo four, $\chi_0(1)=\chi_0(3)=1$, $\chi_4(1)=1$, $\chi_4(3)=-1$, and both vanish on even integers. Hence
$$\psi(x;4,1)=\tfrac12(\Psi_{\chi_0}(x)+\Psi_{\chi_4}(x)),\quad\psi(x;4,3)=\tfrac12(\Psi_{\chi_0}(x)-\Psi_{\chi_4}(x)).$$
Both corresponding prime counts are asymptotic to $\operatorname{Li}(x)/2$.

Source: https://kskedlaya.org/ant/chap-primes-in-ap.html — §4.4, Theorem 4.12. Dependencies: thm-prime-number-theorem-arithmetic-progressions, thm-dirichlet-character-orthogonality.

Provenance: ai-generated statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `cex-dirichlet-density-alone-does-not-give-a-counting-asymptotic`

Claim and conventions: False inference: existence of a Dirichlet density forces an ordinary counting asymptotic with that density. Let
$$S=\bigcup_{k\ge0}([10^k,2\cdot10^k)\cap\mathbb N),\qquad S_{\mathbb P}=S\cap\mathbb P.$$
Both S among the positive integers and $S_{\mathbb P}$ among the primes have Dirichlet density $d=\log2/\log10$, but their relative counting ratios along $10^m$ and $2\cdot10^m$ tend respectively to $1/9$ and $5/9$.

Source: https://kskedlaya.org/ant/chap-primes-in-ap.html — §4.2 Definitions 4.3–4.4, Example 4.5; Exercise 4.5.3. Dependencies: thm-riemann-zeta-continuation-to-the-right-half-plane, thm-euler-product-for-riemann-zeta, thm-primes-residue-class-dirichlet-density, cor-prime-number-theorem, thm-chebyshev-psi-prime-number-theorem-error.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `rem-the-classical-zeta-region-is-not-a-uniform-dirichlet-l-region`

Claim and conventions: The classical region [[thm-riemann-zeta-classical-zero-free-region]] is a statement about zeta with an absolute constant. The progression theorem [[thm-prime-number-theorem-arithmetic-progressions]] fixes q before its character transforms and contour neighborhoods are chosen. Its argument supplies neither a rate uniform as q grows nor a uniform Dirichlet L-function zero-free region. Arithmetic Frobenius is unrelated to that analytic uniformity issue. No existence of exceptional real zeros is claimed here; this is a scope distinction, not a counterexample to an asserted uniform theorem.

Source: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf — §6.1.1, paragraph following Exercise 4, p.176. Dependencies: thm-riemann-zeta-classical-zero-free-region, thm-prime-number-theorem-arithmetic-progressions.

Provenance: ai-altered statement; definition or scope discussion; proof not applicable. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-completion-of-an-absolutely-valued-field`

Claim and conventions: The metric completion $\widehat F$ of an absolutely valued field F has a unique compatible complete valued-field structure. The map $F\to\widehat F$ is a dense isometric field embedding, universal for isometric field maps from F to complete valued fields. In the nonarchimedean case the value group and residue field are unchanged. We use the ordinary metric-completion construction with its countable-choice assumption for arbitrary metric spaces.

Source: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §5, Definitions 5.1–5.2 and Theorem 5.3, pp.8–9. Dependencies: def-multiplicative-absolute-value-on-a-field, thm-metric-completion-exists, thm-metric-completion-unique.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `def-normed-vector-space-over-an-absolutely-valued-field`

Claim and conventions: Let F carry a multiplicative absolute value. A norm on an F-vector space V is a function $\|\cdot\|:V\to\mathbb R_{\ge0}$ satisfying $\|v\|=0$ exactly for $v=0$,
$$\|av\|=|a|\|v\|,\qquad\|v+w\|\le\|v\|+\|w\|.$$
Its metric is $d(v,w)=\|v-w\|$. The scalar absolute value may be archimedean, nonarchimedean or trivial; it is not restricted to real or complex scalars.

Source: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §5, Definition 5.4, p.9. Dependencies: def-multiplicative-absolute-value-on-a-field.

Provenance: literature-derived statement; definition or scope discussion; proof not applicable. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field`

Claim and conventions: Let F be complete for a multiplicative absolute value and V a finite-dimensional normed F-vector space. For any basis $v_1,\ldots,v_n$, its coordinate sup norm $\|\sum a_iv_i\|_\infty=\max_i|a_i|$ is bounded above and below by positive multiples of the given norm. For $n=0$ both norms are zero. Consequently V is complete and every linear subspace is closed.

Source: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §5, Theorem 5.5 and proof, p.9. Dependencies: def-normed-vector-space-over-an-absolutely-valued-field.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `lem-uniqueness-of-an-extended-complete-field-absolute-value`

Claim and conventions: For a finite extension E/F of a complete absolutely valued field F, at most one absolute value on E extends the given absolute value on F. Any such extension makes E complete.

Source: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §6, Lemma 6.1, pp.10–11. Dependencies: thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `lem-hensel-factor-lifting-over-a-complete-valued-field`

Claim and conventions: Let F be complete nonarchimedean, A its valuation ring, and k its residue field. Suppose $g\in A[T]$ has nonzero reduction $\bar g=h_0H_0$, where $h_0\in k[T]$ is monic and $\gcd(h_0,H_0)=1$. Then $g=hH$ for $h,H\in A[T]$, with h monic of degree $\deg h_0$, $\bar h=h_0$, $\bar H=H_0$. No discreteness or monicity of g is assumed. In particular, a simple residue root of a monic polynomial lifts uniquely to a simple root in A.

Source: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §6, Theorem 6.5 and full proof, pp.12–13. Dependencies: def-multiplicative-absolute-value-on-a-field.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring`

Claim and conventions: Let F be complete nonarchimedean. If $f\in F[T]$ is monic irreducible of positive degree and $|f(0)|\le1$, then every coefficient of f has absolute value at most one.

Source: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §6, proof of Theorem 6.4, p.11. Dependencies: lem-hensel-factor-lifting-over-a-complete-valued-field.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-unique-extension-of-a-nonarchimedean-absolute-value`

Claim and conventions: For every finite field extension L/K with K complete nonarchimedean, the unique extending absolute value is
$$|x|_L=|N_{L/K}(x)|_K^{1/[L:K]}.$$
It is nonarchimedean and makes L complete. Separability and discreteness are not assumed; the trivial valuation is included.

Source: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §6, Lemma 6.1 and Theorem 6.4, pp.10–11; Milne Theorem 7.38 for discrete separable specialization. Dependencies: lem-uniqueness-of-an-extended-complete-field-absolute-value, lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring, thm-basic-laws-for-field-norm-and-trace, thm-field-norm-and-trace-agree-with-operator-determinant-and-trace.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-number-field-places-classification`

Claim and conventions: Places of a number field K mean equivalence classes of nontrivial absolute values. They consist of real embeddings, conjugate pairs of nonreal complex embeddings, and one nonarchimedean place for each nonzero prime P of $\mathcal O_K$. A finite representative is
$$|x|_P=(NP)^{-\operatorname{ord}_P x}.$$
If P lies above a rational prime p, this restricts on $\mathbb Q$ to $|\cdot|_p^{ef}$, with $e=\operatorname{ord}_P(p)$ and $NP=p^f$.

Source: https://math.stanford.edu/~conrad/676Page/handouts/ostrowski.pdf — §7, Corollary 7.3 and preceding normalization, pp.15–16; Milne Theorem 7.14. Dependencies: thm-completion-of-an-absolutely-valued-field, thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field, lem-uniqueness-of-an-extended-complete-field-absolute-value, thm-ostrowskis-theorem-for-the-rationals, thm-equivalent-field-absolute-values-characterisation, lem-dedekind-localisation-at-nonzero-prime-is-dvr, thm-fundamental-theorem-of-algebra-liouville-proof, def-ring-of-integers-of-a-number-field, cor-norm-of-a-prime-ideal.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `def-completion-of-a-number-field-at-a-prime`

Claim and conventions: For a nonzero prime P of $\mathcal O_K$, let $K_P$ be the completion at $|x|_P=(NP)^{-\operatorname{ord}_P x}$. Its valuation ring has residue field $\mathcal O_K/P$, since the original valuation ring is $(\mathcal O_K)_P$ and completion preserves residues. In L/K with $P\mid p$, the normalized value restricts as $|\cdot|_P|_K=|\cdot|_p^{ef}$, because $NP=(Np)^f$ and $\operatorname{ord}_P|_K=e\operatorname{ord}_p$. When a literal extension of $|\cdot|_p$ is needed use $|\cdot|_P^{1/(ef)}$. Positive powers define the same topology and completion.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 7, Theorem 7.38 and Remark 7.39; Chapter 8, Proposition 8.2. Dependencies: thm-number-field-places-classification, thm-completion-of-an-absolutely-valued-field, def-ramification-index, def-prime-above-and-residue-degree.

Provenance: ai-altered statement; definition or scope discussion; proof not applicable. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `lem-number-field-completions-as-local-polynomial-factors`

Claim and conventions: Let L/K be a finite separable extension of number fields, $L=K(\alpha)$ with monic minimal polynomial F, and p a finite prime of K. Factor F over $K_p$ into distinct monic irreducibles $F_i$. Then
$$L\otimes_K K_p\cong\prod_i K_p[T]/(F_i)\cong\prod_{P\mid p}L_P,\qquad\sum_{P\mid p}[L_P:K_p]=[L:K].$$
Use extending absolute values on each factor; their positive powers give the normalized number-field completions. Under this product, local multiplication matrices give $N_{L/K}(x)=\prod_{P\mid p}N_{L_P/K_p}(x)$ and $\operatorname{Tr}_{L/K}(x)=\sum_{P\mid p}\operatorname{Tr}_{L_P/K_p}(x)$, with values embedded in $K_p$.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Propositions 8.1–8.2, pp.135–136; Conrad Lemma 7.2, pp.14–15. Dependencies: def-completion-of-a-number-field-at-a-prime, thm-unique-extension-of-a-nonarchimedean-absolute-value, thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field, thm-primitive-element-theorem-for-finite-separable-extensions, thm-chinese-remainder-theorem-for-comaximal-ideals, thm-field-norm-and-trace-agree-with-operator-determinant-and-trace.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-galois-action-on-primes-above-a-prime-is-transitive`

Claim and conventions: Let L/K be a finite Galois extension of number fields and p a nonzero prime of $\mathcal O_K$. Then $G=\operatorname{Gal}(L/K)$ acts transitively on the primes P above p.

Source: https://wstein.org/books/ant/ant.pdf — §9.2, Theorem 9.2.2 proof, pp.101–102. Dependencies: thm-chinese-remainder-theorem-for-comaximal-ideals, thm-number-field-integral-ideal-factorisation-in-zf, thm-field-norm-and-trace-by-embeddings.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `cor-galois-prime-decomposition-efg`

Claim and conventions: For a finite Galois extension L/K and nonzero prime p, every P above p has the same ramification index e and residue degree f. If there are g such primes, then $efg=[L:K]$.

Source: https://wstein.org/books/ant/ant.pdf — §9.2, Theorem 9.2.2. Dependencies: thm-galois-action-on-primes-above-a-prime-is-transitive, thm-fundamental-identity-for-primes-in-number-fields.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `def-decomposition-group-of-a-prime`

Claim and conventions: For finite Galois L/K and a chosen nonzero prime $P\mid p$, the **decomposition group** is the stabilizer
$$D(P/p)=\{\sigma\in\operatorname{Gal}(L/K):\sigma(P)=P\}.$$
It is a subgroup: identity stabilizes P and stabilizers are closed under composition and inverse. The prime P, not just p, is part of the data.

Source: https://wstein.org/books/ant/ant.pdf — §9.3, Definition 9.3.1, p.104. Dependencies: def-prime-above-and-residue-degree.

Provenance: literature-derived statement; definition or scope discussion; proof not applicable. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-decomposition-group-and-completion`

Claim and conventions: Let L/K be finite Galois and $P\mid p$ nonzero primes. Then $L_P/K_p$ is finite Galois of degree $e(P/p)f(P/p)$. Continuous extension gives a canonical isomorphism
$$D(P/p)\ \cong\ \operatorname{Gal}(L_P/K_p),$$
whose inverse restricts an automorphism to the embedded copy of L.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Proposition 8.10, p.139. Dependencies: def-decomposition-group-of-a-prime, lem-number-field-completions-as-local-polynomial-factors, cor-galois-prime-decomposition-efg, thm-orbit-stabilizer.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `def-inertia-group-of-a-prime`

Claim and conventions: For finite Galois L/K and a chosen nonzero prime $P\mid p$, set $\kappa(P)=\mathcal O_L/P$ and $\kappa(p)=\mathcal O_K/p$. Each $\sigma\in D(P/p)$ induces a $\kappa(p)$-automorphism $\bar\sigma$ of $\kappa(P)$: the rule $\bar a\mapsto\overline{\sigma a}$ is independent of the representative because $\sigma P=P$. The **inertia group** is
$$I(P/p)=\ker\!\left(D(P/p)\longrightarrow\operatorname{Gal}(\kappa(P)/\kappa(p))\right).$$
Equivalently, $\sigma\in I(P/p)$ exactly when $\sigma\in D(P/p)$ and $\sigma(a)-a\in P$ for every $a\in\mathcal O_L$. It is a normal subgroup of D.

Source: https://wstein.org/books/ant/ant.pdf — §9.3.2, Definition 9.3.6 and Proposition 9.3.8, p.106. Dependencies: def-decomposition-group-of-a-prime, thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group.

Provenance: literature-derived statement; definition or scope discussion; proof not applicable. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `lem-lifting-residue-frobenius-by-galois-conjugates`

Claim and conventions: Let L/K be finite Galois and $P\mid p$ nonzero primes. Put $q=|\kappa(p)|$. Some $\sigma\in D(P/p)$ induces the arithmetic power map $x\mapsto x^q$ on $\kappa(P)$.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Frobenius element, footnote 1 on p.141; Stein Theorem 9.3.5. Dependencies: def-inertia-group-of-a-prime, thm-chinese-remainder-theorem-for-comaximal-ideals, thm-multiplicative-group-of-a-finite-field-is-cyclic, thm-decomposition-group-and-completion.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-decomposition-inertia-exact-sequence`

Claim and conventions: For finite Galois L/K and fixed nonzero $P\mid p$, reduction gives the exact sequence
$$1\longrightarrow I(P/p)\longrightarrow D(P/p)\longrightarrow
\operatorname{Gal}(\kappa(P)/\kappa(p))\longrightarrow1.$$
In particular $D(P/p)/I(P/p)$ is canonically the residue Galois group.

Source: https://wstein.org/books/ant/ant.pdf — §9.3.2, Theorem 9.3.5 (not design locator 9.3.2), p.106. Dependencies: lem-lifting-residue-frobenius-by-galois-conjugates, thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group, def-inertia-group-of-a-prime.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `cor-orders-of-decomposition-and-inertia-groups`

Claim and conventions: For finite Galois L/K and nonzero $P\mid p$, writing e and f for its ramification index and residue degree,
$$|D(P/p)|=ef,\qquad |I(P/p)|=e,\qquad |D(P/p)/I(P/p)|=f.$$
The prime P is unramified over p if and only if its inertia group is trivial.

Source: https://wstein.org/books/ant/ant.pdf — §9.3.2, Corollary 9.3.7, p.106. Dependencies: thm-decomposition-inertia-exact-sequence, thm-decomposition-group-and-completion, thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-conjugacy-of-decomposition-and-inertia-groups`

Claim and conventions: In finite Galois L/K, if $\sigma P=P'$ above a nonzero p, then
$$D(P'/p)=\sigma D(P/p)\sigma^{-1},\qquad
I(P'/p)=\sigma I(P/p)\sigma^{-1}.$$
The residue actions correspond under $\kappa(P)\to\kappa(P')$, $\bar a\mapsto\overline{\sigma a}$.

Source: https://wstein.org/books/ant/ant.pdf — §9.3, Lemma 9.3.2, p.104. Dependencies: def-inertia-group-of-a-prime.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-decomposition-and-inertia-in-towers`

Claim and conventions: Let M/L/K be a tower of number fields with M/K and L/K finite Galois, and fix nonzero primes $Q\mid P\mid p$. With $H=\operatorname{Gal}(M/L)$,
$$D(Q/P)=D(Q/p)\cap H,\qquad I(Q/P)=I(Q/p)\cap H.$$
Restriction gives exact sequences
$$1\to D(Q/P)\to D(Q/p)\to D(P/p)\to1,$$
$$1\to I(Q/P)\to I(Q/p)\to I(P/p)\to1.$$
The intersection identities also hold without L/K Galois; the displayed quotient assertions use that hypothesis.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Proposition 8.13, p.141. Dependencies: thm-conjugacy-of-decomposition-and-inertia-groups, thm-galois-action-on-primes-above-a-prime-is-transitive, cor-orders-of-decomposition-and-inertia-groups, thm-ramification-and-residue-degrees-in-towers, thm-normal-subgroups-and-quotients-in-the-galois-correspondence.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-decomposition-and-inertia-fixed-fields`

Claim and conventions: In finite Galois L/K fix nonzero $P\mid p$, put $D=D(P/p)$, $I=I(P/p)$, $E=L^D$, $U=L^I$, and let $p_E,p_U$ be the contractions of P. Write $e=e(P/p)$ and $f=f(P/p)$. Then P is the only prime over $p_E$, and $e(p_E/p)=f(p_E/p)=1$. The extension U/E is cyclic of degree f and is unramified at $p_U\mid p_E$ with residue degree f. The extension L/U is totally ramified at $P\mid p_U$ of degree e. If D is normal in $\operatorname{Gal}(L/K)$, p splits completely in E/K. For nonnormal D only the distinguished prime is asserted to have e=f=1. Moreover E is the smallest intermediate field F such that P is the only prime above $P\cap\mathcal O_F$.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Proposition 8.11, p.140; Stein Propositions 9.3.3–9.3.4, pp.104–105. Dependencies: thm-decomposition-inertia-exact-sequence, cor-orders-of-decomposition-and-inertia-groups, thm-ramification-and-residue-degrees-in-towers, thm-normal-subgroups-and-quotients-in-the-galois-correspondence, thm-galois-action-on-primes-above-a-prime-is-transitive.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `def-arithmetic-frobenius-coset`

Claim and conventions: For finite Galois L/K and nonzero $P\mid p$, the **arithmetic Frobenius coset** is the unique element of $D(P/p)/I(P/p)$ corresponding under the residue isomorphism to $x\mapsto x^{Np}$ on $\kappa(P)$, where $Np=|\kappa(p)|$. It is defined also when P is ramified. Its inverse is called geometric Frobenius. The quotient element is distinguished; a representative in D need not be unique.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Frobenius element, p.141. Dependencies: thm-decomposition-inertia-exact-sequence.

Provenance: literature-derived statement; definition or scope discussion; proof not applicable. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-unramified-frobenius-element-exists-uniquely`

Claim and conventions: For finite Galois L/K and a nonzero prime $P\mid p$ with $e(P/p)=1$, there is a unique $\operatorname{Frob}_P\in D(P/p)$ satisfying
$$\operatorname{Frob}_P(a)\equiv a^{Np}\pmod P\qquad(a\in\mathcal O_L).$$
It is the arithmetic Frobenius element, the unique lift of the arithmetic Frobenius coset.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Frobenius element, pp.141–142. Dependencies: def-arithmetic-frobenius-coset, cor-orders-of-decomposition-and-inertia-groups.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-frobenius-elements-above-a-prime-are-conjugate`

Claim and conventions: In a finite Galois extension L/K let the nonzero prime p be unramified. If $\sigma P=P'$ above p, then
$$\operatorname{Frob}_{P'}=\sigma\operatorname{Frob}_{P}\sigma^{-1}.$$
Thus p determines one conjugacy class. If the Galois group is abelian, the element is independent of P.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Proposition 8.14; Stein Proposition 9.4.1. Dependencies: thm-unramified-frobenius-element-exists-uniquely, thm-conjugacy-of-decomposition-and-inertia-groups, thm-galois-action-on-primes-above-a-prime-is-transitive.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-frobenius-order-is-residue-degree`

Claim and conventions: For finite Galois L/K and nonzero $P\mid p$, the arithmetic Frobenius coset has order $f(P/p)$ in D/I. If P is unramified, $\operatorname{Frob}_P$ has the same order in D.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Frobenius element, p.142. Dependencies: def-arithmetic-frobenius-coset, thm-unramified-frobenius-element-exists-uniquely, thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `cor-complete-splitting-and-trivial-frobenius`

Claim and conventions: An unramified nonzero prime p in a finite Galois extension L/K splits completely if and only if its arithmetic Frobenius conjugacy class is the identity class.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, p.142, paragraph after Proposition 8.14. Dependencies: thm-frobenius-order-is-residue-degree, cor-galois-prime-decomposition-efg.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `cor-frobenius-compatibility-in-finite-towers`

Claim and conventions: Let M/L/K have M/K and L/K finite Galois, and let $Q\mid P\mid p$ be nonzero primes with Q unramified over p. Then
$$\operatorname{Frob}(Q/p)|_L=\operatorname{Frob}(P/p),\qquad
\operatorname{Frob}(Q/P)=\operatorname{Frob}(Q/p)^{f(P/p)}.$$
If $M=L_1L_2$ with both $L_i/K$ finite Galois and Q unramified over p, the Frobenius elements at its two contractions determine $\operatorname{Frob}(Q/p)$ uniquely by restriction.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Propositions 8.15–8.17, p.142. Dependencies: thm-decomposition-and-inertia-in-towers, thm-unramified-frobenius-element-exists-uniquely, thm-ramification-and-residue-degrees-in-towers.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `lem-good-polynomial-reduction-kills-inertia`

Claim and conventions: Let $F\in\mathbb Z[T]$ be monic separable with splitting field L. If a rational prime p does not divide $\operatorname{Disc}(F)$, the integral roots of F have distinct reductions at every $P\mid p$. The inertia group I(P/p) is trivial, so p is unramified in L.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Proposition 8.21 and Theorem 8.23 proof, pp.144–145. Dependencies: def-discriminant-of-a-monic-polynomial, def-inertia-group-of-a-prime, cor-orders-of-decomposition-and-inertia-groups.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-frobenius-cycle-type-and-prime-splitting`

Claim and conventions: Let $F\in\mathbb Z[T]$ be monic separable with splitting field L, and let p be a rational prime not dividing $\operatorname{Disc}(F)$. Then p is unramified in L and $\bar F\in\mathbb F_p[T]$ is squarefree. The degrees of its monic irreducible factors, with each distinct factor counted once, are exactly the cycle lengths of arithmetic Frobenius on the roots of F.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Proposition 8.21, Corollary 8.22, Theorem 8.23, pp.144–145. Dependencies: lem-good-polynomial-reduction-kills-inertia, thm-frobenius-elements-above-a-prime-are-conjugate, thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `ex-decomposition-inertia-in-a-quadratic-field`

Claim and conventions: In a quadratic Galois extension of number fields, let $G=C_2$. For any nonzero base prime the three possibilities are:
split: $(e,f,g)=(1,1,2)$, $D=I=1$, Frobenius identity;
inert: $(1,2,1)$, $D=C_2$, $I=1$, Frobenius the nonidentity element;
ramified: $(2,1,1)$, $D=I=C_2$, arithmetic Frobenius coset identity in D/I.

Source: https://wstein.org/books/ant/ant.pdf — §9.2.1 and §9.3.2. Dependencies: cor-galois-prime-decomposition-efg, cor-orders-of-decomposition-and-inertia-groups, thm-frobenius-order-is-residue-degree.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `ex-gaussian-and-eisenstein-frobenius`

Claim and conventions: In $\mathbb Q(i)$, an odd prime p splits if $p\equiv1\pmod4$ and is inert if $p\equiv3\pmod4$; arithmetic Frobenius sends $i\mapsto i^p$. The prime 2 ramifies. In $\mathbb Q(\zeta_3)$, a prime $p\ne3$ splits if $p\equiv1\pmod3$ and is inert if $p\equiv2\pmod3$; arithmetic Frobenius sends $\zeta_3\mapsto\zeta_3^p$. The prime 3 ramifies.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Examples 8.18–8.19, pp.142–143. Dependencies: thm-frobenius-cycle-type-and-prime-splitting, ex-decomposition-inertia-in-a-quadratic-field, thm-multiplicative-group-of-a-finite-field-is-cyclic, thm-ring-of-integers-of-a-quadratic-field.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `ex-frobenius-in-a-small-cyclotomic-field`

Claim and conventions: Let $\zeta=\zeta_5$ be a primitive fifth root of unity and $L=\mathbb Q(\zeta)$. Then $\operatorname{Gal}(L/\mathbb Q)\cong(\mathbb Z/5\mathbb Z)^\times=C_4$ by $\sigma_a(\zeta)=\zeta^a$. For every prime $p\ne5$, p is unramified and its arithmetic Frobenius is $\sigma_{p\bmod5}$. In particular 2 is inert, with $(e,f,g)=(1,4,1)$.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Example 8.18, p.143. Dependencies: thm-frobenius-cycle-type-and-prime-splitting, thm-frobenius-order-is-residue-degree, cor-galois-prime-decomposition-efg, thm-eisenstein-irreducibility-criterion, def-discriminant-of-a-monic-polynomial.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `ex-nonabelian-frobenius-conjugacy-class`

Claim and conventions: The splitting field of $T^3-2$ over $\mathbb Q$ has Galois group $S_3$. At p=5 its Frobenius conjugacy class consists of all three transpositions: distinct choices of prime can give distinct elements.

Source: https://wstein.org/books/ant/ant.pdf — §9.2.2, cube root of two; Milne Theorem 8.23. Dependencies: thm-frobenius-cycle-type-and-prime-splitting, thm-frobenius-elements-above-a-prime-are-conjugate, thm-eisenstein-irreducibility-criterion.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `ex-decomposition-groups-in-a-tower`

Claim and conventions: Let $M=\mathbb Q(\zeta_5)$, $L=\mathbb Q(\sqrt5)$, and $K=\mathbb Q$. At p=2 there is a unique prime in each field above p. All ramification indices are one, and the residue degrees are four in M/K and two in each step. The decomposition sequence is
$$1\longrightarrow C_2\longrightarrow C_4\longrightarrow C_2\longrightarrow1,$$
and all inertia groups are trivial. The relative Frobenius for M/L is the square of the Frobenius for M/K.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Propositions 8.13 and 8.15–8.16; Example 8.18. Dependencies: ex-frobenius-in-a-small-cyclotomic-field, thm-decomposition-and-inertia-in-towers, cor-frobenius-compatibility-in-finite-towers.

Provenance: ai-generated statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `cex-ramified-frobenius-has-no-canonical-lift`

Claim and conventions: The residue Frobenius congruence does not determine a unique element of D at a ramified prime. At 2 in $\mathbb Q(i)$, with $P=(1+i)$, one has $D=I=C_2$ and $\kappa(P)=\mathbb F_2$. Identity and complex conjugation are distinct lifts of the same arithmetic Frobenius coset in D/I.

Source: https://wstein.org/books/ant/ant.pdf — §9.3.2 and §9.4, unramified qualification. Dependencies: ex-gaussian-and-eisenstein-frobenius, def-arithmetic-frobenius-coset.

Provenance: ai-generated statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `cex-frobenius-cycle-type-needs-good-reduction`

Claim and conventions: Factor multiplicities from an arbitrary integral generator need not encode Frobenius cycles. For $F(T)=T^2-5$ at p=2, $\bar F=(T+1)^2$, yet $\mathbb Q(\sqrt5)$ is unramified and inert at 2, with Frobenius a transposition. The integral generator $\omega=(1+\sqrt5)/2$ has minimal polynomial $G(T)=T^2-T-1$, whose reduction $T^2+T+1$ is irreducible over $\mathbb F_2$.

Source: https://wstein.org/books/ant/ant.pdf — §9.2.1, Q(sqrt5) example, pp.102–103; Milne Theorem 8.23 qualification. Dependencies: thm-frobenius-cycle-type-and-prime-splitting, thm-dedekind-kummer-prime-factorisation, thm-ramified-primes-and-the-number-field-discriminant, thm-ring-of-integers-of-a-quadratic-field, thm-power-basis-discriminant-is-polynomial-discriminant.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Authored `thm-decomposition-group-and-completion`

Claim and conventions: Let L/K be finite Galois and $P\mid p$ nonzero primes. Then $L_P/K_p$ is finite Galois of degree $e(P/p)f(P/p)$. Continuous extension gives a canonical isomorphism
$$D(P/p)\ \cong\ \operatorname{Gal}(L_P/K_p),$$
whose inverse restricts an automorphism to the embedded copy of L.

Source: https://www.jmilne.org/math/CourseNotes/ANT.pdf — Chapter 8, Proposition 8.10, p.139. Dependencies: def-decomposition-group-of-a-prime, lem-number-field-completions-as-local-polynomial-factors, cor-galois-prime-decomposition-efg, thm-orbit-stabilizer.

Provenance: ai-altered statement; proof adapted and expanded from the cited route, with a completed step/citation/boundary contract. Draft written; focused validation pending. No claim dropped. Next: continue manifest order, then run batch checks.

### Page composition complete

All 64 manifest items and all four planned pages are drafted at their number-theory paths. Page lists preserve manifest order within their display section. The local completion isomorphism uses the finite dimension-sum argument, avoiding an unstated continuity claim about arbitrary local automorphisms. The scope discussion had an unrelated sentence removed. No planned claim was dropped. Next: canonical phase repair and all four required validators.

### Step-5 completion and validation

Completed all **64 assigned items**, listed individually in the checkpoints above, and all **four planned pages**:

- `library/number-theory/classical-zero-free-region-and-the-prime-number-theorem.md` — 20 items.
- `library/number-theory/classical-zero-free-region-and-the-prime-number-theorem-examples.md` — 8 items.
- `library/number-theory/decomposition-inertia-and-frobenius.md` — 29 items.
- `library/number-theory/decomposition-inertia-and-frobenius-examples.md` — 7 items.

The output manifest remains `research/frontier-33-batch-5.pages.json`; its ids, dependencies, page categories, and planned scope are preserved. All 64 items and four pages are `status: draft`. No publication, judge, source-check, or verification stamp was written. The proof-contract output contains exact dependency-section quotations, actual citation uses, a derivation for every numbered proof row, and all eight boundary dispositions for each of the **57 proof-bearing items**.

Provenance rationale: the classical theorem chains and source exercises are adapted statements with expanded local arguments. The general valued-field extension uses Conrad's nondiscrete Hensel route, not a widening of Milne's discrete separable theorem. The first-digit counterexample includes Kedlaya's requested prime variant with an analytic proof. The quadratic and fifth-root examples that are later dependency targets remain source-adapted. Generated applications are marked explicitly with their schema generation role and are never dependency targets. Generated ids:
- `cor-nth-prime-asymptotic`
- `ex-the-three-four-one-trigonometric-inequality`
- `ex-zero-free-region-parameter-balance`
- `ex-optimizing-the-prime-number-theorem-contour-height`
- `ex-from-psi-to-the-logarithmic-integral`
- `ex-newman-tauberian-prime-number-theorem`
- `ex-prime-number-theorem-in-a-small-progression`
- `ex-decomposition-groups-in-a-tower`
- `cex-ramified-frobenius-has-no-canonical-lift`

Mathematical qualifications retained: Gamma is evaluated at `1+s/2`; the real zero sums are absolutely convergent; the low-height logarithmic derivative is pole-subtracted; the explicit-formula zero sum is finite; progression moduli are fixed and desmoothing follows character recombination; extending and residue-norm-normalized absolute values are distinguished; decomposition-field complete splitting is conditional on normality; ramified Frobenius is a coset; good reduction proves trivial inertia before interpreting cycle lengths. No planned claim was narrowed or dropped beyond these already approved scaffold qualifications. The local completion isomorphism uses injections plus the dimension sum, with each equality justified explicitly.

Checks actually run:

- `node tools/tsx-run.mjs tools/precheck.mts` followed by all 64 explicit `items/ID.md` paths from this manifest. Initial full run: 56 canonical phase repairs and one untagged multiline proof row. The row was flattened, the canonical repair was adopted for all 57 proofs, and citation uses, derivation steps, and boundary evidence were remapped. Final run: **57 checked, 0 failing**.
- The literal `node tools/validate-plan.mjs` invocation returned usage (exit 2), because this tool requires a plan argument. Corrected invocation `node tools/validate-plan.mjs research/plan-spec.json` returned **exit 0**, with acyclic consistent page order and no item cycles, forward references, B-page dependency violations, or unresolved ids among pages carrying item lists. Its repository-wide redundant-prerequisite warnings and unfilled future page lists are not batch authoring failures; the plan was not edited.
- `node tools/content-policy.mjs research/frontier-33-batch-5.pages.json`: **64 scoped items, 0 errors, 0 warnings**.
- `node tools/proof-contract.mjs research/frontier-33-batch-5.proof-contracts.json --strict`: **57/57 checked, 0 errors, 0 warnings**.
- Additional focused `node tools/rendercheck.mjs` with these 64 item paths and four page paths: initial run found three multiline displays; after flattening, **68 files passed**, including real KaTeX and renderer YAML parsing.
- Manifest/status check: 64 unique ids, all item and page files present, all draft, no judge records.

Required sources and current dependency statements were read via their current locators; browser source access resolved the native-shell DNS limitation. Existing source-harvest dispositions, fetch hashes, alpha verdicts/reviews, other batches, and workflow artifacts were preserved. No finite-smoke computation is offered as proof evidence.

**Blockers:** none remaining for this authoring dispatch. **Next action:** downstream driver-owned review; no authoring obligation remains open.

### Gate repair checkpoint

`ex-from-psi-to-the-logarithmic-integral` no longer cites the final `pi-Li` conclusion as support for its quantitative inputs. Its item, manifest, and proof contract now cite `thm-chebyshev-psi-prime-number-theorem-error`, `lem-chebyshev-functions-prime-power-comparison`, `lem-prime-counting-chebyshev-partial-summation`, and `def-logarithmic-integral` at the exact steps used. `ex-decomposition-groups-in-a-tower` carries the applicable order-four cyclic-subgroup smoke assertion, which executed once and passed. Both number-theory example page titles now use valid em dashes. Reflow was unchanged; focused precheck/render, content policy, manifest dependencies, strict contract, citation fidelity, depcheck, and the refreshed author receipt pass.
