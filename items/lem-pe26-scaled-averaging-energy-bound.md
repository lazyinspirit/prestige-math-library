---
id: lem-pe26-scaled-averaging-energy-bound
kind: lemma
title: Two-dimensional scaled averaging energy bound
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [def-pe26-scalar-substructuring-model, def-pe26-scaled-averaging-and-bddc-preconditioner, def-pe26-primal-interface-spaces-and-jumps, lem-pe26-discrete-trace-schur-equivalence, lem-pe26-log-edge-cutoff-and-discrete-sobolev]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; the estimate uses finite sums over polygon edges and explicit coefficient weights."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 94–97"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
    - title: "Oliver Rheinbach, Parallel Scalable Iterative Substructuring, Chapter 2 §2.4, pp. 39–44"
      url: "https://d-nb.info/983219192/34"
---

## Statement

Assume the model of [[def-pe26-scalar-substructuring-model]], all subdomain vertices primal, and the coefficient-scaled average of [[def-pe26-scaled-averaging-and-bddc-preconditioner]]. Let $P:=I-R E_0$ be the complementary jump projection on $\widetilde W$, and let $\|\cdot\|_{\widetilde S}$ be the energy norm induced by the partially assembled Schur operator. Then

$$\|Pw\|_{\widetilde S}^2\le C(1+\log(H/h))^2\|w\|_{\widetilde S}^2\qquad(w\in\widetilde W),$$

where $C$ depends only on the polygon/mesh shape bounds and bounded side count. It is independent of coefficient jumps, mesh size, subdomain diameter, and subdomain count.

## Facts & Assumptions

**Given:** Positive coefficients $\rho_i$ constant on each subdomain; matching quasiuniform $P_1$ meshes; all polygon vertices primal; and the partial Schur energy.

[F1] [[def-pe26-scaled-averaging-and-bddc-preconditioner]]: on an edge $E_{ij}$, the average weights are $\alpha_i=\rho_i/(\rho_i+\rho_j)$ and $\alpha_j=\rho_j/(\rho_i+\rho_j)$.

[F2] [[def-pe26-primal-interface-spaces-and-jumps]]: every open 2D interface side has two incident subdomains, and $P$ vanishes at primal vertices.

[F3] [[lem-pe26-discrete-trace-schur-equivalence]]: local Schur energy is equivalent to the squared $H^{1/2}$ trace seminorm modulo constants.

[F4] [[lem-pe26-log-edge-cutoff-and-discrete-sobolev]]: the edge cutoff has squared $H^{1/2}_{00}$ norm $O(1+\log(H/h))$, and its product with a mean-zero trace costs at most $C(1+\log(H/h))^2$ times the local energy.

## Proof

1.1 Fix an open edge $E_{ij}$ and let $U_i=H_iw_i$, $U_j=H_jw_j$ be the local discrete harmonic extensions. Write $e_i=w_i^TS_iw_i=\rho_i\|\nabla U_i\|_{L^2(\Omega_i)}^2$ and similarly for $e_j$, by harmonic minimality and the definition of $S_i$. The $i$-copy of $Pw$ has nodal values $\alpha_j(w_i-w_j)$ at interior edge nodes and zero at its primal endpoints, so it is $I_h(\theta_E\alpha_j(w_i-w_j))$; the $j$-copy has the complementary coefficient $\alpha_i$. The $00,E$ norm controls the full boundary seminorm of an edge trace extended by zero off $E$: the cross-edge integrals are bounded by the endpoint weight in that norm, with constants controlled by the model's scaled Lipschitz boundary-chart bounds, polygon angles and side count. Thus the trace-Schur upper bound [F3] applies to these supported traces. [given, F1, F2, F3, algebra]


1.2 Set $m_i=\overline w_{i,E}$, $m_j=\overline w_{j,E}$, and $d_E=m_i-m_j$. At a primal endpoint $v$, $w_i(v)=w_j(v)$, so $|d_E|\le|m_i-w_i(v)|+|w_j(v)-m_j|$. Applying the discrete Sobolev estimate [F4] to $U_i$ and $U_j$, and noting that a boundary mean differs from the domain mean by at most the same $L^\infty$ deviation, gives $$|d_E|^2\le C(1+\log(H/h))\left(\frac{e_i}{\rho_i}+\frac{e_j}{\rho_j}\right).$$ The factors $1/\rho_i$ and $1/\rho_j$ appear because [F4] is unweighted while $S_i$ includes $\rho_i$. [given, F2, F3, F4, algebra]


2.1 Write $z_i=w_i-m_i$ and $z_j=w_j-m_j$ on $E$, and set $L=1+\log(H/h)$. The multiplier estimate [F4] bounds the squared $00,E$ norm of each $I_h(\theta_Ez_k)$ by $CL^2 e_k/\rho_k$. Also [F4] bounds $\|\theta_E\|_{00,E}^2$ by $CL$. For the $i$-copy use $w_i-w_j=z_i-z_j+d_E$ and the triangle inequality in the squared norm. After multiplication by its Schur coefficient $\rho_i\alpha_j^2$, the mean-zero terms are bounded by $$CL^2\left(\alpha_j^2e_i+\frac{\rho_i\alpha_j^2}{\rho_j}e_j\right),$$ and the constant term has the same bound by step 1.2. Since $$\frac{\rho_i\alpha_j^2}{\rho_j}=\frac{\rho_i\rho_j}{(\rho_i+\rho_j)^2}\le\frac14,\qquad \alpha_j^2\le1,$$ the $i$-side contribution is at most $CL^2(e_i+e_j)$. Interchanging $i,j$ gives the same estimate for the $j$-side contribution, using $\rho_j\alpha_i^2/\rho_i\le1/4$. [given, F1, F3, F4, step 1.1, step 1.2, algebra]


3.1 Sum over all interface sides. Each polygon has uniformly bounded side count, so each local energy occurs a bounded number of times. On each subdomain the complementary trace is the sum of these edge-supported traces; the squared norm of that sum is bounded by the side count times the sum of the squared norms. The resulting bound is $CL^2\sum_i e_i=CL^2\|w\|_{\widetilde S}^2$, with no coefficient-contrast or subdomain-count factor. [given, F1, F2, step 2.1, algebra] ∎

