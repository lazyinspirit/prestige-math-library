---
id: thm-harmonic-measure-disc-poisson-density
kind: theorem
title: "Poisson density of harmonic measure on a disc"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - cor-uniqueness-for-the-bounded-plane-dirichlet-problem
  - def-barrier-and-regular-boundary-point
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-domain
  - def-dependent-choice
  - def-harmonic-measure-plane-domain
  - def-poisson-kernel-on-the-disc
  - lem-log-modulus-is-harmonic-off-its-centre
  - lem-planar-barrier-controls-perron-solutions
  - thm-conformal-invariance-of-plane-harmonicity
  - thm-harmonic-measure-is-well-defined
  - thm-poisson-integral-solves-the-disc-dirichlet-problem
sources:
  references:
    - title: "Boris Khoruzhenko, LTCC Potential Theory lecture notes, Sections 4.1-4.2"
      url: https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf
      locator: "Section 4.2, PDF pp. 37-39: Poisson density of harmonic measure on a disc"
    - title: "Mikhail Lyubich, Dynamics of Quadratic Polynomials, Vol. I, Appendix 1, Sections 10.1-10.9"
      url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
      locator: "Sections 10.3 and 10.8, printed pp. 165-166 and 171: Poisson formula and harmonic measure"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Assume Dependent Choice for the general representing-measure interface. Let
$c\in\mathbb C$, $R>0$, and let $\omega_{D(c,R)}^z$ be the harmonic measure of
the disc $D(c,R)$ at $z\in D(c,R)$, in the sense of
[[def-harmonic-measure-plane-domain]]. Writing $\xi=c+Re^{it}$ for the boundary
point of angle $t$, one has, for every Borel subset $E\subseteq\partial D(c,R)$
and with $s$ the arclength parameter on the circle,
$$\omega_{D(c,R)}^z(E)=\int_{t\in[0,2\pi):\,c+Re^{it}\in E} \frac{R^2-|z-c|^2}{|\xi-z|^2}\,\frac{dt}{2\pi} =\int_{E}\frac{R^2-|z-c|^2}{2\pi R\,|\xi-z|^2}\,ds(\xi).$$
The explicit Poisson kernel identity itself is a choice-free calculation;
Dependent Choice enters only through the uniqueness theorem for harmonic
measure.

## Facts & Assumptions

**Given:** A centre $c\in\mathbb C$, a radius $R>0$, a point $z\in D(c,R)$, and Dependent Choice ([[def-dependent-choice]]) for the uniqueness theorem. The Poisson kernel of the disc is as in [[def-poisson-kernel-on-the-disc]], harmonic measure as in [[def-harmonic-measure-plane-domain]], and regular boundary points as in [[def-barrier-and-regular-boundary-point]].

[F1] For continuous $\psi:\partial\mathbb D\to\mathbb R$ the Poisson integral $P[\psi]$ is harmonic on the unit disc, continuous on its closure, and equal to $\psi$ on the boundary, and it is the unique such function ([[thm-poisson-integral-solves-the-disc-dirichlet-problem]]).

[F2] Under Dependent Choice, every bounded regular plane domain has exactly one harmonic measure at each interior point ([[thm-harmonic-measure-is-well-defined]]); the functions continuous on $\overline\Omega$ and harmonic on $\Omega$ with equal boundary values coincide ([[cor-uniqueness-for-the-bounded-plane-dirichlet-problem]]).

[F3] If $b$ is a barrier at a boundary point $\zeta$ of a bounded complex domain $\Omega$, then $\zeta$ is regular: for every continuous boundary datum the regularized Perron envelope has limit $\varphi(\zeta)$ at $\zeta$ ([[lem-planar-barrier-controls-perron-solutions]], [[def-barrier-and-regular-boundary-point]]); a barrier at $\zeta$ is a subharmonic $b<0$ on $\Omega$ with $b(w)\to0$ as $w\to\zeta$ inside $\Omega$ and with each boundary point outside a neighbourhood of $\zeta$ kept away from $0$ uniformly.

[F4] The function $\log|\cdot|$ is harmonic on $\mathbb C\setminus\{0\}$ ([[lem-log-modulus-is-harmonic-off-its-centre]]), and harmonicity is preserved by composition with holomorphic maps ([[thm-conformal-invariance-of-plane-harmonicity]]).

## Proof

**Proof technique:** direct.

