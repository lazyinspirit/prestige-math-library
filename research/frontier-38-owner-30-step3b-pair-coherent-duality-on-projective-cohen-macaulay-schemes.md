# Step 3b report — A/B pair `coherent-duality-on-projective-cohen-macaulay-schemes`

- Run: `frontier-38-owner-30`
- Role: alpha-high; batch 28 (shared with no other pair)
- A page: `coherent-duality-on-projective-cohen-macaulay-schemes` (order 903)
- B page: `coherent-duality-on-projective-cohen-macaulay-schemes-examples` (order 904)
- Dispatch: `research/frontier-38-owner-30-step3b-pair-coherent-duality-on-projective-cohen-macaulay-schemes.task.md`
- Output artifacts: this report, `research/frontier-38-owner-30-batch-28.pages.json`,
  `research/frontier-38-owner-30-batch-28.proof-contracts.json`,
  `library/algebraic-geometry/coherent-duality-on-projective-cohen-macaulay-schemes.md`,
  `library/algebraic-geometry/coherent-duality-on-projective-cohen-macaulay-schemes-examples.md`,
  and the 14 item files.

## Entry checkpoint — owned IDs and open obligations

Owned A items (11), in dispatch order (dependency level, page order, item ID):

0. `def-dualizing-complex-on-projective-cm-scheme`
0. `lem-finite-closed-immersion-derived-coinduction-adjunction`
0. `lem-projective-space-derived-coherent-duality`
1. `lem-cm-quotient-of-regular-local-ring-ext-concentration`
1. `lem-regular-quotient-dualizing-complex-and-biduality`
2. `lem-projective-embedding-dualizing-complex-existence`
3. `lem-projective-dualizing-complex-trace-and-embedding-independence`
4. `lem-projective-pure-cm-dualizing-complex-concentration`
5. `thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme`
6. `rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case`
7. `rem-curve-residue-duality-is-the-dimension-one-case`

Owned B items (3): `ex-serre-duality-on-a-singular-projective-cm-curve` (6),
`cex-serre-duality-without-properness` (6), `ex-serre-duality-on-a-smooth-projective-surface` (7).

Open obligations at entry:

1. Audit each of the 14 scaffolds for authoring readiness (hypotheses,
   sources, direct suppliers, proof route) and repair local gaps in the
   exact dispatch order.
2. Author/create the two pair pages (neither exists on disk at entry).
3. Create the batch-28 proof-contracts artifact with 14 strict-clean entries.
4. Sync manifest deps with authored frontmatter; refresh coverage and
   cross-batch inputs; refresh the frontier dependency ledger for batch 28.
5. Run the Step-3 gate battery on explicit paths (precheck, rendercheck,
   content policy, strict proof contracts, item dependency levels,
   manifest-deps, depcheck, fwdcheck/extcheck, coverage, validate-plan,
   proof-layout) and record item decisions with `tools/step3-decisions.mjs`.
6. Report any unfinished supplier with exact ID, consumer ID and consuming
   proof step; keep that item's decision escalated until reconciled.

## Inputs read (entry checkpoint)

- `CLAUDE.md`, `SCHEMA.md`, this dispatch, and the engine task
  `research/frontier-38-owner-30-step3b-pair-coherent-duality-on-projective-cohen-macaulay-schemes-f1d39e145efd3b3f.task.md`.
- Batch 28 records: `research/frontier-38-owner-30-batch-28.pages.json`,
  `...-batch-28.coverage.json`, `...-batch-28.notes.md`,
  `...-batch-28.cross-batch-dependencies.json`.
- Step 3a scope review
  `research/frontier-38-owner-30-step3a-pair-coherent-duality-on-projective-cohen-macaulay-schemes.md`
  (decision `sufficient`, receipt recorded) and the local packet
  `research/frontier-38-owner-30-local-prereq-903.md`.
- Owner direction `research/frontier-38-owner-30-owner-authoring-direction.md`
  (903/904 bullet) and the plan entries for orders 903/904 in
  `research/plan-spec.json`, plus the design row AG-DUAL-1 in
  `research/plan-algebraic-geometry-expansion-track.md`.
- All 14 item files, all direct suppliers (published items on disk), and the
  AG-LIE suppliers used by the two comparison remarks.
