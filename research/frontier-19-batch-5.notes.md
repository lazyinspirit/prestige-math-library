# frontier-19 · Beta-5 · batch notes — combinatorics batches `combinatorial-classes-and-the-symbolic-method` and `permutation-statistics-inversions-and-eulerian-numbers` (steps 1–2)

Run `frontier-19`, batch `5`, two A/B pairs, category `combinatorics`.
Author: Beta-5.
Design sections: [research/plan-combinatorics-and-categories.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-combinatorics-and-categories.md:4519) and [research/plan-combinatorics-and-categories.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-combinatorics-and-categories.md:4714).

Artifacts owned by this batch and written here:
`research/frontier-19-batch-5.pages.json`,
`research/frontier-19-batch-5.coverage.json`,
`research/frontier-19-batch-5.proof-contracts.json`,
and this file.
Nothing else in the repository was written.

No design-vs-spec drift was found in page ids, orders, or declared prerequisites. I carried the `requires` lists from `research/plan-spec.json` unchanged into the scaffold.

Legend for provenance tables below:
`L/N` = `literature-derived` statement, `not-applicable` proof.
`L/A` = `literature-derived` statement, `ai-altered` local proof.
`A/A` = `ai-altered` statement, `ai-altered` local proof or verification.
`G/G` = `ai-generated` non-load-bearing example/counterexample/false-statement with a checkable finite witness.

For every `G/G` item, the Step-5 author must keep `generation` frontmatter and explicitly verify the finite witness. No `G/G` item is a planned dependency target.

---

## 1. Per-page item list

### A page `combinatorial-classes-and-the-symbolic-method` — order 194.1 — 27 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `def-combinatorial-class-and-ordinary-generating-function` | definition | Combinatorial classes, counting sequences and ordinary generating functions |
| 2 | `def-neutral-and-atomic-classes` | definition | The neutral class $\mathcal{E}$ and the atomic class $\mathcal{Z}$ |
| 3 | `def-disjoint-union-and-cartesian-product-of-combinatorial-classes` | definition | Disjoint unions and Cartesian products of combinatorial classes |
| 4 | `thm-symbolic-sum-and-product-rules` | theorem | Disjoint union and Cartesian product translate to addition and multiplication of ordinary generating functions |
| 5 | `def-sequence-construction-of-a-combinatorial-class` | definition | The sequence construction $\operatorname{SEQ}(\mathcal{A})$ |
| 6 | `thm-sequence-construction-generating-function` | theorem | If $\mathcal{A}$ has no size-zero objects then $\operatorname{SEQ}(\mathcal{A})$ has generating function $1/(1-A(x))$ |
| 7 | `cor-binary-words-have-generating-function-one-over-one-minus-two-x` | corollary | Binary words have generating function $1/(1-2x)$ |
| 8 | `cor-compositions-have-generating-function-x-over-one-minus-two-x` | corollary | Positive-integer compositions have generating function $x/(1-2x)$ |
| 9 | `cor-compositions-with-k-parts-are-counted-by-binomial-coefficients` | corollary | Compositions of $n$ into $k$ positive parts are counted by $\binom{n-1}{k-1}$ |
| 10 | `def-multiset-and-powerset-constructions` | definition | The multiset construction $\operatorname{MSET}(\mathcal{A})$ and the powerset construction $\operatorname{PSET}(\mathcal{A})$ |
| 11 | `thm-multiset-product-formula` | theorem | If $\mathcal{A}$ has no size-zero objects then $\operatorname{MSET}(\mathcal{A})$ has generating function $\prod_{n\ge 1}(1-x^n)^{-a_n}$ |
| 12 | `thm-multiset-exponential-formula` | theorem | Over a commutative $\mathbb{Q}$-algebra, $\operatorname{MSET}(\mathcal{A})$ has generating function $\exp(\sum_{k\ge 1}A(x^k)/k)$ |
| 13 | `cor-integer-partitions-have-euler-product` | corollary | Integer partitions have generating function $\prod_{n\ge 1}(1-x^n)^{-1}$ |
| 14 | `thm-powerset-product-formula` | theorem | If $\mathcal{A}$ has no size-zero objects then $\operatorname{PSET}(\mathcal{A})$ has generating function $\prod_{n\ge 1}(1+x^n)^{a_n}$ |
| 15 | `thm-powerset-exponential-formula` | theorem | Over a commutative $\mathbb{Q}$-algebra, $\operatorname{PSET}(\mathcal{A})$ has generating function $\exp(\sum_{k\ge 1}(-1)^{k-1}A(x^k)/k)$ |
| 16 | `def-cycle-construction-of-a-combinatorial-class` | definition | The cycle construction $\operatorname{CYC}(\mathcal{A})$ |
| 17 | `lem-cyclic-rotation-fixed-tuples-are-periodic` | lemma | A tuple fixed by a cyclic rotation is determined by a shorter periodic block |
| 18 | `thm-cycle-construction-formula` | theorem | Over a commutative $\mathbb{Q}$-algebra, $\operatorname{CYC}(\mathcal{A})$ has generating function $\sum_{k\ge 1}\frac{\varphi(k)}{k}\log\frac{1}{1-A(x^k)}$ |
| 19 | `cor-necklaces-over-an-m-letter-alphabet` | corollary | The number of necklaces of length $n$ on an $m$-letter alphabet is $\frac{1}{n}\sum_{d\mid n}\varphi(d)m^{n/d}$ |
| 20 | `def-substitution-of-combinatorial-classes` | definition | Substitution of combinatorial classes |
| 21 | `thm-substitution-rule-for-ordinary-generating-functions` | theorem | If $B(0)=0$ then $\mathcal{A}\circ\mathcal{B}$ has generating function $A(B(x))$ |
| 22 | `def-pointing-of-a-combinatorial-class` | definition | Pointing a combinatorial class |
| 23 | `thm-pointing-rule-for-ordinary-generating-functions` | theorem | Pointing translates to $xA'(x)$ |
| 24 | `def-combinatorial-specification-and-order-raising-recursion` | definition | Combinatorial specifications and order-raising recursive specifications |
| 25 | `thm-order-raising-recursive-specifications-have-unique-solutions` | theorem | An order-raising recursive specification has a unique solution |
| 26 | `cor-plane-trees-satisfy-t-equals-z-over-one-minus-t` | corollary | Rooted plane trees satisfy $T(x)=x/(1-T(x))$ |
| 27 | `cor-binary-trees-satisfy-b-equals-one-plus-z-b-squared` | corollary | Rooted plane binary trees satisfy $B(x)=1+xB(x)^2$ |

