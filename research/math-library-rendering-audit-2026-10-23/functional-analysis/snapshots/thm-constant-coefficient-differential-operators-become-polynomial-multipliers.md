---
id: thm-constant-coefficient-differential-operators-become-polynomial-multipliers
kind: theorem
title: Constant coefficient differential operators become polynomial multipliers
status: published
origin: pipeline
deps: [thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions, def-countable-choice]
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
      locator: "Chapter 11 introduction and equation (11.36), pp. 119, 128; converted to 2pi normalization"
proof_strategy: direct
---

## Statement

Assume Countable Choice.  Let
$P(z)=\sum_{\alpha\in A}a_\alpha z^\alpha$ be a complex polynomial in $n$
variables, with $A$ finite, and put
$P(\partial)=\sum_{\alpha\in A}a_\alpha\partial^\alpha$.  Then, for every
$u\in\mathcal S'(\mathbb R^n)$,

$$\mathcal F(P(\partial)u)=P(2\pi i\xi)\,\mathcal Fu$$

in $\mathcal S'(\mathbb R^n)$.

## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]], a finite polynomial $P$, and $u\in\mathcal S'(\mathbb R^n)$.

[F1] For every multi-index $\alpha$, $\mathcal F(\partial^\alpha u)=(2\pi i\xi)^\alpha\mathcal Fu$ ([[thm-fourier-differentiation-and-multiplication-identities-on-tempered-distributions]]).

## Proof

**Proof technique:** finite linearity.

1.1 Fourier transformation, distributional differentiation, and finite addition are complex-linear, giving the following finite expansion. [F1, algebra]

$$\mathcal F(P(\partial)u) =\sum_{\alpha\in A}a_\alpha\mathcal F(\partial^\alpha u).$$

[F1, algebra]

2.1 Substitute [F1] into the finite sum from step 1.1 and factor the common distribution $\mathcal Fu$ to obtain $\sum_\alpha a_\alpha(2\pi i\xi)^\alpha\mathcal Fu =P(2\pi i\xi)\mathcal Fu$.  This includes constant and zero polynomials. The statement is only an algebraic equivalence: it asserts no division by $P(2\pi i\xi)$ and no existence or regularity theorem for a PDE.  Countable Choice is used only through [F1]. [F1, step 1.1] ∎
