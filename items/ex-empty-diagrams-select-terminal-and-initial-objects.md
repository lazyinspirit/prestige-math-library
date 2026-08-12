---
id: ex-empty-diagrams-select-terminal-and-initial-objects
kind: example
title: "The singleton set and trivial group are terminal, while the empty set and trivial group are initial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-empty-limits-and-colimits-are-terminal-and-initial-objects, prop-sets-and-functions-form-category-set, prop-groups-and-homomorphisms-form-category-grp]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Example 3.1.14"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Example

In $\mathbf{Set}$ the empty-diagram limit is any singleton and its colimit is
$\varnothing$. In $\mathbf{Grp}$ both are the trivial group.

## Facts & Assumptions

**Given:** The empty diagrams in $\mathbf{Set}$ and $\mathbf{Grp}$.

[L1] Empty-diagram limits are terminal objects and empty-diagram colimits are
initial objects
([[prop-empty-limits-and-colimits-are-terminal-and-initial-objects]]).

[F1] Sets and functions form $\mathbf{Set}$
([[prop-sets-and-functions-form-category-set]]).

[F2] Groups and homomorphisms form $\mathbf{Grp}$
([[prop-groups-and-homomorphisms-form-category-grp]]).

## Verification

**Proof technique:** direct.

1.1 For every set $X$, exactly one function $X\to\{*\}$ and exactly one function $\varnothing\to X$ exist. Thus the singleton is terminal and the empty set initial in $\mathbf{Set}$. [F1]

1.2 For every group $G$, the constant map $G\to1$ is the unique homomorphism to the trivial group. A homomorphism $1\to G$ must send the identity to the identity, so it too is unique. Thus $1$ is both terminal and initial in $\mathbf{Grp}$. [F2]

2.1 Applying [L1] to steps 1.1 and 1.2 gives the four claimed empty-diagram limits and colimits. [L1, step 1.1, step 1.2] ∎
