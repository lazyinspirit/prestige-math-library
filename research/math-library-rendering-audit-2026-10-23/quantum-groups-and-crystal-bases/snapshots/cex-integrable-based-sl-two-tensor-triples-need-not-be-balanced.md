---
id: cex-integrable-based-sl-two-tensor-triples-need-not-be-balanced
kind: counterexample
title: "Integrable based sl-two tensor triples need not be balanced"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [lem-periodic-cyclotomic-based-sl-two-tensor-corrections-escape-every-finite-cut, lem-two-cyclotomic-shears-give-a-periodic-integrable-based-sl-two-chain, def-the-bar-lattice-and-integral-lattice-of-a-based-module, def-balanced-triple-and-globalization-map, thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique, lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations]
justified_by: []
aliases: []
proof_strategy: direct
---

## Statement refuted

For any two four-axiom based integrable modules in finite Cartan type, their algebraic tensor product with the actual integral quasi-$R$ tensor bar has finite supported normalized tensor global lifts and an integral balanced tensor triple.

Precisely, if $T_A$ is the raw integral tensor lattice, $T_0$ its regular zero chart and $T_\infty=\Psi(T_0)$ its actual bar chart, the unrestricted assertion says that the natural map

$$T_A\cap T_0\cap T_\infty\longrightarrow (T_A\cap T_0)/(T_A\cap qT_0)$$

is an isomorphism and gives algebraic normalized bar-fixed lifts of the raw tensor residue basis. Here the displayed reduction map is the natural unrestricted extension of the finite-dimensional balanced-triple map of [[def-balanced-triple-and-globalization-map]]; no assertion changes that definition's finite-dimensional contract.

## Facts & Assumptions

**Given:** Take two copies of the actual periodic four-axiom based integrable $U_q(\mathfrak{sl}_2)$ module of [[lem-two-cyclotomic-shears-give-a-periodic-integrable-based-sl-two-chain]], and its actual normalized tensor bar. Work over $\mathbb Q(q)$ with $A=\mathbb Z[q,q^{-1}]$, the rational local ring $A_0$ regular at zero, and the algebraic tensor product, whose vectors have finite support.

[F1] The module has an algebraic homogeneous raw basis $B=\{b_{j,a}\}$, a free divided-power stable integral lattice and both crystal charts, as in [[def-the-bar-lattice-and-integral-lattice-of-a-based-module]] and the construction in the Given. Put $T_A=\bigoplus_{B\times B}A(b\otimes b')$ and $T_0=\bigoplus_{B\times B}A_0(b\otimes b')$. Hence $T_A\cap T_0=\bigoplus_{B\times B}\mathbb Z[q](b\otimes b')$ and $T_A\cap qT_0=q(T_A\cap T_0)$.

[F2] The escape supplier [[lem-periodic-cyclotomic-based-sl-two-tensor-corrections-escape-every-finite-cut]] constructs the finite-cut normalized seed $b_{0,0}\otimes b_{0,2}$, proves raw-coordinate projection intertwines the full and cut bars, and proves that every cut $J\ge1$ has a nonzero corrected coordinate with index at least $J-1$.

[F3] The actual quasi-$R$ operator and unitarity of [[thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique]] and [[lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations]] give the tensor bar; in rank one its divided-power term is $q^{-r}\prod_{i=1}^r(q^{2i}-1)E^{(r)}\otimes F^{(r)}$.

## Counterexample

1.1 **A genuine algebraic integral tensor bar.** Each raw vector occupies finitely many finite standard divided strings, so only finitely many divided raising degrees in [F3] can act on its first factor. The evaluated tensor bar is therefore algebraic and finite column. Its coefficients are integral because the scalar in [F3] lies in $A$ and the actual factor lattices are divided-power stable. Unitarity makes it an involution, hence $\Psi(T_A)=T_A$. Degree zero is the identity and every other degree strictly raises first weight; the homogeneous shears preserve that weight. These properties hold in the actual four-axiom integrable finite-type module of [F1], without upper-cone bounds or completion. [given, F1, F3, algebra]

2.1 **Every element of the natural intersection is fixed.** Put $E=T_A\cap T_0\cap\Psi(T_0)$. If $g\in E$, then both $g$ and $\Psi g$ belong to $T_A\cap T_0$: integral stability is step 1.1, and $g\in\Psi(T_0)$ implies $\Psi g\in T_0$. Thus $w=\Psi g-g$ has finite raw coefficients in $\mathbb Z[q]$ and satisfies $\Psi w=-w$. If $w\ne0$, choose the least first weight among its finitely many nonzero raw coordinates. Strict transfer cannot enter this weight from another nonzero coordinate, so each coefficient $s(q)$ there satisfies $s(q^{-1})=-s(q)$. A polynomial satisfying this equation has no positive degree, hence is constant; then $2s=0$ over $\mathbb Z$ forces $s=0$, a contradiction. Therefore every $g\in E$ is bar fixed. This does not assume that the tensor bar preserves the zero chart. [F1, step 1.1, algebra]

3.1 **The seed has no finite lift.** Let $e=b_{0,0}\otimes b_{0,2}$, of total weight zero and first weight two. Suppose $g\in E$ maps to its residue. By [F1], $g-e$ has finite coefficients in $q\mathbb Z[q]$. Project to total weight zero, which preserves $T_A,T_0,\Psi(T_0)$ and the seed residue because the bar preserves total weight; step 2.1 makes this projection fixed. For any cut $J$ exceeding its maximal constituent index by two, [F2] projects it to a cut fixed vector with the same seed residue and positive-polynomial correction coefficients. Such a cut vector has no correction at first weights below or equal to the seed: at its least first weight, fixedness forces polynomial coefficients to be constants, and the prescribed residue eliminates every lower coordinate and every other seed-weight coordinate. Repeating this within the finitely many lower weights proves the required triangular normalization. Finite-cut uniqueness in [F2] therefore identifies the projection with $g^{(J)}$. But the projection has no coordinate beyond the finite support of $g$, whereas [F2] gives a nonzero coordinate with index at least $J-1$. This contradiction proves that the seed residue is absent from the image of the natural map. [F1, F2, step 2.1, algebra]

4.1 **Failure of unrestricted globalization.** The explicit natural integral reduction map is not surjective, and there is no algebraic normalized bar-fixed lift of $e$ in its raw integral zero chart. The two factors satisfy all four based axioms, are integrable and are of finite Cartan type; their actual tensor bar is finite, integral, triangular and involutive by step 1.1. Thus those hypotheses do not imply unrestricted finite supported tensor globalization or an integral balanced tensor triple. No assertion concerns bounded highest/lowest constructions, completion, or the finite-dimensional balanced-triple theorem. [step 1.1, step 3.1, F1] ∎
