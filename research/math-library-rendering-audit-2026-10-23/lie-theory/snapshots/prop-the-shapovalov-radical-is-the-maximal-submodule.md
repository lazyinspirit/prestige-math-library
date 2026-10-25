---
id: prop-the-shapovalov-radical-is-the-maximal-submodule
kind: proposition
title: "The Shapovalov radical is the maximal submodule"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-existence-and-uniqueness-of-the-shapovalov-form, thm-verma-module-has-a-unique-simple-quotient]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Mrudul Thatte, Category O: Verma's Thesis, Proposition 1.2(b)"
      url: "https://member.ipmu.jp/henry.liu/seminars/s20-category-o/mrudul-notes.pdf"
---

## Statement

The radical of $S_\lambda$ is $J(\lambda)$, the unique maximal submodule.
Thus $S_\lambda$ descends to a nondegenerate form on $L(\lambda)$.

## Facts & Assumptions

**Given:** Contravariance of [[thm-existence-and-uniqueness-of-the-shapovalov-form]] and the maximal submodule from [[thm-verma-module-has-a-unique-simple-quotient]].

## Proof

**Proof technique:** direct.

1.1 Contravariance makes $R:=\operatorname{rad}S_\lambda$ a submodule.  It is proper because $S_\lambda(v_\lambda,v_\lambda)=1$, hence $R\subseteq J(\lambda)$. [given, algebra]

1.2 Let $N$ be proper.  Its stability under $\mathfrak h$ lets one project every finite weight decomposition into $N$, so $N$ is the sum of its weight intersections; its $\lambda$-intersection is $0$.  If $w\in N$ has weight different from $\lambda$, choose $h$ separating the weights and move $h$ across the form to get $S_\lambda(v_\lambda,w)=0$, hence $S_\lambda(v_\lambda,N)=0$. [given, algebra]

1.3 For $u\in U(\mathfrak g)$, $τ(u)N\subseteq N$, so contravariance gives $S_\lambda(uv_\lambda,N)=S_\lambda(v_\lambda,\tau(u)N)=0$.  The cyclicity of $v_\lambda$ therefore gives $N\subseteq R$.  In particular $J(\lambda)\subseteq R$. [given, algebra]

2.1 Hence $R=J(\lambda)$.  Quotienting a bilinear form by its radical is well defined and nondegenerate, which yields the stated form on $L(\lambda)$. [given, algebra] ∎