### B page `combinatorial-classes-and-the-symbolic-method-examples` — order 194.2 — 11 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `ex-binary-words-as-sequences-of-two-atoms` | example | Binary words of length at most three from $\operatorname{SEQ}(2\mathcal{Z})$ |
| 2 | `ex-compositions-of-four-from-sequences` | example | The compositions of $4$ from $\operatorname{SEQ}_{\ge 1}(\operatorname{SEQ}_{\ge 1}(\mathcal{Z}))$ |
| 3 | `ex-partitions-with-parts-at-most-three` | example | Partitions with parts at most $3$ from a truncated multiset product |
| 4 | `ex-plane-trees-with-at-most-four-vertices` | example | Plane trees with at most four vertices from $T=\mathcal{Z}\times\operatorname{SEQ}(T)$ |
| 5 | `ex-binary-necklaces-of-length-six-in-two-colours` | example | Binary necklaces of length $6$ from both $\operatorname{CYC}(2\mathcal{Z})$ and Burnside's lemma |
| 6 | `ex-truncation-iteration-for-a-recursive-specification` | example | Iterating a recursive specification to determine coefficients through degree $6$ |
| 7 | `cex-an-infinite-level-is-not-a-combinatorial-class` | counterexample | A family with infinitely many objects of size $2$ is not a combinatorial class |
| 8 | `cex-a-non-disjoint-union-does-not-satisfy-the-sum-rule` | counterexample | Without disjoint copies, union does not add generating functions |
| 9 | `cex-a-product-without-unique-factorisation-does-not-satisfy-the-product-rule` | counterexample | A product class without unique factorisation does not have generating function $A(x)B(x)$ |
| 10 | `fs-sequence-construction-with-a-size-zero-object` | false-statement | FALSE: $\operatorname{SEQ}(\mathcal{A})$ is a combinatorial class even when $\mathcal{A}$ has a size-zero object |
| 11 | `fs-multiset-product-exists-for-every-coefficient-sequence` | false-statement | FALSE: $\prod_{n\ge 1}(1-x^n)^{-a_n}$ is a well-defined formal series for every sequence $(a_n)$ |

### A page `permutation-statistics-inversions-and-eulerian-numbers` — order 198.1 — 21 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `rem-permutation-statistics-conventions` | remark | This page uses the published inversion number and the shifted Eulerian indexing $A(n,k)$ |
| 2 | `def-descent-set-major-index-excedance-and-fixed-point` | definition | Descent sets, major index, excedances and fixed points of a permutation |
| 3 | `def-eulerian-number-and-eulerian-polynomial` | definition | Eulerian numbers and Eulerian polynomials |
| 4 | `def-q-integer-q-factorial-and-q-multinomial` | definition | The $q$-integer, $q$-factorial and $q$-multinomial coefficients |
| 5 | `def-lehmer-code` | definition | The Lehmer code of a permutation |
| 6 | `thm-lehmer-code-is-a-bijection` | theorem | The Lehmer code is a bijection $S_n\to\prod_{i=1}^{n}\{0,\dots,i-1\}$ |
| 7 | `cor-symmetric-group-has-factorial-cardinality-again` | corollary | The Lehmer code gives $|S_n|=n!$ again |
| 8 | `thm-q-factorial-counts-permutations-by-inversions` | theorem | The inversion generating function of $S_n$ is $[n]_q!$ |
| 9 | `def-foata-schutzenberger-transformation` | definition | Foata's recursive transformation on permutations |
| 10 | `lem-foata-transformation-is-bijective` | lemma | Foata's transformation is a bijection of $S_n$ |
| 11 | `thm-foata-transformation-sends-major-index-to-inversion-number` | theorem | Foata's transformation sends major index to inversion number |
| 12 | `cor-major-index-generating-function-is-q-factorial` | corollary | The major-index generating function of $S_n$ is $[n]_q!$ |
| 13 | `def-standard-cycle-form-and-foata-fundamental-transformation` | definition | Standard cycle form and Foata's fundamental transformation |
| 14 | `lem-anti-excedances-become-descents-under-foata-fundamental-transformation` | lemma | Under Foata's fundamental transformation, anti-excedances become descents |
| 15 | `thm-descents-and-excedances-are-equidistributed` | theorem | Descents and excedances are equidistributed on $S_n$ |
| 16 | `cor-eulerian-numbers-are-symmetric` | corollary | The Eulerian numbers satisfy $A(n,k)=A(n,n-1-k)$ |
| 17 | `thm-eulerian-recurrence` | theorem | The Eulerian numbers satisfy $A(n,k)=(k+1)A(n-1,k)+(n-k)A(n-1,k-1)$ |
| 18 | `thm-worpitzky-identity` | theorem | For every natural $m$, $m^n=\sum_{k=0}^{n-1}A(n,k)\binom{m+k}{n}$ |
| 19 | `cor-eulerian-polynomial-exponential-generating-function` | corollary | Over a commutative $\mathbb{Q}$-algebra, $\sum_{n\ge 0}A_n(t)x^n/n!=\frac{t-1}{t-e^{(t-1)x}}$ |
| 20 | `def-weak-order-on-the-symmetric-group` | definition | The weak order on $S_n$ by inversion-set inclusion |
| 21 | `def-bruhat-order-on-the-symmetric-group` | definition | The Bruhat order on $S_n$ by rank inequalities |

### B page `permutation-statistics-inversions-and-eulerian-numbers-examples` — order 198.2 — 8 items

| # | id | kind | title |
|---|---|---|---|
| 1 | `ex-s-four-statistics-table` | example | The permutations of $S_4$ tabulated by inversions, descents, major index and excedances |
| 2 | `ex-lehmer-code-and-q-factorial-for-s-four` | example | The Lehmer codes of $S_4$ recover $[4]_q!$ |
| 3 | `ex-foata-transformation-on-three-one-four-two` | example | Foata's transformation on the permutation $3\,1\,4\,2$ |
| 4 | `ex-a-four-two-computed-three-ways` | example | $A(4,2)=11$ by the recurrence, by Worpitzky's identity and by excedances |
| 5 | `ex-weak-and-bruhat-orders-in-s-three` | example | The weak and Bruhat orders on $S_3$ |
| 6 | `cex-same-descent-set-different-inversion-number` | counterexample | Two permutations can have the same descent set and different inversion numbers |
| 7 | `cex-eulerian-statistic-need-not-be-mahonian` | counterexample | The number of excedances is Eulerian but not Mahonian |
| 8 | `fs-major-index-equals-inversion-number-pointwise` | false-statement | FALSE: the major index equals the inversion number for every permutation |

The A pages are well below the 60-item ceiling. No split is proposed.

