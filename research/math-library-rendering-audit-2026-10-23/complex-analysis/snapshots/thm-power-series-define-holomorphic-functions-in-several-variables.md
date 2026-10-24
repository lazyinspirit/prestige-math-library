---
id: thm-power-series-define-holomorphic-functions-in-several-variables
kind: theorem
title: "An absolutely convergent multi-indexed power series is holomorphic and differentiates termwise"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-multivariable-power-series, def-holomorphic-function-in-several-complex-variables, lem-complex-linear-real-differential-criterion, def-wirtinger-operators-in-several-complex-variables, thm-absolute-convergence-of-complex-series, thm-weierstrass-m-test-for-complex-function-series, thm-nonnegative-series-bounded-partial-sums, thm-geometric-series, lem-power-over-geometric-null, thm-direct-comparison-test, cor-cauchy-inequalities, lem-binomial-theorem-over-complex-numbers, thm-algebra-of-complex-derivatives, cor-complex-differentiability-implies-continuity, def-ck-and-multi-index-notation-in-several-variables, def-factorial-and-falling-factorial, thm-induction-principle, def-complex-integer-powers, def-balls-and-polydiscs-in-complex-euclidean-space, lem-complex-conjugation-and-modulus-laws, lem-finite-sum-laws, rem-complex-euclidean-space-dictionary, lem-standard-basis-of-f-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Fix $m\ge1$, $a\in\mathbb C^m$, a polyradius $r$, a real $M\ge0$ and
coefficients $c:\mathbb N^m\to\mathbb C$ with

$$|c_\alpha|\le M\prod_{k<m}r_k^{-\alpha_k}\qquad\text{for every multi-index }\alpha.$$

Then:

1. for every $\theta$ with $0<\theta<1$ the series
   $\sum_\alpha c_\alpha(z-a)^\alpha$ converges absolutely and uniformly on
   $\overline\Delta_{\theta r}(a)$, so its sum $g$ is defined on
   $\Delta_r(a)$;
2. $g$ is holomorphic on $\Delta_r(a)$, with
   $$Dg(z)h=\sum_{k<m}b_k(z)h_k,\qquad b_k(z)=\sum_{\alpha}\alpha_k\,c_\alpha(z-a)^{\alpha-e_k},$$
   the $k$th series running over the multi-indices with $\alpha_k\ge1$ and
   converging absolutely on $\Delta_r(a)$; equivalently
   $\partial_{z_k}g=b_k$;
3. for every $\theta$ with $0<\theta<1$ the derived coefficients
   $\alpha_kc_\alpha$, re-indexed as a power series, obey a bound of the same
   shape on the polyradius $\theta r$, so the differentiation may be iterated;
   and every iterated complex partial derivative
   $\partial^\beta_zg:=\partial_{z_0}^{\beta_0}\cdots\partial_{z_{m-1}}^{\beta_{m-1}}g$
   exists on $\Delta_r(a)$ with
   $$\partial^\beta_zg(a)=\beta!\,c_\beta .$$

## Facts & Assumptions

**Given:** The data above; $\mathbb C^m$ is read through [[rem-complex-euclidean-space-dictionary]] and polydiscs are those of [[def-balls-and-polydiscs-in-complex-euclidean-space]].

[L1] A multi-indexed series converges absolutely at $z$ when the series along one, equivalently every, enumeration of $\mathbb N^m$ converges absolutely; the sum is independent of the enumeration; the box partial sums over $B_N=\{\alpha:\alpha_k\le N\}$ converge to it; and a dominated series with summable bounds converges absolutely and uniformly on the set ([[def-multivariable-power-series]]).

[L2] $f$ is complex differentiable at $z$ when there is a $\mathbb C$-linear $L$ with $f(z+h)=f(z)+L(h)+r(h)$ and $|r(h)|/\lVert h\rVert\to0$; $L$ is unique and written $Df(z)$ ([[def-holomorphic-function-in-several-complex-variables]]).

[L3] An $\mathbb R$-linear $T$ with $T(h)=\sum_{k<m}c'_kh_k$ is $\mathbb C$-linear, and for a differentiable $f$ the coefficients are $\partial_{z_k}f$ ([[lem-complex-linear-real-differential-criterion]], [[def-wirtinger-operators-in-several-complex-variables]]).

[L4] An absolutely convergent complex series converges and every rearrangement has the same sum ([[thm-absolute-convergence-of-complex-series]]).

[L5] If $|f_n(x)|\le M_n$ on a set with $\sum M_n$ convergent, then $\sum f_n$ converges absolutely and uniformly there ([[thm-weierstrass-m-test-for-complex-function-series]]).

[L6] A nonnegative series converges exactly when its partial sums are bounded above ([[thm-nonnegative-series-bounded-partial-sums]]); for real $r'$ with $|r'|<1$, $\sum_kr'^k=1/(1-r')$ ([[thm-geometric-series]]); if $0\le a_k\le b_k$ eventually and $\sum b_k$ converges then $\sum a_k$ converges ([[thm-direct-comparison-test]]).

