---
id: def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor
kind: definition
title: Stable n-pointed algebraic curves and the moduli functor
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps: []
dependency_roles: {}
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
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
sources:
  references:
    - title: "The Stacks Project, Moduli of Curves, Sections 20–25"
      url: "https://stacks.math.columbia.edu/download/moduli-curves.pdf"
      locator: "Stable curves, relative dualizing sheaves, contraction and stable reduction; the displayed source treats unpointed genus g≥2 where stated."
    - title: "Finn F. Knudsen, The Projectivity of the Moduli Space of Stable Curves, II: The Stacks M_{g,n}"
      url: "https://journals.msp.org/mscand/article/download/1622/1621/1653"
      locator: "Theorem 2.7 and proof, printed pp. 179–180; contraction, stabilization, universal pointed curves, and clutching in §§2–3."
    - title: "William Fulton and Rahul Pandharipande, Notes on Stable Maps and Quantum Cohomology"
      url: "https://people.math.ethz.ch/~rahul/sm.pdf"
      locator: "§§0.3–0.4 and §1.1, printed pp. 2–5, 10–11; complex-projective conventions only."
---

## Definition

Let $S$ be a scheme and let $g,n\ge 0$ satisfy $2g-2+n>0$. A nodal curve family of genus $g$ over $S$ is a proper, flat, finitely presented morphism $f:C\to S$ of relative dimension one whose geometric fibres are reduced, connected, one-dimensional curves with only ordinary nodes and arithmetic genus $g$, where arithmetic genus means $1-\chi(C_s,\mathcal O_{C_s})$. A marking is a section $p_i:S\to C$; the markings are ordered, pairwise disjoint, and factor through the relative smooth locus.

A stable $n$-pointed curve family is such data $(f:C\to S,p_1,\ldots,p_n)$ for which the relative dualizing sheaf with markings $\omega_{C/S}(p_1+\cdots+p_n)$ is relatively ample. An isomorphism over $S$ is an $S$-isomorphism of the curve families carrying each $p_i$ to the corresponding marking. The moduli functor $\overline{\mathcal M}_{g,n}$ assigns to $S$ the groupoid of these families and isomorphisms; this definition does not assert the functor is an algebraic stack or is proper.

For a geometric fibre, let $E$ be an irreducible component, let $g(E)$ be the genus of its normalization, and let $s(E)$ count its markings and the branches of nodes on that normalization. The stability criterion is $2g(E)-2+s(E)>0$ for every $E$: rational components have at least three special points, genus-one components at least one, and components of genus at least two need no special point. Indeed, the degree of the restricted dualizing line bundle is $2g(E)-2+s(E)$, and ampleness on a proper nodal curve is equivalent to positive degree on every irreducible component.

## Remarks

The stability range excludes the unstable constant-curve cases $(g,n)=(0,0),(0,1),(0,2),(1,0)$. For $(g,n)=(0,3)$ the fibre is a three-pointed projective line up to unique isomorphism; for $(g,n)=(1,1)$ the single marking removes translations. These are definition-level boundary cases, not properness claims.
