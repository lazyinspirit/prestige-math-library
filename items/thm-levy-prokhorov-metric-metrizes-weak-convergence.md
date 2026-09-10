---
id: thm-levy-prokhorov-metric-metrizes-weak-convergence
kind: theorem
title: Levy prokhorov metric metrizes weak convergence
deps: ["lem-levy-prokhorov-distance-is-a-metric", "lem-countable-boundary-null-partitions-of-a-separable-metric-space", "thm-portmanteau-theorem", "thm-continuity-from-below-for-measures", "def-axiom-of-choice", "thm-continuity-from-above-for-measures"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, Theorem 4.2 and Lemma 4.3, pp. 10–12
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Assume AC. For Borel probabilities on a separable metric space, $\pi(\mu_n,\mu)\to0$ if and only if $\mu_n\Rightarrow\mu$. Completeness is not required.

## Facts & Assumptions

[F1] [[thm-portmanteau-theorem]]: For Borel probabilities $\mu_n,\mu$ on a metric space S, the following are equivalent: (i) $\mu_n\Rightarrow\mu$; (ii) integrals converge for all bounded uniformly continuous real tests; (iii) $\limsup_n\mu_n(F)\le\mu(F)$ for every closed F; (iv) $\liminf_n\mu_n(G)\ge\mu(G)$ for every open G; (v) $\mu_n(A)\to\mu(A)$ for every Borel A with $\mu(\partial A)=0$.

[F2] [[lem-countable-boundary-null-partitions-of-a-separable-metric-space]]: Assume AC. For a separable metric S with Borel probability $\mu$, there are countable refining Borel partitions $\mathcal P_k$ for $k\ge1$, all of whose nonempty atoms have diameter at most $2^{-k}$ and $\mu$-null boundary. Together these partitions generate $\mathcal B(S)$.

[F3] [[thm-continuity-from-below-for-measures]]: Let $(E_n)_{n\in\mathbb N}$ be an increasing sequence of measurable sets for a measure $\mu$, so $E_n\subseteq E_{n+1}$. Then

$$\mu\left(\bigcup_{n\in\mathbb N}E_n\right)=\sup_{n\in\mathbb N}\mu(E_n).$$

No finiteness hypothesis is required.

[F4] [[lem-levy-prokhorov-distance-is-a-metric]]: The closed-set definition of $\pi$ is a metric on Borel probabilities on any metric space, and $0\le\pi\le1$. It equals the infimum obtained by testing all Borel B and using open enlargements $B^\varepsilon=\{x:d(x,B)<\varepsilon\}$, with empty enlargement empty.

[F5] [[thm-continuity-from-above-for-measures]]: Let $(E_n)_{n\in\mathbb N}$ be a decreasing sequence of measurable sets for a measure $\mu$. If $\mu(E_{n_0})<+\infty$ for some $n_0$, then

$$\mu\left(\bigcap_{n\in\mathbb N}E_n\right)=\inf_{n\in\mathbb N}\mu(E_n).$$

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 The decreasing closed enlargements have finite mass, so F5 applies. If $\pi$ tends to zero, for any $\eta$>0 it is eventually less than $\eta$, so $\eta$ is admissible by the upward-closed admissibility set. Hence for closed F, $\limsup_n\mu_n(F)\le\mu(F^{[\eta]})+\eta$. Decreasing $\eta$ to zero makes the right-hand side tend to $\mu$(F), by finite measure continuity; for F empty the inequality is immediate. F1 proves weak convergence. [F1, F5]

1.2 Conversely suppose weak convergence. Fix $\varepsilon$>0 and choose $\delta$>0 with 3delta<$\varepsilon$. By F2, select a partition with atom diameters less than $\varepsilon$. Finitely many atoms $A_1,\ldots,A_m$ cover $\mu$ mass greater than 1-$\delta$, by F3. F1 gives convergence of each atom mass. Thus eventually $\sum_{i\le m}|\mu_n(A_i)-\mu(A_i)|<\delta$, and the complement of their union has $\mu_n$ mass below 2delta. [F1, F2, F3]

2.1 For any Borel B, let V be the union of those selected atoms meeting B. Then $V\subseteq B^\varepsilon$ and B is contained in V together with the uncovered complement. Step 1.2 gives $\mu_n(B)\le\mu_n(V)+2\delta\le\mu(V)+3\delta\le\mu(B^\varepsilon)+\varepsilon$. Similarly $\mu(B)\le\mu(V)+\delta\le\mu_n(V)+2\delta\le\mu_n(B^\varepsilon)+\varepsilon$. These bounds hold simultaneously for every B, so F4 gives $\pi$($\mu_n$,$\mu$)<=$\varepsilon$ eventually. Since $\varepsilon$ is arbitrary, $\pi$ tends to zero. [F4] ∎
