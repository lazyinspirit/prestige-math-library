---
id: thm-equivariant-index-character-formula
kind: theorem
title: "Equivariant elliptic-complex index character at simple fixed points"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-equivariant-index
dependency_level: 2
deps:
  - def-equivariant-elliptic-complex-index
  - lem-equivariant-relative-tangent-groupoid-heat-trace-limit
  - def-countable-choice
dependency_roles:
  def-equivariant-elliptic-complex-index: mathematical-premise
  lem-equivariant-relative-tangent-groupoid-heat-trace-limit: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Peter B. Gilkey, Invariance Theory, the Heat Equation, and the Atiyah-Singer Index Theorem, first edition"
      url: "https://pages.uoregon.edu/gilkey/dirPDF/InvarianceTheory1Ed.pdf"
    - title: "Zelin Yi, A Groupoid Proof of the Lefschetz fixed point formula"
      url: "https://arxiv.org/pdf/2003.00955"
    - title: "Nicole Berline, Ezra Getzler, and Michèle Vergne, Heat Kernels and Dirac Operators"
      url: "https://djvu.online/file/ruwkno3rtNaI5"
    - title: "J. L. Heitsch, The Lefschetz Principle, Fixed Point Theory, and Index Theory"
      url: "https://homepages.math.uic.edu/~heitsch/HeitschBC.pdf"
---

## Statement

Assume countable choice. Let $T$ be a compact torus acting smoothly by isometries on a compact smooth manifold $M$ without boundary. Let $E^0,\ldots,E^N$ be finite-rank Hermitian bundles, set $E^{-1}=E^{N+1}=0$ and $d_{-1}=d_N=0$, and for $0\le j<N$ let $d_j:C^\infty(M,E^j)\to C^\infty(M,E^{j+1})$ be first-order differential maps with $d_{j+1}d_j=0$. Assume the principal-symbol sequence is exact for every nonzero real cotangent vector. Suppose smooth unitary bundle maps $\rho_t^j:E_x^j\to E_{t\cdot x}^j$ satisfy $\rho_e^j=I$ and $\rho_{st}^j|_{E_x^j}=\rho_s^j|_{E_{t\cdot x}^j}\circ\rho_t^j|_{E_x^j}$, and commute with all $d_j$. Let $H^j=\ker d_j/\operatorname{im}d_{j-1}$ be finite-dimensional, use $T$-invariant Hermitian metrics and Riemannian volume to form the formal adjoint $d^*$ and $\Delta=(d+d^*)^2$, and, for its nonnegative selfadjoint Hodge realization on $L^2$, assume $\Delta$ has discrete spectrum, trace-class heat operators with smooth kernels for $t>0$, and zero eigenspace canonically isomorphic to $\bigoplus_jH^j$. Put $\operatorname{Ind}_T(E^\bullet)=\sum_j(-1)^j[H^j]\in R(T)$, where $R(T)$ is the Grothendieck ring of finite-dimensional continuous complex representations of $T$, and let $\chi_{\operatorname{Ind}_T(E^\bullet)}(g)$ be the alternating trace on these cohomology representations. For $g\in T$, suppose every fixed point $x\in M^g=\{y:g\cdot y=y\}$ is simple, meaning $I-dg_x:T_xM\to T_xM$ is invertible. Then

$$\chi_{\operatorname{Ind}_T(E^\bullet)}(g)=\sum_{x\in M^g}\frac{\sum_{j=0}^N(-1)^j\operatorname{tr}(\rho_g^j|_{E_x^j})}{|\det_{\mathbb R}(I-dg_x)|}.$$

The numerator is the fiber character $\sum_j(-1)^j\operatorname{tr}(\rho_g^j|_{E_x^j})$, equivalently the degree-zero equivariant Chern character of the virtual fiber $\sum_j(-1)^jE_x^j$; the denominator is the isolated fixed point's real normal Jacobian. The formula is asserted only at group elements with simple fixed points.

## Statement references

[Zelin Yi, Theorem 1.1 and §§1–5: first-order elliptic-complex fixed-point formula and proof](https://arxiv.org/pdf/2003.00955)

[Berline–Getzler–Vergne, Chapter 6 §§6.1–6.4 and §6.7: isolated Atiyah–Bott formula for Dirac-type complexes and the equivariant Dirac fixed-component extension](https://djvu.online/file/ruwkno3rtNaI5)

[J. L. Heitsch, Theorem 3.1 and §3 proof: elliptic-complex fixed-point theorem and heat-trace route](https://homepages.math.uic.edu/~heitsch/HeitschBC.pdf)

## Facts & Assumptions

**Given:** The complex, torus action, invariant metrics and Hodge heat data in the Statement, and an element $g\in T$ with simple fixed points.

[F1] The equivariant index is $\operatorname{Ind}_T(E^\bullet)=\sum_j(-1)^j[H^j(E^\bullet)]$, and its character is the alternating trace on these finite-dimensional cohomology representations. [[def-equivariant-elliptic-complex-index]]

[L1] The local heat-trace lemma states $\lim_{t\downarrow0}\operatorname{Str}(U_g e^{-t\Delta})=\sum_{x\in M^g}\frac{\sum_j(-1)^j\operatorname{tr}(\rho_g^j|_{E_x^j})}{|\det_{\mathbb R}(I-dg_x)|}$. Its current carrier is [[lem-equivariant-relative-tangent-groupoid-heat-trace-limit]]; its matrix-symbol heat-kernel estimates are proved by its declared supplier.

[A1] Countable choice is inherited from the heat-kernel supplier. [[def-countable-choice]]

## Proof

**Proof technique:** Equivariant spectral cancellation followed by the proved local heat-trace limit [L1].

**Given:** The Hodge heat data of the Statement and the cohomological index in [F1].

1.1 Put $D=d+d^*$. The section action $U_g$ is unitary and commutes with $d$; taking adjoints and using $U_g^*=U_g^{-1}$ gives $U_gd^*=d^*U_g$, so $D$ commutes with $U_g$. It exchanges even and odd degree and satisfies $D^2=\Delta$. On each positive $\Delta$-eigenspace with eigenvalue $\lambda>0$, $\lambda^{-1/2}D$ is an invertible $T$-equivariant map between its even and odd subspaces, so the two traces cancel. The heat operator is trace class, so the eigenvalue trace series is absolutely convergent and these cancellations may be summed. The zero eigenspace is the cohomology by the stated Hodge hypothesis, hence $\operatorname{Str}(U_g e^{-t\Delta})=\chi_{\operatorname{Ind}_T(E^\bullet)}(g)$ for every $t>0$. [given, F1, algebra]

2.1 Let $t\downarrow0$. The equality in step 1.1 is independent of $t$, and [L1] gives the limit of its left-hand side as the displayed fixed-point sum. Substitution proves the stated character identity. [A1, L1, step 1.1] ∎

## Proof sources

[Zelin Yi, §§2–5: relative tangent-groupoid heat-kernel rescaling and fixed-point trace](https://arxiv.org/pdf/2003.00955)

[Berline–Getzler–Vergne, Chapter 6 §§6.1–6.7: equivariant McKean–Singer identity and Dirac fixed-point method](https://djvu.online/file/ruwkno3rtNaI5)
