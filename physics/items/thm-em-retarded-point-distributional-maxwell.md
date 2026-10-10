---
id: thm-em-retarded-point-distributional-maxwell
kind: theorem
title: "The retarded point-history pair solves wave, Lorenz and Maxwell equations distributionally, with locally integrable field representatives off the worldline"
status: draft
origin: pipeline
domain: mathematics
deps: [lem-em-point-retarded-potential-and-fields, lem-em-retarded-wave-kernel, lem-em-point-current-continuity, def-countable-choice, def-distributional-derivative, thm-distributional-differentiation-is-continuous-and-commutes, def-regular-distribution-from-a-locally-integrable-function, thm-locally-integrable-functions-embed-in-distributions, def-euclidean-inner-product, def-cross-product-in-r3, thm-chain-rule-for-total-derivatives, thm-dominated-convergence, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-polar-coordinates-formula-for-lebesgue-measure, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-integral-triangle-inequality, lem-euclidean-balls-have-positive-finite-lebesgue-measure, lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness, thm-borel-products-of-euclidean-spaces-are-euclidean-borel, thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets, thm-newton-leibniz-with-interior-derivative, thm-integration-by-parts, thm-riemann-fubini-on-product-rectangles, lem-test-function-cutoffs-and-euclidean-localization, lem-riemann-lebesgue-comparison-for-distribution-test-integrands, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-the-divergence-of-a-curl-vanishes, thm-the-curl-of-a-gradient-vanishes, cor-the-curl-of-a-curl-of-a-c2-field, thm-mean-value-inequality, def-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
dependency_roles:
  lem-em-point-retarded-potential-and-fields: mathematical-premise
  lem-em-retarded-wave-kernel: mathematical-premise
  lem-em-point-current-continuity: mathematical-premise
  def-countable-choice: mathematical-premise
  def-distributional-derivative: mathematical-premise
  thm-distributional-differentiation-is-continuous-and-commutes: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-locally-integrable-functions-embed-in-distributions: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  thm-integral-triangle-inequality: mathematical-premise
  lem-euclidean-balls-have-positive-finite-lebesgue-measure: mathematical-premise
  lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness: mathematical-premise
  thm-borel-products-of-euclidean-spaces-are-euclidean-borel: mathematical-premise
  thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
  lem-riemann-lebesgue-comparison-for-distribution-test-integrands: mathematical-premise
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  thm-the-divergence-of-a-curl-vanishes: mathematical-premise
  thm-the-curl-of-a-gradient-vanishes: mathematical-premise
  cor-the-curl-of-a-curl-of-a-c2-field: mathematical-premise
  thm-mean-value-inequality: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Electromagnetism, Cambridge lecture notes (236-page author-hosted PDF)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "sections 6.4.1-6.4.3, printed pp. 158-164: the point sources, the Lienard-Wiechert potentials and fields forming the background of this item; sections 6.1.2-6.1.3, printed pp. 140-143: the retarded Green function and the Lorenz condition check for a conserved current"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto lecture-note textbook, 2026 printing, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "chapter 11, printed pp. 330-339: test functions, distributions, differentiation and convolution; section 9.1.2, printed p. 284: the retarded potential"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $c>0$, $\varepsilon_0>0$, $q\in\mathbb R$, $\mu_0=(\varepsilon_0c^2)^{-1}$, and let $z:\mathbb R\to\mathbb R^3$ be $C^3$ with $|z'(s)|\le v_*<c$ for all $s$. These are mathematical parameters. On $Q=\mathbb R^3\times\mathbb R$ let $\rho,J$ and $\Phi,\Upsilon$ be exactly the proper point-current and retarded-history distributions of [[lem-em-point-current-continuity]] and [[lem-em-point-retarded-potential-and-fields]], with the kernel $K$ of [[lem-em-retarded-wave-kernel]] and no independent free addition. Put $W=c^{-2}\partial_t^2-\Delta$. Then:

(a) $W\Phi=\rho/\varepsilon_0$, $W\Upsilon=\mu_0J$ and $\operatorname{div}\Upsilon+c^{-2}\partial_t\Phi=0$ in $\mathcal D'(Q)$.

(b) Define the vector distributions $\mathcal E=-\nabla\Phi-\partial_t\Upsilon$ and $\mathcal B=\operatorname{curl}\Upsilon$ using componentwise [[def-distributional-derivative]] and the finite-coordinate cross and curl conventions. They satisfy

$$\operatorname{div}\mathcal E=\rho/\varepsilon_0,\qquad \operatorname{div}\mathcal B=0,\qquad \operatorname{curl}\mathcal E=-\partial_t\mathcal B,\qquad \operatorname{curl}\mathcal B=\mu_0J+c^{-2}\partial_t\mathcal E.$$

(c) On the complement of $\Gamma=\{(z(s),s):s\in\mathbb R\}$, the distributions $\mathcal E,\mathcal B$ restrict to the exact $C^1$ fields of [[lem-em-point-retarded-potential-and-fields]], with all its higher-regularity branches retained. The zero extensions of those field formulas on $\Gamma$ belong to $L^1_{\mathrm{loc}}(Q)$, and their regular distributions are precisely $\mathcal E,\mathcal B$ ([[def-regular-distribution-from-a-locally-integrable-function]]). The off-worldline $C^1$ fields also satisfy the source-free classical Maxwell equations there, because the point pair restricts to zero and each continuous regular residual is zero. Thus the equations in (b) are equations for locally integrable fields with the exact point source, not merely arbitrary field distributions. No field value on $\Gamma$ is physically assigned; zero extension is a representative convention on a null set. No physical adoption, nonlinear distribution product, finite self-energy, self-force, global acceleration bound, or incoming-field uniqueness theorem is asserted.

## Facts & Assumptions

**Given:** The mathematical parameters $c,\varepsilon_0,q,\mu_0$, the all-time uniformly subluminal $C^3$ trajectory $z$, the distributions $\rho,J,\Phi,\Upsilon$ and the kernel $K$ of the cited items, and a test function $\psi\in\mathcal D(Q)$ in the arguments below.

[F1] On $\Omega=\mathbb R^3\times\mathbb R$, with $C=q/(4\pi\varepsilon_0)$ and $\kappa,r,\beta,D$ as in that item: the retarded-history pairings $\Phi,\Upsilon$ are distributions given by explicit history integrals, satisfy $\langle\Phi,\psi\rangle=\int_{\Omega\setminus\Gamma}C\psi/(\kappa r)dxdt$ and $\langle\Upsilon,\psi\rangle=\int_{\Omega\setminus\Gamma}(\beta/c)C\psi/(\kappa r)dxdt$, are finite for every test, and the potentials $\varphi=C/(\kappa r)$, $A=\beta\varphi/c$ are $C^2$ off the worldline with zero extensions in $L^1_{\mathrm{loc}}$; the classical fields $-\nabla\varphi-\partial_tA$ and $\operatorname{curl}A$ are $C^1$ off the worldline and their higher-regularity branches hold ([[lem-em-point-retarded-potential-and-fields]]).

[F2] For the retarded kernel $K$, $(K\circledast\psi)(y,\tau)=(4\pi)^{-1}\int\psi(y+w,\tau+|w|/c)|w|^{-1}dw$, and $WK=\delta_{(0,0)}$ distributionally, that is, $\langle K,W\chi\rangle=\chi(0,0)$ for every test $\chi$; no smoothness of $K$ on the cone is asserted ([[lem-em-retarded-wave-kernel]]).

[F3] The functionals $\rho,\psi\mapsto q\int_{\mathbb R}\psi(z(s),s)ds$ and $J,\psi\mapsto q\int_{\mathbb R}z'(s)\psi(z(s),s)ds$ are distributions on $\Omega$ with $\partial_t\rho+\operatorname{div}J=0$ ([[lem-em-point-current-continuity]]).

[F4] Distributional derivatives satisfy $\langle\partial^\alpha u,\varphi\rangle=(-1)^{|\alpha|}\langle u,\partial^\alpha\varphi\rangle$, are continuous linear on $\mathcal D'$ for the weak and strong topologies, and satisfy $\partial^\alpha u_f=u_{\partial^\alpha f}$ for $f\in C^k$ with $|\alpha|\le k$ under Countable Choice ([[def-distributional-derivative]], [[thm-distributional-differentiation-is-continuous-and-commutes]]).

[F5] A locally integrable function defines the regular functional $u_f(\varphi)=\int f\varphi$, the map $f\mapsto u_f$ is injective modulo almost-everywhere equality, and the regular functional is linear in $f$ ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]]).

