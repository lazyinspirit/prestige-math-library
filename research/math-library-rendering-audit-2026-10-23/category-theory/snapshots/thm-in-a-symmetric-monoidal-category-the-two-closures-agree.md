---
id: thm-in-a-symmetric-monoidal-category-the-two-closures-agree
kind: theorem
title: "A supplied symmetry identifies the left and right internal homs"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-internal-hom-and-its-evaluation-morphism, thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism, def-natural-isomorphism]
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 1.5"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., VII.7"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
---

## Statement

Let $\mathcal C$ be a monoidal category, fix an object $X$, and suppose there is a natural isomorphism

$$\sigma_A:A\otimes X\overset{\cong}\longrightarrow X\otimes A$$

natural in $A$ ([[def-natural-isomorphism]]). If $-\otimes X$ has a right adjoint $[X,-]$, then $X\otimes-$ has a right adjoint uniquely naturally isomorphic to $[X,-]$. In particular, in a symmetric monoidal category the left and right internal homs of $X$ agree up to unique natural isomorphism.

## Facts & Assumptions

**Given:** A monoidal category, an object $X$, a natural isomorphism $\sigma_A:A\otimes X\cong X\otimes A$, and a chosen right adjoint $[X,-]$ to $-\otimes X$.

[L1] The evaluation-transpose bijection for $[X,-]$ is $\mathcal C(A\otimes X,Y)\cong\mathcal C(A,[X,Y])$ ([[def-the-internal-hom-and-its-evaluation-morphism]]).

[L2] Right adjoints to a fixed functor are unique up to unique natural isomorphism ([[thm-the-internal-hom-is-unique-up-to-unique-natural-isomorphism]]).

[L3] A natural isomorphism is, in particular, a natural family of isomorphisms ([[def-natural-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 For each $A,Y$, compose the bijection of [L1] with precomposition by $\sigma_A^{-1}:X\otimes A\to A\otimes X$. This gives a natural bijection $\mathcal C(X\otimes A,Y)\cong\mathcal C(A,[X,Y])$. [given, L1, L3, algebra]

2.1 The bijection in step 1.1 says exactly that $[X,-]$ is also a right adjoint to the functor $X\otimes-$. Hence a left internal hom for $X$ exists and may be chosen to be $[X,-]$. [step 1.1, given]

3.1 Any other chosen right adjoint to $X\otimes-$ is uniquely naturally isomorphic to $[X,-]$ by [L2]. Therefore the supplied symmetry identifies the left and right internal homs, and a genuine symmetric monoidal structure gives this conclusion for every $X$. [step 2.1, L2] ∎
