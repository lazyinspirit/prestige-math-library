# Batch 26 Step 1 scaffold — Bochner Inversion and Plancherel on Lca Groups

Run `frontier-39-analysis-30`, role beta, label batch-26. Owned pair:
`bochner-inversion-and-plancherel-on-lca-groups` (A, order 510.06503) /
`bochner-inversion-and-plancherel-on-lca-groups-examples` (B, order 510.06504),
category `fourier-analysis`. Outputs: `research/frontier-39-analysis-30-batch-26.pages.json`
(20 A items + 5 B items; page cap 100 respected), `...-batch-26.coverage.json`, this
note, `...-batch-26.cross-batch-dependencies.json` (empty array: no in-run consumer
edge), one `research/frontier-39-analysis-30-step1-<id>.json` readiness record per item,
and the refreshed unified ledger. No published content, item file, shared plan, engine
state or verdict was edited. This record covers construction only; it is not an
independent mathematical review.

## Scope, plan, and owner direction

- `research/frontier-39-analysis-30-owner-authoring-direction.md` does **not** exist
  (checked before construction); the binding texts are the dispatch, CLAUDE.md,
  SCHEMA.md, WORKFLOW.md, the design section and `research/plan-spec.json`.
- The design row is **FR-16** at `research/plan-fourier-analysis-track.md` L1042. The
  plan-spec page `bochner-inversion-and-plancherel-on-lca-groups` has the same order,
  title, companion and `requires` array as the dispatch, and `items: []`. The plan
  therefore carries no item inventory to conflict with; the design's 15 numbered rows
  plus the mandated local rows 1a–1e (20 A items) and 5 B leaves were all preserved
  verbatim, unweakened, with the design's dependency order
  1, 1a, 1b, 1c, 2, 1d, 1e, 3, 5, 6–11, 4, 12–15 (manifest order matches).
- All six `requires` pages are **published on disk** (checked item files and page
  frontmatter): `character-groups-and-elementary-lca-duals` (FR-15, 13 A items),
  `fourier-transform-convolution-and-approximate-identities`,
  `banach-algebras-spectrum-and-holomorphic-functional-calculus`,
  `gelfand-theory-and-commutative-c-star-algebras`,
  `radon-measures-and-the-riesz-markov-kakutani-theorem`,
  `haar-measure-existence-and-uniqueness`. No in-run supplier or consumer edge exists
  for this batch, so every `dependency_level` counts only the batch-local rows.

## Recorded conflicts / design-vs-evidence notes

1. **Item 4 vs item 12 (reading recorded, no cycle).** The design's item 4 one-liner
   mentions that the dual integral is "absolutely controlled after compatible Haar
   normalization", but it also states that "Item 4 must not claim dual absolute
   integrability before that normalization is proved" and that "No proof may use that
   conclusion to construct Bochner's measure or the dual Haar scale". The scaffold
   keeps item 4 as the density/positivity core only and places the dual-integrability
   and normalization claims in item 12; item 12 depends on 4, and item 4 depends on no
   later item. `item-dependency-levels` reports no cycle.
2. **B4 source attribution.** The design attributes
   `cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite`
   to an "EW C.3 example". Appendix C.3 (read in full, printed pp. 433–439) contains the
   positive-definite definition (C.1), the Herglotz–Bochner and inversion theorems and
   the concrete dual computations, but no explicit bounded continuous non-positive-
   definite example. The manifest therefore keeps the standard explicit example
   $\phi=\mathbf 1_{[-1,1]}$ on $\mathbb R$ (`literature-derived` statement,
   `ai-altered` proof) and verifies it directly by the displayed $3\times3$
   determinant $-1$; EW is cited for the definition/Bochner context only. No claim was
   weakened or dropped.
3. **EW page range.** The design cites EW Appendix C.2–C.3 as printed pp. 432–439;
   C.2 begins on printed p. 431 (PDF p. 162). The coverage locator records the exact
   wider range read (431–439). No mathematical difference.
