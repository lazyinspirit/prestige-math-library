---
id: def-gts-etale-torsors-and-contracted-product
kind: definition
title: "Étale torsors and contracted products"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 4
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC is inherited from the étale site, its sheafification construction, and the representable-sheaf lemma."
deps:
  - def-gts-presheaf-and-sheaf-on-a-site
  - def-gts-small-etale-site-of-a-scheme
  - lem-gts-etale-coverings-form-a-grothendieck-site
  - lem-gts-etale-representable-presheaf-is-sheaf
  - thm-gts-presheaf-sheafification-exists
  - def-axiom-of-choice
dependency_roles:
  def-gts-presheaf-and-sheaf-on-a-site: mathematical-premise
  def-gts-small-etale-site-of-a-scheme: mathematical-premise
  lem-gts-etale-coverings-form-a-grothendieck-site: mathematical-premise
  lem-gts-etale-representable-presheaf-is-sheaf: mathematical-premise
  thm-gts-presheaf-sheafification-exists: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by:
  - thm-gts-etale-torsor-classes-form-abelian-group
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, Section 59.27"
      url: "https://stacks.math.columbia.edu/tag/03PF"
      locator: "The small étale site and sheaf-valued section functors."
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I"
      url: "https://www.jmilne.org/math/CourseNotes/LEC.pdf"
      locator: "§§5–6, printed pp. 38–49, for sheaves; §11, printed pp. 76–77, for torsors and cocycles."
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
Let $B$ be a scheme and let $J\to B$ be a commutative group scheme, meaning a $B$-scheme with multiplication, identity, and inverse morphisms satisfying the group axioms. On $B_{\acute e t}$ its section functor $U\mapsto\operatorname{Hom}_B(U,J)$ is a sheaf of abelian groups, with operations induced sectionwise. A **right $J$-torsor** is a sheaf $P$ of sets on $B_{\acute e t}$ with a right action of this group sheaf such that there is a declared étale cover $(U_i\to B)$ on which $P|_{U_i}$ is equivariantly isomorphic to $J|_{U_i}$. Here restriction to the slice site over $U_i$ is $P|_{U_i}(V\to U_i)=P(V\to B)$; the composite $V\to B$ is étale. For two right torsors $P,Q$, define their **contracted product** $P\times^JQ$ as the associated sheaf of the orbit presheaf of $P\times Q$ under the anti-diagonal action $(p,q)\cdot g=(p\cdot g,q\cdot g^{-1})$; its right $J$-action is $[p,q]\cdot h=[p\cdot h,q]$. Write $\operatorname{Sha}_{\mathrm{et}}(J/B)$ for the set of isomorphism classes of right $J$-torsors; contracted product makes this set an abelian group.

## Definition references

[[def-gts-presheaf-and-sheaf-on-a-site]]

[[lem-gts-etale-representable-presheaf-is-sheaf]]

[[thm-gts-presheaf-sheafification-exists]]

[[lem-gts-etale-coverings-form-a-grothendieck-site]]

[The Stacks Project, Section 59.27](https://stacks.math.columbia.edu/tag/03PF)

[Milne, Lectures on Étale Cohomology, Chapter I, §§5–6 and §11](https://www.jmilne.org/math/CourseNotes/LEC.pdf)

## Remarks

The definition is for sheaves of sets and does not assert that a torsor sheaf is represented by a scheme. It does not identify $\operatorname{Sha}_{\mathrm{et}}(J/B)$ with derived sheaf cohomology $H^1_{\acute e t}(B,J)$ or with an arithmetic Tate–Shafarevich group.
