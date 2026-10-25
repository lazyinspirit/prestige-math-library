---
id: pthm-qftx-nonabelian-yang-mills-euler-lagrange
kind: physics-theorem
title: Source-free Euler–Lagrange equation for the classical SU(2) Yang–Mills action
status: "published"
origin: session
dependency_level: 3
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-nonabelian-yang-mills-model
axiom_base: "ZF + AC_omega inherited through the declared Lie-group and principal-connection suppliers; the variation and fundamental-lemma calculations add no choice."
deps:
  - post-qftx-nonabelian-yang-mills-model
  - lem-qftx-su2-compact-nonabelian-invariant-form
  - def-qftx-principal-connection-form
  - def-qftx-lie-algebra-valued-form-bracket
  - lem-qftx-principal-curvature-cartan-bianchi
  - def-qftx-associated-covariant-derivative
  - lem-sr-compact-variation-and-fundamental-lemma
  - prop-adjoint-is-a-smooth-lie-group-representation
  - thm-the-differential-of-adjoint-is-ad
dependency_roles:
  post-qftx-nonabelian-yang-mills-model: physical-assumption
  lem-qftx-su2-compact-nonabelian-invariant-form: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  def-qftx-lie-algebra-valued-form-bracket: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  def-qftx-associated-covariant-derivative: mathematical-premise
  lem-sr-compact-variation-and-fundamental-lemma: mathematical-premise
  prop-adjoint-is-a-smooth-lie-group-representation: mathematical-premise
  thm-the-differential-of-adjoint-is-ad: mathematical-premise
proof_strategy: direct
physical_scope: "The conditional source-free Euler–Lagrange equation for the adopted classical pure SU(2) Yang–Mills action on oriented, time-oriented flat Minkowski spacetime, for smooth connections and compactly supported variations in the selected bundle sector. No matter current, quantum conclusion, or empirical claim is asserted."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories"
      url: "https://arxiv.org/html/2110.06334"
      locator: "§§2.6.4–2.6.5: compactly supported stationarity, the Yang–Mills self-action, curvature variation, and the source-free field equation."
    - title: "Karl-Hermann Neeb, Differential Topology of Fiber Bundles (full lecture notes, 2024)"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf"
      locator: "Chapter 5 §5.4 and Chapter 6 §6.1, printed pp. 92–101: local connection forms, curvature as an adjoint-valued form, and transition covariance."
    - title: "David Tong, Gauge Theory, Chapter 2, Yang-Mills Theory"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf"
      locator: "§2.1.1, printed pp. 28–29: the natural-unit action and the source-free classical equation."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Use the adopted pure $SU(2)$ model on oriented, time-oriented Minkowski
$\mathbb R^{1,3}$ with $\eta=\operatorname{diag}(-1,1,1,1)$, no matter fields,
$\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$, and fixed $g_{\mathrm{YM}}>0$.
For a local section $s_i:U_i\to P$, write
$A_i=s_i^*\omega$,
$F_i=dA_i+\frac12[A_i\wedge A_i]$, and
$D_{A_i}\eta=d\eta+[A_i\wedge\eta]$ for an
$\mathfrak{su}(2)$-valued differential form $\eta$. A smooth local
variation is any $a\in\Omega^1(U_i,\mathfrak{su}(2))$ with compact support
in $U_i$; it represents a global adjoint-bundle-valued connection variation
by extension by zero. Define its dimensionless relative action difference by
$$
\Delta(S/\hbar)_i(\varepsilon;a)=-\frac{1}{2g_{\mathrm{YM}}^2}\int_{U_i}\left(\kappa(F_{A_i+\varepsilon a}\wedge *_\eta F_{A_i+\varepsilon a})-\kappa(F_i\wedge *_\eta F_i)\right).
$$
The integrand difference is compactly supported, so this relative integral is
defined even if the unvaried action over all of $M$ diverges.

The connection is stationary when the derivative at $\varepsilon=0$ of
$\Delta(S/\hbar)_i(\varepsilon;a)$ vanishes for every such variation in every
local trivialization.
It is stationary if and only if
$D_{A_i}(*_\eta F_i)=0$ in every local section. The local equations transform
by the adjoint action on overlaps and therefore define the global,
source-free Yang–Mills equation on the selected bundle sector. This
equivalence is a conditional classical deduction from the adopted action
and compact-support boundary convention.

