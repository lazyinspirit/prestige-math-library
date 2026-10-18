---
id: def-temperley-lieb-complex-critical-labels-and-reflection
kind: definition
title: "Complex Temperley–Lieb critical labels and reflection"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§4, Corollary 4.8, and §5, Proposition 5.3, PDF pp. 20–22: criticality, root order, and reflected labels."
    - title: "Frederick M. Goodman and Hans Wenzl, The Temperley-Lieb Algebra at Roots of Unity"
      url: "https://msp.org/pjm/1993/161-2/pjm-v161-n2-p05-s.pdf"
      locator: "§§2–4, printed pp. 309–323: root-order conventions, critical labels, and affine-reflection blocks for order greater than three."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $q\in\mathbb C^\times$. Define $\kappa=\operatorname{ord}(q^2)$ if $q^2$ has finite multiplicative order, and $\kappa=\infty$ otherwise. For integers $n\ge0$ and $p$ with $0\le p\le\lfloor n/2\rfloor$, set the defect label $t=n-2p$; here $p$ counts arcs and $t$ counts defects. The pair $(n,p)$ is **critical** at $q$ when $\kappa<\infty$ and $\kappa\mid(t+1)$, equivalently $q^{2(t+1)}=1$. If $\kappa=\infty$, no pair is critical. When $\kappa=1$ every allowed pair is critical.

For finite $\kappa\ge2$ and a noncritical pair, write uniquely
$$t+1=k\kappa+r,\qquad k\ge0,\quad 1\le r<\kappa.$$
Its reflection label across the next critical line is
$$p^\sharp=p+r-\kappa.$$
This reflected label is called present only when $p^\sharp\ge0$; it then automatically satisfies $p^\sharp\le\lfloor n/2\rfloor$. If $p^\sharp<0$, there is no label in range on that side. A critical label is treated as a singleton under reflection. These are arithmetic label conventions; they do not by themselves assert radical, composition-factor, Hom-space, or projective-cover formulas.

The order $\kappa$ is kept separate from the recurrence quantum characteristic $\ell$ of [[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]. For $q=\pm1$, $\kappa=1$ while the complex recurrence quantum characteristic is $\infty$.
