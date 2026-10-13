---
id: texp-em-classical-orbit-instability
kind: thought-experiment
title: "Conditional radius loss of a prescribed slowly orbiting charge in a reduced quasistatic model"
domain: physics
status: published
origin: pipeline
dependency_level: 22
deps: [pthm-em-larmor-nonrelativistic, post-em-lorentz-coupling, def-em-lab-geometry, def-em-si-conventions, thm-ftc-second-part, lem-derivative-of-a-power, thm-real-power-continuity-and-derivatives, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-interval, def-countable-choice]
dependency_roles:
  pthm-em-larmor-nonrelativistic: physical-result
  post-em-lorentz-coupling: physical-assumption
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  thm-ftc-second-part: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-interval: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Reduced quasistatic circular-orbit model with an adopted Larmor energy-balance premise (H): the radius ODE $r'=-A/r^{2}$, the cubic solution $r^{3}=r_{0}^{3}-3A(t-t_{0})$ and the formal finite-time collapse limit as a property of (H). Excluded: any claim that a physical orbit reaches the centre or an atom decays in finite time; coupled self-force dynamics; derivation of lifetimes; measurements, statistical models and every empirical claim."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (author-hosted 236-page PDF, title page dated Lent Term 2015)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "$\\S6.2.3$ printed pp. 147-149 ('An Application: Instability of Classical Matter'): the classical spiral/decay application of the Larmor formula, presented there as an incomplete classical picture; this item keeps the finite-time collapse as a property of the reduced model and records the breakdown of the low-speed premise."
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin (complete author-hosted HTML lecture notes, document dated 2006-02-02)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node50.html"
      locator: "Node 131 ('Radiation losses') of chapter 10: radiation loss and the decrease of orbital energy in the classical model, with the approximations being explicit in the source narrative."
---

## Statement

When invoking the cited point-source emitted-power theorem as an established interpretation, retain its Countable Choice premise ($\mathrm{AC}_\omega$, [[def-countable-choice]]). The reduced loss-rate formula in (H) below is independently adopted as a modelling hypothesis; the conditional finite-calculus orbit computation from (H) uses no choice.

Adopt the following idealized, hypothetical setup of a prescribed slowly orbiting charge; it is a thought experiment with explicit premises, not a reported measurement. (H) Let $m>0$ be an externally supplied rest mass and $q\ne0$ a charge parameter ([[def-em-si-conventions]], [[post-em-lorentz-coupling]]), let $\kappa>0$ carry J m, and let $J_t\subseteq\mathbb R$ be a nonempty open interval, $t_0\in J_t$, and $r:J_t\to(0,\infty)$ be $C^1$, with $r_0:=r(t_0)>0$. The reduced model assigns to each radius the circular-orbit values about a fixed laboratory centre ([[def-em-lab-geometry]]) for the attractive potential $V(r)=-\kappa/r$: the circular-orbit energy is $E_{\mathrm{orb}}(r)=-\kappa/(2r)$ and the circular orbit with speed $v$ satisfies $mv^{2}=\kappa/r$, with centripetal acceleration $a=\kappa/(mr^{2})$. These are instantaneous circular reference values, not the exact kinematics of a curve with varying radius. To specify the intended validity window, choose dimensionless bounds $0<\delta_v,\delta_a<1$ and require $v(t)/c\le\delta_v$ and $T_{\rm orb}(t)|r'(t)|/r(t)\le\delta_a$, where $v(t):=\sqrt{\kappa/(mr(t))}$ and $T_{\rm orb}(t):=2\pi r(t)/v(t)$; the second ratio measures fractional radius change in one reference period. Independently adopt that the electromagnetic energy emitted per unit time is instantaneously taken to be the Larmor value $q^{2}a(t)^{2}/(6\pi\varepsilon_0c^{3})$ of [[pthm-em-larmor-nonrelativistic]] evaluated at the instantaneous centripetal acceleration, so that the adopted energy balance of the reduced model reads

$$\frac{d}{dt}E_{\mathrm{orb}}(r(t))=-\frac{q^{2}a(t)^{2}}{6\pi\varepsilon_0c^{3}}.$$

