# frontier-11 Step-6 reader-5 findings — batch 1

Date: 2026-08-12

Assignment: `field-extensions-and-the-complex-numbers` (order 54) and its
examples page, plus `conjugacy-and-simplicity-in-the-symmetric-groups` (order
64) and its examples page.

## Result

I read all 54 assigned items, every numbered proof step in the 49
proof-bearing items, every declared dependency citation, all four page files,
the batch notes, and the batch proof-contract file. I opened the cited item on
disk before assessing every citation. I found and repaired defects in 20 items:
15 had at least one fatal defect under the dispatch standard, and 5 had only
nonfatal gaps. No repair changes an item's title, Statement, mathematical
claim, status, or provenance.

The item text is ready for Alpha's mathematical review. The batch is not ready
to freeze for Step 7 because the forbidden-to-edit batch proof-contract is both
semantically unsound in its boundary evidence and stale after these repairs;
details are under **Artifact blocker**.

## Named checks

- **Four rewritten published items:**
  `def-complex-numbers-and-arithmetic`,
  `thm-complex-numbers-form-a-field`,
  `def-complex-conjugate-real-imaginary-part-and-modulus`, and
  `lem-complex-conjugation-and-modulus-laws` remain `status: published` with
  truthful `verification.precheck` and with neither `verification.audited` nor
  `verification.judge` re-added.
- **No order-167 reach:** none of those four items cites
  `def-p-norms-on-rn`, anything on `rn-as-a-normed-space`, or any Euclidean
  metric/norm item.
- **Triangle inequality:** `lem-complex-conjugation-and-modulus-laws` uses
  exactly
  $$(a^2+b^2)(u^2+v^2)-(au+bv)^2=(av-bu)^2\ge0,$$
  treats the sign case, and then invokes square monotonicity on nonnegative
  quantities. No forward norm reference occurs.
- **Coordinate-plane theorem:**
  `thm-complex-numbers-are-the-real-coordinate-plane` states only the
  coordinate bijection and coordinate arithmetic. It makes no claim that the
  modulus is $d_2$ or a Euclidean norm/metric.
- **Page summaries:** each A-page body is exactly two nonempty prose
  paragraphs, each under 150 words. Both B pages have no authored body.

## Defects repaired

The quoted “before” evidence below is the disk text I read before applying the
repair. All edits were minimal and remained inside assigned item files.

