---
id: ex-em-boundary-and-spectral-prerequisites-hypothesis-boundaries
kind: example
title: Explicit mathematical hypothesis/convention examples
status: draft
origin: pipeline
domain: mathematics
dependency_level: 7
deps: [def-countable-choice, def-distributional-derivative, def-divergence-and-curl-of-a-c1-vector-field, def-laplacian-of-a-c2-function, def-weak-derivative-of-a-locally-integrable-function, cor-volume-of-a-closed-three-ball, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, thm-em-elliptic-boundary-existence, thm-em-spherical-multipole-basis, thm-em-waveguide-spectral-completeness, thm-polar-coordinates-formula-for-lebesgue-measure]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  cor-volume-of-a-closed-three-ball: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  thm-em-elliptic-boundary-existence: mathematical-premise
  thm-em-spherical-multipole-basis: mathematical-premise
  thm-em-waveguide-spectral-completeness: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §14.30 Spherical and Spheroidal Harmonics"
      url: "https://dlmf.nist.gov/14.30"
    - title: "S. Axler, P. Bourdon, W. Ramey, Harmonic Function Theory, 2nd ed. (Springer GTM 137), author-hosted full text, Chapter 5 (harmonic polynomials, spherical harmonics and zonal harmonics) and Chapter 1 (Poisson kernel for the ball)"
      url: "https://www.axler.net/HFT.pdf"
---

## Example

Assume Countable Choice ($\mathrm{AC}_\omega$), with the exact meaning of [[def-countable-choice]]. Three exact boundary checks. (i) The sphere trace $f(n)=n_3$ is the trace of the homogeneous degree-one harmonic polynomial $u(x)=x_3$, so the ball boundary branch of [[thm-em-spherical-multipole-basis]] applies to it; the simultaneous conditions $\Delta u=0$ in the unit ball $B_1$ and $\partial_nu=1$ on $S^2$ are incompatible, because the divergence theorem gives $0=\int_{B_1}\Delta u\,dx=\int_{S^2}\partial_nu\,d\sigma=\sigma(S^2)=4\pi$. (ii) For the coefficient $\varepsilon=1$ on $\{x_1<0\}$ and $\varepsilon=2$ on $\{x_1>0\}$, the function $u=x_1$ on the first side and $u=x_1/2$ on the second is continuous and has weak first derivatives represented by locally integrable functions, and $\varepsilon\partial_1u\equiv1$, so $-\operatorname{div}(\varepsilon\nabla u)=0$ weakly although $u$ is not $C^1$: its first derivative jumps from $1$ to $1/2$ across the interface. Hence the smooth-coefficient statements of [[thm-em-elliptic-boundary-existence]] cannot be extended to this piecewise-constant case, and the correct conclusion there is the piecewise regularity recorded by that item, not a global $C^1$ or $C^\infty$-on-the-closure statement. (iii) The same coefficient configuration is a hypothesis boundary for the smooth-domain spectral completeness of [[thm-em-waveguide-spectral-completeness]]: the coefficient field is discontinuous across the interface and the explicit weak solution is not classical $C^1$ there, so the configuration lies outside the smooth classes of that theorem, which asserts no completeness or classical boundary regularity in non-smooth classes; the weak formulation nevertheless remains valid. All three parts are exact finite computations or classical divergence-theorem evaluations, and they assert no physical interpretation.

## Facts & Assumptions

**Given:** Countable Choice; the unit ball $B_1=\{x\in\mathbb R^3:|x|<1\}$ and unit sphere $S^2=\{x:|x|=1\}$; the functions $x_3$, $f(n)=n_3$ on $S^2$; the coefficient $\varepsilon=1$ on $\{x_1<0\}$ and $\varepsilon=2$ on $\{x_1>0\}$ with the function $u=x_1$ on the first side and $u=x_1/2$ on the second.

