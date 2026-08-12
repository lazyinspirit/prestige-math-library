# frontier-11 batch 3 — Beta scaffold notes

Run: `frontier-11`  
Role: `Beta-frontier-11-3`  
Pages: orders 193–194 and 219–220  
Writable scope observed: only the four `research/frontier-11-batch-3.*` artifacts.

## Outcome and size

| Page | Kind | Items | Breakdown |
|---|---:|---:|---|
| `formal-power-series` | A | 22 | 7 definitions, 2 lemmas, 2 propositions, 9 theorems, 2 corollaries |
| `formal-power-series-examples` | B | 9 | 6 examples, 3 counterexamples |
| `extremal-graph-theory` | A | 20 | 4 definitions, 4 lemmas, 1 proposition, 8 theorems, 3 corollaries |
| `extremal-graph-theory-examples` | B | 9 | 7 examples, 2 false statements |

Neither A page approaches the 60-item split threshold. **No split is proposed.** The exact cut remains the two pairs assigned at step 0: formal algebra at 193–194 and extremal graph theory at 219–220.

The corrected harvest contains 118 source-owned headings. Formal power series yields 31 `included`, 19 `inline`, 2 `already-published`, and 19 `out-of-scope`; extremal graph theory yields 26 `included`, 15 `inline`, 1 `out-of-scope`, and 5 `deferred`. The five deferred rows are the source headings for the KST lower-bound routes that need probability or finite-projective-plane machinery on later pages; no retained result is dropped for lack of a buildable prerequisite.

## Step-3 fix record

- **C1:** `thm-formal-power-laurent-dictionary` no longer names a field of fractions, a localisation, a quotient representation, or a universal property. Its scaffold and contract now prove only the coefficientwise embedding $K[[x]]\hookrightarrow K((x))$, the nonnegative-order image, the unique factorisation $h=x^{v(h)}u$ with $u$ a power-series unit, the inverse formula $h^{-1}=x^{-v(h)}u^{-1}$, and the $K=\mathbb R$ valuation dictionary. This follows the fix dispatch's narrower wording; the fraction-field construction remains outside this run.
- **C2:** Wilf's *generatingfunctionology* is now the substantial independent monograph treatment. The exact range read is Chapter 1 opening and §§1.1–1.6, printed pp. 1–23, stopping before its exercises, and Chapter 2 opening and §§2.1–2.6, printed pp. 30–64, stopping before its exercises. The harvest enumerates every section heading in that range and the named theorem, proposition, and rule headings relevant to the pair. The existing Flajolet–Sedgewick headings were independently rechecked against the official book contents as Appendix A.5, “Formal power series,” and Appendix A.6, “Lagrange inversion.”
- **E1:** the B page adds `fs-every-triangle-free-graph-is-bipartite`, routed directly through the published cycle definition and the published odd-cycle characterisation of bipartite graphs; and `fs-erdos-stone-simonovits-determines-the-extremal-number-for-every-graph`, routed through the local ESS theorem, KST theorem, and asymptotic notation plus the published $K_{2,2}$ and chromatic-number definitions. Both statements are source-grounded `ai-altered` boundary claims, not generated load-bearing bridges. The triangle refutation deliberately does not depend on the AI-generated neighbouring $C_5$ example.
- **E2:** Zhao §§1.8–1.10 and Theorems 1.9.1 and 1.10.1 now have `deferred` coverage rows. The overview row names both licensing routes: `finite-probability-and-the-probabilistic-method` (order 221) for probabilistic deletion and `block-designs-and-finite-projective-planes` (order 225) for the Erdős–Rényi polarity/projective-plane construction giving $\operatorname{ex}(n,C_4)=\Theta(n^{3/2})$.

## Draft two-paragraph A-page summaries

### `formal-power-series`

Commutative rings, finite commutative-monoid sums, polynomial convolution, units, domains, and the published real Laurent-series field supply the algebraic setting. Formal series are coefficient functions rather than functions of a numerical variable: the symbol $x$ is an indeterminate, every product coefficient is a finite sum, and no analytic convergence is asserted or used.

The page builds $R[[x]]$ as a complete $x$-adic ring with coefficient extraction, order, summable families, units, composition, compositional inverses, and formal differentiation. Over a commutative $\mathbb Q$-algebra it constructs exponential, logarithm, binomial powers, and unique roots. Formal residues then prove Lagrange–Bürmann inversion, while the closing dictionary embeds $K[[x]]$ as the nonnegative-order subring of $K((x))$ and derives the unique order factorisation and inverse formula directly.

### `extremal-graph-theory`

Finite simple graphs, ordinary subgraphs, degree and neighbourhood notation, finite counting, chromatic number, and Ramsey arrow notation provide the setting. The page fixes ordinary-subgraph avoidance explicitly, defines extremal numbers and balanced Turán graphs, and keeps that convention separate from the published induced-subgraph use of the phrase “$H$-free.”

Independent proofs of Mantel’s theorem and Turán’s theorem give exact edge counts and equality graphs, followed by a Turán-graph Ramsey construction. Normalized extremal numbers lead to Turán density and supersaturation; common-neighbour double counting gives the bipartite and ordinary Kővári–Sós–Turán bounds. A locally proved hypergraph KST lemma then supplies Erdős–Stone for balanced blowups and the full Erdős–Stone–Simonovits theorem, ending with the citable formula that asymptotic extremal density depends only on chromatic number.

## Source ledger and coverage decisions

