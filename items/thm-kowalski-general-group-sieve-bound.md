---
dependency_level: 2
id: thm-kowalski-general-group-sieve-bound
kind: theorem
title: "Large-sieve bound using finite-group matrix coefficients"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-abstract-large-sieve-setting
  - lem-finite-large-sieve-sifted-density-bound
  - lem-finite-group-irreducible-matrix-coefficients-form-an-orthonormal-basis
  - def-group
  - def-group-homomorphism
  - def-finite-cardinality
  - def-matrix-coefficient-of-a-unitary-representation
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
aliases: []
sources:
  scraped: []
  references:
    - title: "Emmanuel Kowalski, The Large Sieve and its Applications (Cambridge Tracts 175, 2008)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf"
      locator: "Chapter 3, §§3.2 and 3.5, Propositions 3.5–3.6, printed pp. 34–43"
verification:
  precheck: pass
---

## Statement

Let $\Gamma$ be a group and $\Lambda$ an index set. For each
$\ell\in\Lambda$, let $\rho_\ell:\Gamma\to G_\ell$ be a surjective
homomorphism to a finite group. Let $X$ be finite with weights
$\mu(x)\ge0$, $\mu(X)>0$, let $F:X\to\Gamma$, and let
$L^*\subseteq\Lambda$ be finite. Let $\mathcal L$ be a nonempty finite family
of subsets of $L^*$. For each $\ell\in L^*$ let $C_\ell\subseteq G_\ell$ be
any nonempty proper subset, and define
$$S:=\{x\in X:\rho_\ell(F(x))\notin C_\ell\text{ for all }\ell\in L^*\}, \qquad H:=\sum_{m\in\mathcal L}\prod_{\ell\in m} \frac{|C_\ell|}{|G_\ell|-|C_\ell|}.$$
For each $\ell$, use the orthonormal basis of normalized matrix coefficients
of one representative from each equivalence class of irreducible complex
representations of $G_\ell$ supplied by the finite-group matrix-coefficient
basis lemma; it includes the constant coefficient $1$. For $m\in\mathcal L$,
take all products of basis
coefficients in which the coefficient at every $\ell\in m$ is nonconstant;
for the empty set use the constant function $1$. Let $\Delta_{\rm mat}$ be
the optimal large-sieve constant of this indexed family on $(X,\mu)$. Then
$$\mu(S)\le\frac{\Delta_{\rm mat}}{H}.$$

## Statement references

[[def-group]]

[[def-finite-cardinality]]

[[def-group-homomorphism]]

[[def-matrix-coefficient-of-a-unitary-representation]]

[[lem-finite-group-irreducible-matrix-coefficients-form-an-orthonormal-basis]]

[[def-abstract-large-sieve-setting]]

[Kowalski, Chapter 3, Proposition 3.6, full text](https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf)

## Facts & Assumptions

**Given:** The finite weighted set, surjective finite-group quotients, support,
arbitrary forbidden subsets, and matrix-coefficient family in the Statement.

[F1] The normalized irreducible matrix coefficients form an orthonormal basis
of the complex functions on each finite group
([[lem-finite-group-irreducible-matrix-coefficients-form-an-orthonormal-basis]]).

[F2] The optimal large-sieve constant is the least bound for the indexed
second moment on $(X,\mu)$ ([[def-abstract-large-sieve-setting]]).

[F3] For finite local probability spaces with orthonormal bases, a sifted
measure is at most the corresponding optimal large-sieve constant divided by
the product-density sum
([[lem-finite-large-sieve-sifted-density-bound]]).

## Proof

1.1 For each $\ell$, equip $G_\ell$ with uniform mass $\nu_\ell(g)=1/|G_\ell|$. This is a probability measure on the finite group. By [F1], the normalized matrix coefficients are an orthonormal basis and the trivial representation contributes the constant function $1$. [given, F1]

1.2 Deleting this constant basis vector leaves precisely the nonconstant matrix coefficients in the Statement. Their products over every $m\in \mathcal L$ form the indexed family defining $\Delta_{\rm mat}$ by [F2]. The forbidden mass is $\nu_\ell(C_\ell)=|C_\ell|/|G_\ell|$. [F1, F2, given, algebra]

2.1 Apply [F3] to these local spaces. The local density ratio becomes $\frac{\nu_\ell(C_\ell)}{1-\nu_\ell(C_\ell)} =\frac{|C_\ell|}{|G_\ell|-|C_\ell|},$ so the denominator is exactly $H$ and $\mu(S)\le\Delta_{\rm mat}/H$. [F1, F2, F3, step 1.1, step 1.2, algebra] ∎