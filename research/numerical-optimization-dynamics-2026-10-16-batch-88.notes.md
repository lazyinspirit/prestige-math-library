# Batch 88 — Iterative regularization and early stopping

Run `numerical-optimization-dynamics-2026-10-16`; role `beta`; assigned pair
`iterative-regularization-and-early-stopping`; dispatch scheduling input
`a20c83d967c4fb82d96b2681fe009f89c3dd179bbf56683e847ca38526498979`.

## Controlling design and conflicts

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch task, the owner
authoring direction, the assigned plan sections, `plan-spec.json`, the batch
dependency-level input, current cross-batch evidence, and the complete
Contract INV2 in `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md`.
The owner direction says the full repaired contract and actual supplier bodies
control; the exact INV2 appendix therefore controls over the abbreviated task
summary. The two plan locations named by the task repeat INV2 scope and do not
create a second, conflicting design.

The plan-spec A-page `requires` IDs are the five pages in the assignment. The
plan's `INV1`, `NA05`, `NA06`, `NA44`, and `OPT4` labels are the corresponding
pair/interface names; this is identifier vocabulary, not a mathematical
conflict. The B page requires its A page. No shared plan or engine state was
changed.

The controlling contract requires Landweber filter, source/noise and stopped
rate results; exact-arithmetic LSQR minimization and stopping caveats; and a
nonlinear local source-condition discrepancy theorem for the assigned
unanchored Gauss–Newton step. The first two parts are proved here. The nonlinear
target is included as an explicitly unproved draft and owner escalation, not a
logical supplier.

## Inventory and item levels

The final inventory is 10 A items and 4 B items, below the 100-item page cap.
The A page has 9 completed items and one escalated theorem target; the B page
has four completed examples/counterexamples. Item levels are the longest paths
through in-run suppliers, not the batch scheduling level 6.

| Level | A-page items |
|---|---|
| 0 | `alg-landweber-iteration-with-discrepancy-stopping`; `alg-golub-kahan-lsqr-with-givens-and-status`; `lem-local-lipschitz-derivative-quadratic-remainder` |
| 1 | `alg-iteratively-regularized-gauss-newton-step`; `thm-lsqr-residual-minimizes-on-krylov-subspace` |
| 2 | `lem-landweber-filter-and-residual-identities`; `lem-irlgnm-one-step-error-recurrence` |
| 3 | `thm-irlgnm-local-source-condition-discrepancy-convergence` (escalated); `thm-landweber-source-and-noise-error-bounds` |
| 4 | `cor-landweber-discrepancy-stopped-convergence-rate` |

The B-page levels are 1 for `cex-full-lsqr-can-amplify-data-noise`, 2 for
`ex-nonlinear-exponential-kinetics-one-step`, and 3 for each of
`ex-landweber-semiconvergence-on-a-compact-diagonal-operator` and
`ex-three-pixel-blur-landweber-reconstruction`. The semiconvergence item uses
the real `ell^2` Hilbert supplier and its square-summable-family definition;
the redundant generic Hilbert-space dependency was removed after fact-use
review. The manifest and carrier levels/dependencies agree.

## Supplier evidence and unresolved page context

- Batch 25: inspected the complete shifted normal-operator inverse and
  Tikhonov noise-amplification suppliers and their current ready records.
  Their bounded-operator, Hilbert-space, positive-shift, and Countable Choice
  hypotheses match the nonlinear algorithm and one-step recurrence.
- Batch 32: inspected the compact Gram, compact spectral multiplier, filter
  convention and square-summable Hilbert-space suppliers and their current
  ready records. These supply the compact Landweber spectral calculations.
- Batch 34: the declared page context is verified as a current page, but its
  manifest has no Golub–Kahan/LSQR item. LSQR is defined and proved locally;
  no result from this page is imported.
- Batch 50: the declared preconditioner page context is present. Its ILU(0)
  and flexible-GMRES items are not used by the unpreconditioned LSQR or
  Landweber claims.
- Batch 84: inspected the actual residual-linearization, gradient/Hessian and
  safeguarded LM bodies. They are finite-dimensional and do not state the
  source-conditioned Hilbert-space recurrence or discrepancy theorem needed
  here; their current Step-1 readiness records were absent. No result from
  batch 84 is used as proof of the nonlinear target.
