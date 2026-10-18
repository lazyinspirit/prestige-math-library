---
id: cex-it-ensemble-holevo-information-is-not-measured-by-a-fixed-povm
kind: counterexample
title: A fixed POVM need not attain ensemble Holevo information
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-it-classical-quantum-state-and-holevo-information
  - def-it-finite-mutual-information
  - def-qc-povm-and-outcome-law
  - thm-it-holevo-measurement-bound
  - def-qc-density-operator
  - thm-complex-spectral-theorem-for-normal-endomorphisms
proof_strategy: direct
axiom_use: "No choice axiom is used; all selections and probability spaces are finite, and analytic existence uses the stated finite-dimensional or real-completeness hypotheses."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, §11.9.2 and Chapter 20"
      url: "https://arxiv.org/pdf/1106.1445v8"
    - title: "John Watrous, The Theory of Quantum Information, §§5.3.3 and 8.1.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Statement refuted

Every fixed POVM applied to an ensemble extracts its full [[def-it-classical-quantum-state-and-holevo-information|Holevo information]].

## Facts & Assumptions

**Given:** The equiprobable ensemble of the computational basis states $|0\rangle,|1\rangle$ on a qubit, and the fixed $X$-basis POVM with effects $|+\rangle\langle+|,|-\rangle\langle-|$, where $|\pm\rangle:=(|0\rangle\pm|1\rangle)/\sqrt2$.

[F1] [[def-it-classical-quantum-state-and-holevo-information]]: the ensemble Holevo information is the entropy of the average state minus the average output entropy.

[F2] [[def-it-finite-mutual-information]]: for finite classical variables, mutual information measures dependence and equals zero when the joint law is the product of its marginals.

[F3] [[def-qc-povm-and-outcome-law]]: the outcome probability on state $\rho$ for POVM effect $E_y$ is $\operatorname{tr}(\rho E_y)$.

[F4] [[thm-it-holevo-measurement-bound]]: every finite POVM has classical mutual information at most the ensemble Holevo information.

[F5] [[def-qc-density-operator]] and [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: the pure qubit basis projectors and their average $I/2$ are density operators with the displayed spectra.

## Counterexample



**Proof technique:** direct.

1.1 The average state is $I/2$, while each individual state is pure. By [F1] and [F5], its Holevo information is $S(I/2)-0=\ln2$ nats. [F1, F5, given, algebra]

2.1 For either input $|0\rangle$ or $|1\rangle$, the squared inner products with $|+\rangle$ and $|-\rangle$ are both $1/2$ by [F3]. Hence every joint input-output probability is $1/4$, and each marginal probability is $1/2$. The finite mutual-information sum in [F2] is therefore $\sum_{x,y}(1/4)\ln((1/4)/((1/2)(1/2)))=0$. This is strictly below $\ln2$ from step 1.1, while still satisfying the Holevo upper bound [F4]. [F2, F3, F4, step 1.1, algebra] ∎

