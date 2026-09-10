---
id: cor-transpose-preserves-invertibility
kind: corollary
title: "Invertibility and the inverse of the transpose"
status: published
origin: pipeline
deps: [def-dependent-choice, def-hahn-banach-extension-principle-relative, cor-relative-hahn-banach-dual-norming, thm-relative-hahn-banach-norm-preserving-extension, lem-transpose-reverses-composition, thm-bounded-inverse-theorem, thm-bounded-operator-space-is-banach]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  verified:
    model: gpt-6-astra
    verdict: pass
    date: 2026-09-09
    scope: owner-authorized local defect repair; no independent judge
    delegated_by: owner
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis, Corollary 4.18, p.182"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
proof_strategy: direct
---

## Statement

Let $\mathbb K=\mathbb R$ or $\mathbb C$. Assume DC and the Hahn–Banach extension principle HB. A bounded linear $T:X\to Y$ between Banach spaces is bijective if and only if $T^*$ is bijective. In that case $$(T^*)^{-1}=(T^{-1})^*.$$ Furthermore, $T$ is a surjective linear isometry if and only if $T^*$ is a surjective linear isometry.

## Facts & Assumptions

**Given:** The spaces, maps, scalar field, and hypotheses in the statement above. All duals consist of linear functionals over the ambient field; evaluation has no conjugation.

[F1] DC gives bounded inverses for bounded bijections between Banach spaces. ([[def-dependent-choice]], [[thm-bounded-inverse-theorem]])

[F2] Under HB, bounded functionals on arbitrary scalar-linear subspaces extend preserving norm, and the dual unit ball recovers each vector norm. ([[def-hahn-banach-extension-principle-relative]], [[thm-relative-hahn-banach-norm-preserving-extension]], [[cor-relative-hahn-banach-dual-norming]])

[F3] Transposition reverses compositions and preserves identities. ([[lem-transpose-reverses-composition]])

[F4] Bounded-operator spaces with Banach target are Banach; in particular dual spaces are Banach. ([[thm-bounded-operator-space-is-banach]])

## Proof

**Proof technique:** direct.

1.1 For every bounded $A:E\to F$, composition gives $\|A^*\|\le\|A\|$. Conversely, for $Ax\ne0$, [F2] supplies a unit functional $g$ with $g(Ax)=\|Ax\|$, so $\|Ax\|=|(A^*g)(x)|\le\|A^*\|\|x\|$. The same inequality is immediate if $Ax=0$. Taking suprema gives $\|A\|=\|A^*\|$, including zero spaces. This is the first use of HB. [F2, given]

1.2 If $T$ is bijective, [F1] gives its bounded inverse $U$. Transposing $TU=I_Y$ and $UT=I_X$ gives $U^*T^*=I_{Y^*}$ and $T^*U^*=I_{X^*}$. Thus $T^*$ is bijective and $(T^*)^{-1}=U^*$. [F1, F3]

1.3 Suppose $T^*$ is bijective. Its inverse $S:X^*\to Y^*$ is bounded by [F1] and [F4]. Set $C=\max(1,\|S\|)$. For every unit-ball $f\in X^*$, $g=Sf$ satisfies $\|g\|\le C$ and $f(x)=g(Tx)$; hence [F2] gives $\|x\|\le C\|Tx\|$. This proves injectivity. It also proves closedness of $M=T(X)$: if $Tx_j$ converges, $(x_j)$ is Cauchy by this estimate, so completeness and continuity give a preimage of its limit. Sequential closedness implies closedness in this metric setting, using DC to select approximants at distances less than $1/j$ when needed. [F1, F2, F4, given]

2.1 If some $y\notin M$ existed, closedness would give $\delta=\operatorname{dist}(y,M)>0$. On the scalar-linear subspace $M+\mathbb Ky$, the formula $\ell(m+ay)=a$ is well-defined and linear. For $a\ne0$, $\|m+ay\|\ge|a|\delta$, so $|\ell(z)|\le\delta^{-1}\|z\|$, also when $a=0$. By the second use of HB, [F2] extends $\ell$ to $g\in Y^*$ with $g|_M=0$ and $g(y)=1$. Then $T^*g=0$ contradicts injectivity of $T^*$. Thus $T$ is onto and bijective. [F2, step 1.3, algebra]

3.1 For any bounded bijection $A$, being an isometry is equivalent to $\|A\|\le1$ and $\|A^{-1}\|\le1$: the two inequalities give $\|Ax\|\le\|x\|\le\|Ax\|$. Steps 1.1 and 1.2 transfer these two bounds between $T$ and $T^*$. Together with the equivalence of bijectivity this proves the surjective-isometry equivalence, including the unique bijection of zero spaces. [step 1.1, step 1.2, step 2.1, algebra] ∎
