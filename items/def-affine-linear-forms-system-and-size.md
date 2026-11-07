---
id: def-affine-linear-forms-system-and-size
kind: definition
title: "Affine-linear systems and their scale size"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-integers, def-rationals, def-int-abs]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ben Green and Terence Tao, Linear equations in primes"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf"
      locator: "Definition 1.1 and equation (1.1), printed p. 1755: integer affine-linear systems, homogeneous parts, and scale-dependent size."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf"
      locator: "Section 1.7, printed pp. 109–111: affine-linear patterns and the prime-pattern transfer setting."
---

## Definition

Let $d,t\ge1$ be integers and $N>0$. An **integer affine-linear form** on $\mathbb Z^d$ is a map $\psi:\mathbb Z^d\to\mathbb Z$ of the form

$$
\psi(x_1,\ldots,x_d)=a_1x_1+\cdots+a_dx_d+b,
$$

where $a_1,\ldots,a_d,b\in\mathbb Z$. Its **homogeneous part** is $P_\psi(x)=a_1x_1+\cdots+a_dx_d$, its **coefficient vector** is $a=(a_1,\ldots,a_d)$, and its **constant term** is $b$. The form is **nonconstant** exactly when $a\ne0$. An **affine-linear system** is an ordered tuple $\Psi=(\psi_1,\ldots,\psi_t):\mathbb Z^d\to\mathbb Z^t$; write $\psi_i(x)=\sum_{j=1}^d a_{ij}x_j+b_i$. Its size at scale $N$ is

$$
\|\Psi\|_N:=\sum_{i=1}^t\sum_{j=1}^d |a_{ij}|+\frac1N\sum_{i=1}^t|b_i|.
$$

The system need not be injective; sums over its parameter domain count parameters with their multiplicities.

## Definition references

[[def-integers]]

[[def-rationals]]

[[def-int-abs]]

[Green and Tao, Definition 1.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf)

[Tao, Higher Order Fourier Analysis, Section 1.7](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf)
