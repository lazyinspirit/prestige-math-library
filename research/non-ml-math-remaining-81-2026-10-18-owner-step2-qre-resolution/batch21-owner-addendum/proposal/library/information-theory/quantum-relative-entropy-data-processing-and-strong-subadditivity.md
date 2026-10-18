---
page: quantum-relative-entropy-data-processing-and-strong-subadditivity
title: Quantum Relative Entropy, Data Processing, and Strong Subadditivity
status: draft
items:
  - lem-it-finite-weyl-twirl-partial-trace
  - thm-it-finite-strong-subadditivity
  - thm-it-finite-quantum-conditional-mutual-information-nonnegative
examples: []
---

This finite-dimensional development uses the support-sensitive quantum relative entropy with natural logarithms. It proves the resolvent compression inequality for the negative logarithm and develops partial-trace and channel data processing through finite Stinespring dilation, using [[thm-it-quantum-relative-entropy-joint-convexity|joint convexity]] from Quantum Information Measures. The entropy consequences are strong subadditivity and nonnegativity of conditional mutual information; the measurement consequence is the [[thm-it-holevo-measurement-bound|finite Holevo bound]] established on that prerequisite page. States and positive semidefinite operators are both allowed where the stated relative entropy convention permits them. No infinite-dimensional extension or equality/recovery claim is made.

The operator ladder is supplied once on Quantum Information Measures: [[lem-it-inverse-compression-resolvent|inverse compression]], [[lem-it-operator-jensen-negative-log|negative-log Jensen]], [[lem-it-relative-modular-representation|the modular identity]], [[lem-it-finite-povm-measurement-channel|the finite POVM channel in either indexed or enumerated coordinates]], [[thm-it-quantum-relative-entropy-partial-trace-data-processing|partial-trace DPI]], and [[thm-it-quantum-relative-entropy-channel-data-processing|channel DPI]]. This page reuses those full claims, including their zero-space cases where allowed and extended support values; the original batch22 names remain aliases. Its local Weyl-twirl proof, strong subadditivity and conditional-information consequence retain their own carriers.

The channel data-processing proof factors the channel through an isometric embedding and a partial trace. The top route denotes that factorization, and the lower arrow denotes the original channel; the equality is justified by the finite Stinespring theorem and the proof text, not by the picture.

```tikzcd
\begin{tikzcd}
\mathcal L(H) \arrow[r, "X\mapsto VXV^\dagger"] \arrow[rr, "\Phi"'] & \mathcal L(K\otimes E) \arrow[r, "\operatorname{Tr}_E"] & \mathcal L(K)
\end{tikzcd}
```

The entropy inequalities use finite marginal definitions and preserve their factor order explicitly. All logarithms are natural, so divergences and entropies are measured in nats.
