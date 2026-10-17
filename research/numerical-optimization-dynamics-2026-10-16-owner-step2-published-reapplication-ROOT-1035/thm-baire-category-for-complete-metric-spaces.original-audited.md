---
id: thm-baire-category-for-complete-metric-spaces
kind: theorem
title: "Under Dependent Choice, a nonempty complete metric space is not a countable union of closed sets with empty interior"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-metric-space, def-dependent-choice, cor-archimedean-reciprocal]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Baire category theorem"
      url: "https://encyclopediaofmath.org/wiki/Baire_theorem"
pipeline_run: null
---

## Statement

Assume the Axiom of Dependent Choice ($\mathrm{DC}$). If a nonempty metric space $X$ is complete, then it is not the union of a sequence of closed sets each having empty interior. Equivalently, the intersection of countably many open dense subsets of $X$ is dense.

## Facts & Assumptions
**Given:** The Axiom of Dependent Choice ($\mathrm{DC}$), closed sets $F_1,F_2,\ldots\subseteq X$ with empty interior, and a nonempty open set $O\subseteq X$.

[L1] A complete metric space contains the limit of every Cauchy sequence ([[def-complete-metric-space]]).

[L2] Under the assumed Axiom of Dependent Choice, a recursively specified sequence of balls is permitted ([[def-dependent-choice]]).

[L3] For every positive real number there is a reciprocal integer smaller than it ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** constructive.

1.1 If $X$ is empty the assertion is vacuous. Otherwise choose an open ball $B_0$ whose closure lies in $O$; this is possible because $O$ is open. [given, algebra]

1.2 Given a nonempty open ball $B_{n-1}$, its intersection with $X\setminus F_n$ is nonempty because $F_n$ has empty interior. Choose an open ball $B_n$ with nonempty closure, $\overline{B_n}\subseteq B_{n-1}\setminus F_n$, and radius below $2^{-n}$. [given, L3, construct]

2.1 Dependent choice gives balls $B_n$ satisfying step 1.2 for every $n$. Choose centres $x_n\in B_n$. [L2, step 1.2, choose]

3.1 The nesting and the radius bound make $(x_n)$ Cauchy: for $m>n$, both $x_m$ and $x_n$ lie in $\overline{B_n}$, so their distance is at most twice the radius of $B_n$, which tends to zero. [step 1.2, step 2.1, L3, algebra]

4.1 Let $x=\lim_nx_n$, supplied by completeness [L1]. For every $n$, the tail lies in the closed set $\overline{B_n}$, so $x\in\overline{B_n}\subseteq B_{n-1}\setminus F_n$. [L1, step 1.2, step 3.1, algebra]

5.1 Thus $x\in O\setminus\bigcup_nF_n$. Every nonempty open $O$ meets this complement, proving both stated formulations. [step 4.1, discharge-construct] ∎
