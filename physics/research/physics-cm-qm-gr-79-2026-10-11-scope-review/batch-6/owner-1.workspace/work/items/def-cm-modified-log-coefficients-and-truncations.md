---
id: def-cm-modified-log-coefficients-and-truncations
kind: definition
title: The truncated binomial family $T_h^{s,N}$, the truncated logarithm $L_N(h)$, its coefficient fields $X_j$ and the truncations $X^{[N]}$
status: draft
origin: pipeline
domain: mathematics
dependency_level: 9
deps:
- def-cm-analytic-splitting-data-and-exact-splitting-map
- lem-cm-difference-operator-and-domain-loss-bound
- lem-cm-complex-analytic-flow-existence-and-holomorphy
- lem-cm-exact-splitting-map-preserves-the-complex-canonical-form
- lem-cm-holomorphic-map-calculus
- def-cm-complex-phase-domains-and-holomorphic-maps
- def-factorial-and-falling-factorial
- thm-chain-rule-for-total-derivatives
- def-total-derivative-in-euclidean-space
- def-directional-and-partial-derivatives
- def-matrix-product-and-identity-matrix
dependency_roles:
  def-cm-analytic-splitting-data-and-exact-splitting-map: mathematical-premise
  lem-cm-difference-operator-and-domain-loss-bound: mathematical-premise
  lem-cm-complex-analytic-flow-existence-and-holomorphy: mathematical-premise
  lem-cm-exact-splitting-map-preserves-the-complex-canonical-form: mathematical-premise
  lem-cm-holomorphic-map-calculus: mathematical-premise
  def-cm-complex-phase-domains-and-holomorphic-maps: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 3 ''Backward error analysis'', Section 1: the formal modified equation as the logarithm of the one-step map, printed pages 1-3'
    url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
  - title: 'J. Lebl, Tasty Bits of Several Complex Variables, Chapter 1, Section 1.2: power series and coefficient extraction in one variable, printed pages 18-23'
    url: https://www.jirka.org/scv/scv.pdf
verification:
  precheck: pass
---

## Definition

Let $d\ge1$, let $(U,U_\rho,\tilde A,\tilde B,M,K,\delta,\Psi_h)$ be analytic splitting data ([[def-cm-analytic-splitting-data-and-exact-splitting-map]]), let $C_0=C_0(d)$ be the constant of [[lem-cm-difference-operator-and-domain-loss-bound]], and fix the notation $D(r)$, $b=\rho/(8N)$, $r_N=\rho/(C_0MN)$ and $D_k=D(\rho/2-2bk)$ of that lemma. Throughout, $N\ge2$ is an integer, $|h|\le r_N$, and all functions are read on the domain $D_N$ unless stated otherwise.

**Binomial coefficients.** For $s\in\mathbb C$ and $k\in\mathbb N$ define

$$\binom{s}{k}:=\frac{\prod_{i=0}^{k-1}(s-i)}{k!},$$

the empty product being $1$, and $k!$ the factorial of [[def-factorial-and-falling-factorial]] embedded in $\mathbb C$; thus $\binom{s}{0}=1$, $\binom{s}{k}$ is a polynomial in $s$ of degree $k$ with rational coefficients, $\binom{m}{k}$ agrees with the elementary count for integers $m$, and

$$\left.\frac{d}{ds}\binom{s}{k}\right|_{s=0}=\frac{(-1)^{k+1}}{k}\quad(k\ge1),\qquad \left.\frac{d}{ds}\binom{s}{0}\right|_{s=0}=0.$$

**Difference operator and pullbacks.** For $f$ holomorphic on $D_0$ put $\Delta_hf:=f\circ\Psi_h-f$, a holomorphic function on $D_1$ by [[lem-cm-difference-operator-and-domain-loss-bound]]; for $k\ge0$ let $\Delta_h^kf$ be the $k$-fold iterate, holomorphic on $D_k$, and let $\Psi_h^m$ be the $m$-fold iterate of $\Psi_h$ (so $\Psi_h^0=\mathrm{id}$).

**Truncated binomial family.** For $s\in\mathbb C$, $f$ holomorphic on $D_0$ and $Z\in D_N$ define

$$T_h^{s,N}f:=\sum_{k=0}^{N}\binom{s}{k}\,\Delta_h^kf,$$

a finite sum of functions each holomorphic on $D_k\supseteq D_N$: it is a holomorphic function on $D_N$, and for fixed $h$ and $f$ the map $s\mapsto T_h^{s,N}f$ is a polynomial of degree at most $N$ with values in the holomorphic functions on $D_N$.

**Truncated logarithm and coefficient fields.** The **truncated logarithm** is

$$L_N(h)f:=\sum_{k=1}^{N}\frac{(-1)^{k+1}}{k}\,\Delta_h^kf=T_h^{s,N}f\Big|_{s=0}\text{ differentiated in }s,$$

that is, $L_N(h)f=\frac{d}{ds}\bigl(T_h^{s,N}f\bigr)\big|_{s=0}$; it is holomorphic on $D_N$. For $1\le j\le N$ and each coordinate function $z_i$ ($i=1,\dots,2d$), the function $h\mapsto(L_N(h)z_i)(Z)$ is holomorphic on $\{|h|\le r_N\}$ and vanishes at $h=0$ (each $\Delta_h^kz_i$ is $O(h^k)$), so the quotient $(L_N(h)z_i)(Z)/h$ has a removable singularity at $h=0$ and a well-defined Taylor coefficient of $h^{j-1}$; define the **$j$-th coefficient field** $X_j:D_N\to\mathbb C^{2d}$ by

$$(X_j)_i(Z):=\bigl[h^{j-1}\bigr]\frac{(L_N(h)z_i)(Z)}{h}\qquad(Z\in D_N,\ i=1,\dots,2d),$$

the coefficient being extracted by Cauchy's formula in the one variable $h$ ([[lem-cm-holomorphic-map-calculus]] clause 3). Finally the **truncation of the modified field** at order $N$ is

$$X^{[N]}(h):=\sum_{j=1}^{N}h^{j-1}X_j,$$

a holomorphic map $D_N\to\mathbb C^{2d}$ for every $|h|\le r_N$.

## Remarks

- The definitions are coordinate-wise and choice-free; the coefficient extraction in $h$ is the only analytic operation, and it is justified by the one-variable holomorphy in $h$ supplied by [[lem-cm-difference-operator-and-domain-loss-bound]] and [[lem-cm-exact-splitting-map-preserves-the-complex-canonical-form]].
- The following facts are *not* part of the definition and are proved on this page: for integers $0\le m\le N$ one has $T_h^{m,N}f=f\circ\Psi_h^m$ on $D_m$ ([[lem-cm-binomial-pullback-family-and-its-log-are-derivations]]); the fields $X_j$ are independent of the truncation order in the sense that the coefficient of $h^{j-1}$ in $L_N(h)$ coincides with that in $L_{N'}(h)$ on $D(\rho/4)$ for $N,N'\ge j$ ([[lem-cm-truncated-log-coefficient-bounds]]); each $X_j$ is a holomorphic vector field and a symplectic one ([[lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives]]); and $X_1=X_{\tilde A+\tilde B}$.