| classification | item and disk evidence | repair and exact effect |
|---|---|---|
| Nonfatal | `def-field-extension-generated-subfields-and-simple-extension`: the Definition asserted that a field homomorphism is injective without giving the one-line argument in its load-bearing section. | Preserved the existing Definition verbatim and appended the elementary kernel argument: if $\varphi(a)=0$ for $a\ne0$, then $1=\varphi(a^{-1})\varphi(a)=0$. The field-with-image identification is now licensed. |
| **Fatal** | `thm-centralizer-cardinality-from-cycle-type`: [F3] attributed the count of permutations of $c_k$ objects to `def-factorial-and-falling-factorial`, which only defines factorial; [F4] attributed the rule of product to `def-monoid-finite-product`, which only defines finite products. | Replaced those sources with `thm-number-of-bijections-of-a-finite-set` and `thm-product-rule`, and made [F3]/[F4] quote their actual cardinality statements. The counting proof is unchanged mathematically. |
| **Fatal** | `cor-symmetric-group-class-equation-by-cycle-type`: [F4] said its source states that a finite group is a disjoint union of conjugacy classes, but `thm-class-equation` states $|G|=|Z(G)|+\sum_i[G:C_G(x_i)]$. | Replaced [F4] by the theorem's actual formula and made step 3.1 explain that $|Z(G)|$ counts singleton classes and the sum counts the rest. |
| **Fatal** | `lem-conjugacy-class-splitting-over-an-index-two-normal-subgroup`, step 3.3: from an outside centralizer element written $c=th$, the displayed conclusion $txt^{-1}=h^{-1}xh$ did not follow. | Wrote the same coset element as $c=h^{-1}t$; centralizing $x$ then gives $txt^{-1}=hxh^{-1}$ directly. This repairs the false algebraic step without changing the criterion. |
| **Fatal** | `thm-alternating-conjugacy-class-splitting-criterion`: [F2] attributed multiplicativity of sign to the Statement of `cor-sign-from-disjoint-cycle-structure`, and step 2.2 needs multiplicativity for products of cycle powers. | Added and cited `thm-sign-is-a-homomorphism` for multiplicativity while retaining the cycle-sign corollary for $(-1)^{k-1}$. |
| **Fatal** | `thm-alternating-group-is-generated-by-three-cycles`: [F3] again attributed sign multiplicativity to the cycle-structure corollary. | Restricted [F3] to the corollary's actual cycle-sign statement. Multiplicativity was already supplied correctly by [F1]'s `thm-sign-is-a-homomorphism`, so no mathematical change was needed. |
| **Fatal** | `cor-only-proper-nontrivial-normal-subgroup-of-s-n`: [F3] said `thm-sign-is-a-homomorphism` also states that the kernel is $A_n$; it does not. | Added `def-alternating-group` and split [F3] into the homomorphism statement and the definition of its kernel. |
| **Fatal** | `ex-s-four-conjugacy-classes-and-class-equation`: [F3] used a source-description (“sign multiplies over disjoint cycles”) not stated by the cited corollary's Statement. | Replaced it by the exact cycle-sign and $(-1)^{n-c(\sigma)}$ formulas. The parity column is unchanged. |
| Nonfatal | `ex-klein-four-is-normal-in-a-four`: step 1.1 cited only “$A_4$ is the kernel of sign” to conclude that the displayed double transpositions are even. | Added the cycle-structure sign formula and explicitly computed $(-1)^{4-2}=+1$. |
| **Fatal** | `fs-same-cycle-type-implies-conjugate-in-a-n`: [F1] attributed “a $3$-cycle is even” to `def-alternating-group`, which only identifies the kernel of sign. | Added the cycle-sign corollary, stated its exact $k$-cycle formula, and computed $(-1)^2=+1$ in step 1.1. |
| Nonfatal | `fs-a-n-is-simple-for-all-n-at-least-four`: step 1.1 used [F1] to place the double transpositions in $A_4$ without an explicit parity source. | Added the cycle-structure sign formula and the calculation $(-1)^{4-2}=+1$. |
| Nonfatal | `thm-alternating-group-is-simple-for-n-at-least-five`: step 1.1 asserted that two concrete $3$-cycles lie in $A_n$ without an explicit fact licensing their parity. | Added [F4] from `def-alternating-group` and the cycle-sign corollary; step 1.1 now computes their sign before using them. |
| **Fatal** | `cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types`: [F1] attributed $\sum kc_k=n$ to `def-permutation-support-disjoint-cycles-and-cycle-type`, whose Definition only says that $c_k$ counts $k$-element orbits. | Made [F1] quote the Definition exactly and moved the equation to step 2.1, where it follows by counting the points in the orbit partition. |
| **Fatal** | `thm-every-complex-number-has-a-square-root`: [F2] applied conditional `thm-of-square-roots` without establishing that $\mathbb R$ is complete; step 4.1 also invoked coordinate multiplication without an explicit fact. | Added `cor-cauchy-reals-lub-complete` to [F2] and added [F5] quoting coordinate multiplication from `thm-complex-numbers-form-a-field`; step 4.1 now cites [F5]. |
| **Fatal** | `ex-rational-square-root-two-as-a-simple-extension`: the reader-facing construction applied the conditional square-root theorem without real completeness, and step 1.1 promoted an irreducible annihilator to the minimal polynomial without the algebraic-element/evaluation-kernel results. | Added real completeness, `def-algebraic-and-transcendental-elements`, and `thm-evaluation-kernel-and-minimal-polynomial`; [F3]/[F4] and step 1.1 now state the exact chain from existence through algebraicity and divisibility to the monic irreducible minimal polynomial. |
| **Fatal** | `ex-minimal-polynomial-of-nested-radical-two-plus-root-three`: the nested real square roots were sourced only to a theorem whose complete-ordered-field hypothesis had not been discharged; the algebraicity step was also implicit. | Added real completeness and the algebraic-element definition, made [F3]/[F5] explicit, and cited [F5] when squaring the radicals. The polynomial and degree claims are unchanged. |
| **Fatal** | `ex-square-roots-of-the-imaginary-unit`: [F2] used `thm-of-square-roots` at $2\in\mathbb R$ without citing completeness. | Added `cor-cauchy-reals-lub-complete` and made [F2] discharge the theorem's hypothesis. |
| **Fatal** | `cex-an-annihilating-polynomial-need-not-be-minimal`: the counterexample prose and step 1.1 used $\sqrt2$ through the conditional square-root theorem without establishing real completeness. | Added the completeness dependency and [F3], then cited [F3] for $a^2=2$. |
| Nonfatal | `cor-complex-numbers-are-a-quadratic-real-extension`: step 1.1 jumped from “$i$ is a root of an irreducible polynomial” to “that polynomial is minimal” without the algebraicity/evaluation-kernel bridge. | Added `def-algebraic-and-transcendental-elements` and `thm-evaluation-kernel-and-minimal-polynomial` as [F4], and cited it in step 1.1. |
| **Fatal** | `lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle`: [F4] attributed sign multiplicativity to the cycle-structure corollary's Statement; the final exhaustion also never explicitly disposed of the case in which the extremal $\sigma$ itself is already a $3$-cycle. | Made [F4] quote the exact cycle-sign/$(-1)^{n-c(\sigma)}$ formulas, added the immediate success case to step 1.3, and included it in step 3.1's exhaustion. |

