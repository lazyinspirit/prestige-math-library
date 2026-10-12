---
id: pthm-cm13-liouville
kind: physics-theorem
title: "Liouville's theorem for a potential presentation: the phase-volume form $\\omega^{3N}/(3N)!$ and the Lebesgue measure in each canonical chart are preserved by the Hamiltonian evolution on its actual domains"
status: draft
origin: session
domain: physics
dependency_level: 22
deps: [def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-canonical-form, def-cm13-canonical-map, pthm-cm13-flow-preservation, pthm-cm13-hamiltonian-field-integrates-the-model-equations, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm02-newtonian-flow, def-countable-choice, cor-c-one-change-of-variables-for-l-one-functions, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-borel-sigma-algebra, def-integrable-real-and-complex-functions-and-their-integrals, thm-continuous-preimages-of-borel-sets-are-borel, thm-heine-borel-rn, thm-continuous-image-of-a-compact-space-is-compact, cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form, prop-cm-canonical-map-tests-and-hamiltonian-transport, thm-continuous-dependence-of-odes-on-initial-data-and-parameters, thm-c1-dependence-of-solutions-on-initial-data, def-smooth-differential-k-form, def-wedge-product-of-differential-forms, def-pullback-of-a-differential-form, def-ck-euclidean-maps-and-diffeomorphisms, def-metric-topology, def-interval]
dependency_roles:
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: physical-result
  def-cm13-canonical-form: formulation-prerequisite
  def-cm13-canonical-map: formulation-prerequisite
  pthm-cm13-flow-preservation: physical-result
  pthm-cm13-hamiltonian-field-integrates-the-model-equations: physical-result
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-countable-choice: mathematical-premise
  cor-c-one-change-of-variables-for-l-one-functions: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
  cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form: mathematical-premise
  prop-cm-canonical-map-tests-and-hamiltonian-transport: mathematical-premise
  thm-continuous-dependence-of-odes-on-initial-data-and-parameters: mathematical-premise
  thm-c1-dependence-of-solutions-on-initial-data: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-metric-topology: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Phase-volume conservation for the declared potential presentation: the top form $\\omega^{3N}/(3N)!$ is nowhere zero and is preserved by every time slice of the $C^{2}$ branch Hamiltonian evolution; the induced Lebesgue measure is preserved on bounded Borel sets of the actual flow domain, and measure comparison between charts is asserted only for genuine equal-dimensional chart transitions. The phase-volume unit is action to the power $3N$. The statement is a conditional deduction from the adopted force branch, the declared presentation and the cited mathematics, and in its measure-theoretic part it uses the Axiom of Countable Choice exactly where the cited change-of-variables theorem requires it; no empirical content is asserted."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.2, printed pages 88-90 (PDF pages 94-96): the proof that the phase-space volume in a neighbourhood is preserved, that the volume remains constant for all time, and the remark that the statement holds whether or not the system conserves energy"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 5.3: Liouville's theorem as the statement that time evolution preserves phase-space volume, with canonical transformations also preserving phase volumes"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 15.1-15.2: the incompressibility of the Hamiltonian flow in phase space"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---
## Statement

Assume the Axiom of Countable Choice, $\mathrm{AC}_\omega$
([[def-countable-choice]]), where the change-of-variables theorem below
requires it. Adopt the force model with potential presentation $(U,d)$ and
mechanical Lagrangian $L=K-U$ of
[[def-cm07-action-and-mechanical-lagrangian]] with the momentum charts and
two-form datum of [[def-cm13-two-form]], the canonical coordinates of
[[def-cm13-canonical-form]], the canonical maps of
[[def-cm13-canonical-map]] and the flow of [[pthm-cm13-flow-preservation]]:
$H:I_{0}\times W\to\mathbb R$ of class $C^{2}$ with
$H(t,x,p)=\tfrac12p\cdot\mathsf M^{-1}p+U(t,x)$ on the Cartesian phase domain
$W=Q\times\mathbb R^{3N}$ ([[def-cm12-hamiltonian]],
[[pthm-cm12-mechanical-hyperregularity]],
[[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]], [[def-cm01-configuration]],
[[def-cm01-units]]). Write $n:=3N$ and let

$$\Omega:=\frac{1}{n!}\,\omega^{\wedge n}$$

be the **phase-volume form of the presentation**. Its dimension is
$[\Omega]=[\omega]^n=(\mu\ell^2\tau^{-1})^{3N}$, namely action to the
power $3N$; the Lebesgue measure $\lambda_{6N}$ in a canonical phase chart
has the same phase-volume unit. By
[[cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form]]
applied to the symplectic phase domain of
[[pthm-cm13-two-form-is-symplectic]], $\Omega$ is a nowhere-zero top form
on the $6N$-dimensional Cartesian phase domain. Pointwise compatibility of
pullback with wedge products shows that it is preserved by every
equal-dimensional canonical transformation, not by a lower-dimensional
symplectic immersion. Let $t_{0}\in I_{0}$, $z_{0}\in
W$ and let $\Phi_{t}=\Phi(t;\cdot)$ be the time-$t$ solution map of the
Hamiltonian system on the neighbourhood $U_{0}$ supplied by
[[pthm-cm13-flow-preservation]], with image
$V_{t}:=\Phi_{t}(U_{0})$. Then:

