---
id: "def-linear-equivalence-cartier-divisors"
kind: "definition"
title: "Linear equivalence cartier divisors"
status: published
origin: "pipeline"
pipeline_run: "frontier-37-owner-30"
deps: [ "def-principal-cartier-divisor", "def-cartier-divisor" ]
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
---

## Definition

Two Cartier divisors $D,D'$ on a scheme $X$ are **linearly equivalent**,
written $D\sim D'$, if there is a global meromorphic unit
$f\in\Gamma(X,\mathcal K_X^\times)$ such that
$$D-D'=\operatorname{div}_C(f).$$
Here subtraction is in the abelian group $\operatorname{CaDiv}(X)$
([[def-cartier-divisor]]), and the right side is the principal divisor
of [[def-principal-cartier-divisor]].

Equivalently, $D$ and $D'$ have the same class modulo the subgroup of
principal Cartier divisors. Explicitly, reflexivity follows by taking
$f=1$; if $D-D'=\operatorname{div}_C(f)$, then
$D'-D=\operatorname{div}_C(f^{-1})$, giving symmetry; and if also
$D'-D''=\operatorname{div}_C(g)$, then
$D-D''=\operatorname{div}_C(fg)$, giving transitivity. Adding the same
Cartier divisor to both sides preserves the relation because their
difference is unchanged.

No assumption of effectiveness is imposed: either divisor may have
positive or negative local equations in the sense of the Cartier group.
On the empty scheme there is only the zero Cartier divisor and its
single equivalence class.
