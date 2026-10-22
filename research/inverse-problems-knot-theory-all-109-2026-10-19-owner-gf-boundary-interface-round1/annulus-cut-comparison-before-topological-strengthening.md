---
id: lem-finite-annulus-cuts-preserve-isomorphic-boundary-piece-groups
kind: lemma
title: Finite annulus cuts preserve isomorphic boundary piece groups
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-seifert-van-kampen
  - thm-normal-form-for-fundamental-groups-of-graphs-of-groups
  - thm-universal-cover-existence
  - thm-covering-space-lifting-criterion
  - thm-homotopy-lifting-for-covering-maps
  - thm-covering-maps-inject-fundamental-groups
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
proof_strategy: direct
axiom_use: Full AC is inherited from the graph-of-groups normal-form suppliers. Only finite graph-of-groups normal forms are used. No triangulation or smoothing of an arbitrary TOP manifold is asserted.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Albert Marden, The geometry of finitely generated Kleinian groups
      url: https://www.maths.gla.ac.uk/~mpowell/Marden-on-Mostow-rigidity-GeometryFinitelyGenerated-1974.pdf
      locator: Printed412, Section5.4, boundary-piece comparison context. The proof below replaces the noncompact half-space import by a finite cutting and covering argument.
---

## Statement

Assume AC. Let $N$ be a connected smooth three-manifold with boundary, or a connected three-manifold with a GIVEN locally finite PL manifold triangulation. Let $S$ be a connected closed boundary subsurface, with the induced smooth or locally flat PL structure and supplied frontier collars. Suppose the inclusion $S\to N$ induces an isomorphism of fundamental groups. Neither $N$ nor $S$ is required to be compact.

Let $C_1,\ldots,C_m$ be a finite pairwise disjoint family of compact properly embedded two-sided annuli with injective fundamental groups in $N$. In the smooth case the annuli are neat; in the PL case they are finite locally flat PL annuli. Supply disjoint product collars, including the boundary quadrant collars. Each $C_i$ has exactly one rim $\alpha_i$ in the interior of $S$ and its other rim outside $S$.

Cut $N$ along the $C_i$ and cut $S$ along the $\alpha_i$, retaining the separate face copies. Inclusion gives a bijection from the connected pieces of the cut surface onto the connected pieces of the cut manifold: each manifold piece contains precisely one surface piece. For each matched pair $S_a\subset N_a$, inclusion induces an isomorphism $\pi_1(S_a)\to\pi_1(N_a)$. Both inclusions into their uncut spaces are injective. In the universal cover of $N$, the two dual cutting trees are equivariantly isomorphic, by the map sending a lifted rim to its unique lifted annulus. The empty family is included.

No cut piece is asserted to be a ball, a half-space or a product, and no conclusion about arbitrary proper planes is used.

## Facts & Assumptions

**Given:** The actual finite family, collars, categories and fundamental-group isomorphism in the Statement.

[F1] Open collared gluings have the van Kampen pushout presentation. A finite graph of groups with injective edge maps has reduced-word normal forms, including injectivity of its vertex groups and nontriviality of positive-edge reduced closed words. [[thm-seifert-van-kampen]] [[thm-normal-form-for-fundamental-groups-of-graphs-of-groups]]

[F2] Universal covers exist for manifolds and collared manifold pieces. Maps lift by the subgroup criterion, homotopies lift, and covering maps inject fundamental groups. [[thm-universal-cover-existence]] [[thm-covering-space-lifting-criterion]] [[thm-homotopy-lifting-for-covering-maps]] [[thm-covering-maps-inject-fundamental-groups]]

