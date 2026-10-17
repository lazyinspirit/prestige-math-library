---
id: def-csm-dk-reflection-collision-gain
kind: definition
title: "Cutoff elastic-reflection collision measure and gain"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-countable-choice
  - thm-completion-measurable-functions-have-base-measurable-representatives
  - cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-tonelli-and-fubini-for-completed-product-measures
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
justified_by:
  - lem-csm-dk-reflection-measure-and-gain-identities
dependency_roles:
  def-countable-choice: mathematical-premise
  thm-completion-measurable-functions-have-base-measurable-representatives: mathematical-premise
  cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  thm-tonelli-and-fubini-for-completed-product-measures: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "R. Fitzpatrick, Plasma Physics, Boltzmann H-Theorem"
      url: "https://farside.ph.utexas.edu/teaching/plasma/lectures1/node40.html"
---

## Definition

Assume the Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Under this assumption Lebesgue measure is the completion of Borel measure ([[cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure]]), and every Lebesgue-measurable integrable class has a Borel representative ([[thm-completion-measurable-functions-have-base-measurable-representatives]]). Write $\lambda_3$ for Lebesgue measure on $\mathbb R^3$ ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]). Fix a positive reference speed $v_0>0$, and put $w_0(v)=1+|v|^2/v_0^2$. Let $X$ be the real vector space of equivalence classes modulo $\lambda_3$-almost-everywhere equality of measurable functions $f:\mathbb R^3\to\mathbb R$ with

$$\|f\|_{1,w_0}:=\int_{\mathbb R^3}w_0(v)|f(v)|\,d\lambda_3(v)<\infty.$$

Let $S^2=\{n\in\mathbb R^3:|n|=1\}$. For a Borel set $E\subseteq S^2$, define the normalized finite angular measure

$$\sigma(E):=\frac1{4\pi}\int_0^\pi\int_0^{2\pi}\mathbf 1_E(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)\sin\theta\,d\phi\,d\theta.$$

For $v,w\in\mathbb R^3$ and $n\in S^2$, define the postcollision velocities

$$v'=v-((v-w)\cdot n)n,\qquad w'=w+((v-w)\cdot n)n.$$

The collision-parameter measure is $d\mu=d\lambda_3(v)\,d\lambda_3(w)\,d\sigma(n)$ on $\mathbb R^3\times\mathbb R^3\times S^2$. Its angular factor is finite and normalized; there is no singular angular weight. For $f,g\in X$, choose Borel representatives and define the gain $\mathcal G(f,g)$ by the almost-everywhere integral

$$\mathcal G(f,g)(v):=\int_{\mathbb R^3\times S^2} f(v')g(w')\,d\lambda_3(w)\,d\sigma(n).$$

The value on any exceptional null set is immaterial because the output is an equivalence class. The next item proves that this definition is independent of the representatives, maps $X\times X$ to $X$, and has the stated collision and moment identities.
