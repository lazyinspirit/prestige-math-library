---
id: pthm-cm08-moving-chart-energy-function
kind: physics-theorem
title: "The energy function of a moving chart: exact difference from the inertial mechanical energy and conservation along the chart solutions"
status: published
origin: session
domain: physics
dependency_level: 16
deps: [def-cm07-action-and-mechanical-lagrangian, pthm-cm07-coordinate-covariance-of-the-equations, pthm-cm07-euler-lagrange-equations, def-cm-time-dependent-lagrangian-and-action, def-cm-legendre-map-in-a-time-dependent-chart, prop-cm-mechanical-chart-lagrangian-is-hyperregular, prop-cm-hamiltonian-branch-identities, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-invertible-euclidean-linear-map, def-linear-map, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, def-vector-valued-derivative-and-integral, def-interval, cor-zero-derivative-implies-constant]
dependency_roles:
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  pthm-cm07-coordinate-covariance-of-the-equations: physical-result
  pthm-cm07-euler-lagrange-equations: physical-result
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  prop-cm-mechanical-chart-lagrangian-is-hyperregular: mathematical-premise
  prop-cm-hamiltonian-branch-identities: mathematical-premise
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-invertible-euclidean-linear-map: mathematical-premise
  def-linear-map: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The energy bookkeeping of a time-dependent coordinate description of the force model: for a C^3 coordinate map X with everywhere invertible configuration Jacobian and the substituted Lagrangian of the covariance theorem, the chart energy function equals the inertial mechanical energy plus or minus the pairing of the chart's explicit time dependence with the mass-operator velocity, so the two agree exactly when that pairing vanishes; the chart energy function is conserved along chart Euler-Lagrange solutions whenever the substituted Lagrangian has no explicit time dependence along the trajectory; and in the global potential branch the chart description of every motion solves that chart equation. The statement concerns the model's coordinate description, is conditional on the adopted force branch and the declared presentation, and asserts no measurement and no identification of the chart energy with the inertial mechanical energy."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 2.3, chapter pages 7-10 (PDF pages 25-28): the Hamiltonian function of the bead on the rotating ring differs from the mechanical energy by mR^2 omega^2 sin^2(theta) while H itself is conserved because the Lagrangian has no explicit time dependence"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 2.4.1 'Example: Homogeneity of Time', printed page 26 (PDF page 32): the relation between the conserved energy-type charge and the explicit time dependence of the Lagrangian"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 5.4.4: transforming to rotating coordinates, where the Hamiltonians differ by the product of the angular momentum and the angular velocity of the coordinate system"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---

## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with
masses $m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$ and $U$ of
[[def-cm03-potential-and-mechanical-energy]]. Let $\Omega\subseteq\mathbb R\times\mathbb R^{3N}$
be open and nonempty and let $X:\Omega\to Q$ be of class $C^{3}$ with
$X_{q}(t,q)$ invertible for every $(t,q)\in\Omega$; let

$$\widetilde O:=\bigl\{(t,q,v)\in\Omega\times\mathbb R^{3N}:\bigl(t,X(t,q),X_{t}(t,q)+X_{q}(t,q)v\bigr)\in O\bigr\},\qquad \widetilde L(t,q,v):=L\bigl(t,X(t,q),\,X_{t}(t,q)+X_{q}(t,q)v\bigr)$$

be the substituted data of [[pthm-cm07-coordinate-covariance-of-the-equations]].
Let $J\subseteq\mathbb R$ be an interval with nonempty interior, with derivatives at any included
endpoints understood one-sided, and let $q:J\to\mathbb R^{3N}$ be a $C^{2}$ curve with
$(t,q(t),q'(t))\in\widetilde O$ for every $t\in J$, and put $x(t):=X(t,q(t))$.
Define the **chart energy function** and the **inertial mechanical energy**
along the curve by

$$e(t):=q'(t)\cdot\widetilde L_{v}\bigl(t,q(t),q'(t)\bigr)-\widetilde L\bigl(t,q(t),q'(t)\bigr),\qquad E_{\mathrm{in}}(t):=K\bigl(x'(t)\bigr)+U\bigl(t,x(t)\bigr).$$

Then:

1. **(difference identity).** For every $t\in J$,

