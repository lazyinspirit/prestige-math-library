---
id: lem-qc-generic-cnot-parameter-count
kind: lemma
title: Parameter Count for a Fixed CNOT Skeleton
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 9
deps:
  - def-qc-elementary-circuit-resources
  - def-qc-circuit-denotational-semantics
  - def-qc-cnot-and-control-target-order
  - thm-qc-computational-basis-orthonormal
  - def-qc-pauli-matrices
  - thm-heine-borel-rn
  - thm-morse-sard-for-euclidean-maps
  - lem-qc-unitary-group-cayley-charts
  - thm-qc-one-qubit-euler-decomposition
  - thm-euclidean-inverse-function-theorem
  - def-countable-choice
  - def-axiom-of-choice
  - lem-axiom-of-choice-implies-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "AC_omega is assumed for the normalized smooth volume measure; full AC is needed only for the optional Haar identification."
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Vivek S. Shende, Igor L. Markov, and Stephen S. Bullock, Minimal Universal Two-Qubit CNOT-Based Circuits, arXiv:quant-ph/0308033v3"
      url: "https://arxiv.org/pdf/quant-ph/0308033"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Assume AC$_\omega$ to form normalized Frobenius volume on $U(2^n)$. For fixed $n\ge1$ and a fixed ordered CNOT skeleton with $m$ CNOTs, arbitrary exact one-qubit gates, and no ancillas, the set of exact circuit matrices is contained in a finite union of smooth images of real parameter spaces of dimension at most $3n+4m+1$. If $3n+4m+1<4^n$, this fixed skeleton has measure zero. Under full AC, it is Haar-null.

## Facts & Assumptions

**Given:** The exact one-qubit/CNOT gate model, a fixed list of CNOT locations on $n$ wires, and AC$_\omega$ for the normalized smooth volume.

[F1] [[thm-qc-one-qubit-euler-decomposition]]: each $U(2)$ gate is a scalar phase times an $SU(2)$ matrix parameterized by three real Euler angles.

[F2] [[def-qc-cnot-and-control-target-order]]: the first-wire-control CNOT maps $|a,t\rangle$ to $|a,t\oplus a\rangle$; the reverse orientation is the same permutation with wires interchanged.

[F3] [[thm-euclidean-inverse-function-theorem]]: a smooth map between equal-dimensional Euclidean neighborhoods with invertible derivative is a local diffeomorphism.

[F4] [[thm-morse-sard-for-euclidean-maps]]: for a $C^r$ map from an $a$-dimensional Euclidean open set to a $b$-dimensional one, with $a<b$ and $r>b-a$, its image has Lebesgue measure zero.

[F5] [[lem-qc-unitary-group-cayley-charts]]: $U(2^n)$ is a smooth real manifold of dimension $4^n$; its chart-null sets are exactly the null sets of normalized Frobenius volume, and under full AC this is normalized Haar measure.

[F6] [[def-qc-pauli-matrices]]: $X,Y,Z$ are the displayed Pauli matrices in the ordered computational basis.

[F7] [[thm-heine-borel-rn]]: a closed bounded subset of a finite-dimensional real Euclidean space is compact.

[F8] [[def-qc-circuit-denotational-semantics]]: chronological circuit layers $L_1,\ldots,L_d$ denote the exact matrix product $U_{L_d}\cdots U_{L_1}$.

[F9] [[def-qc-elementary-circuit-resources]]: the operation model declares the allowed gate alphabet and counts only the named gate occurrences.

[F10] [[thm-qc-computational-basis-orthonormal]]: the ordered computational basis of a register is orthonormal.

[A1] AC$_\omega$ is assumed to construct the normalized smooth volume; the optional Haar wording assumes full AC ([[def-countable-choice]], [[def-axiom-of-choice]], [[lem-axiom-of-choice-implies-countable-choice]]).

## Proof


