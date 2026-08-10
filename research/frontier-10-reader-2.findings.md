# Independent step-6 reader — `frontier-10`, batch 2

Date: 2026-08-11  
Role: independent step-6a reader  
Scope: 70 items on the four dispatched pages

## Outcome

I read all 70 assigned item files, both A-page summaries, both B-page shells,
all 56 proof contracts, and the actual primary section of every cited on-disk
dependency. I opened 60 distinct dependency sources during the citation audit;
this includes `thm-eulers-theorem`, whose unused edge was removed by finding F4.

- Fatal findings: **0**.
- Nonfatal findings: **6**, all repaired on disk and recorded below.
- Unrepaired mathematical or citation findings: **0**.
- Items or dependencies I could not check: **none**.

For every row marked **clean** below, I read the title and primary section,
checked each Fact against the cited item's actual Definition, Statement,
Example, or Remark, followed every numbered proof or verification step, and
tested the applicable empty, zero, one-factor, degenerate, endpoint,
nonempty-choice, and iff directions. “Clean” means that this read produced no
concrete false claim, missing hypothesis, inaccurate citation, or unlicensed
inference; it is not a certification of the item or of my repairs.

The six `provenance.statement: ai-generated` items were separately attacked for
counterexamples: `cex-additive-rationals-show-finiteness-is-essential`,
`cor-amalgamation-along-an-isomorphism-recovers-the-other-factor`,
`ex-c-two-free-product-c-three-is-infinite`,
`ex-canonical-map-from-free-product-to-direct-product`,
`ex-amalgamating-c-two-inside-c-four-and-c-six`, and
`ex-amalgamation-along-a-whole-factor`. I found no counterexample to any of
their actual claims.

## Findings and repairs

### F1 — `thm-internal-direct-product-recognition`

Severity: **nonfatal** (a competent reader can supply the standard missing
directions quickly).

Evidence: the original step 1.1 established commutativity, and hence that the
multiplication map is a homomorphism, only under the internal-intersection
condition. The proof did not establish commutativity from unique
factorisation. It also did not prove the reverse implication from an
isomorphic multiplication map to

$$N_i\cap\langle N_j:j\ne i\rangle=\{e\}.$$

The original steps therefore did not license all directions of the stated
three-way equivalence. None of L1–L5 alone supplied those omitted directions.

Repair: the proof now derives pairwise trivial intersections, and hence
commutativity, from either the internal condition or unique factorisation; it
proves the internal condition gives a bijective multiplication map; it proves
unique factorisation gives a bijective homomorphism; and it proves an
isomorphic multiplication map gives generation and the required intersection
condition. The empty and one-factor cases are explicit. The corresponding
citation uses, derivations, and boundary records were synchronized in
`frontier-10-batch-2.proof-contracts.json`.

### F2 — `lem-elementary-divisors-regroup-into-invariant-factors`

Severity: **nonfatal** (a citation-sized gap).

Evidence: original step 3.1 invoked uniqueness of prime factorisation to
recover the padded exponent columns, but none of L1–L5 stated unique prime
factorisation. I opened all five cited sources before making this finding.

Repair: added `thm-canonical-prime-factorisation` as dependency L6 and cited it
at step 3.1. Its exact Statement and use were added to the proof contract.

### F3 — `cor-number-of-abelian-groups-of-a-given-finite-order`

Severity: **nonfatal** (notation made the intended true claim imprecise).

Evidence: the original Statement wrote

$$n=\prod_p p^{a_p},\qquad \prod_pP(a_p),$$

without restricting the product to prime divisors. Locally, $P(a)$ was defined
as the number of partitions of a positive integer. Taken over all primes, the
formula therefore calls for undefined $P(0)$ terms and conflicts with the next
sentence's assertion that $n=1$ gives an empty product.

Repair: the Statement now uses the finite canonical factorisation
$n=\prod_{i<r}p_i^{a_i}$ with distinct primes and positive exponents, and the
answer is $\prod_{i<r}P(a_i)$. The $n=1$, $r=0$ boundary is explicit. The
consumer Fact in `ex-the-six-abelian-groups-of-order-three-hundred-sixty` and
both proof-contract quotations were synchronized.

### F4 — `ex-unit-group-modulo-one-hundred-decomposition`

Severity: **nonfatal** (several short but concrete verification gaps).

Evidence: the original verification inferred `ord(3)=20` after checking only
the proper divisors of 20, asserted without calculation that $-1$ is not a
power of 3, and asserted $\varphi(100)=40$. Its L2, Euler's theorem, states only
$a^{\varphi(n)}\equiv1\pmod n$ under coprimality; it neither computes
$\varphi(100)$ nor licenses the omitted subgroup-intersection check.

