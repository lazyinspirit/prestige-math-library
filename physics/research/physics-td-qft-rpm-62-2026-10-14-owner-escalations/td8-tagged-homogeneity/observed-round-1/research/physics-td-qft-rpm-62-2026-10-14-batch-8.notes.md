# Batch 8 authoring notes — Representation And Equilibrium

## Scope, plan comparison, and inventory

The authoritative owner direction was read before authoring and takes precedence over the stale TD4 design where they disagree. The TD4 design section and `research/plan-spec.json` agree on page IDs, order 273/274, title, thermodynamics category, physics library, page prerequisites (`td-entropy-foundation` and `td-math-nonsmooth-equilibrium`), and reservations: six named A items, A cap 28, B cap 14, hard cap 100 each. No plan-spec metadata conflict was found. The A page contains exactly the six named items; three leaf examples/countermodels are on B. The pair remains within both caps.

A page item order is dependency-aware: `def-td-temperature-pressure-chemical-potential` (level 5), then `post-td-mechanical-conjugate-identification`, `pthm-td-local-energy-representation`, `pthm-td-concave-stability`, and `def-td-response-functions` (each level 6), then `pthm-td-interior-exchange-equilibrium` (level 7). B examples are `cex-td-tagged-scaling-not-fixed-type-homogeneity` (level 5), `ex-td-local-response-chart` (level 7), and `ex-td-retained-volume-thermal-equilibrium` (level 8). These are item dependency levels recomputed from the current in-run manifests; imported mathematical suppliers do not raise run levels. The batch itself is level 2, requiring batches 2 and 4. This is dispatch priority, not a wait barrier.

## Inspected prerequisite interfaces and unresolved carriers

Current batch-1 and batch-2 suppliers were inspected at their actual draft statements and their dependency records are in the cross-batch file. They remain draft physical assumptions/definitions, not independent proof approvals. Relevant interfaces include: `post-td-concave-fundamental-entropy` adopts finite continuous concave entropy, additivity for independent separated systems, and C2/S_U>0 only on named open single-phase charts; its tagged scaling sends a state of tag c to a possibly distinct tag c^(lambda). `post-td-entropy-maximum` adopts an attained global maximum on the exact feasible set and supplies neither dynamics nor uniqueness. `def-td-isolated-compound-feasible-set` assumes no nonemptiness, compactness, convexity, or attainment; every allowed exchange is separately declared. The thermal-contact definition supplies no temperature scale or transitivity.

The required page prerequisite `td-math-nonsmooth-equilibrium` is still an empty batch-4 scaffold at this inspection. Two planned batch-4 suppliers required by this pair are absent: `lem-tdmath-constrained-curvature` (M2) and `thm-tdmath-local-implicit-rank` (M3). Their exact planned interfaces are preserved in the consuming items, proof contracts, and cross-batch records. The local energy representation proof is conditional on the M3 scalar local-inversion interface; the constrained-stability proof is conditional on M2. Both items are escalated. They were not omitted, treated as proved, or replaced with another pair's supplier. When the carriers appear, compare their actual hypotheses and proof status against the recorded uses before changing readiness.

A separate design mismatch concerns the planned M4 same-tag homogeneity argument and TD5 `pthm-td-euler-and-gibbs-duhem`. The actual entropy postulate states tagged scaling between c and c^(lambda), without identifying those tags. The M4 Euler/Hessian-null step requires a fixed function satisfying S_c(lambda x)=lambda S_c(x). The local stability item therefore states that result only under an explicit additional same-tag hypothesis, and the B countermodel satisfies the adopted tagged scaling/additivity while violating fixed-tag homogeneity. The unconditional planned M4 claim and downstream Euler/Gibbs-Duhem use are escalated to the owner for reconciliation; no claim was weakened silently.

## Source reading and disposition

Three full treatments were inspected for the A page; Tong and Likharev are independent treatments. Full-text sources, section locators, supported item IDs, dispositions, and fetch stamps are recorded in the coverage JSON.

- David Tong, *Statistical Physics*, complete author-hosted 191-page lecture notes: §§1.2.4 and 1.4, including entropy derivatives, pV work, chemical potential, and exchange equilibrium.
- Konstantin K. Likharev, *Essential Graduate Physics: Statistical Mechanics*, complete 224-page textbook PDF: §§1.2, 1.3, and 1.5, including entropy representation, pV work/response derivatives, and chemical potential/exchange equilibrium.
- Daniel Arovas, *Lecture Notes on Thermodynamics and Statistical Mechanics*, complete 112-page Chapter 2 PDF: §§2.9.1–2.9.2 and 2.10.5, including exchange conditions, scaling/homogeneity discussion, compressibility, and expansion coefficient.

A prior retrieval of the older Arovas full STATMECH PDF exceeded the 29.29 MB retrieval limit, and a UC Davis mirror candidate timed out. Search then located the complete UCSD 2025 Chapter 2 PDF; it was retrieved and read at the cited sections. The unsuccessful URLs are preserved as historical retrieval evidence only; the successful full chapter is the active source. Arovas's same-system scaling is treated as comparison material because the local tagged scaling has a different tag interface. The heat-capacity relation, Maxwell identities, and other response identities are left for `td-potentials-and-responses`.

No experimental measurements are asserted. Formal entropy charts and exchange examples are model calculations only.

## Checks and readiness

The required proof layout, proof-contract, source-fetch, manifest, dependency-level, and scoped author checks are recorded after final edits. Step-1 decisions are per item: only carriers whose actual direct inputs are present and current are marked ready; the M2/M3-dependent items are escalated. The open page-level math prerequisite and both absent proof carriers remain visible in the cross-batch ledger. Completion records are authoring evidence, not independent approval.
