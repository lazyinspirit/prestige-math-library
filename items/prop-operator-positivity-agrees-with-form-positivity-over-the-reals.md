---
id: prop-operator-positivity-agrees-with-form-positivity-over-the-reals
kind: proposition
title: "Over the reals, non-negative and positive operators correspond exactly to positive semidefinite and positive definite symmetric forms"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-non-negative-and-positive-operator, thm-bilinear-forms-correspond-to-linear-maps-into-the-dual, thm-riesz-representation-in-finite-dimensions, def-definiteness-inertia-and-signature-data-over-the-reals]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $V$ be a finite-dimensional real inner product space. The assignment

$$T\longmapsto B_T,\qquad B_T(u,v):=\langle Tu,v\rangle,$$

restricts to a bijection between self-adjoint endomorphisms of $V$ and
symmetric bilinear forms on $V$. Under this bijection, non-negative operators
correspond exactly to positive semidefinite forms, and positive operators
correspond exactly to positive definite forms.

## Facts & Assumptions

**Given:** A finite-dimensional real inner product space $V$, a linear map $T:V\to V$, and the bilinear form $B_T(u,v):=\langle Tu,v\rangle$.

[L1] Bilinear forms on $V$ correspond bijectively to linear maps $V\to V^*$ ([[thm-bilinear-forms-correspond-to-linear-maps-into-the-dual]]).

[L2] On a finite-dimensional real inner product space, every linear functional is uniquely of the form $v\mapsto\langle v,w\rangle$ for some $w$ ([[thm-riesz-representation-in-finite-dimensions]]).

[L3] A symmetric bilinear form is positive semidefinite or positive definite exactly when its quadratic values satisfy the corresponding weak or strict inequalities ([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

## Proof

**Proof technique:** direct.

1.1 For a linear map $T$, the form $B_T(u,v)=\langle Tu,v\rangle$ is bilinear. Conversely, let $B$ be a bilinear form on $V$. By [L1], the assignment $u\mapsto B(u,-)$ is a linear map $V\to V^*$. For each $u\in V$, [L2] gives a unique vector $Tu\in V$ such that $B(u,v)=\langle Tu,v\rangle$ for every $v\in V$. If $a,b\in\mathbb R$ and $u,u'\in V$, then for every $v$ one has $$\langle T(au+bu'),v\rangle=B(au+bu',v)=aB(u,v)+bB(u',v)=\langle aTu+bTu',v\rangle,$$ so uniqueness in [L2] gives $T(au+bu')=aTu+bTu'$. Thus $T$ is linear, and the correspondence $T\mapsto B_T$ is bijective on all linear maps and bilinear forms. In the real case, $T$ is self-adjoint exactly when $\langle Tu,v\rangle=\langle u,Tv\rangle$ for all $u,v$, and symmetry of the inner product makes this exactly the condition $B_T(u,v)=B_T(v,u)$. Thus self-adjoint endomorphisms correspond exactly to symmetric bilinear forms. [L1, L2, algebra]

2.1 For every $v\in V$, one has $B_T(v,v)=\langle Tv,v\rangle$. Therefore the weak inequality in [[def-non-negative-and-positive-operator]] is exactly the positive-semidefinite condition in [L3], and the strict inequality on nonzero vectors is exactly the positive-definite condition in [L3]. [L3, algebra] ∎
