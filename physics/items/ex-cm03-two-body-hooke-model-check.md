---
id: ex-cm03-two-body-hooke-model-check
kind: example
title: "A two-body Hooke model with an exact circular relative motion: momentum, kinetic splitting, moving-origin angular momentum, energy conservation and the kinetic boost law checked on explicit data"
status: published
origin: session
domain: physics
dependency_level: 14
deps: [post-cm02-force-superposition, post-cm02-interactions, def-cm02-newtonian-flow, pthm-cm02-ivp, def-cm01-velocity-acceleration, def-cm01-units, def-cm03-centre-of-mass-and-momenta, pthm-cm03-centre-of-mass-and-kinetic-splitting, pthm-cm03-momentum-balance, pthm-cm03-angular-momentum-balance, pthm-cm03-work-energy, def-cm03-potential-and-mechanical-energy, pthm-cm03-energy-balance, pthm-cm03-frame-transformations, def-euclidean-inner-product, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, thm-sine-and-cosine-derivatives, thm-chain-rule, thm-algebra-of-derivatives, cor-trigonometric-parity-and-pythagorean-identity, def-derivative, def-vector-valued-derivative-and-integral, def-interval, lem-finite-sum-laws]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  post-cm02-interactions: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-ivp: physical-result
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  pthm-cm03-centre-of-mass-and-kinetic-splitting: physical-result
  pthm-cm03-momentum-balance: physical-result
  pthm-cm03-angular-momentum-balance: physical-result
  pthm-cm03-work-energy: physical-result
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  pthm-cm03-energy-balance: physical-result
  pthm-cm03-frame-transformations: physical-result
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  def-derivative: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked model check inside the two-body potential branch: for a declared Hooke pair potential with spring constant, mass, separation and centre-of-mass velocity data, the displayed circular relative motion is the unique maximal motion of the model, and along it the total momentum, centre-of-mass motion, kinetic splitting, angular momentum about fixed and moving reference points, mechanical energy and boosted kinetic energy take the values the balance theorems predict. The item asserts no measured value, models no physical spring and claims no empirical agreement."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 1.3.2-1.3.3, printed pages 8-9 (PDF pages 14-15): the two-body energy and momentum bookkeeping with a pair potential depending on the separation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 3.4, Eqs. (3.30)-(3.37), chapter pages 8-9 (PDF pages 40-41): the centre-of-mass and reduced-mass decomposition of the two-body kinetic energy"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Example

