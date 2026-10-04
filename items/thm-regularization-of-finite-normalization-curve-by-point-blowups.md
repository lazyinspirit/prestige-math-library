---
id: thm-regularization-of-finite-normalization-curve-by-point-blowups
kind: theorem
title: Regularization of a one-dimensional integral curve with finite normalization by point blowups
status: published
origin: pipeline
deps: [lem-normalization-factors-through-blowup-of-curve-point, lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center, lem-point-blowup-of-integral-curve-is-finite, lem-increasing-sequence-of-coherent-subsheaves-stabilizes, lem-blowup-reduced-integral-under-domain-rees, def-blowup-scheme-along-ideal, thm-one-dimensional-regular-local-rings-are-dvrs, def-coherent-module-scheme, def-integral-scheme, def-axiom-of-choice, cor-blowup-birational-integral-scheme, def-embedding-dimension-and-regular-local-ring, def-dimension-noetherian-topological-space, def-locally-noetherian-and-noetherian-scheme, cor-finite-type-algebra-over-noetherian-ring-is-noetherian, def-finite-morphism-schemes, cor-dimension-preserved-by-integral-extensions, lem-chain-dimension-open-cover]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "The Stacks Project, tag 0BI4 (Lemma 54.15.1)"
      url: https://stacks.math.columbia.edu/tag/0BI4
      locator: "Lemma 54.15.1 with its proof: for a one-dimensional integral Noetherian scheme with finite normalization, iterated blowups at non-regular closed points produce a finite strictly increasing sequence of coherent submodules of the fixed finite modification, which stabilizes; complete text retrieved and read 2026-10-03."
    - title: "The Stacks Project, tag 0AB7 (Varieties, Lemma 33.17.2)"
      url: https://stacks.math.columbia.edu/tag/0AB7
      locator: "The source's finiteness input for the blowup morphisms; here it is supplied by the proper-plus-quasi-finite criterion through lem-point-blowup-of-integral-curve-is-finite."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $Y$ be an integral
Noetherian scheme of dimension one whose normalization
$\nu:Y^{\nu}\to Y$ is finite. Then there exists a finite sequence
$$Y_n\longrightarrow Y_{n-1}\longrightarrow\cdots\longrightarrow Y_1\longrightarrow Y$$
of blowups in closed points such that $Y_n$ is regular. Moreover the sequence
may be chosen with every center a non-regular closed point of the preceding
curve; then no blowup is an isomorphism, and the increasing sequence of
coherent $\mathcal O_Y$-subalgebras
$\mathcal O_Y\subseteq f_{1,*}\mathcal O_{Y_1}\subseteq
f_{2,*}\mathcal O_{Y_2}\subseteq\cdots\subseteq\nu_*\mathcal O_{Y^{\nu}}$
(with $f_i:Y_i\to Y$ the composite) strictly increases at every step, so that
termination is exactly Noetherian stabilization of this sequence.

No claim is made about normalizations that are not finite, and no
higher-dimensional resolution of singularities is asserted. If $Y$ is already
regular the sequence may be taken empty ($n=0$).

## Facts & Assumptions

[F1] Step data for a point blowup of $Y_{i-1}$: the blowup
$\beta_i:Y_i=\operatorname{Bl}_{p_{i-1}}Y_{i-1}\to Y_{i-1}$ in a closed point is
finite, is an isomorphism if and only if $\mathcal O_{Y_{i-1},p_{i-1}}$ is
regular, and the finite normalization of $Y_{i-1}$ factors uniquely through it,
so that $Y^{\nu}$ is a normalization of $Y_i$ and
$(\beta_i)_*\mathcal O_{Y_i}$ lies between $\mathcal O_{Y_{i-1}}$ and
$\nu_{i-1,*}\mathcal O_{Y^{\nu}}$
([[lem-point-blowup-of-integral-curve-is-finite]],
[[lem-normalization-factors-through-blowup-of-curve-point]]).

[F2] If the center is non-regular, the inclusion
$\mathcal O_{Y_{i-1}}\subsetneq(\beta_i)_*\mathcal O_{Y_i}$ is strict with
nonzero quotient of finite length supported at the center
([[lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center]]).

