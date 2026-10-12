---
id: lem-cm-truncated-log-coefficient-bounds
kind: lemma
title: "Bounds for the truncated logarithm: $\\lvert L_N(h)z_i/h\\rvert\\le8M/3$ and $\\lvert X_j\\rvert\\le(8M/3)(C_0Mj/\\rho)^{j-1}$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 7
deps: [def-cm-modified-log-coefficients-and-truncations, lem-cm-difference-operator-and-domain-loss-bound, lem-cm-binomial-pullback-family-and-its-log-are-derivations, lem-cm-exact-splitting-map-preserves-the-complex-canonical-form, lem-cm-complex-analytic-flow-existence-and-holomorphy, lem-cm-cauchy-formula-and-power-series-on-polydiscs, lem-cm-holomorphic-map-calculus, def-cm-analytic-splitting-data-and-exact-splitting-map, def-cm-complex-phase-domains-and-holomorphic-maps, cor-cauchy-estimates-taylor-coefficients, def-metric-ball]
dependency_roles:
  def-cm-modified-log-coefficients-and-truncations: mathematical-premise
  lem-cm-difference-operator-and-domain-loss-bound: mathematical-premise
  lem-cm-binomial-pullback-family-and-its-log-are-derivations: mathematical-premise
  lem-cm-exact-splitting-map-preserves-the-complex-canonical-form: mathematical-premise
  lem-cm-complex-analytic-flow-existence-and-holomorphy: mathematical-premise
  lem-cm-cauchy-formula-and-power-series-on-polydiscs: mathematical-premise
  lem-cm-holomorphic-map-calculus: mathematical-premise
  def-cm-analytic-splitting-data-and-exact-splitting-map: mathematical-premise
  def-cm-complex-phase-domains-and-holomorphic-maps: mathematical-premise
  cor-cauchy-estimates-taylor-coefficients: mathematical-premise
  def-metric-ball: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 3 'Backward error analysis', Sections 1-2: the geometric bound on the coefficients of the logarithm of the numerical map, printed pages 1-6"
      url: "https://www.unige.ch/~hairer/poly_geoint/week3.pdf"
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, Chapter 1, Section 1.2: Cauchy estimates for Taylor coefficients, printed pages 18-23"
      url: "https://www.jirka.org/scv/scv.pdf"
verification:
  precheck: pass
---

## Statement

Let $d\ge1$, let $(U,U_\rho,\tilde A,\tilde B,M,K,\delta,\Psi_h)$ be analytic splitting data, and use the notation of [[def-cm-modified-log-coefficients-and-truncations]] and [[lem-cm-difference-operator-and-domain-loss-bound]]: $b=\rho/(8N)$, $r_N=\rho/(C_0MN)$ with $C_0=\max\{16,128d^2\}$, the domains $D_k$, the difference operator $\Delta_h$, the truncated logarithm $L_N(h)$ and the coefficient fields $X_j$, $1\le j\le N$. Then for every integer $N\ge2$, every $|h|\le r_N$ and every coordinate index $i$:

1. $\lVert\Delta_h^kz_i\rVert_{D_k}\le2M|h|\,q^{k-1}$ for $1\le k\le N$, where $q=C_dM|h|/b\le1/4$.
2. The function $h\mapsto\frac{(L_N(h)z_i)(Z)}{h}$, initially defined for $0<|h|\le r_N$, extends holomorphically to the disc $|h|\le r_N$, and
 $$\left\lvert\frac{(L_N(h)z_i)(Z)}{h}\right\rvert\le\frac{2M}{1-q}\le\frac{8M}{3}\qquad(|h|\le r_N,\ Z\in D_N).$$
3. For $1\le j\le N$ and every $Z\in D_N$,
 $$\lvert X_j(Z)\rvert\le\frac{8M}{3}\,r_N^{-(j-1)},$$
 and the sharper estimate
 $$\lvert X_j(Z)\rvert\le\frac{8M}{3}\left(\frac{C_0Mj}{\rho}\right)^{j-1},$$
 obtained by computing the $j$-th field with the truncation order $j$; the two bounds agree in the form $r_N^{-(j-1)}=(C_0MN/\rho)^{j-1}$.