[F6] For smooth fields: $\operatorname{div}\operatorname{curl}Z=0$; $\operatorname{curl}\nabla f=0$; $\operatorname{curl}\operatorname{curl}Z=\nabla\operatorname{div}Z-\Delta Z$ ([[thm-the-divergence-of-a-curl-vanishes]], [[thm-the-curl-of-a-gradient-vanishes]], [[cor-the-curl-of-a-curl-of-a-c2-field]]).

[F7] Dominated convergence: pointwise convergence with one integrable majorant gives convergence of integrals ([[thm-dominated-convergence]]).

[F8] The mean value inequality bounds $\|f(b)-f(a)\|$ by $\sup|f'|\,(b-a)$ for a continuous function differentiable on the open interval; partial derivatives are one-variable derivatives along coordinate lines; the chain rule holds for composed differentiable maps; and $C^k$ is the componentwise regularity class ([[thm-mean-value-inequality]], [[def-directional-and-partial-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F9] Under Countable Choice: the polar formula $\int_{\mathbb R^n}f\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}f(r\omega)r^{n-1}d\sigma dr$ for nonnegative Borel $f$, and change of variables $\int_Vg=\int_Ug(T)|\det DT|$ for a $C^1$ diffeomorphism and nonnegative Borel $g$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]], [[lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness]]).