Repair: step 1.1 now lists the complete 20-power cycle modulo 100; step 2.1
observes directly that 99 is absent from the resulting subgroup; and step 3.1
counts 40 distinct products and proves that every unit representative is
divisible by neither 2 nor 5, leaving at most
$100-50-20+10=40$ units. Thus the products exhaust $U(100)$. The unused Euler
edge was removed, Facts were renumbered, and the proof contract was updated.

### F5 — `thm-normal-form-for-free-products`

Severity: **nonfatal** (the standard universal-property comparison was a
30-second compression).

Evidence: original step 1.1 said that free products “are identified by their
universal property” with the reduced-word model, but it did not construct the
comparison maps, and its Facts did not quote the free-product universal
property itself.

Repair: added `def-free-product-of-a-family-of-groups` as L3 and replaced the
compression by the two factor-compatible maps between an arbitrary free
product and the reduced-word model; uniqueness makes their composites the
identity. The exact Definition and derivation were added to the proof contract.

### F6 — `prop-kernels-of-amalgamating-maps-collapse-in-the-pushout`

Severity: **nonfatal** (a missing existential witness).

Evidence: steps 1.1–2.1 proved the two kernel-collapse formulas, but original
step 3.1 concluded that factor maps “need not” be injective without exhibiting
data for which the image of a kernel is nontrivial. The conditional collapse
formula alone does not establish that existential conclusion.

Repair: step 3.1 now takes any nontrivial $K$, with $G=1$, $H=K$, $f$ trivial,
and $h=\mathrm{id}_K$. Then $h(\ker f)=K$, so the canonical $H$-map is not
injective. The proof-contract derivation was synchronized.

## Item-by-item record

### A — `the-structure-of-finite-abelian-groups` (27 items)

| Item | Result of full read |
|---|---|
| `def-internal-direct-product-of-subgroups` | Clean — definition, normality, and empty/one-factor conventions checked. |
| `thm-internal-direct-product-recognition` | F1, nonfatal, repaired — all three implications and both boundary cases now explicit. |
| `def-p-primary-component-of-an-abelian-group` | Clean — $k=0$ includes the identity; no false finiteness assumption. |
| `thm-cauchy-for-finite-abelian-groups` | Clean — induction, cyclic branch, quotient branch, lift order, and vacuous base checked. |
| `thm-p-primary-component-of-a-finite-abelian-group` | Clean — subgroup closure, quotient contradiction, uniqueness, and $a=0$ checked. |
| `thm-primary-decomposition-of-a-finite-abelian-group` | Clean — coprime intersections, injectivity/order argument, and trivial group checked. |
| `lem-unique-subgroup-of-order-p-forces-cyclicity` | Clean — maximal-order contradiction and construction of the second order-$p$ subgroup checked. |
| `thm-maximal-order-cyclic-subgroup-splits-in-a-finite-abelian-p-group` | Clean — order-$p$ choice, quotient maximality, pullback intersection, and induction boundaries checked. |
| `thm-cyclic-decomposition-of-finite-abelian-p-groups` | Clean — maximal cyclic split and decreasing-order induction checked. |
| `def-elementary-divisor-data-for-a-finite-abelian-group` | Clean — multiset, prime-power, and trivial-group conventions checked. |
| `lem-successive-p-multiple-quotients-recover-elementary-divisors` | Clean — layer sizes, differences, termination, and intrinsicness checked. |
| `thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form` | Clean — existence and intrinsic multiplicities for every prime checked. |
| `def-invariant-factor-data-for-a-finite-abelian-group` | Clean — divisibility, omission of unit factors, and empty list checked. |
| `lem-elementary-divisors-regroup-into-invariant-factors` | F2, nonfatal, repaired — canonical factorisation now explicitly licenses uniqueness. |
| `thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form` | Clean — regrouping uniqueness, order formula, and empty product checked. |
| `cor-converse-of-lagrange-for-finite-abelian-groups` | Clean — strong induction, prime choice, quotient divisor, correspondence lift, and endpoint $d=|G|$ checked. |
| `def-exponent-of-a-finite-group` | Clean — nonempty annihilator set and trivial-group value checked. |
| `cor-order-and-exponent-from-invariant-factors` | Clean — product order, lcm argument, last-factor witness, and empty list checked. |
| `cor-finite-abelian-group-cyclic-iff-one-invariant-factor` | Clean — both directions and nontrivial hypothesis checked. |
| `def-indecomposable-finite-abelian-group` | Clean — nontrivial-factor and trivial-group conventions checked. |
| `thm-finite-abelian-groups-decompose-into-indecomposable-subgroups` | Clean — both induction branches and recombination of unique factorisations checked. |
| `cor-indecomposable-finite-abelian-groups-are-cyclic-prime-power` | Clean — elementary-divisor direction and uniqueness of order-$p$ subgroups in the converse checked. |
| `def-partition-of-a-positive-integer` | Clean — positivity, ordering, list equality, and finite-sum convention checked. |
| `cor-abelian-p-groups-of-order-pn-are-counted-by-partitions` | Clean — bijection, product order, uniqueness, and separate $n=0$ boundary checked. |
| `cor-number-of-abelian-groups-of-a-given-finite-order` | F3, nonfatal, repaired — finite prime indexing and $n=1$ now precise. |
| `def-squarefree-positive-integer` | Clean — equivalent exponent convention and $n=1$ checked. |
| `cor-all-abelian-groups-of-order-n-cyclic-iff-n-squarefree` | Clean — CRT direction, explicit noncyclic group when $p^2\mid n$, exponent check, and $n=1$ checked. |

