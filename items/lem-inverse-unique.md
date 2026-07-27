---
id: lem-inverse-unique
kind: lemma
title: "In a monoid, a left inverse and a right inverse of the same element are equal; hence an invertible element has exactly one inverse, and it is two-sided"
status: published
origin: session
deps: [def-semigroup-and-monoid, def-invertible-element, def-identity-element, def-binary-operation]
justified_by: []
aliases: []
landmark: false
short: "left inv = right inv"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Inverse element (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Inverse_element"
    - title: "Monoid (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monoid"
pipeline_run: null
---

## Statement

Let $(M,*,e)$ be a monoid ([[def-semigroup-and-monoid]]) and let $g \in M$. If
$h$ is a left inverse of $g$ and $h'$ is a right inverse of $g$
([[def-invertible-element]]), then $h = h'$. Consequently:

1. an invertible element $g$ has exactly one two-sided inverse, written
   $g^{-1}$;
2. for an invertible $g$, every left inverse of $g$ and every right inverse of
   $g$ equals $g^{-1}$, so a single one-sided equation $h * g = e$ or
   $g * h = e$ already forces $h = g^{-1}$;
3. if $g$ has both a left inverse and a right inverse then $g$ is invertible.

Associativity is used, and is essential.

## Facts & Assumptions

**Given:** A monoid $(M,*,e)$, an element $g \in M$, an element $h \in M$ with $h * g = e$, and an element $h' \in M$ with $g * h' = e$ ([[def-invertible-element]]).

[A1] $h * g = e$.

[A2] $g * h' = e$.

[L1] $*$ is associative: $(x * y) * z = x * (y * z)$ for all $x, y, z \in M$ ([[def-semigroup-and-monoid]], [[def-binary-operation]]).

[L2] $e$ is a two-sided identity: $e * x = x = x * e$ for every $x \in M$ ([[def-semigroup-and-monoid]], [[def-identity-element]]).

## Proof

**Proof technique:** direct.

1.1 Since $e$ is a right identity and $g * h' = e$, we may write $h = h * e = h * (g * h')$. [A2, L2]

1.2 Since $e$ is a left identity and $h * g = e$, we may write $h' = e * h' = (h * g) * h'$. [A1, L2]

1.3 Associativity identifies the two right-hand sides: $h * (g * h') = (h * g) * h'$. [L1]

2.1 Combining, $h = h * (g * h') = (h * g) * h' = h'$, which is the stated equality of a left inverse and a right inverse. [step 1.1, step 1.2, step 1.3]

3.1 Claim 3: if $h$ is a left inverse and $h'$ a right inverse of $g$, then $h = h'$ by step 2.1, so this common element satisfies both $h * g = e$ and $g * h = e$ and is a two-sided inverse; hence $g$ is invertible. [step 2.1, A1, A2]

3.2 Claim 1: let $u$ and $v$ be two-sided inverses of $g$. Then $u$ is a left inverse and $v$ is a right inverse of $g$, so $u = v$ by step 2.1; the two-sided inverse of an invertible element is therefore unique, and the notation $g^{-1}$ is legitimate. [step 2.1, given]

3.3 Claim 2: let $g$ be invertible with two-sided inverse $g^{-1}$. If $h * g = e$ then $h$ is a left inverse and $g^{-1}$ is a right inverse of $g$, so $h = g^{-1}$ by step 2.1; if $g * h = e$ then $g^{-1}$ is a left inverse and $h$ a right inverse, so $g^{-1} = h$ by step 2.1. [step 2.1, given]

4.1 A left inverse and a right inverse of the same element coincide, an invertible element has exactly one inverse, and either one-sided equation already identifies it. [step 2.1, step 3.1, step 3.2, step 3.3] ∎

## Remarks

- **Where associativity enters.** Step 1.3 is the only use of it, and it is indispensable: for a non-associative operation with a two-sided identity an element can have several distinct left inverses. This is why the lemma is stated for monoids and not for arbitrary operations with an identity, in contrast with [[lem-identity-unique]], which needs no associativity at all.

- **What this licenses.** [[def-group]] defines a group as a monoid all of whose elements are invertible, and then writes $g^{-1}$ and treats it as two-sided. Claim 1 is what makes that notation well defined, and claim 2 is the working form used throughout: to identify an inverse it suffices to verify one of the two equations, provided the element is already known to be invertible.
