---
id: def-coefficient-groups-of-a-generalized-cohomology-theory
kind: definition
title: Coefficient groups of a generalized cohomology theory
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-generalized-cohomology-theory]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Yiannis Loizides, The Atiyah–Hirzebruch Spectral Sequence, §2, printed p. 3"
      url: https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf
      locator: "§2, coefficient convention, printed p. 3"
---

## Definition

Let $\widetilde h$ be a reduced generalized cohomology theory on based CW
complexes in the sense of [[def-reduced-generalized-cohomology-theory]]. Its
**coefficient group** in degree $q\in\mathbb Z$ is
$$h^q(*):=\widetilde h^q(S^0),$$
where $S^0=\{0,1\}$ is based at $1$. Equivalently, if $h$ is the pair theory
associated with $\widetilde h$ by
[[prop-reduced-and-unreduced-generalized-cohomology-theories-correspond]], then
$\widetilde h^q(S^0)=h^q(\mathrm{pt})$: the coefficient group is the value of the
unreduced theory on a point.

The suspension isomorphisms of the theory identify the reduced groups of spheres
in all degrees. Composing the isomorphisms
$$\widetilde h^{n-p}(S^0)\xrightarrow{\ \sigma\ }\widetilde h^{n-p+1}(S^1) \xrightarrow{\ \sigma\ }\cdots\xrightarrow{\ \sigma\ }\widetilde h^{n}(S^p)$$
gives, for every $p\geq0$ and every $n\in\mathbb Z$, a canonical isomorphism
$$\widetilde h^{n}(S^p)\cong h^{n-p}(*).$$
For $p=0$ this is the identity $\widetilde h^n(S^0)=h^n(*)$. These
identifications are compatible with the iterated suspension maps used to
construct them. An arbitrary based self-map of a sphere need not act as the
identity under these identifications; its induced endomorphism is transported
to the corresponding endomorphism of the coefficient group. No dimension axiom is imposed, so the groups
$h^q(*)$ may be nonzero for infinitely many $q$.

## Source notes

Compare [Loizides](https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf), §2,
printed p. 3, for the convention $h^n:=h^n(S^0)=h^n(\mathrm{pt})$ and
Remark 2.2 together with the wedge axiom for the resulting product
decompositions.
