---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-orthogonal-clifford-families-and-centrioles.json
  precheck: n/a
id: def-orthogonal-clifford-families-and-centrioles
kind: definition
title: "Orthogonal Clifford families and centriole spaces"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 3
deps: [def-clifford-algebra-of-a-quadratic-space, thm-universal-property-of-clifford-algebra]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021)"
      url: "https://arxiv.org/pdf/2011.14368"
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Definition

Let $p$ be a positive even integer and define $SO(p)=\{J\in M_p(\mathbb R):J^{\mathsf T}J=I,\ \det J=1\}$. Its trace metric is the left-invariant Riemannian metric whose inner product at the identity is $\langle A,B\rangle=-(1/p)\operatorname{tr}(AB)$ for skew-symmetric $A,B$; at $J$ its value on tangent vectors $JA,JB$ is the same. An orthogonal negative-square Clifford family of length $l$ is a list $J_1,\ldots,J_l\in SO(p)$ with $J_i^2=-I$ and $J_iJ_j=-J_jJ_i$ for $i\ne j$, equivalently a representation of $C_l=Cl(\mathbb R^l,-\lVert\cdot\rVert^2)$ by these matrices. For a Riemannian manifold $P$ and points $x,y$, its midpoint set is $\{\gamma(1/2):\gamma:[0,1]\to P\text{ is a length-minimizing geodesic from }x\text{ to }y\}$; a centriole is a connected component of such a midpoint set. Put $P_0=SO(p)$, $J_0=I$, and for $1\le j\le l$ define $\widehat P_j=\{J\in SO(p):J^2=-I\text{ and }JJ_i=-J_iJ\text{ for }1\le i<j\}$; let $P_j$ be the connected component of $\widehat P_j$ containing $J_j$. A compatible family also satisfies $J_j\in P_{j-1}$. The geometric midpoint interpretation of this algebraic component is the claim of the next lemma.