---
id: lem-temperley-lieb-rank-one-tilting-character-and-dimension
kind: lemma
title: "Outside-alcove rank-one tiltings have zero pivotal dimension"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-temperley-lieb-rank-one-lusztig-tilting-category
  - lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
  - thm-basic-properties-of-the-categorical-trace
  - def-the-categorical-trace-of-a-morphism-into-the-double-dual
  - def-pivotal-structure
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity"
      url: "https://arxiv.org/pdf/math/0308281"
      locator: "§§3–4, printed pp. 15–22; Theorem 2 and full proof, printed pp. 22–24: negligible tiltings."
    - title: "Henning Haahr Andersen and Daniel Tubbenhauer, Diagram Categories for Uq-Tilting Modules at Roots of Unity"
      url: "https://arxiv.org/pdf/1409.2799"
      locator: "§2.5, Proposition 2.20 and proof, PDF pp. 14–16: rank-one tilting characters."
verification:
  precheck: escalated
---

## Statement

Let $q=e^{\pi i/\ell}$, $\ell\ge3$, and let $T(m)$ be the indecomposable tilting module of highest weight $m$. For $a\ge1$ and $0\le b\le\ell-2$, and for $a\ge1$ at the Steinberg weight, the rank-one character formulas are

$$\operatorname{ch}T(a\ell+b)=\chi(a\ell+b)+\chi(a\ell-b-2),\qquad \operatorname{ch}T(a\ell-1)=\chi(a\ell-1).$$

With the pivotal structure fixed in [[def-temperley-lieb-rank-one-lusztig-tilting-category]], the categorical dimension is $[m+1]_q$ on a Weyl character $\chi(m)$. Consequently $\dim_qT(m)=0$ for every $m\ge\ell-1$, while $\dim_qT(m)=[m+1]_q\ne0$ for $0\le m\le\ell-2$. The dimension cancellation from the stated characters is proved below. The required divided-power linkage derivation of those characters and the assertion that every endomorphism of an outside-alcove indecomposable has trace zero are not proved here; the complete negligible-object claim is therefore escalated.

## Facts & Assumptions

**Given:** The root parameter, rank-one weight characters, and pivotal trace convention above.

[F1] The rank-one Weyl character is $\chi(m)=\sum_{j=0}^m e^{m-2j}$, with type-1 weights recorded in the integral weight lattice ([[def-temperley-lieb-rank-one-lusztig-tilting-category]]).

[F2] For $q=e^{\pi i/\ell}$, $[r]_q=\sin(r\pi/\ell)/\sin(\pi/\ell)$, so $[r]_q>0$ for $1\le r<\ell$ and $[a\ell+r]_q=(-1)^a[r]_q$ ([[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]).

[F3] The left pivotal trace inserts coevaluation, applies the pivotal map, and then evaluates; on a weight basis its value is the sum of diagonal coefficients weighted by the pivotal eigenvalues ([[def-the-categorical-trace-of-a-morphism-into-the-double-dual]], [[def-pivotal-structure]], [[thm-basic-properties-of-the-categorical-trace]]).

[L1] The Weyl/dual-Weyl filtration, Ext-vanishing, and indecomposable-classification arguments needed for the local character derivation are assigned to [[lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations]]; its current carrier records those unresolved obligations.

## Proof

**Proof technique:** compute the weight trace from the proposed character, and isolate the unproved representation-theoretic input.

1.1 For a Weyl character $\chi(m)$, the pivotal element acts on the weight-$m-2j$ line by $q^{m-2j}$ under the stated positive pivotal convention. Expanding coevaluation as the sum of a weight basis tensored with its dual and then applying evaluation in [F3] gives $\operatorname{Tr}_L(j)=\sum_{j=0}^m q^{m-2j}$. This finite geometric sum is $(q^{m+1}-q^{-m-1})/(q-q^{-1})=[m+1]_q$. [F1, F3, given, algebra]

1.2 Assume the first character formula in the Statement. Its two summands have pivotal dimensions $[a\ell+b+1]_q=(-1)^a[b+1]_q$ and $[a\ell-b-1]_q=(-1)^{a+1}[b+1]_q$, so their sum is zero. The Steinberg character has dimension $[a\ell]_q=0$. For $0\le m\le\ell-2$, [F2] gives $[m+1]_q>0$. These establish exactly the dimension assertions conditional on the character formulas. [F1, F2, L1, step 1.1, algebra]

2.1 The source routes for deriving the character formulas use affine linkage and tilting-filtration steps that are not supplied by [F1]–[F3]. Nor does zero categorical dimension alone imply that every test composite $g f$ has zero trace. The local character proof and the nilpotent-endomorphism/trace-radical argument are therefore unresolved; this carrier is escalated rather than treating the displayed formulas as proved. [F1, F2, F3, L1]
