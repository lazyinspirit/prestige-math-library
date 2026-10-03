# Step 3b author checkpoint — pair `frobenius-characteristic-and-the-symmetric-group-character-dictionary`

- Run: `frontier-38-owner-30`, dispatch label
  `step3b-pair-frobenius-characteristic-and-the-symmetric-group-character-dictionary-dc5f3980e53f7bc5`.
- A page: `frobenius-characteristic-and-the-symmetric-group-character-dictionary`
  (batch 18, order 801, 12 items). B page:
  `frobenius-characteristic-and-the-symmetric-group-character-dictionary-examples`
  (batch 18, order 802, 4 items).
- Entry checkpoint: before mathematical audit. Scope source: batch-18
  manifest/coverage/notes, the Step 3a pair review `...-step3a-pair-...md`, and
  the binding owner direction `research/frontier-38-owner-30-owner-authoring-direction.md`.

## Initial state and open obligations

- All 16 item files are absent from `items/`; the batch-18 manifest carries the
  scaffolded statements, strategies, deps and provenance that Step 3b must
  audit, repair where unsound, and author into complete items.
- Both assigned page files are absent from `library/representation-theory/`.
- `research/frontier-38-owner-30-batch-18.proof-contracts.json` is absent; it
  must be created from the completed arguments and pass `proof-contract.mjs
  --strict` for all 16 items.
- No cross-batch dependency input (batch-18 cross-batch input is `[]`); all
  non-local deps are published items.
- Open obligations carried from Step 3a: (a) attach item-level source locators;
  (b) `prop-sign-twist-corresponds-to-the-omega-involution` must either declare
  the injectivity edge it uses or use the injectivity-free route; (c) audit
  every scaffold hypothesis/source/route before use.
- Required sequence: work in the generated dependency order (levels 0 to 5),
  audit each item's exact suppliers and sources, author the complete proof,
  check, and checkpoint here before advancing.

## Progress log

- Entry checkpoint created before authoring. Next: level 0, item order
  `def-frobenius-characteristic-map`, `def-graded-ordinary-representation-ring-of-symmetric-groups`,
  `lem-complete-homogeneous-expansion-in-power-sums`.
