# Frontier 30 Step 8 closure recovery — group e

## Result

Handled all 17 exact live rejection tuples assigned to group e. The outcomes
are 14 `confirmed_fatal`, one `confirmed_nonfatal`, and two
`false_positive`. Only the 14 confirmed-fatal items were edited. Each fatal
outcome has one matching defect-ledger row, and no nonfatal or false-positive
item was changed.

There were no incoming alerts, cross-group findings, published-item repairs,
or blockers.

## Exact rows handled

The append-only adjudication ledger records the complete exact tuples. The
hashes below are the full pre-edit guard hashes used by the adjudications, not
the judge-ledger hash form.

| item | context SHA-256 | pre-edit guard SHA-256 | outcome | disposition |
|---|---|---|---|---|
| `cex-a-bijection-of-hom-sets-that-does-not-exhibit-a-cotensor` | `5fb85d9a4bf452bbf1ada6d2e8c9fe7912375d6afce38b29c329c5f073ff5eb7` | `7b4ca33679f966e997ae2974fa87708e5f409a1926b74ddd574f0d1c4bb82bfc` | `false_positive` | The opened dependency proves exactly the stated natural underlying hom-set bijection and failure of the enriched cotensor isomorphism; the rejection inverted that dependency's conclusion. No edit. |
| `def-enriched-category` | `96d1f51cec7f242d00f79dd498e87c18e7205a636494438765263e90ec6a0ad5` | `d7c7a5fd4d48919e654fb15f34307cdbb43af9d27d13bb085008c2184979d538` | `confirmed_fatal` | Corrected both outer composition indices in the associativity equation. |
| `def-enriched-weighted-limit` | `7d0c6514bf076ff3e33c059a27bc6aed4cafb4a317d06c5213b10d0c343b34de` | `b5b1a51fb4bcf8b94e660360af40753cd2eceb267a702f3660dcf187f78221bc` | `confirmed_fatal` | Added the set-sized object collection required to regard the base as a category enriched in itself under the page convention. |
| `ex-two-universal-delta-functors-and-their-unique-isomorphism` | `b4c40ac82364454b6b947d367684c76904e5b297d8dc2560228c7e350d5277bc` | `1458d61b24e8f46deccea2ac9baf641fdbac5766335cf6c0ccb6c8b47d01841e` | `confirmed_fatal` | Added both abelian-category hypotheses and the exact dependency supplying the two natural degree-zero identifications with the base functor. |
| `fs-effaceability-means-every-positive-value-is-zero` | `e8227defcd32b7801ec01499aab6805df1da6c22d187a6b261a8c640d8599494` | `d06d57f62b9a70beefae3ae5bd83de96fb828d97539b4d95bba71deddac65b23` | `confirmed_fatal` | Computed the displayed resolution under a replacement datum and used the exact comparison theorem to transfer its nonzero first-derived value to the arbitrary supplied datum. |
| `lem-extend-a-degree-zero-transformation-through-one-dimension-shift` | `09048a66c3598199bf85c9769341695f264d44800a83f2a79f6686b9b36ff07c` | `0e75bdd92cdb9306458a2480a50218eef728b3a5f3db91583c45b2041f64281c` | `confirmed_fatal` | Narrowed the title to the actual one-step extension of a partial morphism of delta functors. |
| `lem-singular-chain-cross-product-boundary-formula` | `f6169fc2c067f342401f47eb5be0fd01377e0f8a9aa4c49182095484ef7f123c` | `e5422a822bcbe7c70ec46ac2aa586e17366e865cf567d82cf8a1e82299ffeac8` | `confirmed_fatal` | Added direct cases for `p=0` and `q=0`; lower-index Eilenberg–Zilber chains now appear only under `p,q>0`. |
| `lem-the-effacement-extension-commutes-with-connecting-morphisms` | `d3dc1c480e0b382dacfe866082533ac4981091a73c104f4a5ba7b1333fb080f4` | `ab17ff35f6f7bdb8731f77361f200d9c86a19fc65d250cfa7e69bae15f42bba1` | `confirmed_fatal` | Replaced the inflated kernel/cokernel attribution by explicit projective and injective effacement ladders and direct connecting-square calculations. |
| `lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts` | `85a3fc74dd611ddd537a87e74ce45e6d0b89fb43bad532c08c49f56ade1d6b51` | `23b4e655c50af6099a062acc58471fd805eeb7df7cb76dfc5b2afdc6d7b875dc` | `confirmed_fatal` | Used projective comparison uniqueness for changed end lifts, separately from the fixed-side horseshoe result for middle maps. |
| `prop-positive-left-derived-functors-are-effaceable-by-projectives` | `03a93ccf82f8a92cdd989d5b36824e72ff11a859d925b070017a1badac04f00e` | `d64d886302ef8e07ae4385f784a9e736192b2ee1396bf45bb0c53e80e02b8aba` | `confirmed_nonfatal` | The immediately preceding theorem is already a direct dependency and supplies the delta-functor structure under exactly the stated hypotheses. Adding that citation to the proof would be a local step a competent reader closes immediately. No edit. |
| `prop-satellites-give-the-first-derived-functor` | `5dc21c58ab28a3ccfe52e6498ea0280b168c6dd8800b29ac5b072b716e243913` | `a230c107b80c4fcb879f5e45004b3b37d915fd832da88f60ad67c9b16c7204d5` | `confirmed_fatal` | Required both source and target to be abelian before invoking the derived- and delta-functor theorems. |
| `rem-how-much-of-the-theory-needs-symmetry-closedness-and-completeness` | `5985b758c4611a32e469670e5b822965476a13d2dd15e55edf63bfc9a57c8049` | `7d97c55f6dd9f0fd35771eb3308c7e19327b855614a86b7b2c7075ae0dd472cc` | `false_positive` | The opened repository convention permits definable hom-collections in an ordinary category and defines local smallness separately. Mere monoidality therefore supplies the underlying category; local smallness is needed only for set-valued homs. No edit. |
| `rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims` | `3ed4a5fd365eb9d837d833a87bcf994326aa106a1e22287154d01ae26d45bb05` | `88e2b315eb43cf122d09171c2f1d87780f5d9188d11502a78890843267a732d2` | `confirmed_fatal` | Correctly described the cited ordinary functor-category definition, then separately stated the enriched ends needed for all enriched hom-objects. |
| `thm-conical-limits-do-not-suffice-in-the-enriched-setting` | `4757950980922ec9d7c04a52dd325395afcdc2f7b4c0bb456b823d54a329a779` | `32a605842e0cbafdfbdb09cb49f3a013d21d440f864add7459f9ebadc27aaeb7` | `confirmed_fatal` | Narrowed the claim to the proper inclusion of conical weights among enriched weights and expressly retained alternative conical constructions of particular representing objects. |
| `thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables` | `ad947bdc242a95174cbcaf1464d4f8f1830464226e2dc7804451ad868d9cd292` | `997c75ecfbfc04963f0c87854cf05e3b8b60117831a550bea80e9facd6ebfc1b` | `confirmed_fatal` | Replaced the variance error by applying strong Yoneda on the opposite category to the correctly typed functor `A ↦ [F(A),X]`, deriving the co-Yoneda representation. |
| `thm-right-derived-functors-form-a-cohomological-delta-functor` | `f11b2eb0f62d4de036dbe86bc51fcb64087f4163547c02b5c320368285c948da` | `ef1ea291a878f702d978d988fad618b4edc930722d6606c9c598ef3886ed2b8f` | `confirmed_fatal` | Derived the required split short exact cochain sequence from the dual projective horseshoe statement and cited exact comparison-extension independence on cohomology. |
| `thm-strong-enriched-yoneda-lemma-as-a-particular-end` | `845e05497df7e3643ba9a28750a41c7de67321d6f7b0fa36fc58088771fddb2d` | `cf8a8a6d32a5f0a91177f7a66d09ba32cae515db28b38f802a72b0a4d2ec9fe7` | `confirmed_fatal` | Added the set-sized base object collection required by the cited self-enrichment result under this page's convention. |

