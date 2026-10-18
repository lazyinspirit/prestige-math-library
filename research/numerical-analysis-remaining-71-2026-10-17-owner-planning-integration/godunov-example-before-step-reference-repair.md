---
id: ex-godunov-fv-monotone-under-cfl
kind: example
title: Burgers Godunov flux under the invariant-interval CFL bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
aliases: []
deps: [def-bounded-bv-data-on-line, def-monotone-finite-volume-entropy-scheme, def-godunov-flux-for-burgers, lem-godunov-flux-for-burgers-is-continuous-and-consistent, def-countable-choice, def-dependent-choice, thm-monotone-finite-volume-entropy-convergence]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jérôme Droniou, A beginner’s course in finite volume approximation of scalar conservation laws, complete lecture note"
      url: "https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf"
      locator: "§2.2.3, pp. 17–18: Godunov flux and monotonicity under a CFL condition; §2.3.3, pp. 22–23: convergence."
    - title: "Siddhartha Mishra, Ulrik S. Fjordholm and Rémi Abgrall, Numerical Methods for Conservation Laws, ETH lecture notes"
      url: "https://metaphor.ethz.ch/x/2019/hs/401-4671-00L/literature/mishra_hyperbolic_pdes.pdf"
      locator: "§4.4.4, p. 50 (Godunov flux is monotone and locally Lipschitz); §4.6, pp. 55–57 (monotone-scheme convergence)."
---

## Example

Assume $\mathrm{AC}_\omega$, and also assume Dependent Choice $\mathrm{DC}$ if $u_0\in L^1(\mathbb R)$. Let $f_B(s)=s^2/2$ and use the Godunov flux $G$ of
[[def-godunov-flux-for-burgers]]. For every compact invariant interval $I\subseteq[-M,M]$
with $M>0$, the two coordinate Lipschitz bounds can be taken to be
$L_1=L_2=M$, and $G$ is nondecreasing in its first argument and nonincreasing
in its second. Therefore, for any $u_0\in\mathrm{BV}_b(\mathbb R)$ with values
in $I$, every mesh family satisfying
$$\frac{\tau_m}{h_m}\le\frac1{2M},\qquad \frac{\tau_m}{h_m}\ge c_*>0,\qquad h_m,\tau_m\to0$$
falls under [[thm-monotone-finite-volume-entropy-convergence]] and converges
strongly locally to the unique Burgers entropy solution.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $f_B(s)=s^2/2$, a compact interval $I\subseteq[-M,M]$ with $M>0$, bounded BV data $u_0$ in $I$, the Godunov flux $G$, and $\lambda=\tau/h$; additionally assume $\mathrm{DC}$ when $u_0\in L^1(\mathbb R)$.

[F1] The Godunov flux has the listed increasing-state and decreasing-state branches ([[def-godunov-flux-for-burgers]]).

[F2] $G$ is continuous and consistent: $G(a,a)=f_B(a)$ ([[lem-godunov-flux-for-burgers-is-continuous-and-consistent]]).

[F3] Data in $\mathrm{BV}_b(\mathbb R)$ have finite translation variation and are locally integrable equivalence classes ([[def-bounded-bv-data-on-line]]).

[F4] Under $\mathrm{AC}_\omega$, and with DC additionally when $u_0\in L^1(\mathbb R)$, if $F$ is locally Lipschitz, consistent and coordinatewise monotone on the data range, and $\lambda(L_1+L_2)\le1$ with positive lower $\lambda$, the corresponding finite-volume reconstructions converge strongly locally to the unique entropy solution ([[def-countable-choice]], [[def-dependent-choice]], [[thm-monotone-finite-volume-entropy-convergence]]).

## Verification

1.1 Fix $b\in[-M,M]$. On each branch in [F1], the function $a\mapsto G(a,b)$ is either constant, $a^2/2$, or $\max\{a^2,b^2\}/2$. It is nondecreasing: when $a\le b$, the active values are $b^2/2$ on the negative-negative branch, $0$ on the crossing branch, and $a^2/2$ on the nonnegative branch; when $b<a$, the maximum is constant while $|a|\le|b|$ and increases as $a^2/2$ once $a$ is the larger positive magnitude. The branch values agree at their boundaries by [F2], so the monotonicity persists across each switch. [F1, F2, given, algebra]

1.2 Fix $a\in[-M,M]$. On the branches of [F1], $b\mapsto G(a,b)$ is either constant, $b^2/2$ for $b\le0$, or $\max\{a^2,b^2\}/2$ on $b<a$. As $b$ increases, $b^2/2$ decreases on the negative axis; on $b<a$, the maximum decreases while $|b|>|a|$ and is constant after $|b|\le|a|$; the remaining $a\le b$ branches are constant or decrease to zero. Boundary values agree by [F2]. Hence $G(a,\cdot)$ is nonincreasing. [F1, F2, algebra]

1.3 On every smooth branch the derivative in the varying coordinate has absolute value at most $R$ on $[-R,R]^2$. The maximum branch has the same bound because $\max\{a^2,b^2\}/2$ is piecewise one of the two square branches. The finite branch partition and continuity from [F2] therefore give coordinate Lipschitz bounds $R$ on every compact square $[-R,R]^2$, proving that $G$ is locally Lipschitz on $\mathbb R^2$. Applying the same estimate with $R=M$ gives coordinate Lipschitz bounds $L_1=L_2=M$ on the target square. Consistency is [F2], so the full CFL bound is $\lambda(L_1+L_2)=2M\lambda\le1$. [F1, F2, algebra]

2.1 The hypotheses of [F4] now hold for every stated family: the data are bounded BV by [F3], the flux is locally Lipschitz, monotone and consistent by steps 1.1–3.1, the full CFL bound holds, and the mesh ratio has the required positive lower bound. Thus the reconstructions converge strongly in local $L^1$ to the unique entropy solution. [F3, F4, step 1.1, step 1.2, step 1.3, given] ∎
