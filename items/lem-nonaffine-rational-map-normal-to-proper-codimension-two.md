---
id: lem-nonaffine-rational-map-normal-to-proper-codimension-two
kind: lemma
title: "A rational map from a normal variety to a proper variety extends in codimension one"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-valuative-criterion-properness, thm-height-one-localisation-of-normal-noetherian-domain-is-dvr, def-rational-map-integral-schemes]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-24.md"
      - "research/frontier-38-owner-30-alpha-batch-24-5a.md"
      - "research/frontier-38-owner-30-step5-hash-24-post-5a.json"
    content_sha256: "9e21eb1c299551414dfa3ea60c2ed28722e3897d09cc940259e2a51c9e0601f2"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Abelian Varieties, Chapter I, Theorem 3.1, pp.16-17"
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: "Milne, Algebraic Groups (2022), 8.16, p.152"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Assume the Axiom of Choice. Let $X$ be a normal integral finite-type $k$-scheme and $Y$ a proper finite-type $k$-scheme. The maximal domain of a rational map $f:X\dashrightarrow Y$ contains every codimension-one point of $X$. Thus its closed complement has codimension at least two, if nonempty.

## Facts & Assumptions

[F1] A height-one localization of a Noetherian normal domain is a DVR. ([[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]])

[F2] A rational map gives a morphism from the function-field spectrum, and properness supplies unique extension across a valuation ring. ([[def-rational-map-integral-schemes]], [[thm-valuative-criterion-properness]])

## Proof

**Given:** AC, $X$, $Y$, $f$, and a codimension-one point $\eta\in X$.

1.1 By [F1], $R=\mathcal O_{X,\eta}$ is a DVR with fraction field $k(X)$. Apply [F2] to extend the generic morphism $\operatorname{Spec}k(X)\to Y$ uniquely to $\operatorname{Spec}R\to Y$. Choose an affine open of $Y$ containing the image of the closed point of this local spectrum; its inverse image contains that closed point and hence is the whole local spectrum. [F1, F2, given, construct]

2.1 The chosen target affine ring is finitely generated over $k$. The images of its finitely many generators in $R$ are regular on a common open neighbourhood of $\eta$ in $X$. Its relations hold there because they hold in the function field of the integral $X$. These elements therefore give a morphism on that neighbourhood agreeing with the rational map generically. Separatedness of $Y$ glues such representatives, so $\eta$ belongs to the maximal domain. No codimension-one point can occur in its complement; the generic point was already in the domain. AC is inherited from [F1]–[F2]. [F1, F2, step 1.1, algebra] ∎
