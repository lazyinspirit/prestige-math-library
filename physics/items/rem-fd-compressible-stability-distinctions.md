---
id: rem-fd-compressible-stability-distinctions
kind: remark
title: "Entropy, invariant-domain and weak-limit hypotheses"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - alg-pe03-convex-scaling-positivity-limiter
  - def-countable-choice
  - def-pe03-convex-invariant-domain
  - def-pe03-entropy-stable-dissipative-flux
  - lem-pe03-hll-half-cell-riemann-averages
  - prop-fd-shared-face-global-conservation
  - thm-conservative-finite-volume-weak-limit
  - thm-pe03-hll-update-preserves-convex-invariant-domain
  - thm-pe03-ideal-gas-llf-branch-preserves-positivity
dependency_roles:
  alg-pe03-convex-scaling-positivity-limiter: mathematical-premise
  def-countable-choice: mathematical-premise
  def-pe03-convex-invariant-domain: mathematical-premise
  def-pe03-entropy-stable-dissipative-flux: mathematical-premise
  lem-pe03-hll-half-cell-riemann-averages: mathematical-premise
  prop-fd-shared-face-global-conservation: mathematical-premise
  thm-conservative-finite-volume-weak-limit: mathematical-premise
  thm-pe03-hll-update-preserves-convex-invariant-domain: mathematical-premise
  thm-pe03-ideal-gas-llf-branch-preserves-positivity: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter 3"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "Complete 143-page course notes; §§3.4.1–3.4.3, PDF pp. 94–98; the scalar weak-limit statement in §3.4.3 is not used as a system theorem."
    - title: "Xiangxiong Zhang and Chi-Wang Shu, On Positivity-Preserving High Order Discontinuous Galerkin Schemes for Compressible Euler Equations on Rectangular Meshes"
      url: "https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf"
      locator: "Complete 34-page article; §2, PDF pp. 5–9: Euler admissibility, split states, convexity, and finite-node limiter scope."
    - title: "E. Tadmor, Entropy Stable Schemes for Hyperbolic Conservation Laws, Handbook of Numerical Methods for Hyperbolic Problems, Vol. 17"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "Complete 27-page chapter; §§4.1–4.3 and 5, PDF pp. 11–20: entropy-variable dissipation and the separate fully discrete analysis."
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions"
      url: "https://www.clawpack.org/riemann_book/html/Euler_approximate.html"
      locator: "Complete Euler approximate-solver chapter; HLL fan state, supplied speeds, and Euler positivity discussion."
verification:
  precheck: pending
---

## Remark

The relevant numerical properties have separate hypotheses. A shared-face
finite-volume update on a periodic uniform grid with $N\ge2$ cells of common
width $\Delta x>0$ uses the same ratio $\lambda=\Delta t/\Delta x$ in every
cell, where $\Delta t\ge0$. Its balance is
$$U_i^+=U_i-\lambda(\widehat F_{i+1/2}-\widehat F_{i-1/2}),\qquad i\in\mathbb Z/N\mathbb Z,$$
with one vector flux per face shared by the two neighboring cells. Finite
telescoping conserves $\sum_iU_i$, and hence the total vector
$\Delta x\sum_iU_i$. That algebra alone gives no membership of the updated states
in an admissible set, entropy inequality, or convergence result.

For the symmetric ideal-gas HLL/LLF branch, the stated one-step positivity
result assumes $a\ge\max(|u_L|+c_L,|u_R|+c_R)$ and $2\lambda a\le1$ at every
face. For a general HLL middle branch, the convex invariant-domain result uses a
different explicit hypothesis. Let $K$ be a convex state set, meaning every
segment joining two members lies in $K$, and write $\nu=\Delta t/h$ for the
time-step-to-cell-width ratio in this HLL formula. The approximate HLL fan at a
face with $S_L<0<S_R$ has middle state
$$U_*=\frac{S_RU_R-S_LU_L-(F_R-F_L)}{S_R-S_L}.$$
This is the state in the two-wave approximation; its associated model flux is
not assumed to be the physical flux $F(U_*)$. The fan is $U_L$ to the left of
$S_L$, $U_*$ between $S_L$ and $S_R$, and $U_R$ to the right of $S_R$. Its
spatial averages over the left and right adjacent half-cells at time
$\Delta t$, respectively, are
$$A^-=(1-2\nu(-S_L))U_L+2\nu(-S_L)U_*,\qquad A^+=(1-2\nu S_R)U_R+2\nu S_RU_*,$$
under the one-sided bounds $2\nu(-S_L)\le1$ and $2\nu S_R\le1$. The HLL
invariant-domain result assumes both half-cell averages lie in $K$ at every
face and every cell mean lies in $K$. Since each cell update is the average of
its two adjacent half-cell averages, convexity then gives the updated mean in
$K$. A sufficient way to verify the fan-average hypothesis is to show
$U_L,U_R,U_*\in K$; the result does not infer $U_*\in K$ from supplied endpoint
speed estimates alone.

The sketch fixes the fan and half-cell conventions used in those formulas.
The horizontal axis is $x$, with $x=0$ at the face. The vertical arrow at the
left marks increasing time $t$ and is offset for readability; the label $0$
marks the face at $t=0$. The wave lines have supplied speeds $S_L<0<S_R$, with
their slopes representing $dx/dt$. The dashed verticals mark the adjacent cell
centers at $-h/2$ and $h/2$. The one-sided CFL bounds keep each wave inside its
half-cell through time $\Delta t$. The proof and averages are the displayed
algebraic formulas, not the drawing.

