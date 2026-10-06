# Step 3b report — pair `lie-algebras-and-infinitesimal-group-schemes`

- Run: `frontier-40-geometry-braids-rep-27` (batch 14, orders 875/876, `scheme-theory`).
- Pair: A `lie-algebras-and-infinitesimal-group-schemes` / B
  `lie-algebras-and-infinitesimal-group-schemes-examples`.
- Role: alpha-high, pair scaffold audit, repair and authoring. Authoring and
  decisions are limited to the 13 owned IDs below; shared batch files are
  edited only for this pair's rows.

## Owned IDs (authoring order = dependency level, then page order and ID)

| level | item | page |
|---:|---|---|
| 0 | `def-lie-algebra-of-a-group-scheme` | A |
| 0 | `lem-differentials-generating-a-free-direct-summand-are-nonzerodivisors` | A |
| 0 | `lem-invariant-differentials-of-a-group-scheme` | A |
| 1 | `lem-free-differentials-imply-regular-in-characteristic-zero` | A |
| 1 | `lem-lie-algebra-tangent-space-and-functoriality` | A |
| 2 | `lem-adjoint-representation-of-an-affine-group-scheme` | A |
| 2 | `thm-smoothness-over-characteristic-zero-via-free-differentials` | A |
| 2 | `ex-additive-and-infinitesimal-group-schemes` | B |
| 3 | `lem-lie-algebra-of-the-general-linear-group` | A |
| 3 | `thm-cartier-smoothness-for-affine-groups-in-characteristic-zero` | A |
| 5 | `thm-lie-bracket-and-adjoint-action-from-infinitesimals` | A |
| 6 | `ex-lie-algebras-of-alpha-p-mu-p-and-gl-n` | B |
| 7 | `cex-lie-algebra-does-not-detect-nonsmooth-group-scheme` | B |

## Open obligations at entry

1. **Unfinished in-run suppliers (batch 13, pair
   `affine-group-schemes-hopf-algebras-and-rational-representations`).** The
   following consumer uses are authored here but their decisions stay escalated
   until the supplier item files exist and the proof use is reconciled:
   - `lem-adjoint-representation-of-an-affine-group-scheme` (and through it
     `lem-lie-algebra-of-the-general-linear-group`,
     `thm-lie-bracket-and-adjoint-action-from-infinitesimals`,
     `ex-lie-algebras-of-alpha-p-mu-p-and-gl-n`) consumes
     `lem-general-linear-group-scheme-and-its-coordinate-ring` (coordinate ring
     `k[x_{ij},d^{-1}]`, comorphism formulas, GL_n(R) description).
   - `ex-additive-and-infinitesimal-group-schemes` consumes
     `lem-hopf-ideal-kernels-and-quotients`,
     `def-commutative-hopf-algebra-over-a-field` and
     `lem-quotient-spectrum-map-is-a-closed-immersion`.
   - `thm-lie-bracket-and-adjoint-action-from-infinitesimals` clause (e)
     consumes `thm-affine-group-scheme-faithful-finite-dimensional-representation`
     (the AC source of that item).
   Since the supplier item files (not merely their scaffold rows) do not exist
   yet, no proof-contract quote can be bound against them; their uses are
   carried in the item statements/proofs as wikilinks and in `deps`, and the
   item decisions remain `escalate` for these consumers.
2. **Pre-splice edge observation (Step 4 input, from the Step 3a report).**
   Three published, strictly earlier dependencies live on home pages outside
   the A page's declared `requires` closure:
   `lie-algebra-representations-enveloping-algebras-and-pbw` (for
   `def-lie-algebra-over-a-field`, `def-derivation-of-a-lie-algebra`) and
   `flat-smooth-and-etale-morphisms` (for `def-smooth-morphism-schemes`,
   `thm-differentials-smooth-locally-free`). Re-checked here: unchanged; the
   Step 4 lane owns the `requires` alignment.
3. **Reported published observations** (carried from batch-14 Step 1 notes, no
   repair attempted here): the published B-homed
   `ex-additive-multiplicative-and-general-linear-group-schemes` already
   constructs `G_a`, `G_m`, `GL_n` but cannot be a dependency of another page
   (B-home rule); this pair therefore carries its own A/B-level construction.

## Resolution of the entry obligations