[F1] **Laplacian.** For $C^2$ $f$ on an open set, $\Delta f=\operatorname{div}\nabla f=\sum_{i=1}^3\partial_i\partial_if$ ([[def-laplacian-of-a-c2-function]]); in particular $\Delta x_3=\partial_1\partial_1x_3+\partial_2\partial_2x_3+\partial_3\partial_3x_3=0$ on $\mathbb R^3$.

[F2] **Divergence and curl conventions.** For a $C^1$ field $F$, $\operatorname{div}F$ is the sum of the coordinate partial derivatives of its components ([[def-divergence-and-curl-of-a-c1-vector-field]]); in particular the constant field $(1,0,0)$ has divergence $0$.

[F3] **Polar coordinates.** Under Countable Choice, the polar surface measure $\sigma$ on $S^{n-1}$ is the finite Borel measure with $\int_{\mathbb R^n}f\,d\lambda_n=\int_0^\infty\int_{S^{n-1}}f(r\omega)r^{n-1}\,d\sigma(\omega)\,dr$ for every Borel measurable $f:\mathbb R^n\to[0,\infty]$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F4] **Volume of the closed three-ball.** For $r\ge0$ the closed ball $\overline B_3(0,r)$ has Lebesgue measure $4\pi r^3/3$ ([[cor-volume-of-a-closed-three-ball]]).

[F5] **Divergence theorem on bounded $C^1$ domains.** Under Countable Choice, for a bounded $C^1$ domain $\Omega$ and $F\in C^1(\overline\Omega;\mathbb R^3)$, $\int_\Omega\operatorname{div}F\,dx=\int_{\partial\Omega}F\cdot\nu\,dS$ with the outward unit normal $\nu$ ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

[F6] **Weak and distributional derivatives.** A locally integrable $w$ has weak derivative $\partial_iw$ represented by a locally integrable $g$ when $\int w\,\partial_i\varphi=-\int g\,\varphi$ for every test function $\varphi$, and the distributional derivative is defined by the signed test pairing ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-distributional-derivative]]).

[F7] **Ball boundary branch of the multipole theorem.** For $f\in L^2(S^2)$, the series $u(rn)=\sum_{l,m}r^lf_{lm}Y_{lm}(n)$ converges in $L^2(S^2)$ as $r\uparrow1$ and its sum is the unique harmonic function on the unit ball with finite radial $L^2$ supremum and boundary limit $f$; for continuous $f$ it equals the Poisson integral and extends continuously to the closed ball ([[thm-em-spherical-multipole-basis]], part (c)).

[F8] **Elliptic boundary problems and their exclusions.** For a bounded $C^\infty$ domain, a uniformly positive smooth coefficient and smooth data on the closure, the weak Dirichlet and compatible Neumann solutions have $C^\infty$ representatives on the closure satisfying the classical equation and boundary values; for finitely many disjoint closed smooth interfaces strictly inside the domain with piecewise smooth positive coefficient and sheet charge, the weak solution is $C^\infty$ on each closed side, with the flux jump determined by the sheet charge; edge and junction points, reentrant corners and coefficient loss of regularity are excluded ([[thm-em-elliptic-boundary-existence]]).

[F9] **Waveguide and cavity classes.** The spectral completeness theorem for the smooth PEC cavity and the rectangular reflection class declares its smooth-domain class, its eigenfields and their classical boundary relations, and states explicitly that no completeness is asserted in lossy, open-ended or non-smooth classes ([[thm-em-waveguide-spectral-completeness]]).

[F10] **Countable Choice.** $\mathrm{AC}_\omega$ states that every sequence of nonempty sets has a choice function ([[def-countable-choice]]).

## Verification

