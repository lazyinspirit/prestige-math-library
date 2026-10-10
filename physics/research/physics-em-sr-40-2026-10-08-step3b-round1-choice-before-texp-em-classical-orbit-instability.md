---
id: texp-em-classical-orbit-instability
kind: thought-experiment
title: "Conditional radius loss of a prescribed slowly orbiting charge in a reduced quasistatic model"
domain: physics
status: draft
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
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 author-hosted revision, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "$\\S6.2.3$ printed pp. 147-149 ('An Application: Instability of Classical Matter'): the classical spiral/decay application of the Larmor formula, presented there as an incomplete classical picture; this item keeps the finite-time collapse as a property of the reduced model and records the breakdown of the low-speed premise."
    - title: "R. Fitzpatrick, Classical Electromagnetism: An intermediate level course, University of Texas at Austin (complete author-hosted HTML lecture notes, document dated 2006-02-02)"
      url: "https://farside.ph.utexas.edu/teaching/em/lectures/node50.html"
      locator: "Node 131 ('Radiation losses') of chapter 10: radiation loss and the decrease of orbital energy in the classical model, with the approximations being explicit in the source narrative."
---

## Statement

Adopt the following idealized, hypothetical setup of a prescribed slowly orbiting charge; it is a thought experiment with explicit premises, not a reported measurement. (H) Let $m>0$ be an externally supplied rest mass and $q\ne0$ a charge parameter ([[def-em-si-conventions]], [[post-em-lorentz-coupling]]), let $\kappa>0$, and let the particle move on a circle of radius $r(t)>0$ about a fixed centre in the laboratory chart ([[def-em-lab-geometry]]) so that the mechanical orbit is governed by the attractive potential $V(r)=-\kappa/r$: the circular-orbit energy is $E_{\mathrm{orb}}(r)=-\kappa/(2r)$ and the circular orbit with speed $v$ satisfies $mv^{2}=\kappa/r$, with centripetal acceleration $a=\kappa/(mr^{2})$. Assume the adiabatic separation of timescales: the mechanical parameters change on a timescale long compared with the orbital period, the speed is small compared with $c$, and the electromagnetic energy emitted per unit time is instantaneously taken to be the Larmor value $q^{2}a(t)^{2}/(6\pi\varepsilon_0c^{3})$ of [[pthm-em-larmor-nonrelativistic]] evaluated at the instantaneous centripetal acceleration, so that the adopted energy balance of the reduced model reads

$$\frac{d}{dt}E_{\mathrm{orb}}(r(t))=-\frac{q^{2}a(t)^{2}}{6\pi\varepsilon_0c^{3}}.$$

Then, with $A:=q^{2}\kappa/(3\pi\varepsilon_0m^{2}c^{3})>0$:

(a) the reduced model implies $r'(t)=-A/r(t)^{2}$ for all $t$ where the model applies, and the circular orbit radius in the reduced model obeys $$r(t)^{3}=r_{0}^{3}-3A(t-t_{0})$$ on any interval containing $t_0$ on which $r>0$;

(b) consequently $r$ is strictly decreasing, and the cubic reaches $r=0$ at the finite reduced-model time $t_{*}:=t_{0}+r_{0}^{3}/(3A)$, with $r(t)\downarrow0$ as $t\uparrow t_{*}$;

(c) [Scope and qualifications] the deduction is conditional on (H). The low-speed premise $v^{2}=\kappa/(mr)\ll c^{2}$ necessarily fails as $r\to0$, so the model's own hypotheses break down near the collapse time and the computation is not a proof that a physical orbit reaches $r=0$; it is not a derivation of atomic lifetimes, not a coupled point-particle self-force calculation (that dynamics is not available in this framework), and it supplies no empirical evidence. The reduced-model finite-time collapse is retained as a mathematical property of (H), while all conclusions about nature remain conditional on (H) and on its regime of validity. No measurement, dataset, statistical model or uncertainty is introduced.

## Facts & Assumptions

**Given:** the hypothetical setup (H): external parameters $m>0$, $q\ne0$, $\kappa>0$; a circular orbit of radius $r(t)>0$ about a fixed centre in the laboratory chart with $E_{\mathrm{orb}}(r)=-\kappa/(2r)$, $mv^{2}=\kappa/r$ and centripetal acceleration $a=\kappa/(mr^{2})$; the adopted energy balance $\frac{d}{dt}E_{\mathrm{orb}}(r(t))=-\frac{q^{2}a(t)^{2}}{6\pi\varepsilon_0c^{3}}$; $A:=q^{2}\kappa/(3\pi\varepsilon_0m^{2}c^{3})>0$; $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] Units and model reading: the parameters $m,q,\kappa$ carry the SI meanings of [[def-em-si-conventions]] and [[post-em-lorentz-coupling]], and the orbit is read in the laboratory chart of [[def-em-lab-geometry]]. ([[def-em-si-conventions]], [[post-em-lorentz-coupling]], [[def-em-lab-geometry]])

