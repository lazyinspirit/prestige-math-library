---
id: def-chevalley-contravariant-form
kind: definition
title: "Chevalley-contravariant forms"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-triangular-decomposition-from-a-chosen-positive-root-system, def-highest-weight-vector-and-cyclic-highest-weight-module]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Mrudul Thatte, Category O: Verma's Thesis, Definition 1.1"
      url: "https://member.ipmu.jp/henry.liu/seminars/s20-category-o/mrudul-notes.pdf"
---

## Definition

Fix simple roots $\{\alpha_i\}$ in the chosen positive system and normalized
Chevalley generators $e_i\in\mathfrak g_{\alpha_i}$,
$f_i\in\mathfrak g_{-\alpha_i}$.  Let
$\tau:U(\mathfrak g)\to U(\mathfrak g)$ be the Chevalley anti-involution
determined by $\tau(e_i)=f_i$, $\tau(f_i)=e_i$, and $\tau(h)=h$ for
$h\in\mathfrak h$.
A bilinear form $B$ on a $\mathfrak g$-module is **Chevalley-contravariant**
when

$$B(xu,v)=B(u,\tau(x)v)\qquad(x\in U(\mathfrak g)).$$

This is a bilinear condition, not a Hermitian or positivity condition.
