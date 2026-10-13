---
id: pthm-cm09-forced-modal-response
kind: physics-theorem
title: "The forced coupled quadratic model: modal responses, resonance, and boundedness for positive definite stiffness off resonance"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [def-cm09-coupled-quadratic-model, pthm-cm09-free-modes-and-degeneracy, cor-cm-forced-modal-oscillator-response, thm-cm-forced-oscillator-sinusoidal-response, post-cm04-sinusoidal-drive-model, def-cm-oscillator-model-and-phase-system, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-linear-map, def-matrix-product-and-identity-matrix, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-ck-euclidean-maps-and-diffeomorphisms, def-interval]
dependency_roles:
  def-cm09-coupled-quadratic-model: formulation-prerequisite
  pthm-cm09-free-modes-and-degeneracy: physical-result
  cor-cm-forced-modal-oscillator-response: mathematical-premise
  thm-cm-forced-oscillator-sinusoidal-response: mathematical-premise
  post-cm04-sinusoidal-drive-model: formulation-prerequisite
  def-cm-oscillator-model-and-phase-system: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-linear-map: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: cases
physical_scope: "The forced coupled quadratic model M q'' + K q = J(t) with symmetric positive definite mass metric, symmetric non-negative stiffness and a prescribed continuous generalized force: decoupling into independent scalar forced modal equations, the unique motion for every datum given by the modal convolution formulas, and the sinusoidal case J(t)=J_0 cos(Omega t) with the modal steady responses of amplitude |psi_0i|/|lambda_i-Omega^2|, the resonant unbounded motions at Omega^2=lambda_i with nonvanishing modal force component, the zero-mode cases (bounded for Omega>0 and quadratic growth for Omega=0), the reduction of every motion to a particular response plus a free motion, unboundedness of every motion in the resonant cases, and boundedness of every motion for positive definite stiffness away from resonance. The result is a conditional statement about the declared model with a prescribed external generalized force in the modelling status of a drive; it asserts no back-reaction of the source, no measured response, no damping and no empirical claim."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.6, printed pages 40-45 (PDF pages 46-51): normal modes and the comparison of mode frequencies in the double pendulum and triatomic examples, with the drive-free mode equations"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Chapter 6, Sections 6.1-6.2, Eqs. (6.1)-(6.21), chapter pages 1-6 (PDF pages 125-130): coupled oscillators, the normal-mode eigenproblem and the response of the modes to a periodic drive"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 3, Sections 3.1-3.2, printed pages 52-59 (PDF pages 55-62): the quadratic natural Lagrangian and the decoupled generalized eigenproblem"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---

## Statement

Use the fixed coordinate, time and energy units and numerical matrix convention of [[def-cm09-coupled-quadratic-model]]. Every displayed matrix identity and phase norm is in those numerical coordinates; physical positions, velocities, modal amplitudes, frequencies and energies are recovered by the stated fixed scale factors. This does not change the set of physical motions.

Adopt the coupled quadratic model of [[def-cm09-coupled-quadratic-model]] with
data $(M,K,J)$ in which $M$ is symmetric positive definite, $K$ is symmetric
and non-negative, $I_{0}\subseteq\mathbb R$ is an interval with nonempty
interior and $J:I_{0}\to\mathbb R^{n}$ is continuous; let
$O,\Lambda=\operatorname{diag}(\lambda_{1},\dots,\lambda_{n})$,
$\omega_{i}=\sqrt{\lambda_{i}}$ for $\lambda_{i}>0$ and the modal coordinates
$z=O^{\mathsf T}M^{1/2}q$ be the modal data of clause (e) of that definition,
and call $\psi:=O^{\mathsf T}M^{-1/2}J$ the **modal force**. Its physical unit is $a_*/t_*^2$; the modal initial velocity $\eta_i$ has unit $a_*/t_*$ and $\xi_i$ has unit $a_*$. Every convolution and particular-solution amplitude therefore reconstructs a modal coordinate in unit $a_*$. Fix
$t_{0}\in I_{0}$ and a datum $(q_{0},v_{0})$, and write
$\xi_{i}:=z_{i}(t_{0})$, $\eta_{i}:=z_{i}'(t_{0})$ for the modal data of the
motion. Then:

1. **Unique motion and modal convolution.** There is exactly one motion
$q:I_{0}\to\mathbb R^{n}$ with that datum; it is $q=M^{-1/2}Oz$ with

$$z_{i}(t)=\xi_{i}\cos\bigl(\omega_{i}(t-t_{0})\bigr)+\frac{\eta_{i}}{\omega_{i}}\sin\bigl(\omega_{i}(t-t_{0})\bigr)+\frac{1}{\omega_{i}}\int_{t_{0}}^{t}\sin\bigl(\omega_{i}(t-s)\bigr)\psi_{i}(s)\,ds\quad(\lambda_{i}>0),$$