Fix the two-body model of [[post-cm02-interactions]] clause (iv) (the general
pair-potential example) with $N=2$, masses $m_{1}=m_{2}=m>0$, time window
$\mathbb R$, configuration domain $Q=\mathbb R^{6}$ (the potential below is
smooth everywhere, so no collision exclusion is needed), and the **Hooke pair
potential**
$$U(x_{1},x_{2}):=\frac12k\,\lVert x_{1}-x_{2}\rVert_{2}^{2},$$
with a declared **spring constant** $k>0$ of dimension $\mu\tau^{-2}$
([[def-cm01-units]]), so that $U$ has energy dimension. The force map is
$$F_{1}(x)=-k\,(x_{1}-x_{2}),\qquad F_{2}(x)=k\,(x_{1}-x_{2}),$$
the two negative gradients of $U$; it is linear in the positions and
independent of time and velocities, with
$\lVert F(x)-F(x')\rVert_{2}\le2k\lVert x-x'\rVert_{2}$, hence continuous and
state-locally Lipschitz with the uniform constant $2k$. The model therefore
satisfies the standing hypotheses of [[post-cm02-force-superposition]] clause
(iii), it has no external forces ($F_{i}^{\mathrm{ext}}\equiv0$), and its
pair force is central: $F_{12}=-k(x_{1}-x_{2})$ is parallel to
$x_{1}-x_{2}$. It presents its force map through the global potential $U$ in
the sense of [[def-cm03-potential-and-mechanical-energy]] clause (a).

Fix an oriented orthonormal triple $(e_{1},e_{2},e_{3})$ with
$e_{3}=e_{1}\times e_{2}$, a constant centre-of-mass velocity
$V\in\mathbb R^{3}$ of dimension $\ell\tau^{-1}$, and a length $R>0$,
and set $\omega:=\sqrt{2k/m}$ (dimension $\tau^{-1}$). Define
$$e(t):=\cos(\omega t)\,e_{1}+\sin(\omega t)\,e_{2},\qquad x_{1}(t):=Vt-\frac R2\,e(t),\qquad x_{2}(t):=Vt+\frac R2\,e(t)\qquad(t\in\mathbb R).$$
Then $x=(x_{1},x_{2})$ is the **unique maximal motion** of the model with the
datum $x_{1}(0)=-\frac R2e_{1}$, $x_{2}(0)=\frac R2e_{1}$,
$\dot x_{1}(0)=V-\frac R2\omega e_{2}$, $\dot x_{2}(0)=V+\frac R2\omega e_{2}$,
and along it:

1. the total momentum is $P=2mV$, constant, and the centre of mass is
   $X(t)=Vt$ with $V_{\mathrm{cm}}=V$;
2. the kinetic energy is $K=m\lVert V\rVert_{2}^{2}+\frac14mR^{2}\omega^{2}$,
   and its centre-of-mass/relative splitting holds with reduced mass
   $\mu=m/2$ and relative coordinate $r=x_{1}-x_{2}$;
3. the angular momentum about the origin is
   $J_{0}=\frac12mR^{2}\omega\,e_{3}$, constant, while for the moving
   reference curve $o(t)=\mathbf Wt$ with a constant velocity
   $\mathbf W\in\mathbb R^{3}$ of dimension $\ell\tau^{-1}$ and
   $\mathbf W\perp V$ one has
   $J_{o}'=-2m(\mathbf W\times V)$, in agreement with the moving-origin
   correction; this correction is nonzero when both $\mathbf W$ and $V$ are
   nonzero;
4. the mechanical energy is $E=m\lVert V\rVert_{2}^{2}+kR^{2}$, constant, and
   the power identity $K'=\mathcal P$ holds with
   $\mathcal P$ equal to the negative time derivative of the potential
   energy $\frac12k\lVert r\rVert_{2}^{2}$;
5. under the Galilean change to the centre-of-mass frame ($b=0$, $a_{0}=0$,
   $R_{\mathrm{rot}}=I_{3}$, $v_{\mathrm{boost}}=-V$) the transformed
   quantities are $\tilde P=0$, $\tilde K=\frac12kR^{2}$ and
   $\tilde E=kR^{2}$, in agreement with
   [[pthm-cm03-frame-transformations]] clauses 2 and 5.

## Facts & Assumptions

**Given:** The model and data of the example: the Hooke pair model with $m,k>0$ on $Q=\mathbb R^{6}$, $\omega=\sqrt{2k/m}$, an oriented orthonormal triple with $e_{3}=e_{1}\times e_{2}$, a constant velocity $V\in\mathbb R^{3}$, a length $R>0$, the curves $e$, $x_{1}$, $x_{2}$, and the reference curve $o(t)=\mathbf Wt$ with constant velocity $\mathbf W\perp V$.

[L1] Model notions ([[def-cm02-newtonian-flow]], [[def-cm03-centre-of-mass-and-momenta]]): a motion is a $C^{2}$ curve $x:\mathbb R\to\mathbb R^{6}$ with $m_{i}\ddot x_{i}=F_{i}(x)$; along it $p_{i}=m_{i}\dot x_{i}$, $P=p_{1}+p_{2}$, $M=m_{1}+m_{2}=2m$, $X=M^{-1}(m_{1}x_{1}+m_{2}x_{2})$, $V_{\mathrm{cm}}=X'$, $K=\frac12\sum_{i}m_{i}\lVert\dot x_{i}\rVert_{2}^{2}$, $J_{o}=\sum_{i}(x_{i}-o)\times p_{i}$ for a differentiable reference curve $o$, and $E=K+U(x_{1},x_{2})$ for the declared potential. The model is the pair-potential branch of [[post-cm02-interactions]] with $F_{1}=-k(x_{1}-x_{2})$, $F_{2}=k(x_{1}-x_{2})$, no external forces and central pairs.

[L2] Existence and uniqueness ([[pthm-cm02-ivp]] clauses 1, 2 and 4): the force map is continuous and state-locally Lipschitz, so every datum has a unique maximal motion and every motion with that datum is a restriction of it; in particular a motion with the datum whose interval is the whole time window $\mathbb R$ is the maximal motion.

[L3] Trigonometric and product rules ([[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-derivative]], [[cor-trigonometric-parity-and-pythagorean-identity]]): the curve $e(t)=\cos(\omega t)e_{1}+\sin(\omega t)e_{2}$ is $C^{2}$ with $$e'(t)=\omega\eta(t),\quad \eta(t):=-\sin(\omega t)e_{1}+\cos(\omega t)e_{2},\qquad e''(t)=-\omega^{2}e(t),$$ and $\lVert e\rVert_{2}=\lVert\eta\rVert_{2}=1$, $\langle e,\eta\rangle=0$.

[L4] Euclidean and cross-product algebra ([[def-euclidean-inner-product]], [[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]): bilinearity and symmetry of the inner product, $u\times u=0$ and $u\times v=-(v\times u)$; from the oriented orthonormal triple, $e\times\eta=e_{3}$. Finite sums and scalar multiples are linear ([[lem-finite-sum-laws]], [[def-vector-valued-derivative-and-integral]]).

[L5] Balance and transform laws ([[pthm-cm03-momentum-balance]], [[pthm-cm03-centre-of-mass-and-kinetic-splitting]], [[pthm-cm03-angular-momentum-balance]], [[pthm-cm03-work-energy]], [[pthm-cm03-energy-balance]] clauses 1 and 2, [[pthm-cm03-frame-transformations]] clauses 2 and 5): the general statements whose values are checked below; the interval $J=\mathbb R$ has nonempty interior ([[def-interval]]).

## Verification

**Proof technique:** direct; differentiate the displayed curves, substitute into the equations of motion and evaluate each quantity, comparing with the balance statements.

1.1 The curves are $C^{2}$: $e$ is $C^{2}$ by [L3], and $x_{i}$ is $C^{2}$ as a sum of the linear curve $t\mapsto Vt$ and a scalar multiple of $e$ [L4]. With $\eta$ of [L3], $$\dot x_{1}=V-\frac R2\omega\eta,\qquad \dot x_{2}=V+\frac R2\omega\eta,\qquad \ddot x_{1}=\frac R2\omega^{2}e,\qquad \ddot x_{2}=-\frac R2\omega^{2}e.$$ [L3, L4, algebra]

2.1 Equations of motion. Since $\omega^{2}=2k/m$, on the one hand $m\ddot x_{1}=m\frac R2\omega^{2}e=kRe$; on the other $F_{1}(x_{1},x_{2})=-k(x_{1}-x_{2})=-k(-Re)=kRe$, and these agree. Likewise $m\ddot x_{2}=-kRe=-k(x_{2}-x_{1})=F_{2}$. Hence $x$ is a motion of the model on the whole time window $\mathbb R$, and by [L2] it is the unique maximal motion with its datum. [step 1.1, given, L1, L2, algebra]

2.2 Total momentum and centre of mass. By step 1.1, $$P=m\dot x_{1}+m\dot x_{2}=2mV,\qquad X=\tfrac12(x_{1}+x_{2})=Vt,\qquad V_{\mathrm{cm}}=X'=V,$$ so $P=2mV$ is constant and equals $MV_{\mathrm{cm}}$; the model has no external forces, consistent with clauses 1 and 2 of [[pthm-cm03-momentum-balance]]. [step 1.1, L1, L4, L5, algebra]

2.3 Angular momentum about the origin. By step 1.1, $$p_{1}=mV-m\frac R2\omega\eta,\qquad p_{2}=mV+m\frac R2\omega\eta.$$ Expanding $J_{0}=x_{1}\times p_{1}+x_{2}\times p_{2}$ with $x_{1}=Vt-\frac R2e$ and $x_{2}=Vt+\frac R2e$ by bilinearity [L4], the four types of terms combine as follows: the terms $(Vt)\times mV$ occur twice and gives $2(Vt)\times mV=0$ since $V\times V=0$; the two terms pairing $Vt$ with $\eta$ are equal with opposite signs and cancel; the two terms pairing $e$ with $V$ are equal with opposite signs and cancel; and the two terms pairing $e$ with $\eta$ add: $$J_{0}=2\Bigl(\frac R2\Bigr)^{2}m\omega\,(e\times\eta)=\frac12mR^{2}\omega\,e_{3},$$ where $e\times\eta=e_{3}$ by [L4]. This is constant in $t$. [step 1.1, L1, L3, L4, algebra]

3.1 Kinetic splitting. With $r=x_{1}-x_{2}=-Re$ one has $\dot r=-R\omega\eta$ and $\lVert\dot r\rVert_{2}=R\omega$ by [L3], so the two-body clause of [[pthm-cm03-centre-of-mass-and-kinetic-splitting]] predicts $$K=\frac12M\lVert V_{\mathrm{cm}}\rVert_{2}^{2}+\frac12\mu\lVert\dot r\rVert_{2}^{2}=m\lVert V\rVert_{2}^{2}+\frac12\cdot\frac m2\cdot R^{2}\omega^{2}=m\lVert V\rVert_{2}^{2}+\frac14mR^{2}\omega^{2}.$$ Directly, with $a:=\frac R2\omega\eta$ and $\lVert a\rVert_{2}=\frac R2\omega$, bilinearity gives $\lVert V-a\rVert_{2}^{2}+\lVert V+a\rVert_{2}^{2}=2\lVert V\rVert_{2}^{2}+2\lVert a\rVert_{2}^{2}$, so $$K=\frac12m\bigl(\lVert V-a\rVert_{2}^{2}+\lVert V+a\rVert_{2}^{2}\bigr)=m\lVert V\rVert_{2}^{2}+m\lVert a\rVert_{2}^{2}=m\lVert V\rVert_{2}^{2}+\frac14mR^{2}\omega^{2},$$ the same value. The relative positions are $\rho_{1}=-\frac R2e$ and $\rho_{2}=\frac R2e$, so $m\rho_{1}+m\rho_{2}=0$. [step 1.1, step 2.2, L1, L3, L4, L5, algebra]

3.2 Moving origin. For $o(t)=\mathbf Wt$ one has $$J_{o}=\sum_{i}(x_{i}-o)\times p_{i}=J_{0}-o\times P,$$ because $o$ is common to both terms and $\sum_{i}p_{i}=P$; hence, by steps 2.3 and 2.2, $$J_{o}=\frac12mR^{2}\omega\,e_{3}-(\mathbf Wt)\times(2mV)=\frac12mR^{2}\omega\,e_{3}-2mt\,(\mathbf W\times V),$$ so $J_{o}'=-2m(\mathbf W\times V)$. The angular-momentum balance clause 2 of [[pthm-cm03-angular-momentum-balance]] reads $J_{o}'=T_{o}^{\mathrm{ext}}+I-o'\times P$; here $T_{o}^{\mathrm{ext}}=0$ (no external forces) and $I=0$ because the pair force is central ($F_{12}\parallel x_{1}-x_{2}$), while $o'\times P=\mathbf W\times(2mV)=2m(\mathbf W\times V)$, so the balance gives the same value $-2m(\mathbf W\times V)$. [step 2.2, step 2.3, L1, L4, L5, algebra]

4.1 Mechanical energy and power. Here $U(x(t))=\frac12k\lVert r\rVert_{2}^{2}=\frac12kR^{2}$ is constant in time, and by step 3.1 and $\omega^{2}=2k/m$, $$E=K+U=m\lVert V\rVert_{2}^{2}+\frac14mR^{2}\omega^{2}+\frac12kR^{2}=m\lVert V\rVert_{2}^{2}+\frac12kR^{2}+\frac12kR^{2}=m\lVert V\rVert_{2}^{2}+kR^{2},$$ constant, as clause 2 of [[pthm-cm03-energy-balance]] predicts (the potential is static and there are no residual forces). For the power identity, using $F_{1}=-kr$, $F_{2}=kr$ and $\dot r=\dot x_{1}-\dot x_{2}$, $$\mathcal P=\langle F_{1},\dot x_{1}\rangle+\langle F_{2},\dot x_{2}\rangle=-k\langle r,\dot x_{1}\rangle+k\langle r,\dot x_{2}\rangle=-k\langle r,\dot r\rangle=-\frac12k\,\frac{d}{dt}\lVert r\rVert_{2}^{2},$$ so the power is the negative derivative of the potential energy; clause 1 of [[pthm-cm03-work-energy]] gives $K'=\mathcal P$, consistent with $E'=0$ and clause 1 of [[pthm-cm03-energy-balance]]. [step 3.1, L1, L3, L4, L5, algebra]

5.1 Boost to the centre-of-mass frame. Take the second frame with $b=0$, $a_{0}=0$, $R_{\mathrm{rot}}=I_{3}$ and $v_{\mathrm{boost}}=-V$; the description of the curves is $\eta_{i}(t)=x_{i}(t)-Vt=\mp\frac R2e(t)$, so $\tilde P=m\dot\eta_{1}+m\dot\eta_{2}=0$ and, by [L3], $$\tilde K=\frac12m\Bigl\lVert-\frac R2\omega\eta\Bigr\rVert_{2}^{2}+\frac12m\Bigl\lVert\frac R2\omega\eta\Bigr\rVert_{2}^{2}=\frac14mR^{2}\omega^{2}=\frac12kR^{2}.$$ The frame law of clause 2 of [[pthm-cm03-frame-transformations]] gives $$\tilde K=K+\langle v_{\mathrm{boost}},P\rangle+\frac12M\lVert v_{\mathrm{boost}}\rVert_{2}^{2}=\Bigl(m\lVert V\rVert_{2}^{2}+\frac12kR^{2}\Bigr)-2m\lVert V\rVert_{2}^{2}+m\lVert V\rVert_{2}^{2}=\frac12kR^{2},$$ the same value. Finally the scalar transfer of the potential is $U_{*}=U$ at corresponding data because $U$ depends only on $x_{1}-x_{2}=\eta_{1}-\eta_{2}$, so $\tilde E=\tilde K+U=\frac12kR^{2}+\frac12kR^{2}=kR^{2}$, and clause 5 gives $$\tilde E=E+\langle v_{\mathrm{boost}},P\rangle+\frac12M\lVert v_{\mathrm{boost}}\rVert_{2}^{2}=\Bigl(m\lVert V\rVert_{2}^{2}+kR^{2}\Bigr)-2m\lVert V\rVert_{2}^{2}+m\lVert V\rVert_{2}^{2}=kR^{2},$$ again the same value. [step 2.2, step 4.1, L1, L3, L4, L5, algebra] ∎

## Remarks

- **What the check exhibits.** The example exercises the balances of the page on one explicit motion: the algebraic splitting, the momentum law with vanishing total external force, the angular-momentum law with a moving reference point (where the correction $-o'\times P$ is nonzero when both chosen velocities $\mathbf W$ and $V$ are nonzero and perpendicular, while the torque vanishes), the work-energy and mechanical-energy balances, and the transformation laws of the kinetic and mechanical energies. The centrality clause of [[pthm-cm03-angular-momentum-balance]] applies here; the companion counterexample exhibits a model where the same conservation conclusion holds without centrality.

- **Scope.** The parameters $m$, $k$, $R$, $V$ and $\mathbf W$ are declared data of this computation; no measured value is asserted, no physical spring is claimed to obey the Hooke law in any regime, and the check is a deduction inside the model, not evidence about nature.