4. The field $X_j$ is independent of the truncation order: if $N,N'\ge j$ then the $j$-th coefficient fields of $L_N$ and $L_{N'}$ agree on $D_{\min(N,N')}$.

## Facts & Assumptions

**Given:** The analytic splitting data, $N\ge2$, $b=\rho/(8N)$, $r_N=\rho/(C_0MN)$, the fields $X_j$ and functions $L_N(h)z_i$ of [[def-cm-modified-log-coefficients-and-truncations]].

[L1] Difference-operator bounds ([[lem-cm-difference-operator-and-domain-loss-bound]]): $\lVert\Psi_h(Z)-Z\rVert\le2M|h|\le b$ on $D_k$, and for $f$ holomorphic on $D_{k-1}$ with $|f|\le F$, $\lvert\Delta_hf\rvert\le qF$ on $D_k$ with $q=C_dM|h|/b\le1/4$; hence $\lvert\Delta_h^kf\rvert\le q^kF$ on $D_k$.

[L2] Cauchy coefficient estimates in one variable ([[cor-cauchy-estimates-taylor-coefficients]]): if $G$ is holomorphic on $D(0,R)$ and $|G|\le A$ on $|h|=r<R$, then the $j$-th Taylor coefficient obeys $|c_j|\le A/r^j$.

[L3] Holomorphy in $h$: each $h\mapsto(\Delta_h^kf)(Z)$ is holomorphic on $|h|\le r_k$ ([[lem-cm-difference-operator-and-domain-loss-bound]], [[lem-cm-exact-splitting-map-preserves-the-complex-canonical-form]], [[lem-cm-complex-analytic-flow-existence-and-holomorphy]], [[lem-cm-holomorphic-map-calculus]] clause 1), so $h\mapsto(L_N(h)z_i)(Z)$ is holomorphic on $|h|\le r_N$ ([[def-cm-modified-log-coefficients-and-truncations]]).

[L4] Removable singularities and coefficient extraction: a function holomorphic and bounded on a punctured disc extends holomorphically to the centre, and the coefficients coincide with the Cauchy coefficients of [[lem-cm-holomorphic-map-calculus]] clause 3; the truncated logarithm is a finite linear combination of the $\Delta_h^kz_i$, whose lowest $h$-degree in the $k$-th term is $k$, so $(L_N(h)z_i)(Z)=O(h)$ at $h=0$ ([[lem-cm-cauchy-formula-and-power-series-on-polydiscs]], [[lem-cm-holomorphic-map-calculus]]).

[L5] Taylor coefficients of $L_N$ versus $L_{N'}$: $L_N-L_{N'}=\sum_{k=\min+1}^{\max}\frac{(-1)^{k+1}}{k}\Delta_h^k$ is a sum of terms of $h$-degree $\ge\min(N,N')+1$ ([[def-cm-modified-log-coefficients-and-truncations]]).

## Proof

**Proof technique:** direct; combine the displacement bound with the single-step operator bound, sum the geometric series, and apply Cauchy's coefficient estimate in $h$.

1.1 Iterate bound. For $Z\in D_1$, $\lvert\Delta_hz_i(Z)\rvert=\lvert z_i(\Psi_h(Z))-z_i(Z)\rvert\le\lVert\Psi_h(Z)-Z\rVert\le2M|h|$ by [L1]; applying the operator bound [L1] a further $k-1$ times gives $\lvert\Delta_h^kz_i(Z)\rvert\le q^{k-1}\cdot2M|h|$ on $D_k$. This is clause 1. [given, L1, algebra]

2.1 Bound for the truncated logarithm. On $D_N$, $$\left\lvert\frac{L_N(h)z_i(Z)}{h}\right\rvert\le\sum_{k=1}^{N}\frac{\lvert\Delta_h^kz_i(Z)\rvert}{k\,|h|}\le2M\sum_{k=1}^{N}\frac{q^{k-1}}{k}\le\frac{2M}{1-q}\le\frac{8M}{3},$$ using $q\le1/4$. The quantity $(L_N(h)z_i)(Z)$ is $O(h)$ at $h=0$ by [L4], and $h\mapsto(L_N(h)z_i)(Z)/h$ is holomorphic for $0<|h|\le r_N$ by [L3]; the bound just proved makes $h=0$ a removable singularity, so the extension is holomorphic on $|h|\le r_N$. This is clause 2. [given, step 1.1, L3, L4, algebra]

3.1 Coefficient bound. Fix $Z\in D_N$ and let $G(h):=(L_N(h)z_i)(Z)/h$ denote the holomorphic extension of clause 2, bounded by $8M/3$ on $|h|\le r_N$. Its Taylor coefficient of order $j-1$, namely $(X_j)_i(Z)$ ([[def-cm-modified-log-coefficients-and-truncations]]), obeys $\lvert(X_j)_i(Z)\rvert\le(8M/3)r^{-(j-1)}$ for every $0<r\le r_N$ by [L2], hence for $r=r_N$. Taking the maximum over $i$ gives the first estimate of clause 3; substituting $j$ for $N$ — legitimate because the coefficient of order $j-1$ depends only on terms up to order $j$, by clause 4 below — gives $r_j^{-(j-1)}=(C_0Mj/\rho)^{j-1}$ and the sharper estimate. [given, step 2.1, L2, algebra]

4.1 Independence of the truncation order. If $N,N'\ge j$, then by [L5] the difference $L_N(h)z_i-L_{N'}(h)z_i$ has no terms of $h$-degree $\le\min(N,N')$, hence none of degree $\le j$; dividing by $h$ and extracting the coefficient of $h^{j-1}$ gives the same value for both truncation orders, on the common domain $D_{\min(N,N')}$. This is clause 4, and it justifies the substitution made in step 3.1. [given, L5, algebra]

5.1 Conclusion. Clauses 1, 2 and 4 are steps 1.1, 1.2 and 2.2; clause 3 is step 3.1. All constants depend only on $d$, $M$ and $\rho$. [step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Remarks

- Note the displayed first estimate of clause 3 contains a redundant form; the usable statement is $\lvert X_j(Z)\rvert\le(8M/3)(C_0Mj/\rho)^{j-1}$, which exhibits the factorial-type growth of the modified-field coefficients and is the input to the truncation choice of [[lem-cm-optimal-truncation-gives-exponential-local-defect]]. The bound is uniform on $D_N$ and depends on $M$, $\rho$ and $d$ only.
- No convergent infinite series is used: $L_N$ is a finite sum and the coefficients are extracted with Cauchy's formula in the single complex variable $h$.
