---
id: lem-w-trick-local-factors-recombine
kind: lemma
title: "The W-tricked residue density is the product of its local factors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-local-von-mangoldt-factor-beta-p
  - def-prime
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - thm-standard-representatives-modulo-n
  - thm-chinese-remainder-theorem
  - def-common-divisor-and-gcd
  - def-coprime
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ben Green and Terence Tao, Linear equations in primes"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf"
      locator: "Equations (1.6) and (5.3), printed pp. 1757 and 1777."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf"
      locator: "Section 1.7.2, printed pp. 123–127: local biases and the W-trick."
---

## Statement

Let $w\ge2$ and $W=\prod_{p\le w}p$. Let $\Phi(W)$ be the number of residue classes modulo $W$ coprime to $W$, define $\Lambda_W(b)=W/\Phi(W)$ for such a class and $0$ otherwise, and put

$$\beta_W(\Psi):=\frac1{W^d}\sum_{a\in(\mathbb Z/W)^d}\prod_{i=1}^t\Lambda_W([\psi_i(a)]_W).$$

Let $\mathcal A_W=\{a\in(\mathbb Z/W)^d:p\nmid\psi_i(a)\text{ for every prime }p\le w\text{ and every }i\}$. Then

$$\beta_W(\Psi)=\left(\frac W{\Phi(W)}\right)^t\frac{|\mathcal A_W|}{W^d} =\prod_{p\le w}\beta_p(\Psi).$$

## Statement references

[[def-local-von-mangoldt-factor-beta-p]]

[[thm-chinese-remainder-theorem]]

[Green and Tao, equations (1.6) and (5.3)](https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf)

[Tao, Higher Order Fourier Analysis, Section 1.7.2](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf)

## Facts & Assumptions

**Given:** $w,W,\Psi,\Phi(W),\Lambda_W,\beta_W$, and $\mathcal A_W$ as in the Statement.

[F1] Reduction modulo the pairwise-coprime prime factors of $W$ is a bijection preserving addition and multiplication, coordinatewise. [[thm-chinese-remainder-theorem]] [[def-integers-modulo-n]] [[def-addition-and-multiplication-modulo-n]]

[F2] The number of invertible residue classes modulo $W$ is $\Phi(W)=\prod_{p\le w}(p-1)$, since the Chinese remainder bijection identifies them with the nonzero residue classes modulo each prime factor. [[thm-chinese-remainder-theorem]] [[thm-standard-representatives-modulo-n]]

[F3] For each prime $p$, $\beta_p(\Psi)$ is the average of $\prod_i\Lambda_p([\psi_i(a)]_p)$ over $(\mathbb Z/p\mathbb Z)^d$. [[def-local-von-mangoldt-factor-beta-p]]

## Proof

1.1 For each $a\in(\mathbb Z/W)^d$, the product $\prod_i\Lambda_W([\psi_i(a)]_W)$ is $(W/\Phi(W))^t$ when $a\in\mathcal A_W$ and is zero otherwise. Averaging over the $W^d$ residue vectors proves $\beta_W(\Psi)=(W/\Phi(W))^t|\mathcal A_W|/W^d$. [given, F2, algebra]

1.2 For any residue $b$ modulo $W$, its indicator of being coprime to $W$ is $\prod_{p\le w}\mathbf1_{p\nmid b}$. By [F2], $W/\Phi(W)=\prod_{p\le w}p/(p-1)$, so $\Lambda_W(b)=\prod_{p\le w}\Lambda_p([b]_p)$. The same identity applied to each $\psi_i(a)$ and the coordinatewise CRT bijection [F1] express the average defining $\beta_W$ as an average over independent residue vectors modulo each $p\le w$. [F1, F2, F3, algebra]

2.1 A finite average of a product of functions on the independent CRT coordinates factors as the product of their averages. The factor at prime $p$ is exactly $\beta_p(\Psi)$ by [F3]. Hence $\beta_W(\Psi)=\prod_{p\le w}\beta_p(\Psi)$. [step 1.2, F1, F3, algebra]

3.1 Combining step 1.1 with step 2.1 gives both equalities in the Statement. [step 1.1, step 2.1] ∎
