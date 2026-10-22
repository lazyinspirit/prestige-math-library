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
  proof: literature-derived
sources:
  references:
    - title: "Ozsváth and Szabó, On the Heegaard Floer homology of branched double-covers, §§2 and 4, Theorems 4.1 and 4.7"
      url: "https://arxiv.org/pdf/math/0309170v1"
    - title: "Lipshitz, Heegaard Floer Homologies, §5"
      url: "https://floer.wiki/more/courses/floer-homology/2024/lipshitz_heegaard_floer_homology.pdf"
---

## Statement

Assume the countable-choice Heegaard Floer analytic package. Let $Y$ be any closed connected oriented smooth three-manifold and let $\mathbb L$ be an ordered framed $n$-component link in $Y$. On its $i$th exterior boundary torus let $\mu_i$ be the meridian and $\lambda_i$ the chosen framing longitude. Use the three filling slopes $\lambda_i$, $\mu_i+\lambda_i$ and $\mu_i$, labelled $0,1,\infty$, respectively; $\infty$ restores the original unfilled component. For $I\in\{0,1,\infty\}^n$ let $Y(I)$ be the simultaneous filling specified by $I$. Fix an admissible pointed Heegaard multi-diagram subordinate to these surgeries and the compatible perturbation and top-generator choices used by the polygon construction. The mod-two polygon maps on
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

**Given:** The closed connected oriented smooth three-manifold $Y$, the ordered framed link, the $0,1,\infty$ filling data $Y(I)$, and the compatible admissible multi-diagram and top-generator choices in the Statement.

[F1] The general $Y$ vertex modules and increasing filtration are the ones explicitly specified in the Statement. The branched-cover module is their later special application, rather than a premise restricting this general surgery statement to $S^3$.

[F2] The actual analytic foundations [[lem-os-disk-and-polygon-analytic-foundations]] supply finite zero-basepoint disk and polygon counts, compact one-dimensional boundaries, exhaustive gluing and the resulting identities on the stated operation-specific admissible data: global weak data for all-sector sums, or the prescribed ordinary weak or strict specified-Spin-c families. Positive-rank triples use explicit small triple-free representatives with transported labels; rank zero uses the point model. This supplies neither a subordinate surgery multidiagram nor a calculation that its distinguished top inputs are cycles or satisfy the required higher sums. It does not identify surgery total homology with a filling.

[F3] The total homology is interpreted as an invariant of the filled manifold only after closed-manifold Heegaard Floer invariance ([[thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant]]).

[F4] **External input — actual surgery data and top sums.** Ozsváth–Szabó, *On the Heegaard Floer homology of branched double-covers*, arXiv:math/0309170v1, §4.2, pp.21–23, equation(10) and Lemma4.5: for an ordered framed link in an arbitrary closed oriented three-manifold, the bouquet-subordinate attaching systems use meridians $\beta_i$, framing curves $\gamma_i$, and meridian-added curves $\delta_i$, with separately labelled Hamiltonian copies for unchanged systems. On the compatible admissible surgery data the distinguished top inputs are cycles and all monotone top-input sums $M_{AB}$ below vanish. This is the imported operation-specific construction/calculation, not a consequence newly deduced from [F2]. Only its mod-two version is used.

[F5] **External input — actual single-coordinate surgery cone.** The same source, Theorem4.7 and its proof, pp.24–27, equation(12), supplies a quasi-isomorphism between the cone of the $0\to1$ two-handle triangle map and the third, meridian filling. Its quadrilateral/top-generator calculation and the cyclic Hamiltonian-copy construction are included in this import; no merely formal null-composition is substituted for that calculation. Its hypotheses are the surgery triad with the subordinate admissible choices above, not an arbitrary pair of chain maps.

[F6] **External input — total-cube filling comparison.** The proof of Theorem4.1, p.27, supplies acyclicity of the enlarged three-valued coordinate complex with its ACTUAL higher polygon entries. It yields the homology comparison with one coordinate filled by $\infty$, and induction gives the all-$\infty$ filling. Theorem4.1 and Remark4.2, p.17, identify the first differential as the sum of immediate two-handle maps and allow flattening by $|I|$. This imports the actual total construction; it does not assert guessed canonical coherent comparison maps between arbitrary presentations.

## Proof

