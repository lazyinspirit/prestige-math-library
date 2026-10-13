---
id: ex-cm06-bead-on-a-rotating-wire
kind: example
title: "A bead on a uniformly rotating straight wire: the rheonomic ideal constraint, its reaction, and the work it performs"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [def-cm06-holonomic-constraint-model, post-cm06-ideal-reaction-law, pthm-cm06-multiplier-balance, pthm-cm06-rheonomic-power, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm-holonomic-constraint-and-ideal-reactions, def-cm03-centre-of-mass-and-momenta, def-cm03-potential-and-mechanical-energy, thm-sine-and-cosine-derivatives, def-sine-and-cosine-by-power-series, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-derivative-of-exponential, def-real-exponential-function-and-e, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval, cor-zero-derivative-implies-constant]
dependency_roles:
  def-cm06-holonomic-constraint-model: formulation-prerequisite
  post-cm06-ideal-reaction-law: physical-assumption
  pthm-cm06-multiplier-balance: physical-result
  pthm-cm06-rheonomic-power: physical-result
  post-cm02-force-superposition: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-holonomic-constraint-and-ideal-reactions: mathematical-premise
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  thm-sine-and-cosine-derivatives: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked model check of the rheonomic ideal-constraint branch: one label of mass m constrained without friction to a straight wire through the origin that rotates uniformly in a horizontal plane, under the declared uniform downward field; the verification exhibits the unique maximal constrained motion through consistent data, computes the multiplier and the reaction, verifies the reaction-power identity and the mechanical-energy balance, and shows on explicit model data that an ideal rheonomic constraint performs positive work. The example is a model computation with declared idealizations (frictionless bead, massless rigid wire, prescribed uniform rotation, uniform field with the wire supporting the weight); every number is a model value, not a measurement."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.5.1 'Bead on a Rotating Hoop', Eqs. (2.61)-(2.62), printed pages 26-27 (PDF pages 32-33): a time-dependent holonomic constraint realized by a bead threaded on a uniformly rotating hoop, with the explicit embedding and kinetic energy"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 2.1 and Fig. 2.1, chapter page 1: the bead on a rotating ring as a model with one degree of freedom, and Section 4.6, chapter pages 21-23: the same model described from the non-inertial frame with the inertial forces"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Sections 1.4-1.5, printed pages 19-25 (PDF pages 22-28): time-dependent constraints can do actual work despite zero virtual work of the ideal reaction"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Example

Declare a one-label model of the force branch of
[[post-cm02-force-superposition]] with $N=1$, mass $m>0$, time window
$I_{0}=\mathbb R$, configuration domain $Q=\mathbb R^{3}$ and force map
$$F:I_{0}\times Q\times\mathbb R^{3}\longrightarrow\mathbb R^{3},\qquad F(t,\mathbf x,\mathbf v):=(0,\,0,\,-mg),$$
where $[m]=\mu$ and $g>0$ has dimension $\ell\tau^{-2}$ (the uniform
downward field; conventions of [[def-cm01-units]]). Constrain the label,
without friction, to the straight wire through the origin that rotates in the
plane $z=0$ about the $z$-axis with constant angular speed $\Omega>0$, and to
that plane, by the regular holonomic-constraint datum
$$O:=\mathbb R\times\mathbb R^{3},\quad k:=2,\qquad G(t,x,y,z):=\bigl(-x\sin\Omega t+y\cos\Omega t,\ z\bigr)$$
of [[def-cm06-holonomic-constraint-model]], and adopt the ideal-reaction law
of [[post-cm06-ideal-reaction-law]]. Both components of $G$ have length
dimension $\ell$, and $[\Omega]=\tau^{-1}$.

