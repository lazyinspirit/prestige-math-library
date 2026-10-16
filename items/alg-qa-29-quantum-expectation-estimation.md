---
id: alg-qa-29-quantum-expectation-estimation
kind: algorithm
title: "Amplitude-estimation expectation estimator"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - def-qa-29-coherent-sampler
  - lem-qa-29-coherent-sampler-outcome-law
  - def-qa-29-expectation-estimation-task
  - alg-qa-13-phase-estimation-amplitude-estimation
  - thm-qa-13-amplitude-estimation-guarantee
  - thm-qa-13-amplitude-estimation-query-complexity
  - alg-qa-13-median-confidence-estimation
  - thm-qa-13-median-confidence-guarantee
  - thm-qa-13-median-confidence-query-cost
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-dirac-notation-conversion
  - def-qc-circuit-cost-model
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ashley Montanaro, Quantum speedup of Monte Carlo methods, Theorem 3"
      url: "https://arxiv.org/pdf/1504.06987v3"
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, Section 4"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Section 19.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
verification:
  precheck: n/a
---

## Definition

**Input.** A finite expectation-estimation task with an exact encoded observable $g:X\to[a,b]$, a coherent sampler $V$ for its law, rational target $\varepsilon>0$, and rational failure probability $0<\delta<1$. For $a<b$, require $\varepsilon\le b-a$. The supplied access model must include every forward, inverse, controlled, value, predicate, and reflection operation that the chosen QA13 amplitude-estimation circuit invokes.

If $a=b$, return $a$. Otherwise compute the exact affine value
$$q(x)=\frac{g(x)-a}{b-a}\in[0,1].$$
Append a good flag to the coherent sampler. Reversibly compute $q(x)$ in the declared value workspace, apply the supplied one-qubit rotation
$$|0\rangle\longmapsto\sqrt{1-q(x)}|0\rangle+\sqrt{q(x)}|1\rangle$$
controlled by the sample/value registers, and uncompute all scratch used only for $q$. Let $A_q$ denote the resulting state-preparation unitary, including $V$ and the controlled rotation; let $P_{\rm good}$ project onto flag $|1\rangle$. Run the unchanged median-confidence estimator [[alg-qa-13-median-confidence-estimation]] on $(A_q,P_{\rm good})$ with amplitude tolerance $\eta=\varepsilon/(b-a)$ and failure probability $\delta$, and call its estimate $\widetilde q$. Return
$$\widetilde\mu=a+(b-a)\widetilde q.$$

For $a=b$, the exact-return branch has no quantum call. When $a<b$, the input is a costed finite circuit/oracle description. Charge each use of $A_q$, $A_q^\dagger$, controlled versions, the good and initial-state reflections, value decoding, reversible arithmetic and uncomputation, the controlled rotation and its precision, phase estimation, state preparation, gates, width, ancillas, and classical output processing according to [[def-qc-circuit-cost-model]]. No operation is free because it is described by the law $p$ or observable $g$.
