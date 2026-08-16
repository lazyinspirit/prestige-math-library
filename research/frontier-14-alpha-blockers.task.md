## Step 6-class authoring pass — the two unrepaired blockers

You are an authoring Alpha for run `frontier-14`. The run is complete through
step 10 and the owner is deciding on publication. Two `confirmed_fatal` defects
were deliberately left unrepaired, and they are item 1 of the step-10 report's
publish checklist. Both are on `complete-metrizability-and-baire` (batch 3).

**Why they were not repaired at step 8, and what that means for you.** Step 8 is
fatal-only, and both of these need a proof *rewrite* rather than a minimal
correction. Improvising a replacement proof under a frozen verdict is authoring,
which step 8 forbids, so the lead Alpha declared them blockers instead of
half-fixing them. That judgment was correct. **You are running the step-6-class
authoring pass they were held for** — you may write proofs. You may not change
either Statement, and you may not drop either result: dropping a drafted result
is an owner-only decision and the owner has not taken it.

**Neither theorem is false.** Both are true statements with proofs that do not
currently establish them. Your job is to supply proofs that do.

### Blocker 1 — `thm-cech-complete-spaces-are-baire`

Step 2.1 currently reads:

> 2.1 Starting in a prescribed nonempty relatively open set, use regularity and
> density to choose nested nonempty ambient open sets with compact closures, each
> lying in the next $G_\delta$ layer and the next dense open set.
> [step 1.1, F3, F4, F5, F6]

The defect: it asks for a nonempty **ambient** open set sitting inside dense open
subsets of $X$, which are only **relatively** open. The countermodel the lead
Alpha recorded, which you should reproduce before you start:

> $K = [0,1]$, $X$ its irrational subspace, every dense open set equal to $X$.
> Then $X$ is a proper dense $G_\delta$ in $K$ with empty ambient interior.

So no nonempty ambient open set lies inside a dense open subset of $X$, and the
nested construction as written cannot start.

The repair direction the report records: redo the nested-open-set construction
**inside the compactification**, using ambient opens that *meet* $X$ rather than
ones contained in the relatively open sets. Verify that direction yourself rather
than taking it on faith — it is a sketch, not an adjudicated proof.

### Blocker 2 — `thm-simple-continued-fractions-parametrise-the-irrationals`

Two distinct gaps, both currently one-line gestures on disk:

- **Step 3.1** never proves the tail identity
  $x = (p_n x_{n+1} + p_{n-1})/(q_n x_{n+1} + q_{n-1})$, which is exactly what
  puts the original irrational in every prefix interval. This is the substantive
  inverse argument.
- **Step 4.1** asserts both continuity directions in one sentence, with no
  cylinder/preimage comparison. This is the substantive homeomorphism argument.

Both need to be written out.

### How to work

- **Beta proof-design discipline applies.** Before authoring, build a
  proof-obligation map assigning every substantive subclaim to an exact
  dependency or an inline derivation, and make a boundary pass — empty objects,
  zero/one indices, degenerate parameters, endpoints, nonempty choices, both
  directions of an iff. Each written step uses only an explicit fact, an earlier
  step, a given hypothesis, or elementary algebra.
- **Self-contained scope.** No step may rest on a result the library has not
  established. Every load-bearing dependency is published content or an earlier
  item in this pair. If you need a prerequisite the library lacks, build it as a
  new item on this page rather than citing outward — and say so in your report.
  The narrow `proved_here: false` fallback needs the exact source, the failed
  in-library route and the necessity written down; do not reach for it casually.
- **Citation fidelity.** Every `[F#]`/`[L#]` states the cited proposition itself —
  an exact quote where practical, else the smallest faithful shortening, with no
  changed domain, quantifier, hypothesis, direction or conclusion. Inflating a
  restatement to cover a gap is the single most common fatal defect in this run;
  if a dependency looks insufficient, add inline steps or reconsider the
  strategy.
- **Precheck is line-based and strict.** Each numbered proof step is one physical
  line; reflow with `tools/reflow.mts` if needed. Run
  `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` and adopt the printed
  canonical stratification until clean.
- **Check consumers before you finish.** `node tools/consumers.mjs <id>` for
  both. If a repair changes anything a consumer cites, resolve it.

### What you write

1. The two repaired items in `items/`.
2. Regenerated proof-contract entries — after the proofs settle, run
   `node tools/regen-contract-entries.mjs research/frontier-14-batch-3.proof-contracts.json <id> <id>`
   and confirm `node tools/proof-contract.mjs research/frontier-14-proof-contracts.json --strict`
   is clean after the orchestrator re-merges. Also supply the eight boundary
   dispositions honestly: **a templated `not_applicable` row is not a
   disposition**, and on the last two runs false template rows each concealed a
   fatal defect.
3. **`research/frontier-14-alpha-blockers.md`** — your report: the countermodel
   reproduced, the proof strategy chosen and why, every new dependency used and
   where it is published, any new item you had to build, and the boundary pass.

Both items must end the pass with a proof you would defend to a skeptical
refuter, because both go straight to the paired judges afterwards.

**No permission prompts of any kind**, from you or any subagent. If you truly
cannot proceed without new authority, record a blocker in your report instead of
asking.