$$E_{\mathrm{in}}(t)=e(t)+\bigl\langle X_{t}\bigl(t,q(t)\bigr),\,\mathsf M x'(t)\bigr\rangle;$$

   equivalently
   $e(t)=\tfrac12\langle X_{q}v,\mathsf M X_{q}v\rangle-\tfrac12\langle X_{t},\mathsf M X_{t}\rangle+U(t,X)$
   at $(t,q(t),q'(t))$.
2. **(coincidence criterion).** $e(t)=E_{\mathrm{in}}(t)$ if and only if
   $\langle X_{t}(t,q(t)),\mathsf M x'(t)\rangle=0$; in particular
   $e=E_{\mathrm{in}}$ along the curve whenever $X_{t}(t,q(t))=0$.
3. **(conservation of the chart energy).** If
   $\widetilde L_{t}(t,q(t),q'(t))=0$ for every $t\in J$ and $q$ solves the
   chart Euler-Lagrange equation $E_{\widetilde L}(q)=0$ on $J$, then $e$ is
   constant on $J$; this includes in particular the case
   $\widetilde L_{t}\equiv0$ on $\widetilde O$.
4. **(model motions in the global potential branch).** If $d\equiv0$ and
   $x:J\to Q$ is a motion of the model with $q$ its chart description, then
   $E_{\widetilde L}(q)=0$ on $J$.

The difference identity and the coincidence criterion hold for every
presentation; clauses 3 and 4 are the conservation statement of the moving
description and its link to the model's motions. No identification of the
chart energy function with the inertial mechanical energy is asserted, and no
empirical content is claimed.

## Facts & Assumptions

**Given:** The model, the presentation $(U,d)$, the coordinate map $X$, the substituted data $\widetilde O,\widetilde L$, and the curve $q$ with $x=X\circ q$.

[F1] The substituted chart ([[pthm-cm07-coordinate-covariance-of-the-equations]], [[def-cm-time-dependent-lagrangian-and-action]]): $\widetilde O$ is open, $\widetilde L$ is $C^{2}$ on it, along the curve $E_{\widetilde L}(q)=X_{q}(t,q(t))^{\mathsf T}E_{L}(x)(t)$ with $x=X\circ q$, and if $d\equiv0$ and $x$ is a motion then $E_{L}(x)=0$ and hence $E_{\widetilde L}(q)=0$; this pointwise identity is applied on nondegenerate closed subintervals of $J^\circ$ and extended to included endpoints by continuity; also $x'(t)=X_{t}(t,q(t))+X_{q}(t,q(t))q'(t)$.

[F2] The mechanical Lagrangian ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]], [[def-cm01-configuration]]): $L(t,x,v)=K(v)-U(t,x)$ with $K(v)=\tfrac12\langle v,\mathsf M v\rangle$, $\mathsf M$ symmetric positive definite, $U$ of class $C^{2}$, $L_{v}=\mathsf M v$, $L_{x}=-\nabla_{x}U$; the force map is $F_{i}=-\nabla_{x_{i}}U+d_{i}$, and for $d\equiv0$ the motions satisfy $\mathsf M x''=-\nabla_{x}U$.

[F3] Mechanical chart Lagrangians ([[prop-cm-mechanical-chart-lagrangian-is-hyperregular]]): for $C^{2}$ fields $G,A,V$ on an open $J_{0}\times U_{0}$ with $G(t,q)$ symmetric positive definite, the Lagrangian $\mathcal L=\tfrac12v^{\mathsf T}Gv+A\cdot v-V$ is $C^{2}$ with $\mathcal L_{v}=Gv+A$, $\mathcal L_{vv}=G$, and is hyperregular with inverse Legendre branch $v=G^{-1}(p-A)$ in the sense of [[def-cm-legendre-map-in-a-time-dependent-chart]].

[F4] The hyperregular energy identity ([[prop-cm-hamiltonian-branch-identities]]): for a $C^{2}$ curve on an open interval $I$ satisfying $E_{\mathcal L}(q)=0$ on a hyperregular chart, the function $e=\mathcal L_{v}\cdot v-\mathcal L$ satisfies $e'(t)=-\mathcal L_{t}$ on $I$; if $\mathcal L_{t}$ vanishes along the trajectory, then $e$ is constant on $I$.

[F5] Calculus and linear algebra ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[def-vector-valued-derivative-and-integral]], [[def-euclidean-inner-product]], [[def-transpose-of-a-matrix]], [[def-matrix-product-and-identity-matrix]], [[def-linear-map]], [[def-invertible-euclidean-linear-map]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-interval]], [[cor-zero-derivative-implies-constant]], [[def-cm01-units]]): the Euclidean inner product is symmetric and bilinear; for a linear map $A$ one has $\langle A u,w\rangle=\langle u,A^{\mathsf T}w\rangle$; the composite $x=X\circ q$ is $C^{2}$ with the displayed derivative; and $\langle X_{q}v,\mathsf M X_{q}v\rangle>0$ for $v\ne0$ because $X_{q}$ is injective and $\mathsf M$ is positive definite.

## Proof

**Proof technique:** direct; expand the substituted Lagrangian and its velocity derivative, compare with the inertial mechanical energy, verify the mechanical-chart hypotheses for the substituted Lagrangian, and apply the hyperregular energy identity.

