---
id: def-csm-statistical-state-observable
kind: definition
title: "Statistical states, densities, observables and expectations"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps:
  - cor-cauchy-schwarz-inequality-for-l-two
  - def-csm-phase-space-reference
  - def-countable-choice
  - def-measure
  - def-measure-with-density
  - thm-integration-against-a-density
  - def-extended-real-valued-measurable-function
  - def-integrable-real-and-complex-functions-and-their-integrals
dependency_roles:
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-csm-phase-space-reference: mathematical-premise
  def-countable-choice: mathematical-premise
  def-measure: mathematical-premise
  def-measure-with-density: mathematical-premise
  thm-integration-against-a-density: mathematical-premise
  def-extended-real-valued-measurable-function: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 1, §§1.2–1.3"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete 635-page course text, §§4.2 and 4.4"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Definition

Let $(\Gamma_N,\mathcal F_N,m_N)$ be a sigma-finite phase-reference measure
space from [[def-csm-phase-space-reference]]; the cotangent construction uses
the stated Axiom of Countable Choice
([[def-countable-choice]]). A **statistical state** is a probability measure
$P$ on $(\Gamma_N,\mathcal F_N)$, meaning a countably additive measure with
$P(\Gamma_N)=1$ ([[def-measure]]). A **density** of $P$ relative to $m_N$ is a
measurable $\rho:\Gamma_N\to[0,\infty]$ such that
$$P(A)=\int_A\rho\,dm_N\quad(A\in\mathcal F_N),\qquad \int_{\Gamma_N}\rho\,dm_N=1.$$
Equivalently, $P=\rho\,m_N$ in the definition of a measure with density
([[def-measure-with-density]]); integration against that density has the
meaning supplied by [[thm-integration-against-a-density]]. A state need not
have a density.

An **observable** is a real-valued measurable function
$A:\Gamma_N\to\mathbb R$ ([[def-extended-real-valued-measurable-function]]).
Its expectation $\langle A\rangle_P:=\int A\,dP$ is used only when $A$ is
integrable, that is, $\int|A|\,dP<\infty$
([[def-integrable-real-and-complex-functions-and-their-integrals]]). Its
variance is
$$\operatorname{Var}_P(A):=\int(A-\langle A\rangle_P)^2\,dP$$
when $A^2$ is integrable. For square-integrable $A,B$, their covariance is
$$\operatorname{Cov}_P(A,B):=\int(A-\langle A\rangle_P)(B-\langle B\rangle_P)\,dP.$$
These expressions are finite under the stated square-integrability
hypotheses. Indeed, $P(\Gamma_N)=1$ makes $1\in L^2(P)$ with norm $1$.
By [[cor-cauchy-schwarz-inequality-for-l-two]],
$\int|A|\,dP\le(\int A^2\,dP)^{1/2}$, so the mean of a square-integrable
observable exists. If $a=\langle A\rangle_P$, then
$|A-a|^2\le2A^2+2a^2$ makes $A-a$ square-integrable; the same argument
applies to $B-b$. A second application of that inequality gives
$\int|(A-a)(B-b)|\,dP\le\|A-a\|_2\|B-b\|_2<\infty$.
Thus both the variance and covariance integrals above are well-defined.

If $P=\rho m_N$ and the integrals are defined, these expectations equal
$\int A\rho\,dm_N$ by [[thm-integration-against-a-density]].

A **macrostate map** is a measurable map
$M:(\Gamma_N,\mathcal F_N)\to(Y,\mathcal G)$. Its induced state on $Y$ is
the pushforward $M_*P(B):=P(M^{-1}(B))$ for $B\in\mathcal G$.
A **macrocell** associated with a specified measurable cell $B\in\mathcal G$
is the measurable phase event $C_B:=M^{-1}(B)$; its reference size is
$m_N(C_B)\in[0,\infty]$. A singleton fibre $M^{-1}(\{y\})$ is used as a
macrocell only when $\{y\}\in\mathcal G$. For a specified family
$\mathcal C\subseteq\mathcal G$ of cells, an **entropy assignment** means
additional data $S:\mathcal C\to[-\infty,\infty]$; no particular functional
of $m_N(C_B)$ is stipulated here. Neither a cell's reference size nor a
separately chosen entropy assignment is defined to be the expectation or
variance of a microscopic observable.
