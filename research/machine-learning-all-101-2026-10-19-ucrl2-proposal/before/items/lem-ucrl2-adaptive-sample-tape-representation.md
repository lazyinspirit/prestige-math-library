---
id: lem-ucrl2-adaptive-sample-tape-representation
kind: lemma
title: "Adaptive MDP visits admit fixed sample tapes"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-bounded-reward-finite-mdp, thm-ionescu-tulcea-construction-of-a-markov-chain, def-axiom-of-choice]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "§4.1, adaptive state-action visit counts in the confidence analysis; the tape coupling is proved locally."}
---

## Statement

Fix a finite-horizon interaction of length $T$ in a finite MDP with bounded rewards and any nonanticipating policy: each action distribution is a measurable function of the revealed history, and policy randomization is independent of unexposed MDP samples. On an enlarged probability space with the same law for the observed interaction, for each admissible pair $(s,a)$ there is a sequence $Z_{s,a,1},\ldots,Z_{s,a,T}$ of independent samples with common law $Q(\cdot\mid s,a)$ such that the $j$th observed next-state/reward pair at $(s,a)$ is $Z_{s,a,j}$ whenever that visit occurs.

## Statement references

[UCRL2 adaptive-count setting](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): §4.1; the fixed-tape representation is established locally from the kernel construction.

## Facts & Assumptions

**Given:** The conditional law and nonanticipating-policy conventions in the Statement.

[F1] [[def-bounded-reward-finite-mdp]]: after a state-action pair is selected, the next-state/reward observation has the fixed law $Q(\cdot\mid s,a)$ conditional on the preceding history.

[F2] [[thm-ionescu-tulcea-construction-of-a-markov-chain]]: a finite sequence of probability kernels has a joint path law under the stated Choice assumption.

[A1] [[def-axiom-of-choice]]: AC is inherited from [F2] for the path-law construction; no arbitrary choice of an infinite family is made.

## Proof

1.1 Fix finite enumerations of the admissible state-action pairs and the integers $1,\ldots,T$, and let $N=|D|T$ be the number of tape coordinates. Use the corresponding laws $Q(\cdot\mid s,a)$ as the first $N$ kernels in a sequence, append singleton spaces with point-mass kernels afterward, and take the first law to be the prescribed law for the first coordinate. Apply [F2] to this infinite kernel sequence. Its first $N$ coordinates have the product law: each coordinate has its prescribed law and, conditional on all preceding coordinates, its law remains that same $Q(\cdot\mid s,a)$. AC is used only as declared in [A1]. [given, F1, F2, A1, choose]

2.1 Simulate each action from its policy kernel using only the revealed history and its independent internal randomization, then reveal the next unused coordinate in the selected pair's tape. Since the action step does not expose any unused tape coordinate, the selected coordinate remains unrevealed and has conditional law $Q(\cdot\mid s,a)$ by step 1.1. Thus the conditional observation law at every time is the MDP kernel in [F1]. Induction over the finite horizon shows that every observed trajectory has the same probability law as in the original interaction, and each pair's observations are its tape prefix. [given, F1, step 1.1, induction] ∎
