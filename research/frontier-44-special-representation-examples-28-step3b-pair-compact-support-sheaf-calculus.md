# Step 3b — pair `compact-support-sheaf-calculus` (batch 32)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-compact-support-sheaf-calculus-49fcdd969bebeba4`.

Owned A page: `compact-support-sheaf-calculus` (order 1798, scheme-theory, 10
scaffolded items). Owned B page: `compact-support-sheaf-calculus-examples`
(order 1804, 1 scaffolded item). Batch 32 is hard-wired to this pair alone
(`research/…-batch-32.pages.json` holds only these two pages), so no sibling
pair rows exist in the shared batch files.

## Owned IDs and open obligations (entry checkpoint)

A items (all scaffold-only; item files, page, contract entries owed):
`def-support-of-a-sheaf-section` (level 0),
`lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology` (level 0),
`lem-sections-near-a-compact-set-are-sections-on-that-set` (level 0),
`def-c-soft-sheaf` (level 1),
`def-compactly-supported-global-sections` (level 1),
`lem-c-soft-field-sheaves-are-compact-support-acyclic` (level 2),
`lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward`
(level 3),
`lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology`
(level 4),
`lem-vanishing-compactly-supported-h1-on-opens-implies-c-soft` (level 4),
`lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions`
(level 5).

B item (scaffold-only; item file and B page owed):
`ex-compact-support-and-softness-on-a-finite-discrete-space` (level 3).

Open obligations at entry: (1) author all 11 item files and both pages
`library/scheme-theory/compact-support-sheaf-calculus.md` and
`library/scheme-theory/compact-support-sheaf-calculus-examples.md`;
(2) audit each scaffold statement, hypothesis and declared supplier against the
current inputs, repairing local gaps; (3) write
`research/…-batch-32.proof-contracts.json` with exact citation quotes,
per-step inputs and boundary dispositions; (4) run the checks named by the
dispatch (proof-layout, precheck, rendercheck, content-policy, depcheck,
depsource, manifest-deps, item-dependency-levels, validate-plan,
coverage-checklist, source-fetch-check, strict proof contracts,
boundary-audit, citation-fidelity); (5) record a step-3 item decision for
every owned ID; (6) reconcile supplier uses and report escalations. Direct
in-run prerequisite pairs to inspect: none (the dispatch and
`…-batch-32.cross-batch-dependencies.json` declare none).

Step-3a inputs: scope decision **sufficient**, no owner scope receipt needed,
findings F1–F3 recorded as observations (none blocking). The owner resolved the
earlier simplicial-`requires` escalation on 2026-10-09
(`research/…-native-initial-foundations-metadata-repair.json`), so
`validate-plan` is expected clean for this pair.

## Checkpoint log

### 2026-10-10/11 — checkpoint after the first three items

- `def-support-of-a-sheaf-section` (level 0): authored earlier in this run;
  item file, contract entry and manifest row in place; decision recorded
  `accept`; precheck not-applicable (definition), rendercheck and proof-layout
  clean; `step3-decisions check --phase final` reports the receipt current.
- `lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology` (level 0
  in the scaffold, now level 1): authored; its boundary-map construction was
  rebuilt on the new `lem-compatible-refinement-for-tuple-indexed-coverings`
  instead of the unavailable Godement-shrinking shortcut; decision recorded
  `repaired` / `["dependency"]`.
- New prerequisite `lem-compatible-refinement-for-tuple-indexed-coverings`
  (level 0, A page; Stacks Topology Lemma 13.5, tag 09UW): fully authored,
  contract entry written, registered in the manifest and coverage. It is a new
  addition absent from the pre-author scaffold inventory, so the engine
  certifies it after dispatch and no Step-3 item decision is recorded for it.
