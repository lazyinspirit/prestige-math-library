---
id: thm-linear-elliptic-reduced-control-gradient-and-hessian
kind: theorem
title: Reduced gradient and coercive Hessian for linear elliptic tracking control
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-bounded-linear-operator
  - def-countable-choice
  - def-linear-elliptic-pde-constrained-control-problem
  - thm-linear-elliptic-control-state-and-adjoint-wellposedness
  - thm-riesz-representation-for-hilbert-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Eduardo Casas and Fredi Tröltzsch, Error estimates for linear-quadratic elliptic control problems
      url: "https://depositonce.tu-berlin.de/bitstreams/f510d18c-727d-4bc0-b10a-e30c36bd82af/download"
      locator: "§1.1, printed pp. 3–4: reduced gradient $S^*(Su-y_d)+\\lambda u$ and adjoint equation."
---

## Statement

Assume the setting of [[def-linear-elliptic-pde-constrained-control-problem]] and Countable Choice. Let $S:U\to H$ be the linear part of the state map, so $Ju(q)=Ju(0)+Sq$. Then $\widehat J$ is Fréchet differentiable on $U$, with
$$
\nabla\widehat J(q)=B^*p(q)+\alpha q,
$$
where $p(q)$ is the adjoint from [[thm-linear-elliptic-control-state-and-adjoint-wellposedness]] and $B^*:V\to U$ is defined by
$$
(B^*p,h)_U=\langle Bh,p\rangle_{V^*,V}.
$$
Its Hessian is the bounded self-adjoint operator $S^*S+\alpha I$, and for every $h\in U$,
$$
\alpha\|h\|_U^2\le ((S^*S+\alpha I)h,h)_U\le(\|S\|^2+\alpha)\|h\|_U^2.
$$
Consequently $\nabla\widehat J$ is Lipschitz with constant $L=\|S\|^2+\alpha$, and $\widehat J$ is $\alpha$-strongly convex.

## Facts & Assumptions
**Given:** The bounded coercive state equation, $B:U\to V^*$, $J:V\to H$, the data, Countable Choice, and the state and adjoint solutions.

[F1] The state and adjoint exist uniquely; $a(w,p)=(Ju(q)-u_d,Jw)_H$ when $w$ is the state variation ([[thm-linear-elliptic-control-state-and-adjoint-wellposedness]]).

[F2] Every bounded linear functional on a Hilbert space has a unique Riesz representative under Countable Choice ([[thm-riesz-representation-for-hilbert-space]], [[def-countable-choice]]).

[F3] A bounded linear map between Hilbert spaces has a unique bounded Hilbert adjoint, defined by the inner-product identity ([[def-bounded-linear-operator]], [[thm-riesz-representation-for-hilbert-space]]).

## Proof

1.1 For $h\in U$, let $w_h=u(q+h)-u(q)$. Subtracting the two state equations gives $a(w_h,v)=\langle Bh,v\rangle$ for all $v$, so $w_h$ depends linearly and boundedly on $h$ by the state estimate in [F1]. Thus $Sh=Jw_h$ is a bounded linear map from $U$ to $H$. The functional $h\mapsto\langle Bh,p(q)\rangle$ is bounded, so [F2] gives the unique $B^*p(q)\in U$ in the displayed definition. [F1, F2, given, algebra]

2.1 Expanding the two squared norms in $\widehat J(q+h)$ yields $\widehat J(q+h)-\widehat J(q) =(Ju(q)-u_d,Jw_h)_H+\alpha(q,h)_U+\frac12\|Sh\|_H^2+\frac\alpha2\|h\|_U^2.$ The adjoint equation with $v=w_h$ and the state variation equation with test $p(q)$ give $(Ju(q)-u_d,Jw_h)_H=a(w_h,p(q))=\langle Bh,p(q)\rangle=(B^*p(q),h)_U$. The last two terms are bounded by a constant times $\|h\|_U^2$, so the Fréchet derivative is $B^*p(q)+\alpha q$. [F1, F2, step 1.1, given, algebra]

3.1 Since the state map is affine with linear part $S$, the same exact expansion at any $q$ shows the second derivative is $D^2\widehat J[h,k]=(Sh,Sk)_H+\alpha(h,k)_U$, represented by $S^*S+\alpha I$. Hence $((S^*S+\alpha I)h,h)=\|Sh\|_H^2+\alpha\|h\|_U^2\ge\alpha\|h\|_U^2$ and $\|S^*S+\alpha I\|\le\|S\|^2+\alpha$. The constant Hessian gives the stated Lipschitz-gradient bound; the exact quadratic expansion gives strong convexity. [F3, step 2.1, given, algebra] ∎

## Remarks

This is a local proof of the elliptic adjoint derivative interface. Related parameter-dependent adjoint and gradient-error results are collected on the `discrete-continuous-and-pde-adjoint-sensitivities` page.