[F3] The deck group of a universal cover identifies with the fundamental group. Lifting loops describes its action on each fiber. [[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]

[A1] Full choice is [[def-axiom-of-choice]].

## Proof

1.1 Describe the finite cut presentation explicitly. The cut components are the vertex spaces and the annulus collars are the edge cylinders. There are finitely many components: removing one connected collared two-sided surface increases the number of components by at most one, since its two collar sides each meet just one complementary component. Choose basepoints and connecting paths for this finite graph. Restore cylinders over a maximal tree first. Van Kampen on open collar thickenings gives amalgamation at each tree edge. Each remaining cylinder contributes one crossing generator $t$ and the relations identifying its two face loops by $t$: cut its interval at the middle, keep a connecting arc between its ends, and apply van Kampen to the two open halves and that arc. Loops split into vertex paths and cylinder crossings by a finite subdivision subordinate to this open cover. Subdividing a based homotopy square in the same cover shows that its only changes are vertex homotopies, inverse crossing cancellation and transport of a face loop through its cylinder. These are exactly those relations, so this presentation gives the actual fundamental group, not merely a surjection to it. Each edge map into a cut piece is injective: its composite into $N$ is the assumed injection of $\pi_1(C_i)$. Thus [F1] applies to this FINITE graph and makes every cut-piece group inject into $\pi_1(N)$. The identical construction on $S$ uses the curves $\alpha_i$. Each such curve is injective in $S$, since its generator maps to the injective annulus generator in $N$; hence the surface-piece groups also inject into $\pi_1(S)$. [A1, F1, given, construct]

2.1 Let $p:X\to N$ be the universal cover. The preimage $\widetilde S=p^{-1}(S)$ is connected: for points over one fixed point of $S$, surjectivity of $\pi_1(S)\to\pi_1(N)$ gives a loop in $S$ whose lift joins them; lift paths in $S$ to reach every other point. It is simply connected, since a loop there projects to a loop in $S$ nullhomotopic in $N$, hence nullhomotopic in $S$ by injectivity, and its nullhomotopy lifts. The same argument, using the injections from step 1.1, shows that every connected lift of a cut piece, annulus, surface piece or rim is its universal cover. A lifted annulus has exactly one lifted $S$ rim: its core group is generated by that rim, so the inclusion of this rim induces an isomorphism on the annulus group; the lifted annulus is a strip and that particular boundary is a single line. All these collars form locally finite families upstairs, because they are lifts of a finite disjoint collared family. [F2, F3, step 1.1, given, construct]

3.1 The graph $T_N$ with vertices the cut components of $X$ and edges the lifted annuli is connected. A path between two components has a finite subdivision in lifted piece and collar neighborhoods and reads a finite edge walk. Its vertices and edges have the coset description given by the finite cut presentation of step 1.1: fix a lift and lift the chosen base paths; two translates give the same lift precisely when their quotient is represented by a loop in that piece or annulus. A nonbacktracking closed walk in this graph would therefore give a positive-edge graph-of-groups word $w$ returning to its initial VERTEX COSET. No backtracking says exactly that at an edge reversal its intervening coefficient is outside the edge-group image: being inside identifies the two lifted edges, and conversely the identification is a lifted face loop. Return to the coset says $w=a$ for some element $a$ of the initial vertex group; it does NOT say $w=1$. Append $a^{-1}$ to the final vertex coefficient. This changes no intervening coefficient and gives a positive-edge reduced closed word representing the identity, contrary to [F1]. Thus $T_N$ is a tree. Apply the same argument to the finite cut presentation of $S$ in its universal cover $\widetilde S$, to obtain a tree $T_S$. This proof uses no normal form for an infinite graph. [F1, F2, F3, step 1.1, step 2.1, construct, contradiction]

4.1 Inclusion of $\widetilde S$ into $X$ defines an incidence-preserving graph map $f:T_S\to T_N$. Each edge of $T_N$ has just one boundary line in $\widetilde S$, by step 2.1, and conversely every lifted $\alpha_i$ belongs to its lifted $C_i$. Hence $f$ is a bijection on edges. It is also injective on vertices. Indeed if two distinct vertices had the same image, the simple path between them in $T_S$ would give a nonempty closed walk in the tree $T_N$ with distinct edges. Every nonempty closed walk in a tree repeats an edge: removing any edge used by the walk separates its endpoints, so a return crosses that edge again. This is a contradiction. If $m>0$, every vertex of the connected graph $T_N$ is incident to an edge, and edge surjectivity therefore implies vertex surjectivity. If $m=0$, both graphs consist of one vertex and the conclusion is immediate. Thus $f$ is a graph isomorphism. It commutes with all deck transformations because it is defined by actual inclusion and boundary incidence, without choosing representatives of the lifts. [step 2.1, step 3.1, construct, contradiction]

5.1 Passing to deck orbits of the equivariant isomorphism gives a bijection of the downstairs cut components. The actual intersection of a lifted manifold piece with $\widetilde S$, with separate face copies retained, is exactly the one lifted surface piece furnished by step 4.1; another component would be a second vertex mapping to it. Consequently that surface piece and manifold piece have the same stabilizer under the deck group. For any connected lift $V$ of an injective subspace, this stabilizer is its fundamental-group image: a loop downstairs lifts from $x\in V$ to a point in $V$, and conversely a path in $V$ from $x$ to $h x$ projects to a loop representing $h$, with the same base-path convention for both subspaces. The injection statements from step 1.1 and equality of these images now show that the actual inclusion $\pi_1(S_a)\to\pi_1(N_a)$ is bijective. This proves all assertions, including the two categories and the empty family, without a noncompact plane-unknotting or a smoothing assertion. [F2, F3, step 1.1, step 2.1, step 4.1, given, construct] ∎
