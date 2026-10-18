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

This finite-dimensional development uses the support-sensitive quantum relative entropy with natural logarithms. It uses the resolvent compression inequality, the Jensen inequality for the negative logarithm, and partial-trace and channel data processing through finite Stinespring dilation, proved together with [[thm-it-quantum-relative-entropy-joint-convexity|joint convexity]] on [[quantum-information-measures|Quantum Information Measures]]. The entropy consequences are strong subadditivity and nonnegativity of conditional mutual information; the measurement consequence is the [[thm-it-holevo-measurement-bound|finite Holevo bound]] established on that prerequisite page. States and positive semidefinite operators are both allowed where the stated relative entropy convention permits them. No infinite-dimensional extension or equality/recovery claim is made.

The channel data-processing proof factors the channel through an isometric embedding and a partial trace. The top route denotes that factorization, and the lower arrow denotes the original channel; the equality is justified by the finite Stinespring theorem and the proof text, not by the picture.

```tikzcd
\begin{tikzcd}
\mathcal L(H) \arrow[r, "X\mapsto VXV^\dagger"] \arrow[rr, "\Phi"'] & \mathcal L(K\otimes E) \arrow[r, "\operatorname{Tr}_E"] & \mathcal L(K)
\end{tikzcd}
```

The entropy inequalities use finite marginal definitions and preserve their factor order explicitly. All logarithms are natural, so divergences and entropies are measured in nats.