Let $r_{0}>0$ be a length and $u_{0}\in\mathbb R$ the initial radial speed,
with $[r_{0}]=\ell$ and $[u_{0}]=\ell\tau^{-1}$. The initial data are
$$t_{0}:=0,\qquad x_{0}:=(r_{0},0,0),\qquad \mathbf v_{0}:=(u_{0},\Omega r_{0},0).$$
Then the constrained model with these data has the unique maximal constrained
motion
$$r(t):=Ae^{\Omega t}+Be^{-\Omega t},\qquad A:=\frac{r_{0}+u_{0}/\Omega}{2},\qquad B:=\frac{r_{0}-u_{0}/\Omega}{2},\qquad x(t):=r(t)\bigl(\cos\Omega t,\ \sin\Omega t,\ 0\bigr),$$
defined for all $t\in\mathbb R$, with multiplier, reaction and reaction power
$$\lambda(t)=\bigl(2m\Omega\,r'(t),\ mg\bigr),\qquad R(t)=2m\Omega\,r'(t)\,\bigl(-\sin\Omega t,\ \cos\Omega t,\ 0\bigr)+mg\,e_{3},\qquad R(t)\cdot x'(t)=2m\Omega^{2}r(t)r'(t),$$
kinetic energy $K(t)=\tfrac12m\bigl(r'(t)^{2}+\Omega^{2}r(t)^{2}\bigr)$ and
mechanical energy $E(t)=K(t)+mg\,z(t)=K(t)$ satisfying
$E'(t)=R(t)\cdot x'(t)=-\lambda(t)\cdot G_{t}(t,x(t))=2m\Omega^{2}r(t)r'(t)$;
the constraint is rheonomic, and the scleronomic conservation clause does not
apply. On the explicit model data
$$m=1\,\mathrm{kg},\quad \Omega=2\,\mathrm{s}^{-1},\quad r_{0}=1\,\mathrm m,\quad u_{0}=0\,\mathrm m\,\mathrm s^{-1},\quad g=10\,\mathrm m\,\mathrm s^{-2}$$
one has $r(t)=\bigl(e^{2t}+e^{-2t}\bigr)/2\ \mathrm m$,
$E(t)=e^{4t}+e^{-4t}\ \mathrm J$ and $E'(t)=4\bigl(e^{4t}-e^{-4t}\bigr)\ \mathrm W$;
at $t=\tfrac12\,\mathrm s$, $E=\bigl(e^{2}+e^{-2}\bigr)\ \mathrm J\approx7.524391\,\mathrm J$
and $E'=4\bigl(e^{2}-e^{-2}\bigr)\ \mathrm W\approx29.014883\ \mathrm W$, so the mechanical
energy has strictly increased from its initial value $E(0)=2\ \mathrm J$ by
the work of the ideal reaction. All values are model values under the
declared idealizations, not measurements.

## Facts & Assumptions

**Given:** The constants $m,g,\Omega,r_{0}>0$, the scalar initial radial speed $u_{0}\in\mathbb R$, the vector initial velocity $\mathbf v_{0}=(u_{0},\Omega r_{0},0)$, the model data of the Example, the datum $(O,2,G)$, and the curve $x(t)=r(t)(\cos\Omega t,\sin\Omega t,0)$ with $r$ as displayed.

[F1] The force branch and the mass operator: $F:I_{0}\times Q\times\mathbb R^{3}\to\mathbb R^{3}$ is the constant map $F(t,\mathbf x,\mathbf v)=(0,0,-mg)$, hence continuous, state-Lipschitz and of class $C^{1}$; the mass operator is $\mathsf M=mI_{3}$, symmetric positive definite ([[post-cm02-force-superposition]], [[def-cm01-configuration]]).

[F2] The holonomic-constraint branch ([[def-cm06-holonomic-constraint-model]]): $G$ is of class $C^{2}$ with $D_{x}G$ of rank $k$ on $\Sigma$; virtual displacements are $\ker D_{x}G(t,x)$; the datum is scleronomic exactly when there is $N\subseteq\mathbb R^{3N}$ with $\Sigma=\{(t,x)\in O:x\in N\}$, equivalently when $(t,x)\in\Sigma$ and $(t',x)\in O$ always imply $(t',x)\in\Sigma$, and then $G_{t}=0$ on $\Sigma$; a constrained motion satisfies $\mathsf Mx''=F+R$ with a continuous $R$.

[F3] The ideal-reaction law and the balance theorem ([[post-cm06-ideal-reaction-law]], [[pthm-cm06-multiplier-balance]]): along an ideal motion $R=D_{x}G^{\mathsf T}\lambda$ with the unique continuous multiplier; with $C=D_{x}G\mathsf M^{-1}D_{x}G^{\mathsf T}$ and $\Lambda$ of that theorem, the multiplier of a constrained motion is $\Lambda(t,x,x')$ and the constrained motions with consistent data are precisely the solutions of the resulting first-order system, which has a unique maximal solution through each consistent datum.

[F4] The rheonomic-power theorem ([[pthm-cm06-rheonomic-power]]): $R\cdot x'=-\lambda\cdot G_{t}$, and for a potential presentation $F_{i}=-\nabla_{x_{i}}U+d_{i}$, $E'=\partial_{t}U+\sum_{i}\langle\mathfrak d_{i},w_{i}\rangle-\lambda\cdot G_{t}$.

[F5] Trigonometric and exponential calculus: the derivatives of sine and cosine, the identity $\sin^{2}+\cos^{2}=1$, the derivative of the exponential, the chain rule, the algebra of derivatives, and the elementary antiderivative facts used for the explicit solution ([[def-sine-and-cosine-by-power-series]], [[thm-sine-and-cosine-derivatives]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[def-real-exponential-function-and-e]], [[thm-derivative-of-exponential]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]]).

[F6] Kinetic and mechanical energy of a one-label curve family and the potential presentation $U(t,x,y,z)=mgz$, $d\equiv0$ ([[def-cm03-centre-of-mass-and-momenta]] clauses (b),(d), [[def-cm03-potential-and-mechanical-energy]] clauses (a),(b)); the Euclidean pairing ([[def-euclidean-inner-product]]); intervals and constants ([[def-interval]], [[cor-zero-derivative-implies-constant]]).

## Verification

**Proof technique:** direct; verify the constraint, the consistency of the data and the equation of motion on the explicit curve, then identify the multiplier, the reaction power and the energy balance, and evaluate the finite model data.

1.1 The datum is a regular holonomic-constraint datum with $k=2=3N-1$: $G$ is smooth, and its Jacobian is the constant-rank matrix $$D_{x}G(t,x,y,z)=\begin{pmatrix}-\sin\Omega t&\cos\Omega t&0\\ 0&0&1\end{pmatrix};$$ the two rows are independent for every $t$ because a combination $a(-\sin\Omega t,\cos\Omega t,0)+b(0,0,1)=(0,0,0)$ has $b=0$ from the third entry and then $a=0$ from the first two entries, since $(-\sin\Omega t,\cos\Omega t)\ne(0,0)$ by [F5]. The locus is $\Sigma=\{(t,r\cos\Omega t,r\sin\Omega t,0):t,r\in\mathbb R\}$, nonempty and contained in $I_{0}\times Q$, and the virtual displacements at $(t,x)$ are the one-dimensional space $\mathbb R(\cos\Omega t,\sin\Omega t,0)$ because $\delta\in\ker D_{x}G$ means $\delta_{z}=0$ and $-\delta_{x}\sin\Omega t+\delta_{y}\cos\Omega t=0$. Finally the datum is not scleronomic: $(0,(1,0,0))\in\Sigma$ because $G(0,1,0,0)=(0,0)$, while for $t_{1}:=\pi/(2\Omega)$ one has $G_{1}(t_{1},1,0,0)=-\sin(\pi/2)=-1\ne0$, so $(t_{1},(1,0,0))\in O=\mathbb R\times\mathbb R^{3}$ but $(t_{1},(1,0,0))\notin\Sigma$; by the membership form of [F2] the datum is rheonomic. [F1, F2, F5, algebra]

1.2 Consistency of the data: $G(0,x_{0})=(0,0)$ and, with the declared vector $\mathbf v_{0}=(u_{0},\Omega r_{0},0)$, $$G_{t}(0,x_{0})+D_{x}G(0,x_{0})\mathbf v_{0}=(-\Omega r_{0},0)+(\Omega r_{0},0)=(0,0).$$ Thus $(0,x_{0},\mathbf v_{0})$ is consistent. [F2, given, algebra]

2.1 The curve $x$ is a constrained motion with the stated multiplier: for $r(t)=Ae^{\Omega t}+Be^{-\Omega t}$ one has $r''=\Omega^{2}r$ by [F5], and the displayed $x$ is $C^{\infty}$ with $$x'=r'(\cos\Omega t,\sin\Omega t,0)+r\Omega(-\sin\Omega t,\cos\Omega t,0),\qquad x''=(r''-\Omega^{2}r)(\cos\Omega t,\sin\Omega t,0)+2\Omega r'(-\sin\Omega t,\cos\Omega t,0)=2\Omega r'(-\sin\Omega t,\cos\Omega t,0).$$ Moreover $G(t,x(t))=(-r\cos\Omega t\sin\Omega t+r\sin\Omega t\cos\Omega t,\,0)=(0,0)$, and $G_{t}(t,x(t))+D_{x}G(t,x(t))x'(t)=(-\Omega r,0)+(r\Omega,0)=(0,0)$, so $x$ is a constrained curve family with permitted velocity. With $\lambda(t):=(2m\Omega r'(t),mg)$, the reaction $R:=D_{x}G^{\mathsf T}\lambda$ is $2m\Omega r'(-\sin\Omega t,\cos\Omega t,0)+mg\,e_{3}$, and $F+D_{x}G^{\mathsf T}\lambda=(0,0,-mg)+2m\Omega r'(-\sin\Omega t,\cos\Omega t,0)+(0,0,mg)=m\bigl(2\Omega r'(-\sin\Omega t,\cos\Omega t,0)\bigr)=m\,x''=\mathsf Mx''$; since $R=D_{x}G^{\mathsf T}\lambda$ annihilates $\ker D_{x}G$ by [F3], the reaction is ideal and $x$ is a constrained motion of the model with reaction $R$. [F1, F2, F3, F5, step 1.1, algebra]

3.1 The multiplier of step 2.1 is the multiplier $\Lambda$ of the balance theorem and the motion is the unique maximal one: here $C=D_{x}G\,\mathsf M^{-1}D_{x}G^{\mathsf T}=(1/m)I_{2}$ because the two rows of $D_{x}G$ are orthonormal, $D_{x}G\,\mathsf M^{-1}F=(1/m)(0,-mg)=(0,-g)$, $G_{tt}=(-\Omega^{2}G_{1},0)=(0,0)$ along the motion, $2G_{tq}[x']=\bigl(-2\Omega(\cos\Omega t\,x_1'+\sin\Omega t\,x_2'),0\bigr)=(-2\Omega r',0)$ and $G_{qq}[x',x']=0$; hence $\Lambda=-C^{-1}\bigl[(0,-g)+0+(-2\Omega r',0)+0\bigr]=(2m\Omega r',mg)=\lambda$, so by [F3] clause 1 the multiplier of the motion is exactly $\lambda$. Here $O^{\prime}=O=I_{0}\times Q$, $G$ is smooth with rank $2$ throughout $O$ by step 1.1, and $F$ is $C^{1}$ by [F1], so all hypotheses of [F3] hold. The data of step 1.2 are consistent, the curve solves its first-order system, and a solution defined on all of $\mathbb R$ is the maximal solution through its datum by uniqueness. [F1, F3, step 1.1, step 1.2, step 2.1, algebra]

4.1 Reaction power and energy balance: on the motion, $e_{3}\cdot x'=0$ and $(-\sin\Omega t,\cos\Omega t,0)\cdot x'=r\Omega$, so $R\cdot x'=2m\Omega r'\cdot r\Omega=2m\Omega^{2}rr'$, and $G_{t}(t,x(t))=(-\Omega r,0)$ gives $-\lambda\cdot G_{t}=-(2m\Omega r')(-\Omega r)=2m\Omega^{2}rr'$, in agreement with [F4] clause 1. Since $F=-\nabla U$ for $U(t,x,y,z)=mgz$ with residual forces zero and $\partial_{t}U=0$, [F4] clause 2 gives $E'=\partial_{t}U-\lambda\cdot G_{t}=2m\Omega^{2}rr'$. Independently $K'=m(r'r''+\Omega^{2}rr')=m(\Omega^{2}rr'+\Omega^{2}rr')=2m\Omega^{2}rr'$ by [F5], and $z\equiv0$, so $E'=K'=R\cdot x'$. Because the datum is rheonomic (step 1.1), clause 3 of [F4] is not available and the mechanical energy is not asserted constant. [F4, F5, F6, step 1.1, step 3.1, algebra]

5.1 Finite model data: with $m=1$, $\Omega=2$, $r_{0}=1$ and $u_{0}=0$ one has $A=B=\tfrac12$, so $r(t)=\bigl(e^{2t}+e^{-2t}\bigr)/2$, $r'(t)=\bigl(e^{2t}-e^{-2t}\bigr)$, $K(t)=\tfrac12\bigl(r'^{2}+4r^{2}\bigr)=e^{4t}+e^{-4t}$ and $E(t)=K(t)\ \mathrm J$ because $z(t)=0$; then $E'(t)=4\bigl(e^{4t}-e^{-4t}\bigr)\ \mathrm W$, while the reaction power at the same time is $2m\Omega^{2}rr'=8r(t)r'(t)=\tfrac12\cdot8\bigl(e^{2t}+e^{-2t}\bigr)\bigl(e^{2t}-e^{-2t}\bigr)=4\bigl(e^{4t}-e^{-4t}\bigr)$, and the two agree. At $t=\tfrac12\,\mathrm s$ the values are $E=\bigl(e^{2}+e^{-2}\bigr)\approx7.524391\ \mathrm J$, $E'=4\bigl(e^{2}-e^{-2}\bigr)\approx29.014883\ \mathrm W>0$, and $E(0)=2\ \mathrm J$; the energy has increased by the work of the ideal reaction. [F5, F6, step 4.1, algebra]

6.1 Clauses (1)-(4) of the Example are proved: the datum is regular and rheonomic, the data are consistent, the displayed curve is the unique maximal constrained motion with the stated multiplier and reaction, the reaction power is $2m\Omega^{2}rr'$, the mechanical-energy balance holds with the rheonomic term and no other contribution, and the finite model data exhibit a strict energy increase. The construction is an idealization of a bead threaded on a smooth rigid wire whose rotation is prescribed: friction, wire flexibility, driving details and the ability of the wire to supply the computed reaction are not modelled, and the numbers are model values, not measurements of any apparatus. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, step 5.1] ∎
