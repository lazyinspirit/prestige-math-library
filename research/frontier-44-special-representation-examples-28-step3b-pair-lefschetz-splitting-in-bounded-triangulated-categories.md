# Step 3b — scaffold audit and authoring: `lefschetz-splitting-in-bounded-triangulated-categories` / `…-examples`

- Run: `frontier-44-special-representation-examples-28`
- Role/label: alpha-high / `step3b-pair-lefschetz-splitting-in-bounded-triangulated-categories-ce9bf92a803fe091`
- Batch: 33 (A page order 1799, `homological-algebra`; B page order 1806)
- Date: 2026-10-10

## Owned IDs and open obligations at entry

A page `lefschetz-splitting-in-bounded-triangulated-categories` (all seven
files are new; the batch-33 scaffold manifest carries their statements,
strategies and sources):

1. `def-truncation-functors-and-cohomology-of-a-t-structure` (level 0)
2. `lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition` (level 0)
3. `lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual` (level 1)
4. `lem-truncation-triangles-are-essentially-unique-and-functorial` (level 1)
5. `lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude` (level 2)
6. `lem-hard-lefschetz-splits-a-bounded-t-structure-complex` (level 3)

B page `lefschetz-splitting-in-bounded-triangulated-categories-examples`:

7. `ex-hard-lefschetz-splitting-for-a-three-degree-complex` (level 4)

Deliverables at entry: the seven `items/<id>.md` files; both
`library/homological-algebra/<page>.md` pages;
`research/frontier-44-special-representation-examples-28-batch-33.proof-contracts.json`;
seven current item decisions via `tools/step3-decisions.mjs record-item`; the
scoped checks battery; this report.

Open obligations at entry:

1. Audit each scaffold for authoring readiness: exact hypotheses, source
   locators, direct suppliers and proof route, in ascending `dependency_level`
   (ties by page order and item ID exactly as dispatched).
2. Author all seven items completely (numbered steps, blue tags, QED) and both
   pages; sync each item's `deps`/`dependency_level` to actual uses, preserving
   sibling rows in the shared batch files.
3. Recheck Step 3a observations against current inputs: the three added local
   prerequisite items are genuinely consumed; the source bookkeeping nuances
   (dCM (26)–(27) orthogonality not asserted; Deligne (1.2) row) need no claim
   change; the `thm-double-annihilator-and-annihilator-dimension` global-AC
   note must be reconciled with the per-item `axiom_use: None` claim.
4. Verify the published suppliers actually cited by the proofs (Deligne,
   dCM, BBD ranges; the triangulated-category, abelian-category,
   linear-algebra and bilinear-form packages) and report any published
   concern with exact IDs and evidence.
5. Run the checks named by the dispatch (proof-layout batched over all changed
   items, explicit-path precheck, rendercheck, content policy, strict proof
   contracts, dependency-level check, `validate-plan`, manifest/coverage
   reconciliation) and record one item decision per owned ID.
6. No direct in-run prerequisite pair to inspect was assigned; batches 42 and
   48 are consumers, not suppliers, of this pair.

## Checkpoint log

(updated after each item; resume here)

### Entry (2026-10-10)

- Read: `CLAUDE.md`, `SCHEMA.md`, the batch-33 scaffold manifest,
  `…-batch-33.notes.md`, `…-batch-33.coverage.json`, the Step 3a pair review
  (`sufficient`), the plan section `research/plan-klr-foundation-prerequisites.md`
  L382–427, the four `…-klr-foundation-semisimplicity-drafts/items/` author
  inputs, the owner authoring direction, and the published supplier package
  (triangulated categories, t-structures, Hom sequences, split criteria,
  abelian-category splitting, Jordan basis, bilinear forms, derived category).
- No item was written yet. Next action: author the level-0 definition and the
  level-0 graded hard Lefschetz lemma after reading their exact suppliers.

The items were then authored and checked in the dispatched dependency-level
order (ties by item ID): `def-truncation…` 0, `lem-graded-hard-lefschetz…` 0,
`lem-nilpotent-lefschetz…` 1, `lem-truncation-triangles…` 1,
`lem-t-cohomology…` 2, `lem-hard-lefschetz-splits…` 3,
`ex-hard-lefschetz-splitting…` 4. Checkpoints follow.

