---
id: thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra
kind: theorem
title: The endomorphisms of the antidominant projective form the coinvariant algebra
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 8
deps: [def-the-coinvariant-algebra-of-a-finite-weyl-group,
       def-regular-integral-category-o-block-and-its-antidominant-weight,
       def-the-deformed-category-o-family-and-its-specializations,
       lem-the-central-action-on-the-deformed-antidominant-projective,
       thm-harish-chandra-isomorphism-for-the-center,
       lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants,
       lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle,
       def-axiom-of-choice,
       thm-lifting-of-indecomposable-projectives-to-the-deformed-family,
       thm-chevalley-shephard-todd-for-finite-weyl-groups]
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
      locator: "Section 1.2, Endomorphismensatz 3, and Section 2.2, Endomorphismensatz 7 with its proof (preprint pp. 5 and 11-14)"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Theorem 4.18 (Soergel's Endomorphismensatz): the maps Z(g) -> R -> C and Z(g) -> End_{O_0}(P_{w_0}) are surjective and have the same kernel; in particular End_{O_0}(P_{w_0}) = C"
    - title: "Jonathan Brundan, Representations of the general linear Lie superalgebra in the BGG category O (survey; Section 4 with Soergel's Endomorphismensatz and Struktursatz)"
      url: "https://darkwing.uoregon.edu/~brundan/papers/supero.pdf"
      locator: "Section 4, Theorem 4.1 (Soergel's Endomorphismensatz) and the notes: 'Soergel's proof of the Endomorphismensatz goes via deformed category O; Bernstein subsequently gave a more elementary proof'"
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be finite-dimensional complex
semisimple, $\lambda$ the dominant regular integral representative of a block
and $\mathcal O_\lambda$ its block with antidominant weight $w_0\cdot\lambda$.
Let $C$ be the coinvariant algebra of
[[def-the-coinvariant-algebra-of-a-finite-weyl-group]] for the Cartan
reflection representation, with its grading fixed there. Then:

(1) the natural maps $Z(U(\mathfrak g))\to C$ (Harish-Chandra isomorphism,
shifted by $\lambda+\rho$ in the published $\operatorname{HC}_\rho$ convention,
followed by the quotient map $\rho$) and $Z(U(\mathfrak g))\to\operatorname{End}_{\mathfrak g}P(w_0\cdot\lambda)$
(multiplication) are surjective with the same kernel;

(2) consequently the multiplication map induces a canonical algebra isomorphism
$$\operatorname{End}_{\mathfrak g}P(w_0\cdot\lambda)\ \cong\ C,$$
identifying $C$ with the endomorphism ring of the antidominant projective,
canonically and independently of the choice of projective cover inside its
isomorphism class;

(3) the grading on the right-hand side is the internal grading of the
coinvariant algebra; no graded lift of category $\mathcal O$ is asserted or
used.

This is Soergel's Endomorphismensatz [Soe90, Theorem 7], in the regular integral
case; the companion general form for singular blocks replaces $C$ by the
invariants $C^{W_\lambda}$.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), the regular integral block of [[def-regular-integral-category-o-block-and-its-antidominant-weight]] with $R=S(\mathfrak h)_{(0)}$, the deformed antidominant lift $P_R$ of [[thm-lifting-of-indecomposable-projectives-to-the-deformed-family]], and its central-action algebra.

[F1] The central-action lemma [[lem-the-central-action-on-the-deformed-antidominant-projective]]: for $R=S_{(0)}$ the map $a_\lambda\colon Z\otimes R\to R\otimes_{R^W}R$, $z\otimes r\mapsto\sigma_\lambda(\operatorname{HC}_\rho(z))\otimes r$, and the multiplication map $Z\otimes R\to\operatorname{End}_{\mathfrak g\otimes R}(P_R)$ are surjective with the same kernel and induce an $R$-algebra isomorphism $\operatorname{End}_{\mathfrak g\otimes R}(P_R)\cong R\otimes_{R^W}R$; on the closed right fiber the algebra becomes $C=S/(S\,S^W_+)$ and, for dot-dominant integral $\nu$, $R^{W_\nu}\otimes_{R^W}R$ specializes to $C^{W_\nu}$.

