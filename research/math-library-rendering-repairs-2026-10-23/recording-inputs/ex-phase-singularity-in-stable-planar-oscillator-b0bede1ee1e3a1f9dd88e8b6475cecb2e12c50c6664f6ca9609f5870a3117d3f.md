---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-phase-singularity-in-stable-planar-oscillator.json
  precheck: pass
id: ex-phase-singularity-in-stable-planar-oscillator
kind: example
title: "A stable planar cycle can have a singular phase slice"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-phase-bordered-periodic-orbit-bvp
  - lem-phase-bordered-shooting-jacobian-invertibility
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Y. A. Kuznetsov, Elements of Applied Bifurcation Theory, 2nd ed., Chapter 1, §1.5"
      url: "https://www.ma.imperial.ac.uk/~dturaev/kuznetsov.pdf"
      locator: "Complete 614-page second-edition PDF retrieved; inspected printed pp. 26–30 on transverse sections, return maps, variational equation, monodromy, and phase multiplier."
    - title: "E. J. Doedel and B. E. Oldeman, AUTO-07P full manual (2021)"
      url: "https://raw.githubusercontent.com/auto-07p/auto-07p/master/doc/auto.tex"
      locator: "Full 12,856-line manual retrieved; inspected periodic families/Floquet source lines 587–645, ISP warning lines 4926–4950, and phase-shifting demo ph1 lines 6822–6863."
---

## Statement

On the annulus $U=\{(x,y):1/2<\sqrt{x^2+y^2}<3/2\}$ consider
$$
\dot x=(1-r)x-y,\qquad \dot y=(1-r)y+x,\qquad r=\sqrt{x^2+y^2}.
$$
The unit circle is an orbitally asymptotically stable periodic orbit of period $2\pi$. At $x_*=(1,0)$ the affine phase $\psi_b(x,y)=x-1$ has a singular phase-bordered shooting Jacobian, while $\psi_g(x,y)=y$ is transverse and gives an invertible phase-bordered shooting Jacobian.

## Facts & Assumptions

**Given:** The smooth autonomous field on the annulus, the unit-circle candidate orbit, and the two affine phase functions.

[F1] The phase-bordered residual for phase covector $c$ is $(\phi_T(x)-x,\psi(x))$, and its Jacobian has period column $f(x_*)$ ([[def-phase-bordered-periodic-orbit-bvp]]).

[F2] The bordered Jacobian is singular when $c^\top f(x_*)=0$ and is invertible when the neutral multiplier is simple and the phase is transverse ([[lem-phase-bordered-shooting-jacobian-invertibility]]).

## Proof

1.1 The identities $\dot r=(xx'+yy')/r$ and $\dot\vartheta=(xy'-yx')/r^2$ give $\dot r=r(1-r)$ and $\dot\vartheta=1$. Thus $r=1$ is invariant and $\vartheta(t)=\vartheta(0)+t$, so the least period is $2\pi$. Differentiating $r(1-r)$ at $r=1$ gives the radial variational equation $\dot\rho=-\rho$, whose multiplier is $e^{-2\pi}<1$; the angular variational equation is $\dot\alpha=0$, whose multiplier is $1$. Because the polar-coordinate Jacobian at times $0$ and $2\pi$ is the same invertible matrix, the Cartesian monodromy is conjugate to $\operatorname{diag}(e^{-2\pi},1)$. For $r<1$ the radial derivative is positive, and for $r>1$ it is negative, so each nearby radius moves monotonically toward $1$ and remains between its initial value and $1$. It has a limit $\bar r$; if $\bar r(1-\bar r)\ne0$, then $\dot r=r(1-r)$ is eventually bounded away from zero, contradicting convergence. Hence $\bar r$ is an equilibrium, and the interval between the initial radius and $1$ contains only the equilibrium $1$, so $r(t)\to1$. These bounds also give Lyapunov stability of the unit circle. Thus the orbit is orbitally asymptotically stable and its neutral multiplier is simple. [given, algebra]

2.1 At $(1,0)$ the vector field is $(0,1)$. For $\psi_b=x-1$, $c_b=(1,0)$ and $c_b^\top f(x_*)=0$, so [F2] gives a singular shooting Jacobian. For $\psi_g=y$, $c_g=(0,1)$ and $c_g^\top f(x_*)=1$; the phase multiplier is simple by step 1.1, so [F2] gives an invertible Jacobian. [F1, F2, step 1.1, algebra] ∎

## Remarks

The picture compares the zero level sets of the two phase functions at $x_*=(1,0)$. The orbit runs counterclockwise because $\dot\vartheta=1$. Its upward tangent $f(x_*)=(0,1)$ lies in the bad slice $\psi_b=0$ but crosses the good slice $\psi_g=0$. The proof above establishes the Jacobian conclusions independently of this illustration.

```tikz
\begin{tikzpicture}[scale=2]
\draw[dashed,blue,thick] (-1.5,0) -- (1.65,0);
\node[blue,anchor=north] at (-0.15,-0.08) {$\psi_g=0:\ y=0$};
\draw[dashed,red,thick] (1,-1.3) -- (1,1.45);
\node[red,anchor=west] at (1.08,1.25) {$\psi_b=0:\ x=1$};
\draw[thick] (0,0) circle (1);
\draw[->,thick] (150:1) arc (150:195:1);
\node[anchor=south] at (0,1.12) {$r=1$};
\draw[->,very thick] (1,0) -- (1,0.75);
\node[anchor=west] at (1.12,0.6) {$f(x_*)=(0,1)$};
\fill (1,0) circle (0.025);
\node[anchor=north west] at (1.08,-0.1) {$x_*=(1,0)$};
\end{tikzpicture}
```