Landmarks to carry into Step 5:
`def-combinatorial-class-and-ordinary-generating-function`,
`thm-sequence-construction-generating-function`,
`thm-multiset-product-formula`,
`thm-cycle-construction-formula`,
`thm-order-raising-recursive-specifications-have-unique-solutions`,
`def-eulerian-number-and-eulerian-polynomial`,
`thm-lehmer-code-is-a-bijection`,
`thm-q-factorial-counts-permutations-by-inversions`,
`thm-foata-transformation-sends-major-index-to-inversion-number`,
`thm-descents-and-excedances-are-equidistributed`,
`thm-eulerian-recurrence`,
and `thm-worpitzky-identity`.

---

## 2. Per-pair richness report

Both passes were run on both A/B pairs.

### `combinatorial-classes-and-the-symbolic-method`

Proof-decomposition pass:
- The cycle-construction proof is split into `lem-cyclic-rotation-fixed-tuples-are-periodic` plus `thm-cycle-construction-formula`. Without the lemma, the Burnside proof would hide the one genuinely arithmetic step, namely the identification of the fixed tuples of a rotation.
- The recursive-specification branch is split by moving the order-raising hypothesis into `def-combinatorial-specification-and-order-raising-recursion`, so `thm-order-raising-recursive-specifications-have-unique-solutions` proves only the completeness-and-uniqueness step and the corollaries then specialise it to plane and binary trees.

Corollary pass:
- Added six mathematically meaningful consequences: binary words, positive compositions, compositions with fixed part-count, Euler's partition product, plane-tree equation, binary-tree equation, and necklace count.
- Declined the labelled symbolic-method table and all EGF material: it belongs to `set-partitions-stirling-numbers-and-exponential-generating-functions`, which is exactly the later page the design says owns it.
- Declined regular-language and transfer-matrix material from Flajolet-Sedgewick Part B: it belongs to `linear-recurrences-and-rational-generating-functions`, not to this purely formal page.

### `permutation-statistics-inversions-and-eulerian-numbers`

Proof-decomposition pass:
- The Mahonian branch is split into `def-foata-schutzenberger-transformation`, `lem-foata-transformation-is-bijective`, and `thm-foata-transformation-sends-major-index-to-inversion-number`.
- The Eulerian branch is split into `def-standard-cycle-form-and-foata-fundamental-transformation`, `lem-anti-excedances-become-descents-under-foata-fundamental-transformation`, and `thm-descents-and-excedances-are-equidistributed`.
- The inversion-count branch is split into `def-lehmer-code`, `thm-lehmer-code-is-a-bijection`, and then the two consequences `cor-symmetric-group-has-factorial-cardinality-again` and `thm-q-factorial-counts-permutations-by-inversions`.

Corollary pass:
- Added `cor-major-index-generating-function-is-q-factorial`, `cor-eulerian-numbers-are-symmetric`, and `cor-eulerian-polynomial-exponential-generating-function`.
- Declined the optional alternating-permutation theorem under the current scaffold: the mathematics is available below order 198, but the current `requires` list does not bring `the-exponential-function` into the planned judge context, and nothing later in this run needs the theorem.
- Reused the already-published cycle-type count instead of adding a duplicate theorem. That is mathematical seam repair, not pruning.

No page approaches the 60-item ceiling, so no split is recommended.

---

## 3. Findings for the step-3 Alpha

Ordered by severity. Each finding is one decision.

### Finding 1 — approve the CB-15 counterexample repair

What is wrong:
The CB-15 design asks for “two non-isomorphic classes with the same OGF” immediately after defining isomorphism as a size-preserving bijection. Under that convention, equal OGFs give equal counts in each size, hence a size-preserving bijection exists levelwise and the two classes are isomorphic. The proposed counterexample is impossible as stated.

Applyable edit:
File: `research/plan-combinatorics-and-categories.md`
Section: `## CB-15 (NEW). Combinatorial Classes and the Symbolic Method`

Exact old text:
> CEX: a "class" whose level $\mathcal{A}_2$ is infinite, so no OGF exists; two
> non-isomorphic classes with the same OGF (the counting sequence forgets
> structure — the item CB-20 will want).

Exact new text:
> CEX: a "class" whose level $\mathcal{A}_2$ is infinite, so no OGF exists; a
> product construction whose objects are not determined by their two components,
> so the product rule fails because factorisations are counted with multiplicity.

If declined:
The design continues to demand a mathematically impossible witness, and Step 5 either invents a false example or silently contradicts the page's own isomorphism convention.

### Finding 2 — approve reuse of the published cycle-type count on CB-16

What is wrong:
The CB-16 design treats the cycle-type count as a new theorem to be “homed here”, but the library already publishes both `thm-centralizer-cardinality-from-cycle-type` and `cor-symmetric-group-class-equation-by-cycle-type` on `symmetric-groups-and-the-sign-homomorphism`, which is order 44 and published on disk. Minting another theorem would violate the no-duplicate-id and no-duplicate-statement discipline.

Applyable edit:
File: `research/plan-combinatorics-and-categories.md`
Section: `## CB-16 (NEW). Permutation Statistics, Inversions and Eulerian Numbers`

Exact old text:
> the number of permutations by cycle type is $n!/\prod k^{m_k}m_k!$, which is the
> **cycle-index input CB-10 needs and is homed here so CB-10 can cite it**;

Exact new text:
> the published `cor-symmetric-group-class-equation-by-cycle-type` already gives
> the count $n!/\prod k^{m_k}m_k!$, so CB-10 should cite that order-44 result
> directly rather than reminting a duplicate theorem here;

If declined:
CB-16 either duplicates a published statement under a new id or quietly disagrees with the published seam that later pages can already cite.

### Finding 3 — decide the alternating-permutation branch explicitly

What is wrong:
The design marks the alternating-permutation theorem as optional, but the current batch spec does not list `the-exponential-function` in the page prerequisites. The theorem is mathematically available at order 175, but without a prerequisite amendment the page's planned read scope would omit the load-bearing real-exponential/trigonometric page.

Applyable edit:
File: `research/plan-combinatorics-and-categories.md`
Section: `## CB-16 (NEW). Permutation Statistics, Inversions and Eulerian Numbers`

Exact old text:
> the number of alternating permutations** and its EGF $\sec x+\tan x$ — kept only if
> the page stays under the cap, since it needs the formal trigonometric series.

Exact new text:
> the number of alternating permutations and its EGF $\sec x+\tan x$ — optional
> only if step 3 also amends this page's prerequisites to include
> `the-exponential-function`; otherwise defer it, because the current `requires`
> list would omit a load-bearing prerequisite from the judge context.

If declined:
Step 5 either omits a source-backed theorem without explanation or includes it against an incomplete planned prerequisite closure.

### Finding 4 — approve the second-proof stance on `cor-compositions-with-k-parts-are-counted-by-binomial-coefficients`

