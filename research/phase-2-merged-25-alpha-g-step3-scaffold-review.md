# phase-2-catchup-24 — Alpha group `g`, Step 3 scaffold review

This review covers batches `14`, `15`, and `16`, hence the five A/B pairs at
orders 659–660, 663–664, 667–668, 673–674, and 713–714. I read the current
manifests, coverage, notes, SET-3/5/7/10/30 design sections, canonical plan,
published prerequisites used by the proposed proofs, and the complete relevant
source ranges. I did not edit a batch scaffold, the canonical plan, published
content, or a dependency-ledger input.

## Verdicts

| Batch | A page | B page | Verdict |
| ---: | --- | --- | --- |
| 14 | `arithmetization-incompleteness-and-relative-consistency` | `arithmetization-incompleteness-and-relative-consistency-examples` | `sufficient` |
| 14 | `reflection-absoluteness-and-elementary-submodels` | `reflection-absoluteness-and-elementary-submodels-examples` | `sufficient` |
| 15 | `boolean-algebras-stone-duality-and-the-prime-ideal-theorem` | `boolean-algebras-stone-duality-and-the-prime-ideal-theorem-examples` | `insufficient` |
| 16 | `borel-analytic-sets-perfect-sets-and-determinacy` | `borel-analytic-sets-perfect-sets-and-determinacy-examples` | `sufficient` |
| 15 | `pcf-scales-and-zfc-dowker-spaces` | `pcf-scales-and-zfc-dowker-spaces-examples` | `insufficient` |

The two insufficient verdicts are not caused by defects in published consumers.
They follow from current owned-plan and owned-proof gaps described below.

## Batch 14 — arithmetization and incompleteness

The 28-item A page and five-item B page implement SET-3 in proof order. The
earlier A609 concern is no longer an unresolved dependency: the current route
uses the local certified-coding definition and
`lem-certified-syntax-coding-operations-are-primitive-recursive`, followed by
the explicit Q calculation, beta coding, representability, syntax checking,
proof translation, provability, diagonalization, Gödel/Rosser, bounded truth,
the derivability conditions, Löb/G2/Tarski, and the semantic/formal relative-
consistency boundary. The finite-fragment arguments distinguish an ordinary
model from a transitive model and state every external consistency premise.

The two declared page prerequisites are earlier and adequate. The actual
published interfaces used include first-order deduction/completeness and the
arithmetical-hierarchy coding conventions; the remaining arithmetization is
proved locally. In particular, no item reaches the Recorded catalogue and no
formal consistency claim is inferred from the existence of a countable
transitive model. The B examples use only earlier A items and keep standard
numbers, codes, and numerals distinct.

Source support is adequate and independent: Moschovakis §4A–4C and Avigad
§§4.3, 4.5.1, 4.6–4.9.5 give the main incompleteness route, while Sutner's
primitive-recursion/coding notes and the Geschke, Freiburg, and Marks set-theory
notes support the coding and relative-model boundary. The inaccessible formal
Löb refinement and the suspect printed Rosser equivalence are correctly
excluded; neither is used.

## Batch 14 — reflection, absoluteness, and elementary submodels

The 18-item A page and five-item B page implement SET-5. The dependency spine
runs from the Lévy hierarchy and bounded absoluteness through ordinal/rank
absoluteness, the finite-formula witness criterion and rank bounds, finite
reflection, fixed finite-fragment models, Mostowski collapse, countable
elementary submodels, and compatible collapsed chains. The statements preserve
the transitivity, fixed-formula, parameter, extensionality, and well-foundedness
hypotheses. The B counterexample correctly distinguishes an elementary submodel
from its transitive collapse.

The two declared prerequisites supply exactly the first-order model-theory and
cumulative-hierarchy facts used. Constructibility and full Shoenfield
absoluteness are fenced as later/orienting mathematics and are not hidden proof
premises. Geschke §3–5 and the complete Freiburg §3.5 treatment independently
support the core route; Kamensky §5.2 and Marks Definition 18.8 through
Proposition 18.13 check the hierarchy and one-way absoluteness conventions.

