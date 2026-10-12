# Algebraic cyclotomic action construction

Author: `/root/repair_klr_global_basis/cyclotomic_action_construction`. Run: `frontier-44-special-representation-examples-28`. This is a research construction for owner integration, not native readiness, independent audit, or a canonical item edit. Source: Kang–Kashiwara, arXiv:1102.4677v4, full cached text read, with byte guards in `source-read-ledger.json`.

## Scope, dependencies and exact corrections

Fix a finite index set and a symmetrizable Cartan matrix (the proof does not require finite type), a coefficient field k in degree zero of arbitrary characteristic, homogeneous parameters Q satisfying Q1–Q4, and a dominant weight Λ. Put λ_j=⟨h_j,Λ⟩. Impose precisely x_1^{λ_{ν_1}}e(ν)=0. No deformation coefficients, geometric restriction, splitting-field assumption, or characteristic-zero assumption enter. Use basic right-append F=Ind, basic E=Res and qM_d=M_{d−1}. Write δ=(α_i|α_i)=2d_i, q_i=q^{d_i}, h=⟨h_i,Λ−β⟩, s=(α_i|2Λ−β), n=|β|, A=R^Λ(β), S=R(β+α_i). The left-append generic induction is written Fbar, with the shifted embedding ξ(x_a)=x_{a+1}, ξ(τ_a)=τ_{a+1}.

The existing `lem-generic-klr-induction-and-restriction-mixed-relations` has a genuine error in (c): its middle term E_i F_i must be **E_i Fbar_i**. Its introduction also says a kernel of F_i is a sequence in Mod(R(β)); the displayed functors are endofunctors at β and the correct exact sequence is

$$0\to\bar F_i E_iM\to E_i\bar F_iM\to q^{-(\alpha_i|\beta)}M[t]\to0.$$

The projectivity supplier's filtered-colon strategy is not the argument below. The commutator supplier's final triangular formula currently reuses `a` for both a negative h and its positive magnitude; the correct negative-sign index is r=−h and the leading term is t^{r−1−j}. Local nilpotence does not explain the summand count; the polynomial division does.

Proposed local helper IDs, all homed on existing11A:

* `lem-cyclotomic-klr-dot-nilpotence-and-finite-root-strings`: deps quotient definition, KLR presentation/grading and PBW.
* `lem-cyclotomic-klr-comparison-intertwiners`: deps quotient definition, KLR presentation/grading, PBW, preceding dot lemma. This contains the actual P/Q identity and the comparison sequence; projectivity follows from it.
* `lem-monic-polynomial-torsion-of-projective-dimension-one`: elementary rings/modules only. Its proof is reproduced below and can instead be kept inside the existing projectivity theorem if the owner prefers fewer items.
* `lem-cyclotomic-klr-commutator-polynomial-division`: deps corrected generic mixed-relations lemma, comparison-intertwiners lemma and projectivity theorem. It supplies the terminal maps with both signs.

No proposed helper depends on the commutator or the eventual integral categorification theorem. The PBW theorem is an existing generic supplier, not a cited external substitute. These bodies establish finite dimension, local nilpotence, right projectivity, comparison exactness, and the categorical sl2 relation, conditionally only on the KLR presentation and proved local PBW supplier. They do not establish a symmetric Frobenius trace, a second adjunction, global-basis compatibility, or positive Serre relations.

## Helper 1: nilpotent dots, finite dimension and finite i-strings

**Contract.** Every dot is nilpotent in each R^Λ(β); each R^Λ(β) is finite dimensional over k. For fixed β,i, there is m with R^Λ(β+kα_i)=0 for k≥m.

**Given:** the preceding parameter, grading and first-strand conventions and the local PBW basis theorem.

1.1 For an R(N)-module M, fix a word ν with ν_a=ν_{a+1}. Write x=x_a,y=x_{a+1},τ=τ_a, f a polynomial and ∂f=(s_af−f)/(x−y). If fe(ν) annihilates M, then τfτe(ν) and fτe(ν) annihilate M. The nil-Hecke relations give

