---
id: def-k-linear-category-and-k-linear-functor
kind: definition
title: "k-linear categories and k-linear functors"
status: draft
origin: pipeline
deps: [def-category, def-vector-space]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Definitions 1.2.2–1.2.3"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Definition

Let $k$ be a field. A **$k$-linear category** is a category $\mathcal C$ for
which every $\operatorname{Hom}_{\mathcal C}(X,Y)$ is a $k$-vector space and
composition is $k$-bilinear. A functor $F:\mathcal C\to\mathcal D$ between
$k$-linear categories is **$k$-linear** if each induced map on hom-spaces is
$k$-linear.
