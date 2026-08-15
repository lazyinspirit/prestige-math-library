# Frontier 14, batch 3 — Beta scaffold notes

## Continuity checkpoint (60% context)

- **Owned artifacts:** `frontier-14-batch-3.pages.json`, `frontier-14-batch-3.coverage.json`, `frontier-14-batch-3.proof-contracts.json`, and this file. No file outside that set has been edited.
- **Current substage:** the four-page manifest, seven-source canonical harvest, and initial proof contracts exist on disk. The manifests currently contain 40/6 items for complete metrizability/Baire and 31/8 items for covering spaces/lifting.
- **Checks completed:** all four JSON artifacts parse; the coverage checklist last reported 2 pages, 110 harvested headings, 0 errors, and 0 warnings; the manifest-only content-policy check was green before the last two complete-metrizability items were added. Every externally cited published item was resolved on disk and had `status: published`; none was legacy-unclassified.
- **Open mathematical questions:** remove the unrestricted-composition claim for covering maps (false without extra hypotheses); repair one forward intra-page dependency in the simply-connected-base corollary; replace the overly narrow real-sequence dependency in the Baire-space definition; and make the continued-fraction support chain exact. The only harvest decline still expected to draw substantive scrutiny is the arbitrary-product Čech-complete/Baire theorem whose harvested source explicitly omits the proof and for which no planned page currently gives a clean licensing destination.
- **Exact next action:** patch those manifest claims and the matching coverage entry, regenerate proof contracts from the corrected manifest, then run graph/order, provenance, content-policy, coverage, and temporary-splice plan validation before completing the source/provenance ledger and final report below.

## Step-2 findings for orchestrator adjudication

### 1. Approve the complete-metrizability prerequisite replacement and additions

Replace this page's current direct `requires` list

```json
["metrization-theorems", "compactness-in-metric-spaces"]
```

with

```json
["metrization-theorems", "tychonoff-embedding-and-stone-cech", "approximation-and-compactness-in-ck"]
```

The Stone–Čech edge is needed by `def-cech-complete-space`, compactification independence, and both metric/Čech comparison directions. The approximation edge supplies the already-published `thm-baire-category-for-complete-metric-spaces` and, to the B companion through the A-page closure, the published nowhere-differentiability machinery. `approximation-and-compactness-in-ck` already reaches `compactness-in-metric-spaces`, so retaining the latter as a direct edge would be a redundant prerequisite. Declining the Stone–Čech edge makes the substantive Čech-completeness band undeclared; declining the approximation edge either breaks the Baire corollary or forces an impermissible duplicate theorem.

### 2. Approve the covering-space group-action prerequisite

Add `group-actions-and-cayleys-theorem` to the existing `the-fundamental-group` and `compactness` requirements of `covering-spaces-and-lifting`. It supplies the exact published left-action and free-action definitions used to define covering-space actions and deck actions. Declining this edge leaves those direct item dependencies outside the declared prerequisite closure.

### 3. Apply the durable forward-reference repair

At step 4, add

```yaml
forward_refs: [thm-alexandrov-complete-metrizability-characterisation]
```

to `items/rem-complete-metrizability-is-the-topological-shadow.md`. The exact destination now exists in this scaffold, and `research/plan-topology-track.md` §T8 explicitly records this obligation. No other new item should be added to that remark's `forward_refs`.

### 4. Correct the T8c prose inventory when prose updates are applied

In `research/plan-topology-track.md` §T8c, replace the paragraph beginning `DEFS: Baire space; comeager; completely metrizable;` through the following “Do NOT re-mint” paragraph with:

> **DEFS and transfers.** Reuse the published `def-baire-space` and `lem-complete-remetrisation`; do not re-mint either notion. Define nowhere dense, meagre/comeagre and residual subsets in arbitrary topological spaces, and mint the stable topology-owned `def-polish-space`. Add Baire sequence space and Čech-completeness, including the some/every-compactification equivalence and Frolík's internal characterisation. Probability pages PT-3, PT-7, PT-11 and PT-18 consume `def-polish-space` and must not re-mint it.

Replace the T8c `THMS:` paragraph with:

> **THMS.** Reuse the published complete-metric and locally compact Hausdorff Baire category theorems with their printed choice hypotheses; derive the homeomorphism-invariant completely-metrizable and Čech-complete forms. Prove both directions of Alexandrov's $G_\delta$ characterisation, the Polish/Hilbert-cube characterisations, countable-product and subspace preservation, $\mathbb N^{\mathbb N}\cong\mathbb R\setminus\mathbb Q$, the continuous-image theorems for Baire and Cantor space, and the metric equivalence between Čech-completeness and complete metrizability. The published remark `rem-complete-metrizability-is-the-topological-shadow` forward-refers only to `thm-alexandrov-complete-metrizability-characterisation`.

This removes the contradiction between T8c's old instruction to mint definitions and its adjacent prohibition on re-minting complete metrizability. It also reconciles T8c with the binding notes at lines around 709 and 1539: both general Baire category theorems are published inputs, not items to duplicate here.

### 5. Correct the DG topology seam

In `research/plan-differential-geometry-track.md` §9.3, the sentence saying `covering-spaces-and-lifting` owes “the classification needed by DG-20, DG-23, DG-26, DG-29, and DG-34” should instead assign definitions, lifts, deck transformations and the universal-cover existence/uniqueness package to `covering-spaces-and-lifting`, and assign the subgroup/Galois correspondence to `classification-of-covering-spaces`. The dispatch fixes that scope boundary. Keeping the old sentence would route classification conclusions to the wrong page.

### 6. No split and no cross-batch edge

No split is proposed. The A pages contain 40 and 32 items, both below the 60-item ceiling after the complete source harvest. The two pairs have no item dependency on one another, and this batch has no dependency on another `frontier-14` batch.

## Source ledger

The short keys below are used in the component-provenance ledger. Every URL was opened; PDF locators were checked against extracted text rather than HTTP status alone.

| Key | Source and exact range read | Primary support |
|---|---|---|
| C1 | David Marker, *Descriptive Set Theory*, §1 Def. 1.1–Thm. 1.17, Lem. 1.30–Cor. 1.34; §2 Def. 2.46–Thm. 2.52 — https://www.math.uic.edu/~marker/math512/dst.pdf | Polish/Baire sequence spaces, Hilbert cube, continuous images, $G_\delta$ characterisations, category vocabulary and BCT |
| C2 | Michael Kunzinger, *General Topology*, §§11.3–11.4, printed pp. 98–104 — https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf | Polish preservation, category equivalences, rational counterexample, open/residual subspaces, nowhere differentiability |
| C3 | MFF General Topology summary, §4.3, printed pp. 17–18, Proposition 67 through **Věta 75** (the source uses the Czech labels `Věta` and `Důkaz`) — https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf | complete metrizability, Čech-completeness, Frolík, preservation, Baire consequence |
| C4 | Jesse Peterson, *Real Analysis*, §3.6 Prop. 3.6.1–Cor. 3.6.6 and §3.7 Lem. 3.7.5–Thm. 3.7.6 — https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf | Alexandrov/Kuratowski direction, Čech comparison, Cantor-space surjection |
| V1 | Allen Hatcher, *Algebraic Topology*, §1.3 Prop. 1.30–1.40 and Exercises 1–3 — https://pi.math.cornell.edu/~hatcher/AT/AT.pdf | lifts, subgroup index, lifting criterion, universal covers, deck transformations/actions, restriction/product/finite-cover compactness |
| V2 | J. Peter May, *A Concise Course in Algebraic Topology*, Ch. 3 §§1–2, 8 — https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf | definitions, path/homotopy lifting, fundamental-group injection, semilocal hypotheses, universal cover |
| V3 | Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6, Def. 9–Lem. 1.36 and path-class construction — https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf | cover morphisms, circle models, lifts, lifting criterion/uniqueness, universal-cover model |
| V4 | Allen Hatcher, *More Exercises for Algebraic Topology*, §1.3 supplementary Exercise 7 — https://pi.math.cornell.edu/~hatcher/AT/AT-exercises.pdf | composition when the outer covering is finite-sheeted |
| V5 | Omar Antolín Camarena, *Proper local homeomorphisms and covering maps*, opening examples — https://www.matem.unam.mx/~omar/notes/propetale.html | surjective disjoint-union local homeomorphism that need not be a covering |

### Harvest yield and declines

