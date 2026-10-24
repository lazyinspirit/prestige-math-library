---
id: lem-hh-finite-direct-summands-over-khh-are-free
kind: lemma
title: "Finite direct summands over a formal-series ring are free with rank read from reduction"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 1
deps: [def-field, def-formal-power-series-and-coefficient-extraction, def-free-module-on-a-set-and-standard-basis, lem-hh-one-parameter-formal-series-local-ring]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Pavel Etingof, Structure of Finite Dimensional Algebras, MIT OpenCourseWare 18.712, Chapter 7"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/70961c084499052681efb7485af37858_MIT18_712F10_ch7.pdf"
      locator: "§7.1, Theorem 7.1 and Definition 7.2, PDF p. 1: projective modules as direct summands of free modules; the local determinant argument proves the formal-series freeness and rank statement."
axiom_use: "No arbitrary Choice beyond a basis of the finite-dimensional quotient and finitely many lifts."
---

## Statement

Let $k$ be a field and $R:=k\llbracket h\rrbracket$. For $n\ge0$, let $p:R^n\to R^n$ be an $R$-linear map with $p^2=p$, and put $M:=p(R^n)$. Then $M$ is free of finite rank equal to $r:=\dim_k(M/hM)$. This includes $M=0$ and $r=0$.

## Facts & Assumptions

**Given:** A field $k$, the formal power-series ring $R=k\llbracket h\rrbracket$, a finite integer $n\ge0$, an idempotent $R$-linear map $p:R^n\to R^n$, and $M=p(R^n)$.

[F1] A field has $0\ne1$ and every nonzero element has a multiplicative inverse ([[def-field]]).

[F2] A free module has a standard basis and every element has a unique finite coordinate expansion ([[def-free-module-on-a-set-and-standard-basis]]).

[F3] A series is a coefficient function and products are defined by finite Cauchy convolution ([[def-formal-power-series-and-coefficient-extraction]]).

[F4] The ring $R$ is a domain, $R/hR\cong k$, and $R^n$ is complete and separated for the $h$-adic topology ([[lem-hh-one-parameter-formal-series-local-ring]]).

## Proof

**Proof technique:** direct.

1.1 Every nonzero power series has a least degree with nonzero coefficient. By [F3], the coefficient of the least-degree term in a product of two nonzero series is the product of their two leading coefficients, which is nonzero by [F1]; hence [F4] confirms that $R$ is a domain. The module $M\subseteq R^n$ is therefore torsion-free: if $c\ne0$ and $cm=0$, every coordinate of $m$ is zero. The elements $p(e_1),\dots,p(e_n)$ from the standard basis of [F2] generate $M$, so $M/hM$ is a finite-dimensional vector space over $k\cong R/hR$ by [F4]. [given, F1, F2, F3, F4, algebra]

2.1 Choose a basis $\bar m_1,\dots,\bar m_r$ of $M/hM$ and lifts $m_i\in M$. Let $N:=\sum_{i=1}^r Rm_i$ and $Q:=M/N$. The quotient $Q$ is finitely generated, and the spanning property modulo $h$ gives $M=N+hM$, hence $Q=hQ$. [step 1.1, F4, choose, construct]

3.1 Choose finite generators $q_1,\dots,q_s$ of $Q$. From $Q=hQ$, write $q_i=h\sum_{j=1}^s c_{ij}q_j$ with $c_{ij}\in R$. For the column $q=(q_i)$ this is $(I-hC)q=0$. The matrix series $\sum_{t\ge0}(hC)^t$ converges entrywise by [F4] and is a two-sided inverse of $I-hC$, since the finite partial products leave remainder $(hC)^{t+1}\in h^{t+1}M_s(R)$, which tends to zero; separatedness in [F4] makes the limiting products exactly the identity. Therefore every $q_i=0$, so $Q=0$ and the lifts $m_i$ span $M$. This also proves $M=0$ when $r=0$. [step 2.1, F4, given, algebra]

4.1 If $\sum_i a_im_i=0$ for $a_i\in R$, reducing modulo $h$ and using that the $\bar m_i$ are a basis gives $a_i\in hR$ for every $i$. Write $a_i=hb_i$ and cancel $h$ in $R^n$, which is torsion-free by step 1.1, to get $\sum_i b_im_i=0$. Repeating shows each $a_i\in h^tR$ for every $t\ge1$. A nonzero power series has a finite least degree, so $\bigcap_{t\ge1}h^tR=0$ by separatedness [F4], and every $a_i=0$. Thus the spanning family is linearly independent. [step 1.1, step 3.1, F4, algebra]

5.1 Steps 3.1 and 4.1 show that $(m_1,\dots,m_r)$ spans $M$ and is linearly independent, hence is an $R$-basis in the sense of [F2]. Its cardinality is $r=\dim_k(M/hM)$ by construction, proving the statement, including the empty basis when $r=0$. [step 3.1, step 4.1, F2, given] ∎
