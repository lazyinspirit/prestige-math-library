---
id: lem-em-weak-neumann-and-transmission-existence
kind: lemma
domain: mathematics
title: "Weak Neumann and transmission existence with interface charges"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 3
deps: [cor-first-green-identity-on-a-bounded-c-one-domain, thm-smooth-up-to-the-boundary-density-on-smooth-domains, lem-em-prescribed-fractional-dirichlet-existence, lem-em-mean-zero-coercivity-on-a-c-one-domain, lem-em-symmetric-coercive-variational-solver, def-fractional-sobolev-space-on-a-compact-c-one-boundary, thm-lp-trace-operator-on-a-bounded-c-one-domain, cor-cauchy-schwarz-inequality-for-l-two, def-axiom-of-choice, def-countable-choice, thm-algebra-of-derivatives, thm-sharp-trace-theorem-for-w-one-p, thm-bounded-right-inverse-for-the-sobolev-trace, lem-em-zero-boundary-coercivity]
dependency_roles:
  lem-em-zero-boundary-coercivity: mathematical-premise
  thm-bounded-right-inverse-for-the-sobolev-trace: mathematical-premise
  thm-sharp-trace-theorem-for-w-one-p: mathematical-premise
  cor-first-green-identity-on-a-bounded-c-one-domain: mathematical-premise
  thm-smooth-up-to-the-boundary-density-on-smooth-domains: mathematical-premise
  lem-em-prescribed-fractional-dirichlet-existence: mathematical-premise
  lem-em-mean-zero-coercivity-on-a-c-one-domain: mathematical-premise
  lem-em-symmetric-coercive-variational-solver: mathematical-premise
  def-fractional-sobolev-space-on-a-compact-c-one-boundary: mathematical-premise
  thm-lp-trace-operator-on-a-bounded-c-one-domain: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (University of California, Davis; revised 6/18/2014), Chapter 4 (weak formulations and existence)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Chapter 4 as the contextual reference for weak Neumann solvability and compatibility; the mean-zero coercion, the interface functional and the classical jump computation are proved locally through the batch's published suppliers."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice for the actually cited Sobolev trace, lift and mean-zero density interfaces, and its Countable Choice consequence for the measure and variational interfaces ([[def-axiom-of-choice]], [[def-countable-choice]]). Let $\Omega\subset\mathbb R^3$ be a bounded connected $C^1$ domain, let $\varepsilon$ be measurable symmetric uniformly elliptic ([[lem-em-prescribed-fractional-dirichlet-existence]]), let $\rho\in L^2(\Omega)$, and let $g\in H^{-1/2}(\partial\Omega)$, the bounded real dual of the boundary trace space ([[def-fractional-sobolev-space-on-a-compact-c-one-boundary]]). Define $\ell(v)=\int_\Omega\rho v+\langle g,Tv\rangle$ on $H^1(\Omega)$ ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]]). A weak Neumann solution is a $u\in H^1$ with

$$\int_\Omega\nabla v\cdot\varepsilon\nabla u=\ell(v)\qquad\text{for every }v\in H^1(\Omega).$$

Such a solution exists if and only if $\ell(1)=0$, and is then unique up to an additive constant; normalising $\int_\Omega u=0$ makes it unique. On finitely many connected components the compatibility and normalisation are imposed separately on each component. For finitely many disjoint smooth stationary interfaces with piecewise smooth uniformly elliptic $\varepsilon$, bulk data $\rho\in L^2$ and prescribed sheet charge $\sigma$ on the interfaces defining a bounded trace functional on $H^1$ (for instance $\sigma\in L^2$ of each smooth compact interface), the same argument gives weak Dirichlet or compatible Neumann existence for the transmission problem, with the globally $H^1$ potential having identical one-sided trace; where the solution is classically smooth on each side, integration by parts gives the jump $n\cdot[\varepsilon\nabla u]=-\sigma$, equivalently $n\cdot[D]=\sigma$ for the explicitly defined mathematical flux $D:=-\varepsilon\nabla u$ on each side. General piecewise classical regularity remains a separate requirement.

