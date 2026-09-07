---
id: lem-smooth-sphere-data-have-a-harmonic-replacement
kind: lemma
title: "Smooth sphere data have a harmonic replacement"
status: draft
origin: pipeline
deps: [def-laplacian-of-a-c2-function, lem-sphere-and-ball-measures-scale, thm-spherical-mean-value-property-for-harmonic-functions, cor-uniqueness-for-the-classical-dirichlet-problem, thm-dominated-convergence]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Gantumur, Harmonic functions"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§8 equations (77)–(88), Theorem 15, pp.13–14"
---

## Statement

Let $n\ge2$, $a\in\mathbb R^n$, $R>0$, and $g\in C^\infty(\partial B_R(a))$ be real. Write $\omega_{n-1}=|S^{n-1}|$. There is a unique $h\in C^\infty(B_R(a))\cap C(\overline B_R(a))$ harmonic inside and equal to $g$ on the sphere. It is
$$h(x)=\int_{\partial B_R(a)}\frac{R^2-|x-a|^2}{R\omega_{n-1}|x-y|^n}\,g(y)\,dS(y),\qquad |x-a|<R.$$
The kernel is positive and has integral one at each interior point.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] A $C^2$ real function is harmonic when the sum of its pure second derivatives, its Laplacian, vanishes. ([[def-laplacian-of-a-c2-function]]).

[F2] $|\partial B_R|=\omega_{n-1}R^{n-1}$ and $\omega_{n-1}$ is finite and positive. ([[lem-sphere-and-ball-measures-scale]]).

[F3] A classical harmonic function equals its sphere average on every compactly contained ball. ([[thm-spherical-mean-value-property-for-harmonic-functions]]).

[F4] Classical harmonic functions continuous on a bounded open set’s closure and sharing boundary data agree. ([[cor-uniqueness-for-the-classical-dirichlet-problem]]).

[F5] For measurable functions converging almost everywhere under a single integrable absolute majorant, dominated convergence permits passing their limit through the integral. ([[thm-dominated-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Translate $a$ to zero. Put $q=|x-y|$, $A=R^2-|x|^2$, and $P(x,y)=Aq^{-n}/(R\omega_{n-1})$, where $|y|=R$. The sphere has finite positive measure $\omega_{n-1}R^{n-1}$. On compact interior sets $q$ is bounded away from zero; all $x$-derivatives of the kernel times bounded $g$ have a constant integrable majorant. The mean value theorem bounds their difference quotients likewise. Dominated convergence therefore permits differentiation of every order under the sphere integral and proves continuity of those derivatives. [F2, F5, given]

2.1 Cartesian differentiation gives $\nabla q^{-n}=-n(x-y)q^{-n-2}$, $\Delta q^{-n}=2nq^{-n-2}$ and $\Delta A=-2n$. The product rule gives $\Delta(Aq^{-n})=2nq^{-n-2}(A-q^2+2x\cdot(x-y))=2nq^{-n-2}(R^2-|y|^2)=0$. Thus both $h$ and $I(x)=\int P(x,y)\,dS(y)$ are smooth harmonic functions. [F1, step 1.1, algebra]

3.1 Rotation invariance of surface measure and the kernel makes $I$ constant on each sphere centered at zero. Its spherical mean equals $I(0)$ by harmonic mean values; since it is already constant on that sphere, $I(x)=I(0)$. At zero, $P(0,y)=1/(\omega_{n-1}R^{n-1})$, so $I(0)=1$. Also $P>0$ in the ball. [F2, F3, step 2.1, algebra]

4.1 Fix $p\in\partial B_R$. The mass identity gives $h(x)-g(p)=\int P(x,y)(g(y)-g(p))\,dS(y)$. For a given $\varepsilon>0$, take $\delta>0$ so that $|g(y)-g(p)|<\varepsilon$ when $|y-p|<\delta$. That part of the integral has absolute value at most $\varepsilon$. On the remaining sphere, if $|x-p|<\delta/2$, then $|x-y|\ge\delta/2$, and $P(x,y)\le(R^2-|x|^2)/(R\omega_{n-1}(\delta/2)^n)$ uniformly tends to zero. The remaining integral is bounded by this supremum times $2\|g\|_\infty|\partial B_R|$. Thus $h(x)\to g(p)$, proving continuity on the closed ball. [step 3.1, algebra]

5.1 Any two such harmonic replacements have identical boundary data on a bounded ball and are continuous on its closure, so classical Dirichlet uniqueness makes them equal. Translation restores the stated formula at $a$. [F4, step 4.1] ∎