### 1. `def-truncation-functors-and-cohomology-of-a-t-structure` (A, level 0) — authored

- Claim: fixes the shifted aisles $\mathcal T^{\le n},\mathcal T^{\ge n}$, the
  truncation triangle $\tau_{\le n}X\to X\to\tau_{\ge n+1}X\to\tau_{\le n}X[1]$,
  the truncation functors, the t-cohomology $H^n_t(X)=(\tau_{\le n}\tau_{\ge n}X)[n]$,
  amplitude and bounded t-structures; asserts no algebraic property (proved in
  the two following lemmas). Scaffold claim preserved verbatim in substance; the
  closing sentence was made precise (existence is the t-structure axiom).
- Sources: BBD, Astérisque 100, §1.3.1–1.3.9, printed pp. 28–33 (the manifest
  row also carries the deferred §5.4.10–5.4.13 range).
- Deps/`justified_by`: unchanged from the scaffold
  (`def-canonical-t-structure-on-a-derived-category`, `def-triangulated-category`;
  justified by the two following lemmas).
- Checks: `precheck` n/a (no phase body), `proof-layout` 0 steps,
  `rendercheck` OK, `content-policy` item-mode clean. Decision: `accept`,
  defects `[]`.

### 2. `lem-graded-hard-lefschetz-has-a-canonical-primitive-decomposition` (A, level 0) — authored

- Claim: graded objects $H^j$ in an abelian category, $L^j:H^j\to H^{j+2}$
  with $L^r:H^{-r}\to H^r$ an isomorphism for every $r\ge0$ and $L^0=1_{H^0}$,
  primitives $P^{-r}=\ker L^{r+1}$: for every $r\ge0$,
  $H^{-r}=\bigoplus_{j\ge0}L^jP^{-r-2j}$ and
  $H^{r}=\bigoplus_{j\ge0}L^{r+j}P^{-r-2j}$, restricted powers monomorphic,
  decompositions natural; explicitly no identification with primitive classes
  under an untruncated map on a derived splitting.
- Convention made explicit: $L^0=1_{H^0}$ (the source convention for the
  identity iterate) and the displayed summands are images of restricted powers.
- Sources: dCM §2.2.3(c) p. 12, Theorem 4.4.4(b) p. 35, §4.5 (22)–(27)
  pp. 37–38; Deligne §1 (1.6)–(1.7) pp. 107–110.
- Deps: the scaffold's nine abelian-category suppliers (splitting lemma,
  kernel/cokernel, image/coimage, biproduct). Decision: `accept`, defects `[]`.
- Checks: `precheck` PASS (steps 1.1–8.1), `proof-layout` 10 steps / 0 defects,
  `rendercheck` OK.

### 3. `lem-nilpotent-lefschetz-filtration-is-canonical-and-self-dual` (A, level 1) — repaired (dependency)

- Claim: for a nilpotent endomorphism $N$ of a finite-dimensional space, the
  unique admissible filtration $W$ ($N(W_i)\subseteq W_{i-2}$,
  $N^r:\operatorname{Gr}_r\to\operatorname{Gr}_{-r}$ an isomorphism for all
  $r\ge0$), given intrinsically by
  $W_i=\sum_{a-b=i}\ker N^{a+1}\cap\operatorname{im}N^b$; self-duality
  $(W_i)^\perp=W_{-i-1}$ for a nondegenerate skew-adjoint form, the induced
  perfect pairing of graded pieces, and the descended nondegenerate forms
  $S_i([v],[w])=S(v,N^iw)$.
- Repair: the scaffold's annihilator-dimension step used the AC-tainted
  published `thm-double-annihilator-and-annihilator-dimension`; it was replaced
  by the choice-free package `thm-dual-family-is-a-basis-in-finite-dimension`,
  `thm-dimension-of-a-linear-subspace`, `thm-rank-nullity` and
  `def-annihilators-under-the-evaluation-pairing`. The item is choice-free
  (`axiom_use: None`); this closes the Step 3a AC observation.
