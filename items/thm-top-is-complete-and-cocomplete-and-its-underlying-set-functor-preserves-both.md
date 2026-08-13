---
id: thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both
kind: theorem
title: "Top is complete and cocomplete, and its underlying-set functor preserves all small limits and colimits"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-set-has-all-small-limits, thm-set-has-all-small-colimits, prop-topological-spaces-and-continuous-maps-form-category-top, def-initial-and-final-topology, thm-initial-and-final-characteristic-properties, def-continuous-map-top, def-preservation-reflection-creation-continuity-and-cocontinuity]
justified_by: []
aliases: []
landmark: true
proof_strategy: lift-set-constructions
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Proposition 3.6.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

The category $\mathbf{Top}$ has all small limits and colimits. The underlying
set functor $U:\mathbf{Top}\to\mathbf{Set}$ preserves every small limit and
every small colimit.

## Facts & Assumptions

**Given:** A small diagram $D:\mathcal J\to\mathbf{Top}$.

[L1] The underlying Set-diagram has a limit and a colimit
([[thm-set-has-all-small-limits]], [[thm-set-has-all-small-colimits]]).

[F1] Topological spaces and continuous maps form $\mathbf{Top}$
([[prop-topological-spaces-and-continuous-maps-form-category-top]]).

[F2] For the initial topology of a family $(f_i:X\to Y_i)$, a function
$h:Z\to X$ is continuous exactly when every $f_i\circ h$ is continuous; dually,
for the final topology of a family $(g_i:Y_i\to X)$, a function $h:X\to Z$ is
continuous exactly when every $h\circ g_i$ is continuous
([[thm-initial-and-final-characteristic-properties]], claims 2 and 4). The
topologies themselves are constructed in [[def-initial-and-final-topology]],
which states these characteristic properties are proved separately.

[F3] Continuity means inverse images of open sets are open
([[def-continuous-map-top]]).

[F4] Preservation means that the image of a limiting or colimiting cone is
again limiting or colimiting
([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

## Proof

**Proof technique:** lift the Set constructions by universal topologies.

1.1 Let $(L,p_j)$ be the Set-limit of $UD$ from [L1]. Give $L$ the initial topology induced by all $p_j:L\to U(D(j))$. Then every $p_j$ is continuous and the Set cone equations make it a cone in $\mathbf{Top}$. [L1, F1, F2]

1.2 Let $(Q,i_j)$ be the Set-colimit of $UD$ and give $Q$ the final topology induced by all $i_j:U(D(j))\to Q$. A function $f:Q\to X$ is continuous exactly when every $fi_j$ is continuous. Set-universality therefore proves existence and uniqueness of the continuous factor for every Top-cocone. Thus $Q$ is a Top-colimit. [L1, F2, F3]

2.1 For a cone of continuous maps $f_j:X\to D(j)$, Set-universality gives a unique function $f:X\to L$ with $p_jf=f_j$. By the characteristic property in [F2], $f$ is continuous exactly because all $p_jf$ are continuous. Its uniqueness as a continuous map follows from uniqueness as a function. Hence this is a Top-limit. [L1, F2, F3, step 1.1]

3.1 In steps 1.1 and 1.2 the underlying sets, legs, and mediating functions are exactly the Set-limit and Set-colimit data. Applying $U$ removes only the topologies, so both canonical comparisons are identity bijections. By [F4], $U$ preserves all the small limits and colimits. [F4, step 1.1, step 2.1, step 1.2] ∎
