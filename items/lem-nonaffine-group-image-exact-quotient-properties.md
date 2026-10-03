---
id: lem-nonaffine-group-image-exact-quotient-properties
kind: lemma
title: "Group images are exact kernel quotients and preserve affine smooth connected properties"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-abelian-variety-over-a-field, thm-nonaffine-group-scheme-normal-subgroup-quotient, lem-nonaffine-group-monomorphism-closed-immersion, lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties]
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
    - title: "Milne, Algebraic Groups (2022), Chapters 5-6, isomorphism theorems; Proposition 8.1"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Sections 2.7-2.8"
      url: https://arxiv.org/pdf/1509.03059
---

## Statement

Assume the Axiom of Choice. For a homomorphism $f:G\to H$ of separated finite-type $k$-group schemes with scheme kernel $K$, its scheme-theoretic image $I$ is isomorphic to the represented fppf quotient $G/K$. The map $G\to I$ is faithfully flat of finite presentation. If $G$ is affine, smooth, or connected, respectively, so is $I$. If $q:G\to Q$ is an exact quotient and $N\subset G$ a closed normal subgroup, the image of $N\to Q$ is normal in $Q$.

## Facts & Assumptions

[F1] Normal quotients represent fppf coset sheaves, are faithfully flat of finite presentation, and have the expected universal property. A homomorphism with trivial scheme kernel is a closed immersion. ([[thm-nonaffine-group-scheme-normal-subgroup-quotient]], [[lem-nonaffine-group-monomorphism-closed-immersion]])

[F2] Quotients of affine, smooth, or connected groups retain the respective property. ([[lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties]])

## Proof

**Given:** AC and $f:G\to H$, with $K$ its scheme-theoretic kernel.

1.1 By [F1] form $P=G/K$ and factor $f$ through $\bar f:P\to H$. Its kernel is trivial: a point of that kernel lifts fppf locally to a point of $G$; the lift lies in $K$, so its quotient point is the identity, and this equality descends. Thus [F1] makes $\bar f$ a closed immersion. The map $G\to P$ is faithfully flat, hence schematically dominant; consequently the scheme-theoretic image of $f$ is exactly the closed embedded $P$. This identifies $I\cong P$ and gives the asserted exact projection. Applying [F2] gives each of the three inherited properties. [F1, F2, given, construct]

2.1 For the normality assertion, every scheme-valued point of $Q$ lifts fppf locally to $G$, and every point of the image of $N$ lifts fppf locally to $N$, by step 1.1 applied to $N\to Q$. On a common refinement, their conjugate is the image of $gng^{-1}$, which lies in $N$ by normality. Membership in the closed image subgroup descends on covers by vanishing of its defining ideal. Hence conjugation in $Q$ preserves that image as a subgroup scheme. AC is inherited from [F1]–[F2]. [F1, step 1.1, algebra] ∎
