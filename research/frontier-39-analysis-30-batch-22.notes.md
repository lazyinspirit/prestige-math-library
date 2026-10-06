# Batch 22 notes — `tensor-product-multiplicities-and-littlewood-richardson`

Run: `frontier-39-analysis-30`. Pair: `tensor-product-multiplicities-and-littlewood-richardson`
(A, order 510.015, `lie-theory`) / `tensor-product-multiplicities-and-littlewood-richardson-examples`
(B, order 510.016). Design: `research/plan-representation-theory-lie-track.md` L1076 (RL-8).
Manifest: `research/frontier-39-analysis-30-batch-22.pages.json` (19 A items, 6 B items).
No `research/frontier-39-analysis-30-owner-authoring-direction.md` exists (checked before
construction).

## Design versus plan

The design's pair, `requires` list (`weyl-character-and-multiplicity-formulas`,
`semisimple-lie-algebras-cohomology-and-levi-theory`), A/B roles and proof route
(character multiplication → alternant extraction → Steinberg → Racah--Speiser; then type A:
Schur modules → semistandard tableaux → Stembridge's admissible tableaux = LR tableaux →
Littlewood--Richardson and Pieri) agree with `research/plan-spec.json`, whose entries for both
pages carry `items: []` and the same `requires`. **No design/plan conflict was found; none is
recorded.** Library conventions used verbatim: $Q_+$, $P$, $\Lambda^+$, $\rho$, the dot action
$w\cdot\lambda=w(\lambda+\rho)-\rho$, $L(\lambda)$.

Three design/locator inaccuracies were found while reading the sources; the plan controls, so the
route is unchanged and the discrepancies are recorded here:

* The design's source column gives "E755 §27, pp. 145--148" for
  `thm-steinberg-tensor-product-multiplicity-formula`, `cor-racah-speiser-tensor-product-algorithm`
  and `lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient`. Etingof 18.755
  contains **no** Steinberg or Racah--Speiser material (searched the full text); §27 covers tensor
  products of *fundamental* representations, SL$_n$/GL$_n$ representations and Schur--Weyl duality.
  The formula is supported instead by Goodman--Wallach Cor. 7.1.6--7.1.7 (pp. 333--334, complete
  proofs, exact same formula) and Knapp Ch. IX §8 Problem 17 with its printed solution
  (pp. 611--612, 747--748, the equivalent sgn/dominant-conjugate form). The design's intended
  independent check, Humphreys §24.4, is recorded as a dropped source with those alternatives.
* The design row for `cor-minuscule-tensor-product-rule` cites "E755 §28, pp. 150--153"; the
  minuscule material is Etingof §30.1--30.2, pp. 158--160 (Def. 30.1, Lemmas 30.2--30.3,
  Prop. 30.4, Cor. 30.5, Cor. 30.7). The manifest cites the correct locator.
* The design cites "Seynnaeve §§10--11, pp. 52--59" for the Schur module; the classification,
  character and irreducibility statements read are in Ch. 11 (Def. 11.1, Thms. 11.6--11.8,
  pp. 54--59) and the polynomial/rational setting in Ch. 9 (pp. 51--52).

## Inventory

A page (19 items, all with explicit `deps` and `dependency_level`, levels computed from in-run
dependencies only):

1. `def-tensor-product-multiplicity-for-highest-weight-modules` (0)
2. `prop-tensor-product-multiplicities-are-character-structure-constants` (3)
3. `lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient` (6)
4. `thm-steinberg-tensor-product-multiplicity-formula` (7)
5. `cor-racah-speiser-tensor-product-algorithm` (8)
6. `def-minuscule-weight` (0) — **added prerequisite**
7. `lem-minuscule-weights-are-the-weyl-orbit` (1) — **added prerequisite**
8. `cor-minuscule-tensor-product-rule` (6)
9. `def-polynomial-glr-highest-weights-as-partitions` (0)
10. `def-schur-module-and-schur-polynomial-character` (1)
11. `prop-semistandard-tableaux-expand-schur-characters` (2)
12. `def-littlewood-richardson-tableau-and-coefficient` (0)
13. `lem-bender-knuth-involutions-on-semistandard-tableaux` (0) — **added prerequisite**
14. `lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux` (3)
15. `thm-littlewood-richardson-tensor-product-rule` (4)
16. `cor-horizontal-pieri-rule` (5)
17. `cor-vertical-pieri-rule` (5)
18. `prop-determinant-twists-translate-glr-highest-weights` (3)
19. `prop-littlewood-richardson-coefficients-stabilize-with-rank` (5)

