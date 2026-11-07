---
id: thm-dynamical-canonical-height-limit-and-functional-equation
kind: theorem
title: Canonical dynamical height as a limit and its functional equation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - thm-height-growth-under-morphism-of-projective-line
  - def-canonical-height-of-a-morphism-on-projective-line
  - thm-product-formula-for-number-fields
  - thm-reals-cauchy-complete
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Gregory S. Call and Joseph H. Silverman, Canonical heights on varieties with morphisms, Proposition 1.2 and proof of Theorem 1.1, printed pp. 169–170"
      url: "https://www.numdam.org/item/CM_1993__89_2_163_0.pdf"
    - title: "Joseph H. Silverman, Lecture Notes on Arithmetic Dynamics, Arizona Winter School 2010, §5.2, Theorem 17, printed pp. 13–15"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field, let $d\ge2$, and let $\phi$ be represented by two homogeneous degree-$d$ forms over $K$ with no common zero in $\mathbb P^1(\overline K)$. Let $h$ be the absolute logarithmic projective height. For every finite extension $L/K$ and every $P\in\mathbb P^1(L)$, the limit

$$\widehat h_\phi(P)=\lim_{n\to\infty}d^{-n}h(\phi^n(P))$$

exists. There is a constant $C_\phi$ independent of $P$ such that $|\widehat h_\phi(P)-h(P)|\le C_\phi$. The function $\widehat h_\phi$ is nonnegative and satisfies $\widehat h_\phi(\phi(P))=d\widehat h_\phi(P)$. It is the unique real-valued function with a uniformly bounded difference from $h$ and this functional equation.

## Statement references

[[thm-height-growth-under-morphism-of-projective-line|Uniform height-growth bound]]

[[def-canonical-height-of-a-morphism-on-projective-line|Canonical-height limit convention]]

[[thm-product-formula-for-number-fields|Product formula used for nonnegativity]]

[[def-axiom-of-choice|Axiom of Choice]]

[Call and Silverman, Proposition 1.2 and proof of Theorem 1.1, printed pp. 169–170](https://www.numdam.org/item/CM_1993__89_2_163_0.pdf)

[Silverman, §5.2, Theorem 17, printed pp. 13–15](https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice; a number field $K$; a degree-$d$ map $\phi$ with $d\ge2$; and an algebraic point $P$.

[A1] The absolute number-field height route assumes Choice through the number-field product formula. [[def-axiom-of-choice]] [[thm-product-formula-for-number-fields]]

[F1] There is a constant $C_\phi$ such that $|h(\phi(Q))-d h(Q)|\le C_\phi$ for every algebraic point $Q$. [[thm-height-growth-under-morphism-of-projective-line]]

[F2] The height $h([x:y])$ is the normalized sum of the logarithms of the local maximum norms, with $|a|_w$ satisfying the number-field product formula. [[def-canonical-height-of-a-morphism-on-projective-line]] [[thm-product-formula-for-number-fields]]

[F3] Every Cauchy sequence of real numbers converges in $\mathbb R$. [[thm-reals-cauchy-complete]]

## Proof

1.1 Put $a_n=d^{-n}h(\phi^n(P))$. For integers $n>m\ge0$, telescoping and [F1] give $|a_n-a_m|\le\sum_{j=m}^{n-1}d^{-j-1}|h(\phi^{j+1}(P))-d h(\phi^j(P))|\le C_\phi/(d^m(d-1))$. Since $d\ge2$, the last bound tends to zero as $m\to\infty$, uniformly in $n>m$; hence $(a_n)$ is Cauchy. [given, A1, F1, algebra]

1.2 Choose a nonzero coordinate $x$ or $y$ of $P=[x:y]$ in a finite extension $L/K$. At every place $w$ of $L$, $\max\{|x|_w,|y|_w\}$ is at least the absolute value of that coordinate. The product formula in [F2] gives $h(P)\ge0$, and applying the same argument to each iterate shows $d^{-n}h(\phi^n(P))\ge0$. [given, A1, F2, choose, algebra]

2.1 By [F3], the Cauchy sequence in step 1.1 converges in $\mathbb R$, proving existence of the displayed limit. Taking $m=0$ in its telescoping estimate and passing to the limit gives $|\widehat h_\phi(P)-h(P)|\le C_\phi/(d-1)$, uniformly in $P$. Shifting the limit index gives $\widehat h_\phi(\phi(P))=\lim_{n\to\infty}d^{-n}h(\phi^{n+1}(P))=d\lim_{n\to\infty}d^{-(n+1)}h(\phi^{n+1}(P))=d\widehat h_\phi(P)$. [given, F1, F3, step 1.1, algebra]

3.1 Let $g$ be another real-valued function with $g-h$ uniformly bounded and $g(\phi(P))=d g(P)$. By step 2.1, $e=g-\widehat h_\phi$ is uniformly bounded and satisfies $e(\phi(P))=d e(P)$. Thus for a fixed bound $M$ and every $n$, $|e(P)|=d^{-n}|e(\phi^n(P))|\le M d^{-n}$. Letting $n\to\infty$ gives $e(P)=0$ for every $P$, so $g=\widehat h_\phi$ and uniqueness follows. [given, step 2.1, algebra] ∎
