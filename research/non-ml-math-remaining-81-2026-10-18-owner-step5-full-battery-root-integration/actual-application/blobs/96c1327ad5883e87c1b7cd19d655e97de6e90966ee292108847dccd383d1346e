---
id: def-hall-algebra-module
kind: definition
title: "Modules over a Hall algebra are unital algebra representations"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-algebra-over-a-commutative-ring
  - def-untwisted-hall-algebra
  - thm-untwisted-hall-algebra-is-associative-and-unital
  - def-left-and-right-modules
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §§2.3–2.4"
      url: "https://arxiv.org/pdf/math/0611617v2"
---

## Definition

Let $R$ be a commutative ring with unit
([[def-algebra-over-a-commutative-ring]]) and let $H$ be a unital associative
$R$-algebra. An **$R$-linear representation of $H$** on an $R$-module $M$ is
a unital $R$-algebra homomorphism
$\rho:H\to\operatorname{End}_R(M)$, where $\operatorname{End}_R(M)$ is the
ring of $R$-linear maps $M\to M$, with composition as multiplication,
$\operatorname{id}_M$ as unit, and scalar map $r\mapsto r\operatorname{id}_M$.
It defines the unital left action
$h\cdot m:=\rho(h)(m)$; its module axioms are those of
[[def-left-and-right-modules]]. When $H$ is a Hall algebra, this structure is
called a **Hall-algebra module**.

This term does not mean an object of the input category. An input object $A$
contributes a basis symbol $[A]$ to a Hall algebra, but that symbol by itself
specifies no representation on an $R$-module. The untwisted Hall algebra
instance is supplied by
[[def-untwisted-hall-algebra]],
[[thm-untwisted-hall-algebra-is-associative-and-unital]].

The zero $R$-module is allowed; its identity endomorphism is its zero map.
This definition gives an algebra action only. An action on a tensor product
requires additional structure, such as a specified coproduct.

## Remarks

For a Green-twisted or completed Hall construction, the underlying associative
algebra and its coefficient space must first be specified; this definition
does not identify different Hall normalizations or completions.
