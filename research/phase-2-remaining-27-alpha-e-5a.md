# Step 5a adjudication — group e, run `phase-2-remaining-27`

- role: alpha (Step 5a adjudication), label `5a-e`, covers batches `14`, `15`, `3`
- outputs: `research/phase-2-remaining-27-alpha-e-5a.md`,
  `research/phase-2-remaining-27-alpha-e-5a-decisions.json`
- date: 2026-09-17 (Australia/Sydney)

Scope: the 49 obligations the scope files route to group e — 22 touched
carriers, one page carrier, four reader findings and 22 refuter findings. Each
decision names its obligation, carrier, verdict, evidence and (for reader and
flagged routes) exactly one closed defect-ledger row owned at
`caught_at_stage: 5a-adjudicate`. All repairs are in in-flight items of these
three batches or in the batch page; no published item was edited.

## 1. Evidence read

- Scope files: `research/phase-2-remaining-27-step5-scope-{3,14,15}.json`
  (versions 2, `touched`/`untouched` partitions, high-risk lists, opened
  refuter scopes, all findings).
- Reader reports and findings: `phase-2-remaining-27-reader-{3,14,15}.md` and
  `-reader-findings-{3,14,15}.json`; the metadata repair report
  `phase-2-remaining-27-reader-findings-repair-report.md` (subject rewriting
  only).
- Refuter reports: `phase-2-remaining-27-refute-{3,14,15}.json`.
- Hash snapshots: `-step5-hash-{3,14,15}-pre.json` and `-post.json`; the current
  carriers were compared hash-by-hash against both, which is how each
  `accepted_repair`/`amended_repair`/`reverted_change`/`reviewed_no_defect`
  verdict below was fixed.
