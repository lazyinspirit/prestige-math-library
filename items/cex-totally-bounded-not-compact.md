---
id: cex-totally-bounded-not-compact
kind: counterexample
title: "The open interval $(0,1)$ is totally bounded and not compact, the cover by the intervals $(1/(k+2), 1)$ having no finite subcover"
status: published
origin: session
deps: [fs-totally-bounded-implies-compact, def-totally-bounded, def-metric-compactness, lem-compactness-is-intrinsic, def-complete-metric-space, thm-compact-implies-complete-and-totally-bounded, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, def-interval, def-metric-ball, def-metric-topology, lem-finite-set-has-max, def-max-min, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, def-metric-space]
justified_by: []
aliases: []
landmark: false
cx_machine_verified: false
short: "$(0,1)$ is totally bounded, not compact"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every totally bounded metric space is compact
([[fs-totally-bounded-implies-compact]]).

The witness is the interval $(0,1)$ ([[def-interval]]) as a metric subspace of
$(\mathbb{R}, d_{\mathbb{R}})$, $d_{\mathbb{R}}(x,y) = |x-y|$
([[lem-real-line-is-a-metric-space]], [[def-isometry-and-metric-embedding]]). It
is totally bounded ([[def-totally-bounded]]), the points $j/(m+1)$ for
$1 \le j \le m$ forming a finite net of mesh $1/(m+1)$; and it is not compact
([[def-metric-compactness]]), the family

$$U_k \;:=\; \Big(\tfrac{1}{k+2},\ 1\Big), \qquad k \in \mathbb{N},$$

having union $(0,1)$ and no finite subfamily with that union. The index is
written $k+2$ because $\mathbb{N}$ contains $0$, so that $1/(k+2) \le 1/2 < 1$
for every $k$ and each $U_k$ is a nonempty subinterval of $(0,1)$.

The full verification is carried out in
[[fs-totally-bounded-implies-compact]]; this item records the witness and says
what makes it work.

## Facts & Assumptions

**Given:** The interval $(0,1)$ with the metric $|x-y|$ restricted to it, and the sets $U_k = (1/(k+2), 1)$ for $k \in \mathbb{N}$.

[A1] The refuted claim: every totally bounded metric space is compact.

[L1] $(0,1)$ with the restricted metric is totally bounded, and the family $(U_k)_{k \in \mathbb{N}}$ consists of open subsets of $\mathbb{R}$ contained in $(0,1)$ with union $(0,1)$, no finitely many of which have union $(0,1)$ ([[fs-totally-bounded-implies-compact]], [[def-totally-bounded]], [[def-interval]], [[def-metric-topology]], [[def-metric-ball]], [[lem-real-line-is-a-metric-space]], [[def-metric-space]]).

[L2] A subset $A$ of a metric space is compact exactly when every family of open subsets of the ambient space whose union contains $A$ has finitely many members whose union contains $A$ ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

[L3] A nonempty finite set of reals has a minimum, one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L4] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/m < \eta$, and reciprocals of positives are positive and reverse the order ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L5] A compact metric space is complete ([[thm-compact-implies-complete-and-totally-bounded]], [[def-complete-metric-space]]).

## Counterexample

**Proof technique:** direct.

1.1 $(0,1)$ with the restricted metric is a totally bounded metric space. [L1]

2.1 The family $(U_k)_{k \in \mathbb{N}}$ consists of open subsets of $\mathbb{R}$ and has union $(0,1)$: given $x \in (0,1)$, a natural $m \ge 1$ with $1/m < x$ gives $1/(m+2) < 1/m < x < 1$, so $x \in U_m$. [L1, L4, step 1.1]

3.1 Given finitely many members $U_{k_0}, \dots, U_{k_p}$, put $t := \min\{1/(k_i+2) : i \le p\}$, a positive real; each $U_{k_i}$ is contained in $(t,1)$ because $1/(k_i+2) \ge t$, so the union of the finite subfamily lies in $(t,1)$, while $x := \min\{t,1/2\}/2$ satisfies $0 < x < 1$ and $x \le t$, so $x \in (0,1)$ lies in no $U_{k_i}$. [L3, L4, step 2.1]

4.1 Hence no finitely many of the $U_k$ have union containing $(0,1)$, so $(0,1)$ is not a compact subset of $\mathbb{R}$, that is not a compact metric space, while being totally bounded by step 1.1; the claim [A1] is refuted. [A1, L2, step 1.1, step 2.1, step 3.1] ∎

## Remarks

**What the witness lacks is completeness.** A compact metric space is complete [L5], and $(0,1)$ is not: the terms $1/(k+2)$ form a Cauchy sequence in it whose only candidate limit in $\mathbb{R}$ is $0$, a point the space omits. Adding completeness to total boundedness does restore compactness, at the cost of the Axiom of Countable Choice ([[thm-complete-and-totally-bounded-implies-compact]]).

**The same cover fails to have a Lebesgue number**, which is the other thing compactness would have supplied ([[cex-open-cover-with-no-lebesgue-number]]).
