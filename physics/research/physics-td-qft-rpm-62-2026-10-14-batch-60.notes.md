# Batch 60 — authoring and evidence notes

## Design and plan comparison

The complete QFT-IR02 design at `research/plan-quantum-field-theory-track.md` §“Finite Euclidean quartic interacting measure” matches the current `research/plan-spec.json` row: A page `qft-ir02` at order 559, B page `qft-ir02-examples` at order 560, category `quantum-field-theory-mathematics`, library `mathematics`, title, companion, and page prerequisite `qft-ir01`. There is no page-metadata conflict to resolve. The assigned five A IDs and three B IDs exactly match the proposed inventory and its QFT-IR02 reservation; no items were added or dropped.

The design’s scope is retained: finite-dimensional Euclidean probability measures with finite Gaussian covariance and nonnegative quartic interaction, Gaussian/Wick moments, covariance Wick powers, and finite-order asymptotics with explicit remainders. The finite-order expansion is not called convergent. The zero-dimensional counterexample has a genuine measure for nonnegative coupling and a zero-radius asymptotic series. No item asserts a measure on continuum fields, Osterwalder–Schrader reconstruction/reflection positivity, cutoff removal, or a physical observation.

## Dependency inventory and levels

The run dependency file places batch 60 at level 1 with `requires: ["59"]`; batch 59 is QFT-IR01 at batch level 0. Item levels were recomputed from the authored `deps` graph (external published mathematical suppliers do not add an in-run level):

| Item | In-run dependencies | Level |
|---|---|---:|
| `def-qft-finite-euclidean-interacting-measure` | none | 0 |
| `lem-qft-finite-gaussian-wick-moments` | finite-measure definition | 1 |
| `thm-qft-finite-euclidean-polynomial-measure` | finite-measure definition, Gaussian Wick lemma | 2 |
| `def-qft-finite-wick-normal-powers` | Gaussian Wick lemma | 2 |
| `thm-qft-finite-asymptotic-wick-expansion` | finite-measure theorem, Gaussian Wick lemma | 3 |
| `cex-qft-zero-dimensional-perturbation-radius-zero` | finite asymptotic theorem, Gaussian Wick lemma | 4 |
| `ex-qft-wick-quartic-coercivity` | Wick-power definition (level 2), current QFT-IR01 coercive-form draft (level 1) | 3 |
| `ex-qft-finite-wick-quadratic-pair` | Wick-power definition, Gaussian Wick lemma | 3 |

The page prerequisite `qft-ir02 → qft-ir01` is verified in the batch cross-batch input: the current batch-59 manifest and page file contain the planned QFT-IR01 A-page inventory, though its page and items remain drafts pending independent review. The only direct item-level consumer of QFT-IR01 is `ex-qft-wick-quartic-coercivity`. Its algebraic lower bound is fully proved. The current coercive-form item carrier and its complete local proof are present at batch 59, and the exact interface matches the use recorded in `[L1]`; the form-domain consequence remains explicitly conditional because that supplier is an unreviewed draft.

## QFT-IR01 current carrier and interface review

The current batch-59 manifest lists `qft-ir01` with nine A-page items and lists `lem-qft-coercive-polynomial-form-domain` at level 1. Both `library/quantum-field-theory-mathematics/qft-ir01.md` and `items/lem-qft-coercive-polynomial-form-domain.md` exist. The manifest records the lemma as “Authored draft with complete local argument; independent review remains pending”; the item frontmatter is `status: draft`, `provenance.proof: ai-altered`. I read its complete statement and proof. It requires Countable Choice, finite $N\ge1$, positive coefficients $a_j$, and a real polynomial $V\ge c|q|^2-C_0$ with $c>0,C_0\ge0$; it defines $W=V+C_0+1$ and uses the kinetic plus $(W+1)$ weighted norm. The consuming example supplies $N=1$, $a_1=a>0$, $c=\alpha>0$, and $C_0=15\lambda C^2+\alpha^2/(2\lambda)\ge0$, so its hypotheses match exactly.

I also read the lemma’s complete transitive supplier interfaces and proofs: the current QFT-IR01 draft `def-qft-regulated-polynomial-hamiltonian`; published `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`; published `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn` at $p=2$; published `thm-cauchy-schwarz-in-an-inner-product-space`; and published `def-countable-choice`. The Hamiltonian definition supplies the fixed finite-mode data, complex $L^2$ convention, compactly supported smooth core, and $W\ge1+c|q|^2$; Countable Choice is explicit in the coercive lemma and in the consuming example. No carrier was duplicated or called published. The source contract quotes the current lemma’s actual statement; the final consequence stays conditional on its draft argument.

## Mathematical conventions and Choice

The Gaussian base is the published Borel multivariate normal law with covariance matrix `C` (positive semidefinite; singular cases allowed by that supplier), and the interacting law is its nonnegative polynomial tilt normalized by `Z`. The mathematical probability construction explicitly assumes the Axiom of Choice because the exact imported multivariate-normal supplier states it. It is carried in each consuming item. The QFT-IR01 coercive-form draft uses Countable Choice; that assumption is also explicit in the conditional B example. No unrestricted-choice theorem is silently used.

