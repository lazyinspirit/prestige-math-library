# Step 3a reader report — batch 43

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `43`

## Inventory opened

Assigned pages:

- `nrqmx-operator-realizations` — draft mathematics A page; five items; frontmatter-only page body.
- `nrqmx-operator-realizations-examples` — draft mathematics B page; two examples/counterexamples; frontmatter-only page body.

Assigned items were read in their in-run dependency order:

1. Level 0: `def-nrqmx-extension-data`; `lem-nrqmx-minimal-maximal-interval-laplacian-domains`.
2. Level 1: `thm-nrqmx-von-neumann-extension`.
3. Level 2: `thm-nrqmx-interval-unitary-boundaries`; `thm-nrqmx-half-line-momentum-obstruction`.
4. Level 3: `ex-nrqmx-twisted-ring-spectrum`; `cex-nrqmx-formal-symmetry-insufficient`.

The six proof-bearing item contracts in `research/physics-non-fluid-129-2026-10-21-r2-batch-43.proof-contracts.json` were opened and compared with the current proof steps and supplier uses. Their cited source mappings and derivations match the current proofs; the contract records no unresolved suppliers. The definition item has no proof contract. No assigned page or item contains TikZ/tikzcd material, and no diagram is needed to state or prove the reviewed claims.

The 36 distinct off-batch direct item suppliers opened were: `def-symmetric-self-adjoint-and-essentially-self-adjoint`, `def-adjoint-of-a-densely-defined-unbounded-operator`, `def-unbounded-linear-operator-domain-and-graph`, `lem-unbounded-adjoint-is-well-defined-and-closed`, `def-deficiency-subspaces-and-deficiency-indices`, `def-axiom-of-choice`, `def-countable-choice`, `def-nrqm-intervals-hilbert-sobolev-spaces`, `lem-nrqm-intervals-endpoint-trace-and-half-line-decay`, `lem-nrqm-intervals-integration-by-parts`, `lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set`, `def-weak-derivative-of-a-locally-integrable-function`, `thm-holder-inequality-for-integrals`, `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-closable-iff-adjoint-domain-is-dense`, `def-dependent-choice`, `thm-orthogonal-decomposition-by-a-closed-subspace`, `def-cayley-transform-of-a-self-adjoint-operator`, `thm-cayley-correspondence`, `def-injection-surjection-bijection`, `def-function`, `thm-algebra-of-derivatives`, `lem-nrqm-intervals-weak-derivative-ac-representative`, `cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives`, `lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous`, `thm-c1-lipschitz-ac-bv-hierarchy`, `def-absolutely-continuous-function`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-complex-exponential-addition-and-real-extension`, `thm-derivative-of-exponential`, `thm-chain-rule`, `thm-nrqm-intervals-twisted-periodic-momentum-domain`, `thm-stone-one-parameter-unitary-groups`, and `def-strongly-continuous-one-parameter-unitary-group`. The import pins were checked for the assigned items' declared direct dependencies; pinned copies matched their recorded raw hashes.

The four A-page `requires` pages were also opened: `unbounded-self-adjoint-operators-and-stones-theorem`, `qm-math-intervals-and-contacts`, `relations-functions-and-quotients`, and `bounded-variation-and-riemann-stieltjes`. The current A-page carrier and manifest each list four required pages; batch notes say three. I followed the current page and manifest inventories and reviewed all four.

## Mathematics and source review

The local proofs define the domains and operator actions, preserve the inner-product convention (linear in the first argument), distinguish the minimal and maximal interval realizations, and prove trace surjectivity before using boundary data. The scaled deficiency spaces use `ker(S* ∓ i E_* I)` and the extension theorem reduces them to the ordinary spaces for `S/E_*`. The half-line calculation gives `S_c* = -iD` on `H^1(0,∞)`, solves the two deficiency equations with the stated signs, and uses the unequal indices to rule out a self-adjoint extension. The twisted-periodic example's derivative, squared domain, and `U(2)` boundary matrix agree with its suppliers. The counterexample uses a symmetric operator on `C_c^∞(0,∞)` and its no-extension result to refute the universal assertion.

I checked the relevant cited source passages directly:

- [Teschl, *Mathematical Methods in Quantum Mechanics*](https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf), §2.6, Theorems 2.25–2.26, printed pp. 81–83: Cayley transforms and the equal-deficiency-index criterion; Problem 2.27, printed p. 84: the `+iD` half-line exercise. The local half-line proof uses `-iD` and independently verifies the sign swap.
- [Costin, *Functional Analysis and Elements of Resurgence Theory*](https://people.math.osu.edu/costin.9/7212-2020/FA1.pdf), §11.3, Theorems 11.3.6–11.3.7, printed pp. 82–83: the extension criterion/unitary Cayley extension and graph-inner-product decomposition of the adjoint domain.
- [Asorey, Ibort, and Marmo, “Global Theory of Quantum Boundary Conditions and Topology Change”](https://arxiv.org/abs/hep-th/0403048), §2 and Appendix A, printed pp. 4–6 and 19–20: the boundary equation `φ − iφ̇ = U(φ + iφ̇)` and the anti-diagonal phase matrix for pseudo-periodic interval conditions. The example's matrix agrees with that convention.
- Teschl, §9.1, Lemma 9.4, printed pp. 184–185, gives the maximal Sturm–Liouville domain and adjoint in the general setting. The batch's specific `-D²` minimal/maximal-domain claim is proved locally, including the four-trace surjectivity and the exact double-adjoint domain.

These are mathematical deductions from the stated operator hypotheses. The reviewed batch makes no empirical claim.

## Edit and validation

Edited `cex-nrqmx-formal-symmetry-insufficient`:

- Replaced the informal target assertion about “integration by parts” and “differential operators” with the explicit universal statement that every densely defined symmetric linear operator on a complex Hilbert space has a self-adjoint extension, spelling out the extension relation. The Stone consequence now uses the convention `U(t)=e^{itA}` for a self-adjoint extension `A`.
- Changed the title to “A symmetric operator need not have a self-adjoint extension” and added a statement-references section pointing to the exact symmetry/self-adjointness definition and Stone supplier.
- Evidence: `thm-nrqmx-half-line-momentum-obstruction` proves the concrete counterexample has deficiency indices `(1,0)` and no self-adjoint extension; the Stone supplier gives the stated unitary-group consequence. A search of current item carriers found no item consumer; the B-page placement is unchanged. The proof itself and its supplier set remain unchanged, so the existing proof contract still covers it. No `verification.judge` record was present to remove.
- Required commands passed: `reflow.mts` reflowed the item; `precheck.mts` reported `PASS ... (direct)`; `proof-layout.mjs` reported one item, three steps, zero defects.

No other assigned item or page was edited.

## Uneditable finding

The published prerequisite page `qm-math-intervals-and-contacts` ends with the claim “All items are draft mathematics under construction.” Its frontmatter is `status: published` and lists `thm-nrqm-intervals-twisted-periodic-momentum-domain`, whose current carrier is also `status: published`. Assigned consumer `ex-nrqmx-twisted-ring-spectrum` depends directly on that listed item. The page is outside reader write scope and is retained in the JSON findings file for owner disposition.

## Page verdicts

- `nrqmx-operator-realizations`: pass for its current draft inventory and page structure. The five listed A items are the assigned inventory. The published `qm-math-intervals-and-contacts` prerequisite has the summary defect recorded above.
- `nrqmx-operator-realizations-examples`: pass for its current draft inventory and companion relation; its two listed examples are the assigned B items.
- Required published page `unbounded-self-adjoint-operators-and-stones-theorem`: no defect found in the page-summary claims relevant to the opened operator, Cayley, deficiency, and Stone suppliers.
- Required published page `qm-math-intervals-and-contacts`: false final-sentence draft-status claim; routed as an uneditable published-page finding.
- Required published page `relations-functions-and-quotients`: no defect found in the page-summary claims relevant to function and bijection definitions used here.
- Required published page `bounded-variation-and-riemann-stieltjes`: no defect found in the page-summary claims relevant to absolute continuity and the `C^1`–Lipschitz–AC hierarchy used here.

## Coverage note and blocker

All seven assigned item carriers, both assigned pages, six proof-bearing contracts, all 36 distinct off-batch direct item suppliers, and all four page prerequisites were opened. The half-line consumer was opened before I noticed four of its calculus suppliers (`cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives` and the three exponential suppliers); I then opened those suppliers and checked the cited statements against the captured proof. I did not independently re-audit every transitive item in the much larger supplier closure. No TikZ/tikzcd diagrams or empirical evidence are involved. No blocker remains for this reader report; the published-page finding is outside edit scope.
