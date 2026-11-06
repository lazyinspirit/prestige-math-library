---
id: def-f4-jacobian-torsor-on-etale-site
kind: definition
title: "Torsors under a specified relative group scheme on the small étale site"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC is inherited through the stated site, sheaf, and torsor constructions."
deps:
  - def-f4-elliptic-fibration-with-section
  - def-f4-genus-one-fibration
  - def-etale-morphism-schemes
  - def-gts-small-etale-site-of-a-scheme
  - lem-gts-etale-coverings-form-a-grothendieck-site
  - def-gts-presheaf-and-sheaf-on-a-site
  - lem-gts-etale-representable-presheaf-is-sheaf
  - thm-gts-presheaf-sheafification-exists
  - def-gts-etale-torsors-and-contracted-product
  - thm-gts-etale-torsor-classes-form-abelian-group
dependency_roles:
  def-f4-elliptic-fibration-with-section: mathematical-premise
  def-f4-genus-one-fibration: mathematical-premise
  def-etale-morphism-schemes: mathematical-premise
  def-gts-small-etale-site-of-a-scheme: mathematical-premise
  lem-gts-etale-coverings-form-a-grothendieck-site: mathematical-premise
  def-gts-presheaf-and-sheaf-on-a-site: mathematical-premise
  lem-gts-etale-representable-presheaf-is-sheaf: mathematical-premise
  thm-gts-presheaf-sheafification-exists: mathematical-premise
  def-gts-etale-torsors-and-contracted-product: mathematical-premise
  thm-gts-etale-torsor-classes-form-abelian-group: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Volker Braun and David R. Morrison, F-theory on Genus-One Fibrations, arXiv:1401.7844v2"
      url: "https://arxiv.org/pdf/1401.7844v2"
      locator: "§§1–2 and §4.3; Jacobians, genus-one torsors, and the scope of the H^1 notation."
    - title: "Timo Weigand, TASI Lectures on F-theory, arXiv:1806.01854v1"
      url: "https://arxiv.org/pdf/1806.01854v1"
      locator: "§8.2, pp. 91–93; genus-one fibrations and torsors."
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I"
      url: "https://www.jmilne.org/math/CourseNotes/LEC.pdf"
      locator: "§§5–6, printed pp. 38–49, and §11, pp. 76–77; étale sheaves and torsors."
verification:
  precheck: n/a
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition
Let $B$ be an integral smooth complex scheme. Choose a dense open $B^\circ\subseteq B$ and a smooth commutative group scheme $J^\circ\to B^\circ$ of relative dimension one with a specified identity section; assume this group scheme is given, rather than inferring its existence from an arbitrary genus-one fibration. For every étale $B^\circ$-scheme $U\to B^\circ$, define
$$J(U):=\operatorname{Hom}_U(U,J^\circ\times_{B^\circ}U),$$
with restrictions by pullback and group law induced by multiplication on $J^\circ$. This is a sheaf of abelian groups on the small étale site. A **$J$-torsor** is a sheaf with a right $J$-action that is étale locally equivariantly isomorphic to $J$. The group $\operatorname{Sha}_{\mathrm{et}}(J^\circ/B^\circ)$ is the abelian group of isomorphism classes under contracted product.

A flat genus-one fibration $\pi:Y\to B$ restricts to a $J^\circ$-torsor on $B^\circ$ only when $Y|_{B^\circ}$ is equipped with a $J^\circ$-action that is étale locally simply transitive, equivalently when it is étale locally isomorphic to $J^\circ$ as a $J^\circ$-torsor. An isomorphism of abstract genus-one curves alone does not specify this action. Representability of the resulting torsor sheaf by a scheme and extension across $B\setminus B^\circ$ are separate conditions.

## Definition references

[[def-f4-genus-one-fibration]]

[[def-f4-elliptic-fibration-with-section]]

[[def-etale-morphism-schemes]]

[[def-gts-small-etale-site-of-a-scheme]]

[[lem-gts-etale-coverings-form-a-grothendieck-site]]

[[def-gts-presheaf-and-sheaf-on-a-site]]

[[lem-gts-etale-representable-presheaf-is-sheaf]]

[[def-gts-etale-torsors-and-contracted-product]]

[[thm-gts-etale-torsor-classes-form-abelian-group]]

[V. Braun and D. R. Morrison, §§1–2 and 4.3](https://arxiv.org/pdf/1401.7844v2)

[T. Weigand, §8.2](https://arxiv.org/pdf/1806.01854v1)

[Milne, Lectures on Étale Cohomology, Chapter I, §§5–6 and §11](https://www.jmilne.org/math/CourseNotes/LEC.pdf)

## Remarks

This local definition deliberately calls the object a torsor class group, not derived $H^1_{\acute e t}(B^\circ,J^\circ)$ and not an arithmetic Tate–Shafarevich group. The research source's $H^1(B,A)$ shorthand is not identified with this sheaf-theoretic group without a separate comparison theorem and matched hypotheses. The generic pointed-curve law established in [[def-f4-elliptic-fibration-with-section]] supplies a group over $K(B)$. The present definition still assumes the specified smooth commutative group scheme $J^\circ$ on $B^\circ$ and its action: a generic-fiber law alone does not construct that relative group scheme or a torsor under it.
