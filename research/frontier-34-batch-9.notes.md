# frontier-34 / beta / batch 9 — scaffold evidence

**Disposition: BLOCKED, insufficient for Step 3 approval or authoring.** Both requested final theorems are retained. Mechanical validity does not discharge the mathematical failures below. No published content, plan, task generator, run state, or other batch was modified.

## Scope, state, and exact changes

Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, the generated batch-9 task, the generic beta-batch task, current plan, current manifest, and the complete design §16 (including §§16.1–16.5). The task restricts writes to this batch's manifest, coverage, and notes. The source/prerequisite repairs identified below require files outside that scope; no broader access is requested.

At inspection, `.autopilot/frontier-34/state.json` identified run frontier-34 at `1-scaffold`, with `finishedAt: null`. Git HEAD was `4501527a0`, following `ee067e69c` and the frontier-33 publication commit `f854a7b88`. The working tree already contained the run's generated files and a modified plan. Historical RESUME files were not used as state.

Changed only:

- `research/frontier-34-batch-9.pages.json`: filled the empty A/B inventories with nine A items and five B items; explicit dependency arrays, statements, proof plans, source locators and component provenance; two A-summary paragraphs of 49 and 43 words, no B summary.
- `research/frontier-34-batch-9.coverage.json`: two independent source treatments and 58 canonical/source disposition rows, with explicit blocked status. Already-published means an existing home was found, not that its entire proof closure was approved.
- This notes file: evidence, failures, proposed prerequisite work, and continuation obligations.

The A sequence is E leaf reduction → E generalized niceness → E EH theorem → Bird leaf reduction → Bird property (*) using the E theorem → Bird generalized niceness → Bird EH theorem → complement consequence → dependency ledger. B supplies full edge tables, homogeneous numbers, two failed reverse-containment implications, and complete/edgeless test families. New IDs do not replace or weaken either headline theorem. Definitions and earlier source results are reused rather than padded onto this final-deductions page.

## Design reconciliation

The current plan agrees with the assigned orders 441/442, category, companions, title, and A requires `[from-generalized-niceness-to-erdos-hajnal, co-bird-free-comb-structure]`. These edges were preserved.

Two conflicts or stale assumptions must remain visible:

1. Design §16.3 says 100 A items; current validator's default maximum is 60. The scaffold has nine, so no split is required here.
2. Design §§16.3–16.4 requires a fully local proof route without citation-only Facts. The current upstream plan explicitly describes applying Huang–Ju–Zhou Corollary 1.8 directly in the H_5/co-E auxiliary item, and the authored item does just that as unlinked F4. This is a proof-closure failure, not permission to change the design's final conclusions. The bull route likewise retains three recorded, unproved suppliers.

The special-vertex hypothesis is a further source/interface reconciliation, not a changed batch scope. The published co-E and co-Bird structural theorems quantify combs equipped with a vertex outside the teeth/blocks, complete to all blocks and anticomplete to all teeth. The all-combs version of the structural criterion has a stronger premise and cannot simply be invoked. The published `thm-special-vertex-local-structural-partition-criterion-implies-property-star` has the exact weaker premise needed. Its proof was read in full and uses floor-safe constants c/4, 10/c, c/4; this scaffold uses it.

## Direct mathematical interfaces checked

