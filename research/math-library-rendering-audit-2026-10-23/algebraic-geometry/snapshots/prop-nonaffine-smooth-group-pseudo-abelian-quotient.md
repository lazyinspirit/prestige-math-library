---
id: prop-nonaffine-smooth-group-pseudo-abelian-quotient
kind: proposition
title: "A smooth connected group has a unique affine-normal pseudo-abelian reduction"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, thm-nonaffine-maximal-smooth-connected-affine-normal-subgroup, lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties, lem-nonaffine-group-image-exact-quotient-properties, thm-nonaffine-group-scheme-normal-subgroup-quotient]
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
    - title: "Milne, Algebraic Groups (2022), Proposition 8.6, p.150"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Milne, A Proof of the Barsotti-Chevalley Theorem, Proposition 1.5, pp.3-4"
      url: https://arxiv.org/pdf/1311.6060
---

## Statement

Assume the Axiom of Choice. Let $G$ be a smooth connected separated finite-type group scheme over any field $k$. There is a unique smooth connected affine closed normal subgroup $N$ such that $G/N$ is pseudo-abelian. It is the largest smooth connected affine normal subgroup of $G$.

## Facts & Assumptions

[F1] Pseudo-abelian means smooth connected with no nontrivial smooth connected affine normal subgroup. ([[def-abelian-variety-over-a-field]])

[F2] The largest smooth connected affine normal subgroup exists and its quotient has no subgroup of that class; a quotient of a smooth connected group is smooth and connected. ([[thm-nonaffine-maximal-smooth-connected-affine-normal-subgroup]], [[lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties]])

[F3] Normal quotients exist; images of smooth connected affine groups retain those properties, and the image of a normal subgroup under an exact quotient is normal. ([[thm-nonaffine-group-scheme-normal-subgroup-quotient]], [[lem-nonaffine-group-image-exact-quotient-properties]])

## Proof

**Given:** AC and smooth connected $G/k$.

1.1 Let $N$ be the largest subgroup from [F2]. Its represented quotient is smooth and connected by [F2] and has no nontrivial smooth connected affine normal subgroup by the same result. By [F1], it is pseudo-abelian. This proves existence over every field and identifies the specified subgroup. [F1, F2, F3, given, construct]

2.1 Suppose $N'$ is another smooth connected affine normal subgroup with pseudo-abelian quotient $Q'=G/N'$. The largest-subgroup property gives $N'\subset N$. By [F3] the image of $N$ in $Q'$ is smooth, connected, affine and normal, so [F1] makes that image trivial. Thus the inclusion of $N$ into $G$ factors through the scheme kernel $N'$ of the quotient map, giving $N\subset N'$. The two inclusions prove equality as subgroup schemes and uniqueness. AC is inherited from [F2]–[F3]. [F1, F2, F3, step 1.1, algebra] ∎
