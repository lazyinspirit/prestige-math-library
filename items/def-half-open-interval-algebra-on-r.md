---
id: def-half-open-interval-algebra-on-r
kind: definition
title: "The algebra of finite disjoint unions of half-open intervals in $\\mathbb{R}$ with extended endpoints"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebra-of-subsets, def-interval]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 1.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Definition

Call an **h-interval** any interval of one of the four forms

$$(-\infty,b], \qquad (a,b], \qquad (a,\infty), \qquad \mathbb{R},$$

where $a < b$ are real in the bounded case. Let $\mathcal{H}$ be the family of
subsets $E \subseteq \mathbb{R}$ for which there are a natural number $m$ and
pairwise disjoint h-intervals $I_1,\dots,I_m$ such that

$$E = \bigcup_{i=1}^m I_i.$$

The empty set is included as the empty union. This family is called the
**half-open interval algebra on $\mathbb{R}$**.

Every h-interval is an interval in the sense of [[def-interval]], and the
complement in $\mathbb{R}$ of one h-interval is empty, another h-interval, or a
disjoint union of two h-intervals. Intersections of h-intervals are h-intervals
or empty, so finite disjoint unions of h-intervals are closed under complements,
finite unions, and finite intersections. Therefore $\mathcal{H}$ is an algebra
of subsets of $\mathbb{R}$ in the sense of [[def-algebra-of-subsets]].
