---
id: pthm-em-causal-dispersive-response
kind: physics-theorem
title: "Specified causal material response: transfer function, dispersion relations and the passivity condition"
status: draft
origin: pipeline
domain: physics
dependency_level: 17
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-dependent-choice, def-em-fields, def-em-si-conventions, lem-em-finitely-subtracted-analytic-dispersion, post-em-material-closure, thm-em-causal-dispersive-response, thm-algebra-of-derivatives, def-euclidean-inner-product, lem-em-period-average, thm-complex-exponential-is-entire-with-derivative-itself, thm-chain-rule-for-total-derivatives]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-em-fields: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  lem-em-finitely-subtracted-analytic-dispersion: mathematical-premise
  post-em-material-closure: physical-assumption
  thm-em-causal-dispersive-response: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  lem-em-period-average: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
physical_scope: "The causal polarisation response of the memory branch of the material-closure postulate, with the transfer function, its regularity and growth properties, the principal-value dispersion relations (unsubtracted, instantaneous-subtracted, finitely Taylor-subtracted and constitutive-polynomial branches) and the monochromatic work formula together with the exact positive-semidefiniteness criterion for passivity. Conditional on the declared kernel or transfer-function hypotheses and on AC_omega (and Dependent Choice in the integrable branches); passivity is not inferred from causality; no material, microscopic or empirical claim. For arbitrary real instantaneous matrices, storage is assigned only to the symmetric quadratic part and the antisymmetric part is retained in work and in the total frequencywise passivity criterion. Each finite subtraction order requires its own growth and regularity hypotheses; higher allowed orders are retained."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "sec. 7.5.4 printed pp. 199-205 (PDF pp. 207-213): the causal convolution, the t<0 vanishing kernel, upper-half-plane analyticity of the response and the Kramers-Kronig relations with the explicit growth caveat. Read in the retained 236-page full text."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "sec. 7.1.1 printed p. 285, equation (7.3) (restricted Ohmic response); sec. 7.3.5 printed p. 330, equations (7.56)-(7.57) (linear-medium closure); sec. 9.4.3 printed pp. 398-402, equations (9.154)-(9.161) (frequency-dependent oscillator response); read in the stamped 596-page scan."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin; complete course book, 364 pp.)"
      url: "http://www.physics.ntua.gr/ph03/doc/Fitzpatrick.R.@.Classical.Electromagnetism.pdf"
      locator: "secs. 9.6-9.7 printed pp. 266-268, equations (9.65)-(9.75): dielectric propagation and the restricted oscillator model for frequency-dependent permittivity. This passage supplies context, not Kramers-Kronig relations; those are supported by Tong and proved under exact hypotheses by the local mathematical suppliers."
---

## Statement

Assume the memory branch of the material-closure postulate [[post-em-material-closure]] in a material rest frame, and assume the hypotheses of the mathematical suppliers [[thm-em-causal-dispersive-response]] and [[lem-em-finitely-subtracted-analytic-dispersion]]: Countable Choice for the smooth comparison route and, in the integrable branches, Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]). Let $E:\mathbb R\to\mathbb R^3$ be the electric-field history in the material rest frame, read componentwise in its spatial basis ([[def-em-fields]]), and let $P$ be the polarisation response declared by the model.

**(a) [Causal response]** If the kernel of [[post-em-material-closure]](c) satisfies $K\in L^1(0,\infty;\mathbb R^{3\times3})$, then for every bounded continuous history $E$ the response $P(t)=\varepsilon_0\int_0^\infty K(s)E(t-s)\,ds$ is well defined for every $t$, bounded and continuous, linear in $E$, and causal: histories equal on $(-\infty,t_0]$ produce responses equal on $(-\infty,t_0]$.

