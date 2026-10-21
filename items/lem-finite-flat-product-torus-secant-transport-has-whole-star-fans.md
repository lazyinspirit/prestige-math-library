---
id: lem-finite-flat-product-torus-secant-transport-has-whole-star-fans
kind: lemma
title: "Finite torus secant transport in a supplied flat product has whole-star fans"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [def-relative-smooth-triangulation-and-projection-preserving-fitting, lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps, lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation, lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, thm-covering-space-lifting-criterion, thm-banach-fixed-point]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. The ambient flat product and the finite smooth torus parameters are supplied. Periodic shape-controlled grids, finite derivative/separation bounds and finite compatible subdivisions are explicit; no arbitrary smooth or topological triangulation theorem is invoked."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "James R. Munkres, Elementary Differential Topology (1966)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/munkresdiff.pdf"
      locator: "Sections8–9 via the fully read local stability and shape-controlled secant suppliers. The periodic flat-product transport and its entire ambient differential-fan verification are supplied here; no arbitrary-marking compatibility is inferred."
---

## Statement

Let $X=(\mathbb R^2/\mathbb Z^2)\times[0,1]$ have its supplied flat smooth and product PL structures. Let $S_i\subset\operatorname{Int}X$ be a finite disjoint family of smoothly parametrized embedded two-sided tori. Then there exist disjoint finite locally flat PL tori $P_i$, given PL product collars and a homeomorphism $K:X\to X$, equal to the identity outside arbitrarily small disjoint tubular neighborhoods, with $K(P_i)=S_i$. The map $K$ is smooth on every closed simplex of a given finite ambient triangulation, and its differential fan is injective on every whole ambient star. Thus every PL subpolyhedron in a finite compatible refinement is carried to a finite whole-star piecewise smooth subpolyhedron.

More precisely the collars have source coordinates $(u,r)\in T^2\times[-\epsilon,\epsilon]$ and maps $L_i$ and $E_i$, with $L_i$ PL, $E_i(u,0)$ the prescribed smooth torus parameter, and $K\circ L_i=E_i$ near $r=0$. Here $E_i$ is an ordinary smooth normal collar, so its smooth normal coordinate is exactly the PL collar coordinate $r$ after transport. The homeomorphism is isotopic to the identity through finite piecewise smooth homeomorphisms. This last assertion is a continuous ambient isotopy used for topological transport; no jointly smooth ambient isotopy is claimed for $K$.

## Facts & Assumptions

**Given:** The fixed flat product structures and finite disjoint smooth torus parameters in the Statement.

[F1] Shape-controlled finite secants converge strongly in piecewise $C^1$; whole-star embeddings are stable under such approximation ([[lem-relative-shape-controlled-secants-approximate-smooth-simplex-maps]], [[lem-piecewise-smooth-embeddings-are-stable-under-fine-c-one-approximation]], full proofs).

[F2] The whole-star differential-fan convention is [[def-relative-smooth-triangulation-and-projection-preserving-fitting]]. Finite embedded PL polyhedra admit compatible ambient subdivisions ([[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]], Statement).

[F3] Smooth full-rank coordinate maps have local inverses without choice ([[lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space]], Statement). A map from a simply connected parameter domain lifts to the standard product cover after fixing one initial lift ([[thm-covering-space-lifting-criterion, thm-banach-fixed-point]], Statement).

[F4] A contraction of a nonempty complete metric space has a unique fixed point ([[thm-banach-fixed-point]], Statement); its successive iterates are uniquely specified and require no choice.

## Proof

1.1 For a torus parameter $F:T^2\to X$, orient its domain and use the oriented flat target to take its smooth unit normal $n$. The map $E(u,r)=F(u)+r n(u)$, defined in flat local lifts, has invertible derivative at $r=0$. By [F3] and compactness it has full-rank derivative on one common strip; it is injective after shrinking that strip, since a sequence of hypothetical collisions with radii tending to zero would converge to the same torus point and contradict a local inverse there. Equivalently finitely many local-inverse neighborhoods and compact separation of distant domain parameters supply a common width directly. Choose the finitely many strips disjoint and inside the prescribed neighborhoods. Lift each $E$ from $\mathbb R^2\times[-\epsilon,\epsilon]$ to $\mathbb R^2\times(0,1)$. Its deck equivariance is $\widetilde E(u+m,r)=\widetilde E(u,r)+(A m,0)$ for a fixed integral matrix $A$, by uniqueness of lifts; all its derivatives are periodic. Only one initial lift per torus is selected. [F3, given, construct]