## Items read with no defect found

Each item below was read in full, including every proof step and every cited
dependency. “Clean” means that I found no mathematical, citation, boundary, or
reader-facing claim defect.

### Field extensions and complex numbers

| item | finding |
|---|---|
| `cor-composite-of-two-subfields` | Clean. |
| `def-algebraic-and-transcendental-elements` | Clean. |
| `thm-evaluation-kernel-and-minimal-polynomial` | Clean. |
| `thm-simple-transcendental-extension-is-rational-expressions-in-the-generator` | Clean. |
| `thm-simple-transcendental-extensions-are-uniquely-f-isomorphic` | Clean. |
| `thm-irreducible-quotient-adjoins-a-root` | Clean. |
| `cor-every-nonconstant-polynomial-has-a-root-in-an-extension` | Clean. |
| `thm-universal-property-of-adjoining-an-irreducible-root` | Clean. |
| `thm-simple-algebraic-extension-quotient-power-basis-and-degree` | Clean. |
| `cor-stem-fields-are-uniquely-f-isomorphic` | Clean. |
| `lem-x-squared-plus-one-is-irreducible-over-the-reals` | Clean. |
| `def-complex-numbers-and-arithmetic` | Clean; critical rewrite/status check passed. |
| `thm-complex-numbers-form-a-field` | Clean; critical rewrite/status check passed. |
| `thm-complex-numbers-are-the-real-coordinate-plane` | Clean; coordinate-only restriction passed. |
| `cor-universal-property-of-the-complex-numbers` | Clean. |
| `def-complex-conjugate-real-imaginary-part-and-modulus` | Clean; critical rewrite/status check passed. |
| `lem-complex-conjugation-and-modulus-laws` | Clean; required Lagrange-identity triangle proof and no-forward-reference check passed. |
| `thm-real-automorphisms-of-the-complex-numbers` | Clean. |

### Field-extension examples

| item | finding |
|---|---|
| `ex-the-four-element-field-from-an-irreducible-quadratic` | Clean; the four-element multiplication check is recorded below. |
| `cex-reducible-polynomial-quotient-is-not-a-field` | Clean. |
| `fs-complex-numbers-form-an-ordered-field` | Clean. |

### Conjugacy and simplicity

