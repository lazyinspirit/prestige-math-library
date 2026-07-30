---
id: cex-separability-is-not-hereditary-worked
kind: counterexample
title: "Assuming choice, a separable space with a nonseparable subspace: the lower-limit plane and its antidiagonal"
status: published
origin: session
deps: [ex-countability-profile-of-the-lower-limit-plane, fs-separability-is-hereditary]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "UCR General Topology Notes", url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"}]}
pipeline_run: null
---
## Statement refuted
Separability is hereditary.
## Facts & Assumptions
**Given:** The lower-limit plane $P$ and its antidiagonal $A=\{(x,-x):x\in\mathbb R\}$.

[L1] The lower-limit plane is separable, and its antidiagonal is an uncountable discrete subspace ([[ex-countability-profile-of-the-lower-limit-plane]]).

[L2] The false statement being exhibited asserts that every subspace of a separable space is separable ([[fs-separability-is-hereditary]]).

## Counterexample
**Proof technique:** direct.

1.1 By [L1], the space $P$ is separable. [L1]

1.2 By [L1], the subspace $A$ is uncountable and discrete, so it has no at most countable dense subset. [L1]

2.1 Thus $P$ is a separable space with the nonseparable subspace $A$, contradicting the assertion recalled in [L2]. [step 1.1, step 1.2, L2] ∎
