# Batch 2 authoring notes — Compact linear inverse maps and the Picard criterion

Run `inverse-problems-knot-theory-all-109-2026-10-19`; assigned pair
`linear-operators-pseudoinverses-and-picard-criteria` only. The controlling
owner direction keeps new items draft and forbids publication or push.

## Inventory and dependency order

The active scheduling input is
`research/inverse-problems-knot-theory-all-109-2026-10-19-batch-dependency-levels.json`:
batch 2 has `dependency_level: 1`, requires batch 1, and is bound to input SHA-256
`69632ca90817955c25ab60d41e32cde58ca7d3d83e260e2e0e7ef6b68b8447ce`.
The authored inventory and item-level logical dependencies are in
`research/inverse-problems-knot-theory-all-109-2026-10-19-batch-2.pages.json`.
The item levels below count only in-run item dependencies; all other listed
suppliers are published context.

| item | page | in-run dependencies | dependency level |
|---|---|---|---:|
| `def-ip-unbounded-hilbert-moore-penrose-inverse` | A | none | 0 |
| `cex-ip-picard-orthogonality-clause-essential` | B | `def-ip-compact-linear-inverse-model` | 2 |
| `def-ip-compact-linear-inverse-model` | A | `def-ip-forward-map-and-solution-classes` (batch 1) | 1 |
| `thm-ip-closed-range-pseudoinverse-stability` | A | `def-ip-compact-linear-inverse-model` | 2 |
| `thm-ip-picard-range-criterion-for-compact-operators` | A | `def-ip-compact-linear-inverse-model` | 2 |
| `ex-ip-dense-nonclosed-diagonal-range` | B | `def-ip-compact-linear-inverse-model`, `thm-ip-picard-range-criterion-for-compact-operators` | 3 |

The batch-1 manifest and assigned carrier were rechecked before handoff. The
manifest now includes `def-ip-forward-map-and-solution-classes` at level 0, and
its actual definition body was read in full. It specifies metric parameter/data
spaces, a nonempty admissible truth set $U$, a forward map $F:U\to Y$, exact
data and solution sets, and metric solution-class quotients. Its only dependency
is published `def-metric-space`. The local compact model is the specialization
$U=X$, $F=K$: every Hilbert space contains $0$, so the supplier's nonempty-$U$
hypothesis holds, and the model statement supplies the compact linear map and
exact equation. The supplier has a current non-owner `ready` Step 1 record
(hash prefix `60c14e03e406b748`); this is readiness evidence, not acceptance or
independent approval. The initial missing-body escalation is therefore resolved.
No batch-1 file was edited.

The B counterexample consumes the local compact model. It defines the finite
adjoint explicitly from its defining identity, so the finite-dimensional
calculation uses no choice axiom. It does not depend on the general Picard
criterion. The diagonal example depends on the Picard theorem and model; the
Picard theorem and closed-range theorem each depend on the compact model. The
levels are 0 for the local Moore–Penrose definition, 1 for the compact model,
2 for the closed-range/Picard theorems and finite counterexample, and 3 for the
diagonal example. No in-run supplier excerpt or acceptance was inferred from a
plan interface.
## Plan comparison and scope decisions

The current `research/plan-spec.json` row agrees with the assignment on pair
identity, category, order and page-level requirements: IP-01, Hilbert-space
geometry/Riesz representation, and the compact self-adjoint operator page. The
IP-02 prose design also names published compact-SVD and Moore–Penrose context.
The compact-SVD theorem is in the required compact-operator page. The only
published Moore–Penrose definition found is the finite-matrix definition
`def-moore-penrose-pseudoinverse`; its statement is restricted to
`A in M_{m x n}(F)`. It is not used as a supplier for the Hilbert-space inverse.
Following the design's explicit warning, the unbounded Hilbert-space inverse is
defined locally on `R(K) + R(K)^perp`. The finite-matrix item is cited only as a
finite-dimensional cross-reference. The design's pseudoinverse-page context is
not added to `plan-spec.json` or page `requires`, because the plan controls and
shared planning files are outside this assignment.

