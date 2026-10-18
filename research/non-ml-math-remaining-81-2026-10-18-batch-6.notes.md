# Batch 6 authoring notes — Method of Types and Finite Large Deviations

## Scope and design

- Owns only the IT15 A/B pair and its batch evidence. The generated beta-6 task reports no design section; no per-pair construction document exists for this information-theory pair. The owner drift report also found no A-item or A-prose design. The current track plan and IT15 source scaffold were used.
- The controlling IT15 plan orders finite entropy/KL and measure-theoretic information before this pair, and calls for type-class cardinality/probability bounds, finite Sanov on the source support, and a binary type count and Bernoulli tail. The authored inventory keeps all those claims and adds local definitions/proofs for empirical types, finite product mass with iid coordinates, count/rounding, and relative-entropy continuity so no probability-law interface is assumed silently.

## Plan and task conflict

- The starting beta-6 task and batch-6.pages.json listed only measure-theoretic-information-and-conditioning and concentration-inequalities-and-tail-bounds as A-page requirements. The controlling plan-spec.json IT15 row and information-theory-planning/pages.json also require finite-alphabet-entropy-and-divergence; the information-theory track places IT01 and IT02 before IT15.
- Following the plan, the assigned batch-6 manifest now includes all three A-page requirements. The item claims use the published def-qa-35-finite-probability-entropy-and-stochastic-matrices for their finite entropy/KL formulas. The plan-required batch-4 and batch-5 page bodies are still absent; see the unresolved page suppliers below.
- information-theory-planning/proposed-items.json lists def-it-finite-mutual-information as a dependency of the type-probability identity. That definition does not supply the generic finite H(q) and D(q||p) used there. The item instead depends on the actual published finite entropy/KL definition, whose body was inspected. The proposed k polynomial exponents were strengthened to k-1: the first k-1 symbol counts determine the last, including the k=1 boundary; the local proofs establish this directly.

## Inventory and dependency levels

- A page: 11 items. B page: 3 worked examples/refutation. Both inventories total 14 items and are below the 100-item cap.
- Item levels in the manifest are computed over the assigned in-run dependency graph: empirical-type and product-mass definitions plus positive-reference continuity level 0; count, rounding, and iid product-law verification level 1; type-probability identity and cardinality level 2; type-probability bounds, entropy approximation, and binary examples level 3; finite Sanov level 4; Bernoulli Sanov/Hoeffding example level 5.
- The initial `node tools/batch-dependency-levels.mjs check --run non-ml-math-remaining-81-2026-10-18` found the shared dependency artifact stale before this manifest edit. Final recomputation exits 1 on three duplicate items—`lem-it-quantum-relative-entropy-support-regularization`, `lem-it-quantum-relative-entropy-isometric-invariance`, and `thm-it-holevo-measurement-bound`—present in both batch-21 and batch-22 manifests; these are outside batch 6. With the plan-required finite-entropy page added, the semantic batch-6 suppliers are batches 4 and 5 and its level remains 2. The run-level dependency artifact is shared owner evidence and was not rewritten.

## Source reading and scope

- Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, authorized author-hosted CUP draft: full local text/PDF inspected at the relevant spans. Read Proposition 1.5 and its multinomial-mode proof (printed pp. 15–16), Chapter 15.5 / Theorem 15.13 and its regularity discussion (printed pp. 307–308), and the complete finite-alphabet Exercise III.23(a)–(e) (printed pp. 334–335). The convex-product/total-variation proof branches in parts (a)–(d) are recorded as out of scope; part (e) supports the interior lower-bound route. The local finite-type proof supplies the support and boundary details.
- Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition: inspected the complete 62-page Chapter 11 PDF. Read §11.1 (type/n-type/type-class definitions, Theorems 11.1.1–11.1.4, the iid product distribution, and examples), §11.4 (empirical-event representation and the complete Theorem 11.4.1 proof), and §11.5 (finite Sanov examples including the coin tail). Cover–Thomas writes in bits; the carriers use nats and state the conversion through the already published finite entropy/KL definition. Cover–Thomas’s theorem proof uses its stated continuity/closure-of-interior route; the local Sanov proof instead proves the separate relative-interior liminf and relative-closure limsup for arbitrary subsets of the finite support simplex.
- A first web attempt to open a 10,581,219-byte full-book Cover–Thomas mirror exceeded the PDF text opener's limit; no text from that URL is claimed. A search found the complete Chapter 11 PDF at the URL cited in the coverage file, and all 62 pages of that chapter were inspected. No cited source was dropped. `node tools/source-fetch-check.mjs --coverage research/non-ml-math-remaining-81-2026-10-18-batch-6.coverage.json --stamp` succeeded for both selected sources (2/2), and check mode subsequently verified both fetch stamps.
- Every source heading within the recorded locators has an item disposition in batch-6.coverage.json. Source locators, supported items, base conventions, and the unavailable full-book mirror history are recorded there and in this note.

