# frontier-26 reader-4 report

Date: Monday, August 31, 2026.
Batch: `4`.
Assigned A/B pair: `analytic-continuation-and-monodromy` /
`analytic-continuation-and-monodromy-examples`.

## Opened scope

- Repo instructions and task artifacts: `CLAUDE.md`, `README.md`,
  `research/frontier-26-reader.task.md`, `research/frontier-26-beta-4.task.md`,
  `research/frontier-26-covers.json`,
  `research/frontier-26-batch-4.pages.json`,
  `research/frontier-26-batch-4.coverage.json`,
  `research/frontier-26-batch-4.proof-contracts.json`,
  `research/frontier-26-batch-4.notes.md`.
- Assigned pages:
  `library/complex-analysis/analytic-continuation-and-monodromy.md`,
  `library/complex-analysis/analytic-continuation-and-monodromy-examples.md`.
- Assigned items:
  `def-holomorphic-germ`,
  `thm-holomorphic-germs-at-a-point-form-a-local-ring`,
  `def-function-element-and-direct-analytic-continuation`,
  `def-analytic-continuation-along-a-path`,
  `lem-refinement-of-analytic-continuation-chains`,
  `thm-end-germ-of-path-continuation-is-independent-of-the-chain`,
  `thm-uniqueness-of-analytic-continuation`,
  `def-complete-analytic-function`,
  `thm-monodromy-theorem`,
  `cor-single-valued-continuation-on-simply-connected-domains`,
  `rem-monodromy-corollary-agrees-with-the-earlier-simply-connected-logarithm-theorems`,
  `def-riemann-surface-of-a-complete-analytic-function`,
  `lem-germ-neighborhoods-form-a-riemann-surface-basis`,
  `thm-germ-projection-is-a-local-biholomorphism`,
  `rem-covering-maps-among-complete-analytic-functions`,
  `thm-riemann-surface-of-the-logarithm`,
  `thm-riemann-surface-of-an-nth-root`,
  `rem-schwarz-reflection-as-analytic-continuation`,
  `def-singular-boundary-point-and-natural-boundary`,
  `thm-circle-of-convergence-contains-a-singular-point`,
  `thm-pringsheim-theorem`,
  `thm-factorial-gap-series-has-the-unit-circle-as-natural-boundary`,
  `ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i`,
  `ex-square-root-continuation-around-the-origin-changes-sign`,
  `ex-helicoid-model-of-the-logarithm-surface`,
  `ex-two-sheeted-model-of-the-square-root-surface`,
  `ex-the-geometric-series-has-only-one-singular-boundary-point`,
  `cex-the-factorial-gap-series-has-the-unit-circle-as-a-natural-boundary`,
  `cex-sum-z-to-n-over-n-squared-is-continuous-on-the-closed-disc-but-singular-at-one`,
  `fs-every-holomorphic-function-on-a-domain-continues-past-its-boundary`,
  `fs-continuation-along-same-endpoint-paths-always-agrees`,
  `fs-the-riemann-surface-of-a-multivalued-function-is-always-a-subset-of-c-squared`,
  `fs-every-boundary-point-of-a-radius-one-power-series-is-singular`.
- Published dependencies opened for verification:
  `def-complex-differentiability-holomorphic-and-entire`,
  `def-complex-domain`,
  `thm-algebra-of-complex-derivatives`,
  `def-local-ring`,
  `def-homotopy-relative-and-path-homotopy`,
  `thm-lebesgue-number-lemma`,
  `def-based-loops-and-fundamental-group`,
  `thm-fundamental-group-laws`,
  `def-simply-connected`,
  `thm-identity-theorem-holomorphic-functions`,
  `thm-basis-criterion`,
  `def-hausdorff-space`,
  `def-second-countable-space`,
  `thm-open-connected-subsets-of-rn-are-polygonally-connected`,
  `def-biholomorphic-map`,
  `def-local-homeomorphism`,
  `def-covering-map-and-evenly-covered-neighbourhoods`,
  `thm-principal-exponential-biholomorphism-from-principal-strip`,
  `thm-kernel-and-fibres-of-complex-exponential`,
  `cor-winding-number-classifies-loops-in-the-punctured-plane`,
  `def-monodromy-action-on-a-covering-fibre`,
  `thm-slit-plane-root-branch-biholomorphism-to-a-sector`,
  `cor-principal-logarithm-is-holomorphic-on-the-slit-plane`,
  `thm-branch-discrepancies-for-logarithm-and-complex-powers`,
  `thm-cauchy-hadamard-for-complex-power-series`,
  `thm-complex-power-series-reexpansion-at-an-interior-point`,
  `thm-heine-borel-rn`,
  `thm-complex-power-series-converge-locally-uniformly`,
  `def-factorial-and-falling-factorial`,
  `thm-p-series-rational`,
  `thm-weierstrass-m-test-for-complex-function-series`,
  `thm-geometric-series`,
  `thm-complex-numbers-form-a-field`,
  `thm-absolute-convergence-of-complex-series`,
  `thm-holomorphic-logarithms-homologically-simply-connected-domains`,
  `rem-analytic-equivalences-from-global-cauchy-theory`,
  `thm-grand-equivalence-for-simply-connected-plane-domains`,
  `thm-harmonic-and-holomorphic-schwarz-reflection-principles`,
  `rem-simple-connectedness`.

