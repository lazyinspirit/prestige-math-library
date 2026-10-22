# Batch 35 authoring notes

Run: `physics-non-fluid-129-2026-10-21-r2`  
Pair: `gr-fx07-kerr-and-hidden-symmetry` / `gr-fx07-kerr-and-hidden-symmetry-examples`

## Plan and scope

The reservation at `research/plan-general-relativity-frontier-expansion-track.md` L130 gives order 8013. The current `research/plan-spec.json` and dispatch assign A/B orders 767/768; the current plan controls this conflict. The six required pages match the reservation.

The A page carries the six planned results plus three local additions: `lem-gr-fx-kerr-exterior-properties` verifies the global datum before consumers use it; `def-gr-fx-killing-energy-current` fixes the multiplier sign and density used by B2; `rem-gr-fx-kerr-units-and-physical-parameters` preserves the design's geometric-to-SI convention. The A page has 9 items and the B page has 2 examples, below the 100-item cap. Domains, libraries, dependency roles, physical scopes, and the mathematical/physical separation are preserved.

The exterior definition gives $\Sigma=r^2+a^2(z\circ\pi)^2$ as a global smooth sphere function, so the tensor formula is defined at the rotation axis. The well-definedness lemma defines the time-orientation candidate by a smooth global vector-field formula before nondegeneracy is proved, then identifies it with $-\sharp_g(dt)$ after inverting the metric. The page derives the horizon generator from a regular ingoing extension, the stationary-limit radius from `g(T,T)=0`, the local Hamilton-Jacobi branches from the inverse metric, and the zero Ricci tensor by the signed component calculation. It proves the general Killing-tensor conservation implication. It does not identify the separated constant `Q` with an explicit Kerr Carter tensor, and it makes no irreducibility claim. The source harvest records the Kerr-specific tensor formula in Reall §7.5 as out of scope, consistently with the inventory and the design warning that any irreducibility statement needs regular-frame verification. B2 is a local scalar-stress sign calculation; it asserts no global on-shell solution, Penrose process, stability result, or observation.

## Sources and retrieval

Two independent full-text treatments were inspected for the A page:

- Matt Visser, [*The Kerr spacetime: A brief introduction*](https://arxiv.org/pdf/0706.0622), §4 Ricci-calculation discussion (PDF p. 12), §5 Boyer-Lindquist form (pp. 14–15), §9 horizons (pp. 24–27), §10 ergospheres (pp. 30–31), and §11 Killing vectors (pp. 36–37).
- H. S. Reall, [*Black Holes* lecture notes](https://www.damtp.cam.ac.uk/user/hsr1000/black_holes_lectures_2024.pdf), §§7.2–7.6 (PDF pp. 93–103): Kerr/Kerr-Newman context, ingoing coordinates, geodesic Hamilton-Jacobi separation, Carter constant, ergosphere, and Penrose-process discussion.

`source-fetch-check --stamp` fetched and stamped both URLs; the final check reports 2/2 fetch-verified and 2/2 resolved. No retrieval failed, so no recovery retry or `source_resolution` record was needed. Every harvested section/result has a disposition in the coverage file. Source statements contextualize the work; all mathematical claims listed as included have local proofs.

## Dependency and readiness evidence

Batch 35 is level 1 and depends on batch 29. The current batch-29 carrier `def-gr-fx-null-screen-geometry` was inspected at its exact definition and checked with `loadStep1Record`/`step1Decision`: its readiness record is current and `ready` (2026-10-21T11:13:32.243Z). Its null-hypersurface normal and generator interface matches the horizon use.

The exact batch-35 levels, computed together with the batch-29 A suppliers, are:

| Level | Items |
|---|---|
| 0 | `def-gr-fx-kerr-exterior`, `def-gr-fx-killing-tensor`, `def-gr-fx-killing-energy-current` |
| 1 | `lem-gr-fx-kerr-exterior-properties`, `prop-gr-fx-killing-tensor-conservation` |
| 2 | `prop-gr-fx-kerr-horizon-generator`, `lem-gr-fx-kerr-vacuum-verification`, `thm-gr-fx-kerr-hamilton-jacobi-separation` |
| 3 | `rem-gr-fx-kerr-units-and-physical-parameters`, `ex-gr-fx07-1`, `ex-gr-fx07-2` |

`def-gr-fx-kerr-exterior.justified_by` points to the local well-definedness/signature check `lem-gr-fx-kerr-exterior-properties`. This is a postdefinition verification backlink, not a construction input: the lemma necessarily uses the coefficients introduced by the definition. The `deps` graph remains acyclic; its dependency levels place the definition at 0 and the verification lemma at 1.

The batch cross-batch input is a JSON array of 66 exact external edges (60 item, 6 page); all have `status: verified` and nonempty interface evidence. A separate inventory comparison found no missing, duplicate, or extra edge. All 11 final Step 1 records are current and `ready`; these are authoring-readiness records, not independent acceptance.

The unscoped `item-dependency-levels.mjs check --run` cannot pass in the current shared run: other batches still have empty scaffold inventories, and it reports the unrelated existing level mismatches `ex-gr-fx14-1` (3 vs. 4) and `lem-nrqmx-finite-symplectic-implementers` (2 vs. 1). The scoped calculation including batch 29's A page and batch 35's A/B pages checked 16 items with no errors and produced the levels above. The unscoped proof-contract-coverage command likewise stops at the unrelated empty page `qsmx-modular-equilibrium`; its isolated batch-35 scope covers all 7 proof-bearing items (7/7). No other batch was modified.

## Kerr Ricci worksheet

`lem-gr-fx-kerr-vacuum-verification` uses `u=cos(theta)`, writes the metric as the explicit `(t,phi)` and `(r,u)` blocks, records both inverse blocks and all nonzero Christoffel families, and contracts with the library convention `Ric_bd=R^a_bad` and its stated Riemann sign. It gives the base-block cancellations and the full fiber-block result; the axis is included by smoothness of the global tensor. It does not infer `Ric=0` from scalar curvature.

The supplementary exact worksheet is `physics-non-fluid-129-2026-10-21-r2-batch-35.kerr-ricci-worksheet.py`. With SymPy 1.14.0 exact rational arithmetic, it verified both block inverses and reduced all ten independent symmetric Ricci components to zero. The same formulas and sign convention appear in the item proof; the worksheet is calculation evidence, not a substitute for that proof.

## Scoped checks

- `author-check.mts RUN 35` wrote `research/physics-non-fluid-129-2026-10-21-r2-author-check-35.json` with `ok: true`; precheck, renderer, item content policy, and strict proof contracts all passed.
- `proof-layout.mjs` on all 11 changed items: 34 proof steps, 0 defects.
- Strict proof contracts: 11/11 items checked, 0 errors, 0 warnings; 7/7 proof-bearing items covered.
- Scoped `depcheck`, `fwdcheck`, `extcheck`, and `citecheck`: 0 errors and 0 warnings.
- Physics-content validation on an isolated batch-35 manifest root: 11 items, 0 errors. The full run still contains unrelated empty page inventories, so the check was scoped to this pair and its current math-import receipt.
- Source coverage checklist: 1 A page, 12 harvested results, 0 errors, 0 warnings.
- Final source-fetch check: 2/2 verified and resolved.

No tests were added or run. No unresolved batch-35 prerequisite or page-capacity issue remains.
