# Step 3a scope review — group a

Run: `phase-2-catchup-24`

Role: `alpha`

Batches: 1, 3, 4

Review type: scope only; no item or proof approvals

## Review basis

I compared the current page manifests and coverage ledgers with the binding prose designs, current plan metadata, cross-batch dependency records, the scope ledger, and the owner's current supervision record. The six pairs contain 101 planned items. Five A-page inventories agree item-for-item with the current plan metadata. The interpolation plan's machine-readable `items` array is empty, but its binding prose explicitly declares the four A and four B items now present in the manifest and says that this manifest is the Phase 2 scaffold to be spliced into the stable page; I therefore do not treat that metadata omission as a mathematical scope gap.

The source-coverage records point to complete relevant sections, not isolated theorem statements: Einsiedler–Ward and Sarig for measure-preserving systems; Teschl §15.1 and [Laugesen, Appendix C](https://arxiv.org/abs/0903.3845) for complex interpolation; Durrett and Roch for strong laws; van Gaans, Beiglböck–Yuan, and Durrett for weak convergence; Durrett, Rao–Srivastava, and Marker for standard Borel coding; and Durrett and van der Vaart for conditional expectation. I used these only to assess subject coverage and source support, not proof correctness.

The batch 1 and batch 4 cross-batch dependency ledgers are empty. Batch 3 records seven dependencies from the strong-laws page to the measure-preserving-systems page; each named supplier is present. The owner record keeps the build at the original 24 pairs, rejects a separate MT-23 addition, and requires the ergodic input needed here to be closed locally. No current owner `proceed`, merger, or enrichment record was written or assumed in this review.

## Decisions

| A page | Inventory | Decision | Scope rationale |
| --- | ---: | --- | --- |
| `measure-preserving-systems-and-mixing-criteria` | A18 / B3 | `sufficient` | Supplies the common language promised by MT-21a: preservation and completion, Koopman operators, invariant sets/functions and ergodicity, strong/weak mixing, generating-class criteria, and finite examples. Spectral/product criteria, higher-order mixing, and concrete rotation/doubling dynamics have explicit later destinations and are outside this pair's role. |
| `complex-riesz-thorin-endpoint-interpolation` | A4 / B4 | `sufficient` | Covers the finite-simple analytic family, the sigma-finite Riesz–Thorin theorem including infinite target endpoints, compatible extensions, the stated endpoint corollary, exponent arithmetic, and the required examples/counterexample. Fourier applications belong to the Fourier page, and the already-published interpolation theorem is intentionally rehomed during the later splice rather than duplicated here. |
| `strong-laws-of-large-numbers` | A16 / B7 | `sufficient` | Covers Kolmogorov's bounded-variance and iid routes, truncation and tail-sum machinery, the iid integrable theorem and necessity, Etemadi's pairwise-independent route, local maximal/Birkhoff input, weak-law comparison, rates explicitly claimed by the prose, and varied positive and negative examples. Marcinkiewicz–Zygmund rates, the LIL, and the full nonergodic Birkhoff theorem are explicit boundaries, not missing parts of this SLLN pair. |
| `weak-convergence-tightness-and-representation` | A27 / B10 | `sufficient` | Covers weak convergence, Portmanteau and CDF formulations, mapping/converging-together tools, tightness and Prokhorov compactness, the Lévy–Prokhorov metric, Skorokhod representation, countable determining tests, empirical laws, normal-law support, and representative examples/counterexamples. A separate Helly-selection development is unnecessary for the chosen direct Polish-space Prokhorov route. |
| `standard-borel-real-codings-and-determining-classes` | A4 / B3 | `sufficient` | Gives an explicit Hilbert-cube real coding, the general standard-Borel coding theorem, countable generating/separating finite-measure determining algebras, the finer-Polish-topology bridge, and the intended basic examples. General Borel cardinality classification, measurable Schröder–Bernstein, and perfect-set theory exceed the pair's supplier role for regular conditional laws and measurable-field constructions. |
| `conditional-expectation` | A22 / B9 | `sufficient` | Covers construction and a.e. uniqueness, algebra/order, taking out known factors with the needed integrability boundary, both tower orientations, independence, extended nonnegative conditioning, conditional convergence theorems, Jensen and absolute-power consequences, contraction/projection viewpoints, conditional variance, uniform integrability, version discipline, Cauchy–Schwarz, and diagnostic examples. Densities, regular conditional distributions/kernels, and the Borel paradox are deliberately assigned to PT-11. |

## Conclusion

All six assigned A/B pairs are scope-sufficient for their stated roles in this library. Every conspicuous excluded topic is either named as a deliberate boundary or assigned to a specific downstream pair, so I recommend neither a pair merger nor scaffold enrichment. This verdict does not approve any item proof, dependency proof, or owner transition.
