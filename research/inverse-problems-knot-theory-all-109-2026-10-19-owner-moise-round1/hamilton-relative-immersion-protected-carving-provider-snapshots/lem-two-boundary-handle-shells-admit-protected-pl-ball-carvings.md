---
id: lem-two-boundary-handle-shells-admit-protected-pl-ball-carvings
kind: lemma
title: "Boundary handle shells admit protected piecewise linear ball carvings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-invariance-of-domain
  - thm-jordan-brouwer-separation
  - lem-locally-finite-pl-cyclic-manifolds-span-boundary-annuli
  - thm-finite-pl-schoenflies-in-dimension-three
  - lem-finite-convex-cell-complexes-admit-compatible-triangulations
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is explicitly inherited from the published invariance-of-domain and Jordan separation suppliers used to locate the PL Schoenflies ball in the supplied TOP handle. The local spanning disks/annulus introduce no choice. No choice-free TOP consumer is silently upgraded."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "A. J. S. Hamilton, The triangulation of 3-manifolds"
      url: "https://academic.oup.com/qjmath/article-abstract/27/1/63/1577698"
      locator: "Printed p.67, k=1,2 protected ball D: one type(0,2) annulus for k=1, and two type(0,1) disks for k=2. Actual spanning and PL parameter constructions are supplied below."
---

## Statement

Assume full AC. For $(k,n)=(1,2)$ or $(2,1)$, write $B^j=[-1,1]^j$ and $rB^j=[-r,r]^j$. Let $h:B^k\times\mathbb R^n\to\mathbb R^3$ be a topological embedding which is PL on a neighborhood of $\partial B^k\times\mathbb R^n$ in the standard source structure. Supply the pulled-back PL manifold structure $\Sigma=h^{-1}(\text{standard PL})$ on this handle, with its locally finite compatible triangulation; in particular $h$ is a PL homeomorphism from this supplied structure to its image. This structure agrees with the standard product structure near its boundary. The availability of these stipulated PL charts and triangulation is input, not an assertion about an arbitrary TOP manifold.

There are compact finite $\Sigma$-PL properly embedded surfaces
$$T\subset B^k\times\bigl(\operatorname{Int}(2B^n)\setminus B^n\bigr),\qquad \partial T=\partial B^k\times\tfrac32\partial B^n,$$
consisting of one annulus when $(k,n)=(1,2)$ and two disks when $(k,n)=(2,1)$. With
$$L=\partial B^k\times\tfrac32 B^n,$$
the union $S=T\cup L$ is a finite $\Sigma$-PL sphere bounding a parametrized finite $\Sigma$-PL three-ball $D$ such that
$$D\subset B^k\times2B^n,\qquad B^k\times B^n\subset\operatorname{Int}_{B^k\times\mathbb R^n}D,\qquad D\cap(\partial B^k\times\mathbb R^n)=L.$$
Here the interior is RELATIVE to the handle; $D$ is boundary-attached, and its attaching frontier to the rest of the handle is $T$. No irreducibility or prime-factor assertion about the complement of $D$ is concluded. In particular retaining this $D$ during a subsequent irreducible-core replacement is a separate step.

## Facts & Assumptions

**Given:** Full AC, the embedded handle and its stipulated locally finite pulled-back PL structure, agreeing with the standard product structure near its boundary.

[A1] Full AC. [[def-axiom-of-choice]]

[F1] Injective continuous maps between open three-dimensional charts are open, and an embedded topological sphere in $\mathbb R^3$ separates it into its bounded and unbounded complementary components with that sphere as their common boundary. [[thm-invariance-of-domain]] [[thm-jordan-brouwer-separation]]

[F2] In an already given locally finite orientable PL three-manifold, nullhomotopic boundary circles bound finite PL disks. In a cyclic such manifold, the two essential boundary circles of a proper continuous annulus with supplied PL boundary collars bound a finite embedded PL annulus. [[lem-locally-finite-pl-cyclic-manifolds-span-boundary-annuli]]

[F3] A supplied finite PL sphere in standard PL $\mathbb R^3$ bounds a parametrized finite PL ball; its exterior is connected and unbounded. [[thm-finite-pl-schoenflies-in-dimension-three]]

[F4] Finite convex product cells have compatible triangulations. [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]

## Proof

1.1 Put $H=B^k\times\mathbb R^n$ and $G=B^k\times(\operatorname{Int}(2B^n)\setminus B^n)$. This is a relatively open PL submanifold of the given $\Sigma$-manifold, with boundary exactly its trace on $\partial H$. It satisfies the relatively open variant of [F2]: every compact image and its finite collar lie in finitely many existing $\Sigma$ stars whose closed union can be taken inside $G$, and that supplier uses only their finite mixed-vertex neighborhoods. Thus no separate global triangulation of the open shell is selected, and the coordinate faces $B^k\times\partial B^n$ themselves are not assumed $\Sigma$-PL. The inherited orientation is given by $h$. [given, F2, F4, construct]

