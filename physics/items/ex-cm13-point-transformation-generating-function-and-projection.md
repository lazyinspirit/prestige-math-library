---
id: ex-cm13-point-transformation-generating-function-and-projection
kind: example
title: "The point transformation of the model: the chart transition $(q,\\pi)\\mapsto(X(q),DX(q)^{-\\mathsf T}\\pi)$ is generated in the second kind, has a nowhere invertible $(q,Q)$-projection, and is contrasted with the momentum shift"
status: published
origin: session
domain: physics
dependency_level: 24
deps: [def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-canonical-form, def-cm13-canonical-map, pthm-cm13-generating-functions, def-cm-generating-function-of-the-first-and-second-kind, prop-cm-generating-functions-yield-canonical-maps, prop-cm-canonical-map-locally-has-a-generating-function, def-cm07-generalized-coordinates-and-forces, def-cm12-cotangent-momentum, def-cm12-hyperregularity, pthm-cm12-mechanical-hyperregularity, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, thm-euclidean-inverse-function-theorem, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-linear-map, def-invertible-matrix-and-general-linear-group, cor-square-matrix-invertible-iff-determinant-is-a-unit, def-determinant-of-a-square-matrix, def-euclidean-submersions-and-immersions]
dependency_roles:
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: physical-result
  def-cm13-canonical-form: formulation-prerequisite
  def-cm13-canonical-map: formulation-prerequisite
  pthm-cm13-generating-functions: physical-result
  def-cm-generating-function-of-the-first-and-second-kind: mathematical-premise
  prop-cm-generating-functions-yield-canonical-maps: mathematical-premise
  prop-cm-canonical-map-locally-has-a-generating-function: mathematical-premise
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm12-hyperregularity: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  thm-euclidean-inverse-function-theorem: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  cor-square-matrix-invertible-iff-determinant-is-a-unit: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-euclidean-submersions-and-immersions: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked projection and generating-function computation for the declared potential presentation: a genuine chart $X$ of the configuration domain induces the momentum chart transition from generalized momentum $\\pi$ to Cartesian momentum $P$, $(q,\\pi)\\mapsto(X(q),DX(q)^{-\\mathsf T}\\pi)$, generated in the second kind by the action-dimensioned function $S(q,P)=P\\cdot X(q)$; the transition has unit determinant and fails the first-kind projection hypothesis identically. The degenerate case is compared with the momentum shift, whose second-kind generating function is global. All quantities are model values of the declared idealization; no measurement is reported."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.4 and 4.4.3, printed pages 100-105 (PDF pages 106-111): the extension of a configuration-coordinate change to a canonical phase-space map, $P_i=(\\Theta^{-1})^{j}{}_{i}\\,p_j$, and the generating functions of the various kinds"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Sections 5.1 and 5.4.1: point transformations as canonical transformations extending configuration-coordinate changes, and the projection conditions for generating functions"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---
## Example

Declare the one-label model of the force branch
[[post-cm02-force-superposition]] with $N=1$, mass $m>0$, configuration
domain $Q=\mathbb R^{3}$, a $C^{2}$ potential and no residual forces, and let
$X:\Omega\to Q$ be a generalized-coordinate **chart** of the configuration
domain: $r=3$, $X$ of class $C^{3}$, $DX(q)$ invertible for every
$q\in\Omega$ ([[def-cm07-generalized-coordinates-and-forces]],
[[def-cm01-configuration]], [[def-cm03-potential-and-mechanical-energy]],
[[def-cm07-action-and-mechanical-lagrangian]]). Let the generalized
coordinates have declared dimensions $[q^a]=\gamma_a$; their conjugate
generalized momenta $\pi_a=\partial\widetilde L/\partial\dot q^a$ have
dimensions $[\pi_a]=\mu\ell^2\tau^{-1}\gamma_a^{-1}$. The Cartesian
positions $X^i(q)$ have dimension $\ell$ and their conjugate Cartesian
momenta $P_i$ have dimension $\mu\ell\tau^{-1}$, by
[[def-cm01-units]] and [[def-cm07-generalized-coordinates-and-forces]].
The induced momentum chart transition of the presentation is

$$\Phi_{X}(q,\pi)=\bigl(X(q),\ \mathsf M\,DX(q)G(q)^{-1}\pi\bigr)=\bigl(X(q),\ DX(q)^{-\mathsf T}\pi\bigr),$$

