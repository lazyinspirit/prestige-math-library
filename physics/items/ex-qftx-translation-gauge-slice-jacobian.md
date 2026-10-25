---
id: ex-qftx-translation-gauge-slice-jacobian
kind: example
title: Translation action with a unit Faddeev–Popov Jacobian
status: draft
origin: session
dependency_level: 4
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega inherited from the regulated gauge-slice datum."
deps:
  - def-qftx-gauge-slice-and-faddeev-popov-operator
  - thm-qftx-local-faddeev-popov-slice-jacobian
dependency_roles:
  def-qftx-gauge-slice-and-faddeev-popov-operator: mathematical-premise
  thm-qftx-local-faddeev-popov-slice-jacobian: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David Skinner, Quantum Field Theory II: Advanced Quantum Field Theory lecture notes, Chapter 8"
      url: "https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap8.pdf"
      locator: "§§8.1–8.1.1, PDF pp. 154–161: finite-dimensional slice Jacobians and the boundary between regulator calculations and continuum gauge fixing."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Take $M=\{\star\}$ and
$$G=SU(2):=\{q\in M_2(\mathbb C):q^*q=I_2,\ \det q=1\}$$
with matrix multiplication and Lie algebra $\mathfrak{su}(2)=\{Z\in M_2(\mathbb C):Z^*=-Z,\ \operatorname{tr}Z=0\}$. Its elements are exactly $\begin{pmatrix}a&b\\-\overline b&\overline a\end{pmatrix}$ with $|a|^2+|b|^2=1$, giving a diffeomorphism with the unit sphere in $\mathbb C^2$; matrix multiplication and inversion are smooth. Thus $G$ is a compact noncommutative finite-dimensional real Lie group, as checked in the Verification. Let $P=SU(2)\to M$ with right multiplication, $H=0$, and $\omega_q(V)=q^{-1}V$ for $V\in T_qSU(2)$; this specifies the principal bundle and connection datum. Choose the independent regulator $X=\mathbb R^2$ with coordinates $(u,v)$ and density $du\,dv$, the additive Lie group $K=(\mathbb R,+)$ with left-invariant density $dt$, and the smooth right action
$$
(u,v)\cdot t=(u+t,v).
$$
Let $S=\{(0,v):v\in\mathbb R\}$, choose $s_0=(0,0)\in S$, and set $U=X$. Let $\chi(u,v)=u$ and give $S$ density $dv$. For every $s=(0,v)\in S$, the Faddeev–Popov operator is $M_s(t)=t$, so $\Delta_{\mathrm{FP}}(s)=1$. The local orbit-to-slice map is $\Psi(t,(0,v))=(t,v)$, with density Jacobian $1$. For $x=(a,b)$, the gauge condition along its orbit is $F_x(t)=a+t$; it has one transverse zero $t_0=-a$, and the slice meets this orbit once. If $\Gamma\subset\mathbb R$ is relatively compact and open with $t_0\in\Gamma$, and $\varphi\in C_c^\infty(\Gamma)$ has $t_0\in\operatorname{supp}\varphi$, then for every nonnegative compactly supported smooth $\eta$ of integral $1$, the regularized intersection expression tends to $\varphi(t_0)$.

## Example references

[Skinner, finite-dimensional Faddeev–Popov Jacobian and regulator scope](https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap8.pdf)

[[def-qftx-gauge-slice-and-faddeev-popov-operator|Finite-dimensional regulator, slice, and density-ratio conventions]]

[[thm-qftx-local-faddeev-popov-slice-jacobian|Local orbit-to-slice Jacobian and finite intersection formula]]

## Facts & Assumptions

**Given:** The countable-choice background, the finite-dimensional gauge-slice definition, and its local Jacobian and intersection theorem.

[A1] The antecedent non-Abelian bundle datum and regulator conventions are those required in the definition; the regulator group $K$ is independent data and is not identified with the full gauge group. [[def-qftx-gauge-slice-and-faddeev-popov-operator]]

