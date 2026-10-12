---
id: post-nrqm-framework-identical-particles-and-spin
kind: postulate
title: "Identical-particle and spin assignments P6: permutation sectors and finite-spin representations"
status: draft
origin: session
domain: physics
dependency_level: 4
deps: [lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-permutation-sector-projections, prop-nrqm-orbital-and-spin-finite-spin-matrices, thm-nrqm-orbital-and-spin-symmetric-power-su2-representation, def-countable-choice]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-nrqm-orbital-and-spin-symmetric-power-su2-representation: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The identical-particle and spin assignments of the framework: labels as tensor factor labels, adoption of the symmetric or antisymmetric permutation sector for a declared species, and assignment of a finite-spin SU(2) representation with spin operators. Adoption is a model assumption; exclusion and permutation invariance are conditional on the adopted sector, the relativistic spin-statistics theorem is not asserted, and no species assignment is claimed to be derived."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 10, Section 10.1, printed pages 226-230 (PDF pages 234-238): identical particles, symmetric and antisymmetric states and the exclusion rule"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin One-Half, Bras, Kets, and Operators', Sections 2-3, printed pages 7-16: spin one-half states, Pauli matrices and their algebra"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the framework the following assignments for identical species and for spin. Assume the Axiom of Countable Choice ([[def-countable-choice]]).

**(i) Labels and sectors.** For $n$ particles of one species the model forms the $n$-fold completed tensor power $H^{\otimes n}$ of the one-particle space ([[lem-nrqm-composites-hilbert-tensor-construction]]), whose tensor position factors are mathematical labels and not observable particle identities. For a declared **bosonic species** the model uses the symmetric sector $S^{n}H$, the range of the symmetrizing projection $P_{n}^{+}$, and for a declared **fermionic species** the antisymmetric sector $\Lambda^{n}H$, the range of the alternating projection, both as constructed in [[lem-nrqm-composites-permutation-sector-projections]]. The sector is part of the declared species assignment; the permutation invariance of states in the sector and the resulting exclusion statement for fermions are conditional consequences read off that projection, not assumptions added to it, and local quantities act within the sector through the bounded tensor maps of [[lem-nrqm-composites-bounded-tensor-maps]].

**(ii) Spin.** For a declared **spin label** $s\in\{0,\tfrac12,1,\tfrac32,\dots\}$ the model assigns to the internal factor $\mathbb C^{2s+1}$ the unitary representation of $SU(2)$ of dimension $2s+1$: the spin operators are $S_{i}:=\hbar\,J_{i}$ with the endomorphisms $J_{i}$ of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]], which are self-adjoint on $\mathbb C^{2s+1}$ with
$$[S_{i},S_{j}]=i\hbar\sum_{k}\epsilon_{ijk}S_{k},\qquad S^{2}:=S_{x}^{2}+S_{y}^{2}+S_{z}^{2}=\hbar^{2}s(s+1)\,I,$$
and the representation of a rotation diag$(R)$ on a mixed state space is obtained by combining the spatial and internal factors as in [[thm-nrqm-orbital-and-spin-symmetric-power-su2-representation]]. The spin label is a declared parameter of the species model; the representation assignment is not a consequence of the spatial one-particle structure, and no claim is made that the internal factor is a rotating body or a spatial coordinate.

**(iii) Species parameters.** The mass, charge, spin label, statistics and any magnetic coupling constant of a species are empirical model parameters: they enter the model as declared values with uncertainty, and no value is derived from the Hilbert-space formalism. The assignment of a sector (symmetric or antisymmetric) to a species is likewise a model assignment, tested through the consequences computed with it.

**(iv) What is not asserted.** The relativistic spin-statistics theorem is not a theorem of this postulate set: the connection between spin and permutation sector adopted here is a nonrelativistic model assignment, and any relativistic statement about it belongs to a framework that adopts relativistic assumptions. Similarly, the postulate asserts nothing about the internal structure, compositeness or interactions of a species beyond the declared parameters.

**(v) Status.** Clauses (i)-(iv) are adopted assumptions of the framework for declared species. They record the sectors and the spin representations used by the model and the empirical status of the species parameters; they make no claim that the model assignment is exact for any species and record no measurement.

## Status and scope

- **Sector and statistics.** The model does not derive from a sector that a species is bosonic or fermionic in nature; it declares the sector. Consequences such as the exclusion of coincident fermionic occupied states are conditional on the adopted antisymmetric sector.
- **Finite spin only.** The internal factor is finite-dimensional, with the representation displayed above. Infinite-dimensional internal structures and relativistic spinor bundles are separate model assumptions.
- **Spin and orbital angular momentum are distinct.** The operators $S_{i}$ of this postulate act on the internal factor; orbital generators act on the spatial factor, and the two are combined only through stated tensor constructions.
