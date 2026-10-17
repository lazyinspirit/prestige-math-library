---
page: qsm-states-ensembles-examples
title: Normal density states and spectral moments — Examples
status: draft
library: physics
items: []
examples:
  - ex-qsm-entanglement-mixture
  - ex-qsm-oscillator-trace-gibbs
  - ex-qsm-two-level-noncommuting
---

These examples use the finite matrix and trace-class normal-state conventions of [[qsm-states-ensembles]]. Each calculation specifies its state, Hamiltonian or measured observable and applies only the stated preparation/measurement assumptions.

| Example | Exact comparison |
|---|---|
| [[ex-qsm-entanglement-mixture]] | A pure Bell state and a classically correlated mixture have the same maximally mixed marginals but different global entropy, separability, and a joint-observable probability law. |
| [[ex-qsm-oscillator-trace-gibbs]] | A one-mode diagonal oscillator has a summable trace Gibbs state at every $\beta>0$; an infinite-dimensional zero Hamiltonian has no trace-class Gibbs exponential. |
| [[ex-qsm-two-level-noncommuting]] | A two-level transverse static response is $\beta\tanh(x)/x$, strictly below $\beta\operatorname{Var}(B)$ when the Hamiltonian and control observable do not commute. |

The normal-state Born rule and the canonical preparation rule are adopted model assumptions. The computed probabilities, entropies, and susceptibilities are deductions within those models, not reported laboratory outcomes. The oscillator formula uses its explicit diagonal domain and the actual trace-class condition; a lower energy bound alone does not normalize an infinite-dimensional Gibbs operator.
