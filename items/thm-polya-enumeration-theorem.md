---
id: thm-polya-enumeration-theorem
kind: theorem
title: "Pólya's enumeration theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-fixed-colourings-factor-by-cycle-type,
       thm-cauchy-frobenius-orbit-counting]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Ben Lynn, Polya Theory: The Cycle Index Polynomial"
      url: "https://theory.stanford.edu/~blynn/polya/cycleindex.html"
pipeline_run: null
---

## Statement

Let a finite group $G$ act on a finite set $X$, and let $C$ be a finite colour
set with $m=|C|$. Then the number of $G$-orbits of colourings $X \to C$ is

$$Z_G(m,m,\dots,m)=\frac{1}{|G|}\sum_{g \in G} m^{\sum_{d \ge 1} j_d(g)}.$$

## Facts & Assumptions

**Given:** a finite group action $G \curvearrowright X$ and a finite colour set $C$ with $m=|C|$.

[L1] Cauchy-Frobenius orbit counting averages the fixed-point counts of the acting group ([[thm-cauchy-frobenius-orbit-counting]]).

[L2] A group element with cycle counts $j_d(g)$ fixes exactly $m^{\sum_d j_d(g)}$ colourings ([[lem-fixed-colourings-factor-by-cycle-type]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the induced action of $G$ on the colouring set $C^X$. The number of colouring orbits is therefore $\frac{1}{|G|}\sum_{g \in G} |\{\,f:X \to C : g \cdot f=f\,\}|$. [L1]

2.1 Replace each fixed-colouring count in step 1.1 by the formula from [L2]. This gives $\frac{1}{|G|}\sum_{g \in G} m^{\sum_d j_d(g)}$. [step 1.1, L2]

3.1 By the definition of the cycle index, substituting $s_d=m$ for every $d$ turns $\frac{1}{|G|}\sum_{g \in G}\prod_{d \ge 1} s_d^{j_d(g)}$ into the sum of step 2.1. Hence the orbit count is $Z_G(m,m,\dots,m)$. [step 2.1] ∎