2.1 Triangulate the parameter product by a uniform periodic lattice, with the central level $r=0$ included, splitting its cubes in a fixed coordinate order. Its shapes have one positive thickness bound; the fixed scale $\epsilon$ only changes that bound by a fixed positive factor. Interpolate $\widetilde E$ at its vertices. The secant $\widetilde L$ has the same deck equivariance, so descends to a finite PL map $L$. Its value and derivative errors tend uniformly to zero on one compact fundamental domain by [F1], hence on every translate. These estimates give an embedding and injective full differential fans in the flat target. To spell out the local-to-global point, cover the parameter strip by finitely many convex flat boxes on each of which $DE$ differs from one invertible matrix $A_0$ by less than a quarter of its least singular value. For fine secants $DL$ differs from $A_0$ by less than half that value on every incident grid simplex. Integrating on a segment, split at its finitely many grid crossings, gives a uniform local lower Lipschitz bound. The identical inequality for the frozen piecewise linear differential fan makes that fan injective. For pairs not in one such box, compactness and injectivity of $E$ give a positive image separation, retained under small value error. This proves global embedding and full-star injectivity in the target quotient as well; all boxes lift to Euclidean boxes and their transition maps are translations. The central $P=L(T^2\times\{0\})$ is consequently a finite locally flat PL torus, with the explicit PL product collar $L$. [F1, F3, step 1.1, construct]

3.1 Choose a smooth cutoff $\chi(r)$ equal to one near $0$ and zero near the strip ends. In lifts define $$E_t^*(u,r)=L(u,r)+t\chi(r)(E(u,r)-L(u,r)),\qquad 0\le t\le1.$$ The correction is periodic, so this is well-defined in $X$. The derivative error from $E$ is bounded by a constant times the secant value and derivative errors; the cutoff derivative is fixed. Make the grid fine enough that the local lower-Lipschitz and frozen-fan estimates of step 2.1 hold for every $t$. The global separation estimate then proves that every $E_t^*$ is an embedding with injective whole-star differential fan. It agrees with $L$ on an open strip near the ends. On the PL tube $L(T^2\times[-\epsilon,\epsilon])$ set $K_t=E_t^*\circ L^{-1}$, and take the identity outside. These maps paste on open overlaps. They are homeomorphisms. First an interior point of a tube cannot cross its fixed boundary during this homotopy: at a crossing it would equal the image of a boundary point, contradicting embedding of $E_t^*$. Thus every tube image stays inside that same tube. The local estimates give a local homeomorphism as well as injection: in a convex box write the map as $A_0x+g(x)$ with $\operatorname{Lip}(A_0^{-1}g)<1/2$. For a target sufficiently near the image of its center, $x\mapsto A_0^{-1}(y-g(x))$ maps a smaller closed ball into itself and is a contraction, so [F4] supplies a unique local inverse, continuous by the same inequality. Across the tube ends the map is the identity nearby. The pasted compact injective map therefore has open and closed image in connected $X$, hence is onto. Their inverses are continuous jointly, by compactness of the parameter tube and the common local lower bounds. Thus $K_t$ is an ambient isotopy. At $t=1$, its central formula is $K_1 L=E$, as required. [F1, F2, F3, F4, step 2.1, construct]

4.1 Refine the given product triangulation of $X$ to contain the finitely many PL tube simplex images and their central tori, using [F2]. Their intersections with a fundamental cube are finite polyhedra; if they cross a periodic face include its finitely many translated face cuts before coning the common convex cell subdivision. On each resulting simplex inside a tube, $L^{-1}$ is affine and $E_t^*$ extends smoothly; outside the tubes the map is the identity. At tube boundaries these formulas agree on an open neighborhood. The differential fan of $K_t$ is the injective fan of $E_t^*$ composed with the bijective PL fan of $L^{-1}$, so is injective on the entire ambient star, not merely on each simplex. For a PL subpolyhedron take a finite common refinement with this ambient triangulation; restriction of that ambient fan to its tangent substar retains injectivity. This proves the whole-star transport assertion, with actual finite parameterizations. The empty family gives $K_t=\operatorname{id}$. No arbitrary marking of a general smooth or topological manifold was used. [F1, F2, step 1.1, step 3.1, construct] ∎