The checklist contains 116 source headings: 82 `included`, 15 `inline`, 5 `already-published`, 12 `deferred`, and 2 `out-of-scope`. Thus 97 headings are scaffolded or deliberately absorbed into scaffolded proofs, 5 are discharged by exact published items, and 14 are declined with named licensing destinations or an explicit statement that none exists.

The declines most likely to be challenged are:

- C3 Věta 75, arbitrary products of Čech-complete spaces are Baire. Its `Důkaz` explicitly says the proof was omitted and is not part of the examination; no planned page licenses the productively-Baire theorem, and closing it would require a separate product-game or ultrafilter development. This is the only mathematically true harvested theorem declined without a named destination.
- C2 Proposition 11.3.5, “every sigma-compact metrizable space is Polish.” This source statement is false: $\mathbb Q$ is countable, hence sigma-compact and metrizable, but is not completely metrizable. No planned page can license a false result.
- V2's projective-space fundamental-group example. No planned page currently licenses that computation, and no named downstream obligation requires it.
- The remaining covering declines are the based/unbased subgroup classification, arbitrary-subgroup realisation, regular-cover terminology with its normal-subgroup characterisation, normalizer quotient, graph-cover catalogue, and $\pi_1(S^1)$ computation. They are licensed by `classification-of-covering-spaces`, `the-fundamental-group-of-the-circle`, or both, exactly as recorded per row in the coverage artifact.

## Richness and proof decomposition

Both the long-proof decomposition pass and the corollary/example pass were performed for each pair.

For complete metrizability/Baire, the long arguments were split as follows:

- Alexandrov's equivalence is preceded by `lem-open-subspace-complete-remetrisation`, `lem-countable-intersection-of-completely-metrizable-subspaces`, and the two directional theorems.
- Product completeness is preceded by `lem-standard-complete-metric-on-a-countable-product`.
- The Polish/Hilbert-cube band separates universality, Polish $G_\delta$ subspaces, the Hilbert-cube characterisation, Baire sequence completeness, and the Baire-space continuous-image theorem.
- The irrational homeomorphism separates coding, convergent/cylinder arithmetic, parametrisation, and the final topological corollary. The zero-th coordinate codes all integers; only subsequent coordinates are shifted to positive partial quotients.
- Hausdorff–Alexandroff is preceded by `lem-finite-refining-small-diameter-covers-of-compact-metric-spaces`.
- Čech-completeness separates the compactification-remainder lemma, compactification independence, Frolík's internal characterisation, both metric comparison directions, the Baire theorem, and three preservation results.

Useful corollaries/examples added in that pair include open/closed/$G_\delta$ preservation, the completely-metrizable Baire corollary reusing the published metric theorem, Polish product/subspace preservation, the irrational and Hilbert-cube worked examples, residual nowhere-differentiability, and the rational/Baire and metrizable/Čech false statements.

For covering spaces, the long arguments were split as follows:

- Lifting is separated into path lifting, homotopy lifting, endpoint homotopy invariance, $\pi_1$ injectivity, uniqueness of lifts, and the subgroup lifting criterion.
- Construction operations separate pullback definition, restriction/product/pullback stability, and the sharp finite-outer-sheet composition theorem. Unrestricted composition is not asserted.
- Symmetry separates monodromy, component orbits, deck transformations, one-point determination/freeness, covering-space actions, and the orbit-map theorem.
- Universal covers separate the semilocal definition, necessity, path-class model, local covering lemma, existence, uniqueness/dominating property, and the simply-connected-base corollary.
- The sheet-index theorem states the actual bijection with a coset set before translating to the published finite-or-$\infty$ index convention.

Useful examples/counterexamples include trivial covers with the empty-fibre boundary, a two-interval surjective local homeomorphism with a partial sheet, disconnected-base variable degree, the real-line quotient without computing $\pi_1(S^1)$, essentiality of the unit loop by lifting, power maps, local pullback trivialisation, and the Hawaiian earring obstruction.

## Convention and source disagreements

- The house vocabulary uses **meagre** in ids/prose but records **meager** as the source spelling; residual and comeagre are synonyms and will be stated together.
- `lem-complete-remetrisation` already owns complete metrizability and its homeomorphism invariance. This scaffold transfers and characterises the notion; it does not create a second definition.
- `def-polish-space` uses “separable and completely metrizable.” Kunzinger uses a countable-basis convention. `prop-polish-space-countability-conventions-agree` states the equivalence only under the published countable-choice hypothesis.
- The library's sequences begin at $0$. The Baire ultrametric and continued-fraction coding therefore isolate coordinate $0$ explicitly. For continued fractions it codes an arbitrary integer through a fixed zigzag bijection; coordinates $n\geq1$ code positive partial quotients by adding one.
- C1 formulates the Baire theorem for Polish spaces and C2 bundles completely metrizable and locally compact cases. The scaffold reuses the exact published complete-metric and locally compact Hausdorff theorems and states their sufficient choice hypotheses; it does not widen either citation.
- C3 defines Čech-completeness via $\beta X$, while C4 uses a compactification formulation. `thm-cech-completeness-is-independent-of-compactification` proves the some/every equivalence before the variants are interchanged.
- C2 Proposition 11.3.5 is false as printed. It is harvested as an explicit source defect, not silently imported.
- Covering maps are defined as surjective, matching V2. This matters for empty fibres, trivial covers and all compactness directions.
- A map of covers is a continuous map over the fixed base; an isomorphism is such a map that is a homeomorphism. Gualtieri's terse wording can be read as requiring the morphism itself to be a covering, while Hatcher's standard over-base convention is weaker; the scaffold uses the latter and states it explicitly.
- The published fundamental-group product traverses $\alpha$ first and $\beta$ second. Endpoint monodromy is therefore recorded first as a right action; the equivalent left action and the inverse-path correction in the deck-group isomorphism are stated rather than hidden.
- The published `def-index` records a finite cardinal when the coset set is finite and the symbol $\infty$ otherwise. The new sheet theorem first gives an actual fibre–coset bijection, then states the finite/$\infty$ consequence without pretending `def-index` stores an arbitrary infinite cardinal.
- Local path-connectedness is present on the lifting criterion and universal-cover existence route. Semilocal simple connectedness is stated with an explicit basepoint/inclusion-induced-map convention. Neither hypothesis is silently added to the necessity theorem.
- V4 gives the precise repair to the common composition overstatement: $q\circ p$ is a covering when the **outer** covering $q$ is finite-sheeted. Without finiteness, the sheets over one basepoint need not admit a common neighbourhood.

## Dependency audit and confidence routes

Every direct external dependency below was opened from `items/<id>.md`, its `status: published` was checked, and its exact Definition or Statement was read for domain, hypotheses, direction and conclusion. There are 91 distinct external dependencies. Every one has component provenance; there are no `legacy-unclassified` dependencies and no `ai-generated` statement is load-bearing.

The confidence routes are:

