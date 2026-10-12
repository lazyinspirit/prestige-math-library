# Step 3b — pair `geometric-fixed-parts-and-gauss-manin-semisimplicity` (batch 42)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-geometric-fixed-parts-and-gauss-manin-semisimplicity-39f40a61a4f21d8c`.
Owned A page: `geometric-fixed-parts-and-gauss-manin-semisimplicity` (order 1819,
category `algebraic-geometry`, 7 scaffold items). Owned B page:
`geometric-fixed-parts-and-gauss-manin-semisimplicity-examples` (order 1823, 1
scaffold item). Batch 42 contains only this pair, so the shared batch files
(`…-batch-42.pages.json`, `…-batch-42.coverage.json`,
`…-batch-42.cross-batch-dependencies.json`) carry no sibling rows.

## Owned IDs and open obligations (entry checkpoint)

A (all scaffold-only; item files, page, contracts owed):
`lem-regular-trace-kernel-descends-the-complex-socle` (level 0),
`lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity`
(level 0), `def-geometric-polarizable-hodge-variation` (level 1),
`lem-algebraic-open-inclusion-surjects-on-fundamental-groups` (level 8),
`lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations`
(level 16), `thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases`
(level 17), `thm-smooth-projective-gauss-manin-local-systems-are-semisimple`
(level 18).

B (scaffold-only; item file, page owed):
`ex-cyclic-etale-covers-give-geometric-semisimple-weight-zero-monodromy` (level 19).

Open obligations at entry:
1. create `library/algebraic-geometry/geometric-fixed-parts-and-gauss-manin-semisimplicity.md`
   and `…-examples.md`;
2. author all 8 item files in dependency-level order (0, 0, 1, 8, 16, 17, 18, 19),
   rechecking each item's exact suppliers against the current files;
3. sync the batch-42 manifest deps/provenance/axiom_use to the authored items and
   refresh the cross-batch dependency inputs;
4. write `research/frontier-44-special-representation-examples-28-batch-42.proof-contracts.json`
   with exact quotes, per-step inputs and boundary dispositions;
5. run the explicit-path checks (proof-layout, precheck, rendercheck,
   content-policy, depcheck, depsource, manifest-deps, item-dependency-levels,
   validate-plan --run, coverage-checklist, source checks, proof-contract
   --strict, boundary-audit, citation-fidelity, pathcheck, prosecheck) and record
   item decisions with `tools/step3-decisions.mjs`;
6. reconcile supplier uses. The family lemma, fixed-part theorem and
   semisimplicity theorem consume in-run items that were still unauthored at
   entry (batch 33 `lem-hard-lefschetz-splits-a-bounded-t-structure-complex`,
   batch 35 `thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms`,
   batch 38 `lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications`
   and `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures`,
   batch 39 `thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz` and
   `thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties`,
   batch 40 `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`).
   Each consumer is authored regardless; its decision stays escalated until the
   supplier file exists and the proof use is checked against it.

Direct in-run prerequisite pairs to inspect: analytic-constructible-sheaf-foundations,
analytic-derived-six-operations-and-duality, compact-kahler-hodge-foundations,
lefschetz-splitting-in-bounded-triangulated-categories,
logarithmic-hodge-complexes-and-smooth-open-weights,
mixed-hodge-structures-and-strictness, projective-hodge-polarization-foundations.

## Checkpoint log

(one entry per item, in the dispatch's dependency order; all eight item files
were newly authored and now exist in `items/`, and both pages exist in
`library/algebraic-geometry/`)

### Level 0 item 1: `lem-regular-trace-kernel-descends-the-complex-socle`

- **Authored** `items/lem-regular-trace-kernel-descends-the-complex-socle.md`
  (draft, `dependency_level: 0`) to the scaffold statement. Proof: the
  composition-series trace computation identifies the radical of the regular
  trace form with the Jacobson radical $J$ of $B=A_{\mathbb C}$; the rational
  Gram matrix has kernel $J_0=J\cap A$; $W=\{v:J_0v=0\}$ is a rational flat
  subspace with $W_{\mathbb C}$ equal to the annihilator of $J$, which is the
  socle; and $J^{r-1}V_{\mathbb C}$ gives the nonvanishing clause.
