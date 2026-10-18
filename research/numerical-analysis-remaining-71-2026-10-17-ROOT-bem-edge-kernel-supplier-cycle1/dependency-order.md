# Proposed local dependency and consumer order

1. Existing geometry, Newton kernel and fundamental solution, trace/lifting, Poisson kernel, and homogeneous-energy definition; published integration/mollification and smooth-ball divergence suppliers.
2. New level-3 `lem-bem-polyhedral-edge-kernel-representation`. It assumes a transmission pair and proves its kernel realization, with no dependency on the existence theorem or transmission-space definition.
3. Existing level-3 `thm-bem-single-layer-transmission-mapping-and-coercivity`, with bounded-density edge realization made explicit. Existing level-3 `def-bem-double-layer-transmission-space`, whose well-definedness remains justified by the level-4 theorem.
4. Existing level-4 `thm-bem-double-layer-transmission-jumps-and-bounds`, now consuming the level-3 lemma. `def-bem-calderon-boundary-operators` and `thm-bem-single-layer-galerkin-wellposed-and-quasioptimal` retain their current bodies/interfaces.
5. Existing level-5 `thm-bem-calderon-mapping-and-jump-identities` (remark and direct dependency repair) and `cor-bem-p0-galerkin-rate-for-h1-density` (unchanged).
6. Existing level-6 `thm-bem-hypersingular-ellipticity-and-stabilized-formulation` (unchanged).
7. Existing level-7 `alg-bem-certified-inexact-matrix-assembly` (this packet imposes no edit; separate quadrature packet may change it).
8. Existing level-8 `thm-bem-matrix-perturbation-transfer` (unchanged).
9. Existing level-9 `ex-bem-inexact-assembly-error-ledger` (unchanged).

The weak single-layer definition is also a well-definedness consumer of its theorem through `justified_by`; the theorem's broadened bounded-density kernel realization meets and strengthens that defining interface. The transmission-space definition similarly keeps its theorem as `justified_by`, not a theorem-to-definition logical cycle. No new page or frontier pair is proposed.
