# Batch 7 notes — `tensor-product-crystals-and-highest-weight-crystal-uniqueness` / `…-examples`

Run `frontier-44-special-representation-examples-28`, role beta, label batch-7, 2026-10-09.
Written files: `research/frontier-44-special-representation-examples-28-batch-7.pages.json`,
`…-batch-7.coverage.json` (9 fetch-verified sources), `…-batch-7.cross-batch-dependencies.json`
(55 rows), the 14 `…-step1-<id>.json` readiness records, and this note. No published content, shared plan,
engine state or verdict was edited; the only out-of-batch writes were the unified-ledger refresh after this
input and the marked batch-7 Step-1 section appended to `briefs/tasks/frontier-dependency-ledger.md`.

## Scope built

- A page `tensor-product-crystals-and-highest-weight-crystal-uniqueness` (order 1530, requires
  `kashiwara-operators-and-crystal-lattices`, `tensor-products-of-modules`): **10 new items**
  (2 definitions, 3 lemmas, 4 theorems, 1 proposition), dependency levels 4–9.
- B page `tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples` (order 1531):
  **4 new items** (3 examples, 1 counterexample), levels 8–11.
- Full inventory (manifest order; `L` = recomputed in-run `dependency_level`):
  - A: `def-tensor-product-of-crystals` L5; `lem-i-string-components-of-a-crystal-lattice` L5;
    `lem-tensor-products-of-integrable-weight-modules-are-integrable` L4;
    `thm-crystal-basis-tensor-product-rule` L6; `lem-crystal-tensor-product-weight-epsilon-and-phi-formulas` L7;
    `def-highest-weight-element-and-connected-highest-weight-crystal` L6;
    `thm-the-highest-weight-crystal-b-lambda-exists` L7;
    `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals` L8;
    `thm-highest-weight-components-in-a-tensor-product-crystal` L9;
    `prop-dual-crystal-and-reversal-conventions` L8.
  - B: `ex-tensor-crystal-b-one-tensor-b-one-for-sl-two` L8;
    `ex-highest-components-in-a-small-type-a-two-tensor-crystal` L10;
    `ex-dual-crystal-reverses-arrows-and-weights` L11;
    `cex-changing-the-tensor-equality-convention-changes-the-crystal` L8.
- No cycles; every label equals `item-dependency-levels`' recomputed value; items are listed in a linear
  extension of the page dependency graphs. Published and out-of-run suppliers never raise a level; the
  highest levels on the page come from the in-run chain QG-1 → QG-2 (batch 5, max L5) → QG-3 (batch 6, max L8).
  The B page's maximum (L11, `ex-dual-crystal-reverses-arrows-and-weights`) is one plus the L10 of its
  same-page supplier `ex-highest-components-in-a-small-type-a-two-tensor-crystal`, whose own level comes from
  that batch-5/batch-6 chain (deviation 7).
- Every necessary local prerequisite is on the A page ahead of its consumers: the two items the design did
  not name (`lem-i-string-components-of-a-crystal-lattice` and
  `lem-tensor-products-of-integrable-weight-modules-are-integrable`) exist because the tensor rule needs the
  lattice string decomposition and the tensor-product integrability that no earlier page of this run supplies
  (see deviations 1–2).

## Which design controls, and design-vs-plan conflicts

