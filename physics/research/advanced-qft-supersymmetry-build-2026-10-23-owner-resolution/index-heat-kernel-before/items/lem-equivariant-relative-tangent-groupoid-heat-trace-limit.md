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
dependency_roles:
  def-equivariant-elliptic-complex-index: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
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

Let $T$ be a compact torus acting smoothly by isometries on a compact Riemannian manifold $M$ without boundary. Let $E^0,\ldots,E^N$ be finite-rank Hermitian bundles and, for $0\le j<N$, let $d_j:C^\infty(M,E^j)\to C^\infty(M,E^{j+1})$ be first-order differential maps with $d_{j+1}d_j=0$. Assume the principal-symbol sequence is exact for every nonzero real cotangent vector. Suppose smooth unitary bundle maps $\rho_t^j:E_x^j\to E_{t\cdot x}^j$ satisfy $\rho_e^j=I$ and $\rho_{st}^j|_{E_x^j}=\rho_s^j|_{E_{t\cdot x}^j}\circ\rho_t^j|_{E_x^j}$, and commute with all $d_j$; on sections set $(U_t^j s)(y)=\rho_t^j(s(t^{-1}\cdot y))$. Put $d_{-1}=d_N=0$, $E^{\mathrm{ev}}=\bigoplus_{j\text{ even}}E^j$, $E^{\mathrm{odd}}=\bigoplus_{j\text{ odd}}E^j$, $d=\bigoplus_jd_j$, and $\Delta=(d+d^*)^2$, where $d^*$ is the formal adjoint for the chosen metrics and Riemannian volume. Assume that $\Delta$ has discrete nonnegative spectrum, smooth eigensections, a trace-class heat operator $e^{-t\Delta}$ with smooth kernel for every $t>0$, finite-dimensional cohomology, and a harmonic representative for each cohomology class. For $g\in T$, let $M^g=\{x\in M:g\cdot x=x\}$, and suppose each $x\in M^g$ is simple, meaning $I-dg_x:T_xM\to T_xM$ is invertible. Then

$$\lim_{t\downarrow0}\operatorname{Str}(U_g e^{-t\Delta})=\sum_{x\in M^g}\frac{\sum_{j=0}^N(-1)^j\operatorname{tr}(\rho_g^j|_{E_x^j})}{|\det_{\mathbb R}(I-dg_x)|}.$$

Here $\operatorname{Str}$ is the trace on $E^{\mathrm{ev}}$ minus the trace on $E^{\mathrm{odd}}$. The simplicity condition makes $M^g$ a finite set; the determinant is the normal Jacobian at that isolated fixed point.

## Statement references

