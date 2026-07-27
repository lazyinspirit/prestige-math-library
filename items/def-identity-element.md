---
id: def-identity-element
kind: definition
title: "Left identity, right identity, and two-sided identity for a binary operation"
status: published
origin: session
deps: [def-binary-operation]
justified_by: []
aliases: [def-neutral-element]
landmark: false
short: "left / right / two-sided identity"
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
    - title: "Identity element (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Identity_element"
pipeline_run: null
---

## Definition

Let $*$ be a binary operation on a set $S$ ([[def-binary-operation]]) and let
$e \in S$. Then $e$ is

- a **left identity** for $*$ when $e * x = x$ for every $x \in S$;
- a **right identity** for $*$ when $x * e = x$ for every $x \in S$;
- a **two-sided identity**, or simply an **identity**, when it is both.

## Remarks

- The three notions are genuinely different for a general operation, and the
  library keeps them apart deliberately: several existing items prove the two
  sides separately. For addition on $\mathbb{N}$, for instance, $n + 0 = n$ holds
  by the defining recursion ([[def-nat-addition]]) while $0 + n = n$ is a theorem
  proved by induction ([[lem-nat-add-identity]]).

- A structure can have many left identities and no right identity, so
  "the identity" is not legitimate language until uniqueness is available. That
  is [[lem-identity-unique]], proved next, and it is the item that licenses the
  definite article everywhere below.
