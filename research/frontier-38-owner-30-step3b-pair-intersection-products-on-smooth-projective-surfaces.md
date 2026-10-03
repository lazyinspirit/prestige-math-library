# Step 3b authoring — `intersection-products-on-smooth-projective-surfaces`

- Run: `frontier-38-owner-30`, batch 26, role alpha-high (step 3b pair authoring).
- A page: `intersection-products-on-smooth-projective-surfaces` (order 895).
- B page: `intersection-products-on-smooth-projective-surfaces-examples` (order 896).
- Direct in-run prerequisite pair inspected: `blowups-exceptional-divisors-and-strict-transforms` (batch 2).
- This record is the working checkpoint and final handoff report for the pair. It is
  not an independent review; Steps 5–8 audit independently.

## Owned IDs and open obligations at entry

A page (9 items):

1. `def-degree-invertible-sheaf-proper-dimension-one` (level 0) — author.
2. `def-divisor-intersection-number-on-smooth-projective-surface` (level 0) — author.
3. `lem-closed-immersion-projection-formula-invertible` (level 0) — author.
4. `lem-euler-characteristic-finite-support-twist-invariance` (level 0, to be
   recomputed: its argument uses item 3, an in-run level-0 supplier, so the level
   becomes 1 and the manifest label is updated) — author.
5. `lem-euler-characteristic-twist-integral-proper-curve` (level 1) — author.
6. `cor-degree-additive-proper-curve` (level 2) — author.
7. `thm-surface-intersection-product-bilinear-and-symmetric` (level 3) — author.
8. `thm-intersection-with-curve-as-degree-of-restriction` (level 3) — author.
9. `lem-blowup-intersection-matrix-at-smooth-point` (level 8) — author; **open
   obligation**: 14 batch-2 blowup suppliers are unfinished at entry (item files
   missing), so the item decision is escalated until supplier and proof use are
   reconciled (exact IDs and consuming steps recorded below).

B page (3 items):

1. `cex-intersection-pairing-needs-cartier-or-cycle-hypotheses` (level 1) — author.
2. `ex-intersection-pairing-on-p2` (level 4) — author.
3. `ex-intersection-pairing-on-blowup-of-p2` (level 9) — author; **open
   obligation**: 8 batch-2 blowup suppliers and one in-batch supplier
   (`lem-blowup-intersection-matrix-at-smooth-point`) unfinished at entry;
   decision escalated until reconciled.

Pages: `library/algebraic-geometry/intersection-products-on-smooth-projective-surfaces.md`
and `...-examples.md` to be created with draft status.

## Unfinished in-run suppliers flagged at entry (exact IDs)

For `lem-blowup-intersection-matrix-at-smooth-point` (batch-2 suppliers, all
`items/` files absent at entry): `def-blowup-scheme-along-ideal`,
`def-exceptional-divisor-blowup`, `thm-blowup-regular-surface-closed-point-regular`,
`cor-blowup-birational-integral-scheme`, `lem-blowup-isomorphism-off-center`,
`cor-exceptional-divisor-smooth-center-normal-bundle`,
`lem-exceptional-curve-normal-bundle-minus-one`,
`lem-total-transform-strict-plus-exceptional-multiplicity`, `def-total-transform-divisor`,
`def-strict-transform-closed-subscheme`, `thm-blowup-projective`,
`lem-blowup-point-pushforward-vanishing`, `lem-projection-formula-invertible-twist`,
`lem-exceptional-fiber-line-bundle-euler-characteristic`. These are used in its
proof steps (1)–(3); the consumer is authored against the current batch-2 manifest
statements and the reconciled cross-batch ledger rows.

For `ex-intersection-pairing-on-blowup-of-p2`: the same batch-2 supplier set plus
`thm-blowup-smooth-surface-point-charts`, and the in-batch supplier
`lem-blowup-intersection-matrix-at-smooth-point`.

## Progress log

Checkpoint 1 (items 1–5 of the level order).

- `def-degree-invertible-sheaf-proper-dimension-one` (A, level 0): authored.
  Definition of $\deg_C=\chi$-difference for a proper $k$-scheme of dimension at
  most one; cites [[def-euler-characteristic-coherent-sheaf]],
  [[thm-coherent-sheaves-abelian-noetherian-scheme]],
  [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]. Checks:
  rendercheck OK; precheck not-applicable (definition); proof-layout n/a.
  Manifest deps extended by two published items (no level change).
- `def-divisor-intersection-number-on-smooth-projective-surface` (A, level 0):
  authored. Alternating-sum pairing on an integral regular projective surface;
  well-definedness, symmetry, $L\cdot\mathcal O_X=0$, linear equivalence; cites
  the Cartier/Picard dictionary. rendercheck OK.
