---
id: cor-countably-many-discontinuities-integrable
kind: corollary
title: "A bounded function on $[a,b]$ whose set of discontinuities is at most countable is Riemann integrable"
status: draft
origin: session
deps: [thm-lebesgue-criterion, lem-countable-sets-are-null, def-countable, def-measure-zero-and-content-zero, def-bounded-set, def-continuity-real, def-classification-of-discontinuities, def-darboux-integral, def-interval]
justified_by: []
aliases: []
landmark: true
short: "countable discontinuity set $\\Rightarrow$ integrable"
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
    - title: "Riemann integral (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Riemann_integral"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
pipeline_run: null
---

## Statement

Let $a < b$ be reals and let $f : [a,b] \to \mathbb{R}$ be bounded
([[def-bounded-set]]). If the set

$$D \;=\; \{\, x \in [a,b] : f \text{ is discontinuous at } x \,\}$$

([[def-continuity-real]], [[def-classification-of-discontinuities]]) is at most
countable ([[def-countable]]), then $f$ is Riemann integrable on $[a,b]$
([[def-darboux-integral]]).

**No choice principle is used.** Only the implication "$D$ null $\Rightarrow$ $f$
integrable" of [[thm-lebesgue-criterion]] is invoked, and that implication is a
theorem of ZF; [[lem-countable-sets-are-null]] is choice-free as well, since a
listing of $D$ is a single object and the cover is a formula in the index.

The converse fails badly: the indicator of the Cantor set is discontinuous at
uncountably many points and is integrable, because the Cantor set is null
([[thm-cantor-set-properties]]). What is true in both directions is
[[thm-lebesgue-criterion]] itself.

## Facts & Assumptions

**Given:** Reals $a < b$ and a bounded $f : [a,b] \to \mathbb{R}$ whose set $D$ of discontinuities in $[a,b]$ is at most countable.

[L1] Every at most countable subset of $\mathbb{R}$ has measure zero ([[lem-countable-sets-are-null]], [[def-countable]], [[def-measure-zero-and-content-zero]]).

[L2] A bounded $f$ on $[a,b]$ is Riemann integrable if and only if its set of discontinuities has measure zero; the implication from "measure zero" to "integrable" uses no choice principle ([[thm-lebesgue-criterion]]).

## Proof

**Proof technique:** direct.

1.1 $D \subseteq \mathbb{R}$ is at most countable by hypothesis, so $D$ has measure zero by [L1]. [given, L1]

2.1 $f$ is bounded on $[a,b]$ and its discontinuity set has measure zero, so [L2] gives that $f$ is Riemann integrable on $[a,b]$. [step 1.1, given, L2] ∎

## Remarks

- **The two classical instances.** A function with finitely many discontinuities is covered ([[thm-finitely-many-discontinuities-integrable]] proves it again by an elementary argument that costs no Lebesgue criterion), and so is a monotone function, whose discontinuity set is at most countable by Froda's theorem ([[thm-froda]]). The direct proof of [[thm-monotone-implies-integrable]] is nevertheless kept, because it is quantitative and elementary.

- **Thomae's function is the standard witness that this corollary has content.** It is discontinuous at every rational and continuous at every irrational ([[thm-dirichlet-and-thomae-continuity-sets]]), so its discontinuity set is countable and it is integrable, while its Dirichlet counterpart, discontinuous everywhere, is not ([[fs-bounded-implies-riemann-integrable]]).

- **Countability is sufficient and not necessary, and it is not even the right invariant.** The Cantor set is uncountable and null, while the Smith-Volterra-Cantor set is uncountable and not null ([[thm-fat-cantor-set-has-positive-measure]]); the first is a discontinuity set of an integrable function and the second is not. Cardinality decides nothing here; measure does.
