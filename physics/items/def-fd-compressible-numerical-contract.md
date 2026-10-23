---
id: def-fd-compressible-numerical-contract
kind: definition
title: "Euler state, flux, positive set and numerical roles"
status: published
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-ideal-gas-euler-state-and-pressure
  - def-hll-two-wave-flux
  - def-pe03-first-order-hll-finite-volume-update
  - def-pe03-entropy-stable-dissipative-flux
dependency_roles:
  def-ideal-gas-euler-state-and-pressure: mathematical-premise
  def-hll-two-wave-flux: mathematical-premise
  def-pe03-first-order-hll-finite-volume-update: mathematical-premise
  def-pe03-entropy-stable-dissipative-flux: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter 3"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "Complete 143-page course notes; §§3.4.1–3.4.3, PDF pp. 94–98: finite-volume cell averages, the shared-flux update, and numerical conservation."
    - title: "E. Tadmor, Entropy Stable Schemes for Hyperbolic Conservation Laws, Handbook of Numerical Methods for Hyperbolic Problems, Vol. 17"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "Complete 27-page chapter; §§4.1–4.3 and 5: entropy variables, entropy-conservative fluxes, positive-semidefinite dissipation, and the distinct fully discrete analysis."
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions"
      url: "https://www.clawpack.org/riemann_book/html/Euler_approximate.html"
      locator: "Complete Euler approximate-solver chapter; HLLE two-wave middle state and supplied-wave-speed convention."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Definition

Fix a constant $\gamma>1$. The one-dimensional ideal-gas Euler state is
$U=(\rho,m,E)\in\mathcal G_\gamma\subset\mathbb R^3$, where
$$\mathcal G_\gamma=\left\{(\rho,m,E):\rho>0,\quad E-\frac{m^2}{2\rho}>0\right\}.$$
For $U\in\mathcal G_\gamma$, define the pressure, velocity, sound speed, and
flux by
$$p(U)=(\gamma-1)\left(E-\frac{m^2}{2\rho}\right),\qquad u(U)=\frac m\rho,\qquad c(U)=\sqrt{\frac{\gamma p(U)}{\rho}},\qquad F(U)=\left(m,\frac{m^2}{\rho}+p(U),u(U)(E+p(U))\right).$$
Thus $\mathcal G_\gamma$ is exactly the set with positive density and positive
pressure; every displayed map is defined on that open set.

For a periodic uniform mesh with $N\ge2$ cells, width $\Delta x>0$, and time
step $\Delta t\ge0$, index cells by $i\in\mathbb Z/N\mathbb Z$ and put
$\lambda=\Delta t/\Delta x$. Given cell states $U_i\in\mathcal G_\gamma$, a
shared-face flux is one vector $\widehat F_{i+1/2}\in\mathbb R^3$ assigned to
each face and used in both adjacent cell balances. When produced by a
two-state numerical flux $\widehat F(U_L,U_R)$, it is consistent if
$\widehat F(U,U)=F(U)$ for every $U\in\mathcal G_\gamma$. The associated
one-step update in conservative finite-volume form is
$$U_i^+=U_i-\lambda\left(\widehat F_{i+1/2}-\widehat F_{i-1/2}\right).$$
This shared-face form means that the same face vector appears with opposite
signs in the two neighboring cell updates. A step is admissible when every
output state $U_i^+$ belongs to $\mathcal G_\gamma$; this is a property to
prove under specific flux and time-step hypotheses, not part of the update
definition.

When the HLL middle branch is used at a face, its supplied speeds satisfy
$S_L<0<S_R$ and the flux is
$$\widehat F_{\rm HLL}(U_L,U_R)=\frac{S_RF(U_L)-S_LF(U_R)+S_LS_R(U_R-U_L)}{S_R-S_L}.$$
The speeds are supplied data; their appearance in this formula does not assert
that they enclose the waves of an exact nonlinear Riemann solution. The
ratio $\lambda$ is the time step divided by cell width and is not a physical
viscosity.

For a specified convex entropy pair, write $v$ for its entropy variable and
$F^{ec}$ for a consistent entropy-conservative two-point flux. If $D$ is a
symmetric positive-semidefinite matrix, meaning $z^TDz\ge0$ for every vector
$z$, and $F^{ec}$ satisfies
$$\bigl(v(U_R)-v(U_L)\bigr)^T F^{ec}(U_L,U_R)=\psi(U_R)-\psi(U_L),$$
where $\psi$ is the corresponding entropy potential, the entropy-stable
dissipative flux is
$$F^{es}(U_L,U_R)=F^{ec}(U_L,U_R)-\frac12D(U_L,U_R)\bigl(v(U_R)-v(U_L)\bigr).$$
Here $v=\nabla\eta$ for the chosen entropy $\eta$, and the entropy-conservative
flux satisfies the corresponding entropy-variable jump identity. This is a
separate flux condition; it includes no fully discrete time-step entropy
inequality. Conservation, admissibility, entropy stability, and convergence
therefore name different properties and require their own hypotheses.

The following schematic view shows the orientation of one shared face flux.
Positive flux points to the right; the same vector leaves cell $i$ and enters
cell $i+1$. The diagram records the indexing convention only; the update
formula supplies the definition used in proofs.

~~~tikz
\begin{tikzpicture}[x=1.15cm,y=1cm]
  \draw (0,0) rectangle (2,0.7);
  \draw (2,0) rectangle (4,0.7);
  \draw (4,0) rectangle (6,0.7);
  \node at (1,0.35) {$U_{i-1}$};
  \node at (3,0.35) {$U_i$};
  \node at (5,0.35) {$U_{i+1}$};
  \draw[->] (1.55,1.1) -- (2.45,1.1);
  \draw[->] (3.55,1.1) -- (4.45,1.1);
  \node at (2,1.4) {$\widehat F_{i-1/2}$};
  \node at (4,1.4) {$\widehat F_{i+1/2}$};
\end{tikzpicture}
~~~

## Definition references

[[def-ideal-gas-euler-state-and-pressure]] — fixes the one-dimensional Euler state, pressure, velocity, sound speed, flux, and admissible-state set.

[[def-hll-two-wave-flux]] — fixes the three-branch HLL flux and treats its wave speeds as supplied data.

[[def-pe03-first-order-hll-finite-volume-update]] — defines the periodic first-order HLL update and the ratio of time step to cell width.

[[def-pe03-entropy-stable-dissipative-flux]] — fixes the entropy-variable dissipation formula and states that it has no fully discrete time-step property.

[De Sterck and Ullrich, Chapter 3](https://climate.ucdavis.edu/AM452.pdf) — independent course-note treatment of finite-volume cell averages, shared fluxes, and discrete conservation.

[Tadmor, §§4.1–4.3 and 5](https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf) — full chapter treatment of entropy variables, dissipative fluxes, and fully discrete analysis.

[Ketcheson, LeVeque, and del Razo, Euler approximate-solver chapter](https://www.clawpack.org/riemann_book/html/Euler_approximate.html) — full chapter treatment of HLL intermediate states and supplied speeds.
