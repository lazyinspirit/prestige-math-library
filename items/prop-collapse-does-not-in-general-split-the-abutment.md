---
id: prop-collapse-does-not-in-general-split-the-abutment
kind: proposition
title: Collapse does not in general split the abutment
deps: ["cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects", "thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology", "def-collapse-at-a-page", "def-extension-problem-of-a-convergent-spectral-sequence", "def-zero-and-stalk-complex", "def-r-page-of-the-spectral-sequence-of-a-filtered-complex", "lem-the-filtered-differential-induces-d-r-on-the-r-page"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: draft
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---





## Statement

Collapse does not in general split the filtered abutment.

## Facts & Assumptions

**Given:** The degree-zero stalk of the filtered ℤ/4 in F1.

[F1] ℤ/4 with its order-two subgroup has two ℤ/2 graded pieces and is not isomorphic to their direct sum ([[cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects]]).

[F2] A degreewise finite filtered complex abuts to its image-filtered homology ([[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]]).

[F3] Collapse means all subsequent differentials vanish ([[def-collapse-at-a-page]]).

[F4] Splitting an extension requires a section of the quotient ([[def-extension-problem-of-a-convergent-spectral-sequence]]).

[F5] A stalk complex has a single nonzero chain object and zero differential ([[def-zero-and-stalk-complex]]).

[F6] The r-page is the specified filtered numerator/denominator quotient ([[def-r-page-of-the-spectral-sequence-of-a-filtered-complex]]).

[F7] The page differential is induced by the chain differential ([[lem-the-filtered-differential-induces-d-r-on-the-r-page]]).

## Proof

**Proof technique:** direct.

1.1 Put the filtered A=ℤ/4 of [F1] in chain degree zero and zero elsewhere, using [F5]. Every differential of C is zero. Hence $A^r_{p,0}=F_pA$ and the page denominator is $F_{p-1}A$ for every r, so the pages have ℤ/2 at (0,0) and (1,-1), zero elsewhere, and all page differentials vanish. Thus the sequence collapses from page zero by [F3]. [F1, F3, F5, F6, F7]

2.1 Its homology is A in degree zero with exactly the given filtration; finite convergence [F2] identifies these two stable pieces with its graded homology. The quotient A→A/{0,2}≅ℤ/2 cannot have a section: the image of 1 would have to be 1 or 3 modulo 4, but either doubles to 2, while a homomorphism from ℤ/2 must send 1 to an element killed by 2. Therefore the extension does not split in the sense of [F4]. [F1, F2, F4, step 1.1] ∎

## Source notes

[Weibel](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.123–124; the nonsplitting witness is computed here.
