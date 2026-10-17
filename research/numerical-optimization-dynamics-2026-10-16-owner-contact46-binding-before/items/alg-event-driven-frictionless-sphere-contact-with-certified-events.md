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
  - lem-sphere-contact-guard-normal-and-reset-lipschitz-bounds
  - def-hybrid-mode-guard-reset-system
  - lem-transverse-hybrid-event-time-error
  - lem-reset-error-after-a-mistimed-hybrid-event
  - lem-ode-flow-lipschitz-on-a-tube
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

**Inputs.** A dimension $d\ge1$; $P\ge2$ spheres with centers $q_i$, velocities
$v_i$, masses $m_i>0$, radii $r_i>0$ and fixed restitution coefficients
$e_{ij}\in[0,1]$; an initial state and horizon $T>0$; a positive time-bracket
tolerance $\epsilon_{\rm time}$, a separate positive guard-residual tolerance
$\epsilon_{\rm guard}$, an event-separation bound $\delta>0$, a certified
finite event-count bound $N_{\rm evt}\in\mathbb N$, an event budget
$B\in\mathbb N$, and a finite-budget
certificate provider. The smooth state field has $q_i'=v_i$ and a $C^1$ force
field on a neighborhood of an admitted compact tube. Throughout each certified
incoming/outgoing tube every pair distance is at least a stated $\sigma>0$.
The provider supplies finite relative-velocity bounds $V$ and state/field
bounds wherever they are used below.

The provider is an explicit admissible input, not an automatically constructed
oracle for arbitrary $C^1$ fields. It must supply the following valid data,
with any failed or undecidable certificate test returning `unresolved`.

1. From the last reported reset, a continuous accumulated dense reconstruction
   $U$ and a certified uniform error $\eta_{\rm loc}$ relative to the exact
   smooth-mode solution launched from that reported state. It also supplies
   a bound $E$ on the discrepancy from the reference hybrid trajectory at
   the same aligned segment-start time, initially $E=0$. On a common mode
   prefix of duration $H$, supply a state-Lipschitz constant $L$ and the common
   solution/tube hypotheses of [[lem-ode-flow-lipschitz-on-a-tube]], and use
   $\eta_{\rm ref}=\eta_{\rm loc}+e^{LH}E$. A finite cover of certified
   convex mode tubes may be used with its propagated bounds. A Jacobian bound
   on a nonconvex compact set alone is not a substitute for these hypotheses.

2. For every pair $i<j$, exact-reference guard enclosures for
   $\gamma_{ij}(t)=\|q_i(t)-q_j(t)\|_2-r_i-r_j$, and a certificate covering
   the whole interval since the last processed event that excludes earlier
   unreported incoming roots. A sufficient explicit sampling assumption may
   replace a range cover only when its stated variation/domain assumptions
   justify the same exclusion. Endpoint signs or an unsuccessful sign scan
   alone do not certify absence. Dense-guard enclosures must include the
   state-error inflation $\sqrt2\eta_{\rm ref}$ as well as guard-evaluation
   and rounding error; the bound follows from
   [[lem-sphere-contact-guard-normal-and-reset-lipschitz-bounds]].

3. For each candidate event, a bracket $[a,b]$ containing exactly one root
   $\tau$ of the exact reference guard, with
   $b-a\le\epsilon_{\rm time}$ and $b-a<\delta/3$. On the entire bracket,
   certify the incoming inequality
   $\dot\gamma_{ij}(t)\le-\nu<0$, not just a derivative value at its root.
   Supply disjoint ordering certificates identifying the unique earliest
   event among all pairs. A grazing/uncertain derivative, ambiguous overlap
   or simultaneous multi-contact is unresolved; lexicographic inspection
   does not settle physical simultaneous impacts.

