---
id: "cor-lc-large-cardinal-implication-ledger"
kind: "corollary"
title: "Large-cardinal implication and consistency ledger"
deps: ["thm-lc-supercompactness-closed-embedding-characterization", "thm-lc-strong-compactness-fine-measures-and-logic", "def-lc-fine-ultrafilters-strong-compactness-and-supercompactness", "thm-lc-measurable-implies-weakly-compact", "thm-lc-weakly-compact-stationary-reflection-and-mahlo", "thm-lc-inaccessible-rank-segments-model-zfc", "thm-set-language-first-order-soundness", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Chapters 17 and 20 implication statements; Marks Theorem 18.16
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC the following implications hold:

$$\text{supercompact}\ \Longrightarrow\ \text{strongly compact}\ \Longrightarrow\ \text{measurable}\ \Longrightarrow\ \text{weakly compact}\ \Longrightarrow\ \text{Mahlo}\ \Longrightarrow\ \text{inaccessible}.$$

They give the corresponding one-way relative consistency implications between the theories asserting existence of the displayed cardinals. An inaccessible also gives a transitive set model of ZFC. No consistency assertion, converse, strictness, equiconsistency, linear ordering of all large-cardinal notions, or identification of strong compactness with supercompactness is asserted.

## Facts & Assumptions

**Given:** ZFC. Proved the supercompact-to-strongly-compact and co-small-filter-to-measurable arrows explicitly, composed authored implications, and separated finite-proof consistency transfer from actual consistency assertions.

[F1] [[thm-lc-supercompactness-closed-embedding-characterization]]: Supercompactness supplies normal fine kappa-complete measures at every cardinal lambda>=kappa.

[F2] [[thm-lc-strong-compactness-fine-measures-and-logic]]: Fine measures characterize strong compactness and thus its filter-extension property.

[F3] [[thm-lc-measurable-implies-weakly-compact]]: Measurability implies weak compactness.

[F4] [[thm-lc-weakly-compact-stationary-reflection-and-mahlo]]: Weak compactness implies Mahloness, whose definition includes inaccessibility.

[F5] [[thm-lc-inaccessible-rank-segments-model-zfc]]: The inaccessible rank segment is a transitive set model of all ZFC axioms.

[F6] [[thm-set-language-first-order-soundness]]: Set soundness turns an actual set model into the absence of a finite refutation.

[F7] [[def-axiom-of-choice]]: ZFC propagates from all suppliers and is used with regularity for unions of small subsets.

[F8] [[def-lc-fine-ultrafilters-strong-compactness-and-supercompactness]]: Strong compactness means that every proper kappa-complete filter on every set extends to a kappa-complete ultrafilter on that set.

## Proof

1.1 A supercompact kappa has a normal fine complete measure at every lambda>=kappa by its definition and F1. Forgetting normality gives the fine measures of F2, hence strong compactness. For a strongly compact kappa, consider the co-small filter $\{X\subseteq\kappa:|\kappa\setminus X|<\kappa\}$. It is proper and kappa-complete: a fewer-than-kappa union of small complements remains small by regularity and F7. Extend it by the defining property in F8. The extension contains every singleton complement, so contains no singleton and is nonprincipal. It is a kappa-complete ultrafilter on uncountable kappa, witnessing measurability. [F1, F2, F7, F8]

2.1 F3 gives measurable implies weakly compact, and F4 gives weakly compact implies Mahlo. A Mahlo cardinal is inaccessible by the definition used in F4. These complete the displayed chain; all are implications about the same cardinal. If an inaccessible exists, F5 supplies its nonempty transitive V_kappa set model, and F6 gives Con(ZFC) in the ambient theory. This conditional conclusion does not assert that its inaccessible hypothesis is consistent. [F3, F4, F5, F6, step 1.1]

3.1 For any adjacent arrow, let P and Q be the first-order cardinal properties at its stronger and weaker ends, expressed through the stated set-measure definitions when appropriate. The argument gives a finite ZFC proof of $(\exists\kappa\,P(\kappa))\to(\exists\kappa\,Q(\kappa))$. If the weaker extension of ZFC had a finite refutation, prepend this implication proof and the stronger existence axiom, and replace every use of the weaker existence axiom by its derived conclusion. The result is a finite refutation of the stronger extension. Contraposition gives Con(stronger) implies Con(weaker), and composing these transformations gives the nonadjacent implications. This is a transformation of finite proofs, not an assertion of any Con premise or a converse. [F6, step 1.1, step 2.1] ∎