$$(x-y)\tau f\tau e(\nu)=(s_af-f)\tau e(\nu)=(\tau f-\partial f-f\tau)e(\nu).$$

The left expression and τf,fτ vanish on M, so (∂f)e(ν) does too. The identity s_af=f+(x−y)∂f then proves (s_af)e(ν)M=0. This proves closure of the annihilator under divided differences and exchange at an equal-color pair, without dividing by an integer. [given, algebra]

1.2 A common power x_1^N vanishes, since there are finitely many colors and x_1^{λ_{ν_1}}e(ν)=0; N≥max(1,λ_j) works, including zero blocks. Inductively suppose x_a^N=0. For an equal-color pair step 1.1 gives x_{a+1}^N e(ν)=0. For an unequal pair j,l, the quadratic and mixed relations give y^N Q_{jl}(x,y)e(ν)=τ_a x_a^N τ_a e(ν)=0. Write Q_{jl}(x,y)=c y^r+xH(x,y), where r=−a_{lj}, c≠0; homogeneity and positivity of dot degrees show every other term has a positive x power. Thus y^{N+r}e(ν)=−c^{-1}xy^N H(x,y)e(ν). Raise this commuting polynomial relation to the Nth power to obtain y^{N(N+r)}e(ν)=0. Taking the maximum over the finite words gives a common power for x_{a+1}. PBW now spans the quotient by finitely many τ_w x_1^{b_1}…x_n^{b_n}e(ν), with each b_a below its nilpotence bound; hence the quotient is finite dimensional. [step 1.1, given, algebra]

1.3 For any fixed prefix length ℓ there is a uniform integer T_ℓ such that every word with an all-i tail of length T_ℓ is zero in its cyclotomic algebra. Indeed choose a common bound x_{ℓ+1}^N=0 in R^Λ(ℓ+1), and use its image in every longer cyclotomic algebra. In a word whose positions ℓ+1 onward are all i, repeat step 1.1 N times, applying ∂_{ℓ+N}…∂_{ℓ+1} to x_{ℓ+1}^N. The result is (−1)^N, so a tail of length N+1 is zero. This starts at the first tail position; it never assumes the last prefix color is i. [step 1.1, step 1.2, algebra]

1.4 Define inductively L_b so words of length b+L_b with at least L_b entries i are zero. For b=0 use the first-strand power and the all-i tail calculation. Given k=L_{b−1}, let ℓ=b−1+k and m=T_ℓ and set L_b=k+m−1. Such a word has length ℓ+m. If its first ℓ positions have at least k copies of i, their prefix is zero by induction, hence so is the word. Otherwise the first ℓ positions have at most k−1 copies; the required total k+m−1 forces all m remaining positions to be i, and step 1.3 kills it. A zero prefix remains zero after right concatenation because the cyclotomic ideal on the prefix maps into the larger cyclotomic ideal. For β, let b be the number of non-i entries in β. Once the total i multiplicity is ≥L_b, take the initial b+L_b positions; they contain at most b non-i positions and hence at least L_b copies of i. This zero prefix kills every word of β+kα_i. Therefore the algebra vanishes for all sufficiently large k. [step 1.3, construct, algebra] ∎

## Corrected generic mixed-corner supplier body

**Contract.** Same-order mixed corner decomposition and the opposite-end exact sequence above, for any graded R(β)-module. No cyclotomic quotient is needed here.

**Given:** the generic PBW theorem and KLR relations.

1.1 PBW and the coset decomposition S_{n+1}=⨿_{a=1}^{n+1}S_n s_n…s_a give the direct sum R(n+1)=⊕_{a=1}^{n+1}R(n,1)τ_n…τ_a. The identity term a=n+1 means R(n,1). There is also the right-module decomposition with τ_a…τ_n on the left. These sums are free over the block algebras with the necessary word idempotents; restricting to a fixed color gives finite projective block modules. Multiplication x⊗y↦xτ_n y is balanced over R(n−1), since τ_n commutes with its generators. Expand the first factor R(n) as ⊕_{a=1}^n τ_a…τ_{n−1} k^I[x_n]⊗R(n−1). Moving f(x_n) past τ_n changes its leading term to τ_n f(x_{n+1}), with correction τ_a…τ_{n−1}∂_n f entirely in R(n,1). Thus the induced map modulo R(n,1) takes this basis bijectively to the nonidentity cosets. It follows that

