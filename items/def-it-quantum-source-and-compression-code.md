---
id: def-it-quantum-source-and-compression-code
kind: definition
title: Finite IID quantum source and compression code
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-it-von-neumann-entropy
  - def-qc-density-operator
  - def-qc-quantum-channel
  - thm-qc-purification-existence-and-unitary-equivalence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Chapter 18 §§18.1–18.2"
      url: "https://arxiv.org/pdf/1106.1445v8"
    - title: "John Watrous, The Theory of Quantum Information, §5.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Definition

Let $H_A$ be a nonzero finite-dimensional complex inner-product space and let $\rho$ be a density operator ([[def-qc-density-operator]]) on $H_A$. The finite IID quantum source with state $\rho$ emits the block state $\rho^{\otimes n}$ on $H_A^{\otimes n}$ at blocklength $n\ge1$.

An $(n,M)$ **quantum compression code** for $\rho$ consists of a finite-dimensional code space $H_C$ with $\dim H_C=M\ge1$, a quantum channel ([[def-qc-quantum-channel]]) $\mathcal E:\mathcal L(H_A^{\otimes n})\to\mathcal L(H_C)$, and a quantum channel $\mathcal D:\mathcal L(H_C)\to\mathcal L(H_A^{\otimes n})$. Its **squared entanglement fidelity** is

$$F_e^{(n)}:=\langle\phi|(\operatorname{id}_R\otimes(\mathcal D\circ\mathcal E))(|\phi\rangle\langle\phi|)|\phi\rangle,$$

where $H_R$ is any finite-dimensional reference space supporting the chosen unit-vector purification $|\phi\rangle$ of $\rho^{\otimes n}$ on $H_R\otimes H_A^{\otimes n}$. The value is independent of the chosen finite purification by the isometric equivalence of [[thm-qc-purification-existence-and-unitary-equivalence]]. A sequence of codes is reliable when $F_e^{(n)}\to1$. The code's rate is $n^{-1}\ln M$ nats per source letter, equivalently $n^{-1}\log_2 M$ qubits per source letter. The entropy threshold in these units is $S(\rho)$ nats or $S_2(\rho):=S(\rho)/\ln2$ qubits, where $S$ is the entropy of [[def-it-von-neumann-entropy]].
