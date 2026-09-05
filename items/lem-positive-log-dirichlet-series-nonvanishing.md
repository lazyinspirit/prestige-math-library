---
id: lem-positive-log-dirichlet-series-nonvanishing
kind: lemma
title: "Positive logarithmic Dirichlet series force boundary nonvanishing"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-landau-dirichlet-series]
justified_by: []
proof_strategy: contradiction
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Lemma 3.6"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
    - title: "Leonard Tomczak, Analytic Number Theory, Chapter 4"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
---

## Statement

Let $F$ be holomorphic on $\operatorname{Re}s>1$ and suppose that for
$\sigma>1$,

$$\log F(\sigma+it)=\sum_{n\ge2} b_n n^{-\sigma-it}$$

with $b_n\ge0$, the series converging absolutely. Assume moreover that $F$ is
meromorphic on a neighbourhood of the closed half-plane $\operatorname{Re}s\ge1$,
has at most a simple pole at $s=1$, and has no other pole there. Then $F$ has no zero on
$\operatorname{Re}s=1$.

## Facts & Assumptions

**Given:** A function $F$ with the stated properties.

[L1] A Dirichlet series with nonnegative coefficients and finite abscissa of
convergence is singular at its abscissa of convergence
([[thm-landau-dirichlet-series]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose first that $F(1+it_0)=0$ for some real $t_0\ne0$. For $\sigma>1$, absolute convergence gives $\log |F(\sigma+iu)|=\sum_{n\ge2} b_n n^{-\sigma}\cos(u\log n)$, so $\log\!\left(|F(\sigma)|^3|F(\sigma+it_0)|^4|F(\sigma+2it_0)|\right)=\sum_{n\ge2}b_n n^{-\sigma}(3+4\cos\theta_n+\cos(2\theta_n))$ with $\theta_n=t_0\log n$. Since $3+4\cos\theta+\cos(2\theta)=2(1+\cos\theta)^2\ge0$, the product on the left is at least $1$. [given, assume-contra, algebra]

2.1 Because $F$ is meromorphic with at most a simple pole at $1$, the factor $F(\sigma)$ grows like $O((\sigma-1)^{-1})$ as $\sigma\downarrow1$, while $F(\sigma+2it_0)$ stays bounded and the zero at $1+it_0$ forces $F(\sigma+it_0)=O(\sigma-1)$. Therefore the product from step 1.1 is $O(\sigma-1)\to0$, contradicting the lower bound $1$. The Landau statement [L1] concerns singularity of the logarithmic series at its own abscissa, so it does not by itself exclude a zero of $F$ at $1$. Instead, if $F(1)=0$, then $F$ is holomorphic at $1$ and $F(\sigma)\to0$ as $\sigma\downarrow1$, whereas the assumed logarithmic identity at $t=0$ gives $\log|F(\sigma)|=\sum_{n\ge2}b_n n^{-\sigma}\ge0$ and hence $|F(\sigma)|\ge1$ for every $\sigma>1$. This is another contradiction. Thus no zero occurs on the line $\operatorname{Re}s=1$. [step 1.1, L1, given, discharge-contradiction] ∎