- Sources pulled and read for this adjudication: Shelah, *Can you take
  Solovay's inaccessible away?* (shelah.logic.at/files/95333/176.pdf:
  Definitions 7.2/7.7/7.9, Claims 7.10-7.13, Main Lemma 7.14(b),(d)); Fleissner,
  *If all normal Moore spaces are metrizable...* (kuscholarworks.ku.edu;
  §2 uniform bases, the metacompactness line at p. 369, conditions (7)-(18b));
  Good, *Large cardinals and small Dowker spaces* (Definition 3, via the
  item's own reference); Good-Tree-Watson, *On Stone's theorem and the axiom of
  choice* (Theorem 4 and Claim 4.2, the zero-dimensional witness).
- Batch risk reviews: `node tools/risk-report.mjs` on each owned batch contract
  before closing, then a complete `risk_review` for every HIGH/CRITICAL item
  (batch 14: 58, batch 15: 27, batch 3: 51) recorded in the owning contract, and
  each contract re-run with `--require-reviewed`.

## 2. Verdicts (one per routed obligation)

Batch 14 — 7 touched, 3 reader, 11 flagged:

| obligation | carrier | verdict |
|---|---|---|
| touched `cex-kelley-cofinite-set-is-not-closed` | item | amended_repair |
| touched `fs-zfc-proves-normal-moore-space-conjecture` | item | accepted_repair |
| touched `thm-bing-q-set-moore-space-is-normal-and-nonmetrizable` | item | amended_repair |
| touched `thm-dc-iff-products-compact-hausdorff-are-baire` | item | amended_repair |
| touched `thm-dmc-implies-compact-hausdorff-baire` | item | amended_repair |
| touched `thm-dmc-tree-and-successor-menu-formulations` | item | amended_repair |
| touched `thm-effective-metacompact-discrete-metrics-implies-ac` | item | amended_repair |
| reader:14:1, reader:14:2 | `thm-fleissner-normal-moore-space-construction` | confirmed_nonfatal |
| reader:14:3 | `lem-ladder-separation-from-hyp` | confirmed_nonfatal |
| refuter:14:1, 14:2 | `lem-solovay-almost-disjoint-extension-under-ma` | confirmed_fatal |
| refuter:14:3 | `lem-ma-produces-an-uncountable-q-set` | confirmed_fatal |
| refuter:14:4 | `thm-bing-q-set-moore-space-is-normal-and-nonmetrizable` | confirmed_fatal |
| refuter:14:5 | `def-fleissner-hyp-covering-interface` | confirmed_nonfatal |
| refuter:14:6 | `def-dodd-jensen-covering-and-square-package` | confirmed_nonfatal |
| refuter:14:7 | `thm-dmc-implies-urysohn-lemma` | confirmed_nonfatal |
| refuter:14:8 | `thm-dmc-tree-and-successor-menu-formulations` | confirmed_nonfatal |
| refuter:14:9 | `def-dependent-multiple-choice-finite-level-tree` | confirmed_nonfatal |
| refuter:14:10 | `thm-relative-consistency-dc-without-stone` | confirmed_nonfatal |
| refuter:14:11 | `thm-dc-iff-products-compact-hausdorff-are-baire` | confirmed_nonfatal |

Batch 15 — 6 touched, 1 page, 1 reader, 4 flagged:

| obligation | carrier | verdict |
|---|---|---|
| touched `def-shelah-universal-meagre-forcing` | item | amended_repair |
| touched `ex-sweet-amalgam-over-a-common-complete-subalgebra` | item | reviewed_no_defect (audit_enrichment) |
| touched `lem-shelah-sweet-density-transfer-along-complete-suborders` | item | amended_repair |
| touched `thm-rapid-filters-are-not-lebesgue-measurable` | item | amended_repair |
| touched `thm-shelah-sweet-amalgamation-preserves-sweetness` | item | amended_repair |
| touched `thm-shelah-universal-meagre-composition-preserves-sweetness` | item | amended_repair |
| page `shelahs-baire-property-model-and-inner-model-lower-bounds` | page | accepted_repair |
| reader:15:1, refuter:15:1 | `thm-shelah-ch-omega-one-sweet-construction` | confirmed_fatal (repaired) |
| refuter:15:2 | `def-shelah-universal-meagre-forcing` | confirmed_fatal (repaired) |
| refuter:15:3 | `thm-raisonnier-filter-is-rapid-from-null-code-measurability` | confirmed_fatal (repaired) |
| refuter:15:4 | `ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets` | confirmed_nonfatal (repaired) |

Batch 3 — 9 touched, 0 reader, 7 flagged:

| obligation | carrier | verdict |
|---|---|---|
| touched `cex-trace-of-products-is-not-cyclic-without-summability` | item | amended_repair |
| touched `def-absolute-value-and-singular-values-of-a-compact-operator` | item | amended_repair |
| touched `ex-a-projection-with-finite-dimensional-kernel-is-fredholm` | item | amended_repair |
| touched `lem-local-finite-dimensional-reduction-for-a-fredholm-map` | item | amended_repair |
| touched `lem-nuclear-series-characterizes-trace-norm` | item | reviewed_no_defect (metadata) |
| touched `thm-inverse-function-theorem-for-banach-spaces` | item | amended_repair |
| touched `thm-singular-value-decomposition-for-compact-operators` | item | amended_repair |
| touched `thm-trace-class-iff-product-of-two-hilbert-schmidt-operators` | item | amended_repair |
| touched `thm-trace-class-is-a-two-sided-banach-operator-ideal` | item | amended_repair |
| refuter:3:1, 3:2, 3:3, 3:4 | `cex-a-closed-uncomplemented-subspace...`, `def-countable-base-banach-manifold-and-smooth-map`, `ex-a-regular-level-set-in-a-banach-space`, `ex-a-projection-with-finite-dimensional-kernel-is-fredholm` | confirmed_fatal (repaired) |
| refuter:3:5, 3:6, 3:7 | `thm-implicit-function-theorem-for-banach-spaces`, `lem-norm-point...`, `ex-diagonal-schatten-class-criteria-on-ell-two` | confirmed_nonfatal (repaired) |

The `amended_repair` verdicts are not cosmetic: every touched carrier differs
from its post-reader snapshot because this adjudication either repaired a
residual defect (batch 14: `thm-bing-q-set...`, `thm-dc-iff-products...`,
`thm-dmc-tree...`; batch 15: `def-shelah-universal-meagre-forcing`,
`thm-raisonnier-filter-is-rapid...`, `thm-shelah-ch-omega-one...`) or because
the owning contract gained the required HIGH/CRITICAL `risk_review` (all of
them). The two `reviewed_no_defect` decisions are a contract-only change
(`ex-sweet-amalgam-over-a-common-complete-subalgebra`) and a frontmatter
metadata change (`lem-nuclear-series-characterizes-trace-norm`).

## 3. Substantive repairs

1. **`thm-shelah-ch-omega-one-sweet-construction`** (reader:15:1, refuter:15:1,
   fatal). The proof claimed that the automorphism produced by
   `thm-shelah-sweet-partial-isomorphism-extension` at the handling stage
   "remains an automorphism of the union". Read Shelah 176 Main Lemma 7.14(b)
   (union-level extension, stated there for `BA(P)`, proved "trivially by
   7.10-7.13") and `thm-shelah-sweet-partial-isomorphism-extension` (the
   countably generated omega-iteration form of 7.13(2)). Repair: the Statement
   now asserts (i) union-level automorphism extension and (ii) task
   answerability plus UM quotients; step 2.3 proves the **stage extension
   principle** from the construction's bookkeeping; steps 4.1-6.1 carry the
   omega_1-recursion `A_xi, A'_xi, h_xi` with `h_{xi+1} = Phi | A_{xi+1}`, the
   cofinal growth of both sides through a fixed enumeration of `B`, limits at
   countable cofinality and the union `h` as a complete automorphism of `B`
   extending `f`. Steps were renumbered to the precheck canonical layering and
   the contract rows, citation uses and inputs were rebuilt accordingly.
2. **`def-shelah-universal-meagre-forcing`** (refuter:15:2, fatal). The
   reader's repair had replaced the blanket compatibility claim by the false
   biconditional "compatible iff the recorded trees agree on the shorter
   level"; the counterexample with `T_1` = no two consecutive 0s, `T_2` = no
   two consecutive 1s (verified here) refutes it. Repair: the correct
   necessary-and-sufficient criterion (agreement plus
   `T_1 ∩ 2^{<=|t_2|} ⊆ t_2`), sufficiency via `T_1 ∪ T_2`, and the
   counterexample are now in the item; Shelah 176 Definition 7.7 was read to
   confirm the recorded-tree convention.
3. **`thm-raisonnier-filter-is-rapid-from-null-code-measurability`**
   (refuter:15:3, fatal). The source's rule `n <= n_j` assigns the boundary
   value `n_{i-1}` to a level that cannot realize it. Repair: the strict rule
   `n < n_j` (deviation from the printed source recorded in the item), the
   level-wise size bound on `[n_{i-1}, n_i)`, and the interval estimate
   `n_{i-1} <= h(f,g) < n_i` in the membership step.
4. **`lem-solovay-almost-disjoint-extension-under-ma`** (refuter:14:1, 14:2,
   fatal). Statement now requires the members of `A` to be infinite (the
   `A = {emptyset}` refutation is recorded); the poset restricts the second
   coordinate to `B \ A`, which is exactly what makes `D_{a,n}` extendable;
   the dense family is `{D_{a,n}} ∪ {E_b}` with `E_b = {(s,F) : b ∈ F}`, and
   the finiteness bound follows from the filter.
5. **`lem-ma-produces-an-uncountable-q-set`** (refuter:14:3, fatal). Replaced
   the open-grid dyadic base (which covers only `R \ Z`, so integers had
   `s(x) = emptyset`) by dyadic-centred intervals: every real lies in
   infinitely many of them, `[L2]` re-derives finite intersections, and step
   3.1 records that `s(x)` is infinite before applying the repaired lemma.
6. **`thm-bing-q-set-moore-space-is-normal-and-nonmetrizable`**
   (refuter:14:4, fatal). Step 2.5 now uses the smaller disks
   `U((a,0),k_n(a))` for `W_n` (so `V_n ∩ W_n = emptyset` by the tangent-disk
   estimate), handles the case `n = m` in the disjointness argument, and
   justifies `cl(W_k) ∩ E_0 = A_k` from the tangency-point estimate and the
   closedness of `A_k` in `E_0`.
7. **`cex-a-closed-uncomplemented-subspace-is-not-a-split-banach-submanifold`**
   (flagged:3:1, fatal). Reframed as the Banach-space separation: `c_0` is
   closed but admits no bounded projection (uncountable family `{A_x}`,
   quotient-norm computation, no countable separating family, contradiction via
   `psi_n`), with the second-countability qualification recorded; the Remark of
   `def-split-banach-submanifold` was aligned. The contract entry was rebuilt
   (25 citations, 9 derivations, boundaries).
8. **`def-countable-base-banach-manifold-and-smooth-map`** (flagged:3:2, fatal)
   and the two examples (flagged:3:3, 3:4, fatal): the "open sets are basic
   examples" Remark now carries the second countability hypothesis with the
   `ell_infinity` counterexample, and both examples require the direct sum to be
   second countable, so the manifold-level definitions they invoke apply.
9. Nonfatal repairs carried out locally: `thm-implicit-function-theorem-for-banach-spaces`
   step 5.1 (codomain clause), `lem-norm-point-of-a-compact-self-adjoint-operator...`
   step 1.1 (boundary parenthetical), `ex-diagonal-schatten-class-criteria-on-ell-two`
   step 1.3 (compactness hypothesis), `def-fleissner-hyp-covering-interface`
   (CH bullet), `def-dodd-jensen-covering-and-square-package` clause 5
   (`square_kappa(E)` per Good's Definition 3), `thm-dmc-implies-urysohn-lemma`
   step 4.1 (successor display and base node),
   `thm-dmc-tree-and-successor-menu-formulations` step 7.1 (initial segments of
   `G_0`), `def-dependent-multiple-choice-finite-level-tree` (pruned/serial
   criterion for `A ≠ emptyset`), `thm-relative-consistency-dc-without-stone`
   (zero-dimensional clause narrowed), `thm-dc-iff-products-compact-hausdorff-are-baire`
   (regularity supplier declared as `[L2]`), `lem-ladder-separation-from-hyp`
   (club adjoined by 0), `thm-fleissner-normal-moore-space-construction` step
   5.1 (uniform-base property verified locally; equivalence cited to the
   source), `ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets`
   (missing parenthesis).

## 4. Recorded but not repaired

- **`thm-fleissner-normal-moore-space-construction` (reader:14:1)** — steps
  9.3-12.1 reference the source's numbered conditions (7)-(12), (17), (18a),
  (18b) without displaying them; nonfatal (the content is traceable through
  Fleissner, printed pp. 369-371, and no owned conclusion depends on the
  labels). Left for the 5b lead with the exact source locators, row
  `e-14-fleissner-conditions` (`nonfatal-recorded`).

## 5. Published items

No published item was found defective in this group's scope, so
`research/published-consumer-supplier-ledger.md` was not modified. The published
suppliers used by the edited items (`thm-a-compact-hausdorff-space-is-regular-and-normal`,
`lem-closed-subspace-of-a-banach-space-is-banach`, `def-second-countable-space`,
`thm-countable-products-of-second-countable-spaces`,
`def-countable-base-banach-manifold-and-smooth-map`'s siblings) were read at
statement level and used as declared; none required repair.


- No item in this group is proposed for withdrawal, and the scope files route no
  withdrawal obligation; nothing was deleted from the carriers.

## 6. Checks run

- `node tools/tsx-run.mjs tools/reflow.mts <each changed item>`: every changed
  file already canonical (`unchanged`).
- `node tools/tsx-run.mjs tools/precheck.mts <each changed item>`: all pass;
  `thm-shelah-ch-omega-one-sweet-construction` was renumbered to the precheck
  canonical layering (4.1/5.1/6.1/7.1) and now passes.
- `node tools/proof-contract.mjs research/phase-2-remaining-27-batch-{3,14,15}.proof-contracts.json --strict`:
  0 errors (batch 15 carries one shotgun-bracket warning on step 1.2, which the
  new layering introduces and which is not an error).
- `node tools/citation-fidelity.mjs <contracts> --fail-on-missing-quote`: every
  recorded quote appears in its cited section; no widening candidates.
- `node tools/risk-report.mjs research/phase-2-remaining-27-batch-{3,14,15}.proof-contracts.json --require-reviewed`:
  0 errors (51/80/34 routed items all reviewed).
- `node tools/rendercheck.mjs <each changed item>`: every changed file parses under KaTeX and the YAML frontmatter parser.
- `node tools/boundary-audit.mjs <contract> --fail-on-contradicted --fail-on-template`: upheld lists empty for all three batches.
- `node tools/depcheck.mjs --quiet` and `node tools/fwdcheck.mjs`: no finding names a carrier edited by this group (the two `cited-not-in-deps` and the single `forward-undeclared` findings are pre-existing and outside these batches).
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`: refreshed and deduplicated; the cross-batch edges this group introduced (second countability and the compact-Hausdorff regularity suppliers) are picked up by the refresh.
- `node tools/defect-ledger.mjs validate --run phase-2-remaining-27`: 0 errors
  (47 new closed rows owned at `5a-adjudicate`).
- `node tools/step5-scope.mjs check --run phase-2-remaining-27 --batch {3,14,15}`:
  run before closing; the only errors expected are the `decision-stale` rows
  whose `subject_sha256` the engine's stamp gate writes after this dispatch.

## 7. Blockers and honest limitations

- No escalation is required: every confirmed fatal defect was repaired locally
  and completely, and the repaired items were reflowed and prechecked.
- The Brunner (German), Corson and Good-Tree-Watson §§2-4 primary sources were
  not opened for this pass (the reader's limitation); the corresponding items
  were reviewed for internal consistency, declared hypotheses and citation
  locators, and that limitation is carried in their `risk_review` notes.
- The Fleissner items were reviewed against the source text extracted from the
  PDF (conditions (4)-(18), the uniform-base section and the metacompactness
  line); the reader's finding N1 (displayed condition numbers) remains recorded
  for the 5b lead.
