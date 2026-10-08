# Riemann–Roch canonical-divisor scope repair proposal

Run: `frontier-43-complex-representation-15`; Step 3b; preparatory review by the assigned Codex repair owner. This file is the only write made during preparation. No item, manifest, contract, decision, ledger, or runtime file was changed. A stable edit window and explicit path authorization from the root orchestrator remain necessary because the pair is queued for native continuation. Maximum two focused repair rounds; an unresolved supplier remains held rather than triggering unchanged retries.

## Confirmed finding and interfaces

The current `items/thm-riemann-roch-compact-riemann-surfaces.md` proves the intrinsic formula

$$\ell(D)-h^0(X,K_X\otimes\mathcal O_X(-D))=\deg D+1-g,$$

but statement 3 and proof step 4.1 make the classical divisor formula conditional on a **supplied** nonzero meromorphic differential. The author record expressly disclaims existence. This leaves an unnecessary scope limitation: existence follows from the intrinsic formula already proved in step 3.1.

The immutable Step-1 receipt `research/frontier-43-complex-representation-15-step1-thm-riemann-roch-compact-riemann-surfaces.json` (2026-10-07T06:06:01.984Z; scaffold SHA `06a40fe6d5b2b315a1d4b3b940af0728a3e92875d7cabb3e8adff7f267c7858f`) explicitly promises: “duality gives i(D)=ell(K-D), hence ell(D)-ell(K-D)=deg D+1-g.” The current author report confirms the original scaffold introduced a canonical divisor without an existence supplier. The pre-author touch snapshot contains hashes/surface hashes, not full statement text; the auditor baseline contains inventories and scope hashes. No full archived original statement carrier was found, and the run manifest is absent from HEAD. The receipt and author report establish the promised formula, but are not represented as a recovered full original text.

Restore the unconditional interface: every compact Riemann surface admits a nonzero meromorphic differential; for any canonical divisor $K=(\eta)$, the identification with the canonical bundle gives $i(D)=\ell(K-D)$ and the classical formula for every divisor $D$. Retain the intrinsic formula as well. All canonical divisors are linearly equivalent. Keep the existing full-AC hypothesis and existing auxiliary metric accounting. Connectedness and nonemptiness are already part of the published Riemann-surface definition.

## Smallest missing result and complete local proof

After existing step 3.1, choose a point $p\in X$ and set $n=g+2>0$, $A=-n[p]$. The divisor definition proves negative-degree vanishing without Riemann–Roch: a nonzero $f\in L(A)$ would make $(f)+A$ effective of degree $-n<0$, because principal divisors have degree zero. Thus $\ell(A)=0$. The intrinsic formula, already established for **every** divisor, gives

$$h^0(X,K_X\otimes\mathcal O_X(n[p]))=n+g-1=2g+1>0.$$

Choose a nonzero holomorphic section $\sigma$ of this bundle. The divisor-bundle construction supplies the canonical meromorphic section $s_{n[p]}$ with local expressions $f_i e_i$ and divisor $n[p]$. Write $\sigma=a_i\,dz_i\otimes e_i$ in local holomorphic coordinate and divisor-bundle frames and define $\eta=(a_i/f_i)\,dz_i$. Here $f_i$ is meromorphic and not identically zero, so the quotient is meromorphic, including at the zeros of $f_i$. If $e_j=g_{ij}e_i$ and $dz_j=k_{ij}dz_i$, then $a_i=k_{ij}g_{ij}a_j$ and $f_i=g_{ij}f_j$, whence

$$a_i/f_i=k_{ij}(a_j/f_j).$$

The local forms therefore glue with exactly the differential transition law. At $p$, take $f_i=z_i^n$ up to a holomorphic unit: the pole order is at most $n$; away from $p$, $f_i$ is a holomorphic unit and $\eta$ is holomorphic. Division by $s_{n[p]}$ cannot turn a nonzero section into the zero differential, so $\eta\ne0$. Connectedness ensures it has no identically zero germ, as proved in the published differential definition; hence $(\eta)$ is a well-defined finite-support canonical divisor on compact $X$.

Now apply the existing divisor-bundle isomorphism $\mathcal O_X((\eta))\cong K_X$ and its tensor/dual identities to obtain the classical formula without any supplied-existence condition. The old invariance argument remains valid unchanged. This construction needs no meromorphic-function corollary, Riemann–Hurwitz theorem, embedding theorem, or later supplier, and therefore adds no dependency cycle. In particular it works for $g=0$: $n=2$ gives a one-dimensional nonzero twisted canonical section space. Choosing $n=g+1$ would fail to give strict positivity at genus zero; that choice must not be used.

A useful consequent canonical-degree calculation requires no extra supplier: the zero case gives $h^0(K_X)=g$, hence $\ell(K)=g$; apply the divisor formula at $D=K$ and use $\ell(0)=1$ to get $g-1=\deg K+1-g$, i.e. $\deg K=2g-2$. This may remain in the meromorphic-function consumer's proof rather than expanding RR's public statement; it then works at **all** genera using the restored existence result.

## Exact suppliers and supplier-first order

No new theorem item is required. The construction's direct suppliers are:

