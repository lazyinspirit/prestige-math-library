# frontier-22 · Beta · batch notes — `associated-primes-and-primary-decomposition` (steps 1-2)

Run `frontier-22`, batch `2`, one A/B pair, category `commutative-algebra`.
Author: Beta. Session date: Friday, August 28, 2026.
Design sections: [research/plan-commutative-algebra-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-commutative-algebra-track.md:522) and [research/plan-commutative-algebra-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-commutative-algebra-track.md:3241).

Artifacts owned by this batch:
`research/frontier-22-batch-2.pages.json`,
`research/frontier-22-batch-2.coverage.json`,
and this file.

---

## 1. Shape and split check

- `associated-primes-and-primary-decomposition` (A): **39 items**.
- `associated-primes-and-primary-decomposition-examples` (B): **6 items**.

The A page stays below the 60-item ceiling, so no split is proposed.

High-level shape:

- The later CA-5 amendment at line 3241 controls the scaffold shape. It gives the finer proof decomposition, explicit provenance route, and the exact seam warnings for primaryity, localisation, and uniqueness. I kept the earlier CA-5 summary at line 522 only for its reader-facing theorem landmarks.
- I added `thm-prime-filtration-of-a-finite-module` even though the line-3241 overlay does not name it directly. The earlier CA pages already deferred that theorem into this page, and it is the cleanest internal bridge to finiteness of `Ass(M)` and the minimal-support theorem.
- The primary-submodule definition follows the design warning exactly: the page defines primaryity by nilpotent zero divisors on `M/Q` first, then proves equivalence with Altman-Kleiman's singleton-associated-prime definition only in the finite Noetherian setting.
- The uniqueness branch is staged as: radicals from a minimal decomposition, isolated-component recovery by localisation and contraction, then the downward-closed canonical-intersection theorem using finite prime avoidance.

---

## 2. Design-vs-spec drift that I did not settle

The dispatch says to record disagreements and follow `research/plan-spec.json`,
not the design, when they disagree.

### Finding 1 — page-level prerequisites disagree

Both design sections describe CA-5 as requiring the whole CA-1 through CA-4
stack, especially localisation, support, radicals, and minimal-prime finiteness.

`research/plan-spec.json` and the generated batch task instead give the page
only:

`["artinian-rings-and-length-examples"]`.

I kept the manifest page-level `requires` at the spec value, exactly as the
dispatch requires. The run's drift note already records this page as
`no-drift`, because the declared closure through
`artinian-rings-and-length-examples` already reaches:

- `noetherian-rings-and-hilbert-basis`
- `localisation-of-modules-and-support`
- `prime-spectra-and-radicals`
- `artinian-rings-and-length`

No order drift was found: both design and spec place the A page at `111.009`
and the B page at `111.01`.

### Finding 2 — the two design locations differ in granularity, not destination

The line-522 CA-5 block gives the page as a sequence of major definitions and
theorems. The later line-3241 CA-5 additions refine those into smaller proof
steps and examples.

I treated the later amendment as controlling because it is later in the design
document and it resolves precisely the traps that matter for authoring:

- do not define primaryity first by singleton `Ass(M/Q)` without recording the
  finite-Noetherian equivalence boundary;
- do write the Lasker-Noether intersection equality explicitly in the proof;
- do not overclaim uniqueness of embedded components;
- do derive isolated uniqueness by localisation/contraction.

The actual scaffold preserves the earlier theorem landmarks while taking the
later proof decomposition as the implementation route.

---

## 3. Source stack and support

Only the A page needs a harvest ledger; the B page is the non-citable
companion.

### Source list actually read

- Allen B. Altman and Steven L. Kleiman, *A Term of Commutative Algebra*:
  `https://web.mit.edu/18.705/www/13Ed.pdf`
- J. S. Milne, *A Primer of Commutative Algebra*:
  `https://www.jmilne.org/math/xnotes/CA.pdf`