**(b) [Transfer function and dispersion relations]** If $K$ is smooth with compact support in $(0,\infty)$, the transfer function $\chi(z)=\int_0^\infty K(s)e^{izs}\,ds$ is entire, satisfies $\chi(-\omega)=\overline{\chi(\omega)}$ for real $\omega$, obeys $|\chi_{jk}(z)|\le\|K_{jk}''\|_{L^1}|z|^{-2}$ for $z\ne0$ with $\operatorname{Im}z\ge0$ (with the whole-plane bound carrying the exponential factor $e^{b\max(0,-\operatorname{Im}z)}$ when $\operatorname{supp}K\subseteq(0,b)$), and its entries satisfy the principal-value dispersion relations of [[thm-em-causal-dispersive-response]](b). If $K$ is locally absolutely continuous on $[0,\infty)$ with $K,K'\in L^1$ and $sK\in L^1$, then $\chi$ is holomorphic on the open upper half-plane, continuous with continuous first derivative on the real boundary, obeys the stated growth bound, and satisfies the same pair of relations; an instantaneous real part $\chi_\infty$ may be added to the model, and the relations apply to $\chi_{\mathrm{total}}-\chi_\infty$ for $\chi_{\mathrm{total}}=\chi_\infty+\chi$.

**(c) [Finitely-subtracted and polynomial branches]** For each specified integer $n\ge1$ for which the full hypotheses of [[lem-em-finitely-subtracted-analytic-dispersion]] hold for the declared response transfer function, its $n$-subtracted relations apply entrywise. Any transfer-only physical branch additionally requires $\chi(-\omega)=\overline{\chi(\omega)}$ entrywise for every real $\omega$, including real $\chi(0)$, as in [[post-em-material-closure]](c); scalar transfers act as scalar matrices. These hypotheses include upper-half-plane holomorphy, continuity on the closed upper half-plane, the stated boundary $C^1$ regularity, holomorphy near the real subtraction point $\omega_0$, and the order-specific growth bound $|\chi_{jk}(z)|\le C_{jk}(1+|z|^{n-1})$ outside a compact set. The Taylor polynomial and residual are

$$P_n(z)=\sum_{j=0}^{n-1}\frac{\chi^{(j)}(\omega_0)}{j!}(z-\omega_0)^j,\qquad f_n(z)=\frac{\chi(z)-P_n(z)}{(z-\omega_0)^n},$$

with removable values and the boundary $C^1$ hypothesis read entrywise as in the supplier. A growth bound for one order $n_0$ permits every order $n\ge n_0$ under the same local analytic and boundary hypotheses; it does not justify lower orders for which the required growth fails. The unsubtracted $n=0$ case is included only under its own decay and boundary hypotheses: $P_0=0$, $f_0=\chi$, growth $O(1/|z|)$, and factor $(\omega-\omega_0)^0=1$ with the supplier's principal-value convention. The separate constitutive-polynomial branch declares the normalized polarisation $P/\varepsilon_0=\sum_{j=0}^mA_jE^{(j)}+K*E$, with real scalar coefficients (acting as scalar matrices) or real $3\times3$ matrices $A_j$ whose entries carry $\mathrm s^j$, and $K$ satisfying the supplier's integrable causal hypotheses, is causal on histories with bounded continuous derivatives through order $m$. Its transfer is $Q(z)+\chi_K(z)$ with $Q(z)=\sum_{j=0}^mA_j(-iz)^j$. Subtracting the declared $Q$ leaves the proved relations for $\chi_K$, without assuming that $Q$ is the Taylor polynomial $P_n$.

