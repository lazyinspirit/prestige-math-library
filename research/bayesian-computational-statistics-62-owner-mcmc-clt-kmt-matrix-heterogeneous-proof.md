# Gaussian-anchor coupling for heterogeneous matrix covariances

Research proof, authorized as a supplier extension for the conditional vector SIP repair. No item, manifest, contract, stamp, or source-scope record is changed here. This is a mathematical extension proved below; it is not attributed to a source theorem with an unread statement. The isotropic dyadic construction was source-checked in the companion `bayesian-computational-statistics-62-owner-mcmc-clt-kmt-dyadic-proof.md` against Zaitsev 1998 §5, printed pp. 66–68. The new matrix interpolation argument below supplies the heterogeneous extension locally.

## 1. Exact statement and analytic input

Fix d≤2 and K≥1. Let X_1,…,X_n be independent centered vectors with deterministic covariances D_i satisfying I≤D_i≤KI. Set B≥1. Assume each X_i has an analytic logarithmic mgf K_i(z) on B|z|<1, with

|∂_u∂_v² K_i(z)|≤B|u| vᵀD_i v

for real u,v and complex z in that ball. A fixed multiplicative constant in this bound can be absorbed into B. Independent sums of centered bounded atoms of norms ≤b satisfy this hypothesis with B=C max(1,b): take the logarithm of each atom's mgf on a sufficiently small zero-free ball, differentiate it three times, and add the bounds and covariances. The complete elementary calculation is in §G of `bayesian-computational-statistics-62-owner-mcmc-clt-kmt-fourier-proof.md` and in `lem-gaussian-anchored-sums-have-cumulant-and-fourier-bounds`. Atoms need not have nonsingular covariance or identical laws. There is no bound on the number of atoms in one X_i. The grouping of many atoms into one X_i therefore does not create a false boundedness assumption on X_i itself.

We use the proved isotropic Gaussian-anchor density and conditional-quantile suppliers for total dimension at most four: `lem-gaussian-anchored-sum-density-moderate-deviation-bound` and `lem-gaussian-anchored-conditional-quantile-coupling`. Their precise analytic input is the above cumulant inequality plus a Gaussian independent component with covariance ≥γsI in a joint law of covariance sI. Independent bounded-atom sums are one sufficient way to establish the cumulant inequality; the actual estimates consume that inequality, rather than any bound on an entire grouped sum. Sections 2–3 verify this input for every transformed mixed node and every required coordinate projection. If an eventual item statement restricts its hypotheses to whole bounded increments, it must be extended to the proved bounded-atom/cumulant interface before this note can be integrated under that item ID; a proof body alone does not enlarge a supplier's Statement.

The conclusion is: for each fixed A>0 there is a coupling with independent Gaussian vectors G_i~N(0,D_i) such that

P(max_{k≤n}|Σ_{i≤k}(X_i−G_i)|>C_{A,K} B log³(en))≤C_{A,K} n^{-A}.

More generally the same bound holds for any row length m≤N with log(en) replaced by log(eN) and failure C_{A,K}N^{-A}. This ambient-confidence form is required when recursively halving the active row.

## 2. Concentration and stability under bounded linear maps

Integrating the third derivative inequality along the real line th gives, for |h|≤c/B,

K_i(h)≤(1/2)hᵀD_i h+C B|h| hᵀD_i h≤C_K|h|².

Indeed the third-order remainder is bounded by B|h|hᵀD_i h/6. Sum over any m entries and use the exponential Markov inequality for each of the fixed d coordinates with h chosen as the smaller of c/B and a constant times threshold/m. Optimizing these two regimes gives

P(|Σ_{i=a+1}^{a+m}X_i|>C_K[√(mt)+Bt])≤C_K e^{-c_Kt}, t≥1.

This also holds for mixed rows in which arbitrary entries are replaced by independent matching Gaussians, since a Gaussian has the exact quadratic cumulant. All later good events use these unconditional row bounds, not conditional concentration inside a block.

If L is a fixed real linear map of norm ≤C_K, the cumulant of LX_i is K_i(Lᵀz). Substitution in the three derivatives gives analytic radius at least 1/(C_K B) and

|∂_u∂_v² K_{LX_i}(z)|≤C_K B |u| vᵀ(LD_iLᵀ)v.

The same calculation permits singular transformed covariance; positivity is required only for the total covariance when applying density inversion and whitening. Thus sums of independently transformed entries remain in the required cumulant class with parameter C_KB.

## 3. Exact matrix parent/residual transform and anchor verification

