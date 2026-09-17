# Step 3b: scaffold audit, repair and authoring, pair
# brownian-motion-markov-properties-and-hitting-times

Run: phase-2-remaining-27. Batch: 7. Role: alpha-high (Step 3b pair scaffold
auditor and item author). Dispatch label:
step3b-pair-brownian-motion-markov-properties-and-hitting-times-853ac2c4deced2ef.

Status: COMPLETE. A page (20 items) and B page (9 items) authored, registered
and checked; Step 3a scope refreshed; 29 item decisions recorded.

## 1. Files written

Items (all new, status draft, origin pipeline):

A page `brownian-motion-markov-properties-and-hitting-times` (20):

1. def-natural-and-usual-augmented-brownian-filtrations
2. def-brownian-transition-semigroup
3. lem-brownian-transition-semigroup-property
4. lem-conditioning-a-known-state-and-independent-noise
5. thm-brownian-markov-property
6. thm-brownian-future-path-markov-property
7. def-germ-sigma-algebra-at-zero
8. thm-blumenthal-zero-one-law
9. def-continuous-time-stopping-time
10. lem-brownian-first-hitting-times-of-closed-sets-are-stopping-times
11. thm-strong-markov-property-of-brownian-motion
12. thm-brownian-reflection-principle
13. cor-law-of-the-brownian-maximum
14. cor-distribution-of-a-one-sided-brownian-hitting-time
15. cor-one-dimensional-brownian-motion-hits-every-point-almost-surely
16. def-brownian-motion-started-at-x (local addition; see §2)
17. thm-two-sided-exit-probability-for-brownian-motion
18. cor-one-dimensional-brownian-motion-is-recurrent
19. lem-planar-brownian-annular-exit-probability
20. rem-raw-versus-usual-filtration-in-the-strong-markov-theorem

B page `brownian-motion-markov-properties-and-hitting-times-examples` (9):

1. ex-brownian-transition-density-and-semigroup-convolution
2. ex-maximum-crossing-probability-before-a-fixed-time
3. ex-density-and-infinite-mean-of-a-one-sided-hitting-time
4. ex-exit-side-probability-from-an-interval
5. ex-successive-brownian-hits-restart-independent-copies
6. ex-planar-brownian-coordinate-hitting-versus-point-hitting-boundary
7. cex-the-natural-filtration-need-not-be-right-continuous-before-augmentation
8. cex-strong-markov-fails-at-a-nonstopping-random-time
9. cex-brownian-hitting-time-is-almost-surely-finite-but-not-integrable

Pages: `library/probability/brownian-motion-markov-properties-and-hitting-times.md`
and `library/probability/brownian-motion-markov-properties-and-hitting-times-examples.md`,
both draft, lists matching the batch manifest.

