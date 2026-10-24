---
id: cex-convolution-of-two-tempered-distributions-need-not-exist
kind: counterexample
title: Convolution of two tempered distributions need not exist
status: published
origin: pipeline
deps: [thm-polynomial-growth-functions-define-tempered-distributions, def-convolution-of-distributions-when-one-has-compact-support]
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
      locator: "Section 8.2, Proposition 8.6 and the examples following it, pp. 105–106 (properly summing supports and divergent convolution)"
proof_strategy: counterexample
---

## Statement refuted

Every pair of tempered distributions has an ordinary convolution.

Already on $\mathbb R^n$, for $n\ge1$, the two constant tempered
distributions $1$ and $1$ do not have an ordinary convolution.

## Facts & Assumptions

**Given:** $n\ge1$.

[F1] A function of polynomial growth defines a tempered distribution ([[thm-polynomial-growth-functions-define-tempered-distributions]]).

[F2] Convolution is canonically defined when one distribution has compact support; the constants in this example have no compact support ([[def-convolution-of-distributions-when-one-has-compact-support]]).

## Counterexample

**Proof technique:** divergence along the fibers of the addition map.

1.1 The constant function $1$ has polynomial growth of order zero, so each factor defines a tempered distribution by [F1].  Neither factor is compactly supported, so [F2] does not itself define their convolution. [F1, F2]

1.2 Choose a nonnegative $\psi\in\mathcal D(\mathbb R^n)$ with $c:=\int_{\mathbb R^n}\psi(z)\,dz>0$.  The formal distributional convolution pairing would require the following addition-pullback integral. [choose]

$$\int_{\mathbb R^n}\int_{\mathbb R^n}\psi(x+y)\,dy\,dx.$$

For the cube $Q_R=[-R,R]^n$, translation in the inner integral gives

$$\int_{Q_R}\int_{\mathbb R^n}\psi(x+y)\,dy\,dx=|Q_R|c=(2R)^nc.$$

The quantities on the right tend to $+\infty$.  Equivalently, $\psi(x+y)$ is not compactly supported on $\mathbb R^{2n}$: every nonempty addition fiber has infinite volume. [given, algebra]

2.1 Hence the ordinary integral construction does not produce a finite pairing even on this one nonnegative test function, and $1*1$ is undefined as an ordinary distributional convolution.  This does not say that no separately chosen regularization can assign an object to the pair; such an assignment is additional structure, not the ordinary convolution supplied by [F2]. [F2, step 1.2] ∎
