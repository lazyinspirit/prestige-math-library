---
id: lem-nrqmx-weyl-hilbert-schmidt-bound
kind: lemma
domain: mathematics
library: mathematics
title: Square-integrable kernel bound for Schwartz Weyl quantization
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-nrqmx-weyl-symbol-wigner
  - lem-nrqmx-scaled-plancherel
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
  - def-countable-choice
dependency_roles:
  def-nrqmx-weyl-symbol-wigner: mathematical-premise
  lem-nrqmx-scaled-plancherel: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Stéphane Nonnenmacher, Introduction to Semiclassical Analysis, lecture notes (2019)
      url: https://www.imo.universite-paris-saclay.fr/~stephane.nonnenmacher/enseign/Cours-Semiclassical-Analysis2019-lecture1-8.pdf
      locator: Definition 3.10 and the Weyl kernel convention, printed pp. 16–17
    - title: Gianfausto Dell’Antonio, Lectures on the Mathematics of Quantum Mechanics, Volume II (2016)
      url: https://people.sissa.it/~gianfa/sito-web/%20Dell%27Antonio%20%20Mathematics%20of%20Quantum%20Mechanics%20II%20.pdf
      locator: Lecture 2, §2.2, Weyl kernels and Hilbert–Schmidt norm, printed pp. 41–43
    - title: Lawrence C. Evans and Maciej Zworski, Lectures on Semiclassical Analysis
      url: https://math.mit.edu/~vwg/semiclassicalEvansZworski.pdf
      locator: Chapter 4, §4.2, printed pp. 58–65
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice. Let $d\geq1$, $\epsilon>0$, and $a\in\mathcal S(\mathbb R^{2d})$. The kernel of $\operatorname{Op}^W_\epsilon(a)$ is

$$ K_\epsilon(x,y):=(2\pi\epsilon)^{-d}\int_{\mathbb R^d}e^{i(x-y)\cdot\xi/\epsilon}a\!\left(\frac{x+y}{2},\xi\right)\,d\xi . $$

It belongs to $L^2(\mathbb R^{2d})$ and satisfies

$$ \|K_\epsilon\|_{L^2(\mathbb R^{2d})}=(2\pi\epsilon)^{-d/2}\|a\|_{L^2(\mathbb R^{2d})}. $$

The kernel integral defines a bounded operator on $L^2(\mathbb R^d)$ that agrees with the Schwartz-space definition of $\operatorname{Op}^W_\epsilon(a)$, and its operator norm is at most the displayed kernel norm. This estimate is finite for each $\epsilon>0$ but is not uniform as $\epsilon\downarrow0$.

## Statement references

[[def-nrqmx-weyl-symbol-wigner]]

## Facts & Assumptions

**Given:** Countable Choice, $d\geq1$, $\epsilon>0$, and $a\in\mathcal S(\mathbb R^{2d})$.

[A1] Assume the Axiom of Countable Choice ([[def-countable-choice]]).

[F1] The Weyl operator on Schwartz functions has the integral kernel formula in [[def-nrqmx-weyl-symbol-wigner]].

[F2] The scaled Fourier transform is unitary on $L^2$, so its inverse preserves $L^2$ norms ([[lem-nrqmx-scaled-plancherel]]).

[F3] Tonelli's theorem permits the iterated integrals of the nonnegative function $|K_\epsilon|^2$ ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F4] $L^2(\mathbb R^d;\mathbb C)$, with $\langle u,v\rangle=\int u\overline v$ linear in its first argument, is a complex Hilbert space ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]).

## Proof
**Given:** The data and Fourier convention of the Statement and [A1], [F1]–[F4].

1.1 Set $q=(x+y)/2$ and $r=x-y$. Then $x=q+r/2$, $y=q-r/2$, and the absolute Jacobian of $(q,r)\mapsto(x,y)$ is $1$. In these coordinates, $$ K_\epsilon(q,r)=(2\pi\epsilon)^{-d}\int e^{ir\cdot\xi/\epsilon}a(q,\xi)\,d\xi=(2\pi\epsilon)^{-d/2}(\mathcal F_\epsilon^{-1}a(q,\cdot))(r). $$ Applying [F2] to the $\xi$-section for each $q$, then [F3] to integrate the resulting nonnegative function in $q$, gives $$ \|K_\epsilon\|_2^2=(2\pi\epsilon)^{-d}\int_{\mathbb R^d}\int_{\mathbb R^d}|a(q,\xi)|^2\,d\xi\,dq=(2\pi\epsilon)^{-d}\|a\|_2^2. $$ Thus $K_\epsilon\in L^2(\mathbb R^{2d})$ with the asserted norm. [given, A1, F1, F2, F3, algebra]

2.1 For $u\in L^2(\mathbb R^d)$, the section $K_\epsilon(x,\cdot)$ lies in $L^2$ for almost every $x$ by [F3]. For those $x$, define $(A_\epsilon u)(x)=\int K_\epsilon(x,y)u(y)\,dy$. Cauchy–Schwarz in the Hilbert space pairing [F4] gives $$ |A_\epsilon u(x)|^2\leq\left(\int|K_\epsilon(x,y)|^2\,dy\right)\|u\|_2^2. $$ Integrating in $x$ and using [F3] shows $A_\epsilon u\in L^2$ and $\|A_\epsilon u\|_2\leq\|K_\epsilon\|_2\|u\|_2$. For $u\in\mathcal S$, the kernel formula defining $A_\epsilon u$ is exactly [F1], so this is the required bounded extension. [step 1.1, given, F1, F3, F4, algebra] ∎ 