1.1 The sphere trace and its harmonic extension. On $S^2$ the outward unit normal is $\nu(n)=n$, so the normal derivative of $x_3$ is $\partial_nx_3=\nabla x_3\cdot n=e_3\cdot n=n_3$; thus $x_3$ is harmonic on $\mathbb R^3$ by [F1] and has boundary trace $f(n)=n_3$ on $S^2$. The function $f$ is continuous, hence in $L^2(S^2)$ with coefficients $f_{lm}$, so the ball boundary branch [F7] applies: the series $\sum_{l,m}r^lf_{lm}Y_{lm}(n)$ is the unique harmonic function on $B_1$ with $L^2$ boundary limit $f$ and continuous extension to $\overline B_1$. Since $x_3$ is such a harmonic function, the branch identifies the extension as $u(x)=x_3$; in particular $f=n_3$ is an admissible ball-boundary datum, not an excluded class. [F1, F7]

1.2 The total mass of the sphere measure. Apply the polar-coordinates identity [F3] with $n=3$ to the indicator of the closed unit ball, a Borel measurable function: $\int_{\mathbb R^3}\mathbf 1_{\overline B_1}\,d\lambda_3=\int_0^\infty\int_{S^2}\mathbf 1_{\overline B_1}(r\omega)r^2\,d\sigma(\omega)\,dr$; the left side is $\lambda_3(\overline B_1)=4\pi/3$ by [F4], and on the right side $\mathbf 1_{\overline B_1}(r\omega)=1$ for $0\le r\le1$ and every $\omega\in S^2$, so the iterated integral is $\bigl(\int_0^1r^2\,dr\bigr)\sigma(S^2)=\sigma(S^2)/3$; hence $\sigma(S^2)=3\cdot4\pi/3=4\pi$. The argument uses the Countable Choice assumption of the polar identity [F3]. [F3, F4, F10]

1.3 The piecewise-linear function and its weak derivatives. Define $u:\mathbb R^3\to\mathbb R$ by $u(x)=x_1$ for $x_1<0$ and $u(x)=x_1/2$ for $x_1>0$. Assign $u=0$ on the interface $\{x_1=0\}$; both branches tend to $0$ as $x_1\to0$ through their sides, so $u$ is continuous on $\mathbb R^3$, and it is $C^\infty$ on each of the two open half-spaces. Its distributional first derivatives are the locally integrable — indeed bounded — functions $g_1:=\mathbf 1_{\{x_1<0\}}+\tfrac12\mathbf 1_{\{x_1>0\}}$, $g_2=0$, $g_3=0$: for every $\varphi\in C_c^\infty(\mathbb R^3)$, integrating by parts on each half-space with the vanishing of the boundary terms (the traces $x_1\varphi$ and $\tfrac12x_1\varphi$ vanish on $\{x_1=0\}$ and at infinity) gives $\int u\,\partial_1\varphi=-\int g_1\varphi$, and the partial derivatives in the other two coordinates vanish identically on each side. Hence the weak first derivatives of $u$ are represented by $g_1,g_2,g_3$, so $u$ satisfies the weak-differentiability part of the definitions in [F6]; and $u$ is not $C^1$ on any neighbourhood of the interface, since its classical one-sided derivatives $1$ and $1/2$ in the $x_1$ direction differ at every point of $\{x_1=0\}$. [F6]

2.1 The weak transmission equation. With $\varepsilon=1$ on $\{x_1<0\}$ and $\varepsilon=2$ on $\{x_1>0\}$, the field $\varepsilon\nabla u$ takes the value $(1,0,0)$ on both sides: on the first side $\varepsilon\partial_1u=1\cdot1=1$ and on the second $\varepsilon\partial_1u=2\cdot\tfrac12=1$, with the other components zero. Hence $\varepsilon\nabla u$ is the constant field $\mathbf c=(1,0,0)$, whose divergence is $0$ by [F2]; equivalently, for every $\varphi\in C_c^\infty(\mathbb R^3)$ one has $\int(\varepsilon\nabla u)\cdot\nabla\varphi\,dx=\int\mathbf c\cdot\nabla\varphi\,dx=0$, so the distributional equation $-\operatorname{div}(\varepsilon\nabla u)=0$ holds weakly on $\mathbb R^3$. Thus the weak formulation of the transmission problem is satisfied by a function that is not $C^1$, and its one-sided first derivatives jump from $1$ to $1/2$ across the interface. [F2, F6, step 1.3]