Binding texts read before construction: `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
(authorizes the 24 special-topics pairs, suppliers before consumers, no publication) and the design
`research/plan-quantum-groups-track.md` **QG-4** at L130–L138, whose B companion is
`tensor-product-crystals-and-highest-weight-crystal-uniqueness-examples` and whose item list is exactly the
eight design items retained here. `research/plan-spec.json` orders 1530/1531 carry the same ids, kinds,
companions and `requires` (1530 requires `kashiwara-operators-and-crystal-lattices` = design QG-3 and
`tensor-products-of-modules`; 1531 requires 1530) with empty item arrays, so the plan controls and was
followed. **No design-vs-plan conflict was found.** The design's QG-4 section fixes the conventions and the
warning that are preserved verbatim in the manifest: the left-to-right/equality-case convention in
`def-tensor-product-of-crystals`, the instruction that the uniqueness theorem is Kashiwara's Theorem 3 about
crystal bases of integrable modules and "do not assert that rank-one normality alone characterizes an
arbitrary abstract coloured graph" (recorded explicitly in
`def-highest-weight-element-and-connected-highest-weight-crystal` and in the uniqueness theorem), and the
signature-rule characterization in `thm-highest-weight-components-in-a-tensor-product-crystal`.

## Owner direction conformance (2026-10-08 quantum proof-route decision)

The QG-4 page consumes only the repaired QG2–QG3 contracts and never imports the two late QG5 global theorem
IDs: it uses the chosen P-label grading of `def-quantum-weight-module-and-integrability` (never spectral
eigenspaces), admissible finite string endpoints from `thm-unique-kashiwara-i-string-decomposition`, the
**actual rank-one tensor rule** `lem-rank-one-tensor-strings-have-the-crystal-limit-rule` as the rank-one
block of the tensor rule, and the **cyclic highest tensor summand** of
`lem-highest-weight-tensor-maps-and-their-adjunction` — nowhere is the whole tensor product asserted cyclic
or the tensor product of highest weight modules asserted simple. The formal `φ_i` of B(∞) is not equated with
an infinite lowering length (`prop-dual-crystal-and-reversal-conventions` explicitly excludes the negative-half
dual, and no QG-4 item uses B(∞)). Raising-operator projection compatibility is not consumed. No late global
integral-freeness or tensor-bar input occurs.

## Recorded deviations and findings for Alpha/owner (none weakens an approved claim)

1. **A lattice string-decomposition lemma added beyond the design's eight A items.**
   `lem-i-string-components-of-a-crystal-lattice` (Kashiwara Proposition 2.3.2(ii); JKK Lemma 4.5(a) and
   Theorem 4.7) proves that the $i$-string components of a vector of a crystal lattice lie in the lattice,
   that $L=\bigoplus_n\tilde f_i^{\,n}(L\cap\ker E_i)$, and that a residue class in $B$ has exactly one
   component surviving modulo $q$. The design's tensor rule item says "using the coproduct and $sl_2$
   strings"; without this lemma the general tensor rule would have to assume that the chosen lifts of basis
   elements are single string components, which is exactly JKK's Theorem 4.7(b) and not part of the QG-3
   definition item. It is homed locally, ahead of its consumer.
2. **A tensor-integrability/crystal-lattice lemma added beyond the design's eight A items.**
   `lem-tensor-products-of-integrable-weight-modules-are-integrable` records that $M_1\otimes M_2$ is again a
   chosen $P$-graded type-one integrable weight module (via the $q$-binomial expansion of $\Delta(F_i^n)$),
   that finite-dimensional weights and bounded support transfer, and the easy half of the crystal-lattice
   axioms for $L_1\otimes_{A_0}L_2$. The design's tensor rule theorem needs this to even parse "(L_1⊗L_2,
   B_1⊗B_2) is a crystal basis of $M_1\otimes M_2$", and the tensor-component theorem needs it to apply the
   uniqueness theorem to $M_1\otimes M_2$.
3. **Design item order preserved, with two added items interleaved.** The design lists the tensor rule before
   the ε/φ formula lemma; the manifest keeps that order — the tensor rule verifies the partial-inverse axiom
   of the two-case rule inline (Step 5.1 of its strategy), and the following lemma packages the max formulas
   and the consistency statement for later consumers (the dual-crystal proposition and the companion page).
   The two added items are placed before the tensor rule; no design item was reordered or weakened.
4. **Axiom of choice.** `def-axiom-of-choice` is declared in exactly two batch-7 items, each with its use
   identified:
   - `thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals` — AC is used exactly
     once, to obtain the decomposition of $M$ into simple integrable highest weight modules from the batch-5
     supplier `prop-integrable-quantum-highest-weight-modules-are-semisimple` (simultaneous selection of
     bases of the finite-dimensional maximal-vector spaces). The lattice descent, the lattice comparison and
     the component identification (Steps B–G of its strategy) are choice-free given that decomposition.
   - `thm-highest-weight-components-in-a-tensor-product-crystal` — AC is inherited through that uniqueness
     theorem; the highest-vertex criterion and the component structure involve no further nonconstructive
     step.
   - The B-page example `ex-highest-components-in-a-small-type-a-two-tensor-crystal` declares the same
     inherited AC and identifies its single use. All other batch-7 items — including the tensor rule, the
     ε/φ formulas, the category lemma and the counterexample — are choice-free. No incompatible-axiom branch
     is introduced.
5. **Two sources added beyond the design's source ledger (Kashiwara, JKK, Berkeley).** Shimozono's
   *Crystals for Dummies* supplies the exact dual-crystal transformation formulas and the tensor swap
   (its §2.3.5 (2.17), Example 2.27, Lemma 2.28), and
   Assaf–Dranowski–González *Extremal tensor products of Demazure crystals* (§2 axioms and §5 tensor data)
   supplies the max formulas for $\varepsilon_i,\varphi_i$ of a tensor product, the highest-weight-crystal
   definition $B=F(b_\lambda)$ with the explicit caveat that not every such crystal is $B(\lambda)$, and an
   abstract cross-check of Theorem 5.2. Both are accessible and were read in full for the cited ranges; the
   Berkeley lecture notes remain the book-length treatment. The predecessor batch 6 already used the
   Berkeley notes as its third source, so the pair's source count is unchanged in spirit and improved in
   coverage of the new items (the dual crystal and the max formulas have no locator in the three original
   QG-4 sources).
6. **Counterexample provenance.** `cex-changing-the-tensor-equality-convention-changes-the-crystal` is the
   only `ai-generated` statement in the batch (`generation.role: counterexample`, allowed by the schema);
   its proof is `ai-altered` from the rank-one computation of the QG-3 supplier. All other statements are
   `literature-derived` with `ai-altered` proofs.
7. **Missing same-page dependency declared during the final verification pass.**
   `ex-dual-crystal-reverses-arrows-and-weights` defines its (B)/(C) object as the standard
   $\mathfrak{sl}_3$ crystal *of* `ex-highest-components-in-a-small-type-a-two-tensor-crystal` and its (B)
   verification quotes that item's step-1.1 arrows, weights and $\varepsilon$-values, but the edge was not
   declared while the item cited it with a Statement wikilink. Per the library rule that a Statement or
   Facts wikilink is load-bearing, the dependency is now declared (`deps` grows to 8), the label is
   recomputed $9\to 11$ (one plus the L10 supplier), and the strategy records the exact use: only the finite
   vertex data of that example's step 1.1 is consumed; its step-4.1 component identification — the sole use
   of the axiom of choice there — is not used, so this item stays choice-free. The readiness record was
   re-recorded for the changed item; no other batch-7 label, hash or consumer is affected (no run item
   depends on this B-page example), and the derived cross-batch ledger is byte-identical after refresh.

## Choice

`def-axiom-of-choice` (published, out-of-run) is declared in exactly the two A items and the one B example
listed in deviation 4; every other item states explicitly that no choice principle is used, and the
choice-free items were re-read for accidental uses (finite string sums, finite-dimensional weight spaces
only where hypotheses state them). No item adds a choice hypothesis to a choice-free supplier.
After deviation 7, the dual-crystal example depends on the sl3 example, which declares
`def-axiom-of-choice` for its own tensor-component identification; the dual example does not carry that
declaration because it consumes only the finite, choice-free vertex data of that supplier's step 1.1, as
stated in both its strategy and its readiness record. The items that do rely on the AC-using component
identification — the uniqueness theorem, the tensor-component theorem and the small-$A_2$ example — carry
`def-axiom-of-choice` themselves, so the axiom is declared exactly where it is used.

## Sources

Five sources back the pair; the two independent module-level treatments are JKK §5 and the Berkeley
lecture notes, with Kashiwara's Theorem 3 as the uniqueness route and Shimozono/Assaf–Dranowski–González
for the combinatorial statements.

- M. Kashiwara, *On crystal bases of the q-analogue of universal enveloping algebras*, Duke Math. J. 63
  (1991) 465–516, `https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf`
  — §§2.3 (Prop. 2.3.2), 2.6 (Theorem 3, Lemmas 2.6.1–2.6.3), 3–7 (deferred to QG-3/QG-5).
- K. Jeong, S.-J. Kang and M. Kashiwara, *Crystal Bases for Quantum Generalized Kac–Moody Algebras*,
  arXiv:math/0305390, `https://arxiv.org/pdf/math/0305390` — §4 (Lemma 4.5, Theorem 4.7), §5 (Example 5.1,
  Theorem 5.2 and its proof), §7 remark on uniqueness.
