# Batch 9 construction handoff — frontier-39-analysis-30 (Rellich–Kondrachov and Sobolev compactness)

## Scope and readiness

This isolated proposal preserves the current PDE-15 base design and all 13
rows in the authoritative additions table (current plan pp. L3624–3640).
The original scaffold has 30 items: 24 A and 6 B. The proposed manifest
has **37 items: 27 A and 10 B**. It adds three A claims and four B witnesses;
the fourth missing A row maps to the exact published a.e.-subsequence
corollary, which keeps its existing home. Five overlay rows were already
included. The base six B rows remain alongside the four enrichment witnesses.

Files here are sidecars only. No canonical artifacts, workflow controls,
readiness receipts, source fetch stamps or scope verdicts were changed.
The earlier notes below record scaffold construction history; their checks
are historical and do not certify the additions. The final proposal section
and validation.json state what was checked for this sidecar.

## Design, plan, and source conflicts (recorded as required)

1. **Plan `requires` versus the design's supplier list.** The canonical plan
   (`research/plan-spec.json`, order 458.027) declares the single page
   prerequisite `sobolev-poincare-and-morrey-inequalities` (the in-run PDE-14
   pair, batch 4); the design prose additionally names PDE-11–PDE-14, MT-10,
   MT-14–MT-15, FA-9–FA-10 and the published metric compactness/Ascoli pages.
   The plan controls, and the manifest keeps the single declared requirement.
   The additional inputs are consumed at item level and are either published
   (PDE-11/12/13, the Ascoli and metric-compactness pages, the measure-theory
   and functional-analysis interfaces) or in-run (PDE-14, recorded as nine
   cross-batch edges in the batch input: one page-level and eight item-level;
   eleven rows were drafted and two were retired by the B-page routing edits).
   No page, pair, or ordering was changed.
2. **The source caveat in Teschl's Theorem B.15.** Teschl's printed
   Kolmogorov–Riesz–Sudakov criterion as extracted lists only the translation
   and tightness conditions and omits the boundedness hypothesis, which is
   necessary (the family $f_n=n\mathbf 1_U$ on a bounded open set satisfies the
   printed conditions and is not relatively compact). The manifest statement
   restores boundedness; the discrepancy is recorded in the coverage entry for
   Teschl and in the item's source note, and the reading is a caveat, not a claim
   that the printed theorem is false for its intended use.
3. **"Both directions" of the criterion.** The design's item 2 says the
   criterion "proves both directions needed here only in the stated
   $1\le p<\infty$ setting". This is implemented as the sufficiency theorem
   `thm-frechet-kolmogorov-compactness-criterion-in-lp` plus the added necessity
   row `lem-relative-compactness-implies-uniform-translation-continuity-in-lp`;
   the necessity of tightness is witnessed on the B page
   (`cex-rellich-fails-without-uniform-tail-control`). No direction is quoted as
   a compactness slogan.
4. **The `q<p^*` range includes $q<p$.** The design's Rellich–Kondrachov rows
   state $1\le q<p^*$; the manifest keeps that full range and the proof route
   separates it: Hölder on the finite-measure domain handles $q\le p$ and the
   Lyapunov interpolation between $L^p$-compactness and the uniform
   $L^{p^*}$ bound handles $p\le q<p^*$. This matches the design's "hard proof
   obligation" for item 5.
5. **Higher-order row made exact.** The design row 8 says "state compact
   $W^{k,p}\Subset W^{m,q}$ embeddings whenever the target smoothness exponent
   is strictly lower", which is not a precise claim. The manifest implements the
   exact three-branch statement (Hunter Theorem 3.49 / Teschl Theorem 9.31):
   $(k-m)p<n$ with $q<p^*_{k-m}$; $(k-m)p\ge n$ with $q<\infty$; and the Morrey
   branch $(k-m)p>n$ into $C^{m,\beta}$, $\beta<k-m-n/p$. This is a
   specification of the same claim, not a weakening.
