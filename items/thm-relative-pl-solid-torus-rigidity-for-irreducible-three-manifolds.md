---
id: thm-relative-pl-solid-torus-rigidity-for-irreducible-three-manifolds
kind: theorem
title: "Relative piecewise linear solid-torus rigidity for irreducible three-manifolds"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [thm-dehn-lemma-for-finitely-triangulated-orientable-pl-three-manifolds, lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar, lem-finite-polygonal-disk-and-collar-surgery, lem-finite-convex-cell-complexes-admit-compatible-triangulations, thm-covering-space-lifting-criterion]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-original
sources:
  references:
    - title: "A. J. S. Hamilton, The triangulation of 3-manifolds"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/hamiltontri.pdf"
      locator: "Printed p.65 Lemma3; the solid-torus target case is proved directly below rather than consuming general Waldhausen rigidity."
---

## Statement

Let $W$ be a compact connected orientable PL three-manifold with a supplied finite compatible manifold triangulation and a single torus boundary. Assume $W$ is PL irreducible: every finite PL embedded standard two-sphere in $\operatorname{Int}W$ bounds a supplied parametrized PL ball contained in $\operatorname{Int}W$.

Let $V=D^2\times S^1$ be the supplied standard PL solid torus, and $b:\partial W\to\partial V$ a finite PL homeomorphism. If the inverse image under $b$ of a standard meridian $\partial D^2\times\{s_0\}$ is nullhomotopic in $W$, then $b$ extends to a finite PL homeomorphism $g:W\to V$.

Here proper means that the inverse image of the target boundary is exactly the source boundary; a proper homotopy has this property at every time. In particular, a proper PL homotopy equivalence $f:W\to V$ restricting to a boundary homeomorphism is properly homotopic relative to the boundary to such a PL homeomorphism. No choice hypothesis is introduced. The given irreducibility is not inferred from any unproved topological prime-decomposition theorem.

## Facts & Assumptions

**Given:** The finite PL manifold, irreducibility, standard solid-torus target and boundary map, with its stated meridian condition.

[F1] A nullhomotopic finite boundary circle in a supplied finite orientable PL three-manifold bounds a proper finite PL disk ([[thm-dehn-lemma-for-finitely-triangulated-orientable-pl-three-manifolds]]).

