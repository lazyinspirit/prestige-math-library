# Algebraic geometry and scheme theory scaffold audit and repair

Date: 2026-09-30

## Scope and result

This audit reconciles current AV-1–AV-26 prose promises with the published
library and with the proposed expansion in
research/plan-algebraic-geometry-expansion-track.md. A current claim is
marked closed only if an existing published item supplies it or a complete
local argument is specified from published inputs. A citation or an
unpublished proposed pair does not count as proof closure.

**Current result:** AV-1–AV-26 each has a closed supplier route under the
hypotheses in the repaired main plan. AV-7, AV-8, and AV-20/23–26 remain
prose-only: “closed” means their proofs can be written from the named
published items and local steps, not that their pages have been authored or
published. Future expansion candidates remain outside the buildable set until
their row-specific source and local-proof gates below close.

The approved active 30-pair run, its manifests, plan specification, generated
items, and engine state were not changed. The four source reports were read;
the independent second audit later corrected the GA-3 example in
`source-brion-actions.md` and the scoped [07S6] note in `source-stacks.md`.
Their recorded source access and PDF hashes remain intact.

## Current AV claim/supplier matrix

For AV pairs with published pages, the page and its theorem-like item files
are the direct published proof destinations. For prose-only claims, the
local arguments below state the intermediate steps that must be authored.

