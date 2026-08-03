---
id: cex-open-cover-with-no-lebesgue-number
kind: counterexample
title: "The cover of $(0,1)$ by the intervals $(1/(k+2), 1)$ has no Lebesgue number, so the Lebesgue number lemma needs compactness"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-lebesgue-number-lemma, cex-totally-bounded-not-compact, def-metric-compactness, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, def-interval, def-metric-bounded-diameter, def-metric-topology, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, def-metric-space]
justified_by: []
aliases: []
landmark: false
cx_machine_verified: false
short: "a cover with no Lebesgue number"
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
    - title: "Lebesgue's number lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lebesgue%27s_number_lemma"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every open cover of a metric space has a Lebesgue number, that
is a real $\delta > 0$ such that every nonempty subset of diameter less than
$\delta$ lies inside a single member of the cover.

The true statement carries a compactness hypothesis
([[thm-lebesgue-number-lemma]]). The witness is the interval $(0,1)$
([[def-interval]]) as a metric subspace of $\mathbb{R}$
([[lem-real-line-is-a-metric-space]]), which is not compact
([[cex-totally-bounded-not-compact]]), covered by

$$U_k \;:=\; \Big(\tfrac{1}{k+2},\ 1\Big), \qquad k \in \mathbb{N}.$$

For every real $\delta > 0$ the interval $A := (0,\ t)$ with
$t := \min\{\delta/2,\ 1/2\}$ is a nonempty subset of $(0,1)$ of diameter at most
$t < \delta$ ([[def-metric-bounded-diameter]]) that lies inside no $U_k$.

## Facts & Assumptions

**Given:** The interval $(0,1)$ with the metric $|x-y|$ restricted to it, and the sets $U_k = (1/(k+2), 1)$ for $k \in \mathbb{N}$.

[A1] The refuted claim: every open cover of a metric space has a Lebesgue number.

[L1] $(0,1)$ is a metric subspace of $(\mathbb{R},d_{\mathbb{R}})$ that is not compact, and the family $(U_k)_{k \in \mathbb{N}}$ consists of sets open in it with union $(0,1)$ ([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]], [[def-interval]], [[def-metric-topology]], [[cex-totally-bounded-not-compact]], [[def-metric-compactness]], [[def-metric-space]]).

[L2] $\operatorname{diam}(A) = \sup\{|u-v| : u,v \in A\}$ for nonempty bounded $A$, so any upper bound of the distances bounds the diameter ([[def-metric-bounded-diameter]]).

[L3] A Lebesgue number for a cover is a real $\delta > 0$ such that every nonempty subset of diameter less than $\delta$ lies inside a single member of the cover; a compact metric space has one for every open cover ([[thm-lebesgue-number-lemma]]).

[L4] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$, and reciprocals of positives are positive and reverse the order ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

## Counterexample

**Proof technique:** direct.

1.1 The family $(U_k)_{k \in \mathbb{N}}$ is an open cover of $(0,1)$: each $U_k$ is the trace on $(0,1)$ of an open subset of $\mathbb{R}$ and is contained in $(0,1)$, and any $x \in (0,1)$ admits a natural $m \ge 1$ with $1/m < x$, whence $1/(m+2) < 1/m < x < 1$ and $x \in U_m$. [L1, L4]

2.1 Let $\delta > 0$ be real, put $t := \min\{\delta/2,\ 1/2\}$ and $A := (0,t)$; then $t > 0$, $A$ is a nonempty subset of $(0,1)$, and every $u,v \in A$ satisfy $|u - v| < t$, so $\operatorname{diam}(A) \le t \le \delta/2 < \delta$. [L2, step 1.1]

3.1 $A$ is contained in no $U_k$: for a given $k$ the real $x := \min\{t,\ 1/(k+2)\}/2$ satisfies $0 < x \le t/2 < t$, so $x \in A$, and it satisfies $x \le \big(1/(k+2)\big)/2 < 1/(k+2)$, so $x \notin U_k$. [L4, step 2.1]

4.1 So no real $\delta > 0$ is a Lebesgue number for this cover, and the claim [A1] is refuted; since $(0,1)$ is not compact, the compactness hypothesis of the Lebesgue number lemma is not removable. [A1, L1, L3, step 1.1, step 2.1, step 3.1] ∎

## Remarks

**What goes wrong.** The members of the cover grow towards $(0,1)$ but none of them reaches down to $0$, so a set clinging to $0$ of any positive diameter is never captured whole. On a compact space the finitely many members of a subcover put a uniform floor under this, and that floor is the Lebesgue number ([[thm-lebesgue-number-lemma]]).

**The same cover shows non-compactness directly**, having no finite subcover ([[cex-totally-bounded-not-compact]]), and the failure of uniform continuity of $1/x$ on $(0,1)$ is the analytic face of the same phenomenon ([[cex-heine-cantor-fails-without-compactness]]).
