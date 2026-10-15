---
id: lem-rqmc-scrambled-net-variance-identity
kind: lemma
title: "ANOVA variance identity for nestedly scrambled point sets"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-nested-uniform-scramble
  - def-b-adic-anova-components
  - lem-b-adic-anova-parseval
  - lem-nested-scramble-marginals-and-net-preservation
  - def-countable-choice
  - def-moments-variance-and-covariance
  - thm-change-of-variables-for-expectation
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-factorization-of-expectations-for-independent-variables
justified_by: []
proof_strategy: direct
axiom_use: "Assume Countable Choice only through the L2 Parseval decomposition; the finite conditional-covariance calculation is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Variance of Scrambled Net Quadrature, §§6–7"
      url: "https://citeseerx.ist.psu.edu/document?doi=f6282581a7ecdce7e38020a74b3022ccf1cfe14e&repid=rep1&type=pdf"
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.5"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
---

## Statement

Assume Countable Choice. Let $a_1,\ldots,a_n\in[0,1)^d$ be fixed and let
$X_1,\ldots,X_n$ be their nested uniform scramble in base $b$. For
$u\ne\varnothing$ and $\kappa=(k_q)_{q\in u}$, define
$$\Upsilon_{ij,q,k}=\frac{ b\mathbf1\{\lfloor b^{k+1}a_{i,q}\rfloor=\lfloor b^{k+1}a_{j,q}\rfloor\} -\mathbf1\{\lfloor b^ka_{i,q}\rfloor=\lfloor b^ka_{j,q}\rfloor\}}{b-1},\qquad M_{u,\kappa}=\sum_{i=1}^n\sum_{j=1}^n\prod_{q\in u}\Upsilon_{ij,q,k_q}, \qquad \Gamma_{u,\kappa}=\frac{M_{u,\kappa}}n.$$
For real Borel $f\in L^2([0,1)^d)$, write
$\widehat I_n=n^{-1}\sum_i f(X_i)$. Then
$$\operatorname{Var}(\widehat I_n) =\frac1{n^2}\sum_{u\ne\varnothing,\kappa} M_{u,\kappa}\sigma^2_{u,\kappa}(f) =\frac1n\sum_{u\ne\varnothing,\kappa} \Gamma_{u,\kappa}\sigma^2_{u,\kappa}(f),$$
with the ANOVA components of [[def-b-adic-anova-components]].

## Facts & Assumptions
**Given:** Countable Choice, the fixed input points, their nested uniform scramble, and real $f\in L^2([0,1)^d)$.

[F1] [[def-nested-uniform-scramble]]: At each input-prefix node, all points use the same uniform permutation, and distinct nodes and coordinates use independent permutations.

[F2] [[def-b-adic-anova-components]]: The normalized contrasts are supported on one parent, are constant on its children, and have zero mean on the parent.

[F3] [[lem-b-adic-anova-parseval]]: The contrast products form a complete orthonormal decomposition and $\sum_{u,\kappa}\sigma^2_{u,\kappa}(f)=\operatorname{Var}(f(U))$.

[F4] [[lem-nested-scramble-marginals-and-net-preservation]]: Every scrambled point has uniform law on the cube.

[F5] [[def-moments-variance-and-covariance]]: Variance is the centered second moment of a square-integrable real variable.

[F6] [[thm-change-of-variables-for-expectation]]: Expectations of integrable Borel functions of a random element are integrals against its law; the nonnegative case also holds for extended integrals.

[F7] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: Expectation is linear on integrable real random variables.

[F8] [[thm-factorization-of-expectations-for-independent-variables]]: Integrable functions of independent random variables have factored product expectation.

[A1] [[def-countable-choice]]: Countable Choice is the axiom used by [F3].



## Proof

**Proof technique:** direct.

**Given:** The facts above and the estimator $\widehat I_n$ in the Statement.

