---
id: thm-the-monoid-object-axioms-may-be-written-without-associators
kind: theorem
title: "The monoid-object axioms may be written without associators"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-monoid-object-and-comonoid-object-in-a-monoidal-category, thm-mac-lane-strictification, thm-unbracketed-tensor-strings-are-well-defined-expressions]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, Chapter VII.3"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Chapter 2.7"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: null
---

## Statement

Let $(M,\mu,\eta)$ be a monoid object in a monoidal category. Then, after the
coherence identification of unbracketed tensor strings, its axioms may be
written as
$$\mu\circ(\mu\otimes1_M)=\mu\circ(1_M\otimes\mu),$$
$$\mu\circ(\eta\otimes1_M)=1_M,\qquad \mu\circ(1_M\otimes\eta)=1_M,$$
without displaying associators or unitors.

## Facts & Assumptions

**Given:** A monoid object $(M,\mu,\eta)$ in a monoidal category $\mathcal C$.

[L1] A monoid object is defined by the associativity equation
$\mu\circ(\mu\otimes1_M)=\mu\circ(1_M\otimes\mu)\circ\alpha_{M,M,M}$ and the two unit equations with $\lambda_M$ and $\rho_M$ ([[def-monoid-object-and-comonoid-object-in-a-monoidal-category]]).

[L2] The category $\mathcal C$ is monoidally equivalent to a strict monoidal category ([[thm-mac-lane-strictification]]).

[L3] Unbracketed tensor strings are well defined after coherence ([[thm-unbracketed-tensor-strings-are-well-defined-expressions]]).

## Proof

**Proof technique:** direct.

1.1 Choose a strictification of $\mathcal C$ as in [L2]. Applying the strong monoidal functor of that equivalence to the diagrams from [L1] transports the monoid-object structure of $M$ to a monoid-object structure on its image in a strict monoidal category. [L1, L2, choose]

2.1 In the strict target, the associator and unitors are identities, so the transported axioms become exactly the displayed unbracketed equalities. [L2, step 1.1]

3.1 By [L3], those unbracketed composites denote definite maps back in the original category and do not depend on which brackets were suppressed. Hence the monoid-object axioms may be written in the simplified form without changing their content. [L3, step 2.1] ∎
