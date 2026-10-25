---
id: thm-string-link-nilpotent-peripheral-identifications
kind: theorem
title: String-link end inclusions identify finite nilpotent peripheral quotients
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations
  - def-based-string-link-and-labeled-link-peripheral-system
  - def-lower-central-series-and-magnus-expansion-for-links
  - lem-string-link-exterior-homology-and-meridian-maps
  - lem-h2-classifying-map-is-surjective
  - lem-classifying-maps-are-natural-under-group-homomorphisms
  - prop-the-first-hurewicz-map-in-degree-one-is-abelianization
  - thm-stallings-integral-lower-central-isomorphism
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: John Milnor, Link Groups
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf
      locator: §§1–2, PDF pp. 1–6, meridians and link groups
    - title: Ryan Stees, Milnor’s Invariants for Knots and Links in Closed Orientable
        3-Manifolds
      url: https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content
      locator: §2.5, printed pp. 16–18 (PDF pp. 24–26), lower-central quotients and
        group homology
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume AC. Let $\tau$ be an $r$-component based string link with $r\geq1$,
exterior $X_\tau$, and endpoint punctured disks $P_-,P_+$. Use compatible jointly transported stem accesses for the positive
endpoint meridians to identify $\pi_1(P_-)$ and $\pi_1(P_+)$ with the free
group $F_r=\langle x_1,\ldots,x_r\rangle$, and let
$\iota_\pm:\pi_1(P_\pm)\to\pi_1(X_\tau)$ be the based end homomorphisms,
including the chosen top connecting path. For every integer $q\geq1$, each
induced map
$$\iota_{\pm,q}:F_r/\Gamma_qF_r\longrightarrow \pi_1(X_\tau)/\Gamma_q\pi_1(X_\tau)$$
is an isomorphism. Their composite
$\iota_{-,q}^{-1}\iota_{+,q}$ is the based nilpotent comparison of the labeled
top and bottom peripheral systems.

Arbitrary independently based positive endpoint meridians are retained as well: the map from the free symbol group $F_r$ sending $x_i$ to that chosen meridian need not identify the full fundamental group, but its composites with the end maps still induce the displayed isomorphisms on every finite lower-central quotient. Their inverse/composite is the comparison for those exact choices, and the conjugating access differences are part of the data.


## Statement references

[Milnor, *Link Groups*, §§1–2](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf)

[Stees, §2.5](https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content)

## Facts & Assumptions

**Given:** Full AC and the based string-link data in the statement.

[A1] Full AC, written AC, is [[def-axiom-of-choice]]. The local Stallings supplier uses this axiom for its group-homology branch.

[F1] Each endpoint group is free of rank $r$, with the compatible positive meridian basis; independently based meridians are the recorded conjugates and give the same homology basis. The exterior inclusion maps are isomorphisms on $H_1$ and epimorphisms on $H_2$. [[lem-string-link-exterior-homology-and-meridian-maps]]

[F2] The natural degree-one Hurewicz maps identify group $H_1$ with abelianization. [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

[F3] For a path-connected CW complex, the classifying map to the classifying space of its fundamental group is onto on $H_2$. [[lem-h2-classifying-map-is-surjective]]

[F4] Classifying maps commute up to based homotopy with maps of path-connected CW complexes and their induced fundamental-group homomorphisms. [[lem-classifying-maps-are-natural-under-group-homomorphisms]]

[F5] A group homomorphism inducing an isomorphism on $H_1(-;\mathbb Z)$ and an epimorphism on $H_2(-;\mathbb Z)$ induces isomorphisms on every finite lower-central quotient, under the stated AC branch. [[thm-stallings-integral-lower-central-isomorphism]]

[F6] Compact smooth manifolds with corners admit finite CW triangulations under AC. [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]]

## Proof

**Given:** The endpoint inclusions $f_\pm:P_\pm\hookrightarrow X_\tau$.

1.1 By [F1], each $f_\pm$ induces an isomorphism on topological $H_1$ and an epimorphism on topological $H_2$. Naturality of [F2] identifies the $H_1$ map with the map between the abelianizations of $\pi_1(P_\pm)$ and $\pi_1(X_\tau)$. Thus each group homomorphism $(f_\pm)_*$ is an isomorphism on group $H_1$. [F1, F2, given]

2.1 By [F6], $P_\pm$ and $X_\tau$ have CW structures, so choose classifying maps $c_\pm:P_\pm\to B\pi_1(P_\pm)$ and $c_X:X_\tau\to B\pi_1(X_\tau)$. For either sign and any $y\in H_2(\pi_1(X_\tau);\mathbb Z)$, choose $z\in H_2(X_\tau;\mathbb Z)$ with $(c_X)_*(z)=y$ using [F3]. By [F1] choose $w\in H_2(P_\pm;\mathbb Z)$ with $(f_\pm)_*(w)=z$. Write $\phi_\pm=(f_\pm)_*$. Naturality [F4] gives $$(B\phi_\pm)_*((c_\pm)_*(w))=(c_X)_*((f_\pm)_*(w))=y.$$ Thus every class $y$ in $H_2(\pi_1(X_\tau);\mathbb Z)$ is in the image of the induced group-homology map $H_2(\pi_1(P_\pm);\mathbb Z)\to H_2(\pi_1(X_\tau);\mathbb Z)$. [F1, F3, F4, F6, step 1.1, choose]

3.1 By [F5], each $(f_\pm)_*$ now satisfies both Stallings hypotheses. Applying it separately to $f_-$ and $f_+$ proves that each induced map on $F_r/\Gamma_q$ is an isomorphism for every finite $q\geq1$. [A1, F5, step 1.1, step 2.1]

4.1 Since both end maps are isomorphisms at every such $q$, their inverse/composite is defined and is an isomorphism. The meridian labels and basing path are carried through the same maps, so this is exactly the stated peripheral comparison. The proof uses full AC only through the classifying-space and Stallings suppliers; no additional choice is used in the elementwise quotient argument. [A1, step 3.1, algebra]

5.1 Choose arbitrary independently based positive endpoint meridians. Their map $a:F_r\to\pi_1(P_\pm)$ is the identity on the ordered $H_1$ basis by [F1] and [F2]. Also $H_2(\pi_1(P_\pm);\mathbb Z)=0$: [F1] gives $H_2(P_\pm)=0$, and [F3] maps that group onto the group-homology group. Thus $a$ is onto on $H_2$, independently of its source's $H_2$. Apply [F5] to $a$. It induces an isomorphism at every finite lower-central quotient, even though $a$ need not be an isomorphism on the full groups. Compose it with the already proved end isomorphism of step 3.1. This proves the arbitrary-basing branch and its stated inverse/composite, using exactly the selected meridian conjugations rather than an incorrect free-basis assertion. [A1, F1, F2, F3, F5, step 3.1, construct, algebra] ∎
