# Step 3a scope review — group a

Run: `phase-2-next-17`

Role: `alpha`

Batches: 1, 3

Review type: scope only; no item or proof approvals

## Review basis

I compared the current A/B manifests and coverage ledgers with the complete
binding MT-22 and PT-9 prose sections, current `plan-spec.json` page metadata,
the scope ledger, planning and drift records, batch construction notes,
cross-batch dependency records, and the available owner prerequisite decision.
There is no current owner Step-3a decision for either page. Both cross-batch
dependency files are empty.

The machine-readable plan has empty item arrays for these four pages, but its
page metadata and prerequisite edges agree with the binding prose and the
current manifests. The manifests preserve exactly the prose inventories:
33 A plus 11 B items for MT-22 and 15 A plus 7 B items for PT-9. I treat the
empty plan arrays as the recorded pre-materialization staging state, not as a
competing instruction to remove the explicitly commissioned inventories.

Coverage records 75 harvested or canonical results with no undisposed row.
For the technically less familiar branches I also checked the complete relevant
arguments in Sarig's induced-transformation/Kac section (Definition 1.18 and
Theorem 1.7, pp. 28–29) and Billingsley's normalized infinitesimal-array
classification and normal specialization (Theorems 28.1–28.4 and Example 28.4,
pp. 372–375 of the available scan). These support the breadth claimed by the
coverage records; this check is not an approval of the scaffold proofs.

## Decisions

| A page | Inventory | Decision | Scope rationale |
| --- | ---: | --- | --- |
| `measure-preserving-transformations-and-poincare-recurrence` | A33 / B11 | `sufficient` | The pair supplies the full MT-22 role after importing the common system, invariance, ergodicity, mixing, and Koopman language from MT-21a/21b: finite-measure and topological recurrence; first returns and induced systems; induced preservation and ergodicity; Kac return and excursion formulas; circle rotations, all integer-base circle maps, doubling, and the hand-built fair-coin shift; compact-metric Krylov–Bogolyubov existence; and explicit positive, false-statement, and counterexample coverage of invertibility, finiteness, strict versus mod-null invariance, orbit density, mixing converses, dependence on the invariant measure, and Kac's ergodicity hypothesis. The general base-$b$ supplier serves MT-23, Krylov–Bogolyubov prevents its unique-ergodicity interface from being vacuous, and finite-measure recurrence supplies the later Hamiltonian recurrence corollary. The full von Neumann/Birkhoff theorems belong to MT-23; Gauss-map ergodicity, natural extensions, entropy, abstract ergodic decomposition, and further torus/Haar/$p$-adic models are not needed for this pair's recurrence-and-model-systems role. No merger or enrichment is required. |
| `central-limit-theorems` | A15 / B7 | `sufficient` | The pair covers PT-9's finite-variance and normalized-array spine: normal characteristic functions; the second-order finite-variance expansion; the classical iid theorem and de Moivre–Laplace; row-wise independent triangular arrays, Lindeberg and Feller conditions, Lindeberg–Feller sufficiency and Feller's converse, and Lyapunov's criterion; multivariate normal laws with singular covariance and the multivariate iid theorem; plus the convergence-mode warning. Its examples cover binomial and uniform approximations, genuinely nonidentical arrays, Lyapunov and Lindeberg use, a degenerate Gaussian limit, failure under infinite variance, and necessity of Feller negligibility in the converse. This is enough for its downstream Gaussian finite-dimensional-law and later probability/asymptotic consumers. Berry–Esseen rates, local or functional CLTs, arbitrary domains of attraction, random-index limits, nonlinear delta methods, three-series material, and general infinitely divisible limits are deliberate boundaries or have other destinations, not omissions from PT-9. No merger or enrichment is required. |

## Checks and conclusion

- `coverage-checklist` on batches 1 and 3: 2 pages, 75 results, 0 errors,
  0 warnings.
- `manifest-deps` on batches 1 and 3: 66 items, 0 errors.
- Current page-level consumers in `plan-spec.json` are present and consistent
  with the roles above; no same-run consumer/supplier edge is missing.

Both assigned A/B pairs are scope-sufficient for their intended roles in the
library. This report does not approve any proof, dependency proof, item, or
owner transition.
