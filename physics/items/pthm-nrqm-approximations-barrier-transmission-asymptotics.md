---
id: pthm-nrqm-approximations-barrier-transmission-asymptotics
aliases: [ nrqm-approximations-barrier-transmission-asymptotics ]
kind: physics-theorem
domain: physics
title: "Separated smooth-barrier tunnelling: the declared transmission
  coefficient is exp(-2S/h) up to explicit small-h and barrier-thickness errors"
status: draft
origin: session
dependency_level: 13
deps:
  [
    def-nrqm-approximations-framework-wkb-regime-model,
    lem-nrqm-approximations-scaled-line-model-correspondence,
    pthm-nrqm-approximations-turning-point-connection,
    thm-nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error,
    thm-nrqm-controlled-dynamics-liouville-turning-point-transformation,
    thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection,
    thm-nrqm-controlled-dynamics-wkb-explicit-error,
    thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients,
    def-countable-choice
  ]
dependency_roles:
  def-nrqm-approximations-framework-wkb-regime-model: formulation-prerequisite
  lem-nrqm-approximations-scaled-line-model-correspondence: mathematical-premise
  pthm-nrqm-approximations-turning-point-connection: physical-result
  thm-nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error: mathematical-premise
  thm-nrqm-controlled-dynamics-liouville-turning-point-transformation: mathematical-premise
  thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection: mathematical-premise
  thm-nrqm-controlled-dynamics-wkb-explicit-error: mathematical-premise
  thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The separated smooth-barrier transmission statement for the
  declared WKB regime model: the declared transmission coefficient equals the
  exponential of minus twice the barrier WKB exponent per unit h, with the
  quantitative small-h and exponentially small correction bound of the cited
  theorem, and the physical exponent is (1/hbar) times the classical action
  integral over the forbidden region. The statement is conditional on a fixed
  compactly supported C^5 barrier with exactly two separated simple turning
  points; it excludes rectangular walls, coalescing turning points, barrier-top
  uniformity and resonant multiwell interference, and it asserts no detector,
  wave packet or measured transmission."
empirical_premises: []
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin,
        author-hosted course text), Sections 5.3-5.6 printed and PDF pages
        64-75: 5.3 Square Potential Barrier p. 64, 5.4 WKB Approximation p. 70,
        5.5 Cold Emission p. 72, 5.6 Alpha Decay p. 73 (barrier penetration and
        the WKB tunnelling exponent)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "F. W. J. Olver, Asymptotics and Special Functions (1974), Chapter 11
        (connection formulas and barrier penetration for second-order equations
        with two turning points; standard monograph), consulted through the NIST
        DLMF Airy survey"
      url: "https://dlmf.nist.gov/9.7"
verification:
  precheck: pass
---

## Statement

Adopt the declared WKB regime model of
[[def-nrqm-approximations-framework-wkb-regime-model]] with its data
$V,m,\hbar,\ell,E_\star,W,\lambda,h$ and assume hypothesis (W2): $W-\lambda$
has exactly two zeros $\xi_{a}<\xi_{b}$ on $\mathbb R$, both simple, is
strictly positive on $(\xi_{a},\xi_{b})$ and strictly negative on
$\mathbb R\setminus[\xi_{a},\xi_{b}]$. Put
$$S:=\int_{\xi_{a}}^{\xi_{b}}\sqrt{W(\xi)-\lambda}\,d\xi>0,$$
and let $T(h)$ be the model's declared transmission coefficient of its
clause (d). Then there are $h_0>0$, an $\varepsilon(h)\le C_{1}h$ for $0<h<h_0$, and a constant
$0\le C_{0}<\infty$, both depending only on the model's barrier data
$(W,\lambda,\ell,E_\star)$ and the fixed matching sections, such that
$$\Bigl|T(h)\,e^{2S/h}-1\Bigr|\le \frac{C_{0}\bigl[\varepsilon(h)+e^{-2S/h}\bigr]} {1-C_{0}\bigl[\varepsilon(h)+e^{-2S/h}\bigr]}$$
whenever the denominator is positive; consequently
$$T(h)=e^{-2S/h}\Bigl(1+O\bigl(\varepsilon(h)+e^{-2S/h}\bigr)\Bigr).$$
In the physical variables of the line model, where
$V(\ell\xi)=E_\star W(\xi)$ and $E=E_\star\lambda$, one has by
[[lem-nrqm-approximations-scaled-line-model-correspondence]] clause (b)
$$\frac{S}{h}=\frac1\hbar\int_{x_{a}}^{x_{b}}\sqrt{2m\bigl(V(x)-E\bigr)}\,dx, \qquad x_{a}=\ell\xi_{a},\ x_{b}=\ell\xi_{b},$$
so the displayed leading factor is $e^{-2S/h}
=\exp\bigl(-\frac{2}{\hbar}\int_{x_{a}}^{x_{b}}\sqrt{2m(V-E)}\,dx\bigr)$,
the exponential of minus twice the classical action integral of the forbidden
region in units of $\hbar$. The statement is conditional on the fixed
compactly supported $C^{5}$ barrier with two separated simple turning points;
rectangular walls, coalescing turning points, barrier-top uniformity and
resonant multiwell interference are excluded, and $T(h)$ is the declared
scattering-current ratio of the model, not a detector response or a measured count; no
wave packet, preparation, apparatus or sampling model is asserted. In
particular, for each fixed barrier,
$$\lim_{h\downarrow0}T(h)\,e^{2S/h}=1 .$$

