# Step 3a Reader Report — Batch 17

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Batch: `17`

## Scope and opened inventory

The assigned manifest was `research/physics-td-qft-rpm-62-2026-10-14-batch-17.pages.json`. It assigns the A page `td-math-spatial-measure-and-information` and B page `td-math-spatial-measure-and-information-examples`, both in `thermodynamics-mathematics`. Both page files and all 13 listed item carriers were opened.

The A-page items were reviewed in dependency order: `def-tdmath-finite-region-relative-entropy`; `lem-tdmath-counts-generate-configuration-sigma`; `lem-tdmath-relative-entropy-variational-and-chain-rules`; `def-tdmath-poisson-configuration-reference`; `def-tdmath-local-tame-topology`; `thm-tdmath-poisson-reference-count-properties`; `thm-tdmath-specific-entropy-density`; `lem-tdmath-conditional-log-density-convergence`; `thm-tdmath-local-tame-entropy-compactness`; `thm-tdmath-spatial-mean-information`. The B-page items reviewed afterward were `ex-tdmath-unit-poisson-reference-information-zero`, `ex-tdmath-poisson-intensity-information-density`, and `ex-tdmath-superlinear-count-test-is-not-tame`.

I opened the exact statements of all 48 distinct direct mathematical prerequisites outside this batch. The physics import registry `research/math-imports.json` contains a matching pinned entry for each; all are read-only published mathematics carriers:

```text
cor-countable-products-and-g-delta-subspaces-of-polish-spaces-are-polish
def-axiom-of-choice; def-borel-sigma-algebra; def-dependent-choice
def-factorial-and-falling-factorial; def-hahn-banach-extension-principle-relative
def-integer-power; def-integers; def-lebesgue-measure-and-the-lebesgue-sigma-algebra
def-multinomial-coefficient; def-natural-logarithm; def-natural-numbers
def-polish-space; def-probability-measure; def-product-measure-on-sigma-finite-spaces
def-product-sigma-algebra-and-finite-product-sigma-algebras
def-real-exponential-function-and-e; def-separable-space; def-standard-borel-space
def-ultrafilter-extension-principle; def-weak-topology-on-a-normed-space
lem-borel-subspaces-admit-polish-presentations
lem-finite-products-of-standard-borel-spaces-are-standard-borel
lem-integer-part; lem-rat-embeds-dense
lem-standard-complete-metric-on-a-countable-product
thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma
thm-complete-subspace-iff-closed; thm-conditional-density-formula
thm-dominated-convergence; thm-dunford-pettis-for-l-one-on-a-finite-measure-space
thm-dynkin-pi-lambda; thm-eberlein-smulian; thm-euclidean-space-complete
thm-exponential-addition-formula; thm-fatou-lemma; thm-holder-inequality-for-integrals
thm-kolmogorov-extension-for-standard-borel-coordinate-spaces
thm-lebesgue-measure-of-a-box-of-every-kind
thm-monotone-convergence-for-the-integral; thm-multinomial-theorem
thm-natural-logarithm-laws
thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
thm-tonelli-theorem-for-sigma-finite-product-spaces
thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence
thm-uniformly-integrable-martingale-convergence
thm-von-neumann-mean-ergodic-theorem-in-l-two
```

The run’s batch-17 proof-contract file was reviewed for all 11 contract entries, their cited supplier interfaces, derivation-step mappings, and boundary hash bindings. The current run status was `3a-read`; no workers were in flight at the status check.

## Source review

