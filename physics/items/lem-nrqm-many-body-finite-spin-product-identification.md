---
id: lem-nrqm-many-body-finite-spin-product-identification
kind: lemma
domain: mathematics
title: "Finite spin components of an N-fold spatial tensor product"
status: published
origin: session
dependency_level: 4
deps: [def-sobolev-space-wkp-and-its-norm, lem-nrqm-composites-euclidean-l2-product-unitary, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-permutation-sector-projections, lem-nrqm-kinematics-component-valued-wavefunction-identifications, thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness, def-countable-choice]
dependency_roles:
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  lem-nrqm-kinematics-component-valued-wavefunction-identifications: mathematical-premise
  thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, Section 1.4 (finite tensor products and orthogonal sums); local derivation from the declared suppliers"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

**Slot convention.** For $\ell\ge1$, $S_\ell$ acts on $\{0,\dots,\ell-1\}$ as in [[lem-nrqm-composites-permutation-sector-projections]]. On one-based tuple positions use $\widehat{\pi}(k):=1+\pi(k-1)$ for $1\le k\le\ell$. Conjugation by $k\mapsto k-1$ gives $\widehat{\pi\sigma}=\widehat{\pi}\circ\widehat{\sigma}$ and $\widehat{\pi^{-1}}=\widehat{\pi}^{-1}$; thus the supplier's tensor action becomes $U_\pi(v_1\otimes\cdots\otimes v_\ell)=v_{\widehat{\pi}^{-1}(1)}\otimes\cdots\otimes v_{\widehat{\pi}^{-1}(\ell)}$. The parameters of $U_\pi$ and $\operatorname{sgn}(\pi)$ remain canonical zero-based permutations.

Assume Countable Choice ([[def-countable-choice]]). Let $N,r\ge1$ be integers, $H=L^2(\mathbb R^3;\mathbb C^r)$, $\mathcal S_N=(\mathbb C^r)^{\otimes N}$, and $M=r^N$. In the product basis $e_a=e_{a_1}\otimes\cdots\otimes e_{a_N}$ indexed by $a\in\{1,\dots,r\}^N$, identify $\mathcal S_N$ with $\mathbb C^M$ and write $\mathcal L_N=L^2(\mathbb R^{3N};\mathbb C^M)$. Then:

(a) There is a unique unitary $\Theta_N:H^{\otimes N}\to\mathcal L_N$ such that
$$[\Theta_N(f_1\otimes\cdots\otimes f_N)]_a(x_1,\dots,x_N)=\prod_{j=1}^N[f_j(x_j)]_{a_j}.$$

(b) For $\pi\in S_N$, let $U_\pi$ be the permutation of the complete one-particle factors and $R_\pi e_a=e_{a_{\widehat{\pi}^{-1}(1)}}\otimes\cdots\otimes e_{a_{\widehat{\pi}^{-1}(N)}}$ the permutation of spin factors. With $X^\pi=(x_{\widehat{\pi}(1)},\dots,x_{\widehat{\pi}(N)})$, the conjugate permutation is
$$\mathcal U_\pi:=\Theta_NU_\pi\Theta_N^{-1},\qquad (\mathcal U_\pi\Psi)(X)=R_\pi\Psi(X^\pi).$$
In particular $[\mathcal U_\pi\Psi]_a(X)=\Psi_{(a_{\widehat{\pi}(1)},\dots,a_{\widehat{\pi}(N)})}(X^\pi)$; averaging this combined action gives $\mathcal P_\pm=\Theta_NP_\pm^{(N)}\Theta_N^{-1}$.

(c) The component domain $\mathcal D_N=W^{2,2}(\mathbb R^{3N};\mathbb C^M)$ is the set of tuples with every scalar component in $W^{2,2}(\mathbb R^{3N};\mathbb C)$. If a scalar self-adjoint $T$ has this scalar domain and its domain is preserved by every spatial block permutation, commuting with that permutation on the domain, its finite direct sum $T_M\Psi=(T\Psi_a)_a$ on $\mathcal D_N$ is self-adjoint, retains every scalar lower bound $T\ge cI$, and commutes with the combined permutations on that domain. The restrictions of $T_M$ to $\operatorname{ran}\mathcal P_\pm$, with domain $\mathcal D_N\cap\operatorname{ran}\mathcal P_\pm$, are self-adjoint when the sector is nonzero; on the zero sector the unique zero operator has domain $\{0\}$.

(d) For matrices $A_j\in\mathcal B(\mathbb C^r)$, the constant spin action $A_1\otimes\cdots\otimes A_N$ preserves $\mathcal D_N$ and commutes with $T_M$. Its permutation covariance is
$$R_\pi(A_1\otimes\cdots\otimes A_N)R_\pi^{-1}=A_{\widehat{\pi}^{-1}(1)}\otimes\cdots\otimes A_{\widehat{\pi}^{-1}(N)}.$$
Thus a common internal unitary $A^{\otimes N}$ commutes with $\mathcal U_\pi$, preserves both sectors and commutes with their restricted operators. This is a tensor identity and asserts no physical spin-statistics assignment. For $r=1$ all spin actions are scalar and $\Theta_N$ is the iterated scalar product unitary; for $N=1$ it is the identity component identification.