$$z_{i}(t)=\xi_{i}+\eta_{i}(t-t_{0})+\int_{t_{0}}^{t}(t-s)\psi_{i}(s)\,ds\quad(\lambda_{i}=0).$$

2. **Sinusoidal or constant generalized force.** Suppose $I_{0}=\mathbb R$ and
$J(t)=J_{0}\cos(\Omega t)$ with $J_{0}\in\mathbb R^{n}$ and $\Omega\ge0$, so
that $\psi(t)=\psi_{0}\cos(\Omega t)$ with
$\psi_{0}=O^{\mathsf T}M^{-1/2}J_{0}$. Then for each index $i$:
   (a) if $\lambda_{i}>0$ and $\Omega^{2}\ne\lambda_{i}$, then
   $z_{i}^{\mathrm{p}}(t):=\psi_{0,i}\cos(\Omega t)/(\lambda_{i}-\Omega^{2})$
   solves $z_{i}''+\lambda_{i}z_{i}=\psi_{0,i}\cos(\Omega t)$ on $\mathbb R$,
   with amplitude $|\psi_{0,i}|/|\lambda_{i}-\Omega^{2}|$;
   (b) if $\lambda_{i}>0$ and $\Omega^{2}=\lambda_{i}$, then
   $z_{i}^{\mathrm{p}}(t):=\psi_{0,i}\,t\sin(\omega_{i}t)/(2\omega_{i})$
   solves that equation and is unbounded on $[0,\infty)$ when
   $\psi_{0,i}\ne0$;
   (c) if $\lambda_{i}=0$ and $\Omega>0$, then
   $z_{i}^{\mathrm{p}}(t):=-\psi_{0,i}\cos(\Omega t)/\Omega^{2}$ solves
   $z_{i}''=\psi_{0,i}\cos(\Omega t)$ and is bounded; if $\lambda_{i}=0$ and
   $\Omega=0$, then $z_{i}^{\mathrm{p}}(t):=\psi_{0,i}t^{2}/2$ solves
   $z_{i}''=\psi_{0,i}$ and is unbounded on $[0,\infty)$ when
   $\psi_{0,i}\ne0$.
3. **Reduction, resonance and boundedness.** In every case of clause 2 the
modal particular functions $z_{i}^{\mathrm{p}}$ combine into the particular
motion $q^{\mathrm{p}}:=M^{-1/2}Oz^{\mathrm{p}}$ of the model, and every
motion of the model on $\mathbb R$ is $q=q^{\mathrm{p}}+q^{\mathrm{h}}$ with
$q^{\mathrm{h}}$ a motion of the free model of
[[def-cm09-coupled-quadratic-model]]. Consequently:
   (a) **resonance.** If some index $i$ has $\psi_{0,i}\ne0$ and either
   $\lambda_{i}>0$ with $\Omega^{2}=\lambda_{i}$, or $\lambda_{i}=0$ with
   $\Omega=0$, then every motion of the model is unbounded on $[0,\infty)$;
   (b) **boundedness.** If $K$ is positive definite and no index $i$ with
   $\psi_{0,i}\ne0$ satisfies $\Omega^{2}=\lambda_{i}$, then every motion of
   the model is bounded on $[0,\infty)$.
   The resonant drive angular frequencies are exactly the values
   $\Omega=\sqrt{\lambda_{i}}$ with $\lambda_{i}>0$ and $\psi_{0,i}\ne0$,
   together with $\Omega=0$ when some index with $\lambda_{i}=0$ has
   $\psi_{0,i}\ne0$.

The generalized force is prescribed external data. For $\Omega>0$ this is
the sinusoidal-drive formulation of [[post-cm04-sinusoidal-drive-model]]; for
$\Omega=0$ it is the constant-force case allowed by clause (b) of
[[def-cm09-coupled-quadratic-model]], whose $J$ is any continuous prescribed
generalized force. In both cases the source is not modelled dynamically, and
no back-reaction, damping, measured response or empirical value is asserted.

## Facts & Assumptions

**Given:** The data $(M,K,J)$ of the statement, the modal data $M^{1/2},M^{-1/2},O,\Lambda$ and modal coordinates $z$, the modal force $\psi=O^{\mathsf T}M^{-1/2}J$, the time $t_{0}$, the datum $(q_{0},v_{0})$ and, in clauses 2 and 3, $J(t)=J_{0}\cos(\Omega t)$ with $\psi_{0}=O^{\mathsf T}M^{-1/2}J_{0}$.