1. **(form preservation)** For every $t$ on the existence interval,
   $\Phi_{t}^{*}\Omega=\Omega$ on $U_{0}$; the time slices of the model's
   Hamiltonian evolution preserve the phase-volume form.
2. **(measure preservation)** For every $t$ on the existence interval and
   every bounded Borel set $A\subseteq U_{0}$ with
   $\overline A\subseteq U_{0}$, the sets $A$ and $\Phi_{t}(A)$ are
   Lebesgue measurable and

$$\lambda_{6N}\bigl(\Phi_{t}(A)\bigr)=\lambda_{6N}(A),$$

   where $\lambda_{6N}$ is the Lebesgue measure of the chart
   ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]],
   [[def-borel-sigma-algebra]],
   [[def-integrable-real-and-complex-functions-and-their-integrals]]).
3. **(chart independence)** The measure statement is independent of the
   full-dimensional canonical chart: for two genuine $6N$-dimensional phase
   charts with a $C^{1}$ diffeomorphism transition $\Theta$ on an open
   overlap and a Borel set $B$ of finite measure in its domain,
   $\lambda_{6N}(\Theta(B))=\lambda_{6N}(B)$ because this
   equal-dimensional canonical transformation has $|\det D\Theta|=1$
   ([[def-cm13-canonical-form]],
   [[prop-cm-canonical-map-tests-and-hamiltonian-transport]]).
4. **(potential branch)** On the potential branch ($d\equiv0$) the time
   slices are the momentum-phase maps of the model's motions
   ([[pthm-cm13-hamiltonian-field-integrates-the-model-equations]]), so the
   model's Hamiltonian evolution conserves phase volume on its actual
   domains; no completeness and no all-time statement is claimed.

## Facts & Assumptions

**Given:** The presentation with its two-form and canonical charts, a $C^{2}$
branch Hamiltonian $H$, base data $(t_{0},z_{0})$, the solution map
$\Phi:[t_{0}-h,t_{0}+h]\times U_{0}\to W$ of
[[pthm-cm13-flow-preservation]], and the phase-volume form $\Omega$.

[F1] Flow regularity and canonicity ([[pthm-cm13-flow-preservation]], [[def-cm13-canonical-map]], [[prop-cm-canonical-map-tests-and-hamiltonian-transport]], [[def-cm13-two-form]], [[def-cm13-canonical-form]], [[pthm-cm13-two-form-is-symplectic]]): for each $t$ the map $\Phi_{t}$ is $C^{1}$ on $U_{0}$, is a canonical map with $\Phi_{t}^{*}\omega=\omega$, and satisfies $|\det D\Phi_{t}(z)|=1$ for every $z\in U_{0}$; at every point of $U_{0}$ it is a local diffeomorphism, so its image $V_{t}$ is open, and the inverse assignment on $V_{t}$ is the backward solution map $\Psi_{t}$, which is $C^{1}$ by [[thm-c1-dependence-of-solutions-on-initial-data]] applied with base time $t$ and the common existence interval of [[thm-continuous-dependence-of-odes-on-initial-data-and-parameters]].

[F2] Change of variables ([[cor-c-one-change-of-variables-for-l-one-functions]], [[def-countable-choice]]): assume $\mathrm{AC}_\omega$; for open $V,W\subseteq\mathbb R^{m}$ and a $C^{1}$ diffeomorphism $T:V\to W$, $\int_{W}f\,d\lambda_{m}=\int_{V}(f\circ T)|\det DT|\,d\lambda_{m}$ for every $f\in L^{1}(W)$.

[F3] Borel bookkeeping ([[thm-continuous-preimages-of-borel-sets-are-borel]], [[thm-heine-borel-rn]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[def-borel-sigma-algebra]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]): for Borel $A\subseteq U_{0}$ the image $\Phi_{t}(A)=\Psi_{t}^{-1}(A)\cap V_{t}$ is Borel, because $\Psi_{t}$ is continuous and $V_{t}$ is open; if $A$ is bounded with $\overline A\subseteq U_{0}$, then $\overline A$ is compact, $\Phi_{t}(\overline A)$ is compact and hence bounded, and the indicator of $\Phi_{t}(A)$ is a bounded measurable function of compact support, so it lies in $L^{1}$.

[F4] Top forms and pointwise pullback ([[cor-symplectic-manifolds-have-a-canonical-orientation-and-volume-form]], [[def-smooth-differential-k-form]], [[def-wedge-product-of-differential-forms]], [[def-pullback-of-a-differential-form]], [[def-cm13-canonical-map]]): $\Omega=\omega^{\wedge n}/n!$ is a nowhere-zero top form on the $2n=6N$ dimensional phase domain. For an equal-dimensional $C^1$ map, the pointwise pullback is compatible with wedges by its alternating multilinear definition, so $C^*(\omega^{\wedge n})=(C^*\omega)^{\wedge n}$ and a canonical map preserves $\Omega$; a different-dimensional source has a different form degree and its own degree-matched phase-volume form.