4. **Körner source retrieval.** The author URL
   `https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf` currently serves an incomplete TLS
   certificate chain: `curl` and Node `fetch` both fail verification
   (`UNABLE_TO_VERIFY_LEAF_SIGNATURE`; `openssl` verify code 21). An Internet Archive
   snapshot of the same file was fetched instead and is byte-identical to the
   `curl -k` copy of the author file (227927 bytes, SHA-256
   `5697a7d11ed629683d89aa001287a26ce2492ebae815c81bf502e28a454153d7`, 30 pages). The
   coverage cites the snapshot URL and records the host problem; this is a recovered
   source, not a `source_resolution` drop. The design's note that Körner §§10–12 give
   statements/exercises without proofs of Theorems 10.6, 12.3, 12.4, 12.6, 12.7 was
   confirmed against the full text; the proof cost stays on Loomis and the local
   routes, exactly as the design states.
5. **Design order vs plan order for FR-17.** The design's reconciliation ledger says
   FR-17 requires FR-15, FR-16 and the quotient/product topology pages, while the
   current plan-spec FR-17 `requires` array is the one this run planned; that is a
   downstream pair's scope question, not a batch-26 conflict. Recorded for the owner.

## Inventory and dependency levels

Every item carries `design_row: FR-16`, explicit `deps`, provenance and source
references, and the `dependency_level` recomputed by `tools/item-dependency-levels.mjs`
(1 + maximum level of its in-run deps; published suppliers do not raise it). Rows 1a–1e
carry `local_addition: true`; the fifteen design rows and the five B leaves do not.

| Level | Item |
|---:|---|
| 0 | `def-fourier-transform-on-an-lca-group` |
| 0 | `def-positive-definite-function-on-an-abelian-group` |
| 1 | `lem-lca-lone-convolution-is-a-commutative-banach-star-algebra` |
| 1 | `lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite` |
| 1 | `cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite` (B) |
| 2 | `lem-lca-translations-and-normalised-local-approximate-identities` |
| 2 | `lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution` |
| 3 | `lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations` |
| 3 | `lem-lca-positive-convolution-squares-form-an-inversion-core` |
| 4 | `lem-lca-lone-character-topology-is-the-compact-open-topology` |
| 5 | `lem-lca-scalar-unitization-character-space-and-spectrum` |
| 6 | `thm-riemann-lebesgue-lemma-on-lca-groups` |
| 6 | `lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core` |
| 7 | `lem-fourier-stieltjes-transforms-determine-finite-radon-measures` |
| 8 | `lem-bochner-functional-extends-and-has-a-radon-representing-measure` |
| 9 | `thm-bochner-theorem-for-lca-groups` |
| 10 | `cor-normalised-positive-definite-functions-correspond-to-probability-measures` |
| 10 | `thm-compatible-dual-haar-normalisation` |
| 10 | `ex-a-character-is-positive-definite` (B) |
| 11 | `thm-lca-fourier-inversion-for-integrable-transform` |
| 12 | `lem-lca-parseval-pairing-on-the-integrable-core` |
| 12 | `ex-haar-normalisations-on-the-circle-and-the-integers` (B) |
| 12 | `ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual` (B) |
| 12 | `cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions` (B) |
| 13 | `thm-lca-plancherel-isometric-extension` |

## Dependency and prerequisite verification

Published suppliers were opened and their statements (and, for the load-bearing ones,
their argument routes) were checked against the use declared here. Key checks:

- **FR-15**: `lem-character-evaluation-pairing-is-jointly-continuous` is stated for LCA
  $G$ with the compact-open dual and gives exactly the joint continuity used by items 1,
  2, 7; `thm-dual-of-an-lca-group-is-locally-compact-abelian` (AC) licenses Haar measure
  on $\widehat G$ in item 12; `lem-dual-identity-neighbourhood-is-compact` and
  `thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals` back
  the B leaves, and the latter's clause (2) is the AC-through-Tychonoff route used in
  `ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual`.
- **RG-18**: `def-left-haar-integral-and-left-haar-measure` supplies invariance for
  abelian groups, positivity, and compact finiteness; `lem-translations-preserve-
  compactly-supported-continuous-functions` supplies the fixed-compact-support
  continuity; `thm-uniqueness-of-left-haar-measure-up-to-scale` (AC) is the uniqueness
  used in item 12.
