---
id: thm-density-measure-is-independent-of-the-chart-gluing
title: "Intrinsic density measure and its chart restriction"
kind: theorem
status: draft
origin: pipeline
deps: ["thm-chart-gluing-defines-a-countably-additive-borel-density-measure", "lem-measurable-density-chart-integrals-agree-on-overlaps", "cor-beppo-levi-theorem", "def-borel-measurable-nonnegative-density-on-a-manifold"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Folland, Real Analysis, second edition, \u00a711.4 pp.361\u2013363; Theorems 2.14\u20132.15 pp.50\u201351"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
proof_strategy: direct
---

## Statement

All chart-partition constructions give the same measure $\mu_r$. Moreover, if $E$ is Borel and contained in any chart $x:U\to x(U)$, then
$$\mu_r(E)=\int_{x(E)}r_x\,d\lambda_n.$$

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Manifolds are Hausdorff, second countable and smooth, with boundary allowed; $n=0$ is allowed unless excluded. Densities are pointwise Borel, $0\cdot\infty=0$, and $\lambda_0(\mathbb R^0)=1$. Common nonnegative refinement and pointwise extended-real arithmetic.

[F1] [[thm-chart-gluing-defines-a-countably-additive-borel-density-measure]]: Every gluing gives a Borel measure.

[F2] [[lem-measurable-density-chart-integrals-agree-on-overlaps]]: Nonnegative Borel density integrals agree on every Borel chart overlap.

[F3] [[cor-beppo-levi-theorem]]: The integral of a countable nonnegative sum is the sum of the integrals.

## Proof

1.1 For a finite nonnegative Borel scalar $a$ on $M$, $ar$ is again a density: in coordinates its coefficient is $(a\circ x^{-1})r_x$, and multiplying the transition law by $a\circ x^{-1}$ proves its law, also at $r_x=\infty$ when $a=0$. Thus the overlap lemma applies to $\varphi_i r$ and $\varphi_i\psi_jr$. [F2, given]

2.1 Fix a Borel $E\subset U$. Transfer the $i$th gluing term, for the density $\varphi_i r$, from $x_i$ to $x$ on $E\cap U_i$. In the $x$ chart the transferred integrands sum to $r_x\mathbf1_{x(E)}$: if $r_x$ is finite this is distributivity and $\sum_i\varphi_i=1$; if $r_x=\infty$, at least one of the finitely many nonzero weights is positive, so the sum is infinite. The nonnegative summation theorem therefore gives the chart-restriction identity. [F2, F3, step 1.1]

2.2 For two partitions $(\varphi_i)$ and $(\psi_j)$, expand the first construction on a Borel $E$ as $\sum_i\sum_j\int_{x_i(E\cap U_i\cap V_j)}(\varphi_i\psi_jr)_{x_i}$. This expansion follows from the same pointwise argument, now summing $\psi_j$, and the nonnegative summation theorem. The overlap lemma transfers each summand to $y_j$. Both iterated sums are the supremum of the finite rectangular subsums, so reordering and summing $\varphi_i$ gives the second construction. [F2, F3, step 1.1]

3.1 Thus the two Borel measures are identical on every Borel set. All formulas remain true for the empty set and zero density, giving zero; in dimension zero the chart formula is the singleton weight. Neither infinity nor boundary points require cancellation: the overlap lemma already treats both. [F1, step 2.1, step 2.2] ∎
