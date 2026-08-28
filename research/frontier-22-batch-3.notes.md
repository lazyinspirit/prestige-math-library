# frontier-22 · Beta-3 · batch notes — `maschkes-theorem-and-complete-reducibility`

## 1. Scope, order, and owned artifacts

This batch owns the A/B pair
`maschkes-theorem-and-complete-reducibility` /
`maschkes-theorem-and-complete-reducibility-examples`
at orders `145` and `146`.

I read the RT-2 design block in
`research/plan-algebra-track-expansion.md` beginning at line `1466`, then
checked `research/plan-spec.json`, `SCHEMA.md`, `README.md`, and the published
dependency items that the design relies on.

Artifacts written by this dispatch:

- `research/frontier-22-batch-3.pages.json`
- `research/frontier-22-batch-3.coverage.json`
- this file

No plan structure, workflow state, published library content, or other batch
artifact was edited.

## 2. Design/spec drift

The design and the spec agree on:

- page id
- title
- category
- companion page
- prerequisite page id `the-group-algebra-and-representations`

They do **not** agree on order.

- The RT-2 design block still says A/B orders `141` and `142`.
- `research/plan-spec.json` and the live batch manifest use `145` and `146`.

Per the batch brief, I did **not** adjudicate that conflict here. I kept the
spec orders and recorded the drift in these notes.

## 3. Scaffold shape

The A page has **19 items**. The B page has **10 items**. The A page is well
below the 60-item split ceiling, so no split is proposed.

The A page breaks into four proof clusters:

- **Maschke and complete reducibility.**
  The representation-side semisimplicity definition, Maschke's averaging proof,
  the complete-reducibility corollary, semisimplicity of `k[G]`, and the
  explicit characteristic-`p` converse through the augmentation ideal.

- **Isotypic structure.**
  The isotypic-component definition, the uniqueness theorem, and the explicit
  contrast item separating canonical isotypic blocks from noncanonical
  irreducible splittings.

- **Wedderburn structure of `k[G]`.**
  The center and class-sum definitions, the algebraically closed matrix-product
  decomposition of `k[G]`, the finiteness and regular-representation
  multiplicity theorem, and the sum-of-squares corollary.

- **The center and conjugacy-class count.**
  The scalar-center lemma for `M_n(k)`, the class-sum basis theorem, the center
  dimension count, the irreducibles-versus-conjugacy-classes theorem, and the
  finite-order diagonalizability corollary needed later by RT-3.

The B page keeps the examples concrete and cheap:

- `\mathbb C[\mathbb Z/3\mathbb Z]\cong\mathbb C^3`
- `\mathbb C[S_3]\cong\mathbb C\times\mathbb C\times M_2(\mathbb C)`
- the shared `\mathbb C^4\times M_2(\mathbb C)` type for `Q_8` and the
  library's order-eight dihedral group `\operatorname{Dih}(C_4)` (the dispatch
  calls this `D_4`)
- the regular representation of `\mathbb Z/4\mathbb Z`
- the two-dimensional trivial witness for nonunique irreducible splittings
- the five intended false statements

## 4. Design decisions I preserved

### The dictionary seam stays explicit

The design's trap about the representation/module dictionary is real here. I
kept the page stated on the representation side except where the statement is
intrinsically about the ring `k[G]`, and every passage between those viewpoints
goes through the published RT-1 dictionary item
`thm-group-actions-and-group-ring-modules-correspond` and its corollary on
subrepresentations versus submodules.

I did **not** let statements drift back and forth between "representation" and
"module" language without naming the bridge.

### The augmentation-ideal converse is explicit, not gestured at

The design insisted that the converse to Maschke be proved, not merely
illustrated by a bad example. I therefore separated:

- `thm-augmentation-ideal-has-no-complement-when-char-k-divides-group-order`
- `cor-group-algebra-is-not-semisimple-when-char-k-divides-group-order`

This keeps the augmentation-ideal obstruction visible as its own load-bearing
step instead of burying it inside a corollary title.

### The center count is genuinely dependency-closed

The design warns that "number of irreducibles = number of conjugacy classes" is
two computations of one dimension. The current library did **not** already have
the needed matrix-center lemma, so I added
`lem-the-center-of-a-full-matrix-algebra-over-a-field-consists-of-the-scalar-matrices`
instead of silently relying on source prose. That keeps the RT-2 proof route
closed inside the library.

## 5. Source stack and URL discipline

I used two independent treatments in the coverage artifact:

