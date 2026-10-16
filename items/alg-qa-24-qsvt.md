---
id: alg-qa-24-qsvt
kind: algorithm
title: Quantum singular-value transformation circuit
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qa-24-pue-svd-data
  - def-qa-24-singular-value-transform
  - def-qa-23-qsp-admissible-polynomial-pair
  - thm-qa-23-qsp-phase-factorization
  - def-qa-23-qsp-signal-sequence
  - def-qc-reflection
  - def-qc-circuit-denotational-semantics
  - def-qc-dirac-notation-conversion
  - thm-qc-reflection-unitary-involution
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
axiom_use: "None; this is a finite sequence of supplied finite-dimensional unitary operations."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Definitions 15 and Lemma 19"
      url: https://arxiv.org/pdf/1806.01838
      locator: "PDF pp. 17 and 20–21."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.3"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Printed pp. 146–147; PDF pp. 154–155."
---

## Definition

**Inputs.** A finite-dimensional complex-inner-product space $H$, a unitary $U:H\to H$, orthogonal projections $\Pi_R,\Pi_L$, an integer $d\ge0$, and an exact real phase list $\Phi=(\phi_0,\ldots,\phi_d)$. The input access contract states separately whether $U$, $U^*$, controlled-$U$, and controlled-$U^*$ are supplied and gives their individual costs. The scalar signal sequence is $U_\Phi(x)=Z(\phi_0)\prod_{j=1}^{d}(W_R(x)Z(\phi_j))$ from [[def-qa-23-qsp-signal-sequence]], with its admissible polynomial pair from [[def-qa-23-qsp-admissible-polynomial-pair]]. A desired polynomial target is supplied with a certificate that $\Phi$ realizes its scalar polynomial; generation of $\Phi$ is a separate classical/circuit input.

**Output.** The procedure returns the finite unitary sequence below and uses its compression from $H_R=\operatorname{ran}(\Pi_R)$ to $H_L=\operatorname{ran}(\Pi_L)$ for odd $d$, or from $H_R$ to itself for even $d$. No measurement or state-preparation circuit is implicit in this block description.

**Instructions.** For $d\ge0$, set the current side to $R$ and apply the projector phase $e^{i\phi_d(2\Pi_R-I)}$. For $j=d-1,d-2,\ldots,0$, apply $U$ and switch the current side from $R$ to $L$ if it is $R$; otherwise apply $U^*$ and switch from $L$ to $R$. Then apply $e^{i\phi_j(2\Pi_{\mathrm{current}}-I)}$. Thus there are $d$ alternating signal calls and $d+1$ projector-phase operations; $d=0$ has no signal call and consists only of the phase at $\Pi_R$.

For a real target polynomial, run the two phase lists $\Phi$ and $-\Phi$ in coherent control branches, with the control initialized in $|+\rangle$, and take the $|+\rangle$-to-$|+\rangle$ block. The procedure uses the reflected signal convention $W_R$ throughout. If a circuit is built through the alternative SU(2) convention, its control-dependent scalar phase must be retained as a relative phase. The exact block action, the real-part extraction, and the implementation costs are established in the separate theorem items on this page. Every phase list, inverse call, controlled call, phase rotation, and finite-gate compilation is supplied or charged separately.

## Remarks

When the input is a bounded real target polynomial, its completion and phase-generation steps are supplied separately; finite bit-time and gate-synthesis bounds are not inferred from a bare phase list.
