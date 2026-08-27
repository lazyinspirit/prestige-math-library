# frontier-21 · Beta · batch notes — `pell-equations-and-generalized-pell-orbits` (steps 1-2)

Run `frontier-21`, batch `2`, one A/B pair, category `number-theory`.
Author: Beta. Session date: Thursday, August 27, 2026.
Design section: [research/plan-number-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-number-theory-track.md:834).

Artifacts owned by this batch:
`research/frontier-21-batch-2.pages.json`,
`research/frontier-21-batch-2.coverage.json`,
and this file.

---

## 1. Shape and split check

- `pell-equations-and-generalized-pell-orbits` (A): **17 items**.
- `pell-equations-and-generalized-pell-orbits-examples` (B): **9 items**.

The A page stays well below the 60-item ceiling, so no split is proposed.

High-level shape:

- The scaffold follows the design's explicit elementary-order route. It works in
  the coordinate ring `Z[sqrt(D)]`, proves the norm and group laws there by
  direct expansion, and does not identify that order with the later full ring of
  integers.
- The continued-fraction branch is specialized to `sqrt(D)`: first the
  normalized `P_n, Q_n` recurrence, then the convergent norm identity, then the
  symmetric period structure ending in `2a_0`, and only after that the
  existence and negative-Pell parity theorems.
- The generalized branch uses the fundamental solution only as an explicit
  norm-one generator for orbiting solutions. The finiteness theorem is stated
  with Conrad's explicit coefficient bounds, and the decidability corollary is
  a finite search consequence rather than a separate algorithmic theory.

---

## 2. Design-vs-spec drift that I did not settle

The dispatch says to record disagreements and follow `research/plan-spec.json`,
not the design, when they disagree.

### Finding 1 — page-level prerequisites disagree

The design block says NT-8 needs NT-7, the authored integer
arithmetic/congruence stack, and finite pigeonhole arguments.

`research/plan-spec.json` and the generated batch task instead give the page
only:

`["regular-continued-fractions-and-diophantine-approximation-examples"]`.

I kept the manifest page-level `requires` at the spec value, exactly as the
dispatch requires. The current drift review for run `frontier-21` already marks
this pair `no-drift` because that live prerequisite closure reaches the lower
foundation the design names.

No order drift was found: both design and spec place the A page at `78.5` and
the B page at `78.6`.

---

## 3. Source stack and support

Only the A page needs a harvest ledger; the B page is the non-citable
companion.

### Source list actually read

- Peter Hackman, *Elementary Number Theory*:
  `https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university`
- Keith Conrad, *Pell's Equation, I*:
  `https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn1.pdf`
- Keith Conrad, *Pell's Equation, II*:
  `https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn2.pdf`
- MIT 18.781, Lecture 21, *Brahmagupta-Pell Equation*:
  `https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/13cf7a5b5cc750bac32299824469a8d2_MIT18_781S12_lec21.pdf`

All four URLs above were opened successfully through the web reader on
Thursday, August 27, 2026. The remaining shell-side fetch-stamp question is a
runner-network issue, not a dead-link diagnosis on the recorded URLs.

### What these support in the scaffold

- Hackman is the primary textbook route for the `sqrt(D)` state recurrence, the
  convergent norm identity, the symmetric period theorem, the period-parity
  criterion, and the elementary warning that generalized-Pell multiplication is
  by explicit coordinate formulas rather than by later algebraic-number-theory
  abstractions.
- Conrad I is the clean independent source for the coordinate multiplication
  law, the group structure on Pell solutions, the power classification from the
  least positive solution, and the explicit `D=2,3,6` examples used on the B
  page.
- Conrad II is the independent source for the bounded-orbit theorem and the
  worked generalized-Pell families `x^2 - 6y^2 = 3` and `x^2 - 7y^2 = 57`.
- MIT Lecture 21 is the third proof check for the `sqrt(D)` period structure,
  the convergent norm identity, and the precise small-norm convergent criterion
  used only inline in the negative-Pell converse.

### Important conventions fixed from the sources

- `Z[sqrt(D)]` is treated as the explicit order of expressions `x + y sqrt(D)`;
  NT-8 does not call it the full ring of integers when `D ≡ 1 (mod 4)`.
- The normalized continued-fraction states always have `Q_n > 0`, and
  divisibility `Q_n | D - P_n^2` is maintained before the next quotient is
  formed.
- The negative-Pell converse is not stated as "every generalized-Pell solution
  is a convergent". The scaffold follows the design and uses the strict
  `1/(2q^2)` criterion only in the `N = -1` case.
- The orbit theorem uses a half-open logarithmic interval to choose the
  exponent, so the representative search is finite without any appeal to choice
  or to a later unit theorem.

---