- **Published exact-clause + source-checked.** The nontrivial or convention-sensitive topology and covering suppliers were checked both on disk and against C1–C4 or V1–V5: `cor-q-is-meager-and-not-g-delta`, `cor-stone-cech-compactification-is-unique-over-x`, `cor-tychonoff-spaces-have-compactifications-under-the-ultrafilter-lemma`, `def-baire-space`, `def-based-loops-and-fundamental-group`, `def-compactification-of-a-tychonoff-space`, `def-complete-metric-space`, `def-free-group-action`, `def-group-action`, `def-index`, `def-induced-homomorphism-on-fundamental-groups`, `def-locally-connected`, `def-path-connected`, `def-separable-space`, `def-simply-connected`, `def-stone-cech-compactification`, `lem-bounded-remetrisation`, `lem-complete-remetrisation`, `lem-distance-to-set-is-lipschitz`, `lem-pointwise-lipschitz-sets-in-c01-are-closed`, `lem-rat-embeds-dense`, `lem-steep-polygonal-functions-are-dense-in-c01`, `thm-baire-category-for-complete-metric-spaces`, `thm-baire-category-locally-compact-hausdorff`, `thm-cantor-intersection-metric`, `thm-compact-implies-complete-and-totally-bounded`, `thm-complete-subspace-iff-closed`, `thm-countable-products-of-second-countable-spaces`, `thm-lebesgue-number-lemma`, `thm-metric-completion-exists`, `thm-metric-countability-equivalences`, `thm-metric-spaces-are-tychonoff-and-perfectly-normal`, `thm-nowhere-differentiable-functions-are-dense-in-c01`, `thm-one-point-compactification-properties`, `thm-second-countable-implies-separable`, `thm-stone-metric-spaces-are-paracompact`, and `thm-tychonoff`.
- **Published exact-clause + established mathematics.** The remaining elementary set, algebra, metric and point-set clauses were checked on disk and confirmed from standard knowledge: `def-axiom-of-choice`, `def-compact-space`, `def-connected-space`, `def-continuous-map-top`, `def-coset`, `def-countable`, `def-countable-choice`, `def-dependent-choice`, `def-disjoint-union-topology`, `def-equinumerous`, `def-filter-base`, `def-first-countable-top`, `def-g-delta-and-f-sigma-in-a-topological-space`, `def-group`, `def-homeomorphism-and-open-maps`, `def-homotopy-relative-and-path-homotopy`, `def-integers`, `def-interior-closure-boundary-top`, `def-interval`, `def-metric-ball`, `def-metric-bounded-diameter`, `def-metric-compactness`, `def-metrizable-space`, `def-neighbourhood-top`, `def-product-topology`, `def-quotient-topology`, `def-rat-operations`, `def-rationals`, `def-series`, `def-standard-topologies`, `def-subspace-topology-top`, `def-the-set-of-functions-from-one-set-to-another`, `lem-closed-subset-of-a-compact-space-is-compact`, `lem-continuity-is-local-and-pastes`, `lem-integer-part`, `lem-open-or-closed-surjection-is-quotient`, `prop-second-countability-is-hereditary`, `thm-closed-subspace-of-a-compact-space-is-compact`, `thm-compact-iff-fip`, `thm-compact-subset-of-a-hausdorff-space-is-closed`, `thm-compactness-under-continuous-maps`, `thm-countable-union-of-countable`, `thm-de-morgan-laws`, `thm-division-algorithm-in-z`, `thm-fundamental-group-laws`, `thm-geometric-series`, `thm-metric-hausdorff-separation`, `thm-n-cross-n-countable`, `thm-nested-interval-property`, `thm-rat-ordered-field`, `thm-rationals-countable`, `thm-recursion`, `thm-t1-iff-singletons-are-closed`, and `thm-the-separation-implication-chain`.

The spliced temporary validation resolved every one of these dependencies inside each page's declared `requires` closure. No published dependency was found unambiguously false. The false assertion found in C2 is an external source heading, not a published library item.

## Component-provenance ledger

`LD/NA` means `statement: literature-derived`, `proof: not-applicable`; `LD/AA` means `statement: literature-derived`, `proof: ai-altered`; `AA/AA` means both components are `ai-altered`. Every `AA` proof label reflects a future locally written proof that combines the named source treatment with exact library dependencies; it does not change the statement's source status.

### `complete-metrizability-and-baire`

| Item | S/P | Source/edit-history rationale |
|---|---|---|
| `def-nowhere-dense-meagre-and-residual-subsets` | LD/NA | Definitions matched C1 Def. 2.46 and C2 Def. 11.4.1, with house spelling and residual/comeagre synonym recorded. |
| `prop-meagre-subsets-form-a-sigma-ideal` | LD/AA | Exact source result in C1 Ex. 2.48–2.49 and C2 Prop. 11.4.2; proof is rebuilt using the published countability of $\mathbb N^2$. |
| `thm-baire-space-equivalent-characterisations` | LD/AA | C2 Prop. 11.4.4 and C1 §2 supply the equivalences; proof is adapted to the published general Baire definition and empty-space convention. |
| `prop-open-and-residual-subspaces-of-baire-spaces` | LD/AA | C2 Props. 11.4.8–11.4.9; proof is rewritten through the new general meagreness definition. |
| `lem-open-subspace-complete-remetrisation` | LD/AA | C1 Lem. 1.30 and C2 Prop. 11.3.4; reciprocal-distance proof is adapted to the existing complete-remetrisation lemma. |
| `lem-countable-intersection-of-completely-metrizable-subspaces` | LD/AA | C1 Cor. 1.31 and C2 Prop. 11.3.6; proof makes the countable-choice and ambient-Hausdorff steps explicit. |
| `thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable` | LD/AA | C1 Cor. 1.32 and C4 Prop. 3.6.1; local proof factors through the two preceding metric lemmas. |
| `thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta` | LD/AA | C1 Thm. 1.33 direction and C4 Thm. 3.6.2/Cor. 3.6.3; small-diameter cover proof is adapted to printed choice assumptions. |
| `thm-alexandrov-complete-metrizability-characterisation` | LD/AA | C3 Thm. 68 and C4 Cor. 3.6.4; proof composes the two separately scaffolded implications. |
| `cor-open-closed-and-g-delta-subspaces-of-completely-metrizable-spaces` | LD/AA | Standard corollary of C1 Lem. 1.30/Cor. 1.32 and the exact published closed-subspace theorem; local synthesis changes only presentation. |
| `cor-completely-metrizable-spaces-are-baire` | LD/AA | C1 Thm. 2.52 and C2 Thm. 11.4.10; proof reuses the published complete-metric BCT and transfers it through a compatible complete metric. |
| `lem-standard-complete-metric-on-a-countable-product` | LD/AA | Standard metric construction underlying C3 Prop. 67; proof writes the topology, completeness, empty product and geometric tail explicitly. |
| `thm-countable-products-of-completely-metrizable-spaces` | LD/AA | C3 Prop. 67 and C1 Ex. 1.3; proof separates metric selection/bounding from the preceding product lemma. |
| `def-polish-space` | LD/NA | C1 Def. 1.1, using the topology-owned separable-completely-metrizable convention required by the dispatch. |
| `prop-polish-space-countability-conventions-agree` | LD/AA | C2 Def. 11.3.2 compared with C1 Def. 1.1; proof cites the exact published countable-choice equivalence. |
| `thm-hilbert-cube-universal-for-separable-metrizable-spaces` | AA/AA | C1 Thm. 1.4 states the embedding only for Polish spaces, while its distance-coordinate proof uses only separability and metrizability. The scaffold deliberately generalises the sourced statement to the classical separable-metrizable form and is therefore `ai-altered`; none of C2–C4 carries that broader statement in the declared ranges. |
| `thm-polish-subspaces-are-exactly-g-delta-subspaces` | LD/AA | C1 Thm. 1.33 and C2 Thm. 11.3.8; proof includes the stated countable-choice countability conversion. |
| `thm-polish-spaces-as-g-delta-subspaces-of-the-hilbert-cube` | LD/AA | C1 Cor. 1.34, C2 Thm. 11.3.9 and C4 Cor. 3.6.5; local proof composes universality and Alexandrov. |
| `cor-countable-products-and-g-delta-subspaces-of-polish-spaces-are-polish` | LD/AA | C1 Ex. 1.3/Cor. 1.32 and C2 Prop. 11.3.4; proof exposes both completeness and second-countability suppliers. |
| `def-baire-sequence-space` | LD/NA | C1 Def. 1.7, transferred to the published function-set/product-topology notation. |
| `thm-baire-sequence-space-is-polish` | LD/AA | C1 Def. 1.7 and countable-discrete examples; proof supplies the exact zero-based ultrametric and dense set. |
| `thm-every-nonempty-polish-space-is-a-continuous-image-of-baire-space` | LD/AA | C1 Lemmas 1.5–1.6 and Thm. 1.17; recursive refinement proof is expanded and nonemptiness/choice are tracked. |
| `def-simple-continued-fraction-coding` | LD/NA | C1 Ex. 1.13; the source coding is expanded to all irrational reals by an explicit $\mathbb N\leftrightarrow\mathbb Z$ zero-th-coordinate bijection. |
| `lem-simple-continued-fraction-convergents-and-cylinders` | LD/AA | Arithmetic machinery implicit in C1 Ex. 1.13; determinant, endpoint and diameter identities will be proved from exact rational-field and recursion suppliers. |
| `thm-simple-continued-fractions-parametrise-the-irrationals` | LD/AA | C1 Ex. 1.13; proof supplies both algorithms, excludes rational endpoints and checks continuity in both directions. |
| `cor-baire-sequence-space-is-homeomorphic-to-the-irrationals` | LD/AA | Exact outcome of C1 Ex. 1.13 and C2 Cor. 11.3.7; proof is the explicit coordinate recoding plus the prior theorem. |
| `lem-finite-refining-small-diameter-covers-of-compact-metric-spaces` | LD/AA | Source-backed proof decomposition for C4 Thm. 3.7.6; the repaired proof uses the arbitrary finite rooted refinement tree the compactness argument supplies, without falsely asserting binary branching. |
| `thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space` | LD/AA | C4 Lem. 3.7.5/Thm. 3.7.6; proof uses the preceding finite refinement lemma and the exact compact-implies-complete clause. |
| `def-cech-complete-space` | LD/NA | C3 definition after Thm. 68 and C4 definition after Cor. 3.6.5; compactification convention is fixed explicitly. |
| `lem-maps-of-compactifications-preserve-remainders` | LD/AA | C3 Lem. 69; both remainder inclusions and surjectivity are separated in the proof contract. |
| `thm-cech-completeness-is-independent-of-compactification` | LD/AA | C3 Prop. 70; proof uses Stone–Čech as common dominator and transfers the $F_\sigma$ remainder. |
| `thm-frolik-internal-characterisation-of-cech-completeness` | LD/AA | C3 Thm. 71; both compactification-to-covers and covers-to-compactification directions are explicit proof obligations. |
| `thm-completely-metrizable-spaces-are-cech-complete` | LD/AA | C4 Cor. 3.6.6 and C3 Cor. 72 direction; proof is adapted through locally finite metric covers and the published compactification machinery. |
| `thm-metrizable-cech-complete-spaces-are-completely-metrizable` | LD/AA | Reverse direction of C3 Cor. 72; proof passes through metric completion, a compactification, and the $G_\delta$ theorem. |
| `cor-metrizable-cech-complete-iff-completely-metrizable` | LD/AA | C3 Cor. 72; local proof combines the two separately scaffolded directions. |
| `cor-locally-compact-hausdorff-spaces-are-cech-complete` | LD/AA | C3 examples; proof uses the exact published one-point compactification theorem, with compact spaces handled by the identity compactification. |
| `thm-cech-complete-spaces-are-baire` | LD/AA | C3 Thm. 73; nested compact-closure proof is expanded with the sufficient DC hypothesis. |
| `prop-closed-subspaces-of-cech-complete-spaces` | LD/AA | C3 Prop. 74(iii); proof takes the closure in a compactification and intersects $G_\delta$ layers. |
| `prop-topological-sums-of-cech-complete-spaces` | LD/AA | C3 Prop. 74(i); proof constructs the compactification from the sum of witnesses and states the AC/empty-sum cases. |
| `thm-countable-products-of-cech-complete-spaces` | LD/AA | C3 Prop. 74(ii); proof uses a compact product and pairs coordinate/layer indices. |