**(d) [Monochromatic work, instantaneous work and passivity]** Let $\omega>0$, $e\in\mathbb C^3$ and $E(t)=\operatorname{Re}(e e^{-i\omega t})$. Write $\chi_{\mathrm{tot}}(\omega)$ for the full transfer matrix used in the response: it is $\chi(\omega)$ without an instantaneous term and $\chi_\infty+\chi(\omega)$ when the arbitrary real instantaneous matrix $\chi_\infty\in\mathbb R^{3\times3}$ is present. For a transfer-function-only branch adopt $P(t)=\operatorname{Re}(\varepsilon_0\chi_{\mathrm{tot}}(\omega)e e^{-i\omega t})$ as the harmonic response convention; in a kernel or normalized polynomial branch this follows by substitution. Here $e$ has units $\mathrm V\,\mathrm m^{-1}$, $\chi_{\mathrm{tot}}$ is dimensionless, $e^*$ denotes conjugate transpose, $(C^*)_{jk}=\overline{C_{kj}}$ for a complex matrix $C$, a matrix $H$ is Hermitian when $H^*=H$ and is positive semidefinite when $v^*Hv\ge0$ for every $v\in\mathbb C^3$, in the convention of [[thm-em-causal-dispersive-response]](d), and $\langle g\rangle:=T^{-1}\int_0^Tg(t)\,dt$ with $T=2\pi/\omega$. The period-averaged work per unit volume, in $\mathrm W\,\mathrm m^{-3}$, is

$$\langle E\cdot\partial_tP\rangle=\frac{\varepsilon_0\omega}{2}\operatorname{Im}(e^*\chi_{\mathrm{tot}}(\omega)e).$$

It is nonnegative for every $e$ if and only if the full Hermitian dissipative part

$$M_{\mathrm{tot}}(\omega)=\frac{\chi_{\mathrm{tot}}(\omega)-\chi_{\mathrm{tot}}(\omega)^*}{2i}$$

is positive semidefinite. This frequencywise monochromatic passivity is an additional model condition, not a consequence of causality or dispersion.

For the instantaneous part set $S=(\chi_\infty+\chi_\infty^{\mathsf T})/2$ and $A=(\chi_\infty-\chi_\infty^{\mathsf T})/2$, so $S^{\mathsf T}=S$ and $A^{\mathsf T}=-A$. For any real $C^1$ history its exact instantaneous work split is

$$E\cdot\partial_t(\varepsilon_0\chi_\infty E)=\frac{d}{dt}\left(\frac{\varepsilon_0}{2}E\cdot S E\right)+\varepsilon_0 E\cdot A\partial_tE.$$

The symmetric part therefore supplies the quadratic storage term; no positivity of that term is asserted unless $S$ is additionally positive semidefinite. The antisymmetric part has $E\cdot A E=0$ but can supply nonzero work over a cycle. Its monochromatic contribution is $\varepsilon_0\omega\operatorname{Im}(e^*A e)/2$, and

$$M_{\mathrm{tot}}(\omega)=M_K(\omega)+A/i,\qquad M_K(\omega)=\frac{\chi(\omega)-\chi(\omega)^*}{2i}.$$

Thus only a symmetric real instantaneous matrix contributes purely this storage term for all histories; for an arbitrary real instantaneous matrix the passivity test must include its antisymmetric contribution. For example, $\chi_\infty=\begin{pmatrix}0&1&0\\-1&0&0\\0&0&0\end{pmatrix}$, $K=0$ and $e=(1,i,0)^{\mathsf T}$ give $E=(\cos\omega t,\sin\omega t,0)$, zero quadratic storage and averaged work $\varepsilon_0\omega>0$. The opposite circular amplitude $(1,-i,0)^{\mathsf T}$ gives averaged work $-\varepsilon_0\omega$, so this instantaneous response is causal but fails the all-amplitude passivity condition.

**(e) [Scope]** The response is declared in the material rest frame of [[post-em-material-closure]](a); boosting the material changes the fields and the rest observer, and no frame-independent instantaneous response law is asserted. The framework does not claim that any particular material realises these branches, no microscopic mechanism is derived, and no empirical statement is made.

## Facts & Assumptions

**Given:** The memory-branch model data of the Statement in the material rest frame: either a kernel $K\in L^1(0,\infty;\mathbb R^{3\times3})$ or one of the declared transfer-function branches of the Statement, together with the temporal Fourier convention $e^{-i\omega t}$ of the suppliers and the constants of [[def-em-si-conventions]]; Countable Choice, and Dependent Choice in the integrable branches.

