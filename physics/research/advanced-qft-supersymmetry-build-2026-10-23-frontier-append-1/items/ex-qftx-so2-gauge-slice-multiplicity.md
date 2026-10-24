---
id: ex-qftx-so2-gauge-slice-multiplicity
kind: example
title: SO(2) orbit with two slice intersections and a stabilizer at the origin
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
sources:
  references:
    - title: "David Skinner, Quantum Field Theory II: Advanced Quantum Field Theory lecture notes, Chapter 8"
      url: "https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap8.pdf"
      locator: "§§8.1–8.1.1, PDF pp. 154–161: the SO(2) orbit model, multiple intersections, and the vanishing Faddeev–Popov derivative at a stabilizer."
verification:
  precheck: pending
---

## Example

Take $M=\{\star\}$, $G=SU(2)$ as the noncommutative group of unit quaternions, $P=SU(2)\to M$ with right multiplication, $H=0$, and connection form $\omega=q^{-1}dq$. This is an admissible non-Abelian bundle and connection datum. Choose the independent regulator $X=\mathbb R^2$ with Lebesgue density. Write $R_\theta\in SO(2)$ for rotation through angle $\theta$ modulo $2\pi$. Let $K=SO(2)$ with left-invariant density $|d\theta|$, and define the smooth right action
$$
(x,y)\cdot R_\theta=(x\cos\theta+y\sin\theta,\,-x\sin\theta+y\cos\theta).
$$
Take $S=\{(x,0):x\in\mathbb R\}$, $\chi(x,y)=y$, and density $dx$ on $S$. At $s=(r,0)$, the orbit differential in the angle direction is $(0,-r)$, so $M_s(1)=-r$ and $\Delta_{\mathrm{FP}}(s)=|r|$. For $r>0$, the orbit-to-slice map is $\Psi(R_\theta,(r,0))=(r\cos\theta,-r\sin\theta)$, whose coordinate Jacobian at the identity is $r$, agreeing with the Faddeev–Popov density ratio. For a fixed orbit point $x_0=(r,0)$, $r>0$, the gauge function is $F_{x_0}(R_\theta)=-r\sin\theta$. Its two zeros are $\theta=0,\pi$, with distinct slice points $(r,0)$ and $(-r,0)$, and both are transverse. Taking $\Gamma=SO(2)$ and the test function $\varphi=1$, the regularized intersection expression tends to $2$. At the origin the full group stabilizes the point, $M_{(0,0)}=0$, and $F_{(0,0)}$ vanishes on all of $SO(2)$; the theorem's isolated transverse-zero hypotheses fail there.

## Example references

[Skinner, finite-dimensional SO(2) orbit, residual intersections, and stabilizer limitation](https://www.damtp.cam.ac.uk/user/dbs26/AQFT/chap8.pdf)

[[def-qftx-gauge-slice-and-faddeev-popov-operator|Finite-dimensional gauge action and Faddeev–Popov operator]]

[[thm-qftx-local-faddeev-popov-slice-jacobian|Transverse Jacobian and finite intersection count]]

## Facts & Assumptions

**Given:** The countable-choice background, the finite-dimensional gauge-slice definition and theorem, and the angle-coordinate regulator data stated in the Example.

[A1] The finite regulator $K$ is specified independently of the full gauge group; the slice condition and density ratio are those of the local definition. [[def-qftx-gauge-slice-and-faddeev-popov-operator]]

[F1] [[def-qftx-gauge-slice-and-faddeev-popov-operator]]: for a smooth right action, $R_s=d(\alpha_s)_e$, $M_s=d\chi_s\circ R_s$, and $\Delta_{\mathrm{FP}}$ is the nonnegative density ratio of $M_s^*\lambda$ to the chosen density on the Lie algebra.

[F2] [[thm-qftx-local-faddeev-popov-slice-jacobian]]: for finitely many distinct transverse zeros in the test-function support, the regularized integral with $\Delta_{\mathrm{FP}}$ tends to the sum of the test-function values.

## Verification

**Proof technique:** direct trigonometric calculation and one-dimensional change of variables.

1.1 The chosen regulator group is independent of the ambient full gauge group, as required by the Definition. The rotations satisfy $((x,y)\cdot R_\theta)\cdot R_\phi=(x,y)\cdot R_{\theta+\phi}$, so the displayed formula is a smooth right action. The zero set of $\chi$ is exactly $S$, and at every point of $S$, $d\chi(\delta x,\delta y)=\delta y$ has kernel $T_sS=\{(\delta x,0)\}$. [given, A1, F1, algebra]

1.2 Differentiating the action at $\theta=0$ gives $R_{(x,y)}(1)=(y,-x)$. Hence at $s=(r,0)$, $M_s(1)=-r$ and $\Delta_{\mathrm{FP}}(s)=|r|$, since both the angle density and the standard Lie-algebra density have unit coefficient. For $r>0$, the differential of $\Psi$ at $(e,s)$, with source coordinates $(\theta,r)$ and target coordinates $(y_{\rm target},z)=(y,x)$, has determinant of absolute value $r$, as the theorem's density formula predicts. [given, F1, F2, algebra]

2.1 For $x_0=(r,0)$, $F_{x_0}(R_\theta)=-r\sin\theta$, so its zeros on the circle are exactly $0$ and $\pi$ modulo $2\pi$. Their slice points are $(r,0)$ and $(-r,0)$, which are distinct. At the two zeros the orbit derivatives in the $y$-direction are respectively $-r$ and $r$, nonzero for $r>0$; thus both intersections are transverse. [given, F1, step 1.2, algebra]

3.1 The density factor along the orbit is $\Delta_{\mathrm{FP}}(x_0\cdot R_\theta)=r|\cos\theta|$, which is the absolute derivative $|dF_{x_0}/d\theta|$. For $C\epsilon<r$, the support of $\eta_\epsilon(F_{x_0})$ lies in disjoint arcs about $0$ and $\pi$, each mapped diffeomorphically by $F_{x_0}$ over the support of $\eta_\epsilon$. Changing variables $z=F_{x_0}(R_\theta)$ on each arc makes its integral $\int\eta_\epsilon(z)\,dz=1$. Therefore the sum is $2$, the two distinct transverse intersections. [given, F1, F2, step 2.1, algebra]

4.1 At the origin the orbit map is zero, so $M_{(0,0)}=0$ and the FP Jacobian is zero. Also every group element fixes the origin, hence $F_{(0,0)}\equiv0$ and the zero set is the whole circle, not a finite set of transverse roots. This verifies exactly why the multiplicity theorem does not apply at a point with this stabilizer. [given, F1, algebra] ∎

## Remarks

This SO(2) computation is a finite-dimensional model of orbit intersections. It is not a continuum gauge-fixing argument.