2.1 If $(k,n)=(2,1)$, $G$ has two components $B^2\times(1,2)$ and $B^2\times(-2,-1)$, each with trivial fundamental group by its explicit TOP product contraction. Their boundary circles $C_\pm=\partial B^2\times\{\pm3/2\}$ are finite PL curves, since the structure is standard near $\partial H$. They are nullhomotopic by the two continuous coordinate disks $B^2\times\{\pm3/2\}$. Apply [F2]'s finite localized disk assertion in each component, giving finite PL disks $T_+,T_-$ with these exact boundaries. Their interiors are in $\operatorname{Int}H$ and their two shell components are disjoint, so the disks are disjoint. Put $T=T_+\sqcup T_-$. The prescribed $L=\partial B^2\times[-3/2,3/2]$ is a finite PL annulus in $\partial H$. Its union with these disks is a finite PL sphere: match their finite polygonal boundary parameters and triangulate the product seams. [F2, F4, step 1.1, construct]

2.2 If $(k,n)=(1,2)$, $G=B^1\times(\operatorname{Int}(2B^2)\setminus B^2)$ has cyclic infinite fundamental group. Radial square-shell coordinates retract its annular factor to a polygonal circle; contraction of $B^1$ gives the assertion directly. Its two boundary circles $C_\pm=\{\pm1\}\times\tfrac32\partial B^2$ represent nonzero generators. The coordinate cylinder $B^1\times\tfrac32\partial B^2$ is a proper continuous annulus in $G$. On short source boundary collars it is PL in $\Sigma$: its compact boundary lies in the open region where $h$ is PL for the standard product structure, so one uniform positive collar width works. The rest of its source interior lies in $\operatorname{Int}H$. Thus every hypothesis of [F2]'s cyclic spanning assertion is met. It supplies a finite PL annulus $T$ with these exact boundaries. Its union with the two given PL disks $L=\{\pm1\}\times\tfrac32 B^2$ is a finite PL sphere, by the same finite boundary matching. It meets $\partial H$ precisely in $L$. [F2, F4, step 1.1, construct]

3.1 In either case $S=T\cup L$ has a supplied standard PL sphere parameter: cut the annular factor along one transverse polygonal strip, extend the boundary disk parameters across the resulting polygonal disks, and restore that strip; equivalently the supplied disk and annulus parameters give the usual two disks joined by a cylinder model. This is a finite product-cell construction under [F4]. Its map under $h$ is therefore a finite PL embedded sphere in the ALREADY standard ambient $\mathbb R^3$. Compactness makes all subdivisions finite. By [F3] its bounded complementary closure $D_h$ is a parametrized finite PL ball. We shall locate it before pulling its parameter back to the handle. [F3, F4, step 2.1, step 2.2, construct]

4.1 The compact set $K=h(B^k\times2B^n)$ is a parametrized TOP closed three-ball. Its image of the product interior is open by [F1], is bounded and connected, and has boundary exactly the image of the product boundary. Compactness gives the inclusion of this topological boundary; local inside and outside product charts, using the known PL boundary charts along $\partial H$, give the reverse inclusion. [F1]'s separation theorem then identifies that interior as the bounded component of $\mathbb R^3\setminus\partial K$ and $\mathbb R^3\setminus K$ as its connected unbounded exterior. Since $h(S)\subset K$, that exterior lies in the unbounded component of $\mathbb R^3\setminus h(S)$. Thus $D_h\subset K$. Indeed a point of $D_h$ outside $K$ would be in that unbounded component, contrary to [F3]. This step uses the stated TOP separation supplier and does not claim that the outer coordinate faces of $K$ are PL. [A1, F1, F3, step 3.1, construct]

5.1 The relative interior $\operatorname{Int}(B^k)\times B^n$ of the protected block is connected and disjoint from $S$, since every point of $T$ is in the outer shell and $L$ lies on $\partial H$. It lies on the bounded side. To see the side, take a point $q$ of $\partial B^k\times\{0\}$ away from the product corners. A sufficiently small known PL boundary chart about $h(q)$ makes $h(H)$ a half-space and $h(S)=h(L)$ its boundary plane there. The outward side is outside $K$ and therefore belongs to the unbounded side by step 4.1. The inward side is consequently in $\operatorname{Int}D_h$. A protected-block point sufficiently close to $q$ from inside $B^k$ lies on this inward side. Connectedness and disjointness from the sphere put every point of $h(\operatorname{Int}(B^k)\times B^n)$ there. Closure gives $h(B^k\times B^n)\subset D_h$. All its points on $\partial H$ are in the relative interior of $L$, away from $\partial T$, and the same half-space chart makes them interior to $D_h$ RELATIVE to $h(H)$. Interior points were already strictly inside. Thus the entire protected block is in that relative interior. [F1, F3, step 4.1, construct]

6.1 No point of $D_h\cap h(\partial H)$ can be an interior point of $D_h$ in $\mathbb R^3$, since $D_h\subset K$ and every point of this portion of $\partial K$ has an outward local half-space disjoint from $K$. It must therefore be on $h(S)$. But $S\cap\partial H=L$, so this trace is exactly $h(L)$. Pull back the finite PL ball parameter of $D_h$ along the stipulated PL map $h^{-1}$ on its image. This gives a parametrized finite $\Sigma$-PL ball $D$ with all the asserted inclusions and trace. Along $\partial T$ the original boundary charts and the proper PL disk or annulus charts give the usual quadrant windows, so the complementary frontier is precisely $T$ and can be cut along by finite subdivisions. The proof establishes the boundary-attached carving and nothing about irreducibility after its later removal or reattachment. Full AC remains explicit through the actual TOP separation step. [A1, F1, F3, F4, step 3.1, step 4.1, step 5.1, construct] ∎