## Facts & Assumptions

**Given:** $N,r,H,\mathcal S_N,M,\mathcal L_N$, the product spin basis, and in (c) the scalar self-adjoint $T$ with domain $W^{2,2}$ and spatial permutation invariance.

[F1] The scalar Euclidean product map is unitary and permits finite component sums ([[lem-nrqm-composites-euclidean-l2-product-unitary]] Statement); iterating it gives the scalar N-factor product map. The component identification is unitary for every Euclidean dimension and finite component count ([[lem-nrqm-kinematics-component-valued-wavefunction-identifications]] (a), (b)).

[F2] Tensor pairings multiply, elementary tensors span densely, and spin product bases are orthonormal; bounded factor maps extend with their tensor action and adjoints ([[lem-nrqm-composites-hilbert-tensor-construction]], [[lem-nrqm-composites-bounded-tensor-maps]]). Factor permutations and their symmetric/sign averages are unitary and orthogonal projections respectively ([[lem-nrqm-composites-permutation-sector-projections]] (a)-(c)).

[F3] A self-adjoint operator invariant on its domain under a unitary finite-group permutation representation restricts self-adjointly to each nonzero symmetric/sign sector ([[thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness]] (a)-(d)); the scalar-only application (e) is not needed for a spin sector.

## Proof

**Given:** The data of the Statement and [F1]-[F3].

1.1 [Finite component product unitary] Resolve each one-particle vector into its $r$ components by [F1]. On the dense span of vectors $(g_1e_{a_1})\otimes\cdots\otimes(g_Ne_{a_N})$, send this vector to the function $(\prod_jg_j(x_j))e_a$. Inner products of such vectors are the product of the scalar pairings times $\prod_j\delta_{a_jb_j}$ by [F2]; their image pairings have exactly the same value by the iterated scalar unitary [F1]. Linearity therefore gives a well-defined isometry on this dense span. Its image is dense: in each of the finitely many components the scalar products span densely by [F1]. The isometry extends to the completion; its range is closed by completeness and dense, hence all of $\mathcal L_N$. Expansion of the finite components gives the formula in (a), and equality on a dense span gives uniqueness. [F1, F2, given, algebra]

2.1 [Combined permutation] On the component product vectors of step 1.1, applying $U_\pi$ replaces the factor in slot $j$ by the former factor in slot $\widehat{\pi}^{-1}(j)$. Evaluating the product formula gives $(\mathcal U_\pi\Psi)(X)=R_\pi\Psi(X^\pi)$, including the displayed component-index formula. Both operators are bounded unitaries, so the equality extends by density. Conjugating the finite averages of [F2] gives $\mathcal P_\pm$; this simultaneously permutes spatial blocks and spin slots. [step 1.1, F2, algebra]

3.1 [Finite component domain and self-adjointness] Since there are finitely many components, the definition of weak derivatives shows $\mathcal D_N=(W^{2,2}(\mathbb R^{3N};\mathbb C))^{\oplus M}$: derivative testing and integrability hold componentwise in both directions, and all norms are finite sums. The direct sum $T_M$ is dense and symmetric. A vector $\eta$ lies in $D(T_M^*)$ precisely when testing separately in each component puts $\eta_a\in D(T^*)=D(T)$ for every $a$; conversely these finitely many adjoint values give a vector in $\mathcal L_N$. Thus $D(T_M^*)=\mathcal D_N$ and $T_M^*=T_M$. If $T\ge cI$, summing the scalar quadratic inequalities gives $T_M\ge cI$. The hypothesis on scalar spatial permutations gives domain preservation and commutation for their componentwise action; $R_\pi$ is a constant permutation of finitely many components, so it preserves the domain and commutes with $T_M$ too. Their combined action in step 2.1 has both properties. [given, step 2.1, algebra]

4.1 [Sector restrictions] Apply [F3] to the self-adjoint $T_M$ of step 3.1 and the combined representation from step 2.1. It gives reduction and self-adjointness on every nonzero $\operatorname{ran}\mathcal P_\pm$ with exactly the stated intersection domain. If a sector is zero, its Hilbert space and dense operator domain are both $\{0\}$, so its unique operator is its own adjoint. [step 2.1, step 3.1, F3, algebra]

5.1 [Spin covariance and edge cases] A constant spin matrix makes finite linear combinations of the scalar components, so it preserves $\mathcal D_N$ and commutes with the componentwise scalar $T_M$. On elementary spin tensors the conjugation by $R_\pi$ reorders the matrices to $A_{\widehat{\pi}^{-1}(j)}$ in slot $j$; by linearity this is the displayed covariance on all of $\mathcal S_N$. For a common $A$, the reordering leaves $A^{\otimes N}$ unchanged, so it commutes with each combined permutation and its averages; if $A$ is unitary the inverse has the same properties, proving onto preservation of both sectors and their domains. At $r=1$ the sole component is scalar, and at $N=1$ the product formula is the original vector-valued function. These establish (d) and all stated branches. [step 1.1, step 2.1, step 3.1, step 4.1, F2, algebra] ∎