~~~tikz
\begin{tikzpicture}[x=2cm,y=1.15cm]
  \draw[->] (-1.35,0) -- (1.45,0) node[right] {$x$};
  \draw[->] (-1.3,0) -- (-1.3,1.2) node[above] {$t$};
  \draw[dashed] (-0.5,0) -- (-0.5,1.05);
  \draw[dashed] (0.5,0) -- (0.5,1.05);
  \draw[thick] (0,0) -- (-0.34,1);
  \draw[thick] (0,0) -- (0.34,1);
  \node at (-0.95,0.7) {$U_L$};
  \node at (0,0.68) {$U_*$};
  \node at (0.95,0.7) {$U_R$};
  \node[below] at (-0.5,0) {$-h/2$};
  \node[below] at (0.5,0) {$h/2$};
  \node[above right] at (-0.34,1) {$S_L$};
  \node[above left] at (0.34,1) {$S_R$};
  \node[below right] at (0,0) {$0$};
  \node[left] at (-1.3,1) {$\Delta t$};
\end{tikzpicture}
~~~

The entropy-stable dissipative-flux definition specifies a consistent
entropy-conservative flux with positive-semidefinite entropy-variable
dissipation, and explicitly supplies no fully discrete time-step inequality.
Any semidiscrete entropy inequality for a selected semidiscrete evolution is a
separate result; a fully discrete bound also requires an argument for the
chosen time integrator. The ratio $\nu$ above is only the mesh time-step to
width ratio and is not physical viscosity.

For the convex-scaling limiter, assume additionally that $K\subseteq\mathbb R^m$
is closed, meaning it contains every limit in $\mathbb R^m$ of a convergent
sequence of its members; $K$ remains convex. The limiter applies to a finite nonempty set of node states
$V_j\in\mathbb R^m$ with positive weights $w_j$ summing to one and an already
admissible mean $\bar V=\sum_jw_jV_j\in K$. It returns the largest
$\theta\in[0,1]$ for which all scaled states
$V_j^\theta=\bar V+\theta(V_j-\bar V)$ belong to $K$. The feasible parameter
set is closed in $[0,1]$ and contains $0$, so this maximum exists. Direct summation gives
$$\sum_jw_jV_j^\theta=\sum_jw_j\bar V+\theta\left(\sum_jw_jV_j-\sum_jw_j\bar V\right)=\bar V+\theta(\bar V-\bar V)=\bar V.$$
Thus the construction preserves the supplied mean and constrains the chosen
nodes; it has no admissibility branch for a mean outside $K$ and gives no
pointwise-in-cell assertion between those nodes.

The conservative finite-volume weak-limit theorem is a separate scalar
one-dimensional result on $\mathbb R$. It assumes $T>0$, a continuous scalar
flux $f:\mathbb R\to\mathbb R$, initial data
$u_0\in L^\infty(\mathbb R)\cap L^1_{\mathrm{loc}}(\mathbb R)$, a continuous
consistent numerical flux $F:\mathbb R^2\to\mathbb R$, initial cell averages,
$h_m,\tau_m\to0$, and the Axiom of Countable Choice
$\mathrm{AC}_\omega$ (for every family $(X_n)_{n\in\mathbb N}$ of nonempty sets,
there is a function $f:\mathbb N\to\bigcup_{n\in\mathbb N}X_n$ with
$f(n)\in X_n$ for every $n$). Strong local $L^1$ convergence of the reconstructed states and
local uniform bounds on every bounded space-time cylinder through $t=0$ are
also hypotheses. Under them the limit is a locally bounded scalar
distributional weak solution. In its proof, $\mathrm{AC}_\omega$ is used only
in the local spatial-translation step of the face-flux convergence lemma; the
discrete summation and limit passage require no further choice. The theorem
assumes neither a CFL condition nor
an entropy inequality, proves neither convergence nor compactness, and does
not apply to the compressible Euler system.

## Remark references

[[def-pe03-convex-invariant-domain]] — defines convexity as closure under line segments and states the one-step invariant-domain scope.

[[prop-fd-shared-face-global-conservation]] — proves periodic total-vector conservation by exact shared-face cancellation.

[[thm-pe03-ideal-gas-llf-branch-preserves-positivity]] — supplies the symmetric ideal-gas branch and its endpoint speed and CFL hypotheses.

[[lem-pe03-hll-half-cell-riemann-averages]] — defines the HLL intermediate state and exact adjacent half-cell average formulas.

[[thm-pe03-hll-update-preserves-convex-invariant-domain]] — states the general convex-set result under the fan-average hypothesis.

[[def-pe03-entropy-stable-dissipative-flux]] — defines the entropy-variable dissipation flux and expressly excludes a fully discrete time-step property.

[[alg-pe03-convex-scaling-positivity-limiter]] — states the admissible-mean precondition and finite-node scaling output.

[[thm-conservative-finite-volume-weak-limit]] — supplies the exact scalar weak-limit conclusion and its strong-convergence, local-bound, and no-CFL/no-entropy scope.

[[def-countable-choice]] — defines $\mathrm{AC}_\omega$ as a choice function for every countable family of nonempty sets.

[De Sterck and Ullrich, §§3.4.1–3.4.3](https://climate.ucdavis.edu/AM452.pdf) — full course notes treatment of finite-volume conservation and scalar-law context.

[Zhang and Shu, §2](https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf) — full article treatment of Euler positivity, convex combinations, and finite-node limiting.

[Tadmor, §§4.1–4.3 and 5](https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf) — full chapter treatment of entropy-variable dissipation and fully discrete analysis.

[Ketcheson, LeVeque, and del Razo, Euler approximate-solver chapter](https://www.clawpack.org/riemann_book/html/Euler_approximate.html) — full chapter treatment of the HLL fan and supplied speeds.