### B — `the-structure-of-finite-abelian-groups-examples` (8 items)

| Item | Result of full read |
|---|---|
| `ex-z-six-in-elementary-divisor-and-invariant-factor-forms` | Clean — CRT map and both data formats checked. |
| `ex-the-five-abelian-groups-of-order-sixteen` | Clean — all five partitions and exhaustiveness checked. |
| `ex-successive-p-layers-read-a-cyclic-decomposition` | Clean — layer sequence and multiplicity differences recalculated. |
| `ex-the-six-abelian-groups-of-order-three-hundred-sixty` | Clean mathematically; its L3 Fact and contract quote were synchronized as part of F3. All six regroupings were recalculated. |
| `ex-complements-of-a-maximal-cyclic-subgroup-need-not-be-unique` | Clean — intersection, spanning formula, and distinct slopes checked. |
| `ex-unit-group-modulo-one-hundred-decomposition` | F4, nonfatal, repaired — full power cycle, intersection, and cardinality now proved. |
| `cex-additive-rationals-show-finiteness-is-essential` | Clean — AI-generated claim counterexample-tested; torsion-free argument and finite-order obstruction checked. |
| `fs-every-finite-group-is-a-product-of-cyclic-prime-power-groups` | Clean — $S_3$ is a valid finite nonabelian counterexample and direct products of cyclic groups are abelian. |

### A — `free-products-and-amalgamation` (27 items)

