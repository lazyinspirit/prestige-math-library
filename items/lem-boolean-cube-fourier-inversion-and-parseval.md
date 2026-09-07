---
id: lem-boolean-cube-fourier-inversion-and-parseval
kind: lemma
title: "Character orthogonality, inversion and Parseval"
status: draft
origin: pipeline
deps: [def-boolean-cube-fourier-coefficients]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct calculation
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, January 2007 web draft, \u00a719.3.1 and Lemma 19.7 pp.388\u2013389; \u00a718.4.1 p.363"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

For $n\geq0$, real functions $h,k$ on $\mathbb F_2^n$ and the normalized characters and coefficients,
$$\mathbb E_x\chi_a(x)\chi_b(x)=\begin{cases}1&a=b,\\0&a\ne b,\end{cases}\qquad h(x)=\sum_a\widehat h(a)\chi_a(x),$$
$$\mathbb E_x h(x)k(x)=\sum_a\widehat h(a)\widehat k(a),\qquad \mathbb E_xh(x)^2=\sum_a\widehat h(a)^2.$$
Any two distinct linear Boolean functions $\ell_a,\ell_b$ disagree on exactly half the cube.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] Characters are real signs (-1)^(a dot x), and coefficients are their normalized finite inner products with h ([[def-boolean-cube-fourier-coefficients]]).

## Proof

1.1 From the definitions, $\chi_a\chi_b=\chi_{a+b}$ and $\chi_a(x+y)=\chi_a(x)\chi_a(y)$. If $a=b$, their product is one everywhere. If $a\ne b$, some coordinate $j$ of $a+b$ equals one. Pair $x$ with $x+e_j$: the pairing is a fixed-point-free involution and reverses the sign of $\chi_{a+b}$. Its sum is zero. This proves orthogonality. [F1, algebra]

2.1 For fixed $x,y$, sum $\chi_a(x)\chi_a(y)=\chi_a(x+y)$ over $a$. If $x=y$, this sum is $2^n$. Otherwise pair $a$ with $a+e_j$ at a nonzero coordinate of $x+y$ to get zero. Thus $\sum_a\chi_a(x)\chi_a(y)=2^n\mathbf1_{x=y}$. Substituting the coefficient definition gives $\sum_a\widehat h(a)\chi_a(x)=2^{-n}\sum_y h(y)\sum_a\chi_a(y)\chi_a(x)=h(x)$. [F1, step 1.1, algebra]

3.1 Expand both $h$ and $k$ by the preceding identity and average their product. All sums are finite, so rearrangement gives $\mathbb E hk=\sum_{a,b}\widehat h(a)\widehat k(b)\mathbb E\chi_a\chi_b=\sum_a\widehat h(a)\widehat k(a)$. Taking $k=h$ proves Parseval, also when either function is zero. [step 1.1, step 2.1, algebra]

4.1 For $a\ne b$, the character $\chi_{a+b}$ is one where $\ell_a=\ell_b$ and minus one where they differ. Its zero mean therefore forces equal counts of agreement and disagreement. For $n=0$, there are no distinct indices; the sole character is one and every displayed Fourier identity is an equality of one-term sums. For $n=1$, the pairing interchanges the two cube points. [step 1.1, step 2.1, step 3.1, algebra] ∎
