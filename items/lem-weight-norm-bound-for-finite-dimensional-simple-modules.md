---
id: lem-weight-norm-bound-for-finite-dimensional-simple-modules
kind: lemma
title: Weights of a finite-dimensional simple module lie in the norm ball
status: published
origin: pipeline
deps:
- def-axiom-of-choice
- def-integral-dominant-and-strictly-dominant-weights
- def-partial-order-on-weights
- lem-finite-weyl-closed-chambers-and-stabilizers
- prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system
- prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one
- thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Historical full Step 5 item mathematical read and adjudication where required, including the used supplier interfaces; current mathematical text matches the recorded postreview snapshot."
    delegated_by: owner
    evidence:
      - research/frontier-38-owner-30-reader-7.md
      - research/frontier-38-owner-30-dispatch/reader-reader-7.result.json
      - research/frontier-38-owner-30-step5-hash-7-post-5a.json
      - research/frontier-38-owner-30-alpha-batch-7-5a-decisions.json
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Theorem 5.5(d)-(e) and remarks
    url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
    locator: Chapter V, Theorem 5.5(b),(d),(e), printed pp. 279-280; complete proof of (e), printed
      p. 282 (W-invariant multiplicities and norm equality only on the highest-weight orbit).
  - title: Pavel Etingof, Representations of Lie Groups (18.757, Fall 2023), Sec. 23.2
    url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
    locator: §23.2, Lemma 23.4 and its proof, printed pp. 116-118 (orbit-norm comparison in the form
      of a dominance computation; full text read at harvest)
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\nu$ be a dominant
integral weight
([[def-integral-dominant-and-strictly-dominant-weights]]) and let $\gamma$ be
a weight of the finite-dimensional simple module $L(\nu)$
([[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]]).
Then, in the $W$-invariant positive definite form on the real span $E$ of the
roots ([[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]]),
$$\lvert\gamma\rvert\le\lvert\nu\rvert,$$
with equality if and only if $\gamma$ lies in the Weyl orbit $W\nu$; moreover
every weight in $W\nu$ occurs in $L(\nu)$ with multiplicity one.

## Facts & Assumptions

**Given:** The Axiom of Choice, a dominant integral weight $\nu$, and a weight $\gamma$ of the finite-dimensional simple module $L(\nu)$.

[F1] The module $L(\nu)$ is finite-dimensional with highest weight $\nu$, its weights lie in $\nu-Q^+$, every weight $\gamma$ satisfies $\nu-w^{-1}\gamma\in Q^+$ for every $w\in W$, and the weight $w\nu$ occurs with multiplicity one for every $w$ ([[prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one]], [[thm-finite-dimensional-simple-modules-are-classified-by-dominant-highest-weights]], [[def-partial-order-on-weights]]).

[F2] The form $(\cdot,\cdot)$ on $E$ is positive definite and $W$-invariant; a dominant weight $\xi$ satisfies $(\xi,\alpha_i)=\langle\xi,\alpha_i^\vee\rangle(\alpha_i,\alpha_i)/2\ge0$ for every simple root $\alpha_i$, sums of dominant weights are dominant, and every $W$-orbit in $E$ has exactly one dominant point ([[prop-the-roots-form-a-reduced-crystallographic-euclidean-root-system]], [[lem-finite-weyl-closed-chambers-and-stabilizers]], [[def-integral-dominant-and-strictly-dominant-weights]]).

## Proof

**Proof technique:** direct: pass to the dominant conjugate of the weight and compare squared lengths by a dominance computation.

1.1 The weight $\gamma$ lies in $E$ because it lies in $\nu-Q^+$, and the orbit $W\gamma$ has a unique dominant point, so there is $u\in W$ with $\gamma^+:=u\gamma$ dominant. Applying the extremal-weight bound of [F1] to $\gamma$ with the element $w=u^{-1}$ gives $\nu-u\gamma=\nu-\gamma^+\in Q^+$. [F1, F2, given]

2.1 Put $\beta=\nu-\gamma^+=\sum_i n_i\alpha_i\in Q^+$. Dominance gives $(\gamma^+,\beta)\ge0$, so $\lvert\nu\rvert^2-\lvert\gamma^+\rvert^2=2(\gamma^+,\beta)+\lvert\beta\rvert^2\ge\lvert\beta\rvert^2\ge0$. Since $\lvert\gamma\rvert=\lvert\gamma^+\rvert$, this proves the norm bound. Equality forces $\lvert\beta\rvert^2=0$, hence $\beta=0$ by positive definiteness and $\gamma^+=\nu$, so $\gamma\in W\nu$. Conversely $W$-invariance gives equality for every $\gamma\in W\nu$. [F1, F2, step 1.1, algebra]

3.1 The multiplicity-one statement is the last assertion of [F1], and by step 2.1 the equality case is exactly $\gamma\in W\nu$; this completes the proof of all three claims. [F1, step 2.1] ∎
