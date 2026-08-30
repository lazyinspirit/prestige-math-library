---
id: lem-smooth-extension-from-a-closed-neighbourhood
kind: lemma
title: "Smooth extension from a closed neighbourhood"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set, lem-smooth-maps-paste-over-an-open-cover]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
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

Let $C$ be a closed subset of a smooth manifold $M$, let $U\subseteq M$ be open with $C\subseteq U$, and let $f:U\to \mathbb R$ be smooth. Then there exists a smooth function $F:M\to \mathbb R$ such that $F=f$ on an open neighbourhood of $C$ and $\operatorname{supp}(F)\subseteq U$.

## Facts & Assumptions

**Given:** A closed set $C\subseteq M$, an open set $U\subseteq M$ containing $C$, and a smooth function $f:U\to\mathbb R$.

[L1] There is a smooth cutoff $\chi:M\to [0,1]$ equal to $1$ on a neighbourhood of $C$ and supported in $U$ ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]]).

[L2] Smooth maps paste over an open cover ([[lem-smooth-maps-paste-over-an-open-cover]]).

[A1] Products of smooth real-valued functions on the same open set are smooth.

## Proof

**Proof technique:** direct.

1.1 Let $\chi$ be as in [L1]; then $\chi f$ is smooth on $U$ by [A1] and equals $f$ on an open neighbourhood of $C$ because $\chi=1$ there. [L1, A1, given]

2.1 Since $\operatorname{supp}(\chi)\subseteq U$, the function $\chi$ vanishes on an open neighbourhood of $M\setminus U$, so the local formula $\chi f$ on $U$ agrees with the constant zero map on an open neighbourhood of every boundary point of $U$. [L1, step 1.1]

3.1 Pasting these two local formulas by [L2] yields a smooth function $F:M\to\mathbb R$ with $F=f$ near $C$ and $\operatorname{supp}(F)\subseteq U$. [L2, step 1.1, step 2.1] ∎
