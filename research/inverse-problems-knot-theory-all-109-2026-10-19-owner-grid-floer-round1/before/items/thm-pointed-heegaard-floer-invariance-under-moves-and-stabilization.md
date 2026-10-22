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

Assume countable choice. Let $K$ be an oriented knot in $S^3$, let $F$ be a compact connected oriented embedded surface with boundary $K$, and let $\mathcal H_0,\mathcal H_1$ be admissible multipointed Heegaard diagrams for $K$. For $i=0,1$, the diagram $\mathcal H_i$ has a closed genus-$h_i$ Heegaard surface and $m_i=h_i+k_i-1$ curves in each attaching system, with $k_i$ ordered $w$-points and $k_i$ ordered $z$-points; each component of either attaching-system complement contains one point of each type, and the connecting arcs represent $K$. A curve isotopy is an isotopy of one attaching curve through embedded curves in its attaching system, disjoint from the other attaching curves and all marked points. A handleslide replaces one attaching curve by its band sum with another curve in the same attaching system, along an embedded arc disjoint from the other attaching curves and the marked points. A Heegaard stabilization forms connected sum with the genus-one splitting of $S^3$ in a disk disjoint from all curves, marked points, and knot arcs; it raises the genus by one and leaves $k$ fixed. A free stabilization keeps the Heegaard surface fixed, adds one new $w$-point and one new $z$-point, and adds an $\alpha$-curve and a $\beta$-curve in a disk disjoint from the old curves and marked points; those new curves meet transversely in two points, with one new marked point in each of the two regions between them and the connecting arcs extended locally so the represented knot is unchanged. Destabilizations are the respective inverse moves. Any two such diagrams are related by a finite sequence of these moves through admissible multipointed diagrams, preserving the represented oriented knot.

For a diagram with $j$ basepoint pairs, specialize its full filtered minus complex over $\mathbb F_2[U_1,\ldots,U_j]$ to $\mathbb F_2[U]$ by sending every $U_i$ to $U$. The specialized complexes of $\mathcal H_0$ and $\mathcal H_1$ are filtered chain homotopy equivalent over $\mathbb F_2[U]$, preserving relative Maslov grading and Alexander filtration, even when the diagrams have different numbers of basepoint pairs and the move sequence changes that number.

For an admissible doubly-pointed diagram $\mathcal H_1$ for $(K,F)$, define $\widehat{HFK}(K)$ to be the homology of the Alexander-associated-graded complex obtained from its specialized full filtered minus complex by quotienting by $U$. For a generator $\mathbf x$ use the Alexander grading
$$A_F(\mathbf x)=\frac12\left\langle c_1(\mathfrak s_{w,z}(\mathbf x)),[\widehat F]\right\rangle,$$
where $\mathfrak s_{w,z}(\mathbf x)$ is the relative $\operatorname{Spin}^c$ structure assigned by the pointed Heegaard construction from the gradient trajectories through $\mathbf x$ and the chosen basepoint pair, and $\widehat F$ is obtained by removing a tubular neighborhood of $K$ from $F$ and capping the resulting longitude with the meridian disk of the solid torus attached so that this longitude bounds it (zero-framed surgery). The vector-field representative is extended across small balls around the critical points, and its first Chern class is the Chern class of the orthogonal oriented plane field. Use the absolute Maslov normalization in which the unique generator of $\widehat{HF}(S^3)$ has degree zero.

For a diagram $\mathcal H$ with $j$ basepoint pairs, let $\widetilde C(\mathcal H)$ be the Alexander-associated-graded complex over $\mathbb F_2$ obtained from its full filtered minus complex by setting every $U_i=0$; its differential therefore counts only classes with all $n_{w_i}=n_{z_i}=0$. Its homology is $\widehat{HFK}(K)\otimes V^{\otimes(j-1)}$, where $V=\mathbb F_2\langle v_0,v_1\rangle$ has bidegrees $(M,A)(v_0)=(0,0)$ and $(M,A)(v_1)=(-1,-1)$.
## Statement references

[[def-admissible-pointed-heegaard-floer-data|Pointed Heegaard diagrams and their multipointed complexes]]

[[def-countable-choice|Countable choice]]

[[def-oriented-seifert-surface-and-knot-genus|Oriented Seifert surfaces and the minimum-genus convention]]

[Manolescu, Ozsvath, and Sarkar, “A combinatorial description of knot Floer homology,” Proposition 2.3](https://arxiv.org/pdf/math/0607691)

[Ozsvath and Szabo, *Holomorphic disks and topological invariants for closed three-manifolds*](https://arxiv.org/pdf/math/0101206)

[Ozsvath and Szabo, *Holomorphic disks and knot invariants*, Proposition 3.5 and Theorem 3.1](https://arxiv.org/pdf/math/0209056)

[Ozsvath and Szabo, *Holomorphic disks and knot invariants*, §3.4](https://arxiv.org/pdf/math/0209056)

[Manolescu, *An Introduction to Knot Floer Homology*, §§3.3–3.5](https://web.stanford.edu/~cm5/hfk.pdf)

