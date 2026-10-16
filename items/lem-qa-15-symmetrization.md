---
id: lem-qa-15-symmetrization
kind: lemma
title: "Symmetrizing a Boolean-cube polynomial gives a Hamming-weight polynomial"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-15-acceptance-polynomial
  - lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction
  - def-monomials-multidegree-and-total-degree
  - thm-reals-ordered-field
  - lem-of-triangle-inequality
justified_by: []
proof_strategy: direct
axiom_use: "No choice; the permutation group and all coefficient averages are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025), §21.4"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes (arXiv:1907.09415), §11.2"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $D\subseteq\{0,1\}^N$ be invariant under coordinate permutations and let $f:D\to\{0,1\}$ satisfy $f(\pi x)=f(x)$ for every permutation $\pi$ and $x\in D$. If a real polynomial $p$ of total degree at most $d$ is an $\epsilon$-approximant to $f$ on $D$, then there is a univariate real polynomial $q(t)$ of degree at most $d$ such that $q(|x|)$ is also an $\epsilon$-approximant on $D$, where $|x|:=\sum_{i<N}x_i$ is Hamming weight.

## Facts & Assumptions

**Given:** A finite Boolean cube of dimension $N$, a permutation-invariant domain $D$, a permutation-invariant function $f$, and a total-degree-at-most-$d$ approximant $p$.

[F1] [[def-qa-15-acceptance-polynomial]]: an $\epsilon$-approximant satisfies $|p(x)-f(x)|\le\epsilon$ on each point of $D$.

[F2] [[lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction]]: the multilinear reduction agrees with $p$ on the Boolean cube and does not increase total degree.

[F3] [[def-monomials-multidegree-and-total-degree]]: a multilinear polynomial is a finite sum of squarefree monomials, and a monomial indexed by $S\subseteq\{0,\ldots,N-1\}$ has degree $|S|$.

[F4] [[thm-reals-ordered-field]]: finite sums and averages use the ordered field structure of $\mathbb R$, including division by the positive integer $N!$ and by $\binom Ns$ for $s\le N$.

[F5] [[lem-of-triangle-inequality]]: absolute value is subadditive on $\mathbb R$.

## Proof


1.1 Replace $p$ by its multilinear reduction $\widetilde p$ from [F2]. It agrees at every Boolean point and has no monomial of degree greater than $d$. Write $\widetilde p(X)=\sum_{S\subseteq[N],\,|S|\le d}c_S X_S$, where $X_S:=\prod_{i\in S}X_i$ and $X_\varnothing=1$. [given, F2, F3, construct]

2.1 Define $\bar p(x):=\frac1{N!}\sum_{\pi\in S_N}\widetilde p(x_{\pi(0)},\ldots,x_{\pi(N-1)})$. For $x\in D$, each permuted point is in $D$ and has $f(\pi x)=f(x)$, so [F1] gives $|\widetilde p(\pi x)-f(x)|\le\epsilon$ for every $\pi$. Repeated [F5] and division by the positive average factor from [F4] give $|\bar p(x)-f(x)|\le\frac1{N!}\sum_{\pi\in S_N}|\widetilde p(\pi x)-f(x)|\le\epsilon$. [given, F1, F4, F5, step 1.1, algebra]

2.2 Fix a set $S$ of size $s$. Under the average over $S_N$, each subset $R$ of size $s$ occurs as the permuted image of $S$ exactly $s!(N-s)!$ times. Hence the average of $X_S$ is $\binom Ns^{-1}\sum_{|R|=s}X_R$, a polynomial of degree at most $s$. Summing with coefficients $c_S$ shows that $\bar p$ has degree at most $d$ and is invariant under all coordinate permutations. [step 1.1, F4, algebra]

3.1 If $x$ has Hamming weight $t$, exactly $\binom ts$ of the squarefree monomials $x_R$ with $|R|=s$ equal $1$ (their index sets must lie inside the $t$ coordinates equal to $1$); all others equal $0$. Therefore the average of each degree-$s$ monomial at $x$ is $\binom ts/\binom Ns=(t)_s/(N)_s$, where $(t)_s=t(t-1)\cdots(t-s+1)$ and $(t)_0=1$. The denominator $(N)_s$ is nonzero for $s\le N$ by [F4]. Thus $\bar p(x)=q(|x|)$ for the univariate polynomial $q(t)=\sum_S c_S(t)_{|S|}/(N)_{|S|}$, with the $s=0$ term interpreted as $1$. Each summand has degree $|S|\le d$, so $\deg q\le d$. By step 2.1 it retains the approximation bound on $D$. [step 2.1, step 2.2, F4, algebra] ∎
