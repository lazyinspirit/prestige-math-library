---
id: lem-normal-proper-torsor-geometric-injection
kind: lemma
title: "Geometric generic injection for torsors on normal trait models"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $S$ be a complete discrete valuation trait with algebraically closed residue field $k$, generic field $K$, and specified separable closure $K^s$. Let $X\to S$ be an integral, flat, proper scheme of finite presentation, and let $G$ be a specified finite abelian constant group. Assume explicitly that for every finite subextension $K'/K$, the base change $X_{S'}$ to the valuation ring $S'$ of $K'$ is integral and normal. If two finite étale $G$-torsors on $X$ become isomorphic on $X_{K^s}$, their restrictions to the special fibre $X_k$ are isomorphic. Consequently any family of torsors on $X$ whose special-fibre classes are pairwise distinct gives pairwise distinct $G$-torsor classes on $X_{K^s}$, all fixed by $\operatorname{Gal}(K^s/K)$. The normality of the finite-base-change models is an explicit hypothesis, not proved by this lemma.

## Facts & Assumptions

**Given:** The trait, specified separable closure, proper flat model, finite group and explicit normality hypotheses in the Statement.

## Proof

1.1 Let $T_1,T_2$ be the two torsors and let $P=\operatorname{Isom}_G(T_1,T_2)$. Étale locally both torsors are trivial, so $P$ is a finite étale $G$-torsor over $X$. An isomorphism over $X_{K^s}$ is a section of $P$ there. Because $X_K$ is quasicompact and $P\to X$ is finitely presented, that section descends to $X_{K'}$ for one finite subextension $K'/K$: take a finite affine cover, descend the finitely many algebra-map coefficients and identities to finite stages, and pass to one common finite stage where the finitely many overlap equalities hold. [given, construct, algebra]

2.1 Let $S'$ be the valuation ring of $K'$ and put $X'=X_{S'}$. The descended section gives a section over the generic point of the integral normal scheme $X'$. On an affine open $\operatorname{Spec}A\subset X'$ with $P=\operatorname{Spec}B$, every $b\in B$ is integral over $A$, and the generic section sends it into $\operatorname{Frac}(A)$. Its image is integral over $A$ and therefore belongs to $A$ by normality. This gives an $A$-algebra map $B\to A$ extending the generic section. On overlaps the extensions agree because they agree in the common function field, so they glue uniquely to a section over $X'$. [given, step 1.1, algebra]

3.1 The residue field of $S'$ is $k$, since it is finite over algebraically closed $k$. Restricting the section of step 2.1 to the closed fibre gives an isomorphism between $T_1|_{X_k}$ and $T_2|_{X_k}$. Hence distinct special-fibre classes remain distinct over $X_{K^s}$. Every torsor on $X$ is defined over $K$, so pullback along any automorphism of $K^s/K$ fixes its geometric generic class. [step 1.1, step 2.1, algebra] ∎
