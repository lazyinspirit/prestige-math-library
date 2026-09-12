---
id: "thm-poincare-duality-for-oriented-topological-manifolds"
kind: "theorem"
title: "Poincaré duality for oriented topological manifolds"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-cap-duality-map-for-an-oriented-manifold","lem-manifold-exhaustion-passes-local-duality-to-the-colimit","lem-duality-extends-from-two-open-sets-to-finite-unions-of-coordinate-balls","lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder","lem-compatible-local-orientation-classes-exist-over-compact-subsets","def-compactly-supported-singular-cohomology-of-a-locally-compact-space","def-fundamental-class-of-a-compact-oriented-manifold","def-axiom-of-choice","thm-path-connected-implies-connected","def-connected-component-and-quasicomponent","def-topological-manifold-with-and-without-boundary"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Theorem 3.35, pp.241–248
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    - title: Miller, Lectures on Algebraic Topology, Lectures 35–36
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
    - title: May, A Concise Course in Algebraic Topology, Chapter 20 §5
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume AC. Let $M$ be an $R$-oriented boundaryless $n$-manifold, with $R$ commutative unital; manifolds are Hausdorff and second countable here. Then cap with the compatible compact orientation classes gives isomorphisms
$$D_M:H_c^p(M;R)\xrightarrow{\sim}H_{n-p}(M;R)$$
for every integer $p$, including disconnected, noncompact and empty $M$.

Naturality means that for an open inclusion $i:U\hookrightarrow M$ with restricted orientation, $D_M e=i_*D_U$, where $e$ is extension of compact supports. For compact $M$, $H_c^p(M;R)=H^p(M;R)$ canonically and $D_M(a)=a\cap[M]$. For arbitrary $M$ the isomorphism is the direct sum of those on its components. AC is used in the countable coordinate-neighborhood selection for exhaustion and in the local universal-coefficient proof.

## Facts & Assumptions

[F1] [[def-cap-duality-map-for-an-oriented-manifold]] defines the actual cap map and proves representative and compact-support compatibility.

[F2] [[lem-manifold-exhaustion-passes-local-duality-to-the-colimit]] supplies the compactly nested exhaustion, the two colimit identifications and compatibility with the actual $D_M$.

[F3] [[lem-duality-extends-from-two-open-sets-to-finite-unions-of-coordinate-balls]] proves duality on its finite coordinate-ball stages, with AC inherited from local UCT.

[F4] [[lem-cap-product-commutes-with-the-mayer-vietoris-duality-ladder]] proves open-extension naturality of cap.

[F5] [[lem-compatible-local-orientation-classes-exist-over-compact-subsets]] constructs $[M]_K$, says that a compact support meets only finitely many components, and identifies the corresponding class decomposition.

[F6] [[def-compactly-supported-singular-cohomology-of-a-locally-compact-space]] constructs the support colimit, including the terminal compact case. [[def-fundamental-class-of-a-compact-oriented-manifold]] identifies the terminal support class with $[M]$.

[F7] [[def-axiom-of-choice]] is assumed for the exact uses in [F2] and [F3].

[F8] [[thm-path-connected-implies-connected]] proves connectedness of the interval and containment of each path component in a connected component.

[F9] [[def-topological-manifold-with-and-without-boundary]] gives Euclidean coordinate neighborhoods, and [[def-connected-component-and-quasicomponent]] identifies the component through a point as the largest connected subset containing it.

## Proof

**Given:** $M,n,R$, its orientation and AC. Every open submanifold carries the restricted orientation.

1.1 Apply [F2] to obtain increasing finite coordinate-ball unions $U_j$ exhausting $M$. Each has cap-duality isomorphisms in every degree by [F3]. The two colimit identifications and cap compatibility in [F2] therefore identify $D_M$ with the colimit of these isomorphisms, which is an isomorphism by the representative lifting and vanishing argument proved there. The map is precisely the cap map of [F1], not an unspecified isomorphism between its domain and codomain. The construction does not assume $M$ connected or compact. [F1, F2, F3, F7, given]

