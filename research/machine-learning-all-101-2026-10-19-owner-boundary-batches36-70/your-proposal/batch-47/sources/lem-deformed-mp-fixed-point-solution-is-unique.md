---
id: lem-deformed-mp-fixed-point-solution-is-unique
kind: lemma
title: "Uniqueness of the deformed Marchenko–Pastur fixed point"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-probability-measure
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. W. Silverstein, Strong Convergence of the Empirical Distribution of Eigenvalues of Large Dimensional Random Matrices"
      url: "https://jack.math.ncsu.edu/strong.pdf"
    - title: "Z. D. Bai, B. Q. Miao, and G. M. Pan, On Asymptotics of Eigenvectors of Large Sample Covariance Matrix"
      url: "https://arxiv.org/pdf/0708.1720"
---

## Statement

Let $c>0$, let $H$ be a Borel probability measure on $[0,\infty)$, and fix $z\in\mathbb C$ with $\operatorname{Im}z>0$. There is at most one $q\in\mathbb C$ satisfying $\operatorname{Im}q>0$, $u:=-(1-c)/z+cq$ with $\operatorname{Im}u>0$, and
$$q=\int_{[0,\infty)}\frac{1}{t(1-c-czq)-z}\,dH(t).$$

## Statement references

Silverstein, Theorem 1.1 and equation (1.4), PDF pp. 2–3 ([full paper PDF](https://jack.math.ncsu.edu/strong.pdf)).

Bai, Miao, and Pan, equation (1.1), PDF pp. 3–4 ([full paper PDF](https://arxiv.org/pdf/0708.1720)).

## Facts & Assumptions

**Given:** $c>0$, a Borel probability measure $H$ on $[0,\infty)$, $z\in\mathbb C^+$, and two candidate solutions $q_1,q_2$ satisfying the Statement.

[A1] The aspect ratio $c$ is positive.

[A2] $H$ is a countably additive Borel measure on $[0,\infty)$ with total mass one ([[def-probability-measure]]).

[A3] The spectral parameter is $z=u+i\eta$ with $u\in\mathbb R$ and $\eta>0$.

[A4] Each candidate $q$ has positive imaginary part, $-(1-c)/z+cq$ has positive imaginary part, and $q$ satisfies the fixed-point equation in the Statement.

## Proof

1.1 For either candidate $q$, set $u=-(1-c)/z+cq\in\mathbb C^+$. Since $t\ge0$, $1+tu\ne0$ for every $t$, and the fixed-point equation becomes $q=-z^{-1}\int(1+tu)^{-1}\,dH(t)$. Substituting this into $u=-(1-c)/z+cq$ and using $(1+tu)^{-1}=1-tu/(1+tu)$ gives $$z=-\frac1u+c\int_{[0,\infty)}\frac{t}{1+tu}\,dH(t).$$ All integrals are finite because $|t/(1+tu)|\le1/\operatorname{Im}u$. [given, A1, A2, A3, A4, algebra]

2.1 If $u_1\ne u_2$ are the transforms of two solutions, subtracting their equations in step 1.1 and dividing by $u_1-u_2$ yields $$\frac1{u_1u_2}=c\int_{[0,\infty)}\frac{t^2}{(1+tu_1)(1+tu_2)}\,dH(t).$$ For either solution $u$, taking imaginary parts in step 1.1 gives $$\operatorname{Im}z=\operatorname{Im}u\left(\frac1{|u|^2}-c\int_{[0,\infty)}\frac{t^2}{|1+tu|^2}\,dH(t)\right)>0,$$ so $c|u|^2\int t^2|1+tu|^{-2}\,dH(t)<1$. [A1, A2, A3, A4, step 1.1, algebra]

3.1 Taking absolute values in the identity of step 2.1 and applying Cauchy–Schwarz gives $$1\le\left(c|u_1|^2\int\frac{t^2}{|1+tu_1|^2}\,dH(t)\right)^{1/2}\left(c|u_2|^2\int\frac{t^2}{|1+tu_2|^2}\,dH(t)\right)^{1/2}<1,$$ contradicting step 2.1. Hence $u_1=u_2$, and the relation $u=-(1-c)/z+cq$ with $c>0$ gives $q_1=q_2$. [A1, A2, A3, A4, step 2.1, algebra] ∎

## Source notes

Silverstein, Theorem 1.1 and equation (1.4), PDF pp. 2–3 ([full paper PDF](https://jack.math.ncsu.edu/strong.pdf)).
