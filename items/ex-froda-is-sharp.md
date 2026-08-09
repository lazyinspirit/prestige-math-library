---
id: ex-froda-is-sharp
kind: example
title: "Froda's countable bound is attained: a bounded nondecreasing function on $\\mathbb{R}$ discontinuous exactly at the points $1 - 1/(k+1)$ for $k \\in \\mathbb{N}$, an infinite discontinuity set inside a bounded interval"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [def-equinumerous, def-injection-surjection-bijection, thm-monotone-with-prescribed-discontinuity-set, thm-froda, def-monotone-function, def-classification-of-discontinuities, def-countable, lem-countable-iff-surjection-from-n, cor-archimedean-reciprocal, thm-of-archimedean, def-interval, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: false
short: "an infinite discontinuity set in $[0,1)$"
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
    - title: "Froda's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Froda%27s_theorem"
    - title: "Discontinuities of monotone functions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discontinuities_of_monotone_functions"
pipeline_run: null
---

## Example

Put

$$E \;:=\; \Bigl\{\, 1 - \frac{1}{\iota(k+1)} \;:\; k \in \mathbb{N} \,\Bigr\} \;=\; \Bigl\{\, 0,\ \tfrac12,\ \tfrac23,\ \tfrac34,\ \dots \Bigr\} \;\subseteq\; [0,1)$$

([[def-canonical-natural]], [[def-interval]]). Then:

1. $E$ is countably infinite ([[def-countable]]);
2. there is a nondecreasing $f : \mathbb{R} \to \mathbb{R}$ with
   $0 \le f \le 1$ whose set of discontinuities is exactly $E$, every one of them
   a jump ([[thm-monotone-with-prescribed-discontinuity-set]],
   [[def-monotone-function]], [[def-classification-of-discontinuities]]);
3. $E$ is contained in the bounded interval $[0,1)$, so a monotone function may
   have infinitely many discontinuities inside a bounded interval.

**Indexing.** $\mathbb{N}$ contains $0$, so the points are
$1 - 1/\iota(k+1)$ for $k \in \mathbb{N}$ and never $1 - 1/\iota(k)$, which is
undefined at $k = 0$; the first point of $E$ is $1 - 1/\iota(1) = 0$.

**The point $1$ is not in $E$ and $f$ is continuous there.** $E$ has $1$ as a
limit point but does not contain it, and claim 2 asserts continuity at every
point outside $E$, so in particular at $1$: a monotone function may be
continuous at a limit point of its own discontinuity set.

## Facts & Assumptions

**Given:** The set $E = \{\, 1 - 1/\iota(k+1) : k \in \mathbb{N} \,\}$.

[L1] A nonempty set that is the image of a map defined on $\mathbb{N}$ is at most countable; a set in bijection with $\mathbb{N}$ is countably infinite ([[lem-countable-iff-surjection-from-n]], [[def-countable]], [[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L2] For every at most countable $E \subseteq \mathbb{R}$ there is a nondecreasing $f : \mathbb{R} \to \mathbb{R}$ with $0 \le f \le 1$, continuous at every point outside $E$ and discontinuous at every point of $E$, with every discontinuity a jump ([[thm-monotone-with-prescribed-discontinuity-set]]).

[L3] The set of discontinuities of a monotone function on an interval is at most countable ([[thm-froda]]).

[L4] $\iota$ is positive and strictly increasing on the naturals $\ge 1$, and for every real $\eta > 0$ there is a natural $n \ge 1$ with $1/\iota(n) < \eta$ ([[lem-of-naturals-positive]], [[def-canonical-natural]], [[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

## Verification

**Proof technique:** direct.

1.1 The map $s : \mathbb{N} \to \mathbb{R}$, $s(k) := 1 - 1/\iota(k+1)$, has image $E$, and $E$ is nonempty since $s(0) = 0$; so $E$ is at most countable. [L1, L4]

1.2 $s$ is injective: $j < k$ gives $\iota(j+1) < \iota(k+1)$, hence $1/\iota(k+1) < 1/\iota(j+1)$, hence $s(j) < s(k)$. Being injective with image $E$, it is a bijection $\mathbb{N} \to E$, so $E$ is countably infinite. [L1, L4]

1.3 $E \subseteq [0,1)$: $\iota(k+1) \ge 1 > 0$ gives $0 < 1/\iota(k+1) \le 1$, so $0 \le s(k) < 1$. [L4]

2.1 Claim 2: applying the prescribed-discontinuity theorem to the at most countable set $E$ gives a nondecreasing $f : \mathbb{R} \to \mathbb{R}$ with values in $[0,1]$, discontinuous exactly at the points of $E$, every discontinuity a jump. [step 1.1, L2]

3.1 Claims 1 and 3 are steps 1.1, 1.2 and 1.3, and the whole is consistent with Froda's theorem, which permits any at most countable discontinuity set and no larger one. [step 1.1, step 1.2, step 1.3, step 2.1, L3] ∎

## Remarks

- **What the example is for.** Froda's theorem bounds the discontinuity set of a
  monotone function by countability and by nothing else; in particular it does
  not bound it by finiteness, even inside a bounded interval. The set $E$ above
  is the simplest witness: infinitely many jumps accumulating at a single point,
  all within $[0,1)$.

- **The accumulation point is a point of continuity.** The real $1$ is not a
  member of $E$, so claim 2 gives continuity of $f$ at $1$, even though every
  neighbourhood of $1$ contains infinitely many discontinuities of $f$. Being a
  limit of discontinuities is not itself an obstruction to continuity.

- **A denser example is available.** Taking $E = \mathbb{Q}$ instead gives a
  monotone function discontinuous on a dense set
  ([[ex-monotone-function-discontinuous-exactly-at-the-rationals]]); the present
  example is the smaller and more concrete one, and it is the one where the
  points can be listed.