## Supplier and axiom checks

- Inspected the full published def-qa-35-finite-probability-entropy-and-stochastic-matrices definition and its transitive finite-probability-space definition. It fixes natural-log entropy, 0 ln 0=0, directional finite KL, and +infinity on support failure. The local finite identities never subtract infinities.
- Inspected the published thm-logarithm-derivative-and-integral statement and proof for the boundary limit and sublinear-log estimates, cor-mean-value-theorem for monotonicity of binary divergence on a closed interval, and the finite probability-space, measurability, generated-sigma-algebra, and independence definitions used in the local iid product-law proof.
- The Bernoulli B example imports thm-hoeffding-independent-bounded-sums; its complete statement and proof were inspected. It assumes AC, independent integrable variables, deterministic interval bounds, and the exact one-sided exponent. The example carries def-axiom-of-choice and uses AC only for this comparison. All type-count, type-probability, and finite Sanov arguments remain choice-free.

## Unresolved required-page suppliers

- finite-alphabet-entropy-and-divergence (batch 4): required by the controlling IT15 plan, but its current batch manifest has no items and no actual page/carrier exists. The existing published def-qa-35-finite-probability-entropy-and-stochastic-matrices supplies the local finite formulas; no missing batch-4 body or excerpt is invented. Owner reconciliation must inspect the actual page and confirm its interfaces before pair readiness.
- measure-theoretic-information-and-conditioning (batch 5): required by both the controlling plan and task, but its manifest has no items and no actual page/carrier exists. The local finite product mass and iid-coordinate claims are now defined and proved on finite powers; no general conditional-information or finite-to-measurable KL claim is imported. The required-page interface remains unresolved and no supplier statement, proof, or acceptance is claimed. Reconciliation must inspect the actual page before readiness and verify any interface it intends this pair to consume.
- concentration-inequalities-and-tail-bounds: published and verified for the exact Hoeffding comparison in the B example.

Each final item has a Step-1 decision record marked escalated because the A page has unresolved required in-run page suppliers. These are authoring-readiness holds, not mathematical defects or owner acceptance.

## Final scoped validation

- Scoped precheck on all 12 proof-bearing items: pass, 12/12; each has `verification.precheck: pass`. The two definitions record `n/a`.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-6.proof-contracts.json --strict --json`: pass, all 12 proof-bearing contracts, zero errors/warnings.
- `node tools/rendercheck.mjs` on the 14 batch items and two assigned pages: pass, 16 checked, zero errors/warnings.
- `node tools/content-policy.mjs research/non-ml-math-remaining-81-2026-10-18-batch-6.pages.json --json`: pass, 14 items, zero errors/warnings. The two pages contain 14 items total, below the 100-item cap.
- `node tools/depcheck.mjs --items-file /tmp/non-ml-math-remaining-81-2026-10-18-b6-item-scope.json --json`: pass, zero errors/warnings across the 14 assigned items and their prerequisite closure.
- `node tools/manifest-deps.mjs research/non-ml-math-remaining-81-2026-10-18-batch-6.pages.json`: pass, all 14 items have explicit dependency arrays. The scoped item-level calculation passes with the manifest levels (0 through 5), no cycles, and no errors.
- `node tools/coverage-checklist.mjs research/non-ml-math-remaining-81-2026-10-18-batch-6.coverage.json`: pass, one A page, 27 harvested results, zero errors/warnings. Source fetch check mode verifies 2/2 sources.
- Run-wide proof-contract coverage exits 1 before comparison because current frontier page `rate-distortion-and-lossy-source-coding` has an empty or invalid item inventory, outside this batch. The scoped contract check above passes.
- The live-tree `step1-decisions record` command is blocked by run-wide duplicate declarations. The same CLI recorded all 14 batch-6 items as escalated from a temporary snapshot that filtered only the three duplicate declarations from later manifests; no batch-6 input changed in that snapshot. The records were copied into the assigned batch-6 evidence area and structurally checked against all 14 manifest dependency lists. No `--owner` flag was used. The live-tree `step1-decisions check` remains blocked by the same duplicate declarations.
- Run-wide batch dependency recomputation exits 1 on the three duplicate batch-21/batch-22 IDs recorded above. The scoped batch-6 dependency-level calculation passes; the shared run artifact remains untouched.
- Final `node tools/proof-layout.mjs` on all 14 explicitly changed items: pass, 40 steps, zero defects.

