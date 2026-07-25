---
id: cor-irrationals-uncountable
kind: corollary
title: "The irrationals are uncountable"
status: draft
origin: session
deps: [thm-r-uncountable, thm-rationals-countable, def-countable, lem-countable-iff-surjection-from-n, thm-n-cross-n-countable, lem-of-q-embeds, def-equinumerous, def-injection-surjection-bijection, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$\\mathbb{R}\\setminus\\mathbb{Q}$ uncountable"
proof_strategy: contradiction
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
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]) and
let $\iota : \mathbb{Q} \to \mathbb{R}$ be the canonical embedding
([[lem-of-q-embeds]]); write $\mathbb{Q}_{\mathbb{R}} = \iota[\mathbb{Q}]$ for the
copy of the rationals inside $\mathbb{R}$, the set usually written $\mathbb{Q}$
once the identification is made. Then the set of **irrationals**

$$\mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$$

is uncountable ([[def-countable]]).

**Only the union of two sets is used, and that needs no choice whatsoever.** If
the irrationals were at most countable, then $\mathbb{R}$ would be the union of
the two at most countable sets $\mathbb{Q}_{\mathbb{R}}$ and
$\mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$, and countability of a two-set
union is proved by interleaving two given enumerations. The countable union
theorem, which does spend $\mathrm{AC}_\omega$, is **not** invoked here and is
not needed; see the remarks below.

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$, the canonical embedding $\iota : \mathbb{Q} \to \mathbb{R}$, the subset $\mathbb{Q}_{\mathbb{R}} = \iota[\mathbb{Q}]$ and its complement $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$, so that $\mathbb{R} = \mathbb{Q}_{\mathbb{R}} \cup X$.

[L1] $\iota$ is injective ([[lem-of-q-embeds]]), hence a bijection of $\mathbb{Q}$ onto $\mathbb{Q}_{\mathbb{R}}$; $\approx$ is transitive ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L2] $\mathbb{Q} \approx \mathbb{N}$, so $\mathbb{Q}$ is at most countable ([[thm-rationals-countable]]).

[L3] A nonempty set is at most countable if and only if some surjection $\mathbb{N} \to$ it exists ([[lem-countable-iff-surjection-from-n]]); uncountable means not at most countable ([[def-countable]]).

[L4] There is a bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ ([[thm-n-cross-n-countable]]).

[L5] $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ is at most countable. [assume-contra]

1.2 $\mathbb{Q}_{\mathbb{R}} \approx \mathbb{Q} \approx \mathbb{N}$ by [L1] and [L2], so $\mathbb{Q}_{\mathbb{R}}$ is at most countable, and it is nonempty since $\iota(0) \in \mathbb{Q}_{\mathbb{R}}$. [L1, L2]

1.3 Fix the bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ of [L4]. [L4]

2.1 If $X = \varnothing$ then $\mathbb{R} = \mathbb{Q}_{\mathbb{R}}$, which is at most countable by step 1.2. [step 1.2, given]

2.2 Otherwise $X \ne \varnothing$, and since $X$ is at most countable by assumption and $\mathbb{Q}_{\mathbb{R}}$ is nonempty and at most countable by step 1.2, [L3] provides surjections $f : \mathbb{N} \to \mathbb{Q}_{\mathbb{R}}$ and $g : \mathbb{N} \to X$. [step 1.1, step 1.2, L3]

3.1 Define $u : \mathbb{N} \times \mathbb{N} \to \mathbb{R}$ by $u(0,k) = f(k)$ and $u(n,k) = g(k)$ for $n \ne 0$. Every element of $\mathbb{R}$ lies in $\mathbb{Q}_{\mathbb{R}}$ or in $X$, hence is $f(k)$ or $g(k)$ for some $k$, so $u$ is surjective onto $\mathbb{R}$. The two surjections were obtained one after the other, not selected simultaneously from an infinite family, so no choice principle is used. [step 2.2, given]

4.1 Hence $u \circ \beta : \mathbb{N} \to \mathbb{R}$ is a surjection and $\mathbb{R} \ne \varnothing$, so $\mathbb{R}$ is at most countable by [L3]. [step 1.3, step 3.1, L3]

5.1 In either case $\mathbb{R}$ is at most countable, by step 2.1 in the first and step 4.1 in the second; this contradicts [L5]. Therefore $X = \mathbb{R} \setminus \mathbb{Q}_{\mathbb{R}}$ is uncountable. [step 2.1, step 4.1, L3, L5, discharge-contradiction] ∎

## Remarks

- The same argument shows that removing any at most countable set from $\mathbb{R}$ leaves an uncountable set. In particular the algebraic numbers, once they are available, can be removed to show transcendental numbers exist, which is how Cantor's 1874 paper presented the result: an existence proof for transcendentals with no example constructed.

- The corollary is a statement about the *set* of irrationals only. It says nothing about any individual irrational, and it does not exhibit one; the library exhibits $\sqrt{2}$ separately ([[ex-sqrt-two-exists]], [[fs-sqrt2-rational]]).

- Keeping the two-set union separate from the countable union is not pedantry. The countable case genuinely needs $\mathrm{AC}_\omega$ ([[thm-countable-union-of-countable]]) and is unprovable in ZF conditionally on the consistency of ZF, which is the honest form of [[fs-countable-union-theorem-of-zf]] and rests on an external independence result quoted there rather than proved; whereas this corollary, like [[thm-r-uncountable]] itself, is outright a theorem of ZF.
