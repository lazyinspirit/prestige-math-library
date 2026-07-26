---
id: lem-cauchy-sequence-bounded
kind: lemma
title: "Every Cauchy sequence of reals is bounded"
status: published
origin: session
deps: [def-real-limit, def-sequence, lem-finite-set-has-max, lem-of-triangle-inequality, def-max-min, lem-rat-embeds-dense, lem-of-add-order, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.11(a))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1 (Prop. 6.1.17)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
---

## Statement

Every Cauchy sequence of reals is bounded: if $(x_k)$ is a Cauchy sequence
([[def-real-limit]]) then there is $M \in \mathbb{R}$ with $|x_k| \le M$ for every
$k \in \mathbb{N}$ ([[def-sequence]]).

This is the real-number counterpart of the lemma proving the same statement for
Cauchy sequences of rationals inside $\mathbb{Q}$, and the argument is the same
one: the Cauchy condition at a single value of $\varepsilon$
confines all but finitely many terms, and the finitely many exceptions are
handled by a maximum.

## Facts & Assumptions

**Given:** A Cauchy sequence $(x_k)$ of reals.

[A1] Cauchy condition: for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$ ([[def-real-limit]]).

[L1] Triangle inequality: $|x| = |(x - y) + y| \le |x - y| + |y|$ for all reals $x, y$ ([[lem-of-triangle-inequality]]).

[L2] Every nonempty finite list of reals has a maximum, so $\max\{a_0, \dots, a_n\}$ is a well-determined real that dominates each listed value ([[lem-finite-set-has-max]], [[def-max-min]]).

[L3] The rational $1$ is positive, and the embedding of $\mathbb{Q}$ in $\mathbb{R}$ carries it to $1 \in \mathbb{R}$, so $\varepsilon = 1$ is an admissible test value in [A1] ([[lem-rat-embeds-dense]]).

[L4] Order arithmetic in $\mathbb{R}$: translation invariance, $a < b \Rightarrow a + c < b + c$ ([[lem-of-add-order]]); and the mixed transitivity $a \le b < c \Rightarrow a < c$, immediate from the reading of $a \le b$ as "$a < b$ or $a = b$" together with transitivity of $<$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L5] The order on $\mathbb{N}$ is total, so every index satisfies $k \le K$ or $k \ge K$ ([[thm-nat-linear-order]]).

[L6] A sequence of reals is bounded when some $M \in \mathbb{R}$ satisfies $|x_k| \le M$ at every index ([[def-sequence]]).

## Proof

**Proof technique:** direct.

1.1 Apply [A1] with the rational test value $\varepsilon = 1$: fix $K \in \mathbb{N}$ such that $|x_k - x_l| < 1$ for all $k, l \ge K$. [A1, L3, choose]

1.2 For all reals $x_k$ and $x_K$ the triangle inequality gives $|x_k| \le |x_k - x_K| + |x_K|$. [L1]

2.1 For every $k \ge K$: $|x_k - x_K| < 1$ by step 1.1, and adding $|x_K|$ to both sides then combining with step 1.2 gives $|x_k| < |x_K| + 1$. [step 1.1, step 1.2, L4]

2.2 Define $M := \max\{\,|x_0|, |x_1|, \dots, |x_K|, |x_K| + 1\,\}$, the maximum of a nonempty finite list of reals, which exists by [L2]. [step 1.1, L2, choose]

3.1 For every $k \le K$: $|x_k|$ is one of the listed values, so $|x_k| \le M$. [step 2.2, L2]

3.2 For every $k \ge K$: $|x_k| < |x_K| + 1 \le M$, since $|x_K| + 1$ is one of the listed values. [step 2.1, step 2.2, L2]

4.1 Every index satisfies $k \le K$ or $k \ge K$, so $|x_k| \le M$ for every $k \in \mathbb{N}$ and $(x_k)$ is bounded. [step 3.1, step 3.2, L5, L6] ∎

## Remarks

- **One value of $\varepsilon$ suffices, and $\varepsilon = 1$ is not special.**
  Any single positive rational would do; what matters is that the Cauchy
  condition confines all terms from some index onward to within a fixed distance
  of one term, after which only finitely many terms remain, and a finite list of
  reals has a maximum ([[lem-finite-set-has-max]]). This is the same division of
  labour as in [[lem-convergent-implies-bounded]].

- **The converse is false.** A bounded sequence need not be Cauchy: the
  alternating sequence of [[fs-bounded-implies-convergent]] is bounded and, being
  divergent, is not Cauchy ([[lem-convergent-implies-cauchy]] would otherwise
  make it convergent by [[thm-cauchy-criterion-via-lub]]). Boundedness is
  strictly weaker, and what it does yield is a convergent *subsequence*
  ([[thm-bolzano-weierstrass]]).

- **No completeness is used.** The argument runs in any ordered field, and it is
  used here as the first of the three steps by which the least-upper-bound
  property is converted into Cauchy completeness in
  [[thm-cauchy-criterion-via-lub]].

- The rational counterpart, proved on the Cauchy-construction page, is
  [[lem-cauchy-bounded]]. It is the house-style exemplar for this argument, and
  nothing here depends on it, since the two lemmas live in different fields.
