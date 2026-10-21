---
id: lem-ip-finite-element-reduced-gradient-from-discrete-adjoint
kind: lemma
title: The finite-element discrete adjoint gives the reduced gradient
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-ip-pde-solver-admissibility-contract
  - def-euclidean-inner-product
  - thm-riesz-representation-in-finite-dimensions
  - thm-chain-rule-for-total-derivatives
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hannes Meinlschmidt, Optimization with Partial Differential Equations, complete lecture notes, §3.2"
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
    - title: "Michael Hinze, A Variational Discretization Concept in Control Constrained Optimization: The Linear-Quadratic Case, §§1–3"
      url: "https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf"
verification:
  precheck: pass
---

## Statement

Let $O\subseteq\mathbb R^m$ be open and $V=\mathbb R^n$ have its standard Euclidean inner product. Let $R:O\times V\to V$ and $G:O\times V\to Y$ be continuously differentiable, where $Y$ is a finite-dimensional real Euclidean space. Suppose $S:O\to V$ is continuously differentiable, $R(q,S(q))=0$ for every $q\in O$, and the matrix $D_uR(q,S(q))$ is invertible at a fixed $q\in O$. Let $y\in Y$, $q_0\in\mathbb R^m$, and $\alpha>0$. Define
$$
J(q,u):=\frac12\|G(q,u)-y\|_Y^2+\frac\alpha2\|q-q_0\|_2^2,\qquad \Phi(q):=J(q,S(q)).
$$
Let $p\in V$ be the unique solution of
$$
\bigl(D_uR(q,S(q))\bigr)^T p=\nabla_uJ(q,S(q)),
$$
where $\nabla_qJ$ and $\nabla_uJ$ are the Euclidean representatives of the two partial derivative functionals. Then for every $h\in\mathbb R^m$,
$$
D\Phi(q)[h]=\left\langle \nabla_qJ(q,S(q))-\bigl(D_qR(q,S(q))\bigr)^T p,\ h\right\rangle_{\mathbb R^m}.
$$
Consequently $\nabla\Phi(q)=\nabla_qJ(q,S(q))-(D_qR(q,S(q)))^Tp$. This is the exact derivative of the specified finite-dimensional model; it asserts no convergence of an iteration that changes $q$.

## Statement references

[[def-ip-pde-solver-admissibility-contract|Finite-element state, residual, and discrete-adjoint contract]]

[[def-euclidean-inner-product|Euclidean inner products, norms, and matrix transposes]]

[[thm-riesz-representation-in-finite-dimensions|Finite-dimensional Riesz representation]]

[[thm-chain-rule-for-total-derivatives|Chain rule for total derivatives in Euclidean spaces]]

[Hannes Meinlschmidt, *Optimization with Partial Differential Equations*, §3.2](https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf)

[Michael Hinze, *A Variational Discretization Concept in Control Constrained Optimization: The Linear-Quadratic Case*, §§1–3](https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf)

## Facts & Assumptions

**Given:** The open set, Euclidean spaces, continuously differentiable residual, observation, and state maps, state identity, invertible state Jacobian, data, reference parameter, positive penalty, and adjoint equation in the Statement.

[F1] The state residual is the identity $R(q,S(q))=0$ on $O$ ([[def-ip-pde-solver-admissibility-contract]]).

[F2] The adjoint solves $(D_uR(q,S(q)))^Tp=\nabla_uJ(q,S(q))$ ([[def-ip-pde-solver-admissibility-contract]]).

[F3] For continuously differentiable maps between finite-dimensional real Euclidean spaces, the derivative of a composition is the composition of the derivatives ([[thm-chain-rule-for-total-derivatives]]).

[F4] Every linear functional on a finite-dimensional real inner-product space has a unique representing vector ([[thm-riesz-representation-in-finite-dimensions]]).

[F5] The Euclidean pairing is bilinear and satisfies $\langle A^Tp,v\rangle=\langle p,Av\rangle$ for every real matrix $A$ of compatible dimensions ([[def-euclidean-inner-product]]).

## Proof

1.1 Fix an arbitrary direction $h\in\mathbb R^m$. Differentiate [F1] at $q$ using [F3]. The chain rule gives $D_qR(q,S(q))h+D_uR(q,S(q))DS(q)[h]=0$. Since $D_uR(q,S(q))$ is invertible by the Statement, this identity determines $DS(q)[h]$. [given, F1, F3, algebra]

1.2 Apply [F3] to $\Phi(q)=J(q,S(q))$. For Euclidean vectors $z,w$, bilinearity [F5] gives $\frac12\|z+tw\|_2^2-\frac12\|z\|_2^2=t\langle z,w\rangle+\frac{t^2}{2}\|w\|_2^2$, so the derivative of a squared-norm term is its residual paired with the derivative of its argument. Applying the chain rule to the data and penalty terms in $J$ gives $D\Phi(q)[h]=\langle\nabla_qJ(q,S(q)),h\rangle_{\mathbb R^m}+\langle\nabla_uJ(q,S(q)),DS(q)[h]\rangle_V$. [given, F3, F5, algebra]

2.1 Substitute [F2] in the second term of step 1.2. The transpose identity [F5] gives $\langle (D_uR)^Tp,DS[h]\rangle_V=\langle p,D_uR\,DS[h]\rangle_V$. By step 1.1, $D_uR\,DS[h]=-D_qR\,h$, so $D\Phi(q)[h]=\left\langle \nabla_qJ(q,S(q))-(D_qR(q,S(q)))^Tp,\ h\right\rangle_{\mathbb R^m}$. [F2, F5, step 1.1, step 1.2, algebra]

3.1 The expression in step 2.1 represents the derivative functional on every $h$. By [F4] its representing vector is unique, so that vector is $\nabla\Phi(q)$ and has the stated formula. [F4, step 2.1] ∎

## Remarks

The transpose convention is the Euclidean coefficient-space convention fixed in the definition. A continuous PDE adjoint or an adjoint for another coefficient inner product must be derived using that model's own operator pairing.
