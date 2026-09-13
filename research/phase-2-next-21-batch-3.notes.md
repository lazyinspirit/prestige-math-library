# Phase 2 next 21 — Step 1 batch 3 notes

## Owned scope and construction result

This batch owns only the pair `tempered-distributions-and-the-fourier-transform` / `tempered-distributions-and-the-fourier-transform-examples` at orders 288.095/288.096. No published item, shared plan, verdict, engine-state file, or other batch manifest was edited.

The A scaffold contains 24 items and the B scaffold contains 9 items. This is the complete historical batch-9 claim inventory required by the binding refinement at `research/plan-functional-analysis-track.md` lines 3207–3215, rather than the earlier 19-item summary alone. The added A helpers discharge the test-to-Schwartz inclusion, compact-support extension, multiplier, parameter-pairing, and compact-convolution obligations before their consumers. The stable unused comb theorem id is `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions`, as required at lines 3210–3213. The compact-support Fourier theorem uses the unused descriptive id `thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier`; its statement retains both smoothness and the derivative-by-derivative polynomial bounds needed by multiplier consumers.

Every item has an explicit `deps` array; the boundary-only remark correctly has an empty one. Local items occur after all local prerequisites. The B page depends only on its A companion. No arbitrary product of distributions or arbitrary convolution of two tempered distributions is introduced; the only positive convolution interfaces are `S' * S` and convolution with a compactly supported distribution. Distribution pairings are bilinear, with no conjugation. The already-published FA-24 three-factor associativity theorem has the binding hypothesis that at least two factors are compactly supported; this scaffold neither weakens nor restates it.

## Design/current-plan comparison

There is one direct page-prerequisite conflict. The design at lines 1844–1845 says that FA-25 requires FA-23, FA-24, and planned MT-14. The active `research/plan-spec.json` entry at lines 114002–114011 declares only `distributions-test-functions-and-differentiation` (FA-24). The active plan controls, so the owned A manifest preserves exactly that single direct `requires` edge. This does not erase the mathematics: the run drift evidence shows `schwartz-space-and-the-plancherel-theorem` (FA-23) and `the-lp-spaces-holder-minkowski-and-riesz-fischer` (MT-14) in the transitive closure of FA-24. No Sobolev prerequisite is added.

The current plan has empty item arrays for both owned pages, so it has no item-level claim conflict to resolve. The binding later design refinement at lines 3207–3215 resolves the earlier 19-item A summary in favor of the complete batch-9 inventory and the collision-free comb id; that refinement was followed. The plan remains authoritative for page order and direct `requires` edges.

## Source reading and dispositions

Two independent complete lecture-note treatments were inspected, not snippets or previews:

- Semyon Dyatlov, *18.155 Differential Analysis*, Chapter 11 §§11.1.2–11.2.6, PDF pp. 119–135. The full relevant arguments for Schwartz Fourier calculus, tempered duality, compact-support Fourier regularity, Plancherel compatibility, Paley-Wiener orientation, and Poisson summation were read. `source-fetch-check --stamp` fetched 4,036,261 bytes, 266 pages, SHA-256 prefix `2123b69042d94d41` at `2026-09-12T19:13:44.657Z`.
- Radu Gelca, *Functional Analysis*, §8.4 in full, PDF pp. 128–132, including Theorems 8.4.1–8.4.5. `source-fetch-check --stamp` fetched 965,885 bytes, 151 pages, SHA-256 prefix `85d1019b75af89c6` at `2026-09-12T19:13:46.608Z`.

All harvested headings have explicit dispositions in the owned coverage file. Gelca's Theorem 8.4.5 supplies only the compact-support-to-entire direction in the displayed proof; no converse Paley-Wiener theorem is promoted. Both sources' Paley-Wiener and microlocal material is used only for `rem-paley-wiener-and-microlocal-analysis`. Constants and signs were aligned to the repository convention
`Ff(xi)=integral f(x) exp(-2 pi i x.xi) dx`; source-normalization differences were not copied.

## Dependency and axiom audit

The statements and proofs of the load-bearing published FA-23/FA-24 suppliers and their actual measure/Fourier interfaces were read. In particular:

- restriction `S' -> D'` uses the continuous dense inclusion `D -> S`; density, not continuity alone, gives injectivity;
- Fourier transformation is the bilinear transpose of the Schwartz transform, and inversion/reflection, derivative signs, delta, constants, and plane waves all use the fixed `2 pi` normalization;
- the finite-seminorm characterization is proved by scaling one finite intersection of Schwartz-seminorm neighborhoods;
- compactly supported distributions use the published cutoff extension and global finite-order estimate;
- the compact-convolution preservation helper uses only the explicitly ZF smooth-parameter clause of `lem-distribution-pairing-with-smooth-parameter-families`, not its integral-interchange clause;
- the convolution/product transform theorem separately states `S' * S` and compact-support cases, and requires two ordinary compact support factors wherever the published three-factor associativity supplier is used;
- the polynomial-growth theorem states the exact weighted `L1` sufficient condition and does not claim that pointwise polynomial growth characterizes every regular tempered distribution.

