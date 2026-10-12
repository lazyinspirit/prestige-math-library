---
id: pthm-cm03-frame-transformations
kind: physics-theorem
title: "Transformation of the state quantities under a change of inertial frame: centre of mass, total momentum, kinetic energy, angular momentum, torque, power, work and mechanical energy"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [def-cm03-centre-of-mass-and-momenta, def-cm03-potential-and-mechanical-energy, pthm-cm03-momentum-balance, post-cm02-force-superposition, post-cm02-interactions, def-cm02-newtonian-flow, post-cm01-frames, post-cm01-worldlines, pthm-cm01-galilean-kinematics, def-cm01-velocity-acceleration, def-cm01-units, def-cross-product-in-r3, lem-cross-product-is-bilinear-alternating-and-orthogonal, lem-cm-skew-matrix-cross-product-correspondence, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-total-derivative-in-euclidean-space, thm-chain-rule-for-total-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, def-ck-euclidean-maps-and-diffeomorphisms, def-vector-valued-derivative-and-integral, def-interval, lem-finite-sum-laws, thm-newton-leibniz-with-interior-derivative]
dependency_roles:
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  pthm-cm03-momentum-balance: physical-result
  post-cm02-force-superposition: physical-assumption
  post-cm02-interactions: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  post-cm01-frames: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  pthm-cm01-galilean-kinematics: physical-result
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  lem-cross-product-is-bilinear-alternating-and-orthogonal: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The transformation laws of the model's mechanical quantities under a change of inertial frame: the centre of mass and centre-of-mass velocity transform affinely, the total momentum gains M times the boost velocity, the kinetic energy gains a cross term and the boost kinetic energy, the angular momentum and torque about corresponding C1 reference curves acquire the stated rotation and boost terms, and power and work transform according to the transferred force map of the force postulate, with the momentum-increment work form requiring a motion with the antisymmetric pair presentation; for a globally potential model whose potential is transferred by the scalar rule, the mechanical energy gains the same kinetic boost terms. The result is a conditional deduction from the adopted frame, worldline and force laws; it asserts no invariance of these quantities and no measured value."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Section 1.2.1, printed page 5 (PDF page 11): boosts x' = x + v t and rotations map inertial frames to inertial frames, and the coordinate velocity transforms with the boost velocity added"
      url: "https://www.davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.1 point (v), chapter pages 2-3 (PDF pages 6-7): the transfer of the radius vector, velocity and acceleration between frames moving by relative translation, and the warning that rotations complicate the transfer"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): the ten transformations relating inertial frames, comprising rotations, translations, boosts and time translation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the force model and the notation of