### `complete-metrizability-and-baire-examples`

| Item | S/P | Source/edit-history rationale |
|---|---|---|
| `fs-every-baire-space-is-completely-metrizable` | AA/AA | The false universal claim is adapted as a pedagogical target; the explicit Cantor-cube witness is checked from published Tychonoff, LCH Baire and first-countability facts. It is not a dependency target. |
| `fs-the-rational-numbers-form-a-baire-space` | LD/AA | C2 Exs. 11.4.3/11.4.7 and C3 examples; proof uses exact T1 singleton and rational-countability clauses. |
| `ex-baire-sequence-space-and-the-irrationals` | LD/AA | Worked form of C1 Ex. 1.13 and C2 Cor. 11.3.7; proof computes cylinders from the A-page arithmetic. |
| `ex-hilbert-cube-as-a-compact-polish-universal-space` | LD/AA | C1 Thm. 1.4 and C2 Ex. 11.3.3; proof assembles compactness, completeness, countability and universality without importing B-page facts. |
| `cor-nowhere-differentiable-functions-are-residual-in-c01` | LD/AA | C2 Thm. 11.4.11; proof reuses the exact published closed/dense function-space ingredients and strengthens “dense” to the source-backed residual conclusion. |
| `fs-every-metrizable-space-is-cech-complete` | LD/AA | C3 examples and C3 Cor. 72; $\mathbb Q$ is the explicit metrizable non-Čech-complete witness. |

### `covering-spaces-and-lifting`

| Item | S/P | Source/edit-history rationale |
|---|---|---|
| `def-covering-map-and-evenly-covered-neighbourhoods` | LD/NA | V2 §1 and V3 Def. 9; explicit surjectivity, fibres, sheets and trivial covers are consolidated in one definition. |
| `def-map-and-isomorphism-of-covering-spaces` | LD/NA | V3 Def. 9, with the continuous-over-base convention made explicit and isomorphism separated as a homeomorphism over the base. |
| `def-lift-of-a-map-path-and-homotopy` | LD/NA | V1 Prop. 1.30 setup and V2 §2; map, path and homotopy lifts use one commuting-triangle convention. |
| `prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres` | LD/AA | Immediate standard consequence of V2/V3's covering definition; proof retains surjectivity as a hypothesis clause rather than deriving it. |
| `prop-number-of-sheets-is-locally-constant` | LD/AA | Standard sheet consequence in V1 §1.3; proof states connectedness only for global constancy and the B page supplies the failure witness. |
| `thm-path-lifting-for-covering-maps` | LD/AA | V1 Prop. 1.30, V2 §2 and V3 Lem. 1.31; proof is rebuilt with the published Lebesgue-number and pasting lemmas. |
| `thm-homotopy-lifting-for-covering-maps` | LD/AA | V1 Prop. 1.30 and V3 Lem. 1.31; proof expands the local-in-$Y$, finite-in-time construction and uniqueness. |
| `cor-lifted-path-endpoints-depend-only-on-path-homotopy` | LD/AA | Endpoint-fixed consequence printed after V1 Prop. 1.30 and in V2 §2; proof tracks both endpoint edges in the discrete fibre. |
| `thm-covering-maps-inject-fundamental-groups` | LD/AA | V1 Prop. 1.31, V2 §2 and V3 Cor. 1.32; proof uses lifted nullhomotopy with exact basepoints. |
| `thm-uniqueness-of-lifts-from-a-connected-space` | LD/AA | V1 Prop. 1.34 and V3 Lem. 1.36; equaliser open/closed proof preserves connected rather than path-connected domain. |
| `thm-covering-space-lifting-criterion` | LD/AA | V1 Prop. 1.33 and V3 Lem. 1.35; both necessity and sufficiency retain path-connectedness and local path-connectedness. |
| `def-pullback-covering-space` | LD/NA | V2 §1 product/pullback examples; fibre product and projection are expressed in published product/subspace notation. |
| `prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback` | LD/AA | V1 Exercises 1–2 and V2 §1; the statement deliberately omits unrestricted composition. |
| `prop-composition-of-coverings-with-finite-sheeted-outer-map-is-a-covering` | LD/AA | Exact V4 Exercise 7; proof exposes the finite common-neighbourhood intersection that fails in the unrestricted claim. |
| `def-monodromy-action-on-a-covering-fibre` | LD/NA | V1 lifting development; right action is primary because of the published traversal-order product, and the left-action translation is stated. |
| `prop-monodromy-acts-by-bijections-and-detects-components` | LD/AA | Standard consequence of V1 §1.3; proof gives both orbit/component inclusions and the inverse permutation by path reversal. |
| `def-deck-transformation-and-deck-group` | LD/NA | V1 definition following Thm. 1.38; imports only the definition, not the deferred normalizer quotient. |
| `prop-deck-transformations-are-determined-by-one-point-and-act-freely` | LD/AA | V1 discussion before Prop. 1.39; proof is factored through exact lift uniqueness. |
| `def-covering-space-action` | LD/NA | V1 condition star before Prop. 1.40; disjoint translates of one neighbourhood are stated verbatim in the library's left-action convention. |
| `thm-orbit-map-of-a-covering-space-action-is-a-covering` | LD/AA | V1 Prop. 1.40(a)–(b); proof includes both the covering chart and, for path-connected total space, equality with the full deck group. |
| `prop-local-path-connectedness-lifts-and-descends-along-coverings` | LD/AA | Standard local-sheet consequence used in V1/V2 universal-cover arguments; both directions are separately contracted. |
| `def-semilocally-simply-connected-space` | LD/NA | V1 and V2 §8 definitions; basepoint and inclusion-induced-map convention is explicit. |
| `def-universal-covering-space` | LD/NA | V1/V2 universal-cover definition; the total space is simply connected in the exact published sense. |
| `thm-universal-covering-spaces-force-semilocal-simple-connectedness` | LD/AA | Standard necessity implicit in V1/V2; proof uses one evenly covered neighbourhood and does not assume local path-connectedness. |
| `def-path-class-model-for-a-universal-cover` | LD/NA | V1 construction, V2 §8 and V3 closing construction; endpoint-fixed path classes and basic sets are separated from the covering proof. |
| `lem-path-class-projection-is-a-covering-map` | LD/AA | V1/V2/V3 path-class construction; the nonempty hypothesis and all three printed local/base hypotheses are spent exactly where needed. |
| `thm-universal-cover-existence` | LD/AA | V1 construction and V2 §8 theorem; the nonempty hypothesis reconciles the library's empty-space path-connectedness convention with its nonempty simply-connectedness convention, and the proof uses the path-class endpoint criterion plus injectivity of the projection on $\pi_1$. |
| `thm-universal-cover-uniqueness-and-dominating-property` | LD/AA | V1's universal-cover discussion; proof uses the lifting criterion and lift uniqueness in both comparison directions. |
| `cor-connected-cover-of-a-simply-connected-space-is-trivial` | LD/AA | Standard corollary of V1 lifting theory; direct endpoint-homotopy proof avoids a forward dependency on the subsequent coset theorem. |
| `thm-sheets-equal-fundamental-group-index` | LD/AA | V1 Prop. 1.32; statement is sharpened to the actual fibre–coset bijection before applying the library's finite/$\infty$ index convention. |
| `thm-compactness-is-invariant-under-finite-sheeted-coverings` | LD/AA | V1 Exercise 3; the compactness equivalence is proved directly, while Hatcher's bundled Hausdorff clause is not silently imported. |
| `thm-deck-group-of-a-universal-cover-is-the-fundamental-group` | LD/AA | Universal-cover special case of V1 Prop. 1.39; inverse paths repair the homomorphism direction forced by the house traversal convention. |

