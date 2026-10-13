---
id: ex-em-two-charge-dipole
kind: example
domain: physics
dependency_level: 18
title: "Exact two-charge dipole potential, its moments and the explicit far-field remainder"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The exact potential of two ideal stationary point charges of opposite sign, its distributional equations, its source moments ($Q=0$, $p=qd$, vanishing traceless quadrupole) and an explicit far-field remainder bound of order $a^2/r^3$ about the ideal-dipole potential. The source is singular; no self-energy, self-force, dynamics, bound-state, stability or empirical claim is made."
proof_strategy: direct
deps: [pthm-em-electric-dipole-expansion, def-em-electric-moments, pthm-em-moment-origin-change, pthm-em-coulomb-solution, def-em-electrostatic-regime, def-em-lab-geometry, def-em-si-conventions, def-em-fields, def-countable-choice, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-l-one-of-a-measure, def-metric-ball, def-euclidean-inner-product, def-measure-null-set-and-almost-everywhere, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-integral-triangle-inequality, thm-monotonicity-of-the-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-newton-leibniz-with-interior-derivative, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-real-power-continuity-and-derivatives, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-ck-euclidean-maps-and-diffeomorphisms, def-distribution, def-distributional-derivative, def-regular-distribution-from-a-locally-integrable-function, thm-locally-integrable-functions-embed-in-distributions, def-test-function-space-d-of-an-open-set, def-dirac-delta-and-its-derivatives, thm-distributional-differentiation-is-continuous-and-commutes, thm-cauchy-schwarz-and-the-euclidean-norm, def-finite-sum, lem-finite-sum-laws, lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound, thm-dominated-convergence]
dependency_roles:
  lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  pthm-em-electric-dipole-expansion: physical-result
  def-em-electric-moments: formulation-prerequisite
  pthm-em-moment-origin-change: physical-result
  pthm-em-coulomb-solution: physical-result
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-l-one-of-a-measure: mathematical-premise
  def-metric-ball: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-the-lebesgue-integral-respects-almost-everywhere-equality: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-distribution: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-dirac-delta-and-its-derivatives: mathematical-premise
  thm-distributional-differentiation-is-continuous-and-commutes: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-finite-sum: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 3.4.1 printed pp. 146-147 (Example 3.10: the exact potential of two opposite charges and its approximation by the dipole potential) and Section 3.4.2 printed pp. 149-151 (p = qd for the physical dipole and the remark that the dipole potential is only the approximate potential, higher multipole contributions being present). Read in the stamped scanned full text, OCR cross-checked."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 2.2.2 printed pp. 19-20 (the physical dipole, its exact potential and its moment p = Qd) and Section 2.2.3 printed pp. 20-22 (the far-field multipole series for a general localised distribution). Read in the stamped full text."
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 40 printed pp. 95-97 (dipole moment d = sum e_a r_a (40.3), and for a neutral system the potential phi = d . R / R^3 (40.7) and the field (40.8)-(40.11); Gaussian units re-expressed in SI). Read in the stamped full text."
verification:
  precheck: pass
---

## Example

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), inherited from the cited distribution and Lebesgue interfaces ([[def-countable-choice]]). Let $q\in\mathbb R$ and $d\in\mathbb R^3\setminus\{0\}$, put $a:=|d|/2$, and let the source be the two stationary point charges $+q$ at $d/2$ and $-q$ at $-d/2$ (charge parameters in coulombs and the constant $\varepsilon_0$ of [[def-em-si-conventions]]), with fixed-time reading $q\delta_{d/2}-q\delta_{-d/2}$ ([[def-em-electrostatic-regime]] (e), [[def-dirac-delta-and-its-derivatives]]). Define, with arbitrary values at the two points,

$$\varphi(x):=\frac{q}{4\pi\varepsilon_0|x-d/2|}-\frac{q}{4\pi\varepsilon_0|x+d/2|}\qquad\bigl(x\notin\{d/2,-d/2\}\bigr).$$

