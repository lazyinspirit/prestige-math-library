---
id: thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split
kind: theorem
title: "A bounded below acyclic complex of projective objects is contractible when its cycle epimorphisms split"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible, def-bounded-bounded-below-and-bounded-above-complex, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex, def-cycle-and-boundary-subobjects-of-a-complex, def-projective-object]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Statement

Let $C_\bullet$ be a bounded-below acyclic chain complex of projective objects
in an abelian category. For each $n$, let
$$\pi_n:C_n\to Z_{n-1}(C)$$
be the canonical epimorphism characterized by
$$d_n=i_{n-1}\pi_n,$$
where $i_{n-1}:Z_{n-1}(C)\hookrightarrow C_{n-1}$ is the cycle inclusion.
If every $\pi_n$ admits a section $\sigma_n$, then $C_\bullet$ is
contractible.

## Facts & Assumptions

**Given:** A bounded-below acyclic complex $C_\bullet$ and splittings $\sigma_n:Z_{n-1}(C)\to C_n$ with $\pi_n\sigma_n=1$.

[L1] Boundaries and cycles are the image of $d_{n+1}$ and kernel of $d_n$ ([[def-cycle-and-boundary-subobjects-of-a-complex]]).

[L2] Acyclic means exact at every degree, so $B_{n-1}(C)=Z_{n-1}(C)$ ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

[L3] A bounded-below complex has only finitely many nonzero terms below each degree ([[def-bounded-bounded-below-and-bounded-above-complex]]).

[L4] The split-exact criterion of the previous lemma yields contractibility ([[lem-a-degreewise-split-exact-complex-with-compatible-splittings-is-contractible]]).

[L5] The stated proof uses the chosen sections. Projectivity of the terms
$C_n$ alone does not provide sections of $C_n\twoheadrightarrow Z_{n-1}(C)$;
the lifting property in [[def-projective-object]] would provide such a section
if the target $Z_{n-1}(C)$ were projective.

## Proof

**Proof technique:** direct.

1.1 By [L2], each short exact sequence $$0\to Z_n(C)\to C_n\xrightarrow{\pi_n} Z_{n-1}(C)\to0$$ is exact, and the section $\sigma_n$ splits it. Therefore $$C_n\cong Z_n(C)\oplus Z_{n-1}(C)$$ for every $n$, with differential equal to projection onto the second summand followed by the cycle inclusion. [L1, L2, given, algebra]

2.1 Step 1.1 is exactly the compatible decomposition required by [L4], so $C_\bullet$ is contractible. As [L5] emphasizes, the contraction comes from the chosen sections rather than from projectivity of the terms alone. [L3, L4, L5, step 1.1, algebra] ∎