## Licensed repairs and stale targets

These 14 changed items, and no others, are the targets made stale by this
dispatch. The engine owns the subsequent cycle or terminal-adjudication
routing; this dispatch did not invoke a judge or initiate another cycle.

| item | post-edit guard SHA-256 | defect row |
|---|---|---|
| `def-enriched-category` | `092d667dc3730d684095bf3fce22f7377adcc4c1c11b3c6ae4768c55f410fad1` | `frontier-30-A8R1-e-001` |
| `def-enriched-weighted-limit` | `82ad7ca90aff231ac388411bc839a336a538ff77072ec1480c752f9627af5999` | `frontier-30-A8R1-e-002` |
| `ex-two-universal-delta-functors-and-their-unique-isomorphism` | `9719ba1417a2d1b0b38ed17b4ab1709c99364d663049ecbadec4a9f19303b8ff` | `frontier-30-A8R1-e-003` |
| `fs-effaceability-means-every-positive-value-is-zero` | `c46571384ac2b1ad26ce3ad651b8ae8fbfdfe7cab0f0a7744b254306339e4a6b` | `frontier-30-A8R1-e-004` |
| `lem-extend-a-degree-zero-transformation-through-one-dimension-shift` | `63aba0714dc76dc8872489c7a9522f710acbef2c5a7daef261375fb44a165ba2` | `frontier-30-A8R1-e-005` |
| `lem-singular-chain-cross-product-boundary-formula` | `283b212a083c203e55b4e166740099b33967ed3e277c72b5157245d467910f1e` | `frontier-30-A8R1-e-006` |
| `lem-the-effacement-extension-commutes-with-connecting-morphisms` | `72d92e7f0889011033c40b3f02ebaa59b40a335ab54b63721b13e83bda09e582` | `frontier-30-A8R1-e-007` |
| `lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts` | `4d0bb3cbdb88ac3041011df15e0409cfb1b2ab66ebe2248b08a82399a68def0a` | `frontier-30-A8R1-e-008` |
| `prop-satellites-give-the-first-derived-functor` | `9a02c83026c93d6168280c07bbe4d1b82ede328f9f665c21f9d4eeabacc3982f` | `frontier-30-A8R1-e-009` |
| `rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims` | `bcd5bcb775de29184be56e8b66b49da7a4165d2962b762de580d443d77976d7b` | `frontier-30-A8R1-e-010` |
| `thm-conical-limits-do-not-suffice-in-the-enriched-setting` | `8d50caca56bac37cb5ac7e44a1d1ba8bdecc011138350107e8143f576a4f668c` | `frontier-30-A8R1-e-011` |
| `thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables` | `fefe0afa814ac17e5d293ec5055690137ff8bb2e6d1cb398bcc7aa93a08d35e4` | `frontier-30-A8R1-e-012` |
| `thm-right-derived-functors-form-a-cohomological-delta-functor` | `4496a52c7b069c5e3280ccd55980851461b69bb95d37bfc13519c56b7491b1e3` | `frontier-30-A8R1-e-013` |
| `thm-strong-enriched-yoneda-lemma-as-a-particular-end` | `c99889e5f50faf974b870d6e097c558a16cb90576cf836a4784f40703f20ba83` | `frontier-30-A8R1-e-014` |

