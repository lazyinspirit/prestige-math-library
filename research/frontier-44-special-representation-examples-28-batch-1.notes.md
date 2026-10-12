# Batch 1 notes — `roots-and-rational-powers` / `roots-and-rational-powers-examples`

Run `frontier-44-special-representation-examples-28`, role beta, label batch-1, 2026-10-08.
Written files: `research/frontier-44-special-representation-examples-28-batch-1.pages.json`,
`…-batch-1.coverage.json`, `…-batch-1.cross-batch-dependencies.json` (`[]`), the 36
`…-step1-<id>.json` readiness records, and this note. No published content, shared plan,
engine state or verdict was edited.

## Scope built

- A page `roots-and-rational-powers` (order 15, `real-analysis`): the **22 published items
  are preserved unchanged**. The page and item files are bit-identical to the pre-run hashes in
  `research/frontier-44-special-representation-examples-28-published-a-preservation.json`
  (23/23 files re-hashed and matching); their titles in the manifest were re-extracted with the
  repository's YAML parser, so no quoting artefact reaches the manifest. The manifest re-declares each item with its own
  `kind`, `title`, `deps` and a recomputed `dependency_level`; the published statements and
  proofs stay on disk and were not rewritten. This is what makes the run's frontier selection
  non-empty for this page (the earlier `validate-plan` failure "Empty frontier page
  roots-and-rational-powers" is exactly this shell being empty).
- B page `roots-and-rational-powers-examples`: **14 new items** (9 `example`, 5
  `counterexample`), the owner-authoring-direction task for this run. Every item carries a
  complete statement, a complete proof strategy, provenance and source locators; the Step-3
  author writes the full proofs from those strategies.
- Dependency levels run 0–11; maximum in-run level 11
  (`ex-minkowski-two-entry-vectors-equality-and-strict`,
  `cex-minkowski-fails-for-p-below-one`). No cycles; every manifest item label equals the
  computed level.

## Which design controls, and design-vs-plan conflicts

The three design locations named in the task are **id mentions in other tracks, not this
pair's design**:

- `research/plan-algebra-track-expansion.md` L301 is **AL-D5**: the representation-theory
  block needs only three facts from `roots-and-rational-powers` ($|\lambda|=1$ from
  $\lambda^n=1$; $|zw|=|z||w|$; algebraicity of roots of unity). No claim of this pair is
  constrained by it.
- `research/plan-algebra-track.md` L1358/L1366/L1384 is **AA-12** (simple field extensions and
  $\mathbb{C}$): it *requires* this page and names $\sqrt{\ }$ and $|\cdot|$ as the tools it
  borrows. Downstream consumer, already declared (amendment D2); no conflict.
- `research/plan-combinatorics-and-categories.md` L264 lists `def-finite-sum` and
  `lem-finite-sum-laws` as already published on this page for the combinatorics track's use.
  Availability note only.

The pair's own design is **RA-02 in `research/plan-realanalysis-pages.md`** (with the item
skeleton in `research/design-round2.md` §5, items 1–22), and `research/plan-spec.json` is the
machine authority. Recorded conflicts:

1. **B-page design vs plan (recorded for Alpha/owner).** RA-02 and `design-round2.md` propose
   a B page of "five proofs of Bernoulli, five of AM-GM (induction, binomial, convexity,
   forward-backward, $x \le e^{x-1}$ deferred)". `plan-spec.json` gives the B page an empty
   item inventory, and the binding owner direction asks for substantive, source-grounded
   examples and counterexamples covering the A page's concepts and boundary cases with
   complete verification. The alternate-proof programme cannot be honoured inside this page's
   closure: convexity is at order ~60, $e^{x-1}$ is far later, the binomial theorem does not
   exist in the library, and forward-backward induction is already the published proof route
   of `thm-am-gm`. This batch therefore builds worked examples, equality/boundary cases and
   hypothesis counterexamples; the in-closure parts of the proposal (the two-term identity
   route for AM-GM, equality analysis) are included in
   `ex-two-term-am-gm-and-equality` and `ex-young-inequality-instances`. No claim of the
   published A page was weakened.
2. **Order.** The expansion-plan mention says "order 16"; the current plan and this run put the
   pair at 15 (`roots-and-rational-powers-examples` at 16). The plan controls.
