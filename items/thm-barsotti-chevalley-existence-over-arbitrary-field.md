---
id: thm-barsotti-chevalley-existence-over-arbitrary-field
kind: theorem
title: "Barsotti-Chevalley existence over an arbitrary field, allowing nonsmooth affine kernel"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-dependent-choice, def-abelian-variety-over-a-field, prop-abelian-variety-commutativity-from-rigidity, thm-abelian-variety-is-projective, thm-barsotti-chevalley-perfect-field-group-variety, lem-nonaffine-characteristic-zero-group-smooth, lem-nonaffine-high-frobenius-smooth-image, lem-nonaffine-frobenius-power-ideal-subgroup-descent, lem-nonaffine-affine-and-finite-morphism-fppf-descent, lem-nonaffine-geometric-properness-field-descent, lem-nonaffine-group-image-exact-quotient-properties, lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties, lem-nonaffine-connected-group-geometrically-connected, thm-nonaffine-group-scheme-normal-subgroup-quotient, thm-existence-of-algebraic-closures, def-proper-morphism]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "completed-independent-mathematical-review"
    date: 2026-10-03
    scope: "Complete item claim and mathematical body read in delegated Step 5a reader; evidence: research/frontier-38-owner-30-reader-24.md; immutable carrier: research/frontier-38-owner-30-step5-hash-24-post.json; exact saved draft bytes in git d90f26208 match that carrier after exclusion of the later judge stamp. Current content matches the saved carrier except publication status and verification metadata. Source and supplier coverage is limited to the report."
    delegated_by: "owner via tools/autopilot frontier-38-owner-30 reader-24 dispatch"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Theorem 8.28, with its Frobenius-image correction, pp.154-155"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Theorem 4.3.2 and Theorem 4.3.4 with Lemma 4.3.5"
      url: https://arxiv.org/pdf/1509.03059
    - title: "Conrad, A modern proof of Chevalley's theorem on algebraic groups, Theorem 1.1 and inseparable descent discussion"
      url: https://virtualmath1.stanford.edu/~conrad/papers/chev.pdf
---

## Statement

Assume AC and DC. For every connected separated finite-type group scheme $G$ over any field $k$, there is a connected affine closed normal subgroup scheme $N\subset G$ whose represented quotient $G/N$ is an abelian variety. The quotient projection is faithfully flat of finite presentation with scheme kernel $N$, so
$$1\longrightarrow N\longrightarrow G\longrightarrow G/N\longrightarrow1$$
is exact as fppf group sheaves. The abelian quotient is commutative and projective. Neither smoothness of $G$ nor perfectness of $k$ is assumed. The subgroup $N$ is not asserted smooth, even when $G$ is smooth, and no uniqueness is asserted under these hypotheses.

## Facts & Assumptions

[F1] The perfect-field theorem applies to smooth connected groups; every finite-type characteristic-zero group is smooth. ([[thm-barsotti-chevalley-perfect-field-group-variety]], [[lem-nonaffine-characteristic-zero-group-smooth]])

[F2] For a finite purely inseparable extension, Frobenius power ideals descend a closed normal subgroup as a nilpotent thickening, preserving affineness and connectedness. Affineness and smoothness can be checked after faithful field extension, and properness can be checked after any field extension. ([[lem-nonaffine-frobenius-power-ideal-subgroup-descent]], [[lem-nonaffine-affine-and-finite-morphism-fppf-descent]], [[lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties]], [[lem-nonaffine-geometric-properness-field-descent]])

[F3] Normal quotients exist as separated finite-type group schemes with fppf projection. Group images are exact quotients by scheme kernels. Quotients of smooth connected groups are smooth connected, extensions of affine groups are affine, and connected groups are geometrically connected. ([[thm-nonaffine-group-scheme-normal-subgroup-quotient]], [[lem-nonaffine-group-image-exact-quotient-properties]], [[lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties]], [[lem-nonaffine-connected-group-geometrically-connected]])

[F4] In characteristic $p>0$, high relative Frobenius has a smooth scheme-theoretic image, is finite and a universal homeomorphism onto that image, and has finite kernel. Properness means finite type, separatedness and universal closedness. Algebraic closures exist under AC. ([[lem-nonaffine-high-frobenius-smooth-image]], [[def-proper-morphism]], [[thm-existence-of-algebraic-closures]])

[F5] A proper smooth geometrically connected group is an abelian variety and is commutative and projective. ([[def-abelian-variety-over-a-field]], [[prop-abelian-variety-commutativity-from-rigidity]], [[thm-abelian-variety-is-projective]])

## Proof