Countable Choice is declared directly on the 18 owned items whose contracts invoke the repository's published Fourier/Lebesgue interfaces: the four Fourier construction/compatibility items, the comb theorem, the Fourier-calculus/elementary-transform/operator items, the Schwartz parameter integral lemma, the compact-support Fourier multiplier theorem, the convolution-transform theorem, the six Fourier examples, and the Heaviside/delta obstruction. Their strategies identify the use: `AC_omega` is spent only through the cited published Fourier, Lebesgue-measure, integration-by-parts, or parameter-integral result; formal transposition and algebraic manipulation add no stronger choice. Choice-free definitions and the smooth-parameter/compact-estimate branches remain choice-free. No full AC dependency is introduced, no incompatible-axiom branch is consumed, and no Foundations path reaches `deferred-set-theory-beyond-choice`. No Recorded result is used as a proof supplier.

## Published prerequisite defects and readiness consequences

The following actual suppliers are published but are classified A-P (audited items pending Phase 3 repair) in `research/published-consumer-supplier-ledger.md`; publication status alone was not treated as proof adequacy:

| Published item | Exact evidence | Affected owned route | Repair state/strategy |
|---|---|---|---|
| `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces` | canonical ledger line 30441; `research/phase-2-frontier-22-published-tonelli-expectation-normal-propagation-audit.md` | Schwartz Fourier transform/Poisson suppliers and the L1 compatibility theorem | Apply the common simple/nonnegative-integral, Tonelli, finite-a.e., integrability, L1-linearity, and triangle repair, then revalidate Fubini. Published A-P; no new pair is planned. |
| `thm-holder-inequality-for-integrals` | canonical ledger line 30465; `research/phase-2-frontier-22-published-conditional-analysis-consequences-audit.md` | polynomial-growth/Lp embedding and its consumers | Repair the affected calligraphic-Lp carrier, zero criterion, and nonnegative integral algebra, then revalidate Hölder. Published A-P; no new pair is planned. |
| `thm-integral-triangle-inequality` | canonical ledger line 30470; `research/phase-2-frontier-22-published-active-martingale-integral-propagation-audit.md` | the integral clause of the parameter-pairing supplier and compact-support Fourier identification | Repair the real/complex integral, finite L1 linearity, nonnegative order, and zero-complement foundation, then revalidate. Published A-P; the ZF smooth-parameter clause is not affected. |
| `thm-dominated-convergence` | canonical ledger line 30471; `research/phase-2-frontier-22-published-active-martingale-integral-propagation-audit.md` | Schwartz Fourier, Poisson, parameter interchange, convolution/product transform, and the Heaviside regular-distribution/integration-by-parts route | Apply the common reverse-Fatou, integrability, L1-linearity, triangle, nonnegative additivity/order, null-integral, and finite-a.e. repair, then revalidate DCT. Published A-P; no new pair is planned. |

These defects are recorded here for canonical owner reconciliation. They are not repaired in this batch, and no planned repair is treated as published. They make actual load-bearing prerequisites inadequate, so dependent owned items are escalated even though their local proof strategies are complete. Unrelated A-P debt does not block the choice-free supplier items.

Readiness records were written in prerequisite order with the exact examined dependency arrays and evidence. Three initially complete-looking records were re-examined before handoff. The Dirac-comb definition gained the explicit real-p-series dependency needed by its lattice-shell convergence argument and remained ready. The differentiation/polynomial-multiplication theorem gained the exact published D-prime operation definitions needed to check agreement after restriction and remained ready. The Heaviside obstruction's identity `DH=delta_0` needs the regular-distribution and integration-by-parts interfaces, so its dependency list was expanded and its stale ready record was replaced through the required command by an escalation. Each changed ready item was re-recorded only after its prior hash became stale. The already-escalated principal-value example was also found to use the tempered-to-distribution restriction, smooth multiplication, integration by parts, and integral triangle interfaces; those explicit dependencies were added to its manifest, and its owner-held escalation was not overwritten. All 33 owned items have a current decision: 12 ready and 21 escalated.

Ready:

