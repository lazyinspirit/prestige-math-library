---
id: cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram
kind: corollary
title: "Two-out-of-three for quasi-isomorphisms in a short exact sequence diagram"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-the-long-exact-homology-sequence-is-natural,
       thm-five-lemma-for-a-morphism-of-long-exact-sequences,
       def-quasi-isomorphism]
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
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-27
---

## Statement

Consider a morphism of short exact sequences of complexes
$$ \begin{matrix} 0&\to&A_\bullet&\to&B_\bullet&\to&C_\bullet&\to&0\\ &&\downarrow a&&\downarrow b&&\downarrow c&&\\ 0&\to&A'_\bullet&\to&B'_\bullet&\to&C'_\bullet&\to&0. \end{matrix} $$
If any two of $a$, $b$, and $c$ are quasi-isomorphisms, then so is the third.

## Facts & Assumptions

**Given:** A morphism of short exact sequences of complexes.

[L1] Such a ladder induces a morphism between the associated long exact homology sequences ([[cor-the-long-exact-homology-sequence-is-natural]]).

[L2] In a morphism of long exact sequences, if the four surrounding comparison maps in a five-term window are isomorphisms, then the middle one is an isomorphism ([[thm-five-lemma-for-a-morphism-of-long-exact-sequences]]).

[L3] A quasi-isomorphism is a chain map inducing isomorphisms on all homology objects ([[def-quasi-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Assume $b$ and $c$ are quasi-isomorphisms. In the long exact ladder from [L1], center the five-term window at $H_n(A)$. The four surrounding comparison maps come from $H_{n+1}(b)$, $H_{n+1}(c)$, $H_n(b)$, and $H_n(c)$, so they are isomorphisms by [L3]. Hence $H_n(a)$ is an isomorphism by [L2]. [L1, L2, L3, given, algebra]

1.2 Assume $a$ and $c$ are quasi-isomorphisms. Center the five-term window at $H_n(B)$. The surrounding comparison maps come from $H_{n+1}(c)$, $H_n(a)$, $H_n(c)$, and $H_{n-1}(a)$, so [L2] gives that $H_n(b)$ is an isomorphism. [L1, L2, L3, given, algebra]

2.1 Assume $a$ and $b$ are quasi-isomorphisms. Center the five-term window at $H_n(C)$. The surrounding comparison maps come from $H_n(a)$, $H_n(b)$, $H_{n-1}(a)$, and $H_{n-1}(b)$, so [L2] yields that $H_n(c)$ is an isomorphism. By [L3], the missing map is therefore a quasi-isomorphism in every case. [L1, L2, L3, given, algebra] ∎
