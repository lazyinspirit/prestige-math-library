# Complete local J proof synthesis for root integration

Proposed ID: `thm-cyclotomic-schur-jantzen-sum-formula-from-rim-hook-valuations`.
Author: `/root/repair_klr_global_basis/native24_cyclotomic_jantzen_construction`.
Run: `frontier-44-special-representation-examples-28`.
Status: complete research proof construction, conditional on the actual Q/Murphy/S2 inputs named below; **no mathematical acceptance stamp, native decision, or consumer closure**. Parent alone reviews and binds the proof carriers and integrates any canonical supplier. The exhausted original James–Mathas fulltext remains unretrieved and unread; this is a genuine local alternative construction.

The standalone `multipartition-weight-scope-binding-note.md` is binding: arbitrary composition coefficients of the polynomial/Γ series are auxiliary combinatorics; the actual Schur module, determinant, and K0 assertions use multipartition weights only. Earlier guarded bodies remain byte-identical; the note qualifies their character language without expanding C.

## Statement

Let F be any field, q_H in F^× have finite multiplicative order e>=2, ell>=1 be arbitrary, and Q_a=q_H^(c_a), with charges c_a in Z. Fix n>=0 and let S_F be the cyclotomic q-Schur algebra with summands indexed by all ell-multipartitions of n. Put

$$O=F[t,t^{-1}]_{(t-1)},\quad \pi=t-1,\quad K=F(t),\quad z=q_Ht,\quad U_a=Q_at^{na}.$$

Let Delta_O(lambda) be its standard Weyl lattice with its actual cellular form. Define

$$\Delta_O(\lambda)(s)=\{v:\langle v,\Delta_O(\lambda)\rangle\subseteq\pi^sO\},\qquad\Delta_F(\lambda)^s=(\Delta_O(\lambda)(s)+\pi\Delta_O(\lambda))/\pi\Delta_O(\lambda).$$

Then this is a filtration by S_F-submodules, its first term is rad Delta_F(lambda), it terminates, and in the INTEGER Grothendieck group of finite-dimensional S_F-modules,

$$\sum_{s>0}[\Delta_F(\lambda)^s]=\sum_{\mu}J_{\lambda\mu}[\Delta_F(\mu)].$$

For a node x=(i,j,a), define the rim hook r_x^lambda and foot f_x^lambda=(lambda'_j,j,a) as in LM, leg(r_x^lambda)=lambda'_j-i, and res_O(i,j,a)=U_a z^(j-i). If lambda strictly dominates mu, set

$$J_{\lambda\mu}=\sum_{\substack{x\in[\lambda],\ y\in[\mu]\\[\lambda]\setminus r_x^\lambda=[\mu]\setminus r_y^\mu}}(-1)^{\operatorname{leg}(r_x^\lambda)+\operatorname{leg}(r_y^\mu)}\nu_\pi\big(\operatorname{res}_O(f_x^\lambda)-\operatorname{res}_O(f_y^\mu)\big);$$

otherwise set J_(lambda mu)=0. Equal remainder diagrams force equal hook lengths. Every displayed difference is nonzero in K, including samecomponent terms with distinct labels, by the local foot-exponent separation proof. No level-one or characteristic-zero restriction is present.

## Facts and local proof suppliers to bind

[F1] Actual arbitrary-level Q/Murphy/S2 construction: S_O is finite free and cellular, Delta_O(lambda) is finite free with its contravariant cellular form, every specialized standard has a nonzero unit Gram entry1, and the multipartition weight projections e_nu are selfadjoint and act on the actual semistandard type-nu basis. Over K the Hecke and Schur standards are split simple, so their forms are nondegenerate. The standard classes form a Z-basis of K0 and their multipartition-weight Kostka submatrix is unitriangular. These are the exact supplied Q contracts, not consequences assumed from J.

[F2] Proved local monic Gram product: with the actual Specht Murphy form, dominance-MINIMAL refinement t_T, row symmetrizer coefficient C_(t_T), and prefix polynomial eigenvalue u_T,

$$\det G_{\lambda\nu}=\prod_{T\in\operatorname{SStd}_\nu(\lambda)}\frac{\gamma_{t_T}}{C_{t_T}u_T}.$$

The inverse-permutation-operator proof inserts the essential m_nu inverse; the spectral transition has determinant exactly1; the explicit parabolic coefficient and Specht norm recurrence were proved locally. All their denominators are nonzero in the permitted F(t), and generic operations do not divide the O-lattice by a quantum factorial. Full bodies are in the sibling Gram directory and `explicit-parabolic-factor-and-schur-gram-product.md`.

[F3] Proved local pair-factor/strip recursion: this norm is exactly the boundary/node-pair product in the sibling pair-reduction packet. Adding the next type-row label gives a permitted strip rho→lambda with factor F_(lambda rho)^(a) in `beta-current-and-horizontal-strip-commutator-reduction.md`. A product of these factors over a tableau chain is the norm in F2.

[F4] Proved local complete marked-strip identity: the signed hook matrix J, with all auxiliary ranks using the SAME fixed z,U_a, and the coefficient-one strip matrix Γ_a obey

$$\big(J_n\Gamma_a^{(n,m)}-\Gamma_a^{(n,m)}J_m\big)_{\lambda\rho}=\Gamma_a^{(n,m)}(\lambda,\rho)\,\nu_\pi(F_{\lambda\rho}^{(a)}).$$

On support, both samecomponent and crosscomponent cases were proved by explicit triangular step-matrix minors and interval overlap cancellation. Off support, the crosscomponent rank-one adjugate proof covers all defects; the samecomponent proof covers rank<=N-3, rankN-2, and rankN-1 in BOTH missing-interval orientations, including the top zero-column boundary. These are actual local proof bodies; no unnamed sign-reversing cancellation or James–Mathas quotation remains. The complete case carriers and hashes are listed in the construction record and handoff inventory.

[F5] Proved DVR leaves: the filtration is contravariant-stable; its first term is the reduced form radical, equal to the module radical for these nonzero-form cellular standards; Smith reduction gives finite termination and sum_(s>0)dim e_nu Delta_F(lambda)^s=V(det G_(lambda nu)). Exactness of selfadjoint weight projection and the multipartition Kostka unitriangular matrix give integer K0 character injectivity. Full local proofs are in `dvr-leaves-and-exact-jantzen-gap.md`; its historical gap paragraph is superseded by this synthesis and the current status record, not used as a proof.

## Proof

**Given:** the arbitrary field, level, charges, actual Schur construction, and deformation specified in the Statement.

1.1 For n=0 there is one empty multipartition, S_O=O, Delta_O=O with form1, every positive filtration term is0, and every J coefficient is0; the assertions follow directly. For n>=1, F1 gives free standard lattices with nondegenerate generic forms. F5's Smith reduction shows the defined filtration is by submodules, begins at Delta_F(lambda), has first term equal to the form radical, and is zero for all sufficiently large s. The nonzero cellular form's rank-one cell actions force every proper submodule into that radical, so it is the module radical. [given, F1, F5]

1.2 It remains to prove the class sum. Fix an ACTUAL multipartition weight nu. The selfadjoint orthogonal decomposition by e_nu makes its standard weight space orthogonal to every other weight space. F5 therefore gives sum_(s>0)dim_F e_nu Delta_F(lambda)^s=V(det G_(lambda nu)). By F2 and valuation additivity, this is the sum over type-nu semistandard T of the valuations of their explicit monic norms. Empty spaces use determinant1 and contribute0. [F2, F5, step 1.1]

2.1 Introduce ordered variables for type-row labels. The AUXILIARY generating series of flagged semistandard tableaux is the product over physical components a of s_(lambda^(a))(Y_a), with Y_a the alphabet of type components at least a. Its coefficient at an actual multipartition nu is K_(lambda nu). Successive Γ_a matrices add the horizontal strips carrying each next label and therefore enumerate these tableaux once. The path/Jacobi–Trudi cancellation in `signed-rim-hooks-to-beta-jacobi-trudi-reduction.md` proves this character identity locally. No actual Schur weight or module for another composition is needed. [F1, F3]

2.2 Pad beta lists to N>n. Removing a hook of length h lowers one beta bead by h, with sorting sign (-1)^leg; adding it raises a bead by h with the corresponding sign. The foot content is the lower bead position minus N plus1. Thus the full signed equal-length hook side is precisely the finite shifted-beta Jacobi–Trudi polynomial proved in that same packet. Samecomponent inward ranges, crosscomponent earlier-to-later ranges, occupied-position zero terms, and the unit foot-residue shift were all established there. Its coefficient at nu is sum_mu J_(lambda mu)K_(mu nu). [F4, step 2.1]

3.1 Apply the COMPLETE local identity F4 to the product of successive type-row Γ matrices and telescope JΓ−ΓJ. Start with the empty shape, where J_0=0. Each commutator inserts exactly the valuation of the strip factor at that label position, while all other Γ factors retain the same tableau chain. Summing inserted positions gives the total valuation of the product of the factors over the chain, hence of the monic norm by F3. The left endpoint of the telescope gives exactly the auxiliary polynomial in step2.2. Consequently, at the ACTUAL multipartition coefficient nu,

$$\nu_\pi(\det G_{\lambda\nu})=\sum_\mu J_{\lambda\mu}K_{\mu\nu}.$$

Every auxiliary rank keeps the final-rank-n parameters U_a=Q_a t^(na); no inconsistent rank-dependent deformation is substituted during the telescope. [F2, F3, F4, step 2.2]

3.2 All binomial valuations used in the proof are exact. For a nonzero difference A t^u-B t^v, unequal constants give valuation0; equal constants with u-v!=0 give valuation1 in characteristic zero or p^(v_p(|u-v|)) in characteristic p. Artificial padded symbols in the crosscomponent minor proofs cancel FORMALLY before evaluation; the retained terms are actual valid hook/node pairs, whose exponent bound makes their differences nonzero. Thus step3.1 is valid over every F and retains the required higher positive-characteristic multiplicities. [F4, step 3.1]

4.1 Combining steps1.2 and3.1 shows that the actual multipartition-weight character of sum_(s>0)[Delta_F(lambda)^s] equals that of sum_mu J_(lambda mu)[Delta_F(mu)]. Weight projection is exact, so these are additive characters on the integer K0 group. The standard classes form its Z-basis by F1; their multipartition weight matrix is unitriangular, hence invertible over Z. A zero difference of these weight characters therefore has all standard coefficients zero. This proves the asserted INTEGER K0 equality, with no rationalization and no Schur-functor injectivity claim. [F1, F5, step 1.2, step 3.1] ∎

## Source identity and integration boundary

This is the exact LM math/0607451v4 Definition2.5/Theorem2.6 interface. Its cited original source is James–Mathas, *The Jantzen sum formula for cyclotomic q–Schur algebras*, Trans. AMS352(2000),5381–5404, DOI10.1090/S0002-9947-00-02492-2, Theorem4.3. The separate 1997 *A q-analogue of the Jantzen–Schaper theorem* is not substituted. The original fullproof retrieval cap is exhausted and neither it nor its proof was read. All constructions above use the actual local proof bodies with explicit hashes/read scopes; root must bind those bodies into proved local suppliers or fold them into the integrated proof. A citation or this summary alone cannot replace those full bodies.

All claims and fields remain drafts. This synthesis does not certify Q, issue a native ready decision, consume a second repair round, review consumers, or authorize gate execution. Root alone owns those actions. It records completion of the requested J PROOF CONSTRUCTION, subject to root's mathematical review of the complete candidate and prerequisite bindings.
