---
page: cm-math-rotation-double-cover-examples
title: Rotation Double Cover — Examples
status: draft
items: []
examples:
  - ex-cm-constant-angular-velocity-quaternion-lift
  - ex-cm-quaternion-lift-of-a-varying-rate-about-a-fixed-axis
  - ex-cm-quaternion-angular-velocity-reconstruction-check
  - ex-cm-two-to-one-preimages-and-homomorphism-check
  - cex-cm-no-closed-lift-along-a-full-turn
requires:
  - cm-math-rotation-double-cover
---

Finite verifications and one counterexample for the quaternion double cover and
the angular-velocity reconstruction of [[cm-math-rotation-double-cover]].

[[ex-cm-constant-angular-velocity-quaternion-lift]] solves the constant-rate lift
equation explicitly: $q(t)=\cos(\omega_0t/2)+\varphi(\hat n)\sin(\omega_0t/2)$ is
the lift of the rotation about $\hat n$ through the angle $\omega_0t$, and a full
turn on the positive interval $[0,2\pi/|\omega_0|]$ lifts from $1$ to the
antipode $-1$ when $\omega_0\ne0$.
[[ex-cm-quaternion-lift-of-a-varying-rate-about-a-fixed-axis]] verifies the
normalized phase $\theta(t)-\theta(0)$ for a $C^1$ rate about a fixed axis; its
body angular velocity is $\omega(t)=\theta'(t)\hat n$.
[[ex-cm-quaternion-angular-velocity-reconstruction-check]] computes the
reconstruction formula on a product of two one-parameter rotations about
different axes, obtaining the non-axis-constant angular velocity
$\omega(t)=(\cos t,1,\sin t)$ via $\omega=2\varphi^{-1}(q^{-1}q')$.
[[ex-cm-two-to-one-preimages-and-homomorphism-check]]
displays the half-turn rotations of the coordinate axes, checks
$\rho(i)\rho(j)=\rho(ij)$ by finite matrix multiplication, and identifies the two
preimages $\pm k$ of the half-turn about $e_3$. Finally
[[cex-cm-no-closed-lift-along-a-full-turn]] refutes the universal closed-lift
statement: the full turn about an axis is a loop continuous on $[0,1]$ and $C^1$ on
$(0,1)$ whose explicit lift through $1$ ends at $-1$, so no closed lift through
$1$ exists. The
examples are finite computations about curves and matrices; none of them reports
an observation or makes a physical claim, and none of them reproves the covering
statement supplied by the published item.
