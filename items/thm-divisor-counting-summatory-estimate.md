---
id: thm-divisor-counting-summatory-estimate
kind: theorem
title: "The summatory divisor-counting function is x log x plus (2 gamma - 1)x plus O(sqrt x)"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-harmonic-sum-asymptotic,
       thm-dirichlet-hyperbola-method,
       prop-divisor-functions-under-dirichlet-convolution]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
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
\sum_{n\le x}\tau(n)=x\log x+(2\gamma-1)x+O(\sqrt x).
$$

## Facts & Assumptions

**Given:** A real $x\ge1$ and $N:=\lfloor\sqrt x\rfloor$.

## Proof

**Proof technique:** direct.

1.1 By [[prop-divisor-functions-under-dirichlet-convolution]], $\tau=\mathbf1*\mathbf1$. Applying [[thm-dirichlet-hyperbola-method]] with $f=g=\mathbf1$ and $U=V=\sqrt x$ gives $$\sum_{n\le x}\tau(n)=2\sum_{a\le\sqrt x}\left\lfloor\frac xa\right\rfloor-\lfloor\sqrt x\rfloor^2=2\sum_{a=1}^{N}\left\lfloor\frac xa\right\rfloor-N^2.$$ [given, algebra]

2.1 Since $\lfloor x/a\rfloor=x/a+O(1)$ uniformly in $a$, summing over $1\le a\le N$ yields $$\sum_{a=1}^{N}\left\lfloor\frac xa\right\rfloor=x\sum_{a=1}^{N}\frac1a+O(N).$$ [step 1.1, given, algebra]

3.1 By [[lem-harmonic-sum-asymptotic]], $\sum_{a=1}^{N}1/a=\log N+\gamma+O(1/N)$. Also $N^2\le x<(N+1)^2$, so $x=N^2+O(N)$ and $\log N=\frac12\log x+O(1/N)$. Substituting these into step 2.1 gives $$2\sum_{a=1}^{N}\left\lfloor\frac xa\right\rfloor=x\log x+2\gamma x+O(\sqrt x).$$ [step 2.1, given, algebra]

4.1 Since $N^2=x+O(\sqrt x)$, combining step 3.1 with step 1.1 yields $$\sum_{n\le x}\tau(n)=x\log x+(2\gamma-1)x+O(\sqrt x).$$ [step 1.1, step 3.1, given, algebra] ∎
