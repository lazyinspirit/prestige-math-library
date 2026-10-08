# Divisors/Riemann–Roch requires-closure proposal addendum

Run: `frontier-43-complex-representation-15`. Preparatory follow-up only. This is the only file written in this follow-up; no item, manifest, page, global plan, runtime, decision or receipt was changed. Native scheduling has resumed, so any eventual correction must wait for a root-confirmed stable window after the native divisor writer drains.

## Confirmed current failure

The actual current-manifest diagnostic

`node tools/validate-plan.mjs research/plan-spec.json --run frontier-43-complex-representation-15`

exited **1** and emitted all eight previously recorded `undeclared-prereq` diagnostics for this pair. Unlike the earlier two-page diagnostic without `--run`, this invocation overlays every active manifest's item inventory and `requires` onto the plan. It reported all30 current pages and381 items. The pair's current A and B rows still omit every one of the eight missing supplier page paths. Consequently this is a present structural failure of the actual current-manifest closure; it is **not automatically harmless until Step4**. The earlier completion report's Step4 boundary must be read as a global-plan write-scope boundary, not an exemption from the Step3 current-manifest check.

This was a read-only validator diagnostic, not an autopilot workflow gate attempt, and no claim is made that the run-wide gate passed. The output also contained sibling findings outside this assignment; this addendum does not dispose of them.

Current page orders are A1612 and B1613. Existing A `requires` has seven entries: `mittag-leffler-and-runges-theorem`, `presheaves-sheaves-stalks-and-sheafification`, `sheaf-operations-exactness-ringed-spaces-and-module-pullback`, `sheaf-cohomology-cech-cohomology-and-comparison`, `riemann-surfaces-branched-maps-and-differentials`, `hodge-theory-on-compact-riemann-surfaces`, and `the-dbar-complex-and-integral-solutions`. B requires only A. With current run overlays, their declared transitive closure sizes are379 and380 respectively; none of the eight named supplier pages lies in either closure.

## Minimal correction by total number of new backward edges

The smallest correction across the pair is **three new requires edges**:

- A adds `the-de-rham-theorem-and-degree` (order1096).
- A adds `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` (order1154).
- B adds `elliptic-functions-and-complex-tori` (order1604).

Keep every existing requires entry and all22 item statements/proofs/IDs. Both A additions are strictly earlier than1612; the B addition is earlier than1613. No item-edge change, new item, theorem weakening, or global-plan write is needed to correct the **current manifest** boundary. Root may subsequently splice these established prerequisites into the canonical plan through the normal workflow.

The algebraic A addition is a prerequisite wrapper: A's own direct algebraic suppliers live on the smooth-projective Serre-duality and quasi-coherent-cohomology pages. The residues/curve-duality page already declares both as prerequisites and also declares the smooth-proper-curve page needed by B. Declaring that existing backward wrapper on A therefore supplies A's actual algebraic prerequisites and lets B inherit the required algebraic closure through its existing A edge. This extra prerequisite is compatible with the approved arguments; it introduces no result or new claim.

The exact existing paths that cover the eight defects are:

| Missing supplier page | Existing requires path after the three additions |
|---|---|
| `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` (928) | A → `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` → this page |
| `smooth-projective-serre-duality-and-flag-variety-line-bundles` (1152) | A → `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` → this page |
| `the-de-rham-complex-homotopy-and-mayer-vietoris` (1092) | A → `the-de-rham-theorem-and-degree` → this page |
| `the-de-rham-theorem-and-degree` (1096) | A → this page |
| `elliptic-functions-and-complex-tori` (1604) | B → this page |
| `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` (1154) | B → A → this page |
| `flat-smooth-and-etale-morphisms` (918) | B → A → `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` → `smooth-proper-curves-divisors-genus-and-ramification` → this page |
| `smooth-proper-curves-divisors-genus-and-ramification` (930) | B → A → `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` → this page |

Minimality was checked against the entire current overlaid plan's earlier page requires graph, not just the eight names. No single page earlier than A has both the de Rham-degree and smooth-projective-duality pages in its own requires closure (including itself), so A needs at least two new edges. Across all earlier pages there are eight distinct nonempty coverage patterns on the eight missing pages; no union of two earlier-page closure patterns covers all eight. Thus two A additions cannot also close B with zero additions, and a total of two additions is impossible. The three additions above cover all eight and attain that lower bound. This is structural set-cover reasoning over current declared requires, not a proof-audit or workflow gate.

For comparison, if each page may add only a page that directly homes one of that page's own missing suppliers, the irredundant correction is four edges: A adds `smooth-projective-serre-duality-and-flag-variety-line-bundles` and `the-de-rham-theorem-and-degree`; B adds `elliptic-functions-and-complex-tori` and `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`. That version keeps the algebraic wrapper on B but is not minimal by total edge count. Both variants were evaluated in memory against the same overlaid requires graph and left zero of the eight missing paths uncovered; neither was applied to disk.

## Exact current item-to-supplier mappings

These are direct dependencies in the union of each owned item's current manifest deps and actual item-frontmatter deps, with supplier homes determined from the current plan/run overlay and actual library pages. They explain every diagnostic rather than merely adding page names without mathematical provenance.

