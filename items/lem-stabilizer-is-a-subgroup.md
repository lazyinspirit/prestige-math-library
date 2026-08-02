---
id: lem-stabilizer-is-a-subgroup
kind: lemma
title: "The stabilizer $G_x$ is a subgroup of $G$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-action, def-orbit-and-stabilizer, def-subgroup, lem-subgroup-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brosnan, Orbits and stabilizers"
      url: "https://math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
pipeline_run: null
---

## Statement

For every left action of a group $G$ on a set $X$ and every $x\in X$, the
stabilizer $G_x$ is a subgroup of $G$.

## Facts & Assumptions

**Given:** A left action of $G$ on $X$ and $x\in X$.

[L1] $G_x=\{g\in G:g\cdot x=x\}$ ([[def-orbit-and-stabilizer]]).

[L2] The action satisfies $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$
([[def-group-action]]).

[L3] A nonempty subset $H$ of a group is a subgroup exactly when
$ab^{-1}\in H$ for all $a,b\in H$ ([[lem-subgroup-criterion]], [[def-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 The identity lies in $G_x$, since $e\cdot x=x$. Thus $G_x$ is nonempty. [L1, L2, given]

1.2 If $a,b\in G_x$, then $(ab^{-1})\cdot x=a\cdot(b^{-1}\cdot x)=a\cdot x=x$: indeed $b\cdot x=x$ implies $b^{-1}\cdot x=b^{-1}\cdot(b\cdot x)=x$. Therefore $ab^{-1}\in G_x$. [L1, L2, given, algebra]

2.1 The subgroup criterion now gives $G_x\le G$. [step 1.1, step 1.2, L3] ∎