- **Audit.** All seven declared suppliers were read as published items
  (Jacobson, Wedderburn--Artin, simple modules over semisimple rings, the
  complex trace-form criterion, the finite-length characterizations, and the
  socle/semisimple definitions). No dependency or statement change; the claim
  needs no choice principle.
- **Checks.** `precheck` PASS, `rendercheck` OK, `proof-layout` 0 defects.
  Decision `accept`, defects `[]`.

### Level 0 item 2: `lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity`

- **Authored** `items/lem-characteristic-zero-scalar-extension-preserves-geometric-local-system-semisimplicity.md`
  (draft, `dependency_level: 0`). Proof: the rational monodromy algebra $A$;
  the complex radical kills every simple constituent and hence all of
  $V_{\mathbb C}$ by the semisimplicity hypothesis, so $A_{\mathbb C}$ is
  semisimple; the rational Gram determinant of the regular trace is nonzero in
  $\mathbb Q$ and hence in every characteristic-zero field $k$; nilpotent left
  multiplications have trace zero, so $J(A\otimes k)=0$; a finite basis
  exhibits $V\otimes k$ as a sum of images of simples and then, by finite
  length, a direct sum.
- **Correction during authoring.** Added the published `def-semisimple-ring`
  dependency so the passage "radical zero $\Rightarrow$ semisimple ring
  $\Rightarrow$ regular module a direct sum of simples" cites the definition it
  uses.
