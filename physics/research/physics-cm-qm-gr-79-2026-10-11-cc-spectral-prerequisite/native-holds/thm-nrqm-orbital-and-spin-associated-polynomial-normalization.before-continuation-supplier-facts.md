---
id: thm-nrqm-orbital-and-spin-associated-polynomial-normalization
aliases: [nrqm-orbital-and-spin-associated-polynomial-normalization]
kind: theorem
domain: mathematics
title: "Associated-polynomial normalization"
status: draft
origin: pipeline
dependency_level: 1
deps: [thm-nrqm-orbital-and-spin-legendre-rodrigues-equation, lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates, def-polar-surface-measure-on-the-unit-sphere, thm-general-leibniz-rule, thm-algebra-of-derivatives, thm-chain-rule, thm-ftc-second-part, lem-trigonometric-characters-are-orthonormal, thm-continuous-implies-integrable, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, cor-cauchy-schwarz-inequality-for-l-two, def-complex-exponential, def-factorial-and-falling-factorial, def-natural-numbers, lem-complex-conjugation-and-modulus-laws, def-inner-product-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, cor-inner-product-induces-a-norm, def-countable-choice]
dependency_roles:
  thm-nrqm-orbital-and-spin-legendre-rodrigues-equation: mathematical-premise
  lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  thm-general-leibniz-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  lem-trigonometric-characters-are-orthonormal: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-factorial-and-falling-factorial: mathematical-premise
  def-natural-numbers: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  cor-inner-product-induces-a-norm: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §14.7 'Integer Degree and Order' (associated Legendre functions, Rodrigues-type formula and (14.7.1)-(14.7.6)) and §14.30 'Spherical and Spheroidal Harmonics' (surface harmonics and orthonormality)"
      url: "https://dlmf.nist.gov/14.7"
    - title: "S. Axler, P. Bourdon, W. Ramey, Harmonic Function Theory, 2nd edition, author-hosted full text, Chapter 5, printed pp. 77-105 (inner product of spherical harmonics and zonal harmonics)"
      url: "https://www.axler.net/HFT.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $P_l$ be the Legendre polynomials of
[[thm-nrqm-orbital-and-spin-legendre-rodrigues-equation]], and for $l\in\mathbb N$ and $0\le m\le l$ define the
function $w_{lm}:(-1,1)\to\mathbb R$ by

$$w_{lm}(t):=(-1)^m(1-t^2)^{m/2}\,\frac{d^m}{dt^m}P_l(t),$$

where $(1-t^2)^{1/2}>0$ denotes the nonnegative square root. Let $\sigma$ be the polar surface measure on
$S^2$ and let the angle coordinates be $\Phi(\theta,\varphi)=(\sin\theta\cos\varphi,\sin\theta\sin\varphi,\cos\theta)$
([[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]],
[[def-polar-surface-measure-on-the-unit-sphere]]). Then:

(a) each $w_{lm}$ extends continuously to $[-1,1]$, with $w_{lm}(\pm1)=0$ when $m\ge1$, and on $(-1,1)$
it satisfies the associated Legendre equation
$$-\bigl((1-t^2)w_{lm}'\bigr)'+\frac{m^2}{1-t^2}w_{lm}=l(l+1)w_{lm}\qquad(-1<t<1),$$
equivalently $(1-t^2)w_{lm}''-2tw_{lm}'+\Bigl[l(l+1)-\frac{m^2}{1-t^2}\Bigr]w_{lm}=0$;

(b) for fixed $m\ge0$ the functions $w_{lm}$, $l\ge m$, are pairwise orthogonal in $L^2((-1,1),dt)$:
$\int_{-1}^1w_{lm}w_{km}\,dt=0$ for $k\ne l$; moreover $0<\int_{-1}^1w_{lm}^2\,dt<+\infty$;

(c) with $b_{lm}:=\bigl(\int_{-1}^1w_{lm}^2\,dt\bigr)^{-1/2}>0$ and
$$Y_{lm}(\theta,\varphi):=b_{lm}\,w_{lm}(\cos\theta)\,\frac{e^{im\varphi}}{\sqrt{2\pi}}\qquad(l\ge m\ge0),$$
extended by $Y_{l,-m}:=(-1)^m\overline{Y_{lm}}$ for $m\ge1$ (as functions of $(\theta,\varphi)\in(0,\pi)\times(0,2\pi)$,
$\overline{\ \cdot\ }$ denoting complex conjugation, [[def-complex-exponential]],
[[lem-complex-conjugation-and-modulus-laws]]), one has $|Y_{l,-m}|=|Y_{lm}|$ and
$\overline{Y_{lm}}=(-1)^mY_{l,-m}$ for all $l$ and all $m$ with $|m|\le l$;

(d) the family $\{Y_{lm}:l\ge0,\ -l\le m\le l\}$ is orthonormal in $L^2(S^2,\sigma;\mathbb C)$
([[def-inner-product-space]], [[def-l-p-space-as-a-quotient-by-null-functions]]): for all $(l,m)\ne(l',m')$
with $|m|\le l$, $|m'|\le l'$, the integral $\int_{S^2}Y_{lm}\overline{Y_{l'm'}}\,d\sigma$ equals $0$, and it
equals $1$ when $(l,m)=(l',m')$;

(e) $w_{l0}=P_l$, and $w_{ll}(t)=(-1)^l\frac{(2l)!}{2^l l!}(1-t^2)^{l/2}$.

The functions $Y_{lm}$ are complex-valued $L^2$-functions on the sphere; no physical interpretation as angular
momentum eigenfunctions or spherical harmonics of an atom is asserted.

## Facts & Assumptions

**Given:** the Legendre polynomials $P_l$; integers $l\ge0$, $0\le m\le l$; the functions $w_{lm}$; the measure $\sigma$ and the parametrisation $\Phi$; the constants $b_{lm}$ and functions $Y_{lm}$.

[F1] $P_l$ satisfies $(1-t^2)P_l''-2tP_l'+l(l+1)P_l=0$ on $\mathbb R$, is a polynomial of degree $l$, and $P_l^{(m)}$ is therefore the polynomial function of a degree-$(l-m)$ polynomial ([[thm-nrqm-orbital-and-spin-legendre-rodrigues-equation]]).

[F2] The general Leibniz rule and the algebra of derivatives compute the derivatives of products; the chain rule computes derivatives of composites ([[thm-general-leibniz-rule]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]]).

[F3] Sphere integrals in angle coordinates: for Borel $F\ge0$, $\int_{S^2}F\,d\sigma=\int_{(0,\pi)\times(0,2\pi)}F(\Phi(\theta,\varphi))\sin\theta\,d(\theta,\varphi)$, and the complex $L^1$ version; $\sigma(S^2)=4\pi$ ([[lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates]]).

[F4] Characters of the circle: $\int_0^{2\pi}e^{ik\varphi}\,d\varphi=2\pi$ if $k=0$ and $=0$ for every nonzero $k\in\mathbb Z$ ([[lem-trigonometric-characters-are-orthonormal]], [[def-complex-exponential]]).

