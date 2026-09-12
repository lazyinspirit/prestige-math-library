---
id: cex-kac-formula-needs-ergodicity
kind: counterexample
title: Kac normalization needs ergodicity
deps: ["def-first-return-time-and-induced-transformation", "thm-kac-return-time-formula", "thm-lebesgue-measure-of-a-box-of-every-kind", "def-ergodic-measure-preserving-system", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Sarig Theorem 1.7 hypotheses
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement refuted

Assume countable choice. Removing ergodicity from Kac’s probability normalization is invalid. For the identity $T$ on $([0,1],\mathcal B([0,1]),\lambda)$ and $E=[0,1/2]$, every point of $E$ has $r_E=1$, but $\int_Er_E\,d\lambda=1/2$, not one. The normalized return mean is one, not $1/\lambda(E)=2$.

## Facts & Assumptions

[F1] The return time is the least positive return time, with infinity when there is none. [[def-first-return-time-and-induced-transformation]].

[F2] For an ergodic probability-preserving system and a positive-measure set $E$, Kac's theorem gives $\int_E r_E\,d\mu=1$ and normalized mean $1/\mu(E)$. [[thm-kac-return-time-formula]].

[F3] Under countable choice, closed intervals have their lengths as Lebesgue measure. [[thm-lebesgue-measure-of-a-box-of-every-kind]].

[F4] A strict invariant set of intermediate probability disproves ergodicity. [[def-ergodic-measure-preserving-system]].

## Counterexample

**Given:** Assume countable choice. Removing ergodicity from Kac’s probability normalization is invalid. For the identity $T$ on $([0,1],\mathcal B([0,1]),\lambda)$ and $E=[0,1/2]$, every point of $E$ has $r_E=1$, but $\int_Er_E\,d\lambda=1/2$, not one. The normalized return mean is one, not $1/\lambda(E)=2$.

1.1 By [F3] the restricted Lebesgue measure has $\lambda([0,1])=1$ and $\lambda(E)=1/2$. The identity is measurable and satisfies $T^{-1}A=A$ for every Borel $A$, so it preserves this probability. In particular $E$ is strictly invariant of measure $1/2$, and [F4] shows that the system is not ergodic. Countable choice is inherited from the Lebesgue measure in [F3]. [F3, F4]

2.1 For each $x\in E$ and each positive integer $n$, $T^n x=x\in E$. Thus the least positive return time in [F1] is 1 and the infinitely-returning core is all of $E$. The integral of the constant one over $E$ is $\lambda(E)=1/2$. The normalized restricted probability has total mass one, so the same constant return time has mean one there. Both values differ from the respective ergodic conclusions of [F2], namely one before normalization and $1/(1/2)=2$ afterwards. All endpoints return as well, so no exceptional-point convention is involved. [1.1, F1, F2] ∎
