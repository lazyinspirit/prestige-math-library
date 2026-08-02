---
id: thm-strong-induction
kind: theorem
title: "Strong (complete) induction"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, thm-well-ordering-principle, lem-nat-trichotomy]
aliases: [complete-induction, course-of-values-induction]
landmark: false
short: "$(\\forall m<n\\,P(m))\\Rightarrow P(n)$ gives $\\forall n\\,P(n)$"
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $P$ be a property of naturals such that for every $n \in \mathbb{N}$, if $P(m)$ holds for all $m < n$ then $P(n)$. Then $P(n)$ holds for all $n \in \mathbb{N}$. (At $n = 0$ the hypothesis is vacuous, so $P(0)$ is forced.)

## Facts & Assumptions

**Given:** A property $P$ satisfying the strong-induction hypothesis $H$: for every $n$, $\big(P(m) \text{ for all } m < n\big) \Rightarrow P(n)$.

[L1] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L2] Exactly one of $x < y$, $x = y$, $y < x$ holds ([[lem-nat-trichotomy]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $P$ fails somewhere; let $S = \{\, n \in \mathbb{N} : P(n) \text{ is false} \,\}$, a nonempty subset of $\mathbb{N}$. [assume-contra]

2.1 By well-ordering [L1], $S$ has a least element $\ell$, so $\ell \le s$ for every $s \in S$; hence every $m < \ell$ lies outside $S$, since $m \in S$ would give $\ell \le m$, which [L2] does not allow alongside $m < \ell$; that is, $P(m)$ holds for all $m < \ell$. [step 1.1, L1, L2]

3.1 By the hypothesis $H$ applied at $\ell$, $P(\ell)$ holds, so $\ell \notin S$. [step 2.1, given]

4.1 But $\ell \in S$ by construction, a contradiction; hence $S$ is empty and $P(n)$ holds for all $n \in \mathbb{N}$. [step 2.1, step 3.1, discharge-contradiction] ∎
