---
id: def-standard-open-proj
kind: definition
title: "Standard opens of Proj"
status: draft
origin: pipeline
deps:
  - def-proj-graded-ring-points
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Section 27.8 (Tag 01M3)"
      url: https://stacks.math.columbia.edu/tag/01M3
    - title: "Ravi Vakil, The Rising Sea, August 2022 draft, Section 4.5"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Definition

Let $S=\bigoplus_{d\ge0}S_d$ be a commutative nonnegatively graded ring with
projective spectrum $\operatorname{Proj}S$ as in
[[def-proj-graded-ring-points]]. For a homogeneous element $f\in S_+$ of
positive degree set
$$D_+(f)=\{\mathfrak p\in\operatorname{Proj}S: f\notin\mathfrak p\}.$$
These are the **standard opens** of $\operatorname{Proj}S$.

## Remarks

- **Openness.** Since $f$ is homogeneous, $(f)=fS$ is a homogeneous ideal, and
  $V_+((f))=\{\mathfrak p\in\operatorname{Proj}S:f\in\mathfrak p\}$; hence
  $D_+(f)$ is the complement of the closed set $V_+((f))$ and is open. If
  $f,g\in S_+$ are homogeneous then $fg\in S_+$ is homogeneous of positive
  degree and
  $$D_+(f)\cap D_+(g)=D_+(fg),$$
  because a prime $\mathfrak p$ contains $fg$ if and only if it contains $f$ or
  $g$. In particular the standard opens are closed under nonempty finite intersections.
- **Basis.** The family $\{D_+(f)\}_{f\in S_+,\ f\ \text{homogeneous}}$ is a
  basis for the topology of $\operatorname{Proj}S$: every open set is a union
  of standard opens. Indeed let $U=\operatorname{Proj}S\setminus V_+(I)$ be
  open with $I$ homogeneous, and let $\mathfrak p\in U$. Since
  $I\not\subseteq\mathfrak p$ and $\mathfrak p$ is homogeneous, some
  homogeneous $h\in I$ satisfies $h\notin\mathfrak p$; and since
  $\mathfrak p\in\operatorname{Proj}S$ we may choose a homogeneous
  $g\in S_+$ with $g\notin\mathfrak p$. Put $f=gh\in S_+$. Then
  $f\notin\mathfrak p$, so $\mathfrak p\in D_+(f)$; and for any
  $\mathfrak q\in D_+(f)$ one has $h\notin\mathfrak q$ (else $f\in\mathfrak q$)
  with $h\in I$, so $I\not\subseteq\mathfrak q$ and
  $\mathfrak q\in U$. Hence $\mathfrak p\in D_+(f)\subseteq U$. The case
  $U=\varnothing$ is the empty union. The same computation with $h=0$ is never
  needed since $h\notin\mathfrak p$ forces $h\neq0$.
- **Nilpotent generators give nothing.** If $f$ is nilpotent then $f$ lies in
  every prime, hence $D_+(f)=\varnothing$. No converse is asserted here; the
  equivalence between emptiness of $\operatorname{Proj}S$ and nilpotence of the
  irrelevant ideal, under its stated hypothesis, is proved in
  [[lem-proj-irrelevant-and-nilpotent-boundaries]].
