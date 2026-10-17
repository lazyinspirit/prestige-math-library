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

Fix one mode $m$ and a positive-length closed trial interval $J=[a,b]$ with $a<b$. **Certified hybrid event-enclosure data** consist of the following.

1. A continuous piecewise dense reconstruction $U$ accumulated from the last reported reset through the current trial prefix, a finite rational residual-tube certificate for the mode ODE launched from that reported reset whose stored reconstruction is exactly $U$, and its returned `certified` status. Write $\eta_{\rm loc}$ for the rational upper bound on the checker-certified distance from $U$ to that exact mode solution over the entire prefix. The soundness interface is [[def-validated-residual-tube-certificate]], [[alg-validated-residual-tube-certificate-checker]], and [[thm-validated-residual-tube-certificate-sound]]. One concrete dense-output formula is [[def-heun-quadratic-dense-output]], but any reconstruction with such a certificate is allowed.
2. A rational **reference error bound** $\eta_{\rm ref}\ge0$ and a finite error ledger that justifies $\|y_{\rm ref}(t)-U(t)\|_2\le\eta_{\rm ref}$ throughout the common mode prefix, where $y_{\rm ref}$ is the exact incoming-mode continuation of the reference hybrid trajectory. At the last reported reset time, both trajectories are in the same new mode and the ledger contains an upper bound $E$ on their reset-state discrepancy. If $L$ is a state-Lipschitz bound and $H$ the elapsed duration through the current prefix, the ledger sets $\eta_{\rm ref}=\eta_{\rm loc}+e^{LH}E$. When a no-event trial is accepted, append its dense panel to $U$, extend the residual-tube certificate, and update $H$ and $\eta_{\rm loc}$ while retaining $E$. When the prefix ends at a transverse event with guard residual bound $\varepsilon$, guard state-Lipschitz bound $L_g$, crossing margin $\nu$, incoming and outgoing field bounds $M^-,M^+$, reset state-Lipschitz bound $L_R$, and reset time-Lipschitz bound $L_{R,t}$, it records $\Delta_{\rm next}=(L_g\eta_{\rm ref}+\varepsilon)/\nu$ and $E_{\rm next}=L_R\eta_{\rm ref}+(L_RM^-+L_{R,t}+M^+)\Delta_{\rm next}$. The $M^+\Delta_{\rm next}$ term accounts for the exact trajectory's outgoing flow between its true event time and the reported upper event-box endpoint. The local residual-tube status in item 1 alone does not establish this total reference bound; prior reset-state errors must be included.
3. For each active transition $(m,n)$, a state-Lipschitz constant $L_g$ for its guard on the enlarged reference tube, interval enclosures $G^U_{mn}(I)$ of $g_{mn}(t,U(t))$, and finite interval evaluators $E_{mn}(I),D_{mn}(I)$ for every queried closed subinterval $I\subseteq J$. The evaluators must contain, respectively, $g_{mn}(t,y_{\rm ref}(t))$ and $\partial_tg_{mn}(t,y_{\rm ref}(t))+D_yg_{mn}(t,y_{\rm ref}(t))f_m(t,y_{\rm ref}(t))$ for every $t\in I$; $G^U_{mn}(I)$ must contain $g_{mn}(t,U(t))$. By [[lem-hybrid-guard-derivative-along-mode]], the second enclosure is the derivative of the exact reference guard. For orientation $\sigma_{mn}$, a bracket has certified transverse margin $\nu>0$ when $\sigma_{mn}D_{mn}(I)\subseteq[\nu,\infty)$. Reset data include state and time Lipschitz constants $L_R,L_{R,t}$ and bounds $M^-,M^+$ on the incoming and outgoing mode-field norms over the event-time bracket.

The interval enclosures and the reference error ledger are admissible only when their stated inclusions and error bounds are justified. A dense-output point evaluation alone establishes none of them. If a required evaluator, ledger entry, or inclusion is unavailable, the event data are uncertified and no event-absence conclusion is permitted.
