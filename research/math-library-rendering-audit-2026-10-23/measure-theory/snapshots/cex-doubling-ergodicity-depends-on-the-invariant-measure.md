---
id: cex-doubling-ergodicity-depends-on-the-invariant-measure
kind: counterexample
title: Doubling ergodicity depends on the invariant measure
deps: ["thm-doubling-map-is-ergodic-for-lebesgue-measure", "def-ergodic-measure-preserving-system", "prop-dirac-measure-is-a-probability-measure", "def-countable-choice"]
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
    - title: E–W Definition 2.13 and periodic orbit specialization
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement refuted

The assertion that doubling has the same ergodicity behavior for every invariant probability is false. Assuming countable choice, it is ergodic for Lebesgue probability $\lambda$ and for $\delta_0$, but not for $\mu=\tfrac12\delta_0+\tfrac14\delta_{1/3}+\tfrac14\delta_{2/3}$.

## Facts & Assumptions

[F1] Doubling is ergodic for Lebesgue probability under countable choice. [[thm-doubling-map-is-ergodic-for-lebesgue-measure]].

[F2] Ergodicity for a probability means every strict invariant measurable set has measure zero or one. [[def-ergodic-measure-preserving-system]].

[F3] Dirac measures are probability measures. [[prop-dirac-measure-is-a-probability-measure]].

## Counterexample

**Given:** The assertion that doubling has the same ergodicity behavior for every invariant probability is false. Assuming countable choice, it is ergodic for Lebesgue probability $\lambda$ and for $\delta_0$, but not for $\mu=\tfrac12\delta_0+\tfrac14\delta_{1/3}+\tfrac14\delta_{2/3}$.

1.1 The circle map $D(x)=\{2x\}$ fixes zero and exchanges $1/3$ with $2/3$. Thus $\delta_0(D^{-1}E)=\mathbf1_E(D0)=\mathbf1_E(0)=\delta_0(E)$ for every Borel $E$. Every Borel set has $\delta_0$-measure either zero or one, so in particular every strictly invariant Borel set does; [F2] proves ergodicity for $\delta_0$. Ergodicity for $\lambda$ is [F1]. [F1, F2, F3]

2.1 The finite weighted sum $\mu$ is a Borel probability by [F3] and the finite-sum interchange with nonnegative series. Its inverse-image mass is $\tfrac12\mathbf1_E(0)+\tfrac14\mathbf1_E(2/3)+\tfrac14\mathbf1_E(1/3)=\mu(E)$, so it too is invariant. Let $Z=\bigcup_{n\ge0}(D^n)^{-1}\{0\}$. Continuity of the iterates makes this Borel. Since zero is fixed, $x$ eventually reaches zero exactly when $Dx$ does; hence $D^{-1}Z=Z$. Zero belongs to $Z$ and neither point of the two-cycle does, so $\mu(Z)=1/2$. This contradicts the ergodicity criterion in [F2]. The atomic calculations are choice-free; countable choice is used only to include the Lebesgue system of [F1]. [1.1, F1, F2, F3] ∎

