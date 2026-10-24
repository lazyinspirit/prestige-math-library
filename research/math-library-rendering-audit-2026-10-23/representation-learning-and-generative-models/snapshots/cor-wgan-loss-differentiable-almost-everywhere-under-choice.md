---
id: cor-wgan-loss-differentiable-almost-everywhere-under-choice
kind: corollary
title: "The compact-space WGAN value is differentiable almost everywhere under choice"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 6
deps:
  - thm-wgan-ideal-critic-generator-gradient
  - def-axiom-of-choice
  - thm-na-rademacher-euclidean
justified_by: []
axiom_use: "Full AC is used only through the published Euclidean Rademacher theorem to obtain almost-everywhere differentiability; the continuity and local-Lipschitz estimate are choice-free."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Martin Arjovsky, Soumith Chintala and Léon Bottou, Wasserstein GAN, Theorem 1 and Appendix C, physical PDF pp. 5 and 20–21"
      url: "https://arxiv.org/pdf/1701.07875"
---

## Statement

Assume the full Axiom of Choice and all hypotheses of the common-neighborhood integrable-envelope branch of the compact-space WGAN theorem. Then its value function $V:\Theta\to\mathbb R$ is Fréchet differentiable outside a Lebesgue-null subset of $\Theta$.

## Statement references

[[def-axiom-of-choice|Axiom of Choice]]

[[thm-wgan-ideal-critic-generator-gradient|Compact-space WGAN continuity and local-Lipschitz theorem]]

[[thm-na-rademacher-euclidean|Euclidean Rademacher differentiability theorem]]

## Facts & Assumptions

**Given:** The full Axiom of Choice, an open $\Theta\subseteq\mathbb R^p$ with $p\ge1$, and the hypotheses of the common-neighborhood integrable-envelope branch of the WGAN theorem.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. [[def-axiom-of-choice]]

[F1] Under its common-neighborhood integrable-envelope hypothesis, the WGAN value $V$ is locally Lipschitz on $\Theta$. [[thm-wgan-ideal-critic-generator-gradient]]

[F2] Assuming full AC, every locally Lipschitz map from an open subset of $\mathbb R^p$ to $\mathbb R$ is Fréchet differentiable outside a Lebesgue-null subset. [[thm-na-rademacher-euclidean]]

## Proof

1.1 By [F1], $V$ is a locally Lipschitz real-valued function on the open set $\Theta\subseteq\mathbb R^p$. [given, F1]

2.1 Under [A1], apply [F2] to $V$ on $\Theta$; it is Fréchet differentiable outside a Lebesgue-null subset of $\Theta$. [given, A1, F2, step 1.1] ∎
