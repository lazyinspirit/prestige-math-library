# Independent reader 2 — frontier-15 batch 2

Scope: `research/frontier-15-batch-2.pages.json`. This report is the Step-6a independent read, not a judge verdict. Finding ids are permanent.

Final disposition: **37 fatal, 3 nonfatal, and 3 polish findings were confirmed. All 43 findings were repaired within the reader's licensed batch scope; no fatal defect remains open after the final re-read and gates.**

## Fatal findings

### R2-1 — `thm-nilpotence-is-detected-modulo-the-frattini-subgroup` — fatal

Exact location: Proof, steps 1.1–5.1; proof-contract `iff-forward` / `iff-reverse` rows.

The Statement is an iff, but the proof assumes only that $N/\Phi(G)$ is nilpotent and proves that $N$ is nilpotent. It never proves the converse, that a nilpotent $N$ has nilpotent quotient $N/\Phi(G)$. Step 5.1 merely says that it “record[s] the special equivalence” and cannot supply the absent direction. The contract nevertheless marks both iff directions checked. The missing direction needs the quotient-closure theorem for nilpotent groups.

### R2-2 — `thm-sylow-characterizations-of-finite-nilpotence` — fatal

Exact location: Proof, step 2.1.

Under the hypothesis that every maximal subgroup is normal, the proof says each quotient $G/M$ has prime order and that the diagonal image, as a subgroup of their product, is nilpotent. None of the cited facts licenses either inference: the cited maximal-subgroup theorem runs in the opposite direction (nilpotent implies maximal subgroups normal of prime index), and the proof does not cite Cauchy's theorem or closure of nilpotent groups under finite products and subgroups. Those facts are the load-bearing bridge to the reverse implication.

### R2-3 — `thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup` — fatal

Exact location: Proof, step 1.1.

The proof asserts that the product of the $p$-cores is an internal direct product. `[L2]` only treats products of normal subgroups for one fixed prime and `[L3]` characterizes a group after its Sylow subgroups have been shown normal; neither establishes that distinct $O_p(G)$ centralize, intersect trivially, and are the Sylow subgroups of their product. The cited inputs therefore do not license the nilpotence conclusion.

The containment argument has two further missing inputs: it uses that $O_p(G)$ is the *largest* normal $p$-subgroup without restating `def-p-core-of-a-finite-group`, and it calls a normal Sylow subgroup of $N$ unique/characteristic without citing Sylow conjugacy. Those clauses are necessary to place each Sylow subgroup of $N$ inside $O_p(G)$.

### R2-4 — `lem-products-of-normal-p-subgroups` — fatal

Exact location: Proof, step 2.1.