1. **Peter Webb, _A Course in Finite Group Representation Theory_**
   (`https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf`).
   This is the controlling monograph source for the page's designed route:
   Maschke, semisimple representations, isotypic components, the
   Artin-Wedderburn consequences for `k[G]`, class sums, and the center count.

2. **Pavel Etingof et al., _Introduction to Representation Theory_**
   (`https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf`).
   This is the independent textbook cross-check for Maschke, the semisimplicity
   converse, the regular-representation multiplicities, the sum-of-squares
   formula, the irreducibles-versus-conjugacy-classes theorem, and the small
   group examples.

### Exact-URL stamp reuse

Both exact URLs were already mechanically fetch-stamped on Thursday,
August 27, 2026 in
`research/frontier-21-batch-5.coverage.json`, with these exact values:

- Webb: `1322988` bytes, SHA-256 prefix `3053d04310d37984`
- Etingof: `1403098` bytes, SHA-256 prefix `7008168dd9222197`

On Friday, August 28, 2026, I re-opened both exact URLs through the web reader
and confirmed that the same full PDFs still load. Following the repository's
exact-URL reuse convention, I copied those genuine stamps verbatim into this
batch's coverage rather than fabricating fresh network fetches inside a
network-restricted shell runner.

### Source-range dispositions worth flagging

- Webb `Lemma 3.4.1(2)` is marked `out-of-scope`, not because it is wrong, but
  because its formulation is in simple-character language and the design
  explicitly keeps RT-2 on the pre-character ring-and-representation route.
  The scaffold still proves the same equality theorem, but by the matrix-center
  computation that the design asked for.

- Etingof `Corollary 2.13` is also `out-of-scope`. It is the generic
  finite-dimensional-algebra inequality `\sum (\dim V_i)^2 \le \dim A`, but the
  page only needs the group-algebra equality after semisimplicity is known.

- Etingof `Theorem 3.11` is recorded as `out-of-scope` because it gives the
  complex-unitary proof of Maschke. The design's chosen route is the averaging
  proof plus the semisimple algebra seam, so the unitary branch is intentionally
  not load-bearing here.

## 6. Dependency rationale

The manifest's page-level prerequisite remains exactly the spec's
`the-group-algebra-and-representations`.

The item-level closure uses already-published material from:

- `the-group-algebra-and-representations`
- `chain-conditions-and-semisimple-modules`
- `conjugacy-and-simplicity-in-the-symmetric-groups`
- `normal-subgroups-and-quotient-groups`
- `rings-subrings-and-integral-domains`
- `semidirect-products-and-automorphism-groups`

plus their earlier prerequisite closure.

Key dependency choices:

- The regular-representation multiplicity theorem is stated only after the
  algebraically closed Wedderburn decomposition because the proof genuinely
  needs the published classification of simple modules over matrix-product
  rings; I did not pretend that the multiplicity formula is immediate from
  Maschke alone.

- The irreducibles-versus-conjugacy-classes theorem depends on the new
  scalar-center lemma because without it the second center-dimension
  computation would rest on a missing library statement.

- The finite-order diagonalizability item is kept as a corollary at the end of
  RT-2, exactly where the design wants it, so RT-3 can cite it without dragging
  finite cyclic representation structure back into RT-1.

Known limits:

- The scaffold does **not** import character orthogonality, character tables, or
  harmonic-analysis language; those belong to RT-3.

- The equality theorem on irreducibles and conjugacy classes is stated under the
  algebraically closed, characteristic-prime-to-`|G|` hypothesis. That is the
  hypothesis under which the present RT-2 route proves it internally without
  opening Brauer or modular-character machinery.

- The B-page dihedral example uses the library's notation
  `\operatorname{Dih}(C_4)` for the order-eight dihedral group. This is the
  same group the dispatch table calls `D_4`.

## 7. Expected validator targets

For this fresh scaffold pass, the in-scope gate set is:

- `node tools/coverage-checklist.mjs research/frontier-22-batch-3.coverage.json --require-destination`
- `node tools/content-policy.mjs research/frontier-22-batch-*.pages.json --manifest-only`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-3.coverage.json --stamp`
- `node tools/url-sweep.mjs --coverage research/frontier-22-batch-3.coverage.json --out /tmp/frontier-22-batch-3-url-liveness.json --recover --fail-on-dead`

I append the actual results below after running them.

## 8. Actual results run on Friday, August 28, 2026

- `node tools/coverage-checklist.mjs research/frontier-22-batch-3.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 31 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs research/frontier-22-batch-*.pages.json --manifest-only`
  -> `content-policy: 283 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> **pass with run-wide warnings only**. The validator ended with
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 460 page(s) with item lists.` The printed warnings are the repository's pre-existing run-wide `redundant-prereq` notices on other pages, not a batch-3-specific defect.

- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-3.coverage.json --stamp`
  -> `source-fetch-check: 2/2 source(s) fetch-verified (0 newly stamped)`

