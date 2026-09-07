---
id: "fs-continuous-injections-preserve-hausdorff-dimension"
kind: "false-statement"
title: "Continuous injections preserve Hausdorff dimension"
deps: ["def-hausdorff-content-at-scale-delta", "thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line", "thm-hausdorff-dimension-critical-exponent"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: https://arxiv.org/pdf/math/0302190
      title: Semmes §2.5 pp.31–32, snowflake metric and Hausdorff measure identity
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. The assertion “continuous injections preserve Hausdorff dimension” is false even for a homeomorphism between compact metric spaces. On $I=[0,1]$, put $d(x,y)=|x-y|$ and $\rho(x,y)=\sqrt{|x-y|}$. The identity from $(I,d)$ to $(I,\rho)$ is a homeomorphism, but the dimensions are one and two respectively.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Scale Hausdorff values infimise diameter powers over arbitrary nonempty sets, with the specified zero-exponent convention. [[def-hausdorff-content-at-scale-delta]]

[F2] Under the standing Countable Choice hypothesis, for every subset $A\subseteq\mathbb R$, $\mathcal H^1(A)=\lambda_1^*(A)$. [[thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line]]

[F3] Finite positive measure at exponent $t$ identifies dimension $t$. [[thm-hausdorff-dimension-critical-exponent]]

## Refutation

1.1 Nonnegativity, symmetry and separation for $\rho$ follow from those for $d$. For the triangle inequality, $\sqrt{a+b}\le\sqrt a+\sqrt b$ for $a,b\ge0$, because squaring the right side gives $a+b+2\sqrt{ab}\ge a+b$. Apply this to the triangle inequality for $d$. Also $B_\rho(x,r)=B_d(x,r^2)$ for every $r>0$, so both metrics have identical open sets and the identity is a homeomorphism. The usual compact interval is therefore compact in both metrics. [given]

1.2 For every subset $U\subseteq I$, $\operatorname{diam}_\rho U=(\operatorname{diam}_d U)^{1/2}$; for nonempty sets this follows from monotonicity and continuity of the square root applied to the supremum of distances, and for the empty set both sides are zero. Thus for $t\ge0$ and $\delta>0$, the same cover families give $\mathcal H^{t}_{\rho,\delta}(I)=\mathcal H^{t/2}_{d,\delta^2}(I)$. Nonempty singleton costs match also when $t=0$. Passing to the small-scale suprema yields $\mathcal H^t_\rho(I)=\mathcal H^{t/2}_d(I)$. Covers in the line may be intersected with $I$ without increasing their costs, and covers in $I$ are line covers, so the usual ambient and subspace values agree. [F1]

2.1 The unit interval has Lebesgue length one. At $t=2$ the preceding identity gives $\mathcal H^2_\rho(I)=\mathcal H^1_d(I)=1$. The finite-positive criterion gives dimensions two and one in the two metrics. The identity is bijective and hence injective, so this is a counterexample to the asserted invariance. [F2, F3, step 1.1, step 1.2] ∎
