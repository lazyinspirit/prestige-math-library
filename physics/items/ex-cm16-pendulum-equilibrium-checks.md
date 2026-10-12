---
id: ex-cm16-pendulum-equilibrium-checks
kind: example
title: "The ideal pendulum on declared data: strict minimum and Lyapunov stability at the downward equilibrium, negative Hessian and instability at the upward equilibrium, the exact linearisation frequencies, and failure of attraction"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [def-cm16-stability-and-hyperbolicity-concepts,
       pthm-cm16-energy-stability-and-instability,
       def-cm-mechanical-vector-field-and-energy-in-a-chart,
       thm-sine-and-cosine-derivatives,
       thm-derivative-of-exponential,
       def-cm01-units]
dependency_roles:
  def-cm16-stability-and-hyperbolicity-concepts: formulation-prerequisite
  pthm-cm16-energy-stability-and-instability: physical-result
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
  def-cm01-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A declared-data check of the page's energy-stability theorem on the ideal planar pendulum: with mass 1 kg, length 1 m and g=9.81 m s^-2 in the angle chart, the downward equilibrium is a strict minimum, hence Lyapunov stable but not attracting, with purely imaginary linearisation frequencies; the upward equilibrium has a strictly negative Hessian, hence is unstable, with the real linearisation rates. All data are declared model data; no measurement and no empirical comparison is made."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), §3.2 and §3.3: pendulum equilibrium types and the phase-plane discussion, with the linearised-stability caveats"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), §2.1 pp. 10-13: the pendulum Lagrangian and its equilibria"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309, Fall 2014), §7.3 pp. 164-172: the corrected stability definitions and the small-oscillation frequency about a stable equilibrium"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
---

## Example

**Declared model data.** Take one label on the real line as the angle chart of
the ideal planar pendulum: the chart domain is $\Omega:=\mathbb R$, the
configuration coordinate is the angle $q$ (radians, identified modulo $2\pi$
at the end), the kinetic metric is the constant matrix
$M:=m\ell^2$ with $m:=1\ \mathrm{kg}$, $\ell:=1\ \mathrm m$, and the potential
is
$$U(q):=mg\ell\,(1-\cos q),\qquad g:=9.81\ \mathrm{m\,s^{-2}},\qquad mg\ell=9.81\ \mathrm J .$$
This is the mechanical chart datum of
[[def-cm-mechanical-vector-field-and-energy-in-a-chart]] with
$\Omega=\mathbb R$, $M$ constant and $U$ of class $C^\infty$. Its equations
are $m\ell^2\ddot q=-mg\ell\sin q$, equivalently
$\ddot q=-(g/\ell)\sin q$.

**Assertions to check.** (i) $q=0$ and $q=\pi$ are mechanical equilibria;
(ii) at $q=0$ the potential is a strict local minimum and
[[pthm-cm16-energy-stability-and-instability]] clause 1 makes $(0,0)$
Lyapunov stable, while the linearised frequencies are
$\pm i\sqrt{g/\ell}=\pm i\,3\sqrt{109}/10\ \mathrm{s^{-1}}$ and the
equilibrium is not asymptotically stable; (iii) at $q=\pi$ the Hessian is
$-mg\ell<0$ and clause 3 makes $(\pi,0)$ unstable, with linearised rates
$\pm 3\sqrt{109}/10\ \mathrm{s^{-1}}$.

## Facts & Assumptions

**Given:** the declared chart data $M=1\ \mathrm{kg\,m^2}$, $U(q)=9.81(1-\cos q)\ \mathrm J$ on $\Omega=\mathbb R$ and the two equilibria $q=0$, $q=\pi$.

[L1] The energy-stability theorem ([[pthm-cm16-energy-stability-and-instability]]): under the chart hypotheses, a strict local minimum of $U$ makes $(q_0,0)$ Lyapunov stable; a negative Hessian eigenvalue gives an unbounded solution $e^{\mu t}(w,\mu w)$ of the variational equation (linear instability); a negative definite Hessian $D^2U(q_0)$ makes the equilibrium unstable; and exact energy conservation prevents asymptotic stability whenever states of different energy accumulate at the equilibrium.