Then, with $A:=q^{2}\kappa/(3\pi\varepsilon_0m^{2}c^{3})>0$:

(a) the reduced model implies $r'(t)=-A/r(t)^{2}$ for all $t$ where the model applies, and the circular orbit radius in the reduced model obeys $$r(t)^{3}=r_{0}^{3}-3A(t-t_{0})$$ on any interval containing $t_0$ on which $r>0$;

(b) $r$ is strictly decreasing on $J_t$. The scalar balance ODE, considered without the validity-window inequalities, has the unique maximal positive continuation $\widehat r(t):=(r_0^3-3A(t-t_0))^{1/3}$ on $(-\infty,t_*)$, where $t_*:=t_0+r_0^3/(3A)$. It restricts to $r$ on $J_t$ and satisfies $\widehat r(t)\downarrow0$ as $t\uparrow t_*$; assigning zero at $t_*$ is only a continuous endpoint extension, not a positive-radius solution;

(c) [Scope and qualifications] the deduction is conditional on (H). The low-speed premise $v^{2}=\kappa/(mr)\ll c^{2}$ necessarily fails as $r\to0$, so the model's own hypotheses break down near the collapse time and the computation is not a proof that a physical orbit reaches $r=0$; it is not a derivation of atomic lifetimes, not a coupled point-particle self-force calculation (that dynamics is not available in this framework), and it supplies no empirical evidence. The reduced-model finite-time collapse is retained as a mathematical property of (H), while all conclusions about nature remain conditional on (H) and on its regime of validity. No measurement, dataset, statistical model or uncertainty is introduced.

## Facts & Assumptions

**Given:** the hypothetical setup (H), including the $C^1$ map $r:J_t\to(0,\infty)$ on a nonempty open time interval, $t_0\in J_t$ and $r_0=r(t_0)>0$: external parameters $m>0$, $q\ne0$, $\kappa>0$; a circular orbit of radius $r(t)>0$ about a fixed centre in the laboratory chart with $E_{\mathrm{orb}}(r)=-\kappa/(2r)$, $mv^{2}=\kappa/r$ and centripetal acceleration $a=\kappa/(mr^{2})$; the adopted energy balance $\frac{d}{dt}E_{\mathrm{orb}}(r(t))=-\frac{q^{2}a(t)^{2}}{6\pi\varepsilon_0c^{3}}$; $A:=q^{2}\kappa/(3\pi\varepsilon_0m^{2}c^{3})>0$; $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] Units and model reading: the parameters $m,q$ carry the SI meanings of [[def-em-si-conventions]] and [[post-em-lorentz-coupling]], while $\kappa$ has the independently declared unit J m, and the orbit is read in the laboratory chart of [[def-em-lab-geometry]]. ([[def-em-si-conventions]], [[post-em-lorentz-coupling]], [[def-em-lab-geometry]])

[F2] The Larmor value $q^{2}a^{2}/(6\pi\varepsilon_0c^{3})$ of [[pthm-em-larmor-nonrelativistic]] is the exact instantaneous-rest emitted power of the point-source model; in (H) it is adopted as the instantaneous loss rate of the reduced model, an additional modelling assumption. ([[pthm-em-larmor-nonrelativistic]])

[F3] One-variable calculus on intervals: the power rule for $u\mapsto u^{n}$ and the chain rule, the algebra of derivatives, the fundamental theorem for a continuous derivative, and the interval conventions of [[def-interval]]. ([[lem-derivative-of-a-power]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-real-power-continuity-and-derivatives]], [[thm-ftc-second-part]], [[def-interval]])

## Proof

**Proof technique:** direct conditional computation from (H); differentiate the orbital energy along the prescribed radius, substitute the circular-orbit acceleration, integrate the resulting ODE, and read off the finite-time collapse with its scope qualifications.

