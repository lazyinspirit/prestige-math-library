---
id: lem-complete-single-system-heegaard-cuts-admit-real-complex-models
kind: lemma
title: "A complete single-system Heegaard cut admits a real complex model"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-finite-planar-hole-boundary-maps-extend-with-prescribed-collars, lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes, thm-fundamental-theorem-on-flows, thm-euclidean-inverse-function-theorem, lem-real-involution-reflects-boundary-disks-to-holomorphic-spheres, lem-bounded-energy-empty-boundary-disk-model-is-open]
dependency_level: 10
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Section3.7 concerns special complex models for one attaching torus; the actual real model below uses a paired round-hole construction, not target connected-sum degeneration"
---

## Statement

Assume Countable Choice. Let $U$ be an oriented smooth handlebody with boundary $\Sigma$, and let $D_1,\ldots,D_h$, $h\ge1$, be disjoint proper compression disks whose cut manifold, after the usual collar rounding, is an actual smooth ball. Write $\alpha_i=\partial D_i$. Let $\beta$ be any finite union of smooth embedded circles transverse to the $\alpha_i$; it may in particular be the disjoint second attaching system of a singly pointed Heegaard diagram.

There are an orientation-compatible Riemann surface structure $j$ on the actual surface $\Sigma$, a smooth antiholomorphic involution $\rho$, and one further embedded circle $\delta$ such that
$$\operatorname{Fix}(\rho)=\alpha_1\sqcup\cdots\sqcup\alpha_h\sqcup\delta.$$
At every $\alpha$–$\beta$ crossing there is a $j$-holomorphic coordinate taking the local $\alpha$ arc to the real line and the local $\beta$ arc to the imaginary line. These crossing charts can be chosen with disjoint closures. Thus at every generator of two transverse product tori in $\operatorname{Sym}^h(\Sigma)$, their actual standard complex product chart has $T_\alpha=\mathbb R^h$ and $T_\beta=i\mathbb R^h$ locally.

For this standard symmetric-product structure no nonconstant holomorphic sphere intersects $T_\alpha$, and every smooth holomorphic closed disk with boundary on $T_\alpha$ is constant. For each prescribed finite energy bound this disk emptiness persists in a sufficiently small smooth neighborhood among structures equal to the standard structure as full endomorphisms on $T_\alpha$.

This constructs a model for ONE complete attaching system with $h$ disks cutting to ONE ball. It does not construct a common real model fixing two transverse attaching systems, assert an empty disk model for $T_\beta$ with this same $j$, provide $h+k$ real ovals for multipointed $k>1$, or prove general degeneration counts, their deformation invariance or Floer invariance.

## Statement references

[[def-countable-choice]]

[[lem-finite-planar-hole-boundary-maps-extend-with-prescribed-collars]]

[[lem-real-involution-reflects-boundary-disks-to-holomorphic-spheres]]

[[lem-bounded-energy-empty-boundary-disk-model-is-open]]

## Facts & Assumptions

**Given:** The actual oriented handlebody, complete disk cut to a smooth ball, its attaching circles, and the transverse finite curve system. A smooth ball here includes the existence of a diffeomorphism with the standard ball; no smooth three-dimensional Schoenflies assertion is inferred from a mere embedded sphere.

[F1] [[lem-finite-planar-hole-boundary-maps-extend-with-prescribed-collars]] gives the actual finite planar disk-with-holes diffeomorphism with all assigned boundary maps and collar germs under Countable Choice.

[F2] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] supplies finite smooth bump localization near a compact set. [[thm-fundamental-theorem-on-flows]] gives smooth short flows of a smooth vector field. [[thm-euclidean-inverse-function-theorem]] gives local inverses and the local graph of a transverse curve.

[F3] [[lem-real-involution-reflects-boundary-disks-to-holomorphic-spheres]] proves actual sphere avoidance and disk emptiness for a supplied real model with $h+1$ fixed ovals and its $h$-fold product torus. [[lem-bounded-energy-empty-boundary-disk-model-is-open]] proves persistence at each finite energy threshold when the full structure on that torus is fixed.

## Proof

