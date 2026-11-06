---
id: def-gts-presheaf-and-sheaf-on-a-site
kind: definition
title: "Presheaves and sheaves of sets on a site"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
category: string-theory
axiom_strength: "The presheaf and matching-family definitions are choice-free; full AC is inherited for the declared-cover pretopology and its generated-topology interpretation."
deps:
  - def-gts-small-etale-site-of-a-scheme
  - lem-gts-etale-coverings-form-a-grothendieck-site
  - def-axiom-of-choice
dependency_roles:
  def-gts-small-etale-site-of-a-scheme: mathematical-premise
  lem-gts-etale-coverings-form-a-grothendieck-site: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, Section 59.27"
      url: "https://stacks.math.columbia.edu/tag/03PF"
      locator: "Definitions 59.27.1 and 59.27.3; sheaves on the small étale site."
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I"
      url: "https://www.jmilne.org/math/CourseNotes/LEC.pdf"
      locator: "§§5–6, printed pp. 38–49; presheaves, sheaves, matching families and gluing."
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

Let $X_{\acute e t}$ be the small étale site of $X$, with category and covering families fixed in the earlier site definitions. A set-valued presheaf $F$ on this site assigns a set $F(U)$ to every object $U\to X$ and a restriction map $F(U)\to F(V)$ to every arrow $V\to U$, preserving identity maps and composition. For a declared cover $(U_i\to U)_{i\in I}$, a matching family is a tuple $s_i\in F(U_i)$ whose two restrictions to every fibre product $U_i\times_U U_j$ agree. The presheaf is a sheaf if, for each declared cover, every matching family is the restriction of exactly one element of $F(U)$.

## Definition references

[[def-gts-small-etale-site-of-a-scheme]]

[[lem-gts-etale-coverings-form-a-grothendieck-site]]

[The Stacks Project, Definitions 59.27.1 and 59.27.3](https://stacks.math.columbia.edu/tag/03PF)

[Milne, Lectures on Étale Cohomology, Chapter I, §§5–6](https://www.jmilne.org/math/CourseNotes/LEC.pdf)

## Remarks

The matching condition uses the actual fibre products in schemes; it does not replace them by intersections of underlying point sets. Assume full AC, as in [[def-axiom-of-choice]], when invoking the pretopology certification of [[lem-gts-etale-coverings-form-a-grothendieck-site]]. Under that hypothesis the declared families form a pretopology, so checking the matching-family condition on them is the sheaf condition for the topology they generate: a matching assignment on a covering sieve restricts to a matching family on a generating declared cover, whose unique amalgamation then agrees on every arrow of the sieve by pulling back that cover and using uniqueness. The presheaf and matching-family definitions themselves make no choice of sections.
