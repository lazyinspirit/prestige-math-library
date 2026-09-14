---
id: thm-markov-property-for-bounded-future-path-functionals
kind: theorem
title: "Markov property for bounded future path functionals"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-shift-operator-and-future-coordinate-sigma-algebra, cor-canonical-markov-chain-on-path-space, lem-bounded-function-form-of-the-markov-property, thm-monotone-class, thm-dynkin-pi-lambda, thm-measurability-of-integration-against-a-kernel, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-dominated-convergence]
proof_strategy: monotone-class
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Section 5.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Theorem 5.2.3 and preceding shift notation, printed pp. 280-282"
---

## Statement

Assume Choice. Let $X$ be a $K$-chain and let
$H:E^{\mathbb N_0}\to\mathbb R$ be bounded and product-measurable. Then
$$h(x):=\mathbb E_x[H(X_0,X_1,\ldots)]$$ is $\mathcal E$-measurable and, for every $n\ge0$, $$ \mathbb E[H(X_n,X_{n+1},\ldots)\mid\mathcal F_n]=h(X_n)\quad\text{a.s.} $$

## Facts & Assumptions

**Given:** Choice, a $K$-chain, a fixed time $n$, and a bounded measurable path functional $H$.

[F1] The one-step Markov identity holds for every bounded measurable state function. ([[lem-bounded-function-form-of-the-markov-property]])

[F2] Integration of a product-measurable function against a probability kernel is measurable in the source. ([[thm-measurability-of-integration-against-a-kernel]])

[F3] A lambda-system containing a generating pi-system contains the generated sigma-algebra. ([[thm-dynkin-pi-lambda]])

[F4] Nonnegative measurable functions have increasing simple approximations, and dominated convergence applies under a common integrable bound. ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]], [[thm-dominated-convergence]])

[F5] For every initial law, in particular every Dirac law, there is a unique canonical path-space Markov-chain law. ([[cor-canonical-markov-chain-on-path-space]])

## Proof

1.1 Let $C=A_0\times\cdots\times A_r\times E\times E\times\cdots$ be a [F1, F2, F5] rectangular path cylinder. Backward kernel integration gives the measurable function $$ h_C(x)=1_{A_0}(x)K\bigl(1_{A_1}K(\cdots K1_{A_r})\bigr)(x). $$ By [F5], it equals $\mathbb P_x(C)$ under the canonical chain started from $x$. Starting at time $n+r-1$ and applying [F1] backward $r$ times, with $1_{A_0}(X_n)$ and the already exposed factors left outside, gives $$ \mathbb E[1_C(X_n,X_{n+1},\ldots)\mid\mathcal F_n]=h_C(X_n). $$ The formula also covers $r=0$, an empty $A_j$, and all $A_j=E$. [F1, F2, F5]

2.1 Let $\mathcal D$ be the path events $D$ for which [F3, F4, step 1.1] $h_D(x)=\mathbb P_x(D)$ is measurable and the conditional identity in step 1.1 holds with $D$. The whole path space belongs to $\mathcal D$, with $h=1$. Complements remain in $\mathcal D$ because $h_{D^c}=1-h_D$. For pairwise disjoint $D_j\in\mathcal D$, countable additivity gives $h_{\cup D_j}=\sum_jh_{D_j}$; measurable partial sums increase to this function, and dominated convergence in the defining event integrals gives the conditional identity for the union. Hence $\mathcal D$ is a lambda-system. Rectangular cylinders form a pi-system and belong by step 1.1, so [F3] yields every product-measurable path event. [F3, F4, step 1.1]

3.1 Finite real linear combinations of event indicators now satisfy both [F4, step 2.1] measurability and the identity. If $0\le H\le M$, choose simple $H_j\uparrow H$ by [F4]. Then $h_j(x)=\mathbb E_xH_j\to\mathbb E_xH=h(x)$ by dominated convergence, making $h$ measurable. The same theorem passes the limit through all event tests for conditional expectation and proves the displayed identity. Apply this to the positive and negative parts of a general bounded real $H$ and subtract. Zero, one, constant, and degenerate one-point path functionals are included. Choice enters through the canonical laws $\mathbb P_x$ and conditional-expectation versions used by [F1]. [F4, step 2.1] ∎
