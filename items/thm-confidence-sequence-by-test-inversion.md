---
id: thm-confidence-sequence-by-test-inversion
kind: theorem
title: Confidence sequences by test-supermartingale inversion
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-nonnegative-test-supermartingale
  - def-anytime-valid-p-value-process
  - thm-anytime-validity
  - def-confidence-sequence
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Steven R. Howard, Aaditya Ramdas, Jon McAuliffe and Jasjeet Sekhon, Time-Uniform, Nonparametric, Nonasymptotic Confidence Sequences, Lemma 3 and §6"
      url: https://arxiv.org/pdf/1810.08240
    - title: "Aaditya Ramdas, Peter Grunwald, Vladimir Vovk and Glenn Shafer, Game-Theoretic Statistics and Safe Anytime-Valid Inference, §2.8"
      url: https://arxiv.org/pdf/2210.01948
---

## Statement

Assume AC and fix $\alpha\in(0,1)$. Let $\Theta$ be a parameter set,
$(P_\theta)_{\theta\in\Theta}$ a family of laws on a common discrete filtered
measurable space, and, for each $\theta\in\Theta$, let
$E^\theta=(E_t^\theta)_{t\ge0}$ be a nonnegative test supermartingale for the
singleton null family $\{P_\theta\}$. Define
$$C_t(\omega)=\{\theta\in\Theta:E_t^\theta(\omega)<1/\alpha\}.$$
Then $(C_t)_{t\ge0}$ is a $(1-\alpha)$ confidence sequence
[[def-confidence-sequence]].

No measurable structure on $\Theta$ or joint measurability across $\theta$ is
needed for this pointwise membership and coverage statement.

## Facts & Assumptions

**Given:** Assume AC, $\alpha\in(0,1)$, the parameter family, and the candidate
test-supermartingale $E^\theta$ for each $\theta$. If $\Theta$ is empty the
conclusion is vacuous; otherwise fix an arbitrary $\theta$ when proving its
coverage bound.

[F1] [[def-nonnegative-test-supermartingale]]: for each fixed $\theta$, $E^\theta$ is adapted and nonnegative under $P_\theta$.

[F2] [[thm-anytime-validity]]: transforming a test supermartingale by $p_t=1$ when $E_t\le0$ and $p_t=\min(1,1/E_t)$ otherwise gives an anytime-valid p-value process under its null law.

[F3] [[def-confidence-sequence]]: each fixed-parameter membership event must be adapted and the true parameter must be covered simultaneously with probability at least $1-\alpha$.

[A1] [[def-axiom-of-choice]]: AC is required by the conditional-expectation convention in the test-supermartingale definition and its validity theorem.

## Proof

1.1 Fix $\theta\in\Theta$. Under $P_\theta$, define $p_t^\theta=1$ when $E_t^\theta\le0$ and $p_t^\theta=\min(1,1/E_t^\theta)$ otherwise. By adaptedness in F1 and the Borel transformation used in F2, each $p_t^\theta$ is $\mathcal F_t$-measurable. Hence $\{\theta\in C_t\}=\{E_t^\theta<1/\alpha\}=\{p_t^\theta>\alpha\}$ is $\mathcal F_t$-measurable. [F1, F2, A1, given]

2.1 For this fixed $\theta$, F2 gives $P_\theta(\exists t\ge0:p_t^\theta\le\alpha)\le\alpha$. The complement is exactly $\{\theta\in C_t\text{ for every }t\ge0\}$, whose probability is therefore at least $1-\alpha$. [F2, A1, step 1.1]

3.1 Steps 1.1 and 2.1 hold for every $\theta$. They give the membership measurability and simultaneous-coverage clauses in F3, so $(C_t)$ is a confidence sequence. [F3, step 1.1, step 2.1] ∎
