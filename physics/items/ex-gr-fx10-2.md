---
id: ex-gr-fx10-2
kind: example
title: "A locally flat Kasner coordinate branch"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-bianchi-i-data
  - def-gr-fx-bianchi-i-curvature
  - lem-gr-fx-bianchi-i-curvature-components
  - prop-gr-fx-kasner-vacuum
  - prop-gr-fx-bianchi-shear-decay
dependency_roles:
  def-gr-fx-bianchi-i-data: mathematical-premise
  def-gr-fx-bianchi-i-curvature: mathematical-premise
  lem-gr-fx-bianchi-i-curvature-components: mathematical-premise
  prop-gr-fx-kasner-vacuum: mathematical-premise
  prop-gr-fx-bianchi-shear-decay: mathematical-premise
sources:
  references:
    - title: "Rishabh Jha, Introduction to Hamiltonian Formulation of General Relativity and Homogeneous Cosmologies, SciPost Physics Lecture Notes 73 (2023), arXiv:2204.03537v2, Section 4.3.1, equations (159)–(172), printed pp. 36–38 (PDF pp. 37–39)"
      url: "https://arxiv.org/pdf/2204.03537"
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Example

For lengths $A_i>0$ in metres and a time $t_0>0$ in seconds, set $I=(0,\infty)$ and take the exponents $(p_1,p_2,p_3)=(1,0,0)$, so $a_1=A_1(t/t_0)$ and $a_2=A_2$, $a_3=A_3$. They satisfy $\sum_i p_i=1$ and $\sum_i p_i^2=1$, and the corresponding diagonal Bianchi I metric is Ricci-flat with identically zero Riemann tensor on $I$. Define the open coordinate domain $\mathcal D:=\{(T,X,z_2,z_3)\in\mathbb R^4:T>|X|\}$ and its Minkowski metric $\eta:=-dT^2+dX^2+dz_2^2+dz_3^2$, with all four coordinates measured in metres. In any local quotient chart with lifted dimensionless angular coordinates $x^1,x^2,x^3$, let $\alpha:=A_1/(ct_0)$ and define

$$\Phi(t,x^1,x^2,x^3):=(ct\cosh(\alpha x^1),\;ct\sinh(\alpha x^1),\;A_2x^2,\;A_3x^3).$$

This map is a local isometry from the chart domain, with the Bianchi I metric, onto an open subset of $(\mathcal D,\eta)$. Its scale factor $a_1$ tends to zero as $t\downarrow0$, but that excluded coordinate boundary alone does not establish curvature blowup or a global extension on the torus quotient.

## Example references

[[def-gr-fx-bianchi-i-data]]

[[def-gr-fx-bianchi-i-curvature]]

[[lem-gr-fx-bianchi-i-curvature-components]]

[[prop-gr-fx-kasner-vacuum]]

[[prop-gr-fx-bianchi-shear-decay]]

## Facts & Assumptions

**Given:** The stated power-law Bianchi I metric on $I=(0,\infty)$ with $A_i>0$ lengths in metres and $t_0>0$ seconds, a local lift of the periodic angular coordinates, and the inherited $\mathrm{AC}_\omega$ context.

[A1] The Bianchi I product and quotient construction carries $\mathrm{AC}_\omega$ and no stronger choice principle ([[def-gr-fx-bianchi-i-data]]).

[F1] $H_i=\dot a_i/a_i$, $H=\frac13\sum_iH_i$, $V=\prod_i a_i$, and $\sigma^2=\frac12\sum_i(H_i-H)^2$ ([[def-gr-fx-bianchi-i-data]]).

[F2] The local C2 curvature convention defines the Riemann tensor from the displayed connection coefficients and uses the stated sign/index order ([[def-gr-fx-bianchi-i-curvature]]).

[F3] The curvature components are $R_{0i0i}=-a_i^2(\dot H_i+H_i^2)$ and $R_{ijij}=a_i^2a_j^2H_iH_j/c^2$; all other independent index patterns vanish ([[lem-gr-fx-bianchi-i-curvature-components]]).

[F4] In a nonstatic power-law branch, Ricci-flatness is equivalent to the two Kasner sums; the all-zero exponent case is separately flat ([[prop-gr-fx-kasner-vacuum]]).

[F5] For isotropic diagonal source, each $V(H_i-H_j)$ is constant and $V^2\sigma^2$ is constant with units $\mathrm{m}^6\mathrm{s}^{-2}$ ([[prop-gr-fx-bianchi-shear-decay]]).

## Verification

**Proof technique:** direct component substitution followed by an explicit local coordinate change.

1.1 Work under the inherited $\mathrm{AC}_\omega$ context [A1]. The exponents have $\sum_i p_i=1$ and $\sum_i p_i^2=1$, so [F4] gives the Ricci-flat conclusion for this nonstatic branch. [given, A1, F4, algebra]

2.1 The directional rates are $H_1=1/t$ and $H_2=H_3=0$. Thus every $\dot H_i+H_i^2$ is zero and every product $H_iH_j$ with $i\ne j$ is zero; [F3] makes every independent Riemann component vanish, hence the full curvature tensor vanishes on $I$. Also $H=1/(3t)$, $V=A_1A_2A_3(t/t_0)$ and $\sigma^2=1/(3t^2)$. Since step 1.1 and [F2] give $\mathcal R=0$ and $G^i{}_i=0$, the equations in [F5] hold with $\Lambda=0$ and $Q_i=0$, yielding $V^2\sigma^2=(A_1A_2A_3)^2/(3t_0^2)$. [step 1.1, F1, F2, F3, F5, algebra]

3.1 On the lifted chart, put $r=ct>0$ and $\theta=\alpha x^1$. Then $(T,X)=(r\cosh\theta,r\sinh\theta)$ satisfies $T>|X|$, and the inverse in its image is $t=\sqrt{T^2-X^2}/c$, $x^1=\operatorname{artanh}(X/T)/\alpha$, $x^2=z_2/A_2$, and $x^3=z_3/A_3$. Thus $\Phi$ is a diffeomorphism onto an open subset of $\mathcal D$. The identities $-dT^2+dX^2=-dr^2+r^2d\theta^2=-c^2dt^2+a_1(t)^2(dx^1)^2$ and $(dz_2)^2+(dz_3)^2=a_2^2(dx^2)^2+a_3^2(dx^3)^2$ give $\Phi^*\eta=g$. The local lift does not define a global coordinate transformation of the periodic torus. Since all curvature components already vanish for every $t>0$, the collapse of $a_1$ at the excluded endpoint $t=0$ alone proves no curvature blowup. [step 2.1, F2, algebra] ∎
