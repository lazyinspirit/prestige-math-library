---
id: thm-product-of-countable
kind: theorem
title: "A product of two at most countable sets is at most countable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-n-cross-n-countable, def-countable, lem-countable-iff-surjection-from-n, def-equinumerous, def-injection-surjection-bijection, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
short: "$A\\times B$ countable"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

If $A$ and $B$ are at most countable ([[def-countable]]) then so is
$A \times B$.

**No choice principle is used**: the two enumerations are given, and the
enumeration of the product is written down from them.

## Facts & Assumptions

**Given:** At most countable sets $A$ and $B$, and the product $A \times B = \{\, (a,b) : a \in A,\ b \in B \,\}$.

[L1] Finite, countably infinite and at most countable; $\varnothing \approx 0$, so $\varnothing$ is finite ([[def-countable]], [[def-natural-numbers]]).

[L2] A nonempty set is at most countable if and only if some surjection $\mathbb{N} \to$ it exists ([[lem-countable-iff-surjection-from-n]]).

[L3] There is a bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ ([[thm-n-cross-n-countable]], [[def-equinumerous]]).

[L4] A composition of surjections is a surjection ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 If $A = \varnothing$ or $B = \varnothing$ then $A \times B = \varnothing$, which is finite and hence at most countable. [given, L1]

1.2 Assume instead $A \ne \varnothing$ and $B \ne \varnothing$; then [L2] provides surjections $f : \mathbb{N} \to A$ and $g : \mathbb{N} \to B$. [given, L2]

1.3 Fix the bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ of [L3], in particular a surjection. [L3]

2.1 Define $t : \mathbb{N} \times \mathbb{N} \to A \times B$ by $t(m,n) = (f(m), g(n))$. It is surjective: any $(a,b) \in A \times B$ has $a = f(m)$ and $b = g(n)$ for some $m, n$, so $(a,b) = t(m,n)$. [step 1.2]

3.1 Hence $t \circ \beta : \mathbb{N} \to A \times B$ is a surjection by [L4], and $A \times B$ is nonempty, so it is at most countable by [L2]. [step 1.3, step 2.1, L2, L4]

4.1 Both cases give the conclusion: $A \times B$ is at most countable whenever $A$ and $B$ are. [step 1.1, step 3.1, L1] ∎

## Remarks

- Iterating gives the same conclusion for $A_1 \times A_2 \times \dots \times A_k$ for each fixed $k$: $(A_1 \times A_2) \times A_3$ is a product of two at most countable sets, and so on, so $k - 1$ applications of the theorem settle the case $k$. Stating this uniformly in $k$, as a single theorem quantified over $k$, needs finite sequences of sets and a recursive definition of the $k$-fold product, which this library does not yet have; the iterated form above is the honest statement of what is proved.

- The infinite product is a different matter and is **not** covered: $\{0,1\}^{\mathbb{N}}$ is a product of countably many two-element sets and is uncountable, by the same diagonal argument as [[thm-cantor-powerset]]. Countability is not preserved by infinite products of any kind.

- Together with [[lem-subset-of-countable]] this gives the countability of every set that can be coded by finitely many naturals, which is how [[thm-rationals-countable]] is proved.
