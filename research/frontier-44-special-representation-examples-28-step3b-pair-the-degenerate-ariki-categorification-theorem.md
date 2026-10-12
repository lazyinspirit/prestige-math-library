# Step 3b — scaffold audit and authoring: `the-degenerate-ariki-categorification-theorem`

Run `frontier-44-special-representation-examples-28`, batch 18 (orders 1792/1793),
role `alpha-high`, label
`step3b-pair-the-degenerate-ariki-categorification-theorem-bc300f859335353c`.
A page `the-degenerate-ariki-categorification-theorem` (7 scaffold items, all
authored here), B page `the-degenerate-ariki-categorification-theorem-examples`
(4 scaffold items, all authored here). Category
`special-topics-in-representation-theory`. Only this pair is owned; batch 18
contains this pair only, so the shared batch files carry no sibling rows.
Report opened at entry 2026-10-10 before any edit.

## Owned IDs and open obligations at entry

A page, in the dispatch's dependency order (level, then page order, item ID):

| level | id |
|---:|---|
| 36 | `def-degenerate-cyclotomic-hecke-tower-and-residue-functors` |
| 39 | `thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module` |
| 40 | `thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module` |
| 41 | `thm-degenerate-ariki-categorification` |
| 42 | `rem-degenerate-and-nondegenerate-ariki-theorems-have-distinct-parameter-ranges` |
| 42 | `thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one` |
| 42 | `ex-projective-simple-dual-bases-in-a-degenerate-cyclotomic-block` (B) |
| 43 | `prop-sign-duality-and-ringel-duality-match-fock-space-involutions` |
| 43 | `cex-the-degenerate-ariki-theorem-does-not-imply-the-nondegenerate-one` (B) |
| 43 | `ex-degenerate-ariki-decomposition-numbers-in-small-rank` (B) |
| 44 | `ex-charge-reversal-and-fock-involution-in-a-small-example` (B) |

Open obligations at entry:

1. Audit the owner-integrated ROUND1 scaffold (statements, strategies, sources,
   direct suppliers, proof route) against the current on-disk inputs.
2. Author all 11 item files under `items/` in the exact dependency order above,
   each with complete Facts, numbered proof and boundary discussion.
3. Author both pages under `library/special-topics-in-representation-theory/`.
4. Write `research/frontier-44-special-representation-examples-28-batch-18.proof-contracts.json`
   with exact citation quotes, per-step inputs and boundary dispositions.
5. Run the dispatch's focused checks (proof-layout, precheck, rendercheck,
   content policy, strict proof contracts, dependency levels, validate-plan).
6. Reconcile actual supplier uses; flag each unfinished supplier with its exact
   ID and consuming step below; record item decisions.
7. Preserve the sibling-free batch files and all owner decisions; no publication,
   no gate, no owner stamp, no shared-ledger write.

## Supplier status at entry (audited, not assumed)

Direct in-run prerequisite pair named by the dispatch:
`arakawa-suzuki-functors-and-higher-level-schur-weyl-duality` (batch 17; A page
26 items, B page 5 items) — **not yet authored** (no `items/*.md` files exist for
its IDs at entry; scaffold statements only). A second in-run supplier pair,
`parabolic-category-o-and-fock-space-bases` (batch 16), is in the same state.
Both pairs were in flight at entry (engine status). All 11 owned items consume
at least one batch-16 or batch-17 supplier item; per the dispatch every consumer
is authored anyway and its decision is left escalated until the supplier and the
actual proof use are reconciled. Exact supplier ID / consumer ID / consuming
step rows are appended below as each item is written.

All other direct suppliers used by the 11 items are published files present in
`items/` at entry (`def-axiom-of-choice`, the four Grothendieck/K_0 items, the
Hom-pairing item, adjoint functor Grothendieck item, the finite-algebra
projective-basis theorem, CRT, `def-generic-type-a-hecke-algebra`, and
`thm-quantized-sl-two-string-formulas`).

## Checkpoint log

(Updated after each item; resume here.)

### Checkpoint 1 — all eleven items authored (2026-10-10)

All eleven item files are written under `items/`, matching the owner-integrated
ROUND1 statements and strategies, each with Facts, numbered proof (or
verification) and boundary discussion. Per-item checks:
`node tools/tsx-run.mjs tools/precheck.mts <path>` and
`node tools/proof-layout.mjs <path>` and `node tools/rendercheck.mjs <path>`
pass for every file (details in the final summary). Authoring notes:

- `def-...-tower-...` (level 36): projectors via CRT, centrality of content
  idempotents via symmetric polynomials, single-block via the full-generator
  centre comparison from the actual16 single-linkage lemma and actual17
  full-projective full faithfulness; level-0 convention and the $I=\{0\}$
  vanishing witness. The item file additionally carries
  `thm-split-simple-projective-hom-pairing-has-dual-bases` (published) in its
  deps because the Cartan-pairing descent and dual bases are used in (3).
- `thm-...-g-zero-...` (level 39): full costandard identification, Specht
  classes, Chevalley/residue operators, divided-power integral forms, rational
  ground cyclicity, crystal reachability, and the explicit index-two witness
  $\mathbb ZD_{00}\oplus2\mathbb ZD_{01}\oplus\mathbb ZD_{11}$.
- `thm-...-projective-k-zero-...` (level 40): split $K_0$ basis of covers, the
  right-exact left adjoint used only on projectives, the standard-lattice
  inclusion, the normalized pairing $C_0(P_A,D_B)=\delta_{AB}$, and the
  Chevalley adjoints.
- `thm-degenerate-ariki-categorification` (level 41): simultaneous
  identifications, decomposition formula, Chevalley operators, simple
  translation rule, parameter-one normalization and rectification, and the
  arbitrary-$I$ double-cut extension.
- `rem-degenerate-...-parameter-ranges` (level 42): scope separation, generic
  bridge and the level-one $\xi=-1$ radical witness, no numbered proof
  (remark; precheck `n/a`).
- `thm-degenerate-specht-decomposition-numbers-...` (level 42): inverse chart
  $R=D^{-1}$, rectangular matrix, standard-only diagonal, and the type-$A$
  polynomial dictionary with distinct entry/column stabilizers.
- `prop-sign-duality-and-ringel-duality-...` (level 43): sign isomorphism,
  multipartition transpose, Specht/simple comparison, parameter-one descent,
  full Young and signed generators with the Schur-cover/Ringel-dual algebras,
  opposite-parabolic/Serre-quotient transport, and the global-versus-chunk
  domains.
- `ex-degenerate-ariki-decomposition-numbers-in-small-rank` (level 43): the
  four monomials, transition vectors, normalized projection, the $3\times4$
  decomposition matrix and the height-two block computation.
- `ex-projective-simple-dual-bases-...` (level 42): $B=\mathbb C[x]/x^2$,
  symmetric-trace self-duality, $M_2(\mathbb C)\oplus B_+\oplus B_-$, projected
  dual bases, categorified $e,f$, and the index-two lattice.
- `cex-the-degenerate-ariki-theorem-...` (level 43): generic-only bridge, the
  full level-one $\xi=-1$ algebra witness $\mathbb C[T]/(T+1)^2$ versus
  $\mathbb C[S_2]$, and the root-of-unity $A^{(1)}_{e-1}$ scope mismatch.
- `ex-charge-reversal-and-fock-involution-...` (level 44): the eight-label
  height-$\le2$ window, full height-two algebra, projected half-sums, ambient
  transpose on the highest constituent, and the full Young/signed tables with
  $\widetilde Y(A)=\sigma^*Y(A^t)\cong Y(A^\downarrow)$ on $\mathrm{Rev}$.

### Supplier flags (unfinished suppliers; consumers authored, decisions pending)

Every consumer below imports at least one batch-16 (`parabolic-category-o-...`)
or batch-17 (`arakawa-suzuki-...`) supplier item whose item file was absent at
authoring time. Exact supplier IDs and consuming steps are collected in the
"Open obligations" section below after the batch checks; each affected item
decision is recorded as `escalate` unless the supplier file has landed by the
time of recording.

## Supplier flags: exact unfinished IDs and consuming steps

As of final authoring (2026-10-10, after the eleven item files were written),
ten direct suppliers of this pair were still unauthored; all belong to batch 17
(`arakawa-suzuki-functors-and-higher-level-schur-weyl-duality`). The batch-16
supplier pair landed during this authoring session; its landed statements
(`thm-the-parabolic-o-grothendieck-group-is-the-integral-fock-module`,
`lem-the-fock-pairing-matches-projective-simple-and-standard-costandard-pairings`,
`thm-the-highest-weight-fock-submodule-has-the-qg-global-bases`,
`thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule`,
`def-dual-canonical-canonical-and-quasi-canonical-fock-bases`,
`lem-type-a-tableau-central-summands-are-single-linkage-blocks`,
`def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality`
and the other batch-16 deps) were read at their current statements for the
proof uses below; those consumers still escalate only because of the batch-17
items. Still-missing supplier ID → consumer item → consuming steps:

