# frontier-13 Reader 4 — Step 6a independent read

## Scope and method

I opened and read all **55/55 scoped items**: 14 + 8 + 25 + 8 in the four manifest pages. I also opened all four composed page files, all four batch artifacts, and all **35 unique direct dependency items outside this batch** before assessing any `[F#]`/`[A#]`/`[L#]` restatement. For the source-locator findings below I checked the cited primary source at [Yufei Zhao, Chapter 2](https://yufeizhao.com/gtacbook/2.pdf), not merely the batch notes.

Every scoped mathematical item has both required provenance components. The statement labels are 42 `literature-derived` and 13 `ai-altered`; there are no declared `ai-generated` Statements/constructions in this batch, so the special load-bearing prohibition and heightened counterexample search were not triggered. The proof labels are 25 `ai-altered`, 21 `ai-generated`, and 9 `not-applicable`.

The mechanical checks are green: 55/55 scoped prechecks, 46/46 strict proof contracts, citecheck over 55 items, and content policy over 55 items. The findings below are semantic and source-level defects those checks did not detect.

## Findings — `erdos-hajnal-property-and-homogeneous-sets`

### `thm-ramsey-logarithmic-homogeneous-set-bound` — fatal

- **Exact location:** Facts `[L4]`, line 39; proof step 2.1, line 47.
- **What is wrong:** `[L4]` attributes both `log_2 x = log x/log 2` and `2^{log_2 x}=x` to `[[def-logarithm-to-a-base]]`. The cited item defines only the quotient `log_b x := log x/log b`; it does not state the inverse identity. Step 2.1 also uses monotonicity of the base-two exponential in passing from `2k-2 <= log_2 n` to `2^{2k-2} <= 2^{log_2 n}`, which neither `[L4]` nor another input supplies.
- **Why:** The inverse identity is stated in the separate on-disk item `thm-logarithm-change-of-base`, and exponential monotonicity likewise needs an explicit home. The displayed restatement inflates its cited dependency and licenses a step the real Definition does not.

### `thm-random-graph-logarithmic-homogeneous-set-upper-bound` — fatal

- **Exact location:** Facts `[L7]`, line 45; proof steps 1.1 and 4.1, lines 51 and 57.
- **What is wrong:** `[L7]` repeats the same unsupported inverse identity `2^{log_2 x}=x` under `[[def-logarithm-to-a-base]]`. Step 1.1 additionally needs base-two logarithm monotonicity to infer `log_2 n >= 4`, and step 4.1 takes a base-two logarithm of a product/power and infers the original positive quantity is below one. Those logarithm laws, inverse facts, and monotonicity are not in the cited Definition or any other listed input.
- **Why:** This is another inflated on-disk citation, not merely omitted explanatory prose; several numbered deductions rely on facts absent from their inputs.

No finding in the other **12/14** items on this page.

## Findings — `erdos-hajnal-property-and-homogeneous-sets-examples`

### `ex-bounded-order-graph-classes-are-erdos-hajnal` — nonfatal

- **Exact location:** Facts `[L3]`; proof steps 1.2 and 2.1, lines 43–45.
- **What is wrong:** From natural-log monotonicity and the quotient law alone, step 1.2 cannot conclude `N^(log 2/log N)=2`; that needs the definition of real powers and the exponential/log inverse identity. Step 2.1 also uses monotonicity of `x -> x^epsilon` on positive reals to obtain `n^epsilon <= N^epsilon`, but that fact is absent from the inputs and dependencies.
- **Why / severity:** These are real missing inputs, but adding the standard real-power items closes them immediately without changing the argument or Statement, so this is nonfatal under the 30-second rule.

No finding in the other **7/8** items on this page.

## Findings — `regular-pairs-and-induced-counting`

### Fatal proof and on-disk citation defects

#### `thm-szemeredi-regularity-lemma-with-tower-bound` — fatal

- **Exact location:** proof steps 1.2–3.1, lines 50–58.
- **What is wrong:** Step 1.2 ends with the incomplete phrase “`[L2] gives`” and states no conclusion. Step 2.2 nevertheless cites step 1.2 for the per-round inequality. That inequality is printed only *after* step 2.2 and cites future step 3.1, so the numbered derivation is circular. Step 3.1 then asserts that chopping witness cells and redistributing their leftovers produces an equitable refinement with the claimed part bound, while the energy-loss estimate needed for the displayed increment is never derived.
- **Why:** `[L1]` gives a nonequitable witness refinement and `[L2]` only bounds/monotonizes energy; neither supplies the equitization construction or its loss estimate. Zhao explicitly labels the equitable proof a sketch and leaves its details as Exercise 2.1.22, so the absent argument cannot be imported from the named source. The explicit recurrence and equitable conclusion are therefore not proved by the numbered steps.

#### `cor-regularity-refining-a-given-partition` — fatal

- **Exact location:** proof steps 2.2–3.1, lines 44–46.
- **What is wrong:** The arbitrary-refinement part is proved, but the equitable add-on says only to “split corresponding cells” and “enlarge the recurrence.” It neither constructs a globally equitable partition that still refines the prescribed initial partition nor bounds how the redistribution affects the witness energy gain.
- **Why:** `[L1]` supplies an arbitrary witness refinement, and `[L2]` supplies only the energy ceiling. Neither cited fact licenses the equitable construction or the asserted `epsilon^5/2` gain. Supplying the missing simultaneous equitization/loss argument is a substantive proof obligation, not a 30-second algebraic closure.

#### `thm-strong-regularity-lemma-by-energy-stabilisation` — fatal

- **Exact location:** Fact `[L2]`, line 42, used at proof step 1.1.
- **What is wrong:** `[L2]` says the cited `thm-szemeredi-regularity-lemma-with-tower-bound` provides “singleton handling ... for smaller graphs.” The cited theorem's Statement applies only when `n >= M` and contains no such small-graph conclusion. Step 1.1 uses the inflated restatement to initialize the construction for *every* finite graph.
- **Why:** A singleton/discrete-partition case could repair the proof quickly, but as written this is an inaccurate dependency restatement that is load-bearing for the universal Statement, hence fatal under the dispatch's citation rule.

#### `thm-induced-graph-removal-lemma` — fatal

- **Exact location:** proof step 3.1, line 52.
- **What is wrong:** The diagonal coarse pairs are bounded by `n^2/k`, followed by the assertion that the parameters can make the total edits below `epsilon n^2`. But `[L1]`, `thm-self-regular-representative-subsets`, gives only an upper bound `k <= K`; it gives no lower bound on `k`. For `k=1`, the displayed diagonal allowance is `n^2`, which no choice of the approximation parameters makes smaller than `epsilon n^2` when `epsilon<1`.
- **Why:** Step 3.1 uses a lower bound on the number of coarse parts that is absent from both the dependency and the proof. Zhao's proof instead controls the diagonal pairs through the same representative-density approximation; the separate `n^2/k` route written here does not close.

### Primary-source locator defects — fatal

Each row is an inaccurate `sources.references.title` at the cited URL. A second, possibly adequate reference elsewhere in an item does not make the Zhao entry accurate. These defects also mean the named Zhao locus does not substantiate the affected `literature-derived` component label as recorded.

| Item and exact location | Recorded locator | What the cited source actually contains / relevant location |
|---|---|---|
| `def-regular-and-equitable-vertex-partition`, frontmatter line 18 | “Definitions 2.1.7 and 2.1.18” | Definition 2.1.7 is regular partitions, but 2.1.18 is a **Remark on the necessity of irregular pairs**, not an equitable-partition definition. Equitability is introduced after Theorem 2.1.19 and used in Theorem 2.1.20. |
| `lem-energy-boost-for-an-irregular-pair`, frontmatter line 19 | “proof of Lemma 2.1.14” | The item's Statement is Zhao's **Lemma 2.1.13**. Lemma 2.1.14 is the partition-level increment that invokes 2.1.13. |
| `thm-szemeredi-regularity-lemma-with-tower-bound`, frontmatter line 19 | “Theorem 2.1.8 and proof” | 2.1.8 is a **Remark**. The ordinary lemma is Theorem 2.1.9; the equitable form is Theorem 2.1.20 and its proof is only sketched. |
| `cor-regularity-refining-a-given-partition`, frontmatter line 19 | “Exercise 2.1.17” | 2.1.17 is a **Theorem on a lower bound** for regular partitions, not this result. Arbitrary initial refinement is Theorem 2.1.19; the equitable machinery is around Theorem 2.1.20. |
| `thm-triangle-counting-lemma-for-regular-triples`, frontmatter line 19 | “Lemma 2.1.18” | 2.1.18 is the unrelated irregular-pairs Remark. The triangle counting result is **Theorem 2.2.1**. |
| `thm-counting-lemma-for-a-fixed-graph`, frontmatter line 19 | “Theorem 2.1.22” | 2.1.22 is an **Exercise completing equitable-regularity details**. The graph counting lemma is **Theorem 2.6.2**. |
| `thm-induced-counting-lemma-for-regular-pairs`, frontmatter line 19 | “Lemma 2.8.2” | No such lemma supports the claim. Zhao invokes **Theorem 2.6.2 with the induced variation in Remark 2.6.3(b)**. |
| `thm-graph-removal-lemma`, frontmatter line 19 | “Theorem 2.1.23” | 2.1.23 is an **Exercise on regular partitions**. Graph removal is **Theorem 2.6.5**. |
| `thm-strong-regularity-lemma-by-energy-stabilisation`, frontmatter line 19 | “Lemma 2.8.3” | The numbered result is **Theorem 2.8.3**, not a lemma. |
| `lem-energy-controls-density-approximation`, frontmatter line 19 | “Lemma 2.8.4” | 2.8.4 is a **Remark** interpreting strong regularity. Energy and approximation is **Lemma 2.8.7**. |

### Nonfatal and polish proof defects

#### `thm-induced-counting-lemma-for-regular-pairs` — nonfatal

- **Exact location:** proof steps 2.1–3.1, lines 48–50.
- **What is wrong:** For overlapping candidate sets `A,B`, the proportion of forbidden diagonal pairs is `|A intersection B|/(|A||B|)`, bounded by `1/max(|A|,|B|)`, not by `1/min_i |W_i|` as claimed. Candidate sets shrink during the greedy proof, so the stated host-size bound can be false by the reciprocal of that shrinkage factor.
- **Why / severity:** Tracking the fixed lower fraction retained by the greedy argument and choosing `N` larger by its reciprocal repairs the estimate locally. The Statement is not in doubt, so this is nonfatal under the 30-second rule.

#### `thm-large-self-regular-subset` — nonfatal

- **Exact location:** Statement lines 26–28; proof step 7.1, line 54; cited `def-epsilon-regular-pair`, lines 27–29.
- **What is wrong:** The Statement quantifies over every finite graph, and step 7.1 handles the null graph by taking `W = emptyset`. The cited Definition explicitly defines epsilon-regular pairs and epsilon-self-regular sets only for **nonempty** sets, so `(emptyset,emptyset)` is not epsilon-regular under the library convention.
- **Why / severity:** Restricting the theorem to nonempty graphs or adding an explicit null convention is an immediate boundary repair; the substantive positive-order argument is unaffected.

#### `lem-typical-degrees-in-a-regular-pair` — polish

- **Exact location:** proof steps 1.1–2.1, lines 41–45.
- **What is wrong:** Step 1.1 asks for a set of exactly `epsilon|X|` vertices, which need not be an integer. Step 1.2 also invokes “the same argument” before step 2.1 presents that argument and reuses `A` without selecting the upper-exception set.
- **Why / severity:** Choose a subset of cardinality `ceil(epsilon|X|)` (or use the whole exception set), define the upper set separately, and order the two averaging contradictions. This is local polish.

#### `lem-energy-increment-for-an-irregular-partition` — polish

- **Exact location:** proof step 4.1, line 49.
- **What is wrong:** Summing one orientation of each off-diagonal irregular pair does **not** have “the same normalized irregular weight as the ordered sum”; it has half the off-diagonal weight. The proof works only after saying that the selected witness refinement gives the same energy gain in both orientations and counting both contributions.
- **Why / severity:** This is a one-sentence symmetry correction; the Statement and construction remain valid.

#### `thm-triangle-counting-lemma-for-regular-triples` — polish

- **Exact location:** proof step 4.1, line 50.
- **What is wrong:** When `c < epsilon`, the factor `c-epsilon` is negative. Substituting lower bounds for `|Y_x|` and `|Z_x|` into `(c-epsilon)|Y_x||Z_x|` reverses the relevant inequality, so step 4.1 does not follow in the boundary case that the Statement expressly permits.
- **Why / severity:** Split off `c < epsilon`, where the claimed lower bound is nonpositive and hence trivial; run the multiplication argument only for `c >= epsilon`. This is a 30-second case split.

#### `thm-self-regular-representative-subsets` — polish

- **Exact location:** Statement line 29.
- **What is wrong:** The display contains `k,qquad k<=K` rather than `k,\qquad k<=K`; `qquad` is rendered as variables instead of spacing.
- **Why / severity:** Typographical only.

No finding in the other **10/25** items on this page.

## Findings — `regular-pairs-and-induced-counting-examples`

### Primary-source locator/provenance defects — fatal

| Item and exact location | Recorded locator | What is wrong |
|---|---|---|
| `ex-slicing-a-regular-pair-with-explicit-parameters`, frontmatter line 18 | “Exercise 2.1.5” | Exercise 2.1.5 is the alternate homogeneous-pair definition. The slicing/inheritance result instantiated here is **Exercise 2.1.4**. |
| `ex-triangle-counting-in-a-complete-tripartite-graph`, frontmatter line 18 | “Lemma 2.1.18” | 2.1.18 is an unrelated Remark; the relevant triangle-counting result is **Theorem 2.2.1**. |
| `ex-induced-path-counting-from-three-pure-pairs`, frontmatter line 18 | “Lemma 2.8.2” | That locator does not state this construction or the induced counting variation. The relevant general source is **Theorem 2.6.2 / Remark 2.6.3(b)**. |
| `cex-positive-pair-densities-alone-do-not-force-a-triangle`, frontmatter line 18 | “discussion after Lemma 2.1.18” | There is no such supporting locus: 2.1.18 is the irregular-pairs Remark, followed by initial-partition/equitable regularity. The counterexample is mathematically valid, but this citation does not support its `literature-derived` construction label. |

No mathematical proof defect was found in these four examples/counterexamples, and no finding in the other **4/8** items on this page.

## Per-page verdicts

| Page | Opened | Verdict |
|---|---:|---|
| `erdos-hajnal-property-and-homogeneous-sets` | 14/14 | **Fatal defects found:** two load-bearing `[L#]` restatements inflate `def-logarithm-to-a-base`. |
| `erdos-hajnal-property-and-homogeneous-sets-examples` | 8/8 | **No fatal defect found; nonfatal repair required:** one example omits the real-power facts used by two steps. |
| `regular-pairs-and-induced-counting` | 25/25 | **Fatal defects found:** the equitable regularity derivations do not close, strong regularity inflates a dependency, induced removal lacks a required lower bound on `k`, and ten source locators are inaccurate. |
| `regular-pairs-and-induced-counting-examples` | 8/8 | **Fatal citation/provenance defects found:** four Zhao locators point to unrelated or nonexistent results; the local mathematics read clean. |

**Scoped items actually opened: 55/55. Unique direct dependency items additionally opened: 35/35.**
