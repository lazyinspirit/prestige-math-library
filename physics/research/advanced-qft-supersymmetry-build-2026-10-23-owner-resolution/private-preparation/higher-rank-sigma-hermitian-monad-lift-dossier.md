# Higher-rank sigma-Hermitian monad lift and doubling

Restored from retained task history after the temporary directory was cleared. These are newly written research-only bytes; use the fresh hash in this directory, not the previous /tmp hash. This is conditional preparation, not the batch69 item, proof acceptance, or readiness. No public item, manifest, contract, native state, or authority record is changed.

## Hypotheses and analytic scalar inputs

On X=P³(C), fix the actual coordinate involution j(z)=(-bar(lambda2),bar(lambda1),-bar(mu2),bar(mu1)), so j is antilinear and j²=-1; sigma([z])=[jz]. A linear bundle monad is

A=U⊗O(-1) --a--> B=S⊗O --b--> C=U′⊗O(1),

with ba=0, constant-rank end maps, and locally free middle cohomology F. Write K=ker b. Then 0→K→B→C→0 and 0→A→K→F→0 are locally split bundle sequences. If injectivity is initially sheaf-theoretic, local freeness of F and surjectivity of b give these splittings and constant rank.

Assume F is trivial on every real line and has a nondegenerate holomorphic sigma-Hermitian pairing, positive on each real-line section space, together with its unitary framing at infinity. These are the approved normal-form theorem's hypotheses; no Ward theorem is used to construct them here. Let E^d=bar(E)* be the conjugate dual; choose constant coordinates when taking adjoints. The Ward convention has its first slot linear: b_F(u,v)=v†H u. Its conjugate convention u†Hv has identical positivity and orthogonality.

The future analytic67 theorem must actually prove H⁰(P^r,O)=C and H^q(P^r,O)=0 for q>0, 0≤r≤3. The exact analytic hyperplane sequence

0→O_{P^r}(-1)→O_{P^r}→i_*O_{P^{r-1}}→0

then gives O(-1) acyclic for 1≤r≤3: on H⁰ the map C→C is the identity. Exactness is the local holomorphic principal-coordinate ideal sequence. For r=2,3, the further sequence

0→O_{P^r}(-2)→O_{P^r}(-1)→i_*O_{P^{r-1}}(-1)→0

gives O(-2) acyclic. In particular H⁰,H¹,H²(P³,O(-2)) vanish. Do not confuse this with P¹: the analytic Euler sequence 0→O(-2)→O(-1)²→O→0 on P¹ instead gives H⁰O(-2)=0 and H¹O(-2)=C. These are analytic derivations from67, not silent uses of algebraic cohomology.

## 1. Unique actual chain lifting in arbitrary rank

Let M′ be another such monad, with A′,B′,C′,K′,F′, and let f:F→F′ be holomorphic.

First lift K→F→F′ through K′→F′. The obstruction is Ext¹(K,A′)=H¹(K*⊗A′). This can be realized directly by local splittings: differences of local lifts are a Cech1 cocycle in Hom(K,A′). Dualize 0→K→B→C→0 and tensor by A′:

0→C*⊗A′→B*⊗A′→K*⊗A′→0.

The first two terms are sums of O(-2),O(-1). Their long exact sequence gives H⁰(K*⊗A′)=0 from H⁰O(-1)=H¹O(-2)=0, and H¹(K*⊗A′)=0 from H¹O(-1)=H²O(-2)=0. The lift phi:K→K′ therefore exists and is unique.

Extend K→K′→B′ uniquely to g0:B→B′. The obstruction Ext¹(C,B′)=H¹(C*⊗B′) and ambiguity Hom(C,B′)=H⁰(C*⊗B′) are both zero by O(-1) acyclicity. The restriction to A lands in A′, because its image in F′ is zero, and defines a unique g_-:A→A′. The map b′g0 kills K and factors uniquely through C, giving g_+:C→C′. This is a chain lift of f. All three matrices are constant because their same-degree Hom bundles are sums of O.

Every other chain lift agrees first on K, then on B, then on A and C by the preceding uniqueness and end exactness. Identities and compositions therefore lift exactly. If f is invertible, lift f^-1: the chain compositions are the unique identity lifts, so the lift is a chain isomorphism. No chain homotopy survives: its components B→A′ and C→B′ are sections of O(-1), and the possible degree-2 component C→A′ is a section of O(-2), all zero.

Root independently checked this exact obstruction/extension derivation before the temporary cache was lost. That check is reported as task history, not a native approval.

## 2. Sigma-dual signs and the Hermitian lift

For a homogeneous linear matrix P put P#(z)=P(jz)†. This is holomorphic linear, reverses products, and (P#)#=-P. For constant matrices the operation is adjoint and squares to identity.

