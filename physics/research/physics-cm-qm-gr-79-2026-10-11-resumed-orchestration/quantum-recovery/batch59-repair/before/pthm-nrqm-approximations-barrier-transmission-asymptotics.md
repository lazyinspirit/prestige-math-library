---
id: pthm-nrqm-approximations-barrier-transmission-asymptotics
aliases: [nrqm-approximations-barrier-transmission-asymptotics]
kind: physics-theorem
domain: physics
title: "Separated smooth-barrier tunnelling: the declared transmission coefficient is exp(-2S/h) up to explicit small-h and barrier-thickness errors"
status: draft
origin: session
dependency_level: 11
deps: [def-nrqm-approximations-framework-wkb-regime-model, lem-nrqm-approximations-scaled-line-model-correspondence, thm-nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error, thm-nrqm-controlled-dynamics-liouville-turning-point-transformation, thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection, thm-nrqm-controlled-dynamics-wkb-explicit-error, thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients, def-countable-choice]
dependency_roles:
  def-nrqm-approximations-framework-wkb-regime-model: formulation-prerequisite
  lem-nrqm-approximations-scaled-line-model-correspondence: mathematical-premise
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
physical_scope: "The separated smooth-barrier transmission statement for the declared WKB regime model: the declared transmission coefficient equals the exponential of minus twice the barrier WKB exponent per unit h, with the quantitative small-h and exponentially small correction bound of the cited theorem, and the physical exponent is (1/hbar) times the classical action integral over the forbidden region. The statement is conditional on a fixed compactly supported C^5 barrier with exactly two separated simple turning points; it excludes rectangular walls, coalescing turning points, barrier-top uniformity and resonant multiwell interference, and it asserts no detector, wave packet or measured transmission."
empirical_premises: []
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Sections 5.3-5.6 printed and PDF pages 64-75: 5.3 Square Potential Barrier p. 64, 5.4 WKB Approximation p. 70, 5.5 Cold Emission p. 72, 5.6 Alpha Decay p. 73 (barrier penetration and the WKB tunnelling exponent)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "F. W. J. Olver, Asymptotics and Special Functions (1974), Chapter 11 (connection formulas and barrier penetration for second-order equations with two turning points; standard monograph), consulted through the NIST DLMF Airy survey"
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
clause (d). Then there are an $\varepsilon(h)\le C_{1}h$ and a constant
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
matching datum of the model, not a detector response or a measured count; no
wave packet, preparation, apparatus or sampling model is asserted. In
particular, for each fixed barrier,
$$\lim_{h\downarrow0}T(h)\,e^{2S/h}=1 .$$

## Facts & Assumptions

**Given:** the WKB regime model and hypothesis (W2); the exponent $S$; the declared transmission coefficient $T(h)$ of the model clause (d); the Axiom of Countable Choice.

[F1] **Supplied two-turn tunnelling error.** Let $V\in C_c^{5}(\mathbb R;\mathbb R)$ and let $E>0$ be such that $V-E$ has exactly two simple zeros $a<b$, is positive on $(a,b)$ and negative outside, with nonvanishing derivative at $a,b$. For the equation $u''=\frac{2m(V-E)}{\hbar^{2}}u$ in the nondimensional convention of the supplier (all of $m,V,E,\hbar$ dimensionless), with $B:=\int_{a}^{b}\sqrt{2m(V-E)}\,dx$ and $S_{\rm sup}:=B/h$ for the small nondimensional parameter $h>0$, the transmission coefficient satisfies $|T_{\rm sup}(h)e^{2S_{\rm sup}}-1|\le C_{0}[\varepsilon(h)+e^{-2S_{\rm sup}}]/(1-C_{0}[\varepsilon(h)+e^{-2S_{\rm sup}}])$ with $\varepsilon(h)\le C_{1}h$ whenever the denominator is positive, and $T_{\rm sup}(h)=e^{-2S_{\rm sup}}(1+O(\varepsilon(h)+e^{-2S_{\rm sup}}))$ ([[thm-nrqm-controlled-dynamics-two-turn-barrier-tunnelling-error]]).

[F2] **Matching control.** The conversion across the barrier is built from the Liouville transformation at each simple turning point, the stable weighted Airy-Volterra connection and the allowed-region WKB error, with remainders absorbed into $\varepsilon(h)$ ([[thm-nrqm-controlled-dynamics-liouville-turning-point-transformation]], [[thm-nrqm-controlled-dynamics-stable-weighted-airy-volterra-connection]], [[thm-nrqm-controlled-dynamics-airy-envelopes-and-asymptotic-coefficients]], [[thm-nrqm-controlled-dynamics-wkb-explicit-error]]).

