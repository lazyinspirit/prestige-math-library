# Step 3a reader report — batch 1

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Batch: `1`  
Date: 2026-10-15

## Scope and opened inventory

Reviewed both assigned pages and all 11 assigned items:

- A page [`td-thermodynamic-framework`](../library/thermodynamics/td-thermodynamic-framework.md): `def-td-si-quantities`, `def-td-system-and-permitted-exchanges`, `def-td-galilean-rest-frame`, `def-td-equilibrium-state-domain`, `def-td-process-and-protocol`, `post-td-bulk-additivity`, and `post-td-first-law-energy`.
- B page [`td-thermodynamic-framework-examples`](../library/thermodynamics/td-thermodynamic-framework-examples.md): `ex-td-system-exchange-boundaries`, `ex-td-si-unit-arithmetic`, `ex-td-first-law-sign-convention`, and `ex-td-joule-primary-work-heat-report`.

Read the batch-1 manifest, its proof-contract file, cross-batch dependency record, source coverage record, batch notes, and the frame-definition readiness record as navigation and evidence only. The readiness record is not treated as independent acceptance.

Opened the direct mathematical suppliers used by the assigned items: `def-interval`, `def-cartesian-product`, `def-euclidean-inner-product`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-cauchy-schwarz-finite`, `def-function-space`, `def-function-limit`, `def-natural-numbers`, `def-finite-sum`, `def-matrix-space`, `def-matrix-product-and-identity-matrix`, `def-transpose-of-a-matrix`, `def-convex-subset-of-euclidean-space`, `def-probability-measure`, and `def-subset-and-proper-subset`. The relevant definitions and statements match the uses in batch 1. The published finite-sum Cauchy–Schwarz supplier has the required squared inequality, root form, and symmetric proportionality equality case; its item records a verified proof. The transitive proof closures of the published mathematical imports were not re-audited.

## Independent review and source evidence

- `def-td-si-quantities`: the quantity types, displayed units, dimensional identities, exact `k_B` and `N_A` values, and derived `R` value are consistent. The current BIPM SI Brochure v4.01 records the exact constants and unit relations cited by the item. No claim is made that units alone determine physical meaning.
- `def-td-system-and-permitted-exchanges`: the selected outer-boundary convention distinguishes external transfers from transfers internal to a compound system, and does not infer an energy law or equilibration. The idealized classifications are consistent with OpenStax §3.1.
- `def-td-galilean-rest-frame`: the item states an absolute-time Newtonian domain, gives its Galilean coordinate changes and units, explicitly identifies “frame” as a chart, and separates point-mass center-of-mass construction from compatibility conditions imposed on other models. The velocity derivative is defined only where the component limits exist; for each `t` in the stated open interval, `0` is a limit point of `H_t`. The rest-frame and constant-velocity claims follow from the displayed transformation and `RᵀR=I`. OpenStax §§5.1 and 5.2 provide the stated Galilean and inertial-frame context; the item's fuller rotation/translation convention is its own model definition.
- `def-td-equilibrium-state-domain`: the state labels, dimensionless coordinate map, image domain, fixed-composition slice, open/convex assumptions, and separation of equilibrium state charts from statistical preparations are explicit. Openness and convexity are declared model inputs rather than deductions about every state domain. Lieb–Yngvason §§II.A and III.A describe equilibrium state spaces, composition, internal energy, and work coordinates; the local definition does not claim their axioms prove its additional model assumptions.
- `def-td-process-and-protocol`: the record components and types, endpoint conditions, fixed bookkeeping chart, closed-record subclass, endpoint energy exclusions, signs and units of protocol maps, adiabatic condition, and absence of path regularity are all stated. The item distinguishes process transfers from state coordinates. Tong §4.2 and OpenStax §§3.2–3.3 support the cited transfer distinctions.
- `post-td-bulk-additivity`: the postulate is restricted to a specified set of admitted subsystem pairs, names the composition map and its dimensioned coordinate equations, aligns species, and treats absent-species boundaries and omitted interaction energy explicitly. Tagged scaling is defined on a declared subset and does not identify the scaled tag with the original material. It is clearly an adopted rule, not a deduction from units or Cartesian products.
- `post-td-first-law-energy`: the postulate is restricted to the declared closed-record class with fixed constitution and zero changes in separately tracked kinetic and external-field potential energy. The internal-energy coordinate, process transfer maps, units, sign convention, and adiabatic specialization agree with their suppliers. Tong §4.2 states the heat-in/work-on convention; OpenStax §3.3 gives the equivalent heat-in/work-by-positive convention. The item labels the balance as an adopted model postulate and does not use Joule's report as proof.
- `ex-td-system-exchange-boundaries`: the sealed, outlet, and ideal insulated examples are correctly classified under the stated boundary model and are explicitly not claims about perfect real apparatus.
- `ex-td-si-unit-arithmetic`: both products reduce to joules from the supplied SI unit identities. The verification steps are elementary and correctly formatted.
- `ex-td-first-law-sign-convention`: defining `W_by=-W_on` converts `ΔU=Q+W_on` to `ΔU=Q-W_by`. The example correctly marks the postulate as its physical premise and its two verification steps follow by substitution.
- `ex-td-joule-primary-work-heat-report`: Joule's source supports the water paddle-wheel apparatus, revolving arms and stationary vanes, water-tight copper vessel, boxwood shaft interruption, thermometer calibration, matched apparatus-at-rest trials, and the reported correction caveat. The concluding proposition gives the rounded 772 foot-pound figure for a pound of water weighed in vacuo between 55°F and 60°F raised by 1°F. The source also identifies 772.692 as the water-friction equivalent it considers most correct and says vibration and sound likely make it slightly high. The item preserves this as a historical apparatus-specific report and does not add a modern uncertainty interval or statistical inference.

The source passages inspected were BIPM *The International System of Units*, 9th ed., v4.01, §§2.3.1–2.3.2 and derived-unit tables; OpenStax *University Physics* Volume 2 §§3.1–3.3, Volume 1 §5.2, and Volume 3 §5.1; Lieb and Yngvason, “The Physics and Mathematics of the Second Law of Thermodynamics,” §§II.A and III.A; Tong, *Statistical Physics*, §4.2 HTML; and Joule, “On the Mechanical Equivalent of Heat” (1850), printed pp. 64–67 and 82. Exact source passages were checked against the URLs already recorded in the item source metadata.

## Verdicts, edits, and unresolved defects

- `td-thermodynamic-framework`: **Pass.** The summary accurately describes the stated frame, state, process, and postulate scope.
- `td-thermodynamic-framework-examples`: **Pass.** The summary accurately describes the boundary/unit/sign examples and the source-reported historical account.
- Edits: none. No confirmed defect requiring a repair was found.
- Uneditable defects: none.
- Blocker: none.

No formatter, reflow, or precheck was run because no item was edited. The report's coverage limit is the transitive proof closure of already-published mathematical imports, which was not independently re-audited.
