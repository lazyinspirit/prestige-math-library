---
id: lem-finite-closed-immersion-derived-coinduction-adjunction
kind: lemma
title: "Derived adjunction for finite rings and closed immersions"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-axiom-of-choice", "lem-ringed-space-module-sheaves-enough-injectives", "thm-ext-is-hom-in-the-derived-category", "lem-bounded-below-complexes-admit-injective-replacements", "thm-a-bounded-below-complex-of-injectives-is-homotopically-injective", "thm-flasque-sheaves-acyclic", "lem-closed-immersion-cohomology-pushforward", "thm-extension-by-zero-adjunction-exactness"]
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
    - title: "Stacks, Lemma 47.13.1: derived finite-ring adjunction"
      url: https://stacks.math.columbia.edu/tag/0A70
    - title: "Stacks, Lemma 47.3.4: coinduction preserves injectives"
      url: https://stacks.math.columbia.edu/tag/08XR
    - title: "Vakil 2025, 29.4.A\u2013B and 29.4.5: closed-immersion adjunction and injectives"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf
---

## Statement

Assume AC. For a finite homomorphism $A\to B$ of Noetherian rings and $G\in D^+(A)$, the complex $f^!G=R\operatorname{Hom}_A(B,G)$ has its natural $B$-action and is right adjoint to restriction of scalars. For $M\in D^b(B)$ there is a natural isomorphism
$$R\operatorname{Hom}_B(M,f^!G)\cong R\operatorname{Hom}_A(M,G).$$
For a closed immersion $i:X\hookrightarrow Y$ of Noetherian schemes and $G\in D^+(\mathcal O_Y)$, set $i^!G=i^{-1}\mathcal R\!Hom_Y(i_*\mathcal O_X,G)$ with its $\mathcal O_X$-action. The analogous internal and global derived Hom adjunctions hold:
$$i_*\mathcal R\!Hom_X(M,i^!G)\cong\mathcal R\!Hom_Y(i_*M,G),\qquad R\operatorname{Hom}_X(M,i^!G)\cong R\operatorname{Hom}_Y(i_*M,G).$$
The counit $i_*i^!G\to G$ is evaluation at $1$. Also $R\Gamma(Y,i_*K)=R\Gamma(X,K)$ for bounded coherent $K$. This is the finite-map adjunction needed for a projective embedding; it does not assert full faithfulness of $i_*$ on derived categories.

## Facts & Assumptions

**Given:** the maps, objects and AC in the statement.

[F1] Sheaves of modules on a ringed space have enough injectives under AC ([[lem-ringed-space-module-sheaves-enough-injectives]]); derived morphisms compute Ext ([[thm-ext-is-hom-in-the-derived-category]]). Bounded below injective replacements and their computation of derived Hom are [[lem-bounded-below-complexes-admit-injective-replacements]] and [[thm-a-bounded-below-complex-of-injectives-is-homotopically-injective]]. Flasque sheaves compute cohomology by [[thm-flasque-sheaves-acyclic]]. Extension by zero is exact and left adjoint to restriction ([[thm-extension-by-zero-adjunction-exactness]]); closed-immersion pushforward preserves cohomology and coherence ([[lem-closed-immersion-cohomology-pushforward]]).

## Proof

1.1 On rings the adjunction is explicit: a map $u:M\to\operatorname{Hom}_A(B,I)$ corresponds to $m\mapsto u(m)(1)$, with inverse sending $v:M\to I$ to $m\mapsto(b\mapsto v(bm))$. Restriction of scalars is exact, so its right adjoint sends injectives to injectives: applying $\operatorname{Hom}_B(-,\operatorname{Hom}_A(B,I))=\operatorname{Hom}_A(-,I)$ to an exact sequence proves this directly. Resolve $G$ by a bounded below complex $I^\bullet$ of injectives. Then $\operatorname{Hom}_A(B,I^\bullet)$ is bounded below and injective over $B$; the displayed degreewise Hom identity, including the usual total-complex signs, computes the derived adjunction. Bounded below injective complexes compute these derived Homs because maps from acyclic complexes are null-homotopic, constructed successively from the lowest nonzero target degree using injectivity. The adjunction is natural in both arguments. [F1, given, algebra]

2.1 For a closed immersion, $i_*$ is exact on all module sheaves: at a point of $X$ its stalk is the original stalk, and outside $X$ the stalk vanishes. Its right adjoint is $i^bI=i^{-1}\mathcal Hom_Y(i_*\mathcal O_X,I)$, by the same evaluation formula, and the ideal defining $X$ annihilates this Hom. Since $i_*$ is exact and $i^b$ is its right adjoint, $i^b$ sends injectives to injectives: for injective $I$ the functor $\operatorname{Hom}_{\mathcal O_X}(-,i^bI)\cong\operatorname{Hom}_{\mathcal O_Y}(i_*-,I)$ is a composition of the exact functor $i_*$ with the exact functor $\operatorname{Hom}_{\mathcal O_Y}(-,I)$. Restrictions of an injective module sheaf to an open subset remain injective, since extension by zero is exact and left adjoint to restriction. Applying the ringed-space adjunction on every open subset gives the internal Hom identity; applying it on all of $Y$ gives the global Hom identity. Injective resolutions now give the stated derived identities, and their counit is evaluation at $1$. [F1, step 1.1, algebra]

3.1 Extension by zero along a closed subset preserves flasque sheaves and is exact. Computing sheaf cohomology by flasque resolutions therefore identifies $R\Gamma(Y,i_*K)$ with $R\Gamma(X,K)$, first for sheaves and then for bounded complexes by totalizing their resolutions; this is the closed-immersion cohomology comparison of [F1], and the coherence of $i_*M$ for coherent $M$ is the same comparison read on an affine chart. AC enters through the resolution data; the adjunction formulas themselves involve no selections. [step 2.1, F1, construct] ∎
