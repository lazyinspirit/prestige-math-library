---
id: thm-strong-induction
kind: theorem
title: "Strong (complete) induction"
status: published
origin: session
deps: [def-natural-numbers, def-nat-order, thm-well-ordering-principle]
aliases: [complete-induction, course-of-values-induction]
landmark: false
short: "$(\\forall m<n\\,P(m))\\Rightarrow P(n)$ gives $\\forall n\\,P(n)$"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
pipeline_run: null
---

## Statement

Let $P$ be a property of naturals such that for every $n \in \mathbb{N}$, if $P(m)$ holds for all $m < n$ then $P(n)$. Then $P(n)$ holds for all $n \in \mathbb{N}$. (At $n = 0$ the hypothesis is vacuous, so $P(0)$ is forced.)

## Facts & Assumptions

**Given:** A property $P$ satisfying the strong-induction hypothesis $H$: for every $n$, $\big(P(m) \text{ for all } m < n\big) \Rightarrow P(n)$.

[L1] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $P$ fails somewhere; let $S = \{\, n \in \mathbb{N} : P(n) \text{ is false} \,\}$, a nonempty subset of $\mathbb{N}$. [assume-contra]

2.1 By well-ordering [L1], $S$ has a least element $\ell$; minimality means every $m < \ell$ has $m \notin S$, i.e. $P(m)$ holds for all $m < \ell$. [step 1.1, L1]

3.1 By the hypothesis $H$ applied at $\ell$, $P(\ell)$ holds, so $\ell \notin S$. [step 2.1, given]

4.1 But $\ell \in S$ by construction, a contradiction; hence $S$ is empty and $P(n)$ holds for all $n \in \mathbb{N}$. [step 2.1, step 3.1, discharge-contradiction] ∎
