# Step 3a scope review — `eastons-theorem-and-cardinal-invariants-of-the-continuum`

- Run `frontier-35-ten-categories`; role alpha; label
  `step3a-pair-eastons-theorem-and-cardinal-invariants-of-the-continuum-879d59dbb4da8c76`.
- Pair: A `eastons-theorem-and-cardinal-invariants-of-the-continuum` (order 715)
  / B `eastons-theorem-and-cardinal-invariants-of-the-continuum-examples`
  (order 716), batch 13, category `foundations`. A has 41 scaffolded items,
  B has 4; 47 harvested source results.
- Decision: **sufficient** for the subject the current design fixes. Every design
  bullet has a planned definition, result or example; the six cited sources are
  reachable and the load-bearing dispositions were re-checked against the
  fetched texts; the owner's `p=t` deferral is recorded and the retained scope
  matches the amended design. Findings F1–F3 are record/stamp corrections for
  the owner; F4–F6 are observations, none of which requires a scope change
  under my reading of the design.
- No prior reviewer or owner scope receipt existed for this page (checked with
  `tools/step3-decisions.mjs check --phase scope`, which reports "current scope
  review required" for exactly this page). No scaffold, item, page, coverage or
  owner record was edited by this review.

## Evidence read

- **Design (controlling).** `research/plan-set-theory-completion-track.md`
  SET-31, L663–677: item list (continuum-function constraints; Easton
  functions; Easton-support products and iterations; preservation and continuum
  calculation; Easton's theorem for regular cardinals; singular-cardinal
  caveat; `P(omega)/fin`; almost-inclusion and towers; `p`, `t`, `b`, `d`, `s`,
  `r`; add/cov/non/cof of null and meagre; Cichoń diagram inequalities; forcing
  computations; `fs-zfc-determines-the-continuum-function`), the explicit
  deferral of Malliaris–Shelah `p=t`, and the scope sentence "this page is
  scoped to prove the listed Easton results, elementary bounds for `p` and `t`,
  and stated cardinal-invariant inequalities". Also L111 (prerequisites
  SET-16 + published `borel-analytic-sets-perfect-sets-and-determinacy`), L138
  (B-companion contract for SET-31: "one Easton function and forcing, sample
  cardinal-invariant separations, Cichoń diagram"), and the §2 axiom/metatheory
  ledger row "SET-13–17, 27, 31 | ZFC ground model".
- **Binding owner decisions.** `research/frontier-35-ten-categories-owner-authoring-direction.md`
  L11–17: batch 13 retains the pair, `thm-pseudointersection-number-equals-tower-number`
  is deferred, "Do not claim the global equality (p=t), infer it from CH
  examples, or count the deferred item in the active inventory. The elementary
  bounds and the other 45 Easton-pair items remain in scope."
  `research/frontier-35-ten-categories-deferred-items.json` records the deferral
  (`authorized_at` 2026-09-24, destination `owner-decision`, preserved item,
  Step-1 receipt, pre-deferral manifest/coverage). The successor-run options in
  `research/frontier-35-ten-categories-scope-recovery-options-memo.md` were not
  selected; no other owner decision touches this pair.
- **Manifests, plan, drift.** `research/frontier-35-ten-categories-batch-13.pages.json`
  and `research/plan-spec.json` agree field-by-field on order, kind, category,
  title, companion and `requires` (A requires
  `finite-support-iterations-and-martins-axiom` and
  `borel-analytic-sets-perfect-sets-and-determinacy`; B requires only its A
  companion). Plan item lists for both pages are empty shells, as expected; the
  batch manifest carries the inventory. Pre-deferral manifest/coverage
  (`…-pre-deferral-batch-13.*`) show exactly one item removed and the source
  disposition for Malliaris–Shelah Theorem 14.16 changed from `included` to
  `deferred`/`owner-decision`. Drift: `…-alpha-step1-drift.md` L131–137 records
  `no-drift` for this page.
- **Step-1 records.** `…-batch-13.notes.md` (owner review, 45 ready, no boundary
  dependence, deferred-`p=t` treatment); `…-step1-*.json` receipts for the pair
  (e.g. `thm-eastons-theorem-for-regular-cardinals` = owner `ready`).
- **Tools re-run (2026-09-24).** `coverage-checklist` → 2 pages, 47 harvested
  results, 0 errors, 0 warnings. `source-fetch-check` → 8/8 source rows
  fetch-verified, 0 documented drops. `step3-decisions.mjs check --phase scope`
  → this pair is the outstanding scope decision; all other batch files
  untouched.
- **Dependency and consumer checks.** Every external id in the 45 scaffolds
  resolves to a **published** page earlier than 715 (largest: order 685
  `finite-support-iterations-and-martins-axiom`); no item in the pair's
  transitive closure is in-run elsewhere, and
  `…-batch-13.cross-batch-dependencies.json` is empty. No item carries
  `forward_refs`. Bootstrapping boundary: the pair's item closure (1071 ids)
  contains no item of `deferred-set-theory-beyond-choice`, and the page-level
  `requires` closure (136 pages) contains no such page. No other run page and
  no published item consumes this pair; the B page is its only consumer.

## Sources re-verified

Fetched 2026-09-24; byte/sha256_16 compared with the two coverage
`fetch_verified` stamps.

| source | recorded | re-fetch | locators read |
|---|---|---|---|
| Jech, Ch. 15 (fa.ewi.tudelft.nl) | 532798 B, `3e3f376c70a5f36a` | match | printed pp.232–237 (PDF pp.8–13) |
| Williams, Math 655 part 2.2 | 353362 B, `bf97451691155e48` | match | PDF pp.11–12, 16 |
| Monk, Continuum cardinals | 408232 B, `73b491288d6a8c29` | match | pp.1, 5, 8, 14–15, 19–20 |
| Bartoszyński, Invariants of Measure and Category | 466320 B, `0908b2e096e5ec05` | match | pp.2–12 |
| Malliaris–Shelah, CST | 636138 B, `2cf4f3d4de01aa62` | match | pp.36, 54–59 |
| Shelah, A Comment on `p<t` (Cambridge) | 171063 B, `800b0560de50ceda` | **no match** (F3) | pp.304–311 |

Verified in the fetched texts: Jech Theorem 15.18 with constraints (15.7)(i)–(iii)
on printed p.232, the support condition (15.10) on p.233, the `P≤λ`/`P>λ`
factorization with λ⁺-cc head and λ-closure of the tail (pp.233–234), Lemma
15.19 ("P λ-closed and Q λ⁺-cc ⇒ every f:λ→M in M[G×H] is in M[H]", p.234),
the set-sized cardinal/continuum calculation (p.234), and the class-forcing
section pp.235–237, which proves Power Set and Replacement and explicitly
leaves Separation "to the reader". Williams Definitions 51–53, the λ⁺-cc Lemma
54, Corollary 56 (GCH ⇒ P(E) preserves cardinals and cofinalities) and Theorem
58 (set-sized Easton) on pp.11–12, and the global Theorem 77 with an explicit
"Proof sketch" on p.16. Monk Theorem 1 (`ℵ₁≤cf(b)=b≤cf(d)≤d≤c`), Lemma 14 and
Theorem 16 (`s≤d`), Proposition 27 (`b≤r`), Proposition 34 (`t` regular),
Proposition 48 (`ℵ₁≤p≤t`). Bartoszyński Lemmas 3.8/3.9 (pp.6–7), Theorem 3.11
and its diagram (p.8) with 3.12 (`add(N)≤add(M)`, `cof(M)≤cof(N)`), 3.16
(`cov(N)≤non(M)`, `cov(M)≤non(N)`), 3.17 (`d≤cof(M)`, `add(M)≤b`) and 3.18
(`cov(M)≤d`, `b≤non(M)`) — i.e. every standard Cichoń arrow is covered by the
three scaffolded arrow items plus the elementary ideal/bounding lemmas.
Malliaris–Shelah: Definition 14.3 fixes `Q=([N]^ℵ0, ⊇*)` (the reverse
stronger-than display the scaffold's definition warns about), Claim 14.6/14.7
and Conclusion 14.9/14.15 on pp.55–58, Theorem 14.16 `p=t` on p.59, Central
Theorem 9.1 on p.36. Shelah Proposition 1.3, Lemma 1.5, Observation 1.7, Lemma
1.8, Lemma 1.9, Definition 1.10 and Theorem 1.12 at printed pp.304–311.

## Inventory against the design

| design bullet (SET-31 L663–677) | planned items |
|---|---|
| continuum-function constraints | `thm-regular-continuum-function-constraints` |
| Easton functions | `def-easton-function` |
| Easton-support products and iterations | `def-easton-support-product`, `def-easton-support-iteration` |
| preservation and continuum calculation | `lem-easton-head-cc-and-tail-closure`, `lem-easton-head-tail-no-new-short-sequences`, `thm-set-easton-product-preserves-cardinals-and-cofinalities`, `lem-easton-head-cardinality-and-name-count`, `thm-set-easton-product-realizes-regular-pattern` |
| Easton's theorem for regular cardinals | `def-gbc-global-choice-ground-for-easton`, `lem-easton-class-forcing-truth-and-set-names`, `lem-easton-class-tail-head-decision`, `lem-easton-class-separation-and-power-set`, `lem-easton-class-replacement`, `lem-easton-class-generic-model-satisfies-zfc`, `thm-eastons-theorem-for-regular-cardinals` |
| singular-cardinal caveat | `rem-easton-singular-cardinal-caveat` |
| `P(omega)/fin`, almost inclusion, towers | `def-almost-inclusion-pseudointersection-and-tower`, `lem-small-tower-exists`, `def-pseudointersection-and-tower-numbers`, `lem-basic-pseudointersection-and-tower-bounds` |
| `p`, `t`, `b`, `d`, `s`, `r` | `def-pseudointersection-and-tower-numbers`, `def-eventual-domination-bounding-and-dominating-numbers`, `lem-basic-bounding-and-dominating-relations`, `def-splitting-and-reaping-numbers`, `lem-splitting-reaping-comparison-with-b-and-d` |
| add/cov/non/cof of null and meagre | `def-null-and-meagre-cardinal-invariants`, `lem-basic-ideal-cardinal-inequalities` |
| Cichoń diagram inequalities | Borel master-code/Tukey chain (`lem-cantor-coin-measure-from-binary-expansion` … `lem-meagre-master-codes-below-summable-slaloms`, `lem-null-meagre-tukey-inequalities`, `lem-cichon-cross-and-bounding-inequalities`, `thm-cichons-diagram-inequalities`) |
| forcing computations | B `ex-ch-collapses-classical-cardinal-invariants`, `ex-ma-model-null-meagre-additivity-equals-continuum`, `ex-easton-two-regular-cardinal-pattern` |
| `fs-zfc-determines-the-continuum-function` | present as `fs-zfc-determines-the-continuum-function` |

B-companion contract: one Easton function and forcing →
`ex-easton-two-regular-cardinal-pattern`; sample cardinal-invariant
computations → CH collapse example and MA model example; Cichoń diagram → the CH
example fixes all ten entries at ℵ₁ and the A theorem draws the diagram. See F5
for the precise (narrower) sense in which "separations" is realized.

## Findings reported to the owner (none scope-blocking)

- **F1 (record accuracy, Jech locator).** The A coverage row locates Easton at
  "printed pp.232–237 (PDF pp.1–6)". The printed range is right; the
  parenthetical is not: in the fetched 41-page excerpt printed p.232 is PDF
  p.8 and the Easton section spans PDF pp.8–13 (PDF pp.1–6 are printed
  pp.225–230, Cohen reals through Lemma 15.1). Recommend correcting the
  parenthetical.
- **F2 (record accuracy, Williams locator).** The A/B coverage rows say
  "Definitions 51–55, Lemma 54". Williams numbers Definitions 51, 52, 53 and
  55; **54 is a Lemma** (the λ⁺-cc statement). Recommend "Definitions 51–53,
  55; Lemma 54, Corollary 56".
- **F3 (source stamp not reproducible).** The Shelah row's recorded
  171063 B / `800b0560de50ceda` cannot be reproduced: the Cambridge endpoint
  re-stamps the PDF's `modDate` on every request, so identical content arrives
  in 170988/171060/171186-byte copies. Consecutive fetches differ only in the
  stamped times (12 pages stable; every cited locator verified in the fetched
  copy). Recommend annotating the stamp as non-reproducible rather than
  treating it as tamper evidence; no mathematical consequence.
- **F4 (observation, unused definition).** `def-easton-support-iteration` has
  no consumer item anywhere in the run (`grep` over all batch manifests and
  `items/`). The design bullet "Easton-support products and iterations" is
  therefore covered at definition level only; the product presentation carries
  every proof. The owner may wire the iteration into prose or drop it — no
  scope change is needed for the design bullet.
- **F5 (observation, B-page depth).** The B contract's "sample
  cardinal-invariant separations" is realized by computations: under CH all ten
  listed invariants equal ℵ₁; under MA+¬CH `add(N)=add(M)=c>ℵ₁`. No example
  separates two invariants from each other (the deleted `p=t` item was never on
  B). Under the design's own wording ("sample", "forcing computations") the
  contract is met; recorded so the owner can judge whether they want a genuine
  two-invariant separation as future enrichment.
- **F6 (observation, metatheory wording).** The class-forcing items are stated
  over a countable transitive **GBC+Global Choice+GCH** ground with definable
  `F`. The plan's §2 ledger row for SET-31 reads "ZFC ground model". The
  Step-1 owner notes endorse the class formulation, Jech's Theorem 15.18 is
  itself a class-forcing statement, and relative consistency from ZFC is via a
  constructible well-orderable GCH ground, so this is a wording difference, not
  a scope gap. Flagged for the owner only because item contracts and the ledger
  should read alike.

## Role in the library

- The pair is the declared discharge of the topology/set-theory track licence
  #19 ("Cardinal invariants of the continuum", `plan-topology-set-theory-track.md`
  L339–341: "Licensed by: SET-31, `eastons-theorem-and-cardinal-invariants-of-the-continuum`,
  in the new Foundations completion scaffold") and the same track's licence #17
  names SET-31 among the proof destinations that must publish before the
  dropped 247 `fs-` independence claims can be minted there. The design's own
  false statement `fs-zfc-determines-the-continuum-function` is in scope and
  scaffolded.
- The published remark `rem-easton-support-for-continuum-patterns`
  (page `preservation-cohen-forcing-and-the-continuum`, published) explicitly
  asserts only "orientation" and promises neither Easton's realization theorem
  nor a singular prescription; this pair is its declared realization
  destination. No dependency edge runs from the pair to that remark, and none
  is needed.
- Foundations bootstrapping boundary (#10) is respected on both the item and
  page closures; the pair is not a prerequisite for the recorded catalogue and
  does not consume it.
- No in-run or published consumer besides the B page; no cross-batch edge; all
  prerequisites are published and earlier (orders 5.3–685 < 715).

## Boundary of this decision

This decision certifies **scope** only: that the planned definitions, results
and examples cover the subject the design fixes. It does not certify any
statement or proof (Step 3b and Steps 5–9 own those), and it re-checked only the
source *dispositions and locators* needed for scope. The subject is delivered
in the owner-reduced form: `p=t` is excluded by explicit owner deferral, and if
the owner later wants the full equality or the CSP/peculiar-cut predecessor
pair of `…-scope-recovery-options-memo.md`, that is a new scope decision, not an
omission of the current design. Residual uncertainty: I did not author or
verify the deferred theorem's proof chain or the deep Tukey-morphism proofs;
those are outside this review by instruction.

## Decision and receipt

```bash
node tools/step3-decisions.mjs record-scope --run frontier-35-ten-categories \
  --page eastons-theorem-and-cardinal-invariants-of-the-continuum --decision sufficient \
  --reason "Design SET-31 L663-677 item-for-item on A (41) and B (4); owner p=t deferral recorded (deferred-items.json 2026-09-24) and design text amended accordingly; six sources re-fetched, five byte-identical to stamps, Shelah endpoint re-stamps modDate (F3) with all locators verified; Cichon arrows 3.12/3.16/3.17/3.18 all covered; boundary closure clean (no catalogue item/page in closures); all external deps published and earlier (<=685); no in-run cross-batch or published consumers. Record nits F1 (Jech PDF-page parenthetical), F2 (Williams 'Definition 54' is Lemma 54); observations F4 unused def-easton-support-iteration, F5 B 'separations' are computations, F6 GBC+GC class ground vs ledger 'ZFC ground model'. Report: research/frontier-35-ten-categories-step3a-pair-eastons-theorem-and-cardinal-invariants-of-the-continuum.md"
```

Receipt written to
`research/frontier-35-ten-categories-step3a-review-eastons-theorem-and-cardinal-invariants-of-the-continuum.json`
(reviewer role only; no owner record, no item approval, no scaffold edit).
