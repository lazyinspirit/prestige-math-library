# Wave 2 topology — Audit-Beta findings

## Continuity checkpoint

- **Substage:** A1/A2 evidence collection; no A4 repair has been applied.
- **Artifacts:** this findings ledger has been initialized. The provenance JSONL and proof-contract JSON have not yet been emitted.
- **Completed checks:** read the governing brief, workflow, repository rules, schema, quality controls, active resume, and 74-item manifest in full; verified all 74 manifest item files exist; read both page files and 70 of 74 scoped item files; identified the proof-bearing set provisionally; began defect triage and recorded candidate issues in working notes.
- **Shared-tree check:** the three authorized topology output files did not exist at checkpoint time. Unrelated shared-tree changes are being preserved.
- **Exact next action:** read the four remaining topology examples, enumerate every direct dependency edge from all 74 items, and inspect each cited target's current on-disk mathematical text before finalizing A1/A2 classifications and contracts.

## A1 result — provenance proposals

The manifest contains 74 mathematical-content items and the provenance ledger contains 74 distinct rows. The proposed statement census is:

- 69 `ai-altered` / `semantic-source`;
- 2 `literature-derived` / `exact-source`;
- 2 `ai-generated` / `none`; and
- 1 `ai-generated` / `trivial`.

The proof-component census is 59 `ai-generated`, 2 `ai-altered`, and 13 `not-applicable`. Every ledger URL was fetched successfully: the 29 distinct recorded URLs returned HTTP 200 on 2026-08-03. No scoped item carries a legacy `authorship` field.

### Class (c): provenance retags proposed for all 74 items

Apply the component tags recorded row by row in `wave2-topology.provenance.jsonl`; do not change mathematical text as part of the pure retag. Four items need a more precise source added to `sources.references`:

- `fs-projections-are-closed-maps` and `cex-projection-is-not-closed`: add the verified University of California, Riverside note on the hyperbola/projection witness, `https://math.ucr.edu/~res/math205A/quotmap.pdf`;
- `cex-quotient-map-neither-open-nor-closed`: add the same note. It reproduces the exact Munkres construction, open-set witness, closed-set witness, and continuous section, so the proposed statement tag is `literature-derived` / `exact-source` and the expanded local proof is `ai-altered`; and
- `cex-r-mod-q-is-indiscrete-like`: add the verified University of Houston topology notes, `https://www.math.uh.edu/~dblecher/6343H1S2.pdf`. They state and prove the same quotient construction and indiscrete-topology conclusion, so the proposed statement tag is `literature-derived` / `exact-source` and the expanded local proof is `ai-altered`.

Three positive novelty determinations are not defaults from a failed search:

- `rem-compactness-choice-ledger-metric` is a bespoke audit of the exact proofs and choice costs in this library.
- `rem-constructions-this-page-stops-short-of` is a bespoke inventory tied to this page and this library's reading order.
- `ex-lebesgue-number-of-a-two-set-cover` is the locally selected cover with overlap exactly $1/3$ and sharp witness $[1/3,2/3]$. Its assertions were directly checked, so it is `ai-generated` / `trivial` with `generation.role: example` proposed at A4.

The two generated remarks admit no role in the current `generation.role` vocabulary. Alpha should route that legacy-policy warning explicitly rather than inventing a role or weakening the positive determination.

## A2 result — mathematical and citation findings

No repair has been applied. Every entry below is an A3 proposal.

### Class (a): unambiguous falsehood or missing foundational hypothesis

#### A-01 — `def-hausdorff-space`: false singleton Remark

Current Remark: “It says nothing about whether singletons are closed.” This is false. In a Hausdorff space, for fixed $x$ and every $y\ne x$, disjoint open neighbourhoods of $x$ and $y$ give an open neighbourhood of $y$ avoiding $x$; their union is $X\setminus\{x\}$. Thus every singleton is closed.

Proposed repair: say that Hausdorff implies the singleton-closed ($T_1$) property, while the converse fails. This is a material correction to a mathematical Remark.

#### A-02 — `cex-r-mod-q-is-indiscrete-like`: false separation sweep

The opening says a nontrivial indiscrete space “fails every separation condition at once.” That is too strong: several separation properties are vacuous on indiscrete spaces under standard convention systems. The only conclusion needed and proved here is failure of Hausdorff separation.