[F5] A continuous real function on the compact interval $[−1,1]$ is (Riemann and Lebesgue) integrable; products of continuous functions are continuous, and $\int_{-1}^1g>0$ for a continuous $g\ge0$ that is not identically zero ([[thm-continuous-implies-integrable]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F6] If $G:[−1,1]\to\mathbb R$ is continuous on $[−1,1]$, differentiable on $(-1,1)$, and $G'$ is Riemann integrable on $[−1,1]$, then $\int_{-1}^1G'=G(1)-G(-1)$; a continuous $G$ with $G(-1)=G(1)=0$ therefore has $\int_{-1}^1G'=0$ ([[thm-ftc-second-part]]).

[F7] For $f,g\in L^2$ the product $f\overline g$ is in $L^1$ with $\int|f\overline g|\le\|f\|_2\|g\|_2$; the inner product in $L^2(S^2,\sigma;\mathbb C)$ is linear in the first argument; conjugation satisfies $\overline{zw}=\overline z\,\overline w$ and $|z|^2=z\overline z$ ([[cor-cauchy-schwarz-inequality-for-l-two]], [[def-inner-product-space]], [[lem-complex-conjugation-and-modulus-laws]], [[def-complex-lp-and-euclidean-test-function-conventions]]).

[F8] For $k\ne0$, $d^mP_l/dt^m$ is a polynomial of degree $l-m$ with nonzero leading coefficient, so $w_{lm}$ is not the zero function on $(-1,1)$, because $(1-t^2)^{m/2}>0$ there ([[thm-nrqm-orbital-and-spin-legendre-rodrigues-equation]], [[def-factorial-and-falling-factorial]]).



## Proof

1.1 [Differentiated equation] Let $v:=P_l^{(m)}$. Differentiating the Legendre equation of [F1] $m$ times with the general Leibniz rule [F2] gives, since the third and higher derivatives of $1-t^2$ vanish, $(1-t^2)v''-2t(m+1)v'+[l(l+1)-m(m+1)]v=0$: the coefficient of $v''$ is $1-t^2$; that of $v'$ collects $-2t$ from differentiating $1-t^2$ once times the derivative count $\binom m1$ and $-2t$ from the term $-2tP_l'$, total $-2t(m+1)$; and that of $v$ collects $\binom m2(-2)+m(-2)+l(l+1)=-m(m-1)-2m+l(l+1)=l(l+1)-m(m+1)$. [F1, F2, algebra]

1.2 [Continuity at the endpoints] For $m=0$, $w_{l0}=P_l$ is a polynomial; for $m\ge1$, $w_{lm}=(-1)^m(1-t^2)^{m/2}Q(t)$ with $Q=P_l^{(m)}$ a polynomial, so $|w_{lm}(t)|\le(1-t^2)^{m/2}\sup_{[-1,1]}|Q|\to0$ as $t\to\pm1$, and the function extended by $w_{lm}(\pm1):=0$ is continuous on $[-1,1]$. [F1, F2, algebra]

2.1 [Substitution] Put $f(t):=(1-t^2)^{m/2}>0$ on $(-1,1)$, so that $w_{lm}=(-1)^mfv$; the sign is constant and will be carried along. From $v=f^{-1}w$ and [F2], $v'=f^{-1}w'-f^{-2}f'w$ and $v''=f^{-1}w''-2f^{-2}f'w'+(2f^{-3}(f')^2-f^{-2}f'')w$. Substituting into step 1.1 and multiplying by $f$ gives $(1-t^2)w''+\bigl[-2\tfrac{f'}{f}(1-t^2)-2t(m+1)\bigr]w'+\bigl[-\tfrac{f''}{f}(1-t^2)+2(\tfrac{f'}{f})^2(1-t^2)+2t(m+1)\tfrac{f'}{f}-m(m+1)+l(l+1)\bigr]w=0$. Direct differentiation gives $\tfrac{f'}{f}=-\tfrac{mt}{1-t^2}$ and therefore $\tfrac{f''}{f}=(\tfrac{f'}{f})'+(\tfrac{f'}{f})^2=\tfrac{-m-mt^2}{(1-t^2)^2}+\tfrac{m^2t^2}{(1-t^2)^2}=\tfrac{m(-1+(m-1)t^2)}{(1-t^2)^2}$. Hence the coefficient of $w'$ is $2mt-2t(m+1)=-2t$, and the coefficient of $w$ equals $\tfrac{m-m(m+1)t^2}{1-t^2}-m(m+1)+l(l+1)=l(l+1)-\tfrac{m^2}{1-t^2}$, using $\tfrac{m-m(m+1)t^2}{1-t^2}-m(m+1)=-\tfrac{m^2}{1-t^2}$ (expand the left side over the common denominator $1-t^2$). This is the associated equation. [step 1.1, F2, algebra]

