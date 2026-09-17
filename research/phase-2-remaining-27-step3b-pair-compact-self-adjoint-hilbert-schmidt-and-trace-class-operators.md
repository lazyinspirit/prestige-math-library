# Step 3b scaffold audit and item authoring — compact self-adjoint, Hilbert–Schmidt, and trace-class operators

**Status: complete for this pair.** All 21 A items and all 8 B items are fully
authored, the A and B pages are written, the batch manifest, coverage, proof
contracts and cross-batch input are updated, the scope decision is refreshed for
the repaired scope, and all 29 item decisions are recorded `accept` at
confidence 1. No escalation is open for this pair. No new item was added: the
repairs are two statement corrections, dependency completion and a
coverage-alternative correction.

Run: `phase-2-remaining-27`. Dispatch:
`step3b-pair-compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-8c52038087574993`.
Owned pair: A `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`,
B `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples`
(shared batch `research/phase-2-remaining-27-batch-3.pages.json`; the sibling
Banach-calculus pair in that batch belongs to another writer and its rows were
preserved with unchanged content).

## Completed IDs

A items (21), all authored and accepted:
`lem-norm-of-a-self-adjoint-operator-from-its-quadratic-form`,
`lem-norm-point-of-a-compact-self-adjoint-operator-is-an-eigenvalue-up-to-sign`,
`lem-eigenspaces-of-a-self-adjoint-operator-are-orthogonal`,
`lem-orthogonal-complement-of-an-eigenspace-is-invariant`,
`thm-spectral-theorem-for-compact-self-adjoint-operators`,
`cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator`,
`lem-positive-square-root-of-a-compact-positive-operator` (statement repaired),
`def-absolute-value-and-singular-values-of-a-compact-operator`,
`thm-singular-value-decomposition-for-compact-operators`,
`lem-singular-values-equal-approximation-numbers`,
`cor-compact-operator-iff-approximation-numbers-tend-to-zero`,
`cor-finite-rank-operators-are-norm-dense-in-compact-hilbert-space-operators`,
`thm-hilbert-schmidt-operators-form-a-two-sided-ideal`,
`def-trace-class-operator`,
`thm-trace-class-iff-product-of-two-hilbert-schmidt-operators`,
`lem-nuclear-series-characterizes-trace-norm`,
`thm-trace-class-is-a-two-sided-banach-operator-ideal`,
`def-trace-of-a-trace-class-operator`,
`thm-trace-is-absolutely-convergent-and-basis-independent`,
`thm-cyclicity-of-the-trace`,
`thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues` (statement repaired).

B items (8), all authored and accepted:
`ex-diagonal-schatten-class-criteria-on-ell-two`,
`ex-volterra-operator-is-hilbert-schmidt-and-quasinilpotent`,
`ex-rank-one-operator-adjoint-norm-and-trace`,
`ex-integral-operator-trace-under-a-valid-diagonal-hypothesis`,
`cex-compact-does-not-imply-hilbert-schmidt`,
`cex-hilbert-schmidt-does-not-imply-trace-class`,
`cex-trace-of-products-is-not-cyclic-without-summability`,
`rem-schatten-p-classes`.

Pages:
`library/functional-analysis/compact-self-adjoint-hilbert-schmidt-and-trace-class-operators.md`
(21 items) and `library/functional-analysis/compact-self-adjoint-hilbert-schmidt-and-trace-class-operators-examples.md`
(8 examples/remark).

## Binding inputs read

`CLAUDE.md`, `SCHEMA.md`, `README.md`; the run-local
`research/phase-2-remaining-27-owner-authoring-direction.md` (FA-16 imports the
Hilbert–Schmidt definition, basis independence, compactness and kernel theorem
from the earlier square-kernel pair, retains the two-sided-ideal theorem and
leaves Lidskii to the later Fredholm-determinant pair); the design
`research/plan-functional-analysis-track.md` §5 FA-16 (line 1231) as amended by
§14.4 and §14.5; the Step 3a review receipt and report for this pair; the batch-3
manifest, coverage and cross-batch input; and the current statements of every
supplier on the two required pages and on the published Hilbert-space, choice,
measure and linear-algebra items used.

## Scaffold audit and repairs actually applied