Proposed repair: replace the sweep with “is not Hausdorff” (or another precisely named separation axiom actually defined at this point).

#### A-03 — `cex-r-mod-q-is-indiscrete-like`: unlicensed uncountability Remark

The first Remark says $\mathbb R/\mathbb Q$ is uncountable “since its classes are countable.” That inference needs a countable-union-of-countables principle after a hypothetical enumeration of the quotient; the on-disk `thm-countable-union-of-countable` explicitly assumes countable choice. The main construction needs only the two distinct classes already proved in step 6.1.

Proposed minimal repair: delete the unneeded uncountability assertion and say only that the quotient still has more than one point. An alternative is to add an explicit $\mathrm{AC}_\omega$ hypothesis and the exact countable-union citation, but that adds needless foundational load.

#### A-04 — three product results state choice-dependent claims without assuming choice

- `thm-product-universal-property`, claim 4: for arbitrary $I$, nonempty factors do not yield a point of the product in ZF; that assertion is a form of Choice. The proof invokes `[L3]` but the claim is unqualified.
- `thm-box-finer-than-product`, claim 3: the proof chooses a point of the full product and a nonempty proper open set with a point in every factor indexed by $J$. Without Choice the product can be empty, in which case strictness fails.
- `thm-product-of-subspaces-and-closures`, claim 2: the inclusion $\prod_i\overline{A_i}\subseteq\overline{\prod_i A_i}$ for an arbitrary nonempty family uses Choice. In ZF a family of nonempty $A_i$ can have empty product while the product of the closures is nonempty.

Each item narrates where Choice is spent, but narration is not a hypothesis. Proposed repair: state `Assume the Axiom of Choice` in the choice-dependent claim itself, preserving the finite-index ZF cases and the choice-free claims separately. These are unqualified false statements in the library's explicit foundational regime, not mere proof-style preferences.

### Class (b): citation precision and proof licensing

#### B-01 — three hyperbola proofs inherit an unqualified countable-choice direction

`thm-metric-sequential-closure` states its equivalences without an $\mathrm{AC}_\omega$ hypothesis while its own proof says that sequentially closed $\Rightarrow$ closed spends $\mathrm{AC}_\omega$. The active audit resume already places that earlier-wave theorem in the owner queue; it cannot be repaired from this batch.

- `fs-projections-are-closed-maps`, step 4.1, and `cex-projection-is-not-closed`, step 4.1, use precisely the choice-spending direction to declare $H=\{(x,y):xy=1\}$ closed.
- `cex-quotient-map-neither-open-nor-closed`, fact `[L3]` inherits that proof through `cex-projection-is-not-closed` and also links directly to `thm-metric-sequential-closure`.

The three advertised counterexamples are true. Proposed local repair: establish $H$ as closed by a direct choice-free argument (equivalently, by an explicit continuity calculation for multiplication and the closed singleton $\{1\}$), then let the quotient example cite the repaired hyperbola result and remove its direct sequential-closure dependency. This keeps the current statements and witnesses while eliminating the unlicensed route.

#### B-02 — five Remark-only facts prevent a strict proof-contract pass

Five Facts paragraphs are never cited by a numbered proof step, although their eight links are captured honestly with empty `uses` arrays in the contract:

- `thm-compact-implies-the-other-compactness-forms` `[L2]`;
- `fs-totally-bounded-implies-compact` `[L7]`;
- `ex-closed-cube-is-totally-bounded` `[L7]`;
- `cex-bounded-not-totally-bounded` `[L4]`; and
- `cex-totally-bounded-not-compact` `[L5]`.

These are not mathematical defects, but `proof-contract.mjs --strict` requires every fact citation to name a using proof step. Proposed repair: where a fact only supports a Remark, put the ordinary wikilinks directly in the Remark and remove it from `Facts & Assumptions`; remove any genuinely unused fact outright. After that mechanical cleanup the current contract data can be regenerated with nonempty, exact proof uses.

The explicit base-$(m+1)$ encoding in `ex-closed-cube-is-totally-bounded` step 3.1 and minor internal-label quirks were triaged as competent-reader sub-30-second gaps and are not repair proposals.

