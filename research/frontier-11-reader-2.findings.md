# frontier-11 Step-6 independent-reader findings — reader 2, batch 3

Date: 2026-08-12  
Role: independent reader-2  
Scope: formal-power-series (193) and examples; extremal-graph-theory (219) and examples

## Verdict

I read all 60 assigned items, every numbered proof/verification/refutation step, all assigned-page prose, and every direct dependency item. After the item-level repairs recorded below, I found no false mathematical Statement, no proof that fails to establish its current Statement, and no hidden field-of-fractions or localisation claim.

The batch is **not ready to freeze** for two independent, unresolved reasons:

1. **Fatal source-harvest defect:** the Flajolet–Sedgewick range is still under-enumerated. Three named results in the declared range have no disposition.
2. **Fatal citation-contract defect:** all 49 proof-bearing items avoid labeled dependency facts, and all 49 proof contracts consequently have empty citations arrays. The proofs are manually readable, but the durable citation-fidelity contract required by SCHEMA.md and CLAUDE.md is absent.

I did not edit either defect because this dispatch expressly forbids editing research/frontier-11-batch-* artifacts. Alpha/orchestrator must route both repairs before freeze.

No repair below changes an item's mathematical claim or scope. Six items do have dependency-interface changes, listed explicitly under “Artifact reconciliation required.”

## Named check 1: Flajolet–Sedgewick is still under-enumerated

**Classification: fatal (canonical-coverage/source-faithfulness); not fixed.**

Disk evidence:

- research/frontier-11-batch-3.coverage.json:215-239 declares the range “Appendix A.5 Formal power series, pp. 730–731, and Appendix A.6 Lagrange inversion, pp. 732–733.”
- Its four rows dispose only Appendix A.5, Appendix A.6, Theorem A.2, and Note A.13.
- Direct inspection of the official PDF at the declared pages found three additional named headings:
  - printed p. 731: **A.10. The OGF of permutations**;
  - printed p. 733: **A.11. Lagrange–Bürmann inversion for fractional powers**;
  - printed p. 733: **A.12. Abel’s identity**.

None of these three headings appears anywhere in the coverage artifact. A.10 and A.12 are not used by any assigned proof and may warrant specific out-of-scope or deferred dispositions. A.11 is mathematically adjacent to the formal power and Lagrange–Bürmann items, but its fractional-power formula is not stated by the current Lagrange theorem; Alpha must decide whether to absorb, defer, or exclude it with a result-specific reason. In every case, the canonical-harvest rule requires an explicit row.

coverage-checklist.mjs reports 120 harvested rows and passes because it checks artifact structure, not faithfulness to the source; CLAUDE.md explicitly assigns the latter check to Step 6. I did not alter the forbidden coverage artifact.

## Named check 2: thm-formal-power-laurent-dictionary

**Mathematical verdict: sound at its current narrow scope.**

The current Statement says exactly what the proof establishes:

1. coefficient extension by zero embeds \(K\llbracket x\rrbracket\) injectively and multiplicatively in \(K((x))\);
2. its image is zero together with the nonzero Laurent series of nonnegative \(x\)-order;
3. every nonzero \(h\) has the unique factorisation
   \[
   h=x^{v_x(h)}u,\qquad u\in K\llbracket x\rrbracket^\times;
   \]
4. the inverse is \(x^{-v_x(h)}u^{-1}\);
5. over \(\mathbb R\), \(x^n\mapsto t^{-n}\) matches the published real Laurent convention.

Step 1.1 proves the embedding and image by coefficient extension and finite convolution. Step 1.2 shifts by the least exponent, invokes the checked unit criterion on the resulting nonzero constant coefficient, proves the inverse directly, and proves uniqueness by least exponent plus coefficient extensionality. Step 2.1 checks the real-coordinate convention against thm-laurent-series-field and lem-laurent-valuation.

A search through all 60 assigned item bodies found no occurrence of “field of fractions,” “fraction field,” “localization,” or “localisation.” The dictionary does not claim that \(K((x))\) is a fraction field, and no proof in either assigned pair reintroduces that claim.

One nonfatal notation/rendering defect was fixed: the title used undefined \(v(h)\) where the body uses \(v_x(h)\), and the displayed factorisation contained literal qquad rather than the LaTeX spacing command. The repair changes only notation and rendering, not the claim.

## Batch-wide citation-contract defect

**Classification: fatal (citation integrity); not fixed.**

