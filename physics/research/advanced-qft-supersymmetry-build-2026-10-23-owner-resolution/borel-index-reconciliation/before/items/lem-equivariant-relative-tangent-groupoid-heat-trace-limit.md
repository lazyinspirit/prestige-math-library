---
id: lem-equivariant-relative-tangent-groupoid-heat-trace-limit
kind: lemma
title: "Relative tangent-groupoid heat-trace limit at simple fixed points"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
page: qftx-equivariant-index
dependency_level: 1
deps:
  - def-equivariant-elliptic-complex-index
  - lem-equivariant-rescaled-heat-kernel-extension
  - def-countable-choice
  - thm-dominated-convergence
dependency_roles:
  def-equivariant-elliptic-complex-index: mathematical-premise
  lem-equivariant-rescaled-heat-kernel-extension: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-dominated-convergence: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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
verification:
  precheck: pending
---

## Statement

Assume countable choice. Let $T$ be a compact torus acting smoothly by isometries on a compact Riemannian manifold $M$ without boundary. Let $E^0,\ldots,E^N$ be finite-rank Hermitian bundles and, for $0\le j<N$, let $d_j:C^\infty(M,E^j)\to C^\infty(M,E^{j+1})$ be first-order differential maps with $d_{j+1}d_j=0$. Assume the principal-symbol sequence is exact for every nonzero real cotangent vector. Suppose smooth unitary bundle maps $\rho_t^j:E_x^j\to E_{t\cdot x}^j$ satisfy $\rho_e^j=I$ and $\rho_{st}^j|_{E_x^j}=\rho_s^j|_{E_{t\cdot x}^j}\circ\rho_t^j|_{E_x^j}$, and commute with all $d_j$; on sections set $(U_t^j s)(y)=\rho_t^j(s(t^{-1}\cdot y))$. Put $d_{-1}=d_N=0$, $E^{\mathrm{ev}}=\bigoplus_{j\text{ even}}E^j$, $E^{\mathrm{odd}}=\bigoplus_{j\text{ odd}}E^j$, $d=\bigoplus_jd_j$, and $\Delta=(d+d^*)^2$, where $d^*$ is the formal adjoint for the chosen metrics and Riemannian volume. For the nonnegative selfadjoint Hodge realization on $L^2$, assume that $\Delta$ has discrete spectrum, smooth eigensections, a trace-class heat operator $e^{-t\Delta}$ with smooth kernel for every $t>0$, finite-dimensional cohomology, and a harmonic representative for each cohomology class. For $g\in T$, let $M^g=\{x\in M:g\cdot x=x\}$, and suppose each $x\in M^g$ is simple, meaning $I-dg_x:T_xM\to T_xM$ is invertible. Then

$$\lim_{t\downarrow0}\operatorname{Str}(U_g e^{-t\Delta})=\sum_{x\in M^g}\frac{\sum_{j=0}^N(-1)^j\operatorname{tr}(\rho_g^j|_{E_x^j})}{|\det_{\mathbb R}(I-dg_x)|}.$$

Here $\operatorname{Str}$ is the trace on $E^{\mathrm{ev}}$ minus the trace on $E^{\mathrm{odd}}$. The simplicity condition makes $M^g$ a finite set; the determinant is the normal Jacobian at that isolated fixed point.

## Statement references