- `def-e-graph-and-co-e-graph`: E has edges p1p2,p2p3,p3p4,p4p5,p3q. The degree-one vertex q deletes to P_5. The target singleton is {E}, not {co-E}.
- `def-bird-graph-and-co-bird-graph`: Bird has edges x1x2,x2x3,x1x3,x1y,x2z,yw. The degree-one vertex w deletes to the bull; deleting y is not the intended operation.
- `def-leaf-reducible-finite-family`: existence of one family member and one degree-one vertex whose replacement family has EH. The two singleton instances above have precisely the required deletion family.
- `cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property`: supplies the P_5 base, conditional on its upstream closure. Its F1 complement-invariance appeal is unlinked, although a separately published adequate complement-invariance theorem exists. The E leaf lemma only needs the P_5 half.
- `cor-the-bull-graph-has-the-erdos-hajnal-property`: supplies the bull base with exponent 1/4, but reaches the unresolved perfect-graph suppliers below.
- `lem-the-e-graph-and-the-bird-graph-are-wonderful`: gives BOTH singleton conclusions. Its E branch embeds E into the one-subdivision of K_1,3, in the correct containment direction. Its Bird branch uses substitution and a five-vertex quotient, followed by an explicit co-Bird witness. Because this is one combined item, its declared dependency closure includes the bull theorem even when only the E conclusion is selected.
- `thm-property-star-and-leaf-reducibility-imply-generalized-niceness`: finite family + leaf reducibility + property (*) suffice; wonderfulness is not a premise here. Its intermediate graphs are complement-family-free. Read its complete local proof and its exact constants; the scaffold imports its conclusion without claiming to have revalidated every transitive proof.
- `thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property`: needs all three adjectives for a finite family and concludes EH for the original family. No extra complement switch is necessary after applying it.
- `thm-co-bird-free-comb-blocks-admit-an-e-free-structural-partition`: for each special-vertex comb block, gives disjoint X_i,Y_i covering B_i, E-free Y_i, a nonempty pure partition of X_i with E-free pattern, and vertexwise purity from each other B_h. The empty-overlap-support branch explicitly selects a singleton, avoiding an empty blockade. Read the full theorem proof.
- For Bird property (*), set both auxiliary families equal to {E}; an exponent from the already earlier E theorem can be decreased to at most one by `lem-erdos-hajnal-constants-are-downward-closed`. The two auxiliary families therefore share a single c in (0,1], and the local criterion applies uniformly to every required graph and comb. No Bird theorem is used to prove the E theorem.
- `prop-erdos-hajnal-property-is-complement-invariant`: same exponents in complementary hereditary classes, using induced-complement correspondence and unchanged homogeneous number. Read its entire proof. Freeness throughout means induced freeness, and homogeneous number means max(alpha,omega), not a module.

All new finite choices can be made from a finite enumeration. No new choice principle is introduced by these finite deductions. This is not a claim that the entire declared analytic/set-theoretic prerequisite graph has been certified choice-free; see F4.

## Transitive closure evidence and fatal findings

A temporary Python audit loaded all canonical item frontmatter with YAML, all plan requires edges, published page homes, and 358 historical/current `research/*batch-*.pages.json` manifests. Starting with the assigned A page and recursively following requires produced 78 pages (including the consumer). Starting with every item listed on those pages and following deps, justified_by, and non-remark forward_refs produced 1,763 existing item IDs. No unresolved canonical ID was found. Three reached items explicitly have `proved_here: false`, and five reached items have draft status. Full statement extraction was used to locate the suspect interfaces; graph enumeration is NOT a semantic review of 1,763 proofs. Historical manifest identities were inspected as candidates, never substituted for current authored statements.

**B9-F1 — fatal: the bull proof has unproved perfect-graph suppliers.** The three remarks explicitly say that the results are not proved here. Their exact assertions are, respectively, the Berge/perfect equivalence, complement invariance of perfection, and preservation of perfection under substitution. The claims are adequate as external mathematical theorems, but inadequate as locally established prerequisites under this scaffold contract.

Exact declared paths (prepend `lem-bird-leaf-reduction-to-the-bull` for the new Bird consumer):

```
cor-the-bull-graph-has-the-erdos-hajnal-property
 -> cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter
 -> thm-bull-free-graphs-are-two-narrow
 -> thm-alpha-narrowness-is-preserved-under-substitution
 -> rem-substituting-perfect-graphs-preserves-perfection-for-the-bull-route

cor-the-bull-graph-has-the-erdos-hajnal-property
 -> cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter
 -> thm-bull-free-graphs-are-two-narrow
 -> thm-basic-bull-free-graphs-are-two-narrow
 -> rem-weak-perfect-graph-theorem-for-the-bull-route

cor-the-bull-graph-has-the-erdos-hajnal-property
 -> cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter
 -> thm-bull-free-graphs-are-two-narrow
 -> thm-basic-bull-free-graphs-are-two-narrow
 -> thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect
 -> rem-strong-perfect-graph-theorem-for-the-bull-route
```

