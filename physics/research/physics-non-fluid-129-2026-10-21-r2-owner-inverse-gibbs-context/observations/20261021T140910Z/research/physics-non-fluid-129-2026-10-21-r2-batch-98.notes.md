# Batch 98 — rare-event reweighting, overlap and certified partition ratios

## Plan reconciliation

The current plan-spec.json, batch task and batch-98 manifest agree on the page IDs, title, classical-statistical-mechanics category, physics library, companion, and current orders 893/894. The detailed CSM inventory and the design-index section list only csm-frontier-sampling-certificates and csm-frontier-inverse-gibbs as earlier page prerequisites. The current plan adds importance-sampling-and-weight-diagnostics and interval-newton-krawczyk-and-polynomial-root-isolation; the current plan controls, so all four are retained in both page carriers.

The older splice-support record gives orders 926/927. Those are stale relative to the current plan and dispatch; this batch uses 893/894. The current plan has empty item arrays as expected before authoring. The detailed successor inventory reserves five A-page results and one B-page example; all six are now represented in this batch's manifest.

The interval design lists only lem-real-interval-arithmetic-preserves-enclosure as the interval procedure's direct supplier. Inspecting its actual interface showed that rational interval endpoints must first be converted outward to finite dyadic endpoints, with overflow retained as unresolved. The algorithm therefore also declares the existing format, endpoint-rounding, and operation definitions/lemma it actually uses. This supplies the omitted prerequisite without narrowing the planned rational-input contract.

## Item inventory and levels

All six items have domain: mathematics, library: physics, and mathematical-only dependency roles. Item levels use the run's item graph; imported mathematics is outside the run and does not raise the level.

| Item | Direct dependencies | Level |
|---|---|---:|
| thm-csm-frontier-partition-ratio-overlap | alg-importance-sampling; thm-ordinary-importance-sampling-finite-variance-under-weighted-second-moment | 0 |
| alg-csm-frontier-independent-bridge-ratios | thm-csm-frontier-partition-ratio-overlap | 1 |
| thm-csm-frontier-bridge-ratio-variance | alg-csm-frontier-independent-bridge-ratios; thm-csm-frontier-partition-ratio-overlap | 2 |
| alg-csm-frontier-interval-finite-partition | def-dyadic-floating-point-format-and-directed-rounding; def-intervals-rectangles-and-complex-balls; def-outward-rounded-interval-and-ball-operations; lem-directed-dyadic-rounding-enclosure-and-error; lem-real-interval-arithmetic-preserves-enclosure | 0 |
| thm-csm-frontier-interval-partition-certificate | alg-csm-frontier-interval-finite-partition and its five exact mathematical operation/rounding suppliers | 1 |
| ex-csm-frontier-product-overlap-explosion | thm-csm-frontier-partition-ratio-overlap | 1 |

The two independent A-page chains were authored supplier-first. The B example depends on the local one-stage theorem. All local proofs and procedures use mathematical inputs only; no physical assumption, experiment, measurement or empirical inference is introduced.

## Supplier inspection and current readiness

The imported alg-importance-sampling definition requires its target normalizer as a known input and specifies support/integrability conditions. The imported finite-variance theorem's actual current Statement and complete Proof were inspected. Its finite-sample variance branch is choice-free; its separate CLT branch assumes AC and is not used. The partition-ratio proof applies the variance identity to a symbolically scaled random variable and explicitly does not present the known-normalizer algorithm as a procedure for an unknown partition constant.

The imported interval suppliers and their actual prerequisite interfaces/proofs were inspected. Finite input rationals are enclosed by directed conversion into the imported dyadic format; outward interval operations are only claimed on their finite-result branches; division is called only after the partition interval has positive lower endpoint. An unresolved denominator or overflow makes no normalized-expectation claim. All cited imported item bytes match their local research/math-imports.json SHA-256 pins.

loadStep1Record and step1Decision from the current physics support modules were checked for the required batch-95 supplier. All seven current A-page items on csm-frontier-sampling-certificates are present and returned closed: true, decision: ready on 2026-10-22. Their current Statements and complete proofs were inspected. In particular, the heat-bath procedure makes no independence claim about successive states, its TV theorem is a deterministic bias bound, and the exact CFTP result is restricted to finite ferromagnetic Ising weights. The bridge procedure therefore takes exact IID samples as explicit inputs and does not claim these MCMC interfaces generate them. The batch-95 page edge is recorded verified as a scoped interface/readiness check, not as independent proof approval.

The current batch-96 interface was inspected at its actual carrier. Its finite exponential family defines, for finite X, positive reference weights w, and T:X→R^k, Z(θ)=Σ_x w(x)e^{θ·T(x)}, A(θ)=log Z(θ), and π_θ(x)=w(x)e^{θ·T(x)-A(θ)}; the current page also contains identifiability, finite-MLE, latent-observation, posterior, finite-polytope and pseudo-likelihood interfaces. These claims are not used as proved premises by this batch's six items.

There is a current input gap: research/physics-non-fluid-129-2026-10-21-r2-batch-96.pages.json still has empty item inventories, while the current library A page lists seven items and its B page lists two examples, with all nine item carriers present. A fresh loadStep1Record/step1Decision check returns Readiness record missing for all nine. The detailed supplier inventory reserves five A items and one B example, so the live library inventory also needs reconciliation by batch 96's owner. This batch does not edit those carriers. Because its A page declares batch 96 as a required page input, the page edge remains open; all six local Step 1 item dispositions are escalated with this exact page-level readiness/inventory gap recorded. Their conditional proofs are complete and do not assume any inverse-Gibbs conclusion.

The transitive page requirements of batch 95 (quantitative DLR, FK loop algebra, Gibbs lattice, and Metropolis–Hastings) and batch 96 (sampling certificates, large deviations, phase ensembles, and Bayesian posterior laws) remain observations about other batches. The current batch does not use their results in its item proofs, so they are not added as unsupported cross-batch review rows.

## Sources and retrieval history

The page harvest records the complete relevant source texts, exact locators, supported items, reading extents, and limitations. It includes Owen's Chapter 9 and Chapter 10 treatment, Meng–Wong's full article, Kearfott's full interval-computations survey, and the cited complete chapter excerpt from Tucker's textbook. The source roles are bounded: the local finite proofs establish the exact formulas and the interval DAG result; source statements are not proof acceptance.

The detailed CSM design's ldp and lpw aliases remain historical context. Their sources.json extents concern large-deviation/ensemble duality and Markov-chain/CFTP material, not the exact finite weight-ratio variance or interval arithmetic claims harvested here. They are not marked dropped; direct sources for the current item claims are recorded in the batch coverage file. The Rump PDF was a discovery candidate whose browser text fetch timed out; no reading of Rump is claimed. Full-text alternatives were found and verified.

source_resolution is empty because every source selected into the current A/B harvest was fetched successfully; no selected source was dropped. source-fetch-check --stamp verified 7/7 source/page records, all newly stamped, with zero documented drops. coverage-checklist reported 2 pages, 13 harvested results, zero errors and zero warnings.

## Cross-batch edges

physics-non-fluid-129-2026-10-21-r2-batch-98.cross-batch-dependencies.json records the two declared in-run page edges: the batch-95 sampling page is verified; the batch-96 inverse-Gibbs page remains open. The current root mathematics page requirements are read-only published context and are not in-run cross-batch rows.

## Scoped checks and readiness

The proof contract is generated from the final three theorem proofs and the B example verification, with exact supplier excerpts, actual step inputs, all standard boundary dispositions and finite checks. Final scoped check results will be recorded here after the last edits.