- The Stacks project, Chapter 10 and Sections 10.62-10.64:
  `https://stacks.math.columbia.edu/tag/00AO`
  `https://stacks.math.columbia.edu/tag/00KY`
  `https://stacks.math.columbia.edu/tag/00L9`
  `https://stacks.math.columbia.edu/tag/05G9`

All six URLs above opened successfully through the web reader on Friday,
August 28, 2026.

### What these support in the scaffold

- Altman-Kleiman is the primary textbook route for the associated-prime
  definition, exact-sequence behavior, localisation, prime filtrations,
  singleton-`Ass` primaryity, minimal decomposition, Lasker-Noether, and both
  uniqueness theorems.
- Milne is the independent secondary route that fixes the page's old-primary
  convention first, proves radicals of primary ideals are prime, gives the
  intersection and irreducibility lemmas, and re-derives Lasker-Noether and
  first uniqueness in module language.
- Stacks is the independent reference check for the associated-prime side:
  support containment, short exact sequences, prime filtrations, finiteness,
  minimal support primes, and zero divisors. I also read the symbolic-power
  section the design named as an independent check and left it explicitly
  `out-of-scope`.

### Important conventions fixed from the sources

- `def-primary-submodule-and-primary-ideal` uses the quotient zero-divisor
  definition first. Altman-Kleiman's singleton-`Ass(M/Q)` definition appears
  only as a later equivalent characterization.
- Minimal decompositions are not stated componentwise unique. The unique data
  are the radicals, the isolated components, and then the canonical
  intersections attached to downward-closed sets of associated primes.
- The second uniqueness theorem is not reduced to only the minimal associated
  primes. The scaffold keeps the stronger downward-closed formulation, with
  finite prime avoidance supplying the multiplicative set.

---

## 4. Local scaffold choices and seams

- `lem-associated-prime-equivalent-cyclic-embedding` is kept separate from the
  definition. This is the hinge that makes exact-sequence and localisation
  arguments short and source-faithful.
- `thm-prime-filtration-of-a-finite-module` is an explicit A-page item rather
  than a hidden proof move. Earlier CA scaffolding already deferred this theorem
  here, and it prevents `thm-finiteness-of-associated-primes` from depending on
  an unscaffolded filtration.
- `lem-intersection-of-primary-submodules-with-same-radical`,
  `lem-primary-decomposition-delete-redundant-components`, and
  `lem-primary-decomposition-combine-equal-radicals` are all retained. The
  design forbids padding, but these are genuine proof obligations for passing
  from existence to minimal decomposition honestly.
- The B page examples are chosen to expose the two main seams the design cares
  about: localisation really isolates components, and embedded components really
  can vary even though the associated-prime set does not.

---

## 5. Known limits and downstream caution

- I did not scaffold a separate local-depth-zero corollary from the line-3241
  overlay. It is mathematically correct, but it is not needed for the actual
  proof closure of this page.
- I read the Stacks symbolic-power section because the design named it, but I
  left it `out-of-scope`. Adding symbolic powers here would turn the page into
  an applications page instead of the primary-decomposition core the design
  specified.
- The page uses the finite prime-avoidance lemma only for the second uniqueness
  theorem. It does not branch into the broader depth or regular-sequence
  development that later pages own.
- I did **not** create `research/frontier-22-batch-2.proof-contracts.json`.
  This dispatch is the scaffold/source-repair pass, not step 5 authoring.

---

## 6. Validator results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-22-batch-2.coverage.json`
  Result: **pass** — `1 page(s), 64 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs research/frontier-22-batch-*.pages.json --manifest-only`
  Result: **pass** — `166 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: **pass**. The output still prints the repository's standing
  `redundant-prereq` notes outside this batch, but it ends with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 460 page(s) with item lists.
  ```