- Live sources re-read for this audit: Stacks tags 0A7B, 0A70, 08XR, 0AX0,
  0A7C, 0A7G, 0A7I, 0FVV, 0FVW, 0FVZ, 0FW0 (fetched and read as complete tag
  pages), the Stacks Chapter 47 dualizing PDF, and the batch's Vakil/Jeffries
  locators as recorded in the coverage file (findings in section "Source
  verification" below).

## Authoring order and item checkpoints

Audited, repaired, checked and decided one item at a time in the dispatch
order. No item was justified by a later item; every dependency repair stays on
the same page at a lower level (verified with
`tools/item-dependency-levels.mjs check --run frontier-38-owner-30`, exit 0).

### Checkpoints, level 0

1. `def-dualizing-complex-on-projective-cm-scheme` (definition) — the local
   finite-injective-dimension and homothety conditions were checked against
   Stacks 0A7B (`Definition 47.15.1`: finite injective dimension, finite
   cohomology, $A\to R\operatorname{Hom}_A(\omega_A,\omega_A)$ a
   quasi-isomorphism), and the normalization and evaluation isomorphisms
   against 0FVV item (5) and its footnote identifying the Yoneda
   characterization on $D^b_{\mathrm{Coh}}$. The shift convention matches
   `def-derived-category-of-an-abelian-category`. Decision `accept`; renderer,
   content policy and proof layout clean; no proof section owed.
2. `lem-finite-closed-immersion-derived-coinduction-adjunction` (level 0) —
   **repaired**: step 2.1's claim that $i^b$ preserves injectives was
   re-argued from the exactness of $i_*$ and the right-adjoint
   Hom-identification, replacing an unsupported inference from the ideal
   annihilating the Hom. The ring-level evaluation-at-1 adjunction, the
   bounded-below injective replacement, the counit identification and the
   closed-immersion cohomology comparison were checked against 0A70, 08XR and
   the declared suppliers. Decision `repaired`.
3. `lem-projective-space-derived-coherent-duality` (level 0) — the
   evaluation-plus-trace quasi-isomorphism was checked against 0FVV(5)/0FVW:
   base case $K=\mathcal O_P(m)$ in every degree via the twisting and residue
   pairings, then extension over finite locally free resolutions, cones and
   truncations through the declared long-exact-sequence and five-lemma
   suppliers. Decision `accept`.

### Checkpoints, level 1

4. `lem-cm-quotient-of-regular-local-ring-ext-concentration` (level 1) —
   **repaired**: fact [F3] now links `thm-dimension-formula-for-affine-domains`
   together with `lem-affine-domain-chain-dimension-formula-step`, so the
   inference $\dim(R/\mathfrak p)=N-\operatorname{ht}\mathfrak p$ is fully
   supported (previously only the transcendence-additivity step lemma was
   declared); the Choice sentence now names the derived adjunction as the
   channel. The AB bound $\operatorname{pd}_RB=N-d$, the prime-avoidance
   construction of a length-$c$ regular sequence inside $I$, the
   principal-quotient Ext shift and the $c=0$ case were checked step by step
   against the published suppliers. Decision `repaired`; the new dependency
   was synced into the manifest.
5. `lem-regular-quotient-dualizing-complex-and-biduality` (level 1) — checked
   against 0AX0 and 0A7C: the ambient bounded injective resolution gives finite
   injective dimension, the ambient finite projective resolutions give
   coherence and the double-dual identity, and the adjunction twice descends
   biduality to $B$ with the homothety map identified at $M=B$. Decision
   `accept`.

### Checkpoints, level 2

6. `lem-projective-embedding-dualizing-complex-existence` (level 2) — checked
   that the chartwise complex is
   $R\operatorname{Hom}_A(A/I,\omega_P(U)[N])$, that the regular-quotient
   lemma supplies the dualizing conditions and biduality on every chart, that
   the ambient finite twisted resolutions bound the cohomological degrees
   uniformly, and that no derived full faithfulness of $i_*$ is used. Decision
   `accept`.

### Checkpoints, level 3

7. `lem-projective-dualizing-complex-trace-and-embedding-independence`
   (level 3) — the trace is the counit composed with the Laurent trace, the
   paired scalar is $t_i(\alpha[-r]\circ\beta)$ (matching 0FVW), and two
   embeddings are compared by the Yoneda evaluation bijection on
   $D^b_{\mathrm{Coh}}(X)$ with the trace recovered by evaluation at $1$. The
   deliberate caveat that an unnormalized dualizing complex is not unique was
   kept. Decision `accept`.

### Checkpoints, level 4

8. `lem-projective-pure-cm-dualizing-complex-concentration` (level 4) —
   checked against 0FVZ: closed-point Ext concentration gives vanishing of
   $H^a(D_X)_x$ for $a\ne -d$; coherence of the cohomology sheaves and the
   existence of closed points in supports globalize it; the dual of a finite
   free resolution gives $\operatorname{pd}_RE\le c$, the AB formula and the
   depth bound give $\operatorname{depth}_RE=d=\dim\operatorname{Supp}E$, and
   localizations plus the nonzero homothety give the CM and full-support
   conclusions. The nonvanishing of $E$ is derived from biduality, not
   asserted. Decision `accept`.

### Checkpoints, level 5

9. `thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme` (level 5)
   — **repaired**: step 2.1 now applies the closed-subscheme clause of
   `lem-projective-coherent-cohomology-finite-and-vanishing` directly instead
   of routing through an undeclared pushforward-coherence step, and the
   complex form is completed with the bounded/formality argument over $k$;
   `lem-projective-embedding-dualizing-complex-existence` is declared and
   linked for biduality, and the fact [F4] phrasing was narrowed to the
   supplier's actual statement. The pairing, its dual form, the vanishing
   outside $0\le i\le d$, finite-dimensional perfectness in both directions
   and biduality for non-perfect $K$ were rechecked against 0FVZ/0FVW. The
   new dependency was synced into the manifest. Decision `repaired`.

### Checkpoints, levels 6–7

10. `rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case`
    (level 6) — **repaired**: the section heading is now `## Remark`, so the
    comparison is a citable source for the surface example's contract (this
    was the only reason a fact of
    `ex-serre-duality-on-a-smooth-projective-surface` could not be contracted).
    Content checked against `lem-regular-immersion-koszul-ext-sheaf`,
    `lem-smooth-closed-subvariety-dualizing-line-bundle-adjunction` and
    `thm-serre-duality-smooth-projective-variety-locally-free-sheaves`.
    Decision `repaired`.
