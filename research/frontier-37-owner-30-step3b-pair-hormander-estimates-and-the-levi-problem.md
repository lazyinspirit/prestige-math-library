# Step 3b auditor/author report — pair `hormander-estimates-and-the-levi-problem`

- Run: `frontier-37-owner-30` (stage `3b-author`), dispatch label
  `step3b-pair-hormander-estimates-and-the-levi-problem-4fd5689c6f8625f1`
- Role: alpha-high author (not owner, no owner rulings taken). This is a
  resumed dispatch: the provider-outage recovery direction
  (`research/frontier-37-owner-30-owner-authoring-direction.md`) authorizes
  finishing the current drafts, not any proof acceptance.
- A page: `hormander-estimates-and-the-levi-problem` (batch 29, order 865)
- B page: `hormander-estimates-and-the-levi-problem-examples` (batch 29, order 866)
- Batch: 29 (single pair; no sibling pair in the shared batch file)
- Carrier: `research/frontier-37-owner-30-batch-29.pages.json` (updated in place)

## 0. Owned IDs and entry state

Owned A items (18, page order 865):
`def-weighted-l2-spaces-dbar-forms`,
`lem-hilbert-complex-solver-from-coercive-estimate`,
`lem-local-boundary-separator-for-strongly-pseudoconvex-domain`,
`lem-locally-finite-smooth-partition-of-unity-on-domain`,
`lem-smooth-regularization-of-psh-exhaustion`,
`thm-behnke-stein-increasing-union`,
`lem-maximal-distributional-dbar-operator-is-closed`,
`thm-basic-bochner-kodaira-morrey-estimate-cn`,
`thm-pseudoconvex-domain-smooth-psh-exhaustion`,
`lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains`,
`lem-hormander-solver-on-smooth-pseudoconvex-domain`,
`thm-hormander-l2-dbar-existence`,
`cor-dolbeault-vanishing-pseudoconvex-domain`,
`cor-first-cousin-problem-pseudoconvex-domain`,
`lem-boundary-peak-function-by-dbar-correction`,
`lem-oka-weil-on-domain-of-holomorphy`,
`thm-levi-problem`,
`thm-oka-weil-approximation-pseudoconvex-domain`.

Owned B items (6, page order 866):
`ex-hormander-estimate-with-gaussian-weight`,
`ex-levi-form-of-the-unit-ball`,
`ex-explicit-dbar-solution-with-l2-estimate`,
`ex-strictly-psh-exhaustion-of-a-convex-domain`,
`ex-pseudoconvexity-of-a-hartogs-domain`,
`ex-first-cousin-gluing-on-a-pseudoconvex-domain`.

Entry state at resume (checked on disk 2026-09-30):
- Authored with contracts: items 1–9 of the dispatch order (checkpoints in
  `research/frontier-37-owner-30-batch-29.notes.md`), plus item 10
  `lem-maximal-distributional-dbar-operator-is-closed` (authored, contract
  present, not yet checkpointed).
- Not yet authored: `thm-basic-bochner-kodaira-morrey-estimate-cn`,
  `thm-pseudoconvex-domain-smooth-psh-exhaustion`,
  `lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains`,
  `lem-hormander-solver-on-smooth-pseudoconvex-domain`,
  `thm-hormander-l2-dbar-existence`,
  `cor-dolbeault-vanishing-pseudoconvex-domain`,
  `cor-first-cousin-problem-pseudoconvex-domain`,
  `lem-boundary-peak-function-by-dbar-correction`,
  `lem-oka-weil-on-domain-of-holomorphy`,
  `thm-levi-problem`,
  `thm-oka-weil-approximation-pseudoconvex-domain`,
  `ex-explicit-dbar-solution-with-l2-estimate`,
  `ex-hormander-estimate-with-gaussian-weight`,
  `ex-first-cousin-gluing-on-a-pseudoconvex-domain`.
- Neither library page (`library/complex-analysis/hormander-estimates-and-the-levi-problem.md`,
  `...-examples.md`) exists yet.

## Open obligations (carried from the scope review, pre-splice findings and owner direction)

1. Pre-splice `prefix` finding: `thm-oka-weil-approximation-pseudoconvex-domain`
   has kind `corollary` in the current manifest against its `thm-` ID and the
   plan's `theorem` kind. Repair the manifest kind (ID preserved) and author
   the file with `kind: theorem`.