B page (6 design ids, levels 1--9): `ex-clebsch-gordan-decomposition-for-sl2` (9),
`ex-three-tensor-three-for-sl3` (7), `ex-littlewood-richardson-product-s21-times-s1` (6),
`ex-a-littlewood-richardson-coefficient-greater-than-one` (5),
`cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr` (1; statement and proof
`ai-generated`, `generation.role: counterexample`; not a dependency target),
`cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank` (6).

### Why the three added ids are prerequisites, not padding

* `def-minuscule-weight` and `lem-minuscule-weights-are-the-weyl-orbit` supply exactly what the
  design's `cor-minuscule-tensor-product-rule` needs and does not define: the definition of a
  minuscule weight and Etingof's Prop. 30.4 equivalences, including the orbit-sum character
  Cor. 30.5 used by the proof of Cor. 30.7. Without the lemma, "$\gamma\in W\omega$" in the
  corollary and the multiplicity-one reading of $\operatorname{ch}L(\omega)$ are unjustified.
  Both are local to the A page (levels 0 and 1), so no cross-batch change or page split arises.
* `lem-bender-knuth-involutions-on-semistandard-tableaux` is the involution input to Stembridge's
  proof (symmetry of the skew/straight Schur tableaux generating series) and is also used by the
  rank-$r$ tableau expansion `prop-semistandard-tableaux-expand-schur-characters`. No published
  item provides it. It is choice-free and local (level 0).

### AC discipline

The Axiom of Choice is carried where an examined supplier states it: all items whose evidence
uses the published/AC-stating machinery (`thm-highest-weight-classification-...`,
`prop-finite-dimensional-representations-...-decompose-into-weight-spaces`,
`lem-highest-weight-modules-have-weights-below-the-top-weight`,
`def-integral-dominant-and-strictly-dominant-weights`, `thm-weyls-complete-reducibility-theorem`,
`thm-root-sl-two-triple`, `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules`, and
the AC-stating character-ring items of batch 21) say "Assume the Axiom of Choice" and list
`def-axiom-of-choice` in `deps`. The purely combinatorial items
(`def-littlewood-richardson-tableau-and-coefficient`,
`lem-bender-knuth-involutions-on-semistandard-tableaux`, and the tableau-only counterexample
`cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr`) are choice-free and do not state
or depend on AC; their dependencies are all choice-free published combinatorial items. No
`Recorded` result is consumed as a proof and no item reaches
`deferred-set-theory-beyond-choice` through any path (all paths stay in `lie-theory`/combinatorics
items).

### Deviations recorded

* `def-schur-module-and-schur-polynomial-character` defines
  $S_\lambda(V)=\operatorname{Hom}_{S_n}(S^\lambda,V^{\otimes n})$ (the multiplicity-space model
  of the published `thm-schur-weyl-decomposition-with-length-cutoff`) rather than Seynnaeve's
  Young-symmetriser image $V^{\otimes n}c(T)$. The two models are canonically identified; the
  chosen one lets the classification use Parts (2)--(4) of the published theorem directly.
* `ex-clebsch-gordan-decomposition-for-sl2` overlaps in statement with the published B-homed
  `ex-a-tensor-product-decomposition-for-sl-two`. It is kept because the design requires this
  example as the SL$_2$ check of the *new* Steinberg/Racah--Speiser route; it places no
  dependency on the published example (B-homed items cannot be dependencies).

## Sources, recovery and substitutions

