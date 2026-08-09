---
id: lem-finite-interval-cover-total-length
kind: lemma
title: "If finitely many intervals cover a closed bounded interval $[a,b]$, the sum of their lengths is at least $b - a$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-interval, def-finite-sum, lem-finite-sum-laws, thm-induction-principle, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "finite cover of $[a,b]$ has total length $\\ge b-a$"
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Null set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Null_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 11"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "UAF Math 641, Measure Theory notes"
      url: "https://www.cs.uaf.edu/~maxwell/AY2007/math641/Measure.pdf"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{R}$ with $a \le b$, let $n \in \mathbb{N}$, and let
$c_0 \le d_0, \ \dots, \ c_n \le d_n$ be reals such that

$$[a,b] \;\subseteq\; \bigcup_{j \le n} [c_j, d_j] ,$$

the intervals being those of [[def-interval]]. Then

$$\sum_{j=0}^{n} (d_j - c_j) \;\ge\; b - a .$$

**The same bound holds for a cover by bounded intervals of any of the four
bounded forms**, since an interval with endpoints $c \le d$ is contained in
$[c,d]$ and has the same length $d - c$ ([[def-interval]]); replacing each
covering interval by the closed interval on its endpoints changes no length and
only enlarges the union. In particular a finite family of intervals of total
length strictly below $b - a$ cannot cover $[a,b]$, which is the form in which
this lemma is used throughout the page.

This is the one quantitative fact underlying everything about measure zero here.
Without it nothing forbids a set of measure zero from being all of $[0,1]$.
Four items on this page rest on it: [[lem-nondegenerate-interval-is-not-null]]
directly, and through that lemma [[thm-cantor-set-properties]],
[[thm-fat-cantor-set-has-positive-measure]] and
[[fs-null-implies-content-zero]]. Two of the worked items on the companion page
rest on it as well.

## Facts & Assumptions

**Given:** For $n \in \mathbb{N}$ let $P(n)$ be the assertion: for all reals $a \le b$ and all reals $c_0 \le d_0, \dots, c_n \le d_n$ with $[a,b] \subseteq \bigcup_{j \le n}[c_j,d_j]$, one has $\sum_{j \le n}(d_j - c_j) \ge b - a$. The lemma is that $P(n)$ holds for every $n \in \mathbb{N}$.

[L1] $[c,d] = \{\, x : c \le x \le d \,\}$, its length is $d - c \ge 0$ when $c \le d$, and $[a,b]$ is nonempty exactly when $a \le b$ ([[def-interval]]).

[L2] Finite sums: $\sum_{j \le n} t_j = \sum_{j < n+1} t_j$ with $\sum_{j<0} t_j = 0$ and $\sum_{j<m+1} t_j = \sum_{j<m} t_j + t_m$; sums split as $\sum_{j<m} t_j = \sum_{j<i} t_j + \sum_{j=i}^{m-1} t_j$ for $i \le m$, where $\sum_{j=i}^{m-1} t_j = \sum_{l < m-i} t_{i+l}$; a sum of nonnegative terms is nonnegative, and each single term is at most the whole sum ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L3] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L4] Ordered-field arithmetic: $0 < 1$, so $2 := 1 + 1 > 0$ and $0 < t \cdot 2^{-1} < t$ for $t > 0$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** induction.

1.1 The assertion to be proved is $P(n)$ for every $n \in \mathbb{N}$, with $P$ as in the Given, and the argument is an induction on $n$ using [L3]. [given, L3, induction]

1.2 **Base, $n = 0$.** Let $a \le b$ and $[a,b] \subseteq [c_0,d_0]$ with $c_0 \le d_0$. Then $a \in [a,b]$ and $b \in [a,b]$ by [L1], so $c_0 \le a$ and $b \le d_0$, whence $d_0 - c_0 \ge b - a$ by [L4]; and $\sum_{j \le 0}(d_j - c_j) = d_0 - c_0$ by [L2]. So $P(0)$ holds. [base, L1, L2, L4]

1.3 **Induction hypothesis.** Fix $n \in \mathbb{N}$ and assume $P(n)$. [ih, given]

