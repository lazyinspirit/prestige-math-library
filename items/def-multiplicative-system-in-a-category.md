---
id: "def-multiplicative-system-in-a-category"
kind: "definition"
title: "Multiplicative system in a category"
deps: ["def-category", "rem-category-theory-class-and-size-conventions"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.3.1–10.3.14, pp. 379–384"
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

Let $\mathcal C$ be a locally small category, using the definable-class convention of [[rem-category-theory-class-and-size-conventions]]. A **two-sided multiplicative system** $S$ is a class of arrows satisfying:

1. Every $1_X$ belongs to $S$, and composites of composable members belong to $S$.
2. Given $f:U\to Y$ and $t:V\to Y$ in $S$, there exist $a:W\to U$ in $S$ and $b:W\to V$ with $fa=tb$. Dually, given $f:X\to U$ and $s:X\to V$ in $S$, there exist $a:U\to W$ in $S$ and $b:V\to W$ with $af=bs$.
3. For parallel $f,g:X\to Y$, existence of $t:Y\to Z$ in $S$ with $tf=tg$ is equivalent to existence of $s:W\to X$ in $S$ with $fs=gs$.

For the locally small localization construction we additionally require either that $\mathcal C$ is small or that, for each $X$, a set $S_X$ of denominators into $X$ is supplied such that every $s:U\to X$ in $S$ admits $a:V\to U$ with $sa\in S_X$. The map $a$ need not lie in $S$. These size data are separate from the fraction axioms; local smallness of $\mathcal C$ alone is insufficient. Objects and arrows have the types prescribed in [[def-category]].
