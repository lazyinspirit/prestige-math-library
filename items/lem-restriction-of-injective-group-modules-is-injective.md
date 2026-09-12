---
id: "lem-restriction-of-injective-group-modules-is-injective"
kind: "lemma"
title: "Restriction of injective group modules is injective"
deps: ["def-restriction-induction-and-coinduction-for-group-modules", "thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction", "def-injective-object"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Weibel, Sections 6.3 and 6.8; finite-support choice-free induction argument supplied here"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

For $H\le G$, induction $\mathbb Z[G]\otimes_{\mathbb Z[H]}-$ preserves monomorphisms, and restriction sends injective $G$-modules to injective $H$-modules. A supplied injective resolution over $G$ therefore restricts to an injective resolution over $H$. These assertions require no axiom of choice and no selection of all coset representatives.

## Facts & Assumptions

**Given:** A subgroup $H\le G$.

[F1] Induction is tensoring with the right $\mathbb Z[H]$-module $\mathbb Z[G]$; restriction leaves underlying abelian groups unchanged ([[def-restriction-induction-and-coinduction-for-group-modules]]).

[F2] The induction–restriction adjunction sends $f:A\to I$ to $g\otimes a\mapsto gf(a)$ ([[thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction]]).

[F3] Injectivity is the extension property for monomorphisms ([[def-injective-object]]).

## Proof

1.1 For a finite set $S$ of right cosets $gH$, let $P_S$ be the subgroup of $\mathbb Z[G]$ supported on their union. It is a right $\mathbb Z[H]$-submodule and a direct summand, by projection on those cosets. Choose representatives for these finitely many nonempty cosets. They identify $P_S$ with a finite direct sum of copies of $\mathbb Z[H]$. Thus for a monomorphism $A\hookrightarrow B$, the map $P_S\otimes A\to P_S\otimes B$ is a finite direct sum of that monomorphism, hence is injective. For $S=\varnothing$ both tensors are zero. Finite choice is a theorem of ZF. [F1]

2.1 An element of $\mathbb Z[G]\otimes A$ is a finite sum of tensors and hence comes from some $P_S\otimes A$. If its image in $\mathbb Z[G]\otimes B$ is zero, projecting the latter tensor to $P_S\otimes B$ shows that its representing element has zero image there. Step 1.1 makes it zero already in $P_S\otimes A$. This proves induction preserves monomorphisms, without choosing representatives for any infinite family of cosets. [F1, step 1.1]

3.1 Given an $H$-map $A\to\operatorname{Res}I$ and an $H$-monomorphism $A\hookrightarrow B$, transpose by F2 to a $G$-map $\operatorname{Ind}A\to I$. Extend over the monomorphism $\operatorname{Ind}A\hookrightarrow\operatorname{Ind}B$ by F3, and transpose back. Naturality of the adjunction ensures the resulting $B\to\operatorname{Res}I$ extends the given map. Hence restriction preserves injectives. Restriction preserves exactness because it changes no groups or maps, so the resolution assertion follows degree by degree. Zero modules and $H=G$ or $H=1$ are included. [F1, F2, F3, step 2.1] ∎
