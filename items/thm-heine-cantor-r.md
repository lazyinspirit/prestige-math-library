---
id: thm-heine-cantor-r
kind: theorem
title: "Heine-Cantor in $\\mathbb{R}$: a continuous real function on a compact subset of $\\mathbb{R}$ is uniformly continuous"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-continuity-real, def-continuity-real, lem-real-and-metric-notions-agree, def-open-cover-r, lem-of-triangle-inequality, lem-of-abs-value]
justified_by: []
aliases: [thm-uniform-continuity-on-compact-r]
landmark: true
short: "Heine-Cantor in R"
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Heine-Cantor theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 4 (Thm 4.19)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §3.4"
      url: "https://www.jirka.org/ra/"
    - title: "W. Trench, Introduction to Real Analysis, Ch. 8: Metric Spaces"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Introduction_to_Real_Analysis_%28Trench%29/08%3A_Metric_Spaces/8.00%3A_Introduction_to_Metric_Spaces"
    - title: "J. Lebl, Basic Analysis I, §3.3: Uniform continuity"
      url: "https://www.jirka.org/ra/html/sec_unifcont.html"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$ be compact ([[def-open-cover-r]]) and let
$f : K \to \mathbb{R}$ be continuous on $K$ ([[def-continuity-real]]). Then $f$
is uniformly continuous on $K$ ([[def-uniform-continuity-real]]).

**This theorem is stated twice in this library, on purpose.** Its metric-space
twin is [[thm-heine-cantor-metric]], proved there from the cover machinery of
metric spaces; the proof below uses the open-cover definition of compactness
in $\mathbb{R}$ directly. That the two
statements are the same statement in two vocabularies is
[[lem-real-and-metric-notions-agree]], clauses 1, 2 and 5, immediately above.

**Choice-free proof.** The argument below uses the open-cover definition of compactness directly. It considers every continuity neighbourhood at once and extracts only a finite subcover, so no countable or global choice function is selected.

## Facts & Assumptions

**Given:** A compact set $K\subseteq\mathbb R$ and a continuous function $f:K\to\mathbb R$.

[L1] Continuity at $x\in K$ means that for every $\eta>0$ there is $r>0$ such that $|f(y)-f(x)|<\eta$ whenever $y\in K$ and $|y-x|<r$ ([[def-continuity-real]]).

[L2] Every open cover of compact $K$ has a finite subcover ([[def-open-cover-r]]).

[L3] Uniform continuity means that for every $\varepsilon>0$ one $\delta>0$ works for every pair of points of $K$ at distance less than $\delta$ ([[def-uniform-continuity-real]]).

[L4] The real absolute value satisfies the triangle inequality ([[lem-of-triangle-inequality]], [[lem-of-abs-value]]).

## Proof

**Proof technique:** direct.

1.1 If $K=\varnothing$, the assertion is immediate. Otherwise fix $\varepsilon>0$. For each pair $(x,r)$ with $x\in K$, $r>0$, and $|f(y)-f(x)|<\varepsilon/2$ for every $y\in K$ satisfying $|y-x|<2r$, put $U_{x,r}:=(x-r,x+r)$. The family of all such open intervals is an open cover of $K$: for each $x$, [L1] gives the existence of at least one admissible $r$, and $x\in U_{x,r}$. This defines the full family by a property, without selecting one radius for each $x$. [given, L1]

2.1 By [L2], finitely many members $U_{x_1,r_1},\ldots,U_{x_m,r_m}$ cover $K$. Since $K$ is nonempty, $m\ge1$. Set $\delta=\min_{1\le i\le m}r_i>0$. [step 1.1, L2]

3.1 Let $y,z\in K$ with $|y-z|<\delta$, and choose one index $i$ with $y\in U_{x_i,r_i}$. Then $|y-x_i|<r_i<2r_i$ and, by [L4], $|z-x_i|\le|z-y|+|y-x_i|<\delta+r_i\le2r_i$. Admissibility of $(x_i,r_i)$ gives $|f(y)-f(x_i)|<\varepsilon/2$ and $|f(z)-f(x_i)|<\varepsilon/2$. Thus $|f(y)-f(z)|<\varepsilon$. The same $\delta$ works for every such pair, proving uniform continuity by [L3]. [step 1.1, step 2.1, L3, L4] ∎

## Remarks

- **Where compactness is used.** Continuity supplies all admissible local balls in step 1.1; compactness extracts finitely many in step 2.1. Taking the least of their radii gives the uniform bound. No simultaneous selection over the points of $K$ is made.

- **The converse is sharp.** For every noncompact $E \subseteq \mathbb{R}$ that is bounded there is a continuous function on $E$ that is not uniformly continuous, and for every noncompact $E$ there is an unbounded continuous function and a bounded continuous one with no greatest value. That is [[thm-compactness-is-necessary-for-evt-and-uniform-continuity]], later on this page, and together with this theorem it says that compactness is exactly the hypothesis these results need.
