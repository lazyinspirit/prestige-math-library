---
id: thm-qftx-local-faddeev-popov-slice-jacobian
kind: theorem
title: Local Faddeev–Popov slice Jacobian and orbit-intersection count
status: draft
origin: session
dependency_level: 3
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega, inherited from the non-Abelian gauge-slice data; the finite-dimensional proof uses no further choice."
deps:
  - def-countable-choice
  - def-qftx-gauge-slice-and-faddeev-popov-operator
  - thm-euclidean-inverse-function-theorem
  - cor-change-of-variables-for-compactly-supported-functions
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-gauge-slice-and-faddeev-popov-operator: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  cor-change-of-variables-for-compactly-supported-functions: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Skinner, Quantum Field Theory II: Advanced Quantum Field Theory lecture notes, Chapter 8"
      url: "https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap8.pdf"
      locator: "§§8.1–8.1.1, PDF pp. 154–161: finite-dimensional orbit-to-slice Jacobian, multiple intersections in the SO(2) model, stabilizers, and the distinction between a finite regulator and the formal continuum integral."
    - title: "P. K. Mitter and C. M. Viallet, On the Bundle of Connections and the Gauge Orbit Manifold in Yang–Mills Theory"
      url: "https://scispace.com/pdf/on-the-bundle-of-connections-and-the-gauge-orbit-manifold-in-1nks9qpdkj.pdf"
      locator: "Complete 16-page paper retrieved. §§IV.B–C and V, printed pp. 466–471: Sobolev local gauge sections, free-action restrictions, and the inverse-function argument for local orbit-space charts."
verification:
  precheck: pending
---

## Statement

Assume $\mathrm{AC}_\omega$ and let $(X,K,\alpha,S,\chi,\mu_X,\mu_K,\mu_S)$ be finite-dimensional regulated gauge-slice data as defined above, with $\dim X=n$, $\dim K=k$, $1\le k\le n$, and $s_0\in S\cap U$. Thus $K$ acts smoothly on the right, $S$ is an embedded codimension-$k$ submanifold, $\chi:U\to\mathbb R^k$ is a smooth defining submersion with $\ker d\chi_s=T_sS$, and the Faddeev–Popov operator is $M_s=d\chi_s\circ R_s$. Suppose $M_{s_0}$ is an isomorphism. For $\Psi(g,s)=s\cdot g$, there are neighborhoods $V$ of the identity in $K$, $W$ of $s_0$ in $S$, and $O$ of $s_0$ in $X$ such that $\Psi:V\times W\to O$ is a $C^1$ diffeomorphism. Consequently, each orbit has exactly one representative in $W$ among the representatives reached using $V$.

Fix group coordinates $\xi$ near the identity, slice coordinates $z$ near $s_0$, and adapted target coordinates $(y,z)=(\chi,z)$ near $s_0$. Write the densities there as $\mu_K=\rho_K(\xi)|d\xi|$, $\mu_S=\rho_S(z)|dz|$, and $\mu_X=\rho_X(y,z)|dy\,dz|$. The positive Jacobian $J_\Psi$ defined by $\Psi^*\mu_X=J_\Psi(\mu_K\otimes\mu_S)$ satisfies

$$
J_\Psi(e,s_0)=\frac{\rho_X(0,z_0)}{\rho_S(z_0)}\,\Delta_{\mathrm{FP}}(s_0),
$$

where $\Delta_{\mathrm{FP}}$ uses the density $(\mu_K)_e$ and the standard density on $\mathbb R^k$. Thus, when the target and slice densities are normalized so that $\rho_X(0,z_0)=\rho_S(z_0)$, the ordinary finite-dimensional orbit-to-slice Jacobian is exactly $\Delta_{\mathrm{FP}}(s_0)$. For every compactly supported Riemann-integrable function $f:O\to\mathbb R$, the local change-of-variables identity is
$$
\int_O f\,d\mu_X=\int_{V\times W}(f\circ\Psi)J_\Psi\,d\mu_K\,d\mu_S.
$$