## Edits

1. Repaired
   `items/def-singular-boundary-point-and-natural-boundary.md`.
   The old definition called a boundary point regular after mere agreement at a
   remote overlap point, which did not ensure extension near the named boundary
   point. I tightened regularity to honest neighbourhood extension across the
   boundary point itself.
2. Repaired `items/lem-refinement-of-analytic-continuation-chains.md`.
   The old proof used one Lebesgue number for the union of two covers and then
   concluded each small interval lay in one set from each cover, which does not
   follow. I rewrote the proof to use separate Lebesgue numbers for the two
   pulled-back covers.
3. Repaired
   `items/cor-single-valued-continuation-on-simply-connected-domains.md`.
   The old proof introduced an inverse continuation operator on reachable germs
   without building it. I replaced that step with an explicit endpoint-fixed
   path homotopy from a nullhomotopy of `\bar\gamma * \beta`, then applied the
   monodromy theorem directly.
4. Repaired
   `items/ex-square-root-continuation-around-the-origin-changes-sign.md`.
   The old proof relied on logarithm branches from the previous example instead
   of defining them locally. I made the witness self-contained and justified the
   overlap agreement by the branch-discrepancy theorem.
5. Synchronized
   `items/thm-circle-of-convergence-contains-a-singular-point.md` and
   `items/thm-pringsheim-theorem.md` with the repaired singular-boundary
   definition.
6. Updated `research/frontier-26-batch-4.proof-contracts.json` so the
   derivation rows and citation quotes match the repaired items.

## Confirmed defects

- Repaired in-flight defect:
  `items/def-singular-boundary-point-and-natural-boundary.md`.
  Class: false claim.
  Evidence: the previous definition allowed `(g,V)` to agree with `(f,U)` at an
  overlap point unrelated to the named boundary point `\zeta`, so it did not
  capture extension across `\zeta`.
- Repaired in-flight defect:
  `items/lem-refinement-of-analytic-continuation-chains.md`, step `2.1`.
  Class: unlicensed inference.
  Evidence: a Lebesgue number for the union cover only gives inclusion in one
  member of that union, not simultaneously in one pulled-back set from each
  chain.
- Repaired in-flight defect:
  `items/cor-single-valued-continuation-on-simply-connected-domains.md`,
  old step `2.1`.
  Class: unlicensed inference.
  Evidence: the proof invoked an inverse continuation operator on reachable
  germs without defining or proving that operator inside the library's current
  continuation framework.
- Repaired in-flight defect:
  `items/ex-square-root-continuation-around-the-origin-changes-sign.md`,
  old step `1.1`.
  Class: missing hypothesis.
  Evidence: the proof referred to branches from the previous example rather than
  defining the branches inside the item or citing a dependency that supplied
  them.

No uneditable mathematical defect remains in the assigned pages, items, or
opened dependencies.

## Page verdicts

- `analytic-continuation-and-monodromy`: pass after the repairs above. The germ,
  continuation, monodromy, surface, and boundary statements now read coherently
  against the opened dependency stack.
