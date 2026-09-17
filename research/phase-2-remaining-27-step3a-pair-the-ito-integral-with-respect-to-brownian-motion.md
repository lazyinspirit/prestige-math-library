# Step 3a scope review — The Ito integral with respect to Brownian motion

- Run: `phase-2-remaining-27` (role: alpha, this pair only; batch 8)
- A page: `the-ito-integral-with-respect-to-brownian-motion` (plan order 288.137)
- B page: `the-ito-integral-with-respect-to-brownian-motion-examples` (plan order 288.138)
- Scope decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`;
  receipt `research/phase-2-remaining-27-step3a-review-the-ito-integral-with-respect-to-brownian-motion.json`)
- Scope is judged here, not proof correctness. No scaffold, item contract, plan,
  page, coverage or owner record was edited.

## Evidence read

| Artifact | Use |
|---|---|
| `research/phase-2-remaining-27-batch-8.pages.json` | Current A inventory (19 items, in order), B inventory (8 items, in order); page `requires`; companion pairing; batch 8 also carries the PT-22 pair |
| `research/phase-2-remaining-27-batch-8.coverage.json` | Two A-page source records (van der Vaart; Lawler), scope sentence, `included`/`inline`/`out-of-scope` dispositions, `fetch_verified` blocks |
| `research/phase-2-remaining-27-batch-8.notes.md` | Scaffolder record: exact 19/8 design preservation, local closure of the "preview" example, source audit, choice ledger, published BV-metadata defect (outside this pair), gate results |
| `research/phase-2-remaining-27-batch-8.cross-batch-dependencies.json` and `research/phase-2-remaining-27-cross-batch-dependencies.json` | 25 derived edges all `verified`; all 15 batches reviewed; no unreviewed batch or orphaned review; this pair's 6 out-edges into batch 7 verified |
| `research/plan-probability-track.md` | Prose design: §0A.3 exact `requires` row (L271); §3 subject/scope denial (L519, L711); §5 PT-21 heading, source-backing read, A items L2069–2087, well-definedness plan L2089–2101, B items L2104–2111 (L2052–2112); §6 forward-reference seam (L2211); §7 obligation rows 40–42 (L2269–2271); §8 choice ledger (L2314–2315); §9 future-track reserve (L2355–2361); §10 60-item cap (L2389–2411, L2864); §11.0 acquisition table (L2428–2445); §11.5 van der Vaart harvest (L2582–2601); §11.7 Lawler harvest (L2725–2734); §11.9 source matrix (L2800) |
| `research/plan-spec.json` | Page identity, order, companion and exact `requires` for both pages; the only page consumers are the B companion and `itos-formula-and-brownian-martingales` |
| `research/phase-2-remaining-27-owner-authoring-direction.md` | Binding run direction: complete local proofs from declared suppliers; exact ID/companion ownership; no new pairs; no PT-21-specific amendment |
| `research/phase-2-remaining-27-alpha-step1-drift.md` (PT-21 entry) | Verdict `no-drift`; declared edges match PT-21 exactly and close the adapted-process, isometry/completion, martingale, stopping, path, product-measure and L2 inputs |
| `research/phase-2-remaining-27-step1-owner-repair.md` | The run's only owner repair touched four later AG/scheme pages, not this pair |
| 27 `research/phase-2-remaining-27-step1-<item>.json` records | All 27 items carry current non-owner `ready` decisions in this run |
| Batch-8 consumer manifests (PT-22 A/B) | Consumer interfaces: 21 consumer items (7 in this B companion, 14 on `itos-formula-and-brownian-martingales`) draw on 16 distinct A items |
| Both cited source PDFs, re-fetched this review | Independent confirmation of byte counts and `sha256_16`, and of every load-bearing numbered result below |

## Role in the library

PT-21 is the Brownian-integration page between PT-20 (Brownian path
properties; batch 7) and PT-22 (Ito's formula and Brownian martingales; the
sibling pair of this same batch). Its A page requires exactly PT-4, PT-10,
PT-12–PT-14, PT-18–PT-20 plus `product-measures-and-the-fubini-tonelli-theorems`
and `the-lp-spaces-holder-minkowski-and-riesz-fischer` — the §0A.3 table (L271),
the manifest, and the drift verdict agree. The B page requires only its A
companion.

Consumer checks: 27/27 items resolve all declared dependencies (24 distinct
published items on 11 published pages, plus 5 distinct batch-7 items); 0
unresolved IDs, 0 B-page suppliers, 0 intra-page forward edges. Every
published supplier's home page lies in the 191-page transitive closure of the
page `requires` except the run-wide Axiom-of-Choice spine
(`thm-choice-implies-dependent-implies-countable-choice`, declared on 25 of
27 items exactly as elsewhere in the run). The only consumers are the B
companion and PT-22 (21 items, 16 distinct A items); all six derivative edges
into batch 7 are `verified` in the batch-8 record, and the unified ledger
reports no unreviewed batch and no orphaned review. No published item
consumes either page (checked across `items/` and `plan-spec.json`).

## Inventory against the prose design

All 19 design A items (plan L2069–2087) are present, verbatim in ID and order,
with no dropped, moved or added item; all 8 design B items (L2104–2111) are
present, verbatim in ID and order. The design's binding realization clauses
survive in the statements and strategies: representation independence is
proved before the notation is used (D6); the two descents — completion and
`dt⊗P`-quotient — are separate items (D10–D11); the continuous martingale
version is obtained from maximal control (D13–D14); localization uses the
canonical energy hitting times (D15–D16); stopping and the named
deterministic-partition convergence mode are explicit (D17–D18); and the
deterministic-integrand Gaussian law includes the finite-family covariance
clause (D19). Plan §7 obligation rows 40, 41 and 42 are realized by items 6,
11 and 16. The page stays far below the 60-item A ceiling, and the two
design-denied topics (general semimartingale/local-martingale integration;
BDG beyond the p=2 Doob estimate) are declared out of scope with reasons in
the coverage, matching plan §3 (L711) and §9 (L2355–2361).

## Source coverage

I re-fetched both cited treatments on 2026-09-17 and reproduced the coverage
records exactly: van der Vaart `stochint.pdf` 941777 bytes,
`sha256_16 = 0706a4b2ed1323fd`; Lawler `finbook.pdf` 1080535 bytes,
`sha256_16 = 484521433950aad8`. I then read the load-bearing results and their
immediate proofs:

- van der Vaart §5.1: Definition 5.1 (predictable sigma-field generated by
  left-continuous adapted, equivalently continuous adapted, processes),
  Definition 5.3 (progressive sigma-field), Lemma 5.5 (generating rectangles
  `{0}×F_0`, `(s,t]×F_s`), Examples 5.11 and 5.14 — supporting the pair's two
  predictability items.
- §5.3: Definition 5.20 (elementary integral), Lemma 5.21 (isometric
  extension), Lemma 5.22 (density with uniformly bounded approximants),
  Lemma 5.23 (elementary isometry), Definition 5.25 (L2 extension), Theorem
  5.26 (i)–(iv) (L2 martingale, cadlag, continuous version, jump identity),
  Lemma 5.28 (stopping).
- §5.4–§5.5: Definition 5.32, Lemma 5.33 (overlap agreement), Theorem 5.36
  (localized continuous version), Lemma 5.42 and Definition 5.44 (extension
  to measurable adapted integrands), Lemma 5.45(i)–(ii) (the `∫X²dt<∞` a.s.
  criterion and energy hitting times) — the exact criterion the pair's
  localization item uses.
- §5.8: Definition 5.62, Theorem 5.64 (fixed-time convergence in
  probability), Lemma 5.77 (`[X·Y,Z]=X·[Y,Z]`) — the basis for
  `[∫H dB]=∫H²ds`.
- Lawler §2.8 (Theorem 2.8.2: mesh-to-zero convergence in probability and
  a.s. under summable mesh), §3.2.2 (simple processes; Proposition 3.2.1
  linearity, martingale, variance rule, continuity), §3.2.3 (Lemma 3.2.2,
  Propositions 3.2.3–3.2.5, Proposition 3.2.4 maximal convergence,
  Proposition 3.2.7 continuous bounded-variation martingales are constant),
  Theorem 3.2.6 (`⟨Z⟩_t=∫A²ds`), equation (3.8) and Exercise 3.8
  (deterministic integrands are normal).

Two honest coverage qualifications. (1) Both cited sources state convergence
at fixed time for a fixed partition family; the manifest's item 18 claims the
stronger uniform-on-compacts-in-probability limit along every deterministic
vanishing-mesh sequence. That stronger form is the standard ucp
characterization of quadratic variation for continuous semimartingales, and I
confirmed it in the literature; the local proof route is the item's own
strategy (centered squared increments, discrete Doob, continuity, then
elementary/L2/localization), so the ucp clause is a mandated local
obligation, not a citation. (2) The coverage disposes of its topic honestly
but not one-row-per-item: 18 of 19 A items and 2 of 8 B items are named in
`contents` rows; the remaining rows are locally derived boundary examples
whose claims are consequences of the declared A items and whose item-level
references point at the same two verified sources. Mechanical checks pass on
the current files: `manifest-deps` 56 items / 0 errors; `coverage-checklist`
2 pages, 50 harvested results, 0 errors, 0 warnings.

## Observations for the Step 3b author and owner (not item approvals)

1. **van der Vaart isometry locator.** The coverage rows and the item sources
   for `lem-cross-ito-isometry` and
   `ex-covariance-of-two-deterministic-ito-integrals`, and one row for
   `thm-ito-isometry-for-elementary-integrands`, cite "Lemma 5.22"; the
   elementary isometry is Lemma 5.23 (5.22 is the density lemma). The content
   is supported either way; the author should correct the locator.
2. **Lawler locator for Brownian infinite variation.** The coverage row and
   the counterexample's reference line cite §2.8, which proves mesh-to-zero
   quadratic variation, not infinite total variation. Lawler's route to
   infinite variation is §3.2.3 Proposition 3.2.7 together with `⟨B⟩_t=t`.
   The load-bearing supplier is the batch-7 corollary
   `cor-brownian-paths-have-infinite-total-variation-on-every-interval`
   (declared and reviewed); recommend citing it, optionally alongside
   §3.2.3.
3. **The "preview" example is closed locally, not by PT-22.** Plan L2107 and
   the §6 seam row (L2211) anticipated that
   `ex-integral-of-brownian-motion-against-itself-preview` would be computed
   from PT-22; the batch record instead proves it from left-dyadic sums plus
   batch-7 uniform dyadic quadratic variation, consistent with the owner
   direction's ban on forward proof dependencies. The ID and claim are
   unchanged; the contract should state explicitly that no forward pointer
   exists.
4. **Adapted-integrand extension not minted (enrichment option, not a gap).**
   The pair integrates predictable integrands only. van der Vaart §5.5's
   Lemma 5.42 / Definition 5.44 (every measurable adapted process equals a
   predictable one `λ×P`-a.e.; the integral extends to `∫X²ds<∞` a.s.) is not
   an item here; item 15 uses §5.5 only for Lemma 5.45's integrability
   criterion. No declared consumer needs the wider class — PT-22's diffusion
   coefficient and representation integrand are both predictable — so this is
   a boundary note. If the owner wants the full AV integrand class,
   enrichment would be one definition plus one lemma with no `requires`
   change.
5. **Coverage wording for the BDG exclusion.** The row says BDG "belongs on
   the planned general continuous-local-martingale page"; no such page exists
   in any live plan (the future semimartingale/SDE track "has no ids",
   plan L592). The exclusion itself matches plan §3 (L711). Recommend
   rewording to "a future track" if the coverage is ever touched.
6. **Choice accounting.** 25 of 27 items state full AC and declare
   `def-axiom-of-choice` plus the AC⇒DC⇒AC_ω bridge; two items are ZF. Plan §8
   records PT-21 as ZF after the L2-completeness supplier (L2314–2315). The
   declarations are inherited from declared published suppliers (for example
   `thm-doob-lp-maximal-inequality` itself declares AC), so this is a
   conservative over-declaration consistent with the run-wide convention; the
   fine-grained axiom accounting remains Step 3b/5 work.

## Potentially defective published item reported to the owner (not this pair)

`items/thm-bv-functions-are-differentiable-almost-everywhere.md` (published;
precheck pass, judge pass 2026-09-05) states "Assume the Axiom of Countable
Choice" but its `deps` list is
`[def-bounded-variation-and-total-variation, thm-jordan-decomposition-for-bv-functions, thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun]`
and omits `def-countable-choice`, which its supplier
`thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun`
declares on line 33 and carries in its own `deps`. Recommended repair: add
`def-countable-choice` to the theorem's `deps` and reconcile the host page's
axiom metadata. This is a metadata/dependency-interface defect only; the proof
argument is not in question here. The scaffold record
`research/phase-2-remaining-27-batch-8.notes.md` (L46) already states the
finding, and this pair does not consume the item (the B counterexample uses
the batch-7 direct corollary instead), so it does not affect the scope
decision. I did not write it into
`research/published-consumer-supplier-ledger.md` or `research/defect-ledger.jsonl`,
where (grep, this review) it currently has no entry; step3a writes are
confined to this report and the scope receipt.

## Boundary notes for the owner (not defects against the design)

- General semimartingale or continuous-local-martingale integration, the full
  BDG family, Girsanov, SDE existence and stochastic PDEs stay outside this
  block (plan L592, L711, L2355–2361). PT-21 deliberately mints only the
  Brownian-integrator fragment, and a future track must not retroactively
  broaden it.
- The B page's four non-named examples/counterexamples (non-adapted isometry
  failure; pathwise Riemann–Stieltjes failure; product-measure a.e. versus
  pointwise equality; time-changed quadratic variation) are boundary
  illustrations of items on the A page rather than new mathematics; all their
  claims checked out in this review.

## Limits of this review

I verified scope, design fidelity, dependency resolution, source support and
consumer interfaces; I did not verify the scaffold's proofs, its proof
strategies line by line, or its choice accounting. My source reading covered
each load-bearing numbered result and its immediate proof context (complete
where cited above), not every page of the cited ranges. No owner scope
receipt for this pair exists in this run; the duplicate run-27 task file with
hash `0a32869f40e4f43f` is the same text as the dispatched
`0e40ce1c1f375ec7` task, and the stopped `phase-2-remaining-26` attempt is
evidence only.

## Decision

`sufficient`: the planned definitions, results, examples and counterexamples
cover the intended subject — predictable Brownian integration from elementary
processes through L2 completion and isometry, continuous martingale versions,
maximal control, localization, stopping, quadratic variation and
deterministic Gaussian integrals — reproduce the PT-21 design inventory
exactly (19 A / 8 B), are backed by two byte- and hash-verified complete
treatments whose load-bearing results I read, and supply exactly the declared
IDs that PT-22 needs. No enrichment, merger or pair change is requested; the
locator and wording items above are authoring-step corrections only.
