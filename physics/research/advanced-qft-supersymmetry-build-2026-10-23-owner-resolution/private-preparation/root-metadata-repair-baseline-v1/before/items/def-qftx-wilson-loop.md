---
id: def-qftx-wilson-loop
kind: definition
title: Wilson loop on a finite lattice
status: draft
origin: session
dependency_level: 2
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega, inherited through the finite lattice data supplier."
deps:
  - def-countable-choice
  - def-finite-dimensional-representation-of-a-group-over-a-field
  - def-qftx-nonabelian-lattice-gauge-data
dependency_roles:
  def-countable-choice: mathematical-premise
  def-finite-dimensional-representation-of-a-group-over-a-field: mathematical-premise
  def-qftx-nonabelian-lattice-gauge-data: mathematical-premise
justified_by:
  - lem-qftx-wilson-loop-gauge-invariance
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "H. B. Meyer, Lattice QCD: A Brief Introduction, in Lattice QCD for Nuclear Physics, Lecture Notes in Physics 889"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf"
      locator: "§§1.2.3–1.2.4, printed pp. 11–14, for link transport, ordered plaquette products and gauge-invariant traces."
    - title: "Robert Lohmayer, Eigenvalue Distributions of Wilson Loops"
      url: "https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf"
      locator: "§3.5.5, printed pp. 48–51, for the finite-lattice Wilson loop and its trace convention."
verification:
  precheck: pending
---

## Definition

Assume $\mathrm{AC}_\omega$ and take finite oriented lattice data with compact group $G$, link variables $U_e$, and vertex action $U_e\mapsto h_{s(e)}U_eh_{t(e)}^{-1}$. Fix a positive-dimensional finite-dimensional complex Hermitian space $(W,h)$ and a smooth group homomorphism $\rho:G\to U(W,h)$, where $U(W,h)$ is the group of invertible complex-linear maps preserving $h$; put $d=\dim_{\mathbb C}W\geq1$. A **based closed lattice loop** is a finite edge word $C=(e_1,\ldots,e_\ell)$ of integer length $\ell\geq0$ with a chosen base vertex $v_0$, such that consecutive endpoints match and, when $\ell>0$, the first and last endpoints are $v_0$; when $\ell=0$, the loop consists only of $v_0$. Its ordered holonomy is $U_C:=U_{e_1}\cdots U_{e_\ell}$, in traversal order with the first edge on the left; for $\ell=0$, set $U_C=e$. The reversed word is $C^{-1}=(\bar e_\ell,\ldots,\bar e_1)$. The **normalized Wilson loop** is

$$
W_\rho(C;U):=\frac{1}{d}\operatorname{Tr}_W\!\big(\rho(U_C)\big).
$$

The loop is dimensionless. Changing the base vertex by a cyclic rebase conjugates $U_C$ and leaves $W_\rho$ unchanged; reversing the loop gives $W_\rho(C^{-1};U)=\overline{W_\rho(C;U)}$. On a fixed finite lattice with a specified finite product Haar probability and bounded action, $\langle W_\rho(C)\rangle_\Lambda$ is the ordinary normalized finite-dimensional integral. No renormalized continuum Wilson loop or continuum limit is defined here.

## Definition references

[[def-qftx-nonabelian-lattice-gauge-data|Finite oriented lattice, link variables, and vertex gauge action]]

[[def-finite-dimensional-representation-of-a-group-over-a-field|Finite-dimensional group representation]]

[Meyer, §§1.2.3–1.2.4, printed pp. 11–14, on link variables, plaquette products, and traced closed loops](https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf)

[Lohmayer, §3.5.5, printed pp. 48–51, on Wilson loops and their finite-lattice expectation](https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf)
