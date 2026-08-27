---
id: def-labelled-classes-and-basic-labelled-constructions
kind: definition
title: "Labelled classes, labelled product, and the constructions $\\operatorname{SEQ}$, $\\operatorname{SET}$, $\\operatorname{CYC}$, and boxed product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-combinatorial-class-and-ordinary-generating-function]
aliases: []
landmark: false
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics — Symbolic Combinatorics"
      url: "https://algo.inria.fr/flajolet/Publications/FlSe02.pdf"
    - title: "Herbert S. Wilf, generatingfunctionology, 2nd ed., §2.3 and ch. 3"
      url: "https://www2.math.upenn.edu/~wilf/gfologyLinked2.pdf"
pipeline_run: null
---

## Definition

A **labelled class** $\mathcal{A}$ assigns to each finite label set $L$ a finite
set $\mathcal{A}[L]$ of $\mathcal{A}$-structures carried by $L$, together with
transport along bijections of label sets. Write

$$a_n:=|\mathcal{A}[ [n] ]|,$$

so the exponential generating function of $\mathcal{A}$ is
$A(x)=\sum_{n\geq0}a_nx^n/n!$.

If $\mathcal{A}$ and $\mathcal{B}$ are labelled classes, their
**labelled product** $\mathcal{A}\star\mathcal{B}$ on a label set $L$ consists
of triples $(S,\alpha,\beta)$ where $S\subseteq L$, $\alpha\in\mathcal{A}[S]$,
and $\beta\in\mathcal{B}[L\setminus S]$. Thus the labels are split into two
disjoint parts, one carrying the $\mathcal{A}$-object and the other the
$\mathcal{B}$-object.

For a labelled class $\mathcal{A}$:

- $\operatorname{SEQ}(\mathcal{A})$ is the class of finite ordered lists of
  pairwise disjoint $\mathcal{A}$-objects whose label sets partition the
  ambient label set;
- $\operatorname{SET}(\mathcal{A})$ is the class of finite unordered sets of
  pairwise disjoint $\mathcal{A}$-objects whose label sets partition the ambient
  label set;
- $\operatorname{CYC}(\mathcal{A})$ is the class of finite cyclic arrangements
  of pairwise disjoint $\mathcal{A}$-objects whose label sets partition the
  ambient label set; and
- the **boxed product** $\mathcal{A}^{\square}\star\mathcal{B}$ is the subclass
  of $\mathcal{A}\star\mathcal{B}$ in which the smallest label belongs to the
  $\mathcal{A}$-part.

All four constructions keep the source convention that labels are distinct and
their union is the ambient finite label set.

As with the ordinary sequence construction, these formal labelled
constructions need not define labelled classes in the finiteness sense when
$\mathcal{A}[\varnothing]$ is nonempty. The translation theorem below therefore
imposes the zero-constant-coefficient hypothesis exactly where it is needed.
