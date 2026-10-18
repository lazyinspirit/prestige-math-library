---
id: lem-na-lipschitz-critical-image-null
kind: lemma
title: "Critical images of Euclidean Lipschitz maps are null"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
axiom_base: "Full Axiom of Choice; uses identified in the proof."
deps:
  - def-axiom-of-choice
  - thm-lipschitz-images-of-null-sets-in-rn-are-null
  - thm-countable-union-of-null-is-null
  - thm-lebesgue-measure-under-dilations-and-reflections
  - thm-zorn
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces, complete 168-page notes; Sections 2.6 and 3.3-3.4"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
    - title: "Crandall, Ishii and Lions, User's guide to viscosity solutions, Appendix A, Theorem A.2 and pp. 58-60, notes pp. 62-63"
      url: "https://arxiv.org/pdf/math/9207212"
---

## Statement

Assume the Axiom of Choice. Let $g:\mathbb R^n\to\mathbb R^n$ be $L$-Lipschitz. The image of $C=\{p:g\text{ is Frechet differentiable at }p,\ \det Dg(p)=0\}$ has Lebesgue outer measure zero. The image of any null subset of any domain under a Lipschitz map into the same-dimensional space is also null.

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[F1] [[thm-lipschitz-images-of-null-sets-in-rn-are-null]].

[F2] [[thm-countable-union-of-null-is-null]].

[F3] [[thm-lebesgue-measure-under-dilations-and-reflections]].

[F4] [[thm-zorn]].

[F5] [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]].

## Proof

1.1 We record the arbitrary-family fivefold selection used below. For a family of balls with bounded radii and bounded centers, divide radii into dyadic classes, largest first. In each class choose a maximal disjoint subfamily among balls disjoint from those selected earlier, using Zorn: the union of a chain of disjoint families is disjoint. A disjoint family of open balls is countable by assigning distinct rational points (take the first point in a fixed enumeration). Every rejected ball meets a selected ball in the same or an earlier class whose radius is greater than half its radius; hence it is contained in that ball's fivefold dilate. The union of all selected families is disjoint and countable. This is the explicit full-AC use; we do not substitute the canonical countable-family lemma for this arbitrary-family assertion. [F4, given, construct]

1.2 Fix $R>0$ and $0<\varepsilon<1$. For each $p\in C\cap B(0,R)$, differentiability supplies arbitrarily small $r<1$ with $|g(p+h)-g(p)-Dg(p)h|\le\varepsilon|h|$ for $|h|\le5r$. Since $\|Dg(p)\|\le L$ and its rank is at most $n-1$, $g(B(p,5r))$ lies within distance $5\varepsilon r$ of a disk of radius $5Lr$ in a subspace of dimension at most $n-1$. This tube can be covered by at most $c_n(1+L/\varepsilon)^{n-1}$ cubes of side $c_n\varepsilon r$: first use a grid in orthonormal coordinates adapted to that subspace, then enclose each rotated small cube in an axis-aligned cube, increasing side by at most $\sqrt n$. Thus its outer measure is at most $c_n\varepsilon(L+1)^{n-1}r^n$. No rotation-invariance or area formula is used. [given, construct, algebra]

2.1 Apply step 1.1 to all the balls supplied in step 1.2. Their centers cover $C\cap B(0,R)$ and their fivefold dilates cover that set. For the selected disjoint balls $B(p_i,r_i)\subset B(0,R+1)$, the ball-volume scaling gives $\sum_i r_i^n\le |B(0,R+1)|/|B(0,1)|$. The tube covers therefore give $\lambda^*(g(C\cap B(0,R)))\le c_n\varepsilon(L+1)^{n-1}|B(0,R+1)|/|B(0,1)|$. Let $\varepsilon\downarrow0$, then take integer $R$. This argument requires no measurability of the image or of $C$. [F2, F3, F5, step 1.1, step 1.2, algebra]

2.2 For the subset-domain null-image assertion, cover its null subset by axis cubes with total volume arbitrarily small. Whenever a cube meets the subset, choose one such point and enclose the image of that intersection in a cube with side at most $2L\sqrt n$ times the original side; the summed image volume is at most $(2L\sqrt n)^n$ times the covering budget. Full AC allows these choices. The case $L=0$ is constant and immediate. This also reproduces the cited global null-image result without requiring an extension. [F1, step 2.1, construct] ∎
