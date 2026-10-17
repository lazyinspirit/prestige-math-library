---
id: thm-linear-elliptic-control-existence-and-variational-inequality
kind: theorem
title: Existence, uniqueness, and variational inequality for elliptic PDE control
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-countable-choice
  - def-linear-elliptic-pde-constrained-control-problem
  - lem-pde-box-control-set-basic-properties
  - lem-pde-box-control-set-weakly-sequentially-closed
  - lem-pde-l2-control-space-separable
  - lem-separable-hilbert-bounded-sequence-weak-subsequence
  - thm-linear-elliptic-control-state-and-adjoint-wellposedness
  - thm-linear-elliptic-reduced-control-gradient-and-hessian
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Hannes Meinlschmidt, Optimization with Partial Differential Equations, FAU lecture notes
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
      locator: "§§2–3, printed pp. 5–25: weak existence and first-order optimality in function spaces."
---

## Statement

Assume Countable Choice and the setting of [[def-linear-elliptic-pde-constrained-control-problem]]. Then $\widehat J$ has a unique minimizer $q_*\in Q_{ad}$. It is characterized by
$$
(B^*p(q_*)+\alpha q_*,v-q_*)_U\ge0\qquad(v\in Q_{ad}),
$$
where $p(q_*)$ is the adjoint from [[thm-linear-elliptic-control-state-and-adjoint-wellposedness]]. Conversely, every $q\in Q_{ad}$ satisfying this variational inequality is the unique minimizer.

## Facts & Assumptions
**Given:** Countable Choice, the nonempty pointwise box $Q_{ad}\subset U$, the bounded coercive state problem, and the reduced objective $\widehat J$.

[F1] $Q_{ad}$ is nonempty, bounded, norm closed, and weakly sequentially closed ([[lem-pde-box-control-set-basic-properties]], [[lem-pde-box-control-set-weakly-sequentially-closed]]).

[F2] Every bounded sequence in the separable real Hilbert control space $U=L^2(E)$ has a weakly convergent subsequence ([[lem-separable-hilbert-bounded-sequence-weak-subsequence]], [[lem-pde-l2-control-space-separable]]).

[F3] The state map is affine with bounded linear part $S$, and $\widehat J(q+h)-\widehat J(q) =(B^*p(q)+\alpha q,h)_U+\frac12\|Sh\|_H^2+\frac\alpha2\|h\|_U^2$ ([[thm-linear-elliptic-reduced-control-gradient-and-hessian]]).

[F4] A Fréchet minimizer over a convex set has nonnegative directional derivative along every feasible segment; here that derivative is $(B^*p(q)+\alpha q,v-q)_U$ ([[thm-linear-elliptic-reduced-control-gradient-and-hessian]]).

[A1] Countable Choice permits the indexed selection of a minimizing sequence from the nonempty sets $\{q\in Q_{ad}:\widehat J(q)<m+1/(n+1)\}$ for $n\in\mathbb N$ ([[def-countable-choice]]).

## Proof

1.1 The box is nonempty by [F1], so $m:=\inf_{q\in Q_{ad}}\widehat J(q)$ is finite: $\widehat J\ge0$ and $\widehat J(q_a)<\infty$. For every $n\in\mathbb N$, the defining property of the infimum makes the set in [A1] nonempty. By Countable Choice choose $q_n\in Q_{ad}$ with $\widehat J(q_n)<m+1/(n+1)$. Since $\widehat J(q_n)\ge\alpha\|q_n\|_U^2/2$ and $1/(n+1)\le1$, the sequence is bounded. By [F2], applied to its positive-indexed tail, a subsequence converges weakly to some $q\in U$, and [F1] gives $q\in Q_{ad}$. [A1, F1, F2, given, construct]

1.2 If $q_*$ minimizes, fix $v\in Q_{ad}$. Convexity gives $q_*+t(v-q_*)\in Q_{ad}$ for $0\le t\le1$. Minimality makes the right directional quotient nonnegative for every $t>0$; letting $t\downarrow0$ and using [F4] proves the variational inequality. [F4, given, algebra]

2.1 Write $Ju(q_n)-u_d=J u(0)-u_d+S q_n$. Bounded linear maps preserve weak convergence, so along the subsequence this state residual converges weakly in $H$ to $Ju(q)-u_d$; the controls converge weakly in $U$. The Hilbert norm is weakly lower semicontinuous: if $z\ne0$, then $\|z_n\|\ge |(z_n,z/\|z\|)|\to\|z\|$, while the case $z=0$ is immediate. Applying this to both squared norms in $\widehat J$ gives $\widehat J(q)\le\liminf_n\widehat J(q_n)=m$. Thus $q$ attains the infimum. [F1, F3, step 1.1, algebra]

3.1 The exact expansion in [F3] shows strict convexity: for distinct $q,r\in U$ and $0<t<1$, $\widehat J(tq+(1-t)r)=t\widehat J(q)+(1-t)\widehat J(r)-\frac{t(1-t)}2\bigl(\|S(q-r)\|_H^2+\alpha\|q-r\|_U^2\bigr).$ The last subtracted term is positive, so two different minimizers in the convex box cannot exist. [F1, F3, step 2.1, algebra]

4.1 Conversely, if $q$ satisfies the variational inequality, then for every $v\in Q_{ad}$ the exact expansion [F3] gives $\widehat J(v)-\widehat J(q)=(B^*p(q)+\alpha q,v-q)_U+\frac12\|S(v-q)\|_H^2+\frac\alpha2\|v-q\|_U^2\ge0.$ Thus $q$ is a minimizer; step 3.1 gives uniqueness. [F3, step 3.1, step 1.2, given, algebra] ∎

## Remarks

The existence proof uses Countable Choice to select a minimizing sequence and the stated separable-Hilbert weak subsequence lemma. It uses no Axiom of Choice, Hahn–Banach separation, or reflexive-space compactness theorem.
