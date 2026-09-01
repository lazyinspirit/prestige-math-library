---
id: lem-prime-counting-chebyshev-partial-summation
kind: lemma
title: "Abel summation recovers the prime-counting function from theta"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-prime-counting-function,
       def-chebyshev-theta-function,
       lem-abel-summation-by-parts,
       thm-logarithm-derivative-and-integral,
       thm-natural-logarithm-laws]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Version 2"
      url: "https://shoup.net/ntb/ntb-v2.pdf"
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement

For every real $x\ge2$,

$$
\pi(x)=\frac{\theta(x)}{\log x}+\int_2^x\frac{\theta(t)}{t\log^2 t}\,dt.
$$

## Facts & Assumptions

**Given:** A real number $x\ge2$ and $N:=\lfloor x\rfloor$.

[L1] By definition, $$ \pi(N)=\sum_{\substack{2\le n\le N\\ n\text{ prime}}}1 $$ ([[def-prime-counting-function]]).

[L2] By definition, $$ \theta(N)=\sum_{\substack{2\le n\le N\\ n\text{ prime}}}\log n $$ ([[def-chebyshev-theta-function]]).

[L3] Abel summation by parts converts a finite sum $\sum a_kb_k$ into a boundary term plus a sum against the differences $b_{k+1}-b_k$ ([[lem-abel-summation-by-parts]]).

[L4] For $t>1$, $$ \frac{d}{dt}\frac1{\log t}=-\frac1{t\log^2 t}, $$ and $\log(xy)=\log x+\log y$ with $\log 1=0$ ([[thm-logarithm-derivative-and-integral]], [[thm-natural-logarithm-laws]]).

## Proof

**Proof technique:** direct.

1.1 Define a sequence by $a_n=\log n$ when $n$ is prime and $a_n=0$ otherwise, for $2\le n\le N$. Then [L2] shows that its partial sums satisfy $A_m:=\sum_{2\le n\le m}a_n=\theta(m)$ for every integer $m\in[2,N]$, while [L1] gives $ \sum_{2\le n\le N}\frac{a_n}{\log n}=\pi(N). $ [L1, L2, given, construct]

2.1 Apply [L3] to the finite sum in step 1.1 with $b_n=1/\log n$. This yields $ \pi(N)=\frac{\theta(N)}{\log N}-\sum_{n=2}^{N-1}\theta(n)\left(\frac1{\log(n+1)}-\frac1{\log n}\right). $ [L3, step 1.1]

3.1 For each integer $n$ with $2\le n\le N-1$, the function $f(t)=1/\log t$ has derivative given by [L4], so $ \frac1{\log(n+1)}-\frac1{\log n}=\int_n^{n+1}f'(t)\,dt =-\int_n^{n+1}\frac{dt}{t\log^2 t}. $ Since $\theta(t)=\theta(n)$ on $[n,n+1)$, step 2.1 becomes $ \pi(N)=\frac{\theta(N)}{\log N}+\int_2^N\frac{\theta(t)}{t\log^2 t}\,dt. $ [L4, step 2.1, algebra]

4.1 Because $N=\lfloor x\rfloor$, there are no integers in $(N,x]$. Hence $\pi(x)=\pi(N)$ and $\theta(t)=\theta(N)=\theta(x)$ for every $t \in [N,x]$. Using [L4], we compute $$ \int_N^x\frac{\theta(t)}{t\log^2 t}\,dt =\theta(x)\int_N^x\frac{dt}{t\log^2 t} =\theta(x)\left(\frac1{\log N}-\frac1{\log x}\right). $$ Adding this identity to step 3.1 gives $$ \pi(x)=\pi(N)=\frac{\theta(x)}{\log x}+\int_2^x\frac{\theta(t)}{t\log^2 t}\,dt. $$ [L4, step 3.1, given, algebra] ∎
