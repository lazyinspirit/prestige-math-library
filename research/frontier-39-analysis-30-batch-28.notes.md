# Batch 28 Step 1 scaffold — Finite Fourier Analysis and the Fast Fourier Transform

Run `frontier-39-analysis-30`, role beta, label batch-28. Owned pair:
`finite-fourier-analysis-and-the-fast-fourier-transform` (A, order 510.06507) /
`finite-fourier-analysis-and-the-fast-fourier-transform-examples` (B, order 510.06508),
category `fourier-analysis`. Outputs: `research/frontier-39-analysis-30-batch-28.pages.json`
(14 A items + 5 B items; page cap 100 respected), `...-batch-28.coverage.json`, this note,
`...-batch-28.cross-batch-dependencies.json` (2 page edges, both `open` into in-run batches
26 and 27), one `research/frontier-39-analysis-30-step1-<id>.json` readiness record per item
(19 records: 19 `ready`, 0 `escalated`), and the refreshed unified ledger
`research/frontier-39-analysis-30-cross-batch-dependencies.json`. No published content, item
file, shared plan, engine state or verdict was edited. This record covers construction only;
it is not an independent mathematical review.

## Scope, plan and owner direction

- `research/frontier-39-analysis-30-owner-authoring-direction.md` does **not** exist (checked
  before construction); the binding texts are the dispatch, CLAUDE.md, SCHEMA.md, WORKFLOW.md,
  the design section and `research/plan-spec.json`.
- The design section is **FR-18** at `research/plan-fourier-analysis-track.md` L1326
  (`## FR-18. Finite Fourier analysis and the fast Fourier transform`), read in full
  (L1326–L1366). It contains 12 numbered A rows and 5 B leaves, plus the hard obligations
  quoted below.
- `research/plan-spec.json` pages 510.06507/510.06508 carry the same `order`, `title`,
  `companion`, `kind`, `category` and `requires` array as the dispatch and the manifest stub,
  with `items: []`. The reconciliation ledger row (L79) says "FR-18 | move to
  510.06507/.06508 | FR-15 A, FR-16 A, FR-17 A", which is exactly the `requires` array.
  **No plan-vs-design-vs-dispatch conflict exists for this pair**; the design's 12 A rows and
  5 B leaves are preserved verbatim and unweakened under their design ids.
- The design's proof-plan constraint ("only finite-dimensional linear algebra for the proof")
  is met at item level: every proof on this page is a finite-sum / finite-dimensional argument.
  The three `requires` pages are page-scope interface edges only. FR-15
  (`character-groups-and-elementary-lca-duals`) is published on disk; FR-16 (batch 26) and
  FR-17 (batch 27) are in-run scaffolds whose item files do not exist yet, so both page edges
  are `open`. No FR-18 item declares an item-level dependency on any in-run supplier, so the
  pair is authorable independently of batches 26/27 and no cycle or forward edge exists.

## Recorded conflicts and design-vs-evidence notes

1. **Source-range label for EW (recorded, no mathematical difference).** The design's per-pair
   matrix (L328) cites "EW, Appendix C.1–C.2, printed pp. 429–435". Printed pp. 433–435
   already belong to Appendix C.3 (character group, orthogonality of characters, Parseval);
   only C.1 and C.2 sit on pp. 429–432. The coverage records the exact wider range actually
   read, C.1–C.3, printed pp. 429–439 (through Example C.14 and Lemmas C.15–C.16), and names
   which headings supplied which disposition.
2. **Taylor's normalisation is not the design's (recorded convention translation).** T §11
   defines $f^\#(\ell)=n^{-1}\sum_{\omega^j\in\Gamma_n}f(\omega^j)\omega^{-j\ell}$ with
   $L^2(\Gamma_n)$ weighted by $n^{-1}$-counting measure, while the design fixes the unitary
   negative-sign transform on $\mathbb Z/N$: $(\mathcal F_Nf)(k)=N^{-1/2}\sum_xf(x)e^{-2\pi ikx/N}$.
   The manifest states the design's convention; T (11.1)–(11.6) is cited for the argument and
   the character bookkeeping. Nothing is weakened, and no constant is silently changed: the
   translation is the substitution $\omega^j\leftrightarrow[x]_N$, $\omega^{-j\ell}\leftrightarrow
   e^{-2\pi ikx/N}$ together with the renormalisation by $N^{1/2}$.
