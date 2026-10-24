---
id: "rem-critical-hausdorff-measure-can-be-zero-finite-or-infinite"
kind: "remark"
title: "Dimension leaves the critical measure undetermined"
deps: ["prop-binary-digit-restriction-hausdorff-dimension", "thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line", "cor-euclidean-hausdorff-dimension"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres Proposition 1.2.6 and Example 1.4.2
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
---

## Discussion

Assume the Axiom of Countable Choice. Dimension one permits all three critical-measure behaviours. For $S$ the positive nonsquares, $a_S(n)=n-\lfloor\sqrt n\rfloor$, so [[prop-binary-digit-restriction-hausdorff-dimension]] gives $\dim_H A_S=1$ and $\mathcal H^1(A_S)=0$. On the other hand [[thm-hausdorff-one-measure-is-lebesgue-outer-measure-on-the-line]] gives $\mathcal H^1([0,1])=1$ and $\mathcal H^1(\mathbb R)=\infty$. Both sets have dimension one by [[cor-euclidean-hausdorff-dimension]], since they have positive Lebesgue measure. The critical exponent alone therefore specifies none of zero, finite positive, or infinite critical measure.
