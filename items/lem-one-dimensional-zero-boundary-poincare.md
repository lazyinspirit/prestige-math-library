---
id: lem-one-dimensional-zero-boundary-poincare
kind: lemma
title: Zero-boundary Poincaré inequality on the unit interval
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-wkp-zero-as-a-sobolev-closure, def-sobolev-space-wkp-and-its-norm, def-countable-choice, thm-ftc-second-part, thm-holder-inequality-for-integrals, thm-lebesgue-measure-of-a-box-of-every-kind, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-continuous-implies-integrable, thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations, Chapter 3, Sobolev spaces
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: "§3.10, Theorems 3.17–3.18 and their proofs, printed pp. 64–66; one-dimensional derivative control for W0^{1,p} on bounded intervals."
    - title: John K. Hunter, Notes on Partial Differential Equations, Chapter 4, Elliptic PDEs
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§4.4, Theorem 4.9 and complete proof, printed pp. 98–99; Poincaré inequality for H0^1 on domains bounded in one direction."
---

## Statement

Assume Countable Choice. For every real $v\in H^1_0(0,1)$,

$$\|v\|_{L^2(0,1)}\le\|v'\|_{L^2(0,1)}.$$

Consequently $\|v\|_{H^1(0,1)}\le\sqrt2\,\|v'\|_{L^2(0,1)}$.

## Facts & Assumptions

**Given:** Countable Choice and $v$ in the closure of $C_c^\infty(0,1)$ in the $H^1$ norm.

[F1] [[def-wkp-zero-as-a-sobolev-closure]]: for every $\varepsilon>0$, some $\varphi\in C_c^\infty(0,1)$ satisfies $\|v-\varphi\|_{H^1}<\varepsilon$.

[F2] [[thm-ftc-second-part]]: a smooth function's increment is the integral of its derivative.

[F3] On $[0,1]$, Countable Choice gives $\lambda_1([0,1])=\lambda_1((0,1))=1$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-countable-choice]]). Hence Holder gives $\int_0^1|g|\le\|g\|_{L^2}$ and $\|1\|_{L^2}=1$ ([[thm-holder-inequality-for-integrals]]).

[F4] [[def-sobolev-space-wkp-and-its-norm]]: for $k=1,p=2$, $\|v\|_{H^1}^2=\|v\|_2^2+\|v'\|_2^2$.

[F5] The nonnegative Lebesgue integral is monotone ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F6] Continuous functions on closed intervals are bounded and Riemann integrable ([[thm-continuous-implies-integrable]]). Under Countable Choice their Riemann and Lebesgue integrals agree ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]).

## Proof

1.1 Extend $\varphi\in C_c^\infty(0,1)$ smoothly by zero to $[0,1]$. Its derivative is continuous on every $[0,x]$ with $0<x\le1$, so [F6] makes it Riemann integrable and identifies its Riemann integral with its Lebesgue integral. Thus [F2] gives $\varphi(x)=\int_0^x\varphi'(t)\,dt$; at $x=0$ both sides are zero. Hence $|\varphi(x)|\le\int_0^1|\varphi'(t)|\,dt\le\|\varphi'\|_2$ by [F3]. Monotonicity [F5] and $\lambda_1((0,1))=1$ give $\|\varphi\|_2^2=\int_0^1|\varphi|^2\le\|\varphi'\|_2^2$, so $\|\varphi\|_2\le\|\varphi'\|_2$. [F2, F3, F5, F6, given, algebra]

2.1 Given $\varepsilon>0$, choose $\varphi$ by [F1]. The triangle inequality and step 1.1 give $\|v\|_2\le\|\varphi\|_2+\varepsilon\le\|\varphi'\|_2+\varepsilon\le\|v'\|_2+2\varepsilon$. Since this holds for every positive $\varepsilon$, $\|v\|_2\le\|v'\|_2$. By [F4], squaring and adding the derivative norm proves the $H^1$ estimate. [F1, F4, step 1.1, algebra] ∎