Let I be a dyadic interval of s entries, with left and right child sums U_L,U_R and covariance matrices A,C. (The letter C here denotes the right covariance, not an unspecified constant.) Put

W=A+C,  P=U_L+U_R,  H=A W^{-1},  D=U_L−HP.

There is no assumption that A and C commute. Independence gives

Cov(P)=W,  Cov(P,D)=A−W W^{-1}A=0,

Cov(D)=R=A−A W^{-1}A.

The last matrix is symmetric positive definite and equals the parallel sum (A^{-1}+C^{-1})^{-1}. For example A−AW^{-1}A=AW^{-1}C; its inverse is C^{-1}WA^{-1}=C^{-1}+A^{-1}. This proves both the identity and positivity without a commutation step. Since both children have s/2 entries,

(s/2)I≤A,C≤(Ks/2)I,  sI≤W≤KsI,  (s/4)I≤R≤(Ks/4)I.

The bound on R follows by inverting the bounds on A and C, adding them, and inverting again. Consequently the standardized pair

Q=√s diag(W^{-1/2},R^{-1/2})(P,D)

has covariance sI_{2d}. On the left and right summands its coefficient maps are respectively

L_L x=√s (W^{-1/2}x, R^{-1/2}C W^{-1}x),

L_R x=√s (W^{-1/2}x, −R^{-1/2}A W^{-1}x).

These formulae use I−AW^{-1}=CW^{-1}, with exactly that multiplication order. Their operator norms are bounded by a constant depending only on K: √s||W^{-1/2}||≤1, √s||R^{-1/2}||≤2, and ||AW^{-1}||,||CW^{-1}||≤K/2. The inverse map from Q to (P,D) has norm at most C_K as well, because ||W^{1/2}/√s||≤√K and ||R^{1/2}/√s||≤√K/2. Section 2 therefore establishes the cumulant input for Q with parameter C_K B.

At a half-anchor replacement stage, the odd entries are independent matching Gaussian vectors, the even entries have their raw laws, and every entry retains covariance D_i∈[I,KI]. Every child of an active dyadic split has an even number of entries and exactly half Gaussian positions. Its Gaussian covariance is at least (s/4)I, whereas its total covariance is at most (Ks/2)I. Thus its Gaussian component is at least γ times its full covariance with γ=1/(2K). The two children are independent. Before the parent/residual transform their joint Gaussian covariance is at least γ diag(A,C); applying the same linear transform to the two quadratic forms preserves this Loewner inequality. After whitening, Q therefore has an independent Gaussian component with covariance at least γsI_{2d}.

Under every real exponential tilt the Gaussian component retains its covariance. Completing the square proves this directly. The remaining tilted factor is a characteristic function with modulus ≤1. Hence the tilted characteristic function of Q satisfies |φ_h(t)|≤exp(−γs|t|²/2), at every t and every admissible h. Every coordinate prefix of Q has total covariance sI and Gaussian component ≥γsI by projection, so the same inequality holds for it. Integrating this Gaussian envelope and its first directional weight outside |t|≥c/B gives exactly the unweighted and weighted Fourier budgets of the analytic supplier when s≥C_K B². No regularity of the raw bounded-atom laws is required.

These are all hypotheses of the existing isotropic conditional-quantile proof, now in joint dimension 2d≤4. In particular the actual parent, rather than a coupled Gaussian parent, is the conditioning value. Because Q has block diagonal covariance, its reference Gaussian last d coordinates are independent of its first d coordinates. Undoing the separate parent and residual whitening yields a jointly measurable transport T_{I,p} of a fresh Z_I~N(0,R) to the law of D conditional on P=p, with

|T_{I,p}(Z_I)−Z_I|≤C_K B[1+(|p|²+|T_{I,p}(Z_I)|²)/s],

whenever s≥C_K B² and |p|,|T_{I,p}(Z_I)|≤c_K s/B. The output whitening has bounded norm C_K, so no factor √s or additional B is lost. The root transport from N(0,W) has the analogous bound C_K B(1+|P|²/s). All maps are the measurable conditional Rosenblatt maps supplied by the quantile lemma. Parent-null versions may be arbitrary.

## 4. Stopped matrix tree and the exact prefix identity

Take an ambient N and a dyadic current row length m≤N. Set L=a_{A,K} log(eN), and choose the stopping block length m_0 as the least power of two ≥H_K B²L. If m≤m_0, an independent product coupling and §2 give error at most C_K[√(mL)+BL]≤C_K BL outside a set of probability C_K m e^{-c_KL}. Otherwise stop the tree at blocks of length m_0.

Use a Gaussian root with covariance W_root and fresh independent Gaussian residuals Z_I~N(0,R_I). At each active node define target and Gaussian child sums by

U_L=H_I U_I+D_I,  U_R=(I−H_I)U_I−D_I,  D_I=T_{I,U_I}(Z_I),

V_L=H_I V_I+Z_I,  V_R=(I−H_I)V_I−Z_I.

The target conditional split is exact. For Gaussian sums, Cov(V_L)=A W^{-1}A+R=A, and the cross covariance is A W^{-1}C−R=0. The analogous right covariance is C. Joint Gaussianity therefore gives independent Gaussian children. Induction gives independent Gaussian terminal sums. At terminal blocks fill in the actual raw or mixed increments from their original product-law conditional distributions given their sum. Use independent terminal kernels. This recovers the exact product target law, by repeatedly disintegrating independent disjoint blocks, as proved in the isotropic note.

For completeness a matching Gaussian terminal kernel is explicit even with unequal matrix covariances. Generate independent h_i~N(0,D_i), put H_sum=Σ_{i∈I}h_i and W_I=Σ_{i∈I}D_i, and set

G_i=D_i W_I^{-1}V_I+h_i−D_i W_I^{-1}H_sum.

The residual vector has sum zero, covariance blocks δ_ijD_i−D_iW_I^{-1}D_j, and zero covariance with H_sum. Thus it is independent of H_sum. The displayed construction is precisely the Gaussian product law conditioned on its sum. In particular all completed G_i are independent with their individual covariance D_i.

Write e_I=U_I−V_I and δ_I=D_I−Z_I. Then

e_L=A W^{-1}e_I+δ_I,  e_R=C W^{-1}e_I−δ_I.

Naively bounding these two matrix multipliers at every level would give a false exponential-in-depth loss. Instead fix any prefix P of the entries of I ending at a terminal boundary, and let S_P be the sum of the individual covariance matrices over that prefix. There is the following exact recursive expansion:

Σ_{i∈P}(X_i−G_i)=S_P W_I^{-1}e_I+Σ_{J on the boundary path} M_{J,P}δ_J.

At a boundary node J, if the prefix ends in its left child, M_{J,P}=S_{partial-left} W_{J_L}^{-1}; if it contains its full left child and ends in its right child, M_{J,P}=I−S_{partial-right} W_{J_R}^{-1}. Empty partial prefixes have covariance zero. Complete prefixes need no further boundary path.

Here is a proof of the formula, including the multiplication order. If the prefix lies in the left child, substitute its inductive leading term S_P A^{-1}e_L into the child equation; S_P A^{-1}A W^{-1}=S_P W^{-1}, while the new residual coefficient is S_P A^{-1}. If the prefix contains the entire left child and a right prefix Q, add e_L to the inductive leading term S_Q C^{-1}e_R. Its parent coefficient is (A+S_Q)W^{-1}, and its residual coefficient is I−S_Q C^{-1}. Existing deeper residual terms keep their coefficients. This inductively proves the identity from terminal blocks upward. Equivalently, descendant propagation multipliers telescope in the order W_desc W_parent^{-1} W_parent W_grandparent^{-1}=W_desc W_grandparent^{-1}; no commutation is used.

Each coefficient is bounded uniformly. For a partial prefix of r entries inside a child of h entries, ||S_partial W_child^{-1}||≤Kr/h≤K. Consequently ||M_{J,P}||≤1+K and ||S_P W_I^{-1}||≤K. There are at most log_2 m boundary nodes. Therefore the deterministic estimate is

max_{terminal boundaries k}|Σ_{i≤k}(X_i−G_i)|≤K|e_root|+(1+K)Σ_levels max_{I at level}|δ_I|.

This is the required O(depth), rather than K^depth, bound.

## 5. Probability estimate and Gaussian half-anchor recursion

By §2 and a union bound require all dyadic target sums to have norm ≤C_K[√(sL)+BL]. There are fewer than 2m such intervals. A residual satisfies

D_I=C W^{-1}U_L−A W^{-1}U_R,

so its norm is bounded by C_K[√(sL)+BL] on this same event. For each active s≥H_K B²L, taking H_K large makes these target norms at most c_Ks/B, and their squared norms divided by s at most C_KL. Thus every transport is in its moderate region, with |e_root|,|δ_I|≤C_K BL. The exact prefix formula gives terminal-boundary error C_K BL log(em).

