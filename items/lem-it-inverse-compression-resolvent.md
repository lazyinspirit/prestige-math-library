---
id: lem-it-inverse-compression-resolvent
kind: lemma
title: Inverse compression for positive resolvents
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [def-real-and-complex-inner-product-space, def-adjoint-of-a-linear-map-between-inner-product-spaces, def-non-negative-and-positive-operator, thm-non-negative-operator-characterisations, thm-adjoint-exists-and-is-unique-in-finite-dimension]
aliases: [lem-it-quantum-inverse-compression-variational]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §5.2.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, arXiv:1106.1445v8, §11.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $H,K$ be finite-dimensional complex inner-product spaces, let $T:K\to K$ be positive definite, and let $V:H\to K$ satisfy $V^*V=I_H$. For every $s\ge0$,

$$V^*(T+sI_K)^{-1}V\succeq(V^*TV+sI_H)^{-1},$$

where $A\succeq B$ means that $A-B$ is non-negative. If $H=\{0\}$, both sides are the unique endomorphism of $H$.

## Facts & Assumptions

**Given:** The spaces $H,K$, the positive definite operator $T$, the isometry $V$, and $s\ge0$ in the Statement.

[F1] [[def-real-and-complex-inner-product-space]]: the inner product is linear in its first argument, conjugate-linear in its second, and positive definite.

[F2] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Vx,z\rangle=\langle x,V^*z\rangle$.

[F3] [[def-non-negative-and-positive-operator]]: positive definiteness means self-adjointness and strictly positive quadratic form on nonzero vectors.

[F4] [[thm-non-negative-operator-characterisations]]: non-negative operators are self-adjoint with nonnegative quadratic form.

[F5] [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]: every linear map between finite-dimensional inner-product spaces has a unique linear adjoint, including zero-dimensional spaces.

## Proof

1.1 All adjoints of the finite-dimensional linear maps used below exist uniquely by [F5]. Let $C$ be positive definite on a finite-dimensional space and $y$ any vector. The operator $C$ is injective by [F3], hence invertible in finite dimension; put $z_0=C^{-1}y$. Expanding with [F1]–[F2] gives $2\operatorname{Re}\langle y,z\rangle-\langle Cz,z\rangle=\langle C^{-1}y,y\rangle-\langle C(z-z_0),z-z_0\rangle$. The last term is nonnegative by [F3] and vanishes at $z=z_0$, so $\langle C^{-1}y,y\rangle=\max_z\{2\operatorname{Re}\langle y,z\rangle-\langle Cz,z\rangle\}$. [given, F5, F1, F2, F3, algebra]

2.1 If $H=\{0\}$ the assertion is immediate. Otherwise fix $x\in H$, put $C=T+sI_K$ and $y=Vx$. By [F2] and $V^*V=I_H$, $V^*CV=V^*TV+sI_H$, which is positive definite. Restrict the maximum in step 1.1 to $z=Vw$; the isometry identity gives $\langle Vx,Vw\rangle=\langle x,w\rangle$ and $\langle CVw,Vw\rangle=\langle(V^*TV+sI_H)w,w\rangle$. Hence $\langle (T+sI_K)^{-1}Vx,Vx\rangle\ge\langle(V^*TV+sI_H)^{-1}x,x\rangle$. This holds for every $x$, so the self-adjoint operator difference is non-negative by [F4], proving the order inequality. [given, F2, F3, F4, step 1.1, algebra] ∎
