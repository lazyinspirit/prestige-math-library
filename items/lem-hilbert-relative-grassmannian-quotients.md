---
id: lem-hilbert-relative-grassmannian-quotients
kind: lemma
title: "Relative Grassmannian of finite locally free quotients"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-dependent-choice
  - thm-projective-bundle-represents-line-quotients
  - thm-relative-proj-base-change
  - lem-hilbert-family-vanishing-locus
  - def-axiom-of-choice
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
    - title: "Nitin Nitsure, Construction of Hilbert and Quot Schemes, Sections 2–5"
      url: "https://arxiv.org/pdf/math/0504590"
    - title: "Alexander Grothendieck, Les schémas de Hilbert, Bourbaki 221, Sections 2–3"
      url: "https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf"
---

## Statement

Assume AC and DC. For a coherent sheaf $W$ on a locally Noetherian scheme $S$ and $e\ge0$, rank-$e$ locally free quotients of $W$ are represented by a projective finitely presented scheme $\operatorname{Gr}_S(W,e)$ with universal quotient $U$. Formation commutes with arbitrary base change. Its determinant $\det U$ is relatively very ample. In particular its Plücker map is a closed immersion into $\mathbb P_S(\bigwedge^eW)$, with projective bundles in the quotient convention.

## Facts & Assumptions

**Given:** The hypotheses in the statement and AC and DC, inherited from the scheme, cohomology, and finite-module suppliers ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] Projective bundles represent invertible quotients ([[thm-projective-bundle-represents-line-quotients]]) and their formation commutes with base change ([[thm-relative-proj-base-change]]).

## Proof

1.1 First suppose $W$ is locally free of rank $a$ and $e\le a$, and trivialize $W$. For each $e$-element set $I\subseteq\{1,\ldots,a\}$, the quotients in which the images of these basis vectors form a basis of $U$ are represented by the affine space of $e\times(a-e)$ matrices, inserting the identity in columns $I$. On overlaps, invert the relevant $e\times e$ minor and change the basis of $U$ by that invertible matrix. Matrix inversion gives the transition maps and multiplication proves the cocycle identities. The affine charts therefore glue, and identify the scheme's functor with rank-$e$ quotients: every such quotient is covered by its invertible-minor loci. The construction is unchanged by any base ring map. [construct, algebra]

2.1 Taking determinants gives a line quotient $\bigwedge^eW\twoheadrightarrow\det U$ and hence a map to the projective bundle in [F1]. On a Plücker chart where coordinate $p_I$ is invertible, divide all coordinates by $p_I$ and normalize the $I$ columns to the identity. Each remaining matrix entry is, with its determinant sign, the Plücker coordinate replacing one column of $I$. Every other coordinate must be the corresponding minor of this reconstructed matrix; these finitely many polynomial equations cut out exactly our affine chart as a closed subscheme of that projective chart. They impose both directions: any quotient gives these minors, and conversely a point satisfying the equations has precisely the normalized matrix and its quotient. The inverse image of each projective chart is the corresponding Grassmannian chart. Since all projective charts cover, the Plücker map is a closed immersion. Its pullback of $\mathcal O(1)$ is $\det U$, proving the claims. The cases $e=0,a$ give $S$ and the same argument with a zero-size matrix. [F1, step 1.1, algebra]

2.2 For general coherent $W$, work over a Noetherian affine base open and take a presentation $\mathcal O^b\xrightarrow{D}\mathcal O^a\twoheadrightarrow W$. A quotient of $W$ is a quotient of $\mathcal O^a$ that kills $D$. On each chart of the free-source Grassmannian the universal quotient has a finite matrix, so killing $D$ is a finite set of polynomial equations. This defines a closed subscheme representing the coherent-source functor; if $e>a$ it is empty, and for $e=0$ it is the base. These local schemes glue uniquely on overlaps because their quotient functors and universal quotients agree. No finite global generating set is required. [step 1.1, algebra]

3.1 For a coherent sheaf $V$, $\mathbb P(V)$ represents invertible quotients as well: locally a finite presentation makes $\operatorname{Sym}V$ the polynomial algebra modulo its degree-one relation forms, so $\mathbb P(V)$ is the closed locus in a finite projective space where those forms vanish; these are exactly the line quotients annihilating the presentation relations. Thus this representation does not require local freeness. The determinant quotient $\bigwedge^eW\twoheadrightarrow\det U$ gives a global map into $\mathbb P_S(\bigwedge^eW)$. On a local presentation it is the factor of the free-source Plücker closed immersion through the closed subbundle $\mathbb P(\bigwedge^eW)\subseteq\mathbb P(\bigwedge^e\mathcal O^a)$. Its image is closed there: the source already has a closed image in the larger projective bundle by steps 2.1–2.2, and factoring a closed immersion through a closed subscheme stays a closed immersion. Factoring holds because the quotient of $\mathcal O^a$ annihilates the presentation relations, hence its exterior quotient annihilates the kernel of $\bigwedge^e\mathcal O^a\to\bigwedge^eW$. Closed immersion is local on the target, so this gives the global assertion. Its tautological pullback is $\det U$. All presentations, equations, and functor identifications commute with arbitrary base change, proving the base-change claim for coherent $W$. [F1, step 2.1, step 2.2, algebra] ∎
