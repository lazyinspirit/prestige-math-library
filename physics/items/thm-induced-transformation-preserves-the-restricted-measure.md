---
id: thm-induced-transformation-preserves-the-restricted-measure
kind: theorem
title: Induced transformations preserve restricted finite measure
deps: ["prop-first-return-time-and-induced-map-are-measurable", "def-first-return-time-and-induced-transformation", "prop-measure-preserving-compositions-iterates-and-completions", "def-measure", "thm-continuity-from-below-for-measures", "thm-poincare-recurrence-for-finite-measure-preserving-systems"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Sarig Theorem 1.7(1), p.28
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For a finite measure-preserving system and a measurable $E$ with $\mu(E)>0$, its induced transformation $T_E$ on $E_\infty$ preserves both $\mu|_{E_\infty}$ and $\mu_E$. Neither invertibility nor ergodicity is required.

## Facts & Assumptions

[F1] Return fibers and induced inverse images are measurable. [[prop-first-return-time-and-induced-map-are-measurable]].

[F2] The recurrent core is conull in E, and T_E is its self-map. [[def-first-return-time-and-induced-transformation]].

[F3] Pullback by T preserves the original measure. [[prop-measure-preserving-compositions-iterates-and-completions]].

[F4] Additivity splits measurable sets into disjoint pieces. [[def-measure]].

[F5] Increasing unions of partial first-return sets have the supremum of their measures. [[thm-continuity-from-below-for-measures]].

## Proof

**Given:** For a finite measure-preserving system and a measurable $E$ with $\mu(E)>0$, its induced transformation $T_E$ on $E_\infty$ preserves both $\mu|_{E_\infty}$ and $\mu_E$. Neither invertibility nor ergodicity is required.

1.1 Fix a trace set $B\subseteq E_\infty$; it is ambient measurable. Write $H_n=E\cap T^{-n}B\cap\bigcap_{j=1}^{n-1}T^{-j}E^c$ and $R_N=T^{-N}B\cap\bigcap_{j=0}^{N-1}T^{-j}E^c$. Pulling B back once and splitting at E gives $\mu(B)=\mu(H_1)+\mu(R_1)$. Pulling $R_N$ back and splitting at E gives $\mu(R_N)=\mu(H_{N+1})+\mu(R_{N+1})$. Thus for each $N\ge1$, $\mu(B)=\sum_{n=1}^N\mu(H_n)+\mu(R_N)$. [F1, F2, F3, F4]

2.1 The H_n are disjoint first-return pieces. Each differs from $H_n\cap E_\infty$ by a subset of the measurable null set $E\setminus E_\infty$; these differences are themselves measurable. Consequently the finite-sum identity implies $\mu(\bigcup_{n=1}^N(H_n\cap E_\infty))\le\mu(B)$. Passing to the increasing union gives $\mu(T_E^{-1}B)\le\mu(B)$. [step 1.1, F1, F2, F4, F5]

3.1 Apply the same inequality to $C=E_\infty\setminus B$. Since $T_E$ maps its entire domain to itself, $T_E^{-1}C=E_\infty\setminus T_E^{-1}B$. All measures here are finite, so $\mu(E_\infty)-\mu(T_E^{-1}B)\le\mu(E_\infty)-\mu(B)$ gives the reverse inequality. Equality follows for every B; division by $0<\mu(E)<\infty$ proves invariance of $\mu_E$. [step 2.1, F2, F4, algebra] ∎