1.1 Every boundary point of a disc is regular. Fix $\xi\in\partial D(c,R)$ and put $\zeta_*:=c+2(\xi-c)$, so that $|\zeta_*-c|=2R$ and $|\zeta_*-\xi|=R$. Define $b(w):=\log R-\log|w-\zeta_*|$ for $w\in D(c,R)$. Then $b$ is harmonic on $D(c,R)$ by [F4], since $w\mapsto\log|w-\zeta_*|$ is the composition of $\log|\cdot|$ with the translation $w\mapsto w-\zeta_*$, which is holomorphic and nowhere zero on the disc. Moreover $|w-\zeta_*|>R$ for $w\in D(c,R)$, so $b<0$ there; $b(\xi)=\log R-\log R=0$, so $b\to0$ at $\xi$ by continuity of $b$ at $\xi$. For every neighbourhood $V$ of $\xi$, choose an open neighbourhood $W$ with $\xi\in W\subseteq V$. If $\partial D(c,R)\setminus W$ is empty, the uniform separation condition in [F3] is vacuous and any $c_V<0$ works. Otherwise the continuous boundary extension of $b$ attains a strictly negative maximum on the nonempty compact set $\partial D(c,R)\setminus W$; choosing this maximum as $c_V$ gives the required bound at every point of $\partial D(c,R)\setminus V$. Hence $b$ is a barrier at $\xi$ and $\xi$ is regular by [F3]; since $\xi$ was arbitrary, $D(c,R)$ is a bounded regular plane domain. [F3, F4]

1.2 For a continuous $\varphi:\partial D(c,R)\to\mathbb R$ put $\psi(t):=\varphi(c+Re^{it})$ and $u(\zeta):=P[\psi]\bigl((\zeta-c)/R\bigr)$ for $\zeta\in D(c,R)$. By [F1] applied to the unit disc, $u$ is harmonic on $D(c,R)$ and continuous on its closure with boundary values $\varphi$. For $\zeta=z$ the definition of the Poisson kernel gives, with $\xi=c+Re^{it}$, $$u(z)=\frac1{2\pi}\int_0^{2\pi}\varphi(\xi)\, \frac{R^2-|z-c|^2}{|\xi-z|^2}\,dt,$$ because $1-|(z-c)/R|^2=(R^2-|z-c|^2)/R^2$ and $|e^{it}-(z-c)/R|=|\xi-z|/R$. [F1, algebra]

2.1 Since all boundary points of $D(c,R)$ are regular by step 1.1, the regularized Perron envelope $H_\varphi$ of a continuous datum $\varphi$ is harmonic on $D(c,R)$ and has the boundary limit $\varphi$ at every boundary point; it is therefore a continuous harmonic extension of $\varphi$ to the closure, and so is $u$ by step 1.2. Uniqueness [F2] gives $H_\varphi=u$, hence by step 1.2 $$H_\varphi(z)=\frac1{2\pi}\int_0^{2\pi}\varphi(c+Re^{it})\, \frac{R^2-|z-c|^2}{|c+Re^{it}-z|^2}\,dt.$$ [F2, step 1.1, step 1.2]

3.1 Define the measure $\nu$ on $\partial D(c,R)$ by $\nu(E):=\frac1{2\pi}\int_{\{t\in[0,2\pi):\,c+Re^{it}\in E\}}\frac{R^2-|z-c|^2}{|c+Re^{it}-z|^2}\,dt$. The integrand is continuous and positive, so $\nu$ is a finite Borel measure on the compact circle, and step 2.1 says exactly that $\int\varphi\,d\nu=H_\varphi(z)$ for every continuous $\varphi$; taking $\varphi\equiv1$ and using the representation theorem of [F2], $\nu$ is a probability measure. Hence $\nu$ is a harmonic measure for $D(c,R)$ at $z$, and by the uniqueness in [F2], $\nu=\omega_{D(c,R)}^z$. Finally, the parametrization $t\mapsto c+Re^{it}$ is arclength measured in units $ds=R\,dt$, so the density of $\omega_{D(c,R)}^z$ with respect to $s$ is $(R^2-|z-c|^2)/(2\pi R|\xi-z|^2)$, which is the displayed second form. [F2, step 2.1, algebra]

4.1 Consequently the harmonic measure of the disc $D(c,R)$ at $z$ has the Poisson density of the statement, in both its angle form and its arclength form, and it is a probability measure on the boundary circle. The kernel computation of steps 1.2 and 3.1 is choice-free; $\mathrm{DC}$ was used only in step 2.1 through the uniqueness theorem [F2] and in the identification of $\nu$. [F2, step 2.1, step 3.1] ∎