## Facts & Assumptions
**Given:** A bounded connected $C^1$ domain $\Omega$ with outward normal $n$; a uniformly elliptic symmetric measurable $\varepsilon$ with constants $0<\alpha\le\beta<\infty$; data $\rho\in L^2(\Omega)$ and $g\in H^{-1/2}(\partial\Omega)$; the functional $\ell$ and the weak Neumann problem of the Statement.

[F1] **Trace and lift interfaces.** Under AC the trace $T:H^1(\Omega)\to H^{1/2}(\partial\Omega)$ is bounded and onto by [[thm-sharp-trace-theorem-for-w-one-p]] at $p=2$. It has a bounded linear right inverse $R:H^{1/2}(\partial\Omega)\to H^1(\Omega)$ by [[thm-bounded-right-inverse-for-the-sobolev-trace]], with $TR=\mathrm{id}$ and $\|Rg\|_{H^1}\le C\|g\|_{H^{1/2}}$. The trace is the same operator as the $H^1\to L^2$ trace of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]. Prescribed fractional Dirichlet solvability is supplied by [[lem-em-prescribed-fractional-dirichlet-existence]]; its boundary space is [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]], and the standing AC is [[def-axiom-of-choice]].

[F2] **Mean-zero coercivity.** On a bounded connected $C^1$ domain, $\|v-v_\Omega\|_{L^2}\le C_\Omega\|\nabla v\|_{L^2}$, where $v_\Omega$ is the mean; hence the gradient norm is equivalent to the full $H^1$ norm on the closed mean-zero subspace ([[lem-em-mean-zero-coercivity-on-a-c-one-domain]]). The full $H^1$ space is complete and Hilbert by [[lem-em-zero-boundary-coercivity]]; the mean functional is continuous by Cauchy-Schwarz, so its kernel is a closed Hilbert subspace. On $H_0^1$ that supplier also gives $\|v\|_2\le2L\|\nabla v\|_2$ and equivalence of the gradient and full norms for any enclosing cube $\Omega\subseteq(-L,L)^3$.

[F3] **Symmetric coercive solver.** A symmetric bounded coercive bilinear form on a real Hilbert space with a bounded functional has a unique solution, under Countable Choice ([[lem-em-symmetric-coercive-variational-solver]], [[def-countable-choice]]).

[F4] **Cauchy-Schwarz and calculus.** The first Green identity on each smooth side is [[cor-first-green-identity-on-a-bounded-c-one-domain]], applied componentwise to the coefficient flux by the coordinate integration-by-parts formula. Smooth ambient restrictions are dense in $H^1$ under AC ([[thm-smooth-up-to-the-boundary-density-on-smooth-domains]]). Cauchy-Schwarz for $L^2$ ([[cor-cauchy-schwarz-inequality-for-l-two]]) and the product rule ([[thm-algebra-of-derivatives]]).



## Proof

**Proof technique:** direct.

1.1 Boundedness of $\ell$: $|\ell(v)|\le\|\rho\|_2\|v\|_2+\|g\|_{H^{-1/2}}\|Tv\|_{H^{1/2}}\le C(1+\|\rho\|_2+\|g\|_{H^{-1/2}})\|v\|_{H^1}$ by the trace bound [F1] and Cauchy-Schwarz [F4]. [given, F1, F4, algebra]

2.1 Necessity of compatibility: the constant function $1$ lies in $H^1(\Omega)$ with $\nabla 1=0$, so testing the equation with $v=1$ gives $0=\ell(1)$; hence $\ell(1)=0$ is necessary for existence. [step 1.1, given, algebra]

