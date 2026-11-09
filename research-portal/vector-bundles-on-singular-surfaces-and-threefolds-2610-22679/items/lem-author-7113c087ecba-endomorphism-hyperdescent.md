---
id: lem-author-7113c087ecba-endomorphism-hyperdescent
kind: lemma
title: From constructible-category hyperdescent to the actual cohomology complex
status: draft
domain: mathematics
deps:
  - thm-author-7113c087ecba-arc-input
dependency_roles:
  thm-author-7113c087ecba-arc-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 1
---

## Statement
Let $\Lambda$ be a finite commutative ring. The complex-valued functor $E_\Lambda(X)=R\Gamma_{\mathrm{et}}(X,\underline\Lambda)$ on all qcqs schemes satisfies hyperdescent for arc hypercovers, with its actual derived pullback maps. The constant sheaf is an ordinary degree-zero sheaf; no invertibility of its order on $X$ is required.

## Facts & Assumptions
**Given:** The hypotheses in the statement.

**Goal:** Establish the stated exact map or descent conclusion.

[F1] [[thm-author-7113c087ecba-arc-input]] imports BM Theorem5.13, with the exact finite-ring and constructible-category conventions.

## Proof
1.1 Let $\mathcal D_X=D^b_{\mathrm{cons}}(X_{\mathrm{et}},\Lambda)$. Its unit object $\underline\Lambda_X$ is bounded constructible, and its pullback along every morphism is the corresponding unit. Input [F1] gives the actual equivalence $\mathcal D_X\simeq\lim_\Delta\mathcal D_{U_\bullet}$ for every arc hypercover. Under it the constant unit and all its shifts are the corresponding compatible systems. [F1]

2.1 Mapping spaces between compatible objects in a limit of infinity-categories are the limits of their mapping spaces. Apply this to the unit and every shift of the unit. The derived endomorphism spectrum of the unit is $R\operatorname{Hom}_{X_{\mathrm{et}},\Lambda}(\underline\Lambda_X,\underline\Lambda_X)=R\Gamma_{\mathrm{et}}(X,\underline\Lambda_X)$, because internal Hom from the free rank-one coefficient sheaf is the identity. These mapping-space comparisons in all shifts give the equivalence of the entire endomorphism complex with the hypercover totalization. The equivalence retains the coefficient action and actual pullbacks. This is hyperdescent of the specified complex, not just isomorphisms of its groups. [F1, step 1.1] ∎
