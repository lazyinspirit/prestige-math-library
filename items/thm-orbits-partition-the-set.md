---
id: thm-orbits-partition-the-set
kind: theorem
title: 'The orbits of a group action are the equivalence classes of $x\sim y$ iff $y=g\cdot x$ for some $g$, and hence partition the acted-on set'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-action, def-orbit-and-stabilizer, def-equivalence-relation, lem-equivalence-classes-partition]
justified_by: []
aliases: []
landmark: true
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

For a left action of $G$ on $X$, define $x\sim y$ when $y=g\cdot x$ for some
$g\in G$. This is an equivalence relation, its equivalence class at $x$ is
$G\cdot x$, and the distinct orbits partition $X$.

## Facts & Assumptions

**Given:** A left action of a group $G$ on a set $X$.

[L1] The action laws are $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$
([[def-group-action]]).

[L2] The orbit at $x$ is $G\cdot x=\{g\cdot x:g\in G\}$
([[def-orbit-and-stabilizer]]).

[L3] Equivalence classes of an equivalence relation partition the underlying set
([[def-equivalence-relation]], [[lem-equivalence-classes-partition]]).

## Proof

**Proof technique:** direct.

1.1 The relation is reflexive: $x=e\cdot x$, so $x\sim x$. [L1, given]

1.2 If $y=g\cdot x$, then $x=g^{-1}\cdot y$, so $x\sim y$ implies $y\sim x$. [L1, given, algebra]

1.3 If $y=g\cdot x$ and $z=h\cdot y$, then $z=(hg)\cdot x$, so $x\sim y$ and $y\sim z$ imply $x\sim z$. [L1, given, algebra]

2.1 Steps 1.1–1.3 show that $\sim$ is an equivalence relation. Its class at $x$ is precisely the set of $y=g\cdot x$, namely $G\cdot x$. [step 1.1, step 1.2, step 1.3, L2, L3]

3.1 Therefore the distinct orbits partition $X$. [step 2.1, L3] ∎
