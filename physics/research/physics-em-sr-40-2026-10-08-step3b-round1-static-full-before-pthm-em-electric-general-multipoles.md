---
id: pthm-em-electric-general-multipoles
kind: physics-theorem
domain: physics
dependency_level: 18
title: "Convergent all-order spherical multipole expansion with monopole, dipole and quadrupole terms"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The full exterior compact-$L^1$ spherical multipole potential theory, its exact monopole/dipole/quadrupole terms, geometric tails and every-order compact derivative convergence, plus a separate source-free radius-$R$ ball-potential branch for independent real $L^2$ angular boundary data: bounded radial $L^2$ norm, $L^2$ boundary convergence and uniqueness, interior smooth Maxwell completion, and continuous-data Poisson representation/continuous boundary extension. No exterior source-radius trace, singular-source expansion, boundary-field trace or empirical assertion is inferred."
proof_strategy: direct
deps: [pthm-em-electric-dipole-expansion, def-em-electric-moments, pthm-em-coulomb-solution, def-newtonian-potential, def-em-electrostatic-regime, def-em-si-conventions, def-em-fields, def-em-lab-geometry, thm-em-spherical-multipole-basis, lem-em-spherical-harmonic-basis-and-addition, lem-em-ball-poisson-series-boundary-convergence, lem-em-convergent-legendre-kernel, lem-em-coulomb-dipole-remainder, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-taylor-polynomial-and-remainder, lem-taylor-polynomial-derivatives, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-real-power-continuity-and-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-countable-choice, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-l-one-of-a-measure, def-metric-ball, def-euclidean-inner-product, def-measure-null-set-and-almost-everywhere, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-integral-triangle-inequality, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-the-lebesgue-integral-respects-almost-everywhere-equality, post-em-vacuum-maxwell, def-laplacian-of-a-c2-function, thm-the-curl-of-a-gradient-vanishes]
dependency_roles:
  pthm-em-electric-dipole-expansion: physical-result
  def-em-electric-moments: formulation-prerequisite
  pthm-em-coulomb-solution: physical-result
  def-newtonian-potential: mathematical-premise
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  thm-em-spherical-multipole-basis: mathematical-premise
  lem-em-spherical-harmonic-basis-and-addition: mathematical-premise
  lem-em-ball-poisson-series-boundary-convergence: mathematical-premise
  lem-em-convergent-legendre-kernel: mathematical-premise
  lem-em-coulomb-dipole-remainder: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-taylor-polynomial-and-remainder: mathematical-premise
  lem-taylor-polynomial-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-countable-choice: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-l-one-of-a-measure: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
  post-em-vacuum-maxwell: physical-assumption
  def-laplacian-of-a-c2-function: mathematical-premise
  thm-the-curl-of-a-gradient-vanishes: mathematical-premise
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 3.4.1 printed pp. 148-149 (the general multipole expansion V = (1/4 pi epsilon_0) sum over n of (1/r^{n+1}) integral (r')^n P_n(cos theta') rho d tau', Eqs. (3.95)-(3.96): monopole, dipole, quadrupole, octopole hierarchy). Read in the stamped scanned full text, OCR cross-checked."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 2.2.3 printed pp. 20-22 (the multipole expansion in spherical harmonics; the traceless quadrupole Q_ij and its potential term Delta phi = r_i r_j Q_ij / (2 . 4 pi epsilon_0 r^5)). Read in the stamped full text."
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 41 printed pp. 98-100 (the quadrupole potential in terms of D_ab, Eqs. (41.3)-(41.8), and the general 2^l-pole expansion in spherical harmonics, Eqs. (41.9)-(41.13); Gaussian units re-expressed in SI). Read in the stamped full text."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), inherited from the cited Lebesgue, spherical-harmonic and Newtonian interfaces ([[def-countable-choice]]). Let $a>0$ and let $\rho\in L^1(\mathbb R^3)$ be real and vanish $\lambda_3$-a.e. outside $\overline B_a(0)$ ([[def-metric-ball]], [[def-measure-null-set-and-almost-everywhere]]); let $Q$, $p$ and $Q_{ij}$ be the total charge, dipole moment and traceless quadrupole of $\rho$ about the chart origin ([[def-em-electric-moments]] (a)); let $\varphi:=\varepsilon_0^{-1}N\rho$ be the potential of [[pthm-em-coulomb-solution]] (c) with the constants of [[def-em-si-conventions]] ([[def-newtonian-potential]]); and let $\{Y_{lm}:l\ge0,\ m=1,\dots,2l+1\}$ be a real orthonormal basis of spherical harmonics of $L^2(S^2,d\sigma)$ of degree $l$, with $d\sigma$ the surface measure of total mass $4\pi$ and the addition theorem of [[lem-em-spherical-harmonic-basis-and-addition]] ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[def-euclidean-inner-product]]). For every $l,m$ define the **spherical multipole moment of degree $l$**

$$q_{lm}:=\int_{\mathbb R^3}|y|^l\,Y_{lm}(y/|y|)\,\rho(y)\,d\lambda_3(y),$$

absolutely convergent because $|Y_{lm}|\le((2l+1)/(4\pi))^{1/2}$ on $S^2$ by the addition theorem and $|y|\le a$ $\lambda_3$-a.e. on the support, so the integrand is dominated by $a^l((2l+1)/(4\pi))^{1/2}|\rho|$ ([[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]). In every coefficient integral the factor $|y|^lY_{lm}(y/|y|)$ is defined at $y=0$ by its homogeneous polynomial extension: zero for $l\ge1$ and the constant degree-zero harmonic for $l=0$; this is a finite assignment at a null singleton and changes no integral. Write $x=rn$ with $r=|x|$ and $n\in S^2$. Then:

(a) [Exterior spherical multipole expansion] for every $x$ with $r>a$,

$$\varphi(x)=\frac{1}{4\pi\varepsilon_0}\sum_{l=0}^{\infty}\sum_{m=1}^{2l+1}\frac{4\pi}{2l+1}\,\frac{Y_{lm}(n)}{r^{l+1}}\,q_{lm},$$

the series converging absolutely and uniformly on $\{|x|\ge r_0\}$ for every $r_0>a$, with the tail after degree $N$ bounded by

$$\Bigl\|\,\varphi-\frac{1}{4\pi\varepsilon_0}\sum_{l=0}^{N}\sum_{m=1}^{2l+1}\frac{4\pi}{2l+1}\frac{Y_{lm}(n)}{r^{l+1}}q_{lm}\Bigr\|_{\infty,\{|x|\ge r_0\}}\le\frac{\|\rho\|_1\,a^{N+1}}{4\pi\varepsilon_0\,r_0^{N+2}\,(1-a/r_0)};$$

(b) [Monopole, dipole and quadrupole terms] the degree-$0$ and degree-$1$ terms of (a) are the monopole and dipole terms $Q/(4\pi\varepsilon_0r)$ and $p\cdot x/(4\pi\varepsilon_0r^3)$, and for $r\ge2a$ the difference between $\varphi$ and the truncation after degree $1$ obeys the remainder bound of [[pthm-em-electric-dipole-expansion]]; the degree-$2$ term equals the traceless-quadrupole term

$$\frac{1}{8\pi\varepsilon_0r^3}\,n_iQ_{ij}n_j;$$

(c) [Regularity and termwise differentiation] $\varphi$ is of class $C^\infty$ on $\{|x|>a\}$, the series in (a) may be differentiated termwise to every order, the differentiated series converging uniformly on every compact subset of $\{|x|>a\}$; in particular the field $E:=-\nabla\varphi$ of [[def-em-fields]] equals $-\frac{1}{4\pi\varepsilon_0}\sum_{l,m}\frac{4\pi}{2l+1}\nabla_x\bigl(Y_{lm}(n)r^{-l-1}\bigr)q_{lm}$ on $\{|x|>a\}$, with the same uniform convergence on compact subsets;

(d) [Scope of exterior clauses (a)-(c)] those clauses concern a real compactly supported $L^1$ density and the exterior region $r>a$; they make no claim on or inside $\overline B_a(0)$, no convergence at $r=a$ is asserted, the exterior-density expansion is not asserted for point or singular sources, and no empirical content is involved. The expansion is the exterior expansion of the potential of the static source $\rho$ read in the fixed-time dictionary of [[def-em-electrostatic-regime]] (e);

(e) [Separate source-free ball boundary branch] let $R>0$ be a radius and let real $f\in L^2(S^2,d\sigma)$ be prescribed scalar-potential boundary data (unit V) on the sphere $x=Rn$, with $f_{lm}=\int_{S^2}fY_{lm}\,d\sigma$. Independently of the exterior density $\rho$, define on $|x|<R$

$$\varphi_f(rn)=\sum_{l=0}^\infty\sum_{m=1}^{2l+1}(r/R)^lf_{lm}Y_{lm}(n),$$

with the constant degree-zero value at $r=0$. Then this is smooth and harmonic in the ball; its series and every derivative converge uniformly on every smaller closed ball, $\sup_{0\le t<1}\|\varphi_f(Rt\,\cdot)\|_2\le\|f\|_2$, and $\varphi_f(Rt\,\cdot)\to f$ in $L^2$ as $t\uparrow1$; it is the unique harmonic scalar potential in the class with bounded radial $L^2$ norm and that $L^2$ boundary limit. With $E_f=-\nabla\varphi_f$, $B=0$, $\rho=J=0$ and time-independent fields, this gives a full source-free electrostatic Maxwell model inside the ball under [[post-em-vacuum-maxwell]]. For continuous $f$ the same potential is

$$\varphi_f(x)=\int_{S^2}\frac{1-|x|^2/R^2}{4\pi|x/R-n'|^3}f(n')\,d\sigma(n'),$$

and it extends continuously to the closed ball with value $f(n)$ at $Rn$; the angular Poisson kernel is positive of mass one. No boundary value or boundary electric-field trace for the exterior arbitrary-$L^1$ density is inferred, and no derivative boundary regularity for arbitrary $f$ is asserted.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$; let $a>0$, let $\rho\in L^1(\mathbb R^3)$ be real and vanish $\lambda_3$-a.e. outside $\overline B_a(0)$, let $Q$, $p$, $Q_{ij}$ be its source moments about the chart origin, let $\varphi=\varepsilon_0^{-1}N\rho$ be the potential of the Coulomb solution with the n=3 kernel, and let $\{Y_{lm}\}$ be a real orthonormal basis of spherical harmonics of degree $l$ for the surface measure $d\sigma$ of total mass $4\pi$, with addition theorem as in [[lem-em-spherical-harmonic-basis-and-addition]].

[F1] For $\rho\in L^1(\mathbb R^3)$ vanishing $\lambda_3$-a.e. outside $\overline B_a(0)$, the moments $Q=\int\rho\,d\lambda_3$, $p=\int y\,\rho(y)\,d\lambda_3(y)$ and $Q_{ij}=\int(3y_iy_j-|y|^2\delta_{ij})\rho\,d\lambda_3$ are absolutely convergent and $\sum_iQ_{ii}=0$ ([[def-em-electric-moments]]).

[F2] Let $Nf$ be the Newtonian potential of a measurable compactly supported $f$, defined by $Nf(x)=\int\Phi(x-y)f(y)\,dy$ at each $x$ where the integral is absolutely finite; its value at the pole may be assigned arbitrarily ([[def-newtonian-potential]]).

[F3] In dimension three the fundamental solution is $\Phi(z)=1/(4\pi|z|)$ away from the pole; for compactly supported real $L^1$ data $\rho$ the potential $N\rho$ is finite $\lambda_3$-a.e., locally integrable, $C^\infty$ and harmonic off the support, and $-\Delta T_{\varepsilon_0^{-1}N\rho}=T_{\rho/\varepsilon_0}$ in $\mathcal D'(\mathbb R^3)$ ([[pthm-em-coulomb-solution]]).

[F4] The framework's constants satisfy $\varepsilon_0=(\mu_0c^2)^{-1}>0$ with $\mu_0>0$ and $c>0$ ([[def-em-si-conventions]]).

[F5] In the static regime the smooth Maxwell equations reduce to the spatial pair and the fixed-time dictionary identifies spatial and four-dimensional weak readings ([[def-em-electrostatic-regime]]).

[F6] At fixed time an electric field is the map $E(\cdot,t):\Omega\to\mathbb R^3$, read in the frame basis; the field $E:=-\nabla\varphi$ of a smooth potential is of this type ([[def-em-fields]]).

[F7] Let $a>0$ and let $\rho\in L^1(\mathbb R^3;\mathbb R)$ vanish outside $\overline B_a(0)$; with the orthonormal spherical-harmonic basis and addition theorem of [[lem-em-spherical-harmonic-basis-and-addition]], for every $x=rn$ with $r>a$ the exterior multipole expansion of the integral $\int\rho(y)|x-y|^{-1}dy$ holds with coefficients $\int|y|^lY_{lm}(y/|y|)\rho\,dy$, converges absolutely and uniformly on $\{|x|\ge r_0\}$ for $r_0>a$ with tail after degree $N$ bounded by $\|\rho\|_1a^{N+1}/(r_0^{N+2}(1-a/r_0))$, has degree-zero and degree-one terms equal to the Coulomb and dipole terms with the remainder bound of [[lem-em-coulomb-dipole-remainder]], may be differentiated termwise to every order with uniform convergence on compact sets with $\inf_K|x|>a$, and its degree-$l$ coefficient function is the $L^2(S^2,d\sigma)$ angular projection of the potential on the sphere $r_\ast>a$ ([[thm-em-spherical-multipole-basis]]).

[F8] The union over $l$ of the spaces of degree-$l$ spherical harmonics admits a complete orthonormal basis of $L^2(S^2,d\sigma)$; for any real orthonormal degree-$l$ basis the addition theorem $\sum_{m=1}^{2l+1}Y_{lm}(n)Y_{lm}(n')=\frac{2l+1}{4\pi}P_l(n\cdot n')$ holds ([[lem-em-spherical-harmonic-basis-and-addition]]).

[F9] For $z\in[-1,1]$ the polynomials $P_l(z)=\pi^{-1}\int_0^\pi[z+i\sqrt{1-z^2}\cos\theta]^l\,d\theta$ satisfy $|P_l(z)|\le1$, $P_l(1)=1$, and $(1-2qz+q^2)^{-1/2}=\sum_{l\ge0}q^lP_l(z)$ for $|q|<1$ ([[lem-em-convergent-legendre-kernel]]).

[F10] Taylor coefficients of a real function at a point are unique: if a function has a Taylor polynomial of order $k$ with remainder, the coefficient of $q^k$ is fixed by the derivatives at the base point ([[def-taylor-polynomial-and-remainder]], [[lem-taylor-polynomial-derivatives]]).

[F11] For $f\in L^2(S^2,d\sigma)$ the ball series $u(rn)=\sum_{l,m}r^lf_{lm}Y_{lm}(n)$ and all its derivatives converge uniformly on every closed smaller ball, $u$ is harmonic there, $u(r\,\cdot)\to f$ in $L^2$ as $r\uparrow1$, $u$ is the unique harmonic function on the unit ball with finite $\sup_{r<1}\|u(r\,\cdot)\|_2$ and that boundary limit, and for continuous $f$ it equals the Poisson integral and extends continuously to the boundary ([[lem-em-ball-poisson-series-boundary-convergence]]).

[F12] If $f\in L^1$ and $\alpha\in\mathbb R$, then $\int\alpha f=\alpha\int f$; if $f$ and $g$ agree a.e. their integrals agree; $|\int f|\le\int|f|$ and nonnegative domination gives monotonicity of the integral ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]], [[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F13] $\overline B_a(0)=\{y:|y|\le a\}$, and for $x=rn$ the unit vector is $n=x/|x|$ with $|x|=r$ in the Euclidean structure ([[def-metric-ball]], [[def-euclidean-inner-product]]).

[F14] For $\varphi$ of class $C^2$, $-\Delta\varphi=\operatorname{div}(-\nabla\varphi)$ and $\operatorname{curl}\nabla\varphi=0$; the smooth vacuum Maxwell equations are $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{div}B=0$, $\operatorname{curl}E=-\partial_tB$, $\operatorname{curl}B=\mu_0J+c^{-2}\partial_tE$ for jointly $C^1$ fields with the additional derivatives required by each equation ([[def-laplacian-of-a-c2-function]], [[thm-the-curl-of-a-gradient-vanishes]], [[post-em-vacuum-maxwell]]).

## Proof

**Proof technique:** direct.

1.1 Establish the absolute convergence of the coefficients and the null-singleton convention. On $S^2$ the diagonal addition theorem gives $\sum_{m=1}^{2l+1}Y_{lm}(n)^2=(2l+1)/(4\pi)$ [F8], so $|Y_{lm}(n)|\le((2l+1)/(4\pi))^{1/2}$ for every $n$; for $\lambda_3$-a.e. $y$ with $\rho(y)\ne0$ one has $y\in\overline B_a(0)$ and $|y|\le a$ [F13], so the integrand of $q_{lm}$ is dominated $\lambda_3$-a.e. by $a^l((2l+1)/(4\pi))^{1/2}|\rho|\in L^1$, and $q_{lm}$ is absolutely convergent by [F12]; the definition at $y=0$ affects a null singleton only and changes no integral by [F12]. [F8, F12, F13, given]

2.1 Prove the exterior expansion and its tail bound (a). By [F3] and [F2] the potential satisfies $\varphi(x)=\varepsilon_0^{-1}N\rho(x)=(4\pi\varepsilon_0)^{-1}\int_{\mathbb R^3}\rho(y)|x-y|^{-1}\,d\lambda_3(y)$ for $r>a$, and [F7] gives $\int\rho(y)|x-y|^{-1}dy=\sum_{l,m}\frac{4\pi}{2l+1}\frac{Y_{lm}(n)}{r^{l+1}}\int|y|^lY_{lm}(y/|y|)\rho\,dy$ with absolute and uniform convergence on $\{|x|\ge r_0\}$ for every $r_0>a$ and the stated tail bound; multiplying the identity and its tail bound by the finite positive constant $(4\pi\varepsilon_0)^{-1}$ [F4] and using scaling [F12] gives (a), with the coefficients exactly the $q_{lm}$ of step 1.1. [step 1.1, F2, F3, F4, F7, F12]

3.1 Identify the degree-zero and degree-one terms and the exterior remainder, proving the first part of (b). By [F7] the degree-zero and degree-one terms of the parenthesised series are the Coulomb and dipole terms with the explicit remainder bound of [[lem-em-coulomb-dipole-remainder]], namely $Q/r+p\cdot x/r^3$ with $|R_0(x)|\le16a^2\|\rho\|_1/r^3$ for $r\ge2a$; scaling by $(4\pi\varepsilon_0)^{-1}$ as in step 2.1 turns the degree-zero term into $Q/(4\pi\varepsilon_0r)$, the degree-one term into $p\cdot x/(4\pi\varepsilon_0r^3)$, and the remainder bound into the bound of [[pthm-em-electric-dipole-expansion]] (a), which is therefore reproduced. [step 2.1, F1, F7]

4.1 Identify the degree-two term with the traceless quadrupole, completing (b). Apply the addition theorem [F8] at $l=2$: $\sum_{m=1}^{5}Y_{2m}(n)Y_{2m}(y/|y|)=\frac{5}{4\pi}P_2(n\cdot y/|y|)$, so by finite linearity [F12] $\sum_{m=1}^5Y_{2m}(n)q_{2m}=\frac{5}{4\pi}\int|y|^2P_2(n\cdot y/|y|)\rho(y)\,d\lambda_3(y)$. By [F9] the generating identity $(1-2qz+q^2)^{-1/2}=\sum_lq^lP_l(z)$ holds, and by [F10] the coefficient of $q^2$ is both $P_2(z)$ and, by the chain rule applied to the power function, $\frac12\frac{d^2}{dq^2}(1-2qz+q^2)^{-1/2}\big|_{q=0}=\frac{3z^2-1}{2}$; hence $P_2(z)=(3z^2-1)/2$ and $|y|^2P_2(n\cdot y/|y|)=(3(n\cdot y)^2-|y|^2)/2$ wherever $y\ne0$. Therefore $\sum_mY_{2m}(n)q_{2m}=\frac{5}{8\pi}\int(3(n\cdot y)^2-|y|^2)\rho\,d\lambda_3=\frac{5}{8\pi}n_iQ_{ij}n_j$ by [F1] and [F12], and the degree-two term of (a) is $\frac{1}{4\pi\varepsilon_0}\cdot\frac{4\pi}{5}\cdot\frac{1}{r^3}\cdot\frac{5}{8\pi}n_iQ_{ij}n_j=\frac{n_iQ_{ij}n_j}{8\pi\varepsilon_0r^3}$. [step 3.1, F1, F8, F9, F10, F12]

5.1 Prove the regularity and termwise differentiation (c). By [F7] the series may be differentiated termwise to every order with uniform convergence on every compact $K$ with $\inf_K|x|>a$, and the potential is $C^\infty$ on $\{|x|>a\}$; scaling by the constant $(4\pi\varepsilon_0)^{-1}$ preserves termwise differentiation and uniform convergence [F4, F12]. The field $E:=-\nabla\varphi$ of [F6] is therefore the termwise gradient $-\frac{1}{4\pi\varepsilon_0}\sum_{l,m}\frac{4\pi}{2l+1}\nabla_x(Y_{lm}(n)r^{-l-1})q_{lm}$ on $\{|x|>a\}$, with the same uniform convergence on compact subsets. [step 4.1, F4, F6, F7, F12]

6.1 Record the scope of the exterior clauses (d). Steps 2.1, 3.1, 4.1 and 5.1 used only the real $L^1$ density vanishing $\lambda_3$-a.e. off $\overline B_a(0)$, the region $r>a$ (with the quantitative bounds on $r\ge r_0>a$ and $r\ge2a$), and the framework constants [F4]; no claim on or inside $\overline B_a(0)$, no convergence at $r=a$ and no point-source or empirical assertion was made, and the potential is the fixed-time reading of the static source through [F5]. [step 5.1, F4, F5]

7.1 Prove the ball boundary branch (e). Write $g(u):=\sum_{l,m}u^lf_{lm}Y_{lm}(n)$ for $u\in[0,1)$ as in [F11] with $u=r/R$ and $n=x/|x|$; then $\varphi_f(rn)=g(r/R)$ is smooth and harmonic on $|x|<R$, its series and every derivative converge uniformly on every smaller closed ball because the substitution $x=Rz$ multiplies a derivative of order $\alpha$ by the finite factor $R^{-|\alpha|}$, and the bounds $\sup_{0\le t<1}\|\varphi_f(Rt\,\cdot)\|_2=\sup_{t<1}\|g(t\,\cdot)\|_2\le\|f\|_2$ and $\varphi_f(Rt\,\cdot)\to f$ in $L^2(S^2)$ as $t\uparrow1$ are exactly [F11] in the unit variable; the uniqueness statement carries over because any competitor $v$ on $|x|<R$ gives the competitor $u(z):=v(Rz)$ on the unit ball with the same finite radial $L^2$ bound and boundary limit, so [F11] forces $u=g$ and hence $v=\varphi_f$. For continuous $f$ the Poisson integral of [F11] with $r=|x|/R$ is the displayed formula, and the kernel is positive of mass one. Finally, define $E_f:=-\nabla\varphi_f$, $B:=0$, $\rho:=J:=0$ and time-independent fields on the open ball; then $\varphi_f$ is $C^\infty$, so $E_f$ is a $C^1$ field and $B,\rho,J$ are continuous, and [F14] gives $\operatorname{div}E_f=-\Delta\varphi_f=0$ and $\operatorname{curl}E_f=-\operatorname{curl}\nabla\varphi_f=0$, while $\operatorname{div}B=0$ and $\operatorname{curl}B=0$; all four adopted smooth vacuum Maxwell equations of [[post-em-vacuum-maxwell]] hold pointwise with vanishing sources and time derivatives, so this is a full source-free electrostatic Maxwell model inside the ball. No boundary trace for the exterior density and no derivative boundary regularity for arbitrary $f$ is used or claimed. [step 6.1, F4, F11, F14]

8.1 Assemble the theorem and close. Step 2.1 gives (a), steps 3.1 and 4.1 give (b), step 5.1 gives (c), step 6.1 records the scope (d), and step 7.1 gives the independent ball boundary branch (e) with its source-free Maxwell completion; the only nonconstructive assumptions are the declared Countable Choice inherited from the Lebesgue, spherical-harmonic and ball-series interfaces, and no exterior trace, singular-source expansion or empirical content is asserted. [step 7.1] ∎
