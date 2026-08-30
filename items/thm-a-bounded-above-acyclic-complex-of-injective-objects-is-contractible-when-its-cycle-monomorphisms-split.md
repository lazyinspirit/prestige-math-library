---
id: thm-a-bounded-above-acyclic-complex-of-injective-objects-is-contractible-when-its-cycle-monomorphisms-split
kind: theorem
title: "A bounded above acyclic complex of injective objects is contractible when its cycle monomorphisms split"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split, def-bounded-bounded-below-and-bounded-above-complex, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex, def-cycle-and-boundary-subobjects-of-a-complex, def-injective-object, thm-the-opposite-of-an-abelian-category-is-abelian]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Statement

Let $C_\bullet$ be a bounded-above acyclic chain complex of injective objects
in an abelian category. If every cycle inclusion
$$i_n:Z_n(C)\hookrightarrow C_n$$
admits a retraction $r_n:C_n\to Z_n(C)$, then $C_\bullet$ is contractible.

## Facts & Assumptions

**Given:** A bounded-above acyclic complex $C_\bullet$ and retractions $r_n:C_n\to Z_n(C)$ with $r_ni_n=1$.

[L1] Boundaries and cycles are defined degreewise in a chain complex ([[def-cycle-and-boundary-subobjects-of-a-complex]]).

[L2] Acyclic means exact at every degree ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

[L3] The previous theorem treats the dual split criterion on the epimorphism side ([[thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split]]).

[L4] The stated proof uses the chosen retractions. Injectivity of the terms
$C_n$ alone does not provide retractions onto $Z_n(C)$; the extension property
in [[def-injective-object]] would provide such a retraction if the target
$Z_n(C)$ were injective.

[L5] Opposite abelian categories are abelian ([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

## Proof

**Proof technique:** direct.

1.1 Because $i_n$ splits, each exact sequence $$0\to Z_n(C)\xrightarrow{i_n}C_n\to Z_{n-1}(C)\to0$$ decomposes $C_n$ as $$C_n\cong Z_n(C)\oplus Z_{n-1}(C),$$ with the differential again equal to projection onto the second factor followed by inclusion into $C_{n-1}$. [L1, L2, given, algebra]

2.1 Step 1.1 is the same compatible splitting pattern used in [L3], so the same contraction argument applies and $C_\bullet$ is contractible. The proof depends on the assumed retractions, as [L4] emphasizes; [L5] explains the formal duality with the epimorphism-side criterion. [L3, L4, L5, step 1.1, algebra] ∎