1.1 The radius ODE (a, first part). Along $t\mapsto r(t)$, the orbital energy satisfies $\frac{d}{dt}E_{\mathrm{orb}}(r(t))=\frac{d}{dt}\bigl(-\frac{\kappa}{2r(t)}\bigr)=\frac{\kappa}{2}\frac{r'(t)}{r(t)^{2}}$ by the power rule and the chain rule [F3]. Equating this to the adopted balance in (H), $\frac{\kappa r'}{2r^{2}}=-\frac{q^{2}a^{2}}{6\pi\varepsilon_{0}c^{3}}$, and substituting the centripetal acceleration $a=\kappa/(mr^{2})$ gives $\frac{\kappa r'}{2r^{2}}=-\frac{q^{2}\kappa^{2}}{6\pi\varepsilon_{0}c^{3}m^{2}r^{4}}$, hence $r'=-\frac{q^{2}\kappa}{3\pi\varepsilon_{0}m^{2}c^{3}r^{2}}=-\frac{A}{r^{2}}$, which is the displayed ODE; here $\kappa>0$ and $r>0$ legitimize the divisions [F1]. [given, F1, F3, algebra]

2.1 The cubic (a, second part). Multiplying the ODE of step 1.1 by $3r^{2}$ gives $\frac{d}{dt}\bigl(r(t)^{3}\bigr)=3r^{2}r'=-3A$, a constant right-hand side; applying the fundamental theorem on any interval containing $t_0$ on which $r>0$ [F3] yields $r(t)^{3}-r(t_{0})^{3}=-3A(t-t_{0})$, that is the displayed cubic. Conversely, differentiating the cubic on that interval recovers the ODE, so the two descriptions are equivalent within the reduced model. This is (a). [step 1.1, F3, algebra]

3.1 Monotone decrease and formal maximal continuation (b). Since $A>0$ and $r>0$, $r'=-A/r^2<0$. For $t_1<t_2$ in $J_t$, step 2.1 gives $r(t_2)^3-r(t_1)^3=-3A(t_2-t_1)<0$, and positivity implies $r(t_2)<r(t_1)$. Put $g(t):=r_0^3-3A(t-t_0)$, which is positive exactly for $t<t_*:=t_0+r_0^3/(3A)$. The positive real-power function $\widehat r=g^{1/3}$ is $C^1$ on $(-\infty,t_*)$ by [F3] and has derivative $-Ag^{-2/3}=-A/\widehat r^2$. The cubic identity forces $J_t\subset(-\infty,t_*)$ and $r=\widehat r$ there: positive cubes are injective since $x^3-y^3=(x-y)(x^2+xy+y^2)$ and the second factor is positive. Every positive solution through $(t_0,r_0)$ satisfies the same cubic by step 2.1, so this is the unique maximal positive solution of the scalar balance ODE; it cannot extend positively across $t_*$ where $g=0$. As $t\uparrow t_*$, given $\varepsilon>0$, $0<g(t)<\varepsilon^3$ eventually, whence $0<\widehat r(t)<\varepsilon$. This formal limit belongs to the extended scalar ODE, not to an arbitrary original validity interval, and no negative radius or positive solution at $t_*$ is asserted. [step 2.1, F3, algebra]

4.1 Scope and qualifications (c). The deduction is conditional on (H) throughout: the balance is the adopted premise, and the Larmor expression is only the prescribed-source rest-event emitted power of [F2], converted into a mechanical loss rate solely by the assumption (H) and not by any derived equation of motion. The quantified low-speed bound $v/c\le\delta_v$ in (H) fails along the formal continuation as $r\to0$ because $v^{2}=\kappa/(mr)\to+\infty$ with $\kappa>0$, so the model's own regime of validity excludes the collapse point: $t_{*}$ is a formal finite-time limit of the reduced model, not the predicted time at which a physical orbit reaches the centre. No coupled self-force dynamics, no lifetime derivation, no measurement, dataset, statistical model or uncertainty is introduced, and nothing here contradicts a theorem: the scalar balance is an independent hypothesis, and the prescribed-field radiation theorems supply no mechanical balance or coupled motion law. This is (c), and with steps 1.1-3.1 it completes the conditional deduction from (H). [step 1.1, step 3.1, F1, F2, algebra] ∎
