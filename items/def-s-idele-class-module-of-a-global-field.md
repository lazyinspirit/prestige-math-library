---
id: def-s-idele-class-module-of-a-global-field
kind: definition
title: "S-idelic class module of a global field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-global-field
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
  - def-absolute-galois-group-of-a-global-field
  - def-absolute-galois-group-of-a-field
  - def-absolute-galois-group-of-a-local-field
  - def-local-inertia-subgroup-of-absolute-galois-group
  - lem-s-idele-carrier-and-s-unit-quotient-are-locally-compact
  - thm-global-field-completion-tensor-product-decomposition
justified_by: []
axiom_use: >-
  AC and Countable Choice are inherited from the place and completion
  interfaces used to define the local factors. No additional choice is used in
  forming the directed system.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter I, §4.1"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "The S-ideles, S-units, and direct-limit modules J_S, E_S, C_S, printed pp. 49–50."
proof_strategy: direct
verification:
  precheck: n/a
---

## Definition

Assume AC and Countable Choice as required by the place and completion
interfaces. Let $K$ be a global field and let $S$ be a nonempty set of places containing all
archimedean places. Let $K_S$ be the union of the finite Galois extensions
$L/K$ in a separable closure that are unramified at every finite place outside
$S$, and put $G_{K,S}=\operatorname{Gal}(K_S/K)$. For each such $L$, let $S_L$
be the set of places of $L$ whose restrictions to $K$ lie in $S$. For each
finite place $w$ of $L$, let $\operatorname{ord}_w:L_w^\times\to\mathbb Z$
be its normalized discrete valuation and let
$\mathcal O_{L,w}=\{0\}\cup\{x\in L_w^\times:\operatorname{ord}_w(x)\ge0\}$
be its valuation ring, whose units are the elements of valuation zero. Define
$$J_{L,S}:=\{(x_w)_w\in\mathbb A_L^\times:x_w=1\text{ for every }w\notin S_L\}.$$
Equivalently, this is the restricted product over $w\in S_L$ of $L_w^\times$ relative to $\mathcal O_{L,w}^\times$ at finite places. Each tuple has only finitely many nonunit finite coordinates inside $S_L$, even when $S$ is infinite. Coordinates outside $S_L$ are1. Give it that restricted-product topology. Define the S-unit group
$$E_{L,S}:=\left\{x\in L^\times:\operatorname{ord}_w(x)=0\text{ for every finite }w\notin S_L\right\}.$$
Embed $E_{L,S}$ by its $S_L$-components: the coordinate of $a$ is its image in $L_w^\times$ for $w\in S_L$ and1 otherwise. Denote this injective map by $\delta_{S_L}$. The **S-idelic class group** $C_{L,S}$ is the
group of equivalence classes in $J_{L,S}$ under
$x\sim y$ iff $x^{-1}y\in\delta_{S_L}(E_{L,S})$, with the quotient topology.

For finite Galois extensions $L\subseteq L'$ in $K_S$, the extension map sends
an idele $(x_w)_w$ to the idele whose component at each $w'|w$ is the image of
$x_w$ under $L_w\hookrightarrow L'_{w'}$. These maps commute with the $S$-component embeddings and induce maps on S-units and S-idelic class groups. The S-idelic class module is the direct limit
$$J_{K,S}:=\varinjlim_{L\subset K_S}J_{L,S},\qquad E_{K,S}:=\varinjlim_{L\subset K_S}E_{L,S},\qquad C_{K,S}:=\varinjlim_{L\subset K_S}C_{L,S}.$$
regarded as discrete $G_{K,S}$-modules under the induced Galois action.

## Definition references

[[def-axiom-of-choice]]

[[def-countable-choice]]

[[def-global-field]]

[[def-place-of-a-global-field]]

[[def-completion-of-a-global-field-at-a-place]]

[[def-absolute-galois-group-of-a-global-field]]

[[def-absolute-galois-group-of-a-field]]

[[def-absolute-galois-group-of-a-local-field]]

[[def-local-inertia-subgroup-of-absolute-galois-group]]

[J. S. Milne, *Arithmetic Duality Theorems*, Chapter I §4.1](https://www.jmilne.org/math/Books/ADTnot.pdf)


## Facts & Assumptions

**Given:** Exactly the global field, nonempty $S$, and AC/Countable Choice in the Definition.

[F1] For any nonempty set containing the archimedean places, the actual $S$-component restricted product is LCA, the $S$-unit embedding is closed discrete and injective, and its quotient is LCA. [[lem-s-idele-carrier-and-s-unit-quotient-are-locally-compact]]

[F2] Finite separable global extensions have their canonical completion embeddings and finitely many places above each place; these maps preserve local units. [[thm-global-field-completion-tensor-product-decomposition]]

## Proof

1.1 Apply [F1] to each finite field $L$ and its nonempty $S_L$. It gives exactly the defined group and quotient with their stated topology. Nonemptiness is needed for the S-component embedding; finite nonunit support is part of the restricted product, not an optional condition on an infinite $S$. [F1, given]

2.1 Under a finite stage extension, a coordinate equal to1 remains1 outside $S$, a unit remains a unit, and the finite set of exceptional coordinates has only finitely many places above it by [F2]. Hence the extension map lands in the same restricted carrier. It sends $\delta_{S_L}(a)$ to $\delta_{S_{L'}}(a)$, so induces the asserted quotient map, and composition follows coordinatewise. The direct limits of these actual groups exist and carry the indicated transport action. Every class has a finite Galois stage and is fixed by its open kernel in $G_{K,S}$, so the discrete actions are continuous. No finite-$S$ class-formation or Ext-duality claim is inferred from this construction. [F1, F2, step 1.1, construct, algebra]

## Source convention correction

Milne ChapterI4, printed p.49, uses idèles with outside-$S$ coordinates1 and S-units embedded by their S-components. The former outside-unit/full-diagonal carrier was a different module, and its formula also omitted finite nonunit support inside an infinite $S$. The corrected carrier above follows that source, for every nonempty finite or infinite $S$. The P-class-formation and coefficient-primary duality comparisons remain separate Poitou–Tate proof obligations.
