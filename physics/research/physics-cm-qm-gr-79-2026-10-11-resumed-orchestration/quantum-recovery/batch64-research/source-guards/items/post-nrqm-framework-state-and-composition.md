---
id: post-nrqm-framework-state-and-composition
kind: postulate
title: "State and composition postulate P1: Hilbert spaces, preparations and composite systems"
status: draft
origin: session
domain: physics
dependency_level: 2
deps: [thm-trace-is-absolutely-convergent-and-basis-independent, thm-trace-class-is-a-two-sided-banach-operator-ideal, def-hilbert-space, thm-separable-hilbert-space-has-a-countable-orthonormal-basis, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-rank-one-operator-calculus, lem-nrqm-composites-density-and-scalar-spectral-probability, def-trace-class-operator, def-trace-of-a-trace-class-operator, def-countable-choice]
dependency_roles:
  thm-trace-is-absolutely-convergent-and-basis-independent: mathematical-premise
  thm-trace-class-is-a-two-sided-banach-operator-ideal: mathematical-premise
  def-hilbert-space: mathematical-premise
  thm-separable-hilbert-space-has-a-countable-orthonormal-basis: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-rank-one-operator-calculus: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  def-trace-class-operator: mathematical-premise
  def-trace-of-a-trace-class-operator: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The state and composition assumptions of the nonrelativistic quantum framework: assignment of a nonzero separable complex Hilbert space to each system of a declared sector, identification of pure preparations with unit rays and of general preparations with density operators, statistical mixing, and composition of independent distinguishable subsystems by the completed Hilbert tensor product. Adoption is a model assumption, not a derived or empirical result; the item excludes superselection rules, identical-particle sectors and any relativistic or field-theoretic structure, which are separate assumptions."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 1.1-1.2, printed pages 3-10 (PDF pages 6-13): the wave function, the Born probability, normalization and global phase equivalence of states"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.3, printed pages 7-15 (PDF pages 15-23): amplitudes, kets and the vector-space description of quantum states"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 1.4, printed pages 45-47 (PDF pages 57-59): the tensor product of Hilbert spaces for composite systems"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the framework, for systems in the declared massive-matter sector, the following statements about states and their composition. Assume throughout the Axiom of Countable Choice ([[def-countable-choice]]), which is the choice hypothesis of the mathematical suppliers cited below.

**(i) State space.** To each physical system of the sector the model assigns a complex Hilbert space $H$ that is nonzero and separable: a complex Hilbert space in the sense of [[def-hilbert-space]] which admits a sequence whose range is dense in $H$, so that the hypothesis of [[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]] holds and $H$ has a finite or countable orthonormal basis. The assignment of a Hilbert space to a physical system is a model assumption; the linear structure used to combine descriptions mathematically is not an empirical claim. The physical system to which $H$ is assigned, and the sector in which the assignment is made, are declared with it.

**(ii) Pure preparations.** A **pure preparation** of the system is a unit ray $[\psi]=\{z\psi:z\in\mathbb C\setminus\{0\}\}$ of a vector $\psi\in H$ with $\|\psi\|=1$; that is, two nonzero vectors describe the same pure preparation exactly when they differ by a nonzero complex factor. The zero vector is not a state and no preparation is assigned to it: the normalization $\|\psi\|=1$ is part of the assignment. The ray allows arbitrary nonzero rescaling; between unit representatives the factor has modulus one and is a **global phase**, which has no observable consequence (P2). The rank-one operator $T_{\psi,\psi}$ of [[lem-nrqm-composites-rank-one-operator-calculus]] is the density operator associated with the ray of $\psi$.

**(iii) General preparations and mixing.** A general preparation of the system is a **density operator**: a self-adjoint positive trace-class operator $\rho$ on $H$ with $\operatorname{tr}\rho=1$ ([[def-trace-class-operator]], [[def-trace-of-a-trace-class-operator]], [[lem-nrqm-composites-density-and-scalar-spectral-probability]] clause (a)). Pure preparations are the special case $\rho=T_{\psi,\psi}$ with $\|\psi\|=1$. A **statistical mixture** of preparations $\rho_{n}$ with weights $w_{n}\ge0$, $\sum_{n}w_{n}=1$, is the trace-norm convergent sum $\rho=\sum_{n}w_{n}\rho_{n}$ as follows directly in the trace-class Banach space ([[thm-trace-class-is-a-two-sided-banach-operator-ideal]]): each density has trace norm one, so $\sum_n\|w_n\rho_n\|_1=1$ gives trace-norm convergence. Every partial sum is positive; operator-norm convergence preserves its nonnegative quadratic forms, and continuity of trace gives $\operatorname{tr}\rho=\sum_nw_n=1$ ([[thm-trace-is-absolutely-convergent-and-basis-independent]]). Thus the limit is again a density operator, without requiring the components to be orthogonal pure states. The weights are a classical preparation uncertainty and are not amplitudes. Distinct weighted ensembles of pure states may define the same $\rho$.

**(iv) Composition.** Two independent distinguishable subsystems with state spaces $H_{A}$ and $H_{B}$ are composed by the completed Hilbert tensor product $H_{A}\widehat\otimes H_{B}$ of [[lem-nrqm-composites-hilbert-tensor-construction]]. Product preparations $\psi_{A}\otimes\psi_{B}$ are the special case of preparations in which each subsystem has its own specified preparation; general composite preparations are linear combinations and mixtures and need not factor. A quantity of subsystem $A$ alone is represented on the composite by an operator of the form $A\otimes I_{B}$ and a quantity of $B$ alone by $I_{A}\otimes B$, in the sense of [[lem-nrqm-composites-bounded-tensor-maps]] (bounded case; unbounded local operators are treated where they occur). The existence of the completed tensor product is mathematics; the assignment of that product to a composite physical system is the physical assumption here.

**(v) Restrictions that are separate assumptions.** Restrictions of the state space by superselection rules, identical-particle symmetry sectors, and the replacement of the tensor product by more general algebraic structures are not consequences of the clauses above: where such a restriction is used it is adopted separately, and the identical-species sectors are the subject of the postulate P6 of this page.

**(vi) Status.** Clauses (i)-(v) are adopted assumptions of the model within its declared sector. They are not derived from experiment, and they do not assert that a physical system is exactly described by such a Hilbert space; no numerical measurement is recorded. The compatibility of the framework with observation is a question about fully specified models and reported data, in the sense of P7.

## Status and scope

- **Sector.** The assignment is made for systems of nonrelativistic massive matter with a fixed finite particle number, each system treated once and for all with a declared state space; quantum field theory, gravity and systems whose particle number is not fixed are outside this postulate.
- **No derivation.** The state space, the ray equivalence and the tensor composition are adopted. In particular the tensor composition is not a theorem about physical composition, and the nonuniqueness of mixtures recorded in clause (iii) is a mathematical property of the adopted objects, not an empirical claim.
- **Choice.** The cited mathematical suppliers assume Countable Choice; all consequences of this postulate that use them inherit that assumption, and any choice-free special case must be proved separately where it is claimed.
- **Composition is not a measurement postulate.** Clause (iv) fixes how descriptions of independent subsystems are combined; it asserts nothing about interactions, correlations or measurements of the composite.
