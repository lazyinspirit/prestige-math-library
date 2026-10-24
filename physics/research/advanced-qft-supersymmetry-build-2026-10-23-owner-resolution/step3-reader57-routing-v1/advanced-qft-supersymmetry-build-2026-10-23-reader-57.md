# Step 3a reader report — batch 57

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Batch: 57

## Scope and opened inventory

The assigned manifest lists six items on two pages.

- A page `qftx-irreducible-connection-topology`: `lem-qftx-complex-grassmannian-compactness`, `lem-qftx-holonomy-incidence-codimension`, `lem-qftx-irreducible-finite-holonomy-witness`, `lem-qftx-relative-finite-parameter-irreducible-avoidance`, and `thm-qftx-irreducible-connections-weak-contractibility`.
- B page `qftx-irreducible-connection-topology-examples`: `ex-qftx-relative-affine-disk-filling`.

Both assigned page carriers have the required frontmatter-only layout, empty Markdown bodies, and `page_layout: compact-v1). Their item inventories match the manifest.

I read the six assigned items in supplier order, including their statements, facts, proofs, remarks, and current frontmatter. I inspected the relevant direct mathematical suppliers and their exact statements/proofs:

- `cor-heine-borel-in-the-product-topology` for the projection-model compactness proof.
- `thm-a-regular-level-set-is-an-embedded-submanifold` for the finite-dimensional group and incidence calculations.
- `thm-compactness-under-continuous-maps`, `lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval`, and `def-axiom-of-choice` for the finite-holonomy witness.
- `def-qftx-smooth-sobolev-gauge-configuration`, `thm-smooth-dependence-of-ode-solutions-on-parameters`, `thm-parametric-transversality`, `thm-morse-sard-for-smooth-manifolds`, `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold`, and `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null` for relative avoidance.
- `def-countable-choice` and `def-higher-homotopy-group-by-based-cubes` for the choice and homotopy-group conventions.
- I also opened `lem-qftx-gauge-stabilizer-and-properness` because the batch notes and cross-batch file refer to it. The current finite-witness carrier does not depend on or use its stabilizer conclusion.

I inspected the frontmatter and inventories of the assigned pages' declared prerequisite pages: `qftx-sobolev-gauge-orbit-geometry`, `compactness`, `higher-homotopy-groups-and-cofiber-sequences`, `sard-theorem-and-transversality`, `whitney-embedding-tubular-neighbourhoods-and-approximation`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `rank-theorems-and-embedded-submanifolds`, `relations-functions-and-quotients`, and `countability-and-uncountability). The QFT page is draft; the listed mathematics pages are published.

For source context, I read the relevant parts of Walpuski, *Differential Geometry III: Gauge Theory*, §5.13.2–§5.13.3 (PDF pp. 114–116; Definitions 5.71, 5.73, 5.75; Proposition 5.74; Remark 5.76), and Sivek, *Lectures on Instantons and Contact Structures*, §1, pp. 2–3. These support the gauge setup and stabilizer/irreducibility conventions, not the local finite-dimensional avoidance proof. Springer metadata and abstract for Singer's 1978 paper were available, but its full text was not: the Project Euclid URL returned an HTML shell and Springer showed only a subscription preview. I therefore did not treat Singer as proof evidence; the relevant arguments below were checked locally.

## Review and repair

The Grassmannian compactness proof correctly identifies Hermitian projections, proves the defining conditions are closed, obtains the Frobenius bound, and applies the supplied Heine–Borel result. The finite holonomy witness proof correctly uses compactness of the projection model, a finite open cover, a positive minimum, and continuous dependence of the finitely many holonomies on the connection. The incidence-chart calculation gives the stated stabilizer dimension, incidence dimension, and both dimension differences. The weak-contractibility proof correctly constructs affine cone fillings and uses relative avoidance to obtain irreducible fillings. The example correctly distinguishes the reducible cone apex from the repaired irreducible filling. I found no diagram requiring review or addition.

I repaired proof gaps in `lem-qftx-relative-finite-parameter-irreducible-avoidance`:

- Step 1.1 now justifies compactness of the image in the (C^1) topology and derives a uniform perturbation radius from a finite subcover.
- Step 4.1 now identifies the punctured sphere by stereographic projection, explains path connectivity of the exterior of the control balls, and gives explicit local tube coordinates for the private loop controls.
- Step 5.1 now explains how finitely many local ODE solution intervals give smooth parameter dependence along an entire compact loop segment and aligns the loop parameter with the control-tube coordinate.
- Step 9.1 now treats the empty incidence preimage and derives the local preimage dimension from target normal coordinates and the submersion property.

I updated the corresponding derivations in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-57.proof-contracts.json`. The item has no `verification.judge` record to remove. Reflow reported the item unchanged; precheck passed. Final proof-layout check: 6 items, 32 steps, 0 defects.

## Findings not repaired

The findings file records:

- `lem-qftx-relative-finite-parameter-irreducible-avoidance`, Statement: the statement calls (H) a homotopy but omits (H(s,0)=f(s)) and does not state the exact pointwise equality to (f) on a neighborhood of (L). The proof constructs precisely those conditions in steps 3.1 and 10.1. Repairing the public statement also requires synchronizing the batch manifest mirror, which is outside this reader's item/page write scope.
- `lem-qftx-holonomy-incidence-codimension`, Statement: “usual matrix Lie-group structure” names (SU(N)) without the exact matrix-set and smooth-structure definition or an exact supplier in this item's dependencies. Step 1.1 derives the structure later in the proof, but the statement itself remains incomplete. A statement correction also requires its batch-manifest mirror.
- `def-qftx-smooth-sobolev-gauge-configuration`, a draft supplier in batch 56: its Definition uses (SU(N)) and the standard unitary representation without defining the matrix group. The generic non-Abelian data dependency does not give the exact (SU(N)) realization. The exact matrix description appears in a separate draft item but is not in this supplier's dependency closure. Four assigned consumers reach this supplier: the finite-holonomy witness, relative avoidance, weak-contractibility theorem, and affine-filling example. The observed current item SHA-256 is `8d0e4a7a92c2115d9efb0d0412399ce2ff4b7ca8c77508c500a5aa1fabdc0234`.

A separate run-evidence inconsistency needs owner disposition: `batch-57.cross-batch-dependencies.json` marks `lem-qftx-irreducible-finite-holonomy-witness → lem-qftx-gauge-stabilizer-and-properness` as verified, but the current witness item has no such `deps` edge or use. I left that research artifact unchanged; it may need correction before the cross-batch dependency gate.

## Page verdicts

- `qftx-irreducible-connection-topology` (A): presentation and inventory pass. Its five assigned items were reviewed; statement-level findings remain as described above.
- `qftx-irreducible-connection-topology-examples` (B): presentation and inventory pass. Its one assigned example was reviewed; it inherits the group-definition finding through its declared draft supplier.

## Blocker

No blocker prevented the mathematical review or authorized proof repair. Owner/source disposition remains necessary for the statement findings, their manifest mirrors, the batch-56 supplier finding, and the stale cross-batch evidence row.