[F2] Compact locally collared PL subpolyhedra have PL collars ([[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]).

[F3] Finite polygonal disks admit prescribed-boundary PL extensions, and simple polygonal curves and arcs give the finite disk link charts ([[lem-finite-polygonal-disk-and-collar-surgery]]).

[F4] Finite convex cell complexes admit compatible triangulations ([[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]).

[F5] A circle-valued map with trivial induced fundamental-group map lifts to its real covering after fixing one lift ([[thm-covering-space-lifting-criterion]]).

## Proof

**Given:** The data above. Use a convex polygon model of $D^2$ and the standard finite PL circle $S^1=\mathbb R/\mathbb Z$.

1.1 Put $C=b^{-1}(\partial D^2\times\{s_0\})$. It is a supplied embedded parametrized PL circle. By [F1] it bounds a proper finite PL disk $D$ in $W$. Cut $W$ along this disk. The cut is a finite PL manifold $W'$ with two boundary copies $D_+,D_-$, and with remaining boundary the annulus obtained by cutting $\partial W$ along $C$. Here are the local category details. At an interior disk point its link circle in the ambient standard two-sphere link cuts that link into two parametrized disks: a finite tetrahedral planar chart reduces this to [F3]. At a boundary disk point the link is a proper polygonal arc in the boundary half-sphere disk; joining it to either boundary arc gives polygonal disks by [F3]. Coning these link parameters gives the local plane or half-plane pair charts. Orientability of $W$ and of $D$ coherently labels the two sides. Splitting the compatible triangulation along these sides therefore constructs $W'$ with the stated local charts. The remaining boundary annulus is explicitly parametrized by $b$, since a standard meridian cuts the standard torus into an annulus. [given, F1, F3, F4, construct]

2.1 The cut manifold is connected. Every component must meet a disk copy, since a component meeting neither would persist as a separate component of $W$ after regluing. Its two disk copies lie in the same component because the remaining boundary annulus joins their boundary circles. Its full boundary is consequently the sphere formed by that annulus and the two disk copies; [F3] supplies its standard finite PL sphere parameter by filling the two ends of the annulus. Give this boundary a collar in $W'$ by [F2] and push it to a small positive collar level $S$. This is a parametrized finite PL sphere in $\operatorname{Int}W$: the positive level lies in $\operatorname{Int}W'$, where the regluing map is an embedding. The inner core $K$ and the outer collar side are each connected. The core is homeomorphic to $W'$ by rescaling its boundary collar; the outer collar side remains connected after regluing and contains $\partial W$. Irreducibility gives a PL ball bounded by $S$ contained in $\operatorname{Int}W$. It cannot be the outer side, whose closure contains $\partial W$, and so it is $K$. Hence $W'$ is a parametrized PL ball: attach its boundary collar to $K$ by taking a supplied ball parameter on $K$ and matching its collar prisms to the convex radial shell between a polygonal ball and its double. The compatible convex-cell face maps in [F4] give a finite PL parameter on the enlarged ball. [given, F2, F3, F4, step 1.1, construct]

3.1 Cut the standard target $V$ along its fiber disk $D^2\times\{s_0\}$. Its cut is the convex product $D^2\times[0,1]$, a supplied PL ball. The map $b$ gives the prescribed map between the cut boundary annuli. Extend its restriction on $C$ to a PL disk homeomorphism $D\to D^2$ by [F3] and put the same map on the two disk copies, matching the sides selected by the annulus boundary map. This defines a PL homeomorphism of the two cut-ball boundaries. Transfer it by the ball parameter of step 2.1 to the boundary of a convex ball and cone a compatible boundary triangulation to interior points of the source and target balls. The affine cone-simplex maps give a finite PL homeomorphism of the cut balls. On the two disk copies the maps agree with their regluing identifications, so the ball homeomorphism descends to a finite PL homeomorphism $g:W\to V$ extending $b$ exactly. No classification of arbitrary torus curves or ambient isotopy extension is needed. [F3, F4, step 2.1, construct]

4.1 For the particular case let $b=f|_{\partial W}$. The circle $C=b^{-1}(\partial D^2\times\{s_0\})$ maps to a nullhomotopic meridian under $f$. Since $f_*$ is an isomorphism, it is nullhomotopic in $W$, so step 3.1 gives $g$ with $g|_{\partial W}=f|_{\partial W}$. Write $f=(f_D,f_S)$ and $g=(g_D,g_S)$ in the product target. The circle-valued ratio $r=f_Sg_S^{-1}$ is one on $\partial W$ and has trivial induced fundamental-group map: the boundary fundamental group surjects onto $\pi_1(W)$, as follows by transferring through $g$ to the standard solid torus, and the two circle maps agree there. By [F5] lift $r$ to a real function $\theta$ taking value zero at one boundary point. It is identically zero on the connected boundary, by uniqueness of the lift of the constant circle map. Then $$F_t(x)=\big((1-t)g_D(x)+t f_D(x),\ g_S(x)\exp(2\pi i t\theta(x))\big)$$ is a homotopy from $g$ to $f$ fixed on $\partial W$. It is proper at every time: the two disk coordinates are interior points for $x\in\operatorname{Int}W$, and the interior of the convex disk is convex; boundary points stay at their fixed boundary image. The lift in this finite situation requires no arbitrary family of choices: it is determined on a finite triangulation by lifting one vertex, following a finite spanning tree and then the finitely many remaining cells; trivial loop monodromy gives consistency. All other constructions also use finite data. Thus the relative rigidity assertion introduces no choice hypothesis. [given, F5, step 3.1, construct] ∎
