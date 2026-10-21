---
id: def-ip-composite-double-regularization
kind: definition
title: Composite double regularization
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-ip-compact-linear-inverse-model
  - def-compact-spectral-filter-and-qualification
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Christina Brandt and Patrick Horn, Regularisation and Parameter Choice Rules for Composite Linear Inverse Problems, §2.1 and Theorem 1"
      url: "https://arxiv.org/pdf/2610.13483"
      locator: "§2.1, equation (2), and Theorem 1 with its complete proof, printed pp. 2–3; the abstract/body order discrepancy is recorded in batch-6 notes."
    - title: "Christian Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 5, §5.1, printed pp. 44–50; spectral filter reconstruction maps and their domains."
---

## Definition

Let $X,Y,Z$ be real or complex Hilbert spaces over one scalar field, let $F:X\to Y$ and $G:Y\to Z$ be compact linear maps, and set $A:=G\circ F:X\to Z$. For spectral regularization families $R^G_\alpha:Z\to Y$ for $G^\dagger$ and $R^F_\gamma:Y\to X$ for $F^\dagger$, and a parameter rule $(\alpha,\gamma):(0,\infty)\times Z\to(0,\infty)^2$, define $T_\delta(z^\delta):=R^F_{\gamma(\delta,z^\delta)}(R^G_{\alpha(\delta,z^\delta)}z^\delta)$ for $z^\delta\in Z$. The order is fixed by the factorization: first regularize $G$, then $F$; no general identity $A^\dagger=F^\dagger G^\dagger$ is part of this definition.

## Definition references

[[def-ip-compact-linear-inverse-model|Compact Hilbert inverse model]]

[[def-compact-spectral-filter-and-qualification|Compact spectral filters and source conditions]]

[Brandt and Horn, §2.1 and Theorem 1, pp. 2–3](https://arxiv.org/pdf/2610.13483)

[Clason, Chapter 5, §5.1, pp. 44–50](https://arxiv.org/pdf/2001.00617)

## Composite operator diagram

The upper row is the forward map: applying $F$ and then $G$ gives $A=G\circ F$. The lower row shows the estimator's domains and codomains: data in $Z$ first pass through $R^G_\alpha$ to $Y$, then through $R^F_\gamma$ to $X$. Read that row from right to left; the diagram omits the parameter rule's dependence on $\delta$ and $z^\delta$.

```tikzcd
X \arrow[r, "F"] \arrow[rr, bend right=20, "A=G\circ F"'] & Y \arrow[r, "G"] & Z \\
X & Y \arrow[l, "R^F_\gamma"'] & Z \arrow[l, "R^G_\alpha"']
```

For noisy data $z^\delta$, the lower row is $z^\delta \mapsto R^G_\alpha z^\delta \mapsto R^F_\gamma R^G_\alpha z^\delta$. The diagram records these domains and orders only; no proof about convergence or pseudoinverses relies on it.