3. **Design-vs-spec drift for the A page:** none. RA-02's 22-item inventory matches the
   published page and the plan; the drift review returned `no-drift` for this page.

## Sources (two independent treatments, both full text fetched and stamped)

- Jiří Lebl, *Basic Analysis I* (textbook, complete author-hosted book),
  `https://www.jirka.org/ra/realanal.pdf` — locators: §1.2–§1.3 (printed pp. 29–44, Exercise
  1.2.7 at p. 31) and §4.4 (printed pp. 176–180: Corollary 4.4.3, Exercises 4.4.3–4.4.4,
  Example 4.4.5). Fetch stamp: pdf, 312 pages.
- John K. Hunter, *An Introduction to Real Analysis* (full lecture-notes set),
  `https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf` — locators:
  §2.4–§2.7 (printed pp. 26–36: Proposition 2.8, the AM-GM discussion, sup/inf and
  completeness) and §13.7 (printed pp. 295–299: Theorem 13.91, Corollary 13.92, Definition
  13.93, Theorems 13.94–13.96). Fetch stamp: pdf, 307 pages.

Both were read in the extracted text at the named locators. The coverage file dispositions 32
harvested headings: 6 results to the new B items, 3 to B-page source rows (`included`), 10
`already-published` rows pointing at the preserved A-page items (or their suppliers), 2
`inline`, and 5 out-of-scope rows with specific reasons (the two differentiability clauses, the
even-$n$ negative-root exercise, the rescaling heuristic, and Lebl's completeness clauses that
the published foundations already own). Hunter's §13.7 statements are for real $p\in(1,\infty)$;
the library's items and this batch's examples are the rational-exponent forms, and that
restriction is recorded in the coverage rows and in the item strategies rather than concealed.
The A-page coverage entry triggers the advisory `coverage-low-yield` warning (3/17 included)
because the page is preserved-published and its harvest is deliberately disposed as
`already-published`; the new authoring sits on the B page.

## The new B items (all verified by direct computation during construction)

Worked examples: rational-power computations of rational bases incl. a negative exponent and
the non-coprime representative $8^{2/6}=8^{1/3}$; odd powers are bijections of $\mathbb{R}$
($x^3=-8$, $x^5=-32$ unique); two-term AM-GM with equality and $x+x^{-1}\ge 2$; the comparison
$2^{1/3}<2^{1/2}<3^{1/3}$; a weighted AM-GM computation with rational weights; Young at
$p=q=2$ and at $p=3,q=3/2$; Hölder at $p=3,q=3/2$ with an exact equality instance; the
two-term Lagrange identity giving Cauchy-Schwarz with equality iff $a_0b_1=a_1b_0$; two-entry
Minkowski with equality ($x=(3,4),y=(6,8)$, both sides 15) and strict case
($x=(3,4),y=(4,-3)$, $5\sqrt2<10$) plus the equality criterion
$x_0y_1=x_1y_0 \wedge x_0y_0+x_1y_1\ge0$.
Counterexamples: AM-GM needs nonnegative entries (the root form fails at $(-1,-4)$ with
$G=2>A=-5/2$; the product can be negative, and the squared form $ab\le A^2$ is recorded as
surviving for all reals, which locates exactly what the hypothesis buys); weighted AM-GM needs
nonnegative weights summing to 1 (two witnesses); Minkowski fails for $p=1/2$ (witness
$(1,0),(0,1)$: $4>2$, every expression defined); Bernoulli fails for $x=-4$, $n=3$
($-27<-11$) with the $n=1$ and $(-3,3)$ boundary remarks; the iterated rational-power law
fails without $a>0$ ($((-3)^2)^{1/2}=3\ne-3$, both sides defined) with the correct general
statement $(a^2)^{1/2}=|a|$.

## Dependency verification

All 14 B items depend only on in-batch A items (published, preserved) and on published
out-of-run items; each declared dep resolves on disk, points to an earlier page or an earlier
same-page item, and is used by the stated strategy. The A-page items' dependency lists were
re-checked against their published proofs (the drift review's `no-drift` verdict for this page
is consistent with the files on disk). No missing, circular, forward or inadequate dependency
was found; no AC or other choice principle is used anywhere in the new items; no Recorded
result is consumed and no foundations page reaches `deferred-set-theory-beyond-choice`. The
cross-batch ledger input is `[]`: every dependency of this batch is same-batch or out-of-run,
and `frontier-dependency-ledger refresh` reports 0 edges with `consumer_batch` or
`supplier_batch` 1.

