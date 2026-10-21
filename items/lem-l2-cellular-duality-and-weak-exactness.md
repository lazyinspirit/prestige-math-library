---
id: lem-l2-cellular-duality-and-weak-exactness
kind: lemma
title: Finite cellular L2 duality and weak exactness
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - lem-finite-von-neumann-module-dimension-and-dense-quotients
  - thm-poincare-lefschetz-duality-with-local-coefficients
  - thm-cellular-chains-compute-homology-with-local-coefficients
  - thm-excision-and-mayer-vietoris-with-local-coefficients
  - thm-morse-functions-and-handle-decompositions-correspond
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Lück and Schick, Various L2-signatures and a topological L2-signature
        theorem
      url: https://arxiv.org/pdf/math/0209161
      locator: Section 3, combinatorial L2 signatures
---

## Statement

Assume the standing full AC convention. Give compact oriented smooth manifolds finite cellular models, and give their cellular complexes the local regular coefficients of any discrete group $G$. Put $A=\mathcal N G$. For each degree, let $p_Z$ and $p_B$ be the Hilbert projections onto cycles and the closure of boundaries after completion in $\ell^2(G)$. The algebraic reduced part is the finite projective $A$-module $P=(p_Z-p_B)A^n$, whereas completed reduced homology is the Hilbert module $H=(p_Z-p_B)\ell^2(G)^n$. Algebraic homology with $A$ coefficients surjects onto $P$ with zero-dimensional kernel; its natural map into $H$ has dense image $P$ under $x\mapsto x\delta_e$, and need not be surjective onto $H$. The Hilbert completion of $P$ in this embedding is $H$. Pair and Mayer–Vietoris sequences become weakly exact on completed reduced homology: the closure of each image is the next kernel. Poincaré–Lefschetz cap duality induces bounded invertible maps on completed reduced homology and cohomology. In particular, the middle intersection operator of a closed oriented even-dimensional manifold is invertible. The cap boundary identity and the intersection/cup identities persist on these completed modules, with their ordinary orientation signs.

## Statement references

[[lem-finite-von-neumann-module-dimension-and-dense-quotients]]

[[thm-poincare-lefschetz-duality-with-local-coefficients]]

[[thm-cellular-chains-compute-homology-with-local-coefficients]]

[[thm-excision-and-mayer-vietoris-with-local-coefficients]]

[[thm-morse-functions-and-handle-decompositions-correspond]]

## Facts & Assumptions

**Given:** The finite cellular complexes of the stated manifolds and pairs, with the stated regular local coefficients.

[F1] Closed invariant subspaces of finite Hilbert modules are projection ranges; spectral rank-nullity, the formula for the dimension of a quotient of a finite projective module by any submodule, and closure of zero-dimensional modules under submodules, quotients and extensions hold. [[lem-finite-von-neumann-module-dimension-and-dense-quotients]]

[F2] Cellular models compute local-coefficient homology; pair and Mayer–Vietoris sequences are exact and natural. Finite handle decompositions give the finite cellular models for compact smooth manifolds. [[thm-cellular-chains-compute-homology-with-local-coefficients]] [[thm-excision-and-mayer-vietoris-with-local-coefficients]] [[thm-morse-functions-and-handle-decompositions-correspond]]

[F3] Cap with the relative fundamental class is Poincaré–Lefschetz duality, naturally with respect to restriction and boundary, for every complex vector local system. Apply it to the regular group-ring fiber, retaining the commuting right group-ring action. [[thm-poincare-lefschetz-duality-with-local-coefficients]]

## Proof

**Given:** The data in the Statement; write $R=\mathbb CG$ and $A=\mathcal NG$.

1.1 For a finite matrix differential $d_i$, its algebraic kernel over $A$ is exactly $p_Z A^{n_i}$, where $p_Z$ projects onto its Hilbert kernel: the matrix equality $d_i p_Z=0$ gives one inclusion, and applying $p_Z$ to each column gives the other. Let $p_B$ project onto the closure of the image of $d_{i+1}$. Then $p_B\le p_Z$. Orthogonal projection onto the algebraic module $P_i=(p_Z-p_B)A^{n_i}$ induces a surjection from algebraic homology $H_i^{\mathrm{alg}}$, with kernel $T_i=p_B A^{n_i}/\operatorname{im}d_{i+1}$. This kernel has dimension zero by [F1]. The target $P_i$ is projective, so the surjection splits algebraically; in fact inclusion of the harmonic projection module into cycles gives a splitting. Thus $H_i^{\mathrm{alg}}\cong P_i\oplus T_i$. Separately, $P_i$ embeds in the Hilbert module $\mathscr H_i=(p_Z-p_B)\ell^2(G)^{n_i}$ by applying its columns to $\delta_e$. This embedding is injective, since a group von Neumann operator annihilating $\delta_e$ annihilates all its right translates. Its image is dense because it contains $(p_Z-p_B)(\mathbb CG)^{n_i}\delta_e$. Consequently the natural map from $H_i^{\mathrm{alg}}$ to $\mathscr H_i$ has image this dense $P_i$, not necessarily all of $\mathscr H_i$. The same dictionary applies to the dual finite matrix complex. [F1, given, algebra]

