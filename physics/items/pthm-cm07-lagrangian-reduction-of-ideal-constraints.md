---
id: pthm-cm07-lagrangian-reduction-of-ideal-constraints
kind: physics-theorem
title: "Ideal scleronomic holonomic constraints: the substituted Lagrange equations are equivalent to the constrained model equation"
status: draft
origin: session
domain: physics
dependency_level: 14
deps: [def-cm07-generalized-coordinates-and-forces, def-cm07-action-and-mechanical-lagrangian, lem-cm07-immersion-euler-lagrange-transport, pthm-cm07-first-variation-and-euler-lagrange-expression, def-cm06-holonomic-constraint-model, post-cm06-ideal-reaction-law, lem-cm-constraint-multipliers-and-accelerations, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-velocity-acceleration, def-cm01-units, def-euclidean-submersions-and-immersions, cor-matrix-rank-nullity, def-jacobian-matrix-and-gradient, def-ck-euclidean-maps-and-diffeomorphisms, thm-chain-rule-for-total-derivatives, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-linear-map, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  lem-cm07-immersion-euler-lagrange-transport: mathematical-premise
  pthm-cm07-first-variation-and-euler-lagrange-expression: physical-result
  def-cm06-holonomic-constraint-model: formulation-prerequisite
  post-cm06-ideal-reaction-law: physical-assumption
  lem-cm-constraint-multipliers-and-accelerations: mathematical-premise
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-velocity-acceleration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-euclidean-submersions-and-immersions: mathematical-premise
  cor-matrix-rank-nullity: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The elimination of ideal scleronomic holonomic constraints by parametrization: for a global C^3 surjective immersion onto the constrained configurations of a scleronomic regular holonomic datum, a C^2 coordinate curve describes an ideal constrained motion of the force model exactly when it solves the declared Lagrange equations of the substituted Lagrangian with the residual generalized force; multiple coordinate representatives of one configuration are allowed. The reaction is then uniquely determined, annihilates the virtual displacements and admits the unique continuous multiplier. The statement is conditional on the adopted force branch, the potential presentation, the constraint datum with its rank hypothesis and the ideal-reaction law; it asserts no solution existence, no uniqueness of the coordinate curve for given data and no empirical claim."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 2.3.1-2.3.2, printed pages 17-22 (PDF pages 23-28): generalized coordinates eliminate the constraint forces for holonomic constraints, with the pendulum and bead examples"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 6.3 and 6.8: Lagrange equations from d'Alembert's principle and applications with holonomic constraints"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Sections 1.4-1.5, printed pages 19-25 (PDF pages 22-28): ideal constraint reactions annihilate admissible virtual displacements, so constraint forces are absent from the reduced generalized equations"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force-branch data of [[post-cm02-force-superposition]]: $N_{p}\ge1$
labelled particles with masses $m_{1},\dots,m_{N_{p}}>0$, an open time window
$I_{0}$, an open configuration domain $Q\subseteq\mathbb R^{3N_{p}}$ and a force map
$F$ with the standing regularity; adopt a regular holonomic-constraint datum
$(O,k,g_{c})$ of [[def-cm06-holonomic-constraint-model]], where $g_{c}:=G$
is the constraint map named $G$ in that definition, and the ideal-reaction law
of [[post-cm06-ideal-reaction-law]]. Assume the datum is **scleronomic with
time-independent locus** $\mathcal C\subseteq\mathbb R^{3N_{p}}$:

$$\Sigma=\bigl\{(t,x)\in O:\ x\in\mathcal C\bigr\}.$$

Let $(U,d)$ be a potential presentation of $F$ in the sense of clause (a) of
[[def-cm03-potential-and-mechanical-energy]], so that
$F_{i}(t,x,v)=-\nabla_{x_{i}}U(t,x)+d_{i}(t,x,v)$. Let $r:=3N_{p}-k$,
let $\Omega\subseteq\mathbb R^{r}$ be open and nonempty, and let
$X:\Omega\to Q$ be a **parametrization of the constrained configurations** in
the sense of clause (d) of [[def-cm07-generalized-coordinates-and-forces]]:
$X$ is of class $C^{3}$, $DX(q)$ is injective for every $q\in\Omega$,
$X(\Omega)=\mathcal C\cap Q$ and $(t,X(q))\in O$ for all
$(t,q)\in I_{0}\times\Omega$. Injectivity of $X$ is not assumed: the image
condition requires coverage of the constrained configurations, while multiple
coordinate representatives are permitted. Define the kinetic matrix,
substituted potential, substituted Lagrangian and
residual generalized force

$$\mathsf G(q):=DX(q)^{\mathsf T}\mathsf M\,DX(q),\qquad \widetilde U(t,q):=U\bigl(t,X(q)\bigr),\qquad \widetilde L(t,q,v):=\tfrac12\,v^{\mathsf T}\mathsf G(q)v-\widetilde U(t,q),$$

$$Q^{\mathrm{res}}(t,q,v):=DX(q)^{\mathsf T}d\bigl(t,X(q),DX(q)v\bigr).$$

Let $J\subseteq I_{0}$ be an interval with nonempty interior, let $q:J\to\Omega$
be a $C^{2}$ curve and put $x:=X\circ q$. Then the following are equivalent:

1. $x$ is a constrained motion of the model with an ideal reaction field: there
   is a continuous $R:J\to\mathbb R^{3N_{p}}$ with
   $\mathsf M x''(t)=F\bigl(t,x(t),x'(t)\bigr)+R(t)$ and
   $R(t)\cdot\delta=0$ for every $t\in J$ and every virtual displacement
   $\delta\in\ker D_{x}g_{c}(t,x(t))$;
2. $\Lambda(\widetilde L)(q)(t)=Q^{\mathrm{res}}\bigl(t,q(t),q'(t)\bigr)$ for
   every $t\in J$, i.e. the declared Lagrange equations of
   [[def-cm07-generalized-coordinates-and-forces]] hold along $q$.

If these hold, then:

3. the reaction is unique: $R(t)=\mathsf M x''(t)-F(t,x(t),x'(t))$ for every
   $t\in J$, and there is a unique continuous
   $\lambda:J\to\mathbb R^{k}$ with
   $R(t)=D_{x}g_{c}(t,x(t))^{\mathsf T}\lambda(t)$;
   if the declared constraint components have dimensions $\gamma_{\alpha}$,
   then $[\lambda_{\alpha}]=\mu\ell^{2}\tau^{-2}/\gamma_{\alpha}$;
4. the virtual displacements at $x(t)$ are exactly the image of $DX(q(t))$,
   $\ker D_{x}g_{c}(t,x(t))=DX(q(t))\bigl(\mathbb R^{r}\bigr)$;
5. the statement is conditional on the adopted force branch, the presentation,
   the scleronomic regular constraint datum and the ideal-reaction law. No
   solution existence, no uniqueness of the coordinate curve for given data
   and no empirical content are asserted.

## Facts & Assumptions

**Given:** The model data, the scleronomic regular constraint datum, the presentation $(U,d)$, the parametrization $X$, the interval $J$ and the curve $q$ with $x=X\circ q$.

[F1] The holonomic-constraint model ([[def-cm06-holonomic-constraint-model]], [[post-cm06-ideal-reaction-law]]): writing $g_{c}:=G$ for the constraint map of that supplier, a constrained curve family is a $C^{2}$ curve $x:J\to\mathbb R^{3N_{p}}$ with $(t,x(t))\in O$ and $g_{c}(t,x(t))=0$; for a scleronomic datum the locus membership is a condition on $x$ alone and $(g_{c})_{t}=0$ on $\Sigma$ for the declared presentation; a constrained motion satisfies $\mathsf M x''=F(t,x,x')+R$ with a continuous reaction field $R$; the ideal-reaction law imposes $R(t)\cdot\delta=0$ for every $\delta\in\ker D_{x}g_{c}(t,x(t))$; the virtual displacements are that kernel.

[F2] Virtual displacements and the parametrization ([[def-cm06-holonomic-constraint-model]] clause (a), [[cor-matrix-rank-nullity]], [[def-euclidean-submersions-and-immersions]], [[def-jacobian-matrix-and-gradient]], [[thm-chain-rule-for-total-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): $D_{x}g_{c}(t,x)$ is surjective with $k$ rows on $\Sigma$, so $\dim\ker D_{x}g_{c}(t,x)=3N_{p}-k=r$; since $g_{c}(t,X(q))=0$ for all $(t,q)\in I_{0}\times\Omega$, the chain rule gives $D_{x}g_{c}(t,X(q))\,DX(q)=0$, so $DX(q)(\mathbb R^{r})\subseteq\ker D_{x}g_{c}(t,X(q))$; the left side has dimension $r$ because $DX(q)$ is injective; hence the two spaces are equal. No global injectivity of $X$ is used.

[F3] The transport lemma ([[lem-cm07-immersion-euler-lagrange-transport]]), applied with ambient open set $Q$, $J=I_{0}$ and $X(\Omega)\subseteq Q$: with $\widetilde L$ the substitution of the Cartesian Lagrangian $L(t,x,w)=\frac12w\cdot\mathsf M w-U(t,x)$ through $X$, and $E_{\widetilde L}(q):=\widetilde L_{q}(t,q,q')-\frac{d}{dt}\widetilde L_{v}(t,q,q')$, one has $E_{\widetilde L}(q)(t)=DX(q(t))^{\mathsf T}E_{L}(x)(t)$ for all $t$ of the interval, where $E_{L}(x)=L_{x}(t,x,x')-\frac{d}{dt}L_{w}(t,x,x')$; moreover $\Lambda(\widetilde L)=-E_{\widetilde L}$ by the two definitions.

[F4] The model-terms Euler-Lagrange expression ([[pthm-cm07-first-variation-and-euler-lagrange-expression]]): for the mechanical Lagrangian of the presentation, $E_{L}(x)(t)=-\bigl(\mathsf M x''(t)+\nabla_{x}U(t,x(t))\bigr)$ for every $t$ of the interval of a $C^{2}$ curve; equivalently $E_{L}(x)=-(\mathsf M x''-F^{p})$ with $F^{p}:=-\nabla_{x}U$ the potential part of the force map ([[def-cm03-potential-and-mechanical-energy]] clause (a)).

[F5] The multiplier lemma ([[lem-cm-constraint-multipliers-and-accelerations]]): for a surjective Jacobian $A=D_{x}g_{c}(t,x(t))$, a vector $R(t)$ annihilating $\ker A$ has a unique representation $R(t)=A^{\mathsf T}\lambda(t)$, with $\lambda=(A\mathsf M^{-1}A^{\mathsf T})^{-1}A\mathsf M^{-1}R$. The multiplier depends $C^{1}$ on $(t,x,R)$ under the stated $C^{2}$ constraint regularity; since $x$ is $C^{2}$ and the reaction defined from the model equation is continuous, the formula gives a continuous multiplier along the curve. The pairings are the Euclidean inner products of $\mathbb R^{3N_{p}}$ ([[def-euclidean-inner-product]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-linear-map]]).

## Proof

**Proof technique:** direct; identify the virtual displacements with the image of the parametrization, translate the ideal reaction into the transpose condition, and use the transport identity together with the model-terms Euler-Lagrange expression.

1.1 Structure of the curve: since $X$ is $C^{3}$ and $q$ is $C^{2}$, the curve $x=X\circ q$ is $C^{2}$ with values in $X(\Omega)=\mathcal C\cap Q\subseteq Q$; for every $t\in J$ one has $(t,x(t))\in O$ by the hypothesis on $X$, hence $g_{c}(t,x(t))=0$ because $\Sigma=\{(t,x)\in O:x\in\mathcal C\}$ and $x(t)\in\mathcal C$; further $x'(t)=DX(q(t))q'(t)\in DX(q(t))(\mathbb R^{r})$, and $(g_{c})_{t}=0$ on $\Sigma$ by scleronomy, so $(g_{c})_{t}(t,x(t))+D_{x}g_{c}(t,x(t))x'(t)=0$ by [F2]: the curve is a constrained curve family with permitted velocity. [F1, F2, given]

2.1 Clause 1 implies the transpose condition: by [F1] the ideal reaction annihilates every element of $\ker D_{x}g_{c}(t,x(t))$, which equals $DX(q(t))(\mathbb R^{r})$ by [F2]; hence for every $\hat\delta\in\mathbb R^{r}$, $0=R(t)\cdot DX(q(t))\hat\delta=\bigl(DX(q(t))^{\mathsf T}R(t)\bigr)\cdot\hat\delta$ by [F5]; as $\hat\delta$ is arbitrary, $DX(q(t))^{\mathsf T}R(t)=0$. [F1, F2, F5, step 1.1, algebra]

3.1 Clause 1 implies the Lagrange equations: from the equation of motion $\mathsf M x''=F+R=-\nabla_{x}U+d+R$ one has $\mathsf M x''+\nabla_{x}U=d+R$, so by step 2.1 $DX^{\mathsf T}(\mathsf M x''+\nabla_{x}U)=DX^{\mathsf T}d$. By [F4] $E_{L}(x)=-(\mathsf M x''+\nabla_{x}U)$, hence $DX^{\mathsf T}E_{L}(x)=-DX^{\mathsf T}d=-Q^{\mathrm{res}}$; by [F3] $E_{\widetilde L}(q)=DX^{\mathsf T}E_{L}(x)$ and $\Lambda(\widetilde L)=-E_{\widetilde L}$, so $\Lambda(\widetilde L)(q)(t)=Q^{\mathrm{res}}(t,q(t),q'(t))$ for every $t\in J$. [F3, F4, step 2.1, algebra]

4.1 Clause 2 implies clause 1: assume the Lagrange equations. Define $R:=\mathsf M x''-F(\cdot,x,x')$; the map $R$ is continuous because $x$ is $C^{2}$ and $F$ is continuous on its domain by the standing regularity of [[post-cm02-force-superposition]], and the equation $\mathsf M x''=F+R$ holds by construction. For the ideal condition, let $\delta\in\ker D_{x}g_{c}(t,x(t))$; by [F2], $\delta=DX(q(t))\hat\delta$ for some $\hat\delta$, so $R(t)\cdot\delta=\bigl(DX^{\mathsf T}R(t)\bigr)\cdot\hat\delta$ by [F5]; and $DX^{\mathsf T}R=DX^{\mathsf T}\bigl(\mathsf M x''-F\bigr)=DX^{\mathsf T}\bigl(\mathsf M x''+\nabla_{x}U-d\bigr)=-E_{\widetilde L}(q)-Q^{\mathrm{res}}=\Lambda(\widetilde L)(q)-Q^{\mathrm{res}}=0$ by [F3], [F4] and the assumed equations. Hence $R$ is an ideal reaction and $x$ is a constrained motion in the sense of clause 1. Together with step 3.1 this proves the equivalence. [F1, F2, F3, F4, step 1.1, algebra]

5.1 Clauses 3 and 4: if clause 1 holds with some reaction $R$, then $\mathsf M x''=F+R$ gives $R=\mathsf M x''-F$ uniquely, and [F5] applied at each $t$ to the surjective Jacobian $D_{x}g_{c}(t,x(t))$ and the ideal vector $R(t)$ gives the unique multiplier representation; the virtual displacement identification is [F2]. This proves clauses 3 and 4, completing the statement. [F1, F2, F5, step 2.1] ∎

## Remarks

- **What global coverage means.** The equivalence uses
  $X(\Omega)=\mathcal C\cap Q$, so every constrained configuration occurs as
  $X(q)$. The proof is pointwise and does not require one-to-one coordinates:
  coverings and other multiple-representation surjective immersions are
  permitted. For a map whose image covers only part of the locus, the theorem
  applies after restricting the constraint datum to that part.

- **Scleronomy is used twice.** Time-independence of the locus gives
  $(g_{c})_{t}=0$
  on $\Sigma$ (so parametrized curves have permitted velocity) and lets the
  kinetic energy be read as $\frac12v^{\mathsf T}\mathsf G(q)v$ without mixed
  $X_{t}$ terms. The rheonomic case has additional velocity-proportional
  terms in $\widetilde L$ and its own treatment through the moving-chart and
  constraint pages; no statement about it is made here.