- **MT**: `thm-c-c-is-dense-in-l-p-for-radon-measures` (DC) is the density used in 1b,
  3, 4, 15; `thm-tonelli-and-fubini-for-completed-product-measures` and
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces` (DC) are the Fubini
  inputs (the $\sigma$-compact support reduction is stated in items 1a and 1b so that
  the non-$\sigma$-finite Haar case is not silently assumed away);
  `lem-positive-c-zero-functionals-have-finite-regular-representing-measures` and
  `thm-rmk-uniqueness-among-radon-measures` are the Riesz–Markov inputs of items 5, 9.
- **FA-17/FA-18**: `thm-characters-on-a-unital-banach-algebra-are-continuous` is ZF and
  is used in 1c; the AC-assuming spectrum/character-space machinery
  (`thm-maximal-ideals-and-characters-of-a-commutative-banach-algebra`,
  `thm-spectrum-as-character-values`, `thm-maximal-ideal-space-is-compact-hausdorff`,
  `thm-spectral-radius-formula`, `def-holomorphic-functional-calculus`,
  `thm-holomorphic-spectral-mapping`) is used only in its general Banach-algebra form in
  item 1e, whose normal-operator identity is
  `cor-normal-operator-norm-equals-spectral-radius`. Neither the minimal C*-unitisation
  theorem nor the character-space-of-the-unitisation theorem is used.
- **`thm-complex-stone-weierstrass-self-adjoint`** is unital and choice-free and is
  applied to the compact character space of $A^+$ in item 5; the transform algebra is
  self-adjoint and occurs with the single common zero $q$, which is exactly the
  vanishing-at-one-point case of that theorem.
- **LP/integration**: `thm-riesz-fischer-completeness-of-l-p`,
  `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space`,
  `thm-extension-of-a-bounded-map-from-a-dense-subspace` (DC),
  `thm-nonnegative-integral-zero-iff-zero-almost-everywhere` and the L^2
  Cauchy–Schwarz item supply items 1a, 13, 14, 15.
- **No RG-19 import**: `def-complex-haar-lp-spaces-and-compactly-supported-functions`,
  `thm-l1-group-algebras-have-a-contractively-bounded-approximate-identity` and the
  modular-function page (frontier-35, order 510.067, later than 510.06503) are
  deliberately **not** used; items 1a and 1b rebuild those interfaces locally, as the
  design requires.
- **Choice.** Items state AC and/or DC exactly where the designed route uses them: AC
  through Gelfand/Zorn/Banach–Alaoglu/holomorphic calculus in 1e and its consumers
  (3, 5, 8–15 and the B leaves that use 10–13), DC through Fubini, C_c-density and the
  extension theorem in 1a, 1b, 1e, 3–5, 8, 12–15. Items 1, 2, 6 and 7 are stated
  without AC; no item is choice-free by accident.

## Checks actually run (2026-10-04)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-26.pages.json`
  → `25 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-26.pages.json`
  → `25 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs ...-batch-26.coverage.json --require-destination`
  → `2 page(s), 72 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage ...-batch-26.coverage.json --stamp`
  → `6/6 source(s) fetch-verified (6 newly stamped)`; check mode later
  `6/6 source(s) fetch-verified` and `6/6 source(s) resolved`.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` → exit 1
  with `empty scaffold inventory` findings, **all in the other not-yet-scaffolded
  batches** (58 page rows when first run; 56 after the concurrently running batch-25,
  Lie algebra cohomology, landed its 18 items). No batch-26 finding: no cycle, no label
  mismatch, and batch-25 does not depend on this pair. This whole-run check closes once
  every sibling batch is scaffolded; re-run before the 1-scaffold gate.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30` →
  batch-26 input accepted (empty array, no in-run consumer edge); 29 batches are
  `unreviewed_batches` at this instant, which is the expected mid-scaffold state. The
  `--require-reviewed` form exits 1 with
  `Cross-batch review incomplete: supply every batch input and review every declared edge`
  until the sibling batches supply their inputs.
- `node tools/step1-decisions.mjs check --run frontier-39-analysis-30` → 25 items,
  **25 ready**, `closed: false` only through the 58 `Empty scaffold inventory` page rows
  of the 29 not-yet-scaffolded sibling batches; no batch-26 row.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0 (no cycle, no forward
  reference, no unresolved id, no page over the cap; the note that planned pages without
  item lists are not yet dependency-checked is expected until Step 4).
