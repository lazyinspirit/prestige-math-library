---
id: rem-proj-does-not-recover-graded-ring-literally
kind: remark
title: "Proj forgets irrelevant torsion and grading scale"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - lem-proj-irrelevant-and-nilpotent-boundaries
  - lem-projective-space-saturation-local-criterion
  - lem-proj-veronese-invariance
  - def-twisting-sheaf-proj
forward_refs: [cex-proj-graded-ring-not-faithful]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
    - title: "Gao-Zhang, Lectures on Algebraic Geometry, Chapter 5"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
---

## Remark

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the cited
twisting-sheaf construction and the example below.

The scheme $\operatorname{Proj}S$ does not determine the graded ring
$S=\bigoplus_{d\ge0}S_d$ up to graded isomorphism; two independent losses occur,
and the twist data must be tracked separately.

**Irrelevant torsion is forgotten.** By
[[lem-proj-irrelevant-and-nilpotent-boundaries]], an element $m$ of a graded
$S$-module $M$ that is annihilated by a power of $S_+$ has zero image in the
full localisation $M_f$ for every homogeneous $f\in S_+$ of positive degree;
every degree-zero fraction formed from it therefore vanishes in
$M_{(f)}=\Gamma(D_+(f),\widetilde M)$. Applied to $M=S$ or to a homogeneous quotient, this says that
passing from a graded module to $\widetilde M$ kills all $S_+$-power torsion:
quotients by ideals differing only in such torsion, and in particular the
passage $I\mapsto I^{\mathrm{sat}}$ of
[[lem-projective-space-saturation-local-criterion]], are invisible to the
associated sheaves.

**Positive Veronese regradings are invisible.** By
[[lem-proj-veronese-invariance]], for every $d\ge1$ the Veronese regrading
$S^{(d)}=\bigoplus_{n\ge0}S_{dn}$ satisfies
$\operatorname{Proj}S\cong\operatorname{Proj}S^{(d)}$, and under this
isomorphism the degree-one twist of the Veronese corresponds canonically to
the $d$-th twist of $S$:
$\mathcal O_{\operatorname{Proj}S^{(d)}}(1)$ is identified with
$\mathcal O_{\operatorname{Proj}S}(d)$. These twists may also happen to be
isomorphic to $\mathcal O_{\operatorname{Proj}S}(1)$ in special cases. So even when the underlying graded
rings are not isomorphic, the spaces agree as schemes.

**Consequences for twist data.** Because of
[[def-twisting-sheaf-proj]], the twisting sheaves are constructed from the
shifted modules $S(n)$; for an arbitrary nonnegatively graded ring the sheaf
$\mathcal O_X(1)$ need not be invertible and the multiplication maps
$\mathcal O_X(m)\otimes\mathcal O_X(n)\to\mathcal O_X(m+n)$ need not be
isomorphisms. Degree-one generation gives an invertibility criterion in
[[thm-twisting-sheaf-invertible-standard-graded]]. Recovering a chosen graded
presentation from the geometry therefore requires retaining extra graded
coordinate data; the graded ring itself is not a function of the scheme
$\operatorname{Proj}S$ alone.

## Remarks

The example [[cex-proj-graded-ring-not-faithful]] exhibits the smallest instance: for a
field $k$, the graded $k$-algebras $k[x,y]$ with $\deg x=\deg y=1$ and its
second Veronese $k[x^2,xy,y^2]$ have isomorphic Proj but degree-one parts of
dimensions $2$ and $3$.
