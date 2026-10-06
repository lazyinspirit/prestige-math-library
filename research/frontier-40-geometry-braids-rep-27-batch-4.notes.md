# Batch 4 — owner source and argument repair

Run: `frontier-40-geometry-braids-rep-27`. Pair: `group-c-star-algebras-and-the-fell-unitary-dual` and its examples companion. This supersedes the previous repair-log §4 and Records section, which admitted an unread load-bearing lifting theorem while marking its scaffold ready.

The commissioned kernel-map homeomorphism on **weak-equivalence classes** is preserved. There are now 44 scaffold items, including four local helpers, under the 100-item cap. The 27 selected pairs are unchanged. This is Step-1 scaffold repair, not authored-item approval or an independent mathematical audit.

## Local proof closure

The flagged theorem was recorded owner-escalated at the beginning of review. Its former proof imported Fell's lifting half with a locator; Fell 1960 was unread, and closedness of the kernel map was not established. Its continuity strategy also incorrectly used density to approximate an arbitrary element of an intersection of kernels by L¹ elements of that intersection.

The final complete argument is supplied in dependency order:

1. `lem-c-star-positive-calculus-and-order-estimates` derives abstract calculus, square positivity, order estimates and homomorphism contractivity from published Gelfand–Naimark, unitization, spectral-permanence and spectral-radius suppliers.
2. `lem-c-star-algebras-and-closed-ideals-have-positive-contractive-approximate-units` constructs finite-set approximate units, bounds both errors and proves ideals self-adjoint. These close the quotient and state suppliers.
3. `lem-irreducible-group-vector-functionals-are-extreme-in-the-positive-dual-ball` proves compactness by Banach–Alaoglu and extremality by an explicit dominated-functional form, Hilbert Riesz and Schur. It proves norm one and nonunital recovery using the L¹ approximate identity.
4. `lem-irreducible-weak-containment-in-a-family-selects-one-coefficient` takes the UNION of individual family vector functionals. Direct-sum truncation and normalization place the irreducible coefficient in their closed convex hull. Milman's converse selects one individual member; Raikov upgrades its coefficient approximation. Cyclic translates let the SAME member approximate all coefficients of a finite test.
5. The kernel theorem first proves the direct Fell/Jacobson closure identity, using helper 4 and the repaired weak-containment/kernel-inclusion equivalence. Surjectivity then makes the kernel map a continuous CLOSED surjection and proves the induced quotient bijection and its inverse continuous. The empty-family case is explicit.
6. The closure lemma consumes that already-proved identity, and the kernel proposition consumes the full theorem. The supplier does not consume either consumer; no closure lifting is inferred merely from a quotient homeomorphism.

The normalized-coefficient lemma is the singleton-family case of helper 4. The single-coefficient neighbourhood-basis proof uses a precise contradiction/family argument, not global weak containment inferred from one finite test. Raikov now pairs right averaging with left L¹ translation explicitly and assumes no unimodularity.

## Supplier and example corrections

The quotient helper proves the C*-identity through an ideal approximate unit, injective isometry through a calculus cutoff, and closed image by completeness. Quotient-map norm is 1 for a nonzero quotient and 0 for a zero quotient. The full-to-reduced map cites closed image before concluding surjectivity. Kernel inclusion gives the norm inequality through the quotient's induced isometric map.

The positive-state norm helper removes its false extension to arbitrary non-self-adjoint elements, while preserving the positive-element formula and supplying Hahn–Banach extension/positivity explicitly. State spectral bounds now handle unitization with a proved canonical positive extension. Quadratic-form norm is proved by polarization and the parallelogram identity, replacing a false equality after substituting Sη/‖Sη‖.

Integrated nondegeneracy is proved by strong convergence π(e_U)→I. L¹ reconstruction proves automatic contractivity. The unitary dual and universal full norm are set constructions through the exact normalized pointed-cyclic/GNS correspondence.

The real-character example corrects **χ_s ≺ χ_t iff s=t**, preserving its net topology claim with an explicit bounded-interval inverse test. The abelian corollary identifies Gelfand/compact-open topologies through Raikov; the integers example proves the reduced algebra by approximate eigenvectors of the bilateral shift without an undeclared amenability theorem. Compact-group Fell discreteness uses ∫|φ|²>0 instead of the false value 1 for every normalized coefficient.

The affine example is exactly `R_{>0} ⋉ R`. It preserves irreducibility and every χ_t in the singleton closure. Its error is **2L/R+B exp(-R/2)**, including missing overlap mass; nonclosedness of `{π}` proves non-Hausdorffness. The multiplication helper assumes sigma-algebra generation, and the example verifies it through n sin(exp(u)/n)→exp(u). The false non-type-I label and the source's different full-affine-group enumeration are removed.

The recorded caveat remains `proved_here: false`, `deps: []`, with no local proof. Corollary 7.F.4 concerns a **non-type-I factor representation**, not every fibre of every non-type-I group. No local proof consumes this recorded remark.

## Sources

Evidence is durable in `research/frontier-40-geometry-braids-rep-27-owner-fell-lifting/`.

- Shirbisheh's complete 179-page text was actually fetched from arXiv:1211.3404 with a bounded curl request and parsed by PyMuPDF. Exact complete proofs were read for positivity/order, contractivity/isometry, approximate units and quotient norms; coverage includes precise dispositions and a content-bound fetch stamp.
- A fresh BdHV author-hosted fetch timed out after 40 seconds with a partial body. The complete prior PDF/text was recovered from `/tmp/f40-src/`, matching the earlier coverage hash. C.5.1, F.1.4, C.5.6 and F.2.5 proof/statement texts were examined. The partial download was replaced by the complete recovered source.
- The complete prior Bekka–de la Harpe PDF/text was recovered with its coverage hash. Sections 1.C and 8.B and the exact Corollary 7.F.4 statement were examined. Their locators support source comparison, not proof completion.
- **Fell 1960 remains unread.** Prior failed retrieval attempts are historical, not attempts claimed by this reviewer. No final strategy imports its lifting half. Fell 1962 remains historical/source coverage only.

## Readiness and integration

`review-report.json` records exact changes, statement deltas, direct-consumer review, outside-consumer search and final hashes. `checks.json` records actual scoped outputs. These are local checks, not independent mathematical approval. The theorem/closure/kernel-proposition interfaces are unchanged. Changed supplier interfaces and examples are repaired through their internal consumers; no outside consumer was found in published items/pages or other selected manifests. Cross-batch prerequisite input remains `[]`, since all external proof suppliers are published and all new helpers are local.

Stale affected readiness records and four new-helper records are re-recorded owner-ready in dependency order only after final mutations and checks; the flagged item remains held until that pass. The receipt records its actual final status. Root owns shared plan/prose/inventory reconciliation, whole-run checks after writers drain and the held gate. This agent edits no item Markdown, sibling batches, shared plans, ledger, controller state or commits. Proof-layout is inapplicable to these scaffold-only edits; Step 3 still must author and independently review complete proof-formatted items. Publication remains an owner action.