[F10] Nonnegative integrals are monotone and scale; the integral is linear on $L^1$ and obeys the triangle inequality; a nonnegative measurable function has zero integral exactly when it vanishes almost everywhere; Euclidean balls have positive finite measure ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-integral-triangle-inequality]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F11] Tonelli and Fubini hold on sigma-finite products; Euclidean Borel sets and Lebesgue measure agree with the product Borel structure and product measure ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]]).

[F12] Newton-Leibniz with an interior derivative, one-dimensional integration by parts, rectangle Riemann-Fubini, Riemann-to-Lebesgue comparison for compact test integrands, translations preserve Lebesgue measure, and smooth compact cutoffs exist in ZF ([[thm-newton-leibniz-with-interior-derivative]], [[thm-integration-by-parts]], [[thm-riemann-fubini-on-product-rectangles]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[lem-test-function-cutoffs-and-euclidean-localization]]).

[F13] The Euclidean inner product and the cross product are the cited bilinear operations on $\mathbb R^3$ ([[def-euclidean-inner-product]], [[def-cross-product-in-r3]]).

[A1] The Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\psi\in\mathcal D(Q)$ and put $F:=K\circledast\psi$, so that $F(y,s)=(4\pi)^{-1}\int\psi(y+w,s+|w|/c)|w|^{-1}dw$. Then $F$ is of class $C^1$ on $Q$ and $\partial_{y_i}F=K\circledast(\partial_{x_i}\psi)$, $\partial_sF=K\circledast(\partial_t\psi)$. Indeed, fix a bounded parameter neighbourhood $|y|\le R$, $|s|\le R$ and choose $M$ with $\operatorname{supp}\psi\subseteq\overline B_M(0)\times[-M,M]$; every nonzero contribution then has $w\in B_{M+R}$, on which $|w|^{-1}$ is integrable by the polar formula. For fixed $(y,s)$ the difference quotients $[\psi(y+he_i+w,s+|w|/c)-\psi(y+w,s+|w|/c)]/h$ converge as $h\to0$ to the partial derivative $\partial_{x_i}\psi(y+w,s+|w|/c)$ by definition of the partial derivative, and the mean value inequality bounds them by $\sup|\partial_{x_i}\psi|\,\mathbf 1_{B_{M+R}}|w|^{-1}$, an integrable majorant; dominated convergence gives $\partial_{y_i}F=K\circledast(\partial_{x_i}\psi)$ on the parameter neighbourhood, and the same argument with the $s$-difference quotients and the $t$-partial derivatives gives $\partial_sF=K\circledast(\partial_t\psi)$; the resulting integrals are continuous in $(y,s)$ by the same dominated convergence, so $F$ is $C^1$. [given, F2, F7, F8, F9, F10, F11]

