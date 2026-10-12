# Step 3b — pair `signed-quiver-flag-convolution-and-klr-ext-realization` / `…-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha-high / `step3b-pair-signed-quiver-flag-convolution-and-klr-ext-realization-19b7a1bac54cad76`
- Batch: 47. A page `signed-quiver-flag-convolution-and-klr-ext-realization` (order 1829),
  B page `signed-quiver-flag-convolution-and-klr-ext-realization-examples` (order 1832),
  category `representation-theory`.
- Date: 2026-10-10

## Owned IDs and open obligations (entry checkpoint)

A page (4 new items, to author, in this dependency order):

1. `def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators` (scaffold level 23)
2. `thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis` (level 24)
3. `thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations` (level 25)
4. `thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes` (level 26)

B page (2 new items, to author, after the A consumers):

5. `ex-equal-color-quiver-flag-correspondence-is-nilhecke` (level 26)
6. `ex-signed-two-direction-multiedge-quiver-flag-crossing` (level 26)

Open obligations at entry:

- Author all six items and both page files; keep the sealed batch-47 manifest
  statements and IDs; preserve every promised claim; recompute and verify dependency
  levels after any dependency change (`node tools/item-dependency-levels.mjs check --run …`).
- Flagged unfinished direct suppliers (both files absent from disk at entry, both are
  in-run sibling pairs still being constructed; consumers are authored anyway and their
  decisions stay escalated until the supplier file and the actual consuming step are
  reconciled):
  1. `lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus`
     (batch 44, page `equivariant-borel-moore-correspondence-convolution-and-constructible-ext`).
     Consumed by item 1's well-definedness paragraph (smooth vector bundle $X_\nu\to F_\nu$,
     properness of $\pi_\nu$, dimension $d_\nu$) and by item 2 Steps 1 and 3 and item 3
     Steps 2–4 (oriented push–pull calculus on incidence correspondences).
  2. `thm-constructible-six-functors-proper-base-change-and-verdier-duality`
     (batch 41, page `equivariant-constructible-perverse-foundations`).
     Consumed by item 2 Step 2 (closed/open Borel–Moore exact sequence from support
     localization).
- Keep the recorded sign convention: the library's native $\tau$ is the negative of the
  VV generator normalization in the equal-color case; the explicit $\sigma$/$\tau$
  normalizations of the definition are generator normalizations, not orientation changes
  (batch-47 scaffold notes, Finding 1).
- Item 2 must either carry the characteristic-zero freeness route for the published
  CW-stated Euler/Leray–Hirsch inputs through the projective-bundle tower and the free
  cellular model or be escalated rather than weakened (batch-47 scaffold notes, Finding 2;
  Step-3a §3 note 2).
- Write `research/frontier-44-special-representation-examples-28-batch-47.proof-contracts.json`
  and run: explicit-path `precheck`, `rendercheck`, item `proof-layout` (single batched
  run at handoff), `content-policy` (batch manifest), `proof-contract --strict`,
  `item-dependency-levels check`, `manifest-deps`, `coverage-checklist`,
  `source-fetch-check`, `depsource`, and `validate-plan` against `research/plan-spec.json`.
- Record one `record-item` decision per item via `tools/step3-decisions.mjs`; no
  self-review loop for additions that are absent from the immutable pre-author scaffold.

(Checkpoints appended as each item is audited, authored and checked.)

## Checkpoint 1 — `def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators`

- Authored `items/def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators.md`
  from the sealed batch-47 statement: quiver data $(\Gamma,h_{ij},\beta,k)$, the spaces
  $E,G,F_\nu,X_\nu$, the dimension $d_\nu$ (rank computation $\dim F_\nu+\operatorname{rank}
  (X_\nu\to F_\nu)$, internal), $L_\nu=\pi_{\nu!}k[d_\nu]$, the source-first corner
  $Z_{\eta,\nu}$ and opposite-composition product, the geometric generators
  $e_\nu,x_r,[C_{s_r\nu,\nu}],\sigma_r,\tau_r$ with the explicit VV normalization, and the
  intrinsic signed presentation $S_\Gamma(\beta)$ with all relations and grading.
