---
id: alg-explicit-poisson-tau-leaping
kind: algorithm
title: "Explicit Poisson tau-leaping with an invalid-state status"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-reaction-network-propensity-system-and-generator
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Daniel T. Gillespie, Approximate accelerated stochastic simulation of chemically reacting systems"
      url: "https://moodle2.units.it/pluginfile.php/293921/mod_resource/content/1/Gillespie_2001_Approximate_accelerated_stochastic_simulation_of_chemically_reacting_systems.pdf"
      locator: "§III, equations (14)–(18), journal pp. 1718–1719 / PDF pp. 3–4."
    - title: "Tiejun Li, Lecture 21: Application in chemical reaction kinetics, Applied Stochastic Analysis course notes"
      url: "https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect21.pdf"
      locator: "§3.1, tau-leaping algorithm, PDF pp. 2–3."
verification:
  precheck: pending
---

## Definition

**Inputs.** A finite-channel reaction propensity system
[[def-reaction-network-propensity-system-and-generator]], an initial state
$x_0\in E$, a deterministic grid $0=t_0<t_1<\cdots<t_N=T$ with finite $N$,
and a draw budget $B\in\mathbb N\cup\{\infty\}$. Write
$h_n=t_{n+1}-t_n$. At each step the count vector has the product law whose
$j$th marginal is $\operatorname{Pois}(a_j(x_n)h_n)$, as defined in
[[def-scalar-poisson-count-law]]. The budget counts scalar Poisson draws.

**Procedure.** Set $x=x_0$, grid index $n=0$, Poisson-draw counter $d=0$, and
status **horizon**.

1. If $n=N$, return the completed path with status **horizon**. If $x\notin E$,
   set status **invalid-state**, hold $x$ fixed to $T$, and return. If
   $\lambda(x)=0$, hold $x$ fixed to $T$ and return status
   **absorbed**.
2. If fewer than $R$ draws remain in budget $B$ (that is, $B-d<R$), return the path prefix with
   status **budget-exhausted**; it does not define a terminal sample at $T$.
3. Draw conditionally independent $K_{j,n}\sim\operatorname{Pois}(a_j(x)h_n)$,
   $1\le j\le R$, and set $y=x+\sum_{j=1}^R K_{j,n}\nu_j$. Increase
   $d\leftarrow d+R$.
4. Advance time to $t_{n+1}$. If $y\notin E$, set $x=y$, set status
   **invalid-state**, and keep $y$ fixed through all remaining grid times. If
   $y\in E$, set $x\leftarrow y$, increment $n\leftarrow n+1$, and continue.

The run has at most $N$ iterations. Each valid step uses exactly $R$ scalar
Poisson draws, $R$ propensity evaluations, and one finite stoichiometric
update. Under the unit-operation convention that each scalar draw,
propensity evaluation, and stoichiometric update costs one unit, its work is
$O(RN)$; the cost internal to a particular random-number generator is
excluded. Under the same convention, an event-count SSA implementation does
one exponential draw and one channel selection per simulated event, so its
work on a realized path is $O(M_T)$, where $M_T$ is that path's event count
before $T$. This compares operation counts only; it does not compare
parameter-dependent random-number costs. The method is approximate; its
Poisson leap can leave the physical state set, and no error guarantee is
asserted here for unbounded rates or the budget-exhausted prefix.
