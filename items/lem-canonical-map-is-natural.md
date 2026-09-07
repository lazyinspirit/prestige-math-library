---
id: lem-canonical-map-is-natural
kind: lemma
title: "The canonical map is natural"
status: published
origin: pipeline
deps: ["def-canonical-map-into-the-bidual", "def-transpose-of-a-bounded-operator", "lem-transpose-is-bounded-and-has-the-same-norm"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Lemma 4.3(ii), p.173"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Evaluate both sides on arbitrary g in Y*."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. If $T:X\to Y$ is bounded linear between normed spaces, then $$T^{**}J_X=J_YT:X\longrightarrow Y^{**}.$$

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-canonical-map-into-the-bidual]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$, define $J_X:X\to X^{**},\qquad (J_Xx)(f)=f(x)\quad(f\in X^*).$ With the dual norm from def-dual-space-of-a-normed-space, evaluation is linear in $f$ and $|(J_Xx)(f)|\le\|x\|\|f\|$, so $J_Xx$ is a bounded functional on $X^*$. The map is canonical and uses no chosen basis or conjugation.

[F2] From [[def-transpose-of-a-bounded-operator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded and linear between normed spaces. Its **transpose**, or Banach adjoint, is $T^*:Y^*\longrightarrow X^*,\qquad (T^*g)(x)=g(Tx).$ The duals are def-dual-space-of-a-normed-space. Composition is bounded by lem-composition-operator-norm-inequality, so this has the displayed codomain. It is linear in $g$ over $\mathbb K$. No complex conjugation is inserted; a Hilbert adjoint uses a separate inner-product identification.

[F3] From [[lem-transpose-is-bounded-and-has-the-same-norm]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a bounded linear $T:X\to Y$ between normed spaces, $T^*:Y^*\to X^*$ is bounded linear and $\|T^*\|=\|T\|$.

## Proof

1.1 The transpose is bounded, so its transpose $T^{**}:X^{**}\to Y^{**}$ is defined. For $x\in X$ and $g\in Y^*$, $(T^{**}J_Xx)(g)=(J_Xx)(T^*g)=(T^*g)(x)$. [F1, F2, F3]

2.1 The last expression is $g(Tx)=(J_YTx)(g)$. Equality at every $g$ proves equality in $Y^{**}$ and then equality of operators for every $x$. With $x=0$ or $T=0$ every expression vanishes; the same calculation covers zero spaces. [F1, F2, step 1.1] ∎
