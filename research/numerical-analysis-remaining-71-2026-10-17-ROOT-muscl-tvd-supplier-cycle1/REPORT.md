# Cycle 1 MUSCL/minmod supplier research

Research only; no canonical item, page, plan, manifest, run-control or native report was edited. No tests, hashes, gates, readiness, recertification or acceptance were performed. This packet is a substantive proposal for the single real native batch-32 continuation after the current writer drains.

## Confirmed defect and repair

The controlling PE02 clause in `research/plan-numerical-spatial-track.md` falsely promises all-data TVD through CFL one for the exact direct reconstructed-upwind forward-Euler update. The actual definition matches that method exactly and contains no TVD-one assertion. Preserve that Definition without edits and without narrowing its permitted execution domain. The existing CFL-one counterexample remains unchanged and valid.

The genuinely missing new-item inventory is exactly one typed same-A-page result:

- `thm-na-musc-minmod-forward-euler-tvd-under-sharp-cfl`, draft supplied in this directory, dependency level 1, with the sole logical dependency `def-na-high-resolution-reconstruction`. Place it on `high-resolution-tvd-eno-and-weno-methods` before the retained CFL-one counterexample. Its proof supplies the complete incremental-coefficient/variation argument locally, so no separate generic Harten lemma is missing.

The sufficient hypothesis is $|a|\Delta t/h\le2/3$. It is a theorem hypothesis only. The method is still defined and executable for larger time steps; its failure above this bound is retained. The draft also proves sharpness for every $2/3<\mu\le1$, using the exact same finite bump as the original counterexample. There is no Hancock/predictor substitution, no ENO/WENO deletion, and no reduced reconstruction scope.

## Independent mathematical verification

Write $d_i=U_i-U_{i-1}$ and $m_i=hs_i=\operatorname{minmod}(d_i,d_{i+1})$. Actual positive-speed face flux is $a(U_i+m_i/2)$, so the exact update is $U_i^+=U_i-\mu[d_i+(m_i-m_{i-1})/2]$. For $d_i\ne0$, each of $m_i/d_i,m_{i-1}/d_i$ belongs to $[0,1]$; this includes negative increments because the numerator has the same sign or vanishes. Hence $C_i=\mu[1+(m_i/d_i-m_{i-1}/d_i)/2]\in[\mu/2,3\mu/2]$. If $d_i=0$, both involved slopes vanish; choose $C_i=\mu$. Then $d_i^+=(1-C_i)d_i+C_{i-1}d_{i-1}$ and nonnegative coefficients give the variation estimate. Finite periodic summation uses cyclic reindexing; the BV bi-infinite proof uses absolutely convergent nonnegative series, explicitly justified in the draft. The endpoint $2/3$ is included. Reflection $V_j=U_{-j}$, $m^V_j=-m_{-j}$ gives the actual negative-velocity scheme, and zero speed/time step gives the identity.

For the original bump, the updated entries at indices $-1,0,1,2$ are $(1/2-3\mu/4,1-\mu/4,1/2+3\mu/4,\mu/4)$; all other entries are zero. For $2/3<\mu\le1$, their order gives exactly TV $=3\mu>2$. At $\mu=1$ this is the existing counterexample $( -1/4,3/4,5/4,1/4)$ and TV $3$. At $\mu=2/3$ it gives TV $2$. Period at least seven avoids interaction with neighboring periodic copies.

## Exact current source consultation

Read the actual canonical Definition, original counterexample, MUSCL smooth-data theorem, both A/B pages, and all ten current direct Definition consumers listed below. Read the complete relevant §§3.1–3.3 through equation (3.3.8), PDF pp.31–35, in the already available complete Droniou full-text extraction `/tmp/na-droniou-scalar-hyp.txt` (the full PDF is `/tmp/na-droniou-scalar-hyp.pdf`). No claim is made to have reread unrelated chapters. Source URL: https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf . Equation (3.1.2) matches the direct update; (3.3.1) matches the slope; (3.3.8), with positive-advection flux Lipschitz constants $(a,0)$, yields $3a\Delta t/(2h)\le1$. The source gives a sufficient maximum-principle/entropy context. The draft does not attribute sharpness or the local TVD proof to the source; those are proved directly here. Its `ai-altered` provenance reflects that explicit source/local distinction.

## Required text repairs, all confined to actual affected claims

