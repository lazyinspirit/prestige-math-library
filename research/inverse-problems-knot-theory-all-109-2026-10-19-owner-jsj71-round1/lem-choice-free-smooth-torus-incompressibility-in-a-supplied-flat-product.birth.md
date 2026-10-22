---
id: lem-choice-free-smooth-torus-incompressibility-in-a-supplied-flat-product
kind: lemma
title: "Choice-free smooth torus incompressibility in a supplied flat product"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: [lem-finite-flat-product-torus-secant-transport-has-whole-star-fans, lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity, lem-choice-free-relative-rounding-of-finite-whole-star-surfaces, lem-choice-free-smooth-torus-curves-and-annulus-strips]
justified_by: []
proof_strategy: direct
axiom_use: "Choice-free. The supplied flat ambient product has an explicit finite PL structure; finite whole-star transport, PL Loop/cut injection and finite relative disk rounding are proved without choice. This does not consume a general smooth triangulation theorem."
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Explicit flat-product PL and smooth torus compression bridge"
      locator: "Finite secant collars, the boundary-level replacement and disk rounding are supplied in full below using the exact named local proofs."
---

## Statement

Let $X$ be a smoothly parametrized product $T^2\times[0,1]$. Let $S$ be a finite disjoint family of smoothly embedded two-sided tori in its interior. Then all component maps $\pi_1(S_i)\to\pi_1(X)$ are injective if and only if there is no smooth embedded disk whose boundary is essential on one $S_i$ and whose interior misses all of $S$. In that case every component of the smooth cut-open manifold $X\mathbin{\|}S$ is injective on fundamental groups into $X$. No irreducibility or choice assumption is required.

This is an interface for a supplied smooth product. It asserts neither triangulability of an arbitrary topological three-manifold nor smoothing of an arbitrary ambient PL marking.

## Facts & Assumptions

**Given:** The actual smooth product parameter and finite smooth torus family in the Statement.

[F1] Finite parametrized tori in the flat product admit a finite PL secant system $P_i$, actual PL tube maps $L_i$, and finite whole-star piecewise smooth ambient transport $K$ with $K(P_i)=S_i$ and $K L_i(u,r)=E_i(u,r)$ in a central strip, where $E_i$ is a smooth normal collar ([[lem-finite-flat-product-torus-secant-transport-has-whole-star-fans]], Statement and full proof).

[F2] For finite compatible orientable PL three-manifolds, the no-compressing-disk condition for a finite two-sided locally flat PL surface system is equivalent to all component-group injections; it also gives all cut-piece-group injections ([[lem-finite-pl-two-sided-incompressibility-is-pi-one-injectivity]], Statement and full proof). The supplied PL product collars in [F1] meet its collar hypotheses.

[F3] A finite embedded piecewise smooth surface with injective whole-star differential fans and a smooth boundary collar admits a smooth embedded replacement, preserving its abstract topology and fixed on a smaller collar, without choice ([[lem-choice-free-relative-rounding-of-finite-whole-star-surfaces]], Statement and full proof).

[F4] Finite smooth torus curve/strip constructions, including finite corner graph rounding, have the parameters of [[lem-choice-free-smooth-torus-curves-and-annulus-strips]], full proof.

## Proof

1.1 If the family is empty, its cut manifold is $X$ and the assertion is immediate. Otherwise work in the supplied product coordinates and apply [F1] simultaneously. Every torus parameter is a finite selection; the transport is the identity near $\partial X$. If some component map is not injective, the corresponding $P_i$ map is not injective, since $K$ is a homeomorphism. By [F2] there is a finite PL compressing disk $D$ meeting the entire PL system only along its boundary on one $P_j$. Make its interior disjoint from $\partial X$ if necessary: a strictly increasing piecewise affine self-map of $[0,1]$ can send its endpoints inward while being the identity on the compact height band containing all the $P_i$. Its product with the torus coordinates is a PL embedding fixing all $P_i$, and moves the disk away from $\partial X$ without changing its boundary. [F1, F2, given, construct]

