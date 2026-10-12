---
id: lem-cm-symmetric-log-parity-removes-odd-coefficients
kind: lemma
title: Symmetry of the splitting map forces $X_j=0$ for every even $j$, so the first modified-energy correction is of order $h^2$
status: draft
origin: pipeline
domain: mathematics
dependency_level: 13
deps:
- def-cm-modified-log-coefficients-and-truncations
- lem-cm-binomial-pullback-family-and-its-log-are-derivations
- lem-cm-truncated-log-coefficient-bounds
- lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives
- lem-cm-complex-analytic-flow-existence-and-holomorphy
- lem-cm-exact-splitting-map-preserves-the-complex-canonical-form
- lem-cm-holomorphic-map-calculus
- def-cm-analytic-splitting-data-and-exact-splitting-map
- def-cm-complex-phase-domains-and-holomorphic-maps
- def-factorial-and-falling-factorial
dependency_roles:
  def-cm-modified-log-coefficients-and-truncations: mathematical-premise
  lem-cm-binomial-pullback-family-and-its-log-are-derivations: mathematical-premise
  lem-cm-truncated-log-coefficient-bounds: mathematical-premise
  lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives: mathematical-premise
  lem-cm-complex-analytic-flow-existence-and-holomorphy: mathematical-premise
  lem-cm-exact-splitting-map-preserves-the-complex-canonical-form: mathematical-premise
  lem-cm-holomorphic-map-calculus: mathematical-premise
  def-cm-analytic-splitting-data-and-exact-splitting-map: mathematical-premise
  def-cm-complex-phase-domains-and-holomorphic-maps: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 3 ''Backward error analysis'', Sections 2-3: for symmetric methods the modified equation contains only even powers of the step size, printed pages 5-7'
    url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 2 ''Symplectic integrators'', Theorem 7 and Section 4: adjoint methods, symmetric methods and even order, printed pages 7-12'
    url: https://www.unige.ch/~hairer/poly_geoint/week2.pdf
verification:
  precheck: pass
---

## Statement

Let $d\ge1$, let $(U,U_\rho,\tilde A,\tilde B,M,K,\delta,\Psi_h)$ be analytic splitting data ([[def-cm-analytic-splitting-data-and-exact-splitting-map]]), and use the notation of [[def-cm-modified-log-coefficients-and-truncations]] and [[lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives]]: the coefficient fields $X_j$ ($j\ge1$, with $X_j$ acting on holomorphic functions as the coefficient operator $D_j=[h^j]L(h)$, and $X_j=D_j$ in the notation of that lemma) and the normalized primitives $H_j$ with $dH_j=\iota_{X_j}\omega_{\mathbb C}$, $H_j(0)=0$, on the domains $D_j$.

1. **Reversibility.** For every $h$ for which both sides are defined, $\Psi_{-h}=\Psi_h^{-1}$.
2. **Parity.** $X_j=0$ for every even $j\ge2$.
3. **Modified energy.** Consequently $H_2=0$, and the truncated modified Hamiltonian $H^{[N]}:=H+\sum_{j=2}^{N}h^{j-1}H_j$ equals $H+h^2H_3+\cdots+h^{N-1}H_N$ on $D_N$, so the first possible correction is of order $h^2$.

## Facts & Assumptions

**Given:** The analytic splitting data and the objects named in the Statement; for every holomorphic $f$ on $D_0$ the two families
$$T_h^sf:=\sum_{k\ge0}\binom{s}{k}\Delta_h^kf,\qquad L(h)f:=\sum_{k\ge1}\frac{(-1)^{k+1}}{k}\Delta_h^kf,$$
read as formal power series in $h$ whose $h$-degree-$j$ coefficients are finite sums (because $\Delta_h=O(h)$); the concrete truncations $T_h^{s,N}$, $L_N(h)$ of [[def-cm-modified-log-coefficients-and-truncations]] agree with them through order $N$.