- Sources: dCM §2.2.3(c), Theorem 4.4.4, §4.5 (22)–(27) pp. 37–38;
  `thm-nilpotent-jordan-string-basis` and the linear-algebra/bilinear-form items.
- Checks: `precheck` PASS (steps 1.1–9.1), `proof-layout` 19 steps / 0 defects,
  `rendercheck` OK. Decision: `repaired`, defects `["dependency"]`.

### 4. `lem-truncation-triangles-are-essentially-unique-and-functorial` (A, level 1) — repaired (dependency)

- Claim: (i) essential uniqueness of every distinguished triangle
  $A\to X\to B\to A[1]$ with $A\in\mathcal T^{\le n}$, $B\in\mathcal T^{\ge n+1}$
  over $X$, uniquely; (ii) $\tau_{\le n}$ and $\tau_{\ge n}$ are functors
  adjoint to the aisle inclusions, with orthogonality
  $\operatorname{Hom}(\mathcal T^{\le n},\mathcal T^{\ge n+1})=0$; (iii) the
  four equivalent aisle criteria on each side; (iv) closure of the aisles under
  extensions and finite direct sums (iff for summands), the iteration
  isomorphisms and $\tau_{\le m}\tau_{\ge n}=0$ for $m<n$.
- Repair: the dependency row was rebuilt to the suppliers actually used (TR3,
  morphisms and rotations of triangles, zero/split triangles, long exact Hom
  sequences, the triangulated five lemma, additive category and biproduct) and
  the monotonicity/orthogonality convention item
  `def-canonical-t-structure-on-a-derived-category` added; the scaffold's
  unused zero-first-map entry was dropped.
- Sources: BBD §1.3.1–1.3.9 (Proposition 1.3.3, 1.3.4, 1.3.5), printed
  pp. 28–33; the essential-uniqueness half is BBD 1.1.10(ii) as cited there.
- Checks: `precheck` PASS (steps 1.1, 1.2, 2.1–2.4, 3.1–3.3, 4.1),
  `proof-layout` 10 steps / 0 defects, `rendercheck` OK.
  Decision: `repaired`, defects `["dependency"]`.

### 5. `lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude` (A, level 2) — repaired (dependency, source)

- Claim: (i) each $H^n_t$ is a functor to the heart with the unique compatible
  maps; (ii) the shift rule $H^n_t(X[m])\cong H^{n+m}_t(X)$; (iii) additivity
  with the explicit mutually inverse structure maps of a finite biproduct;
  (iv) amplitude detection, forward always and conversely for bounded
  t-structures; (v) the concentration identities and the map-detection
  bijection for single-degree objects.
- Repair: added the suppliers the proof actually consumes
  (`def-category-with-translation` for the coherence isomorphisms, the additive
  functor and adjointness items, `def-triangulated-category`, `def-biproduct`);
  and corrected a source locator: the item had recorded "§2.1.1–2.1.9, printed
  pp. 28–33", which indexes a different chapter of Astérisque 100 (ringed
  spaces and perversity functions, starting p. 33 ff.), to the manifest's
  "§1.3.1–1.3.9, printed pp. 28–33", the range that actually carries the
  truncation and t-cohomology results.
- Checks: `precheck` PASS (steps 1.1–1.4, 2.1–2.3, 3.1, 4.1), `proof-layout`
  9 steps / 0 defects, `rendercheck` OK. Decision: `repaired`,
  defects `["dependency","source"]`.

### 6. `lem-hard-lefschetz-splits-a-bounded-t-structure-complex` (A, level 3) — repaired (dependency, proof-route)

- Claim (unchanged from the scaffold): for a triangulated category with a
  bounded t-structure and $L:K\to K[2]$ with $H^{-j}_t(L^j)$ an isomorphism for
  every $j\ge0$, there is an isomorphism $K\cong\bigoplus_jH^j_t(K)[-j]$; the
  sum is finite; the isomorphism is not asserted canonical and carries no
  primitive-lift compatibility; the degenerate zero case is covered by the same
  formulas. Conventions: iterates $L^j=L[2j-2]\circ\cdots\circ L$ with
  $L^0=1_K$; the identification $H^{-j}_t(K[2j])\cong H^j_t(K)$ is the shift
  rule of item 5.
