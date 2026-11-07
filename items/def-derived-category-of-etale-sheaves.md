---
dependency_level: 8
id: def-derived-category-of-etale-sheaves
kind: definition
title: Derived étale module categories and normalized constructible adic complexes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-derived-category-of-an-abelian-category
  - def-etale-sheaf-of-finite-modules
  - def-l-adic-sheaf-as-compatible-system
  - def-constructible-l-adic-sheaf-on-a-scheme
  - def-perfect-complex-over-a-ring
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Grothendieck et al., SGA 5, Exposé VI, adic systems and rationalization
      url: https://grothendiecksga.com/read/sga5/en/VI-1.html
    - title: The Stacks Project, Pro-étale Cohomology, Constructible complexes
      url: https://stacks.math.columbia.edu/tag/09C0
      locator: Comparison model and finite-Tor conventions; the explicit diagram model below is not asserted equivalent without a comparison proof
---

## Definition

Fix a universe for a small presentation of the étale site of a scheme $X$. For a finite coefficient ring $\Lambda$, write $\operatorname{Sh}(X,\Lambda)$ for its abelian category of sheaves of $\Lambda$-modules. Its cochain derived category is the homotopy category of complexes localized at quasi-isomorphisms; $D^+$ and $D^b$ denote the full subcategories with cohomology bounded below and bounded on both sides. A torsion complex is constructible when all its cohomology sheaves satisfy the finite-stratification condition. It has **Tor-amplitude in $[a,b]$** if its derived tensor product with every coefficient-module sheaf in degree zero has cohomology only in degrees $a,\ldots,b$. A geometric stalk complex is **perfect** when it is isomorphic in the module-derived category to a bounded complex of finite projective modules.

For adic coefficients put $A_n=\mathbb Z/\ell^n\mathbb Z$. Let $\operatorname{Sh}(X,A_\bullet)$ be the category of towers of $A_n$-module sheaves with $A_{n+1}$-linear transition maps. Kernels, cokernels and exactness are levelwise. Form its bounded-below cochain derived category. Evaluation at level $n$ is exact; write $K_n$ for the evaluation of $K$. A complex in this category is **normalized constructible of uniformly finite Tor-amplitude** when there are fixed finite degree intervals bounding all its cohomology and all its Tor-amplitudes, one finite locally closed stratification on which every finite-level cohomology sheaf is finite locally constant, and the adjoint transition comparisons
$$K_{n+1}\otimes^L_{A_{n+1}}A_n\longrightarrow K_n$$
are isomorphisms for every $n\geq1$. Their coherence is supplied by the transitions in the actual tower, rather than by unrelated choices of objects in separate derived categories.

In this explicit model, $D_c^b(X,\mathbb Q_\ell)$ denotes the rationalization of the full normalized constructible finite-Tor subcategory: its morphism groups are tensored with $\mathbb Q_\ell$, and composition is extended bilinearly. If an idempotent-complete version is required, take its idempotent completion. Pullback, extension by zero, proper pushforward and realization of ordinary constructible rational sheaves by flat integral models need their separate well-definedness and compatibility proofs. In particular, a nonflat sheaf system is not inserted unchanged as a derived-Cartesian system; derived reduction may have nonzero Tor. No equivalence with an ordinary discrete $\mathbb Q_\ell$-sheaf derived category, the pro-étale constructible category, or the bounded derived category of the rational sheaf category is asserted by this definition.

## Definition references

[[def-derived-category-of-an-abelian-category]]

[[def-etale-sheaf-of-finite-modules]]

[[def-l-adic-sheaf-as-compatible-system]]

[[def-constructible-l-adic-sheaf-on-a-scheme]]

[[def-perfect-complex-over-a-ring]]

[SGA 5, Exposé VI](https://grothendiecksga.com/read/sga5/en/VI-1.html)

[Stacks Project, constructible complexes](https://stacks.math.columbia.edu/tag/09C0)
