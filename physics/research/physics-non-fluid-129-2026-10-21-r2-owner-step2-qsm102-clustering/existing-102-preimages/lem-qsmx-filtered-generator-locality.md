---
id: lem-qsmx-filtered-generator-locality
kind: lemma
title: Filtered spectral generators have summable local shells
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
deps:
  - def-countable-choice
  - def-qsmx-summable-interaction-norm
  - thm-qsmx-weighted-lieb-robinson
  - lem-qsmx-filtered-spectral-generator
  - def-qsmx-local-conditional-expectation
  - lem-qsmx-local-expectation-locality
  - def-qsm-local-spin-algebras
  - def-qsm-quasilocal-spin-algebra
  - lem-qsm-quasilocal-completion
  - lem-qsm-finite-matrix-cstar-and-state-duality
  - thm-qsm-finite-range-spin-dynamics
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qsmx-summable-interaction-norm: mathematical-premise
  thm-qsmx-weighted-lieb-robinson: mathematical-premise
  lem-qsmx-filtered-spectral-generator: mathematical-premise
  def-qsmx-local-conditional-expectation: mathematical-premise
  lem-qsmx-local-expectation-locality: mathematical-premise
  def-qsm-local-spin-algebras: mathematical-premise
  def-qsm-quasilocal-spin-algebra: mathematical-premise
  lem-qsm-quasilocal-completion: mathematical-premise
  lem-qsm-finite-matrix-cstar-and-state-duality: mathematical-premise
  thm-qsm-finite-range-spin-dynamics: mathematical-premise
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "S. Bachmann, S. Michalakis, B. Nachtergaele, and R. Sims, Automorphic Equivalence within Gapped Phases of Quantum Lattice Systems, Theorem 4.8 and Proposition 5.3"
      url: "https://arxiv.org/pdf/1102.0842"
    - title: "Pieter Naaijkens, Quantum Spin Systems on Infinite Lattices, §§4.1–4.2"
      url: "https://arxiv.org/pdf/1311.2717"
---

## Statement

Assume Countable Choice and the finite-matrix $C^*$-identity for the local spin algebras. Let $\Phi_s$, $s\in[0,1]$, be a $C^1$ finite-range interaction path on $\mathbb Z^d$, with uniform range, support-cardinality, weighted interaction norm, and weighted derivative norm as in the interaction definition. Assume the selected finite-volume bands along a fixed increasing exhaustion $\Lambda_n\uparrow\mathbb Z^d$ are locally fixed spectral clusters with uniform gap $\gamma>0$. Let

