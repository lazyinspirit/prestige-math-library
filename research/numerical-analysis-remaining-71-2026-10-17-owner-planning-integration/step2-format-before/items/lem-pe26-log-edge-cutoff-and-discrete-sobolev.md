---
id: lem-pe26-log-edge-cutoff-and-discrete-sobolev
kind: lemma
title: Two-dimensional logarithmic edge cutoff estimates
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-pe26-scalar-substructuring-model, lem-pe26-discrete-trace-schur-equivalence]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; all estimates are explicit finite-element and integral inequalities."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olof B. Widlund, Introduction to the Design and Theory of Domain Decomposition Algorithms, DD20 Tutorial, pp. 25–33"
      url: "https://cs.nyu.edu/~widlund/SD_rev_tutorial.pdf"
    - title: "Oliver Rheinbach, Parallel Scalable Iterative Substructuring, Chapter 2 §2.4, pp. 40–44"
      url: "https://d-nb.info/983219192/34"
---

## Statement

Let $E$ be a side of a shape-regular polygon of diameter $H$ with a matching quasiuniform $P_1$ boundary mesh of size $h$. Let $\theta_E$ be the piecewise-linear boundary function equal to $1$ at the interior nodes of $E$ and $0$ at the endpoints and all other boundary nodes. For

$$\|q\|_{00,E}^2:=\int_E\int_E\frac{|q(s)-q(t)|^2}{|s-t|^2}\,ds\,dt+\int_E\frac{|q(s)|^2}{\operatorname{dist}(s,\partial E)}\,ds,$$

one has $\|\theta_E\|_{00,E}^2\le C(1+\log(H/h))$. Also every continuous piecewise-affine $u_h$ on $\Omega_i$ satisfies

$$\|u_h-\overline u_{\Omega_i}\|_{L^\infty(\Omega_i)}^2\le C(1+\log(H_i/h_i))\|\nabla u_h\|_{L^2(\Omega_i)}^2.$$

Consequently, for the edge mean $\overline u_E$,

$$\|I_h(\theta_E(u_h-\overline u_E))\|_{00,E}^2\le C(1+\log(H_i/h_i))^2\|\nabla u_h\|_{L^2(\Omega_i)}^2,$$

where $I_h$ is nodal piecewise-linear interpolation on $E$.

## Facts & Assumptions

**Given:** A bounded-shape polygon, a shape-regular quasiuniform $P_1$ mesh, one side $E$, and the seminorm/lifting equivalence of [[lem-pe26-discrete-trace-schur-equivalence]].

[F1] [[def-pe26-scalar-substructuring-model]]: $H_i/h_i$ is the subdomain-to-mesh ratio, and shape regularity, polygon angles and the interior-cone parameter are uniform.

[F2] [[lem-pe26-discrete-trace-schur-equivalence]]: the local Schur energy is the minimum over finite-element lifts, is equivalent to the boundary Gagliardo seminorm modulo constants, and boundary $P_1$ data admit a stable finite-element lift.

## Proof

1.1 If $E$ has no interior boundary node, then $\theta_E=0$. If $|E|/h\le4$, scaling $E$ to unit length gives a uniform bound on both terms of $\|\theta_E\|_{00,E}^2$. Otherwise the first and last mesh intervals have length comparable to $h$, $\theta_E$ is linear from $0$ to $1$ and from $1$ to $0$ there, and it equals $1$ between them. The weighted integral on either endpoint interval is bounded by $\int_0^h(s/h)^2\,ds/s\le C$; the plateau contributes at most $C+\log(|E|/h)\le C+\log(H/h)$. In the double integral, pairs in the plateau contribute zero. Pairs within one endpoint interval have integrand at most $Ch^{-2}$ and hence contribute at most a constant. For one point $s$ in an endpoint interval and one outside it, integrating $(1-s/h)^2/(t-s)^2$ in the outside variable and then in $s$ gives a constant; the two endpoint intervals are treated in the same way. Therefore $\|\theta_E\|_{00,E}^2\le C(1+\log(H/h))$. [given, F1, algebra]

