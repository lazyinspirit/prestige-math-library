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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

**Inputs.** A finite-channel reaction propensity system
[[def-reaction-network-propensity-system-and-generator]], an initial state
$x_0\in E$, a deterministic grid $0=t_0<t_1<\cdots<t_N=T$ with finite $N$,
and a draw budget $B\in\mathbb N\cup\{\infty\}$. Write
$h_n=t_{n+1}-t_n$. At each step the count vector has the product law whose
$j$th marginal is $\operatorname{Pois}(a_j(x_n)h_n)$, as defined in
[[def-scalar-poisson-count-law]]. The budget counts scalar Poisson draws.

**Output.** The recorded grid endpoint pairs, with piecewise-constant
interpolation, and a status in
{**horizon**, **absorbed**, **invalid-state**, **budget-exhausted**}.
The budget-exhausted output is an incomplete prefix and is not a terminal
sample at $T$.

**Procedure.** Set $x=x_0$, grid index $n=0$, Poisson-draw counter $d=0$,
recorded path $P=[(0,x_0)]$, and status **horizon**.

1. If $n=N$, return $P$ with status **horizon**. If $x\notin E$, set status
   **invalid-state** and hold $x$ fixed to $T$. If $P$ does not end at
   $(t_n,x)$, append that pair; if $t_n<T$, append $(T,x)$; then return.
   If $\lambda(x)=0$, hold $x$ fixed to $T$, append $(T,x)$ to $P$ if needed,
   and return $P$ with status **absorbed**.
2. If $B<\infty$ and $B-d<R$, return the path prefix with status
   **budget-exhausted**; it does not define a terminal sample at $T$.
3. Draw conditionally independent $K_{j,n}\sim\operatorname{Pois}(a_j(x)h_n)$,
   $1\le j\le R$, and set $y=x+\sum_{j=1}^R K_{j,n}\nu_j$. Increase
   $d\leftarrow d+R$.
4. Advance time to $t_{n+1}$ and append $(t_{n+1},y)$ to $P$. If $y\notin E$,
   set $x=y$, set status **invalid-state**, and keep $y$ fixed through all
   remaining grid times; append $(T,y)$ to $P$ if $t_{n+1}<T$, then return.
   If $y\in E$, set $x\leftarrow y$, increment $n\leftarrow n+1$, and
   continue.

