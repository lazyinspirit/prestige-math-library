# frontier-32 · beta · batch 13 scaffold notes

## Scope and controlling design

- Authorised pair: `co-e-free-comb-structure` (A, order 437) and `co-e-free-comb-structure-examples` (B, order 438), in combinatorics. The manifest and `research/plan-spec.json` agree on order, companion, and the two prerequisites `the-structural-criterion-for-property-star` and `quotient-blockades-and-mixing-relations`; there is no design/spec drift to adjudicate.
- The design row at `research/plan-combinatorics-and-categories.md:3918` assigns exactly the auxiliary Erdős–Hajnal theorem for $\{H_5,\mathrm{co}\text{-}E\}$ (Lemma 6.3), Claims 6.4.1–6.4.3, and Lemma 6.4. It also fixes finite, simple, undirected graphs; induced-$H$-free containment; ordered blockades; and directional sparse-to versus symmetric weak sparsity. This batch does not add the Bird material, the final E/Bird deductions, or a new convention.
- The A page has 12 items and is not split. The B page has three finite adjacency-data examples and is a leaf. No new item duplicates the already published definitions of $E$, co-$E$, or $H_0,\ldots,H_5$, nor the prior quotient-blockade results.

## Read sources and URL verification

1. Huang, Ju, and Zhou, *Erdős-Hajnal beyond the five-vertex path*, [arXiv HTML v2](https://arxiv.org/html/2606.06258v2), read from the §6 opening quotient setup through Lemmas 6.1–6.2 and all of §6.1 (Lemma 6.3, Lemma 6.4, Claims 6.4.1–6.4.3), ending at the §6.2 heading; HTML lines 916–1051. The exact harvest and every disposition are in `research/frontier-32-batch-13.coverage.json`. The complete relevant proof route was checked: the $H_i$ induction, both local co-$E$ witnesses, the $H_5$ case analysis, overlap equivalence classes, strictly decreasing quotient termination, pattern lifting, and quotient-stage external-purity induction.
2. Reinhard Diestel, *Graph Theory*, sixth edition, [official Contents PDF](https://diestel-graph-theory.com/Contents.pdf), contents p. i / PDF p. 1: Chapter 1 and §§1.1–1.10, Exercises, and Notes. The official textbook page identifies the work as GTM 173 and exposes this harvestable contents document. Its basic graph headings are each mapped to an already-published convention or definition; unused minor, Euler-tour, and linear-algebra headings have result-specific out-of-scope dispositions in the coverage record.

The arXiv URL is the full HTML treatment, not `/abs/`; the Diestel URL is the complete official contents document needed for the required textbook contents harvest. The durable coverage record now contains successful `fetch_verified` receipts for both sources (2026-09-06T02:31:31.216Z and 2026-09-06T02:31:33.485Z respectively), and the no-flag source-fetch gate reports 2/2 verified.

## Conventions and dependency rationale

- `def-h-zero-through-h-five` and `def-e-graph-and-co-e-graph` are published and therefore remain their canonical homes. In particular, $H_0$ is the five-wheel and $H_i$ adds the leaf $v_i'$ at $v_i$; co-$E$ is the complement of the six-vertex $E$ graph.
- `lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property` proves Lemma 6.3 from the published $H_0$ and $P_5/\overline{P_5}$ results, hereditary-subclass monotonicity, and Huang--Ju--Zhou Corollary 1.8 as an exact source fact. The prior internal corollary remains draft and is not a load-bearing dependency. At the induction step the two smaller forbidden families are $\{H_{i-1},\mathrm{co}\text{-}E\}$ and $\{H_i,\overline{P_5}\}$; their property is inherited from one forbidden member, so the argument does not assume the desired $E$ theorem.
- Claims 6.4.1 and 6.4.2 are retained at their full source generality: they concern arbitrary nonadjacent vertices $x,y$ complete to the path or induced $H_5$, and $u\in N(x)\setminus N(y)$. The special-vertex comb substitution $(x,y)=(v,a_i)$ is a later specialization, not part of either general claim.
- The source compresses one real proof obligation at its final contradiction: being pure to each induced $H_5$ in an overlap class must imply being pure to the class. `lem-purity-on-every-h-five-propagates-along-an-overlap-class` isolates this overlap-chain propagation before Claim 6.4.3 is used.
- The quotient iteration is kept separate from prior Page 435 material: Page 435 supplies the generic mixed-block relation, quotient, connectedness preservation, and witness descent; this page supplies the $H_5$-overlap initial blockade, its finite termination, and its co-$E$-specific external-purity argument.

## Item ledger

| item | exact planned claim / proof strategy | dependencies |
| --- | --- | --- |
| `lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property` | Lemma 6.3; induct through the five leaf attachments using source Corollary 1.8 directly. | Published $H_0$, $P_5/\overline{P_5}$, family-free and EH definitions, subclass monotonicity; exact source Corollary 1.8. |
| `lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours` | Claim 6.4.1 for an induced path $P$, nonadjacent $x,y$ complete to $P$, and $u\in N(x)\setminus N(y)$ mixed on $P$; each forbidden run gives one explicitly checked induced co-$E$. | co-$E$, paths, adjacency, pure/mixed. |
| `lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs` | General Claim 6.4.2 for nonadjacent $x,y$ complete to an induced $H_5$ and $u\in N(x)\setminus N(y)$; the comb application is the specialization $(x,y)=(v,a_i)$. | Previous claim, $H_5$, co-$E$, paths, pure/mixed. |
| `def-h-five-overlap-chain-relation-in-a-comb-block` | Defines the chain relation generated by membership in a common induced $H_5$. | $H_5$ definition. |
| `lem-h-five-overlap-classes-are-connected` | Every class is connected by concatenating paths through overlapping $H_5$s. | overlap relation, $H_5$, connectedness. |
| `lem-purity-on-every-h-five-propagates-along-an-overlap-class` | Shared vertices force one complete/anticomplete label across an overlap chain. | overlap relation, pure/mixed. |
| `def-h-five-overlap-blockade-and-iterated-mixed-quotients` | Defines $\mathcal L^1$ from overlap classes and each successive mixed quotient. | overlap relation, quotient blockade. |
| `lem-h-five-overlap-quotient-iteration-terminates-at-a-pure-blockade` | The finite number of blocks strictly drops at every nonpure stage. | iteration, blockade/quotient facts, well-ordering. |
| `lem-a-vertex-mixed-on-a-connected-set-mixes-on-an-edge` | First adjacency change along a path gives a mixed edge. | connectedness, paths, pure/mixed. |
| `lem-co-e-free-external-purity-survives-h-five-overlap-quotients` | Claim 6.4.3 under the special-vertex hypothesis; start the quotient descent with $(x,y)=(v,a_i)$, use a connected mixed edge to contradict Claim 6.4.1, and close the base stage with Claim 6.4.2 plus overlap-chain purity. | Claims 6.4.1–6.4.2, overlap lemmas/iteration, prior quotient results, connected mixed-edge lemma, special-vertex comb data. |
| `lem-terminal-h-five-overlap-quotient-pattern-is-h-five-and-co-e-free` | An induced pattern $H_5$ or co-$E$ lifts through pure blocks and contradicts respectively the initial overlap class or ambient co-$E$-freeness. | terminal iteration, pure pattern, $H_5$, co-$E$. |
| `thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition` | Exact Lemma 6.4: for a comb with an outside vertex $v$ complete to all blocks and anticomplete to all teeth, take $X_i$ as the vertices lying in an induced $H_5$ and combine terminal purity, pattern freeness, and external purity. If the source-defined $X_i$ is empty, choose one vertex of nonempty $B_i$ for a singleton $X_i$, because the repository blockade definition disallows an empty blockade. | Lemma 6.3 and all preceding local/overlap/quotient results. |
| `ex-induced-co-e-witnesses-for-both-forbidden-path-runs` | B leaf: finite adjacency tables for Figure 8's two witnesses. | co-$E$, paths, Claim 6.4.1. |
| `ex-an-h-five-overlap-class-and-its-terminal-quotient` | B leaf: two overlapping labeled $H_5$s and their one-block terminal quotient. | $H_5$, overlap relation and iteration/termination. |
| `ex-a-bipartite-four-tooth-comb-has-the-co-e-structural-partition` | B leaf: a concrete bipartite four-tooth comb with the required outside special vertex; choose a singleton $X_i$ in each block and verify all structural clauses from adjacency data. | co-$E$, comb, final theorem. |

## Source dispositions, limits, validation, and next action

- Lemmas 6.1–6.2 and Figure 7 are already published on the prerequisite pages, with their exact existing item IDs recorded in the coverage harvest. Figure 8 is retained as the first B example. The §6.2 Bird heading is explicitly deferred to `co-bird-free-comb-structure` (order 439), because its $P_2+P_1/P_3+P_1$ witness mechanism is not co-$E$ structure.
- The theorem is a special-vertex structural partition result, not the universal structural comb-partition hypothesis currently published in `def-structural-comb-partition-hypothesis`. Source Lemma 5.1 assumes the partition for every comb, but source Lemma 6.4 assumes the additional vertex $v$; Claims 6.4.2 and 6.4.3 use $v$ essentially through $(x,y)=(v,a_i)$. Consequently the cited source does not supply the current universal prerequisite. The owned manifest has been narrowed to the exact Lemma 6.4 result, but the A page remains insufficient for its declared route until an authoritative proof of the universal result is supplied or the published criterion interface is corrected by its owner.
- Alpha Step-3 scaffold review on 2026-09-06 corrected the two general source claims, made the special-vertex hypothesis explicit in Claim 6.4.3 and the final theorem, and repaired the empty-$X_i$ boundary case with a singleton block. The exact item IDs were preserved. Scope decisions for all six declined coverage rows stand on current evidence. Validation results and the unresolved authoring blocker are recorded in `research/frontier-32-alpha-g-step3-scaffold-review.md`; the next action belongs to the owner of the published structural criterion/interface.

## Step-3 fix pass

The group-g review assigns no numbered finding IDs. The identifiers below therefore
quote its headings and bullets verbatim rather than minting replacement IDs.

### Finding ID: `Blocking mathematical finding` (review heading; no numeric ID assigned)

- **Disposition:** accepted as an open, out-of-scope interface blocker. No
  batch-local manifest or harvest edit can turn the special-vertex theorem into
  the universal structural-comb-partition hypothesis without overstating the
  source. The authorised scaffold remains source-faithful but insufficient for
  the declared downstream route.
- **Evidence read and rechecked:** Huang--Ju--Zhou,
  [arXiv HTML v2](https://arxiv.org/html/2606.06258v2), §5, Lemma 5.1
  (HTML lines 856--881) requires the partition for every indicated comb;
  §6.1, Lemma 6.4 (lines 975--995) instead assumes an outside vertex $v$
  complete to every comb block and anticomplete to every tooth. Its proof
  uses $(v,a_i)$ in Claim 6.4.2 (line 1022) and starts the Claim 6.4.3
  descent with that same pair (lines 1027--1048). The current published
  [`def-structural-comb-partition-hypothesis`](../items/def-structural-comb-partition-hypothesis.md)
  likewise quantifies over every comb and has no $v$ hypothesis.
- **Changed scaffold record:** none in this pass. The source-accurate item
  `thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition`
  already records the special-vertex premise; changing its claim, this batch's
  `requires`, the published hypothesis, or the structural-criterion page is
  outside batch-13 authority. A valid universal-comb theorem or an
  owner-authorised interface change remains required before authoring can
  close the declared route.

### Unnumbered in-scope repair findings recorded in the review

All of these were already present on the current batch-13 bytes, so their
disposition is **accepted, no further change**. This confirms the repaired
scaffold rather than duplicating items or silently revising the harvest.

| Review finding identifier (verbatim) | Evidence on current bytes | Changed scaffold record |
| --- | --- | --- |
| `Restored Claims 6.4.1 and 6.4.2 to their exact general form` | The two lemmas retain arbitrary nonadjacent $x,y$ complete to the induced path/$H_5$ and $u\in N(x)\setminus N(y)$; the special comb substitution occurs only later. This matches §6.1, Claim 6.4.1 (lines 998--1010) and Claim 6.4.2 (lines 1015--1022) of the re-opened primary treatment. | `lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours` and `lem-co-e-free-complete-nonedge-pairs-are-pure-to-induced-h-five-graphs` in `frontier-32-batch-13.pages.json` unchanged. |
| `Made the special-vertex hypothesis explicit in the Claim 6.4.3 scaffold and in ... theorem` | The external-purity lemma and final structural-partition theorem both state the outside-$v$ condition in their strategies, matching Lemma 6.4 and Claim 6.4.3 (lines 977 and 1027--1048). | `lem-co-e-free-external-purity-survives-h-five-overlap-quotients` and `thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition` unchanged. |
| `Repaired the boundary case in which no vertex of B_i lies in an induced H_5` | The final theorem's strategy preserves a nonempty singleton $X_i$ when the source-defined overlap set is empty, respecting the repository's nonempty-blockade contract. | Final theorem record unchanged. |
| `Added def-comb-in-a-graph to the overlap-relation definition's dependencies` | `def-h-five-overlap-chain-relation-in-a-comb-block` has explicit dependencies on both `def-h-zero-through-h-five` and `def-comb-in-a-graph`; every batch item has an explicit `deps` array. | Overlap-relation record unchanged. |
| `Added the missing coverage carrier for the terminal-pattern argument ... and corrected ... special-vertex qualification` | The coverage harvest maps the proof's terminal pattern result to `lem-terminal-h-five-overlap-quotient-pattern-is-h-five-and-co-e-free`, and describes Lemma 6.4 as the stated special-vertex partition. | `frontier-32-batch-13.coverage.json` unchanged. |

### Source receipt, coverage, and validation

- Re-opened and read the full assigned primary range through the §6.2 boundary:
  Huang--Ju--Zhou, [arXiv HTML v2](https://arxiv.org/html/2606.06258v2),
  §6 opening and Lemmas 6.1--6.2, §6.1 including Lemmas 6.3--6.4 and
  Claims 6.4.1--6.4.3, ending at the §6.2 heading (HTML lines 916--1051).
  The separate Bird heading remains deferred to `co-bird-free-comb-structure`
  with its existing specific disposition. Re-opened the independent primary
  treatment, Diestel's [official Contents PDF](https://diestel-graph-theory.com/Contents.pdf),
  PDF p. 1 / contents p. i: `1 The Basics`, §§1.1--1.10, Exercises, and
  Notes. Its existing harvest and result-specific dispositions remain faithful.
- `node tools/coverage-checklist.mjs research/frontier-32-batch-13.coverage.json --require-destination`:
  1 page, 34 harvested results, 0 errors; one `coverage-low-yield` advisory
  (13 included results) remains expected because all declined source headings
  are individually dispositioned and reviewed above.
- `node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-13.coverage.json`:
  2/2 sources fetch-verified.
- `node tools/manifest-deps.mjs research/frontier-32-batch-*.pages.json`:
  676 items, 0 missing dependency arrays, 0 errors. `node tools/content-policy.mjs --manifest-only research/frontier-32-batch-*.pages.json`:
  676 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed; it reports
  only the standing repository-wide redundant-prerequisite advisories. The
  unspliced plan entries for orders 437--438 remain empty by workflow design,
  so this validator cannot discharge the semantic special-vertex versus
  universal-interface blocker recorded above.

## Scaffold-fix round

### Finding ID: `scaffold-closure/co-e-free-comb-structure` (the closure `work[]` object supplies no separate `id` field)

- **Disposition:** pushed back as an unresolved, out-of-scope published-interface
  defect. The batch-13 theorem remains exactly the special-vertex conclusion
  of source Lemma 6.4. Recasting it as the universal premise of the published
  structural criterion would overstate the source; changing that criterion or
  its page is outside this batch. No scaffold item was added, removed, or
  weakened to clear the closure finding.
- **Evidence:** the current [Huang--Ju--Zhou HTML treatment](https://arxiv.org/html/2606.06258v2)
  was reopened at §5, Lemma 5.1 (HTML lines 859--881), which requires the
  stated partition for every comb, and at §6.1, Lemma 6.4 (lines 975--995),
  which assumes an outside $v$ complete to the comb blocks and anticomplete to
  the teeth. Claim 6.4.2 makes the comb specialization $(x,y)=(v,a_i)$ at
  line 1022; Claim 6.4.3 uses the same triple in its base case (line 1031) and
  begins quotient descent from it (line 1035). The published
  `def-structural-comb-partition-hypothesis` likewise ranges over every comb
  and contains no $v$ condition. Diestel's independent [official contents
  PDF](https://diestel-graph-theory.com/Contents.pdf), contents p. i / PDF p.
  1, was also reopened; its Chapter 1 headings and existing dispositions still
  match the finite graph conventions actually used here.
- **Coverage change:** expanded the primary-source locator to name the newly
  re-read Lemma 5.1 statement and harvested it as `already-published` at
  `thm-the-structural-comb-partition-criterion-implies-property-star`. The
  34 prior result dispositions remain unchanged; no new planned item requires
  a new coverage carrier.
- **Current source receipts and limits:** both recorded HTTP(S) documents were
  reachable and read through the browser fetch on 2026-09-06. A forced local
  `source-fetch-check --stamp --force` retry could not resolve either host
  (`EAI_AGAIN`), so it wrote no replacement receipt; the existing durable
  full-text receipts remain intact rather than being fabricated or removed.
  The normal no-network receipt check is retained as the validator record.
- **Validation and next action:** after this coverage update,
  `coverage-checklist --require-destination` reports 35 harvested results, no
  errors, and the pre-existing reviewed low-yield advisory; the normal
  `source-fetch-check` reports 2/2 durable receipts; `manifest-deps` reports
  all 15 batch items with explicit dependency arrays and no error; whole-run
  manifest-only `content-policy` reports 677 scoped items with 0 errors and 0
  warnings; and `validate-plan` exits successfully (only its standing global
  prerequisite advisories remain). The remaining obligation is an
  authoritative universal-comb theorem or an owner-authorised correction to
  the published structural-criterion interface; neither is a batch-13-local
  scaffold edit.

## Scaffold-fix round

### Finding ID: `co-e-free-comb-structure` (the sole `work[]` entry; it has no separate `id` field)

- **Disposition:** pushed back. The batch manifest already states exactly the
  special-vertex form of Lemma 6.4 in
  `thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition`.
  Generalising that item to all combs would assert a result not supplied by the
  verified treatment; changing the published universal criterion is outside
  this batch's authority. No item was added, removed, or duplicated, and no
  valid dependency was changed merely to clear the finding.
- **Evidence and current source backing:** the re-opened primary treatment is
  Huang--Ju--Zhou, [arXiv HTML v2](https://arxiv.org/html/2606.06258v2):
  §5, Lemma 5.1, HTML lines 859--881, quantifies over every comb; §6.1,
  Lemma 6.4, lines 975--995, assumes an outside vertex $v$ complete to every
  comb block and anticomplete to every tooth. Claims 6.4.2--6.4.3 use
  $(v,a_i)$ in that route (lines 1015--1048). The independent textbook
  treatment was also re-opened at Diestel, [official contents PDF](https://diestel-graph-theory.com/Contents.pdf),
  PDF p. 1 / contents p. i, Chapter 1 and §§1.1--1.10; every harvested heading
  retains its concrete coverage disposition. The coverage record retains
  fetch-verified receipts for both HTTP(S) sources, and its primary-source
  harvest binds Lemma 5.1 to the already-published criterion and Lemma 6.4 to
  the special-vertex scaffolded theorem.
- **Change, validation, and limit:** the manifest and coverage are already the
  faithful repair, so this round changes notes only. Current checks pass:
  `coverage-checklist --require-destination` gives 35 harvested results and 0
  errors (with the reviewed low-yield advisory); `source-fetch-check` is 2/2;
  whole-run `manifest-deps` finds 677 explicit dependency arrays and 0 errors;
  whole-run manifest-only `content-policy` gives 677 scoped items, 0 errors,
  0 warnings; and `validate-plan` passes with only standing repository-wide
  redundant-prerequisite advisories. The route remains blocked until an
  authoritative universal-comb theorem is supplied or the owner authorises a
  special-vertex correction of the published structural-criterion interface.

## Special-vertex route repair (frontier-32 / supervisor-fix-batch-13)

- **New same-page theorem:**
  `thm-special-vertex-local-structural-partition-criterion-implies-property-star`
  proves property (*) from the exact local assertion needed by its definition:
  every special-vertex comb in an $\overline{\mathcal H}$-free graph has the
  structural partition. It deliberately does not derive, assume, or cite as a
  premise the universal `def-structural-comb-partition-hypothesis`. Its
  strategy re-runs the local $Y$-part, transversal, geometric-layer, and
  layer-sum arguments with the published floor-safe constants
  $c_1=c_3=c/4$ and $c_2=10/c$. Its explicit dependencies are the published
  layer results and their blockade, pattern, power, and property-(*)
  conventions.
- **New application:** `cor-the-singleton-family-containing-e-has-property-star`
  applies that theorem with
  $\mathcal F_1=\mathcal F_2=\{H_5,\mathrm{co}\text{-}E\}$ and
  $\mathcal H=\{E\}$. Its explicit dependencies are the local criterion,
  this batch's $\{H_5,\mathrm{co}\text{-}E\}$ Erdős--Hajnal lemma, the
  exact special-vertex Lemma-6.4 structural theorem, and the
  complement/free-family conventions. It concludes property (*) only for the
  singleton family $\{E\}$; it does not claim that Lemma 6.4 establishes the
  universal published hypothesis.
- **Source support re-read and harvest update:** Huang--Ju--Zhou,
  [arXiv HTML v2](https://arxiv.org/html/2606.06258v2), §5, Lemma 5.1's
  printed universal statement (HTML lines 859--881), then its proof's
  arbitrary special-vertex comb and constants (lines 882--894) and local
  layer argument (lines 895--915); §6 opening (lines 916--918), §6.1
  E-graph (lines 962--995), Lemma 6.3 (lines 971--974), and exact
  special-vertex Lemma 6.4 (lines 975--995). The coverage record gives each
  new included item its own exact-locator row. Diestel's independent contents
  source was re-opened at PDF p. 1 / contents p. i; its existing conventions
  harvest and dispositions remain unchanged.
- **Current scope and next action:** the published universal criterion remains
  background for its own route. This repair supplies a separate,
  source-extracted local route, so no universal claim is inferred from the
  special-vertex theorem. Run the required batch and whole-run validators and
  record their outputs below.

### Validation record

- `node tools/coverage-checklist.mjs research/frontier-32-batch-13.coverage.json --require-destination`:
  1 page, 37 harvested results, 0 errors, 0 warnings. Both new `included`
  rows resolve to the added item ids and retain exact primary-source locators.
- `node tools/manifest-deps.mjs research/frontier-32-batch-*.pages.json`:
  679 items, 0 normalized, 0 errors. The two added items each have an
  explicit nonempty `deps` array and close against published or batch-13 ids.
- `node tools/content-policy.mjs --manifest-only research/frontier-32-batch-*.pages.json`:
  679 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: passed. It reports
  only the standing repository-wide redundant-prerequisite advisories; no
  item cycle, unresolved id, forward-reference, or examples-page dependency
  violation occurs in the manifest-bearing pages.
- `node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-13.coverage.json`:
  2/2 sources fetch-verified. The primary HTML and independent Diestel
  contents PDF were also opened and read in this repair pass.

## Step-5 authoring

- Authored the 12 A-page items and three B-page examples named in the batch manifest, plus the two draft combinatorics pages. All statements retain the special-vertex premise where the source requires it; the local criterion and its $\{E\}$ corollary use the repaired special-vertex route rather than the universal published interface.
- Provenance is literature-derived for the source results and ai-altered only for the repository-specific overlap and singleton-blockade formulations; local proofs are recorded as ai-generated. Sources are Huang--Ju--Zhou §5--§6.1 and the batch coverage's independent Diestel contents treatment at their recorded locators.
- The no-$H_5$ block boundary is handled by a singleton $X_i$, so the blockade partition has nonempty blocks. No planned claim was dropped or widened.
- Checks run: explicit 15-path `precheck` pass; `validate-plan.mjs research/plan-spec.json` passed (with only standing repository-wide redundant-prerequisite advisories); `content-policy.mjs research/frontier-32-batch-13.pages.json` reported 17 scoped items, 0 errors and 0 warnings; and the strict proof-contract check passed for its current 5-item scope.
- Blocker: the proof-contract file still needs its scope expanded to all proof-bearing authored items. The checker recognises the five preserved phase-format proofs; canonical precheck repair removes proof section headings from seven proofs, and the three example verification sections are not accepted as contract fact sections. This is a batch-local formatting/contract completion obligation, not a mathematical source blocker.
