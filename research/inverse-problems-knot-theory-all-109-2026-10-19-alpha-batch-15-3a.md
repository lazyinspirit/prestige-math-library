# Batch 15 Step 3a adjudication

Run: inverse-problems-knot-theory-all-109-2026-10-19. Group: batch-15.

Reviewed in generated dependency order. Coordinate basis: full current proof and square-sum, completeness and orthonormal-basis interfaces checked; finite-tail estimate, empty truncation and choice-free construction sound. Risk review complete; no decision owed.

Weighted coefficient spaces: accepted reader enumeration correction to m+(2^ell-1)+k. Its consecutive blocks start at m and cover every subsequent coordinate; inverse weighting reconstructs every ell-two vector under countable choice. Completeness, rational finite-support density, basis norms and contraction inclusion checked, including r=0 and empty finite family. Actual Parseval and orthogonal reconstruction statements read. Risk review complete.

The following checkpoints complete all remaining routed work.

Prior definition: full current Definition and all declared supplier interfaces reviewed. Borel D makes the restriction and measurable pushforward well-defined; empty D admits no such prior, D=X and point masses are consistent. Refuter 15:1 confirmed (citation-inaccurate); visible GN reference corrected from 6.1.1 to 1.2.2 after checking book contents and section opening (printed p.6). Definition unchanged; touched repair amended and risk review complete. No consumer interface change.

Gaussian-series lemma: accepted the reader finite-Pythagorean bound supporting covariance convergence; independently checked all six steps and exact MCT, scalar Gaussian-limit, Riesz, covariance/Bochner and Fernique interfaces. Nonnegative squared coefficient sums prove almost-sure and L2 convergence; measurable null-event extension needs no completion of the probability space. Degenerate eigenvalues are valid. DS Theorem 2.10 and Remarks 2.11, printed pp.18–20, checked directly; general weighted claim is proved locally. Refuter 15:4 confirmed and visible locator amended to Theorem 2.10/Remarks 2.11. Risk complete; no interface change.

Ellipticity example: accepted corrected title and contextual locator repair. Full Example, three verification steps and exact normal-density/measure/domain interfaces checked; positive mass on [0,1/2] forces mu([1,2])<1, including endpoints. Identity restriction is measurable. Risk review complete, no interface change or further repair.

Besov example: all verification steps and exact supplier statements checked. Summable weighted variances give each fixed subcritical regularity; IID squared-normal SLLN gives level averages tending to one, hence threshold divergence. Zero scaling coefficients and r=0 included; no simultaneous uncountable probability-one claim is used. The coefficient norm is explicitly defined. DS Theorems 2.5–2.6 and proofs checked, printed pp.13–16. Refuter 15:2 confirmed; corrected visible locator only. Risk complete; no interface change.

Trace-class example: all six verification steps checked. Positive reindexing and dyadic summability are correct; Riesz coordinates identify covariance and the quotient completion with sum j²x_j²<infinity. Truncations prove both completion directions, finite-support density and x_j=1/j establish dense proper RKHS. Polish tightness and the exact centered tight Gaussian support theorem give full support under explicit AC/CC. Refuter 15:3 confirmed; visible DS reference corrected. Risk complete; no interface change.


## Decisions and records

Exactly ten decisions are in `inverse-problems-knot-theory-all-109-2026-10-19-alpha-batch-15-3a-decisions.json`: six touched carriers and four flagged refuter findings. No reader finding, page-carrier decision, or authenticated foreign gate is owed. The coordinate-basis item owes only its completed risk review.

| Carrier | Touched verdict | Refuter obligation / verdict | Closed defect |
|---|---|---|---|
| lem-ip-weighted-coefficient-spaces-are-hilbert | accepted_repair | none | ipkt109-b15-weighted-enumeration |
| def-ip-prior-on-a-forward-domain | amended_repair | refuter:15:1 / confirmed_fatal | ipkt109-b15-prior-source-locator |
| lem-ip-gaussian-series-prior-regularity | amended_repair | refuter:15:4 / confirmed_fatal | ipkt109-b15-gaussian-source-locator |
| ex-ip-prior-misses-uniform-ellipticity-domain | accepted_repair | none | ipkt109-b15-ellipticity-title |
| ex-ip-gaussian-series-at-besov-threshold | amended_repair | refuter:15:2 / confirmed_fatal | ipkt109-b15-besov-source-locator |
| ex-ip-trace-class-gaussian-has-full-support | amended_repair | refuter:15:3 / confirmed_fatal | ipkt109-b15-trace-source-locator |

Every completed repair has repair_confidence: 1. The six actual confirmed defects have separate closed, fixed, fatal rows in research/defect-ledger.jsonl, owned at 3a-adjudicate/group-alpha. The reader's added finite-Pythagorean explanation is sound proof enrichment, not an additional fatal defect. Ledger append and generated-view refresh used the serialized native append command.

