---
id: def-subfield
kind: definition
title: "Subfield: a subring of a field closed under inverses of its nonzero elements, and therefore a field with the restricted operations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-subring, lem-subring-criterion, lem-field-is-a-commutative-ring, lem-commutative-division-ring-is-a-field, def-division-ring, def-commutative-ring, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "subfield"
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
    - title: "Field (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Field_(mathematics)#Subfields"
    - title: "Field (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Field_(mathematics)"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]), regarded as a commutative ring by
[[lem-field-is-a-commutative-ring]]. A subset $K \subseteq F$ is a **subfield**
of $F$ when

- **(K1)** $K$ is a subring of $F$ ([[def-subring]]);
- **(K2)** $x^{-1} \in K$ for every $x \in K$ with $x \ne 0_F$.

Equivalently, by [[lem-subring-criterion]], $K$ is a subfield exactly when
$1_F \in K$, $a - b \in K$ and $ab \in K$ for all $a, b \in K$, and
$x^{-1} \in K$ for every nonzero $x \in K$.

**Why $K$ is then a field, and with the same $0$ and $1$.** By (K1) and
[[def-subring]], $K$ with the restricted operations is a ring whose zero is
$0_F$ and whose identity is $1_F$; its multiplication is commutative, being the
restriction of a commutative one ([[def-commutative-ring]]). Since $1_F \ne 0_F$
in $F$ and both lie in $K$, we have $1_K \ne 0_K$. Let $x \in K$ with
$x \ne 0_K$; then $x \ne 0_F$, so $x^{-1} \in F$ exists and lies in $K$ by (K2),
and $x x^{-1} = 1_F = 1_K = x^{-1} x$. So every nonzero element of $K$ is a unit
of the ring $K$, and $K$ is a commutative division ring ([[def-division-ring]]);
by [[lem-commutative-division-ring-is-a-field]] it is a field. Moreover the
inverse of $x$ computed in $K$ is its inverse computed in $F$, since $x^{-1}$
already satisfies the defining equation inside $K$.

In particular

$$0_K = 0_F, \qquad 1_K = 1_F, \qquad (-x)_K = (-x)_F, \qquad (x^{-1})_K = (x^{-1})_F \quad (x \in K,\ x \ne 0_F).$$

**A subfield of an ordered field inherits the order.** Let $(F,P)$ be an ordered
field ([[def-ordered-field]]) and $K$ a subfield. Put $P_K := P \cap K$. Then
(O1) holds in $K$: for $x \in K$ we have $-x \in K$ by (K1), and exactly one of
$x \in P$, $x = 0_F$, $-x \in P$ holds in $F$, so exactly one of
$x \in P_K$, $x = 0_K$, $-x \in P_K$ holds. And (O2) holds: if $x, y \in P_K$
then $x + y$ and $xy$ lie in $P$ by (O2) in $F$ and in $K$ by (K1), hence in
$P_K$. So $(K,P_K)$ is an ordered field, and its order is the restriction of the
order of $F$, because $a < b$ means $b - a \in P$ on both sides and
$b - a$ is the same element in $K$ as in $F$.

## Remarks

- **The inverse-closure clause is not implied by (K1).** The integers sit inside
  the rationals as a subring that is not a subfield, since $2$ is nonzero there
  and $2^{-1}$ is not an integer; the companion page records that witness. So
  (K2) is doing work.

- **The agreement of the two zeros and the two identities is the load-bearing
  part.** A later page restricts the scalars of a vector space along a subfield
  inclusion, and every axiom checked there uses that $1_K$ acts as $1_F$ does.
  Nothing would go through if a "subfield" were merely a subset that happens to
  be a field under some operations of its own.

- **Why the definition goes through subrings rather than restating the field
  axioms.** All of (A), (M) and (D) except the existence of inverses are already
  guaranteed by [[def-subring]], and the two bridge lemmas of this page convert
  the resulting commutative division ring back into a field. Restating the axioms
  would create a second definition of a field on this page, which is exactly what
  [[lem-field-is-a-commutative-ring]] and
  [[lem-commutative-division-ring-is-a-field]] exist to prevent.
