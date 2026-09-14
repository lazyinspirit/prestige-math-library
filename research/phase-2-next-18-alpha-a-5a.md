# Step 5A — group Alpha review, group a (batch 5)

Run: `phase-2-next-18` · group `a` · batch `5` (differential geometry, Lie theory)
Scope: `research/phase-2-next-18-step5-scope-5.json` — 112 items + 4 pages.
Decisions: `research/phase-2-next-18-alpha-a-5a-decisions.json` — 116 obligations,
108 `accepted`, 8 `repaired`, 0 `escalated`.

## Method

Every item was read in full in page order (suppliers before consumers), including
its Facts block, every numbered step and its tags. Definitions were checked for
well-definedness conventions and boundary cases; proofs were checked step by
step, including recomputation of the concrete matrix/bracket/root computations;
refutations were checked for a genuine witness and for exactly the missing
hypothesis; pages were checked against their items (including the AC and ZF
claims in the page prose). Where a proof cites a supplier, the cited claim was
compared with the supplier's actual statement (the per-batch contract quotes are
gate-checked against the live supplier text, and I re-read the load-bearing ones).
No Step-3 scaffold checklist was re-run and no prior scope decision was revisited
without concrete contrary evidence in the current text.

## Repairs (8)

1. `prop-derivations-preserve-the-nilradical-in-characteristic-zero` — **repaired**
   (`phase-2-next-18-alpha-a-001`). The f_c(m) induction of the cited source
   (Maksimenko, *On action of outer derivations on nilpotent ideals of Lie
   algebras*, Algebra Discrete Math. 2009 no. 1, 74–82 — downloaded and read in
   full) was compressed in the closing sentence of step 3.1: a summand whose
   x_1 receives q_1 differentiations was said to combine with "at least q_1+1
   undifferentiated tail entries", with the equality case repaired by "the
   previous induction stage at depth m-q". Counting gives only A >= q_1+beta,
   and for q_1 = m the cited repair degenerates to depth 0. The sub-case is
   reachable as soon as c >= 2m-1 (e.g. c = 5, m = 3:
   [D^3x_1, Dx_2,...,Dx_11, x_12, x_13, x_14] with x_1 in I^3). Step 3.1 was
   rewritten with the explicit case analysis (new canonical step 4.1): u <= r
   forces k_1 <= r; cases r >= m+1; k_1 < r; k_1 = r < m via the induction
   hypothesis at depth m-r; k_1 = r = m via D^m x_1 = D w with w = D^{m-1}x_1 in
   I, [w, Dx_2,...,Dx_s] in I^2 (step 2.2 + ideality), D(I^2) in I (step 1.2)
   and the Leibniz correction terms starting with w in I; and the exceptional
   case. The source's Lemma 5 shares the same boundary compression; the repair
   closes it with estimates the source itself supplies.
2. `thm-cartans-semisimplicity-criterion` — **repaired** (`...-a-002`). Step 3.1
   justified "the last nonzero derived term of r is an ideal of g" by
   "characteristic ideal of r, hence an ideal of g", which is not a valid
   inference (a derivation of r need not preserve a characteristic subspace).
   Replaced with the correct Jacobi argument that derived terms of an ideal are
   ideals of the ambient algebra.
3. `thm-weyls-complete-reducibility-theorem` — **repaired** (`...-a-003`).
   Step 2.1 inferred a != 0 from "characteristic zero makes this nonzero" where
   the quantity in question is dim h; for h = 0 (trivial action) dim h = 0 and
   a = 0. Inserted the missing base case (if h = 0 any complementary line is
   invariant), after which the Casimir argument is exactly the standard one.
4. `def-casimir-operator-relative-to-an-invariant-form` — **repaired**
   (`...-a-004`). Two display formulas were glued to prose on one physical line
   (`$$...$$On a representation`, `operator** is$$...$$`); displays isolated.
   Citation quotes in three contracts that had quoted the old text were
   refreshed in the same read.
5. `ex-an-abelian-extension-from-a-two-cocycle` — **repaired** (`...-a-005`).
   Same display/prose gluing defect in the statement; displays isolated.
