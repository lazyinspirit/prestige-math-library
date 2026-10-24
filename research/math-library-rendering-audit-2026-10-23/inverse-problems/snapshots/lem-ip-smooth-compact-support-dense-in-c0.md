---
id: lem-ip-smooth-compact-support-dense-in-c0
kind: lemma
title: Smooth compactly supported functions are dense in C0 on an open Euclidean set
status: published
origin: pipeline
deps:
  - def-compact-support-c-c-and-c-zero-on-an-lch-space
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-heine-borel-rn
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

For every open set $\Omega\subseteq\mathbb R^n$, the space $C_c^\infty(\Omega)$ is dense in $C_0(\Omega)$ in the uniform norm.

## Statement references

[[def-compact-support-c-c-and-c-zero-on-an-lch-space|C-zero functions vanish at infinity, and C-c functions have compact support.]]

[[lem-smooth-bump-between-concentric-euclidean-balls|Smooth cutoffs exist between nested concentric balls.]]

## Facts & Assumptions

**Given:** An open set $\Omega\subseteq\mathbb R^n$ and a continuous function on $\Omega$ that vanishes at infinity.

[F1] For $n\ge1$, closed bounded subsets of $\mathbb R^n$ are compact. ([[thm-heine-borel-rn]])

[F2] For $n\ge1$, a smooth bump can be chosen equal to one on an inner ball and supported in a larger ball. ([[lem-smooth-bump-between-concentric-euclidean-balls]])

## Proof

**Given:** The open set $\Omega$ and $f\in C_0(\Omega)$.

1.1 If $\Omega=\varnothing$, the zero function suffices. If $n=0$ and $\Omega\ne\varnothing$, then its singleton supports every function and every function is smooth, so take the approximant $f$ itself. Assume $n\ge1$. Let $f\in C_0(\Omega)$ and $\varepsilon>0$. The set $K:=\{x\in\Omega:|f(x)|\ge\varepsilon/3\}$ is compact by the definition of vanishing at infinity. If $K=\varnothing$, the zero function approximates $f$ within $\varepsilon/3$. Otherwise cover $K$ by finitely many inner balls whose doubled closed balls lie in $\Omega$, using compactness [F1]. Choose the corresponding bumps from [F2] and combine them as $\chi:=1-\prod_j(1-\chi_j)$. Then $\chi\in C_c^\infty(\Omega)$ and $\chi=1$ on $K$, so $\|f-\chi f\|_\infty\le\varepsilon/3$. [F1, F2, given, choose, construct]

2.1 Put $g=\chi f$ and $L=\operatorname{supp}g\Subset\Omega$. If $L=\varnothing$, take the zero approximant. Otherwise, for each $x\in L$, continuity gives $r_x>0$ such that $\overline B(x,2r_x)\subset\Omega$ and $|g(y)-g(x)|<\varepsilon/3$ on $B(x,2r_x)$. Finitely many inner balls $B(x_j,r_j)$ cover $L$. By [F2], let $\psi_j$ be nonnegative smooth bumps equal to one on those inner balls and supported in their doubled balls. The sum $s=\sum_j\psi_j$ is positive on a neighborhood of $L$. Repeating the finite cutoff construction of step 1.1 inside the open set $\{s>0\}$ gives $\zeta\in C_c^\infty(\{s>0\})$ with $0\le\zeta\le1$ and $\zeta=1$ on $L$. Define $a=\zeta\,s^{-1}\sum_j g(x_j)\psi_j$ on $\{s>0\}$ and extend it by zero. Its compact support lies in $\Omega$, and the extension is smooth because $\operatorname{supp}\zeta\Subset\{s>0\}$. Where $s>0$, the weighted average differs from $g(y)$ by at most $\varepsilon/3$, since each nonzero weight has $|g(x_j)-g(y)|<\varepsilon/3$. Also $\zeta g=g$ everywhere, because $\zeta=1$ on $\operatorname{supp}g$. Therefore $\|a-g\|_\infty\le\varepsilon/3$, and step 1.1 gives $\|a-f\|_\infty\le2\varepsilon/3<\varepsilon$. This uses only finitely many balls, bumps and sampled values, with no integration or infinite selection. [F1, F2, step 1.1, choose, construct, algebra] ∎
