---
id: ex-cantor-function-maps-a-null-set-onto-the-unit-interval
kind: example
title: "The Cantor set has measure zero, yet the Cantor function maps it onto all of $[0,1]$: a null set can have image an interval of length $1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [def-cantor-function, thm-cantor-function-properties, thm-cantor-set-properties, cor-cantor-function-is-continuous, def-measure-zero-and-content-zero, lem-nondegenerate-interval-is-not-null, def-cantor-set, def-interval, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: false
short: "a null set mapped onto $[0,1]$"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Cantor function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "The Cantor Function and the Cantor Set (University of Melbourne)"
      url: "https://researchers.ms.unimelb.edu.au/~xgge%40unimelb/Files/Teaching/Advanced%20Probability%20%28Semester%201%202020%29/The%20Cantor%20Function%20and%20the%20Cantor%20Set.pdf"
pipeline_run: null
---

## Example

Let $C$ be the Cantor set ([[def-cantor-set]]) and let $c : [0,1] \to \mathbb{R}$
be the Cantor function ([[def-cantor-function]]). Then:

1. $C$ has measure zero ([[def-measure-zero-and-content-zero]]);
2. $c[C] = [0,1]$: the Cantor function maps the Cantor set **onto** the whole of
   $[0,1]$ ([[def-injection-surjection-bijection]]);
3. $[0,1]$ does not have measure zero
   ([[lem-nondegenerate-interval-is-not-null]]).

So a continuous function can carry a set of measure zero onto a set that is not
of measure zero, and indeed onto an interval of length $1$: **being null is not
preserved by continuous images.**

## Facts & Assumptions

**Given:** The Cantor set $C$ and the Cantor function $c : [0,1] \to \mathbb{R}$.

[L1] $C$ has content zero and therefore measure zero ([[thm-cantor-set-properties]], claim 2, [[def-measure-zero-and-content-zero]]).

[L2] $c$ is surjective onto $[0,1]$ as a function on $[0,1]$, that is $c[\,[0,1]\,] = [0,1]$; and $c$ is constant on $[u,v]$ whenever $u < v$ lie in $C$ with $(u,v) \cap C = \varnothing$, while every point of $[0,1] \setminus C$ lies in the open interval $(u,v)$ of such a pair ([[thm-cantor-function-properties]], claims 3 and 4).

[L3] No set containing a bounded interval with two distinct endpoints has measure zero ([[lem-nondegenerate-interval-is-not-null]], [[def-interval]]).

[L4] $c$ is continuous on $[0,1]$ ([[cor-cantor-function-is-continuous]]).

## Verification

**Proof technique:** direct.

1.1 Claim 1 is claim 2 of the Cantor set theorem. [L1]

1.2 Claim 3 is the nondegenerate-interval lemma applied to $[0,1]$, whose endpoints $0$ and $1$ are distinct. [L3]

1.3 $c[C] \subseteq [0,1]$, since $c[\,[0,1]\,] = [0,1]$ and $C \subseteq [0,1]$. [L2]

1.4 $[0,1] \subseteq c[C]$: let $y \in [0,1]$ and take $x \in [0,1]$ with $c(x) = y$. If $x \in C$ we are done. Otherwise $x \in [0,1] \setminus C$, so $x$ lies in the open interval $(u,v)$ of a pair $u < v$ of points of $C$ with $(u,v) \cap C = \varnothing$, and $c$ is constant on $[u,v]$; hence $y = c(x) = c(u)$ with $u \in C$, so $y \in c[C]$. [L2]

2.1 Claim 2 follows from steps 1.3 and 1.4: $c[C] = [0,1]$. With claims 1 and 3 this says that the null set $C$ has image the set $[0,1]$, which is not null, under the continuous function $c$. [step 1.1, step 1.2, step 1.3, step 1.4, L4] ∎

## Remarks

- **Nothing here contradicts any theorem about null sets.** Measure zero is
  preserved by countable unions ([[thm-countable-union-of-null-is-null]]) and by
  passing to subsets, both of which are statements about covers. What this
  example shows is that it is **not** preserved by continuous images, and that
  is not a gap in any theorem above: no result in this library asserts that a
  continuous image of a null set is null.

- **The image is as large as it could possibly be.** $c$ takes values in $[0,1]$
  ([[thm-cantor-function-properties]]), so $c[C] \subseteq [0,1]$ always; claim 2
  says the inclusion is an equality. So $C$, which is null and nowhere dense
  ([[thm-cantor-set-properties]]), surjects onto an interval of length $1$;
  that $C$ is uncountable is proved independently as claim 4 of
  [[thm-cantor-set-properties]].

- **Where the increase happens.** The remark
  [[rem-cantor-function-increases-only-on-a-null-set]] records the complementary
  fact: $c$ is locally constant off $C$, so all of its climb from $0$ to $1$
  takes place on the null set $C$, and this example says that the climb is
  complete.
