---
id: thm-doubling-map-is-ergodic-for-lebesgue-measure
kind: theorem
title: Doubling is ergodic for Lebesgue measure
deps: ["prop-doubling-map-preserves-lebesgue-measure", "thm-ergodicity-and-invariant-functions", "thm-lebesgue-density-theorem", "thm-lebesgue-measure-under-dilations-and-reflections", "thm-lebesgue-outer-measure-and-measurability-are-translation-invariant", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Sarig Proposition 1.5 p.9, conclusion; density argument is the MT-22 prescribed local replacement
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
verification:
  audited: 2026-09-13
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume countable choice. Doubling is ergodic for Borel Lebesgue probability and its completion.

## Facts & Assumptions

[F1] Doubling preserves each of the two measures. [[prop-doubling-map-preserves-lebesgue-measure]].

[F2] It suffices that strictly invariant measurable sets have measure zero or one. [[thm-ergodicity-and-invariant-functions]].

[F3] A positive Lebesgue measurable set has an interior density-one point. [[thm-lebesgue-density-theorem]].

[F4] A nonzero affine branch scales measure by its slope, with translation handled by its separate supplier. [[thm-lebesgue-measure-under-dilations-and-reflections]].

[F5] Translations preserve the measures of the branch sets. [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]].

## Proof

**Given:** Assume countable choice. Doubling is ergodic for Borel Lebesgue probability and its completion.

1.1 Let A be strictly invariant: $D^{-1}A=A$. Then $(D^n)^{-1}A=A$ for every n. On $I_{n,k}=[k/2^n,(k+1)/2^n)$ the map $D^n$ is $x\mapsto2^nx-k$, so $A\cap I_{n,k}=(A+k)/2^n$. Translation and dilation give $\lambda(A\cap I_{n,k})=2^{-n}\lambda(A)=\lambda(I_{n,k})\lambda(A)$. [F1, F4, F5]

2.1 If $\lambda(A)>0$, choose a density-one point $x\in A\cap(0,1)$. Let I_n be its unique half-open depth-n cell and put h_n=2^{-n}. This cell lies in the centered interval $(x-h_n,x+h_n)$ apart from possibly an endpoint of measure zero. Thus $\lambda(I_n\setminus A)/h_n\le2\lambda((x-h_n,x+h_n)\setminus A)/(2h_n)\to0$. But step 1.1 makes the left side identically $1-\lambda(A)$, so $\lambda(A)=1$. Every strict invariant set is therefore null or conull, and the invariant-set criterion proves ergodicity. Countable choice is used in the measure, scaling and density suppliers. [step 1.1, F2, F3, F4, F5] ∎