| Consumer | Exact supplier | Missing supplier page |
|---|---|---|
| `thm-smooth-function-module-sheaves-are-acyclic` | `lem-ringed-space-module-sheaves-enough-injectives` | `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` |
| `thm-smooth-function-module-sheaves-are-acyclic` | `lem-injective-modules-flasque-and-ext-of-structure-sheaf` | `smooth-projective-serre-duality-and-flag-variety-line-bundles` |
| `lem-structure-sheaf-euler-characteristic-is-one-minus-genus` | `cor-closed-differential-forms-are-locally-exact` | `the-de-rham-complex-homotopy-and-mayer-vietoris` |
| `lem-structure-sheaf-euler-characteristic-is-one-minus-genus` | `cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology` | `the-de-rham-theorem-and-degree` |
| `lem-structure-sheaf-euler-characteristic-is-one-minus-genus` | `cor-top-de-rham-cohomology-of-a-closed-connected-oriented-manifold-is-real` | `the-de-rham-theorem-and-degree` |
| `lem-structure-sheaf-euler-characteristic-is-one-minus-genus` | `def-de-rham-cohomology` | `the-de-rham-complex-homotopy-and-mayer-vietoris` |
| `ex-divisors-and-riemann-roch-on-the-riemann-sphere-and-the-torus` | `def-complex-lattice-and-complex-torus` | `elliptic-functions-and-complex-tori` |
| `ex-divisors-and-riemann-roch-on-the-riemann-sphere-and-the-torus` | `thm-complex-torus-quotient-is-well-defined` | `elliptic-functions-and-complex-tori` |
| `ex-divisors-and-riemann-roch-on-the-riemann-sphere-and-the-torus` | `def-elliptic-function-for-a-lattice` | `elliptic-functions-and-complex-tori` |
| `ex-divisors-and-riemann-roch-on-the-riemann-sphere-and-the-torus` | `thm-weierstrass-p-normal-convergence-and-periodicity` | `elliptic-functions-and-complex-tori` |
| `ex-hyperelliptic-canonical-divisors` | `def-hyperelliptic-curve` | `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` |
| `ex-hyperelliptic-canonical-divisors` | `thm-canonical-map-nonhyperelliptic-curve` | `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` |
| `ex-hyperelliptic-canonical-divisors` | `cor-projective-embedding-every-smooth-proper-curve` | `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` |
| `ex-hyperelliptic-canonical-divisors` | `thm-jacobian-criterion-smooth-morphism` | `flat-smooth-and-etale-morphisms` |
| `ex-hyperelliptic-canonical-divisors` | `thm-local-ring-smooth-curve-dvr` | `smooth-proper-curves-divisors-genus-and-ramification` |
| `ex-hyperelliptic-canonical-divisors` | `def-canonical-line-bundle-curve` | `smooth-proper-curves-divisors-genus-and-ramification` |
| `ex-hyperelliptic-canonical-divisors` | `def-nonconstant-morphism-curves-degree` | `smooth-proper-curves-divisors-genus-and-ramification` |
| `ex-hyperelliptic-canonical-divisors` | `cor-canonical-degree-two-g-minus-two` | `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` |
| `ex-hyperelliptic-canonical-divisors` | `cor-h0-canonical-differentials-genus` | `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` |
| `ex-failed-principal-parts-problem-detected-by-residues` | `def-complex-lattice-and-complex-torus` | `elliptic-functions-and-complex-tori` |
| `ex-failed-principal-parts-problem-detected-by-residues` | `thm-complex-torus-quotient-is-well-defined` | `elliptic-functions-and-complex-tori` |

A's two consumers are the proved smooth-function-module acyclicity theorem and the structure-sheaf genus/Euler-characteristic lemma. B's missing algebraic paths all come from the full arbitrary-curve hyperelliptic bridge, and its elliptic paths come from the sphere/torus computation and the explicit principal-parts obstruction. These exact dependencies are required by the retained rich claims and are not candidates for removal just to force a gate.

## Scope, verification boundary and next action

The existing all22 item files, both pages, scoped final local check evidence and canonical hashes are preserved. This proposal corrects the interpretation of the outstanding manifest prerequisite failure without altering that mathematical work. The same reviewer will own any structural correction after a native writer drains.

In the stable correction window, reread the current native-written batch10 rows before applying the selected three-edge amendment, refresh affected page/scope evidence honestly, and rerun the current-manifest `--run` diagnostic to confirm these eight pair findings disappear. Sibling findings remain separate. No native receipt, owner decision, gate success or stable central Step3 recertification should be invented from this preparatory result.



## Authorized structural correction round 1 — applied and drained

Root selected the semantically direct four-edge variant and confirmed native pause with no divisor writer. Added only A prerequisites `smooth-projective-serre-duality-and-flag-variety-line-bundles` and `the-de-rham-theorem-and-degree`, and B prerequisites `elliptic-functions-and-complex-tori` and `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`. All existing entries were retained. Structural comparison confirms every other manifest key/item row is unchanged; raw hashes confirm all22 item files, both authored page files and the proof-contract file retain exactly the same bytes. No scope inventory, global plan, runtime, decision or native receipt changed.

The actual permitted `--run` overlay diagnostic was rerun after the edit. Its exit code is 1. The exact two owned pages have 0 remaining errors: all eight confirmed prerequisite-closure defects disappeared. The full overlay still reports 46 errors on active sibling subjects; their exact output is recorded, without claiming a workflow gate pass or central certification. The validator requires `--run` selection to include all current run manifests, so no forbidden two-page subset invocation was substituted. Exact command, output, before/after requires, hashes and remaining sibling diagnostics are in `research/frontier-43-complex-representation-15-divisors-requires-closure-repair-evidence.json`.

Writer drained. No further writes planned; root can resume native scheduling.
