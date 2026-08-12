---
id: lem-endpoints-in-a-short-exact-sequence
kind: lemma
title: "The endpoints of a short exact sequence encode injectivity and surjectivity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exact-and-short-exact-sequences-of-modules, def-injection-surjection-bijection, thm-module-kernel-image-and-injectivity]
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

## Statement

For a module homomorphism $f:A\to B$, the sequence $0\to A\xrightarrow fB$ is exact at $A$ if and only if $f$ is injective. The sequence $A\xrightarrow fB\to0$ is exact at $B$ if and only if $f$ is surjective. Consequently
$$0\to A\xrightarrow iB\xrightarrow pC\to0$$
is short exact if and only if $i$ is injective, $p$ is surjective, and $\operatorname{im}i=\ker p$.

## Facts & Assumptions

**Given:** Module homomorphisms $f:A\to B$, $i:A\to B$, and $p:B\to C$.

[F1] Exactness at a term means equality of the incoming image and outgoing kernel ([[def-exact-and-short-exact-sequences-of-modules]]).

[F2] Injective means equal images have equal inputs, and surjective means every target element has a preimage ([[def-injection-surjection-bijection]]).

[L1] A module homomorphism is injective exactly when its kernel is zero ([[thm-module-kernel-image-and-injectivity]]).

## Proof

**Proof technique:** direct.

1.1 The zero map $0\to A$ has image $\{0\}$, so by [F1] the sequence $0\to A\xrightarrow fB$ is exact at $A$ exactly when $\ker f=\{0\}$, which is equivalent to injectivity by [L1]. [F1, L1]

1.2 The zero map $B\to0$ has kernel $B$, so by [F1] the sequence $A\xrightarrow fB\to0$ is exact at $B$ exactly when $\operatorname{im}f=B$, which is equivalent to surjectivity by [F2]. [F1, F2]

2.1 A four-term sequence $0\to A\xrightarrow iB\xrightarrow pC\to0$ is exact at $A,B,C$ exactly when the endpoint conditions of steps 1.1 and 1.2 hold and $\operatorname{im}i=\ker p$ holds at $B$. [step 1.1, step 1.2, F1]

3.1 This proves both endpoint equivalences and both directions of the short-exact characterization. [step 1.1, step 1.2, step 2.1] ∎
