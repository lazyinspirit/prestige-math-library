---
id: thm-dirichlet-convolution-preserves-multiplicativity
kind: theorem
title: "Dirichlet convolution preserves multiplicativity, and multiplicative inverses stay multiplicative"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-coprime, def-dirichlet-convolution, def-multiplicative-arithmetic-function, lem-finite-sum-reindexing-and-fubini, thm-dirichlet-convolution-invertibility-criterion, thm-fundamental-theorem-of-arithmetic, thm-strong-induction]
justified_by: []
aliases: []
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Theorem 2.37"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
    - title: "Karl-Dieter Crisman, Number Theory: In Context and Interactive, Propositions 23.4.10 and 23.4.11"
      url: "https://math.gordon.edu/ntic/ntic2020/section-gen-moebius.html"
pipeline_run: null
---

## Statement

If $f$ and $g$ are multiplicative arithmetic functions, then $f*g$ is
multiplicative. If $f$ is multiplicative and $h$ is its Dirichlet inverse, then
$h$ is multiplicative as well.

## Facts & Assumptions

**Given:** Multiplicative arithmetic functions $f,g$, and the Dirichlet inverse $h$ of $f$.

## Proof

**Proof technique:** induction.

1.1 Since $f(1)=g(1)=1$, one has $(f*g)(1)=f(1)g(1)=1$. Now let $m,n$ be coprime positive integers. By unique prime factorization from [[thm-fundamental-theorem-of-arithmetic]], every positive divisor of $mn$ is uniquely of the form $ab$ with $a\mid m$ and $b\mid n$. In particular, every such pair $a,b$ is coprime. [given, construct]

1.2 By [[thm-dirichlet-convolution-invertibility-criterion]], the inverse $h$ exists because $f(1)=1\ne0$, and $h(1)=1$. [given]

2.1 Using the divisor splitting from step 1.1 and the multiplicativity of $f$ and $g$ on coprime pairs, $(f*g)(mn)=\sum_{a\mid m,\ b\mid n} f(ab)g(mn/ab)=\sum_{a\mid m,\ b\mid n} f(a)f(b)g(m/a)g(n/b)=(\sum_{a\mid m} f(a)g(m/a))(\sum_{b\mid n} f(b)g(n/b))=(f*g)(m)(f*g)(n)$. Thus $f*g$ is multiplicative. [step 1.1, algebra]

2.2 To prove $h$ is multiplicative, fix coprime positive integers $m,n$ and argue by strong induction on $mn$. If $m=1$ or $n=1$, then step 1.2 gives $h(mn)=h(m)h(n)$ because $h(1)=1$. [base, step 1.2]

2.3 Now assume $m,n>1$ and that $h(uv)=h(u)h(v)$ for every coprime pair $u,v$ with $uv<mn$. Since $(f*h)(m)=\varepsilon(m)=0$ and $(f*h)(n)=\varepsilon(n)=0$, one has $0=\left(\sum_{a\mid m} f(m/a)h(a)\right)\left(\sum_{b\mid n} f(n/b)h(b)\right)=\sum_{a\mid m,\ b\mid n} f(mn/ab)h(a)h(b)$, where step 1.1 and multiplicativity of $f$ identify $f(m/a)f(n/b)$ with $f(mn/ab)$. For each pair $(a,b)\ne(m,n)$, step 1.1 gives $\gcd(a,b)=1$ and $ab<mn$, so the induction hypothesis yields $h(a)h(b)=h(ab)$. Reindexing the remaining pairs by $d=ab$ via step 1.1 therefore gives $0=h(m)h(n)+\sum_{\substack{d\mid mn\\d<mn}} f(mn/d)h(d)$. [step 1.1, step 1.2, ih, algebra]

3.1 The inverse recursion from [[thm-dirichlet-convolution-invertibility-criterion]] at $mn$ gives $0=h(mn)+\sum_{\substack{d\mid mn\\d<mn}} f(mn/d)h(d)$. Comparing this with step 2.3 shows $h(mn)=h(m)h(n)$. Since the induction was on an arbitrary coprime pair, [[thm-strong-induction]] yields multiplicativity of $h$. [step 2.3, discharge-induction] ∎
