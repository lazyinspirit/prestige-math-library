---
id: thm-peter-weyl-for-compact-lie-groups
kind: theorem
title: Peter–Weyl theorem
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, thm-schur-orthogonality-for-compact-lie-groups, cor-complete-reducibility-for-compact-lie-groups, def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group, lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces, lem-compact-lie-groups-admit-central-continuous-approximate-identities, thm-hilbert-space-fourier-expansion, def-axiom-of-choice, def-matrix-coefficient-and-character-of-a-compact-group-representation, def-dual-complex-representation]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §3, Theorem 4.20 with Lemmas 4.17–4.19 and Corollary 4.21"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stanford.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "Appendix Z"
proof_strategy: direct
landmark: true
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact Lie group with normalized Haar
measure $dg$. Then the normalized matrix coefficients
$\sqrt{d_\pi}\,\pi_{ij}$, over a set of representatives $(\pi,V_\pi)$ of the
equivalence classes of irreducible unitary finite-dimensional complex
representations and orthonormal bases of each $V_\pi$, form an orthonormal
Hilbert basis of $L^2(G)$; moreover the $\pi$-isotypic summand of the left
regular representation occurs with multiplicity $\dim\pi$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact Lie group $G$ with normalized Haar measure $dg$, and the left and right regular representations on $L^2(G)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the Haar measure, the Hilbert-space projection/basis theory and the compact-spectral theory cited.

[L1] Schur orthogonality: with $\pi_{ij}(g)=\langle\pi(g)e_j,e_i\rangle$, the family $\{\sqrt{d_\pi}\pi_{ij}\}$ over inequivalent irreducible unitary $\pi$ is orthonormal in $L^2(G)$ ([[thm-schur-orthogonality-for-compact-lie-groups]], [[def-matrix-coefficient-and-character-of-a-compact-group-representation]]).

[L2] The regular actions are unitary and strongly continuous; the dual action is $\rho^*(x)\ell=\ell\circ\rho(x^{-1})$; every finite-dimensional continuous representation is a direct sum of irreducibles ([[def-left-and-right-regular-unitary-representations-on-l-two-of-a-compact-lie-group]], [[def-dual-complex-representation]], [[cor-complete-reducibility-for-compact-lie-groups]]).

[L3] For Hermitian continuous $k=k^*$, $T_k$ is compact self-adjoint; its nonzero eigenspaces are finite-dimensional and left-invariant, and their closed span is $\overline{\operatorname{ran}T_k}$ ([[lem-compact-convolution-operators-decompose-into-finite-dimensional-invariant-subspaces]]).

[L4] There are real, nonnegative, inversion-invariant continuous kernels $k_n$ of integral one such that $T_{k_n}H\to H$ in $L^2$ for every $H$; moreover $T_kH$ is continuous for every continuous $k$ and $H\in L^2$ ([[lem-compact-lie-groups-admit-central-continuous-approximate-identities]]).

[L5] A complete orthonormal family gives the norm-convergent finite-subset Fourier expansion ([[thm-hilbert-space-fourier-expansion]]). Haar measure is positive on nonempty open sets ([[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

## Proof

**Proof technique:** direct.

1.1 All finite-dimensional unitary representations may be transported to some $\mathbb C^d$, so their equivalence classes form a set. By AC choose one representative of each irreducible class and an orthonormal basis in each. Schur orthogonality gives an orthonormal family $\mathcal B=\{\sqrt{d_\pi}\pi_{ij}\}$; write $U$ for its closed linear span. A matrix coefficient of any finite-dimensional continuous unitary representation lies in the algebraic span of $\mathcal B$: decompose into irreducibles by [L2] and change finite-dimensional bases. Duals of unitary irreducibles are again continuous unitary irreducibles: their matrices are the conjugates of the original unitary matrices, and a proper nonzero invariant dual subspace would have a proper nonzero invariant annihilator in the original space. [A1, L1, L2]

1.2 Two continuous functions equal Haar-almost everywhere are equal everywhere: a nonzero value of their continuous difference would give a nonempty open set where its modulus is bounded below by a positive number, contrary to [L5]. Thus a class with a continuous representative has a unique such representative. [L5]

2.1 Fix $n$ and a nonzero eigenvalue $\lambda$ of $T_{k_n}$. Its eigenspace $E$ is finite-dimensional and left-invariant by [L3], since real inversion-invariant $k_n$ is Hermitian. Every $f\in E$ has the continuous representative $\lambda^{-1}T_{k_n}f$ by [L4], uniquely by step 1.2. Consequently the restriction $\sigma(x)=L_x|_E$ is a finite-dimensional continuous unitary representation by [L2], acting also on these continuous representatives. Let $\ell:E\to\mathbb C$ be evaluation at $e$. For each $f\in E$, $f(x)=(L_{x^{-1}}f)(e)=\ell(\sigma(x^{-1})f)=(\sigma^*(x)\ell)(f)$. In dual bases this is a linear combination of the matrix entries of $\sigma^*(x)$, hence belongs to $U$ by step 1.1. Therefore $E\subseteq U$. [L2, L3, L4, step 1.1, step 1.2]

3.1 By [L3] and step 2.1, $\overline{\operatorname{ran}T_{k_n}}\subseteq U$ for every $n$ (also when the nonzero-eigenspace family is empty). For any $H\in L^2(G)$, the vectors $T_{k_n}H\in U$ converge to $H$ by [L4]. Closedness of $U$ gives $U=L^2(G)$. Thus $\mathcal B$ is a Hilbert basis, and [L5] gives its norm-convergent Fourier expansion. [L3, L4, L5, step 2.1]

4.1 For an irreducible $\rho$, let $V_j(\rho)=\operatorname{span}\{\rho_{ij}:1\le i\le d_\rho\}$, for $1\le j\le d_\rho$. These spaces, including those for distinct representatives, are mutually orthogonal by [L1]. Matrix multiplication gives $L_x\rho_{ij}=\sum_k\rho_{ik}(x^{-1})\rho_{kj}$, so the map from the $i$th dual basis vector to $\sqrt{d_\rho}\rho_{ij}$ identifies $V_j(\rho)$ unitarily with $\rho^*$. Their Hilbert direct sum is all of $L^2(G)$ by step 3.1. To see that there are no further copies of a fixed irreducible $\pi$, orthogonal projection onto each such block commutes with $L_x$: both the block and its orthogonal complement are invariant under the unitary action. Its restriction to an irreducible subrepresentation of type $\pi$ is an intertwiner, and a nonzero such map to an irreducible block is an isomorphism, since its kernel and image are invariant. It is therefore zero unless $\rho^*\cong\pi$. Completeness of the block sum then places every copy of $\pi$ in the sum of these blocks. Duality permutes irreducible classes and $\pi^{**}\cong\pi$, so the $\pi$-isotypic summand is precisely $\bigoplus_{j=1}^{d_\pi}V_j(\pi^*)$, with multiplicity $d_\pi$. Here $\pi^*$ may be replaced by its chosen equivalent representative. The trivial representation supplies the constant function, including for the trivial group. AC covers the selections in step 1.1 and the Haar, spectral and Hilbert-space suppliers. [A1, L1, L2, step 1.1, step 3.1] ∎