2. Scope residual 1: narrow the coverage claim that Demailly (6.9) is
   `included` in `thm-hormander-l2-dbar-existence` (the authored theorem states
   the strictly psh weight version); refresh the coverage row wording.
3. Scope residual 2: the `(0,q)` generality is authored from Demailly §4/§6 +
   Jabbari Lemma 85, not Boas; keep this explicit in the item sources.
4. Scope residual 3 / plan choice row L427: per-item `axiom_use` recorded in
   the manifest; copy exact supplier strength (AC$_\omega$/DC inherited);
   never relabel an inherited choice result ZF.
5. Scope residual 4: `ex-levi-form-of-the-unit-ball` keeps the explicit
   $L\rho(\xi)=|\xi|^2$ computation. DONE (item authored 2026-09-30).
6. Scope residual 5: the partition-of-unity lemma cites the published
   partition/$\sigma$-compactness and smooth-bump machinery. DONE (item
   authored 2026-09-30).
7. Cross-batch supplier `lem-mollification-commutes-with-weak-derivatives-in-the-interior`
   (batch 10) is now an authored file on disk; recheck its statement and the
   actual use inside `lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains`
   before closing that consumer; keep the batch-29 cross-batch input row
   status honest.
8. Page prerequisites: the batch-10 page `smooth-approximation-and-sobolev-extension`
   now exists (`library/pde/...`); recheck the declared page edge at handoff.
9. Author both library pages, refresh contracts for all 24 items, sync
   manifest deps to the authored file deps, record step3 decisions, and run
   the explicit-path checks (precheck, rendercheck, content-policy, strict
   proof-contract, item-dependency-levels, validate-plan).
10. Honest flags: Boas proves $\bar\partial$-solvability only for $(0,1)$-forms;
    the $(0,q)$ extension rests on Demailly/Jabbari and is authored as such.
    The finite-chart Friedrichs boundary-density step in the weighted Morrey
    lemma uses only the batch-10 interior mollifier commutator interface.

## 1. Inputs read

- `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md` conventions, `research/plan-spec.json`
  (page 865/866 entries and the item-level promise list), the batch-29 carrier
  `research/frontier-37-owner-30-batch-29.pages.json`, coverage file, and the
  run's Step-1 readiness records for the pair (`frontier-37-owner-30-step1-*.json`).
- The Step-3a scope review `research/frontier-37-owner-30-step3a-pair-hormander-estimates-and-the-levi-problem.md`
  and the owner authoring direction `research/frontier-37-owner-30-owner-authoring-direction.md`;
  the pre-splice findings file was re-checked against current inputs (no applicable
  findings remain for this pair: the `prefix` kind mismatch for
  `thm-oka-weil-approximation-pseudoconvex-domain` was repaired by the manifest
  kind change recorded in the session-11 notes, and no `b-leaf`/`undeclared-prereq`
  finding remains for page 865).
- Full relevant source passages: Boas §3.2.4 (Theorem 19), §3.3.2 (Theorems 20-21
  and the Levi problem, printed pp. 75-80), §3.3.3 (the weighted estimate);
  Demailly Ch. I (6.13) and Ch. VIII §§1-6 (Theorems 1.2, 6.5, (6.4), (6.6)-(6.9));
  Jabbari §3.6.4/§4 (Theorem 64, Theorem 72); Lebl Ch. 2 §2.6 and Ch. 4 §4.6.
- Current sibling and library items read for supplier statements and conventions:
  `lem-test-function-cutoffs-and-euclidean-localization` (new supplier for item 19),
  `thm-identity-theorem-in-several-complex-variables`,
  `thm-connected-and-locally-path-connected-implies-path-connected`,
  `ex-convex-subsets-of-rn-are-path-connected`,
  `lem-plane-exterior-of-a-closed-disc-is-path-connected`,
  `thm-algebra-of-complex-derivatives`,
  `thm-polar-coordinates-formula-for-lebesgue-measure`,
  `thm-tonelli-theorem-for-sigma-finite-product-spaces`,
  `thm-disc-area-is-pi-r-squared`, `thm-cartan-thullen-theorem`,
  `thm-domains-of-holomorphy-are-hartogs-pseudoconvex`, plus the in-pair items
  authored earlier in this run.

## 2. Author-level scaffold audit and local repairs

