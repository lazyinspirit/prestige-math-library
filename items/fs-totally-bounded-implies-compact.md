---
id: fs-totally-bounded-implies-compact
kind: false-statement
title: "FALSE: a totally bounded metric space is compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-totally-bounded, def-metric-compactness, thm-compact-implies-complete-and-totally-bounded, def-complete-metric-space, lem-compactness-is-intrinsic, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, def-interval, def-metric-ball, def-metric-topology, thm-well-ordering-principle, lem-finite-set-has-max, def-max-min, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, def-metric-space]
justified_by: []
forward_refs: [cex-evt-fails-without-compactness, cex-heine-cantor-fails-without-compactness]
aliases: []
landmark: false
short: "FALSE: totally bounded implies compact"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Totally bounded space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Totally_bounded_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
pipeline_run: null
---

## Statement

**False claim:** every totally bounded metric space ([[def-totally-bounded]]) is
compact ([[def-metric-compactness]]).

**Where the claim comes from, and what is actually true.** A compact metric space
*is* totally bounded, and it is also complete
([[thm-compact-implies-complete-and-totally-bounded]]); the converse needs both
of those conditions, not one of them
([[thm-complete-and-totally-bounded-implies-compact]]). The claim above drops
completeness, and dropping it is fatal.

The refutation takes the open interval $(0,1)$ ([[def-interval]]) as a metric
subspace of $\mathbb{R}$ with its usual metric $|x-y|$
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]).

## Facts & Assumptions

**Given:** The interval $(0,1) = \{x \in \mathbb{R} : 0 < x < 1\}$ as a metric subspace of $(\mathbb{R}, d_{\mathbb{R}})$, $d_{\mathbb{R}}(x,y) = |x-y|$.

[A1] The false claim: every totally bounded metric space is compact.

[L1] A space is totally bounded when for every real $\varepsilon > 0$ it has a finite $\varepsilon$-net, a finite subset $F$ with the balls $B(y,\varepsilon)$, $y \in F$, covering the space ([[def-totally-bounded]], [[def-metric-ball]]).

[L2] A subset $A$ of a metric space is compact exactly when every family of open subsets of the ambient space whose union contains $A$ has finitely many members whose union contains $A$; and the sets open in the subspace $A$ are the traces on $A$ of the open subsets of the ambient space ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]], [[def-metric-topology]]).

[L3] In $(\mathbb{R}, d_{\mathbb{R}})$ the ball $B(x,r)$ is the interval $(x-r, x+r)$, and the subspace metric on $(0,1)$ is the restriction of $d_{\mathbb{R}}$ ([[lem-real-line-is-a-metric-space]], [[def-interval]], [[def-isometry-and-metric-embedding]], [[def-metric-space]]).

[L4] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] A nonempty finite set of reals has a minimum, one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L6] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; reciprocals of positives are positive and reverse the order ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

## Refutation

**Proof technique:** direct.

1.1 Let $\varepsilon > 0$ be real and take a natural $m \ge 1$ with $1/m < \varepsilon$; the points $j/(m+1)$ for $1 \le j \le m$ lie in $(0,1)$, since $0 < j/(m+1) < 1$, and they form a finite subset $F$ of $(0,1)$. [L3, L6]

2.1 $F$ is a finite $\varepsilon$-net for $(0,1)$: given $x \in (0,1)$, the set of naturals $j \ge 1$ with $x < (j+1)/(m+1)$ is nonempty, containing $m$ because $x < 1 = (m+1)/(m+1)$, so it has a least element $j$, and $j \le m$. [L4, L6, step 1.1]

3.1 For that $j$ one has $x < (j+1)/(m+1)$ and also $(j-1)/(m+1) < x$: for $j = 1$ because $x > 0$, and for $j \ge 2$ because minimality gives $x \ge j/(m+1) > (j-1)/(m+1)$. Hence $|x - j/(m+1)| < 1/(m+1) < 1/m < \varepsilon$, so $x$ lies in the subspace ball of radius $\varepsilon$ about $j/(m+1)$. [L3, L6, step 2.1]

4.1 As $\varepsilon > 0$ was arbitrary, $(0,1)$ with the restricted metric is totally bounded. [L1, step 1.1, step 3.1]

5.1 For each $k \in \mathbb{N}$ put $U_k := (1/(k+2),\ 1)$, an open subset of $\mathbb{R}$ contained in $(0,1)$; the family $(U_k)_{k \in \mathbb{N}}$ has union $(0,1)$, because any $x \in (0,1)$ admits a natural $m \ge 1$ with $1/m < x$ and then $1/(m+2) < 1/m < x < 1$. [L3, L6, step 4.1]

6.1 No finitely many of the $U_k$ have union containing $(0,1)$: given $U_{k_0}, \dots, U_{k_p}$, put $t := \min\{1/(k_i+2) : i \le p\}$, a positive real; each $U_{k_i}$ is contained in $(t,1)$ because $1/(k_i+2) \ge t$, so the union of the finite subfamily is contained in $(t,1)$, while the real $x := \min\{t, 1/2\}/2$ satisfies $0 < x < 1$ and $x \le t$, so $x \in (0,1)$ and $x$ lies in no $U_{k_i}$. [L5, L6, step 5.1]

7.1 Hence $(0,1)$ is not a compact subset of $\mathbb{R}$, that is the metric subspace $(0,1)$ is a totally bounded metric space that is not compact, and the claim [A1] is false. [A1, L2, step 4.1, step 5.1, step 6.1] ∎

## Remarks

**What the witness lacks is completeness.** A compact metric space is complete ([[thm-compact-implies-complete-and-totally-bounded]], [[def-complete-metric-space]]), and $(0,1)$ is not: the terms $1/(k+2)$ form a Cauchy sequence in $(0,1)$ whose only candidate limit in $\mathbb{R}$ is $0$, which is not a point of the space. Adding completeness to total boundedness does restore compactness ([[thm-complete-and-totally-bounded-implies-compact]]), at the cost of the Axiom of Countable Choice.

**The same interval also witnesses that boundedness is far from compactness**, and it is the standard example behind the failure of the extreme value theorem and of Heine-Cantor off a compact domain ([[cex-evt-fails-without-compactness]], [[cex-heine-cantor-fails-without-compactness]]).
