---
id: def-real-graded-clifford-module-bundles-and-groups
kind: definition
title: "Real graded Clifford-module bundles and their Grothendieck groups"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 1
deps: [def-clifford-algebra-of-a-quadratic-space, def-clifford-graded-algebra-module-and-tensor-product, def-real-and-complex-topological-vector-bundle]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021)"
      url: "https://arxiv.org/pdf/2011.14368"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Definition

Let $V\to X$ be a finite-rank Euclidean real vector bundle and put $C(V)=\mathrm{Cl}(V,-\langle\cdot,\cdot\rangle)$, so each vector $v$ acts with square $-\lVert v\rVert^2$. An **ungraded** $C(V)$-module bundle is a finite-rank real vector bundle with continuous fiberwise unital Clifford action. Write $K_{C(V)}(X)$ for the Grothendieck group of their direct-sum monoid.

A **graded** $C(V)$-module bundle is a module $\Lambda=\Lambda^0\oplus\Lambda^1$ whose action satisfies $C(V)^i\Lambda^j\subseteq\Lambda^{i+j}$, with indices modulo two. In particular vector multiplication is odd: it exchanges the two parity subbundles. Write $M(V)$ for the Grothendieck group of graded modules. The same convention gives $M_n$ for the negative Clifford algebra $C_n=\mathrm{Cl}_{0,n}$ over a point. Ungraded $K_{C(V)}(X)$ and graded $M(V)$ are distinct groups; neither is identified with the other by notation. The rank-$4m$ volume Thom theorem uses the former, whereas ABS uses a restriction quotient of the latter.