### `covering-spaces-and-lifting-examples`

| Item | S/P | Source/edit-history rationale |
|---|---|---|
| `ex-trivial-coverings-and-discrete-fibre-products` | LD/AA | V2 §1 basic example; proof includes the empty-fibre/surjectivity boundary. |
| `cex-a-surjective-local-homeomorphism-need-not-be-a-covering-map` | AA/AA | V5 supplies the standard disjoint-open-cover construction; the explicit two-interval witness is an adapted, directly checkable instance and is not a dependency target. |
| `cex-a-disconnected-base-allows-variable-sheet-number` | LD/AA | Standard converse boundary to sheet local constancy; the finite discrete witness is fully explicit. |
| `ex-real-line-mod-integer-translations-is-a-covering` | LD/AA | V1 covering-space actions and V3 circle model; proof identifies every deck map without computing the quotient's fundamental group. |
| `ex-the-unit-loop-in-real-line-mod-integers-is-essential` | LD/AA | Standard lift obstruction from V1/V3; proof establishes only non-nullhomotopy and does not claim $\pi_1\cong\mathbb Z$. |
| `ex-power-maps-on-real-line-mod-integers-are-finite-sheeted-coverings` | LD/AA | V3 Ex. 1.30; proof counts inverse branches and handles $m=1$ explicitly. |
| `ex-pullback-over-an-evenly-covered-open-set-is-trivial` | LD/AA | V1 Exercise 1 and V2 pullback example; explicit mutually inverse maps verify the local trivialisation. |
| `ex-the-hawaiian-earring-has-no-universal-cover` | LD/AA | V1's standard semilocal-simple-connectedness failure; shrinking-wedge topology, circle retraction and lifted essential loop are all local proof obligations. |

## Ordered page inventory

This is the intended step-5 reading order. Each row records the stable id, kind and title; the machine-readable statements are in the page scaffold.

### `complete-metrizability-and-baire` (40 items)

1. `def-nowhere-dense-meagre-and-residual-subsets` — definition — Nowhere dense, meagre, residual, and comeagre subsets of a topological space
2. `prop-meagre-subsets-form-a-sigma-ideal` — proposition — The meagre subsets of a topological space form a sigma-ideal
3. `thm-baire-space-equivalent-characterisations` — theorem — Equivalent forms of the Baire property
4. `prop-open-and-residual-subspaces-of-baire-spaces` — proposition — Open subspaces and residual subspaces of Baire spaces are Baire
5. `lem-open-subspace-complete-remetrisation` — lemma — Every open subspace of a completely metrizable space is completely metrizable
6. `lem-countable-intersection-of-completely-metrizable-subspaces` — lemma — A countable intersection of completely metrizable subspaces is completely metrizable
7. `thm-g-delta-subspaces-of-complete-metric-spaces-are-completely-metrizable` — theorem — Every $G_\delta$ subspace of a complete metric space is completely metrizable
8. `thm-completely-metrizable-subspaces-of-metric-spaces-are-g-delta` — theorem — Every completely metrizable subspace of a metric space is $G_\delta$
9. `thm-alexandrov-complete-metrizability-characterisation` — theorem — Alexandrov's theorem: a subspace of a complete metric space is completely metrizable exactly when it is $G_\delta$
10. `cor-open-closed-and-g-delta-subspaces-of-completely-metrizable-spaces` — corollary — Open, closed, and $G_\delta$ subspaces of completely metrizable spaces are completely metrizable
11. `cor-completely-metrizable-spaces-are-baire` — corollary — Under Dependent Choice, every completely metrizable space is Baire
12. `lem-standard-complete-metric-on-a-countable-product` — lemma — The standard weighted metric on a countable product of bounded complete metric spaces is complete
13. `thm-countable-products-of-completely-metrizable-spaces` — theorem — Under countable choice, a countable product of completely metrizable spaces is completely metrizable
14. `def-polish-space` — definition — Polish spaces are separable completely metrizable spaces
15. `prop-polish-space-countability-conventions-agree` — proposition — For completely metrizable spaces, the separable and second-countable definitions of Polish space agree under countable choice
16. `thm-hilbert-cube-universal-for-separable-metrizable-spaces` — theorem — Every separable metrizable space embeds in the Hilbert cube $[0,1]^{\mathbb N}$
17. `thm-polish-subspaces-are-exactly-g-delta-subspaces` — theorem — Under countable choice, a subspace of a Polish space is Polish exactly when it is $G_\delta$
18. `thm-polish-spaces-as-g-delta-subspaces-of-the-hilbert-cube` — theorem — A space is Polish exactly when it is homeomorphic to a $G_\delta$ subspace of the Hilbert cube
19. `cor-countable-products-and-g-delta-subspaces-of-polish-spaces-are-polish` — corollary — Countable products and $G_\delta$ subspaces of Polish spaces are Polish
20. `def-baire-sequence-space` — definition — Baire sequence space $\mathbb N^{\mathbb N}$ and its cylinder topology
21. `thm-baire-sequence-space-is-polish` — theorem — Baire sequence space is Polish and its standard ultrametric is complete
22. `thm-every-nonempty-polish-space-is-a-continuous-image-of-baire-space` — theorem — Every nonempty Polish space is a continuous image of Baire sequence space
23. `def-simple-continued-fraction-coding` — definition — Simple continued fractions, convergents, and the integer-coordinate coding of $\mathbb N^{\mathbb N}$
24. `lem-simple-continued-fraction-convergents-and-cylinders` — lemma — Continued-fraction convergents, determinant identities, and nested irrational cylinders
25. `thm-simple-continued-fractions-parametrise-the-irrationals` — theorem — Infinite simple continued fractions parametrise the irrational real numbers
26. `cor-baire-sequence-space-is-homeomorphic-to-the-irrationals` — corollary — Baire sequence space is homeomorphic to the irrational real numbers
27. `lem-finite-refining-small-diameter-covers-of-compact-metric-spaces` — lemma — Compact metric spaces admit finite refining covers of arbitrarily small diameter
28. `thm-cantor-space-surjects-onto-every-nonempty-compact-metric-space` — theorem — Every nonempty compact metric space is a continuous image of Cantor space
29. `def-cech-complete-space` — definition — Čech-complete spaces as $G_\delta$ subspaces of Hausdorff compactifications
30. `lem-maps-of-compactifications-preserve-remainders` — lemma — A map of Hausdorff compactifications carries the larger remainder onto the smaller remainder
31. `thm-cech-completeness-is-independent-of-compactification` — theorem — A Tychonoff space is $G_\delta$ in some Hausdorff compactification exactly when it is $G_\delta$ in every one
32. `thm-frolik-internal-characterisation-of-cech-completeness` — theorem — Frolík's internal open-cover characterisation of Čech-completeness
33. `thm-completely-metrizable-spaces-are-cech-complete` — theorem — Every completely metrizable space is Čech-complete
34. `thm-metrizable-cech-complete-spaces-are-completely-metrizable` — theorem — Every metrizable Čech-complete space is completely metrizable
35. `cor-metrizable-cech-complete-iff-completely-metrizable` — corollary — A metrizable space is Čech-complete exactly when it is completely metrizable
36. `cor-locally-compact-hausdorff-spaces-are-cech-complete` — corollary — Every locally compact Hausdorff space is Čech-complete
37. `thm-cech-complete-spaces-are-baire` — theorem — Under Dependent Choice, every Čech-complete space is Baire
38. `prop-closed-subspaces-of-cech-complete-spaces` — proposition — Closed subspaces of Čech-complete spaces are Čech-complete
39. `prop-topological-sums-of-cech-complete-spaces` — proposition — Topological sums of Čech-complete spaces are Čech-complete
40. `thm-countable-products-of-cech-complete-spaces` — theorem — Under countable choice, countable products of Čech-complete spaces are Čech-complete