- `node tools/url-sweep.mjs --coverage research/frontier-22-batch-2.coverage.json --out /tmp/frontier-22-batch-2-url-liveness.json --recover --fail-on-dead`
  Result: **blocked by runner DNS**, not by a web-reader failure on the recorded
  URLs. Exact output:

  ```text
  url-sweep: 0/6 live; 6 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-22-batch-2-url-liveness.json
  FAIL 0 https://stacks.math.columbia.edu/tag/00AO — curl: (6) Could not resolve host: stacks.math.columbia.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://stacks.math.columbia.edu/tag/00KY — curl: (6) Could not resolve host: stacks.math.columbia.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://stacks.math.columbia.edu/tag/00L9 — curl: (6) Could not resolve host: stacks.math.columbia.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://stacks.math.columbia.edu/tag/05G9 — curl: (6) Could not resolve host: stacks.math.columbia.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://web.mit.edu/18.705/www/13Ed.pdf — curl: (6) Could not resolve host: web.mit.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.jmilne.org/math/xnotes/CA.pdf — curl: (6) Could not resolve host: www.jmilne.org
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

What was still verified on Friday, August 28, 2026:

- All six recorded URLs opened successfully in the web reader, so this batch
  does not presently show a source-specific dead link.

## Step-3 fix pass

Reviewing Alpha: group `b`, report
`research/frontier-22-alpha-b-step3-scaffold-review.md`.

The review gives five stable batch-2 finding ids through
`research/frontier-22-alpha-b-scope-decisions.json`. Its one manifest repair is
described in the report's `## Local repair` section without a separate numeric
id, so I preserve that review title verbatim rather than inventing one.

### `Local repair` — applied and preserved

- Disposition: **applied**. The repair Alpha described in
  `research/frontier-22-alpha-b-step3-scaffold-review.md` is already present in
  `research/frontier-22-batch-2.pages.json`, and I preserved it unchanged.
- Evidence: the current manifest no longer cites the published ideal-only
  `thm-noetherian-induction`. Instead:
  `thm-prime-filtration-of-a-finite-module` and
  `thm-lasker-noether-primary-decomposition` now use the published module route
  through `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian`
  and `thm-equivalent-characterizations-of-noetherian-modules`;
  `lem-irreducible-submodule-is-primary-noetherian` now depends on
  `lem-primary-submodule-zero-divisor-characterisation`; and
  `thm-second-uniqueness-theorem-primary-decomposition` now depends on
  `lem-associated-primes-from-a-minimal-primary-decomposition`. That routing is
  the one supported by the sources I re-read on Friday, August 28, 2026:
  Stacks Lemma 10.62.1 gives prime filtrations by a module filtration,
  Altman-Kleiman Theorem (18.21) proves Lasker-Noether in module language, and
  Milne Proposition 19.16 plus Theorem 19.11 provide the primary-submodule and
  decomposition route the repaired manifest now cites.
- Changed scaffold record: `research/frontier-22-batch-2.pages.json` records
  the repaired dependency lists for
  `thm-prime-filtration-of-a-finite-module`,
  `lem-irreducible-submodule-is-primary-noetherian`,
  `thm-lasker-noether-primary-decomposition`, and
  `thm-second-uniqueness-theorem-primary-decomposition`.

### `ddccb25d99ee6fca029fa73997e345b21bcfeac6e77c4c6dbb53024ef1066bc8` — pushback stands

- Disposition: **pushback / stands**.
- Evidence: this id is Milne `Proposition 19.4`. The live scaffold transports
  primaryity through `lem-localisation-of-a-primary-submodule` and
  `lem-contraction-recovers-primary-component-after-localising-away-from-radical`;
  it does not use the ideal-only contraction theorem under an arbitrary ring
  map. Re-reading Milne §19 confirms Proposition 19.4 is an alternate
  ideal-transport route, not a missing bridge in the current CA-5 proof path.
- Changed scaffold record: `research/frontier-22-batch-2.coverage.json`
  unchanged; the row remains `out-of-scope` with its recorded reason.

### `5953550dc3656169660d16df954f47d01d26fb38d5be061e6bff7545fabd4292` — pushback stands

