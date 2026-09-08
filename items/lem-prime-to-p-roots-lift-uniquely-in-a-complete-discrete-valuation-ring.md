---
id: lem-prime-to-p-roots-lift-uniquely-in-a-complete-discrete-valuation-ring
kind: lemma
title: "Prime-to-p roots lift uniquely in a complete DVR"
status: draft
origin: pipeline
deps: [def-splitting-p-modular-system-for-a-finite-group, def-discrete-valuation-ring]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemmas 10.153.2 and 10.153.9"
      url: "https://stacks.math.columbia.edu/tag/04GE"
---

## Statement

Let $\mathcal O$ be a complete DVR with residue field $k$ of characteristic $p$, and $m\ge1$ with $p\nmid m$. Reduction is a group isomorphism $\mu_m(\mathcal O)\to\mu_m(k)$. Write $\widehat\lambda$ for its inverse. Lifts for different exponents agree whenever both are defined.

## Facts & Assumptions

**Given:** $\mathcal O,k,m$ as stated; completeness and separation are for the maximal-ideal topology.

[F1] The ring consists of elements of nonnegative discrete valuation ([[def-discrete-valuation-ring]]).

## Proof

1.1 Normalize the valuation by $v(\pi)=1$. An element is a unit exactly when its value is zero: if $v(x)=0$, then $v(x^{-1})=0$; if both $x,x^{-1}$ are integral, their nonnegative values sum to zero. Thus the maximal ideal is $(\pi)$. For $\lambda^m=1$ choose one representative $x_0$; it is a unit, as is $f^{\prime}(x_0)=mx_0^{m-1}$ for $f(X)=X^m-1$. [F1, given, algebra]

2.1 Define deterministically $x_{n+1}=x_n-f(x_n)/f^{\prime}(x_n)$. Taylor expansion $f(x+h)=f(x)+f^{\prime}(x)h+h^2R$ with $R\in\mathcal O$ shows $v(f(x_{n+1}))\ge2v(f(x_n))$. All $x_n$ retain residue $\lambda$, so every derivative is a unit. Starting with $v(f(x_0))\ge1$, we get $v(x_{n+1}-x_n)\ge2^n$ (a zero error stays zero). The sequence converges by completeness to $x\equiv\lambda$; continuity of the finite polynomial operations and separation give $f(x)=0$. This is the simple-root Newton construction used in the Stacks complete-local-ring lifting proof specialized to a DVR. [step 1.1, given, algebra]

2.2 If $x^m=y^m=1$ and $\bar x=\bar y=\lambda$, then $0=(x-y)\sum_{j=0}^{m-1}x^{m-1-j}y^j$. The sum has residue $m\lambda^{m-1}\ne0$, hence is a unit by step 1.1. Thus $x=y$, the Stacks simple-root uniqueness argument. [step 1.1, algebra]

3.1 Products and inverses of lifted roots are roots lifting the corresponding products and inverses. Uniqueness therefore gives $\widehat{\lambda\nu}=\widehat\lambda\widehat\nu$, $\widehat1=1$, and $\widehat{\lambda^{-1}}=(\widehat\lambda)^{-1}$. If two exponents occur, both lifts are roots for their least common multiple, still prime to $p$, so uniqueness there identifies them. When $m=1$ both groups are $\{1\}$. [step 2.1, step 2.2, algebra] ∎
