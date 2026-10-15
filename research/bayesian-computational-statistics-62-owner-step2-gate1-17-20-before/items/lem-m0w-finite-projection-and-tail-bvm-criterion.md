---
id: lem-m0w-finite-projection-and-tail-bvm-criterion
kind: lemma
title: Finite-projection convergence and posterior tail control imply weak BvM
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-multiscale-coefficient-space-m0w
  - lem-m0w-separable-and-projection-tails
  - thm-continuity-from-above-for-measures
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Castillo and Nickl, On the Bernstein–von Mises phenomenon for nonparametric Bayes procedures, §5.4"
      url: https://arxiv.org/pdf/1310.2484
    - title: "Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, proof of Theorem 7.3.20"
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
---

## Statement

Let $Q_n$ be data-indexed probability measures on $M_0(w)$ and let $G$ be a fixed probability measure on this space. For the projections $P_J$ of [[lem-m0w-separable-and-projection-tails]], suppose that for every fixed $J$,
$$\beta_{BL}(Q_n\circ P_J^{-1},G\circ P_J^{-1})\to0$$
in probability, and that for every $\varepsilon,\eta>0$,
$$\lim_{J\to\infty}\limsup_{n\to\infty}P\left\{Q_n(\|x-P_Jx\|_{M(w)}>\varepsilon)>\eta\right\}=0.$$
Then $\beta_{BL}(Q_n,G)\to0$ in probability.

## Facts & Assumptions

**Given:** The $M_0(w)$ norm and projections, the bounded-Lipschitz metric, and the finite-projection and posterior-tail assumptions in the Statement.

[F1] [[def-multiscale-coefficient-space-m0w]]: $M_0(w)$ has the weighted supremum norm and consists of coefficient sequences whose normalized level maxima vanish.

[F2] [[lem-m0w-separable-and-projection-tails]]: $P_Jx\to x$ in $M_0(w)$ for every $x\in M_0(w)$.

[F3] [[thm-continuity-from-above-for-measures]]: if measurable sets decrease and the first has finite measure, their measures decrease to the measure of their intersection.

## Proof




1.1 For any probability measure $Q$ on $M_0(w)$ and any bounded $1$-Lipschitz function $h$, $|h(x)-h(P_Jx)|\le\min(2,\|x-P_Jx\|_{M(w)})$. Splitting at $\varepsilon>0$ and taking the supremum over such $h$ gives $\beta_{BL}(Q,Q\circ P_J^{-1})\le\varepsilon+2Q(\|x-P_Jx\|_{M(w)}>\varepsilon)$. Applying this to $Q_n$ and $G$, then using the triangle inequality, bounds $\beta_{BL}(Q_n,G)$ by the two projection errors and the fixed-$J$ distance between projected laws. [F1, given, algebra]

2.1 For each $x\in M_0(w)$, [F2] gives $\|x-P_Jx\|_{M(w)}\to0$. Thus the events $\{x:\|x-P_Jx\|_{M(w)}>\varepsilon\}$ decrease to the empty set, and [F3] makes their $G$-probabilities tend to zero. Given any target error, first choose $\varepsilon$ small, then choose $J$ large so this $G$-tail and the limiting posterior-tail probability are small; for that fixed $J$, the projected-law distance tends to zero in probability by assumption. Step 1.1 then implies $\beta_{BL}(Q_n,G)\to0$ in probability. [F2, F3, given, step 1.1, algebra] ∎
