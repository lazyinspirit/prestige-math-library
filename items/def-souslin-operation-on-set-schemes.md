---
id: def-souslin-operation-on-set-schemes
kind: definition
title: "The Souslin operation"
status: published
origin: pipeline
deps: ["def-baire-sequence-space", "def-trees-and-bodies-on-discrete-alphabets"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Definition 4.19 p39 and normalization at the start of Theorem 4.22 p40"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Definition

Work in ZF. For a set $X$ and a scheme $(A_s)_{s\in\mathbb N^{<\omega}}$ of subsets of $X$, with finite prefixes as in [[def-trees-and-bodies-on-discrete-alphabets]] and branches in [[def-baire-sequence-space]], the **Souslin operation** is

$$\mathsf S(A)=\bigcup_{f\in\mathbb N^{\mathbb N}}\bigcap_{n\in\mathbb N}A_{f\upharpoonright n}.$$

The intersection includes $n=0$, so $\mathsf S(A)\subseteq A_\varnothing$. Setting $A_\varnothing=X$ makes that term neutral; setting it empty makes the result empty. All unions and intersections are indexed by sets, so Separation and Union define a subset of $X$.

One may normalize to a decreasing scheme by putting $B_s=\bigcap_{t\subseteq s}A_t$, where prefixes include $s$ itself. If $s\subseteq u$, its prefix family is included in that of $u$, so $B_u\subseteq B_s$. For each fixed branch $f$, membership in every $B_{f\upharpoonright n}$ implies membership in $A_{f\upharpoonright n}$ by taking that prefix itself. Conversely membership in all $A_{f\upharpoonright j}$ implies membership in every $B_{f\upharpoonright n}$, since each prefix of $f\upharpoonright n$ is $f\upharpoonright j$ for some $j\leq n$. The branch intersections, and hence the two Souslin results, are equal. This also covers the empty ambient set and uses no choice.
