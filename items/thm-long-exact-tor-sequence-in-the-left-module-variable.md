---
id: thm-long-exact-tor-sequence-in-the-left-module-variable
title: "The long exact Tor sequence in the left-module variable"
kind: theorem
status: draft
origin: pipeline
deps: ["def-balanced-tor-bifunctor", "thm-horseshoe-lemma-for-projective-resolutions", "thm-long-exact-sequence-in-homology"]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Assume the Axiom of Dependent Choice.
For $0\to M^\prime\to M\to M^{\prime\prime}\to0$ of left $R$-modules and a right module $N$, there is the natural long exact sequence $\cdots\to\operatorname{Tor}_i(N,M^\prime)\to\operatorname{Tor}_i(N,M)\to\operatorname{Tor}_i(N,M^{\prime\prime})\to\operatorname{Tor}_{i-1}(N,M^\prime)\to\cdots$.

## Proof

**Given:** the stated short exact sequence, a right module $N$, and supplied
projective resolutions of its three left modules.

1.1 By [[thm-horseshoe-lemma-for-projective-resolutions]], choose a projective horseshoe resolution of the middle module that fits with resolutions of the outer modules into a degreewise split short exact sequence. Tensoring it with $N$ preserves the degreewise splittings, hence gives a short exact sequence of chain complexes. [given]

2.1 The homology long-exact-sequence construction supplies the displayed connecting maps and exactness. [step 1.1, algebra]

3.1 Change-of-resolution coherence identifies the three homology families with the fixed balanced Tor functor and makes the sequence natural. Its degree-zero tail is $N\otimes_RM^\prime\to N\otimes_RM\to N\otimes_RM^{\prime\prime}\to0$, so no unclaimed left exactness is introduced. [step 2.1, algebra] ∎
