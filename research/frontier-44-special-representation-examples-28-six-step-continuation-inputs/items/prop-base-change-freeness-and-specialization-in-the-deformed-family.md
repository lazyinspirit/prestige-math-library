---
id: prop-base-change-freeness-and-specialization-in-the-deformed-family
kind: proposition
title: Base change, freeness and specialization in the deformed family
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-the-deformed-category-o-family-and-its-specializations,
       thm-enveloping-algebra-is-free-over-its-center,
       thm-harish-chandra-isomorphism-for-the-center,
       thm-kostant-harmonic-decomposition-of-the-symmetric-algebra,
       lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants,
       def-axiom-of-choice,
       lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank,
       thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.1, Propositions 2, 3, 4, 5 and Lemma 1 (preprint pp. 7-10)"
    - title: "Wolfgang Soergel, The combinatorics of Harish-Chandra bimodules, J. reine angew. Math. 429 (1992) 49-74 (full text)"
      url: "http://sporadic.stanford.edu/macdo/papers/SoergelHC.pdf"
      locator: "Section 3.2, Theorem 9 and its proof: the deformed Endomorphismensatz and the two maps Z otimes T -> T^lambda otimes_{T^lambda} T and Z otimes T -> End P_lambda with the same kernel"
    - title: "Wolfgang Soergel, Universelle versus relative Einhuelle (Math. Ann. 284 (1989) 177-198)"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0284/LOG_0020.pdf"
      locator: "Section 1.2, p. 178 ('Ist P eine Borelsche, so ist R_<> = F'); Section 2.1, Proposition 1 on M = U(g) x_U(p) S; Section 3.5, Corollary 8. Image-only scan read via OCR; see the batch-13 notes for the reading record"
---

## Statement

Assume the Axiom of Choice. In the deformed family of
[[def-the-deformed-category-o-family-and-its-specializations]] with $T$ a
localization of $S=S(\mathfrak h)$ and $M,N\in\mathcal D_T(\lambda)$:

1. The canonical map
$$U(\mathfrak g)\otimes_ZT\longrightarrow\bigl(\operatorname{End}_T(M_T(\lambda))\bigr)^{\mathfrak g\text{-finite}},\qquad u\otimes t\longmapsto\bigl(m\mapsto u\cdot m\cdot t\bigr),$$
is an isomorphism of $T$-algebras, the superscript denoting the $\mathfrak g$-finite part for the adjoint action $X\cdot f=X\circ f-f\circ X$, and the center $Z=Z(U(\mathfrak g))$ acting on $T$ through the shifted Harish-Chandra isomorphism $\operatorname{HC}_\rho$ ([[thm-harish-chandra-isomorphism-for-the-center]]) followed by evaluation at $\lambda+\rho+\epsilon$ on the universal parameter $\epsilon$.
2. For finite-dimensional $\mathfrak g$-modules $E,F$, the $T$-module
$\operatorname{Hom}_{\mathfrak g\otimes T}(E\otimes M_T(\lambda),F\otimes M_T(\lambda))$
is free of rank $\dim(E\otimes F^{*})_0$, and the natural base-change map
$$\operatorname{Hom}_{\mathfrak g\otimes T}(M,N)\otimes_T\kappa(\epsilon)\longrightarrow\operatorname{Hom}_{\mathfrak g\otimes\kappa(\epsilon)}(M\otimes_T\kappa(\epsilon),N\otimes_T\kappa(\epsilon))$$
is an isomorphism for every $\epsilon\in\operatorname{Spec}T$.
3. $\operatorname{Hom}_{\mathfrak g\otimes T}(M,N)$ is locally free of finite rank over $T$.
4. If a $\mathfrak g\otimes R$-linear map of objects of $\mathcal D_R(\lambda)$ is an isomorphism on the special fiber at $0$, it is an isomorphism.

## Facts & Assumptions

**Given:** The universal family $M_S(\lambda)$, a localization $T$ of $S$, the center $Z=Z(U(\mathfrak g))$ with its shifted Harish-Chandra isomorphism, and finite-dimensional $\mathfrak g$-modules $E,F$.

[F1] The relative weight spaces of $M_S(\lambda)$ are finite free over $S$, and on fixed PBW bases the matrices of the raising operators $e_i$ on the relative $\lambda$-weight space are polynomial in the parameter; passing to a residue field $\kappa(\epsilon)$ gives the Verma module $M(\lambda+\epsilon)$ ([[def-the-deformed-category-o-family-and-its-specializations]]).

