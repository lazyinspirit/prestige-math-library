---
id: lem-modc-surjective-orbit-tangents-give-finite-orbits
kind: lemma
title: Surjective orbit tangents give finitely many open orbits
status: published
dependency_level: 0
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - thm-chevalley-constructible-image-varieties
  - lem-constructible-dense-contains-open
  - lem-dominant-map-generic-differential-surjectivity-char-zero
  - lem-classical-variety-noetherian-components
  - lem-local-dimension-reduced-variety-components
  - thm-jacobian-criterion-affine-variety
  - thm-dimension-at-most-embedding-dimension
  - lem-regular-local-domain-induction
  - lem-dimension-nonempty-open-subset
sources:
  references:
    - title: Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, Theorem 9.1.4
      url: https://math.mit.edu/~etingof/egnobookfinal.pdf
---

## Statement

Assume the Axiom of Choice. Let $k$ be algebraically closed of characteristic zero, let $G$ be a finite product of general linear groups, and let $X$ be a reduced affine variety of finite type with an algebraic $G$-action. If the differential of $f_x:G\to X$, $g\mapsto gx$, is surjective onto $T_xX$ at the identity for every $x\in X$, then every orbit is open and there are finitely many orbits. Empty products and the empty variety are allowed.

## Facts & Assumptions

**Given:** The field, group, variety and tangent-surjectivity hypothesis.

[F1] Under AC, a morphism has constructible image, and a dense constructible subset of an irreducible variety contains a nonempty open ([[thm-chevalley-constructible-image-varieties]], [[lem-constructible-dense-contains-open]]).

[F2] Under AC in characteristic zero, a dominant map of irreducible varieties has a surjective differential at some point mapping to the regular locus of the target ([[lem-dominant-map-generic-differential-surjectivity-char-zero]]).

[F3] Classical varieties are Noetherian with finitely many components; their open subsets are quasi-compact ([[lem-classical-variety-noetherian-components]]).

[F4] At a closed point of a reduced finite-type variety the local dimension is the maximum of dimensions of its components through that point; the regularity criterion is equality of local dimension and tangent dimension ([[lem-local-dimension-reduced-variety-components]], [[thm-jacobian-criterion-affine-variety]]); local dimension is at most embedding dimension ([[thm-dimension-at-most-embedding-dimension]]). Regular local rings are domains ([[lem-regular-local-domain-induction]]).

[F5] A proper closed subvariety of an irreducible variety has strictly smaller dimension ([[lem-dimension-nonempty-open-subset]]).

[F6] AC is assumed because the classical algebraic geometry suppliers [F1]–[F5] carry that assumption ([[def-axiom-of-choice]]).

## Proof

1.1 Fix $x$ and write $O=Gx$, $Z=\overline O$ with reduced structure. The group $G$ is irreducible: it is the principal open defined by the product of determinants in an affine space, whose polynomial coordinate ring is a domain. Its image and closure are therefore irreducible. By [F1] the orbit is constructible and contains a nonempty open $U$ of $Z$. Every $g\in G$ preserves $Z$, since it preserves $O$ and is a homeomorphism. Transitivity gives $O=\bigcup_{g\in G}gU$, so $O$ is open in $Z$ and consequently is a locally closed subvariety of $X$. [F1, given, construct]

2.1 The orbit map factors through $Z$: on an affine chart every function vanishing on $Z$ pulls back to a function zero at every point of the reduced variety $G$, so it is zero. Apply [F2] to the dominant map $G\to Z$. At some $g$ its differential has rank $\dim Z$, since the image point is regular. The differential of the closed immersion $Z\hookrightarrow X$ is injective, as the map on cotangent spaces is a quotient map. Thus $d_g f_x$, considered as mapping into $T_{gx}X$, has rank $\dim Z$. The identity $f_x\circ L_g=(g\cdot -)\circ f_x$ shows that this rank is the same as the rank at the identity, since left translation and the action of $g$ induce tangent isomorphisms. By the hypothesis it follows that $\dim T_xX=\dim Z$. [F2, step 1.1, given, algebra]

3.1 Since $x\in Z\subseteq X$, local dimension obeys $\dim Z\le\dim_xX\le\dim T_xX$; the last inequality is the embedding-dimension bound in [F4]. Step 2.1 makes both inequalities equalities. Hence $\mathcal O_{X,x}$ is regular and therefore a domain by [F4]. There is exactly one irreducible component $C$ of $X$ through $x$: distinct components through $x$ give distinct minimal primes in this local ring, since localization at $x$ preserves the prime-ideal inclusion correspondence. The irreducible closed subset $Z$ lies in a component through $x$, hence in $C$, and has $\dim Z=\dim_xX=\dim C$. By [F5] it follows that $Z=C$. [F4, F5, step 2.1, algebra]

4.1 Remove from $X$ the finitely many components other than $C$. This gives an open neighbourhood $V$ of $x$ contained in $C$. Since $O$ is open in $C$ by step 1.1, $V\cap O$ is an open neighbourhood of $x$ in $X$ contained in $O$. Translating this neighbourhood by elements of $G$ proves that all of $O$ is open in $X$. All orbits being open, they form a disjoint open cover of the Noetherian, hence quasi-compact, variety $X$. A finite subcover exists by [F3], and disjointness means it lists every nonempty orbit. The empty variety has no orbits; if $G$ is the trivial group the argument says each point is open and quasi-compactness still gives finiteness. AC enters through [F1]–[F5], and no extra infinite choices are made. [F3, F6, step 1.1, step 3.1, construct] ∎
