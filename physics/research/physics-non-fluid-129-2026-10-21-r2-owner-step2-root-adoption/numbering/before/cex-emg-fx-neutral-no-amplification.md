---
id: cex-emg-fx-neutral-no-amplification
kind: counterexample
title: A charged RN background does not amplify a neutral test scalar
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 5
proof_strategy: direct
deps:
  - def-emg-fx-charged-radial-scattering
  - lem-emg-fx-charged-radial-equation
  - prop-emg-fx-superradiant-wronskian
dependency_roles:
  def-emg-fx-charged-radial-scattering: mathematical-premise
  lem-emg-fx-charged-radial-equation: mathematical-premise
  prop-emg-fx-superradiant-wronskian: mathematical-premise
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Richard Brito, Vitor Cardoso, and Paolo Pani, Superradiance -- the 2020 Edition, Lecture Notes in Physics 971, second edition"
      url: https://arxiv.org/pdf/1501.06570
      locator: "Section 4.6.1, equation (4.56): the reflected amplitude depends on the test-field charge through the horizon frequency. The neutral specialization is verified locally."
    - title: "Visakan Balakumar, Aspects of quantum charged scalar field theory in curved spacetime: Black hole superradiance and Hadamard renormalisation, PhD thesis, University of Sheffield (2022)"
      url: https://inspirehep.net/files/c9d9d32ca091d580007a1fee1bb44dc0
      locator: "Chapter 3, Section 3.3.4, equations (3.83)-(3.84): classical charge superradiance requires the sign-changing product of field and black-hole charges. The exact neutral case below follows from the local flux identity."
verification:
  precheck: pass
---

## Statement refuted

Every admitted scattering mode on a nonzero charged subextremal electric
Reissner--Nordström background is amplified, regardless of the test scalar's
charge.

## Statement references

[[def-emg-fx-charged-radial-scattering]]

## Facts & Assumptions

**Given:** The charged radial scattering model on a fixed subextremal electric
RN exterior. We construct an admitted solution for the neutral spherical mode;
no scattering-solution existence is assumed.

