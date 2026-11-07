---
dependency_level: 8
id: thm-isotriviality-iff-potential-good-reduction
kind: theorem
title: "Isotriviality is equivalent to potential good reduction at every place"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - def-one-variable-function-field-with-constant-field
  - def-isotrivial-rational-map-over-function-field
  - def-good-and-potential-good-reduction-rational-map
  - lem-finite-extension-normal-curve-model-and-place-restriction
  - lem-rational-map-two-preperiodic-points-and-normalized-lift
  - lem-preperiodic-basis-local-good-conjugacies-force-constant-coefficients
  - lem-potential-good-reduction-valued-extension-and-completion-descent
  - lem-completion-of-algebraically-closed-valued-field-is-algebraically-closed
  - thm-completion-of-an-absolutely-valued-field
  - thm-existence-of-algebraic-closures
  - thm-unique-extension-of-a-nonarchimedean-absolute-value
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, Theorem1.9 and complete §4 proof"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $(K,k,M_K)$ be a one-variable function-field datum with exact constants, and let $\phi:\mathbb P^1_K\to\mathbb P^1_K$ have degree $d\ge2$. For every $v\in M_K$ let $K_v$ denote the metric completion in the specified absolute value. Then $\phi$ is isotrivial after a finite extension of $K$ if and only if $\phi$ has potentially good reduction over $K_v$ for every $v$. The assertion includes arbitrary characteristic, arbitrary exact constant fields and inseparable finite extensions.

## Statement references

[[def-axiom-of-choice]]

[[def-one-variable-function-field-with-constant-field]]

[[def-isotrivial-rational-map-over-function-field]]

[[def-good-and-potential-good-reduction-rational-map]]

## Facts & Assumptions

**Given:** The datum, map and degree in the statement.

[F1] Finite extensions have normal proper curve models over their finite exact constant extensions. Each place $w$ restricts to a place $v$ with its absolute value a positive power of that at $v$. ([[lem-finite-extension-normal-curve-model-and-place-restriction]])

[F2] Over a supplied algebraic closure, two distinct preperiodic points and a conjugate lift with preperiodic coordinate basis can be chosen over one finite extension. ([[lem-rational-map-two-preperiodic-points-and-normalized-lift]])

[F3] A lift with preperiodic basis and supplied local algebraically closed valued extensions in which the map admits good conjugacies has all coefficients in the exact constant field. ([[lem-preperiodic-basis-local-good-conjugacies-force-constant-coefficients]])

[F4] Potential good reduction persists under isometric embeddings between complete valued fields, and is equivalent to good reduction after conjugacy in the completion of an algebraic closure. Positive powers of a nonarchimedean absolute value do not change it. ([[lem-potential-good-reduction-valued-extension-and-completion-descent]])

[F5] Valued completions exist, algebraic closures exist, finite extensions of complete nonarchimedean fields have a unique extending absolute value, and algebraic-closure completions are algebraically closed. ([[thm-completion-of-an-absolutely-valued-field]], [[thm-existence-of-algebraic-closures]], [[thm-unique-extension-of-a-nonarchimedean-absolute-value]], [[lem-completion-of-algebraically-closed-valued-field-is-algebraically-closed]])

[F6] Isotriviality means a Möbius conjugacy to a constant-coefficient map over a finite extension. Potential good reduction means a good conjugacy over a finite valued extension. ([[def-isotrivial-rational-map-over-function-field]], [[def-good-and-potential-good-reduction-rational-map]])

[A1] Full Choice is assumed through the curve, closure and completion suppliers. ([[def-axiom-of-choice]])

## Proof

1.1 Suppose $\phi$ is isotrivial, witnessed by a finite extension $E/K$ and a Möbius transformation giving a constant-coefficient map over $k_E$. Fix $v$, choose an algebraic closure of $K_v$ by [F5], and embed $E$ into it over $K$ by successively choosing roots of the minimal polynomials of a finite list of generators. This works for inseparable extensions as well. The compositum of $K_v$ and the image of $E$ is finite over $K_v$ and carries the extending absolute value of [F5]. Every nonzero element algebraic over the trivially valued field $k$ has norm1: its monic algebraic equation gives norm at most1 by dominance of a hypothetical root of norm greater than1, and applying this to its inverse gives norm at least1. Thus the coefficients and nonzero resultant of the constant lift have norm at most1 and exactly1, respectively. The same conjugacy is therefore a finite valued witness to potential good reduction at $v$. Since $v$ was arbitrary, this proves the forward implication. [F5, F6, A1, algebra]

2.1 Conversely suppose $\phi$ has potentially good reduction over every $K_v$. Choose an algebraic closure of $K$ using [F5] and apply [F2] to obtain a finite $E/K$, a conjugate map $\psi$, and a lift $F$ of $\psi$ with both basis vectors preperiodic. By [F1] the field $E/k_E$ has the required function-field datum. Fix any place $w$ of $E$ over $v$. Raise its absolute value to the positive reciprocal power from [F1], so that it extends the exact given absolute value on $K$. In the corresponding complete field $E_w$, the embedding of $K$ extends isometrically to $K_v$ by the universal property of valued completion in [F5]. By [F4], $\phi$ has potentially good reduction over this $E_w$. Positive rescaling does not affect that assertion, and conjugating by the matrix over $E$ preserves it by its definition. Hence $\psi$ has potentially good reduction over the originally normalized complete field $E_w$. [F1, F2, F4, F5, F6, algebra]

2.2 For each $w$, take the completion $L_w$ of an algebraic closure of $E_w$ using [F5]. It is complete and algebraically closed, contains $E$ with its specified $w$ norm, and by [F4] the map $\psi$ admits a good conjugacy over $L_w$. These are precisely the local extensions required by [F3]. Apply that lemma to the preperiodic-basis lift $F$ over $E$: every coefficient of $F$ belongs to $k_E$. Thus $\psi$ is a constant-coefficient map and $\phi$ is isotrivial after the finite extension $E/K$ by [F6]. Together with step1.1 this proves the equivalence. [F3, F4, F5, F6, step 2.1, algebra] ∎
