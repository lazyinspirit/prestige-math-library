# Correct middle-boundary weight and its complete relation cocycle

Isolated proposal; native78 is live. No canonical carrier or native history is edited. This supplies linear-algebra composition, not the still separate signature-defect/RT normalization theorem.

## Confirmed defect in the live definition

The live definition uses maps j0,j1,j2 into the glued manifold M=M2∘M1 and calls K0={x:j2x∈j1λ1} the reduction of the relation of M2. This is false. Let M1 be a solid torus from the empty surface to T², M2 the cylinder, and λ1 a longitude transverse to the meridian kernel. Inclusion j:H1(T²)→H1(solid torus) maps λ1 onto the whole one-dimensional target. Thus K0=j⁻¹(jλ1)=H1(T²), which is two-dimensional and not Lagrangian. Using maps into M2 instead fixes this particular error but does not fix the output-space correction: its three spaces lie in zero homology when the final boundary is empty, so that expression cannot record a general middle-boundary anomaly.

The correct sign convention extending the prescribed mapping-cylinder formula is the following. For M1:Σ0→Σ1 and M2:Σ1→Σ2, let A=Λ_M1⊂overline V0⊕V1 and B=Λ_M2⊂overline V1⊕V2. Put A(L)={y:∃x∈L,(x,y)∈A} and Bᵗ(L)={x:∃y∈L,(x,y)∈B}. The correction is

    m(M2,M1)=μ_V1(A(λ0), λ1, Bᵗ(λ2)),
    n(M2∘M1)=n2+n1+m(M2,M1).

Here μ is exactly the Wall-form convention of the native Maslov lemma: on L1∩(L2+L3), a+b+c=0, ψ(a,a')=ω(a,b'). Every expression is in the actual middle surface, using each individual bordism's inclusion relation. A proof that this is the RT signature convention is still required from the surgery construction; it is not assumed here.

## 1. Relation normal form and reductions

