---
id: post-nrqm-framework-identical-particles-and-spin
kind: postulate
title: "Identical-particle and spin assignments P6: permutation sectors and
  finite-spin representations"
status: published
origin: session
domain: physics
dependency_level: 6
deps:
  [
    lem-nrqm-composites-hilbert-tensor-construction,
    lem-nrqm-composites-bounded-tensor-maps,
    lem-nrqm-composites-permutation-sector-projections,
    prop-nrqm-orbital-and-spin-finite-spin-matrices,
    thm-nrqm-orbital-and-spin-symmetric-power-su2-representation,
    def-countable-choice,
    post-nrqm-framework-state-and-composition,
    def-nrqm-framework-quantities-and-units
  ]
dependency_roles:
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-nrqm-orbital-and-spin-symmetric-power-su2-representation: mathematical-premise
  def-countable-choice: mathematical-premise
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The identical-particle and spin assignments of the framework:
  labels as tensor factor labels, adoption of the symmetric or antisymmetric
  permutation sector for a declared species, and assignment of a finite-spin
  SU(2) representation with spin operators. Adoption is a model assumption;
  exclusion and permutation invariance are conditional on the adopted sector,
  the relativistic spin-statistics theorem is not asserted, and no species
  assignment is claimed to be derived."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 10,
        Section 10.1, printed pages 226-230 (PDF pages 234-238): identical
        particles, symmetric and antisymmetric states and the exclusion rule"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin
        One-Half, Bras, Kets, and Operators', Sections 2-3, printed pages 7-16:
        spin one-half states, Pauli matrices and their algebra"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec\
        548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the framework the following assignments for identical species and for spin. Assume the Axiom of Countable Choice ([[def-countable-choice]]).

**(i) Labels and sectors.** For $n$ particles of one species the model forms the $n$-fold completed tensor power $H^{\otimes n}$ of the one-particle space ([[lem-nrqm-composites-hilbert-tensor-construction]]), whose tensor position factors are mathematical labels and not observable particle identities. For a declared **bosonic species** the model uses the symmetric sector $S^{n}H$, the range of the symmetrizing projection $P_{n}^{+}$, and for a declared **fermionic species** the antisymmetric sector $\Lambda^{n}H$, the range of the alternating projection, both as constructed in [[lem-nrqm-composites-permutation-sector-projections]]. The sector is part of the declared species assignment; the permutation invariance of states in the sector and the resulting exclusion statement for fermions are conditional consequences read off that projection, not assumptions added to it. A bounded quantity $A$ on $H^{\otimes n}$ is restricted to an adopted sector only when it preserves that sector; in particular, $AU_\pi=U_\pi A$ for every permutation implies $AP_n^{\pm}=P_n^{\pm}A$ by the finite projection sums. Bounded tensor maps construct ambient operators; an operator on a single labelled factor need not preserve either sector.

**(ii) Spin.** For a declared **spin label** $s\in\{0,\tfrac12,1,\tfrac32,\dots\}$ the model assigns the internal factor $V_s=\mathbb C^{2s+1}$ with the standard inner product and basis $(e_m)_{m=-s,-s+1,\ldots,s}$. Here $SU(2)=\{W\in M_2(\mathbb C):W^*W=I_2,\det W=1\}$ with its matrix topology. For $s>0$ put $n=2s\ge1$ and let $F_s:\mathcal S_n\to V_s$ be the unitary identification $F_sv_k=e_{s-k}$ of [[thm-nrqm-orbital-and-spin-symmetric-power-su2-representation]]. The assigned strongly continuous unitary representation is $D_s(W)=F_sU_n(W)F_s^{-1}$. For $s=0$ put $D_0(W)=I_{\mathbb C}$ for every $W$, the trivial one-dimensional representation with zero generators. The spin operators are $S_i=\hbar J_i$ with the self-adjoint endomorphisms of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]], satisfying
$$[S_i,S_j]=i\hbar\sum_k\epsilon_{ijk}S_k,\qquad S^2=S_x^2+S_y^2+S_z^2=\hbar^2s(s+1)I.$$
For $A_i(t)=\cos(t/2)I_2-i\sin(t/2)\sigma_i$, the curve $D_s(A_i(t))$ has infinitesimal generator $-iJ_i$, including $s=0$. This specifies the internal $SU(2)$ action. If a spatial Hilbert factor $H_{\mathrm{sp}}$ is separately assigned a strongly continuous unitary $SU(2)$ representation $R_{\mathrm{sp}}$, the combined action is explicitly $W\mapsto R_{\mathrm{sp}}(W)\otimes D_s(W)$ on $H_{\mathrm{sp}}\widehat\otimes V_s$: its representation law follows from bounded tensor composition, and continuity follows on elementary tensors and then by density and the unitary norm bound. The existence and physical interpretation of that spatial action require the separate assignment. The spin label and representation are species model assignments; the internal factor is not a rotating body or a spatial coordinate.

**(iii) Species parameters.** The mass, charge, spin label, statistics and any magnetic coupling constant of a species are empirical model parameters: they enter the model as declared values with uncertainty, and no value is derived from the Hilbert-space formalism. The assignment of a sector (symmetric or antisymmetric) to a species is likewise a model assignment, tested through the consequences computed with it.

**(iv) What is not asserted.** The relativistic spin-statistics theorem is not a theorem of this postulate set: the connection between spin and permutation sector adopted here is a nonrelativistic model assignment, and any relativistic statement about it belongs to a framework that adopts relativistic assumptions. Similarly, the postulate asserts nothing about the internal structure, compositeness or interactions of a species beyond the declared parameters.

**(v) Status.** Clauses (i)-(iv) are adopted assumptions of the framework for declared species. They record the sectors and the spin representations used by the model and the empirical status of the species parameters; they make no claim that the model assignment is exact for any species and record no measurement.

## Status and scope

- **Sector and statistics.** The model does not derive from a sector that a species is bosonic or fermionic in nature; it declares the sector. Consequences such as the exclusion of coincident fermionic occupied states are conditional on the adopted antisymmetric sector.
- **Finite spin only.** The internal factor is finite-dimensional, with the representation displayed above. Infinite-dimensional internal structures and relativistic spinor bundles are separate model assumptions.
- **Spin and orbital angular momentum are distinct.** The operators $S_{i}$ of this postulate act on the internal factor; orbital generators act on the spatial factor, and the two are combined only through stated tensor constructions.
