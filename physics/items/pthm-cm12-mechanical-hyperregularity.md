---
id: pthm-cm12-mechanical-hyperregularity
kind: physics-theorem
title: "Every potential presentation is hyperregular in its charts, with inverse branch $v = \\mathsf M^{-1}p$ (or $G(q)^{-1}p$) and the explicit kinetic-plus-potential Hamiltonian"
status: draft
origin: session
domain: physics
dependency_level: 17
deps: [def-cm12-hyperregularity, def-cm12-hamiltonian, def-cm12-cotangent-momentum, def-cm12-regularity, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, prop-cm-mechanical-chart-lagrangian-is-hyperregular, def-cm-legendre-map-in-a-time-dependent-chart, def-euclidean-inner-product]
dependency_roles:
  def-cm12-hyperregularity: formulation-prerequisite
  def-cm12-hamiltonian: formulation-prerequisite
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm12-regularity: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  prop-cm-mechanical-chart-lagrangian-is-hyperregular: mathematical-premise
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Globality of the Legendre transformation of a declared potential presentation of the force branch: the velocity-to-momentum maps of the Cartesian chart and of a declared generalized-coordinate chart are C^2 bijections of each velocity fibre onto the full momentum fibre, with the explicit C^2 inverse branches v = M^{-1}p and v = G(q)^{-1}p, and the Hamiltonians of those branches have the explicit kinetic-plus-potential forms. The statement is a conditional deduction from the adopted force branch, the declared presentation and the cited mathematics; it asserts no equation of motion, no conservation law and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.1.3, printed page 84 (PDF page 90): the particle in a potential, p = m r-dot and H = p^2/(2m) + V(r)"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 10.1, chapter page 2 (PDF page 238): qdot = p/m_ef and H = p^2/(2m_ef) + U_ef(q,t), followed by the Hamilton equations returning the Lagrange equation"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed page 9 (PDF page 12): for L = L_0 + a.qdot + qdot.T.qdot/2 with T positive definite, qdot = T^{-1}(p - a) and H = (p - a).T^{-1}.(p - a)/2 - L_0"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 8.2: for scleronomic systems with velocity-independent potentials the standard Lagrangian makes H = T + V an identity"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]] with the
data and conventions of [[def-cm12-cotangent-momentum]]: masses
$m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$
([[def-cm01-configuration]]), $C^{2}$ potential
$U:I_{0}\times Q\to\mathbb R$ and residual forces $d$ of the standing
regularity ([[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]]). Let $X:\Omega\to Q$ be a
generalized-coordinate map with substituted Lagrangian $\widetilde L$,
kinetic metric $G(q)=DX(q)^{\mathsf T}\mathsf M\,DX(q)$ and substituted
potential $\widetilde U(t,q)=U(t,X(q))$
([[def-cm07-generalized-coordinates-and-forces]]), and let $H$ and
$\widetilde H$ be the Hamiltonians of [[def-cm12-hamiltonian]]. Then:

1. **(Cartesian chart)** The fibre momentum map
   $\mathbb F_{t,x}(v)=\mathsf Mv$ is a bijection of $\mathbb R^{3N}$ onto
   $\mathbb R^{3N}$ for every $(t,x)\in I_{0}\times Q$, and the inverse
   Legendre branch is the $C^{2}$ map
   $v(t,x,p)=\mathsf M^{-1}p$ on the whole phase chart
   $I_{0}\times Q\times\mathbb R^{3N}$. Hence the presentation is
   hyperregular on the Cartesian chart in the sense of
   [[def-cm12-hyperregularity]], and the Hamiltonian of the branch is

$$H(t,x,p)=\tfrac12\,p\cdot\mathsf M^{-1}p+U(t,x),$$

with the dot product of [[def-euclidean-inner-product]],

   a $C^{2}$ function of dimension $\mu\ell^{2}\tau^{-2}$.

2. **(generalized-coordinate chart)** The fibre map
   $v\mapsto G(q)v$ is a bijection of $\mathbb R^{r}$ onto $\mathbb R^{r}$
   for every $(t,q)\in I_{0}\times\Omega$, and the inverse Legendre branch is
   the $C^{2}$ map $v(t,q,p)=G(q)^{-1}p$ on
   $I_{0}\times\Omega\times\mathbb R^{r}$. Hence the presentation is
   hyperregular on the chart of $X$, and the Hamiltonian in the coordinates
   $X$ is

$$\widetilde H(t,q,p)=\tfrac12\,p\cdot G(q)^{-1}p+\widetilde U(t,q),$$

   a $C^{2}$ function of dimension $\mu\ell^{2}\tau^{-2}$.

The statement is conditional on the adopted force branch and the declared
presentation; it asserts no equation of motion, no conservation law and no
empirical content.

## Facts & Assumptions

**Given:** The model data, the mechanical Lagrangian $L=K-U$, the generalized-coordinate map $X$ with substituted Lagrangian, kinetic metric and substituted potential, and the Hamiltonians $H$, $\widetilde H$ defined on the inverse branches.

[F1] Model and Lagrangian data ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]], [[def-cm01-configuration]]): $L(t,x,v)=\tfrac12v\cdot\mathsf Mv-U(t,x)$ with $\mathsf M$ a symmetric positive definite linear map of $\mathbb R^{3N}$ and $U$ of class $C^{2}$; the standing regularity of the force branch holds; dimensions are read by [[def-cm01-units]].