## Batch 15 — Boolean algebras, Stone duality, and BPI

The current 25-item A manifest and three-item B manifest have a coherent local
proof order from Boolean algebra/filter vocabulary through BPI equivalences,
Stone duality, arbitrary-language compactness, compact Hausdorff Tychonoff,
regular-open completion, and forcing-preorder completion. The SET-7 relocation
of `fs-bpi-is-ac` to the later basic-Cohen-model examples page is correct and
removes the old forward dependency.

Two exact defects keep the pair insufficient:

1. `research/plan-spec.json` contains `items: []` for both order 667 and order
   668, although the current manifests contain 25 and three items. The whole-plan
   validator explicitly permits page-only entries, so its success does not cure
   this mismatch. One authorized writer must copy the current inventories into
   the canonical plan and keep the SET-7 prose scaffold synchronized.
2. The coverage retains Fremlin 314S and 314T(b) for this page, but no manifest
   item states either result. Add, after
   `thm-stone-regular-open-boolean-completion` and before the forcing items:
   `thm-stone-completeness-iff-extremal-disconnectedness`, stating the exact
   equivalence between Dedekind completeness of a Boolean algebra, extremal
   disconnectedness of its Stone space, and equality of its clopen and regular-
   open algebras; and
   `thm-order-continuous-homomorphisms-extend-to-boolean-completions`, stating
   the unique extension of an **order-continuous** Boolean homomorphism into a
   Dedekind-complete Boolean algebra. The order-continuity hypothesis must not be
   weakened to an arbitrary homomorphism. Their dependencies are the current
   Stone representation, regular-open completeness, order-density/completion
   theorem, and the locally defined order-continuity interface. These unused IDs
   fit the A-page limit (27 items after repair). Add both to the SET-7 prose
   inventory and canonical plan; no new pair is needed.

Fremlin's complete Chapter 31 gives the exact proof: 314S at printed p.39 and
314T(b) at pp.39–40. Tressl §§2.1–4 remains the independent Boolean/Stone
treatment. The B-page finite examples are sound and need no additional result.

## Batch 16 — Borel/analytic sets and determinacy

The 60-item A page is exactly at the split threshold and the five-item B page is
within policy. The manifest now gives a complete local order: tree bodies and
analytic projections; Borel ranks and well-founded codes; taboo/open games;
game coverings and their inverse limits; Borel determinacy; the AC
undetermined-game argument; analytic separation, Souslin operation, perfect-set
and bounded-rank results; category and measure regularity; and the stated AD/DC
consequences. The published Vitali and measurable-function interfaces are
declared page prerequisites rather than duplicated.

The proof contracts keep the axiom bases separate: Borel determinacy is ZF,
the undetermined-game and Bernstein/Hamel pathologies assume AC, the Baire-
space choice consequence is stated under AD, and the final Lebesgue-
measurability theorem states AD+DC. The false B-page claim pulls a hypothetical
Borel image back along the earlier continuous injection and contradicts the
owned Borel-determinacy/AC-undetermined-game pair; it does not use a published
false statement.

The eight active sources cover the relevant routes, including Marker's full
named descriptive-set-theory ranges, Martin's complete game-covering range,
Moschovakis's complete six-page proof, Lietz's perfect-set proof, and the full
local category/measure arguments in the recorded sources. The priority-history,
failed trace-lifting exercise, bare Borel-cardinality count, and broader
projective/large-cardinal commentary are correctly out of scope. No same-page
deferral or unresolved source decision remains. This page must be split if any
future A item is added, but no addition is required by this audit.

## Batch 15 — PCF scales and ZFC Dowker spaces

