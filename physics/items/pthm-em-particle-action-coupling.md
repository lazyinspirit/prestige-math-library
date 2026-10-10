---
id: pthm-em-particle-action-coupling
kind: physics-theorem
title: "Relativistic prescribed-field particle action yields the Lorentz force"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: physics
dependency_level: 19
deps: [def-em-relativistic-worldlines-frames,
       pthm-em-relativistic-lorentz-force,
       post-em-stationary-action-model,
       lem-em-particle-curve-variation,
       def-em-field-action-definition,
       def-em-electromagnetic-tensor,
       def-em-sources,
       def-em-si-conventions,
       lem-em-antisymmetric-tensor-contraction,
       thm-sr-proper-time-and-observer-decomposition]
dependency_roles:
  def-em-relativistic-worldlines-frames: formulation-prerequisite
  pthm-em-relativistic-lorentz-force: physical-result
  post-em-stationary-action-model: physical-assumption
  lem-em-particle-curve-variation: mathematical-premise
  def-em-field-action-definition: formulation-prerequisite
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  lem-em-antisymmetric-tensor-contraction: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "Conditional statement about one massive charged particle on a future timelike C2 worldline in a prescribed external C2 four-potential: the fixed-endpoint stationarity of the particle functional is equivalent to the covariant four-force equation and to the adopted Lorentz coupling, with the coordinate force and power laws following. Excluded: self-field, radiation reaction, self-force, monopoles, zero or variable mass, coupled particle-field existence, trajectory approximation, and any empirical claim."
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "David Tong, Electromagnetism (University of Cambridge Part II Mathematical Tripos), Chapter 5, §5.5.1-§5.5.2"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro4.pdf"
      locator: "printed pp. 118-124, eqs. (5.35)-(5.41): particle action with coupling and the derivation of the Lorentz force"
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields (Course of Theoretical Physics vol. 2, English text, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§16 printed pp. 44-46, eqs. (16.1), (16.4) (action and Lagrangian for a charge in a given field; Gaussian units converted)"
    - title: "James Binney, Classical Fields (University of Oxford lecture course 2006-2007, complete 95-page notes)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/classf.pdf"
      locator: "§3.1 printed pp. 23-25, eqs. (3.2)-(3.6) (action and equation of motion for a charged particle in a given field)"
proof_strategy: direct
---

## Statement

The finite-interval Riemann particle-sector calculation is choice-free: the
field-sector Countable Choice convention of
[[def-em-field-action-definition]] is not used here. Let worldlines,
four-velocities and proper times be those of
[[def-em-relativistic-worldlines-frames]], let $F$ be the electromagnetic
two-form with the component and potential dictionary of
[[def-em-electromagnetic-tensor]], and let $m>0$ and $q\in\mathbb R$ be the
framework's external rest-mass and charge parameters ([[def-em-sources]] (a)).
Let $[a,b]$ be a nondegenerate compact interval, let $X:[a,b]\to A$ be a $C^2$
future timelike massive worldline (clause (a) of
[[def-em-relativistic-worldlines-frames]]), let $A_\mu$ be a $C^2$ covector
field - the prescribed external four-potential - on a neighbourhood of the
image of $X$, and let $S_{\rm pt}$ be the particle functional of clause (c) of
[[def-em-field-action-definition]], i.e. the functional
$-mc\int_a^b\sqrt{-\eta(\dot X,\dot X)}\,ds+q\int_a^bA_\mu(X)\dot X^\mu\,ds$ of
[[lem-em-particle-curve-variation]].

Then, under the adopted stationary-action model for the particle sector
([[post-em-stationary-action-model]] (ii)), for every fixed-endpoint $C^2$
variation $h$ with $h(a)=h(b)=0$ the curve $X+\varepsilon h$ is future
timelike for all sufficiently small $|\varepsilon|$, and the following are
equivalent: (i) $X$ is stationary for $S_{\rm pt}$ under all such variations;
(ii) $m\,dU_\nu/d\tau=qF_{\nu\mu}U^\mu$ on $[a,b]$, where $F=dA$ and $\tau$ is
the proper time of $X$; (iii) the four-force equation
$m\,dU/d\tau=q\,\Phi(U)$ of the framework's adopted covariant coupling
[[pthm-em-relativistic-lorentz-force]], where $\Phi$ is the raised-index field
operator $\eta(\Phi(u),w)=F(w,u)$. In particular the stationary-action
formulation of the particle sector is equivalent, for prescribed external
potentials, to the adopted Lorentz coupling; the coordinate equations
$\frac{dp}{dt}=q(E+v\times B)$ and
$\frac{d(\gamma mc^2)}{dt}=qE\cdot v$ of
[[pthm-em-relativistic-lorentz-force]] then hold wherever the laboratory
reading is $C^2$.

Scope: the potential, hence the field, is prescribed and external to the
particle; the particle's own field, radiation reaction and self-force are
excluded, as are magnetic monopoles, zero or variable mass, coupled
particle-field existence and any approximation of the trajectory over a time
interval. The equivalence is conditional on the adopted postulates and makes
no empirical claim.

## Facts & Assumptions

**Given:** A nondegenerate compact interval $[a,b]$; a $C^2$ future timelike
massive worldline $X:[a,b]\to A$ with four-velocity $U$ and proper time
$\tau$; a prescribed $C^2$ covector field $A_\mu$ on a neighbourhood of the
image of $X$; the rest-mass and charge parameters $m>0$, $q\in\mathbb R$; the
electromagnetic two-form and its potential and index dictionary; the particle
functional $S_{\rm pt}$ with its fixed-endpoint $C^2$ variations; and the
adopted particle-sector stationary-action principle.

[F1] The particle functional is
$S_{\rm pt}[X]=-mc\int_a^b\sqrt{-\eta(\dot X,\dot X)}\,ds+q\int_a^bA_\mu(X)\dot X^\mu\,ds$
on the declared class, with admissible variations the fixed-endpoint $C^2$
variations $h(a)=h(b)=0$ of [[lem-em-particle-curve-variation]]
([[def-em-field-action-definition]] (c)).

[F2] The curve-variation lemma states that for a $C^2$ future timelike curve
$X:[a,b]\to A$ and a $C^2$ covector field $A_\mu$ on a neighbourhood of its
image, for every fixed-endpoint $C^2$ variation the curve $X+\varepsilon h$
remains future timelike for all sufficiently small $|\varepsilon|$, and
stationarity of the displayed functional under all such variations is
equivalent to
$m\frac{dU_\nu}{d\tau}=qF_{\nu\mu}U^\mu$, $\frac{d\tau}{ds}=\frac{\sqrt{-\eta(\dot X,\dot X)}}c$,
$F=dA$, with the four-velocity $U$ and proper time $\tau$ of the
observer-decomposition theorem ([[lem-em-particle-curve-variation]]).

[F3] A massive worldline is a future timelike worldline of class $C^k$,
$k\ge1$; its four-velocity $U$ and four-acceleration $A$ satisfy
$\eta(U,U)=-c^2$ and $\eta(U,A)=0$ by the observer-decomposition theorem
([[def-em-relativistic-worldlines-frames]] (a)-(b)).

[F4] The observer-decomposition theorem states (clause (a)) that for a $C^1$
future timelike worldline with four-velocity $U$ one has
$\eta(U(s),U(s))=-c^2$ for every $s$
([[thm-sr-proper-time-and-observer-decomposition]]).

[F5] The antisymmetric-contraction lemma states that for a skew form $F$ on
the four-dimensional Minkowski vector space there is exactly one linear
$\Phi$ with $\eta(\Phi(u),w)=F(w,u)$, and that in the fixed basis
$\Phi(u)^\mu=\sum_{\alpha,\beta}\eta^{\mu\alpha}F_{\alpha\beta}u^\beta$
([[lem-em-antisymmetric-tensor-contraction]]).

[F6] The two-form definition states that the raised-index operator $\Phi$ of
the antisymmetric-contraction lemma satisfies
$\Phi(u)^\mu=\eta^{\mu\alpha}F_{\alpha\beta}u^\beta$, and that if a $C^1$
covector field satisfies $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$
then the recovered fields obey $E=-\nabla\varphi-\partial_tA$ and
$B=\operatorname{curl}A$ with $\varphi:=-cA_0$
([[def-em-electromagnetic-tensor]] (c)-(d)).

[F7] The framework takes a real charge parameter $q\in\mathbb R$ in coulombs
and a rest-mass parameter $m$ carrying the kilogram ([[def-em-sources]] (a),
[[def-em-si-conventions]] (c)).

[F8] The relativistic Lorentz-force theorem states that, for a future timelike
$C^2$ massive worldline in a prescribed $C^1$ field generated externally to
the particle, the adopted equation of motion
$m\frac{dU}{d\tau}=q\Phi(U)$, $\eta(\Phi(u),w)=F(w,u)$ implies, wherever the
worldline is $C^2$, the coordinate force and power laws
$\frac{dp}{dt}=q(E+v\times B)$ and
$\frac{d(\gamma mc^2)}{dt}=qE\cdot v$, with $p=m\gamma v$ and
$U=\gamma(c,v)$ ([[pthm-em-relativistic-lorentz-force]]).

[F9] The adopted particle-sector principle states that the motion is
dynamically admissible exactly when the worldline is stationary for the
particle functional under all fixed-endpoint $C^2$ variations
([[post-em-stationary-action-model]] (ii)).

## Proof

**Proof technique:** direct; verify the hypotheses of the curve-variation
lemma for the framework's data, transport its equivalence to the framework's
four-velocity and proper time, and identify the lowered coefficient equation
with the adopted raised-index coupling.

1.1 The data meet the hypotheses of [F2]: $[a,b]$ is a nondegenerate compact interval, $X$ is a $C^2$ future timelike curve by [F3] and the statement's class, and $A_\mu$ is $C^2$ on a neighbourhood of the image of $X$ by assumption; the functional of [F1] is literally the functional of [F2] in the framework's conventions. Hence for every fixed-endpoint $C^2$ variation $h$ the curve $X+\varepsilon h$ remains future timelike for all sufficiently small $|\varepsilon|$, and stationarity of $S_{\rm pt}$ under all such variations is equivalent to $m\frac{dU_\nu}{d\tau}=qF_{\nu\mu}U^\mu$ with the four-velocity $U$ and proper time $\tau$ supplied by the observer-decomposition theorem; this is a finite-interval Riemann calculation in ZF and consumes no field-sector choice convention. [given, F1, F2, F3]

2.1 The curve $X$ of step 1.1 is the framework's massive worldline by [F3] and the functional $S_{\rm pt}$ is the framework's particle functional by [F1]; the four-velocity $U$ and proper time $\tau$ occurring in the coefficient equation of [F2] are the four-velocity and proper-time parameter of that same curve, the objects to which [F2] refers through the observer-decomposition theorem, and they satisfy the framework's norm $\eta(U,U)=-c^2$ by [F4]. Hence condition (ii) is stated with the framework's $U$ and $\tau$, and step 1.1 proves (i)$\Leftrightarrow$(ii). [step 1.1, F1, F2, F3, F4]

3.1 Lowering the index in [F5], $(\Phi(U))_\nu=\eta_{\nu\mu}\Phi(U)^\mu=\eta_{\nu\mu}\eta^{\mu\alpha}F_{\alpha\beta}U^\beta=F_{\nu\beta}U^\beta=F_{\nu\mu}U^\mu$, and [F6] identifies this $\Phi$ and the potential relation $F=dA$ with the framework's two-form; since $u\mapsto\eta(u,\cdot)$ is injective (the form is nondegenerate), the component equation $m\,dU_\nu/d\tau=qF_{\nu\mu}U^\mu$ holds for every $\nu$ if and only if $m\,dU/d\tau=q\,\Phi(U)$ in $V$. Hence (ii)$\Leftrightarrow$(iii). [step 2.1, F5, F6, algebra]

4.1 Under the adopted coupling (iii), [F8] applies with the prescribed external field of [F6] and the $C^2$ worldline of the statement, so the coordinate force and power laws $\frac{dp}{dt}=q(E+v\times B)$ and $\frac{d(\gamma mc^2)}{dt}=qE\cdot v$ hold wherever the laboratory reading is $C^2$, with $p=m\gamma v$ and $U=\gamma(c,v)$ as recorded there. [step 3.1, F6, F8]

5.1 The equivalence (i)$\Leftrightarrow$(ii)$\Leftrightarrow$(iii) was obtained by instantiating the choice-free finite-interval curve lemma [F2], identifying the framework's worldline objects through [F3] and [F4], and lowering the index through [F5] and [F6]; the potential is prescribed and external, the particle's own field, radiation reaction and self-force are excluded, and the whole statement is conditional on the adopted stationary-action principle [F9] of the particle sector and on the adopted coupling [F8], with no empirical claim and no use of the field-sector Countable Choice convention. [given, step 4.1, F2, F7, F8, F9] ∎

## Source notes

The prescribed-field particle action and its reduction to the Lorentz force
are Tong §5.5.1-§5.5.2 (printed pp. 118-124), Landau–Lifshitz §16 and Binney
§3.1, each in its own conventions; the covariant functional, the fixed-endpoint
variation class and the resulting equation are restated here in the
framework's $(-,+,+,+)$ dictionary, and the exact coefficient implication is
supplied by the in-run mathematical curve-variation lemma rather than accepted
from the sources' informal boundary-term step.
