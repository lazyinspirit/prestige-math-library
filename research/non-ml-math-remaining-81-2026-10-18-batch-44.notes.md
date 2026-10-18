# Batch 44 authoring notes — BV, BRST, and homological physics interfaces

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: beta  
Assigned pair: `bv-brst-and-homological-physics-interfaces` and its examples page.

## Authority and scope

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch brief and assignment, the current owner authoring direction, the batch dependency-level input, the full PA-13 design section, and the relevant PA-13 source/design evidence. The owner direction contains no PA-13-specific construction override. The PA-13 scope is the degree-`+1` BV generator and derived bracket, a classical Lie-action BRST complex with cohomology, and the algebraic CME/formal QME distinction. The formal QME is coefficientwise; no measure, renormalization, anomaly, or path-integral claim is made.

The current `plan-spec.json` and `plan-physics-algebras-track.md` agree on the PA-13 page identities, category, order, companion and PA-12 `requires` route. The plan specification has empty item inventories, so the item inventory below was taken from the design and authoring work rather than invented as a plan-spec contract. The current track says page `requires` entries define a reading route, not accepted item dependencies. The original PA-13 proposal nevertheless names the A-infinity/L-infinity page and its degree/sign contract as the smallest missing context for the BV/master-equation route and marks native authoring as not ready. I retained the declared route, authored the BV grading and signs locally, made no A-infinity/L-infinity compatibility claim, and escalated the pair-level route reconciliation. This preserves both statements without inventing PA-12 item IDs or proof excerpts.

The PA-12 A and B pages and Batch 43 manifest were inspected. Both current inventories are empty; there is no actual PA-12 item body, operation-degree contract, or source excerpt to quote. PA-10 was inspected as transitive route context: its current DGA item fixes a cohomological degree-`+1` differential, square-zero, and signed Leibniz rule, but does not supply graded commutativity, BV order two, or A-infinity/L-infinity identities. PA-13 does not identify its BV generator with a DGA differential. Exact observations and hypotheses are in `batch-44.cross-batch-dependencies.json`.

Published Chevalley–Eilenberg suppliers were read in full: `def-chevalley-eilenberg-cochains`, `def-chevalley-eilenberg-differential`, `def-lie-algebra-over-a-field`, `def-representation-of-a-lie-algebra`, and `thm-the-chevalley-eilenberg-differential-squares-to-zero` including its complete proof. The BRST formula, zero-based signs, module hypothesis and local theorem match those suppliers. The last theorem is the actual square-zero proof supplier; Weibel's Exercise 7.7.1 is explicitly not treated as a proof.

## Inventory and dependency levels

The A page has six items and the B page has three, below the 100-item cap. Logical dependencies are item-level; page `requires` is retained as the plan's reading route. In-run suppliers are ordered before consumers, and the level is zero without an in-run supplier and otherwise one plus the maximum in-run supplier level.

| Item | Direct item dependencies | Level |
|---|---|---:|
| `def-bv-algebra-and-degree-plus-one-bracket` | none | 0 |
| `def-classical-lie-action-brst-complex` | published CE cochains, CE differential, Lie algebra, representation definitions | 0 |
| `thm-bv-derived-bracket-is-odd-poisson` | `def-bv-algebra-and-degree-plus-one-bracket` | 1 |
| `def-classical-and-formal-quantum-master-equations` | `def-bv-algebra-and-degree-plus-one-bracket` | 1 |
| `thm-classical-lie-action-brst-differential-squares-zero` | local BRST definition; published CE square-zero theorem | 1 |
| `thm-classical-master-equation-defines-square-zero-differential` | BV definition, master-equation definition, odd-Poisson theorem | 2 |
| `cex-nonrepresentation-action-breaks-brst-nilpotence` | local BRST definition | 1 |
| `ex-dilation-action-classical-brst-cohomology` | local BRST definition and square-zero theorem | 2 |
| `ex-one-variable-bv-algebra-solves-classical-master-equation` | BV definition, odd-Poisson theorem, master-equation definition and CME consequence | 3 |

The explicit BV-definition edge on the CME consequence matches its statement and removes an undeclared direct citation. The batch maximum is 3, matching the assigned dependency level; prerequisite batch is 43 and the scheduling input hash remains `9e5da692ac3c41617669af96f41fe518782efb718bff78e3697d85b60d825863`. The shared dependency-level input was not edited.

## Mathematical conventions and proof coverage

- The BV definition fixes a characteristic-zero field, unital graded-commutative algebra, degree-`+1` square-zero operator annihilating the unit, triple graded-commutator order condition, and derived-bracket sign. The local theorem proves degree, odd skew, both derivation rules and odd Jacobi from those hypotheses. The CME consequence uses Jacobi and invertibility of `2`.
- The classical BRST definition fixes a characteristic-zero field, Lie algebra, unital commutative coefficient algebra, and a Lie homomorphism into derivations. Its degree-`+1` differential is exactly the zero-based CE two-sum formula. The local nilpotence theorem matches it to the published CE theorem and derives that the image lies in the kernel, making cohomology well-defined.
- The formal QME fixes `A` over `C`, central degree-zero `hbar`, coefficientwise extensions, and the formal power-series ring with Cauchy product. Each coefficient uses a finite sum. The stated normalization conversion from the cited Maurer–Cartan form is algebraic; no convergence or measure is asserted.
- The B page verifies a nonrepresentation counterexample, the dilation-action cohomology, and a one-variable BV model by direct algebra. The BV model checks the graded derivation rules, `Delta^2=0`, the triple commutator, bracket value and CME solution.
- No choice axiom is used. The A page's conventions and all proof contracts are local. No diagram is needed for these algebraic claims.

