---
id: thm-surjective-iff-transpose-is-bounded-below
kind: theorem
title: "Surjectivity is equivalent to a lower bound for the transpose"
status: draft
origin: pipeline
deps: ["lem-transpose-lower-bound-gives-image-ball-density", "lem-open-mapping-successive-approximation", "cor-open-mapping-quantitative-form"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Corollary 4.17(i), p.181, with Theorem 4.16 p.180"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Forward: the quantitative open-mapping ball inclusion gives the lower bound by taking suprema. Reverse: BALL plus the published successive approximation lemma gives an actual ball of radius 1/(2C) in T(B_X), hence onto. Do not derive this reverse direction from the closed-range theorem being proved next."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. Assume DC. For a bounded linear $T:X\to Y$ between Banach spaces, $$T\text{ is onto}\quad\Longleftrightarrow\quad\exists C>0\ \forall g\in Y^*:\ \|g\|\le C\|T^*g\|.$$

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[lem-transpose-lower-bound-gives-image-ball-density]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded linear between normed spaces, and let $C>0$ satisfy $\|g\|\le C\|T^*g\|$ for every $g\in Y^*$. With open balls, $B_Y(0,1/C)\subseteq\overline{T(B_X(0,1))}^{\|\cdot\|}.$

[F2] From [[lem-open-mapping-successive-approximation]], with its stated hypotheses: Assume DC. Let $T:X\to Y$ be bounded linear, with $X$ Banach. If $B_Y(0,r)\subseteq\overline{T(B_X(0,1))}$ for some $r>0$, then $B_Y(0,r/2)\subseteq T(B_X(0,1)).$

[F3] From [[cor-open-mapping-quantitative-form]], with its stated hypotheses: Assume DC. For a surjective bounded linear $T:X\to Y$ between Banach spaces, some $c>0$ satisfies $cB_Y(0,1)\subseteq T(B_X(0,1))$.

## Proof

1.1 If $T$ is onto, quantitative open mapping supplies $c>0$ with $cB_Y(0,1)\subseteq T(B_X(0,1))$. Taking the supremum of $|g|$ over these balls gives $c\|g\|\le\|T^*g\|$. Hence $C=1/c$ works, also for $g=0$. [F3]

1.2 Conversely the dual estimate yields $B_Y(0,1/C)\subseteq\overline{T(B_X(0,1))}$. Under DC, successive approximation in the Banach domain gives $B_Y(0,1/(2C))\subseteq T(B_X(0,1))$. [F1, F2]

2.1 For any nonzero $y\in Y$, choose the explicit scale $a=4C\|y\|>0$. Then $y/a$ lies in that image ball, so multiplying a preimage by $a$ yields a preimage of $y$. Zero has preimage zero. Thus $T$ is onto, including the case $Y=0$. [step 1.2] ∎

## Remark

The estimate is tested on a given dual input $g$. The reverse direction then establishes existence of primal solutions; an a priori bound alone must not be described as an already constructed solution.
