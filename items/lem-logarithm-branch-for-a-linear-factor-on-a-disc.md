---
id: lem-logarithm-branch-for-a-linear-factor-on-a-disc
kind: lemma
title: "A disc missing $p$ carries a holomorphic logarithm of $z-p$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-local-holomorphic-logarithm-nonvanishing-function-on-disc, cor-holomorphic-logarithm-has-the-logarithmic-derivative, thm-kernel-and-fibres-of-complex-exponential, thm-continuous-image-of-a-connected-space, cor-connected-subsets-of-the-line, thm-path-connected-implies-connected, def-path-connected, def-convex-subset-of-euclidean-space, def-metric-ball, thm-algebra-of-complex-derivatives, cor-complex-differentiability-implies-continuity, lem-complex-conjugation-and-modulus-laws, def-complex-conjugate-real-imaginary-part-and-modulus, def-integers, thm-int-comm-ring, thm-int-ordered-ring, lem-integer-part]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $D(c,\rho)=B(c,\rho)$ be an open disc in $\mathbb C$ with $\rho>0$ and let
$p\in\mathbb C$ with $p\notin D(c,\rho)$. Then there is a holomorphic
$L:D(c,\rho)\to\mathbb C$ with

$$\exp(L(z))=z-p\qquad\text{for every }z\in D(c,\rho),$$

and every such $L$ satisfies $L'(z)=1/(z-p)$ there. If $L_1$ and $L_2$ both have
this property, then $L_1-L_2$ is a constant lying in $2\pi i\mathbb Z$.

## Facts & Assumptions

**Given:** An open disc $D(c,\rho)$ with $\rho>0$ and a point $p\notin D(c,\rho)$.

[L1] If $D(a,r)$ is an open disc with $r>0$ and $h:D(a,r)\to\mathbb C$ is holomorphic and nowhere zero, then there is a holomorphic $L:D(a,r)\to\mathbb C$ with $\exp(L(z))=h(z)$ for every $z\in D(a,r)$ ([[lem-local-holomorphic-logarithm-nonvanishing-function-on-disc]]).

[L2] If $L$ and $h$ are holomorphic on an open $U$ with $\exp\circ L=h$, then $h$ is nowhere zero and $L'=h'/h$; if $U$ misses $p$ and $h(z)=z-p$, then $L'(z)=1/(z-p)$ ([[cor-holomorphic-logarithm-has-the-logarithmic-derivative]]).

[L3] $\ker(\exp)=2\pi i\mathbb Z$, and $\exp z=\exp w$ exactly when $z-w\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[L4] The continuous image of a connected subset is a connected subset ([[thm-continuous-image-of-a-connected-space]]).

[L5] A subset $E\subseteq\mathbb R$ is connected exactly when it is order-convex: $x,z\in E$ and $x\le w\le z$ imply $w\in E$ ([[cor-connected-subsets-of-the-line]]).

[L6] A path-connected subset of a topological space is a connected subset ([[thm-path-connected-implies-connected]]); a subset is path-connected when any two of its points are joined by a continuous map from $[0,1]$ with image inside it ([[def-path-connected]]).

[L7] A subset $U\subseteq\mathbb R^m$ is convex when $(1-t)x+ty\in U$ for all $x,y\in U$ and $t\in[0,1]$ ([[def-convex-subset-of-euclidean-space]]).

[L8] $B(x,r)=\{y:d(x,y)<r\}$ ([[def-metric-ball]]).

[L9] Linear combinations, products and nonvanishing quotients of functions complex differentiable at a point are complex differentiable there; constants have derivative $0$ and the identity has derivative $1$ ([[thm-algebra-of-complex-derivatives]]).

[L10] A function complex differentiable at a point is continuous there ([[cor-complex-differentiability-implies-continuity]]).

[L11] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ for complex $z,w$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L12] For $z=a+bi$ with $a,b$ real, $\operatorname{Im}z=b$ and $|z|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[L13] The integers form an ordered commutative ring, and their canonical image in $\mathbb R$ is discrete; hence if $m<n$ then $m+\tfrac12$ lies strictly between them and is not an integer ([[thm-int-comm-ring]], [[thm-int-ordered-ring]], [[lem-integer-part]]).

## Proof

**Proof technique:** direct.

1.1 The function $h(z)=z-p$ is holomorphic on $D(c,\rho)$ by [L9], and it is nowhere zero there because $p\notin D(c,\rho)$; so [L1] supplies a holomorphic $L$ on $D(c,\rho)$ with $\exp\circ L=h$, and [L2] gives $L'(z)=1/(z-p)$ for every such $L$. [given, L1, L2, L9]

1.2 $D(c,\rho)$ is convex in the sense of [L7]: for $z,w$ in it and $t\in[0,1]$, [L8] and [L11] give $|(1-t)z+tw-c|=|(1-t)(z-c)+t(w-c)|\le(1-t)|z-c|+t|w-c|<\rho$. Hence any two of its points are joined by the continuous map $t\mapsto(1-t)z+tw$ of $[0,1]$ into it, so $D(c,\rho)$ is path-connected and therefore a connected subset of $\mathbb C$ by [L6]. [L6, L7, L8, L11]

2.1 Let $L_1,L_2$ both be holomorphic on $D(c,\rho)$ with $\exp\circ L_j=h$. Then $\exp(L_1(z))=\exp(L_2(z))$ for every $z$, so $L_1(z)-L_2(z)\in2\pi i\mathbb Z$ by [L3]; in particular $\operatorname{Re}(L_1-L_2)=0$ and the function $g:=\operatorname{Im}(L_1-L_2)/(2\pi)$ takes values in $\mathbb Z$. By [L9] and [L10] the difference $L_1-L_2$ is continuous, and $|\operatorname{Im}v|\le|v|$ by [L12], so $g$ is a continuous real-valued function on $D(c,\rho)$. [step 1.1, L3, L9, L10, L12]

3.1 By step 1.2 and [L4] the image $g[D(c,\rho)]$ is a connected subset of $\mathbb R$, hence order-convex by [L5]; if it contained two distinct integers $m<n$ it would contain $m+\tfrac12$, which is not an integer, contradicting step 2.1 and [L13]. So $g$ is constant, and $L_1-L_2$ is the constant $2\pi i g\in2\pi i\mathbb Z$. [step 1.2, step 2.1, L4, L5, L13] ∎
