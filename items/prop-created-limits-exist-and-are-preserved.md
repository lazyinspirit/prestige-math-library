---
id: prop-created-limits-exist-and-are-preserved
kind: proposition
title: "A functor that creates limits of a given shape lifts their existence and preserves the created limits, and dually for colimits"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-preservation-reflection-creation-continuity-and-cocontinuity, lem-canonical-comparison-characterises-limit-preservation, prop-limit-colimit-duality]
justified_by: []
aliases: []
landmark: false
proof_strategy: definition
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Definition 3.4.7 and Proposition 3.4.9"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

If $F:\mathcal C\to\mathcal D$ creates limits of shape $\mathcal J$, then for
every $D:\mathcal J\to\mathcal C$ whose image has a limit, $D$ has a limit and
$F$ preserves it. The dual assertion holds for created colimits.

## Facts & Assumptions

**Given:** A functor $F$ creating $\mathcal J$-limits and a diagram $D$ such
that $FD$ has a limit.

[F1] Creation lifts a target limiting cone, up to a cone isomorphism, to a
limiting source cone and includes reflection
([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[L1] Preservation of a chosen limit is equivalent to invertibility of its
canonical comparison ([[lem-canonical-comparison-characterises-limit-preservation]]).

[L2] Creation and preservation of colimits are dual to their limit forms
([[prop-limit-colimit-duality]]).

## Proof

**Proof technique:** unpacking the definition.

1.1 Choose a limiting cone $\mu$ over $FD$. By the existence clause of [F1], there is a limiting cone $\lambda$ over $D$ and a cone isomorphism $F\lambda\cong\mu$. Hence $D$ has a limit. [F1, given]

2.1 The cone isomorphism in step 1.1 is precisely an invertible canonical comparison after identifying its direction by the target universal property. By [L1], $F$ preserves $\lambda$. [L1, step 1.1]

3.1 Because any limiting source cone is uniquely compatibly isomorphic to $\lambda$, its image is also limiting. Thus preservation does not depend on the chosen source limit. [F1, step 1.1, step 2.1]

4.1 Reverse every arrow. By [L2], steps 1.1, 2.1, and 3.1 prove existence and preservation for created colimits. [L2, step 1.1, step 2.1, step 3.1] ∎
