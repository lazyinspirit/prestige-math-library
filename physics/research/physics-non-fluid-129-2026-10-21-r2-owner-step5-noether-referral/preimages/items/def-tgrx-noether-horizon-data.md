---
id: def-tgrx-noether-horizon-data
kind: definition
title: Stationary covariant Noether boundary data
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-lie-derivative-of-a-tensor-field
  - def-lie-derivative-of-a-differential-form
dependency_roles:
  def-lie-derivative-of-a-tensor-field: mathematical-premise
  def-lie-derivative-of-a-differential-form: mathematical-premise
physical_scope: >
  Smooth classical diffeomorphism-covariant metric field theories with a
  specified finite-jet Lagrangian, stationary nondegenerate bifurcate horizon,
  globally compatible Noether charge, and explicitly integrable asymptotic
  Hamiltonian boundary data. It does not adopt a quantum model or identify
  Noether-charge entropy with thermodynamic entropy.
sources:
  references:
    - title: "Vivek Iyer and Robert M. Wald, Some Properties of Noether Charge and a Proposal for Dynamical Black Hole Entropy, §§2–4"
      url: "https://arxiv.org/pdf/gr-qc/9403028"
    - title: "Geoffrey Compère and Adrien Fiorucci, Advanced Lectures on General Relativity, §§1.3.1–1.3.3 and §1.4.2"
      url: "https://arxiv.org/pdf/1801.07064"
    - title: "Daniel Harlow and Jie-qiang Wu, Covariant phase space with boundaries, §§2.2–2.4"
      url: "https://arxiv.org/pdf/1906.08616"
verification:
  precheck: pending
---

## Definition

Let $n\ge2$, let $M$ be an oriented, time-oriented smooth $n$-manifold, and let $g$ be a smooth Lorentzian metric of signature $(-,+,\ldots,+)$. Write $\boldsymbol\epsilon_g$ for its oriented metric volume form. Let $\nabla$ be its Levi-Civita connection, the unique torsion-free, metric-compatible connection. Let $\phi=(g,\psi)$ denote a smooth section of a specified field bundle $\pi:E\to M$, including the metric and any other dynamical fields $\psi$ that are smooth tensor fields with the pullback action of spacetime diffeomorphisms. An admitted field family is a smooth map $\Phi:P\times M\to E$ with $\pi(\Phi(p,x))=x$, where $P$ is a finite-dimensional smooth parameter manifold; for $v\in T_pP$, $\delta_v\phi$ is the derivative of $\Phi$ along any smooth parameter curve with initial velocity $v$. A **finite-jet Lagrangian $n$-form** is a smooth spacetime $n$-form $\mathcal L(\phi)$ whose coordinate coefficients depend smoothly on the field components and finitely many spacetime derivatives. It is **diffeomorphism-covariant** when pullback by every admitted local diffeomorphism $\Psi$ satisfies $\mathcal L(\Psi^*\phi)=\Psi^*\mathcal L(\phi)$.

A **chosen covariant first-variation decomposition** is data consisting of an Euler–Lagrange expression $E_\phi[\eta]$, the $n$-form linear in a field variation $\eta$ left after spacetime derivatives have been moved off $\eta$ by integration by parts, and a covariant $(n-1)$-form $\theta(\phi;\eta)$, also linear in $\eta$, such that
$$\delta\mathcal L=E_\phi[\delta\phi]+d\theta(\phi;\delta\phi)$$
for every admitted smooth finite-dimensional family of fields. Here covariance means that for every admitted local diffeomorphism $\Psi$ and field variation $\eta$,
$$E_{\Psi^*\phi}[\Psi^*\eta]=\Psi^*E_\phi[\eta],\qquad \theta(\Psi^*\phi;\Psi^*\eta)=\Psi^*\theta(\phi;\eta).$$
The choice of $\theta$ is part of the data and need not be unique. A solution has $E_\phi=0$; a linearized solution $\delta\phi$ at $\phi$ has $\delta E_\phi[\delta\phi]=0$.

