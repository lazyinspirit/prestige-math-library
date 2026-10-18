---
id: lem-local-rarefaction-fan
kind: lemma
title: "A local genuinely nonlinear curve generates a centered rarefaction fan"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-hyperbolic-system-and-characteristic-families
  - def-local-rarefaction-curve
  - lem-smooth-simple-characteristic-eigenpairs
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Alberto Bressan, Hyperbolic Conservation Laws: An Illustrated Tutorial"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§3.3, printed pp. 25–26: centered rarefaction profile and weak-solution verification"
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 8 §8.2, printed pp. 82–84: rarefaction waves along integral curves"
---

## Statement

Let $r_i$ be a $C^1$ genuinely nonlinear field on a neighborhood, with
$D\lambda_i(u)r_i(u)$ of constant nonzero sign. If $\sigma\ne0$ satisfies
$\sigma D\lambda_i(u_0)r_i(u_0)>0$ and is sufficiently small, then the
left/right data $u_0,R_i(\sigma;u_0)$ are connected by a centered rarefaction
fan. It is a self-similar weak solution with those Riemann data.

## Facts & Assumptions

**Given:** A local $C^1$ characteristic field, its eigenvalue, and its rarefaction curve.

[F1] [[def-hyperbolic-system-and-characteristic-families]]: $Df(u)r_i(u)=\lambda_i(u)r_i(u)$, and genuine nonlinearity means $D\lambda_i r_i$ has one nonzero sign locally.

[F2] [[def-local-rarefaction-curve]]: $R_i'=r_i(R_i)$ with $R_i(0;u_0)=u_0$.

## Proof

1.1 Along the curve, $\frac{d}{ds}\lambda_i(R_i(s;u_0))=D\lambda_i(R_i(s;u_0))r_i(R_i(s;u_0))$ keeps its nonzero sign. Therefore the map $s\mapsto\lambda_i(R_i(s;u_0))$ is strictly monotone, and for each speed between its endpoint values there is a unique curve parameter $s$. Since $\sigma D\lambda_i(u_0)r_i(u_0)>0$ and the sign remains constant, $\lambda_i(R_i(\sigma;u_0))>\lambda_i(u_0)$. [given, F1, F2, algebra]

2.1 Define $q(\xi)=u_0$ for $\xi\le\lambda_i(u_0)$, $q(\xi)=R_i(\sigma;u_0)$ for $\xi\ge\lambda_i(R_i(\sigma;u_0))$, and inside this interval let $q(\xi)=R_i(s;u_0)$ for the unique $s$ with $\xi=\lambda_i(R_i(s;u_0))$. In the fan, differentiating this identity shows $q'(\xi)$ is parallel to $r_i(q)$; hence $Df(q)q'=\lambda_i(q)q'=\xi q'$. For $u(t,x)=q(x/t)$ the chain rule gives $u_t+Df(u)u_x=t^{-1}(Df(q)-(x/t)I)q'=0$. [step 1.1, F1, F2, construct, algebra]

3.1 The profile is continuous at the two fan edges, so there is no jump measure there. The fan occupies a bounded $x$-interval of length proportional to $t$; outside it the solution equals the initial left or right state. Hence its local $L^1$ trace as $t\downarrow0$ is the Riemann step data, and the classical equation in step 2.1 is also the distributional equation. [step 2.1, algebra] ∎