2.2 Assume now the compatibility condition $\ell(1)=0$. Let $H^1_*=\{v\in H^1(\Omega):\int_\Omega v=0\}$, a closed subspace, and restrict the symmetric form $a(w,v)=\int_\Omega\nabla v\cdot\varepsilon\nabla w$ and the functional $\ell$ to it; $a$ is bounded by $\beta$ in gradient norm: the nonnegative quadratic $b_x(\xi+t\eta,\xi+t\eta)$ for $b_x(\xi,\eta)=\xi\cdot\varepsilon(x)\eta$ gives $|b_x(\xi,\eta)|\le\beta|\xi||\eta|$, and Cauchy-Schwarz [F4] gives $|a(w,v)|\le\beta\|\nabla w\|_2\|\nabla v\|_2$. It is coercive with $a(v,v)\ge\alpha\|\nabla v\|_2^2\ge c\|v\|_{H^1}^2$ by the equivalence of norms of [F2], and $\ell$ remains bounded by step 1.1, so the solver [F3] gives a unique $u_*\in H^1_*$ with $a(u_*,v)=\ell(v)$ for every $v\in H^1_*$. [step 1.1, F2, F3, F4, algebra]

3.1 Extension to all of $H^1$: every $v\in H^1$ decomposes as $v=v_*+c$ with $v_*\in H^1_*$ and constant $c=v_\Omega$; then $a(u_*,v)=a(u_*,v_*)+a(u_*,c)=a(u_*,v_*)=\ell(v_*)=\ell(v_*)+c\,\ell(1)=\ell(v)$ by the compatibility assumed in step 2.2 and $\nabla c=0$, so $u_*$ solves the full weak Neumann problem; normalising $\int u_*=0$ selects this representative. [step 2.2, step 2.1, algebra]

4.1 Uniqueness: for two solutions $u_1,u_2$ the difference $w$ satisfies $\int\nabla v\cdot\varepsilon\nabla w=0$ for all $v\in H^1$; testing $v=w$ gives $\alpha\|\nabla w\|_2^2\le\int\nabla w\cdot\varepsilon\nabla w=0$, so $\nabla w=0$ and, by the mean-zero inequality [F2], $w-w_\Omega=0$, i.e. $w$ is constant; hence solutions are unique up to additive constants and the mean-zero normalisation makes the solution unique. [step 3.1, F2, algebra]

5.1 Finitely many connected components: on a bounded $C^1$ domain with components $\Omega_1,\dots,\Omega_N$, $H^1(\Omega)$ is the direct sum of the $H^1(\Omega_j)$ extended by zero, the gradient form and the functional $\ell$ split, and the trace space splits accordingly, so the argument of steps 1.1-4.1 applies on each component separately: compatibility $\ell(\mathbf 1_{\Omega_j})=0$ is required on each component and the solution is unique up to one constant per component, fixed by the per-component mean-zero normalisation. [step 1.1, step 3.1, step 4.1, F1, F2, F3, algebra]

6.1 Transmission: include the bounded interface functional $\langle\sigma,T_\Sigma v\rangle$ in $\ell$. For Dirichlet data use the right-inverse lift $G$ of [F1] and solve $a(w,v)=\ell(v)-a(G,v)$ on $H_0^1$ by [F3] and zero-boundary coercivity of [F2]; then $u=G+w$ has the prescribed outer trace and solves the full interface weak problem. For Neumann data apply steps 2.2–5.1 with this modified $\ell$ and its componentwise compatibility. The one-sided traces coincide: localized global $H^1$ functions can be approximated by smooth ambient restrictions using [F4]; their traces coincide on the interface, and bounded one-sided trace maps pass that equality to the $H^1$ limit. [step 5.1, F1, F2, F3, F4, algebra]

7.1 Classical jump: where the transmission solution is classically smooth on each side of an interface $\Sigma$ with unit normal $n$ pointing from the side labelled minus to the side labelled plus, and $[W]=W_+-W_-$, apply the divergence theorem to $\nabla v\cdot\varepsilon\nabla u$ on each side and subtract the weak equation; the bulk terms cancel and the remaining boundary identity is $n\cdot[\varepsilon\nabla u]=-\sigma$, i.e. $n\cdot[D]=\sigma$ for the explicitly defined mathematical flux $D:=-\varepsilon\nabla u$, since $[D]=-[\varepsilon\nabla u]$; this is conditional on the one-sided classical smoothness, and general piecewise classical regularity remains a separate requirement. [step 6.1, F1, F4, algebra] ∎
