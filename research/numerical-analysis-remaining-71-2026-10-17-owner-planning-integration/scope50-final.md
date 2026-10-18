# Batch 50 primal-kernel prerequisite resolution

Run: numerical-analysis-remaining-71-2026-10-17. Completed 2026-10-18 after rereading CLAUDE.md and the full batch-50 native review-0/review-1, repair-1, current state and final-review input. The current prerequisite chain and all actual named/direct/downstream consumers below were read in full. This is focused owner evidence, not another native whole-batch audit.

The exact owner-entry carrier is archived at scope50-before/thm-pe26-primal-constraints-remove-floating-kernels.md. Only that draft item was edited. Its Statement is byte-for-byte unchanged; no Definition, native prior repair, constant, domain or approved capability was changed. No published source or outside item was edited.

## Confirmed gap and smallest repair

The original step 1.2 used zero partially assembled interface energy to infer zero local extension energies, but its declared prerequisites supplied only the local kernel and interface spaces. It lacked the definition connecting H_i, S_i and tilde S.

Added def-pe26-discrete-harmonic-extension-and-schur-complement to deps and new Fact F3, identifying the actual harmonic lift, local Schur matrix and restriction of diag(S_i) to tilde W, including the already proved empty-interior inverse convention. Step 1.1 now explicitly multiplies blocks:

`K_i H_i g_i=(0,S_i g_i)^T`, hence `(H_i g_i)^T K_i(H_i g_i)=g_i^T S_i g_i`.

It applies the existing constant-kernel argument to either a full local correction or the harmonic representative of a dual trace. Step 1.2 then writes the partial energy exactly as the sum of those nonnegative harmonic energies. Zero sum forces each local energy to vanish. All local lifts are constants; shared primal vertices propagate one constant through the connected subdomain graph, and the prescribed nonempty exterior Dirichlet segment makes it zero. This establishes the same local and partially assembled positive-definiteness claims without adding hypotheses or invoking later BDDC/FETI conclusions.

The new dependency is acyclic. The harmonic-Schur definition depends only on the scalar model, primal-interface-spaces definition, local-energy/interior-SPD theorem and block-LU suppliers. It does not depend on the primal-kernel theorem or its downstream conclusions; its construction needs interior SPD, not primal anchoring.

## Same-owner affected-use dispositions

The theorem's Statement and aliases: [] are unchanged. All actual direct and named downstream uses were checked; no consumer repair is needed.

| Consumer | Disposition |
| --- | --- |
| def-pe26-scaled-averaging-and-bddc-preconditioner | Accept unchanged: the same positive definite partial Schur inverse supports its averaging preconditioner. |
| def-pe26-feti-dp-dual-system-and-preconditioner | Accept unchanged: the same invertible tilde S and range-multiplier convention support the dual system and right-inverse identities. |
| prop-pe26-bddc-constrained-local-minimization | Accept unchanged: strict positivity still proves the same unique quadratic minimizer and correction. |
| prop-pe26-feti-dp-is-dual-schur-complement | Accept unchanged: elimination and positive dual Gram form use exactly the unchanged SPD conclusion. |
| ex-pe26-two-floating-poisson-subdomains | Accept unchanged: full top exterior side remains Dirichlet, primal endpoints anchor the same constant modes, and native reconstruction claim is retained. |
| ex-pe26-missing-primal-corner | Additional actual direct consumer found by source search; accept unchanged. Its unanchored constant vector remains a singular dual mode, and adding a primal corner removes it. |
| lem-pe26-scaled-averaging-energy-bound | Accept unchanged: the same harmonic Schur energy norm is now explicitly connected to local energies; all native rho weights and contrast-independent estimates are retained. |
| lem-pe26-complementary-primal-dual-spectrum | Accept unchanged: its abstract SPD assumption and complementary projection identities are unchanged. |
| thm-pe26-nontrivial-spectrum-bddc-feti-dp | Accept unchanged: the same positive Gram factors give the spectral comparison and exclude retained zero multiplier modes. |
| thm-pe26-condition-number-2d-polylogarithmic | Accept unchanged: its positive factors and native F M^-1 / M^-1 F similarity remain valid; no geometric or coefficient assumption changed. |
| rem-pe26-conditioning-and-work-are-separate | Accept unchanged: ideal SPD solves and separate dense-cost model are untouched. |
| ex-pe26-matching-primal-dual-spectrum | Accept unchanged: its explicit SPD 2-by-2 model and 4/3 products are independent of the repaired proof linkage. |
| ex-pe26-coarse-solve-work-bottleneck | Accept unchanged: its unchanged condition-number supplier and separate dense coarse-cost assumptions still apply. |
| Assigned A/B pages | Accept unchanged for mathematical scope after reading both. No summary conflicts with this internal proof repair. Root must mechanically move the harmonic-Schur definition before the primal-kernel theorem in current dependency order. |

The scalar model, interface definition, local-kernel theorem, harmonic-Schur definition and harmonic-minimality theorem were read as actual supplier context. No unrelated trace/Sobolev proof was reaudited, and all native prior repairs remain untouched.

## Final check and handoff

Ran after the final source edit:

`node tools/proof-layout.mjs items/thm-pe26-primal-constraints-remove-floating-kernels.md`

Actual result: exit 0; `proof-layout: 1 items, 3 steps, 0 defects`.

No tests, full validators, gates, native state/report/control edits, manifests, contracts, numeric levels, readiness, verification stamps or hashes were performed. Root owns source dependency/Facts mirrors, proof-contract quotes, current hashes, graph/level/A-page reordering and native owner resolution after writers drain. The final native prerequisite finding is substantively resolved; batch-50 write scope is released.
