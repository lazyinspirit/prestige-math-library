---
id: thm-csm-frontier-equilibrium-quasipotential
kind: theorem
title: "Equilibrium SSEP quasi-potential on a torus"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-countable-choice
  - def-csm-frontier-bernoulli-relative-free-energy
  - def-csm-frontier-ssep-current-action
  - def-csm-frontier-ssep-quasipotential
  - lem-csm-frontier-mft-small-action-bridge
  - lem-csm-frontier-ssep-heat-flow
  - thm-csm-frontier-mft-reversal-identity
dependency_roles:
  def-countable-choice: mathematical-premise
  def-csm-frontier-bernoulli-relative-free-energy: mathematical-premise
  def-csm-frontier-ssep-current-action: mathematical-premise
  def-csm-frontier-ssep-quasipotential: mathematical-premise
  lem-csm-frontier-mft-small-action-bridge: mathematical-premise
  lem-csm-frontier-ssep-heat-flow: mathematical-premise
  thm-csm-frontier-mft-reversal-identity: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
physical_scope: null
sources:
  references:
    - title: "Lorenzo Bertini, Alberto De Sole, Davide Gabrielli, Giovanni Jona-Lasinio and Claudio Landim, Macroscopic fluctuation theory"
      url: "https://arxiv.org/pdf/1404.6466"
      locator: "Sections IV.1 and V.A, equations (4.8)–(4.9) and (5.1)–(5.3): the variational quasi-potential, equilibrium free-energy functional, and reversed relaxation."
    - title: "Bernard Derrida, Lecture notes on large deviations in non-equilibrium diffusive systems"
      url: "https://arxiv.org/pdf/2505.15618"
      locator: "Sections 13.1 and 14.1, equations (145)–(148) and (158)–(160): the equilibrium density functional and time-reversed diffusive relaxation."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$, let $\bar\rho\in(0,1)$, and let $\rho:\mathbb T^d\to[\varepsilon,1-\varepsilon]$ be a smooth real periodic profile for some $0<\varepsilon<1/2$ with $\int_{\mathbb T^d}\rho\,dx=\bar\rho$, where $dx$ is normalized product Haar measure. For the fixed-mean action quasi-potential $\mathcal V_{\bar\rho}$ and Bernoulli relative free-energy functional $\mathcal H_{\bar\rho}$ defined above, one has

$$\mathcal V_{\bar\rho}(\rho)=\mathcal H_{\bar\rho}(\rho)=\int_{\mathbb T^d}\left[\rho(x)\log\frac{\rho(x)}{\bar\rho}+(1-\rho(x))\log\frac{1-\rho(x)}{1-\bar\rho}\right]dx.$$

This is the homogeneous-equilibrium, fixed-mean torus variational result for the defined continuum action.

## Statement references

[[def-countable-choice]]

[[def-csm-frontier-bernoulli-relative-free-energy]]

[[def-csm-frontier-ssep-current-action]]

[[def-csm-frontier-ssep-quasipotential]]

[[lem-csm-frontier-mft-small-action-bridge]]

[[lem-csm-frontier-ssep-heat-flow]]

[[thm-csm-frontier-mft-reversal-identity]]

## Facts & Assumptions

**Given:** Countable Choice; $d\ge1$; $\bar\rho\in(0,1)$; and a smooth periodic target $\rho$ bounded in $[\varepsilon,1-\varepsilon]$ with mean $\bar\rho$.

[A1] [[def-countable-choice]]: every at most countable family of nonempty sets has a choice function.

[F1] [[def-csm-frontier-ssep-current-action]]: $\mathcal I_{[0,T]}$ is the nonnegative action $\frac14\int|j+\nabla u|^2/[u(1-u)]\,dx\,dt$ for smooth continuity-constrained paths bounded strictly inside $(0,1)$.

[F2] [[def-csm-frontier-ssep-quasipotential]]: $\mathcal V_{\bar\rho}(\rho)$ is the infimum of $\mathcal I_{[0,T]}$ over all finite $T>0$ and smooth fixed-mean connections from constant $\bar\rho$ to $\rho$.

[F3] [[def-csm-frontier-bernoulli-relative-free-energy]]: $\mathcal H_{\bar\rho}(\rho)=\int[f(\rho)-f(\bar\rho)-(\log\bar\rho-\log(1-\bar\rho))(\rho-\bar\rho)]\,dx$; at mean $\bar\rho$ the linear term integrates to zero.

[F4] [[thm-csm-frontier-mft-reversal-identity]]: for each admissible path, its action minus the action of its time reversal is the endpoint difference $\int f(u(T))\,dx-\int f(u(0))\,dx$.

