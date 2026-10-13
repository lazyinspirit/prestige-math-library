---
id: lem-cm-binomial-pullback-family-and-its-log-are-derivations
kind: lemma
title: The binomial family of the splitting pullback is multiplicative and bracket-preserving, and its logarithm is a derivation
status: published
origin: pipeline
domain: mathematics
dependency_level: 10
deps:
- def-cm-modified-log-coefficients-and-truncations
- lem-cm-difference-operator-and-domain-loss-bound
- lem-cm-exact-splitting-map-preserves-the-complex-canonical-form
- lem-cm-complex-analytic-flow-existence-and-holomorphy
- lem-cm-holomorphic-map-calculus
- lem-cm-cauchy-formula-and-power-series-on-polydiscs
- def-cm-analytic-splitting-data-and-exact-splitting-map
- def-cm-complex-phase-domains-and-holomorphic-maps
- def-cm-phase-domain-and-standard-symplectic-two-form
- thm-chain-rule-for-total-derivatives
- def-total-derivative-in-euclidean-space
- def-directional-and-partial-derivatives
- def-factorial-and-falling-factorial
dependency_roles:
  def-cm-modified-log-coefficients-and-truncations: mathematical-premise
  lem-cm-difference-operator-and-domain-loss-bound: mathematical-premise
  lem-cm-exact-splitting-map-preserves-the-complex-canonical-form: mathematical-premise
  lem-cm-complex-analytic-flow-existence-and-holomorphy: mathematical-premise
  lem-cm-holomorphic-map-calculus: mathematical-premise
  lem-cm-cauchy-formula-and-power-series-on-polydiscs: mathematical-premise
  def-cm-analytic-splitting-data-and-exact-splitting-map: mathematical-premise
  def-cm-complex-phase-domains-and-holomorphic-maps: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 3 ''Backward error analysis'', Section 1: the logarithm of a one-step method as a formal series in the step size, printed pages 1-3'
    url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
  - title: 'J. Lebl, Tasty Bits of Several Complex Variables, Chapter 1, Section 1.2: coefficient extraction and polynomial identities for power series in one variable, printed pages 18-23'
    url: https://www.jirka.org/scv/scv.pdf
verification:
  precheck: pass
---

## Statement

Let $d\ge1$, let $(U,U_\rho,\tilde A,\tilde B,M,K,\delta,\Psi_h)$ be analytic splitting data, and use all notation of [[def-cm-modified-log-coefficients-and-truncations]]: the domains $D(r)$ and $D_k$, the parameters $b=\rho/(8N)$, $r_N=\rho/(C_0MN)$, the binomial coefficients $\binom{s}{k}$, the difference operator $\Delta_h$, the truncated family $T_h^{s,N}$ and the truncated logarithm $L_N(h)$. Let $f,g$ be holomorphic on $D_0$, and put $E:=D(\rho/4)$. For every $Z\in D_0$ and finite $k$, joint local holomorphy of $\Psi_h$ and $\Psi_0=\mathrm{id}$ give a neighborhood of $(0,Z)$ on which the first $k$ iterates are defined and stay in $D_0$. Define $[h^j](\Delta_h^kf)(Z)$ from this local holomorphic family. Compatible flow germs make these coefficients independent of the neighborhood; coefficient extraction makes them holomorphic on $D_0$. On $E$ they agree with the uniform construction at order $Q_j:=\max\{2,j\}$ for $k\le j$, where $|h|<r_{Q_j}$ and $E\subseteq D_k$. Whenever $D_j$ denotes a distance domain below, allocate it with order $Q_j$; thus $D_j\subseteq D_0$ even for $j=0,1$. For $s\in\mathbb C$ and $Z\in D_0$ define the **coefficient polynomial**

$$P_j(s)f:=\sum_{k=0}^{j}\binom{s}{k}\,\bigl[h^j\bigr]\bigl(\Delta_h^kf\bigr),$$

