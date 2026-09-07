---
id: "thm-hausdorff-measure-has-borel-hulls"
kind: "theorem"
title: "Hausdorff measure is Borel regular"
deps: ["thm-hausdorff-measure-is-metric-and-borel-measurable", "prop-zero-dimensional-hausdorff-measure-counts", "def-countable-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Fremlin, Measure Theory, 264F(a,b),264K,264Xd,264Ye
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap26.pdf
    - title: Falconer, The Geometry of Fractal Sets, Theorem 1.6(a)
      url: https://www.ma.imperial.ac.uk/~jswlamb/M345PA46/F85%20chap%201.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. For every subset $A$ of a metric space and every finite $s\ge0$ there is a Borel set $G\supseteq A$ with $\mathcal H^s(G)=\mathcal H^s(A)$. Consequently

$$\mathcal H^s(A)=\inf\{\mathcal H^s(B):A\subseteq B,\ B\text{ Borel}\},$$

so this is also the outer measure induced by the Borel restriction. In Euclidean spaces $G$ may be chosen $G_\delta$. This regularity assertion does not assert local finiteness.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under Countable Choice, Hausdorff measure is a metric outer measure and measures Borel sets. [[thm-hausdorff-measure-is-metric-and-borel-measurable]]

[F2] Under the standing Countable Choice hypothesis, $\mathcal H^0$ counts finite sets and is infinite on infinite sets. [[prop-zero-dimensional-hausdorff-measure-counts]]

[F3] Countable Choice allows a sequence of choices from nonempty families. [[def-countable-choice]]

## Proof

1.1 If $\mathcal H^s(A)=\infty$, take $G=X$. If $A=\varnothing$, take $G=\varnothing$. If $s=0$ and the measure is finite, $A$ is finite, hence closed and Borel. In Euclidean space a finite set is a $G_\delta$, by intersecting its open $1/k$-neighbourhoods. [F1, F2]

1.2 In the remaining case $s>0$ and $M=\mathcal H^s(A)<\infty$, choose for each $k\ge1$ a $2^{-k}$-cover $(U_{kj})$ of cost at most $M+2^{-k}$. Replacing each set by its closure preserves diameter: approximate two closure points by original points and use the triangle inequality. Set $G=\bigcap_k\bigcup_j\overline{U_{kj}}$. This is Borel and contains $A$. [F3, given]

2.1 For fixed $\delta>0$ and all sufficiently large $k$, the $k$th closed cover also covers $G$ at scale $\delta$. Hence $\mathcal H^s_\delta(G)\le M+2^{-k}$, so $\mathcal H^s_\delta(G)\le M$. Take the supremum over $\delta$ and use monotonicity to get equality. Infimising Borel-superset measures gives the displayed identity: every such value is at least $\mathcal H^s(A)$ and this $G$ attains it. [F1, step 1.2]

3.1 For Euclidean $X$ in the finite positive-exponent case, enlarge $U_{kj}$ to the open neighbourhood $V_{kj}=\{x:d(x,U_{kj})<\eta_{kj}\}$ with $0<\eta_{kj}<2^{-k-2}$ and $(\operatorname{diam}U_{kj}+2\eta_{kj})^s\le(\operatorname{diam}U_{kj})^s+2^{-k-j-1}$. Continuity of the positive power at every nonnegative finite base supplies these choices, including singleton sets. Then $G=\bigcap_k\bigcup_jV_{kj}$ is $G_\delta$, each covering diameter is at most $2^{1-k}$, and each cost is at most $M+2^{1-k}$. The same fixed-scale argument proves equality. [F3, step 2.1] ∎