The repaired local scale route in items 4–13 is mathematically adequate for the
Kojman–Shelah construction: it proves the countable-cofinality scale from
bounding projections, exact upper bounds, uncountable club guessing, and the
cofinal-product transfer, and then normalizes only at existing least upper
bounds. The four local Rudin hull/closure/tail lemmas now use published
parameterized Löwenheim–Skolem and Tarski–Vaught interfaces and do not depend on
batch-14 reflection. The Kojman–Shelah closed/cofinal subspace proof agrees with
Theorem 3 of the complete seven-page primary paper.

That repaired subroute does not make the SET-30 pair sufficient. The current
manifest itself records the remaining obligations in
`rem-pcf-balogh-and-small-dowker-supplier-obligations`, and the design still
requires general PCF generators/basic theorem/no-holes, Balogh's continuum-
sized ZFC construction, and the CH/club/diamond/Luzin/stick sufficient
conditions for size `aleph_1`. A remark with `deps: []` is not a proof or a
supplier. None of the required prerequisite pairs exists in the prose scaffold
or `research/plan-spec.json`.

There are three further exact local gaps:

- `thm-dowker-product-characterization` declares that the compact-interval and
  compact-factor closed-projection interfaces are unreconciled. Its rectangle
  proof uses closedness of projection from `X × [0,1]` and an increasing-cover
  refinement before applying shrinking. Add those results in the topology pair
  below; `def-product-topology` and closed-heredity of normality do not supply
  them.
- `thm-rudin-dowker-space-and-cardinality` uses regularity of `omega_1` and the
  equality between a cofinal subsequence product and
  `aleph_omega^aleph_0`, but its `deps` omit
  `thm-regularity-of-the-alephs` and contain no proved countable-product
  comparison. Add `lem-cofinal-aleph-product-cardinality` before the theorem,
  with dependencies on `lem-cardinal-arithmetic-basic-laws`, cofinality,
  successor-aleph regularity, and AC. Its proof must give both injections: the
  easy product upper bound and the reverse encoding using a partition of the
  countable cofinal index set into infinitely many cofinal subsequences. Add the
  regularity edge to the theorem wherever the cofinality of
  `omega_1·(alpha+1)` is used.
- Kojman–Shelah p.2465 states that the scale subspace has weight
  `aleph_(omega+1)` and character `aleph_omega`; cardinality alone does not
  prove these invariants. Add
  `thm-kojman-shelah-space-weight-and-character` after the closed/cofinal
  subspace calculation, with an explicit base and local-base calculation.

### Required prerequisite A/B pairs

These pairs must be added by one authorized SET prose/plan writer at SET-30 and
to `research/plan-spec.json`. Exact decimal orders may be chosen between the
named earlier pages and A713, but the relative order below is mandatory. The
consumer remains insufficient until the pairs and their complete proof
contracts exist. All proposed IDs below were checked as unused except IDs
explicitly marked for relocation.

1. `countable-paracompactness-and-dowker-characterization` /
   `countable-paracompactness-and-dowker-characterization-examples`, category
   `foundations`, after `partitions-of-unity-and-paracompactness` and before all
   Dowker construction pairs. Requires that page and `compactness`. A inventory:
   relocate `def-countable-paracompactness-and-dowker-space`;
   `lem-compact-factor-projection-is-closed`;
   `lem-increasing-cover-refinement-from-shrinkings`; relocate
   `thm-countable-paracompactness-shrinking-criterion`; relocate
   `thm-dowker-product-characterization`. B inventory: relocate
   `ex-countable-shrinking-on-a-discrete-space`;
   `ex-countable-increasing-cover-refinement`;
   `ex-compact-interval-product-separation`. This split prevents the Balogh
   proof from depending circularly on A713.