For the exact multiplicity statement, fix $x\in X$ and a relatively compact open set $\Gamma\subset K$ such that $x\cdot\overline{\Gamma}\subset U$. Let $F_x(g)=\chi(x\cdot g)$. Let $r\ge 0$ be finite, and suppose $F_x$ has exactly $r$ zeros $g_1,\ldots,g_r$ in the support of a smooth function $\varphi$ compactly supported in $\Gamma$, each $M_{x\cdot g_i}$ is invertible, and the slice points $s_i=x\cdot g_i$ are distinct. Choose a nonnegative $\eta\in C_c^\infty(\mathbb R^k)$, supported in a ball $B_C(0)$ of finite radius $C>0$, with integral $1$, and set $\eta_\epsilon(y)=\epsilon^{-k}\eta(y/\epsilon)$. Then

$$
\lim_{\epsilon\downarrow0}\int_\Gamma \varphi(g)\,\eta_\epsilon(F_x(g))\,\Delta_{\mathrm{FP}}(x\cdot g)\,d\mu_K(g)=\sum_{i=1}^r\varphi(g_i).
$$

In particular, if $\varphi=1$ near the zeros, this finite-regulator expression counts the $r$ distinct transverse intersections exactly. The theorem asserts only a local chart and this finite-dimensional multiplicity formula; it gives no global gauge section, functional determinant, or continuum path-integral measure.

## Statement references

[Skinner, finite-dimensional orbit-to-slice Jacobian and intersection multiplicity](https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap8.pdf)