What is wrong:
This corollary restates the published stars-and-bars count, but by a genuinely different route: it falls out of the sequence specification on CB-15 rather than from the direct subset bijection of `thm-stars-and-bars`. The duplicate-proof policy permits this, but Step 5 must cross-link it explicitly to avoid a false duplication finding later.

Proposal:
Approve the corollary as scaffolded and require a Step-5 cross-reference from it to `thm-stars-and-bars`, and from the relevant CB-15 remarks back to the published theorem.

If declined:
The symbolic-method page loses one of its cheapest and most informative second-route consequences, and the bridge from OGFs back to the published stars-and-bars count stays implicit.

---

## 4. Forward references kept

None in the scaffolded item list.

The only deliberately deferred content is recorded in `research/frontier-19-batch-5.coverage.json`, not as item-level forward references.

---

## 5. New ids proposed, with grep evidence

Searches run:
- `rg -n 'def-combinatorial-class|ordinary-generating-function|def-neutral-and-atomic|sequence-construction|multiset-construction|powerset-construction|cycle-construction|substitution-of-combinatorial|pointing-of-a-combinatorial|recursive-specification-has-a-unique-solution|plane-tree-specification|binary-tree-specification|same-ogf|finite specification' items research/plan-spec.json`
- `rg -n 'Lehmer code|Eulerian polynomial|major-index|Foata|Worpitzky|weak order on the symmetric group|Bruhat order on the symmetric group|descents and excedances|q-factorial counts|alternating permutations|Euler numbers' items research/plan-spec.json`
- `rg -n 'binary words|compositions of|integer partitions|plane trees|binary trees|necklaces of length|truncation iteration|same descent set|Mahonian|Eulerian' items research/plan-spec.json`

Result:
- No conflicting ids were found for the proposed new items.
- The search did find the published `thm-centralizer-cardinality-from-cycle-type` and `cor-symmetric-group-class-equation-by-cycle-type`, which is why Finding 2 above recommends reuse rather than reminting.

---

## 6. Cross-batch dependencies

None required on another batch of `frontier-19`.

Downstream pages in later batches likely need this batch:
- `set-partitions-stirling-numbers-and-exponential-generating-functions` will consume the CB-15 symbolic-method seam and the CB-16 permutation-statistics seam.
- `counting-up-to-symmetry-burnside-and-polya` can cite the already-published cycle-type count plus CB-15's symbolic cycle construction.
- `lattice-paths-and-catalan-numbers` can cite CB-15's recursive-specification/fixed-point machinery.

---

## 7. Honest confidence statement

Confidence is medium-high on the scaffold shape and dependency closure.

Verified:
- The required docs, exemplar, latest batch outputs, both design sections, and relevant plan-spec entries.
- The published load-bearing dependencies actually cited in the scaffold, including the formal-series core, Burnside/Cauchy-Frobenius, totient, inversion/sign, cycle decomposition, and cycle-type counting.
- The main seam defects in the design prose: the impossible CB-15 counterexample and the duplicated CB-16 cycle-type theorem.
- `node tools/coverage-checklist.mjs research/frontier-19-batch-5.coverage.json` ran clean with `2 page(s), 64 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/prosecheck.mjs research/frontier-19-batch-5.notes.md --warnings` ran with warnings only: the required recountable item totals triggered `count-in-prose`, and there were no positional-claim errors.

Not yet verified:
- `node tools/source-fetch-check.mjs --coverage research/frontier-19-batch-5.coverage.json --stamp` did run, but every URL failed with `EAI_AGAIN` in the sandbox, so none of the 11 sources could be fetch-stamped from this session.
- I did not open a published item for alternating permutations, because the current scaffold defers that optional branch pending a prerequisite decision.
- I did not verify whether a later run already minted the q-analogues page id; `research/plan-spec.json` on disk does not currently expose a resolvable q-analogues page id for a more specific defer destination than `owner-decision`.

---

## 8. Web research ledger and dependency-closure statement

Working source ledger:
- `https://ac.cs.princeton.edu/home/AC.pdf` — Flajolet/Sedgewick Part A; supports the combinatorial-class definitions, the unlabelled symbolic constructions, cycle/substitution/pointing formulas, and the fixed-point design of recursive specifications. Convention note: the source uses the classical `\mathcal{E}`, `\mathcal{Z}`, `SEQ`, `MSET`, `CYC` dictionary and keeps labelled constructions separate in Chapter II, matching the design's split.
- `https://enumeration.ca/toolbox/combinatorial-constructions/` — Melczer Chapter 5; cross-checks the unlabelled constructions, recursive specifications, and the product/exponential formulas for `PSET` and `MSET`. Convention note: the neutral class is written `\epsilon` rather than `\mathcal{E}`.
- `https://aofa.cs.princeton.edu/30gf/` — Sedgewick/Wayne §3.9; supports the binary-word and composition consequences and the admissible-construction viewpoint.
- `https://math.mit.edu/~rstan/ec/ec1.pdf` — Stanley §§1.3-1.4 and 1.10; supports the Eulerian-number material, the q-factorial by inversions, and the Foata/MacMahon branch; §1.6.1 supports the optional alternating-permutation branch only.
- `https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/82adaee5af270067f5fcf1f96bb2510b_MIT18_212S19_lec9.pdf` — Postnikov/Lin lecture 9; cross-checks q-multinomial language, inversions, and the $[n]_q!$ route.
- `https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/0b039163b47d51f947e6fdbea5b99844_MIT18_212S19_lec10.pdf` — Postnikov/Lin lecture 10; supports major index, excedances, and the descents/excedances equidistribution route.
- `https://ocw.mit.edu/courses/18-212-algebraic-combinatorics-spring-2019/ed299749f0b9263dd8fd10caea717add_MIT18_212S19_lec12.pdf` — Postnikov/Lin lecture 12; supports Eulerian numbers and their recurrence. Convention note: this lecture uses the unshifted indexing where `A_{n,k}` counts permutations with `k` descents; the scaffold adopts the shifted indexing fixed in the design, so the conversion is explicit in `rem-permutation-statistics-conventions`.
- `https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/5.%20Permutation%20Inversions%20and%20q-Binomials/Permutation%20Inversions%20and%20q-Binomials.pdf` — Gotti lecture 5; cross-checks the inversion-table route and the q-factorial.
- `https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/13.%20Permutatios%20III/Permutations%20III.pdf` — Gotti lecture 13; cross-checks the Eulerian recurrence and Worpitzky identity.
- `https://manytamaris.lisn.upsaclay.fr/doku.php?id=permutations` — auxiliary notes for the weak-order definition. Convention note: it distinguishes left and right weak order; the scaffold uses inversion-set inclusion on one-line permutations, matching the source's left-order clause.
- `https://math.soimeme.org/~arunram/Resources/NOSPC1Permutations.html` — auxiliary notes for the Bruhat cover relation and transitive-closure definition.

