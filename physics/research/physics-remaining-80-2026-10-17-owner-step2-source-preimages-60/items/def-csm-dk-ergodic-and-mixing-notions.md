---
id: def-csm-dk-ergodic-and-mixing-notions
kind: definition
title: Ergodicity and mixing for a selected probability map
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-measure-preserving-transformation-and-system
  - def-ergodic-measure-preserving-system
  - def-strong-and-weak-mixing
dependency_roles:
  def-measure-preserving-transformation-and-system: mathematical-premise
  def-ergodic-measure-preserving-system: mathematical-premise
  def-strong-and-weak-mixing: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Peter Sarig, Lecture Notes on Ergodic Theory, Definition 1.4
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
    - title: E. H. El Abdalaoui and F. Vivaldi, Ergodic Theory and Dynamical Systems, Definitions 2.32 and 2.35
      url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
---

## Definition

Let $(X,\mathcal A,\mu,T)$ be a probability-preserving system: $\mu(X)=1$,
$T:X\to X$ is measurable, and $\mu(T^{-1}E)=\mu(E)$ for every
$E\in\mathcal A$
([[def-measure-preserving-transformation-and-system]]). The **ergodicity**
convention is that every set invariant modulo $\mu$-null sets has measure
zero or one, as in [[def-ergodic-measure-preserving-system]].

For $E,F\in\mathcal A$ and integer $n\ge0$, put
$$d_n(E,F)=\mu(E\cap T^{-n}F)-\mu(E)\mu(F).$$
The map is **strongly mixing** if $d_n(E,F)\to0$ for every measurable pair
$(E,F)$. It is **weakly mixing** if
$$\frac1N\sum_{n=0}^{N-1}|d_n(E,F)|\longrightarrow0$$
for every such pair as $N\to\infty$. Thus the absolute value is inside the
Cesàro average, exactly as in [[def-strong-and-weak-mixing]]. These are
properties of the selected discrete map $T$ and its selected invariant
probability $\mu$; no flow-level property is implicit.