- Level 0 complete (3/3). `def-frobenius-characteristic-map`: authored, codomain $\Lambda_{\mathbb C}$, rational case stated, integrality deferred to the dictionary theorems; precheck n/a, rendercheck OK. `def-graded-ordinary-representation-ring-of-symmetric-groups`: authored as scaffolded; precheck n/a, rendercheck OK. `lem-complete-homogeneous-expansion-in-power-sums`: **scaffold statement repaired** — the scaffold's $N(\lambda,\rho)$ ("equal cycles indistinguishable" = matrix count) makes the displayed identity false (e.g. $h_1^2=p_1^2$ needs $N((1,1),(1^2))=2$, not $1$); rewrote $N$ as the number of distributions of the *distinct* cycles of $w$ among labelled rows with the equivalent multinomial formula; authored a direct proof (finite-rank exp generating function, compatibility, product expansion, matrix/tuple bijection and $z_\rho$ bookkeeping). Precheck PASS, rendercheck OK. Manifest statement still to be updated (marked).
- Level 1 complete (3/3). `def-outer-induction-product-for-symmetric-group-characters`: added the uniqueness-of-coefficients supplier `thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions` to make the bilinear extension well defined. `lem-characteristic-of-a-young-permutation-character-is-complete` and `lem-frobenius-characteristic-is-an-isometry`: authored; precheck PASS, rendercheck OK. The isometry proof uses the sesquilinear extension of the Hall form and the class-size formula $n!/z_\rho$.
- Level 2 complete (2/2). `lem-frobenius-characteristic-preserves-outer-products`: authored (Frobenius formula, invariant-subset count $\prod_i\binom{m_i(\rho)}{m_i(\mu)}$, split identity $z_\rho/(z_\mu z_\nu)=\prod_i\binom{m_i(\rho)}{m_i(\mu)}$); added `def-virtual-character-and-character-ring-of-a-finite-group` for the honest-character reduction. `thm-frobenius-characteristic-sends-specht-characters-to-schur-functions`: authored (Young + unitriangular Kostka comparison, integrality of character values via the corrected $N$); added `lem-complete-homogeneous-expansion-in-power-sums`, `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules`, `cor-distinct-specht-modules-are-inequivalent`, `thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions`, `thm-schur-functions-form-an-orthonormal-integral-basis`, `def-stable-schur-function-by-bialternants`, `def-virtual-character-and-character-ring-of-a-finite-group`. Both precheck PASS, rendercheck OK.
- Level 3 complete (5/5). `cor-irreducible-...-power-sum-coefficients` (added `def-frobenius-characteristic-map` for the coefficient reading), `prop-regular-character-has-characteristic-p-one-to-the-n`, `prop-sign-twist-corresponds-to-the-omega-involution` (**declared the injectivity edge** `lem-frobenius-characteristic-is-an-isometry`, resolving Step-3a note (b)), `thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism`, and `cex-outer-induction-is-not-the-kronecker-product` (B page; added `lem-frobenius-characteristic-preserves-outer-products`, `thm-jacobi-trudi-and-dual-jacobi-trudi-identities`, `prop-omega-conjugates-schur-functions`, `lem-complete-homogeneous-expansion-in-power-sums`, `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules`, `cor-distinct-specht-modules-are-inequivalent`, `thm-complex-representations-are-determined-by-their-characters`, `def-column-antisymmetrizer-polytabloid-and-specht-module`; level stays 3). All authored; precheck/rendercheck to be re-run in the batch pass.
- Level 4 complete (2/2). `ex-frobenius-characteristic-dictionary-for-s3` and `ex-sign-twist-conjugates-the-s31-character` authored with explicit power-sum expansions, the $S_3$/$S_4$ tables and the sign-twist check; the second uses the conjugate pair $(3,1)/(2,1,1)=(3,1)'$ and the corrected $h_4,e_4$ expansions (the scaffold's draft omitted the $p_4$ terms, which would have given $\chi^{(3,1)}(4)=0$ instead of $-1$; repaired during authoring).
- Level 5 complete (1/1). `ex-young-permutation-characteristic-for-shape-two-one` authored (fixed-tabloid values $(3,1,0)$, Kostka numbers $1,1,0$, $h_2h_1=s_{(3)}+s_{(2,1)}$); added `thm-elementary-and-complete-families-freely-generate-the-stable-ring` and used the dominance clause of `lem-kostka-change-of-basis-is-dominance-unitriangular`.
- Pages written: `library/representation-theory/frobenius-characteristic-and-the-symmetric-group-character-dictionary.md` (12 items, `status: draft`) and `...-examples.md` (4 examples).
- Strict proof contracts written for all 16 items (`research/frontier-38-owner-30-batch-18.proof-contracts.json`); checker run pending.
- (Superseded by the final state and handoff section below.)

## Final state and handoff

All 16 assigned items are authored, checked and closed; both assigned pages
exist. No scope change: same 12 A + 4 B items at orders 801/802 with the
designed claims preserved.

| level | item | decision |
|---|---|---|
| 0 | `def-frobenius-characteristic-map` | repaired (dropped the false "virtual characters are automatically rational" parenthetical; codomain $\Lambda_{\mathbb C}$) |
| 0 | `def-graded-ordinary-representation-ring-of-symmetric-groups` | accept |
| 0 | `lem-complete-homogeneous-expansion-in-power-sums` | repaired (corrected $N(\lambda,\rho)$: distinct-cycle distributions, not a matrix count) |
| 1 | `def-outer-induction-product-for-symmetric-group-characters` | repaired (added the orthonormality supplier making the bilinear extension well defined) |
| 1 | `lem-characteristic-of-a-young-permutation-character-is-complete` | accept |
| 1 | `lem-frobenius-characteristic-is-an-isometry` | accept (statement spells out the Q-bilinear then sesquilinear extension) |
| 2 | `lem-frobenius-characteristic-preserves-outer-products` | repaired (added the virtual-character supplier for the honest-character reduction) |
| 2 | `thm-frobenius-characteristic-sends-specht-characters-to-schur-functions` | repaired (added the suppliers completing the labelling comparison and the integrality of values) |
| 3 | `cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients` | repaired (added `def-frobenius-characteristic-map` for the coefficient reading) |
| 3 | `prop-regular-character-has-characteristic-p-one-to-the-n` | accept |
| 3 | `prop-sign-twist-corresponds-to-the-omega-involution` | repaired (declared and used the injectivity edge `lem-frobenius-characteristic-is-an-isometry`) |
| 3 | `thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism` | accept |
| 3 | `cex-outer-induction-is-not-the-kronecker-product` (B) | repaired (added the eight suppliers actually used) |
| 4 | `ex-frobenius-characteristic-dictionary-for-s3` (B) | accept |
| 4 | `ex-sign-twist-conjugates-the-s31-character` (B) | repaired (added `prop-omega-conjugates-schur-functions`; corrected the $h_4,e_4$ expansions to include the $p_4$ terms) |
| 5 | `ex-young-permutation-characteristic-for-shape-two-one` (B) | repaired (added the $h_\lambda$-basis supplier; used the dominance clause of the Kostka item) |

