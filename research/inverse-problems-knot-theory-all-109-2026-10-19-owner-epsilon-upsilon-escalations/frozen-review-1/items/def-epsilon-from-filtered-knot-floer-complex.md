---
id: def-epsilon-from-filtered-knot-floer-complex
kind: definition
title: "Epsilon from the filtered knot Floer complex"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-grid-diagram-for-an-oriented-knot
  - def-knot-floer-filtration-and-tau
  - def-axiom-of-choice
dependency_level: 2
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
---

## Definition

Work over $\mathbb F_2=\mathbb Z/2\mathbb Z$. Let $K\subset S^3$ be a smooth oriented knot and let $C=\mathrm{CFK}^{\infty}(K)$ be its finitely generated free $\mathbb F_2[U,U^{-1}]$ chain complex with Maslov grading $M$ and bifiltration coordinates $(i,j)$. Multiplication by $U$ lowers each filtration coordinate by one and lowers $M$ by two; the differential lowers $M$ by one and does not increase either filtration. The total homology is $\mathbb F_2[U,U^{-1}]$ with its generator normalized in Maslov grading zero.

For a filtration region $R$, write $C\{R\}$ for the corresponding subquotient of the bifiltered complex; in particular $C\{i=0\}$ is the vertical complex, $C\{j=s\}$ is the horizontal complex at Alexander level $s$, and $C\{i=0,j\le s\}$ is the subcomplex of the vertical complex at levels at most $s$. Define
$$ \tau(C)=\min\{s\in\mathbb Z: H_*(C\{i=0,j\le s\})\longrightarrow H_*(C\{i=0\})\text{ is nonzero} \}. $$
For each integer $s$, let $F_s$ be the homology map induced by the chain map from $C\{i=0\}$ to $C\{\min(i,j-s)=0\}$ obtained by quotienting by $C\{i=0,j<s\}$ and then including the quotient. Let $G_s$ be the homology map from $C\{\max(i,j-s)=0\}$ to $C\{i=0\}$ obtained by quotienting by $C\{i<0,j=s\}$ and then including. The epsilon invariant is
$$ \epsilon(C)=\begin{cases} 1,&F_{\tau(C)}=0,\\ -1,&G_{\tau(C)}=0,\\ 0,&F_{\tau(C)}\ne0\text{ and }G_{\tau(C)}\ne0. \end{cases} $$
Here zero and nonzero refer to the induced homology maps. This definition fixes the sign convention; invariance under stable equivalence is a separate claim.

## Definition references

[[def-knot-floer-filtration-and-tau|The current diagram-specific knot Floer filtration convention; model independence remains unresolved]]

[Hom, *The knot Floer complex and the smooth concordance group*, §§2–3](https://arxiv.org/pdf/1111.6635)

[Hom, *A survey on Heegaard Floer homology and concordance*, §3.1](https://arxiv.org/pdf/1512.00383)

## Facts & Assumptions

**Given:** A finitely generated bifiltered knot Floer complex $C$ with the grading, filtration, and rank-one vertical homology conventions stated above.

[A1] [[def-knot-floer-filtration-and-tau]]: the current supplier defines the threshold for a specified normalized filtered hat complex and explicitly defers diagram/surface independence. It does not state the exact CFK∞ subquotient equivalence used here; that interface remains to be reconciled.

## Proof

1.1 The quotient and inclusion constructions in $F_s$ and $G_s$ are chain maps between the stated subquotient complexes, so they induce homology maps. The integer minimum defining $\tau(C)$ exists: the filtration is integer-valued and exhaustive, and the total normalized generator is represented by a finite chain, so some finite filtration level maps nontrivially. [given, A1]

1.2 At $s=\tau(C)$, the two induced maps cannot both vanish. In the equivalent horizontal description, $F_{\tau}=0$ means the distinguished vertical class is in the image of the horizontal differential, while $G_{\tau}=0$ means it is not in its kernel. Since every boundary is a cycle, the image is contained in the kernel. Therefore the three displayed cases are mutually exclusive and exhaustive, and $\epsilon(C)$ is well-defined with value in $\{-1,0,1\}$. [given, A1, step 1.1, algebra] ∎

## Unresolved proof obligations

The current tau page is present, but its item defines tau only for specified diagram/surface data and defers independence. The exact grading normalization and subquotient maps must be reconciled before this definition can be marked ready. This proof establishes only the algebraic trichotomy conditional on that interface; it does not prove knot isotopy or concordance invariance.