1. **Suppliers reconciled.** All five batch-13 items used by this pair —
   `lem-general-linear-group-scheme-and-its-coordinate-ring`,
   `lem-hopf-ideal-kernels-and-quotients`,
   `def-commutative-hopf-algebra-over-a-field`,
   `lem-quotient-spectrum-map-is-a-closed-immersion` and
   `thm-affine-group-scheme-faithful-finite-dimensional-representation` — now
   exist as fully authored items in the batch-13 manifest. Each was read at the
   exact claim used here (GL_n coordinate ring and the `R ↦ Aut_R(V⊗_kR)`
   identification for step 3.2 of `lem-adjoint-representation…` and steps
   1.1–1.2 of the two examples; the quotient-Hopf structure for step 1.3 of
   `ex-additive-and-infinitesimal-group-schemes`; the closed-immersion
   criterion for its steps 1.3 and 2.1; the closed immersion `G↪GL_V` for step
   4.1(e) of `thm-lie-bracket-and-adjoint-action-from-infinitesimals`). All five
   pass precheck and proof-layout and carry `accept` decisions with confidence 1
   in the batch-13 pair. The nine batch-14 cross-batch rows were updated from
   `open` to `verified` with the exact claim, use and reconciliation evidence.
   The two item Remarks sections that had announced the obligations
   (`lem-adjoint-representation…`, `thm-lie-bracket…`) were updated to record the
   reconciliation; every consumer decision is `accept` or `repaired` with
   confidence 1 and current hashes.
2. **Pre-splice edge observation (Step 4 input).** Unchanged and re-checked:
   three published, strictly earlier dependencies live on home pages outside the
   A page's declared `requires` closure — `lie-algebra-representations-enveloping-algebras-and-pbw`
   (for `def-lie-algebra-over-a-field`, `def-derivation-of-a-lie-algebra`) and
   `flat-smooth-and-etale-morphisms` (for `def-smooth-morphism-schemes`,
   `thm-differentials-smooth-locally-free`). The Step 4 lane owns the `requires`
   alignment.
3. **Published observation (unchanged).** The published B-homed
   `ex-additive-multiplicative-and-general-linear-group-schemes` already
   constructs `G_a`, `G_m`, `GL_n`, but a B-homed example cannot be a
   dependency of another page, so this pair carries its own A/B-level
   construction (`ex-additive-and-infinitesimal-group-schemes` here). No repair
   attempted; reported only.

## Checkpoints (authoring order)

Per item: level and page, recorded decision, exact claim/conventions, source
locators, dependency use, checks, open gaps. All 13 files are
`items/<id>.md`; all share the item-level checks listed under "Checks actually
run", and none has an open gap after the supplier reconciliation. The pair
scope decision (Step 3a) remains `sufficient` and current.

1. **`def-lie-algebra-of-a-group-scheme`** (A, level 0, `accept`).
   Claim: `Lie(G) := T_{G/k,e} = Hom_k(𝔪_e/𝔪_e²,k) ≅ ker(G(k[ε])→G(k))`, with
   `Lie(G)(R) = ker(G(R[ε])→G(R))` and elements `e^{εX}`; no affineness,
   reducedness, smoothness or characteristic hypothesis; well-definedness
   delegated to `lem-lie-algebra-tangent-space-and-functoriality`.
   Sources: Milne 10.6/display (56) pp. 188–189 (PDF 199–200); SGA 3 Exp. II
   §§3.9–3.11, 4.1; Stacks Groupoids 39.6.3 [047I], 39.6.4 [0BF5] pp. 12–13.
   Deps: the seven published tangent/cotangent suppliers in the manifest row.
   Checks: precheck PASS; proof contract present; layout not applicable
   (definition). Gap: none.
2. **`lem-differentials-generating-a-free-direct-summand-are-nonzerodivisors`**
   (A, level 0, `accept`). Claim: if `θ:Ω_{S/R}→S` is `S`-linear with
   `θ(df)=1` (equivalently `Ω_{S/R}=Sdf⊕kerθ`) and `S` is a ℚ-algebra, then
   `f` is not nilpotent, and is a nonzerodivisor when `S` is Noetherian local;
   no finiteness of `S` over `R`. AC declared and used only through Krull
   intersection. Sources: Stacks Algebra 10.140.6 [00TW]. Deps: derivation and
   Kähler definitions, Krull intersection, local ring/Jacobson.
   Checks: precheck PASS; layout clean; contract strict. Gap: none.
3. **`lem-invariant-differentials-of-a-group-scheme`** (A, level 0, `accept`).
   Claim: `Ω_{G/k} ≅ f*e*Ω_{G/k} ≅ O_G⊗_k(𝔪_e/𝔪_e²)`, free of rank
   `dim_k Lie(G)`, and left translation identifies every cotangent fibre with
   the cotangent space at `e`; no hypothesis on characteristic. Sources:
   Stacks Groupoids 39.6.3 [047I] p. 12 (shearing argument); Milne 10.6/display
   (56). Deps: base-change, differential-of-morphism, cotangent-space and
   fibre-product suppliers. Checks: precheck PASS; layout clean; contract
   strict; the proof is choice-free. Gap: none.