where $[h^j](\Delta_h^kf):=\frac{1}{j!}\partial_h^j\bigl(\Delta_h^kf\bigr)\big|_{h=0}$, and $P_j(s)f$ is a polynomial of degree at most $j$ in $s$ with coefficients in the holomorphic functions on $D_0$.

Then:

1. **Integer case.** For all integers $Q\ge2$, $0\le m\le Q$ and every $|h|\le r_Q$, $T_h^{m,Q}f=f\circ\Psi_h^m$ (omit the zero summands with $k>m$ to extend the finite sum) on the domain $D_m$ allocated with order $Q$.
2. **Multiplicativity and bracket identity.** For every $j\in\mathbb N$ and every $s\in\mathbb C$, as identities of holomorphic functions on $D_j$,
 $$P_j(s)(fg)=\sum_{j_1+j_2=j}P_{j_1}(s)f\cdot P_{j_2}(s)g,\qquad P_j(s)\{f,g\}=\sum_{j_1+j_2=j}\bigl\{P_{j_1}(s)f,\;P_{j_2}(s)g\bigr\}.$$
3. **The logarithm is a derivation.** Put $D_jf:=P_j'(0)f\in\mathcal O(D_0)$ (the derivative in $s$ at $s=0$), so that $D_jf=[h^j]\bigl(L(h)f\bigr)$ for the formal logarithm $L(h):=\sum_{k\ge1}\frac{(-1)^{k+1}}{k}\Delta_h^k$. Then $D_0=0$, each $D_j$ is a $\mathbb C$-linear local differential operator on holomorphic functions, and
 $$D_j(fg)=D_jf\cdot g+f\cdot D_jg,\qquad D_j\{f,g\}=\{D_jf,\,g\}+\{f,\,D_jg\}$$
as functions on $D_j$; equivalently the coefficient of $h^j$ in $L(h)(fg)$ and in $L(h)\{f,g\}$ obeys the product rule and the bracket derivation rule. Moreover $D_jf$ for $h$-degree $j\le N$ agrees with the $j$-th coefficient of the concrete holomorphic function $h\mapsto L_N(h)f$ restricted to $|h|\le r_N$ whenever $j\le N$.

Moreover $D_jf=\sum_i(D_jz_i)\partial_{z_i}f$ for $j\ge1$: each coefficient derivation is the coordinate vector field used in the later Hamiltonian construction.

## Facts & Assumptions

**Given:** The analytic splitting data and all notational conventions of [[def-cm-modified-log-coefficients-and-truncations]]; holomorphic $f,g$ on $D_0$.

[L1] Binomial algebra: the polynomial identity $(1+x)^m=\sum_{k=0}^{m}\binom{m}{k}x^k$ for $m\in\mathbb N$ holds for the single operator $\Delta_h$ in the algebra of operators on functions holomorphic on the appropriate domains, because all powers of $\Delta_h$ commute; $\binom{m}{k}=0$ for integers $k>m$; and $\frac{d}{ds}\binom{s}{k}|_{s=0}=\frac{(-1)^{k+1}}{k}$ for $k\ge1$ with value $0$ for $k=0$ ([[def-cm-modified-log-coefficients-and-truncations]], [[def-factorial-and-falling-factorial]]).

[L2] Pullback calculus: $(f\circ\Psi_h^m)=(f\circ\Psi_h)\circ\Psi_h^{m-1}$, and $\{f\circ\Psi_h^m,g\circ\Psi_h^m\}=\{f,g\}\circ\Psi_h^m$ for holomorphic $f,g$, by the chain rule and [[lem-cm-exact-splitting-map-preserves-the-complex-canonical-form]] clause 3; all maps involved are holomorphic ([[lem-cm-holomorphic-map-calculus]], [[def-cm-complex-phase-domains-and-holomorphic-maps]]).

