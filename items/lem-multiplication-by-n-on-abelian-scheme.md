---
id: lem-multiplication-by-n-on-abelian-scheme
kind: lemma
title: "Multiplication by n on an abelian scheme is finite flat, and etale for n invertible"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-scheme
  - lem-abelian-scheme-base-change-and-products
  - thm-nonaffine-abelian-multiplication-finite-faithfully-flat
  - lem-noetherian-flatness-by-fibres-finite-target-module
  - thm-proper-quasi-finite-is-finite
  - lem-quasi-finite-morphism-fibre-characterization
  - def-etale-morphism-schemes
  - thm-etale-equivalent-flat-unramified-fp
  - thm-differentials-smooth-locally-free
  - lem-abelian-scheme-fibres-commutative-and-pointed-morphisms
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, v2.00 (2008), Chapter I sections 3, 5, 8 (multiplication by n)"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
---

## Statement

Assume AC and DC as inherited from the finite-flatness and flatness-by-fibres suppliers. Let $S$ be locally Noetherian, let $A\to S$ be an abelian scheme of relative dimension $g$ ([[def-abelian-scheme]]), let $n\ge1$, and let $[n]:A\to A$ be multiplication by $n$. Then $[n]$ is finite, flat and surjective of degree $n^{2g}$, and $A[n]=\ker[n]$ is a finite flat $S$-group scheme of rank $n^{2g}$. If $n$ is invertible on $S$, then $[n]$ is etale and $A[n]\to S$ is finite etale of rank $n^{2g}$.

## Facts & Assumptions

**Given:** AC and DC, a locally Noetherian base $S$, an abelian scheme $A\to S$ of relative dimension $g$, and $n\ge1$.

[F1] On every geometric fibre, multiplication by $n$ is finite, flat and surjective with kernel of order $n^{2g}$; on an abelian variety, $[n]$ is a finite faithfully flat isogeny of degree $n^{2g}$ ([[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]]).

[F2] Properness and quasi-finiteness imply finiteness; quasi-finiteness is checked on fibres ([[thm-proper-quasi-finite-is-finite]], [[lem-quasi-finite-morphism-fibre-characterization]]); flatness of a finite morphism can be checked fibrewise in the Noetherian setting ([[lem-noetherian-flatness-by-fibres-finite-target-module]]); etaleness of an equal-relative-dimension morphism is detected by invertibility of the differential determinant ([[thm-etale-equivalent-flat-unramified-fp]], [[thm-differentials-smooth-locally-free]], [[def-etale-morphism-schemes]]).

[F3] The group law of $A$ is commutative, so $[n]$ is a group homomorphism, and fibrewise structures are as in [[lem-abelian-scheme-fibres-commutative-and-pointed-morphisms]]; base change and products preserve abelian schemes ([[lem-abelian-scheme-base-change-and-products]]).

## Proof

**Proof technique:** direct: fibrewise finiteness, then flatness by the fibrewise criterion, then etaleness from the differential.

1.1 By [F1] every geometric fibre of $[n]:A\to A$ has finite kernel of order $n^{2g}$, so $[n]$ is quasi-finite; it is proper because $A$ is proper over $S$, hence finite by [F2]. Consequently $A[n]=\ker[n]$ is finite over $S$ and of finite type. [F1, F2, given, algebra]

2.1 Flatness of $[n]$ follows by applying the Noetherian flatness-by-fibres criterion [F2] to the local tower $\mathcal O_{S,s}\to\mathcal O_{A,y}\to\mathcal O_{A,x}$ for $[n]$, with $M=\mathcal O_{A,x}$: smoothness makes $M$ flat over $\mathcal O_{S,s}$, and the field-level multiplication theorem makes the special-fibre module flat over the special-fibre target. Constancy of the rank then follows from the rank $n^{2g}$ on geometric fibres, so $[n]$ is finite flat of degree $n^{2g}$ and $A[n]$ has rank $n^{2g}$. [F1, F2, step 1.1, algebra]

3.1 If $n$ is invertible on $S$, then the differential of $[n]$ at the identity is multiplication by the unit $n$ on the locally free sheaf of invariant differentials (the differential of the group law is addition), and translation-equivariance spreads this to every point; the equal-relative-dimension criterion of [F2] therefore makes $[n]$ etale, and $A[n]\to S$, being the pullback along the identity section, is finite etale of rank $n^{2g}$. [F2, F3, step 2.1, algebra] ∎ 