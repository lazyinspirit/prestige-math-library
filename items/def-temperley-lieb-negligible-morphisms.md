---
id: def-temperley-lieb-negligible-morphisms
kind: definition
title: "Negligible morphisms in the Temperley–Lieb category"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-temperley-lieb-diagram-category
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Joshua Chen, The Temperley-Lieb Categories and Skein Modules"
      url: "https://arxiv.org/pdf/1502.06845"
      locator: "§§5.1–5.4, PDF pp. 60–65: categorical trace, negligible morphisms, tensor ideals, and root-of-unity quotient."
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§§1–2, printed pp. 2–5: closure trace and its radical quotient in the stated nonzero-parameter range."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Work over $\mathbb C$ with a fixed loop parameter $\delta$. Let $\mathcal T_\delta$ be the strict Temperley–Lieb diagram category of [[def-temperley-lieb-diagram-category]]: its objects are $n\in\mathbb N$, and its morphism space $\operatorname{Hom}_{\mathcal T_\delta}(m,n)$ is the complex span of the noncrossing matching diagrams with $m$ bottom and $n$ top boundary points, composed by stacking and loop removal.

For a basis endomorphism $D:n\to n$, let $c(D)$ be the number of components after joining each top point to the corresponding bottom point outside the rectangle. Define the unnormalized closure trace by
$$\operatorname{Tr}_n(D)=\delta^{c(D)},$$
and extend linearly. This definition is valid for every $\delta\in\mathbb C$, including $\delta=0$.

For $m,n\in\mathbb N$, the subspace of **negligible morphisms** is
$$\mathcal N_\delta(m,n)= \{f\in\operatorname{Hom}_{\mathcal T_\delta}(m,n): \operatorname{Tr}_m(g\circ f)=0\text{ for every }g\in\operatorname{Hom}_{\mathcal T_\delta}(n,m)\}.$$
This definition specifies subspaces only. Their closure under composition and tensor product, and hence the quotient category, are supplied separately.