- `def-tempered-distribution`
- `thm-finite-seminorm-bound-characterizes-tempered-distributions`
- `def-weak-and-strong-topologies-on-tempered-distributions`
- `def-convolution-of-a-tempered-distribution-with-a-schwartz-function`
- `def-dirac-comb`
- `lem-test-function-inclusion-in-schwartz-space-is-continuous`
- `thm-compactly-supported-distributions-are-tempered`
- `thm-tempered-distributions-embed-continuously-in-distributions`
- `lem-smooth-polynomially-bounded-multipliers-on-schwartz-space`
- `thm-differentiation-and-polynomial-multiplication-preserve-tempered-distributions`
- `lem-compact-distribution-convolution-preserves-schwartz-and-tempered-spaces`
- `rem-paley-wiener-and-microlocal-analysis`

Escalated because their exact recorded chains reach the A-P suppliers above:

- `thm-polynomial-growth-functions-define-tempered-distributions`
- `def-fourier-transform-of-a-tempered-distribution`
- `lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous`
- `thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions`
- `thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`
- `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions`
- `thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions`
- `thm-fourier-transform-of-delta-constants-plane-waves-and-polynomials`
- `thm-constant-coefficient-differential-operators-become-polynomial-multipliers`
- `lem-schwartz-parameter-pairing-and-integral-interchange`
- `thm-tempered-convolution-is-smooth-with-polynomial-growth`
- `thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier`
- `thm-fourier-transform-converts-allowed-tempered-convolutions-to-products`
- `ex-fourier-transform-of-dirac-and-one`
- `ex-fourier-transform-of-a-plane-wave`
- `ex-fourier-transform-of-delta-derivatives-and-monomials`
- `ex-principal-value-one-over-x-is-tempered-and-its-fourier-transform`
- `ex-dirac-comb-and-poisson-summation`
- `ex-fundamental-solution-by-division-of-a-fourier-symbol`
- `cex-product-of-two-distributions-is-not-canonically-defined`
- `cex-convolution-of-two-tempered-distributions-need-not-exist`

## Cross-batch dependency input

`research/phase-2-next-21-batch-3.cross-batch-dependencies.json` is the empty array. There is no same-run supplier request: every external item dependency is already on disk as published content, and the B page consumes only this batch's A page. The four inadequate published suppliers above are canonical repair debt with an existing Phase 3 repair strategy, not authorization for a new pair or cross-batch mutation. `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-21` completed successfully and deduplicated the run ledger.

## Verification snapshot

Checks were run after this batch's final item construction. Other batches continued to materialize concurrently, so whole-run counts are a snapshot.

| Check | Exit | Actual result |
|---|---:|---|
| `coverage-checklist.mjs ...batch-3.coverage.json --require-destination` | 0 | 1 A page, 20 harvested rows, 0 errors, 0 warnings. |
| `source-fetch-check.mjs --coverage ...batch-3.coverage.json --stamp` | 0 | 2/2 newly fetch-verified and resolved; no drops. |
| final check-only `source-fetch-check.mjs` | 0 | 2/2 fetch-verified and resolved; no drops. |
| whole-run `manifest-deps.mjs research/phase-2-next-21-batch-*.pages.json` | 0 | 745 items at the final snapshot, 0 missing arrays, 0 errors. Structural only. |
| owned `content-policy.mjs --manifest-only ...batch-3.pages.json` | 0 | 33 items, 0 errors, 0 warnings. |
| whole-run `content-policy.mjs --manifest-only research/phase-2-next-21-batch-*.pages.json` | 0 | 745 items at the final snapshot, 0 errors, 0 warnings. An earlier snapshot had seven outside-batch missing-supplier findings; their owning batches reconciled them without edits from this batch. |
| `validate-plan.mjs research/plan-spec.json` | 0 | Canonical page order is acyclic and consistent; no item cycle, forward reference, B-page dependency, or unresolved id among the 1,056 pages with item lists. 563 planned pages still have no item inventory; the owned scaffold is intentionally not spliced here. |
| `splice-plan.mjs --run phase-2-next-21 --batch 3 --dry-run` | 0 | The owned overlay would splice exactly 2 pages and 33 new items, with 0 reused pages/items. Dry-run made no plan write. |
| `extcheck.mjs --quiet` | 0 | Existing published Recorded-material consequences remain warnings; every recorded-not-proved statement is a cited no-proof remark and every consequence is marked. No owned item introduces `external_refs` or a Recorded supplier path. |
| `step1-decisions.mjs check --run phase-2-next-21` | 1 | Whole-run gate remains open because other live batches have missing readiness records and empty inventories. A direct owned reconciliation found all 33 owned records present: 12 ready, 21 escalated, 0 missing. This worker record is not mathematical approval; Step 3 and owner/operator reconciliation remain required. |
