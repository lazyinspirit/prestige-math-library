---
id: thm-temperley-lieb-link-state-dimension-formula
kind: theorem
title: "Link states are counted by a ballot-number difference"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-temperley-lieb-link-state-standard-modules, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  scraped: []
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§2, PDF pp. 5–7, and §3, PDF pp. 11–12: link states, their path encoding, and the standard-module dimensions."
    - title: "John Enyang and Frederick M. Goodman, Cellular bases for algebras with a Jones basic construction"
      url: "https://arxiv.org/pdf/1106.5339"
      locator: "§6.4.2, printed pp. 34–35: the bijection between Temperley–Lieb dangles and ballot paths."
---

## Statement

Let $n\ge0$ and let $t$ satisfy $0\le t\le n$ and $n-t$ even. Put $a=(n-t)/2$, the number of arcs in a link state, and use the convention $\binom{n}{a-1}=0$ when $a=0$. Then the link-state basis $T_{n,t}$ of $W_{n,t}(R,\delta)$ has cardinality

$$|T_{n,t}|=\binom{n}{a}-\binom{n}{a-1}.$$

In particular, $W_{n,t}$ is free of this rank over $R$, independently of $\delta$.

## Facts & Assumptions

**Given:** $n\ge0$, an allowed defect number $t$, $a=(n-t)/2$, and the link-state basis $T_{n,t}$.

[F1] A link state is a bottom matching with $t$ defects and $a=(n-t)/2$ arcs whose defects extend to the ordered top endpoints by noncrossing propagating strands; equivalently, no defect lies inside an arc ([[def-temperley-lieb-link-state-standard-modules]]).

[F2] The binomial coefficient $\binom{n}{k}$ is the cardinality of the set of $k$-element subsets of $\{1,\ldots,n\}$ ([[def-binomial-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 Encode each arc by an opening symbol at its left endpoint and a closing symbol at its right endpoint; encode each defect by an opening symbol. This gives a word of length $n$ with $a+t$ openings and $a$ closings. Every prefix has at least as many openings as closings, because each closing site in that prefix is paired with a distinct earlier opening site in the same prefix. [F1, given, construct]

2.1 Conversely, scan any word with $a+t$ openings, $a$ closings and nonnegative prefix heights from left to right. Pair each closing symbol with the most recent unmatched opening. The prefix condition guarantees such an opening exists at every closing, and the final number of unmatched openings is $t$. The resulting arcs are nested or disjoint, so they form a noncrossing matching; the unmatched openings are its defects. This reverses step 1.1, giving a bijection between $T_{n,t}$ and those words. [step 1.1, construct]

3.1 There are $\binom{n}{a}$ words with $a$ closing positions, by [F2]. For $a\ge1$, reflect openings and closings through the first prefix whose height is $-1$. This is a bijection from words that violate the prefix condition to all words with $a-1$ closings: the reflected word ends at height $t+2\ge2$ and therefore has a first prefix of height $1$, whose reflection is the inverse. When $a=0$ there are no violating words, agreeing with the stated convention. Subtracting the bad count $\binom{n}{a-1}$ from the total gives the displayed formula. [F2, step 2.1, algebra] ∎

## Remarks

The literature often indexes the same link states by p, the number of arcs, and gives dim W_{n,t}=binom(n,p)−binom(n,p−1). Here p=a and t=n−2p, so the defect and arc conventions agree exactly.
