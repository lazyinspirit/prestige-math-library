---
id: cex-hom-is-not-exact
kind: counterexample
title: "Hom is not exact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-hom-is-left-exact-in-each-variable,
       thm-abelian-groups-form-an-abelian-category]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: frontier-23
---

## Statement refuted

For every object $X$ in an abelian category, the functor $\mathcal A(-,X)$ is
exact.

## Facts & Assumptions

**Given:** In $\mathbf{Ab}$, the short exact sequence
$$0 \to \mathbb Z \xrightarrow{\times 2} \mathbb Z \to \mathbb Z/2 \to 0.$$

[L1] The category $\mathbf{Ab}$ is abelian
([[thm-abelian-groups-form-an-abelian-category]]).

[L2] Hom is left exact, but no right exactness was asserted
([[thm-hom-is-left-exact-in-each-variable]]).

## Counterexample

**Proof technique:** direct.

1.1 Apply $\mathbf{Ab}(-,\mathbb Z)$ to the given short exact sequence. This yields $0 \to \operatorname{Hom}(\mathbb Z/2,\mathbb Z) \to \operatorname{Hom}(\mathbb Z,\mathbb Z) \xrightarrow{(\times 2)^*} \operatorname{Hom}(\mathbb Z,\mathbb Z)$, which is left exact by [L2]. [L1, L2, given]

2.1 The group $\operatorname{Hom}(\mathbb Z,\mathbb Z)$ is $\mathbb Z$, and precomposition with $\times 2$ is multiplication by $2$ on that copy of $\mathbb Z$. This map is not surjective, so the Hom sequence is not exact at the right-hand term. [step 1.1, algebra]

3.1 Therefore the contravariant Hom functor need not be exact. [step 2.1] ∎