The parameter-derivative proof declares the exact calculus inputs `def-real-exponential-function-and-e`, `cor-exponential-reciprocal-and-positivity`, `thm-exponential-is-strictly-increasing`, `thm-derivative-of-exponential`, `thm-chain-rule-for-total-derivatives`, and `cor-mean-value-theorem`, alongside dominated convergence. I inspected each cited statement and proof. The mean-value theorem is applied on compact scalar parameter intervals; endpoint derivatives at $\lambda=0$ are right derivatives with $|P|U^r$ as the integrable dominator. The asymptotic Taylor remainder cites the published Lagrange-remainder result and exponential derivative/chain-rule interfaces needed to verify smoothness and the bound.

The density notation and remainder bounds are not imported as proof shortcuts. The finite Gaussian pairing formula, normalizer positivity, polynomial moment integrability, one-sided parameter derivatives, and quotient remainder estimate are proved locally. Moshayedi’s §11.2 density display switches covariance/precision conventions across adjacent formulas; no density formula from it is used. Its finite Wick formula and §12.1 generating function are used only after translating to this page’s explicit covariance convention and supplying the complete local arguments.

## Source reading and dispositions

- David Skinner, *Advanced Quantum Field Theory*, Chapter 2 “QFT in Zero Dimensions,” complete relevant §§2.1–2.3, printed pp. 13–20. Read the real finite-dimensional configuration integral, Gaussian source integral and pairing derivation, the definition of a finite-order asymptotic expansion, and the exact quartic partition-integral coefficients and ratio/growth argument. The Cambridge web preview rejected the 18.5 MB chapter as too large; the author-hosted PDF was downloaded directly, inspected as a 29-page PDF and fully text-extracted. This was a preview-size limitation, not an unresolved source retrieval failure.
- Nima Moshayedi, *Quantum Field Theory and Functional Integrals*, complete relevant §11.2, printed pp. 44–48, including Proposition 11.2.1 and Theorem 11.2.1 (whose proof is left as an exercise), and §12.1, printed pp. 60–62, including the Wick generating function and coefficient formula. The local Wick proof is complete and does not rely on the source’s exercise or inconsistent covariance/precision density notation.

Exact URLs, source kinds, locators, harvested results and their individual dispositions are in `research/physics-td-qft-rpm-62-2026-10-14-batch-60.coverage.json`. Both are independent complete lecture-note treatments; `source-fetch-check --stamp` and the coverage checklist results are recorded below after running them.

## Readiness

All eight carriers have current item-level inputs and complete local arguments, including the QFT-IR01 draft’s checked actual interface. The coercivity example keeps its form-domain consequence conditional on that current but independently unreviewed draft. The QFT-IR01 page-level prerequisite is verified as present/current, with draft status recorded above. Per-item readiness decisions and the dependency IDs examined are recorded in this run’s `step1` records after final checks.

## Scoped checks

Final check results on the completed items, pages, manifest and evidence:

- `source-fetch-check --coverage …batch-60.coverage.json --stamp`: 4/4 source URLs fetch-verified and resolved, 0 new stamps on the final refresh, 0 drops.
- `coverage-checklist …batch-60.coverage.json --require-destination`: 2 pages, 17 harvested results, 0 errors and 2 `coverage-low-yield` warnings. The warnings are `qft-ir02` (2/9 harvested results scaffolded) and `qft-ir02-examples` (1/8); every remaining source result has its recorded inline/out-of-scope disposition and reason. Alpha confirmation remains pending.
- Scoped normative precheck: 8 items checked, 0 failures. Strict proof contracts: 8/8 checked, 0 errors or warnings. Rendercheck: 10 files (8 items and both pages), 0 errors or warnings. Proof-layout: 8 items, 26 steps, 0 defects; a temporary TSX renderer setup under `/private/tmp` supplied the application loader and did not change the adjacent app checkout.
- Scoped content-policy: 8 items, 0 errors or warnings. Focused depcheck: 8 assigned items plus both owned pages, 0 errors or warnings. Focused fwdcheck: 0 open/closed local forward references, 0 errors or warnings; its 8 `restingOnLaterMaterial` marks are inherited from the mathematical dependency closure. Focused extcheck: 8 items, 0 errors or warnings.
- Recomputed item levels on the current batch-59 and batch-60 manifests: 19 items, no level errors. The assigned item levels remain the table above: 0, 1, 2, 2, 3, 4, 3, 3 in author order.
- The full-run `item-dependency-levels.mjs check --run …` is blocked by 92 unrelated current-run manifest findings: 66 empty scaffold inventories, 19 dependency-level mismatches on other items, and 7 string-valued item rows in batch 42. The batch-59/60 scoped recomputation has no such defect.
- Strict proof-contract check passes for all 8 assigned items. The run-wide `proof-contract-coverage` command cannot load the full run because page `td-cycles-and-low-temperature` has an empty frontier inventory; no contract-coverage finding was produced for this batch. The assigned contracts themselves pass strict validation.
- Step 1 has 8 `ready` records with current item/dependency hashes, exact direct dependency IDs and `owner: false`. The normal run-wide recorder cannot load the current full manifest: batch 42 page `qft-mf03` and its companion store seven item IDs as strings, so the loader encounters duplicate `undefined` IDs. I ran the required `step1-decisions.mjs record` CLI against a temporary scoped copy of the current batch-59/60 manifests, verified all 8 assigned records current there, and copied those exact records into the assigned batch evidence. The other 11 batch-59 records remain outside this dispatch.

These records establish authoring readiness only. They do not approve the batch-59 draft theorem, the batch pages, or the work independently. No shared plan, engine state, gate verdict, published content, or imported mathematical original was changed.