Both final theorems also reach this chain through:

```
lem-the-e-graph-and-the-bird-graph-are-wonderful
 -> thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property
 -> cor-the-bull-graph-has-the-erdos-hajnal-property
```

The full proofs of all three immediate consumers of these remarks were read. Their appeals are load-bearing: neighbourhood/antineighbourhood perfection uses the odd-hole/odd-antihole criterion; basic narrowness transfers good functions to the complement; substitution narrowness needs the substituted induced subgraph to remain perfect. Changing the remarks to external_refs would not repair the mathematics.

Diagnostic primary source: [Chudnovsky–Safra, bull-free graphs](https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf), 13-page full PDF fetched in the web reader. Read pp.1–3 through statements 1.5–1.6 and the perfect-graph definition, and the complete proof range pp.9–13, Theorems 4.3, 4.4, 5.1 and the closing proof of 1.3. These confirm the same load-bearing perfect-graph uses. Their dispositions are existing bull-route items, not new or approved source-only Facts. The unproved preservation statement 5.1 is itself cited from Lovász in that paper.

**B9-F2 — fatal: the E auxiliary theorem has an unlinked source-only prerequisite.**

```
thm-the-e-graph-has-the-erdos-hajnal-property
 -> lem-the-e-graph-is-generalized-nice
 -> cor-the-singleton-family-containing-e-has-property-star
 -> lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property
 -> [unlinked F4: Huang–Ju–Zhou Corollary 1.8]
```

The last authored item was read completely. F4 is exactly the leaf/co-leaf EH transfer; proof steps 1.2 and 2.1 apply it for each i=1,...,5. It has no local deps edge for that fact. Merely adding an edge to the existing `cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property` is insufficient: that draft corollary depends on draft `thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family`, whose proof just applies an unlinked F1 restating the external theorem. Both draft items were read completely. The exact leaf/co-leaf hypotheses and complement directions match the source, but the theorem has not been proved locally.

The current plan repeats the direct-source strategy for the H_5/co-E item, so a manifest ID resolving or a prior judge pass cannot close this gap. Bird inherits the gap through its use of the E theorem.

**B9-F3 — fatal for complete page closure: additional source-only/draft suppliers.** The requires closure contains `pure-pairs-forests-and-path-antipath-classes`, whose inventory includes:

- `thm-erdos-hajnal-pach-pure-pair-theorem`: its entire two-step proof invokes an unlinked F1 giving the substantive pure-pair theorem. That F1 is moreover false as written for every n>=2 without rounding or a multiplicative constant: take H=P_3 and G=K_2; then n^delta>1 forces both integer-sized sets to have size at least two. The final rounded statement is not refuted by this observation, but its supplied proof is invalid.
- `thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property`: its F1 is exactly the external forest pure-pair theorem; the proof just repackages it as a hereditary-class assertion.
- `cor-forest-and-complement-free-graphs-have-the-erdos-hajnal-property`: inherits the preceding gap.

These are the other three draft items in the enumerated closure; the two leaf/co-leaf draft items are listed in F2. Draft status by itself is not a mathematical refutation; the source-only proofs are the fatal issue. The three entire item bodies were read. They are required by the complete page-closure contract even where not on the shortest final-theorem proof path. Repairing only the two final theorem items cannot fix them.

**B9-F4 — unresolved complete semantic closure.** The traversal above exhausts the declared graph, but not every statement/proof or source in its 1,763-item closure has been semantically re-audited. In particular, analytic power/logarithm dependencies, foundational axiom strength, all historical-manifest statement differences, and all hidden unlinked Facts remain to be checked after the confirmed upstream blockers are repaired. No claim of sufficient scaffold or full closure is made. The three perfect-graph external paths are not Set Theory Beyond Choice paths. Global validate-plan/extcheck found no hard Foundations-bootstrap violation on the inspected state; this is structural evidence, not a blanket semantic certification.