## Facts & Assumptions

**Given:** the WKB regime model and hypothesis (W2); the exponent $S$; the declared transmission coefficient $T(h)$ of the model clause (d); the Axiom of Countable Choice.

[F1] **Exact local connection data.** Under (W3), the one-turn theorem supplies real exact decaying and growing solutions, normalized by dividing by their nonzero forbidden-side constants. On each fixed section away from the turn, their allowed-side values are respectively $2p^{-1/2}(\sin\Theta+O(h))$ and $p^{-1/2}(\cos\Theta+O(h))$, their forbidden-side values are respectively $\rho^{-1/4}e^{-A}(1+O(h))$ and $\rho^{-1/4}e^{A}(1+O(h))$, and the corresponding derivative estimates have the same $O(h)$ control after scaling the derivative by $h$. Here $p=\sqrt{\lambda-W}$ on the allowed side, $\rho=W-\lambda$ on the forbidden side, and $A$ is the action from the turn divided by $h$. This is [[pthm-nrqm-approximations-turning-point-connection]] clauses (a)-(c), with reflection at a turn whose derivative is negative.

[F2] **Exterior and interior coordinates.** The potential profile $W$ is zero on neighborhoods of $\xi_-=-L$ and $\xi_+=L$, so $p_\infty=\sqrt\lambda>0$ there. At a fixed interior point $\xi_0\in(\xi_a,\xi_b)$, $\rho(\xi_0)=W(\xi_0)-\lambda>0$ and the scaled state $Y_0(u)=(\rho(\xi_0)^{1/4}u(\xi_0),h\rho(\xi_0)^{-1/4}u'(\xi_0))^{\mathsf T}$ satisfies $\det(Y_0(u),Y_0(v))=hW(u,v)$, where $W(u,v):=uv'-u'v$. These are algebraic identities.

[F3] **Physical exponent identity.** The exact nondimensionalisation lemma gives $S/h=\hbar^{-1}\int_{x_a}^{x_b}\sqrt{2m(V(x)-E)}\,dx$ on compact subintervals strictly inside the forbidden interval; the identity extends to the turning endpoints by continuity of the square-root integrands ([[lem-nrqm-approximations-scaled-line-model-correspondence]] clause (b)).

## Proof

**Proof technique:** direct; match the exact exterior waves to explicitly displayed Airy bases at both turning points, expand their interior Wronskian without inverting exponentially separated columns, and then convert its modulus to the transmitted current ratio.

**Given:** the data of the statement and [F1]-[F3].

Throughout this proof, $O(h)$ for scalars, vectors or matrices means a quantity whose absolute value or stated norm is bounded by $Ch$ as $h\downarrow0$, where $C$ depends only on the fixed barrier data and the fixed sections, not on $h$.

1.1 [Hypothesis matching] Under (W2), $W-\lambda$ has one simple zero $\xi_a$ with positive derivative and one simple zero $\xi_b$ with negative derivative. Since $W$ is compactly supported and $W-\lambda<0$ outside $[\xi_a,\xi_b]$, $\lambda>0$; choose $L$ with $\operatorname{supp}W\subset(-L,L)$, so the fixed exterior points $\xi_-=-L$ and $\xi_+=L$ lie in allowed intervals and $W=0$ near them. Fix the interior point $\xi_0=(\xi_a+\xi_b)/2$. The intervals $[\xi_-,\xi_0]$ and $[\xi_0,\xi_+]$ contain respectively only the left and right simple turning point, so [F1] applies on each, with reflection of the coordinate on the right. [F1, given, algebra]

1.2 [Physical exponent] For $0<\delta<(\xi_b-\xi_a)/2$, the closed interval $[\xi_a+\delta,\xi_b-\delta]$ lies strictly inside the forbidden region, so $W-\lambda>0$ there and [F3] applies. Both square-root integrands extend continuously to the turning endpoints with value zero. Letting $\delta\downarrow0$, the omitted endpoint integrals tend to zero because their integrands are continuous and bounded on compact intervals. Thus $$\frac{S}{h}=\frac1h\int_{\xi_a}^{\xi_b}\sqrt{W-\lambda}\,d\xi=\frac1\hbar\int_{x_a}^{x_b}\sqrt{2m(E_\star W(x/\ell)-E_\star\lambda)}\,dx=\frac1\hbar\int_{x_a}^{x_b}\sqrt{2m(V(x)-E)}\,dx,$$ with $x_a=\ell\xi_a$, $x_b=\ell\xi_b$, as in the Statement. [F3, given, algebra]

1.3 [Exact scattering amplitudes and current ratio] Put $p_\infty=\sqrt\lambda$ and define $f_L(\xi)=p_\infty^{-1/2}e^{-ip_\infty\xi/h}$ for $\xi\le-L$ and $f_R(\xi)=p_\infty^{-1/2}e^{ip_\infty\xi/h}$ for $\xi\ge L$, extending each to $[-L,L]$ by its Cauchy data. The first-order system for $(u,u')$ has continuous bounded coefficients on this compact interval for each fixed $h>0$; its Picard iterates converge uniformly, with the $n$th iterate bounded by $M^n(2L)^n/n!$, and the same estimate proves uniqueness. Hence $f_L,f_R$ are exact solutions. Because $W-\lambda$ is real, $J_h'=h\operatorname{Im}(|u'|^2+(W-\lambda)|u|^2/h^2)=0$. The exterior waves have currents $J_h(f_R)=1$, $J_h(f_L)=-1$, and $W(f_L,\overline{f_L})=2i/h$. Thus at the left exterior there are unique coefficients $A_{\rm in},A_{\rm out}$ with $f_R=A_{\rm in}\overline{f_L}+A_{\rm out}f_L$; direct expansion of the two plane-wave currents cancels their cross terms and gives $J_h(f_R)=|A_{\rm in}|^2-|A_{\rm out}|^2=1$, so $A_{\rm in}\ne0$. The model's unique unit-incoming solution is $f_R/A_{\rm in}$, with $t=1/A_{\rm in}$ and $r=A_{\rm out}/A_{\rm in}$, hence $T=|A_{\rm in}|^{-2}$. Also $W(f_L,f_R)=A_{\rm in}W(f_L,\overline{f_L})$, so $A_{\rm in}=hW(f_L,f_R)/(2i)$. This derives the exact normalization and the current-ratio formula used in clause (d) of the WKB model. [given, algebra]

1.4 [Exterior-to-turning-point basis conversion] Let $p(\xi)=\sqrt{\lambda-W(\xi)}$ on the allowed sides, $\sigma_-=-1$, $\sigma_+=1$, and define the outward phases [F1, algebra]
$$\Theta_-(\xi)=\frac1h\int_{\xi}^{\xi_a}p(s)\,ds+\frac\pi4,\qquad \Theta_+(\xi)=\frac1h\int_{\xi_b}^{\xi}p(s)\,ds+\frac\pi4,$$
so $\Theta_j'=\sigma_jp/h$. Divide the exact local decaying and growing solutions from [F1] by their nonzero forbidden-side constants and call them $d_j,g_j$. At $\xi_j\in\{\xi_-,\xi_+\}$, put $Y_j(u)=(p_\infty^{1/2}u(\xi_j),h p_\infty^{-1/2}u'(\xi_j))^{\mathsf T}$. The fixed-section value and derivative errors in [F1] are $O(h)$: there $\zeta_j(\xi_j)\ne0$ is fixed, $\varepsilon_h\le Ch$, and $h/|\zeta_j(\xi_j)|^{3/2}=O(h)$. The Airy derivative asymptotics and chain rule $u'=a'w+a\zeta'w'$ give for the normalized allowed-side forms
$$h p^{-1/2}g_j'=-\sigma_j\sin\Theta_j+O(h),\qquad h p^{-1/2}d_j'=2\sigma_j\cos\Theta_j+O(h),$$
because the amplitude derivative contributes only $h p^{-1/2}(p^{-1/2})'=O(h)$ at a fixed section. Hence, after the displayed scaling of $u'$,
$$Y_j(g_j)=\binom{\cos\Theta_j}{-\sigma_j\sin\Theta_j}+O(h),\qquad Y_j(d_j)=2\binom{\sin\Theta_j}{\sigma_j\cos\Theta_j}+O(h).$$
The exact exterior outgoing plane wave satisfies $Y_j(f_j)=\gamma_j(e^{i\Theta_j},i\sigma_je^{i\Theta_j})^{\mathsf T}$ for some $|\gamma_j|=1$, since it has the same constant amplitude and phase derivative there. The leading basis matrix and its determinant are
$$M_j^0=\begin{pmatrix}\cos\Theta_j&2\sin\Theta_j\\-\sigma_j\sin\Theta_j&2\sigma_j\cos\Theta_j\end{pmatrix},\qquad \det M_j^0=2\sigma_j,$$
and $M_j^0(1,i/2)^{\mathsf T}=(e^{i\Theta_j},i\sigma_je^{i\Theta_j})^{\mathsf T}$. Since the entries of $(M_j^0)^{-1}$ are uniformly bounded and the exact matrix is $M_j=M_j^0+O(h)$, for all sufficiently small $h$ it is invertible with uniformly bounded inverse; solving its exact two-component system yields coefficients $(\alpha_j,\beta_j)=\gamma_j(1,i/2)^{\mathsf T}+O(h)$. Equality of Cauchy data and ODE uniqueness then give
$$f_L=\gamma_L\bigl[(1+O(h))g_a+(i/2+O(h))d_a\bigr],\qquad f_R=\gamma_R\bigl[(1+O(h))g_b+(i/2+O(h))d_b\bigr].$$
This derives the incoming/outgoing coefficient formulas from the explicit matrices. [F1, algebra]

2.1 [Interior Wronskian] Put $\rho(\xi)=W(\xi)-\lambda>0$ on the barrier and [step 1.4, F1, F2, algebra]
$$A_a=\frac1h\int_{\xi_a}^{\xi_0}\sqrt\rho\,d\xi,\qquad A_b=\frac1h\int_{\xi_0}^{\xi_b}\sqrt\rho\,d\xi,\qquad A=A_a+A_b=S/h.$$
Both $A_a,A_b$ are positive. At $\xi_0$ use the common state $Y_0(u)=(\rho(\xi_0)^{1/4}u(\xi_0),h\rho(\xi_0)^{-1/4}u'(\xi_0))^{\mathsf T}$. The normalized forbidden-side value and slope forms of [F1] give
$$Y_0(g_a)=e^{A_a}\bigl[(1,1)^{\mathsf T}+O(h)\bigr],\quad Y_0(d_a)=e^{-A_a}\bigl[(1,-1)^{\mathsf T}+O(h)\bigr],$$
$$Y_0(g_b)=e^{A_b}\bigl[(1,-1)^{\mathsf T}+O(h)\bigr],\quad Y_0(d_b)=e^{-A_b}\bigl[(1,1)^{\mathsf T}+O(h)\bigr].$$
Indeed $A_a'=\sqrt\rho/h$ and $A_b'=-\sqrt\rho/h$ at the fixed point. Differentiating only the explicit leading forbidden envelopes gives
$$h\rho^{-1/4}(\rho^{-1/4}e^{\pm A_a})'=e^{\pm A_a}\left(\pm1-\frac{h\rho'}{4\rho^{3/2}}\right),\qquad h\rho^{-1/4}(\rho^{-1/4}e^{\pm A_b})'=e^{\pm A_b}\left(\mp1-\frac{h\rho'}{4\rho^{3/2}}\right).$$
The last terms are $O(h)$ because $\rho(\xi_0)>0$ and $\rho'$ is fixed there; the derivative error from [F1] has the same scaled order. Thus the value and slope vector errors above are indeed $O(h)$ without differentiating an unspecified error term. Since $\det(Y_0(u),Y_0(v))=hW(u,v)$, expand it using the exact identities of step 1.4. The $g_ag_b$ determinant is $-2e^{A}(1+O(h))$. The leading vectors in each mixed determinant coincide, so those terms are $O(h)e^{A_a-A_b}$ and $O(h)e^{-A_a+A_b}$; relative to $e^A$ these are at most $O(h)e^{-2A_b}$ and $O(h)e^{-2A_a}$. The $d_ad_b$ term is $O(e^{-A})$. After including the coefficients from step 1.4 and the phases $|\gamma_L\gamma_R|=1$, this yields
$$hW(f_L,f_R)=-2\gamma_L\gamma_R e^{A}\bigl[1+O(h)+O(e^{-2A})\bigr].$$
All constants depend only on the fixed barrier data and sections; no exponentially ill-conditioned matrix is inverted. [step 1.4, F1, F2, algebra]

