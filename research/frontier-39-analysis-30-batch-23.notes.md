# Batch 23 notes — `borel-weil-and-borel-weil-bott`

Run: `frontier-39-analysis-30`. Pair: `borel-weil-and-borel-weil-bott`
(A, order 510.017, `lie-theory`) / `borel-weil-and-borel-weil-bott-examples`
(B, order 510.018). Design: `research/plan-representation-theory-lie-track.md`
L1118 (RL-9) together with the 2026-09-08 binding audit. Manifest:
`research/frontier-39-analysis-30-batch-23.pages.json` (12 A items, 5 B items).
No `research/frontier-39-analysis-30-owner-authoring-direction.md` exists.

## Design versus plan

The design's RL-9 section still carries its planning-time **build hold** ("This
A page ... cannot be authored before the future AG pages supply $G/B$ as a
smooth projective variety, associated equivariant line bundles, coherent
cohomology, and Serre duality", and the audit line "RL-9 A | exact future
AG-owned A suppliers ... | whole pair build-held; emit no item before suppliers
exist"). The current plan controls and resolves the hold: `plan-spec.json`
lists the A page's `requires` as `tensor-product-multiplicities-and-littlewood-richardson`
and `smooth-projective-serre-duality-and-flag-variety-line-bundles`. The second
supplier now **exists and is published** — the run `frontier-36-complete`
batch-16 A page `smooth-projective-serre-duality-and-flag-variety-line-bundles`
(39 items, all `status: published`, commit `fc59133d5`); I read and used its
items `def-complex-semisimple-algebraic-group-borel-and-flag-variety`,
`lem-semisimple-borel-root-factorization`, `lem-semisimple-bruhat-double-cosets`
and the other AG items (exact list below). The design's own contract at L1868 says: "Once assigned,
replace the descriptive AG interface in RL-9 with those exact page ids" — the
plan did so, so the hold is satisfied, not overridden. **Recorded conflict:
design "build hold" versus plan "published AG supplier"; plan and disk agree,
so the pair is buildable.** No other design/plan conflict was found: the
design's conventions ($\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$,
$w\cdot\lambda=w(\lambda+\rho)-\rho$, $L(\lambda)$, $K_{G/B}$) are exactly the
published conventions of the AG supplier page.

### Inventory deviation from the design's 18 ids (documented, not silent)

Three of the design's A-page ids are *superseded by published AG items* and are
not re-minted (duplicating them would pad the page with a second statement of a
published claim):

| design RL-9 id | disposition | published supplier |
|---|---|---|
| `def-flag-variety-and-borel-character-line-bundle-interface` | dropped as a duplicate; the page cites the published definition, whose sign convention ($\mathbb C_{-\lambda}$) is identical | `def-borel-character-equivariant-line-bundle` |
| `prop-the-canonical-line-bundle-of-g-over-b-has-weight-minus-two-rho` | dropped as a duplicate | `lem-flag-variety-canonical-bundle-weight-minus-two-rho` |
| `lem-minimal-parabolic-projection-has-p1-fibers` | dropped as a duplicate | `thm-minimal-parabolic-flag-projection-is-p1-bundle` |

Two local prerequisite items were **added** because the design's summary rows
hid real proof joints (both are on the A page, so no new pair or batch):

* `lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety`
  (existence of the nonzero dominant section; the design's row
  `lem-a-nonzero-dominant-section-is-determined-on-the-big-cell` covers only
  uniqueness). Route: big-cell function $v(u^-b)=\lambda(b)$, Bruhat
  codimension-one cells, the SL2 computation $a^{\langle\lambda,\alpha^\vee\rangle}$
  (Lurie, Theorem 2 proof, pp. 1–2; Rui 1.8 is the module-theoretic check).
* `lem-lowest-weight-space-is-the-nilradical-invariant-line` (for dominant
  integral $\mu$, $\dim L(\mu)^{\mathfrak n^-}=1$ with weight $w_0\mu$), used
  to count irreducible constituents when the big cell bounds
  $\dim H^0^{\mathfrak n^-}\le1$.

