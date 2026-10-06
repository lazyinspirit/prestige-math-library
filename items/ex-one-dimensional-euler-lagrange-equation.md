---
id: ex-one-dimensional-euler-lagrange-equation
kind: example
title: "The one-dimensional Euler-Lagrange equation for an energy with a potential"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [cor-classical-euler-lagrange-equation-under-regularity, thm-weak-euler-lagrange-equation-for-integral-functionals, thm-fermat-interior-extremum, lem-fundamental-lemma-of-the-calculus-of-variations, cor-mean-value-theorem, def-countable-choice, thm-integration-by-parts-with-interior-derivatives, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-heine-cantor-metric]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A, UC Berkeley, 19 March 2024 (complete 179-page author PDF)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "Section 1.4, printed pp. 7-8"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 1 Section 2.4, Example 1.10 and Remark 1.11, printed pp. 9-10"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

**Example.** Assume Countable Choice ([[def-countable-choice]]). Let $V\in C^1(\mathbb R)$, let $a<b$ be real numbers and let
$$I(u)=\int_a^b\Big(\frac12 u'(x)^2+V(u(x))\Big)dx .$$
On the admissible class $C^2([a,b])$ with fixed endpoint values $u(a)=u_0$, $u(b)=u_1$, a local minimiser in the $C^2$ norm satisfies the boundary value problem
$$u''=V'(u)\ \text{ in }(a,b),\qquad u(a)=u_0,\quad u(b)=u_1,$$
the classical Euler-Lagrange equation of the Lagrangian $f(x,s,\xi)=\tfrac12\xi^2+V(s)$ ([[cor-classical-euler-lagrange-equation-under-regularity]]). In the special case $V=0$ this is the one-dimensional Laplace equation $u''=0$ with the affine solution $u(x)=u_0+\frac{u_1-u_0}{b-a}(x-a)$; for $V(s)=\tfrac12\omega^2s^2$ it is the equation of an inverted harmonic oscillator $u''=\omega^2u$.

## Facts & Assumptions

**Given:** Countable Choice; a function $V\in C^1(\mathbb R)$, a compact interval $[a,b]\subset\mathbb R$ with $a<b$, the functional $I(u)=\int_a^b\big(\tfrac12u'(x)^2+V(u(x))\big)dx$ on the admissible class of $u\in C^2([a,b])$ with fixed endpoint values $u(a)=u_0$, $u(b)=u_1$, and the Lagrangian $f(x,s,\xi)=\tfrac12\xi^2+V(s)$.

[F1] The conclusion has the shape of the classical Euler-Lagrange equation of [[cor-classical-euler-lagrange-equation-under-regularity]] for the Lagrangian $f(x,s,\xi)=\tfrac12\xi^2+V(s)$, whose partials are $f_\xi=\xi$ and $f_s=V'(s)$. That corollary also assumes $f\in C^2$ and the growth hypotheses of the weak Euler-Lagrange theorem ([[thm-weak-euler-lagrange-equation-for-integral-functionals]]), which need not hold for a general $V\in C^1$; the verification below therefore computes the equation directly from the minimality of $u$.

[F2] One-variable mean value theorem and Fermat's interior-extremum theorem: a differentiable function on an interval with an interior local extremum has vanishing derivative there, and the mean value theorem identifies $(V(u+\varepsilon\varphi)-V(u))/\varepsilon$ with $V'(u+\theta\varepsilon\varphi)\varphi$ for some $\theta\in(0,1)$ ([[cor-mean-value-theorem]], [[thm-fermat-interior-extremum]]).

[F3] Integration by parts on a compactly supported test function: $\int_a^bu'\varphi'\,dx=-\int_a^bu''\varphi\,dx$ for $\varphi\in C_c^\infty((a,b))$ and $u\in C^2([a,b])$. This is [[thm-integration-by-parts-with-interior-derivatives]] with $F=u'$ and $G=\varphi$; its continuous integrands have equal Riemann and Lebesgue integrals by [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]].

[F4] Fundamental lemma: a continuous function on an open set orthogonal to every compactly supported smooth test function vanishes identically ([[lem-fundamental-lemma-of-the-calculus-of-variations]]).

[F5] A $C^2$ function on $[a,b]$ with $u''=0$ on $(a,b)$ is affine, since $u'$ has vanishing derivative and is therefore constant ([[cor-mean-value-theorem]]).

## Verification

**Proof technique:** direct, by testing the minimality of $u$ against compactly supported variations.

1.1 The first variation. Let $\varphi\in C_c^\infty((a,b))$. Since $\varphi$ vanishes near the endpoints, $u+\varepsilon\varphi$ belongs to the admissible class for every $\varepsilon$, and for $|\varepsilon|$ small it is close to $u$ in $C^2([a,b])$, so $\Phi(\varepsilon):=I(u+\varepsilon\varphi)$ has a local minimum at $\varepsilon=0$. Computing the difference quotient, $\varepsilon^{-1}(\Phi(\varepsilon)-\Phi(0))=\int_a^b\big(u'\varphi'+\tfrac{\varepsilon}{2}\varphi'^2+\varepsilon^{-1}(V(u+\varepsilon\varphi)-V(u))\big)dx$, and by the mean value theorem [F2] the last term equals $\varphi(x)V'(u(x)+\theta_x\varepsilon\varphi(x))$ with $\theta_x\in(0,1)$; as $\varepsilon\to0$ this converges to $\varphi V'(u)$ uniformly on $[a,b]$, because $V'$ is uniformly continuous by [[thm-heine-cantor-metric]] on a compact interval containing the values $u(x)+\theta_x\varepsilon\varphi(x)$ and $|u+\theta\varepsilon\varphi-u|\le|\varepsilon|\|\varphi\|_\infty$. Hence $\Phi$ is differentiable at $0$ with $\Phi'(0)=\int_a^b(u'\varphi'+V'(u)\varphi)\,dx$. This is the direct computation announced in [F1]. [F1, F2, given, algebra]

2.1 Fermat's theorem. The point $0$ is an interior local minimum of the differentiable function $\Phi$, so [F2] gives $\Phi'(0)=0$, that is $\int_a^b(u'\varphi'+V'(u)\varphi)\,dx=0$ for every $\varphi\in C_c^\infty((a,b))$. [F2, step 1.1]

3.1 The differential equation. For $\varphi\in C_c^\infty((a,b))$ integration by parts [F3] gives $\int_a^bu'\varphi'\,dx=-\int_a^bu''\varphi\,dx$, so the identity of step 2.1 reads $\int_a^b(-u''+V'(u))\varphi\,dx=0$ for every such $\varphi$. The function $-u''+V'(u)$ is continuous on $(a,b)$, being a sum of continuous functions, so the fundamental lemma [F4] gives $-u''+V'(u)=0$ on $(a,b)$, that is $u''=V'(u)$. [F3, F4, step 2.1]

4.1 Endpoint conditions and the two instances. The admissible class fixes $u(a)=u_0$ and $u(b)=u_1$, so $u$ solves the boundary value problem of the statement. For $V=0$ the equation is $u''=0$, and [F5] makes $u$ affine, with values determined by the endpoints: $u(x)=u_0+\frac{u_1-u_0}{b-a}(x-a)$. For $V(s)=\tfrac12\omega^2s^2$ one has $V'(s)=\omega^2s$, so the equation reads $u''=\omega^2u$, the equation of an inverted harmonic oscillator. [F5, step 3.1, given, algebra] ∎ 