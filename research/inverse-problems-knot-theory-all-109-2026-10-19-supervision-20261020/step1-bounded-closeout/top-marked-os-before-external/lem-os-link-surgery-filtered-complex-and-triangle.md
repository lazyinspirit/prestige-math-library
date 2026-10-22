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

[F2] The actual analytic foundations [[lem-os-disk-and-polygon-analytic-foundations]] supply finite zero-basepoint disk and polygon counts, compact one-dimensional boundaries, exhaustive gluing and the resulting identities on the stated operation-specific admissible data: global weak data for all-sector sums, or the prescribed ordinary weak or strict specified-Spin-c families. Positive-rank triples use explicit small triple-free representatives with transported labels; rank zero uses the point model. This supplies neither a subordinate surgery multidiagram nor a calculation that its distinguished top inputs are cycles or satisfy the required higher sums. It does not identify surgery total homology with a filling.

[F3] The total homology is interpreted as an invariant of the filled manifold only after closed-manifold Heegaard Floer invariance ([[thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant]]).

## Proof

1.1 The cube module and its increasing filtration are fixed by [F1]. The candidate total differential sums over ordered immediate-successor paths and their polygon-count maps, with diagonal disk differential. Each component from $I$ to $J\ge I$ lowers $n-|I|$ to $n-|J|$, so it preserves every increasing filtration subspace whenever the count is defined. Square-zero, count finiteness and identification of total homology still require proof. No filtered comparison between different presentations is a premise of this fixed-data assertion. [F1, given, construct, algebra]

1.2 The square-zero substitution has a precise additional finite hypothesis. Denote polygon operations by $\mu_k$ and the chosen immediate top inputs by $\theta_{IJ}$. For $A<B$, form the finite top-input sum
$$M_{AB}=\sum_{A=I_0<\cdots<I_r=B}\mu_r(\theta_{I_0I_1},\ldots,\theta_{I_{r-1}I_r}),$$
where every step changes one coordinate; $\mu_1$ is the differential on a single top input. Suppose the actual surgery data satisfy $M_{AB}=0$ for every such interval, in their actual auxiliary complexes and compatible labels. Expand the component $(D^2)_{IJ}$ as the sum over two consecutive input-containing polygon operations. The boundary identity of [F2], summed over all paths from $I$ to $J$, pairs these with exactly the terms obtained by inserting one $M_{AB}$ among the top inputs of an input-containing polygon. Every consecutive subpath is counted once in this insertion sum, including length-one differential terms. Thus $M_{AB}=0$ implies $D^2=0$. For $I=J$ this is the vertex differential identity. This is a finite substitution in the actual polygon identities; it does not calculate the top-input sums. [F2, step 1.1, finite path expansion]

1.3 There are only finitely many vertex generators, coordinate paths and required arities. Once the actual admissible subordinate data and top inputs are supplied, [F2] gives finite counts for each term and hence for every differential coefficient. The filtration calculation in step 1.1 then applies literally. In the $n=1$ case, the matrix has diagonal vertex differentials and sole off-diagonal triangle map $f_{01}$; the resulting two-summand complex is its mapping cone with the usual homological shift. This is an actual algebraic identification whenever those data exist, not yet a comparison with the third filling. For $n=0$ it is exactly the given hat complex of $Y$. [F1, F2, steps 1.1–1.2, finite algebra]

2.1 An identification with $\widehat{CF}(Y(\infty,\ldots,\infty))$ requires more than square-zero or pairwise chain-map identities. For one coordinate it requires an actual quasi-isomorphism from the above cone to the third filling; for several coordinates the comparisons must include the higher components compatible with every remaining coordinate, so that replacing that coordinate gives a chain map on the TOTAL cube. A chain quasi-isomorphism of vertices alone does not supply this coherence. Given such coherent coordinate comparisons, their finite composition reduces the cube to the all-$\infty$ complex. Alternatively a total comparison whose finite associated graded pieces are those one-coordinate quasi-isomorphisms is a quasi-isomorphism: filter its mapping cone by the remaining finitely many coordinates and use the finite filtration induction on acyclic successive quotients. This last algebraic implication supplies no geometric comparison map. [F1, F3, steps 1.1–1.3, finite cone filtration argument]

2.2 The retained analytic theorem [F2] expressly does not construct these surgery data, calculate $M_{AB}$, or prove the comparison with a filling. The retained general closed-manifold invariance [F3] cannot supply any of those map calculations either. Therefore the original general-$Y$, arbitrary framed-link Statement remains held at: actual subordinate and compatibly admissible multidiagrams, actual top-input cycles and all finite $M_{AB}$ identities, and actual coherent third-filling cone comparisons. Once they are supplied, steps 1.1–2.1 give square-zero, filteredness and the finite algebraic passage to total homology in precisely the stated generality. No $S^3$ restriction, change of slopes, or filtered presentation-invariance assertion is inserted. [F1–F3, steps 1.1–2.1]
