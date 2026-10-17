---
id: def-reaction-network-propensity-system-and-generator
kind: definition
title: "Finite-channel reaction propensity systems and their generator"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-borel-sigma-algebra
  - def-countable
  - def-integers
  - def-natural-numbers
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David F. Anderson, Introduction to Stochastic Processes with Applications to Biology, Chapters 6–7"
      url: "https://people.math.wisc.edu/~dfanderson/605F11/Notes/StochBioOLD.pdf"
      locator: "Chapter 7, §§7.1.1, 7.1.4–7.1.5, PDF pp. 183–193."
    - title: "David F. Anderson and Thomas G. Kurtz, Continuous Time Markov Chain Models for Chemical Reaction Networks"
      url: "https://people.math.wisc.edu/~dfanderson/papers/SURVEY_AndKurtz.pdf"
      locator: "§§2.2–2.3, PDF pp. 7–10."
verification:
  precheck: n/a
---

## Definition

Fix positive integers $d$ and $R$. A **reaction propensity system** consists of a state set $E\subseteq\mathbb Z^d$ that is finite or countable, increments $\nu_j\in\mathbb Z^d$ for $1\le j\le R$, and propensities $a_j:E\to[0,\infty)$. Here “countable” means finite or countably infinite, as in [[def-countable]]. The total propensity
$$\lambda(x):=\sum_{j=1}^R a_j(x)$$
is finite for every $x\in E$, and $a_j(x)>0$ implies $x+\nu_j\in E$. Here $\mathbb N$ and $\mathbb Z$ have the meanings in [[def-natural-numbers]] and [[def-integers]], and addition in $\mathbb Z^d$ is coordinatewise.

A **reaction event** of channel $j$ at state $x$ records the marked transition $x\mapsto x+\nu_j$. The counting process $N_j(t)$ records the number of channel-$j$ events by time $t$. A zero increment $\nu_j=0$ is allowed: it records a reaction event without changing the state.

For a time-homogeneous system, the **reaction generator operator** on bounded functions $f:E\to\mathbb R$ is
$$(Qf)(x):=\sum_{j:a_j(x)>0} a_j(x)\bigl(f(x+\nu_j)-f(x)\bigr).$$
When $E$ is finite, set $\Lambda:=\max(\{0\}\cup\{\lambda(x):x\in E\})<\infty$; thus $\Lambda=0$ for $E=\varnothing$ and $\Lambda=\max_{x\in E}\lambda(x)$ otherwise. If no active reaction has zero increment, the corresponding matrix has off-diagonal entries $q_{xy}=\sum_{j:x+\nu_j=y}a_j(x)$ and diagonal $q_{xx}=-\lambda(x)$. With zero-increment events, the operator formula remains valid and the matrix diagonal is instead minus the sum of state-changing rates; the zero-increment channels remain part of the marked event process.

For a finite horizon $T$, a **time-dependent propensity system** replaces $a_j(x)$ by functions $a_j:[0,T]\times E\to[0,\infty)$ whose sections $t\mapsto a_j(t,x)$ are measurable for the Borel sigma-algebra $\mathcal B([0,T])$ of the usual topology on $[0,T]$ ([[def-borel-sigma-algebra]]). Require finite total rate $\lambda(t,x):=\sum_j a_j(t,x)$. Its time-dependent generator operator is
$$(Q_t f)(x):=\sum_{j:a_j(t,x)>0} a_j(t,x)\bigl(f(x+\nu_j)-f(x)\bigr).$$
This definition specifies a stochastic model. It does not assert that a physical chemical system follows that model.
