---
id: cor-reduced-quotient-by-the-nilradical
kind: corollary
title: "The reduced quotient by the nilradical"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-nilradical-and-reduced-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614 notes (2020)"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §2 Ideals"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $N=\operatorname{Nil}(R)$. Then $R/N$ is reduced. Moreover, if $\varphi:R\to A$ is a ring homomorphism to a reduced commutative ring $A$, then there is a unique ring homomorphism $\overline\varphi:R/N\to A$ with $\varphi=\overline\varphi\circ\pi$, where $\pi:R\to R/N$ is the quotient map.

## Facts & Assumptions

**Given:** A commutative ring $R$, its nilradical $N=\operatorname{Nil}(R)$, and the quotient map $\pi:R\to R/N$.

[L1] The nilradical is the ideal of nilpotent elements, and a ring is reduced exactly when its nilradical is zero ([[def-nilradical-and-reduced-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $x+N\in R/N$ be nilpotent. Then $(x+N)^m=N$ for some $m\ge 1$, so $x^m\in N$. By [L1], some power of $x^m$ is zero, hence some power of $x$ is zero, so $x\in N$. Therefore $x+N=0+N$, and the only nilpotent element of $R/N$ is zero. Thus $R/N$ is reduced by [L1]. [L1, given, algebra]

1.2 Let $\varphi:R\to A$ with $A$ reduced. If $x\in N$, then $x^m=0$ for some $m\ge 1$, so $\varphi(x)^m=0$. Reducedness of $A$ forces $\varphi(x)=0$, so $N\subseteq\ker\varphi$. Therefore $\overline\varphi(x+N):=\varphi(x)$ is well-defined, and it is unique because $\pi$ is surjective. [L1, given, algebra]

2.1 The quotient by the nilradical is reduced and is universal among maps from $R$ to reduced rings. [step 1.1, step 1.2] ∎