[L1] Inverse and composition laws: $\varphi_F^{-t}\circ\varphi_F^t=\mathrm{id}$, and $(g\circ f)^{-1}=f^{-1}\circ g^{-1}$ where the inverses exist ([[lem-cm-complex-analytic-flow-existence-and-holomorphy]] clause 3, [[lem-cm-holomorphic-map-calculus]]).

[L2] Integer case: for every integer $m\ge0$, $T_h^mf=f\circ\Psi_h^m$ as formal series in $h$ (the sum is finite at each $h$-degree and equals the finite binomial sum of [[lem-cm-binomial-pullback-family-and-its-log-are-derivations]] clause 1 for any truncation order $\ge m$). Consequently $T_h^mf$ is well defined for all $m\ge0$ and all holomorphic $f$ on $D_0$.

[L3] Formal identities in one element. Let $A$ be an element of the ring of formal series in $h$ with operator coefficients, with $A=O(h)$. Define $\exp(A):=\sum_{m\ge0}A^m/m!$ and $\log(1+U):=\sum_{k\ge1}(-1)^{k+1}U^k/k$, both well defined coefficient-wise because $A=O(h)$ and $U=O(h)$. Then:
 (i) $\exp(A)\exp(-A)=1$ and $\exp(-A)\exp(A)=1$, because all powers of $A$ commute and the identity holds in the commutative $\mathbb Q$-algebra $\mathbb Q[A]$;
 (ii) $\log(\exp(A))=A$, because both sides are universal rational-coefficient expressions in the single element $A$ and the identity holds in the commutative ring $\mathbb Q\llbracket x\rrbracket$ (differentiate $t\mapsto\log(\exp(tx))$ and use $(\log)'(1+u)=(1+u)^{-1}$ coefficient-wise);
 (iii) hence $\exp$ is injective on $\{A:A=O(h)\}$: if $\exp(A)=\exp(B)$ then $A=\log(\exp(A))=\log(\exp(B))=B$.

[L4] Formal binomial group law. For $B_s(x)=\sum_{k\ge0}\binom{s}{k}x^k$, the falling-factorial recurrence gives $(1+x)\partial_xB_s=sB_s$ and $B_s(0)=1$. Comparing coefficients determines the series uniquely. Thus $B_sB_t$ satisfies the same equation as $B_{s+t}$ and the same constant term, so $B_sB_t=B_{s+t}$. Differentiate in $t$ at zero: $\partial_sB_s=B_s\sum_{k\ge1}(-1)^{k+1}x^k/k$, by the derivative formula for $\binom{t}{k}$ at zero. Substituting the single operator $x=\Delta_h=O(h)$ makes all sums finite at any fixed $h$-degree and gives $\partial_sT_h^s=L(h)T_h^s$, with $T_h^0=\mathrm{id}$ ([[def-factorial-and-falling-factorial]], [[lem-cm-binomial-pullback-family-and-its-log-are-derivations]]).

[L5] Uniqueness of formal solutions: if $s\mapsto F(s)$ and $s\mapsto G(s)$ are families whose $h$-degree-$j$ coefficients are polynomials in $s$ with $F'(s)=L(h)F(s)$, $G'(s)=L(h)G(s)$ and $F(0)=G(0)$, then $F=G$: comparing coefficients of $s^n$ determines each coefficient recursively from the preceding one, since $L(h)$ acts coefficient-wise in $h$.

[L6] Primitives and domains ([[lem-cm-log-coefficients-are-symplectic-fields-with-hamiltonian-primitives]]): $dH_j=\iota_{X_j}\omega_{\mathbb C}$, $H_j(0)=0$, $D_j$ connected with $0\in D_j$; and $X_j=D_j$ as operators on holomorphic functions, with the bounds of [[lem-cm-truncated-log-coefficient-bounds]].

## Proof

**Proof technique:** direct; identify $\Psi_{-h}$ with the inverse, use the formal exponential of the logarithm to compare $L(h)$ and $L(-h)$, and differentiate in the binomial parameter.

1.1 Reversibility. For $h$ in the common domain, $\Psi_h^{-1}=(\varphi_{\tilde A}^{h/2}\circ\varphi_{\tilde B}^h\circ\varphi_{\tilde A}^{h/2})^{-1}=\varphi_{\tilde A}^{-h/2}\circ\varphi_{\tilde B}^{-h}\circ\varphi_{\tilde A}^{-h/2}=\Psi_{-h}$ by [L1]. This is clause 1. [given, L1, algebra]

1.2 The exponential of the logarithm. By [L4] the family $s\mapsto T_h^sf$ solves the formal initial value problem of [L5] with initial value $f$; the family $s\mapsto\log$-exponential $\exp(sL(h))f$ solves the same problem, because $\frac{d}{ds}\exp(sL(h))=\sum_{m\ge1}L(h)^m s^{m-1}/(m-1)! = L(h)\exp(sL(h))$ by commutation of $L(h)$ with $sL(h)$. By [L5], $T_h^sf=\exp(sL(h))f$ as formal series in $s$; taking $s=1$ and using [L2] with $m=1$, $$\Psi_h^*f=f\circ\Psi_h=T_h^1f=\exp(L(h))f.$$ [given, L2, L4, L5, algebra]

2.1 Parity of the logarithm. Fix an integer $m\ge0$. By clause 1 and [L2], $T_{-h}^mf=f\circ(\Psi_{-h})^m=f\circ(\Psi_h^{-1})^m$; by step 1.2 applied to the data at step $-h$ this equals $\exp(mL(-h))f$. The same expression, read with the data at step $h$, equals $(\Psi_h^*)^{-m}f=\exp(L(h))^{-m}f=\exp(-mL(h))f$ by [L3]. Hence $$\exp\bigl(mL(-h)\bigr)f=\exp\bigl(m(-L(h))\bigr)f$$ as formal series in $h$, for every integer $m\ge0$. At fixed $h$-degree both sides are polynomials in $m$ (all defining operations are polynomial at each degree), so the equality at all $m\ge0$ extends to all complex $m$; taking $m=1$ gives $\exp(L(-h))f=\exp(-L(h))f$ for every holomorphic $f$ on $D_0$, and injectivity of $\exp$ from [L3] gives $$L(-h)=-L(h).$$ [given, step 1.2, L2, L3]

3.1 Vanishing of the even coefficients. Write $L(h)=\sum_{j\ge0}h^jD_j$ (so $D_0=0$). Then $L(-h)=\sum_j(-1)^jh^jD_j$ and $-L(h)=\sum_j-h^jD_j$; comparing $h$-degree-$j$ coefficients in the identity of step 2.1 gives $(-1)^jD_j=-D_j$, hence $D_j=0$ for even $j$. Since $X_j$ acts as $D_j$ by [L6], $X_j=0$ for every even $j\ge2$. This is clause 2. [given, step 2.1, L6, algebra]

4.1 Modified energy. For $j=2$, $X_2=0$ gives $\iota_{X_2}\omega_{\mathbb C}=0$, so $dH_2=0$; since $D_2$ is connected and $H_2(0)=0$, $H_2=0$ by [L6]. Hence $H^{[N]}=H+\sum_{j=2}^Nh^{j-1}H_j=H+h^2H_3+\cdots+h^{N-1}H_N$. This is clause 3. [given, step 3.1, L6] ∎

## Remarks

- The whole argument is formal in the step variable: only finitely many terms contribute to each $h$-degree, and no convergence of the infinite logarithmic series is used. The concrete truncated functions $L_N(h)f$ of [[def-cm-modified-log-coefficients-and-truncations]] have coefficients agreeing with $L(h)f$ through order $N$, by [[lem-cm-truncated-log-coefficient-bounds]] clause 4.
- Parity is a property of the symmetric Strang-type splitting: it uses $\Psi_{-h}=\Psi_h^{-1}$ and fails for the asymmetric first-order splittings $\varphi_{\tilde A}^h\circ\varphi_{\tilde B}^h$. No such claim is made for them.