2.2 Incompatibility of the two sphere conditions. Suppose $w\in C^2(\overline B_1)$ satisfied $\Delta w=0$ in $B_1$ and $\partial_nw=1$ on $S^2$, and apply the divergence theorem [F5] to $F=\nabla w\in C^1(\overline B_1;\mathbb R^3)$ on the bounded $C^1$ domain $B_1$: $0=\int_{B_1}\Delta w\,dx=\int_{S^2}\partial_nw\,d\sigma=\sigma(S^2)=4\pi$ by [F1] and step 1.2, a contradiction. Hence no such $w$ exists, so the conditions are incompatible; by step 1.1 the same trace $f=n_3$ is nevertheless an admissible ball-boundary datum whose harmonic extension has normal derivative $n_3$, not the constant $1$. [F1, F5, step 1.1, step 1.2]

3.1 Scope of the elliptic conclusions. Step 2.1 produces a weak solution of $-\operatorname{div}(\varepsilon\nabla u)=0$ for a coefficient that is positive and smooth on each open side but discontinuous across the interface $\{x_1=0\}$, and step 1.3 shows the solution fails to be $C^1$ near the interface; this is a local smooth-interface witness with smooth coefficients on each closed side, and its one-sided regularity is explicit from the affine formulas. It illustrates the distinction made in [F8], but the global transmission theorem is not directly invoked: the plane is unbounded and is not a closed interface strictly inside a bounded domain as that theorem requires. Therefore a global $C^1$ or $C^\infty$-on-the-closure conclusion for the piecewise-constant coefficient case is false, while the recorded one-sided piecewise regularity is the sharp conclusion; the smooth-coefficient statements of that theorem cannot be extended to this case. [F8, step 1.3, step 2.1]

3.2 Scope of the spectral completeness conclusions. The coefficient field of steps 1.3 and 2.1 is discontinuous across $\{x_1=0\}$ and its weak solution is not classical $C^1$ there, so the configuration is not one of the smooth classical configurations to which the smooth PEC cavity or rectangular classes of [F9] refer; that theorem declares its smooth-domain class and asserts in its statement that no completeness is asserted in non-smooth classes. The explicit weak solution of step 2.1 shows that the weak formulation of the equation remains valid in this excluded configuration and does not acquire the missing classical regularity, so it cannot be used to extend the spectral conclusions. This scalar transmission witness is not itself a vector PEC eigenfield and makes no claim that spectral completeness fails in any other correctly specified weak class; [F9] is used to inspect the stated scope, not to infer such a failure. [F9, step 1.3, step 2.1]

4.1 Audit. Step 1.1 identifies the admissible ball-boundary datum $f=n_3$ and its harmonic extension; step 1.2 computes the sphere mass $\sigma(S^2)=4\pi$ from the polar formula and the closed-ball volume; step 2.2 uses the divergence theorem to show that $\Delta u=0$ in $B_1$ and $\partial_nu=1$ on $S^2$ cannot hold simultaneously; steps 1.3 and 2.1 exhibit the continuous, weakly differentiable piecewise-linear solution with $\varepsilon\partial_1u\equiv1$ and show that it is not $C^1$; and steps 3.1 and 3.2 place this witness against the exact hypotheses of the elliptic and spectral results. The elliptic and spectral citations [F8]-[F9] are used solely to compare their stated hypotheses and exclusions; their Axiom-of-Choice existence conclusions are not invoked here. Countable Choice is used through the ball-boundary supplier [F7], the polar-coordinate identity [F3] of step 1.2 and the divergence theorem [F5] of step 2.2, whose own assumptions are those of the Statement; no other choice principle is used. No measurement, physical field interpretation or empirical claim is made. [given, F10, step 1.1, step 1.2, step 1.3, step 2.1, step 2.2, step 3.1, step 3.2] ∎
