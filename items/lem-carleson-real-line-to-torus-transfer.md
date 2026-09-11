---
id: "lem-carleson-real-line-to-torus-transfer"
kind: "lemma"
title: "Carleson real line to torus transfer"
deps: ["def-carleson-operator-and-measurable-linearisation", "def-carleson-tiles-wave-packets-and-tile-order", "def-period-one-fourier-coefficients-partial-sums-and-convolution", "thm-fourier-inversion-on-schwartz-space", "thm-fejer-convergence-in-lp", "def-cesaro-and-abel-means-of-a-fourier-series", "thm-complex-holder-minkowski-and-the-quotient-norm", "thm-tonelli-theorem-for-sigma-finite-product-spaces", "thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces", "thm-monotone-convergence-for-the-integral", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Fremlin, Measure Theory, volume 2
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap28.pdf
      locator: Fremlin section 286 torus conclusion; exact sublemma still to locate
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume AC. Uniform real-line Carleson Lp bounds for 1<p<infinity imply the symmetric Fourier partial-sum maximal Lp bound on T with normalized Haar measure.

## Facts & Assumptions

[F1] Real-line one-sided cutoffs and their maximal operator have the stated normalized Fourier integral convention on Schwartz input [[def-carleson-operator-and-measurable-linearisation]].

[F2] The fixed nonzero Schwartz packet phi has transform psi supported in [-1/8,1/8] [[def-carleson-tiles-wave-packets-and-tile-order]].

[F3] The torus is R/Z with characters $e_k(x)=e^{2\pi ikx}$, coefficients integrated on [0,1], and $S_Nf=\sum_{|k|\le N}\widehat f(k)e_k$ [[def-period-one-fourier-coefficients-partial-sums-and-convolution]].

[F4] Schwartz Fourier inversion holds pointwise [[thm-fourier-inversion-on-schwartz-space]].

[F5] Under countable choice, Fejer means converge in complex Lp(T) for1<=p<infinity [[thm-fejer-convergence-in-lp]].

[F6] Each Fejer mean is the finite average of the partial sums and hence a trigonometric polynomial [[def-cesaro-and-abel-means-of-a-fourier-series]].

[F7] Complex Hölder and Minkowski hold [[thm-complex-holder-minkowski-and-the-quotient-norm]].

[F8] Tonelli applies on sigma-finite products [[thm-tonelli-theorem-for-sigma-finite-product-spaces]].

[F9] Fubini applies to absolutely integrable functions on sigma-finite products [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]].

[F10] Increasing nonnegative integrands pass to the integral limit [[thm-monotone-convergence-for-the-integral]].

[F11] Assume AC [[def-axiom-of-choice]], supplying the countable choice in the Fourier and Fejer interfaces.

## Proof

**Given:** Fix 1<p<infinity and suppose $\|C_{\mathbb R}u\|_{L^p(\mathbb R)}\le D_p\|u\|_{L^p(\mathbb R)}$ for every Schwartz u. This weaker Schwartz-input hypothesis suffices for the asserted transfer.

1.1 Let $P(x)=\sum_{|k|\le m}a_ke^{2\pi ikx}$ be a trigonometric polynomial. Its Fourier coefficients are a_k: the integral of $e^{2\pi i(k-j)t}$ on [0,1] is one for k=j and zero otherwise, by direct integration for the nonzero integer k-j. For 0<epsilon<1 put $u_\varepsilon(x)=\phi(\varepsilon x)P(x)$, a Schwartz function: the derivatives of P are bounded and the scaled phi and all its derivatives decay to every order, so the Leibniz formula proves every Schwartz seminorm finite. Direct substitution in the absolutely convergent Fourier integral gives $$\widehat{u_\varepsilon}(\xi)=\sum_{|k|\le m}a_k\varepsilon^{-1}\psi((\xi-k)/\varepsilon).$$ The kth summand is supported in $[k-\varepsilon/8,k+\varepsilon/8]$. Thus for every integer N>=0 the interval $[-N-1/2,N+1/2]$ contains exactly the entire summands with |k|<=N and misses the other ones. F4 then gives the exact identity $$T_{N+1/2}u_\varepsilon(x)-T_{-N-1/2}u_\varepsilon(x)=\phi(\varepsilon x)S_NP(x).$$ The half-integer cutoffs avoid every endpoint frequency; no half-weight term occurs. [F1, F2, F3, F4, given]