| AV claim | Published supplier and local proof route | Status |
|---|---|---|
| AV-1 affine algebraic sets/coordinate rings | Published AG-P2 page classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface: thm-classical-affine-algebraic-sets-reduced-algebras-antiequivalence supplies the object dictionary by Nullstellensatz ideal/point correspondence and mutually inverse pullback/zero-locus maps. The page separately proves the full morphism anti-equivalence; AV-1’s old object-only label must not claim that larger theorem. | Closed; no duplicate theorem. |
| AV-2 affine morphisms, local rings, rational maps | Same AG-P2 page: thm-classical-affine-morphisms-coordinate-ring-antiequivalence is exact supplier. Localizations give germs; agreement on principal opens gives the rational-map domain; product/graph steps use published AV-4. | Closed. |
| AV-3 projective varieties, maps, cones | Published projective-algebraic-sets-projective-morphisms-and-cones (25 A/7 B); direct homogeneous ideal, cone, and projective-map proof destinations, using AG-P2/AV-1 affine dictionary. | Published. |
| AV-4 products, Segre/Veronese, Grassmannians | Published products-segre-and-veronese-embeddings-and-grassmannians (25/8); direct tensor-coordinate, embedding, and Plücker proofs; AV-2/3 supply maps and projective interfaces. | Published. |
| AV-5 dimension and constructibility | Published dimension-constructible-images-and-dimensions-of-fibres (46/10); direct dimension/transcendence-degree, constructible-image, and fibre-dimension proofs. | Published. |
| AV-5a differentials and smooth local presentations | Published algebraic-differentials-separability-and-smooth-local-presentations (27/6); supplies field-differential, separability, and standard-smooth inputs for AV-6. Its cited generic-flatness theorem is not used as AV-17 generic freeness. | Published. |
| AV-6 tangent spaces, regularity, smoothness, Bertini | Published zariski-tangent-spaces-regular-points-smoothness-and-bertini (43/17; both pages published). Its tangent lemma is only for rational points; the residue-field version is AG-P2 thm-tangent-vectors-dual-numbers. Its imperfect-field cex computes Spec k[t]/(t^p-a), with the B base-change computation. | Published; census and cex status corrected. |
| AV-7 normality, normalization, Zariski Main | Published CA-19 `thm-integral-closure-finite-finite-type-domain-over-field` and `lem-finite-normalization-compatible-with-principal-opens` give affine finiteness/localization. Glue closures inside k(X); overlap maps satisfy the cocycle since each is inclusion into k(X). The universal property follows because integral elements map into integrally closed local rings of a normal source. Published CA-20 theorem `thm-algebraic-zariski-main-localization` supplies the local statement that a finite-type algebra map quasi-finite at a prime becomes a localization of the relative integral closure after inverting one element; state its AC, finite-type, and pointwise quasi-finite hypotheses. For scheme consumers reuse AV-17 `lem-scheme-zariski-main-factorization-quasi-finite` and `thm-proper-quasi-finite-is-finite`. Build a smooth projective model of a one-variable function field by choosing a transcendental element, normalizing P1 in the finite extension using CA-19 chartwise, using CA-8 for one-dimensional normal local rings, AV-15/19 for finite-over-projective projectivity, and AV-6 for regular = smooth over a perfect field. | Closed local route; no future AV-7 pair counted. |
| AV-8 local plane intersection/Bézout | Published CA-11 gives regular-local associated-graded/Hilbert–Samuel length tools; CA-21 thm-projective-plane-complete-intersection-total-length gives the resultant and projective total length; AV-5/13 give dimension and scheme-theoretic intersection. In R=O(P2,p), (f,g) is m-primary iff no height-one component contains both; this uses dimension/height, not a UFD assertion. Units preserve the ideal. Product additivity follows from the exact sequence for R/(fg,h) when intersections are proper. The local blowup chart gives I_p(f,g)=m_f m_g+sum over q on E of I_q(f',g'): divide by exceptional orders and filter by powers of E. The initial forms meet on E exactly at shared tangent directions, giving I_p≥m_f m_g with equality iff tangent directions are disjoint. The finite global intersection length is the sum of local lengths weighted by residue degrees; CA-21’s Hilbert-polynomial/resultant calculation gives total de. Use the Hilbert polynomial; the homogeneous coordinate ring need not be Artinian. | Closed local route from CA-11/21; no future pair counted. |
| AV-9 sheaves/sheafification | Published presheaves-sheaves-stalks-and-sheafification (29/9); its direct proof destinations cover sheafification and stalk tests. | Published. |
| AV-10 sheaf operations/exactness | Published sheaf-operations-exactness-ringed-spaces-and-module-pullback (30/9); direct stalkwise exactness and tensor/pullback destinations. | Published. |
| AV-11 affine schemes | Published affine-schemes-and-the-structure-sheaf (30/7); Spec anti-equivalence, distinguished opens, and structure-sheaf proofs. | Published. |
| AV-12 schemes/closed subschemes | Published schemes-subschemes-and-morphisms-locally-of-finite-type (31/8) supplies affine quotient, ideal-sheaf, closed-immersion inputs. The full correspondence is on published AV-18: thm-qc-ideal-closed-subscheme-correspondence-complete and thm-quasi-coherent-ideal-closed-subscheme-correspondence. Prove affine quotient, localize, glue ideals and quotient schemes, and verify inverse assignments on an affine cover. | Published; former AV-12 theorem destination was stale. |
| AV-13 fibre products/base change | Published fibre-products-base-change-and-scheme-theoretic-fibres (42/11); tensor-product construction and gluing are direct proofs. | Published. |
| AV-14 diagonals/separatedness | Published diagonals-separated-morphisms-and-valuative-uniqueness (29/8); direct diagonal criterion and valuative uniqueness proofs with stated hypotheses. | Published. |
| AV-15 finite/proper/projective maps | Published finite-proper-and-projective-morphisms (49/9). thm-properness-descent-fpqc is already published; its proof reduces fpqc locality to universally closed, separated, and finite type (Stacks [02L1], [02KS], [02KU], [02KZ]). AV-15 owns affine/local quasi-finite inputs; scheme-level Zariski Main is AV-17. | Published; stale “not supplied” removed; no duplicate. |
| AV-16 differentials/tangent vectors | Published kahler-differentials-conormal-sequences-and-infinitesimal-lifting (33/9). def-smooth-relative-dimension-via-differentials is a definition (proof not applicable); thm-differentials-smooth-locally-free and its converse are published on AV-17 and use flatness, finite presentation, and fibre conditions. | Published; definition/theorem boundary corrected. |
| AV-17 flat/smooth/étale, Zariski Main, generic freeness | Published flat-smooth-and-etale-morphisms (77/9). Exact factorization items are `lem-scheme-zariski-main-factorization-quasi-finite` and `thm-proper-quasi-finite-is-finite`. The scheme factorization is assembled from published `lem-relative-normalization-finite-stage`, `thm-quasi-finite-algebra-open-finite-factorization`, and open-immersion/finite factorization. The affine algebra step explicitly depends on published CA-20 `thm-algebraic-zariski-main-localization`; AV-15 supplies quasi-finite fibre interfaces, while AV-17 supplies the étale-local descent and finite-stage route. Properness then makes the open image closed and yields finiteness. Generic freeness is published `lem-generic-freeness-finite-type-algebra-module`, with AC, Noetherian domain A, finite-type A-algebra B, and finite B-module M. Its proof inducts on a finite algebra-generator list: at zero generators, a prime filtration becomes a filtration by free-or-zero quotients after inverting a product of nonzero elements in the nonzero primes, and the extensions split because free quotients are projective. For B=A'[x], set M_k=Σ_{j≤k}x^jM_0; the kernels of the surjections M_0→M_{k+1}/M_k stabilize because A' is Noetherian. Thus all later quotients are isomorphic to one finite A'-module Q. The induction hypothesis localizes M_0, Q, and the finite initial quotients to free modules; splitting each localized short exact sequence yields `M_a≅(M_0)_a⊕⊕_{k≥0}(Q_k)_a`, hence free, possibly of infinite rank. AC is used for prime filtrations and simultaneous choices of basis preimages. Stacks checks: [03GT], [05K0], [02LS], [051R], [0529]. | Published; no future pair counted. |
| AV-18 QC/coherent sheaves | Published quasi-coherent-and-coherent-sheaves-and-vector-bundles (40/10); affine-module equivalence and QC ideal correspondences are direct proofs. | Published. |
| AV-19 Proj/projective schemes/ampleness | Published proj-projective-schemes-twisting-sheaves-and-ampleness (38/10); direct relative-Proj, twisting, and projectivity proofs with saturation hypotheses stated. | Published. |
| AV-20 divisors/line bundles/ordinary Picard group | The proposed `def-picard-group` means the ordinary group of isomorphism classes of invertible sheaves under tensor product; it asserts no representing Picard scheme or Picard functor. Published AV-12/18/19 give closed subschemes, ideals, invertible modules, and twists; CA-8 gives height-one DVR valuations, and CA-10 supplies the dimension/height interface. Cartier data differ locally by units; tensor local equations for addition; a nonzero rational section trivializes a line bundle at the generic point and gives its Cartier divisor. Map Cartier to Weil by height-one valuations. Claim the converse only for locally factorial schemes whose local rings are UFDs; no regular-local-UFD theorem is assumed. CA-9 is optional only for a separately stated Dedekind-domain specialization, not a supplier for the general normal-scheme claim. On a proper normal curve, a nonconstant rational function gives a finite map to P1; normal curve local rings are DVRs, so it is finite flat of degree d and zero/pole fibres have weighted degree d. Principal divisors therefore have degree zero. | Closed local route; ordinary Picard group only, no Picard-scheme representability or regular-local-UFD claim. |
| AV-21 sheaf/Čech cohomology | Published sheaf-cohomology-cech-cohomology-and-comparison (63/10); exactness, acyclic-cover comparison, and derived comparison are direct proof destinations. | Published. |
| AV-22 coherent cohomology/base change | Published cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes (56/12). Exact items: lem-proper-flat-cohomology-perfect-complex, lem-proper-flat-fp-cohomology-perfect-complex, thm-cohomology-and-base-change. First obtain bounded-above finite-free representative; use Stacks [07VJ] under Noetherian/proper/coherent/base-flat hypotheses for bounded perfect truncation; apply finite-complex base-change criterion. | Published; earlier draft item label was stale. |
| AV-23 curve maps, normalization, canonical ramification, RH and high-degree promises | CA-19 finite affine normalization plus principal-open localization, glued in the function field, proves curve normalization. AV-15/17 supplies finite/proper and quasi-finite facts; AV-19/22 projectivity/cohomology. The current AV-23 claim `thm-canonical-bundle-ramification-formula` has a local route from published AV-16: for finite generically separable `f:C→D`, the differential map `f*Ω_{D/k}→Ω_{C/k}` is an isomorphism at the generic point by the exact sequence of differentials and `Ω_{k(C)/k(D)}=0`; as a nonzero map of line bundles it is injective with finite torsion cokernel. At each closed `p`, its DVR cokernel length `d_p≥0` defines `R=Σ d_p[p]`, so the divisor of the map gives `ω_C≅f*ω_D(R)`. AV-23 also records RH, étale-genus, basepoint-free and very-ample promises, but emits no theorem rows for those four results. Their stable complete theorem destinations are AV-25 after AV-24. At AV-25, rederive the canonical differential map locally from published AV-16 rather than using the unpublished AV-23 row; finite flatness gives `Σ_{p|q}e_p[κ(p):κ(q)]=deg f`. Published AG-LIE duality and the locally proved AV-24 Euler-RR give `deg ω=2g−2`; taking degrees proves RH, and finite étale means `Ω_C/D=0` and `R=0`. For the degree bounds, exact sequences at geometric points and length-two geometric subschemes reduce to negative-degree vanishing of `ω⊗L⁻¹(p)` and `ω⊗L⁻¹(Z)`; use AG-LIE duality, then descend the geometric-point proof by AV-22 flat proper base change. | Current AV-23 claim closed by published AV-16 plus its explicit local divisor calculation; promised RH/high-degree claims have closed routes at AV-25 after AV-24. No unpublished AV-23 theorem row counts as a supplier. |
| AV-24 Euler-characteristic Riemann–Roch | For closed p, 0→O(D)→O(D+p)→O(D+p)|p→0 has quotient k-dimension [κ(p):k]. Published AV-21/22 gives coherent cohomology finiteness, long exact sequences, Euler additivity. Induction on positive/negative point coefficients gives χ(O(D))=deg D+χ(O_C)=deg D+1−g, using geometric connectedness for H0(O_C)=k. | Closed local route. |
| AV-25 residues/curve duality/full RR | Published AG-LIE `thm-serre-duality-smooth-projective-variety-locally-free-sheaves` supplies abstract perfect pairings for locally free sheaves on smooth projective curves over an arbitrary field. Its line-bundle specialization plus AV-24 Euler-RR gives full divisor RR and `deg ω=2g−2` over an arbitrary field; vector-bundle duality is direct. For coherent `F`, choose `n` so AV-19's ample twist makes `F(n)` globally generated; AV-22's coherent cohomology gives a finite vector-bundle surjection `E₀→F`. Its kernel `E₁` is a subsheaf of `E₀`, hence torsion-free, and over the curve's DVR local rings is locally free. Apply the long exact cohomology/Ext sequences to `0→E₁→E₀→F→0`; naturality of AG-LIE's locally-free pairings and the five lemma give coherent Ext duality. The coordinate residue subsection is narrower: over perfect `k` (or at a closed point with finite separable `κ(p)/k`), smoothness makes `Ω_{C/k}` locally free rank one, while `Ω_{κ(p)/k}=0`; the cotangent sequence `m_p/m_p²→Ω_{C/k}⊗κ(p)→Ω_{κ(p)/k}→0` therefore makes `dt` a basis for every uniformizer. The separable coefficient-field lift identifies the completion with `κ(p)[[t]]`. Formal change of parameter proves independence and `res(df)=0`; the boundary in `0→ω→ω(D)→ω(D)|_D→0` is the coefficient trace, and the Čech principal-parts boundary sums those traces. Do not assert `Tr_{κ(p)/k}(a₋₁)` at an inseparable closed point over an imperfect field. The abstract all-field duality/RR route does not depend on this residue formula. For high-degree bounds, use `0→L(-Z)→L→L|_Z→0`: after algebraic closure `Z` has length one or two, and duality reduces surjectivity to vanishing of `H⁰(ω⊗L⁻¹(Z))`, whose degree is at most `-1` at the `2g`/`2g+1` thresholds; AV-22 base change descends the result. | Arbitrary-field duality/RR closed by AG-LIE plus AV-24/21/22; local residue proof closed only in the stated separable-residue scope. |
| AV-26 blowups/embedded plane-curve resolution | CA-19 finite normalization; CA-8 normal one-dimensional local rings are DVRs; AV-15/17 proper quasi-finite implies finite; AV-21/22 Euler/coherent cohomology; published cor-regular-local-ring-satisfies-s-two and lem-r-one-s-two-intersection-of-height-one-localisations; AV-26 local blowup charts. CA-11 supplies Hilbert–Samuel/multiplicity facts. Exact termination proof below. | Closed for plane-curve scope; AG-CRES-1 cannot duplicate or supply it. |

