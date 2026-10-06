---
page: bochner-inversion-and-plancherel-on-lca-groups
title: "Bochner Inversion and Plancherel on LCA Groups"
status: draft
items: [def-fourier-transform-on-an-lca-group,
        lem-lca-haar-measure-is-inversion-invariant,
        lem-lca-lone-convolution-is-a-commutative-banach-star-algebra,
        lem-lca-translations-and-normalised-local-approximate-identities,
        lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations,
        lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution,
        lem-lca-lone-character-topology-is-the-compact-open-topology,
        lem-lca-scalar-unitization-character-space-and-spectrum,
        thm-riemann-lebesgue-lemma-on-lca-groups,
        lem-fourier-stieltjes-transforms-determine-finite-radon-measures,
        def-positive-definite-function-on-an-abelian-group,
        lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite,
        lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core,
        lem-bochner-functional-extends-and-has-a-radon-representing-measure,
        thm-bochner-theorem-for-lca-groups,
        cor-normalised-positive-definite-functions-correspond-to-probability-measures,
        lem-lca-positive-convolution-squares-form-an-inversion-core,
        thm-compatible-dual-haar-normalisation,
        thm-lca-fourier-inversion-for-integrable-transform,
        lem-lca-parseval-pairing-on-the-integrable-core,
        thm-lca-plancherel-isometric-extension]
examples: []
---

This page develops the representation, inversion and Plancherel theory of the
Fourier transform on a locally compact Hausdorff abelian group without assuming
Pontryagin biduality. The Fourier transform is defined on the class space
$L^1(G,m_G)$ in the conjugate-phase convention
$\widehat f(\gamma)=\int_Gf(x)\overline{\gamma(x)}\,dm_G(x)$; the transform is
well defined on classes and no dual measure is used in its definition.

The first block builds the locally required algebra and representation inputs:
Haar measure is invariant under inversion, convolution and the isometric
involution make $L^1(G,m_G)$ a commutative Banach $*$-algebra, normalised local
approximate identities give norm continuity of translations in every $L^p$,
the algebraically nonzero multiplicative functionals are exactly the Fourier
evaluations, the compact-open topology of the dual is the topology of pointwise
evaluation on $L^1$, and the scalar unitisation $A^+=\mathbb C\oplus A$ has
character space $\widehat G\cup\{q\}$ with $A$ semisimple. These local results
replace the earlier conditional Gelfand inputs; no C\*-unitisation or
noncommutative group-algebra theorem is used. The transform intertwines
translation, modulation, convolution and involution, and the Riemann-Lebesgue
lemma identifies the correct codomain: $\widehat f\in C_0(\widehat G)$ with
$\|\widehat f\|_\infty\le\|f\|_1$.

The second block proves that the Fourier-Stieltjes transform algebra is
uniformly dense in $C_0(\widehat G)$ and that a finite regular complex measure
on the dual is determined by its inverse transform. Positive definite functions
are then represented: the finite-matrix definition gives the elementary
consequences and the integrated positivity of
$L_\phi(f)=\int_Gf\phi(-\cdot)$, the repeated Cauchy-Schwarz and spectral
radius argument gives the transform-norm bound $|L_\phi(f)|\le\phi(0)\|\widehat f\|_\infty$,
and extension to $C_0(\widehat G)$ followed by the Riesz-Markov theorem
produces the unique representing finite positive Radon measure. This is
Bochner's theorem: a continuous function on $G$ is positive definite exactly
when it is the Fourier-Stieltjes transform of a unique finite positive Radon
measure of mass $\phi(0)$; the normalisation $\phi(0)=1$ corresponds to
probability measures.

The final block fixes the dual Haar scale. The compatible dual Haar
normalisation is constructed from the positive convolution-square core using
Bochner's theorem on each positive-definite core element, the consistency
identity $\widehat p\,\mu_q=\widehat q\,\mu_p$ and a local gluing of the
quotients $\mu_p/\widehat p$; the resulting Radon measure is shown to be
translation invariant and is the unique Haar scale for which inversion holds
on the core, with reciprocal scaling under rescaling of $m_G$. Fourier
inversion for an integrable transform returns the continuous representative of
the input class and claims no pointwise statement at the remaining points of an
arbitrary representative, and the Parseval pairing on the integrable core then
yields the unique linear isometric extension of the transform from
$L^1\cap L^2(G)\subseteq L^2(G)$ to $L^2(G,m_G)$. That extension is deliberately
only an isometric embedding: surjectivity, equivalently unitarity, is deferred
to the later Pontryagin duality pair and is not asserted here.

Choice assumptions are stated on each item. Dependent Choice suffices for the
inversion-invariance lemma, the convolution algebra, translation continuity and
the character computations; the general Banach-algebra and unitisation
machinery on this page uses the Axiom of Choice as declared on the items that
invoke it, and Bochner's theorem, the compatible dual Haar normalisation,
Fourier inversion and the Plancherel extension assume the Axiom of Choice and
Dependent Choice.
