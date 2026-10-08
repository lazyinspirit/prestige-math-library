# Frontier 42 (Coxeter build) --- batch 3 Step 1 notes

**Owner:** beta, batch 3. **Pair:** `generic-coxeter-hecke-algebras-and-the-standard-basis` /
`generic-coxeter-hecke-algebras-and-the-standard-basis-examples`, orders **1710/1711**, category
`hopf-hecke-algebras` (design label **HH-12**). Outputs: `research/frontier-42-coxeter-32-batch-3.pages.json`
(5 A + 4 B items), `research/frontier-42-coxeter-32-batch-3.coverage.json` (36 harvested rows),
`research/frontier-42-coxeter-32-batch-3.cross-batch-dependencies.json` (22 rows), this note, and nine
item-readiness records `research/frontier-42-coxeter-32-step1-<id>.json`. This file records scaffold
decisions and evidence, not mathematical approval; Step 3 authoring, owner reconciliation and the engine
gate follow.

## Scope, plan and binding inputs

Read `CLAUDE.md`, `SCHEMA.md` (relevant parts), `WORKFLOW.md`, the binding
`research/frontier-42-coxeter-32-owner-authoring-direction.md` (HH-12 clause: "HH-12 supplies the actual
coefficient-compatible Hecke basis and bar/normalization proofs before CG-11 uses them"), the batch task
`research/frontier-42-coxeter-32-beta-3.task.md`, the design `research/plan-hopf-hecke-algebras-track.md`
§HH-12 (line 340 ff.), the machine inventory `research/hopf-hecke-scaffold/inventory.json` (HH-12), the
independent audit `research/hopf-hecke-scaffold/independent-audit.md` (and the HH-12 edges in
`independent-audit.json`), the Hecke source report `research/hopf-hecke-scaffold/hecke-source-report.md`,
the canonical native A/B page prose
(`library/hopf-hecke-algebras/generic-coxeter-hecke-algebras-and-the-standard-basis{,-examples}.md`),
`research/plan-spec.json`, the batch shells, the step-1 drift report
(`research/frontier-42-coxeter-32-alpha-step1-drift.md`, verdict **no-drift** for this page), and the
batch-1/batch-2 manifests and notes that supply this pair.

The pair is unchanged: order, category, title, companion and the three A-page `requires`
(`tensor-coherence-and-algebraic-descent`, `coxeter-presentations-exchange-and-reduced-word-theorems`,
`polynomial-rings-and-roots`) plus the B-page `requires` (the A page) are exactly the plan's. The A
manifest carries the design's five item IDs unchanged; the B manifest carries the four worked examples
promised by the design's Examples paragraph (complete rank-one and S3 multiplication tables in both
normalizations; unequal-parameter dihedral consistency; specialization v=1), and the application links
to the existing type-A principal-series and Hecke–Markov (braid-trace) pages are recorded as pointers in
the specialization example rather than as new items, since those pages already carry their own item
homes.

## Design / plan / inventory reconciliation (recorded conflicts and route decisions)

1. **Plan-spec comparison.** `research/plan-spec.json` agrees with the task on the pair ids, orders
   1710/1711, category, companion, title and both `requires` lists. Its item arrays are empty, so no
   item-level plan text can conflict. **No design-versus-plan conflict exists**, and no plan text was
   changed.
2. **Dropped inventory edge (definition).** The inventory proposes
   `lem-hh-dihedral-root-recurrence-and-root-sign` as a dependency of
   `def-hh-universal-coxeter-hecke-parameters-and-presentation`. The recorded route does not use it: the
   conjugacy criterion is proved directly from the defining relator (for odd `m = 2k+1`, the identities
   `(st)^m = 1` and `s^2 = t^2 = 1` give `(st)^k s = (ts)^k t = t(st)^k`, so `x s x^{-1} = t` with
   `x = (st)^k`), and the converse uses only the universal property of `W` and the class sign
   homomorphisms `phi_C`. No rank-two order, root or signed-action input is consumed. The edge is
   therefore dropped as a proof dependency (not as content); the item's level is 1, not 3.
