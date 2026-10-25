---
id: cex-the-central-product-decomposition-of-an-extraspecial-group-is-not-unique
kind: counterexample
title: "An extraspecial group of order $32$ decomposes both as two quaternion factors and as two dihedral factors"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-internal-central-product-of-a-family-of-subgroups, thm-recognition-of-an-internal-central-product, lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups, thm-classification-of-extraspecial-two-groups, def-quaternion-group-of-order-eight, def-generalized-dihedral-group]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups (Hilary Term 2008), 48 pp."
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, 62 pp."
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. Kaur and A. Kulshrestha, Characters of real special 2-groups (arXiv:1510.06583v1)"
      url: "https://arxiv.org/pdf/1510.06583"
---
## Statement refuted

The central-product decomposition of an extraspecial group into factors of order $p^3$ is unique.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[L1] Subgroups $G_1,\dots,G_r$ of $G$ form an internal central product when they generate $G$ and $[G_i,G_j]=1$ for $i\ne j$ ([[def-internal-central-product-of-a-family-of-subgroups]]).

[L2] Subgroups $G_1,\dots,G_r$ form an internal central product of $G$ if and only if the multiplication map $G_1\times\dots\times G_r\to G$ is a surjective homomorphism each of whose factors meets its kernel trivially ([[thm-recognition-of-an-internal-central-product]]).

[L3] $Q_8\circ Q_8\cong\operatorname{Dih}(C_4)\circ\operatorname{Dih}(C_4)$ ([[lem-a-central-product-of-two-quaternion-groups-is-a-central-product-of-two-dihedral-groups]]).

[L4] For each $n\ge1$ there are exactly two extraspecial groups of order $2^{1+2n}$ up to isomorphism, with $2^{2n}+2^{n}$ and $2^{2n}-2^{n}$ solutions of $x^2=1$ ([[thm-classification-of-extraspecial-two-groups]]).

[L5] $$Q_8\;:=\;\{\,1,\,-1,\,i,\,-i,\,j,\,-j,\,k,\,-k\,\}\;\subseteq\;\mathbb{H}^{\times}.$$ ([[def-quaternion-group-of-order-eight]]).

[L6] $$\operatorname{Dih}(A)=A\rtimes C_2.$$ ([[def-generalized-dihedral-group]]).


## Counterexample

**Proof technique:** constructive.

1.1 Inside one extraspecial group of order thirty-two, exhibit two quaternion subgroups and two dihedral subgroups, using the explicit generators of the cited isomorphism. [L3, L5, L6, construct]

2.1 Each pair satisfies the internal central-product conditions: elementwise commuting, intersection the centre, and generating the group. [L1, L2, step 1.1]

3.1 So the isomorphism type of the factors is not determined by the group, although the group itself is one of the two given by the classification. [L3, L4, step 2.1, discharge-construct] ∎
