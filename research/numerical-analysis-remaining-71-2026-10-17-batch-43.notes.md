# Batch 43 — Maxwell eigenproblems and compatible vector waves

Run `numerical-analysis-remaining-71-2026-10-17`; role beta; assigned pair
`maxwell-eigenproblems-and-compatible-vector-waves` and its examples page.
The dispatch assigns batch dependency level 3 and prerequisite batch 38; its
scheduling input is `432e8113021662076ce5e7a06e5c2e36e0db1488bffb1073e0cd909c1c4d8f0c`.

## Plan and scope

The owner authoring direction and the complete PE11 design section at
`research/plan-numerical-spatial-track.md` §PE11 were read before authoring.
The current `research/plan-spec.json` row agrees with the design on the
Maxwell cavity eigenproblem, the two prerequisite pages, topology-aware kernel
removal, discrete compactness, and multiplicity-aware spectral convergence.
No plan/design conflict was found.

The theorem states the homogeneous positive scalar branch
`epsilon, mu > 0`. The available PE09 discrete-compactness and projection
interfaces are unweighted, so variable or tensor coefficients require a
separate weighted interface and are explicitly outside this item. This is a
scope declaration, not a claim that the weighted extension has been proved.
The proof removes the full continuous and discrete curl kernels, treats zero
modes separately, and proves cluster convergence without selecting individual
eigenvectors in a repeated eigenspace. The A page contains a TikZ commuting
cochain diagram; its arrows are defined in the page text, and no proof relies
on the diagram.

The authored inventory is 9 A items and 3 B examples, below the 100-item page
cap. Batch 43 remains at the assigned batch level 3. Item levels below were
recomputed from the current in-run graph after the final dependency edits; the
direct dependency arrays are recorded in the manifest and match item
frontmatter.

