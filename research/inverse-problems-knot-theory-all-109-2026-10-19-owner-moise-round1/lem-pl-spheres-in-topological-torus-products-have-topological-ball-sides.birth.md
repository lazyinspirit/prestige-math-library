---
id: lem-pl-spheres-in-topological-torus-products-have-topological-ball-sides
kind: lemma
title: "PL spheres in topological torus products have topological ball sides"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-bicollared-topological-two-spheres-in-s-three-bound-parametrized-balls
  - thm-covering-space-lifting-criterion
  - lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
  - lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation
  - lem-finite-convex-cell-complexes-admit-compatible-triangulations
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited explicitly from the bicollared TOP Schoenflies supplier. The finite PL collar and explicit translation-cover constructions require no additional arbitrary choice. This does not establish the original choice-free TOP prime theorem."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "A. J. S. Hamilton, The triangulation of 3-manifolds"
      url: "https://academic.oup.com/qjmath/article-abstract/27/1/63/1577698"
      locator: "Printed pp.66–67, the Schoenflies assertion via the universal cover. The compact-translation and prescribed-parameter proof is supplied below; no PL compatibility of the interior TOP product marking is assumed."
    - title: "Morton Brown, A proof of the generalized Schoenflies theorem"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/brownsch.pdf"
      locator: "Printed pp.74–76; actual complete local proof is the declared bicollared TOP Schoenflies supplier, not an imported citation."
---

## Statement

Assume full AC. Let $0\le k\le2$, $n=3-k$, $B^k=[-1,1]^k$, and $T^n=\mathbb R^n/(32\mathbb Z)^n$. Let $M$ be a topological manifold with a specified homeomorphism $q:M\to B^k\times T^n$. Any embedding $e:S^2\to\operatorname{Int}M$ that has a supplied closed TOP bicollar has exactly two complementary components. The closure of one component is contained in $\operatorname{Int}M$ and admits a TOP ball parameter $b:D^3\to M$ with $b|_{S^2}=e$.

In particular, the conclusion holds for every finite PL embedded interior sphere of any supplied orientable PL structure on $M$. No compatibility between that PL structure and the interior product marking $q$ is required. The conclusion supplies a TOP ball side with its actual boundary parameter; it asserts neither a PL ball parameter nor PL irreducibility of that supplied structure.

## Facts & Assumptions

**Given:** Full AC, the specified TOP product marking, and either the supplied bicollar or the finite PL embedded sphere and PL structure described above.

[A1] Full AC. [[def-axiom-of-choice]]

[F1] A closed TOP bicollar of a two-sphere in $S^3$ has parametrized TOP balls on both sides, with any prescribed middle-sphere parameter. [[thm-bicollared-topological-two-spheres-in-s-three-bound-parametrized-balls]]

[F2] A map from a simply connected path-connected locally path-connected space lifts through a covering after fixing one lifted basepoint; the lift is unique. [[thm-covering-space-lifting-criterion]]

[F3] A nullhomotopic polygonal circle in a given finite oriented PL sphere has two PL disk regions. Compact locally collared PL boundaries have finite PL collars. Finite PL subpolyhedra and finite convex product cells admit compatible triangulations. [[lem-nullhomotopic-circles-on-finite-oriented-pl-surfaces-bound-pl-disks]] [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]] [[lem-pl-embedded-polyhedron-admits-compatible-subcomplex-triangulation]] [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]

## Proof

1.1 We first supply the bicollar in the finite PL case. Use [F3] to make the embedded sphere a subcomplex. At a vertex of that sphere its ambient link is a finite PL two-sphere and its surface link is an embedded polygonal circle. This circle is nullhomotopic in the ambient link: map the PL link to the ordinary sphere, choose a point outside the circle, and contract the loop in the stereographic plane. A point outside exists because finitely many link edges do not cover a link triangle. By [F3] the two closed link regions are parametrized PL disks. Map their common boundary circle to an equator, extend that SAME boundary map over each disk by coning compatible subdivisions, and cone the resulting link-sphere map to the star vertex. This is a finite PL local pair parameter taking the surface star to a flat disk in a three-ball. The same applies at any point after a finite subdivision making it a vertex. Thus the sphere is locally PL flat. Its orientation and the ambient orientation label the two local sides coherently: in an oriented pair parameter, the positive normal is the one completing the oriented surface coordinates to the ambient orientation. Transition maps preserve that label. Cut the finitely many incident simplices along the sphere with these side labels. The result is a compact PL manifold with two distinguished boundary copies of the sphere, each mapping identically to it; local pair parameters verify this description at every face. Apply the boundary collar of [F3] to the two disjoint copies, shortening the collars so they remain disjoint. Reglue their bottoms and reverse one interval parameter. This gives an actual closed PL embedding $S^2\times[-1,1]\to\operatorname{Int}M$ with middle parameter $e$. Composing with the TOP product marking gives the bicollar needed below. [given, F3, construct]