## Checks actually run (results on this batch's current files)

- `node tools/source-fetch-check.mjs --coverage …-batch-1.coverage.json --stamp` → 4/4
  fetch-verified (2 distinct documents on 2 page entries); check mode → 4/4 resolved.
- `node tools/url-sweep.mjs --coverage …-batch-1.coverage.json --recover --fail-on-dead` →
  2/2 live, 0 failed, 0 recoverable.
- `node tools/source-backing.mjs --coverage …-batch-1.coverage.json --liveness …` → 9 authored
  results, all still backed by an openable source.
- `node tools/coverage-checklist.mjs research/…-batch-1.coverage.json --require-destination`
  → 2 pages, 32 harvested results, **0 errors**, 1 advisory warning (`coverage-low-yield` on
  the preserved A page, explained above).
- `node tools/manifest-deps.mjs research/…-batch-1.pages.json` → 36 items, 0 missing, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/…-batch-1.pages.json` → 36 scoped
  items, 0 errors, 0 warnings.
- `node tools/item-dependency-levels.mjs check --run …` → no error touches any batch-1 item;
  the reported errors are the other 27 batches' still-empty scaffold inventories.
- `node tools/validate-plan.mjs research/plan-spec.json --run …` → exit 0: "no item-level
  cycles, forward references, B-page dependencies, or unresolved ids among the 2 page(s) with
  item lists" (this batch); at the time of that run 54 planned pages still carried no item
  list (other batches, since scaffolding).
- `node tools/step1-decisions.mjs check --run …` → after the final re-record, 36/36 batch-1
  items are `ready` with 0 batch-1 items unresolved; the remaining unresolved entries are
  other batches' still-empty scaffolds. See the next section for the concurrency effect that
  forced fresh record passes (three in total: after the first population, after a dependency
  edit, and after the sibling writes) and for the residual final-refresh requirement.
- `node tools/frontier-dependency-ledger.mjs refresh --run …` → refreshed; batch-1 reviewed
  input present, 0 batch-1 edges; 23 other batches' inputs were still outstanding at the time
  of the run (other owners; batches 2, 4, 19 and 26 had landed).

## Readiness-hash churn under concurrent scaffolding (recorded for the operator)

A step-1 readiness record's hash is taken over the transitive closure of its item as resolved
against the **whole run's manifests plus plan-spec.json**, not only against this batch. The
batch-1 closure currently spans 1322 item ids, because every published supplier's file deps
are walked. When a sibling batch scaffolds a *preserved published* page whose items lie in
that closure (batch-2 listed the countability-and-uncountability items, batch-4 the ordinals items),
`loadStep3` resolves those ids through the sibling manifest instead of the plan entry, the
bytes change, and every earlier batch-1 record goes stale at once. Observed at 21:56–21:57
(batch-2 and batch-4 manifests written; batches 19 and 26 landed later without invalidating
the records), after which all 36 batch-1 records were re-recorded successfully and `check`
reported 0 batch-1 items unresolved. Batches 3, 5 and 12 were still writing when this note
was finalized, and any of them can invalidate the batch-1 records again by the same
mechanism, so a final whole-run re-record pass will be needed after the last scaffold batch
drains and before the `step1-readiness` gate is expected to close. The mathematical evidence
for every batch-1 record (complete strategy, examined dependency ids, source stamps) is in the
records and in this note and does not change with the hash; only the fingerprint does. No
mechanical repair exists for this gate (checked `MECHANICAL_REPAIRS` in
`tools/autopilot/stages/mathlib.mts`), so the refresh is a writer/operator act.

## Published defects, escalations, uncertainty

- No defect was found in the preserved A page or its 22 items during this pass; the page's
  prose claim that $x\mapsto x^n$ is a bijection for odd $n$ was previously unproved on the
  page and is now scaffolded with a complete strategy as `ex-odd-roots-of-negative-reals`
  (coverage improvement, not a repair of published content).
- Escalation for Alpha/owner, recorded above: the B-page design text (five proofs of Bernoulli
  and of AM-GM) cannot be honoured inside this pair's closure; this batch supplies the
  in-closure part and does not silently drop the design's claim. No other uncertainty remains:
  every new statement was checked numerically/symbolically at the values used.

## Owner repair supplement: complete the promised proof comparisons

The native Beta notes above are historical author evidence, not the current
coverage disposition. Their complete original bytes, manifest, coverage and
cross-batch input were preserved in
`frontier-44-special-representation-examples-28-batch-1-owner-repair-native-baseline/`
before this owner repair. In particular the assertion that the five-proof
programme cannot be honored is superseded by this independently derived repair.

The owner Codex repair reviewer preserved all 22 A records and all 14 B records,
and added two substantive B examples:
`ex-five-algebraic-proofs-of-bernoulli-and-rational-forms` (level 8) and
`ex-five-finite-proofs-of-am-gm-and-equality` (level 5). The B now has 16 items,
38 in the pair. Their full reviewed strategies are in the current manifest;
each contains five finite proof routes, with exact hypotheses and equality,
not a list of future suggestions. Bernoulli also supplies its promised rational
exponent/reversed forms and quadratic refinement using the existing rational
weighted AM-GM supplier. No A statement or published item/page was changed.

Read RA-02 in `plan-realanalysis-pages.md`, the actual §5 A-item skeleton in
`design-round2.md`, the owner authoring direction and the full batch notes.
The referenced `revised-library-plan-round2.md` does not exist in this checkout;
no reading of it is claimed. The A-item skeleton expressly permits only
integer/rational powers and excludes exponential, logarithm, limits and
continuity. Thus the full rational domain is retained. The actual supplementary clause of
`def-rational-power` already defines $0^r=0$ for every positive rational $r$;
the $x=-1$ endpoint is verified directly for those exponents and for $r=0$ via
the existing $0^0=1$ convention. Negative powers of zero remain undefined, and
no irrational power is silently assigned a value. The explicitly deferred
exponential route remains deferred. The missing binomial supplier is replaced
by a complete finite Pascal-row verification within the example; its negative
$x$ argument uses positive weights, never alternating-term truncation. The
power function's supporting line at $1$ is verified by an exact polynomial
remainder, without borrowing a later convexity theorem. No later supplier or
new pair is needed.

Source review by this owner reviewer: fetched the complete four-page MIT
18.100A Recitation 01 PDF and read its complete AM-GM proof on pp. 1-2;
fetched Cornell's complete 16-page *Convexity, Inequalities, and Norms* and read
Theorem 5 and its proof on pp. 5-6. The Cornell proof uses exponential/convexity,
so only its weighted statement is corroborating source context; the current
published rational weighted supplier's full finite proof was independently
read and supplies the actual rational route. Also read the complete local
integer Bernoulli proof, AM-GM proof, rational power monotonicity statement and
proof, and rational power laws relevant to the substitutions. Extra proof
routes are explicitly owner-derived rather than falsely attributed to these
sources. Wikipedia full-text requests were denied (403); no Wikipedia reading
or fetch verification is claimed. Existing native source rows and reading
claims remain preserved. Added two clearly dispositioned source rows and
normal full-text fetch verification for the newly cited documents.

Readiness-hash diagnosis: `step3-decisions.mjs` hashes each transitive item
closure, including the selected manifest/plan item contract and owning page's
id/order/requires as well as actual item mathematics. A sibling's replacing
stale planned supplier metadata with its preserved published manifest changes
that carrier genuinely. This is expected dependency evidence invalidation,
not proof that the mathematics changed or a reason to relax the checker.
Readiness for the two added items is recorded through the normal owner
registrar after examination. Final dependency-ordered readiness refresh of
current affected records must wait until sibling scaffold writers drain;
unchanged native records have not been overwritten by this repair.

Detailed repair review and actual checks are recorded in
`frontier-44-special-representation-examples-28-batch-1-owner-proof-coverage-review.md`
and `...-batch-1-owner-proof-coverage-checks.json`. Normal independent author,
scope, source and mathematical review still apply to the eventual item files.
