---
id: ex-closed-cube-is-totally-bounded
kind: example
title: "The cube $[-M,M]^n$ in $\\mathbb{R}^n$ is totally bounded, with an explicit finite $\\varepsilon$-net of grid points and no appeal to the integer part"
status: published
origin: session
deps: [def-totally-bounded, def-metric-compactness, thm-heine-borel-rn, thm-compact-implies-complete-and-totally-bounded, lem-metrics-on-rn, def-metric-ball, def-finite-sum, lem-finite-sum-laws, def-integer-power, def-isometry-and-metric-embedding, thm-well-ordering-principle, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, thm-of-square-roots, lem-of-square-monotone, def-canonical-natural, def-abs-value]
justified_by: []
aliases: []
landmark: false
short: "the cube has an explicit net"
proof_strategy: direct
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
    - title: "Totally bounded space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Totally_bounded_space"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
pipeline_run: null
---

## Example

Let $n \in \mathbb{N}$ with $n \ge 1$, let $M \in \mathbb{R}$ with $M > 0$, and
let $(\mathbb{R}^n, d_2)$ carry the Euclidean metric ([[lem-metrics-on-rn]]). The
**cube**

$$Q \;:=\; \{\, x \in \mathbb{R}^n : -M \le x_k \le M \ \text{ for every } k < n \,\}$$

is a totally bounded metric subspace of $(\mathbb{R}^n,d_2)$
([[def-totally-bounded]], [[def-isometry-and-metric-embedding]]), and a finite
$\varepsilon$-net can be written down: choose a natural $m \ge 1$ with
$1/m < \varepsilon/(2M\iota(n))$, put $h := 2M/m$, and take the **grid**

$$G \;:=\; \{\, g \in Q : \text{each } g_k = -M + j_k h \text{ for some natural } j_k \le m \,\}.$$

No integer part and no floor function is used: the index $j_k$ attached to a
point of $Q$ is produced as a **least** natural meeting an inequality
([[thm-well-ordering-principle]]).

## Facts & Assumptions

**Given:** $n \ge 1$, a real $M > 0$, the cube $Q \subseteq \mathbb{R}^n$ with the metric $d_2$ restricted to it, and a real $\varepsilon > 0$.

[L1] $d_2(x,y) = \sqrt{\sum_{k<n}(x_k-y_k)^2}$ is a metric on $\mathbb{R}^n$, and $d_\infty(x,y) = \max\{|x_k-y_k| : k<n\}$ is another ([[lem-metrics-on-rn]], [[def-finite-sum]], [[def-abs-value]]).

[L2] $d_2(x,y) \le \iota(n)\, d_\infty(x,y)$, since each $(x_k-y_k)^2 \le d_\infty(x,y)^2$ gives $d_2(x,y)^2 \le \iota(n) d_\infty(x,y)^2 \le (\iota(n)d_\infty(x,y))^2$ using $\iota(n) \ge 1$, and squaring is monotone on the nonnegatives ([[lem-finite-sum-laws]], [[lem-of-square-monotone]], [[thm-of-square-roots]], [[def-canonical-natural]]).

[L3] A finite $\varepsilon$-net for a metric space is a finite subset $F$ of it with the balls $B(y,\varepsilon)$, $y \in F$, covering the space, and total boundedness asks for one at every real $\varepsilon > 0$; balls of a subspace are traces of ambient balls ([[def-totally-bounded]], [[def-metric-ball]], [[def-isometry-and-metric-embedding]]).

[L4] A set listed as $\{a_0, \dots, a_p\}$, that is the image of a function whose domain is a natural number, is finite ([[def-metric-compactness]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$; reciprocals of positives are positive and reverse the order; and integer powers are those of [[def-integer-power]] ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L7] A closed and bounded subset of $\mathbb{R}^n$ is compact, and a compact metric space is totally bounded ([[thm-heine-borel-rn]], [[thm-compact-implies-complete-and-totally-bounded]]).

## Verification

**Proof technique:** direct.

1.1 Take a natural $m \ge 1$ with $1/m < \varepsilon/(2M\iota(n))$, which exists because $2M\iota(n) > 0$, and put $h := 2M/m > 0$, so that $\iota(n) h = 2M\iota(n)/m < \varepsilon$. [L6]

2.1 Let $G$ be the set of points of $\mathbb{R}^n$ each of whose coordinates is $-M + jh$ for some natural $j \le m$; every such point lies in $Q$, since $0 \le jh \le mh = 2M$ gives $-M \le -M + jh \le M$. [L1, step 1.1]

3.1 $G$ is finite: writing a natural $t < (m+1)^n$ in base $m+1$ gives digits $t_0, \dots, t_{n-1}$, each a natural $\le m$, and $t \mapsto$ the point with $k$-th coordinate $-M + t_k h$ is a function from the natural number $(m+1)^n$ onto $G$, so $G$ is listed by that function. [L4, step 2.1]

3.2 Let $y \in Q$ and $k < n$; the set of naturals $j \le m$ with $y_k \le -M + jh$ is nonempty, containing $m$ because $y_k \le M = -M + mh$, so it has a least element $j_k$. [L5, step 2.1]

4.1 Then $|y_k - (-M + j_k h)| \le h$: if $j_k = 0$ then $y_k \le -M$ and also $y_k \ge -M$, so the difference is $0$; and if $j_k \ge 1$ then minimality gives $y_k > -M + (j_k-1)h$, so $-h < y_k - (-M+j_k h) \le 0$. [step 3.2]

5.1 Writing $g$ for the point of $G$ with $k$-th coordinate $-M + j_k h$, step 4.1 gives $d_\infty(y,g) \le h$, hence $d_2(y,g) \le \iota(n)h < \varepsilon$ by step 1.1, so $y$ lies in the ball of radius $\varepsilon$ about $g$ in the subspace $Q$. [L1, L2, L3, step 1.1, step 4.1]

6.1 So $G$ is a finite $\varepsilon$-net for $Q$; as $\varepsilon > 0$ was arbitrary, $Q$ is totally bounded. [L3, step 3.1, step 5.1] ∎

## Remarks

**A second proof, and why the explicit one is worth having.** $Q$ is closed and bounded in $\mathbb{R}^n$, hence compact, hence totally bounded, which proves the same statement in one line [L7]. The explicit grid is given because it exhibits the net rather than asserting that one exists, and because the count of grid points, $(m+1)^n$, shows how the size of a net grows with the dimension — the feature that makes total boundedness a genuinely metric notion rather than a consequence of boundedness ([[fs-bounded-implies-totally-bounded]]).

**Why the least index and not the integer part.** The natural choice of $j_k$ is the integer part of $(y_k+M)/h$, and this library has no integer-part function at this point in the reading order. Taking the least $j \le m$ with $y_k \le -M + jh$ produces the same index, using only that a nonempty set of naturals has a least element.
