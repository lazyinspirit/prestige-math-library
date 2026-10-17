---
id: def-certified-hybrid-event-enclosure
kind: definition
title: "Certified dense-output and reference-guard enclosure data for hybrid events"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - def-hybrid-mode-guard-reset-system
  - def-validated-residual-tube-certificate
  - alg-validated-residual-tube-certificate-checker
  - thm-validated-residual-tube-certificate-sound
  - def-heun-quadratic-dense-output
  - lem-hybrid-guard-derivative-along-mode
  - lem-ode-flow-lipschitz-on-a-tube
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I: Nonstiff Problems, 2nd ed., Chapter III"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "R. Baker Kearfott, Interval Computations: Introduction, Uses, and Resources, Euromath Bulletin 2(1) (1996)"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
---

## Definition

Fix one mode $m$ and a positive-length closed trial interval $J=[a,b]$ with $a<b$, contained in a finite accumulated prefix that starts at the last reported reset. **Certified hybrid event-enclosure data** consist of the following.

1. A continuous piecewise-$C^1$ dense reconstruction $U$ on the accumulated prefix, the exact mode solution $y_{\rm loc}$ launched from the last reported reset on that prefix, and a finite bound $\eta_{\rm loc}\ge0$ justified to satisfy $\|y_{\rm loc}(t)-U(t)\|_2\le\eta_{\rm loc}$ throughout the prefix. The provider also supplies a finite bound $\eta_{\rm ref}\ge0$ justified to satisfy $\|y_{\rm ref}(t)-U(t)\|_2\le\eta_{\rm ref}$ there, where $y_{\rm ref}$ is the exact incoming-mode continuation of the reference hybrid trajectory. On an open interval containing each queried trial interval, this reference continuation exists and is $C^1$, so each exact reference guard is $C^1$ there. Its finite error ledger records the aligned mode-segment start and the discrepancy $E$ between the reported and reference states there. One sufficient ledger calculation, when both exact mode solutions remain in a common convex tube and the field is $L$-Lipschitz in state there for duration $H$, is $\eta_{\rm ref}=\eta_{\rm loc}+e^{LH}E$ by [[lem-ode-flow-lipschitz-on-a-tube]]. A provider may instead supply a separately justified total bound $\eta_{\rm ref}$ directly. The rational route in [[def-validated-residual-tube-certificate]], [[alg-validated-residual-tube-certificate-checker]], and [[thm-validated-residual-tube-certificate-sound]] is one sufficient provider for $\eta_{\rm loc}$: its panel-radius functions must be accompanied by a finite uniform upper bound on the whole prefix. It is restricted to the rational-expression fields and polynomial reconstructions stated there; it is not required. One concrete dense-output formula is [[def-heun-quadratic-dense-output]], which by itself is not an error certificate.
2. For each active transition $(m,n)$, a state-Lipschitz constant $L_g$ for its guard on a tube containing the exact and reconstructed states, interval enclosures $G^U_{mn}(I)$ of $g_{mn}(t,U(t))$, and finite interval evaluators $E_{mn}(I),D_{mn}(I)$ for every queried closed subinterval $I\subseteq J$. For every $t\in I$, $E_{mn}(I)$ must contain $g_{mn}(t,y_{\rm ref}(t))$, $D_{mn}(I)$ must contain $\partial_tg_{mn}(t,y_{\rm ref}(t))+D_yg_{mn}(t,y_{\rm ref}(t))f_m(t,y_{\rm ref}(t))$, and $G^U_{mn}(I)$ must contain $g_{mn}(t,U(t))$. By [[lem-hybrid-guard-derivative-along-mode]], the second enclosure is the derivative of the exact reference guard. For orientation $\sigma_{mn}$, an interval has certified transverse margin $\nu>0$ when $\sigma_{mn}D_{mn}(I)\subseteq[\nu,\infty)$. Reset data include state and time Lipschitz constants $L_R,L_{R,t}$ and bounds $M^-,M^+$ on the incoming and outgoing mode-field norms over the event-time bracket.
3. A finite error-ledger update rule and a certified separation bound $\delta>0$ between consecutive selected exact hybrid event times on the horizon. When a no-event trial is accepted, append its dense panel to $U$, extend the local bound and total reference bound over the enlarged prefix, and retain the aligned-start discrepancy $E$. When a prefix ends at a transverse event with guard residual bound $\varepsilon$, crossing margin $\nu$, incoming and outgoing field bounds $M^-,M^+$, and reset constants $L_R,L_{R,t}$, the sufficient update is $\Delta_{\rm next}=(L_g\eta_{\rm ref}+\varepsilon)/\nu$ and $E_{\rm next}=L_R\eta_{\rm ref}+(L_RM^-+L_{R,t}+M^+)\Delta_{\rm next}$. This restart update is admissible only when $\Delta_{\rm next}<\delta/3$: then no later exact event occurs before the reported upper event-box endpoint, and the $M^+\Delta_{\rm next}$ term bounds the exact trajectory's outgoing flow over the lag. If the separation bound or strict lag test is unavailable, no restart ledger update is certified. The local error bound alone does not establish the total reference bound; prior reset-state errors must be included in $\eta_{\rm ref}$.

The provider may be any finite, sound method that supplies the stated bounds and interval inclusions; it returns `certified` with the data or `inconclusive` without them. Its checks may be provider-specific: a rational residual-tube checker is a sufficient concrete branch, not a universal evaluator for arbitrary $C^1$ fields or reset states. The bounds and enclosures are admissible only when their claimed inequalities and inclusions are justified. A dense-output point evaluation alone establishes none of them. If a required evaluator, ledger entry, bound, or inclusion is unavailable or nonfinite, the event data are uncertified and no event-absence conclusion is permitted.
