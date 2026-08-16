---
id: ex-a-covering-quotient-of-a-simply-connected-space-need-not-be-simply-connected
kind: example
title: "A covering quotient of a simply connected space need not be simply connected"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-circle-as-real-line-mod-integers, thm-real-line-covers-real-line-mod-integers, cor-real-line-mod-integers-is-not-simply-connected, thm-convex-subsets-have-trivial-fundamental-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Ch. 1, Section 1.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 1, Section 5"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Example

The real line is simply connected, but its quotient by integer translations is
not. The canonical projection

$$p:\mathbb R\longrightarrow\mathbb R/\mathbb Z$$

is both a quotient map and a covering map. Thus neither a quotient map nor a
covering map transfers simple connectedness from its total space to its base in
general.

## Facts & Assumptions

**Given:** The real line, its integer-translation quotient, and the canonical projection $p$.

[L1] If $n\ge1$ and $C\subseteq\mathbb R^n$ is nonempty and convex, then $C$ is simply connected ([[thm-convex-subsets-have-trivial-fundamental-group]]).

[L2] $p:\mathbb R\to\mathbb R/\mathbb Z$ is the quotient projection defining the quotient circle ([[def-circle-as-real-line-mod-integers]]).

[L3] $p:\mathbb R\to\mathbb R/\mathbb Z$ is a covering map ([[thm-real-line-covers-real-line-mod-integers]]).

[L4] $\mathbb R/\mathbb Z$ is not simply connected ([[cor-real-line-mod-integers-is-not-simply-connected]]).

## Verification

**Proof technique:** direct.

1.1 The real line is a nonempty convex subset of $\mathbb R^1$, so [L1] with $n=1$ makes $\mathbb R$ simply connected. [L1]

1.2 The same explicit map $p$ is a quotient map by [L2] and a covering map by [L3]. [L2, L3]

2.1 Its base is not simply connected by [L4], whereas its total space is simply connected by step 1.1. Step 1.2 therefore supplies both announced failures of preservation. [step 1.1, step 1.2, L4] ∎