The machine-complete heading harvest is in `research/frontier-11-batch-3.coverage.json`. The ranges below are the ranges actually read, not whole-source claims.

### Formal power series

1. **Benjamin Sambale, “An Invitation to Formal Power Series.”** Read §2, Definition 2.1 through Example 2.11; §3, Definition 3.1 through Definition 3.14; and §7, Definition 7.1 through Example 7.6. This is the principal full-note treatment for ring operations, units, discrete order/topology, completeness, locally finite sums and products, composition, reversion, derivative algebra, formal exponential/logarithm/powers, Laurent residues, and Lagrange–Bürmann inversion. The article works mainly over a field and then in characteristic zero. The scaffold carefully strengthens only results whose coefficientwise proofs work over a commutative ring, and moves divisions by positive integers to a commutative $\mathbb Q$-algebra or a field containing $\mathbb Q$.

2. **Philippe Flajolet and Robert Sedgewick, _Analytic Combinatorics_.** Read Appendix A.5, pp. 730–731, and Appendix A.6, pp. 732–733. This independent textbook treatment checks the formal-series and coefficient-extraction conventions and the standard coefficient form of Lagrange inversion. It is a convention and theorem cross-check, not the proof source for analytic convergence; the page remains algebraic.

3. **Herbert S. Wilf, _generatingfunctionology_, Internet Edition.** Read the Chapter 1 opening and §§1.1–1.6, printed pp. 1–23, stopping before the Chapter 1 exercises; and the Chapter 2 opening and §§2.1–2.6, printed pp. 30–64, stopping before the Chapter 2 exercises. The harvest enumerates every chapter and section heading in that range, Rules 1–5 and 1′–3′, and the named theorems and propositions used to check units, composition, differentiation, convolution, analytic/formal separation, and downstream boundaries. This is the second substantial treatment, while Sambale remains the principal proof source.

4. **Published in-library Laurent development.** Opened the entire page `formal-laurent-series-field` and the exact items `def-formal-laurent-series`, `lem-laurent-series-ring`, `lem-laurent-valuation`, `thm-laurent-series-field`, and `thm-laurent-cauchy-complete`. The published page owns the real $\mathbb R((t^{-1}))$ construction, field property, and valuation. It does **not** supply a general fraction-field or localisation construction. The restated `thm-formal-power-laurent-dictionary` therefore uses only the published real field/valuation interface and proves the coefficientwise embedding, order factorisation, unit condition, and inverse formula directly. `thm-laurent-cauchy-complete` was read to check whether it owned the formal topology needed here; it concerns ordered-field Cauchy sequences, so it is not cited for the coefficientwise $x$-adic completeness theorem.

### Extremal graph theory

1. **Yufei Zhao, _Graph Theory and Additive Combinatorics_, MIT 18.225 full lecture notes.** Read the Chapter 1 opening; §1.1 through Remark 1.1.2; §1.2 through Lemma 1.2.7; §1.3 through Theorem 1.3.4; §1.4 through Corollary 1.4.5; §1.5 through Theorem 1.5.9 and its proof; and §1.8 through Theorem 1.10.1. This is the principal proof treatment for Mantel, Turán with uniqueness, normalized monotonicity, Turán density, supersaturation, KST, hypergraph KST, Erdős–Stone, and Erdős–Stone–Simonovits. The last range was read to disposition the randomized and algebraic KST lower-bound constructions: both are deferred to the later pages that supply their actual machinery. The scaffold retains the elementary hypergraph-KST route to Erdős–Stone, so no regularity lemma or undeclared external theorem is needed.

2. **Reinhard Diestel, _Graph Theory_, Chapter 7 preview.** Read §7.1, pp. 180–185, through Lemma 7.1.4 and the proof of Corollary 7.1.3. This independent textbook treatment checks the extremal-number convention, both Turán proofs and their equality statement, the balanced blowup form of Erdős–Stone, and the chromatic-number density corollary.

3. **Published graph pages.** Opened `graphs-walks-and-connectivity`, `graph-colouring`, and `ramsey-theory` and then the exact item files listed in the dependency table below. `graph-colouring` contains only four items: it does define proper colouring and $\chi(G)$, including the null-graph boundary, but contributes no extremal theorem. The scaffold therefore cites only that definition and builds all density machinery locally. `ramsey-theory` supplies the exact arrow and off-diagonal-number conventions used by the Turán colouring witness.

## Out-of-scope and deferred decisions likely to be challenged

The three main out-of-scope decisions remain:

- **Sambale Example 2.6(3), partial fractions for two linear factors — out of scope.** This calculation is specifically machinery for order 195, `linear-recurrences-and-rational-generating-functions`. Order 193 supplies its formal ring, inverse, and coefficient tools; duplicating the decomposition here would blur the exact page cut. This is not a missing prerequisite for any theorem in the present pair.
- **Sambale Example 3.5(2), the Nottingham group — out of scope.** Its finite-$p$-group universality is specialised infinite-group structure, not formal-series machinery required by orders 195, 197, or 201. The compositional group and inverse theorem from the same source are fully included.
- **Zhao Conjecture 1.4.4, tightness of KST for all $s,t$ — out of scope.** It is unresolved; the source names $K_{4,4}$ as the first open diagonal case. The page states and proves the upper bound and does not turn an open lower-bound conjecture into a theorem.

