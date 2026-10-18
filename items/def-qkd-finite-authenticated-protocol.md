---
id: def-qkd-finite-authenticated-protocol
kind: definition
title: Finite authenticated key-distribution protocol
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-qc-density-operator
  - def-qc-quantum-channel
  - def-qc-instrument-and-conditional-state
  - thm-qc-instrument-outcome-law-normalizes
  - thm-qc-instrument-conditional-state-is-density
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Christopher Portmann and Renato Renner, Cryptographic Security of Quantum Key Distribution (2014), §§3.1–3.3
      url: https://arxiv.org/pdf/1409.3525
    - title: M. Ben-Or, M. Horodecki, D. W. Leung, D. Mayers, and J. Oppenheim, The Universal Composable Security of Quantum Key Distribution (2005), §§2 and 4
      url: https://arxiv.org/pdf/quant-ph/0409078
    - title: Joseph M. Renes, Quantum Information Theory, ETH Zürich lecture notes (HS2014; revised 4 February 2015), §8.3
      url: https://edu.itp.phys.ethz.ch/hs15/QIT/renes_lecture_notes14.pdf
    - title: John Watrous, The Theory of Quantum Information (2018), §§2.2.2–2.3.2
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Definition

Fix finite nonempty sets $\mathsf K$ and $\mathsf T$ of key values and public transcripts, respectively, and fix an ordering of each finite set. Choose a symbol $\bot\notin\mathsf K$ and order $\mathsf K\cup\{\bot\}$ by placing $\bot$ after the ordered keys. The full key registers $A$ and $B$ are copies of $Q_{|\mathsf K|+1}$, with computational basis labelled by $\mathsf K\cup\{\bot\}$; the transcript register $T$ is $Q_{|\mathsf T|}$, with basis labelled by $\mathsf T$, using [[def-qc-register-and-computational-basis]]. For accepted-state calculations, identify the subspaces spanned by the key vectors $|a\rangle$, $a\in\mathsf K$, with $Q_{|\mathsf K|}$; operators on these subspaces are embedded in the full key registers by zero extension. A **finite two-party key-distribution protocol** is a finite-round interaction of Alice and Bob in which each quantum register is nonzero and finite-dimensional, every local quantum operation is a quantum channel or finite instrument ([[def-qc-quantum-channel]], [[def-qc-instrument-and-conditional-state]]), and every classical message alphabet is finite. Eve's operation on each insecure quantum transmission is a channel from the sent register and her current memory to the received register and her updated memory. The parties communicate through an ideal authenticated public channel: each message is delivered unchanged to its intended honest recipient, and Eve receives a copy. The transcript $t\in\mathsf T$ records all such messages, including messages that lead the protocol to abort. This is an assumption about the communication resource; it does not prove security of an authentication implementation. Any implementation error must be included in the abort convention or in an additional security parameter.

For each allowed adversarial strategy, the final output is a normalized state, classical in the key registers $A,B$ and transcript register $T$, on $A\otimes B\otimes T\otimes E$, where $E$ is Eve's retained finite-dimensional quantum system. Both honest parties output the common abort symbol $\bot$ on an abort. In the ordered product basis this state has the form

$$\rho_{ABTE}=\sum_{t\in\mathsf T}|\bot,\bot,t\rangle\langle\bot,\bot,t|\otimes\omega_E^{\bot,t}+\sum_{a,b\in\mathsf K,\ t\in\mathsf T}|a,b,t\rangle\langle a,b,t|\otimes\omega_E^{a,b,t},$$

where every block $\omega_E^{\bot,t}$ and $\omega_E^{a,b,t}$ is nonnegative and the sum of their traces is $1$. The trace of each block is the joint probability of its displayed classical labels. All registers and tensor factors retain the displayed order. The transcript is included separately from $E$ so that secrecy below explicitly conditions on the public messages as well as Eve's quantum information.
