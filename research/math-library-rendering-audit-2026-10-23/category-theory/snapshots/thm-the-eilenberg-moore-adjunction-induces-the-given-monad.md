---
id: thm-the-eilenberg-moore-adjunction-induces-the-given-monad
kind: theorem
title: "The free–forgetful Eilenberg–Moore adjunction induces the given monad"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-eilenberg-moore-category, def-free-t-algebra, def-adjunction-by-unit-counit-and-triangle-identities]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Lemma 5.2.9"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Theorem 6.2.5"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

For a monad $(T,\eta,\mu)$ on $\mathcal C$, the assignment $A\mapsto(TA,\mu_A)$ defines a functor $F^T:\mathcal C\to\mathcal C^T$ left adjoint to the forgetful functor $U^T:\mathcal C^T\to\mathcal C$. The monad induced by $F^T\dashv U^T$ is $(T,\eta,\mu)$ on the nose.

## Facts & Assumptions

**Given:** A monad $(T,\eta,\mu)$, its Eilenberg–Moore category and forgetful functor ([[def-eilenberg-moore-category]]), and its free algebras ([[def-free-t-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Define $F^T(A)=(TA,\mu_A)$ and $F^T(f)=T(f)$. Naturality of $\mu$ gives $T(f)\circ\mu_A=\mu_B\circ T^2(f)$, so $T(f)$ is an algebra homomorphism; the functor laws follow from those of $T$. [given]

2.1 At an algebra $(A,a)$ define the counit component $\epsilon_{(A,a)}:=a:(TA,\mu_A)\to(A,a)$; the algebra associativity law makes it an algebra homomorphism and the homomorphism equation makes these components natural. The equations $a\circ\eta_A=1_A$ and $\mu_A\circ T(\eta_A)=1_{TA}$ are the two triangle identities, so $F^T\dashv U^T$. [step 1.1, given]

3.1 The composite $U^TF^T$ equals $T$, the adjunction unit is $\eta$, and $U^T\epsilon F^T$ has component $\epsilon_{(TA,\mu_A)}=\mu_A$; hence the induced multiplication is $\mu$ and the induced monad is the given one on the nose. [step 1.1, step 2.1] ∎
