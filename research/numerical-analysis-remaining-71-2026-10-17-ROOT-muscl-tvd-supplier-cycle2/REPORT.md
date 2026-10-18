# Second/final MUSCL TVD owner review and focused repair

This is the second and final escalation review/repair cycle. It records substantive findings and actual focused repairs, not acceptance or certification. No third owner cycle is proposed.

## Actual completed native state checked before edits

Read the actual `.autopilot/numerical-analysis-remaining-71-2026-10-17/state.json` and `research/numerical-analysis-remaining-71-2026-10-17-dispatch/beta-batch-32-refresh-dd343d13-225a-49ce-805c-e36b251803f0.result.json`. State records this exact refresh completed at `2026-10-17T13:15:16.665Z`; the result records exit code 0, `ok: true`, complete/unaborted terminal status, and the same end time. Read the actual final continuation notes. The run remains at `1-scaffold`; this packet makes no run transition or resolution claim.

## Findings and exact canonical repairs

The sharp-CFL theorem's Statement, actual method and central proof are sound. Two minor but mathematically inaccurate proof sentences were corrected, solely in `items/thm-na-musc-minmod-forward-euler-tvd-under-sharp-cfl.md`:

1. Step 3.1 said that if either velocity or time step is zero, the flux difference is zero. A zero time step need not make that difference vanish. It now distinguishes zero velocity (both fluxes vanish) from zero time step (the flux difference is multiplied by zero). The identity conclusion is unchanged.
2. Step 4.1 described every update stencil as cells $i-2,\ldots,i+1$. That is the positive-velocity stencil; the negative-velocity reflected branch instead uses $i-1,\ldots,i+2$. The sentence now states both stencils and says no stencil meets two distinct support copies. The period-at-least-seven argument and all signed-velocity sharpness cases are preserved.

Exact pre-edit bytes are preserved in `before-thm-na-musc-minmod-forward-euler-tvd-under-sharp-cfl.md` in this directory. No Statement or Definition, frontmatter, metadata, dependency, source citation, contract, manifest, level, readiness record, stamp, plan, page, engine state or native evidence was edited. These proof-only corrections require root's ordinary bookkeeping currency work; previous native check/readiness claims were not refreshed or adopted here.

## Full comparison with the cycle-1 proof

Read the actual new canonical theorem, canonical reconstruction Definition, original CFL-one witness, current A page, corrected controlling PE02 design, cycle-1 typed proof and cycle-1 report. The canonical theorem preserves every substantive cycle-1 branch, with additional explicit periodicity and negative-speed witness details:

- The actual increments are $d_i=U_i-U_{i-1}$ and $m_i=\operatorname{minmod}(d_i,d_{i+1})=hs_i$. The original method still uses direct reconstructed-upwind forward Euler with no predictor, no restricted execution domain and the same face conventions.
- For $a>0$ and nonzero $d_i$, both slope ratios in $C_i=\mu[1+(m_i/d_i-m_{i-1}/d_i)/2]$ lie in $[0,1]$, including negative differences. When $d_i=0$, both slopes vanish and the declared $C_i=\mu$ gives the same identity. Thus $C_i\in[\mu/2,3\mu/2]$ and lies in $[0,1]$ for $\mu\le2/3$, including equality.
- Subtraction gives the exact incremental recurrence $d_i^+=(1-C_i)d_i+C_{i-1}d_{i-1}$. Triangle inequality, cyclic reindexing for periodic data, and absolutely convergent nonnegative series for bi-infinite finite-variation data prove TVD without an unstated summability or boundary assumption. The constant-period case $N=1$ is expressly included.
- The negative-speed fluxes use $U_{i+1}-m_{i+1}/2$ and $U_i-m_i/2$. Reflection $V_j=U_{-j}$ gives $m_j^V=-m_{-j}$ and exactly the positive-speed recurrence; reflection preserves the variation sum. Zero velocity and zero time step are covered correctly after the sentence repair.
- For all $2/3<\mu\le1$, the original finite bump has initial TV 2 and updated entries $(1/2-3\mu/4,1-\mu/4,1/2+3\mu/4,\mu/4)$. The sign/order calculation gives TV $3\mu>2$. The canonical proof supports arbitrary positive speed and mesh by choosing $\Delta t=\mu h/|a|$, then reflects for negative speed. Period $N\ge7$ leaves four zero initial cells and three zero updated cells separating copies. The repaired stencil sentence handles either speed. At the endpoint, the same bump becomes $(0,5/6,1,1/6)$ with TV 2.
- The original CFL-one counterexample remains intact: updated entries $(-1/4,3/4,5/4,1/4)$ and TV 3. It is neither deleted nor narrowed.

