# Finite-smoke liveness repair proposal

The registry has no existing applicable check for this actual anisotropic norm example. Its Gaussian/SL2/matrix/graph checks assert different invariants. Add the single check in `finite-smoke.patch`; the complete proposed tool is in `proposed/tools/finite-smoke.mjs`. No active tool or carrier was changed.

The assertion excerpt in the batch-2 proposal is verbatim from `ex-anisotropic-real-norm-on-c`'s Example section. Its normalization is N(x+iy)=|x|+2|y|; Verification 3.1 uses the original complex scalar action with z=1 and lambda=i. Reading the real and complex norm definitions confirms that failure at this one complex scalar is sufficient to refute complex homogeneity. The check multiplies the coordinate pairs explicitly and evaluates the weighted absolute coordinates in BigInt arithmetic. It independently compares squared homogeneity sides, 4 and 1, and verifies nonnegative modulus 1 without approximating a square root. These computations are only finite counterexample sanity evidence. The existing all-real proof of separation, real homogeneity and the triangle inequality remains necessary and unchanged.

Integration is owned by the root agent:

1. Check all exact preimages in `guarded-patch-manifest.json` before editing. Both the raw current batch-2 contract hash and exact before-values guard the proposed two contract field replacements. The source and relevant norm definitions have independent raw guards.
2. Apply `finite-smoke.patch`, copy the draft test to `tools/finite-smoke-anisotropic-norm.test.mjs`, and apply `WORKFLOW.patch`. Commit code and documentation under the root's existing authorization before the native battery.
3. Apply ONLY the two JSON pointer replacements in the manifest to batch 2. The complete proposed batch contract is a reference, not permission to overwrite other simultaneous repairs. Rejoin aggregate contracts through the usual owner process.
4. Run the integrated focused test and full native battery after ordinary recertification. No native gate was attempted here.

The local test executed against the full proposed tool and an exact byte copy of the actual item under `proposed/items/`. The isolated fixture preserves the tool's normal path resolution and exact assertion matching. It is a test context, not an authored carrier. `local-test-results.json` records actual argv, status and output: the test and proposed batch contract both exit 0, with one genuine registered outcome; all nine negative commands exit 1. Mathematical controls reject isotropic weights, the real identity scalar and the zero vector because homogeneity then holds. Further controls reject a different normalization, false norm values, negative modulus, a noninteger pair, a stale source excerpt and an unknown registry name. No checks are counted for stale excerpts or unknown names.

No statements, proofs, item metadata, actual contracts, live state, plan, ledgers, stamps, commits or publication were modified by this task. There is no unresolved mathematical gap in this bounded witness check.