Convention disagreements found:
- Eulerian-number indexing is shifted in the design and in Gotti, unshifted in Postnikov lecture 12. I kept the shifted indexing and made that explicit in the dictionary remark.
- The weak-order literature splits left and right weak order; the scaffold uses the inversion-set definition because it is the cleanest statement against the published inversion convention.
- The cycle construction, multiset construction, and powerset construction all admit both product and exponential/logarithmic forms; the exponential forms need a commutative `\mathbb{Q}`-algebra and are stated with that hypothesis at the statement, exactly as the design requires.

Fetch-verification status:
- The research stage used the web tool to inspect the cited sources, but the required on-disk fetch-verification step is mechanically blocked in this sandbox. The exact command failure was `EAI_AGAIN` on all 11 URLs, so `research/frontier-19-batch-5.coverage.json` is structurally complete but not stamped.

Dependency-closure statement:
- Every proposed published dependency named in `research/frontier-19-batch-5.pages.json` was opened from disk in this session before being used.
- Every load-bearing dependency in the scaffold is either an earlier item on the same A page, an earlier published page, or the earlier A page `combinatorial-classes-and-the-symbolic-method` for the CB-16 seam.
- No planned item depends on another batch of `frontier-19`.
- No planned dependency targets an item whose `provenance.statement` is `ai-generated`.

---

## 9. Provenance plan

### `combinatorial-classes-and-the-symbolic-method`

| id | prov | rationale |
|---|---|---|
| `def-combinatorial-class-and-ordinary-generating-function` | `L/N` | Directly from Flajolet/Sedgewick and Melczer; no proof component. |
| `def-neutral-and-atomic-classes` | `L/N` | Standard symbolic-method base classes from the same sources. |
| `def-disjoint-union-and-cartesian-product-of-combinatorial-classes` | `L/N` | Standard symbolic-method definitions. |
| `thm-symbolic-sum-and-product-rules` | `L/A` | Source-backed statement; local proof cites the published sum/product rules and formal-series coefficient extraction. |
| `def-sequence-construction-of-a-combinatorial-class` | `L/N` | Standard `SEQ` definition with the no-size-zero caveat. |
| `thm-sequence-construction-generating-function` | `L/A` | Source-backed theorem; local proof adapts the formal-series unit criterion to this library's published ring page. |
| `cor-binary-words-have-generating-function-one-over-one-minus-two-x` | `A/A` | Classical consequence assembled locally from `SEQ(2\mathcal{Z})`; second-route corollary, not a new theorem of the dependency spine. |
| `cor-compositions-have-generating-function-x-over-one-minus-two-x` | `L/A` | Source-backed as the standard composition consequence; local proof is the CB-15 route. |
| `cor-compositions-with-k-parts-are-counted-by-binomial-coefficients` | `A/A` | Same mathematical statement as the published stars-and-bars theorem, but a different route through symbolic classes; needs explicit cross-reference at Step 5. |
| `def-multiset-and-powerset-constructions` | `L/N` | Standard `MSET`/`PSET` definitions. |
| `thm-multiset-product-formula` | `L/A` | Source-backed statement; proof adapted to this library's summability formalism. |
| `thm-multiset-exponential-formula` | `L/A` | Source-backed statement; proof uses the published formal `exp`/`log` items. |
| `cor-integer-partitions-have-euler-product` | `L/A` | Source-backed classical consequence of `MSET(SEQ_{\ge1}(\mathcal{Z}))`. |
| `thm-powerset-product-formula` | `L/A` | Source-backed statement; local proof parallel to the multiset case. |
| `thm-powerset-exponential-formula` | `L/A` | Source-backed statement; local proof via formal `exp`/`log`. |
| `def-cycle-construction-of-a-combinatorial-class` | `L/N` | Standard unlabelled cycle construction. |
| `lem-cyclic-rotation-fixed-tuples-are-periodic` | `A/A` | Extracted helper fact from the fixed-point count used in cycle-construction proofs; source-backed but not lifted as a standalone named lemma in the backing texts. |
| `thm-cycle-construction-formula` | `L/A` | Source-backed cycle theorem; proof localised through the published Burnside theorem and the periodic-tuples lemma. |
| `cor-necklaces-over-an-m-letter-alphabet` | `L/A` | Standard necklace corollary from the cycle theorem. |
| `def-substitution-of-combinatorial-classes` | `L/N` | Standard substitution definition. |
| `thm-substitution-rule-for-ordinary-generating-functions` | `L/A` | Source-backed statement; proof routed through the published formal-composition laws. |
| `def-pointing-of-a-combinatorial-class` | `L/N` | Standard pointing definition. |
| `thm-pointing-rule-for-ordinary-generating-functions` | `L/A` | Source-backed statement; proof uses the published formal derivative. |
| `def-combinatorial-specification-and-order-raising-recursion` | `A/N` | Design-driven house definition that packages the exact hypothesis the fixed-point theorem uses; statement is source-based but adjusted to this library's x-adic language. |
| `thm-order-raising-recursive-specifications-have-unique-solutions` | `A/A` | Source-backed fixed-point theorem restated against the published x-adic completeness item. |
| `cor-plane-trees-satisfy-t-equals-z-over-one-minus-t` | `L/A` | Classical corollary from the recursive-specification theorem. |
| `cor-binary-trees-satisfy-b-equals-one-plus-z-b-squared` | `L/A` | Classical corollary from the recursive-specification theorem. |

### `combinatorial-classes-and-the-symbolic-method-examples`

| id | prov | rationale |
|---|---|---|
| `ex-binary-words-as-sequences-of-two-atoms` | `G/G` | Finite worked example produced locally from the theorem; witness is trivial to verify. |
| `ex-compositions-of-four-from-sequences` | `G/G` | Finite worked example; explicit list checks the construction. |
| `ex-partitions-with-parts-at-most-three` | `G/G` | Finite worked example from a truncated product; witness is checkable. |
| `ex-plane-trees-with-at-most-four-vertices` | `G/G` | Finite worked example from iterative specification. |
| `ex-binary-necklaces-of-length-six-in-two-colours` | `A/A` | Source-style example, but adapted to the library's published Burnside item and to length 6. |
| `ex-truncation-iteration-for-a-recursive-specification` | `G/G` | Local coefficient computation, fully checkable. |
| `cex-an-infinite-level-is-not-a-combinatorial-class` | `G/G` | Explicit witness family; verification is finite per level statement. |
| `cex-a-non-disjoint-union-does-not-satisfy-the-sum-rule` | `G/G` | Explicit finite witness; no load-bearing use. |
| `cex-a-product-without-unique-factorisation-does-not-satisfy-the-product-rule` | `G/G` | Explicit finite witness matching the design's trap. |
| `fs-sequence-construction-with-a-size-zero-object` | `G/G` | False statement with concrete witness object of size 0. |
| `fs-multiset-product-exists-for-every-coefficient-sequence` | `G/G` | False statement refuted by a concrete nonsummable witness sequence. |

