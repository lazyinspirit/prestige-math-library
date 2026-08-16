# Frontier 15 batch 2 — Beta-2 scaffold notes

## Outcome and proposed disposition

Approve the page manifests in `research/frontier-15-batch-2.pages.json`. The Sylow A/B pair is at orders 70/71 and the chain-condition/Wedderburn–Artin A/B pair is at orders 108/109. The A-page item counts are 40 and 43, respectively; neither page needs a split against the hard 60-item ceiling. The companion-page counts are 11 and 12.

The controlling Part II amendments were applied. Published nilpotency-series and finite-\(p\)-group material is cited rather than re-minted; the Sylow page retains the Sylow characterization of finite nilpotence and the new index-\(p\) existence theorem. The module page includes the re-homed isomorphism, endomorphism, maximal-submodule, and integrality blocks, uses the radical-free Crawley-Boevey route to Wedderburn–Artin, and fixes the left-module convention throughout.

## Findings for Alpha, ordered by severity

### 1. Approve the correction to the Fitting-subgroup definition

- File/section: `research/plan-algebra-track-expansion.md`, §II.3.b, “Nilpotence, the Sylow half only.”
- Exact old text: `the Fitting subgroup is the product of the normal Sylow subgroups and is the largest normal nilpotent subgroup`
- Exact new text: `the Fitting subgroup is \(F(G)=\prod_p O_p(G)\), the product of the \(p\)-cores, and is the unique largest normal nilpotent subgroup`
- Reason: the old statement is false. For example, \(F(S_4)=V_4=O_2(S_4)\), although a Sylow 2-subgroup of \(S_4\) has order 8 and is not normal. Carleton's dissertation gives the \(p\)-core formulation.
- If declined: the page would publish a false load-bearing definition and its \(S_4\) example would refute it.

### 2. Approve the correction to the Heisenberg ambient group

- File/section: `research/plan-algebra-track-expansion.md`, §II.3.b, “B.”
- Exact old text: `the Heisenberg group over $\mathbb{F}_p$ as the unique $p$-Sylow of $GL_3(\mathbb{F}_p)$`
- Exact new text: `the Heisenberg group over $\mathbb{F}_p$ as the unique Sylow $p$-subgroup of the invertible upper-triangular group over $\mathbb{F}_p$`
- Reason: the unitriangular Heisenberg group has order \(p^3\), whereas the \(p\)-part of \(|GL_3(\mathbb F_p)|\) is \(p^3\) but it is not normal in all of \(GL_3\). It is the kernel of the diagonal map on the invertible upper-triangular group and is therefore its unique Sylow \(p\)-subgroup.
- If declined: the claimed uniqueness inside \(GL_3(\mathbb F_p)\) is false.

### 3. Approve the full published order-30 and order-105 conclusions

- File/section: `research/plan-algebra-track-expansion.md`, §II.3.b, “Applications.”
- Exact old text: `no group of order $pq$, $p^2q$, $20$, $30$ or $105$ is simple`
- Exact new text: `every group of order $30$ has normal Sylow $3$- and $5$-subgroups; every group of order $105$ has normal Sylow $5$- and $7$-subgroups; in particular neither order admits a simple group`
- Reason: Conrad, Theorems 5.9 and 5.11, proves the stronger statements. The scaffold records the sign-kernel proof for order 30 and the order-35 coset-kernel proof for order 105 rather than discarding the sourced structure.
- If declined: the coverage harvest would mark stronger named theorems as included while the actual scaffold retained only weaker consequences.

### 4. Approve the dependency-safe proof of index-\(p\) subgroup existence

- File/section: `research/plan-algebra-track-expansion.md`, §II.3.b, “Nilpotence, the Sylow half only.”
- Exact old text: `Proof: $G/[G,G]G^p$ is a nontrivial elementary abelian $p$-group by the published nontriviality of the centre, and any index-$p$ subgroup of it pulls back;`
- Exact new text: `Proof: choose a maximal proper subgroup of the nontrivial finite $p$-group. Finite $p$-groups are nilpotent, so the maximal-subgroup theorem makes its index prime; Lagrange makes that prime divide a power of $p$, hence the index is $p$. The published normality theorem then confirms that every such subgroup is normal.`
- Reason: the old route silently requires commutator-power quotient machinery not available in the declared prerequisites. The replacement uses only items already in this pair or published at orders below 70.
- If declined: the future fundamental-theorem-of-algebra consumer would rest on undeclared group-quotient machinery.

### 5. Approve the rational-root dependency correction

- File/section: `research/plan-algebra-track-expansion.md`, §II.5.c, “Integrality.”
- Exact old text: `a rational algebraic integer is a rational integer, citing the published rational-root corollary;`
- Exact new text: `a rational algebraic integer is a rational integer, citing the published thm-rational-root-theorem;`
- Reason: the existing pure-power rational-root corollary does not imply the denominator-divides-leading-coefficient clause needed for an arbitrary monic polynomial. The full published rational-root theorem does.
- If declined: the local proof would cite a statement too weak to justify its central inference.

### 6. Approve retaining the right/left Noetherian counterexample with a verified source

- File/section: `research/plan-algebra-track-expansion.md`, §II.5.c, “FS.”
- Exact old text: `the harvest could not source it (PART 5) and explicitly warns against scaffolding it from memory. Disposition: state the fs- and verify the witness against a source at authoring, or drop it and keep only the module-level asymmetry.`
- Exact new text: `Bailey and Beachy, Example 1, gives Small's lower-triangular ring with diagonal entries $\mathbb Q,\mathbb Z$ as right Noetherian but not left Noetherian; conjugation by the coordinate-swap matrix gives the scaffold's upper-triangular ring with entries $\mathbb Z,\mathbb Q,\mathbb Q$. Retain the fs- item and prove the triangular-ring criterion inline.`
- Reason: the exact witness and handedness are now source-checked.
- If declined: the page loses the source-backed ring-level asymmetry that enforces the standing side convention.

### 7. Approve narrowing the small-order table to Sylow data

- File/section: `research/plan-algebra-track-expansion.md`, §II.3.b, “B.”
- Exact old text: `the classification of groups of order $\le 15$ tabulated, each order justified by the theorem that settles it;`
- Exact new text: `Sylow data for groups of each positive order at most $15$ tabulated: Sylow subgroup orders, allowed counts, and forced normal Sylow subgroups, without claiming an isomorphism classification at orders $8$ or $12$;`
- Reason: a full classification at orders 8 and 12 requires group-classification results absent from the page's prerequisites. The revised item is rich, exact, and fully supported by Sylow I–III and the published order-\(pq\) theorem.
- If declined: the B page would overclaim a classification that its declared dependencies cannot prove.

### 8. Approve retaining the Prüfer-group example

- File/section: `research/plan-algebra-track-expansion.md`, §II.5.c, “FS.”
- Exact old text: `Part I's doubt about whether the Prüfer group $\mathbb{Z}(p^\infty)$ is constructible in scope is resolved: it is`
- Exact new text: unchanged, with the implementation pinned to `ex-prufer-p-group-is-artinian-not-noetherian` and dependencies `thm-rat-field`, `lem-int-embeds-rat`, and `def-quotient-module`.
- Reason: the subgroup of \(\mathbb Q/\mathbb Z\) represented by fractions with \(p\)-power denominator can be built natively. Its proper subgroups are the finite cyclic groups of orders \(p^n\), giving DCC, while those finite subgroups form a strict ascending chain.
- If declined: the module-level Artinian/Noetherian asymmetry would lose its canonical sourced witness.

## Proposed A-page summaries for the prose scaffold

### `sylow-theorems-and-nilpotent-groups`

This page develops Sylow I–III from the published action and finite-\(p\)-group toolkit. It separates the normalizer-index formula from the congruence and divisibility clauses, proves the normalizer and Frattini arguments, and includes the subgroup-of-index-\(p\) existence theorem needed by the fundamental-theorem-of-algebra route. The Fitting and Frattini definitions use the standard \(p\)-core and maximal-subgroup conventions.

The nilpotence half identifies finite nilpotent groups through their Sylow subgroups, internal direct-product structure, and maximal subgroups. It then applies Sylow counting and the published order-\(pq\) classification to groups of orders \(p^2q\), 30, 45, and 105. The examples compute Sylow, core, Fitting, and Frattini data without re-proving the nilpotency-series or class-equation results published on the declared prerequisite pages.

### `chain-conditions-and-semisimple-modules`

This page defines Noetherian modules by finite generation of every submodule and isolates dependent choice in the equivalence with ACC and the maximal condition. It supplies the missing module isomorphism and correspondence theorems, develops finite length and Jordan–Hölder, and constructs endomorphism rings with the left-regular identity \(\operatorname{End}_R({}_R R)\cong R^{\mathrm{op}}\).

Semisimplicity is developed from simple summands through the choice-free finite-length form, Schur's lemma, and the radical-free Wedderburn–Artin classification. The left/right convention is explicit and yields the agreement corollary only after the matrix-product theorem. A final integrality block proves the determinant-trick finite-module equivalences, closure under ring operations, and the characterization of rational algebraic integers.

## Per-pair richness and decomposition report

### Sylow pair

Both the long-proof decomposition pass and the corollary pass were performed on the A and B pages. Sylow I is preceded by `lem-wielandt-sylow-binomial-valuation`. The nilpotence landmark is decomposed through `lem-distinct-normal-sylow-subgroups-commute`, `lem-finite-nilpotence-via-normal-sylow-subgroups`, `thm-maximal-subgroups-of-finite-nilpotent-groups`, and `thm-nilpotence-is-detected-modulo-the-frattini-subgroup`. The Fitting development is decomposed through `lem-products-of-normal-p-subgroups`; the Frattini quotient route uses `lem-frattini-subgroup-nongenerator-characterization`, `thm-frattini-subgroup-is-nilpotent`, and `thm-fitting-subgroup-of-the-frattini-quotient`. The order-30 and order-105 arguments expose their kernel constructions inside their own focused proofs because those constructions are not reused elsewhere.

Useful corollaries added are `cor-sylow-subgroup-normal-iff-unique`, `cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal`, `cor-frattini-subgroup-is-contained-in-the-fitting-subgroup`, `cor-groups-of-order-p-squared-q-are-not-simple`, and `cor-groups-of-order-pq-are-not-simple`. The B-page pass found no reusable proof decomposition or non-cosmetic corollary: its items are independent computations and refutations. At 40 A-items, no split is proposed.

### Chain-condition/Wedderburn–Artin pair

Both passes were performed on the A and B pages. The chain-condition block separates the Noetherian and Artinian equivalences, short exact sequences, finite sums, finite generation over a Noetherian ring, composition series, Jordan–Hölder, and length additivity. The Wedderburn–Artin proof is decomposed through the endomorphism-ring proposition, the left-regular opposite-ring theorem, Hom-matrices for finite direct sums, finite generation of semisimple modules, Schur's lemma, the semisimple-ring equivalences, and the matrix-ring converse. General semisimplicity and the finite-length choice-free characterization are separate items. The determinant-trick result is isolated from its closure and rational-integer corollaries.

