---
id: lem-identity-unique
kind: lemma
title: "A left identity and a right identity for the same binary operation are equal; hence there is at most one two-sided identity"
status: published
origin: session
deps: [def-binary-operation, def-identity-element]
justified_by: []
aliases: []
landmark: false
short: "left id = right id"
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
    - title: "Identity element (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Identity_element"
pipeline_run: null
---

## Statement

Let $*$ be a binary operation on a set $S$ ([[def-binary-operation]]). If
$e \in S$ is a left identity and $f \in S$ is a right identity for $*$
([[def-identity-element]]), then $e = f$. Consequently:

1. $*$ has at most one two-sided identity;
2. if $*$ has a two-sided identity $e$, then $e$ is the only left identity and
   the only right identity for $*$.

No associativity is assumed.

## Facts & Assumptions

**Given:** A binary operation $*$ on a set $S$, an element $e \in S$ with $e * x = x$ for all $x \in S$, and an element $f \in S$ with $x * f = x$ for all $x \in S$ ([[def-identity-element]]).

[A1] $e$ is a left identity: $e * x = x$ for every $x \in S$.

[A2] $f$ is a right identity: $x * f = x$ for every $x \in S$.

## Proof

**Proof technique:** direct.

1.1 Evaluate $e * f$ using [A1] with $x = f$: $e * f = f$. [A1]

1.2 Evaluate the same element $e * f$ using [A2] with $x = e$: $e * f = e$. [A2]

2.1 The two evaluations are of the same element of $S$, so $e = e * f = f$. [step 1.1, step 1.2]

3.1 If $e_1$ and $e_2$ are two-sided identities, then $e_1$ is in particular a left identity and $e_2$ a right identity, so $e_1 = e_2$ by step 2.1; this is claim 1. [step 2.1, given]

3.2 If $e$ is a two-sided identity and $g$ is any left identity, then $g$ is a left identity and $e$ a right identity, so $g = e$ by step 2.1; if $g$ is any right identity, then $e$ is a left identity and $g$ a right identity, so $e = g$ by step 2.1. This is claim 2. [step 2.1, given]

4.1 Hence a left identity and a right identity always coincide, and a two-sided identity, when it exists, is unique and is the unique one-sided identity on either side. [step 2.1, step 3.1, step 3.2] ∎

## Remarks

- The argument is the whole content of the phrase "the identity": the element $e * f$ is read in two ways, and the two readings are forced to agree. Nothing beyond the two defining equations is used, so the lemma applies to any binary operation whatever, associative or not.

- The same two-readings device, one level up, gives uniqueness of inverses ([[lem-inverse-unique]]); there associativity is needed, and it is what makes the argument work.