- `lem-sections-near-a-compact-set-are-sections-on-that-set` (level 0):
  authored in full after Schapira §10.1 Proposition 10.1.2(ii) — local
  representation of a section of `i^{-1}F` over `K`, shrinking of the finite
  cover to compact cores in the normal compact Hausdorff space `K`, patching of
  the ambient representatives on neighbourhoods of the pairwise intersections,
  and an explicit fusion lemma for two compact pieces, iterated; the
  pairwise-disjoint-compact gluing is the vacuous-agreement case. All
  selections are finite and no choice principle is used. The declared scaffold
  dependencies were replaced by the 25 exact suppliers used (stalk,
  filtered-colimit, normality, compactness and finite-choice items included).
  Checks green: precheck PASS (direct), rendercheck OK, proof-layout 10 steps /
  0 defects; contract entry with 28 exact citations added and passing strict
  mode; decision `repaired` / `["dependency"]` recorded 2026-10-10T11:44:59Z.
- Batch checks at this checkpoint: `proof-contract --strict` 3/3 contracted
  items clean; `manifest-deps` 12 items, 0 errors; the only depcheck finding on
  the new item is the page wikilink `[[compact-support-sheaf-calculus]]`, which
  resolves once the two owed pages are written.
- Next: `def-c-soft-sheaf` (level 1), then
  `def-compactly-supported-global-sections` (level 1).

## Checkpoint log (continued, same run date 2026-10-10/11)

### Checkpoints 4–6 (second authoring session)

- `def-c-soft-sheaf` (level 1, 9 manifest deps): content unchanged; an
  unresolvable page wikilink `[[compact-support-sheaf-calculus]]` in its
  Remarks was replaced with self-referential prose, because `depcheck` resolves
  item wikilinks to item ids and aliases only. Receipt refreshed (`repaired`).
- `def-compactly-supported-global-sections` (level recomputed 1 → 8 by
  `item-dependency-levels`): statement and proof unchanged; the dependency
  level was refreshed to the computed value in the item and the manifest.
  Receipt refreshed.
- `lem-c-soft-field-sheaves-are-compact-support-acyclic` (level recomputed
  2 → 9): a dangling dependency `def-injective-object-in-an-abelian-category`
  (no such item exists; it appeared in the deps list and in fact [F5]) was
  replaced by the published `def-injective-object`; and clause (5) was
  strengthened to the source form of Schapira Proposition 11.2.6: the
  compact-support sequence is exact as soon as the kernel is c-soft — the
  corrected lift of step 3.2 is glued directly with zero on the complementary
  open set, so the middle term's c-softness is used only in step 4.1 for the
  quotient clause (Proposition 11.2.7). This resolves Step-3a finding F1 for
  this pair. Contract entry rebuilt (24 citations, 12 derivations, 8
  boundaries); receipt refreshed.
- `lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward`
  (level 10, 40 deps): authored in full. Degree-zero identities
  $\Gamma_c(X,j_!\mathcal A)=\Gamma_c(U,\mathcal A)$ and
  $\Gamma_c(X,i_*\mathcal B)=\Gamma_c(Z,\mathcal B)$ are equalities of
  subgroups, proved by comparing supports up to ambient compactness; c-softness
  is preserved by $j_!$ (clause (1) of the acyclicity lemma applied on $U$) and
  by $i_*$ (a direct neighbourhood argument); $i_*$ is exact by the stalk
  computation at points of $Z$ and outside $Z$; the derived isomorphisms are
  obtained from the acyclic-resolution theorem applied to $j_!$ of an injective
  resolution and to $i_*$ of one, with naturality through universality of the
  derived delta functors (effaceability by injectives). Stated for abelian
  sheaves, covering the $k$-vector sheaves of the scaffold. 10 steps, 30
  citations, contract green; decision `repaired` / `["dependency"]`.