Useful corollaries added are `cor-finite-direct-sums-preserve-chain-conditions`, `cor-noetherian-modules-are-hopfian`, `cor-length-is-additive-in-short-exact-sequences`, `cor-left-and-right-semisimplicity-agree`, `cor-semisimple-rings-are-noetherian-and-artinian`, `cor-integral-elements-form-a-subring`, and `cor-rational-algebraic-integers-are-integers`. The B-page pass found no useful corollary that was not a restatement of an A-page theorem. At 43 A-items, no split is proposed.

## Landmark plan

Mark as landmarks at authoring: `thm-sylow-first-theorem`, `thm-sylow-second-theorem`, `thm-sylow-third-theorem`, `thm-index-p-subgroup-existence-in-finite-p-groups`, `thm-sylow-characterizations-of-finite-nilpotence`, `thm-equivalent-characterizations-of-noetherian-modules`, `thm-composition-series-iff-noetherian-and-artinian`, `thm-jordan-holder-theorem-for-modules`, `thm-equivalent-characterizations-of-semisimple-modules`, `thm-schurs-lemma-for-modules`, `thm-equivalent-characterizations-of-semisimple-rings`, `thm-wedderburn-artin-theorem`, and `thm-integrality-and-finite-module-equivalences`.

## Web source ledger

The exhaustive per-heading dispositions are in `research/frontier-15-batch-2.coverage.json`; this is the concise authoring ledger.

- Keith Conrad, *The Sylow Theorems*, §§1–2, pp. 1–6: Sylow definitions and I/II/III/III*, containment form, conjugacy, the normalizer-index formula, and the normalizer-of-normalizer theorem. URL for every supported Step-5 `sources.references` entry: https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf
- Amin Idelhaj, *The Sylow Theorems and Their Applications*, §3, pp. 4–6: an independent treatment of all three Sylow theorems, the binomial subset-count proof, fixed-point congruence, uniqueness/normality, and containment. URL: https://math.uchicago.edu/~may/REU2016/REUPapers/Idelhaj.pdf
- David A. Craven, *Finite Group Theory*, Lemma 1.25, Theorem 2.11 through Proposition 2.14, and Exercise 1.6: largest normal nilpotent subgroup, \(\Phi(G)\), its nongenerator characterization, Frattini lifting, Frattini nilpotence, Frattini argument, and the Fitting quotient identity. URL: https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf
- Rachel K. Carleton, *The Commuting and Cyclic Graphs of Solvable A-Groups*, Chapter 2 §2.1, p. 6: \(O_p(G)\) as the largest normal \(p\)-subgroup and \(F(G)\) as the direct product of the \(p\)-cores. URL: https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=kent1713384046910533&disposition=inline
- Keith Conrad, *Consequences of the Sylow Theorems*, §§1–5, pp. 1–12: concrete Sylow counts, normal Sylow products, finite nilpotence by Sylow factors, groups of orders 12, 30, 45, 105, and \(p^2q\), plus the order-30 classification. URL: https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf
- Keith Conrad, *Noetherian Modules*, §§1–2, pp. 1–5: the choice-free finite-generation definition, ACC/maximal equivalences, submodules, quotients, short exact sequences, finite direct sums, and Hopficity. URL: https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf
- William Crawley-Boevey, *Noncommutative Algebra*, Chapter 1 §§1.1–1.9, pp. 1–8: module isomorphism theorems, finite generation, maximal submodules, endomorphism rings, \(\operatorname{End}_R({}_R R)\cong R^{\mathrm{op}}\), Hom-matrices, semisimple equivalences, Schur's lemma, and the radical-free Wedderburn–Artin route. URL: https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf
- MIT 18.706, *Lecture 2: Semisimple Modules, Socles, Artinian Rings, Wedderburn's Theorem*, §§2.1–2.4, pp. 1–3: semisimple subquotients, socle, isotypic components, simple modules, and Wedderburn's theorem with a handedness warning. URL: https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf
- Arvind Nair, *Algebra I*, Lecture 5, pp. 40–41 through Corollary 8: composition series, left chain conventions, the integer and Prüfer examples, chain conditions in short exact sequences, finite length, Jordan–Hölder, and length additivity. URL: https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf
- Eloísa Grifo, *Commutative Algebra I*, §1.4, pp. 19–22: integrality, module-finite algebras, the determinant trick, closure of integral elements, and \(\mathbb Z\) integrally closed in \(\mathbb Q\). URL: https://eloisagrifo.github.io/Teaching/ca1/CA1notes.pdf
- Abigail C. Bailey and John A. Beachy, *On Noncommutative Piecewise Noetherian Rings*, §1, Example 1, p. 3: Small's lower-triangular right-Noetherian/not-left-Noetherian ring. Conjugating by the coordinate-swap matrix gives the scaffold's upper-triangular presentation without reversing handedness. URL: https://static1.squarespace.com/static/5bfc97c08f51300ae14c44c1/t/61e64aea66b8e84a4ffbaa3d/1642482411402/17pNoeth.pdf

Convention disagreements: Conrad writes “\(p\)-Sylow subgroup”; the library uses “Sylow \(p\)-subgroup.” Conrad splits Sylow III* from Sylow III, and this scaffold follows that proof-level split. Conrad's Noetherian note assumes commutative rings for its examples, while this page fixes arbitrary unital rings and left modules. Conrad defines Noetherian by finite generation and then proves ACC; MIT uses the chain-condition convention. Crawley-Boevey's left-regular calculation produces the opposite ring, so the scaffold takes the opposite exactly once in Wedderburn–Artin. Some semisimple sources restrict to finite-dimensional algebras; the Crawley-Boevey route supports the arbitrary unital-ring statement used here. No source's Jacobson-radical formulation is imported.

## Dependency closure, provenance of dependencies, and forward references

Every proposed published dependency was opened from `items/`, checked for `status: published`, and matched to its exact Definition, Statement, or Example. A machine audit found every dependency either on the same page in manifest order or published on a page of strictly smaller order. There are no forward references, no draft-page targets, no unresolved targets, no AI-generated-statement targets, and no external-fallback `rem-` items. The four `requires` targets are published. No same-run cross-batch dependency exists, and batch 1 does not need an item from this batch for its present scaffold.

No dependency is legacy-unclassified, so no legacy confidence-route exception is needed. AI-altered published statements were not auto-trusted: their exact disk text was read and their elementary claims and conventions were checked. The source-check ledger for those targets appears below; foundational definitions with encyclopedia references were additionally checked directly from their disk statement and against the scholarly sources used by the consuming proof.

| Published AI-altered dependency | Confidence route | Source URL |
|---|---|---|
| `cor-order-of-a-quotient-group` | source-checked, finite cardinality clause checked | https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%253A_Theory_and_Applications_%28Judson%29/10%253A_Normal_Subgroups_and_Factor_Groups/10.01%253A_Factor_Groups_and_Normal_Subgroups |
| `cor-prime-order-group-is-cyclic` | source-checked | https://judsonbooks.org/abstract-algebra-theory-and-applications/ |
| `def-factorial-and-falling-factorial` | source-checked, exact disk convention checked at 0 and 1 | https://en.wikipedia.org/wiki/Factorial |
| `def-generated-subgroup` | source-checked, exact intersection convention checked | https://en.wikipedia.org/wiki/Generating_set_of_a_group |
| `def-index` | source-checked | https://judsonbooks.org/abstract-algebra-theory-and-applications/ |
| `def-p-adic-valuation` | source-checked, zero excluded before every use | https://en.wikipedia.org/wiki/P-adic_valuation |
| `def-polynomial-degree-leading-coefficient-and-monic` | source-checked | https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials |
| `def-polynomial-evaluation-and-root` | source-checked | https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf |
| `def-ring` | source-checked, unital convention checked from disk | https://en.wikipedia.org/wiki/Ring_(mathematics) |
| `def-ring-matrix-product-identity-and-transpose` | source-checked | https://www.math.uwaterloo.ca/~snew/MATH245/math146notes.pdf |
| `def-subgroup` | source-checked | https://en.wikipedia.org/wiki/Subgroup |
| `lem-int-embeds-rat` | source-checked | https://terrytao.wordpress.com/books/analysis-i/ |
| `lem-p-adic-valuation-additive` | source-checked, nonzero domain restriction checked | https://en.wikipedia.org/wiki/P-adic_valuation |
| `lem-subgroups-of-z-are-cyclic` | source-checked | https://en.wikipedia.org/wiki/Cyclic_group |
| `thm-adjugate-identity-over-a-commutative-ring` | source-checked, commutative-ring domain checked | https://www.ma.imperial.ac.uk/~apal4/commalgnotes.pdf |
| `thm-binomial-closed-formula` | source-checked, zero-index convention checked | https://en.wikipedia.org/wiki/Binomial_coefficient |
| `thm-integers-modulo-n-basic-algebra` | source-checked | https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf |
| `thm-lagrange` | source-checked | https://www.homepages.ucl.ac.uk/~ucahmto/0007/_book/4-6-cosets-and-lagranges-theorem.html |
| `thm-of-square-roots` | source-checked | https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis |
| `thm-sign-is-a-homomorphism` | source-checked, sign convention and multiplicativity checked | https://www.jmilne.org/math/CourseNotes/GT.pdf |
| `thm-strong-induction` | source-checked, induction begins at 0 | https://en.wikipedia.org/wiki/Mathematical_induction |
| `thm-totient-of-a-prime-power` | source-checked, exponent begins at 1 | https://en.wikipedia.org/wiki/Euler%27s_totient_function |

The exact external-dependency manifest contains 85 published item ids; adding `lem-int-embeds-rat` to the Prüfer construction did not increase that unique total because the integrality block already used it. The dependency check is reproducible from `research/frontier-15-batch-2.pages.json`; the list is deliberately not paraphrased here because the manifest is the source of truth.

## Proof-obligation and boundary pass

`research/frontier-15-batch-2.proof-contracts.json` scopes every non-definition item. Each strategy sentence is assigned a planned numbered step and lists its declared item inputs, prior-step inputs, and elementary operation. Every entry disposes of `empty`, `zero`, `one`, `degenerate`, `endpoints`, `nonempty-choice`, `iff-forward`, and `iff-reverse`. Citation arrays are empty at scaffolding because no Step-5 Facts blocks yet exist; the author must add an exact source-section clause and all uses for every direct `[F#]`, `[A#]`, or `[L#]` citation as the facts are written. The current finite-smoke registry has no faithful bounded model for the Sylow-count, module-chain, semisimplicity, or integrality claims, so no unrelated check was selected.

Choice obligations: dependent choice appears only in the difficult directions of the Noetherian/Artinian chain-condition equivalences; Zorn appears in the general semisimple-equivalence theorem and maximal-submodule existence; the finite-length semisimple theorem is choice-free. Finite Sylow selections are justified by explicit nonempty finite sets. All biconditionals have separately planned forward and reverse directions. The zero ring and empty Wedderburn product convention must be resolved explicitly at authoring; the preferred convention is to allow the zero ring as the empty product if the repository's unital-ring definition permits it.