| item | finding |
|---|---|
| `lem-conjugating-a-cycle-relabels-its-entries` | Clean. |
| `thm-symmetric-permutations-are-conjugate-iff-same-cycle-type` | Clean. |
| `cor-center-of-symmetric-group-is-trivial` | Clean. |
| `thm-adjacent-transpositions-generate-the-symmetric-group` | Clean. |
| `thm-an-n-cycle-and-a-neighbour-transposition-generate-the-symmetric-group` | Clean. |
| `cor-three-cycles-form-one-conjugacy-class-in-a-n` | Clean. |
| `def-simple-group` | Clean. |
| `lem-normal-subgroup-containing-a-three-cycle-is-a-n` | Clean. |
| `cor-derived-subgroups-of-symmetric-and-alternating-groups` | Clean. |

### Conjugacy and simplicity examples

| item | finding |
|---|---|
| `ex-conjugating-permutations-by-relabeling` | Clean. |
| `ex-s-five-conjugacy-classes-and-class-equation` | Clean. |
| `ex-a-five-conjugacy-classes-and-split-five-cycles` | Clean. |
| `fs-arbitrary-transposition-and-n-cycle-generate-s-n` | Clean. |

## Assigned page files

| page | finding |
|---|---|
| `library/abstract-algebra/field-extensions-and-the-complex-numbers.md` | Clean; two-paragraph A-page summary and item order checked. |
| `library/abstract-algebra/field-extensions-and-the-complex-numbers-examples.md` | Clean; B-page has no authored body. |
| `library/abstract-algebra/conjugacy-and-simplicity-in-the-symmetric-groups.md` | Clean; two-paragraph A-page summary and item order checked. |
| `library/abstract-algebra/conjugacy-and-simplicity-in-the-symmetric-groups-examples.md` | Clean; B-page has no authored body. |

## Finite-enumeration prose claims

I read all 14 `degenerate` boundary dispositions carrying written finite
enumeration claims. They occur on
`ex-the-four-element-field-from-an-irreducible-quadratic`,
`cex-reducible-polynomial-quotient-is-not-a-field`,
`thm-centralizer-cardinality-from-cycle-type`,
`cor-symmetric-group-class-equation-by-cycle-type`,
`lem-normal-subgroup-containing-a-three-cycle-is-a-n`,
`lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle`,
`thm-alternating-group-is-simple-for-n-at-least-five`,
`ex-s-four-conjugacy-classes-and-class-equation`,
`ex-s-five-conjugacy-classes-and-class-equation`,
`ex-a-five-conjugacy-classes-and-split-five-cycles`,
`ex-klein-four-is-normal-in-a-four`,
`fs-same-cycle-type-implies-conjugate-in-a-n`,
`fs-a-n-is-simple-for-all-n-at-least-four`, and
`fs-arbitrary-transposition-and-n-cycle-generate-s-n`.

Independent arithmetic/enumeration checks gave:

- For every $0\le n\le6$, direct permutation enumeration matched every
  centralizer size to $\prod_k k^{c_k}c_k!$ and made the induced class sizes
  sum to $n!$; the numbers of cycle types were respectively
  $1,1,2,3,5,7,11$.
- $S_4$ cycle-type sizes $1,6,3,8,6$, with
  $1+6+3+8+6=24$.
- $S_5$ cycle-type sizes $1,10,15,20,20,30,24$, summing to $120$.
- $A_5$ conjugacy-class sizes $1,20,15,12,12$, summing to $60$; the $24$
  five-cycles split into two size-$12$ classes.
- Every nonidentity element tested in $A_5$ has normal closure of size $60$.
- In $A_4$, the two inverse $3$-cycle orbits have size $4$ each; the displayed
  $V_4$ is closed and conjugation-invariant.
- $\langle(1234),(13)\rangle$ has order $8$ and preserves
  $\{\{1,3\},\{2,4\}\}$.
- In $\mathbb F_2[a]/(a^2+a+1)$, the multiplication rows on
  $(0,1,a,1+a)$ are respectively
  $(0,0,0,0)$, $(0,1,a,1+a)$, $(0,a,1+a,1)$, and
  $(0,1+a,1,a)$. Thus all three nonzero elements have inverses and there are no
  zero divisors.
