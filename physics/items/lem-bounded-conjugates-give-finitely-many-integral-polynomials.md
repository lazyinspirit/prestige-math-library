---
id: lem-bounded-conjugates-give-finitely-many-integral-polynomials
kind: lemma
title: "Bounded roots give finitely many monic integer polynomials"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 8 Theorem 8.43 proof, pp.151-152."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§6.2 discriminants and integral minimal polynomials."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

For every integer $n\ge1$ and every real $R\ge1$, the set of monic
polynomials in $\mathbb Z[X]$ of degree at most $n$ whose complex roots,
counted with multiplicity, all have modulus at most $R$ is finite.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and a real $R\ge1$.

[F1] If $\alpha_1,\dots,\alpha_m\in\mathbb C$ and
$f(X)=\prod_{j=1}^m(X-\alpha_j)=X^m+c_{m-1}X^{m-1}+\cdots+c_0$, then
expanding the product and comparing coefficients gives
$c_{m-k}=(-1)^k\sum_{|S|=k}\prod_{j\in S}\alpha_j$ for $1\le k\le m$, the sum
being over the $k$-element subsets $S\subseteq\{1,\dots,m\}$. In particular
$|c_{m-k}|\le\binom{m}{k}R^k$ whenever every $|\alpha_j|\le R$.

## Proof

1.1 Fix $m$ with $1\le m\le n$ and let $f(X)=X^m+c_{m-1}X^{m-1}+\cdots+c_0\in\mathbb Z[X]$ be monic of degree $m$ with roots $\alpha_1,\dots,\alpha_m\in\mathbb C$, counted with multiplicity; by [F1] each coefficient is an integer satisfying $|c_{m-k}|\le\binom{m}{k}R^k$ when $|\alpha_j|\le R$ for all $j$. [F1, given]

1.2 The degree-zero case contributes only the constant polynomial $1$, which has no roots, so the root condition holds for it vacuously. [given]

2.1 Thus every $c_{m-k}$ lies in the intersection $\mathbb Z\cap[-\binom{m}{k}R^k,\binom{m}{k}R^k]$, an integer interval whose endpoints depend only on $m$, $k$ and $R$, and such an interval contains at most $2\binom{m}{k}R^k+1$ integers, a finite number because $R\ge1$. [step 1.1, algebra]

3.1 For each fixed $m$ the coefficient vector $(c_0,\dots,c_{m-1})$ therefore ranges over a product of $m$ finite sets, which is finite, and the monic degree-$m$ polynomials inject into that product by their coefficient vector, so there are finitely many of them. [step 2.1, algebra]

4.1 The set in the statement is the union over the finitely many degrees $0\le m\le n$ of the corresponding pieces, and a finite union of finite sets is finite, so the statement holds. [step 3.1, step 1.2, algebra] ∎