Added in-run/published suppliers beyond the Step-1 rows:
`thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions`,
`def-virtual-character-and-character-ring-of-a-finite-group`,
`thm-complex-irreducibles-of-symmetric-groups-are-specht-modules`,
`cor-distinct-specht-modules-are-inequivalent`,
`thm-schur-functions-form-an-orthonormal-integral-basis`,
`def-stable-schur-function-by-bialternants`,
`thm-complex-representations-are-determined-by-their-characters`,
`def-column-antisymmetrizer-polytabloid-and-specht-module`,
`thm-jacobi-trudi-and-dual-jacobi-trudi-identities`,
`prop-omega-conjugates-schur-functions`,
`thm-elementary-and-complete-families-freely-generate-the-stable-ring`, plus the
same-pair suppliers `lem-complete-homogeneous-expansion-in-power-sums`,
`lem-frobenius-characteristic-is-an-isometry` and
`lem-frobenius-characteristic-preserves-outer-products`. All are published
items or earlier same-pair items; none belongs to another batch, so the
cross-batch dependency input stays `[]`.

### Checks actually run (observed results)

| Check | Result |
|---|---|
| explicit-path `precheck.mts` on the 16 owned item files | 13 proof items PASS, 3 definitions n/a; 13 checked, 0 failing |
| explicit-path `rendercheck.mjs` on the 16 items + 2 pages | OK — 18 files, YAML/math/links clean |
| `proof-layout.mjs` on all 16 changed item paths (one batched command) | 16 items, 72 steps, 0 defects |
| `proof-contract.mjs research/frontier-38-owner-30-batch-18.proof-contracts.json --strict` | 0 errors, 0 warnings, 16/16 items checked |
| `manifest-deps.mjs` on `batch-18.pages.json` | 16 items, 0 missing, 0 errors |
| `content-policy.mjs` on `batch-18.pages.json` | 16 scoped items, 0 errors, 0 warnings |
| `item-dependency-levels.mjs check --run frontier-38-owner-30` | 816 items across 60 pages, 0 errors (all 16 owned levels recompute exactly) |
| `validate-plan.mjs research/plan-spec.json` | exit 0 — acyclic and consistent; only pre-existing `redundant-prereq` warnings and the expected 289 unspliced inventories elsewhere |
| `depcheck.mjs --quiet` | no finding touches this pair (repo-wide findings are other batches' unfinished scaffolds) |
| `step3-decisions.mjs check --run frontier-38-owner-30 --phase scope` | refreshed `sufficient` receipt (sha256 `476406e2…`) after the statement repairs |
| `step3-decisions.mjs check --run frontier-38-owner-30 --phase final` | all 16 owned items closed; no owned row in the work list |

### Step-4 inputs and open obligations

- The batch-18 manifest now carries the authored statements and the actual
  dependency arrays for all 16 items; `plan-spec.json` orders 801/802 still have
  empty item inventories and need the ordinary splice. Both page files are
  `status: draft` and list exactly the manifest items/examples.
- Item-level source locators are attached for Macdonald ((7.1)–(7.7) and
  (2.14′)/(2.13)), James (§6, §16) and Webb (§3.2, §4.3) as appropriate.
- Published concerns found: none in this pair's prerequisites. Non-blocking
  observation: the published library carries two coexisting label-set
  conventions for $S_n$ (`def-finite-symmetric-group-and-permutation-notation`
  uses $\{0,\dots,n-1\}$, `def-young-subgroup-tabloid-and-permutation-module`
  and this pair use $\{1,\dots,n\}$); they are canonically isomorphic
  relabellings, and no claim in this pair depends on the choice.
- Carried forward from Step 3a (owner/plan level, not this pair's defect):
  SYMR-4's planned row still names the never-minted
  `lem-centralizer-order-for-a-symmetric-group-cycle-type`; the claim is the
  published `thm-centralizer-cardinality-from-cycle-type`, to be retargeted
  when that pair is scaffolded.
- No escalation is left open for this pair; nothing in this batch consumes a
  Recorded result or the Axiom of Choice.
