---
id: lem-emg-fx-global-dirichlet-holder-estimate
kind: lemma
title: Global Dirichlet Holder estimate from finite flattened charts
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
deps:
  - lem-emg-fx-flat-dirichlet-holder-estimate
  - lem-emg-fx-newtonian-holder-potential
  - def-bounded-c-k-domain-and-boundary-charts
  - thm-chain-rule-for-total-derivatives
  - cor-real-and-euclidean-vector-valued-ascoli-arzela
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-axiom-of-choice
  - def-countable-choice
dependency_roles:
  lem-emg-fx-flat-dirichlet-holder-estimate: mathematical-premise
  lem-emg-fx-newtonian-holder-potential: mathematical-premise
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  cor-real-and-euclidean-vector-valued-ascoli-arzela: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xu-Jia Wang, Schauder Estimates for Elliptic and Parabolic Equations (2006), pages 1-3, local estimates and freezing"
      url: "https://maths-people.anu.edu.au/~wang/publications/3-Schauder-esti.pdf"
    - title: "Armin Schikorra, Partial Differential Equations I & II, Sections 8.8-8.9, finite boundary-chart global estimates"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice and Countable Choice. A bounded smooth domain $\Omega\subset\mathbb R^3$ means a bounded nonempty open set whose boundary, after a rigid motion near each point, is the graph of a $C^\infty$ function with $\Omega$ on one side. Fix $0<\alpha<1$ and Cartesian coordinates on $\mathbb R^3$. A multi-index is $\beta=(\beta_1,\beta_2,\beta_3)\in\mathbb N_0^3$, $|\beta|=\beta_1+\beta_2+\beta_3$, and $D^\beta=\partial_1^{\beta_1}\partial_2^{\beta_2}\partial_3^{\beta_3}$. For $k\in\{0,2\}$, $C^{k,\alpha}(\overline\Omega)$ consists of real-valued functions whose partial derivatives through order $k$ on $\Omega$ extend continuously to $\overline\Omega$ and for which

$$[q]_{0,\alpha;\overline\Omega}:=\sup_{\substack{x,y\in\overline\Omega\\x\ne y}}\frac{|q(x)-q(y)|}{|x-y|^\alpha},\qquad \|q\|_{C^{k,\alpha}(\overline\Omega)}:=\sum_{|\beta|\le k}\sup_{\overline\Omega}|D^\beta q|+\sum_{|\beta|=k}[D^\beta q]_{0,\alpha;\overline\Omega}$$

is finite. In particular, $\|q\|_{C^0(\overline\Omega)}:=\sup_{\overline\Omega}|q|$. There is $C=C(\Omega,\alpha)$ such that every $u\in C^{2,\alpha}(\overline\Omega)$ with zero boundary restriction satisfies

$$\|u\|_{C^{2,\alpha}(\overline\Omega)}\le C\bigl(\|\Delta u\|_{C^{0,\alpha}(\overline\Omega)}+\|u\|_{C^0(\overline\Omega)}\bigr).$$

The constant does not depend on higher derivatives of $u$; this is an a priori estimate, in particular for smooth approximants, not an assumed weak-to-classical existence theorem.

## Statement references

[[lem-emg-fx-flat-dirichlet-holder-estimate]]

[[lem-emg-fx-newtonian-holder-potential]]

## Facts & Assumptions

**Given:** The fixed domain, exponent and zero-boundary Hölder function in the Statement.

[A1] The Axiom of Choice and Countable Choice are retained. [[def-axiom-of-choice]] [[def-countable-choice]]

[F1] A bounded smooth domain has smooth boundary graph charts. The chain rule computes transformed first and second derivatives. [[def-bounded-c-k-domain-and-boundary-charts]] [[thm-chain-rule-for-total-derivatives]]

[F2] The proved flat-face estimate controls the scaled $C^{2,\alpha}$ norm on an inner half-ball by the outer supremum and the scaled Hölder norm of its Laplacian, including nonzero face values of that forcing. [[lem-emg-fx-flat-dirichlet-holder-estimate]]

[F3] Compactly supported Hölder forcing has the proved Newtonian $C^{2,\alpha}$ estimate. The same potential-plus-harmonic decomposition gives the interior ball estimate; the harmonic derivative bounds follow from the sphere-average identity and differentiation of a compact smooth averaging kernel. [[lem-emg-fx-newtonian-holder-potential]] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

[F4] A pointwise bounded equicontinuous finite-dimensional vector-valued sequence on a compact metric space has a uniformly convergent subsequence. [[cor-real-and-euclidean-vector-valued-ascoli-arzela]]

## Proof

1.1 Finite normalized charts. Near each boundary point rotate and translate so that the domain is $x_3>\varphi(x')$, with $\varphi(0)=0$ and $D\varphi(0)=0$. The shear $\Psi(y',t)=(y',t+\varphi(y'))$ maps the actual upper half-patch onto the domain portion of its image, and maps $t=0$ onto the boundary. Its inverse subtracts $\varphi$, its Jacobian determinant is one, and $J=D\Psi$ and $J^{-1}$ are bounded on smaller compact patches. Compactness of the smooth boundary permits a finite initial atlas. Further recenterings at nearby boundary points and rotations to their tangent planes have uniformly bounded derivatives on a common smaller radius: in each initial compact graph patch the normal derivative is bounded away from zero and the graph derivatives are bounded; solving the graph identity and differentiating gives these uniform bounds. Thus arbitrarily small radii $r$ can be used with one fixed bound on the first three chart derivatives, independent of the number of recentered patches. [given, A1, F1, construct, algebra]