[Mitter and Viallet, local Sobolev slice theorem and its free-action hypotheses](https://scispace.com/pdf/on-the-bundle-of-connections-and-the-gauge-orbit-manifold-in-1nks9qpdkj.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the finite-dimensional regulated slice data, $s_0$, the invertible map $M_{s_0}$, and, for the multiplicity clause, $x,\Gamma,\varphi,\eta$ and the stated finite zero set.

[A1] $\mathrm{AC}_\omega$ is countable choice: every countable family of nonempty sets has a choice function. The qftx gauge-data chain inherits this assumption; no arbitrary-index choice is added here. [[def-countable-choice]]

[F1] [[def-qftx-gauge-slice-and-faddeev-popov-operator]]: the regulator supplies finite-dimensional $X$, a smooth right $K$-action, an embedded slice $S=\chi^{-1}(0)$, the orbit map $R_s=d(\alpha_s)_e$, and $M_s=d\chi_s\circ R_s$, with its determinant measured relative to the declared densities.

[F2] [[thm-euclidean-inverse-function-theorem]]: for a $C^1$ map between open subsets of equal-dimensional Euclidean spaces, an invertible derivative at a point gives neighborhoods on which the map is a $C^1$ diffeomorphism.

[F3] [[cor-change-of-variables-for-compactly-supported-functions]]: an injective $C^1$ map between open subsets of $\mathbb R^m$, with invertible derivative throughout, gives the compactly supported Riemann change-of-variables formula with factor $|\det Dg|$.

## Proof

1.1 Choose a submanifold chart $(z,w)$ at $s_0$ with $S$ given by $w=0$. Since $\ker d\chi_{s_0}=T_{s_0}S$ and $d\chi_{s_0}$ is onto, the derivative of $\chi$ in the $w$-directions is an isomorphism. Therefore $(z,w)\mapsto(\chi(z,w),z)$ has invertible derivative; [F2] gives adapted target coordinates $(y,z)=(\chi,z)$ near $s_0$. This uses the supplied finite-dimensional data [F1] and inherited countable-choice premise [A1]. [given, A1, F1, F2, algebra]

2.1 In source coordinates $(\xi,z)$ on $K\times S$ and target coordinates $(y,z)$, $D\Psi_{(e,s_0)}$ has block matrix $\begin{pmatrix}M_{s_0}&0\\ *&I_{n-k}\end{pmatrix}$: the upper-left block is $d\chi_{s_0}\circ R_{s_0}=M_{s_0}$, the upper-right block vanishes because $\chi$ is zero on $S$, and the lower-right block is the identity because $z$ is the slice coordinate. Its determinant is nonzero by the hypothesis on $M_{s_0}$. Applying [F2] gives an open neighborhood on which $\Psi$ is a diffeomorphism; choose an open product $V\times W$ inside that neighborhood and set $O=\Psi(V\times W)$, which is open because a local diffeomorphism is open. Injectivity gives the stated uniqueness of the slice representative reached using $V$. [given, F1, F2, step 1.1, algebra]

3.1 In the same coordinates, the block determinant has absolute value $|\det M_{s_0}|$. Dividing by the source density coefficient $\rho_K(0)\rho_S(z_0)$ and using $\Delta_{\mathrm{FP}}(s_0)=|\det M_{s_0}|/\rho_K(0)$ gives $J_\Psi(e,s_0)=\rho_X(0,z_0)\Delta_{\mathrm{FP}}(s_0)/\rho_S(z_0)$. On the chosen chart, [F3] applied to each compactly supported Riemann-integrable target function gives $\int_O f\,d\mu_X=\int_{V\times W}(f\circ\Psi)J_\Psi\,d\mu_K\,d\mu_S$. [F1, F3, step 2.1, algebra]

4.1 At $g\in K$, the left-invariant frame is $Z\mapsto d(L_g)_eZ$, and the right-action identity gives $D(F_x)_g(d(L_g)_eZ)=M_{x\cdot g}Z$. The density $\mu_K$ has coefficient $\rho_K(0)$ in this frame, so $\Delta_{\mathrm{FP}}(x\cdot g)d\mu_K(g)$ changes to Lebesgue density under $y=F_x(g)$. Around each of the finitely many roots choose pairwise disjoint relatively compact inverse neighborhoods $V_i\subset\Gamma$ and smooth cutoffs $\psi_i$ supported there and equal to $1$ near $g_i$. The compactly supported remainder $\varphi(1-\sum_i\psi_i)$ has support disjoint from $F_x^{-1}(0)$, because every zero in $\operatorname{supp}\varphi$ is listed and each cutoff is $1$ near its root; hence $|F_x|$ has a positive minimum on that support and the remainder integral vanishes for small $\epsilon$. On each branch, [F3] gives $\int_{V_i}\varphi(g)\psi_i(g)\eta_\epsilon(F_x(g))\Delta_{\mathrm{FP}}(x\cdot g)d\mu_K(g)=\int_{F_x(V_i)}\varphi(F_{x,i}^{-1}(y))\psi_i(F_{x,i}^{-1}(y))\eta_\epsilon(y)\,dy$. For small $\epsilon$, the support of $\eta_\epsilon$ is contained in $F_x(V_i)$, and this integral differs from $\varphi(g_i)$ by at most $\sup_{|y|\le C\epsilon}|\varphi(F_{x,i}^{-1}(y))\psi_i(F_{x,i}^{-1}(y))-\varphi(g_i)|\int\eta_\epsilon(y)\,dy$, which tends to zero by continuity and unit mass. Summing the branch limits and the zero remainder proves the formula and counts the distinct transverse intersections. [F1, F2, F3, step 3.1, algebra] ∎
## Remarks

The diagram records the tangent-space calculation used in step 2.1. The upper arrow is the derivative of the local orbit-to-slice coordinate map; the lower arrow measures only its group-orbit component. The square commutes because $d\chi_s$ vanishes on $T_sS$. The proof above establishes invertibility and the Jacobian independently of the diagram.

```tikzcd
\mathfrak k\oplus T_sS \arrow[r,"D\Psi_{(e,s)}"] \arrow[d,"\operatorname{pr}_{\mathfrak k}"'] & T_sX \arrow[d,"d\chi_s"] \\
\mathfrak k \arrow[r,"M_s"'] & \mathbb R^k
```
