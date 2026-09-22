---
id: lem-rational-transfer-identifies-a-finite-regular-cover-with-deck-invariants
kind: lemma
title: Rational transfer identifies a finite regular cover with deck invariants
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-covering-map-and-evenly-covered-neighbourhoods", "def-deck-transformation-and-deck-group", "def-regular-covering", "thm-uniqueness-of-lifts-from-a-connected-space", "thm-covering-space-lifting-criterion", "thm-path-connected-implies-connected", "thm-convex-subsets-have-trivial-fundamental-group", "def-standard-topological-simplex-and-its-affine-face-maps", "def-singular-simplex-and-singular-chain-group-with-coefficients", "def-singular-cochain-complex-with-coefficients", "def-singular-cohomology-with-coefficients", "prop-singular-cohomology-is-contravariantly-functorial", "prop-cup-product-is-natural-unital-and-associative", "def-axiom-of-choice"]
proof_strategy: direct
axiom_strength: "ZF + AC; AC selects the simplex lifts used in the transfer."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Algebraic Topology, section 3.G"
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: "Transfer homomorphisms, printed pp.321-326"
---

## Statement

Assume AC. Let $p:Y\to X$ be a finite $d$-sheeted regular covering of CW complexes, with $d\ge1$ and deck group $G=\operatorname{Deck}(p)$. Here regular has the library convention: the total space is path-connected and the deck group is transitive on every fiber. Then
$$p^*:H^*(X;\mathbb Q)\longrightarrow H^*(Y;\mathbb Q)$$
is injective with image exactly the invariant graded subalgebra $H^*(Y;\mathbb Q)^G$. The empty covering, when allowed by the path-connectedness convention, satisfies the same conclusion with both sides zero.

## Facts & Assumptions

**Given:** The covering and positive finite sheet number in the statement.

[A1] AC supplies a choice function for any family of nonempty sets; we use it to select an initial lift for every singular simplex simultaneously. ([[def-axiom-of-choice]]).

[F1] A covering is a continuous surjection with evenly covered neighborhoods; deck transformations are homeomorphisms over its base and form a group. A regular covering has path-connected total space and a deck group transitive on every fiber. ([[def-covering-map-and-evenly-covered-neighbourhoods]], [[def-deck-transformation-and-deck-group]], [[def-regular-covering]]).

[F2] Lifts from a connected domain agreeing at one point are identical. A based map from a path-connected locally path-connected domain lifts through a covering precisely when its fundamental-group image lies in the covering subgroup. Path-connected spaces are connected. ([[thm-uniqueness-of-lifts-from-a-connected-space]], [[thm-covering-space-lifting-criterion]], [[thm-path-connected-implies-connected]]).

[F3] The standard simplex is the nonnegative-coordinate convex subset with coordinate sum one, and its faces insert a zero coordinate. Every nonempty convex Euclidean subset has trivial fundamental group. ([[def-standard-topological-simplex-and-its-affine-face-maps]], [[thm-convex-subsets-have-trivial-fundamental-group]]).

[F4] Integer singular chains are finite formal sums of continuous singular simplices. Rational cochains are homomorphisms on these chains, with positive coboundary $\delta\varphi=\varphi\partial$ and face formula $\delta\varphi(\sigma)=\sum_i(-1)^i\varphi(\sigma\delta_i)$. Cohomology is the quotient of cocycles by coboundaries, including zero in negative degrees. ([[def-singular-simplex-and-singular-chain-group-with-coefficients]], [[def-singular-cochain-complex-with-coefficients]], [[def-singular-cohomology-with-coefficients]]).

[F5] Pullback is precomposition by the induced simplex chain map, is contravariantly functorial, and preserves the cup product and unit. ([[prop-singular-cohomology-is-contravariantly-functorial]], [[prop-cup-product-is-natural-unital-and-associative]]).

## Proof

**Proof technique:** direct.