3. **Taylor's §12 recursion is the mirror form of the design's route (recorded, absorbed
   inline).** T (12.8)–(12.11), Proposition 12.1 splits the *input* into halves
   $f(\omega^j)\pm f(\omega^{j+n/2})$ and reads off *output* parities (decimation in
   frequency). The design's row 8 and MITF §4 split the input into even and odd coefficients
   (decimation in time). The manifest's item 10 states the design/MITF form; T's Proposition
   12.1 is recorded in the coverage as `inline` into that item (equivalent formulation), and
   the proof strategy says explicitly that it is the mirror and not a second independent
   result. MITF §4 is the second primary treatment for the stated form.
4. **Design row 6 has no displayed source identity (recorded; direct proof assigned).** The
   identity $\mathcal F_N^2f(x)=f(-x)$, $\mathcal F_N^4=I$ is not displayed in T §11–§12 or
   MITF as a named result; it is immediate from the transform pair and the orthogonality sum.
   The manifest keeps the design's statement provenance `literature-derived` and assigns the
   proof `ai-altered`, with the direct route from items 1–2 (design's assigned rationale
   "Items 1–3"); no source is claimed for a proof not read.
5. **Design row 12 is recorded, not proved (recorded).** The mixed-radix/prime-length remark
   carries proof provenance `not-supplied` in the design; the manifest therefore sets
   `proved_here: false` with an `external_dependency` whose `source_url` is the Taylor PDF and
   whose `exact_statement` quotes §12 Exercise 4 (generalisation to $n=3^k$ and to products of
   small primes). The remark is a leaf; no item depends on it.
6. **Published near-duplicates are deliberately not consumed (recorded).** The published
   `lem-additive-character-orthogonality-from-representation-orthogonality` proves the same
   orthogonality abstractly for finite abelian groups, and the published
   `ex-pontryagin-dual-of-a-finite-cyclic-group` supplies the character family
   $\chi_k([m])=\exp(2\pi ikm/N)$ used in the DFT definition. The scaffold keeps item 1 as
   the design's concrete geometric-sum form (needed as the local algebraic engine, including
   the $N=1$ clause) but cites only the published character example for well-definedness; the
   representation-theoretic route is recorded as an independent cross-check, not a
   dependency. This avoids importing the Maschke/Schur machinery into an elementary finite
   computation.
7. **Unrelated whole-run manifest finding (not batch-28).** The whole-run
   `content-policy --manifest-only` sweep over all 30 run manifests reports exactly one error,
   in batch 27's scaffold: `lem-positive-compactly-supported-transform-bump-on-the-dual`
   depends on `thm-unique-left-haar-measure-up-to-scale`, which is neither declared by the run
   manifests nor present on disk. All 19 batch-28 items pass that sweep with 0 errors and 0
   warnings. Recorded for the owner/batch-27; not touched here.
