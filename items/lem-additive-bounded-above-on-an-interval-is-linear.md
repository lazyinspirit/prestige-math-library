---
id: lem-additive-bounded-above-on-an-interval-is-linear
kind: lemma
title: "If an additive $f : \\mathbb{R} \\to \\mathbb{R}$ is bounded above on some nondegenerate interval, then $f(x) = f(1)\\,x$ for every real $x$"
status: draft
origin: session
deps: [def-additive-function, lem-additive-is-q-linear, def-interval, def-bounded-set, lem-rat-embeds-dense, cor-archimedean-reciprocal, thm-of-archimedean, def-complete-ordered-field, lem-of-abs-value, def-canonical-natural, lem-of-naturals-positive]
justified_by: []
aliases: []
landmark: true
short: "bounded above on an interval implies linear"
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
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
pipeline_run: null
---

## Statement

Let $f : \mathbb{R} \to \mathbb{R}$ be additive ([[def-additive-function]]) and
suppose there are reals $p < r$ and a real $M$ with $f(z) \le M$ for every
$z \in [p,r]$; that is, $f$ is bounded above on a nondegenerate interval
([[def-interval]], [[def-bounded-set]]). Then

$$f(x) \;=\; f(1)\,x \qquad \text{for every real } x .$$

**A nondegenerate interval is all that is needed, and its position is
irrelevant.** Any order-convex set with two distinct points contains a closed
$[p,r]$ with $p < r$, and the hypothesis is used only through that closed
interval; the argument then translates the interval along $\mathbb{Q}$ to cover
the whole line.

## Facts & Assumptions

**Given:** An additive $f : \mathbb{R} \to \mathbb{R}$, reals $p < r$, and a real $M$ with $f(z) \le M$ for every $z \in [p,r]$.

[A1] $f(x+y) = f(x) + f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[A2] $f(z) \le M$ for every $z$ with $p \le z \le r$, where $p < r$ ([[def-interval]], [[def-bounded-set]]).

[L1] An additive $f$ satisfies $f(0) = 0$, $f(-x) = -f(x)$, $f(qx) = qf(x)$ for every rational $q$ and every real $x$, and $f(\iota(n)x) = \iota(n)f(x)$ for every $n \in \mathbb{N}$ ([[lem-additive-is-q-linear]]).

[L2] Strictly between any two distinct reals there lies a rational ([[lem-rat-embeds-dense]]).

[L3] For every real $x$ there is a natural $n \ge 1$ with $x < \iota(n)$, and $\iota$ is positive and strictly increasing on the naturals $\ge 1$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]], [[def-canonical-natural]], [[lem-of-naturals-positive]]).

[L4] $\mathbb{R}$ is an ordered field: sums and products of positives are positive, and $u > 0$ with $v \ge u$ gives $v > 0$ ([[def-complete-ordered-field]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 Put $c := f(1)$ and define $g : \mathbb{R} \to \mathbb{R}$ by $g(x) := f(x) - c\,x$. Then $g$ is additive, since both $f$ and $x \mapsto cx$ are, and $g(q) = f(q) - cq = qf(1) - cq = 0$ for every rational $q$. [A1, L1, construct]

2.1 $g$ is bounded above on $[p,r]$: for $z \in [p,r]$ one has $g(z) = f(z) - cz \le M + |c|\,K$, where $K := \max\{|p|, |r|\}$, because $|cz| \le |c|\,|z| \le |c|\,K$ and hence $-cz \le |c|\,K$. Write $M' := M + |c|\,K$ for this bound. [step 1.1, A2, L4]

2.2 $g(x + q) = g(x)$ for every real $x$ and every rational $q$: additivity gives $g(x+q) = g(x) + g(q)$ and $g(q) = 0$. [step 1.1]

2.3 $g$ is identically $0$. Suppose $g(x_{0}) \ne 0$ for some real $x_{0}$. Replacing $x_{0}$ by $-x_{0}$ if necessary, which changes the sign of $g(x_{0})$ since $g(-x) = -g(x)$, we may take $g(x_{0}) > 0$. [step 1.1, L1]

3.1 $g$ is bounded above by $M'$ on the whole of $\mathbb{R}$. Let $x$ be real. The two reals $x - r$ and $x - p$ satisfy $x - r < x - p$, so there is a rational $q$ with $x - r < q < x - p$; then $p < x - q < r$, so $x - q \in [p,r]$ and $g(x) = g((x-q) + q) = g(x-q) \le M'$. [step 2.1, step 2.2, L2]

4.1 With $x_{0}$ as in step 2.3, take a natural $n \ge 1$ with $M'/g(x_{0}) < \iota(n)$; then $\iota(n)\,g(x_{0}) > M'$. But $g(\iota(n)x_{0}) = \iota(n)\,g(x_{0}) > M'$, contradicting step 3.1. So no such $x_{0}$ exists and $g$ vanishes identically. [step 1.1, step 3.1, step 2.3, L1, L3, L4]

5.1 Therefore $f(x) = c\,x = f(1)\,x$ for every real $x$. [step 1.1, step 4.1] ∎

## Remarks

- **Only an upper bound is used, and only on one interval.** The proof never
  bounds $f$ below and never uses more than the single closed interval $[p,r]$;
  the translation step 2.3 does the rest. A lower bound on an interval gives the
  same conclusion by applying the lemma to $-f$, which is additive and bounded
  above there, and that is how
  [[thm-cauchy-functional-equation-regularity]] obtains five of its six clauses
  from this one lemma, the sixth being argued separately there.

- **Where the Archimedean property enters.** Once, in step 4.1, to make the
  multiples $\iota(n)g(x_{0})$ exceed the bound $M'$. Over a non-Archimedean
  ordered field the argument fails at exactly that point, and the statement is
  not asserted there.
