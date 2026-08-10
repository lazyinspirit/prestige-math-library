---
id: thm-cauchy-frobenius-orbit-counting
kind: theorem
title: 'Cauchy-Frobenius orbit counting: $|G|\,|X/G|=\sum_{g\in G}|X^g|$ for a finite group action'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-fixed-point-sets-of-a-group-action, thm-orbits-partition-the-set, cor-orbit-stabilizer-cardinality, thm-double-counting, def-sum-over-a-finite-index-set, thm-sum-rule]
justified_by: []
aliases: [thm-burnsides-orbit-counting-lemma]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.3, Burnside's Counting Theorem"
      url: "https://twjudson.github.io/aata-files/aata-html/actions-section-burnsides-counting-theorem.html"
    - title: "K. Conrad, Group Actions, Theorem 3.29"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement

Let a finite group $G$ act on a finite set $X$, and let $X/G$ denote the set
of orbits. Then

$$|G|\,|X/G|=\sum_{g\in G}|X^g|.$$

Equivalently, the number of orbits is the average number of fixed points of an
element of $G$.

## Facts & Assumptions

**Given:** A finite group $G$ acting on a finite set $X$.

[L1] The fixed-point set of $g$ is $X^g=\{x\in X:g\cdot x=x\}$ ([[def-fixed-point-sets-of-a-group-action]]).

[L2] The orbits partition $X$ ([[thm-orbits-partition-the-set]]).

[L3] For every $x\in X$, $|G|=|G_x|\,|G\cdot x|$ ([[cor-orbit-stabilizer-cardinality]]).

[L4] A finite incidence relation can be counted by either family of fibres ([[thm-double-counting]]).

[L5] Finite sums over finite index sets are well-defined ([[def-sum-over-a-finite-index-set]]).

[L6] A finite sum splits along a finite partition of its index set ([[thm-sum-rule]]).

## Proof

**Proof technique:** direct.

1.1 Let $R=\{(g,x)\in G\times X:g\cdot x=x\}$. Counting its fibres over $g$ and using [L1], [L4], and [L5] gives $|R|=\sum_{g\in G}|X^g|$. [L1, L4, L5]

1.2 Counting the same relation over $x$ gives $|R|=\sum_{x\in X}|G_x|$. [L4, L5]

2.1 Split the second sum along the orbit partition using [L2] and [L6]. On an orbit $O=G\cdot x$, [L3] gives $|G_y|=|G|/|O|$ for every $y\in O$, so that orbit contributes $|O|(|G|/|O|)=|G|$. [step 1.2, L2, L3, L5, L6]

3.1 There is one contribution for each orbit in $X/G$, hence $|R|=|G|\,|X/G|$. Combining this with step 1.1 gives the stated identity. [step 1.1, step 2.1, L2, L5] ∎
