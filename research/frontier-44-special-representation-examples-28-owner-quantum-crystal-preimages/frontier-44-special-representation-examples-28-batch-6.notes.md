# Batch 6 notes — `kashiwara-operators-and-crystal-lattices` / `…-examples`

Run `frontier-44-special-representation-examples-28`, role beta, label batch-6, 2026-10-08.
Written files: `research/frontier-44-special-representation-examples-28-batch-6.pages.json`,
`…-batch-6.coverage.json` (with fetch stamps), `…-batch-6.cross-batch-dependencies.json` (20 rows),
the 15 `…-step1-<id>.json` readiness records, and this note. No published content, shared plan,
engine state or verdict was edited; the only out-of-batch writes were the batch-6 row update in the
owned cross-batch input, the unified-ledger refresh, and the marked batch-6 Step-1 section appended to
`briefs/tasks/frontier-dependency-ledger.md`.

## Scope built

- A page `kashiwara-operators-and-crystal-lattices` (order 1528, requires
  `divided-powers-integral-forms-and-quantum-highest-weights`): **11 new items** (5 definitions,
  2 lemmas, 4 theorems), dependency levels 0–7.
- B page `kashiwara-operators-and-crystal-lattices-examples` (order 1529): **4 new items**
  (3 examples, 1 counterexample), levels 5–8.
- Full inventory (manifest order; `L` = recomputed in-run `dependency_level`):
  - A: `def-the-local-ring-at-q-zero` L0; `thm-unique-kashiwara-i-string-decomposition` L1;
    `def-kashiwara-crystal-operators` L2; `thm-the-i-string-decomposition-of-the-negative-half` L1;
    `def-crystal-lattice-and-crystal-basis` L3; `def-crystal-graph-epsilon-phi-and-weight` L4;
    `def-kashiwara-lattices-lambda-and-infinity` L4;
    `lem-highest-weight-tensor-maps-and-their-adjunction` L4;
    `thm-grand-loop-existence-of-highest-weight-crystal-bases` L5;
    `lem-crystal-operators-commute-with-highest-weight-projection-modulo-q` L6;
    `thm-crystal-basis-of-the-negative-half` L7.
  - B: `ex-kashiwara-strings-in-the-three-dimensional-sl-two-module` L5;
    `ex-crystal-graph-of-b-two-lambda-one` L5;
    `ex-projection-from-b-infinity-to-a-highest-weight-crystal` L8;
    `cex-an-a-zero-lattice-without-a-crystal-basis` L5.
- No cycles; every label equals `item-dependency-levels`' recomputed value; items are listed in a
  linear extension of the page dependency graphs. Out-of-run (published) suppliers never raise a level.
- Every necessary local prerequisite is on the A page ahead of its consumers: the two items that the
  design did not name (`thm-the-i-string-decomposition-of-the-negative-half` and
  `lem-highest-weight-tensor-maps-and-their-adjunction`) exist because the grand loop needs them and
  no other page of this run can supply them yet (see deviation 1).

## Which design controls, and design-vs-plan conflicts

Binding texts read before construction: `research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`
(authorizes the 24 special-topics pairs, suppliers before consumers, no publication) and the design
`research/plan-quantum-groups-track.md` **QG-3** at L112–L131, whose B companion is
`kashiwara-operators-and-crystal-lattices-examples`. `research/plan-spec.json` orders 1528/1529 carry
the same ids, kinds, companions and `requires` (1528 requires `divided-powers-integral-forms-and-quantum-highest-weights`
= design QG-2; 1529 requires 1528) with empty item arrays, so the plan controls and was followed.
**No design-vs-plan conflict was found.**

Recorded deviations and findings for Alpha/owner (none weakens an approved claim):

