# Frontier 38, owner 30 — batch 11 scaffold notes

Run `frontier-38-owner-30`, role beta, batch 11. One owned A/B pair in
`representation-theory`: A `peter-weyl-theory-for-general-compact-groups`
(order 510.073, **17 items**) with B
`peter-weyl-theory-for-general-compact-groups-examples` (order 510.074,
**7 items**). Read before construction: `AGENTS.md`, `CLAUDE.md`, `SCHEMA.md`,
`WORKFLOW.md`, `briefs/beta-scaffold.md`, the generated task
`research/frontier-38-owner-30-beta-11.task.md`, the complete RG-22 design in
`research/plan-representation-theory-groups-track.md` (L1643–L1685 and the
RG-22 rows of the source ledger at L2338 and L2473–L2477), the plan-spec
entries 510.073/510.074, the applied Step-1 drift review section
`### peter-weyl-theory-for-general-compact-groups`, the run's binding
`research/frontier-38-owner-30-owner-authoring-direction.md`, and the current
batch-10 manifests/records that supply the in-run circle input.

Written by this batch only: `research/frontier-38-owner-30-batch-11.pages.json`,
`research/frontier-38-owner-30-batch-11.coverage.json`, this notes file,
`research/frontier-38-owner-30-batch-11.cross-batch-dependencies.json`, and the
24 `research/frontier-38-owner-30-step1-<item>.json` readiness records. No
published content, shared plan, engine state or verdict was edited; the
unified cross-batch ledger was refreshed only through
`tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`.

## Scope and plan comparison

`research/plan-spec.json` entries 510.073 (A) and 510.074 (B) match the
manifest on `id`, `kind`, `category`, `title`, `order`, `companion` and
`requires` (including `character-groups-and-elementary-lca-duals` on the A
page). The plan's item inventories for both pages are empty shells, so the
design's RG-22 table is the entire item source; all 11 design A items and all 4
design B items are preserved verbatim in id and claim, in design order, with
10 local prerequisite items inserted before their consumers (7 on A, 3 on B;
inventory below). No result was dropped or weakened, no page split is required
(17 and 7 items against the hard 100-item cap), and no selected pair changed.

Recorded design/plan observations and reconciliations (the plan controls; no
scope change):

1. **Plan adds the LCA-dual page edge; the design's RG-22 `Requires` omits it.**
   The applied drift review (`### peter-weyl-theory-for-general-compact-groups`)
   added `character-groups-and-elementary-lca-duals` (order 510.06501, batch
   10, a lower-order in-run page) because the circle companion expressly cites
   the elementary abelian dual computation. The manifest keeps the edge and the
   obligation is discharged at item level: the batch-11 circle example declares
   three batch-10 items as `deps` (see the cross-batch section). No Pontryagin
   biduality edge is introduced, and no item of either page asserts that the
   whole dual is countable.
2. **Design's third treatment is not recoverable and is not claimed as read.**
   The design's `Source backing read` for RG-22 lists Colojoară–Gheondea,
   Chapter 3, pp. 65–90. The prior run's batch-10 record already documents that
   the ResearchGate copy of that book was not recovered for the Ch. 2 rows; this
   batch does not restart or repeat those attempts and does not describe the
   book as read. The pair is instead backed by **two verified independent
   treatments plus two supporting ones**: Kowalski (complete 338-page
   author-hosted PDF, Ch. 5 §§5.1–5.5, Ch. 3 Example 3.4.15, Ch. 7 §§7.2–7.3),
   Vogan (complete 12-page author-hosted PDF), Tao's author-hosted 254a Notes 3
   (separation/spectral argument, Theorems 6–7) and Teleman's author-hosted
   60-page lecture notes (§§19.4–19.14, 22.6). This is recorded as a source
   uncertainty for Step 3/5, not as a proof shortcut; the two-treatment rule is
   met by Kowalski + Vogan alone.
