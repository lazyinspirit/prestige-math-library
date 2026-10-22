# Displayed one-sided almost-sphere collapse model

New independent part of the SELECTED Cantrell1963 route. The detailed source maps are Cantrell, Transactions108(1963),186–187, and the improved arc input is described in Bulletin69(1963),717. The model below writes the annular collapse explicitly instead of assuming a homeomorphism extends across a wild point. The exceptional-arc standardization and the punctured exterior collar are literal inputs; they are not claimed supplied by a compact-arc theorem alone.

## Exact input

Let Σ⊂S⁵ be a parametrized4-sphere with complementary domains H,G. Supply a parametrized5-ball ClH with boundary Σ. Supply an ACTUAL exterior punctured collar

    c_G:(Σ\{p})×[0,1]→ClG\{p},       c_G(x,0)=x,

open on its half-open part. Assume Σ is locally flat away from p. The output is an actual map k from a parametrized5-ball K onto ClG, with exactly one non-singleton fiber: an arc L' starting on ∂K, otherwise in intK, locally flat except possibly at its interior endpoint p, and with a supplied actual boundary-normal germ at its starting endpoint. If THAT arc is actually standardized in K with that germ, the displayed quotient proves ClG is a ball. No arbitrary almost-flat-sphere recognition is assumed.

## 1. A single explicit collapse in a standard source ball

Use C=D⁴×[0,2], a standard convex5-ball with corners, and let

    F(u,t)=(u,δ(u)t)                         for 0≤t≤1,
    F(u,t)=(u,δ(u)+(2−δ(u))(t−1))             for 1≤t≤2,

where δ:D⁴→[0,1] is continuous, δ(0)=0, δ(u)>0 for u≠0, and δ=1 near ∂D⁴. This is onto C, fixes ∂C pointwise and is a homeomorphism off L={0}×[0,1], its only non-singleton point inverse. These assertions follow from the strictly increasing two-piece vertical fiber maps at u≠0 and the displayed collapse at u=0.

Choose 0<R<1 and 0<ε<1/4, and put B=D⁴_R×[1−ε,1+ε], strictly inside C. Its image A'=F(B) is an ACTUAL5-ball, not a recognition conclusion: if ℓ(u)=(1−ε)δ(u), then

    A'={|u|≤R, ℓ(u)≤t≤ℓ(u)+2ε}.

The ambient vertical homeomorphism (u,t)↦(u,t−ℓ(u)) identifies it with D⁴_R×[0,2ε]. Its only intersection with ∂C is o=(0,0). Thus the picture has the same two tangent source balls as Cantrell's round model, but both balls and the collapse have displayed parameters.

The remaining segment L₀=L\intB={0}×[0,1−ε] joins ∂B to o∈∂C. The restriction F:C\intB→C\intA' has exactly L₀ as its non-singleton fiber and fixes the outer boundary.

## 2. The actual cusped annulus parameter

Both C and B are convex and contain b=(0,1) in their interiors. For θ∈S⁴ let ρ_B(θ),ρ_C(θ) be their positive radial boundary distances from b. These are continuous, with ρ_B<ρ_C. The map

    (θ,s)↦b+((1−s)ρ_B(θ)+sρ_C(θ))θ

is a homeomorphism S⁴×[0,1]→C\intB. Under F the unique exceptional fiber is the full interval {θ₀}×[0,1], θ₀=−e_t. Therefore F gives an ACTUAL homeomorphism

    (S⁴×[0,1])/({θ₀}×[0,1] collapsed) ≅ C\intA'.

This quotient assertion follows from the proved point fibers and compact-to-Hausdorff topology. It is not an annulus theorem. Moreover F|∂B is a homeomorphism onto ∂A': the collapsed segment meets ∂B in only its single lower endpoint. Use this map to specify the boundary parameter of A'. A ball parameter with that boundary parameter is obtained from the displayed cylinder parameter of A' by radial Alexander extension of their boundary comparison.

## 3. Embed the source ball using the supplied two sides

Let φ:A'→ClH be a ball parameter whose boundary sends F(b+ρ_B(θ)θ) to the prescribed point x_θ∈Σ and sends θ₀ to p. Such a parameter is obtained from the given ClH ball parameter and the preceding actual A' boundary parameter by Alexander extension.

Choose a positive continuous η(θ)≤1 on S⁴\{θ₀} such that

    d(c_G(x_θ,sη(θ)),x_θ)≤d(x_θ,p)        for 0≤s≤1,

for a fixed metric on S⁵. Existence is by continuity on compact annular pieces of S⁴\{θ₀}, finite minima there, and a positive continuous minorant. The bound ensures uniform approach to p when θ→θ₀.

Define f on A' by φ, and on the cusped annulus by

    f(F(b+((1−s)ρ_B(θ)+sρ_C(θ))θ))
       =c_G(x_θ,sη(θ)),                  θ≠θ₀,
    f(o)=p.

At s=0 this agrees with φ. At θ₀ the continuity estimate proves the extension, from both the collar and the ball. Injectivity follows from the actual collar embedding and the disjointness of the two complementary side interiors. Hence f:C→S⁵ is an embedding by compactness. It is an ambient chart on intC by invariance of domain, so f(B) is a locally flat5-ball strictly inside S⁵. Its boundary has the ACTUAL collar obtained from the source B coordinate.

## 4. The quotient onto the OTHER side

Set K=S⁵\int f(B). The accepted Brown bicollared-sphere contract gives an actual ball parameter of K; its supplied boundary collar can be retained by truncating that actual collar, applying Brown to its inner parallel sphere, matching the boundary parameter radially, and pasting back the collar.

On f(C\intB) define k=f F f⁻¹, and on S⁵\int f(C) define k=id. These definitions agree on f(∂C), because F fixes ∂C. They therefore paste to a continuous map

    k:K→S⁵\int f(A')=ClG.

It is onto. Its only non-singleton fiber is L'=f(L₀), sent to p=f(o). It is a homeomorphism off that arc, as can be checked in the two actual chart pieces using the explicit inverse fiber maps of F. The arc L' starts on ∂K at f(0,1−ε), and all its other points lie in intK, including p: o is outside B and f(B) is disjoint from p. It is locally flat except possibly at p, because its non-endpoint source points lie in intC where f is an ambient chart. At its starting point it is exactly a normal coordinate line of ∂B in that same chart, giving the required actual boundary-normal germ.

If the selected exceptional-endpoint arc operation supplies an actual homeomorphism of K, relative a smaller starting germ, taking L' to the standard boundary-attached straight arc, then `almost-sphere-cap-assembly.md` section1 gives K/L' an actual ball parameter by its explicit fiber collapse. Since k has exactly that fiber, its quotient factor K/L'→ClG is a continuous bijection from a compact space to a Hausdorff space, hence a homeomorphism. This proves the other-side ball conclusion AT THE STATED ARC INPUT.

## Scope still owed

A one-sided collar on Σ gives the ClH ball parameter by finite compact-boundary collar patching and Brown on an inner parallel sphere. The exterior punctured collar can come from the selected Lacher string-neighborhood construction or a separately proved locally finite collar patching operation; it is not an automatic consequence of the narrower existing compact-M collar Statement. The exceptional endpoint is exactly the one addressed by Cantrell–Edwards after locally polyhedralizing its puncture. Neither omitted interface is silently consumed here. The subsequent Cantrell chamber construction still has to remove the one-sided-collar hypothesis in the full almost-sphere theorem.