| Item | Result of full read |
|---|---|
| `def-free-product-of-a-family-of-groups` | Clean — quantifiers, uniqueness, arbitrary family, and non-assumed injectivity checked. |
| `def-reduced-syllable-word-in-a-family-of-groups` | Clean — identity exclusion, seam reduction, and empty word checked. |
| `lem-factor-elements-act-on-reduced-syllable-words` | Clean — all seam cases, inverse, and composition order checked. |
| `thm-reduced-syllable-words-form-the-free-product` | Clean — operation, associativity through permutations, inverses, universal map, uniqueness, and empty family checked. |
| `thm-normal-form-for-free-products` | F5, nonfatal, repaired — the universal-property isomorphism is now constructed explicitly. |
| `cor-torsion-in-a-free-product-is-conjugate-into-a-factor` | Clean — length-shortening, cyclic reduction, positive powers, and empty family checked. |
| `cor-center-of-a-free-product-is-trivial` | Clean — both terminal-factor cases in the normal-form contradiction checked. |
| `cor-free-product-factor-maps-are-injective` | Clean — one-syllable kernel test, including a trivial factor, checked. |
| `cor-free-products-are-unique-up-to-unique-isomorphism` | Clean — the two universal maps, inverse composites, and empty family checked. |
| `cor-each-factor-is-a-retract-of-a-free-product` | Clean — identity/trivial family of maps and the index-nonempty boundary checked. |
| `thm-presentation-of-a-free-product` | Clean — disjoint generators, relator restrictions, universal property, and empty/singleton families checked. |
| `thm-free-product-of-free-groups-on-disjoint-bases` | Clean — disjoint-union function bijection and nested universal properties checked. |
| `cor-free-product-of-infinite-cyclic-groups-is-free` | Clean — singleton universal property, tagged bases, and empty family checked. |
| `cor-z-free-product-z-is-free-group-of-rank-two` | Clean — two-element basis and rank definition checked. |
| `def-pushout-of-group-homomorphisms` | Clean — compatibility, mediator quantifiers, and allowance of kernels checked. |
| `thm-group-pushout-as-an-amalgamated-quotient` | Clean — relators, normal closure, quotient factorisation, uniqueness, and arbitrary kernels checked. |
| `def-free-product-with-amalgamation` | Clean — injectivity hypothesis and non-assumed factor embedding checked. |
| `thm-presentation-of-a-free-product-with-amalgamation` | Clean — generator relations imply all $K$-relations and quotient identification checked. |
| `def-normal-form-data-for-amalgamated-free-products` | Clean — left-coset representatives, terminal $K$ coefficient, length zero, and choice dependence checked. |
| `lem-factor-elements-act-on-amalgamated-normal-words` | Clean — inverse-normalisation orientation, seam rewrites, $P_{xy}=P_x\circ P_y$, and agreement on $K$ checked. |
| `thm-normal-form-for-free-products-with-amalgamation` | Clean — permutation action, inversion-normalisation involution, length preservation, uniqueness, length-zero case, and transversal independence checked. |
| `cor-factors-embed-in-a-free-product-with-amalgamation` | Clean — nonidentity factor normal forms, trivial factors, and whole-factor case checked. |
| `cor-factor-images-intersect-in-the-amalgamated-subgroup` | Clean — both inclusions, trivial amalgam, and whole-factor boundary checked. |
| `cor-trivial-amalgamation-is-the-free-product` | Clean — equality of universal properties and trivial factors checked. |
| `prop-kernels-of-amalgamating-maps-collapse-in-the-pushout` | F6, nonfatal, repaired — collapse formulas plus an explicit noninjective pushout witness now proved. |
| `cor-amalgamation-along-an-isomorphism-recovers-the-other-factor` | Clean — AI-generated claim counterexample-tested; compatible legs and mediator uniqueness checked. |
| `rem-free-product-and-amalgamation-conventions` | Clean — scope distinctions between arbitrary pushouts and injective amalgamation agree with the proved results. |

### B — `free-products-and-amalgamation-examples` (8 items)

| Item | Result of full read |
|---|---|
| `ex-two-involutions-generate-the-infinite-dihedral-group` | Clean — presentation and infinite order of $st$ checked by normal form. |
| `ex-c-two-free-product-c-three-is-infinite` | Clean — AI-generated claim counterexample-tested; reduced words of distinct lengths prove infinitude. |
| `ex-canonical-map-from-free-product-to-direct-product` | Clean — AI-generated claim counterexample-tested; surjectivity, kernel commutators, and reduced nonidentity commutator checked. |
| `fs-free-product-of-abelian-groups-is-abelian` | Clean — $C_2\ast C_2$ gives distinct reduced words $st$ and $ts$. |
| `ex-cyclic-amalgamation-with-relation-xm-equals-yn` | Clean — positivity gives injective edge maps, the presentation relation is exact, and factor embedding applies. |
| `ex-amalgamating-c-two-inside-c-four-and-c-six` | Clean — AI-generated claim counterexample-tested; order-two elements, embeddings, presentation, and intersection checked. |
| `fs-canonical-factor-maps-into-every-group-pushout-are-injective` | Clean — the explicit $C_2\to1\leftarrow C_2$-type collapse refutes injectivity. |
| `ex-amalgamation-along-a-whole-factor` | Clean — AI-generated claim counterexample-tested; general pushout computation and $C_4\to C_2$ instance checked. |

## Page-level read

The two A-page summaries accurately describe their item sets and prerequisites.
The two B-page bodies are empty as required; their mathematical content is in
the item cards. No page title or summary overstates what the items prove.

## Post-repair checks

The repaired item bodies were reflowed without further changes. Scoped
precheck passes all 56 proof-bearing items. Rendercheck passes all 70 items and
four page files with no delimiter, KaTeX, wikilink-in-math, or frontmatter
error. Scoped prosecheck has zero errors and five pre-existing heuristic
`count-in-prose` warnings. Content policy passes 70/70 with zero errors or
warnings; coverage passes 84/84 harvested results with zero errors or warnings;
strict proof contracts pass 56/56 with zero errors or warnings; and all four
dependency-source checks report zero unresolved dependencies. Finite-smoke has
no registered batch-2 checks and reports zero errors. `git diff --check` passes
for every repair and this report.

Alpha remains the sole adjudicator of every finding and repair above.
