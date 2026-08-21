---
id: ex-tangent-homeomorphism-between-bounded-and-unbounded-spaces
kind: example
title: "Tangent identifies a bounded incomplete interval with the unbounded complete real line"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-inverse-tangent, def-homeomorphism-and-open-maps,
       def-metric-bounded-diameter, lem-real-line-is-a-metric-space,
       thm-reals-cauchy-complete, lem-real-and-metric-notions-agree,
       thm-complete-subspace-iff-closed, thm-metric-sequential-closure,
       cor-archimedean-reciprocal,
       def-pi-via-first-positive-cosine-zero,
       thm-cosine-has-a-smallest-positive-zero,
       def-metric-convergence, def-complete-metric-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Terence Tao, An Epsilon of Room, Example 1.6.28"
      url: "https://terrytao.files.wordpress.com/2010/02/epsilon.pdf"
pipeline_run: null
---

## Example

The map

$$\tan:(-\pi/2,\pi/2)\longrightarrow\mathbb R$$

is a homeomorphism. Its domain is bounded and incomplete in the usual metric,
while its codomain is unbounded and complete. Thus boundedness and completeness
of metric spaces are not topological properties.

## Facts & Assumptions

**Given:** The interval $I:=(-\pi/2,\pi/2)$ and the usual absolute-value metrics on $I$ and $\mathbb R$.

[L1] Tangent restricts to a continuous strictly increasing bijection $\tan:I\to\mathbb R$, whose inverse $\arctan:\mathbb R\to I$ is continuous ([[def-principal-inverse-tangent]]).

[L2] A homeomorphism is a continuous bijection with continuous inverse ([[def-homeomorphism-and-open-maps]]).

[L3] In the usual metric, $B(0,r)=(-r,r)$ for $r>0$ ([[lem-real-line-is-a-metric-space]]).

[L4] Every Cauchy sequence of real numbers converges to a real number ([[thm-reals-cauchy-complete]]).

[L5] For a subset of $\mathbb R$ with the subspace metric, metric Cauchy sequences are exactly real Cauchy sequences ([[lem-real-and-metric-notions-agree]], claim 7).

[L6] A subset of a metric space is closed exactly when it is sequentially closed ([[thm-metric-sequential-closure]], claim 2).

[L7] A subspace of a complete metric space is complete if and only if it is closed ([[thm-complete-subspace-iff-closed]]).

[L8] For every real $\varepsilon>0$, there is a positive integer $N$ with $1/N<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L9] The number $\pi=2\gamma$ is positive because the smallest positive zero of cosine satisfies $\gamma\in(0,2)$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]]).

[L10] The usual real line is not a bounded metric space ([[lem-real-line-is-a-metric-space]]).

[L11] A sequence converges in a metric space when its distance from the proposed limit is eventually below every positive tolerance ([[def-metric-convergence]]); for the usual real metric this distance is $|x_k-x|$ ([[lem-real-line-is-a-metric-space]]).

[L12] A metric space is complete when every Cauchy sequence in it converges to a point of the space ([[def-complete-metric-space]]).

[L13] A subset of a metric space is bounded when it is empty or is contained in some open ball ([[def-metric-bounded-diameter]]).

## Verification

**Proof technique:** direct.

1.1 By [L1] and [L2], tangent is a homeomorphism from $I$ onto $\mathbb R$, with inverse arctangent. [L1, L2]

1.2 The radius $\pi/2$ is positive by [L9], and [L3] identifies $I$ with the ball $B(0,\pi/2)$, so $I$ is bounded by [L13]; $\mathbb R$ is unbounded by [L10]. [L3, L9, L10, L13, algebra]

1.3 By [L4] and [L5], every metric Cauchy sequence in the usual real line converges as a real sequence; [L11] identifies that convergence with metric convergence. Thus $\mathbb R$ is a complete metric space by [L12]. [L4, L5, L11, L12]

1.4 For $k\in\mathbb N$, put $$x_k:=\frac\pi2\left(1-\frac1{k+2}\right).$$ By [L9], $0<x_k<\pi/2$, so $x_k\in I$; [L8] gives $x_k\to\pi/2$ as a real sequence, and [L11] identifies this with convergence in the usual metric, but $\pi/2\notin I$. Thus $I$ is not sequentially closed and is not closed by [L6]. [L6, L8, L9, L11, construct, algebra]

2.1 The ambient real line is complete by step 1.3, while the subspace $I$ is not closed by step 1.4, so [L7] makes $I$ incomplete. [step 1.3, step 1.4, L7]

3.1 The homeomorphic spaces in step 1.1 have opposite boundedness verdicts by step 1.2 and opposite completeness verdicts by steps 1.3 and 2.1. Therefore neither boundedness nor completeness is preserved by homeomorphism. [step 1.1, step 1.2, step 1.3, step 2.1] ∎
