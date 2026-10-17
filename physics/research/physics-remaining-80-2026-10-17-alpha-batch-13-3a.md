# Batch 13 Step 3a adjudication

Run: `physics-remaining-80-2026-10-17`; group: `batch-13`.

Scope: exactly `page:13:emg-g02`, plus the ordered CRITICAL/HIGH risk reviews. No touched-item, reader-finding or refuter-finding obligations are routed.

## Level 5 checkpoint

Reviewed `pthm-emg-potentials-and-topological-limits` completely against all five direct carriers: `post-emg-covariant-maxwell`, `def-emg-topological-sector`, `lem-emg-local-potential-construction`, `lem-emg-sphere-flux-holonomy`, and `thm-stokes-theorem-for-smooth-singular-chains`. Also inspected the circle definition/gluing proof, geometry/unit definition, Lorentzian/forms interfaces, set-sized quotient definition and finite-parametrization integration proposition. The radial primitive, tetrahedral cycle/Stokes obstruction, north/south transition criterion and flat holonomy calculation are sound at the uses reviewed. Current risk review is complete in the owning contract; no item edit or interface change was needed.

The adopted premise is smooth `dF=0`; all outputs are conditional or explicit constructed examples. Coordinates and units, excluded origin, zero flux, both transition directions, winding signs and integer gauge removal were checked. No empirical premise or statistical inference occurs. Independent acceptance and the full transitive supplier audit remain distinct from this scoped mathematical review.

## Level 6 checkpoint

Completed the HIGH risk review for `ex-emg-classical-flux-versus-normalization`. Its sole dependency is the already-reviewed theorem. All four verification steps hold: unit normalized flux gives transition degree -1; the noninteger ratio lies strictly between 0 and 1; zero field admits the zero potential; the half-integer and integer flat cases have holonomies -1 and 1, respectively, with explicit gauge removal in the integer case. These are constructed model parameters, not measurements. No item edit was needed.

## Page decision

`page:13:emg-g02`: **accepted_repair**, repair confidence 1. The reader reports two original issues: an undefined “nonbounding sphere” descriptor and misdirected cover-diagram arrows. The current page replaces the descriptor with a finite smooth singular 2-cycle `c` satisfying `boundary c=0`. For a smooth global potential `A`, Stokes at degree 2 gives `integral_c dA=integral_boundary(c) A=0`; the punctured-space supplier supplies a cycle of flux `4pi b`. The diagram places `O` between the two patches and sends it left/right to them; both patches map upward to the sphere. Each arrow is a defined inclusion, and both composites are the inclusion of the same overlap. No proof relies on the diagram.

The immutable page pre/post hashes are respectively `242e20f5887e13ae4e1d5fa08fe6958d23e6a1191febfabb4a1e3ff4a3486e33` and `3cb0edc8c3ad687b5d5895a052ae1be109a145375df19d6caddb4a4260f03e54`; the current page matches post. Original defect descriptions above are attributed to the reader report; absent historical page bytes were not read or reconstructed. All three current item raw hashes equal both pre and post; the B page is also unchanged. The current `emg-g03` summary uses no conflicting claim. No item Statement, Definition, physical scope or empirical qualification changed, so no item consumer repair is triggered.

Closed defect rows: `physics-remaining-80-2026-10-17-3a-batch-13-cycle-definition` and `physics-remaining-80-2026-10-17-3a-batch-13-cover-arrows`, both owned at `3a-adjudicate` and referenced by the sole page decision. No extra item decisions are owed.

## Sources and limits

Consulted [Tong, General Relativity](https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S2.html), §§2.4.2–2.4.3 (especially the closed/exact definitions and local/global distinction), and [Tong, Gauge Theory](https://davidtong.org/pdfs/teaching/gauge-theory/gauge.pdf), §1.1.2, printed pp. 6–8 (PDF indices 16–18), equations (1.5)–(1.8) and the adjacent quantum condition. For the latter, convert the orthonormal vector potential to its one-form by multiplying its phi component by `r sin(theta)` and identify the source parameter `g=4pi b`; the authored south-minus-north difference is then `-2b dphi`. The source's charged-matter phase condition is not adopted. Tong's informal Poincaré exposition is context only: the exact star-shaped hypothesis and coefficient proof come from the local radial supplier. The mathematical arguments were checked in the current local carriers, rather than inferred from source authority or review stamps.

No published-supplier defect was confirmed in the uses inspected; no published or imported source was edited, and no published-ledger entry is needed. This review does not audit every transitive analysis/geometry proof, adopt every source claim, or certify other batches. The earlier contract risk prose about missing carriers has been superseded only in the two completed current-use risk reviews; draft status and independent-acceptance qualifications remain.

## Checks and handoff

Initial required risk report exited 0: MODERATE 4 for the definition, CRITICAL 11 for the theorem, HIGH 5 for the example. Only the two mandatory contract risk reviews, this report/decision file, and required ledger records are authored by this dispatch. No item or page source was edited by the adjudicator; post-edit proof reflow, precheck and proof-layout are therefore inapplicable. Focused checks follow below. No judge, stamp, self-certification or engine gate battery is requested or performed.


- Final required `node tools/physics-support/risk-report.mjs research/physics-remaining-80-2026-10-17-batch-13.proof-contracts.json --require-reviewed`: exit 0, `0 error(s), 3 item(s) routed`; both required reviews complete.
- `node tools/physics-support/rendercheck.mjs library/einstein-maxwell-models/emg-g02.md`: exit 0, one explicit page passes YAML and KaTeX checks. This check does not compile or independently validate TikZ arrows; their endpoints and inclusion meanings were inspected directly above.
- Exact excerpt check: all six contract citation quotes occur verbatim in their current supplier carriers. JSON/coverage check: exactly one routed page decision, no invented untouched-item decisions.
- Ledger append: two rows accepted by the serialized ledger tool; generated ledger view refreshed. The owned-consumer frontier record was appended with unchanged interfaces and current-use evidence.

Blockers: none in the dispatched scope. No unresolved prerequisite defect was confirmed in the reviewed uses. Report and decisions are ready for engine hashing and its gate battery; no engine-owned transition has been initiated.