1. **Two local prerequisites added beyond the design's nine A items.**
   `thm-the-i-string-decomposition-of-the-negative-half` (the $i$-string decomposition and Kashiwara
   operators on $U_q^-$, JKK §6, Kashiwara §3.1–3.2) and
   `lem-highest-weight-tensor-maps-and-their-adjunction` (the tensor maps $\Phi_{\lambda,\mu}$, their
   adjoint $\Psi_{\lambda,\mu}$ and the $U_q^-$-linear map $S_{\lambda,\mu}$, JKK (7.1)–(7.4),
   Kashiwara (4.1.1)–(4.1.4)) are needed by the grand loop as stated: without them the "grand loop"
   would either be circular (the negative-half basis needs the $\mathcal L(\infty)$ string theory) or
   would have to cite an unexpanded standard argument, which QG-3 forbids. QG-4 owns the tensor
   product *crystals*, not the module-level tensor maps, so it cannot supply them in time; both are
   therefore homed locally on the A page ahead of the grand loop.
2. **Projection lemma placed after the grand-loop theorem.** The design lists
   `lem-crystal-operators-commute-with-highest-weight-projection-modulo-q` before
   `thm-grand-loop-existence-of-highest-weight-crystal-bases`. Kashiwara §4.1 states "We shall prove
   Theorems 2, 4, and 5 at once by the induction on weights", and JKK's M(r)/N(r)/O(r) are clauses of
   the same loop, so placing the lemma first would be circular. The manifest keeps the lemma, states it
   as the extracted projection compatibility of the loop, and positions it after the theorem; the
   grand-loop strategy proves L(r), M(r) (Prop 7.12), O(r) (Prop 7.23) and N(r) (Prop 7.34) internally
   and cites the lemma nowhere as a hypothesis.
3. **`a_ii = 2` only; no imaginary roots.** The library's `def-symmetrizable-cartan-datum-for-a-quantum-group`
   has $a_{ii}=2$, so the manifest is restricted to that case: JKK's imaginary-simple-root clauses,
   their operator $Q_i$ (JKK (7.10)) and the $a_{ii}\le0$ branches are dropped as out of scope
   (recorded in the coverage file). The clausal names A(r)–O(r) follow JKK §7.