### `permutation-statistics-inversions-and-eulerian-numbers`

| id | prov | rationale |
|---|---|---|
| `rem-permutation-statistics-conventions` | `A/N` | House remark fixing the published inversion orientation and the shifted Eulerian indexing before proofs start. |
| `def-descent-set-major-index-excedance-and-fixed-point` | `L/N` | Standard definitions from Stanley/Postnikov. |
| `def-eulerian-number-and-eulerian-polynomial` | `L/N` | Standard definitions; the shifted indexing is source-supported and fixed by the design. |
| `def-q-integer-q-factorial-and-q-multinomial` | `L/N` | Standard q-analogue definitions from Stanley, Gotti and Postnikov. |
| `def-lehmer-code` | `L/N` | Standard definition. |
| `thm-lehmer-code-is-a-bijection` | `L/A` | Source-backed theorem; local proof adapted to the library's one-line convention on `0,1,\dots,n-1`. |
| `cor-symmetric-group-has-factorial-cardinality-again` | `A/A` | Second-route corollary from the Lehmer-code bijection; not a new foundational theorem. |
| `thm-q-factorial-counts-permutations-by-inversions` | `L/A` | Standard MacMahon theorem. |
| `def-foata-schutzenberger-transformation` | `L/N` | Standard recursive Foata definition. |
| `lem-foata-transformation-is-bijective` | `A/A` | Source-backed but separated out to make the long Foata proof auditable. |
| `thm-foata-transformation-sends-major-index-to-inversion-number` | `L/A` | Standard Foata-MacMahon theorem. |
| `cor-major-index-generating-function-is-q-factorial` | `L/A` | Direct corollary of the Foata theorem and the inversion enumerator. |
| `def-standard-cycle-form-and-foata-fundamental-transformation` | `L/N` | Standard cycle-form transformation definition. |
| `lem-anti-excedances-become-descents-under-foata-fundamental-transformation` | `A/A` | Extracted helper lemma from the desc/exc bijection. |
| `thm-descents-and-excedances-are-equidistributed` | `L/A` | Standard Eulerian-statistic theorem. |
| `cor-eulerian-numbers-are-symmetric` | `L/A` | Classical corollary; proof uses the desc/exc route fixed on this page. |
| `thm-eulerian-recurrence` | `L/A` | Standard Eulerian recurrence. |
| `thm-worpitzky-identity` | `L/A` | Standard Worpitzky identity, with the natural-number form chosen to avoid a missing generalized-binomial dependency. |
| `cor-eulerian-polynomial-exponential-generating-function` | `L/A` | Standard EGF formula; proof written formally over a `\mathbb{Q}`-algebra. |
| `def-weak-order-on-the-symmetric-group` | `L/N` | Standard definition by inversion-set inclusion, chosen to match the published inversion item. |
| `def-bruhat-order-on-the-symmetric-group` | `A/N` | Source-backed definition, but adapted to the rank-inequality form so the page does not need extra Coxeter machinery. |

### `permutation-statistics-inversions-and-eulerian-numbers-examples`

| id | prov | rationale |
|---|---|---|
| `ex-s-four-statistics-table` | `G/G` | Finite exhaustive table, checkable by inspection. |
| `ex-lehmer-code-and-q-factorial-for-s-four` | `G/G` | Finite exhaustive example, checkable by list and weight count. |
| `ex-foata-transformation-on-three-one-four-two` | `G/G` | Local worked example of the recursive bijection. |
| `ex-a-four-two-computed-three-ways` | `G/G` | Finite check of three equivalent formulas. |
| `ex-weak-and-bruhat-orders-in-s-three` | `G/G` | Finite Hasse-diagram example, checkable directly. |
| `cex-same-descent-set-different-inversion-number` | `G/G` | Explicit finite witness. |
| `cex-eulerian-statistic-need-not-be-mahonian` | `G/G` | Explicit finite witness comparing `exc` and `inv` distributions. |
| `fs-major-index-equals-inversion-number-pointwise` | `G/G` | False statement with explicit witness in `S_3`. |

---

## 10. Continuity checkpoint

Current substage:
- Step 1-2 scaffold artifacts written; notes, coverage, and proof contracts drafted; structural checks run; fetch-stamping blocked by sandbox DNS.

Owned artifact paths:
- `research/frontier-19-batch-5.pages.json`
- `research/frontier-19-batch-5.coverage.json`
- `research/frontier-19-batch-5.proof-contracts.json`
- `research/frontier-19-batch-5.notes.md`

Completed checks:
- Required repo docs, exemplar item, latest batch outputs, design sections, and relevant published dependencies read.
- JSON syntax of `pages.json` and `coverage.json` checked with `node -e JSON.parse(...)`.
- JSON syntax of `proof-contracts.json` checked with `node -e JSON.parse(...)`.
- `coverage-checklist.mjs` passed.
- `prosecheck.mjs --warnings` completed with `count-in-prose` warnings only.

Open mathematical and dependency constraints:
- CB-15 uses the published formal-series pages heavily; no forward dependencies remain.
- CB-16 reuses the published cycle-type theorem and keeps the optional alternating-permutation theorem deferred unless Alpha widens prerequisites.
- The planned q-analogue defer destination is still `owner-decision` because no resolvable later q-analogues page id appears in `research/plan-spec.json` on disk.
- Source fetch-verification is blocked by `EAI_AGAIN` for every external host in the current sandbox, so the required `fetch_verified` stamps could not be added.

Exact next action:
- If the environment later regains DNS, rerun `node tools/source-fetch-check.mjs --coverage research/frontier-19-batch-5.coverage.json --stamp` first; otherwise hand this batch to Alpha with the explicit fetch-stamping blocker and the already-complete scaffold, notes, coverage ledger, and proof contracts.

## Continuity checkpoint

Current substage:
- Step-5 authoring reopened. Required repo docs, design sections, batch scaffold files, and Alpha-d's step-3 scaffold review are re-read from disk.

Owned artifact paths:
- `research/frontier-19-batch-5.pages.json`
- `research/frontier-19-batch-5.coverage.json`
- `research/frontier-19-batch-5.proof-contracts.json`
- `research/frontier-19-batch-5.notes.md`
- pending authored item files in `items/` for the two owned A/B pairs
- pending authored page files in `library/combinatorics/`

