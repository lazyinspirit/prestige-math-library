---
id: lem-gts-etale-coverings-form-a-grothendieck-site
kind: lemma
title: "Jointly surjective étale families form a Grothendieck pretopology"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC, used to obtain points in nonzero residue-field tensor algebras and inherited through the inspected étale-stability supplier."
deps:
  - def-gts-small-etale-site-of-a-scheme
  - def-axiom-of-choice
  - def-etale-morphism-schemes
  - lem-etale-stable-base-change-composition
  - thm-fibre-products-of-schemes-exist
dependency_roles:
  def-gts-small-etale-site-of-a-scheme: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-etale-morphism-schemes: mathematical-premise
  lem-etale-stable-base-change-composition: mathematical-premise
  thm-fibre-products-of-schemes-exist: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, Section 59.27"
      url: "https://stacks.math.columbia.edu/tag/03PF"
      locator: "Definition 59.27.1 and the jointly-surjective étale covering families in Definition 59.27.3."
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I"
      url: "https://www.jmilne.org/math/CourseNotes/LEC.pdf"
      locator: "§§5–6, printed pp. 38–49; the small étale site and its covering families."
verification:
  precheck: pass
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

## Statement

Assume the full Axiom of Choice. For a scheme $X$, take the category and declared families in [[def-gts-small-etale-site-of-a-scheme]]. The identity families cover, every pullback of a declared covering family is a declared covering family, and composites of declared covering families are declared covering families. The generated covering sieves therefore define a Grothendieck topology on the small étale category of $X$.

## Statement references

[[def-gts-small-etale-site-of-a-scheme]]

## Facts & Assumptions

**Given:** Full AC and the category of étale $X$-schemes with declared set-indexed jointly-surjective étale families.

[A1] Full AC is the choice-function principle of [[def-axiom-of-choice]].

[F1] The declared families and generated topology are exactly those of [[def-gts-small-etale-site-of-a-scheme]]: objects are étale $X$-schemes, arrows are $X$-morphisms, and a declared cover is a set-indexed étale family whose images jointly cover its target.

[F2] Étale morphisms remain étale under arbitrary base change and composition, assuming full AC ([[lem-etale-stable-base-change-composition]]).

[F3] Every scheme fibre product exists, and its affine charts are tensor-product spectra ([[thm-fibre-products-of-schemes-exist]]).

## Proof

**Proof technique:** direct verification of the pretopology axioms.

1.1 By [F1], arrows in the small étale category are all morphisms of $X$-schemes. Identity maps and composites of $X$-scheme morphisms are again $X$-scheme morphisms, so the stated objects and arrows form a category without requiring every arrow to be étale. The identity $U\to U$ is étale by the definition of étale morphism and has image all of $U$, so its identity family is a declared cover. [F1, given]

1.2 Let $U_i\to U$ be a declared cover and let $V\to U$ be any arrow. Each pullback $U_i\times_U V$ exists by [F3], and its projection to $V$ is étale by base-change stability in [F2]. Fix a point $v\in V$ and write $u$ for its image. Joint surjectivity in [F1] gives an index $i$ and a point $u_i\in U_i$ above $u$. The residue maps give field extensions $\kappa(u)\to\kappa(u_i)$ and $\kappa(u)\to\kappa(v)$, so $\kappa(u_i)\otimes_{\kappa(u)}\kappa(v)$ is a nonzero ring: it is the tensor product of two nonzero vector spaces over the field $\kappa(u)$. Under [A1], this nonzero ring has a prime ideal. Its spectrum maps to $U_i\times_U V$ by the fibre-product description [F3], and the resulting point maps to $v$. Thus the pullback family is jointly surjective. [A1, F1, F2, F3, given]

1.3 Let $U_i\to U$ be a declared cover and, for each $i$, let $V_{ij}\to U_i$ be a declared cover. Their composites are étale by [F2]. For any point $u\in U$, joint surjectivity first gives an $i$ and a point $u_i$ over $u$, then the cover of $U_i$ gives a $j$ and a point $v_{ij}$ over $u_i$. The composite image therefore contains every point $u$. The disjoint union of the set-indexed index families is a set, so the composite family is an allowed declared cover. Empty families cause no exception: they cover only the empty object, whose pullbacks along maps into it are empty. [F1, F2, given]

2.1 Steps 1.1–1.3 prove the identity, pullback, and composition axioms for a pretopology. Each declared family generates a sieve; the smallest Grothendieck topology containing those sieves and the maximal sieves is obtained by intersecting all Grothendieck topologies containing them. This is the topology specified in [F1], and the pretopology axioms ensure it has the usual covering-family presentation. The proof establishes only the site axioms; it asserts no representability of sheaves or torsors. [F1, step 1.1, step 1.2, step 1.3] ∎

## Remarks

The Axiom of Choice is used in step 1.2 to obtain a prime ideal of the nonzero residue-field tensor algebra and through the cited étale-stability supplier; it is recorded at full strength because that supplier assumes it.

For a base change $V\to U$, the relevant pullback is the Cartesian square

```tikzcd
U_i\times_U V \arrow[r] \arrow[d] & U_i \arrow[d] \\
V \arrow[r] & U
```

Its upper-left object exists by the scheme fiber-product theorem; the left projection is étale by étale base-change stability. The proof above supplies the separate pointwise argument that this projection family remains jointly surjective.
