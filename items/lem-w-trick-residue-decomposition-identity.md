---
id: lem-w-trick-residue-decomposition-identity
kind: lemma
title: "The W-trick gives an exact finite residue decomposition"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-affine-linear-forms-system-and-size
  - def-prime
  - def-common-divisor-and-gcd
  - def-coprime
  - thm-fundamental-theorem-of-arithmetic
  - def-integers-modulo-n
  - thm-standard-representatives-modulo-n
  - def-divides-in-z
  - def-int-abs
  - lem-divisor-bound
  - def-von-mangoldt-function
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
      locator: "Section 5, equations (5.5)–(5.6), printed pp. 1777–1778."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf"
      locator: "Section 1.7.2, printed pp. 123–124: affine residue classes and the W-trick."
---

## Statement

Let $W\ge2$ be an integer, let $\Phi(W)=|\{b\in\{1,\ldots,W\}:\gcd(b,W)=1\}|$, and let $\Psi=(\psi_1,\ldots,\psi_t):\mathbb Z^d\to\mathbb Z^t$ be an integer affine-linear system. Define $\Lambda'(m)=\log p$ when $m=p$ is prime and $\Lambda'(m)=0$ otherwise, and define $\Lambda'_{b,W}(n)=\frac{\Phi(W)}{W}\Lambda'(Wn+b)$ for every $b$ coprime to $W$. Choose one representative $\bar a\in\{0,\ldots,W-1\}^d$ for each $a\in(\mathbb Z/W)^d$. Let $\mathcal A_W$ consist of those $a$ for which $p\nmid\psi_i(\bar a)$ for every prime $p\mid W$ and every $i$. For $a\in\mathcal A_W$, let $b_i(a)\in\{1,\ldots,W-1\}$ be the least positive representative of $\psi_i(\bar a)$ modulo $W$, set $\widetilde\psi_{i,a}(n)=\frac{\psi_i(Wn+\bar a)-b_i(a)}{W}$, and set $K_a=\{n\in\mathbb R^d:Wn+\bar a\in K\}$. If $K\subseteq\mathbb R^d$ is bounded and $\psi_i(x)>W$ for every $x\in K$ and every $i$, then

$$\sum_{x\in K\cap\mathbb Z^d}\prod_{i=1}^t\Lambda'(\psi_i(x)) =\sum_{a\in\mathcal A_W}\left(\frac{W}{\Phi(W)}\right)^t \sum_{n\in K_a\cap\mathbb Z^d}\prod_{i=1}^t\Lambda'_{b_i(a),W}(\widetilde\psi_{i,a}(n)).$$

## Statement references

[[def-affine-linear-forms-system-and-size]]

[[def-prime]]

[[def-common-divisor-and-gcd]]

[[def-coprime]]

[[def-integers-modulo-n]]

[[thm-standard-representatives-modulo-n]]

[[def-von-mangoldt-function]]

[Green and Tao, equations (5.5)–(5.6)](https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf)

[Tao, Higher Order Fourier Analysis, Section 1.7.2](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf)

## Facts & Assumptions

**Given:** The data and conventions in the Statement.

[F1] Every integer has a unique decomposition $x=Wn+\bar a$ with $n\in\mathbb Z$ and $\bar a\in\{0,\ldots,W-1\}$, coordinatewise. [[def-integers-modulo-n]] [[thm-standard-representatives-modulo-n]]

[F2] If a prime $m$ has a prime divisor $p$, then $m=p$; every positive divisor $p$ of $W>0$ satisfies $p\le W$. [[def-prime]] [[def-divides-in-z]] [[def-int-abs]] [[lem-divisor-bound]]

[F3] For $b$ coprime to $W$, $\Lambda'_{b,W}(n)=\frac{\Phi(W)}W\Lambda'(Wn+b)$, as fixed in the Statement; $\Lambda'$ is the restriction of the von Mangoldt weight to primes. [[def-von-mangoldt-function]]

[F4] For $a\in\mathcal A_W$, every prime divisor of $W$ fails to divide $\psi_i(\bar a)$; the same is true of its congruent representative $b_i(a)$. Thus no prime divides both $b_i(a)$ and $W$, so their greatest common divisor is $1$. [[def-common-divisor-and-gcd]] [[def-coprime]] [[thm-fundamental-theorem-of-arithmetic]]

## Proof

1.1 Partition the left-hand summation domain by the unique residue vector $a=x\bmod W$ from [F1]. If $a\notin\mathcal A_W$, some $i$ has a prime $p\mid W$ with $p\mid\psi_i(x)$. If the product of prime-restricted weights were nonzero, $\psi_i(x)$ would itself be prime, so it would equal $p\le W$ by [F2], contrary to $\psi_i(x)>W$. Thus every discarded residue class contributes zero. [given, F1, F2, construct]

1.2 Fix $a\in\mathcal A_W$ and write $x=Wn+\bar a$. By the definition of $b_i(a)$, the integer $\psi_i(Wn+\bar a)-b_i(a)$ is divisible by $W$, so $\widetilde\psi_{i,a}(n)\in\mathbb Z$ and $\psi_i(x)=W\widetilde\psi_{i,a}(n)+b_i(a)$. Moreover [F4] makes each $b_i(a)$ an allowed coprime residue for the W-tricked weight. [given, F1, F4, construct, algebra]

2.1 The weight identity in [F3] applies by step 1.2 and gives $\Lambda'(\psi_i(x))=\frac{W}{\Phi(W)}\Lambda'_{b_i(a),W}(\widetilde\psi_{i,a}(n))$ for every $i$. Multiplying over $i$ gives the factor $(W/\Phi(W))^t$, and $x\in K$ is equivalent to $n\in K_a$. [step 1.2, F3, F4, algebra]

3.1 Sum step 2.1 over each retained residue vector and its corresponding $n$; step 1.1 shows that all omitted residue vectors contribute zero. This is exactly the displayed finite decomposition. [step 1.1, step 2.1, algebra] ∎