[Zelin Yi, Theorem 1.1 and §§2–5: relative tangent-groupoid heat-trace limit](https://arxiv.org/pdf/2003.00955)

## Facts & Assumptions

**Given:** The manifold, compact torus action, equivariant first-order elliptic complex and Hodge heat data in the Statement, and an element $g\in T$ with simple fixed points.

[F1] The section action is $U_gs(x)=\rho_g(s(g^{-1}\cdot x))$, and the differentials commute with it. [[def-equivariant-elliptic-complex-index]]

[L1] Positive matrix-symbol second-order operators with the stated spectral heat data have the locally uniform rescaled tangent kernel, normalized tangent integral $\int k_x(w)\,dw=I$, and, for every $L>n$, the estimate $\|K_t(y,z)\|\le C_Lt^{-n/2}(1+d(y,z)/\sqrt t)^{-L}$. The proof constructs a frozen-coefficient kernel and its convergent Volterra correction; no scalar-principal-symbol assumption is used. [[lem-equivariant-rescaled-heat-kernel-extension]]

[F2] Dominated convergence holds under an integrable majorant. [[thm-dominated-convergence]]

[A1] Countable choice is inherited from the Fourier/partition interfaces in [L1]. [[def-countable-choice]]

## Proof

**Proof technique:** Tangent heat-kernel rescaling with a proved polynomial majorant.

**Given:** The Hodge heat operator and equivariant action in the Statement.

1.1 At a simple fixed point $x$, the inverse function theorem makes $x$ isolated in $M^g$; since $M^g$ is closed in compact $M$, it is finite. Choose disjoint sufficiently small normal neighborhoods of these points. In normal coordinates the isometry satisfies $g^{-1}\exp_x(\sqrt t\,v)=\exp_x(\sqrt t\,dg_x^{-1}v)$. For the trace-integral identity, factor $U_ge^{-t\Delta}=(U_ge^{-t\Delta/2})e^{-t\Delta/2}$. Both factors have smooth kernels on compact $M$ and finite Hilbert–Schmidt norm. Expansion in an orthonormal basis and Cauchy–Schwarz make the integrated product absolutely summable, giving its trace as the integral of the composed diagonal kernel. The section-action convention in [F1] therefore identifies the trace integrand with $\sum_j(-1)^j\operatorname{tr}(\rho_g^j K_t^j(g^{-1}y,y))$. [given, F1, algebra]

1.2 Put $B_j=\sigma(d_j)(x,\xi)$, with $B_{-1}=B_N=0$. The principal symbol on $E^j$ of $\Delta$ is $p_j=B_j^*B_j+B_{j-1}B_{j-1}^*$. If its quadratic form vanishes on $v$, then $B_jv=0$ and $B_{j-1}^*v=0$; exactness gives $v\in\operatorname{im}B_{j-1}$ and also orthogonality to that image, hence $v=0$. Compactness of the unit cotangent sphere bundle gives $p_j(x,\xi)\ge c|\xi|^2I$ uniformly. Thus [L1] applies to $\Delta$, using exactly the given spectral heat data. Its principal symbol may be matrix-valued. [given, L1, A1, algebra]

2.1 Write $n=\dim M$ and $J_x$ for the normal-coordinate volume density. For $y=\exp_x(\sqrt t\,v)$ in the chosen neighborhood, [L1] and step 1.1 imply that $t^{n/2}J_x(\sqrt t\,v)\sum_j(-1)^j\operatorname{tr}(\rho_g^j K_t^j(g^{-1}y,y))$ tends pointwise to $\sum_j(-1)^j\operatorname{tr}(\rho_g^j|_{E_x^j}\,k_{x,1}^j(dg_x^{-1}v,v))$. Simplicity makes $dg_x^{-1}-I$ invertible. Local distance comparison in the normal chart therefore gives $d(g^{-1}y,y)\ge c_x\sqrt t\,|v|$. Choose $L>n$; bounded density, unitary $\rho_g$ and [L1] bound the extended-by-zero rescaled density by $C(1+c_x|v|)^{-L}$, integrable on $T_xM$. Outside these neighborhoods compactness gives $d(g^{-1}y,y)\ge\delta>0$, so [L1] bounds the full complementary trace integral by $C t^{(L-n)/2}\to0$. By [F2], the heat-supertrace limit is consequently the sum of these tangent integrals. No uniform-integral-bound-to-convergence implication is used. [given, L1, F2, step 1.1, step 1.2, algebra]

3.1 Since $dg_x$ is orthogonal, $|\det(dg_x^{-1}-I)|=|\det(I-dg_x)|$. The change of variables $w=(dg_x^{-1}-I)v$ therefore contributes $|\det_{\mathbb R}(I-dg_x)|^{-1}$. By [L1], the constant-coefficient tangent heat kernel has integral $I_{E_x^\bullet}$. Its graded fiber trace after composition with $\rho_g$ is $\sum_j(-1)^j\operatorname{tr}(\rho_g|_{E_x^j})$. For $n=0$, the tangent integral and determinant are both the empty-dimensional values $1$, so the same expression holds. Summing the finitely many contributions proves the stated limit. [L1, step 2.1, algebra] ∎

## Proof references

[Gilkey, §§1.6–1.8: general positive matrix-symbol heat-parametrix estimates](https://pages.uoregon.edu/gilkey/dirPDF/InvarianceTheory1Ed.pdf)

[Zelin Yi, §§2–5: relative tangent groupoid, rescaled heat kernels, and the Fourier-normalized fixed-point calculation](https://arxiv.org/pdf/2003.00955)

[Berline–Getzler–Vergne, Chapter 6 §6.2, Lemma 6.4: isolated fixed-point heat-kernel concentration for Dirac-type complexes](https://djvu.online/file/ruwkno3rtNaI5)

[J. L. Heitsch, §3 proof of Theorem 3.1: heat trace and local Gaussian concentration, with the final local calculation abbreviated](https://homepages.math.uic.edu/~heitsch/HeitschBC.pdf)
