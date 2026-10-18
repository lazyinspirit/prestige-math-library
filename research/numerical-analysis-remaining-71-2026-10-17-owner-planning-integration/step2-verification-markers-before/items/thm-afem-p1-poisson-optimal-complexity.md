---
id: "thm-afem-p1-poisson-optimal-complexity"
kind: "theorem"
title: "Optimal P1 AFEM complexity for the Laplacian"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 5
deps:
  - "def-afem-p1-approximation-class"
  - "def-afem-p1-residual-estimator-and-data-oscillation"
  - "def-afem-nvb-labelled-triangulation-family"
  - "alg-dorfler-marking-and-conforming-nvb-refinement"
  - "lem-afem-nvb-conforming-closure-and-cumulative-counting"
  - "lem-afem-dorfler-marking-cardinality"
  - "thm-afem-error-and-oscillation-contraction"
  - "thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem"
  - "def-axiom-of-choice"
  - "def-countable-choice"
  - "lem-galerkin-orthogonality-for-conforming-galerkin-approximations"
proof_strategy: direct
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 4"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture4.pdf"
      locator: "§§4.1–4.3, closure complexity, localized upper bound, and restricted P1 Laplace complexity, PDF pp. 1–4."
    - title: "Cascón, Kreuzer, Nochetto & Siebert, Quasi-optimal convergence rate for an AFEM"
      url: "https://math.umd.edu/~rhn/papers/pdf/optimality.pdf"
      locator: "§§2.1–2.7, 3.2–3.3, Theorem 4.1, and §5."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and cumulative closure complexity."
---
## Statement

