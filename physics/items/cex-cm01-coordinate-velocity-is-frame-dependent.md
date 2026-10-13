---
id: cex-cm01-coordinate-velocity-is-frame-dependent
kind: counterexample
title: "Coordinate velocity is not an inertial-frame-independent quantity"
status: published
origin: session
domain: physics
dependency_level: 9
deps: [post-cm01-spacetime, post-cm01-frames, post-cm01-worldlines, def-cm01-velocity-acceleration, pthm-cm01-galilean-kinematics, ex-cm01-galilean-boost-of-a-free-motion]
dependency_roles:
  post-cm01-spacetime: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  pthm-cm01-galilean-kinematics: physical-result
  ex-cm01-galilean-boost-of-a-free-motion: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A refutation, on explicit data of the model, of the claim that the coordinate velocity of a worldline is independent of the inertial frame used to describe it: two inertial frames of the worked boost example give distinct coordinate velocities for one worldline. The item asserts no force law and no empirical claim; the correct frame-change law it reports is the velocity law of the cited physics theorem."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Section 1.2.1, printed page 5 (PDF page 11): boosts x' = x + v t change the coordinate description while the condition d^2x/dt^2 = 0 is preserved"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.1 point (v), chapter page 3 (PDF page 7): the definitions of the vectors r, v and a depend on the chosen reference frame and must be related between frames"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement refuted

In the model of [[post-cm01-spacetime]], [[post-cm01-frames]] and
[[post-cm01-worldlines]], the coordinate velocity of a worldline is
independent of the inertial frame in which it is computed: if $x$ and $\xi$
are the coordinate curves of the same worldline in two inertial frames with
time coordinates $t$ and $t'$, then

$$\xi'(t')=x'(t)\qquad\text{at corresponding times }t'=t+b.$$

## Facts & Assumptions

**Given:** The two inertial frames and the worldline of [[ex-cm01-galilean-boost-of-a-free-motion]]: the standard frame $F$ with coordinates $(t,x)$ of $A=\mathbb R^{4}$, $\tau=x^{0}$, $K=\{0\}\times\mathbb R^{3}$, the standard metric; the frame $F'$ with parameters $b=2$, $a=(0,3,0)$, $v=(\frac12,0,0)$, $R=I_{3}$; and the worldline with $F$-coordinate curve $x(s)=(1+\frac14s,\,2,\,0)$.

[L1] The transformation law between the two frames and the velocity law $\eta'=Rw+v$ for the primed coordinate curve $\eta(t')=x'(\gamma(t'-b))$, together with the definitions of coordinate velocity and acceleration ([[pthm-cm01-galilean-kinematics]], clauses 1-2; [[def-cm01-velocity-acceleration]]).

[L2] The worked verification of the frame data and of the primed coordinate curve $\eta(t')=(\frac34t'-\frac12,\,5,\,0)$ of the same worldline ([[ex-cm01-galilean-boost-of-a-free-motion]], steps 1.3 and 2.1 of its Verification).

## Counterexample

**Proof technique:** direct; compute the two coordinate velocities of one explicit worldline and exhibit their inequality.

1.1 In the frame $F$ the worldline has coordinate velocity $w=x'=(\frac14,0,0)$: differentiating $x(s)=(1+\frac14s,\,2,\,0)$ gives $w=(\frac14,0,0)$, independent of $s$. [L2, L1, algebra]

2.1 In the frame $F'$ the primed coordinate curve of the same worldline is $\eta(t')=(\frac34t'-\frac12,\,5,\,0)$, whose derivative is $\eta'(t')=(\frac34,0,0)$; this agrees with the velocity law $\eta'=Rw+v=(\frac14,0,0)+(\frac12,0,0)=(\frac34,0,0)$ of [L1]. [step 1.1, L2, L1, algebra]

3.1 The two coordinate velocities $\eta'=(\frac34,0,0)$ and $w=(\frac14,0,0)$ differ: their first components $\frac34\ne\frac14$. The refuted statement therefore fails for this worldline and this pair of inertial frames; the correct law is $w'=Rw+v$ of clause 2 of [[pthm-cm01-galilean-kinematics]], which is what step 2.1 verified, and the coordinate acceleration $a=0$ is preserved, in accordance with clause 3 of the same theorem. [step 1.1, step 2.1, L1, algebra] ∎

## Remarks

- The refuted statement is the frame-independence of the coordinate velocity. It is distinct from the frame-independence of zero coordinate acceleration proved in [[pthm-cm01-galilean-kinematics]]: the boost adds the same constant $v$ to the velocity at every time and therefore could not change whether the acceleration vanishes, but it changes the velocity itself.

- The counterexample is kinematic and conditional on the frame data displayed; it makes no claim about the velocity of any physical body and uses no force law. A particle at rest in one inertial frame has the boost velocity as its coordinate velocity in the other, which is the content of the displayed inequality in the limiting case $w=0$.
