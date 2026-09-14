---
page: proper-forcing-countable-support-iterations-and-pfa-examples
title: "Proper Forcing, Countable-Support Iterations, and PFA: Examples and Counterexamples"
status: draft
items: []
examples:
  - ex-ccc-posets-are-proper-by-maximal-antichains
  - ex-baumgartner-club-shooting-is-proper
  - ex-countable-support-fusion-at-a-limit-stage
  - ex-pfa-specializes-an-aronszajn-tree
  - fs-ccc-and-proper-are-equivalent
---

The first example exposes the maximal-antichain calculation behind the theorem
that ccc forcings are proper. A maximal antichain chosen in a countable model is
itself contained in that model, so every extension of the starting condition
is compatible with a model condition in the relevant dense set. No stronger
master than the original condition is needed.

Baumgartner's finite-condition club forcing shows that properness is not merely
a disguised chain condition. The calculation adjoins the model height, splices
normal functions to prove the required compatibility, and checks continuity of
the generic union at limits. Dense disagreement with every ground-model normal
function proves that the resulting club is new.

The limit-stage example displays the safe form of countable-support fusion.
Cofinal stages and the model's dense sets are enumerated together; successive
master conditions preserve exact earlier initial segments. Their coherent
union has countable support and meets every enumerated dense set without
assuming that a merely proper coordinate forcing supplies arbitrary fusion
lower bounds.

Under PFA, the finite-specialization forcing of an Aronszajn tree is ccc and
hence proper. Choice of level enumerations together with infinite-cardinal
multiplication bounds the node-domain dense family by $\omega_1$. A PFA filter
meeting those requirements has a directed union that is a total specializing
map into $\omega$; no external generic over the universe is assumed.

The closing counterexample separates ccc from properness in the other
direction. The reverse-inclusion forcing of countable partial functions from
$\omega_1$ to $2$ is countably closed because the union of a descending
omega-sequence still has countable domain, and is therefore proper. For each
$\alpha<\omega_1$, the condition that is zero below $\alpha$ and one at
$\alpha$ belongs to an explicit $\omega_1$-antichain. Thus ccc implies proper,
but proper does not imply ccc.
