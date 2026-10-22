---
id: ex-qsmx-bell-and-classical-information
kind: example
title: Identical marginals and unequal quantum information
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsmx-information-conventions
  - def-qc-partial-trace
  - lem-it-partial-traces-of-a-state-are-states
dependency_roles:
  def-qsmx-information-conventions: mathematical-premise
  def-qc-partial-trace: mathematical-premise
  lem-it-partial-traces-of-a-state-are-states: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 5, §5.2, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf
    - title: Mark M. Wilde, From Classical to Quantum Shannon Theory, Chapter 11, §11.6, second-edition prepublication full text
      url: https://arxiv.org/pdf/1106.1445v8
verification:
  precheck: pass
---

## Example

Let $H_A=H_B=\mathbb C^2$ with the fixed orthonormal basis $|0\rangle,|1\rangle$ on each factor. Define the Bell density

$$\rho_\Phi=|\Phi\rangle\langle\Phi|,\qquad |\Phi\rangle=(|00\rangle+|11\rangle)/\sqrt2,$$

and the computational-basis-dephased density

$$\rho_{\mathrm{diag}}=\tfrac12|00\rangle\langle00|+\tfrac12|11\rangle\langle11|.$$

Both have marginals $I_2/2$, but their dimensionless mutual informations differ: $I(A:B)_{\rho_\Phi}=2\log2$ and $I(A:B)_{\rho_{\mathrm{diag}}}=\log2$. The displayed formula defines the dephased state; no measurement or experimental outcome is asserted.

## Example references

[[def-qsmx-information-conventions]]

[[def-qc-partial-trace]]

[[lem-it-partial-traces-of-a-state-are-states]]

## Facts & Assumptions

**Given:** $H_A=H_B=\mathbb C^2$ with the ordered basis $|0\rangle,|1\rangle$ and the two densities in the Example. Use natural logarithms.

[F1] [[def-qsmx-information-conventions]]: $I(A:B)_\rho=S(\rho_A)+S(\rho_B)-S(\rho_{AB})$ and $S(\rho)=-\operatorname{Tr}(\rho\log\rho)$ with $0\log0:=0$.

[F2] [[def-qc-partial-trace]]: tracing a tensor factor sums matrix entries whose row and column agree in that factor's basis index.

[F3] [[lem-it-partial-traces-of-a-state-are-states]]: the partial traces of a finite bipartite density are density operators.

## Verification

1.1 The vector $|\Phi\rangle$ has norm one because $|00\rangle$ and $|11\rangle$ are orthonormal, so $\rho_\Phi$ is a rank-one projection with trace one. The two orthogonal basis projections defining $\rho_{\mathrm{diag}}$ are positive and each has trace one, so their half-weighted sum is also positive with trace one. Expanding $\rho_\Phi$ gives the four terms $\tfrac12|00\rangle\langle00|$, $\tfrac12|00\rangle\langle11|$, $\tfrac12|11\rangle\langle00|$, and $\tfrac12|11\rangle\langle11|$. In either partial trace, the two off-diagonal terms vanish because the traced basis indices differ, by [F2]; the two diagonal terms each contribute one half of the corresponding basis projection. Thus both marginals are $I_2/2$. Applying [F2] to $\rho_{\mathrm{diag}}$ directly gives the same two marginals, which are density operators by [F3]. [given, F2, F3, algebra]

2.1 The eigenvalues of $\rho_\Phi$ are $1,0,0,0$, those of $\rho_{\mathrm{diag}}$ are $1/2,1/2,0,0$, and those of each marginal are $1/2,1/2$. Substitution into [F1] yields $S(\rho_\Phi)=0$, $S(\rho_{\mathrm{diag}})=\log2$, and $S(I_2/2)=\log2$. Therefore the mutual informations are $2\log2$ and $\log2$, respectively, as stated. [F1, step 1.1, algebra] ∎
