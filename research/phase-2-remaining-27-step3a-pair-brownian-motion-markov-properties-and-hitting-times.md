# Step 3a scope review — `brownian-motion-markov-properties-and-hitting-times`

Run: `phase-2-remaining-27` · Batch: 7 · Role: alpha (scope only; no item or
proof approvals, no owner records, no scaffold edits)

Pair under review:

- A page `brownian-motion-markov-properties-and-hitting-times` (19 items),
- B page `brownian-motion-markov-properties-and-hitting-times-examples` (9 items).

**Decision: `sufficient`.** No merger and no scaffold enrichment recommended.

## Review basis

Read: the current batch-7 manifest and coverage
(`research/phase-2-remaining-27-batch-7.pages.json`,
`research/phase-2-remaining-27-batch-7.coverage.json`), the batch-7 Step-1
evidence `research/phase-2-remaining-27-batch-7.notes.md` (which records the two
local support insertions and the source-reharvest locators), the batch-7
cross-batch ledger (`[]`), the run cross-batch ledger
(`research/phase-2-remaining-27-cross-batch-dependencies.json`: two
`verified` batch-8 consumer edges into this page), the binding prose design
`research/plan-probability-track.md` §0 line 270 and §7 line 517, the PT-19
design at lines 1938–1994 (A items 1–17, hard-proof plan, B items 1–9), the
§11 harvest rows lines 2514–2516 (Durrett), 2591–2592 (van der Vaart),
2661–2664 (Pitman), 2705 (Le Gall), 2728–2730 (Lawler) and the §11.7 source
row line 2798 for PT-19; `research/plan-spec.json` orders 288.133/288.134; the
binding `research/phase-2-remaining-27-owner-authoring-direction.md` (no
pair-specific amendment; the general completeness rule applies);
`research/phase-2-remaining-27-alpha-step1-drift.md` (this page: `no-drift`);
`research/phase-2-remaining-27-scope-ledger.json`; and
`research/published-consumer-supplier-ledger.md` (no defect entry for this pair;
only the mirrored plan requirement table).

Mechanical checks re-run this session: `coverage-checklist` on batch-7 coverage
(2 pages, 37 harvested rows, 0 errors), `manifest-deps` on batch-7 pages
(56 items, 0 errors). A scan of all fifteen batch manifests found 13 distinct
ids of this pair consumed elsewhere (PT-20, PT-21, PT-22; listed below); every
one is present on the A page. A scan of `items/*.md` found no published item
consuming this pair yet, and no id collision. All 30 external item dependencies
of the pair resolve to published `items/*.md` files; the other 19 dependency
ids are the pair's own in-run items.

Source verification (this session, independent of the Step-1 stamps): the three
cited PDFs were fetched and are byte-identical to the coverage records —
Durrett 2 195 717 bytes `sha256_16 aeac36cbf5e44c53`; Sousi 717 207 bytes
`e10e5ca4bdb1ee68`; Lawler 1 080 535 bytes `484521433950aad8`. The claimed
locators were read in the extracted text: Durrett Theorems 7.2.1, 7.2.3,
7.3.4, 7.3.9, Example 7.4.2 with (7.4.4) and the first-passage density (7.4.6),
and Theorem 7.5.3 (`P_x(T_a<T_b)=(b-x)/(b-a)`); Sousi Definition 6.10,
Theorems 6.13 and 6.17, and §6.7 "Recurrence and transience" printed
pp. 62–64 including Theorem 6.27 and the annular logarithmic exit argument;
Lawler §2.6.2 (Markov viewpoint), Theorem 2.7.1, Proposition 2.7.2 and
Example 2.7.1.

## Inventory versus the design

The A inventory is the design's 17 items in design order plus the two Step-1
local support insertions, each placed before its consumer:
`lem-conditioning-a-known-state-and-independent-noise` (before
`thm-brownian-markov-property`) and
`lem-planar-brownian-annular-exit-probability` (before the B-page planar
example). No design item is missing, renamed out of scope, reclassified or
deferred. The B inventory is the design's 9 items verbatim (six examples and
three counterexamples). Both pages stay well inside the 60-item A-page cap, the
pair keeps its companion wiring, and the B page is a leaf for every other page:
its only item-level dependency is the intra-page
`cex-brownian-hitting-time-is-almost-surely-finite-but-not-integrable` →
`ex-density-and-infinite-mean-of-a-one-sided-hitting-time` edge.

## Subject coverage for the pair's role

Covered on the pair, in proof order:

- raw, completed-raw and usual augmented Brownian filtrations, the raw right
  limit, and the germ σ-algebra at zero;
