---
id: def-relative-homotopy-group
kind: definition
title: Relative homotopy classes and groups
deps: ["def-higher-homotopy-group-by-based-cubes", "def-homotopy-relative-and-path-homotopy"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Hatcher, Algebraic Topology, Chapter 4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: §4.1, Definitions and Basic Constructions, pp.340–346
status: draft
origin: pipeline
---

## Definition

Let $x_0\in A\subseteq X$, with $A$ carrying its subspace topology, and $n\ge1$. Set $F=I^{n-1}\times\{0\}$ and let $J$ be the union of the other faces of $I^n$. A relative representative is a continuous map $a:I^n\to X$ with $a(F)\subseteq A$ and $a(J)=\{x_0\}$. Two representatives are equivalent if connected by a continuous homotopy satisfying these same conditions at every time. Reversal of time and pasting in time give the equivalence relation, with constant homotopies giving reflexivity. Its classes form $\pi_n(X,A,x_0)$, pointed by the constant map.

For $n=1$, $F=\{0\}$ and $J=\{1\}$: representatives are paths from a variable point of $A$ to $x_0$. This is a pointed set, with no group operation asserted. Relative $\pi_0$ is not defined. For $n\ge2$, concatenation uses coordinate 1 as in [[def-higher-homotopy-group-by-based-cubes]], leaving the distinguished last coordinate untouched. The group law is established below. If $A=\{x_0\}$ this is the absolute cubical definition.
