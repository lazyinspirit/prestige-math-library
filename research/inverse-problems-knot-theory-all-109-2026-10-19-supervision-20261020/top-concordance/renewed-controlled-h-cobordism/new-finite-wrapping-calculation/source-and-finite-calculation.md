# Finite wrapping, standard covers, and boundary marking

NEW prospective consumer, not an adoption or whole E2 conclusion. Actual primary reading: Siebenmann, *Approximating cellular maps by homeomorphisms*, Topology11 (1972), printed289–292 and bibliography294, read directly in the page images. Durable local images are `../siebenmann-wrap-sources/siebenmann-pdf-19.png` through `22.png`, and24. Page291 supplies wrapping and the cut-cobordism invariant; page292 supplies the finite-cover/Alexander argument. Its footnote explicitly warns that this two-step proof earns a sufficiently divisible composite cover d=d1d2, not automatically every sufficiently large integer.

## Precise prospective supplier and boundary data

Put s=k−1, V=B^s×T^n, and m=s+n+1≥5. The input is an ACTUAL compact TOP triad c=(W;V0,V1), with a specified product side, identifications Vi=V, and a homotopy equivalence g:W→B^s×I×T^n whose restriction to the entire boundary is the specified homeomorphism. In addition one must supply ACTUAL closed collars Ci of Vi, C0∪C1=W, with inner frontiers disjoint, and parametrizations αi:Vi×I→Ci satisfying αi(x,i)=x. On the side these parametrizations are the given product with actual interval embeddings. Their existence is owned by the carrier's invertibility construction and is NOT inferred here from two arbitrary open sets. The downstream selected consumer is recorded by its owner in `../../renewed-cellular-approximation/selected-eprime-finite-diff-consumer.md`; it is not independently reviewed here.

Only declared compact-local-contractibility interfaces are used below: dimensions4/5 from `../../renewed-compact-product-local-contractibility/construction.md`, and each fixed finite dimension≥6 from `../../renewed-higher-compact-product-local-contractibility/construction.md`, with their root adoption metadata. They provide a boundary-fixed isotopy of a sufficiently small self-homeomorphism of the WHOLE compact B^a×T^b to identity. No accepted proof is being revalidated. All tori below have period1; a fixed coordinate rescaling transfers the accepted period8 convention.

## Wrapping from the given two closed collars

Let Σi be the inner frontier of Ci, W′=C0∩C1, W0=closure(W−C1), and W1=closure(W−C0). Thus C0=W0∪W′ and C1=W′∪W1, with the specified collar interfaces. Adding/removing a finite product collar gives homeomorphisms W0→W→W1. Their composition ψ:W0→W1 sends V0 to Σ0 and Σ1 to V1; the collar parameters can be chosen in the given side-product coordinates. This is finite collar absorption, not an assertion that W itself is a product.

Identify both ends of each Ci using αi and form Ci/~=Vi×S1. Define h:V0×S1→V1×S1 by identity on the common W′ and ψ on W0. At Σ1, the target identification Σ1~V1 makes the two definitions agree; at Σ0 the domain identification V0~Σ0 does likewise. The same construction with ψ inverse is the inverse, so this is a homeomorphism. On the side it is id_(∂B^s×T^n)×φ for an orientation-preserving circle homeomorphism φ. The opposite endpoint convention α1(x,1)=x is essential to this orientation assertion.

The old T^n generators are read on the common overlap and agree with the given g-marking. The extra circle direction has degree+1. If s≥1 the side product determines its old-torus component as well. If s=0, any remaining integer shear of the extra circle into T^n can be removed by a twist in a small product collar of Σ0 lying in W′: (y,t)↦(y+aχ(t),t), with χ=0 and1 at the two collar endpoints and a∈Z^n. These endpoint translations are identical on the torus, so extension by identity is a homeomorphism. It changes only the required extra-circle shear. This makes h induce the identity on the marked Z^(n+1), rather than merely preserving the abstract group.

The infinite cyclic lift H:V×R→V×R in the extra-circle direction is end-preserving. A cut just after H(V×0), ending at the next horizontal seam, is W1 with product collars. Since removing C0 identifies W1 with W as a triad, this cut represents c. This is the geometric marking that must be retained under later T^n covers.

## A fully finite standard-cover isotopy calculation

Here is the finite calculation independently of any cut-invariance assertion. Let h be a self-homeomorphism of M=B^s×T^q, q=n+1, inducing identity on π1 and having the stated product boundary. Normalize that boundary circle homeomorphism by its explicit circle isotopy: for an increasing lift Φ with Φ(t+1)=Φ(t)+1, (1−u)Φ(t)+ut is increasing and defines the isotopy to identity. Composing h with the corresponding product makes its boundary pointwise fixed. This operation is an isotopy, not a boundary-fixed isotopy of the original nonidentity boundary map.

Choose an equivariant lift

h̃(x,z)=(F(x,z),z+A(x,z)),   A(x,z+a)=A(x,z),   F(x,z+a)=F(x,z),

for a∈Z^q. Compactness bounds ||A|| by C. For a chosen integer d the standard d-cover has the lift

