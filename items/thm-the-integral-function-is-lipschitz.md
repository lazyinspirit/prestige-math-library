---
id: thm-the-integral-function-is-lipschitz
kind: theorem
title: "The integral function of a bounded integrable $f$ is Lipschitz, hence uniformly continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-integral-function, cor-integrability-of-absolute-values-products-and-lattice-operations, thm-monotonicity-of-the-integral, lem-integral-elementary-bounds, def-lipschitz-holder-contraction, thm-metric-regularity-hierarchy, lem-real-line-is-a-metric-space, lem-real-and-metric-notions-agree, def-continuity-real, def-uniform-continuity-real, def-bounded-set, def-oriented-integral, def-darboux-integral, lem-of-abs-value, def-abs-value, def-ordered-field, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "$F$ is Lipschitz"
proof_strategy: direct
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  precheck: pass
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Lipschitz continuity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lipschitz_continuity"
    - title: "Fundamental theorem of calculus (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_calculus"
    - title: "J. Lebl, Basic Analysis I, Fundamental theorem of calculus"
      url: "https://www.jirka.org/ra/html/sec_ftc.html"
pipeline_run: null
---

## Statement

Let $a < b$ be reals, let $f : [a,b] \to \mathbb{R}$ be integrable
([[def-darboux-integral]]), let $K \ge 0$ be a real with $|f(t)| \le K$ for every
$t \in [a,b]$ ([[def-bounded-set]]), and let $F$ be the integral function of $f$
([[def-the-integral-function]]). Then

$$\bigl|F(y) - F(x)\bigr| \;\le\; K\,|y - x| \qquad \text{for all } x,y \in [a,b] ,$$

that is, $F$ is Lipschitz with constant $K$ on $[a,b]$
([[def-lipschitz-holder-contraction]], [[lem-real-and-metric-notions-agree]]).
Consequently $F$ is uniformly continuous on $[a,b]$
([[def-uniform-continuity-real]]) and hence continuous there
([[def-continuity-real]]).

**No continuity of $f$ is assumed.** This is the strongest regularity of $F$
available before the fundamental theorem, and it is what makes the hypotheses of
that theorem visible as hypotheses: continuity of $f$ at a point buys
differentiability of $F$ there, and integrability alone already buys this much
everywhere.

## Facts & Assumptions

**Given:** Reals $a < b$, an integrable $f : [a,b] \to \mathbb{R}$, a real $K \ge 0$ with $|f| \le K$ on $[a,b]$, and the integral function $F(x) = \int_a^x f$; points $x,y \in [a,b]$.

[L1] $F(y) - F(x) = \int_x^y f$ for all $x,y \in [a,b]$, in either order ([[def-the-integral-function]]).

[L2] $|f|$ is integrable on every $[p,q] \subseteq [a,b]$ with $p<q$, and $\bigl|\int_p^q f\bigr| \le \int_p^q |f|$ there ([[cor-integrability-of-absolute-values-products-and-lattice-operations]], claims 1 and 3).

[L3] If $u \le w$ pointwise on $[p,q]$ and both are integrable then $\int_p^q u \le \int_p^q w$, and $\int_p^q c = c(q-p)$ for a constant $c$ ([[thm-monotonicity-of-the-integral]], [[lem-integral-elementary-bounds]]).

[L4] With oriented limits, $\int_y^x f = -\int_x^y f$ and $\int_x^x f = 0$ ([[def-oriented-integral]]).

[L5] Absolute value: $|{-t}| = |t|$, $|t| \ge 0$, and $|t| \le c$ follows from $-c \le t \le c$ ([[lem-of-abs-value]], [[def-abs-value]]).

[L6] A real function on $A \subseteq \mathbb{R}$ satisfying $|u(x)-u(x')| \le L|x-x'|$ for all $x,x' \in A$ is Lipschitz with constant $L$ as a map of metric spaces, $\mathbb{R}$ carrying its usual metric; a Lipschitz real function is uniformly continuous, and a uniformly continuous one is continuous ([[lem-real-and-metric-notions-agree]], clauses 3 and 6, [[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]], [[lem-real-line-is-a-metric-space]]).

[L7] Ordered-field arithmetic: the order is total and transitive, and multiplying an inequality by a nonnegative real preserves it ([[def-ordered-field]], [[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 **The case $x < y$.** By [L1], $F(y)-F(x) = \int_x^y f$, and $[x,y] \subseteq [a,b]$ with $x < y$. [given, L1]

1.2 **The case $x = y$.** Then $F(y)-F(x) = 0$ and $K|y-x| = 0$, so the inequality holds with equality. [L1, L4, L5]

2.1 On $[x,y]$ one has $|f(t)| \le K$ for every $t$, so by [L2] and [L3], $\bigl|\int_x^y f\bigr| \le \int_x^y |f| \le \int_x^y K = K\,(y-x)$. [step 1.1, given, L2, L3]

3.1 Hence $|F(y)-F(x)| \le K(y-x) = K|y-x|$ when $x < y$. [step 1.1, step 2.1, L5]

4.1 **The case $y < x$.** Applying step 3.1 to the pair $(y,x)$ gives $|F(x)-F(y)| \le K|x-y|$, and $|F(y)-F(x)| = |F(x)-F(y)|$ with $|y-x| = |x-y|$ by [L5]; so the inequality holds here too. [step 3.1, L5]

5.1 The three cases $x<y$, $x=y$, $y<x$ are exhaustive by [L7], so $|F(y)-F(x)| \le K|y-x|$ for all $x,y \in [a,b]$. [step 1.2, step 3.1, step 4.1, L7]

6.1 By [L6], $F$ is therefore Lipschitz with constant $K$ on $[a,b]$, hence uniformly continuous on $[a,b]$, hence continuous there. [step 5.1, L6] ∎

## Remarks

- **The estimate is written out on both sides of the diagonal.** Hiding the case $y < x$ inside the absolute value would conceal the fact that $\int_x^y f$ is then the *oriented* integral of [[def-oriented-integral]], and that the published inequality $\bigl|\int_p^q f\bigr| \le \int_p^q|f|$ is available only for $p \le q$. Step 4.1 is what pays for that.

- **The constant is any bound on $|f|$, and it need not be sharp.** If $f$ is integrable then it is bounded by definition of the Darboux sums, so some $K$ exists; the theorem is stated with $K$ given rather than existentially, because every later use supplies its own bound.

- **The dictionary lemma is cited on purpose.** Lipschitz and uniform continuity are defined in this library both for real functions and for maps of metric spaces, and [[lem-real-and-metric-notions-agree]] is the single item recording that the two families of notions coincide. Citing it, rather than proving the implication again, is what keeps the library from carrying two notions of continuity.