## 4. Local scaffold choices and seams

- `def-norm-on-integer-square-root-order`, `lem-pell-norm-multiplication`, and
  `prop-integral-pell-solutions-form-a-group` are kept separate. The design
  explicitly wanted the ring identities proved in coordinates before any
  classification theorem is stated.
- `lem-square-root-continued-fraction-state-recurrence` is specialized to
  `sqrt(D)` rather than reusing the broader NT-7 finite-state lemma. That keeps
  the `P_n, Q_n` normalization and divisibility visible for the later symmetry
  proof.
- `thm-square-root-continued-fraction-period-structure`,
  `thm-lagrange-existence-for-pell-equation`, and
  `thm-negative-pell-period-parity-criterion` are three separate A-page items.
  Merging them would bury the exact boundary the design called out: odd period
  gives norm `-1`, even period gives norm `+1`, and the converse for negative
  Pell needs the strict NT-7 approximation theorem.
- The B page keeps the design's two seam warnings: not every generalized-Pell
  solution is a convergent, and the elementary Pell order should not be
  confused with the later maximal order.

One overlap is recorded explicitly rather than hidden:

- `cex-pell-units-need-not-be-all-quadratic-field-units` is design-mandated at
  NT-8, but the later NT-23 B page already plans the broader warning
  `cex-z-sqrt-d-units-need-not-equal-ok-units`. I kept the NT-8 item because
  the design allocates this seam here, but it is non-load-bearing and should be
  reconciled later rather than silently duplicated at authoring time.

---

## 5. Known limits and downstream caution

- This scaffold does not import the later unit theorem, the ring of integers of
  `Q(sqrt(D))`, or the narrow-class formalism. Those belong to the later
  algebraic-number-theory block.
- Conrad II's Lemma 2.1 was read and harvested, but it is left
  `out-of-scope`: the page uses the design's continued-fraction proof of
  Lagrange's theorem, not a second pigeonhole-based existence engine.
- Hackman's H.IV.1 congruence-class framework was also read and harvested but
  left `out-of-scope`. NT-8 uses the explicit Pell-equivalence relation by
  powers of `epsilon_D` instead of carrying two orbit formalisms on the same
  page.
- I did **not** create `research/frontier-21-batch-2.proof-contracts.json`.
  This dispatch is the step-1 scaffold/source-repair pass, not step-5 authoring.

---

## 6. Validator results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-21-batch-2.coverage.json`
  Result: **pass** — `1 page(s), 47 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs research/frontier-21-batch-*.pages.json --manifest-only`
  Result: **pass** — `235 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: **pass**. The output still prints the repository's standing
  `redundant-prereq` notes outside this batch, but it ends with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 432 page(s) with item lists.
  ```

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-2.coverage.json --stamp`
  Result: **blocked by runner DNS**, not by a bad harvested URL. Exact output:

  ```text
  ERROR fetch-check-dead: pell-equations-and-generalized-pell-orbits: https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university — EAI_AGAIN
  ERROR fetch-check-dead: pell-equations-and-generalized-pell-orbits: https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn1.pdf — EAI_AGAIN
  ERROR fetch-check-dead: pell-equations-and-generalized-pell-orbits: https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn2.pdf — EAI_AGAIN
  ERROR fetch-check-dead: pell-equations-and-generalized-pell-orbits: https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/13cf7a5b5cc750bac32299824469a8d2_MIT18_781S12_lec21.pdf — EAI_AGAIN
  source-fetch-check: 0/4 source(s) fetch-verified (0 newly stamped), 4 FAILED
  ```

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-2.coverage.json`
  Result: **expected failure after the stamp blocker**:

  ```text
  ERROR fetch-check-unstamped: pell-equations-and-generalized-pell-orbits: https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university
  ERROR fetch-check-unstamped: pell-equations-and-generalized-pell-orbits: https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn1.pdf
  ERROR fetch-check-unstamped: pell-equations-and-generalized-pell-orbits: https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn2.pdf
  ERROR fetch-check-unstamped: pell-equations-and-generalized-pell-orbits: https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/13cf7a5b5cc750bac32299824469a8d2_MIT18_781S12_lec21.pdf
  source-fetch-check: 0/4 source(s) fetch-verified, 4 FAILED
  ```