6. `thm-levi-decomposition` — **repaired** (`...-a-006`). The abelian base case
   converted "the obstruction class vanishes" into "the extension has a Lie
   section" from `H^2 = 0` alone, which needs the classification of abelian
   extensions by `H^2` (zero class = split). Added
   `thm-second-lie-algebra-cohomology-classifies-abelian-extensions` as a fact
   `[L5]`, cited it in step 1.1, added the dependency to the frontmatter, and
   added the matching contract citation (exact statement quote, uses 1.1).
   Both items are in batch 5, so this is a local closure.
7. `fs-centerless-implies-semisimple` — **repaired** (`...-a-008`). Prose typo
   "not semisimple under by [L1]" -> "not semisimple by [L1]".
8. `semisimple-lie-algebras-cohomology-and-levi-theory-examples` (page) —
   **repaired** (`...-a-007`). The summary said "the two global integration
   examples inherit exactly AC_omega", but three items on the page declare
   ZF + AC_omega (`ex-su-two-and-so-three-...`, `ex-the-bch-group-...`,
   `cex-the-circle-and-line-...`). The clause now names all three carriers.

## Source evidence

* Milne, *Lie Algebras* (https://www.jmilne.org/math/CourseNotes/LAG.pdf) for the
  derived/lower/upper central series, Engel's lemma and theorem, and Lie's
  theorem; the proofs in the items were checked against the classical arguments
  and, where the source is the cited backing, located at the recorded sections.
* Maksimenko, *On action of outer derivations on nilpotent ideals of Lie
  algebras*, Algebra Discrete Math. 2009 no. 1, 74–82
  (https://admjournal.luguniv.edu.ua/index.php/adm/article/viewFile/770/300):
  read in full (Leibniz rule (1), Lemma 2 (differentiated-bracket estimate),
  Lemma 3 (J^{n+1} in I), Lemma 4 ([I, D(I)^{n+1}] in I^2), Lemma 5 (the f_n(m)
  recursion) and Theorem 1) for `prop-derivations-preserve-the-nilradical-in-
  characteristic-zero`; the repair above follows the source's own case split.
* Bell, *Lecture Notes on Lie Algebras* (Proposition 3.2.8/3.2.9 and the
  Jordan–Chevalley decomposition of derivations), for the standard statement
  that the nilradical is derivation-characteristic in characteristic zero;
  consulted to confirm the theorem targeted by the repaired item.
* Weibel, *Lie Algebra Homology and Cohomology*, §7.8 Theorem 7.8.13 for the
  Levi theorem route used by `thm-levi-decomposition` (H^2 vanishing plus the
  abelian-extension classification).
* Standard textbook facts used as cross-checks for the explicit computations:
  Killing forms of the split classical algebras (sl_n: 2n tr, so_n: (n-2) tr,
  sp_{2n}: 2(n+1) tr), the SU(2)->SO(3) double cover, and the BCH group.

No retrieval failures occurred; every cited source I needed was reachable.

## Local suppliers

No new definitions or lemmas were added, so no new items were authored in this
dispatch. The one dependency added (`thm-levi-decomposition` ->
`thm-second-lie-algebra-cohomology-classifies-abelian-extensions`) is an
existing same-batch theorem on the same page, ordered before its consumer.

## Shared-plan and Phase-2 amendments for the serial lead

* None required to `research/plan-spec.json` or the Phase-2 scope: no pair, page,
  page order, or scope entry changed, and no item was withdrawn.
* Batch-5 record updates made during this read: the batch-5 proof contract
  (new `step-4-1` entry for
  `prop-derivations-preserve-the-nilradical-in-characteristic-zero`, claims and
  ids for the renumbered steps 4.1/4.2, refreshed `uses`, new `L5` citation for
  `thm-levi-decomposition`, refreshed quotes for the Casimir display edits), the
  `thm-levi-decomposition` frontmatter `deps`, and the examples-page prose.
* `research/phase-2-next-18-batch-5.cross-batch-dependencies.json` remains `[]`
  and is correct: every supplier of batch 5 that is not in batch 5 is an item
  outside this run (42 such ids, all pre-existing/published items), so batch 5
  has no cross-batch edge inside the run. The new dependency added by the repair
  is intra-batch.

## Published findings

No defective *published* item was identified in this read, so
`research/published-consumer-supplier-ledger.md` was not modified (no lock was
taken). All 112 reviewed items are `status: draft`. The cited published
suppliers used by these items (e.g. `def-lie-algebra-over-a-field`,
`def-quotient-lie-algebra`, `def-representation-of-a-lie-algebra`,
`def-countable-choice`, the trace/Jordan-form suppliers, the covering and
closed-subgroup suppliers) were checked at the level the items rely on: the
contract quote gate verifies every cited statement against the live supplier
text (`proof-contract --strict`: 0 errors), and the load-bearing uses (trace
cyclicity, the Jordan decomposition of an endomorphism, Lie's theorem,
centerlessness, the AC_omega-dependent group facts) were re-read in the
supplier statements. No published defect with exact evidence was found; the
ledger's U-P/U-C queues are untouched by this dispatch.

## Checks run honestly (local)

* `node tools/tsx-run.mjs tools/precheck.mts` over all 112 batch-5 items: 94
  proof-bearing items checked, 0 failing; the 4 pages reflow clean.
* `node tools/proof-contract.mjs research/phase-2-next-18-batch-5.proof-contracts.json --strict`:
  0 errors, 0 warnings, 112/112 items.
* `node tools/merge-proof-contracts.mjs --level phase-2-next-18` over all nine
  batch contracts, then `node tools/risk-report.mjs <merged> --require-reviewed`:
  0 errors, 562 items routed. 66 `risk_review` dispositions were written into
  the owning batch-5 contract with `tools/apply-risk-reviews.mjs` (all 63 then-
  required high/critical batch-5 items plus three that the recomputation raised
  to high).
* `node tools/depcheck.mjs --quiet`: OK (no cycles, all references resolve; the
  only note is an unrelated item in another batch).
  `node tools/fwdcheck.mjs`: OK. `node tools/prosecheck.mjs`: OK.
  `node tools/rendercheck.mjs`: OK (20209 files). `node tools/extcheck.mjs`: OK.
  `node tools/citecheck.mjs`: advisory only, exit 0.
* Defect ledger: 8 rows appended through
  `node tools/defect-ledger.mjs append` (all validated, `disposition: fixed`,
  `caught_at_stage: 5a-adjudicate`), each referenced by exactly one decision.
* `node tools/step5-scope.mjs check --run phase-2-next-18 --phase adjudicate
  --batch 5`: the only errors are `decision-stale` for the missing
  `subject_sha256` field, which the engine's `step5-decision-stamp` gate writes
  before the routing gate; I did not stamp (no self-stamping).

## Residual uncertainty (recorded, not hidden)

* `thm-ado-faithful-representation-with-nilpotent-nilradical-action` is a
  high-level rendering of Zassenhaus's proof of Ado's theorem. I verified every
  stated mechanism (extension of derivations to U(h); the ideal I_0; J^N in I;
  I^N in I_0; Noetherian/finite-dimensionality chain for U/I_0;
  faithfulness; nilpotence of n and of D+y via Lie's theorem; the solvable
  induction; the Levi reduction with the adjoint summand; the scalar descent).
  It is compressed relative to a fully expanded construction, but I found no
  incorrect step, and the statement is the standard strengthened Ado theorem.
* `thm-second-lie-algebra-cohomology-classifies-abelian-extensions` and
  `thm-long-exact-sequence-in-lie-algebra-cohomology` were checked as standard
  constructions in the form presented (sections, cocycle identities, degreewise
  exactness, connecting map); the sign bookkeeping of the Chevalley–Eilenberg
  differential was checked at degrees 0, 1 and 2 and the general d^2 = 0
  grouping was followed term by term.
* No item was escalated and no verdict was recorded as `escalated`, so no owner
  decision is pending from this group.
