---
id: lem-smooth-extension-from-a-closed-neighbourhood
kind: lemma
title: "Smooth extension from a closed neighbourhood"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable-choice, thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set, lem-smooth-maps-paste-over-an-open-cover, thm-algebra-of-derivatives, def-ck-and-multi-index-notation-in-several-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: Codex
    verdict: repaired-and-locally-checked
    date: 2026-09-09
    scope: "Owner-authorized countable-choice contract and supplied-cutoff repair; local checks only, no independent judge"
    delegated_by: owner
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

Assume countable choice $\mathrm{AC}_\omega$. Let $C$ be a closed subset of a smooth manifold $M$, let $U\subseteq M$ be open with $C\subseteq U$, and let $f:U\to \mathbb R$ be smooth. Then there exists a smooth function $F:M\to \mathbb R$ such that $F=f$ on an open neighbourhood of $C$ and $\operatorname{supp}(F)\subseteq U$.

Separately, without any choice assumption, the same conclusion holds whenever a smooth cutoff $\chi:M\to[0,1]$ equal to one on an open neighbourhood of $C$ and satisfying $\operatorname{supp}(\chi)\subseteq U$ is supplied. Here supports are closures in $M$ of nonzero loci. Countable choice is used only to obtain the cutoff, not to extend a supplied one.

## Facts & Assumptions

**Given:** A closed set $C\subseteq M$, an open set $U\subseteq M$ containing $C$, and a smooth function $f:U\to\mathbb R$; for the existence clause assume countable choice, and for the conditional clause take a supplied cutoff as stated.

[L1] Under countable choice ([[def-countable-choice]]), there is a smooth cutoff $\chi:M\to [0,1]$ equal to $1$ on a neighbourhood of $C$ and supported in $U$ ([[thm-smooth-urysohn-lemma-for-a-closed-set-in-an-open-set]]). That theorem uses countable choice for countable coordinate witnesses, finite annular covers, and bumps.

[L2] Smooth maps paste over an open cover ([[lem-smooth-maps-paste-over-an-open-cover]]).

[L3] The one-variable product rule applies to each coordinate partial derivative ([[thm-algebra-of-derivatives]]). Induction on derivative words expresses every iterated derivative of a product as a finite sum of products of derivatives of the factors, all continuous. Thus products of smooth real-valued functions are smooth in charts ([[def-ck-and-multi-index-notation-in-several-variables]]). Constant zero is smooth because its positive-order derivatives vanish.

## Proof

**Proof technique:** direct.

1.1 For the existence clause obtain $\chi$ from [L1], spending countable choice only through that supplier. For the conditional clause use the supplied $\chi$ instead, without invoking [L1]. Let $V$ be its supplied open neighbourhood of $C$ on which $\chi=1$, and replace $V$ by $V\cap U$. Put $S=\operatorname{supp}(\chi)$ and $W=M\setminus S$. Then $S$ is closed, $W$ is open, and $U\cup W=M$ because $S\subseteq U$. [L1, given, construct]

2.1 On $U$ take the smooth function $(\chi|_U)f$, smooth by [L3]; on $W$ take the smooth constant zero function. On $U\cap W$ these agree because $\chi=0$ outside $S$. By [L2] they determine a smooth function $F:M\to\mathbb R$. This construction uses a two-member open cover, not a choice of a neighbourhood at each boundary point. [L2, L3, step 1.1]

3.1 On $V$ one has $F=f$ because $\chi=1$. Moreover $F$ vanishes on $W$, so its nonzero locus lies in the closed set $S$. Taking closure in $M$ gives $\operatorname{supp}(F)\subseteq S\subseteq U$. The construction includes $C=\varnothing$, $U=\varnothing$, and $M=\varnothing$ with the empty neighbourhood or empty local formula as appropriate. No choice is used after the cutoff has been supplied. [step 1.1, step 2.1] ∎