### AV-23 current-claim route details

- **Normalization and smooth projective models.** CA-19's published finiteness
  and principal-open localization items give finite affine normalizations;
  identify their function fields and glue the localizations by the cocycle
  inside that common field. For a one-variable function field over perfect
  `k`, choose a finite-type domain with that fraction field, take projective
  closure by published AV-3, normalize chartwise by CA-19, and use AV-15/19
  finite-projective and ample-twist results. CA-8 makes closed normal local
  rings DVRs; published AV-6 gives regular = smooth over perfect `k`. The
  main plan's AV-23 proof block gives the constant-field, geometric
  connectedness, and uniqueness steps: published AV-19 global-functions,
  AV-22 flat base change, and the proper valuative criterion extend rational
  maps uniquely. No AV-7 theorem is assumed.
- **Divisors, line bundles, and linear systems.** At a smooth-curve closed
  point, AV-6 gives a one-dimensional regular local ring and CA-8 identifies
  it as a DVR. Thus every finite Weil divisor is locally principal; unit
  changes glue the Cartier data, and local equations give the associated
  invertible sheaf. This is proved in AV-23 from published AV-12/18/19 and
  CA-8 rather than borrowed from unpublished AV-20. Nonconstant proper maps
  are finite by AV-15/17. Over a target DVR, their finite torsion-free source
  algebra is free; reduction modulo its maximal ideal has length the function
  field degree, while its local factors have lengths
  `e_p[κ(p):κ(q)]`, proving the fibre-degree formula. Basepoint-free sections
  define morphisms by the published projective-map interfaces in AV-19.