- Route (two repairs of the scaffold route, both recorded as proof-route, not
  claim, changes):
  (a) the extreme-degree vanishing $H^{\pm n}_t(K_0)=0$ needs the extra
  observation that $u=(a,c)$ induces isomorphisms on $H^{\pm n}_t$
  (components $(1_A,0)$ and $(0,H^n_t(c))$, with
  $H^n_t(c)=H^n_t(b)^{-1}$ from $bc=1$) together with the biproduct algebra
  fact that an isomorphism $(f,g):C\oplus D\to E$ with $f$ an isomorphism
  forces $D=0$;
  (b) the scaffold's identity $L_0^j=p[2j]\circ L^j\circ i$ is not an identity
  of morphisms for $j\ge2$; the proof instead expands $H^{-j}_t(L_0^j)$ factor
  by factor and shows that the intermediate insertions act as
  $H^m_t(ip)=H^m_t(i)H^m_t(p)=1$ on the interior degrees $|m|<n$, reducing the
  composite to $H^j_t(p)\circ H^{-j}_t(L^j)\circ H^{-j}_t(i)$, an isomorphism.
  The triangle is split by TR1 + TR3 (a morphism into the zero triangle forces
  the connecting map $w=0$) + the inverse rotation + the zero-first-map split
  criterion; no long exact t-cohomology sequence and no non-degeneracy or
  conservativity input is used.
- Sources: Deligne §1, Théorème (1.5) with its proof (the $D^b(\mathcal A)$
  case of exactly this statement), printed pp. 107–110; BBD §1.3.1–1.3.9 for
  the t-category framework; dCM Theorem 4.4.4(a) for the geometric instance.
- Deps: rebuilt (13 rows): the three in-pair prerequisites, TR1, TR3,
  morphisms of triangles, rotation sign convention, zero/split triangles,
  rotation closure, the zero-first-map split criterion, additive category,
  biproduct, and `def-triangulated-category`. The scaffold's
  `thm-long-exact-hom-sequences-of-a-distinguished-triangle` and
  `prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes`
  rows are not consumed by the final proof and were dropped from the row.
- Checks: `precheck` PASS (steps 1.1, 1.2, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1,
  9.1, 10.1), `proof-layout` 11 steps / 0 defects, `rendercheck` OK,
  `citation-fidelity` quote checks clean. Decision: `repaired`,
  defects `["dependency","proof-route"]`.

### 7. `ex-hard-lefschetz-splitting-for-a-three-degree-complex` (B, level 4) — repaired (dependency)

- Claim (unchanged from the scaffold): in $\mathcal T=D^b(\mathbf{vect}^{fd}_k)$
  with its canonical t-structure, for $K=k[2]\oplus k\oplus k[-2]$ and the
  described degree-two map $L$, one has $H^{-2}_t(K)=H^0_t(K)=H^2_t(K)=k$ with
  all other t-cohomology zero, $H^{-j}_t(L^j)$ is an isomorphism for every
  $j\ge0$ ($j=0$ and $j=2$ the Lefschetz steps, $j=1$ and $j\ge3$ zero maps
  between zero objects), and the splitting returns $k[2]\oplus k\oplus k[-2]$;
  no primitive-lift compatibility is tested.
- Route repair: the scaffold's canonical-truncation identification of the
  abstract $H^j_t$ with ordinary cohomology was replaced by the direct heart /
  shift / additivity computation using in-pair item 5; the coefficient
  category's abelianness and essential smallness are discharged from
  rank-nullity, the first isomorphism theorem, direct-sum dimension and the
  isomorphism-classification of finite-dimensional spaces.
- Deps: rebuilt to the suppliers used (in-pair 5 and 6 plus the canonical
  t-structure, derived-category, abelianness, rank-nullity, first-isomorphism,
  direct-sum-dimension and essentially-small suppliers); the scaffold's
  canonical-truncation rows are not used.