[F2] For every field fiber, the Duflo–Joseph theorem identifies $U(\mathfrak g)/U(\mathfrak g)\ker\chi$ with the $\mathfrak g$-finite endomorphisms of the corresponding Verma module and gives $\dim\operatorname{Hom}_{\mathfrak g}(M(\mu),E\otimes M(\mu))=\dim E_0$; over $Z$, the module $\operatorname{Hom}_{\mathfrak g}(E,U(\mathfrak g))$ is free of rank $\dim E_0$ ([[thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules]], [[lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank]]).

[F3] $U(\mathfrak g)$ is free over $Z$ with a filtered harmonic basis, $\operatorname{gr}Z=S(\mathfrak g)^{\mathfrak g}$ and $\operatorname{gr}U(\mathfrak g)=S(\mathfrak g)$; the Chevalley restriction identifies the invariants with $S(\mathfrak h)^W$, and orbit sums form a basis of the finite Weyl invariants ([[thm-enveloping-algebra-is-free-over-its-center]], [[thm-kostant-harmonic-decomposition-of-the-symmetric-algebra]], [[lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix finite-dimensional $E,F$ and consider the relative $\lambda$-weight space $W_T:=(E\otimes F^{*}\otimes M_T(\lambda))_{\lambda}$; by [F1] it is a finite free $T$-module, and the $\mathfrak n^+$-invariance equations $e_iw=0$ are given by a matrix $A$ with entries in $T$ acting on $W_T$. Tensor-hom adjunction identifies the kernel of $A$ with $\operatorname{Hom}_{\mathfrak g\otimes T}(E\otimes M_T(\lambda),F\otimes M_T(\lambda))$: maps are determined by the image of the highest-weight generator and land in the $\lambda$-weight space. [F1, algebra]

1.2 The rank $s$ of $A$ is constant on closed fibers: by [F2] the kernel of $A\otimes_T\kappa(\epsilon)$ has dimension $\dim(E\otimes F^{*})_0$ for every closed point $\epsilon$ (the fiber of $E\otimes F^{*}\otimes M_T(\lambda)$ at $\epsilon$ is $E\otimes F^{*}\otimes M(\lambda+\epsilon)$), and the domain $W_T\otimes\kappa(\epsilon)$ has constant dimension, so the rank is constant; hence every $(s+1)$-minor of $A$ vanishes and the $s$-minors have no common zero on $\operatorname{Spec}T$, so they generate the unit ideal. [F1, F2, algebra]

2.1 Consequently, on the principal open subsets where an $s$-minor is invertible, Gaussian elimination puts $A$ into the normal form $\operatorname{diag}(I_s,0)$, and the kernel of $A$ is a finite projective $T$-module, locally free of rank $\dim(E\otimes F^{*})_0$; over the graded localization $T$ it is in fact free of that rank, and its formation commutes with every base change, including residue fields of nonclosed primes. This proves the rank and base-change assertions of (2) for the stated Hom spaces, and (3) for summands. [step 1.1, step 1.2, algebra]

3.1 The action is an isomorphism on every isotypic component, by the same finite-matrix argument applied to the source: $\operatorname{Hom}_{\mathfrak g}(E,U(\mathfrak g))$ is free over $Z$ of rank $\dim E_0$ by [F2], its closed-fiber maps $U(\mathfrak g)/U(\mathfrak g)\ker\chi\to(\operatorname{End}M(\mu))^{\mathfrak g\text{-finite}}$ are the Duflo–Joseph isomorphisms by [F2], so the image and cokernel form finite modules whose closed fibers vanish; by local Nakayama at every maximal ideal the cokernel vanishes, and the equal-rank projective kernel vanishes as well. Hence the action is an isomorphism on each isotypic component and, by local finiteness of the adjoint action, on the whole $\mathfrak g$-finite part, giving (1). [F2, step 2.1]

3.2 Passing from $\operatorname{Hom}$ of tensor objects to the kernel computation of step 1.1 is natural in $E,F$, so the free rank and base-change isomorphisms of (2) follow for $M,N$ ranging over finite direct sums of tensor objects and their direct summands: images of split idempotents in these Hom modules remain finite projective and locally free, preserving all base-change isomorphisms. [step 2.1, algebra]

4.1 For (4): a $\mathfrak g\otimes R$-linear map $f:M\to N$ in $\mathcal D_R(\lambda)$ whose special fiber is an isomorphism has, on each of the finite free $R$-weight spaces, a matrix whose reduction modulo the maximal ideal is invertible; by the determinant/Nakayama argument over the local ring $R$, each such matrix is invertible, so $f$ is an isomorphism. The constructions use the harmonic freeness and the Harish-Chandra identification of [F3], and the Axiom of Choice is inherited from the published suppliers. [F3, step 3.1, algebra] ∎
