---
id: lem-csm-frontier-finite-doob-bound
kind: lemma
title: "Finite-horizon L2 maximal bound for càdlàg martingales"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-continuous-time-adapted-process-and-martingale
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - cor-cauchy-schwarz-for-random-variables
  - cor-layer-cake-formulas-for-random-variables
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-monotone-convergence-for-the-integral
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-continuous-time-adapted-process-and-martingale: mathematical-premise
  thm-basic-algebra-and-order-properties-of-conditional-expectation: mathematical-premise
  cor-cauchy-schwarz-for-random-variables: mathematical-premise
  cor-layer-cake-formulas-for-random-variables: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "James R. Norris, Advanced Probability, complete author-hosted lecture notes"
      url: "https://www.statslab.cam.ac.uk/~jrn10/Lectures/ap.pdf"
      locator: "Section 2.4, printed pp. 12–14, and Section 4.3, printed pp. 26–27: discrete and continuous-time martingale conventions."
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, complete author-hosted book"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Section 4.4, printed pp. 235–237: martingale maximal inequalities and finite-time arguments."
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Choice. Let $(M_t)_{0\le t\le T}$ be a real square-integrable martingale relative to a filtration $(\mathcal F_t)$, with càdlàg paths almost surely and $M_0=0$. Then
$$\mathbb E\!\left[\sup_{0\le t\le T}|M_t|^2\right]\le4\,\mathbb E[|M_T|^2].$$

## Statement references

[[def-continuous-time-adapted-process-and-martingale]]

## Facts & Assumptions

**Given:** A finite horizon $T\ge0$, a square-integrable all-pairs martingale, its filtration, càdlàg paths almost surely, and the Axiom of Choice.

[A1] Assume Choice for the conditional-expectation interface in the continuous-time martingale definition ([[def-axiom-of-choice]]).

[F1] [[def-continuous-time-adapted-process-and-martingale]]: $\mathbb E[M_T\mid\mathcal F_t]=M_t$ almost surely for every deterministic $t\le T$.

[F2] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: $|\mathbb E[Z\mid\mathcal G]|\le\mathbb E[|Z|\mid\mathcal G]$ almost surely, and conditional expectation preserves event integrals.

[F3] [[cor-cauchy-schwarz-for-random-variables]]: $\mathbb E[|UV|]\le(\mathbb EU^2)^{1/2}(\mathbb EV^2)^{1/2}$ for square-integrable real random variables.

[F4] [[cor-layer-cake-formulas-for-random-variables]]: for nonnegative measurable $Z$, $\mathbb E Z=\int_0^\infty\mathbb P(Z>r)\,dr$, including infinite values.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: a nonnegative measurable function on the product of the time half-line and the probability space may be integrated in either order.

[F6] [[thm-monotone-convergence-for-the-integral]]: expectations of increasing nonnegative sequences converge to the expectation of their pointwise limit.

## Proof

1.1 The result is immediate when $T=0$. Suppose $T>0$, fix $n\ge0$, and let $t_k=kT/2^n$ for $0\le k\le2^n$. Put $S_n=\max_{0\le k\le2^n}|M_{t_k}|$, which is square-integrable because it is bounded by the finite sum $\sum_k|M_{t_k}|$. For $r>0$, let $\tau$ be the first grid index $k$ with $|M_{t_k}|\ge r$, or leave it undefined if no grid value reaches $r$. Each event $\{\tau=k\}$ belongs to $\mathcal F_{t_k}$. By [F1] and [F2], $|M_{t_k}|=|\mathbb E[M_T\mid\mathcal F_{t_k}]|\le\mathbb E[|M_T|\mid\mathcal F_{t_k}]$ almost surely. Multiplying by $\mathbf1_{\{\tau=k\}}$ and taking expectations gives $\mathbb E[|M_T|\mathbf1_{\{\tau=k\}}]\ge r\mathbb P(\tau=k)$. Summing over the finite grid yields $$ r\,\mathbb P(S_n\ge r)\le\mathbb E[|M_T|\mathbf1_{\{S_n\ge r\}}]. $$ [A1, F1, F2, construct]

2.1 Apply [F4] to $S_n^2$, use $\mathbb P(S_n>r)\le\mathbb P(S_n\ge r)$ and integrate the bound from step 1.1. [F5] for the nonnegative indicator $\mathbf1_{\{S_n\ge r\}}$ gives $$ \mathbb E S_n^2=\int_0^\infty2r\,\mathbb P(S_n>r)\,dr\le2\,\mathbb E[|M_T|S_n]. $$ By [F3], the right side is at most $2(\mathbb E|M_T|^2)^{1/2}(\mathbb E S_n^2)^{1/2}$. If $\mathbb E S_n^2=0$ the desired finite-grid bound is immediate; otherwise divide by its square root and square to obtain $\mathbb E S_n^2\le4\mathbb E|M_T|^2$. [F3, F4, step 1.1, algebra]

3.1 The dyadic grids are nested, so $S_n\uparrow S_*:=\sup_{t\in\bigcup_n\{kT/2^n:0\le k\le2^n\}}|M_t|$. On every càdlàg path, for each $t<T$ there are dyadic grid times decreasing to $t$, and right-continuity makes their process values converge to $M_t$; time $T$ is in every grid. Hence $S_*=\sup_{0\le t\le T}|M_t|$ almost surely. Apply [F6] to $S_n^2$ and take limits in the finite-grid estimate from step 2.1 to obtain the stated inequality. [F6, step 2.1, algebra] ∎
