---
id: fs-measure-preserving-transformations-are-invertible
kind: false-statement
title: 'False: measure-preserving transformations are invertible'
deps: ["prop-doubling-map-preserves-lebesgue-measure", "def-invertible-measure-preserving-system", "thm-lebesgue-outer-measure-and-measurability-are-translation-invariant", "thm-finite-and-countable-subadditivity-of-measures", "def-countable-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Example 2.4
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

The assertion that every measure-preserving probability transformation is invertible, even after restriction to an invariant conull set, is false. Assuming countable choice, doubling on the Lebesgue circle is a counterexample.

## Facts & Assumptions

[F1] Doubling preserves the completed Lebesgue probability. [[prop-doubling-map-preserves-lebesgue-measure]].

[F2] Invertibility requires a bijection; modulo-null invertibility requires one on an invariant measurable conull restriction. [[def-invertible-measure-preserving-system]].

[F3] Translation preserves Lebesgue measurability and measure. [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]].

[F4] Finite unions of measurable null sets are null. [[thm-finite-and-countable-subadditivity-of-measures]].

## Refutation

**Given:** The assertion that every measure-preserving probability transformation is invertible, even after restriction to an invariant conull set, is false. Assuming countable choice, doubling on the Lebesgue circle is a counterexample.

1.1 The map $D(x)=\{2x\}$ preserves the probability in [F1], but $D(0)=D(1/2)=0$ with $0\ne1/2$. Therefore it is not injective and is not invertible in [F2]. Countable choice is the stated assumption of the Lebesgue probability supplier. [F1, F2]

2.1 More strongly, suppose $C$ were a measurable conull subset of $[0,1)$ on which $D$ is injective, and put $N=[0,1)\setminus C$. For each $x\in[0,1/2)$ the distinct points $x,x+1/2$ have equal images, so at least one belongs to $N$. Hence $[0,1/2)\subseteq N\cup(N-1/2)$. By [F3] both sets on the right are measurable and null, and [F4] makes their union null. This contradicts the interval measure $1/2$ on the left. There is no injective conull restriction at all, in particular none satisfying the extra invariance and inverse-measurability requirements of [F2]. [1.1, F1, F2, F3, F4] ∎