- `node tools/manifest-integrity.mjs --run frontier-39-analysis-30` → `60 page(s) owed,
  60 in the manifests; no scope drift`.
- `node tools/drift-review-check.mjs --run frontier-39-analysis-30` → `30 page(s)
  reviewed, 6 spec edit(s) applied, no blocked edges`.
- `node tools/extcheck.mjs` → exit 0; the only output rows are pre-existing published
  `unproved-on-published` warnings on unrelated pages (`thm-baire-category-...`,
  `thm-urysohn-lemma`), none in this batch.
- `node tools/url-sweep.mjs --coverage ...-batch-26.coverage.json --recover --fail-on-dead`
  → `4/4 live; 0 failed` (the four distinct URLs; the Körner archive snapshot resolves).
- `node tools/source-backing.mjs --coverage ...-batch-26.coverage.json --liveness ...`
  → `27 authored result(s) ... every one still backed by an openable source or
  documented alternative argument`, exit 0.

## Final frozen-battery snapshot (2026-10-04, after the last manifest edit)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-*.pages.json`
  → `79 item(s), 0 normalized, 0 error(s)` (batch-26's 25 among the sibling items then on disk).
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-*.pages.json`
  → `79 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/manifest-integrity.mjs --run frontier-39-analysis-30` → `60 page(s) owed,
  60 in the manifests; no scope drift`.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` → zero
  findings mentioning batch-26, no cycle and no label mismatch anywhere scaffolded.
- All 568 `$...$` / `$$...$$` segments of the manifest parse under KaTeX with
  `throwOnError` (checked against the app's `katex` copy; this is a parser sanity check,
  not the renderer gate).

## Hash currency and concurrent siblings

`node tools/step1-decisions.mjs check --run frontier-39-analysis-30` reports 43 run items
(25 of this batch plus batch-25's 18) and **all 25 batch-26 records current**. Editing an
item's bytes invalidates the readiness record of every transitive in-run consumer, so
after the final text edit to item 12 the six affected records (items 13–15, B1, B2, B5)
were re-recorded against the final bytes; the check now returns no batch-26 row. The
manifest is frozen at the state hashed by those records.

## Escalations and unresolved uncertainty

- **No escalation is raised by batch 26**: the complete local closure fits on the A
  page (20 of at most 100 items), every prerequisite is published or locally
  scaffolded in order, and no selected pair or cross-batch placement needed changing.
- **Largest authoring obligation (recorded, not a scaffold failure):** item 12 carries
  the local implementation of the abstract Plancherel-type theorem of Loomis §26J/§36B
  (positive functional on the dense ideal, construction/uniqueness of the representing
  measure, translation invariance and Haar uniqueness). The design already flags this
  as owed proof work; the item strategy states the exact route so Step 3 does not
  substitute Körner's statement-only sections for it.
- **Published defects:** none was established in the suppliers used. The examination
  here is statement-level plus the declared routes (including the FR-15, RG-18, MT and
  FA-17/18 items named above); it is not an independent audit of those published
  proofs, and any later finding must go to the canonical ledger.

## Independent Step 3b audit and final source freeze (2026-10-05)

Supplier-first audit covered all 26 current B26 items and their current dependency interfaces. Final scope: `72da3efd7ebc317c5b467620b8bd283fda6a2b5b208e74f72d29e800b928be2e`. No tests or gates were run. Sources, the B26 page manifest, and the 24 proof-bearing contract entries are synchronized. Focused proof-layout passed on the 14 repaired sources (89 steps, zero defects); strict proof-contract passed 26/26 (zero errors/warnings). Definitions were checked directly and have no numbered proof.

Repairs preserve full LCA scope and the original choice budgets: corrected the negative unit phase in the positive-definite Definition; removed uncountable neighborhood choices using all admissible kernels/finite covers; repaired translation versus inversion substitutions and zero-cutoff cases; justified product measurability through C_c representatives on sigma-compact supports; fixed null-representative invariance and regular complex density uniqueness; removed divisions by possibly zero character ratios, justified separable-range Bochner integration, and used an explicit cutoff for character uniqueness; made square polarization explicit; restricted the small-neighborhood mass Fact to nondiscrete groups; corrected the integrated positivity kernel, finite partitions and reflected points, inserted the Riemann–Lebesgue supplier and proved both inequalities in the transform-core bound; corrected the representing-mass epsilon estimate; clarified exact fixed Haar uniqueness with reciprocal rescaling; restricted the probability correspondence to Radon probabilities; made inverse uniform continuity and simultaneous L1/L2 compact-kernel approximation explicit. The transform-core helper now has dependency level 7; the Bochner extension remains level 8.

Claim-change consumers were enumerated with parsed source/manifest dependencies. The probability corollary has no direct consumers. Compatible normalization has the three in-B26 inversion/Parseval/isometry consumers and B27 neighborhood basis. Positive-definite Definition has only B27 character separation outside B26. Approximate-identity indexing has B27 neighborhood basis, L2-range density, and positive transform bump. All four outside consumers retain sound unchanged Statements and sources; only their exact B27 contract rows were synchronized. Ordinary receipts wait for current direct suppliers and owner proceed; three stale owner rows require root refresh.

Assigned heat consumer is B18, not B12: `cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup`. Its proof L7 and Step 4.1 distinguish real-lambda holomorphic generation from nonnegative-lambda bounded analyticity and explicitly use lambda_*>0. Statement unchanged. Exact B18 contract row passed strict 1/1, zero errors/warnings; layout passed 1/14/0. Initial current ordinary receipt recorded at `2e159a55c033f9e6be19c00a2033b73d129e68daef2a572490f9e9ef4042c184`; final read-only carrier recheck after the B26 freeze confirmed the same current hash and closed receipt; strict exact-row recheck again passed 1/1, so no further B18 write was needed. No other B18 carrier or B12 row was edited.

### Frozen B26 composite hashes

| Item | Current transitive hash | Owner row |
|---|---|---|
| `def-fourier-transform-on-an-lca-group` | `d202c1ccfa70bfe00186564ff6aa52490dd344aacb57a421431b4a004999f62e` | ordinary review |
| `lem-lca-haar-measure-is-inversion-invariant` | `52f0f4426fa44c3182e25d116c513ef926cdde766824b415c300ce1738f0e97c` | ordinary review |
| `lem-lca-lone-convolution-is-a-commutative-banach-star-algebra` | `7367b6617b8a47a783301a59115447c248bc8144a087b40893acd90dc4ed45be` | ordinary review |
| `lem-lca-translations-and-normalised-local-approximate-identities` | `b19083024240bb746b0990a9aa7305a7c326626593eb2591a09bd56a6a398ec8` | ordinary review |
| `lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations` | `073f17fb9ccbd68a54cce2674a36390a3f04b699ffc045fb5d07360c85d5f923` | ordinary review |
| `lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution` | `793dcf31f3963b1724db5f4a5972f23ab33422a8f5b2bffdf7ba1535e3ca0f3e` | ordinary review |
| `lem-lca-lone-character-topology-is-the-compact-open-topology` | `0585943f8a28b430aa5d40c52445b76aa5db132b3d244cb575aa774f952e5b22` | ordinary review |
| `lem-lca-scalar-unitization-character-space-and-spectrum` | `444ca219e9692c784eb21ba94ffa76a7f5f9653d676beb45f058864687e06f2c` | ordinary review |
| `thm-riemann-lebesgue-lemma-on-lca-groups` | `5362c9d4087afaa9acbf96fa220b300ea5926e4c574f7ad698310b952a8ac340` | root refresh required |
| `lem-fourier-stieltjes-transforms-determine-finite-radon-measures` | `f4ca79b346c1084b12c870535f509afecae3472e0033e23d2b11986f013982d1` | ordinary review |
| `def-positive-definite-function-on-an-abelian-group` | `7f2dd3baa1c2af58ef6bf7f6c6bd21ee4bba2e6c1694c6993218a7610543d72b` | ordinary review |
| `lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite` | `dd630c578cf49a96eb23bae87e44670e47ad1416b705ab28c7c2f661d3a35904` | ordinary review |
| `lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core` | `28984b34fe54d7fcc2e37297d8df3106956d74734d4483b0296bf0f558c64c5c` | ordinary review |
| `lem-bochner-functional-extends-and-has-a-radon-representing-measure` | `533e6960453ed146a19f51efebddbe53a7cd0b0ff599da3886974298695cb18a` | ordinary review |
| `thm-bochner-theorem-for-lca-groups` | `6e5eff0b18868c042f9ed392ad91410dbe9a1adb6f47f1667b7a94859abc3f76` | ordinary review |
| `cor-normalised-positive-definite-functions-correspond-to-probability-measures` | `b76973a6011ee8aa9e203bf67c6f0bc6887cdcd1636074dc46f935d549bc67b9` | ordinary review |
| `lem-lca-positive-convolution-squares-form-an-inversion-core` | `ee63c97cfda3b9800badaea046a75b029e2ebe8521c1ff0e106759df08ab88b7` | ordinary review |
| `thm-compatible-dual-haar-normalisation` | `b5c2ce56297a0c4ba7514b9a4c3acdef4e69317681547347b383e0312491f00b` | root refresh required |
| `thm-lca-fourier-inversion-for-integrable-transform` | `f6459d84926bd13e5df8277185eb6e74ad2bff591e886cb760c8b228d8d1c9df` | ordinary review |
| `lem-lca-parseval-pairing-on-the-integrable-core` | `e7dc991f76984b6edfa00066e5b4be98ba1f2a8f3f5b4abc11e64c5404f500ec` | ordinary review |
| `thm-lca-plancherel-isometric-extension` | `cc65d7b510421d35509e1a1a7d171317a92c12bdcea044a70a394acda6a25f91` | ordinary review |
| `ex-haar-normalisations-on-the-circle-and-the-integers` | `3e24936fbac39e6ad7e759781fca8242def17519285215c788d016e737123bf5` | ordinary review |
| `ex-haar-normalisations-on-a-finite-abelian-group-and-its-dual` | `9a2e644c9066690f4a29865a5f6b6718666bf886a1c95c3eff6aaa3608ce7d86` | ordinary review |
| `ex-a-character-is-positive-definite` | `12f3c90f4f5c3edf5f3614e283af326301cad4d8f696398850e2d2ae9553b275` | ordinary review |
| `cex-a-continuous-function-of-modulus-at-most-one-need-not-be-positive-definite` | `488258fa4dc2e87a234dde9c42951b907a024d93a6cec51e59369be18e2290a6` | root refresh required |
| `cex-lca-fourier-inversion-is-not-an-everywhere-statement-for-arbitrary-lone-functions` | `ed296b409bd8796b7202526a63d2f38a28f924017d55b42fd32c2229b88339d9` | ordinary review |

### Source writes

- `items/def-positive-definite-function-on-an-abelian-group.md`
- `items/lem-lca-haar-measure-is-inversion-invariant.md`
- `items/lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite.md`
- `items/lem-lca-lone-convolution-is-a-commutative-banach-star-algebra.md`
- `items/lem-lca-translations-and-normalised-local-approximate-identities.md`
- `items/lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations.md`
- `items/lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core.md`
- `items/lem-lca-scalar-unitization-character-space-and-spectrum.md`
- `items/lem-lca-positive-convolution-squares-form-an-inversion-core.md`
- `items/lem-bochner-functional-extends-and-has-a-radon-representing-measure.md`
- `items/thm-compatible-dual-haar-normalisation.md`
- `items/cor-normalised-positive-definite-functions-correspond-to-probability-measures.md`
- `items/thm-lca-fourier-inversion-for-integrable-transform.md`
- `items/thm-lca-plancherel-isometric-extension.md`

Final handoff: 0/26 B26 rows currently closed pending the changed-scope owner proceed and three stale owner refreshes; no outside B26 supplier is open. Root reserved B27/B28 for another single writer, so no further B27 source, manifest, contract or receipt writes will be made in this lane. The four authorized direct-consumer contract rows had been refreshed immediately before that reservation and passed strict 4/4, with no B27 source/manifest/receipt edits. Final complete item/dependency table is also saved in `/tmp/b26-core-freeze.json`.