The design's four A items and two B leaves are retained. The dense nonclosed
diagonal example also supplies the required inconsistent datum. The B
counterexample explicitly shows why a nonzero vector in `N(K*)` cannot be
discarded from the range condition. No claim is narrowed and no prerequisite is
omitted to fit the page cap.

## Mathematical conventions and axiom uses

The Hilbert inner product is linear in its first argument. Positive singular
values follow the supplier convention: $J=\{1,\ldots,r\}$ when the range has
finite dimension $r$, with $J=\varnothing$ at $r=0$, and $J=\mathbb N_{>0}$
when the range is infinite-dimensional. The diagonal example indexes coordinates
by the repository natural numbers $n=0,1,\ldots$ and reindexes the singular
system by $j=n+1$. Empty sums are zero and finite systems use finite sums.
The exact range criterion is `y in N(K*)^perp` together with
`sum_j |<y,u_j>|^2/s_j^2 < infinity`. The Moore–Penrose domain has a different
condition: `D(K†) = R(K) + R(K)^perp`, equivalently the Picard series is finite;
the `R(K)^perp` component is sent to zero.

The local Moore–Penrose well-definedness proof uses Countable Choice through the
published orthogonal-decomposition theorem. The compact SVD and kernel–range
closure supplier statements also assume Countable Choice. The diagonal
compactness verification uses the published norm-limit theorem, which assumes
Countable Choice. Each use is stated in the relevant item and proof contract.
No proof here uses full AC or DC. The finite-dimensional counterexample is
choice-free because its adjoint is constructed directly; the compact SVD,
Hilbert-adjoint generality, and infinite singular-system arguments state their
Countable Choice branch explicitly.

## Source harvest and disposition

All three full-text PDF sources below were opened and their complete relevant
arguments inspected. The actual command
`node tools/source-fetch-check.mjs --coverage research/inverse-problems-knot-theory-all-109-2026-10-19-batch-2-source-coverage.json --stamp`
passed: 3/3 sources fetch-verified, 3 newly stamped, 0 drops, exit code 0.

| source | locator and supported items | disposition |
|---|---|---|
| Christian Clason, *Regularization of Inverse Problems*, lecture notes, arXiv:2001.00617, <https://arxiv.org/pdf/2001.00617> | §§3.1–3.2, printed pp. 16–26: Theorem 3.3 gives the restricted inverse and `R(K) + R(K)^perp` domain (`def-ip-unbounded...`); Theorem 3.7 gives boundedness iff closed range (`thm-ip-closed-range...`); Theorem 3.9 gives the compact singular system; Theorem 3.10 and its proof give the Picard coefficient argument and pseudoinverse series (`thm-ip-picard...`). | Full 137-page notes inspected. Used as the primary proof route; the authored proofs are complete and restate the orthogonality condition explicitly. |
| Otmar Scherzer and Leonidas Mindrinos, *Inverse Problems*, University of Vienna lecture notes, <https://www.csc.univie.ac.at/files/InverseProblems_SS15/InverseProblems_full.pdf> | §6.1, Theorems 6.6–6.7, printed pp. 86–87: compact SVD and Picard criterion with `y in N(K*)^perp` (`thm-ip-picard...`); Theorem 2.2.3, pp. 20–21, compact infinite-range pseudoinverse instability (`thm-ip-closed-range...`). | Full 106-page notes inspected. Independent statement-level confirmation; the authored items supply complete local proofs. |
| Vesa Kaarnioja, *Inverse Problems*, FU Berlin lecture 4, 8 May 2023, <https://vkaarnioja.github.io/ip23/week4.pdf> | “Solvability of `y=Ax`,” printed pp. 9–11: forward/reverse coefficient-series proof and projection onto the singular-vector span (`thm-ip-picard...`). | Full 40-page notes inspected. Independent complete proof in the separable real case; used as a proof-route cross-check, not to restrict the authored theorem's real/complex or general-Hilbert scope. |

