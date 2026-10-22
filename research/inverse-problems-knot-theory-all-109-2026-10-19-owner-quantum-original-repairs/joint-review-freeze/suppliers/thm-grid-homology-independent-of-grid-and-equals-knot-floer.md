---
id: thm-grid-homology-independent-of-grid-and-equals-knot-floer
kind: theorem
title: "Grid homology is independent of the grid and computes knot Floer homology"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-grid-diagram-for-an-oriented-knot
  - def-admissible-pointed-heegaard-floer-data
  - alg-grid-knot-floer-complex
  - lem-grid-rectangle-differential-squares-to-zero
  - lem-grid-diagram-is-admissible
  - thm-grid-commutation-stabilization-invariance-proof
  - thm-grid-moves-generate-oriented-knot-isotopy
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization
  - def-oriented-seifert-surface-and-knot-genus
  - def-countable-choice
  - lem-grid-marking-variables-chain-homotopic
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Ciprian Manolescu, Peter Ozsvath, and Sucharit Sarkar, A combinatorial description of knot Floer homology, §§1–3"
      url: "https://arxiv.org/pdf/math/0607691"
      locator: "Proposition 2.3 and equations (5)–(9), printed pp.7–10, and §§1–3, printed pp.1–18; multipointed complex, collapsed-complex independence, stable V factor, grid comparison, and the proof's analytic boundary"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Chapters 5 and 13"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Combinatorial invariance, filtered complex, and stable basepoint-factor arguments"
    - title: "Ciprian Manolescu, An Introduction to Knot Floer Homology, §§3.3–4.3"
      url: "https://web.stanford.edu/~cm5/hfk.pdf"
      locator: "Printed pp.12–18; multipointed comparison, grid rectangles, and the stable V tensor factor"
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "§2.6, printed pp.15–17; the generator-to-Spin^c assignment via homology classes of nowhere-vanishing vector fields and the first Chern class"
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and knot invariants"
      url: "https://arxiv.org/pdf/math/0209056"
      locator: "§3.4, printed p.18; the Alexander summand indexed by half the first-Chern-class pairing with the capped-off Seifert surface"
---

## Statement

Assume countable choice. Let $K$ be an oriented knot in $S^3$, and let $F$ be a compact connected oriented surface embedded in $S^3$ with boundary $K$ and minimum possible genus; write $g(K)=\operatorname{genus}(F)$. Let $G$ be any toroidal grid diagram for $K$ with grid number $n$. Let $C^-_{\mathrm{grid}}(G)$ be the full filtered minus complex produced by the grid-complex algorithm, and let $C^-_U(G)$ denote this same complex regarded over $\mathbb F_2[U]$ by letting $U$ act as one chosen $U_i$, with the other variables retained independently. For an admissible $2n$-pointed Heegaard diagram $\mathcal H$ compatible with $(K,F)$, define $C^-_U(\mathcal H)$ by the same restriction to a single variable action. Write $CFK^-(K)$ for the full filtered complex of an admissible doubly-pointed diagram. The ordinary fully collapsed quotient, obtained instead by setting all $U_i=U$, has type $CFK^-(K)\otimes V^{\otimes(n-1)}$; the restriction of scalars $C^-_U$ has type $CFK^-(K)$.

For the absolute Alexander normalization, let $\mathcal H_1$ be an admissible doubly-pointed Heegaard diagram for $(K,F)$. For a generator $\mathbf x$ of $\mathcal H_1$, set
$$A_F(\mathbf x)=\frac12\left\langle c_1(\mathfrak s_{w,z}(\mathbf x)),[\widehat F]\right\rangle,$$
where $\mathfrak s_{w,z}(\mathbf x)$ is the relative $\operatorname{Spin}^c$ structure assigned to this generator by the pointed Heegaard construction: it is the homology class of the nowhere-vanishing vector field obtained from the gradient trajectories through $\mathbf x$ and the chosen basepoint pair, after extending the field across small balls around the critical points. Its first Chern class is that of the oriented plane field orthogonal to this vector field. The surface $\widehat F$ is obtained by removing a tubular neighborhood $N(K)$ from $F$ and capping the resulting longitude with the meridian disk of the solid torus attached in zero-framed surgery on $K$. Let $\widehat{HFK}(K)$ be the homology of the Alexander-associated-graded complex obtained from the doubly-pointed complex $C^-_U(\mathcal H_1)$ by quotienting by its sole variable $U$, with this $A_F$ normalization.

Then $C^-_U(G)$ and $C^-_U(\mathcal H)$ are filtered chain homotopy equivalent, preserving relative Maslov grading and the $A_F$ filtration, and their Alexander-associated-graded minus complexes are chain homotopy equivalent. For any two grids of $K$, the resulting normalized filtered complexes are filtered chain homotopy equivalent. If $\widetilde{GH}(G)$ denotes the homology of the tilde grid complex over $\mathbb F_2$, then
$$\widetilde{GH}(G)\cong\widehat{HFK}(K)\otimes V^{\otimes(n-1)},$$
where $V$ is the two-dimensional bigraded vector space with one generator in bidegree $(0,0)$ and one in bidegree $(-1,-1)$.
## Statement references

[[def-grid-diagram-for-an-oriented-knot|Toroidal grids and their orientation convention]]

[[def-admissible-pointed-heegaard-floer-data|The pointed analytic knot Floer complex]]

[[def-oriented-seifert-surface-and-knot-genus|The minimum-genus normalization convention]]

[[lem-grid-marking-variables-chain-homotopic|Identification of the basepoint-variable actions]]

[[thm-grid-commutation-stabilization-invariance-proof|Grid-move invariance]]

[[thm-grid-moves-generate-oriented-knot-isotopy|Generation of oriented knot isotopy by grid moves]]

[[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing|Regularity, compactness, and gluing]]

[[thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization|Analytic Heegaard-move invariance]]

[Manolescu, Ozsvath, and Sarkar, “A combinatorial description of knot Floer homology,” §§1–3](https://arxiv.org/pdf/math/0607691)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Chapters 5 and 13](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

[Manolescu, *An Introduction to Knot Floer Homology*, §§3.3–4.3](https://web.stanford.edu/~cm5/hfk.pdf)

[Ozsvath and Szabo, *Holomorphic disks and topological invariants for closed three-manifolds*, §2.6](https://arxiv.org/pdf/math/0101206)

[Ozsvath and Szabo, *Holomorphic disks and knot invariants*, §3.4](https://arxiv.org/pdf/math/0209056)