2.1 **The induction step: the two easy cases.** Let $a \le b$ and let $c_0 \le d_0, \dots, c_{n+1} \le d_{n+1}$ satisfy $[a,b] \subseteq \bigcup_{j \le n+1}[c_j,d_j]$; write $S := \sum_{j \le n+1}(d_j - c_j)$, a sum of nonnegative terms by [L1]. If $a = b$ then $b - a = 0 \le S$ by [L2]. Otherwise $a < b$; then $a \in [a,b]$ by [L1], so there is $i \le n+1$ with $a \in [c_i,d_i]$, that is $c_i \le a \le d_i$, and we fix one such $i$. If $d_i \ge b$ then $d_i - c_i \ge b - a$ by [L4], and $d_i - c_i \le S$ by [L2], so $S \ge b - a$. There remains the case $a < b$ and $d_i < b$. [step 1.1, L1, L2, L4, choose]

3.1 **The induction step: the remaining case, where the $i$-th interval is deleted.** Assume $a < b$ and $d_i < b$, and define $n+1$ pairs by $(c'_l, d'_l) := (c_l, d_l)$ for $l < i$ and $(c'_l, d'_l) := (c_{l+1}, d_{l+1})$ for $i \le l \le n$; by the splitting law and the index-shift convention of [L2], $S' := \sum_{l \le n}(d'_l - c'_l) = S - (d_i - c_i)$. Let $\eta$ be any real with $0 < \eta \le b - d_i$ and put $c := d_i + \eta$, so $d_i < c \le b$. Every $x \in [c,b]$ satisfies $x \ge c > d_i$, hence $x \notin [c_i,d_i]$ by [L1], and satisfies $a \le d_i < x \le b$, hence $x \in [a,b]$; so $x$ lies in some $[c_j,d_j]$ with $j \ne i$, that is in some $[c'_l,d'_l]$. Thus $[c,b] \subseteq \bigcup_{l \le n}[c'_l,d'_l]$ with $c \le b$, and step 1.3 gives $S' \ge b - c = b - d_i - \eta$. [step 1.3, step 2.1, L1, L2, L4]

4.1 **Passing to the limiting value of $\eta$, and the conclusion.** In the case of step 3.1 one has $S' \ge b - d_i$: were $S' < b - d_i$, the real $\eta_0 := (b - d_i - S') \cdot 2^{-1}$ would satisfy $0 < \eta_0 < b - d_i$ by [L4], so step 3.1 would give $S' \ge b - d_i - \eta_0 = (b - d_i + S') \cdot 2^{-1} > S'$, which is impossible. Hence $S = (d_i - c_i) + S' \ge (d_i - a) + (b - d_i) = b - a$ by [L4], using $c_i \le a$ from step 2.1. Together with the cases settled in step 2.1 this proves $P(n+1)$, so by [L3] $P(n)$ holds for every $n \in \mathbb{N}$. [step 2.1, step 3.1, L2, L3, L4, discharge-induction] ∎

## Remarks

- **Why the argument does not simply take $[d_i, b]$.** The point $d_i$ itself may be covered by the deleted interval and by nothing else, so the remaining intervals need not cover $[d_i,b]$. They do cover $[d_i + \eta,\, b]$ for every positive $\eta$, and that is enough: the bound $b - d_i - \eta$ holds for all such $\eta$, and step 4.1 removes the $\eta$. Every attempt to shortcut this step by taking a closed left endpoint at $d_i$ is false as stated.

- **Degenerate covering intervals are allowed and cost nothing.** A pair with $c_j = d_j$ contributes the single point $c_j$ and the length $0$, so a list may always be padded to a longer one, which is what [[lem-content-zero-implies-null]] does.

- **The bound is sharp.** The single interval $[a,b]$ covers $[a,b]$ with total length exactly $b - a$, and no cover does better.

- **This is not the Heine-Borel theorem, and it does not use it.** The lemma is a statement about finitely many intervals and is proved by counting alone; compactness enters only when a countable cover has to be reduced to a finite one, which is what [[lem-nondegenerate-interval-is-not-null]] does with it.