$$D_{\Lambda_n}(s)=\int_{\mathbb R}W_\gamma(t)\, \tau_t^{\Lambda_n,\Phi_s}\!\left(H'_{\Lambda_n}(s)\right)\,dt,$$

where energies are dimensionless ($\hbar=1$) and $W_\gamma$ and the filtered derivative are as in the finite-volume spectral-generator lemma. For every $\rho>d$, there are self-adjoint local interactions $\Psi_{\Lambda_n}(Z,s)$, supported in $Z\subseteq\Lambda_n$, such that

$$D_{\Lambda_n}(s)=\sum_{Z\subseteq\Lambda_n}\Psi_{\Lambda_n}(Z,s),\qquad \sup_n\sup_{s\in[0,1]}\|\Psi_{\Lambda_n}(s)\|_{F_\rho}<\infty.$$

For every fixed finite $Z\subset\mathbb Z^d$, the coefficient $\Psi_{\Lambda_n}(Z,s)$, set to zero when $Z\not\subseteq\Lambda_n$, converges in norm uniformly in $s$ to a self-adjoint $\Psi_\infty(Z,s)$. The limiting interaction has finite $F_\rho$-norm for every $\rho>d$.

For every finite $\Lambda_n$ and support $Z\subseteq\Lambda_n$, the coefficient $s\mapsto\Psi_{\Lambda_n}(Z,s)$ is norm-continuous.

## Statement references

[[def-qsmx-summable-interaction-norm]]

[[thm-qsmx-weighted-lieb-robinson]]

[[lem-qsmx-filtered-spectral-generator]]

[[def-qsmx-local-conditional-expectation]]

[[lem-qsmx-local-expectation-locality]]

[[def-qsm-local-spin-algebras]]

[[def-qsm-quasilocal-spin-algebra]]

[[lem-qsm-quasilocal-completion]]

[[lem-qsm-finite-matrix-cstar-and-state-duality]]

[[thm-qsm-finite-range-spin-dynamics]]

## Facts & Assumptions

**Given:** Countable Choice, the finite-matrix $C^*$-identity, a $C^1$ finite-range interaction path with the uniform bounds above, an increasing finite exhaustion $\Lambda_n\uparrow\mathbb Z^d$, locally fixed spectral clusters with uniform gap $\gamma>0$, and the dimensionless $\hbar=1$ convention for the filtered generator.

[A1] [[def-countable-choice]]: Countable Choice is assumed by the norm-completion and finite-range dynamics suppliers.

[F6] [[lem-qsm-finite-matrix-cstar-and-state-duality]]: each finite local matrix algebra with its ordinary operator norm satisfies the finite-matrix $C^*$-identity used by the quasi-local completion and finite-range dynamics suppliers.

[F1] [[def-qsmx-summable-interaction-norm]]: $H_\Lambda(s)=\sum_{Y\subseteq\Lambda}\Phi_s(Y)$, its derivative is the corresponding finite sum, and $\|\partial\Phi\|_{F_a}<\infty$ controls $\sup_s\sum_{Y\ni x}|Y|\|\Phi'_s(Y)\|$.

[F2] [[lem-qsmx-filtered-spectral-generator]]: $D_\Lambda(s)$ is a norm-continuous, norm-convergent filtered integral whose kernel has tails bounded by every inverse power.

[F3] [[thm-qsmx-weighted-lieb-robinson]]: the finite-volume Heisenberg evolution of the finite-range path obeys the $F_a$-weighted commutator bound with constants uniform in volume and path parameter.

[F4] [[def-qsmx-local-conditional-expectation]] and [[lem-qsmx-local-expectation-locality]]: $E_X$ is a consistent contraction onto $\mathcal A_X$, and its error is bounded by the sum of commutators with one-site unitaries outside $X$.

[F5] [[thm-qsm-finite-range-spin-dynamics]]: under Countable Choice and the finite-matrix $C^*$-identity, finite-volume dynamics of each bounded finite-range interaction converge in norm on local observables, uniformly on compact time intervals, to a dynamics on the norm-completed quasi-local algebra. The proof's boundary estimate is uniform over the stated path because its finite-range and interaction bounds are uniform in $s$.

## Proof

**Proof technique:** direct.

**Given:** [A1], [F1]–[F5], the finite-volume gaps, and the exhaustion.

1.1 For each finite nonempty $Y\subseteq\Lambda_n$, set $B_{Y,n}(s)=\int_{\mathbb R}W_\gamma(t)\, \tau_t^{\Lambda_n,\Phi_s}(\Phi'_s(Y))\,dt.$ For fixed $n,Y,t$, the finite matrix integrand is continuous in $s$, and it is bounded by $\sup_s\|\Phi'_s(Y)\||W_\gamma(t)|$, an integrable majorant. Dominated convergence makes $B_{Y,n}(s)$ norm-continuous. Linearity of the finite sum and [F2] give $D_{\Lambda_n}(s)=\sum_{\varnothing\ne Y\subseteq\Lambda_n}B_{Y,n}(s)$. Define $Y_k=\{x:d_\infty(x,Y)\le k\}$, $E_{Y_k}^{(n)}:=E_{Y_k\cap\Lambda_n}$, and shells $\Delta^0_{Y,n}=E_{Y_0}^{(n)}(B_{Y,n}),\qquad \Delta^k_{Y,n}=E_{Y_k}^{(n)}(B_{Y,n})-E_{Y_{k-1}}^{(n)}(B_{Y,n})\quad(k\ge1).$ For all sufficiently large $k$, $Y_k\cap\Lambda_n=\Lambda_n$, so the sum of these shells is $B_{Y,n}$. Each shell is self-adjoint and supported in $Y_k\cap\Lambda_n$. Grouping the finitely many shells by this support defines $\Psi_{\Lambda_n}(Z,s)$ and proves the displayed decomposition. Each expectation is a fixed linear map, so the shell and grouped coefficients are norm-continuous in $s$. [given, A1, F2, F4, F5, construct]

2.1 Let $a>0$ be the weight parameter and $v=2C_{F_a}\sup_s\|\Phi_s\|_{F_a}$, with $V=1+v$. For $z\in\Lambda_n\setminus Y_k$, the supports $Y$ and $\{z\}$ are disjoint; [F3] and the local-expectation estimate [F4] give $\left\|\tau_t^{\Lambda_n,\Phi_s}(\Phi'_s(Y)) -E_{Y_k}^{(n)}\tau_t^{\Lambda_n,\Phi_s}(\Phi'_s(Y))\right\| \le C|Y|\|\Phi'_s(Y)\|e^{v|t|}e^{-ak/2},$ where the lattice shell count and the exponential factor in $F_a$ give one constant $C$ independent of $Y,n,s,t$. The same difference is at most $2\|\Phi'_s(Y)\|$ by contractivity. Split the filtered integral at $T_k=ak/(4V)$. On $|t|\le T_k$ the first bound is at most $C|Y|\|\Phi'_s(Y)\|e^{-ak/4}$; on $|t|>T_k$, the Schwartz-tail construction in [F2] gives $\int_{|t|>T_k}|W_\gamma(t)|dt\le C_N(1+k)^{-N}$ for each $N$. Since $\Delta^k_{Y,n}$ is a difference of the (k)- and $(k-1)$-expectations, its norm is bounded by the sum of these two expectation errors. Thus, after increasing $C_N$, for every $N$ there is a constant $C_N$ independent of $Y,n,s,k$ such that $\|\Delta^k_{Y,n}(s)\|\le C_N|Y|\|\Phi'_s(Y)\|(1+k)^{-N}.$ For $k=0$, the same estimate with an enlarged $C_N$ follows from $\|E_Y(B_{Y,n})\|\le\|W_\gamma\|_1\|\Phi'_s(Y)\|$. [given, F2, F3, F4, step 1.1, algebra]

3.1 The finite-range path has a uniform range $R$, so $x,y\in Y_k$ implies $d_\infty(x,y)\le R+2k$. Also [F1] at $x=y$ gives $\sup_s\sum_{Y\ni x}|Y|\|\Phi'_s(Y)\|<\infty$. Since $x\in Y_k$ forces $Y\cap B_k(x)\ne\varnothing$, the sum of $|Y|\|\Phi'_s(Y)\|$ over such $Y$ is at most $C(k+1)^d$. For each fixed $s$, summing the shell estimate from step 2.1 over all $Y,k$ with $x,y\in Y_k$ gives $\sum_{\substack{Z\subseteq\Lambda_n\\x,y\in Z}}\|\Psi_{\Lambda_n}(Z,s)\| \le C_N\sum_{k\ge (d_\infty(x,y)-R)/2}(1+k)^{d-N}.$ For any prescribed $\rho>d$, choose $N>\rho+d+1$; the last tail is bounded by $C_\rho(1+d_\infty(x,y))^{-\rho}$. The bound is independent of $s$ and $n$, so taking their suprema outside the support sum proves the stated uniform $F_\rho$-norm bound. No sum of separate time suprema is asserted; all finite-volume sums are finite and their nonnegative shell bounds are dominated by the displayed convergent scalar series. [given, F1, step 2.1, algebra]

4.1 Fix a finite support $Z$. Once $\Lambda_n$ contains the $(2\operatorname{diam}Z+1)$-neighborhood of $Z$, any shell with support $Y_k\cap\Lambda_n=Z$ has $Y\subseteq Z$ and $k\le\operatorname{diam}Z$; otherwise $Y_k\cap\Lambda_n$ would contain a point in that neighborhood outside $Z$. Thus only finitely many pairs $(Y,k)$ contribute to $\Psi_{\Lambda_n}(Z,s)$, and their shell projections are the fixed $E_{Y_k}$ once $n$ is large. By [A1], [F6], and [F5], for each fixed $s$, $\tau_t^{\Lambda_n,\Phi_s}(A)$ converges locally uniformly on compact $t$-intervals. The same boundary estimate in the proof of [F5] is uniform in $s$, because the path has uniform finite range and interaction bounds. For $A=\Phi'_s(Y)$, uniformity over $s$ follows by covering the compact finite-dimensional set $\{\Phi'_s(Y):s\in[0,1]\}$ by a finite norm net and using contractivity of the dynamics. The tails $|t|>T$ are bounded uniformly by $2\sup_s\|\Phi'_s(Y)\|\int_{|t|>T}|W_\gamma(t)|dt$, which tends to zero by [F2]. Hence every contributing filtered term converges uniformly in $s$, defining $\Psi_\infty(Z,s)$. The $F_\rho$-norm bound passes to the limit by taking the limit on each finite set of support terms and then the supremum. [given, A1, F2, F4, F5, F6, step 3.1, algebra] ∎
