---
id: thm-littlewood-paley-characterisation-of-hilbert-sobolev-spaces
kind: theorem
title: "Littlewood-Paley characterisation of the Hilbert-Sobolev spaces"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition, def-inhomogeneous-dyadic-frequency-partition, thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces, def-real-order-bessel-potential-sobolev-space, thm-bessel-potential-completions-embed-in-tempered-distributions, def-japanese-bracket-bessel-potential-operator, lem-japanese-bracket-powers-preserve-schwartz-space, thm-plancherel, lem-ltwo-fourier-multiplier-bound, thm-complex-holder-minkowski-and-the-quotient-norm, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-countable-choice, thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, thm-locally-integrable-functions-embed-in-distributions, lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space, thm-complex-lp-completeness-and-almost-everywhere-subsequences]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Definition 6.5 and Theorem 6.6 (inhomogeneous Sobolev characterisation, with the low-pass $\\hat\\Phi$ of (6.3)) and Remark 6.9(b), printed pp. 24-26"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "§5, the frequency-localisation identity and the square function, printed pp. 23-24"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Definition 6.1.1 and the $L^2$ orthogonality identity (6.1.1), printed pp. 419-421"
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $n\ge1$ and
$s\in\mathbb R$, and let $H^s(\mathbb R^n)$ be the real-order Bessel-potential
space with the exact norm
$$\|U\|_{H^s}=\bigl\|\langle\xi\rangle^s\mathcal F(E_sU)\bigr\|_2$$
of [[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]],
where $\langle\xi\rangle=(1+|\xi|^2)^{1/2}$. Fix the partition of
[[def-inhomogeneous-dyadic-frequency-partition]] and let $\Delta_jU$ be the
tempered distributions obtained by the multipliers $\varphi_j$. Then for every
$U\in\mathcal S'(\mathbb R^n)$, $U$ lies in the image of the canonical
embedding $E_s$ (and is identified with its preimage in $H^s$) if and only if
$$\sum_{j\ge0}2^{2js}\|\Delta_jU\|_{L^2}^2<\infty,$$
where $\|\Delta_jU\|_{L^2}$ denotes the $L^2$ norm of the unique $L^2$ function
representing the tempered distribution $\Delta_jU$ when such a function exists
and is set equal to $+\infty$ otherwise (the convention is needed only for the
converse direction; for $U$ in the image of $E_s$ every $\Delta_jU$ is a
regular $L^2$ distribution, as the proof records), and in that case
$$c_{n,s,\psi}\|U\|_{H^s}^2\le\sum_{j\ge0}2^{2js}\|\Delta_jU\|_{L^2}^2\le C_{n,s,\psi}\|U\|_{H^s}^2$$
with constants depending only on $n,s$ and the partition. The low-frequency
block carries the weight $2^{0}=1$, and the series converges absolutely.

## Facts & Assumptions

**Given:** $n\ge1$, $s\in\mathbb R$, the completion $H^s(\mathbb R^n)$ of $\mathcal S$ with norm $q_s$, its canonical embedding $E_s:H^s\to\mathcal S'$ and the isometry $J_s$ of [[thm-bessel-potential-completions-embed-in-tempered-distributions]]; the fixed partition $(\varphi_j)$ and operators $\Delta_j$ of [[def-inhomogeneous-dyadic-frequency-partition]]; a tempered distribution $U\in\mathcal S'(\mathbb R^n)$.

[F1] $H^s$ is the normed completion of $\mathcal S$ under $q_s(u)=\|\langle\xi\rangle^s\widehat u\|_2$, $E_s$ is the canonical embedding and $J_s([u_j])=\lim_j\langle\xi\rangle^s\mathcal F u_j$ is a surjective linear isometry $H^s\to L^2$ ([[def-real-order-bessel-potential-sobolev-space]], [[thm-bessel-potential-completions-embed-in-tempered-distributions]]); the multiplier $\langle D\rangle^t$ and the bracket powers are those of [[def-japanese-bracket-bessel-potential-operator]] and [[lem-japanese-bracket-powers-preserve-schwartz-space]].

[F2] Characterisation: $E_s$ is a bijection from $H^s$ onto the set of $U\in\mathcal S'$ for which $\langle\xi\rangle^s\mathcal FU=u_g$ for some $g\in L^2$, the class $g$ is unique, and then $\|U\|_{H^s}=\|g\|_2$ ([[thm-fourier-characterisation-of-fractional-hilbert-sobolev-spaces]]).