3. **A3 route.** The six-case commutation of `P_s` and `Q_t` is the recorded route. In the two
   exceptional configurations Proposition 1.10 (proved from exchange in the HH-11 pair) gives `sw = wt`,
   which forces `s` and `t` to be conjugate, so the definition's class rule gives `v_s = v_t`. The
   expansion shows that only the *difference* `u_s = v_s - v_s^{-1}` is needed there; this refinement is
   recorded in the A3 strategy and is the content of the examples item
   `ex-hh-unequal-parameter-dihedral-consistency`. The source's stronger conclusion `L(s) = L(t)` is
   automatic in the weight-function setting and is not needed as an extra hypothesis.
4. **A4 base change.** The theorem's base-change clause is routed through
   `lem-hh-universal-presentations-and-base-change` (batch 1) parts 2–3, exactly as the design says
   ("base change from HH-1"); no flatness is assumed and no tensor-identity supplier is used.
5. **A5 notation discipline.** The design's sentence "prove `v_s -> v_s^-1`, `T_s -> T_s^-1` defines bar,
   with `T_s^-1 = T_s - (v_s - v_s^-1)`" is realized at the generator level only. The scaffold
   deliberately does **not** claim `T_w^{-1} = T_{w^{-1}}` (false in general; the true inverse involves
   the R-polynomial expansion, which is out of scope here and is deferred to the Kazhdan–Lusztig page);
   it claims `T_w^{-1} = T_{s_k}^{-1} ... T_{s_1}^{-1}` for a reduced word and
   `T_w-bar = T_{w^{-1}}^{-1}`. The multiplicative normalization `(S_s - Q_s)(S_s + 1) = 0`,
   `Q_s = v_s^2`, `S_s = v_s T_s`, is recorded as the conversion to be matched before comparing with
   the published type-A/affine application homes.
6. **Examples scope.** The design's Examples paragraph is realized as four B items; the phrase "Link to
   existing type-A principal-series and braid-trace pages as applications with existing item homes" is
   honored as reading pointers in the specialization example (page ids
   `principal-series-representations-of-gl-n-over-a-finite-field` and
   `hecke-markov-traces-and-polynomial-link-invariants`), not as duplicated items.
7. **Warnings honoured.** "Reduced-word independence and a basis theorem are distinct obligations":
   `lem-hh-reduced-word-independence-and-length-multiplication` proves only well-definedness, the length
   rules and spanning; independence is proved only in
   `thm-hh-generic-coxeter-hecke-standard-basis` by the regular-module length-operator evaluation at
   `e_1`, with no torsion-freeness assumption.

## Dependency levels (in-run only)

Computed with the shared tool logic over the whole run's manifests (published and other out-of-run
suppliers do not raise a level); re-verified after the final manifest pass with
`node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` (no `hh-` error line):

| level | items |
|---|---|
| 1 | `def-hh-universal-coxeter-hecke-parameters-and-presentation` |
| 4 | `lem-hh-commuting-left-right-hecke-length-operators` |
| 5 | `lem-hh-reduced-word-independence-and-length-multiplication` |
| 6 | `thm-hh-generic-coxeter-hecke-standard-basis` |
| 7 | `lem-hh-hecke-anti-involution-bar-and-normalization`; `ex-hh-unequal-parameter-dihedral-consistency` |
| 8 | `ex-hh-rank-one-hecke-multiplication-in-both-normalizations`; `ex-hh-s3-hecke-multiplication-table-in-both-normalizations`; `ex-hh-hecke-specialization-at-v-equals-one` |

The A page is in prerequisite order (definition -> multiplication rules -> operators -> basis theorem ->
anti-involution/bar); both B-page suppliers are earlier A items or earlier batches, and no A item
depends on a B item.

## Inventory and mathematical audit

**A page (5 items).**

1. `def-hh-universal-coxeter-hecke-parameters-and-presentation` --- the coefficient ring
   `R = Z[v_1^{+-1},...,v_c^{+-1}]`, the presented algebra `H = R<T_s>/I` with relations (Q) and (B), its
   universal property, universal parameters, and the conjugacy criterion (simple generators are
   conjugate iff in the same odd-edge component). All well-definedness obligations are discharged from
   batch-1 suppliers plus the two explicit arguments above; `justified_by` is the design's
   (A2, A4) pair, both of which depend on this definition.
2. `lem-hh-reduced-word-independence-and-length-multiplication` --- `T_w` well defined by Matsumoto
   (batch-2 supplier), both length-multiplication rules, and spanning. No independence claim.
