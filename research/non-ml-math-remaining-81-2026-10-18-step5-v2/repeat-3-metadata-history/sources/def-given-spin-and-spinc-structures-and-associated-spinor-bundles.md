---
id: def-given-spin-and-spinc-structures-and-associated-spinor-bundles
kind: definition
title: "Given Spin and Spin-c structures and their spinor bundles"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 8
deps: [def-oriented-real-vector-bundle-and-oriented-frame-bundle, def-real-clifford-group-and-normalized-pin-spin, def-principal-g-bundle-and-associated-fiber-bundle, thm-real-pin-spin-topological-double-covers, def-associated-bundle-to-a-principal-bundle-and-representation]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
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

Let V→X be an oriented Euclidean real vector bundle of rank n, with oriented frame bundle P_SO(V). Use Spin(n)=Spin_N=1(ℝⁿ,−‖·‖²), the norm-one even subgroup of the negative-square Clifford algebra, and its standard twisted-Clifford homomorphism λ_n:Spin(n)→SO(n). A Spin structure on V is a principal Spin(n)-bundle P with a Spin(n)-equivariant two-fold map $\widetilde\lambda:P\to P_{SO}(V)$ covering the identity on X and satisfying $\widetilde\lambda(pg)=\widetilde\lambda(p)\lambda_n(g)$. Put $\operatorname{Spin}^c(n)=(\operatorname{Spin}(n)\times U(1))/\langle(-1,-1)\rangle$ and define $\lambda_n^c:\operatorname{Spin}^c(n)\to SO(n)$ by $\lambda_n^c([s,z])=\lambda_n(s)$. A Spin$^c$ structure is a principal Spin$^c(n)$-bundle $P_c$ with a $\operatorname{Spin}^c(n)$-equivariant map $\widetilde\lambda_c:P_c\to P_{SO}(V)$ over the identity satisfying $\widetilde\lambda_c(p g)=\widetilde\lambda_c(p)\lambda_n^c(g)$. A spinor bundle is the associated bundle for the specified real Clifford representation; a Spin$^c$ spinor bundle is $P_c\times_{\tau^c}S$, where the specified complex representation $\tau$ of $\operatorname{Spin}(n)$ and integer $U(1)$ weight $k$ satisfy $\tau(-1)(-1)^k=I_S$, and $\tau^c([s,z])=z^k\tau(s)$. This condition is exactly that $(-1,-1)$ act trivially, so the representation descends to the quotient. For the complex Clifford spinor representation, $\tau(-1)=-I_S$ and the standard weight is $k=1$. These are given structures; this definition asserts no existence criterion.