1.1 Deck transformations act freely when $Y$ is nonempty. If $g(y)=y$, then $g$ and $\operatorname{id}_Y$ lift the same map $p$ and agree at $y$; connectedness and uniqueness in [F2] give $g=\operatorname{id}_Y$. Transitivity in [F1] therefore makes evaluation $g\mapsto g(y)$ a bijection from $G$ onto $p^{-1}(p(y))$. Consequently $|G|=d$. [F1, F2]

1.2 A singular simplex has exactly $d$ lifts. The simplex is nonempty and convex, with paths given by segments. Intersections with sufficiently small Euclidean balls are convex relative open neighborhoods, hence path connected by segments, so it is locally path connected. Its fundamental group is trivial by [F3]. For each point above its first vertex, the criterion in [F2] gives a lift, and uniqueness says that evaluation at that vertex is a bijection between all lifts and the fiber. This includes $k=0$, where lifts are simply points. Restriction to any face is also a bijection between the lift sets: prescribe a point over any vertex of that face, lift the whole simplex based at that vertex, and use uniqueness on the face and simplex. [F1, F2, F3]

2.1 Use [A1] to select one lift $\widetilde\sigma$ of each simplex. By step 1.1 and uniqueness in step 1.2, the maps $g\widetilde\sigma$ for $g\in G$ are exactly its $d$ distinct lifts. Set $\tau(\sigma)=\sum_{g\in G}g\widetilde\sigma$ and extend to integer chains by finite linearity. This is the sum over the entire lift set, so changing the selected lift merely permutes the summands. Restriction to each face bijects lift sets by step 1.2; hence, with the ordinary alternating face signs, $\partial\tau(\sigma)=\sum_i(-1)^i\tau(\sigma\delta_i)=\tau\partial(\sigma)$. In degree zero both boundaries vanish. Thus $\tau$ is a chain map. [A1, F4, step 1.1, step 1.2, algebra]

3.1 Precomposition gives $T_c(\varphi)=\varphi\tau$ on rational cochains. The positive coboundary and $\partial\tau=\tau\partial$ imply $\delta T_c=T_c\delta$, so it descends to a rational-linear transfer $T:H^*(Y;\mathbb Q)\to H^*(X;\mathbb Q)$. On chains, $p_\#\tau=d\operatorname{id}$, since every lift projects to the same simplex. Conversely, for a simplex $\eta$ in $Y$, all lifts of $p\eta$ are precisely $g\eta$, so $\tau p_\#=\sum_g g_\#$. Precomposition gives the correctly typed identities $T p^*=d\operatorname{id}$ on $H^*(X;\mathbb Q)$ and $p^*T=\sum_g g^*$ on $H^*(Y;\mathbb Q)$. [F4, F5, step 1.1, step 1.2, step 2.1, algebra]

4.1 If $p^*x=0$, then $dx=T p^*x=0$, and $d\ge1$ is invertible in $\mathbb Q$, so $x=0$. Every pullback is invariant since $p g=p$. If $y$ is invariant, then $p^*(d^{-1}Ty)=d^{-1}\sum_g g^*y=d^{-1}|G|y=y$. This proves the equality of the image and invariants in each degree. Pullback and all deck pullbacks preserve products and unit by [F5], so the equality identifies graded subalgebras; no multiplicativity of $T$ is asserted or needed. [F1, F5, step 1.1, step 3.1, algebra]

5.1 For $d=1$ a one-sheeted covering is a bijective local homeomorphism and hence a homeomorphism, so pullback is an isomorphism and its deck group is trivial. For the empty covering there are no simplices; [F4] makes every cochain and cohomology group zero, proving the conclusion without evaluating at a point or using $|G|=d$. All negative-degree groups are zero; degree zero is covered by the same cochain identities. The construction uses [A1] only for the initial simultaneous selection; the full lift-sum is independent of it. [A1, F1, F4, F5, step 2.1, step 4.1] ∎
