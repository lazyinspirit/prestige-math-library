# Run `frontier-12` — Alpha step-8 adjudication of the paired-judge verdicts

**Alpha:** Claude Opus 5, `claude` runner, `xhigh`, 1,000,000-token window
(`claude-opus-5[1m]`), `--permission-mode bypassPermissions`.
**Date:** 2026-08-13. **Scope:** all 327 rejections in
`research/frontier-12-judge.jsonl`, across 223 distinct items.

**Status: COMPLETE.** Every rejection adjudicated from disk. **3 fatal defects
confirmed and repaired**, 4 false positives refuted with quoted evidence, 317
rejection rows closed as confirmed-nonfatal with no mutation of any kind.
`step8-guard` passes: 3/3 edits licensed.

---

## 1. The sweep, and what the two lanes actually did

| | verdicts | rejections | rate |
|---|---|---|---|
| GPT 5.6 Terra | 454 | 188 | 41.4% |
| DeepSeek V4 Pro | 454 | 139 | 30.6% |
| **combined** | **908** | **327** | — |

223 distinct items drew at least one rejection; **104 drew both lanes**. Nulls: zero.

**First, a mechanical check that matters.** I recomputed `item_sha256` for all 454
items and compared against the ledger: **454/454 match current disk, and both
lanes judged byte-identical text.** So no judge saw pre-step-6 text, and every
complaint below is a complaint about the text that would publish. That also
means the step-6 note in my dispatch — "if a judge raises one of these against
the pre-repair text, it is a false positive" — never applies: they all read the
repaired text. Two of them found that **two of my step-6 repairs were wrong.**

### The dominant finding class, and why it is nonfatal

`judge.mts` instructs both lanes: *"any step citing another library item … may be
treated as ASSUMED-CORRECT … Judge only THIS item's own reasoning: does its proof
correctly establish its stated claim FROM its cited facts?"* That is a strict
local-licensing test, and it generated the overwhelming bulk of these rejections:
a `[F#]`/`[L#]` fact restates a dependency slightly loosely, or a step uses a fact
that is true, published, and often on the same page but absent from that step's
tag list.

I applied one line uniformly, and it is the owner's:

> **FATAL** iff the item as it stands asserts something **false** — in title,
> Statement, Definition, Fact, or a proof step — or omits a hypothesis without
> which its Statement fails, or has a gap a competent reader cannot close from
> material the item can reach.
> **NONFATAL** iff the mathematics is correct and complete in substance and the
> defect is in the local citation or justification, including cases where the
> *named route* does not work but a correct one is immediate from the item's own
> facts.

This is the same line step 6 applied when it downgraded refuter-3's Cayley–Hamilton
"unlicensed scalar extension" finding, and it is what the 30-second rule requires.
Three findings crossed it. They are in §2. The most substantive nonfatals — the
ones I would fix at step 6 of any future touch — are named in §5, not buried.

---

## 2. Confirmed fatal — 3 items, 6 ledger rows, all repaired

**All three were flagged by both lanes independently, and two of the three are
defects my own step-6 repairs introduced.** That is the cross-family check doing
exactly what it is for, and I record it plainly.

### 2.1 `cor-potentials-differ-by-a-componentwise-constant` — a false biconditional in [L1]

`defect_type: logic`. Both lanes, with independent counterexamples.

[L1] ended: *"…its classes are the **piecewise-$C^1$ path components** of $U$, and
a set is piecewise-$C^1$ path-connected exactly when it is one such class."*

That is **false**. Terra: for $U=\mathbb R$, the open set $(0,1)$ is
path-connected but is not a path component of $U$. DeepSeek: an open disk in the
plane is path-connected but is not a whole path class of the plane. Both are
correct — the ⟸ direction holds, the ⟹ direction fails for every proper
path-connected subset.

**This clause is mine.** Step-6 §5.5 records that I rewrote [L1] because the
cited definition "defines only path-connectedness of an open set", and I wrote
the equivalence relation inline. In doing so I asserted a characterization the
definition does not support and that is not true. A reader would carry away a
false topological fact.

