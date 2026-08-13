---
id: cor-hom-functors-are-continuous-and-send-colimits-to-limits
kind: corollary
title: "Hom(X,−) is continuous, while Hom(−,X) sends every existing small colimit to a limit of sets"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-representable-functors-preserve-small-limits, def-hom-functors-and-hom-bifunctor, prop-limit-colimit-duality, def-preservation-reflection-creation-continuity-and-cocontinuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct-corollary
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Theorems 3.5.5 and 3.5.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

For every object $X$ of a locally small category $\mathcal C$,
$\mathcal C(X,-):\mathcal C\to\mathbf{Set}$ preserves all small limits that
exist. Moreover, for every small diagram $D$ with a colimit, there is a natural
bijection

$$\mathcal C(\operatorname*{colim}D,X) \cong\lim_{j\in\mathcal J^{\mathrm{op}}}\mathcal C(D(j),X).$$

## Facts & Assumptions

**Given:** An object $X$ and the indicated existing limits or colimits.

[L1] Every covariantly representable functor preserves small limits
([[thm-representable-functors-preserve-small-limits]]).

[F1] $\mathcal C(X,-)$ and $\mathcal C(-,X)$ are the covariant and
contravariant hom-functors ([[def-hom-functors-and-hom-bifunctor]]).

[L2] A colimit in $\mathcal C$ is a limit in $\mathcal C^{\mathrm{op}}$
([[prop-limit-colimit-duality]]).

[F2] Continuous means preserving all small limits
([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

## Proof

**Proof technique:** direct corollary.

1.1 The functor $\mathcal C(X,-)$ is represented by $X$, so [L1] says that it preserves every small existing limit. By [F2], it is continuous whenever the term is applied to the available small limits of its domain. [L1, F1, F2]

1.2 Regard a colimit cocone $D(j)\to Q$ as a limiting cone in $\mathcal C^{\mathrm{op}}$ by [L2]. Applying [L1] there to the representable $\mathcal C^{\mathrm{op}}(X,-)=\mathcal C(-,X)$ gives the displayed limit of hom-sets. [L1, F1, L2]

2.1 Explicitly, the bijection sends $f:Q\to X$ to the compatible family of composites $D(j)\to Q\to X$; the colimit existence and uniqueness clauses give its inverse and prove uniqueness. [step 1.2] ∎