- The published bounded self-adjoint continuous functional calculus is an
  additional partial source-power interface. Its exact statement assumes the
  full Axiom of Choice and is for nonzero complex Hilbert spaces. The assigned
  target also allows real Hilbert spaces; no real transfer/complexification
  supplier was verified. This is recorded as an open supplier edge for the
  unproved theorem target.

The A-page therefore has page-context rows for all five required pages. Batch
25 and 32 context and the exact item edges used are verified. Context from
batches 34, 50 and 84 remains open, with the affected logical claims and
required interfaces recorded in
`research/numerical-optimization-dynamics-2026-10-16-batch-88.cross-batch-dependencies.json`.
All eight item-level supplier excerpts in that record were checked against the
current supplier bodies and are exact. No missing page context was treated as
a reason to stop independent authoring.

## Nonlinear theorem escalation

The assigned step is
$$
s_k=(F'(x_k)^*F'(x_k)+\alpha_k I)^{-1}F'(x_k)^*(y_\delta-F(x_k)),
\qquad \alpha_k=\alpha_0q^k,
$$
without an anchor term. The INV2 target assumes an invariant ball, the stated
tangential-cone inequality with $\eta<1/2$, an $L$-Lipschitz derivative, and
$$
x^\dagger-x_0=(F'(x^\dagger)^*F'(x^\dagger))^\nu w,
\qquad 0<\nu\le\tfrac12.
$$
The complete source-condition proofs in Jin and the Kaltenbacher lecture use
the anchored IRGNM update with the extra $\alpha_k(x_0-x_k)$ term. Clason's
unanchored Levenberg–Marquardt discrepancy result uses derivative-scaling and
discrepancy-factor hypotheses absent from INV2. None proves the assigned
geometric-alpha/source-condition claim.

The local one-step result derives
$$
e_{k+1}=\alpha_kB_k^{-1}e_k+B_k^{-1}A_k^*(y_\delta-y+R_k),
\qquad
\|e_{k+1}\|\le\|e_k\|+
\frac{\delta+(L/2)\|e_k\|^2}{2\sqrt{\alpha_k}}.
$$
This is a valid pointwise identity and bound, but not a contraction. It does
not establish invariant-ball preservation, first discrepancy crossing, or
stopped convergence. The source-condition power also needs a field-complete
definition; using the existing complex functional calculus declares AC, and
the real-Hilbert case remains unresolved.

The proposed owner route is to supply a real/complex source-power definition,
then a proved unanchored contraction/error result under a reconciled set of
hypotheses, then the discrepancy-stopped theorem. Alternatively the owner may
amend the update and plan to the anchored method and use a matching theorem.
This batch does not change the plan or formula, weaken the claim, claim a rate,
or cite either incompatible source proof as the missing theorem.

## Sources and retrieval record

The A page has five independent full-text treatments; source URLs, locators,
harvested-result dispositions and per-item arguments/dependencies are in
`research/numerical-optimization-dynamics-2026-10-16-batch-88.coverage.json`:

- Clason, *Regularization of Inverse Problems*, full 137-page notes; Chapters
  7 and 11, including complete Landweber and nonlinear formula/hypothesis
  reasoning.
- Hansen, *Introduction to Inverse Problems*, complete 26-slide Chapter 6;
  Landweber and Krylov ranges inspected.
- Paige–Saunders, complete 29-page LSQR article; §§2–4 inspected.
- Kaltenbacher, complete 15-page author-hosted Newton-method lecture; the
  unanchored LM and distinct anchored IRGNM sections inspected.
- Jin, complete 15-page article; §§1–2 and the full anchored
  source-condition recurrence inspected.

Five sources have successful `fetch_verified` stamps. The sixth active coverage
record is only the inaccessible NZDR URL for the KNS monograph: its initial
HTTP 404 and five recovery routes/searches are preserved in `source_resolution`.
The first four recovery routes did not expose the text; the fifth recovered
Kaltenbacher's complete author-hosted lecture. Only that specific mirror URL
is dropped. No result is attributed to the unread monograph. The locally
proved one-step recurrence remains complete, while the discrepancy theorem
remains escalated; dropping the mirror does not waive either mathematical
obligation. `source-resolution.mjs` validates the exact history and alternative
arguments in the coverage record.

