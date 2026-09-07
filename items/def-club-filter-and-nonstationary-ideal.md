---
id: def-club-filter-and-nonstationary-ideal
kind: definition
title: "The club filter and nonstationary ideal"
status: published
origin: pipeline
deps: ["thm-small-intersections-of-clubs"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Lietz, Definition 5.7 and Lemma 5.6, pp.40–41"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
    - title: "Vasey, Definitions 14.6 and 14.12; Corollary 14.7, pp.80–81"
      url: https://svasey.com/academic-homepage-may-2020/145a-fall-2019/notes.pdf
---

## Definition

In ZFC, assume $\operatorname{cf}(\theta)>\omega$. The **club filter** is $\mathcal C_\theta=\{A\subseteq\theta:\exists C\subseteq A\ (C\text{ club in }\theta)\}$. A set $S\subseteq\theta$ is **stationary** if it meets every club. It is **nonstationary** if disjoint from some club; these sets form $\mathrm{NS}_\theta$.

A proper filter contains the ambient set, excludes the empty set, is upward closed, and is closed under finite intersections. These hold for $\mathcal C_\theta$: the ambient set is club, clubs are nonempty, and the small-intersection theorem gives a club inside each finite intersection. In fact it is closed under intersections of fewer than $\operatorname{cf}(\theta)$ members: in ZFC choose a witnessing club for each member, then intersect them.

An ideal contains the empty set, is downward closed and closed under finite unions. Here $A\in\mathrm{NS}_\theta$ iff $\theta\setminus A\in\mathcal C_\theta$, so complements give these axioms and closure under unions of fewer than $\operatorname{cf}(\theta)$ members. The filter contains all **supersets of clubs**, which need not themselves be closed.