- `analytic-continuation-and-monodromy-examples`: pass after the square-root
  repair. The logarithm/square-root monodromy witnesses, the geometric and
  factorial boundary witnesses, and the false-statement refutations all check
  on current bytes.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/def-singular-boundary-point-and-natural-boundary.md items/lem-refinement-of-analytic-continuation-chains.md items/cor-single-valued-continuation-on-simply-connected-domains.md items/thm-circle-of-convergence-contains-a-singular-point.md items/thm-pringsheim-theorem.md items/ex-square-root-continuation-around-the-origin-changes-sign.md`
- `node tools/tsx-run.mjs tools/precheck.mts items/def-singular-boundary-point-and-natural-boundary.md items/lem-refinement-of-analytic-continuation-chains.md items/cor-single-valued-continuation-on-simply-connected-domains.md items/thm-circle-of-convergence-contains-a-singular-point.md items/thm-pringsheim-theorem.md items/ex-square-root-continuation-around-the-origin-changes-sign.md`
- `node tools/proof-contract.mjs research/frontier-26-batch-4.proof-contracts.json --strict`
- `node tools/finite-smoke.mjs research/frontier-26-batch-4.proof-contracts.json`
- `node tools/risk-report.mjs research/frontier-26-batch-4.proof-contracts.json --items lem-refinement-of-analytic-continuation-chains,cor-single-valued-continuation-on-simply-connected-domains,thm-circle-of-convergence-contains-a-singular-point,thm-pringsheim-theorem,ex-square-root-continuation-around-the-origin-changes-sign`
- `node tools/boundary-audit.mjs research/frontier-26-batch-4.proof-contracts.json`
- `node tools/citation-fidelity.mjs research/frontier-26-batch-4.proof-contracts.json`
- `node tools/gate-liveness.mjs --run frontier-26 --contracts research/frontier-26-batch-4.proof-contracts.json --checklists research/frontier-26-batch-4.coverage.json --min-checks 1`
- `node tools/content-policy.mjs research/frontier-26-batch-4.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/rendercheck.mjs library/complex-analysis/analytic-continuation-and-monodromy.md library/complex-analysis/analytic-continuation-and-monodromy-examples.md items/def-singular-boundary-point-and-natural-boundary.md items/lem-refinement-of-analytic-continuation-chains.md items/cor-single-valued-continuation-on-simply-connected-domains.md items/thm-circle-of-convergence-contains-a-singular-point.md items/thm-pringsheim-theorem.md items/ex-square-root-continuation-around-the-origin-changes-sign.md`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-4.coverage.json`
- `git diff --check -- items/def-singular-boundary-point-and-natural-boundary.md items/lem-refinement-of-analytic-continuation-chains.md items/cor-single-valued-continuation-on-simply-connected-domains.md items/thm-circle-of-convergence-contains-a-singular-point.md items/thm-pringsheim-theorem.md items/ex-square-root-continuation-around-the-origin-changes-sign.md research/frontier-26-batch-4.proof-contracts.json`

Observed results:

- `precheck` passed on all five proof-bearing changed items; the changed
  definition item remains `precheck: n/a`.
- `proof-contract --strict` passed with `24/24` scoped proof-bearing items
  checked.
- `finite-smoke` reported `0 error(s), 0 check(s) over 0/24 item(s) carrying
  obligations`.
- `risk-report` still routes the changed proof-bearing items as
  `MODERATE/CRITICAL/HIGH`; that is metadata, not a surviving reader defect.
- `boundary-audit` reported `192` rows with `166` marked `not_applicable`; I
  opened the three contradicted `empty`-axis candidates and did not confirm a
  mathematical defect from them.
- `citation-fidelity` reported `61` citations with no missing quotes and no
  widening candidates.
- `gate-liveness` reports one vacuous gate: `finite-smoke` checked nothing on
  the current contract scope.
- `content-policy` passed with `33 scoped item(s), 0 error(s), 0 warning(s)`.
- `validate-plan` ended `OK` with only the repository's standing
  `redundant-prereq` advisories outside this batch.
- `rendercheck` passed on the two page files plus the six changed item files.
- `coverage-checklist` passed with `1` page and `40` harvested results.
- `git diff --check` was clean on the changed files.

## Blockers

- No mathematical blocker remains for batch `4`.
- Process note only: `gate-liveness` still marks `finite-smoke` vacuous because
  the current batch-4 proof contract carries no finite-smoke obligations.
