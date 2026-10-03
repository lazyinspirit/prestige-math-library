---
id: def-total-transform-divisor
kind: definition
title: "Total transform of a Cartier divisor"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-blowup-scheme-along-ideal
  - def-cartier-divisor
  - def-pullback-cartier-divisor
  - lem-pullback-cartier-divisor-line-bundle
  - def-strict-transform-closed-subscheme
  - def-effective-cartier-divisor
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Lemma 31.33.11 (pullback of effective Cartier divisors) and Definition 31.34.1"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "19.2 proper transform; 19.4.3 computation of total and proper transforms, pp. 389-390"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice as inherited from the blowup construction, which is
a relative Proj. Let
$\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup of a scheme $X$
along a quasi-coherent ideal sheaf $\mathcal I$ of finite type
([[def-blowup-scheme-along-ideal]]), and let $D$ be a Cartier divisor on $X$
([[def-cartier-divisor]]) whose pullback $\pi^*D$ along $\pi$ is defined
([[def-pullback-cartier-divisor]]). The **total transform** of $D$ under
$\pi$ is the pullback Cartier divisor

$$\pi^*D .$$

Its associated invertible sheaf is the pullback of the invertible sheaf of $D$:
there is a canonical isomorphism
$\mathcal O_{\operatorname{Bl}}(\pi^*D)\cong\pi^*\mathcal O_X(D)$ of
$\mathcal O_{\operatorname{Bl}}$-modules
([[lem-pullback-cartier-divisor-line-bundle]]).

The pullback is defined in the two situations used on this page. First, for
every **effective** Cartier divisor $D$
([[def-effective-cartier-divisor]]): an effective divisor is given by regular
local equations $f_i$, and $\pi^{\#}(f_i)$ is regular because the blowup is
dominant, so the local-equation datum is admissible and $\pi^*D$ is again
effective. Second, for every Cartier divisor on an **integral** $X$: local
equations are then ratios $a_i/s_i$ of nonzero elements of the function field
of $X$, and a dominant morphism pulls such ratios back to ratios of nonzero
elements, so the datum is again admissible.

When $D$ is an effective Cartier divisor with strict transform $D'$
([[def-strict-transform-closed-subscheme]]) and exceptional divisor $E$, the
total transform is written

$$\pi^*D=D'+mE,$$

where $m$ is the **multiplicity of $D$ along the center**, an integer computed
in the next item of this page; the strict transform is the part remaining
after the exceptional components of the pullback are removed. This item
records the definition of $\pi^*D$ and this notation only: the displayed
identity is a theorem proved in the following item, not a definitional
identity, and no multiplicity is assigned here in advance.
