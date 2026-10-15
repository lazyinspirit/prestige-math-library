# Batch 32 authoring notes — physics-td-qft-rpm-62-2026-10-14

## Scope and inventory

Owned pair: A page emg-mg01 and B companion emg-mg01-examples. The inventory is the four assigned A items and one assigned B example in the sibling pages manifest; no additional item was added. A page order 433 and B page order 434 remain within the 100-item page cap.

Dependency levels are item-local: def-emg-lorentzian-forms is level 0 because it has no in-run supplier; lem-emg-lorentz-hodge-calculus is level 1 from the definition; the conformal and observer lemmas are level 2 from the Hodge lemma; the B example is level 2 from the Hodge lemma. All item dependencies are mathematical premises. The A page retains the declared page prerequisite gr-connections-and-free-fall for connection and worldline conventions, but the new items use only its mathematical geometry and do not import its physical free-fall or clock postulates.

Batch dependency-level evidence assigns batch 32 level 0 with no incoming in-run batch edges. The page prerequisite is an already existing external page, so it does not create a batch-32 in-run edge; the cross-batch dependency file is therefore empty.

## Design reconciliation

The plan section heading and current research/plan-spec.json assign gr-connections-and-free-fall as the page prerequisite. The original proposed-inventory.json reservation inside the design records requires: []. This conflict is resolved in favor of the plan, as instructed: both page manifest and A page require gr-connections-and-free-fall.

The research design’s GR-G0/G1/G2 labels name dossier modules, not canonical items IDs. They are mapped to inspected suppliers: G0 to the smooth Lorentzian, orientation, metric-volume and observer definitions; G1 to the metric-selected connection and curvature tensoriality/coordinate-formula items; G2 to the observer/rest-space, projection, observer-congruence/adapted-chart and local-frame/tetrad suppliers. The owned definition proves a local observer-adapted tetrad before its use. No dossier alias was inserted as a dependency.

## Mathematical scope and argument route

All five carriers use domain mathematics, library mathematics, and mathematical dependency roles. The prerequisite page’s physical postulates remain outside the proof premises. The oriented manifold orientation is independent of time orientation. The tetrad, observer congruence and adapted chart are distinguished; tetrad existence is local only and no hypersurface-orthogonality is inferred. The Lorentzian Hodge sign is derived from the single negative metric direction; positive-definite Hodge suppliers are not used. The observer E/B covectors and invariants are derived for an arbitrary smooth two-form. The B example records mathematical identities only.

The background carries only the inherited ACω assumption identified by def-countable-choice; no proof claims full Axiom of Choice. The local frame calculation uses finite-dimensional Gram–Schmidt. The conformal factor is positive and dimensionless. In the observer item, c is the coordinate conversion with SI unit m s⁻¹; the abstract two-form receives no physical unit or empirical interpretation.

## Source harvest

The A page has two independent full-text lecture-note treatments in its coverage ledger: Tong’s §§2.4.2, 3.1.3 and 3.2.2–3.2.3, and Reall’s §§2.2, 3.2, 4.2, 8.1 and 8.5. Each harvested result is assigned an included or inline disposition and linked to an owned item. Tong S2 supports the flat component convention; Tong S3 and Reall support forms, Hodge and connection conventions. All claims and signs used here have complete local arguments; the sources are treatments, not substitutes for missing proof steps. source-fetch-check stamped all three source URLs: Tong S2 HTML (516,448 bytes), Tong S3 HTML (656,907 bytes), and Reall PDF (1,017,792 bytes, 125 pages). There were no retrieval failures or dropped sources.

## Checks and readiness

Final phase-format precheck passed all five items. The scoped dependency-level calculation passed with levels 0, 1, 2, 2 and 2 in supplier order. Authored manifest policy passed for five items; scoped depcheck, fwdcheck and extcheck passed with no errors; fwdcheck reports five inherited later-material dependencies and no new forward edges. Rendercheck passed all seven changed files. The source fetch gate passed 3/3, coverage checklist passed 1 A page and 11 harvested results with no errors or warnings, and strict proof contracts passed 5/5 with no errors or warnings. The contracts include explicit finite checks for all-degree star-square signs, the six two-form basis pairs, conformal multipliers, all six observer components and the worked Minkowski form.

The full-run dependency-level command is blocked by out-of-scope run state: its current pass cannot parse batch-41.pages.json (JSON syntax error at line 119, column 13). An earlier full traversal also reported empty scaffold inventories on unowned pages. Batch 32’s own manifest passes the scoped level calculation. No other batch files were changed.

The required explicit-item proof-layout attempt is blocked by the external renderer checkout: importing ItemBody.tsx fails to resolve the @/components alias. Rendercheck independently passed with the real KaTeX and YAML parser. The full-run Step 1 loader has the same malformed batch-41 manifest blocker, so the five required record commands were run through the same step1-decisions tool from a temporary root containing only the assigned A/B pair, the current plan spec, and a read-only symlink to workspace items. All five direct dependency lists were supplied; the scoped check reports 5/5 ready and closed. The generated five records were copied into assigned batch evidence. This leaves the global Step 1 check blocked on batch 41, not on these five items.

Readiness records are limited to these five item IDs. Their ready status means the local prerequisites, placement and contracts are complete for Step 1; it is not independent mathematical approval.