The KST lower-bound material is not declined. Zhao §1.8, §1.9 and Theorem 1.9.1 are deferred to `finite-probability-and-the-probabilistic-method` (order 221), which supplies randomized sampling/deletion; §1.10 and Theorem 1.10.1 are deferred to `block-designs-and-finite-projective-planes` (order 225), which supplies the finite-projective-plane polarity construction. The §1.8 overview row records both routes explicitly.

Lagrange inversion is **not** declined: it is scaffolded with an in-scope residue proof. Erdős–Stone–Simonovits is likewise not citation-only: supersaturation, balanced blowups, uniform hypergraphs, and hypergraph KST are all scaffolded as its local machinery.

## Convention and statement disagreements

- **Ordinary versus induced containment.** This page uses “contains $H$” for an ordinary subgraph copy, matching Zhao and Diestel. The published induced-subgraph page uses “$H$-free” for no induced copy. The new definition will state the ordinary convention and avoid unqualified “$H$-free” where ambiguity is possible.
- **Turán indexing.** Zhao writes $T_{n,r}$ for the balanced complete $r$-partite graph excluding $K_{r+1}$; Diestel writes $T^{r-1}(n)$ while excluding $K_r$. The scaffold uses Zhao’s $T_{n,r}$ convention and always displays the forbidden clique.
- **Density normalization.** Zhao and the scaffold normalize by $\binom n2$; some texts use $n^2$ or $n^2/2$. Every asymptotic formula is written against $\binom n2$, and KST bounds retain their ordinary edge-count scale.
- **KST orientation.** In $z(m,n;s,t)$, the $s$ vertices lie on the $m$-side and the $t$ vertices on the $n$-side. The transpose symmetry is stated so the exponent and the additive $(s-1)n$ term cannot silently swap sides.
- **Order terminology.** Sambale writes `inf` for the least nonzero exponent and explicitly avoids “order”; the library’s Laurent page uses valuation. The scaffold uses $\operatorname{ord}_x$ on $R[[x]]$, reserves valuation for the published Laurent item, and proves the dictionary.
- **Coefficient hypotheses.** Sambale’s main development begins over a field. Ring laws, units, order inequalities, completeness, and composition need only a commutative ring after the displayed adjustments; exact product-order additivity needs a domain; residue inversion needs a field; exponential/logarithm and division by $n$ need rational scalars. Those hypotheses are item-local and never collapsed into one global field assumption.
- **Composition domain.** The outer series may be arbitrary only when the inner series has zero constant coefficient; if the outer series is a polynomial, any inner series is allowed. `cex-formal-composition-with-nonzero-constant` records why the unrestricted form is undefined.
- **Formal versus analytic series.** The formal variable is an indeterminate. The single explicit disclaimer appears in the first definition; the analytic real power-series page at order 173 is absent from the dependency backbone.
- **Published Laurent notation.** The legacy real Laurent items name basis monomials with $t^{-n}$ and use an older embedding notation in their own prose. Those files are untouched. The new scaffold never writes the canonical natural embedding applied to a number.

## Published dependencies opened and confidence route

No opened dependency is `legacy-unclassified`; every exact item below has component provenance on disk. “Source-confirmed” means I checked its exact on-disk statement and its cited reputable source/convention. “Knowledge-confirmed” means I also independently checked the elementary statement from standard mathematics. Items read only to decide against citing them are marked **not load-bearing**.

