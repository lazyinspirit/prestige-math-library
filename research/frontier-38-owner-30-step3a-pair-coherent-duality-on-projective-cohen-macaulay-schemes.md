# Step 3a scope review — `coherent-duality-on-projective-cohen-macaulay-schemes`

- Run: `frontier-38-owner-30`; role alpha; label
  `step3a-pair-coherent-duality-on-projective-cohen-macaulay-schemes-e3570cf667080eb7`.
- Pair: A `coherent-duality-on-projective-cohen-macaulay-schemes` / B
  `coherent-duality-on-projective-cohen-macaulay-schemes-examples` (batch 28,
  orders 903/904, algebraic-geometry). Owned pair only; no scaffold, item,
  owner record or sibling batch file edited.
- Decision: **sufficient** for the intended subject as designed. No omitted
  topic, result or example found; no enrichment or pair merger proposed; no
  unmet prerequisite found. Owner action: none required before Step 3b
  authoring of this pair. This is a scope review; proof correctness was not
  assessed.

## Evidence read

- Controlling design: `research/plan-algebraic-geometry-expansion-track.md`
  row AG-DUAL-1 (L254; page registration L45). It contracts the A results
  `def-dualizing-complex-on-projective-cm-scheme`,
  `thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme`,
  `rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case`,
  `rem-curve-residue-duality-is-the-dimension-one-case`, the three listed B
  examples, and the sources V25 Ch. 29 (Cor. 29.3.10/29.3.14) plus Stacks
  §48.27 [0FVV–0FW0], with "two full source routes checked".
  Owner amendment: `research/frontier-38-owner-30-owner-authoring-direction.md`
  (903/904 bullet, L80) requires closing each missing duality prerequisite
  locally while preserving the full contracts and base categories.
- Drift verdict `no-drift` with the critical regular-quotient/biduality,
  coinduction, CM Ext-concentration, projective-space evaluation and
  trace/Yoneda-independence seams inspected:
  `research/frontier-38-owner-30-alpha-step1-drift.md` (903 section). Local
  packet note `research/frontier-38-owner-30-local-prereq-903.md` (full):
  inventory, supplier-use table, Stacks tag list, Vakil/Jeffries read
  locators, AC usage and check results.
- Manifests and plan: `research/frontier-38-owner-30-batch-28.pages.json`
  (A 11 items, B 3 items; A `requires` = the seven published pages below; B
  requires A only), `research/plan-spec.json` (pages 903/904; seven local
  A additions flagged `local_addition: true`), `research/frontier-38-owner-30-packet-integration.md`
  (903/904 = AG-DUAL-1, 11 A / 3 B / 7 A local additions),
  `research/frontier-38-owner-30-scope-ledger.json`, `...-covers.json`, and
  the run dispatch. Cross-batch input
  `...-batch-28.cross-batch-dependencies.json` is `[]`; no other in-run page
  requires 903/904.
- Coverage: `research/frontier-38-owner-30-batch-28.coverage.json` — 45
  harvested rows over the two pages, all dispositioned; re-ran
  `node tools/coverage-checklist.mjs` on it: 0 errors, 1 advisory
  `coverage-low-yield` (A page 6/39 `included`).
- Item statements read on disk: the definition, the main theorem, both
  comparison remarks, and all three B items (frontmatter and Statement
  sections); the 14 items are `draft`, with no `forward_refs` and no
  `proved_here: false`.
- Live source spot check: Stacks tag 0FVZ (Lemma 48.27.5) fetched and read —
  proper, Cohen–Macaulay, equidimensional $d$-dimensional scheme over a
  field: $\omega_X$ is a dualizing module; there are functorial
  $\operatorname{Ext}^i_X(K,\omega_X[d])=\operatorname{Hom}_k(H^{-i}(X,K),k)$
  for $K\in D_{\mathrm{QCoh}}(X)$ and
  $\operatorname{Ext}^{d-i}_X(\mathcal F,\omega_X)=\operatorname{Hom}_k(H^i(X,\mathcal F),k)$.
  The pair's theorem is the projective coherent specialization of this
  statement, with the same hypotheses and conclusion form.

## Inventory against the design

- A: 11 items = the four contracted AG-DUAL-1 rows plus the seven
  owner-authorized same-page `local_addition` lemmas. The contracted set is
  all present: the dualizing-complex/normalized-$\omega_X$ definition; the
  coherent Serre duality theorem (Ext pairing, dual form, derived form,
  coherent biduality, singular $X$ allowed); the smooth locally-free
  comparison; the dimension-one comparison. The local lemmas (finite-ring
  coinduction, regular-quotient biduality, CM quotient Ext concentration,
  projective-embedding existence, projective-space derived duality,
  trace/embedding independence, pure-CM concentration to
  $D_X=\omega_X[d]$) supply exactly the duality foundations the design row
  names. 11 < 100.