Use the explicitly signed sigma-dual monad

D M: C^d⊗O(-1) --(-b#)--> B^d⊗O --a#--> A^d⊗O(1).

Its middle cohomology at z is ker a(jz)†/im b(jz)†, the conjugate dual of F_sigma(z) with its natural evaluation. The first differential's minus does not affect its image. On constant chain maps D reverses the triple and adjoints the matrices. Directly D²(a,b)=(-(a#)#,(-b#)#)=(a,b). Thus D² is literally identity with these identifications. The negative squares of the chosen j lifts at O(±1) cancel the signed-complex duality signs; an unsigned reverse complex without compensating identifications would be wrong.

The given pairing is an isomorphism h_F:F→DF. Section1 gives a unique chain isomorphism h=(p,H,r):M→DM. Its equations are

H a=-b# p,     r b=a# H.

Hermitian symmetry on F says h_F=D h_F after bidual identification. Both h and Dh lift this same map; uniqueness gives p=r† and H=H†. All are invertible, hence H is a nondegenerate Hermitian middle form, with no positivity assumption on S.

Choose coordinates/Hermitian standard space on U and identify U′ with U^d by r. Change the target coordinates by r, so beta=rb, alpha=a. The transformed lift has end matrices identity and middle matrix H. Therefore

beta(z)=alpha(jz)†H,     beta(jz)†=-H alpha(z).

The second minus is forced by j²=-1. For u∈ker beta(z), v∈ker beta(jz), the pairing v†Hu descends to the quotient: shifts by alpha(z) and alpha(jz) pair to zero by these identities. The minus multiplies a zero and does not negate the pairing. Its positive real-line section pairing is the stipulated one because the chain map lifts the original pairing, rather than just an unrelated kernel relation.

This proves existence and uniqueness of the higher-rank Hermitian lift, conditional on the analytic scalar inputs. It does not yet prove H positive or extract raw B1,B2,I,J.

## 3. Real-line Gram nondegeneracy in every rank

Fix z and the real line span(z,jz). Set A=alpha(z), B=alpha(jz). The line maps are

alpha(a,b)=aA+bB,     beta(a,b)=aB†H-bA†H.

The coefficients of beta alpha=0 give A†HB=B†HA=0 and A†HA=B†HB=:G.

If Gv=0 for v≠0, then Av≠0 by injectivity of A. The constant Av is killed by beta(a,b) on the entire line. Its class is a global holomorphic section of the trivial F|P¹, vanishing at (1,0), because Av is in im alpha there. Thus that class vanishes on the whole line. The restricted exact sequence 0→U⊗O(-1)→ker beta→F|P¹→0 puts this constant Av in the image of H⁰(U⊗O(-1))=0, a contradiction. Hence G is invertible. Root independently checked this exact argument in the prior task history.

It follows that im A and im B are nondegenerate H-orthogonal subspaces with zero intersection, and

S=im A ⊕ im B ⊕ E_z,     E_z=ker A†H ∩ ker B†H.

Using A,B as coordinates and G^-1 on the target, the first two summands give copies of the exact Euler complex O(-1)→O²→O(1). Thus F|P¹ is canonically the constant E_z, and its section pairing is exactly H|E_z, positive by hypothesis. This does not use a rank-two sign argument.

## 4. Intrinsic flat split

The companion flat-splitting dossier proves, from the actual lift and analytic scalar H⁰/H¹O(-1), that

H⁰F=L=intersection_i ker beta_i=M^perp,     M=sum_i im alpha_i.

Restriction L→H⁰(F|ell) is injective: a constant lift restricting to zero comes from H⁰O_ell(-1)=0. Hence L is positive definite and S=L⊕M orthogonally, with M nondegenerate. The monad and pairing split F=(L⊗O)⊕F_M, retaining the full isometric framing subspace. The reduced F_M is positive and trivial on each real line. At k=0, M=0 and positivity is immediate on L=S.

For the following argument replace S,F by M,F_M. Then alpha's coefficient images span S and intersection_i ker beta_i=0. Surjectivity onto the original full middle space is never presumed.

## 5. Explicit symplectic doubling and Verdier6.11 interface

Put S_d=S⊕S*, R=U⊕(U′)*, and

a_d(z)=diag(alpha(z),beta(z)^t):R→S_d,

omega((s,phi),(t,psi))=phi^t t-psi^t s.

The image of a_d(z) is omega-isotropic because beta alpha=0. Together with target differential diag(beta,-alpha^t), up to constant reordering, this is the symplectic double with bundle F⊕F*. Define

J(s,phi)=(H^-1 bar(phi),-H^t bar(s)),     c(u,v)=(bar(v),bar(u)).

Direct multiplication using H†=H gives J²=-1, c²=1 and omega(Jx,Jy)=bar(omega(x,y)). The induced first-slot-linear Hermitian form is

h_d(x,y)=omega(x,Jy)=t†Hs+phi^t H^-1 bar(psi),

with matrix diag(H,H^-t). The normalized reality gives J a_d(z)=a_d(jz)c: use beta(z)†=H alpha(jz) and beta(jz)^t=-H^t bar(alpha(z)) for the two block rows. These are proposed explicit finite derivations for independent native-author review, not a reported native acceptance.

Define Phi:R⊗C⁴→S_d by Phi(r⊗z)=a_d(z)r and H_Phi=Phi* h_d. Then the exact Verdier hypotheses follow as below.

1. Reality: H_Phi((c⊗j)x,(c⊗j)y)=H_Phi(y,x), since Phi intertwines c⊗j and J.
2. Orthogonality: R_z=R⊗z is orthogonal to R_jz. Indeed h_d(a_d(z)u,a_d(jz)v)=-omega(a_d(z)u,a_d(z)c v)=0 by isotropy.
3. Nondegeneracy on R_z: Section3 gives invertible G; the Gram matrix on im a_d(z) is diag(G,G^t). Thus the restrictions are nondegenerate in arbitrary rank.
4. Positive complement: the target orthogonal complement of im a_d(z)⊕im a_d(jz) is the section space of F⊕F* on that line. Section3 identifies its forms with the given positive form and its inverse dual form. Thus h_d is positive there. The H_Phi-orthogonal complement of R_z⊕R_jz is its inverse image and is positive semidefinite, with ker Phi allowed. This supplies Verdier6.11(c′) directly, avoiding the surrounding rank-two Lemma6.10(c).
5. Surjectivity AFTER the flat split: alpha coefficient images span S. Also beta_i^t images span S*, because their annihilator is intersection ker beta_i=0. The independent two blocks of R therefore make Phi onto S_d.

Once Verdier6.11 itself has an actual internal proof, H_Phi>=0 and surjectivity imply h_d>=0. Nondegeneracy makes h_d positive definite, so H is positive on S⊕0. Reattach the positive flat L from Section4.

This isolates a finite-matrix prerequisite, not a new Ward dependency. Native authors must check the doubling signs and reproduce Verdier's actual matrix/Laplacian/Stokes proof; the source citation is not itself their proof.

## 6. Remaining full normal-form obligations

Still separate from the lift and reduction above: actual67 proof; internal Verdier6.11 proof and asymptotic hypotheses; extraction/normalization of all lambda/mu coefficients with the full framing at infinity; exact residual simultaneous U(k) classification and inverse extraction; moment-map coefficient identities and stable/costable regularity; compact rotation chain factors (t1t2)^-1,diag(t2^-1,t1^-1,h),1 with framing weights e_a^-1; and naturality for the exact first-order locally-free/base-change range, including nilpotents. Differentiating an orbit-set bijection does not establish that family assertion. Preserve N≥2 in69, k0 and all flat summands.

## Sources and actual reading limits

The PDFs below were actually recovered and read as described before /tmp was cleared. They are now absent. URLs and expected SHA256 hashes are PREVIOUSLY OBSERVED, not fresh byte verification.

- Barth–Hulek, Monads and Moduli of Vector Bundles, ManuscriptaMath25(1978)323–347. URL https://gdz.sub.uni-goettingen.de/download/pdf/PPN365956996_0025/LOG_0021.pdf ; expected SHA256 0e2ba7c00d950774c1dd60b3a01b1246a16046f456540a750e8ad79b056cba25. Visual reading323–325,329–335,338–341,344,347. §3 Props3–4 give lifting with Hom homotopy ambiguities; §4 Props5–6 treat bilinear orthogonal/symplectic duality, not a ready-made positive sigma-Hermitian higher-rank theorem. Section1 here reconstructs the needed analytic lifting argument.
- J.-L.Verdier, ExposéVII §6.5–6.18, Astérisque71–72(1980), printed123–130, visually read; complete volume recovered but not all read. URL https://numdam.org/item/AST_1980__71-72__1_0.pdf ; expected SHA256 e76f7f10e234f186178712b952f84bda1f62a0a6c1949d4d1f3debd369fe0df2. Proposition6.11/proof6.13–6.18 printed126–130 are arbitrary-auxiliary-dimension positivity; the surrounding instanton theorem is rank2. Native reproduction of the finite matrix proof remains required.
- Exact raw signs were checked read-only against old60 lem-qftx-raw-adhm-real-twistor-block.md in the previous task. Public bytes remain untouched by this restoration.
