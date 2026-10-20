---
id: lem-bivariate-gaussian-feature-expectations-continuous
kind: lemma
title: Continuity of bivariate Gaussian feature expectations, including singular limits
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - cor-cauchy-schwarz-for-random-variables
  - def-axiom-of-choice
  - def-multivariate-normal-law
  - def-standard-normal-and-normal-laws
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - lem-complex-lp-completeness-density-and-inner-product
  - thm-dominated-convergence
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Arthur Jacot, Franck Gabriel, and Clément Hongler, Neural Tangent Kernel: Convergence and Generalization in Neural Networks"
      url: "https://arxiv.org/pdf/1806.07572"
      locator: "Appendix A.1 and A.4, printed pp. 10–12 and 16–18; continuity of the Gaussian covariance and derivative expectations used in the width limits"
---

## Statement

Assume AC. Let $C_n$ be real symmetric positive-semidefinite $2\times2$ matrices converging entrywise to $C$, and suppose both diagonal entries of $C_n$ and of $C$ are positive. Let $(U_n,V_n)$ and $(U,V)$ have centered bivariate normal laws with covariance matrices $C_n$ and $C$, respectively; singular covariance matrices are allowed. For every globally Lipschitz $\tau:\mathbb R\to\mathbb R$,
$$\mathbb E[\tau(U_n)\tau(V_n)]\longrightarrow\mathbb E[\tau(U)\tau(V)].$$
For every bounded Borel function $g:\mathbb R\to\mathbb R$,
$$\mathbb E[g(U_n)g(V_n)]\longrightarrow\mathbb E[g(U)g(V)].$$
The second conclusion applies to any bounded measurable representative of an almost-everywhere derivative, including when the limiting pair is supported on a line.

## Statement references

[Jacot, Gabriel, and Hongler, Appendix A.1 and A.4, Gaussian covariance and derivative expectations in the NTK recursion](https://arxiv.org/pdf/1806.07572)

[[def-multivariate-normal-law|Finite Gaussian vectors are realized by a covariance square root times independent standard normals]]

[[lem-complex-lp-completeness-density-and-inner-product|Smooth compactly supported functions are dense in Lebesgue L²]]

## Facts & Assumptions

**Given:** AC; positive limiting and approximating marginal variances; bivariate centered Gaussian vectors with the stated covariance matrices; either a globally Lipschitz feature $\tau$ or a bounded Borel feature $g$.

[A1] AC supplies the countable and dependent choice used in the finite Gaussian-law construction ([[def-axiom-of-choice]], [[lem-ac-supplies-sequential-choices-for-probability-constructions]]).

[F1] A finite centered multivariate normal vector with covariance $C$ can be represented as $C^{1/2}G$, where $G$ has independent standard-normal coordinates ([[def-multivariate-normal-law]]).

[F2] The standard normal coordinates have a positive density and finite second moments ([[def-standard-normal-and-normal-laws]]).

[F3] Under countable choice, smooth compactly supported functions are dense in Lebesgue $L^2$ ([[lem-complex-lp-completeness-density-and-inner-product]]).

[F4] Cauchy–Schwarz bounds the absolute expectation of a product by the product of its marginal $L^2$ norms ([[cor-cauchy-schwarz-for-random-variables]]).

[F5] Pointwise convergence under an integrable majorant passes through expectation ([[thm-dominated-convergence]]).

## Proof
**Proof technique:** direct.

1.1 Write $C_n=\begin{pmatrix}v_n&c_n\\c_n&w_n\end{pmatrix}$ and $d_n=\det C_n\ge0$. Since $v_n,w_n>0$, $\operatorname{tr}C_n+2\sqrt{d_n}>0$. The matrix $A_n=(C_n+\sqrt{d_n}I_2)/\sqrt{\operatorname{tr}C_n+2\sqrt{d_n}}$ is positive semidefinite. The identity $C_n^2-(\operatorname{tr}C_n)C_n+d_nI_2=0$ gives $A_n^2=C_n$ by expansion; the same formula defines $A$ for $C$, and entrywise convergence gives $A_n\to A$. [A1, F1, given, algebra, construct]

1.2 Fix a variance $s>\max(C_{11},C_{22})$. For all sufficiently large $n$, the marginal variances of $U_n,V_n$ lie in a compact subinterval of $(0,s)$, so their normal densities are bounded above by a common constant times the density of $N(0,s)$. The isometry $h\mapsto h\sqrt{\phi_s}$ from $L^2(N(0,s))$ into Lebesgue $L^2$ and [F3] provide bounded continuous functions $g_k$ with $\|g-g_k\|_{L^2(N(0,s))}\to0$. The density bound makes these approximation errors tend to zero uniformly for the marginals of all sufficiently large $n$ and for the two limiting marginals. [A1, F2, F3, given, construct]

2.1 Let $G=(G_1,G_2)$ have independent standard-normal coordinates and couple $(U_n,V_n)=A_nG$ and $(U,V)=AG$. By [F1] these have the required laws, and $A_n\to A$ gives $(U_n,V_n)\to(U,V)$ almost surely. [F1, F2, step 1.1, construct]

2.2 By [F4], for each such $n$ the difference between $\mathbb E[g(U_n)g(V_n)]$ and $\mathbb E[g_k(U_n)g_k(V_n)]$ is bounded by $\|g-g_k\|_{L^2(U_n)}\|g\|_{L^2(V_n)}+\|g_k\|_{L^2(U_n)}\|g-g_k\|_{L^2(V_n)}$, which tends to zero uniformly in sufficiently large $n$ as $k\to\infty$ by step 1.2; the same bound applies to $(U,V)$. [F4, step 1.2]

3.1 If $\tau$ is globally Lipschitz, then it is continuous and has at most linear growth. The matrices $A_n$ are bounded, so $|\tau(U_n)\tau(V_n)|\le M(1+\|G\|_2^2)$ for one finite $M$ independent of all sufficiently large $n$; [F2] makes this majorant integrable. Almost-sure convergence in step 2.1 and [F5] prove the first expectation limit. [F2, F5, given, step 2.1]

4.1 For fixed $k$, $g_k$ is bounded and continuous, so step 2.1 and [F5] give $\mathbb E[g_k(U_n)g_k(V_n)]\to\mathbb E[g_k(U)g_k(V)]$. First take $n\to\infty$, then $k\to\infty$ in the error bounds of step 2.2. This proves the bounded-Borel expectation limit, including singular $C$. [F5, step 2.1, step 2.2] ∎
