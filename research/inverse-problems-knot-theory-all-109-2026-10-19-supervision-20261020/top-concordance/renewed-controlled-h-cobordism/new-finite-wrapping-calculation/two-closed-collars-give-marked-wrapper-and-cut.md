# Two actual closed collars give the marked wrapper and its cut

NEW finite prospective supplier/consumer unit. It reconstructs the explicit wrapping in Siebenmann1972 printed290–292; those primary pages were read directly, and the local image record is `../siebenmann-wrap-sources/`. It does NOT establish the two collars, TOP isotopy localization, or the productness of the cobordism. No accepted proof is reread.

## Exact input

Let c=(W;V0,V1) be an actual compact TOP cobordism of dimension m≥5 with product side. Each Vi is marked as V=B^s×T^n, s+n=m−1. Let g:W→B^s×I×T^n be an actual homotopy equivalence restricting to the given homeomorphism on the entire boundary. In particular the maps on fundamental groups from Vi to W, identified by g, are the specified isomorphisms to Z^n.

The prospective collar supplier must give ACTUAL closed product collars Ci, covering W, disjoint inner frontiers Σi, and αi:Vi×I→Ci with αi(x,i)=x. The extensions α0:V0×[0,1+ε] and α1:V1×[−ε,1] are also supplied, with the extended parts missing the opposite boundary. On the side the parameters are the given product with increasing interval maps η0 and η1; η0(0)=0, η0(1)=b, η1(0)=a, η1(1)=1, with0<a<b<1. The same product rule holds on the extensions. These are not arbitrary one-sided embedded products. The carrier owner confirms its prospective construction has precisely these extensions by restricting its open product collars at parameters strictly below1; adoption is pending.

Put W′=C0∩C1, W0=closure(W−C1), W1=closure(W−C0). Then C0=W0∪W′ and C1=W′∪W1, attached along Σ1 and Σ0 respectively. Each front is interior to the opposite collar. All these are actual compact triads with their inherited side corners.

## Explicit finite collar absorption and its boundary maps

Choose an increasing interval homeomorphism f1:[−ε,0]→[−ε,1], equal to identity near−ε. In the α1 collar send α1(y,t) to α1(y,f1(t)) for−ε≤t≤0, and be identity on the rest of W0. This gives E1:W0→W, with E1 fixed on V0 and E1(α1(y,0))=y∈V1. Injectivity and surjectivity follow directly from the two complementary pieces and the interval inverse.

Choose an increasing interval homeomorphism f0:[0,1+ε]→[1,1+ε], equal to identity near1+ε. In the α0 collar send α0(x,t) to α0(x,f0(t)) and be identity beyond that collar. This gives E0:W→W1, fixed on V1, with E0(x)=α0(x,1) for x∈V0. Let ψ=E0 E1:W0→W1. Its precise boundary maps are

ψ(x)=α0(x,1) on V0,   ψ(α1(y,0))=y on Σ1.

The side maps preserve the B^s-boundary/T^n labels and are increasing in the physical interval coordinate. Nothing says that E0 or E1 fixes a side parametrization pointwise; they identify the corresponding product triads. Their interval formulas prove the finite collar absorption without an h-cobordism or bundle theorem.

## The finite quotient wrapper

Form Mi=Ci/(αi(x,0)~αi(x,1))=Vi×S1. Let qi denote these quotient maps. Define h:M0→M1 by

h q0(z)=q1(z) for z∈W′,   h q0(z)=q1 ψ(z) for z∈W0.

At Σ1 the first value q1Σ1 equals q1V1, the value from ψ. At the seam V0~Σ0 the value q1ψ(V0) equals q1Σ0. Thus the definition descends and is continuous. The inverse is identity on q1W′ and ψ inverse on q1W1, with exactly the reverse seam agreements. Hence h is an actual homeomorphism.

Its boundary is id_(∂B^s×T^n)×φ. To verify the circle marking, let p:[0,a]→[b,1] be ψ's increasing side interval map. In source circle parameter t, a lift of φ is