- `node tools/url-sweep.mjs --coverage research/frontier-21-batch-2.coverage.json --out /tmp/frontier-21-batch-2-url-liveness.json --recover --fail-on-dead`
  Result: **blocked by the same DNS failure**:

  ```text
  url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-21-batch-2-url-liveness.json
  FAIL 0 https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn1.pdf — curl: (6) Could not resolve host: kconrad.math.uconn.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://kconrad.math.uconn.edu/blurbs/ugradnumthy/pelleqn2.pdf — curl: (6) Could not resolve host: kconrad.math.uconn.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/13cf7a5b5cc750bac32299824469a8d2_MIT18_781S12_lec21.pdf — curl: (6) Could not resolve host: ocw.mit.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.yumpu.com/en/document/view/50680602/elementary-number-theory-linkaaping-university — curl: (6) Could not resolve host: www.yumpu.com
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

What was still verified on Thursday, August 27, 2026:

- All four recorded URLs opened successfully in the web reader, so this batch
  does not presently show a source-specific dead link.
- No `fetch_verified` object was fabricated.
- No alternate URL, archive snapshot, or re-sourcing was applied, because the
  failure is runner-wide DNS resolution rather than source-specific liveness.

## Step-3 fix pass

Worked from `research/frontier-21-alpha-b-step3-scaffold-review.md` and the
current scope receipt `research/frontier-21-alpha-b-scope-decisions.json`.

- `finding ids for batch 2` — `none issued`; disposition: **explicit pushback
  on further scaffold mutation in this pass**. Evidence: Alpha's batch-2 review
  marks `pell-equations-and-generalized-pell-orbits` `sufficient` and closes
  with "No batch-2 or batch-3 scaffold-content repair was required in this
  Alpha review pass." Changed scaffold record: no change to
  `research/frontier-21-batch-2.pages.json` or
  `research/frontier-21-batch-2.coverage.json`; this receipt is the only
  step-3 edit.
- `batch-2 scope decisions` — `stands already recorded`; no new step-3 finding
  id to apply. Evidence: the only live batch-2 decline rows remain Hackman
  `H.IV.1 Theorem` and Conrad II `Lemma 2.1`, both marked `stands` in
  `research/frontier-21-alpha-b-scope-decisions.json`, matching the current
  A-page route in `research/frontier-21-batch-2.pages.json`. Changed scaffold
  record: none.
- `notes stale source-state receipt` — `applied`; changed scaffold record:
  `research/frontier-21-batch-2.notes.md`. Evidence: on the current bytes,
  `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-2.coverage.json`
  now passes with `source-fetch-check: 4/4 source(s) fetch-verified`, so the
  earlier step-1 shell failure snapshot below is historical rather than the
  live scaffold state. The coverage file already carries `fetch_verified`
  objects for all four recorded sources, so no coverage rewrite was needed.
- `coverage-checklist` — pass on Thursday, August 27, 2026:
  `coverage-checklist: 1 page(s), 47 harvested result(s), 0 error(s), 0 warning(s)`.
- `content-policy --manifest-only research/frontier-21-batch-*.pages.json` —
  pass on Thursday, August 27, 2026:
  `content-policy: 433 scoped item(s), 0 error(s), 0 warning(s)`.
- `validate-plan research/plan-spec.json` — pass on Thursday, August 27, 2026.
  The validator still prints only the repository-wide `redundant-prereq`
  advisories outside this batch and ends with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 432 page(s) with item lists.
  ```

- `source-fetch-check --coverage research/frontier-21-batch-2.coverage.json`
  — pass on Thursday, August 27, 2026:
  `source-fetch-check: 4/4 source(s) fetch-verified`.
- `web verification of the recorded URLs` — all four source URLs opened
  successfully on Thursday, August 27, 2026. Read-back checks matched the
  current locators: Hackman Chapter H / `H.VI`, Conrad I §7 and Theorem 7.5,
  Conrad II §4 and Theorem 3.3, and MIT Lecture 21 Corollary 74 / Theorem 75.
  No alternate URL, archive substitution, or re-sourcing was applied.

## Step-5 authoring

Authored all 26 scoped item files for NT-8, the two draft page files
`library/number-theory/pell-equations-and-generalized-pell-orbits.md` and
`library/number-theory/pell-equations-and-generalized-pell-orbits-examples.md`,
and the new batch contract file
`research/frontier-21-batch-2.proof-contracts.json`.

### Authored ids

- A page: `def-pell-equation`, `def-generalized-and-negative-pell-equations`,
  `def-norm-on-integer-square-root-order`, `lem-pell-norm-multiplication`,
  `prop-integral-pell-solutions-form-a-group`,
  `lem-square-root-continued-fraction-state-recurrence`,
  `lem-square-root-convergent-norm-identity`,
  `thm-square-root-continued-fraction-period-structure`,
  `thm-lagrange-existence-for-pell-equation`,
  `thm-negative-pell-period-parity-criterion`,
  `def-fundamental-pell-solution`,
  `thm-all-positive-pell-solutions-are-fundamental-powers`,
  `cor-all-integral-pell-solutions`,
  `def-pell-equivalence-of-generalized-solutions`,
  `thm-generalized-pell-solutions-have-finitely-many-orbits`,
  `cor-generalized-pell-solubility-is-decidable`,
  `cor-one-generalized-pell-solution-gives-infinitely-many`.
