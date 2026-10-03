---
id: lem-regular-quotient-dualizing-complex-and-biduality
kind: lemma
title: "Dualizing complexes and coherent biduality for regular-ring quotients"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-axiom-of-choice", "def-dualizing-complex-on-projective-cm-scheme", "lem-finite-closed-immersion-derived-coinduction-adjunction", "thm-localisation-and-polynomial-extension-of-regular-rings", "lem-global-dimension-is-detected-on-cyclic-modules"]
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
    - title: "Stacks, Lemma 47.15.8: dualizing complex under a finite ring map"
      url: https://stacks.math.columbia.edu/tag/0AX0
    - title: "Stacks, Lemma 47.15.3: coherent derived biduality"
      url: https://stacks.math.columbia.edu/tag/0A7C
    - title: "Jeffries, Local Cohomology, 4.4, Corollary 4.30 and Lemma 4.37: canonical module and homothety for CM quotients"
      url: https://jack-jeffries.github.io/UM/LCnotes.pdf
---

## Statement

Assume AC. Let $A$ be a regular Noetherian ring of finite dimension $n$, let $L$ be an invertible $A$-module, and let $B=A/I$ be nonzero. For any integer $s$,
$$D_B=R\operatorname{Hom}_A(B,L[s])$$
is a dualizing complex over $B$. For $M\in D^b_{\mathrm{fin}}(B)$, $\mathbb D_B(M)=R\operatorname{Hom}_B(M,D_B)$ belongs to $D^b_{\mathrm{fin}}(B)$ and the canonical evaluation $M\to\mathbb D_B\mathbb D_B(M)$ is an isomorphism. These assertions localize, so apply to the affine restrictions of a regular closed projective embedding.

## Facts & Assumptions

**Given:** $A,B,L,s$ and AC as above.

[F1] A regular finite-dimensional Noetherian ring has global dimension equal to its dimension ([[thm-localisation-and-polynomial-extension-of-regular-rings]]). Global dimension is also the supremum of injective dimensions ([[lem-global-dimension-is-detected-on-cyclic-modules]]).

[F2] Derived coinduction and its adjunction are [[lem-finite-closed-immersion-derived-coinduction-adjunction]].

[F3] The local dualizing-complex conditions are [[def-dualizing-complex-on-projective-cm-scheme]].

## Proof

1.1 Every finite $A$-module has a bounded resolution by finite projective modules: finite generation of each kernel follows from Noetherianity, and the $n$th syzygy is projective by the global-dimension bound. Bounded complexes with finite cohomology are perfect as well, by truncation triangles and cones of such resolutions. For a bounded finite-projective complex $P$, the ordinary termwise map $P\to\operatorname{Hom}_A(\operatorname{Hom}_A(P,L[s]),L[s])$ is an isomorphism of complexes with the signed evaluation convention: the two shifts and the two factors of $L$ cancel. Thus $R\operatorname{Hom}_A(-,L[s])$ has coherent biduality. [F1, given, algebra]

2.1 By [F1], $L$ has a bounded injective resolution $I^\bullet$. Applying $\operatorname{Hom}_A(B,-)$ gives a bounded complex of injective $B$-modules by [F2], representing $D_B$. Its cohomology is finite over $A$, since $B$ has a finite projective resolution, and the $B$-action makes it finite over $B$. For bounded finite $B$-cohomology, the adjunction identifies the underlying $A$-complex of $\mathbb D_B(M)$ with $R\operatorname{Hom}_A(M,L[s])$, so it too has bounded finite cohomology. [F1, F2, step 1.1, construct]

3.1 Apply that adjunction twice. The underlying $A$-complex of $\mathbb D_B\mathbb D_B(M)$ becomes the ambient double dual in step 1.1. Under these adjunctions the canonical $B$-evaluation becomes the ambient evaluation: both send an element $m$ to the functional $\varphi\mapsto\varphi(m)$, followed by evaluation at $1\in B$; resolving gives the same signed identity for complexes. It is therefore a quasi-isomorphism after forgetting the $B$-action, hence a quasi-isomorphism over $B$. At $M=B$, the identification $\mathbb D_B(B)=D_B$ shows that $B\to R\operatorname{Hom}_B(D_B,D_B)$ is precisely the homothety isomorphism. Together with step 2.1 this proves all conditions in [F3] and biduality. Finite projective resolutions show that derived Hom and evaluation commute with localization, so the construction agrees on intersections of affine charts. AC is used in the ambient global-dimension and resolution suppliers. [F2, F3, step 1.1, step 2.1, algebra] ∎
