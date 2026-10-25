# Numerical Differential Equations and Stochastic Dynamics rendering audit — lane 04

## Coverage

- Reviewed all 67 assigned frozen titles and complete ItemBodies against their snapshots, current source, and local HTML. Opened all 101 receipt-listed PNG tiles individually with `tools.view_image` at original resolution.
- Source, snapshot, and HTML hashes match all assignment records; every PNG hash matches its capture receipt. Exact per-item and per-tile hashes and capture positions are recorded in [lane-04.json](lane-04.json).
- Capture receipts report zero KaTeX errors, zero TikZ diagrams, and zero diagram failures. No standalone rendering defect or clipping was confirmed. For multi-tile captures, tile boundaries were checked against adjacent tiles and the local HTML context.

## Rendering findings

No confirmed genuine LaTeX, TikZ, or diagram-rendering defect was found in the assigned items. No rendered diagram was present in this lane to check for incorrect labels, maps, domains/codomains, signs, orientations, indices, or crossings/combinatorics.

## Optional diagram candidates

These are source-supported editorial opportunities; the written statements remain self-contained and no proof should rely on a drawing.

- **Explicit Runge–Kutta stage dependencies:** [def-explicit-runge-kutta-tableau-and-stage-map, lines 35–42](../../../items/def-explicit-runge-kutta-tableau-and-stage-map.md:35) explicitly defines a stage graph with each $Y_i$ depending only on earlier slopes $K_j$, then the endpoint $y^+=y+h\sum_i b_iK_i$. A directed acyclic stage graph could show nodes $(t_i,Y_i)\mapsto K_i=f(t_i,Y_i)$, incoming edges $h a_{ij}$ from $j<i$, and the weighted endpoint. Preserve domain/evaluation failure status branches if shown.
- **Two-level MGRIT cycle:** [alg-mgrit-two-level-cycle, lines 40–50](../../../items/alg-mgrit-two-level-cycle.md:40) defines the C/F partition, $P$, $R$, exact coarse Schur complement $RA_tP$, practical coarse solve, and pre/post relaxations. A fine/coarse timeline could label C and F points, distinguish exact $RA_tP$ from practical $A_c$, then show restriction, solve $A_cz=ho$, correction $u\leftarrow u+Pz$, and post-relaxation.
- **Certified hybrid event transition:** [alg-safeguarded-hybrid-event-location-and-restart, lines 33–59](../../../items/alg-safeguarded-hybrid-event-location-and-restart.md:33) specifies mode flow, oriented guards, complete root isolation, earliest enabled event, certified priority ties, reset, and restart. A transition graph should label each $m	o n$ edge by its guard, orientation, and reset; distinguish nontriggering opposite-oriented roots and reserve priority for certified simultaneous roots. Include status exits only as statuses, not as events.
- **Gillespie jump path:** [alg-gillespie-direct-method-for-reaction-networks, lines 38–48](../../../items/alg-gillespie-direct-method-for-reaction-networks.md:38) specifies jumps $x\mapsto x+
u_J$, rates $a_j(x)$, holding time $E_{n+1}/\lambda(x)$, and cumulative-propensity channel selection. A concrete finite reaction example could show states and channel-labelled arrows, with absorption, horizon, and incomplete-budget prefix clearly separated.
- **Size transport and division:** [def-size-structured-transport-and-division-kernel, lines 32–40](../../../items/def-size-structured-transport-and-division-kernel.md:32) combines growth characteristics, nonlocal daughter measure $K_y$, removal, and absorbing outflow at $X$. A diagram could separate parent characteristics moving toward $X$ from the daughter measure supported on $[0,y]$, allowing atomic daughter laws and showing no incoming source at $x=0$.

No changes were made to source items, application files, or publication status.