## Sources consulted

- Emily Riehl and Dominic Verity, *Elements of ∞-Category Theory*, Appendix A:
  `https://emilyriehl.github.io/files/elements.pdf`. Theorem A.3.11 gives the
  enriched Yoneda isomorphism for a small enriched category; Definitions
  A.6.1–A.6.2 give arbitrary weighted limits and their end/coend
  constructions; Example A.6.12 identifies conical weights as terminal
  weights; and Corollary A.6.16 states that cotensors plus small conical limits
  construct all small weighted limits.
- G. M. Kelly, *Basic Concepts of Enriched Category Theory*, canonical TAC
  edition landing page: `https://www.tac.mta.ca/tac/reprints/articles/10/tr10abs.html`.
  The landing page verifies the canonical source edition used by the items;
  the exact repaired formulas were cross-checked in the Riehl–Verity appendix
  above because the TAC PDF fetch timed out in this dispatch.
- Charles Weibel, *An Introduction to Homological Algebra*, Chapter 2:
  `https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf`.
  Horseshoe Lemma 2.2.8 supplies the split short exact sequence of resolution
  complexes; the derived-functor proof records that an additive functor
  preserves it, and §2.5 obtains right-derived cohomological delta functors by
  passage to the opposite category.
- The Stacks Project, Section 12.12:
  `https://stacks.math.columbia.edu/tag/010P`. Definition 12.12.1 requires
  abelian source and target categories, and Lemma 12.12.4 constructs the
  universal next-degree map through the displayed cokernel equation.
- MIT 18.905, Lecture 7:
  `https://ocw.mit.edu/courses/18-905-algebraic-topology-i-fall-2016/9e7c0386b3c2febaa2cf58e75d9c7c32_MIT18_905F16_lec7.pdf`.
  The notes state the integral-chain Leibniz boundary formula and describe the
  Eilenberg–Zilber shuffle chain used in the repaired proof.

## Alerts and blockers

No other-group or published dependency defect was found. No cross-group alert,
alert disposition, or published-repair row was written. There are no blockers.

## Checks

- Focused precheck: 11 proof-bearing repaired items checked, 0 failing.
- Focused rendercheck: 14 repaired items checked, 0 rendering, math, YAML, or
  frontmatter failures.
