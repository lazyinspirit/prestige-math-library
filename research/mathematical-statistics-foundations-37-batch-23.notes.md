# Batch 23 authoring notes

## Controlling direction and plan comparison

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch task, the owner
  authoring direction, the dependency-level input, the assigned design and
  `plan-spec.json`. The owner direction controls stale task/design conflicts.
- The controlling row is MSF-16 in
  `research/plan-mathematical-statistics-track.md`. It matches `plan-spec.json`
  on the A/B page IDs, titles, orders and page prerequisites. `plan-spec.json`
  leaves `items: []`, while the track row gives the item-level scope; this is
  recorded as an inventory omission, not permission to narrow the track plan.
- MSF-16 requires pointwise LAN, normalized absolutely-continuous components
  when a local alternative is singular, the direct mean-one contiguity result,
  Le Cam's third lemma, the QMD-to-LAN proof, regularity and the convolution
  theorem under its stated hypotheses. It warns against claiming full local
  domination or bounded-set uniformity without proof.
- Owner resolution E19 restores the approved pointwise-LAN minimax statement.
  The theorem retains its full scope and is supported by local finite-prior
  Bayes-envelope convergence, finite approximation of Gaussian-prior Bayes
  values, and centered Lipschitz minorants for bounded bowl-shaped losses.
  The sum of minorants is not assumed quasi-convex. The compact-uniform
  posterior lemma remains a separate theorem with its stronger hypothesis.

## Inventory, suppliers and dependency levels

- The assigned pair contains 18 A-page items and 2 B-page items. The A page
  contains LAN, contiguity, QMD/LAN, convolution and minimax results; the B
  page contains the Gaussian-shift example and noncontiguity counterexample.
  The page and manifest placements, item IDs, direct dependencies and levels
  are consistent. No page approaches the 100-item cap.
- The full-run item-level check passed: 480 items across 74 pages, maximum
  level 12. Batch 23's 20 item labels have no mismatch against the full
  in-run dependency graph. Items were ordered by their computed level.
- The actual batch-22 QMD definition uses $p_\\theta=dP_\\theta/d\\mu$ but
  omits `def-likelihood-density` from its dependency list. QMD-derived items
  declare that density interface directly; the upstream supplier was not
  edited. Its common-dominator square-root expansion and support caveats were
  checked against the local uses.
- The actual batch-17 minimax page and batch-22 likelihood page were inspected,
  as were the required likelihood, minimax, central-limit and inner-product
  pages. Direct cross-batch item suppliers include `def-qmd-path` (batch 22),
  `def-likelihood-density` (batch 4), `def-loss-function-and-risk` and
  `def-bayes-and-minimax-risk` (batch 3), and `thm-vector-slutsky` (batch 13).
  Their current bodies and hypotheses were checked and their interfaces are
  recorded in `batch-23.cross-batch-dependencies.json`. Draft suppliers remain
  draft; this is interface evidence, not independent approval.
- `batch-dependency-levels.mjs check` reports the shared batch-level snapshot
  stale. The dispatch supplied scheduling-input hash
  `dd05d82b8e5bf49626aa96d504293f4afc76b61792a92c3d8eaa81be00ba597c` and
  prerequisite batches 17 and 22. The shared scheduling snapshot was left
  untouched for owner recomputation against current run manifests.

## Sources and harvest

- The A-page coverage ledger records six full-text treatments: Bartlett
  Lectures 21 and 22, Duchi's complete notes, Koenen's complete thesis, van
  Neerven's full survey and van der Vaart's complete *Semiparametric
  Statistics*. The B page records Bartlett Lecture 23 and Duchi. The relevant
  sections and complete reasoning were inspected; the local items carry the
  proofs and hypotheses rather than substituting citations for arguments.
- The browser reader timed out twice on the cited van der Vaart PDF. Direct
  retrieval from the same author/institution URL then obtained the complete
  120-page PDF; Theorem 4.14 and proof (a)–(c), printed pp. 46–48, were
  extracted and inspected. A follow-up search for the source is recorded in
  the coverage row. The full-text URL and all result dispositions are in the
  coverage file.
- Earlier optional retrievals for an AMS-hosted Anderson PDF and a
  Pollard-hosted PDF returned HTTP 403 and HTTP 502. Neither is a load-bearing
  source; the full alternative treatments above were inspected. No included
  source remains unresolved or dropped, so no `source_resolution` drop record
  was needed.

## Scoped validation

- `proof-layout`: 20 items, 76 steps, 0 defects.
- Normative phase precheck: 20 files, 17 proof-bearing files checked, 0 failed.
  Its proposed canonical relabelings were adopted and the resulting step
  dependencies were checked for correct order.
- Strict proof contracts: all 20 items checked, 0 errors, 0 warnings. Contracts
  contain the current numbered steps, cited inputs, exact supplier excerpts,
  boundary worksheets and applicable finite checks.
- Focused `depcheck`: 20 selected items, 1,749 dependency-closure items and
  331 pages checked, 0 errors, 0 warnings.
- `content-policy`: 20 items, 0 errors, 0 warnings. The B counterexample has
  `generation.role: counterexample`.
- Coverage checklist with required destinations: 2 pages, 27 harvested
  results, 0 errors, 0 warnings. `source-fetch-check --stamp`: 8/8 sources
  verified, 0 newly stamped, 8/8 resolved, 0 documented drops.
- The page/manifests, item dependency lists and frontmatter levels, and all 16
  cross-batch item edges were consistency-checked. No mismatch was found.

## Step 1 readiness

- Step 1 readiness records were written `ready` for the 14 assigned items
  without owner-held records: `def-contiguous-sequences-of-measures`,
  `lem-boundary-of-convex-set-is-lebesgue-null`, `def-lan-experiment`,
  `thm-brunn-minkowski-for-compact-convex-sets`,
  `thm-mean-one-likelihood-ratio-limit-implies-contiguity`,
  `def-regular-estimator-under-local-alternatives`,
  `lem-compact-uniform-lan-posterior-approximation`,
  `lem-gaussian-centering-for-bounded-symmetric-quasiconvex-loss`,
  `lem-qmd-score-centered-and-finite-information`,
  `lem-qmd-singular-and-zero-overlap-masses`,
  `lem-qmd-normalized-product-likelihood-expansion`,
  `thm-qmd-implies-lan-for-iid`, `cex-noncontiguous-binary-sequences`, and
  `ex-gaussian-shift-lan-and-regular-sample-mean`.
- Six existing `owner: true` records are hash-stale after necessary proof and
  dependency reconciliation: `thm-le-cam-third-lemma`,
  `lem-bowl-shaped-loss-has-centered-lipschitz-minorants`,
  `thm-convolution-bound-for-regular-estimators`,
  `lem-finite-prior-lan-bayes-envelope-convergence`,
  `lem-finite-priors-approximate-gaussian-shift-bayes-risk`, and
  `thm-local-asymptotic-minimax-bound`. They were left untouched as owner
  records require owner refresh; no `--owner` flag or overwrite was used.
  Independent review and all full batteries remain pending.
