---
id: prop-integer-base-map-preserves-lebesgue-measure
kind: proposition
title: Integer-base circle maps preserve Lebesgue measure
deps: ["def-integer-base-map-on-the-circle", "thm-measure-preservation-on-a-generating-pi-system", "prop-measure-preserving-compositions-iterates-and-completions", "thm-lebesgue-measure-under-dilations-and-reflections", "def-countable-choice"]
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
    - title: E–W Example 2.4 pp.14–15, b-branch generalization
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume countable choice. For every integer $b\ge2$, the circle map $D_b$ is continuous, surjective and non-injective, and preserves Borel Lebesgue probability and its completion.

## Facts & Assumptions

[F1] The b affine branches and Lipschitz bound are explicit. [[def-integer-base-map-on-the-circle]].

[F2] The finite measure generator test applies with the whole space included. [[thm-measure-preservation-on-a-generating-pi-system]].

[F3] Countable choice gives preservation on the completion. [[prop-measure-preserving-compositions-iterates-and-completions]].

[F4] The nonzero dilation 1/b scales interval length by 1/b. [[thm-lebesgue-measure-under-dilations-and-reflections]].

## Proof

**Given:** Assume countable choice. For every integer $b\ge2$, the circle map $D_b$ is continuous, surjective and non-injective, and preserves Borel Lebesgue probability and its completion.

1.1 For $0\le a<c\le1$, $D_b^{-1}[a,c)=\bigcup_{j=0}^{b-1}[(a+j)/b,(c+j)/b)$, with disjoint pieces of length $(c-a)/b$. Thus their total measure is c-a. The empty interval has empty inverse image. The map is Borel measurable by the Lipschitz bound from its definition. [F1, F4]

2.1 The half-open intervals together with the empty set form a pi-system containing [0,1) and generating the circle Borel sets, as in the circle definition. Its whole-space mass is one, so the finite generator theorem gives Borel preservation; the completion theorem gives completed preservation. Countable choice is inherited by the Lebesgue, dilation and completion suppliers and is assumed here. [step 1.1, F1, F2, F3]

3.1 For every y in [0,1), the explicit preimage y/b lies in [0,1) and maps to y, proving surjectivity. The distinct points 0 and 1/b both map to 0, proving non-injectivity. Continuity is the already established inequality $d(D_bx,D_by)\le b d(x,y)$. [step 2.1, F1] ∎