- `node tools/depcheck.mjs --quiet`: no hard errors; existing corpus warnings
  remain.
- Defect-ledger append: 14 rows appended through
  `tools/defect-ledger.mjs append`; the generated view was refreshed.
- `node tools/defect-ledger.mjs check --run frontier-30 --adjudications research/frontier-30-judge-adjudications.jsonl`:
  542 run rows checked, 0 errors.
- Step-8 guard against `pre-step8`: 176 changed items, all 176 licensed; no
  creations or deletions.
- `node tools/step8-scope.mjs check --run frontier-30`: 7 groups, 694 items,
  0 open rejections, and 0 cross-group alerts; passed.

## Frozen integrity close — round 1

### Gates and assigned ids

Closed the group-e portions of the `proof-contract`, `boundary-audit`, and
`citation-fidelity` failures. The exact affected ids were:

- `thm-enriched-categories-functors-and-natural-transformations-form-a-two-category`
- `thm-a-category-enriched-in-categories-is-exactly-a-small-object-strict-two-category-with-small-homs`
- `thm-a-category-enriched-in-a-preorder-is-a-preorder-and-one-enriched-in-sets-is-an-ordinary-category`
- `thm-a-category-enriched-in-abelian-groups-is-exactly-a-preadditive-category`
- `thm-a-category-enriched-in-the-two-element-lattice-is-a-preordered-set`
- `cor-the-enriched-yoneda-embedding-is-fully-faithful`
- `thm-the-free-enriched-category-two-adjunction`
- `thm-there-is-in-general-no-constant-enriched-functor`
- `thm-enriched-completeness-is-cotensors-plus-small-conical-limits`
- `thm-a-lax-monoidal-functor-induces-a-change-of-base-on-enriched-categories`
- `thm-a-right-enriched-adjoint-preserves-weighted-limits`
- `ex-a-metric-space-as-an-enriched-category`
- `fs-the-strong-enriched-yoneda-lemma-for-a-large-category-constructs-the-whole-enriched-functor-category`
- `thm-strong-enriched-yoneda-lemma-as-a-particular-end`
- `thm-every-enriched-functor-into-the-base-is-a-weighted-colimit-of-representables`

The first thirteen ids had stale citation quotes after licensed terminal edits
to `def-enriched-category`, `def-enriched-weighted-limit`,
`thm-strong-enriched-yoneda-lemma-as-a-particular-end`, and
`rem-the-particular-yoneda-end-and-the-enriched-functor-category-are-different-size-claims`.
Their current facts and derivations remained accurate, so only the verbatim
contract quotes were regenerated.

The last two ids were `empty`-axis detector candidates. The first candidate is
inapplicable because the regex matched a set-size hypothesis, the monoidal base
contains its unit object, and the chosen object `K` makes the Yoneda indexing
category nonempty. The second candidate is likewise triggered by the set-size
hypothesis; when its source category is empty, the natural-isomorphism claim is
vacuous, and otherwise the proof checks an arbitrary object. Both existing
`not_applicable` dispositions were retained with item-specific Alpha
`reviewed.upheld` records.

The frozen envelope contained no live rejection tuple. The current Step-8 scope
also reports no open rejection or cross-group alert, so no adjudication,
mathematical item, judge record, stamp, impact record, defect row, or shared
append-only ledger was changed.

### Non-item records changed

- `research/frontier-30-batch-9.proof-contracts.json`
- this closure-recovery report

The level contract was checked through a temporary deterministic merge. It was
not written here; the engine-owned `merge-contracts` gate performs that merge
before the contract battery.

### Focused checks

- Strict proof contract for the thirteen quote-affected ids: 13/13 checked,
  zero errors and zero warnings.
- Strict proof contract for owned batches 9, 10, and 11: 41/41, 32/32, and
  25/25 checked, with zero errors and zero warnings.
- Citation fidelity for owned batches: 282 citations over 98 authored items,
  zero missing quotes and zero widening candidates.
- Boundary audit for owned batches: 784 rows, zero contradicted dispositions,
  zero template clusters, and both item-specific upholds recognized.
- Reviewed risk reports for owned batches: zero errors in each batch.
- Temporary 20-batch merge: 527/527 strict proof contracts checked with zero
  errors; the sole warning names the out-of-group item
  `lem-clopen-subset-gives-idempotent-decomposition`. The merged boundary and
  citation checks have zero failures.
- Splice verification: 48 pages across 20 manifests agree with the plan.
- Step-8 scope: seven groups, 694 partitioned items, zero open rejections, and
  zero unresolved cross-group alerts.

### Blockers

None for group e.
