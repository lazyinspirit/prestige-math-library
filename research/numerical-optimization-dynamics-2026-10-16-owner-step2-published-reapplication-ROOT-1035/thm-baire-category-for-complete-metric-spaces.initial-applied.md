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

[L2] Under the assumed Axiom of Dependent Choice, a serial sequence of states recording each ball together with its centre and positive radius is permitted ([[def-dependent-choice]]).

[L3] For every positive real number there is a reciprocal integer smaller than it ([[cor-archimedean-reciprocal]]).

## Proof

**Proof technique:** constructive.

1.1 If $X$ is empty the assertion is vacuous. Otherwise choose $x_0\in O$ and $r_0>0$ such that $\overline{B(x_0,r_0)}\subseteq O$; openness supplies a ball about $x_0$ in $O$, and a smaller positive radius has this property. Put $B_0=B(x_0,r_0)$. [given, algebra]

1.2 Given $n\ge1$ and a state $(n-1,x,r)$ with $r>0$, the open set $B(x,r)\setminus F_n$ is nonempty because $F_n$ is closed with empty interior. Choose $y$ in that set and $s>0$ small enough that $\overline{B(y,s)}\subseteq B(x,r)\setminus F_n$ and $s<2^{-n}$; openness and [L3] permit this for each individual state. Thus the relation from $(n-1,x,r)$ to $(n,y,s)$ with these properties is serial on the set of triples $(k,z,q)\in\mathbb N\times X\times(0,\infty)$. [given, L3, construct]

2.1 Apply dependent choice to the serial state relation in step 1.2, starting at $(0,x_0,r_0)$. Its successive states have first coordinate $n$, so write them $(n,x_n,r_n)$ and put $B_n=B(x_n,r_n)$. The centres and radii are coordinate projections of this single DC sequence, not separately chosen from countably many balls. They satisfy $x_n\in B_n$, $r_n<2^{-n}$ for $n\ge1$, and $\overline{B_n}\subseteq B_{n-1}\setminus F_n$. [L2, step 1.1, step 1.2, construct]

3.1 The nesting and the radius bound make $(x_n)$ Cauchy: for $m>n$, both $x_m$ and $x_n$ lie in $\overline{B_n}$, so their distance is at most twice the radius of $B_n$, which tends to zero. [step 1.2, step 2.1, L3, algebra]

4.1 Let $x=\lim_nx_n$, supplied by completeness [L1]. For every $n$, the tail lies in the closed set $\overline{B_n}$, so $x\in\overline{B_n}\subseteq B_{n-1}\setminus F_n$. [L1, step 1.2, step 3.1, algebra]

5.1 Thus $x\in O\setminus\bigcup_nF_n$. Every nonempty open $O$ meets this complement, proving both stated formulations. [step 4.1, discharge-construct] ∎
