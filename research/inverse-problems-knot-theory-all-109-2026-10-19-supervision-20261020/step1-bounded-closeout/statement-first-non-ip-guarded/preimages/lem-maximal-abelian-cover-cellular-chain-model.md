---
id: lem-maximal-abelian-cover-cellular-chain-model
kind: lemma
title: "Cellular chains of the maximal abelian cover compute the link Alexander module"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-maximal-abelian-cover-alexander-module
  - lem-maximal-abelian-cover-link-exterior-retraction
  - thm-cellular-homology-computes-singular-homology
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Silver and Susan G. Williams, Mahler Measure, Links and Homology Growth, §4, pp. 4–5"
      url: "https://arxiv.org/pdf/math/0003127"
    - title: "Allen Hatcher, Algebraic Topology, §2.2, Theorem 2.35, printed pp. 139–140"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Statement

Assume the Axiom of Choice. Let $L$ be a nonempty oriented smooth $r$-component link with $r\ge1$, compact exterior $E_L$, and maximal abelian cover $E_L^{\mathrm{ab}}\to E_L$ with deck group $H\cong\mathbb Z^r$ and group ring $\Lambda_r=\mathbb Z[H]$. For any finite CW structure on $E_L$, the inverse-image cells and one chosen lift of each open cell form a finite-rank free $\Lambda_r$ cellular chain complex. Its first homology is the absolute multivariable Alexander module $A_L=H_1(X_L^{\mathrm{ab}};\mathbb Z)$, with the deck action specified by the positive meridians.

## Statement references

[[def-maximal-abelian-cover-alexander-module]]

[[lem-maximal-abelian-cover-link-exterior-retraction]]

## Facts & Assumptions

**Given:** AC; a nonempty oriented smooth $r$-component link with $r\ge1$; its chosen compact exterior $E_L$; its regular maximal abelian cover $E_L^{\mathrm{ab}}\to E_L$ with deck group $H\cong\mathbb Z^r$; and a finite CW structure on $E_L$.

[A1] AC is the explicit hypothesis under which the maximal-abelian-cover definition is being used; selecting the finitely many cell lifts below itself needs no choice principle ([[def-axiom-of-choice]]).

[F1] The absolute multivariable Alexander module is $A_L=H_1(X_L^{\mathrm{ab}};\mathbb Z)$, with Laurent variables acting by the positive-meridian deck transformations ([[def-maximal-abelian-cover-alexander-module]]).

[F2] The compact exterior cover is the restriction of the open-complement cover; lifted deformation retraction gives a deck-equivariant isomorphism $H_1(E_L^{\mathrm{ab}};\mathbb Z)\cong A_L$ ([[lem-maximal-abelian-cover-link-exterior-retraction]]).

[F3] Cellular homology is naturally isomorphic to singular homology for every CW complex, and the isomorphism commutes with cellular maps ([[thm-cellular-homology-computes-singular-homology]]).

## Proof

1.1 A finite CW structure has finitely many open cells. Each open cell is contractible, so its inverse image under a covering is a disjoint union of copies of that cell. The regular deck group $H$ acts freely and transitively on those copies. Choose one lifted copy for each cell; finitely many choices suffice. Every other lift is uniquely a deck translate of the chosen lift, so the lifted cellular chain group in degree $n$ is a free $\mathbb Z[H]=\Lambda_r$-module with one basis element per $n$-cell of $E_L$. [F1, given, choose]

1.2 Translating a lifted characteristic map by $h\in H$ translates all of its oriented boundary cells by the same $h$. Thus every cellular boundary map is $\Lambda_r$-linear. The cellular identity $\partial^2=0$ then makes these finite-rank free modules a chain complex over $\Lambda_r$. [F1, step 1.1, construct]

2.1 Each deck transformation is cellular on the lifted CW structure. By the naturality in [F3], the cellular-to-singular homology isomorphism commutes with every deck transformation and hence is $\Lambda_r$-linear. In degree one it identifies the homology of the lifted cellular complex with $H_1(E_L^{\mathrm{ab}};\mathbb Z)$. [F1, F3, step 1.2]

2.2 Under the Axiom-of-Choice convention [A1], [F2] says inclusion of the restricted maximal abelian cover into $X_L^{\mathrm{ab}}$ induces a $\Lambda_r$-module isomorphism on first homology. Therefore the lifted cellular complex has first homology $A_L$ with the stated deck action. [A1, F2, step 2.1] ∎

## Proof references

[[def-maximal-abelian-cover-alexander-module]]

[[lem-maximal-abelian-cover-link-exterior-retraction]]

[[thm-cellular-homology-computes-singular-homology]]

[[def-axiom-of-choice]]
