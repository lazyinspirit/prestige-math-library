---
id: lem-trivial-fundamental-group-implies-null-homology-for-plane-domains
kind: lemma
title: "A plane domain with trivial fundamental group is homologically simply connected"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-based-loops-and-fundamental-group,
       cor-cauchy-theorem-for-null-homotopic-loops,
       thm-homological-simple-connectivity-equivalences,
       def-complex-chain-and-cycle,
       def-integration-and-index-of-complex-chain,
       def-complex-domain,
       thm-open-connected-subsets-of-rn-are-polygonally-connected,
       def-polygonal-path-and-polygonal-connectedness,
       cor-piecewise-c1-paths-have-additive-speed-integral-length,
       prop-reversal-and-concatenation-of-complex-line-integrals]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 3, §5"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4, §4.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Statement

Let $\Omega\subseteq\mathbb C$ be a complex domain. If every based loop in
$\Omega$ represents the identity class in its fundamental group, then $\Omega$
is homologically simply connected.

## Facts & Assumptions

**Given:** A complex domain $\Omega$ whose fundamental group is trivial at every basepoint.

[L1] A based loop class is trivial exactly when the loop is path-homotopic to the constant loop at its basepoint ([[def-based-loops-and-fundamental-group]]).

[L2] A closed rectifiable contour path-homotopic relative to the endpoints to a constant loop has zero integral against every holomorphic function ([[cor-cauchy-theorem-for-null-homotopic-loops]]).

[L3] For a complex domain, homological simple connectivity is equivalent to the condition that every cycle has zero integral against every holomorphic function ([[thm-homological-simple-connectivity-equivalences]]).

[L4] A complex chain is a finite integer linear combination of contours, and its integral is the corresponding finite sum of contour integrals ([[def-complex-chain-and-cycle]], [[def-integration-and-index-of-complex-chain]]).

[L5] A complex domain is a nonempty connected open subset of $\mathbb C$, so under the usual identification with $\mathbb R^2$ it is polygonally connected ([[def-complex-domain]], [[thm-open-connected-subsets-of-rn-are-polygonally-connected]], [[def-polygonal-path-and-polygonal-connectedness]]).

[L6] Continuous piecewise-$C^1$ paths are rectifiable, and reversal changes sign while concatenation adds for complex line integrals ([[cor-piecewise-c1-paths-have-additive-speed-integral-length]], [[prop-reversal-and-concatenation-of-complex-line-integrals]]).

## Proof

**Proof technique:** direct.

1.1 Let $\Gamma=\sum_{j<r}m_j\gamma_j$ be a cycle with trace in $\Omega$, and let $f$ be holomorphic on $\Omega$. Choose a basepoint $z_0\in\Omega$. Let $$E:=\{\gamma_j(a_j):j<r,\ m_j\ne0\}\cup\{\gamma_j(b_j):j<r,\ m_j\ne0\}.$$ For each $q\in E$, [L5] gives a polygonal path $\lambda_q$ in $\Omega$ from $z_0$ to $q$; by [L6] each $\lambda_q$ is a rectifiable contour. [given, L4, L5, L6, choose]

1.2 Fix $j<r$ with $m_j\ne0$, and write $a_j=\gamma_j(a_j)$ and $b_j=\gamma_j(b_j)$. The contour $$\delta_j:=\lambda_{a_j}*\gamma_j*\lambda_{b_j}^-$$ is a based loop at $z_0$. By the triviality hypothesis, its loop class is the identity, so [L1] makes $\delta_j$ path-homotopic relative to the endpoints to the constant loop at $z_0$. Applying [L2] and then [L6] gives $$0=\int_{\delta_j} f(z)\,dz=\int_{\lambda_{a_j}} f(z)\,dz+\int_{\gamma_j} f(z)\,dz-\int_{\lambda_{b_j}} f(z)\,dz,$$ hence $$\int_{\gamma_j} f(z)\,dz=\int_{\lambda_{b_j}} f(z)\,dz-\int_{\lambda_{a_j}} f(z)\,dz.$$ [given, L1, L2, L6, algebra]

2.1 By [L4] and step 1.2, $$\int_\Gamma f(z)\,dz=\sum_{\substack{j<r\\m_j\ne0}}m_j\int_{\gamma_j} f(z)\,dz=\sum_{\substack{j<r\\m_j\ne0}}m_j\int_{\lambda_{b_j}} f(z)\,dz-\sum_{\substack{j<r\\m_j\ne0}}m_j\int_{\lambda_{a_j}} f(z)\,dz.$$ Grouping the two finite sums by endpoint $q\in E$ and using the boundary formula from [L4], this becomes $$\int_\Gamma f(z)\,dz=\sum_{q\in E}\partial\Gamma(q)\int_{\lambda_q} f(z)\,dz=0,$$ because $\Gamma$ is a cycle. Thus $\int_\Gamma f(z)\,dz=0$ for every holomorphic $f$ and every cycle $\Gamma$ in $\Omega$. [L4, step 1.2, algebra]

3.1 The criterion in [L3] now shows that $\Omega$ is homologically simply connected. [step 2.1, L3] ∎
