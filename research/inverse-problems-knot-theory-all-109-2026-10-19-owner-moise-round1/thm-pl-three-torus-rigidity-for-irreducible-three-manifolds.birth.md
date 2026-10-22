---
id: thm-pl-three-torus-rigidity-for-irreducible-three-manifolds
kind: theorem
title: "Piecewise linear three-torus rigidity for irreducible three-manifolds"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - lem-closed-orientable-finite-pl-surfaces-with-abelian-group-are-spheres-or-tori
  - lem-finite-pl-surface-compressions-produce-pi-one-injective-components
  - lem-abelian-finite-pl-cut-manifolds-have-edge-group-fundamental-group
  - thm-relative-pl-torus-cylinder-rigidity-for-irreducible-three-manifolds
  - lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar
  - thm-covering-space-lifting-criterion
  - lem-finite-convex-cell-complexes-admit-compatible-triangulations
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free for the supplied finite PL manifold and map. Compression terminates by a finite weight, group transversals are least finite words, and all remaining lifts and parameters are selected finitely."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "A. J. S. Hamilton, The triangulation of 3-manifolds"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/hamiltontri.pdf"
      locator: "Printed p65 Lemma3; the closed three-torus target case is proved here by one circle-level surface, finite compression, abelian cutting and the separately proved relative torus-cylinder case."
---

## Statement

Let $W$ be a compact connected orientable boundaryless PL three-manifold with a supplied finite compatible triangulation. Assume it is PL irreducible: every finite embedded standard PL two-sphere bounds a parametrized PL ball. If a PL map $f:W\to T^3$ to the standard finite PL three-torus induces an isomorphism on fundamental groups, then $f$ is homotopic to a PL homeomorphism $g:W\to T^3$. No choice axiom is introduced.

This is conditional on the supplied PL structure and irreducibility. It supplies neither of those hypotheses for an unqualified topological three-manifold.

## Facts & Assumptions

**Given:** The finite closed irreducible orientable PL manifold and the PL map inducing a fundamental-group isomorphism.

[F1] A closed orientable finite PL surface with abelian fundamental group is PL homeomorphic to a sphere or torus. [[lem-closed-orientable-finite-pl-surfaces-with-abelian-group-are-spheres-or-tori]]

[F2] A finite cooriented PL surface can be compressed finitely to fundamental-group-injective components, preserving its oriented two-cycle class; new component group images are subgroups of the previous ones. [[lem-finite-pl-surface-compressions-produce-pi-one-injective-components]]

[F3] For a connected nonseparating two-sided finite PL cut with injective surface group in an abelian ambient group, both face maps identify the cut group with the surface group, the cut group injects, and the ambient group is its direct product with $\mathbb Z$. [[lem-abelian-finite-pl-cut-manifolds-have-edge-group-fundamental-group]]

[F4] A boundary-proper PL map from a finite irreducible orientable PL three-manifold to standard $T^2\times[0,1]$, inducing a group isomorphism and a boundary homeomorphism, is homotopic relative boundary to a PL homeomorphism. [[thm-relative-pl-torus-cylinder-rigidity-for-irreducible-three-manifolds]]

[F5] The local finite-link construction and PL collar construction supply the bicollars of these cooriented finite surfaces. [[lem-compact-locally-collared-pl-subpolyhedron-has-pl-collar]]

[F6] A circle-valued map whose induced fundamental-group map is zero has a real lift after one value is fixed. [[thm-covering-space-lifting-criterion]]

[F7] Finite convex affine cell decompositions admit compatible finite subdivisions. [[lem-finite-convex-cell-complexes-admit-compatible-triangulations]]

## Proof

1.1 Write the target as three PL angle circles $(u,v,z)$ modulo one. Subdivide the finite source and target so the last coordinate $f_z$ is affine in local angle lifts on each source simplex. Choose $c$ different from the finitely many vertex values. Its preimage $F$ is a finite cooriented closed embedded PL surface. To verify local flatness, at a point use its smallest source face. The affine coordinate there is nonconstant, since otherwise all that face's vertices would have value $c$. Translation along a direction of nonzero slope in that face changes the height by the same amount in every incident coface. For sufficiently small translations the positive coordinates of that face stay positive, so these translations and the zero slice give an actual local product chart. Finite slice polytopes triangulate by [F7]; the coorientation is the increasing lifted angle. [F5] supplies a finite bicollar. For a polygonal loop transverse to $F$, its signed crossing number is the degree of $f_z$ on that loop: lift angle along its successive segments and count crossings of $c+\mathbb Z$. This is also true for all loop classes by a finite perturbation off surface edges and vertices. Since $f_*$ is an isomorphism onto $\mathbb Z^3$, this crossing homomorphism is onto $\mathbb Z$. Each component's group image lies in $\ker(f_z)_*$. [F5, F7, given, construct, algebra]

2.1 Apply [F2] to $F$, with its coherent orientations. All resulting components inject into the abelian group $\pi_1(W)\cong\mathbb Z^3$, so [F1] makes them spheres or tori, with actual finite PL parameters. Their group images still lie in $\ker(f_z)_*$. Their total signed crossing homomorphism is still $(f_z)_*$: [F2] makes the old and new two-cycles differ by a boundary of a finite three-chain. In a common finite subdivision the coefficients of that three-chain give an integer on each open three-cell; the signed crossings of its boundary along a generic closed polygonal loop are the successive differences of those integers. Their sum telescopes to zero. This proves the assertion without Poincare duality. Every sphere component contributes zero, since irreducibility supplies a ball and a closed loop enters and leaves its oriented boundary with total signed count zero. If every torus component separated $W$, each too would have zero signed count on every closed loop, by the same entering-and-leaving argument for its two sides. That contradicts the surjectivity in step 1.1. Choose a nonseparating component $T$, necessarily a torus. It is cooriented, has its finite PL parameter and bicollar, and is fundamental-group-injective. [F1, F2, F5, step 1.1, construct, algebra]

