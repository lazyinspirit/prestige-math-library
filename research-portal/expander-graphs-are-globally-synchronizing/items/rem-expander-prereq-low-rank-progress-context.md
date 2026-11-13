---
id: rem-expander-prereq-low-rank-progress-context
kind: remark
title: Scoped independent low-rank landscape reports
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-prereq-vector-spin-landscapes
  - def-expander-prereq-sphere-vector-configurations
  - math:def-hessian-of-a-function-at-a-critical-point
dependency_roles:
  def-expander-prereq-vector-spin-landscapes: mathematical-premise
  def-expander-prereq-sphere-vector-configurations: mathematical-premise
  math:def-hessian-of-a-function-at-a-critical-point: mathematical-premise
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: Nonconvex landscapes for Z2 synchronization and graph clustering are
        benign near exact recovery thresholds
      url: https://arxiv.org/abs/2407.13407v1
      locator: Abstract
      statement: For three specified random models, the authors report asymptotic
        benign-landscape guarantees arbitrarily close to the previously
        established exact-recovery threshold with sufficiently large finite
        rank; they also report deterministic conditions and robustness to
        monotone adversaries.
      hypotheses: The abstract concerns the stated Z2 synchronization and
        graph-clustering models, their noise and graph assumptions, and a
        sufficiently large finite rank parameter; exact inequalities are not
        reproduced here.
      reading_limits: The abstract was read. The theorem statements, constants, proofs
        and adversarial assumptions were not checked.
    - title: Benign landscape for Burer-Monteiro factorizations of MaxCut-type
        semidefinite programs
      url: https://arxiv.org/abs/2411.03103v2
      locator: Abstract
      statement: For MaxCut-type semidefinite programs admitting a low-rank solution,
        the authors report a sharp condition on the associated Laplacian's
        conditioning under which every second-order critical point of the
        factorized problem is globally minimizing.
      hypotheses: The source's low-rank MaxCut-type semidefinite program and its
        Laplacian conditioning condition; the precise inequality is not
        reproduced here.
      reading_limits: The version 2 abstract was read. The precise theorem hypotheses
        and proof were not checked.
    - title: Benign landscapes for synchronization on spheres via normalized Laplacian
        matrices
      url: https://arxiv.org/abs/2503.18801v2
      locator: Abstract
      statement: McRae reports exact recovery at every second-order critical point for
        each rank r at least two in information-theoretically feasible
        asymptotic regimes of several specified models, as well as optimal
        asymptotic results for random signed Erdős–Rényi oscillator networks;
        the reported deterministic condition extends Rakoto Endor and
        Waldspurger's condition using diagonal preconditioning.
      hypotheses: The specified spherical least-squares models and asymptotic regimes,
        respectively the specified random signed oscillator networks; the exact
        model parameters and deterministic inequality are not reproduced here.
      reading_limits: The version 2 abstract was read. Individual theorem hypotheses,
        constants, proofs and any identification with the article's Theorem 1.2
        were not checked.
formulation_deps:
  - def-expander-prereq-vector-spin-landscapes
  - def-expander-prereq-sphere-vector-configurations
  - math:def-hessian-of-a-function-at-a-critical-point
argument_deps: []
dependency_level: 1
---

## Statement

For integers $n\ge1$ and $r\ge2$, a sphere configuration consists of $n$ unit vectors in $\mathbb R^r$; their Gram matrix has entries given by their pairwise inner products. A Burer–Monteiro factorization represents a positive semidefinite matrix with unit diagonal and rank at most $r$ by such a Gram matrix $YY^T$, with $Y$ having $r$ columns. Here a landscape means the behavior of an objective on its feasible configurations, including its local extrema and critical points. On the feasible smooth manifold $M_{n,r}$ of unit-row matrices, let $f:M_{n,r}\to\mathbb R$ be a smooth objective. A second-order critical point is a feasible $Y$ with $df_Y=0$ and $\operatorname{Hess}_Y(f)(V,V)\ge0$ for every $V\in T_YM_{n,r}$. Here $\operatorname{Hess}_Y(f)$ is the intrinsic Hessian at a critical point, defined by the second derivatives in any smooth chart; the second variation in direction $V$ means its quadratic value $\operatorname{Hess}_Y(f)(V,V)$. A global minimizer has objective value no larger than every feasible point.

McRae, Abdalla, Bandeira and Boumal report near-threshold asymptotic guarantees for three specified binary synchronization and clustering models with sufficiently large finite rank. Rakoto Endor and Waldspurger report a Laplacian-conditioning criterion for global optimality of every second-order critical point in their low-rank semidefinite-program setting. McRae subsequently reports results for every $r\ge2$ in several specified asymptotic recovery models and an extension of the conditioning criterion using diagonal preconditioning, together with results for random signed oscillator networks.

## Statement references

[[def-expander-prereq-sphere-vector-configurations]]

[[def-expander-prereq-vector-spin-landscapes]]

[[math:def-hessian-of-a-function-at-a-critical-point]]

## External input

The three reports above are imported only at the level of their authors' abstracts. Their exact inequalities, model parameters and proofs are not supplied here, and these reports alone are not an unqualified circle-rank exact-recovery theorem or a theorem applicable to arbitrary graphs. An application requires the relevant full theorem and verification of its hypotheses.
