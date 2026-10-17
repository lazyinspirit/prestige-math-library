# Owner cycle 1 substantive notes

Run: numerical-optimization-dynamics-2026-10-16. Batch 13. Original session: 01a143af-818a-7752-a78b-b1226af04081. Canonical sources read only.

## Evidence and scope

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md fully. Read immutable state prepared interface snapshots and retained consumer paths, repair-1.json, original native result and attempt-1 result/prompt, and owner triage as navigation. Old evidence contains Statement/Definition text and paths, not complete historical proof/dependency/source preimages. Current interface comparison finds exactly the six interfaces in navigation.json. The implicit differentiation theorem Statement matches its prepared snapshot; no inference about complete historical source bytes is made. Original native result records the same session and auto_compact_token_limit 500000; current effective compaction configuration is not exposed.

Read approved DIF2 scope in plan-numerical-optimization-track.md:222–246, optimization-audit.md Contract DIF2:294–334, owner-authoring-direction.md retained local proof obligation, and owner-rounded-derivative-escalation.md certified solve section:68–93. Rich scope is retained.

## Completed current batch reads

Read all 23 current assigned items in full and both AD pages in full. Read Euclidean derivative and C1 definitions, local continuity proof, chain-rule proof, Banach derivative sum/product/chain proof, Euclidean IFT proof, mean-value inequality proof, SVD proof, both floating-point models, theta-product proof, and rounded residual certificate proof. Read suppliers before deciding downstream uses. No external literature reading is claimed for this continuation; the local arguments suffice for the issues identified.
- def-finite-straight-line-computational-program: current complete item read; substantive disposition follows in continuation result.
- lem-implicit-sensitivity-error-controlled-by-residual: current complete item read; substantive disposition follows in continuation result.
- thm-implicit-differentiation-forward-and-adjoint-formulas: current complete item read; substantive disposition follows in continuation result.
- alg-forward-mode-automatic-differentiation: current complete item read; substantive disposition follows in continuation result.
- alg-reverse-mode-automatic-differentiation: current complete item read; substantive disposition follows in continuation result.
- lem-finite-straight-line-program-defines-c1-map: current complete item read; substantive disposition follows in continuation result.
- lem-finite-straight-line-program-defines-c2-map: current complete item read; substantive disposition follows in continuation result.
- alg-checkpointed-reverse-schedules: current complete item read; substantive disposition follows in continuation result.
- alg-differentiate-finite-fixed-point-iteration: current complete item read; substantive disposition follows in continuation result.
- alg-forward-over-reverse-hessian-vector-product: current complete item read; substantive disposition follows in continuation result.
- thm-forward-mode-computes-directional-derivative: current complete item read; substantive disposition follows in continuation result.
- thm-reverse-mode-computes-gradient: current complete item read; substantive disposition follows in continuation result.
- thm-reverse-mode-work-and-tape-storage-bound: current complete item read; substantive disposition follows in continuation result.
- thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds: current complete item read; substantive disposition follows in continuation result.
- thm-finite-iteration-sensitivity-bound-and-residual-limitation: current complete item read; substantive disposition follows in continuation result.
- thm-forward-over-reverse-computes-hessian-vector-product: current complete item read; substantive disposition follows in continuation result.
- thm-graph-gradient-error-from-local-jacobian-perturbations: current complete item read; substantive disposition follows in continuation result.
- rem-real-arithmetic-graph-versus-rounded-execution: current complete item read; substantive disposition follows in continuation result.
- lem-certified-linear-solve-jacobian-and-pullback-error: current complete item read; substantive disposition follows in continuation result.
- ex-branchwise-ad-at-the-absolute-value-switch: current complete item read; substantive disposition follows in continuation result.
- ex-implicit-linear-solve-adjoint: current complete item read; substantive disposition follows in continuation result.
- ex-reverse-euler-trajectory-tape: current complete item read; substantive disposition follows in continuation result.
- ex-shared-expression-forward-and-reverse-graph: current complete item read; substantive disposition follows in continuation result.

## Consumer closure

