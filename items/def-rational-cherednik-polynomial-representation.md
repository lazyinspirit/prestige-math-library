---
id: def-rational-cherednik-polynomial-representation
kind: definition
title: "The polynomial representation of a rational Cherednik algebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-rational-cherednik-standard-module
  - thm-rational-cherednik-standard-module-lies-in-category-o
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Pavel Etingof and Xiaoguang Ma, Lecture Notes on Cherednik Algebras"
      url: "https://arxiv.org/pdf/1001.0432"
      locator: "§3.2, Remark 3.6(3), PDF p. 15; §3.7, PDF p. 18."
    - title: "Victor Ginzburg, Nicolas Guay, Eric Opdam, and Raphael Rouquier, On the category O for rational Cherednik algebras"
      url: "https://arxiv.org/pdf/math/0212036"
      locator: "§3.2, PDF pp. 11–12."
verification:
  precheck: n/a
---

## Definition

Let $\mathbf 1$ be the one-dimensional trivial representation of $W$. The **polynomial representation** is the standard module
$$P_c(W,\mathfrak h):=\Delta_c(\mathbf 1)=H_{1,c}(W,\mathfrak h)\otimes_{\mathbb C[\mathfrak h]\rtimes\mathbb C W}\mathbf 1,$$
where $\mathfrak h$ acts by zero. By PBW its underlying vector space is $\mathbb C[\mathfrak h^*]$, and by [[thm-rational-cherednik-standard-module-lies-in-category-o]] it belongs to $\mathcal O_c(W,\mathfrak h)$.

## Remarks

The explicit differential-reflection action of the generators on $\mathbb C[\mathfrak h^*]$ is verified in [[lem-rational-cherednik-polynomial-representation-dunkl-formula]].
