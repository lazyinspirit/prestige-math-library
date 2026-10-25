---
id: "def-pairwise-independent-hash-family-interface"
kind: "definition"
title: "Pairwise independent hash family interface"
status: published
origin: "pipeline"
deps: ["def-field", "def-independence-of-finite-random-variables"]
justified_by: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  scraped: []
  references:
    - title: "Aspnes pairwise-independence/hash-family treatment, complete locator/reading pending; explicit local affine proof"
      url: https://cs.yale.edu/homes/aspnes/classes/469/notes.pdf
proof_strategy: "direct"
---

## Definition

Let D,R be finite sets with R nonempty and let K be a finite nonempty set of seeds, each having probability $1/|K|$. A family $(h_k:D\to R)_{k\in K}$ is **pairwise independent** if, for every $x\in D$ and $u\in R$,
$$\frac{|\{k:h_k(x)=u\}|}{|K|}=\frac1{|R|},$$
and, for distinct $x,y\in D$ and all $u,v\in R$,
$$\frac{|\{k:h_k(x)=u,\ h_k(y)=v\}|}{|K|}=\frac1{|R|^2}.$$
This is the finite joint-probability factorization of [[def-independence-of-finite-random-variables]], stated by counts so R need not be a subset of the reals. Distinct seeds may encode the same function. For $|D|\le1$ the pair condition is vacuous, but the marginal requirement remains. Collision-probability bounds alone are not this definition.

For any finite field F, the seeds $(a,b)\in F^2$ and maps $h_{a,b}(x)=ax+b$ form such a family on $D=R=F$. Zero slopes are included.

## Facts & Assumptions

**Given:** A finite field F; all ordered seed pairs are equally likely.

[F1] A field has distinct zero and one, distributive operations and multiplicative inverses of nonzero elements ([[def-field]]).

## Verification

1.1 Fix x and a desired u. For each $a\in F$, the equation $ax+b=u$ has the unique solution $b=u-ax$ by additive cancellation. Hence exactly $|F|$ of $|F|^2$ seeds give u, proving marginal probability $1/|F|$. In particular the seed with a=0 is necessary to this full family and is permitted. F is nonempty, indeed has at least two elements by F1. [F1, given]

2.1 For distinct x,y and prescribed u,v, subtraction gives $a(x-y)=u-v$. The nonzero $x-y$ has an inverse, so necessarily $a=(u-v)(x-y)^{-1}$ and $b=u-ax$. These values work: $ay+b=u-a(x-y)=v$. They are unique by multiplication by the inverse and additive cancellation; uniqueness of an inverse itself follows from $c=c((x-y)d)=(c(x-y))d=d$ when c,d are both inverses. Exactly one seed therefore realizes each ordered output pair, with probability $1/|F|^2$, equal to the product of the marginals from step 1.1. This proves pairwise independence. Equal x,y are intentionally excluded: their values cannot be independently prescribed. [step 1.1, F1] ∎