| supplier (batch 17) | consumer | consuming steps |
|---|---|---|
| `def-degenerate-cyclotomic-hecke-algebra` | `def-degenerate-cyclotomic-hecke-tower-and-residue-functors` | 3.1 |
| | `thm-degenerate-ariki-categorification` | Facts/Given |
| | `rem-...-distinct-parameter-ranges` | Remarks (c) |
| | `prop-sign-duality-and-ringel-duality-match-fock-space-involutions` | 1.1, 4.1 |
| | `ex-degenerate-ariki-decomposition-numbers-in-small-rank` | 2.2 |
| | `ex-projective-simple-dual-bases-in-a-degenerate-cyclotomic-block` | 1.1, 2.1 |
| | `cex-the-degenerate-ariki-theorem-does-not-imply-the-nondegenerate-one` | 2.1 (via the remark's level-one presentation) |
| | `ex-charge-reversal-and-fock-involution-in-a-small-example` | 2.1 |
| `def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks` | `def-degenerate-cyclotomic-hecke-tower-and-residue-functors` | Definition (4), 5.1 |
| | `ex-charge-reversal-and-fock-involution-in-a-small-example` | 3.1 |
| `def-stable-range-and-block-idempotent-for-higher-level-schur-weyl-duality` | `def-degenerate-cyclotomic-hecke-tower-and-residue-functors` | 1.1, 3.2 |
| `thm-higher-level-schur-weyl-endomorphism-isomorphism` | `def-degenerate-cyclotomic-hecke-tower-and-residue-functors` | 1.2 |
| `thm-the-whittaker-functor-is-exact-and-fully-faithful-on-the-required-projectives` | `def-degenerate-cyclotomic-hecke-tower-and-residue-functors` | 1.2, 3.2 |
| | `prop-sign-duality-and-ringel-duality-match-fock-space-involutions` | 1.3 |
| `thm-higher-level-schur-weyl-double-centralizer` | `thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module` | 1.1 |
| | `thm-degenerate-ariki-categorification` | 2.3 |
| | `prop-sign-duality-and-ringel-duality-match-fock-space-involutions` | 1.3 |
| `thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects` | `thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module` | 1.1 |
| | `thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module` | 1.2 |
| | `thm-degenerate-ariki-categorification` | 1.2 |
| | `thm-degenerate-specht-decomposition-numbers-...` | Given (exact quotient) |
| | `prop-sign-duality-and-ringel-duality-match-fock-space-involutions` | 1.3 |
| | `ex-degenerate-ariki-decomposition-numbers-in-small-rank` | Given |
| | `ex-projective-simple-dual-bases-in-a-degenerate-cyclotomic-block` | Given |
| `def-the-higher-level-schur-weyl-projective-generator-and-schur-functor` | `thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module` | 1.2 |
| | `thm-degenerate-ariki-categorification` | 2.3 |
| | `prop-sign-duality-and-ringel-duality-match-fock-space-involutions` | 1.3 |
| | `thm-the-degenerate-cyclotomic-hecke-g-zero-...` | Given |
| `thm-category-o-translation-intertwines-residue-induction-and-restriction` | `thm-the-degenerate-cyclotomic-hecke-g-zero-is-the-dual-highest-weight-module` | 3.1 |
| | `thm-degenerate-ariki-categorification` | 1.2 |
| `thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer` | `thm-degenerate-ariki-categorification` | Given |

Each flagged consumer was authored fully, with the supplier use visible in the
listed step and with the supplier's statement provisionally inspected in the
current manifests; the affected item decisions are recorded as `escalate` with
defect type `dependency` (see below). The owner must resolve each escalation
after the batch-17 items are authored and their actual proof use is verified;
no consumer proof asserts a stronger interface than the provisional supplier
statements in the current manifests.

## Checks actually run

- `node tools/tsx-run.mjs tools/precheck.mts <all eleven item paths>` → 10
  proof-bearing items checked, 0 failing (the remark has no phase proof and is
  reported not-applicable).
- `node tools/proof-layout.mjs <all eleven item paths>` → 11 items, 75 steps,
  0 defects (final batched run after the last edit).
- `node tools/rendercheck.mjs <all eleven items + both pages>` → 13 files, no
  wikilink-in-math, unbalanced delimiters, multiline displays or KaTeX/YAML
  errors.
- `node tools/content-policy.mjs research/frontier-44-special-representation-examples-28-batch-18.pages.json`
  → 11 scoped items, 0 error(s), 0 warning(s).
- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  → 861 items checked across 100 pages, no errors (the eleven stored
  `dependency_level` labels 36/39/40/41/42/42/42/43/43/43/44 recompute
  consistently).
- `node tools/proof-contract.mjs research/frontier-44-special-representation-examples-28-batch-18.proof-contracts.json --strict`
  → 0 error(s), 0 warning(s), 11/11 items with contract entries, exact citation
  quotes, per-step inputs and all eight boundary axes.
- `node tools/boundary-audit.mjs ... --fail-on-contradicted --fail-on-template`
  → no template clusters, no contradicted rows (exit 0).
- `node tools/citation-fidelity.mjs ... --fail-on-missing-quote` → every
  recorded quote appears in its cited item (exit 0).
- `node tools/finite-smoke.mjs ...` → 0 errors (no finite-smoke obligations on
  these items).
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28`
  → for this pair, the only report is the inherited `redundant-prereq` advisory
  (page requires `grothendieck-groups-and-graded-cartan-pairings` directly while
  already reaching it through `arakawa-suzuki-...`); the run-level FAIL is two
  `b-leaf`/`undeclared-prereq` errors in `kashiwara-operators-and-crystal-lattices`,
  another pair's in-flight work, not this batch.
- `node tools/item-dependency-levels.mjs` and `manifest-deps` agree with the
  unchanged batch-18 manifest; the manifest and coverage files were not edited.

## Item decisions recorded

`tools/step3-decisions.mjs record-item --decision escalate --defects '["dependency"]'`
was recorded for all eleven items, each with a one-sentence reason naming the
authored content and the still-unfinished suppliers: the tower definition; the
$G_0$ full-costandard theorem; the $K_0$ standard-lattice theorem; the main
categorification theorem; the parameter-range remark; the Specht
decomposition-number theorem; the sign/Ringel proposition; the small-rank
decomposition example; the projective/simple dual-bases example; the
nondegenerate-implication counterexample; and the charge-reversal example. The
decisions were recorded after the item files and contracts were final; because
batch-17 suppliers were still gathering at record time the escalations remain
owner-held. If the reviewer's later recheck finds a consumer whose only missing
suppliers have landed and whose proof use is verified, the ordinary current
owner decision is required to close it.

## Published concerns and scope

No published item was edited, no new item or pair was added, no owner decision
was overridden, and no shared ledger, plan, coverage or state file was written.
Two published items are load-bearing and were read at their current statements:
the Grothendieck/K_0 basis and Hom-pairing items of
`grothendieck-groups-and-graded-cartan-pairings`, and the generic type-A Hecke
presentation used by the parameter-range remark. No defect was found in them.
One scope note for Step 4: the three item files
`def-degenerate-cyclotomic-hecke-tower-and-residue-functors`,
`thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module`
and `thm-degenerate-specht-decomposition-numbers-are-canonical-basis-coefficients-at-one`
add published items to their frontmatter `deps`
(`def-hecke-induction-and-restriction-functors-on-degenerate-cyclotomic-blocks`
was restored to match the manifest, and
`thm-split-simple-projective-hom-pairing-has-dual-bases`,
`thm-finite-dimensional-algebra-projective-classes-form-a-split-k-zero-basis`,
`thm-finite-length-grothendieck-groups-have-simple-class-bases` were added);
these are published, order-neutral additions and the stored dependency levels
are unchanged. The pair's scope decision remains current because the manifest
scope entries were not modified.

## Handoff state

Authored and checked: all 11 item files, both pages, the batch-18 proof
contracts, the two in-run prerequisite flags and this report. Checks passing:
precheck, proof-layout, rendercheck, content policy, dependency levels, strict
proof contracts, boundary audit, citation fidelity, finite smoke. Open
obligations: the ten batch-17 supplier items above (their actual statements must
be compared with the listed consuming steps before the escalations can close);
the owner resolution of the eleven `escalate` decisions; and Step 4 splicing of
the manifest item lists into `research/plan-spec.json` (not this dispatch's
write scope). No publication, gate pass or audit stamp is claimed.

### Additional record (post-report checks)

- `node tools/manifest-deps.mjs research/frontier-44-special-representation-examples-28-batch-18.pages.json`
  → 11 items, 0 errors (manifest unchanged).
- `node tools/depcheck.mjs` (corpus-wide) → no finding names any item, page or
  file of this pair; the run-wide `published-unaudited` rows are pre-existing
  content outside this batch and are not touched here.
- The final batched invocation
  `node tools/proof-layout.mjs items/<all eleven item files>` was the last
  command run against these items after all edits: 11 items, 75 steps, 0
  defects.
