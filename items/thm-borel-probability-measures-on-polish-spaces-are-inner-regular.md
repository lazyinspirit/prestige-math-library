---
id: thm-borel-probability-measures-on-polish-spaces-are-inner-regular
kind: theorem
title: "Assuming countable choice, Borel probability measures on Polish spaces are inner regular"
status: published
origin: pipeline
deps: [def-polish-space, def-probability-measure, def-borel-sigma-algebra, lem-countable-iff-surjection-from-n, def-metric-ball, def-totally-bounded, thm-metric-open-set-algebra, thm-continuity-from-below-for-measures, thm-finite-and-countable-subadditivity-of-measures, prop-measure-of-a-set-difference, thm-complete-subspace-iff-closed, thm-complete-and-totally-bounded-implies-compact, thm-dynkin-pi-lambda, def-countable-choice, def-compact-space]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
sources:
  references:
    - title: "Biskup, MATH 275D notes, Lemma 2.7"
      url: "https://math.ucla.edu/~biskup/275d.1.25f/PDFs/ch2.pdf"
---

## Statement

Assume countable choice. If $P$ is Polish and $\mu$ is a Borel probability measure on $P$, then for every Borel $A\subseteq P$ and $\varepsilon>0$ there is a compact $K\subseteq A$ with $\mu(A\setminus K)<\varepsilon$.

## Facts & Assumptions

**Given:** A complete separable metric presentation $(P,d)$, a Borel probability $\mu$, and $\varepsilon>0$.

[F1] A Polish space has a complete compatible metric and a countable dense set. ([[def-polish-space]])

[F2] Measures are continuous from below and countably subadditive. ([[thm-continuity-from-below-for-measures]], [[thm-finite-and-countable-subadditivity-of-measures]])

[F3] A closed totally bounded subset of a complete metric space is compact. ([[thm-complete-subspace-iff-closed]], [[thm-complete-and-totally-bounded-implies-compact]])

[F4] A lambda-system containing a pi-system contains the sigma-algebra it generates. ([[thm-dynkin-pi-lambda]])

## Proof

1.1 The empty $P$ is immediate, so suppose $P\ne\varnothing$ and enumerate a countable dense set as $(x_m)$. For each $r\ge1$, continuity from below chooses a finite union $U_r$ of $2^{-r-2}$-balls centered at the $x_m$ with $\mu(P\setminus U_r)<\varepsilon2^{-r-2}$. Countable choice makes these choices simultaneously. [F1, F2]

2.1 The set $K_0=\bigcap_r\overline{U_r}$ is closed. Countable subadditivity gives $\mu(P\setminus K_0)<\varepsilon/2$. For every scale, one of the finite closed-ball covers from step 1.1 covers $K_0$; choosing one point of $K_0$ from each nonempty member of that finite cover and doubling the radius gives a finite net with centres in $K_0$. Hence $K_0$ is totally bounded and [F3] makes it compact. [F2, F3, step 1.1]

3.1 Every open $G$ contains a compact $K\subseteq G$ losing less than $\varepsilon$: for $G=P$ use $K_0$; otherwise intersect $K_0$ with the increasing closed sets $\{x:d(x,P\setminus G)\ge1/n\}$. Their union is $K_0\cap G$, so [F2] gives one with the required loss. [F2, step 2.1]

4.1 Let $\mathcal R$ be the Borel sets which, for every $\delta>0$, have compact $K\subseteq A\subseteq G$ with $G$ open and $\mu(G\setminus K)<\delta$. Step 3.1 puts every open set in $\mathcal R$. The tight compact set from step 2.1 shows that complements remain in $\mathcal R$: from $K\subseteq A\subseteq G$, use $K_0\setminus G\subseteq P\setminus A\subseteq P\setminus K$ and bound the loss by $\mu(P\setminus K_0)+\mu(G\setminus K)$. [F2, step 2.1, step 3.1]

5.1 For pairwise disjoint $A_j\in\mathcal R$, continuity from below makes the measure of the tail of $\bigcup_jA_j$ arbitrarily small. A finite union of compact inner approximants handles that tail, while the union of the open outer approximants has loss bounded by the summable errors. Thus $\mathcal R$ is a lambda-system. Open sets are a pi-system generating the Borel sigma-algebra, so [F4] gives $\mathcal B(P)\subseteq\mathcal R$. The compact inner approximant for $A$ proves the statement. [F2, F4, step 4.1] ∎