1.1 The cube module and its increasing filtration are fixed by [F1]. The candidate total differential sums over ordered immediate-successor paths and their polygon-count maps, with diagonal disk differential. Each component from $I$ to $J\ge I$ lowers $n-|I|$ to $n-|J|$, so it preserves every increasing filtration subspace whenever the count is defined. Square-zero, count finiteness and identification of total homology still require proof. No filtered comparison between different presentations is a premise of this fixed-data assertion. [F1, given, construct, algebra]

2.1 The square-zero substitution has a precise additional finite hypothesis. Denote polygon operations by $\mu_k$ and the chosen immediate top inputs by $\theta_{IJ}$. For $A<B$, form the finite top-input sum $$M_{AB}=\sum_{A=I_0<\cdots<I_r=B}\mu_r(\theta_{I_0I_1},\ldots,\theta_{I_{r-1}I_r}),$$ where every step changes one coordinate; $\mu_1$ is the differential on a single top input. Suppose the actual surgery data satisfy $M_{AB}=0$ for every such interval, in their actual auxiliary complexes and compatible labels. Expand the component $(D^2)_{IJ}$ as the sum over two consecutive input-containing polygon operations. The boundary identity of [F2], summed over all paths from $I$ to $J$, pairs these with exactly the terms obtained by inserting one $M_{AB}$ among the top inputs of an input-containing polygon. Every consecutive subpath is counted once in this insertion sum, including length-one differential terms. Thus $M_{AB}=0$ implies $D^2=0$. For $I=J$ this is the vertex differential identity. This is a finite substitution in the actual polygon identities; it does not calculate the top-input sums. [F2, step 1.1, algebra]

3.1 There are only finitely many vertex generators, coordinate paths and required arities. Once the actual admissible subordinate data and top inputs are supplied, [F2] gives finite counts for each term and hence for every differential coefficient. The filtration calculation in step 1.1 then applies literally. In the $n=1$ case, the matrix has diagonal vertex differentials and sole off-diagonal triangle map $f_{01}$; the resulting two-summand complex is its mapping cone with the usual homological shift. This is an actual algebraic identification whenever those data exist, not yet a comparison with the third filling. For $n=0$ it is exactly the given hat complex of $Y$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Apply [F4] to the actual surgery data: its top cycles and vanishing $M_{AB}$ supply exactly the extra hypothesis of step 2.1. Together with the retained local count identities [F2], steps 1.1, 2.1, 3.1 give an actual finite differential preserving the stated filtration. In particular the branched-cover definition later uses a genuine complex, not just a candidate module. [F1, F2, F4, step 1.1, step 2.1, step 3.1]

4.2 For one coordinate, [F5] supplies the actual comparison of this cone with the third filling, so the cone's short exact sequence gives the surgery long exact sequence. The cyclic triad ordering is the one with slope labels $\lambda,\mu+\lambda,\mu$, as fixed in the Statement; the source's Section2, p.6, describes its cyclic symmetry. For zero coordinates the identity complex gives the asserted result. [F5, step 3.1]

5.1 For several coordinates use [F6], rather than composing unspecified vertexwise comparison maps. Filter the enlarged $\{0,1\}^{n-1}\times\{0,1,\infty\}$ complex by the first $n-1$ coordinates. Its successive quotients are the acyclic single-coordinate three-term complexes from [F5], including the quadrilateral entry. A finite filtered complex with acyclic successive quotients is acyclic, by induction through the short exact sequences of filtration pieces. The subcomplex with last coordinate $\infty$ and the quotient with last coordinate $0$ or $1$ therefore have isomorphic homology via the connecting map, with the usual cone shift. Induction identifies the latter cube's total homology with the all-$\infty$ hat homology. The source provides the higher entries of this enlarged complex and their square-zero in [F4], [F5], [F6]; no new canonical comparison map is claimed. [F4, F5, F6, step 4.1, algebra]

6.1 Closed-manifold invariance [F3] identifies this final group with $\widehat{HF}(Y;\mathbb F_2)$. The construction and every count used here are the imported compatible surgery construction, combined with the retained AComega analytic package. Its geometric data and arities for the fixed link are finite; the cyclic Hamiltonian-copy sequence used in the single-coordinate argument is countable, so the existing countable-choice branch suffices. The source itself does not formulate a choice hierarchy; this accounting uses the retained analytic CC interface and the finite/countable auxiliary selections just specified. No full-AC classification, presentation-independent filtered quasi-isomorphism, or restriction to $S^3$ is introduced. [F2, F3, F4, F5, F6, step 4.1, step 4.2, step 5.1] ∎

