---
id: "thm-afem-local-moment-interpolation-estimates"
kind: "theorem"
title: "Local approximation and reproduction of the P1 moment interpolant"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 1
deps:
  - "def-afem-local-moment-interpolant"
  - "lem-afem-vertex-patch-poincare"
  - "def-matching-affine-simplicial-meshes"
  - "def-broken-and-conforming-polynomial-spaces"
  - "thm-reference-simplex-trace-and-gauss-green"
  - "thm-polynomial-inverse-and-discrete-trace-estimates"
  - "thm-matching-continuous-piecewise-polynomials-are-wkp"
  - "thm-zero-boundary-piecewise-polynomials-in-w10p"
  - "lem-reference-polynomial-norm-equivalence"
  - "lem-shape-regular-affine-simplex-scaling"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "def-countable-choice"
proof_strategy: direct
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 1"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture1.pdf"
      locator: "§1.5, Clément interpolation and scaled trace estimate, PDF pp. 8–9."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and cumulative closure complexity."
---
## Statement

Assume Countable Choice, as in the Sobolev, affine-scaling and trace suppliers.

Let $\mathcal T$ be a shape-regular conforming triangular mesh and let $I_{\mathcal T}$ be the moment interpolant from [[def-afem-local-moment-interpolant]]. For each cell $K$, let $\omega_K$ be the union of vertex stars of its vertices. There is a constant $C$ depending only on shape regularity such that for every $v\in H_0^1(\Omega)$,
$$\|v-I_{\mathcal T}v\|_{L^2(K)}\le Ch_K\|\nabla v\|_{L^2(\omega_K)},\quad \|\nabla I_{\mathcal T}v\|_{L^2(K)}\le C\|\nabla v\|_{L^2(\omega_K)},$$
and, for every interior edge $E\subset\partial K$,
$$\|v-I_{\mathcal T}v\|_{L^2(E)}\le Ch_E^{1/2}\|\nabla v\|_{L^2(\omega_K\cup\omega_{K'})},$$
where $K'$ is the other incident cell. The operator maps into $V(\mathcal T)$ and reproduces every member of $V(\mathcal T)$.

## Facts & Assumptions

[A1] Countable Choice is assumed in the cited Sobolev and reference-simplex suppliers ([[def-countable-choice]]).

**Given:** Countable Choice, a shape-regular conforming triangular mesh, $v\in H_0^1(\Omega)$, the moment interpolant of [[def-afem-local-moment-interpolant]], and the patch inequalities of [[lem-afem-vertex-patch-poincare]].

[F1] On each reference triangle, the three barycentric coordinates form a basis of $P_1$ and their Gram matrix is positive definite; affine scaling transfers the dual moments and polynomial norm bounds to every shape-regular cell ([[def-afem-local-moment-interpolant]], [[lem-reference-polynomial-norm-equivalence]], [[lem-shape-regular-affine-simplex-scaling]]).

[F2] Matching continuous piecewise-affine functions belong to $W^{1,2}$, and a continuous piecewise-affine function with zero boundary nodal values belongs to $W_0^{1,2}$ ([[thm-matching-continuous-piecewise-polynomials-are-wkp]], [[thm-zero-boundary-piecewise-polynomials-in-w10p]]).

[F3] Vertex stars have bounded overlap and uniformly bounded valence on a shape-regular conforming mesh ([[lem-afem-vertex-patch-poincare]]).

## Proof

1.1 The definition gives finitely many coefficients, each an integral against a bounded affine polynomial, hence a linear functional on $L^2(K_z)$; the resulting finite sum is continuous piecewise affine. Its boundary nodal coefficients are zero, so [F2] places it in $V(\mathcal T)$. If $v\in V(\mathcal T)$, then on the selected cell $K_z$ its affine restriction is a linear combination of the three local hats. The dual moment identities recover its nodal coefficient at $z$, so $c_z(v)=v(z)$ at every interior vertex; at boundary vertices both the coefficient and the P1 trace value are zero. Therefore $I_{\mathcal T}v=v$. [A1, F1, F2, given]

1.2 For a cell $K$ not meeting the boundary, set $c=v_{\omega_K}$; for a boundary cell set $c=0$. The patch Poincaré estimate gives $\|v-c\|_{L^2(\omega_K)}\le Ch_K\|\nabla v\|_{L^2(\omega_K)}$. For each interior vertex $z$ of $K$, put $a_z=c_z(v)-c=\int_{K_z}(v-c)\psi_{z,K_z}$; this equality follows from the dual identities, which give $\int_{K_z}\psi_{z,K_z}=1$. These are local integrals of an $L^2(K_z)$ function, with no application of $I_{\mathcal T}$ to $v-c$. The scaled dual bound gives $|a_z|\le Ch_K^{-1}\|v-c\|_{L^2(K_z)}$, since $K_z\subset\omega_K$ and its diameter is comparable to $h_K$. At a boundary vertex of $K$, necessarily $c=0$ and the corresponding coefficient difference is zero. The three barycentric hats on $K$ sum to one, so $(I_{\mathcal T}v-c)|_K=\sum_{z\in\mathcal V(K),\ z\ {\rm interior}}a_z\varphi_z|_K$. Each hat has $L^2(K)$ norm at most $Ch_K$ and gradient norm at most $C$. Thus $\|I_{\mathcal T}v-c\|_{L^2(K)}\le C\|v-c\|_{L^2(\omega_K)}$ and $\|\nabla I_{\mathcal T}v\|_{L^2(K)}\le Ch_K^{-1}\|v-c\|_{L^2(\omega_K)}$. The patch inequality and $v-I_{\mathcal T}v=(v-c)-(I_{\mathcal T}v-c)$ prove the first two bounds. This argument uses only that each selected $K_z$ is incident to $z$, so its constants are uniform over all such selections. [A1, F1, F3, given, algebra]

2.1 Apply the scaled trace inequality to $v-I_{\mathcal T}v$ on $K$. The first two bounds from step 1.2 control the cell $L^2$ term and its gradient; the neighboring patch gives the same estimates on $K'$. Since $h_E$ and $h_K$ are comparable by shape regularity, this yields the asserted edge bound. [A1, F1, F3, step 1.2, algebra] ∎
