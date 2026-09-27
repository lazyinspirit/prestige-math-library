# Step 3b dispatch report — pair `the-ip-equals-pspace-theorem`

Run `frontier-35-ten-categories`; batch 12 (shared with the sibling pair
647/648 `gap-amplification-and-assignment-testing`, owned by another group —
its rows in every shared batch file are left untouched). Role `alpha-high`,
live label `step3b-pair-the-ip-equals-pspace-theorem-fdd9e65f6fd9be6b`. A page
`the-ip-equals-pspace-theorem` (order 643), B page
`the-ip-equals-pspace-theorem-examples` (order 644). This dispatch owns only
this pair.

Binding design: `research/plan-computability-theory-track.md` §46
(lines 1969–2012), superseding TC-32. Step-3a scope receipt
`research/frontier-35-ten-categories-step3a-review-the-ip-equals-pspace-theorem.json`
(`decision: sufficient`, sha `992b8c4c26063079b949a89d4e6aaa6be8da49ed61cab0a5021f98f71d2cc5d1`)
is current for the post-repair inventory; it supersedes the pre-repair review
sha `c9011612e6a06af1ac59f0de59f70727adb37a319f83abf976061382501080c6`.

`research/frontier-35-ten-categories-owner-authoring-direction.md` was read:
its deferrals are the batch-8 smooth-projective pair and the batch-13
pseudointersection-number theorem, neither of which is on this pair's page
graph, so it imposes no unresolved obligation here (this pair neither cites nor
counts either deferred artefact).

## Work log (checkpointed after each item)

A page, proof order (manifest page order = design §46 order with the one
supplier of "Local suppliers added" inserted at position 5). Every item was
authored as a complete draft item file with statement/definition, facts,
numbered argument and provenance, re-checked after its last edit, and only then
recorded with `step3-decisions.mjs record-item` (`accept`, confidence 1,
examined dependency ids, item-specific evidence reason) — receipt
`research/frontier-35-ten-categories-step3b-review-<id>.json`:

1. `def-qbf-arithmetization-operators` — field operators A/E on the matrix
   arithmetization, ordered inner-first; definition only (precheck n/a).
2. `lem-quantifier-polynomials-agree-on-booleans` — A/E reproduce ∀/∃ on
   Boolean points; direct.
3. `def-multilinearization-operator` — the R_{X_i} reduction, the block order
   R_{X_1}…R_{X_j}, O_j and T = n(n+3)/2; definition only.