1.1 Cutting along the given disks presents $\Sigma$ as the surface $P$ obtained from the boundary sphere of the cut ball by removing the interiors of its $2h$ disk faces, with paired boundary identifications $g_i:\partial E_i^+\to\partial E_i^-$. Choose one smooth parametrization of that ball by the standard ball; this is one finite choice permitted by the actual ball hypothesis. It identifies its boundary with the usual oriented sphere. The finitely many disk-face corners can be rounded in their product neighborhoods by replacing each quadrant corner with one fixed monotone smooth arc; transporting the face boundaries and their collars through this rounding leaves a surface diffeomorphic to the original cut surface. Its faces are disjoint smooth disk regions on the sphere. The identifications $g_i$ reverse the boundary orientations induced by $P$: its two sides rejoin to the oriented original surface, so their outward boundary normals point oppositely in the signed surface collar. This is an actual description of the compression-disk cut, not a homological recognition of a ball. [given, construct]

2.1 We choose source collars that also remember the transverse curves. An oriented embedded circle in an oriented surface has a smooth transverse vector field near it: in finitely many oriented circle charts choose vectors on one prescribed positive side and combine them with the finite smooth bump localization in [F2]. Along the circle their positive normal components remain positive, so the combination is transverse. The short flow gives $c(p,t)$ for $p$ on that circle and signed small $t$. Its derivative at $t=0$ consists of the tangent and this transverse vector and is invertible. [F2] and compactness give one common width and injectivity after shrinking: a collision sequence at widths tending to zero would limit to one circle point and violate its local inverse. Distinct circles have disjoint such collars. The $\beta$ crossings are finite by transversality and compactness. In a preliminary collar with angular coordinate $s$, each local $\beta$ arc is $s=s_j(t)$ by [F2]. Choose disjoint small angular intervals about its crossings $s_j(0)$ and smooth cutoffs $\chi_j$ supported there and equal to one near those points. The change $$ (s,t)\longmapsto\left(s+\sum_j\chi_j(s)(s_j(t)-s_j(0)),t\right)$$ is a smooth collar diffeomorphism for small signed $t$, because its angular derivative tends uniformly to one. It is understood in the separate local angular lifts, so is periodic globally. Composing the preliminary collar with it makes the actual $j$th $\beta$ arc have constant circle parameter $s_j(0)$ for both signs of $t$. Cut these signed collars at $t=0$ to prescribe paired inward collars on $P$, one with parameter $t\ge0$ and its partner with parameter $-t\le0$, with the same underlying point $p\in\alpha_i$. [F2, step 1.1, construct, algebra]

3.1 Construct a standard target cut model $P'$ inside the Riemann sphere. Choose $h$ small pairwise disjoint round closed disks $F_i^+$ strictly in the upper half-plane and their conjugate disks $F_i^-$ strictly in the lower half-plane, all disjoint from the real projective circle. Remove their interiors. Pair their rims by complex conjugation $R(z)=\overline z$. Choose any orientation-preserving circle diffeomorphism $b_i^+:\partial E_i^+\to\partial F_i^+$, and set $$b_i^-=R\circ b_i^+\circ g_i^{-1}.$$ This map too preserves the boundary orientation of the cut surfaces, since $R$ and $g_i$ both reverse it. In a disk pair with centers $a_i,\overline{a_i}$ and radius $r_i$, parameterize its target inward collars by $$c_i^+(x,t)=a_i+r_i e^t e^{-ix},\qquad c_i^-(x,t)=\overline{a_i}+r_i e^t e^{ix},\qquad t\ge0.$$ These lie outside the deleted disks and are paired by $R$. Here $x$ is the angular parameter determined by $b_i^+$, so the prescribed map on the negative rim uses exactly the same $x$. Choose all collar widths small enough to be disjoint. [step 1.1, step 2.1, construct, algebra]