- Convention kept from the scaffold notes (Finding 1): native $\tau$ is the negative of the
  VV normalization in the equal-color case; $\sigma$/$\tau$ are generator normalizations, not
  BM orientation changes. Verified internally that the braid quotient is homogeneous: the
  outer distinct-color crossings contribute $2(h_{ij}+h_{ji})$ and the middle equal-color
  crossing contributes $-2$, matching the correction degree $2(h_{ij}+h_{ji}-1)$.
- Supplier recheck as of this checkpoint: `lem-smooth-flag-incidence-correspondences-…`
  and `thm-constructible-six-functors-…` were written by the sibling runs at 22:57 and their
  statements match the consumed interfaces (smooth vector bundle $X_\nu\to B_\nu$, projective
  $\pi_\nu$, oriented push–pull calculus; the six-functor theorem's support-localization and
  normalized dualizing object). Exact consuming-step reconciliation is repeated at decision time.
- Checks: `precheck --json` status `not-applicable` (definition, no proof phase) with 0
  failures; `rendercheck` OK (frontmatter YAML, no wikilink in math, all KaTeX spans parse).
- Open obligation: `depcheck` currently reports the two `justified_by` targets as unresolved
  because my items 2–3 are not yet on disk; they are authored next.

## Checkpoint 2 — `thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis`

- Authored `items/thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis.md`
  from the sealed statement: the composition action of $\mathfrak A$ on
  $P=\bigoplus_\nu H_G^\bullet(X_\nu;k)[d_\nu]$, the polynomial model
  $H_G^\bullet(X_\nu;k)=k[x_1,\dots,x_m]$, faithfulness, the PBW basis
  $x_1^{c_1}\cdots x_m^{c_m}\tau_we_\nu$, freeness over the first-coordinate polynomial corners,
  and generation by dots and crossings, with the explicit "only relative-position strata" caveat.
- Proof route kept from the derivation: relative-position strata as associated affine bundles
  (internal Gaussian elimination; the $\mathbb F_q$ published theorem is **not** used), even
  Borel–Moore parity and closure-class polynomial bases via six-functor support localization,
  torus-cell localization with matrix units and invertible Euler classes, injective
  $H_G^{\mathrm{BM}}\to H_T^{\mathrm{BM}}$ restriction by the flag-bundle Leray–Hirsch tower
  (with the char-0 fibre basis taken from the free cellular model, as the batch notes require),
  weighted inversion-multiset top coefficient $\pm1$, and triangular generation.
- Supplier reconciliation: both flagged suppliers were authored by their sibling runs at 22:57 —
  `lem-smooth-flag-incidence-correspondences-have-the-required-oriented-push-pull-calculus`
  (vector bundle, smoothness, projectivity, oriented push–pull) and
  `thm-constructible-six-functors-proper-base-change-and-verdier-duality` (support localization,
  normalized dualizing object) — and their statements match the consumed clauses; no escalation
  is needed for missing files. Dependency level recomputed by the tool from the current inputs.
- Checks: `precheck` pass (direct); `rendercheck` OK; `proof-layout` covered in the batched run.

## Checkpoint 3 — `thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations`

- Authored `items/thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations.md`
  from the sealed statement: the equal-color divided difference, the distinct-color formula
  $\tau_r(f)=(x_r-x_{r+1})^{h_{ij}}s_r(f)$, the degrees $0,2,-a_{\nu_r\nu_{r+1}}$, and the
  graded homomorphism $S_\Gamma(\beta)\to\mathfrak A$.
- Convention audit kept: the native $\tau$ is the negative of the VV normalization in the
  equal-color case; $\sigma=(-1)^{h}[C]_{\mathrm{standard}}$ and the extra $(-1)^{h}$ in $\tau$
  cancel so that $\tau$ acts by the positive Euler power — exactly the batch-47 Finding 1
  dictionary, not a silent substitution of VV's or Rouquier's $\tau$ relations.