4. **`lem-free-differentials-imply-regular-in-characteristic-zero`** (A, level
   1, `accept`). Claim: for `A` finite type over a characteristic-zero field
   `k` and `𝔮∈Spec A`, freeness of `Ω_{A/k,𝔮}` implies `A_𝔮` regular; no rank
   bound or smoothness assumed; the characteristic-`p` failure is recorded.
   Sources: Stacks Algebra 10.140.4/6/7 [00TU/00TW/00TX], Varieties 25.1
   [04QN]. Deps: the AC-flagged Krull/Nakayama/Hopfian suppliers, the
   separable-residue sequence, conormal exactness, quotient-lifting regularity.
   Checks: precheck PASS; layout clean; contract strict (induction over the
   `𝔪/𝔪²=0` and nonvanishing cases). Gap: none.
5. **`lem-lie-algebra-tangent-space-and-functoriality`** (A, level 1,
   `repaired`). Claim: `Lie(G)(R)` is an abelian group with addition as
   multiplication, naturally `R`-isomorphic to `𝔤⊗_kR`; `Lie(f)` is `k`-linear,
   functorial and injective on closed immersions; only finite selections are
   made, so no choice principle is used. Sources: Milne 10.11, 10.14, 10.19;
   SGA 3 §§3.7, 3.9, 4.1.B note (50); Stacks Groupoids 39.6.4 [0BF5].
   Repair: the `[F11]` (`def-linear-map`) citation in step 4.1 was completed
   during contract work. Checks: precheck PASS; layout clean; contract strict.
   Gap: none.
6. **`lem-adjoint-representation-of-an-affine-group-scheme`** (A, level 2,
   `repaired`). Claim: conjugation restricts to an `R`-linear automorphism
   `Ad(x)` of `𝔤⊗_kR`; `x↦Ad(x)` is a natural group homomorphism, hence a
   morphism `Ad:G→GL_𝔤`; `x e^{εX} x^{-1}=e^{εAd(x)X}`; naturality in `G`.
   Sources: Milne 10.18–10.21, display (61); SGA 3 Def. 4.1.A, Prop. 4.1.1,
   Rem. 4.1.C. Repair: the Remarks now record the reconciliation of the
   batch-13 supplier `lem-general-linear-group-scheme-and-its-coordinate-ring`
   used in step 3.2. Checks: precheck PASS; layout clean (5 steps); contract
   strict. Gap: none.
7. **`thm-smoothness-over-characteristic-zero-via-free-differentials`** (A,
   level 2, `repaired`). Claim: over a characteristic-zero field, a locally
   finite type `k`-scheme with locally free `Ω_{X/k}` is smooth, and conversely
   smoothness gives locally free `Ω` of finite rank; AC declared. Sources:
   Stacks Varieties 25.1 [04QN]; Stacks Groupoids 39.8.2 [047N] recorded as the
   group-scheme consumer. Repair: the Statement cites
   `def-sheaf-relative-differentials`; the missing dep was added to the item
   and the manifest row, clearing the only depcheck finding in this pair.
   Checks: precheck PASS; layout clean; contract strict. Gap: none.
8. **`ex-additive-and-infinitesimal-group-schemes`** (B, level 2, `accept`).
   Claim: `G_a=Spec k[t]`, `G_m=Spec k[t,t^{-1}]` with their Hopf structures
   and point functors; in characteristic `p`, `α_p=Spec k[t]/(t^p)` and
   `μ_p=Spec k[t,t^{-1}]/(t^p−1)` are closed subgroup schemes with length-`p`
   nonreduced coordinate rings `k[s]/(s^p)`; `G_a`, `G_m` reduced. Sources:
   Milne 2.1–2.5 pp. 39–41, 44; Stacks Groupoids §5 Ex. 5.1–5.4. Deps: the
   four batch-13 Hopf-algebra suppliers (uses reconciled; rows `verified`).
   Checks: precheck PASS; layout clean; contract strict (example). Gap: none.
