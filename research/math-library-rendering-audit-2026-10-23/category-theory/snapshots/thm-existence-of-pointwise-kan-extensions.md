---
id: thm-existence-of-pointwise-kan-extensions
kind: theorem
title: "Pointwise Kan extensions exist under smallness and completeness hypotheses"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-pointwise-kan-extension-by-the-comma-category-formula, thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions, def-small-locally-small-and-large-category, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-comma-slice-and-coslice-categories]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Corollary 6.2.9"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, §§4.1-4.2"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $K:\mathcal C\to\mathcal D$ and $F:\mathcal C\to\mathcal E$ be functors.

If $\mathcal C$ is small, $\mathcal D$ locally small, and $\mathcal E$
cocomplete, then for every $d\in\mathcal D$ the comma category $(K\downarrow d)$
is small and the pointwise left Kan extension value at $d$ exists.

If $\mathcal C$ is small, $\mathcal D$ locally small, and $\mathcal E$
complete, then for every $d\in\mathcal D$ the comma category $(d\downarrow K)$
is small and the pointwise right Kan extension value at $d$ exists.

These are objectwise existence statements. A global functor
$\operatorname{Lan}_KF$ or $\operatorname{Ran}_KF$ is obtained only when the
corresponding colimits or limits are supplied, with chosen universal cones, for
every $d$.

## Facts & Assumptions

**Given:** Functors $K:\mathcal C\to\mathcal D$ and $F:\mathcal C\to\mathcal E$ with $\mathcal C$ small and $\mathcal D$ locally small.

[F1] A category is small when its objects and morphisms form sets, and locally small when every hom-collection is a set ([[def-small-locally-small-and-large-category]]).

[F2] A category is cocomplete when it has all small colimits and complete when it has all small limits ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[L1] For each object $d$, the comma-category colimit over $(K\downarrow d)$ computes the pointwise left Kan extension value, and the comma-category limit over $(d\downarrow K)$ computes the pointwise right Kan extension value ([[thm-the-comma-category-limit-and-colimit-formulae-compute-kan-extensions]], [[def-pointwise-kan-extension-by-the-comma-category-formula]]).

## Proof

**Proof technique:** direct.

1.1 Because $\mathcal C$ is small and $\mathcal D$ is locally small, the objects of $(K\downarrow d)$ form a set: they are pairs $(c,u)$ with $c\in\mathcal C$ and $u\in\mathcal D(Kc,d)$, and both pieces are set-sized by [F1]. Its morphisms are arrows of $\mathcal C$ satisfying one extra equation, so they also form a set. The same argument applies to $(d\downarrow K)$. Thus both comma categories are small. [F1]

2.1 If $\mathcal E$ is cocomplete, then every small diagram in $\mathcal E$ has a colimit by [F2], so the diagram from $(K\downarrow d)$ into $\mathcal E$ has a colimit for each $d$; by [L1] that colimit is the pointwise left Kan extension value at $d$. Dually, if $\mathcal E$ is complete, then every diagram from $(d\downarrow K)$ into $\mathcal E$ has a limit, and [L1] makes it the pointwise right Kan extension value at $d$. [F2, L1, step 1.1]

3.1 The values obtained in step 2.1 exist objectwise. A global pointwise Kan extension functor requires, in addition, that these colimits or limits and their universal cones be supplied for every $d$, because that is the data used in [L1] to assemble the arrow maps of $\operatorname{Lan}_KF$ or $\operatorname{Ran}_KF$. [L1, step 2.1] ∎