- `lem-closed-immersion-projection-formula-invertible` (A, level 0): authored.
  Canonical map $\mathcal L\otimes i_*\mathcal G\to i_*(i^*\mathcal L\otimes\mathcal G)$
  is an isomorphism (stalkwise change-of-rings), plus coherence and cohomology
  clauses. Checks: precheck PASS, proof-layout 7 steps 0 defects, rendercheck OK.
  Dependencies: 25 published suppliers; no in-run deps, level stays 0.
- `lem-euler-characteristic-finite-support-twist-invariance` (A, level 0→1):
  authored; (1) cohomology of $i_*\kappa(p)$ and $\chi=[\kappa(p):k]$,
  (2) $i^*\mathcal L\cong\mathcal O_Z$ and $\mathcal L\otimes i_*\kappa(p)\cong i_*\kappa(p)$.
  Its argument now uses the in-run level-0 supplier
  `lem-closed-immersion-projection-formula-invertible`; the manifest dependency
  and the recomputed level 1 are recorded, and the downstream labels rebase
  accordingly (lem-twist 2, cor 3, the two theorems 4, ex-p2 5; the blowup pair
  keeps 8/9 because the batch-2 maximum level 7 dominates).
  Checks: precheck PASS, proof-layout 9 steps 0 defects, rendercheck OK.
- `cex-intersection-pairing-needs-cartier-or-cycle-hypotheses` (B, level 1):
  authored. Projective quadric cone $V_+(xy-z^2)$: chart computations, normality,
  prime ruling not Cartier at the vertex (via the published
  `cex-weil-divisor-not-cartier-singular-cone` and restriction of Cartier
  divisors); and $\mathbb P^3$ planes meeting in a line with alternating sum 1.
  Checks: precheck PASS, proof-layout 12 steps 0 defects, rendercheck OK.

Environment note: `node tools/proof-layout.mjs items/<id>.md ...` needs the app
repo's tsx loader; `worker/node_modules` is absent in this container, so the
repository's TypeScript fallback (no JSX option) cannot render `ItemBody.tsx`.
All proof-layout runs in this dispatch use a `/tmp` overlay app dir
(`PRESTIGE_APP_DIR=/tmp/pai-overlay2`) that symlinks the real `worker/` sources
and the installed `web/node_modules/tsx`; no repository or app file is modified.
The engine's own `--run --write` runs are unaffected by this local workaround.

Checkpoint 2 (all twelve items authored and checked). The remaining items
were authored in the dispatch's level order:

- `lem-euler-characteristic-twist-integral-proper-curve` (A, level 2): the
  devissage for $\chi(X,\mathcal L\otimes\mathcal F)=r\deg_X(\mathcal L)+\chi(X,\mathcal F)$
  on an integral proper curve, with witnesses $\mathcal O_X$ and
  $i_*\kappa(p)$.
- `cor-degree-additive-proper-curve` (A, level 3): degree additivity, dual
  degree and the quadratic vanishing on an arbitrary proper curve of dimension
  at most one, by devissage with the projection formula on one-dimensional
  integral subschemes. Conclusion cross-reference corrected (step 3.1, not
  2.1).
- `thm-surface-intersection-product-bilinear-and-symmetric` (A, level 4): the
  effective shift identity from the two twisting sequences, effective
  additivity, and reduction of arbitrary divisors to differences of effective
  ones by eventual global generation.
- `thm-intersection-with-curve-as-degree-of-restriction` (A, level 4): the
  two twisting-sequence substitutions, the both-effective identity by
  symmetry, the smooth comparison via the Euler-characteristic degree shift
  and the empty case.
- `ex-intersection-pairing-on-p2` (B, level 5): the alternating-sum computation
  $\mathcal O(d)\cdot\mathcal O(e)=de$, the form-to-divisor passage and the
  line/conic specialisations.
- `lem-blowup-intersection-matrix-at-smooth-point` (A, level 8): the
  intersection matrix of a point blowup, $E^2=-[\kappa(p):k]$, orthogonality
  and pullback identities, and the strict-transform formulas.
- `ex-intersection-pairing-on-blowup-of-p2` (B, level 9): the $k$-rational
  blowup form $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ and the strict transform
  of a line through the centre.
- `cex-intersection-pairing-needs-cartier-or-cycle-hypotheses` (B, level 1):
  the projective quadric cone with a non-Cartier prime divisor and the
  $\mathbb P^3$ planes refutation of the alternating-sum-as-length claim.

Checkpoint 3 (examples-page dependency repairs at handoff). Two items
originally declared load-bearing dependencies on items that live only on
other examples (B) pages, which `tools/depcheck.mjs` reports as hard
`b-leaf-content` errors and which the dispatch instructs to replace:

- `ex-intersection-pairing-on-p2` depended on
  `ex-cohomology-o-d-projective-line-all-d` for
  $\chi(l,\mathcal O(m)|_l)=m+1$. Replaced by a complete local argument: for
  the line $l=Z(x_0)$ with $\mathcal O_X(l)\cong\mathcal O(1)$, twisting the
  sequence of `cor-twist-exact-sequence-effective-divisor` by $\mathcal O(m)$
  gives $0\to\mathcal O(m-1)\to\mathcal O(m)\to j_*(\mathcal O(m)|_l)\to0$;
  additivity of $\chi$ (`lem-euler-characteristic-additive-short-exact`) and
  the closed-immersion formula
  `lem-closed-immersion-projection-formula-invertible` give
  $\chi(l,\mathcal O(m)|_l)=\chi(X,\mathcal O(m))-\chi(X,\mathcal O(m-1))=m+1$
  from the item's own $[F2]$. The dependency was removed from the item and
  the manifest row, and the three A-page suppliers were added.
- `cex-intersection-pairing-needs-cartier-or-cycle-hypotheses` depended on the
  published examples-page item `cex-weil-divisor-not-cartier-singular-cone`.
  Replaced by a complete local argument inside the item: $R=k[x,y,z]/(xy-z^2)$
  is a Noetherian normal domain of dimension two (invariant model
  $R\cong k[u,v]^G$, $G=\{\pm1\}$, and $k[u,v]$ integrally closed);
  $P=(x,z)$ is a prime of height one because $R/P\cong k[y]$ and $P$ is the
  unique minimal prime over $(x)$ in $R/(x)\cong k[y,z]/(z^2)$; $P R_{\mathfrak m}$
  is not principal because $P R_{\mathfrak m}/\mathfrak mR_{\mathfrak m}PR_{\mathfrak m}$
  has $k$-basis the images of $x,z$; and a Cartier divisor on a neighbourhood
  of the vertex with cycle $[V(P)]$ would force $PR_{\mathfrak m}$ to be
  principal, by the $(S_2)$ intersection theorem
  (`lem-r-one-s-two-intersection-of-height-one-localisations`) and the
  Cartier-to-Weil coefficient formula
  (`thm-cartier-to-weil-divisor-normal-scheme`). Eighteen published A-page
  suppliers were added to the item and manifest row; the examples-page
  dependency was removed. The proof step numbering was renumbered to the
  canonical dependency-layer form proposed by `precheck` (all references
  updated consistently).

## Final dependency levels (manifest and item metadata agree)

| level | item |
|---|---|
| 0 | `def-degree-invertible-sheaf-proper-dimension-one` |
| 0 | `def-divisor-intersection-number-on-smooth-projective-surface` |
| 0 | `lem-closed-immersion-projection-formula-invertible` |
| 1 | `lem-euler-characteristic-finite-support-twist-invariance` |
| 1 | `cex-intersection-pairing-needs-cartier-or-cycle-hypotheses` |
| 2 | `lem-euler-characteristic-twist-integral-proper-curve` |
| 3 | `cor-degree-additive-proper-curve` |
| 4 | `thm-intersection-with-curve-as-degree-of-restriction` |
| 4 | `thm-surface-intersection-product-bilinear-and-symmetric` |
| 5 | `ex-intersection-pairing-on-p2` |
| 8 | `lem-blowup-intersection-matrix-at-smooth-point` |
| 9 | `ex-intersection-pairing-on-blowup-of-p2` |

`node tools/item-dependency-levels.mjs check --run frontier-38-owner-30`
reports 816 items across 60 pages, maximum level 16, 0 errors.

## Checks actually run (final state)

- `node tools/tsx-run.mjs tools/precheck.mts <12 item paths>`: 10
  proof-bearing items PASS, 0 failing (the two definitions have no proof
  body).
- `PRESTIGE_APP_DIR=/tmp/pai-overlay2 node tools/proof-layout.mjs <12 item
  paths>` (single batched run after the final edits): 12 items, 83 steps,
  0 defects.
- `node tools/rendercheck.mjs <12 item paths>`: OK (12 files; KaTeX and
  frontmatter parses clean).