[Zelin Yi, Theorem 1.1 and §§2–5: relative tangent-groupoid heat-trace limit](https://arxiv.org/pdf/2003.00955)

## Facts & Assumptions

**Given:** The manifold, compact torus action, equivariant first-order elliptic complex and Hodge heat data in the Statement, and an element $g\in T$ with simple fixed points.

[F1] The section action is $U_gs(x)=\rho_g(s(g^{-1}\cdot x))$, and the differentials commute with it. [[def-equivariant-elliptic-complex-index]]

[A1] Write $n=\dim M$, let $K_t^j(y,z):E_z^j\to E_y^j$ be the smooth kernel of $e^{-t\Delta}$ relative to Riemannian volume, and choose disjoint normal neighborhoods $V_x$ of the fixed points. For $y=\exp_x(\sqrt t\,v)$, let $J_x(\sqrt t\,v)$ be the Riemannian volume density in these coordinates and let $k_{x,1}^j(a,b)$ be the time-one kernel of the constant-coefficient tangent operator determined by $\sigma_2(\Delta)_x$. In smooth unitary local frames, the rescaled local trace density

$$t^{n/2}J_x(\sqrt t\,v)\sum_{j=0}^N(-1)^j\operatorname{tr}\!\left(\rho_g^j|_{E_{g^{-1}y}^j\to E_y^j}\circ K_t^j(g^{-1}y,y)\right)$$

converges pointwise to $\sum_j(-1)^j\operatorname{tr}\!\left(\rho_g^j|_{E_x^j}\,k_{x,1}^j(dg_x^{-1}v,v)\right)$ and has an integrable majorant in $v$ independent of $0<t<t_0$ after extension by zero outside the rescaled chart. The trace integral over $M\setminus\bigcup_xV_x$ tends to zero. These are the rescaled local heat-kernel extension and off-fixed-set decay estimates. Zelin Yi constructs them by the relative tangent groupoid; Berline–Getzler–Vergne prove the corresponding isolated-point concentration for complexes with Dirac-type Hodge operator, using their Chapter 2 heat-kernel parametrix. The full generality stated here still has no local proof carrier in this batch. [Zelin Yi, §§2–4](https://arxiv.org/pdf/2003.00955), [Berline–Getzler–Vergne, Chapter 2 §§2.4–2.7 and Chapter 6 §6.2](https://djvu.online/file/ruwkno3rtNaI5)

## Proof

**Proof technique:** Relative tangent-groupoid rescaling, conditional on [A1].

**Given:** The Hodge heat operator and equivariant action in the Statement.

1.1 At a simple fixed point $x$, the inverse function theorem makes $x$ isolated in $M^g$; since $M^g$ is closed in compact $M$, it is finite. In normal coordinates at $x$, the isometry satisfies $g^{-1}\exp_x(\sqrt t\,v)=\exp_x(\sqrt t\,dg_x^{-1}v)$. The second-order operator $\Delta$ has smooth coefficients; conjugating by $u=\sqrt t\,v$ makes $t\Delta$ converge coefficientwise on bounded $v$-sets to its constant-coefficient principal operator at $x$, while lower-order terms acquire factors $\sqrt t$ or $t$. The rescaled volume density converges to Euclidean measure and the bundle transports converge to their fiber maps. The kernel convergence and integrable domination required to pass to the trace integral are precisely [A1]. [given, A1, algebra]

2.1 By [A1] and step 1.1, the small-time trace limit is the sum over $x\in M^g$ of the tangent-fiber integrals of the constant-coefficient heat kernel at $(dg_x^{-1}v,v)$, with the fiber action $\rho_g|_{E_x^\bullet}$. Translation invariance of this kernel gives $k_{x,1}(dg_x^{-1}v,v)=k_{x,1}((dg_x^{-1}-I)v,0)$. The section-action convention in [F1] identifies the fiber map in this trace with $\rho_g|_{E_x^\bullet}$. [given, A1, F1, step 1.1]

3.1 Since $dg_x$ is orthogonal, $|\det(dg_x^{-1}-I)|=|\det(I-dg_x)|$. The change of variables $w=(dg_x^{-1}-I)v$ therefore contributes $|\det_{\mathbb R}(I-dg_x)|^{-1}$. With Fourier convention $\mathcal F^{-1}f(w)=(2\pi)^{-n}\int e^{iw\cdot\xi}f(\xi)\,d\xi$, the constant-coefficient heat kernel is the inverse Fourier transform of $e^{-\sigma_2(\Delta)_x(\xi)}$. The principal symbol of the nonnegative elliptic Laplacian is positive definite; continuity on the unit sphere in $T_x^*M$ gives $\sigma_2(\Delta)_x(\xi)\ge c_x|\xi|^2I$ for some $c_x>0$. Thus the multiplier has Gaussian decay, and Fourier inversion gives $\int_{T_xM}k_{x,1}(w,0)\,dw=I_{E_x^\bullet}$. Its graded fiber trace after composition with $\rho_g$ is $\sum_j(-1)^j\operatorname{tr}(\rho_g|_{E_x^j})$. For $n=0$, the tangent integral and determinant are both the empty-dimensional values $1$, so the same expression holds. Summing the finitely many contributions proves the stated limit conditional on [A1]. [A1, step 2.1, algebra] ∎

## Proof references

[Zelin Yi, §§2–5: relative tangent groupoid, rescaled heat kernels, and the Fourier-normalized fixed-point calculation](https://arxiv.org/pdf/2003.00955)

[Berline–Getzler–Vergne, Chapter 6 §6.2, Lemma 6.4: isolated fixed-point heat-kernel concentration for Dirac-type complexes](https://djvu.online/file/ruwkno3rtNaI5)

[J. L. Heitsch, §3 proof of Theorem 3.1: heat trace and local Gaussian concentration, with the final local calculation abbreviated](https://homepages.math.uic.edu/~heitsch/HeitschBC.pdf)
