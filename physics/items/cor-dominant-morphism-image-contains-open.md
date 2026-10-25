---
id: "cor-dominant-morphism-image-contains-open"
kind: "corollary"
title: "A dominant image contains a dense open"
deps: ["thm-chevalley-constructible-image-varieties", "lem-constructible-dense-contains-open", "lem-general-variety-function-field-charts"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne Theorem 9.1 and Proposition 9.6"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "Combine constructibility of the image and the dense-constructible lemma."
---

## Statement

If $f:X\to Y$ is a dominant morphism of classical varieties and $Y$ is irreducible, then $f(X)$ contains a nonempty open subset of $Y$. The source need not be irreducible.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] Every morphism $f:X\to Y$ of classical varieties sends every constructible subset of $X$ to a constructible subset of $Y$. In particular $f(X)$ is constructible. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-chevalley-constructible-image-varieties]]).

[F2] If a constructible subset $C\subseteq X$ has nonempty irreducible closure $Z$, then $C$ contains a nonempty open subset of $Z$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-constructible-dense-contains-open]]).

## Proof

1.1 Chevalley makes $f(X)$ constructible, and dominance says its closure is $Y$. [F1]

2.1 The closure is nonempty and irreducible, so the dense-constructible lemma supplies the claimed nonempty open. If $Y$ has one point, dominance forces that point into the image and the open is $Y$. [F2, step 1.1] ∎
