---
id: ex-gaussian-ar-one-chain
kind: example
title: "Gaussian AR(1) chain"
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-bounded-function-form-of-the-markov-property, def-standard-normal-and-normal-laws, def-independent-random-elements, thm-grouping-independent-sigma-algebras, thm-measurability-of-integration-against-a-kernel, thm-dynkin-pi-lambda]
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
      locator: "State-function Markov examples following Theorem 5.1.1, printed pp. 268-271"
---

## Statement

Assume Choice. Let $a\in\mathbb R$, $\sigma\ge0$, let
$(Z_n)_{n\ge1}$ be IID $N(0,1)$, independent of $X_0$, and define
$$X_{n+1}=aX_n+\sigma Z_{n+1}.$$ Then $X$ is a Markov chain on $\mathbb R$ with kernel $$K(x,\cdot)=N(ax,\sigma^2).$$

## Facts & Assumptions

**Given:** Choice, the parameters and independent innovations in the statement.

[F1] $N(m,\sigma^2)$ is the affine pushforward of the standard normal law, including $N(m,0)=\delta_m$. ([[def-standard-normal-and-normal-laws]])

[F2] Disjoint coordinate blocks of an independent family generate independent sigma-algebras. ([[thm-grouping-independent-sigma-algebras]])

[F3] Integrating a product-measurable function against a probability kernel is measurable in its source. ([[thm-measurability-of-integration-against-a-kernel]])

[F4] A lambda-system containing a generating pi-system contains the generated sigma-algebra. ([[thm-dynkin-pi-lambda]])

[F5] The bounded-function identity characterizes the Markov property. ([[lem-bounded-function-form-of-the-markov-property]])

## Verification

1.1 Let $\gamma=N(0,1)$. For Borel $A$, [F1, F3] $$K(x,A)=\int 1_A(ax+\sigma z)\,\gamma(dz).$$ For fixed $x$ this is the affine pushforward in [F1], hence a probability measure. The integrand is Borel on $\mathbb R^2$, so [F3], applied to the constant kernel $x\mapsto\gamma$, makes $x\mapsto K(x,A)$ measurable. Thus $K$ is a probability kernel. For $\sigma=0$ it is the deterministic kernel $\delta_{ax}$; empty/full $A$ give zero/one. [F1, F3]

2.1 The recursion makes [F2, F3, F4, F5, step 1.1] $\mathcal F_n^X\subseteq\sigma(X_0,Z_1,\ldots,Z_n)$. By [F2], $Z_{n+1}$ is independent of this larger past and hence of $\mathcal F_n^X$. For a bounded Borel $f$, set $$\phi_f(x)=\int f(ax+\sigma z)\,\gamma(dz),$$ which is measurable by [F3]. For $B\in\mathcal F_n^X$ and Borel $A,C$, independence applied to $B\cap\{X_n\in A\}$ gives $$ \mathbb P(B,X_n\in A,Z_{n+1}\in C) =\int_B1_A(X_n)\gamma(C)\,d\mathbb P. $$ A pi--lambda argument [F4] extends this from rectangles $A\times C$ to every Borel subset of $\mathbb R^2$, and bounded simple approximation extends it to the function $(x,z)\mapsto f(ax+\sigma z)$. Therefore $$ \mathbb E[f(aX_n+\sigma Z_{n+1})\mid\mathcal F_n^X]=\phi_f(X_n). $$ Since the left side is $\mathbb E[f(X_{n+1})\mid\mathcal F_n^X]$ and $\phi_f=Kf$, [F5] proves the Markov claim. The calculation includes $a=0$, $\sigma=0$, $f=0,1$, and $n=0$. Choice is used in [F1] and in the conditional expectations. [F2, F3, F4, F5, step 1.1] ∎