## Axioms

Countable Choice is explicitly declared and used where the Hilbert adjoint,
Bochner integral or compact spectral supplier requires it. Choice-free finite
matrix and scalar examples stay choice-free in their arguments. No current
completed item uses the full Axiom of Choice. AC is declared only on the
unproved source-power target because the existing continuous-calculus
supplier requires it; the target's real-field interpretation is still open.

## Checks and readiness

Final scoped checks after the carrier edits:

- `proof-layout`: 14 items, 30 numbered steps, 0 defects.
- `precheck`: 10 proof-bearing items, 0 failures; the three canonical phase
  relabels were adopted and the proof contracts were regenerated from them.
- `rendercheck`: all 14 item files and both page files pass; no math delimiter,
  KaTeX, YAML or wikilink errors.
- `content-policy`: 14 scoped items, 0 errors, 0 warnings.
- `proof-contract --strict`: 10/10 finished proof-bearing items, 0 errors,
  0 warnings. The batch-local inventory comparison confirms 10/10 proof-bearing
  items have contracts. The run-global `proof-contract-coverage` command is
  blocked by the unrelated missing frontier item
  `thm-ctrl1-lqr-existence-and-unique-optimal-control`.
- `coverage-checklist`: one A page, 19 harvested results, 0 errors,
  0 warnings. `source-fetch-check` reports 5/6 fetch-verified and 6/6
  resolved, with one documented source drop.
- The scoped dependency graph (six used batch-25/32 suppliers plus all 14
  batch-88 items) has 20 nodes, 0 errors, and maximum item level 4. The
  full-run dependency check has no batch-88 mismatch; its seven unrelated
  findings are six empty page inventories (the A/B pages for simulation
  gradient estimation, Langevin splittings, and global sensitivity) and
  `ex-affine-random-diffusion-uniform-coercivity`, labelled level 4 but
  computed level 5.
- The 14 assigned Step-1 records were checked individually: 13 are ready and
  the nonlinear source-condition theorem target is escalated. The full-run
  `step1-decisions check` cannot parse a foreign item with duplicate
  `pipeline_run` keys: `items/alg-chebyshev-composite-simpson-weighted-mass-matrix.md`.
  No foreign item was edited.

Step-1 decisions cover the 14 manifest items. Completed algorithms, proofs and
examples are marked `ready` only after their declared item dependencies,
placement and applicable finished proof contracts were checked. The nonlinear
source-condition theorem target is `escalated`; its missing proof interfaces
are listed above and in its draft carrier. These records are authoring
readiness only and do not constitute independent approval.


## Owner anchored nonlinear theorem repair

After genuine native88 completion at2026-10-16T04:20:53.343Z and explicit mathematical approval, the original optimization owner preserved the unanchored algorithm, one-step lemma and scalar example bytewise. A separate anchored algorithm and fixed-reference recurrence were added; the unproved target was replaced by a complete anchored direct-Morozov convergence theorem. A local source-power/filter lemma constructs Hilbert complexification for real spaces, treats zero spaces, and carries AC. Explicit output-range factorization, small source and tau constants preserve all0<nu<=1/2 and infinite-dimensional ill-posed operators. They are additional matched hypotheses, not claims that the former unmatched target was proved or false.

The proof controls the theoretical extended recurrence through a comparison index, proves ball membership inductively, then identifies the finite algorithm's first crossing. Bounded stopping indices use finite-index stability and kernel orthogonality. Active INV2 controls/A prose and exact proof/coverage/interfaces now match this theorem. Earlier unproved-target and open-real-transfer statements above are historical native-handoff evidence; mathematical acceptance/readiness and current hashes still belong to root. No newly cited source theorem is falsely substituted for this local proof.

Current owner-repaired inventory is13 A items plus4 B items (17 total); the native10/4 inventory and unproved-target table above are historical. The target retains its original recorded level3 pending root projection; its new logical supplier chain suggests4. Newly authored source-power/anchored-algorithm/reference suppliers carry provisional2/1/3 labels; no shared level artifact or existing readiness record was changed.