## Statement references

[Matthijs Vákár, Principal Bundles and Gauge Theories](https://arxiv.org/html/2110.06334)

[Karl-Hermann Neeb, Differential Topology of Fiber Bundles (full lecture notes, 2024)](https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf)

[David Tong, Gauge Theory, Chapter 2, Yang-Mills Theory](https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf)

## Facts & Assumptions

**Given:** The adopted pure $SU(2)$ action, a smooth connection, and a smooth compactly supported local variation.

[A1] [[post-qftx-nonabelian-yang-mills-model]]: $M$ has the fixed Minkowski metric and orientation in the Statement.

[A3] [[post-qftx-nonabelian-yang-mills-model]]: the adopted action density is $-\kappa(F\wedge *_\eta F)/(2g_{\mathrm{YM}}^2)$.

[A4] [[post-qftx-nonabelian-yang-mills-model]]: variations are smooth and compactly supported; no boundary values are imposed at infinity, and finite-region variations vanish near the boundary.

[F1] [[lem-qftx-su2-compact-nonabelian-invariant-form]]: $T_1,T_2,T_3$ are a basis of $\mathfrak{su}(2)$ with $\kappa(T_a,T_b)=\delta_{ab}$ and $\kappa$ is positive and $\operatorname{Ad}$-invariant.

[F2] [[def-qftx-principal-connection-form]] and [[lem-qftx-principal-curvature-cartan-bianchi]]: local curvature is $F_i=dA_i+\frac12[A_i\wedge A_i]$, and the exterior covariant derivative is $D_{A_i}\eta=d\eta+[A_i\wedge\eta]$ with the graded bracket convention in the definition.

[F3] [[def-qftx-lie-algebra-valued-form-bracket]]: the bracket is graded skew and satisfies the graded derivation identity for the exterior derivative.

[A5] [[post-qftx-nonabelian-yang-mills-model]] defines the real adjoint bundle and its local transition law.

[F4] [[def-qftx-associated-covariant-derivative]] defines the induced derivative $d+\rho_*(A_i)$ on sections of a finite-dimensional complex representation bundle. Extend it to form-valued sections by $d+\rho_*(A_i)\wedge\cdot$. Complexifying $\mathfrak{su}(2)$ and extending $\operatorname{Ad}$ gives such a representation; by [F6], this extension restricts on real forms to $D_{A_i}\eta=d\eta+[A_i\wedge\eta]$.

[F5] [[lem-sr-compact-variation-and-fundamental-lemma]]: on an open Minkowski coordinate region, compactly supported $C^1$ coefficients admit differentiation under the integral sign and integration by parts; if a continuous scalar coefficient integrates to zero against every smooth compactly supported scalar test, it vanishes pointwise.

[F6] [[prop-adjoint-is-a-smooth-lie-group-representation]] and [[thm-the-differential-of-adjoint-is-ad]]: $\operatorname{Ad}$ is a smooth representation and its differential is $\operatorname{ad}$, so a varying local transition map differentiates by its Lie-algebra-valued Maurer–Cartan form.

## Proof

1.1 In one local section, expand the Cartan formula at $A_i+\varepsilon a$: $F_{A_i+\varepsilon a} =F_i+\varepsilon(da+[A_i\wedge a]) +\frac{\varepsilon^2}{2}[a\wedge a] =F_i+\varepsilon D_{A_i}a+\frac{\varepsilon^2}{2}[a\wedge a]$. Here $[A_i\wedge a]=[a\wedge A_i]$ because both inputs have degree one and the graded bracket is symmetric in that degree. [F2, F3, algebra]

1.2 In a Lie-algebra basis, differentiate the scalar-valued form $\kappa(a\wedge *_\eta F_i)$. The ordinary graded product rule gives $\kappa(da\wedge *_\eta F_i)-\kappa(a\wedge d *_\eta F_i)$. Invariance of $\kappa$, together with moving the degree-one factors $A_i$ and $a$ past one another, gives $\kappa([A_i\wedge a]\wedge *_\eta F_i) =\kappa(a\wedge[A_i\wedge *_\eta F_i])$. Therefore $d\kappa(a\wedge *_\eta F_i) =\kappa(D_{A_i}a\wedge *_\eta F_i) -\kappa(a\wedge D_{A_i} *_\eta F_i)$. [F1, F2, F3, algebra]

2.1 The difference of the two action densities vanishes outside the compact support of $a$ and its derivatives. Apply the parameter-differentiation clause of [F5] to its smooth coordinate coefficients. Symmetry of $\kappa$ and the even degree of $F_i$ then give $\left.\frac{d}{d\varepsilon}\right|_0\Delta(S/\hbar)_i(\varepsilon;a) =-\frac{1}{g_{\mathrm{YM}}^2}\int \kappa(D_{A_i}a\wedge *_\eta F_i)$. [A1, A3, A4, F1, F5, step 1.1, algebra]

3.1 Write the compactly supported scalar three-form as $\kappa(a\wedge *_\eta F_i)=\sum_{\mu=0}^3h_\mu\widehat{dx^\mu}$ with $h_\mu\in C_c^1(U_i)$. Its exterior derivative is $\sum_\mu(\partial_\mu h_\mu)d^4x$. Apply the integration-by-parts clause of [F5] with the constant function $1$ to each coefficient $h_\mu$; each integral is zero, so $\int d\kappa(a\wedge *_\eta F_i)=0$. Substitution in step 2.1 yields $\left.\frac{d}{d\varepsilon}\right|_0\Delta(S/\hbar)_i(\varepsilon;a) =-\frac{1}{g_{\mathrm{YM}}^2}\int \kappa(a\wedge D_{A_i} *_\eta F_i)$. [A1, A4, F5, step 2.1, step 1.2]

4.1 If $D_{A_i} *_\eta F_i=0$, step 3.1 shows that the first variation vanishes for every compactly supported $a$ in every chart. Thus the connection is stationary. [A3, step 3.1, algebra]

4.2 Conversely, assume stationarity. In a local coordinate chart and the orthonormal basis from [F1], write $J_i=D_{A_i} *_\eta F_i =\sum_{\mu=0}^3\sum_{b=1}^3J_{\mu b}T_b\,\widehat{dx^\mu}$, where $\widehat{dx^\mu}$ is the oriented coordinate three-form satisfying $dx^\mu\wedge\widehat{dx^\mu}=d^4x$. For fixed $\mu,b$, choose $a=\psi T_b dx^\mu$ with arbitrary smooth compactly supported real $\psi$. Stationarity and step 3.1 give $\int\psi J_{\mu b}\,d^4x=0$ for every such $\psi$. The fundamental-lemma clause of [F5] implies $J_{\mu b}=0$ throughout the chart. All coefficients vanish, so the local equation holds. [A4, F1, F5, step 3.1, algebra]

5.1 It remains to check that the local equations agree on overlaps. If $s_j=s_i g_{ij}$, then [F2] gives $A_j=\operatorname{Ad}_{g_{ij}^{-1}}A_i+\theta_L(g_{ij})$ and $(*_\eta F_j)=\operatorname{Ad}_{g_{ij}^{-1}}(*_\eta F_i)$. For $X\in T_x(U_i\cap U_j)$, put $Z=\theta_L(g_{ij})(X)$ and use the path $g_{ij}\exp(tZ)$ with initial tangent $X$. Differentiating the adjoint representation by [F6] gives $d(\operatorname{Ad}_{g_{ij}^{-1}})(X) =-\operatorname{ad}_Z\operatorname{Ad}_{g_{ij}^{-1}}$. Hence $d(\operatorname{Ad}_{g_{ij}^{-1}} *_\eta F_i) =\operatorname{Ad}_{g_{ij}^{-1}}d(*_\eta F_i) -[\theta_L(g_{ij})\wedge\operatorname{Ad}_{g_{ij}^{-1}}(*_\eta F_i)]$. The added Maurer–Cartan term cancels the corresponding term in $[A_j\wedge *_\eta F_j]$, leaving $D_{A_j} *_\eta F_j =\operatorname{Ad}_{g_{ij}^{-1}}(D_{A_i} *_\eta F_i)$. Thus the local zero equations define one global adjoint-bundle equation. [A5, F2, F4, F6, step 4.2, algebra] ∎
