---
id: def-fully-nonlinear-first-order-pde-and-complete-integral
kind: definition
title: "Fully nonlinear first-order PDEs and complete integrals"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-linear-semilinear-quasilinear-and-fully-nonlinear-pde]
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

Let $F:O\subseteq\mathbb R^n\times\mathbb R\times\mathbb R^n\to\mathbb R$.
A general first-order equation has the form $F(x,u,Du)=0$; it is **fully
nonlinear** when its dependence on the highest-order variable $p=Du$ is not
affine after $(x,u)$ is fixed.  A local complete integral on open sets
$U,A\subseteq\mathbb R^n$ is a $C^2$ family $S:U\times A\to\mathbb R$ such
that
$$ (x,S(x;\alpha),D_xS(x;\alpha))\in O,\qquad F(x,S(x;\alpha),D_xS(x;\alpha))=0,\qquad \det D^2_{x\alpha}S(x;\alpha)\ne0 $$
for every $(x,\alpha)\in U\times A$.  Thus the $n$ parameters enter
essentially rather than merely labelling repeated copies of one solution.  A
stationary envelope is a value $u(x)=S(x;\alpha(x))$ selected by
$S_\alpha(x;\alpha(x))=0$.  This definition asserts neither global
representation nor differentiability of an envelope.