- **Genus and plane-curve identities.** Geometric connectedness plus
  AV-22's degree-zero base-change calculation gives `H⁰(O_C)=k`. The
  normalization sequence `0→O_C→ν_*O_C~→Q→0`, CA-19 finiteness, and AV-21/22
  Euler additivity give the arithmetic-genus/delta correction. The plane
  arithmetic genus follows from `0→O_P²(-d)→O_P²→O_C→0` and AV-22's
  projective-space cohomology; the delta correction then follows from the
  normalization sequence. The generic-separable canonical ramification
  formula has the local differential-map proof in the AV-23 matrix row.
  Riemann--Hurwitz, étale-genus, and high-degree bounds are only promises at
  AV-23; their separate AV-25 proof route is recorded in that row and does
  not use an unpublished AV-23 item as a supplier.

## AV-26 binding proof route

Let S be a projective regular surface obtained from P2_k by closed-point
blowups and C the reduced strict transform of a reduced plane curve. At p,
choose parameters x,y in the 2D regular local ring A=O(S,p), with residue
field κ(p). Blowup charts A[y/x] and A[x/y] have exceptional fibres the
affine charts of P1_{κ(p)}. At a point of the exceptional fibre, quotient by
the exceptional parameter gives a localization of κ(p)[t], a regular ring;
away from E the blowup is an isomorphism. Thus the blown-up surface remains
regular even if κ(p)/k is inseparable. This proves regularity, not smoothness
over k.

For componentwise finite normalization ν:C~→C, set Q_C=ν_*O_C~/O_C and
δ_k(C)=dim_k H0(C,Q_C). CA-19 makes Q coherent with finite support. Each
composition factor at p is κ(p), so
δ_k(C)=sum_p [κ(p):k] length_{O_{C,p}}(Q_{C,p}).
Thus local O_{C,p}-length is multiplied by the residue degree.