## Generated-statement truth-risk ledger

Only the following leaf examples are planned with `provenance.statement: ai-generated`; none is a dependency target.

- `ex-fitting-and-frattini-subgroups-of-s-three`: expected `generation.role: example`; truth risk is confusing the Fitting subgroup with a Sylow subgroup or missing a maximal subgroup. Counterexample search obligation: enumerate all normal \(p\)-subgroups and all maximal subgroups of \(S_3\), verifying \(F(S_3)=A_3\) and \(\Phi(S_3)=1\).
- `ex-p-cores-fitting-and-frattini-subgroups-of-s-four`: expected `generation.role: example`; truth risk is the exact value of \(O_2(S_4)\) or the intersection of maximal subgroups. Counterexample search obligation: enumerate normal subgroups and representatives of every maximal-subgroup conjugacy class, verifying \(O_2(S_4)=V_4\), every odd \(p\)-core is trivial, \(F(S_4)=V_4\), and \(\Phi(S_4)=1\).
- `ex-infinite-binary-product-ring-is-not-noetherian`: expected `generation.role: example`; truth risk is accidentally using the direct sum instead of the direct product or failing to prove strictness of the ideal chain. Counterexample search obligation: model the coordinate idempotents in \((\mathbb Z/2)^{\mathbb N}\), verify that the ideals generated by the first \(n\) coordinate idempotents form a strict ascending chain beginning at \(n=0\), and verify closure under arbitrary product-ring multiplication.

All other planned statement components are literature-derived or AI-altered from literature-backed examples. No AI-generated statement may be promoted into a dependency.

## New-id and reuse audit

All ids in the per-page lists below are proposed new ids. The exact collision check was:

```sh
node -e "const p=require('./research/frontier-15-batch-2.pages.json'); for(const x of p.flatMap(y=>y.items)) console.log(x.id)" | rg -F -f - items research/plan-spec.json
```

It returned no matches. The published order-\(pq\) items `lem-groups-of-order-pq-have-a-normal-q-subgroup` and `thm-classification-of-groups-of-order-pq`, the fixed-point/Cauchy/class-equation toolkit, and all published nilpotency-series items are reused and do not appear as new ids.

## Verification record

The scoped machine checks run at Step 2 produced the following results:

- JSON parsing succeeded for the page, coverage, and proof-contract artifacts.
- `coverage-checklist.mjs`: completed over both A-page harvests with 151 harvested results, 0 errors, 0 warnings.
- `content-policy.mjs --manifest-only`: 106 scoped items, 0 errors, 0 warnings.
- `prosecheck.mjs --warnings`: 4 files checked, 0 errors, 0 warnings.
- `boundary-audit.mjs --fail-on-template --fail-on-contradicted`: 704 rows, no template reuse and no contradicted disposition; the item-on-disk detectors correctly report that the 88 planned proof-bearing items do not yet exist.
- `finite-smoke.mjs`: 0 errors and no selected checks, as recorded in the proof-obligation section.
- The local dependency/order/provenance audit found 340 declared edges, 85 unique external published targets, 22 AI-altered published targets, no legacy-unclassified targets, and 0 issues. Every one of the 106 proposed ids is unique and absent from `items/` and `research/plan-spec.json`.

The latest `url-sweep.mjs` attempt reached its output stage but could not write `/dev/stdout` under this sandbox (`EPERM`), so no pass is claimed for that utility. Every recorded coverage URL was nevertheless opened and read during the source harvest. The authoritative plan and dependency gates remain pending the Step-4 splice, as stated below.

## Confidence and unverified work

Confidence is high on the mathematical statements, source coverage, plan-order closure, and left/right conventions. The coverage file passed its structural gate, and the dependency audit found no invalid target. The order-30 and order-105 proofs were checked line by line against Conrad; the Fitting/Frattini block was rechecked against Craven and Carleton; the Wedderburn side reversal was checked against Crawley-Boevey and MIT; and the integrality block was checked against Grifo.

The authoritative `validate-plan.mjs research/plan-spec.json` and `depsource.mjs` gates were not run against this batch because step 4 has not spliced these manifests into `research/plan-spec.json`; no pass is claimed for either. Exact Step-5 citation quotes and citation-use maps cannot be verified until the item files and numbered Facts blocks exist. No independent formal proof assistant check was performed. The 151 harvested source headings were read and dispositioned, but Alpha must still audit harvest faithfulness against the sources at step 6.

## Per-page item lists

### `sylow-theorems-and-nilpotent-groups` — `item_count=40`

1. `def-sylow-p-subgroup` — definition — Sylow $p$-subgroups of a finite group
2. `def-number-of-sylow-p-subgroups` — definition — The number $n_p(G)$ of Sylow $p$-subgroups
3. `def-maximal-subgroup-of-a-group` — definition — Maximal proper subgroups
4. `def-p-complement` — definition — $p$-complements in finite groups
5. `def-p-core-of-a-finite-group` — definition — The $p$-core $O_p(G)$ as the largest normal $p$-subgroup
6. `def-fitting-subgroup-of-a-finite-group` — definition — The Fitting subgroup $F(G)=\prod_p O_p(G)$ of a finite group
7. `def-frattini-subgroup-of-a-finite-group` — definition — The Frattini subgroup $\Phi(G)$ as the intersection of the maximal subgroups of a finite group
8. `lem-wielandt-sylow-binomial-valuation` — lemma — If $|G|=p^a m$ with $p\nmid m$, then $v_p\binom{p^a m}{p^a}=0$
9. `thm-sylow-first-theorem` — theorem — Sylow I: every finite group has a Sylow $p$-subgroup
10. `thm-sylow-second-theorem` — theorem — Sylow II in containment form: every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup
11. `thm-sylow-number-as-normalizer-index` — theorem — Sylow III*: $n_p(G)=[G:N_G(P)]$
12. `thm-sylow-third-theorem` — theorem — Sylow III: $n_p\equiv1\pmod p$ and $n_p\mid m$ when $|G|=p^a m$ with $p\nmid m$
13. `cor-sylow-subgroup-normal-iff-unique` — corollary — A Sylow $p$-subgroup is normal if and only if it is unique
14. `thm-normalizer-of-a-sylow-normalizer` — theorem — A subgroup containing the normalizer of a Sylow subgroup is self-normalizing
15. `thm-frattini-argument` — theorem — Frattini argument: if $N\trianglelefteq G$ and $P$ is Sylow in $N$, then $G=N N_G(P)$
16. `cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal` — corollary — A normal Sylow subgroup of a normal subgroup is normal in the whole group
17. `thm-normalizer-condition-for-finite-nilpotent-groups` — theorem — Every proper subgroup of a finite nilpotent group is properly contained in its normalizer
18. `thm-maximal-subgroups-of-finite-nilpotent-groups` — theorem — Maximal subgroups of finite nilpotent groups are normal of prime index
19. `thm-index-p-subgroup-existence-in-finite-p-groups` — theorem — Every nontrivial finite $p$-group has a normal subgroup of index $p$
20. `lem-distinct-normal-sylow-subgroups-commute` — lemma — Distinct normal Sylow subgroups centralize one another
21. `lem-finite-nilpotence-via-normal-sylow-subgroups` — lemma — A finite group is nilpotent if and only if all Sylow subgroups are normal, if and only if it is their internal direct product
22. `lem-products-of-normal-p-subgroups` — lemma — A finite product of normal $p$-subgroups is a normal $p$-subgroup
23. `thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup` — theorem — The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group
24. `lem-frattini-subgroup-nongenerator-characterization` — lemma — The Frattini subgroup consists exactly of the nongenerators of a finite group
25. `thm-nilpotence-is-detected-modulo-the-frattini-subgroup` — theorem — Nilpotence lifts over the Frattini subgroup of a finite group
26. `thm-frattini-subgroup-is-nilpotent` — theorem — The Frattini subgroup of a finite group is nilpotent
27. `cor-frattini-subgroup-is-contained-in-the-fitting-subgroup` — corollary — The Frattini subgroup is contained in the Fitting subgroup
28. `thm-fitting-subgroup-of-the-frattini-quotient` — theorem — $F(G/\Phi(G))=F(G)/\Phi(G)$ for every finite group
29. `thm-sylow-characterizations-of-finite-nilpotence` — theorem — Sylow and maximal-subgroup characterizations of finite nilpotence
30. `thm-groups-of-order-p-squared-q-have-a-normal-sylow-subgroup` — theorem — Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup
31. `cor-groups-of-order-p-squared-q-are-not-simple` — corollary — No group of order $p^2q$ for distinct primes is simple
32. `thm-groups-of-order-thirty-have-a-normal-sylow-subgroup` — theorem — Every group of order $30$ has normal Sylow $3$- and $5$-subgroups and is not simple
33. `thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup` — theorem — Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple
34. `thm-groups-of-order-forty-five-are-abelian` — theorem — Every group of order $45$ is abelian
35. `cor-groups-of-order-pq-are-not-simple` — corollary — No group of order $pq$ for distinct primes is simple
36. `fs-converse-of-lagrange-for-finite-groups` — false-statement — False statement: every divisor of the order of a finite group occurs as a subgroup order
37. `fs-subgroups-of-equal-p-power-order-are-conjugate` — false-statement — False statement: all subgroups of the same $p$-power order are conjugate
38. `fs-unique-sylow-subgroup-forces-a-direct-product` — false-statement — False statement: one unique Sylow subgroup forces the whole group to be a direct product
39. `fs-groups-of-order-forty-two-have-a-normal-sylow-two-subgroup` — false-statement — False statement: every group of order $42$ has a normal Sylow $2$-subgroup
40. `fs-finite-nilpotent-and-solvable-groups-coincide` — false-statement — False statement: finite nilpotent groups and finite solvable groups are the same

### `sylow-theorems-and-nilpotent-groups-examples` — `item_count=11`

1. `ex-sylow-subgroups-of-s-four` — example — The Sylow subgroups of $S_4$
2. `ex-sylow-subgroups-of-a-five` — example — The Sylow subgroups of $A_5$
3. `ex-sylow-subgroups-of-affine-group-modulo-five` — example — Sylow subgroups of $\operatorname{Aff}(\mathbb Z/5)$: $n_2=5$ and $n_5=1$
4. `ex-unique-sylow-subgroup-of-affine-group-modulo-p-squared` — example — The unique Sylow $p$-subgroup of $\operatorname{Aff}(\mathbb Z/p^2)$
5. `ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group` — example — The Heisenberg group is the unique Sylow $p$-subgroup of the invertible upper-triangular group over $\mathbb F_p$
6. `ex-sylow-subgroups-of-gl-two-over-a-finite-prime-field` — example — Sylow subgroups of $GL_2(\mathbb F_p)$
7. `ex-sylow-data-for-groups-of-order-at-most-fifteen` — example — Sylow data for finite groups of order at most $15$
8. `ex-groups-of-order-thirty` — example — The four isomorphism types of groups of order $30$
9. `ex-a-four-is-not-nilpotent` — example — $A_4$ is not nilpotent
10. `ex-fitting-and-frattini-subgroups-of-s-three` — example — The Fitting and Frattini subgroups of $S_3$
11. `ex-p-cores-fitting-and-frattini-subgroups-of-s-four` — example — The $p$-cores, Fitting subgroup, and Frattini subgroup of $S_4$