4. `lem-multilinearization-preserves-boolean-values` — agreement on Boolean
   points plus the degree cap D = max{L,2}; direct (design's "strengthen the
   contract to include the degree bound" obligation).
5. `lem-ordered-arithmetization-evaluates-to-the-truth-value` — the local
   supplier (see below); induction over the stage index.
6. `lem-efficient-prime-field-for-a-polynomial-soundness-budget` — Bertrand
   bound + deterministic trial division in (N, 2N), N = max{2, 12TD+1},
   residue arithmetic and the 2/p point-mass sampler; direct.
7. `def-shamir-protocol-for-tqbf` — protocol over F = Z/p on the reversed
   operator list, with claim/point state, the three round tests, terminal
   matrix evaluation and the honest prover; definition only.
8. `lem-honest-prover-maintains-the-claim-invariant` — descending induction
   c_t = G_t(σ_t), legal messages, terminal acceptance on true inputs;
   induction.
9. `lem-each-round-has-polynomial-communication` — degree, message, round and
   point-evaluation bounds (design's explicit-bounds obligation); direct.
10. `lem-shamir-protocol-has-perfect-completeness` — honest prover accepted
    with probability 1; direct.
11. `lem-first-false-claim-survives-with-root-bound-probability` — a false
    claim is repaired with probability at most 2D/p per round, via the root
    bound on s − q* and the 2/p sampler; direct calculation.
12. `lem-total-soundness-follows-by-union-bound` — acceptance on a false Φ
    forces a false→true claim transition, so Pr[accept] ≤ 2TD/p < 1/6 < 1/3;
    direct calculation.
13. `lem-shamir-qbf-verifier-runs-in-polynomial-time` — probabilistic
    polynomial-time verifier including malformed-input rejection; direct.
14. `thm-tqbf-has-a-polynomial-round-interactive-proof` — TQBF ∈ IP; direct.
15. `thm-pspace-is-contained-in-ip` — TQBF PSPACE-completeness + the protocol,
    perfect completeness; direct.
16. `thm-ip-equals-pspace` — the two inclusions; direct.
17. `cor-ip-is-closed-under-complement` — via IP = PSPACE and the published
    deterministic-space complement closure; direct.
18. `thm-ip-can-be-given-perfect-completeness` — the perfect-completeness form
    of the equality; direct.
19. `fs-ip-equals-pspace-needs-no-degree-reduction` — explicit family
    ∃y∀x_1…∀x_k (y) whose reduced-family node degree is 2^k; refutation.
20. `fs-the-verifier-trusts-the-final-field-value` — the terminal evaluation
    c = b(σ) cannot be delegated to the prover; refutation.

B page, in order:

21. `ex-two-quantifier-qbf-arithmetization-transcript` — complete hand-checked
    transcript at a small prime; verification.
22. `ex-multilinearization-preserves-boolean-values` — degree 3 → 1 in one
    variable with Boolean values preserved; verification.
23. `ex-ip-can-be-given-perfect-completeness` — a true instance carried through
    the reduction, with the false-instance bound 2TD/p = 12/79 evaluated as a
    quoted bound only; verification.
24. `cex-ip-equals-pspace-needs-no-degree-reduction` — the failure family
    computed explicitly (true instance, degree 2^k); counterexample.

All 24 files were written during this dispatch family: the first six in the
window of the failed attempt `…-63a58f06bac97df0` (04:42:53–05:00:47Z,
`ok: false`), the rest in the live attempt window (started 05:26Z). Every item,
page and shared file was re-checked in the live attempt after the last edit;
nothing was accepted on the strength of the earlier attempt.

## Completed IDs

`def-qbf-arithmetization-operators`,
`lem-quantifier-polynomials-agree-on-booleans`,
`def-multilinearization-operator`,
`lem-multilinearization-preserves-boolean-values`,
`lem-ordered-arithmetization-evaluates-to-the-truth-value` (local supplier),
`lem-efficient-prime-field-for-a-polynomial-soundness-budget`,
`def-shamir-protocol-for-tqbf`,
`lem-honest-prover-maintains-the-claim-invariant`,
`lem-each-round-has-polynomial-communication`,
`lem-shamir-protocol-has-perfect-completeness`,
`lem-first-false-claim-survives-with-root-bound-probability`,
`lem-total-soundness-follows-by-union-bound`,
`lem-shamir-qbf-verifier-runs-in-polynomial-time`,
`thm-tqbf-has-a-polynomial-round-interactive-proof`,
`thm-pspace-is-contained-in-ip`, `thm-ip-equals-pspace`,
`cor-ip-is-closed-under-complement`,
`thm-ip-can-be-given-perfect-completeness`,
`fs-ip-equals-pspace-needs-no-degree-reduction`,
`fs-the-verifier-trusts-the-final-field-value`,
`ex-two-quantifier-qbf-arithmetization-transcript`,
`ex-multilinearization-preserves-boolean-values`,
`ex-ip-can-be-given-perfect-completeness`,
`cex-ip-equals-pspace-needs-no-degree-reduction`.

Item decisions: 23 `accept`, confidence 1, each with its examined dependency
ids and a concrete reason; the supplier is deliberately left to the engine's
auditor-created certification path (see "Open obligations"). No item was marked
`escalate`, and no item was marked complete on a strategy alone.

## Scaffold audit and repairs

Audit of the Step-1/3a scaffold against binding design §46:

- A page `requires` edges, page id/order/title/category/companion and B page
  `requires` the A page all match the design and the manifest; the B inventory
  is exactly the design's four items; no promised result was dropped, no pair
  added, no Recorded result consumed, no published item or page edited.
- The three step-1 promised results (`thm-ip-equals-pspace`,
  `fs-ip-equals-pspace-needs-no-degree-reduction`,
  `cex-ip-equals-pspace-needs-no-degree-reduction`) are present with the
  promised claims and their ready receipts' proof strategies realised as
  actual arguments (the cex witnesses the same 2^k family as the fs).
- Design obligations honoured in the authored items: the prime field comes
  from the *published* Bertrand bound plus deterministic trial division in
  (N, 2N) — no prime-number theorem, no randomized primality search
  (`lem-efficient-prime-field-for-a-polynomial-soundness-budget`); the
  individual degree cap D = max{L,2} and T = n(n+3)/2 appear in the reduction
  lemma and are consumed by the protocol; soundness is 2TD/p < 1/6 < 1/3 with
  the union bound over the T nodes, not a quoted constant.
- Manifest `deps` rows for the owned items were re-synced to the item
  frontmatter (the 21 rows whose arrays had drifted: 17 of the 20 A rows and
  all 4 B rows; the supplier, `thm-pspace-is-contained-in-ip` and
  `cor-ip-is-closed-under-complement` already matched);
  `manifest-deps` reports 63 items, 0 errors for the shared batch file.

Repairs actually performed:

1. **Local supplier added** (the one repair to the promised inventory; see
   below): `lem-ordered-arithmetization-evaluates-to-the-truth-value` inserted
   at A proof position 5, between `lem-multilinearization-preserves-boolean-values`
   and `lem-efficient-prime-field-for-a-polynomial-soundness-budget`.
2. **Scope decision refreshed.** After the inventory change the 3a review over
   the old scope no longer described the page; a fresh review was recorded
   (`sufficient`, evidence naming the supplier and its consumers) — a review
   decision, not an invented owner ruling.
3. **Authoring-tool damage repaired (in-flight drafts only).** A local
   formatting helper (`/tmp/ptest/fix.py`) rewrote item bodies from the
   precheck canonical block and silently dropped the argument headings
   (`## Proof` / `## Verification` / `## Refutation` / `## Counterexample`) in
   10 drafts; two later files were re-canonicalised with the same hazard.
   Detected by precheck (`REPAIR`) and by a heading scan, repaired with
   `/tmp/ptest/headings.py` and `/tmp/ptest/fix2.py`, and confirmed by
   re-running precheck (all 21 proof-bearing items PASS) and rendercheck (clean)
   afterwards. These files were unpublished drafts at every point; no published
   artefact was affected.
4. **A-page prose corrected against the items.** After re-reading the finished
   proofs, two page-summary claims were fixed so the prose matches what is
   proved: the per-round bound is 2D/p (not D/p), and the union bound gives
   2TD/p < 1/6 < 1/3 (not a root bound below 1/3); and the count-in-prose
   phrase "Two false statements" was reworded. `rendercheck` and `prosecheck`
   are clean on the page after the edit.

## Local suppliers added

Exactly one, on the assigned A page:
`lem-ordered-arithmetization-evaluates-to-the-truth-value` (A position 5).
Both load-bearing consumers already cited it: the honest-prover invariant and
the union-bound soundness lemma need the claim that the *reduced* stage
sequence P^{(j)} evaluates to the truth value of Ψ_j at Boolean points, which
is a different claim from "the operators agree on booleans" (that only
handles a single quantification step over a polynomial already agreed on the
cube). Without it the terminal acceptance in claim 3 of
`lem-honest-prover-maintains-the-claim-invariant` and hypothesis [A4] of
`lem-total-soundness-follows-by-union-bound` would have had no supplier.

Registration: manifest row with deps to the seven published/owned suppliers it
uses; coverage row ("§8.5.3: the reduced arithmetized sequence evaluates to the
quantified …", Arora–Barak §8.5.3); strict proof-contract entry with quoted
citations and the empty/zero/one/base/discharge rows; A page item list; and the
authored item file itself. It is absent from the immutable Step-3 auditor
baseline (both the `items` inventory and `existing_item_files`), so it is a
legal auditor-created addition, not a certified pre-existing item.

## AC / choice

No Choice is used and no choice principle is assumed anywhere in this pair.
None of the 92 proof-contract citations names a choice-related item
(`def-axiom-of-choice`, Zorn, well-ordering, countable/dependent choice). The
only occurrences of the word "choice" in the 24 items are explicit statements
that a construction makes no choice: the operator definition works on the
polynomial and index without enumerating monomials, and the protocol prime is a
deterministic function of the input, so the verifier's only randomness is its
random tape. Every argument in the pair is choice-free; there is no
incompatible-axiom branch to preserve.

## Checks actually run (live attempt, after the last edit to each file)

- `node tools/tsx-run.mjs tools/precheck.mts <24 item paths>` →
  `21 checked, 0 failing — all clean`.
- `node tools/rendercheck.mjs <24 items> <A page> <B page>` →
  `OK — 26 file(s)` (no wikilink in math, balanced delimiters, single-line
  displays, KaTeX parse, YAML parse).
- `node tools/manifest-deps.mjs research/frontier-35-ten-categories-batch-12.pages.json`
  → `63 item(s), 0 normalized, 0 error(s)`.
- `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-12.coverage.json`
  → `2 page(s), 66 harvested result(s), 0 error(s), 0 warning(s)` (our A page:
  16 rows — 8 Arora–Barak §8.5, 8 Shen §1–2; dispositions 12 `included`,
  3 `already-published`, 1 `out-of-scope` with an item-specific reason).
- `node tools/proof-contract.mjs research/frontier-35-ten-categories-batch-12.proof-contracts.json --strict`
  → `0 error(s), 0 warning(s), 21/21 item(s) checked`; the file carries 92
  citation rows, 105 derivations and 168 boundary rows over exactly this pair's
  21 proof-bearing items.
- `node tools/validate-plan.mjs research/plan-spec.json` →
  `OK — declared page order is acyclic and consistent`; no item cycles, forward
  references, B-page dependencies or unresolved ids among the 1188 pages with
  item lists (431 planned pages, including all 52 of this run, still carry no
  item list — a pre-splice state, not a pair mismatch: the pair's plan entries
  match the manifest in order/id/title/category/companion/`requires`).
- `node tools/content-policy.mjs research/frontier-35-ten-categories-batch-12.pages.json`
  → 39 errors, all `scope-item-missing` on the sibling pair's not-yet-authored
  items; **zero** findings on any of this pair's 24 items. The
  `--manifest-only` variant reports 24 `batch-item-already-exists` rows for our
  authored items — the documented structural shape of an authored batch
  (batch 11 shows the same 29 such rows), not a content finding.
- `node tools/step3-decisions.mjs check --run frontier-35-ten-categories --phase scope`
  → `closed: true` (26/26 pairs). `--phase final` (snapshot; the run-wide
  counts drift as other pairs author) → 231 items accepted, 426 open elsewhere
  in the run; the only open row in this pair is the supplier (current item
  audit required until the engine certification below).
- `node tools/prosecheck.mjs --warnings <24 items> <A page> <B page>` →
  `0 error(s), 0 warning(s)`.
- `node tools/depcheck.mjs --json` → 0 error and 0 warning rows referencing any
  of this pair's items or pages, and 0 rows referencing any published supplier
  this pair cites.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories`
  → refreshed and deduplicated. The batch-12 cross-batch input
  (`research/frontier-35-ten-categories-batch-12.cross-batch-dependencies.json`)
  is correctly `[]`: no item of this pair depends on an item of another batch
  in this run, and the three page prerequisites are already-published pages
  outside the run.

## Shared batch files / sibling preservation

The batch-12 manifest, coverage, proof-contracts and cross-batch files are
shared with the sibling pair 647/648. Against in-dispatch backups taken before
the last writes (`/tmp/ptest/pages.before.json`, `pages.pre-sync.json`,
`coverage.before.json`), the sibling page entries are JSON-identical to the
current files; the only batch-level inventory delta is our supplier (62 → 63
items), all `deps` re-sync edits are inside our own rows, and no sibling row
was added, removed, reordered or reworded. The proof-contracts file created by
this dispatch contains entries only for this pair's 21 proof-bearing items;
the sibling's 39 items are its owner's to author and register.

## Published concerns

No potentially defective item was found among the published suppliers this
pair consumes. Each was read at its exact locator for the used claim:
`thm-ip-is-contained-in-pspace`, `thm-tqbf-is-pspace-complete`,
`def-ip`, `def-arithmetization-of-a-boolean-formula`,
`def-sum-check-instance-and-protocol`,
`lem-arithmetization-agrees-on-boolean-inputs`,
`def-quantified-boolean-formula-and-tqbf`,
`lem-degree-under-arithmetized-quantifiers`,
`lem-formula-arithmetization-degree-and-evaluation-cost`,
`thm-root-bound-for-polynomials-over-a-domain`, `thm-bertrands-postulate`,
`thm-z-mod-p-is-a-field`, `thm-standard-representatives-modulo-n`,
`def-prime`, `def-completeness-and-soundness`,
`def-interactive-proof-transcript-round-and-strategy`,
`cor-pspace-equals-npspace-and-is-closed-under-complement`. All hypotheses
matched their uses (e.g. the root bound is stated for an integral domain and is
applied over the field Z/p; the sampler's 2/p point mass is exactly what makes
the per-round bound 2D/p rather than D/p).

One pre-existing, non-blocking structural concern, reported at suspicion-level
confidence and *not* a mathematical defect: `depcheck` reports three
`multi-home` warnings for the published prerequisite page
`space-complexity-savitch-and-tqbf` — `ex-bounded-reachability-recursion-is-correct`,
`ex-ap-equals-pspace` and `cex-savitch-stores-the-whole-configuration-graph`
appear on both that page and its examples companion. Evidence:
`node tools/depcheck.mjs --json` warning rows. Required supplier/owner: the
owner of that published page. Repair strategy: at the owner's next maintenance
window either drop the duplicate listings or re-home the items; the pair's use
of the page's theorems is unaffected, and the same warning shape occurs 140
times elsewhere in the published corpus.

## Open obligations

1. **Supplier certification (engine).** `step3-auditor-items.mjs certify
   --run frontier-35-ten-categories` currently reports "no successful Step 3
   auditor/author result covers batch 12 or pair the-ip-equals-pspace-theorem"
   because the two existing results for this pair are `ok: false`; the live
   attempt `…-fdd9e65f6fd9be6b` has no `.result.json` yet. After this dispatch
   ends successfully the engine's certification path should certify
   `lem-ordered-arithmetization-evaluates-to-the-truth-value` (absent from both
   the baseline `items` list and `existing_item_files`; all its input files
   predate the dispatch end) and the pair scope. If it cannot, the item needs
   an owner receipt — do not treat this report as that receipt.
2. **`check --phase final`** will list that one item as "current item audit
   required" until (1) completes. Every other item and the scope check are
   closed for this pair.
3. **Sibling pair 647/648** still needs its own authoring; the 39
   `scope-item-missing` rows in `content-policy` are that owner's work, and its
   items must be registered in the shared batch contract/coverage files
   without disturbing this pair's rows.
4. Nothing was committed; the worktree carries unrelated modifications from
   other agents. This dispatch wrote only the pair's item files, the two
   library pages, the batch-12 shared files (own rows only), the pair's Step-3
   receipts and this report.
