---
id: thm-finite-dimensional-laws-of-a-markov-chain
kind: theorem
title: "Finite-dimensional laws of a Markov chain"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-initial-distribution-of-a-markov-chain, lem-bounded-function-form-of-the-markov-property, thm-chapman-kolmogorov-equations, thm-tower-property-of-conditional-expectation, thm-dynkin-pi-lambda]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Section 5.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Theorem 5.1.1 and formula (5.1.2), printed pp. 268-269"
---

## Statement

Assume Choice. Let $X$ be a $K$-chain with initial law $\mu$. If
$0\le n_0<\cdots<n_r$ and $f_0,\ldots,f_r$ are bounded measurable real
functions, then
$$ \begin{aligned} \mathbb E\prod_{j=0}^r f_j(X_{n_j}) ={}&\int_E\mu(dx) \int_E K^{n_0}(x,dx_0)f_0(x_0)\\ &\quad\cdot\int_EK^{n_1-n_0}(x_0,dx_1)f_1(x_1) \cdots\int_EK^{n_r-n_{r-1}}(x_{r-1},dx_r)f_r(x_r). \end{aligned} $$
For $n_0=0$, the $K^0$ integral is evaluation at $x$. Taking
$f_j=1_{A_j}$ gives the corresponding iterated-integral formula for the joint
law of $(X_{n_0},\ldots,X_{n_r})$.

## Facts & Assumptions

**Given:** Choice, a $K$-chain with initial law $\mu$, an increasing finite time list, and bounded measurable tests.

[F1] The initial law is $\mathcal L(X_0)$, with $K^0$ the Dirac identity. ([[def-initial-distribution-of-a-markov-chain]])

[F2] The multistep identity is $\mathbb E[f(X_{m+n})\mid\mathcal F_m]=K^nf(X_m)$. ([[thm-chapman-kolmogorov-equations]])

[F3] Conditional expectation satisfies the tower property. ([[thm-tower-property-of-conditional-expectation]])

[F4] Probability measures agreeing on a generating pi-system agree on its sigma-algebra. ([[thm-dynkin-pi-lambda]])

## Proof

1.1 Define backward, starting with $G_r=f_r$, by [F2, F3] $$ G_j(x)=f_j(x)K^{n_{j+1}-n_j}G_{j+1}(x),\qquad 0\le j<r. $$ Every $G_j$ is bounded and measurable because kernel integration preserves measurability. Applying [F2] at time $n_{r-1}$, multiplying by the bounded $\mathcal F_{n_{r-1}}$-measurable preceding product, and using [F3] removes $f_r(X_{n_r})$ and replaces it by $K^{n_r-n_{r-1}}f_r(X_{n_{r-1}})$. Repeating finitely many times gives $$ \mathbb E\prod_{j=0}^r f_j(X_{n_j})=\mathbb E[G_0(X_{n_0})]. $$ [F2, F3]

2.1 A final application of [F2] from time $0$ to time $n_0$, followed by [F1, F2, step 1.1] integration against [F1], gives $$ \mathbb E[G_0(X_{n_0})] =\int\mu(dx)\int K^{n_0}(x,dx_0)G_0(x_0), $$ which expands to the displayed iterated integral. If $r=0$, this same line is the whole calculation; if $n_0=0$, the inner identity kernel simply evaluates $G_0(x)$. Choice is used in [F2]--[F3] and nowhere in the finite algebraic unwinding. [F1, F2, step 1.1]

3.1 Put $f_j=1_{A_j}$. The left side is the joint law's value on the rectangle [F4, step 1.1, step 2.1] $A_0\times\cdots\times A_r$, and the right side is the announced cylinder integral. These rectangles include empty factors and the full rectangle, form a pi-system, and generate the finite product sigma-algebra. By [F4] their values determine the joint law uniquely. Conversely, the stated joint law integrates every bounded product test by the same iterated-integration calculation, so the two displayed formulations are equivalent. [F4, step 1.1, step 2.1] ∎
