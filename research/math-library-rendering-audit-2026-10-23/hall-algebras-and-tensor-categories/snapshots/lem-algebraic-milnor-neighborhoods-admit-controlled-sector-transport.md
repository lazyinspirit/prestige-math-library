---
id: lem-algebraic-milnor-neighborhoods-admit-controlled-sector-transport
kind: lemma
title: "Algebraic Milnor neighborhoods admit controlled sector transport"
status: published
dependency_level: 0
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
- def-axiom-of-choice
- cor-dimension-of-image-plus-generic-fibre
- lem-zero-dimensional-classical-variety-finite
- lem-classical-variety-noetherian-components
- lem-dimension-nonempty-open-subset
- thm-generic-smoothness-characteristic-zero
- thm-heine-borel-rn
- cor-bolzano-weierstrass-in-rn
- lem-controlled-stratified-submersions-have-continuous-local-trivializations
- lem-complex-algebraic-stratifications-have-finite-conical-cochain-models
- lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model
- def-finite-complex-algebraic-whitney-stratification-and-control-data
- thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications
- lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions
- lem-whitney-stratifications-admit-compatible-control-data
- lem-compact-semialgebraic-families-admit-compatible-finite-triangulations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: "David Massey, The Sebastiani-Thom Isomorphism in the Derived Category"
    url: "https://arxiv.org/pdf/math/9908101"
    locator: "Lemma 1.2, pp. 3–4; complete eight-page source read. The cofinal-neighborhood step is expanded locally below."
---

## Statement

Assume AC. Let $X$ be a smooth affine complex variety, $f:X\to\mathbb C$ regular, $p\in f^{-1}(0)$, and $\mathcal S$ a finite complex algebraic Whitney stratification for which a bounded complex $A$ is constructible. There is a cofinal family of neighborhoods
$$N=X\cap B_\epsilon(a)\cap f^{-1}(T_\delta),\qquad T_\delta=\{z:|\operatorname{Re}z|<\delta,\ |\operatorname{Im}z|<\delta\},$$
with $p\in B_\epsilon(a)$, such that $f$ on the closed-ball model over $T_\delta\setminus\{0\}$ is proper and submersive on every interior and sphere-boundary stratum. It therefore admits continuous controlled stratum-preserving transport over compact base paths, preserving the sphere and its interior. Transport also gives the natural coefficient comparisons for $A$. In particular it applies to paths inside either half-rectangle $\operatorname{Re}z>0$ or $\operatorname{Re}z<0$. Centres $a$ need not equal $p$. The system may instead use circular function discs. For these choices the neighborhood and its positive-half-disc part have finite constructible cochain models, and their relative homology and cohomology are bounded finite-dimensional. Smooth affine charts give the corresponding local assertion on smooth finite-type complex varieties.

## Facts & Assumptions

**Given:** $X,f,p,\mathcal S,A$ as stated, and a closed affine embedding $X\subset\mathbb C^M$.

[F1] [[cor-dimension-of-image-plus-generic-fibre]], [[lem-classical-variety-noetherian-components]], [[lem-zero-dimensional-classical-variety-finite]] and [[lem-dimension-nonempty-open-subset]] give finite component decompositions, the generic fibre dimension formula, finiteness of zero-dimensional fibres and strict dimension drop for proper closed subsets.

[F2] [[def-finite-complex-algebraic-whitney-stratification-and-control-data]] gives the finite smooth complex algebraic Whitney strata and their incident tangent conditions. [[thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications]], applied to the identity and the prescribed zero fibre, refines them to respect $f=0$ while preserving input constructibility.

[F3] [[lem-controlled-stratified-submersions-have-continuous-local-trivializations]] constructs controlled lifts and jointly continuous local flows; for proper stratified submersions its compact-trapping argument gives whole-fibre transport over compact base paths.

[F4] [[lem-complex-algebraic-stratifications-have-finite-conical-cochain-models]], Proof, step 2.2, reconstructs constructible coefficients on local products from the finite fibre cochain complexes, naturally under base-ball restriction. This is a local coefficient reconstruction assertion, not a triangulation of a real function cut. Once finite triangulations have been constructed below, [[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]] gives their actual finite cochains, including deleted subcomplexes.

[F5] [[thm-generic-smoothness-characteristic-zero]] gives a nonempty target open over which a nonconstant morphism from a smooth irreducible complex stratum to the affine line is smooth; its algebraic complement has dimension zero and is finite by [F1]. A smooth locally standard presentation has surjective analytic differential in its Jacobian charts.