### `complete-metrizability-and-baire-examples` (6 items)

1. `fs-every-baire-space-is-completely-metrizable` — false-statement — Every Baire space is completely metrizable
2. `fs-the-rational-numbers-form-a-baire-space` — false-statement — The rational numbers form a Baire space
3. `ex-baire-sequence-space-and-the-irrationals` — example — Cylinder sets and continued fractions exhibit the homeomorphism $\mathbb N^{\mathbb N}\cong\mathbb R\setminus\mathbb Q$
4. `ex-hilbert-cube-as-a-compact-polish-universal-space` — example — The Hilbert cube is compact, Polish, and universal for separable metrizable spaces
5. `cor-nowhere-differentiable-functions-are-residual-in-c01` — corollary — Under Dependent Choice, nowhere differentiable functions form a residual subset of $C([0,1],\mathbb R)$
6. `fs-every-metrizable-space-is-cech-complete` — false-statement — Every metrizable space is Čech-complete

### `covering-spaces-and-lifting` (32 items)

1. `def-covering-map-and-evenly-covered-neighbourhoods` — definition — Covering maps, evenly covered neighbourhoods, fibres, sheets, and trivial coverings
2. `def-map-and-isomorphism-of-covering-spaces` — definition — Maps and isomorphisms of covering spaces over a fixed base
3. `def-lift-of-a-map-path-and-homotopy` — definition — Lifts of maps, paths, and homotopies through a covering map
4. `prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres` — proposition — Covering maps are surjective local homeomorphisms with discrete fibres
5. `prop-number-of-sheets-is-locally-constant` — proposition — The cardinality of a covering fibre is locally constant and is constant on a connected base
6. `thm-path-lifting-for-covering-maps` — theorem — Existence and uniqueness of path lifts through a covering map
7. `thm-homotopy-lifting-for-covering-maps` — theorem — Existence and uniqueness of homotopy lifts through a covering map
8. `cor-lifted-path-endpoints-depend-only-on-path-homotopy` — corollary — The endpoint of a lifted path depends only on its endpoint-fixed homotopy class
9. `thm-covering-maps-inject-fundamental-groups` — theorem — A covering map induces an injective homomorphism on fundamental groups
10. `thm-uniqueness-of-lifts-from-a-connected-space` — theorem — Two lifts from a connected space that agree at one point agree everywhere
11. `thm-covering-space-lifting-criterion` — theorem — Lifting criterion for maps from path-connected locally path-connected spaces
12. `def-pullback-covering-space` — definition — The pullback of a covering space along a continuous map
13. `prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback` — proposition — Covering spaces are stable under restriction, finite products, and pullback
14. `prop-composition-of-coverings-with-finite-sheeted-outer-map-is-a-covering` — proposition — A composite of covering maps is a covering when the outer covering is finite-sheeted
15. `def-monodromy-action-on-a-covering-fibre` — definition — The monodromy right action on a covering fibre and its equivalent left-action convention
16. `prop-monodromy-acts-by-bijections-and-detects-components` — proposition — Monodromy acts by fibre bijections, and its orbits are the intersections of path components with the fibre
17. `def-deck-transformation-and-deck-group` — definition — Deck transformations and the deck-transformation group of a covering
18. `prop-deck-transformations-are-determined-by-one-point-and-act-freely` — proposition — On a connected covering space, a deck transformation is determined by one point and the deck action is free
19. `def-covering-space-action` — definition — Covering-space actions by disjoint translates of neighbourhoods
20. `thm-orbit-map-of-a-covering-space-action-is-a-covering` — theorem — The orbit map of a covering-space action is a covering, with the acting group equal to the deck group when the total space is path-connected
21. `prop-local-path-connectedness-lifts-and-descends-along-coverings` — proposition — Local path-connectedness lifts and descends along covering maps
22. `def-semilocally-simply-connected-space` — definition — Semilocally simply connected spaces with explicit basepoint convention
23. `def-universal-covering-space` — definition — Universal covering spaces
24. `thm-universal-covering-spaces-force-semilocal-simple-connectedness` — theorem — A space admitting a universal covering is semilocally simply connected
25. `def-path-class-model-for-a-universal-cover` — definition — The based path-class model and basic sets for a universal cover
26. `lem-path-class-projection-is-a-covering-map` — lemma — For a nonempty path-connected locally path-connected semilocally simply connected space, the path-class projection is a covering map
27. `thm-universal-cover-existence` — theorem — Every nonempty path-connected locally path-connected semilocally simply connected space has a universal cover
28. `thm-universal-cover-uniqueness-and-dominating-property` — theorem — For a path-connected locally path-connected base, universal covers are uniquely isomorphic over the base and lift to every connected covering
29. `cor-connected-cover-of-a-simply-connected-space-is-trivial` — corollary — A connected covering of a locally path-connected simply connected space is one-sheeted and trivial
30. `thm-sheets-equal-fundamental-group-index` — theorem — For a nonempty path-connected total space, a covering fibre is in bijection with the left cosets of the induced fundamental-group subgroup
31. `thm-compactness-is-invariant-under-finite-sheeted-coverings` — theorem — For a finite-sheeted covering, the total space is compact exactly when the base is compact
32. `thm-deck-group-of-a-universal-cover-is-the-fundamental-group` — theorem — For a path-connected locally path-connected semilocally simply connected base, the deck group of a universal cover is isomorphic to the fundamental group with the inverse-path convention

### `covering-spaces-and-lifting-examples` (8 items)

1. `ex-trivial-coverings-and-discrete-fibre-products` — example — Trivial coverings are products with a discrete fibre
2. `cex-a-surjective-local-homeomorphism-need-not-be-a-covering-map` — counterexample — A surjective local homeomorphism need not be a covering map
3. `cex-a-disconnected-base-allows-variable-sheet-number` — counterexample — A covering over a disconnected base can have different sheet numbers on different components
4. `ex-real-line-mod-integer-translations-is-a-covering` — example — The quotient $\mathbb R\to\mathbb R/\mathbb Z$ is a covering with integer translations as deck transformations
5. `ex-the-unit-loop-in-real-line-mod-integers-is-essential` — example — The projected unit interval is not nullhomotopic in $\mathbb R/\mathbb Z$
6. `ex-power-maps-on-real-line-mod-integers-are-finite-sheeted-coverings` — example — The maps $[x]\mapsto[mx]$ on $\mathbb R/\mathbb Z$ are $m$-sheeted coverings for $m\geq1$
7. `ex-pullback-over-an-evenly-covered-open-set-is-trivial` — example — Pulling a covering back to an evenly covered open set gives a trivial covering
8. `ex-the-hawaiian-earring-has-no-universal-cover` — example — The Hawaiian earring is locally path-connected but has no universal cover

## Final Beta report