9. **`lem-lie-algebra-of-the-general-linear-group`** (A, level 3, `accept`).
   Claim: `Lie(GL_n) ≅ M_n(k)` via `X↦I_n+εX`, `Lie(G_m)≅k`; the commutator of
   the independent lifts is `I+tt'(XY−YX)`; `Ad(A)X=AXA^{-1}`. Sources:
   Milne 10.7/display (57); SGA 3 Prop. 4.8. Deps: the batch-13 coordinate-ring
   supplier (step 1.1 use reconciled). Checks: precheck PASS; layout clean;
   contract strict. Gap: none.
10. **`thm-cartier-smoothness-for-affine-groups-in-characteristic-zero`** (A,
    level 3, `repaired`). Claim: an affine group scheme of finite type over a
    characteristic-zero field is smooth; all local rings regular, `G` reduced;
    `α_p`, `μ_p` witness necessity. Sources: Milne 3.19–3.23 and 1.37; Stacks
    Groupoids 39.8.2 [047N] with 39.6.3 [047I]; Stacks Varieties 25.1 [04QN].
    Repair: the scaffold's B-page dependency
    `ex-additive-and-infinitesimal-group-schemes` was removed from this A-page
    item (the failure note uses only `def-polynomial-ring-over-a-commutative-ring`,
    `def-quotient-ring`, `def-principal-localisation`), clearing the
    page-cycle/`b-leaf-content` findings; the statement is unchanged. Checks:
    precheck PASS; layout clean; contract strict; AC propagated through the
    cited criterion and regularity suppliers only. Gap: none.
11. **`thm-lie-bracket-and-adjoint-action-from-infinitesimals`** (A, level 5,
    `repaired`). Claim: `ad=Lie(Ad)` gives a Lie bracket with derivations
    `ad(X)`; functoriality; `e^{tX}e^{t'Y}e^{−tX}e^{−t'Y}=e^{tt'[X,Y]}` and the
    equivalent commutator-of-lifts description; `[X,Y]=XY−YX` on `GL_n`;
    uniqueness through faithful finite-dimensional representations (clause (e),
    the only AC use). Sources: Milne 10.20–10.23; SGA 3 Def. 4.7.2, 4.7.3 note
    (79), Cor. 4.8.1, Scholie 4.9. Repair: the Remarks now record that the
    supplier `thm-affine-group-scheme-faithful-finite-dimensional-representation`
    is authored (batch 13, accept) and its statement is exactly the step-4.1(e)
    input, so the AC-inheriting use is reconciled. Checks: precheck PASS;
    layout clean (4 steps); contract strict; `rendercheck` explicit-path OK
    after the earlier `wikilink-in-math` repair. Gap: none.
12. **`ex-lie-algebras-of-alpha-p-mu-p-and-gl-n`** (B, level 6, `accept`).
    Claim: `Lie(G_a)≅k`, `Lie(G_m)≅k` with the stated generators and zero
    bracket; in characteristic `p`, `Lie(α_p)≅Lie(G_a)` and
    `Lie(μ_p)≅Lie(G_m)`; `Lie(GL_n)=𝔤𝔩_n` with `[X,Y]=XY−YX`. Sources: Milne
    10.6–10.11, 10.20; Stacks Groupoids 39.6.4 [0BF5]. Deps: this pair's items
    plus the batch-13 coordinate-ring supplier (indirect use via
    `lem-lie-algebra-of-the-general-linear-group`; row `verified`). Checks:
    precheck PASS; layout clean; contract strict. Gap: none.
13. **`cex-lie-algebra-does-not-detect-nonsmooth-group-scheme`** (B, level 7,
    `accept`). Claim refuted: `Lie(G)` does not determine smoothness; witness
    `α_p`/`G_a` and `μ_p`/`G_m` (nonsmooth finite group with `k[s]/(s^p)`
    against a smooth ambient group with equal Lie algebras). Sources: Milne
    2.5 p. 40 and 10 p. 191. Deps: `ex-additive…`, `ex-lie-algebras…` plus the
    published regularity/standard-smoothness suppliers; AC declared and used
    only through those. Checks: precheck PASS; layout clean; contract strict.
    Gap: none.

## Checks actually run (final state, after all edits)

- `node tools/tsx-run.mjs tools/precheck.mts <13 item paths>` → 12 checked
  (definition skipped from layout), 0 failing.
- `node tools/proof-layout.mjs <13 item paths>` → 13 items, 60 steps, 0 defects
  (single batched run after the final edits).
- `node tools/rendercheck.mjs <13 item paths + 2 page paths>` → OK: 15 files,
  no wikilink-in-math, no delimiter defects, no multiline display, all KaTeX
  spans parse, all frontmatter parses.
