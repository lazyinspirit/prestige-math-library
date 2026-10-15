---
page: td-cycles-and-low-temperature-examples
title: Cycles And Low Temperature — Examples
status: published
items: []
examples:
  - ex-td-carnot-engine-600-300
  - ex-td-refrigerator-cop-240-300
  - cex-td-integrable-capacity-not-integer-power
  - ex-td-finite-canonical-ground-state-entropy
  - ex-td-geometric-cooling-protocol
---

The engine and refrigerator examples apply the preceding ideal-reservoir bounds to stipulated temperatures and heat amounts; neither reports an apparatus measurement.

The low-temperature counterexample computes $C_V=U_T=T S_T=C_*\sqrt{T/T_*}$ directly from its explicit local response chart and shows that finite entropy-integral convergence does not imply $C_V=O((T/T_*)^q)$ for any real $q\ge1$. Tong §4.5 states the exponent as $n\ge1$ or faster, without an integer restriction; this constructed chart refutes that general inference without making a claim about an actual material.

The finite canonical example computes a model-specific Gibbs entropy limit (k_{\mathrm B}\log g) under a finite-state, positive-gap assumption. The geometric protocol proves nonattainment only for the stipulated update $T\mapsto rT$; since its operation is defined only on positive-temperature states, it falls in the postulate's disclosed vacuous case and is not evidence for universal unattainability.
