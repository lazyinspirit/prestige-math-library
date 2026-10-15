---
id: lem-elementary-counting-integral-preserves-martingales
kind: lemma
title: "Elementary predictable counting-process integrals are martingales"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-elementary-predictable-counting-process-integral
  - def-continuous-time-adapted-process-and-martingale
  - def-continuous-time-filtration-and-all-pairs-martingale
  - def-conditional-expectation-as-an-ae-class
  - thm-taking-out-what-is-known
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Lu Tian, STAT331 Unit 10: Combining Martingales, Stochastic Integrals, and Applications, PDF p. 5"
      url: "https://web.stanford.edu/~lutian/coursepdf/martingale3.pdf"
    - title: "Richard F. Bass, SDEs with Jumps, Section 2.5, PDF p. 5"
      url: "https://sites.math.duke.edu/~rtd/CPSS2007/Basscornell.pdf"

---

## Statement

Let $M$ be any square-integrable martingale on $[0,T]$, and let $H$ be a
bounded predictable step integrand on a deterministic partition. The elementary integral
$(I_t(H))_{0\le t\le T}$ of
[[def-elementary-predictable-counting-process-integral]] is a
square-integrable martingale.

## Facts & Assumptions

**Given:** A finite-horizon square-integrable martingale $M=N-A$ and a bounded step integrand $H_j\in\mathcal F_{t_j}$ on a deterministic partition.

[F1] A square-integrable all-pairs martingale is adapted, integrable, and satisfies the conditional-expectation identity at every time pair. ([[def-continuous-time-adapted-process-and-martingale]])

[F2] The elementary integral is the finite sum of the step coefficients times the corresponding increments of $M$. ([[def-elementary-predictable-counting-process-integral]])

[F3] A bounded measurable factor known at time $u$ can be taken out of conditional expectation given $\mathcal F_u$. ([[thm-taking-out-what-is-known]])

[A1] AC is inherited through the continuous-time conditional-expectation definition. ([[def-axiom-of-choice]])

## Proof

1.1 Each summand in [F2] is $\mathcal F_t$-measurable at its current endpoint. It is square-integrable because $H_j$ is bounded and each martingale increment is in $L^2$. A finite sum is therefore adapted and square-integrable at every $t\le T$. [F1, F2, given, algebra]

2.1 Fix $0\le s\le t\le T$ and $B\in\mathcal F_s$. Refine the original deterministic partition by inserting $s$ and $t$. After subtracting $I_s(H)$ from $I_t(H)$, each remaining piece has the form $H_j(M_v-M_u)$ on an interval $(u,v]$ with $u\ge s$ and $t_j\le u$. Thus $\mathbf1_BH_j$ is bounded and $\mathcal F_u$-measurable. Since $\mathbb E[M_v-M_u\mid\mathcal F_u]=0$, [F3] gives $\mathbb E[\mathbf1_BH_j(M_v-M_u)]=0$. Summing the finitely many pieces yields $\mathbb E[\mathbf1_B(I_t(H)-I_s(H))]=0$. The event-integral characterization of conditional expectation proves $\mathbb E[I_t(H)\mid\mathcal F_s]=I_s(H)$. Thus the elementary integral is a square-integrable martingale. [A1, F1, F3, step 1.1, given] ∎

## Source notes

Tian states the bounded predictable-integral martingale result on Unit 10 p. 5
and refers its proof to Fleming–Harrington. Bass constructs the same step
integral for jump martingales. The event-testing argument above supplies the
complete finite-sum proof used here.