2.1 For $v=u\circ\Psi$, the chain rule gives $D_yv=J^TD_xu$ and $D_y^2v=J^TD_x^2uJ+\sum_k u_{x_k}D_y^2\Psi_k$. Solving these identities expresses $\Delta_xu\circ\Psi=a^{ij}D_{ij}v+b^iD_iv$, with $a=J^{-1}J^{-T}$, $a(0)=I$, and bounded smooth $b$. On a radius-$r$ patch, $\|a-I\|_\infty\le C r$, while $[a]_\alpha$, $\|b\|_\infty$ and $[b]_\alpha$ are bounded uniformly for $r$ below the fixed atlas radius. Chain/product differences also give two-sided control of the local $C^{2,\alpha}$ norms. In particular the coefficient of the top-order seminorm in this comparison stays bounded as $r\downarrow0$; terms involving derivatives of charts and derivatives of $u$ of order at most two contribute a fixed-radius multiple of $\|u\|_{C^2}$. This follows from $[pq]_\alpha\le\|p\|_\infty[q]_\alpha+[p]_\alpha\|q\|_\infty$ and $[p\circ\Psi]_\alpha\le[p]_\alpha\operatorname{Lip}(\Psi)^\alpha$. [F1, step 1.1, algebra]

3.1 Local freezing. Write $f=\Delta u$. In a boundary half-patch, $\Delta_yv=f\circ\Psi+(I-a):D^2v-b\cdot Dv$ and $v=0$ on the flat face. Apply [F2], with outer radius $r$ and inner radius $r/2$. The seminorm part of the principal error is bounded by $C r[D^2v]_\alpha+C_r\|v\|_{C^2}$; its supremum contributes only $C_r\|v\|_{C^2}$ after rescaling. The drift product and its seminorm contribute only $C_r\|v\|_{C^2}$ because $Dv$ is Lipschitz on the convex half-ball. It follows, after the chart comparison in step 2.1, that $[D^2u]_{\alpha;\mathrm{inner\ patch}}\le C_0 r[D^2u]_{\alpha;\Omega}+C_r(\|f\|_{C^{0,\alpha}}+\|u\|_{C^2})$, where $C_0$ is independent of small $r$. For an interior ball, extend a cutoff times $f$ by zero, subtract its Newtonian potential, and bound the harmonic remainder by the averaging-kernel argument in [F3]. This gives the same bound without the $C_0r$ term. No regularity of a weak solution has been assumed in this use of a priori estimates. [F2, F3, step 2.1, algebra]

4.1 Global seminorm absorption. At a fixed sufficiently small $r$, take boundary centers forming an $r$-net in the compact boundary and interior balls of comparable radii for points farther from the boundary. Use outer patches with fixed larger radii proportional to $r$ and controlled inner patches of radius proportional to $r$; the uniform bi-Lipschitz chart bounds of step 1.1 ensure that each point has a controlled inner patch containing its intersection with a Euclidean ball of radius $c r$, with $c>0$ independent of the number of centers. Compactness selects finitely many. A pair at distance below $c r$ is therefore in one controlled patch; a pair farther apart has Hessian difference quotient at most $2(c r)^{-\alpha}\|D^2u\|_\infty$. Taking a maximum of the local estimates, not a sum over patches, yields $[D^2u]_{\alpha;\Omega}\le C_1r[D^2u]_{\alpha;\Omega}+C_r(\|f\|_{C^{0,\alpha}}+\|u\|_{C^2})$. Choose $r$ with $C_1r<1/2$ and absorb. Thus $\|u\|_{C^{2,\alpha}}\le C(\|f\|_{C^{0,\alpha}}+\|u\|_{C^2})$, with the radius now fixed solely by the domain and exponent. [step 1.1, step 3.1, construct, algebra]

5.1 Removing the lower derivative terms. If the stated estimate were false, normalize zero-boundary $C^{2,\alpha}$ functions to obtain $\|u_j\|_{C^{2,\alpha}}=1$ and $\|\Delta u_j\|_{C^{0,\alpha}}+\|u_j\|_\infty\to0$. The finite chart atlas makes the function and gradient fields uniformly equicontinuous from their bounded next derivatives; the Hessians are equicontinuous from their common Hölder bound. Apply [F4] to this finite list of derivative fields. A subsequence converges uniformly on $\overline\Omega$; integration on coordinate segments in interior balls identifies its derivative fields. Since $u_j\to0$ uniformly, its first and second derivative limits vanish in the interior and, by continuity, on the closure. Thus $\|u_j\|_{C^2}\to0$. Step 4.1 then gives $1\le C(\|\Delta u_j\|_{C^{0,\alpha}}+\|u_j\|_{C^2})\to0$, a contradiction. This proves the full a priori estimate with only the supremum of $u$ on the right. [F4, step 4.1, contradiction, algebra]

6.1 All charts, radii and constants were fixed by $\Omega$ and $\alpha$ before the solution was chosen. Reflection and the Newtonian kernel enter through [F2], flattening and coefficient perturbation were derived in steps 1.1--3.1, and the finite-cover and compactness arguments in steps 4.1--5.1 complete the claimed global estimate. No published boundary or global Schauder theorem is an input. [F1, F2, F3, F4, step 5.1] ∎