Recorded with exact locators in `research/frontier-39-analysis-30-batch-22.coverage.json` and
fetch-stamped by `source-fetch-check --stamp` (9/10 fetch-verified, 1 documented drop).

* **Etingof 18.755** (OCW, complete notes, 284 pp.), §§27--30 pp. 145--164: Prop. 27.1, §§27.2--27.4
  (SL$_n$/GL$_n$/Schur--Weyl), §28 Schur functors and invariant theory, §29.1 Schur polynomials,
  §30.1--30.2 minuscule weights and Cor. 30.7. Fetched full text (4,247,073 bytes).
* **Stembridge, EJC 9 (2002) #N5** (4 pp.): the design's EMIS URL is dead (301 to the retired EMIS
  site / zbMath record). Recovered at the official EJC download URL
  `https://www.combinatorics.org/ojs/index.php/eljc/article/download/v9i1n5/pdf` (69,153 bytes,
  4 pp.) and read in full (Bender--Knuth involutions p. 2; bi-alternant theorem and sign-reversing
  involution pp. 2--3; bi-alternant formula and Zelevinsky corollary p. 3). Recovery attempts are
  recorded in the coverage file.
* **Seynnaeve, Representation Theory (Bern)**: Ch. 9 pp. 51--52, Ch. 11 pp. 54--56, §12.1 pp. 59--60.
* **Goodman--Wallach**, GTM 255: Thm. 5.5.22 pp. 273--275 (classification of irreducible rational
  GL$_n$ representations); Cor. 7.1.6--7.1.7 pp. 333--334 (multiplicity extraction and the
  tensor-product multiplicity formula, complete proofs). This is the second primary treatment for
  the Steinberg formula.
* **Knapp**, *Lie Groups Beyond an Introduction* 2nd ed.: Ch. IX §8 Problems 15--24 pp. 611--612,
  solutions pp. 747--748 (Problem 16 wall-vanishing, Problem 17 Steinberg/Racah--Speiser,
  Problems 22--24 Kostant partition-function double sum).
* **Humphreys, *Introduction to Lie Algebras and Representation Theory*** (design's independent
  check, §24.4): **dropped** after the initial failure plus five retries (djvu.online JS app shell;
  a 12-page front-matter-only mirror; a lending-restricted archive.org scan and its 401 PDF;
  a Sci-Hub-gated preview site; a paywalled Springer cookie wall). `source_resolution` in the
  coverage file records status `dropped`, `decided_by: step-1-scaffolder`, confidence `certain`,
  the four searches, the six attempts with URLs/times/outcomes, and a complete alternative
  argument with dependencies for each of the three items the design attributed to it. This waiver
  covers source availability only; the mathematical coverage is supplied by Goodman--Wallach and
  Knapp, each read at the locators above.

## Numerical and mechanical verification performed

Independent of the sources' prose, the scaffolded statements were checked by computation:

* Steinberg's formula, both signs and directions, against direct character multiplication for
  GL$_3$ ($3\otimes 3^*$, $3\otimes 3$) and GL$_2$: all constituents and multiplicities match.
* Racah--Speiser regrouping ($\varphi$-sum) against the same examples, including the wall-discard
  case in SL$_2$ and the exact count $\min(a,b)+1$ for Clebsch--Gordan.
* Stembridge admissible-tableau counts reproduced true LR coefficients for
  $\lambda=(2,1)$, $\mu=(3,2,1)$ across every nonzero $\nu$ (e.g. $c^{(4,3,2)}_{(2,1),(3,2,1)}=2$).
* The B-page examples: the full expansion
  $s_{(2,1)}^2=s_{(4,2)}+s_{(4,1,1)}+s_{(3,3)}+2s_{(3,2,1)}+s_{(3,1,1,1)}+s_{(2,2,2)}+s_{(2,2,1,1)}$
  from an LR-tableau enumeration, with the rank-3 dimension check $27+10+10+2\cdot8+1=64=8^2$;
  the rank checks $15+6+3=24=8\cdot3$ and $3+1=4=2\cdot2$ for $s_{(2,1)}s_{(1)}$;
  $W\omega_1=\{\omega_1,\omega_2-\omega_1,-\omega_2\}$ (three elements, not six) for SL$_3$;
  and the two non-lattice semistandard fillings of shape $(2,1)$ with content $(1,1,1)$.