[F1] [[def-qftx-gauge-slice-and-faddeev-popov-operator]]: for a smooth right action, $R_s=d(\alpha_s)_e$, $M_s=d\chi_s\circ R_s$, and $M_s^*\lambda=\Delta_{\mathrm{FP}}(s)\nu$ relative to the chosen positive densities.

[F2] [[thm-qftx-local-faddeev-popov-slice-jacobian]]: at a transverse slice point the map $\Psi(g,s)=s\cdot g$ is a local diffeomorphism with Jacobian $\rho_X(0,z_0)\Delta_{\mathrm{FP}}(s_0)/\rho_S(z_0)$; for finitely many transverse zeros the regularized integral tends to the sum of the test-function values.

## Verification

**Proof technique:** direct substitution and one-dimensional change of variables.

1.1 The set $SU(2)$ is closed and bounded in the finite-dimensional space $M_2(\mathbb C)$, hence compact; the matrices $\operatorname{diag}(i,-i)$ and $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ lie in $SU(2)$ and do not commute. The projection $P\to\{\star\}$ with right multiplication is a smooth principal bundle, $VP=TP$, and $H=0$ is a smooth right-invariant complement. For $Z\in\mathfrak{su}(2)$, the defining one-parameter subgroup $t\mapsto\exp_G(tZ)$ has initial velocity $Z$, so differentiating $q\exp_G(tZ)$ gives the fundamental vector $Z_P(q)=qZ$ and $\omega_q(Z_P(q))=Z$; also $\ker\omega=0=H$ and $\omega_{qh}(Vh)=h^{-1}\omega_q(V)h$. Thus $\omega$ is a principal connection. The specified $s_0$ and $U$ satisfy the slice-data requirement. The regulator group is independent of the ambient full gauge group, as required by the Definition. Translation is a smooth right action because $((u,v)\cdot t)\cdot h=(u+t+h,v)=(u,v)\cdot(t+h)$. The zero set of $\chi$ is exactly $S$, and $d\chi_{(0,v)}(\delta u,\delta v)=\delta u$ has kernel $T_{(0,v)}S=\{(0,\delta v)\}$. [given, A1, F1, algebra]

1.2 The orbit derivative sends $c\in T_0\mathbb R\cong\mathbb R$ to $(c,0)$; composing with $d\chi$ gives $M_s(c)=c$. Since $dt$ and $du$ have unit coefficients in these coordinates, $\Delta_{\mathrm{FP}}(s)=|\det(1)|=1$. Also $\Psi(t,(0,v))=(t,v)$ preserves the product coordinate density, so $J_\Psi=1$. [given, F1, algebra]

2.1 For $x=(a,b)$, $F_x(t)=a+t$, hence its unique zero is $t_0=-a$, and $x\cdot t_0=(0,b)\in S$. This is a transverse intersection because the operator there is the isomorphism $c\mapsto c$; no second group parameter produces the same point on this orbit. [given, F1, step 1.2, algebra]

3.1 Extend $\varphi$ by zero outside $\Gamma$; this is smooth because $\varphi$ has compact support in $\Gamma$. In the regularized expression, substitute $y=a+t$. Since $t_0\in\Gamma$, we have $0=a+t_0\in a+\Gamma$, so for all sufficiently small $\epsilon$ the support of $\eta_\epsilon$ lies in $a+\Gamma$ and change of variables gives $\int_\Gamma\varphi(t)\eta_\epsilon(a+t)\,dt=\int_{\mathbb R}\varphi(y-a)\eta_\epsilon(y)\,dy$. The last integral differs from $\varphi(-a)$ by at most $\sup_{|y|\le C\epsilon}|\varphi(y-a)-\varphi(-a)|\int\eta_\epsilon(y)\,dy$, where $C$ bounds the support of $\eta$. This tends to zero by continuity and normalization. Since $\Delta_{\mathrm{FP}}=1$, the required limit is $\varphi(t_0)$, as asserted. [given, F1, F2, step 1.2, step 2.1, algebra] ∎

## Remarks

This is a finite-dimensional coordinate calculation. It supplies no functional determinant or continuum path-integral measure.
