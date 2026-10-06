---
id: thm-normalization-glues-variety
kind: theorem
title: Normalization of a classical variety by gluing affine normalizations
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
dependency_level: 3
proof_strategy: direct
justified_by: []
aliases: []
deps: [def-normalization-affine-variety, thm-normalization-finite-birational-surjective, lem-finite-normalization-compatible-with-principal-opens, def-classical-integral-affine-atlas-and-chartwise-morphism, def-classical-algebraic-prevariety-regular-maps-and-varieties, lem-classical-integral-affine-charts-have-canonical-common-function-field, lem-classical-variety-noetherian-components, lem-principal-opens-form-affine-basis, thm-classical-principal-open-coordinate-ring-localization, lem-classical-morphisms-glue-on-open-cover, lem-classical-open-source-morphisms-equal-on-dense-open, thm-classical-affine-morphisms-coordinate-ring-antiequivalence, thm-classical-rational-map-maximal-domain-affine-target, def-axiom-of-choice, def-morphism-classical-varieties]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for thm-normalization-glues-variety and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-1; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"c8f5d7ea8ac01248bce5602b51f8c60c52199eb7c1db4fbf98dfebb9d5e100ce","evidence":["research/frontier-38-owner-30-reader-1.md","research/frontier-38-owner-30-reader-findings-1.json","research/frontier-38-owner-30-dispatch/reader-reader-1.result.json","research/frontier-38-owner-30-step5-hash-1-post-5a.json","research/frontier-38-owner-30-alpha-batch-1-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-1.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/thm-normalization-glues-variety.md","historical_raw_sha256":"1fcfbb4f3008fff77dca8b746042466a0dd89e230acdd1f42e6fe8f6ee5eb3a6","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:41:54.938Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry (2025 version), Ch. 8 §b: construction of the normalization by gluing (Propositions 8.2-8.3, Definition 8.5)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, MIT 18.721 Algebraic Geometry notes (January 26, 2022), Ch. 4 §§4.2-4.3 Integral extensions; Normalization"
      url: "https://ocw.mit.edu/courses/18-721-algebraic-geometry-fall-2020/"
---

## Statement

Assume the Axiom of Choice. Let $X$ be an irreducible classical variety over an
algebraically closed field. Then $X$ has a normalization: a finite, surjective,
birational morphism $\nu\colon X^{\nu}\to X$ from a normal variety $X^{\nu}$,
determined up to unique isomorphism over $X$. On each affine chart $U$ with
coordinate ring $A$, $\nu^{-1}(U)$ is the affine normalization of $U$; the
charts glue by identities inside the common function field, and the
construction is independent of the chosen finite affine cover. A reduced
reducible variety is normalized by taking the disjoint union of the
normalizations of its irreducible components.

## Facts & Assumptions
**Given:** AC, the algebraically closed field $k$, the irreducible classical variety $X$ with function field $k(X)$, a finite affine cover $X=U_1\cup\cdots\cup U_n$ by affine charts with coordinate rings $A_i=k[U_i]$, and for each $i$ the integral closure $B_i$ of $A_i$ in $k(X)$ with the affine normalization $\nu_i\colon U_i^{\nu}\to U_i$.

[F1] Each $\nu_i$ is a finite, surjective, birational morphism of affine varieties, and $U_i^{\nu}$ is normal with coordinate ring $B_i$ ([[def-normalization-affine-variety]], [[thm-normalization-finite-birational-surjective]]).

[F2] Normalization commutes with principal localization: for $0\ne f\in A_i$, the integral closure of $(A_i)_f$ in $k(X)$ is $(B_i)_f$, a finite $(A_i)_f$-module, and principal opens form a basis with coordinate ring the localization ([[lem-finite-normalization-compatible-with-principal-opens]], [[lem-principal-opens-form-affine-basis]], [[thm-classical-principal-open-coordinate-ring-localization]]).

[F3] All charts of $X$ share the one function field $k(X)$, so the integral closures $B_i\subseteq k(X)$ are subrings of a common field; every open subvariety of $X$ has a finite affine cover and morphisms between varieties agreeing on a dense open agree, while morphisms to an affine target glue over open covers ([[lem-classical-integral-affine-charts-have-canonical-common-function-field]], [[lem-classical-variety-noetherian-components]], [[lem-classical-open-source-morphisms-equal-on-dense-open]], [[lem-classical-morphisms-glue-on-open-cover]], [[def-classical-integral-affine-atlas-and-chartwise-morphism]]).

[F4] Affine morphisms correspond contravariantly to $k$-algebra homomorphisms, and a rational map to an affine target has a unique maximal representative domain; these are the tools that identify the normalizations computed from different charts ([[thm-classical-affine-morphisms-coordinate-ring-antiequivalence]], [[thm-classical-rational-map-maximal-domain-affine-target]], [[def-classical-algebraic-prevariety-regular-maps-and-varieties]], [[def-morphism-classical-varieties]]).

## Proof

1.1 Chartwise normalization. By [F1] each chart $U_i$ has its affine normalization $\nu_i\colon U_i^{\nu}\to U_i$, finite, surjective and birational, with $U_i^{\nu}$ normal and $k[U_i^{\nu}]=B_i\subseteq k(X)$. [F1, given]

2.1 Compatibility on overlaps. Cover $U_i\cap U_j$ by opens principal in both charts. To construct them around a point, choose $D_{U_i}(f)\subseteq U_j$, then $D_{U_j}(g)\subseteq D_{U_i}(f)$ containing the point. On $D_{U_i}(f)$ write $g=a/f^m$ with $a\in A_i$ by [F2]; since $D_{U_j}(g)$ is contained there, it equals $D_{U_i}(fa)$. Thus each such open has coordinate ring computable as a localization of either chart; by [F2] the integral closure over $D(f)$ computed from the $i$-side is $(B_i)_f$ and from the $j$-side is the corresponding localization of $B_j$, and both equal the integral closure of the common ring of $D(f)$ inside the common field $k(X)$, hence agree as subrings of $k(X)$. The anti-equivalence [F4] therefore produces a canonical isomorphism $U_i^{\nu}|_{D(f)}\cong U_j^{\nu}|_{D(f)}$ over $D(f)$; on triple overlaps these identifications satisfy the cocycle condition because all of them are the identity of the common subring of $k(X)$, and different choices of $f$ agree by the same uniqueness. [F2, F3, F4, step 1.1]

3.1 Gluing. Since principal opens cover each overlap and the identifications of step 2.1 are compatible, the varieties $U_i^{\nu}$, together with their maps to $X$, glue along the open overlaps by the standard gluing of compatible classical charts; the maps $\nu_i$ agree on overlaps because they are determined by the inclusions $A_i\hookrightarrow B_i$ in the common field [F3, F4], so they glue to a morphism $\nu\colon X^{\nu}\to X$. The glued variety $X^{\nu}$ is normal, since normality is local and each chart is normal [F1]; it is separated because $\nu$ is finite, the diagonal over $X$ being affine-locally cut out by the surjection $B_i\otimes_{A_i}B_i\to B_i$; and the morphism $\nu$ is finite, surjective and birational because these properties are affine-local on the target and hold on every chart by [F1] and [F2]. [F1, F2, F3, F4, step 2.1]

4.1 Independence and conclusion. If two finite affine covers are used, refine both to principal opens; on every such principal open the two affine normalizations agree as subrings of $k(X)$ by [F2], so the two glued models agree over a cover and hence are canonically identified over $X$ by [F3, F4]. Thus $X$ has a normalization $\nu\colon X^{\nu}\to X$ that is finite, surjective and birational from a normal variety; its uniqueness up to unique isomorphism over $X$ is the universal property proved later on this page, and in the reducible case the disjoint union of the component normalizations is normal, finite, surjective and birational over each component, hence is a normalization of the reduced variety. [F1, F2, F3, F4, step 3.1] ∎
