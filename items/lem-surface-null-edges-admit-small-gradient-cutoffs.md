---
id: lem-surface-null-edges-admit-small-gradient-cutoffs
kind: lemma
title: Cutoffs around surface-null edges
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter §1.10.2 and §1.12, printed pp. 15–18, for the surface convention and motivation only. The complete cube-cover and scaled-bump argument is local, as retained in research/phase-2-local-mathematical-repairs-2026-09-08.md, §PDE-2D.
status: published
origin: pipeline
proof_strategy: direct
deps: ["lem-surface-integral-is-independent-of-c-one-boundary-charts", "lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure", "lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound", "thm-linear-change-of-variables-for-lebesgue-measure", "thm-lebesgue-outer-measure-and-measurability-are-translation-invariant"]
---

## Statement

Assume $\mathrm{AC}_\omega$ and $n\ge2$. Let E be a compact subset of finitely many compact regular $C^1$ hypersurface patches, with its intersection with each patch surface-null. For every $\varepsilon>0$ there is smooth $0\le\eta\le1$, equal to one near E, supported within distance epsilon of E, such that $\int_{\mathbb R^n}|D\eta|<\varepsilon$. These cutoffs can be chosen with support volume tending to zero as epsilon tends to zero.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$, $n\ge2$. The compact set E is contained in finitely many compact regular C1 hypersurface patches and is surface-null in each. Fix $\varepsilon>0$.

[F1] Regular chart density is positive and computes face surface measure. ([[lem-surface-integral-is-independent-of-c-one-boundary-charts]]).

[F2] Lebesgue-null sets admit cubic covers of arbitrarily small total volume. ([[lem-closed-open-and-cubic-covers-give-the-same-lebesgue-outer-measure]]).

[F3] A ball bump has gradient integral C_n times radius to the power n-1. ([[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]]).

[F4] Dilation scales volume by radius to the power n. ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F5] Translating a measurable ball preserves its volume. ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

## Proof

1.1 If E is empty use eta=0. Otherwise subdivide the compact chart preimages into finitely many smaller closed boxes contained in chart domains, with interiors covering them. On each box the derivative has a bound L, enlarged to at least one, and its density J has a positive lower bound c by regularity and compactness (F1). The parameter subset mapping into E is compact and null: $c\lambda_{n-1}(A)\le\int_AJ=0$. The segment integral of DX in the convex box gives $|X(y)-X(z)|\le L|y-z|$. [given, F1]

2.1 Fix delta,A_0>0. F2 covers each null preimage by closed cubes with sum of side lengths to the power n-1 as small as desired. Make them open by enlarging the kth side by a positive amount with added volume below a prescribed geometric error $2^{-k}$ times the budget. Subdivide beforehand if needed so every resulting side is smaller than a prescribed positive bound. Intersect with the chart box. Compactness of each null preimage retains finitely many covering cubes; discard empty intersections with that preimage and choose one such point in each retained cube. The Lipschitz bound from step 1.1 places its image in a ball centered at the chosen image point of E with radius $r_j=2L\sqrt{n-1}\ell_j$. Choosing the finitely many chart budgets and side bounds sufficiently small gives a finite open ball cover of E with $r_j<\delta$ and $\sum_jr_j^{n-1}<A_0$. [step 1.1, F2]

3.1 Use the fixed bump of F3 and put $b_j(x)=b((x-c_j)/r_j)$ and $\eta=1-\prod_j(1-b_j)$. It lies between zero and one and is one on the union of the covering balls, hence near E. Its support lies in the union of the doubled balls, within distance $2\delta$ of E. The finite product rule and $0\le1-b_j\le1$ give $|D\eta|\le\sum_j|Db_j|$, so F3 yields $\int|D\eta|\le C_n\sum_jr_j^{n-1}<C_nA_0$. [step 2.1, F3, algebra]

4.1 The support volume is at most $2^n|B_1|\sum_jr_j^n\le2^n|B_1|\delta A_0$ by volume dilation F4 and translation invariance. Take $\delta=\varepsilon/4$ and $A_0=\varepsilon/(2\max(1,C_n))$. Then the support is within epsilon of E, its gradient integral is less than epsilon, and its volume is bounded by a fixed dimensional constant times $\varepsilon^2$, tending to zero. [step 2.1, step 3.1, F4, F5] ∎

## Source notes

Hunter §1.10.2 and §1.12, printed pp. 15–18, for the surface convention and motivation only. The complete cube-cover and scaled-bump argument is local, as retained in research/phase-2-local-mathematical-repairs-2026-09-08.md, §PDE-2D.