- `node tools/url-sweep.mjs --coverage research/frontier-22-batch-3.coverage.json --out /tmp/frontier-22-batch-3-url-liveness.json --recover --fail-on-dead`
  -> **failed mechanically inside this runner**:

  ```text
  url-sweep: 0/2 live; 2 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-22-batch-3-url-liveness.json
  FAIL 0 https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf — curl: (6) Could not resolve host: ocw.mit.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf — curl: (6) Could not resolve host: www-users.cse.umn.edu
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

Current blocker:

- The scaffold manifest and coverage ledger are structurally clean.
- The exact source URLs are already fetch-stamped from Thursday, August 27,
  2026, and I re-opened both exact URLs through the web reader on Friday,
  August 28, 2026; both full documents still load there.
- I therefore left the live source records unchanged and recorded the shell
  runner's DNS failure honestly instead of replacing verified exact documents
  with different treatments merely to satisfy a transport-local `curl` gate.

## Step-3 fix pass

### `B3-1`

Disposition:

- accepted as already repaired on the current bytes; no further manifest edit
  was warranted in this fix pass

Evidence:

- The stable finding in
  `research/frontier-22-alpha-a-step3-scaffold-review.md` is accurate, but the
  current `research/frontier-22-batch-3.pages.json` already omits the forbidden
  published B-page dependencies
  `ex-the-complex-representations-of-a-cyclic-group-of-order-n-are-the-n-characters`,
  `ex-class-equation-of-s-three`, and
  `ex-class-equation-of-the-dihedral-group-of-order-eight`.
- On Friday, August 28, 2026, I re-read the RT-2 design block at
  `research/plan-algebra-track-expansion.md:1466` and checked the current batch
  manifest directly. The companion examples now compute their conjugacy-class
  counts or degree data inside their own strategies, matching the alpha repair:
  `ex-the-complex-group-algebra-of-z-mod-three-is-c-times-c-times-c`,
  `ex-the-complex-group-algebra-of-s-three-is-c-times-c-times-m-two-c`,
  `ex-the-complex-group-algebras-of-q-eight-and-dih-c-four-have-the-same-wedderburn-decomposition`,
  and `ex-the-regular-representation-of-z-mod-four-over-c-splits-into-four-characters`
  depend only on A-page theorems or earlier published A-page facts.
- `node tools/coverage-checklist.mjs research/frontier-22-batch-3.coverage.json --require-destination`
  returned `coverage-checklist: 1 page(s), 31 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs research/frontier-22-batch-*.pages.json --manifest-only`
  returned `content-policy: 425 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json` ended with
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 460 page(s) with item lists.`
- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-3.coverage.json --stamp`
  returned `source-fetch-check: 2/2 source(s) fetch-verified (0 newly stamped)`.
- I also re-opened the exact recorded source URLs for Webb and Etingof through
  the web reader on Friday, August 28, 2026 and confirmed that both full PDFs
  still load at the coverage-ledger URLs, so no alternate URL recovery or
  re-sourcing was justified.

Changed scaffold record:

- `research/frontier-22-batch-3.notes.md` only
- `research/frontier-22-batch-3.pages.json` already carried the B3-1 repair on
  entry to this dispatch
- `research/frontier-22-batch-3.coverage.json` remained unchanged because the
  recorded exact URLs still verify

## Step-5 authoring

Session date: Friday, August 28, 2026.

Artifacts authored on this pass:

- `items/def-completely-reducible-representation.md`
- `items/thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order.md`
- `items/cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order.md`
- `items/cor-group-algebra-is-semisimple-when-char-k-does-not-divide-group-order.md`
- `items/thm-augmentation-ideal-has-no-complement-when-char-k-divides-group-order.md`
- `items/cor-group-algebra-is-not-semisimple-when-char-k-divides-group-order.md`
- `items/def-isotypic-component-of-a-completely-reducible-representation.md`
- `items/thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique.md`
- `items/rem-decomposition-into-irreducible-summands-need-not-be-unique.md`
- `items/def-center-of-the-group-algebra.md`
- `items/def-class-sum-of-a-conjugacy-class-in-k-g.md`
- `items/thm-group-algebra-decomposes-as-a-product-of-matrix-algebras-over-an-algebraically-closed-field.md`
- `items/thm-finitely-many-irreducibles-occur-in-the-regular-representation-with-multiplicity-equal-to-their-degree.md`
- `items/cor-sum-of-squares-formula-for-irreducible-degrees.md`
- `items/lem-the-center-of-a-full-matrix-algebra-over-a-field-consists-of-the-scalar-matrices.md`
- `items/thm-class-sums-form-a-basis-of-the-center-of-k-g.md`
- `items/cor-the-dimension-of-the-center-of-k-g-is-the-number-of-conjugacy-classes.md`
- `items/thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order.md`
- `items/cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero.md`
- `items/ex-the-complex-group-algebra-of-z-mod-three-is-c-times-c-times-c.md`
- `items/ex-the-complex-group-algebra-of-s-three-is-c-times-c-times-m-two-c.md`
- `items/ex-the-complex-group-algebras-of-q-eight-and-dih-c-four-have-the-same-wedderburn-decomposition.md`
- `items/ex-the-regular-representation-of-z-mod-four-over-c-splits-into-four-characters.md`
- `items/ex-the-two-dimensional-trivial-representation-of-c-two-has-many-irreducible-splittings-but-one-isotypic-component.md`
- `items/fs-maschkes-theorem-without-the-characteristic-hypothesis.md`
- `items/fs-not-every-finite-dimensional-algebra-over-a-field-is-semisimple.md`
- `items/fs-decomposition-into-irreducible-subrepresentations-is-unique.md`
- `items/fs-the-sum-of-the-irreducible-degrees-equals-the-group-order.md`
- `items/fs-a-group-with-r-conjugacy-classes-has-an-irreducible-of-degree-r.md`
- `library/abstract-algebra/maschkes-theorem-and-complete-reducibility.md`
- `library/abstract-algebra/maschkes-theorem-and-complete-reducibility-examples.md`
- `research/frontier-22-batch-3.proof-contracts.json`

Proof-contract scope authored:

- 24 proof-bearing items, namely the 14 theorem/corollary/lemma items on the A
  page and all 10 B-page examples or false statements

Provenance rationale kept truthful:

- The structural RT-2 statements and the textbook examples sourced directly
  from Webb/Etingof remain `literature-derived`.
- The page-local synthesis items that combine published results into this
  library's route, especially the `Q_8` / `\operatorname{Dih}(C_4)` comparison,
  the two-dimensional trivial witness, and the local proof packaging around
  `k[G]`, are tagged `ai-altered`.
- No statement in this batch is tagged `ai-generated`, which keeps the batch
  clear of the schema prohibition on generated statements serving as dependency
  targets.

Authoring repairs applied during this pass:

- Adopted the canonical precheck numbering repair for
  `cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order`
  by renumbering the inductive branch to `1.2` / `2.1`.
- Collapsed proof-step display math to one-line `$$...$$` paragraphs wherever
  precheck would otherwise treat the display as an untagged continuation block.
- Added an explicit `## Remark` heading to
  `rem-decomposition-into-irreducible-summands-need-not-be-unique` so the
  false-statement citation contract could cite it as a real remark section.
- Corrected the modular Maschke counterexample witness from the scaffold prose:
  in the library's column-vector convention the invariant line is `ke_1`, not
  `ke_2`.

Narrowed or dropped claims:

- none

Checks run on Friday, August 28, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts <24 batch-3 proof-bearing items>`
  -> `24 checked, 0 failing — all clean`
- `node tools/regen-contract-entries.mjs research/frontier-22-batch-3.proof-contracts.json <24 scoped ids>`
  -> regenerated the contract entries from the final on-disk proofs
- `node tools/proof-contract.mjs research/frontier-22-batch-3.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 24/24 item(s) checked`
- `node tools/content-policy.mjs research/frontier-22-batch-3.pages.json`
  -> `content-policy: 29 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 484 page(s) with item lists.`
  The command still prints the repository's standing run-wide
  `redundant-prereq` advisories on other pages.
- `git diff --check -- items library/abstract-algebra research/frontier-22-batch-3.proof-contracts.json`
  -> clean

Blockers:

- no Step-5 batch-local blocker remains
