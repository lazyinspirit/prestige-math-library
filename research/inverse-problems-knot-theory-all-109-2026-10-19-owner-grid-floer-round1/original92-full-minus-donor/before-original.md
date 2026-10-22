---
id: thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization
kind: theorem
title: "Invariance of the multipointed Heegaard Floer complex"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-oriented-seifert-surface-and-knot-genus
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-countable-choice
  - lem-pointed-diagram-isomorphism-identifies-filtered-complexes
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "§§3.3–3.8 and §4.1; generic regularity, energy compactness, and index-two boundary analysis underlying Heegaard Floer invariance"
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, Proposition 2.3"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Proposition 2.3 and equations (5)–(9), printed pp.7–10; independence of the collapsed filtered complex from the number of basepoint pairs and the stable V factor in the fully collapsed complex"
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and knot invariants"
      url: "https://arxiv.org/pdf/math/0209056"
      locator: "§3, Proposition 3.5 and Theorem 3.1 with proof, printed pp.14–17; marked-knot Heegaard move generation and filtered chain homotopy invariance"
    - title: "Ciprian Manolescu, An Introduction to Knot Floer Homology, §§3.3–3.5"
      url: "https://web.stanford.edu/~cm5/hfk.pdf"
      locator: "Printed pp.12–14; pointed Heegaard complexes and their invariance"
---

## Statement

Assume countable choice. Let $K$ be an oriented knot in $S^3$, let $F$ be a compact connected oriented embedded surface with boundary $K$, and let $\mathcal H_0,\mathcal H_1$ be admissible multipointed Heegaard diagrams for $K$. For $i=0,1$, the diagram $\mathcal H_i$ has a closed genus-$h_i$ Heegaard surface and $m_i=h_i+k_i-1$ curves in each attaching system, with $k_i$ ordered $w$-points and $k_i$ ordered $z$-points; each component of either attaching-system complement contains one point of each type, and the connecting arcs represent $K$. A curve isotopy is an isotopy of one attaching curve through embedded curves in its attaching system, disjoint from the other attaching curves and all marked points. A handleslide replaces one attaching curve by its band sum with another curve in the same attaching system, along an embedded arc disjoint from the other attaching curves and the marked points. A Heegaard stabilization forms connected sum with the genus-one splitting of $S^3$ in a disk disjoint from all curves, marked points, and knot arcs; it raises the genus by one and leaves $k$ fixed. A basepoint-pair (index-zero/three) stabilization keeps the genus fixed and adds one curve to each system and one $w,z$ pair along the represented knot. Its inverse removes the following elementary configuration, after relabeling the cyclic pairs: curves $\alpha_0,\beta_0$ bound disks $A_0,B_0$ on the surface, are disjoint from every opposite-system curve except each other, and intersect transversely in two points; $A_0\cap B_0$ is a bigon containing just $w_0$, while $A_0\setminus B_0$ contains just $z_0$ and $B_0\setminus A_0$ contains the next $z$-point along the cyclic pairing. Remove $\alpha_0,\beta_0,w_0,z_0$ and concatenate the adjacent trivial knot arcs. The surviving marked points stay fixed. Thus the move inserts a pair along an existing knot arc rather than adjoining an isolated marked component in an empty disk. Both descriptions include the simultaneous boundary-parallel arc systems and require the stated one-$w$, one-$z$ condition in each attaching complement. Destabilizations are the respective inverse moves. Comparisons may apply the orientation-preserving diagram isomorphisms of the pointed-data definition, carrying the ordered marked points, attaching systems and simultaneous boundary-parallel arcs, before or after the listed geometric moves. Their complex identifications are induced by pushforward of generators, disk classes and almost complex data, rather than by assuming an isotopy acts as the identity. Comparisons also allow the fixed-splitting arc normalizations in that definition before or after the listed moves, retaining the simultaneous bridge witnesses and all ordered marks. They leave the surface attaching and analytic data fixed, so their identification of the actual count operators is the identity; they do not assert a diffeomorphism of a tangential and transverse surface-knot pair. With these identifications, any two such diagrams are related by a finite sequence of the listed moves through admissible multipointed diagrams, preserving the represented oriented knot.