### Class (d): page-summary restatements

Both A-page summaries violate the current two-paragraph, under-150-words-per-paragraph contract and repeatedly describe/count the page rather than only the mathematics:

- `compactness-in-metric-spaces.md`: 9 paragraphs, 732 words total (paragraph counts 85, 138, 35, 141, 75, 92, 46, 66, 54).
- `subspaces-products-and-quotients.md`: 10 paragraphs, 1,225 words total (91, 148, 129, 172, 98, 84, 157, 93, 150, 103).

The two examples pages correctly have no authored body. Proposed repair: rewrite each A summary as exactly two mathematical paragraphs under 150 words, removing item counts, self-ranking, companion-page inventory, and reading-order surveys. This is nonfatal prose work but is recorded because page summaries receive no judge reading.

## Dependency and proof-contract audit record

The four page files and all 74 scoped item files were read in full. The manifest has 898 declared dependency edges to 160 distinct target items. Every edge was checked against the target's current on-disk primary mathematical text; missing provenance on later-wave targets was not treated as a scoped defect.

The structural hazard was handled explicitly. All 172 edges leaving this batch were checked. The 123 later-wave real-analysis edges—including all edges into `countability-and-uncountability`, `monotone-sequences-and-cauchy-completeness`, `sequences-and-limits`, `roots-and-rational-powers`, and `series-and-nonnegative-tests`—were checked against current text, not provenance tags. The 47 edges into concurrently audited `suprema-and-infima` were checked against its current disk text, not a possible future repair.

The proof-contract artifact covers all 61 proof-bearing items, 532 numbered steps, 784 distinct fact-to-source citation pairs, and all 488 required boundary dispositions. Exact source clauses and all actual numbered uses are recorded. Independent Alpha risk review remains explicitly `pending` for all 61 entries, as required at A2.

The strict checker currently reports exactly eight `citation-uses` errors and no warnings, all caused by B-02's five Remark-only facts. There are no missing contracts, unmapped proof steps, quote mismatches, undeclared sources, missing targets, or generated-statement dependency errors.

## Coverage statement

Every one of the 74 scoped items, every one of the 532 numbered proof steps, every one of the 898 manifest dependency citations, and every current cited target clause was read. The later-wave and concurrent-wave targets named above were checked from their current on-disk mathematical text. There is no reading-coverage exception. The only strict-contract exception is the eight accurately empty proof-use lists caused by the five Remark-only facts in B-02; they are proposed for A3 cleanup and were not repaired at A1/A2.
## A4 apply record — approved repairs

All 74 required pre-edit snapshots are present in research/audit/wave2-touches.json under pre-<id>. A4 changed 74 item files: 62 are pure provenance/source retags whose bodies remain byte-for-byte equal to their pre-A4 bodies, and 12 are material repairs. Every material item lost its stale verification.judge block and audited stamp; every pure retag retained both. No verification.verified value was written.

### Provenance retags — old text, new text, class and evidence

The table is the complete per-item repair record. The old frontmatter had no provenance block in every row. The final labels below match the final JSONL ledger, including A4 relabels for materially altered components.

