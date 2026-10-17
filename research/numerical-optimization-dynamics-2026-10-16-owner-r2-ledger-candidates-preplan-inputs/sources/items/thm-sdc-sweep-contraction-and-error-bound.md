---
id: thm-sdc-sweep-contraction-and-error-bound
kind: theorem
title: Contraction and residual error bound for the SDC sweep
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - def-collocation-quadrature-tableau
  - alg-explicit-left-euler-sdc-sweep
  - lem-sdc-fixed-point-is-collocation-stage
  - thm-banach-fixed-point
  - thm-euclidean-space-complete
  - def-metric-space
  - def-complete-metric-space
  - def-cauchy-in-metric
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019), §3
      url: https://arxiv.org/pdf/1706.06245
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
---

## Statement

Let $\mathcal C$ be a nonempty closed product ball of stage vectors in $(\mathbb R^d)^M$, with metric $\|U-V\|_{\infty,2}=\max_i\|U_i-V_i\|_2$. Assume the forward sweep map in [[alg-explicit-left-euler-sdc-sweep]] maps every required stage vector into $\mathcal C$, and the stage field $F(U)=(f(t+c_i h,U_i))_{i=1}^M$ is $L$-Lipschitz there. Put
$$a=hL\|Q_\Delta\|_\infty,\qquad q=\frac{hL\|Q-Q_\Delta\|_\infty}{1-a}.$$
If $a<1$ and $q<1$, then every sweep is uniquely defined in $\mathcal C$, the sweep map $S:U^k\mapsto U^{k+1}$ is a contraction with constant $q$, and its unique fixed point $U^*$ is the unique collocation stage vector in $\mathcal C$. For every $V\in\mathcal C$,
$$\|V-U^*\|_{\infty,2}\le\frac{\|S(V)-V\|_{\infty,2}}{1-q}.$$
For iterates $U^{k+1}=S(U^k)$, $\|U^k-U^*\|_{\infty,2}\le q^k\|U^0-U^*\|_{\infty,2}$. These are local stage-iteration claims; they assert no convergence when either contraction inequality fails.

## Facts & Assumptions

**Given:** The SDC sweep, its lower-triangular stage preconditioner $Q_\Delta$, a nonempty closed product ball $\mathcal C$, and the invariant-set and Lipschitz hypotheses in the Statement.

[F1] [[thm-euclidean-space-complete]]: every Cauchy sequence in a finite-dimensional Euclidean space converges in that space.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]] and [[def-euclidean-inner-product]]: the Euclidean norm has the triangle inequality.

[F3] [[thm-banach-fixed-point]]: a contraction of a nonempty complete metric space into itself has a unique fixed point and its iterates converge to that point.

[F4] [[lem-sdc-fixed-point-is-collocation-stage]]: a fixed point of the SDC sweep is exactly a solution of the collocation stage equations.

[F5] [[def-collocation-quadrature-tableau]]: $\|Q\|_\infty=\max_i\sum_j|Q_{ij}|$, and the row-sum norm satisfies $\|AV\|_{\infty,2}\le\|A\|_\infty\|V\|_{\infty,2}$ for block vectors.

[F6] [[def-metric-space]]: a metric is symmetric, separates distinct points, and satisfies the triangle inequality.

[F7] [[def-cauchy-in-metric]]: a sequence is Cauchy when its pairwise distances tend to zero uniformly beyond a sufficiently large index.

[F8] [[def-complete-metric-space]]: a metric space is complete when every Cauchy sequence converges to a point in it.

[A1] $\mathcal C$ is invariant under the inner stage update and the outer sweep; $F$ is $L$-Lipschitz in $\|\cdot\|_{\infty,2}$ on $\mathcal C$; and $a<1$, $q<1$.

## Proof

1.1 The block distance $d(U,V)=\max_i\|U_i-V_i\|_2$ has the metric properties [F6]: symmetry and separation hold coordinatewise, and [F2] gives $d(U,W)\le d(U,V)+d(V,W)$. If $(U^n)$ is $d$-Cauchy in the sense of [F7], then each of its finitely many Euclidean coordinates is Cauchy; [F1] gives coordinate limits. Since $\mathcal C$ is a closed product ball, the coordinatewise limit belongs to $\mathcal C$, so [F8] makes $(\mathcal C,d)$ complete. [given, A1, F1, F2, F6, F7, F8, construct]

2.1 For a fixed previous iterate $V\in\mathcal C$, the new-stage equation is $Z=\mathbf1u+hQ_\Delta F(Z)+h(Q-Q_\Delta)F(V)$. Its right-hand side maps $\mathcal C$ into itself by [A1]; the norm inequality in [F5] and the Lipschitz bound in [A1] show that its difference at $Z,W\in\mathcal C$ is at most $a\|Z-W\|_{\infty,2}$. Since $a<1$, [F3] gives a unique $Z=S(V)$ in $\mathcal C$. [A1, F3, F5, step 1.1, algebra]

3.1 Let $V,W\in\mathcal C$, and write $Z=S(V)$, $Z'=S(W)$. Subtracting their stage equations cancels the fixed initial derivative and yields $\|Z-Z'\|_{\infty,2}\le hL\|Q_\Delta\|_\infty\|Z-Z'\|_{\infty,2}+hL\|Q-Q_\Delta\|_\infty\|V-W\|_{\infty,2}.$ Rearranging by $1-a>0$ gives $\|S(V)-S(W)\|_{\infty,2}\le q\|V-W\|_{\infty,2}$, so $S$ is a contraction of $\mathcal C$. [A1, F5, step 2.1, algebra]

4.1 By [F3] and step 1.1, $S$ has a unique fixed point $U^*\in\mathcal C$. Fact [F4] identifies it with the unique collocation stage vector in this ball. Repeated application of the contraction inequality in step 3.1 gives $\|U^k-U^*\|_{\infty,2}\le q^k\|U^0-U^*\|_{\infty,2}$. [F3, F4, step 1.1, step 3.1, induction]

5.1 For any $V\in\mathcal C$, $S(U^*)=U^*$ and the triangle inequality give $\|V-U^*\|_{\infty,2}\le\|V-S(V)\|_{\infty,2}+\|S(V)-S(U^*)\|_{\infty,2}\le\|V-S(V)\|_{\infty,2}+q\|V-U^*\|_{\infty,2}$. Since $1-q>0$, rearranging proves the residual estimate. [A1, step 3.1, step 4.1, F2, algebra] ∎