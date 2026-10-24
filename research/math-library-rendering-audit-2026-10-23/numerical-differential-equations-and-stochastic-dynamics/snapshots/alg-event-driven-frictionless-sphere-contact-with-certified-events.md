---
id: alg-event-driven-frictionless-sphere-contact-with-certified-events
kind: algorithm
title: Event-driven integration for isolated frictionless spherical impacts
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 10
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
$B\in\mathbb N$, an endpoint policy $\pi_T\in\{\texttt{include},\texttt{pre-impact}\}$,
and a finite-budget certificate provider. The exact smooth-mode reference dynamics are
$$q_i'=v_i,\qquad v_i'=F_i(t,q,v),$$
where $F=(F_1,\ldots,F_P)$ is a specified $C^1$ force field on an open
neighborhood of an admitted compact tube. The exact reference initial state is
nonpenetrating: $\gamma_{ij}(0):=\|q_i(0)-q_j(0)\|_2-r_i-r_j\ge0$ for every
pair. A completed provider must certify that the exact reference states remain
nonpenetrating on each smooth segment and after every exact reset; a failed or
undecidable nonpenetration check returns `unresolved`. Throughout each certified
incoming/outgoing tube every pair distance is at least a stated $\sigma>0$.
The provider supplies finite relative-velocity bounds $V$ and state/field bounds
wherever they are used below.

The provider is an explicit admissible input, not an automatically constructed
oracle for arbitrary $C^1$ fields. It must supply the following valid data,
with any failed or undecidable certificate test returning `unresolved`.

1. From the last reported reset time $t_*$, supply a continuous accumulated
   dense reconstruction $U$. For a selected event with bracket $[a,b]$, let
   $X^-$ be the exact incoming smooth-mode continuation launched from the
   aligned reference state at $t_*$, and let $\widetilde X^-$ be the exact
   solution of the same smooth field launched from the reported state there.
   Certify both continuations through $b$, including the part after the true
   event $\tau$. Supply $E\ge\|\widetilde X^-(t_*)-X^-(t_*)\|_2$
   (initially $E=0$) and a uniform bound
   $\|U(t)-\widetilde X^-(t)\|_2\le\eta_{\rm loc}$ for every
   $t\in[t_*,b]$. With $H=b-t_*$, supply a state-Lipschitz constant $L$
   and the common solution/tube hypotheses of [[lem-ode-flow-lipschitz-on-a-tube]]
   on this whole interval, and use
   $\eta_{\rm ref}=\eta_{\rm loc}+e^{LH}E$ as the uniform bound relative
   to $X^-$ through $b$. In a certified no-event branch replace $b$ by $T$.
   A finite cover of certified convex mode tubes may be used with its
   propagated bounds. A Jacobian bound on a nonconvex compact set alone is
   not a substitute. The continuation $X^-$ agrees with the incoming reference
   path up to $\tau$; after $\tau$ it is an auxiliary smooth trajectory,
   not the reset hybrid path. It need not be nonpenetrating after $\tau$,
   but must satisfy the stated separation and field/tube bounds.

2. For every pair $i<j$, exact-reference guard enclosures for
   $\gamma_{ij}(t)=\|q_i(t)-q_j(t)\|_2-r_i-r_j$, and a certificate covering
   the whole physical smooth prefix from $t_*$ through the next reference
   event, or through $T$ if there is no next event, that proves
   $\gamma_{ij}\ge0$ throughout and accounts for every possible zero. Every
   zero is either the just-processed segment-start root for that pair (which may
   be ignored once) or a candidate root bracket satisfying item 3; any other
   possible zero, including a grazing or zero-speed zero, or any possible
   negative guard value returns `unresolved`. At the initial simulation time, a
   zero must be processed as an enabled incoming root or the result is
   `unresolved`. Thus a no-event result requires certified nonpenetration and
   exclusion of every unlisted zero over the whole interval, not merely
   exclusion of incoming roots. A sufficient explicit sampling assumption may
   replace a range cover only when its stated variation/domain assumptions
   justify the same exclusion. Endpoint signs or an unsuccessful sign scan
   alone do not certify absence. Dense-guard enclosures must include the
   state-error inflation $\sqrt2\eta_{\rm ref}$ as well as guard-evaluation
   and rounding error; the bound follows from
   [[lem-sphere-contact-guard-normal-and-reset-lipschitz-bounds]]. For candidate
   localization these dense enclosures refer to $X^-$ from item 1. The
   nonpenetration requirement concerns the physical reference hybrid path;
   it does not prohibit a negative incoming-continuation guard after its
   first event. Require the selected continuation root to match the earliest
   unprocessed physical reference event.

3. For each candidate event, a bracket $t_*\le a\le b\le T$ containing
   exactly one root $\tau$ of the selected incoming-continuation guard
   $\gamma^-_{ij}(t)=\|q^-_i(t)-q^-_j(t)\|_2-r_i-r_j$, with
   $b-a\le\epsilon_{\rm time}$ and $b-a<\delta/3$. On the entire bracket,
   certify the incoming inequality
   $\dot\gamma^-_{ij}(t)\le-\nu<0$, not just a derivative value at its root.
   Supply disjoint ordering certificates identifying the unique earliest
   event among all pairs. If $b=T$, certify whether the exact root is $\tau=T$;
   an undecided endpoint equality returns `unresolved`. A grazing/uncertain derivative, ambiguous overlap
   or simultaneous multi-contact is unresolved; lexicographic inspection
   does not settle physical simultaneous impacts.