$$R(n)\otimes_{R(n-1)}R(n)\oplus R(n,1)\longrightarrow R(n+1),\quad (x\otimes y,z)\mapsto x\tau_n y+z$$

is a bimodule isomorphism. Restricting left/right terminal colors j,i gives E_iF_j=q^{−(α_i|α_j)}F_jE_i for i≠j and E_iF_i=q_i^{-2}F_iE_i⊕Id[t]; the degree of the inserted crossing is −(α_i|α_j). [given, algebra]

1.2 Multiplication R(n)⊗_{R_1(n−1)}R_1(n)→R(n+1) is injective: expand R_1(n) by the same cosets to get exactly ⊕_{a=2}^{n+1}R(n,1)τ_n…τ_a. Its cokernel is the remaining coset R(n,1)τ_n…τ_1. Taking its coefficient is a bimodule map B to R(n)[t], where the right algebra acts through ξ. Modulo the other cosets, the dot and crossing relations say x_a τ_n…τ_1=τ_n…τ_1 x_{a+1}, τ_a τ_n…τ_1=τ_n…τ_1 τ_{a+1}, and x_{n+1}τ_n…τ_1=τ_n…τ_1x_1. The error terms are shorter cosets. Thus B is left R(n)[x_{n+1}]- and right R_1(n)[x_1]-linear, both dots corresponding to t. The sequence is split as right R_1(n)-modules, so tensoring any M preserves exactness. On the (right-last i,left-first i) corner it becomes 0→Fbar_iE_iM→E_i Fbar_iM→q^{−(α_i|β)}M[t]→0. If the endpoint colors differ the full-transfer coset vanishes, giving E_i Fbar_j=Fbar_j E_i. The degree of τ_n…τ_1 on (i,ν) is −(α_i|β). [step 1.1, given, algebra] ∎

## Helper 2: actual comparison maps and right projectivity

**Contract.** K_0,K_1 are finite projective right A[t]-modules, the comparison map P has degree s, and 0→q^sK_1→K_0→D→0 is exact, where D=R^Λ(β+α_i)e(β,i). D is finite projective as a right A-module. The reflection anti-involution gives the corresponding left-projectivity assertion.

**Given:** the preceding helpers, PBW, and the anti-involution fixing the KLR generators (whose relation check descends through the first-strand ideal).

Set e_R=e(β,i), e_L=e(i,β), a(x_1)=Σ_ω x_1^{λ_{ω_1}}e(ω). All products below carry the appropriate endpoint idempotents. Explicitly

$$K_0=Se_R/Sa(x_1)R(\beta)e_R,\qquad K_1=Se_L/Sa(x_2)R_1(\beta)e_L.$$

The right A action on K_0 uses positions 1,…,n, and t=x_{n+1}; on K_1 it uses positions 2,…,n+1, and t=x_1. Both are genuine bimodules over (S,A[t]).

1.1 PBW cosets for the right-append block make Se_R a finite projective right R(β)[t]-module (each color-restricted coset is a shifted right idempotent summand); scalar extension gives K_0 finite projective over A[t]. The same block-coset argument on the opposite end gives this for K_1. Separately, the left-end coset decomposition gives

$$Sa(x_1)S=\sum_{a=0}^n Sa(x_1)\tau_1\cdots\tau_a.$$

To verify it, expand the right multiplier in the cosets for the block k^I[x_1]⊗R_1(n); its coefficients commute with a(x_1), while idempotents select the right cyclotomic power. Restricting e_R, every a<n term belongs to Sa(x_1)R(β)e_R; the only remaining term is a=n. Thus the kernel of K_0→D is the image of right multiplication by a(x_1)τ_1…τ_n on Se_L. [given, algebra]

