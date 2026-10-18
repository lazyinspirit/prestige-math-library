# Batch 47 authoring notes — Affine Current Algebras, Virasoro, and Sugawara

## Scope and plan comparison

The current canonical row in `research/plan-spec.json` is PA-16-A, order
2908, in `quantum-algebra-and-representation-theory`. It requires both
`algebraic-representation-and-tensor-symmetry-map` and
`the-weyl-kac-character-formula`, and its `items` array is empty because the
Step-1 item inventory is to be supplied by this batch. The generated batch
manifest agrees on pair identity, category, title, order, companion, and both
required pages.

The historical PA-16 contract in
`research/physics-algebras-planning-2026-10-17/proposed-pages.json` contains
three A-page obligations: reuse the loop central extension with its residue
cocycle convention; define Virasoro and highest-weight conditions; and give
Sugawara modes with the critical level excluded and central charge normalized.
Its B-page obligation is a worked example/failure-case companion. I preserved
all four obligations. The blank canonical `items` array is treated as an
unwritten Step-1 inventory, not a scope deletion. The current plan additionally
requires the Weyl–Kac page whereas the historical PA-16 design lists only the
algebraic-representation page in its navigation prerequisites; the plan
controls, so the A-page draft retains both required pages and the B-page draft
retains its dependency on the A-page companion.

The published affine supplier named by the design is in fact
`def-untwisted-affine-central-extension`; its current body uses the residue
cocycle and the long-root-square-2 invariant form, and its loop-only central
extension does not include the degree derivation. The separate published
`def-degree-derivation-and-full-untwisted-affine-algebra` uses
`[d,x_m]=m x_m`; the positive-energy definition below defines its energy
operator from the grading, so its mode convention is `[E,x_m]=-m x_m`. This
agrees with `E=-d` when the degree derivation is adjoined. No degree derivation
is silently added to the current algebra.

The formal Virasoro convention is fixed as
`[L_m,L_n]=(m-n)L_(m+n)+(c/12)(m^3-m)delta_(m+n,0)`. The affine convention is
`[x_m,y_n]=[x,y]_(m+n)+m delta_(m,-n)B(x,y)K`, with `B` normalized by long
roots of square 2. These agree with the full-text source conventions after
restricting `B` to a compact real form, where it is negative definite.

## Inventory and item dependency levels

The final inventory has 18 items: 15 A-page items and 3 B-page examples or
counterexamples. Dependency levels were recomputed from the final direct
`deps` arrays. A level is zero without an in-run supplier; otherwise it is one
plus the maximum in-run supplier level. Published suppliers remain at level
zero for scheduling. The manifest orders in-run suppliers before consumers,
including the cubic-cocycle lemma before the Virasoro definition it justifies.
The final levels are:

| Level | Items |
|---:|---|
| 0 | `def-witt-algebra`, `def-positive-energy-affine-module`, `lem-adjoint-casimir-is-positive-scalar` |
| 1 | `lem-witt-cubic-cocycle-is-a-2-cocycle`, `lem-witt-central-cocycles-are-cubic`, `def-virasoro-algebra`, `def-dual-coxeter-number-for-normalized-form`, `def-positive-energy-unitary-affine-module`, `lem-sugawara-quadratic-modes-well-defined` |
| 2 | `def-virasoro-algebra`, `def-sugawara-modes`, `lem-irreducible-affine-module-has-irreducible-ground-space` |
| 3 | `def-virasoro-highest-weight-module`, `lem-sugawara-mode-one-commutator`, `cex-critical-level-sugawara-formula-undefined` |
| 4 | `lem-sugawara-modes-act-on-currents` |
| 5 | `thm-sugawara-modes-satisfy-virasoro` |
| 6 | `ex-sl2-level-one-sugawara-central-charge`, `ex-sl2-level-zero-trivial-sugawara` |

The A-page proof covers the compact, irreducible, positive-energy unitary module
regime from Wassermann's complete proof, with nonnegative integral level. The
definition fixes the normalized Sugawara modes for restricted affine-current
modules at any noncritical complex level. The broader algebraic assertion in
the design—that the same modes satisfy Virasoro on every smooth/restricted
module at every noncritical complex level—is not asserted ready: the inspected
Ben-Zvi–Frenkel treatment states that extension but refers to Kac's calculation,
and the complete local normal-ordering calculation for arbitrary modules is
not supplied here. Owner escalation: add a proved A-page item
`lem-sugawara-commutator-on-all-restricted-modules` on the current modes,
normal-order boundary terms, and Casimir contraction; then let a general-level
Virasoro theorem consume that item. No arbitrary-complex-level module theorem,
unitarity, or integrability claim is inferred from the unitary theorem below.

## Cross-pair prerequisite status

`algebraic-representation-and-tensor-symmetry-map` is the exact unresolved
required page supplier owned by batch 32. Its page and item bodies are absent
from the current workspace snapshot. The local affine definitions use the
published Lie-representation supplier
`def-representation-of-a-lie-algebra`; this does not establish or quote the
missing page's actual planned tensor/symmetry interfaces. The page-level
requirement therefore remains unresolved for all PA-16 page placement and
readiness claims. No source excerpt, proof, or acceptance is attributed to
batch 32. The exact expected check at reconciliation is that the actual page
body supplies its declared algebra/module interface and that any tensor action
or symmetry convention used by a PA-16 consumer matches the actual statement.

`the-weyl-kac-character-formula` is present as a published A page. I inspected
its theorem, proof, and formal-completion conventions. It applies to a dominant
integral highest weight for a finite symmetrizable GCM, and its character
identity is formal; this does not prove a Virasoro or Sugawara relation. The
current PA-16 items do not import the character formula into the Sugawara
proof. Both page records retain it as the plan-required navigation supplier.