- `def-riemann-surface-and-holomorphic-atlas`: $X$ nonempty and connected, and local coordinate differentials. Add as a direct RR dependency if its facts are named in the repair.
- `def-divisor-principal-and-canonical-divisor-riemann-surface`: $L(-n[p])=0$, finite-support divisors, principal-degree zero, canonical-divisor definition and linear equivalence; already a RR dependency.
- `def-line-bundle-associated-to-a-divisor`: $\mathcal O(-A)\cong\mathcal O(A)^*$, canonical section $s_{n[p]}=f_i e_i$ and its order, and $\mathcal O((\eta))\cong K_X$; already a RR dependency. The **multiply** local canonical-section convention is essential; using $f_i^{-1}e_i$ would have the wrong sign and would not glue.
- `def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface`: holomorphic section coefficient law and the equality of meromorphic canonical-bundle sections with meromorphic differentials; add as a direct RR dependency for the new local quotient argument. Its authored full proof was inspected; its native batch-9 evidence is still open.
- `def-meromorphic-differential-on-a-riemann-surface`: differential gluing law, nonzero-germ/connectedness argument and order invariance; already a RR dependency.
- Existing RR steps 1.1–3.1: finiteness, point-divisor Euler increments for positive and negative coefficients, base $\chi(\mathcal O_X)=1-g$, and intrinsic Serre duality. No assumption that a canonical divisor exists enters those steps.

The prior mathematical suppliers must close before RR evidence can be accepted: batch-9 `cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional` and `thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology` were absent on inspection; the batch-9 line-bundle and metric definitions are authored but open. Batch-10 A3, A4 (comparison), A8 (finiteness), A9 (point increment), A10 (genus base), A11 (pairing), A12 (nondegeneracy), and A13 (duality) carry upstream obligations. The supplied local content of A3 and the new quotient route are sound; this proposal does not claim to close absent Hodge proofs or stale certifications. Resolve suppliers and exact actual uses first, then RR, then its downstream consumers.

## Consumer impact and least-destructive edits

The current authored direct consumer is `cor-compact-riemann-surface-has-meromorphic-function`. It has narrowed the canonical-divisor clause to a supplied differential and derived canonical degree only for $g\ge1$. Restore the unconditional canonical-divisor wording and use RR's existence proof to compute canonical degree for every genus; retain the sharper holomorphic-differential existence only for $g\ge1$ and the separate degree-one-function proof for $g=0$. Its existing proof and claimed $\ell(2g[p])=g+1$ remain valid.

The active manifests declare these additional direct RR consumers, currently not authored on inspection: `thm-projective-embedding-compact-riemann-surface`; `ex-divisors-and-riemann-roch-on-the-riemann-sphere-and-the-torus`; `ex-hyperelliptic-canonical-divisors`; `ex-low-degree-riemann-roch-computations`; `ex-failed-principal-parts-problem-detected-by-residues`; batch-11 `lem-holomorphic-differentials-form-a-g-dimensional-space`, `lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere`, `lem-holomorphic-differentials-separate-generic-points`, `def-picard-group-of-divisor-classes-and-pic-zero`, and `thm-abel-jacobi-embedding-positive-genus`. Reconcile the stronger restored supplier interface in their later authoring, without gratuitous content changes.

The manifest graph's indirect consumers are `cor-picard-zero-is-the-jacobian`, `def-abel-jacobi-map`, `def-jacobian-of-a-compact-riemann-surface`, `def-period-pairing-and-period-lattice`, `ex-abel-image-in-its-jacobian`, `ex-base-point-cancellation-for-degree-zero-divisors`, `ex-period-matrix-and-jacobian-of-the-pentagon-curve`, `ex-periods-of-a-complex-torus`, `ex-principal-divisor-tests-via-the-abel-jacobi-map`, `lem-abel-jacobi-map-is-well-defined-and-base-point-independent`, `lem-cut-surface-and-boundary-jumps-of-primitives`, `lem-period-pairing-is-well-defined-and-computed-by-integration`, `lem-principal-divisors-have-vanishing-abel-jacobi-class`, `lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity`, `thm-abels-theorem-for-divisors`, `thm-jacobi-inversion`, `thm-riemann-bilinear-relations`, and `thm-symplectic-period-formula-for-wedge-integrals`. These are interface impact, not a claim that each needs a mathematical edit. Recompute closure on stable final manifests before certification.

The proposed correction needs only the RR item, its authored corollary, and their exact batch-10 manifest/contract/coverage/decision/report rows. Add the two named earlier direct definition dependencies to RR and its matching manifest/contract. Dependency level remains 13 because A13 controls it. No new prerequisite item, page, or later dependency is necessary. Preserve original IDs and all independent approved claims. A13 can retain its intrinsic duality and divisor form for any specified canonical divisor: introducing an RR dependency there to prove existence would be circular and is unnecessary. If a separate unqualified existence claim in A13 must be restored, it can instead use the earlier Euler increments/base case directly, with explicit A9/A10 dependencies, but that broader edit is not needed to restore RR.

## Review and check status

This is an independent local mathematical review of the existence gap and its downstream interface, not a source audit, proof-contract pass, or gate receipt. No new external full text was read and no new bibliography claim is made. Existing source references may stay; the proposed construction is proved locally from exact suppliers. No tests or gates were run during preparation. After authorized edits: inspect stable suppliers, synchronize only affected rows, run explicit changed-item precheck/render/proof-contract checks and final `node tools/proof-layout.mjs` on the actual changed paths, record honest current hashes and unresolved upstream conditions, and hand integration to the root for writer-drain and dependency-ordered central recertification. A second focused round is reserved only for a concrete new failure; unresolved absent Hodge suppliers remain held.
