---
id: "rem-hausdorff-dimension-orients-the-weierstrass-graph"
kind: "remark"
title: "Orientation for the published Weierstrass graph remark"
deps: ["def-hausdorff-dimension"]
sources:
  references:
    - title: Bishop–Peres §1.2 p.9 Weierstrass discussion; design forward-reference receipt
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/rem-hausdorff-dimension-orients-the-weierstrass-graph.json
---

## Discussion

For a real-valued function $W$ on an interval $I$, its graph is the metric subspace $G_W=\{(x,W(x)):x\in I\}\subseteq\mathbb R^2$, with the induced Euclidean distance. The notation $\dim_H G_W$ means the critical exponent defined in [[def-hausdorff-dimension]], namely $\inf\{s\ge0:\mathcal H^s(G_W)=0\}$, with the empty infimum equal to infinity.

This specifies the meaning of graph dimension for a Weierstrass function just as for any real function. It asserts no dimension value or parameter-dependent dimension formula.
