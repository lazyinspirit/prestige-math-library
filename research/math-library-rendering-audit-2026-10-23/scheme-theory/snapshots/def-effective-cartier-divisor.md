---
id: "def-effective-cartier-divisor"
kind: "definition"
title: "Effective cartier divisor"
status: published
origin: "pipeline"
pipeline_run: "frontier-37-owner-30"
deps: [ "def-cartier-divisor", "def-sheaf-total-quotient-rings" ]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  {
    "precheck": "n/a",
    judge: { model: "gpt-6.1-sol", verdict: pass, date: 2026-10-02 },
    audited: 2026-10-02
  }
sources:
  references:
    - title: "The Stacks Project, Definition 111.49.1(6)-(7), meromorphic functions
        and Cartier divisors"
      url: "https://stacks.math.columbia.edu/tag/02AR"
    - title: "The Stacks Project, Effective Cartier divisors, Definition31.14.1 and
        Lemma31.14.2"
      url: "https://stacks.math.columbia.edu/tag/01WQ"
---

## Definition

A Cartier divisor $D$ on a scheme $X$ is **effective** if it has a
local-equation representation $(U_i,f_i)$ as in
[[def-cartier-divisor]] with
$f_i\in\mathcal O_X(U_i)$ and with multiplication by the germ
$(f_i)_x$ injective on $\mathcal O_{X,x}$ for every $x\in U_i$.
Thus each $f_i$ is a regular section in the precise sense of
[[def-sheaf-total-quotient-rings]]; the condition uses injectivity of
multiplication, including exclusion of the zero germ on a nonzero stalk.

The condition is independent of the representation. On overlaps two
Cartier equations differ by a regular unit. Multiplication or division
by such a unit preserves regularity as a section of $\mathcal O_X$ and
preserves injectivity of multiplication at every stalk. These local
conditions remain true on refinements and descend by sheaf locality.

The local principal ideal sheaves $f_i\mathcal O_{U_i}$ agree on
overlaps because $f_i/f_j$ is a regular unit. We denote the resulting
ideal sheaf by $\mathcal I_D$. The construction of its associated
closed subscheme is proved in
the subsequent closed-immersion theorem.

A unit equation, in particular $f_i=1$, gives the zero Cartier divisor
and the ideal sheaf $\mathcal O_X$. Locally its quotient ring is the
zero ring, so its vanishing subscheme is empty. The zero Cartier divisor
is therefore the **empty effective divisor**. The empty scheme has
only this effective divisor.