Every other design id is kept verbatim, including the B companion. The design's
harvest rows I41–I45 map as: I41 → `lem-sections-…`, `prop-left-translation-…`
(the definition half and the convention counterexample are published/superseded);
I42 → `lem-a-nonzero-dominant-section-…`, `thm-borel-weil`; I43 →
`lem-rank-one-cohomology-shifts-across-a-simple-wall` (the fibre-bundle half is
published as `thm-minimal-parabolic-flag-projection-is-p1-bundle`); I44 →
`lem-singular-dot-weights-…`, `lem-a-regular-weight-…`, `thm-borel-weil-bott`
and the three B examples; I45 → `prop-borel-weil-bott-is-compatible-with-serre-duality`,
`cor-borel-weil-bott-euler-character-is-the-weyl-character` and the top-degree
B example (the canonical-bundle statement is published).

### Design source-mapping defect (for owner reconciliation)

The design's "Deliberately not decomposed" table lists `E757 §27.1 Borel--Weil
| inline in thm-borel-weil`. This is a stale locator: Etingof 18.755 §27 is
"Representations of $GL_n$, I" (fundamental tensor products, pp. 145–150) and
contains no Borel–Weil theorem. The claim was not used; the four RL-9 sources
below carry the items. No mathematical claim depends on the mis-cited section.

## Inventory

A page (12 items, all with explicit `deps` and `dependency_level`):

1. `lem-sections-of-an-associated-line-bundle-as-equivariant-functions` (0)
2. `prop-left-translation-makes-line-bundle-cohomology-a-g-module` (1)
3. `lem-a-nonzero-dominant-section-is-determined-on-the-big-cell` (2)
4. `lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety` (1)
5. `lem-lowest-weight-space-is-the-nilradical-invariant-line` (0)
6. `thm-borel-weil` (3)
7. `lem-rank-one-cohomology-shifts-across-a-simple-wall` (2)
8. `lem-singular-dot-weights-have-zero-line-bundle-cohomology` (3)
9. `lem-a-regular-weight-has-a-unique-dominant-dot-translate` (0)
10. `thm-borel-weil-bott` (4)
11. `prop-borel-weil-bott-is-compatible-with-serre-duality` (5)
12. `cor-borel-weil-bott-euler-character-is-the-weyl-character` (6; depends on
    four in-run batch-21 items, hence the level-one rise)

B page (5 items): `ex-the-sl2-singular-weight-has-no-cohomology` (4),
`ex-borel-weil-bott-on-p1-for-sl2` (5), `ex-an-sl3-weight-with-cohomology-in-degree-one`
(7), `ex-the-top-degree-bwb-case-and-serre-duality` (6),
`cex-changing-the-line-bundle-sign-dualizes-the-borel-weil-answer` (4). The
singular-wall example precedes the P1-table example that cites it.

### Proof architecture preserved

* **Borel–Weil** (`thm-borel-weil`): sections = equivariant functions
  (I41 route), $H^0$ finite-dimensional $\mathfrak g$-module, complete
  reducibility + highest-weight classification gives
  $H^0=\bigoplus_j L(\mu_j)$; each $L(\mu_j)^{\mathfrak n^-}$ is one-dimensional
  (`lem-lowest-…`), the big-cell lemma bounds the number of summands by one, and
  the extension lemma supplies existence for dominant $\lambda$; the lowest
  weight of the surviving summand is read off as $-\lambda$, giving
  $H^0\cong L(\lambda)^*$ (dominant) and $H^0=0$ otherwise. This is Lurie's
  Theorem 2 content with the existence half kept as its own item; Ng's
  Frobenius-reciprocity computation and Rui's $\mathbb C[G]$-decomposition are
  the two independent treatments (recorded as source checks, not dependencies).
* **Higher vanishing for dominant weights** is proved by the *up*-chain to
  $w_0\cdot\lambda$ (shift lemma + no cohomology above $\dim X=N$), so the
  dominant case is complete before BWB is assembled.
* **BWB** (`thm-borel-weil-bott`) is the Lurie/BP route: singular $\lambda+\rho$
  gives $H^i\cong H^{i+1}$ at a wall and (via the $n=-1$ clause of the relative
  shift) all cohomology vanishes; regular $\lambda+\rho$ is carried to the
  dominant translate by the monotone chain of
  `lem-a-regular-weight-has-a-unique-dominant-dot-translate`, each wall crossing
  shifting cohomological degree by one, and Borel–Weil evaluates the endpoint.
* **Serre duality compatibility** and the **Euler-character/Weyl-character
  corollary** close I45 with the published canonical-bundle and Serre items and
  the RL-7 Weyl character formula.

### Axiom of Choice discipline

The geometric and representation-theoretic items carry "Assume the Axiom of
Choice" and `def-axiom-of-choice` in `deps`, inherited from the published AG
geometry items, the published g-module classification and the Serre-duality
item. `lem-a-regular-weight-has-a-unique-dominant-dot-translate` is purely
combinatorial and is stated choice-free (its deps are the choice-free published
Weyl-chamber/length items); no item claims a ZF result it does not prove.
No item consumes a Recorded/not-proved statement and no item reaches
`deferred-set-theory-beyond-choice`.

## Published prerequisites examined (statements and proofs read)

From `smooth-projective-serre-duality-and-flag-variety-line-bundles`
(all `status: published`): `def-complex-semisimple-algebraic-group-borel-and-flag-variety`,
`lem-semisimple-borel-root-factorization`, `lem-semisimple-opposite-borel-big-cell`,
`lem-semisimple-bruhat-double-cosets`, `lem-semisimple-minimal-parabolic-root-subgroup`,
`lem-semisimple-rational-pluecker-highest-weight-modules`,
`lem-semisimple-projective-orbit-flag-quotients`, `lem-semisimple-flag-torsor-zariski-charts`,
`thm-semisimple-flag-variety-smooth-projective`, `thm-flag-variety-bruhat-cell-decomposition`,
`def-borel-character-equivariant-line-bundle`,
`thm-borel-characters-classify-equivariant-line-bundles-simply-connected`,
`lem-flag-variety-canonical-bundle-weight-minus-two-rho`,
`thm-minimal-parabolic-flag-projection-is-p1-bundle`,
`lem-flag-line-bundle-degree-on-minimal-parabolic-fibre`,
`lem-minimal-parabolic-relative-canonical-line-bundle-root-weight`,
`lem-relative-projective-line-degree-normal-form`, `thm-leray-spectral-sequence-for-sheaf-cohomology`,
`lem-relative-projective-line-cohomology-and-apolarity`,
`thm-relative-p1-line-bundle-cohomology-shift`,
`thm-serre-duality-smooth-projective-variety-locally-free-sheaves` (used also for
its "outside $0\le q\le n$ the cohomology vanishes" clause). The GL$(2)$ and
GL$(3)$ examples cite the published `ex-sl2-flag-variety-line-bundles`,
`ex-sl3-two-minimal-parabolic-projections`, `ex-cohomology-o-d-projective-line-all-d`.

From the Lie-theory corpus: `def-one-dimensional-borel-module-of-weight-lambda`,
`thm-weyls-complete-reducibility-theorem`,
`thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`,
`prop-highest-weight-of-the-dual-representation`,
`prop-the-highest-weight-space-of-an-irreducible-module-is-one-dimensional`,
`lem-highest-weight-modules-have-weights-below-the-top-weight`,
`ex-the-eight-dimensional-adjoint-representation-of-sl-three`,
`ex-diagonal-cartan-subalgebra-and-roots-of-sl-n`, `ex-the-a2-serre-relations`,
`def-classical-complex-matrix-lie-algebras`,
`prop-root-systems-of-the-classical-complex-lie-algebras`,
`def-special-linear-lie-algebra-sl-two`, `def-weyl-vector-rho`,
`def-fundamental-weights-for-a-chosen-simple-root-system`,
`def-open-and-closed-weyl-chambers`, `lem-finite-weyl-closed-chambers-and-stabilizers`,
`prop-weyl-length-equals-positive-root-inversion-number`,
`def-length-and-longest-element-of-a-finite-weyl-group`,
`lem-finite-weyl-positive-roots-and-simple-reflections`,
`def-dot-action-facets-and-single-wall-translation-data`,
`def-integral-dominant-and-strictly-dominant-weights`.

Every wikilink in a manifest statement resolves to one of these ids, to another
item of this batch, or to `def-axiom-of-choice`. **No missing, circular, forward
or inadequate dependency was found** by `manifest-deps` and
`item-dependency-levels` (whole-run results below). The two convention checks
performed: (a) the library's $\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$
has fibre degree $+\langle\lambda,\alpha^\vee\rangle$ at the minimal parabolic
fibre, and $w\cdot\lambda=\lambda-(\langle\lambda,\alpha^\vee\rangle+1)\alpha$,
which matches the shift condition $n\ge-1$ exactly; (b) $K_{G/B}\cong\mathcal L_{-2\rho}$
with the Serre pairing $H^i(\mathcal L_\lambda)^\vee\cong H^{N-i}(\mathcal L_{-\lambda-2\rho})$,
which the Serre-compatibility proposition checks against the $w_0w$ degree count.

## Sources

Read in full and harvested in `research/frontier-39-analysis-30-batch-23.coverage.json`:

| source | kind | locator actually read |
|---|---|---|
| Xiong Rui, *Borel–Weil and Borel–Weil–Bott*, Lecture 1 | lecture-notes | §§1.5–1.8, 1.9, 1.12–1.20, 1.22, printed pp. 2–7 |
| J. Ng, *The Borel–Weil–Bott Theorem* (Chicago REU 2015) | paper | §§3–6, printed pp. 6–14 |
| J. Lurie, *A Proof of the Borel–Weil–Bott Theorem* | paper | complete note, pp. 1–3 |
| G. Boxer and V. Pilloni, *Notes on Higher Coleman Theory* | lecture-notes | Lecture 1 §§1.1.1–1.1.6, printed pp. 2–6 |

`source-fetch-check --stamp` result: 7/7 source entries fetch-verified, then
check mode 7/7 resolved, 0 documented drops. The B page cites Lurie, Ng and
Rui (the SL2/Serre computations). `url-sweep --recover --fail-on-dead`: 4/4
distinct URLs live.

### Retrieval history (honest record)

* Lurie's design URL `https://math.mit.edu/~lurie/papers/bwb.pdf` returns HTTP
  404 (HTML page-not-found). Recovery succeeded on the first retry at the
  author-hosted mirror `https://www.math.harvard.edu/~lurie/papers/bwb.pdf`
  (201993 bytes, 3 PDF pages, sha256 `57d1df87dc0641ec…`), which is also the
  URL already used by the published AG item `ex-sl2-flag-variety-line-bundles`.
  Because the note is shorter than the four-page floor, the coverage file
  carries a full-document reading receipt for it. The attempt list in the file
  records the initial 404, the successful recovery, and four bodies the fetch
  tool downloaded and rejected only for the missing receipt; the receipt is now
  present and no retrieval of the document failed.
