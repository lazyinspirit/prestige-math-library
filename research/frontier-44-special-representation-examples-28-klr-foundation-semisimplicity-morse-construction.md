# Exact local Morse construction in progress

Author `/root/klr_semisimplicity_foundations`; scope is research-only. Target owned supplier: `lem-complex-stratified-morse-data-have-tangential-normal-product-and-link-description`. This note distinguishes actually constructed prerequisites from the remaining construction; it is not a proved replacement for that supplier.

## Source and actual scope

The actual complete book, Goresky–MacPherson *Stratified Morse Theory* (1988), was recovered from the authors' publication index at `https://www.math.ias.edu/~goresky/pdf/SMT.pdf`; SHA256 `87ec78b5948ef42f7af568ecdda7a71c8bc8feed81af21564dccc07ab9b2387c`,279pages. Full PartI chapters4–8, printed70–113/PDF79–122, fullI12.1–12.6 printed128–139/PDF137–148, fullII2–3 printed159–175/PDF166–182, and I2.1–2.5.2 printed52–57/PDF61–66 actually read. Product diagrams8.4/PDF112–115 also visually read. No whole-book reading is claimed.

The formerly missing full-source obstacle is now resolved. Source reading does not complete the local proof. The source's complete local product argument has eleven explicit wall transitions, not an invocation of affine paving or a real2d CW bound.

## Already constructed exact exhaustion

`lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions` is now an actual five-step local draft. On a closed affine embedding and finite smooth complex algebraic Whitney strata, generic Euclidean squared distance is proper, strongly plurisubharmonic, and has nondegenerate stratum critical points with normal nondegenerate covectors. Finiteness is genuinely proved: complexify squared distance on S×conjugateS; its critical incidence is an algebraic conormal bundle of dimension2N over a2N-dimensional parameter space. Each dominant component has finite zero-dimensional generic fibers; nondominant components are avoided. Real conjugate parameter pairs are Zariski dense, and a nonempty real parameter open survives the Sard exceptional null sets. No real semialgebraic cell-decomposition or Tarski theorem is imported. Equal critical values may occur; use finitely many disjoint local neighborhoods at that value.

Its actual published dependencies are full-bodied Morse–Sard, generic fiber dimension, zero-dimensional-variety finiteness, Jacobian rank criterion, dense regular loci over a perfect field, and holomorphic implicit function theorem. The smooth real null-image strata of the conormal boundary are obtained by the explicit dimension-decreasing regular-locus construction.

## The needed wall mechanism

A wall family is a Whitney stratified family of compact regions and closed face unions in a Euclidean wall space, with projection to time submersive on all faces. For a fixed smooth map from the actual source, assume each source stratum is transverse to every moving face at every time. The pullback family is then Whitney stratified (transverse intersections), and the time projection is a proper stratified submersion. The actual controlled-submersion supplier gives a stratum-preserving homeomorphism of endpoint pairs. This is the full local proof of book4.3–4.4: it is an application to a specified proper map, not an unexplained averaging or isotopy assertion. A moving corner must be prolonged as an artificial stratum throughout the motion. Refining by such faces is necessary for the hypotheses; omitting it is not harmless.

## Historical construction checklist before the boundary component

Fix an isolated nondegenerate stratified critical point p on S. Choose smooth coordinates making S the tangent coordinate space and a tubular projection pi to S. Put r_pi=||pi(z)-p||², rho=||z-pi(z)||², r=r_pi+rho, and g=f∘pi. The source calculationsI6.2–6.11 prove absence of characteristic covectors in finitely many fringed parameter regions 0<epsilon≪delta. Their intersections still contain allowable parameters; compact parameter families permit uniform choices by the explicit horizontal-segment argumentI5.2–5.5.

The required calculation classes are:

1. (r,f) on the zero level: WhitneyB gives limiting tangent=radial line plus limiting tangent to the sphere; normal nondegeneracy excludes a covector killing both. On S the nondegenerate Hessian supplies the corresponding radial sign directly. For nondegenerate Hessian H, normalized radial derivative and f-f(p) have leading coefficients H(v,v) and H(v,v)/2; the nondepravity condition excludes H(v,v)=0. Thus no absent curve-selection theorem is needed for our nondegenerate case.
2. The same radial argument on the normal slices, uniformly over a small closed tangent disk, yields independence of d(pi),df,d(rho) on the relevant normal boundary faces.
3. The mixed weighted radial forms a d(rho)+b d(r_pi), together with df,dg, are independent on the moving corner bands. Split rho≥r/2 and r_pi≥r/2; apply respectively the normal and tangential estimates. For the final wall motion the needed ratios a/b are in[0,1], so establish compact uniformity over that interval. Do not claim the source's all-ratios statement follows from a parameter choice on a bounded interval without checking the endpoint separately.
4. The two delicate (g,f)-wall rotationsI8.5.2–3 need the characteristic slope calculation on the rounded r-boundary and its sign exclusions. The book writes r=r_pi+(f-g)²+h(y) in adapted coordinates and derives the slope formula there. This adapted-coordinate/metric realization and the resulting sign estimates must be explicitly justified locally; they are not yet a proved clause of this packet.

