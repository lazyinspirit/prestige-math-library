---
id: def-tate-shafarevich-group-of-abelian-variety
kind: definition
title: "Tate–Shafarevich group of an abelian variety over a global field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-global-field
  - def-abelian-variety-over-a-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-fppf-h1-of-commutative-group-sheaves-as-torsors
  - lem-contracted-product-and-pushout-of-commutative-fppf-torsors
  - def-axiom-of-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, Chapter I, §6"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Printed pp. 74–75, definition of X(K,A)."
    - title: "Bjorn Poonen and Michael Stoll, The Cassels–Tate Pairing on Polarized Abelian Varieties, §2"
      url: "https://math.mit.edu/~poonen/papers/sha.pdf"
      locator: "Printed p. 4, notation for global fields, places, completions and X(A)."
verification: {}
---

## Definition

Assume the Axiom of Choice and Dependent Choice as required by the global
place and completion conventions. Let $K$ be a global field and $A/K$ an
abelian variety. For a field extension $F/K$, let
$H^1_{\mathrm{fppf}}(F,A)$ be the abelian group of fppf $A$-torsors over
$\operatorname{Spec}F$ up to isomorphism, with its group law given by
contracted product. For each place $v$ of $K$, let $K_v$ be the completion
and let $\operatorname{res}_v$ be pullback of torsors along
$\operatorname{Spec}K_v\to\operatorname{Spec}K$. The
**Tate–Shafarevich group** is
$$
\Sha(A/K)=\ker\!\left(H^1_{\mathrm{fppf}}(K,A)\xrightarrow{(\operatorname{res}_v)_v}
\prod_{v}H^1_{\mathrm{fppf}}(K_v,A)\right).
$$

## Definition references

[[def-global-field|Global field]]

[[def-abelian-variety-over-a-field|Abelian variety over a field]]

[[def-place-of-a-global-field|Place of a global field]]

[[def-completion-of-a-global-field-at-a-place|Completion at a place]]

[[def-fppf-h1-of-commutative-group-sheaves-as-torsors|Fppf torsor cohomology]]

[[lem-contracted-product-and-pushout-of-commutative-fppf-torsors|Group law on fppf torsor classes]]

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

## Facts & Assumptions

**Given:** AC and DC, a global field $K$, an abelian variety $A/K$, its set of
places, and pullback maps on fppf torsor classes.

[A1] The global-place classification assumes AC; the completion convention
assumes AC and hence DC. ([[def-place-of-a-global-field]],
[[def-completion-of-a-global-field-at-a-place]])

[A2] AC and DC are stated assumptions of the completion convention.
([[def-axiom-of-choice]], [[def-dependent-choice]],
[[def-completion-of-a-global-field-at-a-place]])

[F1] A place $v$ has an associated completed field $K_v$ and a canonical
embedding $K\to K_v$. ([[def-place-of-a-global-field]],
[[def-completion-of-a-global-field-at-a-place]])

[F2] $H^1_{\mathrm{fppf}}(F,A)$ is the group of fppf torsor classes, and
pullback of torsors respects contracted products, so it induces the local
group homomorphisms. ([[def-fppf-h1-of-commutative-group-sheaves-as-torsors]],
[[lem-contracted-product-and-pushout-of-commutative-fppf-torsors]])

## Proof

**Proof technique:** define the localization map by its coordinates and take
its kernel.

**Given:** The data above.

1.1 For each place $v$, [F1] supplies the completed field and [F2] supplies a
pullback homomorphism on torsor classes. Their product is a well-defined
homomorphism from $H^1_{\mathrm{fppf}}(K,A)$ to the product indexed by the set
of all places. [A1, A2, F1, F2, given, construct]

2.1 By definition, the kernel of this product homomorphism is exactly the
classes whose localization is zero at every place. This kernel is the group
displayed in the Definition. [F2, step 1.1, algebra] ∎