3.1 Cut along $T$ to obtain a connected finite orientable manifold $N$ with two boundary tori. Apply [F3]. Writing $H$ for the image of $\pi_1(T)$, it identifies $\pi_1(N)$ with $H$ and makes $H$ a direct summand of $\pi_1(W)$. Under $f_*$, this is a rank-two direct summand contained in the coordinate subgroup $\mathbb Z^2\times\{0\}$. It equals that subgroup: if a rank-two subgroup of $\mathbb Z^2$ had nontrivial finite index, the quotient of $\mathbb Z^3$ by it would have torsion, whereas a direct-summand quotient is torsion-free. The index is finite because two independent integer vectors form an invertible rational matrix, whose determinant clears denominators. Thus $H=\ker(f_z)_*$ under the given isomorphism. The signed crossing of $T$ is the stable-letter exponent in [F3]'s cut presentation. It vanishes on $H$ and takes value one on a once-crossing loop. Since $(f_z)_*$ is also onto and has the same kernel, it is this exponent or its negative. Choose the boundary labels $T_-,T_+$ to make it the positive exponent. Irreducibility passes to $N$: a sphere in its interior bounds a PL ball in $W$. The connected $T$, disjoint from that sphere, cannot lie inside the ball, since its injective nontrivial fundamental group would then factor through the trivial ball group. Hence the ball misses $T$ and lifts into $N$. [F3, F5, step 2.1, construct, algebra]

4.1 Choose any finite PL parameter $a_0:T\to T^2$ from [F1]. The map $(f_u,f_v)|_T$ induces an isomorphism to $\mathbb Z^2$ by step 3.1. Compose $a_0$ with the integer linear torus automorphism realizing that matrix, giving a PL homeomorphism $a:T\to T^2$ with exactly the same induced homomorphism. An invertible integer matrix has determinant $\pm1$ and inverse an integer matrix; its finite angle-cell decomposition gives both maps as PL maps by [F7]. The two coordinate ratios between $(f_u,f_v)|_T$ and $a$ have trivial group maps and hence real lifts $r_u,r_v$ by [F6]. These lifts are finite PL functions: each angle chart lifts affinely and overlapping lifts differ by integer constants. Extend each to a PL real function on the bicollar, with its original value on $T$ and zero on the outer bicollar boundary, by assigning those values on the vertices of a finite triangulation of the collar prisms and interpolating affinely. Extend it by zero to $W$. Subtract these functions in the first two angle coordinates of $f$ to obtain a PL map $f'$ with $(f'_u,f'_v)|_T=a$, continuously homotopic to $f$ by multiplying each correction by the time parameter. Keep the third coordinate unchanged. Thus on $N$ the pair $\psi=(f'_u,f'_v)$ has boundary value $a$ on both copies of $T$, and induces an isomorphism $\pi_1(N)\to\mathbb Z^2$. [F1, F6, F7, step 3.1, construct]

5.1 There is a PL function $\rho:N\to[0,1]$ which is zero exactly on $T_-$ and one exactly on $T_+$. Make the two boundary tori full subcomplexes by barycentric subdivision, give their vertices values zero and one respectively, and give every other vertex value $1/2$. Affine interpolation has a zero or one precisely on the corresponding full boundary subcomplex; all other points have value strictly between zero and one. The map $k=(\psi,\rho):N\to T^2\times[0,1]$ is PL after a common finite subdivision, is boundary-proper, induces a group isomorphism, and restricts on its boundary to the homeomorphism $a$ at the two labelled ends. Step 3.1 supplies irreducibility. Apply [F4] to obtain a PL homeomorphism $G:N\to T^2\times[0,1]$ and a homotopy from $k$ to $G$ fixed on the entire boundary. [F4, F7, step 3.1, step 4.1, construct]

6.1 Restore the original identification of the two boundary copies of $T$ in $N$. Both are mapped by the same $a$, so $G$ descends to a PL homeomorphism $g:W\to T^2\times S^1=T^3$. The homotopy of step 5.1 also descends, since its two fixed boundary maps differ only in interval height zero versus one, which have the same circle value. Consequently the first two coordinate group maps of $g$ equal those of $\psi$, hence those of $f$. Its last coordinate is the positive once-crossing homomorphism of $T$: an internal path through $N$ from the minus to the plus boundary changes the lifted interval height by one, and all loops in $N$ have zero change. By step 3.1 this is exactly $(f_z)_*$. Thus $g_*=f_*$ in every angle coordinate. The three coordinate ratios $f_jg_j^{-1}$ have zero group maps and real lifts by [F6]. Interpolate these real lifts to zero in their respective circle coordinates to obtain a continuous homotopy from $f$ to $g$. All surfaces, compressions, cuts, maps and lifts used here are finite or given by uniquely specified least words as in [F3]; no choice axiom was used. Supplied finite PL irreducibility remains an explicit hypothesis, with no topological triangulation or general Haken-rigidity theorem inferred. [F3, F6, step 3.1, step 4.1, step 5.1, construct, algebra] ∎