[F1] Forced modal decoupling and convolution ([[cor-cm-forced-modal-oscillator-response]] clauses 1-3): $q$ solves $Mq''+Kq=\varphi$ on $I_{0}$ if and only if $z=O^{\mathsf T}M^{1/2}q$ solves $z_{i}''+\lambda_{i}z_{i}=\psi_{i}$ for all $i$ with $\psi=O^{\mathsf T}M^{-1/2}\varphi$; the unique scalar solution with data $(\xi_{i},\eta_{i})$ at $t_{0}$ is the displayed homogeneous solution plus the convolution integrals with kernel $\sin(\omega_{i}u)/\omega_{i}$ for $\lambda_{i}>0$ and $u$ for $\lambda_{i}=0$; and consequently for every datum there is exactly one solution $q:I_{0}\to\mathbb R^{n}$ of the forced system with that datum.

[F2] Sinusoidal scalar response ([[thm-cm-forced-oscillator-sinusoidal-response]] clauses 1-2): for $m=1$, $c=0$, $k=\lambda_{i}>0$ and forcing $\psi_{0,i}\cos(\Omega t)$, if $\lambda_{i}-\Omega^{2}\ne0$ then $x_{\mathrm{p}}(t)=\psi_{0,i}\cos(\Omega t)/(\lambda_{i}-\Omega^{2})$ is a solution of amplitude $|\psi_{0,i}|/|\lambda_{i}-\Omega^{2}|$, and if $\Omega^{2}=\lambda_{i}$ then $x_{\mathrm{p}}(t)=\psi_{0,i}t\sin(\omega_{i}t)/(2\omega_{i})$ is a solution, unbounded on $[0,\infty)$ for $\psi_{0,i}\ne0$.

[F3] Prescribed generalized force ([[def-cm09-coupled-quadratic-model]] clause (b)): $J$ is a continuous force prescribed as model data. When $\Omega>0$, the cosine term has the restricted sinusoidal-drive status of [[post-cm04-sinusoidal-drive-model]] clause (ii); when $\Omega=0$, it is the constant-force specialization of the general $J$ data, not an application of that postulate's positive-frequency convention. In either case it depends on time alone and has no modelled back-reaction. The scalar equation with $m=1$, $c=0$, $k=\lambda_i$ is the oscillator model of [[def-cm-oscillator-model-and-phase-system]].

[F4] Free motion classification ([[pthm-cm09-free-modes-and-degeneracy]] clauses 2 and 5): the motions of the free model with symmetric positive definite $M$ and symmetric non-negative $K$ are exactly the modal superpositions with $\lambda_{i}>0$ oscillatory and $\lambda_{i}=0$ affine; if $K$ is positive definite every free motion is bounded on $\mathbb R$, and an affine component with nonzero slope is unbounded on $[0,\infty)$.

