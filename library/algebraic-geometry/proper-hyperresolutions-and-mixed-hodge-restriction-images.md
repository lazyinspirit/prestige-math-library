---
page: proper-hyperresolutions-and-mixed-hodge-restriction-images
title: "Proper Hyperresolutions And Mixed Hodge Restriction Images"
status: published
items:
- def-split-augmented-simplicial-objects-and-matching-objects
- lem-blowups-of-projective-schemes-are-projective
- thm-proper-varieties-admit-smooth-projective-hyperresolutions
- def-borel-moore-homology
- lem-borel-moore-homology-of-compact-spaces
- thm-proper-cohomology-has-functorial-mixed-hodge-weights-at-most-degree
- thm-mixed-hodge-weights-control-proper-cohomological-restriction-images
examples: []
---

This page constructs the proper Hodge-theoretic input for the mixed Hodge
theory of singular proper varieties, and it proves the restriction-image
statement used in the absolute Hodge package on this frontier. The standing
hypothesis is the Axiom of Choice, inherited from the blowup and Proj
constructions, from Chow's lemma and embedded desingularization, from the
constructible descent theorem, from the exact Godement and analytic sheaf resolutions, and from the
subordinate partition of unity used to metrize the analytic space of a proper
variety. AC supplies the latter supplier's dependent-choice hypothesis.

The opening definition fixes the simplicial vocabulary: augmented simplicial
schemes over a base, their matching objects as limits of boundary diagrams,
the nondegenerate parts $N_q$ and their coproduct decomposition under
ordinal surjections, and the condition
that the augmentation and all matching maps be proper and surjective. The first
geometric result is that blowups of an integral projective complex scheme along
nonzero finite-type ideal sheaves stay integral and projective; the proof
routes the blowup through the graph-closure corollary for a fractional ideal
after twisting by an ample power, and composes with the Segre embedding.

The main geometric theorem then produces, for every proper complex algebraic
variety $Y$, a split simplicial proper hypercover $Y_\bullet\to Y$ with every
$Y_p$ smooth projective. Smooth projective covers of reduced projective
schemes come from embedded desingularization inside a blowup tower, the
degree-zero cover from Chow's lemma, and the successive stages from a
smooth projective cover of the matching object of the previous stages, the
degenerate summands being determined by the unique factorization of ordinal
maps. The theorem also supplies common refinements of two such hypercovers and
the lifting of morphisms of proper varieties after refining the source; and it
records that degree-$n$ cohomology uses only the skeleton through degree $n+1$.

On the cohomological side, Borel-Moore homology is defined by locally finite
chains, with pushforwards guaranteed for proper maps, and it agrees with
ordinary singular homology on compact spaces. With these tools the proper
weights theorem puts a functorial rational mixed Hodge structure with weights at
most $n$ on $H^n(Y,\mathbb Q)$ for every proper complex algebraic variety: a
smooth projective hypercover resolves the constant sheaf and the holomorphic de
Rham complex into a cosimplicial system of weight-zero Hodge complexes whose
simple complex is a cohomological mixed Hodge complex, descent identifies its
cohomology with the cohomology of $Y$, and the local contractibility and
metrization of the analytic space identify it in turn with singular cohomology.
The same theorem shows that pullback from a smooth quasiprojective variety into
a proper variety is a mixed Hodge morphism for the logarithmic structure, and
that the proper homological class map into a smooth projective ambient variety
of pure dimension $d$, after the Tate twist $(d)$ of Poincare duality, has pure
Hodge image. For ambient components of differing dimensions these maps are
formed componentwise.

The final theorem converts the weight bounds into the restriction-image
equality: for a smooth quasiprojective $U$, any smooth projective
compactification $X$, and a morphism $g:Y\to U$ with $Y$ proper, the images of
$(jg)^*$ and $g^*$ in $H^n(Y,\mathbb Q)$ coincide and are pure Hodge
substructures of weight $n$. The proof uses only strictness of the mixed Hodge
morphism $g^*$, the identity $W_nH^n(U)=\operatorname{im}j^*$ for the
logarithmic structure, and the weight bound $W_nH^n(Y)=H^n(Y)$ for proper
targets.