[F3] **Model identification.** In the supplier's nondimensional convention, choosing $m=\tfrac12$, its potential $V$ equal to $W$, its energy $E$ equal to $\lambda$ and its nondimensional $\hbar$ equal to the model's $h$, its equation $\frac{2m(V-E)}{\hbar^{2}}u$ becomes $\frac{W-\lambda}{h^{2}}u$, the model's equation; its barrier data match hypothesis (W2); its $B$ equals the displayed $S$ and its $S_{\rm sup}$ equals $S/h$. The model's clause (d) declares $T(h)$ to be the transmission coefficient in exactly this matching normalization ([[def-nrqm-approximations-framework-wkb-regime-model]] clauses (b)-(d)).

## Proof

**Proof technique:** direct; instantiate the supplied two-turn tunnelling theorem in its nondimensional convention at the model's barrier data and identify the exponents, then translate the exponent to physical variables.

**Given:** the data of the statement and [F1]-[F3].

1.1 [Hypothesis matching] Hypothesis (W2) supplies exactly the two simple zeros $\xi_{a}<\xi_{b}$ with $W-\lambda$ positive between and negative outside; since $V\in C_{c}^{5}$ and $E_\star>0$, the function $W=V(\ell\,\cdot)/E_\star$ is in $C_c^{5}$, and $\lambda\in(0,\max W)$ because the barrier has a positive forbidden region; the derivative of $W-\lambda$ does not vanish at $\xi_{a},\xi_{b}$ because the zeros are simple. Under the identification of [F3] the supplier's equation is the model's equation $u''=(W-\lambda)u/h^{2}$ and its forbidden-region action integral is $B=S$. [F3, given, algebra]

1.2 [Physical exponent] By [[lem-nrqm-approximations-scaled-line-model-correspondence]] clause (b) applied on the forbidden interval $[\xi_{a},\xi_{b}]$, with $a$ the lower and $b$ the upper endpoint there, $$\frac1h\int_{\xi_{a}}^{\xi_{b}}\sqrt{W-\lambda}\,d\xi =\frac1\hbar\int_{x_{a}}^{x_{b}}\sqrt{2m\bigl(E_\star W(x/\ell)-E_\star\lambda\bigr)}\,dx =\frac1\hbar\int_{x_{a}}^{x_{b}}\sqrt{2m(V(x)-E)}\,dx,$$ which is the displayed identity for $S/h$. The sign is positive because $W-\lambda>0$ and $V-E>0$ on the open interval. [given, algebra]

2.1 [Transfer of the asymptotic error] Applying [F1] under the identification of step 1.1 gives, for the model's declared transmission datum, the quantitative bound $|T(h)e^{2S/h}-1|\le C_{0}[\varepsilon(h)+e^{-2S/h}]/(1-C_{0}[\varepsilon(h) +e^{-2S/h}])$ whenever the denominator is positive, with $\varepsilon(h)\le C_{1}h$ and constants depending only on the barrier data and the matching sections; the vanishing of the right-hand side gives $T(h)=e^{-2S/h}(1+O(\varepsilon(h)+e^{-2S/h}))$ and, taking $h\downarrow0$ along the fixed barrier, $\lim_{h\downarrow0}T(h)e^{2S/h}=1$. [F1, F2, F3, step 1.1, algebra]

3.1 [Scope] The excluded configurations (rectangular walls, coalescing or multiple turning points, barrier-top uniformity, resonances) are exactly the configurations excluded by [F1]; the model's clause (d) supplies $T(h)$ as a declared matching datum, and no wave packet, detector, apparatus or sampling model entered the argument. This proves the scope statement. [F1, F3, given] ∎

## Remarks

- **Convention note.** The cited tunnelling theorem is stated in the nondimensional convention standard in this run's controlled-dynamics mathematics, in which the second-order equation carries the small parameter $h$ and the factors $m,\hbar$ are numerical; the identification of [F3] makes that convention exact for the model's dimensionless equation. The physical exponent identity of the statement is then supplied by the nondimensionalisation lemma and involves no approximation.
- **The exponential is only the leading factor.** The statement controls the correction by $\varepsilon(h)+e^{-2S/h}$; in particular the prefactor of the exponential is $1+O(\varepsilon)$ for a smooth barrier, and no statement about rectangular profiles (whose prefactor differs) is made.