For π:S'→S the point blowup, E=P1_{κ(p)}, and C' the strict transform,
the charts give π*C=C'+mE and O_E(E)=O_{P1_{κ(p)}}(-1). The local chart
Čech computation gives π_*O_{S'}=O_S and R^iπ_*O_{S'}=0 for i>0:
degree-zero chart sections intersect in A by published S2
cor-regular-local-ring-satisfies-s-two and normal-domain intersection
lem-r-one-s-two-intersection-of-height-one-localisations; positive-degree
overlap terms split into the two chart summands. Projection formula
preserves Euler characteristic for pullbacks. For j=1,...,m, filter by
exceptional powers:
0→O(-π*C+(j−1)E)→O(-π*C+jE)→O_E(-j)→0.
Here χ_k(O_E(-j))=[κ(p):k](1−j), so
χ_{S'}(O(-C'))=χ_S(O(-C))−[κ(p):k]m(m−1)/2.
The divisor exact sequences imply
χ(O_{C'})−χ(O_C)=[κ(p):k]m(m−1)/2. The map C'→C is proper, is an
isomorphism off p, and has finite fibre over p, hence quasi-finite and finite
by published AV-17. It is componentwise birational, so the componentwise
finite normalization is unchanged. The normalization exact sequences give
δ_k(C')=δ_k(C)−[κ(p):k]m(m−1)/2.
At a non-rational center the old summand
[κ(p):k]length_{O_{C,p}}Q_{C,p} is replaced by
sum_{q→p}[κ(q):k]length_{O_{C',q}}Q_{C',q}. Every singular center has m≥2,
so δ strictly decreases. At δ=0, C is normal; CA-8 makes its
one-dimensional local rings DVRs and hence regular. Distinct normal
components are disjoint.

For crossings, include regular strict-transform components and all
exceptional components. For distinct regular components Y,Z through p, set
n_p(Y,Z)=length_{O_{Y,p}}(O_{Y,p}/I_Z O_{Y,p}). If n>1, choose parameters
with Y=(y=0), x|Y a uniformizer, and blow up in y=xt. For f(x,y)=0 defining
the smooth component Z, f(x,xt)/x defines its strict transform; on Y'=(t=0)
it restricts to f(x,0)/x, of order exactly n−1. Thus a pair that still
meets has contact n−1; if n=1, distinct tangent directions meet E at
different points. Every strict-transform/E contact has order one.

Let N be maximum pairwise contact (zero if no pairs meet), and
M=sum_p max(s_p−2,0), with s_p support components through p. Order (N,M)
lexicographically. While N>1, blow every finite support point where a pair
has order N. Every order-N pair, including all pairs among branches sharing a
tangent, separates or becomes order N−1. Other contacts do not increase and
new exceptional contacts are order one. Therefore N strictly decreases.
Once N≤1 all meetings are transverse. At s_p≥3, distinct tangent directions
send the strict components to distinct points of E; the blowup creates only
transverse two-component meetings with E and reduces the contribution to M
to zero. Blow the finite set of such points; M strictly decreases. The
lexicographic process terminates with regular components, pairwise
transverse crossings, and at most two components through each point on a
regular ambient surface. This is regular embedded normal-crossing support;
over imperfect k it need not be a relative SNC divisor with components
smooth over k.

## Future expansion supplier/gate matrix

These are candidates, not current promises or buildable claims. Candidate
inventories and ordering are in the expansion roadmap. Each open gate names
the missing proof work; a citation alone does not close it.

| Candidate | Existing inputs/checked text | Exact open gate; excluded from fully provable set |
|---|---|---|
| AG-GS-1 group schemes over a field | Published affine/functor/fibre-product chain; M22 Chs. 1–2; Stacks [022S], [047D], [0G8L], [022U], [040M], [022V], [022W] for definitions and standard examples. | Second independent proof for α_p/μ_p characteristic-p distinction and Milne-only content; Stacks roots-of-unity is not α_p. |
| AG-GS-2 Hopf algebras/representations | M22 Props. 3.1, 3.6–3.15, Thm. 4.9/Cor. 4.10; existing AG-LIE representation is complex-only. | Second source for affine group/Hopf anti-equivalence, subgroup/Hopf-ideal dictionary, and finite-dimensional subcomodule argument; no verified Stacks supplier. |
| AG-GS-3 Lie/infinitesimal groups | M22 Def. 10.6/Thm. 10.23; Stacks [047I], [0BF5] supplies tangent module/addition. | Second treatment and local commutator-over-dual-numbers proof for bracket/adjoint action. Cartier smoothness stays characteristic zero; Ado/Engel not supplied for stronger claims. |
| AG-ACT-1 actions/controlled quotients | AV-5/13/17; M22 Orbit Lemma 1.66, Props. 7.17/Thm. 7.18 for smooth affine groups over fields; Stacks [03BM] for affine finite-locally-free equivalence relations and [07S6] for a scoped nonaffine gluing case. | Reconstruct M22 Appendix B and imported DG lemmas plus a second source before any arbitrary-group quotient claim. [07S6] requires finite-locally-free source/target maps, an equivalence relation, and every nonempty closed subset to contain a point whose class lies in an affine open; the 2025-07-22 comment was resolved by this strengthened condition. Neither Stacks result proves arbitrary `G/H`. |
| AG-ACT-2 complex affine actions | Published AG-P2 and AV-5; Brion §§1.1/Prop. 1.9. | Second complete treatment of equivariant embedding; AG-LIE linear representation is not an affine-action embedding proof. |
| AG-ACT-3 reductive affine invariant theory | Brion Thm. 1.24/Prop. 1.26, with complete reducibility deferred to Schwarz–Brion Ch. 5. Correct B counterexample: trivial G_m action on a point has closed orbit and positive-dimensional stabilizer; the old (1,−1) doubled-origin example is not a counterexample. | Read full reductivity/Reynolds proof and second treatment; then prove finite generation, categorical quotient, closed orbit in quotient fibres, stable geometric quotient. No positive-characteristic reductive⇒linearly-reductive claim. |
| AG-ACT-4 projective GIT | AV-18/19/22; Brion Props. 1.29/1.31 and sketch Prop. 1.35. | Read complete MFK/Dolgachev proof and independent treatment. Brion 1.35 is incomplete and omits Hilbert–Mumford; fix linearization hypotheses. |
| AG-GRP-1 Barsotti–Chevalley/abelian varieties | M22 Thms. 8.27/8.28 and §8; Stacks [0BFA] with [0BF7], [0B45] proves projectivity. | Write local reductions behind M22 Props. 8.6/8.26 and quotient inputs; second source required. M22.8.45 alone does not prove projectivity; smooth-affine AG-ACT-1 does not discharge nonaffine quotient proof. |
| AG-GRP-2 multiplicative type/tori | M22 Defs. 12.14/12.17, Thms. 12.18/12.23; published Galois-correlation and separability pages. | Write A.64/A.66 descent locally and read an independent full treatment. |
| AG-GRP-3 solvable/Borel theory | M22 Thm. 14.5, 16.30, Cor. 17.3, Thms. 17.9–17.10. | Independent proof with exact field, smoothness, connectedness, completeness. Exclude characteristic-zero Lie/unipotent equivalence until Ado/Engel proofs are supplied. |
| AG-GRP-4 split reductive structure | M22 Chs. 20–21 and field root-data construction §§23(h)–24. | Independent complete split-field treatment. Integral theorem 23.74 imports Demazure/SGA 3 XXV and remains excluded. |
| AG-GRP-5 highest weights | M22 Thm. 22.2/22.41, §§22(a)–(b). | Read/reconstruct Steinberg Ch. 12 proof of M22 Lemma 22.24 and a second treatment. Keep simple-module classification separate from semisimplicity. |
| AG-SURF-1 surface intersection | AV-26 blowup interface; V25 §§20.1.1–20.1.6/Thm. 20.1.2. | Complete Exercise 20.1.E locally and read independent full surface-intersection treatment. |
| AG-SURF-2 surface RR/Hodge index | AV-21/22; V25 Thm. 20.2.13, §§20.2.14–20.2.19. | Prove Exercise 20.2.B locally and obtain independent proof with exact numerical-equivalence/base-field assumptions. |
| AG-CRES-1 arbitrary regular surfaces | AV-26 charts; CA-19 is finite-type-over-a-field only; Stacks [0BI4], [0BI5], [0BI7], [0BI8], [0BIC] gives one broader route. | Prove factorization through finite normalization, strict growth of intermediate algebras, Noetherian stabilization, regularization and contact descent for arbitrary Noetherian regular surfaces with finite normalization; get a second source for exact scope. AV-26 already owns the plane theorem. |
| AG-DUAL-1 coherent duality on projective CM schemes | AV-18/19/21/22; AG-LIE smooth-projective locally-free case; V25 Ch. 29 and Stacks [0FVV–0FW0] comparisons. | Build dualizing-complex/Ext foundations and local coherent CM proof before commissioning; existing smooth locally-free theorem is only a special case. |
| AG-MOD-1 Hilbert schemes | AV-4/18/19/22; V25 §§25.3.1–25.3.6. | Read/reproduce Mumford/FGA representability locally and a second treatment; V25 Theorem 25.3.1 cites construction. |
| AG-DEF-1 deformation/obstruction | AV-16/18/21 and published Ext/derived interfaces. | Select exact small-extension/cotangent-complex contract; read Illusie or a complete modern proof and an independent source. |
| AG-CHOW-1 Chow groups/GRR | AV-8/20 intersection inputs do not imply Chow theory or GRR. | Read Fulton and independent full GRR proof; locally establish rational equivalence, proper pushforward/flat pullback, Chern character/Todd class, and exact proper-morphism theorem. |
| AG-ET-1 étale fundamental group | AV-17 and finite étale/descent interfaces. | Read SGA 1 and an independent treatment for finite étale/fibre-functor classification and specialization with geometric-basepoint/Noetherian hypotheses. |
| AG-BIR-1 surface contractions/factorization | AV-7/15, AG-SURF-1, AG-CRES-1. | Full source and independent treatment for negativity, contraction, factorization and normal surface resolution; fix characteristic/properness scope. |
| AG-RES-1 higher-dimensional resolution | AV-26 is only curve-on-surface; V25 §28.5 cites Nagata/Hironaka. | Full characteristic-zero proof and independent treatment; state positive-characteristic boundary. |
| AG-ARITH-1 arithmetic models | AV-22 coherent base change and M22 field abelian/tori theory. | Read SGA 7/Milne arithmetic proofs and independent source for good reduction, étale base change and Néron models; fix base/residue-characteristic conditions. |
| AG-SPACE-1 spaces/stacks/derived | AV-13/15/17 descent and selected Stacks groupoid/quotient results. | Select exact contracts; read relevant Stacks chapters and independent full treatment. Keep quotient sheaves, spaces and stacks distinct. |
| AG-GS-BASE-1 add-on | AV-13/15/17; Stacks [03BM] only finite-locally-free affine equivalence relations. | SGA 3, Stacks groupoid/descent proofs, plus independent source for selected arbitrary-base group/action/torsor representability. |
| AG-RED-SG-1 add-on | M22 field Thm. 23.55 is narrower than integral group schemes. | Read Demazure/SGA 3 XXV and second source for integral split reductive existence/base change from root data. |
| AG-GIT-HM-1 add-on | AG-ACT-4; Brion expressly omits criterion. | Read MFK or Dolgachev and independent proof for a fixed complex reductive group and linearization. |

Other roadmap branches (moduli of curves/stable maps, Quot, Picard/Albanese
schemes, torsors over general bases, and further deformation theory) are not
buildable claims. Choose an exact theorem contract, then obtain a full proof
source and independent treatment before assigning IDs.

## Reconciled publication census

Counts below are from plan-spec.json’s pages array, grouped by published
Scheme Theory page slugs and checked against referenced item files/frontmatter.
The check sums A and B items for the 13 published Scheme pairs, then checks
each A theorem-like destination for published status and a Proof section.

| AV | A slug | A | B slug | B |
|---|---|---:|---|---:|
| AV-9 | presheaves-sheaves-stalks-and-sheafification | 29 | presheaves-sheaves-stalks-and-sheafification-examples | 9 |
| AV-10 | sheaf-operations-exactness-ringed-spaces-and-module-pullback | 30 | sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples | 9 |
| AV-11 | affine-schemes-and-the-structure-sheaf | 30 | affine-schemes-and-the-structure-sheaf-examples | 7 |
| AV-12 | schemes-subschemes-and-morphisms-locally-of-finite-type | 31 | schemes-subschemes-and-morphisms-locally-of-finite-type-examples | 8 |
| AV-13 | fibre-products-base-change-and-scheme-theoretic-fibres | 42 | fibre-products-base-change-and-scheme-theoretic-fibres-examples | 11 |
| AV-14 | diagonals-separated-morphisms-and-valuative-uniqueness | 29 | diagonals-separated-morphisms-and-valuative-uniqueness-examples | 8 |
| AV-15 | finite-proper-and-projective-morphisms | 49 | finite-proper-and-projective-morphisms-examples | 9 |
| AV-16 | kahler-differentials-conormal-sequences-and-infinitesimal-lifting | 33 | kahler-differentials-conormal-sequences-and-infinitesimal-lifting-examples | 9 |
| AV-17 | flat-smooth-and-etale-morphisms | 77 | flat-smooth-and-etale-morphisms-examples | 9 |
| AV-18 | quasi-coherent-and-coherent-sheaves-and-vector-bundles | 40 | quasi-coherent-and-coherent-sheaves-and-vector-bundles-examples | 10 |
| AV-19 | proj-projective-schemes-twisting-sheaves-and-ampleness | 38 | proj-projective-schemes-twisting-sheaves-and-ampleness-examples | 10 |
| AV-21 | sheaf-cohomology-cech-cohomology-and-comparison | 63 | sheaf-cohomology-cech-cohomology-and-comparison-examples | 10 |
| AV-22 | cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes | 56 | cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes-examples | 12 |
| **Total** |  | **547 A** |  | **121 B** |

Therefore 547 A + 121 B = 668 placements. AV-9–AV-13 are 162 A + 44 B
=206. AV-20 and AV-23–AV-26 have empty planned 0/0 A/B slots; AV-7/8 are
prose-only, with no pair pages. The theorem-like destination scan found 375
Scheme Theory and 212 Algebraic Geometry A-page theorem/lemma/corollary/
proposition destinations. All 587 referenced files are published and contain
a Proof section. This is a destination/status audit, not an independent
re-judgment of every proof.

| Pair | Published A slug / plan-spec A | Published B slug / plan-spec B | Frontmatter/status reconciliation |
|---|---|---|---|
| AV-1 | `affine-algebraic-sets-and-coordinate-rings` / 22 | `affine-algebraic-sets-and-coordinate-rings-examples` / 7 | Both published. |
| AV-2 | `morphisms-local-rings-and-rational-maps-of-affine-varieties` / 23 | `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples` / 7 | Both published. |
| AV-3 | `projective-algebraic-sets-projective-morphisms-and-cones` / 25 | `projective-algebraic-sets-projective-morphisms-and-cones-examples` / 7 | Both published. |
| AV-4 | `products-segre-and-veronese-embeddings-and-grassmannians` / 25 | `products-segre-and-veronese-embeddings-and-grassmannians-examples` / 8 | Both published. |
| AV-5 | `dimension-constructible-images-and-dimensions-of-fibres` / 46 | `dimension-constructible-images-and-dimensions-of-fibres-examples` / 10 | Both published. |
| AV-5a | `algebraic-differentials-separability-and-smooth-local-presentations` / 27 | `algebraic-differentials-separability-and-smooth-local-presentations-examples` / 6 | Both published. |
| AV-6 | `zariski-tangent-spaces-regular-points-smoothness-and-bertini` / 43 | `zariski-tangent-spaces-regular-points-smoothness-and-bertini-examples` / 17 | Both published by Frontier-36 commit `fc59133d593f6883e00f24ef5084b0dd550ff7cf`; supersedes stale 42/17 and 27/9 previews. |
| AG-P2 | `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface` / 49 | `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface-examples` / 1 | Plan-spec A IDs include 1 shared definition (48 new A + 1 shared A + 1 new B = 50 unique IDs). A frontmatter has 50 placements because it repeats the B example; B has 1 placement, 51 total. All 50 unique IDs published. |
| AG-LIE | `smooth-projective-serre-duality-and-flag-variety-line-bundles` / 39 | `smooth-projective-serre-duality-and-flag-variety-line-bundles-examples` / 3 | Both published by the same commit; zero published consumers. |
| **Total** | **299 A** | **66 B** | **365 plan-spec placements across nine pairs.** |

## Source access record

The source reports below record full-text retrieval/ranges rather than search
snippets. After the initial read, the independent second audit corrected the
invalid doubled-origin counterexample in `source-brion-actions.md` and updated
`source-stacks.md` with the current [07S6] hypothesis and resolved comment;
the PDF hashes and retrieval records remain intact. The reports are
source-access logs, not substitutes for the local proof routes in the matrix.

| Source | Recorded full-text access | Use and limitation |
|---|---|---|
| Vakil, The Rising Sea, 2025-10-21 | source-vakil.md: author-hosted complete PDF, 852 pages, HTTP 200, 9,643,655 bytes, SHA-256 d07177aa0317c13490c170fc6ccc6a2ee07989a9120d9958ed3453eefe5b2784; complete extraction and close-read ranges are recorded there. | Blowup charts, Proj, curve and duality comparisons. Curve resolution is an exercise route, not a finished AV-26 proof. |
| Stacks Project | source-stacks.md: official tag pages and full dependency-linked HTML opened; tag routes and complete proof checks are listed there. A targeted refresh on 2026-09-30 retrieved [0E31] and [0B5B, 0E8U, 0BY6]; the independent second audit refreshed [07S6] (full HTML, byte count, and SHA-256 are recorded in `second-audit.md`). | [03GT]/[02LS], [051T]/[0529], [07VJ], and curve-on-surface [0BI4], [0BI5], [0BI7], [0BI8], [0BIC]. Section 53.4 [0E31] states `ω_X≅Ω_{X/k}` for a smooth curve and gives abstract duality; §53.5 [0B5B] and §§53.7–53.8 [0E8U, 0BY6] check curve RR/degree consequences. [07S6] gives a finite-locally-free groupoid quotient only with the strengthened closed-subset hypothesis recorded above. These sources do not justify the naive coefficient-trace formula at inseparable closed points. Used as source checks, not substitutes for local proofs. |
| Milne, Algebraic Groups | source-milne-groups.md: official author PDF, corrected 2022 edition, 4,838,013 bytes, SHA-256 f2ddd8fa4d263085f173934664b246007a2c0bd539739b7c82de39bfb5d21f40; theorem/section read ranges and imports are recorded there. | Source-gated group roadmap. Schwarz–Brion, Demazure/SGA 3, Steinberg, Ado/Engel, and abelian-projectivity imports remain unread and unclaimed. |
| Brion, Introduction to Actions of Algebraic Groups | source-brion-actions.md: publisher full 23-page PDF, SHA-256 1abc97e4b6ff41d68c4b900020709bc2ccca3e01d965d86cbd4c961a4ed0eef2. | Complex actions/GIT checks; reductivity proof is deferred and projective GIT Prop. 1.35 is a sketch. Corrected the invalid doubled-origin counterexample. |

## Repairs and validation

Repairs are in the main AV plan, expansion roadmap, amendment notes, and this
audit: AV-1 scope, AV-6 census/cex status, stale AV-12/15/16/17/22 suppliers,
AV-23 promise/destination boundary, AV-25 residue hypotheses and all-field
abstract duality route, AV-20 local-factorial boundary, AV-26 delta/contact proof,
the expansion census and AG-P2 arithmetic, Brion counterexample, Barsotti–
Chevalley gate, and AG-CRES/AV-26 separation. One unique source-gated
AG-CHOW-1 contract is retained in the expansion roadmap.

Final validation is recorded below after the prose edits:
1. `node tools/validate-plan.mjs research/plan-spec.json` passed. It reports
   1,624 pages (807 A, 807 B, 5 already published), 21,477 new items and
   22,477 existing IDs available; 21,476 of the 21,477 planned item IDs
   already have files; the declared page order is acyclic and
   consistent, with no item-level cycles, forward references, B-page
   dependencies, or unresolved IDs among the 1,300 planned pages with item
   lists. The validator notes 319 planned pages without item lists, so this
   result does not validate future expansion candidates.
2. Manifest/frontmatter reconciliation gives 13 published Scheme pairs,
   547 A + 121 B = 668 placements; AV-9--AV-13 are 162 A + 44 B = 206.
   The published AG pairs contribute 299 A + 66 B = 365 plan-spec placements.
   AG-P2 has 48 new A IDs + 1 shared published A ID + 1 new B ID; frontmatter
   has 50 A placements and 1 B placement, 51 total placements across 50
   unique IDs. Published AV/AG theorem-like A destinations are checked against
   item status and proof sections: 375 Scheme Theory and 212 Algebraic
   Geometry destinations, all published with a `Proof` section. The 24 future
   pair contracts contain 146 candidate A/B IDs: all 146 are unique, with no
   collision against `items/` or plan-spec IDs. The explicit dependency/order
   edges form a DAG with zero cycles. These roadmap checks are separate from
   the plan validator; three additional gated branches have no item IDs yet.
3. `git diff --check` passed. The trailing-whitespace scan over the audited
   prose files found no matches.

The exact page-status boundary is part of the result: 13 published Scheme
Theory pairs; AV-20 and AV-23–26 empty 0/0 planned slots; AV-7/8 prose-only
with no pair pages. The approved active 30-pair scope is unchanged.

**Post-audit page registration (2026-09-30).** At the owner's request, the 24
audited expansion contracts as 48 empty future page rows in `plan-spec.json`
at orders 871--918: seven Scheme Theory pairs and seventeen Algebraic
Geometry pairs. Their 146 proposed item IDs remain prose obligations, and
their open source/proof gates remain in force. The current plan validator
passes with 367 planned pages carrying no item lists. None of the new page
IDs is in the active 30-pair scope.