The proof uses $|AB|=|A||B|/|A\cap B|$ and asserts that $AB$ is normal. `[L2]` establishes only that $AB$ is a subgroup and that $A\cap B\trianglelefteq A`; `[L3]` is Lagrange's theorem. Neither cited Statement supplies the product-cardinality formula or normality of a product of two normal subgroups. These are the entire induction step, not a licensed algebraic consequence of the recorded inputs.

### R2-5 — `thm-correspondence-theorem-modules` — fatal

Exact location: Statement clause “They preserve ... successive quotients”; Proof, step 2.1; `deps` / Facts.

Step 2.1 invokes the third isomorphism theorem to establish the Statement's successive-quotient clause, but `thm-third-isomorphism-theorem-modules` is absent from `deps` and Facts. The current cited quotient definition and universal property do not state that clause. Because the extra clause is in the Statement, this is not merely an optional proof abbreviation.

### R2-6 — `thm-chain-conditions-in-short-exact-sequences` — fatal

Exact location: Proof, steps 1.1 and 3.1; `deps` / Facts.

The proof works with ACC and DCC, then concludes the Noetherian and Artinian formulations by “the established characterizations.” The two characterization theorems are not dependencies or Facts. In particular `[L1]` defines Noetherian by finite generation, not ACC, so the proof's first and last steps are not licensed by their declared inputs.

### R2-7 — `thm-jordan-holder-theorem-for-modules` — fatal

Exact location: Proof, steps 1.1, 3.1, and 4.1.

The announced induction is on the sum of the two series lengths. In the $A\ne B$ case, step 3.1 constructs a new series of $A$ by intersecting a series of $A$ with $C=A\cap B$ and appending $A$; step 4.1 then applies the induction hypothesis to that new series and the original series of $A$. The proof never shows that the sum of the lengths of this new pair is smaller than the original induction parameter, so the induction call is not licensed. A correct route is a strengthened induction on the length of one fixed series, together with the auxiliary fact that intersecting a finite simple-factor chain with a submodule produces a composition series after repetitions are removed.

### R2-8 — `cor-length-is-additive-in-short-exact-sequences` — fatal

Exact location: Statement iff clause; Proof, steps 1.1–3.1; proof-contract iff rows.

Steps 1.1–2.1 prove only that composition series for $N$ and $Q$ splice to one for $M$. The reverse implication—finite length of $M$ forces finite length of both $N$ and $Q$—is replaced by the sentence “Cover ... both directions” in step 3.1. It requires intersecting a composition series of $M$ with $N$ and projecting it to $Q$, deleting repetitions and checking that every remaining factor is simple.

### R2-9 — `thm-equivalent-characterizations-of-semisimple-modules` — fatal

Exact location: Proof, step 3.1; `deps` / Facts.

Step 3.1 writes $M=\operatorname{Soc}(M)\oplus C$, but `def-socle-of-a-module` is not a dependency or Fact, so the central submodule is undefined in the proof's inputs. The same step also says that a maximal proper submodule of a cyclic submodule can be complemented “inside that cyclic module”; the hypothesis only supplies a complement in $M$, and the proof must intersect that ambient complement with the cyclic submodule and identify the resulting simple quotient.

### R2-10 — `thm-equivalent-characterizations-of-semisimple-rings` — fatal

Exact location: Proof, step 2.1; `deps` / Facts.

Both directions of step 2.1 use the equivalence “semisimple module iff every submodule has a complement,” but `thm-equivalent-characterizations-of-semisimple-modules` is absent from `deps` and Facts. The cited closure theorem for submodules and quotients does not state this converse or the complement characterization.

### R2-11 — `thm-matrix-rings-over-division-rings-are-semisimple` — fatal

Exact location: Statement and `[L2]`; Proof, steps 1.1–2.1.

The theorem is about $M_n(D)$ for an arbitrary division ring, which may be noncommutative. `[L2]` cites `def-ring-matrix-product-identity-and-transpose`, whose Definition begins “Let $R$ be a commutative ring.” It therefore does not define or license matrix multiplication over the stated domain. The column-ideal proof also needs the noncommutative matrix-ring laws. The published dependency is not false and is not editable here; the in-flight theorem must define the general-ring matrix operations it uses or obtain an in-scope result with the correct domain.

### R2-12 — `thm-simple-modules-over-semisimple-rings` — fatal

Exact location: Proof, step 2.1.

The proof jumps from support on one matrix-ring factor to “Matrix units then identify it with ... $D_i^{n_i}$.” None of `[L1]`–`[L3]` states the classification of simple modules for a matrix ring, nor do they state the needed regular-module column decomposition. The missing argument must show that a simple module is a quotient of the regular module, decompose that regular module into simple column ideals, and obtain a nonzero column-to-module map, hence an isomorphism by simplicity.

### R2-13 — `cor-left-and-right-semisimplicity-agree` — fatal

Exact location: `[L4]`; Proof, steps 1.1–3.1; proof-contract `zero` row.

As in R2-11, `[L4]` is restricted to matrices over a commutative ring, while step 2.1 applies transpose/opposite-ring identities to matrices over arbitrary division rings. The citation has the wrong domain. In addition, Wedderburn–Artin `[L1]` explicitly assumes a nonzero ring, but the corollary's Statement includes the zero ring and the proof never handles it; the contract incorrectly marks `zero` not applicable.

### R2-14 — `thm-integrality-and-finite-module-equivalences` — fatal

Exact location: Proof, step 4.1; proof-contract `empty`, `zero`, `degenerate`, `endpoints`, and `iff-reverse` rows.

When a faithful module has zero generators, step 4.1 says that in the zero ring $b$ satisfies the “monic constant polynomial $1$.” Under the library's published polynomial convention, the zero polynomial has no leading coefficient and is not monic; in the zero ring the constant polynomial $1$ is the zero polynomial. The boundary argument and every contract row anchored to it are therefore false. In fact, the published convention makes the Statement itself false for the zero-ring extension: $A[b]=0$ is finite over $A=0$ and its zero module is faithful, while no element is integral because $A[X]$ has no nonzero, hence no monic, polynomial. The Statement must exclude the zero base ring (or change the library-wide definition, which is outside this batch's authority).

### R2-15 — `thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup` — fatal

Exact location: `[L4]` and Proof, step 3.1.

Step 3.1 needs the coset action's kernel to be contained in $H$ (indeed the core of $H$), but `[L4]` stops mid-clause: “The corresponding homomorphism ... has.” This is only the opening of the cited Statement, not a faithful citation of the clause used. The on-disk dependency does contain the needed kernel formula, so this is an in-flight citation-restatement defect rather than a weakness in the published dependency.

Steps 2.1–3.1 also use the product-cardinality formula to get $|H|=35$, the order $|S_3|=6$, and Lagrange's divisibility for the image in $S_3$, without recorded inputs. Step 4.1 establishes the normal Sylow subgroups but does not explicitly discharge the Statement's “not simple” clause. These defects are repaired under the same stable item finding.

### R2-16 — `cor-integral-elements-form-a-subring` — fatal

Exact location: title and Statement; `[L1]`; Proof, steps 1.1–3.1.

The Statement allows the zero-ring homomorphism $0\to0$. Under the published monic-polynomial convention, no element of the zero ring is integral, so the set of integral elements is empty and is not a unital subring. Moreover `[L1]` repeats the overbroad Statement from R2-14. The corollary needs the same nonzero-base hypothesis as its dependency, and its unqualified title must not continue to assert the excluded zero-base case.

### R2-17 — `lem-wielandt-sylow-binomial-valuation` — fatal

Exact location: `[L1]`, `[L2]`, and `[L5]`; Proof, steps 1.1–2.1.

All three load-bearing restatements stop before their operative clauses: `[L1]` ends at “so that” without defining $v_p$, `[L2]` ends at “then” after opening a second clause, and `[L5]` ends at “with” without giving the factorial recursion or falling-factorial product. The proof uses the valuation definition, its product law, and the factorial/falling-factorial expansions. The opened dependencies contain those clauses, but the Facts as written do not.

### R2-18 — `thm-order-of-automorphism-group-of-elementary-abelian-rank-two` — fatal

Exact location: `[L1]` and `[L8]`; Proof, steps 1.1–3.1.

`[L1]` ends at “Write” without defining $\operatorname{Aut}(G)$, and `[L8]` ends immediately before the formula and minimality property for $\langle S\rangle$. The proof counts elements of the former and uses the latter to test whether $v\in\langle u\rangle$, so the omitted clauses are load-bearing.

### R2-19 — `ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group` — fatal

Exact location: `[L4]`, `[L6]`, and `[L10]`; Verification, steps 2.1–4.1.

`[L4]` omits the semidirect-product multiplication, `[L6]` ends after “Moreover” before the conjugation formula, and `[L10]` ends before defining the unit group and $\varphi(n)$. The verification uses those clauses to define $B_p$, identify its normal canonical subgroup, and compute $|D|=(p-1)^3$.

### R2-20 — `thm-second-isomorphism-theorem-modules` — fatal

Exact location: `[L2]`; Proof, steps 1.1–2.1.

`[L2]` stops immediately before the definition $A+B=\{a+b:a\in A,b\in B\}$ and the assertion that it is a submodule. Both the map's codomain and its surjectivity argument use that omitted clause.

### R2-21 — `ex-integers-as-a-noetherian-non-artinian-module` — fatal

Exact location: `[L3]`; Verification, step 1.1.

`[L3]` ends at “and:” immediately before the dependency's classification of every subgroup of $\mathbb Z$ as $n\mathbb Z$. Step 1.1 cites precisely that absent conclusion to establish finite generation of every submodule.

### R2-22 — `ex-matrix-ring-decomposition-into-minimal-left-ideals` — fatal

Exact location: `[L3]`; Verification, step 1.1.

`[L3]` ends before the entry formula for a matrix unit. Step 1.1 invokes matrix units to send a nonzero vector to standard basis vectors, so the cited definition does not reach the clause used. The strengthened in-batch matrix-ring theorem also supplies the complete column decomposition, and its restatement must reflect that precise clause.

### R2-23 — `thm-groups-of-order-thirty-have-a-normal-sylow-subgroup` — fatal

Exact location: `[L2]`; Proof, steps 1.1–2.1.

The restatement of the coset-action theorem ends at “has” before its kernel formula. This is an incomplete and inaccurate citation of the dependency used to obtain the permutation homomorphism; the opened dependency states $\ker\rho=\operatorname{Core}_G(H)$.

### R2-24 — `thm-uniqueness-of-wedderburn-artin-data` — fatal

Exact location: Proof, step 1.1; `deps` / Facts.

Step 1.1 says that the regular module of $M_{n_i}(D_i)$ contains exactly $n_i$ copies of its column simple. The cited classification theorem identifies the simple-module types but does not state the regular-module multiplicities, and no Fact supplies the column-ideal decomposition. That multiplicity is the invariant used in step 3.1 to recover $n_i$, so the missing matrix-ring decomposition theorem is load-bearing.

### R2-25 — `ex-product-of-two-fields-is-semisimple` — fatal

Exact location: `[L2]`; Verification, steps 1.1–2.1.

`[L2]` restates the simple-module classification without its required hypotheses $r\ge1$, $n_i\ge1$, and “$D_i$ division rings.” Omitting the domain and quantifier restrictions is an inflated restatement even though this example later instantiates the valid case $r=2$, $n_i=1$.

### R2-26 — `thm-second-isomorphism-theorem-modules` — fatal

Exact location: `[L3]`; Proof, steps 1.1–2.1.

The restatement of `def-quotient-module` stops after calling $r(m+N)=rm+N$ a “proposed” action and omits the dependency's concluding clause that this well-defined action makes the cosets the quotient module. The proof then treats both source and target quotients as modules.

### R2-27 — `thm-third-isomorphism-theorem-modules` — fatal

Exact location: `[L2]`; Proof, steps 1.1–2.1.

As in R2-26, the quotient-module citation ends before well-definedness and the module conclusion, although the proof defines and applies a module homomorphism between the quotients.

### R2-28 — `thm-correspondence-theorem-modules` — fatal

Exact location: `[L1]`; Proof, steps 1.1–2.1.

`[L1]` gives only the proposed scalar formula and not the dependency's conclusion that it is well-defined and produces $M/N$ as a module. The entire submodule correspondence presupposes that omitted conclusion.

### R2-29 — `ex-prufer-p-group-is-artinian-not-noetherian` — fatal

Exact location: `[L5]`; Verification, steps 1.1–4.1.

The quotient-module restatement again stops before well-definedness and the resulting module, while the Example constructs and uses $\mathbb Q/\mathbb Z$ as a $\mathbb Z$-module. The original verification also asserted the complete subgroup classification of the Prüfer group without deriving it from the displayed fraction model; that classification is the load-bearing reason DCC holds.

### R2-30 — `thm-chain-conditions-in-short-exact-sequences` — fatal

Exact location: `[L5]`; Proof, step 1.1.

`[L5]` defines exactness at a term but omits the dependency's short-exact-sequence clause: injectivity of the first map, surjectivity of the second, and equality of image with kernel. Step 1.1 uses exactly those omitted clauses to identify $N$ with a submodule of $M$ and $Q$ with $M/N$.

### R2-32 — `def-p-core-of-a-finite-group` — fatal

Exact location: Definition, well-definedness paragraph.

The Definition calls the generated/product subgroup a normal $p$-subgroup and invokes $|AB|=|A||B|/|A\cap B|$, but its dependencies originally contained neither a product-subgroup result nor Lagrange/cardinality support. Since the largest-normal-$p$ conclusion is used later, this unproved well-definedness claim is load-bearing mathematical content, not definitional notation alone.

### R2-33 — `def-fitting-subgroup-of-a-finite-group` — fatal

Exact location: Definition, sentence after the display.

The Definition says that a finite product of normal subgroups is normal and independent of factor order without proving either claim or citing a result that states them. Those assertions are required for $F(G)$ to be a well-defined normal subgroup and later support R2-3.

### R2-34 — `thm-integrality-and-finite-module-equivalences` — fatal

Exact location: Statement and Proof, steps 1.1–4.1.

In addition to R2-14, the Statement uses “faithful $A[b]$-module” without defining faithfulness or citing any definition—none exists among the declared dependencies. The proof uses the operative annihilator clause twice. The repair must state explicitly that $rM=0$ implies $r=0$.

### R2-35 — `thm-wedderburn-artin-theorem` — fatal

Exact location: Proof, step 3.1; `deps` / Facts.

Step 3.1 uses the noncommutative identity $M_n(E)^{\mathrm{op}}\cong M_n(E^{\mathrm{op}})$ by transpose, but no Fact defines the opposite multiplication or states the matrix multiplication over arbitrary division rings needed to check it. The commutative transpose mnemonic is not valid with both products interpreted in $E$; the correct map reverses both the matrix product and the coefficient product. This orientation is load-bearing for recovering $R$ rather than $R^{\mathrm{op}}$.

### R2-36 — `lem-frattini-subgroup-nongenerator-characterization` — fatal

Exact location: `[L2]`; Proof, steps 1.1–2.1.

`[L2]` ends immediately before the formula and smallest-subgroup property for $\langle S\rangle$. Both directions of the proof use that missing clause to compare $\langle S\rangle$ and $\langle S,x\rangle$.

### R2-37 — `thm-submodules-and-quotients-of-semisimple-modules` — fatal

Exact location: title and Statement; `[L1]`; Proof, steps 1.1–2.1.

The proof uses the complement characterization whose cited Statement begins “Assuming the Axiom of Choice,” but this theorem's Statement was unconditional. The hypothesis cannot be silently dropped; it is required for the complement argument over arbitrary direct sums. Its title also gave no indication that the closure assertion had been restricted to Choice.

### R2-38 — `thm-socle-is-the-largest-semisimple-submodule` — fatal

Exact location: title and Statement; `[L2]`–`[L3]`; Proof, step 1.1.

The proof makes the sum of all simple submodules semisimple by the sum/direct-sum characterization, whose Fact explicitly assumes Choice, while the Statement omitted that hypothesis. Its closure dependency had the same hypothesis omitted from `[L3]`. Both restatements must preserve it, and the proposition-like title must not conceal the restriction.

## Nonfatal findings and polish

### R2-31 — `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian` — nonfatal

Exact location: Proof, step 2.1.

The sentence “quotients inherit it” had no supporting Fact. This is the standard quotient half of the preceding short-exact-sequence theorem and a competent reader can close the gap in under 30 seconds, so it is nonfatal under the dispatch rule. It was repaired by adding that theorem explicitly.

### R2-39 — `thm-finite-length-semisimple-module-characterizations` — nonfatal

Exact location: Proof, steps 1.1–2.1.

The advertised choice-free result was compressed to “finite length makes this process terminate” and “the same induction constructs complements,” without displaying the finite termination bound or either direction of the complement induction. These are short standard finite-length arguments rather than a false Statement, but the proof did not document why no Zorn/Choice step remained. The proof was expanded using a fixed $n$-factor series and finite induction.

### R2-40 — `cor-semisimple-rings-are-noetherian-and-artinian` — polish

Exact location: Proof, steps 2.1–3.1.

Step 2.1 called `[L3]` only indirectly, and step 3.1 said merely to “apply” left/right agreement without repeating the finite-length argument for the right regular module. Both gaps are immediately closable; the repair now cites the composition-series theorem and states the right-module repetition, including the zero ring.

### R2-41 — `def-composition-series-and-length-of-a-module` — nonfatal

Exact location: frontmatter `justified_by`.

The Definition says Jordan–Hölder proves independence of length but originally had no `justified_by` edge to that theorem. The mathematical sentence was accurate; the missing reverse justification was metadata rather than a false proof step. The edge was added.

### R2-42 — `thm-equivalent-characterizations-of-semisimple-modules` — polish

Exact location: Proof, step 2.1.

The original maximal-complement sentence said any missing simple summand enlarges $C$. A summand already contained in $N+C$ need not enlarge $C$ while staying disjoint from $N$; the correct finite check is that a summand *not contained in* $N+C$ has zero intersection with $N+C$, whereas maximality forces every summand into $N+C$. This is a local standard completion, not a false Statement.

### R2-43 — `thm-wedderburn-artin-theorem` — polish

Exact location: Proof, step 3.1, displayed transpose isomorphism.

The separator before $A\mapsto A^{\mathsf T}$ was the literal text `:quad` rather than the intended TeX spacing command. The formula remained mathematically intelligible, but the rendered display contained stray text. It was corrected to `,\qquad`.

## Changes

The findings above record the defects as found. The following repairs were then applied without renumbering any finding.

- **R2-1:** `thm-nilpotence-is-detected-modulo-the-frattini-subgroup` now proves both iff directions, proves $\Phi(G)$ normal, identifies the quotient Sylow subgroups, and handles the trivial group; its steps and boundary contract were rewritten.
- **R2-2:** `thm-sylow-characterizations-of-finite-nilpotence` now records the correspondence, Cauchy, and nilpotence-closure inputs and supplies the reverse implication, including the empty maximal-subgroup family.
- **R2-3:** `thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup` now proves pairwise commutation and trivial intersection of distinct $p$-cores, establishes the internal direct product, and justifies containment of every normal nilpotent subgroup using Sylow conjugacy and the largest-normal-$p$ property.
- **R2-4:** `lem-products-of-normal-p-subgroups` now proves normality directly and derives the product-cardinality formula from the fibres of $A\times B\to AB$, with Lagrange recorded.
- **R2-5 / R2-28:** `thm-correspondence-theorem-modules` now cites the third isomorphism theorem and gives a complete quotient-module Fact, licensing the successive-quotient clause.
- **R2-6 / R2-30:** `thm-chain-conditions-in-short-exact-sequences` now records the ACC/DCC characterizations and the full short-exact-sequence clauses and uses them explicitly in all four directions.
- **R2-7:** `thm-jordan-holder-theorem-for-modules` was rewritten as a valid finite induction, with the intersection/refinement argument and decreasing parameter made explicit.
- **R2-8:** `cor-length-is-additive-in-short-exact-sequences` now proves the reverse finite-length implication by intersecting and projecting a composition series, deleting repetitions, and counting factors; its iff and endpoint contract rows were corrected.
- **R2-9 / R2-42:** `thm-equivalent-characterizations-of-semisimple-modules` now declares the socle dependency and supplies the missing intersection and maximal-complement arguments.
- **R2-10:** `thm-equivalent-characterizations-of-semisimple-rings` now records and applies the semisimple-module complement characterization.
- **R2-11:** `thm-matrix-rings-over-division-rings-are-semisimple` now defines multiplication over an arbitrary division ring in its Statement and proves the ring laws, column decomposition, and simplicity without the commutative-ring matrix dependency.
- **R2-12:** `thm-simple-modules-over-semisimple-rings` now derives the classification from the regular-module column decomposition and a nonzero map from a simple column ideal.
- **R2-13:** `cor-left-and-right-semisimplicity-agree` now treats the zero ring and proves the transpose/opposite-ring identity over arbitrary division rings.
- **R2-14 / R2-34:** `thm-integrality-and-finite-module-equivalences` now assumes $A\ne0$, defines faithfulness in the Statement, eliminates the impossible zero-generated faithful-module case, and replaces all false zero-ring boundary dispositions.
- **R2-15:** `thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup` now quotes the coset-action kernel clause faithfully, records the product-order, symmetric-group-order, and Lagrange inputs, and explicitly derives non-simplicity.
- **R2-16:** `cor-integral-elements-form-a-subring` now carries the necessary nonzero-base hypothesis, names that restriction in its title, and cites the repaired integrality theorem faithfully.
- **R2-17:** all load-bearing valuation, arithmetic, and falling-factorial Facts in `lem-wielandt-sylow-binomial-valuation` were replaced by operative clauses from the cited items.
- **R2-18:** `thm-order-of-automorphism-group-of-elementary-abelian-rank-two` now gives the operative automorphism and generated-subgroup clauses rather than citation prefixes.
- **R2-19:** `ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group` now records the semidirect-product multiplication, conjugation formula, and unit-group/totient clauses used in its computation.
- **R2-20 / R2-26:** `thm-second-isomorphism-theorem-modules` now quotes the sum-submodule and complete quotient-module clauses.
- **R2-21:** `ex-integers-as-a-noetherian-non-artinian-module` now quotes the classification of subgroups of $\mathbb Z$ used in the verification.
- **R2-22:** `ex-matrix-ring-decomposition-into-minimal-left-ideals` now cites the complete column decomposition and the operative matrix-unit formula.
- **R2-23:** `thm-groups-of-order-thirty-have-a-normal-sylow-subgroup` now records the coset-action kernel formula used in the proof.
- **R2-24:** `thm-uniqueness-of-wedderburn-artin-data` now depends on the matrix-ring column decomposition and uses it to recover the regular-module multiplicities.
- **R2-25:** `ex-product-of-two-fields-is-semisimple` now preserves all positivity and division-ring hypotheses in its simple-module-classification Fact.
- **R2-27:** `thm-third-isomorphism-theorem-modules` now quotes the quotient-module well-definedness and module conclusion.
- **R2-29:** `ex-prufer-p-group-is-artinian-not-noetherian` now supplies the complete quotient-module clause and proves the classification of its proper subgroups from the displayed fraction model.
- **R2-31:** `thm-finitely-generated-modules-over-noetherian-rings-are-noetherian` now cites the short-exact-sequence theorem for quotient closure.
- **R2-32:** `def-p-core-of-a-finite-group` now proves that finite products of normal $p$-subgroups are normal $p$-subgroups and hence that the displayed largest subgroup is well-defined.
- **R2-33:** `def-fitting-subgroup-of-a-finite-group` now proves normality and order independence of the finite product.
- **R2-35:** `thm-wedderburn-artin-theorem` now records the opposite-ring definition and proves the noncommutative transpose isomorphism with the coefficient multiplication reversed correctly.
- **R2-36:** `lem-frattini-subgroup-nongenerator-characterization` now quotes the generated-subgroup formula and smallest-subgroup property used in both directions.
- **R2-37:** `thm-submodules-and-quotients-of-semisimple-modules` now states its Axiom of Choice hypothesis in both title and Statement and preserves it in the cited complement theorem.
- **R2-38:** `thm-socle-is-the-largest-semisimple-submodule` now states the Choice hypothesis in both title and Statement and preserves it in both semisimplicity Facts.
- **R2-39:** `thm-finite-length-semisimple-module-characterizations` now uses explicit finite induction and contains no hidden Zorn or Choice step.
- **R2-40:** `cor-semisimple-rings-are-noetherian-and-artinian` now cites the composition-series characterization directly and repeats the finite-length argument on the right, including the zero ring.
- **R2-41:** `def-composition-series-and-length-of-a-module` now has the reverse `justified_by` edge to Jordan–Hölder.
- **R2-43:** the malformed `:quad` separator in the displayed transpose isomorphism in `thm-wedderburn-artin-theorem` was corrected to valid TeX punctuation and spacing.

The corresponding dependency lists were updated in `research/frontier-15-batch-2.pages.json`. Every changed proof, citation, step number, and boundary disposition was regenerated or reconciled in `research/frontier-15-batch-2.proof-contracts.json`. Downstream contract quotes for the repaired $p$-core, Fitting, semisimple-module, and matrix-ring Statements were regenerated. No `verification.judge` field was present on a materially rewritten item, so there was no stale judge verdict to delete. `research/plan-spec.json`, published items, and other batches were not edited.

The three scoped `ai-generated` Statements are the leaf examples `ex-fitting-and-frattini-subgroups-of-s-three`, `ex-p-cores-fitting-and-frattini-subgroups-of-s-four`, and `ex-infinite-binary-product-ring-is-not-noetherian`. Their explicit computations/witnesses were rechecked and no counterexample was found. None is a dependency target; the content-policy gate independently confirms that no AI-generated Statement is load-bearing.

Final mechanical checks:

- mandated reflow was run on all 37 repaired content files; the final batch precheck passes 90/90 proof-bearing items, including all 34 repaired proof-bearing files (the other three repaired files are definitions);
- proof contracts: 90/90 items, 0 errors and 0 warnings;
- citation fidelity: 362 citations, every recorded quote present, no widening candidates;
- boundary audit: 720 rows, no template cluster and no contradicted disposition after manual resolution;
- content policy: 108 scoped items, 0 errors and 0 warnings;
- coverage checklist: 157 harvested results, 0 errors and 0 warnings;
- prose check: 0 errors and 0 warnings; render check: all 108 scoped files parse and render cleanly; citecheck: no missing canonical home;
- plan validation, dependency checking, and forward-reference checking report no hard errors. The dependency check's repository-wide warnings are pre-existing/outside this batch and do not identify a batch-2 defect.

The truncated-citation detector produced seven candidates in six items. Each was opened and cleared manually: each Fact contains the complete clause actually used, while the source continuation concerns an unused clause (finiteness/empty products, a `See` link, induced Hom maps, or later elaboration). No additional finding was manufactured from those false positives.

## Coverage and final page verdicts

- `sylow-theorems-and-nilpotent-groups`: opened all 42 manifest items. Fatal defects were found and repaired; final verdict: no unresolved fatal, nonfatal, or polish finding.
- `sylow-theorems-and-nilpotent-groups-examples`: opened all 11 manifest items. Citation defects were found and repaired; final verdict: no unresolved fatal, nonfatal, or polish finding.
- `chain-conditions-and-semisimple-modules`: opened all 43 manifest items. Fatal, nonfatal, and polish defects were found and repaired; final verdict: no unresolved finding.
- `chain-conditions-and-semisimple-modules-examples`: opened all 12 manifest items. Citation and proof defects were found and repaired; final verdict: no unresolved finding.

Items actually opened: **108**. Every title and Statement received a distinct comparison pass; every numbered proof step and every displayed dependency Fact was read against the cited item on disk. The final re-read found no additional defect.
