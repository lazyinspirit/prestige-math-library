---
id: ex-ros2-approximate-jacobian-stability-and-order-boundary
kind: example
title: Approximate Jacobians can remove ROS2 stiff damping
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-rosenbrock-ros2-step, thm-ros2-global-second-order, thm-ros2-a-l-stable-exact-jacobian]
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Peter Benner and Hermann Mena, Rosenbrock methods for solving differential Riccati equations, §II, pp. 3–4"
      url: "https://cscproxy.mpi-magdeburg.mpg.de/preprints/2011/MPIMD11-06.pdf"
    - title: "KPP 2.6 documentation, Numerical methods, Rosenbrock methods and ROS-2 coefficient table"
      url: "https://kpp.readthedocs.io/en/2.6.0/tech_info/07_numerical_methods.html"
---

## Example

Consider $y'=-1000y$ with $h=1$. The exact-J ROS2 factor is less than $1/700$, while the bounded approximate choice $W=0$ gives the explicit Heun factor $499001$. Thus the exact-J scalar stiff damping does not transfer to arbitrary bounded approximate Jacobians. Separately, the boundedness hypothesis in [[thm-ros2-global-second-order]] is essential: the unbounded choice $W_h=h^{-2}$ makes the method inconsistent as $h\downarrow0$ on any nonzero scalar field $y'=\lambda y$.

## Facts & Assumptions

**Given:** The ROS2 stage equations, $\gamma=1+1/\sqrt2$, and the indicated scalar equations and matrix choices.

[F1] [[alg-rosenbrock-ros2-step]] defines $Mk_1=f+\gamma h f_t$, $Mk_2=f(t+h,y+hk_1)-2k_1-\gamma h f_t$, and $y^+=y+\frac h2(3k_1+k_2)$, with $M=I-\gamma hW$.

[F2] [[thm-ros2-a-l-stable-exact-jacobian]] gives $R(z)=(1-(1+\sqrt2)z)/(1-\gamma z)^2$ for the exact-J scalar test problem.

[F3] [[thm-ros2-global-second-order]] assumes uniformly bounded, state-Lipschitz $W$ and uniform invertibility; it does not cover unbounded $W_h$.

## Verification

1.1 With $W=0$ and the autonomous field $f(y)=\lambda y$, the first stage gives $k_1=\lambda y$. The second gives $k_2=\lambda(y+h\lambda y)-2\lambda y=\lambda(z-1)y$, where $z=h\lambda$. [given, F1, algebra]

1.2 Substitution into the update in [F1] yields $y^+/y=1+z+z^2/2$. At $z=-1000$, this is $1-1000+500000=499001$. For exact $J=\lambda$, [F2] gives $R(-1000)=(1+1000(1+\sqrt2))/(1+1000\gamma)^2$. Since $1+\sqrt2<3$ and $\gamma>3/2$, this positive factor is less than $3001/1501^2<1/700$. The two choices therefore have sharply different stiff-mode damping. [given, F1, F2, step 1.1, algebra]

2.1 Now fix $\lambda y\ne0$ and take $W_h=h^{-2}$ with $0<h<\gamma$. The stage denominator is $1-\gamma/h\ne0$, and $k_1=\lambda y/(1-\gamma/h)\to0$ as $h\downarrow0$. [given, F1, algebra]

2.2 Since $hk_1\to0$, the numerator $\lambda(y+hk_1)-2k_1$ of the second stage tends to $\lambda y$, while its denominator $1-\gamma/h$ has magnitude tending to infinity; hence $k_2\to0$. Consequently $(y^+-y)/h=(3k_1+k_2)/2\to0$, which differs from the required consistency limit $\lambda y\ne0$. This unbounded approximation is outside [F3]'s hypotheses and the method is not consistent for it. [given, F1, F3, step 2.1, algebra] ∎
