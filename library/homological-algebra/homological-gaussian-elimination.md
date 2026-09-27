---
page: homological-gaussian-elimination
title: "Homological Gaussian Elimination"
status: published
items: [def-complex-homotopy-and-contractibility-in-an-additive-category, def-invertible-differential-block-and-schur-complement-reduction, lem-block-triangular-basis-changes-diagonalize-an-invertible-differential-block, thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex, prop-homological-gaussian-elimination-gives-a-strong-deformation-retract, cor-homological-gaussian-elimination-preserves-homotopy-type-and-homology, thm-finite-iterated-homological-gaussian-elimination, prop-additive-functors-preserve-chosen-homological-gaussian-cancellations, prop-transfer-of-chain-maps-across-gaussian-reductions-and-naturality-limits]
examples: []
---

This page develops Gaussian elimination for complexes over an additive category,
in the form used in Khovanov homology computations: an invertible block of a
differential is cancelled and the complex is replaced by its Schur-complement
reduction, with an explicit strong deformation retract recording the comparison.

The page begins with cochain complexes, cochain maps, homotopies and
contractibility over an additive category, and with the dictionary that
reindexes them into the published chain convention of Weibel and of
Clark–Morrison–Walker. It then fixes the block decomposition
$d^n=\begin{pmatrix}a&b\\ c&\varphi\end{pmatrix}:A\oplus U\to B\oplus V$ with
invertible pivot $\varphi$, defines the candidate reduction with differential
the Schur complement $a-b\varphi^{-1}c$, and proves that the triangular basis
changes $L,R$ diagonalize the block, transmit the neighbouring differentials to
$(p;0)$ and $(r\ 0)$, and make the reduced arrows square to zero even in the
neighbouring degrees.

On that base the central theorem splits the complex as a chain isomorphism onto
$\bar X^\bullet\oplus K$ with $K$ the contractible two-term complex
$0\to U\xrightarrow{\varphi}V\to0$, and the following proposition exhibits the
resulting projection, section and contracting homotopy explicitly; the corollary
records that the chosen maps are inverse in the homotopy category and, over an
abelian category, induce inverse isomorphisms on homology objects. Finite
iteration of current pivots composes the retract data as
$p=p_2p_1$, $\imath=\imath_1\imath_2$, $h=h_1+\imath_1h_2p_1$, aggregate
diagonal pivots may be cancelled in one step with the same result as successive
cancellations, and different valid choices give homotopy equivalent reductions,
which need not be equal. The page closes with the behaviour under an additive functor,
which is exactness-free for the homotopy statement, and with transfer of
cochain maps along chosen retracts, which is functorial on homotopy classes but
not strictly functorial on cochain maps.