- R. Borcherds, M. Haiman, T. Johnson-Freyd, N. Reshetikhin and V. Serganova, *Berkeley Lectures on Lie
  Groups and Quantum Groups* (book-length lecture notes, 18 January 2024),
  `https://categorified.net/LieQuantumGroups.pdf` — Ch. 13 §13.3 (Lemma 13.3.0.10, Propositions
  13.3.0.11–13.3.0.12, Theorem 13.3.0.18 with proof, Examples 13.3.0.3 and 13.3.0.21).
- M. Shimozono, *Crystals for Dummies* (lecture notes, 28 August 2005),
  `https://www.aimath.org/WWN/kostka/crysdumb.pdf` — §2.3.4 (Warning 2.18), §2.3.5 ((2.17), Example 2.27,
  Lemma 2.28), §2.4.3–2.4.4 (Theorem 2.48, Corollary 2.52).
- S. Assaf, A. Dranowski and N. González, *Extremal tensor products of Demazure crystals*,
  arXiv:2210.10236, `https://arxiv.org/pdf/2210.10236` — §2 (axioms (C1)–(C4), highest weight crystals and
  the caveat), §5 (tensor product data with the max formulas, Theorem 5.1).

Dispositions: A page 19 included + 7 inline + 11 deferred to the named QG-2/QG-3/QG-5 destinations + 1
already-published + 4 out-of-scope (15 declined results carry individual reasons); B page 9 included + 4
inline, with no declines. No retrieval failed: `source-fetch-check --stamp` reports 9/9 fetch-verified and 9/9
resolved with 0 documented drops, so no `source_resolution` block is required. The Shimozono notes' tensor
order is the opposite of the library's convention (its Warning 2.18); this is recorded in the coverage file
and the library's convention is fixed in `def-tensor-product-of-crystals` with the swap lemma re-proved
locally rather than transferred.