3. **Design proof route preserved; separation is the local spectral argument.**
   The design's hard proof plan ("starting from RG-21 compact convolution, use
   nonzero spectral subspaces to separate distinct points, then apply the
   inherited complex Stone–Weierstrass theorem") is implemented directly:
   `lem-compact-convolution-operators-commute-with-right-translations` →
   `lem-finite-rank-spectral-pieces-of-compact-convolution` →
   `lem-compact-group-matrix-coefficients-separate-points` →
   `thm-uniform-peter-weyl-density`. Orthogonality + uniform density then give
   the L² basis. A page 14 in the ledger (Kowalski Lemma 5.4.3) is deliberately
   not consumed; it is disposed as out-of-scope in the coverage harvest.
4. **Parseval/inversion modes are stated precisely.** The design asks for
   "finite spectral sums approximate continuously or in L² in the source's
   stated modes". The corollary claims (a) the Parseval/Plancherel identities,
   (b) convergence of the spectral sums to `f` in L² for every `f ∈ L²(K)`,
   and (c) exactness for finite coefficient combinations. It does **not** claim
   uniform convergence of partial sums for arbitrary continuous functions;
   uniform approximation of arbitrary continuous functions is separately
   supplied by the density theorem. This is a precision adjustment, not a
   weakened claim relative to the sources.
5. **Regular-representation convention clarified.** With the library's matrix
   coefficient convention `c_{v,w}(k)=⟨π(k)v,w⟩`, the coefficient block `M_π`
   is `H_π ⊠ H̄_π` as a `K×K`-representation: the **right** regular action is
   `d_π` copies of `π`, the **left** regular action is `d_π` copies of the
   conjugate `π̄`; since `π ↦ π̄` is a bijection of the dual with
   `d_{π̄} = d_π`, the left regular representation is also isomorphic to
   `⊕̂_π d_π π`. The design's phrase "left regular is `⊕̂ (dim π) π`, with the
   right action on the dual factor" is therefore realized up to exchanging
   which regular action carries the conjugate, a convention difference only;
   the recorded statements use the explicit two-sided form so that no
   reader has to guess the convention.
6. **Design harvest attribution corrected for the profinite example.** The
   design's H4 row attributes `ex-peter-weyl-for-a-profinite-group` to Kowalski
   §5.5; Kowalski's Chapter 5 has no profinite-group treatment. The example's
   class of groups and its motivation are taken from Vogan pp. 1–2 (profinite
   Galois groups, `Z_p`, `GL(n,Z_p)`), and the factorization lemma is proved
   locally from published library suppliers. The noncompact-failure example
   follows Kowalski §3.4.3 Example 3.4.15 (regular representation of `R` has no
   irreducible subrepresentation) and §7.2–7.3 (direct integrals), which is
   what the design's "source's regular representation of R" describes.

## Inventory and dependency levels

A page `peter-weyl-theory-for-general-compact-groups` (order 510.073), in
manifest order, `dependency_level` in brackets:

| # | item | kind | level |
|---|---|---|---|
| 1 | `def-unitary-dual-of-a-compact-group` | definition | 0 |
| 2 | `def-representative-function-on-a-compact-group` | definition | 0 |
| 3 | `lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations` | lemma | 0 |
| 4 | `lem-representative-functions-form-a-self-adjoint-translation-invariant-algebra` | lemma | 1 |
| 5 | `lem-compact-convolution-operators-commute-with-right-translations` | lemma | 0 |
| 6 | `lem-finite-rank-spectral-pieces-of-compact-convolution` | lemma | 1 |
| 7 | `lem-compact-group-matrix-coefficients-separate-points` | lemma | 2 |
| 8 | `thm-uniform-peter-weyl-density` | theorem | 3 |
| 9 | `def-normalized-irreducible-matrix-coefficient-basis` | definition | 1 |
| 10 | `thm-l2-peter-weyl-orthonormal-basis` | theorem | 4 |
| 11 | `def-hilbert-direct-sum-of-unitary-representations` | definition | 0 |
| 12 | `lem-l1-action-of-a-unitary-representation` | lemma | 0 |
| 13 | `lem-a-nonzero-unitary-representation-of-a-compact-group-has-a-finite-dimensional-subrepresentation` | lemma | 4 |
| 14 | `thm-regular-representation-peter-weyl-decomposition` | theorem | 5 |
| 15 | `thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely` | theorem | 5 |
| 16 | `cor-parseval-and-fourier-inversion-for-compact-groups` | corollary | 5 |
| 17 | `cor-each-vector-in-a-compact-representation-has-countable-isotypic-support` | corollary | 6 |

