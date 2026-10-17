# Complex Hermitian block LDL* kernel: focused diagnosis and exact repair proposal

Run numerical-optimization-dynamics-2026-10-16. Review cycle 1. Batch16 is active; no active carrier, manifest, page, contract or runtime edit is authorized yet. This document contains a complete local arithmetic/proof proposal for guarded application after root verifies drain.

## Actual scope, source inspection and confirmed defects

Read CLAUDE.md and README.md fully earlier in this same owner task. Read actual `alg-symmetric-indefinite-block-ldl-star`, `thm-block-ldl-star-residual-with-actual-growth`, its Step-1 escalation and batch16 cross-batch record/notes, exact two-by-two indefinite example, and LIN-SPARSE plan/audit. Re-read the current operationwise model, rounded triangular-substitution lemma and rounded linear/normal residual certificate. No additional external full-text acquisition or reading is claimed.

The current LDL* algorithm is explicitly exact arithmetic, despite the approved scope's requested actual-growth arithmetic residual claim. The model supplies no complex division primitive; this is avoidable because Hermitian 1-by-1/2-by-2 inverses use a real diagonal or determinant and componentwise real division. A complete local kernel and unit-roundoff estimate are missing.

An additional confirmed actual-output issue must be fixed: the conditional theorem uses exact multipliers M=B D^-1 to define T and hence its conceptual L. A rounded stored Mhat has a nonzero coupling residual N=Mhat D-B. This changes off-diagonal blocks of the reconstructed factorization, and cannot be hidden in a trailing-only Delta. Preserve the existing conditional theorem, prove its requested trailing Delta bound, and add the full local reconstruction residual for actual stored factors. Otherwise an A1 instantiation alone would still not certify the returned numerical L.

Only actual direct consumers are that residual theorem and `ex-nonsingular-indefinite-requires-two-by-two-pivot`. The exact example remains valid; it explicitly describes the exact factorization branch. Same-owner review must refresh all actual and newly registered descendants after drain; no separate read-only consumer reviewer is assigned.

## Smallest local additions and algorithm realization

Add one local kernel algorithm and one local arithmetic lemma inside the existing LIN-SPARSE A page; no new page/pair or shared floating model change is needed. Keep the current declared permutation, block sequence, exact pivot tests, symbolic block-fill convention and exact-arithmetic branch. Add its concrete arithmetic branch using the kernel below. A global actual-stored-factor conclusion can be added to the existing residual theorem after its correct conditional exact-multiplier conclusion.

Input the current stored Hermitian block [[D,B*],[B,C]], with D of order k=1 or 2 and trailing dimension t>=0, and theta in (0,1]. Work with 0<u<1 in the operationwise no-underflow model. Complex products use its six-real-operation implementation. Complex division is never invoked: all displayed quotients are implemented as separate real-component divisions by their real denominator, including a negative denominator. Every nonzero exact intermediate must be normal; otherwise return range-failure. Reject invalid or nonfinite operations. Store only one Hermitian triangle and form its counterpart by exact conjugation; diagonal entries are real.

For k=1, D=[d] with real d. If d=0 return pivot-failure. Certify the existing threshold max_i|B_i1|<=|d|/theta. Set Mhat_i1 by dividing the two real components of B_i1 by d. The bound below has omega_1=u.

For k=2, write D=[[a,z],[conj(z),c]], a,c real. Let s=max(|a|,|c|,|Re z|,|Im z|). If s=0 return pivot-failure. Form the scaled stored block Ehat by componentwise real divisions D/s. Compute the real determinant estimate in this exact order: p=fl(ahat chat), q1=fl((Re zhat)^2), q2=fl((Im zhat)^2), q=fl(q1+q2), dhat=fl(p-q). Define Jhat=adj(Ehat)=[[chat,-zhat],[-conj(zhat),ahat]], using only copies, sign changes and conjugation. Let

`epsilon_d=3((1+u)^5-1)`.

Certify |dhat|>epsilon_d; if not certified return pivot-inconclusive, rather than asserting singularity. The exact normalized determinant delta=det(D/s) then is nonzero. Certify the original componentwise inverse-block threshold using the bounds below. Form Bhat_s=fl(B/s) componentwise, Khat=fl(Bhat_s Jhat) by two-term complex dots, then Mhat=fl(Khat/dhat) by real-component divisions. Do not form an explicit complex inverse or first compute 1/s, which could overflow needlessly.

For either k, compute each allocated lower-triangle entry of Uhat=fl(Mhat B*) by k-term sequential complex dots. Compute fl(C-Uhat) there. On the diagonal use its real component, discarding only the imaginary component; copy the lower triangle to the upper triangle by exact conjugation. This produces stored Hermitian Shat. Omitted unallocated positions are exact structural zeros under the original block neighbor-clique fill. Multipliers for rows with no coupling are exactly zero. Every additional explicit sparsity drop must be a separately recorded additive perturbation; it is not part of this bound.

## Pivot-test certificate semantics

The exact theoretical tests are unchanged. Arithmetic success does not alone certify pivot admissibility. A finite-precision branch may say pivot-failure only for an exactly zero scalar pivot or when rigorous lower bounds prove a threshold violation; inability to certify the determinant or a threshold gives pivot-inconclusive. This preserves the exact tests while avoiding false acceptance/rejection at a rounded boundary. A finite certificate budget may return inconclusive.

For each complex modulus needed in a guard, use the two-real-component scaled norm: scale by the larger absolute component, round divided components, their squared products and sum, square root and final rescaling. Zero is exact. If its stored output is h, expansion gives lower/upper exact modulus bounds `h/(1+u)^4` and `h/(1-u)^4`. These use only positive real powers and comparisons. All certificate arithmetic is exact on the stored data/bounds or itself carries rigorous outward allowances; ordinary uncorrected rounded comparisons are not a certificate. The definition may return pivot-inconclusive when such certification is unavailable, so it never presumes an unprovided outward-rounding primitive.

For k=2 the true inverse entry magnitudes admit the rigorous upper matrix

`U_ij = upper_modulus(Jhat_ij) / [s(1-u)(|dhat|-epsilon_d)]`.

This follows because the true normalized adjugate J satisfies |J-Jhat| entrywise in modulus <=u|J|, and |delta|>=|dhat|-epsilon_d. Let c_j^+ be certified upper bounds on max_i|B_ij|. If `U c^+ <= theta^-1 (1,1)` componentwise, the original exact threshold is certified. Lower bounds analogously use

`L_ij = lower_modulus(Jhat_ij) / [s(1+u)(|dhat|+epsilon_d)]`

and lower column maxima c_j^-; if any coordinate of L c^- is greater than theta^-1, the exact test fails. Otherwise return inconclusive or refine the certificate within its declared budget. The k=1 norm/max interval guard is the corresponding scalar test. Empty trailing maxima are exactly zero, as in the current definition. No claim is made that every nonsingular input or every declared block is accepted.

## Requested trailing local A1 estimate: full proof

Write E=D/s and J=adj(E) in the two-by-two case. Every component of E has magnitude at most one. Expansion of the determinant computation includes two scaling factors for each quadratic term, one product, and at most two following additions, so each coefficient is a product of at most five factors (1+delta_i). For 0<u<1 its deviation from one is at most (1+u)^5-1; the lower deviation is no larger. Since |E_11 E_22|+(Re E_12)^2+(Im E_12)^2<=3,

`|dhat-det(E)|<=epsilon_d`.

Thus accepted determinant certification proves D nonsingular. Put

`mu=epsilon_d/|dhat|<1`,

`nu=sqrt(2) u(1+mu)+mu`,

`g_k=(1+6u)/(1-(k-1)u)-1`,

`chi=u+(1+u)[sqrt(2) g_2(1+u)+u]`,

`omega_2=nu+chi(1+nu)`.

For k=1 use omega_1=u; g_1=6u is a conservative bound for the scalar complex product. These are explicit unit-roundoff/actual-scaled-pivot constants. They are O(u) for fixed nonzero normalized determinant as u tends to zero, but no uniform smallness is claimed near an ill-conditioned pivot.

Define the exact intermediate approximation R=Jhat/(s dhat), only for analysis. Componentwise scaling gives ||Jhat-J||_F<=u||J||_F<=sqrt(2)u||J||_2. Also ||D^-1||_2=||J||_2/(s|det E|) and |det E|/|dhat|<=1+mu. Therefore

`||R-D^-1||_2 <= nu ||D^-1||_2`, `||R||_2 <=(1+nu)||D^-1||_2`.

For the actual multiplier evaluation, scaling B adds at most u||B||_F/s. A two-term complex dot has norm discrepancy at most g_2 times its absolute-product sum, and the Frobenius product majorant uses ||Jhat||_F<=sqrt(2)||Jhat||_2. The final real-component division adds one factor 1+u. Consequently

`||Mhat-BR||_F <= chi ||B||_F ||R||_2`,

`epsilon_M:=||Mhat-BD^-1||_F <= omega_k ||B||_F ||D^-1||_2`,

`||Mhat||_F <=(1+omega_k)||B||_F||D^-1||_2`.

For k=1 these follow directly from the two real-component divisions. No rounded triangular-solve lemma is misapplied to a general complex block; these are the explicit supported real divisions.

The k-term update dot expansion, already proved in the current linear/normal residual certificate, gives

`||Uhat-Mhat B*||_F <= g_k ||Mhat||_F ||B||_F`.

Combining multiplier error, update product error and final subtraction gives, before enforcing Hermitian storage,

`||Sraw-(C-BD^-1 B*)||_F <= u||C||_F + q_k ||B||_F^2 ||D^-1||_2`,

where `q_k=(1+u)(1+g_k)(1+omega_k)-1`.

Because the target exact Schur complement is Hermitian, copying one computed triangle and discarding diagonal imaginary parts multiplies this Frobenius error by at most sqrt(2): each chosen off-diagonal error is counted twice, and the diagonal projection cannot increase error. Hence, with Delta=Shat-(C-BD^-1B*),

`||Delta||_2 <= beta:=sqrt(2)[u||C||_F+q_k||B||_F^2||D^-1||_2]`.

Since ||C||_F<=sqrt(t)||C||_2 and ||B||_F^2<=k||B||_2^2,

`||Delta||_2 <= eta_k,t (||C||_2+||B||_2^2||D^-1||_2)`,

`eta_k,t=sqrt(2) max(u sqrt(t), k q_k)`.

This is the requested proved unit-roundoff instantiation of A1. If t=0, all trailing and coupling arrays are empty and the local residual is exactly zero; define eta=0 there. Identity/zero multiplications stay exact in all these expansions. The determinant estimate's range and conditioning certificate, threshold status and scaled kernel are part of the claim, not a fabricated general complex-division model.

## Necessary actual stored-factor residual and global growth bound

Let M=BD^-1, H=Mhat-M, N=Mhat D-B=HD, and let That=[[I,0],[Mhat,I]]. Its complete active reconstruction discrepancy is

`F = [[D,B*],[B,C]] - That diag(D,Shat) That*`

`  = [[0,-N*],[-N,-Delta-H B*-Mhat N*]]`.

This identity follows by direct multiplication; it includes the missing off-diagonal coupling residual. Thus

`||F||_2 <= beta + epsilon_M ||B||_2 +(1+||Mhat||_2) epsilon_M ||D||_2 =: f`.

Indeed the off-diagonal Hermitian block [[0,N*],[N,0]] has norm ||N||_2 (square it and use the finite singular-value identity), ||N||_2<=epsilon_M||D||_2, and the bottom block has the stated three triangle-inequality terms. This is an explicit local unit-roundoff bound for actual stored factors; unlike an incorrect trailing-only assertion it retains terms of order u||B|| when B is small.

For all stages pad That by identities on previous indices and let What_r be the product of preceding stored-multiplier transformations. Repeated substitution gives the actual output identity

`PAP* - Lhat Dblk Lhat* = sum_r What_r F_r What_r*`.

The sign is positive because F was defined as active input minus reconstructed output. Taking norms gives

`||PAP*-Lhat Dblk Lhat*||_2 <= sum_r ||What_r||_2^2 f_r`

` <= rhohat_blk sum_r f_r`, `rhohat_blk=max_r ||What_r||_2^2`.

This is the richest sound actual-output counterpart of the existing theorem. Preserve its correct exact-multiplier/trailing-only conclusion separately, now with the proved eta_k,t when the kernel is used. No universal factor-growth or inverse-norm bound is introduced. In exact arithmetic every arithmetic error vanishes, H=N=Delta=F=0, recovering the original exact block factorization.

## Guarded repair and verification plan

After root confirms genuine batch16 drain and no native refresh, archive its complete current carriers/pages/manifest/contracts/coverage/notes. Add the local kernel and lemma, supplement the exact algorithm with its concrete arithmetic branch, instantiate the existing trailing-only conditional theorem and append the actual-stored-factor conclusion/proof. Keep its exact two-by-two example and explain its unchanged exact branch. Synchronize only these owned metadata rows and actual consumer quotations; inspect any newly registered reverse dependencies. Required final proof-layout only after final carrier edits. Root owns readiness, levels, hashes, source-fetch reconciliation and gates. No runtime, model-definition, unrelated page, quantum or physics changes are authorized.


## Final controller definition clarification

The applied kernel uses the finite exact real-RAM field/comparison guard mode, with fixed expression trees, row-major iteration, and one controller budget unit per field operation/comparison. Fixed integer powers are explicit multiplication chains. Only the already prescribed rounded scaled modulus is called; no exact square-root primitive or untyped outward certifier is assumed. Binary/rational data and rational u/theta implement the guard through exact rational arithmetic. Current pre-clarification batch16 files are separately archived under owner-ldl-controller-before-clarification. The exact algorithm and its exact two-by-two example remain valid, and the local error lemma uses only accepted deterministic certificates. Only the kernel algorithm carrier changed in this clarification; dependency sets and manifest rows are unchanged. Root owns binding invalidation/readiness refresh.