* Rui's convention $\mathbb C(\lambda)$ with $T$-action $\lambda^{-1}$ and BP's
  $f(bu)=w_0\kappa(b)f(u)$ are sign translations of the library's
  $f(gb)=\lambda(b)f(g)$; both are recorded as notes in the coverage rows. The
  design itself anticipated this ("reconciliation is a sign translation, not an
  open mathematical choice").

## Checks run (actual results)

* `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-*.pages.json`
  — `manifest-deps: 542 item(s), 0 normalized, 0 error(s)`.
* `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  — `542 scoped item(s), 1 error(s)`, the single error being
  `batch-dependency-missing [lem-positive-compactly-supported-transform-bump-on-the-dual]`
  in batch 27 (unrelated to this batch). No batch-23 item is flagged.
* `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  — no error on any batch-23 item; the only remaining errors are `empty
  scaffold inventory` for batches still unscaffolded. One label correction was
  applied during construction: `cor-borel-weil-bott-euler-character-is-the-weyl-character`
  rose from 5 to 6 (and its consumer `ex-an-sl3-…` from 6 to 7) once its
  in-run batch-21 dependencies were counted, as the tool requires.
* `node tools/coverage-checklist.mjs .../batch-23.coverage.json --require-destination`
  — `2 page(s), 51 harvested result(s), 0 error(s), 1 warning(s)`. The warning
  is `coverage-low-yield` (13/37 A-page results disposed `included`). The
  remainder are genuine `already-published`, `inline` or `out-of-scope` rows:
  the geometry interface is published by the AG supplier, and the source
  sections on localisation, Cousin complexes and type-A combinatorics are out
  of scope with item-specific reasons. No result was declined for lack of
  understanding.
* `node tools/source-fetch-check.mjs --coverage .../batch-23.coverage.json`
  — `7/7 source(s) fetch-verified`, `7/7 source(s) resolved`.
* `node tools/url-sweep.mjs --coverage ... --out <tmp> --recover --fail-on-dead`
  — exit 0: `4/4 live; 0 failed`.
* `node tools/source-backing.mjs --coverage ... --liveness <tmp>`
  — `13 authored result(s) across 1 file(s), every one still backed`.
* `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  — refreshed; batch 23's six consumer rows (one page edge to batch 22, five
  item edges to batch 21) are present with `open` reviews. `--require-reviewed`
  still fails on the batches that have not written inputs yet (7, 12–20), not on
  batch 23.
* `node tools/validate-plan.mjs research/plan-spec.json` — OK (declared order
  acyclic; no item-level cycles, forward references, B-page dependencies or
  unresolved ids).
* `node tools/extcheck.mjs` — OK; no batch-23 finding (the advisory
  `[unproved-on-published]` rows are pre-existing published items elsewhere).

## Cross-batch dependencies

`research/frontier-39-analysis-30-batch-23.cross-batch-dependencies.json` is
written with six rows:

* `page borel-weil-and-borel-weil-bott ← tensor-product-multiplicities-and-littlewood-richardson`
  (batch 22). The plan edge is retained, but **no item of this batch declares a
  batch-22 dependency**: the BWB and Euler-character items use the in-run RL-7
  items (batch 21), the published AG geometry page and local lemmas only. Step 3
  must verify this non-use or read the needed clause in.
* Five item edges: `cor-borel-weil-bott-euler-character-is-the-weyl-character`
  consumes `thm-weyl-character-formula`, `def-formal-character-of-a-finite-dimensional-weight-module`,
  `prop-formal-characters-are-additive-and-multiplicative`,
  `prop-characters-of-finite-dimensional-modules-are-weyl-invariant` and
  `def-weyl-alternation-operator` from batch 21 (RL-7). Each row records the
  exact clause required.

No other in-run batch declares a dependency on a batch-23 item, so this batch
owes no supplier-side review rows.

## Readiness and unresolved uncertainty

All 17 items are recorded `ready` (complete proof strategy, explicit deps,
published or in-run prerequisite statements read, source locators, levels
matching the tool). No item is escalated. No published defect was found in any
supplier used; the only defect found is the stale design locator `E757 §27.1`
recorded above, which has no effect on disk. Residual uncertainty recorded, not
hidden: the adopted Borel–Weil proof needs the standard fact that a
finite-dimensional $\mathfrak g$-submodule of the rational $G$-module
$H^0$ is spanned by the $\mathfrak n^-$-invariants used in the count; the
manifest route avoids the group-integration dictionary entirely by using only
the $\mathfrak g$-module classification (published) plus the geometric
existence lemma, so no unstated classification of rational $G$-modules is
required. Owner/operator reconciliation and the engine gate follow; a worker
readiness record is not independent mathematical approval.

## Addendum — post-check text fixes and re-records

After the first readiness pass, four manifest texts were corrected and the
affected records were re-recorded:

* `lem-a-nonzero-dominant-section-is-determined-on-the-big-cell`: the title now
  says "$U^-$-invariant" (the statement and strategy always meant the negative
  unipotent subgroup).
* `thm-borel-weil`: the statement no longer claims the isomorphism
  "equivalently as rational $G$-modules" (the proof establishes the
  $\mathfrak g$-module isomorphism); the non-dominance half of the strategy now
  records explicitly that $-w_0$ permutes the simple roots, so that a dominant
  $\mu_1=-w_0\lambda$ forces $\lambda$ dominant.
* `thm-borel-weil-bott`: the direction of the rank-one shift application in the
  regular case was corrected to the $n\ge-1$ clause applied to
  $\nu_{j+1}$ (with the equivalent $H^{i+1}(\nu_j)\cong H^i(\nu_{j+1})$ form).

Nine records reopened through the transitive-closure hash (the four edited items
and their consumers `prop-borel-weil-bott-is-compatible-with-serre-duality`,
`cor-borel-weil-bott-euler-character-is-the-weyl-character`,
`ex-borel-weil-bott-on-p1-for-sl2`,
`ex-an-sl3-weight-with-cohomology-in-degree-one`,
`ex-the-top-degree-bwb-case-and-serre-duality`,
`cex-changing-the-line-bundle-sign-dualizes-the-borel-weil-answer`) and were
re-recorded `ready`. A fresh `step1-decisions.mjs check` reports no batch-23
item open.

**Final battery (after the fixes and re-records).**

* `manifest-deps` over all run manifests — `565 item(s), 0 error(s)`.
* `content-policy --manifest-only` — `565 scoped item(s), 1 error(s)`, the
  single error being batch 27's
  `batch-dependency-missing [lem-positive-compactly-supported-transform-bump-on-the-dual]`;
  no batch-23 item is flagged.
* `item-dependency-levels check --run` — no batch-23 error (remaining errors
  are `empty scaffold inventory` for unscaffolded batches).
* `coverage-checklist ... --require-destination` — `2 page(s), 51 harvested
  result(s), 0 error(s), 1 warning(s)` (the advisory `coverage-low-yield`
  warning justified above).
* `source-fetch-check` check mode — `7/7 source(s) fetch-verified`, `7/7
  source(s) resolved`.
* `frontier-dependency-ledger refresh --run frontier-39-analysis-30` — refreshed
  and deduplicated; batch 23's six consumer rows are present.

## Addendum 2 — final clarification and published-page note

One further strategy sentence was clarified:
`lem-singular-dot-weights-have-zero-line-bundle-cohomology` now says that the
$n=-1$ clause of the rank-one shift lemma, applied to the simple root with
$\langle\lambda,\alpha^\vee\rangle=-1$, directly gives $H^i=0$ (rather than
restating the periodicity and its consequence). The eight affected records
(that lemma, `thm-borel-weil-bott`, `prop-borel-weil-bott-is-compatible-with-serre-duality`,
`cor-borel-weil-bott-euler-character-is-the-weyl-character`,
`ex-the-sl2-singular-weight-has-no-cohomology`, `ex-borel-weil-bott-on-p1-for-sl2`,
`ex-an-sl3-weight-with-cohomology-in-degree-one`,
`ex-the-top-degree-bwb-case-and-serre-duality`) were re-recorded `ready`.
Final state: `step1-decisions` reports no batch-23 item open; no batch-23 error
in `item-dependency-levels`; `manifest-deps` 17/17; `coverage-checklist`
0 errors / 1 advisory warning; `source-fetch-check` 7/7.

**Published-page note (documentation only, not a mathematical defect).** The
published page `library/algebraic-geometry/smooth-projective-serre-duality-and-flag-variety-line-bundles.md`
ends with the sentence "The items are current-run drafts," but all 39 of its
items carry `status: published` with `verification.audited`/`verified` stamps
dated 2026-09-30 (run `frontier-36-complete` batch 16; commit `fc59133d5`
"Publish frontier-36 pages after owner audit"). The sentence is stale prose on a
published page, not a defective statement; no consumer depends on it. Repair
strategy for the owner: update the page trailer to say the items are published.
No other published defect was found in any supplier used by this batch.

## Addendum 3 — final Step 3b pass (continuation)

After the first handoff the formatter normalisation invalidated the recorded
receipt hashes, so all 17 items were re-audited against the frozen text and
re-recorded. Two further mathematical repairs were made in this pass.

1. `ex-an-sl3-weight-with-cohomology-in-degree-one` — **consumer
   reconciliation with the repaired corollary.** `[F4]` restated the
   Euler-characteristic corollary without the dual, `ch L(v.nu)`; since the
   corollary's final statement is `(-1)^l(v) ch L(v.nu)^*`, the fact was
   corrected to the dual form. The example's promise that the Euler
   characteristic is `-ch L(rho)` is kept and now proved: a new `[F5]` derives
   `L(rho)^* = L(rho)` from `w_0 rho = -rho` (the longest element maps
   `Phi^+` onto `Phi^-`), the dual highest-weight proposition and the
   highest-weight classification. Three published suppliers were added to the
   item and to its manifest entry: `prop-highest-weight-of-the-dual-representation`,
   `def-length-and-longest-element-of-a-finite-weyl-group`,
   `thm-highest-weight-classification-of-finite-dimensional-irreducible-representations`.
   The B-page prose now says the degree-one group "realises the
   eight-dimensional module `L(rho)^* = L(rho)`" instead of asserting an
   unproved adjoint-module identification. The proof contract entry was
   regenerated (`F3` uses reduced to step 2.1; `F5` citations added).
2. `lem-the-borel-weil-section-extends-from-the-big-cell-to-the-flag-variety`
   — **fibration count corrected.** Step 1.2 previously described the fibres
   of `U^- x B -> U^- n_w B` as having dimension `r + l(w)` and then displayed
   `2N - l(w)`. The fibre over `n_w` is parametrised by
   `B cap n_w^{-1} U^- n_w`, whose unipotent part is the `l(w)`-fold product
   of the root groups `U_gamma`, `gamma in Phi^-`, `gamma = w alpha`, and
   whose torus part is trivial; so the fibre has dimension `l(w)` and
   `dim U^- n_w B = dim U^- + dim B - l(w) = 2N + r - l(w) = dim G - l(w)`.
   The conclusion actually used later — codimension `l(w)`, codimension-one
   cells exactly the simple reflections — is unchanged. A cross-reference
   ("divisors `D_alpha` of step 1.1") was corrected to step 1.2. The proof
   contract entry for this item was regenerated.

**Records.** All 17 item decisions were re-recorded after the final
`proof-layout.mjs` pass with confidence 1 and exact dependency lists: 6
`accept`, 11 `repaired`; none escalated. `check --phase final` for this run
reports every batch-23 item closed; `check --phase scope` shows no batch-23
work row.

**Final battery (all after the last item edit and formatter run).**

* `precheck.mts` (17 explicit paths) — 17 checked, 0 failing.
* `rendercheck.mjs` (17 explicit paths) — no errors.
* `proof-layout.mjs` (17 explicit paths, one command) — 17 items, 69 steps, 0 defects.
* `proof-contract.mjs batch-23 --strict` — 0 errors, 0 warnings, 17/17.
* `citation-fidelity.mjs --fail-on-missing-quote` — no missing quotes, no widening candidates.
* `boundary-audit.mjs` — no template cluster at or above 3 members, no contradicted dispositions.
* `manifest-deps.mjs` (batch-23) — 17 items, 0 errors.
* `content-policy.mjs` (batch-23, authored-item mode) — 17 scoped items, 0 errors, 0 warnings. The pre-authoring `--manifest-only` form now reports `batch-item-already-exists` for every id: the ids are minted and `plan-spec.json` carries no item lists, so that form is the wrong gate after authoring (it asks "may these be minted here?"), not a defect.
* `depcheck.mjs --items-file` (the 17 ids) — no finding names any owned item. The tool's global corpus pass still reports 30 pre-existing/in-flight errors elsewhere (18 `page-item-missing` rows on a PDE page under construction, 12 `b-leaf-content` rows in other batches); none is a batch-23 item.
* `item-dependency-levels.mjs check --run` — no batch-23 error; the three remaining errors are other batches' items.
* `coverage-checklist.mjs batch-23 --require-destination` — 2 pages, 51 harvested results, 0 errors, 1 advisory `coverage-low-yield` warning (13/37 scaffolded; declines already justified row by row).
* `validate-plan.mjs research/plan-spec.json` — OK (no cycles, forward references, B-page dependencies or unresolved ids).
* `frontier-dependency-ledger.mjs refresh --run` — refreshed and deduplicated; batch-23's rows carry verified evidence.
* Source checks from Step 3a remain valid: no source URL, locator or coverage row changed in this pass.

## Current Step 3b hash closure (2026-10-05)

This is a later B23-only re-audit and supersedes the earlier Step 3b receipt
status above. The owner proceeded the corrected scope at
`f16aea8b837ba771e38b45dc5f612722e5d823a27b880cae960f594a630e4adb`.
All 17 item receipts are current at their composite hashes; the exact item
IDs, decisions, hashes, repairs, and current blockers are in
`research/frontier-39-analysis-30-step3b-pair-borel-weil-and-borel-weil-bott.md`.

The Borel–Weil–Bott singular-weight lemma now states uniqueness of the
dominant orbit point, not of a Weyl element carrying a singular weight there.
Its proof uses the rank-one chain for degrees at or above the initial
negative-root count, then the Serre-dual chain for the complementary degrees.
The low-degree argument uses the estimate
`n_-(lambda+rho) + n_-(-lambda-rho) <= |Phi+| - 1`, since at least one root
pairing is zero. The manifest and strict proof contract include the canonical
bundle and Serre-duality suppliers.

The big-cell extension proof now explains how the `SL2` pole order measures
the ambient simple-boundary divisor: the rational function is
left-`U^-`-invariant and right-`B`-semi-invariant, so its order is constant on
the dense Bruhat orbit; the rank-one slice is etale and preserves the local
boundary multiplicity. The existence claim remains unchanged.

Current focused checks after the last item edit: `proof-layout` on the five
edited item paths reports 5 items, 21 steps, 0 defects; the batch-23 strict
proof-contract check reports 17/17, 0 errors, 0 warnings. No tests or workflow
gates were run in this continuation. No B23 item blockers remain.
