# Frontier-25 Reader-4 Report

## Scope opened

- Control artifacts: `research/frontier-25-reader.task.md`, `research/frontier-25-batch-4.pages.json`, `research/frontier-25-batch-4.coverage.json`, `research/frontier-25-batch-4.notes.md`, `research/frontier-25-batch-4.proof-contracts.json`, `.autopilot/status.md`, `.autopilot/state.json`.
- Design and spec context: `research/plan-complex-analysis-track.md` at CA-17, plus the live `research/plan-spec.json` entries for `simply-connected-plane-domains` and `simply-connected-plane-domains-examples`.
- Assigned pages: `library/complex-analysis/simply-connected-plane-domains.md`, `library/complex-analysis/simply-connected-plane-domains-examples.md`.
- Assigned A-page items opened: `thm-homotopy-invariance-of-holomorphic-line-integrals`, `cor-cauchy-theorem-for-null-homotopic-loops`, `thm-winding-number-equals-circle-degree`, `lem-trivial-fundamental-group-implies-null-homology-for-plane-domains`, `lem-connected-spherical-complement-implies-null-homology`, `lem-null-homology-implies-connected-spherical-complement`, `rem-analytic-equivalences-from-global-cauchy-theory`, `thm-null-homology-is-equivalent-to-global-harmonic-conjugates`, `lem-null-homology-gives-the-plane-or-disc-alternative`, `lem-the-plane-or-disc-alternative-gives-contractibility`, `lem-contractibility-implies-trivial-fundamental-group`, `thm-grand-equivalence-for-simply-connected-plane-domains`, `rem-simply-connected-convention-for-plane-domains`, `cor-spherical-complement-characterization-of-plane-simple-connectivity`, `cor-winding-number-classifies-loops-in-the-punctured-plane`, `rem-choice-strength-of-the-grand-equivalence`.
- Assigned B-page items opened: `ex-the-unit-disc-satisfies-all-grand-equivalence-clauses`, `ex-the-complex-plane-satisfies-all-grand-equivalence-clauses`, `ex-the-slit-plane-is-simply-connected-by-the-principal-logarithm`, `ex-every-convex-plane-domain-is-simply-connected`, `ex-every-star-shaped-plane-domain-is-simply-connected`, `ex-a-dumbbell-domain-is-simply-connected-but-not-star-shaped`, `cex-the-punctured-plane-separates-c-complement-from-spherical-complement`, `cex-a-round-annulus-is-connected-but-not-simply-connected`, `cex-the-punctured-disc-is-connected-but-not-simply-connected`, `fs-connected-complement-in-c-implies-simple-connectivity`, `fs-simply-connected-plane-domains-are-convex`, `fs-simply-connected-plane-domains-are-star-shaped`.
- Page-level dependencies opened: `library/complex-analysis/the-riemann-mapping-theorem.md`, `library/topology/the-fundamental-group.md`, `library/topology/covering-spaces-and-lifting.md`, `library/topology/the-fundamental-group-of-the-circle.md`.
- Direct dependency item files opened: 47 published items, namely `cor-cauchy-theorem-star-shaped-domain`, `cor-contour-integral-of-a-constant-is-an-endpoint-increment`, `cor-contractible-iff-identity-nullhomotopic`, `cor-convex-subsets-of-rn-are-contractible`, `cor-geometric-unit-circle-has-fundamental-group-z`, `cor-holomorphic-logarithm-has-the-logarithmic-derivative`, `cor-holomorphic-roots-homologically-simply-connected-domains`, `cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace`, `cor-principal-logarithm-is-holomorphic-on-the-slit-plane`, `cor-winding-number-is-the-normalized-argument-increment`, `def-based-loops-and-fundamental-group`, `def-complex-chain-and-cycle`, `def-complex-contours-reversal-concatenation-and-closedness`, `def-complex-domain`, `def-degree-of-a-circle-loop`, `def-harmonic-conjugate`, `def-homologically-simply-connected-complex-domain`, `def-homotopy-relative-and-path-homotopy`, `def-integration-and-index-of-complex-chain`, `def-null-homologous-and-homologous-complex-cycles`, `def-nullhomotopic-map-and-contractible-space`, `def-plane-harmonic-function`, `def-winding-number-closed-complex-contour`, `ex-change-of-basepoint-isomorphism-for-fundamental-groups`, `lem-grid-cycle-for-runge-approximation`, `prop-retracts-inject-fundamental-groups`, `prop-reversal-and-concatenation-of-complex-line-integrals`, `prop-star-shaped-plane-domains-are-homologically-simply-connected`, `rem-choice-strength-of-the-riemann-mapping-proof`, `thm-algebra-of-complex-derivatives`, `thm-chain-rule-for-complex-derivatives`, `thm-complex-exponential-addition-and-real-extension`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-composition-respects-homotopy`, `thm-convex-subsets-have-trivial-fundamental-group`, `thm-fundamental-group-laws`, `thm-fundamental-theorem-for-complex-line-integrals`, `thm-harmonic-conjugate-on-homologically-simply-connected-domains`, `thm-holomorphic-logarithms-homologically-simply-connected-domains`, `thm-holomorphic-primitive-on-star-shaped-domain`, `thm-homological-simple-connectivity-equivalences`, `thm-lebesgue-number-lemma`, `thm-open-mapping-theorem-holomorphic-functions`, `thm-punctured-rn-deformation-retracts-onto-the-sphere`, `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle`, `thm-riemann-mapping-theorem`, `thm-winding-number-circle-traversed-k-times`.

## Confirmed defects repaired

1. `items/thm-homotopy-invariance-of-holomorphic-line-integrals.md`
   defect: the original proof treated the image of each cell boundary under an arbitrary continuous homotopy as a rectifiable contour, which is not justified.
   repair: replaced that step with a polygonal-cell argument on the chosen discs, compared the polygonal boundary integrals by cancellation, and then matched the polygonal top and bottom paths back to the actual rectifiable paths using local primitives and the fundamental theorem for complex line integrals. Added the missing dependencies on `thm-holomorphic-primitive-on-star-shaped-domain` and `thm-fundamental-theorem-for-complex-line-integrals`, then refreshed the contract row.

2. `items/lem-null-homology-implies-connected-spherical-complement.md`
   defect: the original contradiction step appealed to an uncited and otherwise unsupported claim that the positively oriented boundary of the chosen Jordan neighborhood has index `1` on the enclosed compact component.
   repair: replaced the Jordan-boundary appeal with the published `lem-grid-cycle-for-runge-approximation`, which already supplies a cycle in `U \ K` with index `1` on `K`. The proof now closes directly from the published supplier and the contract row was refreshed.

3. `items/lem-contractibility-implies-trivial-fundamental-group.md`
   defect: the old proof incorrectly treated contractibility as though it gave a based homotopy `id_X ≃ c_{x_0}` for the chosen basepoint.
   repair: rewrote the argument from the actual contractibility supplier `cor-contractible-iff-identity-nullhomotopic`, built the loop-conjugation homotopy against the contraction point, and used the published basepoint-change isomorphism to transport triviality back to `x_0`. The dependency list and contract row were updated accordingly.

4. `items/cor-winding-number-classifies-loops-in-the-punctured-plane.md`
   defect: the proof used the radial deformation retraction of `\mathbb C^\times` onto the unit circle without citing the actual supplier.
   repair: routed the argument through `thm-punctured-rn-deformation-retracts-onto-the-sphere` and `prop-retracts-inject-fundamental-groups`, then identified the resulting circle class with the winding number via `thm-winding-number-equals-circle-degree`. The contract row was refreshed.

5. `research/frontier-25-batch-4.proof-contracts.json`
   repair: regenerated the citation and derivation entries for the four repaired items so the contract reflects the current on-disk facts blocks and proof-step numbering.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-homotopy-invariance-of-holomorphic-line-integrals.md items/lem-null-homology-implies-connected-spherical-complement.md items/lem-contractibility-implies-trivial-fundamental-group.md items/cor-winding-number-classifies-loops-in-the-punctured-plane.md`
