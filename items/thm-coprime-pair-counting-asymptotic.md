---
id: thm-coprime-pair-counting-asymptotic
kind: theorem
title: "Ordered coprime pairs in a box have asymptotic density 6 over pi squared"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-coprime,
       thm-euler-totient-summatory-estimate]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive"
      url: "https://math.gordon.edu/ntic/nticoneside.pdf"
pipeline_run: null
---

## Statement

Let $C(x)$ be the number of ordered pairs $(a,b)$ of positive integers with
$a,b\le x$ and $\gcd(a,b)=1$ ([[def-coprime]]). Then

$$
C(x)=\frac{6}{\pi^2}x^2+O(x\log x)
$$

for real $x\ge1$.

## Facts & Assumptions

**Given:** A real $x\ge1$ and $N:=\lfloor x\rfloor$.

## Proof

**Proof technique:** direct.

1.1 Since $a,b\le x$ is equivalent to $a,b\le N$, the count is unchanged if $x$ is replaced by $N$. For $m=1$ there is exactly one coprime pair with $\max(a,b)=1$, namely $(1,1)$. For $m\ge2$, the coprime pairs with $\max(a,b)=m$ are exactly $(m,b)$ with $1\le b\le m$ and $\gcd(m,b)=1$, together with $(a,m)$ with $1\le a\le m$ and $\gcd(a,m)=1$; these two families are disjoint because $(m,m)$ is not coprime. Hence $$C(x)=1+2\sum_{m=2}^{N}\varphi(m)=2\sum_{m=1}^{N}\varphi(m)-1.$$ [given, algebra]

2.1 Applying [[thm-euler-totient-summatory-estimate]] at $x=N$ gives $$C(x)=\frac{6}{\pi^2}N^2+O(N\log N).$$ Since $N=x+O(1)$, this is $$C(x)=\frac{6}{\pi^2}x^2+O(x\log x).$$ [step 1.1, given, algebra] ∎