2. `possible-cofinalities-exact-upper-bounds-and-generators` /
   `possible-cofinalities-exact-upper-bounds-and-generators-examples`, category
   `foundations`, after club/stationary and the relevant elementary-model and
   cardinal-arithmetic machinery, before the next PCF pair. A inventory:
   `def-pcf-progressive-sets-and-ultraproducts`;
   `def-pcf-cofinality-ideals`; `def-pcf-exact-upper-bounds`;
   `lem-pcf-small-family-directedness`;
   `def-pcf-approachability-witnesses`; `lem-pcf-club-guessing-input`;
   `lem-pcf-exact-upper-bound-construction`;
   `lem-pcf-cofinality-ideal-directedness`;
   `thm-pcf-generators-for-progressive-sets`;
   `thm-pcf-maximum-and-basic-generator-theorem`. B inventory:
   `ex-pcf-finite-progressive-set`;
   `ex-pcf-principal-ultrafilter-coordinate`;
   `fs-pcf-ordinary-upper-bound-is-exact`. The present Abraham–Magidor reading
   does not certify this whole general-PCF inventory; full exact source support
   is required before authoring.
3. `pcf-no-holes-and-successor-scales` /
   `pcf-no-holes-and-successor-scales-examples`, category `foundations`, after
   the preceding pair and before A713, requiring that pair and
   `cardinal-arithmetic-and-cofinality`. A inventory in proof order: relocate
   `def-reduced-ordinal-products-and-scales`,
   `def-strong-increase-and-bounding-projections-for-countable-products`,
   `lem-strong-increase-gives-bounding-projections`,
   `lem-bounding-projections-give-exact-upper-bounds`,
   `lem-uncountable-club-guessing-at-a-double-successor`,
   `lem-club-continuity-produces-strongly-increasing-subsequences`, and
   `lem-eventual-products-below-aleph-omega-have-a-continuous-long-chain`;
   then add `lem-pcf-generator-restriction`,
   `lem-pcf-exact-upper-bound-cofinality-transfer`,
   `thm-pcf-no-holes-in-the-required-interval`, and
   `lem-pcf-countable-cofinal-subsequence-reduction`; finally relocate the
   existing `thm-pcf-aleph-omega-plus-one-scale`. B inventory:
   `ex-pcf-scale-on-an-infinite-subsequence`;
   `ex-pcf-eventual-order-versus-pointwise-order`;
   `fs-pcf-scale-gives-least-upper-bounds-at-every-limit`. The final false
   statement must be refuted: normalization applies only where a least upper
   bound exists. Relocation, rather than duplicating the already-used scale ID,
   resolves the collision in the older batch-note proposal.
4. `balogh-continuum-sized-dowker-space` /
   `balogh-continuum-sized-dowker-space-examples`, category `foundations`, after
   the topology pair and adequate elementary-model/cardinal-arithmetic
   machinery, before A713. A inventory: `def-balogh-finite-restriction-data`;
   `lem-balogh-countable-restriction-enumeration`;
   `lem-balogh-combinatorial-map`; `def-balogh-continuum-topology`;
   `lem-balogh-neighborhood-basis`; `lem-balogh-hereditary-normality`;
   `lem-balogh-failure-of-countable-shrinking`;
   `thm-balogh-continuum-sized-zfc-dowker-space`. B inventory:
   `ex-balogh-basic-neighborhood-intersection`;
   `ex-balogh-closed-level-obstruction`;
   `fs-balogh-cardinality-is-aleph-one-without-ch`. The last item must explain
   that continuum size becomes `aleph_1` under CH only; it must not refute the
   ZFC continuum-sized theorem. Hart §5.2 is one complete treatment, but the
   combinatorial-map/model argument still needs the independent primary proof
   required by the source contract.