[F3] Integrality and Noetherianity are preserved: the blowup of an integral
scheme in a nonzero ideal of finite type is integral
([[cor-blowup-birational-integral-scheme]]), and the source of a finite morphism
onto a Noetherian scheme is Noetherian, its affine charts being finitely
generated algebras over Noetherian rings
([[def-finite-morphism-schemes]],
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]). The finite birational map has injective integral maps on affine coordinate domains, so dimension is preserved on an affine cover ([[cor-dimension-preserved-by-integral-extensions]], [[lem-chain-dimension-open-cover]]).

[F4] Stabilization: on the Noetherian scheme $Y$, every increasing sequence of
coherent subsheaves of the coherent module $\nu_*\mathcal O_{Y^{\nu}}$
stabilizes ([[lem-increasing-sequence-of-coherent-subsheaves-stabilizes]],
[[def-coherent-module-scheme]]).

[F5] A one-dimensional integral Noetherian scheme is regular if and only if
all of its closed points are regular: a local ring at a non-closed point of a
one-dimensional integral scheme is a field, hence regular
([[def-integral-scheme]],
[[def-dimension-noetherian-topological-space]],
[[def-embedding-dimension-and-regular-local-ring]]).

[F6] The Axiom of Choice is assumed for the choice of one non-regular closed
point at each stage and for the cited suppliers
([[def-axiom-of-choice]]).

## Proof

**Given:** AC, an integral Noetherian one-dimensional scheme $Y$ with finite normalization $\nu:Y^{\nu}\to Y$.

1.1 (Base of the recursion) Put $Y_0=Y$ and $f_0=\operatorname{id}_Y$; then $Y_0$ is integral, Noetherian and one-dimensional, $\nu:Y^{\nu}\to Y_0$ is a finite normalization and $f_0$ is finite. We construct, as long as the current curve is not regular, a point blowup at a non-regular closed point and keep the data of [F1]. [F1, F5, given]

2.1 (Existence of a suitable center) Suppose $Y_{i-1}$ is not regular. By [F5] some closed point $p_{i-1}\in Y_{i-1}$ is not regular; choose it and let $\beta_i:Y_i=\operatorname{Bl}_{p_{i-1}}Y_{i-1}\to Y_{i-1}$ be the blowup, with $f_i=f_{i-1}\circ\beta_i$. By [F1] the morphism $\beta_i$ is finite, is not an isomorphism (the center is non-regular), and $Y^{\nu}$ is a normalization of $Y_i$; by [F3] the scheme $Y_i$ is integral, Noetherian and one-dimensional, and $f_i$ is finite. By [F2] the inclusion $f_{i-1,*}\mathcal O_{Y_{i-1}}\subsetneq f_{i,*}\mathcal O_{Y_i}$ is strict, both terms being coherent $\mathcal O_Y$-subalgebras of $\nu_*\mathcal O_{Y^{\nu}}$. [F1, F2, F3, F5, step 1.1]

3.1 (Termination) Suppose, for contradiction, that $Y_{i-1}$ is non-regular for every $i\ge1$. Then step 2.1 can be iterated for all $i$, and it produces the infinite strictly increasing sequence $\mathcal O_Y\subsetneq f_{1,*}\mathcal O_{Y_1}\subsetneq f_{2,*}\mathcal O_{Y_2}\subsetneq\cdots\subseteq\nu_*\mathcal O_{Y^{\nu}}$ of coherent $\mathcal O_Y$-submodules of the coherent module $\nu_*\mathcal O_{Y^{\nu}}$ over the Noetherian scheme $Y$. This contradicts stabilization [F4]. Hence there is an integer $n\ge0$ with $Y_n$ regular. [F2, F4, step 2.1]

4.1 (Conclusion) The finite sequence $Y_n\to Y_{n-1}\to\cdots\to Y_1\to Y$ consists of blowups in closed points, each center non-regular in the preceding curve, and ends at the regular curve $Y_n$; no morphism in it is an isomorphism by [F1], and the associated sequence of coherent subalgebras strictly increases at every step by [F2]. Conversely, stabilization of this sequence is precisely what forces the termination: a stabilized non-regular stage would admit one further strict increase, contradicting stabilization. This proves all assertions, including the empty sequence when $Y$ is already regular. No assertion is made for non-finite normalizations or in dimension greater than one. [F6, step 2.1, step 3.1] ∎
