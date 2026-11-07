---
id: lem-waring-weighted-major-arc-mean-value
kind: lemma
title: "A weighted major-arc mean-value estimate"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-exponential-character-e
  - def-real-power
  - def-natural-logarithm
  - def-vinogradov-mean-value-Jsk
  - thm-vinogradov-mean-value-is-solution-count
  - lem-divisor-function-subpower-bound
  - lem-waring-ramanujan-sum-bound
  - lem-continuous-torus-orthogonality-for-integer-frequencies
  - thm-logarithm-derivative-and-integral
  - thm-integration-by-parts
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§10, equations (10.5)–(10.10), printed pp. 1618–1620; the weighted estimate is proved here by Fourier coefficients"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§6.2, singular-series Fourier expansion, printed pp. 39–40"
---

## Statement

Let $k\ge2$, $s\ge1$, and $X\ge2$ be integers. On $\mathbb T=\mathbb R/\mathbb Z$ with distance $\|t\|_{\mathbb T}:=\min_{m\in\mathbb Z}|t-m|$, for each $1\le q\le X$ and each residue $a\pmod q$ whose only positive common divisor with $q$ is $1$, let
$$\mathfrak A_X(q,a)=\left\{\theta:\left\|\theta-\frac aq\right\|_{\mathbb T}\le\frac{X^{1-k}}q\right\}$$
$$\Phi_X(\theta)=\sum_{q=1}^X\ \sum_{\substack{a\pmod q\\\gcd(a,q)=1}}\frac{\mathbf1_{\mathfrak A_X(q,a)}(\theta)}{q+X^k\|q\theta\|_{\mathbb T}}.$$
Define
$$G_{s,k,2X}(\theta)=\int_{\mathbb T^{k-1}}\left|\sum_{x=1}^{2X} e\!\left(\sum_{j=1}^{k-1}\beta_jx^j+\theta x^k\right)\right|^{2s}d\boldsymbol\beta.$$
$$J_{s,j}(2X)=\int_{\mathbb T^j}\left|\sum_{x=1}^{2X}e\!\left(\sum_{\ell=1}^j\gamma_\ell x^\ell\right)\right|^{2s}d\boldsymbol\gamma.$$
where $e(t)=\exp(2\pi i t)$, $\mathbf1_E$ is $1$ on $E$ and $0$ off $E$, and all torus integrals are normalized. For every $\varepsilon>0$ there is a constant $C_{k,s,\varepsilon}$ such that
$$\int_{\mathbb T}\Phi_X(\theta)G_{s,k,2X}(\theta)\,d\theta\le C_{k,s,\varepsilon}\left(X^{1-k}J_{s,k}(2X)+X^{-k+\varepsilon}J_{s,k-1}(2X)\right).$$

## Statement references