- `ex-compact-support-and-softness-on-a-finite-discrete-space` (level 10): the
  B example was authored: sheaves on a finite discrete space are families of
  stalks with product section groups; compact subsets are finite and extension
  by zero is literal, so every sheaf is c-soft; X is compact, so
  $\Gamma_c=\Gamma=\bigoplus_xV_x$ and all higher groups vanish; and the
  constant-family functor is right adjoint to $\Gamma_c$ by the universal
  property of the finite direct sum. The scaffold's `def-sheaf-hom` input was
  replaced by `def-morphism-of-presheaves` (the claim is about global Hom-sets,
  not the internal Hom sheaf), and the citation of a sibling B-page example was
  replaced by `def-standard-topologies` after `depcheck` flagged a
  `b-leaf-content` dependency. 5 steps, 16 citations; decision `repaired` /
  `["dependency"]`.
- `lem-vanishing-compactly-supported-h1-on-opens-implies-c-soft` (level 11,
  23 deps): authored. For compact $K$ the open/closed decomposition of the
  space along $K$ (extension by zero on $X\setminus K$, closed pushforward on
  $K$) has a long exact compactly supported sequence whose connecting map lands
  in $H^1_c(X\setminus K,\mathcal E)=0$ by hypothesis and whose middle terms are
  $\Gamma_c(X,\mathcal E)$ and $\Gamma(K,\mathcal E|_K)$; exactness makes the
  restriction map onto, so sections over compact sets extend with compact
  support. The converse is open-restriction c-softness plus acyclicity. 5
  steps, 18 citations; decision `repaired` / `["dependency"]`.
- `lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology`
  (level 11, 32 deps): authored. For every open cover of a finite polyhedron a
  Lebesgue number and a fine barycentric subdivision give an open star cover
  refining it with multiplicity at most $d+1$; the ordered Čech complex of an
  order-bounded cover vanishes above $d$; the star covers are cofinal, and the
  cofinal-family corollary of the refinement-limit comparison gives
  $H^q(P,\mathcal F)=0$ for $q>d$ for every sheaf. The compact-support clause
  transports along $j_!$ for open subspaces, and the general clause covers
  every compact Hausdorff space whose covers admit finite refinements of order
  at most $d+1$. Clause (3) was restricted to Hausdorff spaces: the scaffold
  said "compact topological space", but both the comparison theorem and the
  compact-support transport are proved for locally compact Hausdorff spaces.
  9 steps, 23 citations; decision `repaired` / `["statement","dependency"]`.
  The owner-resolved simplicial-requires escalation of 2026-10-09 remains
  resolved in `plan-spec.json`; `validate-plan` reports no error on this page.
- `lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions`
  (level 12, 26 deps): authored. Fibres of a continuous map into a Hausdorff
  space are closed, hence locally compact Hausdorff; an injective resolution on
  $X$ restricts fibrewise to a c-soft resolution; for open $V$ in a fibre the
  long exact sequences shift dimensions so that
  $H^1_c(V,Z^d|_V)\cong H^{d+1}_c(V,\mathcal A|_V)=0$; the vanishing criterion
  makes the $d$-th cokernel fibrewise c-soft, and the syzygies concatenate to a
  bounded resolution of length $d$; the $d=0$ case and the constant sheaf are
  recorded. The scaffold's clause about bounded complexes was deferred rather
  than asserted: totalising termwise resolutions needs a Cartan–Eilenberg-style
  compatible choice of comparison maps, which this foundation does not supply,
  and no claim in this pair depends on it. 5 steps, 18 citations; decision
  `repaired` / `["statement","dependency"]`.

### Batch battery — actual results at handoff

- `node tools/tsx-run.mjs tools/precheck.mts` (all 12 batch items by explicit
  path): 9 checked, 0 failing (the three definitions have no proof phase).
- `node tools/proof-layout.mjs` (all 12 batch items, one command): 12 items,
  84 steps, 0 defects.
- `node tools/rendercheck.mjs` (12 items + both new pages): OK — YAML, math
  delimiters, KaTeX parse.
- `node tools/content-policy.mjs …-batch-32.pages.json --json`: scope 12,
  0 errors, 0 warnings.