| Item | Level | Direct dependencies |
|---|---:|---|
| `lem-pe11-compact-self-adjoint-spectral-approximation` | 0 | `thm-spectral-theorem-for-compact-self-adjoint-operators`, `thm-orthogonal-decomposition-by-a-closed-subspace`, `thm-rank-nullity`, `def-eigenvalue-eigenvector-eigenspace-and-spectrum`, `def-countable-choice`, `thm-bolzano-weierstrass` |
| `lem-pe11-hcurl-weak-limit` | 2 | `def-na-hcurl-space`, `def-na-zero-tangential-hcurl`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `lem-pde-l2-control-space-separable`, `lem-separable-hilbert-bounded-sequence-weak-subsequence`, `thm-orthogonal-decomposition-by-a-closed-subspace`, `def-countable-choice` |
| `def-na-pe11-maxwell-cavity-eigenproblem` | 3 | `def-na-hcurl-space`, `def-na-zero-tangential-hcurl`, `def-na-lowest-order-whitney-de-rham-spaces`, `def-na-curl-curl-kernel-quotient-gauge`, `def-matching-affine-simplicial-meshes` |
| `lem-pe11-zero-eigenvalue-is-curl-kernel` | 4 | `def-na-pe11-maxwell-cavity-eigenproblem` |
| `lem-pe11-gauge-space-infinite-dimensional` | 4 | `def-na-pe11-maxwell-cavity-eigenproblem`, `def-na-hcurl-space`, `lem-smooth-bump-between-concentric-euclidean-balls` |
| `lem-pe11-smooth-nedelec-approximation` | 4 | `def-na-pe11-maxwell-cavity-eigenproblem`, `def-na-zero-tangential-hcurl`, `def-na-lowest-order-whitney-de-rham-spaces`, `def-matching-affine-simplicial-meshes`, `lem-na-nedelec-edge-unisolvence`, `lem-na-whitney-moments-commute-with-grad-curl-div`, `thm-l-one-approximate-identities-converge-in-l-p`, `def-l-one-approximate-identity-on-rn`, `def-countable-choice` |
| `lem-pe11-continuous-gauge-compact-embedding` | 5 | `def-na-pe11-maxwell-cavity-eigenproblem`, `def-na-hcurl-space`, `def-na-zero-tangential-hcurl`, `def-wkp-zero-as-a-sobolev-closure`, `thm-na-regular-decomposition-zero-tangential-hcurl`, `thm-rellich-compactness-from-w-one-p-zero-to-lp`, `lem-pe11-hcurl-weak-limit`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `def-axiom-of-choice`, `def-countable-choice`, `def-dependent-choice` |
| `lem-pe11-gauge-conforming-edge-approximation` | 5 | `def-na-pe11-maxwell-cavity-eigenproblem`, `def-na-zero-tangential-hcurl`, `lem-pe11-smooth-nedelec-approximation`, `thm-orthogonal-decomposition-by-a-closed-subspace`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `def-countable-choice` |
| `ex-pe11-spherical-shell-pec-zero-mode` | 5 | `def-na-pe11-maxwell-cavity-eigenproblem`, `def-na-hcurl-space`, `def-na-zero-tangential-hcurl`, `def-wkp-zero-as-a-sobolev-closure`, `def-eigenvalue-eigenvector-eigenspace-and-spectrum`, `lem-pe11-zero-eigenvalue-is-curl-kernel`, `def-countable-choice`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-tonelli-and-fubini-for-completed-product-measures` |
| `thm-pe11-edge-maxwell-spectral-approximation` | 9 | `def-na-pe11-maxwell-cavity-eigenproblem`, `def-na-hcurl-space`, `def-na-zero-tangential-hcurl`, `def-na-lowest-order-whitney-de-rham-spaces`, `def-matching-affine-simplicial-meshes`, `def-wkp-zero-as-a-sobolev-closure`, `def-nullhomotopic-map-and-contractible-space`, `def-eigenvalue-eigenvector-eigenspace-and-spectrum`, `lem-na-nedelec-edge-unisolvence`, `lem-pe11-continuous-gauge-compact-embedding`, `lem-pe11-gauge-space-infinite-dimensional`, `lem-pe11-smooth-nedelec-approximation`, `lem-pe11-gauge-conforming-edge-approximation`, `lem-pe11-compact-self-adjoint-spectral-approximation`, `lem-pe11-hcurl-weak-limit`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `thm-na-discrete-compactness-and-poincare-lowest-order-nedelec`, `thm-na-uniformly-bounded-commuting-cochain-projection`, `def-na-curl-curl-kernel-quotient-gauge`, `thm-compact-coercive-form-spectrum-and-minmax`, `lem-finite-dimensional-galerkin-minmax`, `lem-separable-hilbert-bounded-sequence-weak-subsequence`, `lem-pde-l2-control-space-separable`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `thm-orthogonal-decomposition-by-a-closed-subspace`, `def-axiom-of-choice`, `def-countable-choice`, `def-dependent-choice` |
| `ex-pe11-unit-cube-maxwell-mode` | 10 | `def-na-pe11-maxwell-cavity-eigenproblem`, `def-na-zero-tangential-hcurl`, `thm-pe11-edge-maxwell-spectral-approximation`, `thm-compact-coercive-form-spectrum-and-minmax`, `def-eigenvalue-eigenvector-eigenspace-and-spectrum`, `def-axiom-of-choice`, `def-countable-choice`, `def-dependent-choice` |
| `ex-pe11-repeated-cube-maxwell-cluster` | 10 | `def-na-pe11-maxwell-cavity-eigenproblem`, `def-na-zero-tangential-hcurl`, `thm-pe11-edge-maxwell-spectral-approximation`, `thm-compact-coercive-form-spectrum-and-minmax`, `def-eigenvalue-eigenvector-eigenspace-and-spectrum`, `def-axiom-of-choice`, `def-countable-choice`, `def-dependent-choice` |

There are no cycles among the batch-43 items. The local dependency-level
calculation uses the current in-run levels of batch-38 suppliers, including the
current level-4 regular-decomposition item and level-8 discrete-compactness
item; it does not reuse their stale manifest labels.

## Supplier body review and unresolved claims

The current batch-38 page and the actual supplier bodies were inspected. The
definitions of `def-na-hcurl-space`, `def-na-zero-tangential-hcurl`,
`def-na-lowest-order-whitney-de-rham-spaces`, and
`def-na-curl-curl-kernel-quotient-gauge` supply the graph-space, PEC closure,
Whitney space, and discrete-gauge conventions. The complete current proofs of
`lem-na-nedelec-edge-unisolvence`,
`lem-na-whitney-moments-commute-with-grad-curl-div`, and
`thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes` supply
the moment, smooth-input Stokes, cochain, and contractible-mesh exactness
interfaces used here. These items are drafts; this body review is not
independent approval. Exact cross-batch edges are in
`research/numerical-analysis-remaining-71-2026-10-17-batch-43.cross-batch-dependencies.json`.

Four in-run supplier proofs remain unresolved, including one transitive
prerequisite:

1. `lem-na-hcurl-curlfree-potential-contractible` claims a global H1 potential
   for a curl-free weak H(curl) field on a bounded connected contractible
   Lipschitz polyhedron. Its current Proof status says the weak local-to-global
   gluing and global H1 integrability bound are missing. It is a transitive
   prerequisite of regular decomposition and affects the continuous compact
   embedding and main spectral theorem.
2. `thm-na-regular-decomposition-zero-tangential-hcurl` claims a stable
   decomposition `u=z+grad p` with `z∈H0^1`, `p∈H^1`, for the bounded
   contractible Lipschitz polyhedral PEC setting with connected boundary. Its
   current Proof status says the cited Stein H2 and H(curl) extension operators
   are not proved and the boundary correction is incomplete. This blocks the
   compactness and Poincare claims in
   `lem-pe11-continuous-gauge-compact-embedding` and hence the main theorem.
3. `thm-na-uniformly-bounded-commuting-cochain-projection` claims projections
   on the full finite-element de Rham subcomplex, with mesh-uniform graph
   bounds, commuting identities, idempotence, and degree-one PEC preservation.
   Its current Proof status says the smoothing estimates, finite-element
   invertibility, and boundary correction are incomplete. This blocks the
   gauge-consistency and pointwise-operator convergence steps in the main
   theorem and is also a dependency of discrete compactness.
4. `thm-na-discrete-compactness-and-poincare-lowest-order-nedelec` claims
   strong L2 sequential compactness and a uniform curl Poincare bound for the
   gradient-orthogonal Nedelec subspace on the contractible mesh family. Its
   current Proof status says the discrete-gradient component estimate is
   missing. This blocks collective compactness, the uniform discrete source
   bound, and the no-pollution conclusion.

Batch 43 continued the independent authoring allowed by the dispatch: the
definitions, local approximation proofs, and operator argument are complete,
but the compactness and spectral application remain escalated until these
actual supplier bodies are completed. The two cube examples are also escalated
because their claims include the discrete cluster conclusion of that theorem.
The spherical-shell example has a separate complete local proof and is ready.

## Axioms and source evidence

The main spectral theorem explicitly assumes the Axiom of Choice, Countable
Choice, and Dependent Choice. The continuous compactness argument uses the
Rellich and regular-decomposition interfaces with their declared branches;
Countable Choice selects sequence decompositions and normalized
counterexamples. The local compact-positive spectral lemma states Countable
Choice for the spectral theorem and its countable eigenvector selections.
The proofs keep these branches explicit; no stronger axiom is silently
imported as a choice-free step. The shell example uses Countable Choice for its
Sobolev approximating sequence and the stated Fubini/change-of-variables
interfaces. The cube examples inherit the spectral theorem's stated branches.

The source inventory, URLs, locators, item support, dispositions, retrieval
attempts, byte counts, hashes, and fetch stamps are in
`research/numerical-analysis-remaining-71-2026-10-17-batch-43.source-coverage.json`.
Four independent full-text sources were inspected for the A page: Monk's
complete searchable book text (§2.3.4 Theorem 2.52; §4.4.1 Theorem 4.7 and
Corollary 4.8; §7.3.2; §7.4 Theorem 7.29), Boffi's complete 303-page Pavia
course notes (slides 102–107), Chen's complete 10-page Maxwell notes (§§1–3),
and the complete Hiptmair–Pechstein report (§2.1, Theorem 2 and proof). Boffi
supports the abstract Galerkin spectral context; Chen supports edge spaces,
smooth-input moments and cochain conventions; the report supports the stated
regular-decomposition context. Monk's DCP/eigenvalue hypotheses differ from
the current in-run interfaces, so none of these sources is used to pretend
those incomplete carriers are proven.

The first shell `curl` retrieval of Monk's reader returned a 6,182-byte
JavaScript challenge page. A later source-fetch-check retry on the same URL
retrieved the complete searchable text, so recovery stopped on success and no
source was dropped. The direct Internet Archive download links found during
search returned HTTP 403. For the B page, Monk's §7.5 cube eigenvalue groups,
Boffi's multiplicity/gap context, and Chen's topology discussion are recorded
with per-item dispositions; the cube and shell calculations themselves are
proved locally. Chen's and Boffi's complete notes and the Hiptmair–Pechstein
report were all retrieved and stamped. Final `source-fetch-check --stamp`:
7/7 source records fetch-verified, 7/7 resolved,
0 documented drops.

## Contracts, readiness, and checks

The proof contracts in
`research/numerical-analysis-remaining-71-2026-10-17-batch-43.proof-contracts.json`
contain exact supplier statement excerpts, every numbered-step input, all
standard boundary dispositions, and no unsupported finite smoke check.
Local analytic checks cover the explicit shell and cube fields; no registered
finite computation is applicable to the compactness or spectral theorems.

Eight items have Step 1 `ready` records and four have `escalated` records. The
four escalations are the continuous compact embedding, the main spectral
theorem, and the two cube examples that cite the discrete cluster conclusion.
These records are authoring-readiness evidence only, not independent
acceptance. The full-run `step1-decisions check` reports 1,259 of 1,420 items
ready and remains open. Its four batch-43 escalations are recorded above;
other assigned batches also have missing records and existing escalations.

Final scoped checks:

- `tools/proof-layout.mjs` on the 11 proof-bearing items: 48 steps, 0 defects.
- `tools/precheck.mts` on those 11 items: 11 checked, 0 failing.
- `tools/proof-contract.mjs --strict`: 12/12 items, 0 errors, 0 warnings.
- Focused `depcheck`, `fwdcheck`, and `extcheck`: all pass.
- `item-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17`: 1,420 items across 142 pages, maximum level 12, pass.
- Batch-43 manifest/frontmatter/page/coverage/contract inventory consistency: 12 items, 0 errors.

The run-wide `batch-dependency-levels.mjs check` could not finish because its
loader encounters an unrelated malformed YAML source title in
`items/alg-na-finite-control-howard-policy-iteration.md:19` (`Wang He,
Reinforcement Learning: A Mathematical Introduction, ...` is unquoted). That
item and the shared batch scheduling file were not edited. The dispatched
batch-43 level 3 and prerequisite batch 38 remain the scheduling inputs used
for this authoring; the run-level batch graph needs its unrelated source-title
repair before the check can be rerun.
