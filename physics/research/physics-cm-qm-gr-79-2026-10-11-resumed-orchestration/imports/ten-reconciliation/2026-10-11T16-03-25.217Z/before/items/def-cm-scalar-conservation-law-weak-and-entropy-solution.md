---
id: def-cm-scalar-conservation-law-weak-and-entropy-solution
kind: definition
title: "Weak and entropy solutions of the scalar conservation law $u_t+(u^2/2)_x=0$"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-ck-euclidean-maps-and-diffeomorphisms, def-continuity-real, def-extended-real-valued-measurable-function, prop-closure-properties-of-measurable-functions-used-by-the-integral, def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, thm-linearity-of-the-lebesgue-integral-on-l-one, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-derivative, def-interval]
dependency_roles:
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-continuity-real: mathematical-premise
  def-extended-real-valued-measurable-function: mathematical-premise
  prop-closure-properties-of-measurable-functions-used-by-the-integral: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "L. C. Evans, Entropy and Partial Differential Equations (lecture notes), Chapter V (conservation laws: weak solutions, entropy/entropy-flux pairs and the Lax entropy condition)"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
    - title: "W. Barsukow, Introduction to Conservation Laws: Theory and Numerics (lecture notes, TUM, Winter term 2021/22), Chapters 3–4 (weak solutions; non-uniqueness and entropy conditions, including the Kružkov condition)"
      url: "https://user.math.uzh.ch/barsukow/exercises2122/conservationlaws.pdf"

  precheck: pass
---

## Definition

Write $F(u):=\tfrac12u^2$ and let $\lambda_2$ be two-dimensional Lebesgue measure on $\mathbb R^2$ ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]).

A **test function** is a function $\varphi:\mathbb R^2\to\mathbb R$ of class $C^1$ ([[def-ck-euclidean-maps-and-diffeomorphisms]]) for which there is a compact set $K\subseteq\mathbb R^2$ with $\varphi=0$ outside $K$ and $\varphi(t,x)=0$ for all $t<0$; write $\varphi(0,x)$ for the boundary values at $t=0$, which exist by continuity. A test function is **nonnegative** when $\varphi\ge0$ pointwise, and a test function is **admissible** for the integral identity below when it is $C^1$ with compact support in $[0,\infty)\times\mathbb R$.

**(a) Weak solutions.** Let $f:\mathbb R\to\mathbb R$ be bounded and Borel measurable ([[def-extended-real-valued-measurable-function]]) and let $u:(0,\infty)\times\mathbb R\to\mathbb R$ be bounded and Borel measurable. Then $u$ is a **weak solution of**

$$u_t+\bigl(F(u)\bigr)_x=0 \qquad\text{with }u(0,\cdot)=f \tag{CL}$$

when

$$\int_0^\infty\!\!\int_{\mathbb R}\Bigl[u(t,x)\varphi_t(t,x)+F\bigl(u(t,x)\bigr)\varphi_x(t,x)\Bigr]dx\,dt+\int_{\mathbb R}f(x)\varphi(0,x)\,dx=0 \tag{W}$$

for every test function $\varphi$ ([[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]]). The integrals exist because $u,f$ are bounded and the test functions have compact support; the identity depends on $u$ and $f$ only through their almost-everywhere classes.

**(b) Entropy pairs.** An **entropy pair** is a pair $(\eta,q)$ of $C^1$ functions $\eta,q:\mathbb R\to\mathbb R$ ([[def-derivative]]) such that

$$q'(u)=\eta'(u)\,F'(u)=u\,\eta'(u)\qquad\text{for every }u\in\mathbb R;$$

the function $\eta$ is then called an **entropy** and $q$ its **entropy flux**. The entropy is **convex** when $\eta$ is convex.

**(c) Entropy solutions.** A weak solution $u$ of (CL) is an **entropy solution** when, for every convex entropy pair $(\eta,q)$ with $q'=u\eta'$, the distributional inequality

$$\bigl(\eta(u)\bigr)_t+\bigl(q(u)\bigr)_x\le0$$

holds, by definition meaning that

$$\int_0^\infty\!\!\int_{\mathbb R}\Bigl[\eta\bigl(u\bigr)\varphi_t+q\bigl(u\bigr)\varphi_x\Bigr]dx\,dt+\int_{\mathbb R}\eta\bigl(f(x)\bigr)\varphi(0,x)\,dx\ \ge\ 0 \tag{E}$$

for every nonnegative test function $\varphi$.

**(d) Riemann data.** For reals $u_L,u_R$ the **Riemann initial data** are

$$f(x):=\begin{cases}u_L,&x<0,\\ u_R,&x>0.\end{cases}$$

## Remarks

- The sign convention is fixed by (E): with $\varphi\ge0$ the identity says that the distribution $\eta(u)_t+q(u)_x$ is a nonpositive measure. Under the opposite convention the inequality and the displayed integral would both flip sign; the two conventions are not mixed anywhere in this collection.

- The distinguished family of entropies used in the examples is $\eta_k(u):=|u-k|$, which is convex and only Lipschitz at $u=k$, together with $q_k(u)=\operatorname{sign}(u-k)(u^2-k^2)/2$; the identity $q_k'=u\eta_k'$ holds off $u=k$, and the pair is applied to piecewise $C^1$ solutions for which the distributional computation is carried out piecewise. The definition of a general entropy solution in (c) is stated for $C^1$ entropies; the piecewise application to $\eta_k$ is part of the corresponding theorem and is checked there.

- The definition asserts neither existence nor uniqueness of weak or entropy solutions, and no selection principle. Integrals are Lebesgue integrals over the stated domains and the test-function class is exactly as declared; evaluating a weak solution at $t=0$ pointwise is not part of the definition, only the initial term in (W).