## Prerequisite additions/repairs required outside this batch

Existing owner pages must first receive real local proofs and explicit dependency edges. The task makes those pages and the prose scaffold/plan read-only. The following are concrete required supplier packages for an authorized scaffold writer. They are **blocked proposals, not additional pairs silently added to batch 9**. The inventories identify required interfaces; their deeper supporting inventories must be fully harvested before any package is declared ready. No resolving ID below is claimed to be a proof.

1. **Perfect graph replication, substitution, and complement duality** — combinatorics, proposed A `perfect-graph-replication-and-complement-duality`, B with `-examples`; place after modules/substitution (397) and before the bull proof (411), e.g. 408.1/408.2, with graph-colouring and induced-subgraph pages as prerequisites. The canonical perfect-graph definition currently homed on 411 would need an explicitly authorized earlier rehome rather than a duplicate definition or a forward prerequisite. Required A inventory in proof order: the canonical perfectness definition (rehome); `lem-replication-preserves-perfectness`; `lem-clique-blowups-preserve-perfectness`; `thm-substitution-preserves-perfectness`; `lem-perfect-graphs-have-a-stable-set-meeting-every-maximum-clique`; `thm-perfect-graph-complement-duality`. B inventory: `ex-replicating-a-vertex-of-a-four-vertex-path`, `ex-substituting-a-clique-into-a-perfect-graph`, `cex-the-five-cycle-is-not-perfect-under-complementation`. Prerequisite edges must be determined from full replication/duality proofs, not from the current recorded remarks. Needed by F1's substitution and complement consumers.