- Checks: `precheck` PASS (steps 1.1, 2.1, 3.1, 4.1, 5.1), `proof-layout`
  5 steps / 0 defects, `rendercheck` OK. Decision: `repaired`,
  defects `["dependency"]`.

### Shared deliverables

- Pages created: `library/homological-algebra/lefschetz-splitting-in-bounded-triangulated-categories.md`
  (A, 6 items in manifest order, `examples: []`, `requires` exactly the plan
  row) and `…-examples.md` (B, `items: []`, the single example,
  `requires: [lefschetz-splitting-in-bounded-triangulated-categories]`).
- `research/…-batch-33.pages.json`: the seven item `deps` rows were synced to
  the authored item files; `requires`, `justified_by`, `sources` and all
  sibling metadata are otherwise untouched. `manifest-deps` clean;
  batch-33-internal `dependency-levels` recomputation matches the declared
  levels 0, 0, 1, 1, 2, 3, 4 with no cycle or label error.
- `research/…-batch-33.proof-contracts.json` written: version 1, scope the
  seven owned IDs, 63 citation rows with exact statement-section quotes, one
  derivation row per numbered step with its complete input tokens, and the
  eight boundary dispositions per item. `--strict` passes; `boundary-audit
  --fail-on-contradicted --fail-on-template` reports no template cluster and no
  contradicted disposition; `citation-fidelity --fail-on-missing-quote`: every
  quote is present in its cited item.
- `research/…-batch-33.cross-batch-dependencies.json` remains `[]`: every
  supplier outside the pair is published, and the in-run edges are the in-pair
  ones recorded above; `frontier-dependency-ledger refresh --run …` was re-run
  after the final edits.
- All seven items carry their current v2 item decisions (`accept` for 1–2,
  `repaired` for 3–7; recorded 2026-10-10); `itemDecision` reports `closed` for
  all seven.

## Checks actually run

- `proof-layout` over the seven authored item paths (single batched command
  after the final edits): 7 items, 64 steps, 0 defects.
- `precheck` (explicit paths, seven items): 6 checked / 0 failing; the
  definition is n/a (no phase body).
- `rendercheck` (7 items + 2 pages): OK, 9 files; no malformed YAML, no
  wikilink in math, every math span parses under KaTeX.
- `content-policy` on `…-batch-33.pages.json`: 7 scoped items, 0 errors,
  0 warnings.
- `depcheck --items-file` (7 owned IDs): 0 errors, and both pages are placed in
  the prerequisite graph with no b-leaf, cycle or draft-on-published-page
  issue. `fwdcheck` and `extcheck` on the same selection: clean, 0
  recorded-not-proved.
- `depsource --items-file … --run …`: 0 unresolved; 64 deps resolve to
  published pages, 10 in-pair edges to the draft A page.
- `manifest-deps …-batch-33.pages.json`: 7 items, 0 normalized, 0 errors.
- `item-dependency-levels check --run …`: batch-33-internal recomputation is
  clean (levels 0, 0, 1, 1, 2, 3, 4). The whole-run invocation currently
  reports five mismatches in batches 48/49 (see "Open obligations"), none of
  them in this pair and none caused by this pair's level values (checked
  before and after the dep sync).
- `validate-plan research/plan-spec.json --run …`: hard errors are confined to
  five other pairs (character-polynomials, projective-functors-in-category-o,
  compact-kahler, complex-algebraic-stratified-topology,
  logarithmic-hodge-complexes); the only rows touching this pair are the
  inherited plan-controlled `redundant-prereq` warnings on its `requires`,
  unchanged by this dispatch.
- `coverage-checklist --require-destination`: 2 pages, 31 harvested results,
  0 errors, 0 warnings. `source-fetch-check`: 5/5 sources fetch-verified and
  resolved. `url-sweep` (to `/tmp/batch-33-url-liveness.json`): 3/3 live, 0
  failed. `source-backing --liveness`: 5 authored results, all still backed.
- `proof-contract --strict`: 7/7 items, 0 errors, 0 warnings.
  `boundary-audit --fail-on-contradicted --fail-on-template`: 56 rows, no
  template cluster at the 3-member threshold, no contradicted disposition.
  `citation-fidelity --fail-on-missing-quote`: 63 citations, all quotes found.
  `finite-smoke`: 0 obligations over the 7 items.
