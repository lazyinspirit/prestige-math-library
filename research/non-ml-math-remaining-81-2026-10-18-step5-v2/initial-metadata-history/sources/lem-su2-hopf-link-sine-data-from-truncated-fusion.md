---
id: lem-su2-hopf-link-sine-data-from-truncated-fusion
kind: lemma
title: "Truncated sl2 fusion data give the sine Hopf-link matrix"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-modular-ribbon-category-and-hopf-link-data, lem-balancing-and-hopf-link-character-identity, lem-finite-sine-transform-orthogonality]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §3.3"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity, §3.3"
      url: "https://arxiv.org/pdf/math/0308281"
---

## Statement

Let $\ell\ge3$, $t=\pi/\ell$, and suppose a spherical ribbon fusion category has simple labels $a=0,\ldots,\ell-2$ with

$$N_{ab}^c=1\quad\text{for }c=|a-b|,|a-b|+2,\ldots,\min(a+b,2\ell-4-a-b),$$

and all other $N_{ab}^c=0$, with $d_a=\sin((a+1)t)/\sin t$ and $\theta_a=e^{it\,a(a+2)/2}$. Then

$$s_{ab}=\frac{\sin((a+1)(b+1)t)}{\sin t},\qquad D^2=\frac{\ell}{2\sin^2t},\qquad S_{ab}=\sqrt{\frac2\ell}\sin((a+1)(b+1)t).$$

The sine matrix is invertible and $S^2=I$. This is a conditional calculation from the displayed category data; it does not assert that a particular tilting quotient has those data.

## Facts & Assumptions

**Given:** A spherical ribbon fusion category with the labels, fusion multiplicities, dimensions, and twists in the Statement.

[A1] The complete truncated fusion rule, dimension function, and twist convention displayed in the Statement are hypotheses of this conditional lemma, not an excerpt from an unavailable supplier.

[F1] The balancing equation and the fact that $h_a(b)=s_{ab}/d_a$ is a fusion-ring character are proved in [[lem-balancing-and-hopf-link-character-identity]].

[F2] The finite sine-transform orthogonality identity is proved in [[lem-finite-sine-transform-orthogonality]].

## Proof

**Given:** The hypotheses in [A1].

1.1 For each fixed $a$, put $h_a(b)=s_{ab}/d_a$. By [F1], $h_a(0)=1$ and the truncated products $b\otimes1=(b-1)\oplus(b+1)$ for $1\le b\le\ell-3$ give $h_a(b+1)=h_a(1)h_a(b)-h_a(b-1)$. The endpoint product $(\ell-2)\otimes1=\ell-3$ gives the corresponding terminal recurrence. [A1, F1, algebra]

2.1 For $1\le a\le\ell-3$, balancing gives $s_{a1}=\theta_a^{-1}\theta_1^{-1}(\theta_{a-1}d_{a-1}+\theta_{a+1}d_{a+1})=q^{-(a+2)}d_{a-1}+q^ad_{a+1}$, where $q=e^{it}$. Substituting the sine dimensions and using $e^{-i(a+2)t}\sin(at)+e^{iat}\sin((a+2)t)=\sin(2(a+1)t)$ yields $h_a(1)=2\cos((a+1)t)$. For $a=0$, the single summand in $0\otimes1$ gives $h_0(1)=d_1=2\cos t$. For $a=\ell-2$, the single summand $\ell-3$ gives $s_{a1}=q^{-\ell}d_{\ell-3}=-2\cos t=2\cos((\ell-1)t)d_{\ell-2}$, so the same formula holds at the upper endpoint. [A1, F1, step 1.1, algebra]

3.1 The sequence $g_b=\sin((a+1)(b+1)t)/\sin((a+1)t)$ has $g_0=1$, $g_1=2\cos((a+1)t)$ and satisfies $g_{b+1}=2\cos((a+1)t)g_b-g_{b-1}$ by the sine addition identity. Steps 1.1 and 2.1 therefore give $h_a(b)=g_b$ for all $0\le b\le\ell-2$ by induction. Multiplying by $d_a$ yields the displayed formula for $s_{ab}$. [A1, step 1.1, step 2.1, algebra]

4.1 By [F2] with its two sine indices equal to $1$, $\sum_{a=0}^{\ell-2}d_a^2=\ell/(2\sin^2t)$; choose the positive square root $D=\sqrt{\ell/2}/\sin t$, which is permitted because $0<t<\pi$ and each $d_a>0$. Dividing $s$ by $D$ gives the displayed $S$. Applying [F2] to rows of $S$ proves $S^2=I$; hence $S$ and $s$ are invertible. [A1, F2, step 3.1, algebra] ∎
