---
id: thm-score-matching-integration-by-parts-identity
kind: theorem
title: The score-matching integration-by-parts identity
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-energy-based-density-and-partition-function, def-measure-with-density, def-probability-measure, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, def-countable-choice, def-nonnegative-lebesgue-integral, def-integrable-real-and-complex-functions-and-their-integrals, thm-dominated-convergence, def-c-one-map-and-local-inverse, def-weak-derivative-of-a-locally-integrable-function, lem-weak-derivatives-are-unique-almost-everywhere]
axiom_use: "AC_omega is used for the library Lebesgue-measure interface and for uniqueness of weak-derivative representatives as almost-everywhere classes. The cutoff and test-function integration-by-parts argument is choice-free once these interfaces are available; no full Axiom of Choice is used."
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

[A2] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; it is used only through [F3].

[F1] [[def-energy-based-density-and-partition-function]]: for $0<Z_\theta<\infty$, the model density is $e^{-E_\theta}/Z_\theta$, and $Z_\theta$ is independent of $x$.

[F2] [[def-measure-with-density]]: for a nonnegative measurable density $f$, $f\,d\mu$ is the measure $A\mapsto\int_A f\,d\mu$.

[F3] [[thm-lebesgue-measure-is-a-complete-measure]]: under Countable Choice, $\lambda_d$ is a complete measure on the Lebesgue sigma-algebra of $\mathbb R^d$.

[F4] [[thm-dominated-convergence]]: almost-everywhere convergence under one integrable majorant implies convergence of the corresponding integrals.

[F5] [[def-probability-measure]]: a measure of total mass one is a probability measure.

[F6] [[def-c-one-map-and-local-inverse]]: a map on an open Euclidean set is $C^1$ when it is differentiable everywhere and its derivative entries are continuous.

[F7] [[def-weak-derivative-of-a-locally-integrable-function]]: $g_{ij}$ is a weak derivative exactly when its signed test-function identity holds for every smooth compactly supported test function.

[F8] [[lem-weak-derivatives-are-unique-almost-everywhere]]: under Countable Choice, any two locally integrable representatives satisfying the same weak-derivative identity agree almost everywhere.

## Proof

1.1 The energy model has density $e^{-E_\theta}/Z_\theta$ by [F1]. By [F2], $P_p(A)=\int_Ap\,d\lambda_d$ is a measure; since $P_p(\mathbb R^d)=1$, [F5] makes it a probability measure. The $C^1$ score field is locally integrable by [F6], and [F8] makes the divergence independent of its weak-derivative representatives. Set $\rho(t)=0$ for $t\le0$ and $\rho(t)=e^{-1/t}$ for $t>0$, and define $\eta(r)=\rho(2-r)/(\rho(2-r)+\rho(r-1))$ for $r\ge0$. Then $\eta$ is smooth, equals $1$ on $[0,1]$, equals $0$ on $[2,\infty)$, and has values in $[0,1]$; $\chi(x)=\eta(\|x\|)$ is smooth because it is constant near the origin. The cutoff $\chi_R(x)=\chi(x/R)$ equals $1$ on $B_R$, vanishes off $B_{2R}$, and satisfies $\|\nabla\chi_R\|_\infty\le C/R$, where $C=\|\nabla\chi\|_\infty$. Apply [F7] to each diagonal pair $(\psi_{\theta,i},g_{ii})$ with test function $p\chi_R$ and sum over $i$; expanding $\nabla(p\chi_R)$ gives $\int\chi_R\psi_\theta\cdot\nabla p\,d\lambda_d+\int p\psi_\theta\cdot\nabla\chi_R\,d\lambda_d=-\int p\chi_R\operatorname{div}\psi_\theta\,d\lambda_d$. The identity extends from smooth tests to this $C^1$ compactly supported test: set $b(x)=e^{-1/(1-\|x\|^2)}$ for $\|x\|<1$ and $b(x)=0$ otherwise, and normalize $\rho_0=b/(\int b\,d\lambda_d)$; the denominator is positive and finite, so $\rho_0$ is a smooth compactly supported unit-mass mollifier. For $\varphi=p\chi_R$, put $\varphi_\varepsilon=\varphi*\rho_{0,\varepsilon}$. Uniform continuity of $\varphi$ and $\nabla\varphi$ gives $\|\varphi_\varepsilon-\varphi\|_\infty+\|\nabla\varphi_\varepsilon-\nabla\varphi\|_\infty\to0$, with all supports in one compact set for $\varepsilon\le1$. Local integrability of $\psi_\theta$ and $g_{ii}$ therefore lets both sides converge to the displayed identity; the product rule gives its terms. [given, A1, A2, F1, F2, F3, F5, F6, F7, F8, construct]

2.1 On $\{p>0\}$, $\nabla p=p s_p$; at a point with $p=0$, nonnegativity and differentiability make it a local minimum, so $\nabla p=0$ there too. Thus $\nabla p=p s_p$ everywhere. Componentwise $|\psi_\theta\cdot s_p|\le\sum_i|\psi_{\theta,i}s_{p,i}|$ and $2|ab|\le a^2+b^2$ imply $\int|\psi_\theta\cdot\nabla p|\,d\lambda_d\le\frac12\mathbb E_p(\|\psi_\theta\|^2+\|s_p\|^2)<\infty$ and $\int p|\operatorname{div}\psi_\theta|\,d\lambda_d<\infty$. Also $\|\psi_\theta\|\le(1+\|\psi_\theta\|^2)/2$, so the cutoff term from step 1.1 is bounded in absolute value by $\frac{C}{2R}(1+\mathbb E_p\|\psi_\theta\|^2)\to0$. [given, A1, step 1.1, algebra]

3.1 Let $R=n$ for integers $n\to\infty$. Then $\chi_n\to1$ pointwise and $|\chi_n|\le1$. The first integrand in step 1.1 is dominated by $|\psi_\theta\cdot\nabla p|$ and the third by $p|\operatorname{div}\psi_\theta|$, both integrable by step 2.1. Applying [F4] to both terms and using the vanishing cutoff term from step 2.1 gives $\int\psi_\theta\cdot\nabla p\,d\lambda_d=-\int p\operatorname{div}\psi_\theta\,d\lambda_d$. [F4, step 1.1, step 2.1]

4.1 Expanding the square gives $J(\theta)=\frac12\mathbb E_p\|\psi_\theta\|^2+\frac12\mathbb E_p\|s_p\|^2-\int p\psi_\theta\cdot s_p\,d\lambda_d$. Since $\nabla p=p s_p$ by step 2.1, step 3.1 turns the last term into $+\mathbb E_p[\operatorname{div}\psi_\theta]$; the remaining data-score term is $C_p$, independent of $\theta$. [given, A1, step 2.1, step 3.1, algebra] ∎

## Remarks

The cutoff and integration-by-parts argument is choice-free once the Lebesgue measure and weak-derivative classes are available. Countable Choice is used for those two interfaces; no full Axiom of Choice is used. The cutoff estimate supplies the multivariate limit directly and does not rely on pointwise vanishing of $p\psi_\theta$ at infinity.