| Published dependency opened | Use and confidence route |
|---|---|
| `def-commutative-ring` | Exact multiplication-commutativity convention; literature-derived and source-confirmed from Judson. |
| `lem-ring-units-form-a-group` | Supplies the exact definition of a unit and $R^\times$; statement source-confirmed from Judson and knowledge-confirmed. Its AI-altered proof is not imported as new machinery beyond the stated unit convention. |
| `def-zero-divisor-and-integral-domain` | Exact convention excludes zero and requires $1\ne0$; source-confirmed from Judson and knowledge-confirmed. |
| `def-ring-homomorphism` | Exact unital convention, needed for the $\mathbb Q$-algebra clause and embeddings; source-confirmed from Judson. |
| `def-field` | Exact field axioms and $0\ne1$ boundary; source-confirmed and independently checked. |
| `thm-rat-field` | Supplies $\mathbb Q$ as a field; literature-derived statement, Tao source, and independently checked. |
| `def-prime-and-maximal-ideals` | Exact maximal-ideal convention used for $xK[[x]]$; literature-derived and source-confirmed. |
| `def-finite-sum-in-a-commutative-monoid` | Arbitrary finite coefficient sums; exact statement opened and source/definition checked. |
| `lem-finite-sum-reindexing-and-fubini` | Finite reindexing and Fubini for convolution; exact AI-altered statement checked against the cited monoid result and independently verified. |
| `def-polynomial-ring-over-a-commutative-ring` | Finitely supported coefficient-function convention; literature-derived, checked against Judson and Donaldson. |
| `thm-polynomial-ring-is-a-commutative-ring` | Polynomial convolution and constant embedding; literature-derived statement, exact proof interface opened, source-confirmed. |
| `def-formal-laurent-series` | Published real $t^{-1}$ convention; AI-altered statement checked against Sambale and the complete on-disk definition. |
| `lem-laurent-series-ring` | Published finite convolution and support closure; source-confirmed from Sambale and independently checked. |
| `lem-laurent-valuation` | Published valuation product/sum laws; source-confirmed from Sambale and independently checked. |
| `thm-laurent-series-field` | Published real Laurent field; source-confirmed from Sambale and its constructive inverse proof opened in full. |
| `thm-laurent-cauchy-complete` | **Not load-bearing.** Opened to test scope; it proves ordered-field sequential completeness, not the $x$-adic coefficient topology used here. |
| `thm-integers-modulo-n-basic-algebra` | B-page witness over $\mathbb Z/4\mathbb Z$ only; exact statement checked against Conrad and by the calculation $2\cdot2=0$. No downstream item depends on the example. |
| `def-ring-characteristic` | **Not load-bearing.** Opened while comparing characteristic-zero and $\mathbb Q$-algebra formulations; the scaffold uses the latter and does not cite this item. |
| `def-finite-simple-graph` | Exact finite-simple-undirected graph model; source-confirmed from Diestel. |
| `rem-finite-simple-graph-convention` | Null graph, order, and size conventions; exact on-disk wording checked. |
| `def-graph-adjacency-incidence-neighbourhood-and-degree` | Degree and neighbourhood notation used by Mantel and KST; source-confirmed and independently checked. |
| `def-subgraph-induced-subgraph-and-spanning-subgraph` | Opened specifically to distinguish ordinary from induced containment; source-confirmed from Diestel. |
| `def-standard-complete-bipartite-path-and-cycle-graphs` | Exact $K_{m,n}$, $K_n$, $P_n$, and $C_n$ conventions; source-confirmed from Diestel. |
| `thm-bipartite-iff-no-odd-cycle` | Exact odd-cycle characterisation used to refute the triangle-free/bipartite false statement; literature-derived, source-confirmed from Diestel, and independently checked. |
| `def-petersen-graph` | Exact two-subset/disjointness model used only by the B example; source-confirmed from Diestel. |
| `thm-handshake-lemma-for-finite-simple-graphs` | **Not load-bearing.** Opened while evaluating a degree-sum Mantel proof; the scaffold chose the independent vertex-pair induction instead. Exact statement is literature-derived and source-confirmed from Cornell. |
| `cor-complete-graph-edge-count` | Exact $\binom n2$ edge count; statement and direct finite-set proof checked. |
| `def-proper-vertex-colouring-and-chromatic-number` | Exact $\chi(G)$ definition, including $\chi(\varnothing)=0$; literature-derived and source-confirmed. This is the only graph-colouring item made load-bearing. |
| `def-clique-and-independence-numbers` | Clique convention used by Zykov symmetrisation; literature-derived and source-confirmed from Bondy–Murty. |
| `def-ramsey-colouring-and-arrow-notation` | Exact red/blue arrow orientation; literature-derived and source-confirmed from Diestel and Leader. |
| `def-off-diagonal-ramsey-number` | Exact minimum and positive-parameter convention; literature-derived and source-confirmed from Fox et al. and Diestel. |
| `def-binomial-coefficient` | Count-based binomial convention and zero boundaries; literature-derived statement, exact item opened, independently checked. |
| `thm-stars-and-bars` | Exact weak-composition count used by the negative-binomial example; its statement, parameter boundary $m\ge1$, and count $\binom{n+m-1}{m-1}$ were opened before it was added as a direct dependency. |
| `def-finite-cardinality` | Finite cardinality and empty-set conventions; exact statement opened and independently checked. |
| `thm-double-counting` | Used in normalized monotonicity, supersaturation, and KST; exact statement is AI-altered but was independently audited on disk, source-confirmed from Stanley’s standard method, and knowledge-confirmed. |
| `thm-monotone-convergence` | Supplies convergence of the bounded nonincreasing real density sequence; literature-derived, exact statement opened, source-confirmed from Rudin/Tao/Lebl. |
| `def-monotone-sequence` | Opened with the preceding theorem to confirm that “nonincreasing” uses weak inequalities; source-confirmed. |

The required page `euclidean-domains-pids-and-unique-factorisation` was also opened. It is a thin published page about divisibility, Euclidean domains, PIDs, UFDs, and prime-implies-irreducible; it does not define a field of fractions. It is therefore not falsely cited for the $K[[x]]\subset K((x))$ dictionary. The dictionary is built directly from the explicit factorization $x^m u$.

## Step-5 authoring report

Authored all 60 scaffolded items: 22 A-page and 9 B-page items for `formal-power-series`, and 20 A-page and 9 B-page items for `extremal-graph-theory`. Of these, 49 are proof-bearing and 11 are definitions. The four page files use `status: draft`; every item uses `status: draft` and `origin: session`. The B pages have empty bodies and list only examples, counterexamples, and false statements.

Departures from the settled scaffold were local proof sufficiency corrections, not topic redesigns. `prop-formal-derivative-algebra` gained `def-binomial-coefficient` because its Hasse derivative explicitly uses $\binom mn$. `ex-negative-binomial-series` gained `thm-stars-and-bars` because the weak-composition coefficient count must be licensed by the theorem that states it. `lem-formal-residue-identities` gained `thm-formal-power-series-unit-criterion` because its arbitrary-field factorisation uses the constant-term unit criterion rather than silently generalising the published real Laurent inverse. These dependency additions were spliced into `research/frontier-11-batch-3.pages.json` and `research/plan-spec.json`. The definition `def-summable-family-of-formal-series` gained `justified_by: [thm-summable-families-and-rearrangement]`, since the product clause initially names a stabilized series and the following theorem proves existence and uniqueness. Rendered mathematics uses $R\llbracket x\rrbracket$ rather than the scaffold's literal `R[[x]]`, because the latter is parsed as a wiki link; this changes no mathematical content. The hypergraph extremal notation was written as $\operatorname{ex}(n,F)$, matching the scaffolded theorem title, with uniformity determined by $F$.