## Cross-batch dependencies

`…-batch-7.cross-batch-dependencies.json` has 55 rows, all `status: open`, each with the exact required
interface and the consumer's use. Batch-7 consumes only batch-5 suppliers
(`def-quantum-weight-module-and-integrability`, `thm-integrable-quantum-highest-weight-module-exists-and-is-unique`,
`prop-integrable-quantum-highest-weight-modules-are-semisimple`, page
`divided-powers-integral-forms-and-quantum-highest-weights`) and batch-6 suppliers
(`def-crystal-graph-epsilon-phi-and-weight`, `def-crystal-lattice-and-crystal-basis`,
`def-kashiwara-crystal-operators`, `thm-unique-kashiwara-i-string-decomposition`,
`lem-rank-one-tensor-strings-have-the-crystal-limit-rule`, `def-kashiwara-lattices-lambda-and-infinity`,
`thm-grand-loop-existence-of-highest-weight-crystal-bases`, page `kashiwara-operators-and-crystal-lattices`).
The uniqueness-theorem row records that the batch-5 semisimplicity supplier's declared axiom of choice is
inherited. Suppliers are scaffolded and recorded ready but not yet authored, so the edges stay open for the
ordinary Step-3/Step-5 supplier review; no published item supplies them and no in-run supplier is treated as
proved merely because it is scaffolded. Supplier direction owed by sibling consumer batches (their owners
write these rows; this scaffold neither edits nor verifies them): after the refresh the unified ledger lists
the edges batch 8 `balanced-triples-and-global-crystal-bases` → this A page (plan QG-5 requirement) and
batch 9 `quantum-affine-type-a-and-level-one-fock-space` → this A page (plan QG-6 requirement), with no
review row yet, as expected before those batches are scaffolded. The unified ledger was refreshed after this
input, and a marked batch-7 Step-1 section was appended to `briefs/tasks/frontier-dependency-ledger.md`.

