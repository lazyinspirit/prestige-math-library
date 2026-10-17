# Batch 57 Step-3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-57`; assigned batch only.

Scope: six touched obligations, no page obligations and no reader/refuter findings. Read the generated order, scope, reader report/findings and refuter report. Initial raw SHA256 comparison: all fourteen current items equal the frozen post-reader snapshot; exactly the six routed sources differ between pre and post. No historical source reconstruction is asserted from those hashes.

Independent mathematical review proceeds in generated dependency order. Current local proofs and exact direct supplier interfaces are the mathematical evidence; previous reports are supporting observations.

## `lem-compact-self-adjoint-residual-controls-invariant-subspace-gap`

Steps 1.1–2.1: whole-eigenspace projection commutes with B_h; orthogonal spectral expansion, including its kernel, bounds the complement by Delta. F is closed since finite-dimensional. Checked empty Lambda, zero residual, nonzero E and positive Delta; including 0 in Sigma prevents a missing kernel multiplier. Countable Choice matches both suppliers. No eigenvector selection or reverse gap assertion.

Dependencies: `thm-spectral-theorem-for-compact-self-adjoint-operators`, `thm-orthogonal-decomposition-by-a-closed-subspace`. Source context: Guermond Chapters 46–47 and Mercier Chapter 8; precise reading record will be consolidated below. No new defect found.

## `lem-finite-dimensional-galerkin-minmax`

Steps 1.1–5.1: the explicit finite energy-orthonormal-basis formula represents b with the correct first-variable-linear convention. Matrix bound gives compactness; finite-dimensional completeness permits the spectral theorem. Positivity/injectivity yield N positive reciprocal eigenvalues. Eigenvector span and rank-nullity give both attained min–max inequalities, including m=1 and m=N and repeated eigenvalues. J injective excludes zero denominators. Reader completion accepted.

Dependencies: `def-bounded-coercive-and-symmetric-sesquilinear-forms`, `def-bounded-linear-operator`, `def-real-and-complex-inner-product-space`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `thm-spectral-theorem-for-compact-self-adjoint-operators`, `thm-rank-nullity`, `thm-heine-borel-rn`, `thm-extreme-value-metric`, `def-compact-linear-operator`, `thm-heine-borel-rn`, `cor-finite-dimensional-normed-spaces-are-banach`. Source context: Guermond Chapters 46–47 and Mercier Chapter 8; precise reading record will be consolidated below. No new defect found.

## `prop-positive-definite-overlap-whitening-preserves-generalized-ritz-pencil`

Steps 1.1–3.1: adjoints give Hermitian whitened H; invertible y=L*c transforms both directions of the eigenproblem and preserves numerator/positive denominator. Exact Cholesky supplier requires positive definiteness; singular S is excluded. Scalar case and nonzero-vector preservation checked. No continuum or floating-point implication.

Dependencies: `def-cholesky-factorisation-with-positive-diagonal`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `def-matrix-product-and-identity-matrix`. Source context: Guermond Chapters 46–47 and Mercier Chapter 8; precise reading record will be consolidated below. No new defect found.

## `thm-compact-coercive-form-spectrum-and-minmax`

Steps 1.1–8.1: Lax–Milgram takes a bounded conjugate-linear functional. Compact JS is self-adjoint, positive and injective using dense J(V). Infinitely many finite-multiplicity positive occurrences admit descending maximum recursion; each occurrence is eventually listed and tends to zero. Countable Choice selects finite eigenspace bases. Norm equivalence makes the energy space complete; zero orthogonal complement proves its basis. Two Parseval expansions and rank-nullity give both attained min–max inequalities, also m=1 and multiplicities. Reader enumeration completion accepted.

Dependencies: `def-bounded-coercive-and-symmetric-sesquilinear-forms`, `thm-lax-milgram`, `def-countable-choice`, `def-compact-linear-operator`, `lem-compositions-with-a-compact-operator-are-compact`, `thm-spectral-theorem-for-compact-self-adjoint-operators`, `thm-hilbert-space-fourier-expansion`, `thm-parseval-equivalences-for-a-complete-orthonormal-family`, `thm-orthogonal-decomposition-by-a-closed-subspace`, `thm-rank-nullity`, `thm-heine-borel-rn`, `thm-extreme-value-metric`. Source context: Guermond Chapters 46–47 and Mercier Chapter 8; precise reading record will be consolidated below. No new defect found.

## `thm-finite-hermitian-ritz-residual-certifies-spectrum-and-eigendirection`

Steps 1.1–5.1: finite-dimensional boundedness and compactness allow spectral expansion with the kernel included. The coefficient-square identity proves proximity to some eigenvalue. Simplicity and separation from every other eigenvalue give the phase-invariant angle; the single-eigenvalue branch is one-dimensional. Zero residual does not label the lowest eigenvalue; no unbounded-operator extension is used. Countable Choice and inner-product conventions match the suppliers.

Dependencies: `thm-spectral-theorem-for-compact-self-adjoint-operators`, `def-countable-choice`, `def-real-and-complex-inner-product-space`, `def-hilbert-space`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `thm-heine-borel-rn`, `def-compact-linear-operator`. Source context: Guermond Chapters 46–47 and Mercier Chapter 8; precise reading record will be consolidated below. No new defect found.

## `ex-nearly-dependent-overlap-matrix-whitening-and-conditioning`

Steps 1.1–2.1: independently computed Gram entries, eigenvalues 2-epsilon and epsilon, norm-square distance 2epsilon, inverse-pencil eigenvalues and the displayed Cholesky factor. 0<epsilon<1 ensures independence, positive square root and nonsingular whitening. epsilon=1/N gives condition number 2N-1. No statement at epsilon=0 or finite-precision stability is claimed.

Exact cited suppliers were opened; no further local defect or outside repair identified.

## `ex-nonconforming-broken-eigenvalue-below-dirichlet-ground-state`

Steps 1.1–2.1: two matching cells have area 1/2, mass of w is 1/2 and every broken P0 gradient vanishes, yielding the Ritz equation for all trial tests. k=0,q=1 matches the actual broken-space definition. Unequal traces prove nonconformity directly; the form is semidefinite. Current Poincare supplier assumes AC and Countable Choice, both explicit in Facts, and gives positive lambda_1 for the square. No Sobolev trace converse is imported. Reader completion accepted.

Exact cited suppliers were opened; no further local defect or outside repair identified.

## `lem-conforming-energy-projection-is-best-approximation`

Steps 1.1–4.1: Ceas theorem accepts bounded conjugate-linear datum a(v,·), ensuring existence and uniqueness even for V_h={0}. Uniqueness gives linearity; subtraction and Hermitian symmetry give orthogonality and the Pythagorean identity. The actual symmetric supplier states this exact equality. Normalization on nonzero E gives the directed gap bound; delta<1 forces injectivity. At delta=0 the eigenspace is reproduced; delta=1 is deliberately excluded from injectivity.

Exact cited suppliers were opened; no further local defect or outside repair identified.

## `lem-conforming-galerkin-ritz-matrix-error-is-quadratic-in-gap`

Steps 1.1–4.1: the error map has norm at most delta, hence its positive Gram matrix has norm at most delta^2. Orthogonality gives A=I-G. Checked both complex mass cross identities: b(phi_j,r_i)=a(r_j,r_i)/lambda_j and b(r_j,phi_i)=a(r_j,r_i)/lambda_i. Cauchy–Schwarz gives three entry bounds totaling 3delta^2/lambda_1 and the explicit m-times-entry matrix bound. The threshold gives B>=I/(2lambda_m); the quotient subtraction yields exactly C_m=2lambda_m+6m lambda_m^2/lambda_1. m=1, delta=0 and equality in the threshold cause no zero denominator. Reader bounds accepted.

All cited direct interfaces checked; no additional defect found.

## `ex-dirichlet-square-conforming-p1-eigenvalue-upper-bound`

Steps 1.1–2.1: the eight triangles are nondegenerate with disjoint interiors and whole matching edges; nodal linear traces match and vanish at the boundary. The real zero-boundary supplier at p=2 gives H1_0 membership. Each area is 1/8, gradient magnitude 2, stiffness sum 4. Direct integral of a squared barycentric coordinate is area/6, giving mass 1/6 and quotient 24. The published min–max assumptions (AC and Countable Choice, nonempty bounded open square, symmetric Dirichlet form) are satisfied. The example claims no small-gap or convergence rate on this coarse mesh.

All cited direct interfaces checked; no additional defect found.

## `thm-conforming-galerkin-eigenvalue-upper-bound-quadratic-gap-error`

Steps 1.1–3.1: conformity restricts the continuous min–max minimization and gives the unconditional lower bound. The matrix supplier supplies delta_0=min(1/2,sqrt(lambda_1/(6m lambda_m))) and finite C_m. Projection injectivity gives the required m-dimensional competitor for the discrete min–max upper bound. delta=0 yields equality; multiplicity and m=1 are allowed; dim V_h>=m excludes an absent Ritz index. In the shift branch both variational equations change by the same mass multiple, so order and errors survive subtraction. The gap and constants are those of the shifted energy form, not the original indefinite form.

All cited direct interfaces checked; no additional defect found.

## `thm-conforming-galerkin-eigenspace-gap-under-isolated-cluster`

Steps 1.1–4.1: small-gap upper bounds at s and r-1 isolate exactly s-r+1 Ritz indices; the lower min–max bound separates higher indices. Step 1.2 establishes energy completeness before applying the actual first-variable-linear Riesz statement to the conjugated functional. K is bounded, linear and self-adjoint. P_h K P_h is a compact positive operator whose nonzero eigenspaces are exactly the reciprocal Ritz eigenspaces; finite-coordinate compactness uses the actual ambient/intrinsic compactness suppliers. Checked reciprocal separations Delta_+, Delta_-, zero kernel separation mu and the missing lower branch r=1. dim V_h=s has no higher discrete indices and is allowed. The residual identity bounds E by (norm K+mu)delta_s, and the reviewed residual lemma proves the directed energy gap with a uniform positive denominator. Repetition requires no eigenvector selection. Reader Riesz repair accepted.

Exact current prerequisites were opened and matched; no new mathematical defect found.

## `ex-repeated-eigenvalue-subspace-stable-but-eigenvector-choice-unstable`

Steps 1.1–5.1: coordinates run over positive integers and real scalars, so every weight is defined. Coordinate limits and uniform finite-square bounds prove l2 completeness without importing an unproved Hilbert-space assertion. U is a specified onto isometry, making V Hilbert and a its inner product (boundedness/coercivity constants 1). Finite truncations give dense J(V); lambda_j>=1 also makes J bounded. The explicit tail bound and compact finite ellipsoid give nets with centers in J(B_V); closure is complete and totally bounded, giving compactness under the declared Countable Choice. Testing all coordinate vectors exhausts weak eigenvalues and proves exactly a double ground state 1 followed by 3. V_n=E has two Ritz values 1 and gap zero, including the cluster theorem r=1,s=2,dim V_n=s branch. The specified alternating sequence has successive energy distance sqrt(2), so cannot converge. Reader foundational and indexing repairs accepted.

Exact current prerequisites were opened and matched; no new mathematical defect found.

## Historical comparison and decisions

Recovered all six complete pre-reader sources in `research/numerical-optimization-dynamics-2026-10-16-owner-step2-boundaries-57-70/final-source-preimages/<id>.md`. Each raw SHA256 equals its immutable `step3-hash-57-pre.json` item hash. Read the exact mathematical before/after changes; all current raw sources match `step3-hash-57-post.json`. Thus no missing-preimage escalation or historical-uncertainty exception is needed. The six source repairs are accepted without further source edits.

- `lem-finite-dimensional-galerkin-minmax`: `accepted_repair`, confidence 1. The hash-bound pre-reader Steps 1.1 and 3.1 applied Riesz and the spectral theorem in the energy inner product before establishing its completeness. The current explicit basis representation and finite-dimensional completeness citation close that premise. Checked positivity, conjugation, compactness and both min–max directions. Accepted reader source; synchronized its dependency manifest. All current source bytes equal the immutable post-reader item hash; the recovered preimage matches the immutable pre-reader hash. Ledger: `numerical-optimization-dynamics-2026-10-16-b57-3a-finite-ritz-completeness`.

- `thm-compact-coercive-form-spectrum-and-minmax`: `accepted_repair`, confidence 1. The hash-bound pre-reader Step 3.1 ordered the positive spectral occurrences without explaining the decreasing enumeration. Current Step 3.1 proves a maximum exists at each finite remainder and every occurrence is eventually listed. This is a sound nonfatal completion; the original claim was true. Current full operator, basis, Parseval and attained min–max proof checked. Accepted reader source. All current source bytes equal the immutable post-reader item hash; the recovered preimage matches the immutable pre-reader hash. Ledger: `numerical-optimization-dynamics-2026-10-16-b57-3a-spectral-enumeration`.

- `ex-nonconforming-broken-eigenvalue-below-dirichlet-ground-state`: `accepted_repair`, confidence 1. The hash-bound pre-reader Step 2.1 asserted failure of H1_0 membership directly from a jump without a stated Sobolev converse supplier. Current proof uses only the exact algebraic trace-matching definition, sufficient to exclude the conforming space, and specifies k=0,q=1. Recomputed zero stiffness, mass 1/2 and positive continuous ground state under AC and Countable Choice. The example claim is retained. Accepted reader source. All current source bytes equal the immutable post-reader item hash; the recovered preimage matches the immutable pre-reader hash. Ledger: `numerical-optimization-dynamics-2026-10-16-b57-3a-broken-trace-interface`.

- `lem-conforming-galerkin-ritz-matrix-error-is-quadratic-in-gap`: `accepted_repair`, confidence 1. The hash-bound pre-reader Step 4.1 cited the duplicated range 2.2–2.2 while relying on Step 3.1; current prose cites 2.1,2.2,3.1 correctly. Step 2.2 also supplies elementary Cauchy–Schwarz and matrix entry-to-norm details. Independently checked both cross terms, all constants and the positive mass denominator. Accepted reader source; synchronized its dependency manifest. All current source bytes equal the immutable post-reader item hash; the recovered preimage matches the immutable pre-reader hash. Ledger: `numerical-optimization-dynamics-2026-10-16-b57-3a-quadratic-matrix-evidence`.

- `thm-conforming-galerkin-eigenspace-gap-under-isolated-cluster`: `accepted_repair`, confidence 1. The hash-bound pre-reader F5/Step 1.2 used the linear-functional Riesz supplier as an operator representation for a conjugate-linear second-slot functional without spelling out its conjugation or energy completeness. Current Step 1.2 establishes norm equivalence and applies exactly the linear supplier to v↦(Jv,Ju), then conjugates. Checked all reciprocal separations and the residual argument, including r=1 and dim V_h=s. Accepted reader source; synchronized its dependency manifest. All current source bytes equal the immutable post-reader item hash; the recovered preimage matches the immutable pre-reader hash. Ledger: `numerical-optimization-dynamics-2026-10-16-b57-3a-energy-riesz-interface`.

- `ex-repeated-eigenvalue-subspace-stable-but-eigenvector-choice-unstable`: `accepted_repair`, confidence 1. The hash-bound pre-reader example used ell2(N) with weights indexed from 1 and an unspecified h before alternating over positive integers; it also treated ell2 completeness as supplied although the actual square-summability definition expressly does not prove it. Current positive-integer real model fixes these conventions and proves completeness by coordinate limits, weighted-space completeness, compactness and spectral exhaustion. The zero-gap/nonconvergent-vector witness is verified. Accepted reader source; synchronized its dependency manifest. All current source bytes equal the immutable post-reader item hash; the recovered preimage matches the immutable pre-reader hash. Ledger: `numerical-optimization-dynamics-2026-10-16-b57-3a-sequence-space-prerequisites`.

Four dependency manifests were stale after the reader changed item deps. Synchronized only those lists (finite Ritz, quadratic matrix, isolated cluster and sequence example); source statements and proofs remain exactly reader-post. Contract changes in this dispatch are the thirteen specific risk reviews. No new mathematical source repair is claimed.

## Final mechanical amendment

The first strict contract check reported three stale references in the sequence example: A1 had no mapped proof use and two boundary rows still named old step 1.2. Corrected the boundary references to current steps 1.1, 3.1, 4.1 and 5.1. The checker requires each linked fact to map to an explicit proof-step citation, so added A1 to the existing tags at steps 3.1, 3.2 and 4.1 and mirrored those inputs in the contract. These are exactly the declared uses of Countable Choice. The first attempted contract-only mapping was rejected because those tags were not yet present; no false pass is claimed. The strict check then passed for all fourteen entries with zero warnings. This final annotation amendment makes the sequence example verdict `amended_repair`; the other five source repairs remain `accepted_repair`. The earlier source-identity and acceptance statements describe the initial reader-post carrier; final sequence-source bytes differ only by these three tags. The closed ledger row records the accepted mathematical repair, not a new mechanical defect. No judge stamp exists in the amended item.

## Sources and actual prerequisite review

Read the relevant statements and arguments in [Guermond Chapter 47](https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf): Theorem 47.1 and Propositions 47.3–47.4 (printed pp. 308–310); generalized pencil equations (47.8)–(47.9) and Proposition 47.6 (pp. 311–312); Lemmas 47.7–47.9 and Theorem 47.10 (pp. 312–315); Remark 47.16 (p. 319). Checked the positive symmetric coercive setting, conformity, dimensional and small-approximation conditions. The local abstract energy-gap constants and cluster proof were independently derived above, rather than imported from a mesh-dependent rate.

Read [Guermond Chapter 46](https://people.tamu.edu/~guermond/M661_FALL_2025/chap46.pdf), §46.1.3, Theorems 46.17 and 46.21 and the intervening Hilbert-basis/Parseval discussion (printed pp. 298–300). That source uses separability; the local compact spectral supplier instead provides whole finite-dimensional nonzero eigenspaces and a kernel complement. The reviewed proofs use the latter exact local interface and do not choose a kernel basis.

Read [Mercier Chapter 8](https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf), §§8.1–8.5 (printed pp. 129–134): compact Hilbert embedding and coercive symmetric form, reciprocal solution-operator spectrum, finite conforming problem, and the complete resolvent argument for Lemma 1 (8.14) and ensuing directed-gap Lemma 2 (8.15). Mercier assumes operator-norm approximation for cluster identification; the local proof establishes its required separation directly from the reviewed Ritz bounds and applies a locally proved spectral residual estimate. No unsupported general operator-perturbation result is imported. Attempts to extract downloaded PDFs locally failed because pdftotext is unavailable; the complete relevant passages were read through the web PDF text tool.

All direct dependency Statements/Definitions cited by batch 57 were opened, including the three current batch-38 Galerkin interfaces and batch-24 matching-mesh/broken-space/real zero-boundary interfaces. Their exact hypotheses were checked against each actual use; no source-presence or old readiness claim was treated as mathematical acceptance. This review does not recursively re-audit every lower-level published proof. The ordinary gap definition was checked as prerequisite context: nonzero E gives a nonempty energy-unit sphere, V_h contains zero, and the gap lies in [0,1].

## Consumers, published items and scope

The two reader changes to Example formulations have no item consumers: a current items/library reference search finds only their own files and the assigned examples page. Its current summary still accurately describes the broken trial function and oscillating eigenvector; no page repair is needed. Other four reader repairs preserve their Statement interfaces. The local matrix, upper-bound and cluster consumers were checked in dependency order. No outside consumer needs repair and no published defect was established. Published carriers remained read-only, so no published-ledger lock or ledger entry was required. Existing cross-batch records and proposed withdrawals remain intact; no new withdrawal is proposed.

## Local checks and handoff

- Strict proof-contract: final 14/14 checked, zero errors and warnings, after the disclosed citation/boundary corrections.
- Risk report without require-reviewed identified thirteen HIGH/CRITICAL items; all thirteen now have specific complete reviews. Final require-reviewed run: zero errors, fourteen items routed.
- Manifest-deps: fourteen items, zero missing/normalized, zero errors. Four dependency lists now mirror actual reviewed source deps.
- Precheck: all six reader-edited proofs passed; the only locally amended item was checked again after its final tag edit and passed.
- Renderer: the final locally amended sequence example passed YAML and real KaTeX checks.
- Final batched proof-layout on all six touched item paths: six items, thirty-two steps, zero defects. No item edits followed.
- Decisions inventory: exactly the six scoped touched obligations, five accepted_repair and one amended_repair; each references one closed ledger row, caught at 3a-adjudicate, confidence 1. No reader/refuter/page decisions were invented.

No batch-57 mathematical blocker or escalation remains. Recomputed live status reports running Step 3 and an unrelated split-70 failure after three attempts; it was left to its owner. No gate battery, judging, stamping, transition, publication, push or commit was performed. The engine owns current hash stamps and subsequent gates.
