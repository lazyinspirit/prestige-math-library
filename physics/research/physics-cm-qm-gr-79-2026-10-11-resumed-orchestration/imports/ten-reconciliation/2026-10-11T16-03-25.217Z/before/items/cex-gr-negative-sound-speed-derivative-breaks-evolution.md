---
id: cex-gr-negative-sound-speed-derivative-breaks-evolution
kind: counterexample
title: "A negative pressure derivative defeats fixed-Sobolev evolution: exponentially growing Fourier modes of the linearized barotropic fluid"
status: draft
origin: session
domain: mathematics
dependency_level: 14
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
deps: [def-gr-perfect-fluid-matter-model, def-gr-barotropic-enthalpy-variable, lem-gr-barotropic-fluid-symmetric-hyperbolic-system, def-gr-periodic-torus-and-sobolev-spaces]
dependency_roles:
  def-gr-perfect-fluid-matter-model: mathematical-premise
  def-gr-barotropic-enthalpy-variable: mathematical-premise
  lem-gr-barotropic-fluid-symmetric-hyperbolic-system: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.5 (An Example of an Ill-Posed Initial Value Problem): the special-relativistic Euler equations with equation of state p=k rho, k<0, linearized about a constant state, with explicit periodic data sin(nx) whose Fourier modes grow like cosh(n sqrt(-k) t), so smooth periodic data fail to have solutions bounded, derivatives included, on any fixed [0,T]"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "I. Rodnianski and J. Speck, The Stability of the Irrotational Euler-Einstein System with a Positive Cosmological Constant, arXiv:0911.5501 (v2, 2010), Sections 1 and 3: the Euler-Einstein system, the speed-of-sound hypotheses 0<cs<1 for a barotropic fluid (Postulate (4)), the sound cone and the wave-equation formulation of the fluid equations"
      url: "https://arxiv.org/pdf/0911.5501"
verification:
  precheck: pending
---

## Statement refuted

Refuted statement: "for an arbitrary smooth equation of state $p=p(\epsilon)$
with $\epsilon+p>0$ (no sign restriction on $p'$), the Einstein-fluid system
has a local development depending continuously on the data in a fixed Sobolev
topology."

## Facts & Assumptions

**Given:** the constant rest state, the equation of state with $p'(\epsilon_0)<0$, and the linearized system.

[L1] Perfect-fluid equations and their stress tensor ([[def-gr-perfect-fluid-matter-model]]); the barotropic reduction and the role of $c_s^2=p'$ ([[def-gr-barotropic-enthalpy-variable]], [[lem-gr-barotropic-fluid-symmetric-hyperbolic-system]]).

[L2] On the fixed flat background the linearization of the system about a constant state with $n=\partial_t$, constant $\epsilon_0,p_0$ decouples the spatial Fourier modes; substituting $\delta\epsilon=e^{ik\cdot x}g_k(s)$ into the linearized equations gives $g_k''=-p'(\epsilon_0)|k|^2g_k$ ([[def-gr-perfect-fluid-matter-model]]). [L2]

[L3] Fourier analysis on the torus: for any coefficient sequence $(\widehat u(k))$ with $\sum_k(1+|k|^2)^r|\widehat u(k)|^2<\infty$ the class lies in $H^r$ ([[def-gr-periodic-torus-and-sobolev-spaces]]). [L3]

## Counterexample

Consider a constant rest state with $\epsilon=\epsilon_0$, $p_0=p(\epsilon_0)$,
$n=\partial_t$ in flat spacetime and $p'(\epsilon_0)<0$; linearize the fluid
system of [[def-gr-perfect-fluid-matter-model]] about this state in
length-time coordinates. The linearized energy equation and momentum equation
combine to
$$\partial_s^2\,\delta\epsilon-p'(\epsilon_0)\,\Delta\,\delta\epsilon=0 ,$$
whose Fourier mode $\delta\epsilon=e^{ik\cdot x}g_k(s)$ satisfies
$g_k''=-p'(\epsilon_0)|k|^2g_k$, hence grows like
$\exp(\sqrt{-p'(\epsilon_0)}\,|k|s)$. At every fixed $s>0$ and in every fixed
Sobolev norm $H^r$ the amplification factor $e^{\sqrt{-p'}|k|s}$ is unbounded
over $k$; choosing initial amplitudes $\widehat{\delta\epsilon}_0(k)$ decaying
faster than any prescribed polynomial makes the initial datum smooth and its
$H^r$ norm finite, while the solution's $H^r$ norm at time $s$ is infinite
(equivalently, there are data with arbitrarily small $H^r$ norm whose solutions
leave every fixed $H^r$ ball at time $s$). Hence no fixed-Sobolev local
existence with continuous dependence holds without a positivity hypothesis on
$p'$.


**Proof technique:** direct.

1.1 (Mode computation.) With $p'(\epsilon_0)<0$ write $\omega_k:=\sqrt{-p'(\epsilon_0)}|k|>0$; the solution of $g_k''=\omega_k^2g_k$ is $g_k(s)=A_k\cosh(\omega_ks)+B_k\omega_k^{-1}\sinh(\omega_ks)$, whose magnitude is at least $\tfrac12A_ke^{\omega_ks}$. [L1, L2, algebra]

2.1 (Unbounded amplification.) Fix $s>0$ and $r\ge0$; the factor $e^{\omega_ks}$ is unbounded over $k$ for fixed $s>0$ because $\omega_k=\sqrt{-p'}|k|\to\infty$. Choose $A_k=\eta\,(1+|k|^2)^{-N}$ with $N$ large enough that the datum has $H^r$ norm at most $\eta$ (possible by [L3] since the weights are summable for large $N$); then the $H^r$ norm of the solution at time $s$ is at least $\tfrac12\eta\sum_k(1+|k|^2)^{r}e^{\omega_ks}(1+|k|^2)^{-N}$, and the summands with $\omega_ks>2N\log(1+|k|^2)$ contribute a divergent tail, so the solution leaves $H^r$ for every finite $N$. [step 1.1, L3, construct, algebra]

3.1 (Conclusion.) Thus arbitrarily small smooth data produce solutions not bounded in $H^r$ at fixed positive time, contradicting fixed-Sobolev continuous dependence; the hypothesis $p'>0$ (indeed the strict hyperbolicity hypothesis $0<p'<1$ used in the positive theorem) is essential. [step 2.1, discharge-contradiction] ∎