| item | old text | new text | class | source URL or written derivation |
|---|---|---|---|---|
| def-dependent-choice | provenance absent | statement: ai-altered; proof: not-applicable | (c) | <https://en.wikipedia.org/wiki/Axiom_of_dependent_choice> |
| def-metric-compactness | provenance absent | statement: ai-altered; proof: not-applicable | (c) | <https://en.wikipedia.org/wiki/Compact_space> |
| lem-compactness-is-intrinsic | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Subspace_topology> |
| def-metric-compactness-variants | provenance absent | statement: ai-altered; proof: not-applicable | (c) | <https://en.wikipedia.org/wiki/Sequentially_compact_space> |
| def-totally-bounded | provenance absent | statement: ai-altered; proof: not-applicable | (c) | <https://en.wikipedia.org/wiki/Totally_bounded_space> |
| lem-totally-bounded-basic | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Totally_bounded_space> |
| thm-compact-iff-finite-intersection-property | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Finite_intersection_property> |
| lem-closed-subset-of-a-compact-space-is-compact | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Compact_space> |
| thm-compact-subset-is-closed-and-bounded | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Compact_space> |
| thm-compact-implies-complete-and-totally-bounded | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Totally_bounded_space> |
| thm-compact-implies-the-other-compactness-forms | provenance absent | statement: ai-altered; proof: ai-altered | (c) | <https://en.wikipedia.org/wiki/Sequentially_compact_space> |
| lem-sequentially-compact-implies-complete | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Sequentially_compact_space> |
| thm-sequentially-compact-implies-totally-bounded | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Totally_bounded_space> |
| thm-complete-and-totally-bounded-implies-compact | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Totally_bounded_space> |
| thm-metric-compactness-equivalences | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Compact_space> |
| thm-heine-borel-rn | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem> |
| thm-continuous-image-of-a-compact-space-is-compact | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Compact_space> |
| thm-extreme-value-metric | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Extreme_value_theorem> |
| thm-lebesgue-number-lemma | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Lebesgue%27s_number_lemma> |
| thm-heine-cantor-metric | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem> |
| thm-continuous-bijection-from-a-compact-space-has-continuous-inverse | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Compact_space> |
| lem-compact-metric-space-has-a-countable-dense-subset | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Compact_space> |
| rem-compactness-choice-ledger-metric | provenance absent | statement: ai-generated; proof: not-applicable | (c) | Positive determination: bespoke audit of the choice spent by this library’s own proofs; no external proposition is recovered. |
| fs-closed-and-bounded-implies-compact-in-every-metric-space | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem> |
| fs-totally-bounded-implies-compact | provenance absent | statement: ai-altered; proof: ai-altered | (c) | <https://en.wikipedia.org/wiki/Totally_bounded_space> |
| fs-bounded-implies-totally-bounded | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Totally_bounded_space> |
| ex-discrete-metric-compact-iff-finite | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Discrete_space> |
| ex-closed-cube-is-totally-bounded | provenance absent | statement: ai-altered; proof: ai-altered | (c) | <https://en.wikipedia.org/wiki/Totally_bounded_space> |
| ex-convergent-sequence-with-its-limit-is-compact | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Compact_space> |
| ex-distance-to-a-set-is-attained-on-a-compact-set | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Compact_space> |
| ex-lebesgue-number-of-a-two-set-cover | provenance absent | statement: ai-generated; proof: ai-generated | (c) | Elementary verification in steps 1.1–6.1: the overlap has width 1/3, smaller-diameter sets lie in one cover member, and [1/3,2/3] rules out every larger number. |
| cex-closed-and-bounded-not-compact-in-the-sup-metric | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Uniform_norm> |
| cex-bounded-not-totally-bounded | provenance absent | statement: ai-altered; proof: ai-altered | (c) | <https://en.wikipedia.org/wiki/Totally_bounded_space> |
| cex-totally-bounded-not-compact | provenance absent | statement: ai-altered; proof: ai-altered | (c) | <https://en.wikipedia.org/wiki/Totally_bounded_space> |
| cex-evt-fails-without-compactness | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Extreme_value_theorem> |
| cex-heine-cantor-fails-without-compactness | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Heine%E2%80%93Cantor_theorem> |
| cex-open-cover-with-no-lebesgue-number | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Lebesgue%27s_number_lemma> |
| thm-subspace-closure-and-interior | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Subspace_topology> |
| def-hereditary-property | provenance absent | statement: ai-altered; proof: not-applicable | (c) | <https://en.wikipedia.org/wiki/Hereditary_property> |
| cor-metrizability-and-first-countability-are-hereditary | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Metrizable_space> |
| def-initial-and-final-topology | provenance absent | statement: ai-altered; proof: not-applicable | (c) | <https://en.wikipedia.org/wiki/Initial_topology> |
| thm-initial-and-final-characteristic-properties | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Initial_topology> |
| def-product-topology | provenance absent | statement: ai-altered; proof: not-applicable | (c) | <https://en.wikipedia.org/wiki/Product_topology> |
| thm-product-universal-property | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Product_topology> |
| thm-box-finer-than-product | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Box_topology> |
| thm-product-of-subspaces-and-closures | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Product_topology> |
| lem-product-topology-on-rn | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Product_topology> |
| def-disjoint-union-topology | provenance absent | statement: ai-altered; proof: not-applicable | (c) | <https://en.wikipedia.org/wiki/Disjoint_union_(topology)> |
| thm-coproduct-universal-property | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Disjoint_union_(topology)> |
| def-quotient-topology | provenance absent | statement: ai-altered; proof: not-applicable | (c) | <https://en.wikipedia.org/wiki/Quotient_space_(topology)> |
| thm-quotient-universal-property | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Quotient_space_(topology)> |
| lem-open-or-closed-surjection-is-quotient | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Quotient_space_(topology)> |
| thm-quotient-canonical-factorisation | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Quotient_space_(topology)> |
| def-adjunction-cone-suspension | provenance absent | statement: ai-altered; proof: not-applicable | (c) | <https://en.wikipedia.org/wiki/Adjunction_space> |
| def-hausdorff-space | provenance absent | statement: ai-altered; proof: not-applicable | (c) | <https://en.wikipedia.org/wiki/Hausdorff_space> |
| rem-constructions-this-page-stops-short-of | provenance absent | statement: ai-generated; proof: not-applicable | (c) | Positive determination: bespoke inventory of what this page develops and postpones; no external proposition is recovered. |
| fs-product-topology-equals-box-topology | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Box_topology> |
| fs-arbitrary-product-of-open-sets-is-open | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Product_topology> |
| fs-projections-are-closed-maps | provenance absent | statement: ai-altered; proof: ai-altered | (c) | <https://math.ucr.edu/~res/math205A/quotmap.pdf> |
| fs-quotient-map-is-open | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Quotient_space_(topology)> |
| fs-quotient-of-a-hausdorff-space-is-hausdorff | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Hausdorff_space> |
| ex-rn-as-a-product | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Product_topology> |
| cex-projection-is-not-closed | provenance absent | statement: ai-altered; proof: ai-altered | (c) | <https://math.ucr.edu/~res/math205A/quotmap.pdf> |
| cex-box-topology-diagonal-not-continuous | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Box_topology> |
| ex-cantor-set-as-a-product | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Cantor_set> |
| ex-hilbert-cube | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Hilbert_cube> |
| ex-circle-as-r-mod-z | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Quotient_space_(topology)> |
| ex-torus-as-a-quotient-of-the-square | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Torus> |
| ex-cylinder-and-mobius-band-as-quotients | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/M%C3%B6bius_strip> |
| cex-quotient-map-neither-open-nor-closed | provenance absent | statement: literature-derived; proof: ai-altered | (c) | <https://math.ucr.edu/~res/math205A/quotmap.pdf> |
| cex-line-with-two-origins | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Line_with_two_origins> |
| cex-r-mod-q-is-indiscrete-like | provenance absent | statement: ai-altered; proof: ai-altered | (c) | <https://www.math.uh.edu/~dblecher/6343H1S2.pdf> |
| ex-sorgenfrey-plane | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Sorgenfrey_plane> |
| cex-antidiagonal-of-the-sorgenfrey-plane | provenance absent | statement: ai-altered; proof: ai-generated | (c) | <https://en.wikipedia.org/wiki/Sorgenfrey_plane> |

