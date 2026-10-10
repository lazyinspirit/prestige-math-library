---
id: pthm-em-electric-dipole-expansion
kind: physics-theorem
domain: physics
dependency_level: 17
title: "Uniform Coulomb dipole expansion of a compactly supported charge density with an explicit remainder"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The exterior potential of a compactly supported $L^1$ charge density in classical electrostatics: for $|x|\\ge2a$ the localised Newtonian potential equals the monopole term plus the dipole term plus an explicit remainder bounded by $16a^2\\|\\rho\\|_1/(4\\pi\\varepsilon_0|x|^3)$, uniformly in the exterior region. Only the potential is expanded; no derivative estimate of the remainder, no field expansion and no value on or inside the support are claimed."
proof_strategy: direct
deps: [pthm-em-coulomb-solution, def-em-electric-moments, def-em-electrostatic-regime, def-em-si-conventions, def-em-fields, lem-em-coulomb-dipole-remainder, def-newtonian-potential, def-l-one-of-a-measure, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-metric-ball, def-euclidean-inner-product, def-measure-null-set-and-almost-everywhere, def-countable-choice, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-integral-triangle-inequality, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-cauchy-schwarz-and-the-euclidean-norm, def-ck-euclidean-maps-and-diffeomorphisms, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]
dependency_roles:
  pthm-em-coulomb-solution: physical-result
  def-em-electric-moments: formulation-prerequisite
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  lem-em-coulomb-dipole-remainder: mathematical-premise
  def-newtonian-potential: mathematical-premise
  def-l-one-of-a-measure: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  def-countable-choice: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 3.4.1 printed pp. 146-149 (Example 3.10 and Eqs. (3.91)-(3.96), the multipole expansion of the potential in powers of 1/r, whose leading two terms give the monopole-dipole splitting; the higher terms die off more rapidly with increasing r). Read in the stamped scanned full text, OCR cross-checked."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 2.2.3 printed pp. 20-22 (the Taylor expansion (2.22) of 1/|r - r'| giving phi = (1/4 pi epsilon_0)(Q/r + p . r-hat / r^2 + ...)). Read in the stamped full text."
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 40 printed pp. 95-97 (dipole moment d (40.3), the potential phi = d . R / R^3 (40.7) and the field (40.8)-(40.11) of a neutral system at large distances; Gaussian units re-expressed in SI). Read in the stamped full text."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), inherited from the cited Lebesgue and Newtonian interfaces ([[def-countable-choice]]). Let $a>0$, let $\rho\in L^1(\mathbb R^3)$ be real and vanish $\lambda_3$-a.e. outside the closed ball $\overline B_a(0)$ ([[def-metric-ball]], [[def-measure-null-set-and-almost-everywhere]]), let $Q$ and $p$ be the total charge and dipole moment of $\rho$ about the chart origin ([[def-em-electric-moments]] (a)), let $\|\rho\|_1:=\int_{\mathbb R^3}|\rho|\,d\lambda_3$, and let $\varphi:=\varepsilon_0^{-1}N\rho$, where $N\rho$ is the Newtonian potential of [[def-newtonian-potential]] and $\varepsilon_0$ is the constant of [[def-em-si-conventions]]. Then:

(a) [Uniform monopole-dipole expansion] for every $x$ with $r:=|x|\ge2a$ the integral $\int_{\mathbb R^3}\rho(y)|x-y|^{-1}\,d\lambda_3(y)$ is absolutely convergent and equals $4\pi N\rho(x)$, and

$$\varphi(x)=\frac{Q}{4\pi\varepsilon_0r}+\frac{p\cdot x}{4\pi\varepsilon_0r^3}+R(x),\qquad |R(x)|\le\frac{16\,a^2\|\rho\|_1}{4\pi\varepsilon_0r^3},$$

the bound being uniform over the whole exterior region $\{x:|x|\ge2a\}$;

(b) [Leading-term form] consequently, for $r\ge2a$,

$$\Bigl|\varphi(x)-\frac{Q}{4\pi\varepsilon_0r}\Bigr|\le\frac{|p|}{4\pi\varepsilon_0r^2}+\frac{16\,a^2\|\rho\|_1}{4\pi\varepsilon_0r^3},$$

and if $Q=0$ and $p\ne0$, then for every unit direction $n\in\mathbb R^3$, $|n|=1$, with $p\cdot n\ne0$ and every $r\ge\max\bigl(2a,\ 32a^2\|\rho\|_1/|p\cdot n|\bigr)$ the dipole term is the leading term in the sense that $\varphi(rn)=\frac{p\cdot n}{4\pi\varepsilon_0r^2}(1+\delta)$ with $|\delta|\le\frac12$, so $|\varphi(rn)|\ge\frac{|p\cdot n|}{8\pi\varepsilon_0r^2}$ and the remainder bound decays one power of $r$ faster than the dipole term;

