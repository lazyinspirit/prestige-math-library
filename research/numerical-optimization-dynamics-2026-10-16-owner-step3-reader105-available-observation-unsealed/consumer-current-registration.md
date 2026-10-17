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
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "R. Baker Kearfott, Interval Computations: Introduction, Uses, and Resources, Euromath Bulletin 2(1) (1996)"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
---

## Definition

Fix one mode $m$ and a positive-length closed trial interval $J=[a,b]$ with $a<b$, contained in a finite accumulated prefix that starts at the last reported reset. **Certified hybrid event-enclosure data** consist of the following.

1. A continuous piecewise-$C^1$ dense reconstruction $U$ on the accumulated prefix, the exact mode solution $y_{\rm loc}$ launched from the last reported reset on that prefix, and a finite bound $\eta_{\rm loc}\ge0$ justified to satisfy $\|y_{\rm loc}(t)-U(t)\|_2\le\eta_{\rm loc}$ throughout the prefix. The provider also supplies a finite bound $\eta_{\rm ref}\ge0$ justified to satisfy $\|y_{\rm ref}(t)-U(t)\|_2\le\eta_{\rm ref}$ there, where $y_{\rm ref}$ is the exact incoming-mode continuation of the reference hybrid trajectory. On an open interval containing each queried trial interval, this reference continuation exists and is $C^1$, so each exact reference guard is $C^1$ there. Its finite error ledger records the aligned mode-segment start and an upper bound $E\ge\|x_{\rm reported}-x_{\rm ref}\|_2$ on the discrepancy between reported and reference states there. One sufficient ledger calculation, when both exact mode solutions remain in a common convex tube and the field is $L$-Lipschitz in state there for duration $H$, is $\eta_{\rm ref}=\eta_{\rm loc}+e^{LH}E$ by [[lem-ode-flow-lipschitz-on-a-tube]]. A provider may instead supply a separately justified total bound $\eta_{\rm ref}$ directly. The rational route in [[def-validated-residual-tube-certificate]], [[alg-validated-residual-tube-certificate-checker]], and [[thm-validated-residual-tube-certificate-sound]] is one sufficient provider for $\eta_{\rm loc}$: its panel-radius functions must be accompanied by a finite uniform upper bound on the whole prefix. It is restricted to the rational-expression fields and polynomial reconstructions stated there; it is not required. One concrete dense-output formula is [[def-heun-quadratic-dense-output]], which by itself is not an error certificate.
2. For each active transition $(m,n)$, a state-Lipschitz constant $L_g$ for its guard on a tube containing the exact and reconstructed states, interval enclosures $G^U_{mn}(I)$ of $g_{mn}(t,U(t))$, and finite interval evaluators $E_{mn}(I),D_{mn}(I)$ for every queried closed subinterval $I\subseteq J$. For every $t\in I$, $E_{mn}(I)$ must contain $g_{mn}(t,y_{\rm ref}(t))$, $D_{mn}(I)$ must contain $\partial_tg_{mn}(t,y_{\rm ref}(t))+D_yg_{mn}(t,y_{\rm ref}(t))f_m(t,y_{\rm ref}(t))$, and $G^U_{mn}(I)$ must contain $g_{mn}(t,U(t))$. By [[lem-hybrid-guard-derivative-along-mode]], the second enclosure is the derivative of the exact reference guard. For orientation $\sigma_{mn}$, an interval has certified transverse margin $\nu>0$ when $\sigma_{mn}D_{mn}(I)\subseteq[\nu,\infty)$. Reset data include state and time Lipschitz constants $L_R,L_{R,t}$ certified on a domain containing both reset inputs and the coordinate segments joining $(\tau,y_{\rm ref}(\tau))$ to $(\widehat\tau,U(\widehat\tau))$. The incoming field bound $M^-$ holds along $y_{\rm ref}$ on the event-time bracket; $M^+$ bounds the outgoing field along the outgoing solution that starts earlier, from its reset time through the first common post-reset time.
3. A finite error-ledger update rule and a certified separation bound $\delta>0$ between consecutive selected exact hybrid event times on the horizon. The provider must supply a finite sound justification or validation for every successor local or total error bound it returns. When a no-event trial is accepted, append its dense panel to $U$, retain the aligned-start discrepancy $E$, and certify valid local and total reference-error bounds over the enlarged prefix. When a prefix ends at a selected transverse event, let $\tau$ be the unique selected exact event time in the certified physical-time bracket and let $\widehat\tau$ be the bracket's upper endpoint. Suppose the whole bracket has certified signed derivative margin $\nu>0$, the dense guard residual at $\widehat\tau$ is bounded by $\varepsilon$, the total reference error on the bracket is bounded by $\eta_{\rm ref}$, the reset has state and time Lipschitz constants $L_R,L_{R,t}$, and the incoming and outgoing fields have norm bounds $M^-,M^+$ on the intervals required for comparison. A sufficient conditional provider rule is to justify $0\le\widehat\tau-\tau\le\Delta_{\rm next}$ with $\Delta_{\rm next}=(L_g\eta_{\rm ref}+\varepsilon)/\nu$, require $\Delta_{\rm next}<\delta/3$, and set $E_{\rm next}=L_R\eta_{\rm ref}+(L_RM^-+L_{R,t}+M^+)\Delta_{\rm next}$ for the exact reset evaluated at the reported state. If the reported reset is computed as $\widehat R$ with a separately certified error $\|\widehat R-R\|_2\le\varepsilon_R$, add $\varepsilon_R$ to this $E_{\rm next}$ bound; exact reset evaluation has $\varepsilon_R=0$. The provider must validate the hypotheses and inequalities and certify the next prefix's total reference-error bound with this aligned-start discrepancy included (or provide another sound proof of that total bound). Since $\widehat\tau-\tau\le\Delta_{\rm next}<\delta/3<\delta$, the next selected exact event cannot precede $\widehat\tau$. These formulas are a sufficient provider-supplied rule, not inequalities proved by this definition itself. If any proof obligation, required bound, separation certificate, or strict lag test is missing or invalid, no restart ledger update is certified. A local error bound alone does not establish the total reference bound; prior reset-state errors must be included in $\eta_{\rm ref}$.

The provider may be any finite, sound method that supplies the stated bounds and interval inclusions; it returns `certified` with the data or `inconclusive` without them. Its checks may be provider-specific: a rational residual-tube checker is a sufficient concrete branch, not a universal evaluator for arbitrary $C^1$ fields or reset states. The bounds and enclosures are admissible only when their claimed inequalities and inclusions are justified. A dense-output point evaluation alone establishes none of them. If a required evaluator, ledger entry, bound, or inclusion is unavailable or nonfinite, the event data are uncertified and no event-absence conclusion is permitted.
