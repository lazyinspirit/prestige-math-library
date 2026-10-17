---
id: ex-qsm-entanglement-mixture
kind: example
title: Pure entanglement and correlated mixtures
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 5
physical_scope: Exact two-qubit state, marginal, entropy and sharp-observable probability calculations under the adopted normal-state Born interpretation; no apparatus or experimental outcome is asserted.
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-nrqm-composites-separable-and-entangled-states
  - lem-nrqm-composites-pure-state-separability-criterion
  - def-qc-partial-trace
  - thm-qc-partial-trace-characterization-and-basis-independence
  - thm-qc-partial-trace-positive-and-trace-preserving
  - def-qsm-relative-entropy-domain
  - post-qsm-normal-measurement-state
  - thm-qsm-finite-entropy-composition
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-composites-separable-and-entangled-states: mathematical-premise
  lem-nrqm-composites-pure-state-separability-criterion: mathematical-premise
  def-qc-partial-trace: mathematical-premise
  thm-qc-partial-trace-characterization-and-basis-independence: mathematical-premise
  thm-qc-partial-trace-positive-and-trace-preserving: mathematical-premise
  def-qsm-relative-entropy-domain: mathematical-premise
  post-qsm-normal-measurement-state: physical-assumption
  thm-qsm-finite-entropy-composition: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 2, §§2.1–2.3, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.2.pdf
    - title: John Watrous, The Theory of Quantum Information, Chapter 5, §5.2, author-hosted manuscript
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.5.pdf
---

## Example

With $k_B>0$ as fixed by [[def-qsm-relative-entropy-domain]], for two qubits with basis $|0\rangle,|1\rangle$, compare the Bell pure state $|\Phi\rangle=(|00\rangle+|11\rangle)/\sqrt2$, with density $\rho_\Phi=|\Phi\rangle\langle\Phi|$, and the classically correlated mixture
$
\rho_{\mathrm{mix}}=\tfrac12|00\rangle\langle00|+\tfrac12|11\rangle\langle11|.
$
Both states have marginals $I_2/2$ and hence marginal entropy $k_B\log2$. The global entropies differ:
$
S(\rho_\Phi)=0,\qquad S(\rho_{\mathrm{mix}})=k_B\log2.
$
The Bell pure state is entangled for the declared two-qubit splitting; the mixture is separable. The dimensionless Hermitian observable $W=|00\rangle\langle11|+|11\rangle\langle00|$ has outcome $+1$ with probability $1$ in $\rho_\Phi$, and probabilities $1/2,1/2$ for $+1,-1$ in $\rho_{\mathrm{mix}}$. These are exact predictions of the adopted measurement model, not reports of an apparatus.

## Facts & Assumptions

**Given:** The declared splitting $\mathbb C^2\otimes\mathbb C^2$, the two density operators above, the finite partial trace, the positive entropy scale $k_B>0$ in J/K, the entropy convention $0\log0=0$, and the normal-state Born interpretation.

[A1] [[def-axiom-of-choice]] and [[def-countable-choice]]: retain the choice assumptions of the imported separability, spectral and normal-state supplier closure.

[F1] [[def-nrqm-composites-separable-and-entangled-states]]: separable states are the trace-norm closed convex hull of pure product states, and entangled means outside that set for the declared splitting.

[F2] [[lem-nrqm-composites-pure-state-separability-criterion]]: a pure state is separable exactly when its unit vector is a product vector.

[F3] [[def-qc-partial-trace]], [[thm-qc-partial-trace-characterization-and-basis-independence]], and [[thm-qc-partial-trace-positive-and-trace-preserving]]: the finite partial trace is characterized by the trace pairing, sums the matching diagonal factor indices in a product basis, and preserves positivity and trace.

[F4] [[def-qsm-relative-entropy-domain]] and [[thm-qsm-finite-entropy-composition]]: finite entropy is the spectral sum $-k_B\sum p\log p$, and finite reduced-state entropies obey subadditivity.

[F5] [[post-qsm-normal-measurement-state]]: the adopted sharp-measurement probabilities are $\operatorname{Tr}(\rho P)$ for spectral projections $P$.

## Proof

1.1 Under the retained choice hypotheses [A1], the imported pure-state criterion applies. Suppose $|\Phi\rangle=a\otimes b$, where $a=a_0|0\rangle+a_1|1\rangle$ and $b=b_0|0\rangle+b_1|1\rangle$. Comparing coefficients with $(|00\rangle+|11\rangle)/\sqrt2$ gives $a_0b_0=a_1b_1=1/\sqrt2$ but $a_0b_1=a_1b_0=0$. The first pair makes all four factors nonzero, contradicting the second pair. Thus $|\Phi\rangle$ is not a product vector, so [F2] makes $\rho_\Phi$ entangled under the exact definition [F1]. [given, A1, F1, F2, algebra]

1.2 In the product basis, the partial-trace rule [F3] removes $|00\rangle\langle11|$ and $|11\rangle\langle00|$, since the traced factor basis indices differ, and retains the two diagonal terms. Therefore both reductions of $\rho_\Phi$ are $I_2/2$; positivity and trace preservation in [F3] make them density matrices. The mixture already has only diagonal terms, and tracing either factor likewise gives $I_2/2$. The spectrum of $\rho_\Phi$ is $(1,0,0,0)$, whereas that of $\rho_{\mathrm{mix}}$ is $(1/2,1/2,0,0)$; each marginal has spectrum $(1/2,1/2)$. Substituting these eigenvalues into the entropy definition [F4] gives the displayed three entropy values. In particular both pairs obey the finite subadditivity inequality in [F4]. [given, F3, F4, algebra]

2.1 The mixture is the convex combination with weights $1/2,1/2$ of the two pure product densities $|00\rangle\langle00|$ and $|11\rangle\langle11|$; hence it lies in the finite convex hull in [F1] and is separable. Put $|\Phi_\pm\rangle=(|00\rangle\pm|11\rangle)/\sqrt2$; then $W|\Phi_\pm\rangle=\pm|\Phi_\pm\rangle$, and $W$ vanishes on the orthogonal span of $|01\rangle,|10\rangle$. The Bell state is $|\Phi_+\rangle$, so [F5] assigns probability one to $+1$. Each of $|00\rangle,|11\rangle$ has squared overlap $1/2$ with each of $|\Phi_+\rangle,|\Phi_-\rangle$, so the equal mixture gives probability $1/2$ to each of $+1,-1$ and zero to $0$. [given, F1, F5, algebra] ∎
