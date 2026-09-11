---
id: "cex-pointwise-limit-discontinuous-at-zero-signals-mass-escape"
kind: "counterexample"
title: "Pointwise limit discontinuous at zero signals mass escape"
deps: ["lem-basic-properties-of-characteristic-functions", "def-tight-family-of-probability-measures", "thm-ftc-second-part", "thm-sine-and-cosine-derivatives", "thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral", "def-axiom-of-choice", "thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "def-characteristic-function-of-a-real-random-variable", "thm-integration-against-a-density", "thm-heine-borel-rn", "thm-chain-rule"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Norris, Probability and Measure"
      url: https://www.statslab.cam.ac.uk/~james/Lectures/pmall.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

A pointwise limit of characteristic functions need not be a characteristic function. Under AC, take $\mu_n$ uniform on $[-n,n]$, $n\ge1$. Its characteristic function is $\sin(nt)/(nt)$ for $t\ne0$, with value one at zero. The pointwise limit is $1_{\{0\}}(t)$, which is not a characteristic function, and the family of laws is not tight.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement refuted.

[F1] Every characteristic function is continuous at zero. [[lem-basic-properties-of-characteristic-functions]].

[F2] Tightness requires a common compact set for all laws. [[def-tight-family-of-probability-measures]].

[F3] Compact primitive increments evaluate integrals. [[thm-ftc-second-part]].

[F4] The real trigonometric primitives differentiate as usual. [[thm-sine-and-cosine-derivatives]].

[F5] The compact integration bridge assumes countable choice. [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F6] AC supplies that countable choice. [[def-axiom-of-choice]].

[F7] A nonnegative density defines a measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]].

[F8] The defining integrand has unit modulus. [[def-characteristic-function-of-a-real-random-variable]].

[F9] Nonnegative measurable tests against a density can be integrated as products. [[thm-integration-against-a-density]].

[F10] A compact set in the real line is bounded. [[thm-heine-borel-rn]].

[F11] Scaling the argument in a trigonometric function multiplies its derivative by that scale. [[thm-chain-rule]].

## Counterexample

**Proof technique:** direct.

1.1 For each integer $n\ge1$, the Borel density $1_{[-n,n]}/(2n)$ integrates to one and hence defines $\mu_n$. Apply [F9] separately to the positive and negative parts of the bounded real functions $\cos(tx)$ and $\sin(tx)$ and subtract their finite integrals; reassembling the real and imaginary components shows that its transform is $(2n)^{-1}\int_{-n}^n e^{itx}\,dx$. When $t\ne0$, integrating the cosine using $\sin(tx)/t$ gives $\sin(nt)/(nt)$, and the sine integral vanishes by oddness (or its primitive $-\cos(tx)/t$). The compact bridge validates these Lebesgue calculations. At t=0 the integrand is one. For each fixed nonzero t, $|\sin(nt)/(nt)|\le1/(n|t|)\to0$, while at zero the sequence is constantly one. [F3, F4, F5, F7, F8, F9, F11]

2.1 The function $1_{\{0\}}$ is discontinuous at zero: at $t=1/k$ its value is zero for every positive integer k, while its value at zero is one. Since every characteristic function is continuous there, it cannot be the characteristic function of any Borel probability. Moreover for every $M\ge0$, $\mu_n([-M,M])=\min(1,M/n)\to0$. Every nonempty compact K is contained in such an interval, so eventually $\mu_n(K)<1/2$ and its complement has mass greater than $1/2$. The empty compact set has complement mass one for every n. No compact set works for error $1/2$, proving non-tightness. The index n=0 is excluded because the displayed density divides by 2n; a point mass at zero would be a different law. AC is used only through the compact integration bridge and its continuous-integrand prerequisites. [step 1.1, F1, F2, F6, F10] ∎