**Repair** (minimal, and it is the clause the item's consumers actually need):

> …its classes are the **piecewise-$C^1$ path components** of $U$, and a nonempty
> $U$ is itself piecewise-$C^1$ path-connected exactly when it has just one class

True in both directions from `def-piecewise-c1-path-connected-conservative-and-path-independent`
("nonempty and every two points of $U$ are joined in $U$"). Nothing in the proof
used the deleted clause; steps 1.1–4.1 are untouched.

### 2.2 `lem-green-type-i-boundary-identity` — step 1.2 asserts a false endpoint identity

`defect_type: logic`. Both lanes, same counterexample.

Step 1.2 read: *"…the only fixed $x$ where this can fail are $x=a$ and $x=b$;
**there $\alpha(x)=\beta(x)$ makes both sides zero**…"*

`def-type-i-type-ii-and-elementary-green-regions` requires $\alpha\le\beta$ on
$[a,b]$ and $\alpha<\beta$ **on the open interval $(a,b)$ only**. It does not
force equality at the endpoints. Terra: *"A rectangle with $\alpha=0$ and
$\beta=1$ is Type I, but both endpoint arcs have positive length."* DeepSeek gives
the same. A rectangle is the most common Type I region there is, and the step
asserts something false about it.

**This is also mine.** Step-6 §5.5: *"the cited Newton–Leibniz theorem assumes
$a<b$, but the region definition permits $\alpha=\beta$ at the two endpoints.
Both sides vanish there; I wrote the degenerate case in explicitly."* I read
"permits" as "requires". The judges caught it.

**Repair.** The identity does hold at every $x\in[a,b]$ — for the right reason,
which is a case split, not a degeneracy:

> Since $\alpha<\beta$ on $(a,b)$, this covers every interior $x$. At $x=a$ and
> $x=b$ the region definition requires only $\alpha(x)\le\beta(x)$, so both cases
> occur: where $\alpha(x)<\beta(x)$, as for a rectangle, the same application of
> [L4] applies verbatim, and where $\alpha(x)=\beta(x)$ both sides are zero.

[L4] does apply verbatim at an endpoint with $\alpha(a)<\beta(a)$: $P$ is $C^1$ on
an open neighbourhood of $D$ and $\{a\}\times[\alpha(a),\beta(a)]\subseteq D$, so
$y\mapsto P(a,y)$ is $C^1$ on a neighbourhood of that segment. Step tag, step
number and cited inputs are unchanged, so the proof contract is unaffected.

### 2.3 `lem-green-type-ii-boundary-identity` — the same defect in the other coordinate

`defect_type: logic`. Both lanes. Step 1.2 asserted $\lambda(y)=\rho(y)$ at
$y=c,d$; DeepSeek's counterexample is a square. Repaired identically in $\lambda,\rho,c,d$.

**Neither Green conclusion was ever wrong** — the endpoints are a measure-zero set
in the outer $x$- (resp. $y$-) integration, so `thm-greens-theorem-for-finite-unions-of-elementary-regions`
and everything above it stand unchanged. What was wrong was a stated fact about
the region class, in the two lemmas that carry Green's theorem.

---

## 3. False positives — 4 rows, refuted from disk

| item | lane | the claim | the disk text |
|---|---|---|---|
| `cor-symmetric-lovasz-local-lemma` | Terra | "The statement omits finiteness of $I$. For countably many independent events of probability $1/(2e)$ … the probability that none occurs is zero." | The counterexample cannot satisfy the hypothesis. `def-dependency-digraph-for-finite-events` opens *"Let $(A_i)_{i\in I}$ be a **finite** family of events"*, so "have a dependency digraph" already entails finiteness; and the Given says *"A finite event family"*. `thm-asymmetric-lovasz-local-lemma` is likewise "for finitely many events". |
| `ex-two-composition-series-of-the-cyclic-group-of-order-twelve` | Terra | "[L1] inaccurately attributes to `thm-subgroups-of-cyclic-groups-are-cyclic` the additional claim that every quotient of a cyclic group is cyclic." | It does not. The citation parenthesis closes first: *"…least positive power of $g$ that it contains ([[thm-subgroups-of-cyclic-groups-are-cyclic]]). A quotient of $G=\langle g\rangle$ is generated by the image of $g$ and so is cyclic as well."* The quotient sentence stands outside the citation and carries its own one-line argument — it is the step-6 repair, read as if it were part of the citation. |
| `thm-spectral-mapping-for-polynomials` | DeepSeek | "[L6] claims $F[x]$ is an integral domain and admits cancellation, but the cited item only states $F[x]$ is a UFD; step 2.1's cancellation is not licensed." | [L6] reads *"$F[x]$ is a unique factorisation domain, **hence** an integral domain and admits cancellation of nonzero polynomials."* The word "hence" marks the step, and a UFD is by definition an integral domain. |
| `lem-random-graph-short-cycle-expectation` | DeepSeek | "Step 1.1 divides by $2r$ … but the cited definition of a cycle is a closed walk with distinct vertices; **no identification is stated**." | Step 1.1 states exactly that identification: *"An undirected $r$-cycle is represented by $2r$ ordered lists of its vertices, one for each starting point and direction."* |

Terra's Local Lemma row is the one worth noting: it is a correct piece of
mathematics (finiteness *is* essential, and its counterexample is right) aimed at
a hypothesis the Statement already carries by reference.

---

## 4. Confirmed nonfatal — 317 rows, nothing mutated

I read all 223 items in full and, wherever a lane alleged that a Fact overstates
its source, opened the source. A representative accounting by class:

| class | count (rows, approx.) | disposition |
|---|---|---|
| Fact restates a dependency loosely, or omits a hypothesis satisfied in use | ~150 | real breach of the citation-fidelity rule; no false claim |
| Step uses a true fact absent from its own tag list, present in the item or on its page | ~110 | 30-second gap |
| `deps` omits an item whose content the proof uses | ~35 | real omission; the item exists and is reachable |
| Degenerate/boundary case not separately discharged | ~15 | both sides trivially agree there |
| Well-definedness asserted in a Definition with empty `justified_by` | ~7 | claim true, discharged by the next item on the page |

Sources I opened to settle recurring claims:

- **`thm-of-square-roots` really is stated for a complete ordered field**, so the
  five "$\sqrt2$ exists over $\mathbb Q$ / the reals are not shown complete" rows
  are genuine citation gaps — closed by the reals being a complete ordered field,
  which is their construction.
- **`def-generated-cyclic-finitely-generated-and-free-modules` is published and
  says**: *"A subset $B$ is a **basis** if every element of $M$ has a unique
  expression as a finite $R$-linear combination of elements of $B$."* Both lanes
  attacked the identical phrasing in the draft
  `def-free-module-on-a-set-and-standard-basis` (Terra: pad with a zero
  coefficient; DeepSeek: the zero ring). The objection is real — uniqueness is of
  the finitely-supported coefficient family, not of the index set — but the draft
  is **consistent with published convention**, so repairing it would fork the
  library against an item I must not retrofit. Nonfatal, recorded.
- **`def-path-polygonal-length-and-rectifiability-in-rn` genuinely does not define
  "piecewise-$C^1$"** — both lanes are right about
  `def-piecewise-c1-path-operations-and-oriented-reparametrizations`. But the term
  *is* library content: `cor-piecewise-c1-paths-have-additive-speed-integral-length`
  states the condition in full and is **already the second entry in that very
  item's `deps`**. The citation points at the wrong one of two declared
  dependencies. Nonfatal; DeepSeek's "or undefined" half is refuted.
- **`def-equivalence-and-adjoint-equivalence-of-categories` is published and ends
  "No triangle identity is required of a bare equivalence."** So both lanes are
  right that `prop-equivalences-preserve-reflect-and-create-limits-and-colimits`
  cannot use one. See §5.

Notable individual refutations inside nonfatal rows:

- `cor-equalizers-are-monic-and-coequalizers-are-epic`: DeepSeek's conclusion
  ("step 1.1 checks only $er=es$ and never the B-leg; $r=s$ does not follow") is
  **wrong** — $f e r = f e s$ follows from $er=es$ by composing with $f$, so the
  limit cone's legs are jointly equalized and joint monicity applies. Terra's
  narrower point stands: [F1]'s "the single nonidentity leg" misdescribes a cone
  that has two structure legs. Both rows closed nonfatal on Terra's point.
- `thm-sylvesters-law-of-inertia`: DeepSeek concludes "uniqueness in step 4.1 is
  unsupported". It is supported — $p$ and $q$ are intrinsic maxima by steps 2.1
  and 3.1, and $r=\dim V-p-q$ follows from $p+q+r=\dim V$ without the radical
  claim at all. The radical-as-kernel citation gap is real and is the nonfatal.
- `cor-inverse-of-an-invertible-operator-is-a-polynomial-in-the-operator`:
  DeepSeek reads the ellipsis at $n=1$ as producing $T^{-1}$ inside its own
  formula. Under the display's own lowest written term ($c_1I$) the $n=1$ instance
  is $T^{-1}=-c_0^{-1}I$, which is correct — checked against $T=3$ on
  $V=\mathbb Q$. Recorded nonfatal for the undischarged degenerate notation.

---

## 5. The nonfatals I would fix at step 6, if there is a next touch

R1 forbids me from touching these now, and I have not. They are the ones where
"nonfatal" is a close call, and the owner should see them by name.

1. **`lem-homomorphisms-respect-commutators-and-derived-series`, step 3.1** — both
   lanes. The Statement's clause $K^{(r)}\le G^{(r)}$ is justified by "applying
   the inclusion to the inclusion homomorphism $K\hookrightarrow G$", which yields
   $K^{(r)}\le K^{(r)}$ — a tautology, not the claim. The claim is **true** and
   follows in two lines by induction from the item's own step 1.1, so nothing
   false publishes; but the route named does not work.
2. **`prop-equivalences-preserve-reflect-and-create-limits-and-colimits`, steps 2.1
   and 3.1** — both lanes. The transport is written "along the unit **and
   counit**", and the counit is exactly where a triangle identity would be needed;
   the published definition explicitly denies one. The theorem is true and the
   *correct* argument is **shorter** than the stated one: $G$ is fully faithful, so
   [L1] reflects, and naturality of $\eta$ alone transports; for creation,
   uniqueness of limits gives $F\bar\lambda\cong\mu$ with no counit at all.
3. **`thm-limits-and-colimits-in-functor-categories-are-computed-pointwise` step
   3.1 and `cor-functor-categories-inherit-completeness-and-cocompleteness` step
   1.1** — the appeal to set-level Choice to select a limiting cone at each $a$
   passes over a class that is generally proper. The theorem's Statement is safe
   (it assumes **chosen** limits); the corollary's conclusion is a ZFC theorem via
   Scott's trick. What is missing is one sentence of size discipline.
4. **`thm-chosen-limits-and-colimits-assemble-into-functors`, [F3]** — "Smallness is
   cardinality of the indexing category" is not a true sentence about smallness.
   Both lanes. [F3] is used only in a housekeeping remark, so nothing rests on it.
5. **Vacuous "what it is for" Fact restatements**, which CLAUDE.md forbids by name.
   The clearest: `ex-splitting-field-of-x-cubed-minus-two` [F5] ("Eisenstein's
   criterion applies over $\mathbb Q$ to the stated integer divisibility
   hypotheses" — no conclusion stated); `ex-second-moment-bound-for-a-nonempty-random-subset`
   [L4] ("Markov and the second-moment theorem give their respective upper and
   lower bounds"); `cor-conservative-fields-are-path-independent-and-have-zero-circulation`
   [L1] ("path independence **compares** any two paths…"); `ex-strict-union-bound-for-overlapping-events`
   [L3] (the union bound "**compares**" — no direction).
6. **`ex-triangle-count-in-the-erdos-renyi-random-graph`** — both lanes. The variance
   display contains $\binom{n-2}{2}$, undefined for $n\in\{0,1\}$ under a
   $\mathbb N$-indexed binomial coefficient, and step 2.1's "for $n<3$ all relevant
   binomial coefficients vanish" is not accurate for those two values. The true
   variance is $0$ there.

---

## 6. Things the dispatch predicted, and what happened

- **Green's theorem and Jordan domains.** No lane objected to the elementary-region
  scope. Both objected to something real *inside* it, and they were right (§2.2–2.3).
- **Module localisation absent (D11).** Not raised by either lane.
- **`splitting-fields` has no algebraic closure.** Not raised by either lane.
- **D10 wiring intact.** `def-field-of-fractions`,
  `thm-field-of-fractions-is-a-field-and-the-domain-embeds`,
  `thm-universal-property-of-the-field-of-fractions` and
  `cor-rational-function-field-as-a-fraction-field` are untouched, keep their exact
  ids, and remain A-page items on `the-field-of-fractions-and-localisation`. No
  repair went near them. `cor-rational-function-field-as-a-fraction-field` drew both
  lanes for instantiating at $F=\mathbb R$ without a fact that $\mathbb R$ is a
  field — a real citation gap, nonfatal, and I did **not** edit it, so step 9 can
  wire to unchanged text.

---

## 7. Items edited — this list IS the rejudge set

Three items, each finished in one pass:

- `cor-potentials-differ-by-a-componentwise-constant`
- `lem-green-type-i-boundary-identity`
- `lem-green-type-ii-boundary-identity`

Nothing else on disk changed. No item was created or deleted, no id renamed, no
frontmatter touched, no `deps` edge added or removed, no page file modified. No
`verification.judge` block existed on any of the three, so none had to be deleted.

**Twice-touched.** All three are now twice-touched (step-6 repair, then this
step-8 repair) and by the advisory escalation warrant the orchestrator's personal
audit. In each case the second touch **corrects the first**, which is the honest
description: my step-6 edits to the two Green lemmas asserted a false endpoint
identity, and my step-6 edit to [L1] asserted a false characterization. The
touchlog also now shows `thm-rmod-is-complete-and-cocomplete` at 2 — that is
snapshot-interval accounting from the new `after-alpha-step8` cut, not a second
mathematical repair; its only edit remains the step-6 inline free-module
construction, which neither lane faulted.

---

## 8. Gates and receipts at close

| gate | result |
|---|---|
| `precheck` (3 edited items) | 3 checked, **0 failing** |
| `depcheck` | **OK** — no cycles, all references resolve, no draft items on published pages |
| `fwdcheck` | **OK** |
| `extcheck` | **OK** |
| `rendercheck` | **OK** |
| `prosecheck` | **OK** |
| `merge-proof-contracts` | 370 scoped items from 7 batch contracts |
| `proof-contract --strict` | **0 errors, 0 warnings, 370/370** |
| `finite-smoke` | **0 errors**, 2 checks, both pass |
| `risk-report --require-reviewed` | **0 errors**, 370 routed |
| `impact-audit` `pre-step8` → `after-alpha-step8` | 1 changed interface, 2 affected items — **both read, see below** |
| **`step8-guard`** | **OK — 3/3 changes licensed by a confirmed_fatal adjudication** |

**Impact receipt, completed by reading both consumers.** The only changed public
interface is `cor-potentials-differ-by-a-componentwise-constant`; the two Green
edits are proof-body only and changed no interface.

- `ex-constructing-a-potential-on-an-open-rectangle` [L3] restates the corollary's
  **Statement**, which I did not touch. **No change required.**
- `lem-potentials-glue-over-a-path-connected-overlap` step 1.1 applies the
  corollary to a nonempty piecewise-$C^1$ path-connected overlap to obtain a
  *single* constant. That inference needs exactly the direction my corrected
  clause now states — a nonempty path-connected set is one class — where the
  deleted clause reached it through a false biconditional. **No change required;
  the repair strengthens this consumer's support.**

**One ledger-contract note the orchestrator should have.** `judge.mts` and
`tools/item-hash.mjs` normalize differently: the judge ledger's `item_sha256`
strips only the `judge:` sub-block, while `touchlog`/`step8-guard` strip the whole
`verification:` block. The adjudication rows must carry the **`item-hash.mjs`**
digest — that is what `step8-guard` compares against the touchlog baseline, and it
is what the brief's wording ("verification block excluded") describes. My first
ledger used the judge-ledger value and the guard correctly rejected all three
repairs as `nonfatal-edit` even though the fatal rows were present. The rebuilt
ledger recomputes every row's hash with `itemContentHash` at adjudication time —
current disk for the 220 untouched items, byte-exactly reconstructed pre-edit text
for the three repaired ones — and **all 223 were verified to equal the `pre-step8`
baseline before the file was written.**

### `level-coverage --verify-current-context` — run, and it is NOT green

I ran it rather than deferring it, and it returns **18 errors in three classes**.
Only one class is step-8 business:

| class | count | whose |
|---|---|---|
| `judge-coverage-missing` | **3** | mine, expected — exactly `cor-potentials-differ-by-a-componentwise-constant`, `lem-green-type-i-boundary-identity`, `lem-green-type-ii-boundary-identity`. Clears on the targeted rejudge in §7. Their 220 unedited page-mates keep byte-identical `item_sha256` values and need nothing. |
| `audit-receipt-plan-reconciliation-missing` | **14** | **pre-existing** |
| `spine-receipt-invalid` | **1** | **pre-existing** |

**Both pre-existing classes are outstanding obligations for this level that no
step-8 action can close, and I am naming them because my step-6 report did not.**

1. **`research/frontier-12-audit-coverage.json` has `plan_reconciliation: []`**,
   while the gate currently computes **14 items** whose authored `deps` drifted
   from their planned `deps`. Each needs a written, concrete drift reason. None of
   the 14 is an item I touched — they are `thm-zassenhaus-butterfly-lemma`,
   `thm-wallis-product-for-pi`, `thm-sylvesters-law-of-inertia`,
   `thm-spectral-mapping-for-polynomials`, `thm-snake-lemma-for-modules`,
   `thm-szele-many-hamilton-paths-in-a-tournament`,
   `thm-top-is-complete-and-cocomplete-…`, `thm-tournament-property-s-k-existence`,
   `thm-unit-semicircle-arc-length-is-pi`, `thm-viete-product-for-pi`,
   `thm-subgroups-and-quotients-of-solvable-groups-are-solvable`,
   `thm-sylvesters-criterion-for-positive-definiteness`,
   `thm-symmetric-alternating-relations-by-characteristic`,
   `thm-zero-complex-derivative-on-a-domain-implies-constant`. This is the
   "planned-versus-authored dependency reconciliation" the Alpha report contract
   asks for, and the receipt records none of it.
2. **There is no spine receipt for this run at all.** `research/frontier-12-spine*`
   does not exist; every prior run has a `<run>-spine-audit.json`
   (`frontier-7` … `frontier-11`, `zfc`, `freegroups-1`). `level-coverage`
   requires the current independent `spine-audit.mjs` receipt for the
   proof-bearing items among the 100 largest transitive dependency cones — the
   check that stops a level resting on an unreviewed high-fan-out proof. It was
   never produced, and my step-6 gate table listed neither `level-coverage` nor
   `spine-audit`, so nothing caught it.

Neither is step-8 work: the spine audit needs an independent read of the
high-fan-out proofs, and the reconciliation reasons are authorship records. I have
not fabricated either. **This is exactly the "gate that passes vacuously" failure
mode — a twelve-row green table that omitted the two gates that were not green.**

---

## 9. Verdict

**Step 8 is complete and clean. The level is NOT yet ready for step 9, and the
remaining work is larger than my rejudge list.**

Three things must close first:

1. **Rejudge the three items in §7** — mine, expected, small.
2. **Fill the 14 `plan_reconciliation` drift reasons** in
   `research/frontier-12-audit-coverage.json` — pre-existing (§8).
3. **Produce the `spine-audit` receipt**, which this run has never had —
   pre-existing (§8), and the one with real mathematical content, since it is the
   independent read of the highest-fan-out proofs.

Items 2 and 3 are not step-8 work and I have not attempted them. I would have
reported "ready for step 9" on the strength of the twelve gates I did run; running
`level-coverage` instead of deferring it is what surfaced them.

Both lanes read every one of the 454 items against the frozen pair context and
returned 908 verdicts with no nulls. Of the 327 rejections, **three were real
publish-blocking defects and I repaired all three**; four were refutable from the
disk text and I quoted it; the remaining 317 rows are genuine but nonfatal
citation-precision and 30-second findings, closed without touching a byte, as R1
requires.

The finding I want on the record is not a count. **Two of the three fatal defects
were introduced by my own step-6 repairs**, and both were caught by two
independent judges in different model families constructing the same
counterexample — a rectangle, and the interval $(0,1)$. Step 6 fixed a real
problem in each case and overshot into a false claim while doing it. That is the
specific failure the paired-judge stage exists to catch, and it caught it.

No blocker. Nothing here needs an owner decision before step 9. The rejudge set is
the three ids in §7.

---

## 10. Continued at step 8b — and two corrections to §8 above

`research/frontier-12-alpha-step8b.md` carries the sequel. In summary:

- The rejudge of §7 passed both lanes on `cor-potentials-differ-by-a-componentwise-constant`
  and `lem-green-type-i-boundary-identity`. `lem-green-type-ii-boundary-identity`
  drew a DeepSeek rejection on citation fidelity — [L3] cited a vertical-graph
  Fubini theorem for a horizontal-graph region — **adjudicated `confirmed_fatal`
  (`dependency_citation`) and repaired**. The rejudge set is now that one item.
- **§8's `plan_reconciliation` count of 14 is wrong. It is 127.** I read a
  truncated tail of the gate's output and reported it as the whole set; the `--json`
  form gives the real figure. 126 remain open (one row, mine, is now filled).
- **§8's `spine-receipt-invalid` is closed.** `research/frontier-12-spine-audit.json`
  now exists and is valid against current disk.
- The impact receipt §8 left unwritten is `research/frontier-12-impact-audit.json`,
  validated against `--from pre-step8 --to after-alpha-step8b` — **not** the
  `after-alpha-step8` pair named above.
