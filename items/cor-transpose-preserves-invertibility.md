---
id: cor-transpose-preserves-invertibility
kind: corollary
title: "Invertibility and the inverse of the transpose"
status: published
origin: pipeline
deps: ["thm-surjective-iff-transpose-is-bounded-below", "thm-bounded-below-iff-transpose-is-surjective", "lem-transpose-reverses-composition", "lem-transpose-is-bounded-and-has-the-same-norm", "thm-bounded-inverse-theorem", "thm-bounded-operator-space-is-banach"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Corollary 4.18, p.182"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: "Combine injectivity/surjectivity criteria. Transpose the two inverse identities; compare the operator and inverse norms. BS uses isometry here to mean a bijective isometry, as its proof explicitly assumes. Never extend this to arbitrary isometric embeddings."
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. Assume DC. A bounded linear $T:X\to Y$ between Banach spaces is bijective if and only if $T^*$ is bijective. In that case $$(T^*)^{-1}=(T^{-1})^*.$$ Furthermore, $T$ is a surjective linear isometry if and only if $T^*$ is a surjective linear isometry.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] From [[thm-surjective-iff-transpose-is-bounded-below]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Assume DC. For a bounded linear $T:X\to Y$ between Banach spaces, $T\text{ is onto}\quad\Longleftrightarrow\quad\exists C>0\ \forall g\in Y^*:\ \|g\|\le C\|T^*g\|.$

[F2] From [[thm-bounded-below-iff-transpose-is-surjective]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. Assume DC. If $T:X\to Y$ is bounded linear between Banach spaces, then $\bigl(\exists c>0\ \forall x\in X:\|Tx\|\ge c\|x\|\bigr)\quad\Longleftrightarrow\quad T^*:Y^*\to X^*\text{ is onto}.$

[F3] From [[lem-transpose-reverses-composition]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For bounded linear $T:X\to Y$, $S:Y\to Z$ between normed spaces, $(ST)^*=T^*S^*,\qquad I_X^*=I_{X^*}.$ For bounded $T,U:X\to Y$ and $a,b\in\mathbb K$, $(aT+bU)^*=aT^*+bU^*$.

[F4] From [[lem-transpose-is-bounded-and-has-the-same-norm]], with its stated hypotheses: Let $\mathbb K=\mathbb R$ or $\mathbb C$. For a bounded linear $T:X\to Y$ between normed spaces, $T^*:Y^*\to X^*$ is bounded linear and $\|T^*\|=\|T\|$.

[F5] From [[thm-bounded-inverse-theorem]], with its stated hypotheses: Assume DC. A bounded bijective linear map $T:X\to Y$ between Banach spaces has a bounded linear inverse $T^{-1}:Y\to X$.

[F6] From [[thm-bounded-operator-space-is-banach]], with its stated hypotheses: Let $X$ and $Y$ be normed spaces over the same scalar field. If $Y$ is Banach, then $\mathcal B(X,Y)$ is Banach for the operator norm.

## Proof

1.1 If $T$ is bijective, its inverse is bounded, so $T$ is bounded below. The two dual criteria give surjectivity and bounded-belowness of $T^*$, hence its bijectivity. [F1, F2, F5]

1.2 If $T^*$ is bijective, the dual spaces are Banach by the completeness of bounded-operator spaces with scalar target, so bounded inverse applies. Hence $T^*$ is bounded below, so $T$ is onto; surjectivity of $T^*$ also makes $T$ bounded below, hence injective. [F1, F2, F5, F6]

2.1 For bijective $T$, put $U=T^{-1}$, which is bounded. Transpose $TU=I_Y$ and $UT=I_X$ to get $U^*T^*=I_{Y^*}$ and $T^*U^*=I_{X^*}$. Thus $(T^*)^{-1}=U^*$. [F3, F5, step 1.1, step 1.2]

3.1 A bounded bijection $A$ is an isometry exactly when $\|A\|\le1$ and $\|A^{-1}\|\le1$: the two bounds give $\|Ax\|\le\|x\|\le\|Ax\|$, and the converse follows by taking suprema. Transpose norm equality and step 2.1 transfer these two bounds between $T$ and $T^*$. Using inequalities covers the unique bijection between zero spaces, whose operator norms are zero. [F4, step 2.1] ∎
