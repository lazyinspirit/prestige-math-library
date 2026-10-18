---
id: lem-linearly-degenerate-characteristic-contact
kind: lemma
title: "A linearly-degenerate characteristic curve is a contact wave"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-hyperbolic-system-and-characteristic-families
  - def-rankine-hugoniot-and-lax-shocks
  - def-local-rarefaction-curve
  - lem-rankine-hugoniot-jump-is-a-weak-solution
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Alberto Bressan, Hyperbolic Conservation Laws: An Illustrated Tutorial"
      url: "https://yulia-petrova.github.io/teaching/shocks/Bressan-tutorial.pdf"
      locator: "§3.3, printed pp. 26–27: linearly-degenerate fields and contact discontinuities"
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 9 §9.1, printed pp. 89–91: Euler contact discontinuities"
---

## Statement

Let $r_i$ be linearly degenerate on a neighborhood and let $R_i(\sigma;u_0)$
be its local rarefaction curve. Then the states $u_0$ and
$u_1=R_i(\sigma;u_0)$ are joined by a Rankine–Hugoniot jump of speed
$\lambda_i(u_0)$, and the corresponding moving discontinuity is a weak
solution. The characteristic speed is equal on the two sides; this is a
contact wave, not a strict Lax shock.

## Facts & Assumptions

**Given:** A $C^2$ linearly-degenerate eigenpair and its local integral curve.

[F1] [[def-hyperbolic-system-and-characteristic-families]]: $Df(u)r_i(u)=\lambda_i(u)r_i(u)$ and $D\lambda_i(u)r_i(u)=0$ for a linearly-degenerate family.

[F2] [[def-local-rarefaction-curve]]: $R_i'=r_i(R_i)$.

[F3] [[def-rankine-hugoniot-and-lax-shocks]]: the jump condition is $[f]=s[u]$.

[F4] [[lem-rankine-hugoniot-jump-is-a-weak-solution]]: a moving jump is weak exactly when that equality holds.

## Proof

1.1 Along the curve, the chain rule gives $\frac{d}{d\sigma}\lambda_i(R_i(\sigma;u_0))=D\lambda_i(R_i)r_i(R_i)=0$, so $\lambda_i(R_i)=\lambda_i(u_0)$. Also $\frac{d}{d\sigma}f(R_i)=Df(R_i)r_i(R_i)=\lambda_i(u_0)r_i(R_i)$. [given, F1, F2, algebra]

2.1 Integrating the second identity from $0$ to $\sigma$ yields $f(u_1)-f(u_0)=\lambda_i(u_0)(u_1-u_0)$, the Rankine–Hugoniot equality [F3]. Applying [F4] gives the weak moving contact wave; equality of the characteristic speed on both sides was proved in step 1.1. [step 1.1, F3, F4, algebra] ∎
