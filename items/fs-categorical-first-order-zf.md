---
id: fs-categorical-first-order-zf
kind: false-statement
title: "FALSE: consistent first-order ZF has a unique model up to isomorphism"
status: draft
origin: pipeline
deps: [def-coded-first-order-zf-theory, lem-models-of-coded-zf-are-infinite, thm-countable-first-order-completeness, thm-upward-lowenheim-skolem-with-choice, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Theorem 1J.3 and discussion pp44–45, Remark 1J.6 p46; Weiss–D’Mello Exercise 15 p25 with locally proved upward theorem."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

**False conditional claim:** If the coded first-order theory $T_{\mathrm{ZF}}$ is syntactically consistent, it has a unique set model up to isomorphism.

The refutation is conditional in ZFC: assuming that consistency antecedent, there are nonisomorphic models of cardinalities $\aleph_0$ and $\aleph_1$. No assertion of $\operatorname{Con}(\mathrm{ZF})$ is made.

## Facts & Assumptions

**Given:** ZFC and the explicit antecedent that $T_{\mathrm{ZF}}$ is syntactically consistent.

[F1] $T_{\mathrm{ZF}}$ is a set of sentences in the explicitly countable membership signature. ([[def-coded-first-order-zf-theory]])

[F2] Every nonempty set model of this coded theory has infinite external carrier, without assuming transitivity or external well-foundedness. ([[lem-models-of-coded-zf-are-infinite]])

[F3] A consistent theory in an explicitly countable signature has an at most countable nonempty model. ([[thm-countable-first-order-completeness]])

[F4] In ZFC an infinite structure has an elementary extension of any cardinal at least its size and language size. ([[thm-upward-lowenheim-skolem-with-choice]])

[A1] AC is assumed for the upward cardinal-size result. ([[def-axiom-of-choice]])

## Refutation

1.1 Under the stated consistency antecedent, F1 and F3 supply $M\models T_{\mathrm{ZF}}$ with carrier injecting into $\omega$. F2 makes this carrier infinite. An infinite subset of $\omega$ can be enumerated in increasing order: after finitely many entries it has a least unused member, and each member is eventually reached since only finitely many natural numbers precede it. Composing this enumeration with the injection's inverse on its range gives a bijection $\omega\to M$. Thus $|M|=\aleph_0$. [F1, F2, F3]

2.1 Under A1 apply F4 with $\kappa=\aleph_1$: $M$ is infinite, its size is $\aleph_0\le\aleph_1$, and the membership signature is finite. It gives $N\succeq M$ of size $\aleph_1$, which satisfies every sentence of $T_{\mathrm{ZF}}$ by elementarity. An isomorphism $M\to N$ would be a bijection, contradicting $\aleph_0\ne\aleph_1$. These are the promised two witnesses under the antecedent. Neither the use of F2 nor the extension argument identifies either internal membership relation with external membership or asserts well-foundedness. [F4, A1, step 1.1] ∎