For a diagram with $j$ basepoint pairs, regard its full filtered minus complex as a complex over $\mathbb F_2[U]$ by restriction of scalars along $U\mapsto U_i$ for any one chosen basepoint variable. The resulting complexes of $\mathcal H_0$ and $\mathcal H_1$ are filtered chain homotopy equivalent over $\mathbb F_2[U]$, preserving relative Maslov grading and Alexander filtration, even when the diagrams have different numbers of basepoint pairs. The choice of the single variable action does not affect this type. Restriction retains the independent variables in the chain module; it is different from quotienting by $U_1=\cdots=U_j$. The latter ordinary quotient is the fully collapsed complex and has filtered chain homotopy type $CFK^-(K)\otimes V^{\otimes(j-1)}$, where $V$ has zero differential and bidegrees $(0,0)$ and $(-1,-1)$. Equivalently, a basepoint stabilization before quotienting is modeled by the cone of $U_{j+1}+U_i$ on the polynomial extension of the old complex; after the simultaneous quotient this is a zero-map cone and contributes the displayed extra factor.

For an admissible doubly-pointed diagram $\mathcal H_1$ for $(K,F)$, define $\widehat{HFK}(K)$ to be the homology of the Alexander-associated-graded complex obtained from its full filtered minus complex by quotienting by its sole variable $U$. For a generator $\mathbf x$ use the Alexander grading
$$A_F(\mathbf x)=\frac12\left\langle c_1(\mathfrak s_{w,z}(\mathbf x)),[\widehat F]\right\rangle,$$
where $\mathfrak s_{w,z}(\mathbf x)$ is the relative $\operatorname{Spin}^c$ structure assigned by the pointed Heegaard construction from the gradient trajectories through $\mathbf x$ and the chosen basepoint pair, and $\widehat F$ is obtained by removing a tubular neighborhood of $K$ from $F$ and capping the resulting longitude with the meridian disk of the solid torus attached so that this longitude bounds it (zero-framed surgery). The vector-field representative is extended across small balls around the critical points, and its first Chern class is the Chern class of the orthogonal oriented plane field. Use the absolute Maslov normalization in which the unique generator of $\widehat{HF}(S^3)$ has degree zero.

For a diagram $\mathcal H$ with $j$ basepoint pairs, let $\widetilde C(\mathcal H)$ be the Alexander-associated-graded complex over $\mathbb F_2$ obtained from its full filtered minus complex by setting every $U_i=0$; its differential therefore counts only classes with all $n_{w_i}=n_{z_i}=0$. Its homology is $\widehat{HFK}(K)\otimes V^{\otimes(j-1)}$, where $V=\mathbb F_2\langle v_0,v_1\rangle$ has bidegrees $(M,A)(v_0)=(0,0)$ and $(M,A)(v_1)=(-1,-1)$.
## Statement references

[[def-admissible-pointed-heegaard-floer-data|Pointed Heegaard diagrams and their multipointed complexes]]

[[def-countable-choice|Countable choice]]

[[lem-pointed-diagram-isomorphism-identifies-filtered-complexes|Actual generator and disk-count transport under diagram isomorphisms]]

[[def-oriented-seifert-surface-and-knot-genus|Oriented Seifert surfaces and the minimum-genus convention]]

[Manolescu, Ozsvath, and Sarkar, “A combinatorial description of knot Floer homology,” Proposition 2.3](https://arxiv.org/pdf/math/0607691)

[Ozsvath and Szabo, *Holomorphic disks and topological invariants for closed three-manifolds*](https://arxiv.org/pdf/math/0101206)

[Ozsvath and Szabo, *Holomorphic disks and knot invariants*, Proposition 3.5 and Theorem 3.1](https://arxiv.org/pdf/math/0209056)

[Ozsvath and Szabo, *Holomorphic disks and knot invariants*, §3.4](https://arxiv.org/pdf/math/0209056)

[Manolescu, *An Introduction to Knot Floer Homology*, §§3.3–3.5](https://web.stanford.edu/~cm5/hfk.pdf)