4.1 Apply [F1] to realize these boundary assignments and collars by a diffeomorphism $B:P\to P'$. To reduce the spherical regions to its stated planar form, put the stereographic pole inside one chosen source face, and inside its assigned target face for the target parametrization. That face is then the unbounded disk side of its boundary circle; its complement is a bounded smooth Jordan disk, and all remaining faces are finite disjoint disk holes inside it. Thus the outer boundary and all inner boundary assignments are exactly those of [F1]. The prescribed collars transport through these smooth sphere coordinates. The resulting $B$ satisfies $B g_i=R B$ on the paired rims and satisfies the exact paired collar formulas in steps2.1–3.1. Form the quotient $M$ of $P'$ by these finitely many rim identifications. Away from the seams keep its sphere complex charts. Near a positive rim use the local branch $$w_+(z)=i\log((z-a_i)/r_i),$$ and near its paired negative rim use $$w_-(z)=-i\log((z-\overline{a_i})/r_i).$$ On their collars these are $x+it$ and $x-it$ respectively, and they agree on the identified rim. They therefore give one complex coordinate across the seam. Local branch changes add real multiples of $2\pi$, so all seam transitions are holomorphic; their transitions to the interior charts are the displayed holomorphic logarithms. Distinct seam neighborhoods can be disjoint. These charts also give the smooth finite boundary gluing a Hausdorff manifold structure: two points away from an identified pair separate in the compact cut surface; near a seam the signed collar gives the separating local disk. Compactness follows from the quotient of compact $P'$. Hence they define an actual closed Riemann surface, without deriving integrability from an arbitrary smooth almost complex tensor. [F1, step 2.1, step 3.1, construct, algebra]

5.1 The map $B$ descends to a smooth diffeomorphism $\overline B:\Sigma\to M$. In fact its boundary compatibility gives the bijective quotient map, and its prescribed collar formulas identify a source signed collar $(p,t)$ with the target seam chart $$w=x(b_i^+(p))+it.$$ This is a smooth local diffeomorphism across the original $\alpha_i$, with smooth inverse, and off those circles it is already $B$. Transport the complex charts of $M$ by $\overline B$ to get the claimed orientation-compatible Riemann surface structure on the actual $\Sigma$. Conjugation of $P'$ descends to an antiholomorphic involution of $M$: in a seam chart it sends $x+it$ to $x-it$, and away from seams it is ordinary conjugation in sphere charts. Its fixed set is exactly all $h$ seam circles and the real projective circle remaining inside $P'$. No other interior point of $P'$ is identified with its conjugate. Pull this involution back by $\overline B$. Its seam circles are the original $\alpha_i$; the pullback of the extra real projective circle is the embedded disjoint circle $\delta$. This proves the asserted exact fixed set. [step 3.1, step 4.1, construct, algebra]

6.1 In the source collars from step2.1, a $\beta$ arc through a crossing has constant $p$ and varying signed $t$. The holomorphic seam chart in step5.1 consequently takes that arc to a vertical straight line and $\alpha_i$ to a horizontal straight line. Translating their intersection to zero gives exactly the imaginary and real lines. Shrink the finitely many crossing charts to have disjoint closures and to meet no other attaching curves locally; transversality and the disjointness of curves within each attaching system permit this. For a product-torus generator, its $h$ entries lie on different disjoint $\alpha$ circles and are therefore distinct. Use its disjoint crossing charts as the standard ordered-root chart of the symmetric product. The quotient is injective on this product of disjoint disks, and the elementary-symmetric description is a holomorphic local coordinate there; equivalently every root is simple and its inverse coordinate is holomorphic by the one-variable implicit-function argument. In these actual product coordinates the two product tori are precisely $\mathbb R^h$ and $i\mathbb R^h$. [F2, step 2.1, step 5.1, construct, algebra]

7.1 The $h+1$ fixed ovals just constructed satisfy [F3], with one point on each original $\alpha_i$ and the remaining oval $\delta$. It follows that the standard symmetric product has no nonconstant sphere through $T_\alpha$ and no nonconstant smooth disk with boundary there. The torus is an embedded compact totally real product, as verified in [F3]. The last assertion of [F3] then gives its genuine bounded-energy empty neighborhood under full equality of the structure on $T_\alpha$. Every construction above involved a finite number of faces, collars, charts, circle choices and extensions, besides the stated Countable Choice suppliers. This is a model for one attaching system only: no involution fixing transverse $\alpha$ and $\beta$ circles simultaneously, no empty $T_\beta$ disk count for this same surface structure, and no extra ovals for the larger multipointed symmetric product have been inferred. [F3, step 5.1, step 6.1, construct] ∎