[F5] [[lem-csm-frontier-mft-small-action-bridge]]: the reverse heat segment from $\rho_S$ to $\rho$ can be preceded by a smooth fixed-mean connector from $\bar\rho$ to $\rho_S$ whose action tends to zero as $S\to\infty$.

[F6] [[lem-csm-frontier-ssep-heat-flow]]: the Fourier heat profile is smooth for positive time, solves $\partial_s\rho_s=\Delta\rho_s$, preserves its initial density bounds and mean, and is the unique weak heat solution.

## Proof

1.1 Let $(u,j)$ be any admissible connection of duration $T$ from $\bar\rho$ to $\rho$. By [F4], $\mathcal I_{[0,T]}(u,j)=\mathcal H_{\bar\rho}(\rho)+\mathcal I_{[0,T]}(u^\theta,j^\theta)$, because both endpoints have mean $\bar\rho$ and [F3] identifies the endpoint free-energy difference with $\mathcal H_{\bar\rho}(\rho)$. The reversed action is nonnegative by [F1], so every admissible connection has action at least $\mathcal H_{\bar\rho}(\rho)$. [F1, F2, F3, F4, given, algebra]

1.2 Let $\rho_s$ be the Fourier heat profile with datum $\rho$. Under [A1], [F6] applies; because $\rho$ is smooth, its Fourier multiplier profile is smooth up to $s=0$, solves $\partial_s\rho_s=\Delta\rho_s$, and preserves mean $\bar\rho$. Apply the range-preservation assertion of [F6] to $v=(\rho-\varepsilon)/(1-2\varepsilon)$, which lies in $[0,1]$. Linearity of the Fourier multiplier and its fixing constants give $\rho_s=\varepsilon+(1-2\varepsilon)v_s$, hence $\varepsilon\le\rho_s\le1-\varepsilon$ for every $s\ge0$. [A1, F6, algebra]

2.1 Taking the infimum over all finite-duration connections in [F2] yields $\mathcal V_{\bar\rho}(\rho)\ge\mathcal H_{\bar\rho}(\rho)$. [F2, step 1.1]

2.2 On the forward heat path $(\rho_s,-\nabla\rho_s)$, $0\le s\le S$, the continuity equation holds because $\partial_s\rho_s=\Delta\rho_s$ and $\nabla\cdot(-\nabla\rho_s)=-\Delta\rho_s$, and the action is zero because $-\nabla\rho_s+\nabla\rho_s=0$. Its time reverse on $[0,S]$ has current $+\nabla\rho_{S-t}$, and [F4] gives its action as $\int f(\rho)\,dx-\int f(\rho_S)\,dx$. Shift this reversed path to $[1,S+1]$ by $t\mapsto t-1$; substitution in the action integral shows that its action is unchanged, and the resulting path has density $\rho_{S+1-t}$ and current $+\nabla\rho_{S+1-t}$. The heat equation verifies continuity on the shifted interval. [F1, F4, F6, step 1.2, algebra]

3.1 Prepend the connector from [F5] on $[0,1]$. Its endpoint derivatives match the reversed heat segment, so the concatenation is a smooth admissible fixed-mean connection from $\bar\rho$ to $\rho$ of duration $S+1$. By [F2], $\mathcal V_{\bar\rho}(\rho)\le\mathcal I_{[0,1]}(\sigma^S,\kappa^S)+\int f(\rho)\,dx-\int f(\rho_S)\,dx$. [F2, F5, step 2.2, algebra]

4.1 As $S\to\infty$, [F5] gives $\mathcal I_{[0,1]}(\sigma^S,\kappa^S)\to0$ and $\rho_S\to\bar\rho$ uniformly; continuity of $f$ on $[\varepsilon,1-\varepsilon]$ then gives $\int f(\rho_S)\,dx\to f(\bar\rho)$. Thus [F3] and the fixed-mean hypothesis imply $\mathcal V_{\bar\rho}(\rho)\le\mathcal H_{\bar\rho}(\rho)$. Combining this with the lower bound in step 2.1 proves equality. The constructed horizons tend to infinity; no finite-time minimizer is asserted. [F3, F5, step 2.1, step 3.1, algebra] ∎

## Remarks

The proof establishes a conditional identity for the separately defined continuum variational functional. It does not prove that microscopic SSEP trajectories satisfy a path-space large-deviation principle. The result is restricted to a homogeneous equilibrium profile on a periodic torus at fixed mean; it makes no local quasi-potential claim for boundary-driven systems, whose functionals may be nonlocal.