1.2 The cellular cap map in [F3] is represented by a map between finite free $R$ complexes, using the dual cellular decomposition or a finite common subdivision. Its homology maps are isomorphisms: apply [F3] to the regular $R$ fiber as a complex local system; all the constructions commute with right multiplication by $R$. Cellular cochains here are the finite dual matrix complex: on each relative cell the local-coefficient cochain is its freely specified fiber value, and induction over the finite cellular filtration gives the cochain comparison, just as for the cellular chain comparison in [F2]. The cap map's cone is therefore a bounded acyclic complex of finite free $R$ modules. Such a complex is contractible: start at its lowest nonzero degree, split the surjection onto that projective term, remove the resulting two-term identity complex, and continue over the finitely many degrees. All splittings are maps between finite projective summands of finite free modules and hence are finite matrices of elements of $R$. Every such matrix acts boundedly on $\ell^2(G)$. The cap map and its chain homotopy inverse consequently extend to bounded chain homotopy equivalences after completion. [F2, F3, construct, algebra]

2.1 Consider three consecutive terms of an algebraically exact homology sequence in [F2], and decompose each as $P\oplus T$ by step 1.1. Every map from $T$ to a finite algebraic projection module vanishes: its image has dimension zero, whereas every nonzero element in a finite projection module generates a positive-dimensional submodule by the spectral quotient formula and faithfulness in [F1]. Hence the sequence induces maps $f_P,g_P$ on the algebraic projective reduced parts. These are restrictions of bounded maps on their Hilbert completions: restriction and inclusion come from finite cellular matrices, and connecting maps can be computed using the degreewise free splittings of the relative or cellular union chain sequence, again by finite matrices followed by harmonic projections. Let $K_A=\ker g_P$, a finite algebraic projection module whose Hilbert closure is the kernel $K_H$ of the completed map, by the same matrix-kernel argument as in step 1.1. View $K_A$ inside the middle algebraic homology using its harmonic-cycle splitting. Its image under the actual second homology map lies in the target $T$, so $K_A/\ker(g|_{K_A})$ has dimension zero. The quotient formula in [F1] makes $\ker(g|_{K_A})$ Hilbert-dense in $K_H$. Exactness identifies each of its elements with an actual preceding image; projecting that preimage off its $T$ summand does not change its projected image. Thus $\ker(g|_{K_A})\subseteq\operatorname{im}f_P\subseteq K_A$. The completed preceding image consequently has closure $K_H$. This proves weak exactness on completed reduced homology without identifying $P$ with its Hilbert completion. [F1, F2, step 1.1, algebra]

2.2 Bounded chain homotopies descend to completed reduced homology, because differentials and all maps are bounded and therefore preserve closures of boundaries. Thus the maps in step 1.2 induce bounded mutually inverse maps on the Hilbert completions $\mathscr H_i$ of step 1.1. Orthogonal projection identifies completed reduced cohomology of the finite dual matrix complex with the Hilbert dual of completed reduced homology: both are the orthogonal complement of boundaries within cycles, and the involution on $R$ identifies the adjoint matrices. On a closed manifold the intersection map is exactly cap duality followed by this Riesz identification; it is therefore bounded and invertible. Its usual symmetry sign follows from the cellular cup/cap identity. [step 1.1, step 1.2, algebra]

3.1 The cellular identity $\partial(c\cap z)=\pm((\delta c)\cap z)\pm c\cap\partial z$ proves compatibility with boundary and restriction before completion. The cup/cap and intersection identities likewise hold on cellular cycles, by their defining evaluation on the dual cells. Any chain homotopies involved are finite matrices, hence remain bounded after completion by step 1.2. They vanish on reduced homology, and every relevant map is continuous. The identities therefore persist on reduced homology with the same orientation signs. Together with steps 1.1, 2.1 and 2.2 this proves all assertions. [F3, step 1.1, step 2.1, step 1.2, step 2.2, algebra] ∎
