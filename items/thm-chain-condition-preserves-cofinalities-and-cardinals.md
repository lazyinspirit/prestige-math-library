---
id: thm-chain-condition-preserves-cofinalities-and-cardinals
kind: theorem
title: Chain conditions preserve high cofinalities and ccc preserves cardinals
status: draft
origin: pipeline
deps: [def-kappa-closure-distributivity-and-chain-condition, thm-forcing-theorem, thm-forcing-preserves-ordinals, thm-cofinality-basics, cor-cardinal-absorption, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Chapter 3 preservation theorem", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC, if $\theta$ is regular and $P$ is $\theta$-cc, then forcing with $P$ preserves every ground-model cofinality at least $\theta$ and every ground-model cardinal at least $\theta$. In particular ccc forcing preserves all cofinalities and cardinals.

## Facts & Assumptions

**Given:** AC, regular $\theta$, and a $\theta$-cc forcing $P$.

[F1] [[thm-forcing-theorem]] lets maximal antichains decide values of names.

[F2] [[thm-cofinality-basics]] reduces cofinality questions to regular initial ordinals.

[F3] [[cor-cardinal-absorption]] bounds unions and products of infinite well-orderable cardinals.

[F4] [[thm-forcing-preserves-ordinals]] keeps the ordinal scale fixed.

## Proof

1.1 If $p\Vdash\dot f:\check\mu\to\check\lambda$, choose for each $\xi<\mu$ a maximal antichain below $p$ deciding $\dot f(\xi)$. Each has size $<\theta$, so the ground-model set $B_\xi$ of possible values has size $<\theta$. Then $p\Vdash\operatorname{ran}(\dot f)\subseteq\bigcup_{\xi<\mu}B_\xi$. AC is used for maximal antichains and their simultaneous selection. [F1]

2.1 Let $\lambda\ge\theta$ be regular and $\mu<\lambda$. If a condition forced $\dot f:\mu\to\lambda$ cofinal, step 1.1 and regularity would put its range inside a ground set of size $\max(\mu,<\theta)<\lambda$, which is bounded in $\lambda$, contradiction. Thus regular cofinalities at least $\theta$ are preserved; F2 transfers this to every ground cofinality at least $\theta$. [F2, F3, step 1.1]

3.1 Suppose a ground cardinal $\lambda\ge\theta$ were collapsed. By F4, some $\mu<\lambda$ and a condition $p$ would force a surjection $\dot f:\mu\to\lambda$. Step 1.1 puts its range inside the ground set $U=\bigcup_{\xi<\mu}B_\xi$, with $|B_\xi|<\theta$. If $\lambda=\theta$, regularity of $\theta$ gives $|U|<\theta$; if $\lambda>\theta$, cardinal arithmetic under AC gives $|U|\le\mu\cdot\theta=\max(\mu,\theta)<\lambda$ (with the finite cases immediate). Either way $p$ cannot force $\dot f$ onto $\lambda$. Thus every ground cardinal at least $\theta$ remains a cardinal. For ccc, $\theta=\aleph_1$; finite and countable cardinals and cofinalities are absolute, so steps 2.1 and 3.1 cover all of them. [F3, F4, step 1.1, step 2.1] ∎
