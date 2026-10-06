---
id: lem-dyadic-level-set-summability-estimate
kind: lemma
title: "A dyadic summability estimate for decreasing level-set sequences"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [thm-holder-inequality-for-integrals]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Eleonora Di Nezza, Giampiero Palatucci and Enrico Valdinoci, Hitchhiker's guide to the fractional Sobolev spaces (arXiv:1104.4345, survey)"
      url: "https://arxiv.org/pdf/1104.4345"
      locator: "Lemma 6.2 and its proof, printed pp. 40-41"
---

## Statement

Let $d\ge1$, $0<\theta<1$, $1\le p<\infty$ with $p\theta<d$ and $T>1$. Let
$(a_k)_{k\in\mathbb Z}$ be a bounded nonnegative nonincreasing sequence of
real numbers with $a_k=0$ for all sufficiently large $k$. Then
$$\sum_{k\in\mathbb Z}a_k^{(d-p\theta)/d}\,T^{k}\ \le\ C(d,p,\theta,T) \sum_{k\in\mathbb Z:\,a_k\ne0}a_{k+1}\,a_k^{-p\theta/d}\,T^{k}.$$
The constant is explicit: $C=T^{d/(d-p\theta)}$. The argument uses no choice
principle; all sums are series of nonnegative terms.

## Facts & Assumptions

**Given:** integers $d\ge1$ and $k\in\mathbb Z$ indices, numbers $0<\theta<1$, $1\le p<\infty$ with $p\theta<d$, a real $T>1$, and a bounded nonnegative nonincreasing sequence $(a_k)_{k\in\mathbb Z}$ with $a_k=0$ for all sufficiently large $k$. Put $t:=p\theta/d\in(0,1)$, $\alpha:=1/t>1$ and $\beta:=1/(1-t)>1$, so that $1/\alpha+1/\beta=1$.

[F1] *Hölder's inequality.* On a measure space $(X,\mathcal A,\mu)$, for conjugate exponents $\alpha,\beta\in(1,\infty)$ and nonnegative measurable $f,g$ with finite respective norms, $\int fg\,d\mu\le\bigl(\int f^{\alpha}d\mu\bigr)^{1/\alpha} \bigl(\int g^{\beta}d\mu\bigr)^{1/\beta}$, which is the finite-norm form used below. Step 1.1 establishes the required finite sums before the application. ([[thm-holder-inequality-for-integrals]])

## Proof

**Proof technique:** Shift the index, factor each term of the shifted sum into a product whose two factors have the two critical exponents, apply Hölder's inequality on the counting measure, and solve the resulting inequality for the unknown sum.

1.1 Since $a_k=0$ for all $k\ge N$ and $(a_k)$ is bounded by some $M\ge0$, the sum $A:=\sum_{k\in\mathbb Z}a_k^{(d-p\theta)/d}T^k$ satisfies $A\le M^{(d-p\theta)/d}\sum_{k<N}T^k<\infty$, and the sum $B:=\sum_{k:\,a_k\ne0}a_{k+1}a_k^{-p\theta/d}T^k$ satisfies $0\le B\le\sum_{k:\,a_k\ne0}a_k^{(d-p\theta)/d}T^k=A<\infty$ because $a_{k+1}\le a_k$ with $a_k>0$ implies $a_{k+1}a_k^{-p\theta/d}\le a_k^{1-p\theta/d}=a_k^{(d-p\theta)/d}$. Also $a_k=0$ implies $a_{k+1}\le a_k=0$, so $a_{k+1}=0$. [given, algebra]

2.1 Shifting the index in step 1.1 and dropping exactly the vanishing terms, $\frac1T A=\sum_{k\in\mathbb Z}a_{k+1}^{(d-p\theta)/d}T^k=\sum_{k:\,a_k\ne0}a_{k+1}^{(d-p\theta)/d}T^k$. For each $k$ with $a_k\ne0$ the factorization $a_{k+1}^{1-t}T^k=\bigl(a_k^{t/\beta}T^{k/\alpha}\bigr)\bigl(a_{k+1}^{1/\beta}a_k^{-t/\beta}T^{k/\beta}\bigr)$ holds, because $t/\beta-t/\beta=0$, $1/\beta=1-t$ and $1/\alpha+1/\beta=1$. Applying [F1] with the counting measure on the set $\{k:a_k\ne0\}$ to these two factors gives $\frac1T A\le\bigl(\sum_{k}a_k^{1-t}T^k\bigr)^{t}\bigl(\sum_{k:a_k\ne0}a_{k+1}a_k^{-t}T^k\bigr)^{1-t}=A^{t}B^{1-t}$, since raising the first factor-sum to the power $\alpha=1/t$ returns $\sum_k a_k^{1-t}T^k$ and raising the second to $\beta=1/(1-t)$ returns $B$. [F1, step 1.1, algebra]

3.1 If $A=0$ then every $a_k=0$ and both sides of the asserted inequality are $0$. Otherwise $0<A<\infty$ by step 1.1, so dividing step 2.1 by $TA^{t}$ gives $(1/T)A^{1-t}\le B^{1-t}$, hence $B^{1-t}\ge(1/T)A^{1-t}>0$ and therefore $A\le T^{1/(1-t)}B$. Substituting $t=p\theta/d$ gives $1/(1-t)=d/(d-p\theta)$ and $A\le T^{d/(d-p\theta)}B$, which is the assertion with $C=T^{d/(d-p\theta)}$. No choice principle is used: both series are sums of nonnegative real terms over a countable index set, evaluated as suprema of finite partial sums. [step 1.1, step 2.1, algebra] ∎ 