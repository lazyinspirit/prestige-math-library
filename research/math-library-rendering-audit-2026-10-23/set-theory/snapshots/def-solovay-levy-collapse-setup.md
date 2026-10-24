---
id: def-solovay-levy-collapse-setup
kind: definition
title: The inaccessible Lévy-collapse setup for Solovay's construction
status: published
origin: pipeline
deps:
  - def-lc-inaccessible-and-mahlo-cardinals
  - def-cohen-collapse-and-levy-collapse-forcings
  - def-forcing-name-valuation-and-generic-extension
  - def-axiom-of-choice
  - thm-constructible-inner-model-semantic-and-formal-schema
  - thm-generalized-continuum-hypothesis-in-l
  - thm-canonical-definable-global-well-order-of-l
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Solovay, A model of set-theory in which every set of reals is Lebesgue measurable, Part I §3"
      url: https://people.math.ethz.ch/~fdalio/ZKmodel.pdf
---

## Definition

Let $U$ be a transitive model of ZFC and let $\kappa$ be strongly inaccessible
in $U$. For the real--ordinal definability form of the Solovay model, take the
forcing ground to be $V=L^U$. The constructible-inner-model theorem gives
$V\models\mathrm{ZFC}+V=L$ with the same ordinals as $U$. Moreover, $\kappa$
is still inaccessible in $V$: regularity is downward absolute; $\kappa$ and
unboundedly many $U$-cardinals below it remain cardinals in the inner model;
and GCH in $V$ makes this regular limit cardinal a strong limit. The canonical
setlike global well-order of $L$ also makes every ground-model parameter
definable from an ordinal. We henceforth write $V$ for this constructible
ground.

In $V$, let

$$P=\operatorname{Lv}(\kappa)=\{p:p\text{ is a finite function},\ \operatorname{dom}(p)\subseteq\kappa\times\omega,\ p(\alpha,n)<\alpha\}.$$

ordered by reverse inclusion. This is the finite-condition presentation of
$\operatorname{Coll}(\omega,{<}\kappa)$. For $\xi<\kappa$, put
$P_\xi=\{p\in P:\operatorname{dom}(p)\subseteq\xi\times\omega\}$ and, for a
supplied $V$-generic filter $G\subseteq P$, put $G_\xi=G\cap P_\xi$.

The restriction map $p\mapsto p\restriction(\xi\times\omega)$ is a complete
projection: if $q\le p\restriction(\xi\times\omega)$, then
$q\cup(p\restriction((\kappa\setminus\xi)\times\omega))\le p$ projects to
$q$, since the initial and tail domains are disjoint. Thus $G_\xi$ is
$P_\xi$-generic over $V$, $V[G_\xi]\subseteq V[G]$, and the remaining forcing
is the quotient $P/G_\xi$.

No model or generic is asserted to exist. Passing to $L^U$ adds no consistency
hypothesis beyond the inaccessible in $U$. Choice is a ground/ambient
hypothesis: it supports the usual cardinal comparisons, maximal-antichain
arguments and forcing recursion. It is not included in the eventual inner
model.
