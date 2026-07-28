---
id: ex-monotone-function-discontinuous-exactly-at-the-rationals
kind: example
title: "A bounded nondecreasing $f : \\mathbb{R} \\to \\mathbb{R}$ whose set of discontinuities is exactly $\\mathbb{Q}$, obtained from the prescribed-jump construction applied to one fixed enumeration of the rationals"
status: draft
origin: session
deps: [thm-monotone-with-prescribed-discontinuity-set, def-monotone-function, def-classification-of-discontinuities, thm-froda, thm-rationals-countable, lem-rat-embeds-dense, def-countable, def-series, thm-geometric-series, def-equinumerous, lem-countable-iff-surjection-from-n]
justified_by: []
aliases: []
landmark: false
short: "monotone, discontinuous exactly on $\\mathbb{Q}$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Classification of discontinuities (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Classification_of_discontinuities"
    - title: "Froda's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Froda%27s_theorem"
pipeline_run: null
---

## Example

Write $\mathbb{Q}$ for the canonical copy of the rationals inside $\mathbb{R}$
([[lem-rat-embeds-dense]]). There is a function $f : \mathbb{R} \to \mathbb{R}$
with all of the following properties:

1. $f$ is nondecreasing ([[def-monotone-function]]) and $0 \le f(x) \le 1$ for
   every real $x$;
2. $f$ is discontinuous at every rational and continuous at every irrational, so
   its discontinuity set is exactly $\mathbb{Q}$;
3. every discontinuity of $f$ is a jump
   ([[def-classification-of-discontinuities]]).

Explicitly, fixing a bijection $e : \mathbb{N} \to \mathbb{Q}$
([[thm-rationals-countable]]), one may take

$$f(x) \;=\; \sum_{k=0}^{\infty} a_{k}(x), \qquad a_{k}(x) = \begin{cases} 1/2^{\,k+1} & \text{if } e(k) < x,\\ 0 & \text{otherwise,}\end{cases}$$

which is the construction of [[thm-monotone-with-prescribed-discontinuity-set]]
applied to $E := \mathbb{Q}$ ([[def-series]], [[thm-geometric-series]]).

**This is the extreme case allowed by Froda's theorem.** [[thm-froda]] says that
a monotone function on an interval has at most countably many discontinuities;
$\mathbb{Q}$ is countable and dense, so the bound is attained by a set that
meets every interval. A monotone function can therefore be discontinuous on a
dense set, and it is nevertheless continuous on a set whose complement is
countable.

## Facts & Assumptions

**Given:** The canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals.

[L1] $\mathbb{Q} \approx \mathbb{N}$, and composing a bijection $\mathbb{N} \to \mathbb{Q}$ with the embedding $q \mapsto \hat q$ gives a bijection $e : \mathbb{N} \to \mathbb{Q}$ onto the canonical copy; in particular that copy is nonempty and at most countable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[def-countable]], [[def-equinumerous]], [[lem-countable-iff-surjection-from-n]]).

[L2] For every at most countable $E \subseteq \mathbb{R}$ there is a bounded nondecreasing $f : \mathbb{R} \to \mathbb{R}$ with $0 \le f \le 1$, continuous at every point outside $E$ and discontinuous at every point of $E$, with every discontinuity a jump ([[thm-monotone-with-prescribed-discontinuity-set]], [[def-monotone-function]], [[def-classification-of-discontinuities]]).

[L3] The set of discontinuities of a monotone function on an interval is at most countable ([[thm-froda]]).

## Verification

**Proof technique:** direct.

1.1 $\mathbb{Q}$, as a subset of $\mathbb{R}$, is at most countable. [L1]

2.1 Applying the prescribed-discontinuity theorem with $E := \mathbb{Q}$ produces a nondecreasing $f : \mathbb{R} \to \mathbb{R}$ with values in $[0,1]$, continuous at every irrational, discontinuous at every rational, and with every discontinuity a jump. This is exactly claims 1, 2 and 3. [step 1.1, L2]

3.1 The displayed formula is the function the theorem constructs, for the surjection $e$ of [L1]: the construction there sums the masses $1/2^{\,k+1}$ over the indices $k$ with $e(k) < x$. [step 2.1, L1, L2]

4.1 The example is consistent with Froda's theorem and is extremal for it: the discontinuity set $\mathbb{Q}$ is at most countable, as Froda requires, and no larger discontinuity set is possible for any monotone function. [step 2.1, L1, L3] ∎

## Remarks

- **The jump at a rational $r$ is at least $1/2^{\,k+1}$, where $k$ is the index
  with $e(k) = r$.** That lower bound is what the construction of
  [[thm-monotone-with-prescribed-discontinuity-set]] establishes, and it is what
  makes $r$ a discontinuity; the total mass available is
  $\sum_{k \ge 0} 1/2^{\,k+1} = 1$, which is why $f$ stays inside $[0,1]$. A
  different enumeration gives a different function with the same discontinuity
  set.

- **Continuity at every irrational is not an accident of this construction.**
  The complement of a countable set is where a monotone function built this way
  must be continuous, and [[thm-froda]] says the same thing in general: the
  discontinuities of a monotone function can never fill an uncountable set. The
  companion statement in the other direction, that no function whatever is
  continuous exactly at the rationals
  ([[cor-no-function-is-continuous-exactly-on-q]]), shows that the roles of
  $\mathbb{Q}$ and its complement cannot be exchanged here.
