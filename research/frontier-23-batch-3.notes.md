# frontier-23 · Beta · batch notes — `integral-extensions-and-going-up` (steps 1-2)

Run `frontier-23`, batch `3`, one A/B pair, category `commutative-algebra`.
Author: Beta. Session date: Friday, August 28, 2026.
Design sections: [research/plan-commutative-algebra-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-commutative-algebra-track.md:598) and [research/plan-commutative-algebra-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-commutative-algebra-track.md:3282).

Artifacts owned by this batch:
[research/frontier-23-batch-3.pages.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-23-batch-3.pages.json),
[research/frontier-23-batch-3.coverage.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-23-batch-3.coverage.json),
and this file.

---

## 1. Shape and split check

- `integral-extensions-and-going-up` (A): **17 items**.
- `integral-extensions-and-going-up-examples` (B): **6 items**.

The A page stays well below the 60-item ceiling, so no split is proposed.

High-level shape:

- The opening block fixes the page's vocabulary without re-minting already published one-element integrality results: integral ring maps, integral closure, transitivity, and localisation.
- The middle block is the Cohen-Seidenberg spine: the field criterion, maximal-ideal contraction, lying over, incomparability, going up, and the finite-chain / dimension consequences that the line-3282 overlay makes explicit.
- The closing A-page block is the normality and going-down route: the minimal-polynomial coefficient lemma, locality of normality, going down over integrally closed domains, and the finite-height corollary.
- The B page is kept concrete and cheap: one explicit quadratic integral-equation example, one finite-module closure computation, one denominator-clearing localisation example, one lying-over computation, one incomparability computation, and one explicit counterexample showing that dropping normality can break going down.

---

## 2. Design-vs-spec drift that I did not settle

The dispatch requires me to record disagreements and follow
`research/plan-spec.json`, not adjudicate them inside the batch.

### Finding 1 — page-level prerequisites disagree

The line-598 CA-6 brief says this page requires the earlier commutative-algebra
stack plus the abstract-algebra integral-element, determinant-trick, integral
subring, and field-of-fractions material.

The generated task and the live spec instead give the page only:

`["associated-primes-and-primary-decomposition-examples"]`.

I kept the manifest page-level `requires` at the spec value, exactly as the
dispatch requires.

The item graph itself still uses already-published results homed on:

- `the-field-of-fractions-and-localisation`
- `chain-conditions-and-semisimple-modules`
- `field-extensions-and-the-complex-numbers`
- `splitting-fields`

That is likely step-4 edge-adjudication work, not something to settle by
silently rewriting this batch's page-level prerequisite.

### Finding 2 — the design locations differ in naming and granularity

The line-598 brief uses the current page id and title
`integral-extensions-and-going-up` and lists the reader-facing theorem
landmarks.

The later line-3282 overlay still heads the additions block
`integral-extensions-and-going-up-down` and refines the page into smaller proof
steps and examples.

I treated the later overlay as controlling the scaffold granularity, but kept
the spec's page id, title, companion id, and orders.

No competing numerical order is written in the design prose itself, so the
manifest keeps the spec orders `111.011` and `111.012` without a second drift
finding.

---

## 3. Source stack and URL discipline

Formal harvest sources:

1. Allen B. Altman and Steven L. Kleiman, *A Term of Commutative Algebra*:
   `https://web.mit.edu/18.705/www/13Ed.pdf`
2. J. S. Milne, *A Primer of Commutative Algebra*:
   `https://www.jmilne.org/math/xnotes/CA.pdf`
3. Melvin Hochster, *Introduction to Commutative Algebra*:
   `http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf`
   with `original_url`
   `https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf`

On Saturday, August 29, 2026, the exact Altman and Milne URLs and Hochster's
live original URL all opened successfully through the web reader.

Exact-URL stamp reuse:

- Altman-Kleiman: reused the exact fetch stamp already present for the same URL
  in `research/frontier-22-batch-2.coverage.json`:
  `1459195` bytes, SHA-256 prefix `d3273e492ae9f1fd`.
- Milne: reused the exact fetch stamp already present for the same URL in
  `research/frontier-22-batch-2.coverage.json`:
  `969570` bytes, SHA-256 prefix `1839ca7a488ab05c`.
- Hochster: reused the exact fetch stamp already present for the same archived
  URL in `research/frontier-18-batch-4.coverage.json`:
  `1179408` bytes, SHA-256 prefix `715f7df9b507b9d6`.

The recorded H20 source URL is the archived snapshot because this runner
returned `EAI_AGAIN` when I tried to stamp a fresh H20 fetch during the fix
pass. Keeping the exact archived URL with its existing fetch stamp, and the
live URL as `original_url` provenance, avoids inventing new network state while
still grounding the repair in text I opened on Saturday, August 29, 2026.

What the sources support:

- Altman-Kleiman is the primary textbook route for the extension-level
  definitions, transitivity, integral closure, the field criterion, the
  Krull-Cohen-Seidenberg theorems, the coefficient lemma, and the cusp-ring
  background that still feeds the lying-over example.
- Milne is the independent lecture-note route for the same spine, and it
  independently supplies the local-normality theorem and the chain-lifting
  corollaries in the exact forms the page needs.