Completed checks:
- None for step 5 yet.
- Step-3 state remains the last clean scaffold state recorded above.

Frozen-text state:
- No step-5 item or page prose has been written yet.
- Accepted scaffold constraints still stand: CB-15 uses the repaired product-rule-failure counterexample, CB-16 reuses the published cycle-type count, and the alternating-permutation branch remains deferred under the current prerequisite closure.

Open mathematical and dependency constraints:
- Author exactly the two owned A/B pairs and nothing outside their id set.
- B-page items may cite only published items and their own A page.
- No item may use an `ai-generated` statement as a dependency target.
- Every proof-bearing item needs exact citation excerpts, one input-map entry per numbered step, and real boundary dispositions tied to authored steps.
- A-page summaries must be written last and must match the final authored item list and mathematics exactly.

Exact next action:
- Extract the final item/dependency scaffold from `research/frontier-19-batch-5.pages.json`, open the published dependencies most likely to be cited verbatim, and begin authoring the A-page items in dependency order.

## Continuity checkpoint

Current substage:
- Step-5 authoring in progress. The full `combinatorial-classes-and-the-symbolic-method` A/B item set is drafted on disk and its item-scoped `reflow` + `precheck` pass is clean.

Owned artifact paths:
- `research/frontier-19-batch-5.pages.json`
- `research/frontier-19-batch-5.coverage.json`
- `research/frontier-19-batch-5.proof-contracts.json`
- `research/frontier-19-batch-5.notes.md`
- drafted symbolic-method items in `items/`
- pending permutation-statistics items in `items/`
- pending page files in `library/combinatorics/`

Completed checks:
- `node tools/tsx-run.mjs tools/reflow.mts` on the symbolic-method pair
- `node tools/tsx-run.mjs tools/precheck.mts` on the symbolic-method pair, now clean after adopting the checker’s canonical step stratification

Frozen-text state:
- The symbolic-method item texts are materially drafted and mechanically stratified.
- No page files, permutation-statistics items, proof-contract sync, or final coverage/report updates are written yet.

Open mathematical and dependency constraints:
- The permutation-statistics pair still needs all of its A/B items authored.
- The symbolic-method false-statement about unrestricted multiset products has been scoped to the omitted size-zero/local-finiteness hypothesis; keep that rationale aligned in contracts and report.
- The remaining high-risk seam is the Foata / Eulerian branch on the permutation page, where citation fidelity and exact bijection statements will matter more than exposition density.

Exact next action:
- Open the published permutation, inversion, and cycle-form dependencies; draft the permutation-statistics A-page spine in dependency order, then its B-page finite witnesses.

## Step-3 fix pass

- `B5-1` — already correct. Evidence: [research/frontier-19-batch-5.pages.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-19-batch-5.pages.json:383) already uses `cex-a-product-without-unique-factorisation-does-not-satisfy-the-product-rule` instead of any impossible “same OGF, non-isomorphic classes” witness, and [research/frontier-19-batch-5.notes.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-19-batch-5.notes.md:171) already records the exact design repair Alpha approved.
- `B5-2` — already correct. Evidence: [research/frontier-19-batch-5.coverage.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-19-batch-5.coverage.json:245) records the fixed-cycle-type count as `already-published` under `cor-symmetric-group-class-equation-by-cycle-type`, [research/frontier-19-batch-5.notes.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-19-batch-5.notes.md:157) already defers the alternating-permutation branch because `the-exponential-function` is outside the current `requires` closure, and [research/frontier-19-batch-5.notes.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-19-batch-5.notes.md:190) already records the no-duplicate-theorem repair Alpha accepted.

## Step-5 authoring

Items authored:

### `combinatorial-classes-and-the-symbolic-method`

- `def-combinatorial-class-and-ordinary-generating-function` — `n/a`
- `def-neutral-and-atomic-classes` — `n/a`
- `def-disjoint-union-and-cartesian-product-of-combinatorial-classes` — `n/a`
- `thm-symbolic-sum-and-product-rules` — `pass`
- `def-sequence-construction-of-a-combinatorial-class` — `n/a`
- `thm-sequence-construction-generating-function` — `pass`
- `cor-binary-words-have-generating-function-one-over-one-minus-two-x` — `pass`
- `cor-compositions-have-generating-function-x-over-one-minus-two-x` — `pass`
- `cor-compositions-with-k-parts-are-counted-by-binomial-coefficients` — `pass`
- `def-multiset-and-powerset-constructions` — `n/a`
- `thm-multiset-product-formula` — `pass`
- `thm-multiset-exponential-formula` — `pass`
- `cor-integer-partitions-have-euler-product` — `pass`
- `thm-powerset-product-formula` — `pass`
- `thm-powerset-exponential-formula` — `pass`
- `def-cycle-construction-of-a-combinatorial-class` — `n/a`
- `lem-cyclic-rotation-fixed-tuples-are-periodic` — `pass`
- `thm-cycle-construction-formula` — `pass`
- `cor-necklaces-over-an-m-letter-alphabet` — `pass`
- `def-substitution-of-combinatorial-classes` — `n/a`
- `thm-substitution-rule-for-ordinary-generating-functions` — `pass`
- `def-pointing-of-a-combinatorial-class` — `n/a`
- `thm-pointing-rule-for-ordinary-generating-functions` — `pass`
- `def-combinatorial-specification-and-order-raising-recursion` — `n/a`
- `thm-order-raising-recursive-specifications-have-unique-solutions` — `pass`
- `cor-plane-trees-satisfy-t-equals-z-over-one-minus-t` — `pass`
- `cor-binary-trees-satisfy-b-equals-one-plus-z-b-squared` — `pass`

### `combinatorial-classes-and-the-symbolic-method-examples`

- `ex-binary-words-as-sequences-of-two-atoms` — `pass`
- `ex-compositions-of-four-from-sequences` — `pass`
- `ex-partitions-with-parts-at-most-three` — `pass`
- `ex-plane-trees-with-at-most-four-vertices` — `pass`
- `ex-binary-necklaces-of-length-six-in-two-colours` — `pass`
- `ex-truncation-iteration-for-a-recursive-specification` — `pass`
- `cex-an-infinite-level-is-not-a-combinatorial-class` — `pass`
- `cex-a-non-disjoint-union-does-not-satisfy-the-sum-rule` — `pass`
- `cex-a-product-without-unique-factorisation-does-not-satisfy-the-product-rule` — `pass`
- `fs-sequence-construction-with-a-size-zero-object` — `pass`
- `fs-multiset-product-exists-for-every-coefficient-sequence` — `pass`

### `permutation-statistics-inversions-and-eulerian-numbers`

