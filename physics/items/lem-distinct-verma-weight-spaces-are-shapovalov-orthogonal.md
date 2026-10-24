---
id: lem-distinct-verma-weight-spaces-are-shapovalov-orthogonal
kind: lemma
title: "Distinct Verma weight spaces are Shapovalov-orthogonal"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-chevalley-contravariant-form, thm-existence-and-uniqueness-of-the-shapovalov-form]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Mrudul Thatte, Category O: Verma's Thesis, Proposition 1.2(a)"
      url: "https://member.ipmu.jp/henry.liu/seminars/s20-category-o/mrudul-notes.pdf"
---

## Statement

If $u$ and $v$ have distinct $\mathfrak h$-weights, then
$S_\lambda(u,v)=0$.

## Facts & Assumptions

**Given:** The Shapovalov form and $\tau(h)=h$ from [[def-chevalley-contravariant-form]].

## Proof

**Proof technique:** direct.

1.1 Choose $h\in\mathfrak h$ separating the two weights $\mu\ne\nu$.  Contravariance gives $\mu(h)S_\lambda(u,v)=S_\lambda(hu,v)=S_\lambda(u,hv)=\nu(h)S_\lambda(u,v)$. [given, algebra]

2.1 Since $\mu(h)-\nu(h)\ne0$, the displayed equality forces $S_\lambda(u,v)=0$. [given, algebra] ∎
