---
id: def-homological-double-complex
kind: definition
title: Homological double complex
status: published
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-chain-complex-in-an-abelian-category]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Stacks Project, Definition 12.18.1 (indices and signs translated)"
      url: https://stacks.math.columbia.edu/tag/0FNB
    - title: "Weibel, Chapter 5, Section 5.6"
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
---

## Definition

In an abelian category, a **homological double complex** consists of objects
$C_{p,q}$ for all $(p,q)\in\mathbb Z^2$ and morphisms
$$h_{p,q}:C_{p,q}\longrightarrow C_{p-1,q},\qquad v_{p,q}:C_{p,q}\longrightarrow C_{p,q-1}.$$
For every pair of integers they satisfy
$$h_{p-1,q}h_{p,q}=0,\qquad v_{p,q-1}v_{p,q}=0,\qquad h_{p,q-1}v_{p,q}+v_{p-1,q}h_{p,q}=0.$$
The third equality is in $\operatorname{Hom}(C_{p,q},C_{p-1,q-1})$.
The first two equalities say that every row and every column is a
[[def-chain-complex-in-an-abelian-category|chain complex]]. They are separate
axioms; anticommutation alone does not imply them.

A morphism $f:C\to D$ consists of maps $f_{p,q}:C_{p,q}\to D_{p,q}$ with
$$f_{p-1,q}h^C_{p,q}=h^D_{p,q}f_{p,q},\qquad f_{p,q-1}v^C_{p,q}=v^D_{p,q}f_{p,q}.$$
Identities and composition are componentwise. The complex is **first
quadrant** if $C_{p,q}=0$ whenever $p<0$ or $q<0$.

Zero objects and complexes supported at one bidegree are allowed. Arrows
meeting a zero object are zero, including the outgoing arrows on the axes of
a first-quadrant complex. This definition requires no infinite products,
coproducts, or choices of representatives.
