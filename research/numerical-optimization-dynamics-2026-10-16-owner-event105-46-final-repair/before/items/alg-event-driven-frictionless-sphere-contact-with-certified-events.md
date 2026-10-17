---
id: alg-event-driven-frictionless-sphere-contact-with-certified-events
kind: algorithm
title: Event-driven integration for isolated frictionless spherical impacts
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - thm-frictionless-sphere-binary-impact-impulse-laws
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "David E. Stewart, Dynamics with Inequalities: Impacts and Hard Constraints"
      url: https://www.scribd.com/document/1044460955/David-Stewart-Dynamics-With-Inequalities
      locator: Sections 6.1.8 and 6.1.10, pp. 221–222 and 231–232; penalty time-step and penalty-to-rigid-limit cautions.
    - title: Dimitri P. Bertsekas, 6.253 Convex Analysis and Optimization, Complete Lecture Notes
      url: https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf
      locator: Complete notes, Lecture 12, slides 158–161; normal-cone and complementarity conventions.
---

## Definition

Inputs are a dimension $d\ge1$, a finite number $P\ge2$ of spheres with centers $q_i(t)\in\mathbb R^d$, velocities $v_i(t)\in\mathbb R^d$, masses $m_i>0$, radii $r_i>0$, an initial state, horizon $T>0$, restitution coefficients $e_{ij}\in[0,1]$, a positive root-bracket tolerance $\epsilon>0$, a positive event-separation bound $\delta>0$, a certified finite upper bound $N_{\rm evt}\in\mathbb N$ on isolated events before $T$, an event budget $B\in\mathbb N$, and a finite-budget event-certificate provider. The smooth force field is continuously differentiable on a neighborhood of a compact state tube $K$ and every state in $K$ satisfies $\|q_i-q_j\|_2\ge\sigma$ for a stated $\sigma>0$ and all $i<j$; this keeps each contact normal denominator nonzero. On every smooth segment, a dense-output certificate supplies a continuous state curve $\widehat z$ and a stated uniform state error bound $\eta\ge0$ relative to the exact smooth-mode solution. A valid event certificate for a pair $i<j$ supplies a time bracket $[a,b]$ of width at most $\epsilon$ and certifies a unique root $t_*\in[a,b]$ of the exact guard
$$\gamma_{ij}(t)=\|q_i(t)-q_j(t)\|_2-(r_i+r_j),$$
an incoming normal velocity $v_n<0$, and a bound $|\dot\gamma_{ij}(t_*)|\ge\nu>0$ (the transversality condition). It also supplies an enclosure or explicit sampling assumption excluding earlier unreported roots, a separation certificate ensuring distinct event times differ by at least $\delta$, and a certified restart-state error. The provider certifies that at most $N_{\rm evt}$ isolated events occur before $T$. These are inputs to this procedure; the algorithm does not prove that a provider can construct them.

For each smooth segment, request the dense-output and event certificates for every unordered pair and inspect pairs in increasing lexicographic order. If the provider certifies no event before $T$, return the segment and its certificates. Otherwise choose the unique earliest isolated event; if event brackets overlap, a guard is grazing, a missed-event exclusion is unavailable, the finite event-count bound is unavailable, or any required certificate is missing, return `unresolved` with the partial trajectory. At a certified event for $i<j$, set $n=(q_i-q_j)/\|q_i-q_j\|_2$ and $v_n=\langle v_i^- -v_j^-,n\rangle$. Apply [[thm-frictionless-sphere-binary-impact-impulse-laws]] with $e=e_{ij}$, record the impulse and error certificate, and restart the smooth-mode integrator from the updated velocities. Stop at $T$ or when $B$ events have been processed; if another event is required after the budget, return `unresolved` rather than claiming completion. A completed run requires $B\ge N_{\rm evt}$ or a certified no-event result before the budget is exhausted.

The simple search enumerates all $P(P-1)/2$ unordered pairs on each smooth segment. Its guard-evaluation count is charged separately from each event-certificate solve, dense reintegration, and restart-error calculation. No neighbor-search acceleration or frictional/simultaneous-contact solver is specified here. The planned T10 event-location page has not supplied its item inventory or actual proof bodies, so the event-certificate input remains an unresolved prerequisite for readiness.
