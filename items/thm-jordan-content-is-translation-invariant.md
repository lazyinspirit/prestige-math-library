---
id: thm-jordan-content-is-translation-invariant
kind: theorem
title: "Jordan inner content, outer content, measurability, and content are translation invariant"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-translation-of-a-set-in-rn, def-jordan-inner-and-outer-content, def-multidimensional-rectangle-and-volume]
justified_by: []
aliases: []
landmark: true
short: "Jordan content is translation invariant"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, §3.1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
    - title: "W. F. Trench, Introduction to Real Analysis, §7.3"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_REAL_ANALYSIS.PDF"
pipeline_run: null
---

## Statement

Let $n\ge1$. For every bounded $E\subseteq\mathbb R^n$ and every $a\in\mathbb R^n$, the translates $E+a$ and $E$ have equal Jordan inner and outer contents. Consequently, $E$ is Jordan measurable if and only if $E+a$ is Jordan measurable, and in that case

$$\operatorname{cont}(E+a)=\operatorname{cont}(E).$$

Here translation is as in [[def-translation-of-a-set-in-rn]].

## Facts & Assumptions

**Given:** A natural $n\ge1$, a bounded set $E\subseteq\mathbb R^n$, and a vector $a\in\mathbb R^n$.

[L1] For a bounded set, Jordan outer content is the infimum of the total volumes of finite axis-parallel rectangle covers, and Jordan inner content is the supremum of the total volumes of finite interior-disjoint axis-parallel rectangle families contained in the set ([[def-jordan-inner-and-outer-content]]).

[L2] A rectangle $[u,v]\subseteq\mathbb R^n$ has volume $\prod_{j<n}(v_j-u_j)$ ([[def-multidimensional-rectangle-and-volume]]).

[L3] The translate of $E$ by $a$ is $E+a=\{x+a:x\in E\}$, and translation by $a$ is a bijection with inverse translation by $-a$ ([[def-translation-of-a-set-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 Translation by $a$ sends every axis-parallel rectangle $[u,v]$ bijectively to $[u+a,v+a]$, preserves all side lengths and volumes by [L2], preserves containment and interior-disjointness, and sends finite covers or inner families for $E$ to families of the same total volume for $E+a$; this also covers the empty family, the empty set, and rectangles with zero side length. [L1, L2, L3]

2.1 Step 1.1 gives outer content of $E+a$ at most that of $E$ and inner content of $E+a$ at least that of $E$; applying the same argument to translation by $-a$ gives the reverse inequalities, so both respective contents are equal. [step 1.1, L1]

3.1 Equality of the two contents for $E$ is therefore equivalent to equality of the two contents for $E+a$, and when these equalities hold their common values agree. [step 2.1, L1] ∎