1.2 For every test $\psi$ and every $(y,s)\in Q$, $(K\circledast W\psi)(y,s)=\psi(y,s)$. Indeed, with the translated test $\chi(z,\tau):=\psi(y+z,s+\tau)$ one has $(W\psi)(y+\cdot,s+\cdot)=W\chi$ by the chain rule and the constant coefficients of $W$, so $(K\circledast W\psi)(y,s)=\langle K,W\chi\rangle=\langle WK,\chi\rangle=\langle\delta_{(0,0)},\chi\rangle=\chi(0,0)=\psi(y,s)$, where the second equality is the definition of the distributional operator $W$ applied to $K$ and the third is $WK=\delta_{(0,0)}$. [given, F2, F4, F8]

1.3 Local integrability of the classical fields. On $V:=Q\setminus\Gamma$ the map $g(s,w):=(z(s)+w,s+|w|/c)$ is a $C^1$ diffeomorphism from $U:=\mathbb R\times(\mathbb R^3\setminus\{0\})$ onto $V$ with $|\det Dg(s,w)|=\kappa(s,w)\in[1-v_*/c,\,1+v_*/c]$: the inverse is $(x,t)\mapsto(s(x,t),x-z(s(x,t)))$ by the root of [F1], injectivity follows from $|s-s'|=||w'|-|w||/c\le(v_*/c)|s-s'|$, and the determinant expansion along the last row gives $-1+z'(s)\cdot w/(c|w|)=-\kappa$. For a compact observation window $Q_0\subseteq Q$ contained in $\{|x|\le M,\ t_0\le t\le t_1\}$ put $Z:=|z(0)|$, $S:=\max\{0,(M+Z-ct_0)/(c-v_*)\}$, $L:=1+M+Z+v_*\max\{S,|t_1|\}$ and $T:=\max\{0,t_1+S\}$; then every $(s,w)$ with $g(s,w)\in Q_0$ has $s\in[-S,t_1]$ and $|w|<L$, so by [F9] $\int_{Q_0\setminus\Gamma}r^{-p}\,dx\,dt=\int_U\mathbf 1_{Q_0}(g(s,w))|w|^{-p}\kappa(s,w)\,ds\,dw\le(1+v_*/c)T\int_{B_L}|w|^{-p}dw$, which is finite for $p=1,2$ by the polar formula ($\sigma(S^2)L^2/2$ and $\sigma(S^2)L$ respectively). On the other hand the explicit formulas of [F1] show $|\varphi|+|A|+|\nabla\varphi|+|\nabla A|+|\partial_t\varphi|+|\partial_tA|+|\operatorname{curl}A|\le C_0(r^{-2}+r^{-1})$ on $Q_0$ with $C_0$ depending on $q,\varepsilon_0,c,v_*$ and the supremum of $|\dot\beta|$ over the compact history interval. Hence the zero extensions of $\varphi,A$ and of the classical fields $E_0:=-\nabla\varphi-\partial_tA$, $B_0:=\operatorname{curl}A$, and of the first partial derivatives of $\varphi,A$ are locally integrable on $Q$; no local-integrability claim for derivatives of $E_0,B_0$ is needed or made. The graph $\Gamma$ is closed and Borel and has spatial singleton sections, so [F11] and Tonelli give spacetime measure zero; zero extension therefore does not affect these integrals. [given, F1, F9, F10, F11, F13, A1]

2.1 The history function $s\mapsto F(z(s),s)$ is $C^1$ with compact support contained in a finite interval, and its derivative is $\nabla_yF(z(s),s)\cdot z'(s)+\partial_sF(z(s),s)$. Indeed $F$ is $C^1$ by step 1.1, $z$ is $C^1$, and the chain rule gives the derivative; the support bound $\{s:g(s,w)\in\operatorname{supp}\psi\ \text{for some }w\}\subseteq[-S,t_1]$ of the same cylinder estimate shows compact support, so the total derivative integrates to zero over $\mathbb R$. [step 1.1, given, F8, F12]