[F1] [[lem-emg-fx-charged-radial-equation]]: for a smooth separated solution,
$u''+[(\omega-eQ/r)^2-f(\ell(\ell+1)/r^2+f'/r)]u=0$, with derivatives in
$r_*$.

[F2] [[prop-emg-fx-superradiant-wronskian]]: every admitted scattering
solution satisfies $|R|^2=1-(\omega-eQ/r_+)|T|^2/\omega$.

[F3] [[def-emg-fx-charged-radial-scattering]]: $x=r_*$ is a smooth
coordinate from the exterior onto $\mathbb R$ with $dr/dx=f$; the separated
field is $A_{\mathrm{in}}e^{-i\omega t}Y u/r$. For $e=0$,
$\Theta=\omega x$ and $\omega_H=\omega$, and admissibility requires
$$u=e^{-i\omega x}+Re^{i\omega x}+o(1),\quad
u'=-i\omega e^{-i\omega x}+i\omega Re^{i\omega x}+o(1)\quad(x\to+\infty),$$
$$u=Te^{-i\omega x}+o(1),\quad
u'=-i\omega Te^{-i\omega x}+o(1)\quad(x\to-\infty).$$

[A1] Choose any $M>0$, $0<|Q|<M$, and $\omega>0$, and set $e=0$ and
$\ell=0$.

[A2] For the $\ell=0$ angular mode choose
$Y(\Omega)=(4\pi)^{-1/2}$ on the unit round sphere. It is smooth, satisfies
$\Delta_{\gamma_{S^2}}Y=0$. Since
$d\omega_{S^2}=\sin\theta\,d\theta\,d\phi$,
$$\int_{S^2}Y^2\,d\omega_{S^2}
=(4\pi)^{-1}\int_0^{2\pi}\!\int_0^\pi\sin\theta\,d\theta\,d\phi=1.$$

## Counterexample

1.1 Write $x=r_*$ and use the choices in [A1]--[A2]. By [F3], $x$ ranges over
all of $\mathbb R$ and $dr/dx=f$. The charged radial
equation [F1] becomes
$$u''(x)+\bigl(\omega^2-V(x)\bigr)u(x)=0,\qquad
V(x):=\frac{f(r(x))f'(r(x))}{r(x)}.$$
The definition gives $dr/dx=f$ and $f(r)=(r-r_+)(r-r_-)/r^2$. Since
$r_+>M>r_-$ and $r_+r_-=Q^2$, we have $f(r)>0$ and $Mr>Mr_+>Q^2$
for $r>r_+$, so $f'(r)=2(Mr-Q^2)/r^3>0$ and $V>0$. Thus $V$ is smooth
and real. Moreover,
$$\int_{\mathbb R}|V(x)|\,dx=\int_{r_+}^{\infty}\frac{f'(r)}r\,dr
=\int_{r_+}^{\infty}\frac{2(Mr-Q^2)}{r^4}\,dr<\infty.$$
[given, F1, A1, A2, algebra]

1.2 Define $u_-$ by the Volterra equation
$$u_-(x)=e^{-i\omega x}+\frac1\omega\int_{-\infty}^{x}
\sin\!\bigl(\omega(x-y)\bigr)V(y)u_-(y)\,dy.$$
Iteration gives a uniformly convergent Neumann series: the absolute value of
its $n$th iterated term is at most
$\|V\|_{L^1(\mathbb R)}^n/(\omega^n n!)$, using $|\sin z|\le1$ for real $z$
and the ordered integration region. The sum is bounded on $\mathbb R$; differentiating
the integral equation shows it is a smooth solution of the equation in
step 1.1. The tail integrals tend to zero as $x\to-\infty$, and differentiation
under the integral gives
$$u_-(x)=e^{-i\omega x}+o(1),\qquad
u_-'(x)=-i\omega e^{-i\omega x}+o(1)\quad(x\to-\infty).$$
[given, step 1.1, algebra, construct]

2.1 Since $V u_-\in L^1(\mathbb R)$, expanding the sine in step 1.2 into
exponentials and replacing the upper integration limit by $+\infty$ gives
$$u_-(x)=a e^{-i\omega x}+b e^{i\omega x}+o(1),\qquad
u_-'(x)=-i\omega a e^{-i\omega x}+i\omega b e^{i\omega x}+o(1)$$
as $x\to+\infty$, where
$$a=1-\frac1{2i\omega}\int_{\mathbb R}e^{i\omega y}V(y)u_-(y)\,dy,
\qquad b=\frac1{2i\omega}\int_{\mathbb R}e^{-i\omega y}V(y)u_-(y)\,dy.$$
The same tail estimate after differentiating the integral equation proves the
displayed derivative asymptotic. [given, step 1.2, algebra]

2.2 For $j=\operatorname{Im}(\overline{u_-}u_-')$, the real-coefficient
equation in step 1.1 gives $j'=0$. The horizon asymptotics in step 1.2 yield
$j=-\omega$, while step 2.1 yields $j=\omega(|b|^2-|a|^2)$ at infinity;
the two oscillatory cross terms have real sum and contribute no imaginary part.
Hence $|a|^2=|b|^2+1$, so $a\ne0$. Put $u=u_-/a$, $R=b/a$, and $T=1/a$.
Then $u$ has the asymptotics in [F3], with unit incoming amplitude and only
the ingoing branch at the horizon. The separated-wave substitution in the
proof of [F1] is reversible here: $Y$ is a nonzero constant, $A_{\mathrm{in}}$
and $fr$ are nonzero, and each displayed step is an equality. Therefore
$\psi=A_{\mathrm{in}}e^{-i\omega t}Y u/r$ solves $\Box_{g,A}\psi=0$ and is
an admitted scattering solution for any fixed nonzero allowed
$A_{\mathrm{in}}$. [given, F1, F3, step 1.1, step 1.2, step 2.1, algebra]

3.1 Apply [F2] to this constructed solution. Since $e=0$ and $T=1/a\ne0$,
$$|R|^2=1-|T|^2=1-|a|^{-2}<1.$$
Thus this nonzero-charge background admits a neutral mode whose reflected
radial flux is less than the incident flux, contradicting the universal
amplification statement. [given, F2, A1, step 2.2, algebra] ∎

## Remarks

The construction proves existence for the neutral $\ell=0$ mode under the
stated subextremal real-frequency assumptions. It does not assert existence
for every charged mode or for other boundary-value problems.