Current canonical deps, justified_by, references and wikilinks were traced per changed supplier, resolving aliases, then unioned with retained old paths beginning at a genuinely changed interface. Distinct changed roots can be consumers of each other. Result: 36 item consumers. No additional relevant current alias edges. A separate raw-ID scan of items and library found no extra textual users outside this set and seven page consumers. This is source navigation, not a gate or certification.

All 36 item consumers were read in full, including the previously omitted reverse algorithm. Read seven relevant pages in full, including newly identified direct-transcription-and-numerical-ode-optimal-control-examples. Read two prepared false-positive consumers in full and their nonsingular-stage supplier; their actual uses start at the unchanged implicit theorem. Read continuous-adjoint and dominated-pathwise-gradient supplier statements/proofs. External unrelated Hilbert-space/SQP/control proofs were not re-audited; the review checks their uses of the AD cone.

## Findings and obligations

1. Reverse algorithm: resolved. Repeated parent slots are separately accumulated, all operation/input bars start at zero, scalar output gets seed 1 in the correct accumulator, Euclidean transpose is supplied by the graph definition, strict branches/domain status obey supplier. With T=0 an existing input output returns (x_i,e_i); with n=0 an operation output returns empty input gradient. n=T=0 has no possible designated output and is not an admissible graph. Operations after an earlier output contribute zero; input output gives zero operation bars and no extra contributions.

2. Fixed-point algorithm: exact forward-call expansion remains unspecified. Its input supplies no direction, yet its scalar-output directional supplier returns only one action. Propose explicit loops over output coordinates and parameter basis directions, with coordinate output nodes and admissibility/K=0 conventions, preserving full Jacobian target. Its sole item consumer is the finite-iteration theorem; its recurrence proof remains sound with that expansion. AD A page remains pending this definition clarification.

3. Continuous-adjoint supplier: statement uses p(0)^T D_theta u_0 amid column gradients; proof 1.2 and 1.3 likewise mix row/column forms. For parameter dimension greater than one the statement is dimensionally invalid. Propose column-consistent statement and the two proof clauses. This is an unchanged external prerequisite defect discovered at an actual use, not a newly changed original interface. Its only direct item user is the discrete-continuous estimate; current descendants are already in the reviewed cone.

4. Discrete-continuous gradient estimate: proof 2.1 replaces the generic finite-graph running sum by the quadrature-weighted sum of widehat q_n without an explicit equality hypothesis/definition. Propose explicit decomposition of both gradients with endpoint vectors, requiring precisely that weighted representation. The numerical node error estimate and its subsequent triangle inequality then prove the displayed bound; state accuracy alone still does not suffice. Its direct item consumers are the transcription algorithm and state-error counterexample; all their current descendants/pages were inspected.

Next action: record exact unique excerpts/replacements below this owner directory; root must independently review and apply. No canonical edits or metadata work.

## Completed proposal and downstream check

Exact unique source excerpts/replacements are in proposed-edits.json; candidate-source-repair.patch contains the eight proposed replacements in four source files. Neither artifact has been applied. Supplier order: correct the column convention in the continuous ODE adjoint, supply the discrete comparison's weighted representation premise, expose that premise in the transcription consumer; independently expand the finite fixed-point algorithm's scalar/directional calls. The continuous supplier's common-tube flow and row-pairing prerequisites were read in full and support the proposed column proof.

Reviewed-consumer-dispositions.json records concrete decisions for all 36 actual item consumers and seven pages. Proposed-consumer-consequences.json traces the four candidate interface changes; their entire current item closures are subsets of those already read. Fixed-point consumer theorem needs no text change; transcription descendants consume primal algebra, independent NLP regularity or objective consistency and need no further repairs. Comparison counterexample remains valid. Page placements remain; AD A, discrete-adjoint A and transcription A await their supplier repairs, while the four example/simulation pages require no source change.

Original six changed interfaces and the missing reverse-algorithm disposition are resolved on current sources. Overall owner decision is needs-source-repair for the newly identified procedure specification and prerequisite issues. These issues are present in current sources; no claim is made that the original six changes caused them. No canonical source, original evidence, engine state, metadata or foreign-run file was changed. No tests, formatters, validators, hashes, gates or recertification were run. Historical full-source preimages and current atomic byte stability remain unavailable; this is substantive owner evidence only.