- Every scaffold claim is preserved. The audit at authoring strength found and
  repaired three concrete defects:
  1. **`lem-boundary-peak-function-by-dbar-correction` (statement + proof).**
     Claim 1 was stated for bounded *domains*. The Levi proof needs a peak
     function at the maximum point p of the exhaustion on a hull, where the
     only available defining function is S - s and it defines the whole
     (possibly disconnected) sublevel {S < s}; the claim was therefore
     generalized to bounded *open* sets, and the proof was adjusted at step 2.1
     (union of components), 3.2 (compactness of the sublevels of the auxiliary
     exhaustion) and 4.2/5.1 (the regularization lemma and Demailly's estimate
     are applied on the component D_p'' containing p, with the solution
     extended by zero; supp(alpha) is contained in a small ball around p because
     the cutoff is, so alpha vanishes on the other components).
  2. **`lem-oka-weil-on-domain-of-holomorphy` (graph lift).** The draft cutoff
     chi = theta(|g_1|) was not supported in dom(g), so g chi and the correction
     form were not defined. The authored proof now chooses a general cutoff
     chi in C_c^inf(W), W = dom(g) cap D, supported in an open set on which
     |g_1| > m for a margin m > 1 obtained from the compactness of L minus L_1
     (two-stage support argument), and solves the dbar-equation for
     g(dbar chi)/(g_1 - w) on X_{N,r} with 1 < r < m. The (0,1)-form
     solvability is identified with the (n,1) case of Demailly Theorem 6.5 by
     wedging with the holomorphic volume form, the same device used in item 18
     step 5.1.
  3. **`lem-oka-weil-on-domain-of-holomorphy` (hull idempotence).** Step 6.1 now
     records that the hulls L_j = hull(E_j) satisfy hull(L_j) = L_j, which the
     polyhedron construction requires.
- No scaffold dependency was dropped without a replacement: item 18 uses
  Demailly (6.5) directly (recorded in session 12); item 19 uses the new
  published supplier `lem-test-function-cutoffs-and-euclidean-localization`
  (ZF, independently audited) instead of the concentric-bump lemma, and keeps
  the exhaustion/regularity suppliers.
- The Demailly (6.9) usc-weight statement is not used anywhere in the pair; the
  coverage row records this narrowing. Boas proves (0,1)-solvability only; the
  (0,q) statements are authored from Demailly/Jabbari and labelled as such.

## 3. Authoring order actually used

The recomputed dependency order after the local repairs was: 1-17 (already
authored and decided in earlier sessions), then `lem-boundary-peak-function-by-dbar-correction`
(level 1 after the repair), `lem-oka-weil-on-domain-of-holomorphy` (level 2),
`ex-explicit-dbar-solution-with-l2-estimate` (level 5), `ex-hormander-estimate-with-gaussian-weight`
(level 5), `thm-levi-problem` (level 3), `thm-oka-weil-approximation-pseudoconvex-domain`
(level 4), `ex-first-cousin-gluing-on-a-pseudoconvex-domain` (level 7). Each item
was written and checked before the next was started; the level labels in the
manifest were updated to these computed values and `item-dependency-levels check
--run frontier-37-owner-30` is clean.

## 4. Per-item checkpoints

Condensed; the full checkpoints are in `research/frontier-37-owner-30-batch-29.notes.md`
(sessions 1-13).

- `def-meromorphic-function-in-several-complex-variables`: definition, no proof
  obligation, contract with empty citations, precheck n/a. Decision recorded.
- `lem-boundary-peak-function-by-dbar-correction`: repaired as described above;
  claim 1 for bounded open sets, claim 2 for strongly pseudoconvex boundaries.
- `lem-oka-weil-on-domain-of-holomorphy`: authored and repaired as described
  above; statement unchanged (Oka-Weil on a domain of holomorphy).
- `ex-explicit-dbar-solution-with-l2-estimate`: explicit solution
  u = (1/2)zbar^2 with dbar u = zbar dzbar, E(f) = pi/8, ||u||^2 = pi/16.
- `ex-hormander-estimate-with-gaussian-weight`: explicit solution u = zbar_1
  with dbar u = dzbar_1, both weighted squared norms equal pi^n.
- `thm-levi-problem`: full proof of the equivalence of Hartogs
  pseudoconvexity, domain-of-holomorphy and holomorphic convexity, via peaks,
  hull decomposition, sublevel convexity, Oka-Weil and the final case analysis.