the second equality because
$\mathsf M\,DX\,G^{-1}=DX^{-\mathsf T}$ when $DX$ is invertible and
$G=DX^{\mathsf T}\mathsf M\,DX$
([[def-cm13-two-form]], [[def-cm12-cotangent-momentum]],
[[def-cm12-hyperregularity]]). Then:

1. the function
   $S(q,P):=P\cdot X(q)=\sum_{i=1}^{3}P_iX^i(q)$ on
   $\Omega\times\mathbb R^{3}$ is of class $C^{3}$ and has action dimension
   $[S]=[P_i][X^i]=\mu\ell^2\tau^{-1}$; its mixed derivative matrix
   $S_{qP}$ is $DX(q)^{\mathsf T}$, whose determinant is nonzero. Here $P$
   is the new Cartesian momentum, while $\pi$ is the old generalized
   momentum. The second-kind relations are
   $\pi=S_q=DX(q)^{\mathsf T}P$ and $Q=S_P=X(q)$, so solving for $P$ gives
   $(q,\pi)\mapsto(X(q),DX(q)^{-\mathsf T}\pi)$, exactly $\Phi_X$;
   consequently $\Phi_X$ is a canonical map of the presentation with
   $|\det D\Phi_X|=1$
   ([[def-cm-generating-function-of-the-first-and-second-kind]],
   [[prop-cm-generating-functions-yield-canonical-maps]]);
2. determinant check: with the block decomposition in source coordinates
   $(q,\pi)$ and target coordinates $(Q,P)$ the derivative is block
   triangular,

$$D\Phi_{X}=\begin{pmatrix}DX(q)&0\\ \partial_{q}\bigl(DX^{-\mathsf T}\pi\bigr)&DX(q)^{-\mathsf T}\end{pmatrix},\qquad \det D\Phi_X=\det DX(q)\cdot\det DX(q)^{-\mathsf T}=1;$$

3. the $(q,Q)$-projection $(q,\pi)\mapsto(q,X(q))$ is independent of the
   momentum and has derivative $\begin{pmatrix}I_{3}&0\\ DX(q)&0\end{pmatrix}$
   of rank $3<6$ at every point: it is nowhere invertible. Since a first-kind
   generating function requires the relation $p=S_{q}(q,Q)$ to be solvable
   for $Q$, i.e. the map $(q,Q)\mapsto(q,S_{q}(q,Q))$ to be a local
   diffeomorphism, the transition $\Phi_{X}$ admits **no first-kind
   generating function** near any point; the second-kind representation of
   claim 1 is the available local description
   ([[def-cm-generating-function-of-the-first-and-second-kind]],
   [[prop-cm-canonical-map-locally-has-a-generating-function]]);
4. contrast — the Cartesian momentum shift: for a constant $c\in\mathbb R^{3}$
   of momentum dimension the map
   $C(q,p)=(q,p+c)$ of the Cartesian chart is canonical trivially
   ($DC=I_{6}$), its first-kind projection is degenerate identically, and it
   has the **global** second-kind generating function
   $S(q,P)=q\cdot(P-c)$, also of action dimension, since $S_q=P-c$ and
   $S_P=q$ ([[pthm-cm13-generating-functions]] clause 2).

All quantities are model values of the declared idealization; no measurement
is reported.

## Facts & Assumptions

**Given:** The one-label model with a genuine chart $X$ of the configuration
domain, the induced momentum chart transition $\Phi_{X}$, and the
generating-function data of the two examples.

[F1] Chart data and units ([[def-cm07-generalized-coordinates-and-forces]], [[def-cm12-cotangent-momentum]], [[def-cm12-hyperregularity]], [[pthm-cm12-mechanical-hyperregularity]], [[def-cm13-two-form]], [[pthm-cm13-two-form-is-symplectic]], [[def-cm01-configuration]], [[def-cm01-units]]): $X$ is a $C^3$ immersion with $DX(q)$ invertible, $G=DX^{\mathsf T}\mathsf M DX$, the generalized momentum is $\pi=G(q)\dot q$ with $[\pi_a]=\mu\ell^2\tau^{-1}\gamma_a^{-1}$, and the transition is $\Phi_X(q,\pi)=(X(q),\mathsf M DX(q)G(q)^{-1}\pi)=(X(q),DX(q)^{-\mathsf T}\pi)$, whose output is Cartesian momentum of dimension $\mu\ell\tau^{-1}$.