Then:

(a) [Exact potential and equations] $\varphi$ is locally integrable on $\mathbb R^3$ and of class $C^\infty$ on $\mathbb R^3\setminus\{d/2,-d/2\}$; with $E:=-\nabla\varphi$ on that set ([[def-em-fields]]), the pair $(E,0)$ satisfies the distributional pure electrostatic equations

$$\operatorname{div}E=\frac{q\,\delta_{d/2}-q\,\delta_{-d/2}}{\varepsilon_0},\qquad \operatorname{curl}E=0\qquad\text{in }\mathcal D'(\mathbb R^3)$$

of the fixed-time dictionary of [[def-em-electrostatic-regime]] (e) ([[pthm-em-coulomb-solution]] (d) for each point charge, added by linearity of distributional differentiation: [[def-distribution]], [[def-distributional-derivative]], [[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]], [[def-test-function-space-d-of-an-open-set]], [[thm-distributional-differentiation-is-continuous-and-commutes]]);

(b) [Moments] in the finite-sum branch of [[def-em-electric-moments]] (c) about the chart origin of [[def-em-lab-geometry]], $Q=0$, $p=qd$, every even Cartesian moment vanishes, $M_{i_1\dots i_{2k+1}}=2q\,(d/2)_{i_1}\cdots(d/2)_{i_{2k+1}}$ for every $k\ge0$, and the traceless quadrupole vanishes, $Q_{ij}=0$;

(c) [Exact far-field comparison] for every $x$ with $r:=|x|\ge2a=|d|$, the exact difference obeys the expansion form of [[pthm-em-electric-dipole-expansion]] with the point-pair total variation in place of $\|\rho\|_1$:

$$\varphi(x)=\frac{p\cdot x}{4\pi\varepsilon_0r^3}+R(x),\qquad |R(x)|\le\frac{16\,a^2\,(|q|+|q|)}{4\pi\varepsilon_0r^3}=\frac{8|q|a^2}{\pi\varepsilon_0r^3};$$

(d) [Comparison with the compact-density theorem] the hypothesis of [[pthm-em-electric-dipole-expansion]] is an $L^1$ density; for $q\ne0$ the point pair has no such density, while for $q=0$ its source is the zero density. In either case the proof below computes the two kernels directly; the identity and bound of (c) are proved directly for the two kernels by the twice-fundamental-theorem computation used in that theorem's remainder, and the leading term, the $a^2$ decay and the appearance of the total variation agree with the compact-density expansion;

(e) [Scope] the potential and the distributional equations are stated for the idealised singular source; no self-energy, self-force, dynamics, bound-state, stability or empirical claim is made for the pair. The quadrupole in (b) is computed about the specified symmetric origin; at a general reference point $b$ its value is $-3(b_ip_j+b_jp_i)+2(b\cdot p)\delta_{ij}$, since $Q=0$ and $Q_{ij}=0$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$; let $q\in\mathbb R$, $d\in\mathbb R^3\setminus\{0\}$, $a=|d|/2$, and let $+q$ at $d/2$ and $-q$ at $-d/2$ be the two stationary point charges with fixed-time reading $q\delta_{d/2}-q\delta_{-d/2}$; let $\varphi$ be the displayed function with arbitrary values at the two points.

[F1] For a point charge $q\in\mathbb R$ at $x_0$ with $\varphi_q(x)=\frac{q}{4\pi\varepsilon_0|x-x_0|}$ and $E_q(x)=\frac{q(x-x_0)}{4\pi\varepsilon_0|x-x_0|^3}$ off $x_0$, the potential is locally integrable, the field is locally integrable and $C^\infty$ off $x_0$ with $E_q=-\nabla\varphi_q$, and $-\Delta T_{\varphi_q}=\frac{q}{\varepsilon_0}\delta_{x_0}$, $\operatorname{div}E_q=\frac{q}{\varepsilon_0}\delta_{x_0}$ and $\operatorname{curl}E_q=0$ in $\mathcal D'(\mathbb R^3)$ ([[pthm-em-coulomb-solution]]).