### `chain-conditions-and-semisimple-modules` — `item_count=43`

1. `def-noetherian-module` — definition — Noetherian modules: every submodule is finitely generated
2. `def-artinian-module` — definition — Artinian modules by the descending chain condition
3. `def-noetherian-ring` — definition — Left and right Noetherian rings
4. `def-artinian-ring` — definition — Left and right Artinian rings
5. `def-composition-series-and-length-of-a-module` — definition — Composition series and length of a module
6. `def-opposite-ring` — definition — The opposite ring $R^{\mathrm{op}}$
7. `def-endomorphism-ring-of-a-module` — definition — The endomorphism ring $\operatorname{End}_R(M)$ under addition and composition
8. `def-semisimple-module` — definition — Semisimple modules as direct sums of simple modules
9. `def-semisimple-ring` — definition — A semisimple ring as a ring whose left regular module is semisimple
10. `def-socle-of-a-module` — definition — The socle as the sum of all simple submodules
11. `def-integral-element-and-algebraic-integer` — definition — Integral elements over a commutative ring and algebraic integers
12. `thm-second-isomorphism-theorem-modules` — theorem — Second isomorphism theorem for modules
13. `thm-third-isomorphism-theorem-modules` — theorem — Third isomorphism theorem for modules
14. `thm-correspondence-theorem-modules` — theorem — Correspondence theorem for submodules of a quotient module
15. `thm-equivalent-characterizations-of-noetherian-modules` — theorem — Finite generation, ACC, and maximal-condition characterizations of Noetherian modules
16. `thm-equivalent-characterizations-of-artinian-modules` — theorem — DCC and minimal-condition characterizations of Artinian modules
17. `thm-chain-conditions-in-short-exact-sequences` — theorem — Noetherian and Artinian conditions are each exact in short exact sequences
18. `cor-finite-direct-sums-preserve-chain-conditions` — corollary — Finite direct sums preserve and reflect Noetherian and Artinian conditions
19. `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian` — theorem — Finitely generated modules over a left Noetherian ring are Noetherian
20. `cor-noetherian-modules-are-hopfian` — corollary — Every surjective endomorphism of a Noetherian module is injective
21. `thm-composition-series-iff-noetherian-and-artinian` — theorem — A module has a composition series if and only if it is Noetherian and Artinian
22. `thm-jordan-holder-theorem-for-modules` — theorem — Jordan–Hölder theorem for modules
23. `cor-length-is-additive-in-short-exact-sequences` — corollary — Module length is additive in short exact sequences
24. `prop-endomorphisms-form-a-ring` — proposition — Module endomorphisms form a ring under pointwise addition and composition
25. `thm-endomorphism-ring-of-the-left-regular-module-is-opposite` — theorem — $\operatorname{End}_R({}_R R)\cong R^{\mathrm{op}}$
26. `thm-endomorphism-ring-of-a-finite-direct-sum-as-hom-matrices` — theorem — Endomorphisms of a finite direct sum are matrices of Hom-groups
27. `thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules` — theorem — Every finitely generated nonzero module has a maximal proper submodule
28. `thm-equivalent-characterizations-of-semisimple-modules` — theorem — Equivalent characterizations of semisimple modules
29. `thm-finite-length-semisimple-module-characterizations` — theorem — Choice-free semisimple characterizations for finite-length modules
30. `thm-submodules-and-quotients-of-semisimple-modules` — theorem — Submodules and quotients of semisimple modules are semisimple
31. `thm-socle-is-the-largest-semisimple-submodule` — theorem — The socle is the largest semisimple submodule
32. `thm-finitely-generated-semisimple-modules-are-finite-direct-sums-of-simple-modules` — theorem — A finitely generated semisimple module is a finite direct sum of simple modules
33. `thm-schurs-lemma-for-modules` — theorem — Schur's lemma for simple modules
34. `thm-equivalent-characterizations-of-semisimple-rings` — theorem — Equivalent module-theoretic characterizations of semisimple rings
35. `thm-matrix-rings-over-division-rings-are-semisimple` — theorem — Matrix rings over division rings are semisimple
36. `thm-wedderburn-artin-theorem` — theorem — Wedderburn–Artin theorem for semisimple rings
37. `thm-simple-modules-over-semisimple-rings` — theorem — Simple modules over a product of matrix rings over division rings
38. `thm-uniqueness-of-wedderburn-artin-data` — theorem — Uniqueness of the Wedderburn–Artin factors
39. `cor-left-and-right-semisimplicity-agree` — corollary — Left and right semisimplicity of a ring agree
40. `cor-semisimple-rings-are-noetherian-and-artinian` — corollary — Semisimple rings are left and right Noetherian and Artinian
41. `thm-integrality-and-finite-module-equivalences` — theorem — Integrality and finite-module characterizations for one element
42. `cor-integral-elements-form-a-subring` — corollary — Integral elements form a subring
43. `cor-rational-algebraic-integers-are-integers` — corollary — The rational algebraic integers are exactly the integers

### `chain-conditions-and-semisimple-modules-examples` — `item_count=12`

1. `ex-integers-as-a-noetherian-non-artinian-module` — example — $\mathbb Z$ is Noetherian but not Artinian as a module over itself
2. `ex-prufer-p-group-is-artinian-not-noetherian` — example — The Prüfer $p$-group is Artinian but not Noetherian
3. `ex-infinite-binary-product-ring-is-not-noetherian` — example — The ring $(\mathbb Z/2)^{\mathbb N}$ is not Noetherian
4. `ex-matrix-ring-decomposition-into-minimal-left-ideals` — example — $M_n(F)$ as a direct sum of minimal left ideals
5. `ex-product-of-two-fields-is-semisimple` — example — A product of two fields is semisimple with two simple-module types
6. `ex-length-of-z-modulo-p-to-the-k` — example — The $\mathbb Z$-module $\mathbb Z/p^k$ has length $k$
7. `ex-quadratic-algebraic-integers-and-one-half` — example — $\sqrt2$ and $(1+\sqrt5)/2$ are algebraic integers, while $1/2$ is not
8. `fs-artinian-modules-are-noetherian` — false-statement — False statement: every Artinian module is Noetherian
9. `fs-every-module-has-a-composition-series` — false-statement — False statement: every module has a composition series
10. `fs-semisimple-rings-are-commutative` — false-statement — False statement: every semisimple ring is commutative
11. `fs-noetherian-rings-have-noetherian-subrings` — false-statement — False statement: every subring of a Noetherian ring is Noetherian
12. `fs-right-noetherian-rings-are-left-noetherian` — false-statement — False statement: every right Noetherian ring is left Noetherian

## Per-item expected component provenance and Step-5 source

Every row supplies the expected component values and the exact URL to put in `sources.references` for the source-backed statement. Proof provenance is local: adapting a proof to the declared library dependencies does not change a literature-derived statement into generated mathematics.

### `sylow-theorems-and-nilpotent-groups`

| Item | Statement | Proof | Rationale and exact source |
|---|---|---|---|
| `def-sylow-p-subgroup` | `literature-derived` | `not-applicable` | Source-backed definition, with notation and handedness normalized to the repository convention. [Keith Conrad, The Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf) |
| `def-number-of-sylow-p-subgroups` | `literature-derived` | `not-applicable` | Source-backed definition, with notation and handedness normalized to the repository convention. [Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `def-maximal-subgroup-of-a-group` | `literature-derived` | `not-applicable` | Source-backed definition, with notation and handedness normalized to the repository convention. [Conrad, The Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf) |
| `def-p-complement` | `literature-derived` | `not-applicable` | Source-backed definition, with notation and handedness normalized to the repository convention. [Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `def-p-core-of-a-finite-group` | `literature-derived` | `not-applicable` | Source-backed definition, with notation normalized to the repository convention. [Rachel K. Carleton, The Commuting and Cyclic Graphs of Solvable A-Groups](https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=kent1713384046910533&disposition=inline) |
| `def-fitting-subgroup-of-a-finite-group` | `literature-derived` | `not-applicable` | Source-backed definition, with notation normalized to the repository convention. [Rachel K. Carleton, The Commuting and Cyclic Graphs of Solvable A-Groups](https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=kent1713384046910533&disposition=inline) |
| `def-frattini-subgroup-of-a-finite-group` | `literature-derived` | `not-applicable` | Source-backed definition, with notation normalized to the repository convention. [David A. Craven, Finite Group Theory](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf) |
| `lem-wielandt-sylow-binomial-valuation` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Amin Idelhaj, The Sylow Theorems and Their Applications](https://math.uchicago.edu/~may/REU2016/REUPapers/Idelhaj.pdf) |
| `thm-sylow-first-theorem` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, The Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf) |
| `thm-sylow-second-theorem` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, The Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf) |
| `thm-sylow-number-as-normalizer-index` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, The Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf) |
| `thm-sylow-third-theorem` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, The Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf) |
| `cor-sylow-subgroup-normal-iff-unique` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Amin Idelhaj, The Sylow Theorems and Their Applications](https://math.uchicago.edu/~may/REU2016/REUPapers/Idelhaj.pdf) |
| `thm-normalizer-of-a-sylow-normalizer` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, The Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf) |
| `thm-frattini-argument` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [David A. Craven, Finite Group Theory](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf) |
| `cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `thm-normalizer-condition-for-finite-nilpotent-groups` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `thm-maximal-subgroups-of-finite-nilpotent-groups` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `thm-index-p-subgroup-existence-in-finite-p-groups` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Conrad, The Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf) |
| `lem-distinct-normal-sylow-subgroups-commute` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `lem-finite-nilpotence-via-normal-sylow-subgroups` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `lem-products-of-normal-p-subgroups` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Conrad, The Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf) |
| `thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [David A. Craven, Finite Group Theory](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf) |
| `lem-frattini-subgroup-nongenerator-characterization` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [David A. Craven, Finite Group Theory](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf) |
| `thm-nilpotence-is-detected-modulo-the-frattini-subgroup` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [David A. Craven, Finite Group Theory](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf) |
| `thm-frattini-subgroup-is-nilpotent` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [David A. Craven, Finite Group Theory](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf) |
| `cor-frattini-subgroup-is-contained-in-the-fitting-subgroup` | `literature-derived` | `ai-altered` | Immediate consequence of Craven's nilpotence theorem and largest-normal-nilpotent definition; the local proof is adapted to the exact declared dependency statements. [David A. Craven, Finite Group Theory](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf) |
| `thm-fitting-subgroup-of-the-frattini-quotient` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [David A. Craven, Finite Group Theory](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf) |
| `thm-sylow-characterizations-of-finite-nilpotence` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `thm-groups-of-order-p-squared-q-have-a-normal-sylow-subgroup` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `cor-groups-of-order-p-squared-q-are-not-simple` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `thm-groups-of-order-thirty-have-a-normal-sylow-subgroup` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `thm-groups-of-order-forty-five-are-abelian` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `cor-groups-of-order-pq-are-not-simple` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `fs-converse-of-lagrange-for-finite-groups` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Keith Conrad, The Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf) |
| `fs-subgroups-of-equal-p-power-order-are-conjugate` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `fs-unique-sylow-subgroup-forces-a-direct-product` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `fs-groups-of-order-forty-two-have-a-normal-sylow-two-subgroup` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Keith Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `fs-finite-nilpotent-and-solvable-groups-coincide` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |

### `sylow-theorems-and-nilpotent-groups-examples`

| Item | Statement | Proof | Rationale and exact source |
|---|---|---|---|
| `ex-sylow-subgroups-of-s-four` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Keith Conrad, The Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf) |
| `ex-sylow-subgroups-of-a-five` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Keith Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `ex-sylow-subgroups-of-affine-group-modulo-five` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Keith Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `ex-unique-sylow-subgroup-of-affine-group-modulo-p-squared` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Keith Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Keith Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `ex-sylow-subgroups-of-gl-two-over-a-finite-prime-field` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Keith Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `ex-sylow-data-for-groups-of-order-at-most-fifteen` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Amin Idelhaj, The Sylow Theorems and Their Applications](https://math.uchicago.edu/~may/REU2016/REUPapers/Idelhaj.pdf) |
| `ex-groups-of-order-thirty` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Keith Conrad, Consequences of the Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf) |
| `ex-a-four-is-not-nilpotent` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Keith Conrad, The Sylow Theorems](https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf) |
| `ex-fitting-and-frattini-subgroups-of-s-three` | `ai-generated` | `ai-generated` | Leaf computation with an explicit finite witness; retain only after the truth-risk search in this note. No statement source; dependency statements remain separately cited. |
| `ex-p-cores-fitting-and-frattini-subgroups-of-s-four` | `ai-generated` | `ai-generated` | Leaf computation with an explicit finite witness; retain only after the truth-risk search in this note. No statement source; dependency statements remain separately cited. |

### `chain-conditions-and-semisimple-modules`