One scaffolded residue clause was narrowed locally: change of variables in `lem-formal-residue-identities` now assumes that $K$ contains $\mathbb Q$, while integration by parts and logarithmic differentiation retain their arbitrary-field scope. The written monomial proof divides by $m+1$ for $m\ne-1$; retaining an arbitrary-characteristic statement would therefore overstate that proof. The same hypothesis is recorded in both machine strategy files and is exactly the characteristic-zero scope used by Lagrange–Bürmann.

The final leaf audit removed six scaffolded B-to-B dependencies. `ex-negative-binomial-series` now proves the geometric inverse inline from the A-page unit and coefficient theorems; `ex-lagrange-inversion-catalan-coefficients` derives the needed negative-binomial coefficient inline from the A-page generalized-binomial theorem; and `ex-reversion-of-x-over-one-minus-x` proves both geometric expansions inline. `cex-formal-composition-with-nonzero-constant` and `cex-nonsummable-constant-family` now cite the A-page coefficient definition directly, while `ex-near-extremal-triangle-free-graph` counts $K_{3,4}$ directly from the published complete-bipartite definition. The matching dependency replacements were made in both machine authority files. No item depends on any of the 18 B-page items.

Alpha's recheck found the Flajolet–Sedgewick range under-enumerated. The coverage file now includes Theorem A.2 as `included` and Note A.13 as `inline`, bringing the harvested total to 120. No source range, page pair, item id, item order, or page requirement changed.

The published dependencies actually opened are listed in the table above, with `thm-stars-and-bars` added during authoring. In particular, the published `formal-laurent-series-field` page was opened before writing: it already owns the real Laurent definition, ring, valuation, field inverse, and $x^m u$ mechanism, so the new page cites and generalizes those interfaces without restating a field-of-fractions theorem. The published `graph-colouring` page was opened before use: only `def-proper-vertex-colouring-and-chromatic-number` and `def-clique-and-independence-numbers` supply the required interfaces, so no stronger colouring theorem was attributed to it.

Provenance labels were assigned exactly as planned in the component table above. All mathematical-content items have both `provenance.statement` and `provenance.proof`. The four AI-generated statements remain B-page leaves with generation roles: `cex-nonsummable-constant-family` and `ex-formal-series-over-zmod-four` for the formal pair, and `ex-near-extremal-triangle-free-graph` and `ex-five-cycle-k-two-two-free` for the extremal pair. No AI-generated statement or construction is load-bearing.

Verification: reflow reported every item unchanged. Precheck passed all 49 proof-bearing items and definitions retain `precheck: n/a`. The strict proof contract passed 49/49 with zero errors and warnings after it was rebuilt against the authored stratification; finite smoke passed with no applicable built-in check. The step-5 risk report passed and routed 49 items: 4 ordinary, 10 moderate, 20 high, and 15 critical, leaving the required high/critical dispositions to Alpha at step 6. Content policy passed all 60 scoped items with zero errors and warnings. Coverage checklist passed 2 pages and 120 harvested results with zero errors and warnings. Prosecheck passed all 60 item files and all four page files with zero errors and warnings. `validate-plan.mjs research/plan-spec.json` passed with no item-level cycles, forward references, B-page dependencies, or unresolved ids among pages with item lists. `fwdcheck`, `extcheck`, and `citecheck` reached their normal green conclusions; citecheck's 26 heuristic warnings were all outside this batch. The full `depcheck` wrapper remains red on the four approved batch-1 complex rewrites because their published text intentionally no longer carries the prior audit stamp. The full `rendercheck` wrapper remains red on five multiline displays in complex-number files outside this batch. Neither wrapper emitted a batch-3 diagnostic. Per dispatch, `tools/gates.mjs` was not run.

Blockers: none within batch 3. I did not edit any other batch's concurrent files, did not touch `library/real-analysis/the-complex-exponential-and-eulers-formula.md`, did not judge items, and did not request permissions.

## Component provenance plan and rationale

Definitions have `proof: not-applicable`. “AI-altered” means the sourced result is generalized, narrowed, or repackaged to match the library’s exact conventions; “AI-generated” is confined to checkable B-page leaves and is never a dependency of an A-page proof.

### Formal power-series pair