## Proof

**Proof technique:** direct. Pull the volume form back along the symplectic time-t map, and convert the measure statement into an integral identity covered by the change-of-variables theorem with unit Jacobian determinant.

1.1 By [F4] and the canonicity of [F1], $\Phi_{t}^{*}\Omega=\Phi_{t}^{*}(\omega^{\wedge n})/n!=(\Phi_{t}^{*}\omega)^{\wedge n}/n!=\omega^{\wedge n}/n!=\Omega$; this proves clause 1. [F1, F4, algebra]

1.2 By [F1] the map $\Phi_{t}:U_{0}\to V_{t}$ is a $C^{1}$ diffeomorphism onto the open set $V_{t}$ with inverse $\Psi_{t}$, and $|\det D\Phi_{t}|=1$; by [F3], for a bounded Borel $A\subseteq U_{0}$ with $\overline A\subseteq U_{0}$ both $A$ and $\Phi_{t}(A)$ are Borel and the indicator $f:=\mathbf 1_{\Phi_{t}(A)}$ lies in $L^{1}$. [F1, F3]

2.1 Applying the change-of-variables identity of [F2] with $T=\Phi_{t}$, $V=U_{0}$, $W=V_{t}$ and $f=\mathbf 1_{\Phi_{t}(A)}$: since $f\circ T=\mathbf 1_{A}$ and $|\det DT|=1$, the identity $\int_{W}f\,d\lambda=\int_{V}(f\circ T)|\det DT|\,d\lambda$ reads $\lambda_{6N}(\Phi_{t}(A))=\int_{U_{0}}\mathbf 1_{A}\,d\lambda_{6N}=\lambda_{6N}(A)$, which is clause 2; this is the point at which $\mathrm{AC}_\omega$ is used, through [F2]. [step 1.2, F2, algebra]

2.2 Clause 3: let $\Theta:U_1\to U_2$ be the genuine transition between two full-dimensional canonical charts on an open overlap. It is a $C^1$ diffeomorphism between open subsets of $\mathbb R^{6N}$ and has $|\det D\Theta|=1$ by [F1]. For a Borel set $B\subseteq U_1$ of finite measure, $\Theta(B)$ is Borel because $\Theta$ is a homeomorphism. For each integer $j\ge1$, set $E_j:=\Theta(B)\cap[-j,j]^{6N}$. Each $E_j$ is bounded Borel, so $\mathbf1_{E_j}\in L^1(U_2)$. Applying [F2] with $T=\Theta$ and $f=\mathbf1_{E_j}$ gives $\lambda_{6N}(E_j)=\lambda_{6N}(B\cap\Theta^{-1}([-j,j]^{6N}))$, since $\det D\Theta$ has absolute value one. As $j\to\infty$, both sets increase respectively to $\Theta(B)$ and $B$; continuity from below of Lebesgue measure yields $\lambda_{6N}(\Theta(B))=\lambda_{6N}(B)$. This proves chart-measure independence for genuine full-dimensional phase charts; a lower-dimensional immersion instead has its own degree-matched volume form $\omega_X^{\wedge r}/r!$. [step 1.2, F2, F1]

3.1 Clause 4 is the identification of the time slices with the momentum-phase maps of the model's motions on the potential branch, which is [F1] combined with [[pthm-cm13-hamiltonian-field-integrates-the-model-equations]] clause 1; collecting steps 1.1, 2.1 and 2.2 proves the theorem. [step 1.1, step 2.1, step 2.2, F1] ∎

## Remarks

- **Where the choice assumption is used.** $\mathrm{AC}_\omega$ enters only
  through the change-of-variables corollary [F2], in the measure-theoretic
  clauses 2 and 3; the form-level clause 1 and the autonomy-free determinant
  identity are choice-free.

- **Volume form versus coordinate measure.** On a full-dimensional canonical
  chart, $\Omega$ and the coordinate top form
  $dx^{1}\wedge\cdots\wedge dp_{3N}$ are nowhere-zero top forms, so they
  differ by a nowhere-zero continuous factor; clause 1 says the flow
  preserves the former and clause 2 that it preserves the latter, so the
  invariant phase volume does not depend on the chosen density representative.
  A lower-dimensional generalized-coordinate immersion has its own
  degree-matched phase-volume form $\omega_X^{\wedge r}/r!$.

- **Source caveat.** The cited treatments argue by the infinitesimal
  Jacobian and state that the conclusion holds for time-dependent
  Hamiltonians as well; the present theorem proves the corresponding
  statement with the hypotheses $\det D\Phi_{t}=1$ and the actual two-time
  solution domains, and makes no all-time or global claim.
