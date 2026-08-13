---
id: lem-canonical-comparison-characterises-limit-preservation
kind: lemma
title: "A functor preserves a chosen limit exactly when its canonical comparison to the chosen target limit is an isomorphism, and dually for colimits"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-preservation-reflection-creation-continuity-and-cocontinuity, thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism, prop-limit-colimit-duality]
justified_by: []
aliases: []
landmark: false
proof_strategy: biconditional
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Definition 3.4.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

Let $(L,\lambda)$ be a chosen limit of $D:\mathcal J\to\mathcal C$, and let
$(M,\mu)$ be a chosen limit of $FD$ in $\mathcal D$. There is a unique
**canonical comparison** $c:F(L)\to M$ satisfying
$\mu_jc=F(\lambda_j)$. The functor $F$ preserves this limit if and only if $c$
is an isomorphism. Dually, the canonical map from a chosen colimit of $FD$ to
the image of a chosen colimit of $D$ is an isomorphism exactly when that
colimit is preserved.

## Facts & Assumptions

**Given:** The two chosen limiting cones in the statement.

[F1] Preservation means that the image of the source limiting cone is limiting
([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[L1] Two limits of one diagram have a unique compatible isomorphism
([[thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism]]).

[L2] Limits and colimits are formal duals ([[prop-limit-colimit-duality]]).

## Proof

**Proof technique:** biconditional.

1.1 The family $F(\lambda_j)$ is a cone over $FD$, so the universal property of $(M,\mu)$ gives a unique $c:F(L)\to M$ with $\mu_jc=F(\lambda_j)$. [given]

2.1 If $F$ preserves the limit, [F1] makes $(F(L),F\lambda)$ another limit of $FD$. By [L1], its unique compatible map $c$ to $(M,\mu)$ is an isomorphism. [F1, L1, step 1.1]

2.2 Conversely, suppose $c$ is an isomorphism. For any cone $\xi$ over $FD$, its unique factor $h:X\to M$ through $\mu$ yields $c^{-1}h:X\to F(L)$, and $F(\lambda_j)c^{-1}h=\mu_jh=\xi_j$. [given, step 1.1]

3.1 If $r:X\to F(L)$ has these equations, then $cr$ factors $\xi$ through $\mu$, so $cr=h$ and $r=c^{-1}h$. Thus $F\lambda$ is limiting, and [F1] says that $F$ preserves this limit. [F1, step 2.2]

4.1 Reversing arrows in steps 1.1, 2.1, 2.2, and 3.1 by [L2] gives the colimit comparison and proves both directions of its criterion. [L2, step 1.1, step 2.1, step 2.2, step 3.1] ∎