- **Pages and counts:** four pages, 86 items total. The A/B counts are 40/6 for complete metrizability and Baire, and 32/8 for covering spaces and lifting. Fifteen items are definitions and 71 are proof-bearing; all 71 proof-bearing items have initial proof contracts with all eight boundary axes.
- **Harvest:** 116 headings from nine sources. Of these, 82 are included, 15 are absorbed inline, 5 are already published, and 14 are declined (12 deferred, 2 out of scope). The challenged declines are C3 Věta 75 on arbitrary products of Čech-complete spaces being Baire, C2 Proposition 11.3.5 because it is false, and V2's projective-space computation because no planned page licenses it. The remaining declines name `classification-of-covering-spaces`, `the-fundamental-group-of-the-circle`, or both.
- **Split:** none proposed. Both A pages are below the 60-item threshold after harvesting, and neither pair cites the other.
- **Published dependencies:** all 91 distinct external item dependencies listed in the dependency-audit section were opened on disk. Each is published and component-classified; none has an AI-generated Statement. The exact-clause confidence route is recorded for each as either source-checked or independently confirmed established mathematics. No published dependency was found false.
- **Conventions:** the material disagreements and choices are recorded above: meagre/meager spelling; complete metrizability is reused rather than re-minted; separable versus second-countable Polish conventions; zero-based sequences and the continued-fraction integer coordinate; some/every compactification formulations of Čech-completeness; surjective covering maps; maps versus isomorphisms over a base; right monodromy versus the house path-product convention; finite/$\infty$ subgroup index; and the exact local path-connectedness/semilocal simple-connectedness hypotheses. Unrestricted composition of coverings was rejected in favour of the sourced finite-outer-sheet theorem.
- **Step-4 changes required:** splice the three proposed prerequisites onto `complete-metrizability-and-baire`, the three proposed prerequisites onto `covering-spaces-and-lifting`, add the single recorded forward reference to the published complete-metrizability remark, and apply the T8/DG prose corrections. These are recorded findings, not edits made by this Beta.
- **Checks:** `coverage-checklist` reports 2 pages, 116 headings, 0 errors and 0 warnings. Manifest-only `content-policy` reports 86 items, 0 errors and 0 warnings. `boundary-audit` reports 568 rows, no template-reuse cluster and no contradicted disposition; its 71 unauthored-item detector skips are expected at scaffold time. `prosecheck --warnings` reports 0 errors and 27 non-positional count-language warnings. The authoritative plan validates green for its 266 populated pages, and an in-memory splice validates green for 270 populated pages with no cycles, forward references, B-page dependencies or unresolved ids. JSON/contract reconciliation finds 86 unique candidate ids, no published-id collision, and an exact 71/71 contract match.
- **Blockers and omissions:** none. Čech-completeness was closed rather than half-stated. Classification of covering spaces and $\pi_1(S^1)\cong\mathbb Z$ were intentionally not scaffolded because the named later pages own them. `tools/gates.mjs` was not run, exactly as the dispatch instructs; no permission prompt or escalation was requested. No file outside this batch's four writable artifacts was edited.

## Step-3 fix pass

Alpha's addendum identifies a routing defect in the dispatch: the report has no
literal `B3-*` finding ids. Its stable routing table assigns batch 3 the
original ids `F1`, `E1`, `E2`, `F2`, `E3`, and `F3`. Those ids are preserved
below; `G1`–`G3` remain orchestrator-owned and were not treated as Beta edits.

- **F1 — applied.** The titles of
  `thm-universal-cover-uniqueness-and-dominating-property` and
  `thm-deck-group-of-a-universal-cover-is-the-fundamental-group` now state the
  path-connectedness, local path-connectedness, and (for the deck-group
  theorem) semilocal simple-connectedness hypotheses used by their strategies.
  The ordered inventory and the title-bearing boundary rows in the proof
  contracts were synchronized.
- **E1 — applied.** The coverage artifact now has a structured
  `planned_overlaps` record for
  `regular-continued-fractions-and-diophantine-approximation` (order 57.013).
  It names all six colliding planned ids:
  `def-regular-continued-fraction`,
  `def-convergents-of-regular-continued-fraction`,
  `lem-continued-fraction-convergent-recurrence`,
  `lem-continued-fraction-determinant-identity`,
  `thm-continued-fraction-algorithm-for-real-numbers`, and
  `thm-rational-continued-fraction-termination`, together with the three local
  topology items that temporarily supply the minimum machinery needed for
  $\mathbb N^{\mathbb N}\cong\mathbb R\setminus\mathbb Q$. The number-theory
  page is earlier but unbuilt and therefore cannot be cited; its eventual
  duplication remains an explicit owner decision rather than a hidden
  collision.
- **E2 — applied.** The two complete-metrizability declines now carry
  `license_page: null`. The false Kunzinger proposition records the exact
  missing local-compactness hypothesis used by its proof; the MFF row and
  locator now use the source's Czech labels `Věta 75` and `Důkaz` and record
  that no planned page licenses the omitted productively-Baire proof.
- **F2 — applied.** All eleven deferred covering-space rows now carry a
  structured `license_page`, normally
  `classification-of-covering-spaces`; the mixed circle row additionally names
  `the-fundamental-group-of-the-circle`. The projective-space out-of-scope row
  also carries `license_page: null`, so every one of the batch's fourteen
  declines has the field rather than relying on prose alone.
- **E3 — applied.** The Statement provenance of
  `thm-hilbert-cube-universal-for-separable-metrizable-spaces` is now
  `ai-altered`, not `literature-derived`. Marker's Theorem 1.4 states only the
  Polish-space form; its proof supports the broader classical
  separable-metrizable form, but that is a material generalisation, and none of
  C2–C4 states it in the declared ranges. The per-item provenance rationale was
  updated; no dependency or theorem statement changed.
- **F3 — applied.** The Hawaiian-earring strategy now proves local
  path-connectedness: short arcs handle non-wedge points, while sufficiently
  small wedge-centred balls are unions of arcs through the wedge point and all
  sufficiently small whole circles. The proof contract now has a separate
  derivation for this title-bearing claim and synchronized boundary evidence.

### Step-3 gate record and closing report