[F6] [[thm-heine-borel-rn]] makes closed bounded subsets of the ambient Euclidean space compact, and [[cor-bolzano-weierstrass-in-rn]] gives a convergent subsequence of each bounded sequence. Closedness keeps the limit in the chosen algebraic closed ball. For ambient dimension zero the space is a point and these conclusions hold directly.

[F7] [[lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions]] supplies, in every prescribed nonempty real open set of centres in this same affine embedding, a squared distance with finitely many stratum critical points across all input strata.

[F8] [[lem-whitney-stratifications-admit-compatible-control-data]] supplies control data on a finite real Whitney space; [[lem-compact-semialgebraic-families-admit-compatible-finite-triangulations]] then gives finite triangulations of compact controlled Whitney spaces relative to prescribed unions of strata. Its statement does not assert arbitrary-map triangulation.

[A1] [[def-axiom-of-choice]] is inherited through the cited dimension, generic-smoothness, controlled-flow, distance and triangulation suppliers [F1]–[F8]. Selecting finitely many strata and concatenating the specified transports introduces no additional choice principle.

## Proof

**Proof technique:** direct.

1.1 First refine as in [F2] to respect the zero fibre. On each irreducible component of a smooth stratum where $f$ is nonconstant, [F5] gives a nonempty open of the affine line over which its differential is onto. Its proper closed complement is finite by [F1]. There are finitely many stratum components, and constant strata have one value each, so excluding the finitely many nonzero exceptional values leaves no interior stratum critical point over a sufficiently small punctured disc. [F1, F2, F5, given, construct]

2.1 For a nonconstant stratum $S$ of dimension $s$, close in $\mathbb C^M\times(\mathbb C^M)^*$ the locus $C_S^\circ=\{(x,\xi):x\in S,\ f(x)\ne0,\ df|_{T_xS}\ne0,\ \xi|_{T_xS}\in\mathbb C\,df_x\}$. Its covector fibre has dimension $M-s+1$, so every component of its closure $C_S$ has dimension $M+1$. The function $f$ is nonconstant on each base component, and its zero fibre is a proper closed subset there. Hence $\Lambda_S=C_S\cap\{f(x)=0\}$ has dimension at most $M$. The closure includes base points in lower strata; no unproved relative Thom condition is being assumed. [F1, F2, step 1.1, construct, algebra]

3.1 Identify covectors with their coefficient vectors and consider $F:\Lambda_S\times\overline{\Lambda_S}\to\mathbb C^M\times\mathbb C^M$, $F(x,\xi,y,\eta)=(x-\eta,y-\xi)$. Its source has dimension at most $2M$: applying the generic-fibre formula to the projection of each product component gives the sum of the two component dimensions. For each dominant irreducible component [F1] gives zero-dimensional, hence finite, fibres on a nonempty target Zariski open; exclude the closed image closure of each nondominant component. A common nonempty open $O$ therefore has finite fibres. The real diagonal $a\mapsto(a,\bar a)$ meets $O$ densely in every real open set: a nonzero polynomial vanishing on its proper algebraic complement remains nonzero after the invertible substitution $(a,b)=(u+iv,u-iv)$, and cannot vanish on a real open box, by induction on the number of variables using the finite-root property of each nonzero one-variable polynomial. Intersect these finitely many good parameter sets for all the strata. [F1, step 2.1, construct, algebra]

3.2 On a complex tangent space $T_xS$ where $df$ is onto, put $\ell=d|x-a|^2|_{T_xS}$. At a transverse sphere point $\ell\ne0$. The restriction of $df$ to $\ker\ell$ then fails to be onto exactly when $\ell$ is a real linear combination of $\operatorname{Re}df$ and $\operatorname{Im}df$. Indeed a real covector on the target annihilating the image of $\ker\ell$ pulls back to a multiple of $\ell$, and the converse is immediate. A nontransverse sphere point is separately a bad boundary point: there $\ell=0$, so it also satisfies the covector inclusion below. Identifying real covectors with real parts of complex covectors, the obstruction is $\bar x-\bar a\in N^*_{S,x}+\mathbb C\,df_x$. [F2, step 2.1, algebra]