Searches used the queries “Clason Regularization of Inverse Problems lecture
notes Picard criterion theorem proof 3.2 pdf”, “compact operator Picard
criterion range characterization proof lecture notes pdf Moore Penrose
inverse”, and “Picard criterion N(K*) compact operator range”. They located
the direct Clason arXiv PDF, the University of Vienna notes, and the FU Berlin
lecture notes. Retrieval succeeded; no recovery retries or source drops are
claimed. The arXiv source is the full PDF endpoint, not its abstract page.

Fetch stamps: Clason, 1,145,516 bytes, PDF, 137 pages, SHA-256 prefix
`696b4f580464ec0e`; Scherzer–Mindrinos, 501,324 bytes, PDF, 106 pages, prefix
`8746caf73f32c690`; Kaarnioja, 829,565 bytes, PDF, 40 pages, prefix
`cb1afcadc70a6e41`. The source-resolution failure/retry route was not invoked
because every full-text retrieval and stamp succeeded.

## Item checkpoints

Each assigned item below was completed in supplier-before-consumer order. The
batch-1 interface was verified against its current on-disk body before readiness
records were written. The checks and any repository-wide blockers are listed in
the next section.

| item | claim, conventions and dependencies | sources / decision evidence |
|---|---|---|
| `def-ip-unbounded-hilbert-moore-penrose-inverse` | Defines $K^\dagger$ on $R(K)\oplus R(K)^\perp$ for bounded real/complex Hilbert operators; Countable Choice is used through orthogonal decomposition. Level 0. | `def-bounded-linear-operator`, `def-countable-choice`, `def-hilbert-space`, `def-orthogonality-and-orthogonal-complement`, `def-real-and-complex-inner-product-space`, `lem-pythagorean-theorem-and-finite-orthogonal-sums`, `thm-metric-closure-characterisation`, `thm-orthogonal-decomposition-by-a-closed-subspace`; Clason §3.1, Theorem 3.3, pp. 16–17. Proof and contract complete; final precheck/layout pass; ready record written. |
| `def-ip-compact-linear-inverse-model` | Specializes the general model to real/complex Hilbert spaces, $U=X$, and compact linear $K:X\to Y$, without injectivity/surjectivity/closed-range assumptions. Level 1. | `def-ip-forward-map-and-solution-classes` (batch 1), `def-hilbert-space`, `def-compact-linear-operator`; Clason §3.1 and Scherzer–Mindrinos. Actual supplier body and supplier ready record checked; statement is complete; precheck n/a; ready record written. Supplier remains draft, and no approval is inferred. |
| `thm-ip-closed-range-pseudoinverse-stability` | Proves bounded $K^\dagger$ iff closed range, and for compact $K$ iff finite-dimensional range. Real/complex, Countable Choice only; infinite case uses a recursive null-singular-value subsequence. Level 2. | Local compact model and MP definition, compact SVD, adjoint identity, Bessel, Pythagoras, finite-dimensional closedness, Hilbert completeness, Cauchy–Schwarz, recursion, well-ordering, reciprocal Archimedean lemma; Clason Theorem 3.7 and Scherzer–Mindrinos Theorem 2.2.3. Proof stratified after precheck output, exact contracts regenerated; ready record written. |
| `thm-ip-picard-range-criterion-for-compact-operators` | Separates exact range membership from the larger pseudoinverse domain. $D(K^\dagger)=R(K)\oplus R(K)^\perp$ iff the Picard series is finite; exact solvability additionally requires orthogonality to $N(K^*)$. Positive singular indices follow the compact-SVD convention, with explicit empty/finite/infinite cases. Level 2. | Local model and MP definition, compact SVD, kernel–range orthogonality, adjoint identity, Hilbert Fourier expansion, orthogonal decomposition, Bessel, Pythagoras, Cauchy–Schwarz, compactness/continuity; Clason Theorem 3.10 proof, Scherzer–Mindrinos Theorem 6.7 and Kaarnioja lecture 4. Proof and explained singular-pair TikZ diagram complete; exact contract regenerated; ready record written. |
| `cex-ip-picard-orthogonality-clause-essential` | Finite map $Kx=(x,0)$ has a nonzero datum in $N(K^*)$ with Picard sum zero but no preimage. The adjoint is given explicitly, so the witness is choice-free. Level 2. | Local model, real inner product, finite-rank compactness, Euclidean completeness; Scherzer–Mindrinos Theorem 6.7 and Kaarnioja lecture 4 support the missing orthogonality clause. Complete proof/contract; ready record written. |
| `ex-ip-dense-nonclosed-diagonal-range` | On real $\ell^2(\mathbb N)$ with zero-based coordinates, $Kx=(x_n/(n+1))$ is compact with dense nonclosed range; $y_n=1/(n+1)$ is outside the range and has divergent Picard sum. Positive SVD indices are $j=n+1$. Level 3. | Local model, square-summable-family and completeness statements, finite-rank compactness, Countable Choice norm-limit theorem, Picard theorem, $p$-series and reciprocal Archimedean suppliers; Clason Theorems 3.9–3.10 and Kaarnioja lecture 4. Proof/contract complete; ready record written. |