11. `rem-curve-residue-duality-is-the-dimension-one-case` (level 7) —
    **repaired**: heading changed to `## Remark` for the same citability
    reason; the two formulas are the $i=1,0$ instances of the theorem, the
    locally-free extinction of global Ext is stated with its exact hypothesis,
    and the residue normalization uses
    `lem-smooth-projective-rational-point-koszul-residue-normalization`
    (parameter-independence and field-extension compatibility included).
    Decision `repaired`.
12. `ex-serre-duality-on-a-singular-projective-cm-curve` (B, level 6) —
    verified integrality and the node by the odd-valuation square argument and
    the quadratic tangent cone, the hypersurface CM property, the dualized
    structure sequence giving $\omega_C=\mathcal O_C$, the cohomology
    computation $H^0=k$, $H^1=H^2(\mathbb P^2,\mathcal O(-3))=k$, and the
    node-skyscraper Ext/Hom pair through the theorem. Decision `accept`.
13. `cex-serre-duality-without-properness` (B, level 6) — **repaired**: the
    Given data and [F1] moved into a `## Facts & Assumptions` section so the
    counterexample is contract-readable, and one closing word corrected
    ("example" to "counterexample"). The failure at $i=1$ on
    $\mathbb A^1$ ($H^1(\mathcal O)=0$ versus
    $\Gamma(\Omega^1)=k[t]dt\ne0$) and the nonproperness witness
    $V(xt-1)\mapsto D(x)$ were rechecked. Decision `repaired`.
14. `ex-serre-duality-on-a-smooth-projective-surface` (B, level 7) —
    verified $\omega_{\mathbb P^2}=\mathcal O(-3)$, the dual monomial bases of
    $H^0(\mathcal O(m))$ and $H^2(\mathcal O(-m-3))$ under the coefficient of
    $(x_0x_1x_2)^{-1}$, the Kronecker pairing as the $i=0$ case, and the
    skyscraper Ext groups $\operatorname{Ext}^2=k$,
    $\operatorname{Ext}^1=\operatorname{Hom}=0$. Decision `accept`.

## Repairs actually made (6 items)

1. `lem-finite-closed-immersion-derived-coinduction-adjunction` — step 2.1
   injectivity argument (no dependency change).
2. `lem-cm-quotient-of-regular-local-ring-ext-concentration` — [F3] now
   declares `thm-dimension-formula-for-affine-domains`; Choice sentence
   sharpened; dependency added to the manifest.
3. `thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme` —
   finiteness via the closed-subscheme supplier clause, completed complex-form
   argument, biduality supplier declared; dependency added to the manifest.
4. `rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case` —
   citable `## Remark` heading.
5. `rem-curve-residue-duality-is-the-dimension-one-case` — citable
   `## Remark` heading.
