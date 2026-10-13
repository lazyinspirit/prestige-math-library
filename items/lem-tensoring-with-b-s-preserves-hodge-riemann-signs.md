---
id: lem-tensoring-with-b-s-preserves-hodge-riemann-signs
kind: lemma
title: "Tensoring a direct sum of Hodge-Riemann bimodules with B_s preserves the signs"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 7
deps: [def-invariant-intersection-form-on-a-bott-samelson-bimodule, def-the-deformed-lefschetz-operator-on-b-x-b-s, def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs, lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate, lem-hard-lefschetz-implies-primitive-decomposition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Elias-Williamson, The Hodge theory of Soergel bimodules (arXiv:1212.0791v2, final version; Ann. of Math. 180 (2014) 1089-1136)"
      url: "https://arxiv.org/pdf/1212.0791v2"
      locator: "Proposition 6.12 and its proof at the beginning of Section 6.6"
    - title: "Riche, La theorie de Hodge des bimodules de Soergel (d'apres Soergel et Elias-Williamson), Seminaire Bourbaki no. 1139 (arXiv:1711.02464, Octobre 2017)"
      url: "https://arxiv.org/pdf/1711.02464"
      locator: "Section 2.5, Lemme 2.9 and its proof"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Facts & Assumptions

**Given:** A parameter $\zeta\ge0$, a self-dual Soergel bimodule $B=\bigoplus_zB_z^{R,m_z}$ such that $m_z\ne0$ implies $\mathrm{S}(z)$ and $\mathrm{HR}(z,s)_\zeta$, an invariant non-degenerate form on $B$ making it even or odd and satisfying HR with the standard sign for left multiplication by $\rho$, and the induced form and deformed operator $L_\zeta$ on $BB_s$ ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]], [[def-the-deformed-lefschetz-operator-on-b-x-b-s]]).

[F1] Under $\mathrm{S}(z)$ the isotypic decomposition of $B$ is orthogonal for every invariant form, its forms are direct sums of the normalized forms on the isotypic pieces tensored with symmetric forms on the multiplicity spaces, and an orthogonal decomposition into indecomposable copies can be chosen; the restriction of the ambient form to a summand $B_z$ is a positive multiple of the normalized form when the embedding is through a reduced Bott-Samelson word ([[lem-invariant-forms-on-soergel-bimodules-are-unique-up-to-scalar-and-nondegenerate]]).

[F2] On the reduced module of $B_zB_s$ the operator $L_\zeta$ satisfies $\mathrm{HR}(z,s)_\zeta$, whose primitive signs are $(-1)^{(\ell(z)+1-i)/2}$ in degree $-i$, and the lowest degree of $B_zB_s$ is $-\ell(z)-1$; the standard-sign formulation and the half-integer convention are those of [[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]].

[F3] HR is preserved under orthogonal direct sums when each summand is checked with the ambient degree signs, and the primitive decomposition gives the signature formula determining definiteness from the signature of the Lefschetz form ([[lem-hard-lefschetz-implies-primitive-decomposition]], [[def-primitive-subspaces-hard-lefschetz-and-hodge-riemann-signs]]).

## Statement

Fix $\zeta\ge0$ and a self-dual Soergel bimodule $B=\bigoplus_zB_z^{R,m_z}$ such that $m_z\ne0$ implies $\mathrm{S}(z)$ and $\mathrm{HR}(z,s)_\zeta$; if $\zeta=0$ assume in addition that $m_z=0$ whenever $zs<z$. Assume $B$ is even or odd, carries an invariant non-degenerate form and satisfies HR with the standard sign with respect to left multiplication by $\rho$. Then $BB_s$ satisfies HR with the standard sign with respect to $L_\zeta$ and the induced form. More precisely, if the lowest degree of $B$ is $-d$, then the restriction of its form to a $B_z$ summand is $(-1)^{(d-\ell(z))/2}$ times a positive multiple of the normalized form on $B_z$. Tensoring gives the primitive sign $(-1)^{(d+1-i)/2}$ on degree $-i$ of $BB_s$, whose lowest degree is $-d-1$.

