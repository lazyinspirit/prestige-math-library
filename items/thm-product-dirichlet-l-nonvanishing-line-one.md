---
id: thm-product-dirichlet-l-nonvanishing-line-one
kind: theorem
title: "The full product of Dirichlet L-functions has no zero on Re s = 1"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-dirichlet-character-orthogonality, thm-dirichlet-l-euler-product, thm-principal-dirichlet-l-factorization, thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane, lem-positive-log-dirichlet-series-nonvanishing]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Theorem 3.7"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
    - title: "Leonard Tomczak, Analytic Number Theory, Chapter 4"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let

$$F_q(s):=\prod_{\chi\bmod q}L(s,\chi).$$

Then $F_q$ has no zero on the line $\operatorname{Re}s=1$. Moreover, $F_q$ is
meromorphic on a neighbourhood of the closed half-plane
$\operatorname{Re}s\ge1$, and any singularity at $s=1$ is at most a simple
pole.

## Facts & Assumptions

**Given:** A modulus $q\ge1$ and the product $F_q(s)=\prod_{\chi\bmod q}L(s,\chi)$.

[L1] For unit classes, the character sum $\sum_\chi \chi(u)$ is $\varphi(q)$ when $u=1$ and $0$ otherwise ([[thm-dirichlet-character-orthogonality]]).

[L2] Each $L(s,\chi)$ has its Euler product on $\operatorname{Re}s>1$ ([[thm-dirichlet-l-euler-product]]).

[L3] The principal factor has one simple pole at $1$ ([[thm-principal-dirichlet-l-factorization]]).

[L4] Every nonprincipal factor is holomorphic on $\operatorname{Re}s>0$ ([[thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane]]).

[L5] An Euler product whose logarithmic Dirichlet coefficients are nonnegative cannot vanish on $\operatorname{Re}s=1$ if it has at most a simple pole at $1$ ([[lem-positive-log-dirichlet-series-nonvanishing]]).

## Proof

**Proof technique:** direct.

1.1 For $\operatorname{Re}s>1$, [L2] gives $\log F_q(s)=\sum_{\chi\bmod q}\sum_{p,m\ge1}\chi(p)^m/(m p^{ms})=\sum_{p,m\ge1}(m p^{ms})^{-1}\sum_{\chi\bmod q}\chi(p^m)$. If $p\mid q$, then every term is $0$. If $p\nmid q$, then [L1] applied to the unit class of $p^m$ shows that the inner character sum is $\varphi(q)$ when $p^m\equiv1\pmod q$ and $0$ otherwise. Hence the logarithmic coefficients of $F_q$ are nonnegative. [L1, L2, given, algebra]

2.1 By [L3] and [L4], the product $F_q$ is meromorphic on a neighbourhood of $\operatorname{Re}s\ge1$, with at most a simple pole at $1$ and no other singularities on the boundary line. Step 1.1 therefore places $F_q$ under [L5], so $F_q$ has no zero on $\operatorname{Re}s=1$. This proves both the nonvanishing claim and the stated meromorphic control at $s=1$. [step 1.1, L3, L4, L5, algebra] ∎