- `node tools/depcheck.mjs --items-file <batch items>`: 0 errors, 0 warnings.
  (The earlier `link-unresolved` errors for item-prose page links and the
  `b-leaf-content` error for the example were repaired, not waived.)
- `node tools/depsource.mjs research/plan-spec.json --run … --items-file
  <batch items>`: 12 consumers checked, 0 errors; every direct supplier is
  published or in-batch.
- `node tools/manifest-deps.mjs …-batch-32.pages.json`: 12 items, 0 errors;
  every item's manifest deps/level were synced to its frontmatter.
- `node tools/proof-contract.mjs …-batch-32.proof-contracts.json --strict`:
  12/12 items contracted, 0 errors, 0 warnings.
- `node tools/boundary-audit.mjs …-batch-32.proof-contracts.json
  --fail-on-contradicted --fail-on-template`: 96 boundary rows, 28 marked
  not_applicable, no contradicted disposition, no template reuse.
- `node tools/citation-fidelity.mjs …-batch-32.proof-contracts.json
  --fail-on-missing-quote`: 192 citations, every recorded quote present in its
  cited item, no widening candidate.
- `node tools/coverage-checklist.mjs …-batch-32.coverage.json --json
  --require-destination`: 2 pages, 27 harvested rows, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage …-batch-32.coverage.json`:
  8/8 sources fetch-verified; 8/8 resolved, 0 documented drops.
- `node tools/item-dependency-levels.mjs check --run …`: no error for any
  batch-32 item after the recomputation (levels 8, 9, 10, 11, 11, 12 and 10 for
  the B example; the two level-0/1 items already matched). Thirteen remaining
  errors belong to sibling in-flight batches.
- `node tools/validate-plan.mjs research/plan-spec.json --run …`: no error on
  either batch-32 page; the four `undeclared-prereq` errors are on other pages
  (below). `compact-support-sheaf-calculus` carries `redundant-prereq`
  advisories (its `compactness` and other direct requires are already in the
  closure); they are warnings, as at Step 3a.
- `node tools/step3-decisions.mjs check --run … --phase final`: all eleven
  assigned originals carry current receipts; the only open batch-32 row is the
  engine-certified addition `lem-compatible-refinement-for-tuple-indexed-coverings`,
  which by design receives its certification from the engine at dispatch.

## Handoff

**Completed IDs.** All eleven assigned items are authored, checked and carry
current Step-3 decisions:

- `def-support-of-a-sheaf-section` (level 0, decision `accept`),
- `lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology` (level 1,
  `repaired`),
- `lem-sections-near-a-compact-set-are-sections-on-that-set` (level 0,
  `repaired`),
- `def-c-soft-sheaf` (level 1, `repaired`),
- `def-compactly-supported-global-sections` (level 8, `repaired`),
- `lem-c-soft-field-sheaves-are-compact-support-acyclic` (level 9,
  `repaired`),
- `lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward`
  (level 10, `repaired`),
- `ex-compact-support-and-softness-on-a-finite-discrete-space` (level 10,
  `repaired`),
- `lem-vanishing-compactly-supported-h1-on-opens-implies-c-soft` (level 11,
  `repaired`),
- `lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology`
  (level 11, `repaired`),
- `lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions`
  (level 12, `repaired`).

Both pages are written: `library/scheme-theory/compact-support-sheaf-calculus.md`
(11 items) and `library/scheme-theory/compact-support-sheaf-calculus-examples.md`
(1 example), status draft. The contract file has one entry per item.

**Added suppliers (this pair, A page).** `def-support-of-a-sheaf-section`,
`def-c-soft-sheaf`, `def-compactly-supported-global-sections`,
`lem-compatible-refinement-for-tuple-indexed-coverings`,
`lem-compact-support-calculus-of-extension-by-zero-and-closed-pushforward`,
`lem-vanishing-compactly-supported-h1-on-opens-implies-c-soft` and
`lem-refinement-limit-cech-cohomology-agrees-with-sheaf-cohomology`. The last
six are additions absent from the scaffold inventory; registration in the
manifest, coverage and page is done, and the engine certifies them after
dispatch — no Step-3 item decision is recorded for
`lem-compatible-refinement-for-tuple-indexed-coverings`, and the other five are
original scaffold ids whose ordinary decisions are recorded above.

**Checks actually run.** The battery listed in the previous section, every
command on explicit paths or explicit manifests; all green for this pair. No
item of this pair was exempted or skipped.

**Published concerns (with evidence and repair strategy).**

1. *(resolved on this pair)* Step-3a F1, Schapira 11.2.6 stated weaker than the
   source: clause (5) of `lem-c-soft-field-sheaves-are-compact-support-acyclic`
   now has the source strength (exactness with only the kernel c-soft), with
   step 3.2 rewritten to glue the corrected lift directly. The coverage
   disposition of 11.2.6 ("included") is now accurate.
2. *(open, non-blocking)* Step-3a F2, harvest-disposition wording: the
   coverage dispositions for Schapira 11.2.3/11.2.4/11.2.5 still read
   "inline"/"included" for statements whose infinite filtered-colimit, small
   direct-sum and general-$f_!$ forms are deliberately not claimed. The
   coverage file records the declines with reasons for the strong forms, but
   the inline/included rows remain broader than the authored claims. Repair
   strategy for the serial reconciler: narrow those disposition wordings to the
   cases stated on the page, or leave as recorded with this report as the
   qualification.
3. *(open, non-blocking)* Step-3a F3, B-page depth: the single B example lives
   on a finite (hence compact) discrete space, where $\Gamma_c=\Gamma$, so it
   cannot exhibit the compact-support phenomenon it names; the design planned
   exactly this example and scope is met as designed.
4. *(recorded statement repairs; owner may override in Step 4)*
   (a) `lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology`
   clause (3) is stated for compact **Hausdorff** spaces, not arbitrary compact
   spaces, because the comparison theorem and the compact-support transport are
   Hausdorff results;
   (b) `lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions`
   omits the scaffold's clause about bounded complexes: the totalisation needs
   a Cartan–Eilenberg-style compatible choice of comparison maps (naive
   termwise lifts need not square to zero), which this foundation does not
   supply, and no consumer in this run depends on it;
   (c) the per-item definitions are stated for abelian sheaves with the
   $k$-vector case recorded, matching the c-softness definition actually used.
5. *(observation for the run reconciler)* Item prose in sibling pairs that
   links a page id (`[[page-id]]`) fails `depcheck`'s item link resolution; the
   three occurrences in this pair were repaired by self-referential prose.
6. *(run-wide, not this pair)* `validate-plan --run` currently reports four
   `undeclared-prereq` errors on sibling pages
   (`logarithmic-hodge-complexes-and-smooth-open-weights` twice,
   `equivariant-borel-moore-correspondence-convolution-and-constructible-ext-examples`,
   `ariki-categorification-and-graded-decomposition-numbers`), and
   `item-dependency-levels check --run` reports thirteen sibling-level
   mismatches; none involves a batch-32 page or item.

**Open obligations.**

- The addition `lem-compatible-refinement-for-tuple-indexed-coverings` awaits
  the engine's certification; it is fully authored, registered and green on
  every content, dependency, source, rendering and contract gate.
- Manifest `statement`/`strategy` fields retain the pre-author scaffold text
  for the items whose authored statements diverge as in item 4 above; item
  files, deps and levels are synced, statements were deliberately not rewritten
  with wikilink-stripped text.
- Coverage F2 wording, the B-depth observation F3, and the two statement
  repairs (polyhedral Hausdorff clause, deferred complex clause) are escalated
  here for Step 4 as required; nothing in this pair is marked complete that is
  not proved.