5. `guessing-principles-and-small-dowker-spaces` /
   `guessing-principles-and-small-dowker-spaces-examples`, category
   `foundations`, after `set-theoretic-trees-delta-systems-and-diamond`, the
   club/stationary page, the topology pair, and the Balogh pair, before A713. A
   inventory: `def-small-dowker-luzin-and-stick-principles`;
   `def-small-dowker-tight-strongly-unbounded-coloring`;
   `def-small-dowker-ad-guessing`; `lem-small-dowker-ch-gives-luzin-set`;
   `lem-small-dowker-luzin-gives-tight-coloring`;
   `lem-small-dowker-coloring-gives-ad-guessing`;
   `lem-small-dowker-stick-gives-ad-guessing`;
   `lem-small-dowker-diamond-implications`;
   `def-small-dowker-ladder-topology`;
   `lem-small-dowker-ladder-normality`;
   `lem-small-dowker-ladder-shrinking-obstruction`;
   `thm-small-dowker-conditional-aleph-one-constructions`. B inventory:
   `ex-small-dowker-ch-via-balogh`;
   `ex-small-dowker-guessing-parameter-check`;
   `fs-small-dowker-conditional-construction-settles-zfc`. The complete
   Rinot–Shalev–Todorcevic paper proves implications involving
   `clubsuit_AD`, stick, `diamond(b)`, and Luzin sets. The design word “club”
   must be resolved against those exact conventions; ordinary club guessing is
   not an adequate substitute.

After those splits, A713 should require the new topology, no-holes/scale,
Balogh, and small-Dowker A pages and retain only the Rudin and Kojman–Shelah
assembly/application items, normalization, dated status, and relevant examples.
No Foundations page may cite `deferred-set-theory-beyond-choice`; the published
`rem-dowker-spaces` item remains a target only.

### Current-status source check

The complete Rinot–Shalev–Todorcevic author PDF, *A New Small Dowker Space*,
Introduction pp.1–2 and Theorems A/B, states the conditional `aleph_1`
constructions and says Rudin's ZFC `aleph_1` conjecture remains open. The full
Kojman–Shelah primary paper, pp.2459–2465, gives the `aleph_(omega+1)` space and
its weight/character. Independent searches on 2026-09-09 for a later ZFC
`aleph_1` resolution found no primary-paper resolution. Accordingly
`rem-aleph-one-dowker-status-dated-audit` is acceptable as a dated literature
report, not a theorem of nonexistence. Sources checked:

- https://www.assafrinot.com/files/paper54.pdf — Introduction and Theorems A/B.
- https://shelah.logic.at/files/95569/609.pdf — complete paper, especially
  Theorem 1, Claims 2–16, Theorem 3, and the final invariant sentence.
- https://arxiv.org/pdf/2504.15398 — §9, printed p.26, as the current coverage's
  2025 open-problem report.

## Frontier and published-consumer bookkeeping

The current batch-14/15/16 cross-batch input files are empty. That is correct
for the **current** manifests: no actual owned item proof uses another assigned
batch's item, and the repaired Rudin hull arguments use the already-published
Löwenheim–Skolem/Tarski–Vaught machinery rather than A663. The proposed general
PCF and Balogh pairs mention elementary-model machinery, but page membership is
not enough to create a verified edge. Before adding either pair, its writer must
identify the exact item-level elementary-submodel supplier and proof use. If it
uses an A663 item, the batch-15 owner must add the corresponding `open` row to
`research/phase-2-catchup-24-batch-15.cross-batch-dependencies.json` and refresh
the unified ledger. This reviewer did not write that input.

The published consumer `items/rem-dowker-spaces.md` is Phase-3 debt, not a
supplier blocker. The current published-consumer ledger records the local scale
supplier but must be reconciled with the full repair list already present in
the batch-15 notes: `thm-dowker-product-characterization`,
`thm-rudin-dowker-space-and-cardinality`, the proposed Balogh theorem,
`thm-kojman-shelah-zfc-dowker-space`, the proposed conditional small-space
theorem, and `rem-aleph-one-dowker-status-dated-audit`. The repair is to replace
the published citation-only clauses after those suppliers publish, preserving
their different sizes and hypotheses. No assigned proof uses the defective
published remark, so this ledger debt is not an additional supplier verdict
failure.

