---
id: lem-transpose-reverses-composition
kind: lemma
title: "Transposition reverses composition"
status: published
origin: pipeline
deps: ["def-transpose-of-a-bounded-operator"]
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
    - title: "Bühler–Salamon, Functional Analysis, Lemma 4.3(i), p.173"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Evaluate every map on g and x; associativity and scalar linearity give the identities."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. For bounded linear $T:X\to Y$, $S:Y\to Z$ between normed spaces, $$(ST)^*=T^*S^*,\qquad I_X^*=I_{X^*}.$$ For bounded linear $T,U:X\to Y$ and $a,b\in\mathbb K$, $(aT+bU)^*=aT^*+bU^*$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-transpose-of-a-bounded-operator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded and linear between normed spaces. Its **transpose**, or Banach adjoint, is $T^*:Y^*\longrightarrow X^*,\qquad (T^*g)(x)=g(Tx).$ The duals are def-dual-space-of-a-normed-space. Composition is bounded by lem-composition-operator-norm-inequality, so this has the displayed codomain. It is linear in $g$ over $\mathbb K$. No complex conjugation is inserted; a Hilbert adjoint uses a separate inner-product identification.

## Proof

1.1 For every $g\in Z^*$ and $x\in X$, $((ST)^*g)(x)=g(S(Tx))=(T^*(S^*g))(x)$. Equality on every $x$ and then every $g$ proves the first operator identity with domain $Z^*$ and codomain $X^*$. [F1]

2.1 For $f\in X^*$, $I_X^*f=f\circ I_X=f$. For $g\in Y^*$, $((aT+bU)^*g)(x)=g(aTx+bUx)=a(T^*g)(x)+b(U^*g)(x)$. These identities also hold for zero maps, zero scalars, and zero spaces. [F1, algebra] ∎