4.1 The good relative-conormal centre set of step 3.1 is Euclidean open and dense. Apply [F7] within its intersection with an arbitrarily small real open neighborhood of $p$, obtaining such a centre $a$ for which the ordinary distance has only finitely many critical points on all strata. In addition to $E_a$, avoid their finitely many critical distances when choosing the radius. Thus the sphere is transverse to all strata, including those inside $f=0$. The set $E_a=\{x\in X\cap f^{-1}(0):(x,\bar x-\bar a)\in\Lambda_S\text{ for some }S\}$ is finite: every such $x$ gives $(x,\bar x-\bar a,\bar x,x-a)$ in the finite fibre of $F$ over $(a,\bar a)$. Choose $\epsilon>|a-p|$ avoiding the finitely many distances $|x-a|$ for $x\in E_a$. This choice is cofinal. Inside a prescribed $B_R(p)$ choose $|a-p|<R/4$ and $\epsilon\in(R/3,R/2)$ avoiding those distances; then $p$ lies in the ball and its closed ball lies in $B_R(p)$. [F1, F7, step 3.1, choose, construct]

5.1 If no sufficiently small punctured tube avoided that obstruction on the sphere, there would be $x_j\in S\cap\partial B_\epsilon(a)$ with $f(x_j)\ne0$, $f(x_j)\to0$ and the obstruction of step 3.2. Compactness of $X\cap\overline B_\epsilon(a)$ and finiteness of the strata give a subsequence in one $S$ converging to $x_0\in X\cap\partial B_\epsilon(a)\cap f^{-1}(0)$. Step 3.2 gives $(x_j,\bar x_j-\bar a)\in C_S$, so its limit belongs to $\Lambda_S$. Thus $x_0\in E_a$ and $|x_0-a|=\epsilon$, contradicting step 4.1. There is consequently $\delta>0$ with no sphere obstruction for $0<|f|<\sqrt2\delta$, and shrink it also as in step 1.1. [F1, F6, step 1.1, step 2.1, step 4.1, step 3.2, assume-contra, discharge-contradiction]

6.1 Over the punctured rectangle, the sphere is transverse to every input stratum and $f$ is submersive on both its interior and boundary intersections by steps 1.1, 3.2 and 5.1. Transverse intersection with a smooth hypersurface preserves Whitney conditions: the limiting tangent planes intersect its tangent kernel in the expected dimension, and the first-order Taylor formula puts limiting fibre secants in that kernel. Thus the interior/sphere intersections are a finite Whitney stratification. The closed-ball tube is proper over this base since inverse images of compact base subsets are closed in the compact $X\cap\overline B_\epsilon(a)$. The actual hypotheses of [F3] therefore hold, and its transports preserve the boundary stratum and hence the interior. [F2, F3, F6, step 1.1, step 3.2, step 5.1, construct]

7.1 On a contractible half-rectangle, fixed ordered coordinate paths and [F3]'s compact-path transports give local products and inverses. The coefficient reconstruction of [F4] transports $A$ on these products; finite interval subdivisions glue the comparisons, and reversing transport gives inverse cochain maps. These local coefficient comparisons preserve the marked boundary and therefore restrict to the open-ball interior; the global finite fibre models are constructed in the final step below. Step 4.1 supplies a cofinal family; intersecting with arbitrarily small function rectangles retains cofinality at $p$. Smooth affine charts reduce the last assertion to this construction. This proves the transport assertion. [F3, F4, step 4.1, step 6.1]


8.1 Replace the rectangle by a small circular function disc and consider $W=X\cap\overline B_\epsilon(a)\cap\{|f|\le\delta\}$. The sphere is transverse to every input stratum by step 4.1, and the function-circle boundary and its sphere intersection are transverse by step 6.1, since $df$ restricted to the sphere is onto at nonzero values. Cutting the finite Whitney strata by these transverse boundary hypersurfaces gives a compact finite real Whitney space with its outer faces unions of strata. By [F8] it has a finite triangulation respecting those faces; removing them gives a finite deleted-subcomplex model for $U=X\cap B_\epsilon(a)\cap\{|f|<\delta\}$. The compact Milnor fibre with its sphere boundary has the same finite controlled Whitney construction. Its interior therefore has a finite deleted-subcomplex model. By step 7.1 the positive-half-disc part $U_+$ is a constructible fibre bundle with that interior fibre over a contractible half-disc, giving its finite cochain model. The homology and cohomology long exact sequences for $(U,U_+)$ then give bounded finite-dimensional relative homology and cohomology. In particular these rational groups are finite free. No triangulation of the real cut $\operatorname{Re}f=0$ or of an arbitrary map has been claimed. Together with step 7.1 this proves the stated conclusions, with AC exactly through [A1]. [A1, F4, F6, F8, step 4.1, step 6.1, step 7.1] ∎