| Item | Statement | Proof | Rationale / check obligation |
|---|---|---|---|
| `def-formal-power-series-and-coefficient-extraction` | literature-derived | not-applicable | Standard sequence/Cauchy-product definition, Sambale 2.1 and Flajolet–Sedgewick A.5; generalized from field to commutative ring exactly as polynomial convolution permits. |
| `thm-formal-power-series-ring-and-polynomial-embedding` | literature-derived | ai-altered | Standard ring theorem; proof adapted to the library’s finite-monoid-sum and published polynomial interfaces. |
| `prop-coefficient-extraction-linearity-and-extensionality` | ai-altered | ai-altered | Standard coefficient facts bundled to serve downstream pages; each clause is a direct function/convolution check. |
| `def-formal-order-and-x-adic-topology` | ai-altered | not-applicable | Sambale’s discrete norm recast as coefficient-prefix congruence so no analytic metric vocabulary becomes load-bearing. |
| `lem-formal-order-laws` | literature-derived | ai-altered | Sambale 2.8 and the published Laurent valuation; ring/domain hypotheses separated explicitly. |
| `def-summable-family-of-formal-series` | ai-altered | not-applicable | Sambale 2.10 generalised from sequences to arbitrary locally finite families, with products separately restricted. |
| `thm-summable-families-and-rearrangement` | ai-altered | ai-altered | Source identities recast as finite computations modulo $x^N$; high-risk obligation is permutation/regrouping independence. |
| `thm-x-adic-completeness-and-polynomial-density` | literature-derived | ai-altered | Sambale 2.9; coefficientwise constructive proof works over every commutative ring. |
| `thm-formal-power-series-unit-criterion` | literature-derived | ai-altered | Sambale 2.5; recursion changed from field division to multiplication by the inverse of a unit constant. |
| `cor-formal-series-over-a-field-is-a-local-domain` | literature-derived | ai-altered | Standard consequence of order and unit criterion; proof must check uniqueness of the maximal ideal, not merely name the ring local. |
| `def-formal-series-composition` | literature-derived | not-applicable | Sambale 3.1 with both admissibility branches retained. |
| `thm-formal-composition-laws` | literature-derived | ai-altered | Sambale 3.3; proof licensed through the local-finiteness theorem. |
| `thm-formal-compositional-inverse` | literature-derived | ai-altered | Sambale 3.4; generalized from nonzero linear coefficient over a field to a unit linear coefficient over a ring. |
| `def-formal-power-series-derivative` | literature-derived | not-applicable | Sambale 3.7, valid in arbitrary characteristic by repeated addition. |
| `prop-formal-derivative-algebra` | literature-derived | ai-altered | Sambale 3.8–3.10; explicitly separates ordinary and Hasse coefficient recovery. |
| `def-formal-exponential-logarithm-and-powers` | ai-altered | not-applicable | Sambale 2.3, 3.11, 3.14, repackaged over a commutative $\mathbb Q$-algebra defined by a unital map. |
| `thm-formal-exponential-logarithm-identities` | literature-derived | ai-altered | Sambale 3.6 and 3.12; proof uses derivative/constant-term uniqueness and finite coefficient rearrangement. |
| `cor-unique-formal-root-with-constant-one` | literature-derived | ai-altered | Sambale 3.14; logarithm proof avoids any unproved finite-order-unit assertion over a general coefficient ring. |
| `def-formal-laurent-series-and-residue` | ai-altered | not-applicable | Sambale 7.1/7.3 generalized to an arbitrary field and tied to the published real $t^{-1}$ convention. |
| `lem-formal-residue-identities` | literature-derived | ai-altered | Sambale 7.4; monomial proof must isolate exponent $-1$. |
| `thm-lagrange-burmann-inversion` | literature-derived | ai-altered | Sambale 7.5 and Flajolet–Sedgewick A.6; statement strengthened to the standard $H(w)$ coefficient form and proved locally. |
| `thm-formal-power-laurent-dictionary` | ai-altered | ai-altered | Sambale 7.2 combined with exact published real Laurent interfaces; prove only the coefficientwise embedding, unique Laurent-order factorisation, unit condition, inverse formula, and real valuation dictionary, with no fraction-field or localisation claim. |
| `ex-formal-geometric-series` | literature-derived | literature-derived | Sambale 2.3/2.6; direct coefficient multiplication. |
| `ex-negative-binomial-series` | literature-derived | ai-altered | Standard negative-binomial identity; cross-check by both weak-composition count and formal powers. |
| `ex-formal-square-root-one-minus-four-x` | literature-derived | ai-altered | Standard binomial expansion; verify by squaring modulo $x^6$. |
| `ex-lagrange-inversion-catalan-coefficients` | literature-derived | ai-altered | Sambale 7.6; verify first six coefficients against $w-w^2=x$. |
| `ex-reversion-of-x-over-one-minus-x` | literature-derived | ai-altered | Sambale 3.5; verify both compositions directly. |
| `cex-formal-nonunit-has-no-inverse` | ai-altered | ai-altered | Direct constant-coefficient obstruction plus Laurent monomial inverse; B-only. |
| `cex-formal-composition-with-nonzero-constant` | literature-derived | ai-altered | Sambale 3.2; exact undefined coefficient is displayed, not treated as a divergent analytic sum. |
| `cex-nonsummable-constant-family` | ai-generated | ai-generated | B-only. Truth-risk check: test the definition at $N=1$; infinitely many contributors makes the failure immediate. |
| `ex-formal-series-over-zmod-four` | ai-generated | ai-generated | B-only. Truth-risk check: enumerate the four residue classes and verify $[2]_4^2=[0]_4$ while $[2]_4\ne[0]_4$. |

### Extremal graph-theory pair

