---
id: def-polynomial-decoupling-weight-and-norm
kind: definition
title: Polynomial Decoupling Weight and Weighted Norm
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
- def-moment-curve-extension-operator
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§1, pp. 634–637: weighted L^p norms, ball weights w_{B,E}, and the requirement
      E≥100n in the decoupling argument.'
  - title: Larry Guth, 18.118 Decoupling, Lectures 18–20
    url: https://math.mit.edu/~lguth/Math118/DecLect18.pdf
    locator: Lecture 18, pp. 1–2, moment-curve extension and its anisotropic frequency
      neighborhoods.
---

## Definition

Let $n\ge1$, let $B=B(c_B,R)\subset\mathbb R^n$ be a ball with center $c_B$ and radius $R>0$, and let $E>n$. Write $|B|$ for the Lebesgue measure of $B$. Define the positive ball weight
$$w_{B,E}(x)=\left(1+\frac{|x-c_B|}{R}\right)^{-E}.$$
For a measurable $F:\mathbb R^n\to\mathbb C$ and $1\le p<\infty$, define
$$\|F\|_{L^p(w_{B,E})}=\left(\int_{\mathbb R^n}|F(x)|^p w_{B,E}(x)\,dx\right)^{1/p},\qquad \|F\|_{L^p_\sharp(w_{B,E})}=|B|^{-1/p}\|F\|_{L^p(w_{B,E})}.$$
In the moment-curve decoupling results below the exponent is restricted to $E\ge100n$.
