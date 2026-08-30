---
id: thm-the-endomorphisms-of-the-unit-form-a-commutative-monoid
kind: theorem
title: "The endomorphisms of the tensor unit form a commutative monoid"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monoidal-category, cor-the-two-unitors-agree-on-the-unit-object, def-semigroup-and-monoid, prop-monoids-and-groups-as-one-object-categories, thm-eckmann-hilton-argument]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Proposition 2.2.10"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

If $(\mathcal C,\otimes,\mathbf 1,\alpha,\lambda,\rho)$ is a monoidal category,
then $\operatorname{End}_{\mathcal C}(\mathbf 1)$ is a commutative monoid.
Its multiplication may be taken to be composition, and it agrees with the
transport of tensor product along $\lambda_{\mathbf 1}$. In particular, a
strict one-object monoidal category has a commutative endomorphism monoid.

## Facts & Assumptions

**Given:** A monoidal category $(\mathcal C,\otimes,\mathbf 1,\alpha,\lambda,\rho)$.

[L1] A monoidal category has a bifunctor $\otimes$, unit object $\mathbf 1$, and unit isomorphisms $\lambda_{\mathbf 1}:(\mathbf 1\otimes\mathbf 1)\to\mathbf 1$ and $\rho_{\mathbf 1}:(\mathbf 1\otimes\mathbf 1)\to\mathbf 1$ ([[def-monoidal-category]]).

[L2] The two unitors agree on the unit object: $\lambda_{\mathbf 1}=\rho_{\mathbf 1}$ ([[cor-the-two-unitors-agree-on-the-unit-object]]).

[L3] A unital associative operation is a monoid operation ([[def-semigroup-and-monoid]]).

[L4] Two unital operations with the same unit and the interchange law coincide and are commutative ([[thm-eckmann-hilton-argument]]).

[L5] A monoid can be viewed as a one-object category ([[prop-monoids-and-groups-as-one-object-categories]]).

## Proof

**Proof technique:** direct.

1.1 On $\operatorname{End}_{\mathcal C}(\mathbf 1)$ let $f\circ g$ be ordinary composition and define $f*g:=\lambda_{\mathbf 1}\circ(f\otimes g)\circ\lambda_{\mathbf 1}^{-1}$. Composition is associative with unit $1_{\mathbf 1}$. Naturality of $\lambda$ at $f$ gives $\lambda_{\mathbf 1}\circ(1_{\mathbf 1}\otimes f)=f\circ\lambda_{\mathbf 1}$, so $1_{\mathbf 1}*f=f$. Naturality of $\rho$ at $f$ gives $\rho_{\mathbf 1}\circ(f\otimes1_{\mathbf 1})=f\circ\rho_{\mathbf 1}$, and [L2] identifies $\rho_{\mathbf 1}$ with $\lambda_{\mathbf 1}$. Hence $f*1_{\mathbf 1}=f$ as well, so $*$ has the same unit $1_{\mathbf 1}$. [given, L1, L2]

2.1 For $f,g,h,k\in\operatorname{End}_{\mathcal C}(\mathbf 1)$, one has $((f\circ g)*(h\circ k))=\lambda_{\mathbf 1}\circ((f\circ g)\otimes(h\circ k))\circ\lambda_{\mathbf 1}^{-1}=\lambda_{\mathbf 1}\circ((f\otimes h)\circ(g\otimes k))\circ\lambda_{\mathbf 1}^{-1}=(f*h)\circ(g*k)$, so the interchange law holds. [step 1.1, L1, algebra]

3.1 By [L4], the operations $\circ$ and $*$ coincide and their common value is commutative. Since composition is already associative and unital, [L3] shows that composition makes $\operatorname{End}_{\mathcal C}(\mathbf 1)$ into a commutative monoid. [step 1.1, step 2.1, L3, L4]

4.1 If $\mathcal C$ is strict and has one object, then tensor and composition on endomorphisms are the same literal operation. Thus its endomorphism monoid is commutative; [L5] supplies the converse comparison with an ordinary one-object category. [step 3.1, L5]

5.1 Therefore the endomorphisms of the tensor unit form a commutative monoid. [step 3.1, step 4.1] ∎
