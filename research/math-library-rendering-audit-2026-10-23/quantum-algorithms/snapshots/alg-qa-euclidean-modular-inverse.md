---
id: alg-qa-euclidean-modular-inverse
kind: algorithm
title: Extended-Euclidean modular inverse with bounded bit cost
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
  - thm-division-algorithm-in-z
  - thm-euclidean-algorithm
  - thm-unit-criterion-modulo-n
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§5, PDF pp. 29–32: cyclic discrete logarithm and inversion of a sampled residue"
    - title: "D. Proos and C. Zalka, Shor's discrete logarithm quantum algorithm for elliptic curves"
      url: "https://arxiv.org/pdf/quant-ph/0301141"
      locator: "§5, PDF pp. 13–23: extended-Euclidean algorithm and bounded-step analysis"
---

## Definition

Input an integer $n\ge2$ and the least residue $c\in\{0,\ldots,n-1\}$. Set $(r_{-1},r_0)=(n,c)$ and $(s_{-1},s_0)=(0,1)$. For $i=0,1,\ldots$, divide
$$
r_{i-1}=a_i r_i+r_{i+1},\qquad 0\le r_{i+1}<r_i,
$$
and update $s_{i+1}$ to the least residue of $s_{i-1}-a_i s_i$ modulo $n$. Stop at the first index $i$ for which $r_{i+1}=0$. Return the least residue $s_i$ if $r_i=1$, and return `NO_INVERSE` otherwise. For $c=0$, the first division has zero divisor under this indexing; handle it separately by returning `NO_INVERSE`.

The algorithm uses binary integer arithmetic. Its correctness and $O(B^3)$ bit bound for $B=\lceil\log_2(n+1)\rceil$ are proved in [[thm-qa-euclidean-modular-inverse-correctness-cost]].
