---
id: cex-the-shapovalov-form-is-not-positive-definite-in-general
kind: counterexample
title: "The Shapovalov form need not be positive on its real PBW span"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [ex-sl2-shapovalov-norm-product]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Mrudul Thatte, Category O: Verma's Thesis, §1.2"
      url: "https://member.ipmu.jp/henry.liu/seminars/s20-category-o/mrudul-notes.pdf"
---

## Statement refuted

For every real $\lambda$, the normalized Shapovalov form is positive definite on the real span of the PBW basis of $M(\lambda)$.

Take $\mathfrak{sl}_2$ and $\lambda=-1$.  On $M_{\mathbb R}:=\operatorname{span}_{\mathbb R}\{f^nv_{-1}:n\ge0\}$, the restricted bilinear form has $fv_{-1}\ne0$ but $S_{-1}(fv_{-1},fv_{-1})=-1$.

## Facts & Assumptions

**Given:** The norm product [[ex-sl2-shapovalov-norm-product]].

## Counterexample

**Proof technique:** direct.

1.1 At $n=1$ the product formula gives $S_{-1}(fv_{-1},fv_{-1})=1!(-1)=-1$. [given, algebra]

2.1 A positive-definite real bilinear form cannot take a negative value on a nonzero vector; hence this refutes positivity on the specified real PBW span, without asserting degeneracy or turning the complex-bilinear form into a Hermitian form. [given, contradiction] ∎
