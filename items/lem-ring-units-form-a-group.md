---
id: lem-ring-units-form-a-group
kind: lemma
title: "The units of a ring are the invertible elements of its multiplicative monoid, and $R^{\\times}$ is a group under multiplication; $0 \\in R^{\\times}$ only in the zero ring"
status: published
origin: session
deps: [def-ring, def-invertible-element, lem-inverse-unique, lem-monoid-units-form-a-group, def-semigroup-and-monoid, lem-ring-elementary-consequences, def-group]
justified_by: []
aliases: [lem-units-of-a-ring]
landmark: false
short: "$R^{\\times}$ is a group"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Unit (ring theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unit_(ring_theory)"
    - title: "Ring (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ring_(mathematics)"
pipeline_run: null
---

## Statement

Let $R$ be a ring ([[def-ring]]). An element $u \in R$ is a **unit** of $R$ when
it is invertible in the multiplicative monoid $(R,\cdot,1)$
([[def-invertible-element]]), that is, when there is $v \in R$ with
$uv = 1 = vu$. Write $R^{\times}$ for the set of units. Then:

1. a unit has exactly one inverse, written $u^{-1}$, and a single equation
   $vu = 1$ or $uv = 1$ with $u$ already known to be a unit forces $v = u^{-1}$;
2. $R^{\times}$ contains $1$, is closed under multiplication and under
   inversion, and $(R^{\times}, \cdot, 1)$ is a group ([[def-group]]), the
   **group of units** of $R$;
3. $0 \in R^{\times}$ if and only if $1 = 0$, that is, if and only if
   $R = \{0\}$.

## Facts & Assumptions

**Given:** A ring $R$ with zero $0$ and identity $1$, and $R^{\times} = \{\, u \in R : uv = 1 = vu \text{ for some } v \in R \,\}$ ([[def-ring]], [[def-invertible-element]]).

[L1] $(R,\cdot,1)$ is a monoid: multiplication is associative and $1$ is a two-sided identity for it ([[def-ring]], [[def-semigroup-and-monoid]]).

[L2] In a monoid a left inverse and a right inverse of the same element are equal; so an invertible element has exactly one two-sided inverse, and one of the two equations already determines it ([[lem-inverse-unique]]).

[L3] The invertible elements of a monoid $M$ contain the identity, are closed under the operation and under inversion, and form a group under the restricted operation ([[lem-monoid-units-form-a-group]], [[def-group]]).

[L4] $0 \cdot x = x \cdot 0 = 0$ for every $x \in R$, and if $1 = 0$ then $R = \{0\}$ ([[lem-ring-elementary-consequences]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the pair $(R,\cdot,1)$ is a monoid, so "unit of $R$" as defined above is exactly "invertible element of the monoid $(R,\cdot,1)$", and $R^{\times}$ is the set of units of that monoid in the sense of [[def-invertible-element]]. [L1]

1.2 Claim 1 is [L2] applied to the monoid $(R,\cdot,1)$. [L1, L2]

1.3 Claim 2 is [L3] applied to the same monoid: $1 \in R^{\times}$ because $1 \cdot 1 = 1$, the set is closed under multiplication and under inversion, and $(R^{\times},\cdot,1)$ is a group. [L1, L3]

1.4 Conversely, if $1 = 0$ then $0 \cdot 0 = 0 = 1$, so $0$ is its own two-sided inverse and $0 \in R^{\times}$; and $R = \{0\}$. [L4]

2.1 If $0 \in R^{\times}$, choose $v \in R$ with $0 \cdot v = 1$. But $0 \cdot v = 0$, so $1 = 0$, and then $R = \{0\}$. [step 1.1, L4]

3.1 Steps 2.1 and 1.4 give claim 3: $0 \in R^{\times}$ exactly when $1 = 0$, exactly when $R$ is the one-element ring. [step 2.1, step 1.4, L4] ∎

## Remarks

- **Nothing is reproved here.** The group structure comes from
  [[lem-monoid-units-form-a-group]], which was proved for an arbitrary monoid;
  all this item does is name the monoid ($(R,\cdot,1)$, which exists by axiom
  (R2) of [[def-ring]]) and record the one ring-specific fact, claim 3, which
  needs $0 \cdot v = 0$ and so is not a monoid statement.

- **Claim 3 is the reason $1 \ne 0$ appears as a hypothesis elsewhere.** In the
  one-element ring every element, $0$ included, is a unit, so "every nonzero
  element is a unit" is vacuously true there. [[def-division-ring]] therefore
  requires $1 \ne 0$ separately, and so does
  [[def-zero-divisor-and-integral-domain]].

- $R^{\times}$ is written multiplicatively and is in general not all of
  $R \setminus \{0\}$: in $\mathbb{Z}$ it is $\{1,-1\}$, as the companion page
  records. The rings in which it *is* all of $R \setminus \{0\}$ are exactly the
  division rings.
