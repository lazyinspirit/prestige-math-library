---
id: lem-endpoint-interpolation-simple-analytic-families
kind: lemma
title: Finite simple analytic families and their exact endpoint norms
deps: [def-complex-lp-and-euclidean-test-function-conventions, thm-complex-holder-minkowski-and-the-quotient-norm, def-conjugate-exponents,
  thm-complex-exponential-is-entire-with-derivative-itself, thm-complex-exponential-addition-and-real-extension, thm-chain-rule-for-complex-derivatives,
  cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-algebra-of-complex-derivatives, def-natural-logarithm,
  def-real-power, thm-exponential-is-strictly-increasing]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Laugesen Appendix C proof of Theorem C.6, pp.170–172, equations (C.4)–(C.6); Teschl Theorem 15.2, p.415
      url: https://arxiv.org/pdf/0903.3845
  scraped: []
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Let $1\le p_0,p_1<\infty$, $1\le q_0,q_1\le\infty$, and $0<\theta<1$. Define
$$\frac1p=\frac{1-\theta}{p_0}+\frac\theta{p_1},\qquad \frac1q=\frac{1-\theta}{q_0}+\frac\theta{q_1},\qquad \frac1r=1-\frac1q,\quad \frac1{r_\ell}=1-\frac1{q_\ell}.$$
For complex finite simple functions $f=\sum_j a_j\mathbf1_{E_j}$ and $g=\sum_k b_k\mathbf1_{F_k}$ on their respective measure spaces, with disjoint finite-measure fibers, there are coefficientwise entire families $f_z,g_z$ bounded in coefficient modulus on $0\le\operatorname{Re}z\le1$, with $f_\theta=f,g_\theta=g$ as a.e. classes. After discarding zero coefficients and null fibers, for nonzero classes and $\ell\in\{0,1\}$ and every $t\in\mathbb R$,
$$\|f_{\ell+it}\|_{p_\ell}=\|f\|_p^{p/p_\ell}.$$
If $r<\infty$, then $\|g_{\ell+it}\|_{r_\ell}=\|g\|_r^{r/r_\ell}$ when $r_\ell<\infty$, and $\|g_{\ell+it}\|_\infty=1$ when $r_\ell=\infty$. If $r=\infty$, necessarily $q_0=q_1=1$; take $g_z=g$, retaining its infinity norm. Zero classes have identically zero families.

## Facts & Assumptions

[F1] Finite simple classes and their norms use disjoint measurable fibers; zero classes can be represented by zero [[def-complex-lp-and-euclidean-test-function-conventions]].

[F2] Conjugate exponents have reciprocal sum one with reciprocal infinity zero [[def-conjugate-exponents]].

[F3] For positive a, exp(log a)=a [[def-natural-logarithm]].

[F4] For positive a, a to a real power is exp of that power times log a [[def-real-power]].

[F5] The complex exponential is entire [[thm-complex-exponential-is-entire-with-derivative-itself]].

[F6] Compositions of complex differentiable maps are complex differentiable [[thm-chain-rule-for-complex-derivatives]].

[F7] The modulus of exp(x+iy) is exp(x) [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]].

[F8] Affine combinations and finite sums and products of entire functions are entire [[thm-algebra-of-complex-derivatives]].

[F9] The real exponential is increasing, so an affine real exponent between its endpoint values gives a modulus bounded by the endpoint maximum [[thm-exponential-is-strictly-increasing]].

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Discard null fibers and zero coefficients without changing the classes, and define their omitted contributions to be zero for every z. For the remaining coefficients put $\alpha(z)=p((1-z)/p_0+z/p_1)$ and $a_j(z)=(a_j/|a_j|)\exp(\alpha(z)\log|a_j|)$. Positive coefficient moduli have defined logarithms; at z=theta, $\alpha(\theta)=1$, so $a_j(\theta)=a_j$. Set $f_z=\sum_j a_j(z)\mathbf1_{E_j}$. [F1, F2, F3, F4]

2.1 The affine alpha is entire; the chain rule and the entire exponential make every $a_j(z)$ entire. For $z=x+it$, the exponential modulus formula gives $|a_j(z)|=\exp(p((1-x)/p_0+x/p_1)\log|a_j|)=|a_j|^{p((1-x)/p_0+x/p_1)}$. For $0\le x\le1$ this is bounded by the larger of the two boundary powers. The finite list of coefficients is therefore bounded throughout the strip. At $x=\ell$ with $\ell=0$ or $1$, disjointness gives $\|f_{\ell+it}\|_{p_\ell}^{p_\ell}=\sum_j|a_j|^p\mu(E_j)=\|f\|_p^p$, proving the asserted norm formula. [F3, F4, F5, F6, F7, F8, step 1.1, F9]

3.1 Since $1/r_\ell=1-1/q_\ell$, we have $1/r=(1-\theta)/r_0+\theta/r_1$. If r is finite, put $\beta(z)=r((1-z)/r_0+z/r_1)$ and $b_k(z)=(b_k/|b_k|)\exp(\beta(z)\log|b_k|)$. The preceding entire-function and modulus calculations apply with r and the b-coefficients, and $\beta(\theta)=1$. For finite $r_\ell$, $\|g_{\ell+it}\|_{r_\ell}^{r_\ell}=\sum_k|b_k|^r\nu(F_k)=\|g\|_r^r$. If $r_\ell=\infty$, each surviving coefficient has modulus one on that boundary, so the essential maximum is one: a nonzero class has at least one positive-measure surviving fiber. [F1, F2, F3, F4, F5, F6, F7, F8, step 2.1]

4.1 If $r=\infty$, the positive weights $1-\theta,\theta$ and nonnegative reciprocals force $1/r_0=1/r_1=0$, hence $q_0=q_1=1$. The constant family $g_z=g$ is entire coefficientwise, bounded, has $g_\theta=g$ and unchanged infinity norm. Identically zero families handle zero classes on either side, including empty or zero-measure spaces, with no logarithm of zero. Thus every asserted branch is established. [F1, F2, step 1.1, step 3.1] ∎