A smooth embedded submanifold is **spacelike** when its induced metric is positive definite. A smooth embedded codimension-one submanifold $N\subset M$ is a **null hypersurface** when the pullback metric $g|_{TN}$ is degenerate with a one-dimensional kernel; that kernel is the null line distribution tangent and normal to $N$.

A **stationary solution with generator $\xi$** is a solution $\phi$ and a fixed smooth spacetime vector field $\xi$ such that $\mathcal L_\xi\phi=0$. Thus $\mathcal L_\xi g=0$, so $\xi$ is a Killing field of $g$. A **bifurcate Killing horizon** is a pair of smooth embedded null hypersurfaces $N_+$ and $N_-$, each invariant under the local flow of $\xi$, meeting transversely in a compact codimension-two submanifold $B$, such that away from $B$ the nonzero field $\xi$ spans the null line distribution of each hypersurface and $\xi=0$ on $B$. Fix $B$ to be oriented, boundaryless, and spacelike. Choose a future-directed unit timelike normal $u$ and a chosen unit spacelike normal $n_B$ along $B$, orthogonal to each other, and define the binormal $\epsilon_{ab}=2u_{[a}(n_B)_{b]}$, so $\epsilon_{ab}\epsilon^{ab}=-2$. Orient $B$ compatibly with the spacetime orientation and this normal frame so that, on $B$, $(\boldsymbol\epsilon_g)_{ab a_3\ldots a_n}=\epsilon_{ab}(dA_B)_{a_3\ldots a_n}$; here $dA_B$ is the positive volume form of the induced metric with that orientation. The horizon is **nondegenerate** when the fixed normalization of $\xi$ gives a constant $\kappa>0$ on $B$ with $\nabla_a\xi_b=\kappa\epsilon_{ab}$ there; $\kappa$ is its surface gravity. Variations keep $\xi$ and the embedded surface $B$ fixed.

For such data define the **Noether current** $(n-1)$-form
$$J_\xi:=\theta(\phi;\mathcal L_\xi\phi)-\iota_\xi\mathcal L.$$
Choose a smooth covariant $(n-2)$-form $Q_\xi$ on a neighborhood of the admitted field data and define the residual constraint form $C_\xi:=J_\xi-dQ_\xi$. Require $C_\xi=0$ on the selected solution and, for each admitted linearized perturbation used below, require its fixed-$\xi$ variation $\delta C_\xi=0$. These are explicit on-shell and linearized-constraint conditions; no existence or global exactness of $Q_\xi$ follows merely from closure of a presymplectic current. The pullback of $Q_\xi$ is required to be globally compatible on the integration region.

Here a **smooth solution space** $\mathcal S$ is a specified smooth manifold whose points are the admitted smooth solution fields satisfying the chosen boundary falloff. A smooth curve in $\mathcal S$ is viewed as a family of sections of $E$; its tangent vector $v\in T_\phi\mathcal S$ induces a field variation $\delta_v\phi$. Every admitted perturbation used in the constraint-variation and boundary-charge statements below is such a tangent variation, and $d_{\mathcal S}H_\xi$ acts on these tangent vectors.

Boundary data also include a family of closed codimension-two surfaces $S_R$ approaching the asymptotic boundary, and finite oriented smooth singular hypersurface chains $C_R$ with $\partial C_R=S_R-B$. With a fixed boundary-term convention, define the charge-variation one-form by
$$\alpha_\xi(\delta\phi):=\lim_{R\to\infty}\int_{S_R}\bigl(\delta Q_\xi-\iota_\xi\theta(\phi;\delta\phi)\bigr).$$
Require this limit to exist and be globally integrable: there is a smooth Hamiltonian charge $H_\xi$ on the specified solution space with $d_{\mathcal S}H_\xi=\alpha_\xi$, where $d_{\mathcal S}$ is the exterior derivative on that solution space. This exactness, and the chosen boundary formula itself, are hypotheses. Other boundary actions or falloff conditions can add terms and require a separately stated charge formula.