[L7] For $p>0$ and rational $\alpha>0$ the sequence $k^\alpha/(1+p)^k$ tends to $0$, the numerator being the corresponding power of the canonical natural ([[lem-power-over-geometric-null]]).

[L8] If $f$ is holomorphic on $D(a',R)$, $0<r'<R$ and $|f|\le K$ on the circle $|\zeta-a'|=r'$, then $|f^{(n)}(a')|\le n!\,K/r'^n$ for every natural $n$ ([[cor-cauchy-inequalities]]).

[L9] $(z+w)^n=\sum_{k\le n}\binom nk z^kw^{n-k}$ for complex $z,w$ and natural $n$, the binomial coefficients read as complex numbers ([[lem-binomial-theorem-over-complex-numbers]]).

[L10] Linear combinations and products of functions complex differentiable at a point are complex differentiable there with the usual formulas; constants have derivative $0$ and the identity derivative $1$ ([[thm-algebra-of-complex-derivatives]]); such functions are continuous ([[cor-complex-differentiability-implies-continuity]]).

[L11] Multi-indices satisfy $|\alpha|=\sum_{k<m}\alpha_k$ and $\alpha!=\prod_{k<m}\alpha_k!$ ([[def-ck-and-multi-index-notation-in-several-variables]]), with $0!=1$ and $(j+1)!=j!\,(j+1)$ ([[def-factorial-and-falling-factorial]]).

[L12] If a property holds at $0$ and passes from $j$ to $j+1$, it holds for every natural number ([[thm-induction-principle]]).

[L13] Natural powers satisfy $w^0=1$ and $w^{j+1}=w^jw$; negative integer powers need a nonzero base ([[def-complex-integer-powers]]).

[L14] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]); finite sums and products satisfy the additivity, scaling and product laws ([[lem-finite-sum-laws]]).