8. **Complex vs real finite-sum machinery (recorded correction made during construction).**
   The first draft of items 1, 4, 5, 7, 8 and 10 cited `lem-finite-sum-laws`,
   `lem-power-difference-factorisation` and `lem-a-double-sum-over-finite-index-sets-may-be-interchanged`
   for complex sums. Inspection of those published items shows they are stated for
   real- (or natural-) valued families only; the general statements available in the library
   are `def-finite-sum-in-a-commutative-monoid` and the commutative-monoid reindexing/splitting/
   Fubini rule `lem-finite-sum-reindexing-and-fubini` (parts 1–3, any commutative monoid, hence
   $\mathbb C$ under addition). The manifest was corrected before the records were frozen: the
   real-only items were removed from the complex-sum deps, the complex geometric identity
   $1-\omega^n=(1-\omega)\sum_{k<n}\omega^k$ is now proved by a short induction from the same
   recursive sum definition (with the field laws and `lem-power-laws`), the constant complex sum
   is identified with $\iota(N)$ via `lem-integer-multiples-agree-with-canonical-natural`, and
   the inner-product definiteness argument enumerates $\mathbb Z/N$ and cites the real law
   `lem-finite-sum-laws` claim 4 only for the real sequence $k\mapsto|f([k])|^2$. No claim was
   weakened; the correction removes three dependencies whose hypotheses did not match the use.

## Inventory and dependency levels

Every item carries `design_row: FR-18`, explicit `deps`, provenance and source references, and
the `dependency_level` recomputed by `tools/item-dependency-levels.mjs` (1 + maximum level of
its in-run deps; published suppliers do not raise it). The two local additions carry
`local_addition: true`: `def-counting-inner-product-on-complex-functions-on-z-mod-n` (the
counting inner product presupposed by design row 4) and `def-cyclic-convolution-on-z-mod-n`
(the unnormalised cyclic convolution presupposed by design row 5). No item was weakened or
added beyond these two closure definitions.

| Level | Item |
|---:|---|
| 0 | `lem-orthogonality-of-characters-on-a-finite-cyclic-group` |
| 0 | `def-unitary-discrete-fourier-transform-on-z-mod-n` |
| 0 | `def-counting-inner-product-on-complex-functions-on-z-mod-n` (local addition) |
| 0 | `def-cyclic-convolution-on-z-mod-n` (local addition) |
| 1 | `thm-finite-fourier-inversion` |
| 1 | `thm-finite-parseval-and-plancherel` |
| 1 | `lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product` |
| 1 | `lem-dft-squares-to-reflection-and-has-fourth-power-identity` |
| 1 | `cex-linear-and-cyclic-convolution-are-not-the-same-without-zero-padding` (B) |
| 2 | `def-unnormalised-engineering-dft-and-conversion` |
| 2 | `ex-unitary-dft-for-n-equals-one-and-two` (B) |
| 3 | `lem-radix-two-even-odd-dft-factorisation` |
| 3 | `ex-cyclic-convolution-via-the-dft` (B) |
| 4 | `def-recursive-radix-two-fast-fourier-transform` |
| 5 | `thm-radix-two-fft-correctness` |
| 5 | `thm-radix-two-fft-arithmetic-complexity` |
| 5 | `cex-radix-two-recursion-does-not-directly-apply-to-odd-length` (B) |
| 6 | `rem-cooley-tukey-factorisation-for-composite-lengths` |
| 6 | `ex-four-point-radix-two-fft` (B) |

The B page's five leaves are the design's B1–B5 (four `ai-generated` statements with
`generation.role: example`/`counterexample`, one `literature-derived` at B3), and no B item is
a dependency target of the A page or of any other item.

## Dependency and prerequisite verification

Published suppliers were opened and their statements (and, for the load-bearing ones, their
argument routes) were checked against the use declared here. Key checks:

- **`ex-pontryagin-dual-of-a-finite-cyclic-group`** (FR-15, published): every continuous
  character of the presented group $\mathbb Z/N$ is $\chi_k([m])=\exp(2\pi ikm/N)$ for a
  unique $k\in\mathbb Z/N$, with no choice of generator; the item is choice-free. It supplies
  exactly the character family and the well-definedness of $e^{-2\pi ikx/N}$ used in the DFT
  definition and in the radix-two splitting.
- **`thm-kernel-and-fibres-of-complex-exponential`**: $\ker\exp=2\pi i\mathbb Z$ and
  $\exp z=\exp w$ iff $z-w\in2\pi i\mathbb Z$; this is the fact behind the coincident case of
  the orthogonality sum and the $N$-periodicity of $k\mapsto e^{-2\pi ikx/N}$.
