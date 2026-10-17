---
id: thm-density-scaled-chemical-langevin-model-error
kind: theorem
title: "Stopped density-scaled jump versus chemical Langevin weak model error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-density-scaled-jump-and-chemical-langevin-generators
  - lem-bounded-rate-reaction-generator-dynkin-identity
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Daniel T. Gillespie, Approximate accelerated stochastic simulation of chemically reacting systems"
      url: "https://moodle2.units.it/pluginfile.php/293921/mod_resource/content/1/Gillespie_2001_Approximate_accelerated_stochastic_simulation_of_chemically_reacting_systems.pdf"
      locator: "§IV, the chemical Langevin equation and its two approximation conditions, journal pp. 1720–1721 / PDF pp. 5–6."
    - title: "Tiejun Li, Lecture 21: Application in chemical reaction kinetics, Applied Stochastic Analysis course notes"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect21.pdf"
      locator: "§3.2, diffusion scaling and Chemical Langevin Equation, PDF pp. 3–4."
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice. Use the density-scaled generators in
[[def-density-scaled-jump-and-chemical-langevin-generators]]. Let $K\subset U$
be compact and the closure of a bounded open stopping region with nonempty interior, let
$x_0\in\operatorname{int}K$, and let
$\mathcal L_V=x_0+\frac1V\mathbb Z^d$ be a containing lattice. For fixed $V$,
the set $D=\operatorname{int}K\cap\mathcal L_V$ is finite: boundedness of
$K$ bounds each integer coordinate index in the lattice. Let $X^V$ be the
jump process stopped at
$\tau_X=\inf\{t\ge0:X^V_t\notin\operatorname{int}K\}$ and let $Z^V$ be a
chemical Langevin diffusion stopped at
$\tau_Z=\inf\{t\ge0:Z^V_t\notin\operatorname{int}K\}$. Assume both stopped
processes exist, and write $\bar X_t=X^V_{t\wedge\tau_X}$ and
$\bar Z_t=Z^V_{t\wedge\tau_Z}$.

Assume $a_j\in C^3(U)$, $0\le a_j\le A_j$ on $K$, and every segment
$[x,x+\nu_j/V]$ for $x\in D$ with $a_j(x)>0$ lies in $U$. For a bounded
payoff $g$ with $|g|\le G$, suppose the stopped CLE backward solution
$$u(s,x)=\mathbb E_x[g(Z^V_{(T-s)\wedge\tau_Z})]$$
has an extension to an open neighborhood of $K$ and all these jump segments
that is $C^3$ in space and $C^1$ in time,
with $u(T,y)=g(y)$ on all states reached by the stopped jump chain and
$u(s,y)=g(y)$ on every exit state (including diffusion boundary points), and
$$\partial_su+\mathcal G_Vu=0\quad\text{on }[0,T]\times\operatorname{int}K, \qquad \|D^3u(s,y)\|\le M,$$
and $\partial_su$ is continuous in time on the stated neighborhood. The
third-derivative bound holds along every jump segment. The derivatives are
spatial Fréchet derivatives with operator norm. Then
$$\left|\mathbb E g(\bar X_T)-\mathbb E g(\bar Z_T)\right| \le \frac{TM}{6V^2}\sum_{j=1}^R A_j\|\nu_j\|^3.$$
If the original local jump and diffusion models are defined through $T$ and
are coupled to agree with their stopped versions up to their respective
exits, then
$$\left|\mathbb E g(X^V_T)-\mathbb E g(Z^V_T)\right| \le \frac{TM}{6V^2}\sum_{j=1}^R A_j\|\nu_j\|^3 +2G\bigl(\mathbb P(\tau_X\le T)+\mathbb P(\tau_Z\le T)\bigr).$$
The $V^{-2}$ term is density-model error from the generator expansion; the
exit term is separate. Neither term is time-discretization error. The
existence and regularity of the CLE backward solution are assumptions, not
consequences of this estimate.

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, the density-scaled generators, the compact
stopping region, bounded propensities on $K$, and the stopped CLE backward
solution with the stated boundary and derivative conditions.

[F1] [[def-density-scaled-jump-and-chemical-langevin-generators]]: for a
state $x$ before exit,
$$\mathcal L_V\phi(x)=V\sum_{j:a_j(x)>0} a_j(x) (\phi(x+\nu_j/V)-\phi(x)),$$
$$\mathcal G_V\phi(x)=\sum_j a_j(x)\nu_j\cdot\nabla\phi(x) +\frac1{2V}\sum_j a_j(x)\nu_j^{\mathsf T}D^2\phi(x)\nu_j.$$

