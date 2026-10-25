---
id: cex-a-transient-chain-can-return-with-positive-probability
kind: counterexample
title: "A transient chain can return with positive probability"
status: published
origin: pipeline
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-hitting-return-and-visit-times
  - def-recurrent-and-transient-state
  - thm-recurrence-transience-equivalent-criteria
  - ex-green-kernel-for-a-biased-random-walk-on-the-integers
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
      locator: "§5.3 discussion before Theorem 5.3.1 and Theorem 5.3.1, printed pp. 281–282 (PDF pp. 289–290): return probability below one gives finite expected visits; the local statewise criterion supplies the full hypotheses. The exact biased-walk value is derived from the earlier local Green-kernel calculation."
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
      locator: "§21.1 Example 21.2, printed pp. 291–292 (PDF pp. 306–307): biased integer walk with q<p and p+q=1 and positive escape probability. Its displayed passage appears to omit the first-step factor in relating escape from 0 to failure to hit 0 from 1; this item does not use that relation and obtains the exact return value from the preceding Green-kernel item and the local visit criterion."
---

## Statement refuted

The assertion that a transient state has zero probability of ever returning to
itself is false.

## Facts & Assumptions

**Given:** Assume AC. Let $p>q>0$ with $p+q=1$, and use the biased nearest-
neighbor kernel on $E=\mathbb Z$,
$$
K(z,\cdot)=p\delta_{z+1}+q\delta_{z-1}.
$$
For each fixed $x\in\mathbb Z$, let $\mathbb P_x$ be the canonical law with
$X_0=x$, put $r=q/p$, and let $T_x^+=\inf\{n\ge1:X_n=x\}$.

[A1] AC is the principle that every family of nonempty sets has a choice
function. ([[def-axiom-of-choice]])

[F1] For this biased kernel and each deterministic start $x$, the canonical
chain law $\mathbb P_x$ exists under the stated AC assumption.
([[ex-green-kernel-for-a-biased-random-walk-on-the-integers]])

[F2] For the same walk, the Green kernel satisfies $$G(x,y)=\begin{cases}\dfrac{1}{p-q},&y\ge x,\\[4pt]\dfrac{r^{x-y}}{p-q},&y<x.\end{cases}$$
([[ex-green-kernel-for-a-biased-random-walk-on-the-integers]])

[F3] Under AC, recurrence is equivalent to divergence of the diagonal
transition series.
([[thm-recurrence-transience-equivalent-criteria]])

[F4] A state is transient exactly when its positive-time return probability is
strictly less than one. ([[def-recurrent-and-transient-state]])

[F5] For a transient state with return probability
$\rho_x=\mathbb P_x(T_x^+<\infty)$, the expected visit count equals the
diagonal transition series and is $1/(1-\rho_x)$.
([[thm-recurrence-transience-equivalent-criteria]])

## Counterexample

1.1 Fix any $x\in\mathbb Z$. AC [A1] and the already constructed walk [F1] give its canonical deterministic-start law. Since $p>q>0$, the diagonal value in [F2] is finite and positive: $$G(x,x)=\frac{1}{p-q}<\infty.$$ [A1, F1, F2, given]

2.1 By [F2], this finite value is the series $\sum_{n\ge0}p^{(n)}(x,x)$. The recurrence criterion [F3] therefore rules out recurrence. The alternatives in [F4] then give $\rho_x:=\mathbb P_x(T_x^+<\infty)<1$, so $x$ is transient. [F2, F3, F4, step 1.1, given]

3.1 For this transient state, [F5] identifies the same visit series with $\mathbb E_xN_x=1/(1-\rho_x)$. Equating it to [F2] gives $$\frac{1}{1-\rho_x}=\frac{1}{p-q},\qquad \rho_x=1-(p-q)=2q,$$ using $p+q=1$. Since $0<q<p$ and $p+q=1$, we have $0<2q<1$. Thus the state is transient, yet its probability of a positive-time return is strictly positive. Translation invariance makes the calculation valid for every $x\in\mathbb Z$; the Green series counts the initial visit, whereas $T_x^+$ starts at time one. [F2, F5, step 1.1, step 2.1, given] ∎