All proof-bearing items have explicit `[F#]` supplier links, `proof_strategy`, `Given`, phase-numbered steps and justification tags. Contracts are generated from the completed arguments, contain exact current supplier sections, actual step claims and inputs, and standard boundary dispositions. No axiom or finite-computation branch is claimed.

## Source reading and dispositions

Full-text retrieval and reading evidence, exact URLs/locators, per-item support, and every harvested disposition are in `batch-44.source-evidence.json`, `batch-44.source-coverage.json`, and `batch-44.coverage.json`. Five distinct complete texts were inspected:

| Source | Read locator and use | Harvest disposition |
|---|---|---|
| Ezra Getzler, *Batalin–Vilkovisky algebras and two-dimensional topological field theories* | §1, Definition 1.1 and complete Proposition 1.2 argument; degree `+1` BV and bracket identities | Included for BV definition/theorem; local proof supplies all signs |
| Paul Seidel, *Lectures on Categorical Dynamics and Symplectic Topology* | Lecture 12 §12.7; degree `-1` BV comparison | Included as an independent convention comparison; no sign is copied |
| Kosmann-Schwarzbach–Monterde, *Divergence operators and odd Poisson brackets* | §§1.1–1.3 and 2.2; odd-Poisson generator and Maurer–Cartan/QME form | Included; degree and scalar conversion are stated locally |
| Albert Schwarz, *Geometry of Batalin–Vilkovisky quantization* | §1, odd-symplectic operator and integration theorem hypotheses | Inline context for the explicit no-measure limit |
| Charles Weibel, *An Introduction to Homological Algebra* | §7.7 CE definitions/formula and Exercise 7.7.1 | Formula included; the exercise is out of proof scope because it leaves `d^2=0` to the reader; local/published CE proof is used instead |

The eight source-coverage rows have five unique full texts; all have successful retrieval records. `source-fetch-check --stamp` stamped 8/8 rows, and the later no-stamp verification again passed 8/8. There were no retrieval failures or drops, so no failure-specific `source_resolution` record was needed. Every source item listed as harvested is assigned `included`, `inline`, or `out-of-scope` with its disposition reason in the source evidence.

## Scoped validation

- Renderer: `node tools/rendercheck.mjs` on the nine item files and both A/B page files — 11 files passed; all math parsed with the app's KaTeX and frontmatter parsed with its YAML parser.
- Proof layout: `node tools/proof-layout.mjs` on all nine assigned item files — 9 items, 23 steps, 0 defects.
- Precheck: explicit nine-item selection — 6 proof-bearing items checked, 0 failing.
- Proof contract: strict batch-44 contract — 6/6 proof-bearing items, 0 errors, 0 warnings.
- Manifest and dependency recomputation: 9 items, 0 normalized, 0 errors; levels `0,0,1,1,1,2,1,2,3`, no cycle/errors.
- Content policy: explicit batch-44 manifest — 9 items, 0 errors, 0 warnings.
- Focused `depcheck` with `/tmp/b44-items.json` — 9 target items, both assigned pages, 0 errors, 2 warnings. The warnings are deliberate same-page explanatory links from `def-bv-algebra-and-degree-plus-one-bracket` to its later bracket theorem and from `def-classical-lie-action-brst-complex` to its later nilpotence theorem. These are pointers to where consequences are proved, not logical prerequisites; adding them to `deps` would create cycles. No full-corpus result is used as scoped evidence.
- Coverage checklist: 2 pages, 20 harvested results, 0 errors, 0 warnings.
- Source fetch: 8/8 source rows verified and resolved, 0 drops.

Two accidental invocations of `node tools/depcheck.mjs --help` occurred while checking CLI usage; that tool has no help mode and each invocation performed a read-only full-corpus scan. Those outputs are excluded from the scoped evidence above. A no-scope `content-policy --help` invocation returned usage/error and was also not used as evidence. No tests were added or run.

## Step 1 handoff

`node tools/step1-decisions.mjs record` was run without `--owner` for all nine current items, each as `escalated`, with its exact direct item dependencies recorded. No prior readiness record was overwritten. The records retain the complete local arguments and placement but leave final pair-level readiness open because the assigned PA-13 route requires PA-12 and the actual PA-12 A/B carriers currently have no item bodies to verify. This is a page-route reconciliation, not a claim that any missing PA-12 item proves a current statement; the current plan explicitly distinguishes page reading routes from item-level logical dependencies. The PA-12 body, degree/sign contract and any compatibility hypotheses remain exact owner follow-up. B items inherit the readiness escalation through their in-batch A suppliers.

These readiness records are scaffolding evidence, not mathematical review or independent approval. No published item, shared plan, engine state, verdict, or other pair's file was edited.