- Independent checks on the internal computations: the unequal-color Euler class
  $(x_r-x_{r+1})^{h_{ij}}$ from $c_1\operatorname{Hom}(D_a,D_b)=\chi_b-\chi_a$ and
  top-Chern $=$ Euler; the divided difference identities $\tau^2=0$, $\tau x_1-x_2\tau=1$,
  $\tau x_2-x_1\tau=-1$; homogeneity of the braid correction (outer distinct crossings
  $2(h_{ij}+h_{ji})$, middle equal crossing $-2$, matching degree $2(h_{ij}+h_{ji}-1)$).
- Checks: `precheck` pass; `rendercheck` OK; the precheck auto-layered the final step labels
  $(1.1,1.2,1.3,2.1,3.1,4.1,5.1)$, and the canonical form was adopted.

## Checkpoint 4 — `thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes`

- Authored `items/thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes.md`
  from the sealed statement: the unique graded isomorphism
  $S_\Gamma(\beta)\xrightarrow{\sim}\operatorname{Ext}_G^\bullet(\bigoplus_\nu L_\nu,\bigoplus_\nu L_\nu)$
  with the shifted product $a*b=b[n]\circ a$, the corner dictionary Ext degree $n$ ↔ BM degree
  $d_\eta+d_\nu-n$, and the explicit "no semisimplicity, purity, decomposition or finiteness"
  clause.
- Proof route kept: relation theorem gives the map; PBW basis gives surjectivity; intrinsic
  adjacent sorting (dot slides, square removal, braid corrections with fewer crossings) spans
  the quotient, so the triangular geometric basis gives injectivity; product compatibility is
  exactly the cornerwise Ext/BM theorem composed with the product-compatible Yoneda/convolution
  theorem — the comparison with the existing generic KLR presentation is deliberately left to
  the batch-10 consumer, so no cycle is introduced.
- Checks: `precheck` pass; `rendercheck` OK.

## Checkpoint 5 — B examples

- Authored `items/ex-equal-color-quiver-flag-correspondence-is-nilhecke.md` (one-vertex,
  $\beta=2\alpha_i$: $E=\{0\}$, $X_\nu=\mathbb P^1$, $Z=\mathbb P^1\times\mathbb P^1$, divided
  difference, nil-Hecke identities) and
  `items/ex-signed-two-direction-multiedge-quiver-flag-crossing.md` ($h_{ij}=2$, $h_{ji}=1$,
  $\nu=(i,j,i)$: $Q=(u-v)^3$, dimensions $4,5,3$, normalization exponents $2,1$, the nonzero
  native correction $-\bigl[(x_1-x_2)^2+(x_1-x_2)(x_3-x_2)+(x_3-x_2)^2\bigr]$).
- Independent recomputation (written for this dispatch, exact rational polynomial arithmetic):
  the two triple-product operators were composed on 200 random sparse polynomials in
  $\mathbb Q[x_1,x_2,x_3]$ and their difference equals multiplication by the displayed
  correction; the nil-Hecke braid $D_2D_1D_2=D_1D_2D_1$, $D_1^2=0$ and the mixed signs
  $+1/-1$ were verified on random polynomials. (An earlier discrepancy was traced to an
  exponent typo in the *verification script*, not to the scaffold; the corrected script
  passes.)
- Checks: `precheck` pass on both; `rendercheck` initially flagged two multiline display
  blocks, fixed to single-line `$$...$$`; the final batched `proof-layout` run shows 0 defects.

## Checkpoint 6 — pages

- Authored `library/representation-theory/signed-quiver-flag-convolution-and-klr-ext-realization.md`
  (4 items, manifest `requires` preserved) and
  `…-examples.md` (2 examples, `requires` the A page alone); both render.

## Checks actually run (this dispatch, current disk)

- `node tools/tsx-run.mjs tools/precheck.mts <6 item paths> --json`: 6 files, 5 checked, 0 failed
  (the definition is `not-applicable`).
- `node tools/proof-layout.mjs <6 item paths>` (single batched run after the final edits):
  6 items, 25 steps, 0 defects.