The 57 `extcheck` warnings concern existing published results resting on
recorded-not-proved material. None is a direct dependency of an assigned
manifest item, and the reviewed load-bearing paths do not use them. They remain
unrelated published debt under the Phase-2 supplier/Phase-3 consumer boundary.

## Scope decisions

`scope-decisions refresh` produced 27 current pending declines. All 27 are now
resolved as `stands` with row-specific current evidence in
`research/phase-2-catchup-24-alpha-g-scope-decisions.json`; no row required an
`owner-decision`. A `stands` decision does not waive a binding same-page
deferral: Fremlin 314S/314T(b) and the Balogh/weight-character rows are among
the defects that make their pairs insufficient.

There are no `source_resolution` drops or owner escalations in the assigned
coverage. The current fetch receipts resolve 11/11 batch-14 sources, 6/6
batch-15 sources, and 8/8 batch-16 sources. Stamped verification added no new
stamps and left all three coverage-file hashes unchanged. The independent Hart URL open timed
out during this review; the existing current fetch-verified receipt and prior
complete-text harvest were reused, as required, rather than inventing repeated
failures. Fremlin and Kojman–Shelah were independently reopened as complete
PDFs and their exact passages checked.

## Checks run

- `node tools/scope-decisions.mjs refresh --run phase-2-catchup-24 --group g`:
  27 declines, 27 initially pending.
- `node tools/scope-decisions.mjs check --run phase-2-catchup-24 --group g`:
  27 current declines, 0 errors after resolution.
- `node tools/manifest-deps.mjs research/phase-2-catchup-24-batch-*.pages.json`:
  691 items, 0 errors for the whole run.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; 1624 pages,
  declared order acyclic and consistent, no item-level cycles, forward
  references, B-page dependencies, or unresolved IDs among the 956 pages with
  item lists. The validator's 663 page-level-only entries include the empty
  Boolean inventories identified above.
- `node tools/extcheck.mjs --quiet`: exit 0 with 57 published warnings and no
  hard error; every recorded-not-proved consequence is marked.
- `node tools/source-fetch-check.mjs --coverage ... --stamp` on batches 14, 15,
  and 16: 11/11, 6/6, and 8/8 sources fetch-verified, 0 newly stamped, 0 drops.
  Before/after SHA-256 values were identical for all three coverage files.
- `node tools/coverage-checklist.mjs` with each assigned coverage file as its
  positional argument: 82, 64, and 112 harvested results; 0 errors and 0
  warnings. An initial invocation using unsupported `--coverage`, `--manifest`,
  and `--require-destination` flags returned the expected missing-page errors;
  the documented positional invocations are the passing results above.
- `node tools/content-policy.mjs --manifest-only` on the three assigned
  manifests: 184 scoped items, 0 errors, 0 warnings.
- `node tools/scaffold-verdicts.mjs --run phase-2-catchup-24 --help` (the tool
  ignores `--help` when `--run` is present): exit 1; current whole-run state was
  11/24 A pages reviewed, six insufficient, and 13 still unreviewed. Those 13
  belong to other groups and do not indicate a missing group-g verdict.
- `node tools/frontier-dependency-ledger.mjs refresh --run
  phase-2-catchup-24 --require-reviewed` was run during discovery. It refreshed
  the unified derived ledger from the existing inputs; the batch-14/15/16 input
  arrays remained empty, and this reviewer made no input-row edit.
- The canonical AGENTS.md status command using raw `node` failed because this
  Node installation does not load `.mts` directly. The repository wrapper
  `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run
  phase-2-catchup-24 --state-dir .autopilot/phase-2-catchup-24` succeeded and
  reported this run at Step 3 review, with no in-flight task at that instant.

The sufficient pairs can proceed to ordinary closure. The two batch-15 pairs
must remain blocked until the exact repairs above are present in both the prose
scaffold and canonical plan and pass a fresh independent dependency/source
review.