[Wooley, §10, equations (10.5)–(10.10)](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §6.2](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** Integers $k\ge2$, $s\ge1$, $X\ge2$, the torus arcs in the Statement, and $e(t)=\exp(2\pi i t)$.

[F1] The exponential character is $e(t)=\exp(2\pi i t)$ ([[def-exponential-character-e]]).

[F2] For integers $s,j\ge1$ and integer $N$, $J_{s,j}(N)$ is the normalized integral of the $2s$-th power of the degree-$j$ Weyl sum, and it counts the tuples whose power sums agree in every degree $1\le\ell\le j$ ([[def-vinogradov-mean-value-Jsk]], [[thm-vinogradov-mean-value-is-solution-count]]).

[F3] For nonzero integer $h$, the Ramanujan sum $c_q(h)=\sum_{a\pmod q,(a,q)=1}e(ah/q)$ satisfies $|c_q(h)|\le\gcd(q,|h|)d_2(|h|)$ ([[lem-waring-ramanujan-sum-bound]]).

[F4] For each $\eta>0$, $d_2(m)\le C_\eta m^\eta$ for all positive integers $m$ ([[lem-divisor-function-subpower-bound]]).

[F5] The integral of $e(m\beta)$ over the normalized circle is $1$ when the integer frequency $m=0$ and $0$ otherwise ([[lem-continuous-torus-orthogonality-for-integer-frequencies]]).

[F6] The natural logarithm has derivative $1/x$ for $x>0$, so $\int du/(1+X^ku)=X^{-k}\log(1+X^ku)$ ([[thm-logarithm-derivative-and-integral]], [[def-natural-logarithm]]).

[F7] Integration by parts applies on each closed subinterval on which the kernel $u\mapsto(1+X^k|u|)^{-1}$ is continuously differentiable ([[thm-integration-by-parts]]).

## Proof

**Proof technique:** finite Fourier expansion and coefficient estimates.

1.1 For each integer $h$, the Fourier coefficient $\widehat\Phi_X(h):=\int_{\mathbb T}\Phi_X(\theta)e(-h\theta)d\theta$ is
$$\widehat\Phi_X(h)=\sum_{q\le X}\frac{c_q(-h)}q I_q(h),\qquad I_q(h):=\int_{-X^{1-k}/q}^{X^{1-k}/q}\frac{e(-hu)}{1+X^k|u|}\,du,$$
where $c_q(0):=\varphi(q)$ and $\varphi(q)$ is the number of reduced residues modulo $q$. Indeed, on the arc centered at $a/q$ write $\theta=a/q+u$ on the torus; then $\|q\theta\|_{\mathbb T}=q|u|$, and the sum over $a$ is $c_q(-h)$. [F1, given, algebra]

1.2 At $h=0$, [F6] gives $I_q(0)=2X^{-k}\log(1+X/q)$, so $|\widehat\Phi_X(0)|\le2X^{-k}\sum_{q\le X}\log(1+X/q)\ll X^{1-k}$. The last sum is $O(X)$ because $\log(1+X/q)\le\log(2X/q)$ and $\log(X!)\ge\int_1^X\log x\,dx=X\log X-X+1$. [F6, step 1.1, algebra]

1.3 For $h\ne0$, the absolute integral is at most $2X^{-k}\log(1+X/q)$, while integration by parts [F7] separately on the two sides of $u=0$ gives $|I_q(h)|\le C|h|^{-1}$: the kernel $u\mapsto(1+X^k|u|)^{-1}$ has supremum at most $1$ and total variation at most $2$. [F7, step 1.1]

2.1 For $h\ne0$, [F3] and the identity $\gcd(q,|h|)\le\sum_{d\mid q,\,d\mid |h|}d$ give
$$\sum_{q\le X}\frac{|c_q(h)|}{q}\le d_2(|h|)\sum_{d\mid |h|,\,d\le X}\sum_{m\le X/d}\frac1m\le d_2(|h|)^2(1+\log X).$$
Combining this with the first bound in step 1.3 and [F4], for $1\le|h|\le X^{2k}$ we obtain $|\widehat\Phi_X(h)|\le C_{k,\varepsilon}X^{-k+\varepsilon}$ by applying [F4] with $\eta=\varepsilon/(8k)$ and absorbing the powers of $\log(2X)$. [F3, F4, step 1.1, step 1.3]

2.2 If $|h|>X^{2k}$, use instead $|I_q(h)|\le C|h|^{-1}$ from step 1.3 and [F4] with $\eta=1/8$ in step 2.1. This gives $|\widehat\Phi_X(h)|\le C|h|^{-3/4}(1+\log X)\le CX^{-3k/2}(1+\log X)\le C_{k,\varepsilon}X^{-k+\varepsilon}$. Hence the latter bound holds uniformly for every nonzero integer $h$. [F4, step 1.3, step 2.1, algebra]

3.1 Expand the finite Weyl sum in $G_{s,k,2X}$. Orthogonality [F5] in $\beta_1,\ldots,\beta_{k-1}$ gives a finite Fourier expansion $G_{s,k,2X}(\theta)=\sum_h c_h e(h\theta)$, where $c_h$ is the nonnegative integer counting tuples $(x_1,\ldots,x_s,y_1,\ldots,y_s)\in[1,2X]^{2s}$ with equal power sums in degrees $1,\ldots,k-1$ and degree-$k$ difference $h$. Therefore $c_0=J_{s,k}(2X)$ and $\sum_hc_h=J_{s,k-1}(2X)$ by [F2]. [F1, F2, F5, algebra]

3.2 Since each $c_h\ge0$, integrate the finite expansion against $\Phi_X$ and bound the zero and nonzero frequencies separately. Steps 1.2 and 2.2 yield
$$\int_{\mathbb T}\Phi_XG_{s,k,2X}\le |\widehat\Phi_X(0)|c_0+\sup_{h\ne0}|\widehat\Phi_X(h)|\sum_{h\ne0}c_h\le C_{k,s,\varepsilon}\left(X^{1-k}J_{s,k}(2X)+X^{-k+\varepsilon}J_{s,k-1}(2X)\right),$$
which is the assertion. [step 1.2, step 2.2, step 3.1, algebra] ∎
