---
id: ex-pbw-reordering-in-sl-two
kind: example
title: PBW reordering in sl_2
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-poincare-birkhoff-witt]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, Example 13.9, printed p. 75"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Example 5.14, printed p. 75"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Example

For the basis $e,f,h$ of $\mathfrak{sl}_2$ with

$$[h,e]=2e,\qquad[h,f]=-2f,\qquad[e,f]=h,$$

choose the order $f<h<e$. Then $f^ah^be^c$, with $a,b,c\geq0$, is a PBW
basis of $U(\mathfrak{sl}_2)$.

## Facts & Assumptions

**Given:** The displayed Lie algebra and supplied order $f<h<e$.

[L1] PBW supplies the ordered-monomial basis ([[thm-poincare-birkhoff-witt]]).

## Verification

**Proof technique:** direct reordering.

1.1 The defining enveloping relations give $eh=(h-2)e$, $hf=f(h-2)$, and $ef=fe+h$. Each formula replaces an adjacent inversion for $f<h<e$ by an ordered pair plus a shorter term. [given, algebra]

1.2 Every weakly increasing word has all $f$'s first, then all $h$'s, then all $e$'s, hence is uniquely $f^ah^be^c$. [given, algebra]

2.1 Step 1.1 rewrites every word into a linear combination of the forms in step 1.2, and [L1] makes those forms linearly independent, so the reordering result is unique. [step 1.1, step 1.2, L1] ∎
