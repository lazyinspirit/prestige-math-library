---
id: lem-regularization-of-curve-on-noetherian-ambient-by-point-blowups
kind: lemma
title: Regularization of an integral curve on an arbitrary Noetherian ambient scheme
status: published
origin: pipeline
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-27.md"
      - "research/frontier-38-owner-30-alpha-batch-27-5a.md"
      - "research/frontier-38-owner-30-step5-hash-27-post.json"
    reviewed_raw_sha256: "50f99163159929a4ac377c62646c4329ff46c5a051f52f791881fc27f926c711"
    content_sha256: "786216ea68ab348f04192844146e7b6e465040eaf3d57a5de6e4e1345ded9ea9"
deps: [thm-regularization-of-finite-normalization-curve-by-point-blowups, thm-blowup-closed-immersion-transform-universal, def-strict-transform-closed-subscheme, def-blowup-scheme-along-ideal, def-axiom-of-choice, thm-affine-blowup-standard-charts, cor-finite-type-algebra-over-noetherian-ring-is-noetherian, def-integral-scheme, def-embedding-dimension-and-regular-local-ring, def-locally-noetherian-and-noetherian-scheme]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, tag 0BI5 (Lemma 54.15.2)"
      url: https://stacks.math.columbia.edu/tag/0BI5
      locator: "Lemma 54.15.2 and its complete proof: the intrinsic blowup sequence of Y yields the corresponding sequence of blowups of the ambient Noetherian scheme, because the strict transform is the blowup (Divisors, Lemma 31.34.2, tag 080E); retrieved and read 2026-10-03."
    - title: "The Stacks Project, tag 080E (Divisors, Lemma 31.34.2)"
      url: https://stacks.math.columbia.edu/tag/080E
      locator: "The strict transform of a closed subscheme under a blowup is the blowup of that subscheme in the inverse image closed subscheme; the library item thm-blowup-closed-immersion-transform-universal supplies this."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a Noetherian
scheme and let $Y\subseteq X$ be an integral closed subscheme of dimension one
whose normalization is finite. Then there exists a finite sequence
$$X_n\longrightarrow X_{n-1}\longrightarrow\cdots\longrightarrow X_1\longrightarrow X$$
of blowups in closed points such that the strict transform of $Y$ in $X_n$ is a
regular curve. If the closed points blown up in $X$ are chosen to be the images
of the corresponding centers of the intrinsic sequence for $Y$, the strict
transform of $Y$ in $X_i$ is canonically the $i$-th intrinsic blowup of $Y$.

## Facts & Assumptions

[F1] The intrinsic regularization theorem: since $Y$ is integral, Noetherian,
one-dimensional and has finite normalization, there are a finite sequence
$Y_n\to Y_{n-1}\to\cdots\to Y_1\to Y$ of blowups at non-regular closed points
and a factorization of the normalization through every stage, and $Y_n$ is
regular ([[thm-regularization-of-finite-normalization-curve-by-point-blowups]]).

[F2] Strict transform under a blowup: if $Z\subseteq X$ is a closed subscheme
and $\pi:\operatorname{Bl}_IX\to X$ is a blowup, the strict transform of $Z$ is
canonically the blowup of $Z$ in the inverse image ideal of $I$; on charts it is
cut out by the saturation of the pullback ideal. The construction may be
iterated on the strict transform along a further blowup
([[thm-blowup-closed-immersion-transform-universal]],
[[def-strict-transform-closed-subscheme]]).

[F3] The blowup of a Noetherian scheme in a closed point is Noetherian: choose
a finite affine open cover of the base by spectra of Noetherian rings
([[def-locally-noetherian-and-noetherian-scheme]]). The center ideal has finitely
many generators on each chart, giving a finite standard affine chart cover of
its blowup. Those chart rings are finitely generated algebras over Noetherian
rings, hence Noetherian. The resulting finite affine cover makes the whole
blowup Noetherian ([[thm-affine-blowup-standard-charts]],
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]],
[[def-blowup-scheme-along-ideal]]).

[F4] A closed point of a closed subscheme is a closed point of the ambient
scheme, and the strict transform of an integral curve at each stage is an
integral closed subscheme of the ambient scheme, of dimension one
([[def-integral-scheme]],
[[def-strict-transform-closed-subscheme]]).

[F5] The Axiom of Choice is assumed, inherited from the intrinsic sequence and
the blowup suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** AC, a Noetherian scheme $X$, an integral closed one-dimensional subscheme $Y\subseteq X$ with finite normalization, and the intrinsic blowup sequence of [F1].

1.1 Apply [F1] to $Y$: this gives a finite sequence of closed points $y_0\in Y_0=Y$, $y_1\in Y_1,\dots,y_{n-1}\in Y_{n-1}$ with $Y_i=\operatorname{Bl}_{y_{i-1}}Y_{i-1}$, each $y_{i-1}$ non-regular in $Y_{i-1}$, and $Y_n$ regular. Since $Y_{i-1}$ is integral of dimension one, each $y_{i-1}$ is a closed point of $Y_{i-1}$ ([[def-integral-scheme]]). [F1]

2.1 Define the ambient sequence by $X_0=X$ and, inductively, $X_i=\operatorname{Bl}_{z_{i-1}}X_{i-1}$, where $z_{i-1}$ is the image of $y_{i-1}$ under the closed immersion $Y_{i-1}\hookrightarrow X_{i-1}$ whose construction is the induction claim proved below. Each $z_{i-1}$ is a closed point of $X_{i-1}$ by [F4], and each $X_i$ is Noetherian by [F3]. [F3, F4, step 1.1]

3.1 Claim: for every $i$ the strict transform of $Y$ in $X_i$ is canonically isomorphic over $Y$ to $Y_i$; in particular $Y_i$ embeds in $X_i$ as a closed subscheme, so the induction of step 2.1 is legitimate. For $i=0$ this is the identity $Y_0=Y$. Assume it for $i-1$. The blowup $X_i\to X_{i-1}$ is the blowup at the point $z_{i-1}\in Y_{i-1}\subseteq X_{i-1}$; by [F2] the strict transform of $Y_{i-1}$ in $X_i$ is the blowup of $Y_{i-1}$ in the inverse image ideal of $z_{i-1}$, which is the maximal ideal of the point $y_{i-1}$, and this blowup is $\operatorname{Bl}_{y_{i-1}}Y_{i-1}=Y_i$. Since strict transforms may be iterated (the strict transform of $Y$ in $X_i$ equals the strict transform of the strict transform $Y_{i-1}$ of $Y$ in $X_{i-1}$, by the saturation description of [F2]), the strict transform of $Y$ in $X_i$ is $Y_i$. [F2, step 1.1, step 2.1]

4.1 Taking $i=n$, the strict transform of $Y$ in $X_n$ is canonically $Y_n$, which is regular by step 1.1; hence the finite sequence of blowups in closed points constructed in step 2.1 has the required property, and by construction its centers are the images of the intrinsic centers, so the canonical identification of strict transforms with the intrinsic blowups holds at every stage. This proves both assertions. [F5, step 1.1, step 3.1] ∎
