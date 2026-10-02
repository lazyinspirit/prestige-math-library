---
id: "def-principal-cartier-divisor"
kind: "definition"
title: "Principal cartier divisor"
status: "draft"
origin: "pipeline"
pipeline_run: "frontier-37-owner-30"
deps: ["def-cartier-divisor"]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification: {"precheck": "n/a", judge: {model: "gpt-6.1-sol", verdict: pass, date: 2026-10-02}}
sources:
  references:
    - title: "The Stacks Project, Definition 111.49.1(6)-(7), meromorphic functions and Cartier divisors"
      url: "https://stacks.math.columbia.edu/tag/02AR"
---

## Definition

Let $X$ be a scheme. For a global meromorphic unit
$f\in\Gamma(X,\mathcal K_X^\times)$, its **principal Cartier divisor** is
$$\operatorname{div}_C(f):=q_X(f)\in\operatorname{CaDiv}(X),$$
where $q_X$ is the global-section map induced by the quotient sheaf
$\mathcal K_X^\times\to\mathcal K_X^\times/\mathcal O_X^\times$
([[def-cartier-divisor]]). Equivalently, use the single local equation $f$
on the open set $X$.

We use additive notation for Cartier divisors, even though their local
equations multiply. The quotient map is a group homomorphism, so
$\operatorname{div}_C(fg)=\operatorname{div}_C(f)+\operatorname{div}_C(g)$,
$\operatorname{div}_C(1)=0$, and
$\operatorname{div}_C(f^{-1})=-\operatorname{div}_C(f)$. In particular,
principal Cartier divisors form a subgroup of $\operatorname{CaDiv}(X)$.
Multiplying $f$ by a global regular unit leaves its divisor unchanged,
since that unit has zero image in the quotient sheaf.

The sign convention is **zeros positive, poles negative**: a regular
local equation cutting out a zero contributes positively; replacing it
by its inverse reverses the sign. This is the convention of
[[def-cartier-divisor]], without asserting that a numerical order exists
at every point of an arbitrary scheme.

On the empty scheme the groups of units and of Cartier divisors are
trivial, so this definition gives only the zero divisor.
