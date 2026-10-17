---
page: qsm-quasilocal-states
title: Local spin matrix algebras and isometric inclusions
status: published
library: physics
items:
- lem-qsm-integer-lattice-countable
- def-qsm-local-spin-algebras
- lem-qsm-local-spin-inclusions-isometric
- def-qsm-quasilocal-spin-algebra
- lem-qsm-quasilocal-completion
- def-qsm-infinite-algebraic-state
- lem-qsm-consistent-local-states
- lem-qsm-spin-state-compactness
- lem-qsm-state-gns-construction
examples: []
requires:
- countability-and-uncountability
- gelfand-theory-and-commutative-c-star-algebras
- qsm-states-ensembles
- the-topology-of-euclidean-space
- normed-and-banach-spaces
- group-c-star-algebras-and-the-fell-unitary-dual
- monotone-sequences-and-cauchy-completeness
- construction-of-the-natural-numbers
- hilbert-space-geometry-and-riesz-representation
- bounded-linear-operators-and-quotient-spaces
---

For the countable lattice $\mathbb Z^d$ and a fixed finite spin dimension $q$, this page defines the finite local matrix algebras, proves that tensoring with an identity gives isometric inclusions, and defines the quasi-local algebra as the norm completion of the directed union of finite-region observables. No infinite tensor-product Hilbert space is selected.

For nested finite regions $\Lambda\subseteq\Lambda'\subseteq\Lambda''$, the following triangle records the maps and equality established by [[lem-qsm-local-spin-inclusions-isometric]]:

\begin{center}
\begin{tikzpicture}[>=stealth]
  \node (a) at (0,0) {$\mathcal A_\Lambda$};
  \node (b) at (3,1.2) {$\mathcal A_{\Lambda'}$};
  \node (c) at (3,-1.2) {$\mathcal A_{\Lambda''}$};
  \draw[->] (a) -- node[above] {$\iota_{\Lambda,\Lambda'}$} (b);
  \draw[->] (b) -- node[right] {$\iota_{\Lambda',\Lambda''}$} (c);
  \draw[->] (a) -- node[below] {$\iota_{\Lambda,\Lambda''}$} (c);
\end{tikzpicture}
\end{center}

Each arrow is the factor inclusion $T\mapsto T\otimes I$ for the indicated pair of regions. The triangle commutes because the two tensor-factor identifications send each configuration basis vector to the same vector; the lemma proves this algebraically in its Step 1.1, so the diagram is explanatory rather than a proof premise.

It then defines bounded normalized positive functionals as algebraic states, conditionally proves extension and uniqueness from consistent finite-region density matrices, and proves sequential compactness of the state space for pointwise convergence on observables under Countable Choice. The final lemma constructs a cyclic Hilbert-space representation from a consistent family through its algebraic state.

The finite-matrix prerequisites are split across two current suppliers. [[lem-qsm-matrix-state-calculus]] proves finite Hermitian spectral calculus, positive square roots, trace cyclicity and basis independence, and weighted Cauchy–Schwarz. Its current density proof correctly normalizes rational-coordinate vectors; the normalized vectors need not themselves have rational coordinates. [[lem-qsm-finite-matrix-cstar-and-state-duality]] supplies completeness and the operator-norm C*-identity for each finite local matrix algebra, and proves the unique density representation and norm formula for positive finite-matrix functionals; in particular, positive normalized functionals correspond exactly to trace-one density matrices. Both suppliers currently have status `draft`, so this page's uses of their claims remain conditional pending their ordinary supplier review. No global density operator representation is asserted, and all claims here are mathematical; no physical postulate or empirical conclusion is asserted.