1.2 For any open $U\subset M$, [F4] gives $D_M e=i_*D_U$ from the chain cap identity and support excision. This proves the stated naturality; an arbitrary continuous map is not being assigned an extension map on compact-support cohomology. If $M$ is compact, $K=M$ is terminal in [F6], so the cohomology colimit identifies with $H^p(M;R)$ and its compatible orientation class is $[M]$. Formula [F1] is therefore exactly $a\mapsto a\cap[M]$. [F1, F4, F6, given]

1.3 To make the component assertion explicit, first note that every component is open. For $x\in M$, restrict a coordinate neighborhood [F9] to a Euclidean ball about the coordinate of $x$. Straight segments make that ball path connected, hence connected by [F8], so maximality in [F9] puts it inside the component of $x$. The component is the union of these neighborhoods over its points and is therefore open. Its complement is the union of all other open components, so it is closed as well. Write the components as $C_\lambda$. Each simplex image lies in a single component: the simplex is convex and any two of its points are joined by a segment, whose continuous image is a path; the image is connected by [F8] and therefore lies in one maximal connected component [F9]. A finite chain uses only finitely many components, and its boundary remains in those components. Thus the chain complex is the direct sum of the component chain complexes. A cycle is exactly a tuple of component cycles with finite support, and it bounds exactly when each of its finitely many entries bounds; one finite sum of their bounding chains suffices. Hence $$H_q(M;R)=\bigoplus_\lambda H_q(C_\lambda;R).$$ [F8, F9, given]

2.1 For a compact $K$, [F5] says that only finitely many components meet $K$. Its intersection $K_\lambda$ with each is compact, because that component is also closed: the complement is the union of the other open components. Step 1.3 identifies the relative chain complex for $(M,M\setminus K)$ with the finite direct sum of the relative complexes $(C_\lambda,C_\lambda\setminus K_\lambda)$ for those components; components missing $K$ have zero quotient complex. Applying Hom into $R$ identifies the relative cochain complex with the finite product, equal to the finite direct sum, of their cochain complexes. Kernels and images are computed componentwise, so the same statement holds in relative cohomology. Taking compact-support colimits by [F6] gives $$H_c^p(M;R)=\bigoplus_\lambda H_c^p(C_\lambda;R):$$ each representative has only those finitely many components, and conversely finitely many component representatives have compact union support; equality is witnessed on their finite union of larger supports. No infinite product of component cohomology groups is asserted. [F5, F6, step 1.3]

3.1 The orientation class decomposition in [F5] and the cap formula [F1] show that the two direct sums in steps 1.3 and 2.1 carry $D_M$ to the componentwise maps $D_{C_\lambda}$. A simplex and all its front and back faces stay in its one component, so mixed component terms vanish. Every component is an open manifold and step 1.1 applies to it with its supplied restricted orientation. This establishes the component interpretation without selecting an orientation for each component. [F1, F5, step 1.1, step 1.3, step 2.1]

4.1 For empty $M$ all complexes and colimits are zero; for a point ($n=0$) cap is multiplication by the orientation unit and is an isomorphism. The zero ring likewise gives the unique isomorphism of zero modules. At $p=n$ the target is ordinary $H_0$; at $p=0$ cap evaluates the front vertex. Negative cochain and chain degrees are zero, and step 1.1 proves the assertion in these degrees as well. Degenerate simplices remain within their component and satisfy the same cap formula. The AC uses in [F7] are exactly the basis-indexed coordinate-neighborhood choice in [F2] and the free cycle/boundary modules, projections and comparison lifts in the local UCT used by [F3]. Component decomposition uses finite supports and introduces no further AC use. [F1, F2, F3, F5, F6, F7, step 1.1, step 1.2, step 3.1] ∎