- **Checks.** `precheck` PASS (canonical layering 1.1, 2.1, 3.1, 4.1, 5.1,
  adopted from the checker's proposal), `rendercheck` OK, `proof-layout` 0
  defects. Decision `repaired`/`dependency`.

### Level 1 item: `def-geometric-polarizable-hodge-variation`

- **Authored** `items/def-geometric-polarizable-hodge-variation.md` (draft,
  `dependency_level: 1`) exactly to the scaffold statement: objects, morphisms,
  Hodge direct summands, the polarization convention, and the explanatory
  forward note on the closure/lattice contract. `justified_by` records
  `lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations`,
  which lists this definition as a dependency (acyclic).
- **Audit.** Both declared suppliers read
  (`def-local-system-of-r-modules-and-its-pullback`,
  `def-rational-mixed-hodge-structure`); no choice principle; no claim in the
  definition is asserted without the family lemma's discharge.
- **Checks.** `rendercheck` OK, `proof-layout` 0 steps, `prosecheck` clean.
  Decision `accept`, defects `[]`.

### Level 8 item: `lem-algebraic-open-inclusion-surjects-on-fundamental-groups`

- **Authored** `items/lem-algebraic-open-inclusion-surjects-on-fundamental-groups.md`
  (draft, `dependency_level: 8`). The proof has seven steps: local complex
  charts from the Jacobian criterion plus the holomorphic implicit function
  theorem; smoothing of a based loop by relative Whitney approximation; a
  finite decomposition of the complement into disjoint smooth locally closed
  pieces of real codimension at least two; a cutoff on the circle vanishing at
  the base point and equal to one near the bad set; the perturbation family of
  the published tubular lemma truncated by composition with that cutoff (so no
  unstated localization of the published family is assumed); parametric
  transversality over the finitely many pieces and a good parameter; and path
  connectedness by the same construction applied to a closed-up path.
- **Audit and repair.** The scaffold's route is kept but made honest: the
  authoring draft spoke of perturbations "supported away from the collar",
  which the published family does not provide; the truncation
  $\widetilde{\mathcal F}(p,a)=\mathcal F(p,\chi(p)a)$ supplies exactly that,
  and the truncated map is a submersion wherever the cutoff is positive.
  Dependencies were repaired to the exact suppliers used: the batch-30
  analytic topology definition, the Jacobian criterion, the holomorphic
  implicit function theorem, the chain-dimension definition, the
  transverse-preimage theorem, the partition-of-unity theorem, the relative
  Whitney approximation, the smooth-family/slice definition and the
  connectedness criterion; all targets resolve inside the page's `requires`
  closure and none is in another run batch except the batch-30 definition
  (recorded in the cross-batch input). AC is discharged to
  $\mathrm{AC}_\omega$ explicitly.
- **Checks.** `precheck` PASS (canonical layering 1.1, 1.2, 2.1, 2.2, 3.1, 4.1,
  5.1), `rendercheck` OK, `proof-layout` 7 steps / 0 defects. Decision
  `repaired`/`dependency`.

### Level 18 item: `lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations`

- **Authored** `items/lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations.md`
  (draft, recalculated `dependency_level: 18`). Content: properness and compact
  fibres; local product charts; horizontal lifting of paths via the ODE
  smooth-dependence suppliers with properness preventing finite-time blow-up;
  the transport local systems; identification with the cohomology sheaves and
  the full torsion-quotient integral lattice; the continuous pure Hodge
  decomposition via the spectral-projection argument on the fixed compact
  model; flat Lefschetz operators and the flat rational polarization; and the
  closures under products (Künneth), sums, Tate twists, exterior powers, Hodge
  direct summands, full lattices and pullbacks.
- **Audit and repair.** Dependencies were repaired to the exact suppliers used:
  `thm-projective-morphism-proper`, the projective-analytification lemma, the
  holomorphic implicit function theorem, the three ODE smooth-dependence items,
  the Sobolev/elliptic Fredholm item and the partition-of-unity theorem; the
  earlier scaffold list is preserved in full. The three analytic suppliers
  (compact Kähler decomposition, Hodge–Riemann package, analytic six
  operations) were still unauthored at first audit; they have since been
  authored by their sibling dispatches and their current Statements were read
  and clause-matched (fibrewise decomposition and metric independence;
  primitive sign form and rational polarization; proper base change and the
  product projection). The item's decision was recorded after that
  reconciliation.
- **Checks.** `precheck` PASS (canonical layering 1.1, 2.1, 3.1, 3.2, 4.1, 5.1,
  6.1 adopted), `rendercheck` OK, `proof-layout` 7 steps / 0 defects. Decision
  `repaired`/`dependency`.

### Level 19 item: `thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases`

- **Authored** `items/thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases.md`
  (draft, recalculated `dependency_level: 19`) to the scaffold statement
  including the SNC compactification clause. The proof: the Leray edge map is
  surjective by the centered hard-Lefschetz splitting of $Rf_*\mathbb Q$ in the
  ordinary bounded t-structure; strictness identifies the restriction image
  from $H^m(\overline X)$ with the image of the minimal weight part
  $W_mH^m(X)$ of the logarithmic mixed Hodge structure; the factorisation of
  the restriction through $H^0(S,R^mf_*\mathbb Q)$ gives the single fixed
  quotient Hodge structure; Hodge components of flat sections are flat; the
  general geometric variation is reduced to its realization open with a flat
  Hodge idempotent; and flat sections extend from the dense open to $S$ using
  the fundamental-group surjectivity of the companion lemma, with the converse
  of the "equivalently" clause recorded in the final step.
- **Supplier reconciliation.** The proof consumes
  `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures` at its
  step 1.1 (SNC compactification existence, i.e. only the companion SNC lemma's
  clause) and its step 2.1 (weights at least $m$ and the minimal-weight formula
  $W_mH^m(X)=\operatorname{im}(H^m(\overline X,\mathbb Q)\to H^m(X,\mathbb Q))$,
  with the compactification-independence clause justifying the chosen SNC
  model). At the time of authoring that supplier file did not exist, so the
  consumer was authored with the obligation stated plainly and its decision
  escalated. The supplier was subsequently authored (2026-10-10 23:17 AEST);
  its Statement was read and the consumed clauses match the step-2.1 use
  verbatim, the previously missing proof-contract citation row was regenerated
  (so `proof-contract --strict` is now clean), and the two cross-batch rows were
  moved to `verified`. Qualification: the supplier's own decision is escalated
  on its recorded obligations (the step-3.1 local-computation obligation and
  the inherited Hodge-opposition gap of
  `lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights`),
  which propagate to this consumer. The consumer therefore remains conditional
  and its item decision remains **escalated**: the `step3-decisions` guard
  prevents a review receipt from replacing an escalation, and the final check
  reports the item as "changed inputs require a current owner decision" for the
  owner to resolve once the supplier's obligations are discharged.
- **Checks.** `precheck` PASS, `rendercheck` OK, `proof-layout` 6 steps /
  0 defects. Before the supplier was authored, `proof-contract --strict`
  reported exactly the one expected `citation-fact-uncontracted` error for it;
  after the supplier file appeared and the citation row was regenerated, the
  strict run is clean. Decision `escalate`/`dependency`.

### Level 20 item: `thm-smooth-projective-gauss-manin-local-systems-are-semisimple`

- **Authored** `items/thm-smooth-projective-gauss-manin-local-systems-are-semisimple.md`
  (draft, recalculated `dependency_level: 20`). The proof follows Deligne II
  4.2.6–4.2.7: rational descent of the complex socle and its full lattice; the
  determinant line of a simple socle summand, the fixed square of its
  determinant and the rank-one "square flat implies flat" argument; the
  decomposable-tensor determination of each exterior factor; the Plücker
  recovery of the torus image $tT$; openness of irreducibility by Grassmannian
  compactness and connectedness of $\mathbb C^\times$ making the socle a Hodge
  subvariation; the polarization splitting and induction; and finally the
  coefficient-field conclusion from the characteristic-zero extension lemma.
  The unpublished Schmid footnote in Deligne II 4.2.6 for arbitrary analytic
  variations is explicitly not used.
- **Audit.** All thirteen declared suppliers exist and were read (the two
  algebra lemmas and the fixed-part theorem of this batch, the family
  construction, and the published Grassmannian, Heine–Borel,
  continuous-image, socle, semisimple and finite-length items). The determinant
  square in step 1.1 is justified by the full monodromy-stable integral lattice
  (integral matrices act on $\bigwedge^eW_{\mathbb Z}$ by $\pm1$).
- **Checks.** `precheck` PASS, `rendercheck` OK, `proof-layout` 5 steps /
  0 defects. Decision `accept`, defects `[]` (no dependency or statement
  change relative to the scaffold; the supplier chain carries the fixed-part
  escalation noted above).

### Level 21 item: `ex-cyclic-etale-covers-give-geometric-semisimple-weight-zero-monodromy`

- **Authored** `items/ex-cyclic-etale-covers-give-geometric-semisimple-weight-zero-monodromy.md`
  (draft, recalculated `dependency_level: 21`, on the B page). Verification:
  closed graph in $\mathbb C^\times\times\mathbb P^1$, module-finiteness of the
  coordinate extension, smoothness of relative dimension zero by the Jacobian
  criterion and hence étaleness; the rank-$r$ weight-zero local system with the
  sheet-indicator basis and the flat positive dot-product polarization; the
  cyclic monodromy; and the Fourier decomposition into the $r$ distinct
  root-of-unity characters, with the characteristic-zero conclusion from the
  semisimplicity theorem.
- **Audit and repair.** Added the `thm-jacobian-criterion-smooth-morphism` and
  `def-etale-morphism-schemes` dependencies, which the verification actually
  uses to justify "finite étale".
- **Checks.** `precheck` PASS, `rendercheck` OK, `proof-layout` 2 steps /
  0 defects. Decision `repaired`/`dependency`.

### Final verification pass before handoff

- Re-ran the single batched `proof-layout` command over the eight item paths
  after the last edit: 8 items, 36 steps, 0 defects (nothing reformatted), and
  re-ran `precheck` over the same explicit paths: 7 checked / 0 failing (the
  definition reports not-applicable), with the canonical layerings unchanged.
- Regenerated the batch-42 proof contracts twice from the current item text:
  first because the original generation predated the final step-2.1 edit of
  the semisimplicity theorem (whose replaced argument it still quoted), and
  again after the batch-38 supplier was authored, which supplied the
  previously missing `F3` citation row of the fixed-part theorem. The final
  `proof-contract --strict` run is 8/8 items, 0 errors, 0 warnings, and
  `citation-fidelity` finds 70 citations, every recorded quote present and no
  widening candidates.
- Gates re-run on the final files: `boundary-audit
  --fail-on-contradicted --fail-on-template` clean; `finite-smoke` 0 errors;
  `content-policy` 0 errors / 0 warnings; `manifest-deps` 0 errors;
  `coverage-checklist --require-destination` 2 pages / 31 results / 0 errors;
  `depcheck` clean for the eight owned items once the supplier file existed
  (before that, exactly the two expected unresolved references);
  `depsource --run` 0 unresolved (65 published, 26 draft-page);
  `item-dependency-levels check` clean for all eight owned items at
  0, 0, 1, 8, 18, 19, 20, 21 (remaining run errors belong to other pairs);
  `validate-plan` four run-level `undeclared-prereq` errors, none naming either
  owned page, with only `redundant-prereq` advisories on the owned A page;
  `rendercheck` 8 items + 2 pages OK; `prosecheck` 0 errors / 0 warnings;
  `pathcheck` the three pre-existing foreign-part errors elsewhere, neither
  owned page named; `source-fetch-check` 6/6; `url-sweep` 4/4 live; and
  `source-backing` 6 results backed.
- Record repairs: the A-page summary had claimed the inventory order leads with
  the two algebra lemmas while the page's `items` list in fact leads with the
  definition; the sentence was corrected to "the definition first, then the two
  algebra lemmas" and the item order was left unchanged (both orders are
  dependency-valid). The fixed-part theorem's remark, which still said its
  in-run suppliers were unauthored, was refreshed to record the clause
  reconciliation and the supplier's remaining owner-escalated obligations; the
  batched `proof-layout` (8 items, 36 steps, 0 defects), `precheck`,
  `rendercheck`, `depcheck` and `proof-contract --strict` were re-run after the
  edit and remain clean.