4. At $\widehat\tau=b$, a certified bound
   $\epsilon_{\rm obs}\ge|\gamma_{ij}(\widehat\tau,U(\widehat\tau))|$
   with $\epsilon_{\rm obs}\le\epsilon_{\rm guard}$. The provider includes
   all evaluation errors in this bound. The actual lag is nonnegative and
   bounded by
   $$\Delta:=\min\left\{b-a,\frac{\sqrt2\eta_{\rm ref}+\epsilon_{\rm obs}}{\nu}\right\}$$
   by [[lem-transverse-hybrid-event-time-error]]. Require certified bounds
   $M^-,M^+$ for the incoming/outgoing fields through this lag, and reset
   domain/tube checks. For the selected pair use the state-reset bound $L_R$
   from [[lem-sphere-contact-guard-normal-and-reset-lipschitz-bounds]], with
   a velocity bound valid for both compared reset inputs. This reset has no
   explicit time dependence. Supply a separate $\epsilon_R\ge0$ if the reset
   formula itself is evaluated inexactly.

5. A certificate that the matched isolated exact events have separation at
   least $\delta$ and count at most $N_{\rm evt}$. Specify whether a horizon
   endpoint impact is included in that count or the endpoint is reported as
   a pre-impact state. Process an initial enabled root at most once. Missing
   endpoint/count/separation bookkeeping is unresolved. In particular $e=0$
   does not establish another isolated transverse event after the reset.

**Procedure.** Request these certificates for every unordered pair on each
smooth segment, inspecting the pair list in increasing lexicographic order.
If the provider certifies no further event before the chosen horizon endpoint,
return that segment, its accumulated error bound and its certificates. Otherwise
select the certified unique earliest pair and use its upper bracket endpoint
$\widehat\tau=b$. Evaluate the binary impulse formula of
[[thm-frictionless-sphere-binary-impact-impulse-laws]] as the smooth reset
extension at $U(b)$; keep positions fixed and update only the selected two
velocities. The impulse theorem's exact contact/momentum/restitution/energy
laws concern the reference exact incoming contact. A reported approximate
state is not asserted to be exactly at contact; its reset error is recorded.

By [[lem-reset-error-after-a-mistimed-hybrid-event]], set the next aligned
reset-state error bound to
$$E\leftarrow L_R\eta_{\rm ref}+(L_RM^-+M^+)\Delta+\epsilon_R.$$
The outgoing $M^+\Delta$ term accounts for the reference trajectory's flow
from its earlier true reset to the reported time. Restart the smooth integrator
at $b$ with the reported reset state, discard the previous local reconstruction,
and start the next accumulated dense-error ledger. These recurrences compare
only matched smooth-mode prefixes and post-reset states at aligned times; they
make no same-clock state-error assertion between an exact jump and its later
reported jump.

Stop at $T$ or after $B$ accepted events. If another event is required after
the budget, return `unresolved` with the certified partial trajectory. A
completed run requires $B\ge N_{\rm evt}$ or a certified no-further-event result
before the budget is exhausted. Any missing enclosure, margin, ordering,
separation/count or restart certificate, failed reset domain, or depleted
provider budget returns `unresolved` without an event-absence claim.

The search enumerates $P(P-1)/2$ pairs per smooth segment. Root-solve guard
evaluations, dense reintegration and restart-error calculation are charged
separately from one inspection per pair. No neighbor-search acceleration,
frictional solver, or simultaneous-contact solver is specified.

## Remarks

The general mode/guard/reset terminology is
[[def-hybrid-mode-guard-reset-system]]. If one full mode graph is required,
use one initial label and one auxiliary label for each unordered contact pair,
all carrying the identical smooth field; transitions to label $(i,j)$ carry
that pair's guard and reset. This avoids assigning many distinct guards to
one self-transition. The four general interfaces used here apply to explicitly
supplied valid dense/error and interval certificates. The event page's
rational residual-checker construction is one sufficient provider branch;
this procedure does not import that construction as an evaluator for every
$C^1$ force or an irrational reported reset state.