Compared the immutable pre/post snapshot item hashes: precisely the six routed touched items changed, and the coordinate-basis hash stayed equal. All seven entry carriers matched the post-reader raw hashes (for the four edited labels, verified by reversing only this adjudication's label substitution). Thus the reader's current repairs are authenticated post-reader carriers; the amended verdicts add the still-needed reference corrections. The refuter findings are confirmed from their exact described reference labels in these carriers and independently checked source passages; no acceptance is inherited from the reader. The scope's observed_sha256 values are retained unchanged. No unavailable-preimage exception or owner-authorized current-content substitution was used.

Updated every affected batch-local record: all seven risk reviews in batch-15.proof-contracts.json; four manifest source mappings and the reader-corrected ellipticity title in batch-15.pages.json; source locators/reasons in batch-15.coverage.json; and the five existing owned cross-batch use rows in batch-15.cross-batch-dependencies.json. Historical author notes remain historical: their old source-number claims are superseded by this report and the corrected current coverage, rather than being silently rewritten as new reading. No provenance category changed and no material proof rewrite occurred here; no judge record was present on the four amended items.

## Sources and reading limits

[Dashti and Stuart, full text](https://arxiv.org/pdf/1302.6989): checked equations (1.9)–(1.10), §2.3 Theorems 2.5–2.6 and proofs (printed pp.13–16), §2.4 Theorem 2.10 and proof, Remarks 2.11 (pp.18–20), and Theorem 2.13's Fernique statement (p.21). These locators support the corrected labels. General weighted claims are proved locally using their stated suppliers; the source's power-law model is contextual. No source proof reading for general Fernique is claimed.

[Giné and Nickl, full book](https://www.statslab.cam.ac.uk/~nickl/Site/__files/FULLPDF.pdf): checked contents and §1.2.2 opening (p.6), periodic-characterization proof ending/Exercise 4.3.8, and §4.4.1 (pp.379–380). The contents identifies §6.1.1 as Gaussian likelihoods. The wavelet example defines its own coefficient norm and does not import the exercise as a proved prerequisite. No claim to have read the entire book, or complete wavelet construction/RKHS source proofs, is made. Actual local supplier statements, rather than broad bibliographic headings, support the arguments.

## Scope, consumers and presentation

The batch-1 supplier def-ip-forward-map-and-solution-classes is present; its actual Definition and metric-space interface were read. Current prior-domain and example uses preserve its metric spaces, nonempty U and F:U→Y. Exact local probability, measurability, Hilbert/orthogonal reconstruction, scalar Gaussian law, Riesz, covariance/RKHS, Bochner, tightness, support, moment, independence and SLLN statements were checked as described in the individual risk reviews. No unmet substantial prerequisite or additional undeclared in-run supplier was found.

All original Statements/Definitions/Examples are unchanged, so no downstream defining-interface propagation is triggered. No out-of-batch or published carrier was edited. No new defective published supplier or consumer was identified; the published ledger therefore needs no new row. No withdrawal is proposed. Both pages remain draft frontmatter-only compact-v1 with unchanged inventories. All seven item statements are complete and hyperlink-free, with references afterward. There are no TikZ/tikzcd diagrams in the assigned items/pages, and none is required by these coordinate/series arguments.

## Local checks and handoff

- risk-report on the owning contract before review: seven HIGH/CRITICAL items, zero errors. After all seven specific risk_review records: --require-reviewed reports seven items, zero errors.
- Reflow on the four adjudication-edited item paths: all unchanged, exit 0.
- Precheck on all seven items: six proofs checked, zero failing; definition has no proof phase.
- Rendercheck on seven items and both pages: nine files, zero errors.
- Final proof-layout on all four adjudication-edited paths in one command: four items, sixteen steps, zero defects. It ran after final item edits and reflow.
- Exact obligation inventory check: ten unique owed decisions, with every referenced defect resolving to a closed 3a-adjudicate row.
- Ledger append: six rows added and generated view refreshed successfully. No gate battery or judge cycle was run.

One ad hoc page-inspection script initially used the manifest key page instead of id and stopped with ENOENT before mutation. Corrected inspection read both actual page files; subsequent full-statement/manifest inspection succeeded. This was a mechanical diagnostic, not a mathematical defect.

Live state read from .autopilot/inverse-problems-knot-theory-all-109-2026-10-19/state.json reports stage 3a-read, unpaused; git log's current HEAD is ace06e03bc. These observations only locate this active dispatch and confer no transition or acceptance. No engine state or snapshot was changed. All assigned work is complete; no blocker or unresolved escalation remains. Engine decision-hash stamping and gate battery remain owed to the engine.