[F2] Generating functions and their canonical maps ([[def-cm-generating-function-of-the-first-and-second-kind]], [[prop-cm-generating-functions-yield-canonical-maps]], [[prop-cm-canonical-map-locally-has-a-generating-function]], [[thm-euclidean-inverse-function-theorem]]): a second-kind datum with $\det S_{qP}\ne0$ generates a canonical $C^2$ local diffeomorphism via old generalized momentum $\pi=S_q$ and new Cartesian position $Q=S_P$, with unit determinant; a first-kind datum requires $\det S_{qQ}\ne0$, so $(q,Q)\mapsto(q,S_q(q,Q))$ is a local diffeomorphism. The generating functions have action dimension. For the point transformation the mathematical proposition applies with $O_q=\Omega$ and $O_P=\mathbb R^3$, using the standard source and target forms supplied by [F1]; the Cartesian-domain theorem [[pthm-cm13-generating-functions]] clause 2 applies to the momentum shift with $O_q=O_Q=O_P=\mathbb R^3$.

[F3] Calculus and matrix algebra ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-linear-map]], [[def-invertible-matrix-and-general-linear-group]], [[cor-square-matrix-invertible-iff-determinant-is-a-unit]], [[def-determinant-of-a-square-matrix]], [[def-euclidean-submersions-and-immersions]]): $S_q=DX^{\mathsf T}P$ has generalized-momentum components $[\pi_a]=[P_i][X^i][q^a]^{-1}$, so $S=P\cdot X(q)$ has action dimension; the displayed partial derivatives are computed by the ordinary rules, transposes and inverses obey $(A^{\mathsf T})^{-1}=(A^{-1})^{\mathsf T}$, and a matrix with a vanishing block column has rank at most the number of its nonzero columns.

## Verification

**Proof technique:** direct. Compute the mixed Hessian of the second-kind datum, generate the map, check the block-triangular determinant, examine the rank of the projection, and generate the momentum shift.

1.1 Second-kind generation: by [F3], $S_{P_i}=X^i(q)$ and $S_{q^a}=\sum_iP_i\partial X^i/\partial q^a$, so $S_{qP}=DX(q)^{\mathsf T}$ has nonzero determinant by [F1]. The generated relations of [F2] are $\pi=DX(q)^{\mathsf T}P$ and $Q=X(q)$, i.e. $P=DX(q)^{-\mathsf T}\pi$ and $Q=X(q)$: this is $\Phi_X$, canonical with unit determinant and with $[S]=[P_iX^i]=\mu\ell^2\tau^{-1}$; claim 1. [F1, F2, F3, algebra]

1.2 Momentum shift: for $C(q,p)=(q,p+c)$ the derivative is the identity, so $DC^{\mathsf T}J\,DC=J$ and the map is canonical; with $S(q,P)=q\cdot(P-c)$ one has $S_{q}=P-c$ and $S_{P}=q$, so [F2] gives $p=P-c$, $Q=q$, i.e. $C$, with $\det S_{qP}=\det I_{3}=1$; the first-kind projection $(q,p)\mapsto(q,q)$ is constant in $p$ and hence degenerate; this is claim 4. [F2, F3, algebra]

2.1 Determinant check: in the coordinates $(q,\pi)$ on the source and $(Q,P)$ on the target, the derivative of $\Phi_X$ is the displayed block-triangular matrix with diagonal blocks $DX(q)$ and $DX(q)^{-\mathsf T}$; because $\det A^{\mathsf T}=\det A$ and $\det(A^{-1})=(\det A)^{-1}$, its determinant is $\det DX\cdot(\det DX)^{-1}=1$, which is claim 2. [step 1.1, F3, algebra]

2.2 Projection obstruction: the $(q,Q)$-projection of $\Phi_X$ sends $(q,\pi)$ to $(q,X(q))$, with derivative the displayed block matrix whose second block column vanishes; its rank is at most $3<6$, so it is nowhere invertible. By [F2], a first-kind generating function would make $(q,Q)\mapsto(q,S_q(q,Q))$ a local diffeomorphism whose inverse is exactly this projection, which is impossible; hence no first-kind generating function exists near any point, proving claim 3. [step 1.1, F2, F3, algebra]

3.1 Collecting steps 1.1, 2.1, 2.2 and 1.2 proves the four claims on the declared data. [step 1.1, step 2.1, step 2.2, step 1.2] ∎
