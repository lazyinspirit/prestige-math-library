---
id: thm-nonaffine-rational-map-smooth-variety-to-abelian-variety-extends
kind: theorem
title: "Rational maps from smooth varieties to abelian varieties extend"
status: published
origin: pipeline
deps: [lem-nonaffine-finite-field-descent-of-morphisms, thm-existence-of-algebraic-closures, def-axiom-of-choice, def-abelian-variety-over-a-field, lem-nonaffine-rational-map-normal-to-proper-codimension-two, lem-nonaffine-group-target-rational-indeterminacy-divisors, thm-regular-local-rings-are-normal]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for thm-nonaffine-rational-map-smooth-variety-to-abelian-variety-extends and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-24; unchanged reader mathematics. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"7b41e1b5dbd7bab032a3005aa4bc39d587c6f2ccbea4fbc076130782d01c1405","evidence":["research/frontier-38-owner-30-reader-24.md","research/frontier-38-owner-30-reader-findings-24.json","research/frontier-38-owner-30-dispatch/reader-reader-24.result.json","research/frontier-38-owner-30-step5-hash-24-pre.json"],"historical_binding":{"commit":"d90f26208","file":"items/thm-nonaffine-rational-map-smooth-variety-to-abelian-variety-extends.md","historical_raw_sha256":"363f9eec12e17004c8f4700052503aa92a0f03a29ad4c1a3c35395df523c996f","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:35:18.339Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Abelian Varieties, Chapter I, Theorem 3.2"
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: "Milne, Algebraic Groups (2022), 8.18, p.152"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Assume the Axiom of Choice. Over every field, every rational map from a smooth integral finite-type variety to an abelian variety extends uniquely to a morphism on the whole variety.

## Facts & Assumptions

[F1] A smooth variety is normal, since its regular local rings are normal. ([[thm-regular-local-rings-are-normal]])

[F2] Rational maps from normal varieties to proper schemes extend at every codimension-one point. Rational maps from smooth integral varieties to separated groups over an algebraically closed field have either empty or divisorial indeterminacy. ([[lem-nonaffine-rational-map-normal-to-proper-codimension-two]], [[lem-nonaffine-group-target-rational-indeterminacy-divisors]])

[F4] Morphisms descend uniquely under finite field extension when their two base extensions to the tensor-product field algebra agree; algebraic closures exist under AC. ([[lem-nonaffine-finite-field-descent-of-morphisms]], [[thm-existence-of-algebraic-closures]])

[F3] Abelian varieties are proper separated group varieties. ([[def-abelian-variety-over-a-field]])

## Proof

**Given:** AC, a field $k$, $X$ smooth integral, $A$ an abelian variety, and $f:X\dashrightarrow A$.

1.1 First suppose $k$ is algebraically closed. By [F1] and the proper-target part of [F2], the complement of the maximal domain of $f$ contains no codimension-one point. By [F3] and the group-target part of [F2], that complement would be a union of prime divisors if it were nonempty. These statements force it to be empty. [F1, F2, F3, given]

2.1 Thus the rational map is a morphism on all of $X$. Any two extensions agree on a dense open; their equalizer is closed since $A$ is separated, and the integral reduced $X$ admits no nonzero ideal vanishing on a dense open. They therefore agree everywhere. [F1, F3, step 1.1, algebra]

3.1 For general $k$, extend to an algebraic closure $\bar k$ using [F4]. Smoothness survives scalar extension. The finitely many irreducible components of $X_{\bar k}$ are disjoint, because regular local rings are domains, so each is a smooth integral variety. The base extension of the original dense domain is schematically dense, by injectivity of scalar extension on the original affine coordinate rings, and meets each such component densely. The preceding argument on each component therefore gives morphisms which glue to $g:X_{\bar k}\to A_{\bar k}$ extending $f_{\bar k}$. It is defined over a finite extension $K/k$ inside $\bar k$: cover its source by finitely many affine opens lying in inverse images of original affine target opens; the ideals defining these opens inside the finitely many original affine source charts, the coordinate images defining the morphisms, and the finitely many overlap relations all involve finitely many algebraic coefficients. Take $K$ containing those coefficients. The resulting maps glue to $g_K:X_K\to A_K$; their restrictions agree with $f_K$ on its domain, since equality is reflected by the faithful extension $K\to\bar k$. [F1, F3, F4, step 1.1, step 2.1, construct]

4.1 The two base extensions of $g_K$ to $K\otimes_kK$ agree on the base extension of the original dense domain of $f$. That open is schematically dense even over this possibly nonreduced tensor algebra: on each original affine chart, restriction from its integral coordinate ring to the rational-function field is injective, and tensoring by the $k$-vector space $K\otimes_kK$ preserves injectivity. Therefore a section of the ideal of their closed equalizer which vanishes on that open is zero. Separatedness of $A$ makes that equalizer closed, so the two morphisms agree everywhere. Apply [F4] to descend $g_K$ to a morphism $X\to A$ extending $f$. The uniqueness argument of step 2.1 works over $k$ as well. AC is carried from the algebraic closure and regularity suppliers. [F1, F3, F4, step 2.1, step 3.1, algebra] ∎
