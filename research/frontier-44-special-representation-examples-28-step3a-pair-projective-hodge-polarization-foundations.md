# Step 3a scope review — pair `projective-hodge-polarization-foundations`

- Run: `frontier-44-special-representation-examples-28`; role alpha; label
  `step3a-pair-projective-hodge-polarization-foundations-00e1adb7d420c2a4`.
- A page: `projective-hodge-polarization-foundations` (order 1811, 6 items); B page
  `projective-hodge-polarization-foundations-examples` (order 1815, 1 item); batch 39;
  category `complex-analysis`.
- This dispatch supersedes the unrecorded 2026-10-09 dispatch
  `...-050bf13fc7d82dc3` (the pair was re-dispatched after the append-2 metadata
  recertification); no Step-3 receipt for this pair existed before this review.
- **Scope decision: `sufficient`.** Review receipt:
  `research/frontier-44-special-representation-examples-28-step3a-review-projective-hodge-polarization-foundations.json`.
  No scaffold, item approval, owner record, or shared ledger was written. This review
  assesses scope only, not proof correctness.

## Inputs read

- `research/frontier-44-special-representation-examples-28-batch-39.pages.json` (all 7
  item statements, strategies, dependency lists, levels), `...-batch-39.coverage.json`
  (all source rows and dispositions), `...-batch-39.notes.md` (design/plan comparison,
  AC bookkeeping, source work, cross-batch rows, residual risks, owner native38
  integration), `...-batch-39.cross-batch-dependencies.json` (22 verified edge rows).
- Design prose and plan: the `## Projective Hodge Polarization Foundations` section
  of `research/plan-klr-foundation-prerequisites.md` (L795–L856, all five designed
  supplier statements and the designed example), the two `research/plan-spec.json`
  page entries (orders 1811/1815 and their item lists), the author packet
  `research/frontier-44-special-representation-examples-28-klr-foundation-hodge-packet.json`,
  the handoff report `...-klr-foundation-hodge-report.md`, and the six carrier drafts
  under `research/frontier-44-special-representation-examples-28-klr-foundation-hodge-drafts/`.
- Owner decisions: `...-owner-authoring-direction.md` (the 21-pair append paragraph
  naming this pair; guarded native append mechanism) and
  `...-klr-foundation-monodromy-native38-escalation/{integration-round1.json,afterbinding-round1.json}`
  (the accepted projective-before-logarithmic placement/`requires` integration).
- Consumers, by manifest scan of every `batch-*.pages.json` in this run: the three
  pages listed below; plus their item statements read in full.
- In-run suppliers read on disk: the seven batch-35 items and the batch-31 item
  consumed by this pair (`compact-kahler-hodge-foundations`, `compact-laplace-type-operators-and-hodge-representatives` pages).

## Scope vs design

The design inventory is five suppliers plus one example; the manifest carries them
under the designed IDs, kinds, titles and claims, with one documented local addition:

| manifest item | level | role in the pair |
|---|---|---|
| `lem-smooth-projective-analytification-has-rational-kahler-polarization` | 9 | designed: compact analytification + positive closed $(1,1)$-form representing an ample rational/integral class |
| `thm-kahler-identities-give-lefschetz-sl-two-and-hard-lefschetz` | 11 | designed: hard Lefschetz, $\mathfrak{sl}_2$ transport, primitive decomposition, rationality |
| `def-morphisms-and-polarizability-of-rational-hodge-structures` | 3 | added: morphism/direct-sum/short-exact/splitting/polarizable/simple vocabulary for the splitting lemma |
| `lem-polarized-hodge-structures-have-orthogonal-semisimple-substructures` | 4 | designed: orthogonal splitting, semisimplicity of polarizable structures |
| `thm-hodge-riemann-bilinear-relations-for-smooth-projective-varieties` | 12 | designed: $Q_k$, type orthogonality, positivity, full-cohomology polarization, continuity |
| `thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties` | 13 | designed: absolute projective package with explicit exclusions |
| `ex-primitive-one-forms-on-a-hermitian-two-plane` (B) | 4 | designed: the two-plane primitive-star sign check |