- Decisions: all seven non-escalated receipts were re-recorded at
  12:11-12:12Z after the last item edits and the checks above. Sibling pair
  batch 32 then changed two files inside the shared transitive closure
  (`items/lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions.md`
  at 12:12:44Z and `research/…-batch-32.pages.json` at 12:14:06Z), re-staling
  four receipts, which were re-recorded at 12:16Z. The batch-38 supplier
  `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures` was
  authored at 12:17:27Z inside the closure of the semisimplicity theorem and
  the B-page example, so those two receipts were re-recorded once more at
  12:19Z after the reconciliation above. The final `step3-decisions check`
  therefore closes all seven non-escalated owned items; only the fixed-part
  theorem remains listed, with the owner-action state described in its
  checkpoint (its 12:03Z `escalate` receipt has a stale hash, and a review
  receipt cannot replace an escalation). The fixed-part remark refresh then
  re-staled the four receipts whose closure contains that item (definition,
  family lemma, semisimplicity theorem, example), and all four were
  re-recorded at 12:21Z. The batch-38 pair then continued editing its own
  theorem (12:23:06Z) and manifest (12:23:16Z), re-staling the semisimplicity
  and example receipts, which were re-recorded at 12:23Z; the final check
  closes all seven non-escalated owned items as of that time. Concurrent
  sibling authoring can re-stale receipts again; the last-recorded hashes and
  times are the record.