Assume the Axiom of Choice and Countable Choice used by the weak Dirichlet Poisson existence supplier. Let $\Omega$ be a bounded polygon, $\mathcal T_0$ a compatible shape-regular 2D NVB mesh, and $u\in H_0^1(\Omega)$ solve $-\Delta u=f$ with $f$ piecewise constant on $\mathcal T_0$. Run the exact P1 algorithm with three-generation refinement; assume each per-call budget suffices for every refinement through iteration $k$. Write $U_k$ for the unique exact P1 Galerkin solution on $\mathcal T_k$, estimator bulk parameter $0<\theta_E\le\min(1,(1-\lambda^2)/(C_{\rm loc}C_{\rm eff}))$ for a fixed $0<\lambda<1$, as in [[lem-afem-dorfler-marking-cardinality]], and any fixed oscillation parameter $\theta_O\in(0,1]$. If $u\in\mathbb A_s$ from [[def-afem-p1-approximation-class]] for $0<s\le\frac12$, then
$$\|\nabla(u-U_k)\|_2\le C|u|_{\mathbb A_s}(1+\#\mathcal T_k-\#\mathcal T_0)^{-s},$$
where $C$ depends on the initial mesh, marking parameters and estimator constants. This is an optimal-complexity theorem only for the Laplacian and P0 initial data.

## Facts & Assumptions

[A1] The Axiom of Choice and Countable Choice are used by the weak Dirichlet Poisson existence theorem ([[def-axiom-of-choice]], [[def-countable-choice]]).

**Given:** The Axiom of Choice, Countable Choice, the symmetric Laplace weak solution, P0 initial data, compatible 2D NVB meshes, the stated approximation-class bound, and exact Galerkin solutions.

[F1] The AFEM energy and oscillation contract; here oscillation is identically zero, so the energy error contracts geometrically ([[thm-afem-error-and-oscillation-contraction]]).

[F2] A comparison mesh reducing energy error by a fixed factor yields a Dörfler set no larger than its added-cell count ([[lem-afem-dorfler-marking-cardinality]]).

[F3] The sum of added cells over the adaptive sequence is bounded by a constant times the sum of marked-cell counts ([[lem-afem-nvb-conforming-closure-and-cumulative-counting]]).

[F4] The approximation seminorm bounds the best error over every finite mesh budget ([[def-afem-p1-approximation-class]]).

[F5] Under the Axiom of Choice and Countable Choice, weak Dirichlet Poisson on a bounded polygon has a unique $H_0^1$ solution for $f\in L^2$ ([[thm-existence-and-uniqueness-for-the-weak-dirichlet-poisson-problem]]).

[F6] Exact conforming Galerkin solutions satisfy $a(u-U_T,v_T)=0$ for every $v_T\in V(T)$ ([[lem-galerkin-orthogonality-for-conforming-galerkin-approximations]]).

## Proof

1.1 By [F5] the weak solution exists uniquely under the stated choice assumptions. Since $f$ is piecewise constant on $\mathcal T_0$, every descendant cell has $\operatorname{osc}_K=0$. By [F1] there are $0<\alpha<1$ and $C_0$ such that $e_{k+1}^2\le\alpha e_k^2$; hence, with $q=\sqrt{\alpha}<1$, $e_j\le q^{j-k}e_k$ for $j\ge k$. If $|u|_{\mathbb A_s}=0$, then $E_0(u)=0$ and all nested Galerkin errors vanish. Assume $|u|_{\mathbb A_s}>0$. [A1, F1, F5, given, algebra]

1.2 For each $k$ with $e_k>0$, put $\epsilon_k=\lambda e_k$ for the fixed $\lambda\in(0,1)$ in the statement. By [F4], if $N_k=\left\lceil(2|u|_{\mathbb A_s}/\epsilon_k)^{1/s}\right\rceil$, then $E_{N_k}(u)\le\epsilon_k/2$: this follows directly from $(N_k+1)^sE_{N_k}\le|u|_{\mathbb A_s}$ and $N_k+1\ge(2|u|_{\mathbb A_s}/\epsilon_k)^{1/s}$. By the definition of an infimum there is a conforming comparison mesh with at most $N_k$ added cells and best-approximation error at most $\epsilon_k$. For a symmetric Galerkin solution, [F6] and expansion of $\|\nabla(u-v_T)\|_2^2=\|\nabla(u-U_T)\|_2^2+\|\nabla(U_T-v_T)\|_2^2$ show its exact Galerkin error is the best error, so this comparison mesh reduces the Galerkin error to at most $\epsilon_k$. If $e_k=0$, the target conclusion is already true. [F4, F6, given, choose, algebra]

2.1 The comparison mesh from step 1.2 reduces the error by the factor $\lambda$. By [F2], the marked set therefore satisfies $\#M_k\le N_k\le1+(2/\lambda)^{1/s}|u|_{\mathbb A_s}^{1/s}e_k^{-1/s}.$ Summing and applying [F3] gives $\#\mathcal T_n-\#\mathcal T_0\le C\sum_{k=0}^{n-1}\#M_k\le C'\,|u|_{\mathbb A_s}^{1/s}\sum_{k=0}^{n-1}e_k^{-1/s}.$ The additive $1$ is absorbed into the right side because $e_k\le e_0=E(\mathcal T_0;u)\le|u|_{\mathbb A_s}$ by [F4] at $N=0$. [F2, F3, F4, F6, step 1.2, algebra]

3.1 Geometric contraction from step 1.1 implies $e_k^{-1/s}\le q^{(n-k)/s}e_n^{-1/s}$ for $k<n$. Thus the sum in step 2.1 is at most $e_n^{-1/s}\sum_{j\ge1}q^{j/s}$, a finite geometric series. Rearranging yields $e_n\le C''|u|_{\mathbb A_s}(\#\mathcal T_n-\#\mathcal T_0)^{-s}$ whenever the added-cell count is positive. If it is zero, [F4] at $N=0$ gives $e_n=e_0\le|u|_{\mathbb A_s}$. Enlarging $C''$ replaces the count by $1+\#\mathcal T_n-\#\mathcal T_0$. [F4, step 1.1, step 2.1, algebra] ∎
