---
id: def-right-group-ring-action-on-the-chains-of-a-universal-cover
kind: definition
title: Right action on universal-cover chains
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-universal-covering-space, thm-universal-cover-existence, thm-deck-group-of-a-universal-cover-is-the-fundamental-group, def-group-ring, thm-group-ring-is-a-unital-algebra-with-basis-g]
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §1, pp.95–97
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $X$ be a nonempty connected CW complex with basepoint $x$, let
$p:\widetilde X\to X$ be a universal cover
([[def-universal-covering-space]], [[thm-universal-cover-existence]]), put
$\pi=\pi_1(X,x)$, and let $R$ be a commutative unital ring. Identify $\pi$
with the deck group by the no-reversal isomorphism of
[[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]. Write
$g c$ for the induced **left** deck action on a singular or cellular chain.

The **right group-ring action** on universal-cover chains is
$$c\cdot g:=g^{-1}c\qquad(g\in\pi),$$
extended additively and $R$-linearly to [[def-group-ring|$R[\pi]$]]. It is a
right action because
$$(c\cdot g)\cdot h=h^{-1}(g^{-1}c)=(gh)^{-1}c=c\cdot(gh),\qquad c\cdot1=c.$$
Here the multiplication $[g][h]=[gh]$ and the unit $[1]$ are those constructed
in [[thm-group-ring-is-a-unital-algebra-with-basis-g]]; bilinearity extends the
displayed group action uniquely to all finite formal sums in $R[\pi]$.
Every deck map is cellular for the lifted CW structure and commutes with the
singular and cellular boundaries. Hence
$$\partial(c\cdot g)=(\partial c)\cdot g,$$
and $C_*^{\mathrm{sing}}(\widetilde X;R)$ and
$C_*^{\mathrm{cell}}(\widetilde X;R)$ are chain complexes of right
$R[\pi]$-modules.

Choosing one lift and one orientation of every cell of $X$ makes each cellular
chain group a free right $R[\pi]$-module on those lifted oriented cells. This
is only a basis choice, not part of the chain complex. Empty chain degrees and
the zero ring give zero modules. The inversion in the definition is forced by
the library's first-loop-first deck convention; omitting it would reverse the
balanced tensor formulas below.