- **`lem-power-difference-factorisation`**: $b^n-a^n=(b-a)\sum_{k<n}a^kb^{\,n-1-k}$; the
  finite geometric sum in the orthogonality lemma, with the ratio-$1$ case split off first.
- **`lem-finite-sum-reindexing-and-fubini`** (published, audited): bijective reindexing,
  splitting over disjoint unions and the finite Fubini rule for commutative-monoid sums; the
  workhorse for inversion, Parseval, convolution and the radix-two partition.
- **`def-function-space`** ($F^X$ and $F^n$), **`def-inner-product-space`** (linear-first
  convention) and **`def-real-and-complex-inner-product-space`**: the ambient space and the
  axioms against which the counting pairing is declared an inner product.
- **`lem-finite-sum-laws`** claims 2 and 4: $\sum_{k<n}\lambda=n\lambda$, and a finite sum of
  nonnegative reals vanishes only if every term does; used for the constant-sum value and for
  definiteness of the counting inner product.
- **`def-rational-power` / `lem-rational-power-laws`**: $N^{-1/2}$ is defined for $N>0$ and
  $N^{-1/2}\cdot N^{-1/2}=N^{-1}$; the normalisation bookkeeping in inversion, Parseval and
  the convolution law.
- **`def-asymptotic-resource-comparison`** defines $f=O(g)$ for $f,g:\mathbb N\to[0,\infty)$
  without any machine model requirement, and **`def-logarithm-to-a-base`** supplies
  $\log_2(2^m)=m$; together they turn the explicit bound $T_m\le2m2^m$ into
  $T_m=O(m2^m)$.
- **`thm-recursion`** (published, owner-authorized bounded repair review) and
  **`def-bounded-reachability-recursion`** (read as the in-library precedent for a recursive
  algorithm definition) support the recursive definition of the FFT family.
- **`def-matrix-product-and-identity-matrix`**, **`thm-finite-fourier-inversion`** and
  **`lem-dft-squares-to-reflection-and-has-fourth-power-identity`** back the $N=1,2$ matrix
  example; **`cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`** supplies
  $e^{-\pi i}=-1$, the twiddle half-turn in the radix-two step.
- **No proof path reaches an in-run batch.** The two `requires` edges into
  `bochner-inversion-and-plancherel-on-lca-groups` (batch 26) and
  `pontryagin-duality-for-locally-compact-abelian-groups` (batch 27) are page-scope interface
  edges recorded as `open` in the cross-batch input; no FR-18 item declares a dep on any
  batch-26/27 item, so no undeclared in-run supplier is consumed.
- **Choice.** No batch-28 item declares the Axiom of Choice or Dependent Choice, and no
  scaffolded item has a choice-using route: the construction is finite and explicit. All 34
  published dependency ids on the pair were scanned and none lists `def-axiom-of-choice`,
  `def-dependent-choice` or `def-countable-choice` among its own deps. The FR-15 page note that
  the *circle* example is recorded under countable choice does not attach to the finite cyclic
  example used here. The existing in-run FR-16/FR-17 pages carry their own AC/DC contracts;
  none of that strength is imported, since nothing here depends on them.

## Checks actually run (2026-10-04)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-28.pages.json`
  → `19 item(s), 0 normalized, 0 error(s)`; whole-run form over all 30 manifests
  → `290 item(s), 0 normalized, 0 error(s)` at first run and `365 item(s), 0 normalized,
  0 error(s)` after concurrent sibling batches (2, 3, 10) landed their inventories.
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-28.pages.json`
  → `19 scoped item(s), 0 error(s), 0 warning(s)`. Whole-run form over all 30 manifests →
  `290 scoped item(s), 1 error(s), 0 warning(s)`, the single error being batch-27's missing
  `thm-unique-left-haar-measure-up-to-scale` (recorded above, not batch-28).
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` → exit 1 with
  `empty scaffold inventory` findings only, all in other not-yet-scaffolded batches (38 page
  rows at first run, 34 after the concurrent sibling batches landed their items); **zero
  findings mention batch-28 or either finite-Fourier page**: no cycle, no label mismatch, no
  duplicate id.