- `thm-oka-weil-approximation-pseudoconvex-domain`: one-step consequence of the
  Levi theorem and the host-domain Oka-Weil lemma.
- `ex-first-cousin-gluing-on-a-pseudoconvex-domain`: two-chart Cousin-I data on
  C with the explicit witness G = 1/z; the whole-space pseudoconvexity
  convention is used for C.

## 5. Checks actually run

- `node tools/tsx-run.mjs tools/precheck.mts` on all 25 owned item paths:
  `24 checked, 0 failing` (the definition is `precheck n/a`).
- `node tools/rendercheck.mjs` on all 25 item files and both library pages: OK.
- `node tools/content-policy.mjs research/frontier-37-owner-30-batch-29.pages.json`:
  25 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/frontier-37-owner-30-batch-29.proof-contracts.json --strict`:
  0 errors, 0 warnings, 25/25 items checked.
- `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30`: clean
  (levels recomputed after the repairs; maximum level 28 run-wide).
- `node tools/validate-plan.mjs research/plan-spec.json`: page order acyclic and
  consistent, no item-level cycles, forward references, B-page dependencies, or
  unresolved ids among the pages with item lists; the pair's page-level
  `redundant-prereq` notes are pre-splice plan remarks for Step 4.
- `node tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase final`:
  all 25 owned items have current decisions with confidence 1 (eleven recorded
  this session, `repaired` for items 18 and 19, `accept` for the rest).
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-37-owner-30`:
  batch-29 cross-batch input refreshed (page edge to batch 10 verified; the
  batch-10 item dependency row stays `removed` with its evidence).
- `node tools/depcheck.mjs` and `node tools/fwdcheck.mjs` (library-wide): the
  pair's items produce no unresolved-dependency or forward-reference finding
  (an unused weight-inner-product pointer on `ex-explicit-dbar-solution-with-l2-estimate`
  was found by depcheck and removed, and that item's decision was re-recorded).
- Exact-arithmetic/numeric spot checks (authoring aids only): the Levi and
  Oka-Weil arguments were checked step by step; the two Gaussian examples were
  recomputed independently by elementary integration.

## 6. Flags, escalations and published concerns

- No un-authored supplier remains inside the pair: the item dependency closure of
  all 25 items is authored, contract-covered and decided, so no consumer item
  needs the "flagged unfinished supplier" escalation.
- The batch-10 page `smooth-approximation-and-sobolev-extension` is an authored
  same-run page; the A-page edge is `verified` in the cross-batch input. The
  item-level row for
  `lem-mollification-commutes-with-weak-derivatives-in-the-interior` is `removed`
  with evidence (the weighted Morrey lemma no longer cites it).
- Statement-level change to flag for Steps 4-8: `lem-boundary-peak-function-by-dbar-correction`
  claim 1 now quantifies over bounded open sets rather than bounded domains. This
  strictly generalizes the promised claim (every bounded domain is a bounded open
  set) and is needed for the Levi proof at non-regular exhaustion levels; the
  consumer `thm-levi-problem` uses exactly that general form. No promised result
  was dropped.
- Published concerns: none identified in this dispatch; the pair did not edit any
  published item. No owner-held escalation was overridden, and no `--owner` flag
  or audit stamp was used.

## 7. Open obligations carried to Step 4

- Splice the two library pages: `library/complex-analysis/hormander-estimates-and-the-levi-problem.md`
  (19 items) and `...-examples.md` (6 items) are written; `research/plan-spec.json`
  still shows them with `0 items`, which is the expected pre-splice state.
- The plan-level `redundant-prereq` remarks for page 865 (direct requirements also
  reachable through `the-dbar-complex-and-integral-solutions` and the Hilbert-space
  pages) are page-prerequisite bookkeeping for serial reconciliation, not item
  defects.
- Coverage: rows for the newly authored items (both Gaussian examples, the
  Oka-Weil approximation theorem and the first-Cousin example) were added to the
  batch-29 coverage file under the Demailly and Boas sources; the Demailly (6.9)
  `out-of-scope` row and the item-15 narrowing remain as recorded.
- The single missing planned item in the run-wide plan check
  (`ex-conway-base-13-function`, page `monotone-functions-and-discontinuities-examples`)
  is outside this pair and was not touched.
- Fresh decisions exist for all 25 items; if Step 4 or later changes any item's
  inputs, those decisions must be refreshed again by their owner.
