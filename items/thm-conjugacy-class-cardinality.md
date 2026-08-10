---
id: thm-conjugacy-class-cardinality
kind: theorem
title: '$G/C_G(x)\to\operatorname{Cl}_G(x)$ is a bijection, so $|\operatorname{Cl}_G(x)|=[G:C_G(x)]$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-orbit-stabilizer, cor-orbit-stabilizer-cardinality, def-conjugacy-class-and-centralizer, lem-centralizers-and-normalizers-are-subgroups, thm-conjugation-homomorphism, thm-group-actions-correspond-to-homomorphisms]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Brosnan, Undergraduate Algebra Notes, 3.14: G-Sets, Corollary 3.109"
      url: "https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.2"
      url: "https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html"
pipeline_run: null
---

## Statement

For a group $G$ and $x\in G$, the map

$$G/C_G(x)\longrightarrow\operatorname{Cl}_G(x),\qquad gC_G(x)\longmapsto gxg^{-1},$$

is a well-defined bijection. Consequently

$$|\operatorname{Cl}_G(x)|=[G:C_G(x)]$$

whenever these cardinalities are finite, in particular when $G$ is finite.

## Facts & Assumptions

**Given:** A group $G$ and an element $x\in G$.

[L1] Orbit-stabiliser gives a bijection from the cosets of a point stabilizer to its orbit ([[thm-orbit-stabilizer]]).

[L2] The finite cardinality of an orbit is the index of its stabilizer ([[cor-orbit-stabilizer-cardinality]]).

[L3] The conjugacy class is $\operatorname{Cl}_G(x)=\{gxg^{-1}:g\in G\}$ and the centralizer is $C_G(x)=\{g:gxg^{-1}=x\}$ ([[def-conjugacy-class-and-centralizer]]).

[L4] The centralizer $C_G(x)$ is a subgroup of $G$ ([[lem-centralizers-and-normalizers-are-subgroups]]).

[L5] The maps $x\mapsto gxg^{-1}$ form the conjugation homomorphism ([[thm-conjugation-homomorphism]]).

[L6] A homomorphism into a symmetric group defines a group action ([[thm-group-actions-correspond-to-homomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 By [L5] and [L6], $G$ acts on itself by conjugation. By [L3], the orbit of $x$ is $\operatorname{Cl}_G(x)$ and its stabilizer is $C_G(x)$, which is a subgroup by [L4]. [L3, L4, L5, L6]

2.1 Applying [L1] to this action gives the displayed well-defined bijection $gC_G(x)\mapsto gxg^{-1}$. [step 1.1, L1]

3.1 Applying [L2] to the same orbit gives $|\operatorname{Cl}_G(x)|=[G:C_G(x)]$ whenever finite. [step 1.1, step 2.1, L2] ∎
