---
id: thm-cantor-cubes-are-ccc
kind: theorem
title: "Under choice, every Cantor cube $2^I$ satisfies ccc"
status: published
origin: session
deps: [lem-uncountable-delta-system-for-finite-sets, def-product-topology, def-standard-topologies, def-countable-chain-condition, def-axiom-of-choice]
aliases: []
landmark: true
proof_strategy: contradiction
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
Assuming choice, every Cantor cube $2^I$ is ccc.
## Facts & Assumptions
**Given:** The Axiom of Choice and the Cantor cube $2^I$ with its product topology.

[A1] Choice selects from an arbitrary family of nonempty sets ([[def-axiom-of-choice]]).

[F1] A basic cylinder specifies values in only finitely many coordinates, and these cylinders form a basis for the product topology ([[def-product-topology]], [[def-standard-topologies]]).

[L1] Every uncountable family of finite sets has an uncountable $\Delta$-subfamily ([[lem-uncountable-delta-system-for-finite-sets]]).
## Proof

**Proof technique:** contradiction.

1.1 Suppose $\mathcal U$ is an uncountable pairwise-disjoint family of nonempty open sets. By [A1] and [F1], choose for every $U\in\mathcal U$ a nonempty basic cylinder $[p_U]\subseteq U$, where $p_U$ is a function from a finite support $F_U\subseteq I$ to $2$. Distinct $U$ give distinct cylinders. [A1, F1, assume-contra, construct]

2.1 By [L1], after passing to an uncountable subfamily the supports form a $\Delta$-system with finite root $R$. There are only finitely many functions $R\to2$, so one further uncountable subfamily has the same restriction $p_U\restriction R$. [L1, step 1.1]

3.1 Choose two members of that subfamily. Their supports meet exactly in $R$ and their partial functions agree there, so the union of the two partial functions extends—by assigning $0$ elsewhere—to a point of $2^I$ lying in both cylinders. The corresponding members of $\mathcal U$ intersect, a contradiction. Thus every such family is at most countable and $2^I$ is ccc. [step 1.1, step 2.1, discharge-contradiction] ∎
