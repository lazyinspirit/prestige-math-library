---
id: thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity
kind: theorem
title: "Smooth locally defined functions can be glued by a partition of unity"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-partition-of-unity-subordinate-to-an-open-cover, lem-smooth-maps-paste-over-an-open-cover, thm-a-locally-finite-sum-of-smooth-functions-is-smooth]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
---

## Statement

Let $(U_i)_{i\in I}$ be an open cover of a smooth manifold $M$, let $f_i:U_i\to\mathbb R$ be smooth for each $i$, and let $(\phi_i)_{i\in I}$ be a smooth partition of unity subordinate to $(U_i)$. Then the pointwise formula
$$ F(p):=\sum_i \phi_i(p)f_i(p) $$
defines a smooth function $F:M\to\mathbb R$.

## Facts & Assumptions

**Given:** An open cover $(U_i)_{i\in I}$ of $M$, smooth functions $f_i:U_i\to\mathbb R$, and a smooth partition of unity $(\phi_i)_{i\in I}$ subordinate to $(U_i)$.

[F1] In a smooth partition of unity subordinate to $(U_i)$, the support family $(\operatorname{supp}(\phi_i))$ is locally finite and each support lies in $U_i$ ([[def-smooth-partition-of-unity-subordinate-to-an-open-cover]]).

[L1] Smooth maps paste over an open cover ([[lem-smooth-maps-paste-over-an-open-cover]]).

[L2] A locally finite sum of smooth functions is smooth ([[thm-a-locally-finite-sum-of-smooth-functions-is-smooth]]).

[A1] For each $i$, the product $\phi_i f_i$ is smooth on $U_i$.

## Proof

**Proof technique:** direct.

1.1 Fix $i\in I$. On the open set $U_i$ let $G_i:=\phi_i f_i$, and on the open set $M\setminus \operatorname{supp}(\phi_i)$ let $H_i:=0$. By [A1], the map $G_i$ is smooth on $U_i$; by [F1], the two open sets cover $M$ and on the overlap $U_i\setminus \operatorname{supp}(\phi_i)$ one has $\phi_i=0$, so $G_i=H_i$. Therefore [L1] pastes them to a smooth global function $F_i:M\to\mathbb R$ with $F_i=\phi_i f_i$ on $U_i$ and $\operatorname{supp}(F_i)\subseteq \operatorname{supp}(\phi_i)$. [F1, L1, A1, given, construct]

2.1 By [F1] and step 1.1, the family $(\operatorname{supp}(F_i))_{i\in I}$ is locally finite. Hence the sum $F:=\sum_i F_i$ is well defined and smooth by [L2]. [F1, L2, step 1.1]

3.1 Let $p\in M$. If $\phi_i(p)\ne 0$, then $p\in U_i$ and step 1.1 gives $F_i(p)=\phi_i(p)f_i(p)$. If $\phi_i(p)=0$, then $p\notin \operatorname{supp}(\phi_i)$, so step 1.1 gives $F_i(p)=0=\phi_i(p)f_i(p)$. Thus $F(p)=\sum_i \phi_i(p)f_i(p)$, and this pointwise formula is smooth by step 2.1. [F1, step 1.1, step 2.1] ∎