(c) [Physical reading] by [[pthm-em-coulomb-solution]] (c) the function $\varphi$ is finite $\lambda_3$-a.e., locally integrable, of class $C^\infty$ and harmonic off $\overline B_a(0)$, and satisfies $-\Delta T_\varphi=T_{\rho/\varepsilon_0}$ in $\mathcal D'(\mathbb R^3)$; the displayed expansion is therefore the exterior expansion of the potential of the compactly supported source $\rho$ in the fixed-time reading of [[def-em-electrostatic-regime]] (e), and in the smooth branch ([[pthm-em-coulomb-solution]] (a)) the field $E:=-\nabla\varphi$ of [[def-em-fields]] realises the pure electrostatic regime of [[def-em-electrostatic-regime]] (c) with source $\rho$;

(d) [Scope and exclusions] the hypotheses are a real compactly supported $L^1$ density, the region $r\ge2a$, and the framework's constants; $\rho$ need not be continuous or bounded; the statement concerns $\varphi$ itself, and no derivative estimate for $R$, no expansion of the field $E$, and no assertion on $|x|<2a$ or on the support of $\rho$ is claimed.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$; let $a>0$, let $\rho\in L^1(\mathbb R^3)$ be real and vanish $\lambda_3$-a.e. outside $\overline B_a(0)$, and put $\varphi:=\varepsilon_0^{-1}N\rho$ with $\varepsilon_0>0$ as in [[def-em-si-conventions]].

[F1] For a measurable compactly supported $f$, the Newtonian potential is $Nf(x)=\int_{\mathbb R^n}\Phi(x-y)f(y)\,dy$ at each $x$ where the integral is absolutely finite ([[def-newtonian-potential]]).

[F2] With the positive-minus-Laplacian normalisation in dimension three, the fundamental solution is $\Phi(z)=1/(4\pi|z|)$ away from the pole ([[pthm-em-coulomb-solution]]).

[F3] If $\rho\in L^1(\mathbb R^3)$ is real and compactly supported, then $N\rho$ is finite $\lambda_3$-a.e., belongs to $L^1_{\mathrm{loc}}(\mathbb R^3)$, is $C^\infty$ and harmonic off the support of $\rho$, and $-\Delta T_{\varepsilon_0^{-1}N\rho}=T_{\rho/\varepsilon_0}$ in $\mathcal D'(\mathbb R^3)$; if in addition $\rho$ is $C^1$ with compact support in $\overline B_R$, then $\varphi=\varepsilon_0^{-1}N\rho\in C^2(\mathbb R^3)$ satisfies $-\Delta\varphi=\rho/\varepsilon_0$, $\operatorname{div}E=\rho/\varepsilon_0$ and $\operatorname{curl}E=0$ for $E=-\nabla\varphi$ ([[pthm-em-coulomb-solution]]).

[F4] The framework's electric constant is $\varepsilon_0:=(\mu_0c^2)^{-1}>0$ with $\mu_0>0$ measured and $c>0$; the potential carries the volt ([[def-em-si-conventions]]).

[F5] For $\rho\in L^1(\mathbb R^3)$ vanishing $\lambda_3$-a.e. outside $\overline B_a(0)$, the total charge $Q=\int\rho\,d\lambda_3$ and dipole moment $p=\int y\,\rho(y)\,d\lambda_3(y)$ about the chart origin are absolutely convergent ([[def-em-electric-moments]]).

[F6] If $\rho\in L^1(\mathbb R^3)$ vanishes $\lambda_3$-a.e. outside $\{y:|y|\le a\}$ and $r=|x|\ge2a>0$, then $\int_{\mathbb R^3}\rho(y)|x-y|^{-1}\,dy=Q/r+p\cdot x/r^3+R_0(x)$ with $|R_0(x)|\le16a^2\|\rho\|_1/r^3$ ([[lem-em-coulomb-dipole-remainder]]).

[F7] If $f\in L^1$ and $\alpha\in\mathbb R$, then $\int\alpha f\,d\lambda_3=\alpha\int f\,d\lambda_3$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F8] $|\langle u,w\rangle|\le|u|\,|w|$ for the Euclidean inner product, and $|u+w|\le|u|+|w|$ for the Euclidean norm ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F9] $\overline B_a(0)=\{y:|y|\le a\}$; and if $N$ is a norm on a real vector space $V$, then $|N(u)-N(w)|\le N(u-w)$ for all $u,w\in V$ ([[def-metric-ball]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[F10] If $f,g\in L^1(\lambda_3)$ agree $\lambda_3$-a.e., their Lebesgue integrals agree, and $|\int f|\le\int|f|$ ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]], [[thm-integral-triangle-inequality]]).