## Proof
**Proof technique:** direct; orthogonal isotypic decomposition and sign bookkeeping over the tensor factors.

1.1 **Unshifted orthogonal blocks and their scalars.** By [F1] the given unshifted decomposition of $B$ has orthogonal isotypic components, with the normalized perfect $B_z$ form tensored with a nonsingular real symmetric multiplicity matrix. Orthogonally diagonalize these finite matrices to obtain orthogonal unshifted copies $B_z$ with form $c_\alpha\langle-,-\rangle_z$, where $c_\alpha\ne0$. In each copy its bottom vector has degree $-\ell(z)$ and is primitive, since $\rho^{\ell(z)+1}$ vanishes by the degree bounds. Its normalized Lefschetz value is positive by [F1]. Ambient HR on $B$ says the value on this primitive vector has sign $(-1)^{(d-\ell(z))/2}$. Hence $c_\alpha$ has exactly that sign. This proves the claimed scalar comparison for every copy, including components which do not attain the bottom degree of $B$. No grading shifts are introduced. [given, F1, F3]

1.2 **Tensoring preserves the orthogonal decomposition and stability.** Tensoring the chosen decomposition of $B$ with $B_s$ gives an orthogonal decomposition $BB_s=\bigoplus_\alpha B_{z_\alpha}^{R}B_s$ for the induced form, because the induced form on a direct sum is the orthogonal sum of the induced forms and the isotypic components remain mutually orthogonal. The deformed operator $L_\zeta$ is built from left multiplication by $\rho$ on the first factor and middle multiplication on the tensor position, so it preserves each block $B_z^RB_s$: the projections onto the blocks are bimodule maps commuting with left multiplication on the first factor, and middle multiplication by $\rho$ acts inside the balanced tensor position and commutes with the outer actions; hence the restriction of $L_\zeta$ to each block is the operator of the same name on that block. [given, F1, F2]

2.1 **Primitive signs on the blocks.** On each block $B_z^RB_s$ satisfying $\mathrm{HR}(z,s)_\zeta$, the primitive space in degree $-i$ is definite with sign $(-1)^{(\ell(z)+1-i)/2}$ by [F2], relative to the induced form normalized with bottom value $+1$; the actual restricted form differs from that normalization by the scalar of step 1.1, which is the sign $(-1)^{(d-\ell(z))/2}$ times a positive number, and a positive scalar changes no definiteness sign. The product of the two signs is $(-1)^{(d-\ell(z)+\ell(z)+1-i)/2}=(-1)^{(d+1-i)/2}$, independent of $z$; hence each block's primitive signs are the common standard signs of $BB_s$, whose lowest degree is $-d-1$: the bottom of each block is $-\ell(z)-1$, and the largest occurring $\ell(z)$ equals $d$ in the unshifted sum. [step 1.1, step 1.2, F2, algebra]

3.1 **The descent summands at $\zeta=0$ and conclusion.** If $\zeta=0$ the hypothesis excludes summands with $zs<z$, so every block $B_z^RB_s$ is an ascent block or has $zs>z$; no HR statement for a shifted descent block is used. By [F3] the orthogonal sum of the blocks satisfies HR with the common standard signs of step 2.1, and the lowest-degree sign is positive by the normalization of the bottom: the total bottom is $\bigoplus_{z\text{ at bottom}}B_z^{-\ell(z)}B_s^{-1}$, and each block contributes a positive multiple of its bottom primitive form, so the assembled form is positive there. Hence $BB_s$ satisfies HR with the standard sign with respect to $L_\zeta$ and the induced form, and the displayed sign $(-1)^{(d+1-i)/2}$ is exactly the standard sign of the tensor product; this completes the proof. [step 1.1, step 1.2, step 2.1, F1, F3] ∎

## Remarks

- The hypothesis at $\zeta=0$ that there are no right-descent summands is exactly what keeps the degenerate shifted case of the weak-Lefschetz package out of the argument; that case is handled separately in the zero-parameter hard-Lefschetz theorem.
- The definiteness of the multiplicity-space pairings is not automatic from non-degeneracy; it is the HR hypothesis on $B$ that produces the sign $(-1)^{(d-\ell(z))/2}$ used in step 3.1.