4. At $\widehat\tau=b$, a certified bound
   $\epsilon_{\rm obs}\ge|\gamma_{ij}(\widehat\tau,U(\widehat\tau))|$
   with $\epsilon_{\rm obs}\le\epsilon_{\rm guard}$. The provider includes
   all evaluation errors in this bound. If $a=b$, the root certificate gives
   $\tau=a=b$; set the lag bound $\Delta=0$. If $a<b$, set
   $$\Delta:=\min\left\{b-a,\frac{\sqrt2\eta_{\rm ref}+\epsilon_{\rm obs}}{\nu}\right\},$$
   the nonnegative lag bound supplied by
   [[lem-transverse-hybrid-event-time-error]] using the continuation bound
   from item 1 on the whole bracket. Require certified bounds
   $M^-,M^+$ for the incoming/outgoing fields through this lag, and all
   remaining reset-domain and common outgoing solution/tube hypotheses of
   [[lem-reset-error-after-a-mistimed-hybrid-event]]. Include the incoming
   continuation through $b$ in these checks. For the selected pair use the state-reset bound $L_R$
   from [[lem-sphere-contact-guard-normal-and-reset-lipschitz-bounds]], with
   a velocity bound valid for both compared reset inputs. This reset has no
   explicit time dependence. If the reset formula is evaluated inexactly, the
   computed full-state output $\widehat R(U(b))$ must come with a separate
   $\epsilon_R\ge0$ satisfying
   $\|\widehat R(U(b))-R(U(b))\|_2\le\epsilon_R$, where the norm is on the
   full state $(q,v)$; for an exact reset set $\epsilon_R=0$.

5. A certificate that the matched isolated exact events have separation at
   least $\delta$ and count at most $N_{\rm evt}$ under the input endpoint
   policy. For an exact event at $T$, policy `include` processes the reset and
   counts it; policy `pre-impact` reports the endpoint before reset and excludes
   that endpoint event from the processed-event count. Process an initial enabled root at most once. Missing
   endpoint/count/separation bookkeeping is unresolved. In particular $e=0$
   does not establish another isolated transverse event after the reset.

**Procedure.** Initialize the current reported time $t_*=0$, current state to
the input initial state, aligned-start error $E=0$, accepted-event count $j=0$,
and an empty output ledger. While $t_*<T$, request the provider certificates
for every unordered pair on the entire remaining horizon $[t_*,T]$, inspecting
the pair list in increasing lexicographic order. If the provider certifies no
further zero except the permitted just-processed segment-start root, with
nonpenetration and no unlisted zero through $T$, append the segment, its error
bound and certificates, and return `complete`. Otherwise select the certified
unique earliest pair and its bracket $[a,b]$, with upper endpoint
$\widehat\tau=b$. If the provider certifies $\tau=T$ and
$\pi_T=\texttt{pre-impact}$, append the incoming segment through $T$ and return
`complete` with the pre-impact endpoint; do not apply a reset or increment $j$.
If $j\ge B$ or $j\ge N_{\rm evt}$, return `unresolved` with the certified
partial trajectory. Otherwise evaluate the binary impulse formula of
[[thm-frictionless-sphere-binary-impact-impulse-laws]] as the smooth reset
extension at $U(b)$; keep positions fixed and update only the selected two
velocities. The impulse theorem's exact contact/momentum/restitution/energy
laws concern the reference exact incoming contact. A reported approximate
state is not asserted to be exactly at contact; its reset error is recorded.

By [[lem-reset-error-after-a-mistimed-hybrid-event]], set the next aligned
reset-state error bound to
$$E\leftarrow L_R\eta_{\rm ref}+(L_RM^-+M^+)\Delta+\epsilon_R.$$
The outgoing $M^+\Delta$ term accounts for the reference trajectory's flow
from its earlier true reset to the reported time. Append the reported reset,
set $t_*\leftarrow b$, update the current reported state and set $j\leftarrow j+1$. Restart the smooth integrator at $b$, discard the previous local
reconstruction, and start the next accumulated dense-error ledger. If
$t_*=T$, return `complete` with the endpoint reset included. Otherwise repeat
the loop. These recurrences compare only matched smooth-mode prefixes and
post-reset states at aligned times; they make no same-clock state-error
assertion between an exact jump and its later reported jump.

Output `complete` with the certified trajectory, event brackets, error ledger
and certificates, or `unresolved` with the certified prefix. If an endpoint
root is included, it is counted under $N_{\rm evt}$ and must fit within $B$.
Any missing continuation/error, enclosure, margin, ordering, separation/count
or restart certificate, failed reset domain, or depleted provider budget returns
`unresolved` without an event-absence claim. To allocate a slot for every
certified event under the selected endpoint policy, choose $B\ge N_{\rm evt}$.

Enumerate every unordered pair once per smooth segment. Root-solve guard
evaluations, dense reintegration and restart-error calculation are charged
separately from one inspection per pair. No neighbor-search acceleration,
frictional solver, or simultaneous-contact solver is specified.

## Remarks

The general mode/guard/reset terminology is
[[def-hybrid-mode-guard-reset-system]]. For each pair transition declare
crossing orientation $\sigma_{ij}=-1$, so the incoming bracket condition
$\dot\gamma_{ij}\le-\nu$ is exactly
$\sigma_{ij}\dot\gamma_{ij}\ge\nu$. If one full mode graph is required,
use an initial label $m_0$ and one label $m_{ij}$ for each unordered contact
pair, all carrying the identical smooth field. From every label, include a
transition to each $m_{ij}$ carrying that pair's guard and reset; this includes
a self-transition at $m_{ij}$. Start in $m_0$. Simultaneous or ambiguous roots
remain unresolved, so the graph imposes no physical priority rule. This avoids
assigning many distinct guards to one self-transition. The four general interfaces used here apply to explicitly
supplied valid dense/error and interval certificates. The event page's
rational residual-checker construction is one sufficient provider branch;
this procedure does not import that construction as an evaluator for every
$C^1$ force or an irrational reported reset state.
