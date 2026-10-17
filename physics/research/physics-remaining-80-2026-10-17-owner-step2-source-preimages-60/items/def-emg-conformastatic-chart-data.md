---
id: def-emg-conformastatic-chart-data
kind: definition
title: "Positive-scalar conformastatic chart data"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - thm-real-power-continuity-and-derivatives
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
dependency_roles:
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
justified_by: [lem-emg-conformastatic-chart-is-lorentzian]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3, equations (3.65)–(3.67), printed pp. 75–76 (PDF pp. 82–83); equations (3.90), (3.92), (3.95), printed pp. 81–82 (PDF pp. 88–89)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "General coordinate curvature convention and the Ricci, scalar, and Einstein contractions; the local C3 coordinate argument is supplied on this page."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, Michaelmas 2019, §§3.2.2 and 3.4.1, equations (3.14)–(3.16), printed pp. 105–108 and 130–131 (PDF pp. 112–115 and 137–138)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Independent coordinate-curvature and Ricci/Einstein-contraction treatment; the local C3 coordinate argument is supplied on this page."
    - title: "Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3 (2011), §2, equations (1)–(7), PDF pp. 2–3"
      url: "https://arxiv.org/pdf/1105.3807"
      locator: "The Papapetrou–Majumdar conformastatic ansatz and its selected matter equations; the source uses c=G=1 and Gaussian electromagnetic units, which are not used as proof conventions here."
verification:
  precheck: n/a
---

## Definition

Let $D\subseteq\mathbb R^3$ be open and let $H:D\to(0,\infty)$ be of class $C^3$, meaning that every partial derivative of total order at most three exists and is continuous. Set $\mathcal M:=\mathbb R_{x^0}\times D$, an open subset of $\mathbb R^4$, with global coordinates $(x^0,x^1,x^2,x^3)$; each coordinate is assigned length units, with $x^0=ct$ when a time coordinate is wanted. The function $H$ depends only on $(x^1,x^2,x^3)$ and is dimensionless.

Give $\mathcal M$ the coordinate orientation determined by $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$. Put $N_H:=H\partial_0$ and choose the time orientation whose future cone contains $N_H$; the lemma below proves that $N_H$ is timelike for the tensor defined here.

Define the symmetric coordinate tensor $g_H$ by
$$g_H=-H^{-2}(dx^0)^2+H^2\sum_{i=1}^3(dx^i)^2,$$
where $H^{-1}:=1/H$ and $H^{-2}:=(1/H)^2$. This exact coordinate form is called the positive-scalar conformastatic chart tensor in this item; no field equation or physical solution property is part of the definition.

Because $H>0$, the functions $H^{-1}$ and $H^{-2}$ are compositions and products of $H$ with positive-base powers of exponents $-1$ and $-2$. The derivative formula for these powers, repeated through any finite order, and closure of $C^k$ functions under composition and finite products show that the displayed coefficients are $C^3$ when $H$ is $C^3$, and smooth when $H$ is smooth.

For later component formulas define $H_i:=\partial_iH$, $H_{ij}:=\partial_i\partial_jH$, $q:=\sum_{i=1}^3H_i^2$, and $\Delta H:=\sum_{i=1}^3H_{ii}$.

## Remarks

The tensor coefficients are $C^3$ by the stated regularity and positivity of $H$. Its nondegeneracy, Lorentzian signature, and the timelike property needed for the chosen time orientation are proved by [[lem-emg-conformastatic-chart-is-lorentzian]]; this definition alone does not assert them.