- Hochster supplies the missing domain counterexample
  `R = K[x(1 - x), y, xy] subset K[x, y]`, proving that the normality
  hypothesis in going down is load-bearing even when both rings are domains and
  the upper ring is the integral closure of the lower one.

---

## 4. Local scaffold choices

- I did **not** duplicate the already-published one-element integrality theorem
  `thm-integrality-and-finite-module-equivalences`, the already-published
  finite-generator lemma
  `lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite`,
  or the already-published subring result
  `cor-integral-elements-form-a-subring`. The new A page starts where those
  published prerequisites stop.

- I kept `cor-integral-extension-lifts-finite-prime-chains` and
  `lem-integral-extension-chain-contraction-is-strict` as separate A-page items.
  The line-3282 overlay makes both explicit, and the dimension corollary
  genuinely uses them rather than merely naming going up and incomparability in
  prose.

- I kept `lem-integrally-closed-minimal-polynomial-coefficients` as its own A
  item. Both Altman `(14.8)` and Milne `6.11` isolate it, and the going-down
  proof really does need that intermediate result rather than only a vague
  appeal to "normality".

- The step-3 fix pass replaces `ex-integral-closure-of-a-cusp-ring` with
  `ex-going-down-needs-normality`. Alpha was right about the missing role: the
  live CA-6 B page needs an explicit failure witness showing that the normality
  hypothesis in going down is not decorative.

- I am pushing back only on the cusp-specific phrasing of the later overlay
  id. The one-dimensional cusp normalization `k[t^2, t^3] subset k[t]` does
  not itself exhibit a failure of going down; the chain `(0) subset
  (t^2, t^3)` still lifts to `(0) subset (t)`. The repaired scaffold therefore
  keeps the earlier accurate id `ex-going-down-needs-normality` and uses
  Hochster's verified domain counterexample rather than a misleading
  cusp-specific title.

---

## 5. Known limits and downstream caution

- This scaffold is mathematically dependency-closed against already-published
  items, but it is **not** page-closure-clean against the spec's single declared
  prerequisite. Alpha should expect step-4 edge work on the abstract-algebra and
  splitting-field pages named above.

- Fresh H20 stamping from this runner is still blocked. On Saturday,
  August 29, 2026, both
  `node tools/source-fetch-check.mjs --coverage /tmp/frontier23-h20-live-test.json --stamp`
  and the archived-URL analogue returned `EAI_AGAIN`. Because the exact
  archived H20 URL already carried a durable fetch stamp elsewhere on disk, I
  reused that exact record and kept the live H20 URL as provenance after
  re-reading the live PDF through the web reader.

- I did **not** create
  `research/frontier-23-batch-3.proof-contracts.json`. This dispatch is the
  scaffold-and-source pass, not step-5 authoring.

---

## 6. Validator results

- `node -e "JSON.parse(...pages...); JSON.parse(...coverage...);"`
  Result: **pass** — `json-ok`.

- `node tools/coverage-checklist.mjs research/frontier-23-batch-3.coverage.json --require-destination`
  Result: **pass** — `coverage-checklist: 1 page(s), 59 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs research/frontier-23-batch-*.pages.json --manifest-only`
  Result: **pass** — `content-policy: 500 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: **pass with run-wide warnings only**. The validator ended with:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 484 page(s) with item lists.
  ```

  The printed warnings are the repository's standing run-wide
  `redundant-prereq` notices on other pages, not a batch-3-specific defect.

- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-3.coverage.json`
  Result: **pass** — `source-fetch-check: 3/3 source(s) fetch-verified`.

What is currently verified on Saturday, August 29, 2026:

- Altman and Milne's exact recorded URLs opened through the web reader and
  still match their reused exact-byte fetch stamps.
- Hochster's live original URL opened through the web reader, while the
  recorded archived exact URL already had a matching durable fetch stamp on
  disk and is now accepted by `source-fetch-check` as part of this batch's
  coverage record.

---

## Step-3 fix pass

- `A3-1` — **applied in substance; pushed back on the cusp-specific wording**.
  Evidence: the live CA-6 overlay at
  [plan-commutative-algebra-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-commutative-algebra-track.md:3318)
  still requires a going-down failure witness, and Hochster Chapter 3, Lecture
  of September 30, printed pp. 53-54 / PDF pp. 53-54 gives one with
  `R = K[x(1 - x), y, xy] subset K[x, y]`. The source proves that `Q = (1 - x,
  y)S` lies over `P = (x(1 - x), y, xy)R`, while no prime `Q0 subset Q` lies
  over `P0 = (x(1 - x), xy)R`. The pushback is that the bare cusp normalization
  `k[t^2, t^3] subset k[t]` does not itself fail going down, so I used the
  earlier accurate id `ex-going-down-needs-normality` instead of a cusp-named
  one.
  Changed scaffold record: `research/frontier-23-batch-3.pages.json` replaced
  `ex-integral-closure-of-a-cusp-ring` with `ex-going-down-needs-normality`;
  `research/frontier-23-batch-3.coverage.json` demoted Altman `Example
  (10.34)(4)` to `out-of-scope`, added the H20 source row for
  `ex-going-down-needs-normality`, and preserved the live H20 URL as
  `original_url`; this notes file was rewritten to match the repaired scaffold
  and source state.
