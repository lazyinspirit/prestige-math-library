---
id: lem-surface-integral-is-independent-of-c-one-boundary-charts
kind: lemma
title: Chart and partition independence of surface measure
provenance:
  statement: literature-derived
  proof: ai-altered
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
      locator: Hunter, §1.10.2–1.10.3, printed pp. 15–16, Gram density and graph normal. Overlap independence is proved by the full determinant and Borel substitution calculation.
status: published
origin: pipeline
proof_strategy: direct
deps: ["def-surface-integral-on-a-compact-c-one-hypersurface", "thm-gram-determinant-detects-linear-independence", "thm-determinant-multiplicative", "thm-determinant-of-transpose", "lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness", "thm-chain-rule-for-total-derivatives", "thm-monotone-convergence-for-the-integral"]
---

## Statement

Assume $\mathrm{AC}_\omega$. Every regular chart density is continuous and strictly positive. The chart integral on a compact embedded $C^1$ hypersurface defines a finite Borel measure independent of the finite charts and subordinate partitions. In graph coordinates $X(y)=(y,h(y))$ its density is $\sqrt{1+|Dh|^2}$. On a one-sided domain boundary the outward unit normal agrees on chart overlaps and is continuous.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Use the proposed chart integral on a compact embedded $C^1$ hypersurface. In the normal assertion this is the one-sided boundary of the specified domain.

[F1] The proposed integral is a finite sum of weighted chart integrals. ([[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F2] The derivative of a coordinate composition is the product of its differentials. ([[thm-chain-rule-for-total-derivatives]]).

[F3] Determinants multiply. ([[thm-determinant-multiplicative]]).

[F4] A transpose has the same determinant. ([[thm-determinant-of-transpose]]).

[F5] Regular tangent columns have positive Gram determinant. ([[thm-gram-determinant-detects-linear-independence]]).

[F6] Nonnegative Borel substitution holds for a C1 diffeomorphism between open Euclidean sets. ([[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]).

[F7] Increasing nonnegative measurable functions have integrals increasing to the integral of their limit. ([[thm-monotone-convergence-for-the-integral]]).

## Proof

1.1 On an overlap write $X=Y\circ T$, where T is the C1 coordinate transition. F2 gives $DX=(DY\circ T)DT$, so F3–F5 yield $J_X(y)=J_Y(T(y))|\det DT(y)|$. Both Gram determinants are positive because the tangent columns have full rank. F6 in dimension n-1, applied to any nonnegative Borel f supported in this overlap, now gives $\int f(X(y))J_X(y)\,dy=\int f(Y(z))J_Y(z)\,dz$. Restriction to Borel subsets is obtained by multiplying f by their indicators. Continuity of DX and the polynomial determinant, followed by the positive square root, also proves continuity of each J. For a two-dimensional surface with Gram matrix $\begin{pmatrix}E&F\\F&G\end{pmatrix}$, the same definition reads $J=\sqrt{EG-F^2}$. [given, F2, F3, F4, F5, F6]

2.1 For two partitions chi_j and eta_k, insert $\sum_k\eta_k=1$ into each chi_j integral in F1. This produces the finite sum of integrals of $\chi_j\eta_k f$ on overlaps. Step 1.1 transfers each term to the eta_k chart. Summing first in j gives $\sum_j\chi_j=1$, recovering exactly the second proposed integral. Every term is nonnegative, so this works also for infinite integrals. Applying the conclusion to positive and negative parts gives agreement for integrable signed f. [step 1.1, F1]

3.1 Each chart term defines a measure: for disjoint Borel sets the indicators of the finite partial unions increase to the indicator of the union, and monotone convergence of the weighted chart integrals gives countable additivity. For finiteness, the parameter preimage of the support of chi_j on S is compact inside V_j because X_j is a homeomorphism onto the chart image. J_X is continuous and bounded there and the compact set is bounded, so its weighted integral is finite. There are finitely many charts. Empty S gives the zero measure. [step 2.1, F1, F7]

4.1 For a graph the tangent columns are $(e_i,\partial_i h)$, so $DX^TDX=I+vv^T$ with $v=Dh$. Expanding its determinant by columns leaves the identity term one and the terms with exactly one replaced column, namely $v_i^2$; terms with two replaced columns vanish because those columns are proportional to v. Thus its determinant is $1+|Dh|^2$, including v=0. The vector $(-Dh,1)$ is orthogonal to every tangent column, and points out of the subgraph because its derivative on $z-h(y)$ is $1+|Dh|^2>0$. The two unit vectors normal to the common tangent space have opposite sides, so the exterior-side condition selects the same one in every chart. The displayed formula is continuous, proving normal continuity. In dimension three the cross product $\partial_1X\times\partial_2X$ is orthogonal to both tangent vectors and has squared length equal to their Gram determinant. Its normalized value gives the outward normal exactly when it points to the exterior side; otherwise its negative does. Thus a parametrization alone does not fix the outward sign. [step 1.1, algebra] ∎

## Source notes

Hunter, §1.10.2–1.10.3, printed pp. 15–16, Gram density and graph normal. Overlap independence is proved by the full determinant and Borel substitution calculation.
