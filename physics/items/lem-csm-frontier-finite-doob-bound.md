---
id: lem-csm-frontier-finite-doob-bound
kind: lemma
title: "Finite-horizon L2 maximal bound for martingales with right-continuous paths and left limits"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-continuous-time-adapted-process-and-martingale
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - cor-cauchy-schwarz-for-random-variables
  - cor-layer-cake-formulas-for-random-variables
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-monotone-convergence-for-the-integral
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-continuous-time-adapted-process-and-martingale: mathematical-premise
  def-conditional-expectation-given-a-sigma-algebra: mathematical-premise
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
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. Let $T\ge0$, let $(\Omega,\mathcal F,\mathbb P)$ be a probability space, and let $(\mathcal F_t)_{0\le t\le T}$ be an increasing family of sub-$\sigma$-algebras of $\mathcal F$. Let $(M_t)_{0\le t\le T}$ be a family of real random variables such that each $M_t$ is $\mathcal F_t$-measurable, $\mathbb E[M_t^2]<\infty$, $M_0=0$, and $\mathbb E[M_t\mid\mathcal F_s]=M_s$ almost surely for every $0\le s\le t\le T$. Suppose it has càdlàg paths almost surely, meaning there is a measurable event $\Omega_0\in\mathcal F$ with $\mathbb P(\Omega_0)=1$ such that, for every $\omega\in\Omega_0$, the path $t\mapsto M_t(\omega)$ is right-continuous on $[0,T)$ and has a finite left limit at every $t\in(0,T]$. Define
$$
D_T=\bigcup_{n\ge0}\{kT/2^n:0\le k\le2^n\},\qquad S_T=\sup_{t\in D_T}|M_t|.
$$
Then $S_T$ is measurable and agrees with the pathwise supremum $\sup_{0\le t\le T}|M_t|$ on $\Omega_0$, and
$$
\mathbb E[S_T^2]\le4\,\mathbb E[|M_T|^2].
$$

## Statement references

[[def-continuous-time-adapted-process-and-martingale]]

## Facts & Assumptions

**Given:** A finite horizon $T\ge0$, the filtered probability space, square-integrable all-pairs martingale, and measurable probability-one path-regularity event specified in the Statement, and the Axiom of Choice.

[A1] Assume Choice for the conditional-expectation interface in the continuous-time martingale definition ([[def-axiom-of-choice]]).

[F1] [[def-continuous-time-adapted-process-and-martingale]]: $\mathbb E[M_T\mid\mathcal F_t]=M_t$ almost surely for every deterministic $t\le T$.

[F2] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: $|\mathbb E[Z\mid\mathcal G]|\le\mathbb E[|Z|\mid\mathcal G]$ almost surely for integrable real $Z$.

[F3] [[cor-cauchy-schwarz-for-random-variables]]: $\mathbb E[|UV|]\le(\mathbb EU^2)^{1/2}(\mathbb EV^2)^{1/2}$ for square-integrable real random variables.

[F4] [[cor-layer-cake-formulas-for-random-variables]]: for nonnegative measurable $Z$, $\mathbb E Z=\int_0^\infty\mathbb P(Z>r)\,dr$, including infinite values.

[F5] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: a nonnegative measurable function on the product of the time half-line and the probability space may be integrated in either order.

[F6] [[thm-monotone-convergence-for-the-integral]]: expectations of increasing nonnegative sequences converge to the expectation of their pointwise limit.

[F7] [[def-conditional-expectation-given-a-sigma-algebra]]: a version $U$ of $\mathbb E[Z\mid\mathcal G]$ is integrable and $\mathcal G$-measurable, and $\mathbb E[U\mathbf1_C]=\mathbb E[Z\mathbf1_C]$ for every $C\in\mathcal G$.

## Proof

1.1 The result is immediate when $T=0$. Suppose $T>0$, fix $n\ge0$, and let $t_k=kT/2^n$ for $0\le k\le2^n$. Put $S_n=\max_{0\le k\le2^n}|M_{t_k}|$, which is square-integrable because it is bounded by the finite sum $\sum_k|M_{t_k}|$. For $r>0$, let $\tau$ be the first grid index $k$ with $|M_{t_k}|\ge r$, or leave it undefined if no grid value reaches $r$. Each event $C_k=\{\tau=k\}$ belongs to $\mathcal F_{t_k}$. By [F1] and [F2], $|M_{t_k}|=|\mathbb E[M_T\mid\mathcal F_{t_k}]|\le\mathbb E[|M_T|\mid\mathcal F_{t_k}]$ almost surely. Thus [F7] gives $\mathbb E[|M_T|\mathbf1_{C_k}]=\mathbb E[\mathbb E[|M_T|\mid\mathcal F_{t_k}]\mathbf1_{C_k}]\ge\mathbb E[|M_{t_k}|\mathbf1_{C_k}]\ge r\mathbb P(C_k)$. Summing over the finite grid yields $$ r\,\mathbb P(S_n\ge r)\le\mathbb E[|M_T|\mathbf1_{\{S_n\ge r\}}]. $$ [A1, F1, F2, F7, construct]

2.1 Apply [F4] to $S_n^2$, use $\mathbb P(S_n>r)\le\mathbb P(S_n\ge r)$ and integrate the bound from step 1.1. [F5] for the nonnegative measurable function $(r,\omega)\mapsto |M_T(\omega)|\mathbf1_{\{S_n(\omega)\ge r\}}$ gives $$ \mathbb E S_n^2=\int_0^\infty2r\,\mathbb P(S_n>r)\,dr\le2\,\mathbb E[|M_T|S_n]. $$ By [F3], the right side is at most $2(\mathbb E|M_T|^2)^{1/2}(\mathbb E S_n^2)^{1/2}$. If $\mathbb E S_n^2=0$ the desired finite-grid bound is immediate; otherwise divide by its square root and square to obtain $\mathbb E S_n^2\le4\mathbb E|M_T|^2$. [F3, F4, F5, step 1.1, algebra]

3.1 The dyadic grids are nested, so $S_n\uparrow S_*:=\sup_{t\in D_T}|M_t|=S_T$. For every $\omega\in\Omega_0$ and each $t<T$, there are dyadic grid times decreasing to $t$, and right-continuity makes their process values converge to $M_t(\omega)$; time $T$ is in every grid. Hence $S_*$ equals the pathwise supremum on $[0,T]$ almost surely. Apply [F6] to $S_n^2$ and take limits in the finite-grid estimate from step 2.1 to obtain the stated inequality. [F6, step 2.1, algebra] ∎
