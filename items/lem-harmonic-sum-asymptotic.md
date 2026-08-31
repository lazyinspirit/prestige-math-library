---
id: lem-harmonic-sum-asymptotic
kind: lemma
title: "The harmonic sum is log x plus gamma plus O(1/x)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-euler-mascheroni-constant,
       thm-logarithm-derivative-and-integral,
       thm-monotonicity-of-the-integral,
       thm-additivity-over-subintervals,
       thm-monotone-convergence]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Tom Sanders, Topics in Analytic Number Theory, Chapter 1"
      url: "https://people.maths.ox.ac.uk/~sanders/tant/notes.pdf"
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement

For every real $x\ge1$,

$$
\sum_{n\le x}\frac1n=\log x+\gamma+O(1/x).
$$

## Facts & Assumptions

**Given:** A real $x\ge1$ and an integer $N\ge1$.

## Proof

**Proof technique:** direct.

1.1 Since $t\mapsto1/t$ is decreasing on $[1,\infty)$ by [[thm-logarithm-derivative-and-integral]], monotonicity of the integral and additivity over subintervals give $$ \int_n^{n+1}\frac{dt}{t}\le\frac1n\quad\text{for every integer }n\ge1, $$ and $$ \frac1n\le\int_{n-1}^{n}\frac{dt}{t}\quad\text{for every integer }n\ge2. $$ [given, algebra]

2.1 Put $E_N:=\sum_{n=1}^{N}1/n-\log(N+1)$. Summing the first inequality of step 1.1 from $n=1$ to $N$ gives $E_N\ge0$, and the same inequality at $n=N+1$ gives $$ E_{N+1}-E_N=\frac1{N+1}-\int_{N+1}^{N+2}\frac{dt}{t}\ge0. $$ Also summing the second inequality of step 1.1 from $n=2$ to $N$ gives $$ \sum_{n=1}^{N}\frac1n\le1+\log N<1+\log(N+1), $$ so $0\le E_N<1$. Thus $(E_N)$ is increasing and bounded, hence convergent by [[thm-monotone-convergence]]. [step 1.1, given, algebra]

3.1 Let $L:=\lim_NE_N$. Since $$\sum_{n=1}^{N}\frac1n-\log N=E_N+\log\!\left(1+\frac1N\right),$$ and $0\le\log(1+1/N)\le1/N$ by step 1.1, the sequence in [[def-euler-mascheroni-constant]] has the same limit $L$. Therefore $L=\gamma$, and $$0\le\sum_{n=1}^{N}\frac1n-\log N-\gamma\le\frac1N.$$ [step 1.1, step 2.1, given, algebra]

4.1 For the given real $x$, let $N:=\lfloor x\rfloor$. Then $N\le x<N+1$, so $0\le\log x-\log N=\log(x/N)\le\log(1+1/N)\le1/N$. Combining this with step 3.1 yields $$\sum_{n\le x}\frac1n=\sum_{n=1}^{N}\frac1n=\log x+\gamma+O(1/N)=\log x+\gamma+O(1/x),$$ because $N\ge x/2$ for every $x\ge1$. [step 3.1, given, algebra] ∎