[F2] Mechanical chart Lagrangian ([[prop-cm-mechanical-chart-lagrangian-is-hyperregular]]): for $C^{2}$ data $G,A,V$ with $G(t,q)$ symmetric positive definite, the Legendre map $(t,q,v)\mapsto(t,q,G(t,q)v+A(t,q))$ is a $C^{2}$ bijection of the chart onto itself with $C^{2}$ inverse $v(t,q,p)=G(t,q)^{-1}(p-A(t,q))$, and the Hamiltonian of the inverse branch is $H(t,q,p)=\tfrac12(p-A(t,q))^{\mathsf T}G(t,q)^{-1}(p-A(t,q))+V(t,q)$.

[F3] Generalized-coordinate dictionary ([[def-cm07-generalized-coordinates-and-forces]]): the substituted Lagrangian is $\widetilde L(t,q,v)=\tfrac12v^{\mathsf T}G(q)v-\widetilde U(t,q)$ with $\widetilde U(t,q)=U(t,X(q))$, $G(q)=DX(q)^{\mathsf T}\mathsf M\,DX(q)$ symmetric positive definite, and the entries of $G$ are as regular as required by the cited closure properties.

[F4] Branch and Hamiltonian vocabulary ([[def-cm12-hyperregularity]], [[def-cm12-hamiltonian]], [[def-cm12-cotangent-momentum]], [[def-cm-legendre-map-in-a-time-dependent-chart]]): hyperregularity on a chart means that the fibre momentum map is a bijection onto the momentum fibre with a $C^{1}$ inverse assignment on the whole phase domain; the Hamiltonian of the presentation is $p\cdot v(t,q,p)-\mathcal L(t,q,v(t,q,p))$ on that branch; the fibre derivative is the momentum covector $p$ of the presentation.



## Proof

**Proof technique:** direct; identify the model's chart Lagrangians with mechanical chart Lagrangians and apply the explicit hyperregularity proposition, then identify the branch and Hamiltonian with the definitions.

1.1 By [F1] one has $L(t,x,v)=\tfrac12v\cdot\mathsf Mv-U(t,x)$ with $\mathsf M$ symmetric positive definite and $U$ of class $C^{2}$, so $L$ is the mechanical chart Lagrangian of [F2] with the $C^{2}$ data $G:=\mathsf M$, $A:=0$, $V:=U$; [F2] therefore gives that $(t,x,v)\mapsto(t,x,\mathsf Mv)$ is a $C^{2}$ bijection of $I_{0}\times Q\times\mathbb R^{3N}$ onto itself with $C^{2}$ inverse $v(t,x,p)=\mathsf M^{-1}p$, and that the Hamiltonian of the branch is $H(t,x,p)=\tfrac12p\cdot\mathsf M^{-1}p+U(t,x)$, of energy dimension by [F1]. [F1, F2, algebra]

1.2 By [F3] the substituted Lagrangian is $\widetilde L(t,q,v)=L(t,X(q),DX(q)v)=\tfrac12v^{\mathsf T}G(q)v-\widetilde U(t,q)$ with $G(q)$ symmetric positive definite; [F2] applied with the $C^{2}$ data $G:=G(\cdot)$, $A:=0$, $V:=\widetilde U$ gives that $(t,q,v)\mapsto(t,q,G(q)v)$ is a $C^{2}$ bijection of $I_{0}\times\Omega\times\mathbb R^{r}$ onto itself with $C^{2}$ inverse $v(t,q,p)=G(q)^{-1}p$, and that the Hamiltonian of the branch is $\widetilde H(t,q,p)=\tfrac12p\cdot G(q)^{-1}p+\widetilde U(t,q)$. [F2, F3, algebra]

2.1 By [F4] the bijectivity of each fibre momentum map with a $C^{1}$ (indeed $C^{2}$) inverse on the whole phase domain is exactly hyperregularity on the corresponding chart, and the functions computed in steps 1.1 and 1.2 are exactly the Hamiltonians of [[def-cm12-hamiltonian]] on those branches; this proves clauses 1 and 2. [F4, step 1.1, step 1.2]

3.1 Collecting steps 1.1, 1.2 and 2.1 gives both clauses with the displayed $C^{2}$ inverse branches and Hamiltonians; no equation of motion, conservation law or empirical claim is used. [step 1.1, step 1.2, step 2.1] ∎

## Remarks

- **The model is never singular.** Clauses 1 and 2 show that the mechanical
  presentations of the framework are hyperregular on every chart of the
  model: the positive definiteness of the mass operator and of the kinetic
  metric makes each fibre momentum map a linear isomorphism, so the inverse
  branch is global in the fibre and given in closed form. This is the
  positive case anticipated by [[def-cm12-regularity]] and
  [[def-cm12-hyperregularity]]; no such conclusion holds for general
  Lagrangians, as the companion page's examples record.

- **A linear specialisation of the cited proposition.** The mathematical
  content is the proposition [[prop-cm-mechanical-chart-lagrangian-is-hyperregular]]
  instantiated at the model's data; the physical content is the
  identification of those data with the declared presentation, which fixes
  the meanings $p=\mathsf Mv$, $v=\mathsf M^{-1}p$ and
  $H=\tfrac12p\cdot\mathsf M^{-1}p+U$ in terms of the labels, masses and
  potential. The residual forces $d$ do not enter the branch or the
  Hamiltonian; they reappear as momentum sources in the equivalence theorem
  of this page.