- `step3-decisions check --run … --phase final`: the pair's Step 3a scope is
  closed (`sufficient`) and all seven owned items report `closed`; the run-wide
  check is open because of the many pairs still being authored in this
  parallel dispatch.

## Pre-splice rechecks, suppliers and published concerns

- Step 3a observations rechecked against the current inputs: (i) the added
  local prerequisites are genuinely consumed (item 4 by 5 and 6; item 5 by 6
  and 7; the definition by all five); (ii) the dCM (26)–(27) orthogonality
  row remains unasserted by item 3 and needs no claim change; (iii) the
  Deligne (1.2) coverage row is represented by the abstract splitting route of
  item 6 and the coverage dispositions are unchanged; (iv) the AC nuance is
  resolved — item 3 is choice-free, so no `def-axiom-of-choice` edge appears
  in this pair.
- In-run suppliers: none outside the pair; batches 42 and 48 are *consumers*
  of items 3, 4 and 6 (`thm-relative-hard-lefschetz-and-perverse-splitting…`,
  `lem-projective-hodge-perverse-package-closes-…`, `cor-quiver-full-flag-…`),
  and the claims they consume are unchanged by this authoring, so their
  `verified` declaration-level rows remain valid (their own writers must
  re-sync them to the completed items).
- Published concerns: none new. No published item was edited. The one
  published-content contact worth recording is the source-locator defect fixed
  inside owned item 5 (see its checkpoint); no published carrier is affected.
- No Recorded result is consumed and no Foundations page appears on any proof
  path of this pair.

## Handoff status

- **Completed.** All seven assigned IDs authored and checked; both pages
  created; manifest rows, contracts and item decisions in place; report
  written. No item in this pair is escalated; every owned item decision is
  current and `closed`.
- **Added suppliers.** None beyond the scaffold inventory: the three local
  prerequisites (`def-truncation…`, `lem-truncation-triangles…`,
  `lem-t-cohomology…`) are scaffold rows of batch 33, not new IDs minted in
  this dispatch, so no engine certification for additions is involved.
- **Published concerns.** None new; no published content was edited.
- **Open obligations.**
  1. The run-wide `item-dependency-levels check --run` currently reports five
     declared-vs-computed mismatches in batches 48/49 —
     `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`
     (21 vs 23), `thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps`
     (22 vs 24), `thm-projective-pushforward-of-smooth-constant-sheaves-has-semisimple-perverse-cohomology`
     (23 vs 25), `ex-projective-perverse-decomposition-for-projective-space-to-a-point`
     and `cor-quiver-full-flag-pushforwards-are-semisimple-in-characteristic-zero`
     (both 24 vs 26). These are downstream of concurrently edited sibling
     manifests (batches 6, 8, 9, 12, 15, 16, 22, 23, 28, 32, 34, 35, 36, 50
     were all rewritten during this dispatch) and must be re-synced by the
     owning writers; batch 33 itself recomputes cleanly and its own levels are
     the scaffold's.
  2. The batch-33-internal source rows for BBD §5.4.10–5.4.13 remain `deferred`
     to `projective-perverse-hard-lefschetz-and-decomposition` (coverage
     disposition), unchanged and correctly outside this pair's proof paths.
  3. The pre-existing plan `redundant-prereq` warnings on this pair's
     `requires` are plan-controlled and left for Step 4 owner reconciliation.
  4. Plan/prose amendment for Step 4: the plan's `items[].deps` projections for
     this page still show the design inputs (`lem-hard-lefschetz-splits…`:
     `def-canonical-t-structure-on-a-derived-category`,
     `thm-long-exact-hom-sequences-of-a-distinguished-triangle`,
     `prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes`;
     the two other design items: their original design inputs). The authored
     manifest/item rows now record the actual uses (three local prerequisites
     for the splitting lemma; the abelian-category/bilinear-form packages for
     the other two). `validate-plan --run` accepts the authored rows because
     every dependency resolves, but Step 4 should refresh the plan's
     item-dependency projections so they match the completed arguments.