1.1 A matrix in $SU(2)$ has the form $\left(\begin{smallmatrix}a&b\\-\bar b&\bar a\end{smallmatrix}\right)$ with $|a|^2+|b|^2=1$: its first column is a unit vector, orthogonality and determinant one fix the second column, as in the two-column calculation in the Euler proof. Conversely, direct multiplication verifies that every displayed matrix is unitary with determinant one. Thus $SU(2)$ is $S^3\subset\mathbb R^4$. On each of the eight open sets where one real coordinate is positive or negative, solve that coordinate as $\pm\sqrt{1-u_1^2-u_2^2-u_3^2}$; these smooth charts show $SU(2)$ is a real 3-manifold. It is closed and bounded, hence compact by [F7]. The tangent Lie algebra is the three-dimensional span in [F6]. Thus $G=SU(2)^n$ is a compact smooth real manifold of dimension $3n$. Collecting consecutive one-qubit gates into local layers and moving every scalar factor to the front writes each circuit with the fixed skeleton as $e^{i\phi}K_mC_mK_{m-1}\cdots C_1K_0,$ where $K_j\in G$. The scalar phases commute with all gates and combine into one real parameter $\phi$; [F1] parameterizes each one-qubit special-unitary factor by three real angles. The chronological matrix convention is [F8], and [F9] fixes the counted gate alphabet. [given, F1, F6, F7, F8, F9, algebra]

1.2 Direct inspection of the matrices in [F6] shows that every traceless skew-Hermitian $2\times2$ matrix is a unique real combination of $iX,iY,iZ$: its diagonal entries are $ir,-ir$ and its off-diagonal entries are $z,-\bar z$, with $r\in\mathbb R,z\in\mathbb C$. Fix one CNOT $C_j$ with control $c$ and target $t$. Applying its basis action [F2] to the four affected basis vectors gives $C_jZ_cC_j=Z_c$ and $C_jX_tC_j=X_t$. By [F10], the CNOT basis permutation is unitary. Its local commuting subgroup $H_j\le G$ therefore consists of arbitrary $SU(2)$ factors on the $n-2$ other wires, rotations $e^{isZ}$ on $c$, and rotations $e^{irX}$ on $t$. This product has real dimension $3(n-2)+1+1=3n-4$. A complementary subspace $\mathfrak m_j$ of $\mathfrak{su}(2)^n$ is spanned by $iX_c,iY_c,iY_t,iZ_t$ and has dimension four. [given, F2, F6, F10, algebra]

2.1 Give $\mathfrak m_j\times H_j$ and $G$ local coordinates from the $S^3$ charts in step 1.1 and angle charts on the two circles in $H_j$. The local product map $\Phi_j:\mathfrak m_j\times H_j\to G$, $(X,h)\mapsto e^Xh$, has derivative at $(0,I)$ equal to $(X,Y)\mapsto X+Y$. The direct sum $\mathfrak m_j\oplus\mathfrak h_j=\mathfrak{su}(2)^n$ makes this derivative an isomorphism between $3n$-dimensional coordinate spaces, so [F3] gives neighborhoods on which every nearby local factor is $e^Xh$ with four real coordinates in $X$ and $h\in H_j$. The group $G$ is compact: each $SU(2)$ is the closed bounded set of matrices $\left(\begin{smallmatrix}a&b\\-\bar b&\bar a\end{smallmatrix}\right)$ with $|a|^2+|b|^2=1$, and a finite product of compact sets is compact. Translating the neighborhood and using compactness gives a finite cover of $G$ by such local product charts. [step 1.1, step 1.2, F3, algebra]

2.2 Starting with $K_m$ and proceeding downwards, use a finite chart to write the current local factor as $g_\ell e^{X_j}h_j$, where $g_\ell$ is one of finitely many fixed local translations and $X_j$ has four real coordinates. Since $h_j$ commutes with $C_j$, move it through $C_j$ and multiply it into the next local factor; that product remains in $G$. Repeating this for all $m$ CNOTs leaves $m$ four-parameter factors and one arbitrary local layer $K_0$ with $3n$ parameters. Each chart choice has finitely many possibilities, and the global phase adds one parameter, so the exact image is contained in a finite union of smooth images with dimension $4m+3n+1$. [step 1.1, step 1.2, F1, F2, algebra]

3.1 If $4m+3n+1<4^n$, every point of each parameter domain is critical for the smooth map into a target chart of $U(2^n)$, since its derivative has rank at most the smaller domain dimension. Apply [F4] on the open preimages of the finitely many target charts from [F5]; each image is Lebesgue-null there, hence volume-null by [F5]. A finite union over parameter-chart choices is still null. Under full AC, [F5] identifies that null set as Haar-null. Thus the fixed skeleton has the claimed null image. [step 2.2, F4, F5, A1, algebra] ∎