3.1 [Quantitative transmission error] Write the relative error in step 2.1 as $\delta_h=O(h+e^{-2A})$; then $|A_{\rm in}|^2e^{-2A}=|1+\delta_h|^2=1+\eta_h$ with $\eta_h\in\mathbb R$ and $|\eta_h|\le C_0[h+e^{-2A}]$ after enlarging a fixed constant. Because $T=|A_{\rm in}|^{-2}$, $Te^{2A}=(1+\eta_h)^{-1}$, so whenever $1-C_0[h+e^{-2A}]>0$, [step 1.3, step 2.1, algebra]
$$|Te^{2A}-1|\le\frac{C_0[h+e^{-2A}]}{1-C_0[h+e^{-2A}]}.$$
Choose $\varepsilon(h)=C_1h$ with $C_1$ large enough to dominate the fixed matching errors in steps 1.4-2.1; after increasing $C_0$ as needed, this is the quantitative bound of the Statement with $A=S/h$. It implies $T=e^{-2S/h}(1+O(\varepsilon(h)+e^{-2S/h}))$ and $\lim_{h\downarrow0}Te^{2S/h}=1$ for the fixed barrier. [step 1.3, step 2.1, algebra]

4.1 [Scope] The proof uses only the declared smooth compactly supported profile, its two separated simple turning points, the local Airy connections and the exact boundary-defined scattering solution. It uses no rectangular wall, coalescing or multiple turn, barrier-top uniformity, resonant multiwell, wave packet, detector, apparatus or sampling assumption. Thus the claimed exclusions and scope hold. [F1, step 1.3, step 2.1, given] ∎

## Remarks

- **Convention note.** The cited tunnelling theorem is stated in the nondimensional convention standard in this run's controlled-dynamics mathematics, in which the second-order equation carries the small parameter $h$ and the factors $m,\hbar$ are numerical; the identification of [F3] makes that convention exact for the model's dimensionless equation. The physical exponent identity of the statement is then supplied by the nondimensionalisation lemma and involves no approximation.
- **The exponential is only the leading factor.** The statement controls the correction by $\varepsilon(h)+e^{-2S/h}$; in particular the prefactor of the exponential is $1+O(\varepsilon)$ for a smooth barrier, and no statement about rectangular profiles (whose prefactor differs) is made.
