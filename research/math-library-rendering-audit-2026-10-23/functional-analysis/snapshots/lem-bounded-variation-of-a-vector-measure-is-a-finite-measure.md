---
id: lem-bounded-variation-of-a-vector-measure-is-a-finite-measure
kind: lemma
title: "Bounded variation of a vector measure is a finite measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-banach-valued-vector-measure-and-variation, def-dual-space-of-a-normed-space]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, Section 2.1, bounded-variation convention before Proposition 2.1, printed p. 33"
pipeline_run: phase-2-next-18
---

## Statement

If $\nu:\mathcal A\to X$ is a norm-countably additive vector measure of
bounded variation, then $|\nu|$ is a finite positive countably additive
measure. Moreover, for every $x^*\in X^*$,

$$|x^*\circ\nu|(E)\leq\|x^*\|\,|\nu|(E)$$

for every measurable $E$.

## Facts & Assumptions

[L1] Vector-measure variation is the supremum of norm sums over finite measurable partitions, and bounded variation means finite total variation ([[def-banach-valued-vector-measure-and-variation]]).

[L2] A bounded functional satisfies $|x^*(x)|\leq\|x^*\|\|x\|$ ([[def-dual-space-of-a-normed-space]]).

## Proof

**Proof technique:** direct.

**Given:** A bounded-variation vector measure $\nu$ and a bounded functional $x^*$.

1.1 Prove finite additivity of variation. For disjoint $A,B$, joining finite partitions of $A$ and $B$ shows $|\nu|(A)+|\nu|(B)\leq|\nu|(A\cup B)$ (use partitions within $\varepsilon$ of each supremum). Conversely, intersect any finite partition of $A\cup B$ with $A$ and $B$; finite additivity of $\nu$ and the triangle inequality show that its norm sum is at most $|\nu|(A)+|\nu|(B)$. Taking the supremum gives equality. [given, L1]

1.2 Prove the functional domination estimate. For every finite partition $(A_j)$ of $E$, [L2] gives $\sum_j|x^*(\nu(A_j))|\leq\|x^*\|\sum_j\|\nu(A_j)\|$. Taking suprema as in [L1] proves the displayed inequality, including $x^*=0$ and $E=\varnothing$. [L1, L2]

2.1 Prove countable additivity. Let $E=\bigsqcup_{n\geq1}E_n$. Finite additivity gives $\sum_{n=1}^N|\nu|(E_n)\leq|\nu|(E)$, hence $\sum_n|\nu|(E_n)\leq|\nu|(E)$. For the reverse inequality, take any finite partition $(A_j)$ of $E$. Norm countable additivity gives $\nu(A_j)=\sum_n\nu(A_j\cap E_n)$, so $\sum_j\|\nu(A_j)\|\leq\sum_n\sum_j\|\nu(A_j\cap E_n)\| \leq\sum_n|\nu|(E_n)$. Taking the supremum over $(A_j)$ proves the reverse inequality. [L1, step 1.1]

3.1 Conclude finiteness and all boundary cases. [L1, step 1.2, step 2.1] The empty partition gives $|\nu|(\varnothing)=0$, step 2.1 gives countable additivity, and bounded variation in [L1] gives $|\nu|(E)\leq|\nu|(\Omega)<\infty$. Thus $|\nu|$ is a finite positive measure, and step 1.2 supplies the asserted scalar-variation bound. [L1, step 1.2, step 2.1] ∎