Every proof-bearing batch-3 item puts all dependency references into one **Given:** paragraph and then cites the aggregate tag [given]. None contains an [F#], [A#], or [L#] fact. The disk counts are:

- 49 proof-bearing assigned items;
- 0 with a labeled dependency fact;
- 49 contracts in research/frontier-11-batch-3.proof-contracts.json;
- 0 citation rows across those contracts;
- 49 contracts with an empty citations array.

This conflicts with:

- SCHEMA.md:299-305, which requires one fact per paragraph beginning with its label and a faithful statement of the cited proposition; and
- CLAUDE.md:434-440 / QUALITY-CONTROLS.md:56-60, which require the durable proof contract to record the exact cited clause and every step using each labeled fact.

The aggregate Given summaries often describe a dependency's purpose rather than state its exact clause—for example, “Arithmetic modulo 4” previously attributed more to thm-integers-modulo-n-basic-algebra than its Statement says. I manually opened and checked every direct dependency, and the item-specific defects found by that read are repaired below, but the empty contract cannot preserve that audit.

proof-contract.mjs --strict passes because there are no labeled facts for it to demand citation rows for. That is a gate blind spot, not evidence of citation completeness. Repair requires labeling the facts, changing proof tags from aggregate [given] to the exact facts used, and populating the forbidden batch contract artifact. I therefore left this for Alpha/orchestrator rather than making item bodies and the immutable contract knowingly disagree even more.

## Fatal item defects fixed

### F1 — prop-formal-derivative-algebra

Step 1.3 wrote \(f=xF\) and \(g=xG\) “using the shift formula,” but neither the dependency list nor Facts named prop-coefficient-extraction-linearity-and-extensionality, which is the item that states that shift formula.

**Fix:** added that direct dependency and named its coefficient-shift and extensionality laws in Facts. Exact effect: the factorisations used in step 1.3 now have an explicit source. No claim or proof step changed.

### F2 — thm-lagrange-burmann-inversion

Step 1.1 defines \(\psi(u)=u/\phi(u)\). The hypothesis \(\phi(0)\ne0\) makes \(\phi\) invertible as a formal power series, but the unit criterion licensing that reciprocal was absent from dependencies and Facts.

**Fix:** added thm-formal-power-series-unit-criterion to dependencies and stated its reciprocal role in Facts. Exact effect: formation of \(u/\phi(u)\) is now licensed. No claim or proof step changed.

### F3 — ex-formal-series-over-zmod-four

The old Facts attributed all “Arithmetic modulo 4” to thm-integers-modulo-n-basic-algebra. That theorem's Statement gives the additive/multiplicative algebraic laws, but it does not state the quotient equality criterion \([a]_n=[b]_n\iff a\equiv b\pmod n\) or the defining product formula \([a]_n[b]_n=[ab]_n\), both used in step 1.1.

**Fix:** added direct dependencies on def-integers-modulo-n and def-addition-and-multiplication-modulo-n; restated the exact clauses in Facts; and made step 1.1 explicit:
\([2]_4\ne[0]_4\) because \(2\not\equiv0\pmod4\), while
\([2]_4[2]_4=[4]_4=[0]_4\).
Exact effect: the witness is now supported by the items that actually define its equality and multiplication. The mathematical claim is unchanged.

## Nonfatal defects fixed

### N1 — def-formal-order-and-x-adic-topology

“all two series” was a grammatical typo. Changed it to “any two series.” No mathematical effect.

### N2 — thm-formal-power-laurent-dictionary

Changed \(v(h)\) to \(v_x(h)\) in the title and fixed literal qquad to the LaTeX spacing command in the Statement display. Exact effect: title, Statement, proof, and cited Laurent notation now agree.

### N3 — ex-formal-square-root-one-minus-four-x

The Example and verification use “order at least 6” and congruence modulo \(x^6\), but did not declare the item defining those notions.

**Fix:** added def-formal-order-and-x-adic-topology and named the two notions in Facts. No arithmetic or claim changed.

### N4 — thm-formal-exponential-logarithm-identities

thm-formal-compositional-inverse was declared and described in Facts but no step used compositional inversion. The proof uses formal differentiation, exp/log identities, and locally finite rearrangement.

**Fix:** removed the unused dependency and its Facts phrase. No proof or claim changed.

### N5 — thm-hypergraph-kovari-sos-turan-bound

The Statement and proof use \(O_{r,s}\), \(\Omega_{r,s}\), and \(o\), but did not declare the batch's exact asymptotic-notation definition.

**Fix:** added def-asymptotic-extremal-notation-and-edge-density and named its role in Facts. The exponent calculation itself was independently checked:
\[
r-1+s\left(1-\frac1{s^{r-1}}\right)
=r+s-1-\frac1{s^{r-2}},
\]
so the comparison yields \(M=O_{r,s}(n^{r-1/s^{r-1}})\) as claimed.

### N6 — library/combinatorics/extremal-graph-theory.md

The first summary paragraph asserted what another published page means by “\(H\)-free,” despite that page not being a declared prerequisite. The assertion was true on inspection, but page-summary prose should not make undeclared claims about other pages.

**Fix:** replaced the external comparison with the local sentence that this page fixes ordinary-subgraph avoidance and then defines extremal numbers and balanced Turán graphs.

## Every assigned item read

The status “clean” below means that I read the full item and every cited dependency and found no item-specific mathematical or citation defect beyond the unresolved batch-wide fact-label/contract defect above. “Clean after fix” points to the exact repair already recorded.

### formal-power-series — 22/22 read

- def-formal-power-series-and-coefficient-extraction — clean.
- thm-formal-power-series-ring-and-polynomial-embedding — clean.
- prop-coefficient-extraction-linearity-and-extensionality — clean.
- def-formal-order-and-x-adic-topology — clean after N1.
- lem-formal-order-laws — clean.
- def-summable-family-of-formal-series — clean.
- thm-summable-families-and-rearrangement — clean.
- thm-x-adic-completeness-and-polynomial-density — clean.
- thm-formal-power-series-unit-criterion — clean.
- cor-formal-series-over-a-field-is-a-local-domain — clean.
- def-formal-series-composition — clean.
- thm-formal-composition-laws — clean.
- thm-formal-compositional-inverse — clean.
- def-formal-power-series-derivative — clean.
- prop-formal-derivative-algebra — clean after F1.
- def-formal-exponential-logarithm-and-powers — clean.
- thm-formal-exponential-logarithm-identities — clean after N4.
- cor-unique-formal-root-with-constant-one — clean.
- def-formal-laurent-series-and-residue — clean.
- lem-formal-residue-identities — clean.
- thm-lagrange-burmann-inversion — clean after F2.
- thm-formal-power-laurent-dictionary — mathematically clean after N2; named-check analysis above.

### formal-power-series-examples — 9/9 read

- ex-formal-geometric-series — clean.
- ex-negative-binomial-series — clean.
- ex-formal-square-root-one-minus-four-x — clean after N3.
- ex-lagrange-inversion-catalan-coefficients — clean.
- ex-reversion-of-x-over-one-minus-x — clean.
- cex-formal-nonunit-has-no-inverse — clean.
- cex-formal-composition-with-nonzero-constant — clean.
- cex-nonsummable-constant-family — clean.
- ex-formal-series-over-zmod-four — clean after F3.

### extremal-graph-theory — 20/20 read

- def-extremal-number-turan-graph-and-blowup — clean.
- lem-turan-graph-edge-count-and-balance — clean.
- thm-mantel-exact-and-unique — clean.
- lem-zykov-symmetrisation — clean.
- thm-turan-exact-and-unique — clean.
- cor-turan-ramsey-lower-bound — clean.
- def-asymptotic-extremal-notation-and-edge-density — clean.
- prop-normalized-extremal-number-monotonicity — clean.
- thm-turan-density-exists — clean.
- thm-extremal-graph-supersaturation — clean.
- def-zarankiewicz-number — clean.
- lem-kst-common-neighbour-double-count — clean.
- thm-kovari-sos-turan-bound — clean.
- cor-bipartite-extremal-density-zero — clean.
- def-uniform-hypergraph-and-complete-partite-hypergraph — clean.
- thm-hypergraph-kovari-sos-turan-bound — clean after N5.
- lem-colouring-embeds-a-graph-in-a-balanced-blowup — clean.
- thm-erdos-stone-for-balanced-blowups — clean.
- thm-erdos-stone-simonovits — clean.
- cor-chromatic-number-extremal-density — clean.

### extremal-graph-theory-examples — 9/9 read

- ex-turan-graph-t-ten-three — clean.
- ex-mantel-balanced-complete-bipartite — clean.
- ex-near-extremal-triangle-free-graph — clean.
- ex-turan-ramsey-colouring-witness — clean.
- ex-five-cycle-k-two-two-free — clean.
- fs-every-triangle-free-graph-is-bipartite — clean.
- ex-petersen-extremal-density — clean; the displayed odd cycle and explicit three-colouring were checked directly.
- ex-odd-cycle-extremal-density — clean.
- fs-erdos-stone-simonovits-determines-the-extremal-number-for-every-graph — clean.

## Page files read

- library/combinatorics/formal-power-series.md — clean.
- library/combinatorics/formal-power-series-examples.md — clean (empty body after frontmatter).
- library/combinatorics/extremal-graph-theory.md — clean after N6.
- library/combinatorics/extremal-graph-theory-examples.md — clean (empty body after frontmatter).

## Dependency items inspected

Every intra-batch dependency was read as one of the 60 items above. I also opened and checked all 35 direct dependencies outside the assigned batch:

- cor-complete-graph-edge-count
- def-addition-and-multiplication-modulo-n
- def-binomial-coefficient
- def-clique-and-independence-numbers
- def-commutative-ring
- def-field
- def-finite-cardinality
- def-finite-simple-graph
- def-finite-sum-in-a-commutative-monoid
- def-formal-laurent-series
- def-graph-adjacency-incidence-neighbourhood-and-degree
- def-integers-modulo-n
- def-off-diagonal-ramsey-number
- def-petersen-graph
- def-polynomial-ring-over-a-commutative-ring
- def-prime-and-maximal-ideals
- def-proper-vertex-colouring-and-chromatic-number
- def-ramsey-colouring-and-arrow-notation
- def-ring-homomorphism
- def-standard-complete-bipartite-path-and-cycle-graphs
- def-subgraph-induced-subgraph-and-spanning-subgraph
- def-zero-divisor-and-integral-domain
- lem-finite-sum-reindexing-and-fubini
- lem-laurent-series-ring
- lem-laurent-valuation
- lem-ring-units-form-a-group
- rem-finite-simple-graph-convention
- thm-bipartite-iff-no-odd-cycle
- thm-double-counting
- thm-integers-modulo-n-basic-algebra
- thm-laurent-series-field
- thm-monotone-convergence
- thm-polynomial-ring-is-a-commutative-ring
- thm-rat-field
- thm-stars-and-bars

Except for the overbroad modulo-4 attribution repaired in F3, each dependency Statement/Definition supplies the clause for which the assigned item invokes it. I did not infer weakness from a title or summary; I inspected the dependency body first.

## Artifact reconciliation required

This reader was forbidden to edit research/frontier-11-batch-*. Consequently, research/frontier-11-batch-3.pages.json still has the pre-repair dependency arrays for:

- prop-formal-derivative-algebra — add prop-coefficient-extraction-linearity-and-extensionality;
- thm-lagrange-burmann-inversion — add thm-formal-power-series-unit-criterion;
- ex-formal-series-over-zmod-four — add def-integers-modulo-n and def-addition-and-multiplication-modulo-n;
- ex-formal-square-root-one-minus-four-x — add def-formal-order-and-x-adic-topology;
- thm-formal-exponential-logarithm-identities — remove unused thm-formal-compositional-inverse;
- thm-hypergraph-kovari-sos-turan-bound — add def-asymptotic-extremal-notation-and-edge-density.

The dictionary's planned title also still uses \(v(h)\), while the corrected item consistently uses \(v_x(h)\).

The proof-contract artifact's stored derivation text for ex-formal-series-over-zmod-four is also stale after F3. More broadly, all contract citation rows must be populated as described in the batch-wide fatal finding. These are Alpha/orchestrator reconciliation tasks, not silent claim changes.

## Checks run after repair

- precheck.mts on all seven changed proof-bearing items: **7 checked, 0 failing**. The changed definition correctly retains verification.precheck: n/a.
- reflow.mts on all eight changed item files: **all unchanged**.
- proof-contract.mjs research/frontier-11-batch-3.proof-contracts.json --strict: **pass**, subject to the empty-citation defect above.
- content-policy.mjs research/frontier-11-batch-3.pages.json: **60 scoped, 0 errors, 0 warnings**.
- coverage-checklist.mjs research/frontier-11-batch-3.coverage.json: **structural pass**, 120 rows; semantic source-faithfulness failure recorded above.
- fwdcheck.mjs --quiet: **pass**.
- rendercheck.mjs: **pass**, 3,945 files.
- prosecheck.mjs: **0 errors**.
- citecheck.mjs: **exit 0**; none of its heuristic warnings names a batch-3 item.
- extcheck.mjs --quiet: **no errors**; warning-only published legacy cases are outside this batch.
- finite-smoke.mjs on the batch contract: **0 errors, 0 checks**.
- git diff --check: **pass**.

Two repository-level checks report expected out-of-scope/incomplete-run state:

- depcheck.mjs --quiet --json reports four published-unaudited errors for the protected complex-number rehome items on the-complex-exponential-and-eulers-formula; none is in batch 3, and this reader did not touch the protected page.
- risk-report.mjs --require-reviewed routes all 49 proof-bearing items and reports 35 missing Alpha risk_review entries. That is outstanding Alpha Step-6 work, not an item proof failure.

Per dispatch, I did not run tools/gates.mjs.

## Blockers and unchanged concerns

1. The three missing Flajolet–Sedgewick dispositions cannot be repaired by this role because the coverage artifact is outside my write boundary.
2. The batch-wide labeled-fact and citation-contract repair cannot be completed consistently without editing the forbidden proof-contract artifact.
3. The six dependency deltas and one stale contract derivation need artifact reconciliation by Alpha/orchestrator.
4. No unresolved mathematical defect remains in an assigned item's current Statement or proof.

