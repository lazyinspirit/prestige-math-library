---
id: ex-nrqm-driven-dynamics-driven-oscillator-coherent-response
aliases: [ nrqm-driven-dynamics-driven-oscillator-coherent-response ]
kind: example
domain: physics
title: "The driven oscillator: exact classical response of a coherent
  preparation and stationary fluctuations"
status: draft
origin: session
dependency_level: 14
deps:
  [
    pthm-nrqm-driven-dynamics-common-domain-propagator,
    def-nrqm-driven-dynamics-framework-driven-model,
    def-nrqm-oscillator-framework-quadratic-potential-model,
    def-nrqm-oscillator-coherent-states,
    pthm-nrqm-oscillator-coherent-state-evolution,
    pthm-nrqm-oscillator-coherent-state-fluctuations,
    thm-nrqm-controlled-dynamics-explicit-unbounded-oscillator-propagator,
    thm-nrqm-controlled-dynamics-driven-oscillator-common-domain,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    def-nrqm-framework-quantities-and-units,
    def-hilbert-space,
    def-inner-product-space,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  pthm-nrqm-driven-dynamics-common-domain-propagator: physical-result
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  def-nrqm-oscillator-framework-quadratic-potential-model: formulation-prerequisite
  def-nrqm-oscillator-coherent-states: formulation-prerequisite
  pthm-nrqm-oscillator-coherent-state-evolution: physical-result
  pthm-nrqm-oscillator-coherent-state-fluctuations: physical-result
  thm-nrqm-controlled-dynamics-explicit-unbounded-oscillator-propagator: mathematical-premise
  thm-nrqm-controlled-dynamics-driven-oscillator-common-domain: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-hilbert-space: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional computation in the declared driven oscillator
  model H(t) = H_osc - f(t) Q with a C^1 real drive: the exact mean position and
  momentum of a coherent preparation follow the classical forced oscillator
  through the free rotation plus the zero-data forced response, and the position
  and momentum spreads stay at their oscillator values. The example is a model
  computation; it asserts no laboratory oscillator, no measured amplitude or
  phase, no damping or driving source and no measurement record."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Sections 4.3-4.5 printed pages 30-39 (PDF pages 30-39):
        coherent states, their classical mean motion and the translation
        (displacement) operator"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 8.3 printed pages 178-179 (PDF pages 190-191):
        oscillator algebra and eigenfunctions; the coherent and driven
        propagation formulas are supplied by the cited local items"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Example

Adopt P1, P2 and P4 in the readings of the declared driven model ([[def-nrqm-driven-dynamics-framework-driven-model]] clause (a)) and the one-dimensional oscillator model of [[def-nrqm-oscillator-framework-quadratic-potential-model]] clauses (b), (c) with parameters $m,\omega,\hbar>0$, length scale $\ell=\sqrt{\hbar/(m\omega)}$, energy observable $(H_{\mathrm{osc}},\mathrm J)$ and position and momentum observables $(Q,\mathrm m)$, $(P,\mathrm{kg\,m\,s^{-1}})$; adopt the coherent-state family $(\Psi_{z})_{z\in\mathbb C}$ of [[def-nrqm-oscillator-coherent-states]] and the **driven oscillator family**
$$H(t):=H_{\mathrm{osc}}-f(t)Q,\qquad t\in[a,b],$$
with a declared drive $f\in C^{1}([a,b];\mathbb R)$ read in $\mathrm{J\,m^{-1}}$, as an instance of the protocol's common-domain model of [[pthm-nrqm-driven-dynamics-common-domain-propagator]] clause (c). Let $U(t,s)$ be the unique strong propagator of that family (which preserves $Y=D(H_{\mathrm{osc}})$), and let $(q(\cdot;s),p(\cdot;s))$ be the classical forced response with zero data at $s$:
$$q'=\frac{p}{m},\qquad p'=-m\omega^{2}q+f,\qquad q(s)=p(s)=0 .$$
Then for every $z\in\mathbb C$ and $s,t\in[a,b]$, with $\langle A\rangle(t):=\langle AU(t,s)\Psi_{z},U(t,s)\Psi_{z}\rangle$:

(a) *Exact classical mean position and momentum.*
$$\langle Q\rangle(t)=\sqrt2\,\ell\operatorname{Re}\bigl(ze^{-i\omega(t-s)}\bigr)+q(t;s),\qquad \langle P\rangle(t)=\frac{\sqrt2\,\hbar}{\ell}\operatorname{Im}\bigl(ze^{-i\omega(t-s)}\bigr)+p(t;s);$$

(b) *Stationary fluctuations.* the preparation spreads of position and momentum in the evolved coherent preparation are
$$\Delta Q=\frac{\ell}{\sqrt2},\qquad \Delta P=\frac{\hbar}{\ell\sqrt2},\qquad \Delta Q\,\Delta P=\frac{\hbar}{2},$$
independent of $t$ and of $f$;

(c) *Undriven check.* if $f\equiv0$ then $q\equiv p\equiv0$ and the means reduce to the free classical rotation $\bigl(\sqrt2\ell\operatorname{Re}(ze^{-i\omega(t-s)}),\ \frac{\sqrt2\hbar}{\ell}\operatorname{Im}(ze^{-i\omega(t-s)})\bigr)$ of the coherent label;

(d) *status.* The statements are exact for the declared model and drive; no laboratory oscillator, drive source, damping or measurement record is asserted.

## Verification

**Given:** the declared oscillator model with parameters $m,\omega,\hbar$, the coherent family $\Psi_{z}$, the declared drive $f\in C^{1}([a,b];\mathbb R)$, the driven family $H(t)=H_{\mathrm{osc}}-f(t)Q$ and its strong propagator $U$; the classical zero-data response $(q,p)$; the Axiom of Countable Choice and the Axiom of Choice as the choice hypotheses of the page's mathematics.

[L1] **Explicit driven propagator.** With $\ell=\sqrt{\hbar/(m\omega)}$, the Weyl operator $D(q,p)\psi(x)=e^{ip(x-q/2)/\hbar}\psi(x-q)$ is unitary, preserves $Y$, and on $Y$ satisfies $D(q,p)^{*}QD(q,p)=Q+qI$ and $D(q,p)^{*}PD(q,p)=P+pI$; for $a\le s\le t\le b$ and the declared classical solution the family $U(t,s)=e^{iS(t,s)/\hbar}D(q(t,s),p(t,s))e^{-i(t-s)H_{\mathrm{osc}}/\hbar}$ with $S=\int_{s}^{t}f(r)q(r)/2\,dr$ is unitary, preserves $Y$, satisfies the strong Schroedinger equation $i\hbar\partial_{t}U(t,s)\psi=H(t)U(t,s)\psi$ for $\psi\in Y$, and is its unique solution ([[thm-nrqm-controlled-dynamics-explicit-unbounded-oscillator-propagator]] clauses (a), (b)); the family is admissible with the single domain $Y$ by [[thm-nrqm-controlled-dynamics-driven-oscillator-common-domain]] clause (c) and [[pthm-nrqm-driven-dynamics-common-domain-propagator]] clause (c).

[L2] **Coherent means, evolution and spreads.** For every $z$, $\Psi_z\in Y=D(N_\psi)$ by [[def-nrqm-oscillator-coherent-states]] clause (c); and for every real $\tau$: $e^{-i\tau H_{\mathrm{osc}}/\hbar}\Psi_{z}=e^{-i\omega\tau/2}\Psi_{ze^{-i\omega\tau}}$; the preparation means are $\langle Q\rangle_{w}=\sqrt2\ell\operatorname{Re}w$, $\langle P\rangle_{w}=\frac{\sqrt2\hbar}{\ell}\operatorname{Im}w$ for every $w\in\mathbb C$; and the spreads are $\Delta_{\Psi_{w}}Q=\ell/\sqrt2$, $\Delta_{\Psi_{w}}P=\hbar/(\ell\sqrt2)$ with product $\hbar/2$ ([[pthm-nrqm-oscillator-coherent-state-evolution]] clauses (a), (b), (c); [[pthm-nrqm-oscillator-coherent-state-fluctuations]] clauses (a), (b); [[def-nrqm-oscillator-coherent-states]] clauses (b), (c)).

[L3] **Readings.** The means and spreads are those of the assigned sharp observables $(Q,\mathrm m)$, $(P,\mathrm{kg\,m\,s^{-1}})$ in the evolved pure preparation of the unit vector $U(t,s)\Psi_{z}$ in the reading of P2 ([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a), (b), (e); [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]; [[post-nrqm-framework-state-and-composition]]; [[post-nrqm-framework-observable-and-probability]]; [[def-nrqm-framework-quantities-and-units]]); $U(t,s)$ is unitary so $U(t,s)\Psi_{z}$ is unit.

**Proof technique:** direct; write the driven propagator as phase times displacement times free evolution, then use the conjugation identities of the displacement and the free coherent formulas.

**Given:** the data of the Example and [L1]-[L3].

1.1 [Free coherent rotation] By [L2] with $\tau=t-s$ and $w=z$: $\Phi:=e^{-i\tau H_{\mathrm{osc}}/\hbar}\Psi_{z}=e^{-i\omega\tau/2}\Psi_{z(\tau)}$ with $z(\tau)=ze^{-i\omega\tau}$; hence $\langle Q\Phi,\Phi\rangle=\sqrt2\ell\operatorname{Re}z(\tau)$ and $\langle P\Phi,\Phi\rangle=\frac{\sqrt2\hbar}{\ell}\operatorname{Im}z(\tau)$, while $\|(Q-\langle Q\rangle I)\Phi\|^{2}=\ell^{2}/2$ and $\|(P-\langle P\rangle I)\Phi\|^{2}=\hbar^{2}/(2\ell^{2})$. [L2, algebra]

1.2 [Displacement shifts the means, not the spreads] Let $\Phi\in Y$ be unit and let $q,p\in\mathbb R$; $D:=D(q,p)$ is unitary and preserves $Y$, and $D^{*}QD=Q+qI$, $D^{*}PD=P+pI$ on $Y$ by [L1], so $$\langle QD\Phi,D\Phi\rangle=\langle D^{*}QD\Phi,\Phi\rangle=\langle Q\Phi,\Phi\rangle+q,\qquad \langle PD\Phi,D\Phi\rangle=\langle P\Phi,\Phi\rangle+p,$$ and unitarity gives $\|QD\Phi-\langle QD\Phi,D\Phi\rangle D\Phi\|=\|(Q-\langle Q\Phi,\Phi\rangle I)\Phi\|$, so the spreads of $D\Phi$ equal those of $\Phi$. [L1, L3, algebra]

1.3 [Both time orientations] For all $s,t\in[a,b]$ use oriented integrals $q(t;s)=(m\omega)^{-1}\int_s^t\sin(\omega(t-r))f(r)\,dr$ and $p(t;s)=\int_s^t\cos(\omega(t-r))f(r)\,dr$, where $\int_s^t=-\int_t^s$ for $t<s$. Differentiating gives the declared equations and zero data in either direction; the energy $p^2/(2m)+m\omega^2q^2/2$ of the difference of two solutions is constant and initially zero, proving uniqueness. Set $S(t,s)=\int_s^t f(r)q(r;s)/2\,dr$ and $W(t,s)=e^{iS(t,s)/\hbar}D(q(t;s),p(t;s))e^{-i(t-s)H_{\mathrm{osc}}/\hbar}$. The displacement identities of [L1] apply along every real $C^1$ trajectory, and the free group preserves $Y$; their product derivative on each $y\in Y$ is justified by expanding $D(t+h)F(t+h)y-D(t)F(t)y$ as $D(t+h)(F(t+h)-F(t))y+(D(t+h)-D(t))F(t)y$, using strong continuity and unit norm of $D$ and the fixed vector $F(t)y\in Y$. Writing $E=p^2/(2m)+m\omega^2q^2/2$, [L1] gives $i\hbar\partial_t W=[H_{\mathrm{osc}}+(-p'-m\omega^2q)Q+(q'-p/m)P+(E+(qp'-pq')/2-S')I]W$. The differential equations give the $Q,P$ coefficients $-f,0$ and $E+(qp'-pq')/2=fq/2=S'$, so $W$ solves the strong equation with $W(s,s)=I$ on either side of $s$. The common-domain uniqueness in [L1] (or the constant-norm difference argument) identifies $W=U$ on $Y$, then on $L^2$ by density and unitarity. This is also the oriented extension proved in [[thm-nrqm-controlled-dynamics-explicit-unbounded-oscillator-propagator]] Proof, the paragraph beginning “Let $v(t)$ and $w(t)$ be two $Y$-valued strong solutions”. For $a=b$, all integrals vanish and $W(a,a)=I$ directly. [L1, L2, given, algebra]

2.1 [Total response] By step 1.3, $U(t,s)\Psi_{z}=e^{iS/\hbar}D(q(t;s),p(t,s))\Phi$ with $\Phi$ as in step 1.1, and the phase $e^{iS/\hbar}$ is irrelevant to means and centered norms; step 1.2 applied to the unit vector $\Phi$ (unit by unitarity of the free evolution) and step 1.1 give $$\langle Q\rangle(t)=\sqrt2\ell\operatorname{Re}\bigl(ze^{-i\omega(t-s)}\bigr)+q(t;s),\qquad \langle P\rangle(t)=\frac{\sqrt2\hbar}{\ell}\operatorname{Im}\bigl(ze^{-i\omega(t-s)}\bigr)+p(t;s),$$ with spreads $\ell/\sqrt2$ and $\hbar/(\ell\sqrt2)$ and product $\hbar/2$. These are clauses (a) and (b). [step 1.1, step 1.2, step 1.3, L1, L2, L3, algebra]

3.1 [Undriven check and scope] For $f\equiv0$ the classical zero-data solution is $q\equiv p\equiv0$ (uniqueness of the linear initial-value problem), so clause (a) reduces to the free rotation, as in [L2]; the computation used only the declared model and its cited mathematics, and no laboratory, damping or measurement claim entered. These are clauses (c) and (d). [step 2.1, L1, L2, given] ∎

## Remarks

- **Why the response is exact.** The drive is linear in $Q$, so the displacement operator converts it into the classical forced oscillator without approximation; the quantum fluctuations ride along unchanged. This is a property of the quadratic model and is not asserted for other drives or potentials.
- **No classical limit is taken.** The means obey the classical equations exactly for every coherent preparation, including small $|z|$; the statement is a theorem of the declared linear model, not an approximation in a limiting parameter.
