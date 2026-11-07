---
id: def-correlation-condition-for-a-measure
kind: definition
title: "Correlation condition for a measure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-integers-modulo-n
  - thm-standard-representatives-modulo-n
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§3, Definition 3.2 and equations (3.5)–(3.6), printed pp. 490–491"
    - title: "David Conlon, Jacob Fox, and Yufei Zhao, A Relative Szemerédi Theorem, arXiv:1305.5440v2 (2014)"
      url: "https://arxiv.org/pdf/1305.5440v2"
      locator: "§2, Definitions 2.2 and 2.4, printed pp. 3–4; their stronger theorem does not require a correlation condition"
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics, MIT OpenCourseWare lecture notes (2023)"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
      locator: "Chapter 9.2, printed pp. 285–288; this treatment uses a different 3-term pseudorandomness condition"
---

## Definition

Let $\nu=(\nu_p)$ be a family of functions on the prime fields $F_p=\mathbb Z/p\mathbb Z$ such that $\nu_p:F_p\to[0,\infty)$ and $\mathbb E_{x\in F_p}\nu_p(x)=1+o(1)$ as $p\to\infty$. Fix a positive integer $m_0$. We say that $\nu$ satisfies the $m_0$ correlation condition if for every integer $m$ with $2\le m\le m_0$ there is a family of functions $\tau_{m,p}:F_p\to[0,\infty)$ such that, for every fixed positive integer $q$, $\mathbb E_{h\in F_p}\tau_{m,p}(h)^q=O_{m,q}(1)$ as $p\to\infty$, and for every $h_1,\ldots,h_m\in F_p$, not necessarily distinct,

$$\mathbb E_{x\in F_p}\prod_{i=1}^m\nu_p(x+h_i)\le\prod_{1\le i<j\le m}\tau_{m,p}(h_i-h_j).$$

The moment bounds hold for each fixed $q$ with no upper bound on $q$; their constants may depend on $m$ and $q$, but not on $p$.

## Definition references

[[def-integers-modulo-n|The congruence class $[a]_n$ and the quotient set $\mathbb{Z}/n$]]

[[thm-standard-representatives-modulo-n|For $n\ge 1$, every class in $\mathbb{Z}/n$ has one representative $r$ with $0\le r<n$, so $\lvert\mathbb{Z}/n\rvert=n$; while $\mathbb{Z}/0$ is in bijection with $\mathbb{Z}$]]

[Green and Tao, §3, Definition 3.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Conlon, Fox, and Zhao, §2, Definition 2.4](https://arxiv.org/pdf/1305.5440v2)

[Zhao, Chapter 9.2](https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf)