## Sources and source-resolution history

The source locators, supported item IDs, item-by-item dispositions, retrieval
history, and `source-fetch-check --stamp` results are recorded in
`research/non-ml-math-remaining-81-2026-10-18-batch-47.coverage.json`.
Wassermann's complete Chapter III §2 and §§5–6 were read through the unitary
positive-energy hypotheses, the quadratic mode formula, the weight-one current
commutator, the central-residue argument, and the central-charge calculation.
The source's normal-order boundary calculation is expanded into explicit
mode-index cases in the local `lem-sugawara-mode-one-commutator`; the source
conclusion is not used as a substitute for that proof. The local ground-space
argument is generic for simple $\mathfrak g$; Wassermann's Chapter III §4
`SU(N)` case is a comparison only, not the source of the generic assertion.
Nozaradan's Virasoro mode convention and central term were read in §2.7.1.
Ben-Zvi–Frenkel's §3.1–3.3 was read for the general noncritical-level formula,
mode convention, smooth-module statement, and critical-level boundary; its
proof route cites Kac, so it supports scope and normalization only, not the
local proof. Ginsparg's §9.2 was read for the current OPE, Sugawara
normalization, central charge, and the level-one `SU(2)` check; the local proof
does not rely on its “straightforward to check” assertion. Peter Haine's complete
12-page *The Segal–Sugawara Construction* notes were read in §§2.1–2.3 and
3.0.1–3.3.6 for the restrictedness convention, local finiteness, Casimir
normalization, and general theorem statement. Its commutator lemma cites Kac,
so the broader claim remains deferred rather than treated as proved.

A separate retrieval of Victor Kac's publicly posted `lect.pdf` returned HTTP
403. The recovery search found the full Wassermann and Ben-Zvi–Frenkel texts
already inspected for this batch, so no further retrieval retries were needed
for the restricted unitary theorem. Wassermann supplies a complete proof in
that regime; Ben-Zvi–Frenkel states the smooth-module extension but refers its
proof to Kac. The missing arbitrary-complex-level proof remains an owner
escalation recorded under `source_resolution` in the coverage evidence. The
failed source is neither marked dropped nor used as evidence.

## Scoped checks and readiness

Final scoped results:

- `node tools/tsx-run.mjs tools/author-check.mts non-ml-math-remaining-81-2026-10-18 47`: pass. This covered precheck (13 proof-bearing items), rendercheck (20 assigned item/page files), item content policy (18 items), and strict proof contracts (18/18).
- `node tools/proof-layout.mjs` on all 18 assigned items: pass, 29 steps, 0 defects.
- Batch-local dependency recomputation and manifest/frontmatter comparison: pass, 18 items, levels 0–6, 0 errors. Focused `depcheck` over the 18 items and their dependency closure: pass, 731 items and 319 pages checked, 0 errors or warnings.
- `source-fetch-check --stamp`: pass, 8/8 page-source records fetch-verified. Haine's 12-page PDF was the one newly stamped source; the other seven stamps were reused. `coverage-checklist --require-destination`: pass, 2 pages, 28 harvested results, 0 errors or warnings.
- An inline finite check of the normalized $\mathfrak{sl}_2$ adjoint Casimir produced $4I$ on the basis $(e,f,h)$; it also verified $c(1)=1$, $c(0)=0$, and the critical denominator at $k=-2$ is zero. The first scratch matrix attempt placed the $[f,e]=-h$ entry in the wrong row; after correcting that transcription, the final matrix encoding used the stated basis order and passed.

One intermediate `author-check` attempt hit a transient `ENOENT` while the repository-wide content-policy inventory read the unassigned item `thm-it-quantum-relative-entropy-joint-convexity-finite`; an immediate rerun passed all four author-check gates. No file outside batch 47 was changed.

Run-wide and readiness blockers:

- `node tools/item-dependency-levels.mjs check --run non-ml-math-remaining-81-2026-10-18` fails on unassigned pages whose inventories are still empty, duplicate item IDs `lem-it-quantum-relative-entropy-support-regularization`, `lem-it-quantum-relative-entropy-isometric-invariance`, and `thm-it-holevo-measurement-bound` in batches 21/22, and pre-existing level mismatches outside batch 47. The focused batch-local check above is clean.
- `node tools/batch-dependency-levels.mjs check --run non-ml-math-remaining-81-2026-10-18` stops at the duplicate `lem-it-quantum-relative-entropy-support-regularization` before it can compare the shared run digest. The shared `batch-dependency-levels.json`, owner/engine state, other batches, and shared plans were not edited.
- Read-only autopilot status remains at `1-scaffold`, with 16/81 covered, no writers in flight, and the same duplicate-item prerequisite blocker.
- I attempted `node tools/step1-decisions.mjs record` for `def-witt-algebra` as `escalated`, with its direct supplier and both A-page required-page IDs in the examined dependencies. The run loader aborted before writing with `Duplicate item lem-it-quantum-relative-entropy-support-regularization`. The same loader prevents the remaining batch-47 records; no Step 1 readiness files were written. All 18 items require an escalated page-readiness decision because the required batch-32 body `algebraic-representation-and-tensor-symmetry-map` is absent. The broader arbitrary-complex-level Sugawara theorem also remains an owner escalation as described above.

The mathematical drafts, pages, contracts, source evidence, coverage, and local dependency inputs are prepared for reconciliation. These records do not constitute independent approval.
