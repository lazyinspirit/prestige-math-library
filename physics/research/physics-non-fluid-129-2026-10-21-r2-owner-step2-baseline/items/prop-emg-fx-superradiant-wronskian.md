---
id: prop-emg-fx-superradiant-wronskian
kind: proposition
title: Exact charged scattering Wronskian flux identity
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 4
proof_strategy: direct
deps:
  - def-emg-fx-charged-radial-scattering
  - lem-emg-fx-charged-radial-equation
dependency_roles:
  def-emg-fx-charged-radial-scattering: mathematical-premise
  lem-emg-fx-charged-radial-equation: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Richard Brito, Vitor Cardoso, and Paolo Pani, Superradiance -- the 2020 Edition, Lecture Notes in Physics 971, second edition"
      url: https://arxiv.org/pdf/1501.06570
      locator: "Section 4.4, equations (4.50)-(4.53), and Section 4.6.1, equations (4.54)-(4.56): conserved-Wronskian reflectivity identity and charged RN threshold. The local proof includes the long-range Coulomb phase required by the exact $1/r$ tail."
    - title: "Visakan Balakumar, Aspects of quantum charged scalar field theory in curved spacetime: Black hole superradiance and Hadamard renormalisation, PhD thesis, University of Sheffield (2022)"
      url: https://inspirehep.net/files/c9d9d32ca091d580007a1fee1bb44dc0
      locator: "Chapter 3, Sections 3.3.1-3.3.4, equations (3.76)-(3.84): the four mode boundary conditions and their Wronskian relations, including classical charge superradiance."
verification:
  precheck: pass
---

## Statement

Let $u$ be any scattering solution as defined on the fixed subextremal electric
RN exterior, with real $\omega>0$, real $e,Q$, unit incoming amplitude, and
reflection and transmission coefficients $R,T$. Then its radial Wronskian
flux $j:=\operatorname{Im}(\overline u\,\partial_{r_*}u)$ is constant and
$$|R|^2=1-\frac{\omega-eQ/r_+}{\omega}|T|^2.$$
Consequently, if $0<\omega<eQ/r_+$ and $T\ne0$, the reflected radial flux
magnitude exceeds the incident radial flux magnitude, since their ratio is
$|R|^2>1$. This is conditional on an admitted scattering solution and does not
assert its existence, a complex-frequency mode, or a nonlinear instability.

## Statement references

[[def-emg-fx-charged-radial-scattering]]

[[lem-emg-fx-charged-radial-equation]]

## Facts & Assumptions

**Given:** The charged radial scattering definition, a smooth solution of its
radial equation, and its stated incoming, reflected, and ingoing-horizon
asymptotics.

[F1] [[def-emg-fx-charged-radial-scattering]]: $r_*$ tends to $-\infty$ at the outer root and to $+\infty$ at spatial infinity; the asymptotics are $u=e^{-i\Theta}+Re^{i\Theta}+o(1)$ with the differentiated phase form at infinity and $u=Te^{-i\omega_Hr_*}+o(1)$ at the horizon, where $\omega_H=\omega-eQ/r_+$.

[F2] [[lem-emg-fx-charged-radial-equation]]: $u''+K(r)u=0$ with real
$K(r)=(\omega-eQ/r)^2-f(\ell(\ell+1)/r^2+f'/r)$ for every $r>r_+$.

[A1] $M>0$, $0<|Q|<M$, $e\in\mathbb R$, and $\omega>0$, so $r_+>0$ and both $\omega$ and $\omega_H$ are real.

## Proof

1.1 Differentiate $j=\operatorname{Im}(\overline u\,u')$. The radial equation
gives
$$j'=\operatorname{Im}(\overline{u'}u'+\overline u\,u'')=\operatorname{Im}(|u'|^2-K|u|^2)=0,$$
because both terms inside the last imaginary part are real by [F2]. Thus
$j$ is constant along the exterior. [given, F2, A1, algebra]

2.1 At infinity, $\Theta'=\omega-eQf/r\to\omega$. Substitution of the
Definition's differentiated asymptotics into $j$ gives
$j_\infty=\omega(|R|^2-1)$: the incident and reflected diagonal terms are
$-\omega$ and $\omega|R|^2$, while the two cross terms have real sum. At the
horizon the asymptotics give $j_H=-\omega_H|T|^2$. Equating these limits by
step 1.1 and dividing by $\omega>0$ proves the identity. If
$0<\omega<eQ/r_+$ then $\omega_H<0$; when $T\ne0$ the identity yields
$|R|^2=1+(-\omega_H/\omega)|T|^2>1$. The unit incoming and reflected
asymptotic flux magnitudes are $\omega$ and $\omega|R|^2$, so the stated
radial-flux comparison follows. [given, F1, F2, A1, step 1.1, algebra] ∎

## Remarks

The flux here is the conserved radial Wronskian flux of the separated
classical test-field equation. The identity is a linear fixed-background
scattering calculation. It gives no conclusion about field backreaction,
quantum pair production, trapping, exponential growth, or nonlinear stability.