B page `peter-weyl-theory-for-general-compact-groups-examples` (order 510.074):

| # | item | kind | level |
|---|---|---|---|
| 1 | `lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients` | lemma | 0 |
| 2 | `ex-peter-weyl-for-a-profinite-group` | example | 5 |
| 3 | `lem-continuous-finite-dimensional-representations-of-a-product-of-finite-groups-factor-through-a-finite-subproduct` | lemma | 1 |
| 4 | `ex-peter-weyl-for-an-infinite-product-of-finite-groups` | example | 6 |
| 5 | `ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality` | example | 5 |
| 6 | `lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero` | lemma | 0 |
| 7 | `cex-compact-peter-weyl-is-not-a-direct-sum-decomposition-for-noncompact-regular-representations` | counterexample | 1 |

The 11 design A items and 4 design B items retain their exact IDs. The ten
local items are necessary closure: items 1, 3, 5, 11, 12 (A) and 1, 3, 6 (B)
are stated prerequisites, and A 6, 7, 13 are the design's hard separation and
existence steps made into lemmas. Every item records an explicit `deps` array
and a complete proof strategy naming the exact supplier statements; no useful
claim was weakened and no inventory was padded.

## Dependency and axiom audit

- **Separation chain.** Published `lem-compact-convolution-operators-are-hilbert-schmidt`
  (RG-21, published 2026-10-02) gives `C_φ` Hilbert–Schmidt and compact for
  `φ ∈ L²(K)`. The new commutation/adjoint lemma proves
  `C_φ ρ(g) = ρ(g) C_φ` and `C_φ* = C_{φ*}` from right/inversion invariance; the
  spectral-piece lemma applies the published compact-self-adjoint spectral
  theorem (`E_λ` finite dimensional, `L² = ker ⊕ ⊕̂ E_λ`). The separation lemma
  uses a symmetric continuous cutoff `φ` supported inside a symmetric `U` with
  `g ∉ U·U`, `ψ = φ*φ`, and derives `ρ(g)ψ = ψ` from the supposition that
  `ρ(g)` is trivial on every `E_λ`; evaluating at `e` contradicts `ψ(e) > 0`,
  `ψ(g) = 0`. This is exactly the argument of Tao Notes 3, Theorem 7 (and
  Kowalski Exercise 5.4.6(1)); it needs no classification of characters.
- **L² chain.** Orthonormality is the published Schur orthogonality in the
  library's `⟨π(k)v,w⟩` convention with the `1/d_π` constant; the `√d_π`
  normalization is checked in both definitions. Completeness uses complete
  reducibility of finite-dimensional compact-group representations, uniform
  density, `C(K) ⊂ L²` density and the published Parseval equivalences. The
  closed span therefore contains `R(K)` and is dense; no separability of `K`
  or countability of the dual is used.
- **Decomposition chain.** The existence lemma (Kowalski 5.4.7) uses the L¹
  action, uniform approximation by coefficients and the finite-dimensional
  translate span; Zorn plus complete reducibility gives the discrete Hilbert
  sum; the published isotypic projections identify the isotypic components.
  Countable support of a single vector is proved directly from the square sum,
  with no claim that the dual is countable. This matches the drift review's
  "global irreducible-index countability is not asserted".
