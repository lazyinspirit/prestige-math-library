---
id: def-coefficient-groups-of-a-generalized-homology-theory
kind: definition
title: Coefficient groups of a generalized homology theory
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-generalized-homology-theory]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "James Davis and Paul Kirk, Lecture Notes in Algebraic Topology, Definition 8.28, printed pp. 229–230"
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: "Definition 8.28, printed pp. 229–230"
---

## Definition

Let $\widetilde h$ be a reduced generalized homology theory on based CW
complexes in the sense of [[def-reduced-generalized-homology-theory]]. Its
**coefficient group** in degree $q\in\mathbb Z$ is
$$h_q(*):=\widetilde h_q(S^0),$$
where $S^0=\{0,1\}$ is based at $1$. Equivalently, if $h$ is the pair theory
associated with $\widetilde h$, then $\widetilde h_q(S^0)=h_q(\mathrm{pt})$.

Composing the homological suspension isomorphisms
$$\widetilde h_{n-p}(S^0)\xrightarrow{\ \sigma\ }\widetilde h_{n-p+1}(S^1) \xrightarrow{\ \sigma\ }\cdots\xrightarrow{\ \sigma\ }\widetilde h_{n}(S^p)$$
gives, for every $p\geq0$ and every $n\in\mathbb Z$, a canonical isomorphism
$$\widetilde h_{n}(S^p)\cong h_{n-p}(*).$$
For $p=0$ this is the identity $\widetilde h_n(S^0)=h_n(*)$. The homological
coefficient groups of a sphere are therefore read in the same degree-shifted way
as the cohomological coefficient groups; the covariant theory itself is defined
separately in [[def-reduced-generalized-homology-theory]]. No dimension axiom is
imposed.

## Source notes

Compare [Davis–Kirk](https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf),
Definition 8.28, printed pp. 229–230, for the coefficient groups
$h_n(*)=h_n(S^0)$ of a reduced generalized homology theory.
