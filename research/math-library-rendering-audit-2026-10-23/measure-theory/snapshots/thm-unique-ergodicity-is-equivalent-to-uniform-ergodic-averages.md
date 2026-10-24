---
id: thm-unique-ergodicity-is-equivalent-to-uniform-ergodic-averages
kind: theorem
title: Unique ergodicity is equivalent to uniform ergodic averages
status: published
origin: pipeline
landmark: true
deps: [def-unique-ergodicity, lem-continuous-functions-determine-borel-probabilities-on-compact-metric-spaces, lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences, thm-integrals-are-invariant-under-measure-preserving-maps, thm-extreme-value-metric, thm-integral-triangle-inequality, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-countable-choice]
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
      locator: "Theorem 8.5.1 (Oxtoby) and complete proof, printed pp. 78–79"
proof_strategy: equivalence
---

## Statement

Assume the Axiom of Countable Choice.  Let $T$ be a continuous self-map of a
nonempty compact metric space $K$.  The following are equivalent.

1. $T$ is uniquely ergodic, with invariant Borel probability $\mu$.
2. For every $f\in C(K,\mathbb R)$, the functions $A_nf$ converge uniformly
   on $K$ to a constant.

When these conditions hold, the constant is $\int_Kf\,d\mu$.

## Facts & Assumptions

**Given:** Countable choice, $K$, and $T$ as in the Statement.

[F1] Under countable choice, every sequence of Borel probabilities on $K$ has a subsequence whose integrals converge on every real continuous function to those of a Borel probability ([[lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences]], [[def-countable-choice]]).

[F2] Continuous functions determine Borel probabilities on $K$ ([[lem-continuous-functions-determine-borel-probabilities-on-compact-metric-spaces]]).

[F3] Integrals are invariant under a measure-preserving map ([[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F4] Every continuous real function on nonempty compact $K$ is bounded ([[thm-extreme-value-metric]]).

[F5] The integral triangle inequality and monotonicity bound the integral of a bounded error by its uniform norm times the total mass ([[thm-integral-triangle-inequality]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

## Proof

**Proof technique:** prove both implications using empirical probabilities.

1.1 Assume unique ergodicity with invariant probability $\mu$.  If uniform convergence to $\int f\,d\mu$ failed for some continuous $f$, countable choice would give $\varepsilon>0$, strictly increasing $n_j$, and $x_j\in K$ such that $$\left|A_{n_j}f(x_j)-\int f\,d\mu\right|\geq\varepsilon.$$ Define the empirical Borel probabilities $\eta_j=n_j^{-1}\sum_{k<n_j}\delta_{T^kx_j}$; finite additivity and countable additivity of each point mass make this a probability. [assume-hyp, F1]

2.1 By [F1], pass to a subsequence, not relabelled, and a Borel probability $\eta$ such that $\int g\,d\eta_j\to\int g\,d\eta$ for every $g\in C(K,\mathbb R)$.  For such $g$, $$\int g\circ T\,d\eta_j-\int g\,d\eta_j=\frac{g(T^{n_j}x_j)-g(x_j)}{n_j}\longrightarrow0,$$ because $g$ is bounded by [F4].  Taking limits shows that $\eta$ and its pullback probability $E\mapsto\eta(T^{-1}E)$ have identical continuous test integrals; [F2] makes them equal.  Hence $\eta$ is invariant. [F1, F2, F4, step 1.1]

3.1 Unique ergodicity gives $\eta=\mu$, but $$\int f\,d\eta_j=A_{n_j}f(x_j)$$ and the closed inequality in step 1.1 passes to the limit, contradicting $\int f\,d\eta=\int f\,d\mu$.  Thus $A_nf\to\int f\,d\mu$ uniformly for every $f$. [step 1.1, step 2.1, contradiction]

3.2 Conversely, assume all continuous averages converge uniformly to constants $c(f)$.  Fix $x_0\in K$ and form $\eta_n=n^{-1}\sum_{k<n}\delta_{T^kx_0}$.  By [F1], a subsequence has a continuous-test limit probability $\eta$.  The telescoping calculation of step 2.1 makes $\eta$ invariant, and uniform convergence gives $$\int f\,d\eta=\lim_rA_{n_r}f(x_0)=c(f).$$ [assume-hyp, F1, F2, step 2.1]

4.1 If $\rho$ is any invariant Borel probability, then [F3] gives $\int A_nf\,d\rho=\int f\,d\rho$.  Moreover [F5] gives $$\left|\int A_nf\,d\rho-c(f)\right|\leq\lVert A_nf-c(f)\rVert_\infty\longrightarrow0.$$ Hence $\int f\,d\rho=c(f)=\int f\,d\eta$ for every continuous real $f$.  By [F2], $\rho=\eta$.  Thus an invariant probability exists and is unique, and its integral is the asserted constant. [F2, F3, F5, step 3.2]

5.1 Steps 1.1–3.1 prove the forward implication and steps 3.2–4.1 prove the converse.  Countable choice is used precisely through [F1] and to select the failure witnesses in step 1.1; no stronger choice principle is invoked. [step 3.1, step 4.1] ∎