1.2 Put c=a(x_1)τ_1…τ_n. For a=1,…,n, moving x_{a+1} through c gives cx_a plus terms (τ_{a+1}…τ_n)a(x_1)τ_1…τ_{a−1}e_{a,n+1}, all in Sa(x_1)R(β)e_R. Moving x_1 through c gives cx_{n+1} plus a sum of the same shorter cosets. For a<n, moving τ_{a+1} through c gives cτ_a plus

$$a(x_1)\tau_1\cdots\tau_{a-1}Q_{a,a+1,a+2}\tau_{a+2}\cdots\tau_n.$$

Expand the tail crossings by PBW; they commute with a(x_1) and the initial shorter braid and leave polynomials and τ_1,…,τ_{n−1} to its right, so this is again in the indicated quotient ideal. These generator identities prove right R(β)[t]-linearity. In particular a(x_2) on the source is sent to a(x_1) on the target and vanishes. Therefore

$$P:K_1\to K_0,\qquad u\mapsto u\,a(x_1)\tau_1\cdots\tau_n$$

is well defined, bilinear, and has image ker(K_0→D). Its degree is 2(α_i|Λ)−(α_i|β)=s. [step 1.1, given, algebra]

1.3 Define

$$g_a e(\omega)=\begin{cases}\tau_a e(\omega)&\omega_a\ne\omega_{a+1},\\[(x_{a+1}-x_a)-(x_{a+1}-x_a)^2\tau_a]e(\omega)&\omega_a=\omega_{a+1}.\end{cases}$$

The mixed relations give x_{s_a(b)}g_a=g_a x_b. They also give τ_a g_{a+1}g_a=g_{a+1}g_a τ_{a+1}: subtract the sides and move each of x_a,x_{a+1},x_{a+2} through them. The difference intertwines the transposition (a,a+2) on the polynomial variables, and its coefficient of the length-three PBW word τ_aτ_{a+1}τ_a cancels. Every remaining PBW permutation has length ≤2 and differs from (a,a+2). Choose a maximal-length nonzero coefficient in the difference; moving x_b through its PBW word gives, at that same length, the coefficient times the difference of two distinct variables for a suitable b, while mixed-relation correction terms have smaller length. The polynomial ring has no zero divisors, so this coefficient must vanish. Descending in length proves all coefficients vanish; PBW proves the identity. Thus right multiplication by g_n…g_1 intertwines both block actions and t. In particular it sends Sa(x_1)R(β)e_R into Sa(x_2)R_1(β)e_L. Hence

$$Q:K_0\to K_1,\qquad v\mapsto v\,g_n\cdots g_1$$

is well defined and bilinear. Its degree is −(α_i|β)+2δp, since there are p equal-color exchanges, each of degree δ instead of −δ; this is constant for the fixed β. Homogeneity of Q is not needed for its injectivity use. [given, algebra]

1.4 For ν=(ν_1,…,ν_n), set

$$A_\nu=x_1^{\lambda_i}\prod_{\nu_a\ne i}Q_{i,\nu_a}(x_1,x_{a+1}).$$