3.1 [Orthogonality] Fix $m$ and let $k\ne l$, $k\ge m$. Multiply the associated equation for $w_{lm}$ by $w_{km}$ and that for $w_{km}$ by $w_{lm}$, subtract, and use $-\bigl((1-t^2)w_{lm}'\bigr)'w_{km}+\bigl((1-t^2)w_{km}'\bigr)'w_{lm}=-\tfrac{d}{dt}\bigl[(1-t^2)(w_{lm}'w_{km}-w_{lm}w_{km}')\bigr]$: $(l(l+1)-k(k+1))w_{lm}w_{km}=-\tfrac{d}{dt}G(t)$ with $G(t):=(1-t^2)\bigl(w_{lm}'(t)w_{km}(t)-w_{lm}(t)w_{km}'(t)\bigr)$. By step 1.2 and [F2], $G$ is continuous on $[-1,1]$ with $G(\pm1)=0$ (for $m\ge1$ both $w$'s vanish there; for $m=0$ the factor $1-t^2$ does), and $G$ is differentiable on $(-1,1)$ with the continuous integrand $G'$ of the previous display; hence [F6] gives $\int_{-1}^1G'=G(1)-G(-1)=0$, so $(l(l+1)-k(k+1))\int_{-1}^1w_{lm}w_{km}\,dt=0$ and, since $l\ne k$, $\int_{-1}^1w_{lm}w_{km}\,dt=0$. [step 2.1, step 1.2, F2, F5, F6, algebra]

3.2 [Positivity and finiteness of the norms] By steps 2.1 and 1.2, $w_{lm}^2$ is continuous on $[−1,1]$, so its integral is finite and nonnegative by [F5]; it is not zero because $w_{lm}$ is not the zero function on $(-1,1)$: $P_l^{(m)}$ is a nonzero polynomial by [F8] and $(1-t^2)^{m/2}>0$ in the interior, so $w_{lm}$ is nonzero at every point where the polynomial does not vanish, and a continuous nonzero function has positive integral by [F5]. Hence $0<\int_{-1}^1w_{lm}^2\,dt<+\infty$ and $b_{lm}$ of the Statement is a well-defined positive real. [step 2.1, step 1.2, F5, F8, algebra]

3.3 [The functions $Y_{lm}$ and their conjugation] For $l\ge m\ge0$, $Y_{lm}$ is well defined on the rectangle, and $|Y_{lm}|=b_{lm}|w_{lm}(\cos\theta)|/\sqrt{2\pi}$; by definition $Y_{l,-m}=(-1)^m\overline{Y_{lm}}$, so $|Y_{l,-m}|=|Y_{lm}|$ and, conjugating twice, $\overline{Y_{l,-m}}=(-1)^mY_{lm}$, which for $m\ge0$ is the displayed identity $\overline{Y_{lm}}=(-1)^mY_{l,-m}$. This establishes (c) and the identities in (e) follow from $P_l^{(0)}=P_l$ and $P_l^{(l)}=\frac{(2l)!}{2^ll!}$ (the leading coefficient of $P_l$ times $l!$, by [F1]). [step 2.1, F1, F7, algebra]

4.1 [Orthonormality] Let $m,m'\ge0$. By [F3] applied to the $L^1$ function $Y_{lm}\overline{Y_{l'm'}}$, whose integral against $\sigma$ is the inner product, and by [F4], $\langle Y_{lm},Y_{l'm'}\rangle=b_{lm}b_{l'm'}\frac1{2\pi}\Bigl(\int_0^{2\pi}e^{i(m-m')\varphi}d\varphi\Bigr)\Bigl(\int_{-1}^1w_{lm}(t)w_{l'm'}(t)\,dt\Bigr)=\delta_{mm'}\,b_{lm}b_{l'm}\int_{-1}^1w_{lm}w_{l'm}\,dt$, which by steps 3.1 and 3.2 equals $0$ for $l\ne l'$ and $1$ for $l=l'$. For entries with negative lower index, write the inner product as a product of conjugation operations using [F7]: $\langle Y_{l,-m},Y_{l',-m'}\rangle=(-1)^{m+m'}\langle\overline{Y_{lm}},\overline{Y_{l'm'}}\rangle=(-1)^{m+m'}\overline{\langle Y_{lm},Y_{l'm'}\rangle}$, and $\langle Y_{lm},Y_{l',-m'}\rangle=(-1)^{m'}\int_{S^2}Y_{lm}Y_{l'm'}\,d\sigma$, whose rectangle form has $\varphi$-factor $\int_0^{2\pi}e^{i(m+m')\varphi}d\varphi$, vanishing unless $m=m'=0$ by [F4], in which case it reduces to the already treated case; collecting the cases gives orthonormality for all pairs. This proves (d), and (a), (b) were proved in steps 2.1, 3.1 and 3.2. [step 3.1, step 3.2, step 3.3, F3, F4, F7, algebra] ∎