1.1 Clause 1, expansion: since $x'(t)=X_{t}+X_{q}q'$ by [F1], the definition of $\widetilde L$ gives $$\widetilde L=\tfrac12\bigl\langle X_{t}+X_{q}v,\mathsf M(X_{t}+X_{q}v)\bigr\rangle-U(t,X)=\tfrac12v^{\mathsf T}Gv+A\cdot v+\tfrac12\langle X_{t},\mathsf M X_{t}\rangle-U(t,X)$$ with $G=X_{q}^{\mathsf T}\mathsf M X_{q}$ and $A=X_{q}^{\mathsf T}\mathsf M X_{t}$, and $\widetilde L_{v}=Gv+A=X_{q}^{\mathsf T}\mathsf M(X_{t}+X_{q}v)$; hence $$e=\bigl\langle v,\widetilde L_{v}\bigr\rangle-\widetilde L=\tfrac12\bigl\langle X_{q}v,\mathsf M X_{q}v\bigr\rangle-\tfrac12\bigl\langle X_{t},\mathsf M X_{t}\bigr\rangle+U(t,X)$$ at $(t,q(t),q'(t))$, while $$E_{\mathrm{in}}=\tfrac12\bigl\langle X_{t}+X_{q}v,\mathsf M(X_{t}+X_{q}v)\bigr\rangle+U(t,X);$$ subtracting and expanding the square gives $E_{\mathrm{in}}-e=\langle X_{t},\mathsf M(X_{t}+X_{q}v)\rangle=\langle X_{t},\mathsf M x'\rangle$, which is the displayed difference identity. [F1, F2, F5, algebra]

1.2 Clause 4: by [F1], along the curve $q$ one has $E_{\widetilde L}(q)=X_{q}^{\mathsf T}E_{L}(x)$; if $d\equiv0$ and $x$ is a motion, then $E_{L}(x)=0$ by [F1] and [F2], so $E_{\widetilde L}(q)=0$ on $J$. [F1, F2, given]

2.1 Clause 3, local hyperregularity: put $D:=\Omega\cap(I_0\times\mathbb R^{3N})$, so $\widetilde O=D\times\mathbb R^{3N}$. By step 1.1, $\widetilde L=\tfrac12v^{\mathsf T}Gv+A\cdot v-V$ with $V:=U(t,X)-\tfrac12\langle X_t,\mathsf M X_t\rangle$. The fields $G,A,V$ are $C^2$ on $D$ because $X$ is $C^3$ and $U$ is $C^2$, and $G$ is symmetric positive definite by [F5]. Around each $(t,q)\in D$ choose an open product $J_0\times U_0\subseteq D$, with $J_0$ an interval and $U_0$ a ball. On this product [F3] applies, giving hyperregularity and the $C^2$ inverse $v=G^{-1}(p-A)$. These inverses agree on overlaps because the displayed formula is unique in each fibre; thus it defines a $C^2$ inverse on $D\times\mathbb R^{3N}$, and each product restriction is a hyperregular chart in the precise sense of [F3]. [F2, F3, F5, step 1.1]

2.2 Clause 2: by the difference identity of step 1.1, $e(t)=E_{\mathrm{in}}(t)$ holds exactly when $\langle X_{t}(t,q(t)),\mathsf M x'(t)\rangle=0$; if $X_{t}(t,q(t))=0$ the pairing vanishes identically along the curve. [step 1.1]

3.1 Clause 3, conservation: $J^\circ$ is a nonempty open interval. For each $t_0\in J^\circ$, choose a product neighborhood $J_0\times U_0\subseteq D$ of $(t_0,q(t_0))$ as in step 2.1. Continuity of $q$ gives an open interval $I\ni t_0$ inside $J^\circ\cap J_0$ with $q(I)\subseteq U_0$. On that restriction [F4] applies and gives $e'(t_0)=-\widetilde L_t(t_0,q(t_0),q'(t_0))=0$. Hence $e'=0$ throughout $J^\circ$ and $e$ is constant there by [F5]. The defining formula and $C^2$ regularity make $e$ continuous on $J$, so the same constant extends to every included endpoint. [F4, F5, step 2.1]

4.1 Clause 1 is step 1.1, clause 2 is step 2.2, clause 3 is step 3.1, and clause 4 is step 1.2; the chart energy function of a moving description is conserved along the chart solutions whenever the substituted Lagrangian has no explicit time dependence along the trajectory, and it coincides with the inertial mechanical energy exactly when the explicit time dependence pairs to zero with the mass-operator velocity. [step 1.1, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **The moving-chart boundary.** The identity of clause 1 is the exact bookkeeping behind the phrase "in a moving chart the Hamiltonian need not equal the mechanical energy": for a chart with $X_{t}\not\equiv0$ the two functions differ by $\langle X_{t},\mathsf M x'\rangle$, which is not constant in general, and clause 3 shows that the chart energy function can nevertheless be a conserved quantity of the chart equations. For a component of the model's motion the chart curve solves the chart equation in the global potential branch by clause 4, so a conserved chart energy that differs from the inertial mechanical energy is a genuine feature of the model's description and not a computational artefact. The concrete rotating-chart computation of the companion page evaluates both functions on explicit data.

- **Relation to the Hamiltonian.** On a hyperregular chart the chart energy function equals the branch Hamiltonian $H=p\cdot v-\widetilde L$ along the solutions ([[prop-cm-hamiltonian-branch-identities]] clause 3), so clause 3 is the statement that $H$ is a first integral of the chart equations when no explicit time dependence is present; this is the chart-level reading of the energy case of [[thm-cm-point-noether-identity-with-time-reparametrization]], applied to the substituted Lagrangian rather than to the inertial one.

- **Empirical status.** All clauses concern the model's coordinate description and are conditional deductions from the adopted force branch, the declared presentation and the smooth invertibility of $X$; no measurement is reported and no chart quantity is identified with a measured energy.
