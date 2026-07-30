---
id: ex-cocountable-closure-detected-by-a-net-not-a-sequence
kind: example
title: "In the cocountable topology on $\\mathbb{R}$, a closure point outside $[0,1]$ is reached by a net in $[0,1]$ but by no sequence in $[0,1]$"
status: published
origin: session
deps: [thm-closure-characterised-by-nets, def-standard-topologies, def-sequence-convergence-top, def-countable, cor-interval-uncountable]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
pipeline_run: null
---

## Example

Give $\mathbb R$ the cocountable topology, let $A=[0,1]$, and let $p=2$. Then $p\in\overline A$, hence a net in $A$ converges to $p$, but no sequence in $A$ converges to $p$.

## Facts & Assumptions

**Given:** The cocountable topology on $\mathbb R$, $A=[0,1]$, and $p=2$.

[L1] Nonempty cocountable opens have at most countable complements ([[def-standard-topologies]], [[def-countable]]).

[L2] $[0,1]$ is uncountable ([[cor-interval-uncountable]]).

[L3] A sequence converges only if it is eventually in every neighbourhood of its proposed limit ([[def-sequence-convergence-top]]).

[L4] A point lies in the closure of a subset exactly when some net in that subset converges to it ([[thm-closure-characterised-by-nets]]).


## Verification

**Proof technique:** constructive.

1.1 Every neighbourhood $N$ of $2$ has at most countable complement, so it meets the uncountable set $A$. Hence $2\in\overline A$, and [L4] supplies a net in $A$ converging to $2$. [L1, L2, L4, construct]

1.2 Let $(a_n)$ be a sequence in $A$. Its range is at most countable and omits $2$, so $\mathbb R\setminus\{a_n:n\in\mathbb N\}$ is a neighbourhood of $2$ containing none of its terms. Thus $(a_n)$ does not converge to $2$. [L1, L3]

2.1 The net from step 1.1 detects the closure point, whereas no sequence in $A$ does. [step 1.1, step 1.2, discharge-construct] ∎