[F3] For $U\in\mathcal S'$, $\Delta_jU=\mathcal F^{-1}(\varphi_j\mathcal FU)$; each $\varphi_j\in C_c^\infty$, $0\le\varphi_j\le1$, $\operatorname{supp}\varphi_j\subset\{2^{j-1}\le|\xi|\le2^{j+1}\}$ for $j\ge1$ and $\operatorname{supp}\varphi_0\subset\{|\xi|\le2\}$, the sum $\sum_j\varphi_j^2$ lies in $[1/3,1]$ pointwise with at most three nonzero terms, and $\sum_j\varphi_j=1$ ([[def-inhomogeneous-dyadic-frequency-partition]], [[lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition]]).

[F4] Plancherel: $\mathcal F_2$ and $\mathcal F_2^{-1}$ are isometries of $L^2$, so $\|g\|_2=\|\mathcal F_2g\|_2$; if a tempered distribution is the regular distribution $u_H$ of an $L^2$ function $H$, its representing $L^2$ class is unique and $\|H\|_2$ is the corresponding norm ([[thm-plancherel]], [[lem-ltwo-fourier-multiplier-bound]]).

[F5] The support bounds [F3] give $2^{j-1}\le\langle\xi\rangle\le\sqrt5\,2^j$ for $j\ge1$ and $1\le\langle\xi\rangle\le\sqrt5$ for $j=0$. Thus the bracket and the dyadic scale are comparable: $\langle\xi\rangle\asymp_{n}2^j$ for $j\ge1$, and $\langle\xi\rangle\asymp_n1$ together with $2^{0}=1$ for $j=0$; hence $c_s\le2^{2js}\langle\xi\rangle^{-2s}\le C_s$ on each $\operatorname{supp}\varphi_j$ with constants depending only on $n$ and $s$ (this also covers negative $s$, since the comparison is two-sided) ([[def-japanese-bracket-bessel-potential-operator]]).

