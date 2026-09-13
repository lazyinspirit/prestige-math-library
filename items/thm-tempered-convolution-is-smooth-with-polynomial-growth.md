---
id: thm-tempered-convolution-is-smooth-with-polynomial-growth
kind: theorem
title: Tempered convolution is smooth with polynomial growth
status: published
origin: pipeline
deps: [def-convolution-of-a-tempered-distribution-with-a-schwartz-function, thm-polynomial-growth-functions-define-tempered-distributions, thm-finite-seminorm-bound-characterizes-tempered-distributions, thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
      url: "https://web.archive.org/web/20250519141924if_/https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Equation (11.31) and §11.2.1 item (5), p. 127"
    - title: "Radu Gelca, Functional Analysis"
      url: "https://www.math.ttu.edu/~rgelca/FUNCTANAL.pdf"
      locator: "Theorem 8.4.4(a)–(b) and proof, pp. 130–131"
proof_strategy: direct
---

## Statement

For $u\in\mathcal S'(\mathbb R^n)$ and
$\varphi\in\mathcal S(\mathbb R^n)$, the function $u*\varphi$ is smooth and
every derivative has polynomial growth.  For each multi-index $\gamma$,

$$\partial^\gamma(u*\varphi) =(\partial^\gamma u)*\varphi =u*(\partial^\gamma\varphi).$$

Consequently $u*\varphi$, interpreted as a regular distribution, belongs to
$\mathcal S'(\mathbb R^n)$.

## Facts & Assumptions

**Given:** $u\in\mathcal S'$ and $\varphi\in\mathcal S$, with convolution as
in [[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]].

[F1] There are $C,N,M$ giving a finite rectangular seminorm estimate for $u$
([[thm-finite-seminorm-bound-characterizes-tempered-distributions]]).

[F2] Translation, reflection, and differentiation are continuous on Schwartz
space
([[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]]).

[F3] Smooth pointwise-polynomial-growth functions define regular tempered
distributions ([[thm-polynomial-growth-functions-define-tempered-distributions]]).

## Proof

**Proof technique:** differentiate translated tests in Schwartz seminorms.

1.1 For every $x$ and coordinate $j$, Taylor's integral remainder and $1+|y|\leq(1+|x|)(1+|x-y|)$ show that the $x_j$-difference quotients of $y\mapsto\varphi(x-y)$ converge in every Schwartz seminorm to $y\mapsto\partial_j\varphi(x-y)$.  Continuity of $u$ permits differentiation of the scalar pairing, and iteration gives every multi-index derivative. [F1, F2, given]

$$\partial^\gamma(u*\varphi)(x) =\langle u_y,\partial^\gamma\varphi(x-y)\rangle.$$

[F1, F2, given]

1.2 Apply the definition of distributional differentiation to the translated test. [F2]

$$\langle\partial^\gamma u_y,\varphi(x-y)\rangle =(-1)^{|\gamma|}\langle u_y,\partial_y^\gamma\varphi(x-y)\rangle =\langle u_y,\partial^\gamma\varphi(x-y)\rangle.$$

Together with step 1.1 this proves both derivative identities, including
$\gamma=0$. [F2, step 1.1]

2.1 Apply [F1] to the translated test in step 1.1.  Write $z=x-y$ and expand $y^\alpha=(x-z)^\alpha$. [F1, step 1.1, algebra]

$$\sup_y|y^\alpha\partial_y^\beta \partial^\gamma\varphi(x-y)| \leq C_{\varphi,N,M,\gamma}(1+|x|)^N.$$

Hence $|\partial^\gamma(u*\varphi)(x)|\leq
C_\gamma(1+|x|)^N$. [F1, algebra]

3.1 Step 1.1 gives smoothness, and step 2.1 gives pointwise polynomial growth for every derivative.  In particular the function is locally integrable and [F3] makes its regular distribution tempered.  If $u=0$ or $\varphi=0$, all formulas reduce to zero.  No parameter integral or choice axiom is used. [F3, step 1.1, step 2.1] ∎
