---
id: thm-additive-hilberts-theorem-90
kind: theorem
title: "Additive Hilbert 90: trace zero is the image of $\\alpha\\mapsto\\alpha-\\sigma(\\alpha)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cyclic-extension, cor-trace-is-surjective-for-finite-separable-extensions]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Corollary 5.25"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "J. Ash, Basic Abstract Algebra, Section 6.7"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite cyclic extension of degree $n$ with
$\operatorname{Gal}(K/F)=\langle\sigma\rangle$. For $b\in K$, the following are
equivalent:

1. $\operatorname{Tr}_{K/F}(b)=0$.
2. There exists $\alpha\in K$ with
   $$b=\alpha-\sigma(\alpha).$$

## Facts & Assumptions

**Given:** A finite cyclic extension $K/F$ of degree $n$, a generator $\sigma$ of its Galois group, and an element $b\in K$.

[F1] A cyclic extension is finite Galois and therefore finite separable ([[def-cyclic-extension]]).

[L1] In a finite separable extension, the trace map is surjective ([[cor-trace-is-surjective-for-finite-separable-extensions]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction from 2 to 1, suppose $b=\alpha-\sigma(\alpha)$. Summing the conjugates gives $$\operatorname{Tr}_{K/F}(b)=\sum_{i=0}^{n-1}\sigma^i(\alpha-\sigma(\alpha))=\sum_{i=0}^{n-1}\bigl(\sigma^i(\alpha)-\sigma^{i+1}(\alpha)\bigr)=0,$$ again by telescoping and $\sigma^n=1$. [F1, algebra]

1.2 For the converse, assume $\operatorname{Tr}_{K/F}(b)=0$. By [F1] and [L1], choose $c\in K$ with $\operatorname{Tr}_{K/F}(c)=1$. Define $$\alpha:=\sum_{i=0}^{n-1}\left(\sum_{j=0}^{i-1}\sigma^j(b)\right)\sigma^i(c),$$ where the inner sum is $0$ for $i=0$. [F1, L1, choose]

2.1 Put $s_i=\sum_{j=0}^{i-1}\sigma^j(b)$, so $s_0=0$, $s_n=\operatorname{Tr}_{K/F}(b)=0$, and $s_i=b+\sigma(s_{i-1})$ for $1\le i\le n-1$, while $0=s_n=b+\sigma(s_{n-1})$. Applying $\sigma$ to the coefficients as well gives $$\sigma(\alpha)=\sum_{i=0}^{n-1}\sigma(s_i)\sigma^{i+1}(c)=\sigma(s_{n-1})c+\sum_{i=1}^{n-1}\sigma(s_{i-1})\sigma^i(c).$$ Therefore every coefficient of $\alpha-\sigma(\alpha)$ is $b$, so $$\alpha-\sigma(\alpha)=b\sum_{i=0}^{n-1}\sigma^i(c)=b\,\operatorname{Tr}_{K/F}(c)=b.$$ [step 1.2, algebra]

3.1 Steps 1.1 and 2.1 prove the equivalence. [step 1.1, step 2.1] ∎

## Remarks

- **This is the additive engine behind Artin-Schreier theory.** The next theorem applies it to the trace-zero element $-1$ in characteristic $p$.
