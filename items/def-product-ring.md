---
id: def-product-ring
kind: definition
title: "The product ring $R \\times S$ with componentwise operations, its identity $(1_R, 1_S)$ and its units $R^{\\times} \\times S^{\\times}$"
status: published
origin: session
deps: [def-ring, def-commutative-ring, def-zero-divisor-and-integral-domain, lem-ring-units-form-a-group, def-invertible-element, lem-ring-elementary-consequences]
justified_by: []
aliases: [def-direct-product-of-rings]
landmark: false
short: "product ring $R \\times S$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Product of rings (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_of_rings"
pipeline_run: null
---

## Definition

Let $R$ and $S$ be rings ([[def-ring]]). The **product ring** $R \times S$ is
the cartesian product of the underlying sets with the componentwise operations

$$(a,b) + (a',b') := (a + a',\; b + b'), \qquad (a,b)\cdot(a',b') := (aa',\; bb'),$$

and the distinguished elements

$$0_{R \times S} := (0_R, 0_S), \qquad 1_{R \times S} := (1_R, 1_S).$$

**These data make $R \times S$ a ring.** Both rules take a pair of elements of
$R \times S$ to an element of $R \times S$, so each is a binary operation.
Every ring axiom is an equation between elements of $R \times S$, and two such
elements are equal exactly when their components are; so each axiom holds
componentwise from the corresponding axiom in $R$ and in $S$. Explicitly:
$(R \times S, +, (0_R,0_S))$ is an abelian group with
$-(a,b) = (-a,-b)$; multiplication is associative with two-sided identity
$(1_R,1_S)$; and both distributive laws hold.

**Units.** An element $(u,v)$ is a unit of $R \times S$ if and only if $u$ is a
unit of $R$ and $v$ is a unit of $S$, in which case
$(u,v)^{-1} = (u^{-1}, v^{-1})$. Indeed, if $uu' = 1_R = u'u$ and
$vv' = 1_S = v'v$ then $(u,v)(u',v') = (1_R,1_S) = (u',v')(u,v)$; conversely, if
$(u,v)(u',v') = (1_R,1_S) = (u',v')(u,v)$ then reading each component gives
$uu' = 1_R = u'u$ and $vv' = 1_S = v'v$. So

$$(R \times S)^{\times} = R^{\times} \times S^{\times},$$

and by [[lem-ring-units-form-a-group]] that set is a group under multiplication
([[def-invertible-element]]).

**Commutativity.** $R \times S$ is commutative ([[def-commutative-ring]]) if and
only if both $R$ and $S$ are. If both are, the componentwise product is
commutative. Conversely, if $R \times S$ is commutative then for $a, a' \in R$,
$(aa', 1_S) = (a,1_S)(a',1_S) = (a',1_S)(a,1_S) = (a'a, 1_S)$, so $aa' = a'a$;
the same argument in the second component settles $S$.

**Zero divisors.** If $1_R \ne 0_R$ and $1_S \ne 0_S$, then $R \times S$ has
zero divisors and is therefore never an integral domain
([[def-zero-divisor-and-integral-domain]]), whatever $R$ and $S$ are. Indeed
$(1_R, 0_S)$ and $(0_R, 1_S)$ are both nonzero, and

$$(1_R,0_S)\cdot(0_R,1_S) \;=\; (1_R 0_R,\; 0_S 1_S) \;=\; (0_R, 0_S),$$

using $x \cdot 0 = 0 = 0 \cdot x$ ([[lem-ring-elementary-consequences]]).

## Remarks

- **The product of two domains is never a domain**, by the zero-divisor
  computation above, since a domain has $1 \ne 0$ by definition. This is the
  cleanest source of zero divisors available at this point, and the companion
  page records the instance $\mathbb{Z} \times \mathbb{Z}$.

- **The two projections are ring homomorphisms; the two injections are not.**
  The maps $(a,b) \mapsto a$ and $(a,b) \mapsto b$ satisfy (RH1), (RH2) and
  (RH3) of [[def-ring-homomorphism]]. The map $a \mapsto (a, 0_S)$ satisfies
  (RH1) and (RH2) but sends $1_R$ to $(1_R, 0_S)$, which is not the identity of
  $R \times S$ when $1_S \ne 0_S$; the companion page uses exactly that map to
  show (RH3) is not redundant.

- Only the product of **two** rings is defined here, which is all this page and
  its companion use. Nothing below needs an indexed family.