**Given:** AC, DC, a field $k$, and a connected separated finite-type $k$-group $G$.

1.1 First suppose $G$ smooth. In characteristic zero the field is perfect and [F1] already proves the assertion. In characteristic $p>0$, choose an algebraic closure by [F4] and let $k_{\mathrm{perf}}$ be the union of its finite purely inseparable extensions of $k$. This is a perfect field. By [F1], $G_{k_{\mathrm{perf}}}$ has a smooth connected affine closed normal subgroup $N_\infty$ with abelian quotient. Descend this subgroup to a finite purely inseparable $K/k$ inside $k_{\mathrm{perf}}$, as follows. On a finite affine cover of $G$, its ideal is finitely generated. Include in $K$ the finitely many coefficients of its generators, generators of the relations identifying the ideals on a finite affine cover of each overlap, and the finite equations making multiplication, inverse, identity and conjugation factor through it. Equality of ideals and vanishing of these equations hold after faithful scalar extension, hence already at the finite stage after enlarging $K$. Also include an affine finite-presentation model of $N_\infty$ and the finitely many chart maps and inverse equations identifying it with this descended closed subscheme. Thus the subgroup $N'\subset G_K$ is affine and normal. Smoothness descends by [F2]; connectedness descends since a disconnection remains one after scalar extension. The quotient $G_K/N'$ becomes the given abelian quotient after scalar extension, because both represent the same fppf coset sheaf, by [F3]. Its properness therefore descends by [F2]. This supplies a finite purely inseparable stage with all the required properties. [F1, F2, F3, F4, given, choose, construct, algebra]

2.1 Apply the power-ideal descent in [F2] to $N'$ to obtain a connected affine closed normal $N\subset G$ for which $N_K$ contains $N'$ as a nilpotent closed subscheme. Let $Q=G/N$, represented by [F3]. The map $G_K\to Q_K$ factors through $P=G_K/N'$; the induced map $P\to Q_K$ is surjective because the projection from $G_K$ is surjective. This map has proper source and separated finite-type target and is proper: its graph is closed in $P\times_KQ_K$, whose projection to $Q_K$ is proper, by the definition of properness and base change. Hence $Q_K$ is proper over $K$. Explicitly, for every $K$-scheme $T$ and closed $Z\subset Q_K\times_KT$, its preimage in $P\times_KT$ is closed and its image in $T$ is closed by properness of $P$; surjectivity, retained by base change, makes that image exactly the image of $Z$. Finite type and separatedness of $Q_K$ come from [F3], giving properness by [F4]. Descend properness to $Q$ by [F2]. Since $G$ is smooth connected, [F3] makes $Q$ smooth connected and geometrically connected. It is therefore an abelian variety by [F5]. This proves the smooth-source case without descending a smooth subgroup to $k$. [F2, F3, F4, F5, step 1.1, construct, algebra]

3.1 For arbitrary $G$ in characteristic zero, [F1] reduces to the smooth-source case. In positive characteristic let $f:G\to S$ be a sufficiently high relative Frobenius with smooth image, as in [F4]. It is finite and a universal homeomorphism onto $S$, which is connected. Its scheme kernel $F$ is finite, hence affine, and connected: a universal homeomorphism has a single geometric point in the fibre over the identity. By [F3], $f$ is the represented exact quotient $G/F$ and is faithfully flat of finite presentation. Apply the smooth-source case to $S$ to obtain a connected affine normal $M\subset S$ with abelian quotient $A=S/M$. Define $N=G\times_SM$, a closed normal subgroup. The restricted projection is an exact sequence $1\to F\to N\to M\to1$, so [F3] makes $N$ affine. The projection $N\to M$ is a base change of the finite universal homeomorphism $f$ and is onto; hence $N$ is connected. [F1, F3, F4, step 1.1, step 2.1, construct, algebra]

4.1 The composite $G\to S\to A$ has scheme kernel $N$ and is fppf surjective: both factors are faithfully flat of finite presentation. It therefore identifies its coset sheaf with $G/N$. Indeed every point of $A$ lifts fppf locally first to $S$ and then to $G$, and two lifts differ precisely by a point of $N$; these assertions after arbitrary test-scheme base change identify the sheaves. The represented quotient in [F3] is thus $A$, an abelian variety. Its projectivity and commutativity follow from [F5]. The Frobenius step used the smooth image $S$, not the whole twist of $G$, which can remain nonsmooth for every exponent; and the inseparable descent in step 2.1 retained nilpotent subgroup structure. Thus no smoothness or uniqueness of the arbitrary-field kernel was introduced. AC and DC are inherited from [F1]–[F5]. [F3, F5, step 3.1, algebra] ∎