1.2 We prove the precise periodic averaging limit used below. Let w be continuous, nonnegative and bounded by $C(1+|x|)^{-2}$, and let G be continuous and one-periodic. Then $$\varepsilon\int_{\mathbb R}w(\varepsilon x)G(x)dx\longrightarrow\Bigl(\int_{\mathbb R}w\Bigr)\int_0^1G(t)dt.$$ Decomposing the line into n+[0,1) and substituting gives the left side as $\int_0^1G(t)R_\varepsilon(t)dt$, where $R_\varepsilon(t)=\varepsilon\sum_{n\in\mathbb Z}w(\varepsilon(n+t))$. This rearrangement is absolute: $|G|$ is bounded, $\int w<\infty$, and F8 followed by F9 applies. These Riemann sums converge uniformly for t in [0,1] to $\int w$. To verify uniformity, partition the line into cells $[\varepsilon(n+t),\varepsilon(n+t+1))$. For cells meeting [-R,R], the difference between the left-endpoint sum and the integral is at most $(2R+2)\omega_R(\varepsilon)$, where $\omega_R$ is the modulus of continuity of w on [-R-1,R+1], and 0<epsilon<=1. For the remaining cells the sum and integral of the decay majorant are at most C/(1+R), uniformly in t and epsilon, by comparison of the monotone tails of $(1+|x|)^{-2}$ with their integrals. First choose R large and then epsilon small. The resulting uniform convergence allows integration against bounded G and proves the displayed limit. [F8, F9]

2.1 For every finite cutoff bound J, the identity in step 1.1 implies $$|\phi(\varepsilon x)|\max_{0\le N\le J}|S_NP(x)|\le2C_{\mathbb R}u_\varepsilon(x).$$ Raise to p, integrate and use the assumed real-line bound to obtain $$\varepsilon\int_{\mathbb R}|\phi(\varepsilon x)|^p\Bigl(\max_{0\le N\le J}|S_NP(x)|\Bigr)^pdx\le(2D_p)^p\varepsilon\int_{\mathbb R}|\phi(\varepsilon x)|^p|P(x)|^pdx.$$ Both periodic factors in this display are bounded and continuous. [F1, step 1.1, given]

3.1 Apply step 1.2 with $w=|\phi|^p$. Its hypotheses hold by Schwartz decay and continuity, choosing a decay exponent M with Mp>=2. Also $0<\int|\phi|^p<\infty$, since phi is a nonzero continuous Schwartz function. Taking epsilon to zero in step 2.1 and dividing by this positive window integral yields $$\Bigl\|\max_{0\le N\le J}|S_NP|\Bigr\|_{L^p([0,1])}\le2D_p\|P\|_{L^p([0,1])}.$$ This has normalized Haar measure exactly: the periodic averaging limit contains $\int_0^1$, with no interval-length factor. The constant is independent of J and the degree of P. [F2, step 1.2, step 2.1]

4.1 For any $f\in L^p(\mathbb T)$, normalized measure and F7 give $\|f\|_1\le\|f\|_p$, so its coefficients and partial sums in F3 are defined. By F5 and F6, the polynomials $P_j=\sigma_jf$ converge to f in Lp. For each fixed J, $$\max_{0\le N\le J}\|S_N(P_j-f)\|_\infty\le(2J+1)\|P_j-f\|_1\le(2J+1)\|P_j-f\|_p\longrightarrow0,$$ because every Fourier coefficient difference has magnitude at most its $L^1$ norm and every character has modulus one. Hence the finite maxima for P_j converge uniformly to the finite maximum for f. Step 3.1 and Minkowski's norm continuity give the same bound $2D_p\|f\|_p$ for that finite maximum. Finally these nonnegative maxima increase as J tends to infinity; F10 gives $$\Bigl\|\sup_{N\ge0}|S_Nf|\Bigr\|_{L^p(\mathbb T)}\le2D_p\|f\|_{L^p(\mathbb T)}.$$ Their countable supremum is measurable. The zero input and zero polynomial cases follow directly, and N=0 was included in the exact cutoff identity. Apply this argument separately to each p strictly between one and infinity. AC is inherited through F11; the approximants here are the explicitly specified Fejer means. This proves the conditional transfer without assuming that the real-line bound has already been established elsewhere. [F3, F5, F6, F7, F10, F11, step 3.1] ∎