- In $\mathbb Q[x]/(x^2-1)$, the nonzero degree-one classes of $x-1$ and
  $x+1$ multiply to zero.

No finite-enumeration prose claim was false.

## Artifact blocker and matters not changed

### Fatal proof-contract integrity defect

`research/frontier-11-batch-1.proof-contracts.json` has 181 boundary rows,
across 44 of its 49 proof-bearing items, marked `status: "checked"` whose
“evidence” contains prospective boilerplate. Typical rows say “Step 1.1 must
isolate...”, “must test...”, “must preserve...”, or “must check...”. Fourteen
of those rows append a concrete written finite-verification claim; those are the
owner-approved prose claims checked above. The other **167 rows** contain no
final evidence beyond the prospective instruction. For example, the `empty`,
`zero`, `one`, `degenerate`, and `endpoints` rows for
`thm-every-complex-number-has-a-square-root` are all marked checked using such
instructions even where the named boundary is not a meaningful case of the
theorem. A future-tense instruction is not evidence that the final disk proof
checked the boundary. This violates the durable proof-contract requirement for
an anchored disposition.

I did not edit this artifact because the reader dispatch expressly forbids any
edit to `research/frontier-11-batch-*`. Alpha/orchestrator must replace those
rows with evidence anchored to the final proof or mark genuinely irrelevant
cases `not_applicable` with an accurate reason.

### Contract and manifest synchronization after repairs

The strict contract check now reports 35 errors because the forbidden batch
contract still describes the pre-repair facts and step inputs. The affected
contract entries are
`cor-complex-numbers-are-a-quadratic-real-extension`,
`thm-every-complex-number-has-a-square-root`,
`ex-rational-square-root-two-as-a-simple-extension`,
`ex-minimal-polynomial-of-nested-radical-two-plus-root-three`,
`ex-square-roots-of-the-imaginary-unit`,
`cex-an-annihilating-polynomial-need-not-be-minimal`,
`thm-centralizer-cardinality-from-cycle-type`,
`thm-alternating-conjugacy-class-splitting-criterion`,
`lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle`,
`thm-alternating-group-is-simple-for-n-at-least-five`,
`cor-only-proper-nontrivial-normal-subgroup-of-s-n`,
`ex-klein-four-is-normal-in-a-four`,
`fs-same-cycle-type-implies-conjugate-in-a-n`, and
`fs-a-n-is-simple-for-all-n-at-least-four`.

The dependency arrays in `research/frontier-11-batch-1.pages.json` are also
stale for the 13 repaired items whose item-frontmatter dependency sets changed:
all entries in the preceding list except
`lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle`. (The
strict item/page policy gate does not compare these arrays for exact equality.)
I did not change the manifest because that is outside this reader's boundary.

These artifact repairs are a blocker to Step-7 freeze, not a blocker to the
mathematical item repairs completed here. There was no permissions blocker and
no claim I believed false but left in an assigned item.

## Validation

- Scoped precheck after the final edits: **19/19 proof-bearing changed items
  pass**; the changed Definition correctly remains `precheck: n/a`.
- Scoped `citecheck`: **20 items scanned, clean**.
- Scoped `prosecheck --strict`: **24 files, 0 errors, 0 warnings**.
- `content-policy` on the batch manifest with the approved re-home receipt:
  **54 scoped items, 0 errors, 0 warnings**.
- Repository `fwdcheck`: **pass**. The complex rewrite has no order-167
  forward reference.
- Repository `rendercheck`: **pass**.
- Repository `depcheck --pending-audit-ok`: **pass** (the pending-audit mode is
  required for the four deliberately unaudited published rewrites).
- Repository `extcheck`: **pass**; its existing global warnings do not concern
  this batch.
- Batch `finite-smoke`: **0 errors, 0 registered checks**, as expected; the 14
  finite assertions are prose dispositions, checked above.
- Batch `proof-contract --strict`: **35 errors**, all requiring the forbidden
  artifact synchronization described above. Independently, the structural
  checker does not detect the 167 unsupported prospective-only “checked” rows
  (within 181 rows containing prospective boilerplate).
- `git diff --check`: **pass**.