## Checks actually run

- `proof-layout` over the eight authored item paths (single batched run after
  the final edits): 8 items, 36 steps, 0 defects.
- `precheck` (explicit paths, 8 items): 7 checked / 0 failing; the definition
  reports not-applicable.
- `rendercheck` (8 items + 2 pages): OK, no malformed YAML, no wikilink in
  math, every math span parses under KaTeX.
- `content-policy` on `…-batch-42.pages.json` (item mode): 8 scoped items,
  0 errors, 0 warnings.
- `manifest-deps …-batch-42.pages.json`: 8 items, 0 normalized, 0 errors.
- `depcheck --items-file` (8 owned IDs): clean after the batch-38 supplier was
  authored ("OK — selected item/page checks and their prerequisite cycle
  checks passed"); until that moment it reported exactly the two expected
  unresolved references to
  `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures` in
  the fixed-part theorem.
- `depsource --items-file … --run …`: 0 unresolved; 65 deps to published pages
  and 26 to same-run draft pages (the former single planned-earlier entry is
  the now-authored batch-38 supplier, which sits on a draft page).
- `item-dependency-levels check --run …`: the eight owned items are clean at
  levels 0, 0, 1, 8, 18, 19, 20, 21 (recalculated after the dependency repairs;
  the remaining run-level errors belong to other pairs).
- `validate-plan research/plan-spec.json --run …`: at the final run four
  `undeclared-prereq` errors were reported and none touches either owned page;
  the owned A page carries only `redundant-prereq` advisories arising from the
  plan's prescribed `requires` list, and the errors belong to other pairs.
- `coverage-checklist --require-destination`: 2 pages, 31 harvested results,
  0 errors, 0 warnings.
- `source-fetch-check`: 6/6 fetch-verified and resolved; `url-sweep --coverage
  … --out …-batch-42-url-liveness.json`: 4/4 live, 0 failed; `source-backing`:
  6 authored results, all still backed.
- `proof-contract --strict`: 8/8 items checked, 0 errors and 0 warnings after
  the supplier was authored and the missing citation row regenerated (before
  that it carried exactly the one expected error for the unauthored
  logarithmic supplier); `boundary-audit --fail-on-contradicted
  --fail-on-template`: exit 0, no contradicted or template-reuse dispositions;
  `citation-fidelity --fail-on-missing-quote`: 70 citations over 8 items, every
  quote present, no widening candidates; `finite-smoke`: 0 errors over 0/8
  items carrying obligations.
- `pathcheck` (whole corpus): the three pre-existing foreign-part pathway
  errors in other categories and the draft-unplaced warnings; neither owned
  page is named. `prosecheck` over the 8 items and 2 pages: 0 errors,
  0 warnings.
- `step3-decisions record-item` and `check --run … --phase final`: the seven
  non-escalated receipts were re-recorded at 12:11-12:12Z, again at 12:16Z
  after concurrent batch-32 sibling edits, and the semisimplicity and example
  receipts at 12:19Z after the batch-38 supplier appeared, with a last batch
  of four (definition, family lemma, semisimplicity, example) at 12:21Z after
  the fixed-part remark refresh; the final check closes all seven and lists
  only the fixed-part theorem with the owner-action escalation state. Details
  in the final verification pass above.
- `frontier-dependency-ledger.mjs refresh --run …` after the owned cross-batch
  input was rewritten.

## Supplier reconciliation, added suppliers and published concerns

- The in-run suppliers used by the pair were re-read at their authored current
  statements wherever the files exist: batch 30 `def-analytic-topology-…` and
  `lem-locally-contractible-…`; batch 32 `thm-sobolev-compactness-…`; batch 33
  `lem-hard-lefschetz-splits-…`; batch 34 `def-rational-mixed-hodge-structure`
  and `lem-morphisms-of-mixed-hodge-structures-are-strict`; batch 35
  `thm-compact-kahler-hodge-decomposition-…`; batch 38
  `lem-smooth-quasiprojective-varieties-admit-snc-projective-compactifications`;
  batch 39 `lem-smooth-projective-analytification-…`,
  `thm-kahler-identities-…` and `thm-hodge-riemann-…`; batch 40
  `thm-analytic-sheaf-six-operations-…`. Every consumed clause matched the
  consumer's actual step. The last open supplier, batch 38
  `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures`, was
  authored during the final verification pass (2026-10-10 23:17 AEST); its
  Statement was read, the fixed-part theorem's step-2.1 clauses (weights at
  least $m$; minimal-weight image formula; compactification independence) match
  it verbatim, the missing proof-contract citation row was regenerated and the
  two cross-batch rows now read `verified` with the qualification that the
  supplier's own recorded obligations (step-3.1 local computation; the
  inherited Hodge-opposition gap of
  `lem-mixed-hodge-complexes-give-functorial-cohomology-and-simplicial-weights`)
  are escalated to the owner. Note: the batch-38 pair continued editing its own
  theorem and manifest after that reconciliation (12:23:06Z and 12:23:16Z), so
  the clause match above is against the supplier's 23:17 AEST Statement; the
  Step-4 serial reconciler should re-confirm it against the final version of
  that file.
