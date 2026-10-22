---
id: def-epsilon-from-filtered-knot-floer-complex
kind: definition
title: "Epsilon from the filtered knot Floer complex"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-grid-diagram-for-an-oriented-knot
  - def-knot-floer-filtration-and-tau
  - def-axiom-of-choice
  - lem-bifiltered-two-hook-maps-cannot-both-vanish
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
dependency_level: 8
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite algebraic definition uses no choice. The full-AC edge is retained from the controlling KT-42 interface; the actual analytic grid supplier uses ACω, a separate branch."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jennifer Hom, The knot Floer complex and the smooth concordance group, §§2–3"
      url: "https://arxiv.org/pdf/1111.6635"
      locator: "§§2–3, PDF pp.4–7; the maps F_s and G_s, the three epsilon cases, and the reduced-complex convention"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance, §3.1"
      url: "https://arxiv.org/pdf/1512.00383"
      locator: "§3.1, PDF pp.8–10; vertical/horizontal simplified bases and the epsilon cases"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Definition

Work over $\mathbb F_2=\mathbb Z/2\mathbb Z$. Let $K\subset S^3$ be a smooth oriented knot and let $C=\mathrm{CFK}^{\infty}(K)$ be its finitely generated free $\mathbb F_2[U,U^{-1}]$ chain complex with Maslov grading $M$ and bifiltration coordinates $(i,j)$. Multiplication by $U$ lowers each filtration coordinate by one and lowers $M$ by two; the differential lowers $M$ by one and does not increase either filtration. The total homology is $\mathbb F_2[U,U^{-1}]$ with its generator normalized in Maslov grading zero.

For a filtration region $R$, write $C\{R\}$ for the corresponding subquotient of the bifiltered complex; in particular $C\{i=0\}$ is the vertical complex, $C\{j=s\}$ is the horizontal complex at Alexander level $s$, and $C\{i=0,j\le s\}$ is the subcomplex of the vertical complex at levels at most $s$. Define
$$ \tau(C)=\min\{s\in\mathbb Z: H_*(C\{i=0,j\le s\})\longrightarrow H_*(C\{i=0\})\text{ is nonzero} \}. $$
For each integer $s$, let $F_s$ be the homology map induced by the chain map from $C\{i=0\}$ to $C\{\min(i,j-s)=0\}$ obtained by quotienting by $C\{i=0,j<s\}$ and then including the quotient. Let $G_s$ be the homology map from $C\{\max(i,j-s)=0\}$ to $C\{i=0\}$ obtained by quotienting by $C\{i<0,j=s\}$ and then including. The epsilon invariant is
$$ \epsilon(C)=\begin{cases} 1,&F_{\tau(C)}=0,\\ -1,&G_{\tau(C)}=0,\\ 0,&F_{\tau(C)}\ne0\text{ and }G_{\tau(C)}\ne0. \end{cases} $$
Here zero and nonzero refer to the induced homology maps. This definition fixes the sign convention; invariance under stable equivalence is a separate claim.

## Definition references

[[def-knot-floer-filtration-and-tau|The diagram-specific knot Floer filtration and tau convention]]

[Hom, *The knot Floer complex and the smooth concordance group*, §§2–3](https://arxiv.org/pdf/1111.6635)

[Hom, *A survey on Heegaard Floer homology and concordance*, §3.1](https://arxiv.org/pdf/1512.00383)

## Facts & Assumptions

**Given:** A finitely generated bifiltered knot Floer complex $C$ with the grading, filtration, and rank-one vertical homology conventions stated above.

[A1] [[def-knot-floer-filtration-and-tau]]: that item defines the threshold for specified normalized filtered hat data and does not itself prove diagram/surface independence or state the Laurent subquotient interface used here. The current [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] separately supplies a normalized grid-to-analytic filtered comparison; localization gives the Laurent comparison under its stated prerequisites. This Definition remains an algebraic definition on a supplied complex.

[F1] [[lem-bifiltered-two-hook-maps-cannot-both-vanish]] proves that a vertical class represented at $j\le s$ and killed by $F_s$ is in the image of $G_s$, by explicit northeast/southwest hook projections. It uses no simultaneous horizontal simplification theorem.

## Proof

1.1 The quotient and inclusion constructions defining $F_s,G_s$ are chain maps between the stated subquotient complexes, since the differential cannot increase either coordinate. The vertical complex is finite-dimensional: translate each of the finitely many homogeneous Laurent basis generators to algebraic level zero. Its remaining basis has finitely many integer Alexander levels. Since its homology is one-dimensional by the Given data, some finite cycle represents its nonzero class. Below the least basis level the filtered subcomplex is zero, and above the greatest level it is the whole vertical complex. Thus the minimum defining $\tau(C)$ exists. [given, F1, algebra]

2.1 Let $s=\tau(C)$ and let $\xi$ be the nonzero vertical homology class, with a cycle representative supported at $j\le s$. If $F_s=0$, [F1] produces a southwest-hook cycle whose image under $G_s$ is $\xi$, so $G_s\ne0$. Hence the two maps cannot both vanish. Their remaining zero/nonzero possibilities are exactly the three displayed cases, proving the algebraic trichotomy and the value set $\{-1,0,1\}$. This argument assumes no horizontal-representative equivalence, and supplies no model independence. [given, F1, step 1.1, algebra] ∎

## Unresolved proof obligations

The diagramwise tau definition alone does not supply an analytic $\mathrm{CFK}^{\infty}$ model. The current [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] has an authored proof of the normalized grid-to-analytic comparison; localization gives the Laurent comparison under that supplier's stated prerequisites. This Definition's two-hook proof establishes only the algebraic trichotomy for a supplied finite based bifiltered complex with rank-one vertical homology. It does not prove stable-equivalence or concordance invariance, nor the simultaneous horizontal-representative normal form supplied separately by [[lem-epsilon-stable-core-from-finite-filtered-splittings]].