Φ(t)=η1^−1 p η0(t) when η0(t)≤a,

Φ(t)=1+η1^−1 η0(t) when η0(t)≥a.

The two values agree at η0(t)=a, and Φ(1)=Φ(0)+1. Thus φ preserves orientation; the reversal of the α1 endpoint convention would have given the wrong marking. No graph statement about the inner fronts in the whole interior is used.

## Direct infinite cyclic lift and identification of the actual cut

The lift H:V0×R→V1×R is defined without assuming a prior lift theorem. For0≤t≤1 write z=α0(x,t). On the piece W0 set H(x,t)=α1^−1ψ(z), and on the piece W′ set H(x,t)=α1^−1(z)+(0,1), where the added1 is in the real interval coordinate only. At Σ1 the two values agree at height1. The endpoint t=1 value is the t=0 value plus1, since ψ(V0)=Σ0. Extend by H(x,t+j)=H(x,t)+(0,j), j∈Z. These closed-piece formulas are continuous and locally finite. The reverse pieces W1 and W′ give a continuous inverse, so H is a homeomorphism commuting with unit translation and lifting h. In particular it preserves the two real ends.

The lower cut H(V0×0) is precisely α1^−1(Σ0), with the V0 marking α0(x,1). It lies inside V1×(0,1), without any claim that it is a graph. Its positive side up to V1×1 is exactly α1^−1(W1). Therefore the cut cobordism

H(V0×[0,∞)) ∩ (V1×(−∞,1])

is ACTUALLY W1 in these coordinates. E0 identifies W with W1, preserving its incoming and outgoing markings as the displayed maps specify. The side is a product triad with the induced interval reparametrization. This proves the source's cut identification before any isotopy-to-identity or cut-invariance theorem is used.

## The full fundamental-group marking

The formula for H shows that h sends the old Z^n subgroup into that subgroup and induces degree+1 on the extra-circle quotient. On an old loop the map H|V0×0 is α1^−1α0(x,1), projected to V1. Applying g identifies its π1 map with identity: each αi collar retracts onto Vi, and g agrees with the given marking there. Since g induces an isomorphism on W's π1, this comparison is legitimate in the actual W. The abelian torus groups remove any conjugation ambiguity from a chosen basepoint path.

Thus in marked bases h_* has the form (u,j)↦(u+jv,j), v∈Z^n. If s≥1 choose the extra-circle generator on the nonempty boundary. The displayed boundary product has no old-torus component, so v=0. This includes s=1 even though the boundary has two components.

When s=0, correct the remaining v explicitly. A small product collar of Σ0 on its W′ side is supplied by α0, and compactness places a smaller closed collar T^n×[c,d] in int(W′), still missing Σ1 and Σ0. Define there

J(y,t)=(y−vχ(t),t),

where χ:[c,d]→[0,1] increases from0 to1 and is constant near the endpoints. Translation by the integer vector v is identity on T^n, so J agrees with identity near both collar boundaries and extends by identity outside. It is a homeomorphism with the opposite-translation inverse. The positively oriented extra-circle crosses this collar once, so J subtracts v from that generator while fixing each old torus generator. Consequently Jh induces identity on Z^(n+1). This is a mapping-class correction, not an isotopy-to-identity assertion about J.

The correction is supported strictly on the W′ side of Σ0 and is identity on W1 and a neighborhood of Σ0. Therefore the displayed initial cut and its W1 identification are unchanged. This supplies the exact s=0 adjustment mentioned on Siebenmann291 while retaining the invariant being studied.

## Scope and next dependency

The output is an actual marked compact wrapper h (or Jh), its periodic lift, and an actual initial cut triad identified with c. No compact-LC statement is needed for this finite quotient/collar calculation. The separately adopted finite standard-cover isotopy may now be applied to the marked wrapper. To turn that isotopy into a product of the covered c still requires the NEW exact compact-cut TOP localization supplier and the queued cut-invariance consumer. Neither those suppliers nor the original two closed collars are inferred here. Full relative g-boundary correction and a composite cover remain separate downstream finite operations.