- the Brownian transition semigroup, its convolution identity, the
  parametric known-state/independent-noise conditioning lemma, the deterministic
  Markov property for bounded Borel functions, and the future-path Markov
  property with the translated Wiener law;
- Blumenthal's zero–one law;
- continuous-time stopping times and stopped σ-algebras (supplied locally
  because the published stopping-time page is discrete-time), closed-set
  hitting times, and the strong Markov property at a.s.-finite stopping times
  under the usual augmentation, with the raw-versus-usual boundary remark;
- reflection, the law of the maximum, the one-sided hitting-time distribution
  and density, almost-sure hitting of every point, the two-sided exit
  probability, and one-dimensional recurrence;
- the planar annular exit probability, planar point polarity versus coordinate
  and disc hitting, and the successive-hit restart example;
- the boundary counterexamples: non-right-continuity of the raw filtration,
  failure of strong Markov at a non-stopping random time, and a.s. finiteness
  without integrability.

Role in the library: this is the only page owning the augmented Brownian
filtration, the Markov/strong Markov interface and the hitting/reflection laws.
Its consumer interface is complete — PT-20 consumes `thm-blumenthal-zero-one-law`,
`thm-strong-markov-property-of-brownian-motion`,
`cor-one-dimensional-brownian-motion-is-recurrent`,
`lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times`,
`thm-brownian-reflection-principle`, `cor-law-of-the-brownian-maximum`,
`thm-brownian-future-path-markov-property` and `def-brownian-transition-semigroup`;
PT-21/PT-22 additionally consume `def-continuous-time-stopping-time`,
`def-natural-and-usual-augmented-brownian-filtrations`,
`lem-brownian-transition-semigroup-property`, `thm-brownian-markov-property`
and `thm-two-sided-exit-probability-for-brownian-motion`. No consumer needs an
item this pair does not have, and both batch-8 edges are recorded `verified` in
the run cross-batch ledger. All seven `requires` pages are published, so the
pair carries no unmet in-run prerequisite.

## Source-coverage observations (non-blocking)

1. The design's secondary backings for PT-19 (Pitman Lectures 16–17; van der
   Vaart §§4.2, 4.4–4.5; Le Gall §14.5; Yoshida §§6.6–6.9, 7.1–7.2) are not
   recorded in the Step-1 coverage table, which rests on Durrett, Sousi and
   Lawler. Those three sources were independently verified above to contain
   every claimed locator and to carry the whole PT-19 subject, so this is
   corroboration depth rather than a subject gap; it is flagged for the
   owner's awareness only.
2. The Sousi https URL fails curl verification because the server omits an
   intermediate certificate; the http copy is byte-identical and already
   recorded in coverage. Not a scope issue.

## Open observations handed to the owner (item-level, not scope blockers)

1. `P_x` / "Brownian motion started at x" is used by
   `thm-two-sided-exit-probability-for-brownian-motion`,
   `lem-planar-brownian-annular-exit-probability` and
   `ex-planar-brownian-coordinate-hitting-versus-point-hitting-boundary`, but no
   scaffolded item here or among the published prerequisites defines the
   shifted law. The binding design likewise wrote `P_x` without minting an
   item. A one-line local definition (translate `def-brownian-motion` /
   `def-d-dimensional-brownian-motion` by $x$) discharges this inside the
   assigned A page under the Step-3 local-definition rule; it is recorded here
   so Step 3b does not treat the notation as free.
2. The two inserted support lemmas, not the design items, carry the heaviest
   local obligations: the Dynkin-system extension in the conditioning lemma and
   the bounded $C^2$ splice plus discrete optional sampling and limit passage
   in the annular lemma. Scope-wise both are legitimate local suppliers for
   designed items.

## Decision

`sufficient`: the planned definitions, results and examples realize the binding
PT-19 design in full, cover the subject stated in the plan ("Blumenthal
zero–one, strong Markov, reflection and hitting laws", with the planar
recurrence/polarity boundary that the design assigns to the pair), and expose
every interface its in-run consumers declare. No omitted topic, result or
example was found that would require enrichment or a pair merger. This decision
asserts scope only: it is not a proof audit, and every proof obligation above
remains Step 3b work. Confidence in the subject assessment is high; the
statements above about sources are based on the full-text reads recorded in this
report, not on the Step-1 stamps.

Receipt: `node tools/step3-decisions.mjs record-scope --run
phase-2-remaining-27 --page brownian-motion-markov-properties-and-hitting-times
--decision sufficient`.
