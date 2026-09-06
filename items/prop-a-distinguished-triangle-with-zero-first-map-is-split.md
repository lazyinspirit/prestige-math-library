---
id: prop-a-distinguished-triangle-with-zero-first-map-is-split
kind: proposition
title: "A distinguished triangle with zero first map is split"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-long-exact-hom-sequences-of-a-distinguished-triangle, prop-a-map-is-zero-exactly-when-the-corresponding-representable-map-vanishes, prop-zero-and-split-triangles-are-distinguished, def-split-monomorphism-and-split-epimorphism]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Lemma 13.4.11"
      url: "https://stacks.math.columbia.edu/tag/05QN"
---

## Statement

If $X\xrightarrow0Y\xrightarrow gZ\xrightarrow hX[1]$ is distinguished,
then it is isomorphic to the right rotation of a canonical split triangle,
namely
$$X\xrightarrow0Y\xrightarrow{\binom{1}{0}}Y\oplus X[1]\xrightarrow{(0\;1)}X[1].$$

## Facts & Assumptions

**Given:** A distinguished triangle whose first map is zero.

## Proof

1.1 In the left rotation $Y\xrightarrow gZ\xrightarrow hX[1]\to Y[1]$, the final arrow is zero. Exactness of $\mathcal T(X[1],-)$ therefore gives $s:X[1]\to Z$ with $hs=1_{X[1]}$. [given]

2.1 Exactness of $\mathcal T(Z,-)$ factors $1_Z-sh$ as $gt$ for some $t:Z\to Y$; exactness of $\mathcal T(Y,-)$ and $f=0$ give $tg=1_Y$.  Put $$t'=t-tsh.$$ Since consecutive triangle maps compose to zero, $hg=0$; since $hs=1$, one obtains $t'g=1$, $gt'=1-sh$, and $t's=0$. [step 1.1, given]

3.1 The identities in step 2.1 show that $(t',h):Z\to Y\oplus X[1]$ and $(g,s):Y\oplus X[1]\to Z$ are inverse.  They intertwine all three displayed maps, so they give the claimed isomorphism of triangles. [step 2.1, given] ∎
