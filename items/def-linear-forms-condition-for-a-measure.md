---
id: def-linear-forms-condition-for-a-measure
kind: definition
title: "Linear-forms condition for a measure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-integers-modulo-n
  - def-addition-and-multiplication-modulo-n
  - thm-integers-modulo-n-basic-algebra
  - thm-standard-representatives-modulo-n
  - def-prime
  - lem-prime-not-dividing-is-coprime
  - cor-extended-euclidean-bezout-coefficients
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§3, Definition 3.1 and equations (3.1)–(3.4), printed pp. 488–490"
    - title: "David Conlon, Jacob Fox, and Yufei Zhao, A Relative Szemerédi Theorem, arXiv:1305.5440v2 (2014)"
      url: "https://arxiv.org/pdf/1305.5440v2"
      locator: "§2, Definitions 2.2 and 2.4, printed pp. 3–4; their linear-forms condition is weaker and specialized"
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics, MIT OpenCourseWare lecture notes (2023)"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
      locator: "Chapter 9.2, Definition 9.2.3, printed pp. 286–287; the treatment is the 3-term graph specialization"
---

## Definition

Let $p$ range over primes, put $F_p=\mathbb Z/p\mathbb Z$, and define $\mathbb E_{x\in F_p^t}H(x)=p^{-t}\sum_{x\in F_p^t}H(x)$. A measure sequence is a family $\nu=(\nu_p)$ with $\nu_p:F_p\to[0,\infty)$ and $\mathbb E_{x\in F_p}\nu_p(x)=1+o(1)$ as $p\to\infty$ through primes. Fix positive integers $m_0,t_0,L_0$. For a rational number $a/b$ in lowest terms with $b>0$ and $|a|,b\le L_0$, write $[a/b]_p=[a]_p[b]_p^{-1}$ for primes $p>L_0$. We say that $\nu$ satisfies the $(m_0,t_0,L_0)$ linear-forms condition if for every $1\le m\le m_0$, every $1\le t\le t_0$, every family of nonzero coefficient vectors $\alpha_i=(\alpha_{i1},\ldots,\alpha_{it})\in\mathbb Q^t$ whose entries have numerators and positive denominators bounded in absolute value by $L_0$ and no two of which are rational multiples of one another, and every choice of shifts $b_1,\ldots,b_m\in F_p$, the affine-linear forms $\psi_i(x)=\sum_{j=1}^t[\alpha_{ij}]_p x_j+b_i$ satisfy

$$\mathbb E_{x\in F_p^t}\prod_{i=1}^m\nu_p(\psi_i(x))=1+o(1).$$

For fixed $m_0,t_0,L_0$, the error tends to zero uniformly over the allowed coefficient vectors and all shifts $b_i$.

## Definition references

[[def-integers-modulo-n|The congruence class $[a]_n$ and the quotient set $\mathbb{Z}/n$]]

[[def-addition-and-multiplication-modulo-n|Addition and multiplication on $\mathbb{Z}/n$ by $[a]_n+[b]_n=[a+b]_n$ and $[a]_n[b]_n=[ab]_n$]]

[[thm-integers-modulo-n-basic-algebra|For every natural $n$, $(\mathbb{Z}/n,+)$ is an abelian group, multiplication is a commutative monoid operation, and both distributive laws hold]]

[[thm-standard-representatives-modulo-n|For $n\ge 1$, every class in $\mathbb{Z}/n$ has one representative $r$ with $0\le r<n$, so $\lvert\mathbb{Z}/n\rvert=n$; while $\mathbb{Z}/0$ is in bijection with $\mathbb{Z}$]]

[[def-prime|Prime and composite integers: $p$ is prime when $p > 1$ and its only positive divisors are $1$ and $p$]]

[[lem-prime-not-dividing-is-coprime|For a prime $p$ and any integer $a$, $\gcd(p,a)$ is $p$ when $p \mid a$ and $1$ otherwise; so $p \nmid a$ makes $p$ and $a$ coprime]]

[[cor-extended-euclidean-bezout-coefficients|The extended Euclidean algorithm: the same descent produces integers $x, y$ with $ax + by = \gcd(a,b)$, so Bézout coefficients are computed and not merely shown to exist]]

[Green and Tao, §3, Definition 3.1](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Conlon, Fox, and Zhao, §2, Definition 2.2](https://arxiv.org/pdf/1305.5440v2)

[Zhao, Chapter 9.2, Definition 9.2.3](https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf)
