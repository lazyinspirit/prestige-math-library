---
id: lem-uncountable-analytic-splitting
kind: lemma
title: "Uncountable splitting in a Polish space"
status: draft
origin: pipeline
deps: ["def-polish-space", "def-axiom-of-choice"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Lemma 4.16, printed p38"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Statement

In ZFC every uncountable subset $A$ of a Polish space has two disjoint open neighbourhoods each meeting $A$ uncountably. They may be chosen in a countable metric basis with arbitrarily small positive diameter bounds. Analyticity of $A$ is not required.

## Facts & Assumptions

[F1] [[def-polish-space]] supplies a compatible metric and a countable dense set.

[A1] Assume [[def-axiom-of-choice]].

## Proof

**Given:** Uncountable $A\subseteq X$ and a desired bound $\epsilon>0$.

1.1 A countable dense set with positive rational radii gives an enumerated metric basis $(U_n)$: inside any ball around a point, choose a dense centre sufficiently near the point and a rational radius large enough to contain the point but small enough that its ball stays inside the original ball. For each n with nonempty countable $A\cap U_n$, A1 selects an enumeration of that intersection; an injection into $\mathbb N$ gives such a surjection by filling unused indices with the value at the least occupied index. Pairing n and enumeration indices shows that $M=\bigcup\{A\cap U_n:A\cap U_n\text{ is countable}\}$ is countable; empty terms contribute nothing. If there are no nonempty terms then M is empty. [F1, A1]

2.1 The set $A\setminus M$ is uncountable: otherwise an enumeration of it and one of M, interleaved, would enumerate A. In particular it contains distinct x,y. Every basis neighbourhood of either meets A uncountably, by the definition of M. Take disjoint balls around x,y with radii less than $\min(d(x,y)/3,\epsilon/3)$, and refine each at its centre to a basis neighbourhood. The refinements are disjoint, each has diameter less than $\epsilon$, and both have uncountable intersection with A. This proves the statement for every positive bound. QED. [F1, step 1.1]