The added definition item is the minimal vocabulary closure required by the designed
splitting lemma (its own statement, deps and strategy are consistent with Deligne,
Théorie de Hodge II, (2.1.10)–(2.1.12)); it introduces no new claimed mathematics
beyond definitions and elementary structure facts, and it duplicates only in purpose
the mixed-Hodge vocabulary of another pair, which is deliberately outside this page's
`requires` closure (batch-39 notes; recorded as a routing note, not a gap). The other
scaffold changes against the packet's declared inputs are dependency corrections
(AC declarations, the general complex-manifold definition, connection/curvature
suppliers, the rational scalar comparison, the top-integral lemma, the star-existence
lemma); each is needed by the designed proof route and none narrows a designed claim.
The B page matches its designed single-example inventory exactly; it is intentionally
minimal, verifies the pointwise star sign underlying the Hodge–Riemann positivity
identity, and is not load-bearing for any other page.

Owner placement integration is reflected on disk: the pair sits at orders 1811/1815,
the logarithmic pair at 1812/1816 and now `requires` this page (the batch-38
escalation was resolved by the owner's Round1 integration; statements unchanged).

## Intended role and consumers

- Prose role: absolute projective Hodge-polarization foundations supplying the
  Kähler/hard-Lefschetz/Hodge–Riemann/semisimplicity interfaces for downstream
  decomposition work. Consumed in-run by:
  - `logarithmic-hodge-complexes-and-smooth-open-weights` (L1812):
    `thm-logarithmic-complex-constructs-smooth-open-mixed-hodge-structures` consumes
    the analytification lemma for "each smooth projective SNC stratum is compact
    Kähler with a rational Kähler class";
  - `geometric-fixed-parts-and-gauss-manin-semisimplicity` (L1819):
    `lem-smooth-projective-morphisms-give-polarizable-rational-gauss-manin-variations`
    consumes the Hodge–Riemann theorem; `thm-fixed-part-for-geometric-polarizable-variations-on-smooth-algebraic-bases`
    consumes the Lefschetz/$\mathfrak{sl}_2$ theorem;
  - `projective-perverse-hard-lefschetz-and-decomposition` (L1830): three items
    consume the package theorem (twice) and the splitting lemma.
- Each consumer's declared use is supported by the corresponding statement clauses;
  no consumer requires a result this pair withholds, and the pair's explicit
  exclusion list (weak hyperplane Lefschetz, relative hard Lefschetz, singular
  purity, arbitrary local systems) matches results owned by other frontier pages
  (`affine-perverse-vanishing-and-universal-hyperplanes`,
  `projective-perverse-hard-lefschetz-and-decomposition`, `geometric-fixed-parts-and-gauss-manin-semisimplicity`).

## Source coverage

- Engine advisory `coverage-39` (from `.autopilot/.../events.jsonl`):
  `2 page(s), 35 harvested result(s), 0 error(s), 0 warning(s)` — no low-yield
  warning to answer. Batch-39 coverage lists five distinct documents: Serre GAGA,
  Demailly *Complex Analytic and Differential Geometry*, Deligne *Théorie de Hodge
  II*, Schnell class 18 (A), Schnell class 17 (B); each with printed-page locators
  and per-result disposition (`included`/`inline`/`out-of-scope` with reasons).
- I read the run's stored read-extracts and confirmed the load-bearing harvests:
  Schnell class 18 Theorem 18.13 (Lefschetz decomposition, type shift $p-j,q-j$),
  Corollary 18.14 (hard Lefschetz) and Theorem 18.15 (type orthogonality and
  $i^{p-q}Q>0$ with $Q=\varepsilon(k)\int\omega^{n-k}\wedge\alpha\wedge\beta$);
  Deligne (2.1.11)–(2.1.17) (morphisms, polarizations) and Lemme (4.2.3)(i) with its
  orthogonal-complement proof; Schnell class 17 Proposition 17.3 and its $n=1$
  two-plane computation. These match the harvested dispositions.
- Independent liveness check today (ranged GET, HTTP 206): all five source URLs live
  (Numdam GAGA, Demailly, Numdam Deligne II, Schnell class 17/18). Recorded
  `fetch_verified` stamps remain in the coverage file.
- Known normalization/typo cautions carried from the notes: Schnell class 17's
  two-plane table contains typographical slips — the B example and the Hodge–Riemann
  sign are re-derived from the library's own conventions instead (I recomputed
  $*u=-iu$ and $u\wedge*\bar u=2e\wedge f$, consistent with the primitive-star
  formula at $n=k=1$); Demailly's Hermitian normalization differs by a positive
  factor from the library convention and the scaffold claims existence only, so no
  factor is mixed into a claimed value. Four declines (`out-of-scope`: Demailly
  §9 Jacobian/Picard/Néron–Severi; Deligne (4.2.4)–(4.2.5) families; Schnell 18
  $\partial\bar\partial$-lemma Betti applications) are genuinely unconsumed by these
  items, with families owned by the Gauss–Manin pair.