6. **The compact trace theorem needed a local closure.** The addition row
   `thm-subcritical-compactness-of-the-sobolev-trace` ("compact into boundary
   spaces strictly below its critical integrability exponent") cannot be
   obtained from the published continuous trace boundedness, and the library has
   no published $L^p$-based fractional Sobolev embedding or fractional Rellich
   theorem. Following the drift instruction to supply the argument in charts,
   the manifest adds seven local prerequisites: the level-set kernel estimate,
   the dyadic summability estimate, the Slobodeckij level-set lower bound, the
   critical fractional Sobolev inequality, the Slobodeckij mollification rates,
   and the fractional Rellich compactness; the theorem then composes the
   published sharp trace theorem with the fractional compactness of the boundary
   chart representations. The endpoint case $p=n$ (and $p=1$) is explicitly not
   claimed; the $p>n$ Morrey branch of the trace theorem is included.
7. **The design's monotone Poincaré route vs the enrichment.** The design's
   "Hard proof obligations" for PDE-15 name only the compactness route; the
   PDE-14 additions' interpolation and H-minus-one rows are not part of this
   page's inventory and are not duplicated here.
8. **Choice strength versus the plan's §8 ledger row.** The plan books the
   PDE-15 extraction at "dependent choice, or the exact sequential compactness
   strength already recorded by MT/FA" and directs the page to inherit, not
   conceal, that cost. The manifest books the page's own extraction at
   Countable + Dependent Choice and, following the inheritance instruction,
   carries the Axiom of Choice inherited through the named suppliers listed in
   the choice ledger (ACL characterisation, extension theorem, weak lower
   semicontinuity, the PDE-13 trace items, the PDE-14 draft embeddings and
   their companion-page interfaces). The plan row is satisfied by this
   inheritance; the residual discrepancy — the row does not name the
   Axiom-of-Choice-carrying interfaces — is recorded here rather than resolved
   by weakening a statement, and the reduction option is stated in the ledger.

## Local additions beyond the design's inventory

Each is a genuine prerequisite; none weakens or pads a design claim, and every
design claim is preserved.

- `def-compactly-embedded-normed-spaces` — fixes the two equivalent readings
  of "compact embedding" the page uses (compact closure of bounded images;
  strongly convergent subsequences) and records the choice cost of the
  equivalence; the design's Well-definedness paragraph asks for exactly this.
- `lem-fractional-level-set-kernel-measure-estimate`,
  `lem-dyadic-level-set-summability-estimate`,
  `lem-slobodeckij-seminorm-controls-dyadic-level-sets`,
  `thm-fractional-sobolev-inequality-on-euclidean-space` — the four ingredients
  of the critical fractional Sobolev inequality $W^{\theta,p}\subset L^{p_\star}$
  in the compactly supported form (Hitchhiker's guide Lemmas 6.1–6.3 and
  Theorem 6.5).
- `lem-slobodeckij-mollification-approximation-rates` — the two mollification
  rates $\|g-g_\delta\|_p\le C\delta^\theta[g]_{\theta,p}$ and
  $\|\nabla g_\delta\|_p\le C\delta^{\theta-1}[g]_{\theta,p}$ derived from the
  translation modulus of the seminorm.
- `thm-fractional-rellich-kondrachov-compactness-on-bounded-sets` — combines the
  mollification rates with the integer-order Rellich theorems on the regularized
  family to get subcritical compactness of $W^{\theta,p}$ on fixed bounded sets.

## Choice and axiom ledger

**The page's own machinery** is Countable Choice plus Dependent Choice:
Countable Choice for the mollification, Tonelli, polar-coordinate, completeness
and finite-net interfaces; Dependent Choice for the nested diagonal extraction
in `thm-local-lp-compactness-of-w-one-p-bounded-sequences` and for the metric
equivalence between compactness and sequential compactness of the closures
(`thm-metric-compactness-equivalences`, Countable + Dependent Choice). The fusion
of `cor-real-and-euclidean-vector-valued-ascoli-arzela` (stated under Choice) was
avoided by using `thm-arzela-ascoli-for-real-ck` (Countable + Dependent Choice)
componentwise together with `lem-equicontinuous-families-have-finite-sup-nets`.
This matches the plan's §8 ledger row for PDE-15, which books the
Fréchet–Kolmogorov/Rellich subsequence extraction at dependent choice (or the
sequential-compactness strength recorded by MT/FA).

**Inherited Axiom of Choice.** The plan's row also directs the page to
"inherit, not conceal" the recorded strength of its suppliers, and the library's
published convention — verified on the other consumers of the same interfaces,
e.g. `thm-sobolev-gauss-green-formula-on-c-one-domains`,
`thm-kernel-of-the-trace-is-w-one-p-zero` and
`cor-sobolev-embeddings-transfer-from-rn-to-extension-domains` — is that a
consumer states the assumption its named supplier states. The proof routes below
consume suppliers whose statements assume, or whose draft contracts record, the
Axiom of Choice; the manifest states it in those items, declares
`def-axiom-of-choice` in their `deps`, and names the carrier in the strategy:

- `thm-acl-characterisation-of-w-one-p` (Axiom of Choice through its
  Countable-Choice/Dependent-Choice interfaces) →
  `lem-translation-estimate-for-w-one-p-functions` → the `W^{1,p}_0` Rellich
  theorem →
  `cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets`.
- `thm-extension-theorem-for-bounded-smooth-domains` (Axiom of Choice) →
  `thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain` →
  `thm-local-lp-compactness-of-w-one-p-bounded-sequences`, and (with the PDE-14
  items below) the Rellich–Kondrachov rows, their corollaries and
  `thm-fractional-rellich-kondrachov-compactness-on-bounded-sets`.
- `lem-weak-lower-semicontinuity-of-the-sobolev-norm` (Axiom of Choice) →
  `thm-local-lp-compactness-of-w-one-p-bounded-sequences`.
- The PDE-14 draft suppliers `cor-sobolev-inequality-for-w-one-p-zero`,
  `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n`,
  `thm-critical-sobolev-embedding-into-every-finite-lq`,
  `thm-morrey-inequality-for-p-greater-than-n` and
  `thm-higher-order-sobolev-embedding` each record `def-axiom-of-choice` in the
  batch-4 scaffold → the corresponding Rellich–Kondrachov, critical-exponent,
  Morrey–Rellich and higher-order rows, and (through the A-page corollary and
  theorem) the B-page witnesses `cex-critical-sobolev-embedding-is-not-compact`
  and `cex-morrey-compactness-loses-the-endpoint-holder-exponent`. The
  cross-batch input rows record this accounting; if PDE-14 reduces its final
  accounting, the carry can be reduced with it.
- The published trace chain (`thm-sharp-trace-theorem-for-w-one-p`,
  `thm-lp-trace-operator-on-a-bounded-c-one-domain`,
  `lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts`, all Axiom of
  Choice) → `thm-subcritical-compactness-of-the-sobolev-trace`.
- Companion-page interfaces:
  `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`
  (Axiom of Choice) →
  `ex-compactness-of-a-bounded-w-one-p-sequence-on-an-interval`;
  `cor-positive-negative-part-and-truncation-calculus-in-w-one-p`,
  `thm-sobolev-chain-rule-for-globally-lipschitz-scalar-functions` and
  `thm-kernel-of-the-trace-is-w-one-p-zero` (Axiom of Choice) →
  `cex-critical-sobolev-embedding-is-not-compact`;
  `cor-weak-h-one-convergence-plus-compactness-gives-strong-ltwo-convergence` →
  `ex-strong-ltwo-convergence-preserves-a-normalisation-constraint`.

The Countable-Choice-only items are `lem-relative-compactness-implies-uniform-translation-continuity-in-lp`,
`lem-fractional-level-set-kernel-measure-estimate`,
`lem-slobodeckij-seminorm-controls-dyadic-level-sets`,
`thm-fractional-sobolev-inequality-on-euclidean-space` and
`lem-slobodeckij-mollification-approximation-rates`; the Countable + Dependent
Choice items are `thm-frechet-kolmogorov-compactness-criterion-in-lp` and
`cex-rellich-fails-without-uniform-tail-control`.

**Choice-free items are preserved:** `lem-bounded-support-makes-frechet-kolmogorov-tail-control-automatic`,
`lem-dyadic-level-set-summability-estimate` (whose strategy states that the
argument uses no choice principle), `cex-rellich-fails-on-rn-by-translations`
and the definitions carry no choice assumption. No incompatible-axiom branch is
opened (the Axiom of Choice implies the Countable and Dependent Choice used
here), and no proof or prerequisite path reaches
`deferred-set-theory-beyond-choice`. **Open reduction option, for Step 3:** if
the author replaces the ACL-based translation estimate by the
density/mollification route (Countable Choice only) and PDE-14 lowers its
accounting, the inherited Axiom-of-Choice carry can be withdrawn item by item;
the present statements record the routes the scaffold actually commits to.

## Sources

Seven full texts back the pair: Kinnunen, *Sobolev Spaces* (Ch. 3 §3.6,
pp. 84–90); Hunter, *Notes on PDE* (§1.5 pp. 6–7 and §§3.10–3.11 pp. 73–76);
Laugesen, *Linear Analysis and PDE* (Ch. 3 §§3.7 and 3.9, pp. 62–64 and 74–77);
Teschl, *PDE: From Classical to Modern* (§9.3 pp. 211–220 and §B.2
pp. 358–361); Brezis, *Functional Analysis, Sobolev Spaces and PDE* (Ch. 9
§9.3, Theorem 9.16); Grigoryan, *Math 246B* (§1.6, pp. 12–14); and the
Di Nezza–Palatucci–Valdinoci survey (Section 6, pp. 39–48) for the fractional
block. All eleven source entries across the two pages were fetched in full and
stamped (`source-fetch-check --stamp`: 11/11). The coverage record disposes of
55 harvested headings; no result is left undisposed. The subcritical compact
trace statement and the Slobodeckij mollification-rate lemma are assembled
locally from the cited ingredients and this is stated in their source entries,
not represented as a quotation.

## Historical scaffold checks (not validation of this proposal)

- `node tools/manifest-deps.mjs` (all 30 manifests): 270 item(s), 0 errors.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`:
  29 batch-9 items labeled (levels 0–6, no cycle); the whole-run exit 1 is
  entirely the other batches' empty scaffold inventories (40 of them), with
  **zero** errors naming a batch-9 item.
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`:
  270 scoped item(s), 0 errors, 0 warnings (my batch included).
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-9.coverage.json --require-destination`:
  2 page(s), 55 harvested result(s), 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-39-analysis-30-batch-9.coverage.json --stamp`:
  11/11 source(s) fetch-verified; check mode 11/11 resolved.
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30`: all 29
  batch-9 records closed (no batch-9 item in the work list); the whole-run
  report lists 266/270 ready, the four open items being another batch's
  escalated LCA-group rows, plus the other batches' empty scaffold pages.
- `node tools/fwdcheck.mjs`: exit 0 (whole run); the remark's three forward
  references to the companion-page witnesses are declared, strictly forward,
  closed by the planned B page and introduce no cycle.
- `node tools/drift-review-check.mjs --run frontier-39-analysis-30`: 30 pages
  reviewed, no blocked edges.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0 (whole run).
- `node tools/extcheck.mjs`: exit 0 (whole run); the only printed line is the
  pre-existing recorded-not-proved note for `thm-urysohn-lemma`.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`:
  batch-9 input present with 9 rows (one page-level and eight item-level, all
  `open` against the batch-4 PDE-14 draft and the supplier page; two earlier
  item rows were retired when the B-page supplier references were routed
  through A-page items, see below). The refreshed ledger has no orphaned
  reviews. The
  `--require-reviewed` gate form is red run-wide because most other batches have
  not yet supplied inputs; that is a run-level dependency, not a batch-9
  blocker.
- `node tools/splice-plan.mjs --run frontier-39-analysis-30 --verify`: reports
  only the expected manifest-vs-plan item-count difference (the plan-spec page
  lists land at the Step-4 splice); no undeclared prerequisite remains after
  routing the two B-page supplier references through A-page items.
- Re-run after the choice-accounting repair (statements, `deps` and strategies
  of 23 items): `manifest-deps` 270/0; `content-policy --manifest-only`
  270/0/0; `coverage-checklist` 55/0/0; `source-fetch-check` 11/11 (check mode
  11/11, no drops); `step1-decisions check` 0 stale batch-9 records;
  `item-dependency-levels check` 0 errors naming a batch-9 item (levels 0–6);
  `fwdcheck`, `extcheck`, `validate-plan`, `drift-review-check` and the ledger
  refresh all exit 0 with the same whole-run status as above.

## Dependency and supplier notes

- Eight item-level cross-batch edges consume batch-4 (PDE-14) items:
  `cor-sobolev-inequality-for-w-one-p-zero`, `def-sobolev-conjugate-exponent`
  (twice, for `cor-subcritical-compactness-...` and
  `thm-rellich-kondrachov-for-p-less-than-n`),
  `thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n`,
  `thm-critical-sobolev-embedding-into-every-finite-lq`,
  `thm-morrey-inequality-for-p-greater-than-n`,
  `lem-weak-partial-derivatives-lower-sobolev-order` and
  `thm-higher-order-sobolev-embedding`. Each row in the batch input states the
  exact required claim and its use; the five AC-recorded rows additionally
  state the inherited-choice accounting. The supplier is a draft scaffold of
  this run and is not treated as published; the one page-level edge is the
  plan's declared `requires`.
- Two earlier batch-input rows were retired, not silently dropped: the
  `cex-critical-sobolev-embedding-is-not-compact → def-sobolev-conjugate-exponent`
  and
  `cex-morrey-compactness-loses-the-endpoint-holder-exponent → thm-morrey-inequality-for-p-greater-than-n`
  edges no longer exist in the manifest because those B-page items were routed
  through the A-page suppliers `cor-subcritical-compactness-for-w-one-p-zero-on-arbitrary-bounded-open-sets`
  and `thm-morrey-rellich-compactness-for-p-greater-than-n` (the second row had
  also left a duplicated `deps` entry, now deduplicated).
- Cross-batch choice coupling: the eight item-level edges into the batch-4 draft are
  what make the B-page examples carry the Axiom of Choice through the PDE-14
  Sobolev embeddings; the batch input records this so the PDE-14 owner can see
  the consumer consequence of its final choice accounting.
- Downstream: the batch-10 page `lax-milgram-and-weak-elliptic-solutions`
  already declares `rellich-kondrachov-and-sobolev-compactness` in its
  `requires`; its owner records the consumer input.

## Unresolved findings, escalations, and published defects

- No mathematical escalation and no page split. The complete local closure fits
  the A page (27 of 100 items in this proposal). No prerequisite belongs on another page: the
  fractional Sobolev machinery is genuinely consumed only by the compact trace
  theorem on this page.
- The endpoint case $p=n$ of the compact trace theorem is deliberately not
  claimed (it would need the limiting fractional embedding at $\theta=d/p$); the
  remark and the theorem's statement say so, so the gap is visible rather than
  hidden. If the Step-3 author can supply the endpoint argument with the
  published machinery, the claim may be strengthened at that stage.
- No defective published prerequisite was found among the interfaces examined:
  the PDE-13 trace and fractional-boundary items, the Ascoli/metric-compactness
  items, the measure-theory $L^p$, Tonelli and mollifier items, and the
  $W^{1,p}$/$W_0^{1,p}$ items. The one near-miss is source-side, not library
  side: Teschl's printed Theorem B.15 omits the boundedness hypothesis, recorded
  as a caveat above.
- The whole-run Step-1 gates remain red only on other batches' unfinished
  scaffolds; no batch-9 artifact is missing.
- Choice accounting was repaired at scaffold level: the previous notes claimed
  "the Axiom of Choice is not used", which was wrong for the routes actually
  recorded in `deps` (the ACL, extension, weak-lower-semicontinuity, PDE-13
  trace and PDE-14 embedding interfaces all state or record the Axiom of
  Choice). The 24 affected statements/deps/strategies now carry the inherited
  assumption, each strategy names its carrier, and the reduction option is
  recorded in the ledger. Nothing was weakened, and no new page or pair was
  introduced.
- The A page's largest proof-route risks, to be checked at Step 3: the exact
  constants in the fractional level-set lemmas (the survey's constants are
  order-one and must be tracked), the ordering of the $\delta$-choice in the
  fractional compactness interpolation, and the chartwise passage from local
  $L^q$ convergence to surface-measure convergence on $\partial\Omega$. Each
  strategy names the source proof it follows (Hitchhiker's guide Lemmas
  6.1–6.3 and Theorem 6.5; Hunter Theorems 1.15, 3.45, 3.48, 3.49; Teschl
  Theorem 9.31 and Corollary 9.32).

## Owner resolution after scaffold

PDE-14's design item `thm-poincare-wirtinger-on-bounded-connected-extension-domains`
was not in this batch's original design section. The owner retained its exact
claim and ID, moved it to this PDE-15 A page after the extension-domain Rellich
item, and added its dependency-linked compactness contradiction proof. The
proof uses the published PDE-11 zero-gradient componentwise constancy theorem;
boundedness passes the mean to the Rellich limit, and connectedness then forces
the limiting constant to be zero. See the owner resolution record for the
paired PDE-14 scope update.


## Proposed owner scope repair (isolated sidecar; not integrated)

The authoritative PDE-15 additions table has 13 rows. Five were already
scaffolded; seven are added here; the a.e.-subsequence row maps exactly to
published `cor-l-p-convergent-sequences-have-almost-everywhere-convergent-subsequences`,
whose Countable Choice and $1\le p\le\infty$ contract covers the planned finite-p
claim. That supplier keeps its published home and is cited by the nonlinear
corollary and boundary critical witness. No overlay row is waived. The proposed
manifest has **37 items: 27 A and 10 B**. See `overlay-dispositions.json`.

The two Poincare claims remain distinct. Current PDE-15 design A5 preserves
`thm-poincare-wirtinger-on-bounded-connected-extension-domains`, whose norm is
$L^p$. Kinnunen Theorem 3.47 is the stronger mean-zero $L^{p^*}$ inequality
for $1<p<n$; its complete proof is on printed pp. 90-91. The enrichment
assigns this full Sobolev-Poincare claim to B4/PDE-14. B9 coverage defers the full
claim there, and B4 coverage must replace its contrary B9 deferral with its
planned exact supplier. Do not collapse these distinct claims or introduce a
B4-to-B9 proof dependency for the B4 theorem: the B9 page requires B4.

The new claims explicitly state exponent and domain restrictions. The nonlinear
map is real scalar, $m\ge1$, $1\le q<r<\infty$, on finite measure, with target
$1\le s<r/m$. The critical bulk witness proves weak convergence in
$L^{p^*}$, including $p=1$ (where $p^*>1$), using the exact published duality
supplier. Critical trace failure is shown on bounded smooth domains with a flat
patch; this suffices to refute endpoint compactness in the stated general class.
The closed-constraint lemma asserts membership only in the target closed set;
it does not manufacture weak closedness or a Sobolev limit. The operator
corollary is for bounded linear maps and arbitrary bounded open domains.

Historical checks above belong to scaffold time and do not certify this proposal.
Current checks only parsed sidecar JSON, resolved all proposed dependency IDs,
and computed the in-run dependency levels/cycle check by recursive traversal.
No workflow command, gate, test, canonical edit or proof audit was performed.
New coverage source entries have no fabricated fetch-verification stamp.
