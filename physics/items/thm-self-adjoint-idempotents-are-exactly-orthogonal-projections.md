---
id: thm-self-adjoint-idempotents-are-exactly-orthogonal-projections
kind: theorem
title: "An endomorphism is an orthogonal projection exactly when it is idempotent and self-adjoint"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-orthogonal-projection-formula-and-linearity, def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-adjoint-exists-and-is-unique-in-finite-dimension, def-orthogonal-projection]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §§6C and 7A'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

An endomorphism $P$ of a finite-dimensional inner product space is the orthogonal projection onto some subspace if and only if

$$P^2=P\qquad\text{and}\qquad P^*=P.$$

In that case it is the orthogonal projection onto $\operatorname{im}P$, along $\ker P=(\operatorname{im}P)^\perp$. The cases $P=0$ and $P=I$ are included.

## Facts & Assumptions

**Given:** An endomorphism $P$ of a finite-dimensional inner product space.

[L1] Orthogonal projection onto $W$ is linear, idempotent, has image $W$, and has kernel $W^\perp$ ([[prop-orthogonal-projection-formula-and-linearity]]).

[L2] The adjoint is characterised by $\langle Pv,w\rangle=\langle v,P^*w\rangle$ and exists uniquely in finite dimension ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[thm-adjoint-exists-and-is-unique-in-finite-dimension]]).

[L3] An orthogonal projection selects the subspace component in the orthogonal direct-sum decomposition ([[def-orthogonal-projection]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $P=P_W$. By [L1], $P^2=P$. Decompose both $v$ and $w$ into their $W$ and $W^\perp$ components. Orthogonality gives $\langle Pv,w\rangle=\langle Pv,Pw\rangle=\langle v,Pw\rangle$, so uniqueness in [L2] yields $P^*=P$. [L1, L2, L3]

1.2 Conversely, suppose $P^2=P$ and $P^*=P$. Every $v$ has the algebraic decomposition $v=Pv+(I-P)v$, where $Pv\in\operatorname{im}P$ and $P(I-P)v=0$, so $(I-P)v\in\ker P$. [given, algebra]

1.3 If $x=Pu\in\operatorname{im}P$ and $z\in\ker P$, then [L2] and self-adjointness give $\langle x,z\rangle=\langle Pu,z\rangle=\langle u,Pz\rangle=0$. Thus $\operatorname{im}P\perp\ker P$. [L2, given]

2.1 Steps 1.2 and 1.3 show that $P$ selects the $\operatorname{im}P$ component in the orthogonal decomposition $V=\operatorname{im}P\oplus\ker P$. By [L3], $P=P_{\operatorname{im}P}$, and [L1] identifies its kernel with $(\operatorname{im}P)^\perp$. [step 1.2, step 1.3, L1, L3] ∎