6. `cex-serre-duality-without-properness` — Facts section restructure and one
   wording fix.

No statement of any promised claim was weakened, no item ID changed, and no
item was re-authored away from its scaffold statement.

## Pages authored (both were missing at entry)

- `library/algebraic-geometry/coherent-duality-on-projective-cohen-macaulay-schemes.md`:
  the 11 A items in manifest order, `requires` identical to the plan-spec
  entry at order 903, `examples: []`, `status: draft` (the item files are
  drafts, and a published page may not list non-published items).
- `library/algebraic-geometry/coherent-duality-on-projective-cohen-macaulay-schemes-examples.md`:
  the three B items in manifest order under `examples`, `items: []`,
  `requires: [coherent-duality-on-projective-cohen-macaulay-schemes]`,
  `status: draft`.
- `rendercheck` on both pages: exit 0; `prosecheck`: 0 errors, 0 warnings.

## Proof contracts

`research/frontier-38-owner-30-batch-28.proof-contracts.json` was created with
all 14 manifest items in scope, three boundary rows per item for every standard
case (112 rows: 100 `checked` with item-specific evidence naming actual steps,
12 `not_applicable` with item-specific reasons), regenerated citations with
verbatim source-section quotes and per-step uses, and one derivation row per
numbered step. `tools/proof-contract.mjs --strict`: 0 errors, 0 warnings,
14/14 items. `citation-fidelity --fail-on-missing-quote`: no missing quotes and
no widening candidates. `boundary-audit`: 112 rows, no template reuse and no
contradicted disposition.

## Manifest, coverage and dependency inputs

- The two dependency edits were mirrored into
  `research/frontier-38-owner-30-batch-28.pages.json`;
  `manifest-deps` reports `14 item(s), 0 normalized, 0 error(s)`.
- Coverage `research/frontier-38-owner-30-batch-28.coverage.json` is unchanged
  and still current: `coverage-checklist --require-destination` gives 0 errors
  and the one pre-existing advisory `coverage-low-yield` (6/39 `included`),
  whose declines were confirmed by the Step 3a scope review.
- `frontier-dependency-ledger refresh --run frontier-38-owner-30`: exit 0;
  the batch-28 cross-batch input remains `[]` (no declared edge touches
  903/904).
- `scope-decisions check`: our pair has no declines and no open scope rows.
- No sibling batch file, plan file, or other pair's item was edited.

## Checks run (actual results, batch-28 scope)

| command | exit | result |
|---|---|---|
| `precheck.mts` on the 14 explicit item paths | 0 | `11 checked, 0 failing — all clean` (3 definition/remark files have no proof body) |
| `rendercheck.mjs` on the 14 items + 2 pages | 0 | `OK — 16 file(s)` |
| `content-policy.mjs` on `...batch-28.pages.json` | 0 | `14 scoped item(s), 0 error(s), 0 warning(s)` |
| `proof-contract.mjs --strict` | 0 | `0 error(s), 0 warning(s), 14/14 item(s) checked` |
| `citation-fidelity.mjs --fail-on-missing-quote` | 0 | no missing quotes, no widening candidates |
| `boundary-audit.mjs` | 0 | 112 rows, no template reuse, no contradicted dispositions |
| `manifest-deps.mjs` | 0 | `14 item(s), 0 normalized, 0 error(s)` |
| `item-dependency-levels.mjs check --run frontier-38-owner-30` | 0 | `816 item(s) checked across 60 page(s); maximum level 16` — every batch-28 label matches the actual dependency levels |
| `validate-plan.mjs research/plan-spec.json` | 0 | acyclic and consistent (289 planned pages still carry no item list — pre-splice) |
| `coverage-checklist.mjs --require-destination` | 0 | 2 pages, 45 harvested results, 0 errors, 1 advisory |
| `source-fetch-check.mjs --coverage ...batch-28.coverage.json` | 0 | `6/6 source(s) fetch-verified; 6/6 resolved` |
| `depcheck.mjs` | 1 (global) | no finding names a batch-28 item; the failures are other pairs' in-flight files |
| `fwdcheck.mjs --quiet` | 1 (global) | no finding names a batch-28 item |
| `extcheck.mjs` | 0 | OK — every recorded-not-proved statement remains a cited remark |
| `frontier-dependency-ledger refresh --run` | 0 | refreshed and deduplicated |
| `step3-decisions.mjs check --run --phase final` | 1 (global) | run-wide open work in other pairs; **0 open rows for batch 28** (14/14 closed) |
| `proof-layout.mjs` on the 14 item paths (one command) | 0 | `14 items, 25 steps, 0 defects` |

