---
id: thm-score-matching-integration-by-parts-identity
kind: theorem
title: The score-matching integration-by-parts identity
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-energy-based-density-and-partition-function
  - def-measure-with-density
  - def-probability-measure
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - def-countable-choice
  - def-nonnegative-lebesgue-integral
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-dominated-convergence
  - def-c-one-map-and-local-inverse
  - def-weak-derivative-of-a-locally-integrable-function
  - lem-weak-derivatives-are-unique-almost-everywhere
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-borel-sets-are-lebesgue-measurable
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - thm-chain-sum-product-and-composition-rules-for-banach-derivatives
  - thm-logarithm-derivative-and-integral
  - def-jacobian-matrix-and-gradient
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-mollifier-family-generated-by-a-unit-mass-smooth-bump
  - thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign
  - thm-differentiation-under-the-integral-sign
  - thm-fermat-for-euclidean-local-extrema
  - thm-total-differentiability-gives-a-local-linear-bound-and-continuity
axiom_use: "AC_omega is used through the Lebesgue-measure, change-of-variables, mollification, and weak-derivative representative interfaces. The smooth cutoff, bump normalization, and test-function approximation are choice-free once those interfaces are available; no full Axiom of Choice is used."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Aapo Hyvärinen, Estimation of Non-Normalized Statistical Models by Score Matching, Theorem 1 and Appendix A"
      url: "https://jmlr.csail.mit.edu/papers/volume6/hyvarinen05a/hyvarinen05a.pdf"
    - title: "Kevin P. Murphy, Probabilistic Machine Learning: Advanced Topics, Chapter 24, Sections 24.1–24.3.4"
      url: "https://github.com/probml/pml2-book/releases/download/2025-dec-10/book2.pdf"
---

## Statement

Assume the Axiom of Countable Choice used by the library's Lebesgue-measure and
weak-derivative representative interfaces. Let $d\ge1$, let $\lambda_d$ be Lebesgue measure on $\mathbb R^d$,
and let $p:\mathbb R^d\to[0,\infty)$ be a continuously differentiable
probability density, so $\int p\,d\lambda_d=1$. Write
$$P_p(A):=\int_A p\,d\lambda_d,\qquad A\in\mathcal L(\mathbb R^d),$$
which is a probability measure, and let $\mathbb E_p[f]:=\int f\,dP_p$ for integrable $f$.
Define the data score by $s_p(x):=\nabla\log p(x)$ when $p(x)>0$ and set
$s_p(x):=0$ when $p(x)=0$. For an energy model relative to $\lambda_d$ with
$0<Z_\theta=\int e^{-E_\theta}\,d\lambda_d<\infty$, assume
$E_\theta\in C^1(\mathbb R^d)$ and define its model score field by
$\psi_\theta:=-\nabla E_\theta$. Assume each component of $\psi_\theta$ is
locally integrable and has locally integrable weak first derivatives: for
each $i,j$, a locally integrable representative $g_{ij}$ satisfies
$$\int_{\mathbb R^d}\psi_{\theta,i}\,\partial_j\varphi\,d\lambda_d=-\int_{\mathbb R^d}g_{ij}\varphi\,d\lambda_d\qquad(\varphi\in C_c^\infty(\mathbb R^d)).$$
Here $C_c^\infty(\mathbb R^d)$ denotes the smooth compactly supported test
functions.
The weak derivatives are unique up to Lebesgue-null sets, and define
$\operatorname{div}\psi_\theta:=\sum_{i=1}^d g_{ii}$; the integrals below do
not depend on the chosen representatives. The $C^1$ convention is that the
first derivative exists everywhere and is continuous.
For each admissible $\theta$, assume
$$\mathbb E_p\|s_p\|^2<\infty,\qquad \mathbb E_p\|\psi_\theta\|^2<\infty,\qquad \mathbb E_p|\operatorname{div}\psi_\theta|<\infty.$$
Then the score-matching objective
$$J(\theta):=\frac12\mathbb E_p\|\psi_\theta-s_p\|^2$$
satisfies
$$J(\theta)=\mathbb E_p\left[\frac12\|\psi_\theta\|^2+\operatorname{div}\psi_\theta\right]+C_p,\qquad C_p:=\frac12\mathbb E_p\|s_p\|^2,$$
where $C_p$ is independent of $\theta$. No pointwise boundary limit at infinity
is assumed.