| Item | Statement | Proof | Rationale / check obligation |
|---|---|---|---|
| `def-extremal-number-turan-graph-and-blowup` | literature-derived | not-applicable | Zhao 1.0/1.2 and Diestel 7.1; ordinary containment and nonempty candidate family made explicit. |
| `lem-turan-graph-edge-count-and-balance` | literature-derived | ai-altered | Zhao 1.2.5/1.2.7; exact quotient-remainder count and equality tracking combined. |
| `thm-mantel-exact-and-unique` | literature-derived | ai-altered | Zhao 1.1; proof deliberately replaced by an independent vertex-pair induction, with equality fully tracked. |
| `lem-zykov-symmetrisation` | literature-derived | ai-altered | Standard duplication proof appearing in Diestel’s second Turán proof; termination and equality conditions are the risk points. |
| `thm-turan-exact-and-unique` | literature-derived | ai-altered | Zhao 1.2.4 and Diestel 7.1.1; exact extremal number and unique equality graph both load-bearing. |
| `cor-turan-ramsey-lower-bound` | ai-altered | ai-altered | Standard Turán-partition colouring derived from published Ramsey notation; verify colour orientation for asymmetric $s,t$. |
| `def-asymptotic-extremal-notation-and-edge-density` | literature-derived | not-applicable | Zhao 1.3 conventions, with $n<2$ excluded from normalized edge density. |
| `prop-normalized-extremal-number-monotonicity` | literature-derived | ai-altered | Zhao 1.3.1; proof rewritten as explicit finite double count. |
| `thm-turan-density-exists` | literature-derived | ai-altered | Zhao 1.3.2; uses the published bounded-monotone real-sequence theorem. |
| `thm-extremal-graph-supersaturation` | literature-derived | ai-altered | Zhao 1.3.4; all constants and copy multiplicities must be tracked. |
| `def-zarankiewicz-number` | literature-derived | not-applicable | Zhao 1.4.1, with side orientation and transpose symmetry stated. |
| `lem-kst-common-neighbour-double-count` | ai-altered | ai-altered | Proof-decomposition lemma extracted from Zhao 1.4.2; discrete smoothing replaces an undeclared Jensen dependency. |
| `thm-kovari-sos-turan-bound` | literature-derived | ai-altered | Zhao 1.4.2/1.4.3; both bipartite and ordinary exact displayed bounds required. |
| `cor-bipartite-extremal-density-zero` | literature-derived | ai-altered | Zhao 1.4.5; isolated vertices and the at-least-one-edge hypothesis are explicit. |
| `def-uniform-hypergraph-and-complete-partite-hypergraph` | literature-derived | not-applicable | Zhao 1.3.3/1.5; only the machinery required for Erdős–Stone is introduced. |
| `thm-hypergraph-kovari-sos-turan-bound` | literature-derived | ai-altered | Zhao 1.5.6–1.5.9; exponent recurrence and induction base need adversarial checking. |
| `lem-colouring-embeds-a-graph-in-a-balanced-blowup` | ai-altered | ai-altered | Standard one-line reduction made numbered because ESS depends on it; verify empty/null boundary separately. |
| `thm-erdos-stone-for-balanced-blowups` | literature-derived | ai-altered | Zhao 1.5.5 and Diestel 7.1.2; local supersaturation-plus-hypergraph-KST proof. |
| `thm-erdos-stone-simonovits` | literature-derived | ai-altered | Zhao 1.5.1 and Diestel 7.1.3; both lower and upper directions and $\chi=2$ boundary are explicit. |
| `cor-chromatic-number-extremal-density` | literature-derived | ai-altered | Direct citable density form from the preceding theorem; cross-checked with KST at $\chi=2$. |
| `ex-turan-graph-t-ten-three` | literature-derived | ai-altered | Zhao 1.2.3; independently verify both the quotient-remainder and cross-part counts give $33$. |
| `ex-mantel-balanced-complete-bipartite` | ai-altered | ai-altered | Checkable specialization of Mantel; B-only. |
| `ex-near-extremal-triangle-free-graph` | ai-generated | ai-generated | B-only. Truth-risk check: enumerate the 12 cross edges of $K_{3,4}$ and verify deletion leaves 11 and no triangle. |
| `ex-turan-ramsey-colouring-witness` | literature-derived | ai-altered | Standard $R(4,3)$ lower-bound colouring; verify all red/blue clique sizes directly. |
| `ex-five-cycle-k-two-two-free` | ai-generated | ai-generated | B-only. Truth-risk check: enumerate all ten vertex pairs and their common-neighbour sets; none has size two. |
| `fs-every-triangle-free-graph-is-bipartite` | ai-altered | ai-altered | Standard false implication, refuted directly by $C_5$ from the published cycle definition and published odd-cycle criterion; it does not depend on the neighbouring AI-generated example. |
| `ex-petersen-extremal-density` | literature-derived | ai-altered | Zhao 1.5.4 plus published Petersen model; explicitly exhibit the odd cycle and a three-colouring. |
| `ex-odd-cycle-extremal-density` | ai-altered | ai-altered | Direct chromatic-number specialization; check $k=1$ gives the triangle and the same density $1/2$. |
| `fs-erdos-stone-simonovits-determines-the-extremal-number-for-every-graph` | ai-altered | ai-altered | Boundary correction to ESS: for $K_{2,2}$, compare its zero quadratic coefficient with the local KST $O(n^{3/2})$ bound; this refutes exact or order-of-growth determination without claiming a lower bound. |

No item with an AI-generated statement is load-bearing. All such items live on B pages, which remain leaves in reading order.

## Step-5 proof obligations checked

The proof-contract file gives the final machine map. The highest-risk obligations were checked as follows:

1. **Mantel equality:** the induction reconstructs both bipartition classes for odd and even $n$, rather than stopping at the edge bound.
2. **Turán uniqueness:** Zykov symmetrisation proves the bound; a separate maximum-degree induction rules out nonsymmetric equality graphs.
3. **Formal summability:** every rearrangement is reduced first to a finite computation modulo $x^N$.
4. **Composition inverse:** associativity turns the recursively constructed one-sided inverse into a two-sided inverse, including the zero-ring boundary.
5. **Lagrange–Bürmann:** the residue proof isolates exponent $-1$, assumes $n\ge1$, and uses characteristic zero exactly where division by a nonzero integer occurs.
6. **KST:** the two bipartition orientations remain fixed and the additive term is on the stated side.
7. **Hypergraph KST:** the proof recomputes the exponent $r-1/s^{r-1}$ from the induction recurrence.
8. **Erdős–Stone:** the clique hypergraph has one hyperedge per $r$-vertex clique, and the complete partite subhypergraph is explicitly converted back into every cross edge of the graph blowup.
9. **ESS normalization:** every density uses $\binom n2$.
10. **B-page boundaries:** the triangle-free implication is refuted directly with $C_5$, and the ESS overclaim is refuted using only the one-sided KST improvement, with no deferred lower-bound construction.

## Licensing notes

- Sambale’s article is open access under **CC BY 4.0**. Attribution, source link, and indication of adaptations are required. The scaffold paraphrases and derives; it does not copy extended prose.
- MIT OpenCourseWare materials are under **CC BY-NC-SA 4.0** under MIT OCW’s stated terms. The public items should cite Zhao and independently author the proofs; no figures or extended wording are copied.
- Flajolet–Sedgewick’s complete PDF is made freely available by the authors’ official book site but remains **all rights reserved**. Use theorem attribution and independently worded proofs only.
- Wilf’s Internet Edition is made freely available from his official University of Pennsylvania page. Treat it as copyrighted monograph material: cite the source and independently phrase every statement and proof.
- Diestel’s official chapter preview is copyrighted textbook material. Use short theorem identification and independently worded proof, with no copied figure or extended passage.
- Published in-library items retain their existing provenance and licenses; they are cited by ID, not copied into the new page.

## Blockers

None within batch 3. All required published dependencies were readable on disk, and no permission or escalation prompt was needed. The global dependency and rendering wrappers currently include failures from other concurrently authored batches and batch 1's approved published rewrites; no such reported defect remains in a batch-3 file.

## Gate record

- **PASS:** reflow on all 60 item files; every file was unchanged.
- **PASS:** precheck on all 60 item files; 49 proof-bearing items passed and the 11 definitions retain `precheck: n/a`.
- **PASS:** strict proof contract; 49/49 items, 0 errors, 0 warnings.
- **PASS:** `node tools/validate-plan.mjs research/plan-spec.json`; the declared page order is acyclic and consistent, with no item-level cycles, forward references, B-page dependencies, or unresolved ids among pages carrying item lists.
- **PASS:** coverage checklist; 2 pages, 120 harvested results, 0 errors, 0 warnings.
- **PASS:** prosecheck on all 60 item files and all four page files; 0 errors, 0 warnings.
- **PASS:** `fwdcheck`, `extcheck`, and `citecheck`; citecheck's heuristic warnings are outside batch 3.
- **CONCURRENT-TREE BLOCKER ONLY:** the global `depcheck` and `rendercheck` wrappers still report other batches' YAML/display issues and batch 1's intentionally unaudited published rewrites. Their output contains no remaining batch-3 unresolved link or multiline display defect.

Per dispatch, `tools/gates.mjs` is not run.

## Step-6 artifact reconciliation after reader 2

Reader 2 repaired six dependency interfaces in the item text. The batch manifest now mirrors those exact on-disk lists: `prop-formal-derivative-algebra` adds `prop-coefficient-extraction-linearity-and-extensionality`; `thm-lagrange-burmann-inversion` adds `thm-formal-power-series-unit-criterion`; `ex-formal-series-over-zmod-four` adds `def-integers-modulo-n` and `def-addition-and-multiplication-modulo-n`; `ex-formal-square-root-one-minus-four-x` adds `def-formal-order-and-x-adic-topology`; `thm-formal-exponential-logarithm-identities` removes the unused `thm-formal-compositional-inverse`; and `thm-hypergraph-kovari-sos-turan-bound` adds `def-asymptotic-extremal-notation-and-edge-density`. The dictionary scaffold title now uses the repaired notation `v_x(h)`.

The proof-contract blind spot was repaired across all 49 proof-bearing items. Each proof now separates the dependency clauses it actually uses into labeled facts, each label is attached only to the numbered steps using it, and each contract records the exact on-disk source excerpt and complete use list. No proof was classified as wholly self-contained: even the shortest verifications unfold a declared definition or invoke a prior extensionality, unit, order, colouring, or extremal theorem. The modulo-four step claim was refreshed to the reader's explicit congruence-class calculation. Existing step numbering and all eight boundary dispositions remain anchored to steps that still exist.

The Flajolet–Sedgewick harvest now enumerates A.10 (the OGF of permutations), A.11 (Lagrange–Bürmann inversion for fractional powers), and A.12 (Abel's identity). Each is recorded as out of scope with a result-specific reason; the declared pp. 730–733 locator remains the range actually read. No existing coverage row was retargeted.

I found no mathematical error in reader 2's repairs and did not undo or dispute any of them. No blocker remains in the batch-3 reconciliation.

## Step-6 rendering reconciliation

The labeled-fact insertion left `[F3]` in `thm-erdos-stone-for-balanced-blowups` without the closing inline-math delimiter after `o(n^r)`. That one missing `$` made the renderer carry the span across later fact and proof paragraphs, producing all eight reported errors. I restored only that delimiter; no mathematical wording, numbered step, dependency, proof-contract entry, coverage row, or verification field changed. The repaired file passes scoped precheck, the unchanged batch contract passes strict validation, and the repository-wide render check is clean.
