---
id: def-xd-finite-state-projection-and-cemetery-lift
kind: definition
title: "Killed finite-state projection and cemetery lift"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-xd-countable-nonexplosive-ctmc
  - def-xd-finite-column-generator
  - def-xd-countable-l1-distance
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Brian Munsky and Mustafa Khammash, The Finite State Projection Algorithm for the Solution of the Chemical Master Equation"
      url: "https://www.engr.colostate.edu/~munsky/Papers/JChemPhys_124_044104.pdf"
      locator: "§II, Theorems 2.1–2.2 and §III, printed pp. 044104-3–044104-5; finite principal projections and the lost-mass certificate."
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§§3.2–3.4, PDF pp. 7–16; transition rates, finite master equations, and uniformization."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $X$ be a given nonexplosive chain as in [[def-xd-countable-nonexplosive-ctmc]], with initial law $p_0$ on $S$, and let $F\subseteq S$ be finite and nonempty. Its first exit time from $F$ is

$$\tau_F:=\inf\{s\ge0:X_s\notin F\},$$

with $\tau_F=0$ when $X_0\notin F$. Adjoin a new state $\dagger\notin S$ and define the **killed projection** $Y_t=X_t$ for $t<\tau_F$ and $Y_t=\dagger$ for $t\ge\tau_F$. The **killed mass vector** is $u_F(t,x):=\mathbb P(Y_t=x)$ for $x\in F$, and the **cemetery mass** is $c_F(t):=\mathbb P(Y_t=\dagger)$. Initially, $u_F(0,x)=p_0(x)$ for $x\in F$ and $c_F(0)=p_0(S\setminus F)$.

For $x\in F$ let $\lambda(x)=\sum_{y\ne x}q(x,y)$. The killed principal subgenerator on $F$ has entries $(Q_F)_{y x}=q(x,y)$ for $y\ne x$ in $F$ and $(Q_F)_{x x}=-\lambda(x)$; its column sum is $-\sum_{y\notin F}q(x,y)$. The **cemetery lift** is the finite matrix $\widetilde Q_F$ on $F\cup\{\dagger\}$ with these same entries on $F$, with

$$\widetilde Q_{\dagger x}=\lambda(x)-\sum_{\substack{y\in F\\y\ne x}}q(x,y)=\sum_{y\notin F}q(x,y)\quad(x\in F),\qquad \widetilde Q_{x\dagger}=0\quad(x\in F),\qquad \widetilde Q_{\dagger\dagger}=0.$$

Every column of $\widetilde Q_F$ sums to zero and its off-diagonal entries are nonnegative, so it is a finite column generator in the sense of [[def-xd-finite-column-generator]]. The cemetery state is absorbing; trajectories that return to $F$ after their first exit remain at $\dagger$ in this projection.
