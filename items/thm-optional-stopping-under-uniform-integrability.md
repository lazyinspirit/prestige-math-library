---
id: thm-optional-stopping-under-uniform-integrability
kind: theorem
title: Optional stopping under uniform integrability
status: draft
origin: pipeline
deps: [thm-closed-martingale-characterization, def-stopped-random-variable-and-stopped-process, def-sigma-algebra-at-a-stopping-time, lem-stopping-time-sigma-algebra-is-a-sigma-algebra, thm-optional-sampling-for-bounded-stopping-times, thm-tower-property-of-conditional-expectation, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "van der Vaart, Martingales, Diffusions and Financial Mathematics, Theorem 2.42 and proof, pp. 21–22", url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"}
---

## Statement

Assume AC. Let $M$ be a uniformly integrable martingale and let $\sigma\le\tau$ be pointwise ordered, almost-surely finite stopping times. Define $M_\sigma$ and $M_\tau$ using the fixed cemetery value $0$ on the respective null events where the stopping time is infinite. Then $M_\sigma,M_\tau\in L^1$ and
$$\mathbb E[M_\tau\mid\mathcal F_\sigma]=M_\sigma\quad\text{a.s.}, \qquad \mathbb EM_\tau=\mathbb EM_\sigma.$$

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[thm-closed-martingale-characterization]] supplies $M_\infty\in L^1$ with $M_n=\mathbb E[M_\infty\mid\mathcal F_n]$ and makes conditional expectations of this fixed variable uniformly integrable.

[F2] [[thm-optional-sampling-for-bounded-stopping-times]] handles every truncated time.

[F3] [[def-stopped-random-variable-and-stopped-process]] gives pointwise stabilization at an almost-surely finite time.

[F4] [[def-sigma-algebra-at-a-stopping-time]] gives the stopped-event tests, and [[thm-tower-property-of-conditional-expectation]] applies to nested sigma-algebras.

[F5] [[def-axiom-of-choice]] records the background AC hypothesis. The conditional-expectation and representative properties used here are supplied by [F1], [F2], and [F4].

[F6] [[lem-stopping-time-sigma-algebra-is-a-sigma-algebra]] proves $\mathcal F_\sigma\subseteq\mathcal F_\tau$ for pointwise $\sigma\le\tau$.

## Proof

1.1 Fix a stopping time $\rho$ equal to either $\sigma$ or $\tau$. For $r\ge n$, F2 applied to $\rho\wedge n\le r$ gives $$M_{\rho\wedge n}=\mathbb E[M_r\mid\mathcal F_{\rho\wedge n}].$$ Let $r\to\infty$ in $L^1$ using F1 and conditional contraction to obtain $$M_{\rho\wedge n}=\mathbb E[M_\infty\mid\mathcal F_{\rho\wedge n}].$$ [F1, F2]

2.1 The sigma-algebras $\mathcal F_{\rho\wedge n}$ increase with $n$. Thus the sequence in step 1.1 is a closed, hence uniformly integrable, martingale by F1. Since $\rho<\infty$ almost surely, F3 gives $M_{\rho\wedge n}\to M_\rho$ almost surely; F1's UI convergence implication upgrades this to $L^1$, proving $M_\rho\in L^1$. [F1, F3, step 1.1]

3.1 For $A\in\mathcal F_\rho$, the event $A\cap\{\rho\le n\}$ belongs to $\mathcal F_{\rho\wedge n}$ (check the defining finite-level intersections). Apply the conditional identity in step 1.1 on this event, then let $n\to\infty$. The left side converges by step 2.1; the right side converges by dominated convergence for $M_\infty1_{A\cap\{\rho\le n\}}$. Hence $$\int_A M_\rho\,dP=\int_A M_\infty\,dP,$$ so $M_\rho=\mathbb E[M_\infty\mid\mathcal F_\rho]$. [F1, F4, step 1.1, step 2.1]

4.1 Since $\sigma\le\tau$ pointwise, F6 gives $\mathcal F_\sigma\subseteq\mathcal F_\tau$. Apply the tower property in F4 to the two representations from step 3.1: $$\mathbb E[M_\tau\mid\mathcal F_\sigma] =\mathbb E[\mathbb E[M_\infty\mid\mathcal F_\tau]\mid\mathcal F_\sigma] =\mathbb E[M_\infty\mid\mathcal F_\sigma]=M_\sigma.$$ Taking expectations finishes. AC is the background hypothesis recorded in F5; the conditional-expectation identities come from F1 and F4. [F1, F4, F5, F6, step 3.1] ∎