[A1] The memory branch of the material closure declares the rest-frame polarisation response $P(t)=\varepsilon_0\int_0^\infty K(s)E(t-s)\,ds$ with a real matrix kernel in $L^1(0,\infty)$, or a finitely-subtracted analytic transfer function with the holomorphy, boundary, growth and real-history symmetry hypotheses listed in the Statement; the kernel or transfer data are model data, and causality and passivity are not automatic ([[post-em-material-closure]], clauses (c)-(d)).

[L1] Clause (a) of the response theorem: for $d\ge1$, $K\in L^1(0,\infty;\mathbb R^{d\times d})$ and bounded continuous $E:\mathbb R\to\mathbb R^d$, the convolution $P(t)=\int_0^\infty K(s)E(t-s)\,ds$ converges absolutely for every $t$, read componentwise, with the componentwise bound $|P_j(t)|\le\sum_{k=1}^d(\sup_s|E_k(s)|)\int_0^\infty|K_{jk}(s)|\,ds$; the response is bounded and continuous, the map $E\mapsto P$ is linear, and it is causal ([[thm-em-causal-dispersive-response]], clause (a)).

[L5] Clauses (b)-(d) of the response theorem: in the compact smooth-kernel branch the transfer function $\chi(z)=\int_0^\infty K(s)e^{izs}\,ds$ is entire with $\chi(-\omega)=\overline{\chi(\omega)}$ for real $\omega$, obeys $|\chi_{jk}(z)|\le\|K_{jk}''\|_1|z|^{-2}$ for $z\ne0$, $\operatorname{Im}z\ge0$, and the whole-plane bound with the factor $e^{b\max(0,-\operatorname{Im}z)}$ for $\operatorname{supp}K\subseteq(0,b)$, and satisfies the principal-value dispersion relations; in the locally-absolutely-continuous integrable branch $\chi$ is holomorphic on the open upper half-plane, continuous with continuous first derivative on the real boundary, satisfies the stated growth bound and the same relations, and an instantaneous real matrix $\chi_\infty$ is subtracted before applying them, $\chi_{\mathrm{total}}=\chi_\infty+\chi$; in the monochromatic clause, with $T=2\pi/\omega$, $E(t)=\operatorname{Re}(e e^{-i\omega t})$, $P(t)=\operatorname{Re}(\varepsilon_0\chi(\omega)e e^{-i\omega t})$, $\frac1T\int_0^TE(t)\cdot P'(t)\,dt=\frac{\varepsilon_0\omega}{2}\operatorname{Im}(e^*\chi(\omega)e)$, and this period-averaged work is nonnegative for every $e$ if and only if $M(\omega)=(\chi(\omega)-\chi(\omega)^*)/(2i)$ satisfies $e^*M(\omega)e\ge0$ for every $e$ ([[thm-em-causal-dispersive-response]], clauses (b)-(d)).

[L2] The finitely-subtracted supplier: under upper-half-plane holomorphy, continuity on the closure, boundary $C^1$ regularity away from the real subtraction point, holomorphy near it and the order-specific growth $|\chi(z)|\le C(1+|z|^{n-1})$ outside a compact set, the Taylor polynomial $P$ and residual $f=(\chi-P)/(z-\omega_0)^n$ with removable value satisfy the two $n$-subtracted principal-value relations; the unsubtracted $n=0$ case holds with $P=0$, $f=\chi$ and growth $O(1/|z|)$; and for real coefficients $A_0,\dots,A_m$ or matrices and $K$ satisfying the integrable causal hypotheses, the response $\sum_{j=0}^mA_jE^{(j)}+K*E$ is causal with transfer $Q(z)+\chi_K(z)$, $Q(z)=\sum_{j=0}^mA_j(-iz)^j$, the polynomial subtraction leaving the proved relations for $\chi_K$ ([[lem-em-finitely-subtracted-analytic-dispersion]]).