We prove c g_n…g_1e(i,ν)≡A_νe(i,ν) modulo Sa(x_2)R_1(β)e_L. For n=0 it is immediate. For n=1 and ν_1≠i it is the quadratic relation; for ν_1=i, use H=τ_1(x_2−x_1)−1, which exchanges x_1,x_2: a(x_1)τ_1g_1=a(x_1)(H+1)=H a(x_2)+a(x_1), and the first term is in the ideal. For induction, an unequal final ν_n gives τ_n g_n=Q_{i,ν_n}(x_n,x_{n+1}); moving that polynomial through g_{n−1}…g_1 changes x_n to x_1, and induction multiplies A_{ν'} by Q_{i,ν_n}(x_1,x_{n+1}). An equal final ν_n=i gives τ_n g_n=τ_n(x_{n+1}−x_n). If ν_{n−1}=j≠i, the braid relation replaces τ_{n−1}τ_nτ_{n−1} by τ_nτ_{n−1}τ_n−Q_{n−1,n,n+1}. After transporting through g_{n−2}…g_1, induction gives for the first term A_{ν''}Q_{j,i}(x_n,x_{n+1}) and for the second term

$$-A_{\nu''}[Q_{i,j}(x_{n+1},x_n)-Q_{i,j}(x_1,x_n)].$$

The first part cancels by Q symmetry, leaving A_{ν''}Q_{i,j}(x_1,x_n)=A_ν. If ν_{n−1}=i, substitute g_{n−1}=(x_n−x_{n−1})−(x_n−x_{n−1})^2τ_{n−1}, use the equal-color braid relation, and move the two symmetric factors (x_n−x_1)(x_{n+1}−x_1) through τ_n. Induction reduces the result to

$$A_{\nu'}[(x_{n+1}-x_1)\tau_n-\tau_n(x_{n+1}-x_1)\tau_n(x_n-x_1)]e(i,\nu).$$

Here τ_n(x_{n+1}−x_1)=(x_n−x_1)τ_n+1 and τ_n^2=0, so τ_n(x_{n+1}−x_1)τ_n=τ_n; the bracket is (x_{n+1}−x_1)τ_n−τ_n(x_n−x_1)=1. This leaves A_{ν'}=A_ν and finishes the induction. [step 1.3, given, algebra]

1.5 Step 1.4 says QP is right multiplication by

$$a(t)=\sum_{\nu\in I^\beta}t^{\lambda_i}\prod_{\nu_a\ne i}Q_{i,\nu_a}(t,x_a)e(\nu)\in A[t].$$

Its degree in t is m=λ_i−⟨h_i,β⟩+2p, with p the multiplicity of i in β, and its leading coefficient is the same unit ∏_{j≠i}t_{i,j;−a_{ij},0}^{β_j} on every word; all remaining monomials have smaller t degree. Multiplication by any such polynomial is injective on a free A[t]-module: a nonzero finite polynomial vector has nonzero leading coefficient after multiplying by the unit leading coefficient. It is therefore injective on a projective summand. Since K_1 is projective, QP and hence P are injective. We have the exact bimodule sequence 0→q^sK_1→K_0→D→0. [step 1.1, step 1.4, algebra]

1.6 By Helper 1 a central monic polynomial t^N annihilates D. The following elementary splitting argument therefore makes D projective over A. Given a projective A[t]-resolution 0→P_1→^jP_0→M→0 and central monic f annihilating M, multiplication f on P_0 factors as jh, and injectivity of j gives hj=f on P_1. Multiplication f is injective on P_r by the leading-coefficient argument, and P_r/fP_r is projective over A: it is a direct summand of copies of A[t]/(f), which is finite free over A by monic polynomial division. Thus 0→P_1→^fP_1→P_1/fP_1→0 splits over A; take p with pf=id. Then phj=id, so j splits over A, and M is projective. Applying this to K_1,K_0,D proves right projectivity; finite dimension makes it finite. This first proves ordinary projectivity. Graded projectivity follows by retaining the degree-zero component of a splitting for each surjective graded map: on every homogeneous input its degree-zero component is A-linear and still splits that map. The generator-fixing anti-involution gives e_RR^Λ(β+α_i) projective on the left. [step 1.5, given, algebra]

1.7 The bimodule D is right A-projective, so its comparison sequence remains exact on tensoring any A-module M: Tor_1^A(D,M)=0. Its left counterpart makes E preserve finite projectives; E itself is always exact because it is idempotent restriction. F is exact by right projectivity, and preserves all projectives because D is a left direct summand of the target algebra; finite projectives stay finite. This gives precisely 0→q^s Fbar_i M→F_iM→F_i^ΛM→0 in **Mod(R(β+α_i))**, with natural maps P and quotient. [step 1.6, algebra] ∎

For later use, P Q on K_0 is multiplication by

$$b(t)=\sum_\nu t^{\lambda_i}\prod_{\nu_a\ne i}Q_{\nu_a,i}(x_a,t)e(\nu).$$

Indeed P(QP)=P a=bP by bilinearity and the identical block polynomial under transport. Therefore PQ−b vanishes on im P and factors through D. Its image is annihilated by t^N while K_0 has injective t^N, hence PQ=b. This is a proof of the identity, not an additional imported theorem.
