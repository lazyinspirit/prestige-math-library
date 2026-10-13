---
page: sr-causality-and-signals
title: "Causality And Signals"
status: published
library: physics
items: [def-sr-causal-reachability-in-affine-minkowski-space,
        lem-sr-spacelike-pairs-have-frame-dependent-time-order,
        lem-sr-future-causal-sums-and-inertial-coordinate-criterion,
        post-sr-causal-signal-propagation,
        thm-sr-future-cone-and-flat-domain-of-dependence,
        pthm-sr-causal-signal-order-and-composition,
        texp-sr-superluminal-relay-antitelephone]
examples: []
---

This page develops causal reachability in the flat classical model and the
adopted restriction on what the model calls a signal, with every definition
stated before it is used. Causal and chronological reachability, the causal
futures and pasts $J^\pm$ and chronological futures and pasts $I^\pm$, causal diamonds and reachability by piecewise $C^1$
future causal paths are defined from the affine structure, the Lorentz form and
the time orientation alone, with no chart, origin or unit convention entering
the definitions ([[def-sr-causal-reachability-in-affine-minkowski-space]]). The
first structural result is that a spacelike pair has the spacelike coordinate inequality
$|D^0|<|D_s|$ in every inertial chart, while an explicit one-parameter family
of passive-boost frames realizes simultaneity and either time-order sign
([[lem-sr-spacelike-pairs-have-frame-dependent-time-order]]); the second
describes the closed future cone in inertial coordinates, proves that finite
sums of future causal vectors stay in the cone with the strict timelike case,
and states the coordinate criterion $q\in J^+(p)\iff D^0\ge|D_s|$
([[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]]). These are
mathematical statements about the model and carry no physical reading.

The physical layer begins with one adopted postulate: a transmission that
carries a signal is admitted only between events whose displacement is zero or
future causal, ideal light rays being the null boundary case, and kinematic
patterns produced by independent prearranged mechanisms are explicitly not
restricted; satisfying the causal condition alone does not assert existence of
a transmission ([[post-sr-causal-signal-propagation]]). The central mathematical
theorem then proves, inside the affine model, that a future causal path has
future causal displacement, that $J^+(p)=R^+(p)$ with the straight-segment
criterion, that a nonconstant closed future causal path does not exist, that
inertial coordinate time increases strictly along nonconstant future causal
paths, that the straight future timelike worldline maximizes proper time
between its endpoints with an exact equality case, and that proper
orthochronous affine Lorentz maps preserve the cone structure
([[thm-sr-future-cone-and-flat-domain-of-dependence]]). The physical reading of
the model is a conditional theorem: receipt lies in the future cone with
observer-independent temporal order, relaying composes inside the causal
future, no chain with a nonzero leg returns to its emission, the necessary causal signal condition
is frame independent, and spacelike pairs admit
no signal although their coordinate time order is frame dependent
([[pthm-sr-causal-signal-order-and-composition]]).

The last item is a thought experiment in the exact conditional sense required
by this framework: inside the hypothetical model of localized signals
travelling at a fixed speed $u>c$ in each emitter's rest frame, with immediate
lossless relaying and inertial motion at $v<c$, an explicit one-relay
configuration is computed in which the chain is received in the strict
chronological past of its emission, so the hypothetical model and the causal
signal restriction cannot both describe one and the same process family
([[texp-sr-superluminal-relay-antitelephone]]). It is a kinematic identity of
that model, not a report of an observation, and it asserts nothing about the
existence of superluminal signals or devices.