After those checks, the source's concrete wall chain is: start with r≤2delta and |f|≤epsilon; separate the lower f-face into a(g,f)-picture; round the upper r/f corner; rotate the lower f-face to add g≥-3epsilon/4; rotate the lower wall to f≥g-epsilon/4; unround the r/f corner; move the upper f-face to f≤g+epsilon/4; replace it by g≤3epsilon/4; rewrite r=r_pi+rho; truncate the triangle rho+r_pi≤2delta to a square by its two explicit linear wall motions. The endpoint pair is

{r_pi≤delta,rho≤delta,|g|≤3epsilon/4,|f-g|≤epsilon/4},

relative to the union of its lower g and lower(f-g) faces. The proper projection to the tangent disk is a stratified bundle of normal pairs by the normal-boundary independence. Trivializing that bundle identifies this endpoint with the product of the normal pair and the ordinary tangential Morse pair. The latter is a negative disk pair times a positive disk, by the actual classical Morse lemma. Every displayed wall motion must retain its face union and artificial corners.

## Complex-link and sheaf transport construction

For a nondegenerate real normal covector w, let h=w-iw∘i in linear complex normal coordinates. Joint nondegeneracy of Reh,Imh follows because generalized tangent spaces are complex. The full argumentI12.2 uses WhitneyB to exclude characteristic covectors of(r,Reh,Imh) over the small radial axis; compact closed unit covectors then provide the fringed region. The refinement by Reh=0,±eta is permitted once eta≪epsilon≪delta; the compact covector sign argumentI12.3 proves the new moving faces remain transverse. Wall motion in(r,|h|) compares the cylinder |h|≤epsilon,r≤delta to the radial ball while preserving those three levels. Controlled radial contraction on the refinement preserving Reh=0 gives the cone. Proper stratified submersion over the punctured h-disk makes a half-link h_Re=eta a product of the complex link with an interval. Thus the normal pair has the homotopy type(cone(complex link),complex link), with actual face collarings, not a naive contractibility claim.

For constructible coefficients, all these motions must be accompanied by sheaf transport on the stratum-preserving parameter products. The relative disk pair in the negative tangent directions shifts normal cohomology by the tangent index. Positive disks do not shift it. The cone cohomology is the vertex stalk because controlled radial rescaling identifies all sufficiently small cone neighborhoods and the direct limit of their cohomology is the stalk; derived stalk exactness makes the higher limiting groups zero. The normal relative triangle therefore has the vertex stalk and complex-link cohomology as its other two terms. Ordinary homotopy equivalence of spaces alone does not establish this for arbitrary constructible coefficients.

## Current construction status (2026-10-09)

The historical checklist above records the obligations at its original writing; it is retained as chronology. The complete boundary component is now locally written in `frontier-44-special-representation-examples-28-klr-foundation-semisimplicity-morse-boundary-proof.md`. It supplies the mixed radial estimates, limiting tangent-plane checks, corrected rounded-boundary signs, and all eleven endpoint wall formulas. Its corner defect and one review-to-repair round are recorded in the matching `morse-boundary-review-rounds.json`; both the owning author and original consumer owner read the complete corrected component and found no further focused defect. This remains conditional on the actual controlled-topology supplier and is not native acceptance.

The companion `frontier-44-special-representation-examples-28-klr-foundation-semisimplicity-complex-link-and-sheaf-morse-proof.md` now locally constructs the complex-link support triangle, stratum-preserving derived coefficient transport, tangential shift, critical-band localization, nonpure link dimension bound, and nearby-center collar-compatible logarithmic exhaustion on the ball link. It is newly written and requires its focused interface check and assembly with the boundary component into the existing Morse item. In particular, arbitrary constructible coefficients are transported using actual parameter products and finite incidence descent; ordinary homotopy invariance alone is not used.

Remaining work is the single complete Morse-item assembly, direct prerequisite reconciliation with root after native plan writers drain, the focused Morse-to-Artin consumer check, and the independently unfinished projective joint package (including exact Gysin/cup and refined-fibre/moving-family geometry). No completed original global-basis or native mathematical acceptance is asserted. Root and the native engine own integration and audit.


## Properness scope correction from the actual book

The printed DefinitionII2.1.3(b)/PDF167 visually calls the analytic normalfunction f:Nprime→unitdisk proper, but its next constructionII2.1.4 is a linear function in a local Euclidean chart. That literal global properness is not available in general (projection C²→C has noncompact fibers). Our local proof must instead verify properness on the explicitly compact normal ball/cylinder/wall pairs to which the controlled isotopy theorem is applied. That is all the source's actual local proof uses. Do not silently inherit global properness from the definition, nor restrict the theorem to normaldimension1 to obtain it.
