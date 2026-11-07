---
id: lem-etale-coverings-form-a-grothendieck-site
kind: lemma
title: "Jointly surjective étale families form the small étale topology"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-small-etale-site-of-a-scheme
  - def-etale-morphism-schemes
  - thm-fibre-products-of-schemes-exist
  - lem-etale-stable-base-change-composition
  - thm-etale-equivalent-flat-unramified-fp
  - lem-etale-residue-extensions-finite-separable
  - thm-unramified-diagonal-open-immersion
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
axiom_use: "Assume the Axiom of Choice through the published étale-stability, étale-criterion, and residue-field suppliers. The tensor products use finite bases; pointwise lifts are existential, and no global lift function is chosen."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Étale Cohomology, Section 59.27, Étale coverings"
      url: https://stacks.math.columbia.edu/tag/03PF
    - title: "J. S. Milne, Lectures on Étale Cohomology, Chapter I, Section 6"
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
---

## Statement

Assume the Axiom of Choice. For every scheme $X$, the covering families in the small étale category of $X$ satisfy the identity, base-change, and composition axioms for a Grothendieck pretopology. They therefore generate the small étale Grothendieck topology on $X$.

## Statement references

[The Stacks Project, Section 59.27, Definitions 59.27.1 and 59.27.3](https://stacks.math.columbia.edu/tag/03PF)

[Milne, Lectures on Étale Cohomology, Chapter I, Section 6](https://www.jmilne.org/math/CourseNotes/LEC.pdf)

## Facts & Assumptions

**Given:** A scheme $X$ and the small étale category and covering families specified in [[def-small-etale-site-of-a-scheme]].

[F1] [[def-small-etale-site-of-a-scheme]]: objects are étale $X$-schemes, arrows are $X$-morphisms, and a covering family consists of étale arrows with jointly surjective images.

[F2] [[thm-fibre-products-of-schemes-exist]]: fiber products of schemes exist, and their projections satisfy the fiber-product universal property.

[F3] [[lem-etale-stable-base-change-composition]]: étale morphisms are stable under arbitrary base change and composition.

[F4] [[thm-etale-equivalent-flat-unramified-fp]]: under AC, an étale morphism locally of finite presentation is unramified.

[F5] [[thm-unramified-diagonal-open-immersion]]: an unramified morphism has open diagonal, and pullbacks of open immersions are open immersions.

[F6] [[lem-etale-residue-extensions-finite-separable]]: an unramified morphism locally of finite type induces finite separable residue-field extensions at its points.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. It is assumed by the published suppliers [F3], [F4], and [F6].

## Proof

**Given:** The site convention and suppliers [F1]–[F6], under [A1].

1.1 Every $X$-morphism $f:V\to U$ between objects of the small étale category is étale. Put $W=V\times_X U$; both projections $p_1:W\to V$ and $p_2:W\to U$ are étale by [F2] and [F3]. The graph $s=(\mathrm{id}_V,f):V\to W$ is a section of $p_1$. The equalizer of $\mathrm{id}_W$ and $s p_1$ is exactly $s(V)$, and it is the pullback of the diagonal of $p_1$. By [F4] and [F5] this equalizer is an open immersion. Since $f=p_2s$, composition in [F3] proves that $f$ is étale. [given, F1, F2, F3, F4, F5, A1]

1.2 The identity map of any object is étale and its one-member family is jointly surjective. The empty family covers the empty object by the convention in [F1]. Thus the identity axiom holds, including the empty case. [given, F1, F3]

1.3 Suppose $\{U_i\to U\}$ covers $U$ and, for each $i$, $\{V_{ij}\to U_i\}_j$ covers $U_i$. The composites $V_{ij}\to U$ are étale by [F3]. For every point $u\in U$, joint surjectivity first supplies an $i$ and a point of $U_i$ over $u$, and then a $j$ and a point of $V_{ij}$ over that point. Thus the composite family is jointly surjective and covers $U$. [given, F1, F3]

2.1 Let $\{U_i\to U\}$ cover $U$ and let $V\to U$ be an arrow in the small étale category. The fiber products $U_i\times_U V$ exist by [F2], and their projections to $V$ are étale by base change in [F3]. For any point $v\in V$, joint surjectivity supplies some $U_i$ and a point $u_i\in U_i$ above its image $u\in U$. The maps $U_i\to U$ and $V\to U$ are étale, hence locally of finite presentation and locally of finite type; [F4] makes them unramified, and [F6] therefore makes $\kappa(u_i)$ and $\kappa(v)$ finite separable extensions of $\kappa(u)$. A finite basis of $\kappa(u_i)$ over $\kappa(u)$ identifies $\kappa(u_i)\otimes_{\kappa(u)}\kappa(v)$ with a nonempty finite direct sum of copies of the nonzero field $\kappa(v)$. Thus the tensor product is nonzero, its spectrum is nonempty, and the fiber of $U_i\times_U V\to V$ over $v$ is nonempty. Since this holds for every $v$, the base-changed family is jointly surjective and is a cover. [given, F1, F2, F3, F4, F6, step 1.1, choose]

3.1 Steps 1.1, 1.2, 1.3, and 2.1 establish arrow-closure, identity, composition, and base-change. These are the pretopology axioms for the declared covering families, so they generate the asserted Grothendieck topology. AC is inherited through [F3], [F4], and [F6]; finite bases in step 2.1 require no additional choice, and no global point-lift function is chosen. [F1, F3, F4, F6, A1, step 1.1, step 1.2, step 1.3, step 2.1] ∎