The corrected controlling design and A-page statement reflect this exact two-thirds theorem while preserving all BV/periodic, signed/zero/endpoint and full sharpness scope. The method remains executable at larger CFL numbers. There is no Hancock construction, consumer-input restriction, ENO/WENO scope cut or unsupported extension to nonlinear fluxes, systems or arbitrary boundaries. No remaining mathematical gap was identified in this escalation's current theorem after the two focused sentence repairs.

## Actual consumer dispositions

Exact current text search finds the new theorem used only by its A-page placement and summary; no existing mathematical item consumes it. Re-inspected the ten original Definition consumers at their relevant actual uses:

| Item | Focused disposition |
|---|---|
| `lem-na-eno2-reconstruction-third-order` | Separate nodal interpolation selector; no CFL/TVD transfer. Preserve. |
| `lem-na-weno5-optimal-linear-reconstruction` | Cell-average candidate moment identities and Taylor error. Preserve. |
| `thm-na-musc-minmod-second-order-on-smooth-data` | Face-state accuracy with nonvanishing derivative; no time-step premise. Preserve. |
| `cex-na-musc-minmod-forward-euler-not-tvd-at-cfl-one` | Required exact CFL-one refutation of the original method. Preserve. |
| `thm-na-weno-js-fixed-epsilon-fifth-order-reconstruction` | Fixed-epsilon nonlinear reconstruction accuracy; no MUSCL TVD conclusion. Preserve. |
| `ex-na-minmod-extremum-clipping` | Quadratic-maximum slope clipping; no update claim. Preserve. |
| `cex-na-unlimited-centered-reconstruction-overshoots` | Explicit unlimited-slope counterexample, distinct from minmod; no conflict. Preserve. |
| `ex-na-smooth-linear-advection-reconstruction` | Exact affine face/update identity at arbitrary time step; no all-data finite-variation claim. Preserve. |
| `ex-na-weno-js-critical-point-epsilon-scaling` | Separate cell-average WENO epsilon-scaling calculation; unaffected. Preserve. |
| `ex-na-burgers-godunov-musc-shock` | First-step zero minmod slopes and separate monotone first-order convergence baseline; no invocation of the linear MUSCL TVD theorem. Preserve. |

The current Definition contains terminology and dimensional-epsilon clarifications relative to the early cycle-1 text; its actual MUSCL slopes, face states, upwind flux and direct update are unchanged. Relevant ENO/WENO uses remain compatible. This cycle changes no original Statement/Definition and introduces no new consumer propagation obligation. The current A page has the intended theorem placement and corrected summary. Its B page and invariant-domain page contain no contrary TVD claim requiring repair.

For the Burgers consumer, read its actual current application and the current monotone-convergence supplier's Statement/Facts interface: datum has bounded BV and is not globally L1; the example carries ACω, does not invoke the additional DC branch, uses $F(a,b)=a^2/2$ on the invariant interval $[0,1]$, coordinate constants $(1,0)$ and $\tau/h=1/2$. These match the supplier's full CFL and positive lower ratio requirements. This is only a focused interface check, not a new audit of batch 29. The separate reported batch-29 coverage/readiness hold is being reconciled by root; this packet neither reruns those checks nor claims that hold resolved, and edits no batch-29 carrier or metadata.

## Actual source consultation and checks

Re-inspected the complete relevant Droniou §§3.1–3.3 through equation (3.3.8), PDF pp.31–35, from the existing complete text `/tmp/na-droniou-scalar-hyp.txt`. URL: https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf . Equations (3.1.2), (3.3.1) and (3.3.8) confirm the actual direct method, minmod slope and sufficient $3\mu/2\le1$ bound. The source's maximum-principle/entropy argument is not substituted for the locally supplied TVD and sharpness proof. No unrelated source rereading or new retrieval is claimed.

After the final actual canonical edit, ran exactly:

`node tools/proof-layout.mjs items/thm-na-musc-minmod-forward-euler-tvd-under-sharp-cfl.md`

Exit code 0; output: `proof-layout: 1 items, 4 steps, 0 defects`.

No tests, hashes, recertification, readiness, other validators or gates were run. No mathematical acceptance, independent native review credit or approval is asserted.
