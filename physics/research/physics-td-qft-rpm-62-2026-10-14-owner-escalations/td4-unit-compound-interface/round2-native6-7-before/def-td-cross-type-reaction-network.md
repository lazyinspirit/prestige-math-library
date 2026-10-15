---
id: def-td-cross-type-reaction-network
kind: definition
title: Cross-type mixing and reaction network
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: A declared family of allowed transitions between distinct tagged composition types, with finite catalyst chains and an explicit no-sinks condition; this definition does not claim a particular material network satisfies it.
deps: [def-td-process-and-protocol, def-td-scaled-products-and-comparison, post-td-accessibility-a1-a6, def-tdmath-decorated-chain-costs, def-tdmath-forward-sector-hypotheses]
dependency_roles:
  def-td-process-and-protocol: formulation-prerequisite
  def-td-scaled-products-and-comparison: formulation-prerequisite
  post-td-accessibility-a1-a6: physical-assumption
  def-tdmath-decorated-chain-costs: mathematical-premise
  def-tdmath-forward-sector-hypotheses: mathematical-premise
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§VI.A–VI.B
      url: https://arxiv.org/pdf/cond-mat/9708200v2
verification:
  precheck: n/a
---

## Definition

A cross-type mixing and reaction network consists of a declared set $\mathcal G$ of tagged composition types, a state set $X_\Gamma$ for each $\Gamma\in\mathcal G$, and a set of channel-labelled process records. A record $P$ for a channel $\alpha$ has an equilibrium initial state $x^-_P\in X_\Gamma$, an equilibrium final state $x^+_P\in X_{\Gamma'}$, and the full protocol, outer-boundary, energy and auxiliary data needed for that channel. The channel declares its own dimensioned material-balance constraints and whether heat or work crosses the outer boundary; the fixed-composition record type of [[def-td-process-and-protocol]] is recovered when $\Gamma=\Gamma'$. Define $(\Gamma,x)\mathcal R(\Gamma',y)$ exactly when at least one admitted channel record has those endpoint states. No channel is inferred from separated composition.

For any permitted equal-formal-mass compound states $A,B$ of the network, define $A\prec B$ exactly when at least one admitted channel record has initial state $A$ and final state $B$; for named single types this is the relation $\mathcal R$ above. This is the exact relation supplied to [[def-tdmath-forward-sector-hypotheses]], not a separate abstract order that enlarges or restricts the channel edges. Its extension to finite tagged products and common spectators is governed by the adopted A1–A6 conditions below. Thus every edge in a decorated chain is precisely an admitted channel transition. This identification is a declared model condition.

The network is **finite-factor closed** when its types admit the declared finite composition and positive scaling operations and each allowed channel respects the model’s stated conservation constraints. In addition, each channel must preserve the dimensionless formal mass $m$ of [[def-td-scaled-products-and-comparison]]; this is the equal-coefficient-mass convention required by the mathematical chain-cost supplier, not a statement that formal mass is kilograms or moles. The common relation on all equal-formal-mass compounds satisfies A1–A6 of [[post-td-accessibility-a1-a6]], including consistency with spectators and stability. A decorated finite chain is exactly a finite sequence of such allowed transitions with a common catalyst and the real baseline-entropy edge costs in [[def-tdmath-decorated-chain-costs]].

For $\Gamma,\Gamma'$, let $F(\Gamma,\Gamma')\in\mathbb R\cup\{-\infty,+\infty\}$ be the infimum of those finite decorated-chain costs, with $+\infty$ if no witness exists and $-\infty$ if costs are unbounded below. The network has **no sinks** when, for every ordered type pair,

$$F(\Gamma,\Gamma')<+\infty\quad\Longleftrightarrow\quad F(\Gamma',\Gamma)<+\infty.$$

No-sinks is an explicit property required of a network used in the global-offset theorem; it is not proved by this definition, and it is not asserted for every physical mixing or reaction. The definition permits the channel set to be empty; then the condition must still be checked rather than inferred.