1.2 Put $v_h=u_h-\overline u_{\Omega_i}$ and $M=\|v_h\|_{L^\infty(\Omega_i)}$. Since $v_h$ is affine on each triangle, $M$ is attained at a mesh vertex $x_0$. The uniform interior-cone parameter in [F1] supplies constants $c_0,\omega_0>0$, independent of $i$ and $h_i$, such that from every such vertex there is an inward cone of height at least $c_0H_i$ and opening at least $\omega_0$ contained in $\Omega_i$. Use the annulus in this cone with radii between $c_0H_i/2$ and $c_0H_i$. Shape regularity and quasiuniformity give a bounded vertex patch $\omega_{x_0}$ and
$$\|\nabla v_h\|_{L^\infty(\omega_{x_0})}\le Ch_i^{-1}\|\nabla v_h\|_{L^2(\omega_{x_0})}.$$
Thus the difference from $x_0$ to distance $ch_i$ on any cone ray is at most $C\|\nabla v_h\|_{L^2(\omega_{x_0})}$. For $r\ge ch_i$, weighted Cauchy–Schwarz gives
$$\left|\int_{ch_i}^r\partial_s v_h(x_0+s e_\theta)\,ds\right|^2\le \log\!\left(\frac{r}{ch_i}\right)\int_{ch_i}^r|\nabla v_h(x_0+s e_\theta)|^2s\,ds.$$
At each point in the annulus, express $v_h(x_0)$ as its value there plus these two path differences, square using $|a+b+c|^2\le3(|a|^2+|b|^2+|c|^2)$, and integrate in polar coordinates over the annulus. Its area is comparable to $H_i^2$. After division by that area, the annular value term is bounded by $H_i^{-2}\|v_h\|_{L^2(\Omega_i)}^2\le C\|\nabla v_h\|_{L^2(\Omega_i)}^2$ by scaled Poincaré. In the radial term, each point on a ray is counted over annular radii with total polar weight at most $CH_i^2$; division by the annulus area leaves at most $C(1+\log(H_i/h_i))\|\nabla v_h\|_{L^2(\Omega_i)}^2$. The vertex-patch term has the same bound. If $H_i/h_i$ is bounded, the ordinary finite-element inverse inequality and scaled Poincaré give the result directly. This proves
$$\|u_h-\overline u_{\Omega_i}\|_{L^\infty(\Omega_i)}^2\le C(1+\log(H_i/h_i))\|\nabla u_h\|_{L^2(\Omega_i)}^2,$$
including the comparison of the maximizing vertex value to the domain mean. [given, F1, algebra]

2.1 Put $z=u_h-\overline u_E$. In the first Gagliardo term use
$$\theta(s)z(s)-\theta(t)z(t)=\theta(s)(z(s)-z(t))+z(t)(\theta(s)-\theta(t)).$$
The weighted term is bounded by $\|z\|_\infty^2\int_E\theta_E^2/\operatorname{dist}(s,\partial E)\,ds$. Together these give
$$\|\theta_Ez\|_{00,E}^2\le C\left(|z|_{H^{1/2}(E)}^2+(1+\log(H/h))\|z\|_\infty^2\right).$$
On the two endpoint mesh intervals, $I_h(\theta_Ez)-\theta_Ez$ is a quadratic interpolation error vanishing at both endpoints; scaling the interval to unit length bounds its $00,E$ norm by $C\|z\|_\infty^2$. The same estimate therefore holds for $I_h(\theta_Ez)$. The local Schur energy of the trace of $u_h$ is at most $\rho_i\|\nabla u_h\|_{L^2(\Omega_i)}^2$ because it is the minimum over finite-element lifts; the lower trace-Schur bound in [F2] therefore gives $|z|_{H^{1/2}(E)}^2\le C\|\nabla u_h\|_{L^2(\Omega_i)}^2$. Also $|\overline u_E-\overline u_{\Omega_i}|\le\|u_h-\overline u_{\Omega_i}\|_{L^\infty(\Omega_i)}$, so $\|z\|_\infty\le2\|u_h-\overline u_{\Omega_i}\|_{L^\infty(\Omega_i)}$. Combining this with steps 1.1 and 1.2 proves the claimed squared-logarithmic multiplier estimate. [given, F1, F2, step 1.1, step 1.2, algebra] ∎
