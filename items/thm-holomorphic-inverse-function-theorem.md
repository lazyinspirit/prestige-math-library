---
id: thm-holomorphic-inverse-function-theorem
kind: theorem
title: "Holomorphic inverse function theorem and local-degree criterion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-locally-injective-holomorphic-map, def-biholomorphic-map, def-local-degree-holomorphic-map, thm-zero-order-factorization-holomorphic-function, lem-nonzero-derivative-gives-local-biholomorphism, cor-local-multiplicity-count-holomorphic-map, thm-chain-rule-for-complex-derivatives]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "$f'(a)\\ne0$ iff local degree one iff locally invertible"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "B. V. Shabat, Introduction to Complex Analysis, Theorem 1.10"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.6"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

For a nonconstant holomorphic map, nonzero derivative, local degree one, local injectivity, and local biholomorphy are equivalent.

Precisely, let $f$ be nonconstant and holomorphic on a complex domain $\Omega$, and let $a\in\Omega$. The following are equivalent:

1. $f'(a)\ne0$;
2. $\deg_a f=1$ ([[def-local-degree-holomorphic-map]]);
3. $f$ is locally injective at $a$ ([[def-locally-injective-holomorphic-map]]);
4. $f$ is biholomorphic between neighbourhoods of $a$ and $f(a)$ ([[def-biholomorphic-map]]).

For a local inverse $g$, one has
$$g'(w)=\frac1{f'(g(w))}$$
throughout its domain.

## Facts & Assumptions

**Given:** A nonconstant holomorphic function $f$ on a complex domain $\Omega$ and a point $a\in\Omega$. The complex chain rule applies to inverse identities ([[thm-chain-rule-for-complex-derivatives]]).

[L1] If $f$ is holomorphic near $a$ and $f'(a)\ne0$, then $f$ is biholomorphic between neighbourhoods of $a$ and $f(a)$ ([[lem-nonzero-derivative-gives-local-biholomorphism]]).

[L2] For every neighbourhood $N$ of $a$, there are a smaller open neighbourhood $V\subseteq N$ and a real $\rho>0$ such that every $w$ with $0<|w-f(a)|<\rho^m$, where $m=\deg_a f$, has exactly $m$ distinct preimages in $V$ ([[cor-local-multiplicity-count-holomorphic-map]]).

[L3] A holomorphic function has finite order $m$ at $a$ exactly when, on some neighbourhood of $a$, it is $(z-a)^m q(z)$ with $q$ holomorphic and $q(a)\ne0$ ([[thm-zero-order-factorization-holomorphic-function]]).

## Proof

**Proof technique:** direct.

1.1 For the equivalence between claims 1 and 2, [L3] gives $f(z)-f(a)=(z-a)^m q(z)$ with $m=\deg_a f$ and $q(a)\ne0$. If $m=1$, differentiation at $a$ gives $f'(a)=q(a)\ne0$; if $m>1$, it gives $f'(a)=0$. Thus $f'(a)\ne0$ exactly when $\deg_a f=1$. [L3, given, algebra]

1.2 For the implication from claim 1 to claim 4, [L1] directly makes $f$ biholomorphic between neighbourhoods of $a$ and $f(a)$. [L1, assume-hyp]

1.3 For the implication from claim 4 to claim 3, a biholomorphic restriction is bijective and hence injective on its source neighbourhood. [assume-hyp]

2.1 For the converse implication from claim 3 back to claim 2, suppose $f$ is injective on a neighbourhood $N$ of $a$. If $m=\deg_a f>1$, take $V\subseteq N$ and $\rho>0$ from [L2] and put $w:=f(a)+\rho^m/2$. Then $w$ has $m>1$ distinct preimages in $V$, contradicting injectivity on $N$. Since $m$ is positive, $m=1$, and step 1.1 then gives $f'(a)\ne0$. [L2, step 1.1, assume-hyp, choose]

3.1 For the derivative formula, let $g$ be the inverse supplied in step 1.2. Differentiating $g(f(z))=z$ gives $g'(f(z))f'(z)=1$, so, writing $w=f(z)$, one obtains $g'(w)=1/f'(g(w))$. [step 1.2, given, algebra] ∎