The four source-list repairs were also applied:

- fs-projections-are-closed-maps, cex-projection-is-not-closed, and cex-quotient-map-neither-open-nor-closed: old text, no UCR note in sources.references; new text, title “A quotient map which is neither open nor closed (UC Riverside Math 205A notes)” with <https://math.ucr.edu/~res/math205A/quotmap.pdf>; class (c).
- cex-r-mod-q-is-indiscrete-like: old text, no University of Houston note; new text, title “Topology, Spring 2005, Homework 1 [Flagg/Blecher]” with <https://www.math.uh.edu/~dblecher/6343H1S2.pdf>; class (c).

ex-lebesgue-number-of-a-two-set-cover additionally changed from no generation block to generation.role: example. The generated remarks rem-compactness-choice-ledger-metric and rem-constructions-this-page-stops-short-of have no generation.role; that vocabulary gap remains open for Alpha/A6.

Final census: statements are 70 ai-altered, 1 literature-derived, and 3 ai-generated; proofs are 52 ai-generated, 9 ai-altered, and 13 not-applicable; evidence is 70 semantic-source, 1 exact-source, 2 none, and 1 trivial.

### Class (a) material repairs

#### A-01 — def-hausdorff-space

- Old text: “The condition is about pairs of points, not about single points. It says nothing about whether singletons are closed, and it is not equivalent to that weaker condition.”
- New text: “Hausdorff spaces have closed singletons. Fix (xin X) and take the union of all open subsets of (X) that avoid (x). Every (y
e x) belongs to one of them, by Hausdorff separation of (x) and (y), while (x) belongs to none. The union is therefore exactly (Xsetminus{x}), so ({x}) is closed. Thus the Hausdorff property implies the singleton-closed ((T_1)) property. The converse fails.”
- Class: (a), false mathematical Remark.
- Written derivation: the displayed union is open and is exactly (Xsetminus{x}); it uses no simultaneous choice. Reference: <https://en.wikipedia.org/wiki/Hausdorff_space>.