3. `lem-hh-commuting-left-right-hecke-length-operators` --- the operators `P_s`, `Q_s` on the free
   module `E`, the six-case commutation, the quadratic relations, the braid relations and
   `P_{s_1}...P_{s_k} e_1 = e_w`. The braid step needs the ambient reducedness of alternating words
   (batch-2 dihedral item) and the relator; the extension to every `e_w` commutes through the `Q`
   operators along a reduced right word.
4. `thm-hh-generic-coxeter-hecke-standard-basis` --- the representation `rho: H -> End_R(E)`,
   independence of `{T_w}` by evaluation at `e_1`, the free basis, faithfulness, and base change; no
   torsion-freeness or semisimplicity claim.
5. `lem-hh-hecke-anti-involution-bar-and-normalization` --- the reversal anti-involution, generator
   invertibility, the bar operator, and the `S`-normalization; see the notation discipline above.

**B page (4 items, all computations from A items).** rank-one table in both normalizations; the complete
6x6 S3 table in both normalizations (with the multiplicative rule
`S_sS_w = S_{sw}` / `Q S_{sw} + (Q-1)S_w`); the unequal-parameter dihedral consistency example; the
specialization at `v = 1` giving the group ring. During construction the S3 table, the multiplicative
rule and the dihedral `P_sQ_t - Q_tP_s` differences were re-derived with a small exact-arithmetic script
(Laurent coefficients in `v`, independent formal `u_s`, `u_t`): all 36 S3 products matched the stated
table; the multiplicative rule matched all 12 generator-row entries; the commutation difference was
nonzero only in the odd cases, equal to `+(u_t-u_s)` on the appropriate basis vector at the longest
alternating element (`m = 3, 5, 7`) and zero for every weight in the even cases (`m = 4, 6, 8`). These
are scaffolding consistency checks of the recorded derivations, **not** an independent audit and not a
substitute for the authored proofs; the general arguments in the strategies are what the Step-3 authors
must write.

## Sources, harvest, and dispositions

Three independent treatments were fetched and stamped with `source-fetch-check --stamp`
(2026-10-06; every fetch succeeded on the first attempt, so no drop or alternative-proof record is owed):
Lusztig (84-page lecture notes; §§1.1--1.11, 2.1--2.5, 3.1--3.5, 4.1--4.4 read, Theorem 1.9 and
Proposition 3.3 line by line; 3/3 fetched bodies); Geck (54-page EPFL notes; §2 and §4/§4.1 read);
Bjorner--Brenti (complete book PDF; §6.1 read). The coverage file records **36** harvested headings with
dispositions: **18 included**, **5 inline**, **11 deferred** (each naming a plan-spec page of this run),
**2 out-of-scope** (each with its specific reason); no row needed an owner escalation. The three
locators are the exact chapter/section ranges read; the unread remainders of Lusztig (from §5 on) and of
Geck (from §5 on) are not claimed as read and are not harvested.

## Published defects

No defect was found in the suppliers this batch consumes. Three observations for the owner, none a
defect claim: (1) the published `def-type-a-hecke-algebra-in-soergel-normalization` uses the parameter
`q = v^{-2}` with relations `T_i^2 = (q-1)T_i + q`, while the design's conversion uses `Q = v^2`; the
A5 item records the conversion `T_s = v_s^{-1}S_s` and `S_s = v_sT_s` so that the two conventions can be
matched explicitly; (2) the published finite-Hecke-algebra items
(`thm-finite-hecke-algebra-as-convolution-corner-and-endomorphisms`,
`def-bruhat-double-coset-basis-of-the-finite-hecke-algebra`) construct `H(G,B) = eC[G]e` by convolution
and are not used here --- the generic algebra of this pair is built by generators and relations, and the
standard basis is proved independently; (3) the design language "the regular-module length-operator
construction supplies independence" is realized exactly (evaluation at `e_1`), and no item consumes a
Recorded result to prove its own replacement.

## Cross-batch dependencies