- `node tools/content-policy.mjs research/...-batch-13.pages.json research/...-batch-14.pages.json`
  → 28 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/...-batch-14.proof-contracts.json --strict`
  → 0 errors, 0 warnings, 13/13 items checked.
- `node tools/boundary-audit.mjs research/...-batch-14.proof-contracts.json
  --fail-on-contradicted --fail-on-template --json` → 0 templates, 0
  contradicted, 0 upheld-failures (exit 0).
- `node tools/finite-smoke.mjs research/...-batch-14.proof-contracts.json` →
  PASS, 1 check (`matrix-ring-laws-mod-n`, 720 products).
- `node tools/citation-fidelity.mjs research/...-batch-14.proof-contracts.json
  --fail-on-missing-quote` → no missing quotes, no widening candidates.
- `node tools/manifest-deps.mjs research/...-batch-14.pages.json` → 13 items,
  0 errors, 0 normalized.
- `node tools/item-dependency-levels.mjs check --run frontier-40-geometry-braids-rep-27`
  → 894 items across 54 pages checked, no errors; all assigned levels verified
  (0,0,0,1,1,2,2,2,3,3,5,6,7).
- `node tools/coverage-checklist.mjs research/...-batch-14.coverage.json
  --require-destination` → 2 pages, 51 harvested results, 0 errors.
- `node tools/source-fetch-check.mjs --coverage research/...-batch-14.coverage.json`
  → 8/8 sources resolved, 8/8 fetch-verified.
- `node tools/gate-liveness.mjs --run frontier-40-geometry-braids-rep-27
  --contracts research/...-batch-14.proof-contracts.json --checklists
  research/...-batch-14.coverage.json --min-checks 1` → proof-contract,
  coverage-checklist and precheck live; passes.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (with the
  expected mid-scaffold note about not-yet-written pages).
- `node tools/depcheck.mjs` → exit 1 globally on pre-existing findings; after
  the dep repair no finding names any of the 13 items or the two pages
  (filtered run checked).
- `node tools/rendercheck.mjs` / `node tools/fwdcheck.mjs` (corpus runs) →
  exit 1 globally on findings elsewhere; no finding names any of the 13 items
  or the two pages (grep-checked).
- `node tools/step3-decisions.mjs record-item ...` (13 calls,
  `--confidence 1`, examined deps passed) → all recorded `accept`/`repaired`;
  `check --phase final` shows 0 open work entries in this pair.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-40-geometry-braids-rep-27`
  → exit 1, blocked by an unrelated sibling YAML defect (see "Reported
  defects"); the batch-14 input itself is written and re-verified.

## Added suppliers

None. All 13 IDs are pre-scaffold IDs from the batch-14 manifest; no
auditor-created item or page was added, so the auditor-authored certification
class does not apply.

## Reported defects (not repaired here)

1. **Run-wide ledger refresh blocked by a sibling item (confirmed, high
   confidence, not ours).** `node tools/frontier-dependency-ledger.mjs refresh
   --run frontier-40-geometry-braids-rep-27` fails while parsing
   `items/lem-upper-unitriangular-coordinate-ring-is-coconnected.md`:
   `Nested mappings are not allowed in compact mappings at line 3, column 8`
   (`title: Coconnected Hopf algebras: …` — the unquoted `:` inside the title).
   Remedy: quote the title (`title: "Coconnected Hopf algebras: …"`) in that
   item file, then rerun the refresh. Owner: the pair that owns that item; not
   edited here (sibling content).
2. **Pre-splice `requires` gap (Step 4 input).** See Resolution item 2: three
   published lower-order dependencies
   (`lie-algebra-representations-enveloping-algebras-and-pbw`,
   `flat-smooth-and-etale-morphisms`) live outside the A page's declared
   `requires` closure. Required suppliers are published and used through
   exact items; the Step 4 lane owns the `requires` alignment.
3. **Published B-homed construction overlaps this pair's B page.** See
   Resolution item 3; reported, no repair attempted.

## Handoff

- Completed IDs: the 13 owned items above, all fully authored, checks clean,
  decisions recorded (`accept` × 8, `repaired` × 5, confidence 1), plus the A
  and B page files and the batch-14 manifest/coverage/contracts/ledger-input
  rows.
- Added suppliers: none.
- Open obligations: only the cross-pair ledger-refresh blocker above (sibling
  file), and the Step 4 `requires` alignment observation. No item in this pair
  has an open obligation; the supplier uses formerly flagged are reconciled
  with the batch-13 items and recorded as `verified` in the ledger input.
- Next action: retry the ledger refresh once the sibling YAML fix lands;
  otherwise Step 4 reconciles the `requires` closure and Step 5 begins the
  independent audit of this pair.