2.2 Zero-extension representatives of the first derivatives. Let $f$ be one of the components of $\varphi$ and $A$ on $V$, with zero extension $\widetilde f$, and let $D\in\{\partial_t,\partial_1,\partial_2,\partial_3\}$. Since $\widetilde f$ and $Df$ (zero extended) are locally integrable by step 1.3, both $u_{\widetilde f}$ and $u_{(Df)^{\sim}}$ are distributions. Then $Du_{\widetilde f}=u_{(Df)^{\sim}}$: choose the spatial cutoff $\chi_\varepsilon(x,t):=\chi((x-z(t))/\varepsilon)$ built from a smooth cutoff $\chi$ that is $0$ on $\overline B_1(0)$ and $1$ outside $B_2(0)$; it is $C^3$ and its first derivatives satisfy $|D\chi_\varepsilon|\le C'/\varepsilon$ with support in the shell $\varepsilon\le d\le2\varepsilon$, where $d:=|x-z(t)|$ and $(1-v_*/c)r\le d\le(1+v_*/c)r$; the product $\chi_\varepsilon\widetilde f$ is $C^1$ on $Q$ because it vanishes on a neighbourhood of the singular set. Classical integration by parts in each coordinate over a large box containing $\operatorname{supp}\psi$ (boundary terms vanish, Riemann-Fubini iterates the one-dimensional identities, and the Riemann-Lebesgue comparison converts to Lebesgue integrals) gives $\int_Q\chi_\varepsilon\widetilde f\,D\psi=-\int_Q\chi_\varepsilon(Df)^{\sim}\psi-\int_Q\widetilde f(D\chi_\varepsilon)\psi$, and dominated convergence with the locally integrable bounds of step 1.3 lets $\varepsilon\to0$ in the first two integrals; the third is $O(\varepsilon)$ because $|\widetilde f|\le C_0'/\varepsilon$ on the shell of volume $O(\varepsilon^3)$ in space and $O(1)$ in time. Hence $-\int_Q\widetilde fD\psi=\int_Q(Df)^{\sim}\psi$, that is, $\langle Du_{\widetilde f},\psi\rangle=\langle u_{(Df)^{\sim}},\psi\rangle$ for every test, proving the claim. Consequently $\mathcal E=-\nabla\Phi-\partial_t\Upsilon=u_{E_0^{\sim}}$ and $\mathcal B=\operatorname{curl}\Upsilon=u_{B_0^{\sim}}$ by linearity of the regular functional, with $E_0,B_0$ the classical fields of step 1.3. [step 1.3, given, F1, F4, F5, F10, F12]

3.1 The wave equations. For every test $\psi$, $\langle\Phi,W\psi\rangle=\frac{q}{\varepsilon_0}\int_{\mathbb R}(K\circledast W\psi)(z(s),s)\,ds=\frac{q}{\varepsilon_0}\int_{\mathbb R}\psi(z(s),s)\,ds=\frac{1}{\varepsilon_0}\langle\rho,\psi\rangle$, the first equality by the definition of $\Phi$ in [F1], the second by the pointwise identity of step 1.2 applied under the history integral (whose integrand is bounded by the cylinder estimate of step 2.1, so the interchange is legitimate), and the last by [F3]. Since $\langle W\Phi,\psi\rangle=\langle\Phi,W\psi\rangle$ for the even-order constant-coefficient operator $W$, this gives $W\Phi=\rho/\varepsilon_0$. The same computation componentwise with the prefactor $\mu_0q$ and the weight $z_j'$ gives $\langle\Upsilon_j,W\psi\rangle=\mu_0q\int_{\mathbb R}z_j'(s)\psi(z(s),s)ds=\mu_0\langle J_j,\psi\rangle$, hence $W\Upsilon=\mu_0J$. [step 1.2, step 2.1, given, F1, F3, F4, F7]

3.2 The Lorenz identity. For every test $\psi$, using the definitions of the distributional derivatives and the identities of step 1.1, $\langle\operatorname{div}\Upsilon+c^{-2}\partial_t\Phi,\psi\rangle=-\mu_0q\int_{\mathbb R}\bigl[z'(s)\cdot(K\circledast\nabla\psi)(z(s),s)+(K\circledast\partial_t\psi)(z(s),s)\bigr]ds=-\mu_0q\int_{\mathbb R}\bigl[z'(s)\cdot\nabla_yF(z(s),s)+\partial_sF(z(s),s)\bigr]ds$, that is, $-\mu_0q$ times the integral of the total derivative of $s\mapsto F(z(s),s)$, where $c^{-2}\varepsilon_0^{-1}=\mu_0$; by step 2.1 that total derivative is continuous with compact support, so Newton-Leibniz gives $\int_{\mathbb R}\frac{d}{ds}[F(z(s),s)]ds=0$ and the pairing vanishes for every test. Hence $\operatorname{div}\Upsilon+c^{-2}\partial_t\Phi=0$. [step 1.1, step 2.1, given, F1, F4, F12]

