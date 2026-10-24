---
id: lem-continuous-functions-determine-borel-probabilities-on-compact-metric-spaces
kind: lemma
title: Continuous functions determine Borel probabilities on compact metric spaces
status: published
origin: pipeline
deps: [def-continuous-real-functions-on-a-compact-metric-space, thm-dominated-convergence, lem-finite-measure-uniqueness-on-a-pi-system, lem-distance-to-set-is-lipschitz, thm-metric-closure-characterisation]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "Proof of Theorem 8.5.1, printed p. 79; the local proof replaces the cited Riesz uniqueness step by closed-set approximation"
proof_strategy: direct
---

## Statement

Let $K$ be a nonempty compact metric space.  If Borel probability measures
$\mu$ and $\nu$ satisfy

$$\int_K f\,d\mu=\int_K f\,d\nu\qquad\text{for every }f\in C(K,\mathbb R),$$

then $\mu=\nu$.

## Facts & Assumptions

**Given:** The compact metric space and Borel probabilities in the Statement.

[F1] Dominated convergence applies to bounded pointwise-convergent measurable functions ([[thm-dominated-convergence]]).

[F2] Two finite measures of equal total mass which agree on a generating pi-system agree on its generated sigma-algebra ([[lem-finite-measure-uniqueness-on-a-pi-system]]).

[F3] Distance to a nonempty subset is a real-valued $1$-Lipschitz function, and a nonempty closed set is exactly its zero-distance set ([[lem-distance-to-set-is-lipschitz]], [[thm-metric-closure-characterisation]]).

## Proof

**Proof technique:** direct approximation of closed-set indicators.

1.1 Let $F\subseteq K$ be closed and nonempty.  By [F3], its distance function is continuous, vanishes on $F$, and is strictly positive off $F$.  For $m\geq1$, set $$\phi_m(x)=\max\{0,1-m\,d(x,F)\}.$$ Then $0\leq\phi_m\leq1$, every $\phi_m$ is continuous, and $\phi_m\downarrow\mathbf1_F$ pointwise. [F3, algebra]

2.1 The assumed continuous-test identity applies to each $\phi_m$.  Dominated convergence for each probability measure gives $$\mu(F)=\lim_m\int\phi_m\,d\mu=\lim_m\int\phi_m\,d\nu=\nu(F).$$ For $F=\varnothing$ the same equality is immediate. [F1, step 1.1]

3.1 Closed subsets of $K$ form a pi-system containing $K$, and their complements are the open sets, so they generate the Borel sigma-algebra.  The two probabilities have equal total mass one and agree on every closed set by step 2.1.  Applying [F2] proves $\mu=\nu$. [F2, step 2.1] ∎