- B page: `ex-pell-equation-for-two`, `ex-pell-equation-for-three`,
  `ex-negative-pell-equation-for-five`, `ex-pell-equation-for-fourteen`,
  `ex-large-fundamental-pell-solution-for-sixty-one`,
  `ex-generalized-pell-orbits-for-six`,
  `ex-generalized-pell-bounded-representatives`,
  `cex-generalized-pell-solutions-need-not-all-be-convergents`,
  `cex-pell-units-need-not-be-all-quadratic-field-units`.

### Provenance rationale

- The A-page definitions and theorem statements remain source-backed and were
  tagged `literature-derived` or `ai-altered` rather than `ai-generated`, so no
  load-bearing dependency targets now originate from generated statements.
- The two generated B-page items are the non-load-bearing direct-check leaves
  `ex-negative-pell-equation-for-five` and
  `cex-pell-units-need-not-be-all-quadratic-field-units`; both carry truthful
  `generation.role` fields (`example` and `counterexample`) and were verified by
  explicit finite algebra on the written witness.
- The remaining B-page items are source-routed examples or counterexamples whose
  statements were adapted to the library's exact dependency route and proof
  boundaries, so they were tagged `ai-altered`.

### Authoring deltas from the scaffold

- No id, kind, title, page membership, page prerequisite, or coverage
  disposition changed from the scaffold.
- No scaffold claim was dropped or narrowed.
- Three direct dependency lists were strengthened to match the proof actually
  written:
  `def-pell-equivalence-of-generalized-solutions` now names
  `def-generalized-and-negative-pell-equations` and
  `lem-pell-norm-multiplication`;
  `thm-generalized-pell-solutions-have-finitely-many-orbits` now names
  `def-fundamental-pell-solution`;
  `cor-one-generalized-pell-solution-gives-infinitely-many` now names
  `def-fundamental-pell-solution`.
- The continued-fraction period theorem was authored by an explicit finite
  reduced-state cycle argument in `\mathbb Z[\sqrt D]`; it does not import the
  later algebraic-number-theory unit theorem or maximal-order language.
- The generalized-orbit examples were closed by direct bounded searches:
  for `x^2-6y^2=3` the representative box collapses to `(\pm3,\pm1)`, and for
  `x^2-7y^2=57` the representative box collapses to `(\pm8,\pm1)` and
  `(\pm13,\pm4)`.

### Contract and direct-check record

- `research/frontier-21-batch-2.proof-contracts.json` now covers all 21
  proof-bearing items in the batch. Every cited `[F#]` source quote was synced
  to the final on-disk source text after the last precheck stratification
  repair.
- The direct-check arithmetic authored on Thursday, August 27, 2026 and written
  into the items is:
  `\sqrt2=[1;\overline2]`,
  `\sqrt3=[1;\overline{1,2}]`,
  `\sqrt5=[2;\overline4]`,
  `\sqrt{14}=[3;\overline{1,2,1,6}]`,
  `\sqrt{61}=[7;\overline{1,4,3,1,2,2,1,3,4,1,14}]`,
  the negative-Pell witness `29718+3805\sqrt{61}`,
  the fundamental unit `1766319049+226153980\sqrt{61}`,
  the orbit representatives for `D=6,N=3`, and the bounded representative list
  for `D=7,N=57`.

### Gates run on Thursday, August 27, 2026

- `node tools/tsx-run.mjs tools/precheck.mts` on all 26 batch items:
  21 checked, 0 failing; the 5 definitions correctly record
  `verification.precheck: n/a`.
- `node tools/content-policy.mjs research/frontier-21-batch-2.pages.json`:
  `content-policy: 26 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`:
  pass; the live output still prints only the standing repository-wide
  `redundant-prereq` advisories outside this batch and ends with `OK`.
- `node tools/proof-contract.mjs research/frontier-21-batch-2.proof-contracts.json --strict`:
  `0 error(s), 0 warning(s), 21/21 item(s) checked`.
- Extra checks actually run:
  `node tools/boundary-audit.mjs research/frontier-21-batch-2.proof-contracts.json --items-dir items`
  passed with no template cluster at or above three and no contradicted
  dispositions;
  `node tools/citecheck.mjs` on the 21 proof-bearing batch items passed;
  `node tools/coverage-checklist.mjs research/frontier-21-batch-2.coverage.json --require-destination`
  passed; `git diff --check` passed.

### Blockers

- No batch-2 authoring blocker remains on the current bytes.
- No judge stamp, audited verification field, plan splice, workflow state file,
  or published content was edited in this pass.