[L3] $\varepsilon_0=(\mu_0c^2)^{-1}>0$ is the framework's positive constant; multiplying a response by the positive scalar $\varepsilon_0$ preserves the existence, boundedness, continuity, linearity and causality conclusions and rescales the monochromatic work exactly as displayed ([[def-em-si-conventions]], clause (a)).

[L4] The one-variable sum, scalar-multiple and product rules hold for differentiable maps ([[thm-algebra-of-derivatives]]), and the Euclidean dot product of [[def-euclidean-inner-product]] is the symmetric positive-definite bilinear form used for the quadratic form $E\mapsto E\cdot SE$.

[L6] For complex scalar amplitudes $a,d$ and $\omega>0$, $T^{-1}\int_0^T\operatorname{Re}(ae^{-i\omega t})\operatorname{Re}(de^{-i\omega t})dt=\operatorname{Re}(a\overline d)/2$ ([[lem-em-period-average]]); summing applies to arbitrary complex vector amplitudes. The exponential derivative is itself ([[thm-complex-exponential-is-entire-with-derivative-itself]]) and the chain rule differentiates its linear time argument ([[thm-chain-rule-for-total-derivatives]]).

## Proof

**Proof technique:** supplier identification for the analytic and causal branches, followed by finite-dimensional algebra for the instantaneous work split.

1.1 Since $\varepsilon_0>0$ by [L3] and $\varepsilon_0K\in L^1(0,\infty;\mathbb R^{3\times3})$ whenever $K$ is, clause (a) of the Statement is clause (a) of [L1] with $d=3$ and kernel $\varepsilon_0K$: for every bounded continuous $E$ the convolution $\int_0^\infty\varepsilon_0K(s)E(t-s)\,ds$ converges absolutely for every $t$, obeys the componentwise bound with $\sup|E_k|$ and $\int|\varepsilon_0K_{jk}|$, is bounded, continuous and linear in $E$, and is causal. [A1, L1, L3]

1.2 Clause (b) is the compact smooth-kernel and integrable branches of [L5] applied to the original kernel $K$: $\chi$ is the unscaled transform, whereas $P$ includes the prefactor $\varepsilon_0$. This gives entireness, the reality identity $\chi(-\omega)=\overline{\chi(\omega)}$, the decay and whole-plane bounds and the dispersion relations in the compact branch; holomorphy on the open upper half-plane, boundary $C^1$ regularity, the growth bound and the same relations in the integrable branch. Adding the real instantaneous matrix changes the total transfer to $\chi_{\mathrm{tot}}=\chi_\infty+\chi$ and leaves $\chi_{\mathrm{tot}}-\chi_\infty=\chi$, to which the relations apply; no work or storage property is asserted by this analytic subtraction. [A1, L5]

1.3 Clause (c) instantiates [L2] at each declared order $n$ whose hypotheses hold; the removable values and entrywise boundary hypotheses are those of the supplier, so the $n$-subtracted pair of relations holds entrywise for $n\ge1$, and the $n=0$ case requires its own $O(1/|z|)$ decay. If the growth bound holds at $n_0$, then for $n\ge n_0$ and $|z|\ge1$ one has $1+|z|^{n_0-1}\le2(1+|z|^{n-1})$, while on $|z|\le1$ both sides are bounded by a constant, so the same local analytic and boundary hypotheses give the bound at every larger order; no lower order is thereby justified. The constitutive-polynomial branch is the last clause of [L2]: the derivative of $e^{-i\omega t}$ contributes the multiplier $(-i\omega)^j$, so the declared transfer polynomial is exactly $Q(z)=\sum_{j=0}^mA_j(-iz)^j$, the normalized response $P/\varepsilon_0$ is causal and multiplication by $\varepsilon_0$ preserves that property, and subtracting $Q$ leaves the proved relations for $\chi_K$, with no identification of $Q$ with the Taylor polynomial $P_n$. [L2]

