---
id: def-local-von-mangoldt-factor-beta-p
kind: definition
title: "Local von Mangoldt factors and the singular product"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-affine-linear-forms-system-and-size
  - def-prime
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - thm-standard-representatives-modulo-n
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ben Green and Terence Tao, Linear equations in primes"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf"
      locator: "Equations (1.4), (1.6), and Conjecture 1.2, printed pp. 1756–1757."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf"
      locator: "Section 1.7, printed pp. 123–128: local-modulus bias, the W-trick, and pseudorandom majorants."
---

## Definition

Let $\Psi=(\psi_1,\ldots,\psi_t):\mathbb Z^d\to\mathbb Z^t$ be an integer affine-linear system. For a prime $p$, define the local von Mangoldt weight on $\mathbb Z/p\mathbb Z$ by

$$ \Lambda_p([m]_p):= \begin{cases} \dfrac{p}{p-1},&p\nmid m,\\[4pt] 0,&p\mid m. \end{cases} $$

This is independent of the representative $m$ because divisibility by $p$ depends only on its congruence class. Define the local factor

$$ \beta_p(\Psi):=\frac1{p^d}\sum_{a\in(\mathbb Z/p\mathbb Z)^d}\prod_{i=1}^t\Lambda_p([\psi_i(a)]_p). $$

For a bounded Lebesgue-measurable convex set $K\subseteq\mathbb R^d$, define the archimedean factor

$$ \beta_\infty(\Psi,K):=\lambda_d\bigl(\{x\in K:\psi_i(x)>0\text{ for every }i\}\bigr), $$

where $\lambda_d$ is $d$-dimensional Lebesgue measure. Whenever the limit exists, the **singular product** is

$$ \mathfrak S(\Psi):=\lim_{X\to\infty}\prod_{p\le X}\beta_p(\Psi), $$

with the product over primes.

## Definition references

[[def-affine-linear-forms-system-and-size]]

[[def-prime]]

[[def-integers-modulo-n]]

[[def-addition-and-multiplication-modulo-n]]

[[thm-integers-modulo-n-basic-algebra]]

[[thm-standard-representatives-modulo-n]]

[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

[[lem-finite-complexity-local-factors-converge]]

[Green and Tao, equations (1.4), (1.6), and Conjecture 1.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf)

[Tao, Higher Order Fourier Analysis, Section 1.7](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf)
