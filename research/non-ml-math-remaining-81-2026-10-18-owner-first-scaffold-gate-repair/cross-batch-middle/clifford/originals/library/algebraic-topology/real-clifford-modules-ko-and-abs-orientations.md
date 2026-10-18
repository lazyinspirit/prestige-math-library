---
page: real-clifford-modules-ko-and-abs-orientations
title: Real Clifford Modules, KO Theory, and ABS Orientations
status: draft
items:
- def-real-ko-and-ksp-grothendieck-groups
- def-given-spin-and-spinc-structures-and-associated-spinor-bundles
- def-real-graded-clifford-module-bundles-and-groups
- lem-numerated-real-vector-bundle-embeds-in-finite-trivial-bundle
- def-orthogonal-clifford-families-and-centrioles
- def-finite-dimensional-gapped-free-hamiltonian-and-stable-equivalence
- lem-relative-morse-bott-crossing-by-negative-normal-bundles
- lem-stabilized-upper-gauge-cancellation-by-block-rotation
- def-reduced-relative-ko-and-ko-compact-support
- def-clifford-module-restriction-cokernel-a-n
- cor-finite-cw-real-vector-bundle-has-orthogonal-complement-under-ac
- lem-clifford-centrioles-and-geodesic-tangent-condition
- lem-volume-chirality-and-clifford-hopf-clutching
- thm-complex-spinc-thom-orientation
- lem-spectral-flattening-preserves-gap-and-symmetries
- lem-finite-cw-relative-ko-triples-and-homotopy-invariance
- lem-real-clifford-block-rotation-index-lower-bound
- lem-real-and-quaternionic-spinor-module-morita-evaluation
- def-abs-cokernel-and-clifford-symbol
- lem-graded-c-n-modules-equivalent-to-ungraded-c-n-1-modules
- thm-antiunitary-az-classes-are-clifford-extensions
- lem-symmetric-pole-polygons-have-clean-energy-critical-manifolds
- lem-reduced-relative-ko-suspension-exactness-and-product
- lem-relative-path-shortening-connectivity
- lem-real-and-symplectic-clutching-groups-in-low-degrees
- lem-real-clifford-restriction-matrices
- lem-iterated-suspension-and-winding-control-for-clifford-families
- thm-affine-clifford-hopf-maps-are-highly-connected
- thm-stable-clifford-hopf-decomposition-over-sphere-bundles
- lem-uniqueness-of-stable-clifford-hopf-decomposition
- thm-real-clifford-thom-isomorphism
- thm-spin-thom-isomorphism-rank-eight-multiples-and-rank-four-ksp
- thm-real-bott-periodicity-from-rank-eight-clifford-thom
- thm-ko-coefficient-table-and-eightfold-periodicity
- thm-abs-orientation-identifies-cokernels-with-ko
- thm-spin-ko-thom-orientation-in-all-ranks
- lem-positive-clifford-mass-difference-clutching-comparison
- thm-tenfold-real-and-complex-clifford-extension-table
examples: []
requires:
  - real-complex-clifford-classification-and-graded-products
  - complex-topological-k-theory-and-bott-periodicity
  - jacobi-fields-conjugate-points-and-the-cut-locus
  - regular-homotopy-and-sphere-eversion

---

This page develops the real Clifford-module construction of the KO Thom map and records its consequences for ABS orientations, Spin and Spin-c Thom classes, and the finite-dimensional stable free-fermion extension table. The real signature convention is $\mathrm{Cl}_{p,q}$ with $p$ positive and $q$ negative squares; throughout the geometric Bott construction $C_n=\mathrm{Cl}_{0,n}$, so $c(v)^2=-\lVert v\rVert^2$. The graded tensor product uses the Koszul sign in [[def-clifford-graded-algebra-module-and-tensor-product]].

## Scope and proof route

The real Clifford–Thom route is organized as finite-CW bundle foundations, orthogonal Clifford families and their path-space connectivity, sphere-bundle clutching decomposition and uniqueness, spinor Morita equivalence, rank-eight real Bott periodicity, low KO coefficients, and the actual ABS cokernel map. The three headline claims remain explicit in [[thm-abs-orientation-identifies-cokernels-with-ko]], [[thm-spin-ko-thom-orientation-in-all-ranks]] and [[thm-tenfold-real-and-complex-clifford-extension-table]].

The prerequisite [[real-complex-clifford-classification-and-graded-products]] supplies the actual real/complex classification, even-subalgebra and graded tensor interfaces. Their final bodies were read with the negative-square translation $C_n=\mathrm{Cl}_{0,n}$ after native batch 35 completed. The owner construction now supplies the finite-pair, symmetric-pole Morse, family decomposition and uniqueness proofs locally; this is a draft authoring completion, with independent review and native readiness still owned by the run orchestrator. Dependency-depth labels are likewise reconciled by the orchestrator.

For positive rank $4m$, volume Clifford–Thom uses the **ungraded** group $K_{C(V)}(X)$. The graded groups $M_n$ remain distinct and enter ABS only through restriction cokernels. Under north-section subtraction the reduced Hopf class $\Psi$ is the negative of the standard volume-positive source-minus-target symbol $\Phi$. The Bott class and ABS map use this same $\Phi$ convention. The allrank shifted Spin map has target degree $j+r$ for rank $r$; a given rank-zero Spin lift contributes its associated sign line, while the canonical framed lift contributes the unit.

## Sphere-bundle clutching picture

For an oriented Euclidean bundle $V\to X$, a fiber of $\widehat V=S(\mathbb R\oplus V)$ is the union of the two disk halves along $S(V)$. The sections $s_+$ and $s_-$ are the north and south poles. On the equator, Clifford multiplication by a unit vector is the clutching map between the volume-element eigenspaces. The drawing fixes those geometric labels only; every algebraic and topological claim is established in its item proof.

```tikz
\begin{tikzpicture}[scale=1]
  \draw[thick] (0,0) circle (2);
  \draw[dashed] (-2,0) arc (180:360:2 and 0.55);
  \draw[thick] (-2,0) arc (180:0:2 and 0.55);
  \fill (0,2) circle (1.6pt) node[above] {$s_+$};
  \fill (0,-2) circle (1.6pt) node[below] {$s_-$};
  \node at (0,0.95) {$D_+V$};
  \node at (0,-0.95) {$D_-V$};
  \node at (2.2,0) {$S(V)$};
  \draw[->] (2.0,0.25) to[bend left=25] node[right] {$c(v):\Lambda^+\to\Lambda^-$} (2.0,-0.25);
\end{tikzpicture}
```

## Free-fermion boundary

The tenfold table here concerns strong invariants of the declared finite-dimensional stable Dirac-mass extension problem. Weak invariants need extra lattice or torus hypotheses. No result on interactions or on arbitrary disordered Hamiltonians is asserted; see [[rem-strong-weak-and-interaction-scope]].