[F2] The Larmor value $q^{2}a^{2}/(6\pi\varepsilon_0c^{3})$ of [[pthm-em-larmor-nonrelativistic]] is the exact instantaneous-rest emitted power of the point-source model; in (H) it is adopted as the instantaneous loss rate of the reduced model, an additional modelling assumption. ([[pthm-em-larmor-nonrelativistic]])

[F3] One-variable calculus on intervals: the power rule for $u\mapsto u^{n}$ and the chain rule, the algebra of derivatives, the fundamental theorem for a continuous derivative, and the interval conventions of [[def-interval]]. ([[lem-derivative-of-a-power]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-real-power-continuity-and-derivatives]], [[thm-ftc-second-part]], [[def-interval]])

## Proof

**Proof technique:** direct conditional computation from (H); differentiate the orbital energy along the prescribed radius, substitute the circular-orbit acceleration, integrate the resulting ODE, and read off the finite-time collapse with its scope qualifications.

1.1 The radius ODE (a, first part). Along $t\mapsto r(t)$, the orbital energy satisfies $\frac{d}{dt}E_{\mathrm{orb}}(r(t))=\frac{d}{dt}\bigl(-\frac{\kappa}{2r(t)}\bigr)=\frac{\kappa}{2}\frac{r'(t)}{r(t)^{2}}$ by the power rule and the chain rule [F3]. Equating this to the adopted balance in (H), $\frac{\kappa r'}{2r^{2}}=-\frac{q^{2}a^{2}}{6\pi\varepsilon_{0}c^{3}}$, and substituting the centripetal acceleration $a=\kappa/(mr^{2})$ gives $\frac{\kappa r'}{2r^{2}}=-\frac{q^{2}\kappa^{2}}{6\pi\varepsilon_{0}c^{3}m^{2}r^{4}}$, hence $r'=-\frac{q^{2}\kappa}{3\pi\varepsilon_{0}m^{2}c^{3}r^{2}}=-\frac{A}{r^{2}}$, which is the displayed ODE; here $\kappa>0$ and $r>0$ legitimize the divisions [F1]. [given, F1, F3, algebra]

2.1 The cubic (a, second part). Multiplying the ODE of step 1.1 by $3r^{2}$ gives $\frac{d}{dt}\bigl(r(t)^{3}\bigr)=3r^{2}r'=-3A$, a constant right-hand side; applying the fundamental theorem on any interval containing $t_0$ on which $r>0$ [F3] yields $r(t)^{3}-r(t_{0})^{3}=-3A(t-t_{0})$, that is the displayed cubic. Conversely, differentiating the cubic on that interval recovers the ODE, so the two descriptions are equivalent within the reduced model. This is (a). [step 1.1, F3, algebra]

3.1 Monotone decrease and the finite collapse time (b). Since $A>0$ and $r>0$, the ODE gives $r'=-A/r^{2}<0$ wherever the model applies, so $r$ is strictly decreasing. From the cubic, $r(t)^{3}=r_{0}^{3}-3A(t-t_{0})>0$ exactly for $t<t_{*}:=t_{0}+r_{0}^{3}/(3A)$, and $r(t)^{3}\to0$ as $t\uparrow t_{*}$; since $r(t)>0$ is decreasing and its cube tends to $0$, given $\varepsilon>0$ the inequality $r(t)^{3}<\varepsilon^{3}$ holds for all $t$ close enough to $t_{*}$ from below [F3], so $r(t)<\varepsilon$ there and $r(t)\downarrow0$ as $t\uparrow t_{*}$. For $t>t_{*}$ the cubic expression is negative, which is recorded as the breakdown of the reduced model rather than as a negative radius. This is (b). [step 2.1, F3, algebra]

4.1 Scope and qualifications (c). The deduction is conditional on (H) throughout: the balance is the adopted premise, and the Larmor expression is only the prescribed-source rest-event emitted power of [F2], converted into a mechanical loss rate solely by the assumption (H) and not by any derived equation of motion. The low-speed premise of (H), $v^{2}=\kappa/(mr)\ll c^{2}$, fails as $r\to0$ because $v^{2}=\kappa/(mr)\to+\infty$ with $\kappa>0$, so the model's own regime of validity excludes the collapse point: $t_{*}$ is a formal finite-time limit of the reduced model, not the predicted time at which a physical orbit reaches the centre. No coupled self-force dynamics, no lifetime derivation, no measurement, dataset, statistical model or uncertainty is introduced, and nothing here contradicts a theorem: the reduced model lies outside the hypotheses of the point-field and emitted-power theorems precisely through its adopted mechanical balance. This is (c), and with steps 1.1-3.1 it completes the conditional deduction from (H). [step 1.1, step 3.1, F1, F2, algebra] ∎
