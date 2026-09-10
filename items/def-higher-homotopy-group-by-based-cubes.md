---
id: def-higher-homotopy-group-by-based-cubes
kind: definition
title: Higher homotopy group by based cubes
deps: ["def-homotopy-relative-and-path-homotopy", "cor-homotopy-relative-and-path-homotopy-are-equivalence-relations", "def-based-loops-and-fundamental-group"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Hatcher, Algebraic Topology, Chapter 4
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
      locator: §4.1, Definitions and Basic Constructions, pp.340–346
status: draft
origin: pipeline
---

## Definition

Let $I=[0,1]$, $n\ge1$, and $x_0\in X$. Write $\partial I^n$ for the points with at least one coordinate 0 or 1. The set $\pi_n(X,x_0)$ consists of continuous $a:I^n\to X$ with $a(\partial I^n)=\{x_0\}$, modulo homotopies fixed on that entire boundary. This is a quotient by an equivalence relation by [[cor-homotopy-relative-and-path-homotopy-are-equivalence-relations]].

The proposed product traverses $a$ first in coordinate 1:
$$(a*b)(s,u)=\begin{cases}a(2s,u)&0\le s\le1/2,\\b(2s-1,u)&1/2\le s\le1.\end{cases}$$
Here $u\in I^{n-1}$, absent when $n=1$. The constant map is denoted $e$ and reversal is $a^{-}(s,u)=a(1-s,u)$. The following lemmas establish well-definedness and the group laws. For $n=1$ this is the convention of [[def-based-loops-and-fundamental-group]]. Separately, $\pi_0(X,x_0)$ is the set of path components pointed by the component of $x_0$; no group law on it is asserted.
