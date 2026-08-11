---
id: def-bounded-variation-and-total-variation
kind: definition
title: "Bounded variation and total variation on an interval"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-partition-and-refinement, def-finite-sum, lem-finite-sum-laws,
       def-bounded-set, def-complete-ordered-field, lem-sup-unique,
       def-interval, def-abs-value]
justified_by: []
aliases: []
landmark: true
short: "bounded variation"
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Ch. 3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
    - title: "Christopher Heil, Absolute Continuity and the Banach-Zaretsky Theorem"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
pipeline_run: null
---

## Definition

Let $a\le b$ and let $f:[a,b]\to\mathbb R$ ([[def-interval]]). If $a<b$ and
$P=(n,t)$ is a partition of $[a,b]$ ([[def-partition-and-refinement]]), the
**variation of $f$ over $P$** is

$$V(f,P):=\sum_{i<n}|f(t_{i+1})-f(t_i)|.$$

The sum is finite ([[def-finite-sum]], [[lem-finite-sum-laws]]) and nonnegative
([[def-abs-value]]). The set of all such sums is nonempty, since $[a,b]$ has the
partition with point set $\{a,b\}$. The function $f$ has **bounded variation**
on $[a,b]$ when this set of sums is bounded above ([[def-bounded-set]]). In that
case its **total variation** is

$$\operatorname{Var}_{[a,b]}(f):=\sup_P V(f,P).$$

Completeness of $\mathbb R$ gives this supremum and [[lem-sup-unique]] makes it
unique ([[def-complete-ordered-field]]). On a singleton interval, by convention,
$\operatorname{Var}_{[a,a]}(f):=0$; no partition from
[[def-partition-and-refinement]], whose standing hypothesis is $a<b$, is invoked.

