---
id: prop-base-change-freeness-and-specialization-in-the-deformed-family
kind: proposition
title: Base change, freeness and specialization in the deformed family
status: published
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
       thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules,
       cor-weak-nullstellensatz-algebraically-closed-coordinate-form, thm-nakayama-lemma]
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

[F2] For every complex closed fiber of the polynomial family, the Duflo–Joseph theorem identifies $U(\mathfrak g)/U(\mathfrak g)\ker\chi$ with the $\mathfrak g$-finite endomorphisms of the corresponding Verma module and gives $\dim\operatorname{Hom}_{\mathfrak g}(M(\mu),E\otimes M(\mu))=\dim E_0$; over $Z$, the module $\operatorname{Hom}_{\mathfrak g}(E,U(\mathfrak g))$ is free of rank $\dim E_0$ ([[thm-duflo-joseph-g-finite-endomorphisms-of-verma-modules]], [[lem-kostant-adjoint-isotypic-multiplicities-have-zero-weight-rank]]).

[F3] $U(\mathfrak g)$ is free over $Z$ with a filtered harmonic basis, $\operatorname{gr}Z=S(\mathfrak g)^{\mathfrak g}$ and $\operatorname{gr}U(\mathfrak g)=S(\mathfrak g)$; the Chevalley restriction identifies the invariants with $S(\mathfrak h)^W$, and orbit sums form a basis of the finite Weyl invariants ([[thm-enveloping-algebra-is-free-over-its-center]], [[thm-kostant-harmonic-decomposition-of-the-symmetric-algebra]], [[lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Work first over the polynomial ring $S$, before localizing. Put $G=F\otimes E^*$. Tensor-Hom adjunction identifies the stated tensor-object Hom module with $\operatorname{Hom}_{\mathfrak g\otimes S}(M_S(\lambda),G\otimes M_S(\lambda))$. A map is determined by a singular vector in the finite free deformed weight space of relative weight $\lambda$; the simple raising equations give a finite polynomial matrix $A$. The PBW model [F1] supplies the domain and codomain bases. [F1, algebra]

2.1 Every complex point of $\operatorname{Spec}S$ gives kernel dimension $\dim G_0$ by [F2], so $A$ has the same rank $s$ at every such point. Every $(s+1)$-minor therefore vanishes as a polynomial; the $s$-minors generate the unit ideal, because otherwise a maximal ideal containing them would be an evaluation ideal by [[cor-weak-nullstellensatz-algebraically-closed-coordinate-form]], contradicting rank $s$ there. On an open where an $s$-minor is invertible, row and column elimination gives $\operatorname{diag}(I_s,0)$. Thus the kernel is finite projective of rank $\dim G_0$ and commutes with arbitrary base change. This argument is over $S$, so it applies to every localization $T$, even one whose closed points are not complex evaluation points. [F1, F2, step 1.1, algebra]

3.1 For each finite-dimensional simple $L$, the adjoint $L$-multiplicity module of $U\otimes_ZS$ is $S\otimes_{\mathbb C}\operatorname{Hom}_{\mathfrak g}(L,\mathcal H)$ by the harmonic decomposition [F3] and [F2]; it is finite free of rank $\dim L_0$. The action maps it to $\operatorname{Hom}_{\mathfrak g}(L,\operatorname{End}_S M_S(\lambda))$, which by tensor-Hom adjunction is the kernel from step 2.1 for $G=L^*$. At every complex point this map is an isomorphism by Duflo–Joseph [F2]. Its cokernel is finite and vanishes by local Nakayama at every maximal ideal of $S$; the resulting surjection splits onto the projective target, and its kernel, a projective module of rank zero, vanishes on each local free chart. Hence it is an isomorphism. Localizing gives the same result over $T$. Finite-dimensional complete reducibility decomposes every finite adjoint submodule, so these isotypic isomorphisms prove (1). [F2, F3, step 2.1, algebra]

4.1 For $G=F\otimes E^*$, tensor-Hom adjunction identifies the tensor-object Hom module with the adjoint $G^*$-multiplicity module of the endomorphism algebra in (1). Step 3.1 makes it free of rank $\dim G_0=\dim(E\otimes F^*)_0$; equality of the last dimensions follows by dualizing $G$. Step 2.1 proves its base-change assertion. Finite sums distribute over Hom, and for summands a Hom module is the image of the split idempotent $f\mapsto e_Nfe_M$ on an ambient Hom module. Such images are finite projective and commute with every base change. This proves (2) and (3) without claiming that arbitrary projective modules over arbitrary localizations are free. [step 2.1, step 3.1, algebra]

5.1 Over the local ring $R$ at the origin, the deformed weight spaces of objects of $\mathcal D_R(\lambda)$ are finite projective, hence finite free: lift a residue basis, use Nakayama for a surjection from a free module, split it by projectivity, and apply Nakayama to the complementary kernel. A map whose residue fiber is an isomorphism has invertible determinant on each such weight space, so it has a weightwise inverse. The inverses commute with the $\mathfrak g$-action because the original map does. This proves (4). AC is inherited from the named suppliers. [F1, F3, step 4.1, algebra] ∎