#### A-02 and A-03 — cex-r-mod-q-is-indiscrete-like

- A-02 old text: “that a quotient of a well behaved space retains any of its separation ... fails every separation condition at once and in particular is not Hausdorff.”
- A-02 new text: “that a quotient of a metrizable space must be Hausdorff ... the quotient of (mathbb R) collapses to the indiscrete topology and, because it has more than one point, is not Hausdorff.”
- A-03 old text: “(R) is uncountable, since its classes are the cosets (y+mathbb Q) and each is at most countable.”
- A-03 new text: “The quotient still has more than one point, as step 6.1 proves. What is destroyed is every proper nonempty open set.”
- Class: (a), overstrong separation claim and unlicensed countable-union inference.
- Written derivation: step 6.1 gives two quotient points. In a nontrivial indiscrete space the only neighbourhood of either is the whole space, so they cannot have disjoint neighbourhoods. No AC-omega or quotient-cardinality claim is imported. Source: <https://www.math.uh.edu/~dblecher/6343H1S2.pdf>.

#### A-04b — thm-box-finer-than-product

- Old title: “The box topology is finer than the product topology, the two agree for a finite index set, and, for a family of nonempty spaces, the box topology is strictly finer whenever infinitely many factors have a nonempty proper open subset.”
- New title: “The box topology is finer than the product topology, the two agree for a finite index set in ZF, and, assuming the Axiom of Choice for nonempty factors, the box topology is strictly finer whenever infinitely many factors have a nonempty proper open subset.”
- Old claims: “If (I) is a natural number then ... . Suppose every (X_i) is nonempty ...”
- New claims: “If (I) is a natural number then ...; this is a theorem of ZF. Assume the Axiom of Choice. Suppose every (X_i) is nonempty ...”
- Class: (a), missing foundational hypothesis.
- Written derivation: strictness requires a point of the full product and an open-set/point pair for every index in (J), exactly the proof’s two Choice uses. Finite choice is a theorem of ZF. Source: <https://en.wikipedia.org/wiki/Box_topology>.

#### A-04c — thm-product-of-subspaces-and-closures

- Old title: “The product of subspace topologies is the subspace topology of the product, and in the product topology the closure of (prod A_i) is (prodoverline{A_i}).”
- New title: “Products commute with subspaces; for infinite nonempty families, the closure identity (overline{prod A_i}=prodoverline{A_i}) uses the Axiom of Choice.”
- Class: (a) as adjudicated, title-precision repair only.
- Written derivation: the reverse inclusion for infinite nonempty families needs a background point in (prod_i A_i). The Statement already explains that cost, so no claim text changed. Source: <https://en.wikipedia.org/wiki/Product_topology>.

A-04a thm-product-universal-property was overturned. Its title and mathematical text were untouched; only its approved class-(c) provenance retag was applied.

### Class (b) material repairs

#### B-01 — choice-free hyperbola route

fs-projections-are-closed-maps:

- Old text: [L1] invoked thm-metric-sequential-closure in the sequentially-closed-to-closed direction, and step 4.1 concluded that (H) was closed from that equivalence.
- New text: [L1] proves continuity of (m(x,y)=xy) with (delta=min{1,arepsilon/(|a|+|b|+1)}) and (|xy-ab|le |x||y-b|+|b||x-a|<arepsilon). [L2] proves ({1}) closed and cites the closed-preimage characterization; new step 1.1 is “Since (H=m^{-1}[{1}]), [L1] and [L2] show that (H) is closed.”
- Class: (b). Obsolete sequential rows were removed and the elementary dependencies declared. Source: <https://math.ucr.edu/~res/math205A/quotmap.pdf>.