4. **Notation collision avoided.** The simple integrable highest weight module is written $V(\lambda)$
   with $V(\lambda):=L(\lambda)$ (the crystal sources' $L(\lambda)$), and the script letters
   $\mathcal L(\lambda),\mathcal B(\lambda),\mathcal L(\infty),\mathcal B(\infty)$ denote the Kashiwara
   lattices and bases, so the item text never reads $L(\lambda)$ for two different objects; the
   convention is stated once in `def-kashiwara-lattices-lambda-and-infinity`.
5. **Axiom of choice declared and localized (see "Choice" below).**
6. **Scaffold-level proof granularity.** The grand-loop strategy names every JKK clause it uses
   (Prop 7.6, Cor 7.14, Prop 7.17, 7.22–7.24, 7.29–7.31, 7.33–7.34, 7.36; Lemmas 7.2–7.5, 7.7,
   7.9–7.11, 7.15, 7.19–7.20, 7.25–7.28, 7.32, 7.35) and states the base cases, the induction
   hypotheses and the assembly, but the individual computations are summarised rather than expanded
   line by line. The Step-3 author must reproduce each named computation in the library's conventions
   and the Step-5 reviewer must check them; the readiness records do not substitute for that review.

## Choice

`def-axiom-of-choice` (published, out-of-run) is declared in exactly four batch-6 items, each with its
use identified in the item text and readiness record:

- `thm-grand-loop-existence-of-highest-weight-crystal-bases` — AC is inherited through the batch-5
  supplier `thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral` (which
  inherits it from `lem-the-negative-half-is-separated-by-iterated-skew-derivations` and the
  component-rank comparison of the generic quantum Serre halves). The single use is Step 6, clause
  J(r): JKK Lemmas 7.25–7.28 compare the negative-half form with the form on $V(\lambda)$, and Lemma
  7.27 takes an $A_0$-dual basis $(P_k,Q_j)$, $(P_k,Q_j)=\delta_{kj}$, of $\mathcal L(\infty)_{-\alpha}$,
  i.e. the integral nondegeneracy of that form. Every other step of the induction is choice-free
  (Nakayama uses the choice-free determinant trick on finitely generated $A_0$-modules).
- `lem-crystal-operators-commute-with-highest-weight-projection-modulo-q` — clause (c) is clause N(r),
  whose proof (JKK Prop 7.34) applies J(r); clauses (a), (b), (d) are choice-free.
- `thm-crystal-basis-of-the-negative-half` — the partial-inverse axiom uses clause J(r) of the grand
  loop; freeness/rank over the PID $A_0$ are choice-free.
- `ex-projection-from-b-infinity-to-a-highest-weight-crystal` — declared as inherited through the two
  cited general results; the example's own rank-one computations are choice-free and consume no form
  comparison.

No other batch-6 item declares AC; in particular the rank-one examples, the counterexample and the
local definitions/theorems above the form comparison are choice-free. No incompatible-axiom branch is
introduced.

## Sources

Three sources back each page (Kashiwara §4.1's "at once" route and JKK §7 are independent treatments,
with the book-length lecture notes as the required third):

- M. Kashiwara, *On crystal bases of the q-analogue of universal enveloping algebras*, Duke Math. J.
  63 (1991) 465–516, `https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf`
  — §§2.1–2.6, 3.1–3.5, 4.1–4.10 (printed pp. 473–503: Theorems 2–5, the grand loop, (C.1)–(C.14)).
- K. Jeong, S.-J. Kang and M. Kashiwara, *Crystal Bases for Quantum Generalized Kac-Moody Algebras*,
  arXiv:math/0305390, `https://arxiv.org/pdf/math/0305390` — §§4, 6, 7 (Def 4.3–4.6, Prop 4.8–4.9,
  Prop 6.1, Def 6.2, Theorem 7.1, Props 7.6–7.36).
- R. Borcherds, M. Haiman, T. Johnson-Freyd, N. Reshetikhin and V. Serganova, *Berkeley Lectures on
  Lie Groups and Quantum Groups* (book-length lecture notes, 18 January 2024),
  `https://categorified.net/LieQuantumGroups.pdf` — Ch. 13, §13.3 (printed pp. 326–330: Def 13.3.0.1,
  Thm 13.3.0.4, Exx 13.3.0.3/13.3.0.21).

Dispositions (coverage file, 52 harvested results): A page 19 included + 1 inline + 15 deferred to the
named QG-4/QG-5/QG-7 destinations + 2 already-published + 1 out-of-scope; B page 11 included + 3
deferred. No retrieval failed: `source-fetch-check --stamp` reports 6/6 fetch-verified and 6/6
resolved with 0 documented drops, so no `source_resolution` block is required.

## Cross-batch dependencies

`…-batch-6.cross-batch-dependencies.json` has 20 rows (19 item + 1 page), all `status: open`, each with
the exact required interface and the consumer's use: batch-6 consumes only batch-5 suppliers
(`def-quantum-weight-module-and-integrability`, `def-kashiwara-skew-derivations-on-the-negative-quantum-half`,
`def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half`,
`def-quantum-verma-module-and-simple-highest-weight-quotient`,
`def-contravariant-form-on-an-integrable-quantum-highest-weight-module`,
`thm-integrable-quantum-highest-weight-module-exists-and-is-unique`,
`thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral`, and page
`divided-powers-integral-forms-and-quantum-highest-weights`). The negative-half-form row records that
the grand loop inherits the supplier's declared axiom of choice. Suppliers are scaffolded and recorded
ready but not yet authored, so the edges stay open for the ordinary Step-3/Step-5 supplier review; no
published item supplies them and no in-run supplier is treated as proved merely because it is
scaffolded. Supplier direction owed by sibling consumer batches (their owners write these rows; this
scaffold neither edits nor verifies them): batch 7 `tensor-product-crystals-and-highest-weight-crystal-uniqueness`
and batch 8 `balanced-triples-and-global-crystal-bases` consume the page
`kashiwara-operators-and-crystal-lattices`, and the unified ledger lists those two page edges with no
review row yet, as expected before those batches are scaffolded. The unified ledger was refreshed after
these inputs, and a marked batch-6 Step-1 section was appended to
`briefs/tasks/frontier-dependency-ledger.md`.

## Checks actually run (final pass on the stable files)

- `node tools/manifest-deps.mjs research/…-batch-6.pages.json` → 15 item(s), 0 normalized, **0 errors**;
  the same check over all 28 batch manifests of the run → 323 item(s), 0 normalized, **0 errors**.
- `node tools/content-policy.mjs research/…-batch-5.pages.json research/…-batch-6.pages.json --manifest-only`
  → 35 scoped item(s), **0 errors, 0 warnings**; the whole-run invocation over all 28 batch manifests
  → 323 scoped item(s), **0 errors, 0 warnings**. (The single-file batch-6 invocation prints 19
  `batch-dependency-missing` findings, one per dependency on a not-yet-authored batch-5 supplier; this
  is the expected scope artifact and disappears when batch 5 is passed alongside.)
- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  → 32 errors, all "empty scaffold inventory" for the 16 other batches' pages that are not scaffolded
  yet; **no error touches either batch-6 page or item**, and every label matches the recomputation.
- `node tools/coverage-checklist.mjs research/…-batch-6.coverage.json --require-destination` → 2 pages,
  52 harvested results, **0 errors, 0 warnings**.
- `node tools/source-fetch-check.mjs --coverage research/…-batch-6.coverage.json --stamp` → **6/6
  fetch-verified** (0 newly stamped), 6/6 resolved, 0 documented drops.
- `node tools/url-sweep.mjs --coverage research/…-batch-6.coverage.json --recover --fail-on-dead --out /tmp/b6/liveness.json`
  → **3/3 live**, 0 failed, 0 blocking, 3 citation decisions, 0 drops.
- `node tools/source-backing.mjs --coverage research/…-batch-6.coverage.json --liveness /tmp/b6/liveness.json --require-verified`
  → **15 authored results, all backed** by an openable source.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28`
  → OK: declared page order acyclic and consistent, no item-level cycles, forward references, B-page
  dependencies or unresolved ids among the 24 pages with item lists (warnings are other pages'
  redundant page prerequisites); 32 planned pages still carry no item list.
- `node tools/manifest-integrity.mjs --run frontier-44-special-representation-examples-28` → 56 pages
  owed, 56 in the manifests, **no scope drift**.
- `node tools/extcheck.mjs --quiet` → **OK**, no active recorded-not-proved items, external references
  or fallback records.
- `node tools/depcheck.mjs` → exit 1 on pre-existing corpus-wide debt (2,729 `published-unaudited`
  findings and other published items); **no line mentions any batch-6 item or page** (grep count 0 for
  each of the 11 A ids, 4 B ids and both page ids). Unrelated published debt does not block this batch.
- `node tools/step1-decisions.mjs check --run frontier-44-special-representation-examples-28` → 323
  run items, 245 ready; **0 of the 15 batch-6 items unresolved** (the 110 remaining unresolved items
  and 32 flagged empty pages belong to other batches). The nine records invalidated by the dependency refresh/AC edit (including the four AC items)
  were re-recorded in dependency order with their current dependency arrays, and the four AC items
  were recorded a second time after a cosmetic paragraph split in their statement text.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28`
  → refreshed and deduplicated.

## Unresolved findings and residual risk

- Batch-6 has no open mathematical blocker: all 15 readiness records are `ready`, all dependencies are
  either published items, batch-5 scaffolded suppliers (edges open, tracked), or earlier batch-6 items.
- Residual mechanical risk (the batch-1 precedent): a readiness record's hash covers the transitive
  closure against the whole run's manifests, so sibling batches that scaffold preserved pages can
  invalidate these fingerprints again after this dispatch. The 9 records refreshed here are current
  against the manifests as of this dispatch; the Step-1 stage check remains the engine's.
- The grand-loop granularity caveat of deviation 6 is the main honesty item for Step 3/Step 5: the
  scaffold names and orders every JKK clause, but the individual computations must be reproduced and
  reviewed before the item is treated as proved.
- No published defect was found in the batch-6 dependency closure. Sibling-batch unresolved readiness
  items and `depcheck`'s published-unaudited findings are outside this batch's scope and are not
  repaired here.
