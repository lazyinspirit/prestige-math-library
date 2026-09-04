---
id: thm-left-derived-functors-relative-to-supplied-data-are-additive-functors
kind: theorem
title: "Left derived functors relative to supplied data are additive functors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-derived-map-relative-to-resolution-data, prop-left-derived-maps-preserve-identities, prop-left-derived-maps-preserve-composition, def-additive-functor, thm-the-category-of-complexes-in-an-additive-category-is-additive, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy, prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps, thm-chain-homotopic-maps-induce-the-same-map-on-homology, thm-homology-is-an-additive-functor]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $P$ be a supplied projective resolution datum and
$F:\mathcal A\to\mathcal B$ an additive functor between abelian categories.
For every $n\in\mathbb Z$, the assignments
$$A\longmapsto L_n^PF(A),\qquad u\longmapsto L_n^PF(u)$$
define an additive functor on the domain of $P$.
## Facts & Assumptions

**Given:** An integer $n$.

[L1] Left derived maps preserve identities
([[prop-left-derived-maps-preserve-identities]]).

[L2] Left derived maps preserve composition
([[prop-left-derived-maps-preserve-composition]]).

[L3] The category of complexes in an additive category is additive, so
comparison lifts can be added degreewise
([[thm-the-category-of-complexes-in-an-additive-category-is-additive]]).

[L4] Two comparison lifts of the same morphism are chain-homotopic
([[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]]).

[L5] Applying $F$ degreewise preserves chain maps, and homology is an additive
functor on complexes
([[prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps]],
[[thm-homology-is-an-additive-functor]]).

[L6] Chain-homotopic maps induce the same map on homology
([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

[L7] An additive functor is a functor that is additive on each hom-group
([[def-additive-functor]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the assignments $A\mapsto L_n^PF(A)$ and $u\mapsto L_n^PF(u)$ already form a functor. [L1, L2]

1.2 Let $u,v:A\to B$. Choose comparison lifts $\widetilde u_\bullet$ and $\widetilde v_\bullet$. By [L3], their degreewise sum $\widetilde u_\bullet+\widetilde v_\bullet$ is again a chain map, and it lifts $u+v$ because augmentations are additive. Thus it is a comparison lift of $u+v$. [L3, given, construct]

2.1 By definition of the derived map and [L5], $$L_n^PF(u+v)=H_n\!\bigl(F(\widetilde u_\bullet+\widetilde v_\bullet)\bigr) =H_n\!\bigl(F(\widetilde u_\bullet)\bigr)+H_n\!\bigl(F(\widetilde v_\bullet)\bigr).$$ If a different comparison lift of $u+v$ were chosen, [L4] and [L6] would give the same homology map. Hence $$L_n^PF(u+v)=L_n^PF(u)+L_n^PF(v).$$ [L4, L5, L6, step 1.2, algebra]

3.1 Step 1.1 gives functoriality, and step 2.1 gives additivity on each hom-group. Therefore [L7] identifies $L_n^PF$ as an additive functor. [L7, step 1.1, step 2.1] ∎
