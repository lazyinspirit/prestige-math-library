---
id: fs-uncountable-contains-interval
kind: false-statement
title: "FALSE: every uncountable subset of $\\mathbb{R}$ contains an interval"
status: draft
origin: session
deps: [cor-irrationals-uncountable, lem-rat-embeds-dense, def-countable, lem-of-q-dense, lem-of-q-embeds, thm-of-archimedean, def-complete-ordered-field, thm-rationals-countable, lem-subset-of-countable, thm-r-uncountable, cor-interval-uncountable]
justified_by: []
aliases: []
landmark: false
short: "irrationals are a counterexample"
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Irrational number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Irrational_number"
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Statement

**FALSE.** Every uncountable subset $X \subseteq \mathbb{R}$ ([[def-countable]])
contains a nondegenerate interval: there are $a < b$ in $\mathbb{R}$ with
$(a,b) \subseteq X$.

The claim is plausible because an uncountable set is, in a rough sense, large,
and the intervals are the obvious large subsets of $\mathbb{R}$. But size in the
sense of cardinality says nothing about how a set sits inside $\mathbb{R}$: a set
can be uncountable and still meet every interval in a set with holes. The
irrationals are the standard witness, and the Cantor set, once measure and
topology are available, is a starker one.

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$ ([[def-complete-ordered-field]]) with the canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$ and $\mathbb{Q}_{\mathbb{R}} = \iota[\mathbb{Q}]$ ([[lem-of-q-embeds]]). "Nondegenerate interval" means a set $(a,b) = \{\, x : a < x < b \,\}$ with $a < b$.

[L1] $X_0 := \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ is uncountable ([[cor-irrationals-uncountable]]).

[L2] $\mathbb{R}$ is Archimedean ([[thm-of-archimedean]]), and $\mathbb{Q}_{\mathbb{R}}$ is dense in every Archimedean ordered field: for $a < b$ there is $q \in \mathbb{Q}$ with $a < \iota(q) < b$ ([[lem-of-q-dense]]). For the Cauchy-sequence model of $\mathbb{R}$ the same density is [[lem-rat-embeds-dense]].

[L3] Uncountable means not at most countable ([[def-countable]]).

## Refutation

**Proof technique:** constructive.

1.1 Take the counterexample to be $X_0 = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$, the set of irrationals. [construct]

1.2 $X_0$ is uncountable by [L1], so it satisfies the hypothesis of the claim. [L1, L3]

2.1 Let $a < b$ in $\mathbb{R}$ be arbitrary. By [L2] there is $q \in \mathbb{Q}$ with $a < \iota(q) < b$, so $\iota(q) \in (a,b)$; but $\iota(q) \in \mathbb{Q}_{\mathbb{R}}$, hence $\iota(q) \notin X_0$. Therefore $(a,b) \not\subseteq X_0$, and a fortiori $[a,b] \not\subseteq X_0$. [step 1.1, L2]

3.1 So $X_0$ is an uncountable subset of $\mathbb{R}$ containing no nondegenerate interval, which refutes the claim. [step 1.2, step 2.1, discharge-construct] ∎

## Remarks

- The counterexample is as strong as possible in one direction: $X_0$ misses no interval either, so it is dense and yet contains no interval. That $X_0$ meets every $(a,b)$ with $a < b$ needs no new input, only what is already on this page: were $(a,b) \cap X_0$ empty we would have $(a,b) \subseteq \mathbb{Q}_{\mathbb{R}}$, and $\mathbb{Q}_{\mathbb{R}} = \iota[\mathbb{Q}]$ is at most countable, being a bijective image of $\mathbb{Q}$ ([[thm-rationals-countable]], [[lem-of-q-embeds]]), so $(a,b)$ would be at most countable ([[lem-subset-of-countable]]), which it is not, by the next remark. Density and containing an interval are unrelated properties.

- **Every nondegenerate interval is uncountable, open as well as closed** ([[cor-interval-uncountable]]). The open form is the one the remarks on either side of this one need, and the corollary states it outright, so nothing has to be transported here from the closed case to the open one. It is proved by re-running the nested-interval construction of [[thm-r-uncountable]] seeded at the middle third of $(a,b)$, which is what places the point that construction produces strictly inside $(a,b)$ rather than merely in $[a,b]$; the density of $\mathbb{Q}_{\mathbb{R}}$ recorded in [L2] is not needed for it.

- The converse implication is true and trivial: a nondegenerate interval is uncountable, by the previous remark, so "contains an interval" implies "uncountable" ([[lem-subset-of-countable]] again, applied to the interval inside the set). Only the direction claimed above fails.

- A cardinality assumption cannot be repaired into a topological conclusion. The Cantor set is uncountable, closed, and contains no interval; it also has measure zero, so it is small in a second, independent sense. Neither notion is developed here, and neither is needed: the irrationals already settle the question.