- Disposition: **pushback / stands**.
- Evidence: this id is the chapter-contents row `Section 10.64: Symbolic
  powers` from Stacks tag `00AO`. The current A-page route still ends at
  associated primes, primary decomposition, isolated uniqueness, second
  uniqueness, and the radical-ideal corollary. `research/plan-spec.json`
  continues immediately to `integral-extensions-and-going-up`, not to symbolic
  powers, so the section remains an independent-check branch rather than
  present-page scope.
- Changed scaffold record: `research/frontier-22-batch-2.coverage.json`
  unchanged; the row remains `out-of-scope`.

### `22002511592bac9073d37a209927c7be9c30a15888bc24edb7f21f7767d2d854` — pushback stands

- Disposition: **pushback / stands**.
- Evidence: this id is Stacks `Definition 10.64.1`. Re-reading tag `05G9`
  confirms it is only the symbolic-power definition. No batch-2 item presently
  invokes symbolic powers, and adding them would create an applications branch
  outside the design's core primary-decomposition route.
- Changed scaffold record: `research/frontier-22-batch-2.coverage.json`
  unchanged; the row remains `out-of-scope`.

### `e9b11ea68d7c22b1ade2d8acb68927181766c7ada78d3c8e86800ffe760ecb90` — pushback stands

- Disposition: **pushback / stands**.
- Evidence: this id is Stacks `Lemma 10.64.2`, the first symbolic-power
  application asserting `Ass(R/\mathfrak p^{(n)}) = {\mathfrak p}`. The current
  CA-5 manifest never cites symbolic powers; it stops at the associated-prime
  and primary-decomposition core needed for Step 5 authoring.
- Changed scaffold record: `research/frontier-22-batch-2.coverage.json`
  unchanged; the row remains `out-of-scope`.

### `0c6b1bcf7a175549bbb743218e6d246f274521366678017df0cde7a8696e6e46` — pushback stands

- Disposition: **pushback / stands**.
- Evidence: this id is Stacks `Lemma 10.64.3`, the flat-base-change theorem for
  symbolic powers. Re-reading tag `05G9` confirms it belongs even further
  downstream than the definition and first application, and no current batch-2
  item or immediate successor page in `research/plan-spec.json` requires it.
- Changed scaffold record: `research/frontier-22-batch-2.coverage.json`
  unchanged; the row remains `out-of-scope`.

### Step-3 gate rerun

- `node tools/coverage-checklist.mjs --require-destination research/frontier-22-batch-2.coverage.json`
  Result on Friday, August 28, 2026: **pass** —
  `coverage-checklist: 1 page(s), 64 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs research/frontier-22-batch-*.pages.json --manifest-only`
  Result on Friday, August 28, 2026: **pass** —
  `content-policy: 425 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  Result on Friday, August 28, 2026: **pass**. The output still contains the
  repository's standing `redundant-prereq` advisories outside this batch, and
  ends with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 460 page(s) with item lists.
  NOTE: 741 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-2.coverage.json`
  Result on Friday, August 28, 2026: **pass** —
  `source-fetch-check: 6/6 source(s) fetch-verified`.

## Step-5 authoring

Authored scope on Friday, August 28, 2026:

- A-page items:
  `def-associated-prime-of-a-module`,
  `lem-annihilator-of-a-cyclic-submodule`,
  `lem-associated-prime-equivalent-cyclic-embedding`,
  `cor-associated-primes-of-a-cyclic-module-are-primes-of-element-annihilators-modulo-ideal`,
  `lem-noetherian-ring-maximal-element-annihilator-exists`,
  `lem-maximal-element-annihilator-primality-step`,
  `thm-existence-of-associated-primes`,
  `cor-associated-primes-empty-iff-module-zero-noetherian`,
  `lem-associated-primes-exact-sequence-left-inclusion`,
  `lem-associated-primes-exact-sequence-right-bound`,
  `thm-associated-primes-in-a-short-exact-sequence`,
  `lem-associated-prime-localises-forward`,
  `lem-associated-prime-localises-reverse-finite`,
  `thm-associated-primes-localise`,
  `lem-associated-primes-contained-in-support`,
  `thm-prime-filtration-of-a-finite-module`,
  `thm-minimal-support-primes-are-associated`,
  `cor-support-is-union-of-closures-of-associated-primes`,
  `thm-finiteness-of-associated-primes`,
  `lem-zero-divisor-annihilator-contained-in-associated-prime`,
  `thm-zero-divisors-on-a-module`,
  `def-primary-submodule-and-primary-ideal`,
  `thm-radical-of-a-primary-ideal-is-prime`,
  `lem-primary-submodule-zero-divisor-characterisation`,
  `thm-primary-submodule-characterisations`,
  `lem-intersection-of-primary-submodules-with-same-radical`,
  `def-primary-decomposition-minimal-and-isolated-components`,
  `lem-irreducible-submodule-is-primary-noetherian`,
  `lem-primary-decomposition-delete-redundant-components`,
  `lem-primary-decomposition-combine-equal-radicals`,
  `thm-lasker-noether-primary-decomposition`,
  `lem-associated-primes-from-a-minimal-primary-decomposition`,
  `thm-first-uniqueness-theorem-primary-decomposition`,
  `lem-localisation-of-a-primary-submodule`,
  `lem-contraction-recovers-primary-component-after-localising-away-from-radical`,
  `thm-isolated-primary-components-are-unique`,
  `lem-finite-prime-avoidance`,
  `thm-second-uniqueness-theorem-primary-decomposition`,
  `cor-radical-ideals-as-intersections-of-minimal-primes-noetherian`.

- B-page items:
  `ex-annihilator-colon-ideals-in-a-cyclic-module`,
  `ex-primary-maximal-radical-test`,
  `ex-primary-localisation-kills-a-component`,
  `ex-redundant-primary-component-deletion`,
  `ex-embedded-component-varies-but-radical-does-not`,
  `ex-zero-module-associated-prime-boundary`.

- Page files:
  `library/commutative-algebra/associated-primes-and-primary-decomposition.md`
  and
  `library/commutative-algebra/associated-primes-and-primary-decomposition-examples.md`.

- Proof-contract report:
  `research/frontier-22-batch-2.proof-contracts.json`.

Provenance rationale:

- The A-page theorem/lemma/corollary statements remain literature-derived and
  source-backed by the Altman-Kleiman, Milne, and Stacks sections already
  harvested in this batch.
- The only generated statements are the three page-local B-page exercises
  `ex-primary-maximal-radical-test`,
  `ex-redundant-primary-component-deletion`, and
  `ex-zero-module-associated-prime-boundary`; each now carries
  `generation.role: example`.
- The page keeps the later design convention exactly where it mattered:
  primaryity is defined first through nilpotent zero divisors on the quotient
  module, and the singleton-associated-prime characterization appears only as a
  later finite-Noetherian theorem.

Authoring repairs and exact scope decisions:

- No claim was narrowed or dropped.
- No recorded-not-proved fallback, forward reference, or extra batch item was
  introduced.
- I adopted the canonical Step-5 precheck repair after authoring: every
  proof-bearing item was rewritten into the stored phase-stratified numbering
  that the live precheck computes, rather than leaving a proof that only passes
  after auto-repair.
- One scoped content-policy repair was needed: in
  `lem-associated-prime-equivalent-cyclic-embedding`, an applied `\iota`
  notation for an embedding map was renamed to `j`.

Checks actually run after authoring:

- `node tools/tsx-run.mjs tools/precheck.mts $(...)`
  Result: `42 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-22-batch-2.pages.json`
  Result after the `\iota` repair:
  `content-policy: 45 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: **pass**. The repository-wide `redundant-prereq` advisories still
  print outside this batch, but the command ends
  `OK — declared page order is acyclic and consistent...`.
- Additional local contract check:
  `node tools/proof-contract.mjs research/frontier-22-batch-2.proof-contracts.json --strict`
  Result:
  `proof-contract: 0 error(s), 0 warning(s), 42/42 item(s) checked`.

Blockers:

- None remained in this batch after the scoped content-policy repair and the
  canonical precheck repair.
