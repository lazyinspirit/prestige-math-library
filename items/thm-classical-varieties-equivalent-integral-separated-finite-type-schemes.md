---
id: thm-classical-varieties-equivalent-integral-separated-finite-type-schemes
kind: theorem
title: "Irreducible classical varieties and integral separated finite-type schemes"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-classical-algebraic-prevariety-regular-maps-and-varieties, def-variety-scheme-theoretic, def-integral-scheme, lem-classical-points-inside-affine-scheme, thm-morphisms-into-affine-scheme-global-sections, def-affine-overlap-separation-condition, thm-affine-variety-product-coordinate-ring]
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Geometry, 10.158"
      url: "https://www.jmilne.org/math/CourseNotes/AG10.pdf"
---
## Statement

Let $k$ be algebraically closed. The closed-point construction and its inverse
whose points are the nonempty irreducible closed subsets (with each original point identified with its singleton) give an
equivalence between irreducible classical $k$-varieties (which have a finite
affine cover by definition) and integral finite-type $k$-schemes satisfying
the affine-overlap separation condition.

## Facts & Assumptions

**Given:** An algebraically closed field $k$ and the two categories in the statement.

## Proof

**Proof technique:** direct.

1.1 For a classical space $V$, define $V^*$ to have one point $\eta_Z$ for each nonempty irreducible closed subset $Z\subseteq V$, identifying an existing point $v$ with $\eta_{\{v\}}$. Thus only nonsingleton subsets supply new points. For each open $U\subseteq V$, put $U^*=\{\eta_Z:Z\cap U\ne\varnothing\}$. Irreducibility gives $(U\cap W)^*=U^*\cap W^*$; unions are also preserved, and singleton points show injectivity. Give $V^*$ this open-set lattice and set $\mathcal O_{V^*}(U^*)=\mathcal O_V(U)$ with the same restrictions. On a classical affine chart with coordinate ring $A$, nonempty irreducible closed subsets correspond to prime ideals of $A$ by the affine Nullstellensatz; $D(a)^*$ corresponds to the prime-spectrum open $D(a)$, and both sheaves have ring $A_a$ on this basis. Thus this ringed chart is $\operatorname{Spec}A$, so $V^*$ is a reduced scheme. Conversely the closed-point construction recovers these classical charts by `lem-classical-points-inside-affine-scheme`. [given, construct]

2.1 For a classical regular map $f:V\to W$, define $\widetilde f(\eta_Z)$ as the point indexed by $\overline{f(Z)}$. This is a nonempty irreducible closed subset. For any open $O\subseteq W$, its closure meets $O$ exactly when $f(Z)$ meets $O$, so the inverse image of $O^*$ is $(f^{-1}O)^*$. The classical sheaf map therefore defines a sheaf map on the new open lattices. On affine source/target charts a regular map induces a $k$-algebra map $B\to A$; the extension is the spectrum map on primes, and its stalk homomorphisms $B_{\mathfrak q}\to A_{\mathfrak p}$, with $\mathfrak q$ the contracted prime, are local. Hence it is a scheme morphism. These local maps agree on overlaps, being the same point and sheaf maps just defined. Conversely, a scheme $k$-morphism between finite-type $k$-schemes sends a closed point to a closed point: on affine neighbourhoods the composite to its residue field $k$ is a surjective $k$-algebra map, so its kernel is maximal. Restricting the sheaf map then gives a classical regular map. The affine ring maps show that the two operations on morphisms are inverse and respect composition. [step 1.1]

3.1 The constructions are inverse on objects as locally ringed spaces, since on each affine chart prime ideals and their closed-point zero loci are inverse correspondences, and the sheaves agree on the principal-open basis. These chart identifications are compatible on overlaps. A finite classical affine cover becomes a finite affine cover by spectra of finite-type $k$-algebras, hence a finite-type scheme. Conversely a finite-type scheme has such a finite affine cover. The open-lattice correspondence preserves irreducibility and nonemptiness, and all classical coordinate rings are reduced. Thus it restricts to nonempty irreducible classical prevarieties and integral finite-type schemes. [step 2.1]

4.1 It remains to compare separation. For two nonempty classical affine opens $U,V$ in an irreducible classical prevariety, their affine product exists with ring $k[U]\otimes_k k[V]$ by `thm-affine-variety-product-coordinate-ring`. The equalizer of its two maps into the prevariety is the locus of pairs representing the same point, naturally isomorphic to $U\cap V$ by either projection; locally the inverse is the pair of the two open inclusions. Classical separatedness makes this locus closed, hence affine, and restriction from the product coordinate ring onto its coordinate ring is surjective. Under the affine identifications of step 1.1, these are exactly the requirements of `def-affine-overlap-separation-condition`. Conversely that condition makes each such overlap a closed locus in the affine product. For any pair of classical maps into the space, cover the source by opens on which their images lie in such $U,V$; their equalizer is the inverse image of this closed locus and is therefore locally, hence globally, closed. Thus separation is preserved in both directions. Combining this with step 3.1 proves the claimed equivalence. [step 1.1, step 3.1] ∎