h_d(x,[z])=(F(x,dz),[z+A(x,dz)/d]).

Its torus displacement is at most C/d. At a boundary component A is a constant integral vector, because h fixes the boundary. For s≥2 the boundary is connected and the lift can be chosen with that constant zero. For s=1 there may be two constants b−,b+; do not silently assume they agree. Choose the affine interpolation b(x) between them and compose with the actual shear

S_u(x,[z])=(x,[z−u b(x)/d]).

This is an isotopy of homeomorphisms with inverse obtained by reversing the translation. It makes both boundary lifts pointwise fixed. Its torus movement is bounded by max(||b−||,||b+||)/d. This intermediate boundary rotation need not preserve an externally prescribed side parametrization; only the later marking adjustment claims that conclusion. For s=0 there is no boundary step.

Call the normalized boundary-fixed map f_d. For 0<ρ≤r≤1 define f_(d,r) to be identity outside ||x||≤r and, inside, define it by conjugating f_d with x↦x/r. In coordinates its ball component is rF_d(x/r,z), and its torus component is the torus component of f_d(x/r,z). The two formulas agree on ||x||=r because f_d fixes the boundary. The same formulas with f_d inverse give a continuous inverse; varying r from1 toρ gives an actual isotopy. No assertion at r=0 is needed. At r=ρ the ball displacement is≤2ρ and torus displacement remains≤(C+max||b±||)/d. Thus choose ρ first and d second to enter the accepted WHOLE-compact-product local-contractibility neighborhood. Apply its boundary-fixed isotopy to identity. When s=0, choose d directly. This proves the required isotopy for one chosen large finite d, with its actual lift and the stated boundary normalization. It uses no smoothing, bundle theorem, or Whitney disk.

Covering all q=n+1 circle coordinates in h corresponds, on its extra-circle infinite cyclic lift, to covering the old T^n coordinates and rescaling the R coordinate. The R rescaling does not stack d copies of c. Consequently the cut marking is the standard T^n-cover of c, provided cut-class invariance under the isotopy is justified.

## First exact remaining operation: cut invariant under TOP isotopy

For an end-preserving H:V×R→V×R, choose λ,μ with H(V×(−∞,λ]) inside V×(−∞,μ). Its cut cobordism is the region between H(V×λ) and V×μ. Changing λ or μ adds/removes explicit product collars. Siebenmann291 then asserts invariance under an ambient isotopy and explicitly invokes TOP isotopy extension [19] to localize that isotopy near the lower cut while fixing a sufficiently high cut. The original ambient isotopy is not compactly supported in V×R merely because it lifts a compact isotopy.

The existing canonical isotopy-extension Statements located in the repository are smooth, and cannot be applied to this TOP hypersurface isotopy. An exact retained TOP local isotopy-extension interface has been requested from root. Until that interface is supplied, this note does NOT claim the transition “h_d isotopic identity, hence the covered c is a product.” The finite covering/compression calculation above remains a genuine bounded unit; a smooth extension substitute, generic nonproper bundle theorem, or parametric CE theorem is not used.

## Boundary marking after a product has actually been earned

This paragraph is conditional on an ACTUAL product triad, not on the unproved cut-invariance step. A product homeomorphism P:W_d→B^s×I×T^n can be made equal to g_d on bottom plus side by extending the induced homeomorphism of that standard boundary disk×torus. A fixed standard homeomorphism of the ball pair (B^(s+1),bottom-plus-side) to (B^s×I,B^s×0) realizes the extension as the boundary-disk homeomorphism times id_I. This only matches that boundary disk, not the entire boundary at once.

The remaining top discrepancy θ=P_top g_top^−1 is fixed on ∂B^s×T^n and homotopic there to identity: bottom-plus-side is a deformation retract of the product triad after the standard ball-pair change, so P and g are homotopic relative that set, and projection to the top gives the claimed homotopy of θ. Take a SECOND standard T^n-cover of degree d2. The relative homotopy ensures all boundary lift constants of θ are zero, including s=1. Apply the same finite covering/compression calculation and accepted compact LC on B^s×T^n, dimension m−1≥4, obtaining an isotopy θ_t to identity fixed on the boundary. Its inverse path, interpolated in the outgoing product collar, adjusts P to agree with g on the entire boundary. The composite standard degree is d1d2; no assertion about all large integers follows.

Finally, after full boundary agreement, the two maps are homotopic relative boundary by straight interpolation of the ball coordinates and torus lifts with identical boundary values. If s≥1 the entire boundary is connected, so boundary lift discrepancies are one constant, normalized to zero. If s=0, the two ends can differ by an integer vector a; compose P with the explicit boundary-fixed twist (t,y)↦(t,y+a t) to remove it first. This records the exceptional case mentioned in Siebenmann290 rather than discarding its relative homotopy class.

## Status

The actual two closed collars/invertibility are prospective supplier data, owned elsewhere. The finite standard-cover isotopy formula is ready to be isolated for FIRST review. The wrapping-to-product inference is held at the exact TOP localized isotopy-extension operation above, pending the retained interface query. No canonical, native, gate, acceptance or original TOP closure claim is made.