2.1 Use $q$ to identify $M$ with the TOP product. Its explicit covering is $p:X=B^k\times\mathbb R^n\to B^k\times T^n$, with deck translations $(x,y)\mapsto(x,y+v)$ for $v\in(32\mathbb Z)^n$. Coordinate boxes of circle-width less than32 give evenly covered neighborhoods, including the product boundary. Since $S^2\times[-1,1]$ is simply connected, [F2] lifts the entire supplied bicollar to $X$. The lift is injective: equality of two lifted values implies equality of their projected collar values, hence equality of their domain points. Compactness makes it an embedding. It lies in $\operatorname{Int}X\subset\mathbb R^3$. Denote its middle sphere by $\widetilde S$ and its parameter by $\widetilde e$. Viewed in the one-point compactification $S^3$ of $\mathbb R^3$, [F1] supplies two TOP balls. Exactly one is disjoint from the point at infinity; denote it by $C$. It is a compact subset of $\mathbb R^3$, its interior is the bounded component of $\mathbb R^3\setminus\widetilde S$, and its boundary parameter is $\widetilde e$. [A1, F1, F2, given, construct]

3.1 The ball $C$ lies in $\operatorname{Int}X$. There is nothing to check for $k=0$. For $k=1$, each of the two boundary planes of $X$ is connected and unbounded; for $k=2$, its boundary is the connected unbounded square cylinder $\partial B^2\times\mathbb R$. Each misses $\widetilde S$ and must therefore lie in its unbounded complementary component, so misses $C$ entirely. The connected ball $C$, containing $\widetilde S\subset\operatorname{Int}X$, consequently lies in the component $\operatorname{Int}X$ of $\mathbb R^3\setminus\partial X$. Thus it cannot cross outside the product. [step 2.1, construct]

4.1 For a nonzero deck vector $v$, the spheres $\widetilde S$ and $\widetilde S+v$ are disjoint. Indeed, if two of their points agreed, their projections would agree on the original embedded sphere; injectivity of its parameter would force the same lifted point to equal its nonzero translate. Their bounded closed balls $C,C+v$ are disjoint or one lies strictly inside the other. Here is the separation argument. The connected second sphere lies entirely inside or outside the first. If it lies inside, the connected unbounded exterior of the first ball lies in the exterior of the second sphere; this puts the second ball inside the first. If it lies outside, the connected first ball misses the second sphere and lies entirely in one of its two components, giving containment in its inside or disjointness from its closed inside. Disjoint compact boundaries make any containment strict. Neither containment is possible for a nonzero translation: for $\ell(x,y)=v\cdot y$ one has $\max_{C+v}\ell=\max_C\ell+|v|^2$, excluding $C+v\subset C$, and $\min_{C+v}\ell=\min_C\ell+|v|^2$, excluding $C\subset C+v$. Consequently $C$ is disjoint from all its nontrivial deck translates. [F1, step 2.1, construct, algebra]

5.1 The restriction $p|_C$ is injective, since equality under $p$ is precisely equality up to a deck translation. It is a homeomorphism onto its compact image, by compactness and Hausdorffness. In fact $p$ is injective on an open neighborhood of $C$ in $X$. To verify this without a hidden local-finiteness premise, $C$ is bounded, so only finitely many deck vectors have length at most $2\operatorname{diam}(C)+2$. Each nontrivial one has positive distance from $C$ to $C+v$ by step 4.1 and compactness. The remaining vectors have distance greater than one. Choose a positive radius smaller than one quarter of this finite positive minimum and shrink it also to stay inside $\operatorname{Int}X$. The corresponding open metric neighborhood of $C$ has disjoint nontrivial translates. The covering, being a local homeomorphism, maps that neighborhood homeomorphically onto an open subset of $\operatorname{Int}M$. The parameter of $C$ from step 2.1 therefore projects to a TOP embedding $b:D^3\to\operatorname{Int}M$ whose boundary is exactly $e$. [F2, step 3.1, step 4.1, construct]

6.1 Its open interior $U=b(\operatorname{Int}D^3)$ is connected and open in $M$, by the neighborhood homeomorphism in step 5.1. It is closed relative to $M\setminus e(S^2)$, since $b(D^3)$ is closed and its boundary is exactly $e(S^2)$. Hence $U$ is a whole complementary component, with closure $b(D^3)$. The outside side of the lifted middle collar projects to points outside this ball: shorten it into the injective neighborhood from step 5.1 and use the outside side in the ordinary complement of $\widetilde S$. There is therefore at least one other component. There are at most two. For any complementary component $V$, its frontier in connected $M$ is nonempty and lies in $e(S^2)$; otherwise $V$ would be open and closed in $M$. A sufficiently short local bicollar at a frontier point places points of $V$ on one collar side. Each of the two global collar sides is connected and lies in one component, so every component is one of these two. This proves the stated exact two-component conclusion and the ball-side property. The projected parameter is TOP only: neither the product marking nor Brown's ball parameter was asserted PL. [F1, step 1.1, step 2.1, step 5.1, construct] ∎