[F2] For a finite system of stationary point charges the moments are finite sums $Q=\sum_kq_k$, $p=\sum_kq_kx_k$, $M_{i_1\dots i_l}=\sum_kq_kx_{k,i_1}\cdots x_{k,i_l}$, $Q_{ij}=\sum_kq_k(3x_{k,i}x_{k,j}-|x_k|^2\delta_{ij})$, hence $Q_{ij}=3M_{ij}-\delta_{ij}\sum_kq_k|x_k|^2$, computed without Choice ([[def-em-electric-moments]]).

[F3] A stationary point charge at $x_0$ with charge parameter $q$ is the point source of the weak-source definition with constant trajectory $z\equiv x_0$, whose fixed-time reading is the spatial point source $q\delta_{x_0}$ ([[def-em-electrostatic-regime]]).

[F4] Distributional differentiation is linear: the distributional derivative of a finite sum of regular distributions is the sum of the derivatives ([[thm-distributional-differentiation-is-continuous-and-commutes]], [[def-distributional-derivative]]).

[F5] $\delta_{x_0}(\psi)=\psi(x_0)$, and the point-source pairings are those of the Dirac distribution ([[def-dirac-delta-and-its-derivatives]]).

[F6] If $Q=0$, then the traceless quadrupole about a reference point $b$ is $Q^{(b)}_{ij}=Q_{ij}-3(b_ip_j+b_jp_i)+2(b\cdot p)\delta_{ij}$ ([[pthm-em-moment-origin-change]]).

[F7] If $h$ is $C^1$ on $[0,1]$, then $h(1)-h(0)=\int_0^1h'(t)\,dt$ ([[thm-newton-leibniz-with-interior-derivative]]).

[F8] The chain rule and the algebra of derivatives apply to the composed maps $s\mapsto|x-sy|^{-1}$ off the poles; the power map $r\mapsto r^{-1}$ is $C^\infty$ on $(0,\infty)$ with derivative $-r^{-2}$, and $\int_0^1(1-t)\,dt=\frac12$ ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-real-power-continuity-and-derivatives]]).

[F9] If $N$ is a norm on a real vector space $V$, then $|N(u)-N(w)|\le N(u-w)$ for all $u,w\in V$; and $\overline B_a(0)=\{y:|y|\le a\}$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[def-metric-ball]]).

[F10] The maps involved are computed with the smooth Euclidean calculus of component maps ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F11] $|\int f\,d\lambda_3|\le\int|f|\,d\lambda_3$, and for measurable $0\le u\le w$ one has $\int u\,d\lambda_3\le\int w\,d\lambda_3$; a finite continuous Riemann integral is bounded by the sup of its integrand times the length of the interval ([[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-monotonicity-of-the-integral]]).

[F12] If two locally integrable functions agree a.e., their regular distributions agree, since every compactly supported test gives integrable products with the same a.e. class ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[F13] $|\langle u,w\rangle|\le|u|\,|w|$ for the Euclidean structure, and the vector norm is $|w|=\bigl(\sum_i(w^i)^2\bigr)^{1/2}$ in the frame basis ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F14] Finite sums are distributive and may be reindexed ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[F15] The laboratory chart, its origin and the constant $\varepsilon_0>0$ are those of the framework ([[def-em-lab-geometry]], [[def-em-si-conventions]]).

[F17] Under Countable Choice there are smooth bumps $b_{z,h}$ with $0\le b_{z,h}\le1$, equal to one on $\overline B_h(z)$ and supported in $B_{2h}(z)$ ([[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]]).

[F18] If measurable $v_j\to0$ a.e. and $|v_j|\le G$ with $G\in L^1$, then $\int v_j\to0$ ([[thm-dominated-convergence]]).