## Checks actually run (final pass on the stable files)

- `node tools/manifest-deps.mjs research/…-batch-7.pages.json` → 14 item(s), 0 normalized, **0 errors**;
  the same check over all 28 batch manifests of the run → 399 item(s), 0 normalized, **0 errors**.
- `node tools/content-policy.mjs research/…-batch-5.pages.json research/…-batch-6.pages.json research/…-batch-7.pages.json --manifest-only`
  → 56 scoped item(s), **0 errors, 0 warnings**. The whole-run invocation over all 28 manifests reports 395
  scoped items and **4 errors, all on batch-8 items** (`thm-integral-triangular-decomposition-for-the-lusztig-form`,
  `thm-quantum-highest-weight-modules-deform-the-classical-weight-character`) whose new QG-5 dependencies are
  not declared by batch 8's manifest; no error touches either batch-7 page or item.
- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  → 26 errors: 23 "empty scaffold inventory" for the 12 other batches not yet scaffolded and 3 label
  mismatches in other batches' manifests; **0 errors touch either batch-7 page or item**, and every
  batch-7 label matches the recomputation.
- `node tools/coverage-checklist.mjs research/…-batch-7.coverage.json --require-destination` → 2 pages,
  55 harvested results, **0 errors, 0 warnings**.
- `node tools/source-fetch-check.mjs --coverage research/…-batch-7.coverage.json --stamp` → **9/9
  fetch-verified** (9 newly stamped), 9/9 resolved, 0 documented drops; re-checked in gate mode → 9/9
  fetch-verified.
- `node tools/url-sweep.mjs --coverage research/…-batch-7.coverage.json --recover --fail-on-dead --out /tmp/b7/live/liveness.json`
  → **5/5 live**, 0 failed, 0 blocking, 5 citation decisions, 0 drops.
- `node tools/source-backing.mjs --coverage research/…-batch-7.coverage.json --liveness /tmp/b7/live/liveness.json --require-verified`
  → **15 authored results, all backed** by an openable source.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28`
  → pages 1530/1531 listed with 10/4 items and their planned `requires`; the only batch-7 diagnostic is the
  advisory `[redundant-prereq]` for the page's own declared `tensor-products-of-modules` requirement. The
  command still fails on **4 `[resolve]` errors belonging to batch 8's `balanced-triples-and-global-crystal-bases`**
  (its two rehomed global items reference QG-5 items that are neither planned nor on disk), outside this batch.
- `node tools/manifest-integrity.mjs --run frontier-44-special-representation-examples-28` → 56 pages owed,
  56 in the manifests, **no scope drift**.
- `node tools/extcheck.mjs --quiet` → **OK**, no active recorded-not-proved items, external references or
  fallback records.
- `node tools/depcheck.mjs` → exit 1 on pre-existing corpus-wide debt (2,729 `published-unaudited`
  findings and other published items); **no line mentions any batch-7 item or page** (grep count 0 for all
  14 ids and both page ids). Unrelated published debt does not block this batch.
- `node tools/step1-decisions.mjs check --run frontier-44-special-representation-examples-28` → 395 run
  items, 366 ready and closed=false overall; **none of the 14 batch-7 items is in the work list** (the
  remaining 52 work entries belong to other batches). All 14 records were recorded in dependency order; the
  three records invalidated by the Step-E wording fix in the uniqueness theorem's strategy were re-recorded
  with their current dependency arrays.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28`
  → refreshed and deduplicated; 57 edges touch batch-7 (55 owned rows plus the batch-8 and batch-9 page
  consumers).