[F2] Hom base change and residue fibers for the deformed lifts: for every map of deformation algebras $R\to R'$ one has $\operatorname{Hom}_{\mathcal O_R}(P_R,N)\otimes_RR'\cong\operatorname{Hom}_{\mathcal O_{R'}}(P_R\otimes_RR',N\otimes_RR')$, the residue fiber of $P_R$ at the closed point $0$ is $P(w_0\cdot\lambda)$, and a $\mathfrak g\otimes R$-linear map of deformed projectives that is an isomorphism on the residue fiber is itself an isomorphism ([[thm-lifting-of-indecomposable-projectives-to-the-deformed-family]]).

[F3] The shifted Harish-Chandra map $\operatorname{HC}_\rho(z)(\mu)=\operatorname{pr}(z)(\mu-\rho)$ is an algebra isomorphism $Z(U(\mathfrak g))\to S(\mathfrak h)^W$ ([[thm-harish-chandra-isomorphism-for-the-center]]); the invariant ring $S^W$ is polynomial and $S$ is free over it ([[thm-chevalley-shephard-todd-for-finite-weyl-groups]], [[lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants]]); the coinvariant algebra $C=S/(S\,S^W_+)$ has $C_0=\mathbb C$, its internal grading, one-dimensional socle in top degree and finite dimension $|W|$ ([[def-the-coinvariant-algebra-of-a-finite-weyl-group]], [[lem-the-coinvariant-algebra-is-a-gorenstein-algebra-with-one-dimensional-socle]]).

[F4] The block conventions: the dominant regular integral representative $\lambda$, the antidominant weight $w_0\cdot\lambda$, and for a singular dominant integral weight the stabilizer $W_\lambda$ and the invariant algebra $C^{W_\lambda}$ ([[def-regular-integral-category-o-block-and-its-antidominant-weight]], [[def-the-deformed-category-o-family-and-its-specializations]]).

## Proof

**Proof technique:** direct.

1.1 By [F1] the multiplication map $Z\otimes R\to\operatorname{End}_{\mathfrak g\otimes R}(P_R)$ is surjective, has the same kernel as $a_\lambda$, and makes the following diagram commute: $Z\otimes R\xrightarrow{\ a_\lambda\ }R\otimes_{R^W}R\xrightarrow{\ \sim\ }\operatorname{End}_{\mathfrak g\otimes R}(P_R)$. [F1]

1.2 Specializing the right factor along $R\to\mathbb C$ (the residue field at $0$) carries algebra isomorphisms to algebra isomorphisms, and [F2] identifies $\operatorname{End}_{\mathfrak g\otimes R}(P_R)\otimes_R\mathbb C\cong\operatorname{End}_{\mathfrak g}(P_R\otimes_R\mathbb C)=\operatorname{End}_{\mathfrak g}P(w_0\cdot\lambda)$, while the target specializes to $(R\otimes_{R^W}R)\otimes_R\mathbb C\cong R/(S\,S^W_+)=C$, and $a_\lambda$ specializes to the map sending $z$ to the class of $\operatorname{HC}_\rho(z)(\lambda+\rho+\tau)$. [F1, F2, F3]

2.1 Specializing the isomorphism of step 1.1 therefore gives the canonical algebra isomorphism $\operatorname{End}_{\mathfrak g}P(w_0\cdot\lambda)\cong C$, induced by the multiplication action alone and hence independent of the chosen projective cover up to the canonical identification; the specialized multiplication map is the shifted Harish-Chandra composite $z\mapsto\operatorname{HC}_\rho(z)(\lambda+\rho+\tau)$ followed by the quotient map $R\to C$, it is surjective, and the commutative diagram identifies its kernel with that of the multiplication map. Tensoring need not preserve kernels; no exactness of residue-field tensoring is used. [F1, F3, step 1.2]

3.1 The grading in (3) is the internal grading of $C$ transported along the isomorphism of step 2.1; no $\mathbb Z$-grading of category-$\mathcal O$ objects or of the Hom spaces is used; for a singular dominant integral $\lambda$ the same specialization of the central-action lemma gives $\operatorname{End}_{\mathfrak g}P\cong C^{W_\lambda}$, replacing the coinvariant algebra by its invariants. [F1, F4, step 2.1] ∎
