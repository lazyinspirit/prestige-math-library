---
page: interacting-particle-mean-field-and-vortex-blob-error-examples
title: Interacting particle mean field and vortex blob error — Examples
status: draft
items: []
examples:
  - ex-softened-newtonian-particles-not-collision-model
  - ex-dimension-dependent-empirical-w1-error
  - ex-mixed-sign-vorticity-needs-signed-distance
  - ex-globally-lipschitz-alignment-model
  - ex-same-sign-smooth-vortex-blob-approximation
---

The examples make the model and error assumptions concrete. In [[ex-globally-lipschitz-alignment-model]], the kernel $K(x,y)=a(y-x)$ has two-variable Lipschitz constant $a$. The particle mean is constant and every particle approaches it by an explicit exponential trajectory, illustrating the exact empirical weak equation and the general Dobrushin stability convention.

[[ex-dimension-dependent-empirical-w1-error]] uses a uniform law on the vertices of a high-dimensional cube. Counting unsampled vertices gives a deterministic lower bound on empirical $W_1$ error and rules out the stated uniform dimension-free empirical rate. [[ex-mixed-sign-vorticity-needs-signed-distance]] gives a nonzero signed measure of total mass zero, explaining why probability $W_1$ cannot replace the signed discrepancies defined on the main page.

[[ex-softened-newtonian-particles-not-collision-model]] compares singular Newtonian relative acceleration with a smooth softened field. Smoothness at a collision changes the force model; it supplies no collision law for the singular system.

[[ex-same-sign-smooth-vortex-blob-approximation]] specializes to a smooth nonnegative unit-mass vorticity and distinct equal-weight initial particles. Under its Countable Choice, common smooth force-residual, and RK4 tube assumptions, including numerical grid states, admitted stages from both exact and numerical starts, and defined one-step maps at every grid step, its probability coupling estimate separates initial empirical error, blob regularization, Simpson force quadrature, and fourth-order time error. The initial coupling need only approach the infimum. The conclusion remains conditional at fixed blob width and makes no uniform singular-limit claim.
