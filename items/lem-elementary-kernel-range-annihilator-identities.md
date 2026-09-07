---
id: lem-elementary-kernel-range-annihilator-identities
kind: lemma
title: "Elementary kernel and range annihilator identities"
status: draft
origin: pipeline
deps: ["def-transpose-of-a-bounded-operator", "def-annihilator-and-preannihilator", "cor-annihilator-detects-closure", "thm-dual-norms-every-vector"]
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
    - title: "Bühler–Salamon, Functional Analysis, Theorem 4.8(i), pp.174; Corollary 2.55, p.84"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "The first identity is composition; for the second norming separates Tx from zero. Apply the published primal annihilator-closure theorem for the third. This independent lemma carries all norm-topology uses; no FA-8 result is invoked."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a bounded linear $T:X\to Y$ between normed spaces, $$(\operatorname{ran}T)^\perp=\ker T^*,\qquad {}^\perp(\operatorname{ran}T^*)=\ker T,\qquad \overline{\operatorname{ran}T}^{\|\cdot\|}={}^\perp(\ker T^*).$$ The closure in the last identity is in $Y$.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-transpose-of-a-bounded-operator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $T:X\to Y$ be bounded and linear between normed spaces. Its **transpose**, or Banach adjoint, is $T^*:Y^*\longrightarrow X^*,\qquad (T^*g)(x)=g(Tx).$ The duals are def-dual-space-of-a-normed-space. Composition is bounded by lem-composition-operator-norm-inequality, so this has the displayed codomain. It is linear in $g$ over $\mathbb K$. No complex conjugation is inserted; a Hilbert adjoint uses a separate inner-product identification.

[F2] From [[def-annihilator-and-preannihilator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$ and arbitrary subsets $M\subseteq X$, $N\subseteq X^*$, define $M^\perp=\{f\in X^*:f(m)=0\text{ for all }m\in M\},\qquad {}^\perp N=\{x\in X:f(x)=0\text{ for all }f\in N\}.$ Here $X^*$ is def-dual-space-of-a-normed-space. The first notation agrees with def-continuous-annihilator-of-a-subspace on $\operatorname{span}M$, since linearity makes vanishing on $M$ equivalent to vanishing on its span. The preannihilator lies in $X$, not in $X^{**}$. Empty sets impose no conditions: $\varnothing^\perp=X^*$ and ${}^\perp\varnothing=X$.

[F3] From [[cor-annihilator-detects-closure]], with its stated hypotheses: For every linear subspace $M\subseteq X$, $\overline M=\bigcap_{f\in M^\perp}\ker f.$

[F4] From [[thm-dual-norms-every-vector]], with its stated hypotheses: Let $X$ be a normed space over $\mathbb{R}$ or $\mathbb{C}$, and let $x \in X$ be nonzero. Then there exists $f \in X^*$ such that $\|f\|=1 \qquad \text{and} \qquad f(x)=\|x\|.$

## Proof

1.1 A functional $g\in Y^*$ vanishes on $\operatorname{ran}T$ exactly when $g(Tx)=0$ for every $x$, exactly when $T^*g=0$. [F1, F2]

1.2 A vector $x$ belongs to ${}^\perp(\operatorname{ran}T^*)$ exactly when $g(Tx)=0$ for every $g\in Y^*$. This holds if $Tx=0$; if $Tx\ne0$, a norming functional has $g(Tx)=\|Tx\|>0$, so it fails. [F1, F2, F4]

2.1 Apply the primal annihilator-closure identity to the linear subspace $\operatorname{ran}T\le Y$ and substitute step 1.1. If $T=0$, the three identities read $Y^*=Y^*$, $X=X$, and $\{0\}={}^\perp Y^*$; the last equality follows from the same norming separation. [F3, F4, step 1.1, step 1.2] ∎
