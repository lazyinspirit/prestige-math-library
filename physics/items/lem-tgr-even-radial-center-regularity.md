---
id: lem-tgr-even-radial-center-regularity
kind: lemma
title: "Even radial coefficients give a C² Cartesian center"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - thm-taylor-peano-remainder
  - thm-real-power-continuity-and-derivatives
  - ex-the-round-metric-on-the-sphere-as-an-induced-metric
dependency_roles:
  def-euclidean-inner-product: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-taylor-peano-remainder: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  ex-the-round-metric-on-the-sphere-as-an-induced-metric: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lecture 21, PDF p. 8"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.A, Eqs. (97)–(105)"
      url: "https://arxiv.org/pdf/1908.10806"
---

## Statement

Let $\delta>0$, let $f,h\in C^2((-\delta,\delta),\mathbb R)$ be even, and let $B_\delta(0)\subseteq\mathbb R^3$ carry its standard Euclidean coordinates $x=(x_1,x_2,x_3)$ and radius $r=|x|$ from [[def-euclidean-inner-product]]. Then $F(x)=f(|x|)$ is $C^2$ on $B_\delta(0)$, and each component $H_{ij}(x)=\delta_{ij}+x_ix_jh(|x|)$ is $C^2$ there. In particular, if an areal spherical spatial metric has $b(r)=1-r^2q(r)$ with even $q\in C^2((-\delta,\delta))$ and $b>0$, then its Cartesian coefficients
$$g_{ij}(x)=\delta_{ij}+x_ix_j\frac{q(|x|)}{b(|x|)}$$
extend $C^2$ across the center. This result is a coordinate regularity statement; it asserts no field equation or physical claim.

## Facts & Assumptions

**Given:** $\delta>0$, even $C^2$ functions $f,h,q$ on $(-\delta,\delta)$, and the Euclidean norm on $\mathbb R^3$.

[F1] The Euclidean radius is $r=(x_1^2+x_2^2+x_3^2)^{1/2}$, with $\partial_i r=x_i/r$ and $\partial_i\partial_j r=\delta_{ij}/r-x_ix_j/r^3$ for $r>0$ ([[def-euclidean-inner-product]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-real-power-continuity-and-derivatives]]).

[F2] If $g\in C^2((-\delta,\delta))$ is even, then $g'(0)=0$, the derivative definition gives $g'(r)/r\to g''(0)$ as $r\to0$, and Peano's Taylor theorem gives $g(r)=g(0)+\tfrac12g''(0)r^2+o(r^2)$ ([[thm-taylor-peano-remainder]]).

[F3] In Euclidean polar coordinates on $\mathbb R^3\setminus\{0\}$, the Euclidean metric is $dr^2+r^2\gamma$ with $\gamma$ the unit round sphere metric ([[ex-the-round-metric-on-the-sphere-as-an-induced-metric]]).

## Proof

1.1 For $r>0$, the chain rule and product rule in [F1] give $$\partial_iF=f'(r)\frac{x_i}{r},\qquad \partial_j\partial_iF=\left(f''(r)-\frac{f'(r)}r\right)\frac{x_ix_j}{r^2}+\frac{f'(r)}r\delta_{ij}.$$ Evenness implies $f'(0)=0$. By [F2], $f'(r)/r\to f''(0)$ and $f(r)=f(0)+\frac12 f''(0)r^2+o(r^2)$ as $r\to0$. Thus $F$ is differentiable at $0$ with gradient $0$ and Hessian $f''(0)I_3$. Since the displayed first and second derivatives tend to those values as $x\to0$, they extend continuously to $0$, proving $F\in C^2$. [F1, F2, algebra]

1.2 For $r>0$, $$\partial_kH_{ij}=\delta_{ik}x_jh(r)+\delta_{jk}x_ih(r)+x_ix_jh'(r)\frac{x_k}{r}.$$ Evenness gives $h'(0)=0$, so [F2] yields $h'(r)/r\to h''(0)$ and $h''(r)-h'(r)/r\to0$. Differentiating the displayed formula once more, the terms without a factor $x_i$ or $x_j$ are $(\delta_{ik}\delta_{j\ell}+\delta_{jk}\delta_{i\ell})h(r)$; every remaining term is a sum of terms containing either one factor $x_i$ or $x_j$ times $h'(r)x_\ell/r$, or two such factors times $h''(r)-h'(r)/r$ or $h'(r)/r$. Since $h'$ is $O(r)$ and $h''$, $h'/r$ are bounded near $0$, these remaining terms tend to $0$. The Peano expansion in [F2] gives $H_{ij}(x)=\delta_{ij}+h(0)x_ix_j+o(r^2)$, hence derivative $0$ and second derivative $(\delta_{ik}\delta_{j\ell}+\delta_{i\ell}\delta_{jk})h(0)$ at $0$. Thus the first and second derivatives extend continuously and $H_{ij}$ is $C^2$. [F1, F2, algebra]

2.1 For $r>0$, write $dr^2=(x_i\,dx_i)^2/r^2$ and use the polar identity $dr^2+r^2\gamma=\sum_i dx_i^2$ from [F3]. Therefore $$b^{-1}dr^2+r^2\gamma=\sum_i dx_i^2+\frac{b^{-1}-1}{r^2}(x_i\,dx_i)^2=\sum_{i,j}\left(\delta_{ij}+x_ix_j\frac{q(r)}{b(r)}\right)dx_i\,dx_j,$$ because $b=1-r^2q$. The quotient $q/b$ is even $C^2$ since $b>0$, so step 1.2 proves the spatial extension. The time coefficient $-e^{2\phi(r)}$ extends $C^2$ by step 1.1 whenever $\phi$ is even $C^2$. This proves the metric clause. [F1, F3, step 1.1, step 1.2, algebra] ∎