2. **Berge decomposition and the strong perfect graph theorem** — combinatorics, proposed final A `berge-decomposition-and-the-strong-perfect-graph-theorem`, B with `-examples`; after the preceding package and before 411 (reserve 408.3/408.4 plus further fractional pairs if needed). Prerequisites include perfect complement duality, graph colouring, matching/edge-colouring machinery, induced-subgraph and connectivity definitions. Required interface inventory: `def-berge-graph-and-minimally-imperfect-graph`; `def-basic-berge-graph-classes`; `def-two-join-and-homogeneous-pair-decompositions`; `def-balanced-skew-partition`; `lem-basic-berge-graphs-are-perfect`; `lem-minimally-imperfect-graphs-exclude-two-joins`; `lem-minimally-imperfect-graphs-exclude-homogeneous-pairs`; `lem-minimally-imperfect-graphs-exclude-balanced-skew-partitions`; `thm-berge-graph-structural-decomposition`; `thm-strong-perfect-graph-theorem-local`. B: `ex-even-cycles-and-their-complements-are-berge`, `ex-odd-holes-obstruct-perfectness`, `ex-two-join-blocks-in-an-even-cycle`. This is not a ten-item proof of the decomposition theorem: its substantial transitive structural machinery must be added in source proof order and split into additional A/B pairs when an A inventory exceeds 60. The [full CRST paper](https://arxiv.org/pdf/math/0212070) was fetched (151 PDF pages); only the complete introductory definitions and deduction of 1.1 from 1.2/4.8 were read for diagnosis, not the decomposition proof. Accordingly this proposal is NOT source-closed or ready. An alternative local bull proof may avoid this package, but must be proved and reconciled with the retained page-requires closure; silently replacing an external citation is insufficient.

3. **Leaf/co-leaf viral extension: a full proof** — combinatorics, proposed A `leaf-and-coleaf-viral-extension-proof`, B with `-examples`, after virality and blockades (405/407) and before the existing transfer consumers at 409 (e.g. 408.5/408.6, with order adjusted around the other additions). Prerequisites: induced-copy counting, viral/polynomial-Rödl equivalence, sparse/restricted sets, blockades and finite power estimates. Required A inventory: `def-divisive-finite-graph-family`; `lem-induced-copy-count-restriction-for-leaf-extension`; `lem-leaf-extension-sparse-pair-or-restricted-set`; `lem-leaf-extension-produces-a-polynomial-blockade`; `lem-divisive-families-are-viral`; `thm-leaf-and-coleaf-viral-extension-local`; `cor-leaf-and-coleaf-erdos-hajnal-extension-local`. B: `ex-complement-commutes-with-the-chosen-leaf-deletion`, `ex-the-two-modified-h-i-co-e-families`, `ex-leaf-extension-copy-count-normalization`. The arbitrary finite-family theorem is essential: do not replace it by a narrower buildable-graph theorem without proving adequacy for H_i/co-E. [Nguyen–Scott–Seymour IV](https://arxiv.org/html/2307.06455v3) was fetched, with full PDF also available at https://arxiv.org/pdf/2307.06455 (24 pages). The introduction and source structure were inspected for scouting only; §§3–6 proof harvest and exact finite-family generalization are still owed. It cannot be treated as approved proof evidence yet.

4. **Pure-pair proof repairs** — first assign the existing `pure-pairs-forests-and-path-antipath-classes` A/B pair to a writer allowed to repair it. Required retained A interfaces: the full Erdős–Hajnal–Pach pure-pair theorem (including the n=2 repair), the full forest/complement linear pure-pair theorem, and their EH consequences. Needed additional inventories are the source's finite induced-embedding obstruction, sparse-tree embedding/coherent-graph lemmas, and normalization/small-order lemmas, followed by the retained theorem items. Required B checks: two-vertex rounding, a forest/complement example, and the distinction between polynomial and linear pure pairs. Exact intermediate statements and whether more than 60 items forces new pairs remain a source-harvest obligation; they have not been invented or marked complete here. Since the named page is not writable, this remains fatal.

No new prerequisite pair has been installed, no published item rehomed, and no source-only result relabelled as proved. F1–F4 remain open until the authorized upstream work exists and its full closure is audited.

## Source fetching and reading evidence

The coverage's two adopted independent treatments are:

- Huang–Ju–Zhou v2, https://arxiv.org/html/2606.06258v2: web reader opened substantive full HTML (1,160 extracted lines). Complete relevant ranges were read as recorded in coverage; PDF same-text verification at https://arxiv.org/pdf/2606.06258v2 succeeded (33 pages). Source corrections in the design remain binding: induced-map counts, complement directions, directional sparsity, integral block lengths, corrected wonderfulness witnesses, special-vertex scope and geometric rounding. The final page does not reopen or silently change those published corrections.
- Nguyen's full lecture-note set, https://web.math.princeton.edu/~tunghn/ehnotes.pdf: web reader opened the 21-page full PDF; pp.1–2 through Exercise 1.3 were read completely. This is independent base-case/substitution support, not a second purported proof of the 2026 results. Its proof's shorthand strict inequality must not be copied unqualified to one-vertex graphs; the local EH definition expressly treats nonempty graphs with a non-strict bound. The published substitution theorem is the imported proof interface.

An attempted Diestel preview URL `https://diestel-graph-theory.com/preview/GrTh5_Ch1.pdf` returned a web-reader Internal Error. It was never installed as backing and no mathematics was removed. The independently harvested Nguyen notes supply the required lecture-note treatment. No existing source URL was replaced, so no `original_url` rewrite was made.

Additional diagnostic sources and their limited read ranges are recorded with F1 and the prerequisite proposals. Chudnovsky's survey https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf was also opened (13 pages); the introduction and §2 through the narrowness discussion were read to corroborate the perfect-graph dependency diagnosis. Its named results map to the already-existing EH, perfect-graph, substitution, and bull items, with the unproved status preserved. It was not adopted as a substitute for a missing proof.

Local networking could not resolve either adopted source host. The Python full-body attempt failed with temporary DNS resolution failure; source-fetch-check --stamp failed with EAI_AGAIN for both URLs; URL recovery also could not query hosts/archives. The web-reader successes above establish that source text was available to this reader, but do not establish a successful repository-managed byte fetch. No bytes, digests, HTTP success codes, archive absence, or mechanical fetch stamps were fabricated. In particular, the sweep's “no archived snapshot” output under DNS failure is not evidence that no archive exists. Source checks remain failed until the driver can fetch them. Sources and harvested mathematics are retained.

## Checks actually run

- `node tools/coverage-checklist.mjs research/frontier-34-batch-9.coverage.json --require-destination`: pass, 56 harvested rows, zero errors; one low-yield warning (14/56 scaffolded). This final-deduction page intentionally reuses earlier results; the warning is not resolved by duplicating or dropping them.
- `node tools/manifest-deps.mjs research/frontier-34-batch-*.pages.json`: pass at that snapshot, 163 items, zero missing arrays/errors. Other batches were still being scaffolded.
- `node tools/content-policy.mjs --manifest-only research/frontier-34-batch-9.pages.json`: pass, 14 scoped items, zero errors/warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: pass, 892 pages with item lists and 579 empty planned pages; existing redundant-prerequisite warnings. This alone cannot check our as-yet-unspliced inventory.
- `node tools/validate-plan.mjs /tmp/b9-plan-overlay.json`: pass, 894 pages with item lists and 577 empty planned pages; existing redundant-prerequisite warnings. The temporary overlay replaced only the two assigned page records with our inventory. No plan edit was made.
- `node tools/extcheck.mjs --quiet`: zero hard errors, 63 existing unproved-consequence warnings, including the exact bull/wonderfulness chain in F1. Its generic recorded-result allowances are weaker than this task's full-local-proof requirement.
- `node tools/url-sweep.mjs --coverage research/frontier-34-batch-9.coverage.json --out /tmp/b9-url-liveness.json --timeout-ms 4000 --recover --fail-on-dead`: FAIL, 0/2 live due to DNS, 0 recovered. Both original sources retained.
- `node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-9.coverage.json --stamp --timeout-sec 8`: FAIL, both EAI_AGAIN, no stamp written.
- `node tools/source-fetch-check.mjs --coverage research/frontier-34-batch-9.coverage.json`: FAIL, 0/2 stamps. The web-reader evidence is separately recorded above.
- `node tools/source-backing.mjs --coverage research/frontier-34-batch-9.coverage.json --liveness /tmp/b9-url-liveness.json --require-verified`: FAIL, five included source-backed result IDs lack backing under that failed liveness input: the edge-table example, both final theorems, and both containment counterexamples. This is a network-evidence failure, not grounds for removing those items.
- Finite Python enumeration of all subsets of the four six-vertex adjacency tables: E has 5 edges and (alpha,omega)=(3,2); co-E has 10 and (2,3); Bird has 6 and (3,3); co-Bird has 9 and (3,3). This checks the finite examples only, not either EH theorem.
- JSON/ID smoke check: all 14 batch IDs are distinct, none has an existing item filename, and every dependency resolves under the manifest policy and temporary plan overlay.

No precheck, rendering, authoring, judge, publication, or whole-run completion was performed or claimed. Temporary diagnostics were written under /tmp; durable results needed for handoff are in these notes and coverage.

## Continuation obligation

Before any handoff is accepted, reread the current manifest, coverage, these findings, direct supplier statements/proofs and actual run state. Keep both final theorem statements intact. Obtain actual local suppliers for F1–F3 through authorized upstream work, add every requisite A/B pair to the canonical prose scaffold and plan, and replace all hidden source-only uses by valid earlier dependencies. Then complete the full semantic/axiom-strength audit in F4 and rerun the source and structural checks against the changed files. Until then, **batch 9 is blocked and unpublishable**.

Final batch-local verification after adding the two separate Lemma 6.1 clause dispositions: coverage-checklist passed with **58** rows and the same low-yield warning (**14/58**); manifest-only content policy again passed for 14 items; whole-run manifest-deps passed with **763** items at the later concurrent-run snapshot. A scan of every other historical/current batch manifest found no collisions with the 14 new IDs. `git diff --check -- research/frontier-34-batch-9.pages.json research/frontier-34-batch-9.coverage.json research/frontier-34-batch-9.notes.md` returned zero; these files are currently untracked, so that command is not a substitute for the JSON validators. Coverage now also carries honest web-reader fetch evidence separately from absent mechanical byte-fetch stamps. None of these updates closes F1–F4 or the failed network checks.
