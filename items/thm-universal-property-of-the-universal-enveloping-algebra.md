---
id: thm-universal-property-of-the-universal-enveloping-algebra
kind: theorem
title: Universal property of the enveloping algebra
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-universal-enveloping-algebra, lem-the-canonical-map-to-the-enveloping-algebra-is-a-lie-algebra-homomorphism-into-the-commutator-algebra, thm-universal-property-of-the-tensor-algebra, thm-quotient-ring-universal-property]
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
    - title: "Etingof, MIT 18.745 notes, §12.1, printed pp. 69–70"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §5.1, printed pp. 71–72"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

Let $A$ be a unital associative $k$-algebra, equipped with its commutator Lie
bracket. Every Lie-algebra homomorphism $f:\mathfrak g\to A_{\mathrm{Lie}}$
extends uniquely to a unital algebra homomorphism
$\overline f:U(\mathfrak g)\to A$ satisfying $\overline f\iota_{\mathfrak g}=f$.

## Facts & Assumptions

**Given:** A Lie-algebra map $f:\mathfrak g\to A_{\mathrm{Lie}}$ into a unital
associative $k$-algebra.

[L1] A linear map from $\mathfrak g$ extends uniquely to an algebra map from
$T(\mathfrak g)$ ([[thm-universal-property-of-the-tensor-algebra]]).

[L2] A map killing an ideal factors uniquely through the quotient
([[thm-quotient-ring-universal-property]]).

[L3] The defining relators and canonical map are those of
[[def-universal-enveloping-algebra]].

## Proof

**Proof technique:** direct.

1.1 By [L1], $f$ extends uniquely to a unital algebra homomorphism $F:T(\mathfrak g)\to A$. Since $f$ preserves Lie brackets, $F(x\otimes y-y\otimes x-[x,y])=f(x)f(y)-f(y)f(x)-f([x,y])=0$ for every defining relator. [L1, algebra]

2.1 The kernel of $F$ is a two-sided ideal containing all defining relators, hence contains their generated ideal $I$. By [L2], $F$ factors uniquely as $T(\mathfrak g)\twoheadrightarrow U(\mathfrak g)\xrightarrow{\overline f}A$, and the factor satisfies $\overline f\iota_{\mathfrak g}=f$. [step 1.1, L2, L3]

3.1 If $G:U(\mathfrak g)\to A$ is another unital algebra map with $G\iota_{\mathfrak g}=f$, its composite with $T(\mathfrak g)\twoheadrightarrow U(\mathfrak g)$ is an algebra extension of $f$. It equals $F$ by [L1], and quotient-map surjectivity gives $G=\overline f$. [step 2.1, L1, L3, algebra]

4.1 Thus the required extension exists uniquely; the argument uses only the quotient presentation and not injectivity of $\iota_{\mathfrak g}$. [step 2.1, step 3.1] ∎
