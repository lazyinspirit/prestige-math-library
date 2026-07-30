---
id: fs-lindelofness-is-hereditary
kind: false-statement
title: "Refuted: Lindelöfness is hereditary"
status: published
origin: session
deps: [def-compactness-variants, def-compact-space, def-one-point-compactification, thm-one-point-compactification-properties, def-standard-topologies, def-locally-compact-space, def-hausdorff-space, thm-r-uncountable, def-hereditary-property]
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
## Statement
Lindelöfness is hereditary.
## Facts & Assumptions

**Given:** The uncountable discrete space $D=\mathbb R$ and its one-point compactification $D^*$.

[L1] The one-point compactification $D^*$ is compact and contains $D$ as an open subspace ([[thm-one-point-compactification-properties]]).

[L2] Compactness gives a finite subcover for every open cover, Lindelöfness gives an at most countable subcover, and a property is hereditary when every subspace has it ([[def-compactness-variants]], [[def-hereditary-property]]).

[L3] The real line is uncountable and every subset of a discrete space is open ([[thm-r-uncountable]], [[def-standard-topologies]]).

[F1] A space is locally compact when every point has a compact neighbourhood, and Hausdorff when distinct points have disjoint open neighbourhoods ([[def-locally-compact-space]], [[def-hausdorff-space]]).
## Refutation

**Proof technique:** direct.

1.1 The discrete space $D$ is Hausdorff because distinct singleton neighbourhoods are disjoint, and locally compact because each point has the compact singleton neighbourhood; it is not compact because its singleton cover has no finite subcover. Thus its one-point compactification has the usual compact Hausdorff behavior, and in any case [L1] makes $D^*$ compact with $D$ as an open subspace. By [L2], $D^*$ is Lindelöf. [L1, L2, L3, F1]

1.2 The subspace $D$ is discrete and has the open cover $\{\{x\}:x\in D\}$; any subcover must contain every singleton, so no at most countable subfamily covers the uncountable set $D$. [L3]

2.1 Thus the Lindelöf space $D^*$ has the non-Lindelöf subspace $D$, so Lindelöfness is not hereditary. [step 1.1, step 1.2, L2] ∎
