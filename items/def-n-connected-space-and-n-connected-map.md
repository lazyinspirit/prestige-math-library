---
id: def-n-connected-space-and-n-connected-map
kind: definition
title: N connected space and n connected map
deps: ["thm-long-exact-sequence-of-relative-homotopy-groups", "thm-mapping-cylinder-factorization", "def-path-connected"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Hatcher, Algebraic Topology, Chapter 4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: §4.1 p.346; mapping-cylinder formulation
status: draft
origin: pipeline
---

## Definition

A (−1)-connected space is a nonempty space. For n≥0, an **n-connected space** is nonempty and path-connected and has $\pi_i(X,x)=0$ for every $x\in X$ and $1\le i\le n$. Nonemptiness is additional to [[def-path-connected]], whose path-connectedness condition is vacuous on the empty space.

A (−1)-connected map imposes no condition. A continuous map $f:X\to Y$ of CGWH spaces is **0-connected** if $\pi_0(X)\to\pi_0(Y)$ is surjective. For n≥1 it is **n-connected** if this component-surjectivity condition holds and $\pi_i(M_f,j(X),j(x))$ is the distinguished singleton for every $x\in X$ and $1\le i\le n$. The cylinder factorization is [[thm-mapping-cylinder-factorization]], and the relative groups and pointed sets are those of [[thm-long-exact-sequence-of-relative-homotopy-groups]]. In degree one, triviality means a singleton pointed set. The relative condition is imposed at every source basepoint $x\in X$. The separate component-surjectivity condition ensures that no target component outside the image is omitted.
