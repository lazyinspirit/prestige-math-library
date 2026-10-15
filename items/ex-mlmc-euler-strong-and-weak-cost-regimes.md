---
id: ex-mlmc-euler-strong-and-weak-cost-regimes
kind: example
title: "Euler strong, weak, and autonomous MLMC rate contracts"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 7
deps:
  - def-mlmc-hierarchy-and-coupled-corrections
  - cor-mlmc-euler-hms-autonomous-cost-rate
  - cor-mlmc-euler-finite-l2-and-weak-cost-rate
  - def-axiom-of-choice
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Michael B. Giles, Multilevel Monte Carlo Path Simulation, §§2–3"
      url: "https://people.maths.ox.ac.uk/gilesm/files/opre.pdf"
---

## Example

Set $T=1$, $M=2$, and write $\epsilon=2^{-k}$ for integers $k\to\infty$. Normalize the bias-rate constant to $C_b=1$ to display the level counts. Fix the state and Brownian dimensions, and count arithmetic operations, Brownian increment draws, coefficient evaluations, and payoff evaluations as unit work.

- The finite-$L^2$ strong route and the separate autonomous all-moment route both have $\alpha=\frac12$, $\beta=1$, and per-path-pair work exponent $\gamma=1$. The bias cutoff is met at $L=2k+O(1)$, so $h_L=2^{-L}=\Theta(\epsilon^2)$.
- Under the additional bounded-payoff backward-regularity contract, the finite-$L^2$ weak route has $\alpha=1$, with the same $\beta=\gamma=1$. The bias cutoff is met at $L=k+O(1)$, so $h_L=\Theta(\epsilon)$.

The two bias contracts therefore require different finest grids, but the same $\beta=\gamma$ case of the MLMC theorem gives $O(\epsilon^{-2}k^2)=O(\epsilon^{-2}(\log\epsilon^{-1})^2)$ work in each branch. The weak-rate branch is conditional on its stated backward regularity; it is not supplied by a Lipschitz payoff alone.

## Facts & Assumptions

**Given:** AC; the finite-$L^2$ SDE contract; the autonomous all-moment SDE contract; a globally Lipschitz payoff; fixed state and Brownian dimensions and the unit-cost work model above; and, for the weak branch only, the bounded-payoff backward regularity and moment hypotheses.

[F1] [[cor-mlmc-euler-hms-autonomous-cost-rate]]: the autonomous Higham–Mao–Stuart route keeps its exact all-moment premise and gives $(\alpha,\beta)=(1/2,1)$ and the logarithmic MLMC work bound under the stated work model.

[F2] [[cor-mlmc-euler-finite-l2-and-weak-cost-rate]]: the finite-$L^2$ strong branch gives $(\alpha,\beta)=(1/2,1)$; the additional backward-regularity branch gives $(\alpha,\beta)=(1,1)$. Both branches give the logarithmic MLMC work bound under the stated work model.

[F3] [[def-mlmc-hierarchy-and-coupled-corrections]]: the estimator uses geometrically refined meshes and independent level sample blocks.

[A1] AC is assumed by the two Euler rate contracts used in this comparison. [[def-axiom-of-choice]]

## Verification

1.1 With $\epsilon=2^{-k}$ and $C_b=T=1$, the bias cutoff $h_L^\alpha\le\epsilon/\sqrt2$ requires $L\ge\alpha^{-1}(k+\frac12)$. Thus the strong routes with $\alpha=\frac12$ use $L=2k+O(1)$, while the weak route with $\alpha=1$ uses $L=k+O(1)$. The meshes and level-block independence are those of [F3]. [A1, F1, F2, F3, given, algebra]

2.1 For $\ell\ge1$, the fine and coarse paths take $2^\ell$ and $2^{\ell-1}$ Euler steps. Summing pairs of fine Brownian increments forms the coarse increments in $O(2^\ell)$ operations. Under the stated fixed-dimension unit-cost model, the coupled sample therefore costs $O(2^\ell)=O(h_\ell^{-1})$; level zero takes one Euler step and also satisfies this bound. Thus $\gamma=1$ in every branch, while [F1]–[F2] give $\beta=1$ and the logarithmic MLMC work bound $O(\epsilon^{-2}(\log\epsilon^{-1})^2)=O(2^{2k}k^2)$. The change in $\alpha$ changes the finest mesh count but not this complexity regime. [A1, F1, F2, given, step 1.1, algebra] ∎