[F2] [[lem-bounded-rate-reaction-generator-dynkin-identity]]: a finite-state
reaction chain stopped on its finite exit set obeys the time-dependent
Dynkin identity. For this fixed $V$, the lattice states in
$\operatorname{int}K$ form a finite set, and each has at most $R$ one-jump
destinations, so their exit set is finite. The total reaction rate before
exit is bounded by $V\sum_jA_j$. Relabeling a density state by
$y=V(x-x_0)\in\mathbb Z^d$ transports the channel increments to $\nu_j$ and
the rates to $Va_j(x_0+y/V)$, so the supplier applies to this chain.

[A1] Countable Choice is assumed for the exponential event law in [F2].
[[def-countable-choice]]

[A2] Dependent Choice is assumed in [F2] for the countable input streams.
[[def-dependent-choice]]

[A3] The stopped CLE and its stated backward solution exist; the backward
equation, boundary values, and third-derivative bound hold. They are not
inferred from Taylor expansion of the jump generator.

[A4] For the unstopped comparison, each original process agrees with its
stopped version up to its first exit, and $|g|\le G$ globally.

## Proof

**Given:** Countable Choice, Dependent Choice, the stopped processes, the derivative and
propensity bounds, the backward equation, and the finite stopped-chain Dynkin
identity.

1.1 Fix an interior lattice state $x$ and a time $s$. For channel $j$, apply one-variable Taylor's theorem to $r\mapsto u(s,x+r\nu_j/V)$ on $[0,1]$. Its third-order remainder has absolute value at most $M\|\nu_j\|^3/(6V^3)$. Multiplying by $Va_j(x)$ and summing over channels gives $$\mathcal L_Vu(s,x)= \sum_j a_j(x)\nu_j\cdot\nabla u(s,x) +\frac1{2V}\sum_j a_j(x)\nu_j^{\mathsf T}D^2u(s,x)\nu_j+R_V(s,x),$$ where $$|R_V(s,x)|\le \frac{M}{6V^2}\sum_jA_j\|\nu_j\|^3.$$ The first two terms are exactly $\mathcal G_Vu(s,x)$ by [F1]. [F1, given, algebra]

1.2 Set $\Psi_V(x)=V(x-x_0)$, $D_V=\Psi_V(D)$, and let $F_V$ be the images under $\Psi_V$ of the one-jump exit destinations from $D$. These are disjoint finite subsets of $\mathbb Z^d$. The transported stopped chain $\widetilde X=\Psi_V(\bar X)$ moves from $y\in D_V$ by channel increment $\nu_j$ at rate $Va_j(x_0+y/V)$ and is fixed on $F_V$. For $\widetilde u(s,y)=u(s,x_0+y/V)$, its time derivative is unchanged and its reaction generator on $D_V$ equals $\mathcal L_Vu(s,x_0+y/V)$. Apply [F2] to this integer-lattice chain and $\widetilde u$. Before $\tau_X$, the integrand is $\partial_su+\mathcal L_Vu=(\mathcal L_V-\mathcal G_V)u$ by the backward equation [A3]. After exit, $\bar X$ is fixed at an exit destination where $u(s,\bar X_s)=g(\bar X_s)$ is independent of $s$, so both its time derivative and stopped generator vanish. At time $T$, $u(T,\bar X_T)=g(\bar X_T)$, and at time $0$, $u(0,x_0)=\mathbb E g(\bar Z_T)$. Therefore $$\mathbb E g(\bar X_T)-\mathbb E g(\bar Z_T) =\mathbb E\int_0^{T\wedge\tau_X} (\mathcal L_V-\mathcal G_V)u(s,X^V_s)\,ds.$$ [F2, A1, A2, A3, given]

2.1 Bound the integrand in step 1.2 by step 1.1 and use $T\wedge\tau_X\le T$. This proves the stopped-process estimate. Under [A4], the stopped and original terminal payoffs agree unless their respective process exits by time $T$; on that event their difference is at most $2G$. The triangle inequality for the two expectations adds at most $2G\mathbb P(\tau_X\le T)+2G\mathbb P(\tau_Z\le T)$, which proves the unstopped bound. [step 1.1, step 1.2, A4, algebra] ∎
