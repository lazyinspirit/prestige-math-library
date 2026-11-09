---
id: lem-author-0bac6b264f4a-motivic-dim-general-interface
kind: lemma
title: Prime-field evaluation and compatibility with the standing theory
status: draft
domain: mathematics
deps:
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - def-motivic-cohomology
  - lem-author-b747b28c359f-derived-cohomology
  - thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input
dependency_roles:
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  lem-author-b747b28c359f-derived-cohomology: mathematical-premise
  thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 9
---

## Statement
For any prime field $F\in\{\mathbb Q,\mathbb F_p\}$ and $j\geq0$, define the general EM groups on qcqs $F$-schemes by
$$\widehat H^{i,j}_{F}(X,\mathbb Z)=H^i(M_{j,F}(X)).$$
For a field $k$ with prime subfield $F$, restriction of this interface to qcqs $k$-schemes is exactly the standing $H^{i,j}_{\mathrm{mot}}$ functor, including its pullbacks. Thus the same notation can be used for the general prime-field evaluation and its fixed-field restriction. Write $F_{j,F}$ for the actual fiber of the natural map $M_{j,F}\to C_{j,F}$, with fiber sequence $F_{j,F}(X)\to M_{j,F}(X)\to C_{j,F}(X)$ at every $X$.

## Facts & Assumptions
**Given:** The completed prime-field motivic sheaves, the standing fixed-field definition and their actual comparison to cdh motivic complexes.

**Goal:** Define the larger-scope interface without substituting a different motivic theory.

[F1] [[lem-author-b747b28c359f-elmanto-morrow-complexes]] supplies $M_{j,F}$ for every prime field and explicitly obtains the $k$-scheme functor by restriction along forgetting $k$ to $F$.

[F2] [[def-motivic-cohomology]] defines its groups by objectwise cohomology of exactly that restricted functor; [[lem-author-b747b28c359f-derived-cohomology]] supplies functoriality on $D(\mathbb Z)$.

[F3] [[thm-author-0bac6b264f4a-motivic-dim-cdh-interface-input]] supplies the actual natural map $\alpha_{j,F}$ to the specified cdh complex.

## Proof
1.1 Apply cohomology to the actual prime-field functor in [F1]. By [F2] this defines the displayed general groups and their pullbacks. On a qcqs $k$-scheme, forgetting its $k$-structure before evaluation gives precisely the complex used by the standing definition, by its stated construction. The underlying complexes and maps are thus the same restricted diagram, so the groups and pullbacks agree without an independently chosen comparison isomorphism. [F1, F2]

2.1 Take the pointwise derived fiber of [F3]. Limits of functor diagrams are computed objectwise, so it gives an actual presheaf and the stated natural fiber sequence at every $X$. On restriction to $k$-schemes this is the same sequence, again by precomposition. Empty schemes give zero complexes by empty-cover Nisnevich descent. The weight range is exactly $j\geq0$ as in [F1]. [F1, F2, F3, step 1.1] ∎
