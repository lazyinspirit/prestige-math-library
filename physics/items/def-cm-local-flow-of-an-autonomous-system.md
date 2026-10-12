---
id: def-cm-local-flow-of-an-autonomous-system
kind: definition
title: "The local flow of an autonomous first-order system"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-first-order-ode-initial-value-problem-and-solution, def-maximal-ode-solution, thm-existence-and-uniqueness-of-a-maximal-ode-solution, def-locally-lipschitz-in-the-state-variable]
dependency_roles:
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 2.1 (autonomous systems) and Section 6.1 (the flow of a dynamical system), printed pages 17-19 and 190-192"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "J. Arino, MATH 8430 Fundamental Theory of Ordinary Differential Equations (University of Manitoba), Section 1.3 (maximal solutions) and Section 1.4 (continuous dependence), printed pages 22-30"
      url: "https://julien-arino.github.io/assets/pdf/courses/math8430_lecture_notes.pdf"
verification:
  precheck: pass
---

## Definition

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $F:U\to\mathbb R^n$ be continuous and locally Lipschitz in the state variable in the sense of [[def-locally-lipschitz-in-the-state-variable]]. Read the autonomous system

$$x'(t)=F(x(t))$$

as the first-order system of [[def-first-order-ode-initial-value-problem-and-solution]] with domain $D=\mathbb R\times U\subseteq\mathbb R\times\mathbb R^n$ and right-hand side $(t,x)\mapsto F(x)$. Its initial value problems satisfy the Picard-Lindelöf hypotheses, so by [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]] every $a\in U$ has a unique maximal solution.

For $a\in U$ denote by

$$x(\,\cdot\,;a):I_a\longrightarrow U$$

the unique maximal solution with $x(0;a)=a$, where $I_a\subseteq\mathbb R$ is its maximal interval of existence ([[def-maximal-ode-solution]]); $I_a$ is an open interval containing $0$, and every solution of $x'=F(x)$ through $(0,a)$ is a restriction of $x(\,\cdot\,;a)$.

The **flow domain** of $F$ is the set

$$\Omega:=\{\,(t,a)\in\mathbb R\times U\;:\;t\in I_a\,\},$$

and the **local flow** (also **phase flow**) of $F$ is the map

$$\Phi:\Omega\longrightarrow U,\qquad \Phi(t,a):=x(t;a).$$

For $t\in\mathbb R$ the **time-$t$ map** is the partial map

$$\Phi_t:\Omega_t\longrightarrow U,\qquad \Omega_t:=\{\,a\in U:(t,a)\in\Omega\,\},\qquad \Phi_t(a):=\Phi(t,a).$$

Thus $\Phi_0(a)=a$ whenever it is defined, and $(t,a)\in\Omega$ exactly when the maximal solution of $x'=F(x)$ through $a$ is defined at time $t$.

## Remarks

- The word *local* refers to the domain: $\Omega$ need not equal $\mathbb R\times U$. Whether $\Omega=\mathbb R\times U$ (completeness of the field) is a separate property of $F$ and is not asserted by this definition. Every statement about $\Phi$ has to carry its domain condition $(t,a)\in\Omega$ explicitly.

- The local flow is the solution family of an autonomous field. It is a different object from the stroboscopic map of a time-periodic system ([[def-cm-stroboscopic-map]]), although for an autonomous field the stroboscopic map of period $P>0$ is the restriction of $\Phi_P$ to the set of initial states whose maximal solutions exist for a full period.

- The identities $\Phi_0(a)=a$ and $\Phi_{t+s}(a)=\Phi_t(\Phi_s(a))$ are not part of the definition; they are proved from maximality and uniqueness in [[lem-cm-local-flow-composition-law]]. The definition records only the assignment of solutions, so that no uniqueness statement is smuggled into a definition.