- B: exactly the design's three leaves, in order: the nodal plane cubic with
  $\omega_C=\mathcal O_C$ and node-skyscraper Ext computation; the
  $\mathbb P^2$ surface example for twists and a point skyscraper; the affine
  line counterexample showing the pairing fails without properness. They
  exercise the singular coherent case (the pair's distinctive target), the
  non-locally-free coherent case, and the properness boundary; all apply the
  A theorem rather than duplicating it.

## Source coverage

- Dispositions (45 rows): 6 `included`, 31 `inline`, 2 `already-published`,
  6 `out-of-scope` with individual reasons. Two independent full routes back
  the pair: Vakil Ch. 29 §§29.1–29.4 read in full from the 2025-10-21 author
  PDF (852 pp., fetch-verified SHA-256 `d07177aa…`), and Stacks 48.27 tags
  0FVV/0FVW/0FVY/0FVZ/0FW0 read in full, with Stacks Ch. 47 (dualizing
  complexes, 57-page PDF) and Jeffries' *Local Cohomology* §4.4 as the
  independent local CM/canonical-module treatment. Every promise of the
  design row is covered: Cor. 29.3.10/29.3.14 map to the theorem, Prop.
  29.1.8 and §29.1.12–13 to the trace/independence lemma, Thm. 29.4.3 and
  Prop. 29.4.8 to the general and example computations, and Stacks 0FVZ to
  the exact coherent statement.
- I confirmed the single advisory: the six declined A rows are the
  necessity-of-CM remark, the local-to-global Ext spectral sequence, the
  finite-cover $\pi^!$ route, the finite/flat comparison propositions, the
  Gorenstein aside, and the perfect-complex evaluation pairing. Each is an
  alternative proof route or a non-promised aside, not a dropped AG-DUAL-1
  promise; the 31 `inline` rows are absorbed by the named local items.

## Prerequisite assessment

- Direct dependencies: by parsing the frontmatter `deps` of all 14 items,
  every non-local target is an existing `published` item file — 44 distinct
  published suppliers, 0 missing files, 0 draft or recorded targets. Every
  wikilink in the 14 item bodies (50 distinct targets) resolves to a local
  or existing item file. No `forward_refs` and no cross-batch edge.
- The seven declared `requires` pages are published, all with plan order
  below 903: `ext-and-balanced-resolutions` (365.051),
  `derived-categories` (365.063),
  `quasi-coherent-and-coherent-sheaves-and-vector-bundles` (366.075),
  `proj-projective-schemes-twisting-sheaves-and-ampleness` (366.077),
  `sheaf-cohomology-cech-cohomology-and-comparison` (366.081),
  `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`
  (366.083), and `smooth-projective-serre-duality-and-flag-variety-line-bundles`
  (510.0161); the B page's only requirement is its own A companion.
- No published page or item references this pair, so there is no
  published-consumer conflict and no duplication of the smooth theorem the
  comparison remark reuses.
- No unmet prerequisite found — no confirmed gap and no uncertain candidate.
  Residual uncertainty, stated honestly: (i) I verified statement-level
  scope, dependency availability and link closure, not each proof's internal
  uses; (ii) the proof-level obligations remain ordinary Step 3b/5 work;
  (iii) the Vakil PDF was not re-downloaded by me — its two coverage rows
  carry fetch-verified hashes from the step-1 reading, and my live check was
  the Stacks 0FVZ statement.

## Minor record notes (not scope-affecting; no owner action)

1. The plan row cites Vakil printed pp. 793–812 while the local source note
   records the read window as 793–810 and the batch coverage row as 792–812;
   a locator-window nuance only, not a missing result.
2. The `coverage-low-yield` advisory counts only `included` rows; the `inline`
   declines are individually documented against named local items, and I
   confirmed no AG-DUAL-1 promise sits in the six `out-of-scope` rows.

## Scope judgement

The intended subject — dualizing complexes and normalized dualizing sheaves
on projective schemes over a field, coherent Serre duality on projective pure
Cohen–Macaulay schemes in pairing, Ext-dual and derived form, with the smooth
locally-free AG-LIE theorem and the dimension-one residue normalization as
comparisons — is fully planned, with every missing duality prerequisite
registered as a same-page item and no dependence on unbuilt or unselected
pages. The B leaf covers the design's examples and counterexample exactly,
including the singular coherent case that distinguishes this pair from the
published smooth theorem. The pair is new (draft items; not published), so
there is no published-consumer conflict.

Next action: scope receipt recorded at
`research/frontier-38-owner-30-step3a-review-coherent-duality-on-projective-cohen-macaulay-schemes.json`
(decision `sufficient`); Step 3b may author the 11 A rows and 3 B rows against
this scaffold with no scope change.
