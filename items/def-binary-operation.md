---
id: def-binary-operation
kind: definition
title: "Binary operation on a set; associativity, commutativity, and a subset closed under the operation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-cartesian-product]
justified_by: []
aliases: [def-closed-under-operation]
landmark: false
short: "binary operation; associative, commutative, closed"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Binary operation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Binary_operation"
    - title: "Associative property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Associative_property"
pipeline_run: null
---

## Definition

A **binary operation** on a set $S$ is a function ([[def-function]]) whose domain
is the Cartesian product $S \times S$ ([[def-cartesian-product]]),

$* \;:\; S \times S \longrightarrow S,$

written in infix form $x * y := *(x,y)$. That the value always lies in $S$ is part
of the definition, and is referred to as $S$ being **closed** under $*$. The pair
$(S,*)$ is called a set *equipped with* a binary operation.

The operation $*$ is

- **associative** when $(x * y) * z = x * (y * z)$ for all $x, y, z \in S$;
- **commutative** when $x * y = y * x$ for all $x, y \in S$.

Two elements $x, y \in S$ **commute** when $x * y = y * x$; so $*$ is commutative
exactly when every two elements of $S$ commute.

A subset $T \subseteq S$ is **closed under $*$** when $x * y \in T$ for all
$x, y \in T$. In that case the restriction of $*$ to $T \times T$ has all its
values in $T$ and is therefore a binary operation on $T$, called the **restricted
operation** or the operation **induced** on $T$; it is again associative if $*$
is, and again commutative if $*$ is, since both conditions are equations required
of elements of $T$, which are in particular elements of $S$.

## Remarks

- **Notation.** Where no confusion arises the operation is written
  multiplicatively, $xy$ for $x * y$, and additively, $x + y$, when it is
  commutative and the context is additive. Nothing in this page depends on the
  choice: every statement is about an abstract operation.

- **Bracketing.** Associativity is stated for three factors only. That it lets
  brackets be dropped in a product of any finite length is a theorem, not a
  restatement: it is [[thm-generalised-associativity]], proved below.

- Familiar instances already in the library are addition and multiplication on
  $\mathbb{N}$ ([[def-nat-addition]], [[def-nat-multiplication]]), on
  $\mathbb{Z}$ ([[def-int-operations]]) and on any field ([[def-field]]).