cex-projection-is-not-closed:

- Old text: step 4.1 used the same sequentially-closed-to-closed implication; steps 1.1–3.1 built the sequential route.
- New text: [L1] has the same explicit continuity estimate, [L2] establishes the closed singleton and closed-preimage implication, and step 1.1 writes (H=m^{-1}[{1}]). The image is nonclosed directly because every interval around (0) contains (r/2
e0).
- Class: (b). Obsolete sequential dependencies and steps were removed. Source: <https://math.ucr.edu/~res/math205A/quotmap.pdf>.

cex-quotient-map-neither-open-nor-closed:

- Old text: “[L3] (H) is closed (cex-projection-is-not-closed, thm-metric-sequential-closure).”
- New text: “[L3] The repaired hyperbola result proves (H) closed as the preimage of ({1}) under continuous multiplication (cex-projection-is-not-closed); an intersection of two closed sets is closed.”
- Class: (b). The direct thm-metric-sequential-closure dependency and contract citation were deleted. Source: <https://math.ucr.edu/~res/math205A/quotmap.pdf>.

#### B-02 — Remark-only fact cleanup

- thm-compact-implies-the-other-compactness-forms: old [L2] asserted intrinsic compactness and had no numbered use; new text deletes [L2] and the unused lem-compactness-is-intrinsic dependency. Derivation: no numbered step contains [L2].
- fs-totally-bounded-implies-compact: old [L7] said compact metric spaces are complete; new Remark links thm-compact-implies-complete-and-totally-bounded and def-complete-metric-space directly, with [L7] deleted.
- ex-closed-cube-is-totally-bounded: old [L7] packaged Heine--Borel and compact-implies-totally-bounded; new Remark links both results directly, with [L7] deleted.
- cex-bounded-not-totally-bounded: old [L4] said totally bounded implies bounded; new Remark links lem-totally-bounded-basic directly, with [L4] deleted.
- cex-totally-bounded-not-compact: old [L5] said compact metric spaces are complete; new Remark links the theorem and completeness definition directly, with [L5] deleted.
- Class: (b) for all five. These labels occurred in Remarks only and in zero numbered step tags. Their eight empty-use contract citations were removed; every remaining fact-to-source contract has a nonempty exact uses list.

### Class (d) page-summary repairs

library/topology/compactness-in-metric-spaces.md:

- Old text: the A2-recorded nine-paragraph, 732-word body beginning “Objective. Compactness is the hypothesis under which the finite behaves like the infinite” and ending with the reading-order vocabulary survey.
- New text, exactly two paragraphs of 74 and 59 words:

> Compactness in metric spaces turns arbitrary open covers into finite data and supports the finite-intersection method. The page relates compactness to countable, sequential and limit-point compactness, completeness and total boundedness. It records the proof cost where it occurs: several implications are choice-free, constructing an indefinitely separated sequence uses dependent choice, and fixing finite nets at every scale uses countable choice. Compactness of a subset is treated intrinsically, so ambient and subspace cover arguments agree.
>
> The development proves Heine--Borel in (mathbb{R}^n) and then applies compactness to continuous images, extreme values, Lebesgue numbers, uniform continuity and continuous inverses. It also obtains a countable dense subset under countable choice. Explicit counterexamples separate boundedness, total boundedness and compactness outside Euclidean space, while the choice ledger states which principles the displayed proofs use without asserting independence or necessity.

library/topology/subspaces-products-and-quotients.md:

- Old text: the A2-recorded ten-paragraph, 1,225-word body beginning “Objective. The previous topology page fixed the axioms” and ending with the companion-page inventory.
- New text, exactly two paragraphs of 68 and 76 words:

> Subspaces, products, disjoint unions and quotients are organised through initial and final topologies. Their characteristic properties turn continuity into componentwise tests for maps into products and restriction tests for maps out of coproducts and quotients. The page also records how closure and interior behave in subspaces, distinguishes hereditary from open- and closed-hereditary properties, and identifies the product topology on finite powers of (mathbb{R}) with the usual metric topology.
>
> The product--box comparison separates the finite ZF case from the infinite choice-dependent strictness result, and the product-closure title exposes the choice used for infinite nonempty families. Quotient maps are developed through their universal property, practical sufficient criteria, canonical factorisation and standard gluing constructions. The Hausdorff condition is introduced to track a separation property that quotients can destroy, and counterexamples show that projections need not be closed and quotient maps need not be open, closed or Hausdorff-preserving.

Both are class (d); no item counts, self-ranking, companion-page inventory or reading-order survey remains.

## A4 gate record

- Touchlog: all 74 required pre-<id> labels present; none missing.
- Reflow: the 11 materially changed proof-bearing files were reflowed, then a second pass reported all 11 unchanged. A full-scope diagnostic exposed legacy Remark wrapping in pure-retag files; their bodies were restored byte-for-byte, leaving 62/62 pure-retag bodies identical to pre-A4.
- Precheck with the required TSX loader: 61 proof-bearing items checked, 61 PASS, 0 failing, no REPAIR output.
- Strict proof contracts: 61/61 checked, 0 errors, 0 warnings. The former eight citation-uses failures are cleared. Two consumer quotes of the repaired box theorem were refreshed.
- Content policy in audit mode: 74 scoped, 0 errors, 3 warnings. They are the two approved ai-generated remarks and the adjudicated mention edge from ex-cylinder-and-mobius-band-as-quotients; no role was invented.
- Citecheck: 74 items, 0 errors, 1 pre-existing heuristic nonstrict-attribution warning in lem-product-topology-on-rn; it was not an A3-approved repair.
- Rendercheck: 76 files, PASS; no malformed math or wikilink-in-math error.
- Prosecheck: 76 files, 0 errors and 21 heuristic warnings; no positional contradiction. Twenty are legacy warnings, and the new def-hausdorff-space phrase “belongs to one of them” is a false-positive count heuristic, not a page-count claim. Neither rewritten A summary is warned.
- Fwdcheck: PASS, exit 0.
- Extcheck: PASS, exit 0, with 83 repo-wide legacy warnings outside this A4 repair scope.
- Depcheck: scoped structural checks pass, but the repo-wide command exits 1 on 27 published-unaudited findings. Exactly 12 are this batch’s material targets, the required state before A6; the other 15 belong to concurrent batches. There is no scoped dep, cycle, id, YAML or provenance error.
- Invariant audit: 74/74 item blocks match the final ledger; all 62 pure retags retain judge and audit stamps; all 12 material targets have neither; no legacy authorship remains; the generated example has role example; the two generated remarks have no invented role.
- Page summaries: two paragraphs each; word counts 74/59 and 68/76.

## Final A4 coverage statement

The changed mathematical items are exactly the 74 rows in the provenance table above: every name, old provenance state, final labels, class and evidence is explicit there. Material repairs were confined to def-hausdorff-space, cex-r-mod-q-is-indiscrete-like, thm-box-finer-than-product, thm-product-of-subspaces-and-closures, fs-projections-are-closed-maps, cex-projection-is-not-closed, cex-quotient-map-neither-open-nor-closed, thm-compact-implies-the-other-compactness-forms, fs-totally-bounded-implies-compact, ex-closed-cube-is-totally-bounded, cex-bounded-not-totally-bounded, and cex-totally-bounded-not-compact. The changed page summaries are compactness-in-metric-spaces and subspaces-products-and-quotients. The namespaced artifacts changed are wave2-topology.provenance.jsonl, wave2-topology.proof-contracts.json, and this findings file. No other item, page, audit namespace, commit, branch or external state was changed by this Beta.

Reading coverage remains complete: all 74 items, all 532 original numbered proof steps, all 898 dependency citations, every Remark and both A-page summaries were read at A1/A2. At A4 every approved repair was applied, every changed proof body was re-read through precheck and strict contract validation, and every final frontmatter decision was checked against the ledger. The only unresolved topology issue is the deliberately open generation.role vocabulary gap for the two generated remarks, assigned to Alpha/A6.
