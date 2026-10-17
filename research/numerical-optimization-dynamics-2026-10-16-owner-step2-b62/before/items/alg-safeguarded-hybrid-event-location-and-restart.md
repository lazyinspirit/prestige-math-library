---
id: alg-safeguarded-hybrid-event-location-and-restart
kind: algorithm
title: "Safeguarded certified event location and mode restart"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 10
deps:
  - def-hybrid-mode-guard-reset-system
  - def-certified-hybrid-event-enclosure
  - def-heun-quadratic-dense-output
  - alg-smooth-function-root-isolation
  - lem-transverse-hybrid-event-time-error
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Siegfried M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010), §§6.2 and 13.1"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
    - title: "Joel M. Esposito, Vijay Kumar, and George J. Pappas, Accurate Event Detection for Simulating Hybrid Systems, HSCC 2001, pp. 204–217"
      url: "https://citeseerx.ist.psu.edu/document?doi=4e069deb655ea94f14b16e764dd30aaf3f7f5b11&repid=rep1&type=pdf"
---

## Definition

**Inputs.** A smooth hybrid ODE system with a fixed event-priority rule; an initial mode, time, and state; a finite horizon; a trial-step provider that supplies positive-length trial intervals; certified hybrid event-enclosure data for each accumulated mode prefix; an upper root-box width target $\omega>0$; a guard-residual tolerance $\epsilon>0$; and finite nonnegative integer limits $B_{\mathrm{step}},B_{\mathrm{root}},B_{\mathrm{event}}$ on trial steps, boxes per guard, and accepted events. The state-error ledger $E$ is measured at the aligned mode-segment start, initially $E=0$. The provider accumulates a continuous piecewise reconstruction $U$ from the last reported reset and supplies a residual-tube certificate over that whole prefix. One concrete dense-output formula is the quadratic extension in [[def-heun-quadratic-dense-output]]; that formula alone is not a certificate.

**Procedure.** At each trial, extend the current mode-prefix reconstruction by the proposed panel. Recheck the residual-tube certificate on the whole accumulated prefix and compute the reference error bound $\eta_{\rm ref}=\eta_{\rm loc}+e^{LH}E$ using its ledger. If the tube checker or any guard evaluator fails, is non-finite, or lacks a justified reference-error bound, return `inconclusive` with the certified prefix.

For every outgoing guard, apply [[alg-smooth-function-root-isolation]] to the exact reference guard $h(t)=g(t,y_{\rm ref}(t))$ over the new trial interval, using its certified range and derivative enclosures and box budget $B_{\mathrm{root}}$. If any isolator is `inconclusive` or has unresolved boxes, return `inconclusive`. For each certified root box, classify the crossing using its derivative enclosure and the guard's declared orientation. A box strictly on the opposite side is nontriggering; a box whose derivative enclosure meets zero is refined or makes the result `inconclusive`.

If every isolator is `complete` and all certified roots are either excluded or nontriggering, accept the no-event panel, advance the reported time by its duration, append the dense panel, and retain the segment-start error bound $E$. Recompute the accumulated residual-tube and reference-error certificates. A no-event decision therefore follows complete root isolation and direction classification over the entire trial interval.

If enabled root boxes remain, refine them within the finite budget until the earliest event interval is separated from every later one. If intervals overlap and exact simultaneity is not certified, return `inconclusive`; if a tie is certified, apply the fixed priority rule. Refine until the selected box has width at most $\omega$. Set the reported event time $\widehat\tau$ to the **upper endpoint** of that box, so the exact root $\tau$ satisfies $\tau\le\widehat\tau$. Compute a certified upper bound $\epsilon_{\mathrm{obs}}$ for $|g(\widehat\tau,U(\widehat\tau))|$; if it exceeds $\epsilon$, return `inconclusive` or refine further.

For a transverse event with margin $\nu>0$, record $\Delta=(L_g\eta_{\rm ref}+\epsilon_{\mathrm{obs}})/\nu$ from [[lem-transverse-hybrid-event-time-error]]. Apply the reset at $(\widehat\tau,U(\widehat\tau))$. The reference trajectory has already reset by $\widehat\tau$; bound its outgoing flow over the lag $\Delta$ by $M^+\Delta$. Set the next aligned segment's reset-state ledger to
$$E\leftarrow L_R\eta_{\rm ref}+(L_RM^-+L_{R,t}+M^+)\Delta,$$
then restart in the selected mode at the reported time $\widehat\tau$. A failed reset-domain check returns `domain-failure`. Exhausting any finite step, root-box, or event budget returns `budget-exhausted` with the certified prefix.

**Outputs.** A finite list of certified no-event panels and transverse event boxes with selected transitions, reset states, event-time bounds, and an updated state-error ledger; or an explicit `inconclusive`, `domain-failure`, or `budget-exhausted` status with the certified prefix. No no-event conclusion is drawn from endpoint signs alone.