1.1 For a contrast label $r$, its normalized child vector is $v_r=(1,\ldots,1,-r,0,\ldots,0)/\sqrt{r(r+1)}$. These vectors have coordinate sum zero and $v_r\cdot v_s=\mathbf1\{r=s\}$: if $r<s$, the $r+1$ nonzero entries of $v_r$ meet entries equal to $1$ in $v_s$ and sum to $r-r=0$; if $r=s$, the squared norm is $(r+r^2)/(r(r+1))=1$. In a fixed coordinate $q$, consider $h_{k,t,r}(X_{i,q})h_{\ell,t',s}(X_{j,q})$. If $k<\ell$, condition on all permutations used by these two factors except the one at the length-$\ell$ input prefix of $a_{j,q}$. The coarse factor and both output parent locations are then fixed, while the finer output child is uniform, so the conditional product expectation is zero. The case $\ell<k$ is symmetric. At equal levels with distinct input parents, condition on the preceding prefix permutations; the two independent next-node permutations give mean-zero child factors, hence zero expected product. With a common input parent, both points have the same output parent, so distinct output translation indices $t\ne t'$ give zero product. For a common parent at level $k$, its output parent is uniform among the $b^k$ parents. If the two points use the same next child, the expectation of the product is $b^{-k}(b^{k+1}/b)(v_r\cdot v_s)=\mathbf1\{r=s\}$. If they use distinct next children, their ordered output children are uniform among the $b(b-1)$ distinct pairs; since $\sum_c v_r(c)=\sum_c v_s(c)=0$, $\frac{b^{k+1}}{b^k b(b-1)}\sum_{c\ne c'}v_r(c)v_s(c')=-\frac{\mathbf1\{r=s\}}{b-1}.$ Thus, for a common parent at equal levels, the coordinate covariance is $\mathbf1\{r=s\}\Upsilon_{ij,q,k}$; the zero cases above cover all other level or parent pairs. [A1, F1, F2, F3]

2.1 Scrambling is independent across coordinates. Therefore products from distinct coordinate subsets have zero cross expectation, since a coordinate appearing in only one product contributes a mean-zero contrast independent of the other coordinates; [F8] factors that expectation across coordinates. For a common subset and scale, step 1.1 leaves only identical parent and contrast indices; multiplying the coordinate expectations gives $\prod_{q\in u}\Upsilon_{ij,q,k_q}$. Summing squared coefficients over the parent and contrast indices gives $\sigma^2_{u,\kappa}(f)$ by [F3]. [A1, F1, F2, F3, F8, step 1.1]

3.1 For any finite ANOVA sum $g$ with constant coefficient $I(f)$, each nonconstant basis product has mean zero under each $X_i$ by [F2], [F4], and [F6]. Expanding its centered variance and using [F7] and step 2.1 yields the corresponding finite sum $n^{-2}\sum_{u,\kappa}M_{u,\kappa}\sigma^2_{u,\kappa}$. By [F3], choose increasing finite basis sums $g_m\to f$ in $L^2$. For real $y_1,\ldots,y_n$, $0\le\sum_{i<j}(y_i-y_j)^2=n\sum_i y_i^2-\left(\sum_i y_i\right)^2,$ so pointwise $|n^{-1}\sum_i y_i|^2\le n^{-1}\sum_i y_i^2$. Apply this to $y_i=g_m(X_i)-f(X_i)$ and integrate; [F4] and [F6] give $\mathbb E|\widehat I_n(g_m)-\widehat I_n(f)|^2\le\frac1n\sum_i\mathbb E|g_m(X_i)-f(X_i)|^2=\|g_m-f\|_2^2\longrightarrow0.$ Thus the estimators converge in $L^2$. By [F4] and [F6], the limit has mean $I(f)$ and finite second moment, and each finite estimator has the same mean because all its nonconstant terms are centered, using [F7]. The centered estimators therefore converge in $L^2$, so their variances converge by [F5]. Finally, $|\Gamma_{u,\kappa}|\le n$ because every $|\Upsilon_{ij,q,k}|\le1$; [F3] makes $\sum_{u,\kappa}\sigma^2_{u,\kappa}$ finite, so the series converges absolutely and the finite-sum identity passes to the limit. [A1, F2, F3, F4, F5, F6, F7, step 2.1, algebra]

4.1 Substituting $\Gamma_{u,\kappa}=M_{u,\kappa}/n$ into the identity of step 3.1 gives both displayed forms. [step 3.1, algebra] ∎
