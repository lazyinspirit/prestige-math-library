---
id: cor-finite-flat-noetherian-modules-are-projective
kind: corollary
title: "A finite flat module over a Noetherian ring is finite projective"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-finite-flat-modules-over-local-rings-are-free, thm-flatness-is-local, thm-projective-module-characterizations, thm-finite-generation-and-finite-presentation-over-a-noetherian-ring, thm-equational-criterion-for-flatness]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 10.78.2"
      url: "https://stacks.math.columbia.edu/tag/00NV"
    - title: "Mihnea Mustata, Graduate Commutative Algebra, §10"
      url: "https://www.math.lsa.umich.edu/~mmustata/commalg.html"
---

## Statement

Let $R$ be a Noetherian commutative ring and let $M$ be a finite flat
$R$-module. Then $M$ is finite projective.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$ and a finite flat $R$-module $M$.

[L1] A finite flat module over a Noetherian local ring is free
([[thm-finite-flat-modules-over-local-rings-are-free]]).

[L2] Over a Noetherian ring, finite modules are finitely presented
([[thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]]).

[L3] Flat modules satisfy the equational criterion for every finite family of relations ([[thm-equational-criterion-for-flatness]]).

[L4] A module is projective exactly when every epimorphism onto it splits ([[thm-projective-module-characterizations]]).

## Proof

**Proof technique:** direct.


1.1 For every maximal ideal $\mathfrak m\subset R$, the localization $M_{\mathfrak m}$ is finite and flat over the Noetherian local ring $R_{\mathfrak m}$. By [L1], it is free. [L1, given]


1.2 By [L2], choose a finite presentation $R^m\xrightarrow{A}R^n\xrightarrow{\pi}M\to0$, writing $x_i=\pi(e_i)$. Apply [L3] simultaneously to the finitely many relations given by the columns of $A$. It supplies elements $y_j\in M$ and coefficients $b_{ij}$ such that $x_i=\sum_jb_{ij}y_j$ and every relation among the $x_i$ is also a relation among the corresponding coefficient columns. Choose lifts $z_j\in R^n$ of the $y_j$ and define $s_0(e_i)=\sum_jb_{ij}z_j$. Then $\pi s_0=\pi$, while the relation condition says that $s_0$ kills $\operatorname{im}(A)=\ker(\pi)$. Hence $s_0$ descends to $s:M\to R^n$ with $\pi s=1_M$. Thus the presentation epimorphism splits, so [L4] makes $M$ projective. Since $M$ is finite, it is finite projective. [L2, L3, L4, construct]


2.1 Thus every finite flat module over a Noetherian ring is finite projective. [algebra] ∎