4.1 The four Maxwell equations. Using the distributional algebra for finite combinations of coordinate derivatives (which commutes in the sense $\partial^\alpha\partial^\beta=\partial^{\alpha+\beta}$ and is linear) together with the classical identities [F6] applied to smooth tests, one computes, with $G:=\operatorname{div}\Upsilon+c^{-2}\partial_t\Phi=0$ from step 3.2: $\operatorname{div}\mathcal E=-\Delta\Phi-\partial_t\operatorname{div}\Upsilon=W\Phi-c^{-2}\partial_t^2\Phi-\partial_t\operatorname{div}\Upsilon=\rho/\varepsilon_0-\partial_tG=\rho/\varepsilon_0$ by step 3.1; $\operatorname{div}\mathcal B=\operatorname{div}\operatorname{curl}\Upsilon=0$; $\operatorname{curl}\mathcal E=-\operatorname{curl}\nabla\Phi-\partial_t\operatorname{curl}\Upsilon=-\partial_t\mathcal B$; and $\operatorname{curl}\mathcal B=\operatorname{curl}\operatorname{curl}\Upsilon=\nabla\operatorname{div}\Upsilon-\Delta\Upsilon=\mu_0J-c^{-2}\partial_t^2\Upsilon+\nabla\operatorname{div}\Upsilon=\mu_0J+c^{-2}\partial_t\mathcal E+\nabla G=\mu_0J+c^{-2}\partial_t\mathcal E$, where the fourth step uses $-\Delta\Upsilon=W\Upsilon-c^{-2}\partial_t^2\Upsilon$ and $\partial_t\mathcal E=-\nabla\partial_t\Phi-\partial_t^2\Upsilon$. [step 3.1, step 3.2, F4, F6]

5.1 Off the worldline. For a test $\psi$ supported in $V$ one has $\langle\rho,\psi\rangle=q\int\psi(z(s),s)ds=0$ and likewise $\langle J,\psi\rangle=0$, since $\psi$ vanishes on $\Gamma$. By step 2.2 the restrictions of $\mathcal E,\mathcal B$ to $V$ are the regular distributions of the $C^1$ fields $E_0,B_0$ of [F1]. The classical-compatibility clause of [F4], applied on the open set $V$, identifies their first distributional derivatives there with the regular distributions of their continuous classical first derivatives; hence the four equations of step 4.1, restricted to $V$, read $\operatorname{div}E_0=0$, $\operatorname{div}B_0=0$, $\operatorname{curl}E_0=-\partial_tB_0$, $\operatorname{curl}B_0=c^{-2}\partial_tE_0$ as identities of continuous regular distributions. If a continuous function on $V$ has zero regular distribution, then it vanishes almost everywhere and hence, by continuity and the positivity of ball measure, at every point; applying this to each component of the classical residuals gives the source-free Maxwell equations pointwise on $V$. [step 2.2, step 4.1, given, F1, F4, F5, F10] ∎

## Remarks

- **Choice accounting.** $\mathrm{AC}_\omega$ is used through the polar formula and change of variables in step 1.3, the Riemann-to-Lebesgue comparison in step 2.2, and the regular-distribution injectivity in step 5.1; the root, the point-current pair and the algebraic identities are choice-free as stated in their own items.

- **What "the equations hold" means here.** The identities of (a) and (b) are distributional identities tested against $\mathcal D(Q)$; the point source is the functional of [F3], and no product of singular distributions, no field value on $\Gamma$ and no finite self-energy is asserted. The identification in (c) is with the zero extensions of locally integrable classical fields; the value on the null graph is a representative convention only.

- **Not asserted.** No physical adoption of these equations, no radiation-reaction law, no global bound on the acceleration and no uniqueness theorem for incoming fields beyond the retarded construction are claimed.
