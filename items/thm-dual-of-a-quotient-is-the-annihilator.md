---
id: thm-dual-of-a-quotient-is-the-annihilator
kind: theorem
title: "The dual of a quotient is its annihilator"
status: published
origin: pipeline
deps: ["def-dual-space-of-a-normed-space", "def-annihilator-and-preannihilator", "thm-universal-property-of-the-normed-quotient"]
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
    - title: "Bühler–Salamon, Functional Analysis, Corollary 2.57(ii), pp.84–85"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Factor a functional vanishing on M through cosets; prove representative independence before applying the quotient universal property and its norm equality. No HB needed in this direction."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. Let $X$ be normed and $M\le X$ closed. With quotient norm $\|x+M\|=\inf_{m\in M}\|x+m\|$ and $q(x)=x+M$, the map $$Q:(X/M)^*\longrightarrow M^\perp,\qquad Qh=h\circ q$$ is a linear isometric bijection.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[def-dual-space-of-a-normed-space]], with its stated hypotheses: Let $X$ be a normed space over the scalar field $\mathbb{K}$, where $\mathbb{K}=\mathbb{R}$ in the literal definition and $\mathbb{K}=\mathbb{C}$ by the convention of rem-real-and-complex-normed-space-convention. The **dual space** of $X$ is $X^*:=\mathcal{B}(X,\mathbb{K}),$ the space of bounded linear functionals on $X$ (def-space-of-bounded-linear-operators). Each $f \in X^*$ is in particular a linear functional in the algebraic sense, so $X^*$ is a subspace of the algebraic dual from def-algebraic-dual-and-linear-functional. The **dual norm** on $X^*$ is the operator norm: $\|f\|_{X^*}:=\|f\| =\sup\{|f(x)|:\|x\| \le 1\}.$

[F2] From [[def-annihilator-and-preannihilator]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a normed $X$ and arbitrary subsets $M\subseteq X$, $N\subseteq X^*$, define $M^\perp=\{f\in X^*:f(m)=0\text{ for all }m\in M\},\qquad {}^\perp N=\{x\in X:f(x)=0\text{ for all }f\in N\}.$ Here $X^*$ is def-dual-space-of-a-normed-space. The first notation agrees with def-continuous-annihilator-of-a-subspace on $\operatorname{span}M$, since linearity makes vanishing on $M$ equivalent to vanishing on its span. The preannihilator lies in $X$, not in $X^{**}$. Empty sets impose no conditions: $\varnothing^\perp=X^*$ and ${}^\perp\varnothing=X$.

[F3] From [[thm-universal-property-of-the-normed-quotient]], with its stated hypotheses: Let $X$ and $Y$ be normed spaces over the same scalar field, let $M \le X$ be a closed linear subspace, let $q:X\to X/M$ be the quotient map, and let $T:X\to Y$ be a bounded linear operator with $M \subseteq \ker T$. Then there is a unique bounded linear operator $\overline T:X/M\to Y$ such that $\overline T \circ q = T,$ and moreover $\|\overline T\| = \|T\|$.

## Proof

1.1 For $h\in(X/M)^*$, $|h(qx)|\le\|h\|\|qx\|\le\|h\|\|x\|$, and $h(qm)=0$ for $m\in M$. Thus $Qh\in M^\perp$ and $Q$ is linear. [F1, F2]

1.2 If $f\in M^\perp$, define $h(x+M)=f(x)$. Equality of cosets means $x-x^\prime\in M$, so this value is independent of the representative. The quotient universal property gives a bounded linear $h$ with $h\circ q=f$ and $\|h\|=\|f\|$. [F2, F3]

2.1 Surjectivity of $q$ makes its pullback injective. Step 1.2 applied to $f=Qh$ returns the original $h$ by uniqueness, giving $\|Qh\|=\|h\|$. If $M=X$, both spaces are zero; if $M=\{0\}$, the same formulas apply. [step 1.1, step 1.2] ∎