- Added suppliers (new dependency declarations only; no new item IDs were
  minted): `thm-relative-whitney-approximation-for-manifold-valued-maps`,
  `thm-smooth-partitions-of-unity-exist-on-manifolds`,
  `thm-transverse-preimage-theorem`,
  `def-smooth-family-of-maps-and-evaluation-map`,
  `def-a-smooth-map-transverse-to-an-embedded-submanifold`,
  `cor-a-submersion-is-transverse-to-every-embedded-submanifold`,
  `thm-connected-and-locally-path-connected-implies-path-connected`,
  `def-path-connected`, `thm-jacobian-criterion-smooth-morphism`,
  `thm-holomorphic-implicit-function-theorem`,
  `def-dimension-classical-variety`,
  `def-analytic-topology-and-finite-smooth-algebraic-stratifications`,
  `cor-smooth-variety-classical-scheme-conventions-agree`,
  `thm-projective-morphism-proper`,
  `lem-smooth-projective-analytification-has-rational-kahler-polarization`,
  `thm-fundamental-theorem-for-nonautonomous-smooth-odes`,
  `thm-smooth-dependence-of-ode-solutions-on-parameters`,
  `prop-the-maximal-solution-domain-is-open`,
  `thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition`,
  `def-etale-morphism-schemes`, `def-semisimple-ring`. All are published
  library items except those in the same run, and all resolve.