For the algebraic-curvature subclass used in the entropy formulas, write $\mathcal L=\ell\boldsymbol\epsilon_g$, with $\ell=\ell(g_{ab},R_{abcd},\psi,\nabla\psi,\ldots,\nabla_{(a_1}\cdots\nabla_{a_m)}\psi)$, $m<\infty$, and no covariant derivatives of curvature. Use $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$, $R_{abcd}=g(R(e_c,e_d)e_b,e_a)$ in a local frame, and $R=g^{ac}g^{bd}R_{abcd}$. At fixed metric and matter-jet arguments, define $P^{abcd}$ as the Riemann-symmetric contravariant tensor representing the differential in the curvature argument:
$$d_R\ell[K]=P^{abcd}K_{abcd}$$
for every algebraic curvature variation $K_{abcd}$, where $K$ and $P$ have antisymmetry in each index pair, symmetry under exchange of the pairs, and the first Bianchi identity; explicitly, $P^{abcd}=-P^{bacd}=-P^{abdc}=P^{cdab}$ and $P^{a[bcd]}=0$. The general finite-jet boundary data above also admit curvature-derivative theories; extending the entropy formula to them requires a separate treatment of the curvature-derivative terms.

Adopt the $c=1$ action-unit convention: time is measured as length, $[\hbar]=\text{action}$, and $[k_B]=\text{energy}/\text{temperature}$; neither $\hbar$ nor $k_B$ is set to $1$. Normalize the flow parameter of the fixed generator $\xi$ in length units. Then its Lie action and $\nabla\xi$ have units $L^{-1}$, and the surface gravity $\kappa$ in $\nabla_a\xi_b=\kappa\epsilon_{ab}$ has units $L^{-1}$. The spacetime integral of $\mathcal L$ has units of action, so if $\mathcal L=\ell\boldsymbol\epsilon_g$, then $[\ell]=\text{action}\,L^{-n}$. Since curvature has units $L^{-2}$, the Einstein--Hilbert normalization $\ell_{\rm EH}=R/(16\pi G)$ in $n$ spacetime dimensions has $[G]=L^{n-2}\,\text{action}^{-1}$. In the algebraic-curvature subclass, $d_R\ell[K]=P^{abcd}K_{abcd}$ gives $[P]=\text{action}\,L^{2-n}$, and the downstream functional $-(2\pi k_B/\hbar)\int_B P^{abcd}\epsilon_{ab}\epsilon_{cd}\,dA_B$ has entropy units $k_B$. The integrated Noether charge and $H_\xi$ have energy units, consistent with $\hbar\kappa\,\delta S_W/k_B$.

When SI units are restored for the $n$-dimensional Einstein--Hilbert normalization $c^3R/(16\pi G)$, $[G]={\rm m}^{n-1}{\rm kg}^{-1}{\rm s}^{-2}$ and $[A_B]={\rm m}^{n-2}$, so the area expression is $S_W=k_Bc^3A_B/(4G\hbar)$. In four spacetime dimensions this is the usual SI Newton constant in ${\rm m}^3{\rm kg}^{-1}{\rm s}^{-2}$ and horizon area in ${\rm m}^2$; the SI acceleration surface gravity is $\kappa_{\rm acc}=c^2\kappa_{\rm geom}$.

## Definition references

[Some Properties of Noether Charge, §§2–4](https://arxiv.org/pdf/gr-qc/9403028)

[Advanced Lectures on General Relativity, §§1.3.1–1.3.3 and §1.4.2](https://arxiv.org/pdf/1801.07064)

[Covariant phase space with boundaries, §§2.2–2.4](https://arxiv.org/pdf/1906.08616)

[[def-lie-derivative-of-a-tensor-field]]

[[def-lie-derivative-of-a-differential-form]]

## Remarks

The exact boundary charge and globally compatible $Q_\xi$ are inputs. The physical interpretation of a resulting Noether-charge entropy as a thermodynamic state function is a separate assumption; this definition does not derive that identification.
