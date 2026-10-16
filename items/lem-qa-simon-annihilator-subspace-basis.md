---
id: lem-qa-simon-annihilator-subspace-basis
kind: lemma
title: "The Simon annihilator is an (n−1)-dimensional binary subspace"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-simon-promise
  - def-qa-binary-field-f2
  - thm-qa-binary-field-f2-is-a-field
  - def-qa-binary-dot-product
  - def-qa-binary-vector-space
  - def-vector-space
  - def-linear-subspace
  - def-linear-independence
  - def-linear-combination-and-span
  - lem-span-is-the-set-of-linear-combinations
  - def-linear-basis
  - def-dimension
justified_by: []
proof_strategy: direct
axiom_use: "No Choice is used; the proof selects the least nonzero coordinate and gives an explicit finite basis."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415v6, 2026)"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "Chapter 3, §§3.1–3.3, PDF pp.35–39: Simon's nonzero hidden string and the orthogonal binary equations."
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms (updated November 2020)"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
      locator: "§6.1, PDF pp.11–13: the binary equations y·a=0 and their solution space."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 6, PDF pp.33–37: Simon's order-two subgroup in F_2^n and its annihilator."
---
## Statement

Let $n\ge1$ and let $s\in\mathbb F_2^n$ be nonzero in the coordinate vector space of [[def-qa-binary-vector-space]]. Define
$$
s^\perp:=\{y\in\mathbb F_2^n:s\cdot y=0\},
$$
where the binary dot product is the parity defined in [[def-qa-binary-dot-product]]. Then $s^\perp$ is a linear subspace of dimension $d=n-1$ and has exactly $2^d$ elements. The assertion includes $n=1$, when $s^\perp=\{0\}$ has dimension zero.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and a nonzero binary string $s\in\mathbb F_2^n$.

[F1] [[def-qa-simon-promise]]: the Simon mask is nonzero.

[F2] [[def-qa-binary-vector-space]]: $\mathbb F_2^n$ has coordinatewise vector addition and scalar multiplication over the field $\mathbb F_2$.

[F3] [[thm-qa-binary-field-f2-is-a-field]]: these quotient operations make $\mathbb F_2$ a field.

[F4] [[def-qa-binary-dot-product]]: $s\cdot y=\bigoplus_{i<n}(s_i\land y_i)$.

[F5] [[def-vector-space]] and [[def-linear-subspace]]: a linear subspace contains zero and is closed under vector addition and scalar multiplication over the field.

[F6] [[def-linear-independence]]: a finite list is independent when a zero linear combination forces every coefficient to be zero.

[F7] [[lem-span-is-the-set-of-linear-combinations]]: the span of a finite list is exactly the set of its finite linear combinations.

[F8] [[def-linear-basis]] and [[def-dimension]]: a basis is an independent spanning set, and the dimension of a finite-dimensional vector space is the size of a finite basis.

## Proof

1.1 Choose the least coordinate $j<n$ with $s_j=1$, which exists by [F1]. For each $i\ne j$, let $u^{(i)}$ have coordinate $1$ at $i$, coordinate $s_i$ at $j$, and zero elsewhere. Then $s\cdot u^{(i)}=s_i\oplus(s_j\land s_i)=s_i\oplus s_i=0$, so every $u^{(i)}$ belongs to $s^\perp$. When $n=1$, the index set $i\ne j$ is empty. [given, F1, F2, F3, F4, choose, construct, algebra]

2.1 For any $y\in s^\perp$, the equation $s\cdot y=0$ and $s_j=1$ give $y_j=\bigoplus_{i\ne j}(s_i\land y_i)$; hence $y=\sum_{i\ne j}y_i u^{(i)}$, checking each coordinate. Conversely, distributing [F4] over the finite sum gives $s\cdot(\sum c_i u^{(i)})=\sum c_i(s\cdot u^{(i)})=0$, so the span equals $s^\perp$ and makes it a subspace by [F5] and [F7]. For any injective finite list $b_t=u^{(i_t)}$ from this set, the indices $i_t\ne j$ are distinct, and coordinate $i_t$ of $\sum_r c_r b_r$ is exactly $c_t$. Thus a zero combination forces every coefficient to vanish; when the list is empty the condition is vacuous. The set is independent by [F6] and spans by [F7]. [given, F2, F3, F4, F5, F6, F7, step 1.1, algebra]

3.1 The independent spanning set from step 2.1 is a basis by [F8], and has exactly $n-1=d$ elements, so $\dim s^\perp=d$. Its coefficient map is bijective by the coordinate formula and independence, so $|s^\perp|=2^d$ because there are $2^d$ binary coefficient lists. For $n=1$, the empty list gives only $0$, and the same count is $2^0=1$. [given, F2, F8, step 2.1, algebra] ∎
