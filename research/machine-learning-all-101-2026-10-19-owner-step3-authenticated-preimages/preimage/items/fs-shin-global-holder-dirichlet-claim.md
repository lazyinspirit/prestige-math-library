---
id: fs-shin-global-holder-dirichlet-claim
kind: false-statement
title: "Exterior spheres and continuous boundary data do not give global bounded C2alpha solvability"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-shin-elliptic-divergence-form-operator
  - cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain
  - lem-shin-elliptic-residual-stability
  - def-holder-spaces-c-k-alpha-and-their-scaled-norms
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  references:
    - title: "Shin, Darbon, and Karniadakis, On the Convergence of Physics-Informed Neural Networks for Linear Second-Order Elliptic and Parabolic Type PDEs"
      url: "https://arxiv.org/pdf/2004.01806"
      locator: "Appendix D; source formulation corrected to local interior regularity"
---

## Statement

Let $0<\alpha<1$ and let $U\subset\mathbb R^d$ be bounded and satisfy an exterior sphere condition at every boundary point. Let $a_{ij}=a_{ji}\in C^{1,\alpha}(U)$ be uniformly elliptic with minimum eigenvalue at least $\lambda_0>0$, let $b_i\in C^{1,\alpha}(U)$ and $c_i,d\in C^\alpha(U)$, and define
$$L[u]=\sum_{i,j=1}^dD_i(a_{ij}D_j u+b_i u)+\sum_{i=1}^d c_iD_i u+du.$$
Assume $\sum_{i,j}|a_{ij}(x)|^2\le\Lambda$ and $\lambda_0^{-2}(\|b(x)\|^2+\|c(x)\|^2)+\lambda_0^{-1}|d(x)|\le v^2$ on $U$, and use the expanded coefficients $\widetilde b_j=\sum_iD_i a_{ij}+b_j+c_j$ and $\widetilde c=\sum_iD_i b_i+d\le0$. For every $f\in C^{0,\alpha}(U)$ and $g\in C^0(\partial U)$, the source assertion is that the Dirichlet problem $L[u]=f$ in $U$, $u=g$ on $\partial U$ has a unique solution $u\in C^{2,\alpha}(U)\cap C^0(\bar U)$. For any $h\in C^0(U)$ with $L[h]\in C^{0,\alpha}(U)$ and $h\in C^{0,\alpha}(\partial U)$, the source further asserts
$$\|u-h\|_{C^0(U)}\le C\bigl(\|f-L[h]\|_{C^0(U)}+\|g-h\|_{C^0(\partial U)}\bigr),$$
where $C$ depends only on the domain and the displayed coefficient bounds. The global existence part of this assertion is false under the library's bounded global Hölder convention.

## Statement references

[Shin et al., Theorem D.1 and Lemma D.2, PDF p.26: source assertion retained here](https://arxiv.org/pdf/2004.01806)

[[cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain]]

## Facts & Assumptions

**Given:** The source assertion in the Statement, including its printed divergence indexing. The refutation uses $b=c=d=0$, so the indexing discrepancy does not affect it.

[A1] Assume for contradiction that the asserted global existence conclusion holds for every admissible datum.

[F1] The sector $U=\{0<r<1,0<\theta<2\pi/3\}$ is bounded Lipschitz and satisfies the exterior-sphere condition. With $L=\Delta$, $g=0$ and $u=\chi(r)r^{3/2}\sin(3\theta/2)$, its smooth forcing $f=\Delta u$ is globally Hölder, and $u$ is classical and continuous on the closure, but has unbounded second derivatives ([[cex-shin-elliptic-corner-regularity-on-exterior-sphere-domain]]).

[F2] The zero-boundary classical homogeneous Dirichlet problem is unique by comparison ([[lem-shin-elliptic-residual-stability]]).

[F3] The global bounded Hölder norm includes the supremum of every second derivative ([[def-holder-spaces-c-k-alpha-and-their-scaled-norms]]). The positive-principal convention is fixed by [[def-shin-elliptic-divergence-form-operator]].

## Refutation

1.1 Assume for contradiction the claimed global existence assertion [A1]. Use the sector and data from [F1]. The coefficient matrix is the identity and all lower coefficients vanish; uniform ellipticity holds with $\lambda_0=1$, the pointwise source bounds hold with $\Lambda=2$ and $v=0$, and the expanded zero-order coefficient is zero. Thus these data satisfy every hypothesis of the claimed existence assertion. [assume-contra, F1, F3]

1.2 Assumption [A1] gives a global bounded $C^{2,\alpha}(U)$ solution $u^*$ continuous on the closure. The explicit $u$ from [F1] is a second classical continuous Dirichlet solution. Their difference is zero-boundary harmonic, so [F2] implies $u^*=u$. [A1, F1, F2]

2.1 Along $\theta=\pi/3$ and $r<1/4$, $\partial_{rr}u=(3/4)r^{-1/2}$ is unbounded. A globally bounded Cartesian Hessian would bound this unit-direction second derivative. Therefore [F3] excludes $u$ from the asserted global class, contradicting step 1.2. The global existence claim is false; its failure does not refute the separately proved classical residual estimate. [step 1.2, F1, F3, discharge-contradiction] ∎

## Remarks

The printed source formula also repeats $b_i u$ inside the double divergence sum, although its stated expanded drift contains $b$ only once. This defect is retained visibly in the historical assertion above. The native Laplacian sector refutation is independent of that discrepancy. The repaired existence theorem uses the intended single $b$ divergence and preserves the correct local-interior and conditional smooth-boundary branches.
