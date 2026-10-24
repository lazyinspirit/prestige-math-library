---
id: def-affine-overlap-separation-condition
kind: definition
title: "Affine-overlap separation condition"
status: published
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-scheme-over-base, def-affine-open-subscheme, def-section-restriction-and-global-section, thm-tensor-product-of-algebras-over-a-commutative-ring]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Schemes, Lemma 21.7"
      url: "https://stacks.math.columbia.edu/tag/01KP"
---
## Definition

An $S$-scheme $X$ satisfies the **affine-overlap separation condition** if, for
every pair of affine opens $U,V\subseteq X$ mapping into a common affine open
$W=\operatorname{Spec}R\subseteq S$, the intersection $U\cap V$ is affine and
the canonical map
$$\Gamma(U,\mathcal O_X)\mathbin{\otimes}_{R}\Gamma(V,\mathcal O_X)\longrightarrow\Gamma(U\cap V,\mathcal O_X)$$
is surjective. This is the affine criterion for usual separatedness; the
diagonal formulation is developed later.