- **AC declarations.** `def-axiom-of-choice` is declared on items whose proofs
  invoke AC-dependent suppliers (Haar existence, the spectral theorem's
  Countable Choice, Bochner integration, Zorn, the Lie-group example's AC_ω);
  the separation lemma additionally declares
  `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`
  because the published Urysohn lemma is stated under Dependent Choice and AC
  supplies it. Items whose arguments are choice-free beyond their cited inputs
  say so in the strategy. No item assumes an incompatible axiom, and no
  choice-free claim was silently strengthened.
- **Transitive closure.** A recursive traversal of all 24 items' `deps` plus
  `justified_by` reaches **1750 nodes**: 24 batch-11 items, 6 in-run batch-10
  items, and 1720 published item files. No missing target, no non-published
  target, no `proved_here: false` recorded item, and no path to
  `deferred-set-theory-beyond-choice`. Including `external_refs` (mentions only,
  not prerequisites) the traversal reaches 1759 nodes and 9 recorded choice-
  strength remarks; those nine are reached only through
  `thm-urysohn-lemma`'s `external_refs` and are not logical dependencies of any
  batch-11 item. The traversal is structural; Step 3 must still author and
  re-check every argument and exact supplier use.
- **Critical published interfaces read at statement/proof level** (published
  2026-10-02/09 in earlier runs): `lem-compact-convolution-operators-are-hilbert-schmidt`;
  `thm-spectral-theorem-for-compact-self-adjoint-operators`;
  `cor-orthonormal-eigenbasis-for-a-compact-self-adjoint-operator`;
  `thm-schur-orthogonality-for-compact-groups`;
  `thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional`;
  `thm-finite-dimensional-compact-group-representations-are-completely-reducible`;
  `def-compact-group-isotypic-projection`;
  `thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections`;
  `thm-complex-stone-weierstrass-self-adjoint`;
  `thm-parseval-equivalences-for-a-complete-orthonormal-family`;
  `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`;
  `lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis`;
  `lem-no-small-subgroups-in-a-lie-group`; `ex-unitary-and-special-unitary-lie-groups`;
  `thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity`;
  `cor-l-one-convergence-has-an-almost-everywhere-convergent-subsequence`;
  `thm-urysohn-lemma`; the torus completeness/orthonormality/Parseval items. All
  hypotheses, directions and normalization constants used by this batch were
  checked against those statements; page membership was not used as a proof
  check.

## Cross-batch dependencies

`research/frontier-38-owner-30-batch-11.cross-batch-dependencies.json` has four
rows, all `status: verified` at the current (scaffold) level, and the unified
ledger was refreshed and deduplicated:

- page `peter-weyl-theory-for-general-compact-groups` →
  `character-groups-and-elementary-lca-duals` (the applied drift edge);
- item `ex-peter-weyl-for-the-circle-without-reminting-pontryagin-duality` →
  `lem-unit-circle-is-a-compact-metrizable-topological-group` (compact circle
  model);
- the same consumer → `def-pontryagin-dual-and-compact-open-topology` (name and
  conventions of the unitary/Pontryagin dual);
- the same consumer → `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals`
  (only clause (1), discreteness of the dual of a compact abelian group).

The suppliers are **in-run scaffolded** batch-10 items with closed Step-1
records, not published content; each row records what was checked and states
that author-stage verification of the supplier text is still owed. No other
batch-11 item consumes another batch, and no downstream batch consumes a
batch-11 B-page item (the B page is a leaf).

## Full-text source evidence and harvest

| Treatment | Full text checked | Exact range inspected | Principal support |
|---|---|---|---|
| [Kowalski, *An Introduction to the Representation Theory of Groups*](https://people.math.ethz.ch/~kowalski/representation-theory.pdf) | `source-fetch-check --stamp`: PDF, 1,838,207 bytes, 338 pages, sha256-16 `f63d9c26ec965b9c`, 2026-10-02T17:54:56Z | Ch. 5 §§5.1–5.5, printed pp. 209–242; Ch. 3 §3.4.3 Example 3.4.15, p. 119; Ch. 7 §§7.2–7.3, pp. 287–289 | L¹ action (§5.3), separation and finite-dimensional subreps (5.4.6, 5.4.7), Peter–Weyl and Plancherel (5.4.1, 5.4.8, 5.5.1–5.5.2), circle model (§5.1), failure for `R` (3.4.15) and direct integrals (7.3). |
| [Vogan, *Review of Harmonic Analysis on Compact Groups*](https://math.mit.edu/~dav/compactrev.pdf) | `--stamp`: PDF, 148,075 bytes, 12 pages, sha256-16 `1b4481509b22f146`, 2026-10-02T17:54:58Z | §§2.3–2.17, printed pp. 1–12 | Operator-valued Fourier transform, K-finite algebra (2.12), Fourier inversion (2.13), isotypic projection (2.16), profinite/non-Lie examples (pp. 1–2). |
| [Tao, 254A Notes 3](https://terrytao.wordpress.com/2011/09/27/254a-notes-3-haar-measure-and-the-peter-weyl-theorem/) | `--stamp`: HTML, 730,017 bytes, 67,920 text characters, sha256-16 `8c44354c7b338507`, 2026-10-02T17:54:58Z | §2 through Theorem 7 and Exercise 22; §3 Exercises 20–24 | Theorem 6 (spectral theorem) and Theorem 7 (baby Peter–Weyl separation proof), which is the separation route used here. |
| [Teleman, *Representation Theory*](https://math.berkeley.edu/~teleman/math/RepThry.pdf) | `--stamp`: PDF, 508,871 bytes, 60 pages, sha256-16 `8fe090c881f42922`, 2026-10-02T17:55:01Z | §§19.4–19.14, printed pp. 42–45; §22.6, p. 53 | Independent statement of compact-group Peter–Weyl with the `dim V` normalization, the complete list of `U(1)` irreducibles, and the product-of-compact-groups irreducible classification. |

The coverage file carries **37 harvested rows**: 17 `included`, 5
`already-published`, 5 `inline`, 8 `deferred` (all with resolving destinations:
`induced-unitary-representations-of-locally-compact-groups`,
`direct-integral-decomposition-and-type-i-groups`,
`group-c-star-algebras-and-the-fell-unitary-dual`,
`character-groups-and-elementary-lca-duals`) and 2 `out-of-scope` with specific
reasons (Kowalski Lemma 5.4.3; Tao's Gleason–Yamabe/linear-inverse-limit
structure theory). The A page's low-yield advisory (`11/28` harvested rows
scaffolded) is expected: the design deliberately commissions the coefficients
algebra, density, L² basis, decomposition, Fourier consequences and countable
support rather than the character/class-function and duality developments,
which are deferred to named pages.

## Checks run and actual results

- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-*.pages.json`
  — `803 item(s), 0 normalized, 0 error(s)`, exit 0. Batch-local:
  `24 item(s), 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-38-owner-30-batch-*.pages.json`
  — `803 scoped item(s), 0 error(s), 0 warning(s)`, exit 0. Run on batch 11
  alone it reports the three expected `batch-dependency-missing` messages for
  the batch-10 suppliers, which the whole-run invocation resolves; recorded,
  not a defect.
- `node tools/coverage-checklist.mjs research/frontier-38-owner-30-batch-11.coverage.json --require-destination`
  — `2 page(s), 37 harvested result(s), 0 error(s), 1 warning(s)` (the
  low-yield advisory above), exit 0.
- `node tools/source-fetch-check.mjs --coverage research/frontier-38-owner-30-batch-11.coverage.json --stamp`
  — `6/6 source(s) fetch-verified (6 newly stamped)`; check mode `6/6
  source(s) resolved`, exit 0.
- `node tools/url-sweep.mjs --coverage <batch-11 coverage> --out /tmp/... --fail-on-dead`
  — `4/4 live; 0 failed`, `4 citation decision(s)`, exit 0. (The run-level
  `research/frontier-38-owner-30-url-liveness.json` is written by the whole-run
  gate after every batch lands; it did not exist at this batch's exit, so the
  sweep was run against this batch's coverage with a scratch output.)
- `node tools/source-backing.mjs --coverage <batch-11 coverage> --liveness <scratch> --reharvest-plan <scratch>`
  — `14 authored result(s) across 1 file(s), every one still backed by an
  openable source or documented alternative argument`, exit 0.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0 (note: 289
  planned pages still carry no item lists; expected at scaffold time).
- `node tools/drift-review-check.mjs --run frontier-38-owner-30` — `30 page(s)
  reviewed, 6 spec edit(s) applied, no blocked edges`, exit 0.
- `node tools/manifest-integrity.mjs --run frontier-38-owner-30` — `60 page(s)
  owed, 60 in the manifests; no scope drift`, exit 0.
- `node tools/item-dependency-levels.mjs check --run frontier-38-owner-30` —
  exit 0 after all batch-26 items landed while this batch ran:
  `803 item(s) checked across 60 page(s); maximum level 16`. All 24 batch-11
  labels were recomputed from the whole run and match.
- `node tools/step1-decisions.mjs check --run frontier-38-owner-30` — at this
  batch's first pass the run was `803 items, 776 ready`, the only open work
  being batches 26/27; by final re-check both had recorded, and the check exits
  0 with `803 items, 803 ready`. Every one of the 24 batch-11 records is
  current and no batch-11 item or stale record ever appeared in the work list.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-38-owner-30`
  — first refresh (before batches 26/27 wrote inputs) reported `refreshed and
  deduplicated`, exit 0, and recorded all four batch-11 edges with one review
  each. The final refresh exits 1 with
  `frontier-38-owner-30-batch-27.cross-batch-dependencies.json: invalid review
  or consumer ownership`; that batch-27 input has a single row whose `consumer`
  field is a comma-joined list of item ids instead of one id, which the tool
  rejects. This is outside batch 11's write scope and is reported here for the
  owner/operator. The unified ledger retains batch 11 as reviewed with all four
  edges reviewed; batches 26 and 27 remain unreviewed.
- `node tools/extcheck.mjs` — exit 0 (`OK — every recorded-not-proved statement
  is a cited remark with no proof, and every consequence is marked`); four
  informational `unproved-on-published` lines are pre-existing published
  remarks/theorems, none introduced or edited here.
- Item-file gates (`precheck`, `depcheck`, `fwdcheck`, `rendercheck`,
  `prosecheck`, `depsource`, `pathcheck`) were **not** run at batch scope: the
  item files do not exist until Step 3 authoring, and the scaffold gate replaces
  them with `step1-readiness`, `item-dependency-levels`, `manifest-deps`,
  `content-policy --manifest-only`, `coverage-*`, `extcheck`, `url-liveness`,
  `source-backing` and `source-fetch-check`. This is recorded honestly; no
  item-level gate result is claimed.

## Published findings for the canonical ledger

No defect was found in a published item actually consumed by this batch. The
published suppliers listed above were read at statement/proof level and their
hypotheses, directions and normalizations match the uses recorded here. In
particular `thm-schur-orthogonality-for-compact-groups` uses the same
`⟨π(k)v,w⟩` convention and `1/d` constant that the `√d` coefficient
normalization assumes, and no consumed item is a recorded (`proved_here: false`)
statement. The only source-level uncertainty is the unrecovered
Colojoară–Gheondea treatment recorded in item 2 of the design comparison; it is
a source-coverage matter for Step 5, not a defect in published content.

## Open items for Step 3

1. Author all 24 items, including the ten local lemmas, and re-check each exact
   supplier use; the local separation, spectral-piece, L¹-action, factorization
   and translation-invariance arguments are scaffold strategies, not proofs.
2. Verify the three batch-10 supplier items when they are authored; the
   cross-batch rows are `verified` only at manifest/statement level.
3. Re-verify the source dispositions if a full Colojoară–Gheondea text becomes
   available; the pair does not depend on it.
4. Keep the convention statements (matrix coefficient sesquilinearity,
   `√d_π` normalization, left/right dual factor) synchronized between the item
   files, the manifest and the coverage prose if Step 3 adjusts wording.