- `rem-permutation-statistics-conventions` — `n/a`
- `def-descent-set-major-index-excedance-and-fixed-point` — `n/a`
- `def-eulerian-number-and-eulerian-polynomial` — `n/a`
- `def-q-integer-q-factorial-and-q-multinomial` — `n/a`
- `def-lehmer-code` — `n/a`
- `thm-lehmer-code-is-a-bijection` — `pass`
- `cor-symmetric-group-has-factorial-cardinality-again` — `pass`
- `thm-q-factorial-counts-permutations-by-inversions` — `pass`
- `def-foata-schutzenberger-transformation` — `n/a`
- `lem-foata-transformation-is-bijective` — `pass`
- `thm-foata-transformation-sends-major-index-to-inversion-number` — `pass`
- `cor-major-index-generating-function-is-q-factorial` — `pass`
- `def-standard-cycle-form-and-foata-fundamental-transformation` — `n/a`
- `lem-anti-excedances-become-descents-under-foata-fundamental-transformation` — `pass`
- `thm-descents-and-excedances-are-equidistributed` — `pass`
- `cor-eulerian-numbers-are-symmetric` — `pass`
- `thm-eulerian-recurrence` — `pass`
- `thm-worpitzky-identity` — `pass`
- `cor-eulerian-polynomial-exponential-generating-function` — `pass`
- `def-weak-order-on-the-symmetric-group` — `n/a`
- `def-bruhat-order-on-the-symmetric-group` — `n/a`

### `permutation-statistics-inversions-and-eulerian-numbers-examples`

- `ex-s-four-statistics-table` — `pass`
- `ex-lehmer-code-and-q-factorial-for-s-four` — `pass`
- `ex-foata-transformation-on-three-one-four-two` — `pass`
- `ex-a-four-two-computed-three-ways` — `pass`
- `ex-weak-and-bruhat-orders-in-s-three` — `pass`
- `cex-same-descent-set-different-inversion-number` — `pass`
- `cex-eulerian-statistic-need-not-be-mahonian` — `pass`
- `fs-major-index-equals-inversion-number-pointwise` — `pass`

Provenance per component with rationale:

- The provenance tables in `## 9. Provenance plan` remain the authoritative per-item rationale ledger for this batch.
- Two authoring-time adjustments were made against the scaffolded plan for honesty with the current rules:
  - The three false statements `fs-sequence-construction-with-a-size-zero-object`, `fs-multiset-product-exists-for-every-coefficient-sequence`, and `fs-major-index-equals-inversion-number-pointwise` were authored with `provenance.statement: ai-altered` rather than `ai-generated`, because generated false statements are not allowed in future batch scope.
  - The actual `fs-multiset-product-exists-for-every-coefficient-sequence` witness was scoped to the omitted size-zero/local-finiteness hypothesis. The raw positive-degree product itself is not the failing object; the falsehood is treating it as an unconditional multiset generating-function rule.

Ledger of scaffold deltas actually taken during authoring:

- `cor-integer-partitions-have-euler-product`
  Statement/proof unchanged in scope, but `deps` changed from `[def-neutral-and-atomic-classes, thm-multiset-product-formula]` to `[def-combinatorial-class-and-ordinary-generating-function, thm-multiset-product-formula]` because the authored proof builds the one-object-per-positive-size class directly instead of routing through the atomic class.
- `lem-cyclic-rotation-fixed-tuples-are-periodic`
  Added `thm-linear-congruence-solvability-and-solution-count` to `deps` because the authored proof closes the periodicity claim by the published congruence-solvability theorem rather than by an unstated coprime/unit argument.
- `cor-plane-trees-satisfy-t-equals-z-over-one-minus-t`
  Added `thm-formal-power-series-unit-criterion` and `lem-formal-order-laws` to `deps` because the authored order-raising verification uses the unit status of `1-Y` and the formal-order computation explicitly.
- `cor-binary-trees-satisfy-b-equals-one-plus-z-b-squared`
  Added `lem-formal-order-laws` to `deps` because the authored proof closes the order-raising estimate through the formal-order product law.
- `thm-worpitzky-identity`
  Added `thm-binomial-closed-formula` and `thm-pascals-rule` to `deps` because the authored induction simplifies the recurrence bracket by those exact binomial identities.
- `cor-eulerian-polynomial-exponential-generating-function`
  Added `prop-formal-derivative-algebra` to `deps` because the authored differential-equation proof uses formal differentiation rules directly.

Claims narrowed or dropped:

- No scaffolded item id was dropped.
- No page-level result was deferred beyond the already-scaffolded alternating-permutation branch.
- The only material scoping refinement inside an authored statement was the false-statement adjustment on `fs-multiset-product-exists-for-every-coefficient-sequence`, recorded above.

Gate state on Tuesday, August 25, 2026:

- `node tools/tsx-run.mjs tools/reflow.mts` — clean on both owned item sets after adopting canonical stratification
- `node tools/tsx-run.mjs tools/precheck.mts` — clean on both owned item sets
- `node tools/proof-contract.mjs research/frontier-19-batch-5.proof-contracts.json --strict` — `0 error(s), 0 warning(s), 49/49 item(s) checked`
- `node tools/coverage-checklist.mjs research/frontier-19-batch-5.coverage.json` — `2 page(s), 64 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs research/frontier-19-batch-5.pages.json` — `67 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json` — pass; only repo-wide `redundant-prereq` notes
- `node tools/prosecheck.mjs ... --warnings` on the four page files — `0 error(s), 0 warning(s)`
- `node tools/fwdcheck.mjs` — pass
- `node tools/extcheck.mjs` — pass
- `node tools/citecheck.mjs` — warnings only; no hard error attributable to the authored batch-5 files

Escalations / blockers:

- `node tools/depcheck.mjs` is still red, but the failure is a pre-existing repo-wide page cycle outside this batch:
  `isolated-singularities-and-laurent-series-examples -> isolated-singularities-and-laurent-series -> isolated-singularities-and-laurent-series-examples`.
  I did not touch that published complex-analysis pair, and no batch-5 page or item was named in the error.
- `git status --short` shows many unrelated dirty and untracked files from other frontier-19 batches and from repo/tooling work already in progress. I left them untouched.

Honest confidence statement:

- Moderate confidence in the authored mathematics and high confidence in the batch-local mechanical state (`precheck`, `proof-contract`, `coverage-checklist`, `content-policy`, `prosecheck`, `fwdcheck`, and `extcheck` are all clean on the authored slice).
- I did not isolate `depcheck` or `citecheck` to batch-5-only scope; `depcheck` remains blocked by the unrelated repo-wide page cycle noted above, and `citecheck` emits only heuristic warnings over the full repository.
- I did not run any judge or step-6 audit tooling; that is outside the authoring role.