2.1 Refine $D$ with the finite ambient triangulation in [F1]. The disk $K(D)$ then has actual whole-star piecewise smooth data, not merely a topological embedded-disk description. We next give it a smooth boundary collar. In the PL collar $L_j(u,r)$ its boundary lies at $r=0$ and its short inward disk collar is on one side, say $r\ge0$. The inverse image of $D$ there is a finite PL disk. The function $r$ is affine on its refined simplices, zero exactly on the boundary circle in a sufficiently small neighborhood. Choose $\epsilon>0$ below every positive vertex level and below the central-strip width, and small enough to exclude the rest of the compact disk. Each boundary triangle then contributes its standard level trapezoid, and the successive vertex fans join them to a PL annulus $0\le r\le\epsilon$. Its top circle is embedded in $T^2\times\{\epsilon\}$, and its projection to the $u$ torus is an embedded polygonal circle $c_\epsilon$. Because $K L_j=E_j$ on this strip, the normal coordinate of the transported disk is exactly $r$. Its collar projection also gives a homotopy from its original boundary to $E_j(c_\epsilon,0)$ on $S_j$. Thus this circle is essential on $S_j$. [F1, F2, step 1.1, construct]

3.1 On the parameter torus put a finite polygonal annulus collar around $c_\epsilon$: take short edge rectangles and join their sides through the finitely many vertex fans, with coherent side determined by the oriented torus. Smooth the corners of one outer boundary inside disjoint graph boxes, retaining a positive distance from $c_\epsilon$. The smoothed outer circle $c'$ and the original polygonal inner circle bound a finite whole-star piecewise smooth annulus, with smooth collar at $c'$. These are exactly the finite graph and strip constructions of [F4]; no arbitrary-surface triangulation is being assumed. In $E_j$ coordinates replace the short collar of $K(D)$ by this annulus at $r=\epsilon$, joined to the vertical strip $c'\times[0,\epsilon]$. The retained disk lies at $r\ge\epsilon$ and meets that level only in its old top circle; the annulus and new vertical strip are therefore embedded and meet it only in the intended seams. At the first seam their derivative fans are injective: the annulus has zero $r$ direction and the retained disk has strictly positive inward $r$ direction. At the other seam the annulus and vertical strip are the two product half-faces. Smooth the harmless seam corners on a smaller open strip if desired. The result is a disk with a smooth collar at its exact boundary $E_j(c',0)$; this boundary is homotopic on $S_j$ to the original essential boundary. [F1, F3, F4, step 2.1, construct]

4.1 Apply [F3], fixed on a smaller smooth collar. The rest of the finite disk is compact and separated from $S$ and $\partial X$ once that protected collar is removed; choose all rounding neighborhoods in that open complement. On the protected collar the disk stays on its original side. The smooth replacement is consequently a genuine compressing disk in $X$, with interior missing every $S_i$ and essential boundary on $S_j$. We have proved that a noninjective component map forces such a smooth disk. Conversely any such smooth disk caps its boundary in $X$, while an essential embedded circle on a torus is nontrivial in its fundamental group, by its primitive nonzero class [F4]. It therefore contradicts injectivity of that component map. This proves the equivalence. [F1, F2, F3, F4, step 1.1, step 3.1, construct]

5.1 In the no-smooth-disk case, the preceding construction shows that the PL system has no PL compressing disk. Apply [F2]'s cut-piece injection conclusion. The homeomorphism $K$ extends to the cut-open manifolds using its actual collar product $K L_i=E_i$ near every seam. Hence it identifies each PL cut piece with the corresponding smooth cut piece and commutes with their inclusions into $X$. Their fundamental-group injections transport by these homeomorphisms. The transport itself was only a finite piecewise smooth homeomorphism; the disk replacement used [F3] to produce an actual smooth disk. No step reinterprets a required smooth ambient isotopy as a homeomorphism isotopy. Every construction and choice was finite. [F1, F2, F3, step 4.1, construct] ∎