- Georgii and Zessin, *Large deviations and the maximum entropy principle for marked point random fields*: read §2.1 (printed pp.181–182) for the local/tame topology; §2.3 (printed p.184) for finite relative entropy, the variational formula, specific entropy, Remark 2.5’s supremum formula, and Proposition 2.6; and the Proposition 2.6 proof in §5.1 (printed pp.197–198). The cited paper’s local topology uses local tests with linear count growth, matching the definition reviewed here. The direct legacy URL redirected; the corresponding paper PDF at [the current LMU host](https://www.math.lmu.de/~georgii/papers/GiiZess.pdf) was retrieved and the cited pages read.
- Nguyen and Zessin, *Ergodic theorems for spatial processes*: read §6, Theorem 6.6 and proof (printed pp.149–150), and Theorem 6.26 and proof (printed pp.151–152). Theorem 6.6 gives directed (L^1(P)) convergence of conditional log densities under its filtering and entropy hypotheses. Theorem 6.26 gives an invariant limit under the spatial-action and independent-increment hypotheses. Their entropy convention is (E_P[-\log(dP/dQ)]); the reviewed local proofs explicitly use the opposite-sign KL convention (D=E_P[\log(dP/dQ)]) and derive the positive limit accordingly.
- Georgii, *Probabilistic aspects of entropy*, §6 (printed pp.48–50), was checked as the finite-state lattice comparison described on the A page; it is not used as a proof of the continuum configuration results.

## Confirmed defects repaired

1. `lem-tdmath-conditional-log-density-convergence`, source frontmatter: its two `sources.references` entries had literal backslash-escaped quotation marks around titles, URLs, and locators, so the recorded URL strings were malformed. I replaced them with ordinary YAML quoted strings, preserving the cited sources and locators. The Springer PDF confirms the cited Theorem 6.6 location and statement. The affected proof contract was rebound to the corrected carrier hash.

2. `thm-tdmath-local-tame-entropy-compactness`, Proof 4.1–5.1 and 7.1: Step 4.1 invoked the specific-entropy theorem for a law constructed from (K_{\rm stat}) before establishing that law had finite intensity, a prerequisite in the definition of \(\mathcal P^1_{\rm stat}(\Omega)\). Step 5.1 had an estimate stated for \(\mathcal H_c\) but then used it to assert finite intensity for the closure-family limit laws. I changed Step 4.1 to retain the local entropy bounds directly from (h_W\in K_W), extended Step 5.1’s uniform tail estimate to every law constructed from (K_{\rm stat}), and applied the specific-entropy supplier only after stationarity and finite intensity had been established. Step 7.1 now cites Steps 4.1–5.1 for the resulting membership in \(\mathcal H_c\). The proof contract’s derivations, supplier-use records, and current hash bindings were updated.

3. `thm-tdmath-spatial-mean-information`, Facts & Assumptions and Proof 7.1: the statement said that without ergodicity the invariant limit need not be constant, but the proof had no example. I added the exact Poisson-mixture construction \(P_*=(Q_1+Q_z)/2\), computed its finite-volume likelihood ratio and finite specific entropy, and used the Poisson count variance and Chebyshev’s inequality to show that the normalized log density converges in probability to 0 under \(Q_1\) and to \(1-z+z\log z>0\) under \(Q_z\). Since both components have positive mixture weight, the invariant \(L^1(P_*)\) limit is nonconstant. Facts F6–F7 and their exact supplier records were added; the proof contract derivations, citations, supplier-use notes, and current hash binding were updated.

There were no stale `verification.judge` records on the three edited items. No confirmed defect remained in the assigned pages, other assigned items, or opened published prerequisite statements.

## Page verdicts

- `td-math-spatial-measure-and-information` (A page): the definitions and conditional measure-theoretic proofs are sound after the repairs above. The page summary accurately limits these claims to mathematical constructions and deductions. The source citations distinguish the continuum result from the finite-state lattice comparison.
- `td-math-spatial-measure-and-information-examples` (B page): the zero-reference baseline, changed-intensity entropy calculation, and superlinear-test counterexample are sound and match the A-page definitions. They make no empirical or physical claim.

## Checks and blocker

- Reflow completed for the three changed items and reported each unchanged.
- Scoped precheck passed for `lem-tdmath-conditional-log-density-convergence`, `thm-tdmath-local-tame-entropy-compactness`, and `thm-tdmath-spatial-mean-information`.
- The required final `proof-layout` command was attempted for all three changed items. The renderer failed before scanning because Node could not resolve the web application alias `@/components` imported by `/Users/ianx/Projects/prestige-intelligence/web/components/library/ItemBody.tsx`. Retrying with `TSX_TSCONFIG_PATH` set to the web `tsconfig.json` produced the same module-resolution error. No renderer result is claimed. This is the remaining handoff blocker; the scoped proof prechecks did pass.
- No uneditable mathematical or physics defect remains to route. The findings array is empty.
