---
id: ex-canonical-split-sequence-of-a-direct-sum
kind: example
title: "$0\\to A\\to A\\oplus C\\to C\\to0$ is canonically split"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-direct-sum-of-a-family-of-modules, def-split-short-exact-sequence, thm-splitting-lemma-for-modules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Example

For left $R$-modules $A,C$, the sequence
$$0\to A\xrightarrow iA\oplus C\xrightarrow pC\to0,$$
with $i(a)=(a,0)$ and $p(a,c)=c$, is canonically split by $s(c)=(0,c)$ and $r(a,c)=a$.

## Facts & Assumptions

**Given:** Left $R$-modules $A,C$ and the displayed maps.

[F1] The finite direct sum has coordinatewise operations ([[def-direct-sum-of-a-family-of-modules]]).

[F2] A section satisfies $p\circ s=\operatorname{id}_C$, and a retraction satisfies $r\circ i=\operatorname{id}_A$ ([[def-split-short-exact-sequence]]).

[L1] A section or retraction splits a short exact sequence and identifies the middle module with $A\oplus C$ ([[thm-splitting-lemma-for-modules]]).

## Verification

**Proof technique:** direct.

1.1 The map $i$ is injective, $p$ is surjective, and $\ker p=\{(a,0):a\in A\}=\operatorname{im}i$, so the sequence is short exact. [given, F1, algebra]

1.2 The formulas give $p(s(c))=c$ and $r(i(a))=a$, so $s$ is a section and $r$ is a retraction by [F2]. [F1, F2, algebra]

2.1 By [L1] the sequence splits, and the resulting map $A\oplus C\to A\oplus C$, $(a,c)\mapsto i(a)+s(c)$, is the identity. [step 1.1, step 1.2, L1] ∎
