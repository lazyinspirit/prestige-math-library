---
id: ex-qft-qed-nonempty-gauss
kind: example
title: "Explicit physical electric/occupation basis state"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - lem-qft-lattice-gauss-projection
dependency_roles:
  lem-qft-lattice-gauss-projection: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "John B. Kogut, An Introduction to Lattice Gauge Theory and Spin Systems, Reviews of Modern Physics 51 (1979)"
      url: "https://chimera.roma1.infn.it/ENZO/FC/ESTRATTI/DUALITY/kogut1979.pdf"
      locator: "Complete 55-page review; relevant Hamiltonian and Gauss-law treatment in §VI.C, printed pp. 694–696. The Rome1 PDF is byte-identical to the previously retrieved full text."
    - title: "Patrick Emonts and Erez Zohar, Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories, SciPost Physics Lecture Notes 12 (2020)"
      url: "https://arxiv.org/html/1807.01294"
      locator: "Full-text arXiv HTML rendition; §§2.1–2.4, printed pp. 3–8. The corresponding complete 32-page PDF was also retrieved and read."
generation:
  role: example
---

## Example

Take two vertices $v_1,v_2$, one oriented link $e:v_1\to v_2$, one fermion mode at each vertex, and background $b_{v_1}=1,b_{v_2}=0$. Let $\psi$ be the tensor of the zero-electric Fourier vector and the occupation vector with the $v_1$ mode occupied and the $v_2$ mode empty. This is a concrete nonzero state in the fixed-background physical sector.



## Facts & Assumptions

**Given:** The conditional finite-graph CAR model, one oriented link, and the chosen backgrounds.

[F1] [[lem-qft-lattice-gauss-projection]]: for the conditional compact-rotor/CAR data, a normalized Fourier/occupation basis vector lies in $\mathcal H_{\rm phys}=\bigcap_x\ker G_x$ exactly when every integer Gauss label $\gamma_x$ is zero, where $\gamma_x$ is outgoing link label minus incoming link label minus site occupation plus $b_x$.

## Verification

**Given:** [F1] and the stated graph, occupation, and link labels.

1.1 The vector $\psi$ is a normalized Fourier/occupation basis vector: its link label is $n_e=0$, its site occupations are $n_{v_1}=1,n_{v_2}=0$, and these occupations lie in the finite fermion Fock basis. [F1, given]

2.1 At $v_1$, $\gamma_{v_1}=n_e-(n_{v_1}-b_{v_1})=0-(1-1)=0$. At $v_2$, $\gamma_{v_2}=-n_e-(n_{v_2}-b_{v_2})=0-(0-0)=0$. Thus every Gauss operator annihilates $\psi$, so $\psi\in\mathcal H_{\rm phys}$ and the physical projection is nonzero. [F1, step 1.1, algebra] ∎