[F16] The Lebesgue branches carry the declared Countable Choice of the measure interface ([[def-countable-choice]], [[def-l-one-of-a-measure]], [[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

## Verification

**Proof technique:** direct.

1.1 Prove (a). Each summand is the point-charge object of [F1] with $x_0=\pm d/2$ and charge $\pm q$; each is locally integrable and $C^\infty$ off its pole, so the sum $\varphi$ is locally integrable and $C^\infty$ off $\{d/2,-d/2\}$, with $E=-\nabla\varphi=E_{+q}+E_{-q}$ there. The regular distribution of a locally integrable function is unaffected by changing it on the two-point null set [F12], and distributional differentiation is linear [F4], so adding the two identities of [F1] in $\mathcal D'(\mathbb R^3)$ and using [F5] gives $\operatorname{div}E=\bigl(q\delta_{d/2}-q\delta_{-d/2}\bigr)/\varepsilon_0$ and $\operatorname{curl}E=0$; the dictionary identifying this spatial equation with the fixed-time reading of the source is [F3], and $E$ is the field object defined in [[def-em-fields]]. The chart, its origin and the constant $\varepsilon_0$ are those of [F15], and the distributional and Lebesgue readings used here carry the declared Countable Choice and measure interface of [F16]. [F1, F3, F4, F5, F12, F15, F16, given]

2.1 Prove the moment and quadrupole clauses of (b). Insert the two points into the finite sums of [F2]: $Q=q+(-q)=0$ and $p=q(d/2)+(-q)(-d/2)=qd$; for every $l\ge1$, $M_{i_1\dots i_l}=q\prod_{r=1}^l(d/2)_{i_r}+(-q)\prod_{r=1}^l(-d/2)_{i_r}=q\bigl(1-(-1)^l\bigr)\prod_{r=1}^l(d/2)_{i_r}$, which vanishes for even $l$ and equals $2q\prod_{r=1}^l(d/2)_{i_r}$ for odd $l$, in particular $M_{i_1\dots i_{2k+1}}=2q(d/2)_{i_1}\cdots(d/2)_{i_{2k+1}}$ and $M_{ij}=0$. Each point has $|x_k|=\bigl|\pm d/2\bigr|=\tfrac12|d|=a$ by the norm formula of [F13], and $\sum_kq_k|x_k|^2=a^2\bigl(q+(-q)\bigr)=0$, so the second formula of [F2] gives $Q_{ij}=3M_{ij}-\delta_{ij}\sum_kq_k|x_k|^2=0$; the identities used only finite distributivity [F14]. [step 1.1, F2, F13, F14]

3.1 Prove the reference-point clause of (e). With $Q=0$ the transformation of [F6] reads $Q^{(b)}_{ij}=Q_{ij}-3(b_ip_j+b_jp_i)+2(b\cdot p)\delta_{ij}$, and substituting $Q_{ij}=0$ and $p=qd$ from step 2.1 gives $Q^{(b)}_{ij}=-3(b_ip_j+b_jp_i)+2(b\cdot p)\delta_{ij}$, which vanishes at $b=0$. If $q\ne0$, then $p=qd\ne0$; a vanishing shifted quadrupole contracted with $p_j$ gives $-3|p|^2b_i-(b\cdot p)p_i=0$, and its inner product with $p$ gives $-4|p|^2(b\cdot p)=0$, whence $b=0$. If $q=0$ then all moments and the off-pole potential vanish, and the invariance special case $Q=p=0$ holds. [step 2.1, F6, F13, algebra]

4.1 Establish the far-field identity and bound, proving (c). Fix $y\in\{d/2,-d/2\}$ and $x$ with $r=|x|\ge2a$, and put $h_y(s):=|x-sy|^{-1}$ for $s\in[0,1]$. For all such $s$ the reverse triangle inequality gives $|x-sy|\ge r-s|y|\ge r-a\ge r/2>0$ [F9], so $h_y$ is $C^\infty$ on $[0,1]$ with $h_y(0)=1/r$; the chain rule and the derivative of the power map give $h_y'(s)=\frac{(x-sy)\cdot y}{|x-sy|^3}$ and $h_y''(s)=-\frac{|y|^2}{|x-sy|^3}+3\frac{((x-sy)\cdot y)^2}{|x-sy|^5}$, so $|h_y''(s)|\le\frac{4|y|^2}{|x-sy|^3}\le\frac{32|y|^2}{r^3}$ by [F13] [F8, F10]. The function $s\mapsto(1-s)h_y'(s)+h_y(s)$ has derivative $(1-s)h_y''(s)$, so [F7] gives $h_y(1)-h_y(0)-h_y'(0)=\int_0^1(1-t)h_y''(t)\,dt$, whose modulus is at most $\frac{32|y|^2}{r^3}\cdot\frac12=\frac{16|y|^2}{r^3}$ by the Riemann monotonicity in [F11] applied to $-C(1-t)\le(1-t)h_y''(t)\le C(1-t)$ with $C=32|y|^2/r^3$, and $\int_0^1(1-t)dt=1/2$ from [F7] applied to $t-t^2/2$; hence $h_y(1)=\frac1r+\frac{x\cdot y}{r^3}+R_y(x)$ with $|R_y(x)|\le\frac{16|y|^2}{r^3}=\frac{16a^2}{r^3}$. [step 3.1, F7, F8, F9, F10, F11, F13]

5.1 Substitute the two kernels into $\varphi$, completing (c). Since $|y|=a$ for both points and $q+(-q)=0$ for the constant terms and $q(d/2)\cdot x+(-q)(-d/2)\cdot x=q\,d\cdot x=p\cdot x$ for the linear terms, step 4.1 gives $\varphi(x)=\frac{q}{4\pi\varepsilon_0}\bigl(h_{d/2}(1)-h_{-d/2}(1)\bigr)=\frac{p\cdot x}{4\pi\varepsilon_0r^3}+R(x)$ with $R=\frac{q}{4\pi\varepsilon_0}\bigl(R_{d/2}(x)-R_{-d/2}(x)\bigr)$, so $|R(x)|\le\frac{|q|(16a^2+16a^2)}{4\pi\varepsilon_0r^3}=\frac{32|q|a^2}{4\pi\varepsilon_0r^3}=\frac{8|q|a^2}{\pi\varepsilon_0r^3}$. [step 4.1, F13, algebra]

6.1 Draw the comparison (d) and the scope (e). The theorem of [[pthm-em-electric-dipole-expansion]] assumes an $L^1$ density. For $q\ne0$ the pair cannot be represented by even a locally integrable density: take bumps $\psi_j$ of [F17], centred at $d/2$, with radii decreasing to zero and all supports excluding $-d/2$. Their source pairings equal $q$, whereas for any $g\in L^1_{\rm loc}$ the integrals $\int g\psi_j$ tend to zero by dominated convergence [F18], using $|g|$ on one fixed compact ball as majorant and the a.e. limit $\psi_j\to0$. This is a contradiction. For $q=0$ the source and off-pole potential are zero and the zero density satisfies the density hypothesis; the identity and bound just proved for the two kernels are the direct twice-fundamental-theorem computation of step 4.1, and substituting the total variation $2|q|$ into that theorem's remainder bound $16a^2\|\rho\|_1/(4\pi\varepsilon_0r^3)$ would give exactly $\frac{8|q|a^2}{\pi\varepsilon_0r^3}$, in agreement with step 5.1; no self-energy, self-force, dynamics, bound-state, stability or empirical assertion is made for the singular pair, and for $q\ne0$ the quadrupole vanishes exactly at the symmetric origin, while for $q=0$ it vanishes at every reference point, by step 3.1, which is (e). [step 5.1, F1, F6, F17, F18] ∎