- `node tools/coverage-checklist.mjs ...-batch-28.coverage.json --require-destination` →
  `2 page(s), 46 harvested result(s), 0 error(s), 1 warning(s)`. The warning is the advisory
  `coverage-low-yield` (13/36 A-page headings included); the declines are individually reasoned
  (each ≥40 characters, no boilerplate), and the yield reflects the large out-of-scope
  numerical-analysis and Gauss-sum content of T §§11–12.
- `node tools/source-fetch-check.mjs --coverage ...-batch-28.coverage.json --stamp` →
  `5/5 source(s) fetch-verified (5 newly stamped)`; check mode later `5/5 source(s)
  fetch-verified` and `5/5 source(s) resolved`. Stamps: Taylor PDF 603921 bytes, sha256_16
  `e85e7a4e882a278d`, 107 pages; MITF HTML 25994 bytes, sha256_16 `e30b7b67c1cdd48e`,
  12371 text chars; EW PDF 1024475 bytes, sha256_16 `c8e8b3e47226ca27`, 171 pages. The full
  texts were read directly (Taylor §11 PDF pp. 86–100 and §12 to p. 100 via text extraction;
  MITF headings 1–4; EW C.1–C.3 through Example C.14 and Lemmas C.15–C.16).
- `node tools/url-sweep.mjs --coverage ...-batch-28.coverage.json --out ... --fail-on-dead` →
  `3/3 live; 0 failed`.