[L15] Every $h\in\mathbb C^m$ satisfies $h=\sum_{k<m}h_ke_k$ in the standard basis ([[lem-standard-basis-of-f-n]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\theta$ with $0<\theta<1$. For $z\in\overline\Delta_{\theta r}(a)$ the hypothesis and [L14] give $|c_\alpha(z-a)^\alpha|\le M\prod_{k<m}\theta^{\alpha_k}$; the box sums of the right side are $M\prod_{k<m}\sum_{j\le N}\theta^j\le M(1-\theta)^{-m}$ by [L14] and [L6], and every finite subset of $\mathbb N^m$ lies in a box, so [L6] makes the majorant series convergent and [L1] and [L5] give absolute and uniform convergence on $\overline\Delta_{\theta r}(a)$. Since each $z\in\Delta_r(a)$ lies in some such closed polydisc, $g$ is defined on $\Delta_r(a)$. This is claim 1. [given, L1, L5, L6, L14]

1.2 For $0<\theta<\theta_1<1$ and every $k<m$ the series $\sum_\alpha\alpha_k\theta^{|\alpha|-1}$ converges: by [L7] the sequence $j(\theta/\theta_1)^{j-1}$ is null, hence bounded by some $K_\theta$, so $j\theta^{j-1}\le K_\theta\theta_1^{j-1}$ and [L6] with [L14] bounds the box sums of $\sum_\alpha\alpha_k\theta^{|\alpha|-1}$ by $K_\theta(1-\theta_1)^{-1}(1-\theta)^{-(m-1)}$; [L6] then gives convergence. [given, L6, L7, L14]

1.3 Fix $\theta$ with $0<\theta<1$, a point $z^0\in\overline\Delta_{\theta r}(a)$ and $\theta'$ with $\theta<\theta'<1$; write $w=z^0-a$, so $|w_k|\le\theta r_k$. For $h\in\mathbb C^m$ with $h\ne0$ put $\eta=\max_{k<m}|h_k|/r_k$ and assume $\eta\le(\theta'-\theta)/2$, which holds for all small $\lVert h\rVert$ because $|h_k|\le\lVert h\rVert$; then $z^0+h\in\overline\Delta_{\theta' r}(a)\subseteq\Delta_r(a)$ by [L14]. [given, L14]

2.1 For each $\alpha$ let $\phi_\alpha(\tau)=\prod_{k<m}(w_k+\tau h_k)^{\alpha_k}$, a polynomial in $\tau$ of degree at most $|\alpha|$ by [L9] and [L13], hence entire, with $\phi_\alpha(\tau)=\sum_{j\le|\alpha|}\phi_{\alpha,j}\tau^j$ and $\phi_{\alpha,j}=\phi_\alpha^{(j)}(0)/j!$ by [L10] and [L11]. In particular $\phi_{\alpha,0}=w^\alpha$ and, by the product rule of [L10] and an induction on the number of factors ([L12]), $\phi_{\alpha,1}=\sum_{k<m}\alpha_kw^{\alpha-e_k}h_k$, terms with $\alpha_k=0$ being $0$. [step 1.3, L9, L10, L11, L12, L13]

2.2 The series $b_k(z^0)=\sum_\alpha\alpha_kc_\alpha w^{\alpha-e_k}$ converges absolutely: $|\alpha_kc_\alpha w^{\alpha-e_k}|\le M r_k^{-1}\alpha_k\theta^{|\alpha|-1}$ by the hypothesis and [L14], and step 1.2 makes that majorant summable. [step 1.2, step 1.3, L1, L14]

3.1 Put $T=(\theta'-\theta)/\eta$, so $T\ge2$ by step 1.3. For $|\tau|\le T$ and every $k$, $|w_k+\tau h_k|\le\theta r_k+T|h_k|\le\theta'r_k$ by [L14], so $|\phi_\alpha(\tau)|\le\prod_{k<m}(\theta'r_k)^{\alpha_k}$ there. Applying [L8] to $\phi_\alpha$ on the disc of radius $T$ gives $|\phi_{\alpha,j}|\le\prod_{k<m}(\theta'r_k)^{\alpha_k}T^{-j}$. [step 1.3, step 2.1, L8, L14]

4.1 Hence $R_\alpha:=\phi_\alpha(1)-\phi_{\alpha,0}-\phi_{\alpha,1}=\sum_{2\le j\le|\alpha|}\phi_{\alpha,j}$ satisfies $|R_\alpha|\le\prod_{k<m}(\theta'r_k)^{\alpha_k}\sum_{j\ge2}T^{-j}\le\dfrac{2}{T^2}\prod_{k<m}(\theta'r_k)^{\alpha_k}$, using $T\ge2$ and [L6]. With $T^{-2}=\eta^2(\theta'-\theta)^{-2}$ this is $\dfrac{2\eta^2}{(\theta'-\theta)^2}\prod_{k<m}(\theta'r_k)^{\alpha_k}$. [step 3.1, L6, L14]

5.1 Summing against the coefficients, the hypothesis on $|c_\alpha|$ gives $\sum_\alpha|c_\alpha R_\alpha|\le\dfrac{2\eta^2M}{(\theta'-\theta)^2}\sum_\alpha\prod_{k<m}\theta'^{\alpha_k}=\dfrac{2\eta^2M}{(\theta'-\theta)^2(1-\theta')^m}$ by [L6] and [L14]; since $\eta\le\lVert h\rVert/\min_{k<m}r_k$, this is at most a constant times $\lVert h\rVert^2$. [step 1.3, step 4.1, L6, L14]

6.1 By steps 2.1, 5.1 and 2.2, and by [L1] and [L4] which allow the absolutely convergent series to be split term by term, $g(z^0+h)-g(z^0)-\sum_{k<m}b_k(z^0)h_k=\sum_\alpha c_\alpha R_\alpha$, whose modulus is $O(\lVert h\rVert^2)$ and therefore $o(\lVert h\rVert)$. The map $h\mapsto\sum_{k<m}b_k(z^0)h_k$ is $\mathbb C$-linear by [L3] and [L15], so [L2] makes $g$ complex differentiable at $z^0$ with that differential, and $\partial_{z_k}g(z^0)=b_k(z^0)$ by [L3]. As $\theta<1$ and $z^0$ were arbitrary, this is claim 2. [step 2.1, step 5.1, step 2.2, L1, L2, L3, L4, L15]

7.1 For claim 3 fix $k<m$ and $\theta$ with $0<\theta<1$, and re-index the derived series by $\beta=\alpha-e_k$, so its coefficient at $\beta$ is $(\beta_k+1)c_{\beta+e_k}$, of modulus at most $M(\beta_k+1)\theta^{|\beta|+1}\prod_{l<m}(\theta r_l)^{-\beta_l}r_k^{-1}$ by the hypothesis and [L14]. By [L7] the numbers $(\beta_k+1)\theta^{|\beta|+1}$ are bounded by a constant $M''$, so the derived coefficients satisfy a bound of the same shape with polyradius $\theta r$ and constant $M''M/r_k$. [step 6.1, L7, L14]

8.1 Iterating step 7.1 and step 6.1, an induction on $|\beta|$ ([L12]) shows that every $\partial^\beta_zg$ exists on $\Delta_r(a)$ and is the termwise $\beta$-fold derived series, whose coefficient at $\alpha\ge\beta$ is $\bigl(\prod_{k<m}\alpha_k(\alpha_k-1)\cdots(\alpha_k-\beta_k+1)\bigr)c_\alpha$ and which vanishes unless $\alpha\ge\beta$ componentwise. Evaluating at $z=a$, [L13] kills every monomial $(z-a)^{\alpha-\beta}$ except the one with $\alpha=\beta$, whose coefficient is $\beta!\,c_\beta$ by [L11]; so $\partial^\beta_zg(a)=\beta!\,c_\beta$. [step 6.1, step 7.1, L11, L12, L13, L14] ∎
