---
id: cor-ternary-hilbert-one-place-principle
kind: corollary
title: "One local place is determined by the others for ternary forms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-ternary-isotropy-via-hilbert-symbol, thm-hilbert-reciprocity-over-the-rationals]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 11, Corollary 11.13"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf"
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, section 4.5"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $q=aX^2+bY^2+cZ^2$ be a nondegenerate ternary diagonal form over
$\mathbb Q$. If $q$ is isotropic over $Q_v$ for every place $v$ except possibly
one place $w$, then $q$ is isotropic over $Q_w$ as well.

## Facts & Assumptions

**Given:** A nondegenerate ternary form $q=aX^2+bY^2+cZ^2$ over $\mathbb Q$ and
a place $w$.

[L1] The local isotropy criterion is $q\text{ isotropic over }Q_v \iff (-ac,-bc)_v=1$
([[cor-ternary-isotropy-via-hilbert-symbol]]).

[L2] The global reciprocity law is $\prod_v(x,y)_v=1$
([[thm-hilbert-reciprocity-over-the-rationals]]).

## Proof

**Proof technique:** direct.

1.1 For each place $v\ne w$, the assumed isotropy and [L1] give $(-ac,-bc)_v=1$. Multiplying these identities over all $v\ne w$ and using [L2] with $x=-ac$, $y=-bc$ forces $(-ac,-bc)_w=1$ as well. [L1, L2, given, algebra]

2.1 Applying [L1] again at the place $w$ shows that $q$ is isotropic over $Q_w$. [L1, step 1.1, algebra] ∎