- `node tools/source-backing.mjs --coverage ...-batch-28.coverage.json --liveness ...` →
  `15 authored result(s) across 1 file(s), every one still backed by an openable source or
  documented alternative argument`, exit 0.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30` →
  refreshed; batch 28 is `reviewed`, the two declared page edges carry exactly the two `open`
  reviews from `...-batch-28.cross-batch-dependencies.json`, and `orphaned_reviews` is empty.
  The `--require-reviewed` form still reports the other 18 batches without inputs, the expected
  mid-scaffold state.
- `node tools/manifest-integrity.mjs --run frontier-39-analysis-30` → `60 page(s) owed,
  60 in the manifests; no scope drift`.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (no cycle, no forward
  reference, no unresolved id, no page over the cap; planned pages without item lists are the
  expected Step-4-era state).
- `node tools/extcheck.mjs` → exit 0; the only row is a pre-existing published
  `unproved-on-published` warning on unrelated pages, none in this batch.
- `node tools/step1-decisions.mjs record` × 19, once per item, in dependency-level order
  (levels 0,1,2,3,4,5,6 as tabled), every record `ready`, owner `false`, with the examined
  dependency list and the evidence above; after the item-8 complex-sum correction the 17
  affected records were re-recorded against the final bytes (the two unchanged records,
  `def-unitary-discrete-fourier-transform-on-z-mod-n` and
  `def-cyclic-convolution-on-z-mod-n`, were left intact). Then
  `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` → 290 ready of 290
  batch-28 items at first run, and after the sibling batches landed, 290 ready of 365 run
  items, `closed: false` only through the sibling `Readiness record missing` /
  `Empty scaffold inventory` rows, **no batch-28 row**.

## Hash currency and concurrent siblings

The readiness records were written only after the last manifest edit and the last coverage
stamp; the manifest and coverage are frozen at the bytes hashed by those 19 records, and
`step1-decisions check` reports all 19 current (no "Item or dependency changed" row). Editing
any item statement, deps list or stamped coverage below would invalidate exactly the
transitive consumer records and require re-recording them before the Step-1 gate. The
whole-run state at the final check is the expected mid-scaffold one: 365 run items are
declared (several sibling batches landed inventories while this batch was being built; their
readiness records were still being written), 34 page rows are still empty scaffolds, batch 27
has the one unrelated dangling-dep error recorded above, and the frontier ledger lists batch
28 as `reviewed` with its two `open` interface edges.

## Escalations and unresolved uncertainty

- **No escalation is raised by batch 28.** The complete local closure fits on the A page
  (14 of at most 100 items), every prerequisite is published or locally scaffolded in order,
  and no selected pair or cross-batch placement needed changing.
- **Open interface edges (recorded, not a defect).** The two page edges into the in-run
  FR-16/FR-17 scaffolds stay `open` until Step 3 authors those items; since no FR-18 item
  consumes them, they cannot block authoring or mathematical closure of this pair. If a later
  reader decides the pair should instead be *derived* from the LCA theory, that would be a
  scope change for the owner, not a repair to this scaffold.
- **Largest authoring obligation (recorded, not a scaffold failure).** The radix-two
  correctness and complexity items (10–13) carry the full recursive-algorithm definition,
  including the well-definedness/periodicity induction and the explicit operation model. The
  design assigns these as proof work; the strategies state the exact routes (MITF §4 for the
  even/odd form; Taylor §12 for the mirror form and the cost accounting) so Step 3 does not
  substitute a numerical-stability or bit-complexity claim for the counted model.
- **Published defects:** none was established in the suppliers used. The examination here is
  statement-level plus the declared argument routes (the items named above); it is not an
  independent audit of those published proofs, and any later finding must go to the canonical
  ledger.


## Owner follow-up on the historical batch-27 dependency report

The earlier whole-run content-policy observation in this note predates the owner correction to batch 27. The bump lemma now declares the published supplier `thm-uniqueness-of-left-haar-measure-up-to-scale`; its owner readiness record was refreshed. The prior missing-supplier error is resolved, pending the full Step 1 gate on the stable run manifests.

## Current Step 3b closure audit — 2026-10-05

The 19 B28 items were independently re-audited in task dependency order. The
current B28 A/B scope remains sufficient; the two direct in-run page prerequisites
are now complete (batch 26: 26/26 items; batch 27: 24/24 items), and their rows in
`frontier-39-analysis-30-batch-28.cross-batch-dependencies.json` are `verified`.
They remain page-context edges only: no B28 item declares an item-level dependency
on either pair. Manifest and current item frontmatter `deps`, `justified_by`, and
`forward_refs` agree for all 19 items.

Two proof presentations were repaired without changing their statements. The
orthogonality facts in `lem-dft-squares-to-reflection-and-has-fourth-power-identity`
and `thm-finite-fourier-inversion` now distinguish the fixed frequency parameters
from the dummy summation index and identify the chosen standard representative
before using it in an exponential. The tagged state definition in
`def-recursive-radix-two-fast-fourier-transform` is the live well-typed version:
each state carries a map `F_m -> F_m`, so the level-`m` transition is total and
returns a map `F_{m+1} -> F_{m+1}`. The three stale proof-contract quotations to
that current Definition were refreshed; no outside-B28 consumer exists.

The recorded mixed-radix remark retains its designed `proved_here: false`
status. Its source record now includes the primary Cooley–Tukey paper, pp. 297–298,
equations (3)–(8), which supports the general composite split `N=r_1 r_2` and
two-stage Fourier-sum evaluation. The complete five-page article was fetched as
358,294 bytes (SHA-256
`8fe5d32dcf08c01f9168a71e3fea746308ba465d0b4d0ef95e7f4f2af300e282`) and read;
no local proof was added and no arbitrary-length complexity bound is claimed.

All 19 Step 3b decisions are now current and closed (13 `accept`, 6 `repaired`,
including the existing owner-held complexity repair). Final focused checks:
`proof-layout` 19 items / 65 steps / 0 defects; `proof-contract --strict` 19/19 / 0
errors / 0 warnings. No tests or workflow gates were run.