[F5] Calculus and linear algebra ([[thm-sine-and-cosine-derivatives]], [[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-matrix-product-and-identity-matrix]], [[def-euclidean-inner-product]], [[def-linear-map]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): sine and cosine are differentiated by $(\sin)'=\cos$, $(\cos)'=-\sin$; sums and products are differentiated by the algebra and chain rules; the map $z\mapsto q=M^{-1/2}Oz$ and its inverse $q\mapsto z=O^{\mathsf T}M^{1/2}q$ are linear bijections, so each is a finite linear combination of components with fixed coefficients and boundedness of $q$ is equivalent to boundedness of its modal coordinate $z$, and boundedness of $q'$ is equivalent to boundedness of $z'$, and $\psi_{0}=O^{\mathsf T}M^{-1/2}J_{0}$ by linearity.

## Proof

**Proof technique:** cases; transport the forced system to the decoupled scalar equations, compute the sinusoidal particular responses in the three modal cases, and read resonance and boundedness from the free classification.

1.1 Clause 1 is the instantiation of [F1] at the data of the statement: the hypotheses are $M$ symmetric positive definite, $K$ symmetric non-negative, $I_{0}$ an interval with nonempty interior and $\varphi=J$ continuous, so the unique motion with the datum is $q=M^{-1/2}Oz$ with the displayed scalar solutions and $\psi=O^{\mathsf T}M^{-1/2}J$. [F1, given]

1.2 Sinusoidal modal force: for $J(t)=J_{0}\cos(\Omega t)$ linearity of the map $J\mapsto O^{\mathsf T}M^{-1/2}J$ gives $\psi(t)=O^{\mathsf T}M^{-1/2}J_{0}\cos(\Omega t)=\psi_{0}\cos(\Omega t)$. [F5, given, algebra]

2.1 Scalar particular solutions: for $\lambda_{i}>0$ and $\Omega^{2}\ne\lambda_{i}$, [F2] applies with $k=\lambda_{i}$ and $f_{0}=\psi_{0,i}$ and supplies the solution $\psi_{0,i}\cos(\Omega t)/(\lambda_{i}-\Omega^{2})$ of amplitude $|\psi_{0,i}|/|\lambda_{i}-\Omega^{2}|$, which is (a); for $\lambda_{i}>0$ and $\Omega^{2}=\lambda_{i}$, [F2] supplies $\psi_{0,i}t\sin(\omega_{i}t)/(2\omega_{i})$ and its unboundedness, which is (b); for $\lambda_{i}=0$ direct differentiation by [F5] gives $(-\psi_{0,i}\cos(\Omega t)/\Omega^{2})''=\psi_{0,i}\cos(\Omega t)$ when $\Omega>0$ and $(\psi_{0,i}t^{2}/2)''=\psi_{0,i}$ when $\Omega=0$, with the stated boundedness and unboundedness; this is (c). [assume-case nonresonant, assume-case resonant, assume-case zero, F2, F5, step 1.2, algebra]

3.1 Reduction: let $q$ be a motion of the forced model; the particular functions of step 2.1 for all indices combine into $z^{\mathrm{p}}$ with $z_{i}^{\mathrm{p}}$ solving $z_{i}''+\lambda_{i}z_{i}=\psi_{i}$, and $q^{\mathrm{p}}:=M^{-1/2}Oz^{\mathrm{p}}$ is a motion by [F1]; since the system $Mq''+Kq=J$ is linear, the difference $q^{\mathrm{h}}:=q-q^{\mathrm{p}}$ solves the free system $Mq''+Kq=0$, hence is a free motion, and by [F4] its modal coordinates are the oscillatory or affine families of [[pthm-cm09-free-modes-and-degeneracy]] clause 2. [F1, F4, step 2.1, algebra]

4.1 Resonance: suppose some index $i$ has $\psi_{0,i}\ne0$ and is resonant in the sense of clause 3(a). If $\lambda_{i}>0$ and $\Omega^{2}=\lambda_{i}$, then the $i$-th modal coordinate of every motion is, by steps 3.1 and 1.1, the sum of the unbounded particular function $\psi_{0,i}t\sin(\omega_{i}t)/(2\omega_{i})$ of step 2.1(b) and a bounded homogeneous oscillatory function, hence is unbounded on $[0,\infty)$; if $\lambda_{i}=0$ and $\Omega=0$, it is the sum of the quadratic particular function $\psi_{0,i}t^{2}/2$ and an affine homogeneous function, hence also unbounded. Since the bijection $z\mapsto q=M^{-1/2}Oz$ with fixed coefficients preserves unboundedness by [F5], every motion of the model is unbounded; this is clause 3(a). [F4, F5, step 3.1, step 2.1, algebra]

4.2 Boundedness: suppose $K$ is positive definite, so every $\lambda_{i}>0$ by [[pthm-cm09-free-modes-and-degeneracy]] clause 5, and no index with $\psi_{0,i}\ne0$ has $\Omega^{2}=\lambda_{i}$. For every nonresonant index use the bounded particular function of step 2.1(a); if $\Omega^2=\lambda_i$, the hypothesis gives $\psi_{0,i}=0$ and the particular function of step 2.1(b) is identically zero and the homogeneous functions of step 3.1 are bounded oscillations by [F4]; hence every modal coordinate and its derivative are bounded on $[0,\infty)$, and by the fixed-coefficient bijection of [F5] every motion $(q,q')$ is bounded; this is clause 3(b). The list of resonant frequencies in clause 3 is the direct reading of the cases of step 2.1. [F4, F5, step 2.1, step 3.1, algebra]

5.1 Clauses 1-3 are proved. The generalized force is prescribed external data in the modelling status of [F3]: the model has no back-reaction, no damping, and the resonance statement is a property of the declared undamped forced model, not a measured response. [cases-exhaustive:all-modal-and-drive-cases, F3, step 1.1, step 4.1, step 4.2] ∎

## Remarks

- **Degenerate resonance.** If a modal stiffness is degenerate, the modal force components $\psi_{0,i}$ depend on the choice of diagonalization, but whether the drive resonates with the corresponding pure-$\lambda$ family does not: by clause 4 of [[pthm-cm09-free-modes-and-degeneracy]] the family is the intrinsic subspace $N_{\lambda}$, and the resonance condition is that the mass-metric projection of $M^{-1}J_{0}$ onto $N_{\lambda}$ be nonzero, a basis-independent statement.

- **Why the zero mode is special.** A zero modal stiffness means the potential of the quadratic model has a flat direction to second order; a constant generalized force component along such a direction produces quadratic growth in time, the degenerate analogue of resonance, and no oscillation at all is present in that direction.