`research/frontier-42-coxeter-32-batch-3.cross-batch-dependencies.json` holds **22** rows: two page rows
(the A page against the batch-1 and batch-2 pages) and twenty item rows, one per declared cross-batch
item edge (batch 1: `lem-hh-free-associative-ring-and-relations-descent`,
`lem-hh-finite-polynomial-and-localization-constructions`,
`lem-hh-universal-presentations-and-base-change`; batch 2:
`def-hh-coxeter-matrix-word-group-and-length`, `lem-hh-dihedral-root-recurrence-and-root-sign`,
`thm-hh-coxeter-exchange-deletion-and-faithfulness`, `thm-hh-matsumoto-reduced-word-theorem`,
`thm-hh-parabolic-minimal-representatives-and-length-additivity`). Every row is `open` with the exact
required claim, its use location and the note that the supplier is a Step-1 scaffold: none of those
proofs exists yet, so no mathematical verification is claimed. `frontier-dependency-ledger refresh`
succeeds and the refreshed unified ledger shows every batch-3 consumer edge reviewed with no orphaned
rows; `--require-reviewed` still fails only because batches 4 and 7--32 have not supplied their inputs.

## Checks actually run (2026-10-07, after the final manifest pass)

- `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-3.pages.json` --- 9 items, 0 errors.
- `node tools/content-policy.mjs --manifest-only <all 32 batch manifests>` --- **59 scoped items, 0
  errors, 0 warnings** (the whole-run form the gate uses). The batch-scoped form alone reports 20
  `batch-dependency-missing` rows for the in-run suppliers that live in batches 1--2; this is the
  documented reason the gate joins all manifests at once.
- `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` --- exit 1 solely on 52
  `empty scaffold inventory` errors belonging to other (unscaffolded) batches; no other error line, no
  cycle, and every batch-3 `dependency_level` equals the computed value (1,4,5,6,7,7,8,8,8).
- `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` --- 59 items, **59 ready**; the 52
  pages still needing work are other batches' empty inventories. All nine batch-3 records are closed
  against the final manifest.
- `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-3.coverage.json
  --require-destination` --- 1 page, 36 harvested results, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage ...` --- 3/3 sources fetch-verified (stamps of
  2026-10-06 retained); no source dropped.
- `node tools/url-sweep.mjs --coverage ... --recover --fail-on-dead --out /tmp/...` (temporary output so
  no run state is written) --- 3/3 live, 0 dead, 3 citation decisions.
- `node tools/source-backing.mjs --coverage ... --liveness /tmp/...` --- every harvested result backed by
  an openable source.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-42-coxeter-32` --- exits with
  "Empty frontier page parabolic-subgroups-and-double-coset-geometry": the documented pre-scaffold
  deferral while other batches are empty; the pair selection alone passes the page-order check (0 pages
  with item lists, since item lists on that path come from the still-empty plan entries).
- `node tools/manifest-integrity.mjs --run frontier-42-coxeter-32` --- 64 pages owed, 64 present, no
  scope drift.
- `node tools/extcheck.mjs research/frontier-42-coxeter-32-batch-3.pages.json` --- exit 0; no active
  recorded-not-proved item, external reference or external fallback in scope.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` --- exit 0; every
  batch-3 consumer edge has its review row; `--require-reviewed` reports the other batches' missing
  inputs only.
- `node tools/audit-manifest.mjs research/frontier-42-coxeter-32-batch-3.pages.json` --- reports 9
  `missing-source` rows because the item files are not authored yet; this is the documented
  pre-authoring state (the tool runs at 5b, not at Step 1).

## Outstanding findings

1. Whole-run gates (`item-dependency-levels`, `validate-plan --run`, `--require-reviewed`) cannot
   pass until every remaining batch is scaffolded; every remaining failure names only other batches'
   empty pages.
2. The readiness records are byte-bound to the transitive closure of their dependencies, which includes
   large parts of the published corpus plus the batch-1 and batch-2 manifest entries. Two consequences
   were observed and handled during construction: (a) a concurrent writer touching any published item in
   that closure mechanically stales a record, so re-run `step1-decisions check` at gate time on stable
   inputs; (b) the definition's `justified_by` edges place A2, A3 and A4 in one another's closures, so
   every batch-3 item's closure contains A3 and a single wording edit stales all nine records at once ---
   all nine were re-recorded after the last manifest edit, and no further manifest edit was made.
3. Step 3 must author all nine proofs and examples; this scaffold records the statements, strategies,
   supplier sets and source evidence only, and the machine checks above are scaffolding consistency
   checks, not proof.

Nothing in this batch is escalated: every item has a complete proof strategy with met (scaffolded)
prerequisites, every supplier statement in scope was read, no Choice boundary is crossed, and no page
split is needed (5 + 4 items against the 100-item cap).