1. In the controlling PE02 Scope paragraph of `research/plan-numerical-spatial-track.md`, replace the exact clause `prove MUSCL/minmod TVD under \(|a|\Delta t/h\le1\)` by `prove the unchanged direct forward-Euler MUSCL/minmod update is TVD for bi-infinite finite-variation data or periodic data under \(|a|\Delta t/h\le2/3\), including equality, by its nonnegative incremental coefficients; prove this constant sharp within the original CFL range through one using a finite-support witness for every \(2/3<|a|\Delta t/h\le1\), and retain the explicit CFL-one counterexample`. Keep all surrounding ENO/WENO, barrier, system and reconstruction claims intact. The later same-frontier closure clause then refers to this corrected bound without requiring further changes.

2. In the A-page Objective, replace its final two sentences (beginning `The direct reconstructed-upwind forward-Euler MUSCL update in the design`) by: `The unchanged direct reconstructed-upwind forward-Euler MUSCL/minmod update is TVD under the sharp CFL bound $|a|\Delta t/h\le2/3$, proved in [[thm-na-musc-minmod-forward-euler-tvd-under-sharp-cfl]]. The exact CFL-one counterexample remains in [[cex-na-musc-minmod-forward-euler-not-tvd-at-cfl-one]]; the theorem also shows failure for every larger CFL number through one.` Add the theorem ID to the A-page placement list before the counterexample. Preserve the remaining page prose and diagram.

3. `batch-32.notes.md` currently records the defect correctly but says a narrower CFL condition needs owner direction, says `No replacement theorem is claimed`, and has no TVD theorem in its inventory. Preserve its original discovery account as history, then explicitly record the owner-authorized correction, new theorem/dependency/level, actual sharp bound and retained counterexample. Rewrite any current-state sentences saying the design remains unresolved. Do not falsely change the original native dispatch/report bytes or claim old checks covered the new item. The native continuation must integrate its ordinary new-item manifest/contract/source-coverage records and perform ordinary current duties.

4. No change is needed to either Statement/Definition of existing items. In particular do not generalize or rewrite the original CFL-one counterexample: retaining it is an explicit requirement, and the new theorem already carries the full sharpness proof. The B-page and examples need no mathematical edits.

## Complete actual consumer disposition

A read-only dependency scan of current item frontmatter plus exact text search found ten current direct consumers of the unchanged Definition and no additional indirect item beyond that set. All actual bodies were read for their relevant uses:

| Consumer | Actual use and disposition |
|---|---|
| `lem-na-eno2-reconstruction-third-order` | Separate nodal selector/interpolant; no TVD claim. Preserve. |
| `lem-na-weno5-optimal-linear-reconstruction` | Cell-average candidates and ideal weights; no time-stepping TVD claim. Preserve. |
| `thm-na-musc-minmod-second-order-on-smooth-data` | Minmod face accuracy on strictly monotone smooth data; no CFL/TVD premise. Preserve. |
| `cex-na-musc-minmod-forward-euler-not-tvd-at-cfl-one` | Exact unchanged scheme at CFL one; remains valid and required. Preserve. |
| `thm-na-weno-js-fixed-epsilon-fifth-order-reconstruction` | WENO weights/candidates and fixed-epsilon face accuracy; no MUSCL TVD claim. Preserve. |
| `ex-na-minmod-extremum-clipping` | Zero minmod slope at a quadratic maximum; no time update. Preserve. |
| `cex-na-unlimited-centered-reconstruction-overshoots` | Explicitly substitutes unlimited slopes for a counterexample at CFL one half. The theorem is minmod-specific, so no conflict. Preserve. |
| `ex-na-smooth-linear-advection-reconstruction` | Exact affine reconstruction/update for arbitrary step; affine bi-infinite data have infinite variation and it claims no all-data TVD. Preserve. |
| `ex-na-weno-js-critical-point-epsilon-scaling` | Cell-average WENO face order with epsilon scaling; independent. Preserve. |
| `ex-na-burgers-godunov-musc-shock` | Only first-step zero slopes and the separate monotone first-order baseline theorem; no nonlinear extension of the linear TVD claim. Preserve. |

No existing item consumes the proposed new theorem yet. Neither the Definition nor a preexisting Statement changes; there is no supplier-interface propagation to these items. The A-page stale status text, controlling false design clause and batch notes are the actual current text consumers needing the focused repairs above. The invariant-domain page explicitly excludes a MUSCL/ENO/WENO/TVD/time-stepping theorem and needs no repair. Future SSP consumers may instantiate the proved linear minmod branch only at the two-thirds bound and under its data hypotheses; no automatic WENO, systems, Burgers or arbitrary-boundary TVD transfer is authorized.