Registrations: `research/phase-2-remaining-27-batch-7.pages.json` (A page now 20
items at the position 15 slot before the two-sided exit theorem; the sibling
pair's 20 + 8 items untouched) and
`research/phase-2-remaining-27-batch-7.proof-contracts.json` (29 v1 entries,
scope = the 29 authored items). Coverage: one row added to
`research/phase-2-remaining-27-batch-7.coverage.json` under the Sousi source
for the shifted law.

## 2. Scaffold audit

A1 (clean). All 30 external dependency ids of the scaffold resolve to published
items; all seven `requires` pages are published; no id or alias collision. The
pair's own ordering is a valid in-page topological order; after the local
addition below the A-page inventory is 20 items (cap 60).

A2 (gap, repaired locally). The Step 3a review flagged that `P_x` and "Brownian
motion started at x" were used by
`thm-two-sided-exit-probability-for-brownian-motion`,
`lem-planar-brownian-annular-exit-probability` and
`ex-planar-brownian-coordinate-hitting-versus-point-hitting-boundary` without a
scaffolded or published definition (its open observation 1). Under the Step-3
local-definition rule the new A-page item `def-brownian-motion-started-at-x`
was added, before all three consumers, defining the shifted law as the
pushforward of P under the measurable map into the cylinder space, together
with the initial-value, increment, continuity and hitting-time translation
identities. It is registered in the manifest, the coverage row and the proof
contracts, and its consumers now declare it in `deps`.

No other scaffold gap was found. No design item was dropped, reclassified or
re-homed; the pair keeps its companion wiring and stays a leaf pair.

## 3. Repairs and mathematical decisions made while authoring

These change scaffold strategy text into actual proofs; the item decisions
record them as `repaired` where the dependency list or the argument structure
had to change.

- Transition semigroup: the density/expectation identification
  `P_tf(x)=E[f(x+B_t)]` is proved from the standard normal density by the
  substitution plus the distribution-function correspondence (countable choice
  supplied by AC by restriction), and the convolution identity is computed by
  completing the square with the Gaussian integral. The scaffold's
  Tonelli-only sketch is not used as written.
- Conditioning lemma: the Dynkin-system extension is proved over product
  measurable sets with sections, taking out what is known, and monotone
  convergence; the rectangle base case is the only place independence is used.
- Markov property: the raw identity comes from the conditioning lemma; the
  usual-augmentation identity is obtained by the tower property at the
  completed raw past at a later time, so the scaffold's Levy
  downward-convergence route is replaced by a shorter one that uses the
  recorded symmetric-difference description of the completed sigma-algebras.
- Future-path Markov property: stated on the product space (no joint
  measurability input needed); the independence of the increment process and
  the conditional law of the future path are separated and both are proved, and
  the extension to all bounded Borel functionals is a Dynkin closure over
  path events.
- Blumenthal: uses the future-path theorem at s = 0, where the conditional
  state is the deterministic value 0, so the future path is genuinely
  independent of the completed time-zero sigma-algebra, and the germ is
  contained in that sigma-algebra.
- Strong Markov: proved by dyadic ceilings, the countably valued case, a limit
  over bounded continuous functionals, an extension from continuous to
  half-line cylinders by monotone limits, and Dynkin closure; no regular
  conditional distribution and no continuous-time optional stopping theorem is
  assumed.
- Reflection: reflection is taken at the bounded time tau_a wedge T and
  transferred to tau_a on the event {tau_a <= T}; the negation invariance of
  the Wiener-law increment process is proved inline, so neither finiteness of
  tau_a nor a separate Wiener symmetry theorem is assumed.
- Two-sided exit: rebuilt on the strong Markov restart plus the identity
  E[B_T]=0, proved through a random-time zero-mean lemma whose limit uses the
  finiteness of E[sup|W|] derived from the maximum law. The scaffold's lattice
  squeeze and gambler's-ruin dependence is not used; the actual suppliers are
  declared.
- Annular lemma: the bounded C^2 Hermite splice is explicit; the heat identity
  `Q_h f - f = (1/2) integral Q_r Delta f dr` is proved from a Gaussian
  integration-by-parts identity, differentiation under the expectation and the
  fundamental theorem of calculus; the martingale property is verified on
  events by Tonelli; the discrete optional sampling theorem is applied at
  dyadic ceilings of H wedge n and both limits are passed by dominated
  convergence. Only AC is spent; the scaffold's planned AC_omega/DC use at a
  Lebesgue integration-by-parts supplier is not needed, so the item does not
  declare those dependencies.
- Counterexamples: the raw filtration witness is built on the canonical
  continuous realization (so the event is not merely equal up to null sets);
  the strong Markov failure at the last zero proves both the failure of the
  conditional Wiener law and the non-stoppability of the time, deriving the
  immediate-return fact from scaling and the maximum law.

## 4. Item decisions

`tools/step3-decisions.mjs record-scope` was refreshed for the pair with
decision `sufficient` (the scope hash changed because of the local addition;
the original Step 3a review receipt is superseded and its reasoning is
preserved in
`research/phase-2-remaining-27-step3a-pair-brownian-motion-markov-properties-and-hitting-times.md`).
All 29 items were recorded with `record-item --decision repaired --confidence 1`,
with the examined dependency ids (the item's declared dependency list) and an
item-specific reason; `check --phase final` reports no work item for this pair.

## 5. Checks actually run

- `node tools/tsx-run.mjs tools/precheck.mts <29 explicit item paths>`:
  23 checked (6 items are definitions/remarks without proof bodies),
  0 failing.
- `node tools/rendercheck.mjs`: no finding in any of the 29 items or the two
  pages. The three library-wide findings are in other pairs' files
  (`def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`,
  `def-square-summable-family-on-an-arbitrary-index-set`,
  `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`),
  all in-progress draft content of another pair.
- `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-7.proof-contracts.json --strict`:
  0 errors, 29/29 items checked, 2 advisory `shotgun-bracket` warnings on
  `lem-brownian-transition-semigroup-property` and
  `thm-two-sided-exit-probability-for-brownian-motion` (the warnings count
  facts cited at one step; every declared fact is cited by at least one step,
  and no citation is unsupported).
- `node tools/content-policy.mjs research/phase-2-remaining-27-batch-7.pages.json`:
  no finding for this pair; the 28 reported `scope-item-missing` errors are the
  sibling pair's not-yet-authored items in the same shared batch file.
- `node tools/manifest-deps.mjs research/phase-2-remaining-27-batch-7.pages.json`:
  57 items, 0 errors.
- `node tools/coverage-checklist.mjs research/phase-2-remaining-27-batch-7.coverage.json`:
  2 pages, 38 harvested results, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: success; no
  unresolved id, item cycle, page cycle, forward dependency, intra-page order
  error or B-page dependency involving this pair. The pair's
  `redundant-prereq` warnings are pre-existing plan hygiene recorded already in
  the batch-7 Step-1 notes.
- `node tools/depcheck.mjs`: no finding mentioning this pair or its items. The
  one remaining library-wide error is another pair's draft `b-leaf-content`
  finding.
- `node tools/fwdcheck.mjs`: no finding for this pair; the remark's forward
  reference to
  `cex-strong-markov-fails-at-a-nonstopping-random-time` is declared in
  `forward_refs` and resolves to the companion B page.
- `node tools/step3-decisions.mjs check --run phase-2-remaining-27 --phase scope`
  and `--phase final`: this pair's scope is closed and none of its 29 items is
  in the work list (re-verified against a freshly generated id list).
- `node tools/pathcheck.mjs`: 0 errors; the warnings are pre-existing category
  and pathway hygiene for the published part of the library and are not caused
  by this pair's draft pages.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`:
  refreshed and deduplicated. The batch-7 cross-batch input remains the empty
  array: no item of this pair depends on a run item outside the pair, and the
  A page's `requires` list contains no in-run page (the B page requires only
  its own A companion).

## 6. Pre-splice plan mismatch for Step 4

`research/plan-spec.json` still carries no item list for pages 288.133/288.134;
the batch manifest now lists 20 + 9 items, including the added
`def-brownian-motion-started-at-x` and the two Step-1 local lemmas. Step 4's
splice must carry all 29 item ids plus the same-page order into the plan, and
the added definition must be spliced before
`thm-two-sided-exit-probability-for-brownian-motion` and
`lem-planar-brownian-annular-exit-probability`. The item-level dependency
lists in the manifest were refreshed to the suppliers the authored proofs
actually use, so the plan closure is expected to change for this pair relative
to the scaffold.

## 7. Published-item concerns

None confirmed. No item on this pair consumes a published result whose
statement was found to be false or whose proof was found to be incomplete.
Observations handed to the owner (not claims of defect):

1. `thm-optional-sampling-for-bounded-stopping-times` is a discrete-time
   statement; the annular lemma therefore uses it at dyadic ceilings of the
   bounded time and passes the mesh to zero. No defect; recorded so that no
   later consumer reads it as a continuous-time theorem.
2. `def-brownian-motion-started-at-x` is new run content and is not published;
   once published it should be considered the canonical home of the `P_x`
   notation for the two probability pairs that currently write it informally.
3. `research/published-consumer-supplier-ledger.md` was not edited by this
   role; no published item was found defective, so no ledger row is proposed.

## 8. Choice accounting

Every item on the pair declares AC, inherited from the Brownian and
conditional-expectation interfaces. The countable-choice assumption inside the
distribution-function correspondence is supplied by restricting AC to
countable families, stated in the fact row rather than inferred from finite
choice; no item uses DC or an arbitrary-index selection of its own, and the
annular lemma deliberately avoids the AC_omega/DC supplier the scaffold had
planned. Choice-free steps (independence, pi-lambda extensions, algebra) are
stated without choice.

## 9. Open obligations

None for this pair. The engine still owns: Step-4 splicing of the manifest
items into `plan-spec.json`; the sibling pair `brownian-path-properties` in the
same shared batch file, whose 28 items are still unauthored (the content-policy
errors above are theirs); and the library-wide findings in other pairs' draft
files listed in §5.
