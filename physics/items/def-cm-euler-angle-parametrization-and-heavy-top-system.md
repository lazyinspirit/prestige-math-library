---
id: def-cm-euler-angle-parametrization-and-heavy-top-system
kind: definition
title: "The Euler-angle parametrization and the heavy symmetric top system"
status: published
origin: pipeline
domain: mathematics
dependency_level: 4
deps: [def-pi-via-first-positive-cosine-zero, cor-pi-is-the-first-positive-sine-zero, thm-sine-and-cosine-derivatives, thm-algebra-of-derivatives, thm-chain-rule, lem-cm-coordinate-rotation-matrices, lem-cm-skew-matrix-cross-product-correspondence, def-cm-special-orthogonal-group, lem-cm-so3-is-a-matrix-group, def-matrix-product-and-identity-matrix, def-sine-and-cosine-by-power-series, def-interval, def-derivative, def-ck-euclidean-maps-and-diffeomorphisms]
dependency_roles:
  def-pi-via-first-positive-cosine-zero: mathematical-premise
  cor-pi-is-the-first-positive-sine-zero: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  lem-cm-coordinate-rotation-matrices: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  lem-cm-so3-is-a-matrix-group: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  def-interval: mathematical-premise
  def-derivative: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.5 Eq. (3.54) and §3.6 Eqs. (3.62)-(3.70), printed pp. 62-68: the Euler-angle rotation, the heavy-top function and its two cyclic momenta and reduced energy"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 4 §4.5, Eqs. (4.74)-(4.85): Euler angles for the symmetric top, the exact reduced effective potential and the upright threshold"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), §2.10 (Axisymmetric Tops), Eqs. (2.84)-(2.91): the top Lagrangian, its momenta and reduced energy"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Definition

**Euler-angle parametrization.** Let $R_z,R_y$ be the coordinate rotation matrices of [[lem-cm-coordinate-rotation-matrices]]. The **Euler-angle parametrization** is the map
$$\Theta:\mathbb R\times(0,\pi)\times\mathbb R\longrightarrow SO(3),\qquad \Theta(\varphi,\theta,\psi):=R_z(\varphi)\,R_y(\theta)\,R_z(\psi),$$
which is $SO(3)$-valued by [[lem-cm-coordinate-rotation-matrices]] and [[lem-cm-so3-is-a-matrix-group]]. The numbers $(\varphi,\theta,\psi)$ are the **Euler angles** and the open set $\mathbb R\times(0,\pi)\times\mathbb R$ is its **domain**; $\theta$ is restricted to the open interval $(0,\pi)$ so that $\sin\theta>0$, with $\pi$ defined as twice the smallest positive cosine zero ([[def-pi-via-first-positive-cosine-zero]]) and positivity supplied by [[cor-pi-is-the-first-positive-sine-zero]]. No injectivity and no chart or diffeomorphism property of $\Theta$ is asserted or used here, and no periodicity of the angles is imposed — the real parameters stand for themselves.

**Parameters.** Fix reals $A>0$, $C>0$, $m>0$, $d>0$ and $g>0$; they are mathematical parameters, not identified with any physical quantity in this item.

**The heavy-top function.** Write $q=(\varphi,\theta,\psi)$ for a point of the domain and $v=(\varphi',\theta',\psi')$ for a triple of reals. The **heavy-top function** is
$$L(q,v):=\tfrac12A\bigl(\theta'^2+\varphi'^2\sin^2\theta\bigr)+\tfrac12C\bigl(\psi'+\varphi'\cos\theta\bigr)^2-mgd\cos\theta,$$
using the sine and cosine of [[def-sine-and-cosine-by-power-series]]. Repeated application of the sine/cosine derivative identities ([[thm-sine-and-cosine-derivatives]]) and the finite sum, product and chain rules ([[thm-algebra-of-derivatives]], [[thm-chain-rule]]) gives continuous partial derivatives of every order, so it is $C^\infty$ on the domain times $\mathbb R^3$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]); its relevant partial derivatives are, explicitly,
$$\partial_{\varphi'}L=A\varphi'\sin^2\theta+C\cos\theta\bigl(\psi'+\varphi'\cos\theta\bigr),\qquad \partial_\varphi L=0,$$
$$\partial_{\theta'}L=A\theta',\qquad \partial_\theta L=A\varphi'^2\sin\theta\cos\theta-C\bigl(\psi'+\varphi'\cos\theta\bigr)\varphi'\sin\theta+mgd\sin\theta,$$
$$\partial_{\psi'}L=C\bigl(\psi'+\varphi'\cos\theta\bigr),\qquad \partial_\psi L=0.$$

**The heavy-top system.** Let $I\subseteq\mathbb R$ be an interval with at least two points. A **heavy-top trajectory** for these parameters is a twice-differentiable curve $q=(\varphi,\theta,\psi):I\to\mathbb R\times(0,\pi)\times\mathbb R$ such that, with $q'=(\varphi',\theta',\psi')$ its derivative, the three second-order equations
$$\frac{d}{dt}\Bigl(A\varphi'\sin^2\theta+C\cos\theta\bigl(\psi'+\varphi'\cos\theta\bigr)\Bigr)=0,\qquad \frac{d}{dt}\bigl(A\theta'\bigr)=A\varphi'^2\sin\theta\cos\theta-C\bigl(\psi'+\varphi'\cos\theta\bigr)\varphi'\sin\theta+mgd\sin\theta,$$
$$\frac{d}{dt}\Bigl(C\bigl(\psi'+\varphi'\cos\theta\bigr)\Bigr)=0$$
hold on $I$, all functions being evaluated at $t$. These displayed equations are the definition of the system; they are written out so that no separate definition of a variational principle is needed. The first and third are the statements that $\partial_{\varphi'}L$ and $\partial_{\psi'}L$ are constant along the trajectory.

## Remarks

- **The system as displayed is what later items use.** The three equations above are the system studied in [[thm-cm-heavy-top-reduction]]; that item derives the conservation laws and the reduced one-dimensional equation directly from these displayed equations. Naming $L$ records the intended reading, but no variational derivation is invoked anywhere on this page, and none of the claims below depends on one.

- **The angular-velocity interpretation is a separate lemma.** That $L$ is the kinetic-minus-potential reading of a rotating body with principal moments $A,A,C$ under a uniform field, and that the variables $(\varphi,\theta,\psi)$ are the same angles that parametrize the rigid placement, is the content of [[lem-cm-euler-angle-angular-velocity]] and of the physical items that consume this pair, not of this definition.

- **No physical law is asserted here.** That a physical symmetric top satisfies such a system, and what the parameters $A,C,m,d,g$ mean physically, are postulates or derived statements of the consuming physics pages.