Also require all target and Gaussian within-terminal prefixes to satisfy their unconditional concentration bounds; there are at most m prefixes of each type. Their maximum norms are at most C_K[√(m_0L)+BL]≤C_KBL because m_0<2H_K B²L. Hence all prefixes obey the same error bound C_K BL log(em). The union bad-event probability is C_K m exp(−c_KL). This establishes the one-stage mixed-target to matching-Gaussian approximation.

Start with independent Gaussian entries having covariance D_i. Couple the current active Gaussian subrow to the half-raw/half-Gaussian mixed row directly: compute its root sum and its Gaussian residuals Z_I=V_L−A W^{-1}V_I from that already realized row, and use them as the primitives of the preceding target construction. These primitives are mutually independent by the Gaussian covariance calculation above. Sample only the target terminal bridges with fresh randomness. Thus there is no need to select a reverse coupling kernel or change any previously realized Gaussian values. Freeze its raw even entries and retain its Gaussian odd entries as the next active row. The remaining covariance matrices, although no longer adjacent in original time, still lie between I and KI. Thus all constants and anchor proportions remain valid in the compressed order. The full row has its product marginal at every stage because the kernel acts only on an active subrow independent of its frozen complement and uses fresh randomness.

For each original prefix, one stage's change is exactly the change over a prefix of the compressed active row. Always use the ambient L=a_{A,K}log(eN). Stop when the compressed row has at most H_K B²L entries and replace its remaining Gaussians by independent raw entries with the correct individual laws. Section 2 bounds this final change by C_KBL with the same ambient failure budget. There are at most log_2 N stages; add their maximum errors and union their bad events. Choosing a_{A,K} sufficiently large gives

P(max_{k≤m}|Σ_{i≤k}(X_i−G_i)|>C_{A,K}B log³(eN))≤C_{A,K}N^{-A},  m≤N.

Non-dyadic m can be padded to the next power of two by independent N(0,I) entries, then restricted to its original coordinates. The padded length is ≤2N, which changes only constants. The padding laws satisfy the analytic class trivially, and they need not be raw bounded-atom laws. This completes the heterogeneous matrix core.

## 6. Uniformly comparable rather than normalized covariances

If cI≤D_i≤CI with fixed 0<c≤C<∞, divide the entries by √c. Their covariances lie in [I,(C/c)I] and their cumulant parameter is B/√c. Taking the theorem's scale parameter to be max(1,B/√c) gives physical error C_{A,C/c} max(√c,B) log³(eN). In the intended conditional chunk application c,C are fixed constants after normalization, so this is simply C_A B log³(eN) with B≥1.

This core does not prove that a random conditional chunk covariance is uniformly comparable. The conditional SIP branch must establish that separate event. The core does admit a measurable environmental version, as follows. Suppose the individual raw laws are measurable probability kernels in a standard-Borel environment e, with the moment/covariance hypotheses on a measurable good set. Their covariances are measurable integrals; matrix inversion and positive definite square roots are continuous on the positive definite cone. Mixed Gaussian convolutions have strictly positive densities. Their joint/prefix densities are measurable in e and their spatial arguments by integration against the raw product kernels. Conditional CDFs are measurable integrals of their density ratios, and quantiles are measurable rational infima. Therefore every root and residual transport is measurable jointly in e and all its inputs, by the same explicit construction as the quantile supplier.

There is also an explicit measurable terminal kernel, removing any need to choose arbitrary versions simultaneously in e. In a mixed terminal block the Gaussian positions have total covariance G≥c_K m_0 I. Let μ_e be the product raw-position law and let S_raw(r) be the sum of those positions. Conditional on total u, sample their vector r from the posterior kernel

μ_e(dr) q_{G(e)}(u−S_raw(r)) / ∫q_{G(e)}(u−S_raw(v)) μ_e(dv).

The denominator is finite and strictly positive at every u. Then fill the Gaussian positions from their explicit matching Gaussian bridge conditional on sum u−S_raw(r). Integrating the Gaussian density proves this is exactly the original independent mixed-row conditional law. Every ingredient is jointly measurable in (e,u), so this is a probability kernel. The final short-row replacement uses the raw product kernel directly and requires no conditioning. Sampling from a standard-Borel probability kernel using fresh uniform randomization is the usual measurable kernel realization; equivalently one can retain these explicit kernels in the finite product probability-space construction. Start the active Gaussian row by applying D_i(e)^{1/2} to independent standard Gaussian coordinates. Then use the already realized Gaussian residuals as in §5. These operations give a measurable coupling kernel for each environment, while preserving all prior variables. On the bad environmental set use an independent raw/Gaussian product kernel. No pointwise unmeasurable choice of couplings is used.
