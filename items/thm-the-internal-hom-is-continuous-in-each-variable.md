---
id: thm-the-internal-hom-is-continuous-in-each-variable
kind: theorem
title: "The internal hom preserves limits in the covariant variable and sends colimits to limits in the contravariant variable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-the-internal-hom-and-its-evaluation-morphism, thm-right-adjoints-preserve-limits, thm-a-closed-monoidal-category-has-its-tensor-cocontinuous-in-each-variable]
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
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Theorem 4.2.1 and Section 4.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Statement

In a biclosed monoidal category, for each fixed object $X$ the functor $[X,-]$ preserves all limits that exist. For each fixed object $Y$, the contravariant functor $[-,Y]:\mathcal C^{\mathrm{op}}\to\mathcal C$ preserves limits in $\mathcal C^{\mathrm{op}}$; equivalently, it sends colimits in $\mathcal C$ to limits in $\mathcal C$.

## Facts & Assumptions

**Given:** A biclosed monoidal category.

[L1] For each fixed $X$, the right internal hom $[X,-]$ is right adjoint to $-\otimes X$ ([[def-the-internal-hom-and-its-evaluation-morphism]]).

[L2] Right adjoints preserve all limits that exist in their domain ([[thm-right-adjoints-preserve-limits]]).

[L3] In a biclosed monoidal category, tensoring with a fixed object preserves every colimit that exists ([[thm-a-closed-monoidal-category-has-its-tensor-cocontinuous-in-each-variable]]).

## Proof

**Proof technique:** direct.

1.1 Fix $X$. By [L1], the functor $[X,-]$ is a right adjoint, so [L2] implies that it preserves every limit that exists in $\mathcal C$. [given, L1, L2]

1.2 Fix $Y$. For a morphism $u:X'\to X$, define $[u,Y]:[X,Y]\to[X',Y]$ to be the transpose of

$$[X,Y]\otimes X'\xrightarrow{1\otimes u}[X,Y]\otimes X\xrightarrow{\operatorname{ev}_{X,Y}}Y.$$

The transposition bijection of [L1] makes this assignment contravariantly functorial in $X$. [given, L1, construct]

2.1 Let $(i_j:X_j\to X)$ be a colimit cocone in $\mathcal C$, and fix an object $A$. By [L3], the functor $A\otimes-$ preserves this colimit, so maps $A\otimes X\to Y$ are naturally the same as compatible families of maps $A\otimes X_j\to Y$. [given, step 1.2, L3, algebra]

3.1 Apply the transposition bijection of [L1] to the maps in step 2.1. A map $A\otimes X\to Y$ is the same as a map $A\to[X,Y]$, and a compatible family $A\otimes X_j\to Y$ is the same as a compatible family $A\to[X_j,Y]$ with respect to the morphisms $[i_j,Y]$ from step 1.2. Therefore maps $A\to[X,Y]$ are naturally in bijection with cones from $A$ to the diagram $j\mapsto [X_j,Y]$, so $[X,Y]$ is a limit of that diagram. [step 1.2, step 2.1, L1, algebra]

4.1 Hence the contravariant functor $[-,Y]:\mathcal C^{\mathrm{op}}\to\mathcal C$ sends colimits in $\mathcal C$ to limits in $\mathcal C$, equivalently preserves limits in $\mathcal C^{\mathrm{op}}$. Combining this with step 1.1 proves the claim. [step 1.1, step 3.1, algebra] ∎
