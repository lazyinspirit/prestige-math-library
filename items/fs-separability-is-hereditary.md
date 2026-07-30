---
id: fs-separability-is-hereditary
kind: false-statement
title: "Refuted: separability is hereditary"
status: published
origin: session
deps: [def-separable-space, def-product-topology, def-subspace-topology-top, def-interval, thm-basis-criterion, thm-rationals-countable, lem-rat-embeds-dense, thm-r-uncountable, thm-product-of-countable, def-hereditary-property]
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
Separability is hereditary.
## Facts & Assumptions

**Given:** The lower-limit plane $P$ and its antidiagonal $A=\{(x,-x):x\in\mathbb R\}$.

[L1] Products of at most countable sets are at most countable ([[thm-product-of-countable]]).

[L2] The rational numbers are at most countable and dense in the real line, and the real line is uncountable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[thm-r-uncountable]]).

[L3] Separability is the existence of an at most countable dense subset, and a property is hereditary when every subspace has it ([[def-separable-space]], [[def-hereditary-property]]).

[F1] The half-open intervals $[a,b)$, $a<b$, satisfy the basis criterion, and products of their members form a basis for the product topology ([[def-interval]], [[thm-basis-criterion]], [[def-product-topology]]).
## Refutation

**Proof technique:** direct.

1.1 The half-open intervals cover $\mathbb R$, and if two contain $x$, then $[x,c)$ lies in their intersection for some $c>x$; hence [F1] makes them a basis. The rational grid $\mathbb Q\times\mathbb Q$ is at most countable by [L1] and [L2], and density of $\mathbb Q$ makes it meet every nonempty basic lower-limit rectangle, so it is dense in $P$. [L1, L2, L3, F1]

1.2 For each $x\in\mathbb R$, the basic rectangle $[x,x+1)\times[-x,-x+1)$ meets $A$ only in $(x,-x)$; hence $A$ is discrete in its subspace topology. [given]

2.1 The map $x\mapsto(x,-x)$ is a bijection from the uncountable set $\mathbb R$ onto $A$, so a dense subset of the discrete space $A$ must be all of $A$ and cannot be at most countable. [step 1.2, L2, L3]

3.1 Thus $P$ is separable by step 1.1 but has the nonseparable subspace $A$ by step 2.1, refuting heredity of separability. [step 1.1, step 2.1, L3] ∎