## Scoped checks and blockers

- `node tools/step1-decisions.mjs record` wrote `ready` records for all six
  assigned items with their direct dependency IDs and evidence. No `--owner`
  flag was used. Records hash the current bodies and dependencies; a later
  supplier edit will make the affected record stale.
- `node tools/proof-layout.mjs` on the six explicitly changed items: 6 items,
  20 steps, 0 defects, exit 0.
- `node tools/tsx-run.mjs tools/precheck.mts` on the five proof-bearing items:
  5 checked, 0 failing, exit 0. Three proofs were re-stratified to the canonical
  phase numbers returned by `precheck --json`; the final precheck passed.
- Strict `proof-contract.mjs`: 5/5 proof-bearing items checked, 0 errors and
  0 warnings. Contracts contain exact supplier statement excerpts, actual
  steps/claims/inputs, boundary cases and finite checks. `citation-fidelity` checked 49 supplier excerpts with 0 missing quotes,
  0 unresolved widening candidates, and 1 upheld author review. The reviewed
  heuristic candidate is a false positive: the supplier's exact small-tail
  finite-set clause in `F1` is being confused with its two-vector inner product;
  the contract records the precise reason.
- Focused `depcheck --items-file`: 6 authored items checked; dependency closure
  covered 997 items and 180 pages; 0 errors/warnings, exit 0. Focused `fwdcheck`
  and `extcheck` each report 0 errors/warnings. `citecheck` scanned 6 items with
  0 warnings. `content-policy` checked 6 scoped items with 0 errors/warnings.
- `rendercheck` on the six items and two A/B page files: 8 files, all math and
  YAML checks passed, exit 0. The scoped statement-first inspector checked six
  items with 0 defects. A/B page bodies are empty; no summaries were authored.
- `source-fetch-check --coverage ... --stamp` recheck: 3/3 sources verified,
  0 newly stamped, 0 documented drops, exit 0. Initial retrieval stamped all
  three full PDFs and recorded no failures, so no recovery retries/source drops
  were required.
- Local item dependency recomputation confirms levels 0, 1, 2, 2, 2, 3 for
  the six-item A/B inventory; no selected-item level errors. The canonical
  whole-run `item-dependency-levels check --run ...` is not clean: 183 errors
  across 218 pages/190 inventoried items, comprising 176 empty scaffold
  inventories and 7 level-label mismatches on other batches; none names a
  batch-2 item. The built-in Step 1 check finds all six assigned records closed
  with decision `ready`; the whole-run check is still open at 27/190 ready, with
  the other unfinished records outside this pair. The proof-contract coverage tool also stops at the empty
  `minimax-testing-and-detection-rates` inventory before it can assess the
  whole run. Batch 2's strict proof-contract check is complete locally; the
  shared whole-run coverage gate remains owned by the orchestrator.
- The active `autopilot status` recomputation reports run `running`, stage
  `1-scaffold`, 5/109 pairs covered, with artifacts still missing for pairs 7
  and 13 and an owner repair/recertification blocker in
  `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json`;
  nothing is running. The shared state and verdicts were not changed. The latest
  `git log` is still `dd17c1fe56`; the pre-existing modification to
  `research/plan-spec.json` remains untouched.

Readiness records describe completed authoring only. The A/B items and pages
remain drafts, and the records provide no independent approval or publication.