### Final verification pass after the deviation-7 edge fix

Re-run on the edited manifest and the re-recorded item (all other rows below are unchanged, re-checked
only for the possibility that the extra declared edge disturbed them):

- `node tools/manifest-deps.mjs research/…-batch-7.pages.json` → 14 item(s), 0 errors; over all 28 batch
  manifests → 399 item(s), **0 errors**.
- `node tools/item-dependency-levels.mjs check --run …` → 23 errors, **all** "empty scaffold inventory"
  for batches not yet scaffolded; every scaffolded label (including the recomputed L11) matches, and no
  error touches either batch-7 page or item.
- `node tools/content-policy.mjs research/…-batch-5.pages.json research/…-batch-6.pages.json research/…-batch-7.pages.json --manifest-only`
  → 56 scoped item(s), **0 errors, 0 warnings**; whole-run → 399 scoped, 4 errors, all batch-8 (unchanged).
- Direct `loadStep3` + `step1Decision` closure check for the 14 batch-7 ids → **14/14 closed** after the
  re-record (the fix invalidated only `ex-dual-crystal-reverses-arrows-and-weights`, re-recorded with its
  current 8-dependency array).
- `node tools/coverage-checklist.mjs research/…-batch-7.coverage.json --require-destination` → 2 pages,
  55 results, 0/0 (unchanged).
- `node tools/frontier-dependency-ledger.mjs refresh --run …` → refreshed; the derived
  `research/…-cross-batch-dependencies.json` is byte-identical (md5 unchanged) because the new edge is
  inside batch 7.
- `node tools/validate-plan.mjs research/plan-spec.json --run …` → pages 1530/1531 still list 10/4 items;
  the only batch-7 diagnostic remains the advisory `[redundant-prereq]`, and the 4 `[resolve]` failures are
  still batch 8's.

## Unresolved findings and residual risk

- Batch-7 has no open mathematical blocker: all 14 readiness records are `ready`, and every dependency is
  either a published item, a batch-5/batch-6 scaffolded supplier (edges open, tracked) or an earlier
  batch-7 item.
- Residual mechanical risk (the batch-1 precedent): a readiness record's hash covers the transitive closure
  against the whole run's manifests, so sibling batches that scaffold preserved pages can invalidate these
  fingerprints again after this dispatch. The three records refreshed here are current as of this dispatch;
  the Step-1 stage check remains the engine's.
- The main honesty item for Step 3/Step 5 is **proof granularity**: the tensor-rule strategy names every JKK
  Theorem 5.2 step and the rank-one congruence it consumes, and the uniqueness strategy re-derives the
  descent (Kashiwara Lemma 2.6.1(ii)), the lattice comparison (Lemma 2.6.2) and the splitting (Lemma 2.6.3)
  in the library's conventions, but the individual coefficient computations and the source's printed
  induction for the splitting must be reproduced and reviewed before either theorem is treated as proved.
  The readiness records do not substitute for that review.
- No published defect was found in the batch-7 dependency closure. The batch-8 manifest resolve errors and
  `depcheck`'s published-unaudited findings are outside this batch and are not repaired here.
