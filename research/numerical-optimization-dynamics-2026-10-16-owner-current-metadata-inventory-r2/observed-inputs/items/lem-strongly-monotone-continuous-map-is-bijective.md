---
id: lem-strongly-monotone-continuous-map-is-bijective
title: "A continuous strongly monotone map of finite-dimensional space is bijective"
kind: lemma
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-brouwer-fixed-point-theorem
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Miller, Algebraic Topology I lecture notes, Theorem 10.7 and proof"
      url: "https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/b4baa933e22d1c947d32588333336164_MIT18_905F16_lec10.pdf"
      locator: "Theorem 10.7 and proof, p. 24, for Brouwer's fixed-point theorem; the coercive-map consequence is proved here."
---

## Statement

Let $d\ge1$, $\kappa>0$, and let $H:\mathbb R^d\to\mathbb R^d$ be continuous. Suppose

$$\langle H(x)-H(y),x-y\rangle\ge\kappa\|x-y\|_2^2\qquad(x,y\in\mathbb R^d).$$

Then $H$ is bijective. Its inverse satisfies

$$\|H^{-1}(u)-H^{-1}(v)\|_2\le\kappa^{-1}\|u-v\|_2\qquad(u,v\in\mathbb R^d).$$

## Facts & Assumptions

**Given:** $d\ge1$, a continuous map $H:\mathbb R^d\to\mathbb R^d$, a constant $\kappa>0$, and the strong-monotonicity inequality in the Statement. The inner product and norm are those of $\mathbb R^d$.

[F1] [[def-euclidean-inner-product]]: $\langle x,y\rangle$ is the Euclidean inner product on $\mathbb R^d$, and $\|x\|_2=\sqrt{\langle x,x\rangle}$.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle x,y\rangle|\le\|x\|_2\|y\|_2$.

[F3] [[thm-brouwer-fixed-point-theorem]]: every continuous map from the closed unit ball in $\mathbb R^d$ to itself has a fixed point.

[A1] The strong-monotonicity inequality in the Statement holds for every pair $x,y\in\mathbb R^d$, and $\kappa>0$.

## Proof


1.1 Fix $b\in\mathbb R^d$ and put $F(x)=H(x)-b$. Applying [A1] with $y=0$ and using [F2] gives $\langle F(x),x\rangle=\langle H(x)-H(0),x\rangle+\langle H(0)-b,x\rangle\ge\kappa\|x\|_2^2-\|H(0)-b\|_2\|x\|_2$. Choose $R>\|H(0)-b\|_2/\kappa$; then $\langle F(x),x\rangle>0$ whenever $\|x\|_2=R$. [A1, F1, F2, choose, algebra]

1.2 Let $P_R(v)=v$ when $\|v\|_2\le R$, and $P_R(v)=Rv/\|v\|_2$ when $\|v\|_2>R$. The two formulas agree on the sphere, so $P_R$ is continuous and maps $\mathbb R^d$ into the closed ball $\overline B_R$. Thus $T(x)=P_R(x-F(x))$ is a continuous self-map of $\overline B_R$; rescaling by $x\mapsto x/R$ and applying [F3] gives a fixed point $x=T(x)$. [F1, F3, construct]

2.1 If $\|x\|_2<R$, the radial projection $P_R$ can equal $x$ only when its input equals $x$, hence $x-F(x)=x$ and $F(x)=0$. If $\|x\|_2=R$, the equality $P_R(x-F(x))=x$ implies $x-F(x)=\alpha x$ for some $\alpha\ge1$; therefore $\langle F(x),x\rangle=(1-\alpha)R^2\le0$, contradicting step 1.1. So the fixed point is interior and $H(x)=b$. Since $b$ was arbitrary, $H$ is onto. [step 1.1, step 1.2, algebra]

3.1 If $H(x)=H(y)$, [A1] gives $0\ge\kappa\|x-y\|_2^2$, hence $x=y$; thus $H$ is one-to-one. For $u=H(x)$ and $v=H(y)$, [A1] and [F2] give $\kappa\|x-y\|_2^2\le\|u-v\|_2\|x-y\|_2$. Dividing when $x\ne y$, with equality of inverse values when $x=y$, proves the inverse bound and completes bijectivity. [A1, F1, F2, step 2.1, algebra] ∎