- `node tools/coverage-checklist.mjs research/frontier-14-batch-3.coverage.json`
  — **pass:** 2 pages, 116 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-14-batch-3.pages.json`
  — **pass:** 86 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — **pass:** the final
  line reports an acyclic, consistent declared order with no item-level cycles,
  forward references, B-page dependencies, or unresolved ids among the 266
  populated pages. The batch's proposed `requires` edges are still an
  orchestrator splice decision, as Alpha's `G1` records.
- `node tools/boundary-audit.mjs research/frontier-14-batch-3.proof-contracts.json --json`
  — **pass:** 568 boundary rows, 0 template clusters, 0 contradicted candidates;
  the 71 item-text skips are the expected scaffold-time unauthored items.
- All three JSON artifacts parse. The batch still contains four pages and 86
  items: 40/6 on complete metrizability and Baire and 32/8 on covering spaces
  and lifting. The proof-contract scope remains exactly 71 proof-bearing items.
- Harvest yield is unchanged: 82 included, 15 inline, 5 already published, and
  14 declined. The declines expected to draw scrutiny remain MFF Věta 75, the
  false Kunzinger Proposition 11.3.5, and May's projective-space computation;
  all now have explicit null licensing destinations where no planned page
  exists.
- No split is proposed. No new dependency edge or published dependency was
  introduced by this pass, so the original 91-item on-disk dependency audit and
  its source-checked/established-mathematics confidence routes remain unchanged.
  No new published item needed to be opened for these fixes.
- The newly recorded convention decisions are that source labels must remain
  faithful (`Věta`/`Důkaz`), a proof-supported generalisation is
  `ai-altered` rather than `literature-derived`, and theorem titles print the
  hypotheses their proofs spend. There is no batch-artifact blocker. The only
  remaining pre-splice action affecting this batch is the orchestrator-owned
  approval of the `G1` prerequisite package; this Beta did not edit
  `plan-spec.json` or any normative/prose-plan file.

## Step-5 authoring

### Authored scope

- All 86 immutable ids in the ordered inventory above are authored: 40 items
  on `complete-metrizability-and-baire`, 6 on its examples page, 32 on
  `covering-spaces-and-lifting`, and 8 on its examples page. Fifteen are
  definitions and 71 are proof-bearing.
- Both A pages have their authored summary bodies. Both B pages have
  frontmatter only, with zero authored body bytes after the closing delimiter.
- Every item has `status: draft` and `origin: session`. No item has
  `verification.audited`.
- The splice receipt `research/frontier-14-splice-3.json` has no
  `summary_corrections` field. No replacement prose was therefore available to
  apply. The two proposed A-page summaries from this batch's notes were used
  unchanged; no summary was restored to either B page.

### Provenance rationale

- 15 definitions are `literature-derived / not-applicable`. Their bodies fix
  the source-backed definitions and library conventions; they do not carry
  independent proofs.
- 68 proof-bearing items are `literature-derived / ai-altered`. Their
  Statements follow the harvested literature, while the proofs were rebuilt to
  use only available library items, explicit inline derivations, and the
  library's choice and multiplication conventions. The component-level source
  and reason for every one remains in the provenance table above.
- Three items are `ai-altered / ai-altered`:
  `thm-hilbert-cube-universal-for-separable-metrizable-spaces` because the
  source's proof, but not its printed theorem, supports the broader
  separable-metrizable form;
  `fs-every-baire-space-is-completely-metrizable` because the pedagogical false
  universal claim and its explicit witness are adapted; and
  `cex-a-surjective-local-homeomorphism-need-not-be-a-covering-map` because the
  source construction was specialised to an explicit two-interval witness.
  None is used as a load-bearing dependency.

### Claim and obligation changes

- `lem-path-class-projection-is-a-covering-map` and
  `thm-universal-cover-existence` were narrowed to nonempty path-connected
  bases. The library defines the empty space as path-connected but defines a
  simply connected space to be nonempty, so the scaffold's empty case could
  not establish the printed conclusion. The item Statements and titles,
  manifest strategies, proof-contract maps and boundary rows, provenance
  rationales, ordered inventory, and coverage rows are synchronized.
- `lem-finite-refining-small-diameter-covers-of-compact-metric-spaces` now uses
  the arbitrary finite rooted refinement tree actually supplied by compactness,
  rather than asserting false binary branching. The Cantor-surjection theorem
  block-codes each finite child set by a finite binary word. The manifest,
  proofs, contracts, and provenance rationale move together.
- `thm-sheets-equal-fundamental-group-index` now identifies left cosets under
  the library's traversal-order path multiplication convention. Its title,
  Statement, proof, manifest, contract, inventory, provenance row, and coverage
  row are synchronized.
- `thm-simple-continued-fractions-parametrise-the-irrationals` now declares the
  genuinely used `def-simple-continued-fraction-coding` dependency in the item,
  manifest, and proof contract. No unused dependency was added.
- Empty-space branches were made explicit in the complete-metrizability and
  Čech-completeness arguments. Every planned-title placeholder citation was
  replaced by the authored Definition or Statement, and the two overbroad
  countability/Tychonoff restatements were narrowed to the propositions used.
- No harvested claim was dropped during Step 5.

### Gate record

The following are the verbatim terminal summaries from the final runs.

`node tools/tsx-run.mjs tools/precheck.mts items/<all batch-3 ids>`

```text
71 checked, 0 failing — all clean
```

The 15 definition files are in the supplied scope but do not enter the
proof-bearing precheck count. The one annotation repaired on the final pass
then reported:

```text
PASS items/thm-baire-sequence-space-is-polish.md (direct)

1 checked, 0 failing — all clean
```

`node tools/validate-plan.mjs research/plan-spec.json`

```text
OK — declared page order is acyclic and consistent; no item-level cycles, forward
references, B-page dependencies, or unresolved ids among the 282 page(s) with item lists.
NOTE: 889 planned page(s) carry no item list yet (marked * above). Their reading
order is guaranteed; their item dependencies are not yet asserted, so re-run this
after writing each page's items.
```

`node tools/content-policy.mjs research/frontier-14-batch-3.pages.json`

```text
content-policy: 86 scoped item(s), 0 error(s), 0 warning(s)
```

`node tools/proof-contract.mjs research/frontier-14-batch-3.proof-contracts.json --strict`

```text
proof-contract: 0 error(s), 0 warning(s), 71/71 item(s) checked
```

`node tools/citation-fidelity.mjs research/frontier-14-batch-3.proof-contracts.json`

```text
citation-fidelity: 268 citation(s) over 71 authored item(s)

QUOTE NOT FOUND — none; every recorded quote appears in its cited item.

WIDENING CANDIDATES — none found by the three detectors.

Every line above is a candidate for a human read, not a verdict.
```

`node tools/boundary-audit.mjs research/frontier-14-batch-3.proof-contracts.json`

```text
boundary-audit: 568 rows over 1 contract file(s); 340 marked not_applicable

TEMPLATE REUSE — none at or above 3 members.

CONTRADICTED DISPOSITIONS — none found by the three detectors.

Every line above is a candidate for a human read, not a verdict.
```

`node tools/coverage-checklist.mjs research/frontier-14-batch-3.coverage.json`

```text
coverage-checklist: 2 page(s), 116 harvested result(s), 0 error(s), 0 warning(s)
```

Scoped `prosecheck --warnings` over all 86 item files and four page files:

```text
90 file(s) checked. 0 error(s), 0 warning(s).

OK — no positional claim contradicts the spec.
```

`node tools/prosecheck.mjs`

```text
5215 file(s) checked. 0 error(s), 569 warning(s).
  library-scope-denial: 206
  count-in-prose: 189
  count-of-this-page: 174

(re-run with --warnings to list them; warnings are heuristic and have legitimate cases)

OK — no positional claim contradicts the spec.
```

`node tools/depcheck.mjs`

```text
8 ERROR(s):
  [dep-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: deps entry "thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object" resolves to nothing
  [dep-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: deps entry "thm-general-adjoint-functor-theorem-objectwise-form" resolves to nothing
  [dep-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: deps entry "thm-general-adjoint-functor-theorem-functor-form" resolves to nothing
  [dep-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: deps entry "thm-special-adjoint-functor-theorem-objectwise-form" resolves to nothing
  [dep-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: deps entry "thm-special-adjoint-functor-theorem-functor-form" resolves to nothing
  [link-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: wikilink [[thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object]] resolves to nothing
  [link-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: wikilink [[thm-general-adjoint-functor-theorem-objectwise-form]] resolves to nothing
  [link-unresolved] items/rem-choice-ledger-for-the-adjoint-functor-theorems.md: wikilink [[thm-special-adjoint-functor-theorem-objectwise-form]] resolves to nothing

FAIL
```

This latest repository-wide run exited 1 after a concurrent batch introduced
these 8 errors. A read-only id-scope comparison reports `batch-3 diagnostics
0`; the displayed adjoint-functor item is outside this batch, so it cannot be
repaired within the dispatch's write scope. An earlier run before that
concurrent change was green.

`node tools/fwdcheck.mjs`

```text
OK — every forward reference is declared, points strictly forward, is closed by a planned later page, stays off the spine unless orientation only, and introduces no cycle.
```

`node tools/extcheck.mjs`

```text
OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.
```

`node tools/rendercheck.mjs`

```text
OK — 5215 file(s): no wikilink inside math, no nested or unbalanced
delimiters, no multiline display block, every math span parses under the real
KaTeX, and every frontmatter block parses under the renderer's
YAML parser.
```

`citecheck` exited 0 with 29 heuristic warnings across 4,907 items. Its only
batch-3 warning is the word "transitivity" in
`prop-monodromy-acts-by-bijections-and-detects-components`; this is transitivity
of a group action, not an order axiom, so no dependency change is licensed.

### Blocker and omitted operation

The prevention-layer liveness gate is not green:

```text
gate-liveness [frontier-14-batch-3-step5] — a gate that checked nothing is not a gate that passed

  VACUOUS   finite-smoke         0 checks (exit 0)
            a contract may reference a check the registry does not define; those resolve to nothing
  live      proof-contract       71 items checked
  live      coverage-checklist   116 harvested results
  live      precheck             3876 items checked

1 gate(s) reported a result over an empty scope. Fix the scope, not the gate.
```

`tools/finite-smoke.mjs` has graph, poset, cyclic-group, arithmetic,
polynomial, recurrence, and matrix checks, but no applicable topology or
covering-space check. A proof contract may select a registered check but cannot
define one. Attaching an unrelated check would manufacture coverage, and
extending the shared registry is outside this batch's write scope. The second
blocker is the repository-wide `depcheck` failure from the concurrent
adjoint-functor batch recorded above; batch 3 contributes no diagnostic. These
are the only blockers. `tools/gates.mjs` was not run because the orchestrator
owns the gates of record. No permission prompt or escalation was requested.
