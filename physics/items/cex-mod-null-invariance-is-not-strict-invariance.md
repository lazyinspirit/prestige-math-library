---
id: cex-mod-null-invariance-is-not-strict-invariance
kind: counterexample
title: Mod-null invariance need not be strict invariance
deps: ["prop-doubling-map-preserves-lebesgue-measure", "def-strict-and-mod-null-invariant-sigma-algebras", "prop-countable-subsets-of-rn-are-lebesgue-null", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Proposition 2.14, doubling specialization
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement refuted

The assertion that every invariant-modulo-null-sets measurable set is strictly invariant is false. Assuming countable choice, for Lebesgue doubling the set $E=\{0\}$ satisfies $\lambda(D^{-1}E\mathbin\triangle E)=0$, but $D^{-1}E\ne E$.

## Facts & Assumptions

[F1] Doubling preserves Lebesgue probability. [[prop-doubling-map-preserves-lebesgue-measure]].

[F2] Strict invariance is set equality, whereas mod-null invariance is null symmetric difference. [[def-strict-and-mod-null-invariant-sigma-algebras]].

[F3] Singletons are measurable and null under countable choice. [[prop-countable-subsets-of-rn-are-lebesgue-null]].

## Counterexample

**Given:** The assertion that every invariant-modulo-null-sets measurable set is strictly invariant is false. Assuming countable choice, for Lebesgue doubling the set $E=\{0\}$ satisfies $\lambda(D^{-1}E\mathbin\triangle E)=0$, but $D^{-1}E\ne E$.

1.1 For $0\le x<1$, the equation $D(x)=0$ means $2x$ is an integer. The only possibilities are $2x=0$ or $2x=1$, giving $D^{-1}\{0\}=\{0,1/2\}$. Its symmetric difference with $E=\{0\}$ is exactly $\{1/2\}$, a null measurable set by [F3]. Thus $E$ is invariant modulo null sets in the probability system of [F1], by [F2]. [F1, F2, F3]

2.1 The point $1/2$ belongs to $D^{-1}E$ and not to $E$, so the sets are not equal and $E$ is not strictly invariant by [F2]. Both sets are finite Borel sets; this is an exact failure for the given representative, despite their equality modulo null sets. Countable choice is used only through the Lebesgue measure and null-set suppliers [F1] and [F3]. [1.1, F1, F2, F3] ∎