## Statement references

[Aapo Hyvärinen, Theorem 1 and Appendix A of the full JMLR paper](https://jmlr.csail.mit.edu/papers/volume6/hyvarinen05a/hyvarinen05a.pdf) states the score-matching identity under a pointwise boundary condition.

[Kevin P. Murphy, Chapter 24, Sections 24.1–24.3.4](https://github.com/probml/pml2-book/releases/download/2025-dec-10/book2.pdf) defines energy models, the model score and score matching.

## Facts & Assumptions

**Given:** The hypotheses in the Statement, including Countable Choice for the library Lebesgue measure interface and the three stated finite $p$-integrability conditions.

[A1] $p$ is a nonnegative $C^1$ probability density; for each admissible parameter, $E_\theta\in C^1$, its score field is locally integrable with locally integrable weak first derivatives, and the score and divergence have the stated finite $p$-moments.

[A2] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; it is used through [F3], [F8], [F10], [F17], and [F19].

[F1] [[def-energy-based-density-and-partition-function]]: for $0<Z_\theta<\infty$, the model density is $e^{-E_\theta}/Z_\theta$, and $Z_\theta$ is independent of $x$.

[F2] [[def-measure-with-density]]: for a nonnegative measurable density $f$, $f\,d\mu$ is the measure $A\mapsto\int_A f\,d\mu$.

[F3] [[thm-lebesgue-measure-is-a-complete-measure]]: under Countable Choice, $\lambda_d$ is a complete measure on the Lebesgue sigma-algebra of $\mathbb R^d$.

[F4] [[thm-dominated-convergence]]: almost-everywhere convergence under one integrable majorant implies convergence of the corresponding integrals.

[F5] [[def-probability-measure]]: a measure of total mass one is a probability measure.

[F6] [[def-c-one-map-and-local-inverse]]: a map on an open Euclidean set is $C^1$ when it is differentiable everywhere and its derivative entries are continuous.

[F7] [[def-weak-derivative-of-a-locally-integrable-function]]: $g_{ij}$ is a weak derivative exactly when its signed test-function identity holds for every smooth compactly supported test function.

[F8] [[lem-weak-derivatives-are-unique-almost-everywhere]]: under Countable Choice, any two locally integrable representatives satisfying the same weak-derivative identity agree almost everywhere.

[F9] [[thm-continuous-preimages-of-borel-sets-are-borel]]: a continuous map has Borel preimages of Borel sets.

[F10] [[thm-borel-sets-are-lebesgue-measurable]]: under Countable Choice, Borel subsets of $\mathbb R^d$ are Lebesgue measurable.

[F11] [[lem-smooth-bump-between-concentric-euclidean-balls]]: for $0<r<R$, a smooth function $\chi:\mathbb R^d\to[0,1]$ can equal $1$ on $\overline B_r(0)$ and have support contained in $B_R(0)$.

[F12] [[thm-heine-borel-rn]]: closed bounded subsets of $\mathbb R^d$ are compact.

[F13] [[thm-extreme-value-metric]]: continuous real functions on nonempty compact metric spaces are bounded.

[F14] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: total derivatives obey the bounded-bilinear product rule.

[F15] [[thm-logarithm-derivative-and-integral]]: for $u>0$, $\log'(u)=1/u$.

[F16] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the nonnegative integral is monotone and positively homogeneous.

[F17] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: a $C^1$ diffeomorphism transforms nonnegative Lebesgue integrals by its absolute Jacobian determinant.

[F18] [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]: a unit-mass smooth compactly supported function generates the scaled family $\rho_\epsilon(x)=\epsilon^{-d}\rho_0(x/\epsilon)$.

[F19] [[thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign]]: convolution of a locally integrable function with a smooth compactly supported mollifier is smooth.

[F20] [[thm-differentiation-under-the-integral-sign]]: an integrable parameter-independent majorant permits differentiation under the integral sign.

[F21] [[thm-fermat-for-euclidean-local-extrema]]: a differentiable function at an interior local extremum has zero gradient.

[F22] [[def-jacobian-matrix-and-gradient]]: the gradient coordinates of a scalar-valued function are its coordinate partial derivatives.

[F23] [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]: total differentiability implies continuity.

[F24] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: total derivatives obey the chain rule.

## Proof

1.1 By [F1], the admissible model has density $e^{-E_\theta}/Z_\theta$, with $Z_\theta$ independent of $x$. Since $p$ is $C^1$, [F6, F23] make it continuous; [F9, F10] then make it Lebesgue measurable, so [F2] makes $P_p$ a measure, and [F5] makes it a probability measure. The local increment bound [F23] gives, at each $x\in U=\{p>0\}$, constants $C_x,\delta_x>0$ with $|p(y)-p(x)|\le C_x\|y-x\|$ for $\|y-x\|<\delta_x$; taking $\|y-x\|<\min\{\delta_x,p(x)/(2(C_x+1))\}$ shows $p(y)>0$, so $U$ is open. On $U$, [F6, F15, F24] make $s_p=\nabla\log p$ continuous. For each open $O\subseteq\mathbb R^d$, its score preimage is the union of the relative-open preimage in $U$ and $U^c$ when $0\in O$; hence the zero extension is Borel and Lebesgue measurable by [F10]. By [F8], weak-derivative representatives agree off a Lebesgue-null set; [F2] makes every such set $P_p$-null, so the divergence integral is representative-independent. Choose $\chi$ from [F11] with $r=1$ and $R=2$. By [F9, F10], this continuous bump is Lebesgue measurable. Its gradient vanishes outside $B_2$; [F12, F13] make $C:=\|\nabla\chi\|_\infty$ finite. The box $[-1/(2d),1/(2d))^d$ lies in $B_1$, since its points have norm at most $\sqrt d/(2d)\le1/2$, while $\operatorname{supp}\chi\subset B_2\subset[-3,3)^d$ and $0\le\chi\le1$. Thus [F3, F16] give $d^{-d}\le M:=\int\chi\,d\lambda_d\le6^d$. Set $\rho_0=\chi/M$; positive homogeneity [F16] gives it unit mass. Let $\rho_{0,\varepsilon}$ be its scaled family from [F18]; [F18] gives support in $\overline B_{2\varepsilon}$ and [F17] gives unit mass. For $R>0$, define $\chi_R(x)=\chi(x/R)$. Then $\chi_R=1$ on $\overline B_R$, vanishes outside $B_{2R}$, and [F24] gives $\|\nabla\chi_R\|_\infty\le C/R$. [given, A1, A2, F1, F2, F3, F5, F6, F8, F9, F10, F11, F12, F13, F15, F16, F17, F18, F23, F24]

2.1 Fix $R$ and put $\varphi=p\chi_R$. The product rule [F14] makes $\varphi$ a nonnegative $C^1$ function supported in $\overline B_{2R}$. By [F12, F13], $\varphi$ and its first derivatives are bounded there; the ball lies in a finite-volume box by [F3], so $\varphi$ is locally integrable. The convolution $\varphi_\varepsilon=\varphi*\rho_{0,\varepsilon}$ is smooth by [F19] and supported in $\overline B_{2R+2}$ for $\varepsilon\le1$, since $\operatorname{supp}\varphi\subseteq\overline B_{2R}$ and $\operatorname{supp}\rho_{0,\varepsilon}\subseteq\overline B_2$. By [F17], applied to the nonnegative convolution integrand, $\varphi_\varepsilon(x)=\int\varphi(x-z)\rho_{0,\varepsilon}(z)\,dz$. For each coordinate $j$, [F24] gives the parameter derivative of $f(z,t)=\varphi(x+te_j-z)\rho_{0,\varepsilon}(z)$. Its sections are integrable because $\varphi$ is bounded and the kernel has mass one; its derivative is measurable and bounded by $\|\partial_j\varphi\|_\infty\rho_{0,\varepsilon}(z)$, an integrable majorant. Thus [F20] gives $\partial_j\varphi_\varepsilon(x)=\int\partial_j\varphi(x-z)\rho_{0,\varepsilon}(z)\,dz$. The unit mass and shrinking support give, for each $x$, $|\varphi_\varepsilon(x)-\varphi(x)|\le\sup_{\|z\|\le2\varepsilon}|\varphi(x-z)-\varphi(x)|\to0$, with the same estimate for each first derivative. Since $\varphi$ and $\nabla\varphi$ are bounded by [F12, F13], the weak-identity integrands are dominated on this common compact support by constants times $|\psi_{\theta,i}|$ and $|g_{ii}|$. Local integrability and [F4] pass the identities from $\varphi_\varepsilon$ to $\varphi$. Summing over $i$ and expanding $\nabla(p\chi_R)$ with [F14] yields $\int\chi_R\psi_\theta\cdot\nabla p\,d\lambda_d+\int p\psi_\theta\cdot\nabla\chi_R\,d\lambda_d=-\int p\chi_R\operatorname{div}\psi_\theta\,d\lambda_d$. [A1, F3, F4, F7, F12, F13, F14, F17, F19, F20, F24, step 1.1]

2.2 On $\{p>0\}$, [F15, F24] give $\nabla p=p s_p$. At any point where $p=0$, nonnegativity makes it an interior local minimum, so [F21, F22] give $\nabla p=0$ there too. Thus $\nabla p=p s_p$ everywhere. Componentwise $|\psi_\theta\cdot s_p|\le\sum_i|\psi_{\theta,i}s_{p,i}|$ and $2|ab|\le a^2+b^2$ imply $\int|\psi_\theta\cdot\nabla p|\,d\lambda_d\le\frac12\mathbb E_p(\|\psi_\theta\|^2+\|s_p\|^2)<\infty$ and $\int p|\operatorname{div}\psi_\theta|\,d\lambda_d<\infty$. Also $\|\psi_\theta\|\le(1+\|\psi_\theta\|^2)/2$, so the cutoff term from step 1.1 is bounded in absolute value by $\frac{C}{2R}(1+\mathbb E_p\|\psi_\theta\|^2)\to0$. [given, A1, F15, F21, F22, F24, step 1.1, algebra]

3.1 Let $R=n$ for integers $n\to\infty$. Then $\chi_n\to1$ pointwise and $|\chi_n|\le1$. The first integrand in step 2.1 is dominated by $|\psi_\theta\cdot\nabla p|$ and the third by $p|\operatorname{div}\psi_\theta|$, both integrable by step 2.2. Applying [F4] to both terms and using the vanishing cutoff term from step 2.2 gives $\int\psi_\theta\cdot\nabla p\,d\lambda_d=-\int p\operatorname{div}\psi_\theta\,d\lambda_d$. [F4, step 2.1, step 2.2]

4.1 Expanding the square gives $J(\theta)=\frac12\mathbb E_p\|\psi_\theta\|^2+\frac12\mathbb E_p\|s_p\|^2-\int p\psi_\theta\cdot s_p\,d\lambda_d$. Since $\nabla p=p s_p$ by step 2.2, step 3.1 turns the last term into $+\mathbb E_p[\operatorname{div}\psi_\theta]$; the remaining data-score term is $C_p$, independent of $\theta$. [given, A1, step 2.2, step 3.1, algebra] ∎

## Remarks

The cutoff and integration-by-parts argument is choice-free once the Lebesgue measure and weak-derivative classes are available. Countable Choice is used for those two interfaces; no full Axiom of Choice is used. The cutoff estimate supplies the multivariate limit directly and does not rely on pointwise vanishing of $p\psi_\theta$ at infinity.
