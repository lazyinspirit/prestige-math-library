---
id: thm-the-evaluation-bundle-boundary-map-is-an-isomorphism-for-the-disk
kind: theorem
title: "Evaluation boundary isomorphism for the disk"
status: draft
origin: pipeline
landmark: true
deps: [def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes,
       lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration,
       lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism,
       thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group,
       lem-contractibility-implies-trivial-fundamental-group,
       cor-contractible-spaces-are-path-connected,
       thm-long-exact-sequence-of-homotopy-groups-of-a-fibration,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
       def-group-isomorphism-and-automorphism,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3 and the proof of Theorem 1, author manuscript pp. 5-7"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Brayton Gray, Homotopy Theory: An Introduction to Algebraic Topology, Chapter 8 on fibre spaces and exact sequences"
      url: "https://doi.org/10.1016/B978-0-12-296050-5.50014-0"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $D^2\subseteq\mathbb R^2$ be the closed unit disc
with the base configuration $Q_n=(q_1,\dots,q_n)$ of
[[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]], let

$$E:=\operatorname{Homeo}^+(D^2,\partial D^2),\qquad B:=C_n(\operatorname{int}D^2),\qquad F:=\operatorname{Homeo}^+(D^2,\partial D^2;Q_n),$$

and let $\delta:\pi_1(B,[Q_n])\to\operatorname{Mod}(D^2,Q_n;\partial D^2)=\pi_0(F)$
be the inverse-endpoint boundary map of
[[def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes]]. Then
$\delta$ is an isomorphism of groups for every $n\ge0$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the evaluation map $\operatorname{ev}:E\to B$ of
[[lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration]],
the fibre $F=\operatorname{ev}^{-1}([Q_n])$ over the basepoint, and the
boundary map $\delta$ of
[[def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes]].

[L1] $\operatorname{ev}$ is a Hurewicz fibration with fibre $F$ over $[Q_n]$
([[lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration]]).

[L2] The boundary map $\delta$ is a well-defined group homomorphism from
$\pi_1(B,[Q_n])$ to $\operatorname{Mod}(D^2,Q_n;\partial D^2)=\pi_0(F)$, and it
is the connecting map of the fibration exact sequence in the library's
convention ([[lem-the-point-motion-boundary-map-is-a-well-defined-homomorphism]],
[[def-boundary-map-from-point-motions-to-punctured-disk-mapping-classes]]).

[L3] $E=\operatorname{Homeo}^+(D^2,\partial D^2)$ is contractible in the
compact-open topology
([[thm-alexander-contractibility-of-the-boundary-fixed-disk-homeomorphism-group]]).

[L4] A contractible space is path-connected
([[cor-contractible-spaces-are-path-connected]]) and has trivial fundamental
group at every basepoint
([[lem-contractibility-implies-trivial-fundamental-group]]).

[L5] For the based fibration $\operatorname{ev}:E\to B$ with fibre $F$, the
sequence $$\cdots\to\pi_1(E)\xrightarrow{\operatorname{ev}_*}\pi_1(B)\xrightarrow{\delta}\pi_0(F)\xrightarrow{i_*}\pi_0(E)\xrightarrow{}\pi_0(B)$$ is exact wherever
there is an incoming and outgoing arrow, with $\pi_0$ a pointed set and $\pi_1$
groups; exactness means incoming image equals the inverse image of the
distinguished element
([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[L6] $\pi_0(F)=\operatorname{Mod}(D^2,Q_n;\partial D^2)$ is a group and $\pi_1(B,[Q_n])$ is a group, both with multiplication on classes
([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]).

[L7] A group isomorphism is a bijective group homomorphism
([[def-group-isomorphism-and-automorphism]]).

## Proof
**Proof technique:** direct.
1.1 *The two low-degree terms of the total space are trivial.* By [L3] the space $E$ is contractible, so by [L4] it is path-connected, that is $\pi_0(E)$ is a one-point set and the induced map $\pi_0(F)\to\pi_0(E)$ is constant; and $\pi_1(E,\operatorname{id})=\{1\}$ is the trivial group. Both statements hold for every $n\ge0$ because neither depends on the number of marked points. [L3, L4]
1.2 *The boundary map is a group homomorphism.* By [L2], $\delta$ is a well-defined map $\pi_1(B,[Q_n])\to\pi_0(F)$ preserving the products of [L6]; that is, $\delta$ is a group homomorphism and the two displayed groups are the ones from the fibration exact sequence. [L2, L6]
2.1 *Injectivity.* The map $\operatorname{ev}$ is a Hurewicz fibration with fibre $F$ over the basepoint by [L1], so the exact sequence [L5] applies to it; exactness at $\pi_1(B)$ says that the kernel of $\delta$ equals the image of $\operatorname{ev}_*:\pi_1(E,\operatorname{id})\to\pi_1(B,[Q_n])$. By step 1.1 the group $\pi_1(E,\operatorname{id})$ is trivial, so its image is the trivial subgroup, and the kernel of $\delta$ is trivial: distinct classes in $\pi_1(B,[Q_n])$ have distinct images in $\pi_0(F)$. [L1, L2, L5, step 1.1]
2.2 *Surjectivity.* The exact sequence [L5] applies to $\operatorname{ev}$ by the fibration statement [L1]; exactness at $\pi_0(F)$ says that the image of $\delta$ equals the kernel of $i_*:\pi_0(F)\to\pi_0(E)$, the kernel of a map of pointed sets being the preimage of the distinguished component. By step 1.1 the set $\pi_0(E)$ is a single point, so every element of $\pi_0(F)$ is sent to the unique component of $E$ and the kernel of $i_*$ is all of $\pi_0(F)$. Hence every element of $\pi_0(F)=\operatorname{Mod}(D^2,Q_n;\partial D^2)$ is the image under $\delta$ of some class in $\pi_1(B,[Q_n])$. [L1, L5, step 1.1]
3.1 *The isomorphism and the elementary cases.* By steps 1.2 and 2.1 the homomorphism $\delta$ is injective, and by step 2.2 it is surjective; a bijective group homomorphism is an isomorphism by [L7], which proves the claim for every $n\ge0$. The case $n=0$ is included in this argument: $B=C_0(\operatorname{int}D^2)$ is a one-point space, $F=E$, the evaluation fibration is the constant projection $E\to\{[Q_0]\}$ of the contractible space $E$, and both $\pi_1(B,[Q_0])$ and $\pi_0(F)$ are trivial, as the steps above give; for $n=1$ only the collision condition disappears from $B$ and the argument is unchanged. [L2, L5, L7, step 1.1, step 1.2, step 2.1, step 2.2] ∎

## Remarks

- Both sides of $\delta$ are computed at the same basepoint $[Q_n]$, and no
  connecting path between basepoints is chosen; this is why the result needs
  only the stated Axiom of Choice, which enters through the numerable-bundle
  route to fibration lifting, not through a basepoint change.
- The value of $\delta$ is the *inverse* of the lifted endpoint; with this
  convention $\delta$ is the connecting map $\partial_p[\gamma]=[e_0]\cdot[\gamma]^{-1}$
  of the published exact sequence, and the isomorphism of the theorem is the
  identification of the two.