1. **A07 `lem-positive-square-root-of-a-compact-positive-operator` — statement
   repaired.** The scaffold read "every compact positive $T$ has a unique compact
   positive $S$ with $S^2=T$", where positivity is the library's quadratic-form
   condition and does not include self-adjointness. Over a **real** Hilbert space
   the unqualified claim is false: a skew operator such as a $90^\circ$ rotation
   has $\langle Tx,x\rangle=0$ (so it is positive in the scaffold's sense) but is
   not self-adjoint, and both the existence and the uniqueness arguments use the
   spectral theorem for compact self-adjoint operators. The statement now
   requires compact **self-adjoint** positive $T$; existence is the spectral
   series $S=\sum_{\lambda>0}\sqrt\lambda\,P_\lambda$, compactness comes from
   finite-rank truncations, and uniqueness is proved for every compact positive
   root through the symmetric/skew decomposition $R=A+K$. Over a complex Hilbert
   space no generality is lost (there positivity does imply self-adjointness);
   over $\mathbb R$ the repaired hypothesis is exactly the true statement.
2. **A21 `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues` —
   statement repaired** for the same reason: it now assumes $T$ self-adjoint,
   positive and trace class. (A skew real rank-two operator is trace class with
   trace $0$ while its singular values sum to a positive number, so the
   unqualified form was false.)
3. **Dependency completion.** Every fact actually used is now declared in the
   item frontmatter and the manifest: new edges include
   `prop-pythagorean-parallelogram-and-polarisation-identities` in A01,
   `def-eigenvalue-eigenvector-eigenspace-and-spectrum` and
   `def-kernel-and-image-of-a-linear-map` in the spectral chain,
   `thm-hilbert-space-fourier-expansion`,
   `thm-parseval-equivalences-for-a-complete-orthonormal-family` and
   `def-square-summable-family-on-an-arbitrary-index-set` in the trace chain, and
   the measure/metric suppliers
   (`thm-tonelli-and-fubini-for-completed-product-measures`,
   `thm-compact-implies-complete-and-totally-bounded`,
   `cor-newton-leibniz-with-finitely-many-exceptional-points`,
   `lem-derivative-of-a-power`) in the B examples.
4. **B-leaf legality repairs on the B page.** Several scaffold dependencies
   pointed at examples living only on other pairs' examples pages, which
   `depcheck` rejects as `b-leaf-content`. The two $p$-series counterexamples now
   rely on the published `thm-p-series-rational` instead of the harmonic-series
   example; the diagonal example and the shift counterexample prove the
   completeness of the standard basis of $\ell^2$ inline from the
   zero-complement characterisation with A-page suppliers; the Volterra example
   evaluates $\int_0^1x^m\,dx$ by Newton–Leibniz with `lem-derivative-of-a-power`
   instead of the polynomial-integral example.
5. **Coverage-alternative correction.** The Step-1 coverage alternative for A17
   named the Hilbert–Schmidt factorization as a dependency although the authored
   proof uses the nuclear-series route; its dependency list and argument text now
   match the declared dependencies. All other coverage rows are unchanged.
6. **Nothing else changed**: no promised claim was dropped, no pair added, no
   item id or title changed, no result reclassified. The scope decision was
   refreshed (review `sufficient`, new scope hash) because the two statements
   changed; the inventory, order, category and page requires remain exactly the
   binding FA-16 list.

## Mathematical decisions worth recording

- **Choice accounting.** A01–A12 use only $\mathrm{AC}_\omega$ (approximate
  maximisers, enumeration of a countable union of finite eigenspaces, one finite
  orthonormal basis per eigenspace) and never choose a basis of $\ker T$. A06 is
  the only item using full AC, through Zorn on orthonormal families of the
  kernel, exactly as the design requires. The trace chain defines
  $\operatorname{tr}(T)$ through nuclear representations and a deterministically
  constructed separable support subspace (Gram–Schmidt from a supplied countable
  dense sequence), so no Hilbert basis of the ambient space is assumed; the
  B-page Volterra and Mercer examples use AC as their imported kernel and
  Riesz–Schauder suppliers require.
- **Complex spectrum.** A05 identifies $\sigma(T)\setminus\{0\}$ with the
  nonzero eigenvalues over $\mathbb C$ by constructing an explicit bounded
  inverse for every nonzero non-eigenvalue; the real case carries no spectrum
  statement, matching the library's complex-only spectrum definition.
- **Positive trace.** A21 is the self-adjoint positive case only; Lidskii for
  general trace-class operators stays deferred to plan order 288.0801 and the
  statement says so explicitly.
- **Boundary cases.** Zero and degenerate cases are carried in the statements
  and in the item-specific contract rows: the zero operator and the finite-rank
  truncation of every singular-value statement, the empty index set for $T=0$ in
  the SVD, the zero padding beyond the rank, the interval endpoints in the
  Volterra example, and the empty basis of the zero Hilbert space in A01 and A18.

## Checks actually run (on the frozen working tree)

- `precheck` on all 29 explicit item paths: **25/25 proof-bearing items PASS**
  (four items have no proof section by kind); whole-library precheck clean.
- `rendercheck` on the 29 items and both pages: clean; whole-library rendercheck
  clean.
- `depcheck --quiet`: `OK — no cycles, all references resolve, no draft items on
  published pages`; zero `b-leaf-content` findings.
- `manifest-deps` on all fifteen batch manifests: 1028 items, 0 errors.
- `content-policy` in item mode on batch 3: 52 scoped items, **0 errors,
  0 warnings**. (`--manifest-only` is the Step-1 minting check and now reports the
  expected post-authoring "already has an item file" state; it is not a Step-3b
  gate.)
- `proof-contract --strict` on
  `research/phase-2-remaining-27-batch-3.proof-contracts.json`: **52/52 items
  checked, 0 errors, 0 warnings** (29 new contracts written from the completed
  arguments: per-step claims and inputs, exact cited excerpts with their uses, and
  eight item-specific boundary rows each).
- `boundary-audit --fail-on-contradicted --fail-on-template`: 416 boundary rows,
  149 `not_applicable`, **0 contradicted candidates, 0 template clusters**.
- `citation-fidelity --fail-on-missing-quote`: no findings.
- `finite-smoke` on the batch file: 0 errors; on the merged run-level contract
  file it is live with 3 checks and 0 errors.
- `risk-report`: 52 items routed, 0 errors (two items carry CRITICAL/HIGH
  attention tags for dependency breadth, not content defects).
- `gate-liveness --min-checks 1` on the merged run-level contracts: every gate
  live (precheck 15717 items, proof-contract 639 items, coverage 863 results,
  finite-smoke 3 checks).
- `coverage-checklist --require-destination` on batch 3: 2 pages, 54 harvested
  results, 0 errors, 0 warnings.
- `url-sweep --recover --fail-on-dead` on batch 3: 4/4 live, 5 citation decisions
  (1 documented source drop); `source-fetch-check`: 4/5 fetch-verified, 5/5
  resolved; `source-backing`: 31 authored results, every one backed by an
  openable source or documented alternative.
- `validate-plan research/plan-spec.json`: exits clean for this pair (both rows
  288.077/288.078 still carry their empty pre-splice item arrays; splicing is
  Step 4).
- `step3-decisions check --phase final`: **zero outstanding work rows for this
  pair** (29 `accept` receipts at confidence 1 and the refreshed `sufficient`
  scope receipt).
- `frontier-dependency-ledger refresh`: the batch-3 cross-batch input now has
  244 rows (the 62 earlier sibling/prior rows preserved, 182 new verified rows
  for this pair's declared item edges, each naming consumer, supplier and use);
  the refreshed run ledger has 608 edges, and its only unreviewed edges are
  batch-2 consumers of batch-1 suppliers, owned by the sibling batch.

## Cross-batch and published observations (for the owner / serial reconciler)

- **No confirmed published defect was found among this pair's prerequisites.**
  Each published supplier used here (Cauchy–Schwarz, Fourier expansion, Parseval,
  separable Hilbert bases, orthogonal decomposition, double orthogonal
  complement, Zorn, the choice items, the $p$-series theorem, the
  Riemann–Lebesgue comparison, Newton–Leibniz and the derivative of a power) was
  read at its statement and used inside its stated hypotheses.
- **Sibling-pair items left untouched, reported here for the owner:**
  (i) the merged run-level strict contract check reports 16 mechanical errors in
  `thm-shelah-universal-meagre-composition-preserves-sweetness` (unmapped facts
  5.2–5.5), belonging to another pair's in-flight dispatch;
  (ii) `fwdcheck` reports undeclared forward references in
  `thm-space-time-harmonic-functions-yield-brownian-local-martingales` and
  `thm-stopping-an-ito-integral`, also other pairs' in-flight items;
  (iii) `scope-decisions check` still lists pending decline decisions for several
  other pages, including the square-kernel pair in batch 2. None of these
  involves an item on this pair.
- The two `extcheck` warnings on published foundations items
  (`thm-baire-category-locally-compact-hausdorff`, `thm-urysohn-lemma`) are
  pre-existing published debt unrelated to this pair.

## Open obligations

None for this pair. The remaining run-level obligations — Step 4 splicing of the
two page rows, the sibling batches' contracts and decisions, and the serial
reconciler's ledger refresh — are outside this dispatch and are recorded above
as observations.

## Provenance

Statements are literature-derived from Teschl, *Topics in Real and Functional
Analysis* (§1.3, §3.2, §3.5, §3.6, §10.5) and Knapp, *Advanced Real Analysis*
(II.2, II.4–II.5); the failed Knapp clickable endpoint remains a documented
Step-1 drop with the author's complete inside edition as the replacement.
Proofs are locally written (`ai-altered`), with the exact step inputs, cited
excerpts and boundary dispositions recorded in the proof contracts. Both
repaired statements are recorded in the manifest and the refreshed scope
decision cites the repair.
