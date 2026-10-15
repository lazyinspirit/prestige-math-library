---
page: bialgebras-convolution-and-antipode-identities
title: "Bialgebras, Convolution, and Antipode Identities"
status: draft
items: [lem-hh-tensor-product-coalgebra,
        def-hh-bialgebra-and-bialgebra-map,
        lem-hh-convolution-algebra-associativity-and-unit,
        lem-hh-bialgebra-compatibility-equivalence,
        def-hh-hopf-algebra-and-antipode,
        thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication,
        lem-hh-group-and-polynomial-hopf-algebras-exist,
        lem-hh-commutative-or-cocommutative-antipode-is-involutive]
examples: []
---

The diagonal action of a group on two representations uses $g\mapsto g\otimes g$, while a primitive symmetry uses $x\mapsto x\otimes1+1\otimes x$. Compatibility of these splittings with multiplication gives the bialgebra axioms. A local tensor-product coalgebra lemma makes the alternative coalgebra-map formulation precise, and a separate calculation proves its equivalence with the algebra-map formulation. Inversion is encoded by convolution on linear maps, not by composition.

The page develops convolution in arbitrary dimension, defines Hopf algebras by a two-sided convolution inverse, and proves uniqueness and both anti-map identities by explicit inverse calculations. It constructs group algebras, finite-group function algebras, and polynomial Hopf algebras in every characteristic. The involutivity result has two separate sufficient branches: commutativity or cocommutativity. The general definition imposes no bijectivity assumption on the antipode.

## Reading and applications

Prerequisite pages: [[tensor-coherence-and-algebraic-descent]], [[coalgebras-counits-and-the-fundamental-coalgebra-theorem]], and [[comodules-matrix-coefficients-and-coalgebra-duality]]. The companion [[bialgebras-convolution-and-antipode-identities-examples]] works through the group/function contrast, a finite convolution calculation, and the characteristic-dependent polynomial primitives.
