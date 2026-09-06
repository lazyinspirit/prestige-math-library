---
id: def-lagrange-charpit-characteristic-system
kind: definition
title: "The Lagrange–Charpit characteristic system"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-fully-nonlinear-first-order-pde-and-complete-integral]
justified_by: []
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Part I: Explicit methods — Lecture notes for MA342H"
      url: "https://www.maths.tcd.ie/~pete/pde2/part_1.pdf"
---

## Definition

For $F\in C^2(O)$ on $O\subseteq\mathbb R^n\times\mathbb R\times\mathbb R^n$,
the Lagrange–Charpit system is

$$\dot X=F_p,\qquad \dot Z=P\cdot F_p,\qquad \dot P=-F_x-PF_z,$$

with all derivatives evaluated at $(X,Z,P)$.  The alternative contact
normalization $\dot Z=P\cdot F_p-F$ agrees with this one only along $F=0$;
it is not silently substituted off that constraint.