[L2] Trigonometric derivatives ([[thm-sine-and-cosine-derivatives]]): $(\sin)'=\cos$ and $(\cos)'=-\sin$ on $\mathbb R$.

## Verification

**Proof technique:** direct.

1.1 Equilibria and second derivative: by [L2], $U'(q)=mg\ell\sin q$ and $U''(q)=mg\ell\cos q$; hence $U'(0)=U'(\pi)=0$, so $q=0$ and $q=\pi$ are mechanical equilibria ([[def-cm-mechanical-vector-field-and-energy-in-a-chart]]), with $U''(0)=mg\ell=981/100\ \mathrm J>0$ and $U''(\pi)=-mg\ell<0$. [given, L2, algebra]

2.1 Downward equilibrium: $U(q)-U(0)=mg\ell(1-\cos q)>0$ for $0<\lvert q\rvert<2\pi$, because $\cos q<1$ there; thus $q=0$ is a strict local minimum (take $r_0:=\pi$), and [L1] first clause gives Lyapunov stability of $(0,0)$ in the chart. Since $g/\ell=981/100\ \mathrm{s^{-2}}$ and $\sqrt{981/100}=(3\sqrt{109})/10$, the linearised equation $\ddot\eta=-(g/\ell)\eta$ has the purely imaginary characteristic roots $\pm i\,3\sqrt{109}/10\ \mathrm{s^{-1}}$; the equilibrium is therefore not hyperbolic, consistent with the absence of any exponential conclusion. [step 1.1, given, L1, L2, algebra]

2.2 Upward equilibrium: $U''(\pi)=-981/100\ \mathrm J<0$, and since $n=1$ the Hessian is negative definite at $q=\pi$; [L1] third clause therefore makes $(\pi,0)$ unstable. The linearised equation $\ddot\eta=(g/\ell)\eta$ has the real roots $\pm3\sqrt{109}/10\ \mathrm{s^{-1}}$, one of which is positive, matching the linear-instability statement of [L1] second clause. [step 1.1, given, L1, algebra]

3.1 Failure of attraction: for every $0<\varepsilon<\pi$ the datum $z_0:=(\varepsilon,0)$ has energy $E(z_0)=mg\ell(1-\cos\varepsilon)>0=E(0,0)$, so letting $\varepsilon\downarrow0$ supplies states of different energy accumulating at the equilibrium; by [L1] fourth clause (and the strict-minimum clause of step 2.1) $(0,0)$ is Lyapunov stable but not asymptotically stable. In particular no datum of positive energy can converge to $(0,0)$, because the energy is conserved. [step 2.1, given, L1, algebra]

4.1 All quantities above are declared model data substituted into the chart formulas; $M$ has dimension $\mathrm{kg\,m^2}$, the potential and the energies share the dimension $\mathrm J=\mathrm{kg\,m^2\,s^{-2}}$, and the frequencies have dimension $\mathrm{s^{-1}}$ ([[def-cm01-units]]). No pendulum, material or measurement is involved. [step 2.1, step 2.2, given, algebra] ∎

## Remarks

- **Periodic identification.** The chart coordinate $q$ is the lift of the
  circle angle; the potential is $2\pi$-periodic and the equation is invariant
  under $q\mapsto q+2\pi$, so the equilibria at $q=2\pi k$ (stable) and
  $q=\pi+2\pi k$ (unstable) are the same physical configurations as those
  checked. The two equilibria are the only mechanical equilibria, by step 1.1
  and the zero set of the sine.

- **What the check does not show.** The check verifies the hypotheses of
  [[pthm-cm16-energy-stability-and-instability]] on declared data; it does not
  produce a basin of attraction, a decay rate (none exists at the stable
  equilibrium) or any statement about the pendulum as an apparatus.