[[def-cm03-centre-of-mass-and-momenta]], and let
$$F=\bigl(o,u,(e_{1},e_{2},e_{3})\bigr),\qquad F'=\bigl(o',u',(e_{1}',e_{2}',e_{3}')\bigr)$$
be two inertial frames with coordinates $(t,x)$ and $(t',x')$ related by
$$t'=t+b,\qquad x'=Rx+v\,t+a_{0},\qquad b\in\mathbb R,\ a_{0},v\in\mathbb R^{3},\ R\in SO(3)$$
([[pthm-cm01-galilean-kinematics]] clause 1,
[[def-cm-special-orthogonal-group]]). Let $x:J\to Q$ be a curve family of the
model in the first frame and let
$$\eta_{i}(t'):=R\,x_{i}(t'-b)+v\,(t'-b)+a_{0}\qquad(t'\in J+b)$$
be the description of the same worldlines in the second frame. Write
$\sigma_{i}(t):=F_{i}(t,x(t),w(t))$ and
$\Sigma(t):=\sum_{i}\sigma_{i}(t)$ for the evaluated total forces in the first
frame, and read the second frame's quantities from the description $\eta$
with the transferred force map $F_{*}$ of clause (vi) of
[[post-cm02-force-superposition]]: $\tilde\sigma_{i}(t'):=F_{*i}(t',\eta(t'),\eta'(t'))$,
$\tilde P:=\sum_{i}m_{i}\eta_{i}'$,
$\tilde X:=M^{-1}\sum_{i}m_{i}\eta_{i}$,
$\tilde K:=\frac12\sum_{i}m_{i}\lVert\eta_{i}'\rVert_{2}^{2}$,
$\tilde J_{\tilde o}:=\sum_{i}(\eta_{i}-\tilde o)\times m_{i}\eta_{i}'$ and
$\tilde T_{\tilde o}:=\sum_{i}(\eta_{i}-\tilde o)\times\tilde\sigma_{i}$
for any $C^{1}$ reference curve $\tilde o:J+b\to\mathbb R^{3}$ (clause 3
uses the curve corresponding to $o$),
$\tilde{\mathcal P}:=\sum_{i}\langle\tilde\sigma_{i},\eta_{i}'\rangle$ and
$\tilde W([t_{0}',t_{1}']):=\int_{t_{0}'}^{t_{1}'}\tilde{\mathcal P}(t')\,dt'$
for $t_{0}'\le t_{1}'$ in $J+b$. Then, with all first-frame quantities read
at the corresponding time $t'-b$:

1. **Centre of mass and momentum.**
   $$\tilde X(t')=R\,X(t'-b)+v\,(t'-b)+a_{0},\qquad \tilde X'(t')=R\,V(t'-b)+v,\qquad \tilde P(t')=R\,P(t'-b)+M\,v\,;$$
2. **Kinetic energy.**
   $$\tilde K(t')=K(t'-b)+\bigl\langle v,\,R\,P(t'-b)\bigr\rangle+\frac12M\lVert v\rVert_{2}^{2};$$
3. **Angular momentum and torque.** For every $C^{1}$ reference curve
   $o:J\to\mathbb R^{3}$ of the definition, let
   $\tilde o(t'):=R\,o(t'-b)+v(t'-b)+a_{0}$ and
   $X_{o}(t):=M^{-1}\sum_{i}m_{i}(x_{i}(t)-o(t))=X(t)-o(t)$. Then
   $$\tilde J_{\tilde o}(t')=R\,J_{o}(t'-b)+\bigl(R\,X_{o}(t'-b)\bigr)\times(M\,v),\qquad \tilde T_{\tilde o}(t')=R\,T_{o}(t'-b),$$
   where $T_{o}(t):=\sum_{i}(x_{i}(t)-o(t))\times\sigma_{i}(t)$ is the
   evaluated total torque of the first frame about $o(t)$;
4. **Power and work.**
   $$\tilde{\mathcal P}(t')=\mathcal P(t'-b)+\bigl\langle R\,\Sigma(t'-b),\,v\bigr\rangle,$$
   and for every curve family and $t_{0}<t_{1}$ in $J$
   $$\tilde W\bigl([t_{0}+b,\,t_{1}+b]\bigr)=W([t_{0},t_{1}])+\int_{t_{0}}^{t_{1}}\bigl\langle R\,\Sigma(t),v\bigr\rangle\,dt.$$
   If in addition $x$ is a motion and the model invokes the pair presentation
   of [[post-cm02-interactions]] with the antisymmetry clause, then
   $\Sigma=P'$ along the motion by [[pthm-cm03-momentum-balance]], and
   $$\tilde W\bigl([t_{0}+b,\,t_{1}+b]\bigr)=W([t_{0},t_{1}])+\bigl\langle R\bigl(P(t_{1})-P(t_{0})\bigr),\,v\bigr\rangle;$$
5. **Potential and mechanical energy.** If the model is a global potential
   model of [[def-cm03-potential-and-mechanical-energy]] clause (a) with
   potential $U:I_{0}\times Q\to\mathbb R$ of class $C^{2}$ and the second
   frame's model declares the **scalar transfer**
   $$U_{*}(t',y):=U\bigl(t'-b,\ R^{\mathsf T}(y_{1}-v(t'-b)-a_{0}),\dots,R^{\mathsf T}(y_{N}-v(t'-b)-a_{0})\bigr),$$
   then $U_{*}$ is $C^{2}$ on its open transferred domain,
   $F_{*i}(t',y,u)=-\nabla_{y_{i}}U_{*}(t',y)$ at corresponding data, and the
   mechanical energies of clause (b) of that definition satisfy
   $$\tilde E(t'):=\tilde K(t')+U_{*}\bigl(t',\eta(t')\bigr)=E(t'-b)+\bigl\langle v,\,R\,P(t'-b)\bigr\rangle+\frac12M\lVert v\rVert_{2}^{2}.$$

Whether the second frame's model uses the scalar transfer of clause 5 is a
modelling declaration; a model whose potential is not transferred by this rule
(for instance a background potential that selects a frame) is a different
model in the second frame, and no transformation law of $E$ is asserted for
it. No empirical content is claimed.

## Facts & Assumptions

**Given:** The force model and one curve family $x:J\to Q$ in the first inertial frame, a second inertial frame with the transformation parameters $(b,a_{0},v,R)$, and the description $\eta$ of the worldlines in the second frame; for clause 3, also a $C^{1}$ reference curve $o:J\to\mathbb R^{3}$.

[L1] Kinematics ([[pthm-cm01-galilean-kinematics]] clause 2): each $\eta_{i}$ is of class $C^{2}$ and $$\eta_{i}'(t')=R\,w_{i}(t'-b)+v,\qquad \eta_{i}''(t')=R\,\ddot x_{i}(t'-b)\qquad(t'\in J+b).$$

[L2] Notions ([[def-cm03-centre-of-mass-and-momenta]]): $w_{i}=x_{i}'$, $p_{i}=m_{i}w_{i}$, $P=\sum_{i}p_{i}$, $X=M^{-1}\sum_{i}m_{i}x_{i}$, $V=X'$, $K=\frac12\sum_{i}m_{i}\lVert w_{i}\rVert_{2}^{2}$, $\mathcal P=\sum_{i}\langle\sigma_{i},w_{i}\rangle$, $J_{o}=\sum_{i}(x_{i}-o(t))\times p_{i}$ and $T_o=\sum_i(x_i-o(t))\times\sigma_i$ for a $C^{1}$ reference curve $o$, and the work $W$ is the integral of $\mathcal P$; the corresponding tilde-quantities of the statement are the same construction in the second frame from $\eta$ and $\tilde\sigma_{i}=F_{*i}(t',\eta,\eta')$. For a motion, $m_{i}\ddot x_{i}=\sigma_{i}$ and the transferred description satisfies $m_{i}\eta_{i}''=\tilde\sigma_{i}$, with $\tilde\sigma_{i}(t')=R\,\sigma_{i}(t'-b)$ at corresponding data (clause (vi) of [[post-cm02-force-superposition]], which defines $F_{*}$ by $F_{*}(t',y,u)=R\,F(t'-b,\ R^{\mathsf T}(y-v(t'-b)-a_{0}),\ R^{\mathsf T}(u-v))$; for a global potential model $\sigma_{i}=-\nabla_{x_{i}}U$ and $E=K+U(t,x(t))$ ([[def-cm03-potential-and-mechanical-energy]] clauses (a)-(b)).

[L3] Orthogonality consequences: for $R\in SO(3)$ one has $R^{\mathsf T}R=I_{3}$ ([[lem-cm-so3-is-a-matrix-group]]), hence $$\langle Ru,Rz\rangle=u^{\mathsf T}R^{\mathsf T}Rz=u^{\mathsf T}z=\langle u,z\rangle,\qquad \lVert Ru\rVert_{2}=\lVert u\rVert_{2}$$ for all $u,z\in\mathbb R^{3}$ ([[def-euclidean-inner-product]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]]); moreover $$R\,(u\times z)=(Ru)\times(Rz),$$ because $R[u]_\times z=R[u]_\times R^{\mathsf T}Rz=[Ru]_\times Rz$ by clause 3 and clause 1 of [[lem-cm-skew-matrix-cross-product-correspondence]] together with $R^{\mathsf T}R=I_{3}$ ([[def-cross-product-in-r3]], [[lem-cross-product-is-bilinear-alternating-and-orthogonal]]).

[L4] Chain rule and gradients ([[thm-chain-rule-for-total-derivatives]], [[def-total-derivative-in-euclidean-space]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[thm-continuous-partial-derivatives-imply-total-differentiability]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]]): the maps of the statement are compositions of $C^{1}$ maps with the affine transfer $(t',y)\mapsto(t'-b,\ R^{\mathsf T}(y-v(t'-b)-a_{0}))$, whose Jacobian in $y$ is the orthogonal block matrix $R^{\mathsf T}$; finite sums, scalar multiples and integrals of differentiable curves behave as in [[def-vector-valued-derivative-and-integral]], [[lem-finite-sum-laws]] and [[thm-newton-leibniz-with-interior-derivative]].

[L5] Balance supplier ([[pthm-cm03-momentum-balance]]): for a motion of a model that invokes the external-plus-pair presentation with the antisymmetry clause, $\dot P=\sum_{i}F_{i}^{\mathrm{ext}}$, and also $\sum_{i}F_{i}=\sum_{i}F_{i}^{\mathrm{ext}}$ because the internal pairs cancel.

## Proof

**Proof technique:** direct; compute each quantity of the second frame from the kinematic laws and the orthogonality of $R$, and integrate the power identity for the work law.

1.1 Centre of mass. By the definition of $\tilde X$ and the kinematic law, $$\tilde X(t')=M^{-1}\sum_{i}m_{i}\bigl(R\,x_{i}(t'-b)+v(t'-b)+a_{0}\bigr)=R\Bigl(M^{-1}\sum_{i}m_{i}x_{i}(t'-b)\Bigr)+v(t'-b)+a_{0}=R\,X(t'-b)+v(t'-b)+a_{0},$$ where linearity of $R$ and the finite sum are used ([L2], [L4]); its $t'$-derivative is $R\,V(t'-b)+v$ by the chain rule applied to $t'\mapsto X(t'-b)$ with $V=X'$. [given, L1, L2, L4, algebra]

1.2 Orthogonality. For $R\in SO(3)$ and $u,z\in\mathbb R^{3}$, $\langle Ru,Rz\rangle=\langle u,z\rangle$ and $\lVert Ru\rVert_{2}=\lVert u\rVert_{2}$ because $\langle Ru,Rz\rangle=(Ru)^{\mathsf T}(Rz)=u^{\mathsf T}R^{\mathsf T}Rz=u^{\mathsf T}z$ with $R^{\mathsf T}R=I_{3}$; and $R(u\times z)=(Ru)\times(Rz)$ because $R(u\times z)=R[u]_\times z=R[u]_\times R^{\mathsf T}Rz=[Ru]_\times(Rz)$ by the skew-matrix correspondence and $R^{\mathsf T}R=I_{3}$. These two consequences are used freely below. [L3]

1.3 Potential transfer. Let the model be a global potential model with $\sigma_{i}=-\nabla_{x_{i}}U$ and let $U_{*}$ be the scalar transfer of the statement. $U_{*}$ is $C^{2}$, being the composition of the $C^{2}$ map $U$ with the affine transfer $y\mapsto R^{\mathsf T}(y-v(t'-b)-a_{0})$ and the time shift ([L4]). Its spatial gradient is computed by the chain rule: at corresponding data $(t',y)$ with $x=R^{\mathsf T}(y-v(t'-b)-a_{0})$, $$\nabla_{y_{i}}U_{*}(t',y)=R\,\nabla_{x_{i}}U(t,x),$$ because the Jacobian of $y_{i}\mapsto R^{\mathsf T}(y_{i}-v(t'-b)-a_{0})$ is $R^{\mathsf T}$ and $(R^{\mathsf T})^{\mathsf T}=R$ ([[def-transpose-of-a-matrix]], [[thm-total-derivative-computes-directional-and-partial-derivatives]]). Hence $$-\nabla_{y_{i}}U_{*}(t',\eta(t'))=R\bigl(-\nabla_{x_{i}}U(t,x(t))\bigr)=R\,\sigma_{i}(t)=F_{*i}(t',\eta(t'),\eta'(t'))$$ at corresponding times, so the transferred model presents its force map through $U_{*}$. [given, L2, L4, algebra]

2.1 Momentum and kinetic energy. By [L1], $$\tilde P=\sum_{i}m_{i}\bigl(R\,w_{i}+v\bigr)=R\sum_{i}m_{i}w_{i}+Mv=R\,P(t'-b)+Mv.$$ For the kinetic energy, expand with bilinearity of the inner product and step 1.2: $$\lVert\eta_{i}'\rVert_{2}^{2}=\lVert R\,w_{i}+v\rVert_{2}^{2}=\lVert w_{i}\rVert_{2}^{2}+2\langle R\,w_{i},v\rangle+\lVert v\rVert_{2}^{2},$$ so, summing with the masses, $$\tilde K=\frac12\sum_{i}m_{i}\lVert w_{i}\rVert_{2}^{2}+\Bigl\langle R\sum_{i}m_{i}w_{i},\,v\Bigr\rangle+\frac12M\lVert v\rVert_{2}^{2}=K(t'-b)+\bigl\langle R\,P(t'-b),v\bigr\rangle+\frac12M\lVert v\rVert_{2}^{2},$$ which with step 1.1 is clauses 1 and 2. [step 1.1, step 1.2, L1, L2, algebra]

2.2 Angular momentum and torque. At corresponding times $t=t'-b$, the definitions give $\eta_{i}(t')-\tilde o(t')=R(x_{i}(t)-o(t))$. By the cross-product identity of step 1.2, $$\tilde J_{\tilde o}=\sum_{i}\bigl(R(x_{i}-o)\bigr)\times m_{i}\bigl(R\,w_{i}+v\bigr)=\sum_{i}m_{i}\,R\bigl((x_{i}-o)\times w_{i}\bigr)+\sum_{i}\bigl(R(x_{i}-o)\bigr)\times m_{i}v.$$ The first sum is $R\sum_{i}(x_{i}-o)\times m_{i}w_{i}=R\,J_{o}(t'-b)$; in the second, $$\sum_{i}\bigl(R(x_{i}-o)\bigr)\times m_{i}v=R\Bigl[\sum_{i}m_{i}(x_{i}-o)\times R^{\mathsf T}v\Bigr]=R\bigl[(M\,X_{o})\times R^{\mathsf T}v\bigr]=\bigl(R\,M\,X_{o}\bigr)\times v=\bigl(R\,X_{o}\bigr)\times(Mv),$$ using $v=R(R^{\mathsf T}v)$, the cross-product identity, the definition of $X_{o}$ and bilinearity. Hence $\tilde J_{\tilde o}=R\,J_{o}+\bigl(R\,X_{o}\bigr)\times(Mv)$. For the torque, the transfer rule gives $\tilde\sigma_{i}(t')=R\,\sigma_{i}(t'-b)$ at corresponding data, so $$\tilde T_{\tilde o}=\sum_{i}\bigl(R(x_{i}-o)\bigr)\times R\,\sigma_{i}=\sum_{i}R\bigl((x_{i}-o)\times\sigma_{i}\bigr)=R\,T_{o}(t'-b),$$ again by step 1.2; this is clause 3. [step 1.2, L1, L2, algebra]

2.3 Power. By the transfer rule and [L1], $$\tilde{\mathcal P}=\sum_{i}\bigl\langle R\,\sigma_{i},\,R\,w_{i}+v\bigr\rangle=\sum_{i}\langle\sigma_{i},w_{i}\rangle+\Bigl\langle R\sum_{i}\sigma_{i},\,v\Bigr\rangle=\mathcal P(t'-b)+\bigl\langle R\,\Sigma(t'-b),v\bigr\rangle,$$ using step 1.2 in the first equality of the middle expression. [step 1.2, L1, L2, algebra]

3.1 Work. The force map is continuous and the curve family is $C^{2}$, so $\mathcal P$ and $\langle R\Sigma,v\rangle$ are continuous on $J$ and these Riemann integrals exist. Integrating the power identity of step 2.3 over $[t_{0}+b,t_{1}+b]$ and substituting $t=t'-b$ gives $$\tilde W([t_{0}+b,t_{1}+b])=\int_{t_{0}}^{t_{1}}\mathcal P(t)\,dt+\int_{t_{0}}^{t_{1}}\langle R\,\Sigma(t),v\rangle\,dt=W([t_{0},t_{1}])+\int_{t_{0}}^{t_{1}}\langle R\,\Sigma(t),v\rangle\,dt,$$ the general work law in clause 4. If $x$ is a motion of a model with the antisymmetric pair presentation, then [L5] and [[pthm-cm03-momentum-balance]] give $\Sigma=P'$ on $J$; since $P$ is $C^{1}$ by that balance theorem, the Newton–Leibniz theorem applied componentwise yields $$\int_{t_{0}}^{t_{1}}\langle R\,\Sigma(t),v\rangle\,dt=\Bigl\langle R\bigl(P(t_{1})-P(t_{0})\bigr),v\Bigr\rangle,$$ which is the conditional specialization in clause 4. [step 2.3, L2, L4, L5, algebra]

4.1 Mechanical energy. With the transfer of step 1.3, $$U_{*}\bigl(t',\eta(t')\bigr)=U\bigl(t'-b,\ x(t'-b)\bigr),$$ by the definitions of $U_{*}$ and $\eta$; combining with clause 2 of step 2.1, $$\tilde E=\tilde K+U_{*}(t',\eta(t'))=K(t'-b)+\bigl\langle R\,P(t'-b),v\bigr\rangle+\frac12M\lVert v\rVert_{2}^{2}+U(t'-b,x(t'-b))=E(t'-b)+\bigl\langle v,R\,P(t'-b)\bigr\rangle+\frac12M\lVert v\rVert_{2}^{2},$$ which is clause 5. [step 2.1, step 1.3, L2, algebra] ∎

## Remarks

- **Conservation under a frame change has explicit conditions.** If $P$ is constant, then $\tilde P=RP+Mv$ is constant; if both $P$ and $K$ are constant, then the kinetic-energy law makes $\tilde K$ constant. Under the scalar potential transfer, constancy of both $E$ and $P$ makes $\tilde E$ constant. The angular-momentum law includes the time-dependent term $(R X_o(t'-b))\times(Mv)$, so constancy of $J_o$ alone does not generally make $\tilde J_{\tilde o}$ constant; it does so exactly when that added term is constant.

- **The transferred model is a declaration.** Clause (vi) of [[post-cm02-force-superposition]] fixes how a force law is read in another inertial frame; clause 5 adds the analogous scalar transfer for a potential and is asserted only when the model declares it. A background potential that does not transfer this way selects a frame, consistent with [[rem-cm02-open-system-warning]].
