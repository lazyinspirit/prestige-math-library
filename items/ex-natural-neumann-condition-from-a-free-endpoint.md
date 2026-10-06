---
id: ex-natural-neumann-condition-from-a-free-endpoint
kind: example
title: "The natural Neumann condition from a free endpoint in one dimension"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [thm-natural-boundary-condition-for-free-boundary-variations, cor-classical-euler-lagrange-equation-under-regularity, thm-fermat-interior-extremum, cor-mean-value-theorem, lem-fundamental-lemma-of-the-calculus-of-variations, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-ck-and-multi-index-notation-in-several-variables, thm-integration-by-parts-with-interior-derivatives, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-heine-cantor-metric, thm-continuous-partial-derivatives-imply-total-differentiability, thm-chain-rule-for-total-derivatives, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 3 Section 3.5, Lemma 3.36 and the free-endpoint equation, printed pp. 37-38"
    - title: "Sung-Jin Oh, Lecture Notes for Math 222A, UC Berkeley, 19 March 2024 (complete 179-page author PDF)"
      url: "https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf"
      locator: "Section 1.4, printed pp. 7-8"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

**Example.** Assume Countable Choice ([[def-countable-choice]]) and let $a<b$. On $C^2([a,b])$ consider $I(u)=\int_a^b f(x,u(x),u'(x))\,dx$ with $f\in C^2$, no boundary conditions, and let $u$ be a free-endpoint local minimiser in the $C^2$ norm. Retaining the boundary term produced by integration by parts gives, in addition to the Euler-Lagrange equation $f_s-\frac{d}{dx}f_\xi=0$ ([[cor-classical-euler-lagrange-equation-under-regularity]]), the two **natural boundary conditions**
$$f_\xi(a,u(a),u'(a))=0,\qquad f_\xi(b,u(b),u'(b))=0,$$
which are precisely the one-dimensional case of [[thm-natural-boundary-condition-for-free-boundary-variations]]. For $f(x,s,\xi)=\tfrac12\xi^2-g(x)s$ they read $u''=-g$ on $(a,b)$ with $u'(a)=u'(b)=0$.

## Facts & Assumptions

**Given:** Countable Choice and $a<b$; a function $f\in C^2([a,b]\times\mathbb R\times\mathbb R)$, the functional $I(u)=\int_a^bf(x,u(x),u'(x))dx$ on $C^2([a,b])$ with no boundary conditions, and a free-endpoint local minimiser $u$: $I(u)\le I(v)$ for all $v\in C^2([a,b])$ with $\|v-u\|_{C^2}$ small.

[F1] The endpoint conditions are the one-dimensional analogue of [[thm-natural-boundary-condition-for-free-boundary-variations]], whose stated domain and Sobolev hypotheses do not cover this example. They will be proved directly below; the outward signs are $-1$ at $a$ and $+1$ at $b$.

[F2] The interior equation has the form in [[cor-classical-euler-lagrange-equation-under-regularity]], but is derived directly in step 2.1 because no global Sobolev growth bound is imposed here.

[F3] Continuous partials make the integrand totally differentiable ([[thm-continuous-partial-derivatives-imply-total-differentiability]]), and the chain rule ([[thm-chain-rule-for-total-derivatives]]) computes its derivative along $(u+t\phi,u'+t\phi')$ as $f_s\phi+f_\xi\phi'$. First variation: for every $\phi\in C^\infty([a,b])$ the function $\Phi(\varepsilon):=I(u+\varepsilon\phi)$ has an interior local minimum at $\varepsilon=0$ and, by the mean value theorem applied to the $C^2$ integrand, $\Phi'(0)=\int_a^b(f_s(x,u,u')\phi+f_\xi(x,u,u')\phi')dx=0$ ([[thm-fermat-interior-extremum]], [[cor-mean-value-theorem]]).

[F4] Integration by parts and the fundamental lemma: for $u\in C^2$, $g\in C^1$ one has $\int_a^b(g\phi'+g'\phi)dx=[g\phi]_a^b$ for every $\phi\in C^\infty([a,b])$ by [[thm-integration-by-parts-with-interior-derivatives]]; the continuous integrands have equal Riemann and Lebesgue integrals by [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]. A continuous function orthogonal to all compactly supported test functions vanishes ([[lem-fundamental-lemma-of-the-calculus-of-variations]]).

[F5] Composites of $C^k$ Euclidean maps are $C^k$, so $x\mapsto f_\xi(x,u(x),u'(x))$ is $C^1$ when $f\in C^2$ and $u\in C^2$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-ck-and-multi-index-notation-in-several-variables]]).

## Verification

**Proof technique:** direct, testing the first variation with compactly supported and with endpoint-supported variations.

1.1 The first-variation identity. Let $\phi\in C^\infty([a,b])$. Since no boundary conditions are imposed, $u+\varepsilon\phi$ lies in the admissible class for every $\varepsilon$ and for $|\varepsilon|$ small it is close to $u$ in the $C^2$ norm, so $\Phi(\varepsilon)=I(u+\varepsilon\phi)$ has an interior local minimum at $0$; the mean value theorem expresses the integrand difference quotient as $f_s(x,u+\theta\varepsilon\phi,u'+\theta\varepsilon\phi')\phi+f_\xi(x,u+\theta\varepsilon\phi,u'+\theta\varepsilon\phi')\phi'$ for some $0<\theta<1$. Heine--Cantor ([[thm-heine-cantor-metric]]) makes the partials uniformly continuous on a compact set containing these arguments, this quotient therefore converges uniformly to its value at $\varepsilon=0$, and its integral is $\Phi'(0)$. Fermat's theorem in [F3] then gives $\int_a^b(f_s(x,u,u')\phi+f_\xi(x,u,u')\phi')dx=0$. [F3, given]

2.1 The interior equation. Taking $\phi\in C_c^\infty((a,b))$ in step 1.1 and integrating by parts, using that $x\mapsto f_\xi(x,u(x),u'(x))$ is $C^1$ by [F5] and has derivative $\frac{d}{dx}f_\xi(x,u,u')$, gives $\int_a^b\big(f_s(x,u,u')-\frac{d}{dx}f_\xi(x,u,u')\big)\phi\,dx=0$ for every compactly supported $\phi$; the integrand is continuous, so [F4] gives $f_s-\frac{d}{dx}f_\xi=0$ on $(a,b)$, the classical Euler-Lagrange equation. [F2, F4, F5, step 1.1]

3.1 The boundary identity. Let now $\phi\in C^\infty([a,b])$ be arbitrary. Writing $g:=f_\xi(x,u,u')$ and using the interior equation of step 2.1, step 1.1 becomes $0=\int_a^b\big(\frac{d}{dx}g\,\phi+g\,\phi'\big)dx=[g\phi]_a^b=g(b)\phi(b)-g(a)\phi(a)$ by [F4], that is $f_\xi(b,u(b),u'(b))\phi(b)-f_\xi(a,u(a),u'(a))\phi(a)=0$ for every $\phi\in C^\infty([a,b])$. [F4, step 1.1, step 2.1]

4.1 Both natural conditions, and the instance. Choosing in step 3.1 $\phi(x)=(b-x)/(b-a)$ gives $f_\xi(a,u(a),u'(a))=0$, and $\phi(x)=(x-a)/(b-a)$ gives $f_\xi(b,u(b),u'(b))=0$; these are the one-dimensional natural boundary conditions, the general form of [F1]. For $f(x,s,\xi)=\tfrac12\xi^2-g(x)s$ one has $f_\xi=\xi$ and $f_s=-g(x)$, so the interior equation of step 2.1 reads $u''=-g$ on $(a,b)$ and the natural conditions read $u'(a)=u'(b)=0$. [F1, step 2.1, step 3.1] ∎ 