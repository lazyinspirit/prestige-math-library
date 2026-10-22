---
id: def-limit-and-colimit-of-a-diagram
kind: definition
title: "Limits and colimits as terminal cones and initial cocones, with existence and uniqueness in their universal properties"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-constant-diagram-cone-cocone-and-cone-morphism, def-initial-terminal-and-zero-object]
justified_by: []
aliases: [def-limit, def-colimit]
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Definitions 3.1.6 and 3.1.11"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Definition

Let $D:\mathcal J\to\mathcal C$ be a diagram. A **limit** of $D$ is a terminal
object $(L,\lambda)$ of $\operatorname{Cone}(D)$
([[def-constant-diagram-cone-cocone-and-cone-morphism]],
[[def-initial-terminal-and-zero-object]]). It is written

$$L=\lim_{j\in\mathcal J}D(j),\qquad \lambda_j:L\to D(j).$$ Explicitly, for every cone $(X,\xi)$ there exists a unique morphism $u:X\to L$ such that $\lambda_j u=\xi_j$ for every $j$. The diagram **has a limit** when such a cone exists.  A **colimit** of $D$ is an initial object $(Q,\rho)$ of $\operatorname{Cocone}(D)$, written $$Q=\operatorname*{colim}_{j\in\mathcal J}D(j),\qquad \rho_j:D(j)\to Q.$$

Explicitly, for every cocone $(X,\xi)$ there exists a unique morphism
$u:Q\to X$ such that $u\rho_j=\xi_j$ for every $j$. The diagram **has a
colimit** when such a cocone exists.
