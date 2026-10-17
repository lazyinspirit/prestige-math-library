---
id: post-qsm-models-statistics-and-preparation
kind: postulate
title: "Quantum statistics and model equilibrium preparation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - post-nrqm-framework-state-and-composition
  - post-nrqm-framework-observable-and-probability
  - lem-nrqm-composites-density-and-scalar-spectral-probability
  - def-qsm-identical-particle-fock-sectors
  - lem-qsm-fock-occupation-basis-and-car-relations
  - lem-qsm-models-diagonal-occupation-trace
  - def-countable-choice
  - def-axiom-of-choice
dependency_roles:
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  def-qsm-identical-particle-fock-sectors: formulation-prerequisite
  lem-qsm-fock-occupation-basis-and-car-relations: mathematical-premise
  lem-qsm-models-diagonal-occupation-trace: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
physical_scope: "Adoption of NRQM state and Born-measurement terminology on declared QSM Hilbert spaces, a specified self-adjoint Hamiltonian with domain, a chosen symmetric boson or antisymmetric fermion sector, and a canonical or grand-canonical Gibbs preparation only when its trace is positive and finite. General self-adjoint spectral measurements inherit the Axiom of Choice hypothesis of their NRQM supplier; countable diagonal Fock traces inherit AC_omega. P1's fixed-particle-number physical scope is not extended to variable-number grand models. This formulation asserts no spin-statistics theorem, thermalization dynamics, universal equilibrium, empirical observation, or applicability to a particular species."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, §§3.1 and 3.5–3.6"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Lectures 22–25"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/97bfdfb93240e2f48984629ad0c037de_MIT8_333F13_Lec23.pdf"
---

## Postulate

For a declared QSM model, let $I$ be a specified finite or countably infinite mode set with a fixed enumeration and let $\mathfrak h=\ell^2(I)$. The model assigns a nonzero separable complex Hilbert space $\mathcal H$ and declares whether it is a fixed-particle-number sector or the Fock space $\mathcal F_\pm(\mathfrak h)$ of [[def-qsm-identical-particle-fock-sectors]]. By that definition, $\mathcal F_\pm(\mathfrak h)$ is the Hilbert direct sum of the symmetric or antisymmetric $n$-particle tensor sectors for $n\ge0$, including the vacuum sector $\mathbb C$. The assignment is a physical model assumption. The symmetric or antisymmetric sector is selected independently for bosons or fermions; this selection is not derived from the Fock construction or from a nonrelativistic spin-statistics theorem.

The words **pure preparation** and **state** have the exact meanings in clauses (i)–(iii) of [[post-nrqm-framework-state-and-composition]]: a pure preparation is a unit ray in $\mathcal H$, and a general state is a self-adjoint positive trace-class operator $\rho$ with $\operatorname{tr}\rho=1$. These mathematical state definitions are used for the QSM Hilbert spaces declared above; the reference does not extend that NRQM postulate's fixed-particle-number physical scope to a variable-number grand-canonical system. The countable-choice hypothesis is [[def-countable-choice]].

A **sharp measurement** is specified by a densely defined self-adjoint operator $A:D(A)\subseteq\mathcal H\to\mathcal H$, its declared physical unit, and its spectral projection-valued measure $E_A$ on the Borel sets of $\mathbb R$, as in clauses (i)–(iii) of [[post-nrqm-framework-observable-and-probability]]. Here a projection-valued measure is a map from Borel sets to orthogonal projections with $E_A(\varnothing)=0$, $E_A(\mathbb R)=I$, $E_A(B\cap C)=E_A(B)E_A(C)$, and strong countable additivity. The adopted Born law is $\mu^A_\rho(B):=\operatorname{tr}(\rho E_A(B))$ for Borel $B\subseteq\mathbb R$; clauses (a)–(b) of [[lem-nrqm-composites-density-and-scalar-spectral-probability]] give a probability measure under $\mathrm{AC}_\omega$. For a finite unsharp measurement, a specified finite family of bounded effects $0\le F_a\le I$ with $\sum_aF_a=I$ has outcome probabilities $\operatorname{tr}(\rho F_a)$, as in clause (iv) of [[post-nrqm-framework-observable-and-probability]]. The arbitrary self-adjoint spectral construction in that postulate also assumes the Axiom of Choice; any use inherits that exact mathematical premise.

An Axiom of Choice hypothesis [[def-axiom-of-choice]] accompanies the general self-adjoint spectral construction in P2. A model Hamiltonian is a densely defined self-adjoint operator $H:D(H)\subseteq\mathcal H\to\mathcal H$ representing energy, with its domain and energy unit declared. For a canonical preparation, write $H_N$ for the Hamiltonian on the declared fixed-number sector and adopt $\rho=Z^{-1}e^{-\beta H_N}$ only when the spectral-calculus exponential has $0<Z=\operatorname{tr}(e^{-\beta H_N})<\infty$. For a grand-canonical preparation on the declared Fock space, let $|n|:=\sum_jn_j$ for a finite-support occupation configuration $n$ of [[lem-qsm-fock-occupation-basis-and-car-relations]] and define the particle-number operator by $N|n\rangle=|n||n\rangle$ on $D(N)=\{c\in\ell^2(\Omega_\pm):\sum_n|n|^2|c_n|^2<\infty\}$, as in [[lem-qsm-models-diagonal-occupation-trace]]. Require $K_\mu$ to be a specified self-adjoint realization of $H-\mu N$ on a stated domain; self-adjointness of $H$ and $N$ separately does not by itself specify a self-adjoint domain for their difference. For $T>0$ in K, $k_B>0$ in J K$^{-1}$, $\beta=(k_BT)^{-1}$ in J$^{-1}$, and chemical potential $\mu$ in J, adopt $\rho=\Xi^{-1}e^{-\beta K_\mu}$ only when $0<\Xi=\operatorname{tr}(e^{-\beta K_\mu})<\infty$.

For the additive diagonal Fock model, the trace and occupation statements of [[lem-qsm-models-diagonal-occupation-trace]] hold only under that lemma's mode-summability hypotheses and $\mathrm{AC}_\omega$. Under those hypotheses its finite collections of grand-canonical mode occupations are independent. This independence is not asserted for interacting Hamiltonians; conditioning a product grand law on a fixed total number generally couples the modes.

If the spectral law $\mu^H_\rho$ has finite first absolute moment, define the model mean energy by $U(\rho;H):=\int_{\mathbb R}\lambda\,d\mu^H_\rho(\lambda)$. If the nonzero eigenvalues $r_j$ of $\rho$, repeated with multiplicity, satisfy $\sum_j-r_j\log r_j<\infty$, define its von Neumann entropy by $S(\rho):=-k_B\sum_jr_j\log r_j$, with $0\log0:=0$; where finite, this is $-k_B\operatorname{tr}(\rho\log\rho)$. This postulate does not define Helmholtz free energy, grand potential, or other thermodynamic potentials; model-specific items define them with their own hypotheses. Identifying these quantities with measured macroscopic thermodynamic variables requires a separate physical bridge. No thermalization mechanism, empirical value, or law for a particular material is postulated here.
