---
id: def-central-product-of-two-groups-along-an-isomorphism-of-central-subgroups
kind: definition
title: "The central product $G\\circ_\\alpha H$ of two groups along an isomorphism of central subgroups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-external-direct-product-of-groups, thm-external-direct-product-is-a-group, def-center-of-a-group, def-group-isomorphism-and-automorphism, def-quotient-group, def-normal-subgroup, def-subgroup]
justified_by: [lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup]
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, Theorem 3.6 and \u00a73.1"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Definition 2.34"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. Kaur and A. Kulshrestha, Characters of real special 2-groups, \u00a72.2"
      url: "https://arxiv.org/pdf/1510.06583"
pipeline_run: null
---

## Definition

Let $G$ and $H$ be groups, let $Z_1\le Z(G)$ and $Z_2\le Z(H)$ be subgroups of
their centres ([[def-center-of-a-group]], [[def-subgroup]]), and let
$\alpha:Z_1\to Z_2$ be an isomorphism ([[def-group-isomorphism-and-automorphism]]).
Inside the external direct product $G\times H$
([[def-external-direct-product-of-groups]], [[thm-external-direct-product-is-a-group]])
put

$$N:=\{(z,\alpha(z)^{-1}):z\in Z_1\}.$$

For groups $G,H$ with central subgroups $Z_1\le Z(G)$, $Z_2\le Z(H)$ and an
isomorphism $\alpha:Z_1\to Z_2$, the central product $G\circ_\alpha H$ is the
quotient of $G\times H$ by $N=\{(z,\alpha(z)^{-1}):z\in Z_1\}$, formed as in
[[def-quotient-group]]:

$$G\circ_\alpha H:=(G\times H)/N .$$

That $N$ is a normal subgroup, so that the quotient is defined
([[def-normal-subgroup]]), is proved in
[[lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup]].

Write $\pi:G\times H\to G\circ_\alpha H$ for the quotient map and
$\bar g:=\pi(g,e)$, $\bar h:=\pi(e,h)$ for the canonical images of $g\in G$ and
$h\in H$.

## Remarks

The identification is along $\alpha$ and reverses the second coordinate: killing
$(z,\alpha(z)^{-1})$ is exactly what makes $\bar z=\overline{\alpha(z)}$ hold in
the quotient, so the two identified central subgroups become one. Killing
$(z,\alpha(z))$ instead would identify $z$ with $\alpha(z)^{-1}$, which is the
central product along $\alpha^{-1}$ composed with inversion rather than along
$\alpha$.

Craven writes $G*H$ for a central product and van Beek writes $G\circ H$; the
notation $\circ_\alpha$ is used here because the isomorphism is part of the data
and different choices of $\alpha$ can give non-isomorphic quotients.

Taking $Z_1=Z_2=1$ gives $N=1$ and recovers the direct product, so the
construction is a genuine generalisation and not a separate object.