## Item decisions recorded

All 14 items carry current `research/frontier-38-owner-30-step3b-review-*.json`
receipts with confidence 1 and the full examined dependency list:
8 `accept` (`def-dualizing-complex-on-projective-cm-scheme`,
`lem-regular-quotient-dualizing-complex-and-biduality`,
`lem-projective-embedding-dualizing-complex-existence`,
`lem-projective-space-derived-coherent-duality`,
`lem-projective-dualizing-complex-trace-and-embedding-independence`,
`lem-projective-pure-cm-dualizing-complex-concentration`,
`ex-serre-duality-on-a-singular-projective-cm-curve`,
`ex-serre-duality-on-a-smooth-projective-surface`) and 6 `repaired`
(`lem-finite-closed-immersion-derived-coinduction-adjunction`,
`lem-cm-quotient-of-regular-local-ring-ext-concentration`,
`thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme`,
`rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case`,
`rem-curve-residue-duality-is-the-dimension-one-case`,
`cex-serre-duality-without-properness`). No `escalate` and no owner receipt.

## Flagged suppliers and escalations

None. Every direct dependency of all 14 items resolves to an existing
published item (45 distinct external published suppliers, 0 missing, 0 draft,
0 `proved_here: false`; the count is one higher than the Step 3a snapshot
because this audit added `thm-dimension-formula-for-affine-domains`); every
supplier use was read against the supplier's actual statement during this
audit. The in-run suppliers used are only the pair's own A items, all proved
earlier on the page.

## Source verification

The definition and theorem statements were re-verified against live Stacks tag
pages rather than citation titles: 0A7B (ring dualizing complexes), 0A70 and
08XR (finite-ring adjunction and co-injective preservation), 0AX0 and 0A7C
(dualizing complexes under finite ring maps; coherent biduality), 0FVV (proper
schemes over a field: existence, $H^i$ supported in $[-\dim,0]$, the
functorial $\operatorname{Ext}^i_X(K,\omega^\bullet)\cong
\operatorname{Hom}_k(H^{-i}(X,K),k)$ and its Yoneda footnote), 0FVW (trace and
pairing, one-sided otherwise and perfect on $D^b_{\mathrm{Coh}}$), 0FVZ (the
Cohen–Macaulay coherent statement used verbatim as the theorem's target) and
0FW0 (vector-bundle specialization). The Vakil and Jeffries locators are those
fetch-stamped in the batch coverage file; the surface/counterexample claims do
not depend on any text not reproduced in the items. The one recorded
qualification inherited from the batch is the locator-window nuance (Vakil
pp. 793–812 versus 793–810) noted by the Step 3a review; it affects no claim.

## Pre-splice note for Step 4

The audit changed the *item objects* of exactly two manifest entries relative
to `research/plan-spec.json`: `lem-cm-quotient-of-regular-local-ring-ext-concentration`
now declares `thm-dimension-formula-for-affine-domains`, and
`thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme`
now declares `lem-projective-embedding-dualizing-complex-existence`. Both are
same-page, lower-level, published-or-earlier suppliers, so no plan `requires`
edge is affected; the step-4 splice must simply re-splice those two manifest
item objects into the plan (the `splice-verify` "same ids, item object
changed" refresh). Separately, the two page files are new on disk and are not
yet in the plan's page list — the normal step-4 splice places them. No
unresolved dependency is hidden by either note.

## Published concerns

No confirmed published defect was found in the content this pair consumes.
The repo-wide `depcheck`/`fwdcheck` failures at this snapshot name other
pairs' in-flight items only (e.g. `def-blaschke-product`,
`def-divisor-intersection-number-on-smooth-projective-surface`,
`def-fractional-sobolev-space-on-a-compact-c-one-boundary`,
`def-level-one-eisenstein-series`); they are sibling step-3b work in progress,
not published debt, and nothing in this pair's closure is affected.

## Handoff state

- 14/14 assigned items authored/audited, on disk, precheck-clean, contract-clean
  and decided; 2/2 assigned pages authored and render-clean;
  `...batch-28.proof-contracts.json` present with 14 strict-clean entries; the
  manifest and coverage are current; the ledger and cross-batch input are
  refreshed; this report is present.
- Open obligations are run-level only: the Step-3 final gate
  (`step3-decisions.mjs check --phase final`) stays open until the other 29
  pairs finish, and the step-4 splice must carry the two dependency edits and
  the two new page files noted above. Nothing in this pair is escalated or
  owner-held.
