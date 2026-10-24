---
id: lem-proper-geometrically-integral-affine-scheme-is-point
kind: lemma
title: "A proper geometrically integral affine scheme is a point"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-global-functions-proper-integral-variety, thm-global-sections-affine-scheme, thm-morphisms-into-affine-scheme-global-sections, def-abelian-variety-over-a-field]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-24.md
      - research/frontier-38-owner-30-dispatch/reader-reader-24.result.json
      - research/frontier-38-owner-30-step5-hash-24-post-5a.json
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Algebraic Groups (2022), Example 8.4 and Appendix A.75"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Stacks Project, Varieties, Lemma 33.9.3"
      url: https://stacks.math.columbia.edu/tag/0BUG
---

## Statement

Assume the Axiom of Choice. A proper geometrically integral affine finite-type $k$-scheme is $\operatorname{Spec}k$. Every morphism from a proper geometrically integral finite-type $k$-scheme to an affine $k$-scheme factors through a $k$-rational point. In particular a positive-dimensional abelian variety is not affine.

## Facts & Assumptions

[F1] Under AC, $\Gamma(X,\mathcal O_X)=k$ for proper geometrically integral $X$. ([[thm-global-functions-proper-integral-variety]])

[F2] Global sections recover the ring of an affine scheme, and morphisms into an affine scheme correspond to ring maps on global sections. ([[thm-global-sections-affine-scheme]], [[thm-morphisms-into-affine-scheme-global-sections]])

[F3] An abelian variety is proper and geometrically integral. ([[def-abelian-variety-over-a-field]])

## Proof

**Given:** AC and $X$ proper geometrically integral of finite type over $k$.

1.1 If $X=\operatorname{Spec}B$ is affine, [F1] and [F2] identify $B$ with $k$ as a $k$-algebra. Taking spectra gives $X\cong\operatorname{Spec}k$. [F1, F2, given]

2.1 For an arbitrary affine target $T=\operatorname{Spec}B$, a $k$-morphism $X\to T$ corresponds by [F2] to a $k$-algebra map $B\to\Gamma(X,\mathcal O_X)=k$. That map defines a $k$-rational point of $T$, and naturality in [F2] gives the desired factorization through $X\to\operatorname{Spec}k$. By [F3], an affine abelian variety would be a point by step 1.1, so a positive-dimensional abelian variety cannot be affine. AC is used precisely through [F1]. [F1, F2, F3, step 1.1] ∎