[F11] In the static regime with $J=0$ and $B=0$ the smooth Maxwell equations reduce to $\operatorname{div}E=\rho/\varepsilon_0$, $\operatorname{curl}E=0$, and the fixed-time dictionary identifies the spatial equations with the four-dimensional weak reading ([[def-em-electrostatic-regime]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x$ with $r=|x|\ge2a$ and establish the absolute convergence and the Coulomb identification. For $\lambda_3$-a.e. $y$, either $\rho(y)=0$ or $y\in\overline B_a(0)$; in the latter case $|y|\le a$ by [F9], so $|x-y|\ge|x|-|y|\ge r-a\ge r/2>0$ by the reverse triangle inequality for the Euclidean norm [F9] and [F8], and hence $|x-y|^{-1}\le2/r$; the integrand is therefore dominated $\lambda_3$-a.e. by $2|\rho|/r\in L^1$, which gives absolute convergence by [F10]. Since $\rho$ vanishes a.e. off $\overline B_a(0)$ and the kernel $y\mapsto|x-y|^{-1}$ is continuous on that ball, replacing $\rho$ by its a.e.-equal representative that is zero off $\overline B_a(0)$ does not change the integral [F10], and the defining formula of the Newtonian potential $N\rho(x)=\int\Phi(x-y)\rho(y)\,dy$ together with $\Phi(z)=1/(4\pi|z|)$ for $n=3$ gives $\int\rho(y)|x-y|^{-1}\,d\lambda_3(y)=4\pi N\rho(x)$ for every admissible $x$ [F1, F2]. [F1, F2, F8, F9, F10, given]

2.1 Apply the monopole-dipole remainder lemma and scale to obtain (a). By [F6] with the same $a$ and the same a.e.-support hypothesis, $\int\rho(y)|x-y|^{-1}\,d\lambda_3(y)=Q/r+p\cdot x/r^3+R_0(x)$ with $|R_0(x)|\le16a^2\|\rho\|_1/r^3$ for $r\ge2a$, where $Q$ and $p$ are the moments of [F5]; multiplying the identity by the constant $(4\pi\varepsilon_0)^{-1}$, which factors out of the integral by [F7] and is finite and positive by [F4], gives $\varphi(x)=Q/(4\pi\varepsilon_0r)+p\cdot x/(4\pi\varepsilon_0r^3)+R(x)$ with $R:=(4\pi\varepsilon_0)^{-1}R_0$ and the displayed uniform bound. [step 1.1, F4, F5, F6, F7]

3.1 Prove the leading-term estimate (b). By Cauchy-Schwarz and $|x|=r$ [F8], $|p\cdot x|\le|p|r$, so $|p\cdot x|/(4\pi\varepsilon_0r^3)\le|p|/(4\pi\varepsilon_0r^2)$, and the triangle inequality [F10] applied to step 2.1 gives the displayed bound. If $Q=0$ and $p\ne0$, fix $n\in\mathbb R^3$ with $|n|=1$ and $p\cdot n\ne0$ and $r\ge\max(2a,32a^2\|\rho\|_1/|p\cdot n|)$; then the dipole term equals $p\cdot n/(4\pi\varepsilon_0r^2)$ and the remainder obeys $|R|\le16a^2\|\rho\|_1/(4\pi\varepsilon_0r^3)\le\frac12|p\cdot n|/(4\pi\varepsilon_0r^2)$, so writing $\delta:=R/(p\cdot n/(4\pi\varepsilon_0r^2))$ gives $|\delta|\le\frac12$ and $\varphi(rn)=\frac{p\cdot n}{4\pi\varepsilon_0r^2}(1+\delta)$ with $|\varphi(rn)|\ge\frac{|p\cdot n|}{8\pi\varepsilon_0r^2}$. [step 2.1, F8, F10, algebra]

4.1 Read the physical content (c). By [F3], applied to the representative that vanishes off $\overline B_a(0)$, the function $N\rho$ is finite $\lambda_3$-a.e., locally integrable, $C^\infty$ and harmonic off the support of that representative, hence off $\overline B_a(0)$, and $-\Delta T_{\varepsilon_0^{-1}N\rho}=T_{\rho/\varepsilon_0}$ in $\mathcal D'(\mathbb R^3)$; these properties are unchanged by the a.e. choice of representative [F10], and $\varphi=\varepsilon_0^{-1}N\rho$ is related to $\rho$ exactly as in the fixed-time dictionary of [F11]. In the smooth case of [F3], $\varphi$ is $C^2$ on $\mathbb R^3$ with $-\Delta\varphi=\rho/\varepsilon_0$, and $E=-\nabla\varphi$ satisfies $\operatorname{div}E=\rho/\varepsilon_0$ and $\operatorname{curl}E=0$, which is the pure electrostatic regime of [F11] with source $\rho$. [step 3.1, F3, F10, F11]

5.1 Record the scope (d) and complete the proof. The hypotheses used were exactly the real $L^1$ density vanishing $\lambda_3$-a.e. off $\overline B_a(0)$, the exterior region $r\ge2a$ and the framework's constants [F4]; no continuity or boundedness of $\rho$ was assumed, the argument differentiates no remainder and expands no field, and no assertion inside $|x|<2a$ or on the support of $\rho$ was made, so the exclusions of (d) are respected. [step 4.1, F4] ∎
