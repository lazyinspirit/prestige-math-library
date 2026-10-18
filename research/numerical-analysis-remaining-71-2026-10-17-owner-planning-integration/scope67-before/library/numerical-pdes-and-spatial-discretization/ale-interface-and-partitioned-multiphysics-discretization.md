---
page: ale-interface-and-partitioned-multiphysics-discretization
title: "ALE, interfaces and partitioned multiphysics coupling"
status: draft
items:
  - cor-ale-exact-splitting-residual-orders
  - def-ale-linear-diffusion-transmission-model
  - def-ale-moving-domain-map
  - def-ale-periodic-moving-grid
  - def-ale-toy-added-mass-recurrence
  - alg-ale-upwind-finite-volume-step
  - lem-ale-jacobi-geometric-conservation-identity
  - lem-ale-periodic-face-motion-satisfies-discrete-gcl
  - lem-ale-schur-complement-positive-and-minimizes-energy
  - thm-ale-monolithic-backward-euler-energy-identity
  - alg-ale-robin-robin-partitioned-iteration
  - lem-ale-schur-residual-controls-interface-energy-error
  - thm-ale-one-dimensional-reynolds-transport-identity
  - thm-ale-reynolds-transport-identity
  - thm-ale-upwind-step-conserves-mass-and-preserves-free-stream
  - thm-ale-robin-robin-iteration-contracts-and-certifies-stop
  - thm-ale-upwind-step-monotone-and-l1-contracting-under-cfl
examples: []
---

# ALE, interfaces and partitioned multiphysics coupling

This page has two independent branches: a selected one-dimensional moving-mesh finite-volume scheme, and a finite-dimensional linear diffusion-transmission problem. It also proves the continuous ALE Jacobian and Reynolds identities. These results do not claim a high-dimensional discrete GCL estimate, a curved-mesh transfer rate, or nonlinear moving-domain fluid-structure well-posedness.

## Continuous ALE map and transport

[[def-ale-moving-domain-map]] fixes the reference and moving domains, the positive Jacobian, and mesh-velocity convention. [[lem-ale-jacobi-geometric-conservation-identity]] proves $\partial_tJ=J\operatorname{div}w_m$. The Reynolds identity has separate dimension branches: [[thm-ale-one-dimensional-reynolds-transport-identity]] is choice-free and handles finite unions of intervals; [[thm-ale-reynolds-transport-identity]] covers finite piecewise-$C^1$ domains in dimensions at least two and states its Countable Choice use through the divergence-theorem supplier.

## Selected one-dimensional moving-grid branch

[[def-ale-periodic-moving-grid]] and [[lem-ale-periodic-face-motion-satisfies-discrete-gcl]] fix the periodic face and Jacobian conventions. [[alg-ale-upwind-finite-volume-step]] returns `mesh_crossing` before updating the state if any new cell Jacobian is nonpositive. On success, [[thm-ale-upwind-step-conserves-mass-and-preserves-free-stream]] proves exact periodic mass conservation and constant-state preservation. Under the stated CFL condition, [[thm-ale-upwind-step-monotone-and-l1-contracting-under-cfl]] proves positivity, monotonicity, and weighted $L^1$ contraction. The CFL condition is needed for monotonicity, not for mass or constant-state preservation.

## Linear diffusion transmission and partitioned solve

[[def-ale-linear-diffusion-transmission-model]] uses finite-dimensional backward-Euler subdomain blocks and the outward flux convention $q_i=S_i\lambda_i-f_i$. Both subdomains use one trace space and the monolithic interface equations are trace continuity and $q_1+q_2=0$. The diagram fixes these signs and does not enter any proof.

```tikz
\begin{tikzpicture}[scale=1.0, every node/.style={font=\small}]
  \draw[thick] (0,0) rectangle (2,1.4);
  \draw[thick] (2,0) rectangle (4,1.4);
  \draw[very thick] (2,0) -- (2,1.4);
  \node at (1,0.72) {$\Omega_1$};
  \node at (3,0.72) {$\Omega_2$};
  \node[above] at (2,1.4) {$\Gamma$};
  \node[below] at (2,0) {$\lambda_1=\lambda_2=\lambda$};
  \draw[->,blue,thick] (1.55,0.95) -- (2.35,0.95);
  \node[blue,above] at (1.95,0.95) {$n_1,\ q_1$};
  \draw[->,red,thick] (2.45,0.42) -- (1.65,0.42);
  \node[red,below] at (2.05,0.42) {$n_2,\ q_2$};
\end{tikzpicture}
```

[[lem-ale-schur-complement-positive-and-minimizes-energy]] proves positivity and the energy-minimizing property of each condensed Schur operator. [[thm-ale-monolithic-backward-euler-energy-identity]] proves the exact monolithic energy identity after paired outward interface work cancels. [[alg-ale-robin-robin-partitioned-iteration]] specifies a finite-budget sequence of two Robin solves. [[thm-ale-robin-robin-iteration-contracts-and-certifies-stop]] identifies its unique fixed point with the monolithic trace, proves contraction, and gives the exact stop certificate. [[lem-ale-schur-residual-controls-interface-energy-error]] transfers a condensed residual bound to the reconstructed subdomain energy norm.

## Added-mass warning and optional time splitting

[[def-ale-toy-added-mass-recurrence]] defines the specific scalar staggered recurrence used by the companion example; no instability claim is made for other fluid-structure algorithms. The optional finite-dimensional Lie/Strang route is limited to [[cor-ale-exact-splitting-residual-orders]] and inherits its exact-subflow, common-tube, commutator-regularity, residual-budget, and stability hypotheses from the cited supplier. It supplies no unbounded-operator or general PDE splitting estimate.
