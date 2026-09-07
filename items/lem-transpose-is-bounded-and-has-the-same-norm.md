---
id: lem-transpose-is-bounded-and-has-the-same-norm
kind: lemma
title: "The transpose is bounded with the same norm"
status: draft
origin: pipeline
deps: ["def-transpose-of-a-bounded-operator", "thm-dual-norms-every-vector"]
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
    - title: "Bühler–Salamon, Functional Analysis, Lemma 4.2, p.172"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "The composition estimate gives <=. Norm each nonzero Tx with a unit functional for the reverse inequality, including zero operators separately."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a bounded linear $T:X\to Y$ between normed spaces, $T^*:Y^*\to X^*$ is bounded linear and $\|T^*\|=\|T\|$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-transpose-of-a-bounded-operator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded and linear between normed spaces. Its **transpose**, or Banach adjoint, is $T^*:Y^*\longrightarrow X^*,\qquad (T^*g)(x)=g(Tx).$ The duals are def-dual-space-of-a-normed-space. Composition is bounded by lem-composition-operator-norm-inequality, so this has the displayed codomain. It is linear in $g$ over $\mathbb K$. No complex conjugation is inserted; a Hilbert adjoint uses a separate inner-product identification.

[F2] From [[thm-dual-norms-every-vector]], with its stated hypotheses: Let $X$ be a normed space over $\mathbb{R}$ or $\mathbb{C}$, and let $x \in X$ be nonzero. Then there exists $f \in X^*$ such that $\|f\|=1 \qquad \text{and} \qquad f(x)=\|x\|.$

## Proof

1.1 Composition is linear in $g$, and $|(T^*g)(x)|=|g(Tx)|\le\|g\|\|T\|\|x\|$. Taking the two unit-ball suprema gives $\|T^*\|\le\|T\|$. [F1]

2.1 If $Tx\ne0$, choose a unit functional $g\in Y^*$ with $g(Tx)=\|Tx\|$. Then $\|Tx\|=|(T^*g)(x)|\le\|T^*\|\|x\|$. If $Tx=0$ this inequality holds directly. Taking the supremum for $\|x\|\le1$ gives the reverse norm bound, including $T=0$ and zero spaces. [F2, step 1.1] ∎