1.4 In the kernel branch, the reality of $K$ and absolute convergence permit projecting the integral of $K(s)e e^{-i\omega(t-s)}$ onto real parts, giving $P(t)=\operatorname{Re}(\varepsilon_0\chi(\omega)e e^{-i\omega t})$; the instantaneous and normalized polynomial terms add their declared transfer matrices. For the transfer-only branch this is the stated harmonic premise. Write $C=\chi_{\mathrm{tot}}(\omega)$, an arbitrary fixed complex matrix. By [L6], $\partial_tP=\operatorname{Re}((-i\omega)\varepsilon_0Ce e^{-i\omega t})$ and $\langle E\cdot\partial_tP\rangle=\operatorname{Re}(e\cdot\overline{(-i\omega)\varepsilon_0Ce})/2=\varepsilon_0\omega\operatorname{Im}(e^*Ce)/2$. Since $e^*C^*e=\overline{e^*Ce}$, $M=(C-C^*)/(2i)$ is Hermitian and $e^*Me=\operatorname{Im}(e^*Ce)$. Thus, because $\varepsilon_0\omega/2>0$, nonnegative work for every $e$ is equivalent to $e^*Me\ge0$ for every $e$, the precise meaning of positive semidefiniteness. No kernel hypothesis is needed for this finite-dimensional calculation. [A1, L3, L6]

2.1 For the instantaneous part write $\chi_\infty=S+A$ with $S$ symmetric and $A$ antisymmetric, as in the Statement. For any real $C^1$ history, the product rule of [L4] gives $\frac{d}{dt}(E\cdot SE)=2\,E\cdot S\partial_tE$, while $E\cdot AE=0$ because $(E\cdot AE)^{\mathsf T}=E\cdot A^{\mathsf T}E=-E\cdot AE$; hence $E\cdot\partial_t(\varepsilon_0\chi_\infty E)=\frac{d}{dt}(\frac{\varepsilon_0}{2}E\cdot SE)+\varepsilon_0E\cdot A\partial_tE$, the exact split displayed. For a periodic history the storage derivative has zero period average, and with $E=\operatorname{Re}(e e^{-i\omega t})$ the remaining average is $\frac{\varepsilon_0\omega}{2}\operatorname{Im}(e^*Ae)$; since $\chi_\infty$ is real, $\chi_\infty^*=\chi_\infty^{\mathsf T}$ and $(\chi_\infty-\chi_\infty^*)/(2i)=A/i$, so $M_{\mathrm{tot}}=M_K+A/i$. In the explicit example $\chi_\infty=A$ has $\chi_\infty e=(i,-1,0)^{\mathsf T}$ and $e^*\chi_\infty e=2i$ for $e=(1,i,0)^{\mathsf T}$; directly $E=(\cos\omega t,\sin\omega t,0)$ and $\chi_\infty\partial_tE=\omega E$, so the work is $\varepsilon_0\omega$ at every time, while $e=(1,-i,0)^{\mathsf T}$ gives $E=(\cos\omega t,-\sin\omega t,0)$, $\chi_\infty\partial_tE=-\omega E$ and averaged work $-\varepsilon_0\omega$. More generally a real antisymmetric $A$ with $A_{jk}=a\ne0$ gives $e^*Ae=2ia\ne0$ for $e=e_j+ie_k$, and the conjugate amplitude gives $-2ia$. Consequently the instantaneous response alone, when $A\ne0$, fails all-amplitude passivity; the full response must still be tested using $M_K+A/i$. A nonzero cycle work also precludes purely quadratic storage for every history, so that property requires $A=0$. [step 1.4, L4, L6]

3.1 Clauses (a)-(d) of the Statement now follow: (a) from step 1.1, (b) from step 1.2, (c) from step 1.3, and (d) from steps 1.4 and 2.1, with the passivity criterion holding for the full transfer matrix and the storage term assigned only to the symmetric part of an arbitrary real instantaneous matrix. Clause (e) fixes the scope: all statements are conditional on the declared model data of [A1] and on the Choice hypotheses of the suppliers, no material realization, microscopic mechanism or empirical claim is made, and the growth, boundary and decay hypotheses are required per branch and per subtraction order. [A1, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎
