---
id: ex-gaussian-location-kl
kind: example
title: "Equal-variance Gaussian location KL"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-kullback-leibler-divergence
  - lem-gaussian-location-kl-formula
  - thm-kullback-leibler-is-nonnegative
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Example 4.7"
      url: "https://arxiv.org/pdf/2310.19244v1"
      locator: "Chapter 4, Example 4.7, PDF p. 105"
---
## Example

Let $P=N(a,\tau^2)$ and $Q=N(b,\tau^2)$ be real Gaussian laws with
$\tau>0$. Their directional divergence is
$$D(P\|Q)=\frac{(a-b)^2}{2\tau^2}\ge0.$$
Equality holds when $a=b$. This calculation concerns equality of the two
laws, not identifiability of arbitrary parameter labels.

## Facts & Assumptions


**Given:** AC, real $a,b$, and $\tau>0$.

[A1] [[def-axiom-of-choice]]: the Gaussian KL lemma and KL nonnegativity
theorem assume AC; the lemma derives its countable-choice use from AC.

[F1] [[lem-gaussian-location-kl-formula]]: for equal-variance Gaussian
location laws, $D(N(a,\tau^2)\|N(b,\tau^2))=(a-b)^2/(2\tau^2)$.

[F2] [[thm-kullback-leibler-is-nonnegative]]: for probability laws with the
published KL direction, divergence is nonnegative and equality means the
laws are equal.

## Verification

1.1 Apply [F1] to the stated laws; its hypotheses are exactly $a,b\in\mathbb R$ and $\tau>0$, and its AC hypothesis is [A1]. [A1, F1, given]

2.1 Since $(a-b)^2\ge0$ and $2\tau^2>0$, the displayed value is nonnegative and equals zero when $a=b$. In that case the two Gaussian laws coincide, so the equality clause is consistent with [F2]. [A1, F1, F2, given, algebra] ∎