* The three tableau/rank counterexamples satisfy the stated hypotheses exactly, and
  $c^{(2,1)}_{\varnothing,(1,1,1)}=0$, $S_{(1,1,1)}(\mathbb C^2)=0$ in rank 2 as claimed.

## Published prerequisites examined

All dependency ids resolve (`manifest-deps`, 458 run items, 0 errors). The load-bearing published
suppliers whose statements were read at this step include:
`thm-weyls-complete-reducibility-theorem`, `thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`,
`prop-direct-sum-dual-hom-and-tensor-representations`,
`lem-highest-weight-modules-have-weights-below-the-top-weight`, `def-partial-order-on-weights`,
`cor-schurs-lemma-for-irreducible-lie-algebra-representations`,
`prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces`,
`def-weight-and-weight-space-of-a-lie-algebra-representation`, `def-finite-weyl-root-system-lattice-and-chamber-conventions`,
`def-integral-dominant-and-strictly-dominant-weights`, `lem-finite-weyl-closed-chambers-and-stabilizers`,
`prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one`,
`lem-positive-root-pairings-of-a-dominant-integral-weight`, `prop-root-vectors-shift-weight-spaces`,
`prop-dominant-integral-weights-are-nonnegative-combinations-of-fundamental-weights`,
`def-coroot-of-a-lie-algebra-root`, `thm-the-root-set-is-a-reduced-crystallographic-root-system`,
`def-fundamental-weights`, `thm-root-sl-two-triple`, `thm-finite-dimensional-representations-of-sl-two`,
`def-height-of-a-root-and-highest-root`, `def-coroot-and-dual-root-system`,
`prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system`,
`def-partition-young-diagram-and-conjugate-partition`, `def-semistandard-tableau-and-kostka-number`,
`def-skew-diagram-and-semistandard-skew-tableau`, `def-dominance-order-on-partitions`,
`def-stable-schur-function-by-bialternants`, `thm-skew-jacobi-trudi-and-tableau-expansion`,
`thm-youngs-rule-for-permutation-modules`, `def-young-subgroup-tabloid-and-permutation-module`,
`thm-complex-irreducibles-of-symmetric-groups-are-specht-modules`,
`def-column-antisymmetrizer-polytabloid-and-specht-module`,
`def-commuting-symmetric-and-linear-actions-on-tensor-power`, `thm-schur-weyl-decomposition-with-length-cutoff`,
`def-symmetric-and-exterior-powers-over-an-arbitrary-field`,
`cor-the-kth-exterior-power-vanishes-above-dimension`,
`cor-the-top-exterior-power-acts-by-the-determinant`,
`cor-determinant-multiplicativity-from-the-top-exterior-power`,
`prop-root-systems-of-the-classical-complex-lie-algebras`, `def-classical-complex-matrix-lie-algebras`.
No published defect was found in any supplier used by this batch (directions, hypotheses,
conventions and AC strength checked; the published `thm-skew-jacobi-trudi-and-tableau-expansion`
tableau expansion agrees with Stembridge's conventions, including the English-diagram row/column
inequalities).

## Cross-batch dependencies

`research/frontier-39-analysis-30-batch-22.cross-batch-dependencies.json` declares 22 open edges,
all from this batch to batch 21:

* page edge: `tensor-product-multiplicities-and-littlewood-richardson` requires
  `weyl-character-and-multiplicity-formulas` (the page `requires` plus the design's route);
* item edges to batch-21 suppliers, each with required-claim/use evidence:
  `thm-weyl-character-formula`, `def-weyl-alternation-operator`,
  `lem-weyl-alternants-are-skew-invariant`,
  `lem-geometric-series-invertibility-in-the-completed-character-ring`,
  `lem-weyl-length-parity-is-multiplicative`,
  `prop-characters-of-finite-dimensional-modules-are-weyl-invariant`,
  `prop-formal-characters-are-additive-and-multiplicative`,
  `def-formal-character-of-a-finite-dimensional-weight-module`,
  `def-completed-formal-character-ring-for-downward-cones` (used by
  `prop-tensor-product-multiplicities-are-character-structure-constants`,
  `lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient`,
  `thm-steinberg-tensor-product-multiplicity-formula`, `cor-minuscule-tensor-product-rule`).

The second `requires` entry, `semisimple-lie-algebras-cohomology-and-levi-theory`, is a published
page from the accepted library, so it is not a frontier edge and does not appear in the ledger
input. Batch-21's notes already identify this batch as its known consumer; the ledger refresh
shows all 22 batch-22 edges reviewed (`open`). No edge is owed by batch 22 to any other batch and
no cross-batch textual change is requested.

## Checks run (actual results, 2026-10-04)

* `node tools/manifest-deps.mjs` on the batch — `manifest-deps: 25 item(s), 0 normalized,
  0 error(s)`; whole-run `research/frontier-39-analysis-30-batch-*.pages.json` —
  `458 item(s), 0 error(s)`.
* `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-22.pages.json`
  — the single-file form reports expected `batch-dependency-missing` errors for batch-21 suppliers
  that are not yet authored on disk; the contract form
  `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  reports `458 scoped item(s), 1 error(s), 0 warning(s)`, and the one error is **not** in batch 22:
  `lem-positive-compactly-supported-transform-bump-on-the-dual` (batch 27) depends on
  `thm-unique-left-haar-measure-up-to-scale`, which is neither declared by batch 27 nor an item on
  disk. Recorded as a cross-batch finding for the owner; not touched here.
* `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` — exit 1 with
  exactly 26 errors, all `empty scaffold inventory` for other unscaffolded batches and their
  examples companions; **no batch-22 item has a level mismatch, cycle or malformed `deps`**
  (grep count of `differs from computed`/`cycle`/`deps must be` outside those rows = 0).
* `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-22.coverage.json --require-destination`
  — `2 page(s), 38 harvested result(s), 0 error(s), 0 warning(s)`.
* `node tools/source-fetch-check.mjs --coverage ...batch-22.coverage.json --stamp` then check mode —
  `9/10 source(s) fetch-verified` (Etingof, Stembridge, Seynnaeve, Goodman--Wallach, Knapp on both
  pages), `10/10 resolved (1 documented drop)`.
* `node tools/validate-plan.mjs research/plan-spec.json` — OK: declared page order acyclic and
  consistent; no item-level cycles, forward references, B-page dependencies or unresolved ids
  among the 1420 pages with item lists (247 planned pages still carry no item list).
* `node tools/extcheck.mjs` — OK (exit 0): every recorded-not-proved statement is a cited remark
  with no proof, and every consequence is marked; three advisory `[unproved-on-published]` rows on
  unrelated published items. Batch 22 declares no `proved_here: false` item and no `forward_refs`.
* `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` — all 25 batch-22 records
  are closed `ready` (no batch-22 work entry in the work list, checked by mapping every remaining
  item to its owning batch). Residual work at the time of writing: readiness records missing for
  21 batch-30 items scaffolded concurrently by another worker, and 26 empty-scaffold page entries
  in batches not yet constructed (outside this batch).
* `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30` — refreshed;
  batch 22's 22 edges are all present with `open` reviews.
* `node tools/depcheck.mjs` — repo-wide FAIL, pre-existing and unrelated to this batch: thousands
  of legacy published items carry no `verification.audited`/`verified` stamp
  (`[published-unaudited]`), plus advisory rows. Batch 22 authors no item files at Step 1.

## Readiness and unresolved uncertainty

All 25 items are recorded `ready` (`research/frontier-39-analysis-30-step1-<id>.json`): each has a
complete proof strategy, an explicit dependency list, examined prerequisites and a source locator,
and every source is either fetch-verified or covered by a complete documented alternative. No item
is escalated. Owner/operator reconciliation and Step 3 review follow; neither this notes file nor a
readiness record is independent mathematical approval.

Open items for the owner/Step-3, recorded rather than hidden:

1. The design's Humphreys §24.4 source is a documented drop; confirm the Goodman--Wallach +
   Knapp substitution is acceptable (the mathematics is fully covered by those two independent
   treatments, read at the recorded locators).
2. The design's E755 §27 locators for the Steinberg/Racah--Speiser rows are inaccurate (Etingof
   does not contain that material); the manifest cites the corrected sources.
3. Batch 27's manifest is missing the supplier `thm-unique-left-haar-measure-up-to-scale`; the
   whole-run content-policy gate will stay red on that row until batch 27 or its supplier batch
   resolves it. Outside this batch's write scope.
4. `item-dependency-levels`, `content-policy` (whole-run) and `step1-decisions` remain non-zero
   only because other batches are still unscaffolded/in flight; this batch's scoped results are
   clean as listed above.


## Owner follow-up on the historical batch-27 dependency report

The earlier whole-run content-policy observation in this note predates the owner correction to batch 27. The bump lemma now declares the published supplier `thm-uniqueness-of-left-haar-measure-up-to-scale`; its owner readiness record was refreshed. The prior missing-supplier error is resolved, pending the full Step 1 gate on the stable run manifests.

## Step 3b current-hash audit repairs (2026-10-05)

A dependency-ordered read of all 25 authored items found and repaired three proof-level issues. In `lem-bender-knuth-involutions-on-semistandard-tableaux`, the skew-column interval explanation now correctly says that $c\le\nu_i$ holds on an initial segment while $\lambda_i<c$ holds on a final segment. In `prop-littlewood-richardson-coefficients-stabilize-with-rank`, the row-bound proof now counts only the $i-\ell(\lambda)$ guaranteed boxes in column one below the rows occupied by $\lambda$. In `cor-minuscule-tensor-product-rule`, a wall inference is explicitly restricted to simple-coroot pairing $-1$; the proof records the $\rho$ pairing and its exact published suppliers.

The audit also separated rank-independent LR coefficients from rank-$r$ multiplicities in the B22 examples. The LR coefficient $c^{(3,2,1)}_{(2,1),(2,1)}$ remains $2$ at rank two although the three-row Schur module is zero; the full stable expansion is now justified by an explicit rank-six tableau count. Horizontal and vertical Pieri examples identify coefficient-one zero terms as absent nonzero summands at rank two. No Statement or Definition interface changed, so no outside-B22 consumer item required review or edit. The B22 manifest was synchronized for the two new direct Weyl-vector suppliers, and its strict proof contracts were synchronized for the repaired citations and derivations.

Focused verification after the final item edits: proof layout checked 6 changed items / 25 steps with 0 defects; strict B22 proof contracts checked all 25 scoped items with 0 errors and 0 warnings. No tests or workflow gates were run.

## Final Step 3b rehash after B21 supplier stabilization (2026-10-05)

After the owner confirmed B21 source bytes were stable, I recomputed every B22 transitive item hash. All **25/25** current B22 item decisions are closed; no stale or open item decisions remain. All **23/23** B22 cross-batch dependency edges (the page edge and 22 item edges into B21) are `verified`. No B22 content changed in this final rehash. The 13 refreshed receipts above remain current. Current hashes are the Step 3 item-input hashes, not raw file hashes:

- `def-tensor-product-multiplicity-for-highest-weight-modules`: `f4fd2533ae118145c3f40b36727c0d5081cd8664a47b9af0494bf3eec2122970`
- `prop-tensor-product-multiplicities-are-character-structure-constants`: `4a51e04caf5266a74a48dea8660497b7777e301f6d1dd5d761ab8fc1f55aa2ea`
- `lem-weyl-alternation-extracts-a-dominant-highest-weight-coefficient`: `e59f27e4d532f4b3c63e6192036a2b904daa16f49983396b554fc8b74ebc0695`
- `thm-steinberg-tensor-product-multiplicity-formula`: `9c98b04c61db97d690def3c76bf6391a73f21713b3ff52649b3c3f6269ff3261`
- `cor-racah-speiser-tensor-product-algorithm`: `95b0b641331f2489f4ef7b35843866b25a7ff8ff62a607093448eeb00b647c5a`
- `def-minuscule-weight`: `f35ed017ee1f778f02e69ff228d7e562c2358e0ce18d0514a68783b7a40f537b`
- `lem-minuscule-weights-are-the-weyl-orbit`: `feb5ce59b46182ed3f50a9b2954f6f4e5b3fec635e1b3999dd25bdf03dc8d865`
- `cor-minuscule-tensor-product-rule`: `8d360ef252c8547b8a3b48d1c9fc8350527e3f524b26ed158a7d967bfbebc066`
- `def-polynomial-glr-highest-weights-as-partitions`: `484f343a745c11dbd64c912d9d406c4f1ded59f93e7484d15d62d517e109e426`
- `def-schur-module-and-schur-polynomial-character`: `76bfdbe4d02caf3c8767076a7addbfa3924c33bf128b986283986a80c2ca0b3c`
- `prop-semistandard-tableaux-expand-schur-characters`: `b0abf41db9009ec8c15437d2fedb81a7f83aea32d40f1eb0d90caeab6f893720`
- `def-littlewood-richardson-tableau-and-coefficient`: `83e63e2d585c62b714fb12788299a69cba306e7c5a2ddb88b2ba373c54d1b4f5`
- `lem-bender-knuth-involutions-on-semistandard-tableaux`: `af3640dff9656a9acb027f16c376e69ebec7b3ec9246cd1b768920029f57bbda`
- `lem-highest-weight-vectors-in-a-schur-tensor-product-are-lr-tableaux`: `7c9ac6fb9e6825f9fb3e87b5f0f453c13c936a1ca04d37319b2ec7f5450c5304`
- `thm-littlewood-richardson-tensor-product-rule`: `2f635ddfa3d53b664e2d1994abb387cafcdcb50a433b2537be126bcef1c943ef`
- `cor-horizontal-pieri-rule`: `08c6a4a92419211bce88b89099fa1634295c9bbfb8d30eb04eead3cf9e4bcd66`
- `cor-vertical-pieri-rule`: `a5561641f7e04d3b6ad153ab5f8b468a935bd1f216b3a08b7b59367867af4b4a`
- `prop-determinant-twists-translate-glr-highest-weights`: `007a019d8dd5cffe9f93ffc668871ee94c54e7e7a3e6828138ec9265162d4c91`
- `prop-littlewood-richardson-coefficients-stabilize-with-rank`: `e36447b80c685391df49f78c3f0c42fd173f97865efb76da3836f801d8375749`
- `ex-clebsch-gordan-decomposition-for-sl2`: `b20ab27473f07bccb5df9b25412ea89b6db48ef5773dc68cf758539e07b802a1`
- `ex-three-tensor-three-for-sl3`: `2f5d9cc1ec463e6dbbbf0cd518affd444f7ea085ece3fd15b9c169a277776ff0`
- `ex-littlewood-richardson-product-s21-times-s1`: `a985a8bbc8739b0b3967c6b20776105df87861c0ed108ec5805b8c507823894b`
- `ex-a-littlewood-richardson-coefficient-greater-than-one`: `4cd7845fefc3296f9eebb472aae6f51ea4d59246763d68c34166a19efa219a05`
- `cex-a-semistandard-skew-tableau-with-nonlattice-word-is-not-lr`: `bd0b17f1779750d4bbcc1d4b7e50a5e2e0961df7b633043a867f6cf162645d5f`
- `cex-a-partition-with-too-many-rows-vanishes-at-fixed-rank`: `83af9dcf1f235572c758d5ab71dd4d33d008fca6129f0452c6a922b782c52fff`

There are no remaining B22-specific Step 3b blockers. The pair is ready for the owner's run-level Step 3 gate recertification; no gate was attempted in this lane.
