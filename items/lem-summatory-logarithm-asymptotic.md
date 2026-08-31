---
id: lem-summatory-logarithm-asymptotic
kind: lemma
title: "The summatory logarithm is x log x minus x plus O(log x)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-natural-logarithm,
       thm-logarithm-derivative-and-integral,
       thm-monotonicity-of-the-integral,
       thm-additivity-over-subintervals,
       thm-algebra-of-derivatives,
       thm-ftc-second-part]
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
\sum_{n\le x}\log n=x\log x-x+O(\log x).
$$

## Facts & Assumptions

**Given:** A real $x\ge1$ and $N:=\lfloor x\rfloor$.

## Proof

**Proof technique:** direct.

1.1 The function $\log$ of [[def-natural-logarithm]] is increasing on $(0,\infty)$ by [[thm-logarithm-derivative-and-integral]], so monotonicity of the integral gives $$\int_1^{N}\log t\,dt\le\sum_{n=1}^{N}\log n\le\int_1^{N+1}\log t\,dt.$$ [given, algebra]

2.1 By [[thm-algebra-of-derivatives]] and [[thm-logarithm-derivative-and-integral]], the function $G(t):=t\log t-t$ satisfies $$ G'(t)=\log t+t\cdot\frac1t-1=\log t $$ for every $t>0$. Therefore [[thm-ftc-second-part]] yields $$ \int_1^{Y}\log t\,dt=Y\log Y-Y+1 $$ for every $Y\ge1$. Applying this with $Y=N$ and $Y=N+1$ in step 1.1 gives $$ \sum_{n=1}^{N}\log n=N\log N-N+O(\log N). $$ [step 1.1, given, algebra]

3.1 Since $N\le x<N+1$, one has $N=x+O(1)$ and therefore $N\log N=x\log x+O(\log x)$. Substituting this into step 2.1 and using $\sum_{n\le x}\log n=\sum_{n=1}^{N}\log n$ proves $$\sum_{n\le x}\log n=x\log x-x+O(\log x).$$ [step 2.1, given, algebra] ∎
