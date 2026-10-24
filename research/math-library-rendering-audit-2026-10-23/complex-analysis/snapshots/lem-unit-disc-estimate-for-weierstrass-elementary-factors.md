---
id: lem-unit-disc-estimate-for-weierstrass-elementary-factors
kind: lemma
title: "The unit-disc estimate for Weierstrass elementary factors"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-weierstrass-elementary-factor, thm-complex-exponential-is-entire-with-derivative-itself, thm-algebra-of-complex-derivatives, thm-chain-rule-for-complex-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 Infinite products"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 3 §3.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Statement

For every integer $p\ge0$ and every complex number $w$ with $|w|\le1$,

$$|1-E_p(w)|\le |w|^{p+1}.$$

In particular, there is a universal constant $C=1$ such that

$$|1-E_p(w)|\le C|w|^{p+1}\qquad(|w|\le1).$$

## Facts & Assumptions

**Given:** An integer $p\ge0$.

[F1] The elementary factor is $$E_p(w)=(1-w)\exp\!\left(w+\frac{w^2}{2}+\cdots+\frac{w^p}{p}\right)$$ ([[def-weierstrass-elementary-factor]]).

[F2] The complex exponential is entire ([[thm-complex-exponential-is-entire-with-derivative-itself]]).

[F3] Complex derivatives satisfy the linearity and product rules ([[thm-algebra-of-complex-derivatives]]).

[F4] Complex derivatives satisfy the chain rule ([[thm-chain-rule-for-complex-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Write $S_p(u)=u+u^2/2+\cdots+u^p/p$, with the empty sum $0$ when $p=0$. Using [F1], [F2], [F3], and [F4], differentiate $$E_p(u)=(1-u)e^{S_p(u)}$$ to obtain $$E_p'(u)=-e^{S_p(u)}+(1-u)e^{S_p(u)}(1+u+\cdots+u^{p-1})=-u^pe^{S_p(u)}.$$ [F1, F2, F3, F4, given, algebra]

2.1 Fix $w$ with $|w|\le1$. By step 1.1, $$\frac{d}{dt}E_p(tw)=wE_p'(tw)=-w^{p+1}t^pe^{S_p(tw)}\qquad(0\le t\le1).$$ Integrating from $0$ to $1$ and using $E_p(0)=1$ gives $$1-E_p(w)=w^{p+1}\int_0^1 t^pe^{S_p(tw)}\,dt.$$ [F1, step 1.1, algebra]

3.1 For $0\le t\le1$ and $1\le k\le p$, one has $$\operatorname{Re}\!\left(\frac{(tw)^k}{k}\right)\le\frac{|tw|^k}{k}\le\frac{t^k}{k},$$ so $$|e^{S_p(tw)}|=e^{\operatorname{Re}S_p(tw)}\le e^{S_p(t)}.$$ Taking absolute values in step 2.1 therefore yields $$|1-E_p(w)|\le|w|^{p+1}\int_0^1 t^pe^{S_p(t)}\,dt.$$ [step 2.1, algebra]

4.1 For real $t\in[0,1]$, step 1.1 gives $$\frac{d}{dt}E_p(t)=-t^pe^{S_p(t)}.$$ Hence $$\int_0^1 t^pe^{S_p(t)}\,dt=E_p(0)-E_p(1)=1,$$ because $E_p(0)=1$ and $E_p(1)=0$ by [F1]. Substituting this into step 3.1 proves $$|1-E_p(w)|\le|w|^{p+1},$$ and the displayed bound with $C=1$ follows. [F1, step 1.1, step 3.1, algebra] ∎
