---
id: rem-commuting-versus-anticommuting-double-complex-conventions
kind: remark
title: Commuting versus anticommuting double complex conventions
status: draft
origin: pipeline
pipeline_run: phase-2-next-20
deps: [def-homological-double-complex]
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
    - title: "Stacks Project, Definitions 12.18.1 and 12.18.3"
      url: https://stacks.math.columbia.edu/tag/0FNB
---

## Conventions

Suppose horizontal and vertical homological arrows $h,v$ separately square
to zero and satisfy the commuting convention $hv=vh$. Define
$\widetilde v_{p,q}=(-1)^p v_{p,q}$, leaving $h$ unchanged. On $C_{p,q}$ the
two mixed composites have sum
$$h_{p,q-1}\widetilde v_{p,q}+\widetilde v_{p-1,q}h_{p,q}=(-1)^p h_{p,q-1}v_{p,q}+(-1)^{p-1}v_{p-1,q}h_{p,q}=0.$$
Also $\widetilde v_{p,q-1}\widetilde v_{p,q}=(-1)^{2p}v_{p,q-1}v_{p,q}=0$.
Thus $(C,h,\widetilde v)$ satisfies [[def-homological-double-complex]].

Applying the same twist twice restores $v$. Starting with anticommuting
arrows instead, the same calculation gives commuting twisted arrows.
Bidegree-preserving morphisms commute with the twist because their source
and target have the same $p$. Zero arrows and characteristic two cause no
exception: an additive inverse and its original still sum to zero.

Consequently the expression for the total differential is $h+(-1)^pv$ in
the commuting convention and $h+\widetilde v$ after translation. The library
starts with anticommuting arrows, so its total differential is simply $h+v$.
An additional sign twist on those arrows would change the convention again.
All signs are specified integers; no selection or infinite summation occurs.