| Item | Statement | Proof | Rationale and exact source |
|---|---|---|---|
| `def-noetherian-module` | `literature-derived` | `not-applicable` | Source-backed definition, with notation and handedness normalized to the repository convention. [Keith Conrad, Noetherian Modules](https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf) |
| `def-artinian-module` | `literature-derived` | `not-applicable` | Source-backed definition, with notation and handedness normalized to the repository convention. [Arvind Nair, Algebra I](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf) |
| `def-noetherian-ring` | `literature-derived` | `not-applicable` | Source-backed definition, with notation and handedness normalized to the repository convention. [Arvind Nair, Algebra I](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf) |
| `def-artinian-ring` | `literature-derived` | `not-applicable` | Source-backed definition, with notation and handedness normalized to the repository convention. [Nair, Algebra I, Lecture 5](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf) |
| `def-composition-series-and-length-of-a-module` | `literature-derived` | `not-applicable` | Source-backed definition, with notation and handedness normalized to the repository convention. [Arvind Nair, Algebra I](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf) |
| `def-opposite-ring` | `literature-derived` | `not-applicable` | Source-backed definition, with notation and handedness normalized to the repository convention. [William Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `def-endomorphism-ring-of-a-module` | `literature-derived` | `not-applicable` | Source-backed definition, with notation and handedness normalized to the repository convention. [William Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `def-semisimple-module` | `literature-derived` | `not-applicable` | Source-backed definition, with notation and handedness normalized to the repository convention. [MIT 18.706, Lecture 2](https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf) |
| `def-semisimple-ring` | `literature-derived` | `not-applicable` | Source-backed definition, with notation and handedness normalized to the repository convention. [MIT 18.706 Noncommutative Algebra, Lecture 2: Semisimple Modules, Socles, Artinian Rings, Wedderburn's Theorem](https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf) |
| `def-socle-of-a-module` | `literature-derived` | `not-applicable` | Source-backed definition, with notation and handedness normalized to the repository convention. [MIT 18.706 Noncommutative Algebra, Lecture 2: Semisimple Modules, Socles, Artinian Rings, Wedderburn's Theorem](https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf) |
| `def-integral-element-and-algebraic-integer` | `literature-derived` | `not-applicable` | Source-backed definition, with notation and handedness normalized to the repository convention. [Eloísa Grifo, Commutative Algebra I](https://eloisagrifo.github.io/Teaching/ca1/CA1notes.pdf) |
| `thm-second-isomorphism-theorem-modules` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [William Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `thm-third-isomorphism-theorem-modules` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `thm-correspondence-theorem-modules` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `thm-equivalent-characterizations-of-noetherian-modules` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, Noetherian Modules](https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf) |
| `thm-equivalent-characterizations-of-artinian-modules` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Nair, Algebra I, Lecture 5](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf) |
| `thm-chain-conditions-in-short-exact-sequences` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, Noetherian Modules](https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf) |
| `cor-finite-direct-sums-preserve-chain-conditions` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, Noetherian Modules](https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf) |
| `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [William Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `cor-noetherian-modules-are-hopfian` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Keith Conrad, Noetherian Modules](https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf) |
| `thm-composition-series-iff-noetherian-and-artinian` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Arvind Nair, Algebra I](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf) |
| `thm-jordan-holder-theorem-for-modules` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Arvind Nair, Algebra I](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf) |
| `cor-length-is-additive-in-short-exact-sequences` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Arvind Nair, Algebra I](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf) |
| `prop-endomorphisms-form-a-ring` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `thm-endomorphism-ring-of-the-left-regular-module-is-opposite` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [William Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `thm-endomorphism-ring-of-a-finite-direct-sum-as-hom-matrices` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [William Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [William Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `thm-equivalent-characterizations-of-semisimple-modules` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [William Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `thm-finite-length-semisimple-module-characterizations` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Nair, Algebra I, Lecture 5](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf) |
| `thm-submodules-and-quotients-of-semisimple-modules` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [William Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `thm-socle-is-the-largest-semisimple-submodule` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [MIT 18.706, Lecture 2](https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf) |
| `thm-finitely-generated-semisimple-modules-are-finite-direct-sums-of-simple-modules` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [MIT 18.706, Lecture 2](https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf) |
| `thm-schurs-lemma-for-modules` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [William Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `thm-equivalent-characterizations-of-semisimple-rings` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [MIT 18.706 Noncommutative Algebra, Lecture 2: Semisimple Modules, Socles, Artinian Rings, Wedderburn's Theorem](https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf) |
| `thm-matrix-rings-over-division-rings-are-semisimple` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [William Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `thm-wedderburn-artin-theorem` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [William Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `thm-simple-modules-over-semisimple-rings` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [MIT 18.706 Noncommutative Algebra, Lecture 2: Semisimple Modules, Socles, Artinian Rings, Wedderburn's Theorem](https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf) |
| `thm-uniqueness-of-wedderburn-artin-data` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [MIT 18.706 Noncommutative Algebra, Lecture 2: Semisimple Modules, Socles, Artinian Rings, Wedderburn's Theorem](https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf) |
| `cor-left-and-right-semisimplicity-agree` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Crawley-Boevey, Noncommutative Algebra](https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf) |
| `cor-semisimple-rings-are-noetherian-and-artinian` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Nair, Algebra I, Lecture 5](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf) |
| `thm-integrality-and-finite-module-equivalences` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Eloísa Grifo, Commutative Algebra I](https://eloisagrifo.github.io/Teaching/ca1/CA1notes.pdf) |
| `cor-integral-elements-form-a-subring` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Eloísa Grifo, Commutative Algebra I](https://eloisagrifo.github.io/Teaching/ca1/CA1notes.pdf) |
| `cor-rational-algebraic-integers-are-integers` | `literature-derived` | `ai-altered` | Named literature result; the local proof is adapted to the exact declared dependency statements. [Eloísa Grifo, Commutative Algebra I](https://eloisagrifo.github.io/Teaching/ca1/CA1notes.pdf) |

### `chain-conditions-and-semisimple-modules-examples`

| Item | Statement | Proof | Rationale and exact source |
|---|---|---|---|
| `ex-integers-as-a-noetherian-non-artinian-module` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Arvind Nair, Algebra I](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf) |
| `ex-prufer-p-group-is-artinian-not-noetherian` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Arvind Nair, Algebra I](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf) |
| `ex-infinite-binary-product-ring-is-not-noetherian` | `ai-generated` | `ai-generated` | Leaf computation with an explicit coordinate-idempotent witness; retain only after the truth-risk search in this note. No statement source; dependency statements remain separately cited. |
| `ex-matrix-ring-decomposition-into-minimal-left-ideals` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [MIT 18.706 Noncommutative Algebra, Lecture 2: Semisimple Modules, Socles, Artinian Rings, Wedderburn's Theorem](https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf) |
| `ex-product-of-two-fields-is-semisimple` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [MIT 18.706, Lecture 2](https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf) |
| `ex-length-of-z-modulo-p-to-the-k` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Nair, Algebra I, Lecture 5](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf) |
| `ex-quadratic-algebraic-integers-and-one-half` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Eloísa Grifo, Commutative Algebra I](https://eloisagrifo.github.io/Teaching/ca1/CA1notes.pdf) |
| `fs-artinian-modules-are-noetherian` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Nair, Algebra I, Lecture 5](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf) |
| `fs-every-module-has-a-composition-series` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Nair, Algebra I, Lecture 5](https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf) |
| `fs-semisimple-rings-are-commutative` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [MIT 18.706, Lecture 2](https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf) |
| `fs-noetherian-rings-have-noetherian-subrings` | `ai-altered` | `ai-altered` | Literature-backed witness or computation adapted to the exact published constructions and notation. [Keith Conrad, Noetherian Modules](https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf) |
| `fs-right-noetherian-rings-are-left-noetherian` | `ai-altered` | `ai-altered` | Literature-backed witness adapted by conjugating Bailey–Beachy's lower-triangular presentation with the coordinate-swap matrix; this preserves right/left handedness. [Abigail C. Bailey and John A. Beachy, On Noncommutative Piecewise Noetherian Rings](https://static1.squarespace.com/static/5bfc97c08f51300ae14c44c1/t/61e64aea66b8e84a4ffbaa3d/1642482411402/17pNoeth.pdf) |

## Continuity checkpoint

Current substage: Step 2 scaffold and dependency closure are complete for both A/B pairs. Owned artifacts are `research/frontier-15-batch-2.pages.json`, `research/frontier-15-batch-2.notes.md`, `research/frontier-15-batch-2.coverage.json`, and `research/frontier-15-batch-2.proof-contracts.json`. Completed checks are JSON parse, coverage checklist, manifest-only content policy, prosecheck with warnings, boundary audit, finite-smoke, new-id collision search, and the local order/provenance dependency audit; their exact results are in the verification record. No mathematical or dependency constraint remains open at Step 2. The plan-wide `validate-plan.mjs` and `depsource.mjs` checks await the Step-4 splice. Exact next action after Alpha adjudication and Step 4: return as Step-5 author, follow the approved item order and proof contracts, populate every direct citation's exact source clause and use map, resolve the zero-ring/empty-product convention explicitly, and run the authored-item gates without promoting any AI-generated leaf example into a dependency target.

## Step-3 fix pass

This section supersedes the earlier Sylow-pair item lists, source dispositions,
and verification claims wherever they differ. The chain-conditions pair's exact
item lists above remain unchanged.

### Finding dispositions

- **B2-1 — already correct (recommend approve).** Alpha had already changed
  `thm-sylow-second-theorem` so its title and strategy state both containment
  and conjugacy and had added `thm-lagrange`. I preserved that repair and also
  updated the proof contract: the equal-order step now cites `thm-lagrange`,
  and the boundary dispositions no longer use the obsolete containment-only
  title.
- **B2-2 — applied (recommend approve).** Neither worked example now depends on
  the order-78 matrix page. The Heisenberg example defines
  `H_p=F_p^3` by its coordinate group law, lets `(F_p^x)^3` act by coordinate
  scaling, and forms the ambient group as the published external semidirect
  product. The `GL_2` example is routed through the newly scaffolded coordinate
  theorem `thm-order-of-automorphism-group-of-elementary-abelian-rank-two`;
  it counts automorphisms from images of the two standard generators and
  computes the normalizer of the subgroup of shears without citing matrix-ring
  or general-linear-group machinery. Conrad Theorems 2.4 and 2.7 remain
  `included` in coverage with dispositions naming these faithful coordinate
  realizations. Declining this repair would leave both examples without their
  ambient group definitions at order 71.
- **B2-3 — already correct (recommend approve).** The B page remains a worked-
  example page. The A page supplies the relevant false statements, and Alpha
  found no corpus convention requiring a counterexample on this B page. No
  mathematical content was moved merely to change the item-kind mix.
- **B2-4 — already correct (recommend approve).** Alpha had already added
  `the-field-of-fractions-and-localisation` to
  `chain-conditions-and-semisimple-modules`'s `requires`.
  I preserved the edge. Its order is 53.2, so this is not a forward reference.
- **B2-5 — applied as a binding authoring decision (recommend approve).** The
  Noetherian strategy and proof contract now isolate the implications precisely:
  every submodule finitely generated implies ACC and the maximal condition
  implies finite generation are choice-free; only ACC implies the maximal
  condition uses dependent choice. The Artinian contract likewise marks DCC
  implies the minimal condition as the DC-consuming direction and the reverse
  implication as choice-free. At Step 5, both items must state dependent choice
  in Facts as an adopted foundational axiom. They acquire no `deps` edge, no
  `forward_refs` entry, and no topology prerequisite.
- **B2-6 — applied (recommend approve).** Coverage now includes Thomas W.
  Judson's open textbook *Abstract Algebra: Theory and Applications*, Chapter 13
  introduction and Section 13.1, printed pp. 220–222, Theorem 13.1 through
  Theorem 13.3, stopping before the paragraph defining Sylow p-subgroups. Its
  harvested contents record the chapter motivation, section heading, Cauchy's
  theorem, its p-group corollary, the `A_5` example, and the First Sylow Theorem.
  This supplies the textbook treatment the batch task required.
- **B2-7 — applied (recommend approve).** Conrad Corollary 5.13 is no longer
  declined. The new `cor-classification-of-groups-of-order-one-hundred-five`
  states its classification conclusion and uses the existing order-105 normal-
  Sylow theorem, the published order-`pq` classification, cyclic automorphism
  count, and semidirect/direct-product dictionary. Conrad Theorem 5.12 is
  `inline` in this corollary and Corollary 5.13 is `included`. Declining this
  repair would restore a richness-based decline inconsistent with the page's
  classification of groups of order 30.

### Final Sylow-pair item lists

#### `sylow-theorems-and-nilpotent-groups` — `item_count=42`

1. `def-sylow-p-subgroup` — definition — Sylow $p$-subgroups of a finite group
2. `def-number-of-sylow-p-subgroups` — definition — The number $n_p(G)$ of Sylow $p$-subgroups
3. `def-maximal-subgroup-of-a-group` — definition — Maximal proper subgroups
4. `def-p-complement` — definition — $p$-complements in finite groups
5. `def-p-core-of-a-finite-group` — definition — The $p$-core $O_p(G)$ as the largest normal $p$-subgroup
6. `def-fitting-subgroup-of-a-finite-group` — definition — The Fitting subgroup $F(G)=\prod_p O_p(G)$ of a finite group
7. `def-frattini-subgroup-of-a-finite-group` — definition — The Frattini subgroup $\Phi(G)$ as the intersection of the maximal subgroups of a finite group
8. `lem-wielandt-sylow-binomial-valuation` — lemma — If $|G|=p^a m$ with $p\nmid m$, then $v_p\binom{p^a m}{p^a}=0$
9. `thm-sylow-first-theorem` — theorem — Sylow I: every finite group has a Sylow $p$-subgroup
10. `thm-sylow-second-theorem` — theorem — Sylow II: every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup, and the Sylow $p$-subgroups form a single conjugacy class
11. `thm-sylow-number-as-normalizer-index` — theorem — Sylow III*: $n_p(G)=[G:N_G(P)]$
12. `thm-sylow-third-theorem` — theorem — Sylow III: $n_p\equiv1\pmod p$ and $n_p\mid m$ when $|G|=p^a m$ with $p\nmid m$
13. `cor-sylow-subgroup-normal-iff-unique` — corollary — A Sylow $p$-subgroup is normal if and only if it is unique
14. `thm-normalizer-of-a-sylow-normalizer` — theorem — A subgroup containing the normalizer of a Sylow subgroup is self-normalizing
15. `thm-frattini-argument` — theorem — Frattini argument: if $N\trianglelefteq G$ and $P$ is Sylow in $N$, then $G=N N_G(P)$
16. `cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal` — corollary — A normal Sylow subgroup of a normal subgroup is normal in the whole group
17. `thm-normalizer-condition-for-finite-nilpotent-groups` — theorem — Every proper subgroup of a finite nilpotent group is properly contained in its normalizer
18. `thm-maximal-subgroups-of-finite-nilpotent-groups` — theorem — Maximal subgroups of finite nilpotent groups are normal of prime index
19. `thm-index-p-subgroup-existence-in-finite-p-groups` — theorem — Every nontrivial finite $p$-group has a normal subgroup of index $p$
20. `lem-distinct-normal-sylow-subgroups-commute` — lemma — Distinct normal Sylow subgroups centralize one another
21. `lem-finite-nilpotence-via-normal-sylow-subgroups` — lemma — A finite group is nilpotent if and only if all Sylow subgroups are normal, if and only if it is their internal direct product
22. `lem-products-of-normal-p-subgroups` — lemma — A finite product of normal $p$-subgroups is a normal $p$-subgroup
23. `thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup` — theorem — The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group
24. `lem-frattini-subgroup-nongenerator-characterization` — lemma — The Frattini subgroup consists exactly of the nongenerators of a finite group
25. `thm-nilpotence-is-detected-modulo-the-frattini-subgroup` — theorem — Nilpotence lifts over the Frattini subgroup of a finite group
26. `thm-frattini-subgroup-is-nilpotent` — theorem — The Frattini subgroup of a finite group is nilpotent
27. `cor-frattini-subgroup-is-contained-in-the-fitting-subgroup` — corollary — The Frattini subgroup is contained in the Fitting subgroup
28. `thm-fitting-subgroup-of-the-frattini-quotient` — theorem — $F(G/\Phi(G))=F(G)/\Phi(G)$ for every finite group
29. `thm-sylow-characterizations-of-finite-nilpotence` — theorem — Sylow and maximal-subgroup characterizations of finite nilpotence
30. `thm-order-of-automorphism-group-of-elementary-abelian-rank-two` — theorem — For prime $p$, $|\operatorname{Aut}((\mathbb Z/p)\times(\mathbb Z/p))|=(p^2-1)(p^2-p)$
31. `thm-groups-of-order-p-squared-q-have-a-normal-sylow-subgroup` — theorem — Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup
32. `cor-groups-of-order-p-squared-q-are-not-simple` — corollary — No group of order $p^2q$ for distinct primes is simple
33. `thm-groups-of-order-thirty-have-a-normal-sylow-subgroup` — theorem — Every group of order $30$ has normal Sylow $3$- and $5$-subgroups and is not simple
34. `thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup` — theorem — Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple
35. `cor-classification-of-groups-of-order-one-hundred-five` — corollary — There are exactly two isomorphism classes of groups of order $105$
36. `thm-groups-of-order-forty-five-are-abelian` — theorem — Every group of order $45$ is abelian
37. `cor-groups-of-order-pq-are-not-simple` — corollary — No group of order $pq$ for distinct primes is simple
38. `fs-converse-of-lagrange-for-finite-groups` — false-statement — False statement: every divisor of the order of a finite group occurs as a subgroup order
39. `fs-subgroups-of-equal-p-power-order-are-conjugate` — false-statement — False statement: all subgroups of the same $p$-power order are conjugate
40. `fs-unique-sylow-subgroup-forces-a-direct-product` — false-statement — False statement: one unique Sylow subgroup forces the whole group to be a direct product
41. `fs-groups-of-order-forty-two-have-a-normal-sylow-two-subgroup` — false-statement — False statement: every group of order $42$ has a normal Sylow $2$-subgroup
42. `fs-finite-nilpotent-and-solvable-groups-coincide` — false-statement — False statement: finite nilpotent groups and finite solvable groups are the same

#### `sylow-theorems-and-nilpotent-groups-examples` — `item_count=11`

1. `ex-sylow-subgroups-of-s-four` — example — The Sylow subgroups of $S_4$
2. `ex-sylow-subgroups-of-a-five` — example — The Sylow subgroups of $A_5$
3. `ex-sylow-subgroups-of-affine-group-modulo-five` — example — Sylow subgroups of $\operatorname{Aff}(\mathbb Z/5)$: $n_2=5$ and $n_5=1$
4. `ex-unique-sylow-subgroup-of-affine-group-modulo-p-squared` — example — The unique Sylow $p$-subgroup of $\operatorname{Aff}(\mathbb Z/p^2)$
5. `ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group` — example — The finite Heisenberg group is the unique Sylow $p$-subgroup of its coordinate upper-triangular group
6. `ex-sylow-subgroups-of-gl-two-over-a-finite-prime-field` — example — Sylow $p$-subgroups of $\operatorname{Aut}((\mathbb Z/p)^2)$: $n_p=p+1$
7. `ex-sylow-data-for-groups-of-order-at-most-fifteen` — example — Sylow data for finite groups of order at most $15$
8. `ex-groups-of-order-thirty` — example — The four isomorphism types of groups of order $30$
9. `ex-a-four-is-not-nilpotent` — example — $A_4$ is not nilpotent
10. `ex-fitting-and-frattini-subgroups-of-s-three` — example — The Fitting and Frattini subgroups of $S_3$
11. `ex-p-cores-fitting-and-frattini-subgroups-of-s-four` — example — The $p$-cores, Fitting subgroup, and Frattini subgroup of $S_4$

### Richness, decomposition, and split pass

For the Sylow pair, the long `GL_2(F_p)` computation was decomposed by adding
`thm-order-of-automorphism-group-of-elementary-abelian-rank-two`; the B example
now uses that order theorem and retains only the shear subgroup, fixed-line, and
normalizer calculation. The Heisenberg construction is separated in its proof
contract into the coordinate group law, diagonal action, semidirect-product
construction, and Sylow count. These steps are specific to one worked example,
so no additional reusable lemma was manufactured. The corollary pass added
`cor-classification-of-groups-of-order-one-hundred-five`. Both page sizes are
below the ceiling shown by their structured `item_count` fields, so no split is
proposed.

For the chain-conditions pair, both the decomposition and corollary passes were
performed at Step 2 and found no Step-3 change. Both page sizes remain below the
ceiling shown by their structured `item_count` fields, so no split is proposed.

### New ids and provenance added by this fix

The collision command
`rg -n 'thm-order-of-automorphism-group-of-elementary-abelian-rank-two|cor-classification-of-groups-of-order-one-hundred-five' items research/plan-spec.json`
returned no output.

- `thm-order-of-automorphism-group-of-elementary-abelian-rank-two` — expected
  `provenance.statement: ai-altered`, `provenance.proof: ai-altered`. Conrad
  Theorem 2.4 supplies the literature order formula; the statement is minimally
  altered to the earlier available group `Aut((Z/p)^2)` and the proof is rebuilt
  in coordinates. Exact Step-5 reference URL:
  `https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf`.
- `cor-classification-of-groups-of-order-one-hundred-five` — expected
  `provenance.statement: literature-derived`, `provenance.proof: ai-altered`.
  Conrad Corollary 5.13 supplies the statement and Theorem 5.12 supplies the
  centrality step; the local proof is adapted to published dependencies. Exact
  Step-5 reference URL:
  `https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf`.

The rewritten Heisenberg and `GL_2` examples retain expected
`statement: ai-altered` and `proof: ai-altered`, with the same Conrad URL. This
fix introduces no `ai-generated` statement or construction and therefore adds
no generated-statement truth-risk obligation.

### Updated research and dependency ledger

- Thomas W. Judson, *Abstract Algebra: Theory and Applications*, Chapter 13
  introduction and Section 13.1, printed pp. 220–222:
  `https://judsonbooks.org/aata-files/aata-original.pdf`. This supports the
  partial-converse framing, Cauchy's theorem, the finite-p-group equivalence,
  the `A_5` subgroup example, and Sylow I. Judson states the elementwise p-group
  convention before proving equivalence with p-power order; the repository uses
  p-power order as its finite-group definition. No statement was silently
  changed across that convention.
- Keith Conrad, *Consequences of the Sylow Theorems*, Theorems 2.4 and 2.7 and
  Theorems 5.11–5.12 with Corollary 5.13:
  `https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf`. These support
  the automorphism count, the Heisenberg semidirect-product example, the
  order-105 normal Sylow result, and the order-105 classification. Conrad uses
  matrix notation for the examples; the scaffold uses isomorphic coordinate
  groups because matrix machinery is not available at this reading order.

Every proposed published dependency used in the Step-3 changes was opened from
disk and its published status, exact statement, domain, hypotheses, conclusion,
and direction were checked. A local audit checked 376 declared dependency edges:
177 resolve to an earlier batch item and 199 resolve to published content on a
strictly smaller-order page; no unresolved, forward, or AI-generated-statement
target was found. The legacy items missing from `plan-spec.json` item arrays were
resolved through their published library-page frontmatter. The `ai-altered`
published targets used by the new items are established standard results and
were confirmed from their exact disk statements; confidence route:
`established-from-knowledge`, supplemented for the order-`pq` classification by
Conrad's order-105 argument. There is no cross-batch dependency and no forward
reference.

### Verification record and remaining blocker

- `node tools/coverage-checklist.mjs research/frontier-15-batch-2.coverage.json`
  final result: `pages=2; harvested_results=157; errors=0; warnings=0`.
- `node tools/content-policy.mjs --manifest-only research/frontier-15-batch-2.pages.json`
  final result: `scoped_items=108; errors=0; warnings=0`.
- `node tools/prosecheck.mjs` over all four batch artifacts with `--warnings`
  final result: `files=4; errors=0; warnings=0`.
- `node tools/boundary-audit.mjs research/frontier-15-batch-2.proof-contracts.json`
  reported no template reuse at the threshold and no contradicted dispositions.
  The contract map is exact: `proof_bearing_items=90; contracts=90; missing=0;
  extra=0`.
- `node tools/validate-plan.mjs research/plan-spec.json` passed against the
  current unspliced plan; it does not validate the new batch items until Step 4.
- The required source stamp command was run exactly as dispatched. It failed
  with `ENOTFOUND` for every recorded host in the sandbox, reported
  `0/11 source(s) fetch-verified (0 newly stamped), 11 FAILED`, and modified no
  stamps. The URLs and bodies used for the repair were independently readable
  through the available web reader, but that does not substitute for the
  mechanical stamp. This is an honest infrastructure blocker for the source
  fetch gate and requires an engine rerun in an environment with DNS; no stamp
  was fabricated.

Confidence is high in the mathematical and dependency repairs. I directly read
the Judson and Conrad ranges used by the new decisions and opened every new
load-bearing disk dependency. I did not re-read every source range harvested at
Step 2, and I could not complete the mechanical fetch stamps because outbound
DNS was unavailable.

## Source-scouting round (2026-08-17)

- The Boston origin `https://people.math.wisc.edu/~nboston/notes3.pdf` returned
  no usable full text, and its recorded Wayback recovery was an incomplete
  capture. Searches by author, title, filename, and exact phrases found the same
  origin and partial capture but no complete mirror or archive snapshot of the
  same document. The source was therefore replaced and re-harvested, rather
  than retaining rows attributed to unread material.
- David A. Craven, *Finite Group Theory*, now supports the Fitting/Frattini
  results from Chapter 1 Section 1.4, Lemma 1.25; Chapter 2 Section 2.3,
  Theorem 2.11 through Proposition 2.14; and Exercise Sheet 1, Exercise 1.6.
  Rachel K. Carleton, *The Commuting and Cyclic Graphs of Solvable A-Groups*,
  Chapter 2 Section 2.1, p. 6, now supports the exact \(p\)-core and Fitting
  subgroup definitions. Both PDFs were readable in full through the available
  web reader and comfortably exceed the substantive-document threshold. The
  coverage rows were rewritten from those exact ranges, and the Boston origin
  is retained as `original_url`.
- The Cambridge origin `https://www.dpmms.cam.ac.uk/~sjw47/2026ex1.pdf` did not
  yield a complete fetch-verifiable copy, and searches of the author page,
  filename, title context, and mirrors found no complete copy of the same
  sheet. It was replaced by Abigail C. Bailey and John A. Beachy, *On
  Noncommutative Piecewise Noetherian Rings*, Section 1, Example 1, p. 3. The
  complete paper was readable through the web reader. Its example is lower
  triangular with diagonal entries \(\mathbb Q,\mathbb Z\); conjugating by the
  coordinate-swap matrix gives the scaffold's upper-triangular presentation and
  does not interchange right and left Noetherianity. The Cambridge origin is
  retained as `original_url`.
- After the re-harvest,
  `node tools/coverage-checklist.mjs research/frontier-15-batch-2.coverage.json`
  reported `pages=2; harvested_results=157; errors=0; warnings=0`.
- The required command
  `node tools/source-fetch-check.mjs --coverage research/frontier-15-batch-2.coverage.json --stamp`
  was rerun after the replacements. The sandbox resolver returned `ENOTFOUND`
  for the Birmingham, OhioLINK, and Squarespace hosts, so it reported `9/12`
  verified, `0` newly stamped, and `3 FAILED`. No `fetch_verified` data was
  fabricated. The three complete replacements need the same command rerun in
  an environment with outbound DNS.

## Step-5 authoring

All 108 scaffolded items and all four page files were authored. No item was dropped, merged, renamed, or moved; the item ids, kinds, titles, dependency arrays, page membership, and page prerequisites remain exactly those of the owner-approved scaffold. The A-page summaries were written after the items, each as exactly two nonempty paragraphs; the B pages have no summary body. Coverage dispositions therefore remain unchanged and true of the authored files.

### Per-item precheck and component-provenance ledger

Source keys: `KC-Sylow` = Keith Conrad, *The Sylow Theorems*; `KC-Consequences` = Keith Conrad, *Consequences of the Sylow Theorems*; `Craven`, `Carleton`, `KC-Noetherian`, `Crawley-Boevey`, `MIT-18.706`, `Nair`, `Grifo`, and `Bailey-Beachy` denote the exact references and URLs already recorded in each item and in the source ledger above. `direct-check` means the generated witness was verified entirely from displayed finite algebra and therefore has no borrowed statement source.

- `def-sylow-p-subgroup` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; KC-Consequences; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `def-number-of-sylow-p-subgroups` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; KC-Consequences; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `def-maximal-subgroup-of-a-group` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; KC-Sylow; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `def-p-complement` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; KC-Sylow; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `def-p-core-of-a-finite-group` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; Carleton; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `def-fitting-subgroup-of-a-finite-group` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; Carleton; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `def-frattini-subgroup-of-a-finite-group` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; Craven; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `lem-wielandt-sylow-binomial-valuation` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-sylow-first-theorem` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-sylow-second-theorem` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-sylow-number-as-normalizer-index` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-sylow-third-theorem` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `cor-sylow-subgroup-normal-iff-unique` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-normalizer-of-a-sylow-normalizer` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-frattini-argument` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Craven; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-normalizer-condition-for-finite-nilpotent-groups` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-maximal-subgroups-of-finite-nilpotent-groups` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-index-p-subgroup-existence-in-finite-p-groups` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Sylow; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `lem-distinct-normal-sylow-subgroups-commute` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `lem-finite-nilpotence-via-normal-sylow-subgroups` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `lem-products-of-normal-p-subgroups` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Sylow; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Craven; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `lem-frattini-subgroup-nongenerator-characterization` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Craven; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-nilpotence-is-detected-modulo-the-frattini-subgroup` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Craven; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-frattini-subgroup-is-nilpotent` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Craven; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `cor-frattini-subgroup-is-contained-in-the-fitting-subgroup` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Craven; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-fitting-subgroup-of-the-frattini-quotient` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Craven; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-sylow-characterizations-of-finite-nilpotence` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-order-of-automorphism-group-of-elementary-abelian-rank-two` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Consequences; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `thm-groups-of-order-p-squared-q-have-a-normal-sylow-subgroup` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `cor-groups-of-order-p-squared-q-are-not-simple` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-groups-of-order-thirty-have-a-normal-sylow-subgroup` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `cor-classification-of-groups-of-order-one-hundred-five` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-groups-of-order-forty-five-are-abelian` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `cor-groups-of-order-pq-are-not-simple` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Consequences; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `fs-converse-of-lagrange-for-finite-groups` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Consequences; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `fs-subgroups-of-equal-p-power-order-are-conjugate` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Consequences; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `fs-unique-sylow-subgroup-forces-a-direct-product` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Consequences; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `fs-groups-of-order-forty-two-have-a-normal-sylow-two-subgroup` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Consequences; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `fs-finite-nilpotent-and-solvable-groups-coincide` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Consequences; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `ex-sylow-subgroups-of-s-four` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Consequences; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `ex-sylow-subgroups-of-a-five` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Consequences; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `ex-sylow-subgroups-of-affine-group-modulo-five` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Consequences; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `ex-unique-sylow-subgroup-of-affine-group-modulo-p-squared` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Consequences; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Consequences; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `ex-sylow-subgroups-of-gl-two-over-a-finite-prime-field` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Consequences; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `ex-sylow-data-for-groups-of-order-at-most-fifteen` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Consequences; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `ex-groups-of-order-thirty` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Consequences; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `ex-a-four-is-not-nilpotent` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Consequences; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `ex-fitting-and-frattini-subgroups-of-s-three` — precheck: pass; statement: `ai-generated`; proof: `ai-generated`; direct-check; explicit finite witness generated here and checked directly; proof/verification generated and expanded here.
- `ex-p-cores-fitting-and-frattini-subgroups-of-s-four` — precheck: pass; statement: `ai-generated`; proof: `ai-generated`; direct-check; explicit finite witness generated here and checked directly; proof/verification generated and expanded here.
- `def-noetherian-module` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; KC-Noetherian; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `def-artinian-module` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; Nair; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `def-noetherian-ring` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; KC-Noetherian; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `def-artinian-ring` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; Nair; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `def-composition-series-and-length-of-a-module` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; Nair; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `def-opposite-ring` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; Crawley-Boevey; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `def-endomorphism-ring-of-a-module` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; Crawley-Boevey; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline or by the declared forward justifier.
- `def-semisimple-module` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; Crawley-Boevey; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `def-semisimple-ring` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; Crawley-Boevey; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `def-socle-of-a-module` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; MIT-18.706; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `def-integral-element-and-algebraic-integer` — precheck: n/a (definition); statement: `literature-derived`; proof: `not-applicable`; Grifo; source-backed definition adapted only to local notation; proof not applicable, with existence/well-definedness discharged inline.
- `thm-second-isomorphism-theorem-modules` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-third-isomorphism-theorem-modules` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-correspondence-theorem-modules` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-equivalent-characterizations-of-noetherian-modules` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Noetherian; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-equivalent-characterizations-of-artinian-modules` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Nair; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-chain-conditions-in-short-exact-sequences` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `cor-finite-direct-sums-preserve-chain-conditions` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Noetherian; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `cor-noetherian-modules-are-hopfian` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; KC-Noetherian; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-composition-series-iff-noetherian-and-artinian` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Nair; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-jordan-holder-theorem-for-modules` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Nair; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `cor-length-is-additive-in-short-exact-sequences` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Nair; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `prop-endomorphisms-form-a-ring` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-endomorphism-ring-of-the-left-regular-module-is-opposite` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-endomorphism-ring-of-a-finite-direct-sum-as-hom-matrices` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-equivalent-characterizations-of-semisimple-modules` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-finite-length-semisimple-module-characterizations` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Nair; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-submodules-and-quotients-of-semisimple-modules` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-socle-is-the-largest-semisimple-submodule` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; MIT-18.706; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-finitely-generated-semisimple-modules-are-finite-direct-sums-of-simple-modules` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-schurs-lemma-for-modules` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-equivalent-characterizations-of-semisimple-rings` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-matrix-rings-over-division-rings-are-semisimple` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-wedderburn-artin-theorem` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-simple-modules-over-semisimple-rings` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; MIT-18.706; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-uniqueness-of-wedderburn-artin-data` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; MIT-18.706; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `cor-left-and-right-semisimplicity-agree` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Crawley-Boevey; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `cor-semisimple-rings-are-noetherian-and-artinian` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Nair; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `thm-integrality-and-finite-module-equivalences` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Grifo; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `cor-integral-elements-form-a-subring` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Grifo; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `cor-rational-algebraic-integers-are-integers` — precheck: pass; statement: `literature-derived`; proof: `ai-altered`; Grifo; source-backed statement retained faithfully; local proof reorganized and written here from declared dependencies.
- `ex-integers-as-a-noetherian-non-artinian-module` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; Nair; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `ex-prufer-p-group-is-artinian-not-noetherian` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; Nair; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `ex-infinite-binary-product-ring-is-not-noetherian` — precheck: pass; statement: `ai-generated`; proof: `ai-generated`; direct-check; explicit finite witness generated here and checked directly; proof/verification generated and expanded here.
- `ex-matrix-ring-decomposition-into-minimal-left-ideals` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; Nair; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `ex-product-of-two-fields-is-semisimple` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; MIT-18.706; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `ex-length-of-z-modulo-p-to-the-k` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; Nair; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `ex-quadratic-algebraic-integers-and-one-half` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; Grifo; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `fs-artinian-modules-are-noetherian` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; Nair; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `fs-every-module-has-a-composition-series` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; Nair; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `fs-semisimple-rings-are-commutative` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; Crawley-Boevey; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `fs-noetherian-rings-have-noetherian-subrings` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; KC-Noetherian; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.
- `fs-right-noetherian-rings-are-left-noetherian` — precheck: pass; statement: `ai-altered`; proof: `ai-altered`; Bailey-Beachy; source-backed claim or witness adapted to the available coordinate conventions and boundary cases; local derivation rewritten here.

The resulting provenance totals are: 18 `literature-derived / not-applicable` definitions, 61 `literature-derived / ai-altered` proof-bearing items, 26 `ai-altered / ai-altered` items, and 3 `ai-generated / ai-generated` examples. These are component labels: a locally rewritten proof did not change a literature-backed statement into an AI-generated statement.

### Scaffold/edit ledger

- No id, kind, title, dependency list, page membership, or coverage disposition changed from the scaffold. Statement prose was made declarative and exact where the scaffold held an authoring strategy rather than final prose.
- The Step-3/Step-4 Alpha resolutions were preserved: Sylow II includes containment and conjugacy; the rank-two automorphism result and Heisenberg example use native coordinates; the order-105 proof uses the direct-product element-order theorem; dependent choice appears only as the adopted axiom in the two chain-condition equivalences; Wedderburn-Artin assumes a nonzero ring and asserts no empty-product convention; and the localisation prerequisite remains on the B page only.
- Boundary repairs made during authoring include the $a=0$ binomial-valuation case, primes absent from a group order, trivial/zero modules, empty finite products and sums, $p=2$ affine and Heisenberg cases, $n=0$ endomorphism matrices, $k=0$ length, and the nonzero-ring boundary in Wedderburn-Artin.
- A substantive proof repair was made in `cor-integral-elements-form-a-subring`: closure now uses the faithful finite $A[z]$-module $A[x,y]$. It does not use the false shortcut that a submodule of a finite module must be finite over an arbitrary non-Noetherian base.
- No published dependency was edited, no external fallback remark was introduced, and no load-bearing dependency has `provenance.statement: ai-generated`.

### AI-generated statement/construction checks

- `ex-fitting-and-frattini-subgroups-of-s-three`: the search scope was the complete subgroup/conjugacy data of $S_3$. The unique Sylow $3$-subgroup, all Sylow $2$-subgroups, and all maximal subgroups were enumerated; the displayed values $O_3=A_3$, $O_2=1$, $F=A_3$, and $\Phi=1$ survived the check.
- `ex-p-cores-fitting-and-frattini-subgroups-of-s-four`: the search scope was the cycle-type and point-stabilizer subgroup data of $S_4$. The normal Klein four group, the nonnormal Sylow subgroups, and the intersection of point stabilizers were checked; the displayed $p$-cores, $F(S_4)=V_4$, and $\Phi(S_4)=1$ survived.
- `ex-infinite-binary-product-ring-is-not-noetherian`: the search scope was the coordinate-idempotent chain $I_n=(e_0,\ldots,e_n)$. The witness $e_{n+1}\in I_{n+1}\setminus I_n$ was checked for arbitrary $n$, and the finite-support union was distinguished from the full product. No counterexample to the claim was found.

### Gate record and escalations

- Scoped reflow: all 108 item files unchanged.
- Scoped precheck: 90 proof-bearing items checked, 90 passed, 0 failed; the 18 definitions record `precheck: n/a`.
- Strict proof contract: 90/90 items, 0 errors, 0 warnings; all 344 direct citations have exact source excerpts and complete use maps.
- Boundary audit: 720 dispositions, no template-reuse cluster. Its remaining six contradicted-disposition candidates were read and are false positives: each top-level claim is one-way, while the detector sees an `if and only if` only inside a cited Fact. The contract reasons state that distinction explicitly.
- Citation fidelity: 344 citations, no missing quote and no widening candidate. Finite-smoke found no item carrying a bounded-search obligation; the three generated witnesses were checked symbolically as recorded above.
- Coverage checklist: 2 pages, 157 harvested results, 0 errors, 0 warnings. Content policy: 108 scoped items, 0 errors, 0 warnings. Prosecheck: 108 items and 4 pages, 0 errors, 0 warnings.
- `validate-plan.mjs research/plan-spec.json` passed. `extcheck.mjs`, `citecheck.mjs`, and `depsource.mjs` completed without an error attributable to this batch. The risk report routed the structurally high-risk items to the required Step-6 reading lanes; no `risk_review` was fabricated by the author.
- The checkout-wide `depcheck.mjs`, `fwdcheck.mjs`, and `rendercheck.mjs` are not globally green because other concurrently authored files outside this batch currently contain errors. Filtering each result to the 108 batch ids produced no batch-2 finding. Specifically, the observed global failures were 38 unrelated depcheck errors, one unrelated unresolved list-monad link in fwdcheck, and renderer errors outside this batch after the three batch render defects were repaired.
- No boundary in the dispatch required an escalation, no needed item was missing, and no published dependency was suspected strongly enough to invoke the narrow repair protocol.

Confidence is high in the stated finite-group counts, chain-condition arguments, semisimple/Wedderburn-Artin orientation, integrality determinant trick, and the explicit counterexamples after the direct proof pass. I did not run either judge lane, did not set `verification.audited` or `verification.verified`, did not use a formal proof assistant, and did not rerun the three DNS-blocked source stamps recorded above. Step 6 should give particular attention to the Jordan-Hölder induction, the order-30 and order-105 classifications, the Prüfer subgroup classification, and the right-Noetherian triangular-ring witness.
