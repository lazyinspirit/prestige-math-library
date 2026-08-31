---
id: thm-the-unit-is-an-internal-hom-unit
kind: theorem
title: "The tensor unit is an internal-hom unit"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-internal-hom-and-its-evaluation-morphism, thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism]
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, equations (1.25) and (1.26)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
---

## Statement

In a right-closed monoidal category there is a natural isomorphism $[\mathbf 1,Y]\cong Y$ for every object $Y$. Consequently there is a natural bijection

$$\mathcal C(\mathbf 1,[X,Y])\cong\mathcal C(X,Y).$$

## Facts & Assumptions

**Given:** A right-closed monoidal category.

[L1] The right internal hom $[X,-]$ is right adjoint to $-\otimes X$, with transposition bijection $\mathcal C(A\otimes X,Y)\cong\mathcal C(A,[X,Y])$ ([[def-the-internal-hom-and-its-evaluation-morphism]]).

[L2] Right adjoints to a fixed functor are unique up to unique natural isomorphism ([[thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 The right unitor gives natural isomorphisms $A\otimes\mathbf 1\cong A$. Applying the transposition bijection of [L1] with $X=\mathbf 1$ therefore gives natural bijections $\mathcal C(A,Y)\cong\mathcal C(A\otimes\mathbf 1,Y)\cong\mathcal C(A,[\mathbf 1,Y])$. So the identity functor is also a right adjoint to $-\otimes\mathbf 1$. Since $[\mathbf 1,-]$ is another right adjoint to the same functor, [L2] gives $[\mathbf 1,Y]\cong Y$ naturally in $Y$. [given, L1, L2]

2.1 Apply the transposition bijection of [L1] with $A=\mathbf 1$. Because $\mathbf 1\otimes X\cong X$, this gives $\mathcal C(X,Y)\cong\mathcal C(\mathbf 1,[X,Y])$. Rewriting the bijection in the opposite direction yields the displayed form. [step 1.1, L1, algebra]

3.1 Thus the tensor unit recovers the external hom-set from the internal hom. [step 1.1, step 2.1] ∎