[L3] Domains: $D_j\subseteq D_{j'}$ for fixed truncation order and $j\ge j'$, and $r_j\le r_{j'}$ for $j\ge j'$; $D_h^kf$ is holomorphic on $D_k$ for $|h|\le r_k$ ([[lem-cm-difference-operator-and-domain-loss-bound]]).

[L4] Holomorphic functions of $h$: if $h\mapsto G(h)$ is holomorphic for $|h|\le r$ and $A(h)=B(h)$ for all such $h$, then all Taylor coefficients at $0$ agree; and a polynomial in $s$ vanishing at $s=0,1,2,\dots$ vanishes identically ([[lem-cm-holomorphic-map-calculus]] clause 3, [[lem-cm-cauchy-formula-and-power-series-on-polydiscs]]).

[L5] Chain rule as applied on this page: the pullback of a bracket and of a product of holomorphic functions is computed by differentiating the composite map, so the complexified bracket $\{u,v\}$ of [[def-cm-complex-phase-domains-and-holomorphic-maps]] is transformed by the chain rule ([[thm-chain-rule-for-total-derivatives]], [[def-total-derivative-in-euclidean-space]], [[def-directional-and-partial-derivatives]], [[def-cm-phase-domain-and-standard-symplectic-two-form]]).

## Proof

**Proof technique:** direct; identify the integer family with pullbacks, compare Taylor coefficients in $h$, then use polynomiality in $s$ and differentiate at $s=0$.

1.1 Local coefficients and integer case. On any sufficiently small common neighborhood, write $\Psi_h(Z)=Z+hR(h,Z)$ with holomorphic $R$. If a holomorphic family $G(h,Z)$ is $O(h^k)$, then $G(h,\Psi_h(Z))-G(h,Z)$ is $O(h^{k+1})$: factor $h^k$ and integrate the spatial derivative of the remaining family along the short segment from $Z$ to $\Psi_h(Z)$. Induction therefore gives $\Delta_h^kf=O(h^k)$ locally. We prove $T_h^{m,M}f=f\circ\Psi_h^m$ for $0\le m\le M$ and $|h|\le r_M$ by induction on $m$. For $m=0$, $T_h^{0,M}f=\binom{0}{0}f=f$. If it holds for $m$, then by [L1] $\mathrm{id}+\Delta_h=\Psi_h^*$ on the relevant domains and $(1+\Delta_h)^{m}$ applied to $f$ equals $f\circ\Psi_h^m$; applying $\mathrm{id}+\Delta_h$ once more gives $(f\circ\Psi_h^m)\circ\Psi_h=f\circ\Psi_h^{m+1}$ by [L2], while the binomial expansion over $M\ge m+1$ reproduces $T_h^{m+1,M}f$ because $\binom{m+1}{k}=0$ for $k>m+1$. [given, L1, L2, L3]

2.1 Multiplicativity and bracket identities at integer $s$. For an integer $m$ with $0\le m\le M$, both $T_h^{m,M}(fg)$ and $T_h^{m,M}f\cdot T_h^{m,M}g$ equal $(f\circ\Psi_h^m)(g\circ\Psi_h^m)$ on $D_m$ by step 1.1; likewise $T_h^{m,M}\{f,g\}$ and $\{T_h^{m,M}f,T_h^{m,M}g\}$ both equal $\{f,g\}\circ\Psi_h^m$ by step 1.1 and [L2]. At any $Z\in D_0$, the same finite pullback identities hold as local germs for arbitrary fixed integers $m,M$ with $M\ge m$. Comparing Taylor coefficients in $h$ of order $j\le M$ on that neighborhood by [L4] and using that $\Delta_h^kf$ contributes only at order $\ge k$ gives, for every $j$ and every integer $m\ge0$ (choose an integer truncation $M:=\max\{2,m,j\}$, distinct from the field bound $M$ in the splitting data), $$P_j(m)(fg)=\sum_{j_1+j_2=j}P_{j_1}(m)f\cdot P_{j_2}(m)g,\qquad P_j(m)\{f,g\}=\sum_{j_1+j_2=j}\{P_{j_1}(m)f,P_{j_2}(m)g\}.$$ [given, step 1.1, L2, L4, L5]

3.1 Polynomial extension. Both sides of each identity of step 2.1 are polynomials in $m$ of degree at most $j$ (for the $j$-coefficient, products of polynomials of degrees $j_1,j_2$ with $j_1+j_2=j$), and they agree at every integer $m\ge0$; hence by [L4] they agree for every $s\in\mathbb C$. This is clause 2. [given, step 2.1, L1, L4]

4.1 Derivative at $s=0$. Differentiate the identities of clause 2 in $s$ at $s=0$ and use [L1]: since $P_0(s)f=\binom{s}{0}[h^0](\Delta_h^0f)=f$ and $P_{j}(0)f=0$ for $j\ge1$ (all coefficients $\binom{0}{k}$ vanish for $k\ge1$), the product identity becomes $D_j(fg)=D_jf\cdot g+f\cdot D_jg$, and the bracket identity becomes $D_j\{f,g\}=\{D_jf,g\}+\{f,D_jg\}$. By [L1] again, $D_jf=\sum_{k=1}^{j}\frac{(-1)^{k+1}}{k}[h^j](\Delta_h^kf)=[h^j](L(h)f)$. Finally, $L(h)\equiv L_N(h)\bmod h^{N+1}$ because the two series differ by terms of order $h^{k}\ge h^{N+1}$; hence for $j\le N$ the coefficients agree, and $h\mapsto L_N(h)f$ is holomorphic on $|h|\le r_N$ by [[lem-cm-difference-operator-and-domain-loss-bound]] clause 3, so its Taylor coefficients are the $D_jf$. [given, step 3.1, L1, L3, L4]

5.1 Coordinate field identification. Fix $Z_*\in D_0$. By the integer pullback identity, each $\Delta_h^kf$ is a finite linear combination of $f\circ\Psi_h^m$ with $0\le m\le k$; for fixed $m$, $\Psi_h^m(Z_*)$ is holomorphic in $h$ near $0$, equals $Z_*$ at $h=0$, and differs from $Z_*$ by $O(h)$. The Taylor expansion of $f$ at $Z_*$ through total degree $j$ has a remainder $O(\lVert W-Z_*\rVert^{j+1})$, so replacing $f$ by that Taylor polynomial changes none of the coefficients $[h^j](\Delta_h^kf)(Z_*)$ for $k\le j$. The product derivation rule of step 4.1 gives $D_j1=0$ and annihilates at $Z_*$ every monomial of degree at least two in $Z-Z_*$: split such a monomial into two factors vanishing at $Z_*$. Only the linear Taylor terms remain, yielding $D_jf(Z_*)=\sum_iD_jz_i(Z_*)\partial_{z_i}f(Z_*)$. Since $Z_*$ was arbitrary, this is the claimed local differential-operator formula on $D_0$. [given, step 1.1, step 4.1, L4, algebra]

6.1 Conclusion. Clause 1 is step 1.1, clause 2 is step 3.1 and clause 3 is step 4.1 together with the $\mathbb C$-linearity of $s$-differentiation at $0$ and of the coefficient extraction. [step 1.1, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- The key point is that the family is a polynomial in $s$ at each $h$-degree, so the integer-$s$ identities — which are the multiplicativity and bracket naturality of the pullback — extend to all complex $s$; differentiating at $s=0$ then produces the derivation identities used to build the modified Hamiltonian. No convergence of the full series $\sum_k(-1)^{k+1}\Delta_h^k/k$ is asserted here: only the concrete truncated functions $L_N(h)f$ for $|h|\le r_N$ and their coefficients of order $\le N$ are used.
- All identities are on complex domains; no real-valuedness or physical interpretation is involved, and no choice principle is used.