- `node tools/regen-contract-entries.mjs research/frontier-25-batch-4.proof-contracts.json thm-homotopy-invariance-of-holomorphic-line-integrals lem-null-homology-implies-connected-spherical-complement lem-contractibility-implies-trivial-fundamental-group cor-winding-number-classifies-loops-in-the-punctured-plane`
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-homotopy-invariance-of-holomorphic-line-integrals.md items/lem-null-homology-implies-connected-spherical-complement.md items/lem-contractibility-implies-trivial-fundamental-group.md items/cor-winding-number-classifies-loops-in-the-punctured-plane.md`
- full authored-batch precheck over the 25 proof-bearing batch-4 items
- `node tools/proof-contract.mjs research/frontier-25-batch-4.proof-contracts.json --strict`
- `node tools/citation-fidelity.mjs research/frontier-25-batch-4.proof-contracts.json --fail-on-missing-quote`
- `node tools/rendercheck.mjs library/complex-analysis/simply-connected-plane-domains.md library/complex-analysis/simply-connected-plane-domains-examples.md items/thm-homotopy-invariance-of-holomorphic-line-integrals.md items/lem-null-homology-implies-connected-spherical-complement.md items/lem-contractibility-implies-trivial-fundamental-group.md items/cor-winding-number-classifies-loops-in-the-punctured-plane.md`
- `node tools/content-policy.mjs research/frontier-25-batch-4.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `git diff --check -- items/thm-homotopy-invariance-of-holomorphic-line-integrals.md items/lem-null-homology-implies-connected-spherical-complement.md items/lem-contractibility-implies-trivial-fundamental-group.md items/cor-winding-number-classifies-loops-in-the-punctured-plane.md research/frontier-25-batch-4.proof-contracts.json`

Results:

- changed-item precheck: all four repaired items clean
- full batch precheck: `25 checked, 0 failing`
- `proof-contract --strict`: `0` errors, `0` warnings, `25/25` checked
- `citation-fidelity`: `85` citations, no missing quote and no widening candidates
- `rendercheck`: clean on the two page files and four repaired items
- `content-policy`: `28` scoped items, `0` errors, `0` warnings
- `validate-plan`: exit `0`; the output still carries the repository’s standing out-of-batch `redundant-prereq` advisories
- `git diff --check`: clean on the touched batch-local paths

## Page verdicts

- `simply-connected-plane-domains`: pass on current bytes after the four item-level repairs. The page summary still matches the repaired item bodies and the declared route.
- `simply-connected-plane-domains-examples`: pass on current bytes. No B-page prose edit was needed.

## Uneditable defects and blockers

- No in-scope uneditable `in-flight-item`, `page`, or `published-dependency` defect remains on the current bytes.
- No batch-local blocker remains.