- `node tools/content-policy.mjs research/frontier-38-owner-30-batch-26.pages.json`:
  12 scoped items, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-38-owner-30-batch-26.pages.json`:
  12 items, 0 errors.
- `node tools/depsource.mjs --page <both pages>`: 0 unresolved.
- `node tools/manifest-integrity.mjs --run frontier-38-owner-30`: 60/60 pages,
  no scope drift.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0.
- `node tools/depcheck.mjs`: no errors remain for this pair's items except the
  two escalated items' unresolved dependencies on the still-unfinished batch-2
  suppliers listed below (the two `b-leaf-content` errors are cleared).
- `node tools/proof-contract.mjs research/frontier-38-owner-30-batch-26.proof-contracts.json --strict`:
  7 errors, all `citation-fact-uncontracted` against the unfinished batch-2
  suppliers (exact list below).
- `node tools/step3-decisions.mjs` item receipts: 10 items closed with
  `repaired` at confidence 1 against their current manifest dependency
  arrays; 2 items owner-held (escalated).

## Open obligations at handoff

1. Unfinished in-run batch-2 suppliers, all `items/` files still absent at
   handoff: `thm-blowup-projective`,
   `cor-blowup-birational-integral-scheme`,
   `lem-exceptional-curve-normal-bundle-minus-one`,
   `def-blowup-fractional-ideal`, `def-strict-transform-closed-subscheme`,
   `thm-blowup-smooth-surface-point-charts`.
2. Escalated consumers and exact uses. `lem-blowup-intersection-matrix-at-smooth-point`
   (decision `escalate`, owner-held) cites: F1 → `thm-blowup-projective`
   (used in steps 1.1, 1.4, 1.5); F2 → `cor-blowup-birational-integral-scheme`
   and `lem-exceptional-curve-normal-bundle-minus-one` (step 1.1); F3 →
   `def-blowup-fractional-ideal` and `thm-blowup-projective` (step 1.1); F6 →
   `def-strict-transform-closed-subscheme` (steps 1.4, 1.5, 2.2, 3.1).
   `ex-intersection-pairing-on-blowup-of-p2` (decision `escalate`,
   owner-held) cites F2 → `lem-exceptional-curve-normal-bundle-minus-one`
   (steps 1.1, 1.2, 1.3, 2.1, 3.2). Both items are fully authored against the
   current batch-2 manifest statements; their decisions cannot be re-recorded
   by a non-owner once escalated, so the owner must resolve them after the
   suppliers are authored and the uses reconciled.
3. The 7 strict-contract errors are exactly the fact→supplier rows in
   obligation 2 plus `ex-intersection-pairing-on-blowup-of-p2`'s F2 row; after
   the supplier files are authored, run
   `node tools/regen-contract-entries.mjs research/frontier-38-owner-30-batch-26.proof-contracts.json lem-blowup-intersection-matrix-at-smooth-point ex-intersection-pairing-on-blowup-of-p2`
   and re-run the strict check.
4. Cross-batch ledger
   `research/frontier-38-owner-30-batch-26.cross-batch-dependencies.json` has
   25 rows, including an `open` row for the edge
   `lem-blowup-intersection-matrix-at-smooth-point -> def-blowup-fractional-ideal`
   (used in its step 1.1). The unified-ledger refresh
   (`node tools/frontier-dependency-ledger.mjs refresh --require-reviewed`)
   currently aborts on an unrelated malformed YAML in another pair's scope
   decision (`thm-mod-two-intersection-number-is-homotopy-invariant`,
   "Invalid escape sequence \#" at line 21); this is outside this pair's scope
   and is reported, not fixed.

## Published concerns (structural, no confirmed mathematical defect)

- Sibling batch 2, same defect class repaired here:
  `lem-exceptional-fiber-line-bundle-euler-characteristic` depends on the
  examples-page item `ex-cohomology-o-d-projective-line-all-d`
  (`b-leaf-content`), and `lem-normalization-defect-euler-and-lengths` depends
  on `ex-skyscraper-sheaf-acyclic` (`b-leaf-content`). Both could be repaired
  the same way as `ex-intersection-pairing-on-p2` (local twisting-sequence
  computation) if the batch-2 owner agrees.
- Repo-wide `depcheck`/`content-policy` also show defects in other in-flight
  pairs (for example `cex-calderon-zygmund-*` and
  `thm-compact-groups-have-discrete-duals-*` chains); they are out of scope
  for this pair.
- No mathematical defect was confirmed in any published item used by this
  pair. The Step 3a advisory (`coverage-low-yield` on the two pages) was
  accepted at entry and is unchanged.

## Handoff

All twelve assigned items are authored, formatted, and registered on their
pages; both library pages exist as drafts with all assigned items/examples
listed; the batch contract artifact exists and is current for the ten closed
items. Ten of twelve item decisions are closed; the two blowup items remain
escalated solely because their batch-2 suppliers are not yet authored. Next
actions for the owner: author the six batch-2 suppliers, reconcile the uses
listed above, regenerate the two contract entries, and resolve the two
escalated item decisions.