[F6] Holder's inequality and Cauchy-Schwarz for integrals and finite sums ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F7] Tonelli's theorem permits interchanging the nonnegative sums and integrals used below ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F8] Fourier transformation of a regular $L^2$ distribution agrees with Plancherel ([[thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms]]); locally integrable densities are determined almost everywhere by their distribution pairings ([[thm-locally-integrable-functions-embed-in-distributions]]). $C_c^\infty$ is dense in $\mathcal S$ ([[lem-smooth-compactly-supported-functions-are-dense-in-schwartz-space]]), and $L^2$ is complete under Countable Choice ([[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]).

## Proof

**Proof technique:** direct.

1.1 Forward direction: identification of the pieces. Let $U=E_s(V)$ with $V\in H^s$ and let $g=J_s(V)\in L^2$, so that $\|U\|_{H^s}=\|g\|_2$ and $\langle\xi\rangle^s\mathcal FU=u_g$ by [F2]. Put $h:=\langle\xi\rangle^{-s}g$; since $\langle\xi\rangle^{-s}$ is smooth and locally bounded, $h\in L^2_{\mathrm{loc}}(\mathbb R^n)$, and $u_h=\langle\xi\rangle^{-s}u_g=\mathcal FU$ by the invertibility of the bracket multiplier [F1]. Then $\Delta_jU=\mathcal F^{-1}(\varphi_j\mathcal FU)=\mathcal F^{-1}(u_{\varphi_jh})=u_{(\varphi_jh)^\vee}$ by [F3], and $\varphi_jh\in L^2$ because $h$ is locally square integrable and $\varphi_j$ is compactly supported and bounded; Plancherel [F4] gives $\|\Delta_jU\|_2^2=\|\varphi_jh\|_2^2=\int_{\mathbb R^n}\varphi_j(\xi)^2|h(\xi)|^2\,d\xi$. [F1, F2, F3, F4, F8, algebra]

1.2 Converse direction: reconstruction. Assume $\sum_j2^{2js}\|\Delta_jU\|_2^2<\infty$; then for every $j$ the distribution $\Delta_jU$ is the regular distribution $u_{H_j}$ of an $L^2$ function $H_j$ (the case $H_j=0$ included), and we may take $H_j=\Delta_jU$ as an $L^2$ class. Put $h_j:=\mathcal F_2H_j$ and $g_j:=\langle\xi\rangle^sh_j$. Since $\mathcal F(\Delta_jU)=\varphi_j\mathcal FU$ and $\mathcal F u_{H_j}=u_{\mathcal F_2H_j}$, the distribution $u_{h_j}=\varphi_j\mathcal FU$ is supported in $\operatorname{supp}\varphi_j$, so $h_j=0$ almost everywhere off that support; by [F5] this gives $\|g_j\|_2^2=\int\langle\xi\rangle^{2s}|h_j|^2\asymp_{n,s}2^{2js}\|H_j\|_2^2=2^{2js}\|\Delta_jU\|_2^2$, so $\sum_j\|g_j\|_2^2<\infty$. The supports of the $g_j$ lie in the supports of the $\varphi_j$, at most three of which meet at any point by [F3]; hence $\bigl|\sum_{j\in F}g_j\bigr|^2\le3\sum_{j\in F}|g_j|^2$ pointwise for every finite $F$. Therefore the partial sums are Cauchy in $L^2$ (their tail squared norms are at most three times the tails of $\sum_j\|g_j\|_2^2$) and converge by [F8] to some $g\in L^2$, with $\|g\|_2^2\le3\sum_j\|g_j\|_2^2\asymp_{n,s}\sum_j2^{2js}\|\Delta_jU\|_2^2$. No lower norm estimate is used until the reconstruction identifies $g_j=\varphi_jg$. [F3, F4, F5, F6, F8, algebra]

2.1 Forward direction: the weighted sum. Multiplying the identity of step 1.1 by $2^{2js}$ and summing, the pointwise comparison $2^{2js}\langle\xi\rangle^{-2s}\in[c_s,C_s]$ on $\operatorname{supp}\varphi_j$ from [F5] gives $\sum_{j\ge0}2^{2js}\|\Delta_jU\|_2^2=\sum_j\int2^{2js}\varphi_j^2|h|^2\asymp_{n,s}\int\bigl(\sum_j\varphi_j^2\bigr)|g|^2$, where [F7] interchanges the nonnegative sum and integral and the last comparison uses $|h|^2=\langle\xi\rangle^{-2s}|g|^2$. Since $\sum_j\varphi_j^2\in[1/3,1]$ by [F3], this is comparable to $\int|g|^2=\|U\|_{H^s}^2$; in particular the series is finite and the right-hand inequality with $C_{n,s,\psi}$ holds, while the left-hand inequality follows from the same comparison with $c_s$. [F3, F5, F7, step 1.1, algebra]

2.2 Converse direction: $U$ lies in the range of $E_s$. With $g$ as in step 1.2, test against any $\chi\in C_c^\infty$. Only finitely many $\varphi_j$ meet its compact support, and $\sum_j\varphi_j=1$ there by [F3], so $\langle\langle\xi\rangle^s\mathcal FU,\chi\rangle=\sum_j\int g_j\chi=\int g\chi$, the last equality following from the $L^2$ convergence in step 1.2 and Cauchy-Schwarz [F6]. Both sides are tempered distributions, and density of $C_c^\infty$ in $\mathcal S$ [F8] extends this identity to every Schwartz test, giving $\langle\xi\rangle^s\mathcal FU=u_g$.  Multiplication by $\varphi_j$ then shows $g_j=\varphi_jg$ as $L^2$ functions. Tonelli [F7] and [F3] give $$\frac13\|g\|_2^2\le\sum_j\|g_j\|_2^2=\int\Bigl(\sum_j\varphi_j(\xi)^2\Bigr)|g(\xi)|^2\,d\xi\le\|g\|_2^2.$$ Thus $U$ lies in the range of $E_s$ by [F2], and this frame comparison, the piecewise comparison in step 1.2, and the exact norm identity $\|U\|_{H^s}=\|g\|_2$ give $$c_{n,s,\psi}\sum_j2^{2js}\|\Delta_jU\|_2^2\le\|U\|_{H^s}^2\le C_{n,s,\psi}\sum_j2^{2js}\|\Delta_jU\|_2^2.$$ [F2, F3, F6, F7, F8, step 1.2, algebra]

3.1 Conclusion. Steps 2.1 and 2.2 are the two directions of the asserted equivalence and the two-sided norm comparison (the constants of step 2.1 for the forward direction and those of step 2.2 for the converse are both of the form $c_{n,s,\psi},C_{n,s,\psi}$); the weight $2^{0}=1$ on the low-frequency block is part of the definition of the series, and the finiteness of the series in the forward direction is contained in step 2.1. [step 2.1, step 2.2] ∎