- `node tools/rendercheck.mjs <6 items + 2 pages>`: OK.
- `node tools/content-policy.mjs research/…-batch-47.pages.json`: 6 scoped items, 0 errors,
  0 warnings.
- `node tools/proof-contract.mjs research/…-batch-47.proof-contracts.json --strict`: 0 errors,
  0 warnings, 6/6 items checked (30 citation contracts with exact supplier excerpts, 25
  classified derivation entries, full 8-case boundaries).
- `node tools/item-dependency-levels.mjs check --run …`: after correcting the levels the six
  items are clean at 25/26/27/28/28/28 (matching the dispatch order 25–28); the run-wide check
  still reports other batches, including the consumer-side drift noted below.
- `node tools/manifest-deps.mjs research/…-batch-47.pages.json`: 6 items, 0 errors.
- `node tools/coverage-checklist.mjs research/…-batch-47.coverage.json --require-destination`:
  2 pages, 72 harvested rows, 0 errors, 2 `coverage-low-yield` advisories (explained at Step 3a).
- `node tools/source-fetch-check.mjs --coverage research/…-batch-47.coverage.json`:
  8/8 fetch-verified, 8/8 resolved, 0 documented drops.
- `node tools/depsource.mjs --run … --items-file <6 ids>`: 6/6 consumer coverage, 0 unresolved
  (15 deps reach published pages; the remainder are in-run draft-page or same-pair targets).
- `node tools/depcheck.mjs --json`: 0 errors touch any id of this pair or its two pages; the
  repo-wide run still carries 2763 pre-existing errors on other in-flight/unresolved content.
- `node tools/validate-plan.mjs research/plan-spec.json --run …`: no finding names either page
  except the five pre-existing plan-level `redundant-prereq` advisories on the A page's declared
  `requires` (Step-4 reconciliation); the run-level FAIL belongs to four other pages
  (`compact-support-sheaf-calculus-examples`, `logarithmic-hodge-complexes-and-smooth-open-weights`,
  `equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples`,
  `proper-hyperresolutions-and-mixed-hodge-restriction-images`).
- `node tools/frontier-dependency-ledger.mjs refresh --run …`: refreshed and deduplicated.
- `node tools/step3-decisions.mjs check --run … --phase final`: all six owned items closed
  (0 open rows among them; run-wide 393/868 while sibling batches are still in flight).

## Added suppliers

None. No new item, pair or page split was needed; the two suppliers flagged at entry
(`lem-smooth-flag-incidence-correspondences-…` and `thm-constructible-six-functors-…`) were
authored by their sibling runs during this dispatch, and their statements were re-read against
the consuming steps before the decisions were recorded.

## Published concerns (exact ids, evidence, confidence)

1. **Consumer-side dependency-level drift (confirmed, mechanical).**
   `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero` (batch 49,
   `quiver-full-flag-projective-semisimplicity`) is recorded at level 24 but computes to 26 now
   that the corrected levels of the items it consumes are in place; likewise the batch-10
   descendants recorded 27–30 compute two higher. The batch-49/10 owners should update their
   manifest rows; no cross-pair edit was made here.
2. **Plan mirrors (metadata, no scope change).** `research/plan-spec.json` still stores the
   original item deps and machine titles for the six items; the manifest is authoritative and
   the deltas are the documented additions inside the `requires` closure (Step-3a §1, finding 4).
   Step-4 reconciliation.
3. **Plan-level advisories only.** The five `redundant-prereq` advisories on the A page's
   `requires` are the plan's own redundant edges (pre-existing, recorded at Step 3a).
4. No mathematical defect of a published item was confirmed in this dispatch; the earlier
   apparent discrepancy in the multiedge braid identity was traced to an exponent typo in the
   scratch verification script and is retracted.

## Open obligations (handoff)

- None blocking for this pair: all six items are authored, contract-checked, level-corrected,
  and recorded; both pages are authored and registered.
- Item-level receipts can be invalidated if a sibling writer edits any transitive input; the
  engine's pre-gate rehash re-validates them.
- The comparison of the intrinsic presentation with the existing generic KLR definition remains
  the batch-10 consumer's local bridge (owner direction), not a dependency of this pair.
