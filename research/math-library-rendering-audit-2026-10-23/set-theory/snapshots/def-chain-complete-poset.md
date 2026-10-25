---
id: def-chain-complete-poset
kind: definition
title: "Chain-complete poset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-chain, def-upper-bound]
justified_by: []
forward_refs: [cex-progressive-map-without-fixed-point, ex-powerset-is-chain-complete]
aliases: [def-ccpo]
landmark: true
short: "chain-complete poset"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Complete partial order (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Complete_partial_order"
    - title: "Bourbaki–Witt theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem"
pipeline_run: null
---

## Definition

A poset $(P, \le)$ is **chain-complete** if every chain $C \subseteq P$
([[def-chain]]) has a least upper bound $\sup C$ in $P$
([[def-upper-bound]]).

The empty set is a chain, so a chain-complete poset has an element
$$\bot := \sup \emptyset,$$
and $\bot$ is the least element of $P$: every $x \in P$ is an upper bound of
$\emptyset$, so $\bot \le x$ by leastness. In particular a chain-complete poset
is nonempty.

A map $f : P \to P$ is **progressive** (also *inflationary*, or *increasing* in
Bourbaki's sense) if
$$x \le f(x) \quad \text{for every } x \in P.$$

## Remarks

- **Progressive is not monotone.** A progressive map is required to move each
  point weakly upward; it is *not* required to preserve the order, and
  [[thm-bourbaki-witt]] assumes no monotonicity whatsoever. This is what makes
  the theorem strong enough to drive [[thm-zorn]], where the map is built from an
  arbitrary choice function and has no reason to be monotone.
- **On the empty-chain convention.** Some authors let "chain" mean *nonempty*
  chain, and then state Bourbaki–Witt for a nonempty chain-complete poset. The
  two conventions give the same theorem. Given $P \ne \emptyset$ chain-complete
  in the nonempty-chain sense and $f$ progressive, pick any $p \in P$ and pass to
  $P_{\ge p} = \{x \in P : p \le x\}$: it contains $p$, it is closed under $f$
  because $f$ is progressive, the supremum of a nonempty chain in $P_{\ge p}$
  again lies in $P_{\ge p}$, and $\sup \emptyset = p$ there. So $P_{\ge p}$ is
  chain-complete in the sense used here. Including the empty chain simply
  packages that reduction into the definition, and it is Wikipedia's convention
  for a *pointed* chain-complete order.
- Chain-completeness is strictly weaker than requiring least upper bounds for
  *all* subsets (which would make $P$ a complete lattice). The power set of any
  set is a complete lattice, hence chain-complete
  ([[ex-powerset-is-chain-complete]]); the posets Zorn's lemma is applied to
  usually are not.
- The hypothesis cannot be dropped from [[thm-bourbaki-witt]]: a progressive map
  on a poset that is not chain-complete may have no fixed point
  ([[cex-progressive-map-without-fixed-point]]).
