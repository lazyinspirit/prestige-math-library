---
id: ex-sl2-shapovalov-norm-product
kind: example
title: "The sl2 Shapovalov norm product"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-existence-and-uniqueness-of-the-shapovalov-form, ex-sl2-verma-action-in-the-pbw-basis]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Mrudul Thatte, Category O: Verma's Thesis, §1.2"
      url: "https://member.ipmu.jp/henry.liu/seminars/s20-category-o/mrudul-notes.pdf"
---

## Example

For the normalized form on the $\mathfrak{sl}_2$ Verma module,

$$S_\lambda(f^nv_\lambda,f^nv_\lambda)=n!\prod_{j=0}^{n-1}(\lambda-j)\qquad(n\ge0),$$

where the empty product is $1$.

## Facts & Assumptions

**Given:** Contravariance from [[thm-existence-and-uniqueness-of-the-shapovalov-form]] and the $e$-action in [[ex-sl2-verma-action-in-the-pbw-basis]].

## Verification

**Proof technique:** direct.

1.1 For $n=0$ the formula is the normalization. For $n>0$, contravariance gives $S(f^nv,f^nv)=S(f^{n-1}v,ef^nv)=n(\lambda-n+1)S(f^{n-1}v,f^{n-1}v)$. [given, algebra]

2.1 Iterating that recurrence from $0$ to $n$ gives exactly the displayed factorial product, including its empty-product boundary. [given, algebra] ∎