Let B⊂overline V⊕W be any finite-dimensional real Lagrangian relation. Set K={v:(v,0)∈B} and K'={w:(0,w)∈B}. These are isotropic. Orthogonal complementation shows (π_V B)⊥=K: x annihilates every first coordinate of B iff (x,0) annihilates B, hence lies in B because B=B⊥. Therefore π_V B=K⊥, and similarly π_W B=K'⊥. A pair (v,w)∈B defines a well-defined bijection φ:K⊥/K→K'⊥/K'. Changing w adds K', changing v adds K, and these are the entire kernels; both projections are onto. Isotropy of B gives ω_W(w,w')=ω_V(v,v'), so φ is symplectic.

For any Lagrangian L⊂V, define L_K=((L∩K⊥)+K)/K. It is Lagrangian in K⊥/K. Indeed its inverse image P=(L∩K⊥)+K is isotropic modulo K, and

    P⊥=(L+K)∩K⊥=(L∩K⊥)+K=P.

The last equality follows by writing x=l+k and observing that x,k∈K⊥ force l∈K⊥. Orthogonal complements here are taken in V; P contains K and lies in K⊥, so its image is equal to its orthogonal complement in the quotient. The normal form gives

    B(L)/K'=φ(L_K),
    Bᵗ(N)/K=φ⁻¹(N_K').

These formulas in particular prove that relation images and inverse images of Lagrangians are Lagrangian. They include noninjective relations and nontransverse Lagrangians.

## 2. Exact reduction of a Maslov triple

Suppose N0,N⊂V are Lagrangian and both contain an isotropic K. Then

    μ_V(L,N0,N)=μ_(K⊥/K)(L_K,N0/K,N/K).

Here is the full comparison of the Wall forms. Their numerator on the left is L∩(N0+N), contained in K⊥ because both latter spaces lie there. Quotient projection sends it onto L_K∩((N0/K)+(N/K)): an element represented by l+k with l∈L∩K⊥ that lies in the latter sum has l∈N0+N, since K⊂N0+N. The left denominator is (L∩N0)+(L∩N). Its image is precisely the denominator on the right: membership l+k∈N0 is equivalent to l∈N0, and similarly for N. The projection kernel L∩K is already contained in that denominator. Thus the Wall quotient spaces are isomorphic. If a+b+c=0 on the left, the projected equation holds on the right, and ω(a,b') descends to the quotient symplectic form because both entries are in K⊥. The isomorphism preserves the entire symmetric form, hence its signature. No transversality assumption or division is involved.

Cyclic invariance of μ follows either by the explicitly isometric cyclic Wall-quotient maps, or by the native lemma's proved cyclic sum-zero form and its sign translation. Thus the same reduction statement holds when any two of the three Lagrangians contain K.

## 3. The defect independent of the third Lagrangian

Choose a Lagrangian N0 containing K, by extending a finite isotropic basis to a symplectic basis. For arbitrary input Lagrangians L,P and any N containing K, the four-Lagrangian identity gives

    μ(L,P,N)-μ(L,P,N0)
      =μ(L,N0,N)-μ(P,N0,N).

Reduce the two terms on the right by §2 and use the four-Lagrangian identity in K⊥/K. It follows that

    μ_V(L,P,N)=μ_(K⊥/K)(L_K,P_K,N/K)+η_K(L,P),

where η_K(L,P)=μ_V(L,P,N0)−μ_(K⊥/K)(L_K,P_K,N0/K). The displayed derivation proves independence of N; the choice N0 is auxiliary and does not enter the conclusion below.

For the relation B of §1 and any output Lagrangian Q, apply this with N=Bᵗ(Q). The normal form transports its reduced form to W. On the other hand B(L),B(P) both contain K', so §2 applies to μ_W(B(L),B(P),Q) (cyclically if necessary). Consequently

    μ_V(L,P,Bᵗ(Q))−μ_W(B(L),B(P),Q)=η_K(L,P),

which is independent of Q. Subtract the identities for Q and R and apply the ordinary four-Lagrangian cocycle in W. This proves the exact relation identity

    μ_V(L,P,Bᵗ(Q))+μ_W(B(L),Q,R)
      =μ_W(B(P),Q,R)+μ_V(L,P,Bᵗ(R)).       (★)

This is the necessary general relation identity. The ordinary four-Lagrangian identity alone, without §1–§3, would not justify transporting arbitrary noninvertible bordism relations.

## 4. Bordism relations compose

For glued bordisms, Λ_(M2∘M1)=Λ_M2∘Λ_M1. One inclusion is immediate. For the other, Mayer–Vietoris gives

    H1(Σ1) → H1(M1)⊕H1(M2) → H1(M1∪M2)

with exactness at the middle term and first arrow y↦(j1y,−j1'y). If a class from Σ0 and a class from Σ2 become equal in the union, their difference in the middle group lies in that image. There is therefore y∈H1(Σ1) equating the Σ0 class to y inside M1 and y to the Σ2 class inside M2. These are exactly the two individual relation conditions. This argument applies to disconnected surfaces as well: no injectivity assertion at the H0 term is used. The signs agree with Λ_M={j_in x=j_out y}. Boundary-kernel Lagrangianity supplies the premise that each relation is Lagrangian; no global map into the union replaces an individual relation.

## 5. Associativity, units and mapping cylinders

For three bordisms with relations A:V0→V1, B:V1→V2, C:V2→V3, put L=A(λ0), P=λ1, Q=λ2 and R=Cᵗ(λ3) in (★). By §4, B(L)=(BA)(λ0) and Bᵗ(R)=(CB)ᵗ(λ3). Thus (★) says exactly

    m(B,A)+m(C,BA)=m(C,B)+m(CB,A).

The sum of the three original integer weights is the same in either bracketing. Hence the corrected composition is associative. Identity cylinders have diagonal relation, so their correction is μ(L,L,L)=0, including both one-sided compositions. Direct sums of surface homology and relation data make the Wall forms orthogonal sums; signatures and corrections add. The empty surface has zero symplectic space and no correction. These prove the weight part of the symmetric monoidal bordism category; geometric collar gluing still has its usual diffeomorphism identifications.

If the relations are graphs of f1 and f2, the correction is μ(f1λ0,λ1,f2⁻¹λ2). Applying the symplectic isomorphism f2 to all three arguments gives exactly μ(f2f1λ0,f2λ1,λ2), the prescribed Walker mapping-cylinder formula, with no sign reversal.

## 6. Surgical correction inside the existing Maslov proof

Native Maslov lemma step3.1 states an antiderivative choice hatw1=0,hatw2=w1,hatw3=w1+w2 that does not satisfy its preceding definition wi=hatwi−hatw(i−1). The claimed resulting form is nevertheless correct: the already proved partial-sum formula gives q(v,w)=ω(v2,w1)+ω(v3,w1)+ω(v3,w2)=ω(v3,w2), because v2+v3=−v1 and v1,w1∈L1. Replacing only that erroneous choice by this calculation preserves the statement and proves q=−ψ. No change to the four-Lagrangian theorem is needed.

## Reading and limits

This proposal was constructed after full reading of the actual native Maslov lemma and weighted-bordism definition, plus the full controlling PA47/48 construction. It is a complete local finite-dimensional proof using the actual Wall-form convention; it does not claim independent reading of a full external Cerf or Wall nonadditivity proof. The external surgery normalization/signature theorem remains a separate substantial obligation. Root review is owed before canonical integration after genuine78 drain.