## Prerequisites and closure

- All 25 unique dependency targets of the 7 items (declared deps plus all
  statement/strategy wikilinks) resolve — 13 published items (each
  `items/<id>.md` present) and 12 in-run scaffold items (4 of them this pair's own
  items; the external eight are on `compact-kahler-hodge-foundations`, order 1802,
  and `compact-laplace-type-operators-and-hodge-representatives`, order 1797, both
  inside this page's transitive `requires` closure and earlier than 1811). **No
  unmet prerequisite is confirmed.**
- Checks run on the current tree: `manifest-deps` over all batch pages — `858
  item(s), 0 normalized, 0 error(s)`; `coverage-checklist --require-destination`
  on batch 39 — `2 page(s), 35 harvested, 0/0`; `validate-plan --run` — exit 0,
  acyclic, no unresolved ids, and no `redundant-prereq` advisory on either page;
  `content-policy --manifest-only` over all batch pages — `858 scoped item(s),
  0 error(s), 0 warning(s)`; `item-dependency-levels check` — 858 items, no error
  for any batch-39 item. `step3-decisions check` initially reported this pair as
  "current scope review required", as expected before this receipt.
- Non-blocking uncertainty, stated honestly:
  1. The pair's analytic closure runs through the batch-31 elliptic/Sobolev chain
     (`thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition`,
     present in the scaffold) via the batch-35 Hodge theorem. This transitive
     acceptance risk is recorded in the batch-39 notes and owed to Steps 3–6; it is
     not an absent scaffold prerequisite, and no claim of this pair narrows it.
  2. This review did not audit proof correctness (Step 3b/5 ownership), including
     the in-run supplier proofs; statements, hypotheses and interfaces were checked
     for scope only.
  3. The added definition item remains manifest-only in the `plan-spec.json` item
     inventory (same Step-4 splice bookkeeping class as other appended pairs; no
     plan conflict, since `validate-plan` passes).

## Decision and owner action

- `sufficient` for `projective-hodge-polarization-foundations`: the planned
  definitions, results and example adequately cover the intended subject
  (analytification with a rational Kähler class, hard Lefschetz and primitive
  decomposition, polarized-Hodge semisimplicity, Hodge–Riemann positivity and the
  absolute projective package), the B page realizes its designed star-sign check,
  source coverage is adequate with no unanswered advisory, and every consumer
  interface is planned and declared.
- No merger or enrichment is recommended; nothing is blocked on this pair.
  Owner action requested: none for scope. Only the Step-4 splice reconciliation of
  the one manifest-only added item remains as bookkeeping.