- Published concerns: none new. No published item or page was edited; the only
  contacts with published content are citations, all verified against the
  current files. The one item whose proof consumes the escalated batch-38
  supplier chain is flagged above; no published defect is suspected.

## Handoff status

- **Completed.** All eight assigned IDs authored and checked; both pages
  created; batch manifest, coverage, cross-batch input and proof contracts in
  place (all 23 cross-batch rows `verified`, contracts strict-clean); item
  decisions recorded for all eight IDs (seven accept/repair receipts current as
  of 12:16-12:21Z, one escalation whose supplier has since been authored and
  clause-reconciled); the A-page inventory-order sentence was repaired.
- **Added suppliers.** None as new IDs beyond dependency declarations.
- **Open obligations.** (1) the escalation of `thm-fixed-part-…`: the batch-38
  supplier is now authored and the step-2.1/1.1 clauses are reconciled (its
  proof-contract citation row and the cross-batch `verified` rows are in
  place), but the supplier's own owner-escalated obligations (step-3.1 local
  computation; the Hodge-opposition gap inherited from
  `lem-mixed-hodge-complexes-…`) are not yet discharged, so the consumer
  stays conditional; once they are discharged the owner must resolve the
  item's escalation and a fresh receipt can be recorded (a review receipt
  cannot replace an escalation). (2) The seven non-escalated receipts are
  current as of 12:16-12:21Z; if further sibling edits re-stale them before
  Step 4, the serial reconciler re-records them (exact files and timestamps in
  the final verification pass). (3) The run-level `undeclared-prereq` and
  dependency-level errors in other pairs are owned by their writers. (4) The
  pre-existing pathway errors in other categories.
