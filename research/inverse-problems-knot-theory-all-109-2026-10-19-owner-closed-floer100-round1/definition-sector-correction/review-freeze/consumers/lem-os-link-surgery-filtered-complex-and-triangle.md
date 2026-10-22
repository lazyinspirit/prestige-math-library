---
id: lem-os-link-surgery-filtered-complex-and-triangle
kind: lemma
title: "Ozsváth–Szabó link-surgery filtered complex and exact triangle"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-link-surgery-filtered-complex-for-double-branched-cover
  - lem-os-disk-and-polygon-analytic-foundations
  - thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant
proof_strategy: direct
axiom_use: "Uses the ACω analytic branch of the supplied Heegaard Floer construction."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §§2 and 4, Theorems 4.1 and 4.7"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Lipshitz, Heegaard Floer Homologies, §5"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Statement

Assume the countable-choice Heegaard Floer analytic package. Let $Y$ be any closed oriented three-manifold and let $\mathbb L$ be an ordered framed $n$-component link in $Y$. On its $i$th exterior boundary torus let $\mu_i$ be the meridian and $\lambda_i$ the chosen framing longitude. Use the three filling slopes $\lambda_i$, $\mu_i+\lambda_i$ and $\mu_i$, labelled $0,1,\infty$, respectively; $\infty$ restores the original unfilled component. For $I\in\{0,1,\infty\}^n$ let $Y(I)$ be the simultaneous filling specified by $I$. Fix an admissible pointed Heegaard multi-diagram subordinate to these surgeries and the compatible perturbation and top-generator choices used by the polygon construction. The mod-two polygon maps on
$$C(\mathbb L)=\bigoplus_{I\in\{0,1\}^n}\widehat{CF}(Y(I);\mathbb F_2)$$
form a differential with components only from $I$ to $J\ge I$ coordinatewise. It preserves the increasing filtration
$$F_pC(\mathbb L)=\bigoplus_{|I|\ge n-p}\widehat{CF}(Y(I);\mathbb F_2),$$
extended by zero below zero and by the whole module at and above $n$. Its total homology is isomorphic to $\widehat{HF}(Y(\infty,\ldots,\infty);\mathbb F_2)=\widehat{HF}(Y;\mathbb F_2)$. For $n=1$, the total complex is the mapping cone of the $0$-to-$1$ surgery map and is quasi-isomorphic to the hat complex of the third, $\infty$ filling; this yields the long exact surgery sequence for every surgery triad, with its cyclic ordering. For $n=0$ the cube is the single hat complex of $Y$. No filtered quasi-isomorphism between distinct surgery presentations is included.

## Statement references

[[def-link-surgery-filtered-complex-for-double-branched-cover|Resolution-cube filtered module]]

[[lem-os-disk-and-polygon-analytic-foundations|Disk and polygon regularity, compactness, and gluing obligation]]

[[thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant|Closed-manifold Floer invariance obligation]]

[Ozsváth and Szabó, *On the Heegaard Floer homology of branched double-covers*, §§2 and 4](https://arxiv.org/pdf/math/0309170v1)

[Lipshitz, *Heegaard Floer Homologies*, §5](https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf)

## Facts & Assumptions

**Given:** The ordered framed link, the $0,1,\infty$ filling data $Y(I)$, and the compatible admissible multi-diagram and top-generator choices in the Statement.

[F1] The general $Y$ vertex modules and increasing filtration are the ones explicitly specified in the Statement. The branched-cover module is their later special application, rather than a premise restricting this general surgery statement to $S^3$.

[F2] The total differential, its square-zero identity, the vertex identifications, and the surgery exact triangle require the polygon analytic statement ([[lem-os-disk-and-polygon-analytic-foundations]]).

[F3] The total homology is interpreted as an invariant of the filled manifold only after closed-manifold Heegaard Floer invariance ([[thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant]]).

## Proof

1.1 The cube module and its increasing filtration are fixed by [F1]. The candidate total differential sums over ordered immediate-successor paths and their polygon-count maps, with diagonal disk differential. Each component from $I$ to $J\ge I$ lowers $n-|I|$ to $n-|J|$, so it preserves every increasing filtration subspace whenever the count is defined. Square-zero, count finiteness and identification of total homology still require proof. No filtered comparison between different presentations is a premise of this fixed-data assertion. [F1, given, construct, algebra]

1.2 The required square-zero, compactification, gluing, and surgery-map identities are [F2]; identifying the total homology with a manifold invariant further uses [F3]. Those are substantial analytic and move-invariance inputs, and no local proof supplying them has been found. The exact unresolved obligation is to construct the multi-diagrams and polygon maps, prove all required boundary strata and mod-two cancellations, and derive the mapping-cone exact triangle for every surgery triad. [F2, F3, step 1.1]
