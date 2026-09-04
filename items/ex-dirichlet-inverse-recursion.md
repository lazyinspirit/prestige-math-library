---
id: ex-dirichlet-inverse-recursion
kind: example
title: "Computing a Dirichlet inverse recursively"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-dirichlet-convolution-identity, thm-dirichlet-convolution-invertibility-criterion]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Shoup, A Computational Introduction to Number Theory and Algebra, Exercise 2.54"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Example

Let $\mathbf 1$ be the constant-one function. The inverse recursion from
[[thm-dirichlet-convolution-invertibility-criterion]] gives

$$ g(1)=1,\quad g(2)=-1,\quad g(3)=-1,\quad g(4)=0,\quad g(5)=-1,\quad g(6)=1. $$

## Facts & Assumptions

**Given:** The constant-one function $\mathbf 1$ and the recursion for its Dirichlet inverse $g$.

## Verification

**Proof technique:** direct.

1.1 Since $\mathbf 1(1)=1$, the inverse criterion gives $g(1)=1$. For $n>1$ the recursion is $g(n)=-\sum_{d\mid n,\ d<n} g(d)$. Therefore $g(2)=-g(1)=-1$, $g(3)=-g(1)=-1$, $g(4)=-(g(1)+g(2))=0$, $g(5)=-g(1)=-1$, and $g(6)=-(g(1)+g(2)+g(3))=1$. [given, algebra]

2.1 Using the displayed values, $(\mathbf 1*g)(1)=1$, $(\mathbf 1*g)(2)=1+(-1)=0$, $(\mathbf 1*g)(3)=1+(-1)=0$, $(\mathbf 1*g)(4)=1+(-1)+0=0$, $(\mathbf 1*g)(5)=1+(-1)=0$, and $(\mathbf 1*g)(6)=1+(-1)+(-1)+1=0$. So $(\mathbf 1*g)(n)=\varepsilon(n)$ for $1\le n\le6$, where $\varepsilon$ is the identity of [[def-dirichlet-convolution-identity]]. [step 1.1, algebra]

3.1 Dirichlet convolution is commutative, so the same finite check also gives $(g*\mathbf 1)(n)=\varepsilon(n)$ on this displayed range. [step 2.1] ∎
