# Step 3a scope review — fredholm-determinants-and-the-lidskii-trace-formula

- Run: `frontier-36-complete` (batch 1), role alpha, label
  `step3a-pair-fredholm-determinants-and-the-lidskii-trace-formula-d168c0cc24f89b0b`.
- A page: `fredholm-determinants-and-the-lidskii-trace-formula` (order 288.0801,
  functional-analysis, 13 items at dependency levels 0–8).
- B page: `fredholm-determinants-and-the-lidskii-trace-formula-examples`
  (order 288.0802, 4 items at levels 0/6/8/9); companion pointers agree A↔B and
  the B page requires only its A page.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs
  record-scope` as a non-owner review bound to the current pair scope hash).
  Scope only: no item approval, no owner record, no scaffold, plan, manifest,
  prose or page edit.

## Evidence read

- `research/frontier-36-complete-batch-1.pages.json` (A 13 + B 4 items, every
  item with `deps` and `dependency_level`), `.coverage.json` (1 page, 3
  fetch-verified sources, 34 harvested rows), `.notes.md` (Step-1 evidence,
  published-debt table, escalation and owner correction),
  `.cross-batch-dependencies.json` (owned content `[]`).
- Prose design: `research/plan-functional-analysis-track.md` §14.5
  "Fredholm determinants and the Lidskii trace formula" (lines 3297–3351:
  A list 3306–3335 with the internalization instruction and the
  single-frontier support theorem; B list 3337–3342; source paragraph
  3344–3351), the page table rows 2969–2970, and the FA-16 inventory
  (lines 1233–1290) whose items 22–25 are the published determinant/Lidskii
  records this pair must internalize.
- `research/plan-spec.json` rows 288.0801/288.0802 (empty item arrays, A→B
  edge), `research/frontier-36-complete-scope-ledger.json` (pair listed,
  batch 1), `research/frontier-36-complete-drift-evidence.json` entry for the
  A page (declared `requires` equal the manifest `requires`; the batch
  manifest is the current inventory).
- Owner decisions: `research/frontier-36-complete-owner-authoring-direction.md`
  (Fredholm paragraph: local separable determinant, spectral product and
  arbitrary-Hilbert support theorem; finite-rank example on the proved route;
  relink/repair the published definition and Lidskii consumer afterwards);
  `research/frontier-36-complete-operator-record.md` (batch-1 escalation
  resolution adding the thirteenth A item and re-pointing the finite-rank
  example).
- Step-1 readiness: all 17 pair items have current `research/frontier-36-complete-step1-<id>.json`
  records, every one `decision: ready` (the finite-rank example and the
  arbitrary-Hilbert support theorem carry owner-repair reasons).
- Published carriers: `items/def-fredholm-determinant.md`,
  `items/prop-fredholm-determinant-properties-for-trace-class-operators.md`,
  `items/thm-lidskii-for-trace-class-operators.md`,
  `items/rem-external-separable-trace-class-fredholm-determinant-theorem.md`,
  and the published page
  `library/functional-analysis/compact-self-adjoint-hilbert-schmidt-and-trace-class-operators.md`
  (whose prose promises the determinant module will replace, not duplicate,
  the external theorem).
- Checks I ran: `coverage-checklist.mjs` on the batch-1 coverage file
  (1 page, 34 harvested rows, 0 errors, 0 warnings); `manifest-deps.mjs` on the
  batch-1 manifest (17 items, 0 errors); `step3-decisions.mjs check --run
  frontier-36-complete --phase scope` names this page as "current scope review
  required"; a resolved-dependency scan of the 17 pair items found 32 distinct
  external dependencies, all present in `items/` with `status: published`
  (0 missing, 0 unpublished).

## Scope against the prose design

Every designed A row is present with the design's meaning (the manifest runs
the two exterior-power items before Weyl's inequality, which is the logical
order for the design's route):
algebraic multiplicity (3307), finite-rank trace-norm compressions (3308),
Weyl's inequality (3310), the local separable construction that internalizes
the external theorem and the trace-norm finite-rank limit (3311–3313),
determinant continuity/growth/multiplicativity (3314), logarithmic derivative
(3315), zero criterion and zero order (3316), quasinilpotent zero trace
(3317), generalized-eigenspace trace decomposition with the explicit
invariant-quotient/compression warning (3318–3319) and the published Lidskii
upgrade target (3320–3323). Three further A items are the explicitly
authorized additions: `def-hilbert-exterior-power-and-induced-operator`,
`lem-trace-norm-of-hilbert-exterior-powers` and the single-frontier
`lem-arbitrary-hilbert-fredholm-determinant-from-separable-support`
(3325–3335); each is a local prerequisite of the designed internalization, not
new subject matter. The determinant definition and the Lidskii theorem are
deliberately not duplicated: the design (3311) and the owner direction keep
the stable published IDs and require the owner's later corpus repair. The four
designed B leaves are present unchanged (finite-rank example 3339, diagonal
trace-class example 3340, Volterra-square zero trace 3341, invariant-but-not-
reducing counterexample 3342), the last one being the design's own warning
matrix (lines 3299–3302).

A → B and B → A companion pointers agree; the A page declares exactly the four
plan prerequisites (`banach-algebras-spectrum-and-holomorphic-functional-calculus`,
`compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`,
`the-determinant-of-a-linear-operator`,
`triangularisation-and-jordan-canonical-form`), all published with nonempty
inventories. No designed row is dropped, weakened or moved.

## Source coverage

The three sources were re-fetched for this review and their SHA-256 prefixes
reproduce the Step-1 stamps exactly: Kostenko 707,149 bytes / `4b15703cd83c0f2a`,
van Neerven 8,628,336 bytes / `2095f24459613e59`, Dyatlov–Zworski 12,229,547
bytes / `694d0542c6e2ce66`. I read the cited ranges and confirmed the harvested
results exist and say what the coverage claims:

- Kostenko, *Trace Ideals with Applications*, §3.4 (coverage locator printed
  pp. 34–41 / PDF pp. 43–50; I re-read printed pp. 35–41 / PDF pp. 44–50):
  Lemma 3.4.2 (wedge Gram determinant and the increasing-index
  orthonormal basis of $\Lambda^nH$), Exercise 3.4.3
  ($|\Lambda^n(A)|=\Lambda^n(|A|)$), Theorem 3.4.2 (Weyl product inequality),
  Proposition 3.4.3 (exterior-power trace class, singular values as products,
  $\|\Lambda^nA\|_1\le\|A\|_1^n/n!$), Corollary 3.4.1 (entire determinant,
  minimal exponential type), Theorem 3.4.4 (trace-norm continuity bound),
  Corollary 3.4.2 (multiplicativity $D_{A+B+AB}=D_AD_B$), Theorem 3.4.6
  (zero criterion and zero order $m_{\mathrm{alg}}$), Theorem 3.4.7 (spectral
  product and $\operatorname{tr}A=\sum\lambda_n$). Kostenko's Horn theorem
  (3.4.1) and Hadamard theorem (3.4.5) are recorded out-of-scope with reasons.
- van Neerven, *Functional Analysis*, §14.5.a (printed pp. 583–591): Theorem
  14.33 (Lidskii), Definition 14.34, Lemmas 14.35–14.39, Propositions
  14.40–14.41 (invertibility criterion; zero order equals algebraic
  multiplicity via the spectral projection), Lemma 14.42 (Hadamard step) and
  Theorem 14.43 (spectral product).
- Dyatlov–Zworski, *Mathematical Theory of Scattering Resonances*, Appendix B
  §§B.5–B.6 (printed pp. 505–513): Propositions B.23–B.25 (Weyl products and
  the convex-majorization sum form, including $f(x)=x$ and $f(x)=\log(1+x)$),
  Lemma B.26 (finite-rank logarithmic derivative), Propositions B.27–B.29
  (determinant construction, zero/invertibility and continuity/growth
  estimates), Propositions B.30–B.31 (spectral product and Lidskii) and Lemma
  B.32 (zero multiplicities).

The route substitution recorded by Step 1 is confirmed: the design's Hadamard
step (Kostenko 3.4.5, van Neerven Lemma 14.42) is replaced by a local
argument — zero criterion plus minimal exponential type forces
$D_Q\equiv1$ for quasinilpotent trace class $Q$, hence $\operatorname{tr}Q=0$;
the generalized-eigenspace trace decomposition then gives
$\operatorname{tr}(T^n)=\sum_j\lambda_j(T)^n$, and the logarithmic derivative
with the Neumann series yields the spectral product, extended by the identity
theorem. The coverage disposes both Hadamard rows `out-of-scope` with that
reason, so no designed result is lost and no forward-order page is consumed.

## Role in the library

A scan of `plan-spec.json`, all 30 batch manifests and the published corpus
finds exactly one in-run consumer, the B companion; no other planned page
requires this A page and no published item or page references the 13 new IDs
yet. The pair is the FA-track endpoint and the designated local proof module
for the published external record: `def-fredholm-determinant`,
`prop-fredholm-determinant-properties-for-trace-class-operators` and
`thm-lidskii-for-trace-class-operators` are published items that still cite
`rem-external-separable-trace-class-fredholm-determinant-theorem`, and the
published FA-16 page's prose states that the determinant module must replace
that external theorem rather than create duplicates. The Step-1 notes and the
owner authoring direction record the required owner repair (relink the
separable $D_S$ and the support-independence argument; replace the
proposition's F2 and derivative route; keep the Lidskii statement, its AC
hypothesis, arbitrary-Hilbert scope, algebraic multiplicities and empty-list
conventions). That repair is post-authoring owner work on published carriers,
not an in-run item, so it does not enlarge this pair's scope. The canonical
ledger `research/published-consumer-supplier-ledger.md` currently lists the
Fredholm-determinants/Lidskii pair only in its planned-consumer index
(line ~9749); it has no defect entry for these three published items, although
the batch-1 notes tabulate the exact debt and planned suppliers.

## Uncertainty and observations for the owner

1. **Route substitution.** The design (lines 3344–3351) says the author "must
   follow" Kostenko's route including Hadamard factorization, while the
   scaffold proves the same claims without the later Hadamard page. The
   substitution preserves every designed result and removes a forward
   dependency (that page sits at order 337), but the owner should confirm it
   explicitly; it is a route decision, not a scope omission.
2. **Published repair follow-through.** The pair's intended effect (retiring
   the recorded external determinant theorem from published proofs) is
   achieved only by the owner's repair of the three published items after the
   local proofs are authored and audited; the definition/proposition/Lidskii
   statements must keep their current mathematical meaning. An entry in the
   canonical ledger for these items is still missing.
3. **Scope boundaries (not omissions).** The pair excludes Hilbert–Schmidt
   regularized determinants (Kostenko §3.6) and the classical Fredholm minor
   series for continuous kernels (Kostenko Theorem 3.4.8). Neither is designed
   here, neither is consumed by any planned or published page I could find,
   and the pair's trace-class spectral product/Lidskii subject is complete
   without them. If the owner wants either in the library, it is enrichment or
   a new pair, not an adequacy gap.
4. **Coverage-label precision.** The coverage describes Dyatlov–Zworski Lemma
   B.32 as "zero multiplicity via Riesz projection"; in the source its
   multiplicity proof runs through the argument principle on
   $\partial_z\log D$ (the Riesz-projection route is van Neerven Proposition
   14.41). The claimed mathematics is present in both sources; this is
   record-label granularity.
5. **Relink seam for the author.** The arbitrary-Hilbert support theorem
   (`lem-arbitrary-hilbert-fredholm-determinant-from-separable-support`)
   states the product formula and the finite-rank identity, but not
   explicitly $D_H'(0)=\operatorname{tr}_H(T)$ or the $\varepsilon$-growth
   transfer that the published proposition also needs; those follow from the
   separable construction's derivative-at-zero and from trace/trace-norm
   preservation under the support reduction. The Step-3 author and the
   owner's relink should record that derivation explicitly.
6. Proof correctness, statement-by-statement source fidelity and dependency
   minimality were not judged here; those belong to Step 3b and Step 5.

## Scope decision

The planned definitions, results and examples cover the pair's intended
subject — the trace-class Fredholm determinant $\det(I+zT)$ with its entire
growth, multiplicativity, continuity, zero criterion and spectral product,
the absolute summability and trace formula for the nonnormal eigenvalue list,
and the arbitrary-Hilbert support construction, together with a companion
page of finite-rank, diagonal, quasinilpotent and nonreducing-subspace
examples — at the design's breadth, with source backing re-verified for every
load-bearing row, all 17 Step-1 records `ready`, all declared prerequisites
published, and no in-run dependency conflict. Recorded: **sufficient**.
